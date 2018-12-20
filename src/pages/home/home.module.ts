import { MeusdadosPageModule } from './../meusdados/meusdados.module';
import { ContatoPageModule } from './../contato/contato.module';

import { ConfiguracoesPage } from './../configuracoes/configuracoes';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ConfiguracoesPageModule } from '../../pages/configuracoes/configuracoes.module';
import { ContatoPage } from '../contato/contato';
import { MeusdadosPage } from '../meusdados/meusdados';


@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    ConfiguracoesPageModule,
    ContatoPageModule,
    MeusdadosPageModule

  ],
  exports:[
    HomePage,
  ],
  entryComponents: [
    ConfiguracoesPage,
    ContatoPage,
    MeusdadosPage
  ]
})
export class HomePageModule {}
