import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-detalhepds',
  templateUrl: 'detalhepds.html',
})
export class DetalhepdsPage {
dados_pds: Array<object>=[];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams
    ) {}

  ionViewDidLoad() {
    if(this.navParams.get('dadospds')){
      var pds_temp = this.navParams.get('dadospds');
      delete pds_temp.cpf;
      delete pds_temp.rg;
      delete pds_temp.cidade;
      delete pds_temp.estado;
      delete pds_temp.rua;
      delete pds_temp.numero;
      delete pds_temp.nacionalidade;
      delete pds_temp.naturalidade;
      delete pds_temp.pagamento;
      delete pds_temp.bairro;

      this.dados_pds.push(pds_temp)
    }
    else{
      this.navCtrl.pop();
    }
  }
  irParaWhats(telefone){
    window.open(`https://api.whatsapp.com/send?phone=55${telefone}&text=Sou%20usuário%20do%20kero%20Ajuda%20e%20gostaria%20de%20solicitar%20seus%20serviços.`, '_blank', 'location=yes');
  }
}
