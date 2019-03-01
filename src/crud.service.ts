import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoadingController, AlertController, ToastController } from 'ionic-angular';
import { usuario } from './users.model';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase'
@Injectable()
export class CrudService {
  keydadosuser: string;



  constructor(
    private db: AngularFireDatabase,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private fb: FirebaseApp
    ) {

     }

  // insert(dado: string) {

  // }

  update(id:string,dado: object,usertype: string) {
    let loader = this.loadingCtrl.create({
      content: "Por favor aguarde..."
    });
    loader.present();
    if(usertype=='USER'){
      this.db.database.ref('UserData/').child(id).once('value')
      .then((snapshot)=>{
          snapshot.forEach((childSnapshot: any)=>{
              this.keydadosuser = childSnapshot.key;
              this.db.database.ref(`UserData/${id}/${this.keydadosuser}`)
              .update(dado)
              .then((resposta)=>{
                loader.dismiss();
                const alert = this.alertCtrl.create({
                  subTitle: 'Alteração realizada com sucesso! Os dados serão recarregados após retornar à pagina inicial!',
                  buttons: ['OK']
                });
                alert.present();
              })

              .catch((error: any) => {
                loader.dismiss();
                const toast = this.toastCtrl.create({
                  message: "Ocorreu um erro na solicitação!",
                  duration: 5000,
                  position: 'top',
                  cssClass:"toastError"
                  });
                  toast.present();
              });
          })
      })
      .catch(()=>{
        loader.dismiss();
        const toast = this.toastCtrl.create({
          message: "Ocorreu um erro na solicitação!",
          duration: 5000,
          position: 'top',
          cssClass:"toastError"
          });
          toast.present();
      })
    }
    if(usertype =='PDS'){
      this.db.database.ref('PdsData/').child(id).once('value')
      .then((snapshot)=>{
          snapshot.forEach((childSnapshot: any)=>{
              this.keydadosuser = childSnapshot.key;
              this.db.database.ref(`PdsData/${id}/${this.keydadosuser}`)
              .update(dado)
              .then((resposta)=>{
                loader.dismiss();
                const alert = this.alertCtrl.create({
                  subTitle: 'Alteração realizada com sucesso! Os dados serão recarregados após retornar à pagina inicial!',
                  buttons: ['OK']
                });
                alert.present();
              })

              .catch((error: any) => {
                loader.dismiss();
                const toast = this.toastCtrl.create({
                  message: "Ocorreu um erro na solicitação!",
                  duration: 5000,
                  position: 'top',
                  cssClass:"toastError"
                  });
                  toast.present();
              });
          })
      })
      .catch(()=>{
        loader.dismiss();
        const toast = this.toastCtrl.create({
          message: "Ocorreu um erro na solicitação!",
          duration: 5000,
          position: 'top',
          cssClass:"toastError"
          });
          toast.present();
      })
    }







  }

  getListUser(iduser: string): Promise<any>{
    return new Promise((resolve, reject)=>{
      this.db.database.ref(`UserData/${iduser}`)
      .once('value')
      .then((snapshot: any)=>{
        let dados: Array<any> = []
        snapshot.forEach((childSnapshot: any)=>{
            let dadosUsuario: usuario = childSnapshot.val()
            dados.push(dadosUsuario)
        })
        resolve(dados)
      })
      .catch((erro)=>{
        const toast = this.toastCtrl.create({
          message: "Ocorreu um erro na solicitação!",
          duration: 5000,
          position: 'top',
          cssClass:"toastError"
          });
          toast.present();
      })
    })
  }
  getListPDS(iduser: string): Promise<any>{
    return new Promise((resolve, reject)=>{
      this.db.database.ref(`PdsData/${iduser}`)
      .once('value')
      .then((snapshot: any)=>{
        let dados: Array<any> = []
        snapshot.forEach((childSnapshot: any)=>{
            let dadosUsuario: usuario = childSnapshot.val()
            dados.push(dadosUsuario)
        })
        resolve(dados)
      })
      .catch((erro)=>{
        const toast = this.toastCtrl.create({
          message: "Ocorreu um erro na solicitação!",
          duration: 5000,
          position: 'top',
          cssClass:"toastError"
          });
          toast.present();
      })
    })
  }

  // getAll() {

  // }

  // delete(key: string) {
  //   this.db.object(`contato/${key}`).remove();
  // }

  uploadandSaveImage(iduser: string, img:any){
    let storageRef = this.fb.storage().ref()
    let uploadtask = storageRef.child(`userImg/${iduser}`).putString(img, 'data_url')
    uploadtask.on(firebase.storage.TaskEvent.STATE_CHANGED,(snapshot: any)=>{
      const toast = this.toastCtrl.create({
        message: "Fazendo upload da imagem, aguarde...",
        duration: 3000,
        position: 'bottom',
        cssClass:"toastOK"
        });
        toast.present();
    },(error)=>{
      const toast = this.toastCtrl.create({
        message: "Ocorreu um erro!",
        duration: 5000,
        position: 'top',
        cssClass:"toastError"
        });
        toast.present();
    },()=>{
      let url = uploadtask.snapshot.downloadURL;
      let userType = 'PDS';
      let dado = {
        img: url
      }
      this.update(iduser,dado,userType);
    })

  }


}
