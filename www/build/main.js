<<<<<<< HEAD
webpackJsonp([11],{
=======
webpackJsonp([12],{
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
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
            selector: 'page-borrow',template:/*ion-inline-start:"D:\BGK48\src\pages\borrow\borrow.html"*/'<!--\n\n  Generated template for the BorrowPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>borrow</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <img src="../../assets/imgs/sample.png" alt="QRcode">\n\n  </ion-item>\n\n  <ion-item class="pointer_item" (click)="goDetail_list()">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        Item01\n\n      </ion-col>\n\n      <ion-col col-6 class="qty_item">\n\n        3\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n  <ion-item class="pointer_item" (click)="goDetail_list()">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        Item03\n\n      </ion-col>\n\n      <ion-col col-6 class="qty_item">\n\n        1\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <button ion-button block (click)="goHomePage()">OK</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\BGK48\src\pages\borrow\borrow.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], BorrowPage);
    return BorrowPage;
}());

//# sourceMappingURL=borrow.js.map
=======

/**
 * Generated class for the AdditemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdditemPage = /** @class */ (function () {
    function AdditemPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdditemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdditemPage');
    };
    AdditemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-additem',template:/*ion-inline-start:"D:\work1\BGK48\src\pages\additem\additem.html"*/'<!--\n  Generated template for the AdditemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>additem</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img src="../../assets/imgs/image.png" style="float:center">\n  <br><br><br>\n  <p style="text-align: center">รายละเอียด</p>\n\n\n  <ion-footer>\n    <ion-col col=6><button ion-button round (click)="waitperson()">Cancel</button></ion-col>\n    <ion-col col=6><button ion-button round (click)="waitperson()">ok</button></ion-col>\n  </ion-footer>\n\n\n</ion-content>'/*ion-inline-end:"D:\work1\BGK48\src\pages\additem\additem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AdditemPage);
    return AdditemPage;
}());

//# sourceMappingURL=additem.js.map
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__returnlist_returnlist__ = __webpack_require__(106);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__borrow_borrow__ = __webpack_require__(106);
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
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
 * Generated class for the ReturnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReturnPage = /** @class */ (function () {
    function ReturnPage(navCtrl, navParams, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
    }
    ReturnPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReturnPage');
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__returnlist_returnlist__["a" /* ReturnlistPage */]);
    };
    ReturnPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-return',template:/*ion-inline-start:"D:\BGK48\src\pages\returned\return.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Returned</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">A1</ion-item-divider>\n\n    <ion-item>Item1<p style="text-align:right">จำนวน 1 ชิ้น</p></ion-item>\n\n    <ion-item>Item2<p style="text-align:right">จำนวน 1 ชิ้น</p></ion-item>\n\n  </ion-item-group>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">A2</ion-item-divider>\n\n    <ion-item>Item1<p style="text-align:right">จำนวน 1 ชิ้น</p></ion-item>\n\n    <ion-item>Item2<p style="text-align:right">จำนวน 1 ชิ้น</p> </ion-item>\n\n  </ion-item-group>\n\n</ion-content>\n\n<ion-footer>\n\n  <!-- <button ion-button style="color:cyan">QR Scan</button> -->\n\n  <button ion-button block style="color:cyan" (click)="returnlist()">QR Scan</button>\n\n</ion-footer>'/*ion-inline-end:"D:\BGK48\src\pages\returned\return.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], ReturnPage);
    return ReturnPage;
}());

//# sourceMappingURL=return.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__waitperson_waitperson__ = __webpack_require__(107);
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
            selector: 'page-returnlist',template:/*ion-inline-start:"D:\BGK48\src\pages\returnlist\returnlist.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Returnlist</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">A1</ion-item-divider>\n\n    <ion-item>\n\n      <ion-checkbox [(ngModel)]="mushrooms1"></ion-checkbox>\n\n      <ion-label>Item1</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-checkbox [(ngModel)]="mushrooms"></ion-checkbox>\n\n      <ion-label>Item2</ion-label>\n\n    </ion-item>\n\n  </ion-item-group>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <button ion-button block (click)="waitperson()">ok</button>\n\n</ion-footer>'/*ion-inline-end:"D:\BGK48\src\pages\returnlist\returnlist.html"*/,
=======
            selector: 'page-borrow-select',template:/*ion-inline-start:"D:\work1\BGK48\src\pages\borrow-select\borrow-select.html"*/'<!--\n\n  Generated template for the BorrowSelectPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>borrow-select</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>ชื่อของที่จะยืม</ion-label>\n\n    <ion-checkbox color="blue" checked="true"></ion-checkbox>\n\n    <ion-select [(ngModel)]="borroamout" interface="popover">\n\n      <ion-option value="1">1</ion-option>\n\n      <ion-option value="2">2</ion-option>\n\n      <ion-option value="3">3</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n</ion-content>\n\n\n\n<ion-footer ion-row>\n\n    <button ion-button block (click)="BorrowPage()">ยืม</button>\n\n</ion-footer>'/*ion-inline-end:"D:\work1\BGK48\src\pages\borrow-select\borrow-select.html"*/,
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ReturnlistPage);
    return ReturnlistPage;
}());

//# sourceMappingURL=returnlist.js.map

/***/ }),

<<<<<<< HEAD
/***/ 107:
=======
/***/ 106:
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitpersonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
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
var WaitpersonPage = /** @class */ (function () {
    function WaitpersonPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WaitpersonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WaitpersonPage');
    };
    WaitpersonPage.prototype.goHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    WaitpersonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-waitperson',template:/*ion-inline-start:"D:\BGK48\src\pages\waitperson\waitperson.html"*/'\n\n<ion-header>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <img src="../../assets/imgs/sample.png" alt="QRcode">\n\n  <br><br><br><br><br>\n\n  <p style="text-align: center">Status: รอพยานในการคืน</p>\n\n  <ion-footer>\n\n    <button ion-button block (click)="goHomePage()">ok</button>\n\n  </ion-footer>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\BGK48\src\pages\waitperson\waitperson.html"*/,
=======
            selector: 'page-borrow',template:/*ion-inline-start:"D:\work1\BGK48\src\pages\borrow\borrow.html"*/'<!--\n\n  Generated template for the BorrowPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>borrow</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>QR SCAN</ion-label>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Status : </ion-label>\n\n    <ion-label>AAAA</ion-label>\n\n  </ion-item>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <button ion-button block>OK</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\work1\BGK48\src\pages\borrow\borrow.html"*/,
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], WaitpersonPage);
    return WaitpersonPage;
}());

//# sourceMappingURL=waitperson.js.map

/***/ }),

<<<<<<< HEAD
/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_detail_item_detail__ = __webpack_require__(109);
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
    function ItemListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ItemListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemListPage');
    };
    ItemListPage.prototype.goDetail_list = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_detail_item_detail__["a" /* ItemDetailPage */]);
    };
    ItemListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-list',template:/*ion-inline-start:"D:\BGK48\src\pages\item-list\item-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      <label> List A1</label>\n\n      <ion-icon ios="ios-add-circle" md="md-add-circle" style="float: right;"></ion-icon>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      Item List      \n\n    </ion-title>\n\n    <ion-buttons right>\n\n        <button><ion-icon ios="ios-add-circle" md="md-add-circle"style="float: right;"></ion-icon></button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <h4>รายการของ</h4>\n\n    </ion-col>\n\n    <ion-col col-6 class="qty_item">\n\n      <h4>จำนวน</h4>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-item class="pointer_item" (click)="goDetail_list()">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        Item1\n\n      </ion-col>\n\n      <ion-col col-6 class="qty_item">\n\n        3/3\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n  <ion-item class="pointer_item">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        Item2\n\n      </ion-col>\n\n      <ion-col col-6 class="qty_item">\n\n        1/2\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n  <ion-item class="pointer_item">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        Item2\n\n      </ion-col>\n\n      <ion-col col-6 class="qty_item">\n\n        0/1\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"D:\BGK48\src\pages\item-list\item-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ItemListPage);
    return ItemListPage;
}());

//# sourceMappingURL=item-list.js.map

/***/ }),

/***/ 109:
=======
/***/ 107:
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LendQrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lend_qr_lend_qr__ = __webpack_require__(110);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__borrow_select_borrow_select__ = __webpack_require__(105);
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
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
            selector: 'page-item-detail',template:/*ion-inline-start:"D:\BGK48\src\pages\item-detail\item-detail.html"*/'<ion-header>\n\n\n\n  <ion-navbar text-center>\n\n    <ion-title>Item Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n        <img src="../../assets/imgs/img1.jpg" alt="">\n\n    </ion-col>\n\n    <ion-col col-12>\n\n      <p>ชื่อของ: ตุ๊กตาของน้องส้มโอค่ะ</p>\n\n      <p>จำนวน: 3 ตัว</p>\n\n      <p>รายละเอียยด: เป็นของที่คุณแม่ให้พกติดตัว นอนกอดสบาย</p>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n   \n\n \n\n\n\n</ion-content>\n\n\n\n<ion-footer ion-row>\n\n    <ion-col col-6>\n\n      <button ion-button block>แก้ไขรายละเอียดของ</button>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <button ion-button block>ลบ</button>\n\n    </ion-col>\n\n  </ion-footer>'/*ion-inline-end:"D:\BGK48\src\pages\item-detail\item-detail.html"*/,
=======
            selector: 'page-lend-qr',template:/*ion-inline-start:"D:\work1\BGK48\src\pages\lend-qr\lend-qr.html"*/'<!--\n\n  Generated template for the LendQrPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>lend-qr</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <img src="../../assets/imgs/sample.png" alt="">\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <button ion-button block (click)="BorrowSelectPage()">OK</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\work1\BGK48\src\pages\lend-qr\lend-qr.html"*/,
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LendQrPage);
    return LendQrPage;
}());

//# sourceMappingURL=lend-qr.js.map

/***/ }),

<<<<<<< HEAD
/***/ 110:
=======
/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__returnlist_returnlist__ = __webpack_require__(109);
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
 * Generated class for the ReturnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReturnPage = /** @class */ (function () {
    function ReturnPage(navCtrl, navParams, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
    }
    ReturnPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReturnPage');
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__returnlist_returnlist__["a" /* ReturnlistPage */]);
    };
    ReturnPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-return',template:/*ion-inline-start:"D:\work1\BGK48\src\pages\returned\return.html"*/'<!-- \n  Generated template for the ReturnPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation. -->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Returned</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item-group>\n    <ion-item-divider color="light">A1</ion-item-divider>\n    <ion-item>Item1<p style="text-align:right">จำนวน 1 ชิ้น</p></ion-item>\n    <ion-item>Item2<p style="text-align:right">จำนวน 1 ชิ้น</p></ion-item>\n  </ion-item-group>\n  <ion-item-group>\n    <ion-item-divider color="light">A2</ion-item-divider>\n    <ion-item>Item1<p style="text-align:right">จำนวน 1 ชิ้น</p></ion-item>\n    <ion-item>Item2<p style="text-align:right">จำนวน 1 ชิ้น</p> </ion-item>\n  </ion-item-group>\n\n  <ion-footer>\n    <!-- <button ion-button style="color:cyan">QR Scan</button> -->\n    <button ion-button style="color:cyan" (click)="returnlist()">QR Scan</button>\n  </ion-footer>\n</ion-content>'/*ion-inline-end:"D:\work1\BGK48\src\pages\returned\return.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], ReturnPage);
    return ReturnPage;
}());

//# sourceMappingURL=return.js.map

/***/ }),

/***/ 109:
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__borrow_select_borrow_select__ = __webpack_require__(52);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__waitperson_waitperson__ = __webpack_require__(110);
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
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
            selector: 'page-returnlist',template:/*ion-inline-start:"D:\work1\BGK48\src\pages\returnlist\returnlist.html"*/'<!-- \n  Generated template for the ReturnlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation. -->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Returnlist</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item-group>\n\n    <ion-item-divider color="light">A1</ion-item-divider>\n\n    <ion-item>\n      <ion-checkbox [(ngModel)]="mushrooms1"></ion-checkbox>\n      <ion-label>Item1</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-checkbox [(ngModel)]="mushrooms"></ion-checkbox>\n      <ion-label>Item2</ion-label>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-footer>\n    <button ion-button round (click)="waitperson()">ok</button>\n  </ion-footer>\n\n\n</ion-content>'/*ion-inline-end:"D:\work1\BGK48\src\pages\returnlist\returnlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ReturnlistPage);
    return ReturnlistPage;
}());

//# sourceMappingURL=returnlist.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitpersonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
var WaitpersonPage = /** @class */ (function () {
    function WaitpersonPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WaitpersonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WaitpersonPage');
    };
    WaitpersonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-waitperson',template:/*ion-inline-start:"D:\work1\BGK48\src\pages\waitperson\waitperson.html"*/'<!--\n  Generated template for the WaitpersonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n</ion-header>\n\n\n<ion-content padding>\n\n\n<img src="../../assets/imgs/sample.png" alt="QRcode">\n<br><br><br><br><br>\n<p style="text-align: center">Status: รอพยานในการคืน</p>\n  <ion-footer>\n    <button ion-button round>ok</button>\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"D:\work1\BGK48\src\pages\waitperson\waitperson.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], WaitpersonPage);
    return WaitpersonPage;
}());

//# sourceMappingURL=waitperson.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_detail_item_detail__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__additem_additem__ = __webpack_require__(104);
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
    function ItemListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ItemListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemListPage');
    };
<<<<<<< HEAD
    LendQrPage.prototype.BorrowSelectPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__borrow_select_borrow_select__["a" /* BorrowSelectPage */]);
=======
    ItemListPage.prototype.goDetail_list = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_detail_item_detail__["a" /* ItemDetailPage */]);
    };
    ItemListPage.prototype.additem = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__additem_additem__["a" /* AdditemPage */]);
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
    };
    ItemListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-lend-qr',template:/*ion-inline-start:"D:\BGK48\src\pages\lend-qr\lend-qr.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>lend-qr</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <img src="../../assets/imgs/sample.png" alt="">\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <button ion-button block (click)="BorrowSelectPage()">OK</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\BGK48\src\pages\lend-qr\lend-qr.html"*/,
=======
            selector: 'page-item-list',template:/*ion-inline-start:"D:\work1\BGK48\src\pages\item-list\item-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      <label> List A1</label>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      Item List      \n\n    </ion-title>\n\n    \n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n\n\n<ion-content padding>\n\n  <ion-buttons right>\n\n    <button><ion-icon ios="ios-add-circle" md="md-add-circle" style="float: right;"(click)="additem()"></ion-icon></button>\n\n  </ion-buttons>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <h4>รายการของ</h4>\n\n    </ion-col>\n\n    <ion-col col-6 class="qty_item">\n\n      <h4>จำนวน</h4>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-item class="pointer_item" (click)="goDetail_list()">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        Item1\n\n      </ion-col>\n\n      <ion-col col-6 class="qty_item">\n\n        3/3\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n  <ion-item class="pointer_item">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        Item2\n\n      </ion-col>\n\n      <ion-col col-6 class="qty_item">\n\n        1/2\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n  <ion-item class="pointer_item">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        Item2\n\n      </ion-col>\n\n      <ion-col col-6 class="qty_item">\n\n        0/1\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"D:\work1\BGK48\src\pages\item-list\item-list.html"*/,
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ItemListPage);
    return ItemListPage;
}());

//# sourceMappingURL=item-list.js.map

/***/ }),

<<<<<<< HEAD
/***/ 111:
=======
/***/ 112:
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
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
            selector: 'page-key-list',template:/*ion-inline-start:"D:\BGK48\src\pages\key-list\key-list.html"*/'<ion-header>\n\n  <ion-navbar text-center>\n\n    <ion-title>รายชื่อคนถือกุญแจ</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>Terminator II</ion-item>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n\n    <ion-item>Blade Runner</ion-item>\n\n    <ion-item>Terminator II</ion-item>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n\n    <ion-item>Blade Runner</ion-item>\n\n    <ion-item>Terminator II</ion-item>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n\n    <ion-item>Blade Runner</ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\BGK48\src\pages\key-list\key-list.html"*/,
=======
            selector: 'page-key-list',template:/*ion-inline-start:"D:\work1\BGK48\src\pages\key-list\key-list.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>KeyList</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      <h1>รายชื่อ</h1>\n\n    </ion-list-header>\n\n    <ion-item>Terminator II</ion-item>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n\n    <ion-item>Blade Runner</ion-item>\n\n    <ion-item>Terminator II</ion-item>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n\n    <ion-item>Blade Runner</ion-item>\n\n    <ion-item>Terminator II</ion-item>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n\n    <ion-item>Blade Runner</ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\work1\BGK48\src\pages\key-list\key-list.html"*/,
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], KeyListPage);
    return KeyListPage;
}());

//# sourceMappingURL=key-list.js.map

/***/ }),

<<<<<<< HEAD
/***/ 121:
=======
/***/ 122:
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/borrow-select/borrow-select.module": [
		286,
		10
	],
	"../pages/borrow/borrow.module": [
		281,
		9
	],
	"../pages/confirm/confirm.module": [
		282,
		8
	],
	"../pages/item-detail/item-detail.module": [
		287,
		7
	],
	"../pages/item-list/item-list.module": [
		290,
		6
	],
	"../pages/key-list/key-list.module": [
		283,
		5
	],
	"../pages/lend-qr/lend-qr.module": [
		284,
		4
	],
	"../pages/login/login.module": [
		285,
		3
	],
	"../pages/returned/return.module": [
		289,
		2
	],
	"../pages/returnlist/returnlist.module": [
		288,
		1
	],
	"../pages/waitperson/waitperson.module": [
		291,
=======
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/additem/additem.module": [
		282,
		11
	],
	"../pages/borrow-select/borrow-select.module": [
		283,
		10
	],
	"../pages/borrow/borrow.module": [
		287,
		9
	],
	"../pages/confirm/confirm.module": [
		284,
		8
	],
	"../pages/item-detail/item-detail.module": [
		285,
		7
	],
	"../pages/item-list/item-list.module": [
		286,
		6
	],
	"../pages/key-list/key-list.module": [
		288,
		5
	],
	"../pages/lend-qr/lend-qr.module": [
		293,
		4
	],
	"../pages/login/login.module": [
		289,
		3
	],
	"../pages/returned/return.module": [
		290,
		2
	],
	"../pages/returnlist/returnlist.module": [
		291,
		1
	],
	"../pages/waitperson/waitperson.module": [
		292,
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
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
webpackAsyncContext.id = 162;
=======
webpackAsyncContext.id = 163;
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
module.exports = webpackAsyncContext;

/***/ }),

<<<<<<< HEAD
/***/ 206:
=======
/***/ 207:
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(80);
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
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
            selector: 'page-confirm',template:/*ion-inline-start:"D:\work1\BGK48\src\pages\confirm\confirm.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Confirm</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h3>Username</h3>\n\n  <ion-list>\n\n    <ion-item-sliding>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/logo.png">\n\n        </ion-avatar>\n\n        <h2>Item01</h2>\n\n        <p>2 ea</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/logo.png">\n\n        </ion-avatar>\n\n        <h2>Item03</h2>\n\n        <p>3 ea</p>\n\n      </ion-item>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer padding>\n\n  <ion-col >\n\n    <button ion-button block (click)="goHomePage()">Confirm</button>\n\n  </ion-col>\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\work1\BGK48\src\pages\confirm\confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ConfirmPage);
    return ConfirmPage;
}());

//# sourceMappingURL=confirm.js.map

/***/ }),

<<<<<<< HEAD
/***/ 207:
=======
/***/ 208:
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

<<<<<<< HEAD
/***/ 230:
=======
/***/ 231:
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_key_list_key_list__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_item_detail_item_detail__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_lend_qr_lend_qr__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_borrow_borrow__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_borrow_select_borrow_select__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_returned_return__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_returnlist_returnlist__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_waitperson_waitperson__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_item_list_item_list__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_confirm_confirm__ = __webpack_require__(206);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_key_list_key_list__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_item_detail_item_detail__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_lend_qr_lend_qr__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_borrow_borrow__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_borrow_select_borrow_select__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_returned_return__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_returnlist_returnlist__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_waitperson_waitperson__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_item_list_item_list__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_confirm_confirm__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_additem_additem__ = __webpack_require__(104);
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















<<<<<<< HEAD
=======

>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
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
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_19__pages_confirm_confirm__["a" /* ConfirmPage */]
=======
                __WEBPACK_IMPORTED_MODULE_19__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_additem_additem__["a" /* AdditemPage */]
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
<<<<<<< HEAD
                        { loadChildren: '../pages/borrow/borrow.module#BorrowPageModule', name: 'BorrowPage', segment: 'borrow', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm/confirm.module#ConfirmPageModule', name: 'ConfirmPage', segment: 'confirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/key-list/key-list.module#KeyListPageModule', name: 'KeyListPage', segment: 'key-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lend-qr/lend-qr.module#LendQrPageModule', name: 'LendQrPage', segment: 'lend-qr', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/borrow-select/borrow-select.module#BorrowSelectPageModule', name: 'BorrowSelectPage', segment: 'borrow-select', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/returnlist/returnlist.module#ReturnlistPageModule', name: 'ReturnlistPage', segment: 'returnlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/returned/return.module#ReturnPageModule', name: 'ReturnPage', segment: 'return', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-list/item-list.module#ItemListPageModule', name: 'ItemListPage', segment: 'item-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/waitperson/waitperson.module#WaitpersonPageModule', name: 'WaitpersonPage', segment: 'waitperson', priority: 'low', defaultHistory: [] }
=======
                        { loadChildren: '../pages/additem/additem.module#AdditemPageModule', name: 'AdditemPage', segment: 'additem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/borrow-select/borrow-select.module#BorrowSelectPageModule', name: 'BorrowSelectPage', segment: 'borrow-select', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm/confirm.module#ConfirmPageModule', name: 'ConfirmPage', segment: 'confirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-list/item-list.module#ItemListPageModule', name: 'ItemListPage', segment: 'item-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/borrow/borrow.module#BorrowPageModule', name: 'BorrowPage', segment: 'borrow', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/key-list/key-list.module#KeyListPageModule', name: 'KeyListPage', segment: 'key-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/returned/return.module#ReturnPageModule', name: 'ReturnPage', segment: 'return', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/returnlist/returnlist.module#ReturnlistPageModule', name: 'ReturnlistPage', segment: 'returnlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/waitperson/waitperson.module#WaitpersonPageModule', name: 'WaitpersonPage', segment: 'waitperson', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lend-qr/lend-qr.module#LendQrPageModule', name: 'LendQrPage', segment: 'lend-qr', priority: 'low', defaultHistory: [] }
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
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
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_19__pages_confirm_confirm__["a" /* ConfirmPage */]
=======
                __WEBPACK_IMPORTED_MODULE_19__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_additem_additem__["a" /* AdditemPage */]
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 280:
=======
/***/ 281:
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(53);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(52);
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\BGK48\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\BGK48\src\app\app.html"*/
=======
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\work1\BGK48\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\work1\BGK48\src\app\app.html"*/
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__returned_return__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_list_item_list__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__key_list_key_list__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__borrow_select_borrow_select__ = __webpack_require__(52);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lend_qr_lend_qr__ = __webpack_require__(107);
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
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
    function HomePage(navCtrl, camera, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.barcodeScanner = barcodeScanner;
    }
    HomePage.prototype.goKeyListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__key_list_key_list__["a" /* KeyListPage */]);
    };
    HomePage.prototype.goItemlist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__item_list_item_list__["a" /* ItemListPage */]);
    };
    HomePage.prototype.QRScan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__borrow_select_borrow_select__["a" /* BorrowSelectPage */]);
        // this.barcodeScanner.scan().then(barcodeData => {
        //   console.log('Barcode data', barcodeData);
        // }).catch(err => {
        //   console.log('Error', err);
        // });
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
            selector: 'page-home',template:/*ion-inline-start:"D:\BGK48\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      Store\n\n    </ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button right color="danger" (click)="goLoginPage()">Logout</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist()" class="pointer_card">\n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/it.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>A1</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist()" class="pointer_card">\n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/ขนม.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>A2</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist()" class="pointer_card">\n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/it.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>B1</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist()" class="pointer_card">\n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/ขนม.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>B2</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer ion-row>\n\n  <ion-col col-4>\n\n    <button ion-button block (click)="Returned()">Returned</button>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n    <button ion-button block (click)="QRScan()">QR</button>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n    <button ion-button block (click)="goKeyListPage()">Key</button>\n\n  </ion-col>\n\n</ion-footer>'/*ion-inline-end:"D:\BGK48\src\pages\home\home.html"*/
=======
            selector: 'page-item-detail',template:/*ion-inline-start:"D:\work1\BGK48\src\pages\item-detail\item-detail.html"*/'<ion-header>\n\n\n\n  <ion-navbar text-center>\n\n    <ion-title>Item Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n        <img src="../../assets/imgs/img1.jpg" alt="">\n\n    </ion-col>\n\n    <ion-col col-12>\n\n      <p>ชื่อของ: ตุ๊กตาของน้องส้มโอค่ะ</p>\n\n      <p>จำนวน: 3 ตัว</p>\n\n      <p>รายละเอียยด: เป็นของที่คุณแม่ให้พกติดตัว นอนกอดสบาย</p>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n   \n\n \n\n\n\n</ion-content>\n\n\n\n<ion-footer ion-row>\n\n    <ion-col col-6>\n\n      <button ion-button block>แก้ไขรายละเอียดของ</button>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <button ion-button block>ลบ</button>\n\n    </ion-col>\n\n  </ion-footer>'/*ion-inline-end:"D:\work1\BGK48\src\pages\item-detail\item-detail.html"*/,
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowSelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__borrow_borrow__ = __webpack_require__(104);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(80);
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
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
<<<<<<< HEAD
            selector: 'page-borrow-select',template:/*ion-inline-start:"D:\BGK48\src\pages\borrow-select\borrow-select.html"*/'<ion-header>\n\n  <ion-navbar text-center>\n\n    <ion-title>Box Name</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>ชื่อของที่จะยืม</ion-label>\n\n    <ion-checkbox color="blue" checked="false"></ion-checkbox>\n\n    <ion-select [(ngModel)]="borroamout1" interface="popover">\n\n      <ion-option value="1">1</ion-option>\n\n      <ion-option value="2">2</ion-option>\n\n      <ion-option value="3">3</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>ชื่อของที่จะยืม</ion-label>\n\n    <ion-checkbox color="blue" checked="false"></ion-checkbox>\n\n    <ion-select [(ngModel)]="borroamout2" interface="popover">\n\n      <ion-option value="1">1</ion-option>\n\n      <ion-option value="2">2</ion-option>\n\n      <ion-option value="3">3</ion-option>\n\n      <ion-option value="4">4</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>ชื่อของที่จะยืม</ion-label>\n\n    <ion-checkbox color="blue" checked="false"></ion-checkbox>\n\n    <ion-select [(ngModel)]="borroamout3" interface="popover">\n\n      <ion-option value="1">1</ion-option>\n\n      <ion-option value="2">2</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n</ion-content>\n\n\n\n<ion-footer ion-row>\n\n    <button ion-button block (click)="BorrowPage()">ยืม</button>\n\n</ion-footer>'/*ion-inline-end:"D:\BGK48\src\pages\borrow-select\borrow-select.html"*/,
=======
            selector: 'page-login',template:/*ion-inline-start:"D:\work1\BGK48\src\pages\login\login.html"*/'<ion-content padding text-center>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <h1>Login</h1>\n\n  <br><br>\n\n  <ion-item>\n\n    <ion-input type="text" placeholder="Username"></ion-input>\n\n  </ion-item><br><br>\n\n  <button ion-button (click)="goHomePage()">Login</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work1\BGK48\src\pages\login\login.html"*/,
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], BorrowSelectPage);
    return BorrowSelectPage;
}());

//# sourceMappingURL=borrow-select.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_detail_item_detail__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__returned_return__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_list_item_list__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__key_list_key_list__ = __webpack_require__(112);
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
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
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
=======






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, camera, barcodeScanner) {
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
<<<<<<< HEAD
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
=======
    HomePage.prototype.goKeyListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__key_list_key_list__["a" /* KeyListPage */]);
    };
    HomePage.prototype.goItemlist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__item_list_item_list__["a" /* ItemListPage */]);
    };
    HomePage.prototype.QRScan = function () {
        this.barcodeScanner.scan().then(function (barcodeData) {
            console.log('Barcode data', barcodeData);
        }).catch(function (err) {
            console.log('Error', err);
        });
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__item_detail_item_detail__["a" /* ItemDetailPage */]);
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
    };
    LoginPage.prototype.goHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
<<<<<<< HEAD
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\BGK48\src\pages\login\login.html"*/'<ion-content padding text-center>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <h1>Login</h1>\n  <br><br>\n  <ion-item>\n    <ion-input type="text" placeholder="Username"></ion-input>\n  </ion-item><br><br>\n  <button ion-button (click)="goHomePage()">Login</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\BGK48\src\pages\login\login.html"*/,
=======
    HomePage.prototype.Returned = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__returned_return__["a" /* ReturnPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\work1\BGK48\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      Store      \n\n    </ion-title>\n\n    <ion-buttons right>\n\n        <button ion-button right color="danger" (click)="goLoginPage()" >Logout</button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist()" class="pointer_card">\n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/it.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>A1</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist()" class="pointer_card">\n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/ขนม.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>A2</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist()" class="pointer_card">\n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/it.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>B1</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist()" class="pointer_card">\n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/ขนม.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>B2</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n\n\n<ion-footer ion-row>\n\n  <ion-col col-4>\n\n    <button ion-button block (click)="Returned()">Returned</button>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n    <button ion-button block (click)="QRScan()">QR</button>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n    <button ion-button block (click)="Camera()">คืน</button>\n\n  </ion-col>\n\n</ion-footer>'/*ion-inline-end:"D:\work1\BGK48\src\pages\home\home.html"*/
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

<<<<<<< HEAD
/***/ })

},[207]);
=======
},[208]);
>>>>>>> 56e507fd7f3b1bdc256217d45e86bf971dd57cc1
//# sourceMappingURL=main.js.map