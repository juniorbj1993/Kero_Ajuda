import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeusdadosusuarioPage } from './meusdadosusuario';

@NgModule({
  declarations: [
    MeusdadosusuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(MeusdadosusuarioPage),
  ],
  exports:[
    MeusdadosusuarioPage
  ]
})
export class MeusdadosusuarioPageModule {}
