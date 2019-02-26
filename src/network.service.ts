import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';

@Injectable()
export class networkVerify{
    loader;
    x = 0;
    constructor(
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
        private network: Network,
        public toastCtrl: ToastController

        ) { }
        
    connected(){
        this.network.onConnect().subscribe(data  => {
            if (this.x == 1){
              this.loader.dismiss()
            }
           }, error  =>  console.log(error));
    }
    disconnected(){
        this.network.onDisconnect().subscribe(data  => {
            const toast = this.toastCtrl.create({
              message: "Não há conexão com a internet!",
              duration: 5000,
              position: 'top',
              cssClass:"toastError"
              });
              toast.present();
              this.loader = this.loadingCtrl.create({content: "Conectando com a internet..."});
              this.loader.present();
              this.x = 1;
           }, error  =>  console.log(error));
    }
}