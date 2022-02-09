webpackJsonp([24],{

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelPageModule", function() { return ModelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model__ = __webpack_require__(563);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModelPageModule = /** @class */ (function () {
    function ModelPageModule() {
    }
    ModelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__model__["a" /* ModelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__model__["a" /* ModelPage */]),
            ],
        })
    ], ModelPageModule);
    return ModelPageModule;
}());

//# sourceMappingURL=model.module.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_location_accuracy__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__ = __webpack_require__(63);
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







var ModelPage = /** @class */ (function () {
    function ModelPage(gd, platform, navParams, locationAccuracy, viewCtrl, geolocation, serviceFactoryThread, zone) {
        // geolocation.getCurrentPosition().then((position) => {
        //   // console.log(position['coords']['latitude']);
        //   // console.log(position['coords']['longitude']);
        //   // console.log('---------------------------------');
        var _this = this;
        this.gd = gd;
        this.platform = platform;
        this.navParams = navParams;
        this.locationAccuracy = locationAccuracy;
        this.viewCtrl = viewCtrl;
        this.geolocation = geolocation;
        this.serviceFactoryThread = serviceFactoryThread;
        this.zone = zone;
        this.search = '';
        // }, (err) => {
        //   // console.log(err);
        //   // console.log("position");
        // });
        console.log(this.navParams.get('Latitude'));
        console.log(this.navParams.get('Longitude'));
        // console.log('*******');
        if (this.navParams.get('Latitude') != "" && this.navParams.get('Longitude') != "" && this.navParams.get('Latitude') && this.navParams.get('Longitude')) {
            var data = {
                'latitude': this.navParams.get('Latitude'),
                'longitude': this.navParams.get('Longitude')
            };
            console.log('if');
            this.serviceFactoryThread.ServiceThread('aroundmap', data, 'POST')
                .then(function (data) {
                if (data['res_code'] == '00') {
                    // console.log(data['res_result']);
                    _this.aroundmap = data['res_result'];
                }
                else {
                    // console.log(data['res_text']);
                }
            });
            this.MyLocation = { 'place_location': { 'lat': this.navParams.get('Latitude'), 'lng': this.navParams.get('Longitude') },
                'place_name': 'Current Location'
            };
        }
        else {
            console.log('else');
            if (this.platform.is('cordova')) {
                this.locationAccuracy.canRequest().then(function (canRequest) {
                    if (canRequest) {
                        _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () { return _this.fnaroundmap(); }, function (error) { return console.log('Error requesting location permissions', error); });
                    }
                    else {
                        _this.fnaroundmap();
                    }
                });
            }
            else {
                this.fnaroundmap();
            }
        }
        // this.fnaroundmap();
        //  if (serviceFactoryThread.chkMap == 0) {
        //   serviceFactoryThread.chkMap = 1;
        setTimeout(function () {
            getmap(serviceFactoryThread.userlocation);
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#pac-input').on('keydown', function (e) {
                if (e.which == 13) {
                    e.preventDefault();
                }
            });
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#pac-input').change(function (t) {
                console.log("22");
                console.log(t);
                setTimeout(function () {
                    try {
                        var str = __WEBPACK_IMPORTED_MODULE_6_jquery__('#latlong')[0]['value'];
                        console.log(str);
                        var val = str.split("/");
                        var data = {};
                        data['place_name'] = val[0];
                        data['place_location'] = {};
                        data['place_location']['lat'] = val[1];
                        data['place_location']['lng'] = val[2];
                        viewCtrl.dismiss(data);
                    }
                    catch (error) {
                    }
                }, 500);
            });
        }, 500);
        //  }
    }
    ModelPage.prototype.fnaroundmap = function () {
        var _this = this;
        // if (this.gd.stGPS) {
        var data = {
            'latitude': this.serviceFactoryThread.userlocation['lat'],
            'longitude': this.serviceFactoryThread.userlocation['long']
        };
        this.serviceFactoryThread.ServiceThread('aroundmap', data, 'POST')
            .then(function (data) {
            if (data['res_code'] == '00') {
                // console.log(data['res_result']);
                _this.aroundmap = data['res_result'];
            }
            else {
                // console.log(data['res_text']);
            }
        });
        this.MyLocation = { 'place_location': { 'lat': this.serviceFactoryThread.userlocation['lat'], 'lng': this.serviceFactoryThread.userlocation['long'] },
            'place_name': 'Current Location'
        };
        // }
        // this.serviceFactoryThread.Getlocation().then(position => {
        //   if (position) {
        //       // console.log(position);
        //       let data = {
        //         'latitude': position['coords']['latitude'],
        //         'longitude': position['coords']['longitude']
        //       }
        //       this.serviceFactoryThread.ServiceThread('aroundmap', data, 'POST')
        //       .then(data => {
        //         if (data['res_code'] == '00') {
        //           // console.log(data['res_result']);
        //           this.aroundmap = data['res_result'];
        //         } else {
        //           // console.log(data['res_text']);
        //         }
        //       });
        //       this.MyLocation = {  'place_location': {  'lat' :position['coords']['latitude'],'lng': position['coords']['longitude'] },
        //       'place_name': 'My Location'
        //       }
        //   }
        // });
    };
    ModelPage.prototype.ngOnInit = function () {
        this.setItems();
    };
    ModelPage.prototype.setItems = function () {
        this.items = ['Orange', 'Banana', 'Pear', 'Tomato', 'Grape', 'Apple', 'Cherries', 'Cranberries', 'Raspberries', 'Strawberries', 'Watermelon'];
    };
    ModelPage.prototype.filterItems = function (ev) {
        this.setItems();
        var val = ev.target.value;
        // console.log(val);
        if (val && val.trim() !== '') {
            this.items = this.items.filter(function (item) {
                return item.toLowerCase().includes(val.toLowerCase());
            });
        }
    };
    ModelPage.prototype.onKey = function () {
        // $('.search').keypress(function(e){
        //     if (e.which == 13) {
        //       e.preventDefault();
        //     }
        // });
        this.search = __WEBPACK_IMPORTED_MODULE_6_jquery__('.search').val() + '';
        if (__WEBPACK_IMPORTED_MODULE_6_jquery__('.search').val() == "") {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('.pac-container').css('display', 'none !important');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('.pac-container').css('display', 'inherit !important');
        }
    };
    ModelPage.prototype.select = function (data, i) {
        // console.log(data);
        data['index'] = i;
        this.viewCtrl.dismiss(data);
        console.log(data);
    };
    ModelPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ 'place_name': '' });
    };
    ModelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-model',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/model/model.html"*/'<!--\n  Generated template for the LocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <table style=" width: 100%; ">\n        <tr>\n          <td>Location</td>\n        </tr>\n        <tr>\n          <td style="font-size: 10px;opacity: .7;" class="Montserrat">\n            <i>Share your freedom</i>\n          </td>\n        </tr>\n      </table>\n    </ion-title>\n    <ion-buttons end>\n      <!-- Button to Add Location Marker -->\n      <button ion-button (click)="dismiss()">\n        <i class="icon_close_whtie "></i>\n      </button>\n\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <input id="pac-input" class="controls"  type="text" placeholder="Search Box"> -->\n  <!-- <ion-searchbar [(ngModel)]="autocomplete.query" \n                        (ionInput)="updateSearch()"\n                         ></ion-searchbar> -->\n  <!-- <ion-list>\n            <ion-item *ngFor="let item of autocompleteItems" tappable (click)="chooseItem(item)">\n              {{ item }}\n            </ion-item>\n          </ion-list> -->\n\n  <input id="pac-input" class="search" placeholder="Search Location" (keyup)="onKey()">\n  <!-- <ion-searchbar placeholder="Search Location" (ionInput)="filterItems($event)"></ion-searchbar> -->\n  <input type="hidden" id="latlong">\n  <ion-grid style="   ">\n    <ion-row style="">\n      <ion-col (click)="select(MyLocation)">\n        <i class="icon_map_search" ></i>\n        <span style="padding-left: 25px;">Current Location</span>\n      </ion-col>\n    </ion-row>\n    <div  *ngFor="let data of aroundmap;let i = index;">\n        <ion-row *ngIf=\'search==""\'>\n            <ion-col (click)="select(data,i)">\n              {{data.place_name}} \n            </ion-col>\n          </ion-row>\n    </div>\n  </ion-grid>\n  <div id="mapmodel" style="display: none;"></div>\n  <!-- <ion-item>\n            <i class="icon_location"> </i>\n            <ion-icon name="plane" item-start color="danger"></ion-icon>\n            <ion-label>My Location</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Airplane Mode</ion-label>\n          </ion-item> -->\n</ion-content>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/model/model.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_location_accuracy__["a" /* LocationAccuracy */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], ModelPage);
    return ModelPage;
}());

//# sourceMappingURL=model.js.map

/***/ })

});
//# sourceMappingURL=24.js.map