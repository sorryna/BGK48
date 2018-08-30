webpackJsonp([9],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__waitperson_waitperson__ = __webpack_require__(282);
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
            selector: 'page-returnlist',template:/*ion-inline-start:"E:\Project\BGK48\src\pages\returnlist\returnlist.html"*/'<!-- \n\n  Generated template for the ReturnlistPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation. -->\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Returnlist</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item-group>\n\n\n\n    <ion-item-divider color="light">A1</ion-item-divider>\n\n\n\n    <ion-item>\n\n      <ion-checkbox [(ngModel)]="mushrooms1"></ion-checkbox>\n\n      <ion-label>Item1</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-checkbox [(ngModel)]="mushrooms"></ion-checkbox>\n\n      <ion-label>Item2</ion-label>\n\n    </ion-item>\n\n  </ion-item-group>\n\n\n\n  <ion-footer>\n\n    <button ion-button round (click)="waitperson()">ok</button>\n\n  </ion-footer>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Project\BGK48\src\pages\returnlist\returnlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ReturnlistPage);
    return ReturnlistPage;
}());

//# sourceMappingURL=returnlist.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitpersonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-waitperson',template:/*ion-inline-start:"E:\Project\BGK48\src\pages\waitperson\waitperson.html"*/'<!--\n\n  Generated template for the WaitpersonPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n<img src="../../assets/imgs/sample.png" alt="QRcode">\n\n<br><br><br><br><br>\n\n<p style="text-align: center">Status: รอพยานในการคืน</p>\n\n  <ion-footer>\n\n    <button ion-button round>ok</button>\n\n  </ion-footer>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Project\BGK48\src\pages\waitperson\waitperson.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], WaitpersonPage);
    return WaitpersonPage;
}());

//# sourceMappingURL=waitperson.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__returnlist_returnlist__ = __webpack_require__(281);
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
            selector: 'page-return',template:/*ion-inline-start:"E:\Project\BGK48\src\pages\returned\return.html"*/'<!-- \n\n  Generated template for the ReturnPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation. -->\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Returned</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">A1</ion-item-divider>\n\n    <ion-item>Item1<p style="text-align:right">จำนวน 1 ชิ้น</p></ion-item>\n\n    <ion-item>Item2<p style="text-align:right">จำนวน 1 ชิ้น</p></ion-item>\n\n  </ion-item-group>\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">A2</ion-item-divider>\n\n    <ion-item>Item1<p style="text-align:right">จำนวน 1 ชิ้น</p></ion-item>\n\n    <ion-item>Item2<p style="text-align:right">จำนวน 1 ชิ้น</p> </ion-item>\n\n  </ion-item-group>\n\n\n\n  <ion-footer>\n\n    <!-- <button ion-button style="color:cyan">QR Scan</button> -->\n\n    <button ion-button style="color:cyan" (click)="returnlist()">QR Scan</button>\n\n  </ion-footer>\n\n</ion-content>'/*ion-inline-end:"E:\Project\BGK48\src\pages\returned\return.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], ReturnPage);
    return ReturnPage;
}());

//# sourceMappingURL=return.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnPageModule", function() { return ReturnPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__return__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReturnPageModule = /** @class */ (function () {
    function ReturnPageModule() {
    }
    ReturnPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__return__["a" /* ReturnPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__return__["a" /* ReturnPage */]),
            ],
        })
    ], ReturnPageModule);
    return ReturnPageModule;
}());

//# sourceMappingURL=return.module.js.map

/***/ })

});
//# sourceMappingURL=9.js.map