webpackJsonp([5],{

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelerPageModule", function() { return TravelerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__traveler__ = __webpack_require__(584);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TravelerPageModule = /** @class */ (function () {
    function TravelerPageModule() {
    }
    TravelerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__traveler__["a" /* TravelerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__traveler__["a" /* TravelerPage */]),
            ],
        })
    ], TravelerPageModule);
    return TravelerPageModule;
}());

//# sourceMappingURL=traveler.module.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Firebase__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
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








var TravelerPage = /** @class */ (function () {
    function TravelerPage(popoverCtrl, viewCtrl, events, alertCtrl, platform, navCtrl, gd, SFT, modalCtrl, navParams, geolocation) {
        var _this = this;
        this.popoverCtrl = popoverCtrl;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.gd = gd;
        this.SFT = SFT;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.pet = "1";
        this.images = [];
        this.datafeed = [];
        this.datafeed2 = [];
        this.check = false;
        this.numLoad = 0;
        this.chkf = true;
        this.items = this.gd.Country;
        this.ref = __WEBPACK_IMPORTED_MODULE_5_Firebase__["database"]().ref('chatrooms/');
        this.ckRefresh = "";
        this.getSearch = [];
        this.fillterSel = '';
        this.countuser = 1;
        this.type_page = '0'; //0 = traveler, 1 = chat
        this.itemMain = [];
        this.list_chat = [];
        this.distant = 1;
        this.maxHeard = 130;
        this.marginDefault = __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"]  page-traveler:last .scroll-content').css('margin-top');
        console.log(this.marginDefault);
        setTimeout(function () {
            _this.marginDefault = __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"]  page-traveler:last .scroll-content').css('margin-top');
        }, 1000);
        // SFT.chkGPS();
        events.subscribe('scrollTop2', function () {
            console.log('scrolltop');
            _this.content.scrollToTop();
        });
        this.list_chat = gd.roomchat;
        console.log(gd.roomchat);
        setTimeout(function () {
            var t = _this;
            __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"] page-traveler:last .scroll-content').scroll(function () {
                var height = __WEBPACK_IMPORTED_MODULE_6_jquery__(__WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"] page-traveler:last #contentRow')[0]).height();
                var scroll = __WEBPACK_IMPORTED_MODULE_6_jquery__(this).scrollTop();
                var calcurate = scroll / height;
                var position = parseInt(calcurate + "");
                if (t.type_page == 0) {
                    if (parseInt(t.itemMain[position][0]["dis"]) > 0) {
                        t.distant = parseInt(t.itemMain[position][0]["dis"]);
                    }
                    else {
                        t.distant = 1;
                    }
                }
            });
        }, 1000);
        this.ref.on('value', function (resp) {
        });
        this.drawerOptions = {
            handleHeight: 50,
            thresholdFromBottom: 200,
            thresholdFromTop: 50,
            bounceBack: true
        };
        this.follow = false;
        this.getdata(false, "", "");
        setInterval(function () {
            if (_this.fillterSel == "Following") {
                _this.getdata(true, "", "Following");
            }
            else if (_this.fillterSel == "country") {
                _this.getdata(true, "", "country");
            }
            else {
                if (_this.ckRefresh == "") {
                    _this.getdata(true, "", "");
                }
                else {
                    _this.locationList(true, "", "", _this.getSearch);
                }
            }
        }, 300000);
        events.subscribe('refollowlocation', function (user, type) {
            var divshowbottom = _this.user.filter(function (item) {
                if (item.user_id == user) {
                    if (type == 1) {
                        item.follow = 1;
                    }
                    else {
                        item.follow = 0;
                    }
                }
            });
        });
    }
    TravelerPage.prototype.change = function (id) {
        var t = this;
        if (id == 0) {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"] page-traveler:last .scroll-content').animate({ 'margin-top': this.marginDefault }, 200);
        }
        else {
            var top_1 = (parseInt(this.marginDefault.slice(0, -2)) - 40.8).toString() + 'px';
            __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"] page-traveler:last .scroll-content').animate({ 'margin-top': top_1 }, 200);
        }
        this.content.scrollToTop();
    };
    TravelerPage.prototype.change_tab = function (data) {
        this.type_page = data;
    };
    TravelerPage.prototype.segmentChanged = function (e) {
        console.log(e);
    };
    TravelerPage.prototype.getdata = function (chk, refresher, type) {
        var _this = this;
        console.log('getdata');
        var dataFeeling = {};
        //  setTimeout(() => {
        if (type == 'country') {
            dataFeeling = {
                'data': this.countryselect,
                'type': 'country',
                'lat': this.SFT.userlocation['lat'],
                'long': this.SFT.userlocation['long']
            };
            this.SFT.ServiceThread('locationUser', dataFeeling, 'POST')
                .then(function (data) {
                // console.log(data['res_result']);
                if (data['res_code'] != '00') {
                    _this.itemMain = [];
                    _this.user = [];
                    _this.countuser = 0;
                }
                else {
                    _this.itemMain = [];
                    _this.user = data['res_result'];
                    var array = [];
                    for (var index = 0; index < _this.user.length; index++) {
                        if (array.length == 3) {
                            array = [];
                        }
                        array.push(_this.user[index]);
                        if ((index % 3) == 0) {
                            _this.itemMain.push(array);
                        }
                    }
                    _this.countuser = 1;
                    if (chk) {
                        setTimeout(function () {
                            try {
                                refresher.complete();
                            }
                            catch (error) {
                            }
                        }, 100);
                    }
                    // this.user = data['res_result'];
                    // this.itemMain = data['res_result'];         
                    // this.countuser = 1;
                    // if (chk) {
                    //   setTimeout(() => {
                    //     try {
                    //       refresher.complete();
                    //     } catch (error) {
                    //     }
                    //   }, 100);
                    // }
                }
            });
        }
        else {
            // console.log(this.gd.userlocation);
            var dataSend = {
                'lat': this.SFT.userlocation['lat'],
                'long': this.SFT.userlocation['long']
            };
            // this.loadMap(this.gd.userlocation['lat'], this.gd.userlocation['long']);
            // this.gd.locationGet(dataSend);
            this.SFT.ServiceThread('nameLocation', dataSend, 'POST')
                .then(function (data) {
                if (data['res_code'] == '00') {
                    // console.log(data['res_text']);
                    _this.namemap = data['res_result'];
                }
                else {
                    // console.log(data['res_text']);
                }
            });
            if (type == 'Following') {
                dataFeeling = {
                    'type': type,
                    'location': this.SFT.userlocation['lat'] + "," + this.SFT.userlocation['long'],
                    'lat': this.SFT.userlocation['lat'],
                    'long': this.SFT.userlocation['long']
                };
            }
            else {
                dataFeeling = {
                    'location': this.SFT.userlocation['lat'] + "," + this.SFT.userlocation['long'],
                    'lat': this.SFT.userlocation['lat'],
                    'long': this.SFT.userlocation['long']
                };
            }
            this.getSearch = dataFeeling;
            this.locationList(chk, refresher, type, dataFeeling);
        }
    };
    TravelerPage.prototype.locationList = function (chk, refresher, type, data) {
        var _this = this;
        console.log('locationList');
        // this.gd.gpsLocation().then(data => {
        //   if (data == false) {
        //     try {
        //       refresher.complete();
        //     } catch (error) {
        //     }
        //   }
        // })
        this.SFT.ServiceThread('locationUser', data, 'POST')
            .then(function (data) {
            console.log(data['res_result']);
            if (data['res_code'] != '00') {
                // console.log(data['res_text']);
                _this.user = [];
                _this.countuser = 0;
            }
            else {
                _this.itemMain = [];
                _this.user = data['res_result'];
                var array = [];
                for (var index = 0; index < _this.user.length; index++) {
                    if (array.length == 3) {
                        array = [];
                    }
                    array.push(_this.user[index]);
                    if ((index % 3) == 0) {
                        _this.itemMain.push(array);
                    }
                }
                _this.countuser = 1;
                if (chk) {
                    setTimeout(function () {
                        try {
                            refresher.complete();
                        }
                        catch (error) {
                        }
                    }, 100);
                }
                // console.log(data);
            }
        });
        console.log(this.itemMain);
    };
    TravelerPage.prototype.doRefresh = function (refresher) {
        // this.chkGPS();
        // console.log(this.getSearch);
        var _this = this;
        setTimeout(function () {
            if (_this.fillterSel == "Following") {
                _this.getdata(true, refresher, "Following");
            }
            else if (_this.fillterSel == "country") {
                _this.getdata(true, refresher, "country");
            }
            else {
                if (_this.ckRefresh == "") {
                    _this.getdata(true, refresher, "");
                }
                else {
                    _this.locationList(true, refresher, "", _this.getSearch);
                }
            }
        }, 200);
    };
    TravelerPage.prototype.presentPopover = function (myEvent) {
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".share").removeClass('share');
        __WEBPACK_IMPORTED_MODULE_6_jquery__("body").addClass('rightMenu');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__components_menu_right_menu_right__["a" /* MenuRightComponent */], { navCtrl: this.navCtrl });
        popover.present({
            ev: myEvent
        });
    };
    TravelerPage.prototype.ionViewDidLoad = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery__('#filterlocation').html(__WEBPACK_IMPORTED_MODULE_6_jquery__('#filterL').html());
        __WEBPACK_IMPORTED_MODULE_6_jquery__('#filterL').html("");
        __WEBPACK_IMPORTED_MODULE_6_jquery__("#DfilterL").click(function () {
            __WEBPACK_IMPORTED_MODULE_6_jquery__("#DfilterL").toggle();
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#filterlocation').slideToggle();
            __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-app').toggleClass('disable-scroll');
        });
    };
    TravelerPage.prototype.NextPage = function (page, image) {
        // console.log(image);
        // if (page == 'ProfilePage' && this.gd.userProfile['user_id'] == image['user_id']) {
        //   this.navCtrl.parent.select(4);
        // } else {
        this.gd.nextpage(this.navCtrl, page, { 'data': image });
        // }
    };
    TravelerPage.prototype.scrollTopFN = function () {
        this.navCtrl.parent.select(0);
        // $("#segmentTraveler").click();
    };
    TravelerPage.prototype.gonoti = function () {
        this.gd.nextpage(this.navCtrl, 'NotificationsPage', {});
    };
    TravelerPage.prototype.search = function () {
        var _this = this;
        // // console.log(5555);
        var modal = this.modalCtrl.create('ModelPage', {});
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data['place_name'] != null && data['place_name'] != "" && data['place_name'] != undefined) {
                // console.log(data);
                //  this.selectedData = data
                // this.loadMap(data['place_location']['lat'], data['place_location']['lng'])
                _this.namemap = data['place_name'];
                _this.datafeed.length = 0;
                _this.datafeed2.length = 0;
                // this.loading(data['place_location']['lat'], data['place_location']['lng']);
                var dataFeeling = {
                    'location': data['place_location']['lat'] + "," + data['place_location']['lng'],
                    'lat': data['place_location']['lat'],
                    'long': data['place_location']['lng']
                };
                _this.getSearch = dataFeeling;
                _this.locationList(false, "", "", dataFeeling);
                _this.ckRefresh = "search";
            }
        });
    };
    TravelerPage.prototype.loadMap = function (latitude, longitude) {
    };
    TravelerPage.prototype.addMarker = function () {
        var latLng = new google.maps.LatLng(this.mylat, this.mylong);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng,
            icon: "./img/mylocation.png"
        });
    };
    TravelerPage.prototype.follows = function (type, index) {
        var _this = this;
        var datanew = JSON.parse(JSON.stringify(this.gd.userProfile));
        delete datanew.same;
        delete datanew.follow;
        delete datanew.ic;
        delete datanew.samelength;
        delete datanew.status_Follow;
        delete datanew.message;
        delete datanew.data_message;
        var senddata = {
            'follow_user': this.user[index]['user_id'],
            'type': type,
            'data': JSON.stringify(datanew)
        };
        this.SFT.ServiceThread('indefollowing', senddata, 'POST')
            .then(function (data) {
            var divshowbottom = _this.user.filter(function (item) {
                if (item.user_id == _this.user[index]['user_id']) {
                    // console.log(item);
                    if (type == 1) {
                        item.follow = 1;
                        item.followers += 1;
                        _this.gd.userProfile.following += 1;
                        _this.events.publish('refollowlocation', _this.user[index]['user_id'], 1);
                        _this.events.publish('refollowDetail', _this.user[index]['user_id'], 1);
                    }
                    else {
                        item.follow = 0;
                        item.followers -= 1;
                        _this.gd.userProfile.following -= 1;
                        _this.events.publish('refollowlocation', _this.user[index]['user_id'], 2);
                        _this.events.publish('refollowDetail', _this.user[index]['user_id'], 2);
                    }
                }
            });
            // console.log(data);
        });
        if (type == 1) {
            // console.log('เพิ่ม');
            this.user[index]['follow'] = true;
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"]  page-traveler:last .locatFID' + index).addClass('bounceIn animated');
                setTimeout(function () {
                    __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"]  page-traveler:last .locatFID' + index).removeClass('bounceIn animated');
                }, 1500);
            }, 100);
        }
        else {
            // console.log('ลบ');
            this.user[index]['follow'] = false;
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"]  page-traveler:last .locatFD' + index).addClass('bounceIn animated');
                setTimeout(function () {
                    __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"]  page-traveler:last .locatFD' + index).removeClass('bounceIn animated');
                }, 1500);
            }, 100);
        }
    };
    TravelerPage.prototype.chat = function (datas) {
        var _this = this;
        // let newData = this.ref.push();
        // newData.set({
        //   roomname:"test"
        // });
        if (this.gd.clickGo) {
            this.gd.clickGo = false;
            this.SFT.ServiceThread('check_room', { 'user_id': this.gd.userProfile['user_id'], 'user_to': datas['user_id'] }, 'POST')
                .then(function (data) {
                console.log(data);
                console.log(_this.gd.roomchat);
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
                    _this.SFT.ServiceThread('addroom', senddata, 'POST')
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
    };
    TravelerPage.prototype.presentfilter = function () {
        var t = this;
        __WEBPACK_IMPORTED_MODULE_6_jquery__("#DfilterL").toggle();
        __WEBPACK_IMPORTED_MODULE_6_jquery__('#filterlocation').slideToggle();
        __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-app').toggleClass('disable-scroll');
        if (this.chkf) {
            this.chkf = false;
            __WEBPACK_IMPORTED_MODULE_6_jquery__('tr .nopadding #Country').click(function () {
                try {
                    __WEBPACK_IMPORTED_MODULE_6_jquery__('#CountryFilter').slideToggle("slow");
                    __WEBPACK_IMPORTED_MODULE_6_jquery__(__WEBPACK_IMPORTED_MODULE_6_jquery__(this)[0]['children'][0]).toggleClass('icon-arrow-up');
                }
                catch (error) { }
            });
            __WEBPACK_IMPORTED_MODULE_6_jquery__('.inLineList button').click(function () {
                __WEBPACK_IMPORTED_MODULE_6_jquery__('.inLineList button').css('background-color', 'transparent');
                __WEBPACK_IMPORTED_MODULE_6_jquery__(this).css('background-color', '#ffffff57');
                t.countryselect = __WEBPACK_IMPORTED_MODULE_6_jquery__(this)[0].innerText;
                t.getdata(false, false, "country");
                t.fillterSel = "country";
                t.closefilter();
                __WEBPACK_IMPORTED_MODULE_6_jquery__('#filterlocation .check_New').removeClass('check_New');
                __WEBPACK_IMPORTED_MODULE_6_jquery__('#filterlocation .fillterList').removeClass('fillterList');
            });
            __WEBPACK_IMPORTED_MODULE_6_jquery__("#searchTerm").on("keyup", function () {
                t.fliters();
            });
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#filterlocation tr .btnfilter').click(function () {
                __WEBPACK_IMPORTED_MODULE_6_jquery__('#filterlocation .check_New').removeClass('check_New');
                __WEBPACK_IMPORTED_MODULE_6_jquery__(__WEBPACK_IMPORTED_MODULE_6_jquery__(this)[0]['children'][0]).toggleClass('check_New');
                __WEBPACK_IMPORTED_MODULE_6_jquery__('#filterlocation .fillterList').removeClass('fillterList');
                __WEBPACK_IMPORTED_MODULE_6_jquery__(__WEBPACK_IMPORTED_MODULE_6_jquery__(this)[0]['children'][0]).toggleClass('fillterList');
                if (__WEBPACK_IMPORTED_MODULE_6_jquery__["trim"](__WEBPACK_IMPORTED_MODULE_6_jquery__(this)[0].innerText) == "Following") {
                    t.getdata(false, false, "Following");
                    t.fillterSel = "Following";
                }
                else {
                    t.getdata(false, "", "");
                    t.fillterSel = "";
                }
                t.closefilter();
            });
        }
    };
    TravelerPage.prototype.closefilter = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery__("#DfilterL").toggle();
        __WEBPACK_IMPORTED_MODULE_6_jquery__('#filterlocation').slideToggle();
        __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-app').toggleClass('disable-scroll');
    };
    TravelerPage.prototype.fliters = function () {
        var t = this;
        this.items = this.gd.Country;
        var text = __WEBPACK_IMPORTED_MODULE_6_jquery__('#searchTerm').val() + "";
        this.items = this.items.filter(function (el) { return el.country_name_en.toLowerCase().indexOf(text.toLowerCase()) > -1; });
        var htmls = "";
        this.items.forEach(function (element) {
            htmls += '    <button class="item item-block item-ios" id="btncountry" ion-item="" style="border: 0px; padding-left: 15%; background-color: transparent; color: white;"><div class="item-inner"><div class="input-wrapper">\
                        <ion-label class="label label-ios">' + element['country_name_en'] +
                '</ion-label></div>\
                        </div><div class="button-effect"></div>\
                    </button>';
        });
        __WEBPACK_IMPORTED_MODULE_6_jquery__('.inLineList').html(htmls);
        __WEBPACK_IMPORTED_MODULE_6_jquery__('.inLineList button').click(function () {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('.inLineList button').css('background-color', 'transparent');
            __WEBPACK_IMPORTED_MODULE_6_jquery__(this).css('background-color', '#ffffff57');
            t.countryselect = __WEBPACK_IMPORTED_MODULE_6_jquery__(this)[0].innerText;
            t.getdata(false, false, "country");
            t.closefilter();
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#filterlocation .check_New').removeClass('check_New');
        });
    };
    TravelerPage.prototype.openModal = function (dataSend) {
        var _this = this;
        // this.gd.nextpage(this.navCtrl, "ProfilePage", {data: dataSend})
        console.log(dataSend);
        var modal = this.modalCtrl.create('ModalProfilePage', { data: dataSend });
        modal.present();
        modal.onDidDismiss(function (res) {
            if (res == '1') {
                _this.gd.nextpage(_this.navCtrl, "ProfilePage", { data: dataSend });
            }
            else if (res == '2') {
                _this.chat(dataSend);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], TravelerPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TravelerPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* VirtualScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* VirtualScroll */])
    ], TravelerPage.prototype, "virtualScroll", void 0);
    TravelerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-traveler',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/traveler/traveler.html"*/'<ion-header>\n    <ion-navbar style="padding-left: 0;padding-right: 0;padding-bottom: 0px;" hideBackButton>\n        <ion-buttons start style="order: 0;" style="width: 100%;margin: 0px;">\n            <div style="width: 100%;position: relative;">\n                <div class="header2" style="margin: auto;width: 100%;position: absolute;z-index: 0;top: 0px;bottom: 0px;height: 32px;">\n                    <button ion-button icon-only style="" class="" (click)="scrollTopFN()">\n                        <img style="position: relative;width: 20px;margin-left: 10px;" src="./assets/icon/logotree.svg" alt="">\n                    </button>\n                    <button ion-button icon-only style="" class="" (click)="scrollTopFN()">\n                        <div style="position: relative;color: #000;font-weight: bold;font-size: 14px;">Traveler\n                        </div>\n                    </button>\n                    <button ion-button icon-only style="float:right;" class="" (click)="presentPopover($event)">\n                        <img style="position: relative;margin-right: 10px;" src="./assets/icon/menu-icon.svg" alt="">\n                    </button>\n                    <button ion-button icon-only style="float:right;" class="" (click)="NextPage(\'ProfilePage\',gd.userProfile)">\n                        <img style="position: relative;margin-right: 10px;height: 30px;width: 30px;" id="img_profile" class="imgpro" [src]="gd.userProfile.user_path_img"\n                        />\n                    </button>\n                    <button ion-button icon-only style="position: relative;float:right;" class="" (click)="gonoti()">\n                        <img style="position: relative;margin-right: 10px;width: 20px;" src="./assets/icon/Inoti.svg" alt="">\n                        <div class="numberNoti" *ngIf="gd.sumNoti > 0">\n                            <div style="margin: auto;">{{gd.sumNoti}}</div>\n                        </div>\n                    </button>\n                </div>\n            </div>\n        </ion-buttons>\n    </ion-navbar>\n    <ion-segment [(ngModel)]="type_page">\n        <ion-segment-button value="0" (click)="change(0)" id="segmentTraveler">\n            <div style="margin: auto;font-size: 18px;">Traveler</div>\n        </ion-segment-button>\n        <ion-segment-button value="1" (click)="change(1)">\n            <div style="margin: auto;font-size: 18px;">Chat</div>\n        </ion-segment-button>\n    </ion-segment>\n    <div [hidden]="type_page != 0" style="background: rgb(226, 226, 226);color: rgb(82, 82, 82);padding: 1px 15px 3px;font-size: 16px;"\n        id="taskFilter">\n        <button ion-button icon-end outline class="km">\n            {{distant}} km\n        </button>\n        <button ion-button icon-end outline class="filter" (click)="presentfilter()">\n            Filter\n            <ion-icon name="ios-options"></ion-icon>\n        </button>\n    </div>\n</ion-header>\n<ion-content>\n    <ion-refresher id="refresher" (ionRefresh)="doRefresh($event)" *ngIf="type_page != 1">\n        <ion-refresher-content>\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-grid [hidden]="type_page != 0" *ngIf="itemMain.length != 0">\n        <ion-row *ngFor="let item of itemMain" id="contentRow">\n            <ion-col col-4 *ngFor="let user of item" class="mainCard" (click)="openModal(user)">\n                <div [ngStyle]="{\'background\': \'url(\'+user.user_path_img+\')\', \'background-size\': \'cover\', \'background-position\': \'center\'}"\n                    class="imgMain">\n                    <img class="country_img" style="width: 20px;height: 20px;box-shadow: 0.5px 0.5px 1px 0.5px rgba(136, 136, 136, 0.21);position: absolute;bottom: 0;right: 0;"\n                        [src]="user.country_img" alt="">\n                </div>\n                <div class="nameUser">\n                    <div [innerHtml]="user.user_firstname" style="vertical-align: middle;display: inline-block;overflow: hidden;text-overflow: clip;white-space: nowrap;max-width: 85%;">\n                    </div>\n                    <div class="online_status" style="display: inline-block;vertical-align: middle;margin-top: 5px;" *ngIf="user.statusOnline"></div>\n                </div>\n                <div class="fromUser">\n                    <span [innerHtml]="user.country_name_en"></span>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-grid *ngIf="gd.roomchat.length != 0 && type_page != 0">\n        <ion-row *ngFor="let item of gd.roomchat" style="border-bottom:1px #dadada solid;" (click)="chat(item)">\n            <ion-col col-3>\n                <div [ngStyle]="{\'background\': \'url(\'+item.user_path_img+\')\', \'background-size\': \'cover\', \'background-position\': \'center\'}"\n                    class="imgMain_chat"></div>\n            </ion-col>\n            <ion-col style="display: inline-flex;" col-9>\n                <div style="margin: auto;width: 100%;">\n                    <div class="nameUser_chat">\n                        <span [innerHtml]="item.user_firstname"></span>\n                        <span [innerHtml]="item.user_lastname"></span>\n                        <div *ngIf="item.message.length > 0" class="time_chat">\n                            {{item.message[item.message.length-1].sendDate}}</div>\n                    </div>\n                    <div class="message_chat" style="position: relative;" style="min-height: 26px;">\n                        <div *ngIf="item.message.length > 0" ng-class="item.statusOnline == 1 ? \'online\' : \'offline\'" class="textChat">{{item.message[item.message.length-1].message}}</div>\n                        <div *ngIf="item.statusOnline == 1" class="online_status" style="position: absolute;bottom: 0;top: 10px;margin: auto;right: 5px;"></div>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <div style="height: 50px;"></div>\n    <div class="filterFeed Montserrat" id="filterL">\n        <div class="tilie">\n            <span> Your Preference</span>\n        </div>\n        <table style="">\n            <tr>\n                <td class="btnfilter" style="padding-right: unset !important;padding-left: unset !important;">\n                    <div class="fillterNoclick fillterList">View All</div>\n                    <i class="check_New"></i>\n                </td>\n            </tr>\n            <tr>\n                <td class="btnfilter" style="padding-right: unset !important;padding-left: unset !important;">\n                    <div class="fillterNoclick">Following</div>\n                    <i class=""></i>\n                </td>\n            </tr>\n            <tr style="border: none;">\n                <td style="vertical-align: top;" class="nopadding">\n                    <div style="margin-top: 15px;padding-left: 3%;" id="Country">\n                        From Country\n                        <i class="icon-arrow-down"></i>\n                    </div>\n                    <div id="CountryFilter" style="display:none;">\n                        <div style="margin: 0px 16px 0 16px;">\n                            <input ion-item type="text" placeholder="search..." class="boxInput" [(ngModel)]="searchTerm" id="searchTerm" (ngModelChange)=\'onSearchInput(searchTerm)\'>\n                        </div>\n                        <div style="    width: 120%; height: 250px;">\n                            <ion-list inset class="inLineList listinset">\n                                <button ion-item *ngFor="let item of items" value="item.country_id" id="btncountry" style="border: 0;padding-left: 15%;background-color: transparent;color: white;min-height:5px;">\n                                    {{ item.country_name_en }}\n                                </button>\n                            </ion-list>\n                        </div>\n                    </div>\n                </td>\n            </tr>\n        </table>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/traveler/traveler.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], TravelerPage);
    return TravelerPage;
}());

//# sourceMappingURL=traveler.js.map

/***/ })

});
//# sourceMappingURL=5.js.map