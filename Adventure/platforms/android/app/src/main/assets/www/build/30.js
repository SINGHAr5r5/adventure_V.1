webpackJsonp([30],{

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoconutPageModule", function() { return CoconutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coconut__ = __webpack_require__(555);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoconutPageModule = /** @class */ (function () {
    function CoconutPageModule() {
    }
    CoconutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__coconut__["a" /* CoconutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coconut__["a" /* CoconutPage */]),
            ],
        })
    ], CoconutPageModule);
    return CoconutPageModule;
}());

//# sourceMappingURL=coconut.module.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoconutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globaldata_service__ = __webpack_require__(63);
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
 * Generated class for the CoconutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoconutPage = /** @class */ (function () {
    function CoconutPage(navCtrl, gd, navParams, serviceFactoryThread) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.gd = gd;
        this.navParams = navParams;
        this.serviceFactoryThread = serviceFactoryThread;
        this.img = this.navParams.get('data');
        this.type = this.navParams.get('type');
        this.title = this.navParams.get('title');
        this.Profile = this.navParams.get('Profile');
        this.num = this.navParams.get('num');
        // // console.log(this.Profile['user_id']);
        // console.log(this.Profile.following);
        if (this.title && this.type) {
            this.serviceFactoryThread.ServiceThread('followme', { "type": this.type, 'user_id': this.Profile['user_id'] }, 'POST')
                .then(function (data) {
                if (data['res_code'] != '00') {
                    // console.log(data);
                }
                else {
                    // console.log(data);
                    _this.data = data['res_result'];
                }
            });
        }
        else {
            this.title = " Coconuts";
            serviceFactoryThread.ServiceThread('coconut', { 'photo_id': this.img['photo_id'], 'userType': this.img['user_id'] }, 'POST')
                .then(function (data) {
                // console.log();
                if (data['res_code'] != "00") {
                    // console.log(data['res_text']);
                }
                else {
                    _this.data = data['res_result'];
                }
            }, function (err) {
                // console.log(err);
            });
        }
    }
    CoconutPage.prototype.NextPage = function (page, image) {
        // console.log(image);
        if (page == 'ProfilePage' && this.gd.userProfile['user_id'] == image['user_id']) {
            this.navCtrl.parent.select(4);
        }
        else {
            this.gd.nextpage(this.navCtrl, page, { 'data': image });
        }
    };
    CoconutPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad CoconutPage');
    };
    CoconutPage.prototype.follow = function (type, index) {
        // console.log(this.data);
        var _this = this;
        var senddata = {
            'follow_user': this.data[index]['user_id'],
            'type': type
        };
        this.serviceFactoryThread.ServiceThread('indefollowing', senddata, 'POST')
            .then(function (datas) {
            // console.log(datas);
            if (datas['res_code'] != '00') {
                // console.log(datas['res_text']);
            }
            else {
                if (type == 1) {
                    // console.log('เพิ่ม');
                    // this.Profile['followers']= this.Profile['followers']+1;
                    _this.data[index]['follow'] = 1;
                    // this.num =  parseInt(this.num)+1;
                    _this.gd.userProfile.following = _this.gd.userProfile.following + 1;
                }
                else {
                    // console.log('ลบ');
                    // this.Profile['followers']= this.Profile['followers']-1;
                    _this.data[index]['follow'] = 0;
                    _this.gd.userProfile.following = _this.gd.userProfile.following - 1;
                }
            }
        });
    };
    CoconutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coconut',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/coconut/coconut.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let data of data;let i = index;">\n\n      <ion-thumbnail item-start (click)="NextPage(\'ProfilePage\',data)">\n        <img id="profile" [src]="data.user_path_img">\n      </ion-thumbnail>\n\n      <h3 (click)="NextPage(\'ProfilePage\',data)" style="margin-top: 0px;"><span\n          [innerHtml]="data.user_firstname"></span> <span [innerHtml]="data.user_lastname"></span></h3>\n      <p (click)="NextPage(\'ProfilePage\',data)">from {{data.country_name_en}}</p>\n\n      <i class="Following " *ngIf="data.follow>0 && data.user_id !=gd.userProfile.user_id" (click)="follow(2,i)"></i>\n      <i class="Follow " *ngIf="data.follow==0 && data.user_id != gd.userProfile.user_id" (click)="follow(1,i)"></i>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<div id="footer" style="z-index:5"></div>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/coconut/coconut.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */]])
    ], CoconutPage);
    return CoconutPage;
}());

//# sourceMappingURL=coconut.js.map

/***/ })

});
//# sourceMappingURL=30.js.map