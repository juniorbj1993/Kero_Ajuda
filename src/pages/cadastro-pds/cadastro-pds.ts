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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder: FormBuilder,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    private dadosPDS: pds,
    public loadingCtrl: LoadingController

    ) {
      
    this.registerform = this.formbuilder.group({
      nome: [null,[Validators.required,Validators.minLength(2)]],
      sobrenome: [null,[Validators.required,Validators.minLength(6)]],
      telefone: [null,[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      cpf: [null,[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      rg: [null,[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      datadenascimento:[null,[Validators.required,Validators.minLength(5)]],
      nacionalidade: [null,[Validators.required,Validators.minLength(1)]],
      naturalidade: [null,[Validators.required,Validators.minLength(1)]],
      funcao:[null,[Validators.required,Validators.minLength(1)]],

      estado: [null,[Validators.required]],
      cidade: [null,[Validators.required]],
      rua: [null,[Validators.required]],
      bairro: [null,[Validators.required]],
      numero: [null,[Validators.required]],
      email: [null,[Validators.required,Validators.email]],
      senha: [null,[Validators.required,Validators.minLength(8)]],
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
    this.dadosPDS.estrelas = {uma: 0, duas: 0, tres: 0};
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

 


}
