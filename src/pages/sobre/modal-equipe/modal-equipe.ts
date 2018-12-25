import { Component } from '@angular/core';
import { IonicPage,  ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal-equipe',
  templateUrl: 'modal-equipe.html',
})
export class ModalEquipePage {
  character;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    var characters = [
      {
        name: 'Tiago Roberto Alves da Silva',
        image: '../../../assets/imgs/keroajuda/tiago_avatar.png',
        items: [
          { title: 'Função', note: 'Administrador/Fundador' },
          { title: 'Email', note: 'tiagorobertoadm@gmail.com' },
          { title: 'Telefone', note: '(88) 99410-1831' }
        ]
      },
      {
        name: 'Sebastião Ribeiro Barroso Neto',
        image: '../../../assets/imgs/keroajuda/neto_avatar.png',
        items: [
          { title: 'Função', note: 'Administrador/Fundador' },
          { title: 'Email', note: 'srbarrosoneto@hotmail.com' },
          { title: 'Telefone', note: '(88) 99957-3498' }
        ]
      },
      {
        name: 'Bruno Oliveira Marcelino',
        image: '../../../assets/imgs/keroajuda/bruno.png',
        items: [
          { title: 'Função', note: 'Designer/Fundador' },
          { title: 'Email', note: 'brunoolliver02@gmail.com' },
          { title: 'Telefone', note: '(88) 99805-9489' }
        ]
      },
      {
        name: 'João batista C. das Neves Júnior',
        
        image: '../../../assets/imgs/keroajuda/jb_avatar.png',
        items: [
          { title: 'Função', note: 'Desenvolvedor' },
          { title: 'Email', note: 'juniorbj1993@gmail.com' },
          { title: 'Telefone', note: '(88) 99804-8587' }
        ]
      }
    ];
    this.character = characters[this.navParams.get('charNum')];
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    
  }
  
}
