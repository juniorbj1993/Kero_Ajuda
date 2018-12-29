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
  public 
  titulo: string;
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public dbpds: AngularFireDatabase,
    public loadingCtrl: LoadingController
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

  servicos = [
    {
      categoria: "Serviços Domésticos",
      nome_do_servico: "Diarista"
    },
    {
      categoria: "Serviços Elétricos",
      nome_do_servico: "Eletricista"
    },
    {
      categoria: "Serviços hidráulicos",
      nome_do_servico: "Encanador"
    },
    {
      categoria: "Informática",
      nome_do_servico: "Manutenção de Computadores"
    },
    {
      categoria: "Frete e Montagem",
      nome_do_servico: "Frete"
    },
    {
      categoria: "Frete e Montagem",
      nome_do_servico: "Montagem de Móveis"
    },
    {
      categoria: "Construção Civil",
      nome_do_servico: "Pintor"
    },
    {
      categoria: "Construção Civil",
      nome_do_servico: "Pedreiro"
    },
    {
      categoria: "Construção Civil",
      nome_do_servico: "Gesseiro"
    },
    {
      categoria: "Serviços Diversos",
      nome_do_servico: "Jardineiro"
    }
  ]

  servicoSelected(servico_selected: string){
    
    
    this.navCtrl.push(ListapdsPage,{
      dados: servico_selected,
      dados_pds: this.dadospds
    });
  }

}
