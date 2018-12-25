import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SobrePage } from './sobre';
import { ModalEquipePage } from './modal-equipe/modal-equipe';
import { ModalEquipePageModule } from '../sobre/modal-equipe/modal-equipe.module';

@NgModule({
  declarations: [
    SobrePage,
  ],
  imports: [
    IonicPageModule.forChild(SobrePage),
    ModalEquipePageModule
  ],
  exports:[
    SobrePage
  ],
  entryComponents: [
    ModalEquipePage
  ]
})
export class SobrePageModule {}
