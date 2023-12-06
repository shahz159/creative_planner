"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([[187],{

/***/ 30417:
/*!**************************************************************!*\
  !*** ./src/app/_LayoutDefault/login/login-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 18617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent }];
class LoginRoutingModule {
}
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); };
LoginRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 18617:
/*!*********************************************************!*\
  !*** ./src/app/_LayoutDefault/login/login.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_Models_login_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_Models/login-dto */ 97661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/auth.service */ 83827);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-loading-bar/core */ 3571);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);










function LoginComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "UserName is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function LoginComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginComponent_div_22_div_1_Template, 3, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.f.userid.errors.required);
} }
function LoginComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 43)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "In Correct UserName");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function LoginComponent_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Password is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function LoginComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginComponent_div_33_div_1_Template, 3, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.f.password.errors.required);
} }
function LoginComponent_p_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 43)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.message);
} }
const _c0 = function (a0) { return { "has-error": a0 }; };
class LoginComponent {
    constructor(formBuilder, router, notifyService, cd, authService, service, loadingBar) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.notifyService = notifyService;
        this.cd = cd;
        this.authService = authService;
        this.service = service;
        this.loadingBar = loadingBar;
        this.submitted = false;
        this.isLoading = false;
        this.InValidPassword = false;
        this.InValidUserName = false;
        this.dashboardUrl = 'backend/dashboard';
        this.policyUrl = 'userpolicy';
        this.cosnt_Loadingbar = this.loadingBar.useRef('http');
        this.Obj_ILoginDTO = new src_app_Models_login_dto__WEBPACK_IMPORTED_MODULE_0__.LoginDTO;
        // this.UserDetails_List = new UserDetailsDTO;
        this.loginForm = this.formBuilder.group({
            userid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    //---end---
    ngOnInit() {
        this.authService.logout();
        $('.showOrHide').on('click', function (e) {
            var target = e.currentTarget;
            $(target).hasClass('showp') ? hidePassword($(target)) : showPassword($(target));
        });
        function hidePassword(e) {
            e.removeClass('showp').addClass('hide');
            e.prev('input').attr('type', 'password');
        }
        function showPassword(e) {
            e.removeClass('hide').addClass('showp');
            e.prev('input').attr('type', 'text');
        }
    }
    get f() { return this.loginForm.controls; }
    OnKeyPress() {
        this.InValidPassword = false;
        this.InValidUserName = false;
        this.message = '';
    }
    // login_DMS() {
    //   this.submitted = true;
    //   if (this.loginForm.invalid) {
    //     return;
    //   }
    //   else {
    //     // this.Sendlogin_Credentials();
    //     // debugger
    //     this.UserDetails_List.UserName = this.f.userid.value;
    //     this.UserDetails_List.Password = this.f.password.value;
    //     //alert("One");
    //     this.service.login(this.UserDetails_List)
    //       .subscribe(
    //         (data) => {
    //           if (data[0]['CredentialsIsValid']) {
    //             localStorage.setItem('isLoggedIn', "true");
    //             this.EmpNo = data[0]['EmployeeCode'];
    //             this.IsCommunicationDownload = data[0]['IsCommunicationDownload'];
    //             const Isdownload: string = `${this.IsCommunicationDownload}`;
    //             localStorage.setItem('EmpNo', this.EmpNo);
    //             localStorage.setItem('IsCommunicationDownload',Isdownload);
    //             this.User_FullName = data[0]['FirstName'] + " " + data[0]['LastName'];
    //             // this.IsPolicy = data[0]['IsPolicy'];
    //             // this.router.navigate([this.policyUrl]);
    //             // this.InValidPassword = false;
    //             // this.cd.detectChanges();
    //             this.router.navigate([this.dashboardUrl]);
    //             this.notifyService.showInfo(this.User_FullName + ' ' + ' ', 'Login By :');
    //             this.notifyService.showSuccess("Successfully", "Logged In");
    //             this.InValidPassword = false;
    //             this.cd.detectChanges();
    //           }
    //           else {
    //             this.InValidPassword = true;
    //             console.log("Invalid Login");
    //             this.authService.logout();
    //             localStorage.removeItem('EmpNo');
    //             this.cd.detectChanges();
    //             // alert("Invalid");
    //             this.message = "Please check your UserName and Password";
    //           }
    //           // if (this.IsPolicy == 1) {
    //           //   this.router.navigate([this.dashboardUrl]);
    //           //   this.notifyService.showInfo(this.User_FullName + ' ' + ' ', 'Login By :');
    //           //   this.notifyService.showSuccess("Successfully", "Logged In");
    //           //   this.InValidPassword = false;
    //           //   this.cd.detectChanges();
    //           // }
    //           // else if (this.IsPolicy == 0) {
    //           //   this.router.navigate([this.policyUrl]);
    //           //   this.InValidPassword = false;
    //           //   this.cd.detectChanges();
    //           // }
    //           // this.UserDetails_List1 = data as UserDetailsDTO[];
    //           // console.log("Data---->", this.UserDetails_List1);
    //           // this.message = this.UserDetails_List1[0]['Message'];
    //           // this.DB_username = this.UserDetails_List1[0]['UserName'].toLowerCase();
    //           // this.DB_password = this.UserDetails_List1[0]['Password'];
    //           // this.User_FullName = this.UserDetails_List1[0]['TM_DisplayName']
    //           // this.IsPolicy = this.UserDetails_List1[0]['IsPolicy'];
    //           // // console.log("Policy Test---->",this.IsPolicy);
    //           // if (this.f.userid.value.toLowerCase() == this.DB_username && this.f.password.value == this.DB_password) {
    //           //   //console.log("Login successful");
    //           //   // alert("successful Login");
    //           //   localStorage.setItem('isLoggedIn', "true");
    //           //   this.InValidPassword = false;
    //           //   this.cd.detectChanges();
    //           //   this.EmpNo = data[0]['Emp_No'];
    //           //   localStorage.setItem('EmpNo', this.EmpNo);
    //           //   this.EmpCompNo = data[0]['Emp_Comp_No'].replace(/\s/g, "");
    //           //   this.SystemRole = data[0]['Emp_SystemRole'];
    //           //   this.OrganizationId = data[0]['OrganizationId'];
    //           //   sessionStorage.setItem('Emp_Email', data[0]['Emp_Email']);
    //           //   sessionStorage.setItem('Session_EmpNo', this.EmpNo);
    //           //   sessionStorage.setItem('EmpCompNo', this.EmpCompNo);
    //           //   // sessionStorage.setItem('SystemRole', this.SystemRole);
    //           //   localStorage.setItem("UserfullName", this.User_FullName);
    //           //   localStorage.setItem('_Currentuser', this.DB_username);
    //           //   localStorage.setItem('OrganizationId', this.OrganizationId);
    //           //   //debugger
    //           //   if (this.IsPolicy == 1) {
    //           //     this.router.navigate([this.dashboardUrl]);
    //           //     this.notifyService.showInfo(this.User_FullName + ' ' + ' ', 'Login By :');
    //           //     this.notifyService.showSuccess("Successfully", "Logged In");
    //           //     this.InValidPassword = false;
    //           //     this.cd.detectChanges();
    //           //   }
    //           //   else if (this.IsPolicy == 0) {
    //           //     this.router.navigate([this.policyUrl]);
    //           //     this.InValidPassword = false;
    //           //     this.cd.detectChanges();
    //           //   }
    //           //   //this.router.navigate([this.policyUrl]);
    //           //   // alert(this.returnUrl);
    //           //   // this.notifyService.showInfo(this.User_FullName + ' ' + ' ', 'Login By :');
    //           //   // this.notifyService.showSuccess("Successfully", "Logged In");
    //           // }
    //           // else {
    //           //   this.InValidPassword = true;
    //           //   console.log("Invalid Login");
    //           //   this.authService.logout();
    //           //   localStorage.removeItem('EmpNo');
    //           //   this.cd.detectChanges();
    //           //   // alert("Invalid");
    //           //   // this.message = "Please check your UserName and Password";
    //           // }
    //         });
    //   }
    // }
    login() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        else {
            // this.Sendlogin_Credentials();
            // debugger
            this.Obj_ILoginDTO.UserName = this.f.userid.value;
            this.Obj_ILoginDTO.Password = this.f.password.value;
            //alert("One");
            this.service.LoginCredentials(this.Obj_ILoginDTO)
                .subscribe((data) => {
                this.UserDetails_List = data;
                // console.log("Data---->", this.UserDetails_List);
                this.message = this.UserDetails_List[0]['Message'];
                this.DB_username = this.UserDetails_List[0]['UserName'].toLowerCase();
                this.DB_password = this.UserDetails_List[0]['Password'];
                this.User_FullName = this.UserDetails_List[0]['TM_DisplayName'];
                this.IsPolicy = this.UserDetails_List[0]['IsPolicy'];
                // console.log("Policy Test---->",this.IsPolicy);
                if (this.f.userid.value.toLowerCase() == this.DB_username && this.f.password.value == this.DB_password) {
                    //console.log("Login successful");
                    // alert("successful Login");
                    localStorage.setItem('isLoggedIn', "true");
                    this.InValidPassword = false;
                    this.cd.detectChanges();
                    this.EmpNo = data[0]['Emp_No'];
                    localStorage.setItem('EmpNo', this.EmpNo);
                    this.EmpCompNo = data[0]['Emp_Comp_No'].replace(/\s/g, "");
                    this.SystemRole = data[0]['Emp_SystemRole'];
                    this.OrganizationId = data[0]['OrganizationId'];
                    sessionStorage.setItem('Emp_Email', data[0]['Emp_Email']);
                    sessionStorage.setItem('Session_EmpNo', this.EmpNo);
                    sessionStorage.setItem('EmpCompNo', this.EmpCompNo);
                    // sessionStorage.setItem('SystemRole', this.SystemRole);
                    localStorage.setItem("UserfullName", this.User_FullName);
                    localStorage.setItem('_Currentuser', this.DB_username);
                    localStorage.setItem('OrganizationId', this.OrganizationId);
                    //debugger
                    if (this.IsPolicy == 1) {
                        this.router.navigate([this.dashboardUrl]);
                        this.notifyService.showInfo(this.User_FullName + ' ' + ' ', 'Login By :');
                        this.notifyService.showSuccess("Successfully", "Logged In");
                        this.InValidPassword = false;
                        this.cd.detectChanges();
                    }
                    else if (this.IsPolicy == 0) {
                        this.router.navigate([this.policyUrl]);
                        this.InValidPassword = false;
                        this.cd.detectChanges();
                    }
                    //this.router.navigate([this.policyUrl]);
                    // alert(this.returnUrl);
                    // this.notifyService.showInfo(this.User_FullName + ' ' + ' ', 'Login By :');
                    // this.notifyService.showSuccess("Successfully", "Logged In");
                }
                else {
                    this.InValidPassword = true;
                    console.log("Invalid Login");
                    this.authService.logout();
                    localStorage.removeItem('EmpNo');
                    this.cd.detectChanges();
                    // alert("Invalid");
                    // this.message = "Please check your UserName and Password";
                }
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_3__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_7__.LoadingBarService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 53, vars: 11, consts: [[1, "kt-grid", "kt-grid--ver", "kt-grid--root", "kt-page"], ["id", "kt_login", 1, "kt-grid", "kt-grid--hor", "kt-grid--root", "kt-login", "kt-login--v6", "kt-login--signin", "h-100"], [1, "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--desktop", "kt-grid--ver-desktop", "kt-grid--hor-tablet-and-mobile"], [1, "kt-grid__item", "kt-grid__item--fluid", "kt-grid__item--center", "kt-grid", "kt-grid--ver", "kt-login__content", 2, "background-image", "url(assets/images/login-banner.jpg)"], [1, "kt-login__section"], [1, "kt-login__block"], [1, "kt-login__desc"], [1, "kt-grid__item", "kt-grid__item--order-tablet-and-mobile-2", "kt-grid", "kt-grid--hor", "kt-login__aside", "p-0"], [1, "kt-login__wrapper"], [1, "kt-login__container"], [1, "kt-login__body", 2, "padding", "25px 30px", "border-radius", "5px"], [1, "kt-login__logo", "mb-4"], ["href", "#"], [1, "kt-login__signin"], [1, "kt-login__head"], [2, "font-size", "2rem", "color", "#67666e"], [1, "kt-login__form"], ["action", "", 1, "kt-form", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-4", 3, "ngClass"], ["type", "text", "placeholder", "UserName", "autocomplete", "off", "formControlName", "userid", 1, "form-control"], ["class", "help-block", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "form-group", "position-relative", 3, "ngClass"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", 3, "keypress"], [1, "showOrHide"], [1, "close-eye"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "aria-hidden", "true", "role", "img", "font-size", "20", "width", "1em", "height", "1em", "viewBox", "0 0 24 24", 1, "iconify", "iconify--mdi"], ["fill", "currentColor", "d", "M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"], [1, "open-eye"], ["fill", "currentColor", "d", "M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54L2 5.27M12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13Z"], ["class", "text-center error", "class", "text-danger", 4, "ngIf"], [1, "kt-login__actions"], ["id", "kt_login_signin_submit", "type", "submit", 1, "btn", "btn-primary", "kt-btn", "px-5", 2, "height", "38px"], [1, "kt-login__forgot"], [1, "kt-login__title"], ["action", "", 1, "kt-form"], [1, "form-group"], ["type", "text", "placeholder", "Email", "name", "email", "id", "kt_email", "autocomplete", "off", 1, "form-control"], ["id", "kt_login_forgot_submit", 1, "btn", "btn-brand", "btn-pill", "btn-elevate"], ["id", "kt_login_forgot_cancel", 1, "btn", "btn-outline-brand", "btn-pill"], [1, "help-block"], ["class", "text-info", 4, "ngIf"], [1, "text-info"], [1, "text-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 13)(15, "div", 14)(16, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Sign In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 16)(19, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_19_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, LoginComponent_div_22_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, LoginComponent_p_23_Template, 3, 0, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 22)(25, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function LoginComponent_Template_input_keypress_25_listener() { return ctx.OnKeyPress(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "a", 24)(27, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, LoginComponent_div_33_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, LoginComponent_p_34_Template, 3, 1, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 31)(36, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 33)(39, "div", 14)(40, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Forgotten Password ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Enter your email to reset your password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 16)(45, "form", 35)(46, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 31)(49, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.userid.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.userid.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.InValidUserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.message);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName], styles: ["@media only screen and (min-width: 1024px) {\r\n    .h-100[_ngcontent-%COMP%]{\r\n        height: 100vh !important;\r\n    }\r\n}\r\n\r\n#kt_login_signin_submit[_ngcontent-%COMP%] {\r\n    background-color: #5867dd;\r\n    border-color: #5867dd;\r\n    color: #fff;\r\n}\r\n\r\n.showOrHide[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    right: 12px;\r\n    top: 12px;\r\n    z-index: 1;\r\n    cursor: pointer;\r\n}\r\n\r\n.close-eye[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n\r\n.showp[_ngcontent-%COMP%]   .open-eye[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n\r\n.showp[_ngcontent-%COMP%]   .close-eye[_ngcontent-%COMP%]{\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5oLTEwMHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNrdF9sb2dpbl9zaWduaW5fc3VibWl0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM1ODY3ZGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uc2hvd09ySGlkZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgdG9wOiAxMnB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2xvc2UtZXlle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNob3dwIC5vcGVuLWV5ZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNob3dwIC5jbG9zZS1leWV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"] });


/***/ }),

/***/ 83187:
/*!******************************************************!*\
  !*** ./src/app/_LayoutDefault/login/login.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 30417);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 18617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=187.js.map