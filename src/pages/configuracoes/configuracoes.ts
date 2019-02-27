import { MeusdadosusuarioPage } from './../meusdadosusuario/meusdadosusuario';
import { MeusdadosPage } from './../meusdados/meusdados';
import { ContatoPage } from './../contato/contato';
import { HomepdsPage } from './../homepds/homepds';
import { Storage } from '@ionic/storage';
import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { TermosepoliticaPage } from './../termosepolitica/termosepolitica';



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
     public loadingCtrl: LoadingController,
     public toastCtrl: ToastController
     ) {


  }

  ionViewDidLoad() {

    let loader = this.loadingCtrl.create({
      content: "Por favor aguarde..."
    });
    loader.present();
    //buscar dados de usuário
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
        const toast = this.toastCtrl.create({
          message: "Ocorreu um erro na solicitação!",
          duration: 5000,
          position: 'top',
          cssClass:"toastError"
          });
          toast.present();
      })

      this.db.database.ref(`PdsData/${resposta}`)
      .once('value')
      .then((snapshot: any)=>{
        snapshot.forEach((childSnapshot: any)=>{
          this.dadosusuario = childSnapshot.val()
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

      }).catch(()=>{
        alert('Deu erro')
      })
  }
  meusDadosPage_User(){
    this.navCtrl.push(MeusdadosusuarioPage);
  }
  termosDeUso(){

  }
  politicaDePrivacidade(){

  }
  verTermos(){
    this.navCtrl.push(TermosepoliticaPage);
  }



}
