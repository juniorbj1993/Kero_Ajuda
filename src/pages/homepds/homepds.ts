import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { pds } from './../../users.model';


@IonicPage()
@Component({
  selector: 'page-homepds',
  templateUrl: 'homepds.html',
})
export class HomepdsPage {

  public dadosusuario: Array <pds> = []
  Uid: string
  star: Array<object>;
  creditos: Array<any> = [{
    tel: '(88)99804-8587',
    creditos: '10'
  }];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public db: AngularFireDatabase) {}

  ionViewDidLoad() {
    this.storage.get('userId')
    .then((resposta)=>{
        this.db.database.ref(`PdsData/${resposta}`)
        .once('value')
        .then((snapshot: any)=>{
          snapshot.forEach((childSnapshot: any)=>{
              this.dadosusuario.push(childSnapshot.val())
          })
        })
        .catch((erro)=>{
          console.log(erro.code)
        })
      })
  }

  slides = [
    {
      title: "Qual a finalidade do Kero AJuda?",
      description: "Proporcionar facilidade e agilidade para conectar a mais completa plataforma de serviços especializados a quem precisar, criando uma relação sustentável e de confiança entre cliente e profissional.",
      image: "../../assets/imgs/logo_kero_ajuda.png",

    },
    {
      title: "Para Pensar!",
      description: "Inovação, produtos e serviços não existem! Até que você tome atitude e os faça existir. (Edilson Gomes de Lima)",
      image: "../../assets/imgs/logo_solta.png",
    }
  ];

}
