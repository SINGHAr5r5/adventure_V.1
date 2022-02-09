webpackJsonp([10],{

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialsharingPageModule", function() { return SocialsharingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socialsharing__ = __webpack_require__(580);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SocialsharingPageModule = /** @class */ (function () {
    function SocialsharingPageModule() {
    }
    SocialsharingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__socialsharing__["a" /* SocialsharingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__socialsharing__["a" /* SocialsharingPage */]),
            ],
        })
    ], SocialsharingPageModule);
    return SocialsharingPageModule;
}());

//# sourceMappingURL=socialsharing.module.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialsharingPage; });
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
 * Generated class for the SocialsharingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SocialsharingPage = /** @class */ (function () {
    function SocialsharingPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    SocialsharingPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad SocialsharingPage');
    };
    SocialsharingPage.prototype.close = function (id) {
        this.viewCtrl.dismiss(id);
    };
    SocialsharingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-socialsharing',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/socialsharing/socialsharing.html"*/'<!--\n  Generated template for the SocialsharingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content overflow-scroll="true" scroll="true" style="    height: 100%;" class="slideInUp"> \n  <div class="Montserrat" style=" font-size: 17px;  padding: 5px;">\n    Share your story and freedom\n  </div>\n  <div style="background-color: #fbfbfb;display:-webkit-box;padding: 5px;margin-left: -5px; overflow-x: scroll;\n    overflow-y: hidden;   white-space: nowrap; height: 100%;padding-top: 0px;">\n    <div class="icon" (click)="close(1)">\n      <img src="./assets/imgs/facebook.png" alt="" style="width: 50px;height: 50px;border: 1px solid #fff;border-radius: 100%;background-color: #fff;">\n      <br> <span class="Museo"> Facebook</span> \n    </div>\n    <div class="icon" (click)="close(6)">\n      <img src="./assets/imgs/message.png" alt="" style="width: 50px;height: 50px;border: 1px solid #fff;border-radius: 100%;background-color: #fff;">\n      <br> <span class="Museo"> Messenger</span> \n    </div>\n    <div class="icon" (click)="close(2)">\n      <img src="./assets/imgs/sms.png" alt="" style="width: 50px;height: 50px;border: 1px solid #fff;border-radius: 100%;background-color: #fff;">\n      <br> <span class="Museo"> Message</span> \n    </div>\n    <div class="icon" (click)="close(3)">\n      <img src="./assets/imgs/twitter.png" alt="" style="width: 50px;height: 50px;border: 1px solid #fff;border-radius: 100%;background-color: #fff;">\n      <br> <span class="Museo"> Twitter</span> \n    </div>\n    <div class="icon" (click)="close(5)">\n      <img src="./assets/imgs/mail.png" alt="" style="width: 50px;height: 50px;border: 1px solid #fff;border-radius: 100%;background-color: #fff;">\n      <br> <span class="Museo"> E-Mail</span> \n    </div>\n    <div class="icon" (click)="close(4)">\n      <img src="./assets/imgs/copy.png" alt="" style="width: 50px;height: 50px;border: 1px solid #fff;border-radius: 100%;background-color: #fff;">\n      <br> <span class="Museo"> Copy Link</span> \n    </div>\n    <div style="width:5px;">\n      \n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/socialsharing/socialsharing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], SocialsharingPage);
    return SocialsharingPage;
}());

//# sourceMappingURL=socialsharing.js.map

/***/ })

});
//# sourceMappingURL=10.js.map