import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {ServicePds} from '../../auth.service';
// import {pds} from '../../users.model';

@IonicPage()
@Component({
  selector: 'page-detalheservico',
  templateUrl: 'detalheservico.html',
  // providers: [ServicePds]
})
export class DetalheservicoPage {
  // public prestador:pds[]


  constructor(public navCtrl: NavController, public navParams: NavParams ) {

  }
  titulo = this.navParams.get('detalheservico');


  SelecionarPessoa(p){
    // this.navCtrl.push(ServidorPage);
  }

  ionViewDidLoad() {

  }

}
