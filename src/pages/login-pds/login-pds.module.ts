import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPdsPage } from './login-pds';

@NgModule({
  declarations: [
    LoginPdsPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPdsPage),
  ],
})
export class LoginPdsPageModule {}
