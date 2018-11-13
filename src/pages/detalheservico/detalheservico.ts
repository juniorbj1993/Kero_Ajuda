import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServiceServidores} from '../../servidores.service';
import {Servidores} from '../../servidores.model';

@IonicPage()
@Component({
  selector: 'page-detalheservico',
  templateUrl: 'detalheservico.html',
  providers: [ServiceServidores]
})
export class DetalheservicoPage {
  public servidor:Servidores[]


  constructor(public navCtrl: NavController, public navParams: NavParams, private serviceservidor: ServiceServidores ) {

  }
  titulo = this.navParams.get('detalheservico');


  SelecionarPessoa(p){
    // this.navCtrl.push(ServidorPage);
  }

  ionViewDidLoad() {
    this.servidor = this.serviceservidor.getServidores();


  }

}
