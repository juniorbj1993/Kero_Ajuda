//modulos

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {LoginPageModule} from '../pages/login/login.module';
import { HomePageModule } from '../pages/home/home.module';
import { HomepdsPageModule } from '../pages/homepds/homepds.module';
import { SobrePageModule } from './../pages/sobre/sobre.module';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { TermosepoliticaPageModule } from './../pages/termosepolitica/termosepolitica.module';
import {ResetarsenhaPageModule} from './../pages/resetarsenha/resetarsenha.module';
import { ImagePicker } from '@ionic-native/image-picker';
import { RecaptchaModule } from 'ng-recaptcha';




//models
import {usuario} from '../users.model';
import {pds} from '../users.model';
import { Servicos } from './../funcoes.model';
import { dadosRecaptcha } from './../reCaptcha';


//serviços





//pages
import { MyApp } from './app.component';
import { CadastrousuarioPage } from '../pages/cadastrousuario/cadastrousuario';
import { CadastroPdsPage } from '../pages/cadastro-pds/cadastro-pds';
import { HomePage } from '../pages/home/home';
import { HomepdsPage } from './../pages/homepds/homepds';
import { SobrePage } from '../pages/sobre/sobre';
import { TermosepoliticaPage } from './../pages/termosepolitica/termosepolitica';
import { ResetarsenhaPage } from '../pages/resetarsenha/resetarsenha';
import { LoginPage } from '../pages/login/login';




//outros
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';







@NgModule({
  declarations: [
    MyApp,
    CadastrousuarioPage,
    CadastroPdsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    IonicStorageModule.forRoot(),
    HomePageModule,
    HomepdsPageModule,
    SobrePageModule,
    BrMaskerModule,
    TermosepoliticaPageModule,
    ResetarsenhaPageModule,
    RecaptchaModule.forRoot(),
    LoginPageModule



  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastrousuarioPage,
    CadastroPdsPage,
    HomePage,
    HomepdsPage,
    SobrePage,
    TermosepoliticaPage,
    ResetarsenhaPage,
    LoginPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AngularFireModule,
    usuario,
    AngularFireDatabase,
    pds,
    ScreenOrientation,
    Servicos,
    ImagePicker,
    dadosRecaptcha
  ]
})
export class AppModule {}
