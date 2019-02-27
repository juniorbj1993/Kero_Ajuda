import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';

@Injectable()
export class networkVerify{
    loader;
    constructor(
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
        private network: Network,
        public toastCtrl: ToastController

        ) { }

    isConnected(){
      this.network.onConnect().subscribe(data  => {
        console.log('com rede!');
       }, error  =>  console.log(error));
        this.network.onDisconnect().subscribe(data  => {
            const toast = this.toastCtrl.create({
              message: "Não há conexão com a internet!",
              duration: 5000,
              position: 'top',
              cssClass:"toastError"
              });
              toast.present();
           }, error  =>  console.log(error));


    }
}
