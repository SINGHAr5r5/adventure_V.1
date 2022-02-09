webpackJsonp([22],{

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedPageModule", function() { return NewsfeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newfeed__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_in_viewport__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewsfeedPageModule = /** @class */ (function () {
    function NewsfeedPageModule() {
    }
    NewsfeedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__newfeed__["a" /* NewsfeedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__newfeed__["a" /* NewsfeedPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng_in_viewport__["b" /* InViewportModule */]
            ],
        })
    ], NewsfeedPageModule);
    return NewsfeedPageModule;
}());

//# sourceMappingURL=newfeed.module.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsfeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_menu_right_menu_right__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_in_viewport__ = __webpack_require__(239);
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
 * Generated class for the NewfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsfeedPage = /** @class */ (function () {
    function NewsfeedPage(app, modalCtrl, events, alertCtrl, storage, SFT, gd, navCtrl, navParams, popoverCtrl) {
        var _this = this;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.SFT = SFT;
        this.gd = gd;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.backText = "hideBackButton";
        this.otherPage = false;
        this.dataPhoto = "";
        this.numLoad = 0;
        this.defaultDistant = 30;
        this.dataFeedAll = [];
        this.albumType = 0;
        this.userData = [];
        this.maxvalues = 1;
        this.chakDataFilter = false;
        this.TypeLoad = "1"; // 1=newOpen, 2=search
        this.LoadFilterType = "Most Recent"; //Most Recent , My Current Location
        this.clickLike = true;
        this.inputSearch = "";
        this.nowChoose = "Recent";
        this.status = true;
        this.Title = "";
        this.appoveLoad = true;
        this.stAl = true;
        this.stLoadinfinity = true;
        this.chatST = true;
        this.rw = 0;
        this.isRefresh = true;
        console.log(navParams.get("data"));
        if (navParams.get("search") != undefined) {
            console.log(navParams.get("search"));
            var data = navParams.get("search");
            this.inputSearch = data.data;
            this.Title = data.data;
            this.TypeLoad = 2;
            this.nowChoose = data.typeSearch;
            if (data.typeSearch == "Recent") {
                this.LoadFilterType = "Most Recent";
            }
            else {
                this.LoadFilterType = "My Current Location";
                console.log(this.LoadFilterType);
            }
            this.searchAll("");
            try {
                this.content.scrollToTop();
            }
            catch (error) { }
        }
        else if (navParams.get("frompage") != undefined) {
            this.TypeLoad = 4;
            this.Title = navParams.get("datapage");
            console.log(this.Title);
            this.getExplore("");
        }
        else if (navParams.get("data") != undefined) {
            this.TypeLoad = 3;
            this.Title = navParams.get("data").formpage;
            console.log(this.Title);
            navParams.get("data").filter.LoadMoreLimit = 20;
            this.sameFilter(navParams.get("data").filter, "");
        }
        else {
            if (SFT.userlocation.lat == "" && SFT.userlocation.long == "") {
                console.log("location");
                this.checkGPS();
            }
            else {
                console.log("loadData");
                this.loadData("");
            }
        }
        if (gd.userProfile.length == 0) {
            storage.get("email").then(function (email) {
                if (email != null) {
                    storage.get("password").then(function (val) {
                        _this.userData["email"] = email;
                        _this.userData["password"] = val;
                        _this.login();
                        storage.get("user_api_key").then(function (vall) {
                            console.log(vall);
                            // SFT.user_api_key = vall;ƒ
                        });
                    });
                }
            });
        }
        // setTimeout(() => {
        //   this.events.publish('Newpost', true);
        // }, 10000);
        // events.publish('selectPost', user, Date.now());
        events.subscribe("selectPost", function () {
            _this.navCtrl.parent.select(1);
        });
        events.subscribe("logNoti", function (data) {
            console.log("test");
            console.log(data);
        });
        events.subscribe("deleteimg", function (res) {
            console.log("deleteimg");
            console.log(res);
            var myArray = [];
            if (res.type == 1) {
                myArray = _this.dataFeedAll.filter(function (obj) {
                    return obj.photo_id !== res.id;
                });
            }
            else {
                myArray = _this.dataFeedAll.filter(function (obj) {
                    return obj.user_id !== res.id;
                });
            }
            console.log(myArray);
            _this.dataFeedAll = [];
            setTimeout(function () {
                _this.dataFeedAll = myArray;
                _this.callScroll();
            }, 500);
            // this.filterID(res)
        });
        setTimeout(function () {
            console.log(__WEBPACK_IMPORTED_MODULE_7_jquery__("page-newsfeed").length);
            if (__WEBPACK_IMPORTED_MODULE_7_jquery__("page-newsfeed").length == 1) {
                console.log("test");
                _this.events.unsubscribe("chat");
                _this.events.unsubscribe("notilike");
                _this.events.unsubscribe("notifollow");
                _this.events.unsubscribe("Newpost");
                events.subscribe("scrollTop", function () {
                    console.log("scrolltop");
                    _this.content.scrollToTop();
                });
                events.subscribe("chat", function (res) {
                    console.log(res);
                    if (_this.chatST) {
                        _this.chatST = false;
                        _this.gd.nextpage(_this.app.getActiveNav(), "ChatPage", res);
                        setTimeout(function () {
                            _this.chatST = true;
                        }, 10000);
                    }
                });
                events.subscribe("notilike", function (res) {
                    console.log(res);
                    var datasent = {
                        lat: _this.SFT.userlocation["lat"],
                        long: _this.SFT.userlocation["long"],
                        width: __WEBPACK_IMPORTED_MODULE_7_jquery__("ng-component").width(),
                        post_id: res.photo_id,
                    };
                    SFT.ServiceThread("getPrepost", datasent, "post").then(function (data) {
                        console.log(data);
                        if (data["res_code"] == "00") {
                            _this.gd.nextpage(_this.navCtrl, "DetailfeedPage", {
                                data: data["res_result"][0][0],
                            });
                        }
                    });
                });
                events.subscribe("notifollow", function (res) {
                    _this.gd.nextpage(_this.navCtrl, "ProfilePage", { data: res });
                });
                events.subscribe("Newpost", function (res) {
                    _this.gd.newFeedTextSearch = "";
                    _this.nowChoose = "Recent";
                    _this.LoadFilterType = "Most Recent";
                    _this.navCtrl.popToRoot();
                    setTimeout(function () {
                        _this.loading(res);
                        __WEBPACK_IMPORTED_MODULE_7_jquery__(".scroll-content").animate({
                            scrollTop: 0,
                        }, 800);
                    }, 500);
                });
            }
            _this.content.ionScrollEnd.subscribe(function (data) {
                // console.log('scroll 123456');
                _this.hashtag();
            });
        }, 1000);
        events.subscribe("deleteimg", function (res) {
            _this.filterID(res);
        });
        // setTimeout(() => {
        //   let t = this;
        //   this.content.ionScroll.subscribe((datas) => {
        //     if (this.status) {
        //       console.log(datas.directionY);
        //       t.status = false;
        //       if (datas.directionY == 'up') {
        //         // $(".tabbar.show-tabbar").animate({ marginBottom: "0px" });
        //         // $('ion-tab[aria-hidden="false"] page-newsfeed:last .header2').animate({ top: "0px" });
        //         // $('ion-tab[aria-hidden="false"] page-newsfeed:last .header1').animate({ top: "-180px" });
        //       } else {
        //         // $(".tabbar.show-tabbar").animate({ marginBottom: "-80px" });
        //         // $('ion-tab[aria-hidden="false"] page-newsfeed:last .header2').animate({ top: "-180px" });
        //         // $('ion-tab[aria-hidden="false"] page-newsfeed:last .header1').animate({ top: "0px" });
        //       }
        //       setTimeout(() => {
        //         t.status = true;
        //       }, 500);
        //     }
        //   })
        // }, 1000);
    }
    NewsfeedPage.prototype.checkGPS = function () {
        var _this = this;
        console.log("checkGPS");
        this.SFT.ServiceThread("hideStatus", {}, "POST").then(function (data) {
            console.log(data["res_show"]);
            if (data["res_show"] != "1") {
                console.log("checkGPS");
                if (_this.appoveLoad) {
                    console.log("checkGPS");
                    // this.SFT.loading_present("checkGPS");
                    _this.appoveLoad = false;
                    _this.SFT.GCL().then(function (data) {
                        // setTimeout(() => {
                        _this.loadData("");
                        console.log("complete");
                        _this.SFT.Check_Count("checkGPS");
                        _this.stAl = false;
                        // }, 20000);
                    });
                }
                setTimeout(function () {
                    _this.alert = _this.gd.alertCtrl.create({
                        title: "Location",
                        subTitle: "Can't find your location",
                        enableBackdropDismiss: false,
                        buttons: [
                            {
                                text: "Retry",
                                role: "Retry",
                                handler: function () {
                                    console.log("Retry clicked");
                                    _this.checkGPS();
                                },
                            },
                        ],
                    });
                    if (_this.stAl) {
                        _this.alert.present();
                    }
                }, 15000);
            }
            else {
                _this.SFT.userlocation = {
                    lat: "37.4327278137207",
                    long: "-121.93013763427734",
                };
                _this.loadData("");
            }
        });
    };
    NewsfeedPage.prototype.filterID = function (id) {
        if (this.dataFeedAll.filter(function (x) { return x.photo_id == id; }).length > 0) {
            var n = this.dataFeedAll.findIndex(function (x) { return x.photo_id == id; });
            this.dataFeedAll[n]["status_show"] = false;
            this.doRefresh("");
        }
    };
    NewsfeedPage.prototype.login = function () {
        var _this = this;
        // setTimeout(() => {
        this.SFT.ServiceThread("login", this.userData, "POST").then(function (datas) {
            if (datas["res_code"] == "00") {
                _this.gd.chat();
                // this.gd.showbtn = datas['res_show'];
                datas["res_result"]["user_path_img"] =
                    _this.gd.BASE_URL + datas["res_result"]["user_path_img"];
                _this.gd.selectData(datas["res_result"]);
                _this.gd.userProfile = datas["res_result"];
                _this.gd.get_noti("old");
                _this.SFT.user_api_key = datas["res_result"]["user_api_key"];
                _this.gd.statusDataInput = datas["res_result"]["checkData"];
                if (datas["res_result"]["checkData"] == 1) {
                    var alert_1 = _this.alertCtrl.create({
                        title: datas["res_result"]["titleText"],
                        subTitle: datas["res_result"]["detailText"],
                        enableBackdropDismiss: false,
                        buttons: [
                            {
                                text: datas["res_result"]["EnterText"],
                                role: "enter data",
                                handler: function () {
                                    _this.gd.nextrootpage(_this.navCtrl, "InputDataPage", {});
                                },
                            },
                            {
                                text: datas["res_result"]["CancelText"],
                                role: "Cancel",
                                handler: function () {
                                    _this.userData["type"] = "updateDateCancel";
                                    _this.SFT.ServiceThread("updateDataUser", _this.userData, "POST").then(function (data) { });
                                },
                            },
                        ],
                    });
                    alert_1.present();
                }
                _this.gd.regisNoti();
            }
        });
        // }, 1000);
    };
    // onClickProgress() {
    //   // let value = 0;
    //   $("#loading").show();
    //   let value = ((10*$(".progress2").width())/100);
    //   $(".cssProgress-bar").width(value.toString()+'px');
    //   console.log('width full',$(".progress2").width());    
    //   let run = setInterval(() => {
    //     if ($(".cssProgress-bar").width() < $(".progress2").width()) {
    //       value += 10;
    //       // $("#progressId").attr("data-percent", value.toString());
    //       $(".cssProgress-bar").width(value.toString()+'%');      
    //       console.log("button css width", $(".cssProgress-bar").width());
    //     } else {
    //       clearInterval(run);
    //       $("#loading").hide();
    //       value = 0;
    //       $(".cssProgress-bar").width(value.toString()+'%');       
    //     }
    //   },2000);
    // }
    NewsfeedPage.prototype.loading = function (res) {
        var _this = this;
        console.log(res);
        setTimeout(function () {
            _this.SFT.ServiceThread("photos_google", {}, "POST").then(function (data) { });
        }, 5000);
        this.percent = 0;
        var check = true;
        __WEBPACK_IMPORTED_MODULE_7_jquery__("#loading").show();
        this.isRefresh = false; // disabled refresh page between loading is progress
        var refreshIntervalId = setInterval(function () {
            if (__WEBPACK_IMPORTED_MODULE_7_jquery__(".cssProgress-bar").width() > __WEBPACK_IMPORTED_MODULE_7_jquery__(".progress2").width()) { // ถ้า progress เต็มความกว้าง
                console.log("%c cssProgress-bar > progress2", "color:red");
                clearInterval(refreshIntervalId);
                _this.percent = 0;
                __WEBPACK_IMPORTED_MODULE_7_jquery__(".cssProgress-bar").width(_this.percent.toString() + "%");
                __WEBPACK_IMPORTED_MODULE_7_jquery__("#loading").hide();
                _this.isRefresh = true;
                _this.doRefresh("");
            }
            else { // ถ้า progress ยังไม่เต็มความกว้าง    
                _this.percent += 10;
                if (res) { //เมื่อ new post = true         
                    __WEBPACK_IMPORTED_MODULE_7_jquery__(".cssProgress-bar").width(_this.percent.toString() + "%");
                    console.log("%c cssProgress-bar < progress2", "color:green");
                    console.log("percent", _this.percent.toString() + "%");
                    console.log("css width", __WEBPACK_IMPORTED_MODULE_7_jquery__(".cssProgress-bar").width());
                }
                else {
                    // if (check) {
                    // check = false;
                    console.log("%c else cssProgress-bar < progress2", "color:orange");
                    console.log("else percent", _this.percent.toString() + "%");
                    console.log("else css width", __WEBPACK_IMPORTED_MODULE_7_jquery__(".cssProgress-bar").width());
                    clearInterval(refreshIntervalId);
                    __WEBPACK_IMPORTED_MODULE_7_jquery__(".cssProgress-bar").width(_this.percent.toString() + "%");
                    __WEBPACK_IMPORTED_MODULE_7_jquery__(".cssProgress-bar").addClass("cssProgress-danger");
                    __WEBPACK_IMPORTED_MODULE_7_jquery__(".cssProgress-bar").removeClass("cssProgress-success");
                    _this.gd.toast("Error");
                    __WEBPACK_IMPORTED_MODULE_7_jquery__("#loading").hide();
                    _this.isRefresh = true;
                    _this.doRefresh("");
                    // }
                }
            }
        }, 2000);
    };
    NewsfeedPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad NewfeedPage");
    };
    NewsfeedPage.prototype.changeAlbum = function (type) {
        var _this = this;
        this.status = false;
        this.content;
        try {
            this.content.scrollToTop();
        }
        catch (error) { }
        // $(".tabbar.show-tabbar").animate({ marginBottom: "0px" });
        // $('ion-tab[aria-hidden="false"] page-newsfeed:last .header2').animate({ top: "0px" });
        // $('ion-tab[aria-hidden="false"] page-newsfeed:last .header1').animate({ top: "-180px" });
        this.SFT.loading_present("");
        setTimeout(function () {
            _this.albumType = type;
            _this.dataFeedAll = [];
            _this.doRefresh("");
            _this.status = true;
            _this.SFT.Check_Count("");
        }, 500);
    };
    NewsfeedPage.prototype.callScroll = function () {
        this.virtualScroll.readUpdate(true);
        this.virtualScroll.writeUpdate(true);
        this.hashtag();
        setTimeout(function () {
            // this.content.scrollTo(100, 1, 100);
        }, 500);
    };
    NewsfeedPage.prototype.loadData = function (refresh) {
        var _this = this;
        console.log("loaddata");
        if (this.numLoad == 0) {
            this.dataFeedAll = [];
        }
        var datasend = {
            lat: this.SFT.userlocation["lat"],
            long: this.SFT.userlocation["long"],
            LoadMoreLimit: this.SFT.LoadMoreLimit,
            numLoad: this.numLoad,
            filter: this.LoadFilterType,
            datapage_id: this.SFT.userlocation["lat"] + "," + this.SFT.userlocation["long"],
            width: __WEBPACK_IMPORTED_MODULE_7_jquery__("ng-component").width(),
            distant: this.defaultDistant,
        };
        this.SFT.ServiceThread("Datafeed", datasend, "POST").then(function (data) {
            if (data["res_code"] != "00") {
                console.log(data["res_text"]);
            }
            else {
                _this.maxvalues = data["maxvalues"];
                data["res_result"].forEach(function (element) {
                    _this.dataFeedAll.push(element);
                });
                setTimeout(function () {
                    if (_this.numLoad == 0) {
                        _this.callScroll();
                    }
                }, 200);
            }
            _this.stLoadinfinity = true;
            _this.refreshComplete(refresh);
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_7_jquery__("#bGRefresh").fadeOut();
            }, 200);
        });
    };
    NewsfeedPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        if (this.isRefresh) { // if refresh is not disable
            this.numLoad = 0;
            __WEBPACK_IMPORTED_MODULE_7_jquery__("#bGRefresh").fadeIn();
            console.log("refresh");
            console.log(this.TypeLoad);
            setTimeout(function () {
                if (_this.TypeLoad == 1) {
                    console.log("doRefresh before infinity scroll loadData");
                    _this.loadData(refresher);
                    console.log("doRefresh after infinity scroll loadData");
                }
                else if (_this.TypeLoad == 2) {
                    console.log("doRefresh before infinity scroll searchAll");
                    _this.searchAll(refresher);
                    console.log("doRefresh after infinity scroll searchAll");
                }
                else if (_this.TypeLoad == 3) {
                    console.log("doRefresh before infinity scroll sameFilter");
                    try {
                        refresher.complete();
                    }
                    catch (error) { }
                    _this.sameFilter(_this.navParams.get("data").filter, "");
                    console.log("doRefresh after infinity scroll sameFilter");
                    setTimeout(function () {
                        __WEBPACK_IMPORTED_MODULE_7_jquery__("#bGRefresh").fadeOut();
                    }, 1000);
                }
                else {
                    try {
                        refresher.complete();
                    }
                    catch (error) { }
                    _this.getExplore(refresher);
                    setTimeout(function () {
                        __WEBPACK_IMPORTED_MODULE_7_jquery__("#bGRefresh").fadeOut();
                    }, 1000);
                }
            }, 200);
        }
    };
    NewsfeedPage.prototype.test = function (i) {
        var _this = this;
        this.rw = this.rw + 1;
        console.log(this.rw);
        console.log("========================================================");
        console.log(this.TypeLoad);
        setTimeout(function () {
            _this.refreshComplete(i);
            _this.stLoadinfinity = true;
        }, 1000);
    };
    NewsfeedPage.prototype.doInfinite = function (event) {
        // console.log(event);
        // console.log(this.TypeLoad);
        console.log("test infinity");
        if (this.TypeLoad == undefined) {
            console.log("type undefined");
        }
        else {
            console.log("type load", this.TypeLoad);
        }
        // this.stLoadinfinity = false;
        if (this.TypeLoad == 1) {
            console.log("TypeLoad : ", this.TypeLoad);
            this.numLoad++;
            this.SFT.LoadMoreLimit = 100;
            console.log("doInfinite before infinity scroll loadData()");
            this.loadData(event);
            console.log("doInfinite after infinity scroll loadData()");
        }
        else if (this.TypeLoad == 2) {
            console.log("TypeLoad : ", this.TypeLoad);
            this.numLoad++;
            console.log("doInfinite before infinity scroll infinitySearch()");
            this.infinitySearch(event);
            console.log("doInfinite after infinity scroll infinitySearch()");
        }
        else if (this.TypeLoad == 3) {
            console.log("TypeLoad : ", this.TypeLoad);
            this.numLoad++;
            console.log("doInfinite before infinity scroll sameFilter()");
            this.sameFilter(this.navParams.get("data").filter, event);
            console.log("doInfinite after infinity scroll sameFilter()");
        }
        else {
            console.log("NO TypeLoad ");
            event.complete();
            this.stLoadinfinity = true;
        }
    };
    NewsfeedPage.prototype.refreshComplete = function (refresh) {
        setTimeout(function () {
            try {
                refresh.complete();
                setTimeout(function () {
                    __WEBPACK_IMPORTED_MODULE_7_jquery__("#bGRefresh").fadeOut();
                }, 1000);
            }
            catch (error) { }
        }, 500);
    };
    NewsfeedPage.prototype.hashtag = function () {
        var t = this;
        console.log(__WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"] page-newsfeed:last .hashtag'));
        __WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"] page-newsfeed:last .hashtag').unbind();
        __WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"] page-newsfeed:last .hashtag').click(function () {
            t.SFT.stLoad = true;
            t.gd.nextpage(t.navCtrl, "NewsfeedPage", {
                frompage: 6,
                datapage: __WEBPACK_IMPORTED_MODULE_7_jquery__(this).text(),
            });
        });
    };
    // goHashtag(text){
    // this.gd.nextpage(this.navCtrl, 'NewsfeedPage', { 'frompage': 6, 'datapage': text });
    // }
    NewsfeedPage.prototype.NextPage = function (page, data) {
        var _this = this;
        console.log(page);
        __WEBPACK_IMPORTED_MODULE_7_jquery__('[id="videoPost"]').map(function (index, video) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        video.muted = true;
                        if (!!video.paused) return [3 /*break*/, 2];
                        return [4 /*yield*/, video.pause()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
        if (page == "viewComment") {
            var dataSend = JSON.parse(JSON.stringify(data));
            dataSend["openmodel"] = true;
            this.gd.nextpage(this.navCtrl, "DetailfeedPage", { data: dataSend });
        }
        else if (page == "TouristPage") {
            data.latitude = data.photo_la;
            data.longitude = data.photo_long;
            this.gd.startExternalMap(data);
        }
        else {
            if (page == "viewComment") {
                var datasend = JSON.parse(JSON.stringify(data));
                datasend["openmodel"] = true;
                this.gd.nextpage(this.navCtrl, "DetailfeedPage", { data: datasend });
            }
            else {
                if (page == "ProfilePage") {
                    if (data.user_id != "TAT") {
                        this.gd.nextpage(this.navCtrl, page, { data: data });
                    }
                }
                else {
                    this.gd.nextpage(this.navCtrl, page, { data: data });
                }
            }
        }
    };
    NewsfeedPage.prototype.like = function (data, type, index, row) {
        var _this = this;
        console.log(data);
        console.log(type);
        console.log(index);
        console.log(row);
        if (this.clickLike == true) {
            this.clickLike = false;
            var datas = JSON.parse(JSON.stringify(data));
            delete datas.same;
            delete datas.follow;
            delete datas.ic;
            delete datas.samelength;
            delete datas.status_Follow;
            delete datas.imageLike;
            delete datas.path_resize;
            delete datas.comment_user_img;
            delete datas.pictureResize;
            delete datas.user_path_img;
            delete datas.photo_img_Full;
            delete datas.user_img;
            delete datas.nameLocation;
            delete datas.photo_location;
            delete datas.photo_locationText;
            var senddata = {
                photo_id: data.photo_id,
                type: type,
                data: JSON.stringify(datas),
            };
            if (type == 1) {
                this.dataFeedAll[index]["status_like"] = false;
                this.dataFeedAll[index]["sum_like"] =
                    this.dataFeedAll[index]["sum_like"] - 1;
            }
            else {
                this.dataFeedAll[index]["status_like"] = true;
                this.dataFeedAll[index]["sum_like"] =
                    this.dataFeedAll[index]["sum_like"] + 1;
            }
            setTimeout(function () {
                console.log(__WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"] #like' + data.photo_id));
                __WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"] #like' + data.photo_id).addClass("liked");
                __WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"] #like' + data.photo_id).css("pointer-events", "none");
                clearTimeout(tmq);
                var tmq = setTimeout(function () {
                    __WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"] #like' + data.photo_id).removeClass("liked");
                    __WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"] #like' + data.photo_id).css("pointer-events", "unset");
                    _this.clickLike = true;
                }, 1100);
            }, 10);
            this.SFT.ServiceThread("like", senddata, "POST").then(function (data) {
                if (data["res_code"] == "00") {
                }
                else {
                }
            });
        }
    };
    NewsfeedPage.prototype.bookmark = function (data, type, index, row) {
        var senddata = {
            photo_id: data.photo_id,
            type: type,
            userType: data.user_id,
        };
        this.dataFeedAll[index]["status_bookmark"] = !this.dataFeedAll[index]["status_bookmark"];
        this.SFT.ServiceThread("bookmark", senddata, "POST").then(function (data) { });
    };
    NewsfeedPage.prototype.saerchPage = function () {
        var _this = this;
        var modalbirthday = this.modalCtrl.create("SearchNewfeedPage", {
            typeSearch: this.nowChoose,
        });
        modalbirthday.onDidDismiss(function (data) {
            console.log(data);
            if (data != undefined) {
                if (data != undefined && data.type == "search") {
                    if (_this.TypeLoad != 2) {
                        _this.gd.nextpage(_this.navCtrl, "NewsfeedPage", { search: data });
                    }
                    else {
                        _this.inputSearch = data.data;
                        _this.Title = data.data;
                        _this.TypeLoad = 2;
                        _this.nowChoose = data.typeSearch;
                        console.log(_this.nowChoose);
                        if (data.typeSearch == "Recent") {
                            _this.LoadFilterType = "Most Recent";
                        }
                        else {
                            _this.LoadFilterType = "My Current Location";
                        }
                        _this.searchAll("");
                        try {
                            _this.content.scrollToTop();
                        }
                        catch (error) { }
                    }
                }
                else if (data.type == "clear") {
                    _this.numLoad = 0;
                    _this.inputSearch = "";
                    _this.nowChoose = data.typeSearch;
                    if (data.typeSearch == "Recent") {
                        _this.datafilter("Most Recent", "", false, "");
                        _this.LoadFilterType = "Most Recent";
                    }
                    else {
                        _this.datafilter("My Current Location", "", false, "");
                        _this.LoadFilterType = "My Current Location";
                    }
                    __WEBPACK_IMPORTED_MODULE_7_jquery__(".scroll-content").animate({
                        scrollTop: 0,
                    }, 800);
                }
            }
        });
        modalbirthday.present();
    };
    NewsfeedPage.prototype.searchAll = function (refresh) {
        this.TypeLoad = 2;
        this.datafilter("searchAll", this.inputSearch, false, refresh);
    };
    NewsfeedPage.prototype.infinitySearch = function (refresh) {
        this.TypeLoad = 2;
        this.datafilter("searchAll", this.inputSearch, true, refresh);
    };
    NewsfeedPage.prototype.datafilter = function (type, id, scroll, refresh) {
        if (this.maxvalues == -1) {
            this.maxvalues = 500;
        }
        type = type.trim();
        var dataFeeling;
        if (this.defaultDistant == 0 || this.defaultDistant == "") {
            this.defaultDistant = 1;
            __WEBPACK_IMPORTED_MODULE_7_jquery__("#Dis").val(1);
        }
        if (type == "searchAll") {
            var typeChoose = "";
            if (this.nowChoose == "Recent") {
                typeChoose = "Most Recent";
            }
            else {
                typeChoose = "My Current Location";
            }
            console.log(typeChoose);
            dataFeeling = {
                LoadMoreLimit: this.SFT.LoadMoreLimit,
                numLoad: this.numLoad,
                width: __WEBPACK_IMPORTED_MODULE_7_jquery__("ng-component").width(),
                filter: "searchAll",
                typeFillter: typeChoose,
                datapage_id: id,
                lat: this.SFT.userlocation["lat"],
                long: this.SFT.userlocation["long"],
            };
            this.getdatafilter(dataFeeling, scroll, refresh);
        }
        else {
            if (type == "hashtag") {
                // this.title = id;
                dataFeeling = {
                    LoadMoreLimit: this.SFT.LoadMoreLimit,
                    numLoad: this.numLoad,
                    width: __WEBPACK_IMPORTED_MODULE_7_jquery__("ng-component").width(),
                    filter: type,
                    datapage_id: id,
                    lat: this.SFT.userlocation["lat"],
                    long: this.SFT.userlocation["long"],
                };
                this.nowChoose = "Hashtag";
                this.getdatafilter(dataFeeling, scroll, refresh);
            }
            else {
                console.log("go else สุดท้าย");
                dataFeeling = {
                    LoadMoreLimit: this.SFT.LoadMoreLimit,
                    numLoad: this.numLoad,
                    width: __WEBPACK_IMPORTED_MODULE_7_jquery__("ng-component").width(),
                    filter: type,
                    datapage_id: id,
                    lat: this.SFT.userlocation["lat"],
                    long: this.SFT.userlocation["long"],
                    distant: this.defaultDistant,
                };
                if (type == "My Current Location") {
                    this.nowChoose = "Near Location";
                    // this.typeid = 'Current Location';
                }
                else {
                    if (type == "Most Recent") {
                        this.nowChoose = "Recent";
                    }
                    else {
                        this.nowChoose = type;
                    }
                    // this.typeid = type;
                    // this.textsearch = id;
                }
                console.log(this.nowChoose);
                this.getdatafilter(dataFeeling, scroll, refresh);
            }
        }
        this.fillterLog(dataFeeling);
    };
    NewsfeedPage.prototype.getdatafilter = function (dataFeeling, scroll, refresh) {
        var _this = this;
        console.log(scroll);
        if (this.maxvalues > this.SFT.LoadMoreLimit * this.numLoad) {
            this.SFT.ServiceThread("Datafeed", dataFeeling, "POST").then(function (data) {
                if (data["res_code"] == "00") {
                    _this.maxvalues = data["maxvalues"];
                    if (!scroll) {
                        _this.dataFeedAll = [];
                        // this.callScroll();
                    }
                    for (var index = 0; index < data["res_result"].length; index++) {
                        _this.dataFeedAll.push(data["res_result"][index]);
                        if (index == data["res_result"].length - 1) {
                            console.log("testcal");
                            if (_this.numLoad == 0) {
                                _this.callScroll();
                            }
                        }
                    }
                }
                else {
                    if (_this.numLoad == 0) {
                        console.log("close 000000");
                        _this.dataFeedAll = [];
                        _this.callScroll();
                    }
                }
                _this.refreshComplete(refresh);
                _this.stLoadinfinity = true;
                setTimeout(function () {
                    __WEBPACK_IMPORTED_MODULE_7_jquery__("#bGRefresh").fadeOut();
                }, 1000);
            });
        }
    };
    NewsfeedPage.prototype.fillterLog = function (data) {
        this.gd.saveLog("fillter", data);
    };
    NewsfeedPage.prototype.scrollTopFN = function () {
        var _this = this;
        this.status = false;
        this.content.scrollToTop();
        // $(".tabbar.show-tabbar").animate({ marginBottom: "0px" });
        __WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"] page-newsfeed:last .header2').fadeIn();
        // $('ion-tab[aria-hidden="false"] page-newsfeed:last .header1').animate({ top: "-180px" });
        setTimeout(function () {
            _this.status = true;
        }, 2000);
    };
    NewsfeedPage.prototype.presentPopover = function (myEvent) {
        __WEBPACK_IMPORTED_MODULE_7_jquery__(".share").removeClass("share");
        __WEBPACK_IMPORTED_MODULE_7_jquery__("body").addClass("rightMenu");
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_menu_right_menu_right__["a" /* MenuRightComponent */], {
            navCtrl: this.navCtrl,
        });
        popover.present({
            ev: myEvent,
        });
    };
    NewsfeedPage.prototype.gonoti = function () {
        this.gd.nextpage(this.navCtrl, "NotificationsPage", {});
    };
    NewsfeedPage.prototype.sameFilter = function (dataplace, refresh) {
        var _this = this;
        if (this.numLoad == 0) {
            this.dataFeedAll = [];
        }
        dataplace.numLoad = this.numLoad;
        this.SFT.ServiceThread("Same", dataplace, "POST").then(function (data) {
            if (data["res_code"] != "00") {
                console.log(data["res_text"]);
                // this.dataFeedAll = [];
                var dataFeeling = {
                    Feeling: _this.navParams.get("data")["photo"]["feeling_id"],
                    type: 2,
                    width: __WEBPACK_IMPORTED_MODULE_7_jquery__("ng-component").width(),
                    LoadMoreLimit: 20,
                    numLoad: _this.numLoad,
                    lat: _this.SFT.userlocation.lat,
                    long: _this.SFT.userlocation.long,
                };
                _this.SFT.ServiceThread("Same", dataFeeling, "POST").then(function (data) {
                    console.log(data);
                    if (data["res_code"] == "00") {
                        data["res_result"].forEach(function (element) {
                            _this.dataFeedAll.push(element);
                        });
                    }
                });
            }
            else {
                _this.maxvalues = data["maxvalues"];
                data["res_result"].forEach(function (element) {
                    _this.dataFeedAll.push(element);
                });
                if (_this.dataFeedAll.length < 2) {
                    // this.dataFeedAll = [];
                    var dataFeeling = {
                        Feeling: _this.navParams.get("data")["photo"]["feeling_id"],
                        type: 2,
                        width: __WEBPACK_IMPORTED_MODULE_7_jquery__("ng-component").width(),
                        LoadMoreLimit: 20,
                        numLoad: _this.numLoad,
                        lat: _this.SFT.userlocation.lat,
                        long: _this.SFT.userlocation.long,
                    };
                    _this.SFT.ServiceThread("Same", dataFeeling, "POST").then(function (data) {
                        console.log(data);
                        if (data["res_code"] == "00") {
                            data["res_result"].forEach(function (element) {
                                _this.dataFeedAll.push(element);
                            });
                        }
                    });
                }
                console.log("===========================");
                console.log(data["res_result"]);
                setTimeout(function () {
                    if (_this.numLoad == 0) {
                        console.log("before callScroll");
                        // this.callScroll();
                    }
                }, 200);
            }
            console.log("before refreshComplete");
            _this.refreshComplete(refresh);
            _this.stLoadinfinity = true;
            console.log("after refreshComplete");
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_7_jquery__("#bGRefresh").fadeOut();
            }, 1000);
        });
    };
    NewsfeedPage.prototype.getExplore = function (refresher) {
        var _this = this;
        if (this.numLoad == 0) {
            this.dataFeedAll = [];
        }
        var datasend = {
            lat: this.SFT.userlocation["lat"],
            long: this.SFT.userlocation["long"],
            LoadMoreLimit: this.SFT.LoadMoreLimit,
            numLoad: this.numLoad,
            width: __WEBPACK_IMPORTED_MODULE_7_jquery__("ng-component").width(),
            explore: this.navParams.get("frompage"),
            datapage_id: this.navParams.get("datapage"),
        };
        this.SFT.ServiceThread("Datafeed", datasend, "POST").then(function (data) {
            if (data["res_code"] != "00") {
                console.log(data["res_text"]);
            }
            else {
                _this.maxvalues = data["maxvalues"];
                data["res_result"].forEach(function (element) {
                    _this.dataFeedAll.push(element);
                });
                setTimeout(function () {
                    if (_this.numLoad == 0) {
                        _this.callScroll();
                    }
                }, 200);
            }
            _this.refreshComplete(refresher);
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_7_jquery__("#bGRefresh").fadeOut();
            }, 200);
        });
    };
    NewsfeedPage.prototype.onIntersection = function ($event) {
        var _a = $event, _b = __WEBPACK_IMPORTED_MODULE_8_ng_in_viewport__["a" /* InViewportMetadata */], entry = _a[_b].entry, target = _a.target;
        var ratio = entry.intersectionRatio;
        var vid = target;
        if (ratio >= 0.65) {
            vid.play();
            vid.muted = true;
        }
        else {
            vid.pause();
            vid.muted = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("virtualScroll", { read: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* VirtualScroll */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* VirtualScroll */])
    ], NewsfeedPage.prototype, "virtualScroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], NewsfeedPage.prototype, "content", void 0);
    NewsfeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-newsfeed",template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/newfeed/newfeed.html"*/'<ion-header style="background: #fff;">\n    <ion-navbar style="padding-left: 0;padding-right: 0;padding-bottom: 0px;" hideBackButton>\n        <ion-buttons start style="order: 0;" style="width: 100%;margin: 0px;">\n            <div style="height: 45px;width: 100%;position: relative;">\n                <!-- <div class="header1" style="margin: auto;width: 100%;position: absolute;z-index: 1;top: -180px;bottom: 0px;height: 32px;background: #fff">\n                    <button ion-button icon-only style="" class="" (click)="scrollTopFN()">\n                        <img style="position: relative;margin-left: 10px;" src="./assets/icon/logotree.svg" alt="">\n                    </button>\n                    <span ion-button icon-only style="width: 80%;" class="" (click)="saerchPage()">\n                        <div style="position: relative;color: #000;font-weight: bold;width: 100%;">\n                            <ion-searchbar style="padding-right: 0px;"></ion-searchbar>\n                        </div>\n                    </span>\n                    <button ion-button icon-only style="float: right;" class="" (click)="gonoti()">\n                        <img style="position: relative;margin-right: 10px;" src="./assets/icon/Inoti.svg" alt="">\n                    </button>\n                </div> -->\n                <div class="header2" style="margin: auto;width: 100%;position: absolute;z-index: 0;top: 0px;bottom: 0px;height: 32px;">\n                    <span *ngIf="TypeLoad == 3 || TypeLoad == 4 || TypeLoad == 2">\n                        <button ion-button icon-only style="" class="" (click)="navCtrl.pop()" style="color: #565656;">\n                            <ion-icon name="ios-arrow-back"></ion-icon>\n                        </button>\n                        <button ion-button icon-only style="max-width: 50%;" class="" (click)="navCtrl.pop()">\n                            <div style="position: relative;color: #000;font-weight: bold;font-size: 14px;justify-content: flex-start;overflow: hidden;">{{Title}}\n                            </div>\n                        </button>\n                    </span>\n                    <span *ngIf="TypeLoad == 1">\n                        <button ion-button icon-only style="vertical-align: middle;" class="" (click)="scrollTopFN()">\n                            <img style="position: relative;width: 150px;margin-left: 10px;" src="./assets/icon/logotree2.png" alt="">\n                        </button>\n                        <!-- <button ion-button icon-only style="" class="" (click)="scrollTopFN()">\n                            <div style="position: relative;color: #000;font-weight: bold;font-size: 16px;">Adventure Earth\n                            </div>\n                        </button> -->\n                    </span>\n                    <button ion-button icon-only style="float:right;" class="" (click)="presentPopover($event)">\n                        <img style="position: relative;margin-right: 10px;" src="./assets/icon/menu-icon.svg" alt="">\n                    </button>\n                    <button ion-button icon-only style="float:right;" class="" (click)="NextPage(\'ProfilePage\',gd.userProfile)">\n                        <img style="position: relative;margin-right: 10px;height: 30px;width: 30px;" id="img_profile" class="imgpro" [src]="gd.userProfile.user_path_img"\n                        />\n                    </button>\n                    <button ion-button icon-only style="position: relative;float:right;" class="" (click)="gonoti()">\n                        <img style="position: relative;margin-right: 10px;width: 20px;" src="./assets/icon/Inoti.svg" alt="">\n                        <div class="numberNoti" *ngIf="gd.sumNoti > 0">\n                            <div style="margin: auto;">{{gd.sumNoti}}</div>\n                        </div>\n                    </button>\n                    <button ion-button icon-only style="float:right;" class="" (click)="saerchPage()">\n                        <img style="position: relative;margin-right: 10px;width: 20px;" src="./assets/icon/search-icon.svg" alt="">\n                    </button>\n                </div>\n            </div>\n            <div style="padding: 12px 5px;background: #F8F8F8;border-top: 0.1px solid;border-bottom: 0px solid;margin: 0;position: relative;z-index: 5;height: 44px;">\n                <b style="font-size: 13px;color: #777777;margin-left: 10px;">Share your story and freedom</b>\n                <span class="iconP-onePicture albumDefault" style="padding-right: 0px;" [ngClass]="albumType == 1 ? \'albumAction\' : \'\'" (click)="changeAlbum(1)"></span>\n                <span class="iconP-twoPicture albumDefault" [ngClass]="albumType == 0 ? \'albumAction\' : \'\'" (click)="changeAlbum(0)"></span>\n            </div>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<!-- //////////////////////////////////////////////////// Content ////////////////////////////////////////////////////////////// -->\n<ion-content padding no-bounce has-bouncing="false" forceOverscroll="false" style="background-color: #f8f8f8 !important;">\n    <ion-refresher (ionRefresh)="doRefresh($event)" pullMax="70">\n        <ion-refresher-content pullingIcon="none">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div class="center" style="width:95%;margin-bottom: 10px;margin-top: 5px;" id="loading">\n        Post loading...\n        <div class="cssProgress" style="margin-top:5px;">\n            <div class="progress2">\n                <div id="progressId" class="cssProgress-bar cssProgress-success" data-percent="100">\n                    <span class="cssProgress-label">{{percent}}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- <button ion-button (click)="onClickProgress()" expand="block" fill="clear" shape="round">\n        Click me\n    </button> -->\n\n\n    <div id="bGRefresh" style="background: #f8f8f8;height: 100%;position: absolute;width: 100%;z-index: 1;display: none;"></div>\n\n    <ion-list #virtualScroll [virtualScroll]="dataFeedAll" [bufferRatio]="10" [approxItemHeight]="\'150px\'" style="margin: 5px 0px 5px 5px;">\n        <div *virtualItem="let datafeed;let i = index;" style="padding: 0px;padding-bottom: 5px;padding-right: 5px;background: #F8F8F8;" [ngClass]="albumType == 0 ? \'widthTest\' : \'\'">\n            <div *ngIf="datafeed.checkshow == 0" style="border: solid 1px #e4e4e4;background: #fff;">\n                <div class="disshowimg" *ngIf="!datafeed.status_show"></div>\n                <div *ngIf="datafeed.status_show">\n\n                   <div class="banner_top">\n                    <!-- <span [innerHtml]="datafeed.user_firstname"> </span> -->\n                       <!-- <label>{{datafeed.highlight}}</label> -->\n                            <img *ngIf="datafeed.highlight == 2" class="bannerr_new" style="width: 22%;" src="https://www.myadventureearth.com/assets/img/travel_show.svg" alt="" />\n                            <img *ngIf="datafeed.highlight == 3" class="bannerr_new" style="width: 18%;" src="https://www.myadventureearth.com/assets/img/good_show.svg" alt="" />\n                       </div>\n                    <ion-grid style=" padding:  0;height: 45px;" (click)="NextPage(\'ProfilePage\',datafeed)" id="gridDetail" *ngIf="albumType == 0">\n\n                        <ion-row *ngIf="albumType == 0">\n                            <ion-col col-3 id="gridCol3">\n                                <img class="imgpro" [src]="datafeed.user_img" id="dImg" onError="src = \'./assets/imgs/onError.png\'" />\n\n                            </ion-col>\n                            <ion-col col-9 style="margin: auto;color:white;padding: 0px;" id="gridCol">\n                                <div class="fullname">\n                                    <span [innerHtml]="datafeed.user_firstname"> </span>\n                                    <span [innerHtml]="datafeed.user_lastname"></span>\n                                </div>\n                                <div class="location fromName newTime" style="width: 100%" style="color: #9e9e9e;">\n                                    <span style="letter-spacing: 0.1px !important;" class="colorCountry">{{datafeed.country_name_en}}\n                                    </span>\n                                    <span>&bull;</span>\n                                    <span style="letter-spacing: 0.1px !important;font-size: 12px !important;">{{datafeed.time}}</span>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                    <ion-grid style=" padding:  0;" (click)="NextPage(\'ProfilePage\',datafeed)" id="gridDetail" *ngIf="albumType == 1">\n                        <ion-row *ngIf="albumType == 1">\n                            <ion-col col-2 id="gridCol3" style="display: grid;">\n                                <img class="imgpro" [src]="datafeed.user_img" id="dImg" onError="src = \'./assets/imgs/onError.png\'" style="margin: auto;width: 50px;height: 50px;" />\n                            </ion-col>\n                            <ion-col col-10 style="margin: auto;color:white;padding: 0px;" id="gridCol">\n                                <div class="fullname">\n                                    <span [innerHtml]="datafeed.user_firstname"> </span>\n                                    <span [innerHtml]="datafeed.user_lastname"></span>\n                                </div>\n                                <div class="location fromName newTime" style="width: 100%" style="color: #9e9e9e;">\n                                    <span style="letter-spacing: 0.1px !important;" class="colorCountry">{{datafeed.country_name_en}}\n                                    </span>\n                                    <span>&bull;</span>\n                                    <span style="letter-spacing: 0.1px !important;font-size: 12px !important;">{{datafeed.time}}</span>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                    <!-- <ion-grid style=" padding:  0;height: 45px;" id="gridDetail" *ngIf="datafeed.user_id == \'TAT\'">\n                        <ion-row>\n                            <ion-col col-3 id="gridCol3">\n                                <img class="imgpro" [src]="datafeed.user_img" id="dImg" onError="src = \'./assets/imgs/onError.png\'" />\n                            </ion-col>\n                            <ion-col col-9 style="margin: auto;color:white;" id="gridCol">\n                                <div class="fullname" style="width: 100%" style="color: #565656;font-size: 11px;">\n                                    <span [innerHtml]="datafeed.user_firstname"> </span>\n                                    <span [innerHtml]="datafeed.user_lastname"></span>\n                                </div>\n                                <div class="location fromName" style="width: 100%">\n                                    <span style="letter-spacing: 0.1px !important;" class="colorCountry">{{datafeed.country_name_en}}\n                                    </span>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid> -->\n                    <ion-grid style="padding-top: 0;" *ngIf="albumType == 0">\n                        <ion-row>\n                            <ion-col col-12 style="padding: 0;height: 100%;font-size: 14px;">\n                                <div class="Museo color4D caption" [innerHtml]="datafeed.hashtag"></div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                    <ion-grid style="padding-top: 0;" *ngIf="albumType == 1">\n                        <ion-row>\n                            <ion-col col-12 style="padding: 0;height: 100%;font-size: 14px;">\n                                <div class="Museo color4D caption" style="padding-left: 7px;" [innerHtml]="datafeed.hashtag"></div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n                <div style="position: relative;" *ngIf="datafeed.status_show">\n                    <div class="frameHeart">\n                        <img src="./assets/icon/icon-hearts6t.png" alt="" (click)="bookmark(datafeed,1,i,2)" *ngIf="datafeed.status_bookmark" style="width: 22px;">\n                        <img src="./assets/icon/icon-hearts6.png" alt="" (click)="bookmark(datafeed,2,i,2)" *ngIf="!datafeed.status_bookmark" style="width: 22px;">\n\n\n                    </div>\n                    <div class="frameFeel" *ngIf="datafeed.user_id != \'TAT\' && datafeed.status_show">\n                        <span class="frameFeeling">{{datafeed.feeling_name}}</span>\n                    </div>\n                    <div class="photoAll" *ngIf="datafeed.pictureResize.length > 1">\n                        <div class="textPhotoGroup" *ngIf="albumType == 0">\n                            <img style="border-radius: unset;width: 15px;vertical-align: middle;" src="./assets/icon/photoAll.svg" alt="">\n                            <span style="vertical-align: bottom;">All Photo({{datafeed.pictureResize.length}})</span>\n                        </div>\n                        <div class="textPhotoGroup" *ngIf="albumType == 1">\n                            <img style="border-radius: unset;width: 19px;vertical-align: middle;" src="./assets/icon/photoAll.svg" alt="">\n                            <span style="vertical-align: bottom;font-size: 14px;">All Photo({{datafeed.pictureResize.length}})</span>\n                        </div>\n                    </div>\n                    <div *ngIf="albumType == 0" style="background: #e6e6e6;" id="image">\n                        <div *ngIf="datafeed.checkCard == 0 && datafeed.pictureResize[0].type == 1" [ngStyle]="{\n                                        \'background\': \'url(\'+datafeed.pictureResize[0].path_resize+\')\'}" class="bgList" style="padding-top: 100%;" (click)="NextPage(\'DetailfeedPage\',datafeed)"></div>\n\n                        <div (click)="NextPage(\'DetailfeedPage\',datafeed)" *ngIf="datafeed.checkCard == 0 && datafeed.pictureResize[0].type == 2" style="padding-top: 100%;padding-top: 100%;overflow: hidden; position: relative;">\n                            <video #videoPost id="videoPost" [muted]="\'muted\'" muted="muted" controls preload="metadata" playsinline inViewport [inViewportOptions]="{ threshold: [0, 0.65], partial: true }" (inViewportAction)="onIntersection($event)" style="width: 100%;top: 0;bottom: 0;position: absolute;margin: auto; object-fit: cover; object-position: 50% 50%; height: 100%;">\n                                <source [src]="datafeed.pictureResize[0].path_resize" type="video/mp4">\n                            </video>\n                        </div>\n                    </div>\n                    <div *ngIf="albumType == 1" style="background: #e6e6e6;" id="image">\n                        <div [ngStyle]="{ \'height\': datafeed.pictureResize[0].path_height+\'px\'}">\n                            <img [ngStyle]="{ \'height\': datafeed.pictureResize[0].path_height+\'px\'}" *ngIf="datafeed.checkCard == 0 && datafeed.pictureResize[0].type == 1" class="" (click)="NextPage(\'DetailfeedPage\',datafeed)" [src]="datafeed.pictureResize[0].path_resize" alt=""\n                                style="width: 100%;">\n                        </div>\n                        <div (click)="NextPage(\'DetailfeedPage\',datafeed)" *ngIf="datafeed.checkCard == 0 && datafeed.pictureResize[0].type == 2" style="padding-top: 100%;padding-top: 100%;overflow: hidden; position: relative;">\n                            <video #videoPost id="videoPost" [muted]="\'muted\'" muted="muted" controls preload="metadata" playsinline inViewport [inViewportOptions]="{ threshold: [0, 0.65], partial: true }" (inViewportAction)="onIntersection($event)" style="width: 100%;top: 0;bottom: 0;position: absolute;margin: auto; object-fit: cover; object-position: 50% 50%; height: 100%;">\n                                <source [src]="datafeed.pictureResize[0].path_resize" type="video/mp4">\n                            </video>\n                        </div>\n                    </div>\n\n                    <!--\n                    <div *ngIf="datafeed.user_id == \'TAT\'" style="background: #e6e6e6;" id="image">\n                        <div *ngIf="datafeed.checkCard == 0" [ngStyle]="{\n                                            \'background\': \'url(\'+datafeed.photo_img+\')\'}" class="bgList" style="padding-top: 100%;"\n                            (click)="NextPage(\'DetailfeedPage\',datafeed)"></div>\n                    </div> -->\n\n                    <div id="tabProfile" class="ChildNewfeed" style="position: absolute;bottom: 0px; width: 100%;" *ngIf="datafeed.status_show">\n                    </div>\n                </div>\n                <div *ngIf="datafeed.status_show" id="detailcard">\n                    <ion-grid *ngIf="albumType == 0" style="padding-top: 5px;padding-bottom: 5px;max-height: 45px;min-height: 45px;border-bottom: 1px solid #f5f5f5;padding: 0px;background: #f7f7f7;position: relative;font-size: 12px;">\n                        <i class="icon_map icon15"></i>\n                        <ion-row (click)="NextPage(\'TouristPage\',datafeed)" style="padding-top: 8px;">\n                            <ion-col col-8 style="padding: 0;">\n                                <span class="color87 locations" style="margin-left: 20px;" [innerHTML]="datafeed.photo_location"></span>\n                            </ion-col>\n                            <ion-col col-4 style="padding: 0;padding: 0;text-align: right;font-weight: bolder;">\n                                <span class="location distant" style="position: absolute;right: 5px;bottom: 0;color: #72c2ff;width: 100% !important;font-size: 12px !important;">{{datafeed.distant}} km.\n                                </span>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row (click)="NextPage(\'TouristPage\',datafeed)">\n                            <ion-col col-12 style="padding: 0;">\n                                <span class="location" style="margin-left: 20px;padding-bottom: 5px;font-size: 12px !important;">\n                                    {{datafeed.photo_province}}</span>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                    <ion-grid *ngIf="albumType == 1" style="padding-top: 5px;padding-bottom: 5px;max-height: 45px;min-height: 45px;border-bottom: 1px solid #f5f5f5;padding: 0px;background: #f7f7f7;position: relative;font-size: 13px;">\n                        <i class="icon_map icon15"></i>\n                        <ion-row (click)="NextPage(\'TouristPage\',datafeed)" style="padding-top: 8px;">\n                            <ion-col col-8 style="padding: 0;">\n                                <span class="color87 locations" style="margin-left: 20px;font-size: 13px;" [innerHTML]="datafeed.photo_location"></span>\n                            </ion-col>\n                            <ion-col col-4 style="padding: 0;padding: 0;text-align: right;font-weight: bolder;">\n                                <span class="location distant" style="position: absolute;right: 5px;bottom: 0;color: #72c2ff;width: 100% !important;font-size: 13px !important;">{{datafeed.distant}} km.\n                                </span>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row (click)="NextPage(\'TouristPage\',datafeed)">\n                            <ion-col col-12 style="padding: 0;">\n                                <span class="location" style="margin-left: 20px;padding-bottom: 5px;font-size: 13px !important;">\n                                    {{datafeed.photo_province}}</span>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                    <ion-grid style="padding-top: 8px;padding-bottom: 8px;" *ngIf="datafeed.user_id != \'TAT\' && albumType == 0" class="threeIcon">\n                        <ion-row class="FSitalic font12">\n                            <ion-col col-12 style="position: relative;padding: 0;" class="col_fix1">\n                                <img src="./img/icon_coconut_gray.svg" style="width: 15px;vertical-align: middle;" alt="" (click)="like(datafeed,2,i,2)" *ngIf="!datafeed.status_like && datafeed.user_id != \'TAT\'">\n                                <div id="like{{datafeed.photo_id}}" *ngIf="datafeed.status_like && datafeed.user_id != \'TAT\'" style="display: inline-block ;" (click)="like(datafeed,1,i,2)">\n                                    <img src="./img/icon_coconut.png" style="width: 15px;vertical-align: middle;" alt="">\n                                    <span class=\'like-iconTNew\'>\n                                        <div class=\'heart-animation-1\'></div>\n                                        <div class=\'heart-animation-2\'></div>\n                                    </span>\n                                </div>\n                                <div style="display: inline-block;position: relative;height: 16px;vertical-align: middle;margin-left: -7px;" *ngIf="datafeed.sum_like != 0 && datafeed.user_id != \'TAT\'">\n\n                                    <!-- <div class="userLike" *ngIf="datafeed.imageLike[0]"\n                                        [ngStyle]="{\'background\': \'url(\'+datafeed.imageLike[0]+\')\'}"></div>\n                                    <div class="userLike" style="left: 5px;" *ngIf="datafeed.imageLike[1]"\n                                        [ngStyle]="{\'background\': \'url(\'+datafeed.imageLike[1]+\')\'}"></div>\n                                    <div class="userLike" style="left: 10px;display: grid;"\n                                        *ngIf="datafeed.imageLike[2]">\n                                        <div style="margin: auto;font-size: 8px;font-style: normal;">+</div>\n                                    </div> -->\n                                    <div class="userLike" style="display: grid;">\n                                        <span class="sumLike">{{datafeed.sum_like}}</span>\n                                    </div>\n\n                                </div>\n                                <span style="font-style: normal;font-size: 10px;font-weight: bold;" (click)="like(datafeed,2,i,2)" *ngIf="!datafeed.status_like && datafeed.user_id != \'TAT\'" class="fontnormal">Coconut</span>\n\n                                <span style="font-style: normal;font-size: 10px;font-weight: bold;" *ngIf="datafeed.status_like && datafeed.user_id != \'TAT\'" (click)="like(datafeed,1,i,2)" class="fontnormal">Coconut</span>\n                                <!-- <span style="font-style: normal;font-size: 10px;font-weight: bold;" (click)="like(datafeed,2,i,2)" *ngIf="!datafeed.status_like && datafeed.user_id != \'TAT\'"\n                                    class="fontnormal"  [ngClass]="datafeed.imageLike.length == 0 ? \'\' : datafeed.imageLike.length == 1 ? \'margin1\' : datafeed.imageLike.length == 2 ? \'margin2\' : datafeed.imageLike.length > 2 ? \'margin3\' : \'\' ">Coconut</span>\n\n                                <span style="font-style: normal;font-size: 10px;font-weight: bold;"  *ngIf="datafeed.status_like && datafeed.user_id != \'TAT\'" (click)="like(datafeed,1,i,2)"\n                                    class="fontnormal"  [ngClass]="datafeed.imageLike.length == 0 ? \'\' : datafeed.imageLike.length == 1 ? \'margin1\' : datafeed.imageLike.length == 2 ? \'margin2\' : datafeed.imageLike.length > 2 ? \'margin3\' : \'\' ">Coconut</span> -->\n\n                                <span style="margin-left: 5px;" (click)="NextPage(\'viewComment\',datafeed)">\n                                    <img src="./assets/icon/icon-comment-new-f.svg" alt="" style="width: 13px;vertical-align: middle;" *ngIf="!datafeed.status_comment">\n                                    <img src="./assets/icon/icon-comment-new-t.svg" alt="" style="width: 13px;vertical-align: middle;" *ngIf="datafeed.status_comment">\n                                    <div style="margin-left: -8px" [ngClass]="albumType == 0?\'userLike0\':\'userLike1\'" *ngIf="datafeed.countComment != 0">\n                                            <span class="text-number">{{datafeed.countComment}}</span>\n                </div>\n                <span style="font-style: normal;vertical-align: middle;font-size: 10px;font-weight: bold;" class="fontnormal">Comment</span>\n                </span>\n                </ion-col>\n                </ion-row>\n\n                </ion-grid>\n\n                <ion-grid style="padding-top: 8px;padding-bottom: 8px;" *ngIf="datafeed.user_id == \'TAT\' && albumType == 0" class="threeIcon">\n                    <ion-row class="FSitalic font12">\n                        <ion-col col-12 style="position: relative;padding: 0;" class="col_fix1">\n                            <img src="./img/icon_coconut_gray.svg" style="width: 15px;vertical-align: middle;" alt="" (click)="like(datafeed,2,i,2)" *ngIf="!datafeed.status_like">\n                            <div id="like{{datafeed.photo_id}}" *ngIf="datafeed.status_like " style="display: inline-block ;" (click)="like(datafeed,1,i,2)">\n                                <img src="./img/icon_coconut.png" style="width: 15px;vertical-align: middle;" alt="">\n                                <span class=\'like-iconTNew\'>\n                                        <div class=\'heart-animation-1\'></div>\n                                        <div class=\'heart-animation-2\'></div>\n                                    </span>\n                            </div>\n                            <div style="display: inline-block;position: relative;height: 16px;vertical-align: middle;margin-left: -7px;" *ngIf="datafeed.sum_like != 0">\n                                <div class="userLike" style="display: grid;">\n                                    <span class="sumLike">{{datafeed.sum_like}}</span>\n                                </div>\n                            </div>\n                            <span style="font-style: normal;font-size: 10px;font-weight: bold;" (click)="like(datafeed,2,i,2)" *ngIf="!datafeed.status_like" class="fontnormal">Coconut</span>\n                            <span style="font-style: normal;font-size: 10px;font-weight: bold;" *ngIf="datafeed.status_like" (click)="like(datafeed,1,i,2)" class="fontnormal">Coconut</span>\n                            <span style="margin-left: 5px;" (click)="NextPage(\'viewComment\',datafeed)">\n\n                                    <img src="./assets/icon/icon-comment-new-f.svg" alt="" style="width: 13px;vertical-align: middle;" *ngIf="!datafeed.status_comment">\n                                    <img src="./assets/icon/icon-comment-new-t.svg" alt="" style="width: 13px;vertical-align: middle;" *ngIf="datafeed.status_comment">\n                                    <div style="margin-left: -8px;" [ngClass]="albumType == 0?\'userLike0\':\'userLike1\'" *ngIf="datafeed.countComment != 0">\n                                            <span class="text-number">{{datafeed.countComment}}</span>\n            </div>\n            <span style="font-style: normal;vertical-align: middle;font-size: 10px;font-weight: bold;" class="fontnormal">Comment</span>\n            </span>\n            </ion-col>\n            </ion-row>\n            </ion-grid>\n\n            <ion-grid style="padding-top: 12px;padding-bottom: 12px;padding-left: 12px;" *ngIf="datafeed.user_id != \'TAT\' && albumType == 1" class="threeIcon">\n                <ion-row class="FSitalic font12">\n                    <ion-col col-6 style="position: relative;padding: 0;" class="col_fix1">\n                        <img src="./img/icon_coconut_gray.svg" style="width: 20px;vertical-align: middle;" alt="" (click)="like(datafeed,2,i,2)" *ngIf="!datafeed.status_like && datafeed.user_id != \'TAT\'">\n                        <div id="like{{datafeed.photo_id}}" *ngIf="datafeed.status_like && datafeed.user_id != \'TAT\'" style="display: inline-block ;" (click)="like(datafeed,1,i,2)">\n                            <img src="./img/icon_coconut.png" style="width: 20px;vertical-align: middle;" alt="">\n                            <span class=\'like-iconTNew\'>\n                                        <div class=\'heart-animation-1\'></div>\n                                        <div class=\'heart-animation-2\'></div>\n                                    </span>\n                        </div>\n                        <div style="display: inline-block;position: relative;height: 20px;vertical-align: middle;margin-left: -10px;" *ngIf="datafeed.sum_like != 0 && datafeed.user_id != \'TAT\'">\n                            <div class="userLike" style="display: grid;min-width: 20px;height: 20px;font-size: 16px;">\n                                <span class="sumLike" style="font-size: 12px;">{{datafeed.sum_like}}</span>\n                            </div>\n                        </div>\n                        <span style="font-style: normal;font-size: 13px;font-weight: bold;vertical-align: middle;" (click)="like(datafeed,2,i,2)" *ngIf="!datafeed.status_like && datafeed.user_id != \'TAT\'" class="fontnormal">Coconut</span>\n\n                        <span style="font-style: normal;font-size: 13px;font-weight: bold;vertical-align: middle;" *ngIf="datafeed.status_like && datafeed.user_id != \'TAT\'" (click)="like(datafeed,1,i,2)" class="fontnormal">Coconut</span>\n\n\n                    </ion-col>\n                    <ion-col col-6 style="position: relative;padding: 0;" (click)="NextPage(\'viewComment\',datafeed)">\n                        <span style="margin-left: 5px;">\n                                    <img src="./assets/icon/icon-comment-new-f.svg" alt="" style="width: 20px;vertical-align: middle;" *ngIf="!datafeed.status_comment">\n                                    <img src="./assets/icon/icon-comment-new-t.svg" alt="" style="width: 20px;vertical-align: middle;" *ngIf="datafeed.status_comment">\n                                    <div style="margin-left: -8px" [ngClass]="albumType == 0?\'userLike0\':\'userLike1\'" *ngIf="datafeed.countComment != 0">\n                                            <span class="text-number">{{datafeed.countComment}}</span>\n        </div>\n        <span style="font-style: normal;vertical-align: middle;font-size: 13px;font-weight: bold;" class="fontnormal">Comment</span>\n        </span>\n        </ion-col>\n        </ion-row>\n\n        </ion-grid>\n\n        <ion-grid style="padding-top: 12px;padding-bottom: 12px;padding-left: 12px;" *ngIf="datafeed.user_id == \'TAT\' && albumType == 1" class="threeIcon">\n            <ion-row class="FSitalic font12">\n                <ion-col col-6 style="position: relative;padding: 0;" class="col_fix1">\n                    <img src="./img/icon_coconut_gray.svg" style="width: 20px;vertical-align: middle;" alt="" (click)="like(datafeed,2,i,2)" *ngIf="!datafeed.status_like">\n                    <div id="like{{datafeed.photo_id}}" *ngIf="datafeed.status_like" style="display: inline-block ;" (click)="like(datafeed,1,i,2)">\n                        <img src="./img/icon_coconut.png" style="width: 20px;vertical-align: middle;" alt="">\n                        <span class=\'like-iconTNew\'>\n                                        <div class=\'heart-animation-1\'></div>\n                                        <div class=\'heart-animation-2\'></div>\n                                    </span>\n                    </div>\n                    <div style="display: inline-block;position: relative;height: 20px;vertical-align: middle;margin-left: -10px;" *ngIf="datafeed.sum_like != 0">\n                        <div class="userLike" style="display: grid;min-width: 20px;height: 20px;font-size: 16px;">\n                            <span class="sumLike" style="font-size: 12px;">{{datafeed.sum_like}}</span>\n                        </div>\n                    </div>\n                    <span style="font-style: normal;font-size: 13px;font-weight: bold;vertical-align: middle;" (click)="like(datafeed,2,i,2)" *ngIf="!datafeed.status_like" class="fontnormal">Coconut</span>\n                    <span style="font-style: normal;font-size: 13px;font-weight: bold;vertical-align: middle;" *ngIf="datafeed.status_like" (click)="like(datafeed,1,i,2)" class="fontnormal">Coconut</span>\n                </ion-col>\n                <ion-col col-6 style="position: relative;padding: 0;" (click)="NextPage(\'viewComment\',datafeed)">\n                    <span style="margin-left: 5px;">\n                                    <img src="./assets/icon/icon-comment-new-f.svg" alt="" style="width: 20px;vertical-align: middle;" *ngIf="!datafeed.status_comment">\n                                    <img src="./assets/icon/icon-comment-new-t.svg" alt="" style="width: 20px;vertical-align: middle;" *ngIf="datafeed.status_comment">\n                                    <div style="margin-left: -8px" [ngClass]="albumType == 0?\'userLike0\':\'userLike1\'" *ngIf="datafeed.countComment != 0">\n                                            <span class="text-number">{{datafeed.countComment}}</span>\n                    </div>\n                    <span style="font-style: normal;vertical-align: middle;font-size: 13px;font-weight: bold;" class="fontnormal">Comment</span>\n                    </span>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <hr style="margin: 0 5px;background: #e4e4e4;height: 1px;">\n        <ion-grid *ngIf="datafeed.user_id != \'TAT\' && albumType == 0" (click)="NextPage(\'viewComment\',datafeed)" class="maxHeigth">\n            <ion-row class="font_10" *ngIf="datafeed.userIdComment != \'\' && albumType == 0">\n                <ion-col col-3 style="display: grid;">\n                    <div class="borderimgage inlineBlog" style="display: inline-block;margin: auto; text-align: center;">\n                        <img class="imgpro" id="img_profile" [src]="datafeed.comment_user_img" />\n                    </div>\n                </ion-col>\n                <ion-col class="padding_0" col-9 style="display: inline-flex;">\n                    <div class="commentBg" style="display: inline-block;width: 95%; vertical-align: middle;margin: auto;padding: 2px 5px;margin-left: 0px;">\n                        <p class="location namecomment" style="width: 100%;margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.fulnameComment"></p>\n                        <p class="location" style="width: 100%;margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.comment">\n                        </p>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <ion-row class="font_10" *ngIf="datafeed.countComment == 0 && albumType == 0">\n                <ion-col col-3 style="display: inline-flex;">\n                    <div class="borderimgage inlineBlog" style="display: inline-block;margin: auto; text-align: center;">\n                        <img class="imgpro" id="img_profile" [src]="gd.userProfile.user_path_img" />\n                    </div>\n                </ion-col>\n                <ion-col class="padding_5" col-9 style="display: inline-flex;">\n                    <div class="borderinput commentbord" style="display: inline-block;width: 100%;vertical-align: middle;margin: auto;">\n                        <input type="text" disabled class="inputComment" value="Write a comment" style="border:unset !important;">\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n\n\n        <ion-grid *ngIf="datafeed.user_id != \'TAT\' && albumType == 1" (click)="NextPage(\'viewComment\',datafeed)" class="">\n            <ion-row class="font_10" *ngIf="datafeed.userIdComment != \'\' && albumType == 1">\n                <ion-col col-2 style="display: inline-flex;">\n                    <div class="borderimgage inlineBlog" style="display: inline-block;margin: auto; text-align: center;">\n                        <img class="imgpro" id="img_profile" [src]="datafeed.comment_user_img" style="vertical-align: middle;height: 40px;width: 40px;border: none;" />\n                    </div>\n                </ion-col>\n                <ion-col class="padding_0" col-10 style="display: inline-flex;">\n                    <div class="commentBg" style="display: inline-block;max-width: 95%; vertical-align: middle;margin: auto;padding: 5px 10px;margin-left: 0px;">\n                        <p class="location namecomment" style="width: 100%;margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.fulnameComment"></p>\n                        <p class="location" style="width: 100%;margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.comment">\n                        </p>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <ion-row class="font_10" *ngIf="albumType == 1">\n                <ion-col col-2 style="display: inline-flex;">\n                    <div class="borderimgage inlineBlog" style="display: inline-block;margin: auto; text-align: center;">\n                        <img class="imgpro" id="img_profile" [src]="gd.userProfile.user_path_img" style="vertical-align: middle;height: 40px;width: 40px;border: none;" />\n                    </div>\n                </ion-col>\n                <ion-col class="padding_5" col-10 style="display: inline-flex;">\n                    <div class="borderinput commentbord" style="display: inline-block;width: 100%;vertical-align: middle;margin: auto;">\n                        <input type="text" disabled class="inputComment" value="Write a comment" style="border:unset !important;">\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <ion-grid *ngIf="datafeed.user_id == \'TAT\' && albumType == 0" (click)="NextPage(\'viewComment\',datafeed)" class="maxHeigth">\n            <ion-row class="font_10" *ngIf="datafeed.userIdComment != \'\' && albumType == 0">\n                <ion-col col-3 style="display: grid;">\n                    <div class="borderimgage inlineBlog" style="display: inline-block;margin: auto;">\n                        <img class="imgpro" id="img_profile" [src]="datafeed.comment_user_img" style="vertical-align: middle;height: 28px;width: 28px;border: none;" />\n                    </div>\n                </ion-col>\n                <ion-col class="padding_0" col-9 style="display: inline-flex;">\n                    <div class="commentBg" style="display: inline-block;width: 95%; vertical-align: middle;margin: auto;padding: 2px 5px;margin-left: 0px;">\n                        <p class="location namecomment" style="width: 100%;margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.fulnameComment"></p>\n                        <p class="location" style="width: 100%;margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.comment">\n                        </p>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <ion-row class="font_10" *ngIf="datafeed.countComment == 0 && albumType == 0">\n                <ion-col col-3 style="display: inline-flex;">\n                    <div class="borderimgage inlineBlog" style="display: inline-block;margin: auto; text-align: center;">\n                        <img class="imgpro" id="img_profile" [src]="gd.userProfile.user_path_img" style="vertical-align: middle;height: 28px;width: 28px;border: none;" />\n                    </div>\n                </ion-col>\n                <ion-col class="padding_5" col-9 style="display: inline-flex;">\n                    <div class="borderinput commentbord" style="display: inline-block;width: 100%;vertical-align: middle;margin: auto;">\n                        <input type="text" disabled class="inputComment" value="Write a comment" style="border:unset !important;">\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <ion-grid *ngIf="datafeed.user_id == \'TAT\' && albumType == 1" (click)="NextPage(\'viewComment\',datafeed)" class="">\n            <ion-row class="font_10" *ngIf="datafeed.userIdComment != \'\' && albumType == 1">\n                <ion-col col-2 style="display: inline-flex;">\n                    <div class="borderimgage inlineBlog" style="display: inline-block;margin: auto;">\n                        <img class="imgpro" id="img_profile" [src]="datafeed.comment_user_img" style="vertical-align: middle;height: 40px;width: 40px;border: none;" />\n                    </div>\n                </ion-col>\n                <ion-col class="padding_0" col-10 style="display: inline-flex;">\n                    <div class="commentBg" style="display: inline-block;max-width: 95%; vertical-align: middle;margin: auto;padding: 5px 10px;margin-left: 0px;">\n                        <p class="location namecomment" style="width: 100%;margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.fulnameComment"></p>\n                        <p class="location" style="width: 100%;margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.comment">\n                        </p>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <ion-row class="font_10" *ngIf="albumType == 1">\n                <ion-col col-2 style="display: inline-flex;">\n                    <div class="borderimgage inlineBlog" style="display: inline-block;margin: auto;">\n                        <img class="imgpro" id="img_profile" [src]="gd.userProfile.user_path_img" style="vertical-align: middle;height: 40px;width: 40px;border: none;" />\n                    </div>\n                </ion-col>\n                <ion-col class="padding_5" col-10 style="display: inline-flex;">\n                    <div class="borderinput commentbord" style="display: inline-block;width: 100%;vertical-align: middle;margin: auto;">\n                        <input type="text" disabled class="inputComment" value="Write a comment" style="border:unset !important;">\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        </div>\n        </div>\n        </div>\n    </ion-list>\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="doInfinite($event)" *ngIf="stLoadinfinity">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <div style="height: 100px;"></div>\n\n\n    <!-- <img *ngIf="dataFeedAll.length == 0 " src="./assets/imgs/noSearch.png" class="nopost"> -->\n</ion-content>\n'/*ion-inline-end:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/newfeed/newfeed.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])("animateTop", [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(":enter", [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ top: "-40px" }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])("200ms", Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ top: "0px" })),
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(":leave", [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ top: "0px" }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])("200ms", Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ top: "-40px" })),
                    ]),
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])("animateFade", [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(":enter", [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])("200ms", Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 })),
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(":leave", [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])("200ms", Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 })),
                    ]),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */],
            __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__["a" /* GlobalDataService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */]])
    ], NewsfeedPage);
    return NewsfeedPage;
}());

//# sourceMappingURL=newfeed.js.map

/***/ })

});
//# sourceMappingURL=22.js.map