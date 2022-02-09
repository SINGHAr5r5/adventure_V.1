webpackJsonp([2],{

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailfeedPageModule", function() { return DetailfeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detailfeed__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_autosize__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DetailfeedPageModule = /** @class */ (function () {
    function DetailfeedPageModule() {
    }
    DetailfeedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detailfeed__["a" /* DetailfeedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detailfeed__["a" /* DetailfeedPage */]),
                __WEBPACK_IMPORTED_MODULE_4_ngx_autosize__["a" /* AutosizeModule */]
            ],
        })
    ], DetailfeedPageModule);
    return DetailfeedPageModule;
}());

//# sourceMappingURL=detailfeed.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeCommentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the TimeCommentPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var TimeCommentPipe = /** @class */ (function () {
    function TimeCommentPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    TimeCommentPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var difference = Date.now() - value;
        var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
        difference -= daysDifference * 1000 * 60 * 60 * 24;
        var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
        difference -= hoursDifference * 1000 * 60 * 60;
        var minutesDifference = Math.floor(difference / 1000 / 60);
        difference -= minutesDifference * 1000 * 60;
        var secondsDifference = Math.floor(difference / 1000);
        console.log('difference = ' + daysDifference + ' day ' + hoursDifference + ' hour ' + minutesDifference + ' minute' + secondsDifference + ' second ');
        if (minutesDifference == 0) {
            minutesDifference = 1;
        }
        if (daysDifference > 0) {
            return daysDifference + " day";
        }
        else if (hoursDifference > 0) {
            return hoursDifference + " hours";
        }
        else {
            return minutesDifference + " minutes";
        }
    };
    TimeCommentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'timeComment',
        })
    ], TimeCommentPipe);
    return TimeCommentPipe;
}());

//# sourceMappingURL=time-comment.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CDVPhotoLibraryPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// cdvphotolibrary.pipe.ts


var CDVPhotoLibraryPipe = /** @class */ (function () {
    function CDVPhotoLibraryPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    CDVPhotoLibraryPipe.prototype.transform = function (url) {
        console.log(url);
        // return url.startsWith('cdvphotolibrary://') ? this.sanitizer.bypassSecurityTrustUrl(url) : url;
        // return this.sanitizer.bypassSecurityTrustUrl(url);
        return this.sanitizer.bypassSecurityTrustResourceUrl(window.Ionic.WebView.convertFileSrc(url));
    };
    CDVPhotoLibraryPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'cdvphotolibrary' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], CDVPhotoLibraryPipe);
    return CDVPhotoLibraryPipe;
}());

//# sourceMappingURL=cdv-photo-library.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_comment_image_comment__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_comment_time_comment__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cdv_photo_library_cdv_photo_library__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__image_comment_image_comment__["a" /* ImageCommentPipe */],
                __WEBPACK_IMPORTED_MODULE_2__time_comment_time_comment__["a" /* TimeCommentPipe */],
                __WEBPACK_IMPORTED_MODULE_3__cdv_photo_library_cdv_photo_library__["a" /* CDVPhotoLibraryPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__image_comment_image_comment__["a" /* ImageCommentPipe */],
                __WEBPACK_IMPORTED_MODULE_2__time_comment_time_comment__["a" /* TimeCommentPipe */],
                __WEBPACK_IMPORTED_MODULE_3__cdv_photo_library_cdv_photo_library__["a" /* CDVPhotoLibraryPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCommentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ServiceFactoryThread__ = __webpack_require__(64);
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
 * Generated class for the ImageCommentPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var ImageCommentPipe = /** @class */ (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function ImageCommentPipe(gd, serviceFactoryThread) {
        this.gd = gd;
        this.serviceFactoryThread = serviceFactoryThread;
    }
    ImageCommentPipe.prototype.transform = function (value, args) {
        var _this = this;
        var url = "";
        if (this.gd.likeUser.map(function (el) { return el.user_id; }).indexOf(value) == '-1') {
            var datasend = {
                "idUser": value
            };
            this.serviceFactoryThread.ServiceThread("imgComment", datasend, "POST").then(function (data) {
                data["res_result"].forEach(function (element) {
                    _this.gd.likeUser.push(element);
                    url = element["user_photo"];
                });
            });
        }
        else {
            this.gd.likeUser.filter(function (data) {
                if (data.user_id === value) {
                    url = data.user_photo;
                }
            });
        }
        return url;
    };
    ImageCommentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'imageComment',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_2__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */]])
    ], ImageCommentPipe);
    return ImageCommentPipe;
}());

//# sourceMappingURL=image-comment.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailfeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_menu_right_menu_right__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Firebase__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_auth__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase_firestore__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_time_comment_time_comment__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













/**
 * Generated class for the DetailfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailfeedPage = /** @class */ (function () {
    function DetailfeedPage(popoverCtrl, geolocation, events, actionSheetCtrl, modalCtrl, alertCtrl, SFT, gd, navCtrl, navParams, element, platform, keyboard, iab) {
        this.popoverCtrl = popoverCtrl;
        this.geolocation = geolocation;
        this.events = events;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.SFT = SFT;
        this.gd = gd;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.element = element;
        this.platform = platform;
        this.keyboard = keyboard;
        this.iab = iab;
        this.ref = __WEBPACK_IMPORTED_MODULE_8_Firebase__["database"]().ref("comments/");
        this.viewMode = 1;
        this.keyRoom = "";
        this.dataFeed = [];
        this.commentlist = [];
        this.totalComment = 0;
        this.textId = "";
        this.commentMode = false;
        this.textTitle = "";
        this.numPage = 0;
        this.SamePlace = [];
        this.loadSameLocation = true;
        this.showSamePlace = false;
        this.showSameFeeling = false;
        this.showTypeLocation = false;
        this.filter = [];
        this.filter2 = [];
        this.countImg = 0;
        this.textComment = "";
        this.userglobal = this.gd.userProfile["user_id"];
        this.st_focus = false;
        this.dataNearby = [];
        this.disableSendComment = false;
        //check video
        this.videoRunning = false;
        this.isEnabled = [];
        this.disabledEditDelete = false; // false = disabled Edit button, true = can edit
        this.disabledComment = false; // false = disabled show comment footer, true = can show comment
        // console.log(`%c this img navParams`, `color:blue`);
        // console.log(navParams.get('data'));
        // console.log(gd.showbtn);
        // console.log(this.gd.userProfile['user_firstname'] + " " + this.gd.userProfile['user_lastname']);
        // setTimeout(() => {
        //   this.photoViewer.show('https://wallpapercave.com/wp/KaNO7Ya.jpg');
        // }, 3000);
    } //close constructor
    DetailfeedPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.keyboard.hideFormAccessoryBar(true);
        });
    };
    DetailfeedPage.prototype.goprofile = function () {
        this.gd.nextpage(this.navCtrl, "ProfilePage", this.gd.userProfile);
    };
    DetailfeedPage.prototype.gonoti = function () {
        this.gd.nextpage(this.navCtrl, "NotificationsPage", {});
    };
    DetailfeedPage.prototype.saerchPage = function () {
        var _this = this;
        var modalbirthday = this.modalCtrl.create("SearchNewfeedPage", {
            typeSearch: "Recent",
        });
        modalbirthday.onDidDismiss(function (data) {
            console.log(data);
            _this.gd.nextpage(_this.navCtrl, "NewsfeedPage", { search: data });
        });
        modalbirthday.present();
    };
    DetailfeedPage.prototype.ionViewDidEnter = function () {
        console.log("enter --");
        this.countImg = this.dataFeed[0].pictureResize.length;
        console.log("dataFeed[0]", this.dataFeed[0]);
        console.log("countImg", this.countImg);
    };
    DetailfeedPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("ionViewDidLoad DetailfeedPage");
                        _a = this;
                        return [4 /*yield*/, this.navParams.get("data")];
                    case 1:
                        _a.img = _b.sent();
                        this.dataFeed.push(this.img);
                        console.log("img", this.img);
                        console.log("dataFeed", this.dataFeed);
                        this.loadFeelling(this.img);
                        if (this.img.comment_key != "") {
                            this.keyRoom = this.img.comment_key;
                            this.getComment();
                        }
                        else {
                            this.checkroom();
                        }
                        console.log(" this.keyRoom", this.keyRoom);
                        setTimeout(function () {
                            if (_this.img["user_id"] != "TAT") {
                                var senddata = {
                                    follow_user: _this.img["user_id"],
                                };
                                _this.SFT.ServiceThread("Chack_following", senddata, "POST").then(function (data) {
                                    if (data["res_code"] == "00") {
                                        _this.img["status_Follow"] = true;
                                        _this.img["follow"] = 1;
                                    }
                                    else {
                                        _this.img["status_Follow"] = false;
                                        _this.img["follow"] = 0;
                                    }
                                });
                            }
                            _this.countImg = _this.dataFeed[0].pictureResize.length;
                        }, 100);
                        setTimeout(function () {
                            _this.hashtag();
                        }, 1000);
                        setTimeout(function () {
                            if (_this.img.openmodel) {
                                console.log("test");
                                // this.myInput.setFocus();
                            }
                        }, 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailfeedPage.prototype.hashtag = function () {
        var t = this;
        console.log(__WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"] page-newsfeed:last .hashtag'));
        __WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"] page-detailfeed:last .hashtag').unbind();
        __WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"] page-detailfeed:last .hashtag').click(function () {
            t.SFT.stLoad = true;
            t.gd.nextpage(t.navCtrl, "NewsfeedPage", {
                frompage: 6,
                datapage: __WEBPACK_IMPORTED_MODULE_7_jquery__(this).text(),
            });
        });
    };
    DetailfeedPage.prototype.change_mode = function (data, getData, index) {
        console.log("change mode");
        console.log("data: ", data);
        console.log("getData: ", getData);
        console.log("index: ", index);
        console.log("----------------------------------------");
        console.log(this.countImg);
        console.log(data, getData);
        if (this.countImg == 1) {
            this.zoomImg(getData, 0);
        }
        else if (this.viewMode == 2 && data == 2) {
            this.zoomImg(getData, index);
        }
        else {
            this.viewMode = data;
        }
    };
    DetailfeedPage.prototype.getDetailFeed = function () {
        var senddata = {
            photo_id: this.img.photo_id,
        };
        this.SFT.ServiceThread("getDetailFeed", senddata, "POST").then(function (data) {
            if (data["res_code"] == "00") {
            }
            else {
            }
        });
    };
    DetailfeedPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.loadFeelling(this.img);
        if (this.img.comment_key != "") {
            this.keyRoom = this.img.comment_key;
            this.getComment();
        }
        else {
            this.checkroom();
        }
        setTimeout(function () {
            if (_this.img["user_id"] != "TAT") {
                var senddata = {
                    follow_user: _this.img["user_id"],
                };
                _this.SFT.ServiceThread("Chack_following", senddata, "POST").then(function (data) {
                    if (data["res_code"] == "00") {
                        _this.img["status_Follow"] = true;
                        _this.img["follow"] = 1;
                    }
                    else {
                        _this.img["status_Follow"] = false;
                        _this.img["follow"] = 0;
                    }
                });
            }
            _this.countImg = _this.dataFeed[0].pictureResize.length;
        }, 100);
        this.SFT.ServiceThread("countCoconut", { idPost: this.img.photo_id, type: this.img.user_id }, "POST").then(function (data) {
            if (data["res_code"] == "00") {
                _this.img.sum_like = data["res_result"];
            }
            refresher.complete();
        });
    };
    DetailfeedPage.prototype.zoomImg = function (data, index) {
        console.log(index);
        // let datasend = {
        //   'data': this.dataFeed[0]
        // };
        // console.log(datasend);
        // let modal = this.modalCtrl.create('DetailfeedImgZoomPage', datasend);
        // modal.present();
        // modal.onDidDismiss(res => {
        // });
        var pswpElement = document.querySelectorAll(".pswp")[0];
        var items = [];
        data.pictureResize.forEach(function (element, index) {
            var dataPush;
            if (element.type == 1) {
                dataPush = {
                    src: element.path_full,
                    w: parseInt(__WEBPACK_IMPORTED_MODULE_7_jquery__("ng-component").width() + ""),
                    h: parseInt(element.path_height),
                };
            }
            else {
                dataPush = {
                    id: "video" + index,
                    html: "<div style=\"height: 100%;display: grid;\">\n            <video id=\"video" + index + "\" controls style=\"width: 100%;margin: auto;\">\n            <source src=\"" + element.path_full + "\" type=\"video/mp4\">\n            </video>\n            </div>",
                };
            }
            items.push(dataPush);
        });
        var options = {
            maxSpreadZoom: 5,
            focus: true,
            index: index,
            loop: false,
            closeOnScroll: false,
            pinchToClose: false,
            tapToClose: false,
        };
        console.log("items: ", items);
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        var t = this;
        gallery.listen("beforeChange", function () {
            console.log("%c beforeChange: " + gallery.currItem, "color:green");
        });
        // After slides change
        // (after content changed)
        gallery.listen("afterChange", function () {
            console.log("%c afterChange: " + gallery.currItem, "color:green");
            var video = __WEBPACK_IMPORTED_MODULE_7_jquery__('video').html;
            console.log('gallery video', video);
            if (typeof gallery.currItem.src === "undefined") {
                console.log(gallery.currItem);
                // $("video").trigger("play");
            }
            else {
                console.log("not video");
            }
        });
        //    gallery.listen('gettingData', function(index, item) {
        //     // index - index of a slide that was loaded
        //     // item - slide object
        //     // e.g. change path to the image based on `something`
        //     console.log(`%c gettingData: ${gallery.currItem}`,`color:green`);
        //     console.log(gallery.currItem);
        //     if(typeof(gallery.currItem.src) === "undefined") {
        //         console.log(item.src);
        //         $('video').trigger('play');
        //     } else {
        //       console.log(`not video`);
        //     }
        // });
        gallery.init();
    };
    DetailfeedPage.prototype.coconut = function (data) {
        this.gd.nextpage(this.navCtrl, "CoconutPage", { data: data });
    };
    DetailfeedPage.prototype.presentActionSheetComment = function (data, i) {
        var _this = this;
        var options;
        if (!this.disabledEditDelete) {
            if (this.gd.userProfile.user_id == data.userId) {
                options = {
                    buttons: [
                        {
                            text: "Edit",
                            cssClass: "",
                            handler: function () {
                                _this.yourComments = '';
                                _this.disabledEditDelete = true;
                                console.log("isEnabled", _this.isEnabled);
                                console.log("commentlist", _this.commentlist);
                                console.log("i", i);
                                _this.isEnabled[i] = true;
                                console.log(" this.isEnabled[i]", _this.isEnabled[i]);
                                setTimeout(function () {
                                    _this.yourComments = data.comment; //set comment to textarea
                                    _this.editComments.setFocus();
                                }, 300);
                            },
                        },
                        {
                            text: "Delete Comment",
                            cssClass: "setting_img",
                            handler: function () {
                                var alert = _this.alertCtrl.create({
                                    title: "Confirm Delete",
                                    message: "Do you want to delete comment?",
                                    buttons: [
                                        {
                                            text: "Cancel",
                                            role: "cancel",
                                            handler: function () {
                                                console.log("Cancel clicked");
                                            },
                                        },
                                        {
                                            text: "Delete",
                                            handler: function () {
                                                // console.log('Buy clicked');
                                                console.log(data);
                                                var newData = __WEBPACK_IMPORTED_MODULE_8_Firebase__["database"]()
                                                    .ref("comments/" +
                                                    _this.keyRoom +
                                                    "/comment/" +
                                                    data["key"])
                                                    .update({
                                                    status: "1",
                                                });
                                                _this.SFT.ServiceThread("deleteComment", {
                                                    keycomment: data["key"],
                                                    user_id: _this.gd.userProfile["user_id"],
                                                }, "POST").then(function (data) {
                                                    console.log(data);
                                                    if (data["res_code"] == "00") {
                                                        _this.img["status_comment"] =
                                                            data["res_result"].toLowerCase() == "true"
                                                                ? true
                                                                : false;
                                                        console.log("%c " + data["res_text"], "color:green");
                                                    }
                                                    else {
                                                        console.error(data["res_text"]);
                                                    }
                                                });
                                            },
                                        },
                                    ],
                                });
                                alert.present();
                            },
                        },
                    ],
                };
            }
            else {
                options = {
                    buttons: [
                        {
                            text: "Delete Comment",
                            cssClass: "setting_img",
                            handler: function () {
                                var alert = _this.alertCtrl.create({
                                    title: "Confirm Delete",
                                    message: "Do you want to delete comment?",
                                    buttons: [
                                        {
                                            text: "Cancel",
                                            role: "cancel",
                                            handler: function () {
                                                console.log("Cancel clicked");
                                            },
                                        },
                                        {
                                            text: "Delete",
                                            handler: function () {
                                                // console.log('Buy clicked');
                                                console.log(data);
                                                var newData = __WEBPACK_IMPORTED_MODULE_8_Firebase__["database"]()
                                                    .ref("comments/" +
                                                    _this.keyRoom +
                                                    "/comment/" +
                                                    data["key"])
                                                    .update({
                                                    status: "1",
                                                });
                                                _this.SFT.ServiceThread("deleteComment", {
                                                    keycomment: data["key"],
                                                    user_id: _this.gd.userProfile["user_id"],
                                                }, "POST").then(function (data) {
                                                    console.log(data);
                                                    if (data["res_code"] == "00") {
                                                        _this.img["status_comment"] =
                                                            data["res_result"].toLowerCase() == "true"
                                                                ? true
                                                                : false;
                                                        console.log("%c " + data["res_text"], "color:green");
                                                    }
                                                    else {
                                                        console.error(data["res_text"]);
                                                    }
                                                });
                                            },
                                        },
                                    ],
                                });
                                alert.present();
                            },
                        },
                    ],
                };
            }
            var actionSheet = this.actionSheetCtrl.create(options);
            actionSheet.present();
        }
    };
    DetailfeedPage.prototype.btnCancel = function (data, i) {
        this.disabledEditDelete = false;
        this.isEnabled[i] = false;
    };
    DetailfeedPage.prototype.btnConfirm = function (data, i) {
        var _this = this;
        this.disabledEditDelete = false;
        this.isEnabled[i] = false;
        var dataUpdate = {
            comment: this.yourComments,
            // date: firebase.database.ServerValue.TIMESTAMP,
            status: "2",
        };
        this.SFT.ServiceThread("editComment", {
            keycomment: data.key,
            comment: this.yourComments,
            user_id: this.gd.userProfile.user_id,
        }, "POST").then(function (res) {
            if (res["res_code"] == "00") {
                _this.img["status_comment"] =
                    res["res_result"].toLowerCase() == "true" ? true : false;
                console.log("%c " + res["res_text"], "color:green");
                //update comment on firebase
                var update = __WEBPACK_IMPORTED_MODULE_8_Firebase__["database"]()
                    .ref("comments/" + _this.keyRoom + "/comment/" + data.key)
                    .update(dataUpdate);
            }
            else {
                console.error(res["res_text"]);
            }
        });
    };
    DetailfeedPage.prototype.checkroom = function () {
        var _this = this;
        // if (this.img.user_id != "TAT") {
        if (this.img.comment_key == "") {
            var datasend = {
                id: this.img.photo_id,
                key: "",
                type: "",
                user: this.img.user_id,
            };
            this.SFT.ServiceThread("check_key_comment", datasend, "POST").then(function (data) {
                if (data["res_code"] == "00") {
                    _this.keyRoom = data["res_result"]["res_result"];
                    _this.getComment();
                }
                else {
                    var newData = _this.ref.push();
                    var type = void 0;
                    if (_this.img.user_id == "TAT") {
                        type = "TAT";
                    }
                    else {
                        type = "user";
                    }
                    newData.set({
                        roomname: _this.img.photo_id,
                        type: type,
                    });
                    var datasend_1 = {
                        id: _this.img.photo_id,
                        key: newData.key,
                        type: type,
                        user: _this.img.user_id,
                    };
                    _this.keyRoom = newData.key;
                    _this.SFT.ServiceThread("check_key_comment", datasend_1, "POST").then(function (data) {
                        _this.getComment();
                    });
                }
            });
        }
        // }
    };
    DetailfeedPage.prototype.getComment = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8_Firebase__["database"]().ref("comments/" + this.keyRoom + "/comment").off();
        __WEBPACK_IMPORTED_MODULE_8_Firebase__["database"]().ref("comments/" + this.keyRoom + "/comment").on("value", function (resp) {
            _this.snap(resp).then(function (data) {
                console.log(data);
                var newIndex;
                var dataa = [];
                dataa = data;
                var countComment = dataa.filter(function (item) {
                    return item.status != 1; //0=new comment, 1=deleted, 2=edited
                });
                _this.commentlist = dataa.filter(function (item) {
                    if (item.status != 1) {
                        return item;
                    }
                });
                _this.commentlist.forEach(function (element, index) {
                    _this.isEnabled[index] = false;
                    console.log(index);
                    console.log("element commentList", element);
                    console.log("this.keyRoom", _this.keyRoom);
                    var url = "";
                    if (_this.gd.likeUser
                        .map(function (el) { return el.user_id; })
                        .indexOf(element.userId) == "-1") {
                        var datasend = {
                            idUser: element.userId,
                        };
                        _this.SFT.ServiceThread("imgComment", datasend, "POST").then(function (data) {
                            data["res_result"].forEach(function (element) {
                                _this.gd.likeUser.push(element);
                                url = element["user_photo"];
                                _this.commentlist[index]["userUrl"] = element["user_photo"];
                            });
                            if (index == _this.commentlist.length - 1) {
                                console.log("last comment");
                                var filterPipe = new __WEBPACK_IMPORTED_MODULE_11__pipes_time_comment_time_comment__["a" /* TimeCommentPipe */]();
                                _this.img.comment = element.comment;
                                _this.img.comment_user_img = _this.commentlist[index]["userUrl"];
                                _this.img.userIdComment = element.userId;
                                _this.img.timeComment = filterPipe.transform(element.date);
                                _this.img.fulnameComment = element.fullname;
                            }
                        });
                    }
                    else {
                        _this.gd.likeUser.filter(function (data) {
                            if (data.user_id === element.userId) {
                                url = data.user_photo;
                                _this.commentlist[index]["userUrl"] = data.user_photo;
                                if (index == _this.commentlist.length - 1) {
                                    console.log("last comment");
                                    var filterPipe = new __WEBPACK_IMPORTED_MODULE_11__pipes_time_comment_time_comment__["a" /* TimeCommentPipe */]();
                                    _this.img.comment = element.comment;
                                    _this.img.comment_user_img = data.user_photo;
                                    _this.img.userIdComment = element.userId;
                                    _this.img.timeComment = filterPipe.transform(element.date);
                                    _this.img.fulnameComment = element.fullname;
                                }
                            }
                        });
                    }
                });
                if (_this.commentlist.length == 0) {
                    _this.img.comment = "";
                    _this.img.comment_user_img = "";
                    _this.img.userIdComment = "";
                    _this.img.timeComment = "";
                    _this.img.fulnameComment = "";
                }
                _this.totalComment = _this.commentlist.length;
                _this.img.countComment = countComment.length;
                for (var index = 0; index < _this.commentlist.length; index++) {
                    if (index == 0) {
                        newIndex = index;
                    }
                    else {
                        newIndex = index - 1;
                    }
                    if (index == 0) {
                        _this.commentlist[index].showdate = true;
                    }
                    else if (_this.commentlist[index]["date"] !=
                        _this.commentlist[newIndex]["date"]) {
                        _this.commentlist[index].showdate = true;
                    }
                    else {
                        _this.commentlist[index].showdate = false;
                    }
                    if (_this.gd.idUserComment.indexOf(_this.commentlist[index].userId) ==
                        "-1") {
                        if (index == 0) {
                            _this.textId += _this.commentlist[index].userId;
                        }
                        else {
                            _this.textId += "," + _this.commentlist[index].userId;
                        }
                        _this.gd.idUserComment.push(_this.commentlist[index].userId);
                    }
                    if (_this.commentlist.length == index - 1) {
                    }
                }
                if (_this.textId != "") {
                    var datasend = {
                        idUser: _this.textId,
                    };
                    _this.SFT.ServiceThread("imgComment", datasend, "POST").then(function (data) {
                        data["res_result"].forEach(function (element) {
                            _this.gd.likeUser.push(element);
                        });
                    });
                }
            });
        });
    };
    DetailfeedPage.prototype.snap = function (data) {
        return new Promise(function (resolve) {
            var returnArr = [];
            data.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                item.key = childSnapshot.key;
                returnArr.push(item);
            });
            resolve(returnArr);
        });
    };
    DetailfeedPage.prototype.presentPopover = function (myEvent) {
        __WEBPACK_IMPORTED_MODULE_7_jquery__(".share").removeClass("share");
        __WEBPACK_IMPORTED_MODULE_7_jquery__("body").addClass("rightMenu");
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_menu_right_menu_right__["a" /* MenuRightComponent */], {
            navCtrl: this.navCtrl,
        });
        popover.present({
            ev: myEvent,
        });
    };
    DetailfeedPage.prototype.loadFeelling = function (dataSend) {
        var _this = this;
        this.showSamePlace = false;
        this.showSameFeeling = false;
        this.showTypeLocation = false;
        if (this.numPage == 0 && this.loadSameLocation) {
            var dataplace = {
                Place: dataSend["photo_location"],
                type: 1,
                width: __WEBPACK_IMPORTED_MODULE_7_jquery__("ng-component").width(),
                LoadMoreLimit: 5,
                numLoad: 0,
                lat: dataSend["photo_la"],
                long: dataSend["photo_long"],
            };
            this.filter = dataplace;
            this.SFT.ServiceThread("Same", dataplace, "POST").then(function (data) {
                if (data["res_code"] == "00") {
                    _this.SamePlace = data["res_result"];
                    _this.dataFeed[0]["same"] = _this.SamePlace;
                    _this.dataFeed[0]["samelength"] = _this.SamePlace.length;
                    _this.textTitle = _this.img.photo_location;
                    console.log(_this.SamePlace);
                    if (_this.SamePlace.length > 1) {
                        _this.showSamePlace = true;
                    }
                    else {
                        // this.textTitle = "Nearby Places";
                        // let dataFeeling = {
                        //   'Feeling': dataSend['feeling_id'],
                        //   'type': 2,
                        //   'width': $('ng-component').width(),
                        //   'LoadMoreLimit': 5,
                        //   'numLoad': 0,
                        //   'lat': this.SFT.userlocation.lat,
                        //   'long': this.SFT.userlocation.long
                        // }
                        // this.SFT.ServiceThread('Same', dataFeeling, 'POST')
                        //   .then(data => {
                        //     console.log(data);
                        //     if (data['res_code'] == '00') {
                        //       // // console.log(data);
                        //       this.SamePlace = data['res_result'];
                        //       this.dataFeed[0]['same'] = this.SamePlace;
                        //       this.dataFeed[0]['samelength'] = this.SamePlace.length;
                        //       if (this.SamePlace['length'] > 1) {
                        //         this.showSamePlace = true;
                        //       }
                        //     } else {
                        //       this.dataFeed[0]['same'] = [];
                        //       this.dataFeed[0]['samelength'] = 0;
                        //     }
                        //     this.loadSameLocation = false;
                        //     console.log(this.dataFeed[0]['samelength']);
                        //   })
                    }
                }
                else {
                }
                _this.loadSameLocation = false;
                console.log(_this.dataFeed[0]["samelength"]);
            });
            // this.dataNearby[0]['same'] = [];
            // this.dataNearby[0]['samelength'] = 0;
            var datafeel = {
                Feeling: dataSend["feeling_id"],
                textLocation: dataSend["photo_location"],
                type: 2,
                width: __WEBPACK_IMPORTED_MODULE_7_jquery__("ng-component").width(),
                LoadMoreLimit: 5,
                numLoad: 0,
                lat: dataSend["photo_la"],
                long: dataSend["photo_long"],
            };
            this.filter2 = datafeel;
            this.SFT.ServiceThread("Same", datafeel, "POST").then(function (data) {
                console.log(data);
                if (data["res_code"] == "00") {
                    _this.dataNearby = data["res_result"];
                }
                else {
                    _this.dataNearby = [];
                }
            });
        }
        else {
        }
    };
    DetailfeedPage.prototype.like = function (data, type, index) {
        var datanew = JSON.parse(JSON.stringify(data));
        delete datanew.same;
        delete datanew.follow;
        delete datanew.ic;
        delete datanew.samelength;
        delete datanew.status_Follow;
        delete datanew.imageLike;
        delete datanew.path_resize;
        delete datanew.comment_user_img;
        delete datanew.pictureResize;
        delete datanew.user_path_img;
        delete datanew.photo_img_Full;
        delete datanew.user_img;
        delete datanew.nameLocation;
        delete datanew.photo_location;
        delete datanew.photo_locationText;
        console.log(datanew);
        var datanoti = data;
        var senddata = {
            photo_id: data.photo_id,
            type: type,
            data: JSON.stringify(datanew),
        };
        if (type == 1) {
            // // console.log('ลบ');
            data["status_like"] = false;
            data["sum_like"] = data["sum_like"] - 1;
        }
        else {
            // // console.log('บวก');
            data["status_like"] = true;
            data["sum_like"] = data["sum_like"] + 1;
        }
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"] #like' + data.photo_id).addClass("liked");
            __WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"] #like' + data.photo_id).css("pointer-events", "none");
            clearTimeout(tmq);
            var tmq = setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"] #like' + data.photo_id).removeClass("liked");
                __WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"] #like' + data.photo_id).css("pointer-events", "unset");
            }, 1100);
        }, 10);
        this.SFT.ServiceThread("like", senddata, "POST").then(function (data) {
            // // console.log(data);/
        });
    };
    DetailfeedPage.prototype.bookmark = function (data, type) {
        // // console.log(data);
        // // console.log(type);
        var senddata = {
            photo_id: data.photo_id,
            type: type,
            userType: data.user_id,
        };
        this.SFT.ServiceThread("bookmark", senddata, "POST").then(function (data) {
            // // console.log(data);
        });
        if (type == 1) {
            // // console.log('ลบ');
            data["status_bookmark"] = false;
        }
        else {
            // // console.log('บวก');
            data["status_bookmark"] = true;
        }
    };
    DetailfeedPage.prototype.follow = function (type, img, id) {
        console.log(this.gd.userProfile);
        var datanew = JSON.parse(JSON.stringify(this.gd.userProfile));
        delete datanew.same;
        delete datanew.follow;
        delete datanew.ic;
        delete datanew.samelength;
        delete datanew.status_Follow;
        delete datanew.message;
        delete datanew.data_message;
        // var datatest = [];
        // datatest.push(this.dataFeed);
        this.dataFeed.filter(function (data, index) {
            if (data.user_id === img.user_id) {
                if (type == 1) {
                    setTimeout(function () {
                        __WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"]  page-detailfeed:last .FID' + id).addClass("bounceIn animated");
                    }, 100);
                }
                else {
                    setTimeout(function () {
                        __WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"]  page-detailfeed:last .FD' + id).addClass("bounceIn animated");
                    }, 100);
                }
            }
        });
        var senddata = {
            follow_user: img["user_id"],
            type: type,
            data: JSON.stringify(datanew),
        };
        this.SFT.ServiceThread("indefollowing", senddata, "POST").then(function (data) { });
        if (type == 1) {
            img["status_Follow"] = true;
            img["follow"] = 1;
            this.gd.userProfile.following += 1;
        }
        else {
            img["status_Follow"] = false;
            img["follow"] = 0;
            this.gd.userProfile.following -= 1;
        }
    };
    DetailfeedPage.prototype.GoPage = function (page, data, text) {
        var _this = this;
        if (page == "ProfilePage" && data["user_id"] != "TAT") {
            if (page == "ProfilePage" &&
                this.gd.userProfile["user_id"] == data["user_id"]) {
                // if (this.gd.userProfile.user_type == '1') {
                //   this.gd.nextpage(this.navCtrl, 'ProfileStorePage', {});
                // } else {
                this.gd.nextpage(this.navCtrl, "ProfilePage", {});
                // }
            }
            else {
                // if (data['user_type'] == '1') {
                //   this.gd.nextpage(this.navCtrl, 'ProfileStorePage', { 'data': data });
                // } else {
                this.gd.nextpage(this.navCtrl, "ProfilePage", { data: data });
                // }
                this.gd.saveLog("Go", data);
            }
        }
        else if (page != "ProfilePage") {
            if (page == "ProfilePage" &&
                this.gd.userProfile["user_id"] == data["user_id"]) {
                this.navCtrl.parent.select(4);
                setTimeout(function () {
                    _this.navCtrl.parent.select(4);
                }, 100);
            }
            else if (page == "DetailfeedPage") {
                console.log("DetailfeedPage");
                this.gd.nextpage(this.navCtrl, page, { data: data });
                this.gd.saveLog("Go", data);
            }
            else {
                this.gd.nextpage(this.navCtrl, page, { data: data });
                this.gd.saveLog("Go", data);
            }
        }
    };
    DetailfeedPage.prototype.comment = function () {
        var _this = this;
        setTimeout(function () {
            _this.myInput.setFocus();
        }, 0);
        // this.myInput.focus
    };
    DetailfeedPage.prototype.commentV2 = function () {
        var _this = this;
        this.myInput.setFocus();
        // this.myInput.focus
        setTimeout(function () {
            console.log("clickcomment");
            if (_this.viewMode == 2 && _this.commentMode == false) {
                _this.commentMode = true;
            }
            else if (_this.viewMode == 2 && _this.commentMode == true) {
                // this.commentMode = false;
            }
        }, 0);
    };
    DetailfeedPage.prototype.checkFocus = function () {
        console.log("in");
        this.st_focus = true;
        if (this.viewMode == "1") {
            var contentBottom = document.getElementById('contentBottom').offsetHeight; //พื้นที่ด่านล่างที่เหลือจาก comment
            var heightContent = this.content.getContentDimensions().scrollHeight; //all content
            var scrollY_1 = (heightContent - (contentBottom * 2));
            this.content.scrollTo(0, scrollY_1).then(function () {
            });
            console.log('heightContent', heightContent);
            console.log('contentBottom', contentBottom);
            console.log('scrollY', scrollY_1);
        }
        __WEBPACK_IMPORTED_MODULE_7_jquery__(".tabbar.show-tabbar").animate({ marginBottom: "-80px" });
    };
    DetailfeedPage.prototype.checkBlur = function () {
        console.log("out");
        this.st_focus = false;
        __WEBPACK_IMPORTED_MODULE_7_jquery__(".tabbar.show-tabbar").animate({ marginBottom: "0px" });
    };
    DetailfeedPage.prototype.sendComment_comment = function () {
        var _this = this;
        if (this.disableSendComment == false) {
            this.disableSendComment = true;
            console.log(this.textComment);
            var datanew_1 = {
                datacomment: JSON.parse(JSON.stringify(this.dataFeed[0])),
            };
            console.log(datanew_1);
            delete datanew_1["datacomment"].same;
            delete datanew_1["datacomment"].follow;
            delete datanew_1["datacomment"].ic;
            delete datanew_1["datacomment"].samelength;
            delete datanew_1["datacomment"].status_Follow;
            delete datanew_1["datacomment"].imageLike;
            delete datanew_1["datacomment"].path_resize;
            delete datanew_1["datacomment"].comment_user_img;
            delete datanew_1["datacomment"].pictureResize;
            delete datanew_1["datacomment"].user_path_img;
            delete datanew_1["datacomment"].photo_img_Full;
            delete datanew_1["datacomment"].user_img;
            delete datanew_1["datacomment"].nameLocation;
            delete datanew_1["datacomment"].photo_location;
            delete datanew_1["datacomment"].photo_locationText;
            if (this.textComment.trim() != "") {
                var newData_1 = __WEBPACK_IMPORTED_MODULE_8_Firebase__["database"]()
                    .ref("comments/" + this.keyRoom + "/comment/")
                    .push();
                var datasend = {
                    fullname: this.gd.userProfile["user_firstname"] +
                        " " +
                        this.gd.userProfile["user_lastname"],
                    userId: this.gd.userProfile["user_id"],
                    comment: this.textComment,
                    date: __WEBPACK_IMPORTED_MODULE_8_Firebase__["database"].ServerValue.TIMESTAMP,
                    status: "0",
                };
                newData_1.set(datasend);
                this.img.countComment++;
                console.log(this.img["datacomment"]);
                // this.img.comment = this.textComment;
                // this.img.comment_user_img = this.gd.userProfile.user_path_img;
                // this.img.userIdComment = this.gd.userProfile['user_id'];
                // this.img.timeComment = "1 min";
                // this.img.fulnameComment = this.gd.userProfile['user_firstname'] + " " + this.gd.userProfile['user_lastname'];
                console.log(this.img);
                console.log(newData_1);
                console.log(datanew_1);
                setTimeout(function () {
                    var datasend = {
                        comment: _this.textComment,
                        postId: _this.img.photo_id,
                        userId: _this.gd.userProfile["user_id"],
                        dataPost: JSON.stringify(datanew_1),
                        keycomment: newData_1.key,
                    };
                    _this.SFT.ServiceThread("saveComment", datasend, "POST").then(function (data) {
                        if (data["res_code"] == "00") {
                            _this.img["status_comment"] = data["res_result"];
                            console.log("%c " + data["res_text"], "color:green");
                        }
                        else {
                            console.error(data["res_text"]);
                        }
                        _this.disableSendComment = false;
                    });
                    _this.textComment = "";
                }, 100);
            }
        }
    };
    DetailfeedPage.prototype.presentReport = function (data) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: "Hide post",
                    cssClass: "setting_img",
                    handler: function () {
                        // this.hidepost(data);
                        console.log(_this.img["photo_id"]);
                        _this.events.publish("deleteimg", {
                            id: _this.img["photo_id"],
                            type: 1,
                        });
                        // this.img['status_show'] = false;
                        _this.navCtrl.pop();
                    },
                },
                {
                    text: "Hide all posts from " +
                        data["user_firstname"] +
                        " " +
                        data["user_lastname"],
                    cssClass: "setting_img",
                    handler: function () {
                        // this.hideall(data);
                        // this.hidepost(data);
                        _this.events.publish("deleteimg", {
                            id: _this.img["user_id"],
                            type: 2,
                        });
                        // this.img['status_show'] = false;
                        _this.navCtrl.pop();
                    },
                },
                {
                    text: "Report inappropriate content",
                    cssClass: "setting_img",
                    handler: function () {
                        _this.gd.toast("Report Success");
                    },
                },
            ],
        });
        actionSheet.present();
    };
    DetailfeedPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            // title: 'Select Filter',
            buttons: [
                {
                    text: "Edit",
                    cssClass: "setting_img",
                    handler: function () {
                        // console.log('Destructive clicked');
                        var data = {
                            img: _this.img["photo_img_Full"],
                            page: "edit",
                            data: _this.img,
                            Latitude: _this.img["photo_la"],
                            Longitude: _this.img["photo_long"],
                        };
                        _this.gd.nextpage(_this.navCtrl, "CameraPage", data);
                    },
                },
                {
                    text: "Delete",
                    cssClass: "setting_img",
                    handler: function () {
                        var alert = _this.alertCtrl.create({
                            title: "Confirm Delete",
                            message: "Do you want to delete post?",
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: function () {
                                        console.log("Cancel clicked");
                                    },
                                },
                                {
                                    text: "Delete",
                                    handler: function () {
                                        // console.log('Buy clicked');
                                        _this.SFT.ServiceThread("DeleteImg", { photo_id: _this.dataFeed[_this.numPage]["photo_id"] }, "POST").then(function (data) {
                                            console.log(data);
                                            console.log(__WEBPACK_IMPORTED_MODULE_7_jquery__("page-profile"));
                                            console.log(__WEBPACK_IMPORTED_MODULE_7_jquery__("page-profile").length);
                                            if (__WEBPACK_IMPORTED_MODULE_7_jquery__("page-profile").length == 0) {
                                                _this.events.publish("deleteimg", {
                                                    id: _this.img["photo_id"],
                                                    type: 1,
                                                });
                                            }
                                            _this.img["status_show"] = false;
                                            _this.navCtrl.pop();
                                        });
                                    },
                                },
                            ],
                        });
                        alert.present();
                    },
                },
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancel clicked");
                    },
                },
            ],
        });
        actionSheet.present();
    };
    // testPreview() {
    //   var pswpElement = document.querySelectorAll('.pswp')[0];
    //   var items = [
    //     {
    //       src: 'https://placekitten.com/600/400',
    //       w: 600,
    //       h: 400
    //     },
    //     {
    //       src: 'https://placekitten.com/1200/900',
    //       w: 1200,
    //       h: 900
    //     }
    //   ];
    //   var options = {
    //     index: 0 // start at first slide
    //   };
    //   var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    //   gallery.init();
    // }
    DetailfeedPage.prototype.startExternalMap = function (data) {
        var _this = this;
        console.log(data);
        data.latitude = data.photo_la;
        data.longitude = data.photo_long;
        if (this.gd.platformtype == "ios") {
            var actionSheet = this.actionSheetCtrl.create({
                buttons: [
                    {
                        text: "Open in Google Maps",
                        cssClass: "setting_img",
                        handler: function () {
                            _this.geolocation.getCurrentPosition().then(function (position) {
                                _this.iab.create("https://www.google.com/maps/?daddr=" + data.latitude + "," + data.longitude, "_system");
                                // window.open(
                                //   "https://www.google.com/maps/?daddr=" +
                                //   data.latitude +
                                //   "," +
                                //   data.longitude,
                                //   "_system"
                                // );
                            }, function (err) { });
                        },
                    },
                    {
                        text: "Open in Maps",
                        cssClass: "setting_img",
                        handler: function () {
                            _this.geolocation.getCurrentPosition().then(function (position) {
                                _this.iab.create("maps://?q=" + data.name + "&saddr=" + position.coords.latitude + "," + position.coords.longitude + "&daddr=" + data.latitude + "," + data.longitude, "_system");
                            }, function (err) { });
                        },
                    },
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: function () {
                            console.log("Cancel clicked");
                        },
                    },
                ],
            });
            actionSheet.present();
        }
        else {
            this.geolocation.getCurrentPosition().then(function (position) {
                _this.iab.create("geo://" + position.coords.latitude + "," + position.coords.longitude + "?q=" + data.latitude + "," + data.longitude + "(" + data.name + ")", "_system");
                // window.open(
                //   "geo://" +
                //   position.coords.latitude +
                //   "," +
                //   position.coords.longitude +
                //   "?q=" +
                //   data.latitude +
                //   "," +
                //   data.longitude +
                //   "(" +
                //   data.name +
                //   ")",
                //   "_system"
                // );
            }, function (err) { });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("myInput"),
        __metadata("design:type", Object)
    ], DetailfeedPage.prototype, "myInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], DetailfeedPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("editComments"),
        __metadata("design:type", Object)
    ], DetailfeedPage.prototype, "editComments", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('part1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DetailfeedPage.prototype, "part1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('commentBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DetailfeedPage.prototype, "commentBox", void 0);
    DetailfeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-detailfeed",template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/detailfeed/detailfeed.html"*/'<ion-header>\n    <!-- <div id="toolbarProfile" class="toolbar-background toolbar-backgrounds" *ngIf=\'gd.platformtype=="ios"\'\n    style="height: 30px;width: 100%;z-index: 999999;position: relative;"></div> -->\n    <ion-navbar id="default_Bar">\n        <ion-grid style="padding: 0;">\n            <ion-row>\n                <ion-col col-6 style="padding: 0;" class="col60">\n                    <ion-buttons start>\n                        <ion-buttons start>\n                            <button ion-button icon-only navPop class="icon_back" style="vertical-align: middle;" *ngIf="viewMode == 1">\n                                 <ion-icon name="arrow-back"></ion-icon>\n                            </button>\n                            <button ion-button icon-only class="icon_back" style="vertical-align: middle;" *ngIf="viewMode == 2" (click)="change_mode(1,\'\',\'\')">\n                                <ion-icon name="arrow-back"></ion-icon>\n                            </button>\n                            <div style="overflow: hidden;width: 78%;padding-right: 5px;text-overflow: clip;white-space: nowrap;padding-right: 8px;display: inline-block;vertical-align: middle;" class="textHeader">\n                                <span *ngIf="img != undefined && img.user_firstname != undefined" class="" [innerHtml]="img.user_firstname"></span>\n                                <span *ngIf="img != undefined && img.user_lastname != undefined" class="" [innerHtml]="img.user_lastname"></span>\n                            </div>\n                        </ion-buttons>\n                    </ion-buttons>\n                </ion-col>\n                <ion-col col-6 style="padding: 0;" class="col40">\n                    <ion-buttons end>\n                        <button ion-button icon-only style="" class="" (click)="saerchPage()">\n                            <img style="position: relative;margin-right: 10px;width: 20px;" src="./assets/icon/search-icon.svg" alt="">\n                        </button>\n                        <button ion-button icon-only style="position: relative;" class="" (click)="gonoti()">\n                            <img style="position: relative;margin-right: 10px;width: 20px;" src="./assets/icon/Inoti.svg" alt="">\n                            <div class="numberNoti" *ngIf="gd.sumNoti > 0">\n                                <div style="margin: auto;">{{gd.sumNoti}}</div>\n                            </div>\n                        </button>\n                        <button ion-button icon-only style="" class="" (click)="goprofile()">\n                                <img style="position: relative;margin-right: 10px;height: 30px;width: 30px;" id="img_profile" class="imgpros" [src]="gd.userProfile.user_path_img"/>\n                        </button>\n                        <button ion-button icon-only style="" class="" (click)="presentPopover($event)">\n                            <img style="position: relative;margin-right: 10px;" src="./assets/icon/menu-icon.svg" alt="">\n                        </button>\n                    </ion-buttons>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true" id="detailContent" #pageContent>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <!-- <input type="hidden" id="leng" name="" value="20">\n  <input type="hidden" id="idCard" name="" value="0" [(ngModel)]="numPage" (click)="setVal()"> -->\n    <div class="subcardslide countSlide" *ngFor="let img of dataFeed;let i = index;" style="">\n        <div *ngIf="img != undefined && img != {}">\n            <div #part1 id="part1" class="ddddddddd">\n                <!-- profile, caption of post -->\n                <ion-grid style="text-align: left;padding: 0;padding-left: 5px;padding-right: 5px;margin-bottom: 10px;">\n                    <ion-row>\n                        <ion-col class="" style="padding: 0px !important;">\n                            <ion-grid class=" Montserrat" style="width: 100%;padding-left: 0px;padding-right: 0px;">\n                                <ion-row>\n                                    <ion-col style="padding-left: 0px;width: 12%;" (click)="GoPage(\'ProfilePage\',img,\'\')" col-8 class="ipad">\n                                        <img class="imgpro" [src]="img.user_img" style="position: relative !important;vertical-align: middle;" />\n                                        <div style="display: inline-block;width: 70%;vertical-align: middle;">\n                                            <span class="fullName">\n                        <span *ngIf="img != undefined && img.user_firstname != undefined" class="color4D" [innerHtml]="img.user_firstname"></span>\n                                            <span *ngIf="img != undefined && img.user_lastname != undefined" class="color4D" [innerHtml]="img.user_lastname"></span>\n                                            </span>\n                                            <span class="color87" style="font-size: 13px;">\n                        <span style="color: #1B75BB;">{{img.country_name_en}}</span> &bull;\n                                            <span style="font-size: 12px;">{{img.time}} ago</span>\n                                            </span>\n                                        </div>\n                                    </ion-col>\n                                    <ion-col style="text-align: right;display: grid;" col-4>\n                                        <div style="margin: auto;width: 100%;">\n                                            <div style="display: inline-block;text-align: center;position: relative;vertical-align: middle;" *ngIf="img.user_id!=gd.userProfile[\'user_id\'] && img.user_id != \'TAT\'">\n                                                <div style="margin-right: 10px;display: inline-block;text-align: center;position: relative;" (click)="follow(1,img)" *ngIf="img.follow == 0">\n                                                    <img style="height: 20px;" src="./assets/icon/follow_icon+.svg" alt="">\n                                                    <div style="left: -4px;" class="text_icon">Follow</div>\n                                                </div>\n                                                <div style="margin-right: 10px;display: inline-block;text-align: center;position: relative;" (click)="follow(2,img)" *ngIf="img.follow == 1">\n                                                    <img style="height: 20px;" src="./assets/icon/follow_icon-.svg" alt="">\n                                                    <div class="text_icon" style="left: -10px;color: #979797;">Following</div>\n                                                </div>\n                                            </div>\n                                            <div style="display: inline-block;text-align: center;position: relative;vertical-align: middle;" (click)="gd.presentPopover($event,img)">\n                                                <img style="height: 20px;" src="./assets/icon/share_icon.svg" alt="">\n                                                <div class="text_icon">Share</div>\n                                            </div>\n                                            <div style="display: inline-block;text-align: center;position: relative;margin-left: 10px;vertical-align: middle;" *ngIf="img.user_id==gd.userProfile[\'user_id\'] && img.user_id != \'TAT\'">\n                                                <img style="height: 25px;" src="./img/seting_img.png" alt="" (click)="presentActionSheet()">\n                                            </div>\n                                            <div style="display: inline-block;text-align: center;position: relative;margin-left: 10px;vertical-align: middle;" *ngIf="img.user_id!=gd.userProfile[\'user_id\'] && gd.showbtn == 1 && img.user_id != \'TAT\'">\n                                                <img style="height: 25px;" src="./img/seting_img.png" alt="" (click)="presentReport(img)">\n                                            </div>\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                            <span style="margin-top: 6px;" class="Montserrat color4D font16" [innerHtml]="img.hashtag"></span>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <!-- profile, caption of post -->\n\n                <!-- Picture-->\n                <div *ngIf="img != undefined" style="background: #e6e6e6;position: relative;" id="image" class="mode1">\n                    <div *ngIf="img.user_id != \'TAT\'" style="font-size: 0;">\n                        <img [src]="img.pictureResize[0].path_full" class="imgslide" (click)="change_mode(2,img,0)" *ngIf="img.pictureResize[0].type == 1">\n                        <video *ngIf="img.pictureResize[0].type == 2" [src]="img.pictureResize[0].path_resize" style="width: 100%;top: 0;bottom: 0;margin: auto;" (click)="change_mode(2,img,0)" controls></video>\n\n                        <span *ngIf="viewMode == 2">\n                            <span *ngFor="let image of img.pictureResize | slice:1:10;let i = index">\n                                <img *ngIf="image.type == 1" [src]="image.path_full" class="imgslide" style="margin-top: 5px;" (click)="change_mode(2,img,i+1)">\n                                <video *ngIf="image.type == 2" [src]="image.path_full" style="width: 100%;top: 0;bottom: 0;margin: auto;margin-top: 5px;"(click)="change_mode(2,img,i+1)" controls></video>\n                            </span>\n                        </span>\n                    </div>\n                    <img id="imge" style="width: 100%; text-align: center;border-radius: unset;" [src]="img.photo_img_Full" (click)=\'change_mode(2,img,i+1)\' class="resize" [ngStyle]="{\'height\': img.sizeFullheight+\'px\'}" *ngIf="img.user_id == \'TAT\'" />\n\n                    <div class="frameFeel" *ngIf="img.user_id != \'TAT\'">\n                        <div class="frameFeeling">\n                            <div class="innerFeeling">{{img.feeling_name}}</div>\n                        </div>\n                    </div>\n                    <div class="frameHeart">\n                        <img src="./assets/icon/icon-hearts6t.png" style="width: 30px;" (click)="bookmark(img,1)" *ngIf="img.status_bookmark">\n                        <img src="./assets/icon/icon-hearts6.png" style="width: 30px;" (click)="bookmark(img,2)" *ngIf="!img.status_bookmark">\n                    </div>\n                    <div class="moreimg_back" *ngIf="img.user_id != \'TAT\' && countImg >= 1 && viewMode == 1" (click)="change_mode(2,img,\'\')">\n                        <div style="position: absolute;bottom: 10px;">\n                            <img style="border-radius: unset;width: 20px;vertical-align: middle;" src="./assets/icon/photoAll.svg" alt="">\n                            <span style="vertical-align: bottom;font-weight: normal;">All Photo({{countImg}})</span>\n                        </div>\n                    </div>\n                </div>\n                <!-- Picture-->\n\n                <!-- Location-->\n                <div class="box_location" *ngIf="viewMode == 2" style="margin-top: 10px !important;">\n                    <ion-grid style="background: transparent;padding: 10px 5px;">\n                        <ion-row>\n                            <ion-col col-1 style="padding: 0;display: grid;">\n                                <img src="./assets/icon/ping-icon.svg" alt="" class="inline" style="border-radius: 0px;height: 15px;width: 15px;margin: auto;">\n                                <!-- <img *ngIf="img.user_id != \'TAT\'" [src]="img.pictureFull[0]" alt="" class="inline" style="border-radius: 0px;height: 32px;width: 32px;">\n                <img *ngIf="img.user_id == \'TAT\'" [src]="img.photo_img_Full" alt="" class="inline" style="border-radius: 0px;height: 32px;width: 32px;"> -->\n                            </ion-col>\n                            <ion-col col-8 style="padding: 0;">\n                                <div class="inline font_12" style="width: 100%;">\n                                    <div class="Montserrat text_1line" style="width: 96%" [innerHTML]="img.photo_locationText"></div>\n                                    <div class="Montserrat text_1line" style="max-width:60%;font-style: normal;font-weight: bold;display: inline-flex;" [innerHTML]="img.photo_province"></div>\n                                    <div class="Montserrat text_1line" style="color: #0076d0;font-size: 12px;font-weight: bold;margin-right: 5px;float: right;display: inline-block;">\n                                        {{img.distant}} km.</div>\n                                </div>\n                            </ion-col>\n                            <ion-col col-3 style="padding: 0;display: grid;">\n                                <img src="./assets/icon/let\'sgo.svg" alt="" style="border-radius: 0px;margin: auto;width: 90px;" class="inline" (click)="startExternalMap(img)">\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n                <!-- Location-->\n\n                <!-- Location-->\n                <div class="box_location" *ngIf="viewMode == 1" style="">\n                    <ion-grid style="background: transparent;padding: 10px 5px;">\n                        <ion-row>\n                            <ion-col col-1 style="padding: 0;display: grid;">\n                                <img src="./assets/icon/ping-icon.svg" alt="" class="inline" style="border-radius: 0px;height: 15px;width: 15px;margin: auto;">\n                                <!-- <img *ngIf="img.user_id != \'TAT\'" [src]="img.pictureFull[0]" alt="" class="inline" style="border-radius: 0px;height: 32px;width: 32px;">\n                <img *ngIf="img.user_id == \'TAT\'" [src]="img.photo_img_Full" alt="" class="inline" style="border-radius: 0px;height: 32px;width: 32px;"> -->\n                            </ion-col>\n                            <ion-col col-8 style="padding: 0;">\n                                <div class="inline" style="width: 100%;font-size: 13px;">\n                                    <div class="Montserrat text_1line" style="width: 96%" [innerHTML]="img.photo_locationText"></div>\n                                    <div class="Montserrat text_1line" style="max-width:60%;font-style: normal;display: inline-flex;" [innerHTML]="img.photo_province"></div>\n                                    <div class="Montserrat text_1line" style="color: #0076d0;margin-right: 5px;float: right;display: inline-block;">\n                                        {{img.distant}} km.</div>\n                                </div>\n                            </ion-col>\n                            <ion-col col-3 style="padding: 0;display: grid;">\n                                <img src="./assets/icon/let\'sgo.svg" alt="" style="border-radius: 0px;margin: auto;width: 90px;" class="inline" (click)="startExternalMap(img)">\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n                <!-- Location-->\n\n                <!-- coconuts ,comments icon and budge -->\n                <ion-grid class="gridComment" *ngIf="viewMode == 2" style="padding-top: 0px;padding-bottom: 0px;">\n                    <ion-row style="border-bottom: 1px solid #e4e4e4;padding:0px;">\n                        <ion-col col-6 style="padding-top: 9px;padding-bottom: 8px;">\n                            <img src="./img/icon_coconut_gray.svg" style="width: 25px;vertical-align: middle;" alt="" (click)="like(img,2,i,1)" *ngIf="!img.status_like">\n                            <div id="like{{img.photo_id}}" *ngIf="img.status_like" style="display: inline-block ;" (click)="like(img,1,i,1)">\n                                <img src="./img/icon_coconut.png" style="width: 25px;vertical-align: middle;" alt="">\n                                <span class=\'like-iconTNew\'>\n                <div class=\'heart-animation-1\'></div>\n                <div class=\'heart-animation-2\'></div>\n              </span>\n                            </div>\n                            <!-- <div (click)="coconut(img)" style="margin-left: 5px;display: inline-block;position: relative;width: 25px;height: 25px;vertical-align: middle;left: -5px;"\n              *ngIf="img.imageLike.length != 0 && img.user_id != \'TAT\'" [ngClass]="[(img.imageLike.length == 1) ? \'Like1Users\' : \'\',  (img.imageLike.length == 2) ? \'Like2Users\': \'\', (img.imageLike.length > 2) ? \'Like3Users\' : \'\']">\n\n              <div class="userLike" *ngIf="img.imageLike[0]" [ngStyle]="{\'background\': \'url(\'+img.imageLike[0]+\')\'}">\n              </div>\n              <div class="userLike" style="left: 12px;" *ngIf="img.imageLike[1]" [ngStyle]="{\'background\': \'url(\'+img.imageLike[1]+\')\'}"></div>\n              <div class="userLike" style="left: 24px;display: grid;" *ngIf="img.imageLike[2]">\n                <div style="margin: auto;font-size: 18px;font-style: normal;">+</div>\n              </div>\n            </div> -->\n\n                            <div style="display: inline-block;position: relative;height: 20px;vertical-align: middle;margin-left: -10px;" *ngIf="img.imageLike.length != 0">\n                                <div class="userLike" style="display: grid;min-width: 20px;height: 20px;font-size: 16px;">\n                                    <span class="sumLike" style="font-size: 12px;">{{img.sum_like}}</span>\n                                </div>\n                            </div>\n                            <span (click)="coconut(img)" style="color: #777777;font-style: normal;vertical-align: middle;font-weight: bold;font-size: 14px;" class="fontnormal">Coconut</span>\n                        </ion-col>\n\n                        <ion-col col-6 style="padding-top: 9px;padding-bottom: 8px;" (click)="commentV2()">\n                            <img src="./assets/icon/icon-comment-new-f.svg" alt="" style="width: 25px;vertical-align: middle;" *ngIf="!img.status_comment">\n                            <img src="./assets/icon/icon-comment-new-t.svg" alt="" style="width: 25px;vertical-align: middle;" *ngIf="img.status_comment">\n                            <div style="display: inline-block;position: relative;height: 20px;vertical-align: middle;margin-left: -10px;" *ngIf="img.countComment != 0">\n                                <div class="userLike" style="display: grid;min-width: 20px;height: 20px;font-size: 16px;">\n                                    <span class="sumLike" style="font-size: 12px;">{{img.countComment}}</span>\n                                </div>\n                            </div>\n                            <span style="color: #777777;font-style: normal;vertical-align: middle;font-size: 14px;font-weight: bold;" class="fontnormal">Comment</span>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <!-- coconuts ,comments icon and budge -->\n\n                <!-- coconuts ,comments icon and budge -->\n                <ion-grid class="gridComment" *ngIf="viewMode == 1" style="padding-top: 0px;padding-bottom: 0px;">\n                    <ion-row style="border-bottom: 1px solid #e4e4e4;padding:0px;">\n                        <ion-col col-6 style="padding-top: 9px;padding-bottom: 8px;">\n                            <img src="./img/icon_coconut_gray.svg" style="width: 25px;vertical-align: middle;" alt="" (click)="like(img,2,i,1)" *ngIf="!img.status_like">\n                            <div id="like{{img.photo_id}}" *ngIf="img.status_like" style="display: inline-block ;" (click)="like(img,1,i,1)">\n                                <img src="./img/icon_coconut.png" style="width: 25px;vertical-align: middle;" alt="">\n                                <span class=\'like-iconTNew\'>\n                    <div class=\'heart-animation-1\'></div>\n                    <div class=\'heart-animation-2\'></div>\n                </span>\n                            </div>\n\n                            <div style="display: inline-block;position: relative;height: 20px;vertical-align: middle;margin-left: -10px;" *ngIf="img.imageLike.length != 0">\n                                <div class="userLike" style="display: grid;min-width: 20px;height: 20px;font-size: 16px;">\n                                    <span class="sumLike" style="font-size: 12px;">{{img.sum_like}}</span>\n                                </div>\n                            </div>\n                            <span (click)="coconut(img)" style="color: #777777;font-style: normal;vertical-align: middle;font-weight: bold;font-size: 14px;" class="fontnormal">Coconut</span>\n                        </ion-col>\n\n                        <ion-col col-6 style="padding-top: 9px;padding-bottom: 8px;" (click)="comment()">\n                            <img src="./assets/icon/icon-comment-new-f.svg" alt="" style="width: 25px;vertical-align: middle;" *ngIf="!img.status_comment">\n                            <img src="./assets/icon/icon-comment-new-t.svg" alt="" style="width: 25px;vertical-align: middle;" *ngIf="img.status_comment">\n                            <div style="display: inline-block;position: relative;height: 20px;vertical-align: middle;margin-left: -10px;" *ngIf="img.countComment != 0">\n                                <div class="userLike" style="display: grid;min-width: 20px;height: 20px;font-size: 16px;">\n                                    <span class="sumLike" style="font-size: 12px;">{{img.countComment}}</span>\n                                </div>\n                            </div>\n                            <span style="color: #777777;font-style: normal;vertical-align: middle;font-size: 14px;font-weight: bold;" class="fontnormal">Comment</span>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <!-- coconuts ,comments icon and budge -->\n            </div>\n\n            <div #commentBox id="commentBox" class="ccccc">\n                <!-- comment  -->\n                <div *ngIf="viewMode == 2 && commentMode">\n                    <div *ngFor="let comment of commentlist; let i = index;">\n                        <div style="padding: 10px 15px 0px 15px;position: relative;" *ngIf="comment.status != 1">\n                            <img class="imgproComment" [src]="comment.userUrl" *ngIf="comment.userUrl" />\n                            <div style="display: inline-block;max-width: 80%;">\n                                <div class="comment_box">\n                                    <span style="font-weight: bold;" [innerHtml]="comment.fullname"></span>\n                                    <span [innerHtml]="comment.comment"></span>\n                                </div>\n                                <div class="time_comment">\n                                    <span>{{comment.date | timeComment}}</span>\n                                </div>\n                                <!-- <ion-textarea  placeholder="Enter a description"></ion-textarea> -->\n                            </div>\n                            <i class="icon_setting_img reportComment" (click)="presentActionSheetComment(comment,i)" *ngIf="img.user_id == userglobal || userglobal == comment.userId"></i>\n                        </div>\n                    </div>\n                </div>\n                <!-- comment -->\n\n                <!-- Write a comment -->\n                <div id="writeComment" style="padding: 0px 15px;position: relative;" (click)="commentV2()" *ngIf="viewMode == 2 && commentMode">\n                    <div style="height: 45px;">\n                        <span *ngIf="!st_focus">\n                                <img class="imgproComment" [src]="gd.userProfile.user_path_img" style="vertical-align: middle;" />\n                                <div style="display: inline-block;max-width: 80%;width: 80%;vertical-align: middle;">\n                                  <div class="emtyComment">\n                                    <div style="margin: auto;margin-left: 15px;color: #4c4c4c;">\n                                      Write a comment\n                                    </div>\n                                  </div>\n                                </div>\n                              </span>\n                    </div>\n                </div>\n                <!-- Write a comment -->\n\n                <!-- comment -->\n                <div *ngIf="viewMode == 1">\n                    <div *ngFor="let comment of commentlist; let i = index">\n                        <div style="padding: 10px 15px 0px 15px;position: relative;" *ngIf="comment.status != 1">\n                            <img class="imgproComment" [src]="comment.userUrl" *ngIf="comment.userUrl" />\n                            <div style="display: inline-block;max-width: 80%;">\n                                <div *ngIf="!isEnabled[i]" class="comment_box">\n                                    <span style="font-weight: bold;" [innerHtml]="comment.fullname"></span>\n                                    <span [innerHtml]="comment.comment"></span>\n                                </div>\n                                <ion-textarea #editComments *ngIf="isEnabled[i]" [(ngModel)]="yourComments" style="margin: 0 !important; padding:5px; border-radius: 10px; border: solid 1px dimgray;" placeholder="" autosize autofocus></ion-textarea>\n                                <div class="time_comment">\n                                    <span>{{comment.date | timeComment}}</span>\n                                    <span *ngIf="comment.status == 2 && !isEnabled[i]">Edited</span>\n                                    <span *ngIf="isEnabled[i]">\n                              <button class="btn-edit-comment" (click)="btnCancel(comment, i)" ion-button round color="light" >Cancel</button>\n                              <button class="btn-edit-comment" (click)="btnConfirm(comment, i)" ion-button round color="primary" >Confirm</button>\n                            </span>\n                                </div>\n                            </div>\n                            <i class="icon_setting_img reportComment" (click)="presentActionSheetComment(comment,i)" *ngIf="img.user_id == userglobal || userglobal == comment.userId">\n                        </i>\n                        </div>\n                    </div>\n                </div>\n                <!-- comment -->\n\n\n                <!-- Write a comment -->\n                <div id="writeComment" style="padding: 10px 15px;position: relative;" (click)="comment()" *ngIf="viewMode == 1">\n                    <div style="height: 45px;">\n                        <span *ngIf="!st_focus">\n                                        <img class="imgproComment" [src]="gd.userProfile.user_path_img" style="vertical-align: middle;" />\n                                        <div style="display: inline-block;max-width: 80%;width: 80%;vertical-align: middle;">\n                                        <div class="emtyComment">\n                                            <div style="margin: auto;margin-left: 15px;color: #4c4c4c;">\n                                            Write a comment\n                                            </div>\n                                        </div>\n                                        </div>\n                                    </span>\n                    </div>\n                </div>\n                <!-- Write a comment -->\n            </div>\n\n            <div id="contentBottom">\n                <!-- Same place -->\n                <ion-grid style="padding: 0px 15px 10px 15px;margin-top: 30px;" *ngIf="img.samelength > 1 && viewMode == 1 && textTitle != \'\'">\n                    <ion-row>\n                        <ion-col style="border-bottom: 1px solid #e4e4e4;font-weight: bold;color: #464646;">\n                            <!-- <img src="./assets/icon/pleat_icon.png" style="width: 15px;vertical-align: middle;" alt=""> -->\n                            <div style="width: 65%; vertical-align: middle;display: inline-block;overflow: hidden;text-overflow: clip;white-space: nowrap;" [innerHtml]="textTitle"></div>\n                            <div style="display: inline-block;float:right;vertical-align: middle;color: #FA6980;" (click)="gd.nextpage(navCtrl,\'NewsfeedPage\',{\'data\':{\'photo\': img, \'data\': SamePlace,\'formpage\':img.photo_location,\'type\':\'1\',\'filter\': filter}})">\n                                More\n                                <ion-icon name="ios-arrow-forward" style="vertical-align: middle;"></ion-icon>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n\n\n                <ion-slides pager slidesPerView=\'2.5\' style="padding: 0px 15px;" *ngIf="img.samelength > 1 && viewMode == 1 && textTitle != \'\'">\n                    <span *ngFor="let SamePlace of SamePlace;let i = index;">\n                    <ion-slide class="slide_width" style="padding: 5px;width: 184.5px !important;" (click)="GoPage(\'DetailfeedPage\',SamePlace,\'samePlace\')" *ngIf="SamePlace.photo_id != img.photo_id">\n                        <div *ngIf="SamePlace != undefined && SamePlace != {} " class="Same">\n                        <img *ngIf="SamePlace.pictureResize[0].type == 1" [src]="SamePlace.pictureResize[0].path_resize" style="object-fit: cover;height: 100%;width: 100%;">\n                        <video *ngIf="SamePlace.pictureResize[0].type == 2" [src]="SamePlace.pictureResize[0].path_full" style="width: 100%;top: 0;bottom: 0;margin: auto;margin-top: 5px;"></video>\n                        </div>\n                    </ion-slide>\n                    </span>\n                </ion-slides>\n                <!-- Same place -->\n\n                <!-- Nearby places -->\n                <ion-grid style="padding: 0px 15px 10px 15px;margin-top: 30px;" *ngIf="viewMode == 1">\n                    <ion-row>\n                        <ion-col style="border-bottom: 1px solid #e4e4e4;font-weight: bold;color: #464646;">\n                            <!-- <img src="./assets/icon/pleat_icon.png" style="width: 15px;vertical-align: middle;" alt=""> -->\n                            <div style="width: 65%; vertical-align: middle;display: inline-block;overflow: hidden;text-overflow: clip;white-space: nowrap;">Nearby Places</div>\n                            <div style="display: inline-block;float:right;vertical-align: middle;color: #FA6980;" (click)="gd.nextpage(navCtrl,\'NewsfeedPage\',{\'data\':{\'photo\': img, \'data\': dataNearby,\'formpage\':img.photo_location,\'type\':\'1\',\'filter\': filter2}})">\n                                More\n                                <ion-icon name="ios-arrow-forward" style="vertical-align: middle;"></ion-icon>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n\n                <ion-slides pager slidesPerView=\'2.5\' style="padding: 0px 15px;" *ngIf="viewMode == 1">\n                    <ion-slide class="slide_width" style="padding: 5px;width: 184.5px !important;" *ngFor="let SamePlace of dataNearby;let i = index;" (click)="GoPage(\'DetailfeedPage\',SamePlace,\'samePlace\')">\n                        <div *ngIf="SamePlace != undefined && SamePlace != {} " class="Same">\n                            <img *ngIf="SamePlace.pictureResize[0].type == 1" [src]="SamePlace.pictureResize[0].path_resize" style="object-fit: cover;height: 100%;width: 100%;">\n                            <video *ngIf="SamePlace.pictureResize[0].type == 2" [src]="SamePlace.pictureResize[0].path_full" style="width: 100%;top: 0;bottom: 0;margin: auto;margin-top: 5px;"></video>\n                        </div>\n                    </ion-slide>\n                </ion-slides>\n                <!-- Nearby places -->\n            </div>\n\n        </div>\n        <div style="height: 50px;"></div>\n    </div>\n</ion-content>\n<ion-footer>\n    <div *ngIf="!disabledEditDelete" style="padding: 10px 15px;" class="input_Comment" id="commentFame">\n        <ion-input type="" placeholder="Write a comment" id="inputFocus" #myInput [(ngModel)]="textComment" (ionFocus)="checkFocus()" (ionBlur)="checkBlur()"></ion-input>\n        <img src="./assets/icon/send_icon.svg" alt="" style="vertical-align: middle;padding: 1em;margin: -1em;" (click)="sendComment_comment()" class="send_btn">\n    </div>\n</ion-footer>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/detailfeed/detailfeed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */],
            __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__["a" /* GlobalDataService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], DetailfeedPage);
    return DetailfeedPage;
}());

//# sourceMappingURL=detailfeed.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AutosizeDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutosizeModule; });
/* unused harmony export ɵa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    WindowRef.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] }
    ];
    return WindowRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MAX_LOOKUP_RETRIES = 3;
var AutosizeDirective = /** @class */ (function () {
    function AutosizeDirective(element, _window, _zone) {
        this.element = element;
        this._window = _window;
        this._zone = _zone;
        this.onlyGrow = false;
        this.useImportant = false;
        this.resized = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.autosize = true;
        this.retries = 0;
        this._destroyed = false;
        if (this.element.nativeElement.tagName !== 'TEXTAREA') {
            this._findNestedTextArea();
        }
        else {
            this.textAreaEl = this.element.nativeElement;
            this.textAreaEl.style['overflow-y'] = 'hidden';
            this._onTextAreaFound();
        }
    }
    Object.defineProperty(AutosizeDirective.prototype, "minRows", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minRows = value;
            if (this.textAreaEl) {
                this.textAreaEl.rows = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AutosizeDirective.prototype, "_autosize", {
        set: /**
         * @param {?} autosize
         * @return {?}
         */
        function (autosize) {
            this.autosize = typeof autosize === 'boolean'
                ? autosize
                : true;
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @param {?} textArea
     * @return {?}
     */
    AutosizeDirective.prototype.onInput = /**
     * @param {?} textArea
     * @return {?}
     */
    function (textArea) {
        this.adjust();
    };
    /**
     * @return {?}
     */
    AutosizeDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed = true;
        if (this._windowResizeHandler) {
            this._window.nativeWindow.removeEventListener('resize', this._windowResizeHandler, false);
        }
    };
    /**
     * @return {?}
     */
    AutosizeDirective.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        this.adjust();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AutosizeDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.adjust(true);
    };
    /**
     * @return {?}
     */
    AutosizeDirective.prototype._findNestedTextArea = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.textAreaEl = this.element.nativeElement.querySelector('TEXTAREA');
        if (!this.textAreaEl && this.element.nativeElement.shadowRoot) {
            this.textAreaEl = this.element.nativeElement.shadowRoot.querySelector('TEXTAREA');
        }
        if (!this.textAreaEl) {
            if (this.retries >= MAX_LOOKUP_RETRIES) {
                console.warn('ngx-autosize: textarea not found');
            }
            else {
                this.retries++;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this._findNestedTextArea();
                }), 100);
            }
            return;
        }
        this.textAreaEl.style['overflow-y'] = 'hidden';
        this._onTextAreaFound();
    };
    /**
     * @return {?}
     */
    AutosizeDirective.prototype._onTextAreaFound = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._addWindowResizeHandler();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.adjust();
        }));
    };
    /**
     * @return {?}
     */
    AutosizeDirective.prototype._addWindowResizeHandler = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._windowResizeHandler = Debounce((/**
         * @return {?}
         */
        function () {
            _this._zone.run((/**
             * @return {?}
             */
            function () {
                _this.adjust();
            }));
        }), 200);
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this._window.nativeWindow.addEventListener('resize', _this._windowResizeHandler, false);
        }));
    };
    /**
     * @param {?=} inputsChanged
     * @return {?}
     */
    AutosizeDirective.prototype.adjust = /**
     * @param {?=} inputsChanged
     * @return {?}
     */
    function (inputsChanged) {
        if (inputsChanged === void 0) { inputsChanged = false; }
        if (this.autosize && !this._destroyed && this.textAreaEl && this.textAreaEl.parentNode) {
            /** @type {?} */
            var currentText = this.textAreaEl.value;
            if (inputsChanged === false &&
                currentText === this._oldContent &&
                this.textAreaEl.offsetWidth === this._oldWidth) {
                return;
            }
            this._oldContent = currentText;
            this._oldWidth = this.textAreaEl.offsetWidth;
            /** @type {?} */
            var clone = this.textAreaEl.cloneNode(true);
            /** @type {?} */
            var parent_1 = this.textAreaEl.parentNode;
            clone.style.width = this.textAreaEl.offsetWidth + 'px';
            clone.style.visibility = 'hidden';
            clone.style.position = 'absolute';
            clone.textContent = currentText;
            parent_1.appendChild(clone);
            clone.style['overflow-y'] = 'hidden';
            clone.style.height = 'auto';
            /** @type {?} */
            var height = clone.scrollHeight;
            // add into height top and bottom borders' width
            /** @type {?} */
            var computedStyle = this._window.nativeWindow.getComputedStyle(clone, null);
            height += parseInt(computedStyle.getPropertyValue('border-top-width'));
            height += parseInt(computedStyle.getPropertyValue('border-bottom-width'));
            // add into height top and bottom paddings width
            height += parseInt(computedStyle.getPropertyValue('padding-top'));
            height += parseInt(computedStyle.getPropertyValue('padding-bottom'));
            /** @type {?} */
            var oldHeight = this.textAreaEl.offsetHeight;
            /** @type {?} */
            var willGrow = height > oldHeight;
            if (this.onlyGrow === false || willGrow) {
                /** @type {?} */
                var lineHeight = this._getLineHeight();
                /** @type {?} */
                var rowsCount = height / lineHeight;
                if (this._minRows && this._minRows >= rowsCount) {
                    height = this._minRows * lineHeight;
                }
                else if (this.maxRows && this.maxRows <= rowsCount) {
                    // never shrink the textarea if onlyGrow is true
                    /** @type {?} */
                    var maxHeight = this.maxRows * lineHeight;
                    height = this.onlyGrow ? Math.max(maxHeight, oldHeight) : maxHeight;
                    this.textAreaEl.style['overflow-y'] = 'auto';
                }
                else {
                    this.textAreaEl.style['overflow-y'] = 'hidden';
                }
                /** @type {?} */
                var heightStyle = height + 'px';
                /** @type {?} */
                var important = this.useImportant ? 'important' : '';
                this.textAreaEl.style.setProperty('height', heightStyle, important);
                this.resized.emit(height);
            }
            parent_1.removeChild(clone);
        }
    };
    /**
     * @private
     * @return {?}
     */
    AutosizeDirective.prototype._getLineHeight = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var lineHeight = parseInt(this.textAreaEl.style.lineHeight, 10);
        if (isNaN(lineHeight) && this._window.nativeWindow.getComputedStyle) {
            /** @type {?} */
            var styles = this._window.nativeWindow.getComputedStyle(this.textAreaEl);
            lineHeight = parseInt(styles.lineHeight, 10);
        }
        if (isNaN(lineHeight)) {
            /** @type {?} */
            var fontSize = this._window.nativeWindow.getComputedStyle(this.textAreaEl, null).getPropertyValue('font-size');
            lineHeight = Math.floor(parseInt(fontSize.replace('px', ''), 10) * 1.5);
        }
        return lineHeight;
    };
    AutosizeDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */], args: [{
                    selector: '[autosize]'
                },] }
    ];
    /** @nocollapse */
    AutosizeDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] },
        { type: WindowRef },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] }
    ]; };
    AutosizeDirective.propDecorators = {
        minRows: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] }],
        _autosize: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */], args: ['autosize',] }],
        maxRows: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] }],
        onlyGrow: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] }],
        useImportant: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] }],
        resized: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */] }],
        onInput: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */], args: ['input', ['$event.target'],] }]
    };
    return AutosizeDirective;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    AutosizeDirective.prototype._minRows;
    /** @type {?} */
    AutosizeDirective.prototype.maxRows;
    /** @type {?} */
    AutosizeDirective.prototype.onlyGrow;
    /** @type {?} */
    AutosizeDirective.prototype.useImportant;
    /** @type {?} */
    AutosizeDirective.prototype.resized;
    /**
     * @type {?}
     * @private
     */
    AutosizeDirective.prototype.autosize;
    /**
     * @type {?}
     * @private
     */
    AutosizeDirective.prototype.retries;
    /**
     * @type {?}
     * @private
     */
    AutosizeDirective.prototype.textAreaEl;
    /**
     * @type {?}
     * @private
     */
    AutosizeDirective.prototype._oldContent;
    /**
     * @type {?}
     * @private
     */
    AutosizeDirective.prototype._oldWidth;
    /**
     * @type {?}
     * @private
     */
    AutosizeDirective.prototype._windowResizeHandler;
    /**
     * @type {?}
     * @private
     */
    AutosizeDirective.prototype._destroyed;
    /** @type {?} */
    AutosizeDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    AutosizeDirective.prototype._window;
    /**
     * @type {?}
     * @private
     */
    AutosizeDirective.prototype._zone;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
/**
 * @param {?} func
 * @param {?} wait
 * @param {?=} immediate
 * @return {?}
 */
function Debounce(func, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    /** @type {?} */
    var timeout;
    return (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var context = this;
        /** @type {?} */
        var args = arguments;
        /** @type {?} */
        var later = (/**
         * @return {?}
         */
        function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        });
        /** @type {?} */
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AutosizeModule = /** @class */ (function () {
    function AutosizeModule() {
    }
    AutosizeModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                    declarations: [AutosizeDirective],
                    imports: [],
                    providers: [
                        WindowRef
                    ],
                    exports: [AutosizeDirective]
                },] }
    ];
    return AutosizeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-autosize.js.map


/***/ })

});
//# sourceMappingURL=2.js.map