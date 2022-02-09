webpackJsonp([12],{

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNewfeedPageModule", function() { return SearchNewfeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_newfeed__ = __webpack_require__(575);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchNewfeedPageModule = /** @class */ (function () {
    function SearchNewfeedPageModule() {
    }
    SearchNewfeedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_newfeed__["a" /* SearchNewfeedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_newfeed__["a" /* SearchNewfeedPage */]),
            ],
        })
    ], SearchNewfeedPageModule);
    return SearchNewfeedPageModule;
}());

//# sourceMappingURL=search-newfeed.module.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchNewfeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
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
 * Generated class for the SearchNewfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchNewfeedPage = /** @class */ (function () {
    function SearchNewfeedPage(gd, SFT, viewCtrl, navCtrl, navParams) {
        var _this = this;
        this.gd = gd;
        this.SFT = SFT;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inputSearch = this.gd.newFeedTextSearch;
        this.typeSearch = 'Recent';
        this.segmentTypes = "1";
        this.dataSearch = [];
        console.log(navParams["data"]["typeSearch"]);
        this.typeSearch = navParams["data"]["typeSearch"];
        // $("ion-input").focus();
        // this.myInput.setFocus();
        setTimeout(function () {
            if (_this.gd.newFeedTextSearch != "") {
                _this.filterItems();
            }
        }, 100);
    }
    SearchNewfeedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchNewfeedPage');
        setTimeout(function () {
            // this.focus();
        }, 500);
    };
    SearchNewfeedPage.prototype.focus = function () {
        this.myInput.setFocus();
    };
    SearchNewfeedPage.prototype.segmentChanged = function (event) {
    };
    SearchNewfeedPage.prototype.cancle = function () {
        this.viewCtrl.dismiss();
    };
    SearchNewfeedPage.prototype.searchAll = function (type) {
        console.log(type);
        if (type == 'search') {
            if (this.inputSearch != '') {
                this.viewCtrl.dismiss({ type: 'search', data: this.inputSearch, typeSearch: this.typeSearch });
            }
        }
        else if (type == 'clear') {
            this.viewCtrl.dismiss({ type: 'clear', data: this.inputSearch, typeSearch: this.typeSearch });
        }
    };
    SearchNewfeedPage.prototype.chooser = function (text) {
        console.log(text);
        this.typeSearch = text;
        if (this.inputSearch == '') {
            this.typeSearch = text;
            this.searchAll('clear');
        }
    };
    SearchNewfeedPage.prototype.filterItems = function () {
        var _this = this;
        this.gd.newFeedTextSearch = this.inputSearch;
        console.log(this.inputSearch);
        if (this.inputSearch != '') {
            // this.setItems();
            var type = 1;
            if (this.typeSearch != 'Recent') {
                type = 2;
            }
            var data = {
                'data': this.inputSearch,
                'type': type,
                'lat': this.SFT.userlocation["lat"],
                'long': this.SFT.userlocation["long"]
            };
            this.SFT.ServiceThread("getAuto", data, "POST").then(function (data) {
                console.log(data);
                // this.items = [];
                if (data["res_code"] != '01') {
                    _this.dataSearch = data["res_result"];
                }
                else {
                    _this.dataSearch = [];
                }
                // if (this.items.length > 0) {
                //   this.showSearch = true;
                // } else {
                //   this.showSearch = false;
                // }
            });
        }
        else {
            // this.items = [];
            // this.showSearch = false;
        }
    };
    SearchNewfeedPage.prototype.selected = function (data) {
        this.gd.newFeedTextSearch = this.inputSearch;
        this.viewCtrl.dismiss({ type: 'search', data: data.photo_location, typeSearch: this.typeSearch });
    };
    SearchNewfeedPage.prototype.enterSearch = function () {
        var _this = this;
        if (this.inputSearch != '') {
            // this.myInput.unfocus();
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#searchNewFeed .searchbar-input').blur();
            setTimeout(function () {
                _this.gd.newFeedTextSearch = _this.inputSearch;
                _this.viewCtrl.dismiss({ type: 'search', data: _this.inputSearch, typeSearch: _this.typeSearch });
            }, 200);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myInput'),
        __metadata("design:type", Object)
    ], SearchNewfeedPage.prototype, "myInput", void 0);
    SearchNewfeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-newfeed',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/search-newfeed/search-newfeed.html"*/'<ion-header style="border-bottom: 1px solid #eaeaea;">\n\n  <ion-navbar>\n    <ion-searchbar id="searchNewFeed" style="max-width: 85%;display: inline-flex;vertical-align: middle;background: #EBEDED;border-radius: 8px;padding: 0px;min-height: 30px;"\n      placeholder="Search for a place" (ionInput)="filterItems($event)" [animated]="true" #myInput [(ngModel)]="inputSearch" (search)="enterSearch()">\n    </ion-searchbar>\n    <div style="display: inline-flex;color: #8a8a8a;" (click)="cancle()">Cancel</div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row style="text-align: center">\n      <ion-col col-6>\n        <div style="width: 120px;margin: auto;border-radius: 5px;padding: 3px 5px;" (click)="chooser(\'Recent\')" [ngClass]="typeSearch == \'Recent\' ? \'action\' : \'\'">\n          <span>Recent</span>\n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <div style="width: 120px;margin: auto;border-radius: 5px;padding: 3px 5px;" (click)="chooser(\'Near Location\')" [ngClass]="typeSearch == \'Recent\' ? \'\' : \'action\'">\n          <span>Nearest</span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div>\n    <div class="boxSearch" *ngFor="let data of dataSearch" (click)="selected(data)">\n      <span [innerHTML]="data.photo_location"></span>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/search-newfeed/search-newfeed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_2__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SearchNewfeedPage);
    return SearchNewfeedPage;
}());

//# sourceMappingURL=search-newfeed.js.map

/***/ })

});
//# sourceMappingURL=12.js.map