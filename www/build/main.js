webpackJsonp([0],{

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		156
	],
	"../pages/login-register/login-register.module": [
		165
	],
	"../pages/profile/profile.module": [
		159
	],
	"../pages/request-a-ride/request-a-ride.module": [
		161
	],
	"../pages/tabs/tabs.module": [
		163
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_media_media__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(media) {
        this.media = media;
        this.apiUploadUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
    }
    HomePage.prototype.getAllCarpMedia = function () {
        var _this = this;
        this.media.getAllMedia().subscribe(function (res) {
            _this.mediaArray = res;
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.getAllCarpMedia();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/zhangqiong/Desktop/Carp-master/src/pages/home/home.html"*/'\n<ion-header>\n  <ion-navbar class="nav" color="primary">\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n<ion-toolbar>\n  <ion-searchbar></ion-searchbar>\n</ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let entry of mediaArray">\n      <ion-thumbnail slot="start">\n        <img [src]="apiUploadUrl + entry.filename">\n      </ion-thumbnail>\n      <div class="content">\n      <h2>{{entry.title}}</h2>\n      <p>{{entry.time_added | date:"dd/MM/yy"}}</p>\n      <p>{{entry.details}}</p><br>\n      <p>{{entry.description}}</p>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/zhangqiong/Desktop/Carp-master/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_media_media__["a" /* MediaProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(160);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_media_media__ = __webpack_require__(33);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, mediaProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mediaProvider = mediaProvider;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.logout = function () {
        localStorage.clear();
        this.mediaProvider.logged = false;
        //   this.navCtrl.push(HomePage);
        this.navCtrl.parent.select(0);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/zhangqiong/Desktop/Carp-master/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Profile</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n        Logout &nbsp;<ion-icon name="log-out"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhangqiong/Desktop/Carp-master/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_media_media__["a" /* MediaProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestARidePageModule", function() { return RequestARidePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_a_ride__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RequestARidePageModule = /** @class */ (function () {
    function RequestARidePageModule() {
    }
    RequestARidePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__request_a_ride__["a" /* RequestARidePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__request_a_ride__["a" /* RequestARidePage */]),
            ],
        })
    ], RequestARidePageModule);
    return RequestARidePageModule;
}());

//# sourceMappingURL=request-a-ride.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestARidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_media_media__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
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
 * Generated class for the RequestARidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestARidePage = /** @class */ (function () {
    function RequestARidePage(navCtrl, navParams, mediaProvider, formbuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mediaProvider = mediaProvider;
        this.formbuilder = formbuilder;
        this.show = false;
        this.placeholder = "../../assets/imgs/rideplaceholder.png";
        this.form = this.formbuilder.group({
            file: this.pic,
            title: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
        });
    }
    RequestARidePage.prototype.getFilePath = function () {
    };
    RequestARidePage.prototype.fileEvent = function (evt) {
        console.log(evt);
        this.pic = evt['_value'];
        console.log(this.pic);
        this.form.value.file = this.pic;
    };
    RequestARidePage.prototype.upload = function () {
        this.mediaProvider.getFileById().subscribe(function (res) {
            console.log(res);
        });
        /*
        let formdata = new FormData();
        formdata.append('title', (this.departure + '-' + this.destination));
        formdata.append('description', this.description);
        formdata.append('file', this.placeholder);
        */
        //this.place = (this.departure + '-' + this.destination);
        // console.log(this.placeholder);
        // console.log(this.place);
        this.form.value.title += '-' + this.destination['_value'];
        console.log(this.form.value);
        this.mediaProvider.uploadRide(this.form.value).subscribe(function (resp) {
            console.log(resp);
        });
    };
    RequestARidePage.prototype.ionViewDidLoad = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('destination'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])
    ], RequestARidePage.prototype, "destination", void 0);
    RequestARidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-request-a-ride',template:/*ion-inline-start:"/Users/zhangqiong/Desktop/Carp-master/src/pages/request-a-ride/request-a-ride.html"*/'<!--\n  Generated template for the RequestARidePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Request-a-ride</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="form" (ngSubmit)="upload()">\n\n    <ion-input  type="file" (ionChange)="fileEvent($event)" formControlName="file">file</ion-input>\n    <ion-item>\n      <ion-label>Departure</ion-label>\n      <ion-input type="text" name="departure" placeholder="Departure city" formControlName="title"\n                minlength="3" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Destination</ion-label>\n      <ion-input type="text" name="destination" placeholder="Destination city" #destination\n                minlength="3" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Departure date</ion-label>\n      <ion-datetime displayFormat="MMM DD, YYYY HH:mm"\n                    pickerFormat="DDDD MMMM YYYY HH:mm" placeholder="Click to choose"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Description</ion-label>\n      <ion-textarea name="description" placeholder="Available seats,etc" formControlName="description"\n                    minlength="5"></ion-textarea>\n    </ion-item>\n\n      <button type="submit" ion-button block>Make a ride</button>\n\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhangqiong/Desktop/Carp-master/src/pages/request-a-ride/request-a-ride.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_media_media__["a" /* MediaProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], RequestARidePage);
    return RequestARidePage;
}());

//# sourceMappingURL=request-a-ride.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(79);
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
            declarations: [__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */])]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_media_media__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginRegisterPage = /** @class */ (function () {
    function LoginRegisterPage(navCtrl, navParams, mediaProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mediaProvider = mediaProvider;
        this.alertCtrl = alertCtrl;
        this.showRegister = false;
        this.user = { username: '' };
        this.confirmPassword = '';
        this.userAlert = false;
    }
    LoginRegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginRegisterPage');
    };
    LoginRegisterPage.prototype.swapLoginRegisterForms = function () {
        this.showRegister = !this.showRegister;
    };
    LoginRegisterPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: message,
            buttons: ['OK'],
        });
        alert.present().catch();
    };
    LoginRegisterPage.prototype.login = function (automatic) {
        var _this = this;
        if (automatic === void 0) { automatic = false; }
        console.log('logging in:', this.user.username);
        this.mediaProvider.login(this.user).subscribe(function (response) {
            console.log(response.user);
            localStorage.setItem('token', response.token);
            _this.mediaProvider.token = response.token;
            _this.mediaProvider.user = response.user;
            _this.mediaProvider.logged = true;
            _this.mediaProvider.getProfilePic();
            // Reset form only if it exists
            if (!automatic)
                _this.loginForm.reset();
            _this.navCtrl.parent.select(0);
        }, function (error) {
            console.log(error);
            _this.showAlert(error.statusText);
        });
    };
    LoginRegisterPage.prototype.checkPasswordMatch = function () {
        if (this.user.password !== this.confirmPassword) {
            this.registerForm.form.controls['confirmPassword'].setErrors({ 'incorrect': true });
            this.registerForm.form.controls['confirmPassword'].markAsTouched();
        }
    };
    LoginRegisterPage.prototype.register = function () {
        var _this = this;
        this.mediaProvider.register(this.user).subscribe(function (response) {
            console.log(response);
            _this.mediaProvider.logged = true;
            _this.login(true);
            _this.registerForm.reset();
        }, function (error) {
            console.log(error);
            _this.showAlert(error.error.message);
        });
    };
    LoginRegisterPage.prototype.checkUserExists = function () {
        var _this = this;
        this.mediaProvider.checkIfUserExist(this.user).
            subscribe(function (response) {
            console.log('username free:', response.available);
            if (!response.available) {
                _this.registerForm.form.controls['username'].setErrors({ 'incorrect': true });
                _this.registerForm.form.controls['username'].markAsTouched();
                _this.userAlert = true;
            }
            else {
                console.log('Username already in use');
                _this.userAlert = false;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lf'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NgForm */])
    ], LoginRegisterPage.prototype, "loginForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('rf'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NgForm */])
    ], LoginRegisterPage.prototype, "registerForm", void 0);
    LoginRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-register',template:/*ion-inline-start:"/Users/zhangqiong/Desktop/Carp-master/src/pages/login-register/login-register.html"*/'<!--\n  Generated template for the LoginRegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title *ngIf="!showRegister">Login</ion-title>\n    <ion-title *ngIf="showRegister">Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #lf="ngForm" *ngIf="!showRegister" (ngSubmit)="login()" novalidate>\n   <!--\n    <ion-item no-lines>\n      <ion-label>\n        Login\n      </ion-label>\n    </ion-item>\n    -->\n    <ion-item class="inputBox">\n      <ion-label color="primary" stacked>Username:</ion-label>\n      <ion-input name="username"\n                 placeholder="username input"\n                 [(ngModel)]="user.username"\n                 #username="ngModel"\n                 required minlength="3">\n      </ion-input>\n    </ion-item>\n    <ion-item class="inputBox">\n      <ion-label color="primary" stacked>Password:</ion-label>\n      <ion-input name="password" type="password" placeholder="password input"\n                 [(ngModel)]="user.password" required>\n      </ion-input>\n    </ion-item>\n    <!-- Button activated when form is valid -->\n    <button type="submit" ion-button block [disabled]="lf.invalid">Login</button>\n  </form>\n\n  <form #rf="ngForm" *ngIf="showRegister" (ngSubmit)="register()" novalidate>\n   <!--\n    <ion-item no-lines>\n      <ion-label>\n        Register\n      </ion-label>\n    </ion-item>\n    -->\n    <ion-item>\n      <ion-label *ngIf="userAlert" color="danger" stacked>User exists!</ion-label>\n      <ion-label color="primary" stacked>Username</ion-label>\n      <ion-input #username (ionBlur)="checkUserExists()"\n                 name="username" [(ngModel)]="user.username" placeholder="username input"\n                 required minlength="3">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Email</ion-label>\n      <ion-input type="email"\n                 name="email" [(ngModel)]="user.email" placeholder="email input"\n                 required pattern="^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Full name</ion-label>\n      <ion-input name="full_name" [(ngModel)]="user.full_name"\n                 placeholder="full name input" minlength="4"\n                 pattern="^[a-z ,.\'-]+">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Auto model</ion-label>\n      <ion-input name="full_name" [(ngModel)]="user.auto_model"\n                 placeholder="auto model input" minlength="4"\n                 pattern="^[a-z ,.\'-]+">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Plate number</ion-label>\n      <ion-input name="full_name" [(ngModel)]="user.plate_number"\n                 placeholder="plate number input" minlength="4"\n                 pattern="^[a-z ,.\'-]+">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Password</ion-label>\n      <ion-input name="password" [(ngModel)]="user.password"\n                 type="password" placeholder="password input, minimum 5 letters."\n                 required minlength="5">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Confirm Password</ion-label>\n      <ion-input name="confirmPassword" [(ngModel)]="confirmPassword"\n                 type="password" placeholder="confirm password"\n                 required minlength="5" (ionChange)="checkPasswordMatch()">\n      </ion-input>\n    </ion-item>\n    <button type="submit" ion-button block [disabled]="rf.invalid">Register</button>\n  </form>\n\n  <ion-item>\n    <button class="change" *ngIf="!showRegister" (click)="swapLoginRegisterForms()">No user account yet? Create one.</button>\n    <button class="change" *ngIf="showRegister" (click)="swapLoginRegisterForms()">Already a user? Login.</button>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhangqiong/Desktop/Carp-master/src/pages/login-register/login-register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_media_media__["a" /* MediaProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginRegisterPage);
    return LoginRegisterPage;
}());

//# sourceMappingURL=login-register.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegisterPageModule", function() { return LoginRegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_register__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginRegisterPageModule = /** @class */ (function () {
    function LoginRegisterPageModule() {
    }
    LoginRegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_register__["a" /* LoginRegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_register__["a" /* LoginRegisterPage */]),
            ],
        })
    ], LoginRegisterPageModule);
    return LoginRegisterPageModule;
}());

//# sourceMappingURL=login-register.module.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_register_login_register_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_request_a_ride_request_a_ride_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_media_media__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_ngx__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer_ngx__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//import { Chooser } from "@ionic-native/chooser/";



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/request-a-ride/request-a-ride.module#RequestARidePageModule', name: 'RequestARidePage', segment: 'request-a-ride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-register/login-register.module#LoginRegisterPageModule', name: 'LoginRegisterPage', segment: 'login-register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs_module__["TabsPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_register_login_register_module__["LoginRegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_request_a_ride_request_a_ride_module__["RequestARidePageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_media_media__["a" /* MediaProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_ngx__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer_ngx__["a" /* FileTransfer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/zhangqiong/Desktop/Carp-master/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/zhangqiong/Desktop/Carp-master/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MediaProvider = /** @class */ (function () {
    function MediaProvider(http) {
        this.http = http;
        this.apiUrl = 'http://media.mw.metropolia.fi/wbma';
        this.mediaAPI = "https://media.mw.metropolia.fi/wbma";
        this.user = null;
        this.logged = false;
        this.cachedUserInfo = {
            file_id: null,
        };
    }
    MediaProvider.prototype.getAllMedia = function () {
        var httpOptions = {
            headers: {
                'Content-type': 'application/json',
            }
        };
        return this.http.get('/wbma/media', httpOptions);
    };
    MediaProvider.prototype.getFileById = function () {
        return this.http.get('/wbma/media/' + this.cachedUserInfo.file_id);
    };
    MediaProvider.prototype.uploadRide = function (data) {
        console.log(data);
        var httpOptions = {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'Content-type': 'application/json',
            }
        };
        console.log(httpOptions);
        return this.http.post('/wbma/media', data, httpOptions);
    };
    MediaProvider.prototype.login = function (user) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-type': 'application/json'
            }),
        };
        return this.http.post('/wbma/login', user, httpOptions);
    };
    MediaProvider.prototype.register = function (user) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-type': 'application/json',
            }),
        };
        return this.http.post('/wbma/users', user, httpOptions);
    };
    MediaProvider.prototype.getFilesByTag = function (tag) {
        return this.http.get('/wbma/tags/' + tag);
    };
    MediaProvider.prototype.getInformationOfCurrentUser = function (token) {
        var httpsOptions = {
            headers: {
                "x-access-token": token
            }
        };
        return this.http.get('/wbma/users/user', httpsOptions);
    };
    MediaProvider.prototype.getProfilePic = function () {
        var _this = this;
        this.getFilesByTag('profile').subscribe(function (fileTagList) {
            _this.getInformationOfCurrentUser(_this.token).subscribe(function (userInfo) {
                _this.cachedUserInfo.file_id = fileTagList.filter(function (entry) { return entry.user_id == userInfo.user_id; })[0].file_id; //.map(fileTagList => fileTagList.file_id);
                console.log(_this.cachedUserInfo);
            });
        });
    };
    MediaProvider.prototype.checkToken = function () {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token'),
            }),
        };
        return this.http.get('/wbma/users/user', httpOptions);
    };
    MediaProvider.prototype.checkIfUserExist = function (user) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-type': 'application/json'
            })
        };
        // return this.http.post<Loginresponse>(this.apiUrl + '/login', user, httpOptions);
        return this.http.get('/wbma/users/username/' + user.username, httpOptions);
    };
    MediaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MediaProvider);
    return MediaProvider;
}());

//# sourceMappingURL=media.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_register_login_register__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_media_media__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__request_a_ride_request_a_ride__ = __webpack_require__(162);
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
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, media) {
        this.navCtrl = navCtrl;
        this.media = media;
        this.homeRoot = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.requestARideRoot = __WEBPACK_IMPORTED_MODULE_6__request_a_ride_request_a_ride__["a" /* RequestARidePage */];
        this.loginRegisterRoot = __WEBPACK_IMPORTED_MODULE_3__login_register_login_register__["a" /* LoginRegisterPage */];
        this.profileRoot = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/zhangqiong/Desktop/Carp-master/src/pages/tabs/tabs.html"*/'<ion-tabs color="primary">\n    <ion-tab [root]="homeRoot" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="requestARideRoot" tabTitle="Post a ride" tabIcon="car"  [show]="this.media.logged"></ion-tab>\n    <ion-tab [root]="profileRoot" tabTitle="Profile" tabIcon="person"  [show]="this.media.logged"></ion-tab>\n    <ion-tab [root]="loginRegisterRoot" tabTitle="Login register" tabIcon="log-in" [show]="!this.media.logged"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/zhangqiong/Desktop/Carp-master/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_media_media__["a" /* MediaProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map