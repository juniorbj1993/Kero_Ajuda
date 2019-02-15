import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditardadosPage } from './editardados';

@NgModule({
  declarations: [
    EditardadosPage,
  ],
  imports: [
    IonicPageModule.forChild(EditardadosPage),
  ],
  exports:[
    EditardadosPage
  ]
})
export class EditardadosPageModule {}
