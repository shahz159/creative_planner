"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([[1784],{

/***/ 44926:
/*!***************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-info/focus-on-click.directive.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusOnClickDirective": () => (/* binding */ FocusOnClickDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


class FocusOnClickDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    onClick(btn) {
        // console.log('button', btn, 'number of clicks:');
        const input = this.elementRef.nativeElement.querySelector('.filter-textbox > input');
        if (input) {
            input.focus();
        }
    }
}
FocusOnClickDirective.ɵfac = function FocusOnClickDirective_Factory(t) { return new (t || FocusOnClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
FocusOnClickDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FocusOnClickDirective, selectors: [["", "appFocusOnClick", ""]], hostBindings: function FocusOnClickDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FocusOnClickDirective_click_HostBindingHandler($event) { return ctx.onClick($event.target); });
    } } });


/***/ }),

/***/ 51029:
/*!******************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-info/project-info-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectInfoRoutingModule": () => (/* binding */ ProjectInfoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _project_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-info.component */ 84697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _project_info_component__WEBPACK_IMPORTED_MODULE_0__.ProjectInfoComponent }];
class ProjectInfoRoutingModule {
}
ProjectInfoRoutingModule.ɵfac = function ProjectInfoRoutingModule_Factory(t) { return new (t || ProjectInfoRoutingModule)(); };
ProjectInfoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProjectInfoRoutingModule });
ProjectInfoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProjectInfoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 84697:
/*!*************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-info/project-info.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectInfoComponent": () => (/* binding */ ProjectInfoComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment/locale/pt-br */ 74884);
/* harmony import */ var moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var src_app_Models_portfolio_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Models/portfolio-dto */ 60198);
/* harmony import */ var src_app_Shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/components/confirm-dialog/confirm-dialog.component */ 49785);
/* harmony import */ var src_app_Models_approval_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Models/approval-dto */ 62424);
/* harmony import */ var src_app_Models_project_details_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_Models/project-details-dto */ 46047);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_Services/link.service */ 33529);
/* harmony import */ var src_app_Services_approvals_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_Services/approvals.service */ 18810);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ 77585);
/* harmony import */ var _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../projects-summary/projects-summary.component */ 80880);
/* harmony import */ var _portfolio_projects_portfolio_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../portfolio-projects/portfolio-projects.component */ 70476);
/* harmony import */ var _view_dashboard_projects_view_dashboard_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../view-dashboard-projects/view-dashboard-projects.component */ 27668);
/* harmony import */ var _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../to-do-projects/to-do-projects.component */ 80872);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../notification/notification.component */ 2352);
/* harmony import */ var _projects_add_projects_add_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../projects-add/projects-add.component */ 12669);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_Services_parameter_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/_Services/parameter.service */ 95636);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);

//import { CalendarOptions } from '@fullcalendar/angular';


























function ProjectInfoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](4, "g", 8)(5, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "g", 10)(7, "g", 11)(8, "g", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](9, "rect", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "g", 14)(11, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](12, "rect", 15)(13, "rect", 16)(14, "rect", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](15, " Project Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](16, "div", 18)(17, "div", 19)(18, "div", 20)(19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](21, "div", 21)(22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](24, "div", 23)(25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r4.Project_Name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r4.Project_Type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](item_r4.Project_Description);
} }
function ProjectInfoComponent_div_2_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r5.ReportType, " ");
} }
function ProjectInfoComponent_div_2_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " Development ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_2_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind2"](2, 1, item_r5.Project_Cost, "SAR "), " ");
} }
function ProjectInfoComponent_div_2_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " SAR 00.00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 24)(1, "div", 19)(2, "div", 5)(3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](5, "g", 8)(6, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](7, "g", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](8, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](9, " Project Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProjectInfoComponent_div_2_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r12.moreDetails()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](12, " More info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](13, "div", 29)(14, "div", 30)(15, "div", 31)(16, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](17, "svg", 33)(18, "g", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](19, "path", 35)(20, "path", 36)(21, "path", 37)(22, "path", 38)(23, "path", 39)(24, "path", 40)(25, "path", 41)(26, "path", 42)(27, "path", 43)(28, "path", 44)(29, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](30, " Owner ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](31, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](33, "div", 30)(34, "div", 31)(35, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](36, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](37, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](38, " Responsible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](39, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](41, "div", 30)(42, "div", 31)(43, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](44, "svg", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](45, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](46, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](47, ProjectInfoComponent_div_2_div_47_Template, 2, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](48, ProjectInfoComponent_div_2_div_48_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](49, "div", 30)(50, "div", 31)(51, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](52, "svg", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](53, "path", 54)(54, "path", 55)(55, "path", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](56, " Cost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](57, ProjectInfoComponent_div_2_div_57_Template, 3, 4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](58, ProjectInfoComponent_div_2_div_58_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](59, "div", 30)(60, "div", 31)(61, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](62, "svg", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](63, "path", 59)(64, "path", 60)(65, "path", 61)(66, "path", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](67, " Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](68, "div", 63)(69, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](70, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r5.Owner, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r5.Responsible, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r5.ReportType);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !item_r5.ReportType);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r5.Project_Cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !item_r5.Project_Cost);
} }
function ProjectInfoComponent_div_3_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"](" ", item_r14.Status, " ", item_r14.Delaydays, " days ");
} }
function ProjectInfoComponent_div_3_div_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](item_r14.Status);
} }
function ProjectInfoComponent_div_3_div_21_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, "Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) { return { "UnderApproval": a0, "Inprocess": a1, "NewProjectRejected": a2, "Done": a3, "EnactiveUnderApproval": a4, "CompletionUnderApproval": a5, "Delay": a6, "DeadlineExtend": a7, "Hold": a8 }; };
function ProjectInfoComponent_div_3_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, ProjectInfoComponent_div_3_div_21_ng_container_1_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, ProjectInfoComponent_div_3_div_21_ng_container_2_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunctionV"](3, _c0, [item_r14.Status == "Under Approval", item_r14.Status == "InProcess", item_r14.Status == "New Project Rejected", item_r14.Status == "ToDo Achieved" || item_r14.Status == "ToDo Completed" || item_r14.Status == "Completed", item_r14.Status == "Enactive Under Approval", item_r14.Status == "Forward Under Approval" || item_r14.Status == "Completion Under Approval", item_r14.Status == "Cancellation Under Approval" || item_r14.Status == "Cancelled", item_r14.Status == "Deadline Extend Under Approval", item_r14.Status == "Project Hold"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r14.Status != "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r14.Status == "Project Hold");
} }
function ProjectInfoComponent_div_3_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind2"](2, 1, item_r14.EndDate, "dd-MM-yyyy"), " ");
} }
function ProjectInfoComponent_div_3_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r14.Submissiontype, " ");
} }
function ProjectInfoComponent_div_3_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", ctx_r19.Difference_In_Days, " days ");
} }
function ProjectInfoComponent_div_3_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " Continuos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_3_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", ctx_r21.TotalWork_Hours, " hrs ");
} }
function ProjectInfoComponent_div_3_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r14.StandardAllocatedHours, " ");
} }
const _c1 = function (a0) { return { "width": a0 }; };
function ProjectInfoComponent_div_3_div_46_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 99);
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c1, ctx_r40.Under_Approval / ctx_r40.total * 100 + "%"));
} }
function ProjectInfoComponent_div_3_div_46_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 100);
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c1, ctx_r41.inprogress / ctx_r41.total * 100 + "%"));
} }
function ProjectInfoComponent_div_3_div_46_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 101);
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c1, ctx_r42.delay / ctx_r42.total * 100 + "%"));
} }
function ProjectInfoComponent_div_3_div_46_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 102);
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c1, ctx_r43.Rejected / ctx_r43.total * 100 + "%"));
} }
function ProjectInfoComponent_div_3_div_46_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 103);
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c1, ctx_r44.Completion_Under / ctx_r44.total * 100 + "%"));
} }
function ProjectInfoComponent_div_3_div_46_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 104);
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c1, ctx_r45.Forward_Under / ctx_r45.total * 100 + "%"));
} }
function ProjectInfoComponent_div_3_div_46_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "div", 105);
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](1, _c1, ctx_r46.completed / ctx_r46.total * 100 + "%"));
} }
function ProjectInfoComponent_div_3_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 90)(1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, ProjectInfoComponent_div_3_div_46_div_2_Template, 1, 3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, ProjectInfoComponent_div_3_div_46_div_3_Template, 1, 3, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, ProjectInfoComponent_div_3_div_46_div_4_Template, 1, 3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](5, ProjectInfoComponent_div_3_div_46_div_5_Template, 1, 3, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](6, ProjectInfoComponent_div_3_div_46_div_6_Template, 1, 3, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, ProjectInfoComponent_div_3_div_46_div_7_Template, 1, 3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](8, ProjectInfoComponent_div_3_div_46_div_8_Template, 1, 3, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r23.Under_Approval > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r23.inprogress > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r23.delay > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r23.Rejected > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r23.Completion_Under > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r23.Forward_Under > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r23.completed > 0);
} }
function ProjectInfoComponent_div_3_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 106)(1, "div", 107)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4, " Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r24.Under_Approval);
} }
function ProjectInfoComponent_div_3_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 106)(1, "div", 107)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4, " in Progress ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r25.inprogress);
} }
function ProjectInfoComponent_div_3_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 108)(1, "div", 107)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4, " Delay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r26.delay);
} }
function ProjectInfoComponent_div_3_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 108)(1, "div", 107)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4, " New Project Rejected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r27.Rejected);
} }
function ProjectInfoComponent_div_3_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 106)(1, "div", 107)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4, " Completion Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r28.Completion_Under);
} }
function ProjectInfoComponent_div_3_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 106)(1, "div", 107)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4, " Forward Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r29.Forward_Under);
} }
function ProjectInfoComponent_div_3_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 108)(1, "div", 107)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4, " Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r30.completed);
} }
function ProjectInfoComponent_div_3_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 109)(1, "div", 110)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", ctx_r31.completed, "/", ctx_r31.total, "");
} }
function ProjectInfoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 24)(1, "div", 19)(2, "div", 5)(3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "svg", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](5, "g", 8)(6, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](7, "g", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](8, "defs", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "g", 68)(10, "g", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](11, "path", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](12, "g", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](13, "path", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](14, "g", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](15, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](16, "g", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](17, "path", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](18, " Project States ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](19, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](20, ProjectInfoComponent_div_3_div_20_Template, 2, 2, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](21, ProjectInfoComponent_div_3_div_21_Template, 3, 13, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](22, "div", 79)(23, "div", 80)(24, "div", 81)(25, "div", 30)(26, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](27, " Start date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](28, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](30, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](31, "div", 30)(32, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](33, " End date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](34, ProjectInfoComponent_div_3_div_34_Template, 3, 4, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](35, ProjectInfoComponent_div_3_div_35_Template, 2, 1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](36, "div", 30)(37, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](38, " Duration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](39, ProjectInfoComponent_div_3_div_39_Template, 2, 1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](40, ProjectInfoComponent_div_3_div_40_Template, 2, 0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](41, "div", 30)(42, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](43, " Allocated ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](44, ProjectInfoComponent_div_3_div_44_Template, 2, 1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](45, ProjectInfoComponent_div_3_div_45_Template, 2, 1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](46, ProjectInfoComponent_div_3_div_46_Template, 9, 7, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](47, ProjectInfoComponent_div_3_div_47_Template, 5, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](48, ProjectInfoComponent_div_3_div_48_Template, 5, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](49, ProjectInfoComponent_div_3_div_49_Template, 5, 1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](50, ProjectInfoComponent_div_3_div_50_Template, 5, 1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](51, ProjectInfoComponent_div_3_div_51_Template, 5, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](52, ProjectInfoComponent_div_3_div_52_Template, 5, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](53, ProjectInfoComponent_div_3_div_53_Template, 5, 1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](54, ProjectInfoComponent_div_3_div_54_Template, 4, 2, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r14.Status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r14.Status != "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind2"](30, 18, item_r14.StartDate, "dd-MM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r2.Project_type == "Core Tasks" || ctx_r2.Project_type == "To do List" || ctx_r2.Project_type == "Secondary Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r2.Project_type == "Routine Tasks" || ctx_r2.Project_type == "Standard Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r2.Project_type == "Core Tasks" || ctx_r2.Project_type == "To do List" || ctx_r2.Project_type == "Secondary Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r2.Project_type == "Routine Tasks" || ctx_r2.Project_type == "Standard Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r2.Project_type == "Core Tasks" || ctx_r2.Project_type == "To do List" || ctx_r2.Project_type == "Secondary Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r2.Project_type == "Routine Tasks" || ctx_r2.Project_type == "Standard Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r2.total > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r2.Under_Approval > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r2.inprogress > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r2.delay > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r2.Rejected > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r2.Completion_Under > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r2.Forward_Under > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r2.completed > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r2.total > 0);
} }
function ProjectInfoComponent_ng_container_4_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 138)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "Forward from");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r47.forwardfrom);
} }
function ProjectInfoComponent_ng_container_4_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 138)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "Forward to");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r48.forwardto);
} }
function ProjectInfoComponent_ng_container_4_div_69_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 145)(1, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProjectInfoComponent_ng_container_4_div_69_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r54.approvalClick("CONDITIONAL")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "Conditional Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", ctx_r49.Accept_Active == true ? "Kt-Approval-btns Btn_Conditional_Accept active" : "Kt-Approval-btns Btn_Conditional_Accept");
} }
function ProjectInfoComponent_ng_container_4_div_74_ng_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "ng-option", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("value", item_r58.TypeID);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r58.RejectType, " ");
} }
function ProjectInfoComponent_ng_container_4_div_74_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " Reject Type* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "ng-select", 158, 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_ng_container_4_div_74_Template_ng_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r59.rejectType = $event); })("change", function ProjectInfoComponent_ng_container_4_div_74_Template_ng_select_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r60); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r61.rejectApproval()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, ProjectInfoComponent_ng_container_4_div_74_ng_option_4_Template, 2, 2, "ng-option", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngModel", ctx_r50.rejectType);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r50.reject_list);
} }
function ProjectInfoComponent_ng_container_4_div_75_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 169)(1, "h6", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2, "Existing Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} }
function ProjectInfoComponent_ng_container_4_div_75_div_1_div_4_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProjectInfoComponent_ng_container_4_div_75_div_1_div_4_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r71); const item_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r69.clickonselect(item_r65.Req_Coments)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "path", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} }
function ProjectInfoComponent_ng_container_4_div_75_div_1_div_4_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProjectInfoComponent_ng_container_4_div_75_div_1_div_4_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); const item_r65 = ctx_r73.$implicit; const i_r66 = ctx_r73.index; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r72.clickondeselect(item_r65.Req_Coments, i_r66)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "svg", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "path", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} }
function ProjectInfoComponent_ng_container_4_div_75_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 171)(1, "h6", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, ProjectInfoComponent_ng_container_4_div_75_div_1_div_4_span_4_Template, 3, 0, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](5, ProjectInfoComponent_ng_container_4_div_75_div_1_div_4_span_5_Template, 3, 0, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r65 = ctx.$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", ctx_r64.exist_comment.indexOf(item_r65.Req_Coments) != -1 ? "text-info" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r65.Req_Coments, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r64.exist_comment.indexOf(item_r65.Req_Coments) == -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r64.exist_comment.indexOf(item_r65.Req_Coments) != -1);
} }
function ProjectInfoComponent_ng_container_4_div_75_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 164)(1, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, ProjectInfoComponent_ng_container_4_div_75_div_1_div_2_Template, 3, 0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, ProjectInfoComponent_ng_container_4_div_75_div_1_div_4_Template, 6, 4, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r62.rejectlength > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r62.rejectcommentsList);
} }
function ProjectInfoComponent_ng_container_4_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, ProjectInfoComponent_ng_container_4_div_75_div_1_Template, 5, 2, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r51.rejectType && ctx_r51.selectedType == "3" && ctx_r51.rejectlength > 0);
} }
function ProjectInfoComponent_ng_container_4_ng_container_76_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " Enter Comments* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "textarea", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_ng_container_4_ng_container_76_Template_textarea_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r75.comments = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngModel", ctx_r52.comments);
} }
function ProjectInfoComponent_ng_container_4_ng_container_77_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, " Enter Comments* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "textarea", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_ng_container_4_ng_container_77_Template_textarea_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r77.comments = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngModel", ctx_r53.comments);
} }
const _c2 = function (a0, a1, a2, a3) { return { "UnderApproval": a0, "CompletionUnderApproval": a1, "Delay": a2, "EnactiveUnderApproval": a3 }; };
function ProjectInfoComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "div", 111)(2, "div", 19)(3, "div", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "svg", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](6, "g", 8)(7, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](8, "g", 10)(9, "g", 113)(10, "g", 114)(11, "g", 115)(12, "g", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](13, "path", 117)(14, "polyline", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](15, "g", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](16, "path", 120)(17, "polyline", 121)(18, "circle", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](19, "g", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](20, "line", 124)(21, "line", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](22, "g", 126)(23, "g", 127)(24, "g", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](25, "path", 129)(26, "polyline", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](27, "g", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](28, "path", 132)(29, "polyline", 133)(30, "circle", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](31, "g", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](32, "line", 136)(33, "line", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](34, " Request Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](35, "div", 21)(36, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](38, "div", 29)(39, "div", 138)(40, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](41, "Request Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](42, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](44, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](45, "div", 140)(46, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](47, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](48, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](50, "div", 29)(51, "div", 138)(52, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](53, "Requested by");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](54, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](56, ProjectInfoComponent_ng_container_4_div_56_Template, 5, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](57, ProjectInfoComponent_ng_container_4_div_57_Template, 5, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](58, "div", 111)(59, "div", 143)(60, "div", 144)(61, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](62, "Approval*");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](63, "div", 145)(64, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProjectInfoComponent_ng_container_4_Template_button_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r79.submitApproval1()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](65, "Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](66, "div", 147)(67, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProjectInfoComponent_ng_container_4_Template_button_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r80); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r81.approvalClick("EDIT")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](68, "Edit & Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](69, ProjectInfoComponent_ng_container_4_div_69_Template, 3, 1, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](70, "div", 145)(71, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProjectInfoComponent_ng_container_4_Template_button_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r80); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r82.approvalClick("REJECT")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](72, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](73, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](74, ProjectInfoComponent_ng_container_4_div_74_Template, 5, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](75, ProjectInfoComponent_ng_container_4_div_75_Template, 2, 1, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](76, ProjectInfoComponent_ng_container_4_ng_container_76_Template, 3, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](77, ProjectInfoComponent_ng_container_4_ng_container_77_Template, 3, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](78, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](79, "div", 152)(80, "div", 153)(81, "div", 154)(82, "div", 155)(83, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProjectInfoComponent_ng_container_4_Template_button_click_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r80); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r83.close_info_Slide()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](84, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](85, "span")(86, "button", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProjectInfoComponent_ng_container_4_Template_button_click_86_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r80); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r84.submitApproval()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](87, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction4"](22, _c2, ctx_r3.requestType == "New Project", ctx_r3.requestType == "Project Forward" || ctx_r3.requestType == "Task Complete" || ctx_r3.requestType == "Project Complete" || ctx_r3.requestType == "ToDo Achieved" || ctx_r3.requestType == "Revert Back", ctx_r3.requestType == "Project Cancel" || ctx_r3.requestType == "Not Achieved", ctx_r3.requestType == "Standardtask Enactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", ctx_r3.requestType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind2"](44, 19, ctx_r3.requestDate, "dd-MM-yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpropertyInterpolate"]("title", ctx_r3.requestComments);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r3.requestComments);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r3.Submitted_By);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r3.requestType == "Project Forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r3.requestType == "Project Forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", ctx_r3.active == true ? "Kt-Approval-btns Btn_Accpet active " : "Kt-Approval-btns Btn_Accpet");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", ctx_r3.Edit_active == true ? "Kt-Approval-btns Btn_Edit_Accept active" : "Kt-Approval-btns Btn_Edit_Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r3.requestType == "Project Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", ctx_r3.Reject_active == true ? "Kt-Approval-btns Btn_Reject active" : "Kt-Approval-btns Btn_Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("hidden", !ctx_r3.isTextAreaVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r3.isRejectOptionsVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r3.isRejectOptionsVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r3.rejectType);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r3.isRejectOptionsVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("hidden", !ctx_r3.isTextAreaVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("disabled", !ctx_r3.comments || !ctx_r3.selectedType);
} }
class ProjectInfoComponent {
    constructor(service, _LinkService, approvalservice, notifyService, router, BsService, _projectSummary, _portfolioprojects, _viewdashboard, _toDo, _notification, _projectsAdd, datepipe, dialog, ShareParameter_Service, route, elementRef) {
        this.service = service;
        this._LinkService = _LinkService;
        this.approvalservice = approvalservice;
        this.notifyService = notifyService;
        this.router = router;
        this.BsService = BsService;
        this._projectSummary = _projectSummary;
        this._portfolioprojects = _portfolioprojects;
        this._viewdashboard = _viewdashboard;
        this._toDo = _toDo;
        this._notification = _notification;
        this._projectsAdd = _projectsAdd;
        this.datepipe = datepipe;
        this.dialog = dialog;
        this.ShareParameter_Service = ShareParameter_Service;
        this.route = route;
        this.elementRef = elementRef;
        this._LinkSideBar = true;
        this._LinkSideBar1 = true;
        this._openInfoSideBar = false;
        this.approvalObj = new src_app_Models_approval_dto__WEBPACK_IMPORTED_MODULE_5__.ApprovalDTO();
        this.comments = "";
        this.Mode = "UnderApproval";
        this.EndDate1 = new Date();
        this.minhold = new Date();
        this.maxhold = new Date();
        // fun_LoadProjectDetails() {
        //   // alert(this.Summarytype);
        //   this.service.SubTaskDetailsService(this.projectCode).subscribe(
        //     (data) => {
        //       console.log("project Details---->", data);
        //       if (data != null && data != undefined) {
        //         this.ProjectInfo_List = JSON.parse(data[0]['ProjectInfo']);
        //         this.Employee_List = JSON.parse(data[0]['EmployeeDropdown']);
        //         // console.log(this.Employee_List,'EMPList');
        //         this._portfoliolist = JSON.parse(data[0]['Portfolio_json']);
        //         // console.log(this.ProjectInfo_List,"pt");
        //         // this.ifcategoryZero = this.ProjectInfo_List['CompleteReportType'];
        //         // if (Object.keys(data).length > 0) {
        //         this.Subtask_List = JSON.parse(data[0]['projectinfo_SubtaskDetails']);
        //         this.CompletedList = JSON.parse(data[0]['Completed_SubtaskDetails']);
        //         this.AssigntaskList = JSON.parse(data[0]['AssigntaskDetails_Json']);
        //         // // this.CompletedList.push(this.Subtask_List);
        //         // console.log("subtask Details--->",this.Subtask_List);
        //         // console.log("Assign Details--->",this.AssigntaskList);
        //         this.totalSubtaskHours = (data[0]['SubtaskHours']);
        //         this.TotalWork_Hours = data[0]['TotalHours'];
        //         this.ProjectPercentage = data[0]['ProjectPercentage'] + '%';
        //         this.ProjectStatus = data[0]['ProjectStatus'];
        //         this._MainProjectStatus = data[0]['MainProjectStatus'];
        //         console.log("ProjectDetails-->", this.ProjectInfo_List);
        //         this.date1 = this.ProjectInfo_List[0]['DPG'];
        //         this.date2 = this.ProjectInfo_List[0]['DeadLine'];
        //         this.Project_Cost= this.ProjectInfo_List[0]['Project_Cost'];
        //         this.EndDate1 = this.date2;
        //         this.Pid = this.ProjectInfo_List[0]['id'];
        //         this._MasterCode = this.ProjectInfo_List[0]['Project_Code'];
        //         this._ProjectName = this.ProjectInfo_List[0]['Project_Name'];
        //         this.Proj_Desc = this.ProjectInfo_List[0]['Project_Description'];
        //         this.Comp_No = this.ProjectInfo_List[0]['Emp_Comp_No'];
        //         this.Project_Owner = this.ProjectInfo_List[0]['Project_Owner'];
        //         this.EmpNo_Own = this.ProjectInfo_List[0]['OwnerEmpNo'];
        //         this.EmpNo_Res = this.ProjectInfo_List[0]['Responsible'];
        //         this.EmpNo_Autho = this.ProjectInfo_List[0]['Authority'];
        //         // alert(this.EmpNo_Own);
        //         //console.log("Date In ----->", this.date1, this.date2)
        //         this.Project_Responsible = this.ProjectInfo_List[0]['Team_Res'];
        //         // Date Diff In Days...
        //         this.date1 = moment(this.date1);
        //         this.date2 = moment(this.date2);
        //         this.Difference_In_Days = Math.abs(this.date1.diff(this.date2, 'days'));
        //         this.subtaskNotFoundMsg = "";
        //         this._subtaskDiv = false;
        //         // For  More Details Component...
        //         this.MoreDetailsList = [
        //           { ProjectCode: this.ProjectInfo_List[0]['Project_Code'] },
        //           { ProjectName: this.ProjectInfo_List[0]['Project_Name'] },
        //           { Description: this.ProjectInfo_List[0]['Project_Description'] },
        //           { StartDate: this.ProjectInfo_List[0]['DPG'] },
        //           { EndDate: this.ProjectInfo_List[0]['DeadLine'] },
        //           { Cost: this.ProjectInfo_List[0]['Project_Cost'] },
        //           { Client: this.ProjectInfo_List[0]['Client_Name'] },
        //           { Owner: this.ProjectInfo_List[0]['Project_Owner'] },
        //           { Responsible: this.ProjectInfo_List[0]['Team_Res'] },
        //           { Authority: this.ProjectInfo_List[0]['Team_Autho'] },
        //           { Coordinator: this.ProjectInfo_List[0]['Team_Coor'] },
        //           { Informer: this.ProjectInfo_List[0]['Team_Informer'] },
        //           { Support: this.ProjectInfo_List[0]['Team_Support'] },
        //           { ProjectType: this.ProjectInfo_List[0]['Project_Block'] },
        //           { Authorty_EmpNo: this.ProjectInfo_List[0]['Authority'] },
        //           { Responisble_EmpNo: this.ProjectInfo_List[0]['Responsible'] },
        //           { Category: this.ProjectInfo_List[0]['ReportType'] },
        //           { Owner_EmpNo: this.ProjectInfo_List[0]['OwnerEmpNo'] },
        //         ]
        //         let List_string: any = JSON.stringify(this.MoreDetailsList);
        //         localStorage.setItem("moreDetails", List_string);
        //         const fullName = this.Project_Responsible.split(' ');
        //         this.initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
        //         this.initials = this.initials.toUpperCase();
        //       }
        //       else {
        //         this._subtaskDiv = true;
        //         this.subtaskNotFoundMsg = "No Subtask found";
        //       }
        //       if ((this._portfoliolist.length == 1) && (this._portfoliolist[0]['Portfolio_Name'] == '')) {
        //         this._portfoliolist = [];
        //         this.noPort = "No portfolios linked"
        //       }
        //       else {
        //         this.noPort = "";
        //         // console.log(this._portfoliolist,this.Pid, this._MasterCode,this._ProjectName,this.Current_user_ID,"portfolio list");
        //       }
        //     });
        //   this._OpenMemosInfo(this.projectCode);
        // }
        this.total = 0;
        this.completed = 0;
        this.delay = 0;
        this.inprogress = 0;
        this.Rejected = 0;
        this.Completion_Under = 0;
        this.Forward_Under = 0;
        this.Under_Approval = 0;
        this.isExpanded = false;
        this.dropdownSettings_Memo = {};
        this.dropdownSettings_Portfolio = {};
        this._raciDetails = true;
        this._modelProjAlloc = 0;
        this.exist_comment = [];
        this.noRejectType = false;
        this.isTextAreaVisible = false;
        this.isRejectOptionsVisible = false;
        this.active = false;
        this.Edit_active = false;
        this.Accept_Active = false;
        this.Reject_active = false;
        this.pro_act = true;
        this.previouscoments = false;
        this.singleapporval_json = [];
        //Transfer Project
        this.selectedEmpNo = null;
        this.objPortfolioDto = new src_app_Models_portfolio_dto__WEBPACK_IMPORTED_MODULE_3__.PortfolioDTO();
        this.objProjectDto = new src_app_Models_project_details_dto__WEBPACK_IMPORTED_MODULE_6__.ProjectDetailsDTO();
        this.BsService.bs_SummaryType.subscribe(t => {
            this.Summarytype = t;
        });
    }
    /*
      routing Url id's for different components
        URL_ID     Component
          1       Projects Summary
          2       Portfolio Projects
          3       View dashboard Projects
          4       Projects Add to Portfolio
          5       ToDo Projects
          6       Notifications
          
    */
    ngOnInit() {
        this.Current_user_ID = localStorage.getItem('EmpNo');
        this._Urlid = this.route.snapshot.params['id'];
        // alert(this._Urlid);
        this.route.paramMap.subscribe(params => {
            var Pcode = params.get('projectcode');
            this.projectCode = Pcode;
            this.getusername();
            this.getapprovalStats();
            this.LoadProjectDetails();
            // this.getdeadlinecount();
            // this.getProjectHoldDate();
            // this.getapproval_actiondetails();
        });
        this.EndDate1.setDate(this.EndDate1.getDate() + 1);
        this.minhold.setDate(this.minhold.getDate() + 1);
        this.maxhold.setDate(this.minhold.getDate() + 90);
        //   $('.date-drop').on('hide.bs.dropdown', function (event) {
        //     var tigger = $(".dropdown-menu");
        //       if( tigger !== event.target && !tigger.has(event.target).length){
        //            event.preventDefault();
        //       } 
        // });
    }
    getusername() {
        this.service._GetUserName(this.Current_user_ID).subscribe(data => {
            this._fullname = data['Emp_First_Name'];
        });
    }
    scrldwn() {
        $('#mysideInfobar').animate({ scrollTop: $(document).height() + $('#mysideInfobar').height() });
    }
    LoadProjectDetails() {
        this.service.NewSubTaskDetailsService(this.projectCode).subscribe((data) => {
            console.log(data, "data");
            if (data != null && data != undefined) {
                this.ProjectNameJson = JSON.parse(data[0]['ProjectName_Json']);
                this.Project_type = this.ProjectNameJson[0]['Project_Type'];
                this.ProjectInfoJson = JSON.parse(data[0]['ProjectInfo_Json']);
                this.ProjectStatesJson = JSON.parse(data[0]['ProjectStates_Json']);
                if (this.Project_type != 'Routine Tasks' && this.Project_type != 'Standard Tasks' && this.Project_type != 'To do List' && this.ProjectStatesJson[0]['action_json'] != undefined) {
                    this.Action_countJson = JSON.parse(this.ProjectStatesJson[0]['action_json']);
                    this.total = this.Action_countJson.reduce((sum, item) => sum + item.count, 0);
                    this.Action_countJson.forEach((item) => {
                        if (item.Status.trim() === "Completed") {
                            this.completed = item.count;
                        }
                        if (item.Status.trim() === 'Delay') {
                            this.delay = item.count;
                        }
                        if (item.Status.trim() === 'InProcess') {
                            this.inprogress = item.count;
                        }
                        if (item.Status.trim() === 'New Project Rejected') {
                            this.Rejected = item.count;
                        }
                        if (item.Status.trim() === 'Completion Under Approval') {
                            this.Completion_Under = item.count;
                        }
                        if (item.Status.trim() === 'Forward Under Approval') {
                            this.Forward_Under = item.count;
                        }
                        if (item.Status.trim() === 'Under Approval') {
                            this.Under_Approval = item.count;
                        }
                    });
                }
                this.ProjectStatesJson = JSON.parse(data[0]['ProjectStates_Json']);
                // console.log(this.ProjectInfoList,"pt");
                // this.ifcategoryZero = this.ProjectInfoList['CompleteReportType'];
                // if (Object.keys(data).length > 0) {
                this.Subtask_List = JSON.parse(data[0]['projectinfo_SubtaskDetails']);
                this.CompletedList = JSON.parse(data[0]['Completed_SubtaskDetails']);
                this.AssigntaskList = JSON.parse(data[0]['AssigntaskDetails_Json']);
                // // this.CompletedList.push(this.Subtask_List);
                // console.log("subtask Details--->",this.Subtask_List);
                // console.log("Assign Details--->",this.AssigntaskList);
                this.totalSubtaskHours = (data[0]['SubtaskHours']);
                this.ProjectPercentage = data[0]['ProjectPercentage'] + '%';
                this.ProjectStatus = data[0]['ProjectStatus'];
                this._MainProjectStatus = data[0]['MainProjectStatus'];
                console.log("ProjectDetails-->", this.ProjectNameJson);
                this.date1 = this.ProjectStatesJson[0]['StartDate'];
                this.date2 = this.ProjectStatesJson[0]['EndDate'];
                this.Project_Cost = this.ProjectNameJson[0]['Project_Cost'];
                this.EndDate1 = this.date2;
                this.Pid = this.ProjectNameJson[0]['id'];
                this._MasterCode = this.ProjectNameJson[0]['Project_Code'];
                this._ProjectName = this.ProjectNameJson[0]['Project_Name'];
                this.Proj_Desc = this.ProjectNameJson[0]['Project_Description'];
                this.Comp_No = this.ProjectNameJson[0]['Emp_Comp_No'];
                this.Project_Owner = this.ProjectNameJson[0]['Project_Owner'];
                this.EmpNo_Own = this.ProjectNameJson[0]['OwnerEmpNo'];
                this.EmpNo_Res = this.ProjectNameJson[0]['Responsible'];
                this.EmpNo_Autho = this.ProjectNameJson[0]['Authority'];
                // alert(this.EmpNo_Own);
                //console.log("Date In ----->", this.date1, this.date2)
                this.Project_Responsible = this.ProjectNameJson[0]['Team_Res'];
                // Date Diff In Days...
                this.date1 = moment__WEBPACK_IMPORTED_MODULE_0__(this.date1);
                this.date2 = moment__WEBPACK_IMPORTED_MODULE_0__(this.date2);
                this.TotalWork_Hours = Math.abs(this.date1.diff(this.date2, "hours"));
                this.Difference_In_Days = Math.abs(this.date1.diff(this.date2, 'days'));
                this.subtaskNotFoundMsg = "";
                this._subtaskDiv = false;
            }
        });
        this._OpenMemosInfo(this.projectCode);
    }
    toggleExpand() {
        this.isExpanded = !this.isExpanded;
    }
    ngOnDestroy() {
    }
    closeInfo() {
        this.selectedType = null;
        this.commentSelected = null;
        this.comments = "";
        this.exist_comment = [];
        document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
        document.getElementById("rightbar-overlay").style.display = "none";
        // document.getElementById("todo").classList.remove("position-fixed");
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
        document.getElementById("btm-space").classList.add("d-none");
        if (this._Urlid == '1') {
            this.router.navigate(["/backend/ProjectsSummary/"]);
        }
        else if (this._Urlid == '2') {
            this.BsService.bs_SelectedPortId.subscribe(c => { this.port_id = c; });
            // alert(this.port_id);
            this.router.navigate(["../portfolioprojects/" + this.port_id + "/"]);
        }
        else if (this._Urlid == '3') {
            this.router.navigate(["../ViewProjects/" + this.Mode]);
        }
        else if (this._Urlid == '4') {
            this.BsService.bs_SelectedPortId.subscribe(c => { this.port_id = c; });
            this.router.navigate(["../AddProjectsToPortfolio/" + this.port_id]);
        }
        else if (this._Urlid == '5') {
            this.router.navigate(["./backend/ToDoProjects/"]);
        }
        else if (this._Urlid == '6') {
            this.router.navigate(["Notifications"]);
        }
        this.ngOnDestroy();
    }
    AddDms() {
        this._openInfoSideBar = true;
        this._LinkSideBar = false;
        this._LinkSideBar1 = true;
        this._onRowClick(this.projectCode);
    }
    AddPortfolio() {
        this._openInfoSideBar = true;
        this._LinkSideBar = true;
        this._LinkSideBar1 = false;
        this.getPortfolios();
    }
    getPortfolios() {
        if ((this.ProjectStatesJson.length == 1) && (this.ProjectStatesJson[0]['Portfolio_Name'] == '')) {
            this._portfolioLength = 0;
        }
        else
            this._portfolioLength = this.ProjectStatesJson.length;
        // console.log(this._portfoliolist,"lll");
        this.service.GetTotalPortfoliosBy_Employeeid().subscribe((data) => {
            this.totalPortfolios = (data[0]['TotalPortfolios']);
        });
        this.service.GetPortfoliosBy_ProjectId(this.projectCode).subscribe((data) => {
            this._portfoliosList = data;
            this.dropdownSettings_Portfolio = {
                singleSelection: false,
                idField: 'Portfolio_ID',
                textField: 'Portfolio_Name',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 4,
                allowSearchFilter: true,
                clearSearchFilter: true
            };
        });
        document.getElementById("LinkSideBar1").style.width = "100%";
    }
    Portfolio_Select(selecteditems) {
        //console.log("Selected Item---->",selecteditems)
        let arr = [];
        this.Empty_portDropdown = selecteditems;
        // console.log("Before ForEach data Selected Memos---->",this.Empty_MemoDropdown,)
        this.Empty_portDropdown.forEach(element => {
            arr.push({ Port_Id: element.Portfolio_ID });
            this._SelectedPorts = arr;
        });
        // console.log("Selected Ports In Array--->", this._SelectedPorts);
        // console.log(this.ngDropdwonPort,"ports");
    }
    Portfolio_SelectAll(selecteditems) {
        let arr = [];
        this.Empty_portDropdown = selecteditems;
        // console.log("Before ForEach data Selected Memos---->",this.Empty_MemoDropdown,)
        this.Empty_portDropdown.forEach(element => {
            arr.push({ Port_Id: element.Portfolio_ID });
            this._SelectedPorts = arr;
        });
        //  console.log("Selected Ports In Array1--->", this._SelectedPorts);
    }
    Portfolio_DeSelectAll() {
        this._SelectedPorts = [];
        // console.log("Selected Ports In Array1--->", this._SelectedPorts);
    }
    Portfolio_Deselect(selecteditems) {
        let arr = [];
        this.Empty_portDropdown = selecteditems;
        if (this.Empty_portDropdown != '') {
            this.Empty_portDropdown.forEach(element => {
                arr.push({ Port_Id: element.Portfolio_ID });
                this._SelectedPorts = arr;
            });
        }
        else {
            this._SelectedPorts = [];
        }
        // console.log("Deselect Memos--->", this._SelectedPorts, this.Empty_portDropdown);
    }
    addProjectToPortfolio() {
        this.selectedportID = JSON.stringify(this._SelectedPorts);
        // console.log(this.selectedportID,"portids");
        if (this.selectedportID != null) {
            this.objPortfolioDto.SelectedPortIdsJson = this.selectedportID;
            this.objPortfolioDto.Project_Code = this.projectCode;
            this.objPortfolioDto.Emp_No = this.Current_user_ID;
            this.service.InsertPortfolioIdsByProjectCode(this.objPortfolioDto).
                subscribe((data) => {
                this._Message = (data['message']);
                // console.log(data);
                if (this._Message == 'Updated Successfully')
                    this.notifyService.showSuccess("Project Successfully added to selected Portfolio(s)", this._Message);
                else
                    this.notifyService.showInfo("Please select atleast one portfolio and try again", "");
            });
        }
        this.ngDropdwonPort = [];
        this.closeLinkSideBar();
        this.LoadProjectDetails();
        // this._openInfoSideBar = false;
    }
    OnPortfolioClick(P_id, P_Name, CreatedName) {
        sessionStorage.setItem('portfolioId', P_id);
        sessionStorage.setItem('portfolioname', P_Name);
        sessionStorage.setItem('PortfolioOwner', CreatedName);
        //sessionStorage.setItem('portfolioCDT', P_CDT);
        //this.router.navigate(['/portfolioprojects/', P_id]);
        // const Url = this.router.serializeUrl(this.router.createUrlTree(['testcreativeplanner/portfolioprojects/', P_id]));
        // window.open(Url);
        let name = 'portfolioprojects';
        var url = document.baseURI + name;
        var myurl = `${url}/${P_id}`;
        var myWindow = window.open(myurl, P_id);
        myWindow.focus();
    }
    DeleteProject(Proj_id, port_id, Pcode, proj_Name, createdBy) {
        this.deletedBy = this.Current_user_ID;
        this.ProjectStatesJson.forEach(element => {
            if (port_id == element.Portfolio_ID)
                this.portfolioName = element.Portfolio_Name;
        });
        //if (createdBy == this.Current_user_ID) {
        let String_Text = 'Delete';
        const confirmDialog = this.dialog.open(src_app_Shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmDialogComponent, {
            data: {
                mode: 'delete',
                title1: 'Confirmation ',
                message1: this.portfolioName
            }
        });
        confirmDialog.afterClosed().subscribe(result => {
            if (result === true) {
                this.service.DeleteProject(Proj_id, port_id, Pcode, proj_Name, createdBy, this.deletedBy).subscribe((data) => {
                    this.LoadProjectDetails();
                    this.notifyService.showSuccess("Deleted successfully ", '');
                });
            }
            else {
                this.notifyService.showError("Action Cancelled ", '');
            }
        });
    }
    GetMemosByEmployeeId() {
        this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
            subscribe((data) => {
            this.Memos_List = JSON.parse(data['JsonData']);
            this._ActualMemoslist = JSON.parse(data['JsonData']);
            // console.log("Actual Memo List By EmpId--->", this._ActualMemoslist)
            this._totalMemos = this._ActualMemoslist.length;
            // console.log("Memos List", JSON.parse(data['JsonData']));
            this.dropdownSettings_Memo = {
                singleSelection: true,
                idField: 'MailId',
                textField: 'Subject',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 3,
                allowSearchFilter: true
            };
        });
    }
    Memo_Select(selecteditems) {
        //console.log("Selected Item---->",selecteditems)
        let arr = [];
        this.Empty_MemoDropdown = selecteditems;
        // console.log("Before ForEach data Selected Memos---->",this.Empty_MemoDropdown,)
        this.Empty_MemoDropdown.forEach(element => {
            arr.push({ MailId: element.MailId });
            this._SelectedMemos = arr;
        });
        //console.log("Selected Memos In Array--->", arr)
    }
    Memo_Deselect() {
        let arr = [];
        this.Empty_MemoDropdown = this.ngDropdwonMemo;
        this.Empty_MemoDropdown.forEach(element => {
            arr.push({ MailId: element.MailId });
            this._SelectedMemos = arr;
        });
        // console.log("Deselect Memos--->", this._SelectedMemos)
    }
    _onRowClick(projectCode) {
        this._SelectedIdsfromDb = [];
        this.Selected_Projectcode = projectCode;
        this.GetMemosByEmployeeId();
        this._LinkService._GetOnlyMemoIdsByProjectCode(projectCode).
            subscribe((data) => {
            let Table_data = data;
            // console.log("Memos Id Form DB--->", data);
            if (Table_data.length > 0) {
                this._JsonString = JSON.stringify(data[0]['JsonData']);
                //console.log("Memos Ids-------->", (this._JsonString));
                this._dbMemoIdList = JSON.parse(data[0]['JsonData']);
                let arr1 = this._ActualMemoslist;
                // console.log("Actula Memo List On Row Click--->", this._ActualMemoslist);
                let arr2 = this._dbMemoIdList;
                this._SelectedIdsfromDb = underscore__WEBPACK_IMPORTED_MODULE_2__.map(arr2, (d) => { return d.MailId; });
                //Rejecting Same Ids 
                this.Memos_List = underscore__WEBPACK_IMPORTED_MODULE_2__.reject(arr1, (d) => {
                    var findId = underscore__WEBPACK_IMPORTED_MODULE_2__.find(this._SelectedIdsfromDb, (sId) => { return sId === d.MailId; });
                    if (findId) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                let arr = [];
                this._SelectedIdsfromDb.forEach(item => {
                    arr.push({ MailId: item });
                    this._SelectedIdsfromDb = arr;
                });
                if (this._dbMemoIdList == undefined) {
                    this._mappedMemos = 0;
                }
                else {
                    this._mappedMemos = this._dbMemoIdList.length;
                }
                //   // console.log("On Row Click----selectedIdfrom DB---->",this._SelectedIdsfromDb);
            }
            else {
                this._mappedMemos = 0;
                console.log("No Memos linked For This Project...");
            }
        });
        document.getElementById("LinkSideBar").style.width = "100%";
    }
    moreDetails() {
        let name = 'MoreDetails';
        var url = document.baseURI + name;
        var myurl = `${url}/${this._MasterCode}`;
        var myWindow = window.open(myurl, this._MasterCode);
        myWindow.focus();
    }
    moreDetails1(pcode) {
        let name = 'MoreDetails';
        var url = document.baseURI + name;
        var myurl = `${url}/${pcode}`;
        var myWindow = window.open(myurl, pcode);
        myWindow.focus();
    }
    bttn_RACI() {
        this._raciDetails = !this._raciDetails;
    }
    _OpenMemosInfo(_projectCode) {
        this._dbMemoIdList = [];
        // this._displayProjName = _projectName;
        this._LinkService._GetOnlyMemoIdsByProjectCode(_projectCode).
            subscribe((data) => {
            let Table_data = data;
            // console.log("---->Table Data", Table_data);
            // let Dbdata: any = JSON.parse(data[0]['JsonData']);
            // if (Dbdata == '[]') {
            //   this._MemosSubjectList = [];
            //   this._MemosNotFound = "No memos linked";
            // }
            if (Table_data.length > 0 && data[0]['JsonData'] != '[]') {
                this._MemosNotFound = "";
                this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
                this._JsonString = data[0]['JsonData'];
                // console.log(this._JsonString);
                this._LinkService._GetMemosSubject(this._JsonString).
                    subscribe((data) => {
                    // console.log("------------>", data);
                    this._MemosSubjectList = JSON.parse(data['JsonData']);
                    //console.log("Subject Name ------------>", this._MemosSubjectList);
                });
            }
            else {
                this._MemosSubjectList = [];
                this._MemosNotFound = "No memos linked";
            }
        });
        //Displaying Right Side Bar... 
        //document.getElementById("MemosSideBar").style.width = "350px";
    }
    deleteMemos(memoId) {
        this._MemosSubjectList = [];
        let _DeleteSelectedMemo = [];
        _DeleteSelectedMemo.push({ MailId: memoId });
        //_DeleteList.push(pcode);
        //console.log("---->Delete Memo",_DeleteSelectedMemo);
        let arr1 = this._DBMemosIDList;
        let arr2 = _DeleteSelectedMemo;
        let result = arr1.filter(o1 => !arr2.some(o2 => o1.MailId === o2.MailId));
        //console.log("Final Result ----->",result);
        this._DBMemosIDList = underscore__WEBPACK_IMPORTED_MODULE_2__.map(arr2, (d) => { return d.MailId; });
        this.memoId = JSON.stringify(result);
        //console.log("-----Final O/p--->", this.memoId);
        let appId = 101;
        let UserId = this.Current_user_ID;
        this._LinkService.InsertMemosOn_ProjectCode(this.projectCode, appId, this.memoId, UserId).
            subscribe((data) => {
            // this._OpenMemosInfo(pcode,this.pName);
            //this.GetProjectsByUserName();
            let Returndata = data['Message'];
            this.UpdateMemos(this.projectCode);
            this.notifyService.showInfo("", Returndata);
        });
    }
    UpdateMemos(pcode) {
        this._LinkService._GetOnlyMemoIdsByProjectCode(pcode).
            subscribe((data) => {
            let Table_data = data;
            //console.log("Linked Db Memos Data---->",data[0]['JsonData']);
            if (Table_data.length > 0) {
                this._MemosNotFound = "";
                this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
                // console.log("List----->",this._dbMemoIdList)
                this._JsonString = data[0]['JsonData'];
                this._LinkService._GetMemosSubject(this._JsonString).
                    subscribe((data) => {
                    //console.log("------------>", data);
                    this._MemosSubjectList = JSON.parse(data['JsonData']);
                    //console.log("Subject Name ------------>", this._MemosSubjectList);
                });
            }
            else {
                this._MemosSubjectList = [];
                this._MemosNotFound = "No memos linked";
            }
        });
    }
    _AddLink() {
        let _ProjectCode = this.Selected_Projectcode;
        let appId = 101; //this._ApplicationId;
        //console.log("selected Memos From Dropdown-->", this._SelectedMemos);
        if (this._SelectedIdsfromDb > 0 || this._SelectedIdsfromDb != undefined) {
            // console.log("Table Ids-->", this._SelectedIdsfromDb);
            this.memoId = JSON.stringify(this._SelectedIdsfromDb.concat(this._SelectedMemos));
            // console.log("After Joins Final Output=======>", this.memoId);
        }
        else {
            this.memoId = JSON.stringify(this._SelectedMemos);
            // console.log("Ëlse Block...Executed---->", this.memoId);
        }
        let UserId = this.Current_user_ID;
        if (this._SelectedMemos.length > 0) {
            this._LinkService.InsertMemosOn_ProjectCode(_ProjectCode, appId, this.memoId, UserId).
                subscribe((data) => {
                this.UpdateMemos(this.projectCode);
                this.GetMemosByEmployeeId();
                //this.GetProjectsByUserName();
                let Returndata = data['Message'];
                this.notifyService.showSuccess("", Returndata);
                this.ngDropdwonMemo = [];
                this._SelectedMemos = [];
            });
        }
        else {
            this.notifyService.showInfo("Request Cancelled", "Please select memo(s) to link");
        }
        this.closeLinkSideBar();
        this._openInfoSideBar = false;
        // this._LinkSideBar=true;
    }
    closeLinkSideBar() {
        this.ngDropdwonPort = [];
        document.getElementById("LinkSideBar").style.width = "0";
        document.getElementById("LinkSideBar1").style.width = "0";
        this._LinkSideBar = true;
        this._LinkSideBar1 = true;
        this._openInfoSideBar = false;
    }
    openUrl(memo_Url) {
        const Url = memo_Url;
        window.open(Url);
    }
    OnEditProject(id, Pname) {
        this._modelProjectName = Pname;
        this.Editbutton = true;
        // (<HTMLInputElement>document.getElementById("SpanProjName_" + id)).style.display = "none";
        // (<HTMLInputElement>document.getElementById("spanTextbox_" + id)).style.display = "block";
        // (<HTMLInputElement>document.getElementById("textboxfocus_" + id)).focus();
        document.getElementById("pro_name_" + id).style.display = "none";
        document.getElementById("spanTextbox_single" + id).style.display = "block";
        document.getElementById("textboxfocus_single" + id).focus();
        // (<HTMLInputElement>document.getElementById("EidtBtn_single" + id)).style.display = "none";
    }
    OnEditProject_Desc(id, Desc) {
        this._modelProjDesc = Desc;
        this.Editbutton = true;
        document.getElementById("Span_Desc_" + id).style.display = "none";
        document.getElementById("spanTextarea_single" + id).style.display = "block";
        document.getElementById("textareafocus_" + id).focus();
    }
    onCancel(id) {
        document.getElementById("pro_name_" + id).style.display = "inline-block";
        document.getElementById("spanTextbox_single" + id).style.display = "none";
        //(<HTMLInputElement>document.getElementById("EidtBtn_" + id)).style.display = "inline-block";
        this.Editbutton = false;
        // For Description
        document.getElementById("Span_Desc_" + id).style.display = "inline-block";
        document.getElementById("spanTextarea_single" + id).style.display = "none";
        this._modelProjDesc = null;
        this._modelProjectName = null;
        //(<HTMLInputElement>document.getElementById("Editbutton")).style.display = "inline-block";
        // (<HTMLInputElement>document.getElementById("Span_Deadline_" + id)).style.display = "inline-block";
        document.getElementById("DeadlineArea_" + id).classList.remove("d-block");
        this._ProjDeadline = null;
        this.extend_remarks = "";
        document.getElementById("HoldArea_" + id).classList.remove("d-block");
        this.Holddate = null;
        this.hold_remarks = "";
        document.getElementById("TransferArea_" + id).classList.remove("d-block");
        this.selectedEmpNo = null;
        this.TransDate = null;
        this.transfer_remarks = "";
    }
    onTransferCancel(id) {
        document.getElementById("TransferArea_" + id).classList.remove("d-block");
        this.selectedEmpNo = null;
        this.TransDate = null;
        this.transfer_remarks = "";
    }
    OnProject_Rename(id, Pcode) {
        if (this._modelProjectName != "" && this._modelProjDesc != "") {
            this.service._ProjectRenameService(id, this._modelProjectName, this._modelProjDesc, this.Current_user_ID).subscribe(data => {
                this._Message = data['message'];
                this.notifyService.showSuccess(this._Message, "");
                // this.GetSubtask_Details();
                // this.GetProjectsByUserName();
                this.LoadProjectDetails();
                this.service.SubTaskDetailsService_ToDo_Page(Pcode, this.Comp_No, null).subscribe((data) => {
                    let list;
                    list = JSON.parse(data[0]['ProjectInfo']);
                    this._ProjectName = list[0]['Project_Name'];
                    this.Proj_Desc = list[0]['Project_Description'];
                });
            });
            this.onCancel(id);
        }
        else {
            this.notifyService.showInfo("Empty string cannot be save", "Please give some name.");
        }
    }
    clickonselect(com) {
        if (this.comments == null) {
            this.comments = com;
            this.exist_comment.push(com);
        }
        else {
            this.comments = this.comments + " " + com;
            this.exist_comment.push(com);
        }
        console.log(this.exist_comment, "select");
    }
    clickondeselect(com, id) {
        // let smallerArray: any[] = this.exist_comment.length < this.rejectcommentsList.length ? this.exist_comment : this.rejectcommentsList;
        // let largerArray: any[] = this.exist_comment.length < this.rejectcommentsList.length ? this.rejectcommentsList : this.exist_comment;
        // for (let i = 0; i < smallerArray.length; i++) {
        //   let index = largerArray.findIndex((el) => el.Req_Coments == smallerArray[i]);
        //   if (index !== -1) {
        //     smallerArray.splice(i, 1);
        //     i--;
        //   }
        // }
        this.exist_comment = this.exist_comment.filter((comment) => comment != com);
        this.comments = this.comments.replace(com, "");
        console.log(this.exist_comment, "deselect");
    }
    typeChange() {
        this.comments = null;
        this.commentSelected = null;
        this.rejectType = null;
        this.noRejectType = false;
    }
    approvalClick(actionType) {
        // $("#ProjectInfoNew").scrollTop(0);
        switch (actionType) {
            case 'EDIT':
                {
                    this.isRejectOptionsVisible = false;
                    this.selectedType = '1';
                    this.rejectType = null;
                    this.Edit_active = true;
                    this.Accept_Active = false;
                    this.Reject_active = false;
                }
                ;
                break;
            case 'CONDITIONAL':
                {
                    this.isRejectOptionsVisible = false;
                    this.selectedType = '2';
                    this.rejectType = null;
                    this.Edit_active = false;
                    this.Accept_Active = true;
                    this.Reject_active = false;
                }
                ;
                break;
            case 'REJECT':
                {
                    this.isRejectOptionsVisible = true;
                    this.selectedType = '3';
                    this.rejectType = null;
                    this.Edit_active = false;
                    this.Accept_Active = false;
                    this.Reject_active = true;
                }
                ;
                break;
            default: { }
        }
        this.isTextAreaVisible = true;
    }
    submitApproval() {
        if (this.selectedType == '1') {
            if (this.comments == '' || this.comments == null) {
                this.singleapporval_json.forEach(element => {
                    element.Remarks = 'Accepted';
                });
            }
            else {
                this.singleapporval_json.forEach(element => {
                    element.Remarks = this.comments;
                });
            }
            this.approvalservice.NewUpdateSingleAcceptApprovalsService(this.singleapporval_json).
                subscribe((data) => {
                this.notifyService.showSuccess("Project Approved successfully by - " + this._fullname, "Success");
                this.LoadProjectDetails();
                this.getapprovalStats();
                if (this._Urlid == '1') {
                    this.router.navigate(["/backend/ProjectsSummary/"]);
                    this._projectSummary.GetProjectsByUserName(this.Summarytype);
                }
                else if (this._Urlid == '2') {
                    this._portfolioprojects.GetPortfolioProjectsByPid();
                }
                else if (this._Urlid == '3') {
                    this._viewdashboard.GetCompletedProjects();
                }
                else if (this._Urlid == '4') {
                    this._projectsAdd.GetProjectsByUserName();
                    this._projectsAdd.getDropdownsDataFromDB();
                }
                else if (this._Urlid == '5') {
                    this._toDo.GetProjectsByUserName();
                    this._toDo.GetSubtask_Details();
                }
                else if (this._Urlid == '6') {
                    this.router.navigate(["Notifications"]);
                    this._notification.viewAll('Req');
                }
            });
            console.log(this.singleapporval_json, "accept");
        }
        else if (this.selectedType == '2') {
            this.approvalObj.Emp_no = this.Current_user_ID;
            this.approvalObj.Project_Code = this.projectCode;
            this.approvalObj.Request_type = this.requestType;
            if (this.comments == '' || this.comments == null) {
                this.approvalObj.Remarks = 'Accepted';
            }
            else {
                this.approvalObj.Remarks = this.comments;
            }
            this.approvalservice.InsertConditionalAcceptApprovalService(this.approvalObj).
                subscribe((data) => {
                this._Message = (data['message']);
                if (this._Message == 'Not Authorized' || this._Message == '0') {
                    this.notifyService.showError("project not approved", 'Failed.');
                }
                else {
                    this.notifyService.showSuccess("Project Approved Successfully", this._Message);
                    this.LoadProjectDetails();
                    this.getapprovalStats();
                    if (this._Urlid == '1') {
                        this.router.navigate(["/backend/ProjectsSummary/"]);
                        this._projectSummary.GetProjectsByUserName(this.Summarytype);
                    }
                    else if (this._Urlid == '2') {
                        this._portfolioprojects.GetPortfolioProjectsByPid();
                    }
                    else if (this._Urlid == '3') {
                        this._viewdashboard.GetCompletedProjects();
                    }
                    else if (this._Urlid == '4') {
                        this._projectsAdd.GetProjectsByUserName();
                        this._projectsAdd.getDropdownsDataFromDB();
                    }
                    else if (this._Urlid == '5') {
                        this._toDo.GetProjectsByUserName();
                    }
                    else if (this._Urlid == '6') {
                        this.router.navigate(["Notifications"]);
                        this._notification.viewAll('Req');
                    }
                }
            });
        }
        else if (this.selectedType == '3') {
            if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
                this.noRejectType = true;
                this.notifyService.showError("Please select Reject Type", "Failed");
                return false;
            }
            else {
                this.singleapporval_json.forEach(element => {
                    element.Remarks = this.comments;
                    element.RejectType = this.rejectType;
                });
                this.approvalservice.NewUpdateSingleRejectApprovalsService(this.singleapporval_json).
                    subscribe((data) => {
                    this.notifyService.showSuccess("Project Rejected successfully by - " + this._fullname, "Success");
                    this.LoadProjectDetails();
                    this.getapprovalStats();
                    if (this._Urlid == '1') {
                        this.router.navigate(["/backend/ProjectsSummary/"]);
                        this._projectSummary.GetProjectsByUserName(this.Summarytype);
                    }
                    else if (this._Urlid == '2') {
                        this._portfolioprojects.GetPortfolioProjectsByPid();
                    }
                    else if (this._Urlid == '3') {
                        this._viewdashboard.GetCompletedProjects();
                    }
                    else if (this._Urlid == '4') {
                        this._projectsAdd.GetProjectsByUserName();
                        this._projectsAdd.getDropdownsDataFromDB();
                    }
                    else if (this._Urlid == '5') {
                        this._toDo.GetProjectsByUserName();
                        this._toDo.GetSubtask_Details();
                    }
                    else if (this._Urlid == '6') {
                        this.router.navigate(["Notifications"]);
                        this._notification.viewAll('Req');
                    }
                });
            }
        }
        else if (this.selectedType == '4') {
            this.notifyService.showError("Not Approved - Development under maintainance", "Failed");
        }
        this.close_info_Slide();
    }
    submitApproval1() {
        this.active = true;
        this.Edit_active = false;
        this.Accept_Active = false;
        this.Reject_active = false;
        if (this.comments == '' || this.comments == null) {
            this.singleapporval_json.forEach(element => {
                element.Remarks = 'Accepted';
            });
        }
        else {
            this.singleapporval_json.forEach(element => {
                element.Remarks = this.comments;
            });
        }
        this.approvalservice.NewUpdateSingleAcceptApprovalsService(this.singleapporval_json).
            subscribe((data) => {
            this.notifyService.showSuccess("Project Approved successfully by - " + this._fullname, "Success");
            this.LoadProjectDetails();
            this.getapprovalStats();
            if (this._Urlid == '1') {
                this.router.navigate(["/backend/ProjectsSummary/"]);
                this._projectSummary.GetProjectsByUserName(this.Summarytype);
            }
            else if (this._Urlid == '2') {
                this._portfolioprojects.GetPortfolioProjectsByPid();
            }
            else if (this._Urlid == '3') {
                this._viewdashboard.GetCompletedProjects();
            }
            else if (this._Urlid == '4') {
                this._projectsAdd.GetProjectsByUserName();
                this._projectsAdd.getDropdownsDataFromDB();
            }
            else if (this._Urlid == '5') {
                this._toDo.GetProjectsByUserName();
                this._toDo.GetSubtask_Details();
            }
            else if (this._Urlid == '6') {
                this.router.navigate(["Notifications"]);
                this._notification.viewAll('Req');
            }
        });
        console.log(this.singleapporval_json, "accept");
        this.close_info_Slide();
    }
    getapprovalStats() {
        this.approvalEmpId = null;
        this.selectedType = null;
        this.commentSelected = null;
        this.comments = "";
        this.approvalObj.Project_Code = this.projectCode;
        this.approvalservice.GetApprovalStatus(this.approvalObj).subscribe((data) => {
            this.requestDetails = data;
            console.log(this.requestDetails, "approval");
            if (this.requestDetails.length > 0) {
                this.approvalEmpId = (this.requestDetails[0]['Emp_no']);
                this.requestType = (this.requestDetails[0]['Request_type']);
                this.forwardType = (this.requestDetails[0]['ForwardType']);
                this.requestDate = (this.requestDetails[0]['Request_date']);
                this.requestDeadline = (this.requestDetails[0]['Request_deadline']);
                this.requestComments = (this.requestDetails[0]['Remarks']);
                this.new_deadline = (this.requestDetails[0]['new_deadline']);
                this.hold_upto = (this.requestDetails[0]['hold_date']);
                this.new_cost = (this.requestDetails[0]['new_cost']);
                this.new_duration = (this.requestDetails[0]['new_duration']);
                this.comments_list = JSON.parse(this.requestDetails[0]['comments_Json']);
                this.Submitted_By = (this.requestDetails[0]['Submitted_By']);
                const fullName = this.Submitted_By && this.Submitted_By.split(' ');
                this.initials1 = fullName.shift().charAt(0) + fullName.pop().charAt(0);
                this.initials1 = this.initials1.toUpperCase();
                this.reject_list = JSON.parse(this.requestDetails[0]['reject_list']);
                this.prviousCommentsList = JSON.parse(this.requestDetails[0]['previousComments_JSON']);
                this.singleapporval_json = JSON.parse(this.requestDetails[0]['singleapproval_json']);
                console.log(this.singleapporval_json, "service");
                if (this.prviousCommentsList.length > 1) {
                    this.previouscoments = true;
                }
                else {
                    this.previouscoments = false;
                }
                this.transfer_json = JSON.parse(this.requestDetails[0]['transfer_json']);
                if (this.requestType == 'Project Forward') {
                    this.newResponsible = (this.transfer_json[0]['newResp']);
                    this.forwardto = (this.transfer_json[0]['Forwardedto']);
                    this.forwardfrom = (this.transfer_json[0]['Forwardedfrom']);
                }
                this.revert_json = JSON.parse(this.requestDetails[0]['revert_json']);
                if (this.requestType == 'Revert Back') {
                    this.newResponsible = (this.revert_json[0]['newResp']);
                    this.forwardto = (this.revert_json[0]['Forwardedto']);
                    this.forwardfrom = (this.revert_json[0]['Forwardedfrom']);
                }
                if (this.requestType == 'Project Complete' || this.requestType == 'ToDo Achieved') {
                    this.complete_List = JSON.parse(this.requestDetails[0]['completeDoc']);
                    this.completedoc = (this.complete_List[0]['Sourcefile']);
                    this.iscloud = (this.complete_List[0]['IsCloud']);
                    this.url = (this.complete_List[0]['CompleteProofDoc']);
                }
                console.log(this.requestDetails, 'transfer');
            }
            // console.log(this.comments_list, "req")
            // console.log(this.approvalEmpId ,this.requestComments,this.requestDate,this.requestDeadline,this.requestType,"request status");
        });
    }
    resetApproval() {
        this.selectedType = null;
        this.commentSelected = null;
        this.noRejectType = false;
        this.exist_comment = [];
    }
    rejectApproval() {
        this.exist_comment = [];
        this.comments = "";
        this.noRejectType = false;
        // alert(this.rejectType)
        if (this.rejectType != null && this.rejectType != "") {
            this.reject_list.forEach(element => {
                if (this.rejectType == element.TypeID) {
                    this.rejDesc = element.Reject_Description;
                }
            });
            this.approvalObj.Emp_no = this.Current_user_ID;
            this.approvalObj.rejectType = this.rejectType;
            this.approvalObj.Project_Code = this.projectCode;
            if (this.requestType == 'New Project')
                this.approvalObj.Status = 'New Project Rejected';
            else if (this.requestType == 'New Project Reject Release')
                this.approvalObj.Status = 'New Project Rejected';
            else if (this.requestType == 'New Project Hold')
                this.approvalObj.Status = 'New Project Rejected';
            else if (this.requestType == 'Project Complete')
                this.approvalObj.Status = 'Project Complete Rejected';
            else if (this.requestType == 'Project Complete Reject Release')
                this.approvalObj.Status = 'Project Complete Rejected';
            else if (this.requestType == 'Project Complete Hold')
                this.approvalObj.Status = 'Project Complete Rejected';
            else if (this.requestType == 'Deadline Extend')
                this.approvalObj.Status = 'Rejected';
            else if (this.requestType == 'Deadline Extend Hold')
                this.approvalObj.Status = 'Rejected';
            else if (this.requestType == 'Standardtask Enactive')
                this.approvalObj.Status = 'Enactive-Reject';
            else if (this.requestType == 'Project Forward')
                this.approvalObj.Status = 'Forward Reject';
            else if (this.requestType == 'Project Hold')
                this.approvalObj.Status = 'Project Hold Reject';
            else if (this.requestType == 'Revert Back')
                this.approvalObj.Status = 'Revert Reject';
            else if (this.requestType == 'Task Complete')
                this.approvalObj.Status = 'Task-Reject';
            else {
                this.approvalObj.Status = 'Rejected';
            }
            this.approvalservice.GetRejectComments(this.approvalObj).subscribe(data => {
                this.rejectcommentsList = JSON.parse(data[0]['reject_CommentsList']);
                this.rejectlength = this.rejectcommentsList.length;
            });
        }
    }
    underDev() {
        this.TransDate = this.datepipe.transform(this.TransDate, 'MM/dd/yyyy');
        console.log(this.selectedEmpNo, this.transfer_remarks, this.TransDate, "transfer");
        this.notifyService.showError("**Development under maintainance", "Failed!!");
    }
    onEditDeadline(id, enddate) {
        document.getElementById("DeadlineArea_" + id).classList.add("d-block");
        document.getElementsByClassName("date-drop2")[0].classList.remove("d-block");
        // document.getElementsByClassName("date-drop3")[0].classList.remove("d-block");
        // this._ProjDeadline = enddate;
        this.Editbutton = true;
        document.getElementById("Deadlinetext_" + id).focus();
    }
    onProject_ExtendDeadline(id, Pcode) {
        this._ProjDeadline = this.datepipe.transform(this._ProjDeadline, 'MM/dd/yyyy');
        // alert(Pcode);
        if (this._ProjDeadline != null) {
            this.service._ProjectDeadlineExtendService(Pcode, this._ProjDeadline, null, this.extend_remarks, null).subscribe(data => {
                this._Message = data['message'];
                if (this._Message == 'Project Deadline not Updated') {
                    this.notifyService.showError(this._Message + '.' + "Please select the appropriate date and try again.", "Failed");
                    this.LoadProjectDetails();
                }
                else if (this._Message == 'Project Deadline Updated') {
                    this.notifyService.showSuccess("Project end date updated", "Success");
                    this.LoadProjectDetails();
                }
            });
            this.onCancel(id);
        }
        else {
            this.notifyService.showInfo("Deadline date cannot be empty", "Please select date.");
        }
    }
    getdeadlinecount() {
        this.service.getDeadlineCountbyProjectcode(this.projectCode).subscribe(data => {
            this.deadlineCount = data['deadlineCount'];
        });
    }
    onHoldClick(id) {
        document.getElementById("HoldArea_" + id).classList.add("d-block");
        document.getElementsByClassName("date-drop1")[0].classList.remove("d-block");
        // document.getElementsByClassName("date-drop3")[0].classList.remove("d-block");
        this.Editbutton = true;
        document.getElementById("Holdtext_" + id).focus();
    }
    onProject_Hold(id, Pcode) {
        this.Holddate = this.datepipe.transform(this.Holddate, 'MM/dd/yyyy');
        // alert(Pcode);
        if (this.Holddate != null) {
            this.objProjectDto.Project_holddate = this.Holddate;
            this.objProjectDto.Project_Code = Pcode;
            this.objProjectDto.Remarks = this.hold_remarks;
            this.service._ProjectHoldService(this.objProjectDto).subscribe(data => {
                this._Message = data['message'];
                if (this._Message == 'Project Hold Updated') {
                    this.notifyService.showSuccess(this._Message + " by " + this.Current_user_ID, "Success");
                    this.LoadProjectDetails();
                }
            });
            this.onCancel(id);
        }
        else {
            this.notifyService.showInfo("Project Hold date cannot be empty", "Please select a date.");
        }
    }
    getProjectHoldDate() {
        this.service.getHoldDatebyProjectcode(this.projectCode).subscribe(data => {
            this.proj_holddate = data['Project_holddate'];
        });
    }
    // EmployeeOnSelect(obj) {
    //   this.selectedEmpNo = obj;
    //   alert(this.selectedEmpNo);
    // }
    onTransferClick(id) {
        document.getElementById("TransferArea_" + id).classList.add("d-block");
        this.Editbutton = true;
        document.getElementById("Transtext_" + id).focus();
    }
    sweetAlert(id, pcode) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
            title: 'Project transfer!!',
            html: 'Do you want to transfer the project "<b>' + this._ProjectName + '</b>" ?',
            // icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((response) => {
            if (response.value) {
                this.onProject_Transfer(id, pcode);
            }
            else if (response.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().DismissReason.cancel)) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire('Cancelled', 'Project not transferred!', 'error');
                this.onCancel(id);
            }
        });
    }
    onProject_Transfer(id, Pcode) {
        if (this.TransDate != null) {
            this.TransDate = this.datepipe.transform(this.TransDate, 'MM/dd/yyyy');
        }
        else {
            this.TransDate = null;
        }
        this.ProjectInfoJson.forEach(element => {
            if (element.Emp_No == this.selectedEmpNo) {
                this.new_Res = element.DisplayName;
            }
        });
        this.approvalObj.Emp_no = this.Current_user_ID;
        this.approvalObj.Responsible = this.selectedEmpNo;
        this.approvalObj.deadline = this.TransDate;
        this.approvalObj.Project_Code = Pcode;
        this.approvalObj.Remarks = this.transfer_remarks;
        this.approvalservice.InsertTransferApprovalService(this.approvalObj).subscribe(data => {
            this._Message = data['message'];
            if (this._Message == '1') {
                this.notifyService.showSuccess("Project transferred to " + this.new_Res + '(' + this.approvalObj.Responsible + ')' + " from " + this.Project_Responsible + '(' + this.EmpNo_Res + ')', "Successfully Transferred");
                this.LoadProjectDetails();
                this.getapprovalStats();
                if (this._Urlid == '1') {
                    this.router.navigate(["/backend/ProjectsSummary/"]);
                    this._projectSummary.GetProjectsByUserName(this.Summarytype);
                }
                else if (this._Urlid == '2') {
                    this._portfolioprojects.GetPortfolioProjectsByPid();
                }
                else if (this._Urlid == '3') {
                    this._viewdashboard.GetCompletedProjects();
                }
                else if (this._Urlid == '4') {
                    this._projectsAdd.GetProjectsByUserName();
                    this._projectsAdd.getDropdownsDataFromDB();
                }
                else if (this._Urlid == '5') {
                    this._toDo.GetProjectsByUserName();
                }
                else if (this._Urlid == '6') {
                    // this.router.navigate(["Notifications"]);
                }
            }
            else if (this._Message == '2') {
                this.notifyService.showSuccess("Project Transfer request sent to the transferee -" + this.new_Res + '(' + this.approvalObj.Responsible + ')', "Transfer under approval!");
                this.LoadProjectDetails();
                this.getapprovalStats();
                if (this._Urlid == '1') {
                    this.router.navigate(["/backend/ProjectsSummary/"]);
                    this._projectSummary.GetProjectsByUserName(this.Summarytype);
                }
                else if (this._Urlid == '2') {
                    this._portfolioprojects.GetPortfolioProjectsByPid();
                }
                else if (this._Urlid == '3') {
                    this._viewdashboard.GetCompletedProjects();
                }
                else if (this._Urlid == '4') {
                    this._projectsAdd.GetProjectsByUserName();
                    this._projectsAdd.getDropdownsDataFromDB();
                }
                else if (this._Urlid == '5') {
                    this._toDo.GetProjectsByUserName();
                }
                else if (this._Urlid == '6') {
                    this.router.navigate(["Notifications"]);
                    this._notification.viewAll('Req');
                }
            }
            else if (this._Message == '3') {
                this.notifyService.showSuccess("Project Transfer request sent to Project Owner -" + this.Project_Owner + '(' + this.EmpNo_Own + ')', "Transfer under approval!");
                this.LoadProjectDetails();
                this.getapprovalStats();
                if (this._Urlid == '1') {
                    this.router.navigate(["/backend/ProjectsSummary/"]);
                    this._projectSummary.GetProjectsByUserName(this.Summarytype);
                }
                else if (this._Urlid == '2') {
                    this._portfolioprojects.GetPortfolioProjectsByPid();
                }
                else if (this._Urlid == '3') {
                    this._viewdashboard.GetCompletedProjects();
                }
                else if (this._Urlid == '4') {
                    this._projectsAdd.GetProjectsByUserName();
                    this._projectsAdd.getDropdownsDataFromDB();
                }
                else if (this._Urlid == '5') {
                    this._toDo.GetProjectsByUserName();
                }
                else if (this._Urlid == '6') {
                    // this.router.navigate(["Notifications"]);
                }
            }
            else if (this._Message == '4') {
                this.notifyService.showError("Please contact Project Owner", "Project Not Transferred!");
            }
        });
        this.onCancel(id);
        this.closeInfo();
        // else {
        //   this.notifyService.showInfo("Project Deadline date cannot be empty", "Please select a date.");
        // }
    }
    openPDF_Standard(cloud, repDate, proofDoc) {
        repDate = new Date(repDate);
        let FileUrl;
        FileUrl = "http://217.145.247.42:81/yrgep/Uploads/";
        let Day = repDate.getDate();
        let Month = repDate.getMonth() + 1;
        let Year = repDate.getFullYear();
        if (Month < 10) {
            this._month = '0' + Month;
        }
        else {
            this._month = Month;
        }
        if (Day < 10) {
            this._day = '0' + Day;
        }
        else {
            this._day = Day;
        }
        var date = this._month + "_" + this._day + "_" + repDate.getFullYear();
        if (cloud == false) {
            if (this.EmpNo_Autho == this.EmpNo_Res) {
                window.open(FileUrl + this.EmpNo_Res + "/" + this.projectCode + "/" + date + "/" + proofDoc);
            }
            else if (this.EmpNo_Autho != this.EmpNo_Res) {
                window.open(FileUrl + this.EmpNo_Autho + "/" + this.projectCode + "/" + date + "/" + proofDoc);
            }
        }
        else if (cloud == true) {
            window.open(proofDoc);
        }
    }
    openPDF(cloud, docName) {
        let FileUrl;
        FileUrl = "http://217.145.247.42:81/yrgep/Uploads/";
        if (cloud == false) {
            if (this.EmpNo_Autho == this.EmpNo_Res) {
                window.open(FileUrl + this.EmpNo_Res + "/" + this.projectCode + "/" + docName);
            }
            else if (this.EmpNo_Autho != this.EmpNo_Res) {
                window.open(FileUrl + this.EmpNo_Autho + "/" + this.projectCode + "/" + docName);
            }
        }
        else if (cloud == true) {
            window.open(docName);
        }
    }
    LoadDocument(cloud, Pcode, Resp, url) {
        // (<HTMLInputElement>document.getElementById("documentPreview")).style.display="block";
        // url = "http://208.109.13.37/dmsapi/DataOutPut/react-handbook.pdf";
        // contenttype=".pdf";
        // if (contenttype == ".PDF" || contenttype == ".pdf" || contenttype == "application/pdf") {
        //   this._IsPdf = true;
        // }
        // else if (contenttype == ".jpg" || contenttype == ".png" || contenttype == ".PNG" || contenttype == ".jpeg") {
        //   this._IsPdf = false;
        // }
        this.src = url;
        let FileUrl;
        // FileUrl = "http://217.145.247.42:81/YRGEP/Uploads/";
        FileUrl = "https://yrglobaldocuments.blob.core.windows.net/documents/EP/";
        if (cloud == false) {
            var myWindow = window.open(FileUrl + Resp + "/" + Pcode + "/" + url);
            myWindow.focus();
        }
        else if (cloud == true) {
            var myWindow = window.open(url);
            myWindow.focus();
        }
    }
    LoadDocument1(iscloud, filename, url1, type, submitby) {
        // let name = "ArchiveView/"+this.projectCode;
        // var rurl = document.baseURI + name;
        // var encoder = new TextEncoder();
        // let url = encoder.encode(url1);
        // let encodeduserid = encoder.encode(this.Current_user_ID.toString());
        // filename = filename.replace(/#/g, "%23");
        // filename = filename.replace(/&/g, "%26");
        // // var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&type=1" + "&" + "MailDocId=" + MailDocId + "&" + "MailId=" + this._MemoId + "&" + "LoginUserId=" + this._LoginUserId + "&" + "IsConfidential=" + this.IsConfidential + "&" + "AnnouncementDocId=" + 0;
        // var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&" + "type=" + type;
        // var myWindow = window.open(myurl, url.toString());
        // myWindow.focus();
        let FileUrl;
        FileUrl = "https://yrglobaldocuments.blob.core.windows.net/documents/EP/";
        if (iscloud == false) {
            if (this.EmpNo_Autho == this.EmpNo_Res) {
                // window.open(FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + docName);
                FileUrl = (FileUrl + this.EmpNo_Res + "/" + this.projectCode + "/" + url1);
            }
            else if (this.EmpNo_Autho != this.EmpNo_Res) {
                FileUrl = (FileUrl + this.EmpNo_Res + "/" + this.projectCode + "/" + url1);
            }
            let name = "ArchiveView/" + this.projectCode;
            var rurl = document.baseURI + name;
            var encoder = new TextEncoder();
            let url = encoder.encode(FileUrl);
            let encodeduserid = encoder.encode(this.Current_user_ID.toString());
            filename = filename.replace(/#/g, "%23");
            filename = filename.replace(/&/g, "%26");
            var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&" + "submitby=" + submitby + "&" + "type=" + type;
            var myWindow = window.open(myurl, url.toString());
            myWindow.focus();
        }
        else if (iscloud == true) {
            let name = "ArchiveView/" + this.projectCode;
            var rurl = document.baseURI + name;
            var encoder = new TextEncoder();
            let url = encoder.encode(url1);
            let encodeduserid = encoder.encode(this.Current_user_ID.toString());
            filename = filename.replace(/#/g, "%23");
            filename = filename.replace(/&/g, "%26");
            var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&" + "submitby=" + submitby + "&" + "type=" + type;
            var myWindow = window.open(myurl, url.toString());
            myWindow.focus();
        }
    }
    btmspace_opn() {
        document.getElementById("btm-space").classList.remove("d-none");
    }
    close_space() {
        document.getElementById("btm-space").classList.add("d-none");
    }
    getapproval_actiondetails() {
        this.approvalObj.Project_Code = this.projectCode;
        this.approvalservice.GetAppovalandActionDetails(this.approvalObj).subscribe(data => {
            // console.log(data,"appact");
            if (data[0]['actiondetails'] != '[]' || data[0]['approvaldetails'] != '[]') {
                if (data[0]['actiondetails'] != '[]')
                    this.action_details = JSON.parse(data[0]['actiondetails']);
                if (data[0]['approvaldetails'] != '[]')
                    this.approve_details = JSON.parse(data[0]['approvaldetails']);
                // console.log(this.action_details,this.approve_details,"details");
            }
        });
    }
    close_info_Slide() {
        $('#Project_info_slider_bar').removeClass('open_sidebar_info');
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
        if (this._Urlid == '1') {
            this.router.navigate(["/backend/ProjectsSummary/"]);
        }
        else if (this._Urlid == '2') {
            this.BsService.bs_SelectedPortId.subscribe(c => { this.port_id = c; });
            // alert(this.port_id);
            this.router.navigate(["../portfolioprojects/" + this.port_id + "/"]);
        }
        else if (this._Urlid == '3') {
            this.router.navigate(["../ViewProjects/" + this.Mode]);
        }
        else if (this._Urlid == '4') {
            this.BsService.bs_SelectedPortId.subscribe(c => { this.port_id = c; });
            this.router.navigate(["../AddProjectsToPortfolio/" + this.port_id]);
        }
        else if (this._Urlid == '5') {
            this.router.navigate(["./backend/ToDoProjects/"]);
        }
        else if (this._Urlid == '6') {
            this.router.navigate(["Notifications"]);
        }
    }
}
ProjectInfoComponent.ɵfac = function ProjectInfoComponent_Factory(t) { return new (t || ProjectInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_8__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_9__.LinkService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](src_app_Services_approvals_service__WEBPACK_IMPORTED_MODULE_10__.ApprovalsService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_11__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_12__.BsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_13__.ProjectsSummaryComponent), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_portfolio_projects_portfolio_projects_component__WEBPACK_IMPORTED_MODULE_14__.PortfolioProjectsComponent), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_view_dashboard_projects_view_dashboard_projects_component__WEBPACK_IMPORTED_MODULE_15__.ViewDashboardProjectsComponent), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_16__.ToDoProjectsComponent), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_notification_notification_component__WEBPACK_IMPORTED_MODULE_17__.NotificationComponent), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_projects_add_projects_add_component__WEBPACK_IMPORTED_MODULE_18__.ProjectsAddComponent), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](src_app_Services_parameter_service__WEBPACK_IMPORTED_MODULE_19__.ParameterService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.ElementRef)); };
ProjectInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({ type: ProjectInfoComponent, selectors: [["app-project-info"]], inputs: { inputFromParent: "inputFromParent" }, decls: 5, vars: 4, consts: [["id", "ProjectInfoNew", 1, "kt-info-body"], ["class", "kt-info-box", 4, "ngFor", "ngForOf"], ["class", "kt-info-box mt-2", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "kt-info-box"], [1, "kt-info-box-tittle"], [1, "kt-title-icon"], ["width", "20px", "height", "20px", "viewBox", "0 0 48 48", "xmlns", "http://www.w3.org/2000/svg", "fill", "#ffffff", "stroke", "none"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["id", "Layer_2", "data-name", "Layer 2"], ["id", "invisible_box", "data-name", "invisible box"], ["width", "48", "height", "48", "fill", "none"], ["id", "Layer_7", "data-name", "Layer 7"], ["x", "33", "y", "4", "width", "10", "height", "40", "rx", "2"], ["x", "19", "y", "19", "width", "10", "height", "25", "rx", "2"], ["x", "5", "y", "33", "width", "10", "height", "11", "rx", "2"], [1, "kt-project-info-body", "pl-3"], [1, "d-flex", "justify-content-between"], [1, "kt-project-name"], [1, "kt-project-type"], [1, "Kt-Pd-Status", "Core_task"], [1, "kt-project-desc"], [1, "kt-info-box", "mt-2"], ["width", "20px", "height", "20px", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "stroke", "#ffffff"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM10.25 11C10.25 10.4477 10.6977 10 11.25 10H12.75C13.3023 10 13.75 10.4477 13.75 11V18C13.75 18.5523 13.3023 19 12.75 19H11.25C10.6977 19 10.25 18.5523 10.25 18V11ZM14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9C13.1046 9 14 8.10457 14 7Z", "fill", "#ffffff"], [1, "kt-project-type", "curser-pointer", 3, "click"], [1, "Kt-Pd-Status", "More_info"], [1, "row", "mt-3", "px-3"], [1, "col", "text-center"], [1, "kt-info-lable-v"], [1, "kt-info-lable-icon"], ["width", "24px", "height", "24px", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", "id", "handshake"], ["fill", "#898989", "data-name", "Handshake"], ["d", "M10.17 38a1.007 1.007 0 0 1-.458-.11L2.09 33.964a1 1 0 0 1-.434-1.342l8.954-17.686a1 1 0 0 1 1.347-.439l7.251 3.7a1 1 0 0 1 .448 1.324l-8.584 17.908a1.006 1.006 0 0 1-.583.516 1.028 1.028 0 0 1-.319.055Zm-6.281-5.36 5.824 3 7.718-16.1-5.49-2.8Z"], ["d", "M20.53 24.084a1 1 0 0 1-.491-.129l-2.906-1.637a1 1 0 1 1 .981-1.743l2.4 1.351c.937-.568 2.965-1.791 4.263-2.524 2.119-1.2 3.611-1.035 5.324.588a1 1 0 0 1-1.375 1.452c-1.064-1.008-1.618-1.06-2.965-.3-1.668.943-4.677 2.777-4.708 2.8a1 1 0 0 1-.523.142Z"], ["d", "M46.837 41.483a3.827 3.827 0 0 1-2.072-.547c-.92-.614-4.968-4.584-5.77-5.373a1 1 0 0 1 1.4-1.426c1.8 1.777 4.888 4.742 5.477 5.135a2.328 2.328 0 0 0 2.364-.244 1.422 1.422 0 0 0-.04-2.182c-1.022-1.15-5.268-5.235-6.2-6.131a66.293 66.293 0 0 1-9.432-4.322l-1.052.688a4.582 4.582 0 0 1-1.771 2.731 2.759 2.759 0 0 1-2.278.532 3.475 3.475 0 0 1-2.409-1.444 4.74 4.74 0 0 1-.166-3.617c.853-3.414 2.237-4.293 4.152-5.509l.421-.269c2.11-1.355 3.921-2.077 5.909-1.182 1.236.557 5.623 2.256 6.869 2.738l4.176-1.369a1 1 0 0 1 .623 1.9l-4.515 1.48a1.007 1.007 0 0 1-.67-.016c-.237-.092-5.815-2.238-7.3-2.908-.891-.4-1.832-.359-4.008 1.039l-.43.275c-1.747 1.109-2.624 1.667-3.284 4.306-.338 1.352-.182 1.9-.059 2.1.158.264.524.371 1.107.517a.856.856 0 0 0 .706-.2A2.587 2.587 0 0 0 29.6 26.4a1 1 0 0 1 .448-.75l1.925-1.259A1 1 0 0 1 33 24.353c.068.037 6.81 3.724 9.763 4.5a1.018 1.018 0 0 1 .438.245c.216.207 5.3 5.075 6.494 6.422a3.4 3.4 0 0 1-.04 4.924 4.013 4.013 0 0 1-2.818 1.039Z"], ["d", "M48.947 37.182a1 1 0 0 1-.405-1.914l3.508-1.554a1 1 0 1 1 .81 1.828L49.351 37.1a1 1 0 0 1-.404.082Z"], ["d", "M53.534 38a1 1 0 0 1-.927-.626l-7.548-18.726a1 1 0 0 1 .59-1.316l8.066-2.886a1 1 0 0 1 1.266.572l7.4 18.574a1 1 0 0 1-.571 1.3l-7.918 3.038a1 1 0 0 1-.358.07zM47.3 18.864l6.791 16.847 6.054-2.32-6.665-16.737zm-4.968 25.652a3.386 3.386 0 0 1-2.264-.779c-1.339-1.19-4.781-4.63-4.927-4.776a1 1 0 0 1 1.414-1.414c.035.035 3.547 3.545 4.841 4.7a1.951 1.951 0 0 0 1.8.12A2.709 2.709 0 0 0 45 40.208a1 1 0 0 1 1.971.34 4.712 4.712 0 0 1-3.11 3.7 4.654 4.654 0 0 1-1.529.268z"], ["d", "M37.678 46.94a3.164 3.164 0 0 1-2.241-.8l-3.552-3.552 1.415-1.415 3.552 3.552a1.8 1.8 0 0 0 1.457.136 2.636 2.636 0 0 0 1.918-1.879 1 1 0 1 1 1.912.586 4.657 4.657 0 0 1-4.46 3.372Z"], ["d", "M33.866 49.611a3.632 3.632 0 0 1-2.269-.735 298.882 298.882 0 0 0-2.715-2.148 1 1 0 1 1 1.231-1.576s1.249.975 2.734 2.163a2.127 2.127 0 0 0 2.1.043 1.559 1.559 0 0 0 .942-1.493 1 1 0 0 1 .969-1.03 1.013 1.013 0 0 1 1.03.97 3.558 3.558 0 0 1-2.048 3.343 4.461 4.461 0 0 1-1.974.463Z"], ["d", "M26.372 49.148a2.5 2.5 0 0 1-.947-.19A4.416 4.416 0 0 1 23.5 47.12a3.151 3.151 0 0 1-2.083-.313 4.825 4.825 0 0 1-2.086-3.088 1 1 0 0 1 .137-.741c.813-1.268 2.039-3.239 2.222-3.65A2.546 2.546 0 0 1 23.35 38a3.358 3.358 0 0 1 2.842.544 2.98 2.98 0 0 1 1.324 2.742 3.329 3.329 0 0 1 2.46 1.251 3.59 3.59 0 0 1 .383 3.067 5.949 5.949 0 0 1-3 3.344 2.534 2.534 0 0 1-.987.2Zm-1.188-3.121c.314.531.875 1.293 1.4 1.074a3.949 3.949 0 0 0 1.882-2.139 1.621 1.621 0 0 0-.1-1.247 1.585 1.585 0 0 0-1.154-.452Zm-3.791-2.35a2.526 2.526 0 0 0 .977 1.372 1.214 1.214 0 0 0 .963.063l2.135-3.66a1.065 1.065 0 0 0-.412-1.264 1.4 1.4 0 0 0-1.1-.281.751.751 0 0 0-.44.243c-.264.585-1.534 2.601-2.123 3.527Z"], ["d", "M18.729 45.239a2.451 2.451 0 0 1-.7-.1c-1.713-.515-2.384-2.733-2.455-2.984a1 1 0 0 1 .093-.765 41.481 41.481 0 0 1 2.815-4.26 3.394 3.394 0 0 1 4.494-.807c.944.655 1.636 2.08.478 3.942a1 1 0 1 1-1.7-1.055c.257-.415.48-.966.081-1.243a1.384 1.384 0 0 0-1.769.382 39.431 39.431 0 0 0-2.435 3.64c.219.523.592 1.122.973 1.235.337.1.8-.246 1.051-.46a1 1 0 0 1 1.308 1.514 3.41 3.41 0 0 1-2.234.961Z"], ["d", "M16.534 42.88a1 1 0 0 1-.323-.054c-.169-.057-4.155-1.45-4.155-4.572a1.012 1.012 0 0 1 .048-.309 11.688 11.688 0 0 1 1.473-2.8 3.105 3.105 0 0 1 3.848-.744 2.589 2.589 0 0 1 1.4 3.207c-.654 2.106-1.325 4.513-1.332 4.538a1 1 0 0 1-.963.731Zm-2.47-4.471c.1.936 1.058 1.648 1.826 2.075.261-.912.648-2.239 1.028-3.466a.6.6 0 0 0-.376-.82 1.2 1.2 0 0 0-1.329.1 10.356 10.356 0 0 0-1.149 2.111Z"], ["d", "M13.877 37.529a1 1 0 0 1-.564-.175l-2.623-1.8a1 1 0 0 1 1.13-1.651l2.623 1.8a1 1 0 0 1-.566 1.826Z"], [1, "kt-info-data-v"], ["width", "24px", "height", "24px", "xmlns", "http://www.w3.org/2000/svg", "fill", "#898989", "viewBox", "0 0 101 101", "id", "user"], ["fill", "#898989", "d", "M50.4 54.5c10.1 0 18.2-8.2 18.2-18.2S60.5 18 50.4 18s-18.2 8.2-18.2 18.2 8.1 18.3 18.2 18.3zm0-31.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4S37 43.7 37 36.3s6-13.5 13.4-13.5zM18.8 83h63.4c1.3 0 2.4-1.1 2.4-2.4 0-12.6-10.3-22.9-22.9-22.9H39.3c-12.6 0-22.9 10.3-22.9 22.9 0 1.3 1.1 2.4 2.4 2.4zm20.5-20.5h22.4c9.2 0 16.7 6.8 17.9 15.7H21.4c1.2-8.9 8.7-15.7 17.9-15.7z"], [1, "kt-info-data-v", "bg-light-shade"], ["width", "24px", "height", "24px", "xmlns", "http://www.w3.org/2000/svg", "fill", "#898989", "enable-background", "new 0 0 24 24", "viewBox", "0 0 24 24", "id", "office-bag"], ["d", "M19.5,6H16V5c-0.0014038-1.1040039-0.8959961-1.9985962-2-2h-4C8.8959961,3.0014038,8.0014038,3.8959961,8,5v1H4.5C3.119812,6.0012817,2.0012817,7.119812,2,8.5v10c0.0012817,1.380188,1.119812,2.4987183,2.5,2.5h15c1.380188-0.0012817,2.4987183-1.119812,2.5-2.5v-10C21.9987183,7.119812,20.880188,6.0012817,19.5,6z M9,5c0.0003662-0.552124,0.447876-0.9996338,1-1h4c0.552124,0.0003662,0.9996338,0.447876,1,1v1H9V5z M21,18.5c-0.0009155,0.828064-0.671936,1.4990845-1.5,1.5h-15c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5v-6.4726562l5.8417969,1.9472656C8.8928833,13.991333,8.9462891,13.999939,9,14h6c0.053772-0.000061,0.1071777-0.008667,0.1582642-0.0253906L21,12.0273438V18.5z M21,11.0059204c-0.0525513,0-0.1055908,0.0019531-0.1581421,0.0194702L14.9190063,13H9.0810547l-5.9228516-1.9746094C3.1056519,11.0078735,3.0525513,11.0059204,3,11.0059204V8.5C3.0009155,7.671936,3.671936,7.0009155,4.5,7h15c0.828064,0.0009155,1.4990845,0.671936,1.5,1.5V11.0059204z"], ["class", "kt-info-data-v", 4, "ngIf"], ["width", "24px", "height", "24px", "xmlns", "http://www.w3.org/2000/svg", "fill", "#898989", "viewBox", "0 0 64 64", "id", "money"], ["d", "M32,46A10,10,0,1,0,22,36,10.011,10.011,0,0,0,32,46Zm0-18a8,8,0,1,1-8,8A8.009,8.009,0,0,1,32,28Z"], ["d", "M32,39a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,2,2.816V42a1,1,0,0,0,2,0V40.816A2.993,2.993,0,0,0,32,35a1,1,0,1,1,1-1,1,1,0,0,0,2,0,3,3,0,0,0-2-2.816V30a1,1,0,0,0-2,0v1.184A2.993,2.993,0,0,0,32,37a1,1,0,0,1,0,2Z"], ["d", "M59.218,36h-6.48a27.909,27.909,0,0,0-8.3-12.82l-5.556-4.862a2.974,2.974,0,0,0-1.092-5.2l5.043-7.564a1,1,0,0,0-.067-1.2c-.025-.028-.057-.045-.084-.071l.008-.008A8.36,8.36,0,0,0,37,2a8.223,8.223,0,0,0-4.671,1.466C29.224,2.108,26,.747,21.4,4.2a1,1,0,0,0-.232,1.355l5.043,7.564a2.967,2.967,0,0,0-1.538,4.751L19.94,22.288l1.366,1.461L26.394,19h10.23l6.5,5.685A25.925,25.925,0,0,1,50.641,36H46.782A2.785,2.785,0,0,0,44,38.782v2.436A2.756,2.756,0,0,0,44.664,43,2.756,2.756,0,0,0,44,44.782v2.436a2.765,2.765,0,0,0,.15.861,2.783,2.783,0,0,0-2.15,2.7v2.436a2.783,2.783,0,0,0,2.15,2.7,2.765,2.765,0,0,0-.15.861v2.436a2.9,2.9,0,0,0,.035.35A10.982,10.982,0,0,1,41,60h-.126A2.74,2.74,0,0,0,41,59.218V56.782A2.756,2.756,0,0,0,40.336,55,2.756,2.756,0,0,0,41,53.218V50.782A2.785,2.785,0,0,0,38.218,48H25.782A2.785,2.785,0,0,0,23,50.782v2.436A2.756,2.756,0,0,0,23.664,55,2.756,2.756,0,0,0,23,56.782v2.436a2.74,2.74,0,0,0,.126.782H23a10.982,10.982,0,0,1-3.035-.432,2.9,2.9,0,0,0,.035-.35V56.782a2.765,2.765,0,0,0-.15-.861,2.783,2.783,0,0,0,2.15-2.7V50.782a2.783,2.783,0,0,0-2.15-2.7,2.765,2.765,0,0,0,.15-.861V44.782A2.756,2.756,0,0,0,19.336,43,2.756,2.756,0,0,0,20,41.218V38.782A2.785,2.785,0,0,0,17.218,36h-4.03A26,26,0,0,1,19.7,25.26L18.3,23.839A28.007,28.007,0,0,0,11.1,36H4.782A2.785,2.785,0,0,0,2,38.782v2.436A2.756,2.756,0,0,0,2.664,43,2.756,2.756,0,0,0,2,44.782v2.436a2.783,2.783,0,0,0,2.15,2.7,2.765,2.765,0,0,0-.15.861v2.436a2.765,2.765,0,0,0,.15.861A2.783,2.783,0,0,0,2,56.782v2.436A2.785,2.785,0,0,0,4.782,62H17.218a2.752,2.752,0,0,0,1.759-.645A12.964,12.964,0,0,0,23,62H41a12.964,12.964,0,0,0,4.023-.645A2.752,2.752,0,0,0,46.782,62H59.218A2.785,2.785,0,0,0,62,59.218V56.782a2.783,2.783,0,0,0-2.15-2.7,2.765,2.765,0,0,0,.15-.861V50.782a2.765,2.765,0,0,0-.15-.861,2.783,2.783,0,0,0,2.15-2.7V44.782A2.756,2.756,0,0,0,61.336,43,2.756,2.756,0,0,0,62,41.218V38.782A2.785,2.785,0,0,0,59.218,36ZM39.844,4.7a8.592,8.592,0,0,1-5.115-.262A6.139,6.139,0,0,1,37,4,6.492,6.492,0,0,1,39.844,4.7Zm-8.233.638c2.249.985,4.732,2.075,7.983,1.472L35.465,13h-6.93l-5.16-7.74C26.649,3.162,28.862,4.13,31.611,5.335ZM27,17a1,1,0,0,1,0-2H37a1,1,0,0,1,0,2ZM20,53.218a.783.783,0,0,1-.782.782H6.782A.783.783,0,0,1,6,53.218V50.782A.783.783,0,0,1,6.782,50H8v2h2V50h2v2h2V50h2v2h2V50h1.218a.783.783,0,0,1,.782.782ZM4,38.782A.783.783,0,0,1,4.782,38H6v2H8V38h2v2h2V38h2v2h2V38h1.218a.783.783,0,0,1,.782.782v2.436a.783.783,0,0,1-.782.782H4.782A.783.783,0,0,1,4,41.218Zm0,6A.783.783,0,0,1,4.782,44H6v2H8V44h2v2h2V44h2v2h2V44h1.218a.783.783,0,0,1,.782.782v2.436a.783.783,0,0,1-.782.782H4.782A.783.783,0,0,1,4,47.218ZM18,59.218a.783.783,0,0,1-.782.782H4.782A.783.783,0,0,1,4,59.218V56.782A.783.783,0,0,1,4.782,56H6v2H8V56h2v2h2V56h2v2h2V56h1.218a.783.783,0,0,1,.782.782Zm7-8.436A.783.783,0,0,1,25.782,50H27v2h2V50h2v2h2V50h2v2h2V50h1.218a.783.783,0,0,1,.782.782v2.436a.783.783,0,0,1-.782.782H25.782A.783.783,0,0,1,25,53.218ZM25.782,60A.783.783,0,0,1,25,59.218V56.782A.783.783,0,0,1,25.782,56H27v2h2V56h2v2h2V56h2v2h2V56h1.218a.783.783,0,0,1,.782.782v2.436a.783.783,0,0,1-.782.782ZM46,38.782A.783.783,0,0,1,46.782,38H48v2h2V38h2v2h2V38h2v2h2V38h1.218a.783.783,0,0,1,.782.782v2.436a.783.783,0,0,1-.782.782H46.782A.783.783,0,0,1,46,41.218Zm-2,12A.783.783,0,0,1,44.782,50H46v2h2V50h2v2h2V50h2v2h2V50h1.218a.783.783,0,0,1,.782.782v2.436a.783.783,0,0,1-.782.782H44.782A.783.783,0,0,1,44,53.218Zm16,8.436a.783.783,0,0,1-.782.782H46.782A.783.783,0,0,1,46,59.218V56.782A.783.783,0,0,1,46.782,56H48v2h2V56h2v2h2V56h2v2h2V56h1.218a.783.783,0,0,1,.782.782Zm0-12a.783.783,0,0,1-.782.782H46.782A.783.783,0,0,1,46,47.218V44.782A.783.783,0,0,1,46.782,44H48v2h2V44h2v2h2V44h2v2h2V44h1.218a.783.783,0,0,1,.782.782Z"], ["class", "kt-info-data-v bg-light-shade", 4, "ngIf"], ["width", "24px", "height", "24px", "xmlns", "http://www.w3.org/2000/svg", "fill", "#898989", "viewBox", "0 0 48 48", "id", "international-client"], ["fill", "#0c0c0c", "d", "M24 0C10.767 0 0 10.767 0 24s10.767 24 24 24 24-10.767 24-24S37.233 0 24 0zm0 47C11.318 47 1 36.682 1 24S11.318 1 24 1s23 10.318 23 23-10.318 23-23 23z"], ["fill", "#0c0c0c", "d", "M10.529 36.494a.499.499 0 1 0-.738.674l.362.396c.208.229.324.525.324.835V39.5a.5.5 0 0 0 1 0v-1.101c0-.56-.208-1.096-.585-1.509l-.363-.396zm8.804-.402a.5.5 0 0 0-.033.706c.237.26.368.597.368.948V39.5a.5.5 0 0 0 1 0v-1.754c0-.602-.223-1.177-.628-1.622a.5.5 0 0 0-.707-.032zm8.628.032a2.4 2.4 0 0 0-.629 1.622V39.5a.5.5 0 0 0 1 0v-1.754c0-.352.131-.688.368-.948a.499.499 0 0 0-.032-.706.497.497 0 0 0-.707.032zm9.51.37-.363.396a2.234 2.234 0 0 0-.584 1.509V39.5a.5.5 0 0 0 1 0v-1.101c0-.31.115-.606.323-.835l.362-.396a.5.5 0 1 0-.738-.674z"], ["fill", "#0c0c0c", "d", "M38.378 34.064 36 33.172V32.02a2.983 2.983 0 0 0 .999-2.219v-1.169l.581-2.13c.082-.453-.019-.911-.284-1.288s-.662-.627-1.116-.703l-2.85-.475a1.68 1.68 0 0 0-1.91 1.263 1.473 1.473 0 0 0-.7.479c-.282.349-.39.8-.278 1.303L31 28.642v1.16c0 .884.391 1.671 1.001 2.221v1.149l-2.378.893c-.04.015-.074.038-.113.054l-.834-.519a1.676 1.676 0 0 0 .941-1.783 28.909 28.909 0 0 1-.364-4.563V25.597a5.222 5.222 0 0 0-5.216-5.216 5.222 5.222 0 0 0-5.216 5.216v1.657c0 1.521-.123 3.057-.364 4.563a1.656 1.656 0 0 0 .903 1.76l-.869.542c-.038-.016-.073-.039-.112-.054L16 33.172V32.02a2.983 2.983 0 0 0 .999-2.219v-1.169l.581-2.13c.082-.453-.019-.911-.284-1.288s-.662-.627-1.116-.703l-2.85-.475a1.682 1.682 0 0 0-1.91 1.263 1.473 1.473 0 0 0-.7.479c-.282.349-.39.8-.278 1.303L11 28.642v1.16c0 .884.391 1.671 1.001 2.221v1.149l-2.378.893A2.51 2.51 0 0 0 8 36.405V39.5a.5.5 0 0 0 1 0v-3.095c0-.622.391-1.186.974-1.405l.998-.374a4 4 0 0 0 3.029 1.393 4 4 0 0 0 3.028-1.393l.615.231A2.82 2.82 0 0 0 17 36.634V39.5a.5.5 0 0 0 1 0v-2.866c0-.646.327-1.235.875-1.576l2.224-1.386c.756.789 1.798 1.269 2.9 1.269 1.102 0 2.143-.48 2.899-1.268l2.225 1.385c.549.341.877.93.877 1.577V39.5a.5.5 0 0 0 1 0v-2.865c0-.665-.242-1.279-.644-1.778l.615-.231A4 4 0 0 0 34 36.019a4 4 0 0 0 3.028-1.393l.998.374c.583.219.974.783.974 1.405V39.5a.5.5 0 0 0 1 0v-3.095a2.512 2.512 0 0 0-1.622-2.341zm-6.881-7.658a.478.478 0 0 1 .372-.177c.276 0 .5-.256.5-.532a.69.69 0 0 1 .797-.674l2.85.475a.702.702 0 0 1 .463.292c.11.156.152.347.127.492l-.302 1.104-.085-.124a.499.499 0 0 0-.413-.218H32.18a.499.499 0 0 0-.416.223l-.129.192-.234-.65a.476.476 0 0 1 .096-.403zm.502 2.307.448-.67h3.095l.457.669v1.09a1.99 1.99 0 0 1-1.364 1.886l-.025.008a1.988 1.988 0 0 1-1.808-.306c-.003-.002-.006-.001-.008-.003a1.991 1.991 0 0 1-.795-1.586v-1.088zm-10.77-.94v-.631c0-.768.446-1.453 1.113-1.807 1.212.879 2.613 1.36 4.069 1.36h.001l.227.007c.04 0 .077.01.116.013v1.058c0 1.523-1.24 2.764-2.763 2.764s-2.763-1.24-2.763-2.764zm5.038 4.327v-1.348a3.746 3.746 0 0 0 1.489-2.979v-.565c.305.328.497.786.497 1.295 0 .082.024.156.059.224.054 1.089.145 2.177.318 3.248a.68.68 0 0 1-.671.787h-.629l-1.063-.662zm-6.153.662a.68.68 0 0 1-.67-.787c.25-1.558.376-3.146.376-4.721v-1.657c0-2.324 1.891-4.216 4.216-4.216s4.216 1.892 4.216 4.216v.717a2.534 2.534 0 0 0-.752-.445.482.482 0 0 0-.176-.059 2.363 2.363 0 0 0-.668-.107l-.227-.007c-1.316 0-2.573-.441-3.646-1.264a.496.496 0 0 0-.562-.162 3.076 3.076 0 0 0-1.976 2.672c-.004.027-.016.051-.016.078v.755c0 1.222.595 2.299 1.5 2.987V32.1l-1.062.662h-.553zm-8.617-6.356a.478.478 0 0 1 .372-.177c.276 0 .5-.256.5-.532a.69.69 0 0 1 .797-.674l2.85.475a.702.702 0 0 1 .463.292c.11.156.152.347.127.492l-.302 1.104-.085-.124a.499.499 0 0 0-.413-.218H12.18a.499.499 0 0 0-.416.223l-.129.192-.234-.65a.476.476 0 0 1 .096-.403zm.502 2.307.448-.67h3.095l.457.669v1.09a1.99 1.99 0 0 1-.798 1.588l-.003.001a1.987 1.987 0 0 1-.568.299l-.015.005c-.398.13-.828.131-1.227.002l-.022-.007a1.99 1.99 0 0 1-.565-.297l-.004-.001a1.992 1.992 0 0 1-.799-1.589v-1.09zM14 35.019a3 3 0 0 1-2.006-.776l.682-.256a.5.5 0 0 0 .324-.468v-.892c.062.022.127.032.19.05.088.025.174.053.265.07.135.025.272.035.41.041.045.002.088.014.134.014.044 0 .085-.011.129-.013.14-.006.279-.017.416-.042.091-.017.177-.045.265-.07.064-.018.13-.028.192-.051v.893a.5.5 0 0 0 .324.468l.681.256a3.003 3.003 0 0 1-2.006.776zm10-1.079c-.76 0-1.484-.301-2.039-.806l.533-.332a.491.491 0 0 0 .226-.425h.009v-1.075a3.71 3.71 0 0 0 1.263.234c.449 0 .874-.092 1.274-.237v1.078h.01c0 .167.075.33.227.425l.535.333A3.04 3.04 0 0 1 24 33.94zm10 1.079a3 3 0 0 1-2.006-.776l.682-.256a.5.5 0 0 0 .324-.468v-.893c.056.02.116.029.173.046.094.027.186.057.284.075.132.024.266.034.4.04.048.002.093.014.141.014.042 0 .081-.011.122-.012.143-.006.285-.017.426-.043.084-.016.164-.042.246-.065.069-.019.14-.03.208-.055v.892a.5.5 0 0 0 .324.468l.682.256a2.999 2.999 0 0 1-2.006.777z"], ["fill", "#0c0c0c", "d", "M24 8C15.178 8 8 15.178 8 24c0 2.362.536 4.738 1.551 6.871a.5.5 0 0 0 .903-.43A15.086 15.086 0 0 1 9 24c0-1.067 1.549-2.195 4.207-3.055-.068.5-.12 1.007-.154 1.522a.5.5 0 0 0 .466.532.493.493 0 0 0 .532-.466c.043-.649.124-1.28.222-1.902 1.406-.377 3.057-.681 4.9-.879-.034.411-.063.823-.086 1.235a.5.5 0 0 0 .471.527l.029.001a.5.5 0 0 0 .499-.472c.027-.473.06-.935.098-1.384a46.1 46.1 0 0 1 3.818-.16c1.342 0 2.612.06 3.818.16.036.421.067.851.093 1.293a.49.49 0 0 0 .528.47.5.5 0 0 0 .47-.528c-.022-.381-.05-.762-.081-1.142 1.842.198 3.493.502 4.899.879.098.622.179 1.253.222 1.901a.497.497 0 0 0 .497.468l.034-.001a.501.501 0 0 0 .466-.532 22.08 22.08 0 0 0-.154-1.522C37.451 21.805 39 22.933 39 24c0 2.21-.5 4.434-1.447 6.43a.5.5 0 1 0 .903.428A16.103 16.103 0 0 0 40 24c0-8.822-7.178-16-16-16zm0 1c.909 0 1.921 1.487 2.7 4.169A23.144 23.144 0 0 0 24 13c-.922 0-1.821.066-2.701.169C22.078 10.486 23.089 9 24 9zm-3.774 4.322c-1.34.224-2.621.554-3.806.994 1.409-2.466 3.327-4.246 5.482-4.96-.676.946-1.235 2.326-1.676 3.966zm5.87-3.967c2.155.713 4.075 2.494 5.484 4.961a20.939 20.939 0 0 0-3.807-.995c-.442-1.639-1.001-3.02-1.677-3.966zm-7.274.585c-1.523 1.203-2.836 2.913-3.831 4.976-2.071.974-3.792 2.272-5.009 3.789a15.06 15.06 0 0 1 8.84-8.765zM9.43 21.664c.763-2.115 2.525-3.971 4.949-5.326a20.413 20.413 0 0 0-.989 3.525c-1.636.484-3.011 1.086-3.96 1.801zm5.033-2.094a18.87 18.87 0 0 1 1.269-3.905 19.187 19.187 0 0 1 4.235-1.287 37.984 37.984 0 0 0-.699 4.373c-1.706.18-3.337.455-4.805.819zM24 18.5c-1.245 0-2.494.057-3.719.158.18-1.689.438-3.181.746-4.459a22.198 22.198 0 0 1 5.945 0c.309 1.278.567 2.771.747 4.459A45.407 45.407 0 0 0 24 18.5zm4.733.251a38.014 38.014 0 0 0-.7-4.373c1.522.284 2.95.718 4.236 1.287a18.87 18.87 0 0 1 1.269 3.905 35.836 35.836 0 0 0-4.805-.819zm5.878 1.112a20.503 20.503 0 0 0-.989-3.525c2.423 1.355 4.185 3.211 4.948 5.326-.949-.715-2.324-1.317-3.959-1.801zm-1.602-4.946c-.994-2.063-2.308-3.773-3.831-4.976a15.05 15.05 0 0 1 8.839 8.765c-1.217-1.517-2.938-2.816-5.008-3.789z"], [1, "kt-clinet-img-x"], [1, "kt-client-icon"], ["src", "https://www.drcafe.com/assets/images/DC_new_Logo_new.png"], ["width", "20px", "height", "20px", "viewBox", "0 0 512 512", "id", "svg2793", "version", "1.1", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "cc", "http://creativecommons.org/ns#", 0, "xmlns", "dc", "http://purl.org/dc/elements/1.1/", 0, "xmlns", "rdf", "http://www.w3.org/1999/02/22-rdf-syntax-ns#", 0, "xmlns", "serif", "http://www.serif.com/", 0, "xmlns", "svg", "http://www.w3.org/2000/svg", "fill", "#ffffff", "stroke", "#ffffff", 2, "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "2"], ["id", "defs2797"], ["id", "_09-Round-Chart", "transform", "translate(-3072,-1024)", 2, "display", "inline"], ["id", "g2606", "transform", "translate(3282.77,1327.86)"], ["d", "M 0,175.522 C -89.87,157.49 -160.117,87.247 -178.15,-2.619 h 91.441 c 6.863,19.997 18.253,38.267 33.348,53.362 C -38.267,65.838 -19.997,77.227 0,84.09 Z M 18.637,58.348 C -20.648,48.532 -51.15,18.03 -60.967,-21.255 c -1.669,-6.678 -7.669,-11.364 -14.553,-11.364 h -120.25 c -4.3,0 -8.394,1.846 -11.242,5.071 -2.847,3.222 -4.174,7.513 -3.643,11.781 7.022,56.445 33.152,109.793 73.578,150.217 40.426,40.426 93.777,66.554 150.225,73.576 0.619,0.078 1.237,0.115 1.853,0.115 3.636,0 7.173,-1.322 9.93,-3.758 C 28.154,201.536 30,197.442 30,193.141 V 72.901 C 30,66.018 25.314,60.018 18.637,58.348", "id", "path2604", 2, "fill-rule", "nonzero"], ["id", "g2610", "transform", "translate(3373.23,1327.86)"], ["d", "M 0,175.522 V 84.088 C 19.996,77.221 38.268,65.83 53.362,50.735 68.456,35.641 79.846,17.374 86.709,-2.619 h 91.44 C 160.109,87.248 89.863,157.49 0,175.522 M 195.771,-32.619 H 75.521 c -6.884,0 -12.883,4.686 -14.553,11.364 C 51.151,18.02 20.647,48.524 -18.64,58.35 -25.316,60.02 -30,66.019 -30,72.901 v 120.24 c 0,4.301 1.846,8.395 5.069,11.242 2.757,2.436 6.294,3.758 9.93,3.758 0.616,0 1.234,-0.038 1.853,-0.115 56.444,-7.022 109.793,-33.15 150.218,-73.576 40.426,-40.424 66.559,-93.772 73.585,-150.215 0.532,-4.269 -0.795,-8.56 -3.642,-11.783 -2.847,-3.225 -6.942,-5.071 -11.242,-5.071", "id", "path2608", 2, "fill-rule", "nonzero"], ["id", "g2614", "transform", "translate(3282.77,1140.29)"], ["d", "m 0,7.771 c -20.002,6.866 -38.273,18.258 -53.369,33.354 -15.094,15.093 -26.482,33.361 -33.341,53.353 h -91.44 C -160.118,4.617 -89.871,-65.629 0,-83.67 Z m 24.93,-120.305 c -3.224,-2.847 -7.508,-4.173 -11.784,-3.642 -56.444,7.026 -109.793,33.159 -150.219,73.584 -40.429,40.427 -66.561,93.775 -73.582,150.218 -0.531,4.269 0.796,8.559 3.643,11.783 2.848,3.223 6.942,5.069 11.242,5.069 h 120.25 c 6.885,0 12.885,-4.686 14.553,-11.365 C -51.159,73.837 -20.656,43.336 18.639,33.51 25.316,31.841 30,25.841 30,18.959 v -120.251 c 0,-4.3 -1.847,-8.395 -5.07,-11.242", "id", "path2612", 2, "fill-rule", "nonzero"], ["id", "g2618", "transform", "translate(3373.23,1231.74)"], ["d", "m 0,-175.115 c 89.872,18.04 160.118,88.285 178.151,178.148 H 86.71 C 79.847,-16.963 68.457,-35.232 53.362,-50.328 38.268,-65.423 19.997,-76.812 0,-83.676 Z m -18.637,117.182 c 39.286,9.816 69.788,40.318 79.605,79.603 1.669,6.678 7.669,11.363 14.553,11.363 h 120.25 c 4.3,0 8.394,-1.845 11.242,-5.069 2.847,-3.224 4.174,-7.514 3.643,-11.782 -7.021,-56.443 -33.152,-109.793 -73.578,-150.219 -40.425,-40.425 -93.776,-66.557 -150.225,-73.584 -4.258,-0.527 -8.559,0.795 -11.783,3.643 -3.223,2.846 -5.07,6.941 -5.07,11.242 v 120.25 c 0,6.884 4.686,12.884 11.363,14.553", "id", "path2616", 2, "fill-rule", "nonzero"], ["class", "Kt-Pd-Status Delay", 4, "ngIf"], ["class", "Kt-Pd-Status", 3, "ngClass", 4, "ngIf"], [1, "row", "mt-3", "align-items-center", "px-3"], [1, "col-lg-11"], [1, "row"], [1, "kt-project-sts-data"], ["class", "kt-project-sts-data", 4, "ngIf"], ["class", "col-lg-12 mt-4", 4, "ngIf"], ["class", "col-lg-6 text-center mt-4", 4, "ngIf"], ["class", "col text-center mt-4", 4, "ngIf"], ["class", "col-lg-1 text-center", 4, "ngIf"], [1, "Kt-Pd-Status", "Delay"], [1, "Kt-Pd-Status", 3, "ngClass"], [1, "col-lg-12", "mt-4"], [1, "progress", "kt-projcect-progress", "bar"], ["class", "progress-bar UnderApproval", "role", "progressbar", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 3, "ngStyle", 4, "ngIf"], ["class", "progress-bar bg-inprogress", "role", "progressbar", "aria-valuenow", "15", "aria-valuemin", "0", "aria-valuemax", "100", 3, "ngStyle", 4, "ngIf"], ["class", "progress-bar bg-delay", "role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 3, "ngStyle", 4, "ngIf"], ["class", "progress-bar NewProjectRejected", "role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 3, "ngStyle", 4, "ngIf"], ["class", "progress-bar CompletionUnderApproval", "role", "progressbar", "aria-valuenow", "15", "aria-valuemin", "0", "aria-valuemax", "100", 3, "ngStyle", 4, "ngIf"], ["class", "progress-bar CompletionUnderApproval", "role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 3, "ngStyle", 4, "ngIf"], ["class", "progress-bar bg-done", "role", "progressbar", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 3, "ngStyle", 4, "ngIf"], ["role", "progressbar", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "UnderApproval", 3, "ngStyle"], ["role", "progressbar", "aria-valuenow", "15", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-inprogress", 3, "ngStyle"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-delay", 3, "ngStyle"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "NewProjectRejected", 3, "ngStyle"], ["role", "progressbar", "aria-valuenow", "15", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "CompletionUnderApproval", 3, "ngStyle"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "CompletionUnderApproval", 3, "ngStyle"], ["role", "progressbar", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-done", 3, "ngStyle"], [1, "col-lg-6", "text-center", "mt-4"], [1, "kt-prg-bar-info"], [1, "col", "text-center", "mt-4"], [1, "col-lg-1", "text-center"], [1, "kt-prg-bar-info", "kt-total-prg-vl", "mt-4"], [1, "kt-info-box", "mt-2", "border-0"], ["width", "20px", "height", "20px", "viewBox", "0 0 32 32", "enable-background", "new 0 0 32 32", "id", "_x3C_Layer_x3E_", "version", "1.1", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "fill", "#000000", "stroke", "#000000"], ["id", "Check_x2C__click_x2C__decision_x2C__hand_x2C__choice_x2C__approval"], ["id", "XMLID_3788_"], ["id", "TDD_testing_x2C__code_coding_laptop_6_"], ["id", "XMLID_3861_"], ["d", " M13.89,26.034l-1.4-1.244c-0.7-0.63-1.24-1.41-1.58-2.29L8.9,16.95c-0.17-0.47,0.05-0.99,0.5-1.2c0.24-0.11,0.48-0.16,0.73-0.16 c0.63,0,1.24,0.351,1.55,0.95l1.84,3.7c0.62-0.46,0.98-1.19,0.98-1.95V6.5C14.5,5.67,15.17,5,16,5s1.5,0.67,1.5,1.5v8 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5V15c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5v1c0-0.83,0.67-1.5,1.5-1.5 s1.5,0.67,1.5,1.5v8.09c0,0.675-0.203,1.333-0.574,1.891", "fill", "none", "id", "XMLID_3863_", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10"], ["fill", "none", "id", "XMLID_3862_", "points", " 13.5,30.5 13.5,27.5 26.5,27.5 26.5,30.5 ", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10"], ["id", "XMLID_3789_"], ["d", " M10.477,5.541C10.492,5.691,10.5,5.845,10.5,6c0,2.479-2.009,4.488-4.488,4.488S1.524,8.479,1.524,6s2.01-4.488,4.488-4.488 c0.793,0,1.539,0.207,2.186,0.568", "fill", "none", "id", "XMLID_3860_", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10"], ["fill", "none", "id", "XMLID_3794_", "points", " 10.313,2.842 6.012,7.143 3.94,5.071 ", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10"], ["cx", "26", "cy", "6", "fill", "none", "id", "XMLID_3793_", "r", "4.5", "stroke", "#ffffff", "stroke-miterlimit", "10"], ["id", "XMLID_3790_"], ["fill", "none", "id", "XMLID_3792_", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "x1", "27.5", "x2", "24.5", "y1", "7.5", "y2", "4.5"], ["fill", "none", "id", "XMLID_3791_", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "x1", "27.5", "x2", "24.5", "y1", "4.5", "y2", "7.5"], ["id", "XMLID_2861_"], ["id", "TDD_testing_x2C__code_coding_laptop_5_"], ["id", "XMLID_3573_"], ["d", " M13.89,26.034l-1.4-1.244c-0.7-0.63-1.24-1.41-1.58-2.29L8.9,16.95c-0.17-0.47,0.05-0.99,0.5-1.2c0.24-0.11,0.48-0.16,0.73-0.16 c0.63,0,1.24,0.351,1.55,0.95l1.84,3.7c0.62-0.46,0.98-1.19,0.98-1.95V6.5C14.5,5.67,15.17,5,16,5s1.5,0.67,1.5,1.5v8 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5V15c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5v1c0-0.83,0.67-1.5,1.5-1.5 s1.5,0.67,1.5,1.5v8.09c0,0.675-0.203,1.333-0.574,1.891", "fill", "none", "id", "XMLID_3575_", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10"], ["fill", "none", "id", "XMLID_3574_", "points", " 13.5,30.5 13.5,27.5 26.5,27.5 26.5,30.5 ", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10"], ["id", "XMLID_2862_"], ["d", " M10.477,5.541C10.492,5.691,10.5,5.845,10.5,6c0,2.479-2.009,4.488-4.488,4.488S1.524,8.479,1.524,6s2.01-4.488,4.488-4.488 c0.793,0,1.539,0.207,2.186,0.568", "fill", "none", "id", "XMLID_3572_", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10"], ["fill", "none", "id", "XMLID_3571_", "points", " 10.313,2.842 6.012,7.143 3.94,5.071 ", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10"], ["cx", "26", "cy", "6", "fill", "none", "id", "XMLID_3570_", "r", "4.5", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10"], ["id", "XMLID_3567_"], ["fill", "none", "id", "XMLID_3569_", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "x1", "27.5", "x2", "24.5", "y1", "7.5", "y2", "4.5"], ["fill", "none", "id", "XMLID_3568_", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "x1", "27.5", "x2", "24.5", "y1", "4.5", "y2", "7.5"], [1, "col-lg-4"], [1, "kt-info-data-v", "bg-light-shade", "text-center"], [1, "col-lg-8"], ["data-toggle", "tooltip", 1, "kt-info-data-v", 3, "title"], ["class", "col-lg-4", 4, "ngIf"], [1, "row", "mt-4", "px-3"], [1, "col-lg-12", "mb-1"], [1, "col"], [3, "ngClass", "click"], ["id", "editaccept", 1, "col"], ["class", "col", 4, "ngIf"], [1, "col-lg-12", "mt-3", 3, "hidden"], ["class", "col-lg-12 mt-3 mb-2", 4, "ngIf"], [1, "clearfix"], [1, "kt-info-pg-footer", 3, "hidden"], [1, "row", "px-3"], [1, "col-lg-12"], [1, "kt-info-pg-btns", "text-end"], ["type", "button", "data-to", "#pills-3-tab", 1, "btn", "btn-project-stv", "mr-3", "Bt-Close", 3, "click"], ["type", "button", "data-to", "#pills-3-tab", "primary", "true", 1, "btn", "btn-project-stv", "Bt-Submit", 3, "disabled", "click"], ["required", "", "name", "rej_type", "placeholder", "Select Reject Type", "id", "rej_type", 3, "ngModel", "ngModelChange", "change"], ["action", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "col-lg-12", "mt-3", "mb-2"], ["class", "appr-comts", 4, "ngIf"], [1, "appr-comts"], [1, "exs-cmts", "card"], ["class", "card-header", 4, "ngIf"], [1, "crd-bdy", "scroll-y"], ["class", "cmts-items", 4, "ngFor", "ngForOf"], [1, "card-header"], [1, "mb-0"], [1, "cmts-items"], [3, "ngClass"], [1, "cmts-actns"], ["class", "cmts-svg", 3, "click", 4, "ngIf"], [1, "cmts-svg", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24"], ["d", "M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"], ["d", "M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"], ["id", "exampleTextarea", "rows", "3", 1, "form-control", "kt-approval-msg", 3, "ngModel", "ngModelChange"]], template: function ProjectInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, ProjectInfoComponent_div_1_Template, 27, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, ProjectInfoComponent_div_2_Template, 71, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, ProjectInfoComponent_div_3_Template, 55, 21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, ProjectInfoComponent_ng_container_4_Template, 88, 27, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx.ProjectNameJson);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx.ProjectInfoJson);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx.ProjectStatesJson);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.Current_user_ID == ctx.approvalEmpId);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_24__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgStyle, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__["ɵr"], _angular_common__WEBPACK_IMPORTED_MODULE_22__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe], styles: [".name-box[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    font-size: 9px;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    letter-spacing: 2px;\r\n    border-radius: 50%;\r\n    line-height: 30px;\r\n    margin-right: 5px;\r\n  }\r\n.names-response[_ngcontent-%COMP%]{\r\n    display :inline-block;\r\n    text-align: left;\r\n  }\r\n.names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{\r\n    display: block;\r\n    font-size: 10px;\r\n    font-weight: 600;\r\n  }\r\n.names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{\r\n    font-weight: 600;\r\n  }\r\n.head-btn[_ngcontent-%COMP%]{\r\n    background-color: rgba(88, 103, 221, 0.1);\r\n      padding: 3px 10px 3px 5px;\r\n      border-radius: 2rem;\r\n      border: 1px solid #b3bcff;\r\n      font-weight: 500;\r\n      font-size: 12px;\r\n  }\r\n.head-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n      width: 25px;\r\n      height: 25px;\r\n      background: #5867dd;\r\n      color: #fff;\r\n      line-height: 25px;\r\n      text-align: center;\r\n      border-radius: 50%;\r\n      margin-right: 3px;\r\n  }\r\n.devider[_ngcontent-%COMP%]{\r\n    height: 1px;\r\n    width: 100%;\r\n    background-color: #f1f1f1;\r\n  }\r\n.pricevalues[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n    padding-bottom: 10px;\r\n    \r\n  }\r\n.top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(1), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(2)  {\r\n    border-top: 1px solid #f1f1f1;\r\n  }\r\n.top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(3), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(4)  {\r\n    border-bottom: none\r\n  }\r\n\r\n\r\n.w-60[_ngcontent-%COMP%]{\r\n    width: 60px;\r\n  }\r\n.dms-links[_ngcontent-%COMP%]{\r\n    list-style-type: disc;\r\n  }\r\n.dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: block;\r\n    text-decoration: underline;\r\n    font-weight: 600;\r\n    margin-bottom: 5px;\r\n  }\r\n.py-10px[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n  }\r\n.dropdown-item[_ngcontent-%COMP%]:active{\r\n    background-color: #dedee0;\r\n  }\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .pro-bar[_ngcontent-%COMP%] {\r\n    background: hsl(0, 0%, 97%);\r\n    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;\r\n    height: 4px;\r\n    margin-bottom: 20px;\r\n    margin-top: 30px;    \r\n    margin-left: 10px;\r\n    position: relative;\r\n    text-align: left;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress_bar_title[_ngcontent-%COMP%] {\r\n    color: hsl(218, 4%, 50%);\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    position: relative;\r\n    top: -28px;\r\n    z-index: 1;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress_number[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%] {\r\n    background-color: hsl(0, 0%, 88%);\r\n    display: block;\r\n    width: 0;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transition: width 1s linear 0s;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    background-color: hsl(0, 0%, 100%);\r\n    border-radius: 50%;\r\n    width: 4px;\r\n    height: 4px;\r\n    position: absolute;\r\n    right: 1px;\r\n    top: 0;\r\n    z-index: 1;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    width: 14px;\r\n    height: 14px;\r\n    background-color: inherit;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    right: -4px;\r\n    top: -5px;\r\n  }\r\n.bg-today[_ngcontent-%COMP%] {\r\n    background-color: #342bf0 !important;\r\n  }\r\n.M_fsize[_ngcontent-%COMP%]{\r\n    font-size: smaller;\r\n  }\r\n.badge[_ngcontent-%COMP%] {\r\n    border-radius: 0;\r\n    font-size: 12px;\r\n    line-height: 1;\r\n    padding: .375rem .5625rem;\r\n    font-weight: normal;\r\n  }\r\n.port_list[_ngcontent-%COMP%]{\r\n    \r\n    padding: 0.75rem 1rem;\r\n\r\n  }\r\n\r\n.border-bottom[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #dee2e6!important;\r\n}\r\n.show1[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.show[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n.item-b[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(n+4) {\r\n    display: none;\r\n}\r\n.tr-9[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n}\r\n.no-after[_ngcontent-%COMP%]::after{\r\n  content: none !important;\r\n}\r\n.hold-drop[_ngcontent-%COMP%]{\r\n  width: 500px;\r\n}\r\n.br-cus[_ngcontent-%COMP%] {\r\n  border-left: 1px solid #eee;\r\n}\r\n.card-itm1[_ngcontent-%COMP%]{\r\n  background: #fff;\r\n    border: 1px solid #ebedf2;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 1px #00000026;\r\n}\r\n\r\n.black_overlay[_ngcontent-%COMP%]{\r\n  display: none;\r\n  position: fixed;\r\n  top: 0%;\r\n  left: 0%;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0,0,0,.32);\r\n  z-index: 90;\r\n  -moz-opacity: .8;\r\n  opacity: .8;\r\n  filter: alpha(opacity=80);\r\n}\r\n.comment-list[_ngcontent-%COMP%]{\r\n  padding-bottom: 1.25rem;\r\n}\r\n.comt-text[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 5px;\r\n  \r\n  font-size: 14px;\r\n}\r\n.blw[_ngcontent-%COMP%]   .dt[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\r\n.comt-info[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  color: #494f54;\r\n  color: #595d6e;\r\n\r\n}\r\n.prv-cmts[_ngcontent-%COMP%]{\r\n max-height: 200px;\r\n overflow: auto; \r\n}\r\n.s1[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   .c1[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   .s1[_ngcontent-%COMP%]{\r\n  display: inline;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]:before, .dwn-arw[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]:before {\r\n  content: \"\\f078\";\r\n}\r\n.action-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\r\n  margin-bottom: 0;\r\n}\r\n.date-drop1[_ngcontent-%COMP%], .date-drop2[_ngcontent-%COMP%], .date-drop3[_ngcontent-%COMP%] {\r\n  width: 350px;\r\n}\r\n  .input-group-append .mat-icon-button {\r\n  height: 35px !important;\r\n}\r\n.date-drop1[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n    left: -226px;\r\n}\r\n.date-drop2[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n    left: -247px\r\n}\r\n.date-drop3[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n    left: -169px\r\n}\r\n.w-45[_ngcontent-%COMP%] {\r\n  width: 45% !important;\r\n}\r\n.w-55[_ngcontent-%COMP%] {\r\n  width: 55% !important;\r\n}\r\n  .no-ellip span.ng-option-label {\r\n    text-overflow: unset;\r\n    white-space: break-spaces;\r\n\r\n}\r\n.fixed-btn[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  z-index: 99;\r\n  bottom: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.spacer-tab[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: fixed;\r\n  z-index: 999;\r\n  border: 1px solid rgb(232 234 237);\r\n  overflow: auto;\r\n  max-height: 450px;\r\n  opacity: 1;\r\n  width: 400px;\r\n  bottom: 20px;\r\n  right: 10px;\r\n  box-shadow: -1px 2px 20px #00478a21;\r\n  border-radius: 8px;\r\n  padding: 5px 0;\r\n  background-color: rgb(255 255 255);\r\n}\r\n\r\n.spacer--body[_ngcontent-%COMP%] {\r\n  margin-left: 0;\r\n  padding-left: 10px;\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n  background-color: #fff;\r\n}\r\n  .input-group-append .mat-icon-button {\r\n  height: 35px !important;\r\n}\r\n#sidebar-overlay[_ngcontent-%COMP%] {\r\n  background-color: rgba(50, 58, 70, .2);\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: none;\r\n  z-index: 998;\r\n  transition: all .2s ease-out;\r\n  cursor: pointer;\r\n}\r\n.left-w[_ngcontent-%COMP%]{\r\n  min-width: 105px;\r\n}\r\n.cmts-items[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px 15px;\r\n  border-bottom: 1px solid #e4e7e8;\r\n}\r\n.cmts-svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n  height: 20px;\r\n  fill: #8d95a5;\r\n}\r\n.appr-comts[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  flex: 1;\r\n}\r\n.exs-cmts[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  color: #4b4343;\r\n}\r\n.exs-cmts[_ngcontent-%COMP%]   .crd-bdy[_ngcontent-%COMP%]{  \r\n  overflow: auto;\r\n  max-height: 200px;\r\n}\r\n.cmts-items[_ngcontent-%COMP%]:hover   .cmts-svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  transform: scale(1.1);\r\n  fill: #2786fb;\r\n}\r\n.cmts-svg[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n.card-car[_ngcontent-%COMP%]{\r\n  color: #595d6e;\r\n}\r\n.card-car[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  line-height: 1;\r\n  margin-bottom: 0;\r\n}\r\n.card-car[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  line-height: 1;\r\n  margin-bottom: 0;\r\n  color: #595d6e !important;\r\n}\r\n.detail-icn[_ngcontent-%COMP%]   svg.dater[_ngcontent-%COMP%]{\r\n  width: 22px;\r\n  height: 22px;\r\n}\r\n.offcanvas-header[_ngcontent-%COMP%] {\r\n  min-height: 50px;\r\n  padding: 0 25px;\r\n  border-bottom: 1px solid #ebedf2;\r\n}\r\n.subtask-list[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  background-color: #fff;\r\n  background-clip: border-box;\r\n  border: 1px solid #ebedf2;\r\n  box-shadow: 0 0.75rem 6rem rgb(56 65 74 / 3%);\r\n  border-radius: 0.25rem;\r\n  margin-bottom: 12px;\r\n  display: block;\r\n  color: #595d6e;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   span.showv[_ngcontent-%COMP%]{\r\n  display: inline-flex;\r\n  align-items: center;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   .showv[_ngcontent-%COMP%]{\r\n  display: inline-flex;\r\n}\r\n.showv[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   .flex-hdv[_ngcontent-%COMP%]{\r\n  flex: unset;\r\n}\r\n.flex-hdv[_ngcontent-%COMP%]{\r\n  flex:1;\r\n}\r\n.ml--2[_ngcontent-%COMP%] {\r\n  margin-left: -15px;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   .swap-view[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n\r\n}\r\n.swap-view[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   .swap-less[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.scrollbar1[_ngcontent-%COMP%] {\r\n  max-height: calc(100vh - 178px);\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n.scrollbar1[_ngcontent-%COMP%] {\r\n  max-height: calc(100vh - 138px);\r\n  overflow-y: auto;\r\n}\r\n\r\n.scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n  border-radius: 10px;\r\n}\r\n\r\n.scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #ccc;\r\n}\r\n.sticky-header[_ngcontent-%COMP%]{\r\n  margin-top: 0px;\r\n  z-index: 14;\r\n  position: sticky;\r\n  top: 0px;\r\n  font-size: 18px;\r\n}\r\n.desc-msg[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n}\r\n.desc-msg[_ngcontent-%COMP%]{\r\n  padding: 6px 7px;\r\n}\r\n.custom-link[_ngcontent-%COMP%] {\r\n  color: navy;\r\n  text-decoration: underline;\r\n}\r\n.kt-info-body[_ngcontent-%COMP%] {\r\nmargin: 1.3rem;\r\nborder: 1px solid #ededed;\r\nheight: calc(100vh - 4vh);\r\n}\r\n.kt-title-icon[_ngcontent-%COMP%] {\r\nbackground-color: #527ce2;\r\nwidth: 30px;\r\nheight: 30px;\r\nborder-radius: 50px;\r\ndisplay: flex;\r\nmargin-right: 1rem;\r\njustify-content: center;\r\nalign-items: center;\r\n}\r\n.kt-info-box-tittle[_ngcontent-%COMP%] {\r\ndisplay: flex;\r\nalign-items: center;\r\nfont-size: 15px;\r\ncolor: #6388e3;\r\nfont-weight: 400;\r\nmargin-bottom: 10px;    letter-spacing: 0.5px;\r\n}\r\n.kt-project-type[_ngcontent-%COMP%] {\r\ntext-align: center;\r\n}\r\n.Kt-Pd-Status[_ngcontent-%COMP%] {\r\nbackground-color: #000;\r\ncolor: #fff;\r\nmargin: 0px 10px;\r\nmargin-left: 1rem;\r\nfont-weight: 600;\r\npadding: 6px 13px; \r\n max-width: 140px;\r\nmin-width: 130px;\r\n}\r\n.Core_task[_ngcontent-%COMP%] {\r\nbackground-color: #ffc43a;\r\n}\r\n.kt-project-name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\ncolor: #181818;\r\nfont-weight: 700;\r\n}\r\n.kt-project-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\nmargin: 0;\r\ncolor: #999999;\r\nfont-weight: 400;\r\n}\r\n.kt-project-desc[_ngcontent-%COMP%] {\r\nmargin-top: 5px;\r\n}\r\n.kt-info-box[_ngcontent-%COMP%] {\r\npadding: 10px 10px;\r\nborder-bottom: 1px solid #ededed;\r\n}\r\n.More_info[_ngcontent-%COMP%] {\r\nbackground-color: #4574fe !important;\r\n}\r\n.kt-info-lable-v[_ngcontent-%COMP%] {\r\ncolor: #939393;\r\nletter-spacing: 0.3px;\r\nfont-size: 14px;\r\n}\r\n.kt-info-data-v[_ngcontent-%COMP%] {\r\nbackground-color: #f0f0f0;\r\nborder-radius: 35px;\r\npadding: 5px 4px;\r\nfont-weight: 500;\r\ncolor: #4f4f4f;\r\nmargin-top: 10px;\r\noverflow: hidden;\r\ntext-overflow: ellipsis;\r\nwhite-space: nowrap;\r\n}\r\n.kt-client-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\nwidth: 30px;\r\nborder-radius: 50px;\r\n}\r\n.kt-client-icon[_ngcontent-%COMP%] {\r\nmargin-top: 10px;\r\n}\r\n.bg-light-shade[_ngcontent-%COMP%] {\r\nbackground-color: #eaf2fd !important;\r\n}\r\n.Delay[_ngcontent-%COMP%]{\r\nbackground-color: #EE4137 !important;\r\n}\r\n.UnderApproval[_ngcontent-%COMP%]{\r\n  background-color: #888888 !important;\r\n}\r\n.Inprocess[_ngcontent-%COMP%]{\r\n  background-color: #1B272D !important;\r\n}\r\n.NewProjectRejected[_ngcontent-%COMP%]{\r\n  background-color: #DFDFDF !important;\r\n  color:#000;\r\n}\r\n.Done[_ngcontent-%COMP%]{\r\n  background-color: #62B134 !important;\r\n  color: #000;\r\n}\r\n.EnactiveUnderApproval[_ngcontent-%COMP%]{\r\n  background-color: #C9C1E6 !important;\r\n  color: #000;\r\n}\r\n.CompletionUnderApproval[_ngcontent-%COMP%]{\r\n  background-color: #B2D732 !important;\r\n  color:#000;\r\n}\r\n.DeadlineExtend[_ngcontent-%COMP%]{\r\n  background-color: #F88282 !important;\r\n  color: #000;\r\n}\r\n.Hold[_ngcontent-%COMP%]{\r\n  background-color: #E2D9BC;\r\n  color:#000;\r\n}\r\n.kt-project-sts-data[_ngcontent-%COMP%] {\r\nmargin-top: 17px;\r\ncolor: #3b3b3b;\r\nfont-weight: 500;\r\nfont-size: 14px;\r\n}\r\n.progress.kt-projcect-progress.bar[_ngcontent-%COMP%] {\r\nborder-radius: 50px;\r\nheight: 10px;\r\n}\r\n.bg-inprogress[_ngcontent-%COMP%] {\r\nbackground-color: #505050;\r\n}\r\n.bg-delay[_ngcontent-%COMP%] {\r\nbackground-color: #Ed6207;\r\n}\r\n.bg-done[_ngcontent-%COMP%] {\r\nbackground-color: #6aad3a;\r\n}\r\n.kt-prg-bar-info[_ngcontent-%COMP%] {\r\nfont-size: 15px;\r\nfont-weight: 600;\r\ncolor: #3d3d3d;\r\n}\r\n.kt-prg-bar-info[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\nfont-size: 20px;\r\nmargin-right: 5px;\r\n}\r\n.kt-total-prg-vl[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\nfont-size: 21px !important;\r\n}\r\n.Deadline_Extend[_ngcontent-%COMP%]{\r\nbackground-color: #f48383;\r\n}\r\nbutton.Kt-Approval-btns[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\npadding: 3px 5px;\r\nborder-radius: 50px;\r\nbackground-color: #fff;\r\ncolor: #4f4f4f;\r\nborder: 2px solid #fff;\r\nfont-weight: 500;\r\nfont-size: 14px;\r\n}\r\n.Btn_Accpet[_ngcontent-%COMP%] {\r\nborder-color: #8ab991 !important;\r\n}\r\n.Btn_Edit_Accept[_ngcontent-%COMP%] {\r\nborder-color: #7caccd !important;\r\n}\r\n.Btn_Conditional_Accept[_ngcontent-%COMP%] {\r\nborder-color: #407f4c !important;\r\n}\r\n.Btn_Reject[_ngcontent-%COMP%] {\r\nborder-color: #cf8e66 !important;\r\n}\r\n.Btn_Accpet.active[_ngcontent-%COMP%]{\r\n  background-color: #8ab991 !important;\r\n  color: #fff;\r\n  }\r\n.Btn_Edit_Accept.active[_ngcontent-%COMP%] {\r\n    background-color: #7caccd !important;\r\n    color: #fff;\r\n  }\r\n.Btn_Conditional_Accept.active[_ngcontent-%COMP%] {\r\n    background-color: #407f4c !important;\r\n    color: #fff;\r\n  }\r\n.Btn_Reject.active[_ngcontent-%COMP%] {\r\n    background-color: #cf8e66 !important;\r\n    color: #fff;\r\n  }\r\n.kt-approval-msg[_ngcontent-%COMP%] {\r\nbackground-color: #f0f0f0;\r\npadding: 10px;\r\nborder-radius: 6px;\r\nmin-height: 85px;\r\n}\r\n.text-end[_ngcontent-%COMP%] {\r\ntext-align: end;\r\n}\r\n.btn-project-stv[_ngcontent-%COMP%] {\r\nwidth: 100px;\r\nbackground-color: #f0f0f0;\r\n}\r\n.Bt-Submit[_ngcontent-%COMP%] {\r\nbackground-color: #878787;\r\ncolor: #fff;\r\nfont-size: 14px;\r\nletter-spacing: 0.5px;\r\n}\r\n.kt-info-pg-footer[_ngcontent-%COMP%] {\r\nmargin: 5px 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxpQ0FBaUM7QUFDakM7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSx5Q0FBeUM7TUFDdkMseUJBQXlCO01BQ3pCLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIsZ0JBQWdCO01BQ2hCLGVBQWU7RUFDbkI7QUFDQTtNQUNJLFdBQVc7TUFDWCxZQUFZO01BQ1osbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixpQkFBaUI7RUFDckI7QUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCO3VDQUNtQztFQUNyQztBQUVBO0lBQ0UsNkJBQTZCO0VBQy9CO0FBQ0E7SUFDRTtFQUNGO0FBRUEsZ0NBQWdDO0FBQ2hDOztLQUVHO0FBRUg7SUFDRSxXQUFXO0VBQ2I7QUFFQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUVBO0lBQ0UsY0FBYztJQUNkLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCO0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFFQSxxQ0FBcUM7QUFFdkM7SUFDSSwyQkFBMkI7SUFDM0IsZ0RBQWdEO0lBQ2hELFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7RUFDWjtBQUVBO0lBQ0UsWUFBWTtFQUNkO0FBRUE7SUFDRSxpQ0FBaUM7SUFDakMsY0FBYztJQUNkLFFBQVE7SUFDUixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsOEJBQThCO0VBQ2hDO0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsTUFBTTtJQUNOLFVBQVU7RUFDWjtBQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7RUFDWDtBQUVBO0lBQ0Usb0NBQW9DO0VBQ3RDO0FBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLCtCQUErQjtJQUMvQixxQkFBcUI7O0VBRXZCO0FBQ0E7O0dBRUM7QUFDRDtJQUNFLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxnQkFBZ0I7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLCtCQUErQjtBQUNuQztBQUNBOztHQUVHO0FBQ0g7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjOztBQUVoQjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtJQUNoQjtBQUNKO0FBQ0E7RUFDRSxrQkFBa0I7SUFDaEI7QUFDSjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQix5QkFBeUI7O0FBRTdCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTs7Ozs7R0FLRztBQUNIO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtDQUFrQztBQUNwQztBQUNBOztHQUVHO0FBQ0g7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsU0FBUztFQUNULE9BQU87QUFDVDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsNkNBQTZDO0VBQzdDLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGNBQWM7QUFDaEI7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLE1BQU07QUFDUjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQkFBcUI7O0FBRXZCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7QUFFQSxVQUFVO0FBRVY7RUFDRSxVQUFVO0FBQ1o7QUFFQSxVQUFVO0FBRVY7RUFDRSxtQkFBbUI7QUFDckI7QUFFQSxXQUFXO0FBRVg7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBRUEsb0JBQW9CO0FBRXBCO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUVYLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCO0FBSUE7QUFDQSxjQUFjO0FBQ2QseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLFdBQVc7QUFDWCxZQUFZO0FBQ1osbUJBQW1CO0FBQ25CLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2YsY0FBYztBQUNkLGdCQUFnQjtBQUNoQixtQkFBbUIsS0FBSyxxQkFBcUI7QUFDN0M7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixpQkFBaUI7Q0FDaEIsZ0JBQWdCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsY0FBYztBQUNkLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLGNBQWM7QUFDZCxxQkFBcUI7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsY0FBYztBQUNkLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsV0FBVztBQUNYLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxVQUFVO0FBQ1o7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxXQUFXO0FBQ2I7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxXQUFXO0FBQ2I7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxVQUFVO0FBQ1o7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxXQUFXO0FBQ2I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2Q7QUFDQTtBQUNBLGVBQWU7QUFDZixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEIsY0FBYztBQUNkLHNCQUFzQjtBQUN0QixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1g7QUFDQTtJQUNFLG9DQUFvQztJQUNwQyxXQUFXO0VBQ2I7QUFDQTtJQUNFLG9DQUFvQztJQUNwQyxXQUFXO0VBQ2I7QUFDQTtJQUNFLG9DQUFvQztJQUNwQyxXQUFXO0VBQ2I7QUFDRjtBQUNBLHlCQUF5QjtBQUN6QixhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxZQUFZO0FBQ1oseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsV0FBVztBQUNYLGVBQWU7QUFDZixxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQiIsImZpbGUiOiJwcm9qZWN0LWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBOZXcgZGVzaWduIENTUyAgZnJvbSBIZXJlLi4uICovXHJcbi5uYW1lLWJveHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYW1lcy1yZXNwb25zZXtcclxuICAgIGRpc3BsYXkgOmlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYW1lcy1yZXNwb25zZSBzcGFuOmZpcnN0LWNoaWxke1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICAubmFtZXMtcmVzcG9uc2Ugc3BhbjpsYXN0LWNoaWxke1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWQtYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OCwgMTAzLCAyMjEsIDAuMSk7XHJcbiAgICAgIHBhZGRpbmc6IDNweCAxMHB4IDNweCA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmhlYWQtYnRuIGl7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM1ODY3ZGQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIH1cclxuICBcclxuICAuZGV2aWRlcntcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICAucHJpY2V2YWx1ZXMge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC8qIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTsgKi9cclxuICB9XHJcbiAgXHJcbiAgLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgxKSwgLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgyKSAge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgfVxyXG4gIC50b3AtYm9yZGVyIC5wcmljZXZhbHVlczpudGgtY2hpbGQoMyksIC50b3AtYm9yZGVyIC5wcmljZXZhbHVlczpudGgtY2hpbGQoNCkgIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmVcclxuICB9XHJcbiAgXHJcbiAgLyogLnByaWNldmFsdWVzOm50aC1jaGlsZCgyKSwgICovXHJcbiAgLyogLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIC53LTYwe1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kbXMtbGlua3N7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbiAgfVxyXG4gIFxyXG4gIC5kbXMtbGlua3MgbGkgYXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICAucHktMTBweHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1pdGVtOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZTA7XHJcbiAgfVxyXG5cclxuICAvKiA9PT09PT09PT0gUHJvZ3Jlc3MgQmFyID09PT09PT09PSAqL1xyXG5cclxuLnByb2dyZXNzX2JhciAucHJvLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDk3JSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggaHNsYSgwLCAwJSwgMCUsIDAuMSkgaW5zZXQ7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4OyAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfYmFyX3RpdGxlIHtcclxuICAgIGNvbG9yOiBoc2woMjE4LCA0JSwgNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0yOHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfbnVtYmVyIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2dyZXNzX2JhciAucHJvZ3Jlc3MtYmFyLWlubmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgODglKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMXMgbGluZWFyIDBzO1xyXG4gIH1cclxuICBcclxuICAucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDFweDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ncmVzc19iYXIgLnByb2dyZXNzLWJhci1pbm5lcjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC00cHg7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZy10b2RheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQyYmYwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5NX2ZzaXple1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gIH1cclxuICAuYmFkZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNTYyNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIC5wb3J0X2xpc3R7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNmZhOyAqL1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG5cclxuICB9XHJcbiAgLyogLnBvcnRfbGlzdC5ib3JkZXItYm90dG9tOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2IWltcG9ydGFudDtcclxufSAqL1xyXG4gIC5ib3JkZXItYm90dG9tIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2IWltcG9ydGFudDtcclxufVxyXG4uc2hvdzEge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNob3c6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaXRlbS1iIGRpdjpudGgtY2hpbGQobis0KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi50ci05e1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuLm5vLWFmdGVyOjphZnRlcntcclxuICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhvbGQtZHJvcHtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuLmJyLWN1cyB7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcbi5jYXJkLWl0bTF7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmVkZjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxcHggIzAwMDAwMDI2O1xyXG59XHJcbi8qIC5kYXRlLWVkdHtcclxuICB3aWR0aDogNTAwcHg7XHJcbn0gKi9cclxuLmJsYWNrX292ZXJsYXl7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwJTtcclxuICBsZWZ0OiAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMzIpO1xyXG4gIHotaW5kZXg6IDkwO1xyXG4gIC1tb3otb3BhY2l0eTogLjg7XHJcbiAgb3BhY2l0eTogLjg7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTgwKTtcclxufVxyXG4uY29tbWVudC1saXN0e1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xyXG59XHJcbi5jb210LXRleHR7XHJcbiAgLyogY29sb3I6ICMxNDE3MWE7ICovXHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAvKiBtYXJnaW4tdG9wOiAycHg7ICovXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5ibHcgLmR0IHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG4uY29tdC1pbmZvIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjNDk0ZjU0O1xyXG4gIGNvbG9yOiAjNTk1ZDZlO1xyXG5cclxufVxyXG4ucHJ2LWNtdHN7XHJcbiBtYXgtaGVpZ2h0OiAyMDBweDtcclxuIG92ZXJmbG93OiBhdXRvOyBcclxufVxyXG4uczF7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY29sbGFwc2VkIC5jMXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jb2xsYXBzZWQgLnMxe1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4uY29sbGFwc2VkIC5mYS1jaGV2cm9uLXVwOmJlZm9yZSwgLmR3bi1hcncgLmZhLWNoZXZyb24tdXA6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZjA3OFwiO1xyXG59XHJcbi5hY3Rpb24tY29udGVudCBoNntcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5kYXRlLWRyb3AxLCAuZGF0ZS1kcm9wMiwgLmRhdGUtZHJvcDMge1xyXG4gIHdpZHRoOiAzNTBweDtcclxufVxyXG46Om5nLWRlZXAgLmlucHV0LWdyb3VwLWFwcGVuZCAubWF0LWljb24tYnV0dG9uIHtcclxuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxufVxyXG4uZGF0ZS1kcm9wMXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMjI2cHg7XHJcbn1cclxuLmRhdGUtZHJvcDJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTI0N3B4XHJcbn1cclxuLmRhdGUtZHJvcDN7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTE2OXB4XHJcbn1cclxuLnctNDUge1xyXG4gIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcclxufVxyXG4udy01NSB7XHJcbiAgd2lkdGg6IDU1JSAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubm8tZWxsaXAgc3Bhbi5uZy1vcHRpb24tbGFiZWwge1xyXG4gICAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xyXG5cclxufVxyXG4uZml4ZWQtYnRuIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcbi8qIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSNpbmhpZGV7XHJcbm9wYWNpdHk6IDA7XHJcbndpZHRoOiAxMDAlO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmxlZnQ6IDA7XHJcbn0gKi9cclxuLnNwYWNlci10YWIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzMiAyMzQgMjM3KTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA0NTBweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogLTFweCAycHggMjBweCAjMDA0NzhhMjE7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSk7XHJcbn1cclxuLyogaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiAuc3BhY2VyLXRhYntcclxuZGlzcGxheTogYmxvY2s7ICAgIFxyXG59ICovXHJcbi5zcGFjZXItLWJvZHkge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG46Om5nLWRlZXAgLmlucHV0LWdyb3VwLWFwcGVuZCAubWF0LWljb24tYnV0dG9uIHtcclxuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxufVxyXG4jc2lkZWJhci1vdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCA1OCwgNzAsIC4yKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgei1pbmRleDogOTk4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5sZWZ0LXd7XHJcbiAgbWluLXdpZHRoOiAxMDVweDtcclxufVxyXG4uY210cy1pdGVtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlN2U4O1xyXG59XHJcbi5jbXRzLXN2ZyBzdmcge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBmaWxsOiAjOGQ5NWE1O1xyXG59XHJcbi5hcHByLWNvbXRzIGg2IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZmxleDogMTtcclxufVxyXG4uZXhzLWNtdHMge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6ICM0YjQzNDM7XHJcbn1cclxuLmV4cy1jbXRzIC5jcmQtYmR5eyAgXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbn1cclxuLmNtdHMtaXRlbXM6aG92ZXIgLmNtdHMtc3ZnIHN2ZyB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIGZpbGw6ICMyNzg2ZmI7XHJcbn1cclxuLmNtdHMtc3ZnIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNhcmQtY2Fye1xyXG4gIGNvbG9yOiAjNTk1ZDZlO1xyXG59XHJcbi5jYXJkLWNhciBoNXtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uY2FyZC1jYXIgLmg1IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBjb2xvcjogIzU5NWQ2ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5kZXRhaWwtaWNuIHN2Zy5kYXRlcntcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbn1cclxuLm9mZmNhbnZhcy1oZWFkZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMCAyNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlZGYyO1xyXG59XHJcbi5zdWJ0YXNrLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWRmMjtcclxuICBib3gtc2hhZG93OiAwIDAuNzVyZW0gNnJlbSByZ2IoNTYgNjUgNzQgLyAzJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjNTk1ZDZlO1xyXG59XHJcblxyXG4uY29sbGFwc2VkICBzcGFuLnNob3d2e1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNvbGxhcHNlZCAuc2hvd3Z7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuLnNob3d2e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jb2xsYXBzZWQgLmZsZXgtaGR2e1xyXG4gIGZsZXg6IHVuc2V0O1xyXG59XHJcbi5mbGV4LWhkdntcclxuICBmbGV4OjE7XHJcbn1cclxuLm1sLS0yIHtcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn1cclxuLmNvbGxhcHNlZCAuc3dhcC12aWV3e1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbn1cclxuLnN3YXAtdmlld3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jb2xsYXBzZWQgLnN3YXAtbGVzc3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zY3JvbGxiYXIxIHtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTc4cHgpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4uc2Nyb2xsYmFyMSB7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEzOHB4KTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4vKiB3aWR0aCAqL1xyXG5cclxuLnNjcm9sbGJhcjE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNnB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG5cclxuLnNjcm9sbGJhcjE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuXHJcbi5zY3JvbGxiYXIxOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuXHJcbi5zY3JvbGxiYXIxOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG4uc3RpY2t5LWhlYWRlcntcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgei1pbmRleDogMTQ7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uZGVzYy1tc2cgaDYge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4uZGVzYy1tc2d7XHJcbiAgcGFkZGluZzogNnB4IDdweDtcclxufVxyXG5cclxuLmN1c3RvbS1saW5rIHtcclxuICBjb2xvcjogbmF2eTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuXHJcblxyXG4ua3QtaW5mby1ib2R5IHtcclxubWFyZ2luOiAxLjNyZW07XHJcbmJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XHJcbmhlaWdodDogY2FsYygxMDB2aCAtIDR2aCk7XHJcbn1cclxuLmt0LXRpdGxlLWljb24ge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Y2UyO1xyXG53aWR0aDogMzBweDtcclxuaGVpZ2h0OiAzMHB4O1xyXG5ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5tYXJnaW4tcmlnaHQ6IDFyZW07XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5rdC1pbmZvLWJveC10aXR0bGUge1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5mb250LXNpemU6IDE1cHg7XHJcbmNvbG9yOiAjNjM4OGUzO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG5tYXJnaW4tYm90dG9tOiAxMHB4OyAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbn1cclxuLmt0LXByb2plY3QtdHlwZSB7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uS3QtUGQtU3RhdHVzIHtcclxuYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuY29sb3I6ICNmZmY7XHJcbm1hcmdpbjogMHB4IDEwcHg7XHJcbm1hcmdpbi1sZWZ0OiAxcmVtO1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5wYWRkaW5nOiA2cHggMTNweDsgXHJcbiBtYXgtd2lkdGg6IDE0MHB4O1xyXG5taW4td2lkdGg6IDEzMHB4O1xyXG59XHJcbi5Db3JlX3Rhc2sge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNDNhO1xyXG59XHJcbi5rdC1wcm9qZWN0LW5hbWUgaDQge1xyXG5jb2xvcjogIzE4MTgxODtcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4ua3QtcHJvamVjdC1kZXNjIHAge1xyXG5tYXJnaW46IDA7XHJcbmNvbG9yOiAjOTk5OTk5O1xyXG5mb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5rdC1wcm9qZWN0LWRlc2Mge1xyXG5tYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmt0LWluZm8tYm94IHtcclxucGFkZGluZzogMTBweCAxMHB4O1xyXG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWRlZDtcclxufVxyXG4uTW9yZV9pbmZvIHtcclxuYmFja2dyb3VuZC1jb2xvcjogIzQ1NzRmZSAhaW1wb3J0YW50O1xyXG59XHJcbi5rdC1pbmZvLWxhYmxlLXYge1xyXG5jb2xvcjogIzkzOTM5MztcclxubGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG5mb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmt0LWluZm8tZGF0YS12IHtcclxuYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuYm9yZGVyLXJhZGl1czogMzVweDtcclxucGFkZGluZzogNXB4IDRweDtcclxuZm9udC13ZWlnaHQ6IDUwMDtcclxuY29sb3I6ICM0ZjRmNGY7XHJcbm1hcmdpbi10b3A6IDEwcHg7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbnRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG53aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5rdC1jbGllbnQtaWNvbiBpbWcge1xyXG53aWR0aDogMzBweDtcclxuYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4ua3QtY2xpZW50LWljb24ge1xyXG5tYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5iZy1saWdodC1zaGFkZSB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNlYWYyZmQgIWltcG9ydGFudDtcclxufVxyXG4uRGVsYXl7XHJcbmJhY2tncm91bmQtY29sb3I6ICNFRTQxMzcgIWltcG9ydGFudDtcclxufVxyXG4uVW5kZXJBcHByb3ZhbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4ODg4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLklucHJvY2Vzc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUIyNzJEICFpbXBvcnRhbnQ7XHJcbn1cclxuLk5ld1Byb2plY3RSZWplY3RlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZERkRGICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IzAwMDtcclxufVxyXG4uRG9uZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjJCMTM0ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLkVuYWN0aXZlVW5kZXJBcHByb3ZhbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzlDMUU2ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLkNvbXBsZXRpb25VbmRlckFwcHJvdmFse1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCMkQ3MzIgIWltcG9ydGFudDtcclxuICBjb2xvcjojMDAwO1xyXG59XHJcbi5EZWFkbGluZUV4dGVuZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg4MjgyICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLkhvbGR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UyRDlCQztcclxuICBjb2xvcjojMDAwO1xyXG59XHJcblxyXG4ua3QtcHJvamVjdC1zdHMtZGF0YSB7XHJcbm1hcmdpbi10b3A6IDE3cHg7XHJcbmNvbG9yOiAjM2IzYjNiO1xyXG5mb250LXdlaWdodDogNTAwO1xyXG5mb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnByb2dyZXNzLmt0LXByb2pjZWN0LXByb2dyZXNzLmJhciB7XHJcbmJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbmhlaWdodDogMTBweDtcclxufVxyXG4uYmctaW5wcm9ncmVzcyB7XHJcbmJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XHJcbn1cclxuLmJnLWRlbGF5IHtcclxuYmFja2dyb3VuZC1jb2xvcjogI0VkNjIwNztcclxufVxyXG4uYmctZG9uZSB7XHJcbmJhY2tncm91bmQtY29sb3I6ICM2YWFkM2E7XHJcbn1cclxuLmt0LXByZy1iYXItaW5mbyB7XHJcbmZvbnQtc2l6ZTogMTVweDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuY29sb3I6ICMzZDNkM2Q7XHJcbn1cclxuLmt0LXByZy1iYXItaW5mbyBiIHtcclxuZm9udC1zaXplOiAyMHB4O1xyXG5tYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4ua3QtdG90YWwtcHJnLXZsIGIge1xyXG5mb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcclxufVxyXG4uRGVhZGxpbmVfRXh0ZW5ke1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZjQ4MzgzO1xyXG59XHJcbmJ1dHRvbi5LdC1BcHByb3ZhbC1idG5zIHtcclxud2lkdGg6IDEwMCU7XHJcbnBhZGRpbmc6IDNweCA1cHg7XHJcbmJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbmNvbG9yOiAjNGY0ZjRmO1xyXG5ib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG5mb250LXdlaWdodDogNTAwO1xyXG5mb250LXNpemU6IDE0cHg7XHJcbn1cclxuLkJ0bl9BY2NwZXQge1xyXG5ib3JkZXItY29sb3I6ICM4YWI5OTEgIWltcG9ydGFudDtcclxufVxyXG4uQnRuX0VkaXRfQWNjZXB0IHtcclxuYm9yZGVyLWNvbG9yOiAjN2NhY2NkICFpbXBvcnRhbnQ7XHJcbn1cclxuLkJ0bl9Db25kaXRpb25hbF9BY2NlcHQge1xyXG5ib3JkZXItY29sb3I6ICM0MDdmNGMgIWltcG9ydGFudDtcclxufVxyXG4uQnRuX1JlamVjdCB7XHJcbmJvcmRlci1jb2xvcjogI2NmOGU2NiAhaW1wb3J0YW50O1xyXG59XHJcbi5CdG5fQWNjcGV0LmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGFiOTkxICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIC5CdG5fRWRpdF9BY2NlcHQuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Y2FjY2QgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuQnRuX0NvbmRpdGlvbmFsX0FjY2VwdC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwN2Y0YyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIC5CdG5fUmVqZWN0LmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Y4ZTY2ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbi5rdC1hcHByb3ZhbC1tc2cge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG5wYWRkaW5nOiAxMHB4O1xyXG5ib3JkZXItcmFkaXVzOiA2cHg7XHJcbm1pbi1oZWlnaHQ6IDg1cHg7XHJcbn1cclxuLnRleHQtZW5kIHtcclxudGV4dC1hbGlnbjogZW5kO1xyXG59XHJcbi5idG4tcHJvamVjdC1zdHYge1xyXG53aWR0aDogMTAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbn1cclxuLkJ0LVN1Ym1pdCB7XHJcbmJhY2tncm91bmQtY29sb3I6ICM4Nzg3ODc7XHJcbmNvbG9yOiAjZmZmO1xyXG5mb250LXNpemU6IDE0cHg7XHJcbmxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG4ua3QtaW5mby1wZy1mb290ZXIge1xyXG5tYXJnaW46IDVweCAxMHB4O1xyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 71784:
/*!**********************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-info/project-info.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectInfoModule": () => (/* binding */ ProjectInfoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _project_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-info-routing.module */ 51029);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _project_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-info.component */ 84697);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _focus_on_click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focus-on-click.directive */ 44926);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects-summary/projects-summary.component */ 80880);
/* harmony import */ var _portfolio_projects_portfolio_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../portfolio-projects/portfolio-projects.component */ 70476);
/* harmony import */ var _view_dashboard_projects_view_dashboard_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view-dashboard-projects/view-dashboard-projects.component */ 27668);
/* harmony import */ var _projects_add_projects_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../projects-add/projects-add.component */ 12669);
/* harmony import */ var _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../to-do-projects/to-do-projects.component */ 80872);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notification/notification.component */ 2352);
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./truncate.pipe */ 99457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);

// import { BrowserModule } from '@angular/platform-browser';




// import { FullCalendarModule } from '@fullcalendar/angular';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import listPlugin from '@fullcalendar/list';













// FullCalendarModule.registerPlugins([
//   dayGridPlugin,
//   interactionPlugin,
//   listPlugin,
// ]);
class ProjectInfoModule {
}
ProjectInfoModule.ɵfac = function ProjectInfoModule_Factory(t) { return new (t || ProjectInfoModule)(); };
ProjectInfoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ProjectInfoModule });
ProjectInfoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsSummaryComponent, _portfolio_projects_portfolio_projects_component__WEBPACK_IMPORTED_MODULE_4__.PortfolioProjectsComponent,
        _view_dashboard_projects_view_dashboard_projects_component__WEBPACK_IMPORTED_MODULE_5__.ViewDashboardProjectsComponent, _projects_add_projects_add_component__WEBPACK_IMPORTED_MODULE_6__.ProjectsAddComponent, _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_7__.ToDoProjectsComponent, _notification_notification_component__WEBPACK_IMPORTED_MODULE_8__.NotificationComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        // BrowserModule,
        _project_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectInfoRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__.NgMultiSelectDropDownModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ProjectInfoModule, { declarations: [_project_info_component__WEBPACK_IMPORTED_MODULE_1__.ProjectInfoComponent, _focus_on_click_directive__WEBPACK_IMPORTED_MODULE_2__.FocusOnClickDirective, _truncate_pipe__WEBPACK_IMPORTED_MODULE_9__.TruncatePipe], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        // BrowserModule,
        _project_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectInfoRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__.NgMultiSelectDropDownModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule], exports: [_truncate_pipe__WEBPACK_IMPORTED_MODULE_9__.TruncatePipe] }); })();


/***/ })

}]);
//# sourceMappingURL=1784.js.map