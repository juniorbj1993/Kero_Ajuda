import { ImagePicker } from '@ionic-native/image-picker';
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
  public existefoto = false;
  public imagePath = '../../assets/imgs/semimagem.jpg';
  public filetoupload = null;

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
    private imagepicker: ImagePicker

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
  editarIMG(){
    this.imagepicker.hasReadPermission()
      .then(hasPermission=>{
        if(hasPermission){
          this.pegarImagem()
        }else{
          this.solicitarPermissao()
        }

      })
      .catch((error)=>{
        console.error(error)
      })

  }
  solicitarPermissao(){
    this.imagepicker.requestReadPermission()
      .then((hasPermission)=>{
        if(hasPermission){
          this.pegarImagem()
        }else{
          console.log("n permitido")
        }

      })
      .catch((error)=>{
        console.error(error)
      })
  }
  pegarImagem(){
    this.imagepicker.getPictures({
      width: 540,
      height: 540,
      maximumImagesCount: 1,
      outputType: 1, // base 64
      quality: 100
    })
      .then((result)=>{
        if(result.length>0){
          this.imagePath = `data:image/png;base64,${result}`;
          this.filetoupload = this.imagePath;
          this.existefoto = true;
        }else{
          this.imagePath = '../../assets/imgs/semimagem.jpg';
          this.filetoupload = null;
        }

      })
      .catch((error)=>{
        console.error("erro ao recuperar imagem")
      })

  }


  enviarFirebase(){
    this.crud.uploadandSaveImage(this.dadousuarioID,this.filetoupload);
  }


}
