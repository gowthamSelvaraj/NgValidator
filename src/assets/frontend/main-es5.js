(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!******************************************************************************************!*\
  !*** D:/608755/POC/AIHackathon/MVP/node_modules/raw-loader!./src/app/app.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mvp-loader></mvp-loader>\r\n<ng-template [ngIf]=\"!isLoggedIn\">\r\n  <div class=\"container-fluid\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</ng-template>\r\n<ng-template [ngIf]=\"isLoggedIn\">\r\n  <mvp-header></mvp-header>\r\n  <div class=\"container mt-5 mb-5\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <mvp-footer></mvp-footer>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/components/chat/chat.component.html":
/*!***********************************************************************************************************!*\
  !*** D:/608755/POC/AIHackathon/MVP/node_modules/raw-loader!./src/app/components/chat/chat.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 col-md-3\">\r\n    <div class=\"text-center p-3 border d-none d-md-block\">\r\n      <p>Talk to therapist about depression</p>\r\n      <div class=\"pb-5\">\r\n        <i class=\"fas fa-user-md fa-8x fas-primary\"></i>\r\n      </div>\r\n      <button class=\"btn btn-primary\">Talk to a Therapist</button>\r\n    </div>\r\n    <a href=\"javascript:void(0)\" class=\"text-right d-block d-md-none\">Talk <i class=\"fas fa-user-md\"></i></a>\r\n  </div>\r\n  <div class=\"col-12 col-md-9\">\r\n    <div class=\"rounded border ml-md-5 mt-5 mt-md-0\">\r\n      <p class=\"border-bottom p-3\">\r\n        <i class=\"fas fa-user-md\"></i>\r\n        Test User\r\n      </p>\r\n      <p style=\"min-height: 500px\"></p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html":
/*!*********************************************************************************************************************!*\
  !*** D:/608755/POC/AIHackathon/MVP/node_modules/raw-loader!./src/app/components/dashboard/dashboard.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card bg-light mb-3\">\r\n  <div class=\"card-header\">\r\n    <h4 class=\"card-title\">Hello, {{ user.fullName }}</h4>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <p class=\"card-text\">Let's write a little story about why we want to start our patient to initiate a chat</p>\r\n    <hr class=\"my-2 mb-4\">\r\n    <p class=\"lead p-0 m-0\">\r\n      <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Let's Connect</a>\r\n    </p>\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"jumbotron py-4\">\r\n  <h3 class=\"display-6\">Hello, {{ user.fullName }}</h3>\r\n  <p class=\"lead\">You have an upcoming virtual connect with your\r\n    <span class=\"font-weight-bold\">Dr.Thomas </span>\r\n    <span class=\"font-weight-light\">@</span>\r\n    <span class=\"font-weight-bold\">11:00 AM</span>\r\n  </p>\r\n  <hr class=\"my-4\">\r\n  <p class=\"lead\">\r\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Let's Connect</a>\r\n  </p>\r\n</div>\r\n<div class=\"jumbotron py-4\">\r\n  <h3 class=\"display-6 text-center\">Benefits of your plan</h3>\r\n  <hr class=\"my-4\">\r\n  <p class=\"lead\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\r\n    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\r\n    book.\r\n  </p>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\" col-12 col-md-4\">\r\n    <div class=\"card text-white bg-primary mb-3\">\r\n      <div class=\"card-header\">\r\n        <h4 class=\"card-title\">\r\n          <i class=\"fas fa-calendar-alt pr-2 \"></i> Feature One</h4>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\" col-12 col-md-4\">\r\n    <div class=\"card text-white bg-primary mb-3\">\r\n      <div class=\"card-header\">\r\n        <h4 class=\"card-title\">\r\n          <i class=\"fas fa-user-md pr-2 \"></i> Feature two</h4>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\" col-12 col-md-4\">\r\n    <div class=\"card text-white bg-primary mb-3\">\r\n      <div class=\"card-header\">\r\n        <h4 class=\"card-title\">\r\n          <i class=\"fas fa-ambulance pr-2 \"></i> Feature three</h4>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/components/video-call/video-call.component.html":
/*!***********************************************************************************************************************!*\
  !*** D:/608755/POC/AIHackathon/MVP/node_modules/raw-loader!./src/app/components/video-call/video-call.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <video class=\"bg-primary w-100\" style=\"\r\n      border-radius: 15px;\r\n  \" id=\"remote_video_{{callee}}\" autoplay playsinline></video>\r\n    <div class=\"bg-secondary\" style=\"\r\n  position: absolute;\r\n  right: 15px;\r\n  width: 15rem;\r\n  height: 18rem;\r\n  border-radius: 15px;\r\n  top:0px;\r\n\">\r\n      <div _ngcontent-oyw-c3=\"\" style=\"\r\n    position: absolute;\r\n    bottom: 8%;\r\n    margin: 0px auto;\r\n    text-align: center;\r\n    left: 27%;\r\n    z-index: 5;\r\n\"><button _ngcontent-oyw-c3=\"\" class=\"btn btn-danger mr-2\"><i _ngcontent-oyw-c3=\"\"\r\n            class=\"fas fa-video-slash \" (click)=\"call()\"></i></button><button _ngcontent-oyw-c3=\"\" class=\"btn btn-success ml-3\"><i\r\n            _ngcontent-oyw-c3=\"\" class=\"fas fa-microphone-alt-slash\"></i></button></div>\r\n      <video id=\"main_video\" class=\"frames__main_v qb-video_source bg-secondary\" style=\"\r\nwidth: 100%;\r\nheight: 100%;\r\nborder-radius: 15px;\r\n\" autoplay playsinline></video>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <button type=\"button\" (click)=\"call()\"> call</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/modules/auth/components/login/login.component.html":
/*!**************************************************************************************************************************!*\
  !*** D:/608755/POC/AIHackathon/MVP/node_modules/raw-loader!./src/app/modules/auth/components/login/login.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row login-bg\">\r\n  <div class=\"anim first\">\r\n    <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n      viewBox=\"0 0 500 200\" style=\"enable-background:new 0 0 500 200;\" xml:space=\"preserve\">\r\n      <g>\r\n        <polyline class=\"ekg\" points=\"486.6,113.8 328.2,113.8 310.3,132.3 296,70.7 246.8,127.4 241.6,120.2 233.9,166.4 227,27.6\r\n                  213.2,118.3 211.8,112.3 205.1,126.1 198.2,108.5 194.1,124.4 184.5,92.9 174.1,113 4.3,113 \t\" />\r\n      </g>\r\n    </svg>\r\n  </div>\r\n  <div class=\"anim last\">\r\n    <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n      viewBox=\"0 0 500 200\" style=\"enable-background:new 0 0 500 200;\" xml:space=\"preserve\">\r\n      <g>\r\n        <polyline class=\"ekg\" points=\"486.6,113.8 328.2,113.8 310.3,132.3 296,70.7 246.8,127.4 241.6,120.2 233.9,166.4 227,27.6\r\n                      213.2,118.3 211.8,112.3 205.1,126.1 198.2,108.5 194.1,124.4 184.5,92.9 174.1,113 4.3,113 \t\" />\r\n      </g>\r\n    </svg>\r\n  </div>\r\n  <div>\r\n    <form class=\"form-signin col-12\" [formGroup]=\"authForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\r\n      <div class=\"text-center py-3 px-md-4\">\r\n        <h1 class=\"logo mx-4\"><i class=\"fas fa-heartbeat\"></i>\r\n          <font class=\"px-2\"><b>Health</b></font>\r\n        </h1>\r\n      </div>\r\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"serviceError\">\r\n        <h4 class=\"alert-heading\">Error!</h4>\r\n        <p class=\"mb-0\">Service error, Kindly try again later</p>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Username</label>\r\n        <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" formControlName=\"username\" placeholder=\"Username\" required>\r\n        <mvp-err-text [control]=\"authForm.controls.username\" [submitted]=\"formSubmitAttempt\"></mvp-err-text>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" id=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" placeholder=\"Password\"\r\n          required>\r\n        <mvp-err-text [control]=\"authForm.controls.password\" [submitted]=\"formSubmitAttempt\"></mvp-err-text>\r\n      </div>\r\n      <div class=\"form-group mb-5\">\r\n        <label for=\"userType\">Login As</label>\r\n        <select class=\"form-control\" id=\"userType\" name=\"userType\" formControlName=\"userType\">\r\n          <option *ngFor=\"let eachType of userTypes| keyvalue\" [value]=\"eachType.value\">{{ eachType.key }}</option>\r\n        </select>\r\n        <mvp-err-text [control]=\"authForm.controls.userType\" [submitted]=\"formSubmitAttempt\"></mvp-err-text>\r\n      </div>\r\n      <button class=\"btn btn-lg btn-primary btn-block\">Sign in</button>\r\n      <p class=\"py-3 text-muted text-center\">&copy; 2019-2020</p>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/modules/core/components/footer/footer.component.html":
/*!****************************************************************************************************************************!*\
  !*** D:/608755/POC/AIHackathon/MVP/node_modules/raw-loader!./src/app/modules/core/components/footer/footer.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <nav class=\"row footer navbar fixed-bottom navbar-dark bg-primary\">\r\n    <div class=\"col-12 text-center\">\r\n      <p class=\"m-0\">© Technology Solutions - 2019</p>\r\n    </div>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/modules/core/components/header/header.component.html":
/*!****************************************************************************************************************************!*\
  !*** D:/608755/POC/AIHackathon/MVP/node_modules/raw-loader!./src/app/modules/core/components/header/header.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row navbar-dark bg-primary\">\r\n    <div class=\"col-12\">\r\n      <nav class=\"navbar navbar-expand-lg px-0\">\r\n        <a class=\"navbar-brand p-0\" href=\"#\">\r\n          <h1 class=\"logo m-0\">\r\n            <i class=\"fas fa-heartbeat\"></i>\r\n            <font class=\"px-2\">\r\n              <b>Health</b>\r\n            </font>\r\n          </h1>\r\n        </a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n          <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">\r\n                <i class=\"fas fa-home\"></i> Home\r\n                <span class=\"sr-only\">(current)</span>\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/appointments/my-appointments\" routerLinkActive=\"active\">\r\n                <i class=\"fas fa-calendar-alt\"></i> Appointments</a>\r\n            </li>\r\n            <li class=\"nav-item dropdown\">\r\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"bookAppointment\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                aria-expanded=\"false\">\r\n                <i class=\"fas fa-calendar-plus\"></i> Book Appointment\r\n              </a>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"bookAppointment\">\r\n                  <button class=\"dropdown-item\" routerLink=\"/appointments/book-appointment\" [queryParams]=\"{type: councellor}\" type=\"button\"><i class=\"fas fa-user-nurse\"></i> Counsellor</button>\r\n                  <button class=\"dropdown-item\" routerLink=\"/appointments/book-appointment\" type=\"button\"><i class=\"fas fa-user-md\"></i> Doctor</button>\r\n              </div>\r\n            </li>\r\n            <!-- <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/appointments/appointment-confirmation\" routerLinkActive=\"active\">\r\n                <i class=\"fas fa-calendar-check\"></i> Appointment Confirmation</a>\r\n            </li> -->\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/chat\" routerLinkActive=\"active\">\r\n                <i class=\"fas fa-comments\"></i> Chat</a>\r\n            </li>\r\n          </ul>\r\n          <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item dropdown\">\r\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                aria-expanded=\"false\">\r\n                <i class=\"fas fa-user-circle\"></i> {{ user.fullName }}\r\n              </a>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                <button class=\"btn btn-link\" (click)=\"logout()\">Logout</button>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/modules/core/components/loader/loader.component.html":
/*!****************************************************************************************************************************!*\
  !*** D:/608755/POC/AIHackathon/MVP/node_modules/raw-loader!./src/app/modules/core/components/loader/loader.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"show\">\r\n  <div class=\"loader-bg\"></div>\r\n  <div class=\"text-center loader-wrapper\">\r\n    <div class=\"spinner-border\" style=\"width: 3rem; height: 3rem;\" role=\"status\"></div>\r\n    <div class=\"text-center\">\r\n      <b>Loading...</b>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/modules/core/validators/err-text/err-text.component.html":
/*!********************************************************************************************************************************!*\
  !*** D:/608755/POC/AIHackathon/MVP/node_modules/raw-loader!./src/app/modules/core/validators/err-text/err-text.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isVisible\" class=\"d-block invalid-feedback\">{{ message }}</div>\r\n"

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/featured/appointments/appointments.module": [
		"./src/app/modules/featured/appointments/appointments.module.ts",
		"modules-featured-appointments-appointments-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zyb250ZW5kL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modules_core_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/core/services/session.service */ "./src/app/modules/core/services/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_video_call_video_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/video-call/video-call.service */ "./src/app/components/video-call/video-call.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_video_call_incoming_call_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/video-call/incoming-call.component */ "./src/app/components/video-call/incoming-call.component.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(_session, _videoCall, _modalService) {
        var _this = this;
        this._session = _session;
        this._videoCall = _videoCall;
        this._modalService = _modalService;
        this.title = 'frontend';
        this._sessionSub$ = this._session.select(_modules_core_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_KEY"].USER).subscribe(function (data) {
            _this.isLoggedIn = data.isLoggedIn;
        });
        this._videoCall.incomingCall.subscribe(function (initiatorID) {
            _this._incomingCall(initiatorID);
        });
    }
    AppComponent.prototype._incomingCall = function (initiatorID) {
        var _this = this;
        var modalRef = this._modalService.open(_components_video_call_incoming_call_component__WEBPACK_IMPORTED_MODULE_5__["IncomingComponent"], {
            backdrop: 'static'
        });
        modalRef.componentInstance.name = initiatorID;
        modalRef.componentInstance.accept.subscribe(function () {
            _this._videoCall.accept('main_video');
        });
        modalRef.componentInstance.decline.subscribe(function (data) {
            _this._videoCall.decline();
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._sessionSub$.unsubscribe();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _modules_core_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] },
        { type: _components_video_call_video_call_service__WEBPACK_IMPORTED_MODULE_3__["VideoCallService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'mvp-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modules_core_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"], _components_video_call_video_call_service__WEBPACK_IMPORTED_MODULE_3__["VideoCallService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/core/core.module */ "./src/app/modules/core/core.module.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_video_call_video_call_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/video-call/video-call.component */ "./src/app/components/video-call/video-call.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_video_call_incoming_call_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/video-call/incoming-call.component */ "./src/app/components/video-call/incoming-call.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"], _components_video_call_video_call_component__WEBPACK_IMPORTED_MODULE_9__["VideoCallComponent"], _components_video_call_incoming_call_component__WEBPACK_IMPORTED_MODULE_11__["IncomingComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _modules_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]
            ],
            entryComponents: [_components_video_call_incoming_call_component__WEBPACK_IMPORTED_MODULE_11__["IncomingComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _modules_auth_guard_logged_in_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/auth/guard/logged-in.guard */ "./src/app/modules/auth/guard/logged-in.guard.ts");
/* harmony import */ var _modules_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/auth/components/login/login.component */ "./src/app/modules/auth/components/login/login.component.ts");
/* harmony import */ var _modules_auth_guard_not_logged_in_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/auth/guard/not-logged-in.guard */ "./src/app/modules/auth/guard/not-logged-in.guard.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _components_video_call_video_call_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/video-call/video-call.component */ "./src/app/components/video-call/video-call.component.ts");









var routes = [
    {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        canActivate: [_modules_auth_guard_logged_in_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]]
    },
    {
        path: 'chat',
        component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"],
        canActivate: [_modules_auth_guard_logged_in_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]]
    },
    {
        path: 'login',
        component: _modules_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        canActivate: [_modules_auth_guard_not_logged_in_guard__WEBPACK_IMPORTED_MODULE_6__["NotLoggedInGuard"]]
    },
    {
        path: 'video-call',
        component: _components_video_call_video_call_component__WEBPACK_IMPORTED_MODULE_8__["VideoCallComponent"],
        canActivate: [_modules_auth_guard_logged_in_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]]
    },
    {
        path: 'appointments',
        loadChildren: './modules/featured/appointments/appointments.module#AppointmentsModule',
        canActivate: [_modules_auth_guard_logged_in_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]]
    },
    // {
    //   path: '**',
    //   redirectTo: '/login'
    // },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    initialNavigation: 'enabled',
                    useHash: true
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/chat/chat.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/chat/chat.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mvp-chat',
            template: __webpack_require__(/*! raw-loader!./chat.component.html */ "../../node_modules/raw-loader/index.js!./src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/components/chat/chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_core_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/core/services/session.service */ "./src/app/modules/core/services/session.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_session) {
        var _this = this;
        this._session = _session;
        this._sessionSub$ = this._session.select(_modules_core_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SESSION_KEY"].USER).subscribe(function (data) {
            _this.user = data.user;
        });
    }
    DashboardComponent.prototype.ngOnDestroy = function () {
        this._sessionSub$.unsubscribe();
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _modules_core_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "../../node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modules_core_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/video-call/incoming-call.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/video-call/incoming-call.component.ts ***!
  \******************************************************************/
/*! exports provided: IncomingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomingComponent", function() { return IncomingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var IncomingComponent = /** @class */ (function () {
    function IncomingComponent(activeModal) {
        this.activeModal = activeModal;
        this.accept = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.decline = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    IncomingComponent.prototype.success = function (val) {
        if (val === void 0) { val = null; }
        var data = {
            type: 'accept',
            data: val
        };
        this.accept.emit(data);
        this.activeModal.close(data);
    };
    IncomingComponent.prototype.dismiss = function (val) {
        if (val === void 0) { val = null; }
        var data = {
            type: 'decline',
            data: val
        };
        this.decline.emit(data);
        this.activeModal.close(data);
    };
    IncomingComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncomingComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncomingComponent.prototype, "accept", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IncomingComponent.prototype, "decline", void 0);
    IncomingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mvp-incoming',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-title\">\n        <h4>\n          Call from <strong class=\"j-ic_initiator\">{{ name }}</strong>\n        </h4>\n      </h4>\n    </div>\n    <div class=\"modal-footer\">\n      <button\n        type=\"button\"\n        class=\"btn btn-danger j-decline\"\n        (click)=\"dismiss()\"\n      >\n        Decline\n      </button>\n      <button\n        type=\"button\"\n        ngbAutofocus\n        class=\"btn btn-primary j-accept\"\n        (click)=\"success()\"\n      >\n        Accept\n      </button>\n    </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], IncomingComponent);
    return IncomingComponent;
}());



/***/ }),

/***/ "./src/app/components/video-call/video-call.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/video-call/video-call.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy92aWRlby1jYWxsL3ZpZGVvLWNhbGwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/video-call/video-call.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/video-call/video-call.component.ts ***!
  \***************************************************************/
/*! exports provided: VideoCallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCallComponent", function() { return VideoCallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modules_core_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../modules/core/services/session.service */ "./src/app/modules/core/services/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_call_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-call.service */ "./src/app/components/video-call/video-call.service.ts");




var VideoCallComponent = /** @class */ (function () {
    function VideoCallComponent(_videoCall, _session) {
        var _this = this;
        this._videoCall = _videoCall;
        this._session = _session;
        this._videoCall.calleeId.subscribe(function (callee) {
            _this.callee = callee;
        });
        this._session.select(_modules_core_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_KEY"].USER).subscribe(function (data) {
            if (data.isLoggedIn) {
                _this.callerId = data.user.userID;
            }
        });
    }
    VideoCallComponent.prototype.ngOnInit = function () { };
    VideoCallComponent.prototype.call = function () {
        if (this.callerId) {
            this._videoCall.call(this.callerId, 94617496, 'main_video');
        }
    };
    VideoCallComponent.ctorParameters = function () { return [
        { type: _video_call_service__WEBPACK_IMPORTED_MODULE_3__["VideoCallService"] },
        { type: _modules_core_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] }
    ]; };
    VideoCallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'mvp-video-call',
            template: __webpack_require__(/*! raw-loader!./video-call.component.html */ "../../node_modules/raw-loader/index.js!./src/app/components/video-call/video-call.component.html"),
            styles: [__webpack_require__(/*! ./video-call.component.css */ "./src/app/components/video-call/video-call.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_video_call_service__WEBPACK_IMPORTED_MODULE_3__["VideoCallService"], _modules_core_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
    ], VideoCallComponent);
    return VideoCallComponent;
}());



/***/ }),

/***/ "./src/app/components/video-call/video-call.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/video-call/video-call.service.ts ***!
  \*************************************************************/
/*! exports provided: VideoCallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCallService", function() { return VideoCallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _modules_core_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/core/services/session.service */ "./src/app/modules/core/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");






var VideoCallService = /** @class */ (function () {
    function VideoCallService(_session, _router) {
        var _this = this;
        this._session = _session;
        this._router = _router;
        this.CONFIG = {
            CREDENTIALS: {
                appId: 77722,
                authKey: 'cg8XYe6SOzWQ-24',
                authSecret: '8bBndFHddHAwEUh'
            },
            APP_CONFIG: {
                debug: true,
                webrtc: {
                    answerTimeInterval: 30,
                    dialingTimeInterval: 5,
                    disconnectTimeInterval: 35,
                    statsReportTimeInterval: 5
                }
            }
        };
        this.deviceId = {
            video: undefined,
            audio: undefined
        };
        this.calleeId = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.onRemoteStreamListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.incomingCall = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._session.select(_modules_core_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_KEY"].USER).subscribe(function (data) {
            if (data.isLoggedIn) {
                _this._initQBSession();
                _this.fillMediaSelects();
                _this.login(data.user.videoID);
            }
        });
    }
    VideoCallService.prototype._initQBSession = function () {
        var _this = this;
        QB.init(this.CONFIG.CREDENTIALS.appId, this.CONFIG.CREDENTIALS.authKey, this.CONFIG.CREDENTIALS.authSecret, this.CONFIG.APP_CONFIG);
        QB.webrtc.onRemoteStreamListener = function (session, userId, stream) {
            var state = _this.session.connectionStateForUser(userId), peerConnList = QB.webrtc.PeerConnectionState;
            if (state === peerConnList.DISCONNECTED ||
                state === peerConnList.FAILED ||
                state === peerConnList.CLOSED) {
                return false;
            }
            _this.session.peerConnections[userId].stream = stream;
            _this.session.attachMediaStream('remote_video_' + userId, stream);
        };
        QB.webrtc.onCallListener = function (session, extension) {
            _this.session = session;
            if (_this.session.state !== QB.webrtc.SessionConnectionState.CLOSED) {
                _this.incomingCall.next(session.initiatorID);
            }
        };
    };
    VideoCallService.prototype.fillMediaSelects = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            navigator.mediaDevices
                .getUserMedia({
                audio: true,
                video: true
            })
                .then(function (stream) {
                _this.showMediaDevices('videoinput')
                    .then(function () {
                    return _this.showMediaDevices('audioinput');
                })
                    .then(function () {
                    stream.getTracks().forEach(function (track) {
                        track.stop();
                    });
                    resolve();
                });
            })
                .catch(function (error) {
                _this.showMediaDevices('videoinput')
                    .then(function () {
                    return _this.showMediaDevices('audioinput');
                })
                    .then(function () {
                    resolve();
                });
            });
        });
    };
    VideoCallService.prototype.showMediaDevices = function (kind) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            QB.webrtc
                .getMediaDevices(kind)
                .then(function (devices) {
                var isVideoInput = kind === 'videoinput';
                if (isVideoInput) {
                    _this.deviceId.video = devices[0].deviceId;
                }
                else {
                    _this.deviceId.audio = devices[0].deviceId;
                }
                resolve();
            })
                .catch(function (error) {
                reject();
            });
        });
    };
    VideoCallService.prototype.login = function (login) {
        var _this = this;
        this._login(login).then(function (data) {
            _this.caller = data;
            QB.chat.connect({
                jid: QB.chat.helpers.getUserJid(data.id, _this.CONFIG.CREDENTIALS.appId),
                password: 'quickblox'
            }, function (err, res) {
                if (err) {
                    console.log(err);
                    alert('chat err');
                }
                else {
                    console.log(res);
                    alert('chat successs');
                }
            });
        }, function (error) {
            try {
                if (typeof error.message === 'string') {
                    alert(error.message);
                }
                else {
                    alert(error.message.errors.base[0]);
                }
            }
            catch (e) {
                console.log(error);
            }
        });
    };
    VideoCallService.prototype._login = function (login) {
        var userRequiredParams = {
            login: login,
            password: 'quickblox'
        };
        return new Promise(function (resolve, reject) {
            QB.createSession(function (csErr, csRes) {
                if (csErr) {
                    reject(csErr);
                }
                else {
                    /** In first trying to login */
                    QB.login(userRequiredParams, function (loginErr, loginUser) {
                        if (loginErr) {
                            console.log(loginErr);
                        }
                        else {
                            resolve(loginUser);
                        }
                    });
                }
            });
        });
    };
    VideoCallService.prototype.call = function (callerID, attendee, videoElem) {
        var _this = this;
        this._router.navigate(['video-call']);
        var calleesIds = [attendee]; // User's ids
        var sessionType = QB.webrtc.CallType.VIDEO; // AUDIO is also possible
        var additionalOptions = { bandwith: 512 }; // The video bandwith (number, optional, 0 = unlimited)
        var mediaParams = {
            audio: {
                deviceId: this.deviceId.audio
            },
            video: {
                deviceId: this.deviceId.video
            },
            options: {
                muted: true,
                mirror: true
            },
            elemId: videoElem //'main_video'
        };
        /** Check internet connection */
        if (!window.navigator.onLine) {
            alert('not online');
            return false;
        }
        this.session = QB.webrtc.createNewSession(calleesIds, sessionType, callerID, additionalOptions);
        this.session.getUserMedia(mediaParams, function (err, stream) {
            if (err ||
                !stream.getAudioTracks().length ||
                !stream.getVideoTracks().length) {
                alert('getmedia err');
                _this.session.stop({});
            }
            else {
                var callParameters = {};
                var pushRecipients_1 = [];
                _this.session.call({}, function () {
                    if (!window.navigator.onLine) {
                        _this.session.stop({});
                        alert('callerrror');
                    }
                    else {
                        alert('calling');
                        _this.callee = {
                            userID: attendee,
                            name: attendee,
                            state: 'connecting'
                        };
                        _this.calleeId.next(attendee);
                        pushRecipients_1.push(parseInt(attendee, 1));
                    }
                });
                // and also send push notification about incoming call
                // (corrently only iOS/Android users will receive it)
                //
                var params = {
                    notification_type: 'push',
                    user: { ids: pushRecipients_1 },
                    environment: 'development',
                    message: QB.pushnotifications.base64Encode(_this.caller.full_name + ' is calling you')
                };
                //
                QB.pushnotifications.events.create(params, function (err1, response) {
                    if (err1) {
                        console.log(err1);
                        alert('pushnotifications err' + JSON.stringify(err1));
                    }
                    else {
                        // success
                        console.log('Push Notification is sent.');
                        alert('Push Notification is sent.');
                    }
                });
            }
        });
    };
    VideoCallService.prototype.accept = function (videoElem) {
        var _this = this;
        this._router.navigate(['video-call']);
        var mediaParams = {
            audio: {
                deviceId: this.deviceId.audio
            },
            video: {
                deviceId: this.deviceId.video
            },
            elemId: videoElem,
            options: {
                muted: true,
                mirror: true
            }
        };
        this.session.getUserMedia(mediaParams, function (err, stream) {
            if (err ||
                !stream.getAudioTracks().length ||
                !stream.getVideoTracks().length) {
                alert('getmedia err');
                _this.session.stop({});
            }
            else {
                _this.callee = {
                    userID: _this.session.initiatorID,
                    name: _this.session.initiatorID,
                    state: 'incoming call'
                };
                _this.calleeId.next(_this.session.initiatorID);
                _this.session.accept({});
            }
        });
    };
    VideoCallService.prototype.decline = function () {
        if (!lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](this.session)) {
            this.session.reject({});
        }
    };
    VideoCallService.ctorParameters = function () { return [
        { type: _modules_core_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    VideoCallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modules_core_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], VideoCallService);
    return VideoCallService;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/modules/auth/components/login/login.component.ts");
/* harmony import */ var _guard_logged_in_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guard/logged-in.guard */ "./src/app/modules/auth/guard/logged-in.guard.ts");
/* harmony import */ var _guard_not_logged_in_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guard/not-logged-in.guard */ "./src/app/modules/auth/guard/not-logged-in.guard.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/core.module */ "./src/app/modules/core/core.module.ts");







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]
            ],
            providers: [_guard_logged_in_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"], _guard_not_logged_in_guard__WEBPACK_IMPORTED_MODULE_5__["NotLoggedInGuard"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/components/login/login.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/auth/components/login/login.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zyb250ZW5kL3NyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/auth/components/login/login.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/auth/components/login/login.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../core/services/api.service */ "./src/app/modules/core/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/components/base.component */ "./src/app/modules/core/components/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_model_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/model/user */ "./src/app/modules/core/model/user.ts");







var LoginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginComponent, _super);
    function LoginComponent(_api, _fb, _routes) {
        var _this = _super.call(this) || this;
        _this._api = _api;
        _this._fb = _fb;
        _this._routes = _routes;
        _this.userTypes = _core_model_user__WEBPACK_IMPORTED_MODULE_6__["UserType"];
        _this.formName = 'authForm';
        _this.serviceError = false;
        _this.authForm = _this._fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            userType: [_core_model_user__WEBPACK_IMPORTED_MODULE_6__["UserType"].PATIENTS, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        return _this;
    }
    LoginComponent.prototype.save = function () {
        var _this = this;
        this._api.initLogin(this.authForm.value).subscribe(function () {
            _this.serviceError = false;
            _this._routes.navigate(['dashboard']);
        }, function () {
            _this.serviceError = true;
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'mvp-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "../../node_modules/raw-loader/index.js!./src/app/modules/auth/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/auth/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}(_core_components_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/modules/auth/guard/logged-in.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/guard/logged-in.guard.ts ***!
  \*******************************************************/
/*! exports provided: LoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return LoggedInGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/services/session.service */ "./src/app/modules/core/services/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");




var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(_session, _routes) {
        var _this = this;
        this._session = _session;
        this._routes = _routes;
        this._sessionSub$ = this._session.select(_core_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_KEY"].USER).subscribe(function (data) {
            _this.isLoggedIn = data.isLoggedIn;
        });
    }
    LoggedInGuard.prototype.canActivate = function () {
        if (!this.isLoggedIn) {
            this._routes.navigate(['login']);
        }
        return this.isLoggedIn;
    };
    LoggedInGuard.prototype.ngOnDestroy = function () {
        this._sessionSub$.unsubscribe();
    };
    LoggedInGuard.ctorParameters = function () { return [
        { type: _core_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoggedInGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoggedInGuard);
    return LoggedInGuard;
}());



/***/ }),

/***/ "./src/app/modules/auth/guard/not-logged-in.guard.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/guard/not-logged-in.guard.ts ***!
  \***********************************************************/
/*! exports provided: NotLoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotLoggedInGuard", function() { return NotLoggedInGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/session.service */ "./src/app/modules/core/services/session.service.ts");




var NotLoggedInGuard = /** @class */ (function () {
    function NotLoggedInGuard(_session, _routes) {
        var _this = this;
        this._session = _session;
        this._routes = _routes;
        this._sessionSub$ = this._session.select(_core_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_KEY"].USER).subscribe(function (data) {
            _this.isLoggedIn = data.isLoggedIn;
        });
    }
    NotLoggedInGuard.prototype.canActivate = function () {
        if (this.isLoggedIn) {
            this._routes.navigate(['dashboard']);
        }
        return !this.isLoggedIn;
    };
    NotLoggedInGuard.prototype.ngOnDestroy = function () {
        this._sessionSub$.unsubscribe();
    };
    NotLoggedInGuard.ctorParameters = function () { return [
        { type: _core_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NotLoggedInGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NotLoggedInGuard);
    return NotLoggedInGuard;
}());



/***/ }),

/***/ "./src/app/modules/core/components/base.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/core/components/base.component.ts ***!
  \***********************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "../../node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__);

var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        this.formSubmitAttempt = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    BaseComponent.prototype.onSubmit = function () {
        if (this[this.formName].valid) {
            this.formSubmitAttempt.next(false);
            this.save();
        }
        else {
            this.formSubmitAttempt.next(true);
        }
    };
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/modules/core/components/footer/footer.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/core/components/footer/footer.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zyb250ZW5kL3NyYy9hcHAvbW9kdWxlcy9jb3JlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/components/footer/footer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/core/components/footer/footer.component.ts ***!
  \********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mvp-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "../../node_modules/raw-loader/index.js!./src/app/modules/core/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/modules/core/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/modules/core/components/header/header.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/core/components/header/header.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zyb250ZW5kL3NyYy9hcHAvbW9kdWxlcy9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/core/components/header/header.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/core/components/header/header.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/session.service */ "./src/app/modules/core/services/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apps_frontend_src_app_modules_core_model_doctor_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apps/frontend/src/app/modules/core/model/doctor-list */ "./src/app/modules/core/model/doctor-list.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_session, _routes) {
        var _this = this;
        this._session = _session;
        this._routes = _routes;
        this.councellor = apps_frontend_src_app_modules_core_model_doctor_list__WEBPACK_IMPORTED_MODULE_4__["COUNSELLOR"];
        this._sessionSub$ = this._session.select(_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SESSION_KEY"].USER).subscribe(function (data) {
            _this.user = data.user;
        });
    }
    HeaderComponent.prototype.logout = function () {
        this._session.logOut();
        this._routes.navigate(['login']);
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this._sessionSub$.unsubscribe();
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'mvp-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "../../node_modules/raw-loader/index.js!./src/app/modules/core/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/modules/core/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/core/components/loader/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/core/components/loader/index.ts ***!
  \*********************************************************/
/*! exports provided: LoaderComponent, LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.component */ "./src/app/modules/core/components/loader/loader.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return _loader_component__WEBPACK_IMPORTED_MODULE_0__["LoaderComponent"]; });

/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.service */ "./src/app/modules/core/components/loader/loader.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return _loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]; });





/***/ }),

/***/ "./src/app/modules/core/components/loader/loader.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/core/components/loader/loader.component.ts ***!
  \********************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "./src/app/modules/core/components/loader/loader.service.ts");



var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.show = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loaderService.loaderState
            .subscribe(function (state) {
            _this.show = state.show;
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoaderComponent.ctorParameters = function () { return [
        { type: _loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
    ]; };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mvp-loader',
            template: __webpack_require__(/*! raw-loader!./loader.component.html */ "../../node_modules/raw-loader/index.js!./src/app/modules/core/components/loader/loader.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/core/components/loader/loader.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/core/components/loader/loader.service.ts ***!
  \******************************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");



var LoaderService = /** @class */ (function () {
    function LoaderService() {
        /**
         * Number of pending requests
         * @private
         */
        this._pendingRequests = 0;
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    LoaderService.prototype.show = function () {
        this._pendingRequests++;
        if (1 === this._pendingRequests) {
            this.loaderSubject.next({ show: true });
        }
    };
    LoaderService.prototype.hide = function () {
        this._pendingRequests--;
        if (0 === this._pendingRequests) {
            this.loaderSubject.next({ show: false });
        }
    };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/modules/core/config/service-info.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/core/config/service-info.ts ***!
  \*****************************************************/
/*! exports provided: serviceInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceInfo", function() { return serviceInfo; });
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/service */ "./src/app/modules/core/model/service.ts");
var _a;

var serviceInfo = (_a = {},
    _a[_model_service__WEBPACK_IMPORTED_MODULE_0__["SERVICE_NAME"].AUTHENTICATE_USER] = {
        method: _model_service__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHODS"].POST,
        operationName: 'authenticateUser',
        version: '1.0.0'
    },
    _a[_model_service__WEBPACK_IMPORTED_MODULE_0__["SERVICE_NAME"].LOOKUP_SPECIALITY_TYPE] = {
        method: _model_service__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHODS"].GET,
        operationName: 'lookupSpecialityType',
        version: '1.0.0'
    },
    _a[_model_service__WEBPACK_IMPORTED_MODULE_0__["SERVICE_NAME"].DOCTOR_LIST] = {
        method: _model_service__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHODS"].GET,
        operationName: 'doctorList',
        version: '1.0.0'
    },
    _a[_model_service__WEBPACK_IMPORTED_MODULE_0__["SERVICE_NAME"].BOOK_APPOINTMENT] = {
        method: _model_service__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHODS"].GET,
        operationName: 'bookAppointment',
        version: '1.0.0'
    },
    _a);


/***/ }),

/***/ "./src/app/modules/core/core.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/core/core.module.ts ***!
  \*********************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/modules/core/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/modules/core/components/footer/footer.component.ts");
/* harmony import */ var _http_interceptors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http-interceptors */ "./src/app/modules/core/http-interceptors/index.ts");
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/loader */ "./src/app/modules/core/components/loader/index.ts");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validators */ "./src/app/modules/core/validators/index.ts");











var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_loader__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"], _validators__WEBPACK_IMPORTED_MODULE_10__["ErrTextComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            exports: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _components_loader__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _validators__WEBPACK_IMPORTED_MODULE_10__["ErrTextComponent"]
            ],
            providers: [_components_loader__WEBPACK_IMPORTED_MODULE_9__["LoaderService"], _validators__WEBPACK_IMPORTED_MODULE_10__["ValidationService"], _http_interceptors__WEBPACK_IMPORTED_MODULE_8__["httpInterceptorProviders"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/modules/core/http-interceptors/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/core/http-interceptors/index.ts ***!
  \*********************************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _loading_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading-interceptor */ "./src/app/modules/core/http-interceptors/loading-interceptor.ts");
/* harmony import */ var _service_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-interceptor */ "./src/app/modules/core/http-interceptors/service-interceptor.ts");
/* "Barrel" of Http Interceptors */



/** Http interceptor providers in outside-in order */
var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _loading_interceptor__WEBPACK_IMPORTED_MODULE_1__["LoadingInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _service_interceptor__WEBPACK_IMPORTED_MODULE_2__["ServiceInterceptor"], multi: true }
];


/***/ }),

/***/ "./src/app/modules/core/http-interceptors/loading-interceptor.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/core/http-interceptors/loading-interceptor.ts ***!
  \***********************************************************************/
/*! exports provided: LoadingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function() { return LoadingInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/loader */ "./src/app/modules/core/components/loader/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");




var LoadingInterceptor = /** @class */ (function () {
    function LoadingInterceptor(loader) {
        this.loader = loader;
    }
    LoadingInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.loader.show();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this.loader.hide();
        }));
    };
    LoadingInterceptor.ctorParameters = function () { return [
        { type: _components_loader__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
    ]; };
    LoadingInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_loader__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], LoadingInterceptor);
    return LoadingInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/core/http-interceptors/service-interceptor.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/core/http-interceptors/service-interceptor.ts ***!
  \***********************************************************************/
/*! exports provided: ServiceInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInterceptor", function() { return ServiceInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../model/service */ "./src/app/modules/core/model/service.ts");
/* harmony import */ var _config_service_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../config/service-info */ "./src/app/modules/core/config/service-info.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");








var ServiceInterceptor = /** @class */ (function () {
    function ServiceInterceptor() {
    }
    ServiceInterceptor.prototype._init = function (serviceName) {
        if (lodash__WEBPACK_IMPORTED_MODULE_5__["has"](_config_service_info__WEBPACK_IMPORTED_MODULE_2__["serviceInfo"], serviceName)) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](lodash__WEBPACK_IMPORTED_MODULE_5__["get"](_config_service_info__WEBPACK_IMPORTED_MODULE_2__["serviceInfo"], serviceName)), { serviceName: serviceName });
        }
    };
    ServiceInterceptor.prototype._getMethod = function (config) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].loadFromAsset ? _model_service__WEBPACK_IMPORTED_MODULE_1__["HTTP_METHODS"].GET : config.method;
    };
    ServiceInterceptor.prototype._getUrl = function (reqUrl, config) {
        var endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].loadFromAsset ? config.operationName + '.json' : config.operationName + '/' + config.version;
        return "" + _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl + endpoint;
    };
    ServiceInterceptor.prototype._getHeaders = function (config) {
        var defaultHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        // if (config.isAuthenticated && sessionStorage.getItem('authToken')) {
        //   defaultHeaders['authToken'] = sessionStorage.getItem('authToken');
        // }
        return defaultHeaders;
    };
    ServiceInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var config = this._init(req.url);
        if (!lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"](config)) {
            var apiReq = req.clone({
                method: this._getMethod(config),
                url: this._getUrl(req.url, config),
                setHeaders: this._getHeaders(config)
            });
            return next.handle(apiReq)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) { return _this.handleResponse(res, config); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
                throw e;
            }));
        }
        return next.handle(req);
    };
    ServiceInterceptor.prototype._isSuccess = function (data) {
        return lodash__WEBPACK_IMPORTED_MODULE_5__["has"](data, 'statusCode') && data.statusCode === '0000';
    };
    ServiceInterceptor.prototype._getNewResponse = function (res, result) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]({
            body: result,
            headers: res.headers,
            status: res.status,
            statusText: res.statusText,
            url: res.url
        });
    };
    ServiceInterceptor.prototype.handleResponse = function (res, service) {
        if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
            var result = res.body;
            if (this._isSuccess(result)) {
                return this._getNewResponse(res, result.details || result);
            }
            else {
                this._returnError(result);
            }
        }
        return res;
    };
    ServiceInterceptor.prototype._returnError = function (data) {
        throw new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]({
            error: lodash__WEBPACK_IMPORTED_MODULE_5__["get"](data, 'details.message', 'Error'),
            status: lodash__WEBPACK_IMPORTED_MODULE_5__["get"](data, 'header.statusCode'),
            statusText: lodash__WEBPACK_IMPORTED_MODULE_5__["get"](data, 'header.statusDescription')
        });
    };
    ServiceInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
    ], ServiceInterceptor);
    return ServiceInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/core/model/doctor-list.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/core/model/doctor-list.ts ***!
  \***************************************************/
/*! exports provided: TIME_SLOTS, COUNSELLOR, InitialDoctorListState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIME_SLOTS", function() { return TIME_SLOTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNSELLOR", function() { return COUNSELLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialDoctorListState", function() { return InitialDoctorListState; });
var TIME_SLOTS;
(function (TIME_SLOTS) {
    TIME_SLOTS["09:00 AM"] = "0900";
    TIME_SLOTS["11:00 AM"] = "1100";
    TIME_SLOTS["03:00 PM"] = "1500";
    TIME_SLOTS["05:00 PM"] = "1700";
})(TIME_SLOTS || (TIME_SLOTS = {}));
var COUNSELLOR = 'counsellor';
var InitialDoctorListState = {
    specialityTypes: [],
    doctorList: {},
    newAppointmentBanner: false
};


/***/ }),

/***/ "./src/app/modules/core/model/service.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/core/model/service.ts ***!
  \***********************************************/
/*! exports provided: HTTP_METHODS, SERVICE_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_METHODS", function() { return HTTP_METHODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_NAME", function() { return SERVICE_NAME; });
var HTTP_METHODS;
(function (HTTP_METHODS) {
    HTTP_METHODS["POST"] = "post";
    HTTP_METHODS["PATCH"] = "patch";
    HTTP_METHODS["GET"] = "get";
    HTTP_METHODS["DELETE"] = "delete";
    HTTP_METHODS["PUT"] = "put";
})(HTTP_METHODS || (HTTP_METHODS = {}));
var SERVICE_NAME;
(function (SERVICE_NAME) {
    SERVICE_NAME["AUTHENTICATE_USER"] = "authenticateUser";
    SERVICE_NAME["LOOKUP_SPECIALITY_TYPE"] = "lookupSpecialityType";
    SERVICE_NAME["DOCTOR_LIST"] = "doctorList";
    SERVICE_NAME["BOOK_APPOINTMENT"] = "bookAppointment";
})(SERVICE_NAME || (SERVICE_NAME = {}));


/***/ }),

/***/ "./src/app/modules/core/model/user.ts":
/*!********************************************!*\
  !*** ./src/app/modules/core/model/user.ts ***!
  \********************************************/
/*! exports provided: UserType, User, InitialUserState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialUserState", function() { return InitialUserState; });
var UserType;
(function (UserType) {
    UserType["PATIENTS"] = "patients";
    UserType["COUNSELLOR"] = "counsellor";
    UserType["DOCTOR"] = "doctor";
})(UserType || (UserType = {}));
var User = /** @class */ (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return this.firstName + ' ' + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.deserialize = function (input) {
        Object.assign(this, input);
        return this;
    };
    return User;
}());

var InitialUserState = {
    user: new User(),
    isLoggedIn: false,
    appointmentDetails: []
};


/***/ }),

/***/ "./src/app/modules/core/services/api.service.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/core/services/api.service.ts ***!
  \******************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session.service */ "./src/app/modules/core/services/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apps_frontend_src_app_modules_core_model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apps/frontend/src/app/modules/core/model/service */ "./src/app/modules/core/model/service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");







var ApiService = /** @class */ (function () {
    function ApiService(_http, _session) {
        this._http = _http;
        this._session = _session;
    }
    ApiService.prototype.logIn = function (payload) {
        var _this = this;
        return this._http.post(apps_frontend_src_app_modules_core_model_service__WEBPACK_IMPORTED_MODULE_3__["SERVICE_NAME"].AUTHENTICATE_USER, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (response) {
            _this._session.setState(_session_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_KEY"].USER, {
                isLoggedIn: true,
                user: response,
                appointmentDetails: response.appointmentDetails
            });
        }));
    };
    ApiService.prototype.getSpecialityTypes = function () {
        var _this = this;
        return this._http.get(apps_frontend_src_app_modules_core_model_service__WEBPACK_IMPORTED_MODULE_3__["SERVICE_NAME"].LOOKUP_SPECIALITY_TYPE).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (response) {
            _this._session.setState(_session_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_KEY"].DOCTOR_LIST, {
                specialityTypes: response.specialityTypes
            });
        }));
    };
    ApiService.prototype.initLogin = function (payload) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([this.logIn(payload), this.getSpecialityTypes()]);
    };
    ApiService.prototype.getDoctorList = function (specialityType) {
        var _this = this;
        return this._http.get(apps_frontend_src_app_modules_core_model_service__WEBPACK_IMPORTED_MODULE_3__["SERVICE_NAME"].DOCTOR_LIST, {
            params: {
                specialityType: specialityType
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (response) {
            var _a;
            _this._session.setState(_session_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_KEY"].DOCTOR_LIST, {
                doctorList: (_a = {},
                    _a[specialityType] = response.doctorList,
                    _a)
            });
        }));
    };
    ApiService.prototype.getTimeSlots = function (specialityType, doctorID) {
        return this._http.get(apps_frontend_src_app_modules_core_model_service__WEBPACK_IMPORTED_MODULE_3__["SERVICE_NAME"].DOCTOR_LIST, {
            params: {
                specialityType: specialityType,
                doctorID: doctorID
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.appointmentDetails.bookedAppointments; }));
    };
    ApiService.prototype.bookAppointment = function (data) {
        return this._http.post(apps_frontend_src_app_modules_core_model_service__WEBPACK_IMPORTED_MODULE_3__["SERVICE_NAME"].BOOK_APPOINTMENT, data);
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/modules/core/services/session.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/core/services/session.service.ts ***!
  \**********************************************************/
/*! exports provided: SESSION_KEY, SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_KEY", function() { return SESSION_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _model_doctor_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../model/doctor-list */ "./src/app/modules/core/model/doctor-list.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_model_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/model/user */ "./src/app/modules/core/model/user.ts");






var SESSION_KEY;
(function (SESSION_KEY) {
    SESSION_KEY["USER"] = "user";
    SESSION_KEY["DOCTOR_LIST"] = "doctorList";
})(SESSION_KEY || (SESSION_KEY = {}));
;
var SessionService = /** @class */ (function () {
    function SessionService() {
        var _this = this;
        var _a;
        this._sessionSupport = true;
        this._state = (_a = {},
            _a[SESSION_KEY.USER] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](_core_model_user__WEBPACK_IMPORTED_MODULE_5__["InitialUserState"])),
            _a[SESSION_KEY.DOCTOR_LIST] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](_model_doctor_list__WEBPACK_IMPORTED_MODULE_1__["InitialDoctorListState"])),
            _a);
        try {
            if (sessionStorage) {
                lodash__WEBPACK_IMPORTED_MODULE_4__["each"](Object.keys(SESSION_KEY), function (eachKey) {
                    if (_this._hasItem(SESSION_KEY[eachKey])) {
                        _this.setState(SESSION_KEY[eachKey], _this._getItem(SESSION_KEY[eachKey]));
                    }
                });
            }
        }
        catch (e) {
            this._sessionSupport = false;
            console.warn('Unable to access session storage');
        }
    }
    SessionService.prototype.select = function (key) {
        if (this._state[key]) {
            return this._state[key].asObservable();
        }
        else {
            throw Error("session " + key + " is not defined");
        }
    };
    SessionService.prototype.setState = function (key, data, mergeArray) {
        if (mergeArray === void 0) { mergeArray = false; }
        var nextValue = lodash__WEBPACK_IMPORTED_MODULE_4__["mergeWith"]({}, lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](this._state[key].value), data, function (objValue, srcValue) {
            if (lodash__WEBPACK_IMPORTED_MODULE_4__["isArray"](objValue)) {
                return mergeArray ? srcValue.concat(objValue) : srcValue;
            }
        });
        if (this._sessionSupport) {
            sessionStorage.setItem(key, JSON.stringify(nextValue));
        }
        this._state[key].next(nextValue);
    };
    SessionService.prototype.logOut = function () {
        this._state[SESSION_KEY.USER].next(lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](_core_model_user__WEBPACK_IMPORTED_MODULE_5__["InitialUserState"]));
        if (this._sessionSupport) {
            sessionStorage.clear();
        }
    };
    SessionService.prototype._hasItem = function (key) {
        return (this._sessionSupport && lodash__WEBPACK_IMPORTED_MODULE_4__["has"](sessionStorage, key));
    };
    SessionService.prototype._getItem = function (key) {
        if (this._hasItem(key)) {
            var val = JSON.parse(sessionStorage.getItem(key));
            return val;
        }
    };
    SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/modules/core/validators/err-text/err-text.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/core/validators/err-text/err-text.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zyb250ZW5kL3NyYy9hcHAvbW9kdWxlcy9jb3JlL3ZhbGlkYXRvcnMvZXJyLXRleHQvZXJyLXRleHQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/core/validators/err-text/err-text.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/core/validators/err-text/err-text.component.ts ***!
  \************************************************************************/
/*! exports provided: ErrTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrTextComponent", function() { return ErrTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validation.service */ "./src/app/modules/core/validators/validation.service.ts");







var ErrTextComponent = /** @class */ (function () {
    function ErrTextComponent(elRef, _validation) {
        this._validation = _validation;
        this.isVisible = true;
        this._curentElem = elRef.nativeElement.parentElement.querySelector('input, select, textarea');
    }
    ErrTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.control.statusChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (state) {
            _this.setVisibilty();
        });
        this.control.valueChanges.subscribe(function (val) {
            if (!lodash__WEBPACK_IMPORTED_MODULE_4__["isEqual"](_this._errors, _this.control.errors)) {
                _this.setErrorMsg();
            }
        });
        this.submitted.subscribe(function (value) {
            _this._submitted = value;
            _this.setVisibilty();
        });
    };
    ErrTextComponent.prototype.setVisibilty = function () {
        var hasError = this.control && this.control.errors && this._submitted;
        if (this._curentElem && this.control) {
            if (hasError) {
                this._curentElem.classList.add('is-invalid');
            }
            else {
                this._curentElem.classList.remove('is-invalid');
            }
        }
        this.isVisible = hasError;
        this.setErrorMsg();
    };
    ErrTextComponent.prototype.setErrorMsg = function () {
        this._errors = this.control.errors;
        this.message = this._validation.getErrorMsg(this.control);
    };
    ErrTextComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["AbstractControl"])
    ], ErrTextComponent.prototype, "control", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"])
    ], ErrTextComponent.prototype, "submitted", void 0);
    ErrTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mvp-err-text',
            template: __webpack_require__(/*! raw-loader!./err-text.component.html */ "../../node_modules/raw-loader/index.js!./src/app/modules/core/validators/err-text/err-text.component.html"),
            styles: [__webpack_require__(/*! ./err-text.component.css */ "./src/app/modules/core/validators/err-text/err-text.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"]])
    ], ErrTextComponent);
    return ErrTextComponent;
}());



/***/ }),

/***/ "./src/app/modules/core/validators/index.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/core/validators/index.ts ***!
  \**************************************************/
/*! exports provided: ErrTextComponent, ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _err_text_err_text_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./err-text/err-text.component */ "./src/app/modules/core/validators/err-text/err-text.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrTextComponent", function() { return _err_text_err_text_component__WEBPACK_IMPORTED_MODULE_0__["ErrTextComponent"]; });

/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation.service */ "./src/app/modules/core/validators/validation.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return _validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"]; });





/***/ }),

/***/ "./src/app/modules/core/validators/validation.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/core/validators/validation.service.ts ***!
  \***************************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var ValidationService = /** @class */ (function () {
    function ValidationService() {
        this._errorMessages = {
            required: function (name) { return name + " is required"; },
            minlength: function (name, data) { return name + " must have minimum " + data.requiredLength + " characters"; },
            maxlength: function (name, data) { return name + " must have maximum " + data.requiredLength + " characters"; }
        };
    }
    ValidationService.prototype.getErrorMsg = function (formControl) {
        if (formControl.errors) {
            var firstRule = lodash__WEBPACK_IMPORTED_MODULE_2__["head"](Object.keys(formControl.errors));
            var displayControlName = this.getControlName(formControl);
            return (this._errorMessages[firstRule] &&
                this._errorMessages[firstRule](displayControlName, formControl.errors[firstRule])) || 'Invalid ' + displayControlName;
        }
    };
    ValidationService.prototype.getControlName = function (formControl) {
        return lodash__WEBPACK_IMPORTED_MODULE_2__["startCase"](this._getControlName(formControl));
    };
    ValidationService.prototype._getControlName = function (control) {
        var group = control.parent;
        if (!group) {
            return null;
        }
        var name;
        Object.keys(group.controls).forEach(function (key) {
            var childControl = group.get(key);
            if (childControl !== control) {
                return;
            }
            name = key;
        });
        return name;
    };
    ValidationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    loadFromAsset: true,
    baseUrl: '/assets/data/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\608755\POC\AIHackathon\MVP\apps\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map