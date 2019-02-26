import { ConfiguracoesPage } from './../configuracoes/configuracoes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrousuarioPage } from './../cadastrousuario/cadastrousuario';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {AngularFireAuth} from 'angularfire2/auth';
import { CadastroPdsPage } from '../cadastro-pds/cadastro-pds';
import { LoadingController } from 'ionic-angular';
import { ResetarsenhaPage } from '../resetarsenha/resetarsenha';
import {networkVerify} from '../../network.service'


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  loginForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formbuider: FormBuilder,
    public storage: Storage,
    private afAuth: AngularFireAuth,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public connection: networkVerify


    ) {

      this.loginForm = this.formbuider.group({
        email: [null,[Validators.required, Validators.email]],
        senha: [null,[Validators.required, Validators.minLength(8)]]
      })
  }


  ionViewDidLoad() {
    this.connection.connected()
    this.connection.disconnected()
    
  }

  login(){

    const loader = this.loadingCtrl.create({
      content: "Aguarde por favor..."
    });
    loader.present();
    this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.value.email,this.loginForm.value.senha)
      .then((resposta)=>{
        this.storage.set('userId',resposta.uid)
          .then(()=>{
            loader.dismiss();
            this.navCtrl.setRoot(ConfiguracoesPage);
          })
      })
      .catch((erro)=>{
        loader.dismiss()
        if(erro.code == 'auth/wrong-password' || erro.code ==  'auth/user-not-found' ){
          const toast = this.toastCtrl.create({
            message: "Credenciais incorretas, tente novamente!",
            duration: 5000,
            position: 'top',
            cssClass:"toastError"
            });
            toast.present();
        }
      })


  }
  cadastrarusuario(){
    this.navCtrl.push(CadastrousuarioPage);
  }
  cadastrarpds(){
    this.navCtrl.push(CadastroPdsPage);
  }
  esqueceuSenha(){
    this.navCtrl.push(ResetarsenhaPage);

  }




}
