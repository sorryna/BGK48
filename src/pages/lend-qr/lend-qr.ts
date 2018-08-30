import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BorrowSelectPage } from '../borrow-select/borrow-select';

/**
 * Generated class for the LendQrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lend-qr',
  templateUrl: 'lend-qr.html',
})
export class LendQrPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LendQrPage');
  }

  BorrowSelectPage(){
    this.navCtrl.push(BorrowSelectPage);
  }

}
