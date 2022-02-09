webpackJsonp([9],{

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashLoadPageModule", function() { return SplashLoadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splash_load__ = __webpack_require__(581);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SplashLoadPageModule = /** @class */ (function () {
    function SplashLoadPageModule() {
    }
    SplashLoadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__splash_load__["a" /* SplashLoadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__splash_load__["a" /* SplashLoadPage */]),
            ],
        })
    ], SplashLoadPageModule);
    return SplashLoadPageModule;
}());

//# sourceMappingURL=splash-load.module.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashLoadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_globaldata_service__ = __webpack_require__(63);
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
 * Generated class for the SplashLoadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplashLoadPage = /** @class */ (function () {
    function SplashLoadPage(gd, SFT, storage, navCtrl, navParams) {
        var _this = this;
        this.gd = gd;
        this.SFT = SFT;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        SFT.ServiceThread("hideStatus", {}, "POST").then(function (data) {
            gd.showbtn = data['res_show'];
            console.log("===============MAP==============", gd.showbtn, "===============MAP==============");
            if (data['res_show'] == '1') {
                SFT.userlocation = { 'lat': '37.4327278137207', 'long': '-121.93013763427734' };
            }
        });
        storage.get('email').then(function (val) {
            console.log(val);
            if (val != null && val != '' && val != undefined) {
                storage.get('user_api_key').then(function (vall) {
                    if (vall != null) {
                        _this.SFT.STLogin = true;
                        _this.SFT.user_api_key = vall;
                        gd.nextrootpage(navCtrl, 'TabsPage', {});
                        SFT.GCL();
                    }
                });
            }
            else {
                gd.nextrootpage(navCtrl, 'LoginPage', {});
            }
        });
    }
    SplashLoadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplashLoadPage');
    };
    SplashLoadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash-load',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/splash-load/splash-load.html"*/'<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/splash-load/splash-load.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SplashLoadPage);
    return SplashLoadPage;
}());

//# sourceMappingURL=splash-load.js.map

/***/ })

});
//# sourceMappingURL=9.js.map