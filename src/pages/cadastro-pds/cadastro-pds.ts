import { TermosepoliticaPage } from './../termosepolitica/termosepolitica';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateConfirmPassword } from '../../validators/validatePassword';

import { ToastController,AlertController, LoadingController } from 'ionic-angular';


import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {pds} from '../../users.model';



@IonicPage()
@Component({
  selector: 'page-cadastro-pds',
  templateUrl: 'cadastro-pds.html',
})
export class CadastroPdsPage {

  registerform: FormGroup;
  selected = null;
 
  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder: FormBuilder,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    private dadosPDS: pds,
    public loadingCtrl: LoadingController,

    ) {
      
    this.registerform = this.formbuilder.group({
      nome: [null,[Validators.required,Validators.minLength(2)]],
      sobrenome: [null,[Validators.required,Validators.minLength(6)]],
      telefone: [null,[Validators.required,Validators.minLength(14),Validators.maxLength(14)]],
      cpf: [null,[Validators.required,Validators.minLength(14),Validators.maxLength(14)]],
      rg: [null,[Validators.required,Validators.minLength(9),Validators.maxLength(13)]],
      datadenascimento:[null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      nacionalidade: [null,[Validators.required,Validators.minLength(1)]],
      naturalidade: [null,[Validators.required,Validators.minLength(1)]],
      funcao:[null,[Validators.required,Validators.minLength(1)]],
      categoria:[null],

      estado: [null,[Validators.required]],
      cidade: [null,[Validators.required]],
      rua: [null,[Validators.required]],
      bairro: [null,[Validators.required]],
      numero: [null,[Validators.required]],
      email: [null,[Validators.required,Validators.email]],
      senha: [null,Validators.compose([Validators.minLength(8),Validators.maxLength(20),Validators.required])],
      confirmarsenha: [null,[Validators.required,Validators.minLength(8),ValidateConfirmPassword]]
    })


  }
  


  ionViewDidLoad() {


  }
  

  criarObjeto(){
    this.dadosPDS.nome = this.registerform.value.nome;
    this.dadosPDS.sobrenome = this.registerform.value.sobrenome;
    this.dadosPDS.telefone = this.registerform.value.telefone;
    this.dadosPDS.cpf = this.registerform.value.cpf;
    this.dadosPDS.rg = this.registerform.value.rg;
    this.dadosPDS.datadenascimento = this.registerform.value.datadenascimento;
    this.dadosPDS.nacionalidade = this.registerform.value.nacionalidade;
    this.dadosPDS.naturalidade = this.registerform.value.naturalidade;
    this.dadosPDS.estado = this.registerform.value.estado;
    this.dadosPDS.cidade = this.registerform.value.cidade;
    this.dadosPDS.bairro = this.registerform.value.bairro;
    this.dadosPDS.rua = this.registerform.value.rua;
    this.dadosPDS.numero = this.registerform.value.numero;
    this.dadosPDS.email = this.registerform.value.email;
    this.dadosPDS.funcao = this.registerform.value.funcao;
  }




  registerUsers(){
      const loader = this.loadingCtrl.create({
        content: "Por favor aguarde...",
      });
      loader.present();
      this.criarObjeto()
      this.afAuth.auth.createUserWithEmailAndPassword(this.registerform.value.email, this.registerform.value.senha)
        .then((resposta)=>{
            this.db.database.ref('/PdsData').child(resposta.uid).push(this.dadosPDS)
            .then(()=>{
              loader.dismiss()
              const alert = this.alertCtrl.create({
                title: 'Bem vindo ao Kero Ajuda, '+ this.registerform.value.nome,
                subTitle: 'Sua conta foi criada com sucesso!',
                buttons: ['OK']
              });
              alert.present();
              this.navCtrl.pop();
            })
          })
                 
        .catch((error)=>{
          if (error.code == 'auth/email-already-in-use' ) {
              loader.dismiss()
              const toast = this.toastCtrl.create({
              message: "Email já cadastrado, digite outro Email!",
              duration: 5000,
              position: 'top'
              });
              toast.present();
              this.registerform.value.email = null;
              this.registerform.value.senha = null;
              this.registerform.value.confirmarsenha = null;
  
  
          }
        })

   
  }

  cidades =[
    'Juazeiro do Norte',
    'Crato',
    'Barbalha'
  ]

  funcoes = [
    'Chaveiro',
    'Diarista - Serviços de Limpeza',
    'Diarista - Lavar e Passar Roupas',
    'Diarista - Cozinhar Refeições',
    'Diarista - Cuidar de Criança',
    'Eletricista',
    'Encanador',
    'Frete',
    'Gesseiro',
    'Instalação de Suporte de TV',
    'Jardineiro',
    'Manutenção de Computadores',
    'Manutenção de Bicicletas',
    'Manutenção de Portão Automático',
    'Manutenção de Câmera de Vigilância',
    'Manutenção de Fogão a Gás',
    'Manutenção de Cadeira de Rodas',
    'Marceneiro',
    'Montagem de Móveis',
    'Pintor',
    'Pedreiro', 
    'Reposição de Vidro',
    'Reposição de Telhas'
  ]

  categoria =[
    'Construção Civil',
    'Diarista',
    'Instalação',
    'Manutenção',
    'Diversos',
    'Montagem',
    'Reposição'
  ]

  servicos= [
    {
      categoria:'Diversos',
      nome:'Chaveiro',
      id: 'Chaveiro'
    },
    {
      categoria:'Diarista',
      nome:'Serviços de Limpeza',
      id: 'Diarista - Serviços de Limpeza'
    },
    {
      categoria:'Diarista',
      nome:'Lavar e Passar Roupas',
      id: 'Diarista - Lavar e Passar Roupa'
    },
    {
      categoria:'Diarista',
      nome:'Cozinhar Refeições',
      id: 'Diarista - Cozinhar Refeições'
    },
    {
      categoria:'Diarista',
      nome:'Cuidar de Crianças',
      id: 'Diarista - Cuidar de Crianças'
    },
    {
      categoria:'Construção Civil',
      nome:'Eletricista',
      id: 'Eletricista'
    },
    {
      categoria:'Construção Civil',
      nome:'Encanador',
      id: 'Encanador'
    },
    {
      categoria:'Diversos',
      nome:'Frete',
      id: 'Frete'
    },
    {
      categoria:'Construção Civil',
      nome:'Gesseiro',
      id: 'Gesseiro'
    },
    {
      categoria:'Instalação',
      nome:'Suporte de TV',
      id: 'Instalação de Suporte de TV'
    },
    {
      categoria:'Diversos',
      nome:'Jardineiro',
      id: 'Jardineiro'
    },
    {
      categoria:'Manutenção',
      nome:'Computadores',
      id: 'Manutenção de Computadores'
    },
    {
      categoria:'Manutenção',
      nome:'Bicicletas',
      id: 'Manutenção de Bicicletas'
    },
    {
      categoria:'Manutenção',
      nome:'Portão Automático',
      id: 'Manutenção de Portão Automático'
    },
    {
      categoria:'Manutenção',
      nome:'Câmera de Vigilância',
      id: 'Manutenção de Câmera de Vigilância'
    },
    {
      categoria:'Manutenção',
      nome:'Fogão a Gás',
      id: 'Manutenção de Fogão a Gás'
    },
    {
      categoria:'Manutenção',
      nome:'Cadeira de Rodas',
      id: 'Manutenção de Cadeira de Rodas'
    },
    {
      categoria:'Diversos',
      nome:'Marceneiro',
      id: 'Marceneiro'
    },
    {
      categoria:'Montagem',
      nome:'Móveis',
      id: 'Montagem de Móveis'
    },
    {
      categoria:'Construção Civil',
      nome:'Pintor',
      id: 'Pintor'
    },
    {
      categoria:'Construção Civil',
      nome:'Pedreiro',
      id: 'Pedreiro'
    },
    {
      categoria:'Reposição',
      nome:'Vidro',
      id: 'Reposição de Vidro'
    },
    {
      categoria:'Reposição',
      nome:'Telhas',
      id: 'Reposição de Telhas'
    }
  ]
selectedCategoria(){
  this.selected = this.registerform.get('categoria').value
}
  



  verTermos(){
    this.navCtrl.push(TermosepoliticaPage);
  }
  
  
}
