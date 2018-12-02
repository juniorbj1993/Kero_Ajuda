//modulos
// import { ConfiguracoesPageModule } from './../pages/configuracoes/configuracoes.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {usuario} from '../users.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePageModule } from '../pages/home/home.module';

//serviços




//pages
import { MyApp } from './app.component';
import { LoginPage } from './../pages/login/login';
import { CadastrousuarioPage } from '../pages/cadastrousuario/cadastrousuario';
import { CadastroPdsPage } from '../pages/cadastro-pds/cadastro-pds';
import { HomePage } from '../pages/home/home';
import {ConfiguracoesPage} from '../pages/configuracoes/configuracoes';

//outros
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';





@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    CadastrousuarioPage,
    CadastroPdsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    IonicStorageModule.forRoot(),
    HomePageModule
    // ConfiguracoesPageModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    CadastrousuarioPage,
    CadastroPdsPage,
    HomePage
    // ConfiguracoesPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AngularFireModule,
    usuario,
    AngularFireDatabase
  ]
})
export class AppModule {}
