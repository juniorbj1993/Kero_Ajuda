import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPdsPage } from './cadastro-pds';

@NgModule({
  declarations: [
    CadastroPdsPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPdsPage),
  ],
})
export class CadastroPdsPageModule {}
