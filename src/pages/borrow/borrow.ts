import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';
import { HomePage } from '../home/home';
import { BorrowItem, BorrowingId, GlobalVarible } from '../../app/models';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the BorrowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-borrow',
  templateUrl: 'borrow.html',
})

export class BorrowPage {
  @ViewChild(Navbar) navBar: Navbar;
  genQrCode:string;
  databorrowList=[];
 
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    this.databorrowList = navParams.data.dataBorrowList;
    BorrowingId.borrowingId = navParams.data.BorrowId;
    // console.log(this.databorrowList[0]);
        
    this.genQrCode = "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl="+navParams.data.BorrowId;
  }


  ionViewDidLoad() {
   
    this.navBar.backButtonClick = (e:UIEvent)=>{
      this.http.post(GlobalVarible.host + "/api/Item/deleteBorrow/" + this.navParams.data.BorrowId, {})
      .subscribe(data => {
        this.navCtrl.pop();
      });
     }
  }

  goHomePage(){
    this.navCtrl.push(HomePage)
  }
}
