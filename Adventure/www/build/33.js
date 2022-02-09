webpackJsonp([33],{

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingdetailPageModule", function() { return BookingdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookingdetail__ = __webpack_require__(551);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookingdetailPageModule = /** @class */ (function () {
    function BookingdetailPageModule() {
    }
    BookingdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bookingdetail__["a" /* BookingdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bookingdetail__["a" /* BookingdetailPage */]),
            ],
        })
    ], BookingdetailPageModule);
    return BookingdetailPageModule;
}());

//# sourceMappingURL=bookingdetail.module.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Firebase__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_menu_right_menu_right__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BookingdetailPage = /** @class */ (function () {
    function BookingdetailPage(popoverCtrl, gd, navCtrl, navParams, serviceFactoryThread) {
        this.popoverCtrl = popoverCtrl;
        this.gd = gd;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceFactoryThread = serviceFactoryThread;
        this.ref = __WEBPACK_IMPORTED_MODULE_4_Firebase__["database"]().ref('shopComment/');
        this.getData = this.navParams.get('data');
        this.rate_review = 0;
        this.commentText = '';
        this.commentRate = 0;
        this.keyRoom = '';
        this.arrayComment = [];
        this.reviewCount = 0;
        this.sortST = 0;
        this.limitComment = 5;
        console.log(navParams.get('data'));
    }
    BookingdetailPage.prototype.goProfile = function (image) {
        this.gd.nextpage(this.navCtrl, 'ProfilePage', { 'data': image });
    };
    BookingdetailPage.prototype.presentPopover = function (myEvent) {
        __WEBPACK_IMPORTED_MODULE_5_jquery__(".share").removeClass('share');
        __WEBPACK_IMPORTED_MODULE_5_jquery__("body").addClass('rightMenu');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__components_menu_right_menu_right__["a" /* MenuRightComponent */], { navCtrl: this.navCtrl });
        popover.present({
            ev: myEvent
        });
    };
    BookingdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookingDetailNewPage');
        this.loadMap();
        this.getRate();
        this.getComment();
    };
    BookingdetailPage.prototype.scrollTopFN = function () {
        this.navCtrl.parent.select(0);
    };
    BookingdetailPage.prototype.loadMap = function () {
        console.log(this.getData.package_lat);
        console.log(this.getData.package_lng);
        var latLng = new google.maps.LatLng(this.getData.package_lat, this.getData.package_lng);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            gestureHandling: 'cooperative'
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var t = this;
        setTimeout(function () {
            // this.addMarker();
        }, 2000);
    };
    BookingdetailPage.prototype.getRate = function () {
        var _this = this;
        this.serviceFactoryThread.ServiceThread('get_rate_package', { package_id: this.getData.packet_id }, 'POST').then(function (data) {
            console.log(data);
            if (data["res_code"] == "00") {
                _this.rate_review = data["res_result"];
                _this.reviewCount = _this.rate_review.Review.length;
                _this.rate_review.Review.forEach(function (element) {
                    console.log(element);
                    var img = [];
                    if (element.image_path != null) {
                        element.image_path.split(',').forEach(function (elements) {
                            img.push(elements);
                        });
                    }
                    var datapush = {
                        comment: element.Rate_Review,
                        date: element.Review_Time,
                        dateTime: _this.timeConverter(new Date(element.Review_Time).getTime() / 1000),
                        fullname: element.user_firstname + " " + element.user_lastname,
                        image: img,
                        rate: element.Rate_Average,
                        userId: element.Rate_User_ID,
                        userUrl: element.user_path_img
                    };
                    _this.arrayComment.push(datapush);
                });
                console.log(_this.arrayComment);
                _this.arrayComment.forEach(function (element, index) {
                    var url = "";
                    if (_this.gd.likeUser.map(function (el) { return el.user_id; }).indexOf(element.userId) == '-1') {
                        var datasend = {
                            "idUser": element.userId
                        };
                        _this.serviceFactoryThread.ServiceThread("imgComment", datasend, "POST").then(function (data) {
                            if (data["res_code"] == "00") {
                                data["res_result"].forEach(function (element) {
                                    console.log(element);
                                    _this.gd.likeUser.push(element);
                                    url = element["user_photo"];
                                    _this.arrayComment[index]["userUrl"] = element["user_photo"];
                                    console.log(_this.arrayComment[index]);
                                });
                            }
                        });
                    }
                    else {
                        _this.gd.likeUser.filter(function (data) {
                            if (data.user_id === element.userId) {
                                url = data.user_photo;
                                _this.arrayComment[index]["userUrl"] = data.user_photo;
                            }
                        });
                    }
                });
            }
        });
    };
    BookingdetailPage.prototype.sendRate = function (score) {
        if (this.commentRate == score) {
            this.commentRate = 0;
        }
        else {
            this.commentRate = score;
        }
    };
    BookingdetailPage.prototype.saveComment = function () {
        console.log();
        var newData = __WEBPACK_IMPORTED_MODULE_4_Firebase__["database"]().ref('shopComment/' + this.getData.package_room_key + '/comment/').push();
        var datasend = {
            fullname: this.gd.userProfile['user_firstname'] + " " + this.gd.userProfile['user_lastname'],
            userId: this.gd.userProfile['user_id'],
            // fullname: 'Amnart Ratchakom',
            // userId: '55',
            comment: this.commentText,
            rate: this.commentRate,
            date: __WEBPACK_IMPORTED_MODULE_4_Firebase__["database"].ServerValue.TIMESTAMP,
            status: '0'
        };
        newData.set(datasend);
    };
    BookingdetailPage.prototype.getComment = function () {
        // firebase.database().ref('shopComment/' + this.getData.package_room_key + '/comment').off();
        // firebase.database().ref('shopComment/' + this.getData.package_room_key + '/comment').on('value', resp => {
        //   this.snap(resp).then(data => {
        //     console.log(data);
        //     let result:any = [];
        //     result = data;
        //     let countComment = result.filter((item) => {
        //       return item.status != 1;
        //     });
        //     this.reviewCount = countComment.length;
        //     countComment.forEach(element => {
        //       element.dateTime = this.timeConverter(element.date);
        //     });
        //     this.arrayComment = data;
        //     this.arrayComment.forEach((element, index) => {
        //       let url = ""; 
        //       if (this.gd.likeUser.map((el) => el.user_id).indexOf(element.userId) == '-1') {
        //         let datasend = {
        //           "idUser": element.userId
        //         }
        //         this.serviceFactoryThread.ServiceThread("imgComment", datasend, "POST").then(data => {
        //           data["res_result"].forEach(element => {
        //             this.gd.likeUser.push(element);
        //             url = element["user_photo"];
        //             this.arrayComment[index]["userUrl"] = element["user_photo"];
        //           });
        //         })
        //       } else {
        //         this.gd.likeUser.filter(data => {
        //           if (data.user_id === element.userId) {
        //             url = data.user_photo;
        //             this.arrayComment[index]["userUrl"] = data.user_photo;
        //           }
        //         });
        //       }
        //     });
        //   });
        // })
    };
    BookingdetailPage.prototype.snap = function (data) {
        return new Promise(function (resolve) {
            var returnArr = [];
            data.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                item.key = childSnapshot.key;
                returnArr.push(item);
            });
            resolve(returnArr);
            // return returnArr;
        });
    };
    BookingdetailPage.prototype.timeConverter = function (UNIX_timestamp) {
        var a = new Date(UNIX_timestamp);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    };
    BookingdetailPage.prototype.swiftSort = function (id) {
        if (this.sortST == id) {
            this.sortST = 0;
        }
        else {
            this.sortST = 1;
        }
    };
    BookingdetailPage.prototype.slidePrev = function () {
        this.slides.slidePrev();
    };
    BookingdetailPage.prototype.slideNext = function () {
        this.slides.slideNext();
    };
    BookingdetailPage.prototype.goChat = function () {
        var _this = this;
        var datas = this.getData.user[0];
        if (this.gd.clickGo) {
            this.gd.clickGo = false;
            this.serviceFactoryThread.ServiceThread('check_room', { 'user_id': this.gd.userProfile['user_id'], 'user_to': datas['user_id'] }, 'POST')
                .then(function (data) {
                console.log(data);
                if (data['res_code'] == '00') {
                    var dataroom = _this.gd.roomchat.filter(function (message) { return message.room_name === data['res_result']; });
                    _this.gd.nextpage(_this.navCtrl, "ChatPage", { 'key': data['res_result'], 'imguser': datas['user_path_img'], 'data': dataroom[0] });
                }
                else {
                    var newData_1 = _this.ref.push();
                    newData_1.set({
                        roomname: _this.gd.userProfile['user_id'] + '/' + datas['user_id']
                    });
                    var senddata = {
                        'key': newData_1.key,
                        'to_user': datas['user_id']
                    };
                    _this.serviceFactoryThread.ServiceThread('addroom', senddata, 'POST')
                        .then(function (data) {
                        _this.gd.chat().then(function () {
                            datas['room_name'] = newData_1.key;
                            _this.gd.chat();
                            _this.gd.nextpage(_this.navCtrl, "ChatPage", { 'key': newData_1.key, 'imguser': datas['user_path_img'], 'data': datas });
                        });
                        // // console.log(datas);
                    });
                }
            });
        }
    };
    ;
    BookingdetailPage.prototype.booking = function () {
        this.gd.nextpage(this.navCtrl, 'PaymentPage', { data: this.getData });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slideP'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], BookingdetailPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], BookingdetailPage.prototype, "mapElement", void 0);
    BookingdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookingdetail',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/bookingdetail/bookingdetail.html"*/'<ion-header>\n  <ion-navbar>\n    <!-- <ion-buttons start style="order: 0;" (click)="scrollTopFN()">\n      <button ion-button icon-only style="" class="">\n        <img style="position: relative;width: 20px;" src="./assets/icon/logotree.svg" alt="">\n      </button>\n      <button ion-button icon-only style="" class="">\n        <div style="position: relative;color: #000;font-weight: bold;font-size: 14px;">Adventure Earth</div>\n      </button>\n    </ion-buttons> -->\n    <ion-buttons end>\n      <button ion-button icon-only style="" class="" (click)="goProfile(gd.userProfile)">\n        <img style="position: relative !important;;margin-right: 10px !important;;height: 30px !important;;width: 30px !important;;"\n          id="img_profile" class="imgpro" [src]="gd.userProfile.user_path_img" />\n      </button>\n      <button ion-button icon-only style="" class="" (click)="presentPopover($event)">\n        <img style="position: relative;margin-right: 10px;" src="./assets/icon/menu-icon.svg" alt="">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background: #F8F8F8;">\n  <!-- <img src="http://www.myadventureearth.com/data/data_photos/1013/img_resize/1544259800.2018-12-08-16-03-2035527.jpg" alt=""> -->\n  <ion-grid style="padding: 0;    background: transparent;">\n    <ion-row style="    background: #fff;">\n      <ion-col>\n        <div>\n          <div class="slidePrev" (click)="slidePrev()">\n            <ion-icon name="ios-arrow-back" style="margin: auto;"></ion-icon>\n          </div>\n          <div class="slideNext" (click)="slideNext()">\n            <ion-icon name="ios-arrow-forward" style="margin: auto;"></ion-icon>\n          </div>\n          <ion-slides slidesPerView=\'1\' #slideP *ngIf="getData.length != 0">\n            <ion-slide *ngFor="let images of getData.img">\n              <div class="Imgs" [ngStyle]="{\'background\': \'url(\'+images.img_resize+\')\'}"></div>\n            </ion-slide>\n          </ion-slides>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style="font-size: 17px;">\n        {{getData.packet_name}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <img class="pingIcon" style="margin-left: 0;vertical-align: middle;" src="./assets/icon/ping-icon.svg" alt="">\n        <span *ngIf="getData.length != 0" style="color: #1B75BB;vertical-align: middle;">{{getData.province.province_name_en}}</span>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-col>\n\n      </ion-col>\n    </ion-row> -->\n    <ion-row style="background: #F2EEF2;margin: 0 -5px;margin-bottom: 10px;">\n      <ion-col col-2 style="display: inline-flex;">\n        <img *ngIf="getData.length != 0" style="margin-right: 10px;height: 50px;width: 50px;margin: auto;" [src]="getData.user.user_path_img"\n          id="img_profile" class="imgpro" />\n      </ion-col>\n      <ion-col col-6 style="display: inline-flex;" (click)="goProfile(getData.user)">\n        <span style="margin: auto;margin-left: 0;">\n          <div>Experience by</div>\n          <div *ngIf="getData.length != 0" style="color: #1B75BB;">{{getData.user.user_firstname}} {{getData.user.user_lastname}}\n          </div>\n        </span>\n      </ion-col>\n      <ion-col col-4 style="display: inline-flex;">\n        <div style="margin: auto;" (click)="goChat()" *ngIf="gd.userProfile.user_id != getData.user.user_id">\n          <img src="./assets/icon/iconMessage.svg" class="" alt="" style="vertical-align: middle;width: 20px;">\n          <span style="color: #1B75BB;vertical-align: middle;">Message</span>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row style="text-align: center;" style="text-align: center;border: 1px solid #A6ADB4;color: #A6ADB4;    margin: 5px;\n    margin-left: 15px; margin-right: 15px;padding-top: 10px;padding-bottom: 10px;">\n      <ion-col col-4>\n        <img src="./assets/icon/icon-clock.svg" class="" alt="" style="vertical-align: middle;width: 20px;">\n        <div>Starting time</div>\n        <div *ngIf="getData.length != 0">{{getData.timeable[0].timeable_time}}</div>\n      </ion-col>\n      <ion-col col-4>\n        <img src="./assets/icon/icon-sand.svg" class="" alt="" style="vertical-align: middle;width: 20px;">\n        <div>Duration</div>\n        <div>{{getData.package_time}}</div>\n      </ion-col>\n      <ion-col col-4>\n        <img src="./assets/icon/icon-peple.svg" class="" alt="" style="vertical-align: middle;width: 20px;">\n        <div *ngIf="getData.tour_private == 1">Private</div>\n        <div *ngIf="getData.tour_private == 0">Public</div>\n        <div>{{getData.package_qly}}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row style="background: #fff;margin-top: 10px;border-top: 1px solid #e6e6e6;">\n      <ion-col style="padding-top: 15px;font-weight: bold;font-size: 16px;">\n        Detail\n      </ion-col>\n    </ion-row>\n    <ion-row style="color: #8F8F8F;font-size: 16px;background: #fff;">\n      <ion-col style="padding-left: 15px;">\n        {{getData.packet_detail}}\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-col>\n\n      </ion-col>\n    </ion-row> -->\n    <ion-row style="    background: #fff;">\n      <ion-col style="padding-top: 15px;font-weight: bold;font-size: 16px;">\n        Scheddute\n      </ion-col>\n    </ion-row>\n    <ion-row style="font-size: 16px;    background: #fff;">\n      <ion-col style="padding-left: 15px;">\n        <span *ngFor="let Scheddute of getData.timeable">\n          <div>{{Scheddute.timeable_time}}</div>\n          <div style="color: #8F8F8F;margin-bottom: 15px;">{{Scheddute.timeable_activity}}</div>\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row style="    margin-top: 15px;">\n      <ion-col>\n        <img class="pingIcon" style="margin-left: 0;vertical-align: middle;" src="./assets/icon/ping-icon.svg" alt="">\n        <span style="vertical-align: middle;font-weight: bold;">Experience Location</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div #map id="map"></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid style="background: #fff;margin-top: 15px;">\n    <ion-row>\n      <ion-col style="color: #7A7A7A;font-size: 16px;">\n\n        <div style="font-weight: bold;">\n          <span style="float: right;">\n            <i class="iconStar-star" [ngClass]="1 <= rate_review.Average ? \'starActive\' : \'\'"></i>\n            <i class="iconStar-star" [ngClass]="2 <= rate_review.Average ? \'starActive\' : \'\'"></i>\n            <i class="iconStar-star" [ngClass]="3 <= rate_review.Average ? \'starActive\' : \'\'"></i>\n            <i class="iconStar-star" [ngClass]="4 <= rate_review.Average ? \'starActive\' : \'\'"></i>\n            <i class="iconStar-star" [ngClass]="5 <= rate_review.Average ? \'starActive\' : \'\'"></i>\n            <div style="color: #000;min-width: 25px;max-width: 25px;display: inline-block;margin-left: 5px;">\n              {{rate_review.Average}}</div>\n          </span>\n          <span>\n            <span style="color: #000;">Reviews</span> ({{reviewCount}})\n          </span>\n        </div>\n        <!-- <div style="margin-top: 15px;">\n          Friendliness\n          <span style="float: right;">\n            <i class="iconStar-star" [ngClass]="1 <= rate_review.Friendly ? \'starActive\' : \'\'"></i>\n            <i class="iconStar-star" [ngClass]="2 <= rate_review.Friendly ? \'starActive\' : \'\'"></i>\n            <i class="iconStar-star" [ngClass]="3 <= rate_review.Friendly ? \'starActive\' : \'\'"></i>\n            <i class="iconStar-star" [ngClass]="4 <= rate_review.Friendly ? \'starActive\' : \'\'"></i>\n            <i class="iconStar-star" [ngClass]="5 <= rate_review.Friendly ? \'starActive\' : \'\'"></i>\n            <div style="color: #000;min-width: 25px;max-width: 25px;display: inline-block;margin-left: 5px;">{{rate_review.Friendly}}</div>\n          </span>\n        </div>\n        <div style="margin-top: 10px;">\n          Area Expert\n          <span style="float: right;">\n            <i class="iconStar-star" [ngClass]="1 <= rate_review.Area ? \'starActive\' : \'\'"></i>\n            <i class="iconStar-star" [ngClass]="2 <= rate_review.Area ? \'starActive\' : \'\'"></i>\n            <i class="iconStar-star" [ngClass]="3 <= rate_review.Area ? \'starActive\' : \'\'"></i>\n            <i class="iconStar-star" [ngClass]="4 <= rate_review.Area ? \'starActive\' : \'\'"></i>\n            <i class="iconStar-star" [ngClass]="5 <= rate_review.Area ? \'starActive\' : \'\'"></i>\n            <div style="color: #000;min-width: 25px;max-width: 25px;display: inline-block;margin-left: 5px;">{{rate_review.Area}}</div>\n          </span>\n        </div>\n        <div style="margin-top: 10px;">\n          Language Proficiency\n          <span style="float: right;">\n            <i class="iconStar-star" [ngClass]="1 <= rate_review.Language ? \'starActive\' : \'\'"></i>\n            <i class="iconStar-star" [ngClass]="2 <= rate_review.Language ? \'starActive\' : \'\'"></i>\n            <i class="iconStar-star" [ngClass]="3 <= rate_review.Language ? \'starActive\' : \'\'"></i>\n            <i class="iconStar-star" [ngClass]="4 <= rate_review.Language ? \'starActive\' : \'\'"></i>\n            <i class="iconStar-star" [ngClass]="5 <= rate_review.Language ? \'starActive\' : \'\'"></i>\n            <div style="color: #000;min-width: 25px;max-width: 25px;display: inline-block;margin-left: 5px;">{{rate_review.Language}}</div>\n          </span>\n        </div> -->\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div style="border: 1px solid #c1c1c1;border-radius: 5px;padding: 10px;color: #6f6f6f;margin-top: 20px;" (click)="swiftSort(1)">\n          <span>Sort : Most Recent</span>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style="border-bottom: 1px solid #c1c1c1;margin-bottom: 10px;">\n        <div style="border: 1px solid #c1c1c1;border-radius: 5px;padding: 10px;color: #6f6f6f;margin-bottom: 10px;" *ngIf="sortST == \'1\'"\n          [@myAnimation]>\n          <div style="margin-bottom: 10px;">Sort : Most Recent</div>\n          <div>Sort : Most Recent</div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-col>\n        <div style="margin-bottom: 10px;">Comment</div>\n        <div style="margin-bottom: 10px;font-size: 20px;">\n          <i class="iconStar-star" [ngClass]="1 <= commentRate ? \'starActive\' : \'\'" (click)="sendRate(1)"></i>\n          <i class="iconStar-star" [ngClass]="2 <= commentRate ? \'starActive\' : \'\'" (click)="sendRate(2)"></i>\n          <i class="iconStar-star" [ngClass]="3 <= commentRate ? \'starActive\' : \'\'" (click)="sendRate(3)"></i>\n          <i class="iconStar-star" [ngClass]="4 <= commentRate ? \'starActive\' : \'\'" (click)="sendRate(4)"></i>\n          <i class="iconStar-star" [ngClass]="5 <= commentRate ? \'starActive\' : \'\'" (click)="sendRate(5)"></i>\n        </div>\n        <div style="margin-bottom: 10px;">\n          <div style="background: #fff;border: 1px solid #c1c1c1;border-radius: 8px;padding: 5px 10px;">\n            <textarea style="width:100%;resize: none;min-height: 40px;border: none;margin: 0px !important;" placeholder="Comment..."\n              [(ngModel)]="commentText" autocomplete="on" autocorrect="on"></textarea>\n          </div>\n        </div>\n        <button ion-button full (click)="saveComment()">Save Comment</button>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row *ngFor="let comment of arrayComment">\n      <ion-col>\n        <div>\n          <img style="vertical-align: top;margin-right: 10px;height: 50px;width: 50px;margin: auto;" [src]="comment.userUrl" id="img_profile"\n            class="imgpro" />\n          <div style="display: inline-block;vertical-align: middle;">\n            <p>{{comment.fullname}}</p>\n            <p class="textcemment">{{comment.dateTime}}</p>\n            <p>\n              <i class="iconStar-star" [ngClass]="1 <= comment.rate ? \'starActive\' : \'\'"></i>\n              <i class="iconStar-star" [ngClass]="2 <= comment.rate ? \'starActive\' : \'\'"></i>\n              <i class="iconStar-star" [ngClass]="3 <= comment.rate ? \'starActive\' : \'\'"></i>\n              <i class="iconStar-star" [ngClass]="4 <= comment.rate ? \'starActive\' : \'\'"></i>\n              <i class="iconStar-star" [ngClass]="5 <= comment.rate ? \'starActive\' : \'\'"></i>\n            </p>\n          </div>\n          <div></div>\n        </div>\n        <div class="textcemment">{{comment.comment}}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="reviewCount > limitComment">\n      <ion-col class="textcenter seeMore">\n        See all reviews\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div style="height: 150px;"></div>\n\n\n\n</ion-content>\n<ion-footer style="bottom: 84px;background: #fff;box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-7>\n        <div>\n          <div>\n            <span style="color: #16B53A;">THB {{getData.package_price[0].price}} </span>\n            <span style="color: #8F8F8F;">/ person</span>\n          </div>\n          <div style="color: #8F8F8F;"> 100% Satisfaction guaranteed</div>\n        </div>\n      </ion-col>\n      <ion-col col-5>\n        <button ion-button full style="background-color: #16B53A;" (click)="booking()">Book</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/bookingdetail/bookingdetail.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* trigger */])('myAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':enter', [Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ height: '0px', opacity: 0, padding: '0px', margin: '0px 0px 0px 0px' }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('200ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ height: '*', 'opacity': 1, padding: '10px', margin: '0px 0px 10px 0px' }))]),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':leave', [Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ height: '*', 'opacity': 1, padding: '10px', margin: '0px 0px 10px 0px' }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('200ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ height: '0px', 'opacity': 0, padding: '0px', margin: '0px 0px 0px 0px' }))])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */]])
    ], BookingdetailPage);
    return BookingdetailPage;
}());

//# sourceMappingURL=bookingdetail.js.map

/***/ })

});
//# sourceMappingURL=33.js.map