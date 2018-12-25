import { MeusdadosusuarioPage } from './../meusdadosusuario/meusdadosusuario';
import { MeusdadosPage } from './../meusdados/meusdados';
import { ContatoPage } from './../contato/contato';
import { HomepdsPage } from './../homepds/homepds';
import { Storage } from '@ionic/storage';
import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { DatePipe } from '@angular/common';



@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {
  dadosusuario: any;
  Uid: string
  rootPage: any;
  user_type_pds: boolean;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public afAuth: AngularFireAuth,
     public storage: Storage,
     public db: AngularFireDatabase,
     private datepipe: DatePipe,
     public loadingCtrl: LoadingController
     ) {

     
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: "Por favor aguarde..."
    });  
    loader.present();
    
    this.storage.get('userId')
    .then((resposta)=>{
      this.db.database.ref(`UserData/${resposta}`)
      .once('value')
      .then((snapshot: any)=>{
        snapshot.forEach((childSnapshot: any)=>{
          this.dadosusuario = childSnapshot.val();
          loader.dismiss();
          this.user_type_pds = false;
          
          this.rootPage = HomePage;
        })
      })
      .catch((erro)=>{
        loader.dismiss();
        console.log(erro.code)
      })

      this.db.database.ref(`PdsData/${resposta}`)
      .once('value')
      .then((snapshot: any)=>{
        snapshot.forEach((childSnapshot: any)=>{
          this.dadosusuario = childSnapshot.val()
            let data = this.datepipe.transform(new Date(),"dd"+"/"+"MM"+"/"+"yyyy"+","+" "+"HH"+":"+"mm" )
            loader.dismiss();
            this.user_type_pds = true;
            this.rootPage = HomepdsPage;
        })
      })
      .catch((erro)=>{
        loader.dismiss();
        console.log(erro.code)
      })

    })

  }

  openContactPage(){
    this.navCtrl.push(ContatoPage);
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
  meusDadosPage_User(){
    this.navCtrl.push(MeusdadosusuarioPage,{
      dados: this.dadosusuario
    });
  }
  termosDeUso(){

  }
  politicaDePrivacidade(){
    
  }

  

}
