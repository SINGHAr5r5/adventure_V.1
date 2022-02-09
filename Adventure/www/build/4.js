webpackJsonp([4],{

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageModule", function() { return CameraPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(541);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CameraPageModule = /** @class */ (function () {
    function CameraPageModule() {
    }
    CameraPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__camera__["a" /* CameraPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__camera__["a" /* CameraPage */]),
            ],
        })
    ], CameraPageModule);
    return CameraPageModule;
}());

//# sourceMappingURL=camera.module.js.map

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

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_library__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_menu_right_menu_right__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_video_editor__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jquery__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_jquery__);
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













var baseUrl = "https://myadventureearth.com/api/omiseCall/upload.php";
var MAX_FILE_SIZE = 50 * 1024 * 1024;
var ALLOWED_MIME_TYPE = "video/mp4";
/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CameraPage = /** @class */ (function () {
    function CameraPage(videoEditor, loadingCtrl, transfer, alertCtrl, popoverCtrl, events, modalCtrl, file, sanitizer, photoLibrary, gd, camera, SFT, location, navCtrl, navParams, actionSheetCtrl) {
        var _this = this;
        this.videoEditor = videoEditor;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.file = file;
        this.sanitizer = sanitizer;
        this.photoLibrary = photoLibrary;
        this.gd = gd;
        this.camera = camera;
        this.SFT = SFT;
        this.location = location;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.win = window;
        this.numload = 1;
        this.imageChoos = [];
        this.data = {};
        this.highlights = 1;
        this.heightPhoto = 0;
        this.Latitude = "";
        this.Longitude = "";
        this.status = true; //prevent multi click
        this.imageShow = [];
        this.dataGet = "";
        this.stOpen = true;
        this.loading = "";
        this.imgDelete = [];
        this.PathOld = "";
        this.stOpenModal = true;
        this.newVideo = '';
        this.uriVideo = '';
        this.items_img = '';
        this.banner = '';
        this.banner1 = '';
        this.posthighlight = [];
        this.myimage_banner = ['', 'https://www.myadventureearth.com/assets/img/travel.svg', 'https://www.myadventureearth.com/assets/img/good.svg'];
        // hlighlighStatus: any ="";
        this.myimage = ['', 'https://www.myadventureearth.com/assets/img/good.svg', 'https://www.myadventureearth.com/assets/img/travel.svg'];
        this.mybanner = '';
        this.data['feeling_id'] = 1;
        this.data['feeling_tx_sort'] = 1;
        this.data['TypeLocation'] = 1;
        this.data['TypeLocation_srot'] = 1;
        this.data['highlights'] = this.gd.highlights;
        this.data['user_id'] = this.gd.userProfile['user_id'];
        this.loadLocation();
        this.showiconbar();
        this.dataGet = navParams.get('data');
        console.log("data from previous page", this.dataGet);
        console.log("old page", this.gd.oldPage);
        this.PathOld = this.gd.oldPage;
        if (this.gd.posthighlight.length !== 0) {
            console.log("--------ค่าไม่ว่าง--------");
        }
        else {
            console.log("--------ค่าว่าง--------");
        }
        console.log(this.dataGet), '==========ssss=========';
        if (this.dataGet != '' && this.dataGet != undefined) {
            this.heightPhoto = navParams.get('data')['sizeFullheight'];
            this.imageShow = navParams.get('data')['pictureResize'];
            navParams.get('data')['pictureResize'].forEach(function (element, index) {
                var dataPush;
                if (element.type == 2) { //video
                    dataPush = {
                        type: '5',
                        id: element.photo_id,
                        videoPath: element.path_full
                    };
                }
                else { //image
                    dataPush = {
                        type: '4',
                        id: element.photo_id,
                        path: element.path_full
                    };
                }
                _this.imageChoos.push(dataPush);
            });
            console.log("imageChoos from previous page", this.imageChoos, "_______-------_____-----");
            console.log(navParams.get('data'), "-------sss----");
            this.data['TypeLocation_srot'] = gd.TypeLocation.filter(function (word) { return word.TypeLocation_id == navParams.get('data')['TypeLocation_id']; })[0].TypeLocation_srot;
            this.data['feeling_tx_sort'] = gd.feelingNew.filter(function (word) { return word.feeling_tx_id == navParams.get('data')['feeling_id']; })[0].feeling_tx_sort;
            this.data['photo_location'] = navParams.get('data')['photo_location'];
            this.data['photo_caption'] = navParams.get('data')['hashtag'];
            this.data['photo_la'] = navParams.get('Latitude');
            this.data['photo_long'] = navParams.get('Longitude');
            this.data['caption'] = navParams.get('data')['capEdit'];
            this.data['TypeLocation'] = navParams.get('data')['TypeLocation_id'];
            this.data['feeling_id'] = navParams.get('data')['feeling_id'];
            this.Latitude = navParams.get('data')['photo_la'];
            this.Longitude = navParams.get('data')['photo_long'];
            this.data['photo_id'] = navParams.get('data')['photo_id'];
            this.data['highlights'] = navParams.get('data')['highlights'];
            console.log(this.data);
            // this.aroundmap.push(dataaround);
            //  this.select(0);
            setTimeout(function () {
                _this.loadLocation();
            }, 500);
        }
    }
    CameraPage.prototype.presentPopover = function (myEvent) {
        __WEBPACK_IMPORTED_MODULE_12_jquery__(".share").removeClass('share');
        __WEBPACK_IMPORTED_MODULE_12_jquery__("body").addClass('rightMenu');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_9__components_menu_right_menu_right__["a" /* MenuRightComponent */], { navCtrl: this.navCtrl });
        popover.present({
            ev: myEvent
        });
    };
    CameraPage.prototype.goprofile = function () {
        this.gd.nextpage(this.navCtrl, 'ProfilePage', this.gd.userProfile);
    };
    CameraPage.prototype.gonoti = function () {
        this.gd.nextpage(this.navCtrl, 'NotificationsPage', {});
    };
    CameraPage.prototype.saerchPage = function () {
        var _this = this;
        var modalbirthday = this.modalCtrl.create('SearchNewfeedPage', { typeSearch: "Recent" });
        modalbirthday.onDidDismiss(function (data) {
            console.log(data);
            _this.gd.nextrootpage(_this.navCtrl, "NewsfeedPage", { filter: data });
        });
        modalbirthday.present();
    };
    CameraPage.prototype.ionViewDidEnter = function () {
        console.log(this.data.photo_id, "========== Photo_id ==========");
        this.PathOld = this.gd.oldPage;
        this.stOpenModal = true;
        if (!this.navParams.get('data')) {
            this.data = {};
            console.log('ionViewDidEnter');
            this.heightPhoto = 0;
            this.data['feeling_id'] = 1;
            this.data['highlights'] = this.gd.highlights;
            this.data['feeling_tx_sort'] = 1;
            this.data['TypeLocation'] = 1;
            this.data['TypeLocation_srot'] = 1;
            this.data['photo_id'] = 0;
            this.data['user_id'] = this.gd.userProfile['user_id'];
            this.imageShow = [];
            this.imageChoos = [];
            this.Latitude = this.SFT.userlocation['lat'];
            this.Longitude = this.SFT.userlocation['long'];
            this.loadLocation();
            if (this.gd.chooserShare == 1) {
                this.takePicture();
            }
            else {
                this.imageModal();
            }
        }
    };
    CameraPage.prototype.loadLocation = function () {
        var _this = this;
        console.log(this.dataGet, "================DDDDDDDDDDDDDDD===================");
        console.log('loadLocation');
        console.log(this.Latitude, this.Longitude);
        if (!this.navParams.get('data')) {
            if (this.Latitude != "" && this.Longitude != "") {
                console.log('if');
                var data = {
                    'latitude': this.Latitude,
                    'longitude': this.Longitude
                };
                this.SFT.ServiceThread('aroundmap', data, 'POST')
                    .then(function (data) {
                    if (data['res_code'] == '00') {
                        var i = 0;
                        _this.data['photo_la'] = data['res_result'][0]['place_location']['lat'];
                        _this.data['photo_long'] = data['res_result'][0]['place_location']['lng'];
                        _this.data['photo_location'] = data['res_result'][0]['place_name'];
                    }
                });
            }
            else {
                console.log('else');
                var data = {
                    'latitude': this.SFT.userlocation['lat'],
                    'longitude': this.SFT.userlocation['long']
                };
                this.SFT.ServiceThread('aroundmap', data, 'POST')
                    .then(function (data) {
                    if (data['res_code'] == '00') {
                        console.log(data);
                        console.log(data['res_result'][0]);
                        _this.data['photo_la'] = data['res_result'][0]['place_location']['lat'];
                        _this.data['photo_long'] = data['res_result'][0]['place_location']['lng'];
                        _this.data['photo_location'] = data['res_result'][0]['place_name'];
                    }
                });
            }
        }
    };
    CameraPage.prototype.ionViewDidLoad = function () {
        this.data.highlights = this.gd.highlights;
        if (this.data.highlights == undefined) {
            this.data.highlights = 1;
        }
        console.log("camera hlighligh", this.data.highlights, ">>>>>>>>>>");
        console.log('ionViewDidLoad CameraPage');
        this.banner = this.myimage[1];
        this.banner1 = this.myimage[2];
        console.log(this.gd.chooserShare);
        console.log(!this.navParams.get('data'));
        var t = this;
        __WEBPACK_IMPORTED_MODULE_12_jquery__("#contentTag").focus(function () {
            console.log('contentTag');
            console.log(t.content);
            t.content.scrollToBottom();
        });
        if (!this.navParams.get('data') && this.stOpen) {
            if (this.gd.chooserShare == 1) {
                this.takePicture();
            }
            else {
                console.log('testOpen');
                this.imageModal();
            }
        }
    };
    CameraPage.prototype.showiconbar = function () {
    };
    CameraPage.prototype.addMore = function () {
        // this.gd.openChooserApp().then(data => {
        //   if (data == 1) {
        //     this.takePicture();
        //   } else if (data == 2) {
        //     this.imageModal();
        //     this.stOpenModal = false;
        //   } else if (data == 3) {
        //     this.takeVideo();
        //   }
        // })
        this.imageModal();
        this.stOpenModal = false;
        // this.takeVideo();
    };
    CameraPage.prototype.onKey = function (event) {
        // $('#textCaption').val().replace('\n','<br />');
        //  console.log( JSON.stringify($('#textCaption').val().replace(/\n/g,'<br />')));
        // console.log(JSON.stringify(this.data.caption.replace(/\n/g,'<br />')))
    };
    CameraPage.prototype.imageModal = function () {
        var _this = this;
        if (this.stOpen) {
            this.stOpen = false;
            var modal = this.modalCtrl.create('ModelImagePage', { data: this.imageChoos });
            modal.dismiss();
            modal.present();
            modal.onDidDismiss(function (res) {
                console.log('get photo from ModelImagePage ', res);
                _this.stOpen = true;
                if (res) {
                    if (res != 'close') {
                        console.log('test');
                        _this.imageShow = [];
                        _this.imageChoos = res;
                        var t_1 = _this;
                        _this.imageChoos.forEach(function (element, index) {
                            console.log(t_1.imageChoos);
                            if (t_1.heightPhoto == 0) {
                                t_1.heightPhoto = (__WEBPACK_IMPORTED_MODULE_12_jquery__('ng-component').width() * element.original.height) / element.original.width;
                            }
                            if (t_1.imageChoos[0].type == 2) {
                                if (element.latitude != 0 && element.longitude != 0) {
                                    t_1.Latitude = t_1.imageChoos[0].original.latitude;
                                    t_1.Longitude = t_1.imageChoos[0].original.longitude;
                                    setTimeout(function () {
                                        console.log('loadlocation');
                                        t_1.loadLocation();
                                    }, 100);
                                }
                            }
                            // t.imageShow.push(element["path"]);
                        });
                    }
                    else {
                        if (_this.stOpenModal) {
                            _this.back();
                        }
                    }
                }
            });
        }
    };
    CameraPage.prototype.takePicture = function () {
        console.log('log');
        var t = this;
        var key = Date.now() + this.SFT.user_api_key;
        this.camera.getPicture({
            quality: 50,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            allowEdit: true,
            mediaType: this.camera.MediaType.PICTURE,
        }).then(function (imageData) {
            var image = document.createElement('img');
            image.addEventListener('load', function () {
                // t.imageShow.push("data:image/jpeg;base64," + imageData);
                if (t.heightPhoto == 0) {
                    t.heightPhoto = (__WEBPACK_IMPORTED_MODULE_12_jquery__('ng-component').width() * image.width) / image.width;
                }
                // console.log(t.imageShow, $('ng-component').width(), t.heightPhoto, image.width, image.height);
                var dataPush = {
                    type: '1',
                    id: t.imageChoos.length,
                    path: "data:image/jpeg;base64," + imageData
                };
                t.imageChoos.push(dataPush);
            });
            image.src = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            // this.presentActionSheet();
        });
    };
    // libraryImage() {
    //   let option: GetLibraryOptions = {
    //     quality: 10,
    //     thumbnailHeight: 150,
    //     thumbnailWidth: 150
    //   }
    //   let t = this;
    //   this.photoLibrary.requestAuthorization({ write: true, read: true }).then(() => {
    //     this.photoLibrary.getLibrary(option).subscribe({
    //       next: library => {
    //         t.allImage = library;
    //         this.getShowImage();
    //       },
    //       error: err => { console.log('could not get photos'); },
    //       complete: () => { console.log('done getting photos'); }
    //     });
    //   })
    // }
    // getShowImage() {
    //   if (this.imgPath.length < this.allImage.length) {
    //     let indexs = this.imgPath.length;
    //     for (let index = indexs; index < this.numload * 30; index++) {
    //       if (this.imgPath.length > index) {
    //         this.photoLibrary.getThumbnail(this.allImage[index], {}).then(datas => {
    //           var objectURL = URL.createObjectURL(datas);
    //           this.allImage[index].statusChooser = 0;
    //           this.allImage[index].id = index;
    //           this.allImage[index].number = 0;
    //           this.allImage[index].path = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    //           this.imgPath.push(this.allImage[index]);
    //         })
    //       }
    //       if (index >= (this.numload * 30)) {
    //         this.numload++;
    //       }
    //     }
    //   }
    // }
    // chooserImage(data) {
    //   if (data.statusChooser == 0) {
    //     if (this.imageChoos.length < 10) {
    //       this.imageChoos.push(data);
    //       data.statusChooser = 1;
    //       data.number = this.imageChoos.length;
    //     } else {
    //       this.gd.toast('limit 10 picture')
    //     }
    //   } else {
    //     data.statusChooser = 0;
    //     data.number = 0;
    //     this.imageChoos.splice(this.imageChoos.map((el) => el.id).indexOf(data.id), 1);
    //     this.imgPath.filter(datas => {
    //       if (datas.statusChooser == 1) {
    //         datas.number = this.imageChoos.map((el) => el.id).indexOf(datas.id) + 1;
    //       }
    //     });
    //   }
    // }
    CameraPage.prototype.posts = function () {
        // console.log();
        __WEBPACK_IMPORTED_MODULE_12_jquery__("#textCaption").val(this.data.photo_caption);
        console.log(__WEBPACK_IMPORTED_MODULE_12_jquery__("#contentTag").html());
    };
    CameraPage.prototype.post = function () {
        var _this = this;
        if (this.data['highlights'] == undefined) {
            this.data['highlights'] = 1;
        }
        console.log('========================== log Data ==========================', this.gd.highlights);
        console.log('============= photo_location =============', this.data['photo_location']);
        console.log('============= photo_la =============', this.data['photo_la']);
        console.log('============= photo_long =============', this.data['photo_long']);
        console.log('============= caption =============', this.data['caption']);
        console.log('============= TypeLocation =============', this.data['TypeLocation']);
        console.log('============= feeling_id =============', this.data['feeling_id']);
        console.log('============= photo_id =============', this.data['photo_id']);
        console.log('============= feeling_tx_sort =============', this.gd.feelingNew[this.data['feeling_tx_sort'] - 1].feeling_tx_name);
        console.log('============= TypeLocation =============', this.gd.TypeLocation[this.data['TypeLocation'] - 1].TypeLocation_name);
        console.log('============= highlights =============', this.data['highlights']);
        this.data.caption = __WEBPACK_IMPORTED_MODULE_12_jquery__("#contentTag").html(); //ถ้าไม่กรอกอะไรจะมีค่า "<br>" ควรใช้ .text() แทน .html() 
        this.data['key'] = this.navParams.get('key');
        console.log('html() caption of post', this.data.caption);
        console.log('val() caption of post', __WEBPACK_IMPORTED_MODULE_12_jquery__("#contentTag").val());
        console.log('text() caption of post', __WEBPACK_IMPORTED_MODULE_12_jquery__("#contentTag").text());
        if (this.data['caption'] != undefined && this.data['photo_location'] != undefined && this.data['TypeLocation'] != undefined && this.data['feeling_id'] != undefined && this.data['highlights'] != undefined &&
            __WEBPACK_IMPORTED_MODULE_12_jquery__["trim"](this.data['caption']) != "" && __WEBPACK_IMPORTED_MODULE_12_jquery__["trim"](this.data['photo_location']) != "" && __WEBPACK_IMPORTED_MODULE_12_jquery__["trim"](this.data['feeling_id']) != "" && __WEBPACK_IMPORTED_MODULE_12_jquery__["trim"](this.data['highlights']) != "" && this.data.caption !== undefined && this.data.caption !== "" && __WEBPACK_IMPORTED_MODULE_12_jquery__("#contentTag").text() != "") {
            if (this.status == true) {
                this.status = false;
                if (this.navParams.get('data')) { //ถ้ามี data เป็นการ edit
                    // $('#feeling'+this.data['feeling_id']+' div')[0]['parentElement']['innerText'];
                    // TypeLocation_name
                    if (this.imageChoos != undefined && this.imageChoos.length > 0) {
                        var dataImage_1 = [];
                        this.imageChoos.forEach(function (element, index) {
                            //upload only picture, not video
                            if (element.type != 3 && element.type != 4 && element.type != 5) {
                                var datapush = {
                                    number: index,
                                    path: element.path
                                };
                                dataImage_1.push(datapush);
                            }
                        });
                        this.data.imgUpload = JSON.stringify(dataImage_1);
                        this.data.imgDelete = JSON.stringify(this.imgDelete);
                        // this.data.caption = JSON.stringify(this.data.caption.replace(/\n/g,'<br />'));
                        this.data.caption = __WEBPACK_IMPORTED_MODULE_12_jquery__("#contentTag").html();
                        this.SFT.ServiceThread('UpdatePOSTIMG', this.data, 'POST')
                            .then(function (datas) {
                            var video = [];
                            if (datas['res_code'] == '00') {
                                if (_this.imgDelete.length > 0) {
                                    _this.imgDelete.forEach(function (element) {
                                        _this.navParams.get('data')['pictureResize'].splice(_this.navParams.get('data')['pictureResize'].map(function (el) { return el.photo_id; }).indexOf(element["id"]), 1);
                                    });
                                }
                                if (dataImage_1.length > 0) {
                                    console.log("%c dataImage.length >  0", "color:blue");
                                    var dataSend = {
                                        'lastId': _this.data.photo_id,
                                        'original': '',
                                        'folder_name': '',
                                        'nameiamge': '',
                                        'namefile': '',
                                    };
                                    _this.SFT.ServiceThread('updatePhotoResize', dataSend, 'POST');
                                    datas["res_result"].forEach(function (element) {
                                        var dataImagePush = {
                                            photo_id: element.photoId,
                                            path_full: 'https://myadventureearth.com/' + element.photoPath,
                                            path_resize: 'https://myadventureearth.com/' + element.photoPath,
                                            number: '',
                                            type: 1
                                        };
                                        _this.navParams.get('data')['pictureResize'].push(dataImagePush);
                                    });
                                    console.log("imageChoos ==== ", _this.imageChoos);
                                }
                                else {
                                    console.log("%c dataImage.length <  0", "color:brown");
                                }
                                _this.imageChoos.forEach(function (element, index) {
                                    if (element.type == 3) {
                                        var datapush = {
                                            path: element.videoPath,
                                            number: index
                                        };
                                        video.push(datapush);
                                        console.log("-------------video push-----------");
                                        console.log(video);
                                        console.log("-------------video push-----------");
                                    }
                                });
                                console.log('====== Post()=====', _this.navParams.get('data'));
                                _this.navParams.get('data')['photo_location'] = _this.data['photo_location'];
                                _this.navParams.get('data')['photo_locationText'] = _this.data['photo_location'];
                                _this.navParams.get('data')['Latitude'] = _this.data['photo_la'];
                                _this.navParams.get('data')['Longitude'] = _this.data['photo_long'];
                                _this.navParams.get('data')['photo_caption'] = datas["res_results"];
                                _this.navParams.get('data')['hashtag'] = datas["res_results"];
                                _this.navParams.get('data')['capEdit'] = _this.data['caption'];
                                _this.navParams.get('data')['TypeLocation_id'] = _this.data['TypeLocation'];
                                _this.navParams.get('data')['feeling_id'] = _this.data['feeling_id'];
                                _this.navParams.get('data')['photo_id'] = _this.data['photo_id'];
                                _this.navParams.get('data')['feeling_name'] = _this.gd.feelingNew[_this.data['feeling_tx_sort'] - 1].feeling_tx_name;
                                _this.navParams.get('data')['TypeLocation_name'] = _this.gd.TypeLocation[_this.data['TypeLocation'] - 1].TypeLocation_name;
                                _this.navParams.get('data')['highlights'] = _this.gd['highlights'];
                                console.log('ZZZZZZZZZZZZZZZ caption ZZZZZZZZZZZZZZZ', _this.data['caption']);
                                _this.gd.toast(' Update Success');
                                if (_this.data.photo_share) {
                                    _this.gd.facebookShare(datas);
                                }
                                if (video.length > 0) {
                                    var t_2 = _this;
                                    var n_1 = video.length;
                                    _this.SFT.loading_present('upload Video');
                                    video.forEach(function (element, index) { return __awaiter(_this, void 0, void 0, function () {
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, t_2.uploadVideo(this.data.photo_id, element).then(function (data) {
                                                        n_1--;
                                                        if (n_1 == 0) {
                                                            console.log("***************************************************************");
                                                            console.log(data);
                                                            console.log(data["res_code"]);
                                                            console.log("***************************************************************");
                                                            if (data["res_code"] == "00") {
                                                                setTimeout(function () {
                                                                    var dataImagePush = {
                                                                        photo_id: '',
                                                                        path_full: data["res_result"],
                                                                        path_resize: data["res_result"],
                                                                        number: '',
                                                                        type: 2
                                                                    };
                                                                    _this.navParams.get('data')['pictureResize'].push(dataImagePush);
                                                                }, 1000);
                                                                console.log(" %c upload video successfully.", "color:green");
                                                            }
                                                            else {
                                                                _this.gd.toast('upload video failed.');
                                                            }
                                                            try {
                                                                _this.SFT.Check_Count('upload Video');
                                                                // this.navCtrl.pop();
                                                                _this.navCtrl.popToRoot();
                                                            }
                                                            catch (error) {
                                                            }
                                                        }
                                                    })];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                }
                                else {
                                    // this.navCtrl.pop();
                                    _this.navCtrl.popToRoot();
                                }
                            }
                            else {
                                // console.log(datas);
                            }
                        });
                    }
                    else {
                        this.gd.toast("Please share your adventure");
                        this.status = true;
                    }
                }
                else { //การ new post 
                    console.log("%c New Post", "color: green");
                    console.log("%c imageChoos " + this.imageChoos, "color: green", this.imageChoos);
                    if (this.imageChoos.length > 0) {
                        var video_1 = [];
                        var dataImage_2 = [];
                        this.imageChoos.forEach(function (element, index) {
                            if (element.type != 3) {
                                var datapush = {
                                    number: index,
                                    path: element.path
                                };
                                dataImage_2.push(datapush);
                            }
                        });
                        var datasend = JSON.parse(JSON.stringify(this.data));
                        // if(this.gd.platformtype == 'ios'){
                        //   datasend["img"] = JSON.stringify(datasend["img"]);
                        // }else{
                        console.log(dataImage_2);
                        datasend["img"] = JSON.stringify(dataImage_2);
                        console.log(datasend);
                        this.SFT.ServiceThread('Postimg', datasend, 'POST')
                            .then(function (data) {
                            if (data['res_code'] == '00') {
                                var dataSend = {
                                    'lastId': data["lastId"],
                                    'original': data["pathOriginal"],
                                    'folder_name': data["folder_name"],
                                    'nameiamge': data["nameiamge"],
                                    'namefile': data["namefile"],
                                };
                                _this.SFT.ServiceThread('updatePhotoResize', dataSend, 'POST');
                                _this.imageChoos.forEach(function (element, index) {
                                    if (element.type == 3) {
                                        var datapush = {
                                            path: element.videoPath,
                                            number: index
                                        };
                                        video_1.push(datapush);
                                    }
                                });
                                if (video_1.length > 0) {
                                    var t_3 = _this;
                                    var n_2 = video_1.length;
                                    _this.SFT.loading_present('upload Video');
                                    video_1.forEach(function (element, index) { return __awaiter(_this, void 0, void 0, function () {
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, t_3.uploadVideo(data["lastId"], element).then(function (data) {
                                                        console.log(element);
                                                        console.log('data');
                                                        console.log(n_2);
                                                        n_2--;
                                                        if (n_2 == 0) {
                                                            setTimeout(function () {
                                                                _this.events.publish('Newpost', true);
                                                            }, 1000);
                                                            if (_this.data.photo_share) {
                                                                _this.gd.facebookShare(data);
                                                            }
                                                            _this.navCtrl.parent.select(0);
                                                            try {
                                                                _this.SFT.Check_Count('upload Video');
                                                                console.log('test');
                                                            }
                                                            catch (error) {
                                                            }
                                                        }
                                                    })];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                }
                                else {
                                    setTimeout(function () {
                                        _this.events.publish('Newpost', true);
                                    }, 1000);
                                    if (_this.data.photo_share) {
                                        _this.gd.facebookShare(data);
                                    }
                                    _this.navCtrl.parent.select(0);
                                }
                            }
                            else {
                                _this.navCtrl.popToRoot();
                                _this.navCtrl.parent.select(0);
                                _this.events.publish('Newpost', false);
                            }
                        });
                    }
                    else {
                        console.log("%c New Post no image or video " + this.imageChoos.length, "color: orange");
                        this.gd.toast("Please share your adventure");
                    }
                    setTimeout(function () {
                        _this.status = true;
                    }, 5000);
                }
            }
        }
        else {
            if (this.data['caption'] == undefined || __WEBPACK_IMPORTED_MODULE_12_jquery__["trim"](this.data['caption']) == "" || this.data.caption == undefined || this.data.caption == "" || __WEBPACK_IMPORTED_MODULE_12_jquery__("#contentTag").text() == "") {
                console.log("%c New Post caption " + this.data['caption'], "color: orange");
                this.gd.toast("Please share your adventure");
                // this.gd.toast("Please enter Caption");
            }
            else if (this.data['photo_location'] == undefined || __WEBPACK_IMPORTED_MODULE_12_jquery__["trim"](this.data['photo_location']) == "") {
                console.log("%c New Post photo_location " + this.data['photo_location'], "color: orange");
                this.gd.toast("Please share your adventure");
                // this.gd.toast("Please enter Location");
            }
            else if (this.data['feeling_id'] == undefined || __WEBPACK_IMPORTED_MODULE_12_jquery__["trim"](this.data['feeling_id']) == "") {
                console.log("%c New Post feeling_id " + this.data['feeling_id'], "color: orange");
                this.gd.toast("Please share your adventure");
                // this.gd.toast("Please enter Feelling");
            }
            else {
                this.gd.toast("Please share your adventure");
            }
        }
    };
    CameraPage.prototype.post_modal = function () {
        console.log(this.data);
        var modal = this.modalCtrl.create('PostphotoModalPage', { 'data': this.data });
        modal.present();
        modal.onDidDismiss(function (data) {
        });
    };
    CameraPage.prototype.removeImage = function (banners) {
        var _this = this;
        console.log(this.imageChoos[banners]);
        // setTimeout(() => {
        // this.slides.lockSwipeToPrev(true);
        this.slides.slidePrev();
        setTimeout(function () {
            // this.imageShow.splice(banners, 1);
            if (_this.imageChoos[banners].type == 4 || _this.imageChoos[banners].type == 5) {
                _this.imgDelete.push(_this.imageChoos[banners]);
                console.log(_this.imgDelete);
            }
            // this.slides.removeSlide(1)
            _this.imageChoos.splice(banners, 1);
            _this.slides.slideTo(banners - 1);
            console.log(_this.imageChoos);
            _this.imageChoos.forEach(function (element, index) {
                if (element.type == 2) {
                    element.number = index + 1;
                }
            });
        }, 500);
    };
    CameraPage.prototype.back = function () {
        console.log(this.PathOld);
        if (this.dataGet) {
            this.navCtrl.pop();
        }
        else {
            console.log(this.PathOld.split('/'));
            if (this.PathOld.split('/')[2] == "home") {
                this.navCtrl.parent.select(0);
            }
            else {
                this.navCtrl.parent.select(2);
            }
        }
    };
    CameraPage.prototype.presentAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    // takeVideo() {
    //   const options: CameraOptions = {
    //     quality: 50,
    //     mediaType: this.camera.MediaType.VIDEO,
    //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    //   }
    //   let t = this;
    //   this.camera.getPicture(options).then((imageData) => {
    //     console.log(imageData);
    //     let dataPush = {
    //       type: '3',
    //       id: t.imageShow.length,
    //       path: this.sanitizer.bypassSecurityTrustResourceUrl(this.win.Ionic.WebView.convertFileSrc("file://"+imageData+"#t=0.1")),
    //       videoPath: imageData
    //     }
    //     t.imageChoos.push(dataPush)
    //     // const fileTransfer: FileTransferObject = this.transfer.create();
    //     // let options1: FileUploadOptions = {
    //     //   fileKey: 'upfile',
    //     //   fileName: imageData,
    //     //   headers: {
    //     //     'postID' : 123,
    //     //   }
    //     // }
    //     // console.log(imageData);
    //     // fileTransfer.upload("file://"+imageData, 'https://www.myadventureearth.com/api/omiseCall/upload.php', options1)
    //     //   .then((data) => {
    //     //     // success
    //     //     console.log(data);
    //     //     alert("success");
    //     //   }, (err) => {
    //     //     // error
    //     //     alert("error" + JSON.stringify(err));
    //     //   });
    //   });
    // }
    CameraPage.prototype.takeVideo = function () {
        var _this = this;
        var videoA = this.imageChoos.filter(function (word) { return word.type == 3 || word.type == 5; });
        console.log(videoA);
        if (videoA.length > 0)
            return this.presentAlert("Error", "Can choose 1 video.");
        var t = this;
        var options = {
            mediaType: this.camera.MediaType.VIDEO,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            correctOrientation: true,
            targetWidth: 150,
            targetHeight: 150,
            quality: 1
        };
        this.camera.getPicture(options).then(function (videoUrl) { return __awaiter(_this, void 0, void 0, function () {
            var filename, dirpath, dirUrl, retrievedFile, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!videoUrl) return [3 /*break*/, 6];
                        console.log(videoUrl);
                        filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
                        dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);
                        console.log(dirpath);
                        dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
                        console.log("688 =>> ", dirpath);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.file.resolveDirectoryUrl(dirpath)];
                    case 2:
                        dirUrl = _a.sent();
                        console.log("691 =>> ", dirUrl);
                        console.log("692 =>> ", filename);
                        return [4 /*yield*/, this.file.getFile(dirUrl, filename, {})];
                    case 3:
                        retrievedFile = _a.sent();
                        console.log("694 =>> ", retrievedFile);
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.log('error', err_1);
                        // this.dismissLoader();
                        return [2 /*return*/, this.presentAlert("Error", "Something went wrong.")];
                    case 5:
                        retrievedFile.file(function (data) {
                            var urlFile = retrievedFile.nativeURL;
                            if (_this.gd.platformtype == 'ios') {
                                urlFile = videoUrl;
                            }
                            else {
                                urlFile = retrievedFile.nativeURL;
                            }
                            t.uriVideo = t.sanitizer.bypassSecurityTrustResourceUrl(_this.win.Ionic.WebView.convertFileSrc(urlFile));
                            setTimeout(function () {
                                var video = document.getElementById('videoDuration');
                                console.log(video);
                                console.log(video.duration);
                                // if (data.size > MAX_FILE_SIZE) return this.presentAlert("Error", "You cannot upload more than 250mb.");
                                if (video.duration > 15)
                                    return _this.presentAlert("Error", "The selected video must not exceed 15 seconds.");
                                // if (data.type !== ALLOWED_MIME_TYPE) return this.presentAlert("Error", "Incorrect file type.");
                                console.log("713 =>> ", video.duration);
                                console.log("714 =>> ", data);
                                t.SFT.loading_present('video');
                                _this.videoEditor.transcodeVideo({
                                    fileUri: urlFile,
                                    outputFileName: '' + Date.now(),
                                    saveToLibrary: false,
                                    width: 640,
                                    height: 640,
                                    progress: function (info) {
                                        console.log('progress' + info);
                                    }
                                }).then(function (fileUri) {
                                    console.log('video transcode success', fileUri);
                                    _this.newVideo = fileUri;
                                    var dataPush = {
                                        type: '3',
                                        id: t.imageShow.length,
                                        path: t.sanitizer.bypassSecurityTrustResourceUrl(_this.win.Ionic.WebView.convertFileSrc(urlFile + "#t=0.1")),
                                        videoPath: fileUri
                                    };
                                    t.imageChoos.push(dataPush);
                                    t.SFT.Check_Count('video');
                                    console.log('imageChoos', t.imageChoos);
                                })
                                    .catch(function (error) {
                                    t.SFT.Check_Count('video');
                                    console.log('video transcode error', error);
                                });
                            }, 1000);
                        });
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); }, function (err) {
            console.log(err);
        });
    };
    CameraPage.prototype.uploadVideo = function (postID, video) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var count = 0;
            var selectedVideo = video.path;
            var fileTransfer = _this.transfer.create();
            var options1 = {
                fileKey: 'upfile',
                fileName: 'name.jpg',
                headers: {
                    'postID': postID,
                    'number': video.number
                }
            };
            // fileTransfer.upload(selectedVideo, 'https://myadventureearth.com/api/v8/upload.php', options1)
            fileTransfer.upload(selectedVideo, 'https://myadventureearth.com/api/omiseCall/upload.php', options1)
                .then(function (data) {
                console.log("-----------upload video-----------");
                console.log(data);
                console.log("-----------upload video-----------");
                resolve(JSON.parse(data.response));
            }, function (err) {
                alert("error" + JSON.stringify(err));
                resolve("error" + JSON.stringify(err));
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], CameraPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], CameraPage.prototype, "slides", void 0);
    CameraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-camera',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/camera/camera.html"*/'<ion-header>\n    <ion-navbar id="default_Bar">\n        <ion-grid style="padding: 0;">\n            <ion-row>\n                <ion-col col-6 style="padding: 0;" class="col60">\n                    <ion-buttons start>\n                        <ion-buttons start>\n                            <!-- <button ion-button icon-only navPop class="icon_back" style="vertical-align: middle;" *ngIf="viewMode == 1">\n                <ion-icon name="arrow-back"></ion-icon>\n              </button> -->\n                            <button ion-button icon-only class="icon_back" style="vertical-align: middle;" (click)="back()">\n                <ion-icon name="arrow-back"></ion-icon>\n              </button>\n                            <!-- <div style="overflow: hidden;width: 78%;padding-right: 5px;text-overflow: clip;white-space: nowrap;padding-right: 8px;display: inline-block;vertical-align: middle;"\n                  class="textHeader">\n                  <span class="" [innerHtml]="img.user_firstname"></span>\n                  <span class="" [innerHtml]="img.user_lastname"></span>\n                </div> -->\n                        </ion-buttons>\n                    </ion-buttons>\n                </ion-col>\n                <ion-col col-6 style="padding: 0;" class="col40">\n                    <ion-buttons end>\n                        <button ion-button icon-only style="" class="" (click)="saerchPage()">\n              <img style="position: relative;margin-right: 10px;width: 20px;" src="./assets/icon/search-icon.svg" alt="">\n            </button>\n                        <button ion-button icon-only style="position: relative;" class="" (click)="gonoti()">\n              <img style="position: relative;margin-right: 10px;width: 20px;" src="./assets/icon/Inoti.svg" alt="">\n              <div class="numberNoti" *ngIf="gd.sumNoti > 0">\n                <div style="margin: auto;">{{gd.sumNoti}}</div>\n              </div>\n            </button>\n                        <button ion-button icon-only style="" class="" (click)="goprofile()">\n              <img style="position: relative;margin-right: 10px;height: 30px;width: 30px;" id="img_profile" class="imgpros"\n                [src]="gd.userProfile.user_path_img" />\n            </button>\n                        <button ion-button icon-only style="" class="" (click)="presentPopover($event)">\n              <img style="position: relative;margin-right: 10px;" src="./assets/icon/menu-icon.svg" alt="">\n            </button>\n                    </ion-buttons>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding forceOverscroll="false">\n    <!-- [ngStyle]="{\'height\': heightPhoto+\'px\'}" -->\n\n\n    <div style="position: relative;">\n        <ion-slides pager="true" class="slideBanner" style="height: unset;">\n            <ion-slide *ngFor="let banners of imageChoos;let i = index" [attr.data-index]=\'i\'>\n                <div [ngStyle]="{\n                \'height\' : heightPhoto +\'px\',\n                \'background\': \'url(\'+ banners.path +\')\'}" class="imgslide" style="min-height: 250px;width: 100%;" *ngIf="banners.type != 3 && banners.type != 5">\n                    <ion-icon name="md-close" style="position: absolute;top: 10px;right: 10px;color: #fff;" (click)="removeImage(i)"></ion-icon>\n                </div>\n                <div *ngIf="banners.type == 3 || banners.type == 5">\n                    <video controls preload="metadata" playsinline [poster]="banners.thumbnail" style="width: 100%;">\n                        <source [src]="banners.videoPath | cdvphotolibrary"  type="video/mp4" />\n                    </video>\n                    <ion-icon name="md-close" style="position: absolute;top: 10px;right: 10px;color: #fff;" (click)="removeImage(i)"></ion-icon>\n                </div>\n                <!-- <img [src]="banners" alt="" style="width: 100%;height: 100vw; object-fit: cover;"> -->\n            </ion-slide>\n\n            <ion-slide *ngIf="imageChoos.length == 0">\n                <div style="width: 100%;padding-top: 50%;background: #c7c7c7;">\n\n                </div>\n            </ion-slide>\n        </ion-slides>\n\n        <div style="position: absolute;bottom: 0;z-index: 1;width: 100%;text-align: right;padding-bottom: 15px;padding-right: 10px;">\n            <div style="vertical-align: bottom;display: inline-block">\n                <ion-icon name="images" style="vertical-align: middle;"></ion-icon>\n                <div style="display: inline-block;font-size: 12px;color: #fff;font-weight: bold;">{{imageChoos.length}}</div>\n            </div>\n            <div class="addPhoto" (click)="addMore()">\n                <ion-icon name="add" style="margin: auto"></ion-icon>\n            </div>\n        </div>\n    </div>\n    <div class="center">\n        <ion-grid>\n            <ion-row>\n                <ion-col col-2>\n                    <!-- <img [src]="gd.userProfile.user_path_img" alt="" style="border-radius: 50%;vertical-align: middle;"> -->\n                    <div style="width: 100%;background: aqua;padding-top: 100%;border-radius: 50%;" class="profileImage" [ngStyle]="{\n            \'background\': \'url(\'+ gd.userProfile.user_path_img +\')\'}">\n                    </div>\n                </ion-col>\n                <ion-col col-4 style="display: inline-flex;">\n                    <div style="margin: auto;width: 100%;">\n                        <div style="width: 90%;display:inline-block; overflow: hidden;text-overflow: clip;white-space: nowrap;">\n                            <span [innerHtml]="gd.userProfile.user_firstname"></span>\n                            <span [innerHtml]="gd.userProfile.user_lastname"></span>\n                        </div>\n                        <div style="font-size: 10px;color: #488afe;">From {{gd.userProfile.country_name_en}}</div>\n                    </div>\n                </ion-col>\n                <ion-col col-6 style="display: grid;">\n                    <button (click)="post()" ion-button style="width: 100%;border-radius: 25px;background: linear-gradient(90deg, rgba(207,32,102,1) 0%, rgba(176,68,171,1) 100%);box-shadow: unset;height: 30px;margin: auto;">Post</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n      \n         <!-- +++++++ goog deal AND travel story +++++++ --> \n            <img *ngIf="gd.highlights == \'2\'" class="bannerr" [src]="banner1" alt="" /> \n            <img *ngIf="gd.highlights == \'3\'" class="bannerr" [src]="banner" alt="" /> \n                 <ion-grid style="padding: 0px;">\n            <ion-row>                    \n            <ion-col class="Postbanner">\n\n                    <div style="background: #eaedef;border-radius: 8px;">\n                        <div style="background: #fff;border: 1px solid #c1c1c1;border-radius: 8px;padding: 5px 10px;">\n\n                            <!-- <textarea style="width:100%;resize: none;min-height: 75px;border: none;margin: 0px !important;" placeholder="Tell your story..."\n                [(ngModel)]="data.caption" (keyup)="onKey($event)" autocomplete="on" autocorrect="on" id="textCaption"></textarea> -->\n                            <div contenteditable="true" id="contentTag" [innerHTML]="data.caption" style="-webkit-user-select: auto;width:100%;resize: none;min-height: 75px;border: none;margin: 0px !important;" aria-placeholder="singha"></div>\n                                \n                        </div>\n                        <div>\n                            <ion-grid>\n                                <ion-row style="font-size: 10px;">\n                                    <ion-col col-2 style="text-align: center;font-size: 8px;border-right: 1px solid #c7c7c7;">\n                                        <span *ngIf="gd.feelingNew.length != 0">\n                      <img [src]="gd.feelingNew[this.data[\'feeling_tx_sort\']-1].icon_true" alt="" style="width: 60%;min-width: 25px;min-height: 25px;"> {{gd.feelingNew[this.data[\'feeling_tx_sort\']-1].feeling_tx_name}}\n                    </span>\n                                    </ion-col>\n                                    <ion-col col-1 style="display: grid;">\n                                        <img src="./assets/icon/ping-icon.svg" alt="" style="margin: auto;width: 16px;">\n                                    </ion-col>\n                                    <ion-col col-7 style="display: grid;">\n                                        <div style="margin: auto;margin-left: 0;">\n                                            <div style="font-size: 12px;">{{data[\'photo_location\']}}</div>\n                                            <div style="font-size: 12px;">{{gd.TypeLocation[data[\'TypeLocation_srot\']-1].TypeLocation_name}}</div>\n                                            <div style="color: #48ad49;">Current Location</div>\n                                        </div>\n                                    </ion-col>\n                                    <ion-col col-2 style="display: grid;">\n                                        <div style="margin: auto;color: #219dc5;" (click)="post_modal()">Change</div>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </div>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-grid class="gridBG" style="padding: 10px;margin-top: 10px;" *ngIf="gd.userProfile[\'user_type_account\']==2">\n            <ion-row>\n                <ion-col>\n                    <span class="">Facebook Sharing </span>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <table style="width: 100%;">\n                        <tr>\n                            <td>\n                                <img src="./assets/icon/fb_icon.png" alt="" style="width: 12px;border-radius: 2px;vertical-align: middle;">\n                                <span style="vertical-align: middle;">{{gd.userProfile[\'user_username\']}}</span>\n                            </td>\n                            <td>\n                                <ion-toggle [(ngModel)]="data.photo_share"></ion-toggle>\n                            </td>\n                        </tr>\n                    </table>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <button ion-button outline item-end id=\'fackBTN\' style=\'margin: 0; padding: 0; border: 0; height: 0;\'>\n      &nbsp;\n    </button>\n    </div>\n    <div style="height: 250px;"></div>\n    <br>\n    <br>\n    <canvas id="canvass" width=64 height=64 style="display: none;"></canvas>\n    <div id="parent" style="display: none;width: 100%;">\n        <video [src]="uriVideo" id="videoDuration"></video>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/camera/camera.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__ionic_native_video_editor__["a" /* VideoEditor */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_library__["a" /* PhotoLibrary */], __WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* Location */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], CameraPage);
    return CameraPage;
}());

//# sourceMappingURL=camera.js.map

/***/ })

});
//# sourceMappingURL=4.js.map