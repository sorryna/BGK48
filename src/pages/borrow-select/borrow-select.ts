import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BorrowPage } from '../borrow/borrow';
import { HttpClient } from '@angular/common/http';
import { Items, GlobalVarible, BorrowItem, Userlogin, BorrowingItem } from '../../app/models';

/**
 * Generated class for the BorrowSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-borrow-select',
  templateUrl: 'borrow-select.html',
})
export class BorrowSelectPage {
  items: BorrowItem[];
  boxName: string;
  numborrowItem: number;
  borrowItem = [];

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.boxName = navParams.data.text;
    console.log(navParams.data.text);
  }

  ionViewDidLoad() {
    this.http.get<BorrowItem[]>(GlobalVarible.host + "/api/Item/GetItemslot/" + this.navParams.data.text).subscribe(data => {
      var borrowItems = data.map(item => {
        var borrowItem = new BorrowItem()
        borrowItem.id = item.id;
        borrowItem.name = item.name;
        borrowItem.amount = item.amount;
        borrowItem.totalamount = item.totalamount;
        borrowItem.slot = this.navParams.data.text;
        borrowItem.ischecked = false
        return borrowItem;
      });
      this.items = borrowItems;

    });

  }

  BorrowPage() {
      var seletedItem = this.items.filter(item => item.ischecked == true);
      var borrowingItem = new BorrowingItem();
      borrowingItem.items = seletedItem;
      borrowingItem.borrower = Userlogin.loginname;
          console.log(borrowingItem);
        
      
      this.http.post(GlobalVarible.host + "/api/Item/addBorrow", borrowingItem,GlobalVarible.httpOptions).subscribe((data:BorrowingItem) => {
         this.navCtrl.push(BorrowPage,{BorrowId:data.id,dataBorrowList:borrowingItem.items});
      });
     
  }


  checkeditem(data: BorrowItem, e) {
     data.ischecked = e.checked;
  }

}
