import { ConfiguracoesPage } from './../pages/configuracoes/configuracoes';
// import { HomePage } from './../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public storage: Storage
    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
    this.storage.get('userId')
    .then((resolve)=>{
      if(resolve.length > 0){
        this.rootPage = ConfiguracoesPage;
      }
      else{
        this.rootPage = LoginPage;
      }
    })
    .catch(()=>{
      this.rootPage = LoginPage;
    })

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
