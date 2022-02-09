webpackJsonp([27],{

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function() { return EditprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editprofile__ = __webpack_require__(559);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditprofilePageModule = /** @class */ (function () {
    function EditprofilePageModule() {
    }
    EditprofilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editprofile__["a" /* EditprofilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editprofile__["a" /* EditprofilePage */]),
            ],
        })
    ], EditprofilePageModule);
    return EditprofilePageModule;
}());

//# sourceMappingURL=editprofile.module.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ServiceFactoryThread__ = __webpack_require__(64);
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
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = /** @class */ (function () {
    function EditprofilePage(viewCtrl, serviceFactoryThread, alertCtrl, actionSheetCtrl, camera, gd, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.serviceFactoryThread = serviceFactoryThread;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.gd = gd;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.country = gd.Country;
        this.data['fname'] = gd.userProfile['user_firstname'];
        this.data['lname'] = gd.userProfile['user_lastname'];
        this.data['email'] = gd.userProfile['user_email'];
        this.data['country'] = gd.userProfile['country_id'];
        this.data['date'] = gd.userProfile['user_birthday'];
        this.data['user_img'] = gd.userProfile['user_path_img'];
        if (gd.userProfile['user_gender'] == 'M') {
            this.data['sex'] = '1';
        }
        else {
            this.data['sex'] = '2';
        }
        if (gd.userProfile['user_interestedIn'].split(",").length == 1) {
            if (gd.userProfile['user_interestedIn'].split(",")[0] == 'M') {
                this.data['interestedin1'] = true;
            }
            else {
                this.data['interestedin2'] = true;
            }
        }
        else {
            this.data['interestedin1'] = true;
            this.data['interestedin2'] = true;
        }
        // this.data['sex'] = gd.userProfile['user_gender']
        // console.log(gd.userProfile);
    }
    EditprofilePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad EditprofilePage');
    };
    EditprofilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditprofilePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Option',
            buttons: [
                {
                    text: 'Choose Form Library',
                    cssClass: "",
                    handler: function () {
                        _this.takePicture(2, _this.navCtrl);
                        // console.log('Destructive clicked');
                    }
                }, {
                    text: 'Take Photo',
                    cssClass: "",
                    handler: function () {
                        _this.takePicture(1, _this.navCtrl);
                        // console.log('Archive clicked');
                    }
                }, {
                    text: 'Cancel',
                    cssClass: "Select3",
                    handler: function () {
                        // console.log('Archive clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditprofilePage.prototype.takePicture = function (check, navCtrl) {
        var _this = this;
        var type;
        if (check == 1) {
            type = this.camera.PictureSourceType.CAMERA;
        }
        else {
            type = this.camera.PictureSourceType.PHOTOLIBRARY;
        }
        this.camera.getPicture({
            sourceType: type,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            allowEdit: true,
            mediaType: this.camera.MediaType.PICTURE
        }).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.data['imageData'] = "data:image/jpeg;base64," + imageData;
            // console.log(this.data['imageData']);
            // // console.log("data:image/jpeg;base64," + imageData);
            document.getElementById('profile').setAttribute('src', "data:image/jpeg;base64," + imageData);
        }, function (err) {
            // console.log(err);
        });
    };
    EditprofilePage.prototype.send = function () {
        // // console.log(this.data);
        var _this = this;
        if (this.data.fname == '') {
            this.gd.toast('Please enter your first name');
        }
        else if (this.data.lname == '') {
            this.gd.toast('Please enter your last name');
        }
        else if (this.data.email == '') {
            this.gd.toast('Please enter your email');
        }
        else if (!this.gd.ValidateEmail(this.data.email)) {
            this.gd.toast('Plaease check your email');
        }
        else if (this.data.interestedin1 == false && this.data.interestedin2 == false) {
            this.gd.toast('Please select your Interested');
        }
        else {
            this.serviceFactoryThread.ServiceThread('checkEmail', { email: this.data.email }, 'POST').then(function (data) {
                if (data['res_code'] != '00') {
                    _this.gd.toast('This email already exists.');
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Confirm',
                        message: 'Confirm edit profile?',
                        buttons: [
                            {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    // console.log('Cancel clicked');
                                }
                            },
                            {
                                text: 'Ok',
                                handler: function () {
                                    // console.log('Buy clicked');
                                    _this.serviceFactoryThread.ServiceThread('UpdateUser', _this.data, 'POST')
                                        .then(function (data) {
                                        if (data['res_code'] == '00') {
                                            // console.log(data['res_result']);
                                            var countryIndex = _this.country.findIndex(function (x) { return x.country_id == _this.data['country']; });
                                            _this.gd.userProfile['user_firstname'] = _this.data['fname'];
                                            _this.gd.userProfile['user_lastname'] = _this.data['lname'];
                                            _this.gd.userProfile['user_email'] = _this.data['email'];
                                            _this.gd.userProfile['country_id'] = _this.data['country'];
                                            _this.gd.userProfile['user_birthday'] = _this.data['date'];
                                            _this.gd.userProfile['country_name_en'] = _this.country[countryIndex]['country_name_en'];
                                            if (_this.data['imageData']) {
                                                _this.gd.userProfile['user_path_img'] = data['res_result']['user_path_img'];
                                            }
                                            _this.gd.userProfile['user_interestedIn'] = data['res_result']['user_interestedIn'];
                                            _this.gd.userProfile['user_gender'] = data['res_result']['user_gender'];
                                            _this.gd.toast(data['res_text']);
                                            _this.navCtrl.pop();
                                        }
                                        else {
                                            // console.log(data['res_text']);
                                        }
                                    });
                                }
                            },
                        ]
                    });
                    alert_1.present();
                }
            });
        }
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editprofile',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/editprofile/editprofile.html"*/'<!--\n  Generated template for the EditprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar >\n       <ion-buttons start style="position: absolute;" class="Montserrat">\n          <button ion-button (click)="dismiss()" style="color:white;">Cancel</button>\n    </ion-buttons>\n    <ion-title>\n\n        <table style=" width: 100%; ">\n            <tr>\n              <td class="Museo">Edit Profile</td>\n            </tr>\n            <tr>\n              <td style="font-size: 10px;opacity: .7;" class="Montserrat"><i>Share your freedom</i></td>\n            </tr>\n          </table>\n\n    </ion-title>\n    <ion-buttons start style="position: absolute;    right: 0;" class="Montserrat">\n        <button ion-button  style="color:white;" (click)="send()">Done</button>\n  </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="Montserrat">\n    <ion-list class="center list" style=" width: 90%;">\n\n\n        <div style="height: 150px;">\n            <!-- <i class="img position" id="profile"></i> -->\n            <img [src]="data.user_img" class="img position" id="profile" />\n            <i class="btn_push icon30" id="positionpush" (click)="presentActionSheet()"></i>\n        </div>\n        <div class="inputlogin center" style="margin-bottom: 15px;">\n            <ion-label stacked>First Name</ion-label>\n            <!-- <ion-input type="text" placeholder="First Name *"></ion-input> -->\n            <label for="fname" class="page2"  *ngIf="!data.fname">First Name </label>\n            <input type="text" id="fname" [(ngModel)]="data.fname" required="required" style="padding-left: 0px;" />\n        </div>\n        <div class="inputlogin center" style="margin-bottom: 15px;">\n            <ion-label stacked>Last Name</ion-label>\n            <!-- <input type="text" placeholder="Last Name *"> -->\n            <label for="lname" class="page2"  *ngIf="!data.lname">Last Name </label>\n            <input type="text" id="lname" [(ngModel)]="data.lname" required="required" style="padding-left: 0px;" />\n        </div>\n        <div class="inputlogin" style="margin-bottom: 15px;">\n            <ion-label stacked>E-mail </ion-label>\n            <label for="email" class="page1" *ngIf="!data.email">E-mail</label>\n            <input type="email" id="email" email [(ngModel)]="data.email" pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" required style="padding-left: 0px;" />\n            <!-- <ion-input type="text" placeholder="E-mail *"></ion-input> -->\n        </div>\n        <div class="" style="">\n            <ion-label stacked>Country</ion-label>\n            <label for="country" class="page2"  *ngIf="!data.country">Country </label>\n            <ion-select [(ngModel)]="data.country" id="country" style="padding: 2px;border-bottom: 1px #ccc; border-bottom-style: solid; margin-bottom: 10px;">\n                <ion-option *ngFor="let country of country;let i = index" [attr.data-index]=\'i\' value="{{country.country_id}}">{{country.country_name_en}}</ion-option>\n            </ion-select>\n        </div>\n       \n        <div class="" style="">\n            <ion-label stacked >Date of Birth *</ion-label>\n            <label for="dateBirth" class="page2" style="margin-top: 0px;" *ngIf="!data.date">\n                Date of Birth\n            </label>\n            <i class="icon_dateRe icon25"></i>\n            <ion-datetime id=\'dateBirth\' displayFormat="DD/MM/YYYY" [(ngModel)]="data.date" style="    padding: 0px;border-bottom: 1px #ccc; border-bottom-style: solid; margin-bottom: 10px;"\n                required="required"></ion-datetime>\n        </div>\n        <div class=" center" style="">\n            <ion-label stacked>Gender\n                <span style="color:red;">*</span>\n                <span class="page2" *ngIf="!data.sex" style="color:transparent;">Gender</span>\n                \n            </ion-label>\n            <!-- <ion-input type="text" placeholder="Last Name *"></ion-input> -->\n            <ion-grid style="padding: 0px;" class="roles">\n                <ion-row style="    width: 70%;">\n                    <ion-col>\n                        <input type="radio" [(ngModel)]="data.sex" name="data.sex" value="1" id="one">\n                        <label class="redio">Male </label>\n                    </ion-col>\n                    <ion-col>\n                        <input type="radio" [(ngModel)]="data.sex" name="data.sex" value="2" id="two">\n                        <label class="redio">Female</label>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n\n        </div>\n        <div class=" center" style="margin-bottom: 15px;">\n            <ion-label stacked style="margin-top: 0;margin-bottom: 12px;">Interested In\n                <span style="color:red;">*</span>\n                <span class="page2" *ngIf="!data.interestedin1&&!data.interestedin2" style="color:transparent;">Interested In</span>\n                \n            </ion-label>\n            <!-- <ion-input type="text" placeholder="Last Name *"></ion-input> -->\n            <ion-grid style="padding: 0px; margin-left: 5px;    margin-top: 5px;">\n                <ion-row style="    width: 70%;">\n                    <ion-col style="padding: 0px;">\n                        <div class="checkbox">\n                            <input id="chkTest" [(ngModel)]="data.interestedin1" type="checkbox" />\n                            <label class="redio" for="chkTest" style="margin-left: 0px;">Men </label>\n                        </div>\n                    </ion-col>\n                    <ion-col style="padding: 0px;">\n                        <div class="checkbox">\n                            <input id="chkTest1" [(ngModel)]="data.interestedin2" type="checkbox" />\n                            <label class="redio" for="chkTest1" style="margin-left: 0px;">Women</label>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/editprofile/editprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ })

});
//# sourceMappingURL=27.js.map