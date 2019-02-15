
//modules
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfiguracoesPageModule } from '../../pages/configuracoes/configuracoes.module';
import { MeusdadosusuarioPageModule } from './../meusdadosusuario/meusdadosusuario.module';
import { MeusdadosPageModule } from './../meusdados/meusdados.module';
import { ContatoPageModule } from './../contato/contato.module';
import { ServicoPageModule } from './../servico/servico.module';
import { DetalheservicoPageModule } from '../detalheservico/detalheservico.module';
import { ListapdsPageModule } from '../pdsdados/listapds/listapds.module';
import { DetalhepdsPageModule } from '../pdsdados/detalhepds/detalhepds.module';
import { EditardadosPageModule } from './../editardados/editardados.module';


//pages
import { ConfiguracoesPage } from './../configuracoes/configuracoes';
import { HomePage } from './home';
import { MeusdadosusuarioPage } from '../meusdadosusuario/meusdadosusuario';
import { ContatoPage } from '../contato/contato';
import { MeusdadosPage } from '../meusdados/meusdados';
import { ServicoPage } from '../servico/servico';
import { DetalheservicoPage } from './../detalheservico/detalheservico';
import { ListapdsPage } from '../pdsdados/listapds/listapds';
import { DetalhepdsPage } from '../pdsdados/detalhepds/detalhepds';
import { EditardadosPage } from './../editardados/editardados';



//models
import { Servicos } from './../../funcoes.model';

//services
import { CrudService } from './../../crud.service';






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
    ListapdsPageModule,
    DetalhepdsPageModule,
    EditardadosPageModule


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
    DetalhepdsPage,
    ListapdsPage,
    EditardadosPage

  ],
  providers:[
    Servicos,
    CrudService
  ]
})
export class HomePageModule {}
