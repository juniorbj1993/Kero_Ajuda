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
      nome_servico: "Diaristas",
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
  slides = [
    {
      description: "O Diarista realiza serviços domésticos tais como: faxinas e limpezas  de objetos e ambientes deixando os mesmos conservados. Cada diarista tem um método diferente de prestar seu serviço, por isso, procure saber qual prestador de serviço se encaixa à sua necessidade.",
    },
    {
      description: "Sempre que possível, dê sua avaliação ao prestador de serviço contratado, dessa forma você contribui para que os prestadores de serviços garantam serviços cada vez melhores. (Esse serviço estará disponível nas próximas atualizações).",
    }
  ];

}
