import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemListPage } from '../item-list/item-list';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Items, GlobalVarible } from '../../app/models';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the AdditemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-additem',
  templateUrl: 'additem.html',
})
export class AdditemPage {

  items: Items;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private http: HttpClient) {

    this.items = new Items();

  }

  Create() {
    this.items.slot = this.navParams.data.slot;
    this.http.post(GlobalVarible.host + "/api/Item/Create", this.items)
      .subscribe(data => {
        this.navCtrl.push(ItemListPage, { numberlocker: this.items.slot });
       
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditemPage');
  }

  goItemListPage() {
    this.navCtrl.push(ItemListPage)
  }

  AddItemToListPage() {
    this.navCtrl.push(ItemListPage)
  }

  Camera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
}
