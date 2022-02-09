webpackJsonp([29],{

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPickPageModule", function() { return EditPickPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_pick__ = __webpack_require__(558);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditPickPageModule = /** @class */ (function () {
    function EditPickPageModule() {
    }
    EditPickPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_pick__["a" /* EditPickPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_pick__["a" /* EditPickPage */]),
            ],
        })
    ], EditPickPageModule);
    return EditPickPageModule;
}());

//# sourceMappingURL=edit-pick.module.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPickPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__ = __webpack_require__(63);
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
 * Generated class for the EditPickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPickPage = /** @class */ (function () {
    function EditPickPage(navCtrl, gd, navParams) {
        this.navCtrl = navCtrl;
        this.gd = gd;
        this.navParams = navParams;
    }
    EditPickPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad EditPickPage');
    };
    EditPickPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-pick',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/edit-pick/edit-pick.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title class="Museo">\n  \n          <table style=" width: 100%; ">\n              <tr>\n                <td>Edit Settings</td>\n              </tr>\n              <tr>\n                <td style="font-size: 10px;opacity: .7;" class="Montserrat"><i>Share your freedom</i></td>\n              </tr>\n            </table>\n      </ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding class="Montserrat">\n    <ion-list>\n      <button ion-item (click)=\'gd.nextpage(this.navCtrl, "EditTagPage", { "data": 1 })\'>\n        Edit Pick the Picture Inspired you\n      </button>\n      <button ion-item (click)=\'gd.nextpage(this.navCtrl, "EditTagPage", { "data": 2 })\'>\n        Edit Pick the Place Inspired you\n      </button>\n      <button ion-item (click)=\'gd.nextpage(this.navCtrl, "EditTagPage", { "data": 3 })\'>\n        Edit What’s your Interesting\n      </button>\n      <div ion-item >\n  \n      </div>\n    </ion-list>\n  \n  </ion-content>\n  <div id="footer"></div>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/edit-pick/edit-pick.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], EditPickPage);
    return EditPickPage;
}());

//# sourceMappingURL=edit-pick.js.map

/***/ })

});
//# sourceMappingURL=29.js.map