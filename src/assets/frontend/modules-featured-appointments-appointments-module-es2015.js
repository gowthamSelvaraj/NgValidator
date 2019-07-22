(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-featured-appointments-appointments-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/modules/featured/appointments/components/appointment-confirmation/appointment-confirmation.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** D:/608755/POC/AIHackathon/MVP/node_modules/raw-loader!./src/app/modules/featured/appointments/components/appointment-confirmation/appointment-confirmation.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"hasBanner\">\r\n  <h4 class=\"alert-heading\">\r\n    <div class=\"text-center\">\r\n      <p>\r\n        <i class=\"far fa-check-circle fa-2x fas-primary\"></i>\r\n      </p>\r\n    </div>\r\n  </h4>\r\n  <p class=\"mb-0\">Your virtual connect with your\r\n    <strong>Dr. {{ appointment.doctorID }}</strong> on\r\n    <strong>{{  appointment.appointmentDate }}</strong> @\r\n    <strong>{{ appointment.appointmentTime }}</strong> has been scheduled. You will receive an email shortly on how to\r\n    connect.</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/modules/featured/appointments/components/book-appointment/book-appointment.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** D:/608755/POC/AIHackathon/MVP/node_modules/raw-loader!./src/app/modules/featured/appointments/components/book-appointment/book-appointment.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\r\n  <h4 class=\"alert-heading\">Error!</h4>\r\n  <p class=\"mb-0\">Service error, Kindly try again later</p>\r\n</div>\r\n<form class=\"form-horizontal\" [formGroup]=\"appointmentForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\r\n  <fieldset>\r\n    <legend class=\"border-bottom mb-4\">Schedule a virtual connect with Physician</legend>\r\n    <div class=\"row form-group\" *ngIf=\"!isCounsellor\">\r\n      <label class=\"col-md-2 control-label\" for=\"specialityType\">Specialist</label>\r\n      <div class=\"col-md-3\">\r\n        <select id=\"specialityType\" name=\"specialityType\" (change)=\"specialistChanged()\" class=\"form-control\" formControlName=\"specialityType\">\r\n          <option value=\"\">Choose Specialist</option>\r\n          <option *ngFor=\"let eachType of specialityTypes\" [value]=\"eachType\">{{ eachType }}</option>\r\n        </select>\r\n        <mvp-err-text [control]=\"appointmentForm.controls.specialityType\" [submitted]=\"formSubmitAttempt\"></mvp-err-text>\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group\">\r\n      <label class=\"col-md-2 control-label\" for=\"doctorID\">Physician</label>\r\n      <div class=\"col-md-3\">\r\n        <select id=\"doctorID\" name=\"doctorID\" class=\"form-control\" (change)=\"doctorChanged()\" formControlName=\"doctorID\">\r\n          <option value=\"\">Choose Physician</option>\r\n          <option *ngFor=\"let eachDoctor of currentDoctorList\" [value]=\"eachDoctor.doctorID\">{{ eachDoctor.doctorName }}</option>\r\n        </select>\r\n        <mvp-err-text [control]=\"appointmentForm.controls.doctorID\" [submitted]=\"formSubmitAttempt\"></mvp-err-text>\r\n      </div>\r\n    </div>\r\n    <ng-container *ngIf=\"isDateEnabled\">\r\n      <div class=\"row form-group\">\r\n        <label class=\"col-md-2 control-label\" for=\"appointmentDate\">Date</label>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"input-group\">\r\n            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" [markDisabled]=\"isDisabled\" [minDate]=\"minDate\" [maxDate]=\"maxDate\"\r\n              id=\"appointmentDate\" name=\"appointmentDate\" formControlName=\"appointmentDate\" ngbDatepicker #d=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-outline-primary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                <i class=\"fas fa-calendar\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <mvp-err-text [control]=\"appointmentForm.controls.appointmentDate\" [submitted]=\"formSubmitAttempt\"></mvp-err-text>\r\n        </div>\r\n      </div>\r\n      <div class=\"row form-group\">\r\n        <label class=\"col-md-2 control-label\" for=\"appointmentTime\">Time Slots</label>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col pr-0\">\r\n              <label class=\"radio-inline p-2 border mr-2 selected\" *ngFor=\"let eachSlot of availableTimeSlot| keyvalue\" for=\"appointmentTime-{{eachSlot.value}}\">\r\n                <input type=\"radio\" name=\"appointmentTime\" id=\"appointmentTime-{{eachSlot.value}}\" [value]=\"eachSlot.value\" formControlName=\"appointmentTime\"> {{eachSlot.key}}\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <mvp-err-text [control]=\"appointmentForm.controls.appointmentTime\" [submitted]=\"formSubmitAttempt\"></mvp-err-text>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n    <hr class=\"my-4\">\r\n    <div class=\"row form-group\">\r\n      <div class=\"col-12 col-md-3 offset-md-2\">\r\n        <button class=\"btn btn-primary btn-block\">Schedule</button>\r\n      </div>\r\n      <div class=\"col-12 col-md-2\">\r\n        <button class=\"btn btn-link btn-block ml-md-3 mt-3 mt-md-0\" type=\"button\"  routerLink=\"/dashboard\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </fieldset>\r\n</form>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/modules/featured/appointments/components/my-appointments/my-appointments.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** D:/608755/POC/AIHackathon/MVP/node_modules/raw-loader!./src/app/modules/featured/appointments/components/my-appointments/my-appointments.component.html ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row justify-content-end mb-3 mr-md-2\">\r\n  <div class=\"col-12 col-lg-4 col-md-6 border\">\r\n    <div class=\"row pt-3 pb-3\">\r\n      <div class=\"col-10\">\r\n        <h5 class=\"mt-0 mb-1\">Appointments Today</h5>\r\n        <span>05</span>\r\n      </div>\r\n      <div class=\"col-2 align-self-center\">\r\n        <i class=\"fas fa-calendar-alt fas-primary\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n<mvp-appointment-confirmation></mvp-appointment-confirmation>\r\n<div class=\"row justify-content-end\">\r\n  <div class=\"col-12 col-md-6 col-lg-4\">\r\n    <div class=\"card text-white bg-primary mb-3\">\r\n      <div class=\"card-header text-center\">\r\n        <h4 class=\"card-title\">\r\n          <i class=\"fas fa-calendar-alt\"></i> Appointments Today</h4>\r\n      </div>\r\n      <div class=\"card-body py-2\">\r\n        <p class=\"card-text display-4 text-center font-weight-bold\">{{ todaysAppointmentCount }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12 px-md-4 px-0\">\r\n    <h1 class=\"mb-3\">Appointments</h1>\r\n    <ng-container *ngIf=\"appointmentDetails.length > 0; else noAppointmentsBlock\">\r\n      <ngb-tabset>\r\n        <ngb-tab *ngFor=\"let appointmentsGroup of appointmentDetails\">\r\n          <ng-template ngbTabTitle>\r\n            <p>\r\n              <strong>{{ appointmentsGroup.appointmentDay }}</strong>\r\n            </p>\r\n            <p>\r\n              <span>{{ appointmentsGroup.appointmentDate }}</span>\r\n            </p>\r\n          </ng-template>\r\n          <ng-template ngbTabContent>\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-striped table-bordered\">\r\n                <tbody>\r\n                  <ng-container *ngIf=\"appointmentsGroup.appointments.length > 0; else noAppointmentsFoundTemplate\">\r\n                    <tr *ngFor=\"let appointment of appointmentsGroup.appointments\">\r\n                      <th scope=\"row\">Jerry Matt</th>\r\n                      <td>{{ appointment.appointmentDate }} {{ appointment.appointmentTime }}</td>\r\n                      <td>\r\n                        <p>123-123-1234\r\n                          <p>\r\n                            <p>Phone number</p>\r\n                      </td>\r\n                      <td>\r\n                        <p>New York\r\n                          <p>\r\n                            <p>Location</p>\r\n                      </td>\r\n                      <td>\r\n                        <button type=\"button\" class=\"btn btn-primary\">Connect</button>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-container>\r\n                  <ng-template #noAppointmentsFoundTemplate>\r\n                    <tr>\r\n                      <th colspan=\"4\">No Appointments found.</th>\r\n                    </tr>\r\n                  </ng-template>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n      </ngb-tabset>\r\n    </ng-container>\r\n    <ng-template #noAppointmentsBlock>\r\n      <p>No Appointments found</p>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/featured/appointments/appointments-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/featured/appointments/appointments-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AppointmentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsRoutingModule", function() { return AppointmentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_my_appointments_my_appointments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/my-appointments/my-appointments.component */ "./src/app/modules/featured/appointments/components/my-appointments/my-appointments.component.ts");
/* harmony import */ var _components_book_appointment_book_appointment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/book-appointment/book-appointment.component */ "./src/app/modules/featured/appointments/components/book-appointment/book-appointment.component.ts");





const routes = [
    { path: 'my-appointments', component: _components_my_appointments_my_appointments_component__WEBPACK_IMPORTED_MODULE_3__["MyAppointmentsComponent"] },
    { path: 'book-appointment', component: _components_book_appointment_book_appointment_component__WEBPACK_IMPORTED_MODULE_4__["BookAppointmentComponent"] },
    { path: '', redirectTo: 'my-appointments', pathMatch: 'full' },
    { path: '**', redirectTo: 'my-appointments' }
];
let AppointmentsRoutingModule = class AppointmentsRoutingModule {
};
AppointmentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppointmentsRoutingModule);



/***/ }),

/***/ "./src/app/modules/featured/appointments/appointments.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/featured/appointments/appointments.module.ts ***!
  \**********************************************************************/
/*! exports provided: AppointmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsModule", function() { return AppointmentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _appointments_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appointments-routing.module */ "./src/app/modules/featured/appointments/appointments-routing.module.ts");
/* harmony import */ var _components_my_appointments_my_appointments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/my-appointments/my-appointments.component */ "./src/app/modules/featured/appointments/components/my-appointments/my-appointments.component.ts");
/* harmony import */ var _components_book_appointment_book_appointment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/book-appointment/book-appointment.component */ "./src/app/modules/featured/appointments/components/book-appointment/book-appointment.component.ts");
/* harmony import */ var _components_appointment_confirmation_appointment_confirmation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/appointment-confirmation/appointment-confirmation.component */ "./src/app/modules/featured/appointments/components/appointment-confirmation/appointment-confirmation.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/modules/core/core.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");










let AppointmentsModule = class AppointmentsModule {
};
AppointmentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_my_appointments_my_appointments_component__WEBPACK_IMPORTED_MODULE_5__["MyAppointmentsComponent"], _components_book_appointment_book_appointment_component__WEBPACK_IMPORTED_MODULE_6__["BookAppointmentComponent"], _components_appointment_confirmation_appointment_confirmation_component__WEBPACK_IMPORTED_MODULE_7__["AppointmentConfirmationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabsetModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
            _appointments_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppointmentsRoutingModule"]
        ]
    })
], AppointmentsModule);



/***/ }),

/***/ "./src/app/modules/featured/appointments/components/appointment-confirmation/appointment-confirmation.component.css":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/featured/appointments/components/appointment-confirmation/appointment-confirmation.component.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zyb250ZW5kL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlZC9hcHBvaW50bWVudHMvY29tcG9uZW50cy9hcHBvaW50bWVudC1jb25maXJtYXRpb24vYXBwb2ludG1lbnQtY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/featured/appointments/components/appointment-confirmation/appointment-confirmation.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/featured/appointments/components/appointment-confirmation/appointment-confirmation.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AppointmentConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentConfirmationComponent", function() { return AppointmentConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../core/services/session.service */ "./src/app/modules/core/services/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");




let AppointmentConfirmationComponent = class AppointmentConfirmationComponent {
    constructor(_session) {
        this._session = _session;
        this.appointment = {
            doctorID: 'Thomas',
            appointmentDate: '07/15/2019',
            appointmentTime: '11:00 AM'
        };
        this.hasBanner = false;
        this._session.select(_core_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_KEY"].DOCTOR_LIST).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.hasBanner = data.newAppointmentBanner;
        });
        if (this.hasBanner) {
            this._session.setState(_core_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_KEY"].DOCTOR_LIST, {
                newAppointmentBanner: false
            });
        }
    }
};
AppointmentConfirmationComponent.ctorParameters = () => [
    { type: _core_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] }
];
AppointmentConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'mvp-appointment-confirmation',
        template: __webpack_require__(/*! raw-loader!./appointment-confirmation.component.html */ "../../node_modules/raw-loader/index.js!./src/app/modules/featured/appointments/components/appointment-confirmation/appointment-confirmation.component.html"),
        styles: [__webpack_require__(/*! ./appointment-confirmation.component.css */ "./src/app/modules/featured/appointments/components/appointment-confirmation/appointment-confirmation.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
], AppointmentConfirmationComponent);



/***/ }),

/***/ "./src/app/modules/featured/appointments/components/book-appointment/book-appointment.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/featured/appointments/components/book-appointment/book-appointment.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zyb250ZW5kL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlZC9hcHBvaW50bWVudHMvY29tcG9uZW50cy9ib29rLWFwcG9pbnRtZW50L2Jvb2stYXBwb2ludG1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/featured/appointments/components/book-appointment/book-appointment.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/featured/appointments/components/book-appointment/book-appointment.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: BookAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookAppointmentComponent", function() { return BookAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_model_doctor_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../core/model/doctor-list */ "./src/app/modules/core/model/doctor-list.ts");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../core/services/api.service */ "./src/app/modules/core/services/api.service.ts");
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../core/services/session.service */ "./src/app/modules/core/services/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/components/base.component */ "./src/app/modules/core/components/base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");










let BookAppointmentComponent = class BookAppointmentComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"] {
    constructor(_fb, _session, _calendar, _api, _route, _router) {
        super();
        this._fb = _fb;
        this._session = _session;
        this._calendar = _calendar;
        this._api = _api;
        this._route = _route;
        this._router = _router;
        this.formName = 'appointmentForm';
        this.appointmentForm = this._fb.group({
            specialityType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            doctorID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            appointmentDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            appointmentTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.minDate = this._calendar.getToday();
        this.maxDate = this._calendar.getNext(this.minDate, 'd', 30);
        this.specialityTypes = [];
        this.doctorLists = {};
        this.bookedTimeSlots = {};
        this.timeSlots = _core_model_doctor_list__WEBPACK_IMPORTED_MODULE_1__["TIME_SLOTS"];
        this.error = false;
        this.isCounsellor = false;
        this.isDisabled = (date) => {
            const dateFormat = this.formatDate(date);
            if (lodash__WEBPACK_IMPORTED_MODULE_8__["has"](this.doctorTimeSlot, dateFormat)) {
                return this.doctorTimeSlot[dateFormat].length === 4;
            }
            return false;
        };
        this._sessionSub$ = this._session.select(_core_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_KEY"].DOCTOR_LIST).subscribe((data) => {
            this.specialityTypes = data.specialityTypes;
            this.doctorLists = data.doctorList;
        });
    }
    ngOnInit() {
        this._route.queryParamMap.subscribe(queryParams => {
            const specialityType = queryParams.get("type");
            if (specialityType && specialityType === _core_model_doctor_list__WEBPACK_IMPORTED_MODULE_1__["COUNSELLOR"]) {
                this.isCounsellor = true;
                this.appointmentForm.controls.specialityType.setValue(_core_model_doctor_list__WEBPACK_IMPORTED_MODULE_1__["COUNSELLOR"]);
            }
            else {
                this.isCounsellor = false;
                this.appointmentForm.controls.specialityType.setValue('');
            }
            this.specialistChanged();
        });
    }
    save() {
        const formValue = this.appointmentForm.value;
        const payload = {
            doctorID: formValue.doctorID,
            appointmentID: formValue.doctorID,
            memberID: formValue.doctorID,
            appointmentDate: this.formatDate(formValue.appointmentDate),
            appointmentTime: formValue.appointmentTime
        };
        this._api.bookAppointment(payload).subscribe(() => {
            this.error = false;
            this._session.setState(_core_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_KEY"].DOCTOR_LIST, {
                newAppointmentBanner: true
            });
            this._session.setState(_core_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_KEY"].USER, {
                appointmentDetails: [lodash__WEBPACK_IMPORTED_MODULE_8__["pick"](payload, ['appointmentID', 'appointmentDate', 'appointmentTime'])]
            }, true);
            this._router.navigate(['/appointments/my-appointments']);
        }, () => {
            this.error = true;
        });
    }
    get doctorTimeSlot() {
        return lodash__WEBPACK_IMPORTED_MODULE_8__["get"](this.bookedTimeSlots, this.appointmentForm.value.doctorID, {});
    }
    formatDate(date) {
        return `${('0' + date.month).slice(-2)}/${('0' + date.day).slice(-2)}/${date.year}`;
    }
    get availableTimeSlot() {
        const selectedDate = this.appointmentForm.value.appointmentDate;
        if (!lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"](this.doctorTimeSlot) && !lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"](selectedDate) && lodash__WEBPACK_IMPORTED_MODULE_8__["has"](this.doctorTimeSlot, this.formatDate(selectedDate))) {
            const availableTimeSlot = lodash__WEBPACK_IMPORTED_MODULE_8__["filter"](_core_model_doctor_list__WEBPACK_IMPORTED_MODULE_1__["TIME_SLOTS"], (eachSlot) => {
                return lodash__WEBPACK_IMPORTED_MODULE_8__["find"](this.doctorTimeSlot[this.formatDate(selectedDate)], (bookedSlot) => bookedSlot.timeSlot === eachSlot);
            });
            return lodash__WEBPACK_IMPORTED_MODULE_8__["omitBy"](this.timeSlots, (eachSlot) => lodash__WEBPACK_IMPORTED_MODULE_8__["includes"](availableTimeSlot, eachSlot));
        }
        return this.timeSlots;
    }
    ngOnDestroy() {
        this._sessionSub$.unsubscribe();
    }
    get currentDoctorList() {
        return this.doctorLists[this.appointmentForm.value.specialityType] || [];
    }
    specialistChanged() {
        const specialityType = this.appointmentForm.value.specialityType;
        if (!lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"](specialityType) && !this.doctorLists[specialityType]) {
            this._api.getDoctorList(specialityType).subscribe();
        }
        this.appointmentForm.controls.doctorID.setValue("");
    }
    get isDateEnabled() {
        return this.appointmentForm.value.doctorID !== "";
    }
    doctorChanged() {
        this._api.getTimeSlots(this.appointmentForm.value.specialityType, this.appointmentForm.value.doctorID).subscribe((appointments) => {
            this.bookedTimeSlots[this.appointmentForm.value.doctorID] = lodash__WEBPACK_IMPORTED_MODULE_8__["groupBy"](appointments, 'appointmentDate');
            console.log(this.bookedTimeSlots);
        }, (err) => {
            console.log(err);
        });
    }
};
BookAppointmentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _core_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCalendar"] },
    { type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
BookAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: __webpack_require__(/*! raw-loader!./book-appointment.component.html */ "../../node_modules/raw-loader/index.js!./src/app/modules/featured/appointments/components/book-appointment/book-appointment.component.html"),
        styles: [__webpack_require__(/*! ./book-appointment.component.css */ "./src/app/modules/featured/appointments/components/book-appointment/book-appointment.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _core_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCalendar"], _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
], BookAppointmentComponent);



/***/ }),

/***/ "./src/app/modules/featured/appointments/components/my-appointments/my-appointments.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/featured/appointments/components/my-appointments/my-appointments.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zyb250ZW5kL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlZC9hcHBvaW50bWVudHMvY29tcG9uZW50cy9teS1hcHBvaW50bWVudHMvbXktYXBwb2ludG1lbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/featured/appointments/components/my-appointments/my-appointments.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/featured/appointments/components/my-appointments/my-appointments.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: MyAppointmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAppointmentsComponent", function() { return MyAppointmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../core/services/session.service */ "./src/app/modules/core/services/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model */ "./src/app/modules/featured/appointments/model.ts");





let MyAppointmentsComponent = class MyAppointmentsComponent {
    constructor(_session) {
        this._session = _session;
        this.appointmentDetails = [];
        this._sessionSub$ = this._session.select(_core_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_KEY"].USER).subscribe(data => {
            this.appointmentDetails = this._groupAppointments(data.appointmentDetails);
        });
    }
    _groupAppointments(appointmentDetails) {
        const appointmentGroups = [];
        this._sevenDates.forEach((val) => {
            appointmentGroups.push({
                appointmentDate: val.date,
                appointments: lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](appointmentDetails, { appointmentDate: val.date }),
                appointmentDay: val.day
            });
        });
        return appointmentGroups;
    }
    get todaysAppointmentCount() {
        return this.appointmentDetails.length > 0 ? this.appointmentDetails[0].appointments.length : 0;
    }
    get _sevenDates() {
        const startingDay = new Date();
        const thisDay = new Date();
        const sevenDates = [];
        for (let i = 0; i < 7; i++) {
            thisDay.setDate(startingDay.getDate() + i);
            const currentMonth = thisDay.getMonth() + 1;
            sevenDates.push({
                date: `${currentMonth > 10 ? currentMonth : '0' + currentMonth}/${thisDay.getDate() > 10 ? thisDay.getDate() : '0' + thisDay.getDate()}/${thisDay.getFullYear()}`,
                day: _model__WEBPACK_IMPORTED_MODULE_4__["EDays"][thisDay.getDay()]
            });
        }
        return sevenDates;
    }
    ngOnDestroy() {
        this._sessionSub$.unsubscribe();
    }
};
MyAppointmentsComponent.ctorParameters = () => [
    { type: _core_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] }
];
MyAppointmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'mvp-my-appointments',
        template: __webpack_require__(/*! raw-loader!./my-appointments.component.html */ "../../node_modules/raw-loader/index.js!./src/app/modules/featured/appointments/components/my-appointments/my-appointments.component.html"),
        styles: [__webpack_require__(/*! ./my-appointments.component.css */ "./src/app/modules/featured/appointments/components/my-appointments/my-appointments.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
], MyAppointmentsComponent);



/***/ }),

/***/ "./src/app/modules/featured/appointments/model.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/featured/appointments/model.ts ***!
  \********************************************************/
/*! exports provided: EDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDays", function() { return EDays; });
var EDays;
(function (EDays) {
    EDays[EDays["Sunday"] = 0] = "Sunday";
    EDays[EDays["Monday"] = 1] = "Monday";
    EDays[EDays["Tuesday"] = 2] = "Tuesday";
    EDays[EDays["Wednesday"] = 3] = "Wednesday";
    EDays[EDays["Thursday"] = 4] = "Thursday";
    EDays[EDays["Friday"] = 5] = "Friday";
    EDays[EDays["Saturday"] = 6] = "Saturday";
})(EDays || (EDays = {}));


/***/ })

}]);
//# sourceMappingURL=modules-featured-appointments-appointments-module-es2015.js.map