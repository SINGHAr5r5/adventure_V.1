webpackJsonp([15],{

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepasswordPageModule", function() { return RepasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repassword__ = __webpack_require__(572);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RepasswordPageModule = /** @class */ (function () {
    function RepasswordPageModule() {
    }
    RepasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__repassword__["a" /* RepasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__repassword__["a" /* RepasswordPage */]),
            ],
        })
    ], RepasswordPageModule);
    return RepasswordPageModule;
}());

//# sourceMappingURL=repassword.module.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(49);
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
 * Generated class for the RepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RepasswordPage = /** @class */ (function () {
    function RepasswordPage(navCtrl, storage, gd, serviceFactoryThread, viewCtrl, alertCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.gd = gd;
        this.serviceFactoryThread = serviceFactoryThread;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.data = {};
        this.data.NewPassword = "";
        storage.get('password').then(function (val) {
            _this.oldPassword = val;
        });
    }
    RepasswordPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad RepasswordPage');
    };
    RepasswordPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RepasswordPage.prototype.send = function () {
        var _this = this;
        if (this.data.OldPassword != this.oldPassword) {
            this.gd.toast('Old passwords not match.');
        }
        else if (this.data.NewPassword != this.data.Confirm) {
            this.gd.toast('Confirm new password not match.');
        }
        else if (!this.gd.checklength(this.data.NewPassword, 6)) {
            this.gd.toast('Password must be more than 6 characters.');
        }
        else {
            try {
                // console.log($('.page1')[0]['textContent']);
                var alert_1 = this.alertCtrl.create({
                    // title: 'Confirm ResetPassword',
                    message: 'Confirm Reset Password ?',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                // console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'Ok',
                            handler: function () {
                                // console.log('Buy clicked');
                                // console.log('send');
                                _this.serviceFactoryThread.ServiceThread('UpdatePassword', _this.data, 'POST')
                                    .then(function (datas) {
                                    if (datas['res_code'] == '00') {
                                        _this.gd.toast(datas['res_result']);
                                        _this.storage.set('password', _this.data['NewPassword']);
                                        _this.viewCtrl.dismiss();
                                        // console.log(datas['res_result']);
                                    }
                                    else {
                                        // console.log(datas['res_text']);
                                    }
                                });
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            catch (error) {
            }
        }
        // try {
        //       // console.log($('.page1')[0]['textContent']);
        // } catch (error) {
        //       let alert = this.alertCtrl.create({
        //         // title: 'Confirm ResetPassword',
        //         message: 'Confirm ResetPassword ?',
        //         buttons: [
        //           {
        //             text: 'Cancel',
        //             role: 'cancel',
        //             handler: () => {
        //               // console.log('Cancel clicked');
        //             }
        //           },
        //           {
        //             text: 'Edit',
        //             handler: () => {
        //               // console.log('Buy clicked');
        //               // console.log('send');
        //               this.serviceFactoryThread.ServiceThread('UpdatePassword',this.data , 'POST')
        //               .then(datas => {
        //                 if (datas['res_code'] == '00') {
        //                   this.gd.toast(datas['res_result']);
        //                   this.storage.set('password',this.data['NewPassword']);
        //                   this.viewCtrl.dismiss();
        //                   // console.log(datas['res_result']);
        //                 } else {
        //                   // console.log(datas['res_text']);
        //                 }
        //               });
        //             }
        //           }
        //         ]
        //       });
        //       alert.present();
        // }
    };
    RepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-repassword',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/repassword/repassword.html"*/'<!--\n  Generated template for the EditprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n  <ion-navbar>\n    <ion-buttons start style="position: absolute;" class="Montserrat">\n      <button ion-button (click)="dismiss()" style="color:white;">Cancel</button>\n    </ion-buttons>\n    <ion-title>\n\n      <table style=" width: 100%; ">\n        <tr>\n          <td class="Museo">Reset Password</td>\n        </tr>\n        <tr>\n          <td style="font-size: 10px;opacity: .7;" class="Montserrat">\n            <i>Share your freedom</i>\n          </td>\n        </tr>\n      </table>\n\n    </ion-title>\n    <ion-buttons start style="position: absolute;    right: 0;" class="Montserrat">\n      <button ion-button style="color:white;" (click)="send()">Done</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="Montserrat" >\n  <ion-list class="center list" style=" width: 90%;">\n      <label id="hidden"></label>\n    <div class="inputlogin center" style="margin-bottom: 15px;">\n      <ion-label stacked>Old Password</ion-label>\n      <label for="OldPassword" class="page1" *ngIf="!data.OldPassword" >Old Password</label>\n      <input type="password" id="OldPassword" [(ngModel)]="data.OldPassword" required="required" />\n    </div>\n    <div class="inputlogin center" style="margin-bottom: 15px;">\n      <ion-label stacked>New Password</ion-label>\n      <label for="NewPassword" class="page1" *ngIf="!data.NewPassword" >New Password</label>\n      <input type="password" id="NewPassword" [(ngModel)]="data.NewPassword" required="required" />\n    </div>\n    <div class="inputlogin center" style="margin-bottom: 15px;">\n      <ion-label stacked>Confirm New Password</ion-label>\n      <label for="Confirm" class="page1" *ngIf="!data.Confirm" >Confirm New Password</label>\n      <input type="password" id="Confirm" [(ngModel)]="data.Confirm" required="required" />\n    </div>\n    \n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/repassword/repassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_2__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], RepasswordPage);
    return RepasswordPage;
}());

//# sourceMappingURL=repassword.js.map

/***/ })

});
//# sourceMappingURL=15.js.map