import { pds } from './../../../users.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhepdsPage } from '../detalhepds/detalhepds';



@IonicPage()
@Component({
  selector: 'page-listapds',
  templateUrl: 'listapds.html',
})
export class ListapdsPage {
  servico: string
  pds_dados: Array<object>
  dadosfiltrados: Array<object>;
  searchQueryCidade = '';
  searchQueryBairro = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,

    ) {
  }

  ionViewDidLoad() {
    if(this.navParams.get('dados') && this.navParams.get('dados_pds')){
      this.servico = this.navParams.get('dados');
      this.pds_dados = this.navParams.get('dados_pds');
      this.initializeItems();
    }
    else{
      this.navCtrl.pop();
    }
  }

  detalharPds(pds: pds){
    this.navCtrl.push(DetalhepdsPage,{
      dadospds: pds
    })
  }
  initializeItems() {
    this.dadosfiltrados = this.pds_dados;

  }
  searchBairro(ev){

    // set val to the value of the ev target
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.dadosfiltrados = this.dadosfiltrados.filter((item) => {
        return (item.bairro.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  searchCidade(ev){
      // set val to the value of the ev target
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.dadosfiltrados = this.dadosfiltrados.filter((item) => {
        return (item.cidade.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  resetarPesquisa(){
    this.initializeItems();
    this.searchQueryCidade = '';
    this.searchQueryBairro = '';
  }


}
