webpackJsonp([25],{

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalProfilePageModule", function() { return ModalProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_profile__ = __webpack_require__(560);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalProfilePageModule = /** @class */ (function () {
    function ModalProfilePageModule() {
    }
    ModalProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_profile__["a" /* ModalProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_profile__["a" /* ModalProfilePage */]),
            ],
        })
    ], ModalProfilePageModule);
    return ModalProfilePageModule;
}());

//# sourceMappingURL=modal-profile.module.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalProfilePage; });
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
 * Generated class for the ModalProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalProfilePage = /** @class */ (function () {
    function ModalProfilePage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataGet = {};
        this.dataGet = navParams.get('data');
        console.log(navParams.get('data'));
    }
    ModalProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalProfilePage');
    };
    ModalProfilePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalProfilePage.prototype.goDismiss = function (id) {
        this.viewCtrl.dismiss(id);
    };
    ModalProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-profile',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/modal-profile/modal-profile.html"*/'<ion-content padding style="background: rgba(0, 0, 0, 0.7);" (click)="close()">\n\n</ion-content>\n<ion-footer style="background: #fff;height: 75%;background: rgba(0, 0, 0, 0);">\n  <div style="position: relative;margin: 10px;border-radius: 5px;background: transparent;">\n    <div class="profileHeader" style="border-radius: 10px;background: transparent;">\n      <div\n        style="background: url(\'./assets/imgs/header-profile.jpg\');background-size: cover;background-position: center;width: 100%;height: 100%;border-top-right-radius: 10px;border-top-left-radius: 10px;"\n        *ngIf="dataGet.user_coverImg == \'http://myadventureearth.com/\'"></div>\n      <div\n        [ngStyle]="{\'background\': \'url(\'+dataGet.user_coverImg+\')\',\'background-size\': \'cover\',\'background-position\': \'center\'}"\n        *ngIf="coverImage != \'\'" style="width: 100%;height: 100%;border-top-right-radius: 10px;border-top-left-radius: 10px;"></div>\n    </div>\n    <div class="detail" style="border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <div class="profileImage"\n              [ngStyle]="{\'background\': \'url(\'+dataGet.user_path_img+\')\', \'background-size\': \'cover\', \'background-position\': \'center\'}">\n            </div>\n          </ion-col>\n          <ion-col col-8 style="padding-top: 0px;">\n            <div class="fullname" style="padding-left: 15px;">\n              <span [innerHTML]="dataGet.user_firstname"> </span>\n              <span [innerHTML]="dataGet.user_lastname"> </span>\n            </div>\n            <div class="fromname" style="padding-left: 15px;">\n              from {{dataGet.country_name_en}}\n            </div>\n            <ion-grid class="gridFrame" style="    margin-top: 10px;">\n              <ion-row>\n                <ion-col col-4>\n                  <div class="valueFollow">{{dataGet.followers}}</div>\n                  <div class="fontFollow">Followers</div>\n                </ion-col>\n                <ion-col col-4 style="border-right: 1px solid;border-left: 1px solid;">\n                  <div class="valueFollow">{{dataGet.following}}</div>\n                  <div class="fontFollow">Following</div>\n                </ion-col>\n                <ion-col col-4>\n                  <div class="valueFollow">{{dataGet.post}}</div>\n                  <div class="fontFollow">Post</div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n        </ion-row>\n        <ion-row style="text-align: center;" style="margin-top: 10px;">\n          <ion-col col-6 (click)="goDismiss(1)" style="text-align: right;">\n            <button ion-button small style="width: 130px;margin-right: 10px;    border-radius: 25px;" class="btnView">\n              View Profile\n            </button>\n          </ion-col>\n          <ion-col col-6 (click)="goDismiss(2)" style="text-align: left;">\n            <button ion-button small style="width: 130px;    border-radius: 25px;" class="btnView">\n              <!-- <ion-icon name="ios-chatbubbles" style="margin-right: 10px;"></ion-icon> -->\n              <img style="width: 15px;margin-right: 5px;" src="./assets/icon/iconMessage-white.svg" alt="">\n              Chat\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <!-- <img class="img_follow" src="./assets/icon/follow_icon+.png" alt="">\n      <img class="img_follow" src="./assets/icon/follow_icon-.png" alt=""> -->\n    </div>\n\n  </div>\n  <div style="height: 100%;" (click)="close()">\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/modal-profile/modal-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ModalProfilePage);
    return ModalProfilePage;
}());

//# sourceMappingURL=modal-profile.js.map

/***/ })

});
//# sourceMappingURL=25.js.map