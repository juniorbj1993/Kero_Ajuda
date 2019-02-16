import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoadingController, AlertController } from 'ionic-angular';
@Injectable()
export class CrudService {
  keydadosuser: string;

  constructor(
    public db: AngularFireDatabase,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    ) { }

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
                console.error(error);
              });
          })
      })
      .catch(()=>{
        loader.dismiss();
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
                console.error(error);
              });
          })
      })
      .catch(()=>{
        loader.dismiss();
      })
    }







  }

  // getAll() {

  // }

  // delete(key: string) {
  //   this.db.object(`contato/${key}`).remove();
  // }

}
