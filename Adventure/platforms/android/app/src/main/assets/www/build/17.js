webpackJsonp([17],{

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(571);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Firebase__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_Firebase__);
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







var ProfilePage = /** @class */ (function () {
    function ProfilePage(modalCtrl, loadingCtrl, popoverCtrl, navCtrl, actionSheetCtrl, alertCtrl, ngZoneService, platform, navParams, SFT, gd, events, camera) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.ngZoneService = ngZoneService;
        this.platform = platform;
        this.navParams = navParams;
        this.SFT = SFT;
        this.gd = gd;
        this.events = events;
        this.camera = camera;
        this.ref = __WEBPACK_IMPORTED_MODULE_5_Firebase__["database"]().ref("chatrooms/");
        this.Profile = this.gd.userProfile;
        this.tabs = 1;
        this.section = "one";
        this.images = [];
        this.somethings = new Array(20);
        this.typeprofile = true;
        this.back = false;
        this.feedone = [];
        this.feedtwo = [];
        this.feedthree = [];
        this.feedone2 = [];
        this.feedtwo2 = [];
        this.feedthree2 = [];
        this.showfeedtwo2 = false;
        this.showfeedtwo = false;
        this.showfeedthree = false;
        this.showfeedthree2 = false;
        this.user = [];
        this.loading = true;
        this.dataChatroom = [];
        this.delayChat = true;
        this.goChat2 = false;
        this.postEvent = [];
        this.incommentEvent = [];
        this.lastestEvent = [];
        this.monthLista = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        this.linit_last = 1;
        this.limit_incoming = 1;
        this.limit_post = 1;
        this.countpacket = 0;
        this.datasendObject = [];
        this.numLoad = 0;
        this.numLoadAlbum = 0;
        this.numLoadPhoto = 0;
        this.postList = [];
        this.tmpPostList = [];
        this.albumList = [];
        this.allPhoto = [];
        this.footprintList = [];
        this.viewType = 0;
        this.coverImage = "";
        this.totalPost = 0;
        this.feedType = 1;
        this.albumType = 0;
        this.favType = 0; //favorite type 0 = multi, 1 = single
        this.mode = 1; // 1 = album, 2 = see all album
        this.n = 1;
        this.refresherEnabled = true; //if true show refresher 
        //show page
        this.showPage = true;
        this.loading = true;
        setTimeout(function () {
            console.log(_this.gd.userProfile);
            _this.goChat2 = true;
        }, 2000);
        // setTimeout(() => {
        //   $('ion-tab[aria-hidden="false"] .scroll-content:last').stop().animate({paddingTop: "205px"});
        // }, 1000);
        events.subscribe("deleteimg", function (res) {
            console.log("deleteimg");
            _this.filterID(res);
        });
    }
    ProfilePage.prototype.getAlbum = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var datasend = {
                type: _this.mode,
                province: undefined,
                user_id: _this.Profile["user_id"],
                width: __WEBPACK_IMPORTED_MODULE_6_jquery__("ng-component").width(),
                LoadMoreLimit: _this.SFT.LoadMoreLimit,
                numLoad: _this.numLoadAlbum,
            };
            _this.datasendObject = datasend;
            _this.SFT.ServiceThread("get_album_photo", datasend, "POST").then(function (data) {
                if (data["res_code"] == "00") {
                    console.log(data);
                    if (_this.numLoadAlbum > 0) {
                        //this.album.push(data["res_result"]); //ไม่ต้อง push เพราะดึงทั้งหมด
                        _this.album = data["res_result"];
                    }
                    else {
                        _this.album = data["res_result"];
                    }
                    _this.numLoadAlbum++;
                }
                else {
                    console.log(data);
                }
                resolve("finished");
            });
        });
    };
    ProfilePage.prototype.getAllPhoto = function (province) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.refresherEnabled = false;
            var tmpPhotoList = _this.photoList;
            var tmpAlbumList = _this.albumList;
            // this.loading = true;
            console.log('loading', _this.loading);
            if (_this.numLoadPhoto < 1) {
                //clear array ก่อนดึงข้อมูลเฉพาะครั้งแรก numloadPhoto = 0       
                _this.photoList = [];
            }
            var datasend = {
                type: 2,
                user_id: _this.Profile["user_id"],
                width: __WEBPACK_IMPORTED_MODULE_6_jquery__("ng-component").width(),
                lat: _this.SFT.userlocation["lat"],
                long: _this.SFT.userlocation["long"],
                LoadMoreLimit: _this.SFT.LoadMoreLimit,
                numLoad: _this.numLoadPhoto,
                province: province,
            };
            _this.datasendObject = datasend;
            _this.albumList = [];
            _this.SFT.ServiceThread("photo_me", datasend, "POST").then(function (data) {
                if (data["res_code"] == "00") {
                    if (_this.numLoadPhoto > 0) {
                        for (var index in data["res_result"]) {
                            _this.photoList.push(data["res_result"][index]);
                        }
                        _this.parseData().then(function () {
                            // this.loading = false;
                            _this.refresherEnabled = true;
                            console.log('add loading', _this.loading);
                        });
                    }
                    else {
                        _this.photoList = data["res_result"];
                        _this.parseData().then(function () {
                            // this.loading = false;
                            _this.refresherEnabled = true;
                            console.log('new loading', _this.loading);
                        });
                    }
                    _this.numLoadPhoto++;
                }
                else {
                    _this.refresherEnabled = true;
                    _this.photoList = tmpPhotoList;
                    _this.albumList = tmpAlbumList;
                    console.log('temp of photoList', tmpPhotoList);
                    console.log('temp of albumList', tmpAlbumList);
                    console.log('all photos of album', _this.allPhoto);
                    console.log("etAllPhoto() data not found", "olor:red");
                }
                resolve("finished");
            });
        });
    };
    ProfilePage.prototype.viewAllAlbum = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("viewAllAlbum", item);
                        this.myContent.scrollToTop(0);
                        this.mode = 2;
                        this.provinceSelected = item.province;
                        console.log("provinceSelected", this.provinceSelected);
                        console.log("albumList", this.albumList);
                        __WEBPACK_IMPORTED_MODULE_6_jquery__('[id="video"]').map(function (index, video) { return __awaiter(_this, void 0, void 0, function () {
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
                        if (item.photo_count > 1 && this.mode == 2) {
                            this.viewType = 0;
                        }
                        else {
                            this.viewType = 1;
                        }
                        return [4 /*yield*/, this.getAllPhoto(item.province)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.hashtag = function () {
        var t = this;
        __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"] page-profile:last .hashtag').unbind();
        __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"] page-profile:last .hashtag').click(function () {
            console.log("hashtag -------------");
            t.SFT.stLoad = true;
            t.gd.nextpage(t.navCtrl, "newsfeed", {
                frompage: 6,
                datapage: __WEBPACK_IMPORTED_MODULE_6_jquery__(this).text(),
            });
        });
    };
    ProfilePage.prototype.presentModalPreview = function (img, title) {
        return __awaiter(this, void 0, void 0, function () {
            var options, imgFullsize, myModal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            showBackdrop: true,
                            enableBackdropDismiss: false,
                            cssClass: "modal-preview",
                        };
                        imgFullsize = img.replace("img_resize", "img_base64");
                        return [4 /*yield*/, this.modalCtrl.create("PreviewPage", { image: imgFullsize }, options)];
                    case 1:
                        myModal = _a.sent();
                        myModal.onDidDismiss(function (data) {
                            console.log("I have dismissed Preview.");
                            console.log(data);
                        });
                        return [4 /*yield*/, myModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfilePage.prototype.viewImage = function (img, title) {
        console.log(title);
        this.presentModalPreview(img, title);
    };
    ProfilePage.prototype.presentPopover = function () {
        var _this = this;
        console.log("string");
        var actionSheet = this.actionSheetCtrl.create({
            // title: 'Select Filter',
            buttons: [
                {
                    text: "Setting",
                    cssClass: "setting_img",
                    handler: function () {
                        _this.gd.nextpage(_this.navCtrl, "SettingPage", {});
                    },
                },
                {
                    text: "Refresh",
                    cssClass: "setting_img",
                    handler: function () {
                        _this.gd.getFollow(_this.Profile["user_id"]);
                        _this.Profile["followers"] = _this.gd["followers"];
                        _this.Profile["following"] = _this.gd["following"];
                        //       this.userProfile["followers"] = data["followers"];
                        // this.userProfile["following"] = data["following"];
                    },
                },
            ],
        });
        actionSheet.present();
    };
    ProfilePage.prototype.settingFN = function () {
        this.gd.nextpage(this.navCtrl, "SettingPage", {});
    };
    ProfilePage.prototype.filterID = function (id) {
        if (this.feedone.filter(function (x) { return x.photo_id == id; }).length > 0) {
            var n = this.feedone.findIndex(function (x) { return x.photo_id == id; });
            this.feedone[n]["status_show"] = false;
        }
        else if (this.feedone2.filter(function (x) { return x.photo_id == id; }).length > 0) {
            var n = this.feedone2.findIndex(function (x) { return x.photo_id == id; });
            this.feedone2[n]["status_show"] = false;
        }
    };
    ProfilePage.prototype.sendComment = function (data, type) {
        console.log(data);
        if (data.textComment.trim() != "") {
            if (data.comment_key != "") {
                this.saveComment(data, type);
            }
            else {
                this.checkroom(data, type);
            }
        }
    };
    ProfilePage.prototype.checkroom = function (getData, type) {
        var _this = this;
        if (getData.user_id != "TAT") {
            if (getData.comment_key == "") {
                var datasend = {
                    id: getData.photo_id,
                    key: "",
                    type: "",
                };
                this.SFT.ServiceThread("check_key_comment", datasend, "POST").then(function (data) {
                    console.log();
                    if (data["res_code"] == "00") {
                        getData.comment_key = data["res_result"]["res_result"];
                        _this.saveComment(getData, type);
                    }
                    else {
                        var newData = _this.ref.push();
                        var type_1;
                        if (getData.user_id == "TAT") {
                            type_1 = "TAT";
                        }
                        else {
                            type_1 = "user";
                        }
                        newData.set({
                            roomname: getData.photo_id,
                            type: type_1,
                        });
                        var datasend_1 = {
                            id: getData.photo_id,
                            key: newData.key,
                            type: type_1,
                        };
                        getData.comment_key = newData.key;
                        _this.SFT.ServiceThread("check_key_comment", datasend_1, "POST").then(function (data) {
                            console.log("add_room");
                            _this.saveComment(getData, type_1);
                        });
                    }
                });
            }
        }
    };
    ProfilePage.prototype.saveComment = function (getData, type) {
        var _this = this;
        console.log(getData);
        var newData = __WEBPACK_IMPORTED_MODULE_5_Firebase__["database"]()
            .ref("comments/" + getData.comment_key + "/comment/")
            .push();
        var datasend = {
            fullname: this.gd.userProfile["user_firstname"] +
                " " +
                this.gd.userProfile["user_lastname"],
            userId: this.gd.userProfile["user_id"],
            comment: getData.textComment,
            date: __WEBPACK_IMPORTED_MODULE_5_Firebase__["database"].ServerValue.TIMESTAMP,
            status: "0",
        };
        newData.set(datasend);
        setTimeout(function () {
            var datasend = {
                comment: getData.textComment,
                postId: getData.photo_id,
                userId: _this.gd.userProfile["user_id"],
                dataPost: JSON.stringify(getData),
                keycomment: newData.key,
            };
            _this.SFT.ServiceThread("saveComment", datasend, "PSOT").then(function (data) {
                if (data["res_code"] == "00") {
                    // let newData = firebase.database().ref('comments/' + getData.comment_key + '/comment/').push();
                    getData.fulnameComment =
                        _this.gd.userProfile["user_firstname"] +
                            " " +
                            _this.gd.userProfile["user_lastname"];
                    getData.userIdComment = _this.gd.userProfile["user_id"];
                    getData.comment = getData.textComment;
                    getData.comment_user_img = _this.gd.userProfile.user_path_img;
                    getData.timeComment = "0 sec";
                    getData.countComment++;
                    getData.textComment = "";
                }
            });
        }, 100);
    };
    ProfilePage.prototype.filters = function (type, data, tmpFilter) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var tmp, picResize, newList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tmp = tmpFilter;
                        console.log("data for filters", data);
                        console.log("tmpPostList", this.tmpPostList);
                        console.log("type", type);
                        if (!(type == "post")) return [3 /*break*/, 2];
                        console.log("tmpPostList[data.index]", this.tmpPostList[data.index]);
                        return [4 /*yield*/, this.tmpPostList[data.index].data.filter(function (item) { return item.photo_id == data.post_id; })[0]];
                    case 1:
                        tmp = _a.sent(); //เอาเฉพาะ array ที่มี photo_id ตรงกัน
                        console.log("resolve tmp", tmp);
                        resolve(tmp);
                        return [3 /*break*/, 4];
                    case 2:
                        console.log("tmp data for filters", tmp);
                        console.log("tmpFilter", tmpFilter);
                        return [4 /*yield*/, tmp.pictureResize.filter(function (item) { return item.post_id == data.post_id; })];
                    case 3:
                        picResize = _a.sent();
                        newList = {
                            TypeLocation_id: tmp.TypeLocation_id,
                            TypeLocation_name: tmp.TypeLocation_name,
                            capEdit: tmp.capEdit,
                            checkCard: tmp.checkCard,
                            checkshow: tmp.checkshow,
                            comment: tmp.comment,
                            comment_key: tmp.comment_key,
                            comment_user_img: tmp.comment_user_img,
                            countComment: tmp.countComment,
                            country_img: tmp.country_img,
                            country_name_en: tmp.country_name_en,
                            country_name_th: tmp.country_name_th,
                            distant: tmp.distant,
                            feeling_id: tmp.feeling_id,
                            feeling_name: tmp.feeling_name,
                            followST: tmp.followST,
                            followers: tmp.followers,
                            following: tmp.following,
                            fulnameComment: tmp.fulnameComment,
                            hashtag: tmp.hashtag,
                            imageLike: tmp.imageLike,
                            linkshared: tmp.linkshared,
                            photo_caption: tmp.photo_caption,
                            photo_id: tmp.photo_id,
                            photo_la: tmp.photo_la,
                            photo_location: tmp.photo_location,
                            photo_locationText: tmp.photo_locationText,
                            photo_long: tmp.photo_long,
                            photo_province: tmp.photo_province,
                            photo_share: tmp.photo_share,
                            pictureFull: tmp.pictureFull,
                            pictureResize: picResize,
                            sizeFullheight: tmp.sizeFullheight,
                            sizeheight: tmp.sizeheight,
                            status_bookmark: tmp.status_bookmark,
                            status_comment: tmp.status_comment,
                            status_like: tmp.status_like,
                            status_show: tmp.status_show,
                            sum_like: tmp.sum_like,
                            textComment: tmp.textComment,
                            time: tmp.time,
                            timeComment: tmp.timeComment,
                            userIdComment: tmp.userIdComment,
                            user_firstname: tmp.user_firstname,
                            user_id: tmp.user_id,
                            user_img: tmp.user_img,
                            user_lastname: tmp.user_lastname,
                            user_path_img: tmp.user_path_img,
                            user_type: tmp.user_type,
                        };
                        resolve(newList);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    ProfilePage.prototype.goDetail = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("click photoList", this.photoList);
                console.log("goDetail data", data);
                // this.filters("post", data, {}).then((dataFilter) => {
                //   this.filters("photo_id", data, dataFilter).then((result) => {
                this.NextPage("DetailfeedPage", this.photoList[data.index]);
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            var senddata, datasend, datasend;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        senddata = {
                            follow_user: this.Profile["user_id"],
                        };
                        if (this.navParams.get("data")) {
                            this.Profile = JSON.parse(JSON.stringify(this.navParams.get("data")));
                        }
                        else {
                            this.Profile = this.gd.userProfile;
                        }
                        this.SFT.ServiceThread("getCoverImage", { user_id: this.Profile["user_id"] }, "POST").then(function (data) {
                            console.log(data);
                            if (data["res_code"] == "00") {
                                _this.coverImage = data["res_result"]["coverPath"];
                                _this.totalPost = data["res_result"]["totalPost"];
                            }
                        });
                        this.SFT.ServiceThread("Chack_following", senddata, "POST").then(function (data) {
                            if (data["res_code"] == "00") {
                                console.log(data);
                                _this.status_Follow = false;
                            }
                            else {
                                console.log(data["res_text"]);
                                _this.status_Follow = true;
                            }
                            _this.Profile.followers = data["res_result"]["followers"];
                            _this.Profile.following = data["res_result"]["following"];
                        });
                        this.numLoad = 0;
                        console.log(refresher);
                        if (!(this.tabs == 1)) return [3 /*break*/, 1];
                        datasend = {
                            type: this.tabs,
                            user_id: this.Profile["user_id"],
                            width: __WEBPACK_IMPORTED_MODULE_6_jquery__("ng-component").width(),
                            lat: this.SFT.userlocation["lat"],
                            long: this.SFT.userlocation["long"],
                            LoadMoreLimit: this.SFT.LoadMoreLimit,
                            numLoad: this.numLoad,
                            province: this.provinceSelected,
                        };
                        this.datasendObject = datasend;
                        this.SFT.ServiceThread("photo_me", datasend, "POST").then(function (data) {
                            if (data["res_code"] == "00") {
                                _this.postList = data["res_result"];
                                _this.tmpPostList = data["res_result"];
                                console.log("========================================================================");
                                if (_this.tabs == 1) {
                                    _this.changeAlbum(_this.feedType);
                                }
                                console.log("========================================================================");
                                setTimeout(function () {
                                    __WEBPACK_IMPORTED_MODULE_6_jquery__(".app").addClass("active");
                                    _this.hashtag();
                                }, 500);
                                setTimeout(function () {
                                    try {
                                        refresher.complete();
                                    }
                                    catch (error) { }
                                }, 500);
                            }
                            else {
                                setTimeout(function () {
                                    try {
                                        refresher.complete();
                                    }
                                    catch (error) { }
                                }, 500);
                            }
                            _this.loading = false;
                        });
                        return [3 /*break*/, 7];
                    case 1:
                        if (!(this.tabs == 2)) return [3 /*break*/, 6];
                        if (!(this.mode == 1)) return [3 /*break*/, 3];
                        this.numLoadAlbum = 0;
                        return [4 /*yield*/, this.getAlbum()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        this.numLoadPhoto = 0;
                        return [4 /*yield*/, this.getAllPhoto(this.provinceSelected)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        setTimeout(function () {
                            try {
                                refresher.complete();
                            }
                            catch (error) { }
                        }, 1000);
                        return [3 /*break*/, 7];
                    case 6:
                        if (this.tabs == 3) {
                            this.showfeedthree = true;
                            datasend = {
                                type: 3,
                                user_id: this.Profile["user_id"],
                                width: __WEBPACK_IMPORTED_MODULE_6_jquery__("ng-component").width(),
                                lat: this.SFT.userlocation["lat"],
                                long: this.SFT.userlocation["long"],
                                LoadMoreLimit: this.SFT.LoadMoreLimit,
                                numLoad: this.numLoad,
                            };
                            this.datasendObject = datasend;
                            this.SFT.ServiceThread("photo_me", datasend, "POST").then(function (data) {
                                _this.feedthree2.length = 0;
                                _this.feedthree.length = 0;
                                console.log(data);
                                if (data["res_code"] == "00") {
                                    console.log(data["res_text"]);
                                    _this.footprintList = data["res_result"];
                                    setTimeout(function () {
                                        __WEBPACK_IMPORTED_MODULE_6_jquery__(".app").addClass("active");
                                        _this.hashtag();
                                    }, 500);
                                    setTimeout(function () {
                                        try {
                                            refresher.complete();
                                        }
                                        catch (error) { }
                                    }, 500);
                                }
                                else {
                                    setTimeout(function () {
                                        try {
                                            refresher.complete();
                                        }
                                        catch (error) { }
                                    }, 500);
                                    _this.feedthree2.length = 0;
                                    _this.feedthree.length = 0;
                                    // this.gd.feedthree.length = 0;
                                }
                            });
                        }
                        _a.label = 7;
                    case 7:
                        setTimeout(function () {
                            console.log("Async operation has ended");
                        }, 2000);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.parseData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _loop_1, this_1, index;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.tabs == 2) {
                    this.albumList = [];
                    _loop_1 = function (index) {
                        // for (let index2 in this.postList[index].pictureResize) {
                        this_1.photoList[index].pictureResize.forEach(function (element) {
                            var strProvince;
                            if (_this.photoList[index].photo_province != '') {
                                strProvince = _this.photoList[index].photo_province + ',';
                            }
                            else {
                                strProvince = '';
                            }
                            var dataPush = {
                                index: index,
                                province: _this.photoList[index].photo_province,
                                album_name: strProvince + _this.photoList[index].photo_location.split(',').reverse()[0],
                                photo_id: _this.photoList[index].photo_id,
                                path_full: element.path_full,
                                path_resize: element.path_resize,
                                path_height: element.path_height,
                                number: element.number,
                                type: element.type,
                            };
                            _this.albumList.push(dataPush);
                        });
                    };
                    this_1 = this;
                    for (index in this.photoList) {
                        _loop_1(index);
                    }
                    this.allPhoto = this.albumList;
                    console.log("parseData into albumList", this.albumList);
                    console.log("parseData into album", this.album);
                }
                console.log("----------- parseData ------------");
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.prototype.changeAlbum = function (id) {
        if (this.tabs == 1) {
            this.feedType = id;
        }
        else if (this.tabs == 2 && this.mode == 1) {
            this.albumType = id;
        }
        else if (this.tabs == 2 && this.mode == 2) {
            this.viewType = id;
        }
        else if (this.tabs == 3) {
            this.favType = id;
        }
        console.log(id);
    };
    ProfilePage.prototype.changeTabs = function (id) {
        var _this = this;
        this.tabs = id;
        __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"] page-profile:last .tabsAction').removeClass("tabsAction");
        if (id == 1) {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"] page-profile:last #postTabs').addClass("tabsAction");
            this.doRefresh(__WEBPACK_IMPORTED_MODULE_6_jquery__("#refresher"));
        }
        else if (id == 2) {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"] page-profile:last #albumTabs').addClass("tabsAction");
            this.provinceSelected = undefined;
            // if (this.tabs == 2 && this.mode == 1 && this.postList.length > 1) {
            //   this.albumType = 0;
            // } else {
            //   this.albumType = 1;
            // }
            // if (this.tabs == 2 && this.mode == 2 && this.allPhoto.length > 1) {
            //   this.viewType = 0;
            // } else {
            //   this.viewType = 1;
            // }
            this.numLoadPhoto = 0; //reset numload of photo
            this.mode = 1; //reset mode if mode 2
            this.getAlbum().then(function () {
                if (_this.album.length > 1) {
                    _this.albumType = 0;
                }
                else {
                    _this.albumType = 1;
                }
            }); //มีการเรียกดู doRefresh() ซึ่งใน function doRefresh() มีการเรียก getAlbum() แล้ว
        }
        else if (id == 3) {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"] page-profile:last #footprintTabs').addClass("tabsAction");
            this.showfeedthree = true;
            var datasend = {
                type: 3,
                user_id: this.Profile["user_id"],
                width: __WEBPACK_IMPORTED_MODULE_6_jquery__("ng-component").width(),
                lat: this.SFT.userlocation["lat"],
                long: this.SFT.userlocation["long"],
                LoadMoreLimit: this.SFT.LoadMoreLimit,
                numLoad: this.numLoad,
            };
            this.datasendObject = datasend;
            this.SFT.ServiceThread("photo_me", datasend, "POST").then(function (data) {
                _this.feedthree2.length = 0;
                _this.feedthree.length = 0;
                console.log(data);
                if (data["res_code"] == "00") {
                    console.log(data["res_text"]);
                    _this.footprintList = data["res_result"];
                    if (_this.footprintList.length > 1) {
                        _this.favType = 0; //multi post
                    }
                    else {
                        _this.favType = 1; //single post
                    }
                }
                else {
                    _this.feedthree2.length = 0;
                    _this.feedthree.length = 0;
                    // this.gd.feedthree.length = 0;
                }
            });
        }
        else {
            this.doRefresh(__WEBPACK_IMPORTED_MODULE_6_jquery__("#refresher"));
        }
        // this.doRefresh($("#refresher"));    
    };
    ProfilePage.prototype.doRefreshshop = function (refresher) {
        var _this = this;
        console.log(refresher);
        if (this.section == "one") {
            this.SFT.ServiceThread("photo_me", {
                type: 1,
                user_id: this.Profile["user_id"],
                width: __WEBPACK_IMPORTED_MODULE_6_jquery__("ng-component").width(),
                lat: this.SFT.userlocation["lat"],
                long: this.SFT.userlocation["long"],
            }, "POST").then(function (data) {
                _this.feedone2.length = 0;
                _this.feedone.length = 0;
                if (data["res_code"] == "00") {
                    var virtualScroll1 = 0;
                    var virtualScroll2 = 0;
                    for (var index = 0; index < data["res_result"].length; index++) {
                        if (virtualScroll1 <= virtualScroll2) {
                            _this.feedone.push(data["res_result"][index]);
                            virtualScroll1 += data["res_result"][index]["sizeheight"] + 114;
                        }
                        else {
                            _this.feedone2.push(data["res_result"][index]);
                            virtualScroll2 += data["res_result"][index]["sizeheight"] + 114;
                        }
                    }
                    setTimeout(function () {
                        __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"] page-profile:last .app').addClass("active");
                        _this.hashtag();
                    }, 500);
                    setTimeout(function () {
                        try {
                            refresher.complete();
                        }
                        catch (error) { }
                    }, 500);
                }
                else {
                    setTimeout(function () {
                        try {
                            refresher.complete();
                        }
                        catch (error) {
                            _this.ngZoneService.run(function () {
                                console.log("Reenetering angular context....");
                            });
                        }
                    }, 500);
                    _this.feedone2.length = 0;
                    _this.feedone.length = 0;
                    // this.gd.feedone.length = 0;
                }
                _this.loading = false;
            });
        }
        else if (this.section == "two") {
            this.showfeedtwo2 = true;
            // this.serviceFactoryThread.ServiceThread('get_infomation', { 'user_id': this.gd.userProfile.user_id}, 'POST')
            //   .then(data => {
            //     this.tag_shop = data[""]
            //   });
        }
        else if (this.section == "three") {
            this.showfeedthree = true;
            this.SFT.ServiceThread("photo_me", {
                type: 3,
                user_id: this.Profile["user_id"],
                width: __WEBPACK_IMPORTED_MODULE_6_jquery__("ng-component").width(),
                lat: this.SFT.userlocation["lat"],
                long: this.SFT.userlocation["long"],
            }, "POST").then(function (data) {
                _this.feedthree2.length = 0;
                _this.feedthree.length = 0;
                console.log(data);
                if (data["res_code"] == "00") {
                    console.log(data["res_text"]);
                    if (_this.typeprofile) {
                        // this.gd.feedthree = data['res_result'];
                    }
                    var virtualScroll1 = 0;
                    var virtualScroll2 = 0;
                    for (var index = 0; index < data["res_result"].length; index++) {
                        if (virtualScroll1 <= virtualScroll2) {
                            _this.feedthree.push(data["res_result"][index]);
                            virtualScroll1 += data["res_result"][index]["sizeheight"] + 114;
                        }
                        else {
                            _this.feedthree2.push(data["res_result"][index]);
                            virtualScroll2 += data["res_result"][index]["sizeheight"] + 114;
                        }
                    }
                    setTimeout(function () {
                        __WEBPACK_IMPORTED_MODULE_6_jquery__(".app").addClass("active");
                        _this.hashtag();
                    }, 500);
                    setTimeout(function () {
                        try {
                            refresher.complete();
                        }
                        catch (error) {
                            _this.ngZoneService.run(function () {
                                console.log("Reenetering angular context....");
                            });
                        }
                    }, 500);
                }
                else {
                    setTimeout(function () {
                        try {
                            refresher.complete();
                        }
                        catch (error) {
                            _this.ngZoneService.run(function () {
                                console.log("Reenetering angular context....");
                            });
                        }
                    }, 500);
                    _this.feedthree2.length = 0;
                    _this.feedthree.length = 0;
                    // this.gd.feedthree.length = 0;
                }
                _this.loading = false;
            });
        }
        else if (this.section == "four") {
            console.log("four 123");
            this.loading = false;
        }
        setTimeout(function () {
            console.log("Async operation has ended");
        }, 2000);
    };
    // changepage() {
    //   $('ion-tab[aria-hidden="false"] page-profile:last .app').removeClass(
    //     "active"
    //   );
    //   this.loading = true;
    //   if (this.section == "one") {
    //     this.doRefresh($("#refresher"));
    //   } else if (this.section == "two") {
    //     this.showfeedtwo2 = true;
    //     this.doRefresh($("#refresher"));
    //   } else if (this.section == "three") {
    //     this.showfeedthree = true;
    //     this.doRefresh($("#refresher"));
    //   } else if (this.section == "four") {
    //     console.log("four");
    //     this.doRefresh($("#refresher"));
    //   } else if (this.section == "five") {
    //     console.log("five");
    //     this.doRefresh($("#refresher"));
    //   }
    // }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("ionViewDidLoad ProfilePage");
        console.log("gd Profile", this.gd.userProfile);
        this.Profile = this.gd.userProfile;
        var user = this.Profile["user_id"];
        if (this.navParams.get("data")) {
            this.Profile = JSON.parse(JSON.stringify(this.navParams.get("data")));
            console.log("data Profile", this.navParams.get("data"));
            console.log("if have navparams Profile", this.Profile);
            if (this.Profile["user_id"] == user) {
                this.typeprofile = true;
            }
            else {
                this.typeprofile = false;
            }
            this.back = true;
        }
        this.SFT.ServiceThread("getCoverImage", { user_id: this.Profile["user_id"] }, "POST").then(function (data) {
            console.log(data);
            if (data["res_code"] == "00") {
                _this.coverImage = data["res_result"]["coverPath"];
                _this.totalPost = data["res_result"]["totalPost"];
            }
        });
        console.log(this.navParams.get("data"));
        this.events.subscribe("refollowProfile", function (user, type) {
            console.log("refollowProfile ----*****----");
            if (_this.Profile.user_id == user) {
                if (type == 1) {
                    console.log("เพิ่ม");
                    _this.Profile.followers += 1;
                    _this.status_Follow = false;
                }
                else {
                    console.log("ลบ");
                    _this.Profile.followers -= 1;
                    _this.status_Follow = true;
                }
            }
        });
        if (this.typeprofile) {
            var datasend = {
                type: 1,
                user_id: this.Profile["user_id"],
                width: __WEBPACK_IMPORTED_MODULE_6_jquery__("ng-component").width(),
                lat: this.SFT.userlocation["lat"],
                long: this.SFT.userlocation["long"],
                LoadMoreLimit: this.SFT.LoadMoreLimit,
                numLoad: this.numLoad,
            };
            this.datasendObject = datasend;
            this.SFT.ServiceThread("photo_me", datasend, "POST").then(function (data) {
                if (data["res_code"] == "00") {
                    // this.feedone = data['res_result'];
                    // gd.feedone = data['res_result'];
                    _this.postList = data["res_result"];
                    _this.tmpPostList = data["res_result"];
                    console.error(_this.postList);
                    console.log("***********************************************************************************");
                    if (_this.postList.length > 1) {
                        _this.feedType = 0; //show 2 feed per row
                    }
                    else {
                        _this.feedType = 1; //show 1 feed per rows
                    }
                    // if (this.tabs == 2 && this.mode == 1 && this.postList.length > 1) {
                    //   this.albumType = 0;
                    // } else {
                    //   this.albumType = 1;
                    // }
                    // if (this.tabs == 2 && this.mode == 2 && this.allPhoto.length > 1) {
                    //   this.viewType = 0;
                    // } else {
                    //   this.viewType = 1;
                    // }         
                    console.log("***********************************************************************************");
                    setTimeout(function () {
                        _this.hashtag();
                        __WEBPACK_IMPORTED_MODULE_6_jquery__(".app").addClass("active");
                    }, 500);
                }
                else {
                    // gd.feedone.length = 0;
                }
                _this.loading = false;
            });
        }
        else {
            var senddata = {
                follow_user: this.Profile["user_id"],
            };
            this.SFT.ServiceThread("Chack_following", senddata, "POST").then(function (data) {
                if (data["res_code"] == "00") {
                    console.log(data);
                    _this.status_Follow = false;
                }
                else {
                    console.log(data["res_text"]);
                    _this.status_Follow = true;
                }
                _this.Profile.followers = data["res_result"]["followers"];
                _this.Profile.following = data["res_result"]["following"];
            });
            var datasend = {
                type: 1,
                user_id: this.Profile["user_id"],
                width: __WEBPACK_IMPORTED_MODULE_6_jquery__("ng-component").width(),
                lat: this.SFT.userlocation["lat"],
                long: this.SFT.userlocation["long"],
                LoadMoreLimit: this.SFT.LoadMoreLimit,
                numLoad: this.numLoad,
            };
            this.datasendObject = datasend;
            this.SFT.ServiceThread("photo_me", datasend, "POST").then(function (data) {
                if (data["res_code"] == "00") {
                    _this.postList = data["res_result"];
                    _this.tmpPostList = data["res_result"];
                    console.warn(_this.postList);
                    if (_this.postList.length > 1) {
                        _this.feedType = 0; //show 2 feed per row
                        console.log(">1");
                    }
                    else {
                        _this.feedType = 1; //show 1 feed per rows
                        console.log("<1");
                    }
                    console.warn(_this.postList.length);
                    console.log("------------------------------------------------------------------------------------");
                    console.log("------------------------------------------------------------------------------------");
                    setTimeout(function () {
                        __WEBPACK_IMPORTED_MODULE_6_jquery__(".app").addClass("active");
                        _this.hashtag();
                    }, 500);
                }
                else {
                    // gd.feedone.length = 0;
                }
                _this.loading = false;
            });
        }
    };
    ProfilePage.prototype.navPop = function () {
        if (this.mode == 2 && this.tabs == 2) {
            this.mode = 1;
            this.provinceSelected = undefined;
        }
        else {
            this.navCtrl.pop();
        }
    };
    ProfilePage.prototype.setting = function () {
        // this.navCtrl.setRoot("login", {});
        // this.events.publish('logout');
        this.gd.nextpage(this.navCtrl, "SettingPage", {});
    };
    ProfilePage.prototype.follow = function (type) {
        console.log(this.gd.userProfile);
        var datanew = JSON.parse(JSON.stringify(this.gd.userProfile));
        delete datanew.same;
        delete datanew.follow;
        delete datanew.ic;
        delete datanew.samelength;
        delete datanew.status_Follow;
        delete datanew.message;
        delete datanew.data_message;
        var senddata = {
            follow_user: this.Profile["user_id"],
            type: type,
            data: JSON.stringify(datanew),
        };
        this.SFT.ServiceThread("indefollowing", senddata, "POST").then(function (data) {
            console.log(data);
        });
        if (type == 1) {
            console.log("เพิ่ม");
            // this.Profile.followers += 1;
            // this.status_Follow = false;
            // this.Profile['following'] =  this.Profile['following']+1;
            this.gd.userProfile.following += 1;
            this.events.publish("refollowlocation", this.Profile["user_id"], 1);
            this.events.publish("refollowDetail", this.Profile["user_id"], 1);
            this.events.publish("refollowProfile", this.Profile["user_id"], 1);
        }
        else {
            console.log("ลบ");
            // this.Profile.followers -= 1;
            // this.status_Follow = true;
            // this.Profile['following'] =  this.Profile['following']-1;
            this.gd.userProfile.following -= 1;
            this.events.publish("refollowlocation", this.Profile["user_id"], 2);
            this.events.publish("refollowDetail", this.Profile["user_id"], 2);
            this.events.publish("refollowProfile", this.Profile["user_id"], 2);
        }
    };
    ProfilePage.prototype.NextPage = function (page, image) {
        var _this = this;
        console.log(image, page);
        console.log(this.gd.goDetail);
        console.log("image", image);
        console.log("page", page);
        __WEBPACK_IMPORTED_MODULE_6_jquery__('[id="video"]').map(function (index, video) { return __awaiter(_this, void 0, void 0, function () {
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
        if (page == "viewComment" && this.gd.goDetail) {
            console.log("if--*");
            var dataSend = JSON.parse(JSON.stringify(image));
            dataSend["openmodel"] = true;
            this.gd.nextpage(this.navCtrl, "DetailfeedPage", { data: dataSend });
        }
        else if (page == "TouristPage") {
            image.latitude = image.photo_la;
            image.longitude = image.photo_long;
            this.gd.startExternalMap(image);
        }
        else {
            if (page == "ProfilePage" &&
                this.gd.userProfile["user_id"] == image["user_id"]) {
                this.navCtrl.parent.select(4);
            }
            else {
                if (this.Profile["user_id"] != image["user_id"] ||
                    page != "ProfilePage") {
                    if (page == "DetailfeedPage") {
                        // this.gd.pageDetail = 'sameType';
                    }
                    this.gd.nextpage(this.navCtrl, page, { data: image });
                    this.gd.saveLog("Go", image);
                }
            }
        }
    };
    ProfilePage.prototype.like = function (data, type, index, row) {
        console.log(type + "," + index + "," + row);
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
            console.log("ลบ");
            if (this.tabs == 1) {
                this.postList[index]["status_like"] = false;
                this.postList[index]["sum_like"] = this.postList[index]["sum_like"] - 1;
            }
            else if (this.tabs == 3) {
                this.footprintList[index]["status_like"] = false;
                this.footprintList[index]["sum_like"] =
                    this.postList[index]["sum_like"] - 1;
            }
        }
        else {
            console.log("บวก");
            if (this.tabs == 1) {
                this.postList[index]["status_like"] = true;
                this.postList[index]["sum_like"] = this.postList[index]["sum_like"] + 1;
            }
            else if (this.tabs == 3) {
                this.footprintList[index]["status_like"] = false;
                this.footprintList[index]["sum_like"] =
                    this.postList[index]["sum_like"] - 1;
            }
        }
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"] #like' + data.photo_id).addClass("liked");
            __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"] #like' + data.photo_id).css("pointer-events", "none");
            clearTimeout(tmq);
            var tmq = setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"] #like' + data.photo_id).removeClass("liked");
                __WEBPACK_IMPORTED_MODULE_6_jquery__('ion-tab[aria-hidden="false"] #like' + data.photo_id).css("pointer-events", "unset");
            }, 1100);
        }, 10);
        this.SFT.ServiceThread("like", senddata, "POST").then(function (data) {
            console.log(data);
        });
    };
    ProfilePage.prototype.bookmark = function (data, type, index, row) {
        var _this = this;
        var senddata = {
            photo_id: data.photo_id,
            type: type,
        };
        this.SFT.ServiceThread("bookmark", senddata, "POST").then(function (data) {
            console.log(data);
            if (data["res_code"] == "00") {
                if (type == 1) {
                    console.log("ลบ");
                    if (_this.tabs == 1) {
                        _this.postList[index]["status_bookmark"] = false;
                    }
                    else if (_this.tabs == 3) {
                        _this.footprintList[index]["status_bookmark"] = false;
                    }
                }
                else {
                    console.log("บวก");
                    if (_this.tabs == 1) {
                        _this.postList[index]["status_bookmark"] = true;
                    }
                    else if (_this.tabs == 3) {
                        _this.footprintList[index]["status_bookmark"] = true;
                    }
                }
            }
        });
    };
    ProfilePage.prototype.userfollows = function (type, text, num) {
        this.gd.nextpage(this.navCtrl, "CoconutPage", {
            type: type,
            title: text,
            Profile: this.Profile,
            num: this.Profile.following,
        });
    };
    ProfilePage.prototype.chat = function (data, item) {
        console.log();
        // this.gd.room = data;
        console.log(item);
        console.log(data);
        this.gd.nextpage(this.navCtrl, "ChatPage", {
            key: item["room_name"],
            imguser: item["user_path_img"],
            data: item,
        });
        // this.gd.nextpage(this.navCtrl, "ChatPage", { 'data': data, 'room': item['room_id'] })
    };
    ProfilePage.prototype.chat2 = function (datas) {
        var _this = this;
        if (this.gd.clickGo && this.goChat2) {
            this.gd.clickGo = false;
            this.SFT.ServiceThread("check_room", { user_id: this.gd.userProfile["user_id"], user_to: datas["user_id"] }, "POST").then(function (data) {
                if (data["res_code"] == "00") {
                    var dataroom = _this.gd.roomchat.filter(function (message) { return message.room_name === data["res_result"]; });
                    console.log(dataroom);
                    _this.gd.nextpage(_this.navCtrl, "ChatPage", {
                        key: data["res_result"],
                        imguser: datas["user_path_img"],
                        data: dataroom[0],
                    });
                }
                else {
                    var newData_1 = _this.ref.push();
                    newData_1.set({
                        roomname: _this.gd.userProfile["user_id"] + "/" + datas["user_id"],
                    });
                    var senddata = {
                        key: newData_1.key,
                        to_user: datas["user_id"],
                    };
                    _this.SFT.ServiceThread("addroom", senddata, "POST").then(function (data) {
                        _this.gd.chat();
                        datas["room_name"] = newData_1.key;
                        _this.gd.nextpage(_this.navCtrl, "ChatPage", {
                            key: newData_1.key,
                            imguser: datas["user_path_img"],
                            data: datas,
                        });
                    });
                }
            });
        }
    };
    ProfilePage.prototype.followFC = function (st, id) {
        var _this = this;
        var datanew = JSON.parse(JSON.stringify(this.gd.userProfile));
        delete datanew.same;
        delete datanew.follow;
        delete datanew.ic;
        delete datanew.samelength;
        delete datanew.status_Follow;
        delete datanew.message;
        delete datanew.data_message;
        var senddata = {
            follow_user: id,
            type: st,
            data: JSON.stringify(datanew),
        };
        this.SFT.ServiceThread("indefollowing", senddata, "POST").then(function (data) { });
        if (st == 1) {
            if (this.tabs == 3) {
                this.footprintList.forEach(function (element, index) {
                    if (element.user_id == id) {
                        _this.footprintList[index]["followST"] = true;
                    }
                });
            }
            else {
                this.postList.forEach(function (element, index) {
                    if (element.user_id == id) {
                        _this.postList[index]["followST"] = true;
                    }
                });
            }
            if (this.gd.userProfile.user_id == this.Profile.user_id) {
                this.Profile.following++;
            }
            else {
                this.Profile.followers++;
            }
        }
        else {
            if (this.tabs == 3) {
                this.footprintList.forEach(function (element, index) {
                    if (element.user_id == id) {
                        _this.footprintList[index]["followST"] = false;
                    }
                });
            }
            else {
                this.postList.forEach(function (element, index) {
                    if (element.user_id == id) {
                        _this.postList[index]["followST"] = false;
                    }
                });
            }
            if (this.gd.userProfile.user_id == this.Profile.user_id) {
                this.Profile.following--;
            }
            else {
                this.Profile.followers--;
            }
        }
    };
    ProfilePage.prototype.deleteMsg = function (data, i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Confirm Delete Messager",
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancel clicked");
                    },
                },
                {
                    text: "Delete",
                    handler: function () {
                        var senddata = {
                            room_id: data["room_id"],
                        };
                        _this.SFT.ServiceThread("Delectmessageroom", senddata, "POST").then(function (data) {
                            _this.gd.sumNoti -= data["noread"];
                            _this.gd.chat();
                            if (data["res_code"] != "00") {
                                // this.gd.datamessage.splice(i, 1);
                            }
                            else {
                                // this.gd.datamessage.splice(i, 1);
                            }
                        });
                        console.log(data["room_id"]);
                    },
                },
            ],
        });
        alert.present();
    };
    ProfilePage.prototype.presentActionSheet = function (type) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: "Option",
            buttons: [
                {
                    text: "Choose Form Library",
                    cssClass: "",
                    handler: function () {
                        if (type == 1) {
                            _this.takePicture(2, _this.navCtrl);
                        }
                        else {
                            _this.coverImageChange(2, _this.navCtrl);
                        }
                        console.log("Destructive clicked");
                    },
                },
                {
                    text: "Take Photo",
                    cssClass: "",
                    handler: function () {
                        if (type == 1) {
                            _this.takePicture(1, _this.navCtrl);
                        }
                        else {
                            _this.coverImageChange(1, _this.navCtrl);
                        }
                        console.log("Archive clicked");
                    },
                },
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancel clicked");
                    },
                },
            ],
        });
        actionSheet.present();
    };
    ProfilePage.prototype.takePicture = function (check, navCtrl) {
        var _this = this;
        var type;
        if (check == 1) {
            type = this.camera.PictureSourceType.CAMERA;
        }
        else {
            type = this.camera.PictureSourceType.PHOTOLIBRARY;
        }
        this.camera
            .getPicture({
            sourceType: type,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            allowEdit: true,
            mediaType: this.camera.MediaType.PICTURE,
        })
            .then(function (imageData) {
            // imageData is a base64 encoded string
            // this.data['imageData'] = "data:image/jpeg;base64," + imageData;
            // console.log(this.data['imageData']);
            // // console.log("data:image/jpeg;base64," + imageData);
            // document.getElementById('profile').setAttribute('src', this.data['imageData']);
            var alert = _this.alertCtrl.create({
                title: "Confirm Edit Profile",
                // message: 'Do you want to buy this book?',
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: function () {
                            console.log("Cancel clicked");
                        },
                    },
                    {
                        text: "Confirm",
                        handler: function () {
                            console.log("Confirm");
                            _this.SFT.ServiceThread("UpdateProfile", { imageData: "data:image/jpeg;base64," + imageData }, "POST").then(function (data) {
                                if (data["res_code"] != "00") {
                                }
                                else {
                                    console.log(data["res_result"]);
                                    _this.gd.userProfile["user_path_img"] =
                                        data["res_result"]["user_path_img"];
                                }
                            });
                        },
                    },
                ],
            });
            alert.present();
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.seeMore = function (data) {
        if (data == 1) {
            this.linit_last = 50;
        }
        else if (data == 2) {
            this.limit_incoming = 50;
        }
        else if (data == 3) {
            this.limit_post = 50;
        }
    };
    ProfilePage.prototype.seeless = function (data) {
        if (data == 1) {
            this.linit_last = 1;
        }
        else if (data == 2) {
            this.limit_incoming = 1;
        }
        else if (data == 3) {
            this.limit_post = 1;
        }
    };
    ProfilePage.prototype.nextPaged = function (dataget) {
        var _this = this;
        var datasend = {
            booking_code: dataget.booking_code_order,
            lat: this.SFT.userlocation.lat,
            lng: this.SFT.userlocation.long,
            widthPhone: __WEBPACK_IMPORTED_MODULE_6_jquery__("ng-component").width(),
        };
        this.SFT.ServiceThread("get_booking_detail", datasend, "POST").then(function (data) {
            _this.gd.nextpage(_this.navCtrl, "PaymentStatusPage", {
                data: data["res_result"],
            });
        });
    };
    ProfilePage.prototype.doInfinite = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(">>>>>>>>>>>>>>>>>>>> loadmore >>>>>>>>>>>>>>>>>>>");
                        if (!(this.section != "five" && this.section != "four")) return [3 /*break*/, 6];
                        if (!(this.tabs != 2)) return [3 /*break*/, 1];
                        this.numLoad++;
                        this.datasendObject.numLoad = this.numLoad;
                        this.SFT.ServiceThread("photo_me", this.datasendObject, "POST").then(function (data) {
                            if (data["res_code"] == "00") {
                                if (_this.tabs == 1) {
                                    console.log("data for push postList", data["res_result"]);
                                    var _loop_2 = function (index) {
                                        _this.postList.push(data["res_result"][index]);
                                        if (_this.tabs == 2) {
                                            // for (let index2 in data["res_result"][index]) {
                                            data["res_result"][index].data[0].pictureResize.forEach(function (element) {
                                                var dataPush = {
                                                    id: data["res_result"][index].data[0].photo_id,
                                                    path: element.path_resize,
                                                };
                                                _this.albumList.push(dataPush);
                                            });
                                            // }
                                        }
                                    };
                                    for (var index = 0; index < data["res_result"].length; index++) {
                                        _loop_2(index);
                                    }
                                    setTimeout(function () {
                                        __WEBPACK_IMPORTED_MODULE_6_jquery__(".app").addClass("active");
                                        _this.hashtag();
                                        try {
                                            event.complete();
                                        }
                                        catch (error) { }
                                    }, 500);
                                }
                                else if (_this.tabs == 3) {
                                    for (var index = 0; index < data["res_result"].length; index++) {
                                        _this.footprintList.push(data["res_result"][index]);
                                    }
                                    setTimeout(function () {
                                        __WEBPACK_IMPORTED_MODULE_6_jquery__(".app").addClass("active");
                                        _this.hashtag();
                                        try {
                                            event.complete();
                                        }
                                        catch (error) { }
                                    }, 500);
                                }
                                else {
                                    setTimeout(function () {
                                        try {
                                            event.complete();
                                        }
                                        catch (error) { }
                                    }, 500);
                                }
                            }
                            else {
                                setTimeout(function () {
                                    try {
                                        event.complete();
                                    }
                                    catch (error) { }
                                }, 500);
                            }
                        });
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(this.mode == 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getAlbum().then(function () {
                                setTimeout(function () {
                                    try {
                                        console.log('close infinite load album');
                                        event.complete();
                                    }
                                    catch (error) { }
                                }, 1000);
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.getAllPhoto(this.provinceSelected).then(function () {
                            setTimeout(function () {
                                try {
                                    console.log('close infinite load photo');
                                    event.complete();
                                }
                                catch (error) { }
                            }, 1000);
                        })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        try {
                            event.complete();
                        }
                        catch (error) { }
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.coverImageChange = function (check, navCtrl) {
        var _this = this;
        var type;
        if (check == 1) {
            type = this.camera.PictureSourceType.CAMERA;
        }
        else {
            type = this.camera.PictureSourceType.PHOTOLIBRARY;
        }
        this.camera
            .getPicture({
            sourceType: type,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            allowEdit: true,
            mediaType: this.camera.MediaType.PICTURE,
        })
            .then(function (imageData) {
            var alert = _this.alertCtrl.create({
                title: "Confirm Edit Profile",
                // message: 'Do you want to buy this book?',
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: function () {
                            console.log("Cancel clicked");
                        },
                    },
                    {
                        text: "Confirm",
                        handler: function () {
                            console.log("Confirm");
                            _this.SFT.ServiceThread("saveCoverImage", { image: "data:image/jpeg;base64," + imageData }, "POST").then(function (data) {
                                if (data["res_code"] != "00") {
                                }
                                else {
                                    console.log(data["res_result"]);
                                    // this.coverImage = "data:image/jpeg;base64," + imageData;
                                    _this.SFT.ServiceThread("getCoverImage", { user_id: _this.Profile["user_id"] }, "POST").then(function (data) {
                                        console.log(data);
                                        if (data["res_code"] == "00") {
                                            _this.coverImage = data["res_result"]["coverPath"];
                                            _this.totalPost = data["res_result"]["totalPost"];
                                        }
                                    });
                                }
                            });
                        },
                    },
                ],
            });
            alert.present();
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.pressEvent = function (event) {
        var myVar = setInterval(function () {
            console.log(event);
        }, 200);
        //
        setTimeout(function () {
            clearInterval(myVar);
        }, 5000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], ProfilePage.prototype, "myContent", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-profile",template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/profile/profile.html"*/'<ion-header style="box-shadow: none;">\n    <div id="toolbarProfile" class="toolbar-background" *ngIf=\'gd.platformtype=="ios"\' style="height: 30px; width: 100%; z-index: 999999; position: relative;"></div>\n</ion-header>\n<ion-content #myContent padding>\n    <div style="background: #fff;">\n        <div style="position: relative; min-height: 150px;">\n            <button ion-button icon-only class="icon_back" (click)="navPop()">\n        <!-- <ion-icon  class="ios-arrow-back icon20 icon-arrow-back "></ion-icon> -->\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </button>\n            <div style="background: url(\'./assets/imgs/header-profile.jpg\');background-size: cover;background-position: center;padding-top: 40%; " *ngIf="coverImage == \'\'"></div>\n            <div [ngStyle]="{\'background\': \'url(\'+coverImage+\')\',\'background-size\': \'cover\',\'background-position\': \'center\',\'padding-top\': \'50%\'}" class="coverBackground" *ngIf="coverImage != \'\'"></div>\n            <div style="fill: #585858; width: 20px;position: absolute;bottom: 30px; right: 20px; z-index: 1; " (click)="presentActionSheet(2)" *ngIf="typeprofile">\n                <!-- <img src="./assets/icon/editCover.svg" alt=""> -->\n                <svg style="padding: 3px 3px 5px 5px;background: #f1f1f1;border-radius: 5px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n          <path id="time-3-icon"d="M404.3 86l-202 202c-1.5 1.5-2.3 3.5-2.3 5.6v26.5c0 4.4 3.6 7.9 7.9 7.9h26.3c2.1 0 4.2-.8 5.7-2.3l202.1-202c3.1-3.1 3.1-8.1 0-11.2L415.5 86c-3.1-3.1-8.1-3.1-11.2 0zM475.6 67l-14.4-14.4-.2-.2c-3.1-2.7-7.2-4.4-11.5-4.4-4.4 0-8.5 1.7-11.6 4.5l-11.3 11.4c-1.5 1.6-1.5 4.1 0 5.6L437 79.9l21.7 21.7c1.6 1.6 4.1 1.6 5.7 0l11.3-11.3c2.8-3.1 4.4-7.1 4.4-11.6-.1-4.4-1.7-8.6-4.5-11.7z" />\n          <g>\n            <path\n              d="M250 342c-3 3-7.1 4.7-11.3 4.7H197.3c-8.8 0-16-7.2-16-16V289.2c0-4.2 1.7-8.3 4.7-11.3l.8-.8 147.6-147.6c2.5-2.5.7-6.8-2.8-6.8H90.7C58.3 122.7 32 149 32 181.4v224c0 32.4 26.3 58.7 58.7 58.7h256c32.4 0 58.7-26.3 58.7-58.7v-209c0-3.6-4.3-5.3-6.8-2.8L250.8 341.2l-.8.8z" />\n          </g>\n        </svg>\n            </div>\n        </div>\n        <div style="position: relative;top: -20px;background: #fff;border-radius: 15px 15px 0px 0px;">\n            <ion-grid style="position: relative; top: -30px;">\n                <ion-row>\n                    <ion-col col-4 style="text-align: center;">\n                        <!-- <img class="imgProfile" [src]="Profile.user_path_img" alt="" style="max-width: 150px;"> -->\n                        <div (click)="viewImage(Profile.user_path_img)" class="imgProfile" style="position: relative;" [ngStyle]="{\'background\': \'url(\'+Profile.user_path_img+\')\',\'background-size\': \'cover\',\'background-position\': \'center\',\'padding-top\': \'100%\'}">\n                            <img *ngIf="Profile.country_img != undefined && Profile.country_img_path == undefined" style="width: 25px;height: 25px;box-shadow: 0.5px 0.5px 1px 0.5px rgba(136, 136, 136, 0.21);position: absolute;bottom: 0px;right: 0px;" src="{{Profile.country_img.replace(\'img_resize\',\'img_base64\')}}"\n                                alt="" />\n                            <img *ngIf="Profile.country_img_path != undefined" style=" width: 25px;height: 25px;box-shadow: 0.5px 0.5px 1px 0.5px rgba(136, 136, 136, 0.21);position: absolute;bottom: 0px;right: 0px;" src="{{Profile.country_img_path.replace(\'img_resize\',\'img_base64\')}}"\n                                alt="" />\n                        </div>\n                    </ion-col>\n                    <ion-col col-8 style="display: grid; margin-top: 30px;">\n                        <table style="width: 100%;">\n                            <tr>\n                                <td style="font-size: 15px;font-weight: bold;padding-left: 15px;" colspan="2">\n                                    <!-- {{Profile.user_firstname}} {{Profile.user_lastname}} -->\n                                    <span [innerHTML]="Profile.user_firstname"> </span>\n                                    <span [innerHTML]="Profile.user_lastname"> </span>\n                                </td>\n                                <td rowspan="2" style="width: 20%;">\n                                    <div class="fram_follow" *ngIf="!typeprofile&&status_Follow==true" (click)="follow(1)">\n                                        <img class="img_follow" src="./assets/icon/follow_icon+.png" alt="" />\n                                        <div>Follow</div>\n                                    </div>\n                                    <div class="fram_follow" *ngIf="!typeprofile&&status_Follow==false">\n                                        <img class="img_follow" src="./assets/icon/follow_icon-.png" alt="" (click)="follow(2)" />\n                                        <div style="color: #888;">Following</div>\n                                    </div>\n                                    <div class="fram_follow" *ngIf="typeprofile" (click)="settingFN()" style="padding-right: 3px; text-align: right;">\n                                        <svg style="width: 25px; fill: #6b6b6b;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n                      <path\n                        d="M413.967 276.8c1.06-6.235 1.06-13.518 1.06-20.8s-1.06-13.518-1.06-20.8l44.667-34.318c4.26-3.118 5.319-8.317 2.13-13.518L418.215 115.6c-2.129-4.164-8.507-6.235-12.767-4.164l-53.186 20.801c-10.638-8.318-23.394-15.601-36.16-20.801l-7.448-55.117c-1.06-4.154-5.319-8.318-10.638-8.318h-85.098c-5.318 0-9.577 4.164-10.637 8.318l-8.508 55.117c-12.767 5.2-24.464 12.482-36.171 20.801l-53.186-20.801c-5.319-2.071-10.638 0-12.767 4.164L49.1 187.365c-2.119 4.153-1.061 10.399 2.129 13.518L96.97 235.2c0 7.282-1.06 13.518-1.06 20.8s1.06 13.518 1.06 20.8l-44.668 34.318c-4.26 3.118-5.318 8.317-2.13 13.518L92.721 396.4c2.13 4.164 8.508 6.235 12.767 4.164l53.187-20.801c10.637 8.318 23.394 15.601 36.16 20.801l8.508 55.117c1.069 5.2 5.318 8.318 10.637 8.318h85.098c5.319 0 9.578-4.164 10.638-8.318l8.518-55.117c12.757-5.2 24.464-12.482 36.16-20.801l53.187 20.801c5.318 2.071 10.637 0 12.767-4.164l42.549-71.765c2.129-4.153 1.06-10.399-2.13-13.518l-46.8-34.317zm-158.499 52c-41.489 0-74.46-32.235-74.46-72.8s32.971-72.8 74.46-72.8 74.461 32.235 74.461 72.8-32.972 72.8-74.461 72.8z" />\n                    </svg>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td style="color: #0045a0; font-weight: 500; padding-left: 15px;">\n                                    from {{Profile.country_name_en}}\n                                </td>\n                            </tr>\n                        </table>\n                        <br />\n                        <table style="width: 100%;">\n                            <tr>\n                                <td style="width: 33.33%; border-right: solid 1px;">\n                                    <div style="text-align: center;">\n                                        <div style="font-weight: bold; font-size: 18px;">\n                                            {{Profile.followers}}\n                                        </div>\n                                        <div style="letter-spacing: 0;" (click)="userfollows(1,\'FOLLOWERS\',Profile.followers)">\n                                            Followers\n                                        </div>\n                                    </div>\n                                </td>\n                                <td style="width: 33.33%; border-right: solid 1px;">\n                                    <div style="text-align: center;">\n                                        <div style="font-weight: bold; font-size: 18px;">\n                                            {{Profile.following}}\n                                        </div>\n                                        <div style="letter-spacing: 0;" (click)="userfollows(2,\'FOLLOWING\',Profile.following)">\n                                            Following\n                                        </div>\n                                    </div>\n                                </td>\n                                <td style="width: 33.33%;">\n                                    <div style="text-align: center;">\n                                        <div style="font-weight: bold; font-size: 18px;">\n                                            {{totalPost}}\n                                        </div>\n                                        <div style="letter-spacing: 0;">Post</div>\n                                    </div>\n                                </td>\n                            </tr>\n                        </table>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <div style="border-bottom: 1px #888 solid;margin: 0 10px;position: relative;top: -40px;height: 30px;">\n            <div id="postTabs" class="tabsAction tabsDefault" (click)="changeTabs(1)">\n                <span>Post</span>\n                <span class="icon-post"></span>\n            </div>\n            <div id="albumTabs" class="tabsDefault" (click)="changeTabs(2)">\n                <div>\n                    <span>Album</span>\n                    <ion-icon name="photos" class="albumicon"></ion-icon>\n                </div>\n            </div>\n            <div id="footprintTabs" class="tabsDefault" (click)="changeTabs(3)">\n                <span>Favorite</span>\n                <span class="iconHeart-heart"></span>\n            </div>\n        </div>\n    </div>\n\n    <div class="lds-ring" style="position: absolute;top: 25%;left: 0;right: 0;margin: auto;z-index: 100;" *ngIf="loading">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n    </div>\n    <ion-refresher *ngIf="section != \'four\'" id="refresher" (ionRefresh)="doRefresh($event)" [enabled]="refresherEnabled" pullMax="1000">\n        <ion-refresher-content enabled="true"> </ion-refresher-content>\n    </ion-refresher>\n    <!--//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->\n    <!--////////////////////////////////////////////////////////////////// tab1 //////////////////////////////////////////////////////////////////-->\n    <!--//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->\n    <!-- <div *ngIf="tabs == 1" style="margin-top: -30px;background: #d8d8d8;">\n  -->\n    <div style="margin-top: -30px;">\n        <div style="padding: 5px; margin: 0 10px;">\n            <b *ngIf="tabs == 2" style="font-size: 16px;">Journey</b>\n            <!-- <b *ngIf="tabs == 2" style="font-size: 16px;">Photos and Album</b> -->\n            <span class="iconP-onePicture albumDefault" style="padding-right: 0px;" [ngClass]="(mode != 2 && albumType == 1 && tabs == 2) || (mode == 2 && viewType == 1 && tabs == 2) || (feedType == 1 && tabs == 1) || (favType == 1 && tabs == 3)? \'albumAction\' : \'\'"\n                (click)="changeAlbum(1)"></span>\n            <span class="iconP-twoPicture albumDefault" [ngClass]="(mode != 2 && albumType == 0 && tabs == 2) || (mode == 2 && viewType == 0 && tabs == 2) || (feedType == 0 && tabs == 1) || (favType == 0 && tabs == 3)? \'albumAction\' : \'\'" (click)="changeAlbum(0)"></span>\n        </div>\n    </div>\n\n    <!-- <div *ngIf="tabs == 2" style="margin-top: -30px;">\n    <div style="padding: 5px;margin: 0 10px;">\n      <b *ngIf="tabs == 2" style="font-size: 16px;">Photos and Album</b>\n      <span class="iconP-onePicture albumDefault" style="padding-right: 0px;" [ngClass]="(albumType == 1 && tabs == 2) ? \'albumAction\' : \'\'" (click)="changeAlbum(1)"></span>\n      <span class="iconP-twoPicture albumDefault" [ngClass]="(albumType == 0 && tabs == 2) ? \'albumAction\' : \'\'" (click)="changeAlbum(0)"></span>\n    </div>\n    </div> -->\n\n    <ion-grid *ngIf="tabs == 1" style="margin-top: -30px;">\n        <ion-row *ngIf="feedType == 0">\n            <ion-col *ngFor="let datafeed of postList;let i = index;" style="padding: 0px; padding-bottom: 5px; padding-right: 5px;" col-6>\n                <div *ngIf="datafeed.checkshow == 0 && datafeed.status_show" style="border: solid 1px #e4e4e4; background: #fff;">\n                    <div class="disshowimg" *ngIf="!datafeed.status_show"></div>\n                    <div *ngIf="datafeed.status_show">\n                        <ion-grid style="padding: 0; height: 45px;" (click)="NextPage(\'ProfilePage\',datafeed)" id="gridDetail" *ngIf="datafeed.user_id != \'TAT\'">\n                            <ion-row *ngIf="feedType == 0">\n                                <ion-col col-3 id="gridCol3">\n                                    <img class="imgpro1" [src]="datafeed.user_img" id="dImg" onError="src = \'./assets/imgs/onError.png\'" />\n                                </ion-col>\n                                <ion-col col-9 style="margin: auto; color: white; padding: 0px;" id="gridCol">\n                                    <div class="fullname">\n                                        <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_firstname"></span>\n                                        <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_lastname"></span>\n                                    </div>\n                                    <div class="location fromName" style="width: 100%;" style="color: #9e9e9e;">\n                                        <span style="letter-spacing: 0.1px !important;" class="colorCountry">{{datafeed.country_name_en}}</span>\n                                        <span>&bull;</span>\n                                        <span style="letter-spacing: 0.1px !important;font-size: 12px !important;">{{datafeed.time}}</span>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <ion-grid style="padding: 0; height: 45px;" id="gridDetail" *ngIf="datafeed.user_id == \'TAT\'">\n                            <ion-row>\n                                <ion-col col-3 id="gridCol3">\n                                    <img class="imgpro1" [src]="datafeed.user_img" id="dImg" onError="src = \'./assets/imgs/onError.png\'" />\n                                </ion-col>\n                                <ion-col col-9 style="margin: auto; color: white;" id="gridCol">\n                                    <div class="fullname" style="width: 100%;" style="color: #565656; font-size: 11px;">\n                                        <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_firstname"></span>\n                                        <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_lastname"></span>\n                                    </div>\n                                    <div class="location fromName" style="width: 100%;">\n                                        <span style="letter-spacing: 0.1px !important;" class="colorCountry">{{datafeed.country_name_en}}</span>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col col-12 style="padding: 0; height: 100%; font-size: 14px;">\n                                    <div class="Museo color4D caption" [innerHtml]="datafeed.hashtag"></div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </div>\n                    <div style="position: relative;" *ngIf="datafeed.status_show">\n                        <div class="frameHeart">\n                            <img src="./assets/icon/icon-hearts6t.png" alt="" (click)="bookmark(datafeed,1,i,2)" *ngIf="datafeed.status_bookmark && datafeed.user_id != \'TAT\'" style="width: 22px;" />\n                            <img src="./assets/icon/icon-hearts6.png" alt="" (click)="bookmark(datafeed,2,i,2)" *ngIf="!datafeed.status_bookmark && datafeed.user_id != \'TAT\'" style="width: 22px;" />\n                        </div>\n                        <div class="frameFeel" *ngIf="datafeed.user_id != \'TAT\' && datafeed.status_show">\n                            <span class="frameFeeling">{{datafeed.feeling_name}}</span>\n                        </div>\n                        <div *ngIf="datafeed.user_id != \'TAT\'" style="background: #e6e6e6; height: 193px !important;" id="image">\n                            <!-- <div *ngIf="datafeed.checkCard == 0" [ngStyle]="{\n                                                \'background\': \'url(\'+datafeed.pictureResize[0].path_full+\')\'}" class="bgList" style="padding-top: 100%;"\n                      (click)="NextPage(\'DetailfeedPage\',datafeed)"></div> -->\n\n                            <div [ngStyle]="{ \'height\': \'100%\'}">\n                                <img [ngStyle]="{ \'height\': \'100%\'}" *ngIf="datafeed.checkCard == 0 && datafeed.pictureResize[0].type == 1" class="abc" (click)="NextPage(\'DetailfeedPage\',datafeed)" [src]="datafeed.pictureResize[0].path_resize" alt="" style="width: 100%;" />\n                                <video id="video" (click)="NextPage(\'DetailfeedPage\',datafeed)" controls preload="metadata" playsinline *ngIf="datafeed.pictureResize[0].type == 2" alt="" style="width: 100%;height: 100%;object-fit: cover;">\n                                    <source [src]="datafeed.pictureResize[0].path_resize "  type="video/mp4" />\n                                </video>\n                            </div>\n                            <div class="photoAll" *ngIf="datafeed.pictureResize.length > 1">\n                                <div class="textPhotoGroup">\n                                    <img style="border-radius: unset;width: 19px;vertical-align: middle;" src="./assets/icon/photoAll.svg" alt="" />\n                                    <span class="span-all-photo">All Photo({{datafeed.pictureResize.length}})</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf="datafeed.user_id == \'TAT\'" style="background: #e6e6e6; height: 193px !important;" id="image">\n                            <div *ngIf="datafeed.checkCard == 0 && datafeed.pictureResize[0].type == 1" [ngStyle]="{ \'background\': \'url(\'+datafeed.pictureResize[0].path_full+\')\'}" class="bgList" style="padding-top: 100%;" (click)="NextPage(\'DetailfeedPage\',datafeed)"></div>\n                            <video id="video" (click)="NextPage(\'DetailfeedPage\',datafeed)" controls preload="metadata" playsinline *ngIf="datafeed.pictureResize[0].type == 2" alt="" style="width: 100%;height: 100%;object-fit: cover;">\n                                <source [src]="datafeed.pictureResize[0].path_resize "  type="video/mp4" />\n                            </video>\n                        </div>\n                        <div id="tabProfile" class="ChildNewfeed" style="position: absolute; bottom: 0px; width: 100%;" *ngIf="datafeed.status_show"></div>\n                    </div>\n                    <div *ngIf="datafeed.status_show" id="detailcard">\n                        <ion-grid style="padding-top: 5px;padding-bottom: 5px;max-height: 45px;min-height: 45px;border-bottom: 1px solid #f5f5f5;padding: 0px;background: #f7f7f7;position: relative;font-size: 14px;">\n                            <i class="icon_map icon15"></i>\n                            <ion-row (click)="NextPage(\'TouristPage\',datafeed)" style="padding-top: 8px;">\n                                <ion-col col-8 style="padding: 0;">\n                                    <span class="color87 locations" style="margin-left: 20px;" [innerHTML]="datafeed.photo_location"></span>\n                                </ion-col>\n                                <ion-col col-4 style="padding: 0;padding: 0;text-align: right;font-weight: bolder;">\n                                    <span class="location distant" style="position: absolute;right: 5px;bottom: 0;color: #72c2ff;width: 100% !important;">{{datafeed.distant}} km.</span>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row (click)="NextPage(\'TouristPage\',datafeed)">\n                                <ion-col col-12 style="padding: 0;">\n                                    <span class="location" style="margin-left: 20px; padding-bottom: 5px;">{{datafeed.photo_province}}</span>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <ion-grid style="padding-top: 12px;padding-bottom: 12px;padding-left: 12px;" class="threeIcon">\n                            <ion-row class="FSitalic font12">\n                                <ion-col col-6 style="position: relative; padding: 0;" class="col_fix1">\n                                    <img src="./img/icon_coconut_gray.svg" style="width: 15px; vertical-align: middle;" alt="" (click)="like(datafeed,2,i,2)" *ngIf="!datafeed.status_like && datafeed.user_id != \'TAT\'" />\n                                    <div id="like{{datafeed.photo_id}}" *ngIf="datafeed.status_like && datafeed.user_id != \'TAT\'" style="display: inline-block;" (click)="like(datafeed,1,i,2)">\n                                        <img src="./img/icon_coconut.png" style="width: 15px; vertical-align: middle;" alt="" />\n                                        <span class="like-iconTNew"> <div class="heart-animation-1"></div> <div class="heart-animation-2"></div> </span>\n                                    </div>\n                                    <div style="display: inline-block;position: relative;height: 16px;vertical-align: middle;margin-left: -10px;" *ngIf="datafeed.imageLike.length != 0 && datafeed.user_id != \'TAT\'">\n                                        <div class="userLike" style="display: grid;min-width: 16px;height: 16px;font-size: 10px;">\n                                            <span class="sumLike" style="font-size: 10px;">{{datafeed.sum_like}}</span>\n                                        </div>\n                                    </div>\n                                    <span style=" font-style: normal;font-size: 10px;font-weight: bold;vertical-align: middle;" (click)="like(datafeed,2,i,2)" *ngIf="!datafeed.status_like && datafeed.user_id != \'TAT\'" class="fontnormal">Coconut</span>\n                                    <span style="font-style: normal;font-size: 10px;font-weight: bold;vertical-align: middle;" *ngIf="datafeed.status_like && datafeed.user_id != \'TAT\'" (click)="like(datafeed,1,i,2)" class="fontnormal">Coconut</span>\n                                </ion-col>\n                                <ion-col col-6 style="position: relative; padding: 0;" (click)="NextPage(\'viewComment\',datafeed)">\n                                    <img src="./assets/icon/icon-comment-new-f.svg" alt="" style="width: 15px; vertical-align: middle;" *ngIf="!datafeed.status_comment" />\n                                    <img src="./assets/icon/icon-comment-new-t.svg" alt="" style="width: 15px; vertical-align: middle;" *ngIf="datafeed.status_comment" />\n                                    <div style="display: inline-block;position: relative; height: 16px;min-width: 8px;vertical-align: middle;margin-left: -10px;" x>\n                                        <div *ngIf="datafeed.countComment != 0" class="userLike" style="display: grid; min-width: 16px; height: 16px;font-size: 10px;">\n                                            <span class="sumLike" style="font-size: 10px;">{{datafeed.countComment}}</span>\n                                        </div>\n                                    </div>\n                                    <span style="font-style: normal;vertical-align: middle;font-size: 10px;font-weight: bold;" class="fontnormal">Comment</span>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n\n                        <hr style="margin: 0 5px; background: #e4e4e4; height: 1px;" />\n                        <ion-grid (click)="NextPage(\'viewComment\',datafeed)" class="" no-padding>\n                            <ion-row class="font_10" *ngIf="datafeed.userIdComment != \'\'">\n                                <ion-col col-3 style="display: inline-flex;">\n                                    <div class="borderimgage inlineBlog" style="display: inline-block; margin: auto;">\n                                        <img class="imgpro1" id="img_profile" [src]="datafeed.comment_user_img" />\n                                    </div>\n                                </ion-col>\n                                <ion-col class="padding_5" col-9 style="display: inline-flex;">\n                                    <div class="commentBg" style="display: inline-block; max-width: 95%;vertical-align: middle;margin: auto;padding: 5px 10px;margin-left: 0px;">\n                                        <p class="location namecomment" style="width: 100%;margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.fulnameComment"></p>\n                                        <p class="location" style="width: 100%;margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.comment"></p>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row class="font_10" *ngIf="datafeed.countComment == 0">\n                                <ion-col col-3 style="display: inline-flex;">\n                                    <div class="borderimgage inlineBlog" style="display: inline-block; margin: auto;">\n                                        <img class="imgpro1" id="img_profile" [src]="gd.userProfile.user_path_img" />\n                                    </div>\n                                </ion-col>\n                                <ion-col class="padding_5" col-9 style="display: inline-flex;">\n                                    <div class="borderinput commentbord" style="display: inline-block; width: 100%;vertical-align: middle; margin: auto;">\n                                        <input type="text" disabled class="inputComment" value="Write a comment" style="border: unset !important;" />\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="feedType == 1">\n            <ion-col *ngFor="let datafeed of postList;let i = index;" style="padding: 0px; padding-bottom: 5px; padding-right: 5px;" col-12>\n                <div *ngIf="datafeed.checkshow == 0 && datafeed.status_show" style="border: solid 1px #e4e4e4; background: #fff;">\n                    <div class="disshowimg" *ngIf="!datafeed.status_show"></div>\n                    <div *ngIf="datafeed.status_show">\n                        <ion-grid style="padding: 0; height: 45px;" (click)="NextPage(\'ProfilePage\',datafeed)" id="gridDetail" *ngIf="datafeed.user_id != \'TAT\'">\n                            <ion-row *ngIf="feedType == 1">\n                                <ion-col col-2 id="gridCol3" style="display: grid;">\n                                    <img class="imgpro2" [src]="datafeed.user_img" id="dImg" onError="src = \'./assets/imgs/onError.png\'" style="margin: auto;" />\n                                </ion-col>\n                                <ion-col col-10 style="margin: auto; color: white; padding: 0px;" id="gridCol">\n                                    <div class="fullname">\n                                        <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_firstname"></span>\n                                        <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_lastname"></span>\n                                    </div>\n                                    <div class="location fromName" style="width: 100%;" style="color: #9e9e9e;">\n                                        <span style="letter-spacing: 0.1px !important;" class="colorCountry">{{datafeed.country_name_en}}</span>\n                                        <span>&bull;</span>\n                                        <span style="letter-spacing: 0.1px !important;font-size: 12px !important; ">{{datafeed.time}}</span>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <ion-grid style="padding: 0; height: 45px;" id="gridDetail" *ngIf="datafeed.user_id == \'TAT\'">\n                            <ion-row>\n                                <ion-col col-2 id="gridCol3">\n                                    <img class="imgpro2" [src]="datafeed.user_img" id="dImg" onError="src = \'./assets/imgs/onError.png\'" />\n                                </ion-col>\n                                <ion-col col-10 style="margin: auto; color: white;" id="gridCol">\n                                    <div class="fullname" style="width: 100%;" style="color: #565656; font-size: 11px;">\n                                        <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_firstname"></span>\n                                        <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_lastname"></span>\n                                    </div>\n                                    <div class="location fromName" style="width: 100%;">\n                                        <span style="letter-spacing: 0.1px !important;" class="colorCountry">{{datafeed.country_name_en}} </span>\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col col-12 style="padding: 0; height: 100%; font-size: 14px;">\n                                    <div class="Museo color4D caption" [innerHtml]="datafeed.hashtag"></div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </div>\n                    <div style="position: relative;" *ngIf="datafeed.status_show">\n                        <div class="frameHeart">\n                            <img src="./assets/icon/icon-hearts6t.png" alt="" (click)="bookmark(datafeed,1,i,2)" *ngIf="datafeed.status_bookmark && datafeed.user_id != \'TAT\'" style="width: 22px;" />\n                            <img src="./assets/icon/icon-hearts6.png" alt="" (click)="bookmark(datafeed,2,i,2)" *ngIf="!datafeed.status_bookmark && datafeed.user_id != \'TAT\'" style="width: 22px;" />\n                        </div>\n                        <div class="frameFeel" *ngIf="datafeed.user_id != \'TAT\' && datafeed.status_show">\n                            <span class="frameFeeling">{{datafeed.feeling_name}}</span>\n                        </div>\n                        <div *ngIf="datafeed.user_id != \'TAT\'" style="background: #e6e6e6;" id="image">\n                            <!-- <div *ngIf="datafeed.checkCard == 0" [ngStyle]="{\n                                                  \'background\': \'url(\'+datafeed.pictureResize[0].path_full+\')\'}" class="bgList" style="padding-top: 100%;"\n                        (click)="NextPage(\'DetailfeedPage\',datafeed)"></div> -->\n\n                            <div [ngStyle]="{ \'height\': \'300px\', \'object-fit\':\'cover\'}">\n                                <img [ngStyle]="{ \'height\': \'300px\',\'object-fit\':\'cover\'}" *ngIf="datafeed.checkCard == 0 && datafeed.pictureResize[0].type == 1" class="" (click)="NextPage(\'DetailfeedPage\',datafeed)" [src]="datafeed.pictureResize[0].path_resize" alt="" style="width: 100%;"\n                                />\n                                <video id="video" (click)="NextPage(\'DetailfeedPage\',datafeed)" controls preload="metadata" playsinline *ngIf="datafeed.pictureResize[0].type == 2" alt="" style="width: 100%;height: 100%;object-fit: cover;">\n                                    <source [src]="datafeed.pictureResize[0].path_resize "  type="video/mp4" />\n                                </video>\n                            </div>\n                            <div class="photoAll" *ngIf="datafeed.pictureResize.length > 1">\n                                <div class="textPhotoGroup">\n                                    <img style=" border-radius: unset;width: 19px;vertical-align: middle;" src="./assets/icon/photoAll.svg" alt="" />\n                                    <span class="div-all-photo">All Photo({{datafeed.pictureResize.length}})</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf="datafeed.user_id == \'TAT\'" style="background: #e6e6e6;" id="image">\n                            <div *ngIf="datafeed.checkCard == 0 && datafeed.pictureResize[0].type == 1" [ngStyle]="{ \'background\': \'url(\'+datafeed.pictureResize[0].path_full+\')\'}" class="bgList" style="padding-top: 100%;" (click)="NextPage(\'DetailfeedPage\',datafeed)"></div>\n                            <video id="video" (click)="NextPage(\'DetailfeedPage\',datafeed)" controls preload="metadata" playsinline *ngIf="datafeed.pictureResize[0].type == 2" alt="" style="width: 100%;height: 100%;object-fit: cover;">\n                                <source [src]="datafeed.pictureResize[0].path_resize "  type="video/mp4" />\n                            </video>\n                        </div>\n                        <div id="tabProfile" class="ChildNewfeed" style="position: absolute; bottom: 0px; width: 100%;" *ngIf="datafeed.status_show"></div>\n                    </div>\n                    <div *ngIf="datafeed.status_show" id="detailcard">\n                        <ion-grid style="padding-top: 5px;padding-bottom: 5px;max-height: 45px;min-height: 45px;border-bottom: 1px solid #f5f5f5;padding: 0px;background: #f7f7f7;position: relative;font-size: 14px; ">\n                            <i class="icon_map icon15"></i>\n                            <ion-row (click)="NextPage(\'TouristPage\',datafeed)" style="padding-top: 8px;">\n                                <ion-col col-8 style="padding: 0;">\n                                    <span class="color87 locations" style="margin-left: 20px;" [innerHTML]="datafeed.photo_location"></span>\n                                </ion-col>\n                                <ion-col col-4 style="padding: 0; padding: 0;text-align: right;font-weight: bolder; ">\n                                    <span class="location distant" style="position: absolute;right: 5px;bottom: 0;color: #72c2ff;width: 100% !important; ">{{datafeed.distant}} km.</span>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row (click)="NextPage(\'TouristPage\',datafeed)">\n                                <ion-col col-12 style="padding: 0;">\n                                    <span class="location" style="margin-left: 20px; padding-bottom: 5px;">{{datafeed.photo_province}}</span>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <ion-grid style="padding-top: 12px;padding-bottom: 12px; padding-left: 12px;" class="threeIcon">\n                            <ion-row class="FSitalic font12">\n                                <ion-col col-6 style="position: relative; padding: 0;" class="col_fix1">\n                                    <img src="./img/icon_coconut_gray.svg" style="width: 20px; vertical-align: middle;" alt="" (click)="like(datafeed,2,i,2)" *ngIf="!datafeed.status_like && datafeed.user_id != \'TAT\'" />\n                                    <div id="like{{datafeed.photo_id}}" *ngIf="datafeed.status_like && datafeed.user_id != \'TAT\'" style="display: inline-block;" (click)="like(datafeed,1,i,2)">\n                                        <img src="./img/icon_coconut.png" style="width: 20px; vertical-align: middle;" alt="" />\n                                        <span class="like-iconTNew">\n                                            <div class="heart-animation-1"></div>\n                                            <div class="heart-animation-2"></div>\n                                        </span>\n                                    </div>\n                                    <div style="display: inline-block;position: relative;height: 20px; vertical-align: middle; margin-left: -10px;" *ngIf="datafeed.imageLike.length != 0 && datafeed.user_id != \'TAT\'">\n                                        <div class="userLike" style="display: grid;min-width: 20px;height: 20px;font-size: 16px; ">\n                                            <span class="sumLike" style="font-size: 12px;">{{datafeed.sum_like}}</span>\n                                        </div>\n                                    </div>\n                                    <span style="font-style: normal;font-size: 13px;font-weight: bold; vertical-align: middle;" (click)="like(datafeed,2,i,2)" *ngIf="!datafeed.status_like && datafeed.user_id != \'TAT\'" class="fontnormal">Coconut</span>\n                                    <span style="font-style: normal;font-size: 13px;font-weight: bold;vertical-align: middle;" *ngIf="datafeed.status_like && datafeed.user_id != \'TAT\'" (click)="like(datafeed,1,i,2)" class="fontnormal">Coconut</span>\n                                </ion-col>\n                                <ion-col col-6 style="position: relative; padding: 0;" (click)="NextPage(\'viewComment\',datafeed)">\n                                    <span style="margin-left: 5px;">\n                    <img src="./assets/icon/icon-comment-new-f.svg" alt="" style="width: 20px; vertical-align: middle;"\n                      *ngIf="!datafeed.status_comment" />\n                    <img src="./assets/icon/icon-comment-new-t.svg" alt="" style="width: 20px; vertical-align: middle;"\n                      *ngIf="datafeed.status_comment" />\n                    <div style=" display: inline-block;position: relative;height: 20px;vertical-align: middle;margin-left: -10px;" *ngIf="datafeed.countComment != 0">\n                      <div class="userLike" style="display: grid;min-width: 20px;height: 20px;font-size: 16px;">\n                        <span class="sumLike" style="font-size: 12px;">{{datafeed.countComment}}</span>\n                    </div>\n                </div>\n                <span style="font-style: normal;vertical-align: middle;font-size: 13px;font-weight: bold;" class="fontnormal">Comment</span>\n                </span>\n                </ion-col>\n                </ion-row>\n                </ion-grid>\n\n                <hr style="margin: 0 5px; background: #e4e4e4; height: 1px;" />\n                <ion-grid (click)="NextPage(\'viewComment\',datafeed)" class="" no-padding>\n                    <ion-row class="font_10" *ngIf="datafeed.userIdComment != \'\'">\n                        <ion-col col-2 style="display: inline-flex;">\n                            <div class="borderimgage inlineBlog" style="display: inline-block; margin: auto;">\n                                <img class="imgpro2" id="img_profile" [src]="datafeed.comment_user_img" style="vertical-align: middle;height: 40px; width: 40px; border: none;" />\n                            </div>\n                        </ion-col>\n                        <ion-col class="padding_5" col-10 style="display: inline-flex;">\n                            <div class="commentBg" style="display: inline-block; max-width: 95%;vertical-align: middle;margin: auto;padding: 5px 10px;margin-left: 0px;">\n                                <p class="location namecomment" style="width: 100%;margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.fulnameComment"></p>\n                                <p class="location" style=" width: 100%;margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.comment"></p>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class="font_10" *ngIf="feedType == 1 || datafeed.countComment == 0">\n                        <ion-col col-2 style="display: inline-flex;">\n                            <div class="borderimgage inlineBlog" style="display: inline-block; margin: auto;">\n                                <img class="imgpro2" id="img_profile" [src]="gd.userProfile.user_path_img" />\n                            </div>\n                        </ion-col>\n                        <ion-col class="padding_5" col-10 style="display: inline-flex;">\n                            <div class="borderinput commentbord" style="display: inline-block;width: 100%; vertical-align: middle; margin: auto; ">\n                                <input type="text" disabled class="inputComment" value="Write a comment" style="border: unset !important;" />\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                </div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <!--//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->\n    <!--////////////////////////////////////////////////////////////////// tab2 //////////////////////////////////////////////////////////////////-->\n    <!--//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->\n\n    <div *ngIf="tabs == 2" style="margin-top: 10px;">\n        <!-- <div style="padding: 5px;margin: 0 10px;">\n      <b style="font-size: 16px;">Photos and Album</b>\n      <span class="iconP-onePicture albumDefault" style="padding-right: 0px;" [ngClass]="albumType == 1 ? \'albumAction\' : \'\'" (click)="changeAlbum(1)"></span>\n      <span class="iconP-twoPicture albumDefault" [ngClass]="albumType == 0 ? \'albumAction\' : \'\'" (click)="changeAlbum(0)"></span>\n    </div> -->\n        <div *ngIf="mode == 1" style="padding: 10px; text-align: center; position: relative;">\n            <ion-grid>\n\n                <ion-row *ngIf="albumType == 0" align-items-start>\n                    <ion-col *ngFor="let img of album; let i = index" (click)="viewAllAlbum(img)" col-6>\n\n                        <div *ngIf="album != undefined" style="height: 193px; width: 100%; position: relative;">\n                            <img *ngIf="img.type == 1" [src]="img.path_resize" alt="" class="albumMode1" />\n                            <video id="video" class="video-profile" controls preload="metadata" playsinline *ngIf="img.type == 2" alt="" style="width: 100%;height: 100%;object-fit: cover;">\n                                <source [src]="img.path_resize "  type="video/mp4" />\n                            </video>\n                            <div class="photoAllAlbum" *ngIf="img.photo_count > 1">\n                                <div class="textPhotoGroup" *ngIf="albumType == 0">\n                                    <img style="border-radius: unset;width: 19px;vertical-align: middle;" src="./assets/icon/photoAll.svg" alt="" />\n                                    <span class="div-all-photo">All Photo({{img.photo_count}})</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf="album != undefined && img.path_resize != undefined" style="color: dodgerblue; padding: 5px;">\n                            {{img.province}}<span *ngIf="img.province != undefined && img.province != \'\'">,\n              </span>{{img.location.split(\',\').reverse()[0]}}\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <ion-row *ngIf="albumType == 1">\n                    <ion-col *ngFor="let img of album; let i = index" (click)="viewAllAlbum(img)" col-12>\n                        <div *ngIf="album != undefined" style="height: auto; width: 100%; position: relative;">\n                            <img [src]="img.path_resize" alt="" class="albumMode2" />\n                            <div class="photoAllalbum" *ngIf="img.photo_count > 1">\n                                <div class="textPhotoGroup" *ngIf="albumType == 1">\n                                    <img style="border-radius: unset;width: 19px;vertical-align: middle;" src="./assets/icon/photoAll.svg" alt="" />\n                                    <span class="div-all-photo">All Photo({{img.photo_count}})</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf="img != undefined" style="color: dodgerblue; padding-bottom: 20px; padding-top: 5px;">\n                            {{img.province}}<span *ngIf="img.province != undefined && img.province != \'\'">,\n              </span>{{img.location.split(\',\').reverse()[0]}}\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n\n        <div *ngIf="mode == 2" style="padding: 0 10px 10px 10px; text-align: center;">\n            <ion-label *ngIf=" allPhoto != undefined && allPhoto.length > 0" style="color: dodgerblue; margin-left: 5px; text-align: left;">{{allPhoto[0].album_name}}</ion-label>\n            <ion-grid *ngIf="allPhoto != undefined && allPhoto.length > 0">\n                <ion-row *ngIf="viewType == 0" align-items-start>\n                    <ion-col *ngFor="let img of allPhoto; let i = index" col-6>\n                        <div style="height: 193px; width: 100%; position: relative;">\n                            <img *ngIf="img.type == 1" [src]="img.path_resize" alt="" class="albumMode1" (click)="goDetail(img)" />\n                            <video id="video" class="video-profile" (click)="goDetail(img)" controls preload="metadata" playsinline *ngIf="img.type == 2" alt="" style="width: 100%;height: 100%;object-fit: cover;">\n                                <source [src]="img.path_resize "  type="video/mp4" />\n                            </video>\n                        </div>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row *ngIf="viewType == 1">\n                    <ion-col *ngFor="let img of allPhoto; let i = index" col-12>\n                        <div style="height: auto; width: 100%; position: relative;">\n                            <img [src]="img.path_resize" alt="" class="albumMode2" (click)="goDetail(img)" />\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n\n    <!--//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->\n    <!--////////////////////////////////////////////////////////////////// tab3 //////////////////////////////////////////////////////////////////-->\n    <!--//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->\n\n    <!-- <div *ngIf="tabs == 3" style="margin-top: -30px;background: #d8d8d8;">\n    <div *ngFor="let datafeed of footprintList;let i = index;" style="margin-bottom: 10px;background: #fff;">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-3 style="display: grid;">\n            <div class="imgProfile"\n              [ngStyle]="{\'background\': \'url(\'+datafeed.user_img+\')\',\'background-size\': \'cover\',\'background-position\': \'center\',\'padding-top\': \'80%\'}"\n              style="width: 80%;margin: auto;"></div>\n          </ion-col>\n          <ion-col col-9 style="display: grid;">\n            <table style="width: 100%;margin: auto;">\n              <tr>\n                <td style="font-size: 15px;font-weight: bold;">\n                  <div (click)="NextPage(\'ProfilePage\',datafeed)" class="text1line" style="max-width: 180px;">\n                    <span [innerHtml]="datafeed.user_firstname"> </span>\n                    <span [innerHtml]="datafeed.user_lastname"></span>\n                  </div>\n                  <div style="font-size: 12px;">\n                    <span style="color: #0045a0;font-weight: 500;">from {{datafeed.country_name_en}} </span>\n                    <span>&bull; {{datafeed.time}}</span>\n\n                  </div>\n                </td>\n                <td style="text-align: right;">\n\n\n                  <div class="fram_follow" style="display: inline-block;font-size: 8px;"\n                    *ngIf="datafeed.user_id != Profile.user_id && datafeed.followST != true"\n                    (click)="followFC(1,datafeed.user_id)">\n                    <img class="img_follow" style="width: 20px;" src="./assets/icon/follow_icon+.png" alt="">\n                    <div>Follow</div>\n                  </div>\n\n                  <div class="fram_follow" style="display: inline-block;font-size: 8px;"\n                    *ngIf="datafeed.user_id != Profile.user_id && datafeed.followST == true"\n                    (click)="followFC(2,datafeed.user_id)">\n                    <img class="img_follow" style="width: 20px;" src="./assets/icon/follow_icon-.png" alt="">\n                    <div style="color: #888;">Following</div>\n                  </div>\n\n                  <div class="fram_follow" style="display: inline-block;font-size: 8px;"\n                    (click)="gd.presentPopover($event,datafeed)">\n                    <img style="width: 20px;" src="./assets/icon/share_icon.png" alt="">\n                    <div class="text_icon">Share</div>\n                  </div>\n                </td>\n              </tr>\n            </table>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div [innerHtml]="datafeed.hashtag"></div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col style="padding: 0px;">\n            <img [src]="datafeed.pictureResize[0]" alt="" style="border-radius: 6px 6px 0 0;width: 100%;"\n              (click)="NextPage(\'DetailfeedPage\',datafeed)">\n            <div>\n              <ion-grid style="padding: 5px;background: #ececec;margin-top: -5px;">\n                <ion-row>\n                  <ion-col col-1 style="padding: 0;display: grid;">\n                    <img src="./assets/icon/ping-icon.png" alt="" class="inline"\n                      style="border-radius: 0px;height: 17px;width: 16px;margin: auto;">\n                  </ion-col>\n                  <ion-col col-9 style="padding: 0;">\n                    <div class="inline font_12" style="width: 100%;">\n                      <div class="Montserrat text_1line" style="width: 96%" [innerHTML]="datafeed.photo_location"></div>\n                      <div class="Montserrat text_1line"\n                        style="max-width:60%;font-style: normal;font-weight: bold;display: inline-flex;">\n                        {{datafeed.photo_province}}</div>\n                    </div>\n                  </ion-col>\n                  <ion-col style="padding: 0;" col-2>\n                    <div class="inline font_12" style="width: 100%;">\n                      <div class="color7B Montserrat text_1line"\n                        style="color: #00b4ff;font-size: 12px;font-weight: bold;margin-right: 5px;float: right;display: inline-block;">\n                        {{datafeed.distant}} km</div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row style="border-bottom: 1px solid #e4e4e4;padding:0px;">\n          <ion-col col-4 style="text-align: center;display: grid;padding-top: 9px;padding-bottom: 8px;">\n            <div style="margin: auto">\n              <a class=\'like-button \' (click)="like(datafeed,1,i)" id="like{{datafeed.photo_id}}"\n                *ngIf="datafeed.status_like && datafeed.user_id != \'TAT\'">\n                <span class=\'like-iconTNew\'>\n                  <div class=\'heart-animation-1\'></div>\n                  <div class=\'heart-animation-2\'></div>\n                </span>\n              </a>\n              <img src="./img/icon_coconut_gray.png" class="img_icon" (click)="like(datafeed,2,i)"\n                *ngIf="!datafeed.status_like && datafeed.user_id != \'TAT\'">\n              <div class="inline font_10" style="text-align: left;vertical-align: bottom;">\n                <div>{{datafeed.sum_like}}</div>\n                <div class="inline">coconut</div>\n              </div>\n            </div>\n\n          </ion-col>\n          <ion-col col-4 style="text-align: center;display: grid;padding-top: 9px;padding-bottom: 8px;">\n            <div style="margin: auto" (click)="NextPage(\'viewComment\',datafeed)">\n              <img src="./img/icon_comment_count.png" class="img_icon">\n              <div class="inline font_10" style="text-align: left;">\n                <div>{{datafeed.countComment}}</div>\n                <div class="inline">comment</div>\n              </div>\n            </div>\n          </ion-col>\n          <ion-col col-4 style="text-align: center;display: grid;padding-top: 9px;padding-bottom: 8px;">\n            <div style="margin: auto">\n              <span (click)="bookmark(datafeed,1,i,1)" *ngIf="datafeed.status_bookmark">\n                <img src="./img/icon_footprint.png" style="height: 22px;width: unset;vertical-align: middle;">\n\n                <div class="inline font_10" style="text-align: left;">\n                  <br>\n                  <div class="inline">footprint</div>\n                </div>\n              </span>\n              <span (click)="bookmark(datafeed,2,i,1)" *ngIf="!datafeed.status_bookmark">\n                <img src="./img/icon_footprint_f.png" style="height: 22px;width: unset;vertical-align: middle;">\n                <div class="inline font_10" style="text-align: left;">\n                  <br>\n                  <div class="inline">footprint</div>\n                </div>\n              </span>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="font_10" *ngIf="datafeed.userIdComment != \'\'" (click)="NextPage(\'viewComment\',datafeed)">\n          <ion-col class="padding_0">\n            <div class="borderimgage inlineBlog" style="display: inline-block;">\n              <img class="imgpro" id="img_profile" [src]="datafeed.comment_user_img"\n                style="vertical-align: middle;height: 40px;width: 40px;" />\n            </div>\n            <div class="commentBg" style="display: inline-block;width: 85%;vertical-align: middle;">\n              <p class="location namecomment" style="width: 100%;margin: 0px;" [innerHtml]="datafeed.fulnameComment">\n              </p>\n              <p class="location" style="width: 100%;margin: 0px;" [innerHtml]="datafeed.comment"></p>\n            </div>\n            <p style="margin: unset;margin-left: 45px;" class="timeComment">{{datafeed.timeComment}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="datafeed.countComment == 0" (click)="NextPage(\'viewComment\',datafeed)">\n          <ion-col class="font_10" style="padding-left: 0;padding-right: 0;padding: 0px;">\n            <div class="borderimgage inlineBlog" *ngIf="gd.userProfile.length != 0" style="display: inline-block;">\n              <img class="imgpro" id="img_profile" [src]="gd.userProfile.user_path_img"\n                style="vertical-align: middle;height: 40px;width: 40px;" />\n            </div>\n            <div class="borderinput commentbord" style="display: inline-block;width: 85%;vertical-align: middle;">\n              <input type="text" disabled class="inputComment" [(ngModel)]="datafeed.textComment"\n                placeholder="Write a comment" style="width: 75%;border:unset !important;"\n                (keyup.enter)="sendComment(datafeed , \'1\')">\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div> -->\n    <ion-list style="margin:0" *ngIf="tabs == 3">\n        <ion-grid>\n            <!-- data grid style -->\n            <ion-row *ngIf="favType == 0">\n                <ion-col *ngFor="let datafeed of footprintList;let i = index;" no-padding col-6>\n                    <div style="padding: 0px; padding-bottom: 5px; padding-right: 5px;">\n                        <div *ngIf="datafeed.checkshow == 0 && datafeed.status_show" style="border: solid 1px #e4e4e4; background: #fff;">\n                            <div class="disshowimg" *ngIf="!datafeed.status_show"></div>\n                            <div *ngIf="datafeed.status_show">\n                                <!--  data profile normal user  -->\n                                <ion-grid style="padding: 0; height: 45px;" (click)="NextPage(\'ProfilePage\',datafeed)" id="gridDetail" *ngIf="datafeed.user_id != \'TAT\'">\n                                    <ion-row>\n                                        <ion-col col-3 id="gridCol3">\n                                            <img class="imgpro1" [src]="datafeed.user_img" id="dImg" onError="src = \'./assets/imgs/onError.png\'" />\n                                        </ion-col>\n                                        <ion-col col-9 style="margin: auto; color: white; padding: 0px;" id="gridCol">\n                                            <div class="fullname">\n                                                <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_firstname"></span>\n                                                <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_lastname"></span>\n                                            </div>\n                                            <div class="location fromName" style="width: 100%;" style="color: #9e9e9e;">\n                                                <span style="letter-spacing: 0.1px !important;" class="colorCountry">{{datafeed.country_name_en}} </span>\n                                                <span>&bull;</span>\n                                                <span style="letter-spacing: 0.1px !important;font-size: 12px !important;">{{datafeed.time}}</span>\n                                            </div>\n                                        </ion-col>\n                                    </ion-row>\n                                    <!-- <ion-row *ngIf="">\n                  <ion-col col-2 id="gridCol3" style="display: grid;">\n                    <img class="imgpro" [src]="datafeed.user_img" id="dImg" onError="src = \'./assets/imgs/onError.png\'" style="margin: auto;"\n                    />\n                  </ion-col>\n                  <ion-col col-10 style="margin: auto;color:white;padding: 0px;" id="gridCol">\n                    <div class="fullname">\n                      <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_firstname"> </span>\n                      <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_lastname"></span>\n                    </div>\n                    <div class="location fromName" style="width: 100%" style="color: #9e9e9e;">\n                      <span style="letter-spacing: 0.1px !important;" class="colorCountry">{{datafeed.country_name_en}}\n                      </span>\n                      <span>&bull;</span>\n                      <span style="letter-spacing: 0.1px !important;font-size: 12px !important;">{{datafeed.time}}</span>\n                    </div>\n                  </ion-col>\n                </ion-row> -->\n                                </ion-grid>\n                                <!-- data profile normal user -->\n\n                                <!-- data profile TAT user -->\n                                <ion-grid style="padding: 0; height: 45px;" id="gridDetail" *ngIf="datafeed.user_id == \'TAT\'">\n                                    <ion-row>\n                                        <ion-col col-3 id="gridCol3">\n                                            <img class="imgpro1" [src]="datafeed.user_img" id="dImg" onError="src = \'./assets/imgs/onError.png\'" />\n                                        </ion-col>\n                                        <ion-col col-9 style="margin: auto; color: white;" id="gridCol">\n                                            <div class="fullname" style="width: 100%;" style="color: #565656; font-size: 11px;">\n                                                <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_firstname"></span>\n                                                <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_lastname"></span>\n                                            </div>\n                                            <div class="location fromName" style="width: 100%;">\n                                                <span style="letter-spacing: 0.1px !important;" class="colorCountry">{{datafeed.country_name_en}}</span>\n                                            </div>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                                <!-- data profile TAT user -->\n\n                                <!-- caption -->\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col col-12 style="padding: 0; height: 100%; font-size: 14px;">\n                                            <div class="Museo color4D caption" [innerHtml]="datafeed.hashtag"></div>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                                <!-- caption -->\n                            </div>\n\n                            <!-- photo -->\n                            <div style="position: relative;" *ngIf="datafeed.status_show">\n                                <div class="frameHeart">\n                                    <img src="./assets/icon/icon-hearts6t.png" alt="" (click)="bookmark(datafeed,1,i,2)" *ngIf="datafeed.status_bookmark" style="width: 22px;" />\n                                    <img src="./assets/icon/icon-hearts6.png" alt="" (click)="bookmark(datafeed,2,i,2)" *ngIf="!datafeed.status_bookmark" style="width: 22px;" />\n                                </div>\n                                <div class="frameFeel" *ngIf="datafeed.user_id != \'TAT\' && datafeed.status_show">\n                                    <span class="frameFeeling">{{datafeed.feeling_name}}</span>\n                                </div>\n                                <div style="background: #e6e6e6;" id="image">\n                                    <div class="img-post-two">\n                                        <img class="img-post-two" *ngIf="datafeed.checkCard == 0 && datafeed.pictureResize[0].type == 1" (click)="NextPage(\'DetailfeedPage\',datafeed)" [src]="datafeed.pictureResize[0].path_resize" />\n                                        <video id="video" (click)="NextPage(\'DetailfeedPage\',datafeed)" controls preload="metadata" playsinline *ngIf="datafeed.pictureResize[0].type == 2" alt="" style="width: 100%;height: 100%;object-fit: cover;">\n                                            <source [src]="datafeed.pictureResize[0].path_resize "  type="video/mp4" />\n                                        </video>\n                                    </div>\n                                    <div class="photoAll" *ngIf="datafeed.pictureResize.length > 1">\n                                        <div class="textPhotoGroup">\n                                            <img style="border-radius: unset;width: 19px;vertical-align: middle;" src="./assets/icon/photoAll.svg" alt="" />\n                                            <span class="div-all-photo">All Photo({{datafeed.pictureResize.length}})</span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- <div *ngIf="datafeed.user_id == \'TAT\'" style="background: #e6e6e6;" id="image">\n                <div *ngIf="datafeed.checkCard == 0" [ngStyle]="{ \'background\': \'url(\'+datafeed.pictureResize[0].path_full+\')\'}" class="bgList"\n                  style="padding-top: 100%;" (click)="NextPage(\'DetailfeedPage\',datafeed)"></div>\n                <div class="photoAll" *ngIf="datafeed.pictureResize.length > 1">\n                  <div class="textPhotoGroup">\n                    <img style="border-radius: unset;width: 19px;vertical-align: middle;" src="./assets/icon/photoAll.svg" alt="">\n                    <span class="div-all-photo">All Photo({{datafeed.pictureResize.length}})</span>\n                  </div>\n                </div>\n              </div> -->\n                                <div id="tabProfile" class="ChildNewfeed" style="position: absolute; bottom: 0px; width: 100%;" *ngIf="datafeed.status_show"></div>\n                            </div>\n                            <!-- photo -->\n\n                            <!-- location, coconuts, comments -->\n                            <div *ngIf="datafeed.status_show" id="detailcard">\n                                <ion-grid style="padding-top: 5px;padding-bottom: 5px; max-height: 45px;min-height: 45px;border-bottom: 1px solid #f5f5f5;padding: 0px;background: #f7f7f7;position: relative; font-size: 14px;">\n                                    <i class="icon_map icon15"></i>\n                                    <ion-row (click)="NextPage(\'TouristPage\',datafeed)" style="padding-top: 8px;">\n                                        <ion-col col-8 style="padding: 0;">\n                                            <span class="color87 locations" style="margin-left: 20px;" [innerHTML]="datafeed.photo_location"></span>\n                                        </ion-col>\n                                        <ion-col col-4 style="padding: 0;padding: 0;text-align: right;font-weight: bolder;">\n                                            <span class="location distant" style="position: absolute;right: 5px;bottom: 0;color: #72c2ff;width: 100% !important;">{{datafeed.distant}} km.</span>\n                                        </ion-col>\n                                    </ion-row>\n                                    <ion-row (click)="NextPage(\'TouristPage\',datafeed)">\n                                        <ion-col col-12 style="padding: 0;">\n                                            <span class="location" style="margin-left: 20px; padding-bottom: 5px;">{{datafeed.photo_province}}</span>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                                <ion-grid style="padding-top: 12px; padding-bottom: 12px; padding-left: 12px;" class="threeIcon">\n                                    <ion-row class="FSitalic font12">\n                                        <ion-col col-6 style="position: relative; padding: 0;" class="col_fix1">\n                                            <img src="./img/icon_coconut_gray.svg" style="width: 15px; vertical-align: middle;" alt="" (click)="like(datafeed,2,i,2)" *ngIf="!datafeed.status_like" />\n                                            <div id="like{{datafeed.photo_id}}" *ngIf="datafeed.status_like" style="display: inline-block;" (click)="like(datafeed,1,i,2)">\n                                                <img src="./img/icon_coconut.png" style="width: 15px; vertical-align: middle;" alt="" />\n                                                <span class="like-iconTNew">\n                                                    <div class="heart-animation-1"></div>\n                                                    <div class="heart-animation-2"></div>\n                                                </span>\n                                            </div>\n                                            <div style="display: inline-block;position: relative;height: 16px;vertical-align: middle;margin-left: -10px;" *ngIf="datafeed.imageLike.length != 0 && datafeed.user_id != \'TAT\'">\n                                                <div class="userLike" style="display: grid;min-width: 16px;height: 16px;font-size: 10px;">\n                                                    <span class="sumLike" style="font-size: 10px;">{{datafeed.sum_like}}</span>\n                                                </div>\n                                            </div>\n                                            <span style="font-style: normal;font-size: 10px;font-weight: bold;vertical-align: middle;" (click)="like(datafeed,2,i,2)" *ngIf="!datafeed.status_like" class="fontnormal">Coconut</span>\n                                            <span style="font-style: normal;font-size: 10px;font-weight: bold;vertical-align: middle;" *ngIf="datafeed.status_like" (click)="like(datafeed,1,i,2)" class="fontnormal">Coconut</span>\n                                        </ion-col>\n                                        <ion-col col-6 style="position: relative; padding: 0;" (click)="NextPage(\'viewComment\',datafeed)">\n                                            <img src="./assets/icon/icon-comment-new-f.svg" alt="" style="width: 15px; vertical-align: middle;" *ngIf="!datafeed.status_comment" />\n                                            <img src="./assets/icon/icon-comment-new-t.svg" alt="" style="width: 15px; vertical-align: middle;" *ngIf="datafeed.status_comment" />\n                                            <div style=" display: inline-block;position: relative;height: 16px;min-width: 8px;vertical-align: middle;margin-left: -10px;">\n                                                <div *ngIf="datafeed.countComment != 0" class="userLike" style="display: grid;min-width: 16px;height: 16px;font-size: 10px;">\n                                                    <span class="sumLike" style="font-size: 10px;">{{datafeed.countComment}}</span>\n                                                </div>\n                                            </div>\n                                            <span style=" font-style: normal; font-size: 10px; font-weight: bold; vertical-align: middle;" class="fontnormal">Comment</span>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n\n                                <hr style="margin: 0 5px; background: #e4e4e4; height: 1px;" />\n                                <ion-grid (click)="NextPage(\'viewComment\',datafeed)" class="" no-padding>\n                                    <ion-row class="font_10" *ngIf="datafeed.userIdComment != \'\'">\n                                        <ion-col col-3 style="display: inline-flex;">\n                                            <div class="borderimgage inlineBlog" style="display: inline-block; margin: auto;">\n                                                <img class="imgpro1" id="img_profile" [src]="datafeed.comment_user_img" style="vertical-align: middle; border: none;" />\n                                            </div>\n                                        </ion-col>\n                                        <ion-col class="padding_5" col-9 style="display: inline-flex;">\n                                            <div class="commentBg" style="display: inline-block;max-width: 95%; vertical-align: middle;margin: auto;padding: 5px 10px;margin-left: 0px;">\n                                                <p class="location namecomment" style="width: 100%; margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.fulnameComment"></p>\n                                                <p class="location" style="width: 100%; margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.comment"></p>\n                                            </div>\n                                        </ion-col>\n                                    </ion-row>\n                                    <ion-row *ngIf="datafeed.userIdComment == \'\' || datafeed.userIdComment == undefined" class="font_10">\n                                        <ion-col col-3 style="display: inline-flex;">\n                                            <div class="borderimgage inlineBlog" style="display: inline-block; margin: auto;">\n                                                <img class="imgpro1" id="img_profile" [src]="gd.userProfile.user_path_img" style=" vertical-align: middle;border: none; " />\n                                            </div>\n                                        </ion-col>\n                                        <ion-col class="padding_5" col-9 style="display: inline-flex;">\n                                            <div class="borderinput commentbord" style="display: inline-block;width: 100%;vertical-align: middle;margin: auto;">\n                                                <input type="text" disabled class="inputComment" value="Write a comment" style="border: unset !important;" />\n                                            </div>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </div>\n                            <!-- location, coconuts, comments -->\n\n                        </div>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <!-- data single style -->\n            <ion-row *ngIf="favType == 1">\n                <ion-col *ngFor="let datafeed of footprintList;let i = index;" no-padding col-12>\n                    <div style="padding: 0px; padding-bottom: 5px; padding-right: 5px;">\n                        <div *ngIf="datafeed.checkshow == 0 && datafeed.status_show" style="border: solid 1px #e4e4e4; background: #fff;">\n                            <div class="disshowimg" *ngIf="!datafeed.status_show"></div>\n                            <div *ngIf="datafeed.status_show">\n                                <!--  data profile normal user  -->\n                                <ion-grid style="padding: 0; height: 45px;" (click)="NextPage(\'ProfilePage\',datafeed)" id="gridDetail" *ngIf="datafeed.user_id != \'TAT\'">\n                                    <ion-row>\n                                        <ion-col col-2 id="gridCol3" style="text-align: center;">\n                                            <img class="imgpro2" [src]="datafeed.user_img" id="dImg" onError="src = \'./assets/imgs/onError.png\'" />\n                                        </ion-col>\n                                        <ion-col col-10 style="margin: auto; color: white; padding: 0px;" id="gridCol">\n                                            <div class="fullname">\n                                                <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_firstname"></span>\n                                                <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_lastname"></span>\n                                            </div>\n                                            <div class="location fromName" style="width: 100%;" style="color: #9e9e9e;">\n                                                <span style="letter-spacing: 0.1px !important;" class="colorCountry">{{datafeed.country_name_en}}</span>\n                                                <span>&bull;</span>\n                                                <span style=" letter-spacing: 0.1px !important;font-size: 12px !important;">{{datafeed.time}}</span>\n                                            </div>\n                                        </ion-col>\n                                    </ion-row>\n                                    <!-- <ion-row *ngIf="">\n                  <ion-col col-2 id="gridCol3" style="display: grid;">\n                    <img class="imgpro" [src]="datafeed.user_img" id="dImg" onError="src = \'./assets/imgs/onError.png\'" style="margin: auto;"\n                    />\n                  </ion-col>\n                  <ion-col col-10 style="margin: auto;color:white;padding: 0px;" id="gridCol">\n                    <div class="fullname">\n                      <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_firstname"> </span>\n                      <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_lastname"></span>\n                    </div>\n                    <div class="location fromName" style="width: 100%" style="color: #9e9e9e;">\n                      <span style="letter-spacing: 0.1px !important;" class="colorCountry">{{datafeed.country_name_en}}\n                      </span>\n                      <span>&bull;</span>\n                      <span style="letter-spacing: 0.1px !important;font-size: 12px !important;">{{datafeed.time}}</span>\n                    </div>\n                  </ion-col>\n                </ion-row> -->\n                                </ion-grid>\n                                <!-- data profile normal user -->\n\n                                <!-- data profile TAT user -->\n                                <ion-grid style="padding: 0; height: 45px;" id="gridDetail" *ngIf="datafeed.user_id == \'TAT\'">\n                                    <ion-row>\n                                        <ion-col col-3 id="gridCol3">\n                                            <img class="imgpro2" [src]="datafeed.user_img" id="dImg" onError="src = \'./assets/imgs/onError.png\'" />\n                                        </ion-col>\n                                        <ion-col col-9 style="margin: auto; color: white;" id="gridCol">\n                                            <div class="fullname" style="width: 100%;" style="color: #565656; font-size: 11px;">\n                                                <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_firstname">\n                        </span>\n                                                <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_lastname"></span>\n                                            </div>\n                                            <div class="location fromName" style="width: 100%;">\n                                                <span style="letter-spacing: 0.1px !important;" class="colorCountry">{{datafeed.country_name_en}}\n                        </span>\n                                            </div>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                                <!-- data profile TAT user -->\n\n                                <!-- caption -->\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col col-12 style="padding: 0; height: 100%; font-size: 14px;">\n                                            <div class="Museo color4D caption" [innerHtml]="datafeed.hashtag"></div>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                                <!-- caption -->\n                            </div>\n\n                            <!-- photo -->\n                            <div style="position: relative;" *ngIf="datafeed.status_show">\n                                <div class="frameHeart">\n                                    <img src="./assets/icon/icon-hearts6t.png" alt="" (click)="bookmark(datafeed,1,i,2)" *ngIf="datafeed.status_bookmark" style="width: 22px;" />\n                                    <img src="./assets/icon/icon-hearts6.png" alt="" (click)="bookmark(datafeed,2,i,2)" *ngIf="!datafeed.status_bookmark" style="width: 22px;" />\n                                </div>\n                                <div class="frameFeel" *ngIf="datafeed.user_id != \'TAT\' && datafeed.status_show">\n                                    <span class="frameFeeling">{{datafeed.feeling_name}}</span>\n                                </div>\n                                <div style="background: #e6e6e6;" id="image">\n                                    <div [ngStyle]="{ \'height\': \'300px\', \'object-fit\': \'cover\'}">\n                                        <img [ngStyle]="{ \'height\': \'300px\', \'object-fit\': \'cover\'}" *ngIf="datafeed.checkCard == 0 && datafeed.pictureResize[0].type == 1" class="" (click)="NextPage(\'DetailfeedPage\',datafeed)" [src]="datafeed.pictureResize[0].path_resize" alt="" style="width: 100%;"\n                                        />\n                                        <video id="video" (click)="NextPage(\'DetailfeedPage\',datafeed)" controls preload="metadata" playsinline *ngIf="datafeed.pictureResize[0].type == 2" alt="" style="width: 100%;height: 100%;object-fit: cover;">\n                                            <source [src]="datafeed.pictureResize[0].path_resize "  type="video/mp4" />\n                                        </video>\n                                    </div>\n                                    <div class="photoAll" *ngIf="datafeed.pictureResize.length > 1">\n                                        <div class="textPhotoGroup">\n                                            <img style="border-radius: unset;width: 19px;vertical-align: middle; " src="./assets/icon/photoAll.svg" alt="" />\n                                            <span style="vertical-align: bottom;font-size: 14px;font-weight: normal;">All Photo({{datafeed.pictureResize.length}})</span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- <div *ngIf="datafeed.user_id == \'TAT\'" style="background: #e6e6e6;" id="image">\n                <div *ngIf="datafeed.checkCard == 0" [ngStyle]="{ \'background\': \'url(\'+datafeed.pictureResize[0].path_full+\')\'}" class="bgList"\n                  style="padding-top: 100%;" (click)="NextPage(\'DetailfeedPage\',datafeed)"></div>\n                <div class="photoAll" *ngIf="datafeed.pictureResize.length > 1">\n                  <div class="textPhotoGroup">\n                    <img style="border-radius: unset;width: 19px;vertical-align: middle;" src="./assets/icon/photoAll.svg" alt="">\n                    <span class="span-all-photo">All Photo({{datafeed.pictureResize.length}})</span>\n                  </div>\n                </div>\n              </div> -->\n                                <div id="tabProfile" class="ChildNewfeed" style="position: absolute; bottom: 0px; width: 100%;" *ngIf="datafeed.status_show"></div>\n                            </div>\n                            <!-- photo -->\n\n                            <!-- location, coconuts, comments -->\n                            <div *ngIf="datafeed.status_show" id="detailcard">\n                                <ion-grid style="padding-top: 5px; padding-bottom: 5px;max-height: 45px;min-height: 45px;border-bottom: 1px solid #f5f5f5;padding: 0px; background: #f7f7f7;position: relative;font-size: 14px; ">\n                                    <i class="icon_map icon15"></i>\n                                    <ion-row (click)="NextPage(\'TouristPage\',datafeed)" style="padding-top: 8px;">\n                                        <ion-col col-8 style="padding: 0;">\n                                            <span class="color87 locations" style="margin-left: 20px;" [innerHTML]="datafeed.photo_location"></span>\n                                        </ion-col>\n                                        <ion-col col-4 style=" padding: 0; padding: 0;text-align: right;font-weight: bolder;">\n                                            <span class="location distant" style="position: absolute;right: 5px;bottom: 0;color: #72c2ff;width: 100% !important;">{{datafeed.distant}} km.</span>\n                                        </ion-col>\n                                    </ion-row>\n                                    <ion-row (click)="NextPage(\'TouristPage\',datafeed)">\n                                        <ion-col col-12 style="padding: 0;">\n                                            <span class="location" style="margin-left: 20px; padding-bottom: 5px;">{{datafeed.photo_province}}</span>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                                <ion-grid style="padding-top: 12px; padding-bottom: 12px; padding-left: 12px;" class="threeIcon">\n                                    <ion-row class="FSitalic font12">\n                                        <ion-col col-6 style="position: relative; padding: 0;" class="col_fix1">\n                                            <img src="./img/icon_coconut_gray.svg" style="width: 20px; vertical-align: middle;" alt="" (click)="like(datafeed,2,i,2)" *ngIf="!datafeed.status_like" />\n                                            <div id="like{{datafeed.photo_id}}" *ngIf="datafeed.status_like" style="display: inline-block;" (click)="like(datafeed,1,i,2)">\n                                                <img src="./img/icon_coconut.png" style="width: 20px; vertical-align: middle;" alt="" />\n                                                <span class="like-iconTNew"><div class="heart-animation-1"></div><div class="heart-animation-2"></div></span>\n                                            </div>\n                                            <div style="display: inline-block;position: relative;height: 20px;vertical-align: middle; margin-left: -10px;" *ngIf="datafeed.imageLike.length != 0 && datafeed.user_id != \'TAT\'">\n                                                <div class="userLike" style=" display: grid; min-width: 20px;height: 20px;font-size: 16px;">\n                                                    <span class="sumLike" style="font-size: 12px;">{{datafeed.sum_like}}</span>\n                                                </div>\n                                            </div>\n                                            <span style="font-style: normal;font-size: 13px;font-weight: bold;vertical-align: middle;" (click)="like(datafeed,2,i,2)" *ngIf="!datafeed.status_like" class="fontnormal">Coconut</span>\n                                            <span style="  font-style: normal;font-size: 13px;font-weight: bold;vertical-align: middle;" *ngIf="datafeed.status_like" (click)="like(datafeed,1,i,2)" class="fontnormal">Coconut</span>\n                                        </ion-col>\n                                        <ion-col col-6 style="position: relative; padding: 0;" (click)="NextPage(\'viewComment\',datafeed)">\n                                            <img src="./assets/icon/icon-comment-new-f.svg" alt="" style="width: 20px; vertical-align: middle;" *ngIf="!datafeed.status_comment" />\n                                            <img src="./assets/icon/icon-comment-new-t.svg" alt="" style="width: 20px; vertical-align: middle;" *ngIf="datafeed.status_comment" />\n\n                                            <div style=" display: inline-block; position: relative;height: 20px; min-width: 8px;vertical-align: middle;margin-left: -10px;">\n                                                <div *ngIf="datafeed.countComment != 0" class="userLike" style="display: grid;min-width: 20px;height: 20px;font-size: 16px;">\n                                                    <span class="sumLike" style="font-size: 12px;">{{datafeed.countComment}}</span>\n                                                </div>\n                                            </div>\n                                            <span style="font-style: normal;vertical-align: middle;font-size: 13px;font-weight: bold;" class="fontnormal">Comment</span>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n\n                                <hr style="margin: 0 5px; background: #e4e4e4; height: 1px;" />\n                                <ion-grid (click)="NextPage(\'viewComment\',datafeed)" class="" no-padding>\n                                    <ion-row class="font_10" *ngIf="datafeed.userIdComment != \'\'">\n                                        <ion-col col-2 style="display: inline-flex;" no-padding>\n                                            <div class="borderimgage inlineBlog" style="display: inline-block; margin: auto;">\n                                                <img class="imgpro2" id="img_profile" [src]="datafeed.comment_user_img" style="vertical-align: middle; border: none;" />\n                                            </div>\n                                        </ion-col>\n                                        <ion-col class="5" col-10 style="display: inline-flex;">\n                                            <div class="commentBg" style="display: inline-block;max-width: 95%;vertical-align: middle;margin: auto; padding: 5px 10px; margin-left: 0px;">\n                                                <p class="location namecomment" style="width: 100%; margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.fulnameComment"></p>\n                                                <p class="location" style="width: 100%;margin: 0px; font-size: 12px !important;" [innerHtml]="datafeed.comment"></p>\n                                            </div>\n                                        </ion-col>\n                                    </ion-row>\n                                    <ion-row class="font_10">\n                                        <ion-col col-2 style="display: inline-flex;" no-pdding>\n                                            <div class="borderimgage inlineBlog" style="display: inline-block; margin: auto;">\n                                                <img class="imgpro2" id="img_profile" [src]="gd.userProfile.user_path_img" style=" vertical-align: middle;border: none;" />\n                                            </div>\n                                        </ion-col>\n                                        <ion-col class="padding_5" col-10 style="display: inline-flex;">\n                                            <div class="borderinput commentbord" style="display: inline-block;width: 100%;vertical-align: middle;margin: auto;">\n                                                <input type="text" disabled class="inputComment" value="Write a comment" style="border: unset !important;" />\n                                            </div>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </div>\n                            <!-- location, coconuts, comments -->\n\n                        </div>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n\n        <!-- <div *ngFor="let datafeed of footprintList;let i = index;" style="padding: 0px;padding-bottom: 5px;padding-right: 5px;" [ngClass]="feedType == 0 ? \'widthTest\' : \'\'">\n      <div *ngIf="datafeed.checkshow == 0" style="border: solid 1px #e4e4e4;background: #fff;">\n        <div class="disshowimg" *ngIf="!datafeed.status_show"></div>\n        <div *ngIf="datafeed.status_show">\n          <ion-grid style=" padding:  0;height: 45px;" (click)="NextPage(\'ProfilePage\',datafeed)" id="gridDetail" *ngIf="datafeed.user_id != \'TAT\'">\n            <ion-row *ngIf="feedType == 0">\n              <ion-col col-3 id="gridCol3">\n                <img class="imgpro" [src]="datafeed.user_img" id="dImg" onError="src = \'./assets/imgs/onError.png\'" />\n              </ion-col>\n              <ion-col col-9 style="margin: auto;color:white;padding: 0px;" id="gridCol">\n                <div class="fullname">\n                  <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_firstname"> </span>\n                  <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_lastname"></span>\n                </div>\n                <div class="location fromName" style="width: 100%" style="color: #9e9e9e;">\n                  <span style="letter-spacing: 0.1px !important;" class="colorCountry">{{datafeed.country_name_en}}\n                  </span>\n                  <span>&bull;</span>\n                  <span style="letter-spacing: 0.1px !important;font-size: 12px !important;">{{datafeed.time}}</span>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngIf="feedType == 1">\n              <ion-col col-2 id="gridCol3" style="display: grid;">\n                <img class="imgpro" [src]="datafeed.user_img" id="dImg" onError="src = \'./assets/imgs/onError.png\'" style="margin: auto;"\n                />\n              </ion-col>\n              <ion-col col-10 style="margin: auto;color:white;padding: 0px;" id="gridCol">\n                <div class="fullname">\n                  <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_firstname"> </span>\n                  <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_lastname"></span>\n                </div>\n                <div class="location fromName" style="width: 100%" style="color: #9e9e9e;">\n                  <span style="letter-spacing: 0.1px !important;" class="colorCountry">{{datafeed.country_name_en}}\n                  </span>\n                  <span>&bull;</span>\n                  <span style="letter-spacing: 0.1px !important;font-size: 12px !important;">{{datafeed.time}}</span>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-grid style=" padding:  0;height: 45px;" id="gridDetail" *ngIf="datafeed.user_id == \'TAT\'">\n            <ion-row>\n              <ion-col col-3 id="gridCol3">\n                <img class="imgpro" [src]="datafeed.user_img" id="dImg" onError="src = \'./assets/imgs/onError.png\'" />\n              </ion-col>\n              <ion-col col-9 style="margin: auto;color:white;" id="gridCol">\n                <div class="fullname" style="width: 100%" style="color: #565656;font-size: 11px;">\n                  <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_firstname"> </span>\n                  <span style="letter-spacing: 0.1px !important;" [innerHtml]="datafeed.user_lastname"></span>\n                </div>\n                <div class="location fromName" style="width: 100%">\n                  <span style="letter-spacing: 0.1px !important;" class="colorCountry">{{datafeed.country_name_en}}\n                  </span>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-grid style="padding-top: 0;">\n            <ion-row>\n              <ion-col col-12 style="padding: 0;height: 100%;font-size: 14px;">\n                <div class="Museo color4D caption" [innerHtml]="datafeed.hashtag"></div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n        <div style="position: relative;" *ngIf="datafeed.status_show">\n          <div class="frameHeart">\n            <img src="./assets/icon/Icon-heart_t.svg" alt="" (click)="bookmark(datafeed,1,i,2)" *ngIf="datafeed.status_bookmark && datafeed.user_id != \'TAT\'"\n              style="width: 28px;">\n            <img src="./assets/icon/Icon-heart_f.svg" alt="" (click)="bookmark(datafeed,2,i,2)" *ngIf="!datafeed.status_bookmark && datafeed.user_id != \'TAT\'"\n              style="width: 28px;">\n          </div>\n          <div class="frameFeel" *ngIf="datafeed.user_id != \'TAT\' && datafeed.status_show">\n            <span class="frameFeeling">{{datafeed.feeling_name}}</span>\n          </div>\n          <div *ngIf="datafeed.user_id != \'TAT\'" style="background: #e6e6e6;border-radius: 5px;" id="image">\n            <div *ngIf="datafeed.checkCard == 0" [ngStyle]="{\n                                          \'background\': \'url(\'+datafeed.pictureResize[0].path_full+\')\'}" class="bgList" style="padding-top: 100%;"\n              (click)="NextPage(\'DetailfeedPage\',datafeed)"></div>\n          </div>\n          <div *ngIf="datafeed.user_id == \'TAT\'" style="background: #e6e6e6;border-radius: 5px;" id="image">\n            <div *ngIf="datafeed.checkCard == 0" [ngStyle]="{\n                                              \'background\': \'url(\'+datafeed.pictureResize[0].path_full+\')\'}" class="bgList" style="padding-top: 100%;"\n              (click)="NextPage(\'DetailfeedPage\',datafeed)"></div>\n          </div>\n          <div id="tabProfile" class="ChildNewfeed" style="position: absolute;bottom: 0px; width: 100%;" *ngIf="datafeed.status_show">\n          </div>\n        </div>\n        <div *ngIf="datafeed.status_show" id="detailcard">\n          <ion-grid style="padding-top: 5px;padding-bottom: 5px;max-height: 45px;min-height: 45px;border-bottom: 1px solid #f5f5f5;padding: 0px;background: #f7f7f7;position: relative;font-size: 14px;;">\n            <i class="icon_map icon15"></i>\n            <ion-row (click)="NextPage(\'TouristPage\',datafeed)" style="padding-top: 8px;">\n              <ion-col col-8 style="padding: 0;">\n                <span class="color87 locations" style="margin-left: 20px;" [innerHTML]="datafeed.photo_location"></span>\n              </ion-col>\n              <ion-col col-4 style="padding: 0;padding: 0;text-align: right;font-weight: bolder;">\n                <span class="location distant" style="position: absolute;right: 5px;bottom: 0;color: #72c2ff;width: 100% !important;">{{datafeed.distant}} km.\n                </span>\n              </ion-col>\n            </ion-row>\n            <ion-row (click)="NextPage(\'TouristPage\',datafeed)">\n              <ion-col col-12 style="padding: 0;">\n                <span class="location" style="margin-left: 20px;padding-bottom: 5px;">\n                  {{datafeed.photo_province}}</span>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n          <ion-grid style="padding-top: 8px;padding-bottom: 8px;" *ngIf="datafeed.user_id != \'TAT\'" class="threeIcon">\n            <ion-row class="FSitalic font12">\n              <ion-col col-12 style="position: relative;padding: 0;" class="col_fix1">\n                <img src="./img/icon_coconut_gray.svg" style="width: 15px;vertical-align: middle;" alt="" (click)="like(datafeed,2,i,2)"\n                  *ngIf="!datafeed.status_like && datafeed.user_id != \'TAT\'">\n                <div id="like{{datafeed.photo_id}}" *ngIf="datafeed.status_like && datafeed.user_id != \'TAT\'" style="display: inline-block ;"\n                  (click)="like(datafeed,1,i,2)">\n                  <img src="./img/icon_coconut.png" style="width: 15px;vertical-align: middle;" alt="">\n                  <span class=\'like-iconTNew\'>\n                    <div class=\'heart-animation-1\'></div>\n                    <div class=\'heart-animation-2\'></div>\n                  </span>\n                </div>\n                <div style="display: inline-block;position: relative;width: 25px;height: 15px;vertical-align: middle;left: -5px;" *ngIf="datafeed.imageLike.length != 0 && datafeed.user_id != \'TAT\'"\n                  [ngClass]="[(datafeed.imageLike.length == 1) ? \'Like1Users\' : \'\',  (datafeed.imageLike.length == 2) ? \'Like2Users\': \'\', (datafeed.imageLike.length > 2) ? \'Like3Users\' : \'\']">\n                  <div class="userLike" *ngIf="datafeed.imageLike[0]" [ngStyle]="{\'background\': \'url(\'+datafeed.imageLike[0]+\')\'}"></div>\n                  <div class="userLike" style="left: 5px;" *ngIf="datafeed.imageLike[1]" [ngStyle]="{\'background\': \'url(\'+datafeed.imageLike[1]+\')\'}"></div>\n                  <div class="userLike" style="left: 10px;display: grid;" *ngIf="datafeed.imageLike[2]">\n                    <div style="margin: auto;font-size: 8px;font-style: normal;">+</div>\n                  </div>\n                </div>\n                <span style="font-style: normal;font-size: 10px;font-weight: bold;" (click)="like(datafeed,2,i,2)" *ngIf="!datafeed.status_like && datafeed.user_id != \'TAT\'"\n                  class="fontnormal" [ngClass]="datafeed.imageLike.length == 0 ? \'\' : datafeed.imageLike.length == 1 ? \'margin1\' : datafeed.imageLike.length == 2 ? \'margin2\' : datafeed.imageLike.length == 3 ? \'margin3\' : \'\' ">Coconut</span>\n                <span style="font-style: normal;font-size: 10px;font-weight: bold;" *ngIf="datafeed.status_like && datafeed.user_id != \'TAT\'"\n                  (click)="like(datafeed,1,i,2)" class="fontnormal" [ngClass]="datafeed.imageLike.length == 0 ? \'\' : datafeed.imageLike.length == 1 ? \'margin1\' : datafeed.imageLike.length == 2 ? \'margin2\' : datafeed.imageLike.length == 3 ? \'margin3\' : \'\' ">Coconut</span>\n                <span style="margin-left: 10px;">\n                  <img src="./assets/icon/icon-comment-new-f.svg" alt="" style="width: 13px;vertical-align: middle;" *ngIf="datafeed.countComment == 0">\n                  <img src="./assets/icon/icon-comment-new-t.svg" alt="" style="width: 13px;vertical-align: middle;" *ngIf="datafeed.countComment != 0">\n                  <span style="font-style: normal;vertical-align: middle;font-size: 10px;font-weight: bold;" class="fontnormal">Comment</span>\n                </span>\n              </ion-col>\n            </ion-row>\n\n          </ion-grid>\n\n          <hr style="margin: 0 5px;background: #e4e4e4;height: 1px;">\n          <ion-grid *ngIf="datafeed.user_id != \'TAT\'" (click)="NextPage(\'viewComment\',datafeed)" class="maxHeigth">\n            <ion-row class="font_10" *ngIf="datafeed.userIdComment != \'\' && feedType == 0">\n              <ion-col col-3 style="display: grid;">\n                <div class="borderimgage inlineBlog" style="display: inline-block;margin: auto;">\n                  <img class="imgpro" id="img_profile" [src]="datafeed.comment_user_img" style="vertical-align: middle;height: 28px;width: 28px;border: none;"\n                  />\n                </div>\n              </ion-col>\n              <ion-col class="padding_0" col-9 style="display: grid;">\n                <div class="commentBg" style="display: inline-block;width: 100%; vertical-align: middle;margin: auto;padding: 5px;">\n                  <p class="location namecomment" style="width: 100%;margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.fulnameComment"></p>\n                  <p class="location" style="width: 100%;margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.comment">\n                  </p>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row class="font_10" *ngIf="datafeed.userIdComment != \'\' && feedType == 1">\n              <ion-col col-2 style="display: grid;">\n                <div class="borderimgage inlineBlog" style="display: inline-block;margin: auto;">\n                  <img class="imgpro" id="img_profile" [src]="datafeed.comment_user_img" style="vertical-align: middle;height: 28px;width: 28px;border: none;"\n                  />\n                </div>\n              </ion-col>\n              <ion-col class="padding_0" col-10 style="display: grid;">\n                <div class="commentBg" style="display: inline-block;width: 100%; vertical-align: middle;margin: auto;padding:5px;">\n                  <p class="location namecomment" style="width: 100%;margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.fulnameComment"></p>\n                  <p class="location" style="width: 100%;margin: 0px;font-size: 12px !important;" [innerHtml]="datafeed.comment">\n                  </p>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row class="font_10" *ngIf="datafeed.countComment == 0 && feedType == 0">\n              <ion-col col-3 style="display: grid;">\n                <div class="borderimgage inlineBlog" style="display: inline-block;margin: auto;">\n                  <img class="imgpro" id="img_profile" [src]="gd.userProfile.user_path_img" style="vertical-align: middle;height: 28px;width: 28px;border: none;"\n                  />\n                </div>\n              </ion-col>\n              <ion-col class="padding_0" col-9 style="display: grid;">\n                <div class="borderinput commentbord" style="display: inline-block;width: 100%;vertical-align: middle;margin: auto;">\n                  <input type="text" disabled class="inputComment" value="Write a comment" style="border:unset !important;">\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row class="font_10" *ngIf="datafeed.countComment == 0 && feedType == 1">\n              <ion-col col-2 style="display: grid;">\n                <div class="borderimgage inlineBlog" style="display: inline-block;margin: auto;">\n                  <img class="imgpro" id="img_profile" [src]="gd.userProfile.user_path_img" style="vertical-align: middle;height: 28px;width: 28px;border: none;"\n                  />\n                </div>\n              </ion-col>\n              <ion-col class="padding_0" col-10 style="display: grid;">\n                <div class="borderinput commentbord" style="display: inline-block;width: 100%;vertical-align: middle;margin: auto;">\n                  <input type="text" disabled class="inputComment" value="Write a comment" style="border:unset !important;">\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </div>\n    </div> -->\n    </ion-list>\n\n\n\n    <ion-infinite-scroll style="margin-top: 0px; margin-bottom: 20px;" (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content>\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>\n\n<div id="footer" style="z-index: 5;"></div>\n'/*ion-inline-end:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */],
            __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__["a" /* GlobalDataService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=17.js.map