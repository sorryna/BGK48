webpackJsonp([5],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
            selector: 'page-lend-qr',template:/*ion-inline-start:"D:\BGK48\src\pages\lend-qr\lend-qr.html"*/'<!--\n\n  Generated template for the LendQrPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>lend-qr</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <img src="../../assets/imgs/sample.png" alt="">\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <button ion-button block>OK</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\BGK48\src\pages\lend-qr\lend-qr.html"*/,
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(78);
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
            selector: 'page-login',template:/*ion-inline-start:"D:\BGK48\src\pages\login\login.html"*/'<ion-content padding text-center>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <h1>Login</h1>\n  <br><br>\n  <ion-item>\n    <ion-input type="text" placeholder="Username"></ion-input>\n  </ion-item><br><br>\n  <button ion-button (click)="goHomePage()">Login</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\BGK48\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/confirm/confirm.module": [
		275,
		4
	],
	"../pages/item-detail/item-detail.module": [
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(78);
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
            selector: 'page-confirm',template:/*ion-inline-start:"D:\BGK48\src\pages\confirm\confirm.html"*/'<!--\n  Generated template for the ConfirmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>confirm</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\BGK48\src\pages\confirm\confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ConfirmPage);
    return ConfirmPage;
}());

//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_confirm_confirm__["a" /* ConfirmPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/confirm/confirm.module#ConfirmPageModule', name: 'ConfirmPage', segment: 'confirm', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_confirm_confirm__["a" /* ConfirmPage */]
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

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(104);
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
//# sourceMappingURL=main.js.map