webpackJsonp([11],{

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(578);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]),
            ],
        })
    ], SettingPageModule);
    return SettingPageModule;
}());

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(49);
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
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, fb, storage, alertCtrl, serviceFactoryThread, modalCtrl, gd, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.serviceFactoryThread = serviceFactoryThread;
        this.modalCtrl = modalCtrl;
        this.gd = gd;
        this.navParams = navParams;
        this.events = events;
        storage.get('password').then(function (val) {
            _this.type = val;
        });
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad SettingPage');
    };
    SettingPage.prototype.EditProfile = function () {
        // console.log('EditprofilePage');
        var modal = this.modalCtrl.create('EditprofilePage', {});
        modal.present();
        modal.onDidDismiss(function (data) {
        });
    };
    SettingPage.prototype.ResetPassword = function () {
        // console.log('ResetPassword');
        var modal = this.modalCtrl.create('RepasswordPage', {});
        modal.present();
        modal.onDidDismiss(function (data) {
        });
    };
    SettingPage.prototype.EditPick = function () {
        // console.log('EditPick');
        this.gd.nextpage(this.navCtrl, 'EditPickPage', {});
    };
    SettingPage.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Are you sure you want to log out?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        // console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Log Out',
                    handler: function () {
                        _this.gd.regisLogout();
                        _this.events.publish('logout');
                        _this.storage.clear();
                        _this.fb.logout().then(function (res) {
                            // console.log('success');
                        }).catch(function (e) { return console.log('Error logout', e); });
                    }
                }
            ]
        });
        alert.present();
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/setting/setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title class="Museo">\n\n          <table style=" width: 100%; ">\n              <tr>\n                <td>Settings</td>\n              </tr>\n              <tr>\n                <td style="font-size: 10px;opacity: .7;" class="Montserrat"><i>Share your freedom</i></td>\n              </tr>\n            </table>\n      </ion-title>\n    </ion-navbar>\n\n  </ion-header>\n\n\n  <ion-content padding class="Montserrat">\n    <ion-list>\n      <button ion-item (click)=\'EditProfile()\'>\n        Edit Profile\n      </button>\n      <button ion-item style="line-height: 13px;padding-top: 5px;padding-top: 1px;margin: 0px 0px 0px 0;"  (click)=\'EditPick()\' class="settext">\n        Edit Settings <br>\n        <span style="font-size: 10px;color: #AEAEAE"> (Picture,Place,Interesting) </span>\n      </button>\n      <button ion-item  class="no-item-inner"    (click)=\'ResetPassword()\' *ngIf="type != \'fb\'">\n        <span style="color: #AEAEAE">Reset Password</span>\n      </button>\n      <button ion-item  class="no-item-inner" (click)=\'logout()\'>\n          <i class="off icon25"></i>  <span style="margin-left:30px;" class="colorRed"> LOG OUT </span>\n      </button>\n      <div ion-item  style="    background-color: transparent;">\n          <!-- <span style="position: absolute;\n          top: 0;\n          right: 20px;\n          font-size: 12px;">ver.  {{gd.vertion}}</span> -->\n          <span style="position: absolute;\n          top: 0;\n          right: 20px;\n          font-size: 12px;">ver.4.0</span>\n      </div>\n    </ion-list>\n    <!-- <div  style="     padding-left: 20px;\n                font-size: 12px;\n                margin-top: -55px;\n                z-index: 5000;">\n\n         -->\n    <!-- </div> -->\n  </ion-content>\n  <div id="footer"></div>\n'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ })

});
//# sourceMappingURL=11.js.map