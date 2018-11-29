import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPdsPage } from './../cadastro-pds/cadastro-pds';
import { CadastrousuarioPage } from './../cadastrousuario/cadastrousuario';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  cadastrarusuario(){
    this.navCtrl.push(CadastrousuarioPage);
  }
  cadastrarpds(){
    this.navCtrl.push(CadastroPdsPage);
  }

}
