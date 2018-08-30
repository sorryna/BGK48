import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaitpersonPage } from './waitperson';

@NgModule({
  declarations: [
    WaitpersonPage,
  ],
  imports: [
    IonicPageModule.forChild(WaitpersonPage),
  ],
})
export class WaitpersonPageModule {}
