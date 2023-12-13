"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([[202],{

/***/ 97420:
/*!*************************************************!*\
  !*** ./src/app/policy/policy-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyRoutingModule": () => (/* binding */ PolicyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/auth.guard */ 95107);
/* harmony import */ var _policy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policy.component */ 32782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    { path: '', component: _policy_component__WEBPACK_IMPORTED_MODULE_1__.PolicyComponent, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] }
];
class PolicyRoutingModule {
}
PolicyRoutingModule.ɵfac = function PolicyRoutingModule_Factory(t) { return new (t || PolicyRoutingModule)(); };
PolicyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PolicyRoutingModule });
PolicyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PolicyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 32782:
/*!********************************************!*\
  !*** ./src/app/policy/policy.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyComponent": () => (/* binding */ PolicyComponent)
/* harmony export */ });
/* harmony import */ var _Models_policy_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_Models/policy-dto */ 66402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Services/auth.service */ 83827);
/* harmony import */ var src_app_Services_policy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/policy.service */ 81196);
/* harmony import */ var _Services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_Services/notification.service */ 32278);






class PolicyComponent {
    constructor(router, authService, PolicyService, notifyService, activatedRoute) {
        this.router = router;
        this.authService = authService;
        this.PolicyService = PolicyService;
        this.notifyService = notifyService;
        this.activatedRoute = activatedRoute;
        // private currentUserSubject: BehaviorSubject<UserDetailsDTO>;
        //public currentUserId: Observable<UserDetailsDTO>;
        this.displayStyle = "none";
        this.dashboardUrl = 'backend/dashboard';
        this.loginUrl = 'login';
        this.ObjPolicyDTO = new _Models_policy_dto__WEBPACK_IMPORTED_MODULE_0__.PolicyDTO;
        this.Currentuser = localStorage.getItem("UserfullName");
        this.currentuserId = localStorage.getItem('EmpNo');
    }
    ngOnInit() {
        this.val = this.activatedRoute.snapshot.params.val;
        this.PolicyService.GetPolicyDetails(this.currentuserId)
            .subscribe(data => {
            this.PolicyId = data[0]['PolicyId'];
            this.PolicyHeader = data[0]['PolicyHeader'];
            this.PolicyContent = data[0]['PolicyContent'];
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
PolicyComponent.ɵfac = function PolicyComponent_Factory(t) { return new (t || PolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Services_policy_service__WEBPACK_IMPORTED_MODULE_2__.PolicyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_Services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
PolicyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PolicyComponent, selectors: [["app-policy"]], decls: 21, vars: 4, consts: [[1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", 2, "background-color", "#e6e6f8"], [1, "modal-title", "mb-0"], ["src", "assets/icons/Artboard Copy.png"], [1, "modal-body"], [3, "innerHTML"], [1, "modal-footer", 2, "background-color", "#e6e6f8", 3, "hidden"], [1, "row"], [1, "col-md-10"], [1, "col-md-2"], ["type", "button", 1, "btn", "btn-danger", 2, "color", "white", 3, "click"], ["type", "button", 1, "btn", "btn-success", 2, "color", "white", 3, "click"]], template: function PolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "I acknowledge that I have read, understand, committed, and agree to abide by The (EPS) Policy stated above and hence any violation of this policy is unethical and may constitute a criminal offense and may grounds for disciplinary action up to termination.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 10)(16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PolicyComponent_Template_button_click_16_listener() { return ctx.Agreement(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "I Disagree");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PolicyComponent_Template_button_click_19_listener() { return ctx.Agreement(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "I Agree");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.PolicyHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx.PolicyContent, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.PolicyContent, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.val);
    } }, styles: ["@media (min-width: 576px) {\r\n    .modal-dialog[_ngcontent-%COMP%] {\r\n        width: 100vw;\r\n        max-width: 100%;\r\n        margin: 0px;\r\n    }\r\n    .modal-content[_ngcontent-%COMP%] {\r\n        height: 100vh;\r\n    }\r\n    .modal-body[_ngcontent-%COMP%] {\r\n        height: calc(100vh - 130px);\r\n        overflow-y: auto;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGljeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLFdBQVc7SUFDZjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksMkJBQTJCO1FBQzNCLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InBvbGljeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB9XHJcbiAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTMwcHgpO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 14202:
/*!*****************************************!*\
  !*** ./src/app/policy/policy.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyModule": () => (/* binding */ PolicyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _policy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policy-routing.module */ 97420);
/* harmony import */ var _policy_policy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../policy/policy.component */ 32782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class PolicyModule {
}
PolicyModule.ɵfac = function PolicyModule_Factory(t) { return new (t || PolicyModule)(); };
PolicyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PolicyModule });
PolicyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _policy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PolicyRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PolicyModule, { declarations: [_policy_policy_component__WEBPACK_IMPORTED_MODULE_1__.PolicyComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _policy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PolicyRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=202.js.map