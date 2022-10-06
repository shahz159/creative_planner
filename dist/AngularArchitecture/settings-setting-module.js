(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-setting-module"],{

/***/ "./src/app/_Models/employee-dto.ts":
/*!*****************************************!*\
  !*** ./src/app/_Models/employee-dto.ts ***!
  \*****************************************/
/*! exports provided: EmployeeDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDTO", function() { return EmployeeDTO; });
class EmployeeDTO {
}


/***/ }),

/***/ "./src/app/_Services/apiurl.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_Services/apiurl.service.ts ***!
  \*********************************************/
/*! exports provided: ApiurlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiurlService", function() { return ApiurlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



class ApiurlService {
    constructor() {
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
        this.apiurl = this.baseUrl;
    }
}
ApiurlService.ɵfac = function ApiurlService_Factory(t) { return new (t || ApiurlService)(); };
ApiurlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiurlService, factory: ApiurlService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiurlService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_Services/employee-details.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/_Services/employee-details.service.ts ***!
  \*******************************************************/
/*! exports provided: EmployeeDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsService", function() { return EmployeeDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Models_employee_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_Models/employee-dto */ "./src/app/_Models/employee-dto.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _apiurl_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apiurl.service */ "./src/app/_Services/apiurl.service.ts");





class EmployeeDetailsService {
    constructor(http, commonUrl) {
        this.http = http;
        this.commonUrl = commonUrl;
        this.rootUrl = this.commonUrl.apiurl;
        this.objEmployeeDTO = new _Models_employee_dto__WEBPACK_IMPORTED_MODULE_1__["EmployeeDTO"];
        this.CurrentUserId = sessionStorage.getItem('Session_EmpNo');
    }
    GetEmployeeDetails(EmpNo) {
        this.objEmployeeDTO.Emp_No = EmpNo;
        return this.http.post(this.rootUrl + "Policy/NewGetEmployeeDetails", this.objEmployeeDTO);
    }
}
EmployeeDetailsService.ɵfac = function EmployeeDetailsService_Factory(t) { return new (t || EmployeeDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_apiurl_service__WEBPACK_IMPORTED_MODULE_3__["ApiurlService"])); };
EmployeeDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeDetailsService, factory: EmployeeDetailsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeDetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _apiurl_service__WEBPACK_IMPORTED_MODULE_3__["ApiurlService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_Services/notification.service.ts":
/*!***************************************************!*\
  !*** ./src/app/_Services/notification.service.ts ***!
  \***************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");



class NotificationService {
    //message:string;title:string;
    constructor(toastr) {
        this.toastr = toastr;
    }
    showSuccess(message, title) {
        this.toastr.success(message, title, {
            closeButton: true
        });
    }
    showError(message, title) {
        this.toastr.error(message, title, {
            closeButton: true,
        });
    }
    showInfo(message, title) {
        this.toastr.info(message, title, {
            closeButton: true,
        });
    }
    showWarning(message, title) {
        this.toastr.warning(message, title, {
            closeButton: true
        });
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/settings/changepassword/changepassword.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/settings/changepassword/changepassword.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class ChangepasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChangepasswordComponent.ɵfac = function ChangepasswordComponent_Factory(t) { return new (t || ChangepasswordComponent)(); };
ChangepasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangepasswordComponent, selectors: [["app-changepassword"]], decls: 39, vars: 0, consts: [[1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "card"], [1, "card-header", "bg-transparent"], [1, "card-title", "m-0"], [1, "font-bolder", "m-0"], [1, "card-body"], [1, "form-horizontal"], [1, "row", "mb-4"], ["for", "", 1, "col-4", "col-xl-3", "col-form-label"], [1, "col-8", "col-xl-9"], ["type", "password", "id", "", "placeholder", "Password", 1, "form-control"], [1, "row", "mb-3"], ["type", "password", "id", "", "placeholder", "Retype Password", 1, "form-control"], [1, "row", "mb-3", "justify-content-end"], [1, "form-check"], ["type", "checkbox", "id", "", 1, "form-check-input"], ["for", "", 1, "form-check-label", "ml-1"], [1, "justify-content-end", "mt-3", "row"], ["type", "submit", 1, "btn", "btn-info", "waves-effect", "waves-light", "mr-2"], ["type", "submit", 1, "btn", "btn-secondary", "waves-effect", "waves-light"]], template: function ChangepasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Current Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Retype New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Show Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zZXR0aW5ncy9jaGFuZ2VwYXNzd29yZC9jaGFuZ2VwYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangepasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-changepassword',
                templateUrl: './changepassword.component.html',
                styleUrls: ['./changepassword.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/settings/myprofile/myprofile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/settings/myprofile/myprofile.component.ts ***!
  \***********************************************************/
/*! exports provided: MyprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofileComponent", function() { return MyprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Models_employee_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/employee-dto */ "./src/app/_Models/employee-dto.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _myprofile_old_pwd_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../myprofile/old-pwd-validators */ "./src/app/settings/myprofile/old-pwd-validators.ts");
/* harmony import */ var src_app_Services_employee_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/employee-details.service */ "./src/app/_Services/employee-details.service.ts");
/* harmony import */ var src_app_Services_policy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Services/policy.service */ "./src/app/_Services/policy.service.ts");
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_Services/notification.service */ "./src/app/_Services/notification.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function MyprofileComponent_div_252_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Old Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyprofileComponent_div_252_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Old Password is not valid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyprofileComponent_div_252_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyprofileComponent_div_252_div_1_Template, 3, 0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyprofileComponent_div_252_div_2_Template, 3, 0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.oldPwd.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.oldPwd.errors.OldPasswordMethod);
} }
function MyprofileComponent_div_258_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyprofileComponent_div_258_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyprofileComponent_div_258_div_1_Template, 3, 0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.newPwd.errors.required);
} }
function MyprofileComponent_div_264_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirm Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyprofileComponent_div_264_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyprofileComponent_div_264_div_1_Template, 3, 0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.confirmPwd.errors.required);
} }
class MyprofileComponent {
    constructor(fb, EmpDetailsService, PolicyService, notifyService) {
        this.EmpDetailsService = EmpDetailsService;
        this.PolicyService = PolicyService;
        this.notifyService = notifyService;
        this._passwordHide = true;
        this._EmpNo = localStorage.getItem('EmpNo');
        this.objEmployeeDTO = new src_app_Models_employee_dto__WEBPACK_IMPORTED_MODULE_1__["EmployeeDTO"];
        this.form1 = fb.group({
            'oldPwd': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _myprofile_old_pwd_validators__WEBPACK_IMPORTED_MODULE_3__["OldPwdValidators"].OldPasswordMethod],
            'newPwd': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'confirmPwd': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: _myprofile_old_pwd_validators__WEBPACK_IMPORTED_MODULE_3__["OldPwdValidators"].matchPwds
        });
    }
    ngOnInit() {
        this.EmpDetailsService.GetEmployeeDetails(this._EmpNo)
            .subscribe(data => {
            this.EmployeeDetails_List = JSON.parse(data[0]['EmpDetailsJson']);
            // console.log(this.EmployeeDetails_List);
            this.FullName = this.EmployeeDetails_List[0]['TM_DisplayName'];
            //console.log(this.FullName);
            this.CompanyName = this.EmployeeDetails_List[0]['Com_Name'];
            this.DateOfJoin = this.EmployeeDetails_List[0]['DateOfJoin'];
            this.Designation = this.EmployeeDetails_List[0]['Designation_Name'];
            this.Department = this.EmployeeDetails_List[0]['Emp_Dept_No'];
            this.Email = this.EmployeeDetails_List[0]['Emp_Email'];
            this.Position = this.EmployeeDetails_List[0]['Emp_Position_Name'];
            this.Role = this.EmployeeDetails_List[0]['Emp_SystemRole'];
            this.Gender = this.EmployeeDetails_List[0]['Gender'];
            this.Password = this.EmployeeDetails_List[0]['Password'];
            this.Oldpassword = localStorage.setItem('oldPassword', this.Password);
            this.LoginUserName = this.EmployeeDetails_List[0]['UserName'];
        });
    }
    get oldPwd() {
        return this.form1.get('oldPwd');
    }
    get newPwd() {
        return this.form1.get('newPwd');
    }
    get confirmPwd() {
        return this.form1.get('confirmPwd');
    }
    onCheckboxChange() {
        this._passwordHide = !this._passwordHide;
    }
    onCancel() {
        this.form1.reset();
        let Message = "Reset Successfully";
        this.notifyService.showInfo("", Message);
    }
    OnSubmit() {
        this.objEmployeeDTO.Emp_No = this._EmpNo;
        this.objEmployeeDTO.OldPassword = this.form1.get('oldPwd').value;
        this.objEmployeeDTO.NewPassword = this.form1.get('newPwd').value;
        this.objEmployeeDTO.ConfirmPassword = this.form1.get('confirmPwd').value;
        this.PolicyService.ChangeUserPassword(this.objEmployeeDTO)
            .subscribe(data => {
            // console.log("Message From SqlServer ---->", data);
            let message = data['Message'];
            this.notifyService.showInfo("", message);
            this.form1.reset();
        });
    }
}
MyprofileComponent.ɵfac = function MyprofileComponent_Factory(t) { return new (t || MyprofileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_employee_details_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_policy_service__WEBPACK_IMPORTED_MODULE_5__["PolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"])); };
MyprofileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyprofileComponent, selectors: [["app-myprofile"]], decls: 279, vars: 21, consts: [[1, "container-fluid", "mt--2", "profile-cls"], [1, "row"], [1, "col-xl-3", "col-lg-4", "card", "brdr-0", "p-0"], [1, "mb-4", "mb-xl-10"], [1, "text-teal", "text-hover-primary", "font-sp-bold", "p-3", "ml-3"], [1, "svg-icon", "svg-icon-primary", "svg-icon-2x"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["points", "0 0 24 0 24 24 0 24"], ["d", "M12.2928955,6.70710318 C11.9023712,6.31657888 11.9023712,5.68341391 12.2928955,5.29288961 C12.6834198,4.90236532 13.3165848,4.90236532 13.7071091,5.29288961 L19.7071091,11.2928896 C20.085688,11.6714686 20.0989336,12.281055 19.7371564,12.675721 L14.2371564,18.675721 C13.863964,19.08284 13.2313966,19.1103429 12.8242777,18.7371505 C12.4171587,18.3639581 12.3896557,17.7313908 12.7628481,17.3242718 L17.6158645,12.0300721 L12.2928955,6.70710318 Z", "fill", "#000000", "fill-rule", "nonzero"], ["d", "M3.70710678,15.7071068 C3.31658249,16.0976311 2.68341751,16.0976311 2.29289322,15.7071068 C1.90236893,15.3165825 1.90236893,14.6834175 2.29289322,14.2928932 L8.29289322,8.29289322 C8.67147216,7.91431428 9.28105859,7.90106866 9.67572463,8.26284586 L15.6757246,13.7628459 C16.0828436,14.1360383 16.1103465,14.7686056 15.7371541,15.1757246 C15.3639617,15.5828436 14.7313944,15.6103465 14.3242754,15.2371541 L9.03007575,10.3841378 L3.70710678,15.7071068 Z", "fill", "#000000", "fill-rule", "nonzero", "opacity", "0.3", "transform", "translate(9.000003, 11.999999) rotate(-270.000000) translate(-9.000003, -11.999999) "], [1, "card-body", "px-5", "pt-4", "pb-0"], [1, "text-center"], [1, "mb-3"], [1, "symbol", "symbol-100px", "symbol-lg-160px", "symbol-fixed", "position-relative"], ["src", "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png", "alt", "image"], ["alt", "user", 1, "fas", "fa-user", "d-none"], [1, ""], [1, "text-center", "w-80"], [1, "d-flexflex-column"], [1, "text-center", "mb-2", "pb-3"], ["href", "#", 1, "d-block", "fs-3", "font-bold", "text-gray-900", "text-hover-primary", "font-bolder", "mr-1"], [1, "d-flex", "flex-wrap", "justify-content-center", "my-3", "hoverr"], [1, "icon-svg", "mail1"], ["x", "0", "y", "0", "width", "24", "height", "24"], ["d", "M5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z", "fill", "#000000"], [1, "icon-svg", "emp1"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "24", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-person-badge"], ["d", "M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"], ["d", "M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"], [1, "icon-svg", "comp1"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "20px", "height", "20px", "viewBox", "0 0 24 24", "version", "1.1"], ["d", "M13.5,21 L13.5,18 C13.5,17.4477153 13.0522847,17 12.5,17 L11.5,17 C10.9477153,17 10.5,17.4477153 10.5,18 L10.5,21 L5,21 L5,4 C5,2.8954305 5.8954305,2 7,2 L17,2 C18.1045695,2 19,2.8954305 19,4 L19,21 L13.5,21 Z M9,4 C8.44771525,4 8,4.44771525 8,5 L8,6 C8,6.55228475 8.44771525,7 9,7 L10,7 C10.5522847,7 11,6.55228475 11,6 L11,5 C11,4.44771525 10.5522847,4 10,4 L9,4 Z M14,4 C13.4477153,4 13,4.44771525 13,5 L13,6 C13,6.55228475 13.4477153,7 14,7 L15,7 C15.5522847,7 16,6.55228475 16,6 L16,5 C16,4.44771525 15.5522847,4 15,4 L14,4 Z M9,8 C8.44771525,8 8,8.44771525 8,9 L8,10 C8,10.5522847 8.44771525,11 9,11 L10,11 C10.5522847,11 11,10.5522847 11,10 L11,9 C11,8.44771525 10.5522847,8 10,8 L9,8 Z M9,12 C8.44771525,12 8,12.4477153 8,13 L8,14 C8,14.5522847 8.44771525,15 9,15 L10,15 C10.5522847,15 11,14.5522847 11,14 L11,13 C11,12.4477153 10.5522847,12 10,12 L9,12 Z M14,12 C13.4477153,12 13,12.4477153 13,13 L13,14 C13,14.5522847 13.4477153,15 14,15 L15,15 C15.5522847,15 16,14.5522847 16,14 L16,13 C16,12.4477153 15.5522847,12 15,12 L14,12 Z", "fill", "#000000"], ["fill", "#FFFFFF", "x", "13", "y", "8", "width", "3", "height", "3", "rx", "1"], ["d", "M4,21 L20,21 C20.5522847,21 21,21.4477153 21,22 L21,22.4 C21,22.7313708 20.7313708,23 20.4,23 L3.6,23 C3.26862915,23 3,22.7313708 3,22.4 L3,22 C3,21.4477153 3.44771525,21 4,21 Z", "fill", "#000000", "opacity", "0.3"], [1, "icon-svg", "add1"], ["d", "M4.88230018,17.2353996 L13.2844582,0.431083506 C13.4820496,0.0359007077 13.9625881,-0.12427877 14.3577709,0.0733126292 C14.5125928,0.15072359 14.6381308,0.276261584 14.7155418,0.431083506 L23.1176998,17.2353996 C23.3152912,17.6305824 23.1551117,18.1111209 22.7599289,18.3087123 C22.5664522,18.4054506 22.3420471,18.4197165 22.1378777,18.3482572 L14,15.5 L5.86212227,18.3482572 C5.44509941,18.4942152 4.98871325,18.2744737 4.84275525,17.8574509 C4.77129597,17.6532815 4.78556182,17.4288764 4.88230018,17.2353996 Z", "fill", "#000000", "fill-rule", "nonzero", "transform", "translate(14.000087, 9.191034) rotate(-315.000000) translate(-14.000087, -9.191034) "], [1, "d-flex", "justify-content-between", "text-left", "mt-5", "w-100", "mail1"], [1, "text-muted", "col-lg-4", "p-0", "v2"], [1, "far", "fa-envelope", "mr-2"], [1, "col-lg-8", "p-0", "col-xl-91", "text-left", "text-hover-primary", "mb-2"], [1, "d-flex", "justify-content-between", "text-left", "my-2", "w-100", "emp1"], [1, "text-muted", "col-lg-4", "p-0"], [1, "far", "fa-id-badge", "mr-2"], [1, "d-flex", "justify-content-between", "text-left", "mb-2", "w-100", "comp1"], [1, "far", "fa-building", "mr-2"], [1, "col-lg-8", "p-0", "col-xl-91", "text-hover-primary", "mb-2"], [1, "d-flex", "justify-content-between", "text-left", "my-2", "w-100", "add1"], [1, "fas", "fa-location-arrow", "mr-2"], [1, "border", "mt-3"], [1, "pt-2", "ml-2", "text-muted", "text-left"], [1, "swit", "p-3"], [1, "btn-d", "text-center"], [1, "btn", "btn-sm", "btn-success", "w-80", "font-bolder"], [1, "d-none"], [1, "toggle-switch"], [1, "switch"], ["type", "checkbox", "checked", "", 1, "swt"], [1, "slider"], [1, "col-xl-9", "col-lg-8", "p-0"], [1, "card-brdr", "pl-5"], [1, "nav", "nav-dark", "nav-bold", "nav-tabs", "pl-3", "nav-tabs-line", "mb-0", "font-bolder"], [1, "nav-item"], ["data-toggle", "tab", "href", "#overv-pro", 1, "nav-link", "text-active-primary", "font-bolder", "fs-125", "mr-4", "py-3", "active"], ["data-toggle", "tab", "href", "#profi", 1, "nav-link", "text-active-primary", "font-bolder", "fs-125", "mr-4", "py-3"], [1, "tab-content", "card", "profile-tab"], ["id", "overv-pro", 1, "active"], [1, "card1", "brdr-0", "mb-3", "d-none"], [1, "card-body"], [1, "row", "mb-3"], [1, "col-lg-4", "text-muted"], [1, "col-lg-8"], [1, "font-bolder", "fs-6", "text-gray-800"], [1, "card1", "brdr-0", "ml-5", "pt-5"], [1, "col--xl-2", "col-lg-3", "text-muted"], [1, "col--xl-10", "col-lg-9"], ["id", "edit-pro", 1, "card1", "brdr-0"], [1, "card-header", "bg-transparent"], [1, "card-title", "m-0"], [1, "font-bolder", "m-0"], [1, "col-lg-8", "m-auto"], [1, "m-card-profile", "d-none"], [1, "m-card-profile__title", "m--hide"], [1, "m-card-profile__pic"], [1, "m-card-profile__pic-wrapper"], ["src", "https://coderthemes.com/ubold/layouts/assets/images/users/user-1.jpg", "alt", ""], [1, "m-card-profile__details"], [1, "m-card-profile__name"], ["href", "", 1, "m-card-profile__email", "m-link"], [1, "form-horizontal"], ["for", "", 1, "col-4", "col-xl-3", "col-form-label"], [1, "col-8", "col-xl-9", "input-group"], ["type", "text", "id", "", 1, "form-control"], [1, "col-8", "col-xl-9"], ["type", "email", "id", "", "value", "email@devbox.com", "placeholder", "email@devbox.com", "disabled", "", 1, "form-control"], ["id", "basic-addon1", 1, "input-group-text", "input-group-prepend"], ["type", "tel", "value", "", "id", "", 1, "form-control", "m-input"], ["id", "basic-addon1", 1, "input-group-text", "input-group-append"], [1, "fa", "fa-phone"], ["id", "", 1, "form-control"], [1, "custom-file"], ["type", "file", "id", "file2", "accept", ".png, .jpg, .jpeg", 1, "custom-file-input"], [1, "custom-file-control"], [1, "col-8", "col-xl-9", "imgbox"], ["src", "https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/150-26.jpg"], [1, "justify-content-end", "row"], ["type", "submit", 1, "btn", "btn-info", "waves-effect", "waves-light"], ["id", "profi", 1, "card1", "brdr-0"], [1, "p-3"], [1, "col-lg-6", "ml-5", "pt-5"], [1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "row", "mb-4"], ["type", "password", "formControlName", "oldPwd", "id", "oldPwd", "placeholder", "Password", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["formControlName", "newPwd", "id", "newPwd", "placeholder", "Password", 1, "form-control", 3, "type"], ["formControlName", "confirmPwd", "id", "confirmPwd", "placeholder", "Confirm Password", 1, "form-control", 3, "type"], [1, "row", "mb-3", "justify-content-end"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "change"], ["for", "", 1, "form-check-label", "ml-1"], [1, "justify-content-end", "mt-3", "row"], ["type", "submit", 1, "btn", "btn-info", "waves-effect", "waves-light", "mr-2", 3, "disabled"], ["type", "button", 1, "btn", "btn-secondary", "waves-effect", "waves-light", 3, "click"], [1, "col-lg-6", "d-none"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "fas", "fa-exclamation-circle", "mr-1"]], template: function MyprofileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "polygon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "rect", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Emp ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Hyderabad International Airport, Shamshabad, Hyderabad, Telangana, India1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "ul", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Company Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Employee ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Email Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Login Id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Employee Id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h5", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Your Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " Mark Andre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " mark.andre@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "form", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "input", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "input", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "91");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "input", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "textarea", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "input", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "select", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "select", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "label", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "input", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "img", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "button", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "form", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MyprofileComponent_Template_form_ngSubmit_246_listener() { return ctx.OnSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Current Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "input", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](252, MyprofileComponent_div_252_Template, 3, 2, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "input", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](258, MyprofileComponent_div_258_Template, 2, 1, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "input", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](264, MyprofileComponent_div_264_Template, 2, 1, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "input", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MyprofileComponent_Template_input_change_268_listener() { return ctx.onCheckboxChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "label", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Show Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "button", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "button", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyprofileComponent_Template_button_click_275_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.FullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Position);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.Email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._EmpNo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.CompanyName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.FullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._EmpNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.Email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.CompanyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Position);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Department);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Role, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.LoginUserName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._EmpNo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.oldPwd.touched && ctx.oldPwd.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx._passwordHide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newPwd.touched && ctx.newPwd.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx._passwordHide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmPwd.touched && ctx.confirmPwd.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form1.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".profile-tab[_ngcontent-%COMP%]   .card1[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.profile-cls[_ngcontent-%COMP%]{    \r\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\r\n    font-weight: 600;\r\n}\r\n.nav-tabs.nav-tabs-line[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    padding: 10px 0 !important;\r\n}\r\n.card-brdr.pl-5[_ngcontent-%COMP%] {\r\n    background-color: #f2f6f6;\r\n    background-clip: border-box;\r\n    border-bottom: 1px solid #ebedf2;\r\n}\r\n.text-teal[_ngcontent-%COMP%]{\r\n    color: #17a2b8 !important;\r\n}\r\n.col-lg-3.card[_ngcontent-%COMP%]{\r\n    height: 100vh;;\r\n}\r\n.mt--2[_ngcontent-%COMP%] {\r\n    margin-top: -20px;\r\n}\r\n.brdr-0[_ngcontent-%COMP%]{\r\nborder-radius:0;\r\n}\r\n.dash1[_ngcontent-%COMP%]   .nav.nav-tabs.flex-column[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    border: 0 !important;\r\n    border-radius: 0 !important;\r\n\tmargin-bottom: 5px;\r\n}\r\n.dash1[_ngcontent-%COMP%]   .nav.nav-tabs.flex-column[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n    border: 0 !important;\r\n    border-radius: 0 !important;\r\n\tborder-left: 3px solid #6658dd!important;\r\n\tbackground-color: transparent;\r\n}\r\n.dash1[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{\r\n\tborder-bottom: 0;\r\n}\r\n.profile-tab[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .card1[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n.tab-content[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n.text-hover-primary[_ngcontent-%COMP%] {\r\n    transition: color .2s ease, background-color .2s ease;\r\n}\r\n.text-gray-900[_ngcontent-%COMP%] {\r\n    color: #181c32!important;\r\n}\r\n.text-gray-400[_ngcontent-%COMP%] {\r\n    color: #b5b5c3!important;\r\n}\r\n.nav-tabs.nav-tabs-line[_ngcontent-%COMP%]   a.nav-link.active[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    color: #595d6e;\r\n    border-bottom: 2px solid #22b9ff;\r\n}\r\n.text-active-primary.active[_ngcontent-%COMP%] {\r\n    transition: color .2s ease, background-color .2s ease;\r\n    color: #009ef7!important;\r\n}\r\n.font-bolder[_ngcontent-%COMP%] {\r\n    font-weight: 600 !important;\r\n}\r\n.text-hover-primary[_ngcontent-%COMP%]:hover {\r\n    transition: color .2s ease, background-color .2s ease;\r\n    color: #009ef7!important;\r\n}\r\n.symbol[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    flex-shrink: 0;\r\n    position: relative;\r\n    border-radius: 0.475rem;\r\n}\r\n.position-relative[_ngcontent-%COMP%] {\r\n    position: relative !important;\r\n}\r\n.symbol[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    flex-shrink: 0;\r\n    display: inline-block;\r\n    border-radius: 0.475rem;\r\n}\r\n.symbol.symbol-100px.symbol-fixed[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n}\r\n@media (min-width: 992px){\r\n.symbol.symbol-lg-160px.symbol-fixed[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n}\r\n}\r\n.font-sp-bold[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\r\n}\r\n.text-teal[_ngcontent-%COMP%]   .svg-icon.svg-icon-primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n    transition: fill 0.3s ease;\r\n    fill:  #17a2b8 !important;\r\n}\r\n.icon-svg[_ngcontent-%COMP%]   .svg-icon-primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    transition: fill 0.3s ease;\r\n    fill:  #f2f6f6 !important;\r\n}\r\n.icon-svg[_ngcontent-%COMP%]:hover   .svg-icon-primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    transition: fill 0.3s ease;\r\n    fill:  #3699FF !important;\r\n}\r\n.text-teal[_ngcontent-%COMP%]:hover   .svg-icon.svg-icon-primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n    fill: #3699FF !important;\r\n}\r\n.tab-content.card.profile-tab[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 47px);\r\n    border-radius: 0px;\r\n    border-top: 0;\r\n}\r\n.icon-svg[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    background: #3699FF;\r\n    width: 34px !important;\r\n    height: 34px;\r\n    border-radius: 20px;\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    max-width: 33.33333%;\r\n}\r\n.icon-svg[_ngcontent-%COMP%]:hover{\r\n    background: #ffffff;\r\n    border:1px solid #009ef7;\r\n    transform: scale(1.1);\r\n    transition: 0.3s ease;\r\n    cursor: pointer;\r\n\r\n}\r\n.hoverr[_ngcontent-%COMP%]   .emp1[_ngcontent-%COMP%]:hover    ~ .emp1[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .hoverr[_ngcontent-%COMP%]   .emp1[_ngcontent-%COMP%]:hover    ~ .emp1[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .hoverr[_ngcontent-%COMP%]   .mail1[_ngcontent-%COMP%]:hover    ~ .mail1[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .hoverr[_ngcontent-%COMP%]   .mail1[_ngcontent-%COMP%]:hover    ~ .mail1[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .hoverr[_ngcontent-%COMP%]   .comp1[_ngcontent-%COMP%]:hover    ~ .comp1[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .hoverr[_ngcontent-%COMP%]   .comp1[_ngcontent-%COMP%]:hover    ~ .comp1[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .hoverr[_ngcontent-%COMP%]   .add1[_ngcontent-%COMP%]:hover    ~ .add1[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .hoverr[_ngcontent-%COMP%]   .add1[_ngcontent-%COMP%]:hover    ~ .add1[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {    \r\n    transform: scale(1.08);\r\n    transition: 0.3s ease;\r\n    color: #009ef7 !important;\r\n    padding-left: 4px;\r\n}\r\n.hoverr[_ngcontent-%COMP%] > .emp1[_ngcontent-%COMP%]:hover    ~ .hrr[_ngcontent-%COMP%] {    \r\n    background-color:#009ef7 !important;\r\n    padding-left: 40px;;\r\n}\r\n.w-80[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n\r\n.toggle-switch[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 60px;\r\n  }\r\n.switch[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 35px;\r\n    background-color: var(--dark);\r\n    border-radius: 50px;\r\n    cursor: pointer;    \r\n    left: 0;\r\n    top: 0;\r\n\r\n  }\r\n.swt[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    display: none;\r\n  }\r\n.slider[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    border-radius: 50px;\r\n    transition: 0.3s;\r\n    border: 1px solid #ccc;\r\n  }\r\n.swit[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    display: flex;\r\n    background-color: #f2f6f6;\r\n\r\n  }\r\n.swt[_ngcontent-%COMP%]:checked    ~ .slider[_ngcontent-%COMP%] {\r\n    background-color: var(--light);\r\n  }\r\n.btn-d[_ngcontent-%COMP%]{\r\n    flex: 1;\r\n    text-align: left;\r\n  }\r\n.slider[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 4px;\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%;\r\n    box-shadow: inset 9px 0px 0px 0px var(--light);\r\n    background-color: var(--dark);\r\n    transition: 0.3s;    \r\n  }\r\n.swt[_ngcontent-%COMP%]:checked    ~ .slider[_ngcontent-%COMP%]::before {\r\n    transform: translateX(25px);\r\n    background-color: #1dc9b7;\r\n    box-shadow: none;\r\n  }\r\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n    border: 1px solid #f86170;\r\n}\r\n.alert.alert-danger[_ngcontent-%COMP%] {\r\n    background: none;\r\n    border: none;\r\n    color: #f86170;\r\n    padding: 5px 0px;\r\n    margin-bottom: 5px;\r\n    flex-direction: row-reverse;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NldHRpbmdzL215cHJvZmlsZS9teXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHVMQUF1TDtJQUN2TCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQiwyQkFBMkI7Q0FDOUIsa0JBQWtCO0FBQ25CO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsMkJBQTJCO0NBQzlCLHdDQUF3QztDQUN4Qyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0kscURBQXFEO0FBQ3pEO0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLHFEQUFxRDtJQUNyRCx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0kscURBQXFEO0lBQ3JELHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix1TEFBdUw7QUFDM0w7QUFDQTtJQUVJLDBCQUEwQjtJQUMxQix5QkFBeUI7QUFDN0I7QUFDQTtJQUVJLDBCQUEwQjtJQUMxQix5QkFBeUI7QUFDN0I7QUFDQTtJQUVJLDBCQUEwQjtJQUMxQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7O0FBRW5CO0FBQ0E7Ozs7SUFJSSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUEsMEJBQTBCO0FBRTFCO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjtBQUVGO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsT0FBTztJQUNQLE1BQU07O0VBRVI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7O0VBRTNCO0FBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7QUFDQTtJQUNFLE9BQU87SUFDUCxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw4Q0FBOEM7SUFDOUMsNkJBQTZCO0lBQzdCLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoiLi4vLi4vc2V0dGluZ3MvbXlwcm9maWxlL215cHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtdGFiIC5jYXJkMSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5wcm9maWxlLWNsc3sgICAgXHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsXCJOb3RvIFNhbnNcIixzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIixcIk5vdG8gQ29sb3IgRW1vamlcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLm5hdi10YWJzLm5hdi10YWJzLWxpbmUgLm5hdi1saW5rIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLWJyZHIucGwtNSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmNmY2O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmVkZjI7XHJcbn1cclxuLnRleHQtdGVhbHtcclxuICAgIGNvbG9yOiAjMTdhMmI4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbC1sZy0zLmNhcmR7XHJcbiAgICBoZWlnaHQ6IDEwMHZoOztcclxufVxyXG4ubXQtLTIge1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuLmJyZHItMHtcclxuYm9yZGVyLXJhZGl1czowO1xyXG59XHJcbi5kYXNoMSAubmF2Lm5hdi10YWJzLmZsZXgtY29sdW1uIC5uYXYtbGluayB7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuXHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmRhc2gxIC5uYXYubmF2LXRhYnMuZmxleC1jb2x1bW4gLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuXHRib3JkZXItbGVmdDogM3B4IHNvbGlkICM2NjU4ZGQhaW1wb3J0YW50O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5kYXNoMSAubmF2LXRhYnN7XHJcblx0Ym9yZGVyLWJvdHRvbTogMDtcclxufVxyXG4ucHJvZmlsZS10YWIgLmFjdGl2ZSAuY2FyZDEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi50YWItY29udGVudD4uYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udGV4dC1ob3Zlci1wcmltYXJ5IHtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlO1xyXG59XHJcblxyXG4udGV4dC1ncmF5LTkwMCB7XHJcbiAgICBjb2xvcjogIzE4MWMzMiFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtZ3JheS00MDAge1xyXG4gICAgY29sb3I6ICNiNWI1YzMhaW1wb3J0YW50O1xyXG59XHJcbi5uYXYtdGFicy5uYXYtdGFicy1saW5lIGEubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICM1OTVkNmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIyYjlmZjtcclxufVxyXG4udGV4dC1hY3RpdmUtcHJpbWFyeS5hY3RpdmUge1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjJzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2U7XHJcbiAgICBjb2xvcjogIzAwOWVmNyFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvbnQtYm9sZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1ob3Zlci1wcmltYXJ5OmhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlO1xyXG4gICAgY29sb3I6ICMwMDllZjchaW1wb3J0YW50O1xyXG59XHJcbi5zeW1ib2wge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjQ3NXJlbTtcclxufVxyXG4ucG9zaXRpb24tcmVsYXRpdmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnN5bWJvbD5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNDc1cmVtO1xyXG59XHJcbi5zeW1ib2wuc3ltYm9sLTEwMHB4LnN5bWJvbC1maXhlZD5pbWcge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1xyXG4uc3ltYm9sLnN5bWJvbC1sZy0xNjBweC5zeW1ib2wtZml4ZWQ+aW1nIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxufVxyXG4uZm9udC1zcC1ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsXCJOb3RvIFNhbnNcIixzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIixcIk5vdG8gQ29sb3IgRW1vamlcIjtcclxufVxyXG4udGV4dC10ZWFsIC5zdmctaWNvbi5zdmctaWNvbi1wcmltYXJ5IHN2ZyBnIFtmaWxsXSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgICBmaWxsOiAgIzE3YTJiOCAhaW1wb3J0YW50O1xyXG59XHJcbi5pY29uLXN2ZyAuc3ZnLWljb24tcHJpbWFyeSBzdmcgcGF0aCB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgICBmaWxsOiAgI2YyZjZmNiAhaW1wb3J0YW50O1xyXG59XHJcbi5pY29uLXN2Zzpob3ZlciAuc3ZnLWljb24tcHJpbWFyeSBzdmcgcGF0aCB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgICBmaWxsOiAgIzM2OTlGRiAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LXRlYWw6aG92ZXIgLnN2Zy1pY29uLnN2Zy1pY29uLXByaW1hcnkgc3ZnIGcgW2ZpbGxdIHtcclxuICAgIGZpbGw6ICMzNjk5RkYgIWltcG9ydGFudDtcclxufVxyXG4udGFiLWNvbnRlbnQuY2FyZC5wcm9maWxlLXRhYiB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0N3B4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci10b3A6IDA7XHJcbn1cclxuLmljb24tc3ZnIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICMzNjk5RkY7XHJcbiAgICB3aWR0aDogMzRweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzJTtcclxufVxyXG4uaWNvbi1zdmc6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMDA5ZWY3O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG4uaG92ZXJyIC5lbXAxOmhvdmVyICB+IC5lbXAxPnNwYW4sIC5ob3ZlcnIgLmVtcDE6aG92ZXIgIH4gLmVtcDE+YSxcclxuLmhvdmVyciAubWFpbDE6aG92ZXIgIH4gLm1haWwxPnNwYW4sIC5ob3ZlcnIgLm1haWwxOmhvdmVyICB+IC5tYWlsMT5hLFxyXG4uaG92ZXJyIC5jb21wMTpob3ZlciAgfiAuY29tcDE+c3BhbiwgLmhvdmVyciAuY29tcDE6aG92ZXIgIH4gLmNvbXAxPmEsXHJcbi5ob3ZlcnIgLmFkZDE6aG92ZXIgIH4gLmFkZDE+c3BhbiwgLmhvdmVyciAuYWRkMTpob3ZlciAgfiAuYWRkMT5hIHsgICAgXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gICAgY29sb3I6ICMwMDllZjcgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG59XHJcbi5ob3ZlcnI+LmVtcDE6aG92ZXIgIH4gLmhyciB7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA5ZWY3ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7O1xyXG59XHJcbi53LTgwe1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLyphY3RpdmUgZGVhY3RpdmUgc3dpdGNoICovXHJcblxyXG4udG9nZ2xlLXN3aXRjaCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICB9XHJcbiAgXHJcbi5zd2l0Y2gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICAgIFxyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIC5zd3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG4gIC5zd2l0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmY2ZjY7XHJcblxyXG4gIH1cclxuICAuc3d0OmNoZWNrZWQgfiAuc2xpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcclxuICB9XHJcbiAgLmJ0bi1ke1xyXG4gICAgZmxleDogMTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5zbGlkZXI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDlweCAwcHggMHB4IDBweCB2YXIoLS1saWdodCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7ICAgIFxyXG4gIH1cclxuICBcclxuICAuc3d0OmNoZWNrZWQgfiAuc2xpZGVyOjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1cHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkYzliNztcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIGlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjg2MTcwO1xyXG59XHJcbi5hbGVydC5hbGVydC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjZjg2MTcwO1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyprofileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-myprofile',
                templateUrl: './myprofile.component.html',
                styleUrls: ['./myprofile.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_Services_employee_details_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeDetailsService"] }, { type: src_app_Services_policy_service__WEBPACK_IMPORTED_MODULE_5__["PolicyService"] }, { type: src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/settings/myprofile/old-pwd-validators.ts":
/*!**********************************************************!*\
  !*** ./src/app/settings/myprofile/old-pwd-validators.ts ***!
  \**********************************************************/
/*! exports provided: OldPwdValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OldPwdValidators", function() { return OldPwdValidators; });
class OldPwdValidators {
    static OldPasswordMethod(control) {
        return new Promise((resolve, reject) => {
            let OldPassword = localStorage.getItem('oldPassword');
            if (control.value !== OldPassword)
                resolve({ OldPasswordMethod: true });
            else
                resolve(null);
        });
    }
    static matchPwds(control) {
        let newPwd2 = control.get('newPwd');
        let confirmPwd2 = control.get('confirmPwd');
        if (newPwd2.value !== confirmPwd2.value) {
            return { pwdsDontMatch: true };
        }
        return null;
    }
}


/***/ }),

/***/ "./src/app/settings/setting-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/settings/setting-routing.module.ts ***!
  \****************************************************/
/*! exports provided: Settings_Routes, SettingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings_Routes", function() { return Settings_Routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingRoutingModule", function() { return SettingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _settings_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/changepassword/changepassword.component */ "./src/app/settings/changepassword/changepassword.component.ts");
/* harmony import */ var _settings_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings/myprofile/myprofile.component */ "./src/app/settings/myprofile/myprofile.component.ts");
/* harmony import */ var _user_policy_user_policy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-policy/user-policy.component */ "./src/app/settings/user-policy/user-policy.component.ts");







const Settings_Routes = [{
        path: 'myprofile',
        component: _settings_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_3__["MyprofileComponent"]
    },
    {
        path: 'changepassword',
        component: _settings_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_2__["ChangepasswordComponent"]
    }, {
        path: 'privacypolicy',
        component: _user_policy_user_policy_component__WEBPACK_IMPORTED_MODULE_4__["UserPolicyComponent"]
    }
];
class SettingRoutingModule {
}
SettingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SettingRoutingModule });
SettingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SettingRoutingModule_Factory(t) { return new (t || SettingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(Settings_Routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(Settings_Routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/settings/setting.module.ts":
/*!********************************************!*\
  !*** ./src/app/settings/setting.module.ts ***!
  \********************************************/
/*! exports provided: SettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModule", function() { return SettingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting-routing.module */ "./src/app/settings/setting-routing.module.ts");
/* harmony import */ var _settings_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings/changepassword/changepassword.component */ "./src/app/settings/changepassword/changepassword.component.ts");
/* harmony import */ var _settings_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings/myprofile/myprofile.component */ "./src/app/settings/myprofile/myprofile.component.ts");
/* harmony import */ var _user_policy_user_policy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-policy/user-policy.component */ "./src/app/settings/user-policy/user-policy.component.ts");








class SettingModule {
}
SettingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SettingModule });
SettingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SettingModule_Factory(t) { return new (t || SettingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingModule, { declarations: [_settings_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_4__["ChangepasswordComponent"], _settings_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_5__["MyprofileComponent"], _user_policy_user_policy_component__WEBPACK_IMPORTED_MODULE_6__["UserPolicyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _setting_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_settings_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_4__["ChangepasswordComponent"], _settings_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_5__["MyprofileComponent"], _user_policy_user_policy_component__WEBPACK_IMPORTED_MODULE_6__["UserPolicyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _setting_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/settings/user-policy/user-policy.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/settings/user-policy/user-policy.component.ts ***!
  \***************************************************************/
/*! exports provided: UserPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPolicyComponent", function() { return UserPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Models_policy_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/policy-dto */ "./src/app/_Models/policy-dto.ts");
/* harmony import */ var src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/auth.service */ "./src/app/_Services/auth.service.ts");
/* harmony import */ var src_app_Services_policy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/policy.service */ "./src/app/_Services/policy.service.ts");
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/notification.service */ "./src/app/_Services/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function UserPolicyComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.PolicyHeader, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, p_r1.AgreementDate, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", p_r1.PolicyContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class UserPolicyComponent {
    constructor(authService, PolicyService, notifyService, activatedRoute, router) {
        this.authService = authService;
        this.PolicyService = PolicyService;
        this.notifyService = notifyService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.displayStyle = "none";
        this.dashboardUrl = 'backend/dashboard';
        this.loginUrl = 'login';
        this.ObjPolicyDTO = new src_app_Models_policy_dto__WEBPACK_IMPORTED_MODULE_1__["PolicyDTO"];
        this.Currentuser = localStorage.getItem("UserfullName");
        this.currentuserId = localStorage.getItem('EmpNo');
    }
    ngOnInit() {
        this.val = this.activatedRoute.snapshot.params.val;
        this.PolicyService.GetPolicyDetails(this.currentuserId)
            .subscribe(data => {
            // console.log("Policy Data---->",data)
            this._LstPolicy = data;
            // this.PolicyId = data[0]['PolicyId'];
            // this.PolicyHeader = data[0]['PolicyHeader'];
            // this.PolicyContent = data[0]['PolicyContent'];
        });
    }
    Agreement(_val) {
        if (_val == 1) {
            this.PolicyService.InsertUserPolicyAgreement(this.PolicyId, this.currentuserId)
                .subscribe(data => {
                this.result = data["Result"];
                if (this.result = 1) {
                    this.notifyService.showSuccess(this.Currentuser, "Successfully logged in by : ");
                    this.notifyService.showInfo("Accepted", "User Policy");
                    this.router.navigate([this.dashboardUrl]);
                }
                else {
                    this.router.navigate([this.loginUrl]);
                }
            });
        }
        else {
            localStorage.removeItem('EmpNo');
            this.authService.logout();
            return this.router.navigate(['login']);
        }
    }
}
UserPolicyComponent.ɵfac = function UserPolicyComponent_Factory(t) { return new (t || UserPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_policy_service__WEBPACK_IMPORTED_MODULE_3__["PolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
UserPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserPolicyComponent, selectors: [["app-user-policy"]], decls: 11, vars: 1, consts: [[1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title"], [1, "kt-portlet__body", "kt-portlet__body_scroll"], ["id", "accordionpolicy", 1, "accordion", "accordion-solid", "accordion-toggle-plus"], ["class", "card brdr-b", 4, "ngFor", "ngForOf"], [1, "card", "brdr-b"], ["id", "headingTwo6", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#policy20", "aria-expanded", "true", "aria-controls", "policy20", 1, "card-title", "no-after", "fs-4"], [1, "fas", "fa-file", "text-info"], [1, "created-date"], ["id", "policy20", "aria-labelledby", "heading2", "data-parent", "#accordionpolicy", 1, "collapse", "show"], [1, "card-body"], [1, "pt-1", 3, "innerHTML"]], template: function UserPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " User Policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserPolicyComponent_div_10_Template, 12, 6, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._LstPolicy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zZXR0aW5ncy91c2VyLXBvbGljeS91c2VyLXBvbGljeS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-policy',
                templateUrl: './user-policy.component.html',
                styleUrls: ['./user-policy.component.css']
            }]
    }], function () { return [{ type: src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: src_app_Services_policy_service__WEBPACK_IMPORTED_MODULE_3__["PolicyService"] }, { type: src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=settings-setting-module.js.map