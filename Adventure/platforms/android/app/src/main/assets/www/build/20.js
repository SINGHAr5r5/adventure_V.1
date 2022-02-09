webpackJsonp([20],{

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostphotoModalPageModule", function() { return PostphotoModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postphoto_modal__ = __webpack_require__(568);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostphotoModalPageModule = /** @class */ (function () {
    function PostphotoModalPageModule() {
    }
    PostphotoModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__postphoto_modal__["a" /* PostphotoModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__postphoto_modal__["a" /* PostphotoModalPage */]),
            ],
        })
    ], PostphotoModalPageModule);
    return PostphotoModalPageModule;
}());

//# sourceMappingURL=postphoto-modal.module.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostphotoModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__ = __webpack_require__(63);
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
 * Generated class for the PostphotoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostphotoModalPage = /** @class */ (function () {
    // public hlighligh_Status:string = "1";
    function PostphotoModalPage(modalCtrl, gd, viewCtrl, navCtrl, navParams) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.gd = gd;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.feeling = [];
        this.highlights = [];
        this.typeplace = [];
        this.data = [];
        this.posthighlight = [];
        this.myimage_chk = ['https://www.myadventureearth.com/assets/img/1_chk.svg', 'https://www.myadventureearth.com/assets/img/2_chk.svg', 'https://www.myadventureearth.com/assets/img/3_chk.svg'];
        this.myimage = ['https://www.myadventureearth.com/assets/img/1.svg', 'https://www.myadventureearth.com/assets/img/2.svg', 'https://www.myadventureearth.com/assets/img/3.svg'];
        this.myimage1 = '';
        this.myimage2 = '';
        this.myimage3 = '';
        this.data = navParams.get('data');
        console.log(this.data);
        var array = [];
        console.log(">>><<<", this.gd.feelingNew), ">>><<<";
        console.log(">>><<<", this.posthighlight, ">>><<<");
        // if (this.gd.posthighlight.length !== 0) {
        //   this.myimage1 = this.gd.posthighlight[0];
        //   this.myimage2 = this.gd.posthighlight[1]
        //   this.myimage3 = this.gd.posthighlight[2];
        //   this.posthighlight = this.gd.posthighlight;
        // } else {
        //   this.myimage1 = this.myimage_chk[0]
        //   this.myimage2 = this.myimage[1]
        //   this.myimage3 = this.myimage[2]
        //   this.posthighlight = [this.myimage_chk[0], this.myimage[1], this.myimage[2]];
        // }
        this.gd.feelingNew.forEach(function (element, index) {
            array.push(element);
            if (((index + 1) % 4) == 0 && index != 0) {
                _this.feeling.push(array);
                array = [];
            }
        });
        var array2 = [];
        this.gd.TypeLocation.forEach(function (element, index) {
            array2.push(element);
            if (((index + 1) % 3) == 0 && index != 0) {
                _this.typeplace.push(array2);
                array2 = [];
            }
        });
        // console.log("++++++++++",this.feeling,"++++++++++");
    }
    PostphotoModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostphotoModalPage');
        console.log("showID", this.data.feeling_id, "******** And ********", this.data.feeling_tx_sort);
        if (this.gd.highlights == undefined) {
            this.gd.highlights = 1;
            console.log("00000000000000");
        }
        if (this.gd.posthighlight.length !== 0) {
            this.myimage1 = this.gd.posthighlight[0];
            this.myimage2 = this.gd.posthighlight[1];
            this.myimage3 = this.gd.posthighlight[2];
            this.posthighlight = this.gd.posthighlight;
        }
        else {
            this.myimage1 = this.myimage_chk[0];
            this.myimage2 = this.myimage[1];
            this.myimage3 = this.myimage[2];
            this.gd.highlights = 1;
            this.posthighlight = [this.myimage_chk[0], this.myimage[1], this.myimage[2]];
        }
        console.log(">>>>>>", this.gd.highlights, "<<<<<<");
    };
    PostphotoModalPage.prototype.addEvent1 = function () {
        var _this = this;
        if (this.myimage1 == this.myimage[0]) {
            var local = this.posthighlight.map(function (item, index) { return index === 0 ? _this.myimage_chk[index] : _this.myimage[index]; });
            this.gd.posthighlight = local;
            this.posthighlight = local;
            this.gd.highlights = 1;
            this.data.highlights = this.gd.highlights;
            console.log("show_hlighligh_Status", this.data.highlights, "****************");
            this.myimage1 = local[0];
            this.myimage2 = local[1];
            this.myimage3 = local[2];
        }
    };
    PostphotoModalPage.prototype.addEvent2 = function () {
        var _this = this;
        if (this.myimage2 == this.myimage[1]) {
            var local = this.posthighlight.map(function (item, index) { return index === 1 ? _this.myimage_chk[index] : _this.myimage[index]; });
            this.gd.posthighlight = local;
            this.posthighlight = local;
            this.gd.highlights = 2;
            this.data.highlights = this.gd.highlights;
            console.log("show_hlighligh_Status", this.data.highlights, "****************");
            this.myimage1 = local[0];
            this.myimage2 = local[1];
            this.myimage3 = local[2];
        }
    };
    PostphotoModalPage.prototype.addEvent3 = function () {
        var _this = this;
        if (this.myimage3 == this.myimage[2]) {
            var local = this.posthighlight.map(function (item, index) { return index === 2 ? _this.myimage_chk[index] : _this.myimage[index]; });
            this.gd.posthighlight = local;
            this.posthighlight = local;
            this.gd.highlights = 3;
            this.data.highlights = this.gd.highlights;
            console.log("show_highlight_Status", this.data.highlights, "****************");
            this.myimage1 = local[0];
            this.myimage2 = local[1];
            this.myimage3 = local[2];
        }
    };
    PostphotoModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PostphotoModalPage.prototype.typeLocatSel = function (id, sort) {
        this.data.TypeLocation = id;
        this.data.TypeLocation_srot = sort;
    };
    PostphotoModalPage.prototype.feelingSel = function (id, sort) {
        this.data.feeling_id = id;
        this.data.feeling_tx_sort = sort;
        console.log("showID", this.data.feeling_id, "******** And ********", this.data.feeling_tx_sort, "******** And ********");
    };
    // hlighlighICON(id){
    //   this.data.hlighligh_Status = id;
    // }
    PostphotoModalPage.prototype.more = function () {
        var _this = this;
        var modal = this.modalCtrl.create('ModelPage', { 'Latitude': this.data.photo_la, 'Longitude': this.data.photo_long });
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (data["place_name"]) {
                _this.data.photo_location = data['place_name'];
                _this.data.photo_long = data['place_location']['lng'];
                _this.data.photo_la = data['place_location']['lat'];
                console.log(_this.data);
            }
        });
    };
    PostphotoModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-postphoto-modal',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/postphoto-modal/postphoto-modal.html"*/'<ion-content (click)="close()"></ion-content>\n<ion-footer padding>\n  <ion-list>\n    <div>\n      <button ion-button class="doneBtn" (click)="close()">Done</button>\n    </div>\n    <div>\n      <ion-grid class="bgGray ss1">\n        <ion-row>\n          <ion-col class="titleType">\n            Post Highlight\n          </ion-col>\n        </ion-row>\n          <ion-row class="hlighligh_row">\n            <ion-col style="display: grid;">\n              <img class="img111" src="{{myimage1}}" (click)="addEvent1();">\n            </ion-col>\n            <ion-col style="display: grid;">\n              <img class="img111" src="{{myimage2}}" (click)="addEvent2();">\n            </ion-col>\n            <ion-col style="display: grid;">\n              <img class="img111" src="{{myimage3}}" (click)="addEvent3();">\n            </ion-col>\n            <ion-col style="display: grid;">\n              <!-- <img class="img111" src="{{myimage3}}" (click)="addEvent3();"> -->\n            </ion-col>\n\n\n\n          </ion-row>\n      </ion-grid>\n      <ion-grid class="bgGray">\n        <ion-row>\n          <ion-col class="titleType">\n            Feelings\n          </ion-col>\n        </ion-row>\n          <ion-row *ngFor="let item of feeling">\n            <ion-col style="display: grid;"  *ngFor="let items of item" class="feeling textCenter textFeeling" (click)="feelingSel(items.feeling_tx_id,items.feeling_tx_sort)" [ngClass]="data.feeling_id == items.feeling_tx_id ? \'active\' : \'\'">\n              <img style="margin: auto;" [src]="items.icon_false" alt="" *ngIf="data.feeling_id != items.feeling_tx_id">\n              <img style="margin: auto;" [src]="items.icon_true" alt="" *ngIf="data.feeling_id == items.feeling_tx_id">\n              <div style="margin: auto auto 2px auto;">{{items.feeling_tx_name}}</div>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n      <div style="margin-top: 10px;">\n        <div class="titleType" style="padding-left: 10px;">\n            Add Location\n        </div>\n        <div>\n          <ion-grid>\n            <ion-row style="border: solid 1px #60c662;border-radius: 10px;">\n              <ion-col col-1 style="display: grid;">\n                <img src="./assets/icon/ping-icon.svg" alt="" style="margin: auto;width: 16px;">\n              </ion-col>\n              <ion-col col-9>\n                <div>\n                    <div>{{data.photo_location}}</div>\n                    <div style="font-size: 12px;color: #006d02;">Current Location</div>\n                </div>\n              </ion-col>\n              <ion-col col-2 style="font-size: 12px;color: #0065a5;margin: auto;font-weight: bold;" (click)="more()">\n                <span>Change</span>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </div>\n      <ion-grid class="bgGray" style="margin-top: 10px;">\n        <ion-row>\n          <ion-col class="titleType">\n            Type of Location\n          </ion-col>\n        </ion-row>\n          <ion-row *ngFor="let item of typeplace">\n            <ion-col *ngFor="let items of item" class="typeplace textCenter textFeeling" (click)="typeLocatSel(items.TypeLocation_id,items.TypeLocation_srot)" [ngClass]="data.TypeLocation == items.TypeLocation_id ? \'active\' : \'\'">\n              <div class="typeLocat" id="typeLocat{{items.TypeLocation_id}}">\n                <img style="vertical-align: middle;margin-bottom: 1px;" src="./assets/icon/icon_true.svg" *ngIf="data.TypeLocation == items.TypeLocation_id" alt="" class="icon_true">\n                <span style="vertical-align: middle;">{{items.TypeLocation_name}}</span>\n              </div>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n    </div>\n\n    <div>\n\n    </div>\n  </ion-list>\n</ion-footer>\n'/*ion-inline-end:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/postphoto-modal/postphoto-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PostphotoModalPage);
    return PostphotoModalPage;
}());

//# sourceMappingURL=postphoto-modal.js.map

/***/ })

});
//# sourceMappingURL=20.js.map