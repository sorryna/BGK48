import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReturnlistPage } from './returnlist';

@NgModule({
  declarations: [
    ReturnlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ReturnlistPage),
  ],
})
export class ReturnlistPageModule {}
