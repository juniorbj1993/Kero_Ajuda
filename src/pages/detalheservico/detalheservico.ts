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
      categoria: "Serviços Diversos",
      nome_do_servico: "Chaveiro"
    },
    {
      categoria: "Diaristas",
      nome_do_servico: "Diarista - Serviços de Limpeza"
    },
    {
      categoria: "Diaristas",
      nome_do_servico: "Diarista - Lavar e Passar Roupas"
    },
    {
      categoria: "Diaristas",
      nome_do_servico: "Diarista - Cozinhar Refeições"
    },
    {
      categoria: "Diaristas",
      nome_do_servico: "Diarista - Cuidar de Criança"
    },
    {
      categoria: "Construção Civil",
      nome_do_servico: "Eletricista"
    },
    {
      categoria: "Construção Civil",
      nome_do_servico: "Encanador"
    },
    {
      categoria: "Frete e Montagem",
      nome_do_servico: "Frete"
    },
    {
      categoria: "Construção Civil",
      nome_do_servico: "Gesseiro"
    },
    {
      categoria: "Serviços Diversos",
      nome_do_servico: "Instalação de Suporte de TV"
    },
    {
      categoria: "Serviços Diversos",
      nome_do_servico: "Jardineiro"
    },
    {
      categoria: "Serviços Diversos",
      nome_do_servico: "Manutenção de Bicicletas"
    },
    {
      categoria: "Serviços Diversos",
      nome_do_servico: "Manutenção de Cadeira de Rodas"
    },
    {
      categoria: "Serviços Diversos",
      nome_do_servico: "Manutenção de Câmera de Vigilância"
    },
    {
      categoria: "Serviços Diversos",
      nome_do_servico: "Manutenção de Computadores"
    },
    {
      categoria: "Serviços Diversos",
      nome_do_servico: "Manutenção de Fogão a Gás"
    },
    {
      categoria: "Serviços Diversos",
      nome_do_servico: "Manutenção de Portão Automático"
    },
    {
      categoria: "Serviços Diversos",
      nome_do_servico: "Marceneiro"
    },
    {
      categoria: "Frete e Montagem",
      nome_do_servico: "Montagem de Móveis"
    },
    {
      categoria: "Construção Civil",
      nome_do_servico: "Pedreiro"
    },
    {
      categoria: "Construção Civil",
      nome_do_servico: "Pintor"
    }
    ,{
      categoria: "Serviços Diversos",
      nome_do_servico: "Reposição de Telhas"
    },
    {
      categoria: "Serviços Diversos",
      nome_do_servico: "Reposição de Vidro"
    },
    {
      categoria: "Serviços Diversos",
      nome_do_servico: "Suporte de TV"
    }
    
  ]

  servicoSelected(servico_selected: string){
    
    
    this.navCtrl.push(ListapdsPage,{
      dados: servico_selected,
      dados_pds: this.dadospds
    });
  }

}
