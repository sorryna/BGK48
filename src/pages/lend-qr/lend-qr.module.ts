import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LendQrPage } from './lend-qr';

@NgModule({
  declarations: [
    LendQrPage,
  ],
  imports: [
    IonicPageModule.forChild(LendQrPage),
  ],
})
export class LendQrPageModule {}
