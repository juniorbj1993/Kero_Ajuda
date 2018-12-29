import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrousuarioPage } from './cadastrousuario';
import { BrMaskerModule } from 'brmasker-ionic-3';


@NgModule({
  declarations: [
    CadastrousuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrousuarioPage),
    BrMaskerModule
    
  ],
})
export class CadastrousuarioPageModule {}
