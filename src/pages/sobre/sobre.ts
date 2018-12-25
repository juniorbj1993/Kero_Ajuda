import { ModalEquipePage } from './../sobre/modal-equipe/modal-equipe';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {}
  public openModal(characterNum) {
    const modal = this.modalCtrl.create(ModalEquipePage,characterNum);
    modal.present();
  }

}
