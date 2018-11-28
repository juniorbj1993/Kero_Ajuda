import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarPage } from '../cadastrar/cadastrar';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  cadastrar(){
    this.navCtrl.push(CadastrarPage);
  }
}
