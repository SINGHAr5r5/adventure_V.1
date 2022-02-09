webpackJsonp([14],{

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPageModule", function() { return ReviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__review__ = __webpack_require__(573);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReviewPageModule = /** @class */ (function () {
    function ReviewPageModule() {
    }
    ReviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__review__["a" /* ReviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__review__["a" /* ReviewPage */]),
            ],
        })
    ], ReviewPageModule);
    return ReviewPageModule;
}());

//# sourceMappingURL=review.module.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReviewPage = /** @class */ (function () {
    function ReviewPage(viewCtrl, imagePicker, base64, navCtrl, navParams, gd, serviceFactoryThread, loadingCtrl) {
        this.viewCtrl = viewCtrl;
        this.imagePicker = imagePicker;
        this.base64 = base64;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gd = gd;
        this.serviceFactoryThread = serviceFactoryThread;
        this.loadingCtrl = loadingCtrl;
        this.tetxReview = '';
        this.commentRate = 0;
        this.widthPhoto = [];
        this.heightPhoto = [];
        this.photoresize = [];
        this.imageArray = [];
        this.dataGet = this.navParams.get('data');
    }
    ReviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReviewPage');
        console.log(this.dataGet);
    };
    ReviewPage.prototype.sendRate = function (score) {
        console.log(score);
        if (this.commentRate == score) {
            this.commentRate = 0;
        }
        else {
            this.commentRate = score;
        }
    };
    ReviewPage.prototype.addPhoto = function () {
        // if (this.gd.platformtype == 'ios') {
        __WEBPACK_IMPORTED_MODULE_6_jquery__('#filGallerys').click();
        // } else {
        //   this.chooser_image();
        // }
    };
    ReviewPage.prototype.changeListener = function ($event) {
        __WEBPACK_IMPORTED_MODULE_6_jquery__('#actionCamera').slideUp(200);
        this.readThis($event.target);
    };
    ReviewPage.prototype.readThis = function (inputValue) {
        console.log(inputValue.files.length);
        if (inputValue.files.length <= 10) {
            var t = this;
            t.photoresize = [];
            t.widthPhoto = [];
            t.heightPhoto = [];
            var Latitude = "";
            var Longitude = "";
            var key;
            var countFile = inputValue.files;
            var loading_1 = this.loadingCtrl.create({
                spinner: 'hide',
                content: "\n          <div class='textCenter'>Please Wait.</div>\n          <div class='textCenter'>Image processing ...</div>\n            "
            });
            loading_1.present();
            Object.keys(countFile).forEach(function (element) {
                var resize = '';
                var myReader = new FileReader();
                var file = inputValue.files[element];
                canvasResize(file, {
                    width: '1000',
                    height: 0,
                    crop: false,
                    quality: 40,
                    rotate: 0,
                    callback: function (data, width, height) {
                        resize = data;
                        myReader.onloadend = function (e) {
                            t.widthPhoto.push(width);
                            t.heightPhoto.push(height);
                            t.photoresize.push(resize);
                        };
                        myReader.readAsDataURL(file);
                        if (parseInt(element) == (countFile.length - 1)) {
                            var setin_1 = setInterval(function () {
                                if (t.photoresize.length == countFile.length) {
                                    console.log(t.photoresize);
                                    console.log(t.widthPhoto);
                                    console.log(t.heightPhoto);
                                    loading_1.dismiss();
                                    var photoHeight = (__WEBPACK_IMPORTED_MODULE_6_jquery__('ng-component').width() * t.heightPhoto[0]) / t.widthPhoto[0];
                                    // $('ng-component').width();
                                    // t.gd.nextpage(t.navCtrl, 'PostphotoPage', { 'img': t.photoresize, 'Latitude': Latitude, 'Longitude': Longitude, 'key': key, 'heightPhoto': photoHeight.toFixed(0) });
                                    // t.photoresize = [];
                                    // t.widthPhoto = [];
                                    // t.heightPhoto = [];
                                    clearInterval(setin_1);
                                }
                            }, 1000);
                            console.log(t.photoresize);
                        }
                    }
                });
            });
        }
        else {
            this.gd.toast("Can select maximum 10 images");
            this.presentActionSheet(this.navCtrl);
        }
    };
    ReviewPage.prototype.toDecimal = function (number) {
        return number[0].numerator + number[1].numerator /
            (60 * number[1].denominator) + number[2].numerator / (3600 * number[2].denominator);
    };
    ReviewPage.prototype.presentActionSheet = function (navCtrl) {
        // this.photoresize = [];
        // this.widthPhoto = [];
        // this.heightPhoto = [];
        // this.gd.stCamera = false;
        // var vthis = this;
        // console.log('.camera_Advertising');
        // $('#actionCamera').slideDown(200);
    };
    ReviewPage.prototype.chooser_image = function () {
        var _this = this;
        var key = Date.now() + this.serviceFactoryThread.user_api_key;
        var loading;
        var photoHeight;
        var options = {
            maximumImagesCount: 10,
            quality: 20,
            outputType: 0
        };
        this.imagePicker.getPictures(options).then(function (results) {
            var t = _this;
            var Latitude = "";
            var Longitude = "";
            var key;
            var base6fAll = [];
            var _loop_1 = function (i) {
                if (i == 0) {
                    loading = _this.loadingCtrl.create({
                        spinner: 'hide',
                        content: "\n              <div class='textCenter'>Please Wait.</div>\n              <div class='textCenter'>Image processing ...</div>\n                "
                    });
                    loading.present();
                    var newimg_1 = new Image();
                    newimg_1.onload = function () {
                        console.log(newimg_1.width + ", " + newimg_1.height);
                        photoHeight = (__WEBPACK_IMPORTED_MODULE_6_jquery__('ng-component').width() * newimg_1.width) / newimg_1.height;
                    };
                    newimg_1.src = results[i];
                }
                img = new Image();
                img.crossOrigin = 'Anonymous';
                _this.base64.encodeFile(results[i]).then(function (base64File) {
                    console.log(base64File);
                    var imgURI = base64File.replace("data:image/*;charset=utf-8;base64,", "data:image/jpeg;base64,");
                    base6fAll.push(imgURI);
                    _this.photoresize.push(results[i]);
                    if (i == results.length - 1) {
                        setTimeout(function () {
                            // console.log(this.photoresize);
                            // this.gd.nextpage(this.navCtrl, 'PostphotoPage', { 'img': this.photoresize, 'Latitude': "", 'Longitude': '', 'key': key, 'heightPhoto': parseInt(photoHeight).toFixed(0) , "base64": base6fAll});
                            loading.dismiss();
                        }, 1000);
                        console.log('success');
                    }
                }, function (err) {
                    console.log(err);
                });
                // CordovaExif.readData(results[i], function(exifObject) {
                //   console.log(exifObject);
                //  });
                img.src = results[i];
                console.log('Image URI: ' + results[i]);
            };
            var img;
            for (var i = 0; i < results.length; i++) {
                _loop_1(i);
            }
        }, function (err) { });
    };
    ReviewPage.prototype.send_review = function () {
        var _this = this;
        console.log(this.commentRate, this.tetxReview);
        this.upload_img().then(function (data) {
            console.log(JSON.stringify(data));
            // let newData = firebase.database().ref('shopComment/' + this.dataGet.package_room_key + '/comment/').push();
            // let datasend = {
            //   fullname: this.gd.userProfile['user_firstname'] + " " + this.gd.userProfile['user_lastname'],
            //   userId: this.gd.userProfile['user_id'],
            //   comment: this.tetxReview,
            //   rate: this.commentRate,
            //   date: firebase.database.ServerValue.TIMESTAMP,
            //   image: JSON.stringify(data),
            //   status: '0'
            // }
            // newData.set(datasend);
            var dataS = {
                Package_ID: _this.dataGet.packet_id,
                Booking_Code: _this.dataGet.booking_code_order,
                User_ID: _this.gd.userProfile['user_id'],
                Score: _this.commentRate
            };
            _this.serviceFactoryThread.ServiceThread('package_rate', dataS, 'POST').then(function (data) {
                _this.dataGet.package_rate.Average = _this.commentRate;
                _this.viewCtrl.dismiss();
            });
        });
    };
    ReviewPage.prototype.upload_img = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.photoresize.length > 0) {
                var datasend = {
                    user_id: _this.gd.userProfile['user_id'],
                    img: JSON.stringify(_this.photoresize),
                    booking_id: _this.dataGet.booking_code_order,
                };
                console.log(datasend);
                _this.serviceFactoryThread.ServiceThread('upload_img_review', datasend, 'POST').then(function (data) {
                    if (data["res_code"] == '00') {
                        resolve(data["res_result"]);
                    }
                });
            }
            else {
                resolve("");
            }
        });
    };
    ReviewPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-review',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/review/review.html"*/'<!--\n  Generated template for the ReviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>review</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding style="background: rgba(121, 121, 121, 0.5);">\n  <ion-grid class="fame">\n    <ion-row>\n      <ion-col col-10>\n        <span class="textAll">Your overall rating of this property</span>\n      </ion-col>\n      <ion-col col-2 style="text-align: right;" (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span>\n            <i class="iconStar-star" [ngClass]="1 <= commentRate ? \'starActive\' : \'\'" (click)="sendRate(1)"></i>\n            <i class="iconStar-star" [ngClass]="2 <= commentRate ? \'starActive\' : \'\'" (click)="sendRate(2)"></i>\n            <i class="iconStar-star" [ngClass]="3 <= commentRate ? \'starActive\' : \'\'" (click)="sendRate(3)"></i>\n            <i class="iconStar-star" [ngClass]="4 <= commentRate ? \'starActive\' : \'\'" (click)="sendRate(4)"></i>\n            <i class="iconStar-star" [ngClass]="5 <= commentRate ? \'starActive\' : \'\'" (click)="sendRate(5)"></i>\n        </span>\n        <span class="textRate">Click to rate</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="textAll">Your review</div>\n        <ion-textarea style="min-height: 60px;border: none;margin: 0px !important;border: 1px solid #EBEDED;"\n          placeholder="" [(ngModel)]="tetxReview" autocomplete="on" autocorrect="on"></ion-textarea>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="textAll">Do you have photos to share? </div>\n        <div style="overflow-x: scroll;width: 100%;white-space: nowrap;" *ngIf="photoresize.length > 0">\n          <div *ngFor="let imgFor of photoresize" [ngStyle]="{\'background\': \'url(\'+ imgFor +\')\'}" class="imageshow"></div>\n          <!-- <div *ngFor="let img of photoresize">{{img}}</div> -->\n        </div>\n        <button ion-button class="btnAdd" (click)="addPhoto()">Add a Photo</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <hr style="margin-top: 0;">\n        <button ion-button class="btnSubmit" (click)="send_review()">Submit your review</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <input type="file" multiple (change)="changeListener($event)" accept="image/x-png,image/jpeg" style="position: absolute;top: -50px;"\n    id="filGallerys" />\n</ion-content>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/review/review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ })

});
//# sourceMappingURL=14.js.map