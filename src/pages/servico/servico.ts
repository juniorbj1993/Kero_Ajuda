import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetalheservicoPage} from '../detalheservico/detalheservico';
/**
 * Generated class for the ServicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servico',
  templateUrl: 'servico.html',
})
export class ServicoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicoPage');
  }
  irParaPagDetalheServico(nome:String){
    this.navCtrl.push(DetalheservicoPage,{
      detalheservico: nome
    });
  }

}
