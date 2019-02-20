import { CrudService } from './../../crud.service';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-editardados',
  templateUrl: 'editardados.html',
})
export class EditardadosPage {
  public dados:string;
  public dadousuarioID: string;
  public id: string;
  public dataobjectedit;
  public usuariotype;

  registerform_nome: FormGroup;
  registerform_telefone: FormGroup;
  registerform_endereco: FormGroup;

  cidades=[
    'Juazeiro do Norte',
    'Crato',
    'Barbalha'
  ]





  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private crud: CrudService,
    private storage: Storage,
    public formbuilder: FormBuilder,

    ) {
      this.registerform_nome = this.formbuilder.group({
        nome: [null,[Validators.required,Validators.minLength(2)]],
        sobrenome: [null,[Validators.required,Validators.minLength(6)]],
      });
      this.registerform_telefone = this.formbuilder.group({
        telefone: [null,[Validators.required,Validators.minLength(14),Validators.maxLength(14)]],
      });
      this.registerform_endereco = this.formbuilder.group({
        estado: [null,[Validators.required]],
        cidade: [null,[Validators.required]],
        rua: [null,[Validators.required]],
        bairro: [null,[Validators.required]],
        numero: [null,[Validators.required]],
      });
    }

  ionViewDidLoad() {
    this.dados = this.navParams.get('dados');
    this.usuariotype = this.navParams.get('usuario');
    console.log(this.dados);
    console.log(this.usuariotype);
    this.storage.get('userId')
    .then((resposta)=>{
      this.dadousuarioID = resposta;
    })
  }

  editarDadosOK(){
    this.criarObjeto();
    this.crud.update(this.dadousuarioID,this.dataobjectedit,this.usuariotype);
    this.navCtrl.pop()
  }



  criarObjeto(){
    if(this.dados == 'telefone'){
      this.dataobjectedit = {
        telefone: this.registerform_telefone.value.telefone
      }
    }
    if(this.dados == 'nome'){
      this.dataobjectedit = {
        nome: this.registerform_nome.value.nome,
        sobrenome: this.registerform_nome.value.sobrenome
      }
    }
    if(this.dados == 'endereço'){
      this.dataobjectedit = {
        estado: this.registerform_endereco.value.estado,
        cidade: this.registerform_endereco.value.cidade,
        numero: this.registerform_endereco.value.numero,
        rua: this.registerform_endereco.value.rua,
        bairro: this.registerform_endereco.value.bairro
      }

    }


  }


}
