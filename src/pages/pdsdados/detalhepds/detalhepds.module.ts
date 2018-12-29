import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhepdsPage } from './detalhepds';

@NgModule({
  declarations: [
    DetalhepdsPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhepdsPage),
  ],
  exports:[
    DetalhepdsPage
  ]
})
export class DetalhepdsPageModule {}
