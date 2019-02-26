import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-resetarsenha',
  templateUrl: 'resetarsenha.html',
})
export class ResetarsenhaPage {
  registerform: FormGroup;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder: FormBuilder,
    private afAuth: AngularFireAuth,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
    ) {
      this.registerform = this.formbuilder.group({
        email: [null,[Validators.required,Validators.email]]
      })

  }

  ionViewDidLoad() {

  }
  resetSenha(){
    const loader = this.loadingCtrl.create({
      content: "Por favor aguarde...",
    });
    loader.present();
    this.afAuth.auth.sendPasswordResetEmail(this.registerform.get('email').value)
    .then(()=>{
      loader.dismiss();
      const alert = this.alertCtrl.create({
        subTitle: 'Link para resetar senha enviado para seu email!',
        cssClass: "confirmacao_conta",
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.pop();
    })
    .catch(()=>{
      loader.dismiss();
      const toast = this.toastCtrl.create({
        message: "Ocorreu um erro na solicitação!",
        duration: 5000,
        position: 'top',
        cssClass:"toastError"
        });
        toast.present();
        this.navCtrl.pop();

    });

  }

}
