webpackJsonp([8],{

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(579);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ],
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(location, navCtrl, navParams, events, storage, gd, platform) {
        var _this = this;
        this.location = location;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.storage = storage;
        this.gd = gd;
        this.platform = platform;
        this.user = { user: this.navParams.get("user") };
        this.tab1Root = "NewsfeedPage";
        this.tab2Root = "BookingsPage";
        this.tab3Root = "";
        this.tab4Root = "TravelerPage";
        this.delay = true;
        gd.navtab = navCtrl;
        storage.set("page", "TabsPage");
        events.unsubscribe("logout");
        events.unsubscribe("reloadPage1");
        events.subscribe("logout", function () {
            _this.navCtrl.setRoot("LoginPage", {});
            storage.set("page", "logout");
            _this.gd.checkmenu3++;
        });
        events.subscribe("Newpost", function (res) { });
        this.storage.set("tab", 0);
        setTimeout(function () {
            var t = _this;
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#tab-t0-0").click(function () {
                if (t.location.path() == "/tabs/home/newfeed") {
                    if (__WEBPACK_IMPORTED_MODULE_5_jquery__("page-newsfeed").length == 1) {
                        console.log("tab scrollTop");
                        _this.events.publish("scrollTop");
                    }
                }
            });
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#tab-t0-2").click(function () {
                if (t.location.path() == "/tabs/connect-with-traveler/traveler") {
                    console.log("tabtraveler");
                    _this.events.publish("scrollTop2");
                }
            });
        }, 1000);
    }
    TabsPage.prototype.openMenu = function () {
        var _this = this;
        if (this.gd.statusChooserCamera == 0) {
            //   this.gd.openChooserApp().then(data => {
            //     this.gd.statusChooserCamera = data;
            //     if (data == 1 || data == 2) {
            //       console.log(data);
            this.tab3Root = "CameraPage";
            this.gd.chooserShare = 2;
            setTimeout(function () {
                _this.events.publish("selectPost");
            }, 500);
            // }
            setTimeout(function () {
                _this.tab3Root = "";
                _this.gd.statusChooserCamera = 0;
            }, 2000);
            // })
        }
    };
    TabsPage.prototype.scrollHome = function (event) {
        console.log("tset-*-*-");
    };
    TabsPage.prototype.click = function () {
        var _this = this;
        // console.log('click');
        console.log(this.location.path());
        this.storage.get("page").then(function (val) {
            if (val != "PostphotoPage" && val != "login" && val != "recomment") {
                setTimeout(function () {
                    if (__WEBPACK_IMPORTED_MODULE_5_jquery__('a[aria-selected="true"]')[0].id ==
                        "tab-t" + _this.gd.checkmenu3 + "-0") {
                        // console.log('tab1');
                        // setTimeout(() => {
                        //   this.events.publish('scrollTop');
                        // }, 200);
                        _this.storage.set("tab", "0");
                    }
                    else if (__WEBPACK_IMPORTED_MODULE_5_jquery__('a[aria-selected="true"]')[0].id ==
                        "tab-t" + _this.gd.checkmenu3 + "-1") {
                        _this.storage.set("tab", "1");
                    }
                    else if (__WEBPACK_IMPORTED_MODULE_5_jquery__('a[aria-selected="true"]')[0].id ==
                        "tab-t" + _this.gd.checkmenu3 + "-3") {
                        _this.storage.set("tab", "3");
                    }
                    else if (__WEBPACK_IMPORTED_MODULE_5_jquery__('a[aria-selected="true"]')[0].id ==
                        "tab-t" + _this.gd.checkmenu3 + "-4") {
                        _this.storage.set("tab", "4");
                    }
                    else if (__WEBPACK_IMPORTED_MODULE_5_jquery__('a[aria-selected="true"]')[0].id ==
                        "tab-t" + _this.gd.checkmenu3 + "-2") {
                        if (_this.gd.stCamera) {
                            _this.events.publish("reloadPage1");
                        }
                        else {
                            _this.gd.stCamera = true;
                        }
                    }
                }, 100);
            }
        });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "tab",template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/tabs/tabs.html"*/'<ion-tabs (click)="click()">\n    <ion-tab [root]="tab1Root" tabIcon="menu1" [rootParams]="user" tabTitle="Home" (select)="scrollHome()"></ion-tab>\n    <ion-tab [root]="tab3Root" tabIcon="menu3" [rootParams]="user" id="tab3" tabTitle="Share Your Freedom" (ionSelect)="openMenu()"></ion-tab>\n    <!-- <ion-tab [root]="tab2Root" tabIcon="menu2" [rootParams]="user" tabTitle="What to do"></ion-tab> -->\n    <ion-tab [root]="tab4Root" tabIcon="menu4" [rootParams]="user" tabTitle="Connect With Traveler"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__services_globaldata_service__["a" /* GlobalDataService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=8.js.map