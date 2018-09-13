import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WaitpersonPage } from '../waitperson/waitperson';
import { HttpClient } from '@angular/common/http';
import { ReturnItemRequest, Userlogin, GlobalVarible, ReturnListItemRequest } from '../../app/models';
import { GroupByPipe } from '../../group-by.pipe';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-returnlist',
  templateUrl: 'returnlist.html',
  providers: [GroupByPipe]
})
export class ReturnlistPage {
  indexofdata: number;
  LockerName: string;
  ReturnItemslot: ReturnItemRequest[];
  idItemRe: string;

  checkform : FormGroup;
  dataValue = { "Returnqty": ""};

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private groupByPipe: GroupByPipe) {
    this.LockerName = navParams.data.text;
    this.checkform = new FormGroup({
      Returnqty: new FormControl('', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$'), Validators.minLength(1), Validators.maxLength(6)]),
     
      
    });

  }

  ionViewDidEnter() {
    this.http.get<ReturnItemRequest[]>(GlobalVarible.host + "/api/Item/GetItemReturnbySlot/" + Userlogin.loginname + "/" + this.navParams.data.text)
      .subscribe(data => {
        this.ReturnItemslot = data;
        console.log(data);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReturnlistPage');
  }

  
  waitperson() {
    
    var ReisCheck = this.ReturnItemslot[this.indexofdata].items.filter(item => item.ischecked == true);
    var Reitemupdate = new ReturnItemRequest();
    Reitemupdate.items = ReisCheck;
    



    console.log(Reitemupdate);

    this.navCtrl.push(WaitpersonPage, { dataReturn: Reitemupdate, textQR: this.idItemRe });


  }

  checkeditem(data: ReturnListItemRequest, e, dataid, i) {
    this.idItemRe = dataid;
    this.indexofdata = i;
    data.idreturnitem = dataid;
    data.ischecked = e.checked;
    data.qty = 0;

    console.log(i, dataid, data, data.ischecked);
  }

  checkedqty(data: ReturnListItemRequest, newqty) {
    data.qty = Number(newqty);
  }
}
