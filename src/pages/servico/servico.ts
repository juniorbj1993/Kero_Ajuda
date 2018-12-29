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
      nome_servico: "Serviços Domésticos",
    },
    {
      icone: "ios-flash-outline",
      nome_servico: "Serviços Elétricos",
      
    },
    {
      icone: "ios-water-outline",
      nome_servico: "Serviços Hidráulicos"
    },
    {
      icone: "ios-desktop-outline",
      nome_servico: "Informática"
    },
    {
      icone: "ios-hammer-outline",
      nome_servico: "Frete e Montagem"
    },
    {
      icone: "ios-construct-outline",
      nome_servico: "Construção Civil"
    },
    {
      icone: "ios-people-outline",
      nome_servico: "Serviços Diversos"
    }

  ]

}
