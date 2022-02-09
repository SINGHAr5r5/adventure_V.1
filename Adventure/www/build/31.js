webpackJsonp([31],{

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(552);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
            ],
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ServiceFactoryThread__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globaldata_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Firebase__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(236);
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








/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(alertCtrl, platform, keyboard, location, navCtrl, navParams, events, gd, serviceFactoryThread) {
        // console.log(this.data);
        // console.log();
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.keyboard = keyboard;
        this.location = location;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.gd = gd;
        this.serviceFactoryThread = serviceFactoryThread;
        this.mouth = [];
        this.data = this.navParams.get('data');
        this.roomN = this.navParams.get('room');
        this.imguser = this.navParams.get('imguser');
        this.key = this.navParams.get('key');
        this.keyChat = [];
        this.message = [];
        this.read = [];
        this.dataSend = {
            // data: this.navParams.get('data'),
            imguser: this.gd.userProfile.user_path_img,
            key: this.navParams.get('key'),
            room_name: this.navParams.get('key'),
            // roomN: this.navParams.get('room'),
            user_id: this.gd.userProfile['user_id'],
            user_firstname: this.data['user_firstname'],
            user_lastname: this.data['user_lastname']
        };
        console.log(this.dataSend);
        setTimeout(function () {
            gd.chatKeyLog = _this.navParams.get('key');
            console.log(_this.gd.chatKeyLog);
        }, 300);
        this.gd.clickGo = true;
        if (gd.platformtype == 'ios') {
            // keyboard.disableScroll(true);
            keyboard.onKeyboardHide().subscribe(function (data) {
                console.log('scrollBottom onKeyboardHide');
                _this.content.scrollToBottom();
                _this.scrollbottom();
                setTimeout(function () {
                    _this.scrollbottom();
                }, 500);
            });
            keyboard.onKeyboardShow().subscribe(function (data) {
                console.log('scrollBottom onKeyboardShow');
                _this.content.scrollToBottom();
                _this.scrollbottom();
                setTimeout(function () {
                    _this.scrollbottom();
                }, 500);
            });
        }
        this.sendMessage().then(function (data) {
            _this.gd.roomchat.filter(function (message) {
                if (message.room_name === _this.data['room_name']) {
                    message.noread = 0;
                }
                return message.room_name === _this.data['room_name'];
            });
            // console.log(this.gd.roomchat);
            // console.log(this.data.user_id);
            _this.keyChat = _this.message.filter(function (message) { return message.status === '0' && message.id === _this.data.user_id; });
            setTimeout(function () {
                _this.gd.sumNoti = parseInt(_this.gd.sumNoti) - parseInt(_this.keyChat.length);
                for (var index = 0; index < _this.keyChat.length; index++) {
                    var newData = __WEBPACK_IMPORTED_MODULE_4_Firebase__["database"]().ref('chatrooms/' + _this.key + '/chats/' + _this.keyChat[index]['key']).update({
                        status: '1'
                    });
                }
                _this.scrollbottom();
            }, 100);
        });
        // this.message = this.data['message'];
        // this.read = this.message.filter(message => message.status === '0' && message.id !== this.data.user_id);
        // this.keyChat = this.message.filter(message => message.status === '0' && message.id === this.data.user_id);
        // setTimeout(() => {
        //   this.gd.sumNoti = parseInt(this.gd.sumNoti) - parseInt(this.keyChat.length);
        //   for (let index = 0; index < this.keyChat.length; index++) {
        //     let newData = firebase.database().ref('chatrooms/' + this.key + '/chats/' + this.keyChat[index]['key']).update({
        //       status: '1'
        //     });
        //   }
        // }, 100);
        // let newData = firebase.database().ref('chatrooms/'+this.key+'/chats').push();
        // newData.update({
        //   status: '1'
        // });
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_7_jquery__('#footer').hide();
            __WEBPACK_IMPORTED_MODULE_7_jquery__('.tabbar').hide();
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_7_jquery__('page-chat .back-button.show-back-button').click(function () {
                    __WEBPACK_IMPORTED_MODULE_7_jquery__('#footer').show();
                    __WEBPACK_IMPORTED_MODULE_7_jquery__('.tabbar').show().css('display', 'flex');
                    __WEBPACK_IMPORTED_MODULE_7_jquery__('#sendmessage').css('display', 'none');
                });
            }, 200);
            __WEBPACK_IMPORTED_MODULE_7_jquery__("page-chat .scroll-content").css("cssText", "padding-bottom: 25px !important;margin-top: 44px;");
            console.log('scrollBottom setTimeout');
            _this.content.scrollToBottom();
        }, 200);
        events.subscribe('Newmsg', function (res) {
            // console.log("Newmsg");
        });
        // serviceFactoryThread.ServiceThread('readmessenger', { 'room': this.roomN }, 'POST')
        //   .then(data => {
        //     if (data['res_code'] != "00") {
        //       // console.log(data);
        //     } else {
        //       // console.log(data);
        //     }
        //   }, (err) => {
        //     // console.log(err);
        //   });
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage.prototype.ionViewDidLeave = function () {
        console.log('ionViewDidLeave ChatPage');
        __WEBPACK_IMPORTED_MODULE_7_jquery__('#footer').show();
        __WEBPACK_IMPORTED_MODULE_7_jquery__('.tabbar').show().css('display', 'flex');
        __WEBPACK_IMPORTED_MODULE_7_jquery__('#sendmessage').css('display', 'none');
        this.gd.chatKeyLog = "";
        console.log(this.gd.chatKeyLog);
    };
    ChatPage.prototype.sendMessage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_4_Firebase__["database"]().ref('chatrooms/' + _this.key + '/chats').on('value', function (resp) {
                _this.snap(resp).then(function (data) {
                    // console.log('newroom');
                    console.log('resp', resp);
                    console.log('data', data);
                    var newIndex;
                    _this.message = data;
                    for (var index = 0; index < _this.message.length; index++) {
                        if (index == 0) {
                            newIndex = index;
                        }
                        else {
                            newIndex = index - 1;
                        }
                        if (index == 0) {
                            _this.message[index].showdate = true;
                        }
                        else if (_this.message[index]["date"] != _this.message[newIndex]["date"]) {
                            _this.message[index].showdate = true;
                        }
                        else {
                            _this.message[index].showdate = false;
                        }
                    }
                    // console.log(this.message);
                    setTimeout(function () {
                        // console.log('Chat');
                        // console.log(this.location.path());
                        var path = _this.location.path().split('/');
                        if (path[(path.length) - 1] == 'chat') {
                            // this.read = this.message.filter(message => message.status === '0' && message.id !== this.data.user_id);
                            // console.log(this.message);
                            _this.keyChat = _this.message.filter(function (message) { return message.status === '0' && message.id === _this.data.user_id; });
                            // console.log(this.keyChat);
                            setTimeout(function () {
                                _this.gd.sumNoti = parseInt(_this.gd.sumNoti) - parseInt(_this.keyChat.length);
                                for (var index = 0; index < _this.keyChat.length; index++) {
                                    // console.log(this.keyChat[index]['key']);
                                    var newData = __WEBPACK_IMPORTED_MODULE_4_Firebase__["database"]().ref('chatrooms/' + _this.key + '/chats/' + _this.keyChat[index]['key']).update({
                                        status: '1'
                                    });
                                }
                            }, 100);
                        }
                    }, 1500);
                    setTimeout(function () {
                        try {
                            console.log('scrollBottom sendMessage');
                            _this.content.scrollToBottom();
                        }
                        catch (error) {
                        }
                    }, 100);
                    resolve(data);
                });
            });
        });
    };
    ChatPage.prototype.messenger = function () {
    };
    ChatPage.prototype.send = function () {
        var _this = this;
        var d = new Date();
        d.getDate;
        this.mouth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        console.log(this.mouth[d.getMonth()]);
        // console.log('send');
        if (__WEBPACK_IMPORTED_MODULE_7_jquery__('ion-tab[aria-hidden="false"] page-chat:last #send').val() != '') {
            var newData = __WEBPACK_IMPORTED_MODULE_4_Firebase__["database"]().ref('chatrooms/' + this.key + '/chats').push();
            newData.set({
                user: this.gd.userProfile['user_firstname'] + " " + this.gd.userProfile['user_lastname'],
                id: this.gd.userProfile['user_id'],
                message: __WEBPACK_IMPORTED_MODULE_7_jquery__('#send').val(),
                sendDate: this.GetFormattedDate(),
                chkDate: d.getDate(),
                date: d.getDate() + " " + this.mouth[d.getMonth()],
                status: '0'
            });
            // console.log(this.data);
            // console.log($('#send').val());
            this.gd.sendNoti(this.data["room_name"], this.data['user_id'], __WEBPACK_IMPORTED_MODULE_7_jquery__('#send').val(), this.gd.userProfile['user_firstname'] + " " + this.gd.userProfile['user_lastname'], this.dataSend)
                .then(function (data) {
                _this.gd.chat();
                if (data == '01') {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Notify user',
                        subTitle: _this.data['user_firstname'] + " " + _this.data['user_lastname'] + ' has deleted this chat room.',
                        buttons: [{
                                text: 'OK',
                                role: 'OK',
                                handler: function () {
                                    _this.navCtrl.pop();
                                    _this.gd.chat();
                                    __WEBPACK_IMPORTED_MODULE_7_jquery__('#footer').show();
                                    __WEBPACK_IMPORTED_MODULE_7_jquery__('.tabbar').show().css('display', 'flex');
                                    __WEBPACK_IMPORTED_MODULE_7_jquery__('#sendmessage').css('display', 'none');
                                }
                            }]
                    });
                    alert_1.present();
                }
            });
            __WEBPACK_IMPORTED_MODULE_7_jquery__('#send').val('');
        }
    };
    ChatPage.prototype.GetFormattedDate = function () {
        // var d = new Date();
        // console.log(d.getSeconds());
        // if(d.getSeconds() < 10){
        //   console.log("0"+d.getSeconds());
        // }else{
        //   console.log(d.getSeconds());
        // }
        // return d.getHours() + ":" + d.getMinutes();
        var hours;
        var minute;
        var d = new Date();
        if (d.getMinutes() < 10) {
            minute = "0" + d.getMinutes();
        }
        else {
            minute = d.getMinutes();
        }
        if (d.getHours() < 10) {
            hours = "0" + d.getHours();
        }
        else {
            hours = d.getHours();
        }
        return hours + ":" + minute;
    };
    ChatPage.prototype.splitTime = function (time) {
        return time = time.split(" ")[1];
    };
    ChatPage.prototype.scrollbottom = function () {
        var _this = this;
        setTimeout(function () {
            console.log('scrollBottom Click');
            _this.scrollbottoms();
            _this.content.scrollToBottom();
        }, 500);
    };
    ChatPage.prototype.scrollbottoms = function () {
        var _this = this;
        setTimeout(function () {
            console.log('scrollBottom Click');
            _this.content.scrollToBottom();
        }, 500);
    };
    ChatPage.prototype.snap = function (data) {
        return new Promise(function (resolve) {
            var returnArr = [];
            data.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                item.key = childSnapshot.key;
                returnArr.push(item);
            });
            resolve(returnArr);
            // return returnArr;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/chat/chat.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>\n            <table style=" width: 100%; ">\n                <tr>\n                    <td><span [innerHTML]="data[\'user_firstname\']"></span> <span [innerHTML]="data[\'user_lastname\']"></span></td>\n                </tr>\n                <tr>\n                    <td style="font-size: 10px;opacity: .7;" class="Montserrat">\n                    </td>\n                </tr>\n            </table>\n\n        </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="contentChat" style="margin-bottom: 60px !important;">\n    <div *ngFor="let message of message" style="padding-top: 15px;padding-bottom: 40px;" class="Montserrat">\n        <div class="datecute" *ngIf="message.showdate" style="margin-bottom: 10px;">\n            <span class="dateshow">{{message.date}}</span>\n        </div>\n        <table style="margin-left: 10px;" *ngIf="gd.userProfile.user_id!=message.id" align="left">\n            <tr>\n                <td style="vertical-align: top;">\n                    <img style="width:30px;border-radius: 50px;" [src]="imguser" />\n                </td>\n                <td>\n                    <table style="    margin-left: 10px;">\n                        <tr>\n                            <td>\n                                <div style="display: inline-block;\n                                    padding: 10px 15px;\n                                    border-radius: 10px;\n                                    max-width: 205px;\n                                    line-height: 130%;       \n                                    background: #f0f4f7;\n                                    ">{{message.message}}</div>\n                            </td>\n                            <td style="vertical-align: bottom;    padding-bottom: 5%;">\n                                <span style="color: #989494;margin-left: 10px;font-size: 10px;">\n                                    {{message.sendDate}}\n                                </span>\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n\n            </tr>\n        </table>\n        <table style="margin-right: 20px;margin-left: 20px;" *ngIf="gd.userProfile.user_id==message.id" align="right">\n            <tr>\n                <td style="vertical-align: bottom;padding-bottom: 5%;line-height: 10px">\n                    <div style="color: #989494;margin-left: 5px;font-size: 10px;" *ngIf="message.status == 1">\n                        Read\n                    </div>\n                    <span style="color: #989494;margin-left: 5px;font-size: 10px;">\n                        {{message.sendDate}}\n                    </span>\n                </td>\n                <td>\n                    <table style="    margin-left: 10px;">\n                        <tr>\n                            <td>\n                                <div style="display: inline-block;\n                                  padding: 10px 15px;\n                                  border-radius: 10px;\n                                  max-width: 205px;\n                                  line-height: 130%;\n                                  background: #0084ff;\n                                  background-repeat: round;\n                                  background-size: cover;\n                                  color: white;\n                                  ">{{message.message}}</div>\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n        </table>\n        <div style="clear: both;"></div> \n    </div>\n\n</ion-content>\n<ion-footer>\n    <div id="sendmessage" style="z-index: 100;">\n        <div>\n            <input type="text" id="send" placeholder="Enter a message..." value="" (keyup.enter)="send()" (click)=\'scrollbottom()\' />\n            <label for="send" class="send-chat">\n                <i class="icon_sendmsg" (click)="send()"></i>\n            </label>\n        </div>\n    </div>\n</ion-footer>'/*ion-inline-end:"/Users/singha/Documents/work/ionic/Adventure/AdventureApp/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* Location */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_3__services_globaldata_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_2__services_ServiceFactoryThread__["a" /* ServiceFactoryThread */]])
    ], ChatPage);
    return ChatPage;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=31.js.map