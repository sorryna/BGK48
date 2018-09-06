import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { HttpClient } from '@angular/common/http';

import { Items, GlobalVarible } from '../../app/models';

/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  console.log(navParams.data.BorrowingIdRe);
  }

  ionViewDidLoad() {
   
  }
  goHomePage(){
    
  }
}
