
//modules
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfiguracoesPageModule } from '../../pages/configuracoes/configuracoes.module';
import { MeusdadosusuarioPageModule } from './../meusdadosusuario/meusdadosusuario.module';
import { MeusdadosPageModule } from './../meusdados/meusdados.module';
import { ContatoPageModule } from './../contato/contato.module';
import { ServicoPageModule } from './../servico/servico.module';
import { DetalheservicoPageModule } from '../detalheservico/detalheservico.module';


//pages
import { ConfiguracoesPage } from './../configuracoes/configuracoes';
import { HomePage } from './home';
import { MeusdadosusuarioPage } from '../meusdadosusuario/meusdadosusuario';
import { ContatoPage } from '../contato/contato';
import { MeusdadosPage } from '../meusdados/meusdados';
import { ServicoPage } from '../servico/servico';
import { DetalheservicoPage } from './../detalheservico/detalheservico';





@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    ConfiguracoesPageModule,
    ContatoPageModule,
    MeusdadosPageModule,
    MeusdadosusuarioPageModule,
    ServicoPageModule,
    DetalheservicoPageModule,


  ],
  exports:[
    HomePage,
  ],
  entryComponents: [
    ConfiguracoesPage,
    ContatoPage,
    MeusdadosPage,
    MeusdadosusuarioPage,
    ServicoPage,
    DetalheservicoPage,

  ]
})
export class HomePageModule {}
