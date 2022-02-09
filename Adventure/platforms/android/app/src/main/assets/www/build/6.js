webpackJsonp([6],{

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketPageModule", function() { return TicketPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticket__ = __webpack_require__(583);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TicketPageModule = /** @class */ (function () {
    function TicketPageModule() {
    }
    TicketPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ticket__["a" /* TicketPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ticket__["a" /* TicketPage */]),
            ],
        })
    ], TicketPageModule);
    return TicketPageModule;
}());

//# sourceMappingURL=ticket.module.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Firebase__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_menu_right_menu_right__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TicketPage = /** @class */ (function () {
    function TicketPage(popoverCtrl, modalCtrl, platform, iab, geolocation, actionSheetCtrl, serviceFactoryThread, gd, navCtrl, navParams) {
        var _this = this;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.iab = iab;
        this.geolocation = geolocation;
        this.actionSheetCtrl = actionSheetCtrl;
        this.serviceFactoryThread = serviceFactoryThread;
        this.gd = gd;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.dataget = this.navParams.get('data');
        this.datashow = this.navParams.get('data');
        this.location = [];
        this.image = ['http://www.myadventureearth.com/data/data_photos/1005/img_base64/1544258094.2018-12-08-15-34-5415122.jpg'];
        this.image_base64 = [];
        this.image2 = '';
        this.dateStart = '';
        this.meeting = [];
        this.secment = false;
        this.ref = __WEBPACK_IMPORTED_MODULE_6_Firebase__["database"]().ref('chatrooms/');
        this.guests = [];
        setTimeout(function () {
            new QRCode(document.getElementById("qrcodeFrame"), _this.dataget.booking_code_order);
            _this.meeting = _this.dataget.packet_meeting.filter(function (word) { return word.id_meet == _this.dataget.booking_Meeting_ID; })[0];
            console.log(_this.meeting);
            // let parts = this.dataget.packet_start.split('-');
            // let mydate = new Date(parseInt(parts[0]) , parseInt(parts[1]) - 1, parseInt(parts[2]));
            // let day = mydate.getDate();
            // let monthIndex = mydate.getMonth();
            // let year = mydate.getFullYear();
            // this.dateStart = this.mlist[monthIndex] + ' ' + day + ', ' + year;
            var guestArray = _this.dataget.Booking_Guest.split(',');
            console.log(guestArray);
            guestArray.forEach(function (element) {
                console.log(element);
                var split = element.trim().split(' ');
                var filter = _this.dataget.package_price.filter(function (message) { return message.price_name === split[0]; })[0];
                console.log(split, filter, _this.dataget);
                var dataG = {
                    text: element + ' X ' + filter.price,
                    price: 'THB ' + (parseInt(filter.price) * parseInt(split[1])),
                };
                _this.guests.push(dataG);
            });
            console.log(_this.guests);
        }, 200);
    }
    TicketPage.prototype.goProfile = function (image) {
        this.gd.nextpage(this.navCtrl, 'ProfilePage', { 'data': image });
    };
    TicketPage.prototype.presentPopover = function (myEvent) {
        __WEBPACK_IMPORTED_MODULE_8_jquery__(".share").removeClass('share');
        __WEBPACK_IMPORTED_MODULE_8_jquery__("body").addClass('rightMenu');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__components_menu_right_menu_right__["a" /* MenuRightComponent */], { navCtrl: this.navCtrl });
        popover.present({
            ev: myEvent
        });
    };
    TicketPage.prototype.ionViewDidLoad = function () {
        console.log(this.dataget);
    };
    TicketPage.prototype.imageTo = function () {
        var modalbirthday = this.modalCtrl.create('SaveImagePage', { data: this.dataget, meeting: this.meeting });
        modalbirthday.onDidDismiss(function (data) {
            console.log(data);
        });
        modalbirthday.present();
    };
    TicketPage.prototype.nextPage = function () {
        this.datashow.type_page = 'detail';
        this.gd.nextpage(this.navCtrl, "BookingdetailPage", { 'data': this.datashow });
    };
    TicketPage.prototype.loadmap = function () {
        var _this = this;
        this.location.name = this.dataget['packet_meeting'];
        this.location.latitude = this.dataget['meeting_lat'];
        this.location.longitude = this.dataget['meeting_lng'];
        if (this.gd.platformtype == 'ios') {
            var actionSheet = this.actionSheetCtrl.create({
                buttons: [
                    {
                        text: 'Open in Google Maps',
                        cssClass: "setting_img",
                        handler: function () {
                            _this.geolocation.getCurrentPosition().then(function (position) {
                                // window.open('https://www.google.com/maps/?daddr=' + this.location.latitude + ',' + this.location.longitude, '_system');
                                _this.iab.create('https://www.google.com/maps/?daddr=' + _this.location.latitude + ',' + _this.location.longitude, '_system');
                            }, function (err) {
                            });
                        }
                    }, {
                        text: 'Open in Maps',
                        cssClass: "setting_img",
                        handler: function () {
                            _this.geolocation.getCurrentPosition().then(function (position) {
                                _this.iab.create('maps://?q=' + _this.location.name + '&saddr=' + position.coords.latitude + ',' + position.coords.longitude + '&daddr=' + _this.location.latitude + ',' + _this.location.longitude, '_system');
                            }, function (err) {
                            });
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            this.geolocation.getCurrentPosition().then(function (position) {
                if (_this.platform.is('android')) {
                    // window.open('geo://' + position.coords.latitude + ',' + position.coords.longitude + '?q=' + this.location.latitude + ',' + this.location.longitude + '(' + this.location.name + ')', '_system');
                    _this.iab.create('geo://' + position.coords.latitude + ',' + position.coords.longitude + '?q=' + _this.location.latitude + ',' + _this.location.longitude + '(' + _this.location.name + ')', '_system');
                }
                ;
            }, function (err) {
            });
        }
    };
    TicketPage.prototype.getMap = function () {
        var latLng = new google.maps.LatLng(this.dataget.package_lat, this.dataget.package_lng);
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
        // var t = this;
    };
    TicketPage.prototype.showDetail = function () {
        var _this = this;
        this.secment = !this.secment;
        setTimeout(function () {
            _this.getMap();
        }, 1000);
    };
    TicketPage.prototype.chat = function (datas) {
        var _this = this;
        console.log(datas);
        if (this.gd.userProfile['user_id'] != datas['user_id']) {
            if (this.gd.clickGo) {
                this.gd.clickGo = false;
                this.serviceFactoryThread.ServiceThread('check_room', { 'user_id': this.gd.userProfile['user_id'], 'user_to': datas['user_id'] }, 'POST')
                    .then(function (data) {
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
                        });
                    }
                });
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TicketPage.prototype, "mapElement", void 0);
    TicketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ticket',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/ticket/ticket.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start style="order: 0;">\n      <button ion-button icon-only style="" class="">\n        <img style="position: relative;width: 20px;" src="./assets/icon/logotree.svg" alt="">\n      </button>\n      <button ion-button icon-only style="" class="">\n        <div style="position: relative;color: #000;font-weight: bold;font-size: 14px;">Adventure Earth</div>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only style="" class="" (click)="goProfile(gd.userProfile)">\n        <img style="position: relative !important;;margin-right: 10px !important;;height: 30px !important;;width: 30px !important;;" id="img_profile" class="imgpro" [src]="gd.userProfile.user_path_img" />\n      </button>\n      <button ion-button icon-only style="" class="" (click)="presentPopover($event)">\n        <img style="position: relative;margin-right: 10px;" src="./assets/icon/menu-icon.svg" alt="">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="ticketMain">\n    <div class="ticketTitle">\n      <img src="./assets/imgs/treecoconut.svg" alt="" style="vertical-align: middle;">\n      <div class="textAve" style="vertical-align: middle;">ADVENTURE EARTH</div>\n      <div class="textTicket">Your Ticket</div>\n    </div>\n    <img src="./assets/imgs/cutSecsion.svg" class="imgSection" alt="">\n    <ion-grid class="ticketNext">\n      <ion-row>\n        <!-- <img src="http://www.myadventureearth.com/data/data_photos/1005/img_base64/1544258094.2018-12-08-15-34-5415122.jpg" alt=""> -->\n        <ion-slides>\n          <ion-slide *ngFor="let img of dataget.img">\n            <img [src]="img.img_resize" alt="">\n          </ion-slide>\n        </ion-slides>\n      </ion-row>\n      <ion-row style="font-size: 12px;">\n        <ion-col col-9>\n          <div>{{dataget.packet_name}} </div>\n          <div>\n            <img src="./assets/icon/ping-icon.svg" class="" alt="" style="vertical-align: middle;width: 16px;">\n            <span style="vertical-align: middle;">Choonburi</span>\n          </div>\n        </ion-col>\n        <ion-col col-3 style="display: grid;">\n          <div class="btnDatail" (click)="showDetail()">\n            Detail\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid class="ticketNext" style="font-size: 12px;background: #EBEDED;">\n      <ion-row>\n        <ion-col col-8>\n          <img style="width: 30px;height: 30px;border-radius: 50%;vertical-align: middle;"\n            [src]="dataget.user.user_path_img" alt="">\n          <div style="display: inline-block;vertical-align: middle;">\n            <div>Experience by</div>\n            <div style="color: #1B75BB;">{{dataget.user.user_firstname}} {{dataget.user.user_lastname}}</div>\n          </div>\n        </ion-col>\n        <ion-col col-4 style="display: grid;">\n          <div style="margin: auto;" *ngIf="gd.userProfile.user_id != dataget.user.user_id">\n            <img src="./assets/icon/iconMessage.svg" class="" alt="" style="vertical-align: middle;width: 20px;">\n            <span style="color: #1B75BB;vertical-align: middle;">Message</span>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <img src="./assets/imgs/cutSecsion.svg" class="imgSection" alt="" style="top: -35px;">\n    <ion-grid class="ticketEnd" style="top: -50px;font-size: 12px;">\n      <ion-row>\n        <ion-col col-6>\n          <div style="font-size: 16px;text-align: center;border: 1px solid #CBD0D3;width: 80%;margin: auto;">\n            <div id="qrcodeFrame" style="width: 90%;margin: auto;padding: 3px 0;"></div>\n            <div\n              style="border-top: 1px solid #CBD0D3;background: #EBEDED;padding-top: 5px;padding-bottom: 5px;font-size: 12px;">\n              {{dataget.booking_code_order}}</div>\n          </div>\n        </ion-col>\n        <ion-col col-6 style="font-size: 14px;">\n          <div class="textGray">Date</div>\n          <div style="margin-bottom: 5px">{{dataget.booking_date}}</div>\n          <div class="textGray">Time</div>\n          <div style="margin-bottom: 5px">{{dataget.timeable[0].timeable_time}} -\n            {{dataget.timeable[dataget.timeable.length - 1].timeable_time}}</div>\n          <!-- <div class="detailPeple">\n              <div class="textGray">Adult</div>\n              <div>2</div>\n            </div>\n            <div class="detailPeple">\n              <div class="textGray">Children</div>\n              <div>2</div>\n            </div> -->\n          <div class="textGray">Guest(s)</div>\n          <div style="margin-bottom: 5px">{{dataget.Booking_Guest}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="dataget.packet_condition">\n        <ion-col>\n          <div class="textGray">Condition</div>\n          <div>{{dataget.packet_condition}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div class="textGray">Activity Location</div>\n          <div>\n            <span class="vertical-middle">{{dataget.address}}</span>\n            <!-- <img src="./assets/imgs/shopLocation.svg" alt="" class="vertical-middle"> -->\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div class="textGray">Meetpoint</div>\n          <div>\n            <span class="vertical-middle">{{meeting.name_meet}}</span> <span style="color: #FA6980;">\n              {{meeting.time_meeting}}</span>\n            <!-- <img src="./assets/imgs/shopLocation.svg" alt="" class="vertical-middle"> -->\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div class="textGray" *ngIf="dataget.user.store_telephone"> Call us {{dataget.user.store_telephone}} </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button block (click)="imageTo()">\n            <img src="./assets/imgs/save-icon.svg" alt="" class="vertical-middle" style="margin-right: 10px;"> Save\n            Image\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n\n  <ion-grid class="" style="font-size: 14px;top: -45px;position: relative;" *ngIf="secment == true">\n    <ion-row>\n      <ion-col>\n        <div>{{dataget.packet_name}} </div>\n        <div>\n          <img src="./assets/icon/ping-icon.svg" class="" alt="" style="vertical-align: middle;width: 16px;">\n          <span style="vertical-align: middle;">{{dataget.province.province_name_en}}</span>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="vertical-middle" style="display: inline-block;">\n          <i class="iconStar-star" [ngClass]="dataget.package_rate.Average >= \'1\' ? \'starActive\' : \'\'"></i>\n          <i class="iconStar-star" [ngClass]="dataget.package_rate.Average >= \'2\' ? \'starActive\' : \'\'"></i>\n          <i class="iconStar-star" [ngClass]="dataget.package_rate.Average >= \'3\' ? \'starActive\' : \'\'"></i>\n          <i class="iconStar-star" [ngClass]="dataget.package_rate.Average >= \'4\' ? \'starActive\' : \'\'"></i>\n          <i class="iconStar-star" [ngClass]="dataget.package_rate.Average >= \'5\' ? \'starActive\' : \'\'"></i>\n        </div>\n        <!-- <span class="textReview" style="margin-left: 15px;">\n          (168) reviews >\n        </span> -->\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row style="font-size: 14px;background: #EBEDED;margin-bottom: 15px;margin-top: 10px;">\n      <ion-col col-8>\n        <img style="width: 30px;height: 30px;border-radius: 50%;vertical-align: middle;"\n          [src]="dataget.user.user_path_img" alt="">\n        <div style="display: inline-block;vertical-align: middle;">\n          <div>Experience by</div>\n          <div style="color: #1B75BB;">{{dataget.user.user_firstname}} {{dataget.user.user_lastname}}</div>\n        </div>\n      </ion-col>\n      <ion-col col-4 style="display: grid;" (click)="chat(dataget.user)">\n        <div style="margin: auto;" *ngIf="gd.userProfile.user_id != dataget.user.user_id">\n          <img src="./assets/icon/iconMessage.svg" class="" alt="" style="vertical-align: middle;width: 20px;">\n          <span style="color: #1B75BB;vertical-align: middle;">Message</span>\n        </div>\n      </ion-col>\n    </ion-row> -->\n    <ion-row class="textGray" style="font-size: 14px;">\n      <ion-col col-5>\n        Date\n      </ion-col>\n      <ion-col col-7 style="text-align: right;">\n        {{dataget.booking_date}}\n      </ion-col>\n    </ion-row>\n    <ion-row class="textGray" style="font-size: 14px;">\n      <ion-col col-5>\n        Time\n      </ion-col>\n      <ion-col col-7 style="text-align: right;">\n        {{dataget.timeable[0].timeable_time}} - {{dataget.timeable[dataget.timeable.length - 1].timeable_time}}\n      </ion-col>\n    </ion-row>\n    <ion-row class="textGray" style="font-size: 14px;">\n      <ion-col col-5>\n        Guest(s)\n      </ion-col>\n      <ion-col col-7 style="text-align: right;">\n        {{dataget.Booking_Guest}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <hr>\n      </ion-col>\n    </ion-row>\n    <ion-row class="textGray" style="font-size: 14px;" *ngFor="let guestD of guests">\n      <ion-col col-5>\n        {{guestD.text}}\n      </ion-col>\n      <ion-col col-7 style="text-align: right;">\n        {{guestD.price}}\n      </ion-col>\n    </ion-row>\n    <ion-row class="textGray" style="font-size: 14px;"\n      *ngIf="dataget.Booking_Qly < dataget.tour_less && dataget.tour_private == \'1\'">\n      <ion-col col-5>\n        Extra Price\n      </ion-col>\n      <ion-col col-7 style="text-align: right;">\n        THB {{dataget.tour_extra_price}}\n      </ion-col>\n    </ion-row>\n    <ion-row class="textGray" style="font-size: 14px;" *ngIf="dataget.Accident_Status == \'0\'">\n      <ion-col col-5>\n        <!-- Accident Insurance -->\n        {{dataget.accident.accident_name}}\n      </ion-col>\n      <ion-col col-7 style="text-align: right;">\n        <span *ngIf="dataget.accident.accident_price != 0">THB {{dataget.accident.accident_price}}</span>\n        <span *ngIf="dataget.accident.accident_price == 0">(FREE)</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class="textGray" style="font-size: 14px;" *ngIf="meeting.meet_tyep == \'3\'">\n      <ion-col col-5>\n        {{meeting.name_meet}}\n      </ion-col>\n      <ion-col col-7 style="text-align: right;">\n        THB {{meeting.meet_price}}\n      </ion-col>\n    </ion-row>\n    <ion-row class="textGray" style="font-size: 14px;">\n      <ion-col col-5>\n        Tax\n      </ion-col>\n      <ion-col col-7 style="text-align: right;">\n        THB {{dataget.Booking_Tax}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <hr>\n      </ion-col>\n    </ion-row>\n    <ion-row class="textGray" style="font-size: 14px;">\n      <ion-col col-5>\n        Total\n      </ion-col>\n      <ion-col col-7 style="text-align: right;">\n        THB {{dataget.Booking_Price}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <hr>\n      </ion-col>\n    </ion-row>\n\n\n\n\n\n    <ion-row style="text-align: center;">\n      <ion-col col-4>\n        <img src="./assets/icon/icon-clock.svg" class="" alt="" style="vertical-align: middle;width: 20px;">\n        <div>Starting time</div>\n        <div>{{dataget.timeable[0].timeable_time}}</div>\n      </ion-col>\n      <ion-col col-4>\n        <img src="./assets/icon/icon-peple.svg" class="" alt="" style="vertical-align: middle;width: 20px;">\n        <div>Private</div>\n        <div>2</div>\n      </ion-col>\n      <ion-col col-4>\n        <img src="./assets/icon/icon-sand.svg" class="" alt="" style="vertical-align: middle;width: 20px;">\n        <div>Duration</div>\n        <div>{{dataget.package_time}}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <hr>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="textBold">\n        Details\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="textGray">\n        {{dataget.packet_detail}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="textBold">\n        Scheddute\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div *ngFor="let data of dataget.timeable">\n          <div>{{data.timeable_time}}</div>\n          <div class="textGray">{{data.timeable_activity}}</div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <hr>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div style="padding: 2px;">\n          <img src="./assets/icon/ping-icon.svg" class="" alt="" style="vertical-align: middle;width: 16px;">\n          <span style="vertical-align: middle;" class="textBold">Experience Location</span>\n          <br>\n          <div #map id="map"></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/ticket/ticket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */], __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], TicketPage);
    return TicketPage;
}());

//# sourceMappingURL=ticket.js.map

/***/ })

});
//# sourceMappingURL=6.js.map