(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!******************************************************************************************!*\
  !*** D:/608755/POC/AIHackathon/MVP/node_modules/raw-loader!./src/app/app.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mvp-loader></mvp-loader>\r\n<ng-template [ngIf]=\"!isloggedIn\">\r\n  <div class=\"container-fluid\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</ng-template>\r\n<ng-template [ngIf]=\"isloggedIn\">\r\n  <mvp-header></mvp-header>\r\n  <div class=\"container mt-5 mb-5\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <mvp-footer></mvp-footer>\r\n</ng-template> -->\r\n<form class=\"form-signin col-12\"  [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"caller\">caller</label>\r\n      <input type=\"text\" id=\"caller\" name=\"caller\" class=\"form-control\" formControlName=\"caller\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"attendee\">attendee</label>\r\n      <input type=\"text\" id=\"attendee\" class=\"form-control\" name=\"attendee\" formControlName=\"attendee\" required>\r\n    </div>\r\n    <button class=\"btn btn-lg btn-primary btn-block\">Call</button>\r\n    <p class=\"py-3 text-muted text-center\">&copy; 2019-2020</p>\r\n  </form>\r\n<video id=\"main_video\" class=\"frames__main_v qb-video_source\" autoplay playsinline></video>\r\n<button type=\"button\" (click)=\"login()\">login</button>\r\n<!-- <button type=\"button\" (click)=\"call()\">call</button> -->\r\n<div class=\"frames_callee callees__callee j-callee\">\r\n    <div class=\"frames_callee__inner\">\r\n        <p class=\"frames_callee__status j-callee_status_{{callee.userID}}\">\r\n            {{callee.state}}\r\n        </p>\r\n\r\n        <div class=\"qb-video\">\r\n            <video class=\"j-callees__callee__video qb-video_source\"\r\n                   id=\"remote_video_{{callee.userID}}\" autoplay playsinline>\r\n            </video>\r\n        </div>\r\n    </div>\r\n\r\n    <p class=\"frames_callee__name\">{{callee.name}}</p>\r\n\r\n    <div class=\"frames_callee__bitrate\">\r\n        <span id=\"bitrate_{{callee.userID}}\">0</span> kbps\r\n    </div>\r\n</div>\r\n<!-- SOUNDS -->\r\n<!-- <audio id=\"endCallSignal\" preload=\"auto\">\r\n    <source src=\"audio/end_of_call.ogg\" type=\"audio/ogg\"/>\r\n    <source src=\"audio/end_of_call.mp3\" type=\"audio/mp3\"/>\r\n</audio>\r\n\r\n<audio id=\"callingSignal\" loop preload=\"auto\">\r\n    <source src=\"audio/calling.ogg\" type=\"audio/ogg\"/>\r\n    <source src=\"audio/calling.mp3\" type=\"audio/mp3\"/>\r\n</audio>\r\n\r\n<audio id=\"ringtoneSignal\" loop preload=\"auto\">\r\n    <source src=\"audio/ringtone.ogg\" type=\"audio/ogg\"/>\r\n    <source src=\"audio/ringtone.mp3\" type=\"audio/mp3\"/>\r\n</audio> -->\r\n"

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

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");

// import { AuthService } from './modules/auth/services/auth.service';


var AppComponent = /** @class */ (function () {
    function AppComponent(
    // private _auth:AuthService,
    _fb) {
        this._fb = _fb;
        this.title = 'frontend';
        this.CONFIG = {
            CREDENTIALS: {
                'appId': 77722,
                'authKey': 'cg8XYe6SOzWQ-24',
                'authSecret': '8bBndFHddHAwEUh'
            },
            APP_CONFIG: {
                debug: true,
                webrtc: {
                    answerTimeInterval: 30,
                    dialingTimeInterval: 5,
                    disconnectTimeInterval: 35,
                    statsReportTimeInterval: 5
                }
            },
        };
        this.form = this._fb.group({
            caller: '',
            attendee: ''
        });
        this.deviceId = {
            video: undefined,
            audio: undefined
        };
        this.callee = {
            'userID': this.form.value.attendee,
            'name': this.form.value.attendee,
            'state': 'connecting'
        };
        this.sounds = {
            'call': 'callingSignal',
            'end': 'endCallSignal',
            'rington': 'ringtoneSignal'
        };
        this.call = document.getElementById(this.sounds.call);
        // this._auth.isloggedIn.subscribe((isloggedIn) => {
        //   this.isloggedIn = isloggedIn;
        // });
        this._initQBSession();
        this.fillMediaSelects();
    }
    AppComponent.prototype._initQBSession = function () {
        var _this = this;
        QB.init(this.CONFIG.CREDENTIALS.appId, this.CONFIG.CREDENTIALS.authKey, this.CONFIG.CREDENTIALS.authSecret, this.CONFIG.APP_CONFIG);
        QB.webrtc.onRemoteStreamListener = function (session, userId, stream) {
            console.group('onRemoteStreamListener.');
            console.log('userId: ', userId);
            console.log('Session: ', session);
            console.log('Stream: ', stream);
            console.groupEnd();
            alert('onRemoteStreamListener =--' + userId);
            var state = _this.session.connectionStateForUser(userId), peerConnList = QB.webrtc.PeerConnectionState;
            alert(JSON.stringify(peerConnList));
            if (state === peerConnList.DISCONNECTED || state === peerConnList.FAILED || state === peerConnList.CLOSED) {
                return false;
            }
            _this.session.peerConnections[userId].stream = stream;
            console.info('onRemoteStreamListener add video to the video element', stream);
            _this.session.attachMediaStream('remote_video_' + userId, stream);
            // if( remoteStreamCounter === 0) {
            //     $('#remote_video_' + userId).click();
            //     app.mainVideo = userId;
            //     ++remoteStreamCounter;
            // }
            // if(!call.callTimer) {
            //     call.callTimer = setInterval( function(){ call.updTimer.call(call); }, 1000);
            // }
            // $('.frames_callee__bitrate').show();
        };
    };
    AppComponent.prototype.showMediaDevices = function (kind) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            QB.webrtc.getMediaDevices(kind).then(function (devices) {
                var isVideoInput = (kind === 'videoinput');
                // $select = isVideoInput ? $(ui.videoSourceFilter) : $(ui.audioSourceFilter);
                if (isVideoInput) {
                    _this.deviceId.video = devices[0].deviceId;
                }
                else {
                    _this.deviceId.audio = devices[0].deviceId;
                }
                console.log(devices);
                // $select.empty();
                // if (devices.length) {
                //     for (var i = 0; i !== devices.length; ++i) {
                //         var deviceInfo = devices[i],
                //             option = document.createElement('option');
                //         option.value = deviceInfo.deviceId;
                //         if (deviceInfo.kind === kind) {
                //             option.text = deviceInfo.label || (isVideoInput ? 'Camera ' : 'Mic ') + (i + 1);
                //             $select.append(option);
                //         }
                //     }
                //     $('.j-media_sources').removeClass('invisible');
                // } else {
                //     $('.j-media_sources').addClass('invisible');
                // }
                resolve();
            }).catch(function (error) {
                console.warn('getMediaDevices', error);
                reject();
            });
        });
    };
    AppComponent.prototype.fillMediaSelects = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            navigator.mediaDevices.getUserMedia({
                audio: true,
                video: true
            }).then(function (stream) {
                _this.showMediaDevices('videoinput').then(function () {
                    return _this.showMediaDevices('audioinput');
                }).then(function () {
                    stream.getTracks().forEach(function (track) {
                        track.stop();
                    });
                    resolve();
                });
            }).catch(function (error) {
                console.warn('Video devices were shown without names (getUserMedia error)', error);
                _this.showMediaDevices('videoinput').then(function () {
                    return _this.showMediaDevices('audioinput');
                }).then(function () {
                    resolve();
                });
            });
        });
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        var calleesIds = [this.form.value.attendee]; // User's ids
        var sessionType = QB.webrtc.CallType.VIDEO; // AUDIO is also possible
        var callerID = this.form.value.caller; // Your user ID (optional, will be defined from chat connection)
        var additionalOptions = { "bandwith": 512 }; // The video bandwith (number, optional, 0 = unlimited)
        var mediaParams = {
            'audio': {
                deviceId: this.deviceId.audio
            },
            'video': {
                deviceId: this.deviceId.video
            },
            'options': {
                'muted': true,
                'mirror': true
            },
            'elemId': 'main_video'
        };
        /** Check internet connection */
        if (!window.navigator.onLine) {
            alert('not online');
            return false;
        }
        this.session = QB.webrtc.createNewSession(calleesIds, sessionType, callerID, additionalOptions);
        this.session.getUserMedia(mediaParams, function (err, stream) {
            if (err || !stream.getAudioTracks().length || !stream.getVideoTracks().length) {
                alert('getmedia err');
                // if (err || !stream.getAudioTracks().length || (isAudio ? false : !stream.getVideoTracks().length)) {
                //   var errorMsg = '';
                _this.session.stop({});
                //   app.helpers.stateBoard.update({
                //     'title': 'tpl_device_not_found',
                //     'isError': 'qb-error',
                //     'property': {
                //       'name': app.caller.full_name
                //     }
                //   });
            }
            else {
                var callParameters = {};
                // if (isAudio) {
                //   callParameters.callType = 2;
                // }
                // Call to users
                //
                var pushRecipients = [];
                _this.session.call({}, function () {
                    if (!window.navigator.onLine) {
                        _this.session.stop({});
                        alert('callerrror');
                        // app.helpers.stateBoard.update({ 'title': 'connect_error', 'isError': 'qb-error' });
                    }
                    else {
                        // var compiled = _.template($('#callee_video').html());
                        alert('calling');
                        // app.helpers.stateBoard.update({ 'title': 'calling' });
                        _this.callee = {
                            'userID': _this.form.value.attendee,
                            'name': _this.form.value.attendee,
                            'state': 'connecting'
                        };
                        pushRecipients.push(_this.form.value.attendee);
                        // this.call.play();
                        // Object.keys(app.callees).forEach(function (id, i, arr) {
                        //   videoElems += compiled({
                        //     'userID': id,
                        //     'name': app.callees[id],
                        //     'state': 'connecting'
                        //   });
                        //   pushRecipients.push(id);
                        // });
                        // $('.j-callees').append(videoElems);
                        // $bandwidthSelect.attr('disabled', true);
                        // $btn.addClass('hangup');
                        // app.helpers.setFooterPosition();
                    }
                });
                // and also send push notification about incoming call
                // (corrently only iOS/Android users will receive it)
                //
                var params = {
                    notification_type: 'push',
                    user: { ids: pushRecipients },
                    environment: 'development',
                    message: QB.pushnotifications.base64Encode(_this.caller.full_name + ' is calling you')
                };
                //
                QB.pushnotifications.events.create(params, function (err, response) {
                    if (err) {
                        console.log(err);
                        alert('pushnotifications err' + JSON.stringify(err));
                    }
                    else {
                        // success
                        console.log("Push Notification is sent.");
                        alert('Push Notification is sent.');
                    }
                });
            }
        });
    };
    AppComponent.prototype.login = function () {
        var _this = this;
        this._login().then(function (data) {
            console.log(data);
            _this.caller = data;
            QB.chat.connect({
                jid: QB.chat.helpers.getUserJid(data.id, _this.CONFIG.CREDENTIALS.appId),
                password: 'quickblox'
            }, function (err, res) {
                if (err) {
                    console.log(err);
                    alert('chat err');
                    // if(!_.isEmpty(this.session)) {
                    //     this.session.stop({});
                    //     this.session = {};
                    // }
                    // app.helpers.changeFilter('#localVideo', 'no');
                    // app.helpers.changeFilter('#main_video', 'no');
                    // app.mainVideo = 0;
                    // $(ui.filterSelect).val('no');
                    // app.calleesAnwered = [];
                    // app.calleesRejected = [];
                    // if(call.callTimer) {
                    //     $('#timer').addClass('invisible');
                    //     clearInterval(call.callTimer);
                    //     call.callTimer = null;
                    //     call.callTime = 0;
                    //     app.helpers.network = {};
                    // }
                }
                else {
                    console.log(res);
                    alert('chat successs');
                    // $form.removeClass('join-wait');
                    // $form.trigger('reset');
                    // localStorage.setItem('isAuth', true);
                    // app.router.navigate('dashboard', { trigger: true });
                }
            });
        }, function (error) {
            try {
                if (typeof error.message == "string") {
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
    AppComponent.prototype._login = function () {
        var userRequiredParams = {
            'login': this.form.value.caller,
            'password': 'quickblox'
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
                            /** Login failed, trying to create account */
                            // QB.users.create({
                            //     'login': userRequiredParams.login,
                            //     'password': userRequiredParams.password,
                            //     'full_name': data.username,
                            // }, function(createErr, createUser){
                            //     if(createErr) {
                            //         console.log('[create user] Error:', createErr);
                            //         reject(createErr);
                            //     } else {
                            //         QB.login(userRequiredParams, function(reloginErr, reloginUser) {
                            //             if(reloginErr) {
                            //                 console.log('[relogin user] Error:', reloginErr);
                            //             } else {
                            //                 resolve(reloginUser);
                            //             }
                            //         });
                            //     }
                            // });
                            console.log(loginErr);
                        }
                        else {
                            // /** Update info */
                            // if(loginUser.full_name !== data.username) {
                            //     QB.users.update(loginUser.id, {
                            //         'full_name': data.username,
                            //     }, function(updateError, updateUser) {
                            //         if(updateError) {
                            //             console.log('APP [update user] Error:', updateError);
                            //             reject(updateError);
                            //         } else {
                            //             resolve(updateUser);
                            //         }
                            //     });
                            // } else {
                            //     resolve(loginUser);
                            // }
                            resolve(loginUser);
                        }
                    });
                }
            });
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mvp-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
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
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");




// import { CoreModule } from './modules/core/core.module';


// import { AuthModule } from './modules/auth/auth.module';
// import { AppRoutingModule } from './app.routing';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
                // CoreModule,
                // AppRoutingModule,
                // AuthModule
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
/* harmony import */ var _modules_auth_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/auth/services/user.service */ "./src/app/modules/auth/services/user.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_user) {
        this._user = _user;
        this.user = this._user.user;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _modules_auth_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "../../node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modules_auth_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/model/user.ts":
/*!********************************************!*\
  !*** ./src/app/modules/auth/model/user.ts ***!
  \********************************************/
/*! exports provided: UserType, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
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



/***/ }),

/***/ "./src/app/modules/auth/services/user.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/services/user.service.ts ***!
  \*******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user */ "./src/app/modules/auth/model/user.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var UserService = /** @class */ (function () {
    function UserService() {
        this.isLoggedIn = false;
        this._user = new _model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this._init();
    }
    UserService.prototype._init = function () {
        try {
            this.isLoggedIn = (sessionStorage.isLoggedIn && sessionStorage.isLoggedIn === "true") || false;
            if (this.isLoggedIn) {
                this._user.deserialize(JSON.parse(sessionStorage.user));
            }
        }
        catch (e) {
            throw new Error(' Unable to access session storage');
        }
    };
    UserService.prototype.loggedIn = function (userInfo) {
        this.user = userInfo;
        sessionStorage.isLoggedIn = true;
        this.isLoggedIn = true;
    };
    UserService.prototype.loggedOut = function () {
        sessionStorage.clear();
        this.isLoggedIn = false;
    };
    Object.defineProperty(UserService.prototype, "user", {
        get: function () {
            return lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this._user);
        },
        set: function (userInfo) {
            this._user.deserialize(userInfo);
            sessionStorage.setItem('user', JSON.stringify(userInfo));
        },
        enumerable: true,
        configurable: true
    });
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
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