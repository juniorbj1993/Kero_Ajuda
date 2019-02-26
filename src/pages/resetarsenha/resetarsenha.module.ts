import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetarsenhaPage } from './resetarsenha';

@NgModule({
  declarations: [
    ResetarsenhaPage,
  ],
  imports: [
    IonicPageModule.forChild(ResetarsenhaPage),
  ],
  exports:[
    ResetarsenhaPage
  ]
})
export class ResetarsenhaPageModule {}
