import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListapdsPage } from './listapds';

@NgModule({
  declarations: [
    ListapdsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListapdsPage),
  ],
  exports:[
    ListapdsPage
  ]
})
export class ListapdsPageModule {}
