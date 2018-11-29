import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { AngularFireModule } from '@angular/fire';
// import { environment } from '../environments/environment';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServicoPage } from '../pages/servico/servico';
import { DetalheservicoPage } from '../pages/detalheservico/detalheservico';
import { LoginPage } from './../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastrousuarioPage } from '../pages/cadastrousuario/cadastrousuario';
import { CadastroPdsPage } from '../pages/cadastro-pds/cadastro-pds';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ServicoPage,
    DetalheservicoPage,
    LoginPage,
    CadastrousuarioPage,
    CadastroPdsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // AngularFireModule.initializeApp(environment.firebase)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ServicoPage,
    DetalheservicoPage,
    LoginPage,
    CadastrousuarioPage,
    CadastroPdsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
