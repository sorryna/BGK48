import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WaitpersonPage } from '../waitperson/waitperson';
import { HttpClient } from '@angular/common/http';
import { ReturnItemRequest, Userlogin, GlobalVarible, ReturnListItemRequest } from '../../app/models';
import { GroupByPipe } from '../../group-by.pipe';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AlertController } from 'ionic-angular';



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

  checkform: FormGroup;
  dataValue = { "Returnqty": "" };

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private groupByPipe: GroupByPipe,private camera: Camera,
    private barcodeScanner: BarcodeScanner,private alertCtrl: AlertController) {
    this.LockerName = navParams.data.text;
    this.checkform = new FormGroup({
      Returnqty: new FormControl('', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$'), Validators.minLength(1), Validators.maxLength(6)]),


    });

  }

  ionViewDidEnter() {

    this.http.get<ReturnItemRequest[]>(GlobalVarible.host + "/api/Item/GetItemsReturnList/" + Userlogin.loginname + "/" + this.navParams.data.idReitem)
      .subscribe(data => {
        this.ReturnItemslot = data;
        console.log(data);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReturnlistPage');
  }


  waitperson() {
   
    // var ReturnItem = new ReturnItemRequest();
    // ReturnItem.items = this.ReturnItemslot[0].items;
    // ReturnItem.borrower =this.ReturnItemslot[0].borrower;
    // ReturnItem.witness = this.ReturnItemslot[0].witness;
    //     console.log(ReturnItem);
      

    // this.http.post(GlobalVarible.host + "/api/Item/addRetrunItems", ReturnItem, GlobalVarible.httpOptions).subscribe((data: ReturnItemRequest) => {
    //   this.navCtrl.push(WaitpersonPage, { dataReturn: this.ReturnItemslot, textQR: data.id });
    // });
  }

  // checkeditem(data: ReturnListItemRequest, e, dataid, i) {
  //   this.idItemRe = dataid;
  //   this.indexofdata = i;
  //   data.idreturnitem = dataid;
  //   data.ischecked = e.checked;
  //   data.qty = 0;

  //   console.log(i, dataid, data, data.ischecked);
  // }
  errorAlert() {
    let alert = this.alertCtrl.create({
      title: 'ผิดพลาด',
      subTitle: 'ล็อคเกอร์ที่ต้องการคืนของไม่ถูกต้อง',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  returnConfirm() {
    let alert = this.alertCtrl.create({
      title: 'ยืนยันการคืนของ',
      message: 'คุณแน่ใจนะว่าต้องการคืนของ?',
      buttons: [
        {
          text: 'แก้ไขการคืนของ',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            var ReturnItem = new ReturnItemRequest();
            ReturnItem.items = this.ReturnItemslot[0].items;
            ReturnItem.borrower =this.ReturnItemslot[0].borrower;
            ReturnItem.witness = this.ReturnItemslot[0].witness;
            ReturnItem.bowId = this.navParams.data.idReitem;
               
        
            this.http.post(GlobalVarible.host + "/api/Item/addRetrunItems", ReturnItem, GlobalVarible.httpOptions).subscribe((data: ReturnItemRequest) => {
              // console.log("Object:",data)
              // console.log("JSON:",JSON.stringify(data))
              // console.log("borrow ID >>:"+data.bowId)
               this.navCtrl.push(WaitpersonPage, { dataReturn: this.ReturnItemslot, textQR: data.id});
            });
          }
        }
      ]
    });
    alert.present();
  }

  checkedqty(data: ReturnListItemRequest, newqty, dataid) {
    var dataRe = new ReturnItemRequest();
    this.idItemRe = dataid;
    data.returnqty = Number(newqty);
  }

  QRScan() {
    

    this.barcodeScanner.scan().then(barcodeData => {
      if(barcodeData.text == this.ReturnItemslot[0].items[0].slot){
        this.returnConfirm()
      
      }else{
        this.errorAlert();
      }
    
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
