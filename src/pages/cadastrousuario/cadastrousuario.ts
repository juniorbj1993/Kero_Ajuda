import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateConfirmPassword } from '../../validators/validatePassword';

import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import {usuario} from '../../users.model';





@IonicPage()
@Component({
  selector: 'page-cadastrousuario',
  templateUrl: 'cadastrousuario.html',
})
export class CadastrousuarioPage {
  private idUser: string


  registerform: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder: FormBuilder,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public afAuth: AngularFireAuth,
    private storage: Storage,
    public db: AngularFireDatabase,
    private dadosUser: usuario,

    ) {
    this.registerform = this.formbuilder.group({
      nome: [null,[Validators.required,Validators.minLength(6)]],
      telefone: [null,[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      cpf: [null,[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      nacionalidade: [null,[Validators.required,Validators.minLength(5)]],
      naturalidade: [null,[Validators.required,Validators.minLength(5)]],

      estado: [null,[Validators.required,Validators.minLength(2)]],
      cidade: [null,[Validators.required,Validators.minLength(2)]],
      rua: [null,[Validators.required,Validators.minLength(3)]],
      bairro: [null,[Validators.required,Validators.minLength(2)]],
      numero: [null,[Validators.required,Validators.minLength(1)]],
      email: [null,[Validators.required,Validators.email]],
      senha: [null,[Validators.required,Validators.minLength(8)]],
      confirmarsenha: [null,[Validators.required,Validators.minLength(8),ValidateConfirmPassword]]
    })




  }


  ionViewDidLoad() {


  }

  criarObjeto(){
    this.dadosUser.nome = this.registerform.value.nome;
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

    this.criarObjeto()
    this.afAuth.auth.createUserWithEmailAndPassword(this.registerform.value.email, this.registerform.value.senha)
      .then((resposta)=>{
        this.storage.set('userId',resposta.uid)
        this.storage.get('userId').
          then((valor)=>{
            this.idUser = valor
          })

        .then((resposta)=>{
          this.db.database.ref('/UserData').child(this.idUser).push(this.dadosUser)
          .then(()=>{
            const alert = this.alertCtrl.create({
              title: 'Bem vindo ao Kero Ajuda, '+ this.registerform.value.nome,
              subTitle: 'Sua conta foi criada com sucesso!',
              buttons: ['OK']
            });
            alert.present();
            this.navCtrl.pop();
          })

        })

      })
      .catch((error)=>{
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




}
