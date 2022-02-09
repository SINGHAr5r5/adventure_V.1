webpackJsonp([18],{

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewPageModule", function() { return PreviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview__ = __webpack_require__(571);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PreviewPageModule = /** @class */ (function () {
    function PreviewPageModule() {
    }
    PreviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__preview__["a" /* PreviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__preview__["a" /* PreviewPage */]),
            ],
        })
    ], PreviewPageModule);
    return PreviewPageModule;
}());

//# sourceMappingURL=preview.module.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
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
 * Generated class for the PreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreviewPage = /** @class */ (function () {
    function PreviewPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    PreviewPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad PreviewPage");
        this.myImage = this.navParams.get("image");
        // this.myTitle = this.navParams.get("title");
    };
    PreviewPage.prototype.close = function () {
        this.viewCtrl.dismiss("close").catch(function (err) {
            console.error(err);
        });
    };
    PreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preview',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/preview/preview.html"*/'<!--\n  Generated template for the PreviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar class="padding-notch">\n    <div class="menu-button-height">\n      <ion-title>{{myTitle}}</ion-title>\n      <ion-buttons class="btn-close" end>\n        <div class="div-icon-close">\n          <ion-icon class="icon-close" item-end color="lightgray" name="md-close" (click)="close()"></ion-icon>\n        </div>\n      </ion-buttons>\n    </div>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n\n    <div class="menu-button-height">\n        <!-- <ion-title>{{myTitle}}</ion-title> -->\n        <ion-buttons class="btn-close" end>\n          <div class="div-icon-close">\n            <ion-icon class="icon-close" item-end color="lightgray" name="md-close" (click)="close()"></ion-icon>\n          </div>\n        </ion-buttons>\n      </div>\n      \n  <div class="full">\n    <img src="{{myImage}}" class="preview">\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/preview/preview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], PreviewPage);
    return PreviewPage;
}());

//# sourceMappingURL=preview.js.map

/***/ })

});
//# sourceMappingURL=18.js.map