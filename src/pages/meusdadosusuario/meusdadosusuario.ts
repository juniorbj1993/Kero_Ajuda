import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-meusdadosusuario',
  templateUrl: 'meusdadosusuario.html',
})
export class MeusdadosusuarioPage {
  dadosusuario: any
  listadousuario: Array<any> = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.dadosusuario = this.navParams.get('dados');
    this.listadousuario.push(this.dadosusuario);
  }


}
