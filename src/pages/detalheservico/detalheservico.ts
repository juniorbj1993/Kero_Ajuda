import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {pds} from '../../users.model';

@IonicPage()
@Component({
  selector: 'page-detalheservico',
  templateUrl: 'detalheservico.html',
  
})
export class DetalheservicoPage {

titulo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams ) {

  }
  



  ionViewDidLoad() {
    if(this.navParams.get('detalheservico')){
      this.titulo = this.navParams.get('detalheservico');
    }
    else{
      this.navCtrl.pop();
    }
    
  }

}
