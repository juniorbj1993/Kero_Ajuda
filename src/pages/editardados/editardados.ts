import { CrudService } from './../../crud.service';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { usuario } from '../../users.model';


@IonicPage()
@Component({
  selector: 'page-editardados',
  templateUrl: 'editardados.html',
})
export class EditardadosPage {
  dados:string;
  public dadosusuario: usuario
  public id: string



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private crud: CrudService,
    private storage: Storage

    ) {
  }

  ionViewDidLoad() {
    this.dados = this.navParams.get('dados');
    console.log(this.dados);
    this.storage.get('userId')
    .then((resposta)=>{
      let telefone = '(88)99804-8587';
      let key = 'telefone';
      this.crud.update(resposta,telefone,key);
    })


  }


}
