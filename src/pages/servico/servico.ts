import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetalheservicoPage} from '../detalheservico/detalheservico';

@IonicPage()
@Component({
  selector: 'page-servico',
  templateUrl: 'servico.html',
})
export class ServicoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


  ionViewDidLoad() {

  }
  irParaPagDetalheServico(nome:String){
    this.navCtrl.push(DetalheservicoPage,{
      detalheservico: nome
    });
  }

  botoes = [
    {
      icone: "ios-alarm-outline",
      nome_servico: "Trabalhador Doméstico",
    },
    {
      icone: "ios-construct-outline",
      nome_servico: "Construção Civil"
    },
    {
      icone: "ios-construct-outline",
      nome_servico: "Manutenção"
    },
    {
      icone: "ios-people-outline",
      nome_servico: "Serviços Diversos"
    }
  ]
  slides = [
    {
      imagem: '../../assets/imgs/slides/LOGO3D.png'
    }
  ]

}
