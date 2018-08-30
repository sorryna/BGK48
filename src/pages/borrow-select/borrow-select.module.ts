import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BorrowSelectPage } from './borrow-select';

@NgModule({
  declarations: [
    BorrowSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(BorrowSelectPage),
  ],
})
export class BorrowSelectPageModule {}
