import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { pds } from './../../users.model';


@IonicPage()
@Component({
  selector: 'page-homepds',
  templateUrl: 'homepds.html',
})
export class HomepdsPage {
  public dadosusuario: Array <pds> = []
  Uid: string

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public db: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.storage.get('userId')
    .then((resposta)=>{
        this.db.database.ref(`PdsData/${resposta}`)
        .once('value')
        .then((snapshot: any)=>{
          let dados: Array<any> = []
          snapshot.forEach((childSnapshot: any)=>{
              this.dadosusuario.push(childSnapshot.val())
          })
        })
        .catch((erro)=>{
          console.log(erro.code)
        })
      })
  }

}
