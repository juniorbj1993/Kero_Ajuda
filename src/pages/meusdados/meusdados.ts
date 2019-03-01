import { CrudService } from './../../crud.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditardadosPage } from '../editardados/editardados';
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { pds } from '../../users.model';

@IonicPage()
@Component({
  selector: 'page-meusdados',
  templateUrl: 'meusdados.html',
})
export class MeusdadosPage {
  dadosusuario: any
  listadousuario: Array<pds>
  public usuario = 'PDS'

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public db: AngularFireDatabase,
    private crud: CrudService
    ) {
  }

  ionViewDidLoad() {
    this.storage.get('userId')
    .then((resposta)=>{
      this.crud.getListPDS(resposta)
      .then((resultado)=>{
        this.listadousuario = resultado
      })

    })
  }
  editar(dados){
    this.navCtrl.push(EditardadosPage,{dados, usuario: this.usuario})
  }



}
