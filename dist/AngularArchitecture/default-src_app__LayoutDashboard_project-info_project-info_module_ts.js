"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["default-src_app__LayoutDashboard_project-info_project-info_module_ts"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_Services/link.service */ 33529);
/* harmony import */ var src_app_Services_approvals_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_Services/approvals.service */ 18810);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ 77585);
/* harmony import */ var _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../projects-summary/projects-summary.component */ 80880);
/* harmony import */ var _portfolio_projects_portfolio_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../portfolio-projects/portfolio-projects.component */ 70476);
/* harmony import */ var _view_dashboard_projects_view_dashboard_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../view-dashboard-projects/view-dashboard-projects.component */ 27668);
/* harmony import */ var _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../to-do-projects/to-do-projects.component */ 80872);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../notification/notification.component */ 2352);
/* harmony import */ var _projects_add_projects_add_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../projects-add/projects-add.component */ 12669);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_Services_parameter_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/_Services/parameter.service */ 95636);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _focus_on_click_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./focus-on-click.directive */ 44926);

//import { CalendarOptions } from '@fullcalendar/angular';






























function ProjectInfoComponent_div_59_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r27.OnEditProject(ctx_r27.Pid, ctx_r27._ProjectName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "EidtBtn_single", ctx_r3.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("hidden", ctx_r3.Editbutton);
} }
function ProjectInfoComponent_div_59_span_18_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_span_18_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r29.OnEditProject_Desc(ctx_r29.Pid, ctx_r29.Proj_Desc)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "EidtBtn_single", ctx_r4.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("hidden", ctx_r4.Editbutton);
} }
function ProjectInfoComponent_div_59_label_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "label", 113)(1, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "svg", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "path", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r2.SubmissionType1, " ");
} }
function ProjectInfoComponent_div_59_div_37_h5_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "h5", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " Project Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_59_div_37_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "a", 120)(1, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} }
function ProjectInfoComponent_div_59_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 101)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ProjectInfoComponent_div_59_div_37_h5_2_Template, 2, 0, "h5", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ProjectInfoComponent_div_59_div_37_a_4_Template, 5, 0, "a", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r6.pro_act == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r6.pro_act == true);
} }
function ProjectInfoComponent_div_59_div_38_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_59_div_38_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h6", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "New deadline");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](5, 1, ctx_r35.new_deadline, "dd-MM-yyyy"), " ");
} }
function ProjectInfoComponent_div_59_div_38_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 129)(1, "div", 26)(2, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "svg", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "path", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 138)(6, "div", 139)(7, "h6", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, "Existing cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](13, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "div")(15, "h6", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, "New cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](11, 2, ctx_r36.Project_Cost, "SAR "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](19, 5, ctx_r36.new_cost, "SAR "), " ");
} }
function ProjectInfoComponent_div_59_div_38_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 173)(1, "div", 15)(2, "div")(3, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 175)(6, "div", 26)(7, "span", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "div", 177)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r37.initials1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r37.Submitted_By);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" on ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](10, 4, ctx_r37.requestDate, "dd-MM-yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r37.requestComments);
} }
function ProjectInfoComponent_div_59_div_38_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 178)(1, "div", 15)(2, "div")(3, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 175)(6, "div")(7, "span", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "div", 177)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "div", 179)(15, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r47.Initial);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r47.Submitted_By);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" on ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](10, 5, item_r47.Req_date, "dd-MM-yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r47.Req_Coments);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r47.Request_type);
} }
function ProjectInfoComponent_div_59_div_38_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_38_div_54_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r48.typeChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "label", 181)(2, "input", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_div_38_div_54_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r50.selectedType = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Conditional Accept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r39.selectedType);
} }
function ProjectInfoComponent_div_59_div_38_div_61_ng_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ng-option", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", item_r55.TypeID);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r55.RejectType, " ");
} }
function ProjectInfoComponent_div_59_div_38_div_61_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r53.rejDesc);
} }
function ProjectInfoComponent_div_59_div_38_div_61_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Please select Reject type!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_59_div_38_div_61_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 31)(1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Reject Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "ng-select", 183, 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_div_38_div_61_Template_ng_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r56.rejectType = $event); })("change", function ProjectInfoComponent_div_59_div_38_div_61_Template_ng_select_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r58.rejectApproval()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, ProjectInfoComponent_div_59_div_38_div_61_ng_option_7_Template, 2, 2, "ng-option", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, ProjectInfoComponent_div_59_div_38_div_61_span_8_Template, 2, 1, "span", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, ProjectInfoComponent_div_59_div_38_div_61_span_9_Template, 2, 0, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r40.rejectType);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r40.reject_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r40.rejectType != 1 && ctx_r40.rejectType);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r40.noRejectType == true);
} }
function ProjectInfoComponent_div_59_div_38_label_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Select From Existing Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_59_div_38_div_63_div_6_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_38_div_63_div_6_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r66); const item_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r64.clickonselect(item_r60.Req_Coments)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "svg", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "path", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} }
function ProjectInfoComponent_div_59_div_38_div_63_div_6_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_38_div_63_div_6_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); const item_r60 = ctx_r68.$implicit; const i_r61 = ctx_r68.index; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r67.clickondeselect(item_r60.Req_Coments, i_r61)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "svg", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "path", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} }
function ProjectInfoComponent_div_59_div_38_div_63_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 196)(1, "h6", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ProjectInfoComponent_div_59_div_38_div_63_div_6_span_4_Template, 3, 0, "span", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, ProjectInfoComponent_div_59_div_38_div_63_div_6_span_5_Template, 3, 0, "span", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r60 = ctx.$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", ctx_r59.exist_comment.indexOf(item_r60.Req_Coments) != -1 ? "text-info" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r60.Req_Coments);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r59.exist_comment.indexOf(item_r60.Req_Coments) == -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r59.exist_comment.indexOf(item_r60.Req_Coments) != -1);
} }
function ProjectInfoComponent_div_59_div_38_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 190)(1, "div", 191)(2, "div", 192)(3, "h6", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Existing Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ProjectInfoComponent_div_59_div_38_div_63_div_6_Template, 6, 4, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r42.rejectcommentsList);
} }
function ProjectInfoComponent_div_59_div_38_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 31)(1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Enter Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "textarea", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_div_38_div_64_Template_textarea_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r70.comments = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r43.comments);
} }
function ProjectInfoComponent_div_59_div_38_div_65_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 31)(1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Enter Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "textarea", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_div_38_div_65_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r72.comments = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r44.comments);
} }
function ProjectInfoComponent_div_59_div_38_div_66_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 205)(1, "button", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_38_div_66_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r74.submitApproval()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "button", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_38_div_66_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r75); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r76.resetApproval()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", !ctx_r45.comments || !ctx_r45.selectedType);
} }
function ProjectInfoComponent_div_59_div_38_div_67_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 205)(1, "button", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_38_div_67_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r77.submitApproval()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "button", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_38_div_67_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r78); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r79.resetApproval()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", !ctx_r46.selectedType);
} }
function ProjectInfoComponent_div_59_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 123)(1, "div", 124)(2, "div", 15)(3, "div", 125)(4, "div", 126)(5, "div", 127)(6, "div", 128)(7, "div", 129)(8, "div", 26)(9, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "svg", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](11, "path", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "div", 133)(13, "h6", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14, "Request type");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "h6", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "div", 129)(18, "div", 26)(19, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "svg", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](21, "path", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "div", 138)(23, "div", 139)(24, "h6", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](25, "Project deadline");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](29, ProjectInfoComponent_div_59_div_38_div_29_Template, 2, 0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](30, ProjectInfoComponent_div_59_div_38_div_30_Template, 6, 4, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](31, ProjectInfoComponent_div_59_div_38_div_31_Template, 20, 8, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](32, ProjectInfoComponent_div_59_div_38_div_32_Template, 14, 7, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "a", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](34, " View previous comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](35, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](36, ProjectInfoComponent_div_59_div_38_div_36_Template, 17, 8, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "div", 148)(38, "div", 26)(39, "div", 149)(40, "div", 150)(41, "span", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](42, "Project Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](43, "span", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](44, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](45, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](46, "div", 154)(47, "div", 155)(48, "div", 156)(49, "div")(50, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_38_Template_div_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r80.typeChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](51, "label", 158)(52, "input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_div_38_Template_input_ngModelChange_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r81); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r82.selectedType = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](53, "Accept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](54, ProjectInfoComponent_div_59_div_38_div_54_Template, 4, 1, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](55, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_38_Template_div_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r81); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r83.typeChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](56, "label", 161)(57, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_div_38_Template_input_ngModelChange_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r81); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r84.selectedType = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](58, "Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](59, "div", 163)(60, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](61, ProjectInfoComponent_div_59_div_38_div_61_Template, 10, 4, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](62, ProjectInfoComponent_div_59_div_38_label_62_Template, 2, 0, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](63, ProjectInfoComponent_div_59_div_38_div_63_Template, 7, 1, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](64, ProjectInfoComponent_div_59_div_38_div_64_Template, 6, 1, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](65, ProjectInfoComponent_div_59_div_38_div_65_Template, 4, 1, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](66, ProjectInfoComponent_div_59_div_38_div_66_Template, 5, 1, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](67, ProjectInfoComponent_div_59_div_38_div_67_Template, 5, 1, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()()()()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r7.requestType);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](28, 17, ctx_r7.date2, "dd-MM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r7.requestComments != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r7.prviousCommentsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r7.selectedType);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r7.requestType == "Project Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r7.selectedType);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r7.selectedType == "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r7.rejectType && ctx_r7.selectedType == "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r7.rejectType && ctx_r7.selectedType == "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r7.rejectType && ctx_r7.selectedType == "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r7.selectedType == "1" || ctx_r7.selectedType == "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r7.selectedType == "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r7.selectedType == "1" || ctx_r7.selectedType == "2");
} }
function ProjectInfoComponent_div_59_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 71)(1, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Submission Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 74)(6, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r2.SubmissionType1);
} }
function ProjectInfoComponent_div_59_ng_template_56_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 212)(1, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_56_div_4_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r93.onEditDeadline(ctx_r93.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "i", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 215)(4, "ul", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_56_div_4_Template_ul_click_4_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "li", 28)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7, "Deadline Extend");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](8, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 29)(10, "div", 30)(11, "div", 31)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "Select Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "div", 34)(17, "input", 217, 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_56_div_4_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r94); const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](22); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](_r92.open()); })("keydown.enter", function ProjectInfoComponent_div_59_ng_template_56_div_4_Template_input_keydown_enter_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r94); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r97.onProject_ExtendDeadline(ctx_r97.Pid, ctx_r97._MasterCode)); })("ngModelChange", function ProjectInfoComponent_div_59_ng_template_56_div_4_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r94); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r98._ProjDeadline = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](20, "mat-datepicker-toggle", 37)(21, "mat-datepicker", 31, 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "div", 39)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](25, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](27, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "textarea", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_ng_template_56_div_4_Template_textarea_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r94); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r99.extend_remarks = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](29, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "div", 41)(31, "button", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_56_div_4_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r94); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r100.onProject_ExtendDeadline(ctx_r100.Pid, ctx_r100._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](32, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_56_div_4_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r94); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r101.onCancel(ctx_r101.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](34, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](22);
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "DeadlineArea_", ctx_r87.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "Deadlinetext_", ctx_r87.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matDatepicker", _r92)("min", ctx_r87.EndDate1)("ngModel", ctx_r87._ProjDeadline);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("for", _r92);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r87.extend_remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", !ctx_r87._ProjDeadline || !ctx_r87.extend_remarks);
} }
function ProjectInfoComponent_div_59_ng_template_56_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 212)(1, "span", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_56_div_5_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r105); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](1(ctx_r104.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "i", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 224)(4, "ul", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_56_div_5_Template_ul_click_4_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "li", 28)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7, "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](8, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 29)(10, "div", 30)(11, "div", 225)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "Select Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "div", 226)(17, "input", 227, 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_56_div_5_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r105); const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](22); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](_r103.open()); })("keydown.enter", function ProjectInfoComponent_div_59_ng_template_56_div_5_Template_input_keydown_enter_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r105); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r108.onProject_Hold(ctx_r108.Pid, ctx_r108._MasterCode)); })("ngModelChange", function ProjectInfoComponent_div_59_ng_template_56_div_5_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r105); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r109.Holddate = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](20, "mat-datepicker-toggle", 37)(21, "mat-datepicker", 31, 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "div", 39)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](25, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](27, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "textarea", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_ng_template_56_div_5_Template_textarea_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r105); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r110.hold_remarks = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](29, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "div", 41)(31, "button", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_56_div_5_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r105); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r111.onProject_Hold(ctx_r111.Pid, ctx_r111._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](32, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_56_div_5_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r105); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r112.onCancel(ctx_r112.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](34, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](22);
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "HoldArea_", ctx_r88.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "Holdtext_", ctx_r88.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matDatepicker", _r103)("min", ctx_r88.minhold)("max", ctx_r88.maxhold)("ngModel", ctx_r88.Holddate);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("for", _r103);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r88.hold_remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", !ctx_r88.Holddate || !ctx_r88.hold_remarks);
} }
function ProjectInfoComponent_div_59_ng_template_56_h5_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 1, item_r2.DeadLine, "dd-MM-yyyy"), "");
} }
function ProjectInfoComponent_div_59_ng_template_56_h5_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "h5", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("title", "Extended Deadline ", ctx_r90.deadlineCount, " times!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 2, item_r2.DeadLine, "dd-MM-yyyy"), "");
} }
function ProjectInfoComponent_div_59_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 71)(1, "div", 208)(2, "p", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ProjectInfoComponent_div_59_ng_template_56_div_4_Template, 35, 8, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, ProjectInfoComponent_div_59_ng_template_56_div_5_Template, 35, 9, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](7, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, ProjectInfoComponent_div_59_ng_template_56_h5_9_Template, 3, 4, "h5", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, ProjectInfoComponent_div_59_ng_template_56_h5_10_Template, 3, 5, "h5", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r10.Current_user_ID == item_r2.OwnerEmpNo || ctx_r10.Current_user_ID == item_r2.Responsible || ctx_r10.Current_user_ID == item_r2.Authority) && (item_r2.Status != "Completed" && item_r2.Status != "Project Hold" && item_r2.Status != "Completion Under Approval" && item_r2.Status != "Deadline Extend Under Approval" && item_r2.Status != "Enactive Under Approval" && item_r2.Status != "Forward Under Approval" && item_r2.Status != "Project Hold Under Approval" && item_r2.Status != "New Project Rejected" && item_r2.Status != "Project Complete Rejected" && item_r2.Status != "ToDo Achieved" && item_r2.Status != "ToDo Completed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r10.Current_user_ID == item_r2.OwnerEmpNo || ctx_r10.Current_user_ID == item_r2.Responsible || ctx_r10.Current_user_ID == item_r2.Authority) && (item_r2.Status != "Project Hold" && item_r2.Status != "Completed" && item_r2.Status != "Forward Under Approval"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r10.deadlineCount == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r10.deadlineCount > 0);
} }
function ProjectInfoComponent_div_59_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 71)(1, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 74)(6, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", ctx_r11.Difference_In_Days, " days");
} }
function ProjectInfoComponent_div_59_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 71)(1, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 74)(6, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7, "Continuous");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
} }
function ProjectInfoComponent_div_59_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 71)(1, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Allocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 74)(6, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r2.Duration, " Hrs ");
} }
function ProjectInfoComponent_div_59_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 232)(1, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Allocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 74)(6, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r2.StandardDuration, " ");
} }
function ProjectInfoComponent_div_59_div_72_h5_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "h5", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("title", "", item_r2.Delaydays, " Days Delay!");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"]("", ctx_r118._MainProjectStatus, " (", item_r2.Delaydays, " days)");
} }
function ProjectInfoComponent_div_59_div_72_h5_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "h5", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", ctx_r119._MainProjectStatus, " ");
} }
function ProjectInfoComponent_div_59_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 71)(1, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ProjectInfoComponent_div_59_div_72_h5_6_Template, 2, 3, "h5", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, ProjectInfoComponent_div_59_div_72_h5_7_Template, 2, 1, "h5", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Delaydays > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Delaydays <= 0);
} }
function ProjectInfoComponent_div_59_ng_template_73_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r2.Status);
} }
function ProjectInfoComponent_div_59_ng_template_73_div_7_h5_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "h5", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("title", "", item_r2.Delaydays, " Days Delay!");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_div_7_h5_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "h5", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ProjectInfoComponent_div_59_ng_template_73_div_7_h5_1_Template, 2, 2, "h5", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ProjectInfoComponent_div_59_ng_template_73_div_7_h5_2_Template, 2, 1, "h5", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Delaydays > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Delayday <= 0);
} }
function ProjectInfoComponent_div_59_ng_template_73_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r2.Status);
} }
function ProjectInfoComponent_div_59_ng_template_73_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("title", " Hold till ", ctx_r129.proj_holddate, " !!");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r2.Status);
} }
function ProjectInfoComponent_div_59_ng_template_73_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r2.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 71)(1, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ProjectInfoComponent_div_59_ng_template_73_div_6_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, ProjectInfoComponent_div_59_ng_template_73_div_7_Template, 3, 2, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, ProjectInfoComponent_div_59_ng_template_73_div_8_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, ProjectInfoComponent_div_59_ng_template_73_div_9_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, ProjectInfoComponent_div_59_ng_template_73_div_10_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, ProjectInfoComponent_div_59_ng_template_73_div_11_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, ProjectInfoComponent_div_59_ng_template_73_div_12_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](13, ProjectInfoComponent_div_59_ng_template_73_div_13_Template, 3, 2, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, ProjectInfoComponent_div_59_ng_template_73_div_14_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](15, ProjectInfoComponent_div_59_ng_template_73_div_15_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](16, ProjectInfoComponent_div_59_ng_template_73_div_16_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](17, ProjectInfoComponent_div_59_ng_template_73_div_17_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](18, ProjectInfoComponent_div_59_ng_template_73_div_18_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](19, ProjectInfoComponent_div_59_ng_template_73_div_19_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](20, ProjectInfoComponent_div_59_ng_template_73_div_20_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](21, ProjectInfoComponent_div_59_ng_template_73_div_21_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](22, ProjectInfoComponent_div_59_ng_template_73_div_22_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](23, ProjectInfoComponent_div_59_ng_template_73_div_23_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](24, ProjectInfoComponent_div_59_ng_template_73_div_24_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](25, ProjectInfoComponent_div_59_ng_template_73_div_25_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](26, ProjectInfoComponent_div_59_ng_template_73_div_26_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "ToDo InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "Project Hold" && !ctx_r17.proj_holddate);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "Project Hold" && ctx_r17.proj_holddate);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "ToDo Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "New Todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "Completion Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "Forward Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "Project Complete Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "Enactive Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "Version");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "Project Holded");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "Project Hold Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "ToDo Achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status == "Standardtask Enactive Hold");
} }
function ProjectInfoComponent_div_59_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 74)(1, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r2.ReportType, " ");
} }
function ProjectInfoComponent_div_59_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 74)(1, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "No Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} }
const _c0 = function (a0) { return { width: a0 }; };
function ProjectInfoComponent_div_59_div_91_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "div", 245)(2, "small", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](6, "span", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r171.ProjectStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r171.ProjectPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](3, _c0, ctx_r171.ProjectPercentage));
} }
function ProjectInfoComponent_div_59_div_91_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "div", 245)(2, "small", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](6, "span", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r172.ProjectStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r172.ProjectPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](3, _c0, ctx_r172.ProjectPercentage));
} }
function ProjectInfoComponent_div_59_div_91_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "div", 245)(2, "small", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](6, "span", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r173.ProjectStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r173.ProjectPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](3, _c0, ctx_r173.ProjectPercentage));
} }
function ProjectInfoComponent_div_59_div_91_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "div", 245)(2, "small", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](6, "span", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r174.ProjectStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r174.ProjectPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](3, _c0, ctx_r174.ProjectPercentage));
} }
function ProjectInfoComponent_div_59_div_91_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "div", 245)(2, "small", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](6, "span", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r175.ProjectStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r175.ProjectPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](3, _c0, ctx_r175.ProjectPercentage));
} }
function ProjectInfoComponent_div_59_div_91_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "div", 245)(2, "small", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, " Just Started ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](6, "span", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r176.ProjectPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](2, _c0, ctx_r176.ProjectPercentage));
} }
function ProjectInfoComponent_div_59_div_91_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ProjectInfoComponent_div_59_div_91_div_1_div_1_Template, 7, 5, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ProjectInfoComponent_div_59_div_91_div_1_div_2_Template, 7, 5, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ProjectInfoComponent_div_59_div_91_div_1_div_3_Template, 7, 5, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ProjectInfoComponent_div_59_div_91_div_1_div_4_Template, 7, 5, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, ProjectInfoComponent_div_59_div_91_div_1_div_5_Template, 7, 5, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ProjectInfoComponent_div_59_div_91_div_1_div_6_Template, 7, 4, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r170.ProjectStatus == "Not Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r170.ProjectStatus == "Just Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r170.ProjectStatus == "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r170.ProjectStatus == "UnderCompletion");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r170.ProjectStatus == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r170.ProjectStatus == "ProjDuration0");
} }
function ProjectInfoComponent_div_59_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ProjectInfoComponent_div_59_div_91_div_1_Template, 7, 6, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status != "Completion Under Approval" && item_r2.Status != "Completed" && item_r2.Exec_BlockName != "Standard Tasks" && item_r2.Exec_BlockName != "Routine Tasks");
} }
function ProjectInfoComponent_div_59_div_103_ng_option_23_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r184.DisplayName);
} }
function ProjectInfoComponent_div_59_div_103_ng_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "ng-option", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ProjectInfoComponent_div_59_div_103_ng_option_23_a_1_Template, 2, 1, "a", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r184 = ctx.$implicit;
    const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", item_r184.Emp_No);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r179.EmpNo_Res != item_r184.Emp_No && ctx_r179.EmpNo_Own != item_r184.Emp_No);
} }
function ProjectInfoComponent_div_59_div_103_button_47_Template(rf, ctx) { if (rf & 1) {
    const _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_103_button_47_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r188); const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r187.onCancel(ctx_r187.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_59_div_103_button_48_Template(rf, ctx) { if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_103_button_48_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r190); const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r189.onTransferCancel(ctx_r189.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_59_div_103_Template(rf, ctx) { if (rf & 1) {
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 212)(1, "button", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_103_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r192); const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r191.onTransferClick(ctx_r191.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "svg", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "path", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Project transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 257)(7, "ul", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_103_Template_ul_click_7_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "li", 28)(9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "Project Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](11, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "div", 29)(13, "div", 30)(14, "div", 258)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, " Transfer To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](18, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "ng-select", 259, 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_div_103_Template_ng_select_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r192); const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r194.selectedEmpNo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](23, ProjectInfoComponent_div_59_div_103_ng_option_23_Template, 2, 2, "ng-option", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](24, "div", 225)(25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](26, "Set new deadline (optional):");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "div", 226)(28, "input", 261, 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_103_Template_input_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r192); const _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](33); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](_r181.open()); })("keydown.enter", function ProjectInfoComponent_div_59_div_103_Template_input_keydown_enter_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r192); const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r196.onProject_Transfer(ctx_r196.Pid, ctx_r196._MasterCode)); })("ngModelChange", function ProjectInfoComponent_div_59_div_103_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r192); const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r197.TransDate = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](31, "mat-datepicker-toggle", 37)(32, "mat-datepicker", 31, 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](36, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "div", 31)(38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](39, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](40, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](41, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](42, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](43, "textarea", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_div_103_Template_textarea_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r192); const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r198.transfer_remarks = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](44, "div", 41)(45, "button", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_103_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r192); const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r199.sweetAlert(ctx_r199.Pid, ctx_r199._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](46, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](47, ProjectInfoComponent_div_59_div_103_button_47_Template, 2, 0, "button", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](48, ProjectInfoComponent_div_59_div_103_button_48_Template, 2, 0, "button", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](33);
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "TransferArea_", ctx_r21.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "Transtext_", ctx_r21.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r21.selectedEmpNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r21.Employee_List);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("matDatepicker", _r181)("min", ctx_r21.minhold)("max", ctx_r21.maxhold)("ngModel", ctx_r21.TransDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("for", _r181);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("Existing Deadline: ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](36, 14, item_r2.DeadLine, "dd-MM-yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r21.transfer_remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", !ctx_r21.selectedEmpNo || !ctx_r21.transfer_remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Exec_BlockName != "Standard Tasks" && item_r2.Exec_BlockName != "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Exec_BlockName == "Standard Tasks" || item_r2.Exec_BlockName == "Routine Tasks");
} }
function ProjectInfoComponent_div_59_tr_169_Template(rf, ctx) { if (rf & 1) {
    const _r204 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "td", 265)(2, "a", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_tr_169_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r204); const itemMemos_r201 = restoredCtx.$implicit; const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r203.openUrl(itemMemos_r201.Url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "td", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_tr_169_Template_td_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r204); const itemMemos_r201 = restoredCtx.$implicit; const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r205.deleteMemos(itemMemos_r201.MailId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](5, "i", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const itemMemos_r201 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", itemMemos_r201.Subject, "");
} }
function ProjectInfoComponent_div_59_tr_187_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r212 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "a", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_tr_187_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r212); const tezz_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit; const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r210.OnPortfolioClick(tezz_r206.Portfolio_ID, tezz_r206.Portfolio_Name, tezz_r206.Created_By)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tezz_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](tezz_r206.Portfolio_Name);
} }
function ProjectInfoComponent_div_59_tr_187_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "i", 268);
} }
function ProjectInfoComponent_div_59_tr_187_Template(rf, ctx) { if (rf & 1) {
    const _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "td", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ProjectInfoComponent_div_59_tr_187_a_2_Template, 2, 1, "a", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_tr_187_Template_td_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r215); const tezz_r206 = restoredCtx.$implicit; const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r214.DeleteProject(ctx_r214.Pid, tezz_r206.Portfolio_ID, ctx_r214._MasterCode, ctx_r214._ProjectName, tezz_r206.Created_By)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ProjectInfoComponent_div_59_tr_187_i_4_Template, 1, 0, "i", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tezz_r206 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", tezz_r206.Portfolio_Name != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", tezz_r206.Portfolio_Name != "");
} }
function ProjectInfoComponent_div_59_div_190_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_div_35_h5_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "h5", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_div_35_h5_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "h5", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("title", "", task_r216.Delaydays, " Days Delay!");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ProjectInfoComponent_div_59_div_190_div_35_h5_1_Template, 2, 1, "h5", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, ProjectInfoComponent_div_59_div_190_div_35_h5_2_Template, 2, 2, "h5", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.Delayday == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.Delaydays > 0);
} }
function ProjectInfoComponent_div_59_div_190_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "h5", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", task_r216.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_190_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 86)(1, "div", 101)(2, "div", 26)(3, "div", 98)(4, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](5, "i", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 272)(8, "h5", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "div", 44)(11, "div", 70)(12, "div", 71)(13, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14, "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](16, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "div", 74)(18, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "div", 71)(21, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](22, "Responsible");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](24, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "div", 74)(26, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "div", 71)(29, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](30, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](32, "i", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](34, ProjectInfoComponent_div_59_div_190_div_34_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](35, ProjectInfoComponent_div_59_div_190_div_35_Template, 3, 2, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](36, ProjectInfoComponent_div_59_div_190_div_36_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](37, ProjectInfoComponent_div_59_div_190_div_37_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](38, ProjectInfoComponent_div_59_div_190_div_38_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](39, ProjectInfoComponent_div_59_div_190_div_39_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](40, ProjectInfoComponent_div_59_div_190_div_40_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](41, ProjectInfoComponent_div_59_div_190_div_41_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](42, ProjectInfoComponent_div_59_div_190_div_42_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](43, ProjectInfoComponent_div_59_div_190_div_43_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](44, ProjectInfoComponent_div_59_div_190_div_44_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](45, ProjectInfoComponent_div_59_div_190_div_45_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](46, ProjectInfoComponent_div_59_div_190_div_46_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](47, ProjectInfoComponent_div_59_div_190_div_47_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](48, ProjectInfoComponent_div_59_div_190_div_48_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](49, ProjectInfoComponent_div_59_div_190_div_49_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](50, ProjectInfoComponent_div_59_div_190_div_50_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](51, ProjectInfoComponent_div_59_div_190_div_51_Template, 3, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](52, "div", 70)(53, "div", 71)(54, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](55, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](56, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](57, "i", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](58, "div", 74)(59, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](61, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](62, "div", 71)(63, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](64, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](65, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](66, "i", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](67, "div", 74)(68, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](70, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](71, "div", 71)(72, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](73, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](74, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](75, "i", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](76, "div", 74)(77, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](79, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const task_r216 = ctx.$implicit;
    const i_r217 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" Action ", i_r217 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](task_r216.SubProject_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](task_r216.Subtask_Owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](task_r216.Subtask_Res);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.SubProject_Status == "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.SubProject_Status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.SubProject_Status == "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.SubProject_Status == "ToDo InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.SubProject_Status == "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.SubProject_Status == "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.SubProject_Status == "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.SubProject_Status == "ToDo Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.SubProject_Status == "New Todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.SubProject_Status == "Completion Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.SubProject_Status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.SubProject_Status == "Forward Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.SubProject_Status == "Project Complete Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.SubProject_Status == "Enactive Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.SubProject_Status == "Version");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.SubProject_Status == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.SubProject_Status == "Project Holded");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", task_r216.SubProject_Status == "Project Hold Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](61, 25, task_r216.StartDate, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](70, 28, task_r216.SubProject_DeadLine, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](79, 31, task_r216.Project_Cost, "SAR "));
} }
function ProjectInfoComponent_div_59_div_191_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 26)(1, "div", 282)(2, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "i", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 283)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div", 44)(9, "div", 70)(10, "div", 71)(11, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12, "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](14, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "div", 74)(16, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "div", 71)(19, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20, "Responsible");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](22, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "div", 74)(24, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "div", 71)(27, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](28, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](30, "i", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "div", 74)(32, "h5", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](33, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "div", 70)(35, "div", 71)(36, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](37, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](38, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](39, "i", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](40, "div", 74)(41, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](43, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](44, "div", 71)(45, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](46, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](47, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](48, "i", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](49, "div", 74)(50, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](52, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](53, "div", 71)(54, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](55, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](56, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](57, "i", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](58, "div", 74)(59, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](61, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const task_r259 = ctx.$implicit;
    const i_r260 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("Action ", i_r260 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](task_r259.SubProject_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](task_r259.Subtask_Owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](task_r259.Subtask_Res);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](43, 7, task_r259.StartDate, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](52, 10, task_r259.SubProject_DeadLine, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](61, 13, task_r259.Project_Cost, "SAR "));
} }
function ProjectInfoComponent_div_59_div_191_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 86)(1, "div", 279)(2, "div", 26)(3, "div", 98)(4, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](5, "i", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, " Action's Done List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, ProjectInfoComponent_div_59_div_191_div_7_Template, 62, 16, "div", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r25.CompletedList);
} }
function ProjectInfoComponent_div_59_div_192_div_7_div_60_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_59_div_192_div_7_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ProjectInfoComponent_div_59_div_192_div_7_div_60_p_1_Template, 2, 0, "p", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "i", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 74)(5, "h6", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r262.FileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r262.FileName);
} }
function ProjectInfoComponent_div_59_div_192_div_7_div_61_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_59_div_192_div_7_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, ProjectInfoComponent_div_59_div_192_div_7_div_61_p_1_Template, 2, 0, "p", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "i", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 74)(5, "h6", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r262.Remarks != "" && item_r262.Remarks != "null");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r262.Remarks);
} }
function ProjectInfoComponent_div_59_div_192_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 287)(1, "div", 282)(2, "div", 272)(3, "h5", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 44)(8, "div", 70)(9, "div", 71)(10, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11, "Assigned By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](13, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "div", 74)(15, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "div", 71)(18, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19, "Assigned Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](21, "i", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "div", 74)(23, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "div", 71)(27, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](28, "Assigned To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](30, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "div", 74)(32, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "div", 71)(35, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](36, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](38, "i", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](39, "div", 74)(40, "h5", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](42, "div", 71)(43, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](44, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](45, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](46, "i", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](47, "div", 74)(48, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](50, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](51, "div", 71)(52, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](53, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](54, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](55, "i", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](56, "div", 74)(57, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](59, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](60, ProjectInfoComponent_div_59_div_192_div_7_div_60_Template, 7, 2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](61, ProjectInfoComponent_div_59_div_192_div_7_div_61_Template, 7, 2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r262 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r262.Task_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r262.Task_Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r262.AssignedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](25, 10, item_r262.Creation_Date, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", item_r262.AssignedTo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r262.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](50, 13, item_r262.Start_Date, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](59, 16, item_r262.End_Date, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r262.FileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r262.Remarks != "" && item_r262.Remarks != "null");
} }
function ProjectInfoComponent_div_59_div_192_Template(rf, ctx) { if (rf & 1) {
    const _r270 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 86)(1, "div", 279)(2, "div", 98)(3, "button", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_192_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r270); const ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r269.scrldwn()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Assigned Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](6, "i", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, ProjectInfoComponent_div_59_div_192_div_7_Template, 62, 19, "div", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r26.AssigntaskList);
} }
function ProjectInfoComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r272 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "div", 46)(3, "div", 47)(4, "h5", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ProjectInfoComponent_div_59_span_6_Template, 2, 2, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "span", 50)(8, "div", 15)(9, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r272); const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r271._modelProjectName = $event); })("keydown.enter", function ProjectInfoComponent_div_59_Template_input_keydown_enter_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r272); const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r273.OnProject_Rename(ctx_r273.Pid, ctx_r273._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "div", 52)(11, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r272); const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r274.OnProject_Rename(ctx_r274.Pid, ctx_r274._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r272); const ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r275.onCancel(ctx_r275.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "p", 55)(16, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](18, ProjectInfoComponent_div_59_span_18_Template, 2, 2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "span", 58)(20, "div", 15)(21, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r272); const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r276._modelProjDesc = $event); })("keydown.enter", function ProjectInfoComponent_div_59_Template_input_keydown_enter_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r272); const ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r277.OnProject_Rename(ctx_r277.Pid, ctx_r277._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "div", 52)(23, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r272); const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r278.OnProject_Rename(ctx_r278.Pid, ctx_r278._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](24, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r272); const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r279.onCancel(ctx_r279.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](26, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "div")(28, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r272); const ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r280.moreDetails()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](29, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](30, "More Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "div")(32, "div", 61)(33, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](34, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](36, ProjectInfoComponent_div_59_label_36_Template, 5, 1, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](37, ProjectInfoComponent_div_59_div_37_Template, 5, 2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](38, ProjectInfoComponent_div_59_div_38_Template, 68, 20, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](39, "div", 67)(40, "div", 68)(41, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](42, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](43, "Project Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](44, "div", 44)(45, "div", 70)(46, "div", 71)(47, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](48, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](49, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](50, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](51, "div", 74)(52, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](54, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](55, ProjectInfoComponent_div_59_div_55_Template, 8, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](56, ProjectInfoComponent_div_59_ng_template_56_Template, 11, 4, "ng-template", null, 77, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](58, ProjectInfoComponent_div_59_div_58_Template, 8, 1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](59, ProjectInfoComponent_div_59_div_59_Template, 8, 0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](60, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](61, ProjectInfoComponent_div_59_div_61_Template, 8, 1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](62, ProjectInfoComponent_div_59_div_62_Template, 8, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](63, "div", 71)(64, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](65, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](66, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](67, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](68, "div", 74)(69, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](71, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](72, ProjectInfoComponent_div_59_div_72_Template, 8, 2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](73, ProjectInfoComponent_div_59_ng_template_73_Template, 27, 21, "ng-template", null, 81, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](75, "div", 70)(76, "div", 71)(77, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](78, "Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](79, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](80, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](81, "div", 74)(82, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](84, "div", 71)(85, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](86, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](87, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](88, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](89, ProjectInfoComponent_div_59_div_89_Template, 3, 1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](90, ProjectInfoComponent_div_59_div_90_Template, 3, 0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](91, ProjectInfoComponent_div_59_div_91_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](92, "div", 86)(93, "div", 87)(94, "div", 88)(95, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](97, "div", 90)(98, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](99, "Responsible");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](100, "h5", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](102, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](103, ProjectInfoComponent_div_59_div_103_Template, 49, 17, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](104, "div")(105, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_Template_button_click_105_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r272); const ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r281.bttn_RACI()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](106, "RACIS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](107, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](108, "div", 97)(109, "div", 44)(110, "div", 98)(111, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](112, "RACIS Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](113, "div", 70)(114, "div", 99)(115, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](116, "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](117, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](118, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](119, "div", 74)(120, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](122, "div", 99)(123, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](124, "Authority");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](125, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](126, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](127, "div", 74)(128, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](129);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](130, "div", 99)(131, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](132, "Coordinator");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](133, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](134, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](135, "div", 74)(136, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](137);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](138, "div", 99)(139, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](140, "Informer");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](141, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](142, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](143, "div", 74)(144, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](145);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](146, "div", 99)(147, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](148, "Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](149, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](150, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](151, "div", 74)(152, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](153);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](154, "div", 86)(155, "div", 101)(156, "div", 26)(157, "div", 102)(158, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](159, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](160, " DMS Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](161, "div")(162, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_Template_button_click_162_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r272); const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r282.AddDms()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](163, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](164, "Link DMS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](165, "div", 44)(166, "div", 103)(167, "table", 104)(168, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](169, ProjectInfoComponent_div_59_tr_169_Template, 6, 1, "tr", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](170, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](171);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](172, "div", 86)(173, "div", 101)(174, "div", 26)(175, "div", 98)(176, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](177, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](178, "Portfolio Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](179, "div")(180, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_Template_button_click_180_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r272); const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r283.AddPortfolio()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](181, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](182, "Link Portfolio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](183, "div", 44)(184, "div", 103)(185, "table", 104)(186, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](187, ProjectInfoComponent_div_59_tr_187_Template, 5, 2, "tr", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](188, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](189);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](190, ProjectInfoComponent_div_59_div_190_Template, 80, 34, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](191, ProjectInfoComponent_div_59_div_191_Template, 8, 1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](192, ProjectInfoComponent_div_59_div_192_Template, 8, 1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](57);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](74);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "pro_name_", ctx_r0.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r2.Project_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r0.Current_user_ID == item_r2.OwnerEmpNo || ctx_r0.Current_user_ID == item_r2.Responsible || ctx_r0.Current_user_ID == item_r2.Authority) && item_r2.Status != "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "spanTextbox_single", ctx_r0.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "textboxfocus_single", ctx_r0.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r0._modelProjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "Span_Desc_", ctx_r0.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r2.Project_Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r0.Current_user_ID == item_r2.OwnerEmpNo || ctx_r0.Current_user_ID == item_r2.Responsible || ctx_r0.Current_user_ID == item_r2.Authority) && item_r2.Status != "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "spanTextarea_single", ctx_r0.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "textboxfocus_single", ctx_r0.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngModel", ctx_r0._modelProjDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r2.Exec_BlockName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Exec_BlockName == "Standard Tasks" || item_r2.Exec_BlockName == "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.Current_user_ID == ctx_r0.approvalEmpId && item_r2.Status != "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.Current_user_ID == ctx_r0.approvalEmpId && ctx_r0.pro_act == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](54, 46, item_r2.DPG, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Exec_BlockName == "Standard Tasks" || item_r2.Exec_BlockName == "Routine Tasks")("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Exec_BlockName != "Standard Tasks" && item_r2.Exec_BlockName != "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Exec_BlockName == "Standard Tasks" || item_r2.Exec_BlockName == "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Exec_BlockName != "Standard Tasks" && item_r2.Exec_BlockName != "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Exec_BlockName == "Standard Tasks" || item_r2.Exec_BlockName == "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](71, 49, item_r2.Project_Cost, "SAR "));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0._MainProjectStatus == "Delay")("ngIfElse", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r2.Client_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.ReportType);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.ReportType == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r2.Status != "Completion Under Approval" && item_r2.Status != "Completed" && item_r2.Exec_BlockName != "Standard Tasks" && item_r2.Exec_BlockName != "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r0.initials, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r0.Project_Responsible);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r0.Current_user_ID == item_r2.OwnerEmpNo || ctx_r0.Current_user_ID == item_r2.Responsible) && (item_r2.Status != "Completed" && item_r2.Status != "Project Hold" && item_r2.Status != "Completion Under Approval" && item_r2.Status != "Deadline Extend Under Approval" && item_r2.Status != "Enactive Under Approval" && item_r2.Status != "Forward Under Approval" && item_r2.Status != "Project Hold Under Approval" && item_r2.Status != "Under Approval" && item_r2.Status != "New Project Rejected" && item_r2.Status != "Project Complete Rejected" && item_r2.Status != "ToDo Achieved" && item_r2.Status != "ToDo Completed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("hidden", ctx_r0._raciDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r2.Project_Owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r2.Team_Autho);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r2.Team_Coor);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r2.Team_Informer);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r2.Team_Support);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r0._MemosSubjectList);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r0._MemosNotFound);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r0._portfoliolist);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r0.noPort);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r0.Subtask_List);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.CompletedList != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r0.AssigntaskList != "");
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
        this.dropdownSettings_Memo = {};
        this.dropdownSettings_Portfolio = {};
        this._raciDetails = true;
        this._modelProjAlloc = 0;
        this.exist_comment = [];
        this.noRejectType = false;
        this.pro_act = true;
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
            this.getapprovalStats();
            this.fun_LoadProjectDetails();
            this.getdeadlinecount();
            this.getProjectHoldDate();
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
    scrldwn() {
        $('#mysideInfobar').animate({ scrollTop: $(document).height() + $('#mysideInfobar').height() });
    }
    fun_LoadProjectDetails() {
        // alert(this.Summarytype);
        this.service.SubTaskDetailsService(this.projectCode).subscribe((data) => {
            //console.log("Project Details---->", data);
            if (data != null && data != undefined) {
                this.ProjectInfo_List = JSON.parse(data[0]['ProjectInfo']);
                this.Employee_List = JSON.parse(data[0]['EmployeeDropdown']);
                // console.log(this.Employee_List,'EMPList');
                this._portfoliolist = JSON.parse(data[0]['Portfolio_json']);
                // console.log(this.ProjectInfo_List,"pt");
                // this.ifcategoryZero = this.ProjectInfo_List['CompleteReportType'];
                // if (Object.keys(data).length > 0) {
                this.Subtask_List = JSON.parse(data[0]['SubtaskDetails_Json']);
                this.CompletedList = JSON.parse(data[0]['CompletedTasks_Json']);
                this.AssigntaskList = JSON.parse(data[0]['AssigntaskDetails_Json']);
                // // this.CompletedList.push(this.Subtask_List);
                // console.log("subtask Details--->",this.Subtask_List);
                // console.log("Assign Details--->",this.AssigntaskList);
                this.totalSubtaskHours = (data[0]['SubtaskHours']);
                this.TotalWork_Hours = data[0]['TotalHours'];
                this.ProjectPercentage = data[0]['ProjectPercentage'] + '%';
                this.ProjectStatus = data[0]['ProjectStatus'];
                this._MainProjectStatus = data[0]['MainProjectStatus'];
                //console.log("ProjectDetails-->", this.ProjectInfo_List);
                this.date1 = this.ProjectInfo_List[0]['DPG'];
                this.date2 = this.ProjectInfo_List[0]['DeadLine'];
                this.Project_Cost = this.ProjectInfo_List[0]['Project_Cost'];
                this.EndDate1 = this.date2;
                this.Pid = this.ProjectInfo_List[0]['id'];
                this._MasterCode = this.ProjectInfo_List[0]['Project_Code'];
                this._ProjectName = this.ProjectInfo_List[0]['Project_Name'];
                this.Proj_Desc = this.ProjectInfo_List[0]['Project_Description'];
                this.Comp_No = this.ProjectInfo_List[0]['Emp_Comp_No'];
                this.Project_Owner = this.ProjectInfo_List[0]['Project_Owner'];
                this.EmpNo_Own = this.ProjectInfo_List[0]['OwnerEmpNo'];
                this.EmpNo_Res = this.ProjectInfo_List[0]['Responsible'];
                this.EmpNo_Autho = this.ProjectInfo_List[0]['Authority'];
                // alert(this.EmpNo_Own);
                //console.log("Date In ----->", this.date1, this.date2)
                this.Project_Responsible = this.ProjectInfo_List[0]['Team_Res'];
                // Date Diff In Days...
                this.date1 = moment__WEBPACK_IMPORTED_MODULE_0__(this.date1);
                this.date2 = moment__WEBPACK_IMPORTED_MODULE_0__(this.date2);
                this.Difference_In_Days = Math.abs(this.date1.diff(this.date2, 'days'));
                this.subtaskNotFoundMsg = "";
                this._subtaskDiv = false;
                // For  More Details Component...
                this.MoreDetailsList = [
                    { ProjectCode: this.ProjectInfo_List[0]['Project_Code'] },
                    { ProjectName: this.ProjectInfo_List[0]['Project_Name'] },
                    { Description: this.ProjectInfo_List[0]['Project_Description'] },
                    { StartDate: this.ProjectInfo_List[0]['DPG'] },
                    { EndDate: this.ProjectInfo_List[0]['DeadLine'] },
                    { Cost: this.ProjectInfo_List[0]['Project_Cost'] },
                    { Client: this.ProjectInfo_List[0]['Client_Name'] },
                    { Owner: this.ProjectInfo_List[0]['Project_Owner'] },
                    { Responsible: this.ProjectInfo_List[0]['Team_Res'] },
                    { Authority: this.ProjectInfo_List[0]['Team_Autho'] },
                    { Coordinator: this.ProjectInfo_List[0]['Team_Coor'] },
                    { Informer: this.ProjectInfo_List[0]['Team_Informer'] },
                    { Support: this.ProjectInfo_List[0]['Team_Support'] },
                    { ProjectType: this.ProjectInfo_List[0]['Project_Block'] },
                    { Authorty_EmpNo: this.ProjectInfo_List[0]['Authority'] },
                    { Responisble_EmpNo: this.ProjectInfo_List[0]['Responsible'] },
                    { Category: this.ProjectInfo_List[0]['ReportType'] },
                    { Owner_EmpNo: this.ProjectInfo_List[0]['OwnerEmpNo'] },
                ];
                let List_string = JSON.stringify(this.MoreDetailsList);
                localStorage.setItem("moreDetails", List_string);
                const fullName = this.Project_Responsible.split(' ');
                this.initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
                this.initials = this.initials.toUpperCase();
            }
            else {
                this._subtaskDiv = true;
                this.subtaskNotFoundMsg = "No Subtask found";
            }
            if ((this._portfoliolist.length == 1) && (this._portfoliolist[0]['Portfolio_Name'] == '')) {
                this._portfoliolist = [];
                this.noPort = "No portfolios linked";
            }
            else {
                this.noPort = "";
                // console.log(this._portfoliolist,this.Pid, this._MasterCode,this._ProjectName,this.Current_user_ID,"portfolio list");
            }
        });
        this._OpenMemosInfo(this.projectCode);
    }
    ngOnDestroy() {
    }
    closeInfo() {
        this.selectedType = null;
        this.commentSelected = null;
        this.comments = "";
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
        if ((this._portfoliolist.length == 1) && (this._portfoliolist[0]['Portfolio_Name'] == '')) {
            this._portfolioLength = 0;
        }
        else
            this._portfolioLength = this._portfoliolist.length;
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
        this.fun_LoadProjectDetails();
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
        this._portfoliolist.forEach(element => {
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
                    this.fun_LoadProjectDetails();
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
        // console.log("projt Code------->",projectCode);
        // this._displayProjName = ProjName;
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
        var myurl = `${url}/${this.projectCode}`;
        var myWindow = window.open(myurl, this.projectCode);
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
                this.fun_LoadProjectDetails();
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
            this.comments = this.comments + "" + com;
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
    submitApproval() {
        if (this.requestType != 'Project Forward' && this.requestType != 'Task Complete') {
            if (this.selectedType == '1') {
                this.approvalObj.Emp_no = this.Current_user_ID;
                this.approvalObj.Project_Code = this.projectCode;
                this.approvalObj.Request_type = this.requestType;
                if (this.comments == '' || this.comments == null) {
                    this.approvalObj.Remarks = 'Accepted';
                }
                else {
                    this.approvalObj.Remarks = this.comments;
                }
                this.approvalservice.InsertAcceptApprovalService(this.approvalObj).
                    subscribe((data) => {
                    this._Message = (data['message']);
                    if (this._Message == 'Not Authorized' || this._Message == '0') {
                        this.notifyService.showError("project not approved", 'Failed.');
                    }
                    else {
                        this.notifyService.showSuccess("Project Approved Successfully", this._Message);
                        this.fun_LoadProjectDetails();
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
                            this._notification.viewAll();
                        }
                    }
                });
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
                        this.fun_LoadProjectDetails();
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
                            this._notification.viewAll();
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
                    this.approvalObj.Emp_no = this.Current_user_ID;
                    this.approvalObj.Project_Code = this.projectCode;
                    this.approvalObj.Request_type = this.requestType;
                    this.approvalObj.rejectType = this.rejectType;
                    this.approvalObj.Remarks = this.comments;
                    this.approvalservice.InsertRejectApprovalService(this.approvalObj).
                        subscribe((data) => {
                        this._Message = (data['message']);
                        if (this._Message == 'Not Authorized' || this._Message == '0') {
                            this.notifyService.showError("project not approved", 'Failed.');
                        }
                        else {
                            this.notifyService.showSuccess(this._Message, "Rejected Successfully");
                            this.fun_LoadProjectDetails();
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
                                this._notification.viewAll();
                            }
                        }
                    });
                }
            }
            else if (this.selectedType == '4') {
                this.notifyService.showError("Not Approved - Development under maintainance", "Failed");
            }
            this.closeInfo();
        }
        else if (this.requestType == 'Project Forward') {
            if (this.selectedType == '3') {
                if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
                    this.noRejectType = true;
                    this.notifyService.showError("Please select Reject Type", "Failed");
                    return false;
                }
                else {
                    this.approvalObj.Emp_no = this.Current_user_ID;
                    this.approvalObj.Project_Code = this.projectCode;
                    this.approvalObj.Request_type = this.requestType;
                    this.approvalObj.rejectType = this.rejectType;
                    this.approvalObj.Remarks = this.comments;
                    this.approvalservice.InsertRejectApprovalService(this.approvalObj).
                        subscribe((data) => {
                        this._Message = (data['message']);
                        if (this._Message == 'Not Authorized') {
                            this.notifyService.showError("project not approved.", 'you are not authorized to approve the project!!');
                            this.notifyService.showInfo('to approve the project', 'Please contact the Project Owner');
                        }
                        else {
                            this.notifyService.showSuccess(this._Message, "Rejected Successfully");
                            this.fun_LoadProjectDetails();
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
                                this._notification.viewAll();
                            }
                        }
                    });
                }
            }
            else if (this.selectedType == '1') {
                this.Employee_List.forEach(element => {
                    if (element.Emp_No == this.newResponsible) {
                        this.new_Res = element.DisplayName;
                    }
                });
                this.approvalObj.Emp_no = this.Current_user_ID;
                this.approvalObj.Responsible = this.newResponsible;
                this.approvalObj.deadline = this.requestDeadline;
                this.approvalObj.Project_Code = this.projectCode;
                if (this.comments == '' || this.comments == null) {
                    this.approvalObj.Remarks = 'Accepted';
                }
                else {
                    this.approvalObj.Remarks = this.comments;
                }
                this.approvalservice.InsertTransferApprovalService(this.approvalObj).subscribe(data => {
                    this._Message = data['message'];
                    if (this._Message == '1') {
                        this.notifyService.showSuccess("Project transferred to " + this.new_Res + '(' + this.approvalObj.Responsible + ')' + " from " + this.Project_Responsible + '(' + this.EmpNo_Res + ')', "Successfully Transferred");
                        this.fun_LoadProjectDetails();
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
                            this._notification.viewAll();
                        }
                    }
                    else if (this._Message == '2') {
                        this.notifyService.showSuccess("Project Transfer request sent to the transferee -" + this.new_Res + '(' + this.approvalObj.Responsible + ')', "Transfer under approval!");
                        this.fun_LoadProjectDetails();
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
                            this._notification.viewAll();
                        }
                    }
                    else if (this._Message == '4' || this._Message == null) {
                        this.notifyService.showError("Please contact Support.", "Project Not Transferred!");
                    }
                });
            }
            this.closeInfo();
        }
        else if (this.requestType == 'Task Complete') {
            if (this.selectedType == '1') {
                this.approvalObj.Emp_no = this.Current_user_ID;
                this.approvalObj.Project_Code = this.projectCode;
                this.approvalObj.Request_Date = this.requestDate;
                this.approvalObj.Request_type = this.requestType;
                this.approvalObj.rejectType = null;
                this.approvalObj.approvaltype = 'Accept';
                if (this.comments == '' || this.comments == null) {
                    this.approvalObj.Remarks = 'Accepted';
                }
                else {
                    this.approvalObj.Remarks = this.comments;
                }
                this.approvalservice.InsertStandardApprovalService(this.approvalObj).
                    subscribe((data) => {
                    this._Message = (data['message']);
                    if (this._Message == 'Not Authorized' || this._Message == '0') {
                        this.notifyService.showError("project not approved", 'Failed.');
                    }
                    else {
                        this.notifyService.showSuccess("Project Approved Successfully", this._Message);
                        this.fun_LoadProjectDetails();
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
                            this._notification.viewAll();
                        }
                    }
                });
                console.log(this.approvalObj, "task");
            }
            else if (this.selectedType == '3') {
                if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
                    this.noRejectType = true;
                    this.notifyService.showError("Please select Reject Type", "Failed");
                    return false;
                }
                else {
                    this.approvalObj.Emp_no = this.Current_user_ID;
                    this.approvalObj.Project_Code = this.projectCode;
                    this.approvalObj.Request_Date = this.requestDate;
                    this.approvalObj.Request_type = this.requestType;
                    this.approvalObj.rejectType = this.rejectType;
                    this.approvalObj.Remarks = this.comments;
                    this.approvalObj.approvaltype = 'Reject';
                    this.approvalservice.InsertStandardApprovalService(this.approvalObj).
                        subscribe((data) => {
                        this._Message = (data['message']);
                        if (this._Message == 'Not Authorized' || this._Message == '0') {
                            this.notifyService.showError("project not approved", 'Failed.');
                        }
                        else {
                            this.notifyService.showSuccess(this._Message, "Rejected Successfully");
                            this.fun_LoadProjectDetails();
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
                                this._notification.viewAll();
                            }
                        }
                    });
                    console.log(this.approvalObj, "task");
                }
            }
            else if (this.selectedType == '4') {
                this.notifyService.showError("Not Approved - Development under maintainance", "Failed");
            }
            this.closeInfo();
        }
    }
    getapprovalStats() {
        this.approvalEmpId = null;
        this.selectedType = null;
        this.commentSelected = null;
        this.comments = "";
        this.approvalObj.Project_Code = this.projectCode;
        this.approvalservice.GetApprovalStatus(this.approvalObj).subscribe((data) => {
            this.requestDetails = data;
            if (this.requestDetails.length > 0) {
                this.requestType = (this.requestDetails[0]['Request_type']);
                this.forwardType = (this.requestDetails[0]['ForwardType']);
                if (this.requestType == 'Project Forward' && this.forwardType != 'T') {
                    this.pro_act = false;
                }
                this.requestDate = (this.requestDetails[0]['Request_date']);
                this.requestDeadline = (this.requestDetails[0]['Request_deadline']);
                this.approvalEmpId = (this.requestDetails[0]['Emp_no']);
                this.requestComments = (this.requestDetails[0]['Remarks']);
                this.new_deadline = (this.requestDetails[0]['new_deadline']);
                this.hold_upto = (this.requestDetails[0]['hold_date']);
                this.new_cost = (this.requestDetails[0]['new_cost']);
                this.new_duration = (this.requestDetails[0]['new_duration']);
                this.comments_list = JSON.parse(this.requestDetails[0]['comments_Json']);
                this.Submitted_By = (this.requestDetails[0]['Submitted_By']);
                const fullName = this.Submitted_By.split(' ');
                this.initials1 = fullName.shift().charAt(0) + fullName.pop().charAt(0);
                this.initials1 = this.initials1.toUpperCase();
                this.reject_list = JSON.parse(this.requestDetails[0]['reject_list']);
                this.prviousCommentsList = JSON.parse(this.requestDetails[0]['previousComments_JSON']);
                this.transfer_json = JSON.parse(this.requestDetails[0]['transfer_json']);
                if (this.requestType == 'Project Forward') {
                    this.newResponsible = (this.transfer_json[0]['newResp']);
                }
                // console.log(this.transfer_json, 'transfer');
            }
            // console.log(this.comments_list, "req")
            // console.log(this.approvalEmpId ,this.requestComments,this.requestDate,this.requestDeadline,this.requestType,"request status");
        });
    }
    resetApproval() {
        this.selectedType = null;
        this.commentSelected = null;
        this.noRejectType = false;
    }
    rejectApproval() {
        // this.commentSelected = null;
        // this.comments = "";
        this.noRejectType = false;
        if (this.rejectType != null || this.rejectType != "") {
            this.reject_list.forEach(element => {
                if (this.rejectType == element.TypeID) {
                    this.rejDesc = element.Reject_Description;
                }
            });
            this.approvalObj.Emp_no = this.Current_user_ID;
            this.approvalObj.rejectType = this.rejectType;
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
            this.approvalservice.GetRejectComments(this.approvalObj).subscribe(data => {
                this.rejectcommentsList = JSON.parse(data[0]['reject_CommentsList']);
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
            this.service._ProjectDeadlineExtendService(Pcode, this._ProjDeadline, null, this.extend_remarks).subscribe(data => {
                this._Message = data['message'];
                if (this._Message == 'Project Deadline not Updated') {
                    this.notifyService.showError(this._Message + '.' + "Please select the appropriate date and try again.", "Failed");
                    this.fun_LoadProjectDetails();
                }
                else if (this._Message == 'Project Deadline Updated') {
                    this.notifyService.showSuccess(this._Message + " by " + this.Current_user_ID, "Success");
                    this.fun_LoadProjectDetails();
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
                    this.fun_LoadProjectDetails();
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
        this.Employee_List.forEach(element => {
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
                this.fun_LoadProjectDetails();
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
                this.fun_LoadProjectDetails();
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
                    this._notification.viewAll();
                }
            }
            else if (this._Message == '3') {
                this.notifyService.showSuccess("Project Transfer request sent to Project Owner -" + this.Project_Owner + '(' + this.EmpNo_Own + ')', "Transfer under approval!");
                this.fun_LoadProjectDetails();
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
    btmspace_opn() {
        document.getElementById("btm-space").classList.remove("d-none");
    }
    close_space() {
        document.getElementById("btm-space").classList.add("d-none");
    }
}
ProjectInfoComponent.ɵfac = function ProjectInfoComponent_Factory(t) { return new (t || ProjectInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_8__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_9__.LinkService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_Services_approvals_service__WEBPACK_IMPORTED_MODULE_10__.ApprovalsService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_11__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_12__.BsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_13__.ProjectsSummaryComponent), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_portfolio_projects_portfolio_projects_component__WEBPACK_IMPORTED_MODULE_14__.PortfolioProjectsComponent), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_view_dashboard_projects_view_dashboard_projects_component__WEBPACK_IMPORTED_MODULE_15__.ViewDashboardProjectsComponent), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_16__.ToDoProjectsComponent), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_notification_notification_component__WEBPACK_IMPORTED_MODULE_17__.NotificationComponent), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_projects_add_projects_add_component__WEBPACK_IMPORTED_MODULE_18__.ProjectsAddComponent), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_Services_parameter_service__WEBPACK_IMPORTED_MODULE_19__.ParameterService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_21__.ElementRef)); };
ProjectInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({ type: ProjectInfoComponent, selectors: [["app-project-info"]], inputs: { inputFromParent: "inputFromParent" }, decls: 107, vars: 20, consts: [["id", "LinkSideBar", 1, "sideInfobar", "shadow-0", "animate-right", 3, "hidden"], [1, "px-4", "pt-4", "pb-1"], [1, "offcanvas-header", "d-flex", "align-items-center", "justify-content-between", "pb-2"], [1, "font-weight-bold", "m-0"], [1, "fa", "fa-link", "mr-1"], ["href", "javascript:void(0)", 1, "closebtn", "btn", "btn-xs", "btn-icon", "btn-hover-primary", 3, "click"], [1, "fa", "fa-times"], [1, "kt-nav"], [1, "kt-nav__head", "d-block"], [1, "text-primary"], [1, "M_fsize"], [1, "badge", "badge-pill", "badge-outline-info"], [1, "badge", "badge-pill", "badge-outline-success"], [1, "kt-nav__separator"], [1, "kt-nav__item", "px-4"], [1, "d-flex"], [1, "mutlidropdown-set", "mutlidropdown-full", "mr-1", 2, "flex", "3", 3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onDeSelect"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", 3, "disabled", "click"], [1, "kt-nav__foot"], ["id", "LinkSideBar1", 1, "sideInfobar", "shadow-0", "animate-right", 3, "hidden"], ["appFocusOnClick", "", 1, "mutlidropdown-set", "mutlidropdown-full", "mr-1", 2, "flex", "3", 3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right", "offcanvas", 3, "hidden"], ["class", "card-body", 4, "ngFor", "ngForOf"], [1, "btn22", "btn", "btn-label-primary", "btn-pill", "btn-sm", "mr-2", "d-none", 3, "click"], ["id", "btm-space", 1, "spacer-tab", "d-none"], [1, "spacer--body"], [1, ""], [1, "kt-nav", "pb-0"], [1, "kt-nav__head", "py-0"], [1, "height-scroll", "h-scr"], [1, "px-4", "py-3"], [1, "form-group"], [1, "text-danger"], ["reuired", "", "placeholder", "Select Employee", 1, "form-control"], [1, "d-flex", "input-group"], ["placeholder", "Select Date", "name", "date", 1, "form-control"], [1, "input-group-append"], ["matSuffix", "", 1, "btn-secondary", 3, "for"], ["picker5", ""], [1, "form-group", "mb-1"], ["placeholder", "", "rows", "2", "cols", "20", 1, "form-control", 2, "height", "70px"], [1, "px-4", "pb-3"], [1, "btn", "btn-info", "btn-sm", "mr-2", "text-white"], [1, "btn", "btn-outline-info", "btn-sm", "text-dark-75", 3, "click"], [1, "card-body"], [1, "d-flex", "align-items-start", "justify-content-between", "mt-0"], [1, "flex-1"], [1, "d-flex", "align-items-center"], [1, "fs-3", "mb-2", "d-inline-blck", 3, "id"], ["class", "text-info mb-2", 3, "hidden", "id", "click", 4, "ngIf"], [1, "kt-inbox__subject", "mb-2", "w-100", 2, "display", "none", 3, "id"], ["type", "text", 1, "form-control", 2, "width", "78%", "height", "32px", 3, "id", "ngModel", "ngModelChange", "keydown.enter"], ["id", "button-addon4", 1, "d-inline-block", "ml-3"], [1, "btn", "btn-primary", "btn", "btn-sm", "mr-2", 3, "click"], [1, "btn", "btn-secondary", "btn", "btn-sm", 3, "click"], [1, "mb-2"], [1, "text-muted", "fs-5", 3, "id"], ["class", "text-info fs-5", 3, "hidden", "id", "click", 4, "ngIf"], [1, "kt-inbox__subject", "mt-2", 2, "display", "none", 3, "id"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "py-1", 3, "click"], [1, "fa", "fa-chart-bar"], [1, "mt-1"], [1, "kt-badge", "kt-bg-light-primary", "kt-badge--inline"], [1, "fa", "fa-clone", "mr-2"], ["class", " kt-badge kt-bg-light-primary kt-badge--inline ml-2", 4, "ngIf"], ["class", "d-flex  align-items-center justify-content-between mt-3", 4, "ngIf"], ["class", "card card-itm1 mt-2 collapse show", "id", "pro_actns", 4, "ngIf"], [1, "border-top", "mt-3"], [1, "mt-3"], [1, "fa", "fa-file-alt", "mr-2"], [1, "row"], [1, "col-md-4"], [1, "mt-2", "mb-1", "text-muted", "fs-7"], [1, "fas", "fa-calendar-alt", "fs-3", "text-muted", "mr-2"], [1, "w-100"], [1, "my-1", "font-14"], ["class", "col-md-4", 4, "ngIf", "ngIfElse"], ["EndDate", ""], ["class", "col-md-4", 4, "ngIf"], ["class", "col-md-4 pricevalues text-left py-0", 4, "ngIf"], [1, "fas", "fa-wallet", "fs-3", "text-muted", "mr-2"], ["other", ""], [1, "fas", "fa-briefcase", "fs-3", "text-muted", "mr-2"], [1, "fas", "fa-bars", "fs-3", "text-muted", "mr-2"], ["class", "w-100", 4, "ngIf"], ["class", "card-body", 4, "ngIf"], [1, "border-top"], [1, "d-flex", "align-items-center", "my-3"], [1, "d-flex", "flex-grow-1", "align-items-center"], [1, "name-box", "text-center"], [1, "names-response"], ["clas", "fs-10"], [1, "fs-4", "my-1"], [1, "ml-2", "mt-3"], ["class", "dropdown", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "py-1", "pr-2", "dwn-arw", 3, "click"], [1, "ml-1", "mb-1", "fa", "fa-chevron-up"], ["id", "raciDetails", 1, "card", "border-0", "shadow-sm", "mb-3", 3, "hidden"], [1, "my-2"], [1, "col-md-6"], [1, "fas", "fa-caret-right", "fs-2", "text-success", "mr-2"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-3"], [1, "my-0"], [1, "fs-6"], [1, "table"], [4, "ngFor", "ngForOf"], [2, "color", "gray"], ["class", " border-top", 4, "ngFor", "ngForOf"], ["class", "border-top", 4, "ngIf"], [1, "text-info", "mb-2", 3, "hidden", "id", "click"], ["data-toggle", "tooltip", "title", "edit project name", 1, "fas", "fa-edit", "ml-2", "mb-1", "curser-pointer"], [1, "text-info", "fs-5", 3, "hidden", "id", "click"], ["data-toggle", "tooltip", "title", "edit description", 1, "fas", "fa-edit", "ml-2", "mb-1", "curser-pointer"], [1, "kt-badge", "kt-bg-light-primary", "kt-badge--inline", "ml-2"], [1, "mr-1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "13", "height", "12"], ["d", "M8 19.9998V21.9323C8 22.2085 7.77614 22.4323 7.5 22.4323C7.38303 22.4323 7.26977 22.3913 7.17991 22.3164L3.06093 18.8839C2.84879 18.7072 2.82013 18.3919 2.99691 18.1797C3.09191 18.0657 3.23264 17.9998 3.38103 17.9998L18 17.9998C19.1046 17.9998 20 17.1044 20 15.9998V7.99985H22V15.9998C22 18.209 20.2091 19.9998 18 19.9998H8ZM16 3.99985V2.06738C16 1.79124 16.2239 1.56738 16.5 1.56738C16.617 1.56738 16.7302 1.60839 16.8201 1.68327L20.9391 5.11575C21.1512 5.29253 21.1799 5.60782 21.0031 5.81995C20.9081 5.93395 20.7674 5.99986 20.619 5.99986L6 5.99985C4.89543 5.99985 4 6.89528 4 7.99985V15.9998H2V7.99985C2 5.79071 3.79086 3.99985 6 3.99985H16Z"], ["class", "text-hover-underline text-hover-info mb-0", "data-toggle", "collapse", "href", "#pro_actns", "role", "button", "aria-expanded", "true", "aria-controls", "pro_actns", 4, "ngIf"], ["class", "text-info text-hover-underline", "data-toggle", "collapse", "href", "#pro_actns", "role", "button", "aria-expanded", "true", "aria-controls", "pro_actns", 4, "ngIf"], ["data-toggle", "collapse", "href", "#pro_actns", "role", "button", "aria-expanded", "true", "aria-controls", "pro_actns", 1, "text-hover-underline", "text-hover-info", "mb-0"], ["data-toggle", "collapse", "href", "#pro_actns", "role", "button", "aria-expanded", "true", "aria-controls", "pro_actns", 1, "text-info", "text-hover-underline"], [1, "c1"], [1, "s1"], ["id", "pro_actns", 1, "card", "card-itm1", "mt-2", "collapse", "show"], [1, "card-body", "px-0"], [1, "w-45"], [1, "px-cb"], [1, "pb-2"], ["id", "ProjectDetails_Main", 1, "proctdetls"], [1, "d-flex", "align-items-center", "mb-3"], [1, "svg-icon", "svg-icon-2x", "text-primary", "mr-2"], ["_ngcontent-jrv-c350", "", "width", "24", "height", "24", "viewBox", "0 0 40 40", "aria-hidden", "true", "focusable", "false", "fill", "currentColor"], ["_ngcontent-jrv-c350", "", "d", "M30.5,9h-7.8l-3.6-3.6C18.2,4.5,16.9,4,15.6,4h-5.1C6.9,4,4,6.9,4,10.5v19c0,3.6,2.9,6.5,6.5,6.5h19c3.6,0,6.5-2.9,6.5-6.5v-15C36,11.5,33.5,9,\n                                            30.5,9z M33,29.5c0,1.9-1.6,3.5-3.5,3.5h-19C8.6,33,7,31.4,7,29.5v-19C7,8.6,8.6,7,10.5,7h5.1c0.5,0,1,0.2,1.4,0.6l4.1,4c0.3,0.3,0.7,0.4,1.1,0.4h8.4c1.4,\n                                            0,2.5,1.1,2.5,2.5L33,29.5L33,29.5z M13.5,13L13.5,13c0.8,0,1.5,0.7,1.5,1.5v13c0,0.8-0.7,1.5-1.5,1.5l0,0c-0.8,0-1.5-0.7-1.5-1.5v-13C12,13.7,12.7,13,13.5,13z\n                                            M25.5,18L25.5,18c0.8,0,1.5,0.7,1.5,1.5v8c0,0.8-0.7,1.5-1.5,1.5l0,0c-0.8,0-1.5-0.7-1.5-1.5v-8C24,18.7,24.7,18,25.5,18z M19.5,22L19.5,22c0.8,0,1.5,0.7,1.5,1\n                                            .5v4c0,0.8-0.7,1.5-1.5,1.5l0,0c-0.8,0-1.5-0.7-1.5-1.5v-4C18,22.7,18.7,22,19.5,22z"], [1, "action-content"], [1, "txtm-cus", "mb-1", "pt-1"], [1, "mt-1", "text-blue"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", "width", "24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"], [1, "action-content", "d-flex", "align-items-center", "gap-1"], [1, "left-w"], [1, "txtm-cus", "pt-1"], ["class", "px-1", 4, "ngIf"], [4, "ngIf"], ["class", "d-flex align-items-center mb-3", 4, "ngIf"], ["class", "comment-list my-3 pb-0", 4, "ngIf"], ["data-toggle", "collapse", "href", "#prevco", "role", "button", "aria-expanded", "false", "aria-controls", "prevco", 1, "btn--1", "btn-info--1", "btn-sm--1", "text-info", "py-2"], ["id", "prevco", 1, "px-cb", "pt-cb", "bg-gry", "collapse", "kt-portlet__body_scroll", "prv-cmts"], ["class", "comment-list", 4, "ngFor", "ngForOf"], [1, "px-3", "w-55", "flex-1", "br-cus"], [1, "card-title", "mb-0"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "det-text", "pro-nm", "pl-1", "text-blue"], [2, "color", "red"], [1, "fas", "fa-chevron-up", "text-info1", "mr-2", "d-none"], ["id", "proj_act_acc", 1, "px-1"], [1, "pro_act_div", "px-0", "pt-1"], [1, "form-group", "mb-2"], [1, "form-check-inline", 3, "click"], [1, "form-check-label", "lbl-suc", "btn-app"], ["id", "rdbButtons_0", "type", "radio", "name", "rdbButtons", "value", "1", "checked", "checked", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["class", "form-check-inline", 3, "click", 4, "ngIf"], [1, "form-check-label", "lbl-dan", "btn-app"], ["id", "rdbButtons_2", "type", "radio", "name", "rdbButtons", "value", "3", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["id", "comts1", 1, ""], [1, "col-md-12", "checked-rad", "pl-1", "pt-3"], ["class", "form-group", 4, "ngIf"], ["class", "mb-2", 4, "ngIf"], ["class", "appr-comts", 4, "ngIf"], ["class", "d-flex justify-content-end mb-2", 4, "ngIf"], [1, "px-1"], [1, "la", "la-arrow-right", "mx-3", "fs-4", "font-weight-bold"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", "height", "24", "width", "24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"], [1, "comment-list", "my-3", "pb-0"], [1, "name-box", "text-center", "mt-1"], [1, "d-flex", "flex-column", "flex-grow-1"], [1, "comt-info"], [1, "comt-text"], [1, "comment-list"], [1, "blw", "mt-2"], [1, "kt-badge", "kt-badge--inline", "kt-badge--unified-info"], [1, "form-check-label", "lbl-war", "btn-app"], ["id", "rdbButtons_1", "type", "radio", "name", "rdbButtons", "value", "2", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["required", "", "name", "rej_type", "placeholder", "Select Reject Type", "id", "rej_type", 3, "ngModel", "ngModelChange", "change"], ["action", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["style", "color:grey", 4, "ngIf"], ["style", "color:red", 4, "ngIf"], [3, "value"], [2, "color", "grey"], [1, "appr-comts"], [1, "exs-cmts", "card"], [1, "card-header"], [1, "mb-0"], [1, "crd-bdy", "scroll-y"], ["class", "cmts-items", 4, "ngFor", "ngForOf"], [1, "cmts-items"], [3, "ngClass"], [1, "cmts-actns"], ["class", "cmts-svg", 3, "click", 4, "ngIf"], [1, "cmts-svg", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24"], ["d", "M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"], ["d", "M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"], [1, "form-control", "h-100px", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-end", "mb-2"], ["type", "submit", "primary", "true", 1, "btn", "btn-sm", "py-1", "btn-info", "mr-2", 3, "disabled", "click"], [1, "btn", "btn-sm", "py-1", "btn-secondary", 3, "click"], [1, "d-flex", "mt-2", "mb-1"], [1, "m-0", "text-muted", "fs-7"], ["class", "my-1 font-14", 4, "ngIf"], ["class", "my-1 font-14", "style", "color:rgb(112, 45, 45)", "data-toggle", "kt-tooltip", 3, "title", 4, "ngIf"], [1, "dropdown"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", "no-after", "text-info", 3, "click"], ["data-toggle", "tooltip", "title", "extend deadline", 1, "fas", "fa-edit", "ml-2", "mb-1", "curser-pointer"], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-fit", "date-drop1", 3, "id"], [1, "kt-nav", "pb-0", 3, "click"], ["matInput", "", "placeholder", "Select Date", "name", "date", 1, "form-control", 3, "matDatepicker", "id", "min", "ngModel", "click", "keydown.enter", "ngModelChange"], ["Deadlinetext", "ngModel"], ["picker2", ""], ["placeholder", "", "rows", "2", "cols", "20", 1, "form-control", 2, "height", "70px", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-info", "btn-sm", "mr-2", "text-white", 3, "disabled", "click"], ["type", "button", "id", "hold-icn", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", "no-after", "text-info", 3, "click"], ["data-toggle", "tooltip", "title", "project hold", 1, "fas", "fa-pause", "ml-2", "mb-1", "curser-pointer"], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-fit", "date-drop2", 3, "id"], [1, "form-group", "input-group"], [1, "input-group"], ["matInput", "", "placeholder", "Select Date", "name", "date", 1, "form-control", 3, "matDatepicker", "id", "min", "max", "ngModel", "click", "keydown.enter", "ngModelChange"], ["Holddt", "ngModel"], ["picker3", ""], ["data-toggle", "kt-tooltip", 1, "my-1", "font-14", 2, "color", "rgb(112, 45, 45)", 3, "title"], [1, "fa", "fa-clock", "fs-3", "text-muted", "mr-2"], [1, "col-md-4", "pricevalues", "text-left", "py-0"], [1, "fas", "fa-star", "fs-3", "text-muted", "mr-2"], ["class", "my-1 font-14 text-danger", "data-toggle", "tooltip", 3, "title", 4, "ngIf"], ["class", "my-1 font-14 text-danger", 4, "ngIf"], ["data-toggle", "tooltip", 1, "my-1", "font-14", "text-danger", 3, "title"], [1, "my-1", "font-14", "text-danger"], [1, "my-1", "font-14", "text-info"], [1, "my-1", "font-14", "text-warning"], [1, "my-1", "font-14", "text-primary"], [1, "my-1", "font-14", "text-success"], [1, "my-1", "font-14", 2, "color", "#c0b5dc"], ["class", "progress_bar", 4, "ngIf"], [1, "progress_bar"], [1, "pro-bar"], [1, "progress_bar_title"], [1, "progress_number"], ["data-value", "0", "data-percentage-value", "0", 1, "progress-bar-inner", "bg-today", 3, "ngStyle"], ["data-value", "10", "data-percentage-value", "10", 1, "progress-bar-inner", "bg-today", 3, "ngStyle"], ["data-value", "40", "data-percentage-value", "40", 1, "progress-bar-inner", "bg-today", 3, "ngStyle"], ["data-value", "90", "data-percentage-value", "90", 1, "progress-bar-inner", "bg-today", 3, "ngStyle"], ["data-value", "100", "data-percentage-value", "100", 1, "progress-bar-inner", "bg-today", 3, "ngStyle"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "data-toggle", "tooltip", "title", "click to transfer", 1, "btn", "btn-primary", "btn-sm", "py-1", "px-2", "dropdown-toggle", "no-after", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 2, "width", "16px", "height", "16px", "fill", "#fff"], ["d", "M19.1643 12.0001L12.9572 5.79297L11.543 7.20718L16.3359 12.0001L11.543 16.793L12.9572 18.2072L19.1643 12.0001ZM13.5144 12.0001L7.30728 5.79297L5.89307 7.20718L10.686 12.0001L5.89307 16.793L7.30728 18.2072L13.5144 12.0001Z"], [1, "ml-1"], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-fit", "date-drop3", 3, "id"], [1, "form-group", 3, "id"], ["reuired", "", "placeholder", "Select Employee", 3, "ngModel", "ngModelChange"], ["transfer", "ngModel"], ["matInput", "", "placeholder", "Select Date", "name", "date", 1, "form-control", 3, "matDatepicker", "min", "max", "ngModel", "click", "keydown.enter", "ngModelChange"], ["Transdt", "ngModel"], ["picker4", ""], ["class", "btn btn-outline-info btn-sm text-dark-75", 3, "click", 4, "ngIf"], [1, "tr-9"], ["href", "javascript:void(0)", 3, "click"], [1, "align-top", "curser-pointer", 3, "click"], [1, "fas", "fa-trash-alt", "text-primary"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "fas fa-trash-alt text-primary", 4, "ngIf"], [1, "fa", "fa-window-restore", "mr-2"], [1, "d-flex", "mt-3", "flex-column"], [1, "fs-4", "mb-1"], [1, "fas", "fa-user-tie", "fs-3", "text-muted", "mr-2"], [1, "fas", "fa-calendar-alt", "fs-2", "text-muted", "mr-2"], [1, "fas", "fa-wallet", "fs-2", "text-muted", "mr-2"], [1, "1", "my-1", "font-14", "text-info"], [2, "color", "#c0b5dc"], [1, "d-block", "align-items-center", "justify-content-between", "mt-3"], [1, "fa", "fa-list", "mr-2"], ["class", "", 4, "ngFor", "ngForOf"], [1, "text-left", "mt-3"], [1, "text-left", "my-3"], ["type", "button", "id", "asgnid-colpse", "data-toggle", "collapse", "data-target", "#assignlapse", "aria-expanded", "false", 1, "btn", "btn-primary", "btn-sm", "py-1", "d-flex", "align-items-center", "asgn-colpse", "collapsed", 3, "click"], [1, "fa", "fa-chevron-up", "ml-2", "m-0"], ["id", "assignlapse", "class", "collapse", "aria-labelledby", "assignlapse", 4, "ngFor", "ngForOf"], ["id", "assignlapse", "aria-labelledby", "assignlapse", 1, "collapse"], [1, "fs-3", "mb-2"], [1, "text-muted", "fs-5"], ["class", "mt-2 mb-1 text-muted fs-7", 4, "ngIf"], [1, "fas", "fa-file-pdf", "fs-2", "text-muted", "mr-2"], [1, "fas", "fa-registered", "fs-2", "text-muted", "mr-2"]], template: function ProjectInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, " Link DMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_a_click_6_listener() { return ctx.closeLinkSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "ul", 7)(9, "li", 8)(10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, " Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, " Linked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "li", 14)(21, "div", 15)(22, "ng-multiselect-dropdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_Template_ng_multiselect_dropdown_ngModelChange_22_listener($event) { return ctx.ngDropdwonMemo = $event; })("onSelect", function ProjectInfoComponent_Template_ng_multiselect_dropdown_onSelect_22_listener() { return ctx.Memo_Select(ctx.ngDropdwonMemo); })("onDeSelect", function ProjectInfoComponent_Template_ng_multiselect_dropdown_onDeSelect_22_listener() { return ctx.Memo_Deselect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_button_click_23_listener() { return ctx._AddLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](24, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](25, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "div", 19)(27, "div", 1)(28, "div", 2)(29, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](30, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](31, " Link Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](32, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_a_click_32_listener() { return ctx.closeLinkSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](33, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "ul", 7)(35, "li", 8)(36, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](37, " Portfolios");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](39, " Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](42, " Linked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](46, "li", 14)(47, "div", 15)(48, "ng-multiselect-dropdown", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_Template_ng_multiselect_dropdown_ngModelChange_48_listener($event) { return ctx.ngDropdwonPort = $event; })("onSelect", function ProjectInfoComponent_Template_ng_multiselect_dropdown_onSelect_48_listener() { return ctx.Portfolio_Select(ctx.ngDropdwonPort); })("onDeSelect", function ProjectInfoComponent_Template_ng_multiselect_dropdown_onDeSelect_48_listener() { return ctx.Portfolio_Deselect(ctx.ngDropdwonPort); })("onSelectAll", function ProjectInfoComponent_Template_ng_multiselect_dropdown_onSelectAll_48_listener($event) { return ctx.Portfolio_SelectAll($event); })("onDeSelectAll", function ProjectInfoComponent_Template_ng_multiselect_dropdown_onDeSelectAll_48_listener() { return ctx.Portfolio_DeSelectAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](49, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_button_click_49_listener() { return ctx.addProjectToPortfolio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](50, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](51, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](52, "div", 21)(53, "div", 1)(54, "div", 2)(55, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](56, " Project Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](57, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_a_click_57_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](58, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](59, ProjectInfoComponent_div_59_Template, 193, 52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](60, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_button_click_60_listener() { return ctx.btmspace_opn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](61, "Edit Tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](62, "div", 24)(63, "div", 25)(64, "div", 26)(65, "ul", 27)(66, "li", 28)(67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](68, "New End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](70, "Action: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](72, "Project_Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](73, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](74, "div", 29)(75, "div", 30)(76, "div", 31)(77, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](78, " Transfer To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](79, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](80, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](81, "select", 33)(82, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](83, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](84, "div", 31)(85, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](86, "Set new End Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](87, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](88, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](89, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](90, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](91, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](92, "mat-datepicker-toggle", 37)(93, "mat-datepicker", 31, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](95, "div", 39)(96, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](97, "Remarks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](98, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](99, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](100, "textarea", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](101, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](102, "div", 41)(103, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](104, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](105, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_button_click_105_listener() { return ctx.close_space(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](106, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("hidden", ctx._LinkSideBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx._displayProjName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx._totalMemos, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx._mappedMemos, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("placeholder", "Select Memo")("settings", ctx.dropdownSettings_Memo)("data", ctx.Memos_List)("ngModel", ctx.ngDropdwonMemo);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", !ctx.ngDropdwonMemo);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("hidden", ctx._LinkSideBar1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx.totalPortfolios, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx._portfolioLength, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("placeholder", "Select Portfolio(s)")("settings", ctx.dropdownSettings_Portfolio)("data", ctx._portfoliosList)("ngModel", ctx.ngDropdwonPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx._SelectedPorts == " " || ctx._SelectedPorts == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("hidden", ctx._openInfoSideBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx.ProjectInfo_List);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("for", _r1);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgStyle, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_26__.MultiSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__["ɵr"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatSuffix, _focus_on_click_directive__WEBPACK_IMPORTED_MODULE_20__.FocusOnClickDirective, _angular_common__WEBPACK_IMPORTED_MODULE_23__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe], styles: [".name-box[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    font-size: 9px;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    letter-spacing: 2px;\r\n    border-radius: 50%;\r\n    line-height: 30px;\r\n    margin-right: 5px;\r\n  }\r\n.names-response[_ngcontent-%COMP%]{\r\n    display :inline-block;\r\n    text-align: left;\r\n  }\r\n.names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{\r\n    display: block;\r\n    font-size: 10px;\r\n    font-weight: 600;\r\n  }\r\n.names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{\r\n    font-weight: 600;\r\n  }\r\n.head-btn[_ngcontent-%COMP%]{\r\n    background-color: rgba(88, 103, 221, 0.1);\r\n      padding: 3px 10px 3px 5px;\r\n      border-radius: 2rem;\r\n      border: 1px solid #b3bcff;\r\n      font-weight: 500;\r\n      font-size: 12px;\r\n  }\r\n.head-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n      width: 25px;\r\n      height: 25px;\r\n      background: #5867dd;\r\n      color: #fff;\r\n      line-height: 25px;\r\n      text-align: center;\r\n      border-radius: 50%;\r\n      margin-right: 3px;\r\n  }\r\n.devider[_ngcontent-%COMP%]{\r\n    height: 1px;\r\n    width: 100%;\r\n    background-color: #f1f1f1;\r\n  }\r\n.pricevalues[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n    padding-bottom: 10px;\r\n    \r\n  }\r\n.top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(1), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(2)  {\r\n    border-top: 1px solid #f1f1f1;\r\n  }\r\n.top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(3), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(4)  {\r\n    border-bottom: none\r\n  }\r\n\r\n\r\n.w-60[_ngcontent-%COMP%]{\r\n    width: 60px;\r\n  }\r\n.dms-links[_ngcontent-%COMP%]{\r\n    list-style-type: disc;\r\n  }\r\n.dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: block;\r\n    text-decoration: underline;\r\n    font-weight: 600;\r\n    margin-bottom: 5px;\r\n  }\r\n.py-10px[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n  }\r\n.dropdown-item[_ngcontent-%COMP%]:active{\r\n    background-color: #dedee0;\r\n  }\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .pro-bar[_ngcontent-%COMP%] {\r\n    background: hsl(0, 0%, 97%);\r\n    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;\r\n    height: 4px;\r\n    margin-bottom: 12px;\r\n    margin-top: 30px;\r\n    position: relative;\r\n    text-align: left;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress_bar_title[_ngcontent-%COMP%] {\r\n    color: hsl(218, 4%, 50%);\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    position: relative;\r\n    top: -28px;\r\n    z-index: 1;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress_number[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%] {\r\n    background-color: hsl(0, 0%, 88%);\r\n    display: block;\r\n    width: 0;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transition: width 1s linear 0s;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    background-color: hsl(0, 0%, 100%);\r\n    border-radius: 50%;\r\n    width: 4px;\r\n    height: 4px;\r\n    position: absolute;\r\n    right: 1px;\r\n    top: 0;\r\n    z-index: 1;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    width: 14px;\r\n    height: 14px;\r\n    background-color: inherit;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    right: -4px;\r\n    top: -5px;\r\n  }\r\n.bg-today[_ngcontent-%COMP%] {\r\n    background-color: #342bf0 !important;\r\n  }\r\n.M_fsize[_ngcontent-%COMP%]{\r\n    font-size: smaller;\r\n  }\r\n.badge[_ngcontent-%COMP%] {\r\n    border-radius: 0;\r\n    font-size: 12px;\r\n    line-height: 1;\r\n    padding: .375rem .5625rem;\r\n    font-weight: normal;\r\n  }\r\n.port_list[_ngcontent-%COMP%]{\r\n    \r\n    padding: 0.75rem 1rem;\r\n\r\n  }\r\n\r\n.border-bottom[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #dee2e6!important;\r\n}\r\n.show1[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.show[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n.item-b[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(n+4) {\r\n    display: none;\r\n}\r\n.tr-9[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n}\r\n.no-after[_ngcontent-%COMP%]::after{\r\n  content: none !important;\r\n}\r\n.hold-drop[_ngcontent-%COMP%]{\r\n  width: 500px;\r\n}\r\n.br-cus[_ngcontent-%COMP%] {\r\n  border-left: 1px solid #eee;\r\n}\r\n.card-itm1[_ngcontent-%COMP%]{\r\n  background: #fff;\r\n    border: 1px solid #ebedf2;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 1px #00000026;\r\n}\r\n\r\n.black_overlay[_ngcontent-%COMP%]{\r\n  display: none;\r\n  position: fixed;\r\n  top: 0%;\r\n  left: 0%;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0,0,0,.32);\r\n  z-index: 90;\r\n  -moz-opacity: .8;\r\n  opacity: .8;\r\n  filter: alpha(opacity=80);\r\n}\r\n.comment-list[_ngcontent-%COMP%]{\r\n  padding-bottom: 1.25rem;\r\n}\r\n.comt-text[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 5px;\r\n  \r\n  font-size: 14px;\r\n}\r\n.blw[_ngcontent-%COMP%]   .dt[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\r\n.comt-info[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  color: #494f54;\r\n\r\n}\r\n.prv-cmts[_ngcontent-%COMP%]{\r\n max-height: 200px;\r\n overflow: auto; \r\n}\r\n.s1[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   .c1[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   .s1[_ngcontent-%COMP%]{\r\n  display: inline;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]:before, .dwn-arw[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]:before {\r\n  content: \"\\f078\";\r\n}\r\n.action-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\r\n  margin-bottom: 0;\r\n}\r\n.date-drop1[_ngcontent-%COMP%], .date-drop2[_ngcontent-%COMP%], .date-drop3[_ngcontent-%COMP%] {\r\n  width: 350px;\r\n}\r\n  .input-group-append .mat-icon-button {\r\n  height: 35px !important;\r\n}\r\n.date-drop1[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n    left: -329px;\r\n}\r\n.date-drop2[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n    left: -332px\r\n}\r\n.date-drop3[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n    left: -169px\r\n}\r\n.w-45[_ngcontent-%COMP%] {\r\n  width: 45% !important;\r\n}\r\n.w-55[_ngcontent-%COMP%] {\r\n  width: 55% !important;\r\n}\r\n  .no-ellip span.ng-option-label {\r\n    text-overflow: unset;\r\n    white-space: break-spaces;\r\n\r\n}\r\n.fixed-btn[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  z-index: 99;\r\n  bottom: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.spacer-tab[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: fixed;\r\n  z-index: 999;\r\n  border: 1px solid rgb(232 234 237);\r\n  overflow: auto;\r\n  max-height: 450px;\r\n  opacity: 1;\r\n  width: 400px;\r\n  bottom: 20px;\r\n  right: 10px;\r\n  box-shadow: -1px 2px 20px #00478a21;\r\n  border-radius: 8px;\r\n  padding: 5px 0;\r\n  background-color: rgb(255 255 255);\r\n}\r\n\r\n.spacer--body[_ngcontent-%COMP%] {\r\n  margin-left: 0;\r\n  padding-left: 10px;\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n  background-color: #fff;\r\n}\r\n  .input-group-append .mat-icon-button {\r\n  height: 35px !important;\r\n}\r\n#sidebar-overlay[_ngcontent-%COMP%] {\r\n  background-color: rgba(50, 58, 70, .2);\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: none;\r\n  z-index: 998;\r\n  transition: all .2s ease-out;\r\n  cursor: pointer;\r\n}\r\n.left-w[_ngcontent-%COMP%]{\r\n  min-width: 105px;\r\n}\r\n.cmts-items[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px 15px;\r\n  border-bottom: 1px solid #e4e7e8;\r\n}\r\n.cmts-svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n  height: 20px;\r\n  fill: #8d95a5;\r\n}\r\n.appr-comts[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  flex: 1;\r\n}\r\n.exs-cmts[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  color: #4b4343;\r\n}\r\n.exs-cmts[_ngcontent-%COMP%]   .crd-bdy[_ngcontent-%COMP%]{  \r\n  overflow: auto;\r\n  max-height: 200px;\r\n}\r\n.cmts-items[_ngcontent-%COMP%]:hover   .cmts-svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  transform: scale(1.1);\r\n  fill: #2786fb;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQztBQUNqQztJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLHlDQUF5QztNQUN2Qyx5QkFBeUI7TUFDekIsbUJBQW1CO01BQ25CLHlCQUF5QjtNQUN6QixnQkFBZ0I7TUFDaEIsZUFBZTtFQUNuQjtBQUNBO01BQ0ksV0FBVztNQUNYLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsV0FBVztNQUNYLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLGlCQUFpQjtFQUNyQjtBQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEI7dUNBQ21DO0VBQ3JDO0FBRUE7SUFDRSw2QkFBNkI7RUFDL0I7QUFDQTtJQUNFO0VBQ0Y7QUFFQSxnQ0FBZ0M7QUFDaEM7O0tBRUc7QUFFSDtJQUNFLFdBQVc7RUFDYjtBQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBLHFDQUFxQztBQUV2QztJQUNJLDJCQUEyQjtJQUMzQixnREFBZ0Q7SUFDaEQsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0VBQ1o7QUFFQTtJQUNFLFlBQVk7RUFDZDtBQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLDhCQUE4QjtFQUNoQztBQUVBO0lBQ0UsV0FBVztJQUNYLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTixVQUFVO0VBQ1o7QUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0VBQ1g7QUFFQTtJQUNFLG9DQUFvQztFQUN0QztBQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSwrQkFBK0I7SUFDL0IscUJBQXFCOztFQUV2QjtBQUNBOztHQUVDO0FBQ0Q7SUFDRSwwQ0FBMEM7QUFDOUM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsZ0JBQWdCO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiwrQkFBK0I7QUFDbkM7QUFDQTs7R0FFRztBQUNIO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjOztBQUVoQjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtJQUNoQjtBQUNKO0FBQ0E7RUFDRSxrQkFBa0I7SUFDaEI7QUFDSjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQix5QkFBeUI7O0FBRTdCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTs7Ozs7R0FLRztBQUNIO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtDQUFrQztBQUNwQztBQUNBOztHQUVHO0FBQ0g7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsU0FBUztFQUNULE9BQU87QUFDVDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2YiLCJmaWxlIjoicHJvamVjdC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBOZXcgZGVzaWduIENTUyAgZnJvbSBIZXJlLi4uICovXHJcbi5uYW1lLWJveHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYW1lcy1yZXNwb25zZXtcclxuICAgIGRpc3BsYXkgOmlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYW1lcy1yZXNwb25zZSBzcGFuOmZpcnN0LWNoaWxke1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICAubmFtZXMtcmVzcG9uc2Ugc3BhbjpsYXN0LWNoaWxke1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWQtYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OCwgMTAzLCAyMjEsIDAuMSk7XHJcbiAgICAgIHBhZGRpbmc6IDNweCAxMHB4IDNweCA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmhlYWQtYnRuIGl7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM1ODY3ZGQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIH1cclxuICBcclxuICAuZGV2aWRlcntcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICAucHJpY2V2YWx1ZXMge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC8qIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTsgKi9cclxuICB9XHJcbiAgXHJcbiAgLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgxKSwgLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgyKSAge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgfVxyXG4gIC50b3AtYm9yZGVyIC5wcmljZXZhbHVlczpudGgtY2hpbGQoMyksIC50b3AtYm9yZGVyIC5wcmljZXZhbHVlczpudGgtY2hpbGQoNCkgIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmVcclxuICB9XHJcbiAgXHJcbiAgLyogLnByaWNldmFsdWVzOm50aC1jaGlsZCgyKSwgICovXHJcbiAgLyogLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIC53LTYwe1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kbXMtbGlua3N7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbiAgfVxyXG4gIFxyXG4gIC5kbXMtbGlua3MgbGkgYXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICAucHktMTBweHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1pdGVtOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZTA7XHJcbiAgfVxyXG5cclxuICAvKiA9PT09PT09PT0gUHJvZ3Jlc3MgQmFyID09PT09PT09PSAqL1xyXG5cclxuLnByb2dyZXNzX2JhciAucHJvLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDk3JSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggaHNsYSgwLCAwJSwgMCUsIDAuMSkgaW5zZXQ7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfYmFyX3RpdGxlIHtcclxuICAgIGNvbG9yOiBoc2woMjE4LCA0JSwgNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0yOHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfbnVtYmVyIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2dyZXNzX2JhciAucHJvZ3Jlc3MtYmFyLWlubmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgODglKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMXMgbGluZWFyIDBzO1xyXG4gIH1cclxuICBcclxuICAucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDFweDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ncmVzc19iYXIgLnByb2dyZXNzLWJhci1pbm5lcjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC00cHg7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZy10b2RheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQyYmYwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5NX2ZzaXple1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gIH1cclxuICAuYmFkZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNTYyNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIC5wb3J0X2xpc3R7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNmZhOyAqL1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG5cclxuICB9XHJcbiAgLyogLnBvcnRfbGlzdC5ib3JkZXItYm90dG9tOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2IWltcG9ydGFudDtcclxufSAqL1xyXG4gIC5ib3JkZXItYm90dG9tIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2IWltcG9ydGFudDtcclxufVxyXG4uc2hvdzEge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNob3c6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaXRlbS1iIGRpdjpudGgtY2hpbGQobis0KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi50ci05e1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuLm5vLWFmdGVyOjphZnRlcntcclxuICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhvbGQtZHJvcHtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuLmJyLWN1cyB7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcbi5jYXJkLWl0bTF7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmVkZjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxcHggIzAwMDAwMDI2O1xyXG59XHJcbi8qIC5kYXRlLWVkdHtcclxuICB3aWR0aDogNTAwcHg7XHJcbn0gKi9cclxuLmJsYWNrX292ZXJsYXl7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwJTtcclxuICBsZWZ0OiAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMzIpO1xyXG4gIHotaW5kZXg6IDkwO1xyXG4gIC1tb3otb3BhY2l0eTogLjg7XHJcbiAgb3BhY2l0eTogLjg7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTgwKTtcclxufVxyXG4uY29tbWVudC1saXN0e1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xyXG59XHJcbi5jb210LXRleHR7XHJcbiAgLyogY29sb3I6ICMxNDE3MWE7ICovXHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAvKiBtYXJnaW4tdG9wOiAycHg7ICovXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5ibHcgLmR0IHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG4uY29tdC1pbmZvIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjNDk0ZjU0O1xyXG5cclxufVxyXG4ucHJ2LWNtdHN7XHJcbiBtYXgtaGVpZ2h0OiAyMDBweDtcclxuIG92ZXJmbG93OiBhdXRvOyBcclxufVxyXG4uczF7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY29sbGFwc2VkIC5jMXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jb2xsYXBzZWQgLnMxe1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4uY29sbGFwc2VkIC5mYS1jaGV2cm9uLXVwOmJlZm9yZSwgLmR3bi1hcncgLmZhLWNoZXZyb24tdXA6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZjA3OFwiO1xyXG59XHJcbi5hY3Rpb24tY29udGVudCBoNntcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5kYXRlLWRyb3AxLCAuZGF0ZS1kcm9wMiwgLmRhdGUtZHJvcDMge1xyXG4gIHdpZHRoOiAzNTBweDtcclxufVxyXG46Om5nLWRlZXAgLmlucHV0LWdyb3VwLWFwcGVuZCAubWF0LWljb24tYnV0dG9uIHtcclxuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxufVxyXG4uZGF0ZS1kcm9wMXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMzI5cHg7XHJcbn1cclxuLmRhdGUtZHJvcDJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTMzMnB4XHJcbn1cclxuLmRhdGUtZHJvcDN7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTE2OXB4XHJcbn1cclxuLnctNDUge1xyXG4gIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcclxufVxyXG4udy01NSB7XHJcbiAgd2lkdGg6IDU1JSAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubm8tZWxsaXAgc3Bhbi5uZy1vcHRpb24tbGFiZWwge1xyXG4gICAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xyXG5cclxufVxyXG4uZml4ZWQtYnRuIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcbi8qIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSNpbmhpZGV7XHJcbm9wYWNpdHk6IDA7XHJcbndpZHRoOiAxMDAlO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmxlZnQ6IDA7XHJcbn0gKi9cclxuLnNwYWNlci10YWIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzMiAyMzQgMjM3KTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA0NTBweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogLTFweCAycHggMjBweCAjMDA0NzhhMjE7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSk7XHJcbn1cclxuLyogaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiAuc3BhY2VyLXRhYntcclxuZGlzcGxheTogYmxvY2s7ICAgIFxyXG59ICovXHJcbi5zcGFjZXItLWJvZHkge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG46Om5nLWRlZXAgLmlucHV0LWdyb3VwLWFwcGVuZCAubWF0LWljb24tYnV0dG9uIHtcclxuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxufVxyXG4jc2lkZWJhci1vdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCA1OCwgNzAsIC4yKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgei1pbmRleDogOTk4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5sZWZ0LXd7XHJcbiAgbWluLXdpZHRoOiAxMDVweDtcclxufVxyXG4uY210cy1pdGVtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlN2U4O1xyXG59XHJcbi5jbXRzLXN2ZyBzdmcge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBmaWxsOiAjOGQ5NWE1O1xyXG59XHJcbi5hcHByLWNvbXRzIGg2IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZmxleDogMTtcclxufVxyXG4uZXhzLWNtdHMge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6ICM0YjQzNDM7XHJcbn1cclxuLmV4cy1jbXRzIC5jcmQtYmR5eyAgXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbn1cclxuLmNtdHMtaXRlbXM6aG92ZXIgLmNtdHMtc3ZnIHN2ZyB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIGZpbGw6ICMyNzg2ZmI7XHJcbn0iXX0= */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _project_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-info-routing.module */ 51029);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _project_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-info.component */ 84697);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _focus_on_click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focus-on-click.directive */ 44926);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects-summary/projects-summary.component */ 80880);
/* harmony import */ var _portfolio_projects_portfolio_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../portfolio-projects/portfolio-projects.component */ 70476);
/* harmony import */ var _view_dashboard_projects_view_dashboard_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view-dashboard-projects/view-dashboard-projects.component */ 27668);
/* harmony import */ var _projects_add_projects_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../projects-add/projects-add.component */ 12669);
/* harmony import */ var _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../to-do-projects/to-do-projects.component */ 80872);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notification/notification.component */ 2352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);

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
ProjectInfoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ProjectInfoModule });
ProjectInfoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsSummaryComponent, _portfolio_projects_portfolio_projects_component__WEBPACK_IMPORTED_MODULE_4__.PortfolioProjectsComponent,
        _view_dashboard_projects_view_dashboard_projects_component__WEBPACK_IMPORTED_MODULE_5__.ViewDashboardProjectsComponent, _projects_add_projects_add_component__WEBPACK_IMPORTED_MODULE_6__.ProjectsAddComponent, _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_7__.ToDoProjectsComponent, _notification_notification_component__WEBPACK_IMPORTED_MODULE_8__.NotificationComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        // BrowserModule,
        _project_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectInfoRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__.NgMultiSelectDropDownModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ProjectInfoModule, { declarations: [_project_info_component__WEBPACK_IMPORTED_MODULE_1__.ProjectInfoComponent, _focus_on_click_directive__WEBPACK_IMPORTED_MODULE_2__.FocusOnClickDirective], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        // BrowserModule,
        _project_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectInfoRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__.NgMultiSelectDropDownModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app__LayoutDashboard_project-info_project-info_module_ts.js.map