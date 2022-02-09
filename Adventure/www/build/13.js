webpackJsonp([13],{

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveImagePageModule", function() { return SaveImagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save_image__ = __webpack_require__(576);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SaveImagePageModule = /** @class */ (function () {
    function SaveImagePageModule() {
    }
    SaveImagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__save_image__["a" /* SaveImagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__save_image__["a" /* SaveImagePage */]),
            ],
        })
    ], SaveImagePageModule);
    return SaveImagePageModule;
}());

//# sourceMappingURL=save-image.module.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64_to_gallery__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__ = __webpack_require__(247);
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





var SaveImagePage = /** @class */ (function () {
    function SaveImagePage(viewCtrl, androidPermissions, base64ToGallery, http, navCtrl, navParams) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.androidPermissions = androidPermissions;
        this.base64ToGallery = base64ToGallery;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hasWriteAccess = false;
        this.image = ['www.adventureearth.co/api/v2/img/cutSecsion.png',
            'www.adventureearth.co/api/v2/img/treecoconut.png',
            'www.adventureearth.co/api/v2/img/iconping.png',
        ];
        this.section = "";
        this.logo = "";
        this.ping = "";
        this.image_base64 = [];
        this.image2 = '';
        this.dataGet = this.navParams.get('data');
        this.meeting = this.navParams.get('meeting');
        this.user_image = "";
        this.packgeImage = [];
        console.log(this.dataGet, this.meeting);
        // this.image.forEach(element => {
        //   this.getBase64ImageFromUrl(element).then(data => {
        //     this.image_base64.push(data);
        //   })
        // });
        this.getBase64ImageFromUrl(this.image[0]).then(function (data) {
            _this.section = data;
        });
        this.getBase64ImageFromUrl(this.image[1]).then(function (data) {
            _this.logo = data;
        });
        this.getBase64ImageFromUrl(this.image[2]).then(function (data) {
            _this.ping = data;
        });
        // this.dataGet.img.forEach(element => {
        this.getBase64ImageFromUrl(this.dataGet.img[0].img_resize).then(function (data) {
            console.log(data);
            _this.packgeImage.push(data);
        });
        // });
        this.getBase64ImageFromUrl(this.dataGet.user.user_path_img).then(function (data) {
            // console.log(data);
            _this.user_image = data;
        });
        setTimeout(function () {
            new QRCode(document.getElementById("qrcode"), _this.dataGet.booking_code_order);
        }, 200);
        setTimeout(function () {
            _this.imageTo();
            // console.log(this.image_base64);
        }, 2000);
    }
    SaveImagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImageCapturePage');
        // this.checkPermissions();
    };
    SaveImagePage.prototype.imageTo = function () {
        var t = this;
        htmlTOcanvas(document.getElementById('container'), {
            backgroundColor: 'null',
        }).then(function (canvas) {
            // t.image2 = canvas.toDataURL('image/png');
            var base64URL = canvas.toDataURL('image/png').replace('data:image/png;base64,', '');
            // let todecode = atob(base64URL);
            // if (!t.hasWriteAccess) {
            //   t.checkPermissions();
            // }else{
            t.base64ToGallery.base64ToGallery(base64URL).then(function (res) { return console.log('Saved image to gallery ', res); }, function (err) { return console.log('Error saving image to gallery ', err); });
            // }
            // document.body.appendChild(canvas);
        });
    };
    SaveImagePage.prototype.checkPermissions = function () {
        var _this = this;
        this.androidPermissions
            .checkPermission(this.androidPermissions
            .PERMISSION.WRITE_EXTERNAL_STORAGE)
            .then(function (result) {
            console.log('Has permission?', result.hasPermission);
            _this.hasWriteAccess = result.hasPermission;
        }, function (err) {
            _this.androidPermissions
                .requestPermission(_this.androidPermissions
                .PERMISSION.WRITE_EXTERNAL_STORAGE);
        });
        if (!this.hasWriteAccess) {
            this.androidPermissions
                .requestPermissions([this.androidPermissions
                    .PERMISSION.WRITE_EXTERNAL_STORAGE]);
        }
    };
    SaveImagePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    SaveImagePage.prototype.getBase64ImageFromUrl = function (imageUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var proxyurl, res, blob;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        proxyurl = "https://cors-anywhere.herokuapp.com/";
                        console.log(imageUrl);
                        return [4 /*yield*/, fetch(proxyurl + imageUrl)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.blob()];
                    case 2:
                        blob = _a.sent();
                        // } else {
                        //   var res = await fetch(imageUrl);
                        //   var blob = await res.blob();
                        //   // new XMLSerializer().serializeToString(document.getElementById("svg"))
                        // }
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var reader = new FileReader();
                                reader.onload = function () {
                                    resolve(reader.result);
                                };
                                reader.onerror = function () {
                                    return reject(_this);
                                };
                                reader.readAsDataURL(blob);
                            })];
                }
            });
        });
    };
    SaveImagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-save-image',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/save-image/save-image.html"*/'<!--\n  Generated template for the ImageCapturePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding style="background: linear-gradient(0deg, rgba(174,82,158,1) 0%, rgba(232,32,100,1) 100%);">\n    <ion-icon (click)="close()" name="md-close" style="position: absolute;right: 10px;top: 30px;color: #fff;font-size: 30px;"></ion-icon>\n    <div class="ticketMain" id="container">\n      <div class="ticketTitle">\n        <!-- <img src="" alt=""> -->\n        <img [src]="logo" alt="" style="vertical-align: middle;">\n        <div class="textAve" style="vertical-align: middle;">ADVENTURE EARTH</div>\n        <div class="textTicket">Your Ticket</div>\n      </div>\n      <img [src]="section" class="imgSection" alt="">\n      <ion-grid class="ticketNext">\n        <ion-row>\n          <img [src]="packgeImage[0]" alt="" style="width: 70%;margin: auto;">\n        </ion-row>\n        <ion-row style="font-size: 10px;">\n          <ion-col>\n            <div>{{dataGet.packet_name}}</div>\n            <div>\n              <img [src]="ping" class="" alt="" style="vertical-align: middle;width: 10px;">\n              <span style="vertical-align: middle;">{{dataGet.province.province_name_en}}</span>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class="ticketNext" style="font-size: 10px;background: #EBEDED;">\n        <ion-row>\n          <ion-col>\n            <img style="width: 30px;height: 30px;border-radius: 50%;vertical-align: middle;" [src]="user_image" alt="">\n            <div style="display: inline-block;vertical-align: middle;">\n              <div>Experience by</div>\n              <div style="color: #1B75BB;">{{dataGet.user.user_firstname}} {{dataGet.user.user_lastname}}</div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <img [src]="section" class="imgSection" alt="" style="top: -36px;">\n      <ion-grid class="ticketEnd" style="top: -55px;font-size: 10px;">\n        <ion-row>\n          <ion-col col-6>\n            <div style="text-align: center;border: 1px solid #CBD0D3;width: 70%; margin: auto;">\n              <div id="qrcode" style="width: 65%;margin: auto;padding: 3px 0;"></div>\n              <div style="border-top: 1px solid #CBD0D3;background: #EBEDED;padding-top: 5px;padding-bottom: 5px;">{{dataGet.booking_code_order}}</div>\n            </div>\n          </ion-col>\n          <ion-col col-6 style="">\n            <div class="textGray">Date</div>\n            <div style="margin-bottom: 5px">August 15, 2019</div>\n            <div class="textGray">Time</div>\n            <div style="margin-bottom: 5px">{{dataGet.timeable[0].timeable_time}} - {{dataGet.timeable[dataGet.timeable.length -1].timeable_time}}</div>\n            <div class="detailPeple">\n              <div class="textGray">Guest(s)</div>\n              <div>{{dataGet.Booking_Guest}}</div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="conditions != \'\'">\n          <ion-col>\n            <div class="textGray">Price condition</div>\n            <div>{{dataGet.conditions}}\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div class="textGray">Meetpoint</div>\n            <div>\n              <span class="vertical-middle">{{meeting.name_meet}}</span><span style="color: #FA6980;">{{meeting.time_meeting}}</span>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="dataGet.user.store_telephone != \'\'">\n          <ion-col>\n            <div class="textGray"> Call us {{dataGet.user.store_telephone}}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-content>\n  '/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/save-image/save-image.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SaveImagePage);
    return SaveImagePage;
}());

//# sourceMappingURL=save-image.js.map

/***/ })

});
//# sourceMappingURL=13.js.map