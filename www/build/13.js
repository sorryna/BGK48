webpackJsonp([13],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_detail_item_detail__ = __webpack_require__(102);
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
            selector: 'page-item-list',template:/*ion-inline-start:"E:\Project\BGK48\src\pages\item-list\item-list.html"*/'<!--\n\n  Generated template for the ItemListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Item List A1\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button color="secondary" style="float: right;">+</button>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <h4>รายการของ</h4>\n\n    </ion-col>\n\n    <ion-col col-6 class="qty_item">\n\n      <h4>จำนวน</h4>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-item class="pointer_item" (click)="goDetail_list()">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        Item1\n\n      </ion-col>\n\n      <ion-col col-6 class="qty_item">\n\n        3/3\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n  <ion-item class="pointer_item">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        Item2\n\n      </ion-col>\n\n      <ion-col col-6 class="qty_item">\n\n        1/2\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n  <ion-item class="pointer_item">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        Item2\n\n      </ion-col>\n\n      <ion-col col-6 class="qty_item">\n\n        0/1\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Project\BGK48\src\pages\item-list\item-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ItemListPage);
    return ItemListPage;
}());

//# sourceMappingURL=item-list.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListPageModule", function() { return ItemListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_list__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemListPageModule = /** @class */ (function () {
    function ItemListPageModule() {
    }
    ItemListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_list__["a" /* ItemListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item_list__["a" /* ItemListPage */]),
            ],
        })
    ], ItemListPageModule);
    return ItemListPageModule;
}());

//# sourceMappingURL=item-list.module.js.map

/***/ })

});
//# sourceMappingURL=13.js.map