import { EditardadosPage } from './../editardados/editardados';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { usuario } from '../../users.model';
import { AngularFireDatabase } from 'angularfire2/database';
import {CrudService} from '../../crud.service';




@IonicPage()
@Component({
  selector: 'page-meusdadosusuario',
  templateUrl: 'meusdadosusuario.html',
})
export class MeusdadosusuarioPage {
  public listadousuario: usuario;
  Uid: string;
  public usuario = 'USER'

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
      this.crud.getListUser(resposta)
      .then((resultado)=>{
        this.listadousuario = resultado
      })

    })
  }
  editar(dados){
    this.navCtrl.push(EditardadosPage,{dados,usuario: this.usuario})
  }



}
