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

  botoes = [
    {
      imagem: "../../assets/imgs/logo_solta.png",
      nome_servico: "Serviços Domésticos"
    },
    {
      imagem: "../../assets/imgs/logo_solta.png",
      nome_servico: "Serviços Elétricos"
    },
    {
      imagem: "../../assets/imgs/logo_solta.png",
      nome_servico: "Serviços Hidráulicos"
    },
    {
      imagem: "../../assets/imgs/logo_solta.png",
      nome_servico: "Informática"
    },
    {
      imagem: "../../assets/imgs/logo_solta.png",
      nome_servico: "Frete e montagem"
    },
    {
      imagem: "../../assets/imgs/logo_solta.png",
      nome_servico: "Pintor"
    },
    {
      imagem: "../../assets/imgs/logo_solta.png",
      nome_servico: "Pedreiro"
    }
  ]

}
