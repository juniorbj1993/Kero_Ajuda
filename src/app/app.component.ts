
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { ConfiguracoesPage } from './../pages/configuracoes/configuracoes';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Network } from '@ionic-native/network';




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
    private network: Network,
    public toastCtrl: ToastController

    ) {
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

    ];

  }

  initializeApp() {
    let loader;
    let x = 0;
    this.platform.ready().then(() => {
      this.network.onDisconnect().subscribe(data  => {
        const toast = this.toastCtrl.create({
          message: "Não há conexão com a internet!",
          duration: 5000,
          position: 'top',
          cssClass:"toastError"
          });
          toast.present();
          loader = this.loadingCtrl.create({content: "Aguarde por favor..."});
          loader.present();
          x = 1;
       }, error  =>  console.log(error));
      this.network.onConnect().subscribe(data  => {
        if (x == 1){
          loader.dismiss()
        }
       
       }, error  =>  console.log(error));
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
