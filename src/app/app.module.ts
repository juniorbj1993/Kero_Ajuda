import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServicoPage } from '../pages/servico/servico';
import { DetalheservicoPage } from '../pages/detalheservico/detalheservico';
import { CadastrarPage } from './../pages/cadastrar/cadastrar';
import { LoginPage } from './../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ServicoPage,
    DetalheservicoPage,
    CadastrarPage,
    LoginPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ServicoPage,
    DetalheservicoPage,
    CadastrarPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
