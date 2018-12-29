import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateConfirmPassword } from '../../validators/validatePassword';

import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {usuario} from '../../users.model';








@IonicPage()
@Component({
  selector: 'page-cadastrousuario',
  templateUrl: 'cadastrousuario.html',
})
export class CadastrousuarioPage {

  registerform: FormGroup;
 

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder: FormBuilder,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    private dadosUser: usuario,
    public loadingCtrl: LoadingController

    ) {
    this.registerform = this.formbuilder.group({
      nome: [null,[Validators.required,Validators.minLength(2)]],
      sobrenome: [null,[Validators.required,Validators.minLength(6)]],
      telefone: [null,[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      cpf: [null,[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      nacionalidade: [null,[Validators.required,Validators.minLength(5)]],
      naturalidade: [null,[Validators.required,Validators.minLength(5)]],

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
    this.dadosUser.nome = this.registerform.value.nome;
    this.dadosUser.sobrenome = this.registerform.value.sobrenome;
    this.dadosUser.telefone = this.registerform.value.telefone;
    this.dadosUser.cpf = this.registerform.value.cpf;
    this.dadosUser.nacionalidade = this.registerform.value.nacionalidade;
    this.dadosUser.naturalidade = this.registerform.value.naturalidade;
    this.dadosUser.estado = this.registerform.value.estado;
    this.dadosUser.cidade = this.registerform.value.cidade;
    this.dadosUser.bairro = this.registerform.value.bairro;
    this.dadosUser.rua = this.registerform.value.rua;
    this.dadosUser.numero = this.registerform.value.numero;
    this.dadosUser.email = this.registerform.value.email;
  }



  registerUsers(){
    const loader = this.loadingCtrl.create({
      content: "Aguarde por favor...",
    });
    loader.present();
    this.criarObjeto()
    this.afAuth.auth.createUserWithEmailAndPassword(this.registerform.value.email, this.registerform.value.senha)
      .then((resposta)=>{
          this.db.database.ref('/UserData').child(resposta.uid).push(this.dadosUser)
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
        loader.dismiss()
        if (error.code == 'auth/email-already-in-use' ) {
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
  cidades=[
    'Juazeiro do Norte',
    'Crato',
    'Barbalha'
  ]


}
