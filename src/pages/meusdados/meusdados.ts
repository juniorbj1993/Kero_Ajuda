import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditardadosPage } from '../editardados/editardados';
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { usuario } from '../../users.model';

@IonicPage()
@Component({
  selector: 'page-meusdados',
  templateUrl: 'meusdados.html',
})
export class MeusdadosPage {
  dadosusuario: any
  listadousuario: Array<usuario>
  public usuario = 'PDS'

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public db: AngularFireDatabase
    ) {
  }

  ionViewDidLoad() {
    this.storage.get('userId')
    .then((resposta)=>{
      this.getListUsers(resposta)
      .then((resultado)=>{
        this.listadousuario = resultado
      })

    })
  }
  editar(dados){
    this.navCtrl.push(EditardadosPage,{dados, usuario: this.usuario})
  }

  getListUsers(iduser: string): Promise<any>{
    return new Promise((resolve, reject)=>{
      this.db.database.ref(`PdsData/${iduser}`)
      .once('value')
      .then((snapshot: any)=>{
        let dados: Array<any> = []
        snapshot.forEach((childSnapshot: any)=>{
            let dadosUsuario: usuario = childSnapshot.val()
            dados.push(dadosUsuario)
        })
        resolve(dados)
      })
      .catch((erro)=>{
        console.log(erro.code)
      })
    })

  }

}
