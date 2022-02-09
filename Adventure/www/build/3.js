webpackJsonp([3],{

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelImagePageModule", function() { return ModelImagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_image__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(541);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModelImagePageModule = /** @class */ (function () {
    function ModelImagePageModule() {
    }
    ModelImagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__model_image__["a" /* ModelImagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__model_image__["a" /* ModelImagePage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ModelImagePageModule);
    return ModelImagePageModule;
}());

//# sourceMappingURL=model-image.module.js.map

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

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_video_editor__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_library__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_cdv_photo_library_cdv_photo_library__ = __webpack_require__(404);
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
 * Generated class for the ModelImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModelImagePage = /** @class */ (function () {
    function ModelImagePage(loadingCtrl, viewCtrl, gd, sanitizer, photoLibrary, navCtrl, navParams, platform, videoEditor, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.gd = gd;
        this.sanitizer = sanitizer;
        this.photoLibrary = photoLibrary;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.videoEditor = videoEditor;
        this.alertCtrl = alertCtrl;
        this.allImage = [];
        this.image = [];
        this.numload = 2; // 2 เพราะครั้งแรกทำตอนโหลดไปแล้ว
        this.imageChoos = this.navParams.get("data");
        this.loading = "";
        this.datashow = false;
        // show/hide loading
        this.isShow = true;
        //show image
        this.isShowImg = false;
        this.win = window;
        console.log(EXIF);
    }
    ModelImagePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ModelImagePage");
        this.libraryImage();
    };
    ModelImagePage.prototype.presentAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    ModelImagePage.prototype.libraryImage = function () {
        var _this = this;
        var j = 0;
        var option = {
            quality: 0.5,
            itemsInChunk: 100,
            chunkTimeSec: 0,
            useOriginalFileNames: false,
            includeVideos: false
            // maxItems: 300
        };
        var t = this;
        t.loading = this.loadingCtrl.create({
            spinner: "hide",
            content: "\n        <div class='textCenter'>Please Wait.</div>\n        <div class='textCenter'>Image processing ...</div>\n          ",
        });
        t.loading.present();
        this.photoLibrary
            .requestAuthorization({ write: true, read: true })
            .then(function () {
            _this.photoLib = _this.photoLibrary.getLibrary(option).subscribe({
                next: function (chunk) { return __awaiter(_this, void 0, void 0, function () {
                    var index;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                // console.log(`%c chunk[0]`, `color: green`,chunk[0]);
                                // if ( chunk.map((el) => el.id).indexOf('201ACD30-06B6-4606-BA66-7FD8E2911C16/L0/001')) {
                                //   console.log(`%c chunk ${j}`, `color: green`,chunk);
                                //   console.log(`allImage ${j}`,t.allImage);
                                //   j++;
                                // }
                                console.log("chunk", chunk);
                                index = 0;
                                _a.label = 1;
                            case 1:
                                if (!(index < chunk.length)) return [3 /*break*/, 4];
                                if (this.platform.is('ios')) {
                                    if (chunk[index].filePath != undefined) {
                                        console.log("push " + index + " fileName", chunk[index].fileName);
                                        t.allImage.push(chunk[index]);
                                    }
                                }
                                else {
                                    t.allImage.push(chunk[index]);
                                }
                                console.log("this.allImage.length = " + this.allImage.length);
                                if (!(this.allImage.length >= 30)) return [3 /*break*/, 3];
                                j += 30;
                                if (!(j <= 30)) return [3 /*break*/, 3];
                                return [4 /*yield*/, t.sortarray().then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    console.log("%c -*-*-*- getShowImage() -*-*-*-", "color:red");
                                                    return [4 /*yield*/, t.getShowImage(j).then(function () {
                                                            console.log("%c t.loading.dismiss", "color: orange");
                                                            t.loading.dismiss().then(function () {
                                                                t.isShowImg = true;
                                                            });
                                                            console.log("done getting photos");
                                                        })];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); })];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3:
                                index++;
                                return [3 /*break*/, 1];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); },
                error: function (err) {
                    console.log("could not get photosss");
                },
                complete: function () { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("result");
                                //กรณีรูปภาพไม่ถึง 30 รูป
                                console.log("j= " + j);
                                if (!(t.allImage.length < 30)) return [3 /*break*/, 2];
                                return [4 /*yield*/, t.sortarray().then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    console.log("%c -*-*-*- getShowImage() -*-*-*-", "color:red");
                                                    return [4 /*yield*/, t.getShowImage(t.allImage.length).then(function () {
                                                            console.log("%c t.loading.dismiss", "color: orange");
                                                            t.loading.dismiss().then(function () {
                                                                t.isShowImg = true;
                                                            });
                                                            console.log("done getting photos");
                                                        })];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); })];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); },
            });
        })
            .catch(function (e) {
            console.log("error requestAuthorization", e);
        });
    };
    ModelImagePage.prototype.sortarray = function () {
        var _this = this;
        var t = this;
        return new Promise(function (resolve, reject) {
            var index = 1;
            _this.allImage.sort(function (a, b) {
                index++;
                // console.log(index,a.id , t.allImage.length);
                if (index == t.allImage.length) {
                    // console.log('ifGooo');
                    resolve("test");
                }
                return b.creationDate - a.creationDate;
            });
            setTimeout(function () {
            }, 3000);
        });
    };
    ModelImagePage.prototype.getShowImage = function (indexImage) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var t, constantValue, _loop_1, this_1, index;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        t = this;
                        if (!(indexImage <= this.allImage.length)) return [3 /*break*/, 5];
                        constantValue = (indexImage < 30) ? indexImage : 30;
                        _loop_1 = function (index) {
                            var dataPush, type;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        dataPush = {};
                                        if (this_1.platform.is('ios')) {
                                            type = t.allImage[index].mimeType.split("/")[0] == "image" ? 2 : 3; //2 = image, 3 = video
                                        }
                                        else {
                                            type = 2; //image only
                                        }
                                        return [4 /*yield*/, this_1.photoLibrary.getThumbnail(t.allImage[index], {
                                                thumbnailWidth: (type == 2) ? 200 : t.allImage[index].width,
                                                thumbnailHeight: (type == 2) ? 200 : t.allImage[index].height,
                                                quality: 0.5,
                                            }).then(function (imgBLOB) { return __awaiter(_this, void 0, void 0, function () {
                                                var imgURL, _a, _b, _c, _d;
                                                return __generator(this, function (_e) {
                                                    switch (_e.label) {
                                                        case 0:
                                                            imgURL = URL.createObjectURL(imgBLOB);
                                                            dataPush["original"] = t.allImage[index];
                                                            dataPush["statusChooser"] = 0;
                                                            dataPush["id"] = t.allImage[index].id;
                                                            dataPush["number"] = 0;
                                                            dataPush["thumbnail"] = t.sanitizer.bypassSecurityTrustResourceUrl(imgURL);
                                                            dataPush["videoPath"] = (type == 3) ? t.allImage[index].filePath : "";
                                                            dataPush["type"] = type;
                                                            if (!(t.imageChoos.length > 0)) return [3 /*break*/, 3];
                                                            if (!(t.imageChoos.map(function (el) { return el.id; }).indexOf(dataPush["id"]) != "-1")) return [3 /*break*/, 3];
                                                            // let checkType = t.imageChoos[t.imageChoos.map((el) => el.id).indexOf(dataPush["id"])].type;
                                                            dataPush["statusChooser"] = 1;
                                                            _a = dataPush;
                                                            _b = "number";
                                                            return [4 /*yield*/, t.imageChoos[t.imageChoos.map(function (el) { return el.id; }).indexOf(dataPush["id"])].number];
                                                        case 1:
                                                            _a[_b] = _e.sent();
                                                            _c = dataPush;
                                                            _d = "path";
                                                            return [4 /*yield*/, t.imageChoos[t.imageChoos.map(function (el) { return el.id; }).indexOf(dataPush["id"])].path];
                                                        case 2:
                                                            _c[_d] = _e.sent();
                                                            _e.label = 3;
                                                        case 3:
                                                            this.image.push(dataPush);
                                                            console.log('getShowImage() index', index);
                                                            console.log("getShowImage() this.image", this.image);
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })
                                                .catch(function (e) {
                                                console.log("error getThumbnail", e);
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        index = indexImage - constantValue;
                        _a.label = 1;
                    case 1:
                        if (!(index < indexImage)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(index)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        index++;
                        return [3 /*break*/, 1];
                    case 4:
                        resolve(true);
                        return [3 /*break*/, 6];
                    case 5:
                        this.isShow = false;
                        resolve(false);
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    };
    ModelImagePage.prototype.chooserImage = function (img) {
        var _this = this;
        console.log("img Choose before", img);
        if (img.statusChooser == 0) { //รูปยังไม่ถูกเลือก
            if (this.imageChoos.length < 10) {
                img.statusChooser = 1,
                    img.number = this.imageChoos.length + 1,
                    img.path = "",
                    this.imageChoos.push(img);
            }
            else {
                this.gd.toast("limit 10 item");
            }
        }
        else { //รูปถูกเลือกแล้ว (เมื่อเลือกอีกครั้งจะเป็นไม่เลือก)
            img.statusChooser = 0;
            img.number = 0;
            this.imageChoos.splice(this.imageChoos.map(function (el) { return el.id; }).indexOf(img.id), 1);
            //filter เอาเฉพาะ img ที่เลือก statusChooser = 1 เลือก / 2 = ไม่ได้เลือก
            this.image.filter(function (datas) {
                if (datas.statusChooser == 1) {
                    datas.number =
                        _this.imageChoos.map(function (el) { return el.id; }).indexOf(datas.id) + 1;
                }
            });
        }
        console.log("img Choose after", img);
    };
    ModelImagePage.prototype.cloce = function () {
        var _this = this;
        var t = this;
        if (this.imageChoos.length > 0) {
            this.loading = this.loadingCtrl.create({
                spinner: 'crescent',
                cssClass: 'loading-video',
                content: "\n        <div class=''>Please Wait,</div>\n        <div class=''>Image processing.</div>\n          ",
            });
            this.loading.present();
            var n_1 = this.imageChoos.length;
            console.log("1111");
            setTimeout(function () {
                console.log('this.imageChoos before addOriginal', _this.imageChoos);
                _this.imageChoos.forEach(function (element, index) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(element["type"] != 1)) return [3 /*break*/, 4];
                                if (!(element["path"] == "")) return [3 /*break*/, 2];
                                return [4 /*yield*/, t.AddOriginal(element).then(function (data) {
                                        n_1--;
                                        if (n_1 == 0) {
                                            _this.viewCtrl.dismiss(_this.imageChoos);
                                            _this.photoLib.unsubscribe();
                                            try {
                                                t.loading.dismiss();
                                            }
                                            catch (error) { }
                                        }
                                    })];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                n_1--;
                                if (n_1 == 0) {
                                    this.viewCtrl.dismiss(this.imageChoos);
                                    this.photoLib.unsubscribe();
                                    try {
                                        t.loading.dismiss();
                                    }
                                    catch (error) { }
                                }
                                _a.label = 3;
                            case 3: return [3 /*break*/, 5];
                            case 4:
                                n_1--;
                                if (n_1 == 0) {
                                    this.viewCtrl.dismiss(this.imageChoos);
                                    this.photoLib.unsubscribe();
                                    try {
                                        t.loading.dismiss();
                                    }
                                    catch (error) { }
                                }
                                _a.label = 5;
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
            }, 200);
        }
        else {
            this.viewCtrl.dismiss(this.imageChoos);
            this.photoLib.unsubscribe();
            try {
                t.loading.dismiss();
            }
            catch (error) { }
        }
    };
    ModelImagePage.prototype.AddOriginal = function (element) {
        var _this = this;
        var t = this;
        return new Promise(function (resolve, reject) {
            var text = element.type == 3 ? "Video" : "Image";
            if (element.type == 3) { //video
                var trustUrl_1 = new __WEBPACK_IMPORTED_MODULE_6__pipes_cdv_photo_library_cdv_photo_library__["a" /* CDVPhotoLibraryPipe */](_this.sanitizer);
                setTimeout(function () {
                    // let video = <HTMLVideoElement>document.getElementById('videoDuration');
                    // console.log(video);
                    // console.log(video.duration);
                    // if (data.size > MAX_FILE_SIZE) return this.presentAlert("Error", "You cannot upload more than 250mb.");
                    // if (video.duration > 15) return this.presentAlert("Error", "The selected video must not exceed 15 seconds.");
                    // if (data.type !== ALLOWED_MIME_TYPE) return this.presentAlert("Error", "Incorrect file type.");
                    // console.log("713 =>> ", video.duration);
                    // t.SFT.loading_present('video');
                    _this.videoEditor.getVideoInfo({
                        fileUri: _this.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_0" /* SecurityContext */].RESOURCE_URL, _this.sanitizer.bypassSecurityTrustResourceUrl(element.videoPath))
                    }).then(function (videoInfo) {
                        if (videoInfo.duration > 15) {
                            console.log('videoInfo', videoInfo);
                            _this.presentAlert("Error", "The selected video must not exceed 15 seconds.");
                            _this.loading.dismiss();
                            // element.statusChooser = 0;
                            // this.imageChoos.splice(this.imageChoos.map((el) => el.id).indexOf(element.id), 1);
                        }
                        else {
                            var checkFirst = true; //ทำครั้งเดียว
                            console.log("transcode video", _this.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_0" /* SecurityContext */].RESOURCE_URL, _this.sanitizer.bypassSecurityTrustResourceUrl(element.videoPath)));
                            _this.videoEditor.transcodeVideo({
                                fileUri: _this.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_0" /* SecurityContext */].RESOURCE_URL, _this.sanitizer.bypassSecurityTrustResourceUrl(element.videoPath)),
                                outputFileName: '' + Date.now(),
                                outputFileType: _this.videoEditor.OutputFileType.MPEG4,
                                saveToLibrary: false,
                                optimizeForNetworkUse: 1,
                                width: 640,
                                height: 640,
                                progress: function (info) {
                                    console.log('progress  ' + info);
                                    // try {
                                    //   console.log('progress  ' + info)
                                    //   let sec = 0;
                                    //   if (checkFirst) {
                                    //     let time = setInterval(()=>{
                                    //       checkFirst = false;
                                    //       sec = sec + 1;
                                    //       console.log(`sec : ${sec}`);
                                    //       if (sec >= 30) {
                                    //         clearInterval(time);
                                    //         sec = 0;
                                    //         throw 'cancel';
                                    //       }
                                    //     },1000);
                                    //   }
                                    // } catch (error) {
                                    //   if (error == 'cancel') {
                                    //     this.loading.dismiss();
                                    //     this.presentAlert("Error", "Video can not transcode");
                                    //   }else{
                                    //     console.log('throw',error);
                                    //   }
                                    // }
                                }
                            }).then(function (fileUri) {
                                console.log('video transcode success', fileUri);
                                if (fileUri != undefined && fileUri != null) {
                                    // this.newVideo = fileUri;
                                    element.type = 3;
                                    element.path = trustUrl_1.transform(element.videoPath);
                                    element.videoPath = fileUri;
                                    resolve(element);
                                }
                            }).catch(function (error) {
                                if (error == 'cancel') {
                                    _this.loading.dismiss();
                                    _this.presentAlert("Error", "Video can not transcode");
                                }
                                else {
                                    console.log('video transcode error', error);
                                    _this.presentAlert("Error", error);
                                    _this.loading.dismiss();
                                }
                            });
                        }
                    }).catch(function (err) {
                        console.log('getVideoInfo error', err);
                        _this.presentAlert("Error", err);
                        _this.loading.dismiss();
                    });
                }, 1000);
            }
            else { //image
                _this.photoLibrary
                    .getPhoto(element.id, {})
                    .then(function (datas) {
                    console.log("img blob", datas);
                    var canvas = document.getElementById("canvas");
                    var ctx = canvas.getContext("2d");
                    var cw = canvas.width;
                    var ch = canvas.height;
                    var img = document.createElement("img");
                    console.log("out EXIF.getData");
                    EXIF.getData(datas, function () {
                        var orientation = EXIF.getTag(this, "Orientation");
                        console.log(orientation);
                        console.log("in EXIF.getData", orientation);
                        img.onload = function () {
                            var iw = img.width;
                            var ih = img.height;
                            var widthResize = (img.height * img.width) / 1024 / 1350;
                            var scale = Math.sqrt(widthResize);
                            var iwScaled, ihScaled;
                            if (widthResize > 1) {
                                iwScaled = iw / scale;
                                ihScaled = ih / scale;
                            }
                            else {
                                iwScaled = iw;
                                ihScaled = ih;
                            }
                            // var maxW = iw / 2;
                            // var maxH = ih / 2;
                            // var scale = Math.min((maxW / iw), (maxH / ih));
                            // var iwScaled = iw * scale;
                            // var ihScaled = ih * scale;
                            canvas.width = iwScaled;
                            canvas.height = ihScaled;
                            console.log(iw, ih, iwScaled, ihScaled, scale);
                            switch (orientation) {
                                case 3:
                                    // // canvas.width = ihScaled;
                                    // // canvas.height = iwScaled;
                                    // ctx.clearRect(0, 0, canvas.width, canvas.height);
                                    // ctx.save();
                                    // ctx.translate(canvas.width / 2, canvas.height / 2);
                                    // ctx.rotate((180 * Math.PI) / 180);
                                    // ctx.drawImage(
                                    //   img,
                                    //   -iwScaled / 2,
                                    //   -ihScaled / 2,
                                    //   iwScaled,
                                    //   ihScaled
                                    // );
                                    // ctx.restore();
                                    ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
                                    break;
                                case 6:
                                    // canvas.width = ihScaled;
                                    // canvas.height = iwScaled;
                                    // ctx.clearRect(0, 0, canvas.width, canvas.height);
                                    // ctx.save();
                                    // ctx.translate(canvas.width / 2, canvas.height / 2);
                                    // ctx.rotate((90 * Math.PI) / 180);
                                    // ctx.drawImage(
                                    //   img,
                                    //   -iwScaled / 2,
                                    //   -ihScaled / 2,
                                    //   iwScaled,
                                    //   ihScaled
                                    // );
                                    // ctx.restore();
                                    ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
                                    break;
                                default:
                                    ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
                                    break;
                            }
                            element["path"] = canvas.toDataURL("image/jpeg", 0.7); //base64
                            element["blobOriginal"] = datas; //BLOB
                            element["originalPath"] = t.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(datas)); //Path
                            console.log("---------- after ---------- ");
                            console.log("element", element);
                            console.log("element id", element.id);
                            console.log("element path", element.path);
                            console.log("element blobOriginal", element.blobOriginal);
                            console.log("element originalPath", element.originalPath);
                            console.log("---------- after ---------- ");
                            resolve(element);
                        };
                        img.src = URL.createObjectURL(datas);
                        console.log("img", img);
                    });
                    // var objectURL = new Blob([URL.createObjectURL(datas)]);
                    // console.log(objectURL);
                    // var reader = new FileReader();
                    // reader.readAsDataURL(objectURL);
                    // reader.onloadend = function () {
                    //   var base64data = reader.result;
                    //   console.log(base64data);
                    // }
                })
                    .catch(function (e) {
                    console.log("error can not addOriginal", e);
                });
            }
        });
    };
    ModelImagePage.prototype.cloces = function () {
        this.viewCtrl.dismiss("close");
        this.photoLib.unsubscribe();
    };
    ModelImagePage.prototype.doInfinite = function (infiniteScroll) {
        return __awaiter(this, void 0, void 0, function () {
            var indexEnd;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Begin async operation");
                        console.log("this num load", this.numload);
                        console.log("this all images length", this.allImage.length);
                        console.log("this all images ", this.allImage);
                        console.log("this images length", this.image.length);
                        console.log("this images ", this.image);
                        indexEnd = this.numload * 30;
                        return [4 /*yield*/, this.sortarray().then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log("%c -*-*-*- getShowImage() -*-*-*-", "color:red");
                                            return [4 /*yield*/, this.getShowImage(indexEnd).then(function (status) {
                                                    console.log("%c doInfinite", "color: orange");
                                                    _this.numload++;
                                                    console.log("doInfinite done getting photos");
                                                    infiniteScroll.complete();
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModelImagePage.prototype.playVideo = function (video) {
        console.log('video pause ?', video.paused);
        console.log('video', video);
    };
    ModelImagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "page-model-image",template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/model-image/model-image.html"*/'<!--\n  Generated template for the ModelImagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <!-- <ion-title>modelImage</ion-title> -->\n        <ion-buttons start style="width: 100%;">\n            <ion-grid style="padding: 0px;">\n                <ion-row>\n                    <ion-col col-6 style="padding: 0px;display: grid;">\n                        <button ion-button clear small (click)="cloces()" style="margin: auto;margin-left: 0;">\n              <ion-icon name="close"></ion-icon>\n            </button>\n                    </ion-col>\n                    <ion-col col-6 style="text-align: right; padding: 0px;">\n                        <button ion-button clear small (click)="cloce()" style="font-size: 16px;">\n              Done\n            </button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <!-- <img src="" id="imageTest" alt="" style=""> -->\n    <canvas id="canvas" style="display: none;"></canvas>\n    <ion-grid>\n        <!-- imgPath = imageLoop, imageLoop = dataPush -->\n        <ion-row *ngIf=" isShowImg && image != undefined && image.length > 0">\n            <ion-col col-4 *ngFor="let img of image">\n                <div class="imgChooser" (click)="chooserImage(img)" style="">\n                    <img *ngIf="img != undefined && img.thumbnail != undefined && img.type == 2" [src]="img.thumbnail" alt="" style="width: 100%;height: 100%;object-fit: cover;">\n                    <video controls preload="metadata" playsinline [poster]="img.thumbnail" *ngIf="img != undefined && img.type == 3" alt="" style="width: 100%;height: 100%;object-fit: cover;">\n                        <source [src]="img.videoPath | cdvphotolibrary"  type="video/mp4" />\n                    </video>\n                    <div *ngIf="img != undefined && img.statusChooser == 1" class="active">\n                        <div class="inactive">\n                            <div class="textactive">{{img.number}}</div>\n                        </div>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-infinite-scroll *ngIf="isShow && (numload*30 <= allImage.length)" (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/model-image/model-image.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__["a" /* GlobalDataService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_library__["a" /* PhotoLibrary */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_video_editor__["a" /* VideoEditor */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], ModelImagePage);
    return ModelImagePage;
}());

//# sourceMappingURL=model-image.js.map

/***/ })

});
//# sourceMappingURL=3.js.map