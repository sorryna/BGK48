webpackJsonp([13],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(42);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_list_item_list__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(21);
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BorrowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BorrowPage = /** @class */ (function () {
    function BorrowPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BorrowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BorrowPage');
    };
    BorrowPage.prototype.goHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    BorrowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-borrow',template:/*ion-inline-start:"E:\BGK48\src\pages\borrow\borrow.html"*/'<!--\n\n  Generated template for the BorrowPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>borrow</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <img src="../../assets/imgs/sample.png" alt="QRcode">\n\n  </ion-item>\n\n  <ion-item class="pointer_item" (click)="goDetail_list()">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        Item01\n\n      </ion-col>\n\n      <ion-col col-6 class="qty_item">\n\n        3\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n  <ion-item class="pointer_item" (click)="goDetail_list()">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        Item03\n\n      </ion-col>\n\n      <ion-col col-6 class="qty_item">\n\n        1\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <button ion-button block (click)="goHomePage()">OK</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"E:\BGK48\src\pages\borrow\borrow.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BorrowPage);
    return BorrowPage;
}());

//# sourceMappingURL=borrow.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__returnlist_returnlist__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the ReturnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReturnPage = /** @class */ (function () {
    function ReturnPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
<<<<<<< HEAD
    }
    ReturnPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReturnPage');
=======
        this.camera = camera;
        this.http = http;
        this.items = new __WEBPACK_IMPORTED_MODULE_4__app_models__["e" /* Items */]();
    }
    AdditemPage.prototype.Create = function () {
        var _this = this;
        this.items.slot = this.navParams.data.slot;
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_models__["d" /* GlobalVarible */].host + "/api/Item/Create", this.items)
            .subscribe(function (data) {
            _this.navCtrl.pop();
        });
    };
    AdditemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdditemPage');
    };
    AdditemPage.prototype.goItemListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_list_item_list__["a" /* ItemListPage */]);
    };
    AdditemPage.prototype.AddItemToListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_list_item_list__["a" /* ItemListPage */]);
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
    };
    // QRcode(){
    //   this.barcodeScanner.scan().then(barcodeData => {
    //     console.log('Barcode data', barcodeData);
    //    }).catch(err => {
    //        console.log('Error', err);
    //    });
    // }
    // Camera(){
    //   const options: CameraOptions = {
    //     quality: 100,
    //     destinationType: this.camera.DestinationType.FILE_URI,
    //     encodingType: this.camera.EncodingType.JPEG,
    //     mediaType: this.camera.MediaType.PICTURE
    //   }
    //   this.camera.getPicture(options).then((imageData) => {
    //    // imageData is either a base64 encoded string or a file URI
    //    // If it's base64 (DATA_URL):
    //    let base64Image = 'data:image/jpeg;base64,' + imageData;
    //   }, (err) => {
    //    // Handle error
    //   });
    // }
    ReturnPage.prototype.returnlist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__returnlist_returnlist__["a" /* ReturnlistPage */]);
    };
    ReturnPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-return',template:/*ion-inline-start:"E:\BGK48\src\pages\returned\return.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Returned</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">A1</ion-item-divider>\n\n    <ion-item>Item1<p style="text-align:right">จำนวน 1 ชิ้น</p></ion-item>\n\n    <ion-item>Item2<p style="text-align:right">จำนวน 1 ชิ้น</p></ion-item>\n\n  </ion-item-group>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">A2</ion-item-divider>\n\n    <ion-item>Item1<p style="text-align:right">จำนวน 1 ชิ้น</p></ion-item>\n\n    <ion-item>Item2<p style="text-align:right">จำนวน 1 ชิ้น</p> </ion-item>\n\n  </ion-item-group>\n\n</ion-content>\n\n<ion-footer>\n\n  <!-- <button ion-button style="color:cyan">QR Scan</button> -->\n\n  <button ion-button block style="color:cyan" (click)="returnlist()">QR Scan</button>\n\n</ion-footer>'/*ion-inline-end:"E:\BGK48\src\pages\returned\return.html"*/,
=======
            selector: 'page-additem',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\additem\additem.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Add Item</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div text-center>\n\n    <img src="../../assets/imgs/image.png" style="float:center">\n\n  </div>\n\n  <br>\n\n  <ion-input type="text" placeholder="Item Name" [(ngModel)]="items.name"></ion-input>\n\n  <br>\n\n  <ion-input type="number" placeholder="Amount" [(ngModel)]="items.amount"></ion-input>\n\n  <br>\n\n  <ion-input type="text" placeholder="Description" [(ngModel)]="items.desc"></ion-input>\n\n</ion-content>\n\n\n\n  <ion-footer>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button block (click)="goItemListPage()">Cancel</button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button block (click)="Create()">ok</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-footer>'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\additem\additem.html"*/,
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ReturnPage);
    return ReturnPage;
}());

//# sourceMappingURL=return.js.map

/***/ }),

<<<<<<< HEAD
/***/ 110:
=======
/***/ 109:
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__waitperson_waitperson__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ReturnlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReturnlistPage = /** @class */ (function () {
    function ReturnlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReturnlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReturnlistPage');
    };
    ReturnlistPage.prototype.waitperson = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__waitperson_waitperson__["a" /* WaitpersonPage */]);
    };
    ReturnlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-returnlist',template:/*ion-inline-start:"E:\BGK48\src\pages\returnlist\returnlist.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Returnlist</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">A1</ion-item-divider>\n\n    <ion-item>\n\n      <ion-checkbox [(ngModel)]="mushrooms1"></ion-checkbox>\n\n      <ion-label>Item1</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-checkbox [(ngModel)]="mushrooms"></ion-checkbox>\n\n      <ion-label>Item2</ion-label>\n\n    </ion-item>\n\n  </ion-item-group>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <button ion-button block (click)="waitperson()">ok</button>\n\n</ion-footer>'/*ion-inline-end:"E:\BGK48\src\pages\returnlist\returnlist.html"*/,
=======
            selector: 'page-lend-qr',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\lend-qr\lend-qr.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>lend-qr</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <img src="../../assets/imgs/sample.png" alt="">\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <button ion-button block (click)="BorrowSelectPage()">OK</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\lend-qr\lend-qr.html"*/,
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ReturnlistPage);
    return ReturnlistPage;
}());

//# sourceMappingURL=returnlist.js.map

/***/ }),

<<<<<<< HEAD
/***/ 111:
=======
/***/ 110:
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitpersonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_models__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the WaitpersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
<<<<<<< HEAD
var WaitpersonPage = /** @class */ (function () {
    function WaitpersonPage(navCtrl, navParams) {
=======
var BorrowPage = /** @class */ (function () {
    function BorrowPage(navCtrl, navParams, http) {
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.databorrowList = [];
        this.databorrowList = navParams.data.dataBorrowList;
        __WEBPACK_IMPORTED_MODULE_3__app_models__["b" /* BorrowingId */].borrowingId = navParams.data.BorrowId;
        // console.log(this.databorrowList[0]);
        this.genQrCode = "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=" + navParams.data.BorrowId;
    }
<<<<<<< HEAD
    WaitpersonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WaitpersonPage');
=======
    BorrowPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = function (e) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_models__["d" /* GlobalVarible */].host + "/api/Item/deleteBorrow/" + _this.navParams.data.BorrowId, {})
                .subscribe(function (data) {
                _this.navCtrl.pop();
            });
        };
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
    };
    WaitpersonPage.prototype.goHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
<<<<<<< HEAD
    WaitpersonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-waitperson',template:/*ion-inline-start:"E:\BGK48\src\pages\waitperson\waitperson.html"*/'\n\n<ion-header>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <img src="../../assets/imgs/sample.png" alt="QRcode">\n\n  <br><br><br><br><br>\n\n  <p style="text-align: center">Status: รอพยานในการคืน</p>\n\n  <ion-footer>\n\n    <button ion-button block (click)="goHomePage()">ok</button>\n\n  </ion-footer>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\BGK48\src\pages\waitperson\waitperson.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], WaitpersonPage);
    return WaitpersonPage;
=======
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */])
    ], BorrowPage.prototype, "navBar", void 0);
    BorrowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-borrow',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\borrow\borrow.html"*/'<!--\n\n  Generated template for the BorrowPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>borrow</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n   <ion-grid>\n\n  <ion-row>\n\n    <ion-col text-center>\n\n      <img src="{{genQrCode}}" alt="QRcode">\n\n  \n\n    </ion-col>\n\n  </ion-row>\n\n      \n\n\n\n   </ion-grid>\n\n\n\n  <ion-grid>\n\n    <ion-list-header>\n\n      <ion-row>\n\n        <ion-col col-2 text-left>\n\n          #\n\n        </ion-col>\n\n        <ion-col col-6 text-center>\n\n          ชื่อของที่ยืม\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n          จำนวนที่ยืม\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list-header>\n\n  </ion-grid>\n\n  <ion-grid>\n\n    <ion-item style="margin-top: -23px;">\n\n      <ion-row *ngFor="let borrowList of databorrowList;index as i">\n\n        <ion-col col-2>{{i+1}}</ion-col>\n\n        <ion-col col-6 text-center>{{borrowList.name}}</ion-col>\n\n        <ion-col col-4 text-center>{{borrowList.borrowqty}}</ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n\n\n  </ion-grid>\n\n  <!-- <ion-item (click)="goDetail_list()">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n\n\n      </ion-col>\n\n      <ion-col col-6 class="qty_item">\n\n        3\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item> -->\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <button ion-button block (click)="goHomePage()">OK</button>\n\n</ion-footer>'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\borrow\borrow.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], BorrowPage);
    return BorrowPage;
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
}());

//# sourceMappingURL=waitperson.js.map

/***/ }),

<<<<<<< HEAD
/***/ 112:
=======
/***/ 111:
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LendQrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__borrow_select_borrow_select__ = __webpack_require__(54);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__returnlist_returnlist__ = __webpack_require__(112);
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LendQrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LendQrPage = /** @class */ (function () {
    function LendQrPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LendQrPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LendQrPage');
    };
    LendQrPage.prototype.BorrowSelectPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__borrow_select_borrow_select__["a" /* BorrowSelectPage */]);
    };
    LendQrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-lend-qr',template:/*ion-inline-start:"E:\BGK48\src\pages\lend-qr\lend-qr.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>lend-qr</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <img src="../../assets/imgs/sample.png" alt="">\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <button ion-button block (click)="BorrowSelectPage()">OK</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"E:\BGK48\src\pages\lend-qr\lend-qr.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LendQrPage);
    return LendQrPage;
=======
            selector: 'page-return',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\returned\return.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Returned</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">A1</ion-item-divider>\n\n    <ion-item>Item1<p style="text-align:right">จำนวน 1 ชิ้น</p></ion-item>\n\n    <ion-item>Item2<p style="text-align:right">จำนวน 1 ชิ้น</p></ion-item>\n\n  </ion-item-group>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">A2</ion-item-divider>\n\n    <ion-item>Item1<p style="text-align:right">จำนวน 1 ชิ้น</p></ion-item>\n\n    <ion-item>Item2<p style="text-align:right">จำนวน 1 ชิ้น</p> </ion-item>\n\n  </ion-item-group>\n\n</ion-content>\n\n<ion-footer>\n\n  <!-- <button ion-button style="color:cyan">QR Scan</button> -->\n\n  <button ion-button block style="color:cyan" (click)="returnlist()">QR Scan</button>\n\n</ion-footer>'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\returned\return.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ReturnPage);
    return ReturnPage;
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
}());

//# sourceMappingURL=lend-qr.js.map

/***/ }),

<<<<<<< HEAD
/***/ 113:
=======
/***/ 112:
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(33);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__waitperson_waitperson__ = __webpack_require__(113);
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPage = /** @class */ (function () {
    function EditPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.items = new __WEBPACK_IMPORTED_MODULE_2__app_models__["b" /* Items */];
    }
    EditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPage');
    };
    EditPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_models__["a" /* GlobalVarible */].host + "/api/Item/GetItem/" + this.navParams.data.id)
            .subscribe(function (data) {
            _this.items = data;
        });
    };
    EditPage.prototype.edit = function () {
        var _this = this;
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_models__["a" /* GlobalVarible */].host + "/api/Item/edit", this.items)
            .subscribe(function (data) {
            _this.navCtrl.pop();
        });
    };
    EditPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm edit?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.edit();
                    }
                }
            ]
        });
        confirm.present();
    };
    EditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-edit',template:/*ion-inline-start:"E:\BGK48\src\pages\edit\edit.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Edit Item</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div text-center>\n\n    <img src="../../assets/imgs/img1.jpg" style="float:center">\n\n  </div>\n\n  <br>\n\n  <ion-input type="text" placeholder="Item Name" [(ngModel)]="items.name"></ion-input>\n\n  <br>\n\n  <ion-input type="number" placeholder="Amount" [(ngModel)]="items.amount"></ion-input>\n\n  <br>\n\n  <ion-input type="text" placeholder="Description" [(ngModel)]="items.desc"></ion-input>\n\n</ion-content>\n\n\n\n  <ion-footer>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button block (click)="goItemListPage()">Cancel</button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button block (click)="showConfirm()">ok</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-footer>'/*ion-inline-end:"E:\BGK48\src\pages\edit\edit.html"*/,
=======
            selector: 'page-returnlist',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\returnlist\returnlist.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Returnlist</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">A1</ion-item-divider>\n\n    <ion-item>\n\n      <ion-checkbox [(ngModel)]="mushrooms1"></ion-checkbox>\n\n      <ion-label>Item1</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-checkbox [(ngModel)]="mushrooms"></ion-checkbox>\n\n      <ion-label>Item2</ion-label>\n\n    </ion-item>\n\n  </ion-item-group>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <button ion-button block (click)="waitperson()">ok</button>\n\n</ion-footer>'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\returnlist\returnlist.html"*/,
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditPage);
    return EditPage;
}());

//# sourceMappingURL=edit.js.map

/***/ }),

<<<<<<< HEAD
/***/ 114:
=======
/***/ 113:
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_list_item_list__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(33);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(48);
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AdditemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdditemPage = /** @class */ (function () {
    function AdditemPage(navCtrl, navParams, camera, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.http = http;
        this.items = new __WEBPACK_IMPORTED_MODULE_4__app_models__["b" /* Items */]();
    }
    AdditemPage.prototype.Create = function () {
        var _this = this;
        this.items.slot = this.navParams.data.slot;
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_models__["a" /* GlobalVarible */].host + "/api/Item/Create", this.items)
            .subscribe(function (data) {
            _this.navCtrl.pop();
        });
    };
    AdditemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdditemPage');
    };
    AdditemPage.prototype.goItemListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_list_item_list__["a" /* ItemListPage */]);
    };
    AdditemPage.prototype.AddItemToListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_list_item_list__["a" /* ItemListPage */]);
    };
    AdditemPage.prototype.Camera = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    AdditemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-additem',template:/*ion-inline-start:"E:\BGK48\src\pages\additem\additem.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Add Item</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div text-center>\n\n    <img src="../../assets/imgs/image.png" style="float:center">\n\n  </div>\n\n  <br>\n\n  <ion-input type="text" placeholder="Item Name" [(ngModel)]="items.name"></ion-input>\n\n  <br>\n\n  <ion-input type="number" placeholder="Amount" [(ngModel)]="items.amount"></ion-input>\n\n  <br>\n\n  <ion-input type="text" placeholder="Description" [(ngModel)]="items.desc"></ion-input>\n\n</ion-content>\n\n\n\n  <ion-footer>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button block (click)="goItemListPage()">Cancel</button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button block (click)="Create()">ok</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-footer>'/*ion-inline-end:"E:\BGK48\src\pages\additem\additem.html"*/,
=======
            selector: 'page-waitperson',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\waitperson\waitperson.html"*/'\n\n<ion-header>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <img src="../../assets/imgs/sample.png" alt="QRcode">\n\n  <br><br><br><br><br>\n\n  <p style="text-align: center">Status: รอพยานในการคืน</p>\n\n  <ion-footer>\n\n    <button ion-button block (click)="goHomePage()">ok</button>\n\n  </ion-footer>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\waitperson\waitperson.html"*/,
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], AdditemPage);
    return AdditemPage;
}());

//# sourceMappingURL=additem.js.map

/***/ }),

<<<<<<< HEAD
/***/ 115:
=======
/***/ 114:
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the KeyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KeyListPage = /** @class */ (function () {
    function KeyListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KeyListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KeyListPage');
    };
    KeyListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-key-list',template:/*ion-inline-start:"E:\BGK48\src\pages\key-list\key-list.html"*/'<ion-header>\n\n  <ion-navbar text-center>\n\n    <ion-title>รายชื่อคนถือกุญแจ</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>Terminator II</ion-item>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n\n    <ion-item>Blade Runner</ion-item>\n\n    <ion-item>Terminator II</ion-item>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n\n    <ion-item>Blade Runner</ion-item>\n\n    <ion-item>Terminator II</ion-item>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n\n    <ion-item>Blade Runner</ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\BGK48\src\pages\key-list\key-list.html"*/,
=======
            selector: 'page-key-list',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\key-list\key-list.html"*/'<ion-header>\n\n  <ion-navbar text-center>\n\n    <ion-title>รายชื่อคนถือกุญแจ</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>Terminator II</ion-item>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n\n    <ion-item>Blade Runner</ion-item>\n\n    <ion-item>Terminator II</ion-item>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n\n    <ion-item>Blade Runner</ion-item>\n\n    <ion-item>Terminator II</ion-item>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n\n    <ion-item>Blade Runner</ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\key-list\key-list.html"*/,
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], KeyListPage);
    return KeyListPage;
}());

//# sourceMappingURL=key-list.js.map

/***/ }),

<<<<<<< HEAD
/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(42);
=======
/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(21);
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



<<<<<<< HEAD
/**
 * Generated class for the ConfirmPage page.
=======


/**
 * Generated class for the EditPage page.
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
<<<<<<< HEAD
var ConfirmPage = /** @class */ (function () {
    function ConfirmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmPage');
    };
    ConfirmPage.prototype.goHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm',template:/*ion-inline-start:"E:\BGK48\src\pages\confirm\confirm.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Confirm</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h3>Username</h3>\n\n  <ion-list>\n\n    <ion-item-sliding>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/logo.png">\n\n        </ion-avatar>\n\n        <h2>Item01</h2>\n\n        <p>2 ea</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/logo.png">\n\n        </ion-avatar>\n\n        <h2>Item03</h2>\n\n        <p>3 ea</p>\n\n      </ion-item>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer padding>\n\n  <ion-col >\n\n    <button ion-button block (click)="goHomePage()">Confirm</button>\n\n  </ion-col>\n\n\n\n</ion-footer>'/*ion-inline-end:"E:\BGK48\src\pages\confirm\confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ConfirmPage);
    return ConfirmPage;
}());

//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 128:
=======
var EditPage = /** @class */ (function () {
    function EditPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.items = new __WEBPACK_IMPORTED_MODULE_2__app_models__["e" /* Items */];
    }
    EditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPage');
    };
    EditPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_models__["d" /* GlobalVarible */].host + "/api/Item/GetItem/" + this.navParams.data.id)
            .subscribe(function (data) {
            _this.items = data;
        });
    };
    EditPage.prototype.edit = function () {
        var _this = this;
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_models__["d" /* GlobalVarible */].host + "/api/Item/edit", this.items)
            .subscribe(function (data) {
            _this.navCtrl.pop();
        });
    };
    EditPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm edit?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.edit();
                    }
                }
            ]
        });
        confirm.present();
    };
    EditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\edit\edit.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Edit Item</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div text-center>\n    <img src="../../assets/imgs/img1.jpg" style="float:center">\n  </div>\n  <br>\n  <ion-input type="text" placeholder="Item Name" [(ngModel)]="items.name"></ion-input>\n  <br>\n  <ion-input type="number" placeholder="Amount" [(ngModel)]="items.amount"></ion-input>\n  <br>\n  <ion-input type="text" placeholder="Description" [(ngModel)]="items.desc"></ion-input>\n</ion-content>\n\n  <ion-footer>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button block (click)="goItemListPage()">Cancel</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button block (click)="showConfirm()">ok</button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\edit\edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditPage);
    return EditPage;
}());

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 127:
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
<<<<<<< HEAD
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 170:
=======
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 169:
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/additem/additem.module": [
		291,
		12
	],
	"../pages/borrow-select/borrow-select.module": [
		290,
		11
	],
	"../pages/borrow/borrow.module": [
		293,
		10
	],
	"../pages/confirm/confirm.module": [
		295,
		9
	],
	"../pages/edit/edit.module": [
		292,
		8
	],
	"../pages/item-detail/item-detail.module": [
		296,
		7
	],
	"../pages/item-list/item-list.module": [
		294,
		6
	],
	"../pages/key-list/key-list.module": [
		299,
		5
	],
	"../pages/lend-qr/lend-qr.module": [
		297,
		4
	],
	"../pages/login/login.module": [
<<<<<<< HEAD
		298,
=======
		299,
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
		3
	],
	"../pages/returned/return.module": [
		300,
		2
	],
	"../pages/returnlist/returnlist.module": [
		302,
		1
	],
	"../pages/waitperson/waitperson.module": [
		301,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
<<<<<<< HEAD
webpackAsyncContext.id = 170;
=======
webpackAsyncContext.id = 169;
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmPage = /** @class */ (function () {
    function ConfirmPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        console.log(navParams.data.BorrowingIdRe);
    }
    ConfirmPage.prototype.ionViewDidLoad = function () {
    };
    ConfirmPage.prototype.goHomePage = function () {
    };
    ConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\confirm\confirm.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Confirm</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h3>Username</h3>\n\n  <ion-list>\n\n    <ion-item-sliding>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/logo.png">\n\n        </ion-avatar>\n\n        <h2>Item01</h2>\n\n        <p>2 ea</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/logo.png">\n\n        </ion-avatar>\n\n        <h2>Item03</h2>\n\n        <p>3 ea</p>\n\n      </ion-item>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer padding>\n\n  <ion-col >\n\n    <button ion-button block (click)="goHomePage()">Confirm</button>\n\n  </ion-col>\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\confirm\confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ConfirmPage);
    return ConfirmPage;
}());

//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_key_list_key_list__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_item_detail_item_detail__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_lend_qr_lend_qr__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_borrow_borrow__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_borrow_select_borrow_select__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_returned_return__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_returnlist_returnlist__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_waitperson_waitperson__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_item_list_item_list__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_confirm_confirm__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_additem_additem__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_edit_edit__ = __webpack_require__(113);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_key_list_key_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_item_detail_item_detail__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_lend_qr_lend_qr__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_borrow_borrow__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_borrow_select_borrow_select__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_returned_return__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_returnlist_returnlist__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_waitperson_waitperson__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_item_list_item_list__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_confirm_confirm__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_additem_additem__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_edit_edit__ = __webpack_require__(115);
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_key_list_key_list__["a" /* KeyListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_lend_qr_lend_qr__["a" /* LendQrPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_borrow_borrow__["a" /* BorrowPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_borrow_select_borrow_select__["a" /* BorrowSelectPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_returned_return__["a" /* ReturnPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_returnlist_returnlist__["a" /* ReturnlistPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_waitperson_waitperson__["a" /* WaitpersonPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_item_list_item_list__["a" /* ItemListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_additem_additem__["a" /* AdditemPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_edit_edit__["a" /* EditPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/borrow-select/borrow-select.module#BorrowSelectPageModule', name: 'BorrowSelectPage', segment: 'borrow-select', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/additem/additem.module#AdditemPageModule', name: 'AdditemPage', segment: 'additem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit/edit.module#EditPageModule', name: 'EditPage', segment: 'edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/borrow/borrow.module#BorrowPageModule', name: 'BorrowPage', segment: 'borrow', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-list/item-list.module#ItemListPageModule', name: 'ItemListPage', segment: 'item-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm/confirm.module#ConfirmPageModule', name: 'ConfirmPage', segment: 'confirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lend-qr/lend-qr.module#LendQrPageModule', name: 'LendQrPage', segment: 'lend-qr', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
<<<<<<< HEAD
                        { loadChildren: '../pages/key-list/key-list.module#KeyListPageModule', name: 'KeyListPage', segment: 'key-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/returned/return.module#ReturnPageModule', name: 'ReturnPage', segment: 'return', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/waitperson/waitperson.module#WaitpersonPageModule', name: 'WaitpersonPage', segment: 'waitperson', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/returnlist/returnlist.module#ReturnlistPageModule', name: 'ReturnlistPage', segment: 'returnlist', priority: 'low', defaultHistory: [] }
=======
                        { loadChildren: '../pages/returned/return.module#ReturnPageModule', name: 'ReturnPage', segment: 'return', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/returnlist/returnlist.module#ReturnlistPageModule', name: 'ReturnlistPage', segment: 'returnlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/waitperson/waitperson.module#WaitpersonPageModule', name: 'WaitpersonPage', segment: 'waitperson', priority: 'low', defaultHistory: [] }
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_key_list_key_list__["a" /* KeyListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_lend_qr_lend_qr__["a" /* LendQrPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_borrow_borrow__["a" /* BorrowPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_borrow_select_borrow_select__["a" /* BorrowSelectPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_returned_return__["a" /* ReturnPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_returnlist_returnlist__["a" /* ReturnlistPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_waitperson_waitperson__["a" /* WaitpersonPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_item_list_item_list__["a" /* ItemListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_additem_additem__["a" /* AdditemPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_edit_edit__["a" /* EditPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["a" /* HttpClient */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BorrowingItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GlobalVarible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Userlogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BorrowingId; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(21);

var Items = /** @class */ (function () {
    function Items() {
    }
    return Items;
}());

var BorrowItem = /** @class */ (function () {
    function BorrowItem() {
    }
    return BorrowItem;
}());

var BorrowingItem = /** @class */ (function () {
    function BorrowingItem() {
    }
    return BorrowingItem;
}());

//property name start with lower case
var GlobalVarible = /** @class */ (function () {
    function GlobalVarible() {
    }
    GlobalVarible.host = "http://demoionic.azurewebsites.net";
    GlobalVarible.httpOptions = {
        headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
    };
    return GlobalVarible;
}());

var Userlogin = /** @class */ (function () {
    function Userlogin() {
    }
    return Userlogin;
}());

var BorrowingId = /** @class */ (function () {
    function BorrowingId() {
    }
    return BorrowingId;
}());

//# sourceMappingURL=models.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\BGK48\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\BGK48\src\app\app.html"*/
=======
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\app\app.html"*/
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(85);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__returned_return__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_list_item_list__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__key_list_key_list__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__borrow_select_borrow_select__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__confirm_confirm__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__item_detail_item_detail__ = __webpack_require__(56);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__returned_return__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_list_item_list__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__key_list_key_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__borrow_select_borrow_select__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__item_detail_item_detail__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_models__ = __webpack_require__(27);
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = /** @class */ (function () {
    // items: Item[];
    function HomePage(navCtrl, camera, barcodeScanner, navParams) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.barcodeScanner = barcodeScanner;
        this.navParams = navParams;
        this.selectedItem = navParams.get('item');
        // console.log(navParams.data.Username);
        console.log("logingname>>" + __WEBPACK_IMPORTED_MODULE_10__app_models__["f" /* Userlogin */].loginname);
    }
    HomePage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__borrow_select_borrow_select__["a" /* BorrowSelectPage */], {
            item: item
        });
    };
    HomePage.prototype.goKeyListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__key_list_key_list__["a" /* KeyListPage */]);
    };
    HomePage.prototype.goItemlist = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__item_list_item_list__["a" /* ItemListPage */], { numberlocker: data, Username: this.navParams.data.Username });
    };
    HomePage.prototype.QRScan = function () {
        // BorrowingId.borrowingId
        // this.barcodeScanner.scan().then(barcodeData => {
        //   console.log('Barcode data', barcodeData.text);
        //   this.showQRtext = barcodeData.text;
        //   // this.navCtrl.push(BorrowSelectPage)
        //   // barcodeData.text != undefined
        //   if (barcodeData.text.length == 36) {
        //     this.navCtrl.push(ConfirmPage, { BorrowingIdRe: barcodeData.text });
        //   }
        //   else {
        //     this.navCtrl.push(BorrowSelectPage, { text: barcodeData.text});
        //   }
        // }).catch(err => {
        //   console.log('Error', err);
        // });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__borrow_select_borrow_select__["a" /* BorrowSelectPage */], { text: "A1" });
    };
    HomePage.prototype.Camera = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            //  let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    HomePage.prototype.Showitem_detail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__item_detail_item_detail__["a" /* ItemDetailPage */]);
    };
    HomePage.prototype.goLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.Returned = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__returned_return__["a" /* ReturnPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-home',template:/*ion-inline-start:"E:\BGK48\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      Store\n\n    </ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button right color="danger" (click)="goLoginPage()">Logout</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist(\'A1\')" class="pointer_card">\n\n        \n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/it.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>A1</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist(\'A2\')" class="pointer_card">\n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/ขนม.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>A2</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist(\'B1\')" class="pointer_card">\n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/it.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>B1</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist(\'B2\')" class="pointer_card">\n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/ขนม.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>B2</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer ion-row>\n\n  <ion-col col-4>\n\n    <button ion-button block (click)="Returned()">Returned</button>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n    <button ion-button block (click)="QRScan()">QR</button>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n    <button ion-button block (click)="goKeyListPage()">Key</button>\n\n  </ion-col>\n\n</ion-footer>'/*ion-inline-end:"E:\BGK48\src\pages\home\home.html"*/
=======
            selector: 'page-home',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      Store\n\n    </ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button right color="danger" (click)="goLoginPage()">Logout</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist(\'A1\')" class="pointer_card">\n\n        \n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/it.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>A1</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist(\'A2\')" class="pointer_card"> \n\n          <!--  -->\n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/ขนม.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            \n\n          <h3>A2</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist(\'B1\')" class="pointer_card">\n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/it.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>B1</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist(\'B2\')" class="pointer_card">\n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/ขนม.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>B2</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer ion-row>\n\n  <ion-col col-4>\n\n    <button ion-button block (click)="Returned()">Returned</button>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n    <button ion-button block (click)="QRScan()">QR</button>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n    <button ion-button block (click)="goKeyListPage()">Key</button>\n\n  </ion-col>\n\n</ion-footer>'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\home\home.html"*/
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowSelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__borrow_borrow__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BorrowSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BorrowSelectPage = /** @class */ (function () {
    function BorrowSelectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BorrowSelectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BorrowSelectPage');
    };
    BorrowSelectPage.prototype.BorrowPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__borrow_borrow__["a" /* BorrowPage */]);
    };
    BorrowSelectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-borrow-select',template:/*ion-inline-start:"E:\BGK48\src\pages\borrow-select\borrow-select.html"*/'<ion-header>\n\n  <ion-navbar text-center>\n\n    <ion-title>Box Name</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>ชื่อของที่จะยืม</ion-label>\n\n    <ion-checkbox color="blue" checked="false"></ion-checkbox>\n\n    <ion-select [(ngModel)]="borroamout1" interface="popover">\n\n      <ion-option value="1">1</ion-option>\n\n      <ion-option value="2">2</ion-option>\n\n      <ion-option value="3">3</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>ชื่อของที่จะยืม</ion-label>\n\n    <ion-checkbox color="blue" checked="false"></ion-checkbox>\n\n    <ion-select [(ngModel)]="borroamout2" interface="popover">\n\n      <ion-option value="1">1</ion-option>\n\n      <ion-option value="2">2</ion-option>\n\n      <ion-option value="3">3</ion-option>\n\n      <ion-option value="4">4</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>ชื่อของที่จะยืม</ion-label>\n\n    <ion-checkbox color="blue" checked="false"></ion-checkbox>\n\n    <ion-select [(ngModel)]="borroamout3" interface="popover">\n\n      <ion-option value="1">1</ion-option>\n\n      <ion-option value="2">2</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n</ion-content>\n\n\n\n<ion-footer ion-row>\n\n    <button ion-button block (click)="BorrowPage()">ยืม</button>\n\n</ion-footer>'/*ion-inline-end:"E:\BGK48\src\pages\borrow-select\borrow-select.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BorrowSelectPage);
    return BorrowSelectPage;
}());

//# sourceMappingURL=borrow-select.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_detail_item_detail__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__additem_additem__ = __webpack_require__(114);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_detail_item_detail__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__additem_additem__ = __webpack_require__(108);
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ItemListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemListPage = /** @class */ (function () {
    function ItemListPage(navCtrl, navParams, http) {
        // this.http.get<Items[]>(GlobalVarible.host + "/api/Item/GetItemslot/" + this.number_locker).subscribe( data=> {this.items = data;});  
        // console.log(this.items);
        // console.log(navParams.data.Username);
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    ItemListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.number_locker = this.navParams.data.numberlocker;
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_models__["d" /* GlobalVarible */].host + "/api/Item/GetItemslot/" + this.number_locker).subscribe(function (data) {
            _this.items = data;
        });
        console.log(this.items);
    };
    ItemListPage.prototype.goDetail_list = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_detail_item_detail__["a" /* ItemDetailPage */], { id: data });
    };
    ItemListPage.prototype.additem = function (number_locker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__additem_additem__["a" /* AdditemPage */], { slot: number_locker });
    };
    ItemListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-item-list',template:/*ion-inline-start:"E:\BGK48\src\pages\item-list\item-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      <label> List {{number_locker}}</label>\n\n    </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button color="secondary" icon-only (click)="additem(number_locker)">\n\n          <ion-icon name="add-circle"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      Item List      \n\n    </ion-title>\n\n    \n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <h4>รายการของ</h4>\n\n    </ion-col>\n\n    <ion-col col-6 class="qty_item">\n\n      <h4>จำนวน</h4>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-item class="pointer_item" *ngFor="let itemlist of items" (click)="goDetail_list(itemlist.id)">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        {{itemlist.name}}\n\n      </ion-col>\n\n      <ion-col col-6 class="qty_item">\n\n        {{itemlist.amount}}/{{itemlist.totalamount}}\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"E:\BGK48\src\pages\item-list\item-list.html"*/,
=======
            selector: 'page-item-list',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\item-list\item-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      <label> List {{number_locker}}</label>\n\n    </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button color="secondary" icon-only (click)="additem(number_locker)">\n\n          <ion-icon name="add-circle"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      Item List      \n\n    </ion-title>\n\n    \n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <h4>รายการของ</h4>\n\n    </ion-col>\n\n    <ion-col col-6 class="qty_item">\n\n      <h4>จำนวน</h4>\n\n    </ion-col>\n\n  </ion-row>\n\n  <div *ngIf="items">\n\n    <ion-item class="pointer_item" *ngFor="let itemlist of items" (click)="goDetail_list(itemlist.id)">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          {{itemlist.name}}\n\n        </ion-col>\n\n        <ion-col col-6 class="qty_item">\n\n          {{itemlist.amount}}/{{itemlist.totalamount}}\n\n        </ion-col>\n\n      </ion-row>\n\n  \n\n    </ion-item>\n\n  </div>\n\n  \n\n  \n\n</ion-content>'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\item-list\item-list.html"*/,
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], ItemListPage);
    return ItemListPage;
}());

//# sourceMappingURL=item-list.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lend_qr_lend_qr__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_edit__ = __webpack_require__(113);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lend_qr_lend_qr__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_edit__ = __webpack_require__(115);
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemDetailPage = /** @class */ (function () {
    function ItemDetailPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.items = new __WEBPACK_IMPORTED_MODULE_4__app_models__["e" /* Items */];
    }
    ItemDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemDetailPage');
    };
    ItemDetailPage.prototype.Lend = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lend_qr_lend_qr__["a" /* LendQrPage */]);
    };
    ItemDetailPage.prototype.delete = function (id) {
        var _this = this;
<<<<<<< HEAD
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_models__["a" /* GlobalVarible */].host + "/api/Item/delete/" + id, {})
=======
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_models__["d" /* GlobalVarible */].host + "/api/Item/delete/" + id, {})
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
            .subscribe(function (data) {
            _this.navCtrl.pop();
        });
    };
    ItemDetailPage.prototype.ionViewDidEnter = function () {
        var _this = this;
<<<<<<< HEAD
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_models__["a" /* GlobalVarible */].host + "/api/Item/GetItem/" + this.navParams.data.id)
=======
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_models__["d" /* GlobalVarible */].host + "/api/Item/GetItem/" + this.navParams.data.id)
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
            .subscribe(function (data) {
            _this.items = data;
        });
    };
    ItemDetailPage.prototype.edit = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_edit__["a" /* EditPage */], { id: data });
    };
    ItemDetailPage.prototype.showConfirm = function (id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm Delete?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.delete(id);
                    }
                }
            ]
        });
        confirm.present();
    };
    ItemDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-item-detail',template:/*ion-inline-start:"E:\BGK48\src\pages\item-detail\item-detail.html"*/'<ion-header>\n\n\n\n  <ion-navbar text-center>\n\n    <ion-title>Item Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n        <img src="../../assets/imgs/img1.jpg" alt="">\n\n    </ion-col>\n\n    <ion-col col-12>\n\n      <p>ชื่อของ: {{items.name}}</p>\n\n      <p>จำนวนทั้วหมด: {{items.totalamount}}</p>\n\n      <p>จำนวนที่เหลือ: {{items.amount}}</p>\n\n\n\n      <p>รายละเอียยด: {{items.desc}}</p>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n   \n\n \n\n\n\n</ion-content>\n\n\n\n<ion-footer ion-row>\n\n    <ion-col col-6>\n\n      <button ion-button block (click)="edit(items.id)">EDIT</button>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <button ion-button block (click)="showConfirm(items.id)">DELETE</button>\n\n    </ion-col>\n\n  </ion-footer>'/*ion-inline-end:"E:\BGK48\src\pages\item-detail\item-detail.html"*/,
=======
            selector: 'page-item-detail',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\item-detail\item-detail.html"*/'<ion-header>\n\n\n\n  <ion-navbar text-center>\n\n    <ion-title>Item Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n        <img src="../../assets/imgs/img1.jpg" alt="">\n\n    </ion-col>\n\n    <ion-col col-12>\n\n      <p>ชื่อของ: {{items.name}}</p>\n\n      <p>จำนวนทั้วหมด: {{items.totalamount}}</p>\n\n      <p>จำนวนที่เหลือ: {{items.amount}}</p>\n\n\n\n      <p>รายละเอียยด: {{items.desc}}</p>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n   \n\n \n\n\n\n</ion-content>\n\n\n\n<ion-footer ion-row>\n\n    <ion-col col-6>\n\n      <button ion-button block (click)="edit(items.id)">EDIT</button>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <button ion-button block (click)="showConfirm(items.id)">DELETE</button>\n\n    </ion-col>\n\n  </ion-footer>'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\item-detail\item-detail.html"*/,
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ItemDetailPage);
    return ItemDetailPage;
}());

//# sourceMappingURL=item-detail.js.map

/***/ }),

<<<<<<< HEAD
=======
/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowSelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__borrow_borrow__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BorrowSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BorrowSelectPage = /** @class */ (function () {
    function BorrowSelectPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.borrowItem = [];
        this.boxName = navParams.data.text;
        console.log(navParams.data.text);
    }
    BorrowSelectPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_models__["d" /* GlobalVarible */].host + "/api/Item/GetItemslot/" + this.navParams.data.text).subscribe(function (data) {
            console.log(data);
            var borrowItems = data.map(function (item) {
                var borrowItem = new __WEBPACK_IMPORTED_MODULE_4__app_models__["a" /* BorrowItem */]();
                borrowItem.id = item.id;
                borrowItem.name = item.name;
                borrowItem.amount = item.amount;
                borrowItem.totalamount = item.totalamount;
                borrowItem.ischecked = false;
                return borrowItem;
            });
            _this.items = borrowItems;
        });
    };
    BorrowSelectPage.prototype.BorrowPage = function () {
        var _this = this;
        var seletedItem = this.items.filter(function (item) { return item.ischecked == true; });
        var borrowingItem = new __WEBPACK_IMPORTED_MODULE_4__app_models__["c" /* BorrowingItem */]();
        borrowingItem.items = seletedItem;
        borrowingItem.borrower = __WEBPACK_IMPORTED_MODULE_4__app_models__["f" /* Userlogin */].loginname;
        console.log(borrowingItem.items);
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_models__["d" /* GlobalVarible */].host + "/api/Item/addBorrow", borrowingItem, __WEBPACK_IMPORTED_MODULE_4__app_models__["d" /* GlobalVarible */].httpOptions).subscribe(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__borrow_borrow__["a" /* BorrowPage */], { BorrowId: data.id, dataBorrowList: borrowingItem.items });
        });
    };
    BorrowSelectPage.prototype.checkeditem = function (data, e) {
        data.ischecked = e.checked;
    };
    BorrowSelectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-borrow-select',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\borrow-select\borrow-select.html"*/'<ion-header>\n\n  <ion-navbar text-center>\n\n    <ion-title>{{boxName}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div *ngFor="let itemlist of items">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-1>\n\n          <ion-checkbox color="blue" (ionChange)="checkeditem(itemlist,$event)"></ion-checkbox>\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          <p> {{itemlist.name}}</p><br>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p>{{itemlist.totalamount}}</p>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p>{{itemlist.amount}}</p>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <ion-input type="number" min="0" max="{{itemlist.amount}}" [(ngModel)]="itemlist.borrowqty" placeholder="จำนวนที่ยืม"></ion-input>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n\n\n\n\n      <!-- <ion-label>Employee</ion-label>\n\n        <ion-select [(ngModel)]="employee" [compareWith]="compareFn">\n\n          <ion-option *ngFor="let itemlist.totalamount of num" [value]="num"></ion-option>\n\n        </ion-select> -->\n\n    </ion-grid>\n\n\n\n\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer ion-row>\n\n  <button ion-button block (click)="BorrowPage()">ยืม</button>\n\n</ion-footer>'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\borrow-select\borrow-select.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], BorrowSelectPage);
    return BorrowSelectPage;
}());

//# sourceMappingURL=borrow-select.js.map

/***/ }),

>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_models__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.dataUsername = function () {
    };
    LoginPage.prototype.goHomePage = function () {
        __WEBPACK_IMPORTED_MODULE_3__app_models__["f" /* Userlogin */].loginname = this.userLogin;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-login',template:/*ion-inline-start:"E:\BGK48\src\pages\login\login.html"*/'<ion-content padding text-center>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <h1>Login</h1>\n\n  <br><br>\n\n  <ion-item>\n\n    <ion-input type="text" placeholder="Username"></ion-input>\n\n  </ion-item><br><br>\n\n  <button ion-button (click)="goHomePage()">Login</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\BGK48\src\pages\login\login.html"*/,
=======
            selector: 'page-login',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\login\login.html"*/'<ion-content padding text-center>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <h1>Login</h1>\n\n  <br><br>\n\n  <ion-item>\n\n    <ion-input type="text" [(ngModel)]="userLogin" placeholder="Username"></ion-input>\n\n  </ion-item><br><br>\n\n  <button ion-button (click)="goHomePage()">Login</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\login\login.html"*/,
>>>>>>> de0d60cc57841992e80e1409020d2af034663c36
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map