webpackJsonp([35],{

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(376);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatModule = (function () {
    function ChatModule() {
    }
    return ChatModule;
}());
ChatModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* Chat */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* Chat */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* Chat */]
        ]
    })
], ChatModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_jPush_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Chat = (function () {
    function Chat(navCtrl, navParams, events, ref, JPushService, UserService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.ref = ref;
        this.JPushService = JPushService;
        this.UserService = UserService;
        this.msgList = [];
        this.editorMsg = '';
        this.toUserName = "";
        this.targid = this.navParams.get('_id');
        this.toUserName = this.navParams.get('name');
        this.targuserimg = this.navParams.get('userimg');
        this.myuserimg = this.UserService._user.userimg;
        this.JPushService.inRoom = true;
        this.JPushService.msgListTHIS = this;
        //this.getAllMessages();
    }
    Chat.prototype.ionViewWillLeave = function () {
        this.JPushService.inRoom = false;
        this.JPushService.msgListTHIS = null;
    };
    Chat.prototype.sendMsg = function () {
        if (this.editorMsg == '') {
            return true;
        }
        var mjson = {
            'name': this.UserService._user.name,
            'userimg': this.myuserimg,
            'toUserName': this.toUserName,
            'targuserimg': this.targuserimg,
            'cont': this.editorMsg,
        };
        //this.JPushService.JPIMsendSingleTextMessage("5919672950c7445c1d4b17de","hello jp1");
        this.JPIMsendSingleCustomMessage(this.targid, JSON.stringify(mjson));
        this.editorMsg = '';
    };
    Chat.prototype.JPIMsendSingleCustomMessage = function (username, JsonStr) {
        var _that = this;
        window.JMessage.sendSingleCustomMessage(username, JsonStr, null, function (response) {
            var message = JSON.parse(response);
            //alert(response);
            //_that.msgList.push(message);
            _that.pushNewMsg(message);
        }, function (errorMsg) {
            alert(errorMsg); // 输出错误信息。
        });
    };
    Chat.prototype.pushNewMsg = function (message) {
        this.msgList.push(message);
        //this.editorMsg = '';
        this.scrollToBottom();
    };
    Chat.prototype.getAllMessages = function () {
        var _that = this;
        window.JMessage.getAllMessages('single', this.targid, null, function (response) {
            var messages = JSON.parse(response);
            //alert(response);
            //alert(messages[0]['direct']);
            //alert(messages[0]['content']['contentStringMap']['cont']);
            _that.msgList = messages;
            _that.content.scrollToBottom();
        }, function (errorMsg) {
            console.log(errorMsg); // 输出错误信息。
        });
    };
    Chat.prototype.scrollToBottom = function () {
        if (this.content.scrollToBottom) {
            this.content.scrollToBottom();
        }
        this.messageInput.setFocus();
    };
    return Chat;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Content */])
], Chat.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])('chat_input'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* TextInput */])
], Chat.prototype, "messageInput", void 0);
Chat = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/chat/chat.html"*/'<!--\n  Generated template for the Chat page.\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="bule">\n        <ion-title>{{toUserName}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div class="message-wrap">\n\n        <div *ngFor="let msg of msgList" class="message" [class.left]=" msg[\'direct\'] == \'receive\' " [class.right]=" msg[\'direct\'] == \'send\' ">\n            <img *ngIf="msg[\'direct\'] == \'receive\'" class="user-img" alt="" [src]="targuserimg" />\n            <img *ngIf="msg[\'direct\'] != \'receive\'" class="user-img" alt="" [src]="myuserimg" />\n            <div class="msg-detail">\n                <div class="msg-info">\n                    <p>3:15</p>\n                </div>\n                <div class="msg-content">\n                    <span class="triangle"></span>\n                    <p class="line-breaker ">{{msg[\'content\'][\'contentStringMap\'][\'cont\']}}</p>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</ion-content>\n\n<ion-footer no-border>\n    <ion-grid class="input-wrap">\n        <ion-row>\n\n            <ion-col col-10>\n                <ion-textarea #chat_input placeholder="Text Input" [(ngModel)]="editorMsg" (keyup.enter)="sendMsg()" (focus)="scrollToBottom()"></ion-textarea>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button clear icon-only item-right (click)="sendMsg()">\n          <ion-icon  name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n        </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Events */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ChangeDetectorRef */],
        __WEBPACK_IMPORTED_MODULE_2__service_jPush_service__["a" /* JPushService */],
        __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]])
], Chat);

//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=35.main.js.map