webpackJsonp([32],{

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPageModule", function() { return BookingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookings__ = __webpack_require__(553);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookingsPageModule = /** @class */ (function () {
    function BookingsPageModule() {
    }
    BookingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bookings__["a" /* BookingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bookings__["a" /* BookingsPage */]),
            ],
        })
    ], BookingsPageModule);
    return BookingsPageModule;
}());

//# sourceMappingURL=bookings.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_menu_right_menu_right__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Firebase__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
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
 * Generated class for the BookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookingsPage = /** @class */ (function () {
    function BookingsPage(popoverCtrl, gd, navCtrl, navParams, serviceFactoryThread) {
        var _this = this;
        this.popoverCtrl = popoverCtrl;
        this.gd = gd;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceFactoryThread = serviceFactoryThread;
        this.ref = __WEBPACK_IMPORTED_MODULE_6_Firebase__["database"]().ref('shopComment/');
        this.popularData = [];
        this.filterOpen = '';
        this.province = [];
        this.popularText = { name: 'Popular Activities', id: '' };
        this.wheretogoText = { name: 'Where to go?', id: '' };
        this.package = [];
        this.category = [];
        var dt = new Date(1571388208601 * 1000);
        var hr = dt.getHours();
        var m = "0" + dt.getMinutes();
        var s = "0" + dt.getSeconds();
        console.log(hr + ':' + m.substr(-2) + ':' + s.substr(-2));
        var datasend = {
            user_lat: 1,
            user_lng: 100,
            widthphone: 360,
            type_search: 'feed'
        };
        serviceFactoryThread.ServiceThread('get_package', datasend, "POST").then(function (data) {
            console.log(data);
            _this.package = data["res_result"];
        });
        serviceFactoryThread.ServiceThread('get_booking_category', {}, "POST").then(function (data) {
            console.log(data);
            if (data["res_code"] == '00') {
                _this.category = data["res_result"];
            }
        });
    }
    BookingsPage.prototype.scrollTopFN = function () {
        this.navCtrl.parent.select(0);
    };
    BookingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getPopularAc();
        this.getProvince();
        setTimeout(function () {
            console.log(_this.gd.TypeLocation);
        }, 1000);
    };
    BookingsPage.prototype.doRefresh = function (event) {
        var _this = this;
        var dt = new Date(1571388208601 * 1000);
        var hr = dt.getHours();
        var m = "0" + dt.getMinutes();
        var s = "0" + dt.getSeconds();
        console.log(hr + ':' + m.substr(-2) + ':' + s.substr(-2));
        var datasend = {
            user_lat: 1,
            user_lng: 100,
            widthphone: 360,
            type_search: 'feed'
        };
        this.serviceFactoryThread.ServiceThread('get_package', datasend, "POST").then(function (data) {
            console.log(data);
            _this.package = data["res_result"];
            event.complete();
        });
        this.getPopularAc();
        this.getProvince();
    };
    BookingsPage.prototype.getPopularAc = function () {
        var _this = this;
        var data = {
            province: this.wheretogoText.id,
            activity: this.popularText.id,
            type_query: 'popular',
            widthphone: __WEBPACK_IMPORTED_MODULE_7_jquery__('ng-component').width()
        };
        this.serviceFactoryThread.ServiceThread('getPacket', data, 'POST').then(function (data) {
            console.log(data);
            if (data['res_code'] == '00') {
                _this.popularData = data["res_result"][0];
            }
        });
    };
    BookingsPage.prototype.getProvince = function () {
        var _this = this;
        this.serviceFactoryThread.ServiceThread('get_package_province', {}, 'POST').then(function (data) {
            console.log(data);
            if (data['res_code'] == '00') {
                _this.province = data["res_result"];
            }
        });
    };
    BookingsPage.prototype.slidePrev = function () {
        this.slides.slidePrev();
    };
    BookingsPage.prototype.slideNext = function () {
        this.slides.slideNext();
    };
    BookingsPage.prototype.nextPage = function () {
        var _this = this;
        this.checkroom(this.popularData).then(function (data) {
            console.log(_this.popularData);
            _this.gd.nextpage(_this.navCtrl, 'BookingdetailPage', { data: _this.popularData });
        });
    };
    BookingsPage.prototype.goProfile = function (image) {
        this.gd.nextpage(this.navCtrl, 'ProfilePage', { 'data': image });
    };
    BookingsPage.prototype.nextDetail = function (dataGet) {
        var _this = this;
        this.checkroom(dataGet).then(function (data) {
            console.log(dataGet);
            _this.gd.nextpage(_this.navCtrl, 'BookingdetailPage', { data: dataGet });
        });
    };
    BookingsPage.prototype.openFilter = function (type) {
        if (this.filterOpen != type) {
            this.filterOpen = type;
        }
        else {
            this.filterOpen = '';
        }
    };
    BookingsPage.prototype.selectFilter = function (type, data) {
        if (type == 1) {
            this.wheretogoText = { name: data.province_name_en, id: data.province_id };
        }
        else {
            this.popularText = { name: data.cat_name, id: data.cat_id };
        }
        this.filterOpen = '';
    };
    BookingsPage.prototype.filter = function (type) {
        var _this = this;
        // this.getPopularAc();
        var data_send;
        if (type == '1') {
            data_send = {
                type_search: 'feed',
                province: this.wheretogoText,
                activity: this.popularText,
            };
        }
        else if (type == '2') {
            data_send = {
                type_search: 'explore',
                province: this.wheretogoText.id,
                activity: this.popularText.id,
                widthphone: 360,
            };
            console.log(data_send);
            this.serviceFactoryThread.ServiceThread('get_package', data_send, 'POST').then(function (data) {
                console.log(data);
                _this.package = data["res_result"];
            });
        }
        // this.gd.nextpage(this.navCtrl, 'BookingExplorePage', data_send);
    };
    BookingsPage.prototype.presentPopover = function (myEvent) {
        __WEBPACK_IMPORTED_MODULE_7_jquery__(".share").removeClass('share');
        __WEBPACK_IMPORTED_MODULE_7_jquery__("body").addClass('rightMenu');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_menu_right_menu_right__["a" /* MenuRightComponent */], { navCtrl: this.navCtrl });
        popover.present({
            ev: myEvent
        });
    };
    BookingsPage.prototype.checkroom = function (getData) {
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
    BookingsPage.prototype.createRoom = function (getData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var newData = _this.ref.push();
            newData.set({
                roomname: getData.packet_id,
            });
            resolve(newData.key);
        });
    };
    BookingsPage.prototype.seeAll = function (data) {
        this.gd.nextpage(this.navCtrl, 'BookingExplorePage', { data: data });
    };
    BookingsPage.prototype.showProvince = function (main) {
        if (main.Section_ST == '1') {
            main.Section_ST = '0';
        }
        else {
            main.Section_ST = '1';
        }
    };
    BookingsPage.prototype.chooserProvince = function (main, province) {
        main.Section_ST = '0';
        console.log(main, province);
        main.Section_Sub.forEach(function (element) {
            element.Sub_Package.forEach(function (packet) {
                if (province.province_id == packet.package_province) {
                    packet.st_show = '1';
                }
                else {
                    packet.st_show = '0';
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slideP'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], BookingsPage.prototype, "slides", void 0);
    BookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookings',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/bookings/bookings.html"*/'<!--\n  Generated template for the BookingNewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start style="order: 0;" (click)="scrollTopFN()">\n      <!-- <button ion-button icon-only style="" class="">\n        <img style="position: relative;width: 20px;" src="./assets/icon/logotree.svg" alt="">\n      </button> -->\n      <button ion-button icon-only style="" class="">\n        <div style="position: relative;color: #000;font-weight: bold;font-size: 14px;margin-left: 10px;">What to do</div>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only style="" class="" (click)="goProfile(gd.userProfile)">\n        <img style="position: relative;margin-right: 10px;height: 30px;width: 30px;" id="img_profile" class="imgpro" [src]="gd.userProfile.user_path_img"\n        />\n      </button>\n      <button ion-button icon-only style="" class="" (click)="presentPopover($event)">\n        <img style="position: relative;margin-right: 10px;" src="./assets/icon/menu-icon.svg" alt="">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)" pullMax="70">\n    <ion-refresher-content pullingIcon="none">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div>\n    <img src="./assets/imgs/testimage.png" alt="">\n  </div>\n  <!-- <video \n    controls="controls" \n    preload="metadata" \n    width="100%" \n    height="240" \n    x-webkit-airplay="allow"\n    webkit-playsinline="webkit-playsinline" \n    class="videoPlayer">\n    <source src="https://youtu.be/jGggxvICnH0" />\n  </video> -->\n  <ion-grid>\n    <ion-row class="filterMain" (click)="openFilter(1)">\n      <ion-col col-2 class="displayGrid">\n        <img class="pingIcon marginAuto" style="margin-left: 0" src="./assets/icon/ping-icon.svg" alt="">\n      </ion-col>\n      <ion-col col-8 class="displayGrid">\n        <span class="marginAuto" style="margin-left: 0">{{wheretogoText.name}}</span>\n      </ion-col>\n      <ion-col col-2 class="displayGrid" style="text-align: right;">\n        <ion-icon class="marginAuto" style="margin-right: 0" name="ios-arrow-down"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class="filterMainFilter" *ngIf="filterOpen == \'1\'" [@myAnimation]>\n      <ion-col>\n        <div class="listFilter" *ngFor="let list of province" (click)="selectFilter(\'1\',list)">\n          {{list.province_name_en}}\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="filterMain" (click)="openFilter(2)">\n      <ion-col col-2 class="displayGrid">\n        <img class="pingIcon marginAuto" style="margin-left: 0" src="./assets/icon/popularIcon.svg" alt="">\n      </ion-col>\n      <ion-col col-8 class="displayGrid">\n        <span class="marginAuto" style="margin-left: 0">{{popularText.name}}</span>\n      </ion-col>\n      <ion-col col-2 class="displayGrid" style="text-align: right;">\n        <ion-icon class="marginAuto" style="margin-right: 0" name="ios-arrow-down"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="filterMainFilter" *ngIf="filterOpen == \'2\'" [@myAnimation]>\n      <ion-col>\n        <div class="listFilter" *ngFor="let list of category" (click)="selectFilter(\'2\',list)">\n          {{list.cat_name}}\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="filterMain" (click)="filter(2)">\n      <ion-col class="displayGrid">\n        <span class="marginAuto">Explore</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="gridContent" *ngIf="popularData.length != 0">\n    <ion-row>\n      <ion-col class="detailLocation">\n        Popular Activity\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="subTitleText" style="font-weight: bold;">\n        Recommended by us\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>\n          <div class="slidePrev" (click)="slidePrev()">\n            <ion-icon name="ios-arrow-back" style="margin: auto;"></ion-icon>\n          </div>\n          <div class="slideNext" (click)="slideNext()">\n            <ion-icon name="ios-arrow-forward" style="margin: auto;"></ion-icon>\n          </div>\n          <ion-slides slidesPerView=\'1\' #slideP (click)="nextPage()" *ngIf="popularData.length != 0">\n            <ion-slide *ngFor="let images of popularData.img">\n              <div class="Imgs" style="padding-top: 60% !important;" [ngStyle]="{\'background\': \'url(\'+images.img_resize+\')\'}"></div>\n            </ion-slide>\n          </ion-slides>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row style="margin-top: 10px;" (click)="nextPage()">\n      <ion-col col-12 class="detailLocation">\n        {{popularData.packet_name}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row (click)="nextPage()">\n      <ion-col class="subTitleText">\n        {{popularData.packet_detail}}\n      </ion-col>\n    </ion-row>\n    <ion-row (click)="nextPage()">\n      <ion-col>\n        <div>\n          <img class="pingIcon" style="margin-left: 0;vertical-align: middle;" src="./assets/icon/ping-icon.svg" alt="">\n          <span style="color: #1B75BB;vertical-align: middle;" *ngIf="popularData.length != 0">{{popularData.province.province_name_en}}</span>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row (click)="nextPage()">\n      <ion-col>\n        <span *ngIf="popularData.length != 0">\n          <div *ngFor="let price of popularData.packet_price">THB {{price.price}} per {{price.price_name}}</div>\n        </span>\n        <div style="color: #8F8F8F;">\n          {{popularData.countTime}}\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <span *ngFor="let main of package">\n    <ion-grid class="gridContent" *ngIf="main.Section_Sub.length > 0">\n      <ion-row>\n        <ion-col class="titleText" style="padding-left: 15px;">\n          {{main.Section_Title}}\n        </ion-col>\n      </ion-row>\n      <ion-row class="filterMain" style="background: unset;color: #000 !important;width: 70%;position: relative;">\n        <ion-col col-2 class="displayGrid" (click)="showProvince(main)">\n          <img class="pingIcon marginAuto" style="margin-left: 0" src="./assets/icon/ping-icon.svg" alt="">\n        </ion-col>\n        <ion-col col-8 class="displayGrid" (click)="showProvince(main)">\n          <span class="marginAuto" style="margin-left: 0">Where to go?</span>\n        </ion-col>\n        <ion-col col-2 class="displayGrid" style="text-align: right;" (click)="showProvince(main)">\n          <ion-icon class="marginAuto" style="margin-right: 0" name="ios-arrow-down"></ion-icon>\n        </ion-col>\n        <div class="fameProvince" *ngIf="main.Section_ST == \'1\'" [@myAnimation]>\n          <div class="childProvince" *ngFor="let list of province" (click)="chooserProvince(main,list)">\n            {{list.province_name_en}}s\n          </div>\n        </div>\n      </ion-row>\n      <span *ngFor="let sub of main.Section_Sub;let i = index;" class="borderBottom">\n        <ion-row style="margin-top: 10px;margin-bottom: 10px;" *ngIf="sub.Sub_Package.length != 0">\n          <ion-col col-10 class="subTitleText" style="padding-left: 15px;">\n            {{sub.Sub_Title}}\n          </ion-col>\n          <ion-col col-2 class="seeAll" (click)="seeAll(sub.Sub_Package)">\n            See all\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="sub.Sub_Package.length != 0">\n          <ion-col>\n            <ion-slides slidesPerView=\'1.5\'>\n              <span *ngFor="let pack of sub.Sub_Package;">\n                <ion-slide class="slideImg" (click)="nextDetail(pack)" *ngIf="pack.st_show == \'1\'">\n                  <div class="frameHeart">\n                    <img src="./assets/icon/Icon-heart_t.svg">\n                  </div>\n                  <div class="Imgs" [ngStyle]="{\'background\': \'url(\'+pack.img[0].img_resize+\')\',\'background-size\': \'cover\',\'background-position\': \'center\'}">\n                  </div>\n                  <div class="detailFame">\n                    <div>\n                      <img class="pingIcon" style="margin-left: 0;vertical-align: middle;" src="./assets/icon/ping-icon.svg" alt="">\n                      <span style="color: #1B75BB;vertical-align: middle;">{{pack.province.province_name_en}}</span>\n                    </div>\n                    <div class="detailLocation">\n                      {{pack.packet_name}}\n                    </div>\n                    <div style="margin-top: 5px;">\n                      <span style="color: #1B75BB;">THB {{pack.package_price[0].price}}</span> per person\n                    </div>\n                    <div style="color: #8F8F8F;">\n                      {{pack.package_time}}\n                    </div>\n                    <div style="">\n                      <span style="">\n                        <i class="iconStar-star" [ngClass]="1 <= pack.package_rate.Average ? \'starActive\' : \'\'"></i>\n                        <i class="iconStar-star" [ngClass]="2 <= pack.package_rate.Average ? \'starActive\' : \'\'"></i>\n                        <i class="iconStar-star" [ngClass]="3 <= pack.package_rate.Average ? \'starActive\' : \'\'"></i>\n                        <i class="iconStar-star" [ngClass]="4 <= pack.package_rate.Average ? \'starActive\' : \'\'"></i>\n                        <i class="iconStar-star" [ngClass]="5 <= pack.package_rate.Average ? \'starActive\' : \'\'"></i>\n                        <div style="color: #000;min-width: 25px;max-width: 25px;display: inline-block;margin-left: 5px;">( {{pack.package_rate.Count}} )</div>\n                      </span>\n                    </div>\n                  </div>\n                </ion-slide>\n              </span>\n            </ion-slides>\n          </ion-col>\n          <hr style=" margin: 0; margin-top: 10px; margin-left: 10px; margin-right: 10px;height: 1px;width: 100%;" *ngIf="sub.Sub_Package.length != 0 && (main.Section_Sub.length - 1) != i">\n        </ion-row>\n      </span>\n    </ion-grid>\n  </span>\n  <div style="height: 150px;"></div>\n\n</ion-content>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/bookings/bookings.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* trigger */])('myAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* transition */])(':enter', [Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({ height: '0px', opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('200ms', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({ height: '*', 'opacity': 1 }))]),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* transition */])(':leave', [Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({ height: '*', 'opacity': 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('200ms', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* style */])({ height: '0px', 'opacity': 0 }))])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */]])
    ], BookingsPage);
    return BookingsPage;
}());

//# sourceMappingURL=bookings.js.map

/***/ })

});
//# sourceMappingURL=32.js.map