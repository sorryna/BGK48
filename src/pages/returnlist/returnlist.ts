import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WaitpersonPage } from '../waitperson/waitperson';

/**
 * Generated class for the ReturnlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-returnlist',
  templateUrl: 'returnlist.html',
})
export class ReturnlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReturnlistPage');
  }

  waitperson(){
   this.navCtrl.push(WaitpersonPage)

   
  }
}
