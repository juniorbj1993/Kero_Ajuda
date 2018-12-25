import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheservicoPage } from './detalheservico';

@NgModule({
  declarations: [
    DetalheservicoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheservicoPage),
  ],
  exports:[
    DetalheservicoPage
  ]
})
export class DetalheservicoPageModule {}
