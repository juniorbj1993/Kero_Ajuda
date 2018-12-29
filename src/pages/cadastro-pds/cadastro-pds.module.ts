import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPdsPage } from './cadastro-pds';
import { BrMaskerModule } from 'brmasker-ionic-3';


@NgModule({
  declarations: [
    CadastroPdsPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPdsPage),
    BrMaskerModule
    
  ],
})
export class CadastroPdsPageModule {}
