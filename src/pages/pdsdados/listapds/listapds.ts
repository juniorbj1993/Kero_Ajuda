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
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    
    ) {
  }

  ionViewDidLoad() {
    if(this.navParams.get('dados') && this.navParams.get('dados_pds')){
      this.servico = this.navParams.get('dados');
      this.pds_dados = this.navParams.get('dados_pds');
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

}
