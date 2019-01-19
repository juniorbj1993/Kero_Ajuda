import { Servicos } from './../../funcoes.model';
import { ListapdsPage } from './../pdsdados/listapds/listapds';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-detalheservico',
  templateUrl: 'detalheservico.html',

})
export class DetalheservicoPage {

  public dadospds: Array<any> = [];
  titulo: string;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dbpds: AngularFireDatabase,
    public loadingCtrl: LoadingController,
    public servicos: Servicos
    ) {

  }




  ionViewDidLoad() {
    const loader = this.loadingCtrl.create({
      content: "Aguarde por favor..."
    });
    loader.present();
    var pds_dados: Array<object> = []

    if(this.navParams.get('detalheservico')){
      this.titulo = this.navParams.get('detalheservico');
    }
    else{
      this.navCtrl.pop();
    }

    this.dbpds.database.ref(`PdsData`)
    .once("value").then((snapshot)=>{
      pds_dados = snapshot.val()
      for(let i in pds_dados){
        for (let j in pds_dados[i])
        this.dadospds.push(pds_dados[i][j])
      }
      loader.dismiss();
    }).catch((error)=>{
      loader.dismiss();
      alert(error);
    })

  }

  servicoSelected(servico_selected: string){
    this.navCtrl.push(ListapdsPage,{
      dados: servico_selected,
      dados_pds: this.dadospds
    });
  }

}
