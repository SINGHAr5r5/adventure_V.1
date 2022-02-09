webpackJsonp([26],{

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(562);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(236);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(events, fb, gd, SFT, storage, navCtrl, navParams, alertCtrl, modalCtrl, keyboard, platform) {
        this.events = events;
        this.fb = fb;
        this.gd = gd;
        this.SFT = SFT;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.keyboard = keyboard;
        this.platform = platform;
        this.data = [];
        this.localSt = false;
        this.statusLo = false;
        this.StBusi = false;
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.keyboard.hideFormAccessoryBar(false);
        });
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        //  console.log(`date now `, now);
        //  console.log(`date tomorrow `, publish);
        // console.log(`app version`, this.appVersion.getVersionNumber());
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("email").then(function (val) {
            // console.log(val);
            if (val) {
                var email_1 = val;
                _this.storage.get("password").then(function (val) {
                    _this.data["email"] = email_1;
                    _this.data["password"] = val;
                    _this.gd.nextrootpage(_this.navCtrl, "TabsPage", {});
                    _this.TabsPage();
                    _this.storage.get("user_api_key").then(function (vall) {
                        _this.SFT.user_api_key = vall;
                    });
                });
            }
            else {
                _this.localSt = true;
            }
        });
        this.storage.set("page", "login");
    };
    LoginPage.prototype.loginFacebook = function () {
        var _this = this;
        // this.SFT.loading_present('');
        this.gd.user_type_account = 2;
        this.fb
            .logout()
            .then(function (res) { })
            .catch(function (e) { return console.log("Error logout", e); });
        var token;
        this.fb
            .login(["public_profile", "email"])
            .then(function (res) {
            token = res.authResponse.accessToken;
            _this.fb
                .api("me?access_token=" +
                res.authResponse.accessToken +
                "&fields=email,id,name,picture.type(large),gender,birthday", ["public_profile"])
                .then(function (res) {
                console.log("login Facebook");
                _this.data = {
                    email: res.id,
                    password: "fb",
                };
                _this.SFT.ServiceThread("login", _this.data, "POST")
                    .then(function (data) {
                    if (data["res_code"] != "00") {
                        // this.gd.toast(data['res_text']+' FB ');
                        _this.navCtrl.push("RegisterPage", {
                            dataFB: res,
                            token: token,
                            type: 1,
                            stChooser: _this.StBusi,
                        });
                        setTimeout(function () {
                            // this.SFT.Check_Count('');
                        }, 1000);
                    }
                    else {
                        _this.SFT.STLogin = true;
                        // this.gd.showbtn = data['res_show'];
                        data["res_result"]["user_path_img"] =
                            _this.gd.BASE_URL + data["res_result"]["user_path_img"];
                        _this.selectData(data["res_result"]);
                        _this.gd.userProfile = data["res_result"];
                        _this.gd.get_noti("old");
                        _this.storage.set("email", res.id);
                        _this.storage.set("password", "fb");
                        _this.storage.set("user_api_key", data["res_result"]["user_api_key"]);
                        _this.SFT.user_api_key = data["res_result"]["user_api_key"];
                        setTimeout(function () {
                            _this.SFT.GCL().then(function (data) {
                                _this.statusLo = true;
                                _this.gd.nextrootpage(_this.navCtrl, "TabsPage", {
                                    user: data["res_result"],
                                });
                                setTimeout(function () {
                                    _this.gd.chat().then(function (data) {
                                        // this.sumNoti = data;
                                    });
                                }, 1000);
                            });
                            setTimeout(function () {
                                _this.SFT.Check_Count("Location-*-");
                                if (!_this.statusLo) {
                                    var alert_1 = _this.alertCtrl.create({
                                        title: "Location",
                                        subTitle: "Can't find your location",
                                        enableBackdropDismiss: false,
                                        buttons: [
                                            {
                                                text: "Retry",
                                                role: "Retry",
                                                handler: function () {
                                                    console.log("Retry clicked");
                                                    _this.loginFacebook();
                                                },
                                            },
                                        ],
                                    });
                                    alert_1.present();
                                }
                            }, 10000);
                            _this.gd.regisNoti();
                        }, 0);
                    }
                })
                    .catch(function (e) {
                    console.log("Error login", e);
                    try {
                        setTimeout(function () {
                            // this.SFT.Check_Count('');
                        }, 500);
                    }
                    catch (error) { }
                });
            })
                .catch(function (e) {
                console.log("Error api into Facebook", e);
                try {
                    setTimeout(function () {
                        // this.SFT.Check_Count('');
                    }, 500);
                }
                catch (error) { }
            });
        })
            .catch(function (e) {
            console.log("Error logging into Facebook", e);
            try {
                setTimeout(function () {
                    // this.SFT.Check_Count('');
                }, 500);
            }
            catch (error) { }
        });
    };
    LoginPage.prototype.selectData = function (data) {
        var _this = this;
        this.SFT.ServiceThread("TAGExplore", { user_id: 78 }, "POST").then(function (data) {
            if (data["res_code"] == "00") {
                _this.gd.myTag = data["res_result"];
            }
        });
        this.SFT.ServiceThread("Recent", { user_id: data["user_id"] }, "POST").then(function (data) {
            if (data["res_code"] == "00") {
                _this.gd.Recent = data["res_result"];
            }
        });
        this.SFT.ServiceThread("follow", { user_id: data["user_id"] }, "POST").then(function (data) {
            if (data["res_code"] == "00") {
                _this.gd.userProfile["followers"] = data["res_result"][0]["followers"];
                _this.gd.userProfile["following"] = data["res_result"][0]["following"];
            }
        });
    };
    LoginPage.prototype.TabsPage = function () {
        var _this = this;
        // this.loading.present();
        this.fb
            .logout()
            .then(function (res) {
            // console.log('success');
        })
            .catch(function (e) { return console.log("Error logout", e); });
        setTimeout(function () {
            // this.geolocation.getCurrentPosition().then((position) => {
            //   let dataSend = {
            //     'lat': position["coords"]["latitude"],
            //     'long': position["coords"]["longitude"]
            //   };
            //   this.gd.userlocation = dataSend;
            _this.SFT.ServiceThread("login", _this.data, "POST").then(function (datas) {
                if (datas["res_code"] != "00") {
                    _this.SFT.Check_Count("");
                    _this.gd.toast(datas["res_text"]);
                    _this.gd.regisLogout();
                    _this.events.publish("logout");
                    _this.storage.clear();
                    _this.fb
                        .logout()
                        .then(function (res) {
                        // console.log('success');
                    })
                        .catch(function (e) { return console.log("Error logout", e); });
                }
                else {
                    _this.SFT.STLogin = true;
                    // this.gd.showbtn = datas['res_show'];
                    datas["res_result"]["user_path_img"] =
                        _this.gd.BASE_URL + datas["res_result"]["user_path_img"];
                    _this.selectData(datas["res_result"]);
                    _this.gd.userProfile = datas["res_result"];
                    _this.gd.get_noti("old");
                    _this.storage.set("email", _this.data["email"]);
                    _this.storage.set("password", _this.data["password"]);
                    _this.storage.set("user_api_key", datas["res_result"]["user_api_key"]);
                    _this.SFT.user_api_key = datas["res_result"]["user_api_key"];
                    setTimeout(function () {
                        _this.gd.chat().then(function (data) { });
                        _this.SFT.GCL();
                        if (_this.localSt) {
                            _this.gd.nextrootpage(_this.navCtrl, "TabsPage", {});
                        }
                        console.log("test");
                        _this.gd.statusDataInput = datas["res_result"]["checkData"];
                        if (datas["res_result"]["checkData"] == 1) {
                            var alert_2 = _this.alertCtrl.create({
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
                                            _this.data["type"] = "updateDateCancel";
                                            _this.SFT.ServiceThread("updateDataUser", _this.data, "POST").then(function (data) { });
                                        },
                                    },
                                ],
                            });
                            alert_2.present();
                        }
                        _this.gd.regisNoti();
                    }, 0);
                }
            });
        }, 1000);
    };
    LoginPage.prototype.register = function () {
        // this.navCtrl.push("Register");
        // let modal = this.modalCtrl.create('TypeRegisterPage', {});
        // modal.present();
        // modal.onDidDismiss(res => {
        //   console.log(res);
        this.gd.user_type_account = 1;
        this.gd.nextrootpage(this.navCtrl, "RegisterPage", {
            type: 1,
            stChooser: this.StBusi,
        });
        // });
    };
    LoginPage.prototype.showConfirm = function () {
        var _this = this;
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_6_jquery__(".alert-wrapper").css("margin-top", "20%");
        }, 10);
        var prompt = this.alertCtrl.create({
            title: "Forget Password",
            message: "Enter Email to reset your password.",
            inputs: [
                {
                    name: "Email",
                    placeholder: "Email",
                },
            ],
            buttons: [
                {
                    text: "Cancel",
                    handler: function (data) {
                        // console.log('Cancel clicked');
                    },
                },
                {
                    text: "Send",
                    handler: function (data) {
                        console.log("Saved clicked");
                        if (_this.gd.ValidateEmail(data["Email"])) {
                            _this.SFT.ServiceThread("forgot", { email: data["Email"] }, "POST").then(function (data) {
                                if (data["res_code"] == "00") {
                                    _this.gd.toast(data["res_text"]);
                                }
                                else {
                                    _this.gd.toast(data["res_text"]);
                                }
                            });
                        }
                        else {
                            _this.gd.toast("Please check email");
                        }
                    },
                },
            ],
        });
        prompt.present();
    };
    LoginPage.prototype.goBussiness = function (status) {
        this.StBusi = status;
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/login/login.html"*/'<ion-content class="body">\n    <div>\n        <i class="logo positionlogo sizelogo"></i>\n    </div>\n    <div style="position: absolute; top: 10px;left: 20px;" (click)="goBussiness(false)" *ngIf="StBusi">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n    </div>\n\n    <ion-list class="center list">\n        <!-- <div>\n      <i class="text_logo positiontext "></i>\n    </div> -->\n        <div style="display: grid;margin-top: -90px; margin-bottom: 25px;">\n            <img src="./img/text_login.png" style="   width: 157px;height: 55px;margin: auto;" alt="">\n        </div>\n        <div style="color: #A53C60;margin-bottom: 10px;margin-top: -10px;text-align: center;" *ngIf="StBusi">For business owner</div>\n        <div class="inputlogin" style="    margin-bottom: 25px;">\n            <i class="icon_user icon20"></i>\n            <input type="text" [(ngModel)]="data.email" autofocus="true" id="usernameID" style="    margin-top: 2px;border: 0px;margin-left: 30px;width:90% !important;" placeholder="Username">\n        </div>\n        <div class="inputlogin">\n            <i class="icon_pass icon20"></i>\n            <input type="password" [(ngModel)]="data.password" (keyup.enter)="TabsPage()" style="width: 90%;margin-top: 2px;border: 0px;margin-left: 30px;" placeholder="Password">\n        </div>\n        <div style="text-align: right; padding-top: 10px;color:#898989;">\n            <span (click)="showConfirm()"> Forget Password ? </span>\n        </div>\n        <div class="marginfrom" (click)="TabsPage()">\n            <button ion-button full id="btnpurple" style="padding: 20px;">\n        <span class="Museo">SIGN IN</span>\n      </button>\n        </div>\n        <div style="height:15px">\n            <i class="or sizeor"></i>\n        </div>\n\n        <div style="    margin-top: 20px;" (click)="loginFacebook()">\n            <button ion-button full style="padding: 20px;">\n                <span class="Museo">\n                <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon> Login with Facebook\n                </span>\n            </button>\n        </div>\n        <div style="margin-top:15px;" class="Montserrat">\n            <table>\n                <tr>\n                    <td style="text-align: center;width: 80%;color: #303F8A;">\n                        <span style="letter-spacing: 0;"> Don’t have an account yet? </span>\n                    </td>\n                    <td>\n                        <button ion-button outline style=" font-size: 12px;height: 27px;color: #303F8A;border-color: #303F8A;" (click)="register()">SIGN UP</button>\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <!-- <div style="text-align: center;margin-top: 10px;" (click)="goBussiness(true)" *ngIf="!StBusi">\n      <img src="./assets/icon/shop_icon.svg" style="    vertical-align: middle;" alt="">\n      <div\n        style="    border-radius: 25px;border: 1px solid #A53C60;padding: 5px 20px;color: #A53C60;display: inline-block;vertical-align: middle;">\n        I\'m a business owner</div>\n    </div> -->\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/singha/Documents/work/ionic/AE_APP/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_3__services_globaldata_service__["a" /* GlobalDataService */],
            __WEBPACK_IMPORTED_MODULE_4__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=26.js.map