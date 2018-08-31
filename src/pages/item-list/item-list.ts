import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemDetailPage } from '../item-detail/item-detail';
import { HttpClient } from '@angular/common/http';

import { Items, GlobalVarible } from '../../app/models';
import { AdditemPage } from '../additem/additem';

/**
 * Generated class for the ItemListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html',
})
export class ItemListPage {

  number_locker: string;
  items: Items[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.number_locker = this.navParams.data.numberlocker;

    this.http.get<Items[]>("http://localhost:5000/api/Item/GetItemslot/" + this.number_locker).subscribe(data => {
      this.items = data;
    });
    console.log(this.items);
    // this.http.get<Items[]>(GlobalVarible.host + "/api/Item/GetItemslot/" + this.number_locker).subscribe( data=> {this.items = data;});  
    // console.log(this.items);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');
  }

  goDetail_list() {
    this.navCtrl.push(ItemDetailPage);
  }

  additem() {
    this.navCtrl.push(AdditemPage);
  }

}
