import { ConfiguracoesPage } from './../configuracoes/configuracoes';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomepdsPage } from './homepds';
import { ConfiguracoesPageModule } from './../configuracoes/configuracoes.module';

@NgModule({
  declarations: [
    HomepdsPage,
  ],
  imports: [
    IonicPageModule.forChild(HomepdsPage),
    ConfiguracoesPageModule
  ],
  exports:[
    HomepdsPage,
  ],
  entryComponents: [
    ConfiguracoesPage
  ]
})
export class HomepdsPageModule {}
