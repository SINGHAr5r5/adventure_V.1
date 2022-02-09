webpackJsonp([16],{

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(578);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterPage = /** @class */ (function () {
    function RegisterPage(camera, actionSheetCtrl, modalCtrl, storage, SFT, gd, formBuilder, navCtrl, navParams) {
        var _this = this;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.SFT = SFT;
        this.gd = gd;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.typeRegister = this.navParams.get("stChooser") ? "2" : "1";
        this.data = {};
        this.STHide = this.gd.showbtn;
        this.countryChooser = "";
        this.locationSet = "";
        this.statusPage = false;
        console.log(this.STHide);
        this.dataFB = this.navParams.get("dataFB");
        console.log(this.dataFB);
        if (this.dataFB != undefined) {
            this.statusPage = true;
        }
        setTimeout(function () {
            _this.country = gd.Country;
        }, 1500);
        console.log(this.country);
        setTimeout(function () {
            console.log("change0 Country", _this.dataGroup2.value);
            __WEBPACK_IMPORTED_MODULE_7_jquery__(".outer").hide();
            select2();
            var t = _this;
            __WEBPACK_IMPORTED_MODULE_7_jquery__(".js-example-basic-single").change(function () {
                console.log("change2 Country", this.dataGroup2.value);
                t.countryChooser = __WEBPACK_IMPORTED_MODULE_7_jquery__(".js-example-basic-single").val();
                t.dataGroup2.patchValue({
                    country: __WEBPACK_IMPORTED_MODULE_7_jquery__(".js-example-basic-single").val(),
                });
            });
        }, 1000);
        this.dataGroup1 = this.formBuilder.group({
            email: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            username: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            conpassword: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
        if (this.STHide == 1) {
            if (this.typeRegister == 2) {
                this.dataGroup2 = this.formBuilder.group({
                    imageData: [""],
                    storeName: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    phone: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    location: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    country: [""],
                    fname: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    lname: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    sex: [""],
                    date: [""],
                    Policy: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    user_type_account: this.gd.user_type_account,
                });
            }
            else {
                this.dataGroup2 = this.formBuilder.group({
                    imageData: [""],
                    country: [""],
                    fname: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    lname: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    date: [""],
                    sex: [""],
                    Policy: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    user_type_account: this.gd.user_type_account,
                });
            }
        }
        else {
            if (this.typeRegister == 2) {
                this.dataGroup2 = this.formBuilder.group({
                    imageData: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    storeName: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    phone: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    country: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    fname: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    lname: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    sex: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    date: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    Policy: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    user_type_account: this.gd.user_type_account,
                });
            }
            else {
                this.dataGroup2 = this.formBuilder.group({
                    imageData: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    country: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    fname: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    lname: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    sex: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    date: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    Policy: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    user_type_account: this.gd.user_type_account,
                });
            }
        }
        if (this.dataFB != undefined) {
            this.data.FBid = this.dataFB.id;
            this.dataGroup1.controls["email"].setValue(this.dataFB.email);
            this.dataGroup1.controls["username"].setValue(this.dataFB.name);
            this.dataGroup1.controls["password"].setValue("fb");
            this.dataGroup1.controls["conpassword"].setValue("fb");
            this.dataGroup2.controls["fname"].setValue(this.dataFB.name.split(" ")[0]);
            this.dataGroup2.controls["lname"].setValue(this.dataFB.name.split(" ")[1]);
            this.dataGroup2.controls["imageData"].setValue(this.dataFB.picture.data.url);
            gd.convertToDataURLviaCanvas(this.dataFB.picture.data.url, "image/jpeg").then(function (base64) {
                _this.dataGroup2.controls["imageData"].setValue(base64);
            });
        }
        setTimeout(function () {
            _this.lockSlide(true);
        }, 1000);
    }
    RegisterPage.prototype.lockSlide = function (status) {
        this.slides.lockSwipeToNext(status);
        this.slides.lockSwipeToPrev(status);
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad RegisterPage");
    };
    RegisterPage.prototype.check1 = function () {
        var _this = this;
        console.log(this.dataGroup1.value);
        var dataGet = this.dataGroup1.value;
        if (dataGet.email == "") {
            this.gd.toast("Please enter your email.");
        }
        else if (!this.gd.ValidateEmail(dataGet.email)) {
            this.gd.toast("Plaease check your email");
        }
        else if (dataGet.username == "") {
            this.gd.toast("Please enter username.");
        }
        else if (!this.gd.checklength(dataGet.username, "6")) {
            this.gd.toast("Username must be more than 6 characters.");
        }
        else if (dataGet.password == "") {
            this.gd.toast("Please enter password.");
        }
        else if (!this.gd.checklength(dataGet.password, "6")) {
            this.gd.toast("Password must be more than 6 characters.");
        }
        else if (dataGet.conpassword == "") {
            this.gd.toast("Please enter Conﬁrm your Password.");
        }
        else if (dataGet.conpassword != dataGet.password) {
            this.gd.toast("Password and confirm password do not match.");
        }
        else {
            console.log(dataGet.email);
            console.log(dataGet.username);
            console.log(dataGet.password);
            console.log(dataGet.conpassword);
            console.log(this.gd.user_type_account, "===========user_type_account==========");
            this.SFT.ServiceThread("ChkEmail", { Email: dataGet.email, user_type_account: this.gd.user_type_account }, "POST").then(function (data) {
                console.log(_this.gd.user_type_account, "++++++++++++++user_type_account+++++++++++++");
                if (data["res_code"] == "00") {
                    _this.gd.toast(data["res_text"]);
                }
                else {
                    _this.statusPage = true;
                    setTimeout(function () {
                        select2();
                        setTimeout(function () {
                            __WEBPACK_IMPORTED_MODULE_7_jquery__(".outer").hide();
                            // select2();
                            var t = _this;
                            __WEBPACK_IMPORTED_MODULE_7_jquery__(".js-example-basic-single").change(function () {
                                t.countryChooser = __WEBPACK_IMPORTED_MODULE_7_jquery__(".js-example-basic-single").val();
                                t.dataGroup2.patchValue({
                                    country: __WEBPACK_IMPORTED_MODULE_7_jquery__(".js-example-basic-single").val(),
                                });
                            });
                        }, 500);
                        _this.lockSlide(false);
                        _this.slides.slideNext();
                        setTimeout(function () {
                            _this.lockSlide(true);
                        }, 1000);
                    }, 500);
                }
            });
        }
    };
    RegisterPage.prototype.check2 = function () {
        console.log(this.dataGroup2.value);
        var dataGet = this.dataGroup2.value;
        if (dataGet.country == "" && dataGet.country == null && this.STHide != 1) {
            this.gd.toast("Please choose your country.");
        }
        else if (dataGet.fname == "") {
            this.gd.toast("Please enter your firstname.");
        }
        else if (dataGet.lname == "") {
            this.gd.toast("Please enter your lastname.");
        }
        else if (dataGet.sex == "" && this.STHide != 1) {
            this.gd.toast("Please choose gender.");
        }
        else if (dataGet.date == "" && this.STHide != 1) {
            this.gd.toast("Please enter your birthday.");
        }
        else if (dataGet.Policy == "") {
            this.gd.toast("Please accept the terms.");
        }
        else if (dataGet.imageData == "") {
            this.gd.toast("Please choose your pickture.");
        }
        else {
            console.log("register");
            this.data = Object.assign(this.dataGroup1.value, this.dataGroup2.value);
            console.log(this.data, "============ DATA =============");
            this.register();
        }
    };
    RegisterPage.prototype.more = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ModelPage", {
            Latitude: this.SFT.userlocation.lat,
            Longitude: this.SFT.userlocation.long,
        });
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log("data >>>>>>>");
            console.log(data);
            console.log("data >>>>>>>");
            _this.locationGet = data;
            _this.locationSet = data.place_name;
            _this.dataGroup2.patchValue({ location: data.place_name });
            // this.data.location = data.place_name;
        });
    };
    RegisterPage.prototype.onTermsChecked = function ($event) {
        console.log($event);
        if (!$event.checked) {
            this.dataGroup2.patchValue({ Policy: "" });
        }
        else {
            this.dataGroup2.patchValue({ Policy: 1 });
        }
    };
    RegisterPage.prototype.onChangeHandler = function (type, event) {
        console.log(event);
        this.dataGroup2.patchValue({ sex: event });
        this.countryChooser = __WEBPACK_IMPORTED_MODULE_7_jquery__(".js-example-basic-single").val();
        this.dataGroup2.patchValue({
            country: __WEBPACK_IMPORTED_MODULE_7_jquery__(".js-example-basic-single").val(),
        });
    };
    RegisterPage.prototype.back = function () {
        var _this = this;
        console.log(this.slides.getActiveIndex());
        if (this.slides.getActiveIndex() == 1) {
            this.lockSlide(false);
            this.slides.slidePrev();
            setTimeout(function () {
                _this.lockSlide(true);
            }, 1000);
        }
        else {
            // this.gd.nextrootpage(this.navCtrl, 'LoginPage', {});
            // this.navCtrl.pop({ animate: true, animation: "ios-transition" });
            this.navCtrl.setRoot("LoginPage", {
                animate: true,
                animation: "ios-transition",
                direction: "forward",
            });
        }
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.typeRegister == 2) {
            this.data.step = "store";
            this.data["lat"] = this.locationGet["place_location"]["lat"];
            this.data["lng"] = this.locationGet["place_location"]["lng"];
            this.data["place_vicinity"] = this.locationGet["place_vicinity"];
            this.data["place_name"] = this.locationGet["place_name"];
        }
        this.data.typeRegister = this.typeRegister;
        var userData = this.data;
        console.log(this.data);
        if (this.dataFB != undefined) {
            this.data.FBid = this.dataFB.id;
        }
        this.SFT.ServiceThread("register", this.data, "POST").then(function (data) {
            if (data["res_code"] != "00") {
                _this.gd.toast(data["res_text"]);
            }
            else {
                if (_this.dataFB) {
                    var datas = {
                        email: _this.dataFB.id,
                        password: "fb",
                    };
                    _this.SFT.ServiceThread("login", datas, "POST")
                        .then(function (data) {
                        console.log(data, "=====DATA=====**:");
                        if (data["res_code"] != "00") {
                        }
                        else {
                            // this.gd.showbtn = datas['res_show'];
                            data["res_result"]["user_path_img"] =
                                _this.gd.BASE_URL + data["res_result"]["user_path_img"];
                            _this.gd.userProfile = data["res_result"];
                            _this.SFT.user_api_key = data["res_result"]["user_api_key"];
                            _this.storage.set("email", _this.dataFB.id);
                            _this.storage.set("password", "fb");
                            _this.storage.set("user_api_key", data["res_result"]["user_api_key"]);
                            _this.gd.nextrootpage(_this.navCtrl, "TabsPage", {
                                user: data["res_result"],
                            });
                        }
                    })
                        .catch(function (e) { return console.log("Error login", e); });
                }
                else {
                    var datass = {
                        email: userData["username"],
                        password: userData["password"],
                    };
                    _this.SFT.ServiceThread("login", datass, "POST").then(function (datas) {
                        if (datas["res_code"] != "00") {
                            _this.gd.toast(datas["res_text"]);
                            _this.gd.regisLogout();
                            _this.storage.clear();
                        }
                        else {
                            // this.gd.showbtn = datas['res_show'];
                            // this.SFT.userlocation = { 'lat': '', 'long': '' };
                            // console.log(this.SFT.userlocation);
                            datas["res_result"]["user_path_img"] =
                                _this.gd.BASE_URL + datas["res_result"]["user_path_img"];
                            _this.gd.userProfile = datas["res_result"];
                            _this.storage.set("email", userData["username"]);
                            _this.storage.set("password", userData["password"]);
                            _this.storage.set("user_api_key", datas["res_result"]["user_api_key"]);
                            _this.SFT.user_api_key = datas["res_result"]["user_api_key"];
                            _this.gd.nextrootpage(_this.navCtrl, "TabsPage", {});
                            _this.gd.regisNoti();
                        }
                    });
                }
            }
        });
    };
    RegisterPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: "Option",
            buttons: [
                {
                    text: "Choose Form Library",
                    cssClass: "",
                    handler: function () {
                        _this.takePicture(2, _this.navCtrl);
                        // console.log('Destructive clicked');
                    },
                },
                {
                    text: "Take Photo",
                    cssClass: "",
                    handler: function () {
                        _this.takePicture(1, _this.navCtrl);
                        // console.log('Archive clicked');
                    },
                },
                {
                    text: "Cancel",
                    cssClass: "Select3",
                    handler: function () {
                        // console.log('Archive clicked');
                    },
                },
            ],
        });
        actionSheet.present();
    };
    RegisterPage.prototype.takePicture = function (check, navCtrl) {
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
            // this.data['imageData'] = "data:image/jpeg;base64," + imageData;
            _this.dataGroup2.patchValue({
                imageData: "data:image/jpeg;base64," + imageData,
            });
            console.log(_this.dataGroup2.value);
            // document.getElementById('profile').setAttribute('src', this.data['imageData']);
        }, function (err) { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], RegisterPage.prototype, "slides", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-register",template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/register/register.html"*/'<ion-header style="box-shadow: unset;">\n    <ion-navbar>\n        <button ion-button small clear (click)="back()">\n      <ion-icon name="ios-arrow-back"></ion-icon>\n    </button>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n\n\n    <ion-slides>\n\n\n\n\n\n        <ion-slide *ngIf="dataFB == undefined">\n            <div class="Title">Sign up</div>\n            <form [formGroup]="dataGroup1" (ngSubmit)="check1()">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col>\n                            <ion-item>\n                                <ion-label stacked>\n                                    <span class="textField">E-mail</span>\n                                    <span class="requeid" *ngIf="!dataGroup1.value.email">*</span>\n                                    <br>\n                                    <span class="detailField">Email ( in case you forgot your Username and Password )</span>\n                                </ion-label>\n                                <ion-input type="text" formControlName="email">\n                                </ion-input>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label stacked>\n                                    <span class="textField">Username</span>\n                                    <span class="requeid" *ngIf="!dataGroup1.value.username">*</span>\n                                    <br>\n                                    <span class="detailField">At least 6 - 20 characters for Username and Password</span>\n                                </ion-label>\n                                <ion-input type="text" formControlName="username"></ion-input>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label stacked>\n                                    <span class="textField">Password</span>\n                                    <span class="requeid" *ngIf="!dataGroup1.value.password">*</span>\n                                </ion-label>\n                                <ion-input type="password" formControlName="password"></ion-input>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label stacked>\n                                    <span class="textField">Conﬁrm your Password</span>\n                                    <span class="requeid" *ngIf="!dataGroup1.value.conpassword">*</span>\n                                </ion-label>\n                                <ion-input type="password" formControlName="conpassword"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-12 style="text-align: center;padding-top: 100px;">\n                            <div style="font-size: 12px;color: #A53C60;" *ngIf="typeRegister == 2">For Business Owner</div>\n                            <button style="background: linear-gradient(90deg, rgba(232,32,100,1) 0%, rgba(233,43,107,1) 35%, rgba(174,82,158,1) 100%);width: 200px;\n            border-radius: 10px;" ion-button type="submit" [disabled]="!dataGroup1.valid">Next</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </form>\n        </ion-slide>\n\n\n        <ion-slide *ngIf="statusPage">\n            <form [formGroup]="dataGroup2" (ngSubmit)="check2()">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col>\n                            <div style="text-align: center;">\n                                <div class="imgPost">\n                                    <div style="margin: auto;" *ngIf="!dataGroup2.value.imageData" (click)="presentActionSheet()">\n                                        <img src="./assets/icon/imgIconss.svg" alt="" style="width: 40%;">\n                                        <div style="font-size: 12px;color: #656565;">Proﬁle Picture <span class="requeid">*</span></div>\n                                    </div>\n                                    <div class="imagePro" style="margin: auto;width: 100%;height: 100%;background-size: cover !important;background-position: center !important;border-radius: 50%;" *ngIf="dataGroup2.value.imageData" [ngStyle]="{\'background\': \'url(\'+ dataGroup2.value.imageData +\')\'}">\n                                    </div>\n                                    <ion-icon name="add-circle" style="position: absolute;bottom: 15px;right: 0;" (click)="presentActionSheet()"></ion-icon>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <!-- <ion-input type="text" formControlName="country"> </ion-input> -->\n                            <ion-item>\n                                <ion-label stacked>\n                                    <span class="textField">Country</span>\n                                    <span class="requeid" *ngIf="STHide == 0">*</span>\n                                    <span class="detailField" *ngIf="STHide == 1">(optional)</span>\n                                </ion-label>\n                                <div item-content style="width: 100%;">\n                                    <select class="js-example-basic-single" [(ngModel)]="countryChooser" id="country" formControlName="country" style="padding: 2px;border-bottom: 1px; border-bottom-style: solid; margin-bottom: 10px;" (change)="onChangeHandler(\'country\',$event)">\n                                        <option *ngFor="let country of country;let i = index" [attr.data-index]=\'i\' selected [value]="country.country_id">{{country.country_name_en}}</option>\n                                    </select>\n\n                                    <!-- \n                                    <ion-select id="country" interface="popover" [(ngModel)]="countryChooser" id="country" formControlName="country" style="padding: 2px;border-bottom: 1px; border-bottom-style: solid; margin-bottom: 10px;" (onchange)="onChangeHandler($event)">\n                                        <ion-option *ngFor="let country2 of country" [value]="country2.country_name_en"> {{country2.country_name_en}}</ion-option>\n                                    </ion-select> -->\n\n                                    <!-- <select class="js-example-basic-single" [(ngModel)]="countryChooser" id="country" formControlName="country" style="padding: 2px;border-bottom: 1px; border-bottom-style: solid; margin-bottom: 10px;" (onchange)="onChangeHandler($event)">\n                                      <option *ngFor="let country of country;let i = index" [attr.data-index]=\'i\' [value]="country.country_id">{{country.country_name_en}} 22222</option>\n                                  </select>\n                                    <select class="js-example-basic-single" [(ngModel)]="countryChooser" id="country" formControlName="country" style="padding: 2px;border-bottom: 1px; border-bottom-style: solid; margin-bottom: 10px;" (onchange)="onChangeHandler($event)">\n                                    <option *ngFor="let country of country;let i = index" [attr.data-index]=\'i\' [ngValue]="country.country_name_th">{{country.country_name_en}} 333333</option>\n                                </select> -->\n                                </div>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label stacked>\n                                    <span class="textField">First Name</span>\n                                    <span class="requeid">*</span>\n                                </ion-label>\n                                <ion-input type="text" formControlName="fname">\n                                </ion-input>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label stacked>\n                                    <span class="textField">Last Name</span>\n                                    <span class="requeid">*</span>\n                                </ion-label>\n                                <ion-input type="text" formControlName="lname">\n                                </ion-input>\n                            </ion-item>\n                            <ion-item *ngIf="typeRegister == 2">\n                                <ion-label stacked>\n                                    <span class="textField">Experience by</span>\n                                    <span class="requeid">*</span>\n                                </ion-label>\n                                <ion-input type="text" formControlName="storeName">\n                                </ion-input>\n                            </ion-item>\n                            <ion-item *ngIf="typeRegister == 2">\n                                <ion-label stacked>\n                                    <span class="textField">Your store location</span>\n                                    <span class="requeid">*</span>\n                                </ion-label>\n                                <div item-content style="width: 100%;position: relative;" (click)="more()">\n                                    <div for="country" class="divnone width100 page2" *ngIf="!data.location">{{locationSet}}</div>\n                                    <div for="country" class="divnone width100" *ngIf="data.location">{{locationSet}}</div>\n                                    <ion-icon class="iconDown pingIcon"></ion-icon>\n                                    <ion-input type="hidden"></ion-input>\n                                </div>\n                            </ion-item>\n                            <ion-item *ngIf="typeRegister == 2">\n                                <ion-label stacked>\n                                    <span class="textField">Telephone Number</span>\n                                    <span class="requeid">*</span>\n                                </ion-label>\n                                <ion-input type="tel" formControlName="phone" maxlength="10" pattern="[0-9]+([\,|\.][0-9]+)?" onkeypress=\'return event.charCode >= 48 && event.charCode <= 57\'>\n                                </ion-input>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label stacked>\n                                    <span class="textField">Gender</span>\n                                    <span class="requeid" *ngIf="STHide == 0">*</span>\n                                    <span class="detailField" *ngIf="STHide == 1">(optional)</span>\n                                </ion-label>\n                                <ion-grid item-content style="padding: 0px;" class="genders">\n                                    <ion-row radio-group ngControl="sex" (ionChange)="onChangeHandler(\'gender\',$event)">\n                                        <ion-col col-6 style="padding: 0;">\n                                            <ion-item no-lines style="background: transparent;padding-bottom: 10px;">\n                                                <ion-label stacked>\n                                                    <span class="textField">Male</span>\n                                                </ion-label>\n                                                <ion-radio item-left mode="md" [value]="1"></ion-radio>\n                                            </ion-item>\n                                        </ion-col>\n                                        <ion-col col-6 style="padding: 0;">\n                                            <ion-item no-lines style="background: transparent;padding-bottom: 10px;">\n                                                <ion-label stacked>\n                                                    <span class="textField">Female</span>\n                                                </ion-label>\n                                                <ion-radio item-left mode="md" [value]="2"></ion-radio>\n                                            </ion-item>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label stacked>\n                                    <span class="textField">Date of Birth</span>\n                                    <span class="requeid" *ngIf="STHide == 0">*</span>\n                                    <span class="detailField" *ngIf="STHide == 1">(optional)</span>\n                                </ion-label>\n                                <ion-datetime class="padding5" id=\'dateBirth\' displayFormat="DD/MM/YYYY" formControlName="date" style="padding: 0px;"></ion-datetime>\n                            </ion-item>\n\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <table style="margin-left: auto;margin-right: auto;margin-bottom: 20px;margin-top: 20px;">\n                                <tr>\n                                    <td id="btnNone">\n                                        <ion-checkbox ngControl="terms" (ionChange)="onTermsChecked($event)"></ion-checkbox>\n                                    </td>\n                                    <td style="vertical-align: top;padding-left: 5px;">\n                                        <div style="color: #8e8c8c;" class="font15" (click)="gd.nextpage(navCtrl, \'TermsandPolicyPage\',{})">\n                                            I Accept\n                                            <span style="color: #1b75bb;text-decoration: underline;">Terms and Policies</span>\n                                        </div>\n                                    </td>\n                                </tr>\n                            </table>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-12 style="text-align: center;">\n                            <div style="font-size: 12px;color: #A53C60;" *ngIf="typeRegister == 2">For Business Owner</div>\n                            <button style="background: linear-gradient(90deg, rgba(232,32,100,1) 0%, rgba(233,43,107,1) 35%, rgba(174,82,158,1) 100%);width: 200px;\n              border-radius: 10px;" ion-button type="submit" [disabled]="!dataGroup2.valid">Finish</button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </form>\n        </ion-slide>\n\n    </ion-slides>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */],
            __WEBPACK_IMPORTED_MODULE_4__services_globaldata_service__["a" /* GlobalDataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=16.js.map