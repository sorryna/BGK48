import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LendQrPage } from '../lend-qr/lend-qr';
import { HttpClient } from '@angular/common/http';
import { Items, GlobalVarible } from '../../app/models';
import { EditPage } from '../edit/edit';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  
  items: Items = new Items;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailPage');
  }

  Lend() {
    this.navCtrl.push(LendQrPage);
  }

  delete(id) {
    this.http.post(GlobalVarible.host + "/api/Item/delete/" + id, {})
      .subscribe(data => {
        this.navCtrl.pop();
      });
  }

  ionViewDidEnter() {
    this.http.get<Items>(GlobalVarible.host + "/api/Item/GetItem/" + this.navParams.data.id)
      .subscribe(data => {
        this.items = data;
      });
  }

  edit(data) {
    this.navCtrl.push(EditPage, { id: data })
  }
}
