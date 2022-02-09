webpackJsonp([23],{

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyticketPageModule", function() { return MyticketPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myticket__ = __webpack_require__(565);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyticketPageModule = /** @class */ (function () {
    function MyticketPageModule() {
    }
    MyticketPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myticket__["a" /* MyticketPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myticket__["a" /* MyticketPage */]),
            ],
        })
    ], MyticketPageModule);
    return MyticketPageModule;
}());

//# sourceMappingURL=myticket.module.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyticketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__ = __webpack_require__(64);
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
 * Generated class for the MyticketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyticketPage = /** @class */ (function () {
    function MyticketPage(popoverCtrl, modalCtrl, serviceFactoryThread, gd, navCtrl, navParams) {
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.serviceFactoryThread = serviceFactoryThread;
        this.gd = gd;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postEvent = [];
        this.incommentEvent = [];
        this.lastestEvent = [];
        this.monthLista = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.status = false;
        this.linit_last = 1;
        this.limit_incoming = 1;
        this.limit_post = 1;
        this.datadype = this.navParams.get('data');
        this.dataRes = [];
        this.getData('');
    }
    MyticketPage.prototype.gobooking = function () {
        this.navCtrl.popToRoot();
    };
    MyticketPage.prototype.goProfile = function (image) {
        this.gd.nextpage(this.navCtrl, 'ProfilePage', { 'data': image });
    };
    MyticketPage.prototype.presentPopover = function (myEvent) {
        __WEBPACK_IMPORTED_MODULE_5_jquery__(".share").removeClass('share');
        __WEBPACK_IMPORTED_MODULE_5_jquery__("body").addClass('rightMenu');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_menu_right_menu_right__["a" /* MenuRightComponent */], { navCtrl: this.navCtrl });
        popover.present({
            ev: myEvent
        });
    };
    MyticketPage.prototype.getData = function (refresher) {
        var _this = this;
        // this.serviceFactoryThread.ServiceThread("get_booking", { 'user_id': this.gd.userProfile.user_id }, "post").then(data => {
        this.serviceFactoryThread.ServiceThread("get_booking", { 'user_id': '55' }, "post").then(function (data) {
            console.log(data);
            if (data["res_code"] == '00') {
                _this.postEvent = [];
                _this.incommentEvent = [];
                _this.lastestEvent = [];
                var index = 0;
                _this.dataRes = data["res_result"];
                // data["res_result"].forEach(element => {
                //   element.month = this.monthLista[new Date(element.booking_date).getMonth()];
                //   element.day = new Date(element.booking_date).getDate();
                //   element.year = new Date(element.booking_date).getFullYear();
                //   if (index == 0 && new Date(element.booking_date) >= new Date()) {
                //     this.lastestEvent.push(element);
                //   } else if (new Date(element.booking_date) >= new Date()) {
                //     this.incommentEvent.push(element);
                //   } else {
                //     this.postEvent.push(element);
                //   }
                //   index++;
                // });
                if (_this.datadype == 'status') {
                    var datasend = {
                        'booking_code': data["res_result"][0].booking_code_order,
                        'lat': _this.serviceFactoryThread.userlocation.lat,
                        'lng': _this.serviceFactoryThread.userlocation.long,
                        'widthPhone': __WEBPACK_IMPORTED_MODULE_5_jquery__('ng-component').width()
                    };
                    _this.serviceFactoryThread.ServiceThread("get_booking_detail", datasend, "POST").then(function (data) {
                        _this.gd.nextpage(_this.navCtrl, "PaymentStatusPage", { 'data': data['res_result'] });
                    });
                }
                if (_this.status) {
                    setTimeout(function () {
                        refresher.complete();
                    }, 500);
                }
            }
        });
    };
    MyticketPage.prototype.doRefresh = function (refresher) {
        this.getData(refresher);
        this.status = true;
    };
    MyticketPage.prototype.seeMore = function (data) {
        if (data == 1) {
            this.linit_last = 50;
        }
        else if (data == 2) {
            this.limit_incoming = 50;
        }
        else if (data == 3) {
            this.limit_post = 50;
        }
    };
    MyticketPage.prototype.seeless = function (data) {
        if (data == 1) {
            this.linit_last = 1;
        }
        else if (data == 2) {
            this.limit_incoming = 1;
        }
        else if (data == 3) {
            this.limit_post = 1;
        }
    };
    // nextPaged(dataget) {
    //   let datasend = {
    //     'booking_code': dataget.booking_code_order,
    //     'lat': this.gd.userlocation.lat,
    //     'lng': this.gd.userlocation.long,
    //     'widthPhone': $('ng-component').width()
    //   }
    //   this.serviceFactoryThread.ServiceThread("get_booking_detail", datasend, "POST").then(data => {
    //     // this.gd.nextpage(this.navCtrl, "PaymentStatusPage", { 'data': data['res_result'] });
    //   });
    // }
    MyticketPage.prototype.nextPage = function (data) {
        console.log(data);
        if (data.booking_status == 1) {
            this.gd.nextpage(this.navCtrl, 'TicketPage', { data: data });
        }
    };
    MyticketPage.prototype.review = function (data) {
        var modalbirthday = this.modalCtrl.create('ReviewPage', { data: data });
        modalbirthday.onDidDismiss(function (data) {
            console.log(data);
        });
        modalbirthday.present();
    };
    MyticketPage.prototype.scrollTopFN = function () {
        this.navCtrl.parent.select(0);
    };
    MyticketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myticket',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/myticket/myticket.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start style="order: 0;" (click)="scrollTopFN()">\n      <!-- <button ion-button icon-only style="" class="">\n        <img style="position: relative;width: 20px;" src="./assets/icon/logotree.svg" alt="">\n      </button> -->\n      <button ion-button icon-only style="" class="">\n        <div style="position: relative;color: #000;font-weight: bold;font-size: 14px;">Booking</div>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only style="" class="" (click)="goProfile(gd.userProfile)">\n        <img\n          style="position: relative !important;;margin-right: 10px !important;;height: 30px !important;;width: 30px !important;;"\n          id="img_profile" class="imgpro" [src]="gd.userProfile.user_path_img" />\n      </button>\n      <button ion-button icon-only style="" class="" (click)="presentPopover($event)">\n        <img style="position: relative;margin-right: 10px;" src="./assets/icon/menu-icon.svg" alt="">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="Museo">\n  <ion-refresher (ionRefresh)="doRefresh($event)" pullMax="1000">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- <span *ngIf="lastestEvent.length > 0">\n\n    <div class="titlePage" (click)="seeMore(1)" *ngIf="linit_last == 1">\n      <span style="color: #000;">Lastest Payment</span>\n      <span class="seeAll" (click)="seeMore(1)" >\n        <ion-icon name="arrow-down"></ion-icon>\n      </span>\n    </div>\n\n    <div class="titlePage" (click)="seeless(1)" *ngIf="linit_last != 1">\n      <span style="color: #000;">Lastest Payment</span>\n      <span class="seeAll" (click)="seeless(1)" >\n        <ion-icon name="arrow-up"></ion-icon>\n      </span>\n    </div>\n    \n    <ion-card class="cardMain" *ngFor="let data of lastestEvent | slice:0:linit_last;" (click)="nextPaged(data)">\n      <ion-card-content class="Museo cardContent">\n        <ion-grid class="nopadding">\n          <ion-row>\n            <ion-col col-3 class="nopadding leftcard">\n              <p>{{data.month}}</p>\n              <p>{{data.day}}</p>\n              <p>{{data.year}}</p>\n            </ion-col>\n            <ion-col col-9>\n              <p class="contentTitle">{{data.booking_name}}</p>\n              <p class="contntDistant">{{data.booking_category}}</p>\n              <div style="text-align: left;">\n                  <div class="borderimgage inlineBlog" style="vertical-align: middle;">\n                      <img class="imgpro" id="img_profile" [src]="data.booking_shop.user_path_img" />\n                    </div>\n    \n                  <div class="inlineBlog">\n                      <div class="nameStore" style="vertical-align: middle;">\n                        <span [innerHTML]="data.booking_shop.user_firstname"></span>\n                        <span> </span>\n                        <span [innerHTML]="data.booking_shop.user_lastname"></span>\n                      </div>\n                    </div>\n              </div>\n   \n              <div style="text-align: left;">\n                <span class="tagText">Tag : </span>\n                <div style="text-align: left;display: inline-block;">\n                  <div class="container" *ngFor="let tag of data.booking_tag">\n                    <a class="button_border">\n                      <span>{{tag.tag_name}}</span>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </span>\n\n  <span *ngIf="incommentEvent.length > 0">\n      <div class="titlePage" (click)="seeMore(2)" *ngIf="limit_incoming == 1">\n          <span style="color: #000;">Event incoming</span>\n          <span class="seeAll">\n            <ion-icon name="arrow-down"></ion-icon>\n          </span>\n        </div>\n    \n        <div class="titlePage" (click)="seeless(2)" *ngIf="limit_incoming != 1">\n          <span style="color: #000;">Event incoming</span>\n          <span class="seeAll">\n            <ion-icon name="arrow-up"></ion-icon>\n          </span>\n        </div>\n        \n        <ion-card class="cardMain" *ngFor="let data of incommentEvent | slice:0:limit_incoming;" (click)="nextPaged(data)">\n          <ion-card-content class="Museo cardContent">\n            <ion-grid class="nopadding">\n              <ion-row>\n                <ion-col col-3 class="nopadding leftcard">\n                  <p>{{data.month}}</p>\n                  <p>{{data.day}}</p>\n                  <p>{{data.year}}</p>\n                </ion-col>\n                <ion-col col-9>\n                  <p class="contentTitle">{{data.booking_name}}</p>\n                  <p class="contntDistant">{{data.booking_category}}</p>\n                  <div style="text-align: left;">\n                      <div class="borderimgage inlineBlog" style="vertical-align: middle;">\n                          <img class="imgpro" id="img_profile" [src]="data.booking_shop.user_path_img" />\n                        </div>\n        \n                      <div class="inlineBlog">\n                          <div class="nameStore" style="vertical-align: middle;">\n                            <span [innerHTML]="data.booking_shop.user_firstname"></span>\n                            <span> </span>\n                            <span [innerHTML]="data.booking_shop.user_lastname"></span>\n                          </div>\n                        </div>\n                  </div>\n       \n                  <div style="text-align: left;">\n                    <span class="tagText">Tag : </span>\n                    <div style="text-align: left;display: inline-block;">\n                      <div class="container" *ngFor="let tag of data.booking_tag">\n                        <a class="button_border">\n                          <span>{{tag.tag_name}}</span>\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n    \n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n  </span>\n\n  <span *ngIf="postEvent.length > 0">\n      <div class="titlePage" (click)="seeMore(3)" *ngIf="limit_post == 1">\n          <span style="color: #000;">Post Event</span>\n          <span class="seeAll">\n            <ion-icon name="arrow-down"></ion-icon>\n          </span>\n        </div>\n    \n        <div class="titlePage" (click)="seeless(3)" *ngIf="limit_post != 1">\n          <span style="color: #000;">Post Event</span>\n          <span class="seeAll">\n            <ion-icon name="arrow-up"></ion-icon>\n          </span>\n        </div>\n        \n        <ion-card class="cardMain" *ngFor="let data of postEvent | slice:0:limit_post;" (click)="nextPaged(data)">\n          <ion-card-content class="Museo cardContent">\n            <ion-grid class="nopadding">\n              <ion-row>\n                <ion-col col-3 class="nopadding leftcard">\n                  <p>{{data.month}}</p>\n                  <p>{{data.day}}</p>\n                  <p>{{data.year}}</p>\n                </ion-col>\n                <ion-col col-9>\n                  <p class="contentTitle">{{data.booking_name}}</p>\n                  <p class="contntDistant">{{data.booking_category}}</p>\n                  <div style="text-align: left;">\n                      <div class="borderimgage inlineBlog" style="vertical-align: middle;">\n                          <img class="imgpro" id="img_profile" [src]="data.booking_shop.user_path_img" />\n                        </div>\n        \n                      <div class="inlineBlog">\n                          <div class="nameStore" style="vertical-align: middle;">\n                            <span [innerHTML]="data.booking_shop.user_firstname"></span>\n                            <span> </span>\n                            <span [innerHTML]="data.booking_shop.user_lastname"></span>\n                          </div>\n                        </div>\n                  </div>\n                  <div style="text-align: left;">\n                    <span class="tagText">Tag : </span>\n                    <div style="text-align: left;display: inline-block;">\n                      <div class="container" *ngFor="let tag of data.booking_tag">\n                        <a class="button_border">\n                          <span>{{tag.tag_name}}</span>\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n  </span> -->\n\n  <ion-card style="margin: 0px;width: 100%;margin-bottom: 10px;" *ngFor="let data of dataRes">\n    <ion-card-content style="padding: 0;font-size: 13px;">\n      <ion-grid style="padding: 0;">\n        <ion-row>\n          <ion-col col-4 (click)="nextPage(data)">\n            <!-- <div style="background: url(\'http://www.myadventureearth.com/data/data_photos/1000/img_base64/1544235820.2018-12-08-09-23-4031840.jpg\');width: 100%;padding-top: 100%;background-position: center;background-size: cover">\n            </div> -->\n            <div [ngStyle]="{\'background\': \'url(\'+data.img[0].img_resize+\')\'}" class="imgTicket"></div>\n          </ion-col>\n          <ion-col col-8 style="text-align: left;">\n            <div (click)="nextPage(data)">\n              {{data.packet_name}}\n            </div>\n            <div>\n              <span>Status</span>\n              <span *ngIf="data.booking_status == 0" style="color: #007cff">Waiting for payment</span>\n              <span *ngIf="data.booking_status == 1" style="color: #019830">Payment success</span>\n              <span *ngIf="data.booking_status == 2" style="color: #ff0000">Payment fail</span>\n              <span *ngIf="data.booking_status == 3" style="color: #007cff">Pending payment verification</span>\n            </div>\n            <div *ngIf="data.package_rate.Average != 0">\n              <span>\n                <i class="iconStar-star" [ngClass]="1 <= data.package_rate.Average ? \'starActive\' : \'\'"></i>\n                <i class="iconStar-star" [ngClass]="2 <= data.package_rate.Average ? \'starActive\' : \'\'"></i>\n                <i class="iconStar-star" [ngClass]="3 <= data.package_rate.Average ? \'starActive\' : \'\'"></i>\n                <i class="iconStar-star" [ngClass]="4 <= data.package_rate.Average ? \'starActive\' : \'\'"></i>\n                <i class="iconStar-star" [ngClass]="5 <= data.package_rate.Average ? \'starActive\' : \'\'"></i>\n                <span> Reviewed</span>\n              </span>\n            </div>\n            <div *ngIf="data.package_rate.Average == 0" style="color: #007cff" (click)="review(data)">Reviewing</div>\n            <div>{{data.booking_date}}</div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n\n</ion-content>\n<div id="footer" style="z-index: 100;"></div>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/myticket/myticket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */], __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MyticketPage);
    return MyticketPage;
}());

//# sourceMappingURL=myticket.js.map

/***/ })

});
//# sourceMappingURL=23.js.map