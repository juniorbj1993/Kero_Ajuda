import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalheservicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalheservico',
  templateUrl: 'detalheservico.html',
})
export class DetalheservicoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
    titulo = this.navParams.get('detalheservico');

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheservicoPage');
  }

}
