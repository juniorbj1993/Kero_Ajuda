import { MeusdadosPage } from './../meusdados/meusdados';
import { ContatoPage } from './../contato/contato';
import { HomepdsPage } from './../homepds/homepds';
import { Storage } from '@ionic/storage';
import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { DatePipe } from '@angular/common';


@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {
  public dadosusuario: any;
  Uid: string
  rootPage: any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public afAuth: AngularFireAuth,
     public storage: Storage,
     public db: AngularFireDatabase,
     private datepipe: DatePipe
     ) {
  }

  ionViewDidLoad() {
    this.storage.get('userId')
    .then((resposta)=>{
      this.db.database.ref(`UserData/${resposta}`)
      .once('value')
      .then((snapshot: any)=>{
        snapshot.forEach((childSnapshot: any)=>{
          this.dadosusuario = childSnapshot.val()
           console.log('logado como Usuario')
            this.rootPage = HomePage;
        })
      })
      .catch((erro)=>{
        console.log(erro.code)
      })

      this.db.database.ref(`PdsData/${resposta}`)
      .once('value')
      .then((snapshot: any)=>{
        snapshot.forEach((childSnapshot: any)=>{
          this.dadosusuario = childSnapshot.val()
            console.log('logado como PDS')
            let data = this.datepipe.transform(new Date(),"dd"+"/"+"MM"+"/"+"yyyy"+","+" "+"HH"+":"+"mm" )
            console.log(data);
            this.rootPage = HomepdsPage;
        })
      })
      .catch((erro)=>{
        console.log(erro.code)
      })

    })

  }

  openContactPage(){
    this.navCtrl.push(ContatoPage);
  }
  openAboutPage(){

  }
  meusDadosPage(){
    this.navCtrl.push(MeusdadosPage,{
      dados: this.dadosusuario
    });
  }

  logout(){
      this.afAuth.auth.signOut()
      .then((resultado)=>{
        this.storage.remove('userId')
        this.storage.remove('userType')
        .then((resultado)=>{
          this.navCtrl.setRoot(LoginPage);
        })

      })
  }

}
