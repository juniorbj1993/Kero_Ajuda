import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditardadosPage } from './editardados';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    EditardadosPage,
  ],
  imports: [
    IonicPageModule.forChild(EditardadosPage),
    BrMaskerModule
  ],
  exports:[
    EditardadosPage
  ]
})
export class EditardadosPageModule {}
