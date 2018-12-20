import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-meusdados',
  templateUrl: 'meusdados.html',
})
export class MeusdadosPage {
  dadosusuario: any
  listadousuario: Array<any> = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.dadosusuario = this.navParams.get('dados');
    this.listadousuario.push(this.dadosusuario);
    console.log(this.listadousuario)
  }

}
