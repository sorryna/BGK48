import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items, GlobalVarible } from '../../app/models';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  items: Items = new Items;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  ionViewDidEnter() {
    this.http.get<Items>(GlobalVarible.host + "/api/Item/GetItem/" + this.navParams.data.id)
      .subscribe(data => {
        this.items = data;
      });
  }

  edit() {
    this.http.post(GlobalVarible.host + "/api/Item/edit", this.items)
      .subscribe(data => {
        this.navCtrl.pop();
      });
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Confirm edit?',
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
            this.edit();
          }
        }
      ]
    });
    confirm.present();
  }

}
