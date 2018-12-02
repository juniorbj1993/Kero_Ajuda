import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeusdadosPage } from './meusdados';

@NgModule({
  declarations: [
    MeusdadosPage,
  ],
  imports: [
    IonicPageModule.forChild(MeusdadosPage),
  ],
})
export class MeusdadosPageModule {}
