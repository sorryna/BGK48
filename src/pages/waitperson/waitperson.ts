import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the WaitpersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-waitperson',
  templateUrl: 'waitperson.html',
})
export class WaitpersonPage {
  genQrCode:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("QRText>>"+navParams.data.textQR)
    this.genQrCode = "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=Return"+navParams.data.textQR;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaitpersonPage');
  }

  goHomePage(){
    this.navCtrl.push(HomePage)
  }
}
