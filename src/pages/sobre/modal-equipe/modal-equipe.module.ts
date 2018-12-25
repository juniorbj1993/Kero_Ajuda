import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalEquipePage } from './modal-equipe';

@NgModule({
  declarations: [
    ModalEquipePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalEquipePage),
  ],
  exports:[
    ModalEquipePage
  ]
 
})
export class ModalEquipePageModule {}
