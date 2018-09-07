import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LendQrPage } from '../lend-qr/lend-qr';
import { HttpClient } from '@angular/common/http';
import { Items} from '../../app/models';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailPage');
  }

  Lend() {
    this.navCtrl.push(LendQrPage);
  }

  delete(id) {
<<<<<<< HEAD
    this.http.post("http://localhost:54194/api/Item/delete/" + id, {})
  }

  ionViewDi
  dEnter() {
    this.http.get<Items>("http://localhost:54194/api/Item/GetItem/" + this.navParams.data.id)
=======
    this.http.post(GlobalVarible.host + "/api/Item/delete/" + id, {})
      .subscribe(data => {
        this.navCtrl.pop();
      });
  }

  ionViewDidEnter() {
    this.http.get<Items>(GlobalVarible.host + "/api/Item/GetItem/" + this.navParams.data.id)
>>>>>>> a48c7909123a3408bc8465880b97cd5798bb542e
      .subscribe(data => {
        this.items = data;
      });
  }

  edit(data) {
    this.navCtrl.push(EditPage, { id: data })
  }

  showConfirm(id) {
    const confirm = this.alertCtrl.create({
      title: 'Confirm Delete?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Agree clicked');
            this.delete(id);
          }
        }
      ]
    });
    confirm.present();
  }
}
