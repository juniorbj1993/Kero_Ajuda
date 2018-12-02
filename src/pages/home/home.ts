import { usuario } from './../../users.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database';




@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public dadosusuario: Array <usuario>
  Uid: string



  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public db: AngularFireDatabase
    ) {
  }

  ionViewDidLoad() {
    this.storage.get('userId')
    .then((resposta)=>{
      this.getListUsers(resposta)
      .then((resultado)=>{
        this.dadosusuario = resultado
      })

    })

  }

  getListUsers(iduser: string): Promise<any>{
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
        console.log(erro.code)
      })
    })

  }


}
