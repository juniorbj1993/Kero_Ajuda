//modulos

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePageModule } from '../pages/home/home.module';
import { HomepdsPageModule } from '../pages/homepds/homepds.module';
import { SobrePageModule } from './../pages/sobre/sobre.module';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


//models
import {usuario} from '../users.model';
import {pds} from '../users.model';
//serviços




//pages
import { MyApp } from './app.component';
import { LoginPage } from './../pages/login/login';
import { CadastrousuarioPage } from '../pages/cadastrousuario/cadastrousuario';
import { CadastroPdsPage } from '../pages/cadastro-pds/cadastro-pds';
import { HomePage } from '../pages/home/home';
import { HomepdsPage } from './../pages/homepds/homepds';
import { SobrePage } from '../pages/sobre/sobre';




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
    HomePageModule,
    HomepdsPageModule,
    SobrePageModule



  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    CadastrousuarioPage,
    CadastroPdsPage,
    HomePage,
    HomepdsPage,
    SobrePage


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
    ScreenOrientation
  ]
})
export class AppModule {}
