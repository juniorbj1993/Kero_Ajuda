
import { TermosepoliticaPage } from './../termosepolitica/termosepolitica';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateConfirmPassword } from '../../validators/validatePassword';

import { ToastController,AlertController, LoadingController } from 'ionic-angular';


import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {pds} from '../../users.model';

import {dadosRecaptcha} from '../../reCaptcha';

//para cadastrar servicos utiliza o model para o APP todo
import { Servicos } from '../../funcoes.model';



@IonicPage()
@Component({
  selector: 'page-cadastro-pds',
  templateUrl: 'cadastro-pds.html',
})
export class CadastroPdsPage {


  registerform: FormGroup;
  selected = null;
  captcha: boolean = false;
  sitekeycode = this.reCaptcha.key;



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
    public servicos: Servicos,
    private reCaptcha: dadosRecaptcha

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
                cssClass: "confirmacao_conta",
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
              position: 'top',
              cssClass:"toastError"
              });
              toast.present();
              this.registerform.value.email = null;
              this.registerform.value.senha = null;
              this.registerform.value.confirmarsenha = null;
              this.servicos.funcoes

          }else{
            const toast = this.toastCtrl.create({
              message: "Ocorreu um erro na solicitação!",
              duration: 5000,
              position: 'top',
              cssClass:"toastError"
              });
              toast.present();
          }
        })


  }

  cidades =[
    'Juazeiro do Norte',
    'Crato',
    'Barbalha'
  ]

  categoria =[
    'Construção Civil',
    'Trabalhador Doméstico',
    'Manutenção',
    'Serviços Diversos'
  ]


selectedCategoria(){
  this.selected = this.registerform.get('categoria').value
}




  verTermos(){
    this.navCtrl.push(TermosepoliticaPage);
  }
  resolved(captchaResponse: string) {
    if(captchaResponse == null){
      this.captcha = false;
    }
    if(captchaResponse != null){
      this.captcha = true;
    }
  }

  verificarAutenticidadedeCPF(){
    
  }

}
