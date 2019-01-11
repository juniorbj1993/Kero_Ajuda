import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermosepoliticaPage } from './termosepolitica';

@NgModule({
  declarations: [
    TermosepoliticaPage,
  ],
  imports: [
    IonicPageModule.forChild(TermosepoliticaPage),
  ],
  exports: [
    TermosepoliticaPage
  ]
})
export class TermosepoliticaPageModule {}
