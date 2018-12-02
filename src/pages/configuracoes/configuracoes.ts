import { Storage } from '@ionic/storage';
import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

  rootPage = HomePage

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public afAuth: AngularFireAuth,
     public storage: Storage
     ) {
  }

  ionViewDidLoad() {
  }
  openHomePage(){

    this.navCtrl.popToRoot();

  }
  openContactPage(){

  }
  openAboutPage(){

  }
  meusDadosPage(){

  }

  logout(){
      this.afAuth.auth.signOut()
      .then((resultado)=>{
        this.storage.remove('userId')
        .then((resultado)=>{
          this.navCtrl.setRoot(LoginPage)
        })

      })
  }

}
