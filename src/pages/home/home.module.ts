import { ConfiguracoesPage } from './../configuracoes/configuracoes';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ConfiguracoesPageModule } from '../../pages/configuracoes/configuracoes.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    ConfiguracoesPageModule
  ],
  exports:[
    HomePage,
  ],
  entryComponents: [
    ConfiguracoesPage
  ]
})
export class HomePageModule {}
