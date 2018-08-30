<<<<<<< HEAD:www/build/main.js
webpackJsonp([4],{
=======
webpackJsonp([5],{
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD:www/build/main.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LendQrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyListPage; });
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
            selector: 'page-key-list',template:/*ion-inline-start:"D:\BGK48\src\pages\key-list\key-list.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>KeyList</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      <h1>รายชื่อ</h1>\n\n    </ion-list-header>\n\n    <ion-item>Terminator II</ion-item>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n\n    <ion-item>Blade Runner</ion-item>\n\n    <ion-item>Terminator II</ion-item>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n\n    <ion-item>Blade Runner</ion-item>\n\n    <ion-item>Terminator II</ion-item>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n\n    <ion-item>Blade Runner</ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\BGK48\src\pages\key-list\key-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], KeyListPage);
    return KeyListPage;
}());

//# sourceMappingURL=key-list.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lend_qr_lend_qr__ = __webpack_require__(103);
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
    function ItemDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ItemDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemDetailPage');
    };
    ItemDetailPage.prototype.Lend = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lend_qr_lend_qr__["a" /* LendQrPage */]);
    };
    ItemDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-detail',template:/*ion-inline-start:"D:\BGK48\src\pages\item-detail\item-detail.html"*/'<!--\n\n  Generated template for the ItemDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Item Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n        <img src="../../assets/imgs/img1.jpg" alt="">\n\n    </ion-col>\n\n    <ion-col col-12>\n\n      <p>Hello World!</p>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n   \n\n \n\n\n\n</ion-content>\n\n\n\n<ion-footer ion-row>\n\n    <ion-col col-6>\n\n      <button ion-button block>แก้ไขรายละเอียดของ</button>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <button ion-button block (click)="Lend()">ยืม</button>\n\n    </ion-col>\n\n  </ion-footer>'/*ion-inline-end:"D:\BGK48\src\pages\item-detail\item-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ItemDetailPage);
    return ItemDetailPage;
}());

//# sourceMappingURL=item-detail.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LendQrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
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
    LendQrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD:www/build/main.js
            selector: 'page-lend-qr',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\lend-qr\lend-qr.html"*/'<!--\n\n  Generated template for the LendQrPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>lend-qr</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <img src="../../assets/imgs/sample.png" alt="">\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <button ion-button block>OK</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\lend-qr\lend-qr.html"*/,
=======
            selector: 'page-lend-qr',template:/*ion-inline-start:"D:\BGK48\src\pages\lend-qr\lend-qr.html"*/'<!--\n\n  Generated template for the LendQrPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>lend-qr</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <img src="../../assets/imgs/sample.png" alt="">\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <button ion-button block>OK</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\BGK48\src\pages\lend-qr\lend-qr.html"*/,
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LendQrPage);
    return LendQrPage;
}());

//# sourceMappingURL=lend-qr.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD:www/build/main.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
    ItemListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-list',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\item-list\item-list.html"*/'<!--\n  Generated template for the ItemListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      Item List A1\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n      <button ion-button color="secondary" style="float: right;">+</button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-6>\n      <h4>รายการของ</h4>\n    </ion-col>\n    <ion-col col-6 class="qty_item">\n      <h4>จำนวน</h4>\n    </ion-col>\n  </ion-row>\n  <ion-item class="pointer_item" (click)="goDetail_list()">\n    <ion-row>\n      <ion-col col-6>\n        Item1\n      </ion-col>\n      <ion-col col-6 class="qty_item">\n        3/3\n      </ion-col>\n    </ion-row>\n  </ion-item>\n  <ion-item class="pointer_item">\n    <ion-row>\n      <ion-col col-6>\n        Item2\n      </ion-col>\n      <ion-col col-6 class="qty_item">\n        1/2\n      </ion-col>\n    </ion-row>\n  </ion-item>\n  <ion-item class="pointer_item">\n    <ion-row>\n      <ion-col col-6>\n        Item2\n      </ion-col>\n      <ion-col col-6 class="qty_item">\n        0/1\n      </ion-col>\n    </ion-row>\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\item-list\item-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ItemListPage);
    return ItemListPage;
}());

//# sourceMappingURL=item-list.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(78);
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
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
    LoginPage.prototype.goHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD:www/build/main.js
            selector: 'page-key-list',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\key-list\key-list.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>KeyList</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      <h1>รายชื่อ</h1>\n\n    </ion-list-header>\n\n    <ion-item>Terminator II</ion-item>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n\n    <ion-item>Blade Runner</ion-item>\n\n    <ion-item>Terminator II</ion-item>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n\n    <ion-item>Blade Runner</ion-item>\n\n    <ion-item>Terminator II</ion-item>\n\n    <ion-item>The Empire Strikes Back</ion-item>\n\n    <ion-item>Blade Runner</ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\key-list\key-list.html"*/,
=======
            selector: 'page-login',template:/*ion-inline-start:"D:\BGK48\src\pages\login\login.html"*/'<ion-content padding text-center>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <h1>Login</h1>\n  <br><br>\n  <ion-item>\n    <ion-input type="text" placeholder="Username"></ion-input>\n  </ion-item><br><br>\n  <button ion-button (click)="goHomePage()">Login</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\BGK48\src\pages\login\login.html"*/,
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

<<<<<<< HEAD:www/build/main.js
/***/ 112:
=======
/***/ 114:
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
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
<<<<<<< HEAD:www/build/main.js
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
=======
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/confirm/confirm.module": [
		275,
		4
	],
	"../pages/item-detail/item-detail.module": [
<<<<<<< HEAD:www/build/main.js
		274,
		3
	],
	"../pages/item-list/item-list.module": [
		275,
		2
	],
	"../pages/key-list/key-list.module": [
		276,
		1
	],
	"../pages/lend-qr/lend-qr.module": [
		277,
=======
		279,
		3
	],
	"../pages/key-list/key-list.module": [
		276,
		2
	],
	"../pages/lend-qr/lend-qr.module": [
		277,
		1
	],
	"../pages/login/login.module": [
		278,
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
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
<<<<<<< HEAD:www/build/main.js
webpackAsyncContext.id = 153;
=======
webpackAsyncContext.id = 155;
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
module.exports = webpackAsyncContext;

/***/ }),

<<<<<<< HEAD:www/build/main.js
/***/ 198:
=======
/***/ 200:
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD:www/build/main.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__key_list_key_list__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_list_item_list__ = __webpack_require__(101);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(78);
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



<<<<<<< HEAD:www/build/main.js



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, camera, barcodeScanner) {
=======
/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmPage = /** @class */ (function () {
    function ConfirmPage(navCtrl, navParams) {
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmPage');
    };
<<<<<<< HEAD:www/build/main.js
    HomePage.prototype.goItemlist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__item_list_item_list__["a" /* ItemListPage */]);
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
            var base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      <ion-row>\n\n        <ion-col col-4>Name</ion-col>\n\n        <ion-col col-4>รายการสิ่งของ</ion-col>\n\n        <ion-col col-4>\n\n          <button ion-button color="danger">Logout</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist()" class="pointer_card">\n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/it.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>A1</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist()" class="pointer_card">\n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/ขนม.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>A2</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist()" class="pointer_card">\n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/it.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>B1</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card (click)="goItemlist()" class="pointer_card">\n\n        <ion-card-header>\n\n          <img src="../../assets/imgs/ขนม.jpg" alt="">\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <h3>B2</h3>\n\n          <p>ประเภท: IT</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n\n\n<ion-footer ion-row>\n\n  <ion-col col-4>\n\n    <button ion-button block (click)="goKeyListPage()">Key</button>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n    <button ion-button block (click)="QRScan()">QR</button>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n    <button ion-button block (click)="Camera()">Camera</button>\n\n  </ion-col>\n\n</ion-footer>'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], HomePage);
    return HomePage;
=======
    ConfirmPage.prototype.goHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm',template:/*ion-inline-start:"D:\BGK48\src\pages\confirm\confirm.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Confirm</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3>Username</h3>\n  <ion-list>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="../../assets/imgs/logo.png">\n        </ion-avatar>\n        <h2>Item01</h2>\n        <p>2 ea</p>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="../../assets/imgs/logo.png">\n        </ion-avatar>\n        <h2>Item03</h2>\n        <p>3 ea</p>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer padding>\n  <ion-col >\n    <button ion-button block (click)="goHomePage()">Confirm</button>\n  </ion-col>\n\n</ion-footer>'/*ion-inline-end:"D:\BGK48\src\pages\confirm\confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ConfirmPage);
    return ConfirmPage;
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
}());

//# sourceMappingURL=confirm.js.map

/***/ }),

<<<<<<< HEAD:www/build/main.js
/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lend_qr_lend_qr__ = __webpack_require__(100);
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
    function ItemDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ItemDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemDetailPage');
    };
    ItemDetailPage.prototype.Lend = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lend_qr_lend_qr__["a" /* LendQrPage */]);
    };
    ItemDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-detail',template:/*ion-inline-start:"D:\Work\GitToday\BGK48\src\pages\item-detail\item-detail.html"*/'<!--\n\n  Generated template for the ItemDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Item Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n        <img src="../../assets/imgs/img1.jpg" alt="">\n\n    </ion-col>\n\n    <ion-col col-12>\n\n      <p>ชื่อของ: ตุ๊กตาของน้องส้มโอค่ะ</p>\n\n      <p>จำนวน: 3 ตัว</p>\n\n      <p>รายละเอียยด: เป็นของที่คุณแม่ให้พกติดตัว นอนกอดสบาย</p>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n   \n\n \n\n\n\n</ion-content>\n\n\n\n<ion-footer ion-row>\n\n    <ion-col col-6>\n\n      <button ion-button block>แก้ไขรายละเอียดของ</button>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <button ion-button block (click)="Lend()">ยืม</button>\n\n    </ion-col>\n\n  </ion-footer>'/*ion-inline-end:"D:\Work\GitToday\BGK48\src\pages\item-detail\item-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ItemDetailPage);
    return ItemDetailPage;
}());

//# sourceMappingURL=item-detail.js.map

/***/ }),

/***/ 200:
=======
/***/ 201:
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD:www/build/main.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

<<<<<<< HEAD:www/build/main.js
/***/ 223:
=======
/***/ 224:
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD:www/build/main.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_key_list_key_list__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_item_detail_item_detail__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_lend_qr_lend_qr__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_item_list_item_list__ = __webpack_require__(101);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_key_list_key_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_item_detail_item_detail__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_lend_qr_lend_qr__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_confirm_confirm__ = __webpack_require__(200);
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













<<<<<<< HEAD:www/build/main.js
=======

>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
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
<<<<<<< HEAD:www/build/main.js
                __WEBPACK_IMPORTED_MODULE_12__pages_item_list_item_list__["a" /* ItemListPage */]
=======
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_confirm_confirm__["a" /* ConfirmPage */]
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
<<<<<<< HEAD:www/build/main.js
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-list/item-list.module#ItemListPageModule', name: 'ItemListPage', segment: 'item-list', priority: 'low', defaultHistory: [] },
=======
                        { loadChildren: '../pages/confirm/confirm.module#ConfirmPageModule', name: 'ConfirmPage', segment: 'confirm', priority: 'low', defaultHistory: [] },
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
                        { loadChildren: '../pages/key-list/key-list.module#KeyListPageModule', name: 'KeyListPage', segment: 'key-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lend-qr/lend-qr.module#LendQrPageModule', name: 'LendQrPage', segment: 'lend-qr', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] }
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
<<<<<<< HEAD:www/build/main.js
                __WEBPACK_IMPORTED_MODULE_12__pages_item_list_item_list__["a" /* ItemListPage */]
=======
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_confirm_confirm__["a" /* ConfirmPage */]
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
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

<<<<<<< HEAD:www/build/main.js
/***/ 273:
=======
/***/ 274:
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD:www/build/main.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(104);
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\BGK48\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\BGK48\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

<<<<<<< HEAD:www/build/main.js
/***/ })

},[200]);
=======
/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__key_list_key_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_detail_item_detail__ = __webpack_require__(102);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__key_list_key_list__["a" /* KeyListPage */]);
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
        }, function (err) {
            // Handle error
        });
    };
    HomePage.prototype.Showitem_detail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__item_detail_item_detail__["a" /* ItemDetailPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\BGK48\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      รายการสิ่งของ\n\n      <button ion-button color="danger" style="float: right">Logout</button></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-item-sliding>\n\n      <ion-item>\n\n        \n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/logo.png">\n\n        </ion-avatar>\n\n        <h2>Cher</h2>\n\n        <p>Ugh. As if.</p>\n\n        <button ion-button class="btn-right" (click)="Showitem_detail()">Detail</button>\n\n\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/logo.png">\n\n        </ion-avatar>\n\n        <h2>Cher</h2>\n\n        <p>Ugh. As if.</p>\n\n        <button ion-button class="btn-right" (click)="Showitem_detail()">Detail</button>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/logo.png">\n\n        </ion-avatar>\n\n        <h2>Cher</h2>\n\n        <p>Ugh. As if.</p>\n\n        <button ion-button class="btn-right" (click)="Showitem_detail()">Detail</button>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/logo.png">\n\n        </ion-avatar>\n\n        <h2>Cher</h2>\n\n        <p>Ugh. As if.</p>\n\n        <button ion-button class="btn-right" (click)="Showitem_detail()">Detail</button>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/logo.png">\n\n        </ion-avatar>\n\n        <h2>Cher</h2>\n\n        <p>Ugh. As if.</p>\n\n        <button ion-button class="btn-right" (click)="Showitem_detail()">Detail</button>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/logo.png">\n\n        </ion-avatar>\n\n        <h2>Cher</h2>\n\n        <p>Ugh. As if.</p>\n\n        <button ion-button class="btn-right" (click)="Showitem_detail()">Detail</button>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/logo.png">\n\n        </ion-avatar>\n\n        <h2>Cher</h2>\n\n        <p>Ugh. As if.</p>\n\n        <button ion-button class="btn-right" (click)="Showitem_detail()">Detail</button>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/logo.png">\n\n        </ion-avatar>\n\n        <h2>Cher</h2>\n\n        <p>Ugh. As if.</p>\n\n        <button ion-button class="btn-right" (click)="Showitem_detail()">Detail</button>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/logo.png">\n\n        </ion-avatar>\n\n        <h2>Cher</h2>\n\n        <p>Ugh. As if.</p>\n\n        <button ion-button class="btn-right" (click)="Showitem_detail()">Detail</button>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/logo.png">\n\n        </ion-avatar>\n\n        <h2>Cher</h2>\n\n        <p>Ugh. As if.</p>\n\n        <button ion-button class="btn-right" (click)="Showitem_detail()">Detail</button>\n\n      </ion-item>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer ion-row>\n\n  <ion-col col-4>\n\n    <button ion-button block (click)="goKeyListPage()">Key</button>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n    <button ion-button block (click)="QRScan()">QR</button>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n    <button ion-button block (click)="Camera()">Camera</button>\n\n  </ion-col>\n\n</ion-footer>'/*ion-inline-end:"D:\BGK48\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[201]);
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/www/build/main.js
//# sourceMappingURL=main.js.map