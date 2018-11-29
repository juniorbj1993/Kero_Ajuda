import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateConfirmPassword } from '../../validators/validatePassword';



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
    public formbuilder: FormBuilder
    ) {
    this.registerform = this.formbuilder.group({
      nome: [null,[Validators.required,Validators.minLength(6)]],
      telefone: [null,[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      estado: [null,[Validators.required,Validators.minLength(2)]],
      cidade: [null,[Validators.required,Validators.minLength(2)]],
      rua: [null,[Validators.required,Validators.minLength(2)]],
      bairro: [null,[Validators.required,Validators.minLength(2)]],
      numero: [null,[Validators.required,Validators.minLength(1)]],
      email: [null,[Validators.required,Validators.email]],
      senha: [null,[Validators.required,Validators.minLength(6)]],
      confirmarsenha: [null,[Validators.required,Validators.minLength(6),ValidateConfirmPassword]]
    })
  }

  ionViewDidLoad() {

  }
  registerUsers(){
    console.log(this.registerform.value);
  }




}
