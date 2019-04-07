
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { ConfiguracoesPage } from './../pages/configuracoes/configuracoes';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';





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
    public storage: Storage,
    private screenOrientation: ScreenOrientation,
    public loadingCtrl: LoadingController,

    public toastCtrl: ToastController

    ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
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
            this.rootPage = 'LoginPage';
          }
        })
        .catch(()=>{
          this.rootPage = 'LoginPage';
        })
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }


  openPage(page) {
    this.nav.setRoot(page.component);
  }

}
