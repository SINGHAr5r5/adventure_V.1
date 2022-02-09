webpackJsonp([34],{

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingExplorePageModule", function() { return BookingExplorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_explore__ = __webpack_require__(550);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookingExplorePageModule = /** @class */ (function () {
    function BookingExplorePageModule() {
    }
    BookingExplorePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__booking_explore__["a" /* BookingExplorePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__booking_explore__["a" /* BookingExplorePage */]),
            ],
        })
    ], BookingExplorePageModule);
    return BookingExplorePageModule;
}());

//# sourceMappingURL=booking-explore.module.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingExplorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_menu_right_menu_right__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Firebase__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
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
 * Generated class for the BookingExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookingExplorePage = /** @class */ (function () {
    function BookingExplorePage(popoverCtrl, gd, navCtrl, navParams, serviceFactoryThread) {
        this.popoverCtrl = popoverCtrl;
        this.gd = gd;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceFactoryThread = serviceFactoryThread;
        this.ref = __WEBPACK_IMPORTED_MODULE_5_Firebase__["database"]().ref('shopComment/');
        this.data_get = [];
        this.data_get = navParams.get('data');
        console.log(navParams.get('data'));
    }
    BookingExplorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookingExplorePage');
    };
    BookingExplorePage.prototype.goProfile = function (image) {
        this.gd.nextpage(this.navCtrl, 'ProfilePage', { 'data': image });
    };
    BookingExplorePage.prototype.presentPopover = function (myEvent) {
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".share").removeClass('share');
        __WEBPACK_IMPORTED_MODULE_6_jquery__("body").addClass('rightMenu');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_menu_right_menu_right__["a" /* MenuRightComponent */], { navCtrl: this.navCtrl });
        popover.present({
            ev: myEvent
        });
    };
    BookingExplorePage.prototype.nextPage = function (dataget) {
        var _this = this;
        console.log(dataget);
        this.checkroom(dataget).then(function (data) {
            _this.gd.nextpage(_this.navCtrl, 'BookingdetailPage', { data: dataget });
        });
    };
    BookingExplorePage.prototype.checkroom = function (getData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (getData.package_room_key == "") {
                var datasend = {
                    "id": getData.packet_id,
                    "key": '',
                };
                _this.serviceFactoryThread.ServiceThread("check_key_comment_package", datasend, "POST").then(function (data) {
                    console.log(data);
                    if (data["res_code"] == '00') {
                        getData.package_room_key = data["res_result"]["res_result"];
                        resolve();
                    }
                    else {
                        _this.createRoom(getData).then(function (data) {
                            getData.package_room_key = data;
                            var datasend = {
                                "id": getData.packet_id,
                                "key": data,
                            };
                            _this.serviceFactoryThread.ServiceThread("check_key_comment_package", datasend, "POST").then(function (data) {
                                console.log('add_room');
                                resolve();
                            });
                        });
                    }
                });
            }
            else {
                resolve();
            }
        });
    };
    BookingExplorePage.prototype.createRoom = function (getData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var newData = _this.ref.push();
            newData.set({
                roomname: getData.packet_id,
            });
            resolve(newData.key);
        });
    };
    BookingExplorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-booking-explore',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/booking-explore/booking-explore.html"*/'<!--\n  Generated template for the BookingExplorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!-- <ion-buttons start style="order: 0;">\n      <button ion-button icon-only style="top: 10px;" class="">\n        <img style="top: -7px;position: relative;width: 20px;" src="./assets/icon/logotree.svg" alt="">\n      </button>\n      <button ion-button icon-only style="top: 10px;" class="">\n        <div style="top: -7px;position: relative;color: #000;font-weight: bold;font-size: 14px;">Adventure Earth</div>\n      </button>\n    </ion-buttons> -->\n    <ion-buttons end>\n      <button ion-button icon-only style="" class="" (click)="goProfile(gd.userProfile)">\n        <img style="position: relative;margin-right: 10px;height: 30px;width: 30px;" id="img_profile" class="imgpro" [src]="gd.userProfile.user_path_img"\n        />\n      </button>\n      <button ion-button icon-only style="top: 10px;" class="" (click)="presentPopover($event)">\n        <img style="top: -7px;position: relative;margin-right: 10px;" src="./assets/icon/menu-icon.svg" alt="">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid class="gridContent" *ngFor="let popularData of data_get">\n    <!-- <ion-row>\n      <ion-col class="detailLocation">\n        Popular Activity\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="subTitleText" style="font-weight: bold;">\n        Recommended by us\n      </ion-col>\n    </ion-row> -->\n    <ion-row>\n      <ion-col>\n        <div>\n          <!-- <div class="slidePrev" (click)="slidePrev()">\n            <ion-icon name="ios-arrow-back" style="margin: auto;"></ion-icon>\n          </div>\n          <div class="slideNext" (click)="slideNext()">\n            <ion-icon name="ios-arrow-forward" style="margin: auto;"></ion-icon>\n          </div> -->\n          <ion-slides slidesPerView=\'1\' #slideP (click)="nextPage(popularData)" *ngIf="popularData.length != 0">\n            <ion-slide *ngFor="let images of popularData.img">\n              <div class="Imgs" [ngStyle]="{\'background\': \'url(\'+images.img_resize+\')\'}"></div>\n            </ion-slide>\n          </ion-slides>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row style="margin-top: 10px;" (click)="nextPage(popularData)">\n      <ion-col col-12 class="detailLocation">\n        {{popularData.packet_name}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row (click)="nextPage(popularData)">\n      <ion-col class="subTitleText">\n        {{popularData.packet_detail}}\n      </ion-col>\n    </ion-row>\n    <ion-row (click)="nextPage(popularData)">\n      <ion-col>\n        <div>\n          <img class="pingIcon" style="margin-left: 0;vertical-align: middle;" src="./assets/icon/ping-icon.svg" alt="">\n          <span style="color: #1B75BB;vertical-align: middle;" *ngIf="popularData.length != 0">{{popularData.province.province_name_en}}</span>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row (click)="nextPage(popularData)">\n      <ion-col>\n        <span *ngIf="popularData.length != 0">\n          <div *ngFor="let price of popularData.packet_price">THB {{price.price}} per {{price.price_name}}</div>\n        </span>\n        <div style="color: #8F8F8F;">\n          {{popularData.countTime}}\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div style="height: 100px;"></div>\n\n</ion-content>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/booking-explore/booking-explore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */]])
    ], BookingExplorePage);
    return BookingExplorePage;
}());

//# sourceMappingURL=booking-explore.js.map

/***/ })

});
//# sourceMappingURL=34.js.map