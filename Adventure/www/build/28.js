webpackJsonp([28],{

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTagPageModule", function() { return EditTagPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_tag__ = __webpack_require__(561);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditTagPageModule = /** @class */ (function () {
    function EditTagPageModule() {
    }
    EditTagPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_tag__["a" /* EditTagPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_tag__["a" /* EditTagPage */]),
            ],
        })
    ], EditTagPageModule);
    return EditTagPageModule;
}());

//# sourceMappingURL=edit-tag.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__ = __webpack_require__(64);
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
 * Generated class for the EditTagPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditTagPage = /** @class */ (function () {
    function EditTagPage(zone, navCtrl, gd, serviceFactoryThread, navParams) {
        var _this = this;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.gd = gd;
        this.serviceFactoryThread = serviceFactoryThread;
        this.navParams = navParams;
        this.data = {};
        this.showpage = this.navParams.get('data');
        this.typeNum1 = 0;
        this.typeNum2 = 0;
        this.numtag = 0;
        this.tag = [];
        this.Fulltag = [];
        this.Detail = "";
        this.textId = '';
        this.datatag = [];
        // console.log(this.showpage);
        if (this.showpage == 1) {
            this.feeling = gd.feeling;
            this.data['feeling'] = [];
            this.Title = "Pick the Picture Inspired you";
            this.Detail = "Help us inspire our community by sharing how would you like to feel in your adventures";
            this.selecttext = "Select Pictures that Inspire You";
        }
        else if (this.showpage == 2) {
            this.travel = gd.travel;
            this.data['travel'] = [];
            this.Title = "Pick the Place Inspired you";
            this.Detail = "Help us contribute to our community by sharing places you love to be in your adventures";
            this.selecttext = "Select Pictures of Your Freedom";
        }
        else {
            this.tag = gd.tag;
            this.Fulltag = gd.tag;
            this.SharedRow(this.tag);
            this.data['tag'] = [];
            this.Title = "What’s your Interesting";
            this.selecttext = "SELECT UP TO 5 Tags";
            this.Detail = "Help us learn more about you by sharing your interests";
            // console.log(this.tag);
        }
        serviceFactoryThread.ServiceThread('TagUser', { 'type': this.showpage }, 'POST')
            .then(function (data) {
            if (data['res_code'] == '00') {
                // console.log(data);
                if (_this.showpage == 1 || _this.showpage == 2) {
                    data['res_result'].forEach(function (element) {
                        // console.log();
                        _this.showselected(_this.showpage, element['tag_id']);
                    });
                }
                else {
                    data['res_result'].forEach(function (element) {
                        _this.numtag++;
                        _this.data['tag'].push(element['tag_id']);
                    });
                }
            }
            else {
                // console.log(data['res_text']);
            }
        });
    }
    EditTagPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad EditTagPage');
    };
    EditTagPage.prototype.SharedRow = function (data) {
        var _this = this;
        var lastId = 0;
        ;
        var i = 0;
        this.tag = [];
        this.tag[0] = [];
        this.tag[1] = [];
        this.tag[2] = [];
        this.tag[3] = [];
        for (var j = 0; j < data.length; j++) {
            this.tag[i].push(data[j]);
            if (lastId < data[j]['tag_id']) {
                lastId = data[j]['tag_id'];
                this.textId = i + '' + data[j]['tag_id'];
            }
            if (i == 3) {
                i = 0;
            }
            else {
                i++;
            }
        }
        setTimeout(function () {
            if (data.length != 0) {
                __WEBPACK_IMPORTED_MODULE_4_jquery__('.wrapper').width(__WEBPACK_IMPORTED_MODULE_4_jquery__('#tag' + _this.textId).width() + __WEBPACK_IMPORTED_MODULE_4_jquery__('#tag' + _this.textId)[0]['offsetLeft']);
                __WEBPACK_IMPORTED_MODULE_4_jquery__(".outer ").scrollLeft(((__WEBPACK_IMPORTED_MODULE_4_jquery__('#tag' + _this.textId).width() + __WEBPACK_IMPORTED_MODULE_4_jquery__('#tag' + _this.textId)[0]['offsetLeft']) / 2) - ((__WEBPACK_IMPORTED_MODULE_4_jquery__('#tag' + _this.textId).width() + __WEBPACK_IMPORTED_MODULE_4_jquery__('#tag' + _this.textId)[0]['offsetLeft']) / 4));
            }
        }, 10);
    };
    EditTagPage.prototype.showselected = function (type, id) {
        var check = false;
        if (__WEBPACK_IMPORTED_MODULE_4_jquery__('#select' + type + id).css('display') == 'none') {
            if (type == 1) {
                if (this.typeNum1 < 5) {
                    this.typeNum1++;
                    check = true;
                    this.data['feeling'].push(id);
                }
            }
            else {
                if (this.typeNum2 < 5) {
                    this.typeNum2++;
                    check = true;
                    this.data['travel'].push(id);
                }
            }
        }
        else {
            if (type == 1) {
                this.typeNum1--;
                this.remove(this.data['feeling'], id);
            }
            else {
                this.typeNum2--;
                this.remove(this.data['travel'], id);
            }
            check = true;
        }
        if (check) {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#select' + type + id).toggle();
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#select' + type + id).css('width', __WEBPACK_IMPORTED_MODULE_4_jquery__('#images').width());
        }
    };
    EditTagPage.prototype.remove = function (array, element) {
        var index = array.indexOf(element);
        array.splice(index, 1);
    };
    EditTagPage.prototype.tagselect = function (row, id, text) {
        if (__WEBPACK_IMPORTED_MODULE_4_jquery__('#tag' + row + id).hasClass("btn1_1")) {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#tag' + row + id + " span").addClass("btn_de");
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#tag' + row + id).removeClass("btn1_1");
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#tag' + row + id).removeClass("bounceIn");
            this.remove(this.data['tag'], id);
            this.numtag--;
        }
        else {
            if (this.numtag < 5) {
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#tag' + row + id).addClass("btn1_1");
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#tag' + row + id + " span").removeClass("btn_de");
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#tag' + row + id).addClass("bounceIn");
                this.data['tag'].push(id);
                // this.datatag.push({'tag_id':id, 'tag_name':text});
                this.numtag++;
            }
        }
    };
    EditTagPage.prototype.onSearchChange = function (searchValue) {
        this.tag = this.Fulltag;
        if (searchValue != '') {
            this.tag = this.tag.filter(function (tag) {
                return tag['tag_name'].toString().toLowerCase().indexOf(searchValue.toString().toLowerCase()) > -1;
            });
            this.SharedRow(this.tag);
        }
        else {
            this.SharedRow(this.tag);
        }
        // console.log(this.data);
    };
    EditTagPage.prototype.send = function () {
        // console.log(this.datatag);
        var _this = this;
        // console.log(this.data);
        this.data['type'] = this.showpage;
        if (this.showpage == 1) {
            var getfeeling = "";
            for (var i = 0; i < this.data['feeling'].length; i++) {
                if (i == 0) {
                    getfeeling += this.data['feeling'][i];
                }
                else {
                    getfeeling += ',' + this.data['feeling'][i];
                }
            }
            this.data['newfeeling'] = getfeeling;
        }
        else if (this.showpage == 2) {
            var gettravel = "";
            for (var i = 0; i < this.data['travel'].length; i++) {
                if (i == 0) {
                    gettravel += this.data['travel'][i];
                }
                else {
                    gettravel += ',' + this.data['travel'][i];
                }
            }
            this.data['newtravel'] = gettravel;
        }
        else {
            var gettag = "";
            var datatag = "";
            // console.log(this.data);
            for (var i = 0; i < this.data['tag'].length; i++) {
                if (i == 0) {
                    gettag += this.data['tag'][i];
                    // datatag += {tag_id: 20, tag_name: "Sports"}
                }
                else {
                    gettag += ',' + this.data['tag'][i];
                }
            }
            this.data['newtag'] = gettag;
            this.gd.exploreTag = [];
            for (var index = 0; index < __WEBPACK_IMPORTED_MODULE_4_jquery__('page-edit-tag .btn1_1').length; index++) {
                this.gd.exploreTag.push({ 'tag_id': __WEBPACK_IMPORTED_MODULE_4_jquery__('page-edit-tag .btn1_1')[index].id.slice(-2), 'tag_name': __WEBPACK_IMPORTED_MODULE_4_jquery__(__WEBPACK_IMPORTED_MODULE_4_jquery__('page-edit-tag .btn1_1')[index]).text().trim() });
            }
            // this.gd.exploreTag = gettag;
        }
        this.serviceFactoryThread.ServiceThread('Updatedata_get_tag', this.data, 'POST')
            .then(function (data) {
            // console.log(this.data);
            if (data['res_code'] == '00') {
                // console.log(data);
                _this.gd.toast(data['res_text']);
                _this.navCtrl.pop();
            }
            else {
                // console.log(data['res_text']);
                _this.gd.toast(data['res_text']);
            }
        });
    };
    EditTagPage.prototype.Clear = function (id) {
        if (id == 1 || id == 2) {
            for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_4_jquery__('page-edit-tag .sizeimg').length; i++) {
                // console.log(i);
                if (__WEBPACK_IMPORTED_MODULE_4_jquery__(__WEBPACK_IMPORTED_MODULE_4_jquery__('page-edit-tag .sizeimg')[i]).css('display') == 'block') {
                    __WEBPACK_IMPORTED_MODULE_4_jquery__(__WEBPACK_IMPORTED_MODULE_4_jquery__('page-edit-tag .sizeimg')[i]).css('display', 'none');
                    this.typeNum1 = 0;
                    this.typeNum2 = 0;
                }
                this.data['travel'] = [];
                this.data['feeling'] = [];
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('.btn1_1 span').addClass('btn_de');
            __WEBPACK_IMPORTED_MODULE_4_jquery__('.btn1_1').removeClass("btn1_1");
            __WEBPACK_IMPORTED_MODULE_4_jquery__('.btn1_1').removeClass("bounceIn");
            this.numtag = 0;
            this.data['tag'] = [];
            this.datatag = [];
        }
    };
    EditTagPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-tag',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/edit-tag/edit-tag.html"*/'<!--\n  Generated template for the EditTagPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <!-- <ion-menu side="right" [content]="mycontent">...</ion-menu> -->\n      <ion-title class="Museo">\n        <table style=" width: 100%; ">\n          <tr>\n            <td>{{Title}}</td>\n          </tr>\n          <tr>\n            <td class="Montserrat" style="font-size: 10px;opacity: .7;">Share your freedom</td>\n          </tr>\n        </table>\n  \n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>\n    <ion-list class="center list" >\n      <div class="center Detail Montserrat*">\n        <span style="">\n          {{Detail}}\n        </span>\n      </div>\n      <div>\n        <ion-grid style="margin-top: 15px;">\n            <ion-row style="height: 20px;">\n                <ion-col col-12 >\n                  <div   (click)="Clear(showpage)" style="position: absolute; right: 10px;top: -5px;color: #878787;">  \n                    Clear All \n                  </div>\n                </ion-col>\n              \n          </ion-row>\n          <ion-row>\n            <ion-col col-9 style=" font-size: 16px;font-weight: 800;">\n              {{selecttext}}\n            </ion-col>\n            <ion-col col-2 class="text-right " style=" position: absolute;margin-top: -10px;right: 10px;">\n              <ion-badge class="colorpurple" *ngIf="showpage==1"> {{typeNum1}} </ion-badge>\n              <ion-badge class="colorpurple" *ngIf="showpage==2"> {{typeNum2}} </ion-badge>\n              <ion-badge class="colorpurple" *ngIf="showpage==3"> {{numtag}} </ion-badge>\n              \n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <div *ngIf="showpage==1">\n        <ion-grid id="img">\n          <div *ngFor="let feelings of feeling;let i = index" [attr.data-index]=\'i\'>\n            <ion-row *ngIf="i%2==0">\n              <ion-col (click)=\'showselected(1,feelings.feeling_id)\' >\n                <div style="position: relative;">\n                <img src="./assets/imgs/selected_img.png" id=\'select1{{feelings.feeling_id}}\' class="sizeimg" style="display: none;position: absolute;"\n                  alt="">\n                <img class="sizeimg" [src]="feelings.feeling_img" />\n              </div>\n              </ion-col>\n              <ion-col>\n                <div *ngIf="feeling[i+1]!= undefined" (click)=\'showselected(1,feeling[i+1].feeling_id)\' style="position: relative;">\n                  <!-- <div class="selected_img"></div> -->\n                  <img src="./assets/imgs/selected_img.png" id=\'select1{{feeling[i+1].feeling_id}}\' class="sizeimg" style="display: none;position: absolute;"\n                    alt="">\n                  <img class="sizeimg " id=\'images\' [src]="feeling[i+1].feeling_img" />\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n  \n        </ion-grid>\n      </div>\n  \n      <div *ngIf="showpage==2">\n        <ion-grid id="img">\n          <div *ngFor="let travels of travel;let i = index" [attr.data-index]=\'i\' >\n            <ion-row *ngIf="i%2==0">\n              <ion-col (click)=\'showselected(2,travels.travel_id)\'>\n                <div style="position: relative;">\n                <img src="./assets/imgs/selected_img.png" id=\'select2{{travels.travel_id}}\' class="sizeimg" style="display: none;position: absolute;"\n                  alt="">\n                <div class="card-subtitle">{{travels.travel_name}}</div>\n                <img class="sizeimg" [src]="travels.travel_img" />\n              </div>\n              </ion-col>\n              <ion-col>\n                <div *ngIf="travel[i+1]!= undefined" (click)=\'showselected(2,travel[i+1].travel_id)\' style="position: relative;">\n                  <img src="./assets/imgs/selected_img.png" id=\'select2{{travel[i+1].travel_id}}\' class="sizeimg" style="display: none;position: absolute;"\n                    alt="">\n                  <img class="sizeimg " id=\'images\' [src]="travel[i+1].travel_img" />\n                  <div class="card-subtitle">{{travel[i+1].travel_name}}</div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n  \n        </ion-grid>\n      </div>\n  \n      <div  *ngIf="showpage==3">\n        <ion-grid id="Search" style="margin-top: 15px;">\n          <ion-row>\n            <ion-col col-12 style="background-color: #ccc;border-radius: 50px;font-size: 20px;">\n              <input type="text" placeholder="Search..." id="Search" class="widthText" (input)="onSearchChange($event.target.value)">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <div  *ngIf="showpage==3" id="silde_tab">\n        <ion-grid >\n          <ion-row class="text-center">\n            <div class="outer ">\n              <div class="wrapper" *ngFor="let tags of tag;let j= index">\n                <div class="internal" *ngFor="let subtag of tag[j];let i = index">\n                  <span style="display:inline-block;" [ngClass]="(data.tag[0] == subtag.tag_id || data.tag[1] == subtag.tag_id  || data.tag[2] == subtag.tag_id ||data.tag[3] == subtag.tag_id ||data.tag[4] == subtag.tag_id  ) ? \'btn1_1 bounceIn\' : \'\'"\n                    class="tag btn1" id="tag{{j}}{{subtag.tag_id}}" (click)=\'tagselect(j,subtag.tag_id,subtag.tag_name)\'>\n                    <span [ngClass]="(data.tag[0] == subtag.tag_id || data.tag[1] == subtag.tag_id  || data.tag[2] == subtag.tag_id ||data.tag[3] == subtag.tag_id ||data.tag[4] == subtag.tag_id) ? \'\' : \'btn_de\'">\n                    {{subtag.tag_name}}</span>\n                    <!-- <input type="hidden" name="{{subtag.tag_name}}" id="" value="{{subtag.tag_id}}"> -->\n                  </span>\n                </div>\n                <div class="internal"> </div>\n              </div>\n            </div>\n  \n          </ion-row>\n        </ion-grid>\n  \n      </div>\n  \n  \n  \n  \n      <div class="">\n        <button ion-button full round id="btnpurple" class="center" style="padding: 20px;max-width: 310px;" (click)="send()" *ngIf="numtag == 5 || typeNum2 == 5 || typeNum1 == 5">\n          <span class="Museo font20">Save</span>\n        </button>\n        <br>\n      </div>\n    </ion-list>\n  \n  </ion-content>\n  <div id="footer"></div>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/edit-tag/edit-tag.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], EditTagPage);
    return EditTagPage;
}());

//# sourceMappingURL=edit-tag.js.map

/***/ })

});
//# sourceMappingURL=28.js.map