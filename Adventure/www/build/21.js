webpackJsonp([21],{

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications__ = __webpack_require__(567);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */]),
            ],
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());

//# sourceMappingURL=notifications.module.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_menu_right_menu_right__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
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
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(popoverCtrl, loadingCtrl, SFT, gd, navCtrl, navParams) {
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
        this.SFT = SFT;
        this.gd = gd;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.get_noti();
        this.update_all();
        this.getData = gd.notiAll;
    }
    NotificationsPage.prototype.update_all = function () {
        var _this = this;
        this.SFT.ServiceThread('noti_read_all', {}, 'POST').then(function (data) {
            console.log(data);
            if (data["res_code"] == "00") {
                _this.gd.sumNoti = 0;
            }
        });
    };
    NotificationsPage.prototype.get_noti = function () {
        var datasend = {
            'user_id': this.gd.userProfile["user_id"],
            'widthphone': __WEBPACK_IMPORTED_MODULE_5_jquery__('ng-component').width(),
            'lat': this.SFT.userlocation['lat'],
            'lng': this.SFT.userlocation['long'],
        };
        // this.serviceFactoryThread.ServiceThread("get_noti", datasend, "POST").then(data => {
        //   console.log(data);
        //   this.getData = data["res_result"];
        // })
        console.log(datasend);
    };
    NotificationsPage.prototype.doRefresh = function (event) {
        var _this = this;
        this.gd.notiAll = [];
        this.gd.sumNoti = this.gd.notiBase - this.gd.sumNoti;
        this.gd.notiBase = 0;
        this.gd.numLoadmore = 0;
        this.gd.get_noti('old');
        this.get_noti();
        setTimeout(function () {
            _this.getData = _this.gd.notiAll;
            event.complete();
        }, 500);
    };
    NotificationsPage.prototype.doInfinite = function (event) {
        var _this = this;
        this.gd.get_noti('old');
        setTimeout(function () {
            _this.getData = _this.gd.notiAll;
            event.complete();
        }, 500);
    };
    NotificationsPage.prototype.nextPage = function (data) {
        var _this = this;
        console.log(data);
        this.SFT.ServiceThread("updateNoti", data, "POST").then(function (result) {
            if (result["res_code"] == "00") {
                data["noti_read"] = 1;
                _this.gd.sumNoti--;
            }
        });
        if (data.noti_type == 3) {
        }
        else if (data.noti_type == 2) {
            var roomnumber = this.gd.roomchat.findIndex(function (x) { return x.room_name == data.noti_post_id; });
            var datasend = this.gd.roomchat[roomnumber];
            this.gd.nextpage(this.navCtrl, "ChatPage", { 'key': datasend['room_name'], 'imguser': datasend['user_path_img'], 'data': datasend });
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'hide',
                content: "\n        <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\n          ",
            });
            // this.gd.goDetail = false;
            try {
                loading_1.present();
            }
            catch (error) {
            }
            setTimeout(function () {
                console.log(data);
                _this.gd.nextpage(_this.navCtrl, 'DetailfeedPage', { 'data': data.post[0][0] });
                loading_1.dismiss();
            }, 500);
        }
    };
    NotificationsPage.prototype.NextPages = function (page, data) {
        this.gd.nextpage(this.navCtrl, page, { 'data': data });
    };
    NotificationsPage.prototype.presentPopover = function (myEvent) {
        __WEBPACK_IMPORTED_MODULE_5_jquery__(".share").removeClass('share');
        __WEBPACK_IMPORTED_MODULE_5_jquery__("body").addClass('rightMenu');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_menu_right_menu_right__["a" /* MenuRightComponent */], { navCtrl: this.navCtrl });
        popover.present({
            ev: myEvent
        });
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/notifications/notifications.html"*/'<ion-header>\n  <!-- <ion-navbar>\n  \n      <ion-title Museo>\n  \n        <table style=" width: 100%; ">\n          <tr>\n            <td>Notification</td>\n          </tr>\n          <tr>\n            <td style="font-size: 10px;opacity: .7;" class="Montserrat">\n              <i>Share your freedom</i>\n            </td>\n          </tr>\n        </table>\n  \n      </ion-title>\n    </ion-navbar> -->\n  <ion-navbar style="padding-left: 0;padding-right: 0;padding-bottom: 0px;">\n    <ion-buttons start style="order: 0;" style="width: 100%;margin: 0px;">\n      <div style="width: 100%;position: relative;">\n        <div class="header2" style="margin: auto;width: 100%;position: absolute;z-index: 0;top: 0px;bottom: 0px;height: 32px;">\n          <!-- <button ion-button icon-only style="" class="" (click)="scrollTopFN()">\n            <img style="position: relative;width: 20px;" src="./assets/icon/logotree.svg" alt="">\n          </button>\n          <button ion-button icon-only style="" class="" (click)="scrollTopFN()">\n            <div style="position: relative;color: #000;font-weight: bold;font-size: 14px;">Adventure Earth\n            </div>\n          </button> -->\n          <button ion-button icon-only style="float:right;" class="" (click)="presentPopover($event)">\n            <img style="position: relative;margin-right: 10px;" src="./assets/icon/menu-icon.svg" alt="">\n          </button>\n          <button ion-button icon-only style="float:right;" class="" (click)="NextPages(\'ProfilePage\',gd.userProfile)">\n            <img style="position: relative;margin-right: 10px;height: 30px;width: 30px;" id="img_profile" class="imgpro" [src]="gd.userProfile.user_path_img"\n            />\n          </button>\n        </div>\n      </div>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="Museo">\n  <ion-refresher (ionRefresh)="doRefresh($event)" pullMax="1000">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <div>\n    <!-- <div class="texttitle">\n          <span>New</span>\n        </div> -->\n    <ion-list *ngFor="let data of getData" style="margin-bottom: 0;" [ngClass]="data.noti_read == \'0\' ? \'noRead\' : \'\'">\n      <ion-item (click)="nextPage(data)">\n        <ion-avatar item-start>\n          <div class="avataborder">\n            <div class="avatabackground">\n              <img [src]="data.user.user_path_img">\n            </div>\n          </div>\n        </ion-avatar>\n        <h2 style="font-weight: 500;">\n          <span [innerHTML]="data.user.user_firstname"></span>\n          <span [innerHTML]="data.user.user_lastname"></span>\n        </h2>\n        <p class="detail">\n          <span [innerHTML]="data.detail"></span>\n          <span *ngIf="data.post.photo_caption">"\n            <span [innerHTML]="data.post.photo_caption"></span> "</span>\n        </p>\n        <p class="hour">{{data.time}} ago</p>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ion-infinite-scroll threshold="500px" (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n<div id="footer" style="z-index: 100;"></div>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/notifications/notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */], __WEBPACK_IMPORTED_MODULE_3__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ })

});
//# sourceMappingURL=21.js.map