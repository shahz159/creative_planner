"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["src_app_settings_setting_module_ts"],{

/***/ 10397:
/*!*****************************************!*\
  !*** ./src/app/_Models/employee-dto.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeDTO": () => (/* binding */ EmployeeDTO)
/* harmony export */ });
class EmployeeDTO {
}


/***/ }),

/***/ 77983:
/*!*********************************************!*\
  !*** ./src/app/_Services/apiurl.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiurlService": () => (/* binding */ ApiurlService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class ApiurlService {
    constructor() {
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        this.apiurl = this.baseUrl;
    }
}
ApiurlService.ɵfac = function ApiurlService_Factory(t) { return new (t || ApiurlService)(); };
ApiurlService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiurlService, factory: ApiurlService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 66646:
/*!*******************************************************!*\
  !*** ./src/app/_Services/employee-details.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeDetailsService": () => (/* binding */ EmployeeDetailsService)
/* harmony export */ });
/* harmony import */ var _Models_employee_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_Models/employee-dto */ 10397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _apiurl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiurl.service */ 77983);




class EmployeeDetailsService {
    constructor(http, commonUrl) {
        this.http = http;
        this.commonUrl = commonUrl;
        this.rootUrl = this.commonUrl.apiurl;
        this.objEmployeeDTO = new _Models_employee_dto__WEBPACK_IMPORTED_MODULE_0__.EmployeeDTO;
        this.CurrentUserId = sessionStorage.getItem('Session_EmpNo');
    }
    GetEmployeeDetails(EmpNo) {
        this.objEmployeeDTO.Emp_No = EmpNo;
        return this.http.post(this.rootUrl + "Policy/NewGetEmployeeDetails", this.objEmployeeDTO);
    }
}
EmployeeDetailsService.ɵfac = function EmployeeDetailsService_Factory(t) { return new (t || EmployeeDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_apiurl_service__WEBPACK_IMPORTED_MODULE_1__.ApiurlService)); };
EmployeeDetailsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EmployeeDetailsService, factory: EmployeeDetailsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 32278:
/*!***************************************************!*\
  !*** ./src/app/_Services/notification.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 82808);


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
            // disableTimeOut: true,
            // tapToDismiss: false,
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
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService)); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 53616:
/*!*********************************************************************!*\
  !*** ./src/app/settings/changepassword/changepassword.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangepasswordComponent": () => (/* binding */ ChangepasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class ChangepasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChangepasswordComponent.ɵfac = function ChangepasswordComponent_Factory(t) { return new (t || ChangepasswordComponent)(); };
ChangepasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangepasswordComponent, selectors: [["app-changepassword"]], decls: 39, vars: 0, consts: [[1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid"], [1, "row"], [1, "col-lg-8", "m-auto"], [1, "card"], [1, "card-header", "bg-transparent"], [1, "card-title", "m-0"], [1, "font-bolder", "m-0"], [1, "card-body"], [1, "form-horizontal"], [1, "row", "mb-4"], ["for", "", 1, "col-4", "col-xl-3", "col-form-label"], [1, "col-8", "col-xl-9"], ["type", "password", "id", "", "placeholder", "Password", 1, "form-control"], [1, "row", "mb-3"], ["type", "password", "id", "", "placeholder", "Retype Password", 1, "form-control"], [1, "row", "mb-3", "justify-content-end"], [1, "form-check"], ["type", "checkbox", "id", "", 1, "form-check-input"], ["for", "", 1, "form-check-label", "ml-1"], [1, "justify-content-end", "mt-3", "row"], ["type", "submit", 1, "btn", "btn-info", "waves-effect", "waves-light", "mr-2"], ["type", "submit", 1, "btn", "btn-secondary", "waves-effect", "waves-light"]], template: function ChangepasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "div", 1)(10, "div", 2)(11, "form", 8)(12, "div", 9)(13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Current Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13)(18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13)(23, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Retype New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15)(28, "div", 11)(29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Show Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19)(34, "div", 11)(35, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2VwYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 33409:
/*!***********************************************************!*\
  !*** ./src/app/settings/myprofile/myprofile.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyprofileComponent": () => (/* binding */ MyprofileComponent)
/* harmony export */ });
/* harmony import */ var src_app_Models_employee_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_Models/employee-dto */ 10397);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _myprofile_old_pwd_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../myprofile/old-pwd-validators */ 50407);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_employee_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/employee-details.service */ 66646);
/* harmony import */ var src_app_Services_policy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/policy.service */ 81196);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);









function MyprofileComponent_div_252_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Old Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MyprofileComponent_div_252_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Old Password is not valid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MyprofileComponent_div_252_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MyprofileComponent_div_252_div_1_Template, 3, 0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MyprofileComponent_div_252_div_2_Template, 3, 0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.oldPwd.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.oldPwd.errors.OldPasswordMethod);
} }
function MyprofileComponent_div_258_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "New Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MyprofileComponent_div_258_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MyprofileComponent_div_258_div_1_Template, 3, 0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.newPwd.errors.required);
} }
function MyprofileComponent_div_264_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Confirm Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MyprofileComponent_div_264_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MyprofileComponent_div_264_div_1_Template, 3, 0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.confirmPwd.errors.required);
} }
class MyprofileComponent {
    constructor(fb, EmpDetailsService, PolicyService, notifyService) {
        this.EmpDetailsService = EmpDetailsService;
        this.PolicyService = PolicyService;
        this.notifyService = notifyService;
        this._passwordHide = true;
        this._EmpNo = localStorage.getItem('EmpNo');
        this.objEmployeeDTO = new src_app_Models_employee_dto__WEBPACK_IMPORTED_MODULE_0__.EmployeeDTO;
        this.form1 = fb.group({
            'oldPwd': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _myprofile_old_pwd_validators__WEBPACK_IMPORTED_MODULE_1__.OldPwdValidators.OldPasswordMethod],
            'newPwd': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'confirmPwd': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        }, {
            validator: _myprofile_old_pwd_validators__WEBPACK_IMPORTED_MODULE_1__.OldPwdValidators.matchPwds
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
MyprofileComponent.ɵfac = function MyprofileComponent_Factory(t) { return new (t || MyprofileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_Services_employee_details_service__WEBPACK_IMPORTED_MODULE_2__.EmployeeDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_Services_policy_service__WEBPACK_IMPORTED_MODULE_3__.PolicyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService)); };
MyprofileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MyprofileComponent, selectors: [["app-myprofile"]], decls: 279, vars: 21, consts: [[1, "container-fluid", "mt--2", "profile-cls"], [1, "row"], [1, "col-xl-3", "col-lg-4", "card", "brdr-0", "p-0"], [1, "mb-4", "mb-xl-10"], [1, "text-teal", "text-hover-primary", "font-sp-bold", "p-3", "ml-3"], [1, "svg-icon", "svg-icon-primary", "svg-icon-2x"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["points", "0 0 24 0 24 24 0 24"], ["d", "M12.2928955,6.70710318 C11.9023712,6.31657888 11.9023712,5.68341391 12.2928955,5.29288961 C12.6834198,4.90236532 13.3165848,4.90236532 13.7071091,5.29288961 L19.7071091,11.2928896 C20.085688,11.6714686 20.0989336,12.281055 19.7371564,12.675721 L14.2371564,18.675721 C13.863964,19.08284 13.2313966,19.1103429 12.8242777,18.7371505 C12.4171587,18.3639581 12.3896557,17.7313908 12.7628481,17.3242718 L17.6158645,12.0300721 L12.2928955,6.70710318 Z", "fill", "#000000", "fill-rule", "nonzero"], ["d", "M3.70710678,15.7071068 C3.31658249,16.0976311 2.68341751,16.0976311 2.29289322,15.7071068 C1.90236893,15.3165825 1.90236893,14.6834175 2.29289322,14.2928932 L8.29289322,8.29289322 C8.67147216,7.91431428 9.28105859,7.90106866 9.67572463,8.26284586 L15.6757246,13.7628459 C16.0828436,14.1360383 16.1103465,14.7686056 15.7371541,15.1757246 C15.3639617,15.5828436 14.7313944,15.6103465 14.3242754,15.2371541 L9.03007575,10.3841378 L3.70710678,15.7071068 Z", "fill", "#000000", "fill-rule", "nonzero", "opacity", "0.3", "transform", "translate(9.000003, 11.999999) rotate(-270.000000) translate(-9.000003, -11.999999) "], [1, "card-body", "px-5", "pt-4", "pb-0"], [1, "text-center"], [1, "mb-3"], [1, "symbol", "symbol-100px", "symbol-lg-160px", "symbol-fixed", "position-relative"], ["src", "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png", "alt", "image"], ["alt", "user", 1, "fas", "fa-user", "d-none"], [1, ""], [1, "text-center", "w-80"], [1, "d-flexflex-column"], [1, "text-center", "mb-2", "pb-3"], ["href", "#", 1, "d-block", "fs-3", "font-bold", "text-gray-900", "text-hover-primary", "font-bolder", "mr-1"], [1, "d-flex", "flex-wrap", "justify-content-center", "my-3", "hoverr"], [1, "icon-svg", "mail1"], ["x", "0", "y", "0", "width", "24", "height", "24"], ["d", "M5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z", "fill", "#000000"], [1, "icon-svg", "emp1"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "24", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-person-badge"], ["d", "M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"], ["d", "M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"], [1, "icon-svg", "comp1"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "20px", "height", "20px", "viewBox", "0 0 24 24", "version", "1.1"], ["d", "M13.5,21 L13.5,18 C13.5,17.4477153 13.0522847,17 12.5,17 L11.5,17 C10.9477153,17 10.5,17.4477153 10.5,18 L10.5,21 L5,21 L5,4 C5,2.8954305 5.8954305,2 7,2 L17,2 C18.1045695,2 19,2.8954305 19,4 L19,21 L13.5,21 Z M9,4 C8.44771525,4 8,4.44771525 8,5 L8,6 C8,6.55228475 8.44771525,7 9,7 L10,7 C10.5522847,7 11,6.55228475 11,6 L11,5 C11,4.44771525 10.5522847,4 10,4 L9,4 Z M14,4 C13.4477153,4 13,4.44771525 13,5 L13,6 C13,6.55228475 13.4477153,7 14,7 L15,7 C15.5522847,7 16,6.55228475 16,6 L16,5 C16,4.44771525 15.5522847,4 15,4 L14,4 Z M9,8 C8.44771525,8 8,8.44771525 8,9 L8,10 C8,10.5522847 8.44771525,11 9,11 L10,11 C10.5522847,11 11,10.5522847 11,10 L11,9 C11,8.44771525 10.5522847,8 10,8 L9,8 Z M9,12 C8.44771525,12 8,12.4477153 8,13 L8,14 C8,14.5522847 8.44771525,15 9,15 L10,15 C10.5522847,15 11,14.5522847 11,14 L11,13 C11,12.4477153 10.5522847,12 10,12 L9,12 Z M14,12 C13.4477153,12 13,12.4477153 13,13 L13,14 C13,14.5522847 13.4477153,15 14,15 L15,15 C15.5522847,15 16,14.5522847 16,14 L16,13 C16,12.4477153 15.5522847,12 15,12 L14,12 Z", "fill", "#000000"], ["fill", "#FFFFFF", "x", "13", "y", "8", "width", "3", "height", "3", "rx", "1"], ["d", "M4,21 L20,21 C20.5522847,21 21,21.4477153 21,22 L21,22.4 C21,22.7313708 20.7313708,23 20.4,23 L3.6,23 C3.26862915,23 3,22.7313708 3,22.4 L3,22 C3,21.4477153 3.44771525,21 4,21 Z", "fill", "#000000", "opacity", "0.3"], [1, "icon-svg", "add1"], ["d", "M4.88230018,17.2353996 L13.2844582,0.431083506 C13.4820496,0.0359007077 13.9625881,-0.12427877 14.3577709,0.0733126292 C14.5125928,0.15072359 14.6381308,0.276261584 14.7155418,0.431083506 L23.1176998,17.2353996 C23.3152912,17.6305824 23.1551117,18.1111209 22.7599289,18.3087123 C22.5664522,18.4054506 22.3420471,18.4197165 22.1378777,18.3482572 L14,15.5 L5.86212227,18.3482572 C5.44509941,18.4942152 4.98871325,18.2744737 4.84275525,17.8574509 C4.77129597,17.6532815 4.78556182,17.4288764 4.88230018,17.2353996 Z", "fill", "#000000", "fill-rule", "nonzero", "transform", "translate(14.000087, 9.191034) rotate(-315.000000) translate(-14.000087, -9.191034) "], [1, "d-flex", "justify-content-between", "text-left", "mt-5", "w-100", "mail1"], [1, "text-muted", "col-lg-4", "p-0", "v2"], [1, "far", "fa-envelope", "mr-2"], [1, "col-lg-8", "p-0", "col-xl-91", "text-left", "text-hover-primary", "mb-2"], [1, "d-flex", "justify-content-between", "text-left", "my-2", "w-100", "emp1"], [1, "text-muted", "col-lg-4", "p-0"], [1, "far", "fa-id-badge", "mr-2"], [1, "d-flex", "justify-content-between", "text-left", "mb-2", "w-100", "comp1"], [1, "far", "fa-building", "mr-2"], [1, "col-lg-8", "p-0", "col-xl-91", "text-hover-primary", "mb-2"], [1, "d-flex", "justify-content-between", "text-left", "my-2", "w-100", "add1"], [1, "fas", "fa-location-arrow", "mr-2"], [1, "border", "mt-3"], [1, "pt-2", "ml-2", "text-muted", "text-left"], [1, "swit", "p-3"], [1, "btn-d", "text-center"], [1, "btn", "btn-sm", "btn-success", "w-80", "font-bolder"], [1, "d-none"], [1, "toggle-switch"], [1, "switch"], ["type", "checkbox", "checked", "", 1, "swt"], [1, "slider"], [1, "col-xl-9", "col-lg-8", "p-0"], [1, "card-brdr", "pl-5"], [1, "nav", "nav-dark", "nav-bold", "nav-tabs", "pl-3", "nav-tabs-line", "mb-0", "font-bolder"], [1, "nav-item"], ["data-toggle", "tab", "href", "#overv-pro", 1, "nav-link", "text-active-primary", "font-bolder", "fs-125", "mr-4", "py-3", "active"], ["data-toggle", "tab", "href", "#profi", 1, "nav-link", "text-active-primary", "font-bolder", "fs-125", "mr-4", "py-3"], [1, "tab-content", "card", "profile-tab"], ["id", "overv-pro", 1, "active"], [1, "card1", "brdr-0", "mb-3", "d-none"], [1, "card-body"], [1, "row", "mb-3"], [1, "col-lg-4", "text-muted"], [1, "col-lg-8"], [1, "font-bolder", "fs-6", "text-gray-800"], [1, "card1", "brdr-0", "ml-5", "pt-5"], [1, "col--xl-2", "col-lg-3", "text-muted"], [1, "col--xl-10", "col-lg-9"], ["id", "edit-pro", 1, "card1", "brdr-0"], [1, "card-header", "bg-transparent"], [1, "card-title", "m-0"], [1, "font-bolder", "m-0"], [1, "col-lg-8", "m-auto"], [1, "m-card-profile", "d-none"], [1, "m-card-profile__title", "m--hide"], [1, "m-card-profile__pic"], [1, "m-card-profile__pic-wrapper"], ["src", "https://coderthemes.com/ubold/layouts/assets/images/users/user-1.jpg", "alt", ""], [1, "m-card-profile__details"], [1, "m-card-profile__name"], ["href", "", 1, "m-card-profile__email", "m-link"], [1, "form-horizontal"], ["for", "", 1, "col-4", "col-xl-3", "col-form-label"], [1, "col-8", "col-xl-9", "input-group"], ["type", "text", "id", "", 1, "form-control"], [1, "col-8", "col-xl-9"], ["type", "email", "id", "", "value", "email@devbox.com", "placeholder", "email@devbox.com", "disabled", "", 1, "form-control"], ["id", "basic-addon1", 1, "input-group-text", "input-group-prepend"], ["type", "tel", "value", "", "id", "", 1, "form-control", "m-input"], ["id", "basic-addon1", 1, "input-group-text", "input-group-append"], [1, "fa", "fa-phone"], ["id", "", 1, "form-control"], [1, "custom-file"], ["type", "file", "id", "file2", "accept", ".png, .jpg, .jpeg", 1, "custom-file-input"], [1, "custom-file-control"], [1, "col-8", "col-xl-9", "imgbox"], ["src", "https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/150-26.jpg"], [1, "justify-content-end", "row"], ["type", "submit", 1, "btn", "btn-info", "waves-effect", "waves-light"], ["id", "profi", 1, "card1", "brdr-0"], [1, "p-3"], [1, "col-lg-6", "ml-5", "pt-5"], [1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "row", "mb-4"], ["type", "password", "formControlName", "oldPwd", "id", "oldPwd", "placeholder", "Password", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["formControlName", "newPwd", "id", "newPwd", "placeholder", "Password", 1, "form-control", 3, "type"], ["formControlName", "confirmPwd", "id", "confirmPwd", "placeholder", "Confirm Password", 1, "form-control", 3, "type"], [1, "row", "mb-3", "justify-content-end"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "change"], ["for", "", 1, "form-check-label", "ml-1"], [1, "justify-content-end", "mt-3", "row"], ["type", "submit", 1, "btn", "btn-info", "waves-effect", "waves-light", "mr-2", 3, "disabled"], ["type", "button", 1, "btn", "btn-secondary", "waves-effect", "waves-light", 3, "click"], [1, "col-lg-6", "d-none"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "fas", "fa-exclamation-circle", "mr-1"]], template: function MyprofileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "svg", 6)(7, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "polygon", 8)(9, "path", 9)(10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "img", 15)(17, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 17)(19, "div", 18)(20, "div", 19)(21, "div", 20)(22, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 22)(27, "div", 23)(28, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "svg", 6)(30, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "rect", 24)(32, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 26)(34, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "path", 28)(37, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 30)(39, "span", 5)(40, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "svg", 31)(42, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "rect", 24)(44, "path", 32)(45, "rect", 33)(46, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 35)(48, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "svg", 31)(50, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "rect", 24)(52, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 37)(54, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 41)(60, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Emp ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 44)(66, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 47)(72, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Hyderabad International Airport, Shamshabad, Hyderabad, Telangana, India1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 49)(78, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 51)(81, "div", 52)(82, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 54)(85, "div", 55)(86, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](87, "input", 57)(88, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 59)(90, "div", 60)(91, "ul", 61)(92, "li", 62)(93, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "Company Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "li", 62)(96, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 65)(99, "div", 66)(100, "div", 67)(101, "div", 68)(102, "div", 69)(103, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 71)(106, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 69)(109, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "Employee ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "div", 71)(112, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "div", 69)(115, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, " Email Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 71)(118, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "div", 73)(121, "div", 68)(122, "div", 69)(123, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 75)(126, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "div", 69)(129, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "div", 75)(132, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "div", 69)(135, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](136, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "div", 75)(138, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "div", 69)(141, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142, "Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "div", 75)(144, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "div", 69)(147, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](148, "Login Id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "div", 75)(150, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](151);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "div", 69)(153, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](154, "Employee Id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "div", 75)(156, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](158, "div", 76)(159, "div", 77)(160, "div", 78)(161, "h5", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](162, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](163, "div", 68)(164, "div", 1)(165, "div", 80)(166, "div", 81)(167, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](168, " Your Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](169, "div", 83)(170, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](171, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](172, "div", 86)(173, "span", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](174, " Mark Andre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](175, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](176, " mark.andre@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](177, "form", 89)(178, "div", 69)(179, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](180, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](181, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](182, "input", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](183, "div", 69)(184, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](185, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](186, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](187, "input", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](188, "div", 69)(189, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](190, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](191, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](192, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](193, "div", 69)(194, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](195, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](196, "div", 91)(197, "span", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](198, "91");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](199, "input", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](201, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](202, "div", 69)(203, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](204, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](205, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](206, "textarea", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](207, "div", 69)(208, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](209, "Pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](210, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](211, "input", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](212, "div", 69)(213, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](214, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](215, "div", 93)(216, "select", 92)(217, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](218, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](219, "div", 69)(220, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](221, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](222, "div", 93)(223, "select", 92)(224, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](225, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](226, "div", 69)(227, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](228, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](229, "div", 93)(230, "label", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](231, "input", 101)(232, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](233, "div", 69)(234, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](235, "Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](236, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](237, "img", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](238, "div", 105)(239, "div", 93)(240, "button", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](241, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](242, "div", 107)(243, "div", 108)(244, "div", 1)(245, "div", 109)(246, "form", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function MyprofileComponent_Template_form_ngSubmit_246_listener() { return ctx.OnSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](247, "div", 111)(248, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](249, "Current Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](250, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](251, "input", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](252, MyprofileComponent_div_252_Template, 3, 2, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](253, "div", 69)(254, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](255, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](256, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](257, "input", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](258, MyprofileComponent_div_258_Template, 2, 1, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](259, "div", 69)(260, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](261, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](262, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](263, "input", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](264, MyprofileComponent_div_264_Template, 2, 1, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](265, "div", 116)(266, "div", 93)(267, "div", 117)(268, "input", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function MyprofileComponent_Template_input_change_268_listener() { return ctx.onCheckboxChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](269, "label", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](270, "Show Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](271, "div", 120)(272, "div", 93)(273, "button", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](274, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](275, "button", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MyprofileComponent_Template_button_click_275_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](276, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](277, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](278, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.FullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.Position);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.Email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx._EmpNo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.CompanyName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.FullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx._EmpNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.Email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.CompanyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.Position);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.Department);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.Role, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.LoginUserName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx._EmpNo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.oldPwd.touched && ctx.oldPwd.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx._passwordHide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newPwd.touched && ctx.newPwd.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx._passwordHide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.confirmPwd.touched && ctx.confirmPwd.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.form1.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName], styles: [".profile-tab[_ngcontent-%COMP%]   .card1[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.profile-cls[_ngcontent-%COMP%]{    \r\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\r\n    font-weight: 600;\r\n}\r\n.nav-tabs.nav-tabs-line[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    padding: 10px 0 !important;\r\n}\r\n.card-brdr.pl-5[_ngcontent-%COMP%] {\r\n    background-color: #f2f6f6;\r\n    background-clip: border-box;\r\n    border-bottom: 1px solid #ebedf2;\r\n}\r\n.text-teal[_ngcontent-%COMP%]{\r\n    color: #17a2b8 !important;\r\n}\r\n.col-lg-3.card[_ngcontent-%COMP%]{\r\n    height: 100vh;;\r\n}\r\n.mt--2[_ngcontent-%COMP%] {\r\n    margin-top: -20px;\r\n}\r\n.brdr-0[_ngcontent-%COMP%]{\r\nborder-radius:0;\r\n}\r\n.dash1[_ngcontent-%COMP%]   .nav.nav-tabs.flex-column[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    border: 0 !important;\r\n    border-radius: 0 !important;\r\n\tmargin-bottom: 5px;\r\n}\r\n.dash1[_ngcontent-%COMP%]   .nav.nav-tabs.flex-column[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n    border: 0 !important;\r\n    border-radius: 0 !important;\r\n\tborder-left: 3px solid #6658dd!important;\r\n\tbackground-color: transparent;\r\n}\r\n.dash1[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{\r\n\tborder-bottom: 0;\r\n}\r\n.profile-tab[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .card1[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n.tab-content[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n.text-hover-primary[_ngcontent-%COMP%] {\r\n    transition: color .2s ease, background-color .2s ease;\r\n}\r\n.text-gray-900[_ngcontent-%COMP%] {\r\n    color: #181c32!important;\r\n}\r\n.text-gray-400[_ngcontent-%COMP%] {\r\n    color: #b5b5c3!important;\r\n}\r\n.nav-tabs.nav-tabs-line[_ngcontent-%COMP%]   a.nav-link.active[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    color: #595d6e;\r\n    border-bottom: 2px solid #22b9ff;\r\n}\r\n.text-active-primary.active[_ngcontent-%COMP%] {\r\n    transition: color .2s ease, background-color .2s ease;\r\n    color: #009ef7!important;\r\n}\r\n.font-bolder[_ngcontent-%COMP%] {\r\n    font-weight: 600 !important;\r\n}\r\n.text-hover-primary[_ngcontent-%COMP%]:hover {\r\n    transition: color .2s ease, background-color .2s ease;\r\n    color: #009ef7!important;\r\n}\r\n.symbol[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    flex-shrink: 0;\r\n    position: relative;\r\n    border-radius: 0.475rem;\r\n}\r\n.position-relative[_ngcontent-%COMP%] {\r\n    position: relative !important;\r\n}\r\n.symbol[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    flex-shrink: 0;\r\n    display: inline-block;\r\n    border-radius: 0.475rem;\r\n}\r\n.symbol.symbol-100px.symbol-fixed[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n}\r\n@media (min-width: 992px){\r\n.symbol.symbol-lg-160px.symbol-fixed[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n}\r\n}\r\n.font-sp-bold[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\r\n}\r\n.text-teal[_ngcontent-%COMP%]   .svg-icon.svg-icon-primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n    transition: fill 0.3s ease;\r\n    fill:  #17a2b8 !important;\r\n}\r\n.icon-svg[_ngcontent-%COMP%]   .svg-icon-primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    transition: fill 0.3s ease;\r\n    fill:  #f2f6f6 !important;\r\n}\r\n.icon-svg[_ngcontent-%COMP%]:hover   .svg-icon-primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    transition: fill 0.3s ease;\r\n    fill:  #3699FF !important;\r\n}\r\n.text-teal[_ngcontent-%COMP%]:hover   .svg-icon.svg-icon-primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n    fill: #3699FF !important;\r\n}\r\n.tab-content.card.profile-tab[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 47px);\r\n    border-radius: 0px;\r\n    border-top: 0;\r\n}\r\n.icon-svg[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    background: #3699FF;\r\n    width: 34px !important;\r\n    height: 34px;\r\n    border-radius: 20px;\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    max-width: 33.33333%;\r\n}\r\n.icon-svg[_ngcontent-%COMP%]:hover{\r\n    background: #ffffff;\r\n    border:1px solid #009ef7;\r\n    transform: scale(1.1);\r\n    transition: 0.3s ease;\r\n    cursor: pointer;\r\n\r\n}\r\n.hoverr[_ngcontent-%COMP%]   .emp1[_ngcontent-%COMP%]:hover    ~ .emp1[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .hoverr[_ngcontent-%COMP%]   .emp1[_ngcontent-%COMP%]:hover    ~ .emp1[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .hoverr[_ngcontent-%COMP%]   .mail1[_ngcontent-%COMP%]:hover    ~ .mail1[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .hoverr[_ngcontent-%COMP%]   .mail1[_ngcontent-%COMP%]:hover    ~ .mail1[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .hoverr[_ngcontent-%COMP%]   .comp1[_ngcontent-%COMP%]:hover    ~ .comp1[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .hoverr[_ngcontent-%COMP%]   .comp1[_ngcontent-%COMP%]:hover    ~ .comp1[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .hoverr[_ngcontent-%COMP%]   .add1[_ngcontent-%COMP%]:hover    ~ .add1[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .hoverr[_ngcontent-%COMP%]   .add1[_ngcontent-%COMP%]:hover    ~ .add1[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {    \r\n    transform: scale(1.08);\r\n    transition: 0.3s ease;\r\n    color: #009ef7 !important;\r\n    padding-left: 4px;\r\n}\r\n.hoverr[_ngcontent-%COMP%] > .emp1[_ngcontent-%COMP%]:hover    ~ .hrr[_ngcontent-%COMP%] {    \r\n    background-color:#009ef7 !important;\r\n    padding-left: 40px;;\r\n}\r\n.w-80[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n\r\n.toggle-switch[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 60px;\r\n  }\r\n.switch[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 35px;\r\n    background-color: var(--dark);\r\n    border-radius: 50px;\r\n    cursor: pointer;    \r\n    left: 0;\r\n    top: 0;\r\n\r\n  }\r\n.swt[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    display: none;\r\n  }\r\n.slider[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    border-radius: 50px;\r\n    transition: 0.3s;\r\n    border: 1px solid #ccc;\r\n  }\r\n.swit[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    display: flex;\r\n    background-color: #f2f6f6;\r\n\r\n  }\r\n.swt[_ngcontent-%COMP%]:checked    ~ .slider[_ngcontent-%COMP%] {\r\n    background-color: var(--light);\r\n  }\r\n.btn-d[_ngcontent-%COMP%]{\r\n    flex: 1;\r\n    text-align: left;\r\n  }\r\n.slider[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 4px;\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%;\r\n    box-shadow: inset 9px 0px 0px 0px var(--light);\r\n    background-color: var(--dark);\r\n    transition: 0.3s;    \r\n  }\r\n.swt[_ngcontent-%COMP%]:checked    ~ .slider[_ngcontent-%COMP%]::before {\r\n    transform: translateX(25px);\r\n    background-color: #1dc9b7;\r\n    box-shadow: none;\r\n  }\r\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n    border: 1px solid #f86170;\r\n}\r\n.alert.alert-danger[_ngcontent-%COMP%] {\r\n    background: none;\r\n    border: none;\r\n    color: #f86170;\r\n    padding: 5px 0px;\r\n    margin-bottom: 5px;\r\n    flex-direction: row-reverse;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15cHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksdUxBQXVMO0lBQ3ZMLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLDJCQUEyQjtDQUM5QixrQkFBa0I7QUFDbkI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQiwyQkFBMkI7Q0FDOUIsd0NBQXdDO0NBQ3hDLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxxREFBcUQ7QUFDekQ7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGdDQUFnQztBQUNwQztBQUNBO0lBQ0kscURBQXFEO0lBQ3JELHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxxREFBcUQ7SUFDckQsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVMQUF1TDtBQUMzTDtBQUNBO0lBRUksMEJBQTBCO0lBQzFCLHlCQUF5QjtBQUM3QjtBQUNBO0lBRUksMEJBQTBCO0lBQzFCLHlCQUF5QjtBQUM3QjtBQUNBO0lBRUksMEJBQTBCO0lBQzFCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTs7QUFFbkI7QUFDQTs7OztJQUlJLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQSwwQkFBMEI7QUFFMUI7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixPQUFPO0lBQ1AsTUFBTTs7RUFFUjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osT0FBTztJQUNQLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHlCQUF5Qjs7RUFFM0I7QUFDQTtJQUNFLDhCQUE4QjtFQUNoQztBQUNBO0lBQ0UsT0FBTztJQUNQLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDhDQUE4QztJQUM5Qyw2QkFBNkI7SUFDN0IsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJteXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXRhYiAuY2FyZDEge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ucHJvZmlsZS1jbHN7ICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLFwiTm90byBTYW5zXCIsc2Fucy1zZXJpZixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUkgU3ltYm9sXCIsXCJOb3RvIENvbG9yIEVtb2ppXCI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5uYXYtdGFicy5uYXYtdGFicy1saW5lIC5uYXYtbGluayB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgIWltcG9ydGFudDtcclxufVxyXG4uY2FyZC1icmRyLnBsLTUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjZmNjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlZGYyO1xyXG59XHJcbi50ZXh0LXRlYWx7XHJcbiAgICBjb2xvcjogIzE3YTJiOCAhaW1wb3J0YW50O1xyXG59XHJcbi5jb2wtbGctMy5jYXJke1xyXG4gICAgaGVpZ2h0OiAxMDB2aDs7XHJcbn1cclxuLm10LS0yIHtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbi5icmRyLTB7XHJcbmJvcmRlci1yYWRpdXM6MDtcclxufVxyXG4uZGFzaDEgLm5hdi5uYXYtdGFicy5mbGV4LWNvbHVtbiAubmF2LWxpbmsge1xyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5kYXNoMSAubmF2Lm5hdi10YWJzLmZsZXgtY29sdW1uIC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNjY1OGRkIWltcG9ydGFudDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uZGFzaDEgLm5hdi10YWJze1xyXG5cdGJvcmRlci1ib3R0b206IDA7XHJcbn1cclxuLnByb2ZpbGUtdGFiIC5hY3RpdmUgLmNhcmQxIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udGFiLWNvbnRlbnQ+LmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRleHQtaG92ZXItcHJpbWFyeSB7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMnMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZTtcclxufVxyXG5cclxuLnRleHQtZ3JheS05MDAge1xyXG4gICAgY29sb3I6ICMxODFjMzIhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LWdyYXktNDAwIHtcclxuICAgIGNvbG9yOiAjYjViNWMzIWltcG9ydGFudDtcclxufVxyXG4ubmF2LXRhYnMubmF2LXRhYnMtbGluZSBhLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjNTk1ZDZlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyMmI5ZmY7XHJcbn1cclxuLnRleHQtYWN0aXZlLXByaW1hcnkuYWN0aXZlIHtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlO1xyXG4gICAgY29sb3I6ICMwMDllZjchaW1wb3J0YW50O1xyXG59XHJcbi5mb250LWJvbGRlciB7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtaG92ZXItcHJpbWFyeTpob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMnMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZTtcclxuICAgIGNvbG9yOiAjMDA5ZWY3IWltcG9ydGFudDtcclxufVxyXG4uc3ltYm9sIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC40NzVyZW07XHJcbn1cclxuLnBvc2l0aW9uLXJlbGF0aXZlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5zeW1ib2w+aW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjQ3NXJlbTtcclxufVxyXG4uc3ltYm9sLnN5bWJvbC0xMDBweC5zeW1ib2wtZml4ZWQ+aW1nIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KXtcclxuLnN5bWJvbC5zeW1ib2wtbGctMTYwcHguc3ltYm9sLWZpeGVkPmltZyB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbn1cclxuLmZvbnQtc3AtYm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLFwiTm90byBTYW5zXCIsc2Fucy1zZXJpZixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUkgU3ltYm9sXCIsXCJOb3RvIENvbG9yIEVtb2ppXCI7XHJcbn1cclxuLnRleHQtdGVhbCAuc3ZnLWljb24uc3ZnLWljb24tcHJpbWFyeSBzdmcgZyBbZmlsbF0ge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xyXG4gICAgZmlsbDogICMxN2EyYjggIWltcG9ydGFudDtcclxufVxyXG4uaWNvbi1zdmcgLnN2Zy1pY29uLXByaW1hcnkgc3ZnIHBhdGgge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xyXG4gICAgZmlsbDogICNmMmY2ZjYgIWltcG9ydGFudDtcclxufVxyXG4uaWNvbi1zdmc6aG92ZXIgLnN2Zy1pY29uLXByaW1hcnkgc3ZnIHBhdGgge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xyXG4gICAgZmlsbDogICMzNjk5RkYgIWltcG9ydGFudDtcclxufVxyXG4udGV4dC10ZWFsOmhvdmVyIC5zdmctaWNvbi5zdmctaWNvbi1wcmltYXJ5IHN2ZyBnIFtmaWxsXSB7XHJcbiAgICBmaWxsOiAjMzY5OUZGICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRhYi1jb250ZW50LmNhcmQucHJvZmlsZS10YWIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDdweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG59XHJcbi5pY29uLXN2ZyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzY5OUZGO1xyXG4gICAgd2lkdGg6IDM0cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMyU7XHJcbn1cclxuLmljb24tc3ZnOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzAwOWVmNztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuLmhvdmVyciAuZW1wMTpob3ZlciAgfiAuZW1wMT5zcGFuLCAuaG92ZXJyIC5lbXAxOmhvdmVyICB+IC5lbXAxPmEsXHJcbi5ob3ZlcnIgLm1haWwxOmhvdmVyICB+IC5tYWlsMT5zcGFuLCAuaG92ZXJyIC5tYWlsMTpob3ZlciAgfiAubWFpbDE+YSxcclxuLmhvdmVyciAuY29tcDE6aG92ZXIgIH4gLmNvbXAxPnNwYW4sIC5ob3ZlcnIgLmNvbXAxOmhvdmVyICB+IC5jb21wMT5hLFxyXG4uaG92ZXJyIC5hZGQxOmhvdmVyICB+IC5hZGQxPnNwYW4sIC5ob3ZlcnIgLmFkZDE6aG92ZXIgIH4gLmFkZDE+YSB7ICAgIFxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICAgIGNvbG9yOiAjMDA5ZWY3ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxufVxyXG4uaG92ZXJyPi5lbXAxOmhvdmVyICB+IC5ocnIgeyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwOWVmNyAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4OztcclxufVxyXG4udy04MHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi8qYWN0aXZlIGRlYWN0aXZlIHN3aXRjaCAqL1xyXG5cclxuLnRvZ2dsZS1zd2l0Y2gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgfVxyXG4gIFxyXG4uc3dpdGNoIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgICBcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcblxyXG4gIH1cclxuICBcclxuICAuc3d0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIH1cclxuICAuc3dpdHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmNmY2O1xyXG5cclxuICB9XHJcbiAgLnN3dDpjaGVja2VkIH4gLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XHJcbiAgfVxyXG4gIC5idG4tZHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAuc2xpZGVyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNHB4O1xyXG4gICAgbGVmdDogNHB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCA5cHggMHB4IDBweCAwcHggdmFyKC0tbGlnaHQpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzOyAgICBcclxuICB9XHJcbiAgXHJcbiAgLnN3dDpjaGVja2VkIH4gLnNsaWRlcjo6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNXB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZGM5Yjc7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y4NjE3MDtcclxufVxyXG4uYWxlcnQuYWxlcnQtZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2Y4NjE3MDtcclxuICAgIHBhZGRpbmc6IDVweCAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 50407:
/*!**********************************************************!*\
  !*** ./src/app/settings/myprofile/old-pwd-validators.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OldPwdValidators": () => (/* binding */ OldPwdValidators)
/* harmony export */ });
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

/***/ 22419:
/*!****************************************************!*\
  !*** ./src/app/settings/setting-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingRoutingModule": () => (/* binding */ SettingRoutingModule),
/* harmony export */   "Settings_Routes": () => (/* binding */ Settings_Routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _settings_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings/changepassword/changepassword.component */ 53616);
/* harmony import */ var _settings_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/myprofile/myprofile.component */ 33409);
/* harmony import */ var _user_policy_user_policy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-policy/user-policy.component */ 68517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const Settings_Routes = [{
        path: 'myprofile',
        component: _settings_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_1__.MyprofileComponent
    },
    {
        path: 'changepassword',
        component: _settings_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_0__.ChangepasswordComponent
    }, {
        path: 'privacypolicy',
        component: _user_policy_user_policy_component__WEBPACK_IMPORTED_MODULE_2__.UserPolicyComponent
    }
];
class SettingRoutingModule {
}
SettingRoutingModule.ɵfac = function SettingRoutingModule_Factory(t) { return new (t || SettingRoutingModule)(); };
SettingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SettingRoutingModule });
SettingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(Settings_Routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SettingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 74261:
/*!********************************************!*\
  !*** ./src/app/settings/setting.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingModule": () => (/* binding */ SettingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting-routing.module */ 22419);
/* harmony import */ var _settings_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/changepassword/changepassword.component */ 53616);
/* harmony import */ var _settings_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/myprofile/myprofile.component */ 33409);
/* harmony import */ var _user_policy_user_policy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-policy/user-policy.component */ 68517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







class SettingModule {
}
SettingModule.ɵfac = function SettingModule_Factory(t) { return new (t || SettingModule)(); };
SettingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SettingModule });
SettingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SettingModule, { declarations: [_settings_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_1__.ChangepasswordComponent, _settings_myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_2__.MyprofileComponent, _user_policy_user_policy_component__WEBPACK_IMPORTED_MODULE_3__.UserPolicyComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 68517:
/*!***************************************************************!*\
  !*** ./src/app/settings/user-policy/user-policy.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPolicyComponent": () => (/* binding */ UserPolicyComponent)
/* harmony export */ });
/* harmony import */ var src_app_Models_policy_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_Models/policy-dto */ 66402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Services/auth.service */ 83827);
/* harmony import */ var src_app_Services_policy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/policy.service */ 81196);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);







function UserPolicyComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 14)(6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 15)(10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", p_r1.PolicyHeader, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 3, p_r1.AgreementDate, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", p_r1.PolicyContent, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
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
        this.ObjPolicyDTO = new src_app_Models_policy_dto__WEBPACK_IMPORTED_MODULE_0__.PolicyDTO;
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
UserPolicyComponent.ɵfac = function UserPolicyComponent_Factory(t) { return new (t || UserPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Services_policy_service__WEBPACK_IMPORTED_MODULE_2__.PolicyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
UserPolicyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UserPolicyComponent, selectors: [["app-user-policy"]], decls: 11, vars: 1, consts: [[1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title"], [1, "kt-portlet__body", "kt-portlet__body_scroll"], ["id", "accordionpolicy", 1, "accordion", "accordion-solid", "accordion-toggle-plus"], ["class", "card brdr-b", 4, "ngFor", "ngForOf"], [1, "card", "brdr-b"], ["id", "headingTwo6", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#policy20", "aria-expanded", "true", "aria-controls", "policy20", 1, "card-title", "no-after", "fs-4"], [1, "fas", "fa-file", "text-info"], [1, "created-date"], ["id", "policy20", "aria-labelledby", "heading2", "data-parent", "#accordionpolicy", 1, "collapse", "show"], [1, "card-body"], [1, "pt-1", 3, "innerHTML"]], template: function UserPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " User Policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, UserPolicyComponent_div_10_Template, 12, 6, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._LstPolicy);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXBvbGljeS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_settings_setting_module_ts.js.map