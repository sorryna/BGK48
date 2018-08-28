import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { KeyListPage } from '../key-list/key-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goKeyListPage() {
    this.navCtrl.push(KeyListPage);
  }
}

