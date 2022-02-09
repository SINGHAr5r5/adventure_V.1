webpackJsonp([35],{

/***/ 133:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/booking-add/booking-add.module": [
		367,
		1
	],
	"../pages/booking-explore/booking-explore.module": [
		368,
		34
	],
	"../pages/bookingdetail/bookingdetail.module": [
		369,
		33
	],
	"../pages/bookings/bookings.module": [
		371,
		32
	],
	"../pages/camera/camera.module": [
		372,
		4
	],
	"../pages/chat/chat.module": [
		370,
		31
	],
	"../pages/coconut/coconut.module": [
		374,
		30
	],
	"../pages/detailfeed/detailfeed.module": [
		373,
		2
	],
	"../pages/edit-pick/edit-pick.module": [
		375,
		29
	],
	"../pages/edit-tag/edit-tag.module": [
		378,
		28
	],
	"../pages/editprofile/editprofile.module": [
		376,
		27
	],
	"../pages/login/login.module": [
		380,
		26
	],
	"../pages/modal-profile/modal-profile.module": [
		377,
		25
	],
	"../pages/model-image/model-image.module": [
		379,
		3
	],
	"../pages/model/model.module": [
		381,
		24
	],
	"../pages/myticket/myticket.module": [
		382,
		23
	],
	"../pages/newfeed/newfeed.module": [
		383,
		22
	],
	"../pages/notifications/notifications.module": [
		384,
		21
	],
	"../pages/payment/payment.module": [
		387,
		0
	],
	"../pages/postphoto-modal/postphoto-modal.module": [
		385,
		20
	],
	"../pages/postphoto/postphoto.module": [
		386,
		19
	],
	"../pages/preview/preview.module": [
		388,
		18
	],
	"../pages/profile/profile.module": [
		390,
		17
	],
	"../pages/register/register.module": [
		391,
		16
	],
	"../pages/repassword/repassword.module": [
		389,
		15
	],
	"../pages/review/review.module": [
		392,
		14
	],
	"../pages/save-image/save-image.module": [
		393,
		13
	],
	"../pages/search-newfeed/search-newfeed.module": [
		394,
		12
	],
	"../pages/setting/setting.module": [
		395,
		11
	],
	"../pages/socialsharing/socialsharing.module": [
		397,
		10
	],
	"../pages/splash-load/splash-load.module": [
		398,
		9
	],
	"../pages/tabs/tabs.module": [
		396,
		8
	],
	"../pages/termsand-policy/termsand-policy.module": [
		399,
		7
	],
	"../pages/ticket/ticket.module": [
		401,
		6
	],
	"../pages/traveler/traveler.module": [
		400,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 175;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_scan__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_delay__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_retryWhen__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_retryWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_retryWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_finally__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_delayWhen__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_delayWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_delayWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_timeout__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_throw__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_onErrorResumeNext__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_onErrorResumeNext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_onErrorResumeNext__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ServiceHttp = /** @class */ (function () {
    function ServiceHttp(http, loadingCtrl, alertCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.inprogress_requests = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.requests_active = 0;
        this.user_api_key = "";
    }
    ServiceHttp.prototype.request = function (path, data, options, method) {
        var _this = this;
        if (options === void 0) { options = {}; }
        options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        options.headers.append('Content-Type', 'application/x-www-form-urlencoded', 'Authorization', this.user_api_key);
        // let base_url =   "https://www.myadventureearth.com/api/v3/";
        var base_url = "https://www.myadventureearth.com/api/v9/";
        var timeout = 120000;
        var max_retries = 3;
        var url = "" + base_url + path;
        var body;
        body = {
            LoadMoreLimit: 10, numLoad: 0, width: 414, data: 15
        };
        var Params = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpParams */]({
            fromObject: data
        });
        var request;
        if (method == 'GET') {
            request = this.http.get(url)
                .timeout(timeout)
                .retryWhen(function (errors) {
                return errors.scan(function (errorCount, err) {
                    if (errorCount < max_retries && err.name == 'TimeoutError')
                        return errors.delay(500);
                    throw err;
                }, 0);
            });
        }
        else {
            var count_1 = 0;
            request = this.http.post(url, Params, {
                headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]()
                    .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
                    .set('Authorization', this.user_api_key)
            })
                .timeout(timeout)
                .retryWhen(function (errors) {
                return errors.scan(function (errorCount, err) {
                    if (count_1 < max_retries && err.name == 'HttpErrorResponse' && path != 'Postimg') {
                        count_1++;
                        return errors.delay(500);
                    }
                    if (errorCount < max_retries && err.name == 'TimeoutError') {
                        return errors.delay(500);
                    }
                    throw err;
                }, 0);
            });
        }
        if (path != 'photos_google' && path != 'saveError') {
            request = request.map(this.extractData);
            request = request.retryWhen(function (errors) {
                return errors.delayWhen(function (error) {
                    var message = _this.log_error(error);
                    var datasend = {
                        data: JSON.stringify(data),
                        url: path
                    };
                    _this.request('saveError', datasend, { loading: false }, method).subscribe(function (response) {
                    });
                    return _this.error_handler(message, error);
                });
            });
        }
        if (!options.loading) {
            this.add_blocking_request();
            request = request.finally(function () { return _this.finish_blocking_request(); });
        }
        return request;
    };
    ServiceHttp.prototype.add_blocking_request = function () {
        if (this.requests_active++ == 0) {
            this.loader = this.loadingCtrl.create({ content: 'Please wait...' });
        }
    };
    ServiceHttp.prototype.finish_blocking_request = function () {
        if (--this.requests_active == 0) {
            this.loader.dismiss();
        }
    };
    ServiceHttp.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ServiceHttp.prototype.log_error = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = {};
            try {
                body = error.json() || {};
            }
            catch (e) { }
            var err = body.error || JSON.stringify(body);
            errMsg = "<img src=\"./assets/imgs/retry2.png\">";
            if (error.status == 0) {
                console.error(errMsg);
                errMsg = "<img src=\"./assets/imgs/retry2.png\">";
            }
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return errMsg;
    };
    ServiceHttp.prototype.error_handler = function (message, error) {
        var retry_subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        var retry;
        if (error.status == 401) {
            retry = this.alertCtrl.create({
                title: 'Logged Out',
                cssClass: 'errorHttp',
                message: "You have been logged out and need to log in again",
                enableBackdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            retry_subject.error(error);
                            retry_subject.complete();
                            return false;
                        }
                    },
                ]
            });
        }
        else {
            var title = 'Server Error';
            var display_message = "<img src=\"./assets/imgs/retry2.png\">";
            if (error.status == 400 || error.status == 0) {
                display_message = "<img src=\"./assets/imgs/retry2.png\">";
                title = "Failed To Load Data";
            }
            retry = this.alertCtrl.create({
                title: title,
                cssClass: 'errorHttp',
                message: display_message,
                enableBackdropDismiss: false,
                buttons: [
                    {
                        text: 'Retry',
                        handler: function () {
                            retry.dismiss();
                            retry_subject.next(1);
                            retry_subject.complete();
                            return false;
                        }
                    }
                ]
            });
        }
        retry.present();
        return retry_subject;
    };
    ServiceHttp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], ServiceHttp);
    return ServiceHttp;
}());

//# sourceMappingURL=ServiceHttp.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuRightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_globaldata_service__ = __webpack_require__(63);
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
 * Generated class for the MenuRightComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MenuRightComponent = /** @class */ (function () {
    function MenuRightComponent(events, fb, storage, alertCtrl, viewCtrl, gd, navCtrl, navParams) {
        this.events = events;
        this.fb = fb;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.gd = gd;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(this.navParams.get('navCtrl'));
        console.log('Hello MenuRightComponent Component');
        this.text = 'Hello World';
    }
    MenuRightComponent.prototype.close = function (type) {
        var _this = this;
        if (type == '1') {
            this.gd.nextpage(this.navParams.get('navCtrl'), "ProfilePage", { 'data': this.gd.userProfile });
        }
        else if (type == '2') {
            this.navParams.get('navCtrl').parent.select(2);
        }
        else if (type == '3') {
            // this.navParams.get('navCtrl').parent.select(2);
            // setTimeout(() => {
            this.gd.nextpage(this.navParams.get('navCtrl'), "MyticketPage", {});
            // }, 500);
        }
        else if (type == '4') {
            this.gd.nextpage(this.navParams.get('navCtrl'), 'SettingPage', {});
        }
        else if (type == '5') {
            var alert_1 = this.alertCtrl.create({
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
            alert_1.present();
        }
        this.viewCtrl.dismiss();
    };
    MenuRightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'menu-right',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/components/menu-right/menu-right.html"*/'<div style="height: 50px;"></div>\n<ion-list style="margin: 0;">\n  <button ion-item (click)="close(1)" detail-none class="profile">\n    <ion-grid style="padding: 0">\n      <ion-row>\n        <ion-col col-3 style="display: inline-grid;">\n          <img style="position: relative;height: 40px;width: 40px;margin: auto;border: 0px;\n          box-shadow: 0px 1px 5px 0.2px rgba(86, 86, 86, 0.5);" id="img_profile" class="imgpro"\n            [src]="gd.userProfile.user_path_img" />\n        </ion-col>\n        <ion-col col-9 style="display: inline-grid;">\n          <div style="margin: auto;margin-left: 0px;width: 100%;">\n            <div class="textProfile">Profile</div>\n            <div class="textName">{{gd.userProfile[\'user_firstname\']}} {{gd.userProfile[\'user_lastname\']}}</div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </button>\n  <button ion-item (click)="close(2)" detail-none>\n    <img src="./assets/icon/icon_traveler.svg" alt="" class="Middle">\n    <span class="Middle">Traveler</span>\n    <ion-icon name="ios-arrow-forward" item-right style="display: grid;"></ion-icon>\n\n  </button>\n  <!-- <button ion-item (click)="close(3)" detail-none>\n    <img src="./assets/icon/icon_booking.svg" alt="" class="Middle">\n    <span class="Middle">Booking</span>\n    <ion-icon name="ios-arrow-forward" item-right style="display: grid;"></ion-icon>\n\n  </button> -->\n  <button ion-item (click)="close(4)" detail-none>\n    <img src="./assets/icon/icon_setting.svg" alt="" class="Middle">\n    <span class="Middle">Setting</span>\n    <ion-icon name="ios-arrow-forward" item-right style="display: grid;"></ion-icon>\n\n  </button>\n  <button ion-item (click)="close(5)" detail-none>\n    <img src="./assets/icon/icon_logout.svg" alt="" class="Middle">\n    <span class="Middle">Log out</span>\n  </button>\n</ion-list>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/components/menu-right/menu-right.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MenuRightComponent);
    return MenuRightComponent;
}());

//# sourceMappingURL=menu-right.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(264);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_ServiceHttp__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_facebook__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_menu_right_menu_right__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_clipboard__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_photo_library__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_push__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_app_availability__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_location_accuracy__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_base64__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_image_picker__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_android_permissions__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_base64_to_gallery__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_analytics_firebase__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_file_transfer__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_video_editor__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_network__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ng_in_viewport__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_app_version__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__components_menu_right_menu_right__["a" /* MenuRightComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/booking-add/booking-add.module#BookingAddPageModule', name: 'BookingAddPage', segment: 'booking-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booking-explore/booking-explore.module#BookingExplorePageModule', name: 'BookingExplorePage', segment: 'booking-explore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bookingdetail/bookingdetail.module#BookingdetailPageModule', name: 'BookingdetailPage', segment: 'bookingdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bookings/bookings.module#BookingsPageModule', name: 'BookingsPage', segment: 'bookings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/camera/camera.module#CameraPageModule', name: 'CameraPage', segment: 'camera', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detailfeed/detailfeed.module#DetailfeedPageModule', name: 'DetailfeedPage', segment: 'detailfeed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coconut/coconut.module#CoconutPageModule', name: 'CoconutPage', segment: 'coconut', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-pick/edit-pick.module#EditPickPageModule', name: 'EditPickPage', segment: 'edit-pick', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-profile/modal-profile.module#ModalProfilePageModule', name: 'ModalProfilePage', segment: 'modal-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-tag/edit-tag.module#EditTagPageModule', name: 'EditTagPage', segment: 'edit-tag', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/model-image/model-image.module#ModelImagePageModule', name: 'ModelImagePage', segment: 'model-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/model/model.module#ModelPageModule', name: 'ModelPage', segment: 'model', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myticket/myticket.module#MyticketPageModule', name: 'MyticketPage', segment: 'myticket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newfeed/newfeed.module#NewsfeedPageModule', name: 'NewsfeedPage', segment: 'newfeed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/postphoto-modal/postphoto-modal.module#PostphotoModalPageModule', name: 'PostphotoModalPage', segment: 'postphoto-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/postphoto/postphoto.module#PostphotoPageModule', name: 'PostphotoPage', segment: 'postphoto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preview/preview.module#PreviewPageModule', name: 'PreviewPage', segment: 'preview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/repassword/repassword.module#RepasswordPageModule', name: 'RepasswordPage', segment: 'repassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/review/review.module#ReviewPageModule', name: 'ReviewPage', segment: 'review', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/save-image/save-image.module#SaveImagePageModule', name: 'SaveImagePage', segment: 'save-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-newfeed/search-newfeed.module#SearchNewfeedPageModule', name: 'SearchNewfeedPage', segment: 'search-newfeed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/socialsharing/socialsharing.module#SocialsharingPageModule', name: 'SocialsharingPage', segment: 'socialsharing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash-load/splash-load.module#SplashLoadPageModule', name: 'SplashLoadPage', segment: 'splash-load', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/termsand-policy/termsand-policy.module#TermsandPolicyPageModule', name: 'TermsandPolicyPage', segment: 'termsand-policy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/traveler/traveler.module#TravelerPageModule', name: 'TravelerPage', segment: 'traveler', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ticket/ticket.module#TicketPageModule', name: 'TicketPage', segment: 'ticket', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__components_menu_right_menu_right__["a" /* MenuRightComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__services_globaldata_service__["a" /* GlobalDataService */],
                __WEBPACK_IMPORTED_MODULE_10__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */],
                __WEBPACK_IMPORTED_MODULE_9__services_ServiceHttp__["a" /* ServiceHttp */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_photo_library__["a" /* PhotoLibrary */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_app_availability__["a" /* AppAvailability */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_analytics_firebase__["a" /* AnalyticsFirebase */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_video_editor__["a" /* VideoEditor */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_34_ng_in_viewport__["c" /* InViewportService */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_app_version__["a" /* AppVersion */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_auth__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_firestore__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_ServiceFactoryThread__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var config = {
    apiKey: "AIzaSyCgCdlkt3XbZhT8jK0Xk2teiXrrZVzR_Bo",
    authDomain: "adventureearth-4343d.firebaseapp.com",
    databaseURL: "https://adventureearth-4343d.firebaseio.com",
    projectId: "adventureearth-4343d",
    storageBucket: "adventureearth-4343d.appspot.com",
    messagingSenderId: "145451048347",
};
var MyApp = /** @class */ (function () {
    function MyApp(SFT, storage, platform, statusBar, splashScreen, gd) {
        this.SFT = SFT;
        this.storage = storage;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.gd = gd;
        // rootPage:any = 'LoginPage';
        this.rootPage = "SplashLoadPage";
        this.initializeApp();
        __WEBPACK_IMPORTED_MODULE_6_firebase_app__["initializeApp"](config);
        // storage.get('email').then((val) => {
        //   console.log(val);
        //   if (val != null && val != '' && val != undefined) {
        //     storage.get('user_api_key').then((vall) => {
        //       if (vall != null) {
        //         this.SFT.user_api_key = vall;
        //         this.rootPage = 'TabsPage';
        //       }
        //     })
        //   } else {
        //     this.rootPage = 'LoginPage';
        //   }
        // })
        platform.ready().then(function () {
            console.log("platform width", platform.width());
            console.log("platform height", platform.height());
            statusBar.styleDefault();
            splashScreen.hide();
            if (window.indexedDB) {
                console.log("I have WKWebview installed!");
            }
            else {
                console.log("I have UIWebView installed!");
            }
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            setTimeout(function () {
                _this.splashScreen.hide();
            }, 1000);
        });
        // this.googleAnalyticsTrackingHandler();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__services_globaldata_service__["a" /* GlobalDataService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalDataService; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Firebase__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_auth__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_firestore__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_clipboard__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_push__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_analytics_firebase__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var GlobalDataService = /** @class */ (function () {
    function GlobalDataService(analyticsFirebase, alertCtrl, events, app, push, iab, geolocation, actionSheetCtrl, clipboard, sharingVar, popoverCtrl, fb, location, platform, toastCtrl, SFT) {
        var _this = this;
        this.analyticsFirebase = analyticsFirebase;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.app = app;
        this.push = push;
        this.iab = iab;
        this.geolocation = geolocation;
        this.actionSheetCtrl = actionSheetCtrl;
        this.clipboard = clipboard;
        this.sharingVar = sharingVar;
        this.popoverCtrl = popoverCtrl;
        this.fb = fb;
        this.location = location;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.SFT = SFT;
        this.version = "20201020";
        this.update_ver = '26';
        this.BASE_URL = "https://myadventureearth.com/";
        this.showbtn = 0;
        this.userProfile = [];
        this.numLoadmore = 0;
        this.ChekNetWork = true;
        this.status = true;
        this.checkmenu3 = 0;
        this.stCamera = true;
        this.sumNoti = 0;
        this.likeUser = [];
        this.idUserComment = [];
        this.notiAll = [];
        this.notiBase = 0;
        this.roomchat = [];
        this.countService = 0;
        this.goDetail = true;
        this.highlights = 1;
        this.posthighlight = [];
        this.clickGo = true;
        this.exploreTag = [];
        this.statusChooserCamera = 0;
        this.photoAll = [];
        this.newFeedFeeling = [];
        this.newFeedPlace = [];
        this.chooserShare = "";
        this.oldPage = '';
        this.albumAll = [];
        this.newFeedTextSearch = "";
        this.chatKeyLog = "";
        this.user_type_account = 0;
        //show Facebook button
        this.isShowFacebook = false;
        SFT.GCL().then(function (data) { console.log(data); });
        if (platform.is('ios')) {
            this.platformtype = "ios";
            this.bufferRatio = 5;
            this.platformNum = 2;
        }
        else {
            this.platformtype = "android";
            this.bufferRatio = 5;
            this.platformNum = 1;
        }
        setInterval(function () {
            SFT.GCL().then(function (data) { console.log(data); });
        }, 60000);
        this.chatinterval = setInterval(function () {
            _this.chat();
        }, 300000);
        platform.ready().then(function () {
            var t = _this;
            SFT.ServiceThread('check_version', { 'version': _this.version, 'update': _this.update_ver, 'paltform': _this.platformNum }, 'POST').then(function (data) {
                _this.isShowFacebook = (data['res_result'][0]['status_btn'] == 0) ? false : true;
                if (data['res_code'] == '01') {
                    swal({
                        title: "",
                        text: "Upgrade available for application",
                        type: "warning",
                        showCancelButton: false,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Update",
                        closeOnConfirm: false,
                        closeOnCancel: false
                    }, function (isConfirm) {
                        try {
                            // window.open(data['res_result'][0]['url'], '_system');
                            // console.log(`url is `, data['res_result'][0]['url']);
                            t.iab.create(data['res_result'][0]['url'], '_system');
                        }
                        catch (error) {
                            console.error(error);
                        }
                    });
                }
            });
            var options = {
                android: {
                    senderID: '145451048347',
                    sound: true
                },
                ios: {
                    badge: false,
                    sound: true,
                    alert: true,
                    clearBadge: true,
                    fcmSandbox: false,
                }
            };
            var pushObject = _this.push.init(options);
            var nav = _this.app.getActiveNav();
            // const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
            // .setDescription('My apps test channel');
            // firebase.notifications().android.createChannel(channel);
            console.log(platform);
            if (platform.is('cordova')) {
                console.log('cordova');
                _this.push.createChannel({
                    id: "testchannel1",
                    description: "My first test channel",
                    importance: 3
                }).then(function () { return console.log('Channel created'); });
            }
            pushObject.on('registration').subscribe(function (registration) {
                console.log(registration);
                _this.key = registration['registrationId'];
                if (_this.key != undefined) {
                    _this.regisNoti();
                }
                _this.alertCtrl.create({
                    title: 'Logged Out',
                    message: registration['registrationId'],
                });
                console.log('Device registered', registration);
            });
            _this.app.viewDidEnter.subscribe(function (evt) {
                setTimeout(function () {
                    console.log('changePage');
                    if (_this.oldPage != _this.location.path()) {
                        _this.analyticsFirebase.setCurrentScreen(_this.location.path())
                            .then(function () { return console.log('View successfully tracked'); })
                            .catch(function (err) { return console.log('Error tracking view:', err); });
                        // this.googleAnalyticsService.trackPagesHandler(this.location.path());
                        _this.oldPage = _this.location.path();
                    }
                }, 1000);
            });
            pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
            pushObject.on('notification').subscribe(function (data) {
                // this.version = '555585';
                _this.events.publish('logNoti', data);
                var path = _this.location.path().split('/');
                console.log('---------------------------- Notification ----------------------------');
                console.log(data);
                console.log('---------------------------- Notification ----------------------------');
                if (data.additionalData['coldstart']) {
                    // alert(JSON.parse(data["additionalData"]));
                    console.log('notification coldstart', data.additionalData);
                    var dataSend_1;
                    var typeNoti_1;
                    if (platform.is('ios')) {
                        typeNoti_1 = JSON.parse(data["additionalData"]['gcm.notification.moreData']).typeNoti;
                        dataSend_1 = {
                            data: JSON.parse(data["additionalData"]['gcm.notification.moreData']),
                            key: JSON.parse(data["additionalData"]['gcm.notification.moreData']).key,
                            imguser: JSON.parse(data["additionalData"]['gcm.notification.moreData']).imguser
                        };
                        setTimeout(function () {
                            if (typeNoti_1 == "comment") {
                                _this.events.publish('notilike', JSON.parse(data["additionalData"]['gcm.notification.moreData']));
                            }
                            else if (typeNoti_1 == "like") {
                                _this.events.publish('notilike', JSON.parse(data["additionalData"]['gcm.notification.moreData']));
                            }
                            else if (typeNoti_1 == "follow") {
                                _this.events.publish('notifollow', JSON.parse(data["additionalData"]['gcm.notification.moreData']));
                            }
                            else if (typeNoti_1 == "chat") {
                                _this.events.publish('chat', dataSend_1);
                                console.log("%c ios chat coldstart", "color:green");
                            }
                        }, 5000);
                    }
                    else {
                        typeNoti_1 = data["additionalData"]["moreData"]['typeNoti'];
                        setTimeout(function () {
                            if (typeNoti_1 == "comment") {
                                _this.events.publish('notilike', data["additionalData"]["moreData"]);
                            }
                            else if (typeNoti_1 == "like") {
                                _this.events.publish('notilike', data["additionalData"]["moreData"]);
                            }
                            else if (typeNoti_1 == 'follow') {
                                _this.events.publish('notifollow', data["additionalData"]["moreData"]);
                            }
                            else if (typeNoti_1 == 'chat') {
                                dataSend_1 = {
                                    data: data["additionalData"]["moreData"],
                                    key: data["additionalData"]['moreData']['key'],
                                    imguser: data["additionalData"]['data']['imguser']
                                };
                                _this.events.publish('chat', dataSend_1);
                                console.log("%c android chat coldstart", "color:green");
                            }
                        }, 5000);
                    }
                }
                else if (data.additionalData['foreground']) {
                    // alert(JSON.parse(data["additionalData"]['gcm.notification.data']).typeNoti);
                    console.log('notification foreground', data.additionalData);
                    _this.chat().then(function (data) {
                        // this.sumNoti = data;
                    });
                    var t_1 = _this;
                    if (platform.is('ios')) {
                        // alert(JSON.stringify(data["title"]));
                        if (JSON.parse(data["additionalData"]['gcm.notification.moreData']).typeNoti == "comment") {
                            _this.get_noti('new');
                            console.log('ios push notification data', data);
                            console.log('ios push notification message', data.message);
                            console.log('ios JSON Data', JSON.parse(data["additionalData"]['gcm.notification.moreData']));
                            var app_1 = new Framework7();
                            var notificationCallbackOnClose = app_1.notification.create({
                                icon: '<i class=" iconPHY2"></i>',
                                title: 'Adventure Earth - Thailand',
                                titleRightText: 'now',
                                // text: "<b>" + data["title"] + "</b> Comment Your Post.",
                                text: "<b>" + data.message + "</b>",
                                closeOnClick: true,
                                closeTimeout: 10000,
                                on: {
                                    click: function () {
                                        t_1.events.publish('notilike', JSON.parse(data["additionalData"]['gcm.notification.moreData']));
                                    },
                                },
                            });
                            notificationCallbackOnClose.open();
                        }
                        else if (JSON.parse(data["additionalData"]['gcm.notification.moreData']).typeNoti == "like") {
                            _this.get_noti('new');
                            var app_2 = new Framework7();
                            var notificationCallbackOnClose = app_2.notification.create({
                                icon: '<i class=" iconPHY2"></i>',
                                title: 'Adventure Earth - Thailand',
                                titleRightText: 'now',
                                text: "<b>" + data["title"] + "</b> Like Your Post.",
                                closeOnClick: true,
                                closeTimeout: 10000,
                                on: {
                                    click: function () {
                                        t_1.events.publish('notilike', JSON.parse(data["additionalData"]['gcm.notification.moreData']));
                                    },
                                },
                            });
                            notificationCallbackOnClose.open();
                        }
                        else if (JSON.parse(data["additionalData"]['gcm.notification.moreData']).typeNoti == "follow") {
                            _this.get_noti('new');
                            var app_3 = new Framework7();
                            var notificationCallbackOnClose = app_3.notification.create({
                                icon: '<i class=" iconPHY2"></i>',
                                title: 'Adventure Earth - Thailand',
                                titleRightText: 'now',
                                text: "<b>" + data["title"] + "</b> Followers Your.",
                                closeOnClick: true,
                                closeTimeout: 10000,
                                on: {
                                    click: function () {
                                        t_1.events.publish('notifollow', JSON.parse(data["additionalData"]['gcm.notification.moreData']));
                                    },
                                },
                            });
                            notificationCallbackOnClose.open();
                        }
                        else if (JSON.parse(data["additionalData"]['gcm.notification.moreData']).typeNoti == "buyPacket") {
                            _this.get_noti('new');
                            var app_4 = new Framework7();
                            var notificationCallbackOnClose = app_4.notification.create({
                                icon: '<i class=" iconPHY2"></i>',
                                title: 'Adventure Earth - Thailand',
                                titleRightText: 'now',
                                text: "<b>" + data["title"] + "</b> buy your tour.",
                                closeOnClick: true,
                                closeTimeout: 10000,
                                on: {
                                    click: function () {
                                        t_1.events.publish('notifollow', JSON.parse(data["additionalData"]['gcm.notification.moreData']));
                                    }
                                },
                            });
                            notificationCallbackOnClose.open();
                        }
                        else if (JSON.parse(data["additionalData"]['gcm.notification.moreData']).typeNoti == "chat") {
                            var app_5 = new Framework7();
                            var notificationCallbackOnClose = app_5.notification.create({
                                icon: '<i class=" iconPHY2"></i>',
                                title: 'Adventure Earth - Thailand',
                                titleRightText: 'now',
                                text: "<b>" + data["title"] + "</b> Sent you a message.",
                                closeOnClick: true,
                                closeTimeout: 10000,
                                on: {
                                    click: function () {
                                        var datasend = {
                                            data: JSON.parse(data["additionalData"]['gcm.notification.moreData']),
                                            key: JSON.parse(data["additionalData"]['gcm.notification.moreData']).key,
                                            imguser: JSON.parse(data["additionalData"]['gcm.notification.moreData']).imguser
                                        };
                                        t_1.events.publish('chat', datasend);
                                        console.log("%c ios chat foreground", "color:green");
                                    }
                                },
                            });
                            if (path[(path.length) - 1] != 'chat' && _this.chatKeyLog != JSON.parse(data["additionalData"]['gcm.notification.moreData']).key) {
                                notificationCallbackOnClose.open();
                                _this.get_noti('new');
                            }
                        }
                    }
                    else {
                        if (data["additionalData"]["moreData"]['typeNoti'] == "comment") {
                            _this.get_noti('new');
                            var app_6 = new Framework7();
                            console.log('android push notification data', data);
                            console.log('android push notification message', data.message);
                            console.log('android JSON Data', JSON.parse(data["additionalData"]['gcm.notification.moreData']));
                            var notificationCallbackOnClose = app_6.notification.create({
                                icon: '<i class=" iconPHY2"></i>',
                                title: 'Adventure Earth - Thailand',
                                titleRightText: 'now',
                                text: "<b>" + data.message + "</b>",
                                closeOnClick: true,
                                closeTimeout: 10000,
                                on: {
                                    click: function () {
                                        t_1.events.publish('notilike', data["additionalData"]["moreData"]);
                                    },
                                },
                            });
                            notificationCallbackOnClose.open();
                        }
                        else if (data["additionalData"]["moreData"]['typeNoti'] == "like") {
                            _this.get_noti('new');
                            var app_7 = new Framework7();
                            var notificationCallbackOnClose = app_7.notification.create({
                                icon: '<i class=" iconPHY2"></i>',
                                title: 'Adventure Earth - Thailand',
                                titleRightText: 'now',
                                text: "<b>" + data["title"] + "</b> Like Your Post.",
                                closeOnClick: true,
                                closeTimeout: 10000,
                                on: {
                                    click: function () {
                                        t_1.events.publish('notilike', data["additionalData"]["moreData"]);
                                    },
                                },
                            });
                            notificationCallbackOnClose.open();
                        }
                        else if (data["additionalData"]["moreData"]['typeNoti'] == "follow") {
                            _this.get_noti('new');
                            var app_8 = new Framework7();
                            var notificationCallbackOnClose = app_8.notification.create({
                                icon: '<i class=" iconPHY2"></i>',
                                title: 'Adventure Earth - Thailand',
                                titleRightText: 'now',
                                text: "<b>" + data["title"] + "</b> Followers Your.",
                                closeOnClick: true,
                                closeTimeout: 10000,
                                on: {
                                    click: function () {
                                        t_1.events.publish('notifollow', data["additionalData"]["moreData"]);
                                    },
                                },
                            });
                            notificationCallbackOnClose.open();
                        }
                        else if (data["additionalData"]["moreData"]['typeNoti'] == "buyPacket") {
                            _this.get_noti('new');
                            var app_9 = new Framework7();
                            var notificationCallbackOnClose = app_9.notification.create({
                                icon: '<i class=" iconPHY2"></i>',
                                title: 'Adventure Earth - Thailand',
                                titleRightText: 'now',
                                text: "<b>" + data["title"] + "</b> Followers Your.",
                                closeOnClick: true,
                                closeTimeout: 10000,
                                on: {
                                    click: function () {
                                        t_1.events.publish('notifollow', data["additionalData"]["moreData"]);
                                    },
                                },
                            });
                            notificationCallbackOnClose.open();
                        }
                        else if (data["additionalData"]["moreData"]['typeNoti'] == "chat") {
                            var app_10 = new Framework7();
                            // let t = this;
                            var notificationCallbackOnClose = app_10.notification.create({
                                icon: '<i class=" iconPHY2"></i>',
                                title: 'Adventure Earth - Thailand',
                                titleRightText: 'now',
                                text: "<b>" + data["title"] + "</b> Sent you a message.",
                                closeOnClick: true,
                                closeTimeout: 10000,
                                on: {
                                    click: function () {
                                        var datasend = {
                                            data: data["additionalData"]["moreData"],
                                            key: data["additionalData"]['moreData']['key'],
                                            imguser: data["additionalData"]['moreData']['imguser']
                                        };
                                        t_1.events.publish('chat', datasend);
                                        console.log("%c android chat foreground", "color:green");
                                    },
                                },
                            });
                            if (path[(path.length) - 1] != 'chat' && _this.chatKeyLog != data["additionalData"]['moreData']['key']) {
                                notificationCallbackOnClose.open();
                                _this.get_noti('new');
                            }
                        }
                    }
                }
                else {
                    console.log('notification not coldstart and foreground', data.additionalData);
                    _this.chat().then(function (data) {
                        // this.sumNoti = data;
                    });
                    var datasend = void 0;
                    var typeNoti 
                    // this.get_noti('new');
                    = void 0;
                    // this.get_noti('new');
                    if (platform.is('ios')) {
                        typeNoti = JSON.parse(data["additionalData"]['gcm.notification.moreData']).typeNoti;
                        datasend = {
                            data: JSON.parse(data["additionalData"]['gcm.notification.moreData']),
                            key: JSON.parse(data["additionalData"]['gcm.notification.moreData']).key,
                            imguser: JSON.parse(data["additionalData"]['gcm.notification.moreData']).imguser
                        };
                        if (typeNoti == "comment") {
                            _this.events.publish('notilike', JSON.parse(data["additionalData"]['gcm.notification.moreData']));
                        }
                        else if (typeNoti == "like") {
                            _this.events.publish('notilike', JSON.parse(data["additionalData"]['gcm.notification.moreData']));
                        }
                        else if (typeNoti == "follow") {
                            _this.events.publish('notifollow', JSON.parse(data["additionalData"]['gcm.notification.moreData']));
                        }
                        else if (typeNoti == "chat") {
                            _this.events.publish('chat', datasend);
                            console.log("%c ios chat else", "color:green");
                        }
                    }
                    else {
                        typeNoti = data["additionalData"]["moreData"]['typeNoti'];
                        if (typeNoti == 'comment') {
                            _this.events.publish('notilike', data["additionalData"]["moreData"]);
                        }
                        else if (typeNoti == 'like') {
                            _this.events.publish('notilike', data["additionalData"]["moreData"]);
                        }
                        else if (typeNoti == 'follow') {
                            _this.events.publish('notifollow', data["additionalData"]["moreData"]);
                        }
                        else if (typeNoti == 'chat') {
                            datasend = {
                                data: data["additionalData"]["moreData"],
                                key: data["additionalData"]['moreData']['key'],
                                imguser: data["additionalData"]['moreData']['imguser']
                            };
                            _this.events.publish('chat', datasend);
                            console.log("%c android chat else", "color:green");
                        }
                    }
                }
            });
        });
        var backButtonPressedOnceToExit;
        this.platform.registerBackButtonAction(function (e) {
            var nav = _this.app.getActiveNav();
            var path = _this.location.path().split('/');
            // // console.log(path);
            // // console.log(this.location.path().split('/tabs/tab-3'));
            if (path[(path.length) - 1] == 'chat') {
                // // console.log("chatttttttttttttt");
                __WEBPACK_IMPORTED_MODULE_5_jquery__('#footer').show();
                __WEBPACK_IMPORTED_MODULE_5_jquery__('.tabbar').show().css('display', 'flex');
                __WEBPACK_IMPORTED_MODULE_5_jquery__('#sendmessage').css('display', 'none');
                nav.pop();
            }
            else if (_this.location.path() == '/login') {
                if (backButtonPressedOnceToExit) {
                    _this.platform.exitApp();
                }
                else {
                    backButtonPressedOnceToExit = true;
                    _this.toast("Press back button again to exit");
                    setTimeout(function () {
                        backButtonPressedOnceToExit = false;
                    }, 2000);
                }
            }
            else if (_this.location.path() == '/tabs/home/newsfeed' || _this.location.path() == '/tabs/connect-with-traveler/traveler' || _this.location.path() == '/tabs/what-to-do/bookings' || _this.location.path() == '/tabs/share-your-freedom/camera') {
                // // console.log($('ion-tab[aria-hidden="false"] page-newsfeed'));
                if (__WEBPACK_IMPORTED_MODULE_5_jquery__('ion-tab[aria-hidden="false"] page-newsfeed').length > 1) {
                    nav.pop();
                }
                else {
                    if (backButtonPressedOnceToExit) {
                        _this.platform.exitApp();
                    }
                    else {
                        backButtonPressedOnceToExit = true;
                        _this.toast("Press back button again to exit");
                        setTimeout(function () {
                            backButtonPressedOnceToExit = false;
                        }, 2000);
                    }
                }
            }
            else if (_this.location.path() == '/tabs/tab-2/camera') {
                __WEBPACK_IMPORTED_MODULE_5_jquery__('ion-backdrop').click();
                // this.storage.get('tab').then((val) => {
                //   // console.log(val);
                //   nav.parent.select(Number(val));
                // });
            }
            else {
                nav.pop();
            }
        });
        SFT.ServiceThread('feeling', {}, 'GET')
            .then(function (data) {
            if (data['res_code'] == '00') {
                _this.feeling = data['res_result'];
                // // console.log(this.feeling);
            }
            else {
                // console.log(data['res_text']);
            }
        });
        SFT.ServiceThread('highlights', {}, 'GET')
            .then(function (data) {
            if (data['res_code'] == '00') {
                _this.highlights = data['res_result'];
                // // console.log(this.feeling);
            }
            else {
                // console.log(data['res_text']);
            }
        });
        SFT.ServiceThread('country', {}, 'GET')
            .then(function (data) {
            if (data['res_code'] == '00') {
                _this.Country = data['res_result'];
            }
            else {
                // console.log(data['res_text']);
                // this.toast(data['res_text'])
            }
        });
        SFT.ServiceThread('travel', {}, 'GET')
            .then(function (data) {
            if (data['res_code'] == '00') {
                _this.travel = data['res_result'];
                // // console.log(this.travel);
            }
            else {
                // console.log(data['res_text']);
            }
        });
        SFT.ServiceThread('tag', {}, 'GET')
            .then(function (data) {
            if (data['res_code'] == '00') {
                _this.tag = data['res_result'];
                // // console.log(this.travel);
            }
            else {
                // console.log(data['res_text']);
            }
        });
        SFT.ServiceThread('feelingTx', {}, 'GET')
            .then(function (data) {
            if (data['res_code'] == '00') {
                _this.feelingTx = data['res_result'];
                _this.feelingNew = data['res_result'];
                _this.newFeedFeeling = data['res_resultNew'];
                _this.newFeedFeeling.push({ feeling_tx_id: "All", feeling_tx_name: "All" });
            }
            else {
                // console.log(data['res_text']);
            }
        });
        SFT.ServiceThread('TypeLocation', {}, 'GET')
            .then(function (data) {
            if (data['res_code'] == '00') {
                _this.TypeLocation = data['res_result'];
                _this.newFeedPlace = data['res_resultNew'];
                _this.newFeedPlace.push({ TypeLocation_id: 'All', TypeLocation_name: "All" });
                // // console.log(this.TypeLocation);
            }
            else {
                // console.log(data['res_text']);
            }
        });
    }
    GlobalDataService.prototype.notiShow = function (data) {
        var t = this;
        var app = new Framework7();
        var notificationCallbackOnClose = app.notification.create({
            icon: '<i class=" iconPHY2"></i>',
            title: 'Adventure Earth - Thailand',
            titleRightText: 'now',
            text: "<b>" + data["title"] + "</b> Sent you a message.",
            closeOnClick: true,
            closeTimeout: 10000,
            on: {
                click: function () {
                    var datasend = {
                        data: data,
                        key: data.key,
                        imguser: data.imguser
                    };
                    t.events.publish('chat', datasend);
                }
            },
        });
        // if (path[(path.length) - 1] != 'chat' && this.chatKeyLog != JSON.parse(data["additionalData"]['gcm.notification.moreData']).key) {
        notificationCallbackOnClose.open();
        // }
    };
    GlobalDataService.prototype.get_noti = function (type) {
        var _this = this;
        console.log(type);
        console.log(this.userProfile["user_id"]);
        if (type == "new") {
            this.notiAll = [];
            this.numLoadmore = 0;
            this.notiBase = 0;
        }
        if (this.userProfile["user_id"] != undefined) {
            var datasend = {
                'user_id': this.userProfile["user_id"],
                'widthphone': __WEBPACK_IMPORTED_MODULE_5_jquery__('ng-component').width(),
                'lat': '',
                'lng': '',
                'numLoad': this.numLoadmore,
            };
            this.SFT.ServiceThread("get_noti", datasend, "POST").then(function (data) {
                // console.log(data);
                if (data["res_code"] == '00') {
                    _this.numLoadmore++;
                    // console.log(this.notiAll);
                    data["res_result"].forEach(function (element) {
                        // console.log(element);
                        // console.log(this.notiAll.map((el) => el.noti_id).indexOf(element["noti_id"]));
                        if (_this.notiAll.map(function (el) { return el.noti_id; }).indexOf(element["noti_id"]) == -1) {
                            // console.log(element);
                            if (element["noti_read_all"] == '0') {
                                _this.notiBase++;
                                console.log(_this.notiBase);
                                _this.sumNoti = parseInt(_this.notiBase); //count notification
                            }
                            // if (type == "new") {
                            // this.notiAll.unship(element);
                            // } else {
                            _this.notiAll.push(element);
                            // }
                        }
                    });
                }
            });
            // console.log(datasend);
        }
    };
    GlobalDataService.prototype.convertToDataURLviaCanvas = function (url, outputFormat) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = function () {
                var canvas = document.createElement('CANVAS'), ctx = canvas.getContext('2d'), dataURL;
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img, 0, 0);
                dataURL = canvas.toDataURL(outputFormat);
                resolve(dataURL);
                canvas = null;
            };
            img.src = url;
        });
    };
    GlobalDataService.prototype.openChooserApp = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var actionSheet = _this.actionSheetCtrl.create({
                title: 'Choose Application',
                enableBackdropDismiss: false,
                buttons: [
                    // {
                    //     text: 'Camera',
                    //     cssClass: "setting_img",
                    //     handler: () => {
                    //         // this.takePicture();
                    //         resolve(1);
                    //     }
                    // },
                    {
                        text: 'Library',
                        cssClass: "setting_img",
                        handler: function () {
                            // this.libraryImage();
                            resolve(2);
                        }
                    },
                    {
                        text: 'Video',
                        cssClass: "setting_img",
                        handler: function () {
                            // this.libraryImage();
                            resolve(3);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                            resolve(4);
                        }
                    }
                ]
            });
            actionSheet.present();
        });
    };
    GlobalDataService.prototype.nextpage = function (navCtrl, page, data) {
        var _this = this;
        console.log(data);
        if (this.ChekNetWork) {
            // this.gpsLocation();
            setTimeout(function () {
                if (_this.status == true) {
                    navCtrl.push(page, data, { animate: true, direction: 'forward', isNavRoot: true });
                    navCtrl.swipeBackEnabled = false;
                }
            }, 10);
        }
        else {
            this.toast('Connection failure, please try again later');
        }
    };
    GlobalDataService.prototype.nextrootpage = function (navCtrl, page, data) {
        var _this = this;
        console.log(data);
        if (this.ChekNetWork) {
            // this.gpsLocation();
            setTimeout(function () {
                if (_this.status == true) {
                    navCtrl.setRoot(page, data, { animate: true, direction: 'forward', isNavRoot: true });
                    navCtrl.swipeBackEnabled = true;
                }
            }, 10);
        }
        else {
            this.toast('Connection failure, please try again later');
        }
    };
    GlobalDataService.prototype.toast = function (text) {
        // // console.log(text);
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    GlobalDataService.prototype.regisLogout = function () {
        var _this = this;
        this.SFT.ServiceThread('userLogout', { device_uuid: this.key }, 'POST')
            .then(function (data) {
            if (data['res_code'] == '00') {
                _this.feelingTx = data['res_result'];
            }
            else {
                // console.log(data['res_text']);
            }
        });
    };
    GlobalDataService.prototype.regisNoti = function () {
        var _this = this;
        console.log(this.key);
        this.SFT.ServiceThread('regisnoti', { device_uuid: this.key, device_platform: this.platformtype }, 'POST')
            .then(function (data) {
            if (data['res_code'] == '00') {
                _this.feelingTx = data['res_result'];
            }
            else {
                // console.log(data['res_text']);
            }
        });
    };
    GlobalDataService.prototype.selectData = function (data) {
        var _this = this;
        this.SFT.ServiceThread('TAGExplore', { 'user_id': 78 }, 'POST')
            .then(function (data) {
            if (data['res_code'] == '00') {
                _this.myTag = data['res_result'];
            }
        });
        this.SFT.ServiceThread('Recent', { 'user_id': data['user_id'] }, 'POST')
            .then(function (data) {
            if (data['res_code'] == '00') {
                _this.Recent = data['res_result'];
            }
        });
        this.SFT.ServiceThread('follow', { 'user_id': data['user_id'] }, 'POST')
            .then(function (data) {
            if (data['res_code'] == '00') {
                _this.userProfile['followers'] = data['res_result'][0]['followers'];
                _this.userProfile['following'] = data['res_result'][0]['following'];
            }
        });
    };
    GlobalDataService.prototype.saveLog = function (activity, data) {
        var _this = this;
        // // console.log(data);
        setTimeout(function () {
            var dataFeeling;
            var page = _this.location.path().split('/');
            if (activity == 'fillter') {
                console.log(data);
                data["filter"] = data["filter"].trim();
                if (data["filter"] == 'feeling') {
                    dataFeeling = {
                        'user_id': _this.userProfile["user_id"],
                        'page': page[page.length - 1],
                        'activity': activity,
                        'detail': data["filter"],
                        'feelings': data["datapage_id"],
                    };
                }
                else if (data["filter"] == 'places') {
                    dataFeeling = {
                        'user_id': _this.userProfile["user_id"],
                        'page': page[page.length - 1],
                        'activity': activity,
                        'detail': data["filter"],
                        'places': data["datapage_id"]
                    };
                }
                else if (data["filter"] == 'Following') {
                    dataFeeling = {
                        'user_id': _this.userProfile["user_id"],
                        'page': page[page.length - 1],
                        'activity': activity,
                        'detail': data["filter"]
                    };
                }
                else if (data["filter"] == 'preference') {
                    dataFeeling = {
                        'user_id': _this.userProfile["user_id"],
                        'page': page[page.length - 1],
                        'activity': activity,
                        'detail': data["filter"],
                        'feeling': data["datapage_id"]
                    };
                }
                else if (data["filter"] == 'My Current Location' || data["filter"] == 'Destination') {
                    dataFeeling = {
                        'user_id': _this.userProfile["user_id"],
                        'page': page[page.length - 1],
                        'activity': activity,
                        'detail': data["filter"],
                        'location': data["datapage_id"]
                    };
                }
            }
            else if (activity == 'Go' || activity == 'shear') {
                dataFeeling = {
                    'user_id': _this.userProfile["user_id"],
                    'page': page[page.length - 1],
                    'activity': activity,
                    'postID': data["photo_id"],
                    'caption': data["photo_caption"],
                    'places': data["TypeLocation_id"],
                    'feelings': data["feeling_id"],
                    'location': data["photo_la"] + "," + data["photo_long"],
                    'province': data["photo_province"],
                };
            }
            else if (activity == 'share') {
                dataFeeling = {
                    'user_id': _this.userProfile["user_id"],
                    'page': data["photo_id"],
                    'user': data["user_id"],
                    'activity': activity,
                    'caption': data["photo_caption"],
                    'places': data["TypeLocation_id"],
                    'feelings': data["feeling_id"],
                    'location': data["photo_la"] + "," + data["photo_long"],
                    'province': data["photo_province"],
                    'detail': data["shareType"]
                };
            }
            _this.SFT.ServiceThread('log', dataFeeling, 'POST')
                .then(function (data) {
                if (data['res_code'] == '00') {
                    // // console.log(data);
                }
                else {
                    // console.log(data['res_text']);
                }
            });
        }, 1000);
    };
    GlobalDataService.prototype.startExternalMap = function (data) {
        var _this = this;
        console.log(data);
        if (this.platformtype == 'ios') {
            var actionSheet = this.actionSheetCtrl.create({
                buttons: [
                    {
                        text: 'Open in Google Maps',
                        cssClass: "setting_img",
                        handler: function () {
                            _this.geolocation.getCurrentPosition().then(function (position) {
                                // window.open('https://www.google.com/maps/?daddr=' + data.latitude + ',' + data.longitude, '_system');
                                _this.iab.create('https://www.google.com/maps/?daddr=' + data.latitude + ',' + data.longitude, '_system');
                            }, function (err) {
                            });
                        }
                    }, {
                        text: 'Open in Maps',
                        cssClass: "setting_img",
                        handler: function () {
                            _this.geolocation.getCurrentPosition().then(function (position) {
                                _this.iab.create('maps://?q=' + data.name + '&saddr=' + position.coords.latitude + ',' + position.coords.longitude + '&daddr=' + data.latitude + ',' + data.longitude, '_system');
                            }, function (err) {
                            });
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            this.geolocation.getCurrentPosition().then(function (position) {
                // window.open('geo://' + position.coords.latitude + ',' + position.coords.longitude + '?q=' + data.latitude + ',' + data.longitude + '(' + data.name + ')', '_system');
                _this.iab.create('geo://' + position.coords.latitude + ',' + position.coords.longitude + '?q=' + data.latitude + ',' + data.longitude + '(' + data.name + ')', '_system');
            }, function (err) {
            });
        }
    };
    GlobalDataService.prototype.chat = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.SFT.ServiceThread('messageroom', {}, 'POST').then(function (data) {
                _this.roomchat = [];
                if (data['res_code'] == '00') {
                    _this.roomchat = data['res_result'];
                    var sum_1 = 0;
                    var _loop_1 = function (index) {
                        __WEBPACK_IMPORTED_MODULE_4_Firebase__["database"]().ref('chatrooms/' + _this.roomchat[index]['room_name'] + '/chats').once('value', function (resp) {
                            var keyChat = snapshotToArray(resp);
                            _this.roomchat[index]['message'] = keyChat;
                            keyChat = keyChat.filter(function (message) { return message.status === '0' && message.id === _this.roomchat[index]['user_id']; });
                            _this.roomchat[index]['noread'] = keyChat.length;
                            // sum += keyChat.length;
                            if (_this.roomchat.length - 1 === index) {
                                _this.countService++;
                                resolve(sum_1);
                            }
                        });
                    };
                    for (var index = 0; index < _this.roomchat.length; index++) {
                        _loop_1(index);
                    }
                    console.log(_this.roomchat);
                }
                else {
                    resolve(0);
                }
            });
        });
    };
    GlobalDataService.prototype.getFollow = function (UID) {
        var _this = this;
        this.SFT.ServiceThread('GetFollow', { user_id: UID }, 'POST')
            .then(function (data) {
            if (data['res_code'] == '00') {
                _this.userProfile["followers"] = data["res_result"]["followers"];
                _this.userProfile["following"] = data["res_result"]["following"];
            }
        });
    };
    GlobalDataService.prototype.presentPopover = function (myEvent, data) {
        var _this = this;
        // console.log(`data before share`,data);
        __WEBPACK_IMPORTED_MODULE_5_jquery__('body').addClass('rightMenu');
        __WEBPACK_IMPORTED_MODULE_5_jquery__('body').addClass('share');
        var popover = this.popoverCtrl.create('SocialsharingPage');
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (id) {
            // // console.log(id);
            __WEBPACK_IMPORTED_MODULE_5_jquery__('body').removeClass('share');
            if (id == 1) {
                _this.facebookShare(data);
            }
            else if (id == 2) {
                _this.Message(data);
            }
            else if (id == 3) {
                _this.Twitter(data);
            }
            else if (id == 4) {
                _this.Line(data);
            }
            else if (id == 5) {
                _this.Email(data);
            }
            else if (id == 6) {
                _this.MessageFB(data);
            }
            // this.facebookShare();
        });
    };
    GlobalDataService.prototype.facebookShare = function (data) {
        var _this = this;
        var dataT = {
            method: "feed",
            href: data['linkshared'],
            caption: "Such caption, very feed."
        };
        this.fb.showDialog(dataT).then(function () {
            // console.log("Success");
            data["shareType"] = 'facebook';
            _this.saveLog('share', data);
        }).catch(function (err) {
            _this.toast('No results were found for Application');
            console.log(err);
        });
    };
    GlobalDataService.prototype.Message = function (data) {
        var _this = this;
        this.sharingVar.shareViaSMS(data['linkshared'], "").then(function () {
            // console.log("shareViaSMS: Success");
            data["shareType"] = 'Message';
            _this.saveLog('share', data);
        }).catch(function (err) {
            // console.log(err);
            console.error("shareViaSMS: failed");
        });
    };
    GlobalDataService.prototype.MessageFB = function (data) {
        var _this = this;
        // console.log('messageFB');
        if (this.platformtype == 'ios') {
            var datat = {
                method: "send",
                link: data['linkshared']
            };
            this.fb.showDialog(datat).then(function () {
                // console.log("Success");
                data["shareType"] = 'MessageFB';
                _this.saveLog('share', data);
            }).catch(function (err) {
                _this.toast('No results were found for Application');
                // console.log(err);
            });
        }
        else {
            this.sharingVar.shareVia('com.facebook.orca', 'The message', null, null, data['linkshared']).then(function () {
                // console.log("Success");
                data["shareType"] = 'MessageFB';
                _this.saveLog('share', data);
            }).catch(function (err) {
                _this.toast('No results were found for Application');
                // console.log(err);
            });
        }
    };
    GlobalDataService.prototype.Twitter = function (data) {
        var _this = this;
        this.sharingVar.shareViaTwitter("", "", data['linkshared']).then(function () {
            data["shareType"] = 'Twitter';
            _this.saveLog('share', data);
        }).catch(function (err) {
            _this.toast('No results were found for Application');
            console.error("shareViaTwitter: failed");
        });
    };
    GlobalDataService.prototype.Line = function (data) {
        var _this = this;
        this.clipboard.copy(data['linkshared']).then(function () {
            _this.toast('clipboard copy: Success');
        }).catch(function (err) {
            _this.toast('clipboard copy: failed');
            console.error("clipboard copy: failed");
        });
    };
    GlobalDataService.prototype.Email = function (data) {
        this.sharingVar.shareViaEmail(data['linkshared'], '', [], null, null, null).then(function () {
        }).catch(function (err) {
        });
    };
    GlobalDataService.prototype.sendNoti = function (room, id, message, username, data) {
        var _this = this;
        return new Promise(function (resolve) {
            // console.log(data);
            _this.SFT.ServiceThread('sendnoti', { user_id: data.user_id, roomID: room, member_id: id, message: message, username: username, data: JSON.stringify(data) }, 'POST')
                // this.serviceFactoryThread.ServiceThread('sendnoti', { roomID: room, member_id: id, message: message, username: username}, 'POST')
                .then(function (data) {
                resolve(data['res_code']);
                if (data['res_code'] == '00') {
                    _this.feelingTx = data['res_result'];
                }
                else {
                    // console.log(data['res_text']);
                }
            });
        });
    };
    GlobalDataService.prototype.ValidateEmail = function (mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true);
        }
        return (false);
    };
    GlobalDataService.prototype.checklength = function (valus, Nlength) {
        console.log(valus, Nlength);
        if (valus.length >= Nlength) {
            return true;
        }
        return (false);
    };
    GlobalDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_14__ionic_native_analytics_firebase__["a" /* AnalyticsFirebase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_clipboard__["a" /* Clipboard */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__ServiceFactoryThread__["a" /* ServiceFactoryThread */]])
    ], GlobalDataService);
    return GlobalDataService;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=globaldata.service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceFactoryThread; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ServiceHttp__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ServiceFactoryThread = /** @class */ (function () {
    function ServiceFactoryThread(storage, alertCtrl, diagnostic, geolocation, sh, loadingCtrl, platform) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.sh = sh;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.count = 0;
        this.status = true;
        this.stLoad = true;
        this.user_api_key = '';
        this.chkcount = 0;
        this.STLogin = false;
        this.LoadMoreLimit = 20;
        // userlocation: any = { 'lat': '13.908251799999999', 'long': '100.5566265' };
        this.statusLoad = true;
        this.userlocation = { 'lat': '', 'long': '' };
        this.loadder = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n            <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\n              ",
        });
    }
    ServiceFactoryThread.prototype.Chk_Open_GPS = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.platform.is('cordova')) {
                _this.diagnostic.isLocationEnabled().then(function (data) {
                    if (data == false) {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Your location can not be determined.',
                            message: "Please turn on GPS.",
                            buttons: [
                                {
                                    text: 'OK',
                                    role: 'OK',
                                    handler: function () {
                                        _this.chkcount = 0;
                                    }
                                }
                            ]
                        });
                        if (_this.chkcount == 0) {
                            alert_1.present();
                            _this.chkcount = 1;
                        }
                    }
                    _this.status = data;
                    resolve(data);
                });
            }
            resolve(true);
        });
    };
    // Get_Current_Location
    ServiceFactoryThread.prototype.GCL = function () {
        var _this = this;
        console.log('Get_Current_Location');
        return new Promise(function (resolve) {
            _this.Chk_Open_GPS().then(function (data) {
                if (data == true) {
                    console.log('test-*-*-');
                    _this.geolocation.getCurrentPosition().then(function (position) {
                        console.log(position);
                        var dataSend = {
                            'lat': position["coords"]["latitude"],
                            'long': position["coords"]["longitude"]
                        };
                        _this.userlocation = dataSend;
                        // this.userlocation = { 'lat': '', 'long': '' };
                        // if (this.STLogin) {
                        _this.ServiceThread('savelocation', dataSend, 'POST').then(function (data) { });
                        // }
                        resolve(position);
                    }, function (err) {
                        console.error(err);
                    });
                }
            });
        });
    };
    ServiceFactoryThread.prototype.loading_present = function (url) {
        console.log(url);
        if (this.count == 0 && this.statusLoad) {
            this.loading_dismiss();
            this.loadder = this.loadingCtrl.create({
                spinner: 'hide',
                content: "<div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>",
            });
            this.loadder.present();
            this.statusLoad = false;
            // this.loading_dismiss();
        }
        this.count++;
        console.log(url + ' loading_present -> ' + this.count);
    };
    ServiceFactoryThread.prototype.loading_dismiss = function () {
        var _this = this;
        var interval = setInterval(function () {
            if (_this.count == 0) {
                try {
                    _this.loadder.dismissAll();
                    _this.statusLoad = true;
                }
                catch (error) {
                    console.log(error);
                }
                clearInterval(interval);
            }
        }, 1000);
    };
    ServiceFactoryThread.prototype.Check_Count = function (url) {
        console.log(url + 'count -> ' + this.count);
        if (this.count > 0) {
            this.count--;
        }
        else {
            this.count = 0;
        }
    };
    ServiceFactoryThread.prototype.ServiceThread = function (url, request, method) {
        var _this = this;
        this.sh.user_api_key = this.user_api_key;
        if (url != 'addroom' && url != 'GetFollow' && url != 'deleteComment' && url != 'saveComment' && url != 'sendnoti' && url != 'Datafeed' && url != 'like' && url != 'bookmark' && url != 'Chack_following' && url != 'photo_me' && url != 'followme' && url != 'same' && url != 'indefollowing') {
            this.Chk_Open_GPS();
        }
        if (this.status == true || url == 'get_booking' || url == 'nearLocation' || url == 'photos_google' || url == 'check_room' || url == 'addroom' || url == 'GetFollow' || url == 'sendnoti' || url == 'Datafeed' || url == 'like' || url == 'bookmark' || url == 'Chack_following' || url == 'photo_me' || url == 'followme' || url == 'same' || url == 'indefollowing') {
            if (url != 'countCoconut' && url != 'updatePhotoResize' && url != 'get_noti' && url != 'hideStatus' && url != 'get_packet' && url != 'get_booking' && url != "deleteComment" && url != "saveComment" && url != "imgComment" && url != "check_version" && url != "country" && url != "feeling" && url != "highligh" && url != "TypeLocation" && url != "feelingTx" && url != "travel"
                && url != "tag" && url != "checkEmail" && url != "aroundmap" && url != "Tourist" && url != "Attractions" && url != "Datafeed" && url != 'ChkEmail' && url != 'log' && url != 'messageroom' && url != 'indefollowing' && url != 'photos_google' && url != 'nameLocation' && url != 'savelocation' && url != 'getAuto' && url != 'Same' && url != 'sendnoti'
                && url != "Delectmessageroom" && url != 'photo_me' && url != 'like' && url != 'bookmark' && url != 'Chack_following' && url != 'get_album_photo') {
                this.loading_present(url);
            }
            if (url == 'Tourist' && this.stLoad == true || url == 'Attractions' && this.stLoad == true || url == "Datafeed" && this.stLoad == true) {
                this.loading_present(url);
            }
            // this.count++;
            if (method == 'GET') {
                return new Promise(function (resolve) {
                    _this.sh.request(url, {}, { loading: false }, method).subscribe(function (response) {
                        setTimeout(function () {
                            if (url != 'get_noti' && url != 'hideStatus' && url != 'get_packet' && url != 'get_booking' && url != "deleteComment" && url != "saveComment" && url != "imgComment" && url != "check_version" && url != "country" && url != "feeling" && url != "TypeLocation" && url != "feelingTx" && url != "travel" && url != "tag" && url != "checkEmail" && url != "aroundmap" && url != "Tourist" && url != "Attractions" && url != "Datafeed" && url != 'ChkEmail' && url != 'log' && url != 'messageroom' && url != 'indefollowing' && url != 'photos_google' && url != 'nameLocation' && url != 'savelocation' && url != 'getAuto' && url != 'Same' && url != 'savelocation' && url != 'sendnoti' && url != "Delectmessageroom" && url != 'photo_me' && url != 'like' && url != 'bookmark' && url != 'Chack_following') {
                                _this.Check_Count(url);
                                console.log(url);
                            }
                            if (url == 'Tourist' && _this.stLoad == true || url == 'Attractions' && _this.stLoad == true || url == "Datafeed" && _this.stLoad == true) {
                                _this.Check_Count(url);
                                console.log(url);
                                _this.stLoad = false;
                            }
                            // this.Check_Count();
                        }, 500);
                        resolve(response);
                    });
                });
            }
            else {
                var Params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]({
                    fromObject: request
                });
                return new Promise(function (resolve, reject) {
                    _this.sh.request(url, request, { loading: false }, method).subscribe(function (response) {
                        resolve(response);
                        setTimeout(function () {
                            console.log(url, url != 'get_noti' && url != 'hideStatus' && url != 'get_packet' && url != 'get_booking' && url != "deleteComment" && url != "saveComment" && url != "imgComment" && url != "check_version" && url != "country" && url != "feeling" && url != "TypeLocation" && url != "feelingTx" && url != "travel" && url != "tag" && url != "checkEmail" && url != "aroundmap" && url != "Tourist" && url != "Attractions" && url != "Datafeed" && url != 'ChkEmail' && url != 'log' && url != 'messageroom' && url != 'indefollowing' && url != 'photos_google' && url != 'nameLocation' && url != 'savelocation' && url != 'getAuto' && url != 'Same' && url != 'savelocation' && url != 'sendnoti' && url != "Delectmessageroom" && url != 'photo_me' && url != 'like' && url != 'bookmark' && url != 'Chack_following');
                            if (url != 'updatePhotoResize' && url != 'get_noti' && url != 'hideStatus' && url != 'get_packet' && url != 'get_booking' && url != "deleteComment" && url != "saveComment" && url != "imgComment" && url != "check_version" && url != "country" && url != "feeling" && url != "highligh" && url != "TypeLocation" && url != "feelingTx" && url != "travel" && url != "tag" && url != "checkEmail" && url != "aroundmap" && url != "Tourist" && url != "Attractions" && url != "Datafeed" && url != 'ChkEmail' && url != 'log' && url != 'messageroom' && url != 'indefollowing' && url != 'photos_google' && url != 'nameLocation' && url != 'savelocation' && url != 'getAuto' && url != 'Same' && url != 'savelocation' && url != 'sendnoti' && url != "Delectmessageroom" && url != 'photo_me' && url != 'like' && url != 'bookmark' && url != 'Chack_following') {
                                _this.Check_Count(url);
                            }
                            if (url == 'Tourist' && _this.stLoad == true || url == 'Attractions' && _this.stLoad == true || url == "Datafeed" && _this.stLoad == true) {
                                _this.Check_Count(url);
                                _this.stLoad = false;
                            }
                        }, 500);
                    });
                });
            }
        }
    };
    ServiceFactoryThread = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__ServiceHttp__["a" /* ServiceHttp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], ServiceFactoryThread);
    return ServiceFactoryThread;
}());

//# sourceMappingURL=ServiceFactoryThread.js.map

/***/ })

},[248]);
//# sourceMappingURL=main.js.map