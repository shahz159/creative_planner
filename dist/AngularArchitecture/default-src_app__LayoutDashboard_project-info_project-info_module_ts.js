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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_Services/link.service */ 33529);
/* harmony import */ var src_app_Services_approvals_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_Services/approvals.service */ 18810);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ 77585);
/* harmony import */ var _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../projects-summary/projects-summary.component */ 80880);
/* harmony import */ var _portfolio_projects_portfolio_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../portfolio-projects/portfolio-projects.component */ 70476);
/* harmony import */ var _view_dashboard_projects_view_dashboard_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../view-dashboard-projects/view-dashboard-projects.component */ 27668);
/* harmony import */ var _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../to-do-projects/to-do-projects.component */ 80872);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../notification/notification.component */ 2352);
/* harmony import */ var _projects_add_projects_add_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../projects-add/projects-add.component */ 12669);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_Services_parameter_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/_Services/parameter.service */ 95636);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _focus_on_click_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./focus-on-click.directive */ 44926);
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./truncate.pipe */ 99457);

//import { CalendarOptions } from '@fullcalendar/angular';































function ProjectInfoComponent_ng_container_65_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 50)(1, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "This is an action for the project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_ng_container_65_div_2_Template_a_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r7); const item_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r6.moreDetails1(item_r5.Master_Code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r5.Project_Name, " ");
} }
function ProjectInfoComponent_ng_container_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, ProjectInfoComponent_ng_container_65_div_2_Template, 5, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r0.action_details);
} }
function ProjectInfoComponent_ng_container_66_div_2_h6_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("New project under approval with - ", item_r9.Emp_Name, " ");
} }
function ProjectInfoComponent_ng_container_66_div_2_h6_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("The project is Completion Under Approval with - ", item_r9.Emp_Name, " ");
} }
function ProjectInfoComponent_ng_container_66_div_2_h6_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("The project is Forward Under Approval with - ", item_r9.Emp_Name, " ");
} }
function ProjectInfoComponent_ng_container_66_div_2_h6_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("The project is Deadline Extend Under Approval with - ", item_r9.Emp_Name, " ");
} }
function ProjectInfoComponent_ng_container_66_div_2_h6_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("The project is Enactive Under Approval with - ", item_r9.Emp_Name, " ");
} }
function ProjectInfoComponent_ng_container_66_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ProjectInfoComponent_ng_container_66_div_2_h6_1_Template, 2, 1, "h6", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, ProjectInfoComponent_ng_container_66_div_2_h6_2_Template, 2, 1, "h6", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, ProjectInfoComponent_ng_container_66_div_2_h6_3_Template, 2, 1, "h6", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, ProjectInfoComponent_ng_container_66_div_2_h6_4_Template, 2, 1, "h6", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](5, ProjectInfoComponent_ng_container_66_div_2_h6_5_Template, 2, 1, "h6", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r8._MainProjectStatus == "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r8._MainProjectStatus == "Completion Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r8._MainProjectStatus == "Forward Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r8._MainProjectStatus == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r8._MainProjectStatus == "Enactive Under Approval");
} }
function ProjectInfoComponent_ng_container_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, ProjectInfoComponent_ng_container_66_div_2_Template, 6, 5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.approve_details);
} }
function ProjectInfoComponent_div_67_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r51.OnEditProject(ctx_r51.Pid, ctx_r51._ProjectName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "EidtBtn_single", ctx_r21.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx_r21.Editbutton);
} }
function ProjectInfoComponent_div_67_span_18_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_span_18_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r53.OnEditProject_Desc(ctx_r53.Pid, ctx_r53.Proj_Desc)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "EidtBtn_single", ctx_r22.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx_r22.Editbutton);
} }
function ProjectInfoComponent_div_67_label_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "label", 138)(1, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "svg", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "path", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r20.SubmissionType1, " ");
} }
function ProjectInfoComponent_div_67_div_37_h5_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_67_div_37_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "a", 145)(1, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} }
function ProjectInfoComponent_div_67_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 120)(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, ProjectInfoComponent_div_67_div_37_h5_2_Template, 2, 0, "h5", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, ProjectInfoComponent_div_67_div_37_a_4_Template, 5, 0, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r24.pro_act == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r24.pro_act == true);
} }
function ProjectInfoComponent_div_67_div_38_h6_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h6", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](2, 2, item_r20.DPG, "dd-MM-yyyy"), "/", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](3, 5, ctx_r58.date2, "dd-MM-yyyy"), "");
} }
function ProjectInfoComponent_div_67_div_38_h6_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h6", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](2, 2, item_r20.DPG, "dd-MM-yyyy"), " / ", item_r20.SubmissionType1, "");
} }
function ProjectInfoComponent_div_67_div_38_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "i", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_67_div_38_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "New end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "h6", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](5, 1, ctx_r61.new_deadline, "dd-MM-yyyy"), " ");
} }
function ProjectInfoComponent_div_67_div_38_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "Hold until");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "h6", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r62.proj_holddate, " ");
} }
function ProjectInfoComponent_div_67_div_38_div_44_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 160)(1, "div", 161)(2, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "Forward from");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "h6", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](7, "i", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "div")(9, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10, "Forward to");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "h6", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r78.forwardfrom);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r78.forwardto);
} }
function ProjectInfoComponent_div_67_div_38_div_44_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 160)(1, "div", 161)(2, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "Revert from");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "h6", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](7, "i", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "div")(9, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10, "Revert to");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "h6", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r79.forwardfrom);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r79.forwardto);
} }
function ProjectInfoComponent_div_67_div_38_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 154)(1, "div", 1)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "svg", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "path", 194)(5, "path", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](6, ProjectInfoComponent_div_67_div_38_div_44_div_6_Template, 13, 2, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](7, ProjectInfoComponent_div_67_div_38_div_44_div_7_Template, 13, 2, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Forward Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r63.requestType == "Revert Back");
} }
function ProjectInfoComponent_div_67_div_38_div_45_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 160)(1, "div", 161)(2, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "Complete attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "a", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_div_38_div_45_div_5_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r83.openPDF(ctx_r83.iscloud, ctx_r83.url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "h6", 200)(6, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](8, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("title", ctx_r81.completedoc);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](8, 2, ctx_r81.completedoc, 55));
} }
function ProjectInfoComponent_div_67_div_38_div_45_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 160)(1, "div", 161)(2, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "Complete attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "a", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_div_38_div_45_div_6_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r85.openPDF(ctx_r85.iscloud, ctx_r85.url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "h6", 200)(6, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](8, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("title", ctx_r82.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](8, 2, ctx_r82.url, 55));
} }
function ProjectInfoComponent_div_67_div_38_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 154)(1, "div", 1)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "svg", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "path", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](5, ProjectInfoComponent_div_67_div_38_div_45_div_5_Template, 9, 5, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](6, ProjectInfoComponent_div_67_div_38_div_45_div_6_Template, 9, 5, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r64.requestType == "Project Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r64.requestType == "ToDo Achieved");
} }
function ProjectInfoComponent_div_67_div_38_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 201)(1, "div", 17)(2, "div")(3, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 203)(6, "div", 1)(7, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "div", 205)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r65.initials1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r65.Submitted_By);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" on ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](10, 4, ctx_r65.requestDate, "dd-MM-yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r65.requestComments);
} }
function ProjectInfoComponent_div_67_div_38_a_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "a", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " View previous comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_67_div_38_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 207)(1, "div", 17)(2, "div")(3, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 203)(6, "div")(7, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "div", 205)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "div", 208)(15, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r87.Initial);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r87.Submitted_By);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" on ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](10, 5, item_r87.Req_date, "dd-MM-yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r87.Req_Coments);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r87.Request_type);
} }
function ProjectInfoComponent_div_67_div_38_div_67_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_div_38_div_67_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r88.typeChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "label", 210)(2, "input", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_67_div_38_div_67_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r89); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r90.selectedType = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "Conditional Accept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngModel", ctx_r68.selectedType);
} }
function ProjectInfoComponent_div_67_div_38_div_74_ng_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ng-option", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", item_r95.TypeID);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r95.RejectType, " ");
} }
function ProjectInfoComponent_div_67_div_38_div_74_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r93.rejDesc);
} }
function ProjectInfoComponent_div_67_div_38_div_74_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Please select Reject type!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_67_div_38_div_74_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 35)(1, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "Reject Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "ng-select", 212, 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_67_div_38_div_74_Template_ng_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r96.rejectType = $event); })("change", function ProjectInfoComponent_div_67_div_38_div_74_Template_ng_select_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r97); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r98.rejectApproval()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](7, ProjectInfoComponent_div_67_div_38_div_74_ng_option_7_Template, 2, 2, "ng-option", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](8, ProjectInfoComponent_div_67_div_38_div_74_span_8_Template, 2, 1, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](9, ProjectInfoComponent_div_67_div_38_div_74_span_9_Template, 2, 0, "span", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngModel", ctx_r69.rejectType);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r69.reject_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r69.rejectType != 1 && ctx_r69.rejectType);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r69.noRejectType == true);
} }
function ProjectInfoComponent_div_67_div_38_label_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Select From Existing Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_67_div_38_div_76_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 224)(1, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "Existing Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} }
function ProjectInfoComponent_div_67_div_38_div_76_div_4_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_div_38_div_76_div_4_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r107); const item_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit; const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r105.clickonselect(item_r101.Req_Coments)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "path", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} }
function ProjectInfoComponent_div_67_div_38_div_76_div_4_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_div_38_div_76_div_4_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r110); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); const item_r101 = ctx_r109.$implicit; const i_r102 = ctx_r109.index; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r108.clickondeselect(item_r101.Req_Coments, i_r102)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "svg", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "path", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} }
function ProjectInfoComponent_div_67_div_38_div_76_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 225)(1, "h6", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, ProjectInfoComponent_div_67_div_38_div_76_div_4_span_4_Template, 3, 0, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](5, ProjectInfoComponent_div_67_div_38_div_76_div_4_span_5_Template, 3, 0, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r101 = ctx.$implicit;
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass", ctx_r100.exist_comment.indexOf(item_r101.Req_Coments) != -1 ? "text-info" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r101.Req_Coments, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r100.exist_comment.indexOf(item_r101.Req_Coments) == -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r100.exist_comment.indexOf(item_r101.Req_Coments) != -1);
} }
function ProjectInfoComponent_div_67_div_38_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 219)(1, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, ProjectInfoComponent_div_67_div_38_div_76_div_2_Template, 3, 0, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, ProjectInfoComponent_div_67_div_38_div_76_div_4_Template, 6, 4, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r71.rejectlength > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r71.rejectcommentsList);
} }
function ProjectInfoComponent_div_67_div_38_div_77_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 35)(1, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "Enter Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "textarea", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_67_div_38_div_77_Template_textarea_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r112); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r111.comments = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngModel", ctx_r72.comments);
} }
function ProjectInfoComponent_div_67_div_38_div_78_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 35)(1, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "Enter Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "textarea", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_67_div_38_div_78_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r114); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r113.comments = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngModel", ctx_r73.comments);
} }
function ProjectInfoComponent_div_67_div_38_div_79_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 234)(1, "button", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_div_38_div_79_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r116); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r115.resetApproval()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "button", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_div_38_div_79_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r116); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r117.submitApproval()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", !ctx_r74.comments || !ctx_r74.selectedType);
} }
function ProjectInfoComponent_div_67_div_38_div_80_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 234)(1, "button", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_div_38_div_80_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r118.resetApproval()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "button", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_div_38_div_80_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r119); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r120.submitApproval()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", !ctx_r75.selectedType);
} }
function ProjectInfoComponent_div_67_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 148)(1, "div", 149)(2, "div", 17)(3, "div", 150)(4, "div", 151)(5, "div", 152)(6, "div", 153)(7, "div", 154)(8, "div", 1)(9, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "svg", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](11, "path", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "div", 157)(13, "h6", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](14, "Request type");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "h6", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](17, "div", 154)(18, "div", 1)(19, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](20, "svg", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](21, "path", 87)(22, "path", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](23, "div", 160)(24, "div", 161)(25, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](26, "Project duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](27, ProjectInfoComponent_div_67_div_38_h6_27_Template, 4, 8, "h6", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](28, ProjectInfoComponent_div_67_div_38_h6_28_Template, 3, 5, "h6", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](29, ProjectInfoComponent_div_67_div_38_div_29_Template, 2, 0, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](30, ProjectInfoComponent_div_67_div_38_div_30_Template, 6, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](31, ProjectInfoComponent_div_67_div_38_div_31_Template, 5, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](32, "div", 154)(33, "div", 1)(34, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](35, "svg", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](36, "path", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](37, "div", 160)(38, "div", 161)(39, "h6", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](40, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](41, "h6", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](43, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](44, ProjectInfoComponent_div_67_div_38_div_44_Template, 8, 2, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](45, ProjectInfoComponent_div_67_div_38_div_45_Template, 7, 2, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](46, ProjectInfoComponent_div_67_div_38_div_46_Template, 14, 7, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](47, ProjectInfoComponent_div_67_div_38_a_47_Template, 2, 0, "a", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](48, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](49, ProjectInfoComponent_div_67_div_38_div_49_Template, 17, 8, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](50, "div", 170)(51, "div", 1)(52, "div", 171)(53, "div", 172)(54, "span", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](55, "Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](56, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](57, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](58, "i", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](59, "div", 176)(60, "div", 177)(61, "div", 178)(62, "div")(63, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_div_38_Template_div_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r122); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r121.typeChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](64, "label", 180)(65, "input", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_67_div_38_Template_input_ngModelChange_65_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r122); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r123.selectedType = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](66, "Accept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](67, ProjectInfoComponent_div_67_div_38_div_67_Template, 4, 1, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](68, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_div_38_Template_div_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r122); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r124.typeChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](69, "label", 183)(70, "input", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_67_div_38_Template_input_ngModelChange_70_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r122); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r125.selectedType = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](71, "Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](72, "div", 185)(73, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](74, ProjectInfoComponent_div_67_div_38_div_74_Template, 10, 4, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](75, ProjectInfoComponent_div_67_div_38_label_75_Template, 2, 0, "label", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](76, ProjectInfoComponent_div_67_div_38_div_76_Template, 5, 2, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](77, ProjectInfoComponent_div_67_div_38_div_77_Template, 6, 1, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](78, ProjectInfoComponent_div_67_div_38_div_78_Template, 4, 1, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](79, ProjectInfoComponent_div_67_div_38_div_79_Template, 5, 1, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](80, ProjectInfoComponent_div_67_div_38_div_80_Template, 5, 1, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()()()()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r25.requestType);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Exec_BlockName != "Standard Tasks" && item_r20.Exec_BlockName != "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Exec_BlockName == "Standard Tasks" || item_r20.Exec_BlockName == "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Deadline Extend Under Approval" || item_r20.Status == "Project Hold" || item_r20.Status == "Project Hold Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Project Hold" || item_r20.Status == "Project Hold Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](43, 22, ctx_r25.Project_Cost, "SAR "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Forward Under Approval" || ctx_r25.requestType == "Revert Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r25.requestType == "Project Complete" || ctx_r25.requestType == "ToDo Achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r25.requestComments != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r25.previouscoments == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r25.prviousCommentsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngModel", ctx_r25.selectedType);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r25.requestType == "Project Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngModel", ctx_r25.selectedType);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r25.selectedType == "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r25.rejectType && ctx_r25.selectedType == "3" && ctx_r25.rejectlength > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r25.rejectType && ctx_r25.selectedType == "3" && ctx_r25.rejectlength > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r25.rejectType && ctx_r25.selectedType == "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r25.selectedType == "1" || ctx_r25.selectedType == "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r25.selectedType == "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r25.selectedType == "1" || ctx_r25.selectedType == "2");
} }
function ProjectInfoComponent_div_67_ng_container_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainer"](0);
} }
function ProjectInfoComponent_div_67_ng_container_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainer"](0);
} }
function ProjectInfoComponent_div_67_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](2, 2, item_r20.DPG, "dd-MM-yyyy"), " / ", item_r20.SubmissionType1, " ");
} }
function ProjectInfoComponent_div_67_ng_template_59_h5_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](2, 1, item_r20.DeadLine, "dd-MM-yyyy"), "");
} }
function ProjectInfoComponent_div_67_ng_template_59_h5_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("title", "Extended Deadline for ", ctx_r129.deadlineCount, " times");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](2, 2, item_r20.DeadLine, "dd-MM-yyyy"), "");
} }
function ProjectInfoComponent_div_67_ng_template_59_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 241)(1, "span", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_ng_template_59_div_8_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r137); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r136.onEditDeadline(ctx_r136.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "i", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 244)(4, "ul", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_ng_template_59_div_8_Template_ul_click_4_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "li", 32)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, "New project end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](8, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "div", 33)(10, "div", 34)(11, "div", 35)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](13, "Set new project end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "div", 38)(17, "input", 246, 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_ng_template_59_div_8_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r137); const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](22); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](_r135.open()); })("keydown.enter", function ProjectInfoComponent_div_67_ng_template_59_div_8_Template_input_keydown_enter_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r137); const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r140.onProject_ExtendDeadline(ctx_r140.Pid, ctx_r140._MasterCode)); })("ngModelChange", function ProjectInfoComponent_div_67_ng_template_59_div_8_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r137); const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r141._ProjDeadline = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](20, "mat-datepicker-toggle", 41)(21, "mat-datepicker", 35, 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](23, "div", 43)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](25, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](26, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](27, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](28, "textarea", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_67_ng_template_59_div_8_Template_textarea_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r137); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r142.extend_remarks = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](29, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](30, "div", 45)(31, "button", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_ng_template_59_div_8_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r137); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r143.onProject_ExtendDeadline(ctx_r143.Pid, ctx_r143._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](32, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](33, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_ng_template_59_div_8_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r137); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r144.onCancel(ctx_r144.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](34, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](22);
    const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "DeadlineArea_", ctx_r130.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "Deadlinetext_", ctx_r130.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("matDatepicker", _r135)("min", ctx_r130.minhold)("ngModel", ctx_r130._ProjDeadline);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("for", _r135);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngModel", ctx_r130.extend_remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", !ctx_r130._ProjDeadline || !ctx_r130.extend_remarks);
} }
function ProjectInfoComponent_div_67_ng_template_59_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 241)(1, "span", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_ng_template_59_div_9_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r148); const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r147.onHoldClick(ctx_r147.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "i", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 253)(4, "ul", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_ng_template_59_div_9_Template_ul_click_4_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "li", 32)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, "Hold project");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](8, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "div", 33)(10, "div", 34)(11, "div", 254)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](13, "Select hold date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "div", 255)(17, "input", 256, 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_ng_template_59_div_9_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r148); const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](22); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](_r146.open()); })("keydown.enter", function ProjectInfoComponent_div_67_ng_template_59_div_9_Template_input_keydown_enter_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r148); const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r151.onProject_Hold(ctx_r151.Pid, ctx_r151._MasterCode)); })("ngModelChange", function ProjectInfoComponent_div_67_ng_template_59_div_9_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r148); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r152.Holddate = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](20, "mat-datepicker-toggle", 41)(21, "mat-datepicker", 35, 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](23, "div", 43)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](25, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](26, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](27, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](28, "textarea", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_67_ng_template_59_div_9_Template_textarea_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r148); const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r153.hold_remarks = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](29, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](30, "div", 45)(31, "button", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_ng_template_59_div_9_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r148); const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r154.onProject_Hold(ctx_r154.Pid, ctx_r154._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](32, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](33, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_ng_template_59_div_9_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r148); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r155.onCancel(ctx_r155.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](34, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](22);
    const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "HoldArea_", ctx_r131.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "Holdtext_", ctx_r131.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("matDatepicker", _r146)("min", ctx_r131.minhold)("max", ctx_r131.maxhold)("ngModel", ctx_r131.Holddate);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("for", _r146);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngModel", ctx_r131.hold_remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", !ctx_r131.Holddate || !ctx_r131.hold_remarks);
} }
function ProjectInfoComponent_div_67_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 237)(1, "h5", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](6, ProjectInfoComponent_div_67_ng_template_59_h5_6_Template, 3, 4, "h5", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](7, ProjectInfoComponent_div_67_ng_template_59_h5_7_Template, 3, 5, "h5", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](8, ProjectInfoComponent_div_67_ng_template_59_div_8_Template, 35, 8, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](9, ProjectInfoComponent_div_67_ng_template_59_div_9_Template, 35, 9, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](3, 5, item_r20.DPG, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r31.deadlineCount == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r31.deadlineCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (ctx_r31.Current_user_ID == "2000" || ctx_r31.Current_user_ID == item_r20.OwnerEmpNo || ctx_r31.Current_user_ID == item_r20.Responsible || ctx_r31.Current_user_ID == item_r20.Authority) && item_r20.Status != "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (ctx_r31.Current_user_ID == "2000" || ctx_r31.Current_user_ID == item_r20.OwnerEmpNo || ctx_r31.Current_user_ID == item_r20.Responsible || ctx_r31.Current_user_ID == item_r20.Authority) && item_r20.Status != "Completed");
} }
function ProjectInfoComponent_div_67_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "svg", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "path", 261)(5, "path", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 89)(7, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", ctx_r32.Difference_In_Days, " days");
} }
function ProjectInfoComponent_div_67_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "svg", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "path", 261)(5, "path", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 89)(7, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10, "Continuous");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
} }
function ProjectInfoComponent_div_67_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "svg", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "path", 261)(5, "path", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 89)(7, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8, "Allocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r20.Duration, " Hrs ");
} }
function ProjectInfoComponent_div_67_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 264)(1, "div", 84)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "svg", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "path", 261)(5, "path", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 89)(7, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8, "Allocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r20.StandardDuration, " ");
} }
function ProjectInfoComponent_div_67_div_77_h5_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("title", "", item_r20.Delaydays, " Days Delay!");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", ctx_r159._MainProjectStatus, " ", item_r20.Delaydays, " days");
} }
function ProjectInfoComponent_div_67_div_77_h5_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", ctx_r160._MainProjectStatus, " ");
} }
function ProjectInfoComponent_div_67_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "svg", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "path", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 89)(6, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](8, ProjectInfoComponent_div_67_div_77_h5_8_Template, 2, 3, "h5", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](9, ProjectInfoComponent_div_67_div_77_h5_9_Template, 2, 1, "h5", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Delaydays > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Delaydays <= 0);
} }
function ProjectInfoComponent_div_67_ng_template_78_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r20.Status);
} }
function ProjectInfoComponent_div_67_ng_template_78_div_9_h5_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("title", "", item_r20.Delaydays, " days delay!");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r20.Status, " ");
} }
function ProjectInfoComponent_div_67_ng_template_78_div_9_h5_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r20.Status, " ");
} }
function ProjectInfoComponent_div_67_ng_template_78_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ProjectInfoComponent_div_67_ng_template_78_div_9_h5_1_Template, 2, 2, "h5", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, ProjectInfoComponent_div_67_ng_template_78_div_9_h5_2_Template, 2, 1, "h5", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Delaydays > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Delayday <= 0);
} }
function ProjectInfoComponent_div_67_ng_template_78_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r20.Status, " ");
} }
function ProjectInfoComponent_div_67_ng_template_78_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r20.Status, " ");
} }
function ProjectInfoComponent_div_67_ng_template_78_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r20.Status, " ");
} }
function ProjectInfoComponent_div_67_ng_template_78_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r20.Status);
} }
function ProjectInfoComponent_div_67_ng_template_78_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "Hold ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} }
function ProjectInfoComponent_div_67_ng_template_78_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("title", " Hold till ", ctx_r170.proj_holddate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" Hold until ", ctx_r170.proj_holddate, " ");
} }
function ProjectInfoComponent_div_67_ng_template_78_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r20.Status, " ");
} }
function ProjectInfoComponent_div_67_ng_template_78_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r20.Status, " ");
} }
function ProjectInfoComponent_div_67_ng_template_78_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r20.Status, " ");
} }
function ProjectInfoComponent_div_67_ng_template_78_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r20.Status, " ");
} }
function ProjectInfoComponent_div_67_ng_template_78_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r20.Status, " ");
} }
function ProjectInfoComponent_div_67_ng_template_78_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r20.Status, " ");
} }
function ProjectInfoComponent_div_67_ng_template_78_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r20.Status, " ");
} }
function ProjectInfoComponent_div_67_ng_template_78_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r20.Status, " ");
} }
function ProjectInfoComponent_div_67_ng_template_78_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r20.Status);
} }
function ProjectInfoComponent_div_67_ng_template_78_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, " Hold ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} }
function ProjectInfoComponent_div_67_ng_template_78_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r20.Status, " ");
} }
function ProjectInfoComponent_div_67_ng_template_78_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r20.Status, " ");
} }
function ProjectInfoComponent_div_67_ng_template_78_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r20.Status, " ");
} }
function ProjectInfoComponent_div_67_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "svg", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "path", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 89)(6, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](8, ProjectInfoComponent_div_67_ng_template_78_div_8_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](9, ProjectInfoComponent_div_67_ng_template_78_div_9_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](10, ProjectInfoComponent_div_67_ng_template_78_div_10_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](11, ProjectInfoComponent_div_67_ng_template_78_div_11_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](12, ProjectInfoComponent_div_67_ng_template_78_div_12_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](13, ProjectInfoComponent_div_67_ng_template_78_div_13_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](14, ProjectInfoComponent_div_67_ng_template_78_div_14_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](15, ProjectInfoComponent_div_67_ng_template_78_div_15_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](16, ProjectInfoComponent_div_67_ng_template_78_div_16_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](17, ProjectInfoComponent_div_67_ng_template_78_div_17_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](18, ProjectInfoComponent_div_67_ng_template_78_div_18_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](19, ProjectInfoComponent_div_67_ng_template_78_div_19_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](20, ProjectInfoComponent_div_67_ng_template_78_div_20_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](21, ProjectInfoComponent_div_67_ng_template_78_div_21_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](22, ProjectInfoComponent_div_67_ng_template_78_div_22_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](23, ProjectInfoComponent_div_67_ng_template_78_div_23_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](24, ProjectInfoComponent_div_67_ng_template_78_div_24_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](25, ProjectInfoComponent_div_67_ng_template_78_div_25_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](26, ProjectInfoComponent_div_67_ng_template_78_div_26_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](27, ProjectInfoComponent_div_67_ng_template_78_div_27_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](28, ProjectInfoComponent_div_67_ng_template_78_div_28_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "ToDo InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Project Hold" && !ctx_r38.proj_holddate);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Project Hold" && ctx_r38.proj_holddate);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "ToDo Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "New Todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Completion Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Forward Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Project Complete Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Enactive Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Version");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Project Holded");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Project Hold Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "ToDo Achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status == "Standardtask Enactive Hold");
} }
function ProjectInfoComponent_div_67_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 89)(1, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r20.ReportType, " ");
} }
function ProjectInfoComponent_div_67_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 89)(1, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "No category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} }
const _c0 = function (a0) { return { width: a0 }; };
function ProjectInfoComponent_div_67_div_99_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "div", 276)(2, "small", 277)(3, "span", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r209.ProjectPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](2, _c0, ctx_r209.ProjectPercentage));
} }
function ProjectInfoComponent_div_67_div_99_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "div", 276)(2, "small", 277)(3, "span", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r210.ProjectPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](2, _c0, ctx_r210.ProjectPercentage));
} }
function ProjectInfoComponent_div_67_div_99_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "div", 276)(2, "small", 277)(3, "span", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r211.ProjectPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](2, _c0, ctx_r211.ProjectPercentage));
} }
function ProjectInfoComponent_div_67_div_99_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "div", 276)(2, "small", 277)(3, "span", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "span", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r212.ProjectPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](2, _c0, ctx_r212.ProjectPercentage));
} }
function ProjectInfoComponent_div_67_div_99_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "div", 276)(2, "small", 277)(3, "span", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r213.ProjectPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](2, _c0, ctx_r213.ProjectPercentage));
} }
function ProjectInfoComponent_div_67_div_99_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "div", 276)(2, "small", 277)(3, "span", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r214.ProjectPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](2, _c0, ctx_r214.ProjectPercentage));
} }
function ProjectInfoComponent_div_67_div_99_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ProjectInfoComponent_div_67_div_99_div_1_div_1_Template, 6, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, ProjectInfoComponent_div_67_div_99_div_1_div_2_Template, 6, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, ProjectInfoComponent_div_67_div_99_div_1_div_3_Template, 6, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, ProjectInfoComponent_div_67_div_99_div_1_div_4_Template, 6, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](5, ProjectInfoComponent_div_67_div_99_div_1_div_5_Template, 6, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](6, ProjectInfoComponent_div_67_div_99_div_1_div_6_Template, 6, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r208.ProjectStatus == "Not Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r208.ProjectStatus == "Just Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r208.ProjectStatus == "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r208.ProjectStatus == "UnderCompletion");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r208.ProjectStatus == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r208.ProjectStatus == "ProjDuration0");
} }
function ProjectInfoComponent_div_67_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ProjectInfoComponent_div_67_div_99_div_1_Template, 7, 6, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status != "Completed" && item_r20.Exec_BlockName != "Standard Tasks" && item_r20.Exec_BlockName != "Routine Tasks");
} }
function ProjectInfoComponent_div_67_tr_176_Template(rf, ctx) { if (rf & 1) {
    const _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "tr")(1, "td", 284)(2, "a", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_tr_176_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r219); const itemMemos_r216 = restoredCtx.$implicit; const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r218.openUrl(itemMemos_r216.Url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "td", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_tr_176_Template_td_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r219); const itemMemos_r216 = restoredCtx.$implicit; const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r220.deleteMemos(itemMemos_r216.MailId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "i", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const itemMemos_r216 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", itemMemos_r216.Subject, "");
} }
function ProjectInfoComponent_div_67_p_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "p", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r43._MemosNotFound);
} }
function ProjectInfoComponent_div_67_tr_194_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r227 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "a", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_tr_194_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r227); const tezz_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit; const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r225.OnPortfolioClick(tezz_r221.Portfolio_ID, tezz_r221.Portfolio_Name, tezz_r221.Created_By)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tezz_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](tezz_r221.Portfolio_Name);
} }
function ProjectInfoComponent_div_67_tr_194_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "i", 287);
} }
function ProjectInfoComponent_div_67_tr_194_Template(rf, ctx) { if (rf & 1) {
    const _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "tr")(1, "td", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, ProjectInfoComponent_div_67_tr_194_a_2_Template, 2, 1, "a", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "td", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_tr_194_Template_td_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r230); const tezz_r221 = restoredCtx.$implicit; const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r229.DeleteProject(ctx_r229.Pid, tezz_r221.Portfolio_ID, ctx_r229._MasterCode, ctx_r229._ProjectName, tezz_r221.Created_By)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, ProjectInfoComponent_div_67_tr_194_i_4_Template, 1, 0, "i", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tezz_r221 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", tezz_r221.Portfolio_Name != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", tezz_r221.Portfolio_Name != "");
} }
function ProjectInfoComponent_div_67_p_195_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "p", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r45.noPort);
} }
function ProjectInfoComponent_div_67_div_196_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 107)(1, "div", 117)(2, "button", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "i", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, " Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
} }
const _c1 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return { "text-success": a0, "text-warning": a1, "text-primary": a2, "text-info": a3, "text-Rejected": a4, "text-underApproval": a5, "text-underApp": a6, "text-completed": a7, "text-completeRejected": a8, "text-Todo": a9 }; };
function ProjectInfoComponent_div_67_div_197_div_1_h5_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunctionV"](2, _c1, [item_r232.SubProject_Status == "Completed", item_r232.SubProject_Status == "InProcess" || item_r232.SubProject_Status == "Forward Under Approval", item_r232.SubProject_Status == "Under Approval", item_r232.SubProject_Status == "Completion Under Approval", item_r232.SubProject_Status == "New Project Rejected", item_r232.SubProject_Status == "Enactive Under Approval", item_r232.SubProject_Status == "New Project", item_r232.SubProject_Status == "Completion Under Approval", item_r232.SubProject_Status == "Project Complete Rejected", item_r232.SubProject_Status == "ToDo Completed"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r232.SubProject_Status, " ");
} }
function ProjectInfoComponent_div_67_div_197_div_1_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("title", "approval pending with ", item_r232.Approver_Name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" with ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](2, 2, item_r232.Approver_Name, 50), "");
} }
function ProjectInfoComponent_div_67_div_197_div_1_h5_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"](" ", item_r232.SubProject_Status, " ", item_r232.Delaydays, " days");
} }
function ProjectInfoComponent_div_67_div_197_div_1_span_51_Template(rf, ctx) { if (rf & 1) {
    const _r254 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_div_197_div_1_span_51_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r254); const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); const item_r232 = ctx_r253.$implicit; const i_r233 = ctx_r253.index; const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r252.onEditActionOwner(item_r232.id, item_r232.Project_Name, i_r233 + 1, item_r232.Project_Code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "i", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_67_div_197_div_1_span_62_Template(rf, ctx) { if (rf & 1) {
    const _r257 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_div_197_div_1_span_62_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r257); const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); const item_r232 = ctx_r256.$implicit; const i_r233 = ctx_r256.index; const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r255.onEditActionResponsible(item_r232.id, item_r232.Project_Name, i_r233 + 1, item_r232.Project_Code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "i", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_67_div_197_div_1_h5_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunctionV"](2, _c1, [item_r232.SubProject_Status == "Completed", item_r232.SubProject_Status == "InProcess" || item_r232.SubProject_Status == "Forward Under Approval", item_r232.SubProject_Status == "Under Approval", item_r232.SubProject_Status == "Completion Under Approval", item_r232.SubProject_Status == "New Project Rejected", item_r232.SubProject_Status == "Enactive Under Approval", item_r232.SubProject_Status == "New Project", item_r232.SubProject_Status == "Completion Under Approval", item_r232.SubProject_Status == "Project Complete Rejected", item_r232.SubProject_Status == "ToDo Completed"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r232.SubProject_Status, " ");
} }
function ProjectInfoComponent_div_67_div_197_div_1_span_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("title", "approval pending with ", item_r232.Approver_Name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" with ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](2, 2, item_r232.Approver_Name, 35), "");
} }
function ProjectInfoComponent_div_67_div_197_div_1_h5_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"](" ", item_r232.SubProject_Status, " ", item_r232.Delaydays, " days");
} }
function ProjectInfoComponent_div_67_div_197_div_1_h5_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](2, 1, item_r232.Project_Cost, "SAR "), "");
} }
function ProjectInfoComponent_div_67_div_197_div_1_h5_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " SAR 0.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_67_div_197_div_1_h5_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r232.SubtaskDuration, " days");
} }
function ProjectInfoComponent_div_67_div_197_div_1_h5_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " Continuous");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_67_div_197_div_1_h5_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " 0% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_67_div_197_div_1_div_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "svg", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "path", 338)(5, "path", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 89)(7, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "h5", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r232.Remarks, " ");
} }
function ProjectInfoComponent_div_67_div_197_div_1_div_141_Template(rf, ctx) { if (rf & 1) {
    const _r266 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "svg", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "path", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 89)(6, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, "Reference attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "a", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_div_197_div_1_div_141_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r266); const item_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit; const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r264.LoadDocument1(item_r232.IsCloud, item_r232.Sourcefile, item_r232.CompleteProofDoc, item_r232.contenttype)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r232.Sourcefile);
} }
const _c2 = function (a0) { return { "bg-custom": a0 }; };
function ProjectInfoComponent_div_67_div_197_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 295)(1, "div", 296)(2, "label", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "i", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 299)(6, "div", 300)(7, "a", 301)(8, "div", 300)(9, "div", 302)(10, "span", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_div_197_div_1_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r269); const ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r268.toggleExpand()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](12, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "span", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](14, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "div", 1)(16, "span", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](17, "i", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](20, "span", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](21, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "div", 307)(23, "span", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](24, "svg", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](25, "path", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](27, ProjectInfoComponent_div_67_div_197_div_1_h5_27_Template, 2, 13, "h5", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](28, ProjectInfoComponent_div_67_div_197_div_1_span_28_Template, 3, 5, "span", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](29, ProjectInfoComponent_div_67_div_197_div_1_h5_29_Template, 2, 2, "h5", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](30, "div", 300)(31, "div", 312)(32, "div", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](33, "i", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](34, "h5", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](36, "div", 316)(37, "p", 226)(38, "span", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](40, "div", 82)(41, "div", 83)(42, "div", 84)(43, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](44, "svg", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](45, "path", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](46, "div", 89)(47, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](48, "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](49, "h5", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](51, ProjectInfoComponent_div_67_div_197_div_1_span_51_Template, 2, 0, "span", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](52, "div", 83)(53, "div", 84)(54, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](55, "svg", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](56, "path", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](57, "div", 89)(58, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](59, "Responsible");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](60, "h5", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](62, ProjectInfoComponent_div_67_div_197_div_1_span_62_Template, 2, 0, "span", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](63, "div", 83)(64, "div", 84)(65, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](66, "svg", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](67, "path", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](68, "div", 89)(69, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](70, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](71, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](72, ProjectInfoComponent_div_67_div_197_div_1_h5_72_Template, 2, 13, "h5", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](73, ProjectInfoComponent_div_67_div_197_div_1_span_73_Template, 3, 5, "span", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](74, ProjectInfoComponent_div_67_div_197_div_1_h5_74_Template, 2, 2, "h5", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](75, "div", 82)(76, "div", 83)(77, "div", 84)(78, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](79, "svg", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](80, "path", 87)(81, "path", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](82, "div", 89)(83, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](84, "Action Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](85, "div", 237)(86, "h5", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](88, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](89, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](90, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](91, "h5", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](93, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](94, "div", 83)(95, "div", 84)(96, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](97, "svg", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](98, "path", 261)(99, "path", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](100, "div", 89)(101, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](102, "Allocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](103, "div", 237)(104, "h5", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](106, "div", 83)(107, "div", 84)(108, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](109, "svg", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](110, "path", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](111, "div", 89)(112, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](113, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](114, ProjectInfoComponent_div_67_div_197_div_1_h5_114_Template, 3, 4, "h5", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](115, ProjectInfoComponent_div_67_div_197_div_1_h5_115_Template, 2, 0, "h5", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](116, "div", 82)(117, "div", 83)(118, "div", 84)(119, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](120, "svg", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](121, "path", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](122, "div", 89)(123, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](124, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](125, ProjectInfoComponent_div_67_div_197_div_1_h5_125_Template, 2, 1, "h5", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](126, ProjectInfoComponent_div_67_div_197_div_1_h5_126_Template, 2, 0, "h5", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](127, "div", 83)(128, "div", 84)(129, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](130, "svg", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](131, "path", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](132, "div", 89)(133, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](134, "Percentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](135, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](136);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](137, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](138, ProjectInfoComponent_div_67_div_197_div_1_h5_138_Template, 2, 0, "h5", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](139, ProjectInfoComponent_div_67_div_197_div_1_div_139_Template, 11, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](140, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](141, ProjectInfoComponent_div_67_div_197_div_1_div_141_Template, 11, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r232 = ctx.$implicit;
    const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](48, _c2, item_r232.Team_Res == ctx_r231.Current_user_ID || ctx_r231.isHierarchy == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("Action ", item_r232.IndexId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("href", "#colp_", item_r232.IndexId + 1, "", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "InprocessProjName_", item_r232.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("title", item_r232.Project_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](12, 33, item_r232.Project_Name, ctx_r231.isExpanded ? 9999 : 60), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](19, 36, item_r232.SubProject_DeadLine, "dd-MM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r232.SubProject_Status != "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r232.Approver_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r232.SubProject_Status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r232.Subtask_Res);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "colp_", item_r232.IndexId + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass", item_r232.Team_Res == ctx_r231.Current_user_ID || item_r232.Project_Owner == ctx_r231.Current_user_ID || item_r232.Team_Autho == ctx_r231.Current_user_ID || ctx_r231.isHierarchy == true ? "mb-3 ml--2" : "mb-3 ml--2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "Inprocess_DescName_", item_r232.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r232.Project_Description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r232.Subtask_Owner, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r231.Current_user_ID == "2000" || ctx_r231.Current_user_ID == ctx_r231.Owner_EmpNo || ctx_r231.Current_user_ID == ctx_r231.Responsible_EmpNo || ctx_r231.Current_user_ID == ctx_r231.Authority_EmpNo || ctx_r231.isHierarchy == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r232.Subtask_Res, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r231.Current_user_ID == "2000" || ctx_r231.Current_user_ID == ctx_r231.Owner_EmpNo || ctx_r231.Current_user_ID == ctx_r231.Responsible_EmpNo || ctx_r231.Current_user_ID == ctx_r231.Authority_EmpNo || ctx_r231.isHierarchy == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r232.SubProject_Status != "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r232.Approver_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r232.SubProject_Status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](88, 39, item_r232.StartDate, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](93, 42, item_r232.SubProject_DeadLine, "dd-MM-yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r232.SubtaskAllocated, " Hrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r232.Project_Cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !item_r232.Project_Cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r231.ProjectBlockName != "Standard Tasks" && ctx_r231.ProjectBlockName != "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r231.ProjectBlockName == "Standard Tasks" || ctx_r231.ProjectBlockName == "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](137, 45, item_r232.SubtaskAllocated / ctx_r231.totalSubtaskHours, ".1-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r231.totalSubtaskHours == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r232.Remarks && item_r232.Remarks != "undefined");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r232.Sourcefile);
} }
function ProjectInfoComponent_div_67_div_197_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ProjectInfoComponent_div_67_div_197_div_1_Template, 142, 50, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r47.Subtask_List);
} }
function ProjectInfoComponent_div_67_div_198_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 344)(1, "div")(2, "div", 117)(3, "button", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "i", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, " Completed actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](6, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
} }
function ProjectInfoComponent_div_67_div_199_div_1_h5_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](2, 1, item_r271.Project_Cost, "SAR "), "");
} }
function ProjectInfoComponent_div_67_div_199_div_1_h5_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " SAR 0.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_67_div_199_div_1_h5_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r271.SubtaskDuration, " days");
} }
function ProjectInfoComponent_div_67_div_199_div_1_h5_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " Continuous");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_67_div_199_div_1_h5_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " 0% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_67_div_199_div_1_div_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "svg", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "path", 338)(5, "path", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 89)(7, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "h5", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r271.Remarks, " ");
} }
function ProjectInfoComponent_div_67_div_199_div_1_div_131_Template(rf, ctx) { if (rf & 1) {
    const _r285 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "svg", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "path", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 89)(6, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, "Complete attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "a", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_div_199_div_1_div_131_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r285); const item_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit; const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r283.LoadDocument1(item_r271.IsCloud, item_r271.Sourcefile, item_r271.CompleteProofDoc, item_r271.contenttype)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r271.Sourcefile);
} }
function ProjectInfoComponent_div_67_div_199_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r288 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 348)(1, "div", 296)(2, "label", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "i", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 299)(6, "a", 349)(7, "div", 300)(8, "div", 350)(9, "span", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_div_199_div_1_Template_span_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r288); const ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r287.toggleExpand()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](11, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "span", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](13, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "div", 1)(15, "span", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](16, "i", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "span", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](20, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](21, "div", 307)(22, "span", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](23, "svg", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](24, "path", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](25, "div")(26, "div", 89)(27, "h5", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](28, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](29, "div", 300)(30, "div", 312)(31, "div", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](32, "i", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](33, "h5", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](35, "div", 351)(36, "p", 352)(37, "span", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](39, "div", 82)(40, "div", 83)(41, "div", 84)(42, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](43, "svg", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](44, "path", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](45, "div", 89)(46, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](47, "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](48, "h5", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](50, "div", 83)(51, "div", 84)(52, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](53, "svg", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](54, "path", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](55, "div", 89)(56, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](57, "Responsible");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](58, "h5", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](60, "div", 83)(61, "div", 84)(62, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](63, "svg", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](64, "path", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](65, "div", 89)(66, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](67, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](68, "div")(69, "h5", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](70, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](71, "div", 82)(72, "div", 83)(73, "div", 84)(74, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](75, "svg", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](76, "path", 261)(77, "path", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](78, "div", 89)(79, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](80, "Action Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](81, "h5", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](83, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](84, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](85, "div", 83)(86, "div", 84)(87, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](88, "svg", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](89, "path", 261)(90, "path", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](91, "div", 89)(92, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](93, "Allocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](94, "h5", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](96, "div", 83)(97, "div", 84)(98, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](99, "svg", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](100, "path", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](101, "div", 89)(102, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](103, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](104, ProjectInfoComponent_div_67_div_199_div_1_h5_104_Template, 3, 4, "h5", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](105, ProjectInfoComponent_div_67_div_199_div_1_h5_105_Template, 2, 0, "h5", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](106, "div", 82)(107, "div", 83)(108, "div", 84)(109, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](110, "svg", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](111, "path", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](112, "div", 89)(113, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](114, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](115, ProjectInfoComponent_div_67_div_199_div_1_h5_115_Template, 2, 1, "h5", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](116, ProjectInfoComponent_div_67_div_199_div_1_h5_116_Template, 2, 0, "h5", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](117, "div", 83)(118, "div", 84)(119, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](120, "svg", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](121, "path", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](122, "div", 89)(123, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](124, "Percentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](125, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](126);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](127, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](128, ProjectInfoComponent_div_67_div_199_div_1_h5_128_Template, 2, 0, "h5", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](129, ProjectInfoComponent_div_67_div_199_div_1_div_129_Template, 11, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](130, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](131, ProjectInfoComponent_div_67_div_199_div_1_div_131_Template, 11, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r271 = ctx.$implicit;
    const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("Action ", item_r271.IndexId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("href", "#colcc_", item_r271.IndexId + 1, "", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "SpanProjName_", item_r271.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("title", item_r271.Project_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](11, 23, item_r271.Project_Name, ctx_r270.isExpanded ? 9999 : 60), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](18, 26, item_r271.SubProject_DeadLine, "dd-MM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r271.Subtask_Res);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "colcc_", item_r271.IndexId + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "Span_DescName_", item_r271.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r271.Project_Description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r271.Subtask_Owner, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r271.Subtask_Res, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](83, 29, item_r271.StartDate, "dd-MM-yyyy"), "/", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](84, 32, item_r271.SubProject_DeadLine, "dd-MM-yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r271.SubtaskAllocated, " Hrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r271.Project_Cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !item_r271.Project_Cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r270.ProjectBlockName != "Standard Tasks" && ctx_r270.ProjectBlockName != "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r270.ProjectBlockName == "Standard Tasks" || ctx_r270.ProjectBlockName == "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](127, 35, item_r271.SubtaskAllocated / ctx_r270.totalSubtaskHours, ".1-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r270.totalSubtaskHours == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r271.Remarks && item_r271.Remarks != "undefined");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r271.Sourcefile);
} }
function ProjectInfoComponent_div_67_div_199_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ProjectInfoComponent_div_67_div_199_div_1_Template, 132, 38, "div", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r49.CompletedList);
} }
function ProjectInfoComponent_div_67_div_200_div_7_div_63_h6_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_67_div_200_div_7_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "svg", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "path", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](6, ProjectInfoComponent_div_67_div_200_div_7_div_63_h6_6_Template, 2, 0, "h6", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "h6", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r290.FileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r290.FileName);
} }
function ProjectInfoComponent_div_67_div_200_div_7_div_64_h6_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_67_div_200_div_7_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "svg", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "path", 338)(5, "path", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](7, ProjectInfoComponent_div_67_div_200_div_7_div_64_h6_7_Template, 2, 0, "h6", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "h6", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r290.Remarks != "" && item_r290.Remarks != "null");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r290.Remarks);
} }
function ProjectInfoComponent_div_67_div_200_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 357)(1, "div", 358)(2, "div", 359)(3, "h5", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "span", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "div", 362)(8, "div", 82)(9, "div", 83)(10, "div", 84)(11, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "svg", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](13, "path", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "div", 89)(15, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](16, "Assigned By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](17, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "div", 83)(20, "div", 84)(21, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "svg", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](23, "path", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](24, "div", 89)(25, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](26, "Assigned To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](27, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](29, "div", 83)(30, "div", 84)(31, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](32, "svg", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](33, "path", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](34, "div", 89)(35, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](36, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](37, "h5", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](39, "div", 83)(40, "div", 84)(41, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](42, "svg", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](43, "path", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](44, "div", 89)(45, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](46, "Assigned Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](47, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](49, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](50, "div", 83)(51, "div", 84)(52, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](53, "svg", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](54, "path", 261)(55, "path", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](56, "div", 89)(57, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](58, " Duration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](59, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](61, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](62, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](63, ProjectInfoComponent_div_67_div_200_div_7_div_63_Template, 9, 2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](64, ProjectInfoComponent_div_67_div_200_div_7_div_64_Template, 10, 2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r290 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r290.Task_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r290.Task_Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r290.AssignedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", item_r290.AssignedTo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r290.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](49, 10, item_r290.Creation_Date, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](61, 13, item_r290.Start_Date, "dd-MM-yyyy"), "/", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](62, 16, item_r290.End_Date, "dd-MM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r290.FileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r290.Remarks != "" && item_r290.Remarks != "null");
} }
function ProjectInfoComponent_div_67_div_200_Template(rf, ctx) { if (rf & 1) {
    const _r298 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 107)(1, "div", 354)(2, "div", 117)(3, "button", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_div_200_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r298); const ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r297.scrldwn()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "Assigned Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](6, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](7, ProjectInfoComponent_div_67_div_200_div_7_Template, 65, 19, "div", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r50.AssigntaskList);
} }
function ProjectInfoComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    const _r300 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "div", 58)(3, "div", 54)(4, "h5", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](6, ProjectInfoComponent_div_67_span_6_Template, 2, 2, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "span", 61)(8, "div", 17)(9, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_67_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r300); const ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r299._modelProjectName = $event); })("keydown.enter", function ProjectInfoComponent_div_67_Template_input_keydown_enter_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r300); const ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r301.OnProject_Rename(ctx_r301.Pid, ctx_r301._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "div", 63)(11, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r300); const ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r302.OnProject_Rename(ctx_r302.Pid, ctx_r302._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](12, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r300); const ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r303.onCancel(ctx_r303.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "p", 66)(16, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](18, ProjectInfoComponent_div_67_span_18_Template, 2, 2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "span", 69)(20, "div", 17)(21, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_67_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r300); const ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r304._modelProjDesc = $event); })("keydown.enter", function ProjectInfoComponent_div_67_Template_input_keydown_enter_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r300); const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r305.OnProject_Rename(ctx_r305.Pid, ctx_r305._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "div", 63)(23, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r300); const ctx_r306 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r306.OnProject_Rename(ctx_r306.Pid, ctx_r306._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](24, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](25, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r300); const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r307.onCancel(ctx_r307.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](26, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](27, "div")(28, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r300); const ctx_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r308.moreDetails()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](29, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](30, "More Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](31, "div")(32, "div", 72)(33, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](34, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](36, ProjectInfoComponent_div_67_label_36_Template, 5, 1, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](37, ProjectInfoComponent_div_67_div_37_Template, 5, 2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](38, ProjectInfoComponent_div_67_div_38_Template, 81, 25, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](39, "div", 78)(40, "div", 79)(41, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](42, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](43, "Project Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](44, "div", 81)(45, "div", 82)(46, "div", 83)(47, "div", 84)(48, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](49, "svg", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](50, "path", 87)(51, "path", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](52, "div", 89)(53, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](54, "Project Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](55, ProjectInfoComponent_div_67_ng_container_55_Template, 1, 0, "ng-container", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](56, ProjectInfoComponent_div_67_ng_container_56_Template, 1, 0, "ng-container", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](57, ProjectInfoComponent_div_67_ng_template_57_Template, 3, 5, "ng-template", null, 92, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](59, ProjectInfoComponent_div_67_ng_template_59_Template, 10, 8, "ng-template", null, 93, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](61, ProjectInfoComponent_div_67_div_61_Template, 11, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](62, ProjectInfoComponent_div_67_div_62_Template, 11, 0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](63, ProjectInfoComponent_div_67_div_63_Template, 11, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](64, ProjectInfoComponent_div_67_div_64_Template, 11, 1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](65, "div", 82)(66, "div", 83)(67, "div", 84)(68, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](69, "svg", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](70, "path", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](71, "div", 89)(72, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](73, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](74, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](76, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](77, ProjectInfoComponent_div_67_div_77_Template, 10, 2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](78, ProjectInfoComponent_div_67_ng_template_78_Template, 29, 21, "ng-template", null, 99, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](80, "div", 83)(81, "div", 84)(82, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](83, "svg", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](84, "path", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](85, "div", 89)(86, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](87, "Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](88, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](90, "div", 82)(91, "div", 83)(92, "div", 84)(93, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](94, "svg", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](95, "path", 103)(96, "path", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](97, ProjectInfoComponent_div_67_div_97_Template, 5, 1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](98, ProjectInfoComponent_div_67_div_98_Template, 5, 0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](99, ProjectInfoComponent_div_67_div_99_Template, 2, 1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](100, "div", 107)(101, "div", 108)(102, "div", 109)(103, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](105, "div", 111)(106, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](107, "Responsible");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](108, "h5", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](110, "div")(111, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_Template_button_click_111_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r300); const ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r309.bttn_RACI()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](112, "RACIS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](113, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](114, "div", 116)(115, "div", 81)(116, "div", 117)(117, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](118, "RACIS Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](119, "div", 82)(120, "div", 118)(121, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](122, "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](123, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](124, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](125, "div", 89)(126, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](127);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](128, "div", 118)(129, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](130, "Authority");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](131, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](132, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](133, "div", 89)(134, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](135);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](136, "div", 118)(137, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](138, "Coordinator");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](139, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](140, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](141, "div", 89)(142, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](143);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](144, "div", 118)(145, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](146, "Informer");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](147, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](148, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](149, "div", 89)(150, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](151);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](152, "div", 118)(153, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](154, "Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](155, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](156, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](157, "div", 89)(158, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](159);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](160, "div", 107)(161, "div", 120)(162, "div", 1)(163, "div", 117)(164, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](165, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](166, " DMS Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](167, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](168, "div")(169, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_Template_button_click_169_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r300); const ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r310.AddDms()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](170, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](171, "Link DMS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](172, "div", 123)(173, "div", 124)(174, "table", 125)(175, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](176, ProjectInfoComponent_div_67_tr_176_Template, 6, 1, "tr", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](177, ProjectInfoComponent_div_67_p_177_Template, 2, 1, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](178, "div", 107)(179, "div", 120)(180, "div", 1)(181, "div", 117)(182, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](183, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](184, " Portfolio Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](185, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](186, "div")(187, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_div_67_Template_button_click_187_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r300); const ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r311.AddPortfolio()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](188, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](189, "Link Portfolio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](190, "div", 129)(191, "div", 124)(192, "table", 125)(193, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](194, ProjectInfoComponent_div_67_tr_194_Template, 5, 2, "tr", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](195, ProjectInfoComponent_div_67_p_195_Template, 2, 1, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](196, ProjectInfoComponent_div_67_div_196_Template, 6, 0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](197, ProjectInfoComponent_div_67_div_197_Template, 2, 1, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](198, ProjectInfoComponent_div_67_div_198_Template, 7, 0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](199, ProjectInfoComponent_div_67_div_199_Template, 2, 1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](200, ProjectInfoComponent_div_67_div_200_Template, 8, 1, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](58);
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](60);
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](79);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "pro_name_", ctx_r2.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r20.Project_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.Current_user_ID == "2000" || ctx_r2.Current_user_ID == item_r20.OwnerEmpNo || ctx_r2.Current_user_ID == item_r20.Responsible || ctx_r2.Current_user_ID == item_r20.Authority);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "spanTextbox_single", ctx_r2.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "textboxfocus_single", ctx_r2.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngModel", ctx_r2._modelProjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "Span_Desc_", ctx_r2.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r20.Project_Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.Current_user_ID == "2000" || ctx_r2.Current_user_ID == item_r20.OwnerEmpNo || ctx_r2.Current_user_ID == item_r20.Responsible || ctx_r2.Current_user_ID == item_r20.Authority);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "spanTextarea_single", ctx_r2.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate1"]("id", "textboxfocus_single", ctx_r2.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngModel", ctx_r2._modelProjDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r20.Exec_BlockName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Exec_BlockName == "Standard Tasks" || item_r20.Exec_BlockName == "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.Current_user_ID == ctx_r2.approvalEmpId && item_r20.Status != "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.Current_user_ID == ctx_r2.approvalEmpId && ctx_r2.pro_act == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Exec_BlockName != "Standard Tasks" && item_r20.Exec_BlockName != "Routine Tasks")("ngIfThen", _r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Exec_BlockName == "Standard Tasks" || item_r20.Exec_BlockName == "Routine Tasks")("ngIfThen", _r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Exec_BlockName != "Standard Tasks" && item_r20.Exec_BlockName != "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Exec_BlockName == "Standard Tasks" || item_r20.Exec_BlockName == "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Exec_BlockName != "Standard Tasks" && item_r20.Exec_BlockName != "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Exec_BlockName == "Standard Tasks" || item_r20.Exec_BlockName == "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](76, 48, item_r20.Project_Cost, "SAR "));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2._MainProjectStatus == "Delay")("ngIfElse", _r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r20.Client_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.ReportType);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.ReportType == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r20.Status != "Completed" && item_r20.Exec_BlockName != "Standard Tasks" && item_r20.Exec_BlockName != "Routine Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r2.initials, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r2.Project_Responsible);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx_r2._raciDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r20.Project_Owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r20.Team_Autho);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r20.Team_Coor);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r20.Team_Informer);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r20.Team_Support);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r2._MemosSubjectList);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2._MemosNotFound != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r2._portfoliolist);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.noPort != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.Subtask_List != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.Subtask_List != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.CompletedList != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.CompletedList != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.AssigntaskList != "");
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
        this.isExpanded = false;
        this.dropdownSettings_Memo = {};
        this.dropdownSettings_Portfolio = {};
        this._raciDetails = true;
        this._modelProjAlloc = 0;
        this.exist_comment = [];
        this.noRejectType = false;
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
            this.fun_LoadProjectDetails();
            this.getdeadlinecount();
            this.getProjectHoldDate();
            this.getapproval_actiondetails();
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
                this.Subtask_List = JSON.parse(data[0]['projectinfo_SubtaskDetails']);
                this.CompletedList = JSON.parse(data[0]['Completed_SubtaskDetails']);
                this.AssigntaskList = JSON.parse(data[0]['AssigntaskDetails_Json']);
                // // this.CompletedList.push(this.Subtask_List);
                // console.log("subtask Details--->",this.Subtask_List);
                // console.log("Assign Details--->",this.AssigntaskList);
                this.totalSubtaskHours = (data[0]['SubtaskHours']);
                this.TotalWork_Hours = data[0]['TotalHours'];
                this.ProjectPercentage = data[0]['ProjectPercentage'] + '%';
                this.ProjectStatus = data[0]['ProjectStatus'];
                this._MainProjectStatus = data[0]['MainProjectStatus'];
                console.log("ProjectDetails-->", this.ProjectInfo_List);
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
    submitApproval() {
        // if (this.requestType != 'Project Forward' && this.requestType!='Task Complete'  && this.requestType!='Revert Back') {
        //   if (this.selectedType == '1') {
        //     this.approvalObj.Emp_no = this.Current_user_ID;
        //     this.approvalObj.Project_Code = this.projectCode;
        //     this.approvalObj.Request_type = this.requestType;
        //     if (this.comments == '' || this.comments == null) {
        //       this.approvalObj.Remarks = 'Accepted';
        //     }
        //     else {
        //       this.approvalObj.Remarks = this.comments;
        //     }
        //     this.approvalservice.InsertAcceptApprovalService(this.approvalObj).
        //       subscribe((data) => {
        //         this._Message = (data['message']);
        //         if (this._Message == 'Not Authorized' || this._Message=='0') {
        //           this.notifyService.showError("project not approved", 'Failed.');
        //         }
        //         else {
        //           this.notifyService.showSuccess("Project Approved Successfully", this._Message);
        //           this.fun_LoadProjectDetails();
        //           this.getapprovalStats();
        //           if (this._Urlid == '1') {
        //             this.router.navigate(["/backend/ProjectsSummary/"]);
        //             this._projectSummary.GetProjectsByUserName(this.Summarytype);
        //           }
        //           else if (this._Urlid == '2') {
        //             this._portfolioprojects.GetPortfolioProjectsByPid();
        //           }
        //           else if (this._Urlid == '3') {
        //             this._viewdashboard.GetCompletedProjects();
        //           }
        //           else if (this._Urlid == '4') {
        //             this._projectsAdd.GetProjectsByUserName();
        //             this._projectsAdd.getDropdownsDataFromDB();
        //           }
        //           else if (this._Urlid == '5') {
        //             this._toDo.GetProjectsByUserName();
        //           }
        //           else if (this._Urlid == '6') {
        //             this.router.navigate(["Notifications"]);
        //               this._notification.viewAll('Req');
        //           }
        //         }
        //       });
        //   }
        //   else if (this.selectedType == '2') {
        //     this.approvalObj.Emp_no = this.Current_user_ID;
        //     this.approvalObj.Project_Code = this.projectCode;
        //     this.approvalObj.Request_type = this.requestType;
        //     if (this.comments == '' || this.comments == null) {
        //       this.approvalObj.Remarks = 'Accepted';
        //     }
        //     else {
        //       this.approvalObj.Remarks = this.comments;
        //     }
        //     this.approvalservice.InsertConditionalAcceptApprovalService(this.approvalObj).
        //       subscribe((data) => {
        //         this._Message = (data['message']);
        //         if (this._Message == 'Not Authorized' || this._Message=='0') {
        //           this.notifyService.showError("project not approved", 'Failed.');
        //         }
        //         else {
        //           this.notifyService.showSuccess("Project Approved Successfully", this._Message);
        //           this.fun_LoadProjectDetails();
        //           this.getapprovalStats();
        //           if (this._Urlid == '1') {
        //             this.router.navigate(["/backend/ProjectsSummary/"]);
        //             this._projectSummary.GetProjectsByUserName(this.Summarytype);
        //           }
        //           else if (this._Urlid == '2') {
        //             this._portfolioprojects.GetPortfolioProjectsByPid();
        //           }
        //           else if (this._Urlid == '3') {
        //             this._viewdashboard.GetCompletedProjects();
        //           }
        //           else if (this._Urlid == '4') {
        //             this._projectsAdd.GetProjectsByUserName();
        //             this._projectsAdd.getDropdownsDataFromDB();
        //           }
        //           else if (this._Urlid == '5') {
        //             this._toDo.GetProjectsByUserName();
        //           }
        //           else if (this._Urlid == '6') {
        //             this.router.navigate(["Notifications"]);
        //               this._notification.viewAll('Req');
        //           }
        //         }
        //       });
        //   }
        //   else if (this.selectedType == '3') {
        //     if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
        //       this.noRejectType = true;
        //       this.notifyService.showError("Please select Reject Type", "Failed");
        //       return false;
        //     }
        //     else {
        //       this.approvalObj.Emp_no = this.Current_user_ID;
        //       this.approvalObj.Project_Code = this.projectCode;
        //       this.approvalObj.Request_type = this.requestType;
        //       this.approvalObj.rejectType = this.rejectType;
        //       this.approvalObj.Remarks = this.comments;
        //       this.approvalservice.InsertRejectApprovalService(this.approvalObj).
        //         subscribe((data) => {
        //           this._Message = (data['message']);
        //           if (this._Message == 'Not Authorized' || this._Message=='0') {
        //               this.notifyService.showError("project not approved", 'Failed.');
        //           }
        //           else {
        //             this.notifyService.showSuccess(this._Message, "Rejected Successfully");
        //             this.fun_LoadProjectDetails();
        //             this.getapprovalStats();
        //             if (this._Urlid == '1') {
        //               this.router.navigate(["/backend/ProjectsSummary/"]);
        //               this._projectSummary.GetProjectsByUserName(this.Summarytype);
        //             }
        //             else if (this._Urlid == '2') {
        //               this._portfolioprojects.GetPortfolioProjectsByPid();
        //             }
        //             else if (this._Urlid == '3') {
        //               this._viewdashboard.GetCompletedProjects();
        //             }
        //             else if (this._Urlid == '4') {
        //               this._projectsAdd.GetProjectsByUserName();
        //               this._projectsAdd.getDropdownsDataFromDB();
        //             }
        //             else if (this._Urlid == '5') {
        //               this._toDo.GetProjectsByUserName();
        //               this._toDo.GetSubtask_Details();
        //             }
        //             else if (this._Urlid == '6') {
        //               this.router.navigate(["Notifications"]);
        //               this._notification.viewAll('Req');
        //             }
        //           }
        //         });
        //     }
        //   }
        //   else if (this.selectedType == '4') {
        //     this.notifyService.showError("Not Approved - Development under maintainance", "Failed");
        //   }
        //   this.closeInfo();
        // }
        // else if (this.requestType == 'Project Forward' && this.forwardType != 'T') {
        //   if (this.selectedType == '3') {
        //     if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
        //       this.noRejectType = true;
        //       this.notifyService.showError("Please select Reject Type", "Failed");
        //       return false;
        //     }
        //     else {
        //       this.approvalObj.Emp_no = this.Current_user_ID;
        //       this.approvalObj.Project_Code = this.projectCode;
        //       this.approvalObj.Request_type = this.requestType;
        //       this.approvalObj.rejectType = this.rejectType;
        //       this.approvalObj.Remarks = this.comments;
        //       this.approvalservice.InsertRejectApprovalService(this.approvalObj).
        //         subscribe((data) => {
        //           this._Message = (data['message']);
        //           if (this._Message == 'Not Authorized') {
        //             this.notifyService.showError("project not approved.", 'you are not authorized to approve the project!!')
        //             this.notifyService.showInfo('to approve the project', 'Please contact the Project Owner');
        //           }
        //           else {
        //             this.notifyService.showSuccess(this._Message, "Rejected Successfully");
        //             this.fun_LoadProjectDetails();
        //             this.getapprovalStats();
        //             if (this._Urlid == '1') {
        //               this.router.navigate(["/backend/ProjectsSummary/"]);
        //               this._projectSummary.GetProjectsByUserName(this.Summarytype);
        //             }
        //             else if (this._Urlid == '2') {
        //               this._portfolioprojects.GetPortfolioProjectsByPid();
        //             }
        //             else if (this._Urlid == '3') {
        //               this._viewdashboard.GetCompletedProjects();
        //             }
        //             else if (this._Urlid == '4') {
        //               this._projectsAdd.GetProjectsByUserName();
        //               this._projectsAdd.getDropdownsDataFromDB();
        //             }
        //             else if (this._Urlid == '5') {
        //               this._toDo.GetProjectsByUserName();
        //               this._toDo.GetSubtask_Details();
        //             }
        //             else if (this._Urlid == '6') {
        //               this.router.navigate(["Notifications"]);
        //               this._notification.viewAll('Req');
        //             }
        //           }
        //         });
        //     }
        //   }
        //   else if (this.selectedType == '1') {
        //     this.Employee_List.forEach(element => {
        //       if(element.Emp_No==this.newResponsible){
        //         this.new_Res=element.DisplayName;    
        //       }
        //     });  
        //     this.approvalObj.Emp_no = this.Current_user_ID;
        //     this.approvalObj.Responsible = this.newResponsible;
        //     this.approvalObj.deadline = this.requestDeadline;
        //     this.approvalObj.Project_Code = this.projectCode;
        //     if (this.comments == '' || this.comments == null) {
        //       this.approvalObj.Remarks = 'Accepted';
        //     }
        //     else {
        //       this.approvalObj.Remarks = this.comments;
        //     }
        //     this.approvalservice.InsertForwardApprovalService(this.approvalObj).subscribe(data => {
        //       this._Message = data['message'];
        //       if (this._Message == '1') {
        //         this.notifyService.showSuccess("Project will be forwarded to " + this.new_Res+'('+this.approvalObj.Responsible+')' + " from " + this.Project_Responsible +'('+this.EmpNo_Res+')', "Successfully Forwarded");
        //         this.fun_LoadProjectDetails();
        //         this.getapprovalStats();
        //         if (this._Urlid == '1') {
        //           this.router.navigate(["/backend/ProjectsSummary/"]);
        //           this._projectSummary.GetProjectsByUserName(this.Summarytype);
        //         }
        //         else if (this._Urlid == '2') {
        //           this._portfolioprojects.GetPortfolioProjectsByPid();
        //         }
        //         else if (this._Urlid == '3') {
        //           this._viewdashboard.GetCompletedProjects();
        //         }
        //         else if (this._Urlid == '4') {
        //           this._projectsAdd.GetProjectsByUserName();
        //           this._projectsAdd.getDropdownsDataFromDB();
        //         }
        //         else if (this._Urlid == '5') {
        //           this._toDo.GetProjectsByUserName();
        //         }
        //         else if (this._Urlid == '6') {
        //           this.router.navigate(["Notifications"]);
        //           this._notification.viewAll('Req');
        //         }
        //       }
        //       else if (this._Message == '2') {
        //         this.notifyService.showSuccess("Project Forward request sent to -"+this.new_Res+'('+this.approvalObj.Responsible+')', "Forward under approval!");
        //         this.fun_LoadProjectDetails();
        //         this.getapprovalStats();
        //         if (this._Urlid == '1') {
        //           this.router.navigate(["/backend/ProjectsSummary/"]);
        //           this._projectSummary.GetProjectsByUserName(this.Summarytype);
        //         }
        //         else if (this._Urlid == '2') {
        //           this._portfolioprojects.GetPortfolioProjectsByPid();
        //         }
        //         else if (this._Urlid == '3') {
        //           this._viewdashboard.GetCompletedProjects();
        //         }
        //         else if (this._Urlid == '4') {
        //           this._projectsAdd.GetProjectsByUserName();
        //           this._projectsAdd.getDropdownsDataFromDB();
        //         }
        //         else if (this._Urlid == '5') {
        //           this._toDo.GetProjectsByUserName();
        //         }
        //         else if (this._Urlid == '6') {
        //           this.router.navigate(["Notifications"]);
        //           this._notification.viewAll('Req');
        //         }
        //       }
        //       else if (this._Message == '4' || this._Message == null) {
        //         this.notifyService.showError("Please contact Support.", "Project not forwarded!");
        //       }
        //     });
        //   }
        //   this.closeInfo();
        // }
        // else if (this.requestType == 'Project Forward' && this.forwardType == 'T') {
        //   if (this.selectedType == '3') {
        //     if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
        //       this.noRejectType = true;
        //       this.notifyService.showError("Please select Reject Type", "Failed");
        //       return false;
        //     }
        //     else {
        //       this.approvalObj.Emp_no = this.Current_user_ID;
        //       this.approvalObj.Project_Code = this.projectCode;
        //       this.approvalObj.Request_type = this.requestType;
        //       this.approvalObj.rejectType = this.rejectType;
        //       this.approvalObj.Remarks = this.comments;
        //       this.approvalservice.InsertRejectApprovalService(this.approvalObj).
        //         subscribe((data) => {
        //           this._Message = (data['message']);
        //           if (this._Message == 'Not Authorized') {
        //             this.notifyService.showError("project not approved.", 'you are not authorized to approve the project!!')
        //             this.notifyService.showInfo('to approve the project', 'Please contact the Project Owner');
        //           }
        //           else {
        //             this.notifyService.showSuccess(this._Message, "Rejected Successfully");
        //             this.fun_LoadProjectDetails();
        //             this.getapprovalStats();
        //             if (this._Urlid == '1') {
        //               this.router.navigate(["/backend/ProjectsSummary/"]);
        //               this._projectSummary.GetProjectsByUserName(this.Summarytype);
        //             }
        //             else if (this._Urlid == '2') {
        //               this._portfolioprojects.GetPortfolioProjectsByPid();
        //             }
        //             else if (this._Urlid == '3') {
        //               this._viewdashboard.GetCompletedProjects();
        //             }
        //             else if (this._Urlid == '4') {
        //               this._projectsAdd.GetProjectsByUserName();
        //               this._projectsAdd.getDropdownsDataFromDB();
        //             }
        //             else if (this._Urlid == '5') {
        //               this._toDo.GetProjectsByUserName();
        //               this._toDo.GetSubtask_Details();
        //             }
        //             else if (this._Urlid == '6') {
        //               this.router.navigate(["Notifications"]);
        //               this._notification.viewAll('Req');
        //             }
        //           }
        //         });
        //     }
        //   }
        //   else if (this.selectedType == '1') {
        //     this.Employee_List.forEach(element => {
        //       if(element.Emp_No==this.newResponsible){
        //         this.new_Res=element.DisplayName;    
        //       }
        //     });  
        //     this.approvalObj.Emp_no = this.Current_user_ID;
        //     this.approvalObj.Responsible = this.newResponsible;
        //     this.approvalObj.deadline = this.requestDeadline;
        //     this.approvalObj.Project_Code = this.projectCode;
        //     if (this.comments == '' || this.comments == null) {
        //       this.approvalObj.Remarks = 'Accepted';
        //     }
        //     else {
        //       this.approvalObj.Remarks = this.comments;
        //     }
        //     this.approvalservice.InsertTransferApprovalService(this.approvalObj).subscribe(data => {
        //       this._Message = data['message'];
        //       if (this._Message == '1') {
        //         this.notifyService.showSuccess("Project transferred to " + this.new_Res+'('+this.approvalObj.Responsible+')' + " from " + this.Project_Responsible +'('+this.EmpNo_Res+')', "Successfully Transferred");
        //         this.fun_LoadProjectDetails();
        //         this.getapprovalStats();
        //         if (this._Urlid == '1') {
        //           this.router.navigate(["/backend/ProjectsSummary/"]);
        //           this._projectSummary.GetProjectsByUserName(this.Summarytype);
        //         }
        //         else if (this._Urlid == '2') {
        //           this._portfolioprojects.GetPortfolioProjectsByPid();
        //         }
        //         else if (this._Urlid == '3') {
        //           this._viewdashboard.GetCompletedProjects();
        //         }
        //         else if (this._Urlid == '4') {
        //           this._projectsAdd.GetProjectsByUserName();
        //           this._projectsAdd.getDropdownsDataFromDB();
        //         }
        //         else if (this._Urlid == '5') {
        //           this._toDo.GetProjectsByUserName();
        //         }
        //         else if (this._Urlid == '6') {
        //           this.router.navigate(["Notifications"]);
        //           this._notification.viewAll('Req');
        //         }
        //       }
        //       else if (this._Message == '2') {
        //         this.notifyService.showSuccess("Project Transfer request sent to the transferee -"+this.new_Res+'('+this.approvalObj.Responsible+')', "Transfer under approval!");
        //         this.fun_LoadProjectDetails();
        //         this.getapprovalStats();
        //         if (this._Urlid == '1') {
        //           this.router.navigate(["/backend/ProjectsSummary/"]);
        //           this._projectSummary.GetProjectsByUserName(this.Summarytype);
        //         }
        //         else if (this._Urlid == '2') {
        //           this._portfolioprojects.GetPortfolioProjectsByPid();
        //         }
        //         else if (this._Urlid == '3') {
        //           this._viewdashboard.GetCompletedProjects();
        //         }
        //         else if (this._Urlid == '4') {
        //           this._projectsAdd.GetProjectsByUserName();
        //           this._projectsAdd.getDropdownsDataFromDB();
        //         }
        //         else if (this._Urlid == '5') {
        //           this._toDo.GetProjectsByUserName();
        //         }
        //         else if (this._Urlid == '6') {
        //           this.router.navigate(["Notifications"]);
        //           this._notification.viewAll('Req');
        //         }
        //       }
        //       else if (this._Message == '4' || this._Message == null) {
        //         this.notifyService.showError("Please contact Support.", "Project Not Transferred!");
        //       }
        //     });
        //   }
        //   this.closeInfo();
        // }
        // else if(this.requestType == 'Task Complete'){
        //   if (this.selectedType == '1') {
        //     this.approvalObj.Emp_no = this.Current_user_ID;
        //     this.approvalObj.Project_Code = this.projectCode;
        //     this.approvalObj.Request_Date = this.requestDate;
        //     this.approvalObj.Request_type = this.requestType;
        //     this.approvalObj.rejectType = null;
        //     this.approvalObj.approvaltype = 'Accept';
        //     if (this.comments == '' || this.comments == null) {
        //       this.approvalObj.Remarks = 'Accepted';
        //     }
        //     else {
        //       this.approvalObj.Remarks = this.comments;
        //     }
        //     this.approvalservice.InsertStandardApprovalService(this.approvalObj).
        //       subscribe((data) => {
        //         this._Message = (data['message']);
        //         if (this._Message == 'Not Authorized' || this._Message=='0') {
        //           this.notifyService.showError("project not approved", 'Failed.');
        //         }
        //         else {
        //           this.notifyService.showSuccess("Project Approved Successfully", this._Message);
        //           this.fun_LoadProjectDetails();
        //           this.getapprovalStats();
        //           if (this._Urlid == '1') {
        //             this.router.navigate(["/backend/ProjectsSummary/"]);
        //             this._projectSummary.GetProjectsByUserName(this.Summarytype);
        //           }
        //           else if (this._Urlid == '2') {
        //             this._portfolioprojects.GetPortfolioProjectsByPid();
        //           }
        //           else if (this._Urlid == '3') {
        //             this._viewdashboard.GetCompletedProjects();
        //           }
        //           else if (this._Urlid == '4') {
        //             this._projectsAdd.GetProjectsByUserName();
        //             this._projectsAdd.getDropdownsDataFromDB();
        //           }
        //           else if (this._Urlid == '5') {
        //             this._toDo.GetProjectsByUserName();
        //           }
        //           else if (this._Urlid == '6') {
        //             this.router.navigate(["Notifications"]);
        //               this._notification.viewAll('Req');
        //           }
        //         }
        //       });
        //     console.log(this.approvalObj,"task");
        //   }
        //   else if (this.selectedType == '3') {
        //     if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
        //       this.noRejectType = true;
        //       this.notifyService.showError("Please select Reject Type", "Failed");
        //       return false;
        //     }
        //     else {
        //       this.approvalObj.Emp_no = this.Current_user_ID;
        //       this.approvalObj.Project_Code = this.projectCode;
        //       this.approvalObj.Request_Date = this.requestDate;
        //       this.approvalObj.Request_type = this.requestType;
        //       this.approvalObj.rejectType = this.rejectType;
        //       this.approvalObj.Remarks = this.comments;
        //       this.approvalObj.approvaltype = 'Reject';
        //       this.approvalservice.InsertStandardApprovalService(this.approvalObj).
        //         subscribe((data) => {
        //           this._Message = (data['message']);
        //           if (this._Message == 'Not Authorized' || this._Message=='0') {
        //               this.notifyService.showError("project not approved", 'Failed.');
        //           }
        //           else {
        //             this.notifyService.showSuccess(this._Message, "Rejected Successfully");
        //             this.fun_LoadProjectDetails();
        //             this.getapprovalStats();
        //             if (this._Urlid == '1') {
        //               this.router.navigate(["/backend/ProjectsSummary/"]);
        //               this._projectSummary.GetProjectsByUserName(this.Summarytype);
        //             }
        //             else if (this._Urlid == '2') {
        //               this._portfolioprojects.GetPortfolioProjectsByPid();
        //             }
        //             else if (this._Urlid == '3') {
        //               this._viewdashboard.GetCompletedProjects();
        //             }
        //             else if (this._Urlid == '4') {
        //               this._projectsAdd.GetProjectsByUserName();
        //               this._projectsAdd.getDropdownsDataFromDB();
        //             }
        //             else if (this._Urlid == '5') {
        //               this._toDo.GetProjectsByUserName();
        //               this._toDo.GetSubtask_Details();
        //             }
        //             else if (this._Urlid == '6') {
        //               this.router.navigate(["Notifications"]);
        //               this._notification.viewAll('Req');
        //             }
        //           }
        //         });
        //         console.log(this.approvalObj,"task");
        //     }
        //   }
        //   else if (this.selectedType == '4') {
        //     this.notifyService.showError("Not Approved - Development under maintainance", "Failed");
        //   }
        //   this.closeInfo();
        // }
        // else if(this.requestType == 'Revert Back'){
        //   if (this.selectedType == '3') {
        //     if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
        //       this.noRejectType = true;
        //       this.notifyService.showError("Please select Reject Type", "Failed");
        //       return false;
        //     }
        //     else {
        //       this.approvalObj.Emp_no = this.Current_user_ID;
        //       this.approvalObj.Project_Code = this.projectCode;
        //       this.approvalObj.Request_type = this.requestType;
        //       this.approvalObj.rejectType = this.rejectType;
        //       this.approvalObj.Remarks = this.comments;
        //       this.approvalservice.InsertRejectApprovalService(this.approvalObj).
        //         subscribe((data) => {
        //           this._Message = (data['message']);
        //           if (this._Message == 'Not Authorized') {
        //             this.notifyService.showError("project not approved.", 'you are not authorized to approve the project!!')
        //             this.notifyService.showInfo('to approve the project', 'Please contact the Project Owner');
        //           }
        //           else {
        //             this.notifyService.showSuccess(this._Message, "Rejected Successfully");
        //             this.fun_LoadProjectDetails();
        //             this.getapprovalStats();
        //             if (this._Urlid == '1') {
        //               this.router.navigate(["/backend/ProjectsSummary/"]);
        //               this._projectSummary.GetProjectsByUserName(this.Summarytype);
        //             }
        //             else if (this._Urlid == '2') {
        //               this._portfolioprojects.GetPortfolioProjectsByPid();
        //             }
        //             else if (this._Urlid == '3') {
        //               this._viewdashboard.GetCompletedProjects();
        //             }
        //             else if (this._Urlid == '4') {
        //               this._projectsAdd.GetProjectsByUserName();
        //               this._projectsAdd.getDropdownsDataFromDB();
        //             }
        //             else if (this._Urlid == '5') {
        //               this._toDo.GetProjectsByUserName();
        //               this._toDo.GetSubtask_Details();
        //             }
        //             else if (this._Urlid == '6') {
        //               this.router.navigate(["Notifications"]);
        //               this._notification.viewAll('Req');
        //             }
        //           }
        //         });
        //     }
        //   }
        //   else if (this.selectedType == '1') {
        //     this.Employee_List.forEach(element => {
        //       if(element.Emp_No==this.newResponsible){
        //         this.new_Res=element.DisplayName;    
        //       }
        //     });  
        //     this.approvalObj.Emp_no = this.Current_user_ID;
        //     this.approvalObj.Responsible = this.newResponsible;
        //     this.approvalObj.deadline = this.requestDeadline;
        //     this.approvalObj.Project_Code = this.projectCode;
        //     if (this.comments == '' || this.comments == null) {
        //       this.approvalObj.Remarks = 'Accepted';
        //     }
        //     else {
        //       this.approvalObj.Remarks = this.comments;
        //     }
        //     this.approvalservice.InsertRevertApprovalService(this.approvalObj).subscribe(data => {
        //       this._Message = data['message'];
        //       if (this._Message == '1') {
        //         this.notifyService.showSuccess("Project Reverted back to " + this.new_Res+'('+this.approvalObj.Responsible+')' + " from " + this.Project_Responsible +'('+this.EmpNo_Res+')', "Successfully Reverted back");
        //         this.fun_LoadProjectDetails();
        //         this.getapprovalStats();
        //         if (this._Urlid == '1') {
        //           this.router.navigate(["/backend/ProjectsSummary/"]);
        //           this._projectSummary.GetProjectsByUserName(this.Summarytype);
        //         }
        //         else if (this._Urlid == '2') {
        //           this._portfolioprojects.GetPortfolioProjectsByPid();
        //         }
        //         else if (this._Urlid == '3') {
        //           this._viewdashboard.GetCompletedProjects();
        //         }
        //         else if (this._Urlid == '4') {
        //           this._projectsAdd.GetProjectsByUserName();
        //           this._projectsAdd.getDropdownsDataFromDB();
        //         }
        //         else if (this._Urlid == '5') {
        //           this._toDo.GetProjectsByUserName();
        //         }
        //         else if (this._Urlid == '6') {
        //           this.router.navigate(["Notifications"]);
        //           this._notification.viewAll('Req');
        //         }
        //       }
        //       else if (this._Message == '2') {
        //         this.notifyService.showSuccess("Project Revert back sent to -"+this.new_Res+'('+this.approvalObj.Responsible+')', "Success!");
        //         this.fun_LoadProjectDetails();
        //         this.getapprovalStats();
        //         if (this._Urlid == '1') {
        //           this.router.navigate(["/backend/ProjectsSummary/"]);
        //           this._projectSummary.GetProjectsByUserName(this.Summarytype);
        //         }
        //         else if (this._Urlid == '2') {
        //           this._portfolioprojects.GetPortfolioProjectsByPid();
        //         }
        //         else if (this._Urlid == '3') {
        //           this._viewdashboard.GetCompletedProjects();
        //         }
        //         else if (this._Urlid == '4') {
        //           this._projectsAdd.GetProjectsByUserName();
        //           this._projectsAdd.getDropdownsDataFromDB();
        //         }
        //         else if (this._Urlid == '5') {
        //           this._toDo.GetProjectsByUserName();
        //         }
        //         else if (this._Urlid == '6') {
        //           this.router.navigate(["Notifications"]);
        //           this._notification.viewAll('Req');
        //         }
        //       }
        //       else if (this._Message == '4' || this._Message == null) {
        //         this.notifyService.showError("Please contact Support.", "Project not reverted!");
        //       }
        //     });
        //   }
        //   this.closeInfo();
        // }
        if (this.selectedType == '1') {
            // this.approvalObj.Emp_no = this.Current_user_ID;
            // this.approvalObj.Project_Code = this.projectCode;
            // this.approvalObj.Request_type = this.requestType;
            // if (this.comments == '' || this.comments == null) {
            //   this.approvalObj.Remarks = 'Accepted';
            // }
            // else {
            //   this.approvalObj.Remarks = this.comments;
            // }
            // this.approvalservice.InsertAcceptApprovalService(this.approvalObj).
            //   subscribe((data) => {
            //     this._Message = (data['message']);
            //     if (this._Message == 'Not Authorized' || this._Message=='0') {
            //       this.notifyService.showError("project not approved", 'Failed.');
            //     }
            //     else {
            //       this.notifyService.showSuccess("Project Approved Successfully", this._Message);
            //       this.fun_LoadProjectDetails();
            //       this.getapprovalStats();
            //       if (this._Urlid == '1') {
            //         this.router.navigate(["/backend/ProjectsSummary/"]);
            //         this._projectSummary.GetProjectsByUserName(this.Summarytype);
            //       }
            //       else if (this._Urlid == '2') {
            //         this._portfolioprojects.GetPortfolioProjectsByPid();
            //       }
            //       else if (this._Urlid == '3') {
            //         this._viewdashboard.GetCompletedProjects();
            //       }
            //       else if (this._Urlid == '4') {
            //         this._projectsAdd.GetProjectsByUserName();
            //         this._projectsAdd.getDropdownsDataFromDB();
            //       }
            //       else if (this._Urlid == '5') {
            //         this._toDo.GetProjectsByUserName();
            //       }
            //       else if (this._Urlid == '6') {
            //         this.router.navigate(["Notifications"]);
            //           this._notification.viewAll('Req');
            //       }
            //     }
            //   });
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
                // this.approvalObj.Emp_no = this.Current_user_ID;
                // this.approvalObj.Project_Code = this.projectCode;
                // this.approvalObj.Request_type = this.requestType;
                // this.approvalObj.rejectType = this.rejectType;
                // this.approvalObj.Remarks = this.comments;
                // this.approvalservice.InsertRejectApprovalService(this.approvalObj).
                //   subscribe((data) => {
                //     this._Message = (data['message']);
                //     if (this._Message == 'Not Authorized' || this._Message=='0') {
                //         this.notifyService.showError("project not approved", 'Failed.');
                //     }
                this.singleapporval_json.forEach(element => {
                    element.Remarks = this.comments;
                    element.RejectType = this.rejectType;
                });
                this.approvalservice.NewUpdateSingleRejectApprovalsService(this.singleapporval_json).
                    subscribe((data) => {
                    this.notifyService.showSuccess("Project Rejected successfully by - " + this._fullname, "Success");
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
                        this._notification.viewAll('Req');
                    }
                });
            }
        }
        else if (this.selectedType == '4') {
            this.notifyService.showError("Not Approved - Development under maintainance", "Failed");
        }
        this.closeInfo();
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
                this.singleapporval_json = JSON.parse(this.requestDetails[0]['singleapproval_json']);
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
                console.log(data, "rev");
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
                    this.fun_LoadProjectDetails();
                }
                else if (this._Message == 'Project Deadline Updated') {
                    this.notifyService.showSuccess("Project end date updated", "Success");
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
                    this._notification.viewAll('Req');
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
        FileUrl = "http://217.145.247.42:81/YRGEP/Uploads/";
        if (cloud == false) {
            var myWindow = window.open(FileUrl + Resp + "/" + Pcode + "/" + url);
            myWindow.focus();
        }
        else if (cloud == true) {
            var myWindow = window.open(url);
            myWindow.focus();
        }
    }
    LoadDocument1(iscloud, filename, url1, type) {
        let name = "ArchiveView/" + this.projectCode;
        var rurl = document.baseURI + name;
        var encoder = new TextEncoder();
        let url = encoder.encode(url1);
        let encodeduserid = encoder.encode(this.Current_user_ID.toString());
        filename = filename.replace(/#/g, "%23");
        filename = filename.replace(/&/g, "%26");
        // var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&type=1" + "&" + "MailDocId=" + MailDocId + "&" + "MailId=" + this._MemoId + "&" + "LoginUserId=" + this._LoginUserId + "&" + "IsConfidential=" + this.IsConfidential + "&" + "AnnouncementDocId=" + 0;
        var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&" + "type=" + type;
        var myWindow = window.open(myurl, url.toString());
        myWindow.focus();
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
}
ProjectInfoComponent.ɵfac = function ProjectInfoComponent_Factory(t) { return new (t || ProjectInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_8__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_9__.LinkService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_Services_approvals_service__WEBPACK_IMPORTED_MODULE_10__.ApprovalsService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_11__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_12__.BsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_13__.ProjectsSummaryComponent), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_portfolio_projects_portfolio_projects_component__WEBPACK_IMPORTED_MODULE_14__.PortfolioProjectsComponent), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_view_dashboard_projects_view_dashboard_projects_component__WEBPACK_IMPORTED_MODULE_15__.ViewDashboardProjectsComponent), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_16__.ToDoProjectsComponent), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_notification_notification_component__WEBPACK_IMPORTED_MODULE_17__.NotificationComponent), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_projects_add_projects_add_component__WEBPACK_IMPORTED_MODULE_18__.ProjectsAddComponent), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_24__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_Services_parameter_service__WEBPACK_IMPORTED_MODULE_19__.ParameterService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_22__.ElementRef)); };
ProjectInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({ type: ProjectInfoComponent, selectors: [["app-project-info"]], inputs: { inputFromParent: "inputFromParent" }, decls: 115, vars: 22, consts: [["id", "LinkSideBar", 1, "sideInfobar", "shadow-0", "animate-right", 3, "hidden"], [1, ""], [1, "offcanvas-header", "d-flex", "align-items-center", "justify-content-between"], [1, "m-0"], [1, "fa", "fa-link", "mr-1"], ["href", "javascript:void(0)", 1, "closebtn", "btn", "btn-xs", "btn-icon", "btn-hover-info", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24", "fill", "currentColor"], ["fill", "none", "d", "M0 0h24v24H0z"], ["d", "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"], [1, "kt-nav"], [1, "kt-nav__head", "d-block"], [1, "text-primary"], [1, "M_fsize"], [1, "badge", "badge-pill", "badge-outline-info"], [1, "badge", "badge-pill", "badge-outline-success"], [1, "kt-nav__separator"], [1, "kt-nav__item", "px-4"], [1, "d-flex"], [1, "mutlidropdown-set", "mutlidropdown-full", "mr-1", 2, "flex", "3", 3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onDeSelect"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", 3, "disabled", "click"], [1, "kt-nav__foot"], ["id", "LinkSideBar1", 1, "sideInfobar", "shadow-0", "animate-right", 3, "hidden"], ["appFocusOnClick", "", 1, "mutlidropdown-set", "mutlidropdown-full", "mr-1", 2, "flex", "3", 3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right", "offcanvas", 3, "hidden"], [1, "kt-portlet", "mb-0"], [1, "offcanvas-header", "d-flex", "align-items-center", "justify-content-between", "kt-portlet__head"], [4, "ngIf"], ["class", "card-body card-car side_scroll scroll-y", 4, "ngFor", "ngForOf"], [1, "btn22", "btn", "btn-label-primary", "btn-pill", "btn-sm", "mr-2", "d-none", 3, "click"], ["id", "btm-space", 1, "spacer-tab", "d-none"], [1, "spacer--body"], [1, "kt-nav", "pb-0"], [1, "kt-nav__head", "py-0"], [1, "height-scroll", "h-scr"], [1, "px-4", "py-3"], [1, "form-group"], [1, "text-danger"], ["reuired", "", "placeholder", "Select Employee", 1, "form-control"], [1, "d-flex", "input-group"], ["placeholder", "Select Date", "name", "date", 1, "form-control"], [1, "input-group-append"], ["matSuffix", "", 1, "btn-secondary", 3, "for"], ["picker5", ""], [1, "form-group", "mb-1"], ["placeholder", "", "rows", "2", "cols", "20", 1, "form-control", 2, "height", "70px"], [1, "px-4", "pb-3"], [1, "btn", "btn-info", "btn-sm", "mr-2", "text-white"], [1, "btn", "btn-outline-info", "btn-sm", "text-dark-75", 3, "click"], [1, "desc-msg", "rejct-msg"], ["class", "d-flex align-items-center px-3", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "px-3"], [1, "mb-0"], ["href", "javascript:void(0)", "data-toggle", "tooltip", "title", "click to open project in new window", 1, "custom-link", 3, "click"], ["class", "d-flex align-items-center ", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], ["class", "mb-0", 4, "ngIf"], [1, "card-body", "card-car", "side_scroll", "scroll-y"], [1, "d-flex", "align-items-start", "justify-content-between", "mt-0"], [1, "flex-1"], [1, "fs-3", "mb-2", "d-inline-blck", 3, "id"], ["class", "text-info mb-2", 3, "hidden", "id", "click", 4, "ngIf"], [1, "kt-inbox__subject", "mb-2", "w-100", 2, "display", "none", 3, "id"], ["type", "text", 1, "form-control", 2, "width", "78%", "height", "32px", 3, "id", "ngModel", "ngModelChange", "keydown.enter"], ["id", "button-addon4", 1, "d-inline-block", "ml-3"], [1, "btn", "btn-primary", "btn", "btn-sm", "mr-2", 3, "click"], [1, "btn", "btn-secondary", "btn", "btn-sm", 3, "click"], [1, "mb-2"], [1, "text-muted", "fs-5", 3, "id"], ["class", "text-info fs-5", 3, "hidden", "id", "click", 4, "ngIf"], [1, "kt-inbox__subject", "mt-2", 2, "display", "none", 3, "id"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "py-1", 3, "click"], [1, "fa", "fa-chart-bar"], [1, "mt-1"], [1, "kt-badge", "kt-bg-light-primary", "kt-badge--inline"], [1, "fa", "fa-clone", "mr-2"], ["class", " kt-badge kt-bg-light-primary kt-badge--inline ml-2", 4, "ngIf"], ["class", "d-flex  align-items-center justify-content-between mt-3", 4, "ngIf"], ["class", "card card-itm1 mt-2 collapse show", "id", "pro_actns", 4, "ngIf"], [1, "border-top", "mt-3"], [1, "mt-3"], [1, "fa", "fa-file-alt", "mr-2"], [1, "card-body"], [1, "row"], [1, "col-md-4"], [1, "d-flex", "align-items-center", "detial-item"], [1, "detail-icn"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-calendar4-week"], ["d", "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"], ["d", "M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"], [1, "w-100"], [1, "txtm-cus"], [4, "ngIf", "ngIfThen"], ["standardtask", ""], ["othertask", ""], ["class", "col-md-4", 4, "ngIf"], ["class", "col-md-4 pricevalues text-left py-0", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-wallet"], ["d", "M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"], ["class", "col-md-4", 4, "ngIf", "ngIfElse"], ["other", ""], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-briefcase"], ["d", "M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-bookmarks"], ["d", "M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"], ["d", "M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"], ["class", "w-100", 4, "ngIf"], ["class", "card-body", 4, "ngIf"], [1, "border-top"], [1, "d-flex", "align-items-center", "my-3"], [1, "d-flex", "flex-grow-1", "align-items-center"], [1, "name-box", "text-center"], [1, "names-response"], ["clas", "fs-10"], [1, "fs-4", "my-1"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "py-1", "pr-2", "dwn-arw", 3, "click"], [1, "ml-1", "mb-1", "fa", "fa-chevron-up"], ["id", "raciDetails", 1, "card", "border-0", "shadow-sm", "mb-3", 3, "hidden"], [1, "my-2"], [1, "col-md-6"], [1, "fas", "fa-caret-right", "fs-2", "text-success", "mr-2"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-3"], ["type", "button", "data-toggle", "collapse", "data-target", "#DMSlapse", "aria-expanded", "false", 1, "btn", "btn-primary", "btn-sm", "py-1", "d-flex", "align-items-center", "asgn-colpse", "collapsed"], [1, "fa", "fa-chevron-up", "ml-2", "m-0"], ["id", "DMSlapse", "aria-labelledby", "DMSlapse", 1, "card-body", "collapse"], [1, "fs-6", "scrollbar1"], [1, "table"], [4, "ngFor", "ngForOf"], ["style", "color:gray", 4, "ngIf"], ["type", "button", "data-toggle", "collapse", "data-target", "#portfoliolapse", "aria-expanded", "false", 1, "btn", "btn-primary", "btn-sm", "py-1", "d-flex", "align-items-center", "asgn-colpse", "collapsed"], ["id", "portfoliolapse", "aria-labelledby", "portfoliolapse", 1, "card-body", "collapse"], ["class", "border-top", 4, "ngIf"], ["class", " collapse scrollbar1", "id", "inprocesslapse", "aria-labelledby", "inprocesslapse", 4, "ngIf"], ["class", " border-top d-block align-items-center justify-content-between mt-3", 4, "ngIf"], ["class", " collapse scrollbar1", "id", "completedlapse", "aria-labelledby", "completedlapse", 4, "ngIf"], [1, "text-info", "mb-2", 3, "hidden", "id", "click"], ["data-toggle", "tooltip", "title", "edit project name", 1, "fas", "fa-edit", "ml-2", "mb-1", "curser-pointer"], [1, "text-info", "fs-5", 3, "hidden", "id", "click"], ["data-toggle", "tooltip", "title", "edit project description", 1, "fas", "fa-edit", "ml-2", "mb-1", "curser-pointer"], [1, "kt-badge", "kt-bg-light-primary", "kt-badge--inline", "ml-2"], [1, "mr-1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "13", "height", "12"], ["d", "M8 19.9998V21.9323C8 22.2085 7.77614 22.4323 7.5 22.4323C7.38303 22.4323 7.26977 22.3913 7.17991 22.3164L3.06093 18.8839C2.84879 18.7072 2.82013 18.3919 2.99691 18.1797C3.09191 18.0657 3.23264 17.9998 3.38103 17.9998L18 17.9998C19.1046 17.9998 20 17.1044 20 15.9998V7.99985H22V15.9998C22 18.209 20.2091 19.9998 18 19.9998H8ZM16 3.99985V2.06738C16 1.79124 16.2239 1.56738 16.5 1.56738C16.617 1.56738 16.7302 1.60839 16.8201 1.68327L20.9391 5.11575C21.1512 5.29253 21.1799 5.60782 21.0031 5.81995C20.9081 5.93395 20.7674 5.99986 20.619 5.99986L6 5.99985C4.89543 5.99985 4 6.89528 4 7.99985V15.9998H2V7.99985C2 5.79071 3.79086 3.99985 6 3.99985H16Z"], ["class", "text-hover-underline text-hover-info mb-0", "data-toggle", "collapse", "href", "#pro_actns", "role", "button", "aria-expanded", "true", "aria-controls", "pro_actns", 4, "ngIf"], ["class", "text-info text-hover-underline", "data-toggle", "collapse", "href", "#pro_actns", "role", "button", "aria-expanded", "true", "aria-controls", "pro_actns", 4, "ngIf"], ["data-toggle", "collapse", "href", "#pro_actns", "role", "button", "aria-expanded", "true", "aria-controls", "pro_actns", 1, "text-hover-underline", "text-hover-info", "mb-0"], ["data-toggle", "collapse", "href", "#pro_actns", "role", "button", "aria-expanded", "true", "aria-controls", "pro_actns", 1, "text-info", "text-hover-underline"], [1, "c1"], [1, "s1"], ["id", "pro_actns", 1, "card", "card-itm1", "mt-2", "collapse", "show"], [1, "card-body", "px-0"], [1, "w-45"], [1, "px-cb"], [1, "pb-2"], ["id", "ProjectDetails_Main", 1, "proctdetls"], [1, "d-flex", "align-items-center", "mb-3"], ["width", "24", "height", "24", "viewBox", "3 2 34 34", "aria-hidden", "true", "focusable", "false", "fill", "currentColor"], ["d", "M30.5,9h-7.8l-3.6-3.6C18.2,4.5,16.9,4,15.6,4h-5.1C6.9,4,4,6.9,4,10.5v19c0,3.6,2.9,6.5,6.5,6.5h19c3.6,0,6.5-2.9,6.5-6.5v-15C36,11.5,33.5,9,\n                                                30.5,9z M33,29.5c0,1.9-1.6,3.5-3.5,3.5h-19C8.6,33,7,31.4,7,29.5v-19C7,8.6,8.6,7,10.5,7h5.1c0.5,0,1,0.2,1.4,0.6l4.1,4c0.3,0.3,0.7,0.4,1.1,0.4h8.4c1.4,\n                                                0,2.5,1.1,2.5,2.5L33,29.5L33,29.5z M13.5,13L13.5,13c0.8,0,1.5,0.7,1.5,1.5v13c0,0.8-0.7,1.5-1.5,1.5l0,0c-0.8,0-1.5-0.7-1.5-1.5v-13C12,13.7,12.7,13,13.5,13z\n                                                M25.5,18L25.5,18c0.8,0,1.5,0.7,1.5,1.5v8c0,0.8-0.7,1.5-1.5,1.5l0,0c-0.8,0-1.5-0.7-1.5-1.5v-8C24,18.7,24.7,18,25.5,18z M19.5,22L19.5,22c0.8,0,1.5,0.7,1.5,1\n                                                .5v4c0,0.8-0.7,1.5-1.5,1.5l0,0c-0.8,0-1.5-0.7-1.5-1.5v-4C18,22.7,18.7,22,19.5,22z"], [1, "action-content"], [1, "txtm-cus", "mb-1"], [1, "mt-1", "text-blue"], [1, "action-content", "d-flex", "align-items-center", "gap-1"], [1, "left-w"], ["class", "mt-1", 4, "ngIf"], ["class", "px-1", 4, "ngIf"], [1, "txtm-cus", "pt-1"], ["class", "d-flex align-items-center mb-3", 4, "ngIf"], ["class", "comment-list my-3 pb-0", 4, "ngIf"], ["class", "btn--1 btn-info--1 btn-sm--1 text-info py-2", "data-toggle", "collapse", "href", "#prevco", "role", "button", "aria-expanded", "false", "aria-controls", "prevco", 4, "ngIf"], ["id", "prevco", 1, "px-cb", "pt-cb", "bg-gry", "collapse", "kt-portlet__body_scroll", "prv-cmts"], ["class", "comment-list", 4, "ngFor", "ngForOf"], [1, "px-3", "w-55", "flex-1", "br-cus"], [1, "card-title", "mb-0"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "det-text", "pro-nm", "pl-1", "text-blue"], [2, "color", "red"], [1, "fas", "fa-chevron-up", "text-info1", "mr-2", "d-none"], ["id", "proj_act_acc", 1, "px-1"], [1, "pro_act_div", "px-0", "pt-1"], [1, "form-group", "mb-2"], [1, "form-check-inline", 3, "click"], [1, "form-check-label", "lbl-suc", "btn-app"], ["id", "rdbButtons_0", "type", "radio", "name", "rdbButtons", "value", "1", "checked", "checked", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["class", "form-check-inline", 3, "click", 4, "ngIf"], [1, "form-check-label", "lbl-dan", "btn-app"], ["id", "rdbButtons_2", "type", "radio", "name", "rdbButtons", "value", "3", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["id", "comts1", 1, ""], [1, "col-md-12", "checked-rad", "pl-1", "pt-3"], ["class", "form-group", 4, "ngIf"], ["class", "mb-2", 4, "ngIf"], ["class", "appr-comts", 4, "ngIf"], ["class", "d-flex justify-content-end mb-2", 4, "ngIf"], [1, "px-1"], [1, "la", "la-arrow-right", "mx-3", "fs-4", "font-weight-bold"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-fast-forward-btn"], ["d", "M8.79 5.093A.5.5 0 0 0 8 5.5v1.886L4.79 5.093A.5.5 0 0 0 4 5.5v5a.5.5 0 0 0 .79.407L8 8.614V10.5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5Z"], ["d", "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4Z"], ["class", "action-content d-flex align-items-center gap-1", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"], [3, "click"], ["data-toggle", "tooltip", 1, "mt-1", 3, "title"], [1, "comment-list", "my-3", "pb-0"], [1, "name-box", "text-center", "mt-1"], [1, "d-flex", "flex-column", "flex-grow-1"], [1, "comt-info"], [1, "comt-text"], ["data-toggle", "collapse", "href", "#prevco", "role", "button", "aria-expanded", "false", "aria-controls", "prevco", 1, "btn--1", "btn-info--1", "btn-sm--1", "text-info", "py-2"], [1, "comment-list"], [1, "blw", "mt-2"], [1, "kt-badge", "kt-badge--inline", "kt-badge--unified-info"], [1, "form-check-label", "lbl-war", "btn-app"], ["id", "rdbButtons_1", "type", "radio", "name", "rdbButtons", "value", "2", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["required", "", "name", "rej_type", "placeholder", "Select Reject Type", "id", "rej_type", 3, "ngModel", "ngModelChange", "change"], ["action", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["style", "color:grey", 4, "ngIf"], ["style", "color:red", 4, "ngIf"], [3, "value"], [2, "color", "grey"], [1, "appr-comts"], [1, "exs-cmts", "card"], ["class", "card-header", 4, "ngIf"], [1, "crd-bdy", "scroll-y"], ["class", "cmts-items", 4, "ngFor", "ngForOf"], [1, "card-header"], [1, "cmts-items"], [3, "ngClass"], [1, "cmts-actns"], ["class", "cmts-svg", 3, "click", 4, "ngIf"], [1, "cmts-svg", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24"], ["d", "M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"], ["d", "M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"], [1, "form-control", "h-100px", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-end", "mb-2"], [1, "btn", "btn-sm", "py-1", "btn-secondary", "mr-2", 3, "click"], ["type", "submit", "primary", "true", 1, "btn", "btn-sm", "btn-info", 3, "disabled", "click"], [1, "mb-0", "d-flex", "align-items-center"], ["class", "mb-0", "style", "color:rgb(112, 45, 45)", "data-toggle", "kt-tooltip", 3, "title", 4, "ngIf"], ["class", "dropdown", 4, "ngIf"], ["data-toggle", "kt-tooltip", 1, "mb-0", 2, "color", "rgb(112, 45, 45)", 3, "title"], [1, "dropdown"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", "no-after", "text-info", 3, "click"], ["data-toggle", "tooltip", "title", "extend deadline", 1, "fas", "fa-edit", "ml-2", "mb-1", "curser-pointer"], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-fit", "date-drop1", 3, "id"], [1, "kt-nav", "pb-0", 3, "click"], ["matInput", "", "placeholder", "Select Date", "name", "date", 1, "form-control", 3, "matDatepicker", "id", "min", "ngModel", "click", "keydown.enter", "ngModelChange"], ["Deadlinetext", "ngModel"], ["picker2", ""], ["placeholder", "", "rows", "2", "cols", "20", 1, "form-control", 2, "height", "70px", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-info", "btn-sm", "mr-2", "text-white", 3, "disabled", "click"], ["type", "button", "id", "hold-icn", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", "no-after", "text-info", 3, "click"], ["data-toggle", "tooltip", "title", "project hold", 1, "fas", "fa-pause", "ml-2", "mb-1", "curser-pointer"], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-fit", "date-drop2", 3, "id"], [1, "form-group", "input-group"], [1, "input-group"], ["matInput", "", "placeholder", "Select Date", "name", "date", 1, "form-control", 3, "matDatepicker", "id", "min", "max", "ngModel", "click", "keydown.enter", "ngModelChange"], ["Holddt", "ngModel"], ["picker3", ""], ["placeholder", "Define your exact hold reason here. e.g: Waiting for store license", "rows", "2", "cols", "20", 1, "form-control", 2, "height", "90px", 3, "ngModel", "ngModelChange"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-clock"], ["d", "M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"], ["d", "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-clock"], [1, "col-md-4", "pricevalues", "text-left", "py-0"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-star"], ["d", "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"], ["class", "text-danger", "data-toggle", "tooltip", 3, "title", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["data-toggle", "tooltip", 1, "text-danger", 3, "title"], [1, "text-info"], [1, "text-warning"], [1, "text-success"], [1, "", 2, "color", "#c0b5dc"], ["class", "progress_bar", "style", "overflow: hidden;", 4, "ngIf"], [1, "progress_bar", 2, "overflow", "hidden"], [1, "pro-bar"], [1, "progress_bar_title"], [1, "progress_number"], ["data-value", "0", "data-percentage-value", "0", 1, "progress-bar-inner", "bg-today", 3, "ngStyle"], ["data-value", "10", "data-percentage-value", "10", 1, "progress-bar-inner", "bg-today", 3, "ngStyle"], ["data-value", "40", "data-percentage-value", "40", 1, "progress-bar-inner", "bg-today", 3, "ngStyle"], ["data-value", "90", "data-percentage-value", "90", 1, "progress-bar-inner", "bg-today", 3, "ngStyle"], ["data-value", "100", "data-percentage-value", "100", 1, "progress-bar-inner", "bg-today", 3, "ngStyle"], [1, "tr-9"], ["href", "javascript:void(0)", 3, "click"], [1, "align-top", "curser-pointer", "text-right", 3, "click"], [1, "fas", "fa-trash-alt", "text-primary"], [2, "color", "gray"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "fas fa-trash-alt text-primary", 4, "ngIf"], ["type", "button", "data-toggle", "collapse", "data-target", "#inprocesslapse", "aria-expanded", "false", 1, "btn", "btn-primary", "btn-sm", "py-1", "d-flex", "align-items-center", "asgn-colpse", "collapsed"], [1, "fa", "fa-list", "mr-2"], ["id", "inprocesslapse", "aria-labelledby", "inprocesslapse", 1, "collapse", "scrollbar1"], ["class", "subtask-list", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "subtask-list", 3, "ngClass"], [1, "lbl-act", "ml-2"], [1, "kt-badge", "kt-hover--primary", "kt-bg-light-primary", "kt-badge--inline"], [1, "fa", "fa-window-restore", "mr-2"], [1, "col-lg-12"], [1, "d-flex-cen"], ["data-toggle", "collapse", "role", "button", "aria-expanded", "false", "aria-controls", "", 1, "d-flex", "justify-content-between", "collapsed", "lapse", "flex-1", 3, "href"], [1, "subtask-list-title", "text-hover-primary", "fs-5", "mb-0", "flex-hdv"], ["data-toggle", "tooltip", 1, "mr-2", 3, "id", "title", "click"], [1, "mr-2", "showv"], [1, "showv", "mr-2", "text-muted"], [1, "far", "fa-calendar-alt", "mr-1"], [1, "d-flex-cen", "showv"], [1, "detail-icn", "mr-1", "d-none"], ["data-toggle", "tooltip", "class", " ", "data-toggle", "tooltip", "title", "Action Status!", 3, "ngClass", 4, "ngIf"], ["data-toggle", "tooltip", 3, "title", 4, "ngIf"], ["data-toggle", "tooltip", "class", " text-danger", "data-toggle", "tooltip", "title", "Action Status!", 4, "ngIf"], [1, "d-flex-cen", "mr-2", "showv"], [1, "initial-box", "color-7", "b-50", "mr-2"], [1, "far", "fa-user"], ["data-toggle", "tooltip", "title", "Action Responsible!", 1, ""], [1, "card-body", "pt-0", "collapse", "p1", 3, "id"], ["data-toggle", "tooltip", "title", "Action Description!", 1, "mr-2", 3, "id"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "1 0 14 14", 1, "bi", "bi-person"], ["d", "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"], ["data-toggle", "tooltip", "title", "Action Owner!", 1, ""], ["type", "button", "id", "-icn", "class", "text-info", "aria-haspopup", "true", "aria-expanded", "false", 3, "click", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Start Date!", 1, ""], ["data-toggle", "tooltip", "title", "End Date!", 1, ""], ["data-toggle", "tooltip", "title", "Action Cost!", 1, ""], ["class", "", "data-toggle", "tooltip", "title", "Action Cost!", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-hourglass"], ["d", "M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z"], ["class", "", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-percent"], ["d", "M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"], ["data-toggle", "tooltip", "data-toggle", "tooltip", "title", "Action Status!", 1, "", 3, "ngClass"], ["data-toggle", "tooltip", 3, "title"], ["data-toggle", "tooltip", "data-toggle", "tooltip", "title", "Action Status!", 1, "text-danger"], ["type", "button", "id", "-icn", "aria-haspopup", "true", "aria-expanded", "false", 1, "text-info", 3, "click"], ["data-toggle", "tooltip", "title", "edit action owner", 1, "fas", "fa-edit", "ml-1", "mb-1", "curser-pointer"], ["data-toggle", "tooltip", "title", "edit action responsible", 1, "fas", "fa-edit", "ml-1", "mb-1", "curser-pointer"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-card-text"], ["d", "M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"], ["d", "M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"], ["data-toggle", "tooltip", "title", "Action Remarks!", 1, ""], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-paperclip"], ["d", "M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"], ["title", "Click To Open File", 1, "word-break", "text-info", "curser-pointer", 3, "click"], [1, "border-top", "d-block", "align-items-center", "justify-content-between", "mt-3"], ["type", "button", "data-toggle", "collapse", "data-target", "#completedlapse", "aria-expanded", "false", 1, "btn", "btn-primary", "btn-sm", "py-1", "d-flex", "align-items-center", "asgn-colpse", "collapsed"], ["id", "completedlapse", "aria-labelledby", "completedlapse", 1, "collapse", "scrollbar1"], ["class", "subtask-list", 4, "ngFor", "ngForOf"], [1, "subtask-list"], ["data-toggle", "collapse", "role", "button", "aria-expanded", "false", "aria-controls", "", 1, "d-flex", "justify-content-between", "lapse", "collapsed", 3, "href"], [1, "subtask-list-title", "text-hover-primary", "fs-5", "mt-1"], [1, "card-body", "pt-0", "collapse", "c1", 3, "id"], [1, "mb-3", "ml--2"], ["data-toggle", "tooltip", "title", "Project Duration", 1, ""], [1, "d-block", "align-items-center", "justify-content-between", "mt-3"], ["type", "button", "id", "asgnid-colpse", "data-toggle", "collapse", "data-target", "#assignlapse", "aria-expanded", "false", 1, "btn", "btn-primary", "btn-sm", "py-1", "d-flex", "align-items-center", "asgn-colpse", "collapsed", 3, "click"], ["id", "assignlapse", "class", "collapse", "aria-labelledby", "assignlapse", 4, "ngFor", "ngForOf"], ["id", "assignlapse", "aria-labelledby", "assignlapse", 1, "collapse"], [1, "text-left", "mt-3"], [1, "d-flex", "mt-3", "flex-column"], [1, "fs-4", "mb-1"], [1, "text-muted", "fs-5"], [1, "card-body", "pb-0"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-calendar4"], ["class", "txtm-cus", 4, "ngIf"]], template: function ProjectInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, " Link DMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_a_click_6_listener() { return ctx.closeLinkSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](8, "path", 7)(9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "ul", 9)(11, "li", 10)(12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](15, " Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](18, " Linked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "li", 16)(23, "div", 17)(24, "ng-multiselect-dropdown", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_Template_ng_multiselect_dropdown_ngModelChange_24_listener($event) { return ctx.ngDropdwonMemo = $event; })("onSelect", function ProjectInfoComponent_Template_ng_multiselect_dropdown_onSelect_24_listener() { return ctx.Memo_Select(ctx.ngDropdwonMemo); })("onDeSelect", function ProjectInfoComponent_Template_ng_multiselect_dropdown_onDeSelect_24_listener() { return ctx.Memo_Deselect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_button_click_25_listener() { return ctx._AddLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](26, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](27, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](28, "div", 21)(29, "div", 1)(30, "div", 2)(31, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](32, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](33, " Link Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](34, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_a_click_34_listener() { return ctx.closeLinkSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](35, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](36, "path", 7)(37, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](38, "ul", 9)(39, "li", 10)(40, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](41, " Portfolios");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](43, " Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](46, " Linked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](47, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](50, "li", 16)(51, "div", 17)(52, "ng-multiselect-dropdown", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_Template_ng_multiselect_dropdown_ngModelChange_52_listener($event) { return ctx.ngDropdwonPort = $event; })("onSelect", function ProjectInfoComponent_Template_ng_multiselect_dropdown_onSelect_52_listener() { return ctx.Portfolio_Select(ctx.ngDropdwonPort); })("onDeSelect", function ProjectInfoComponent_Template_ng_multiselect_dropdown_onDeSelect_52_listener() { return ctx.Portfolio_Deselect(ctx.ngDropdwonPort); })("onSelectAll", function ProjectInfoComponent_Template_ng_multiselect_dropdown_onSelectAll_52_listener($event) { return ctx.Portfolio_SelectAll($event); })("onDeSelectAll", function ProjectInfoComponent_Template_ng_multiselect_dropdown_onDeSelectAll_52_listener() { return ctx.Portfolio_DeSelectAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](53, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_button_click_53_listener() { return ctx.addProjectToPortfolio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](54, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](55, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](56, "div", 23)(57, "div", 24)(58, "div", 25)(59, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](60, "Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](61, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_a_click_61_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](62, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](63, "path", 7)(64, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](65, ProjectInfoComponent_ng_container_65_Template, 3, 1, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](66, ProjectInfoComponent_ng_container_66_Template, 3, 1, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](67, ProjectInfoComponent_div_67_Template, 201, 51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](68, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_button_click_68_listener() { return ctx.btmspace_opn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](69, "Edit Tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](70, "div", 29)(71, "div", 30)(72, "div", 1)(73, "ul", 31)(74, "li", 32)(75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](76, "New End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](78, "Action: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](79, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](80, "Project_Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](81, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](82, "div", 33)(83, "div", 34)(84, "div", 35)(85, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](86, " Transfer To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](87, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](88, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](89, "select", 37)(90, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](91, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](92, "div", 35)(93, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](94, "Set new End Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](95, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](96, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](97, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](98, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](99, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](100, "mat-datepicker-toggle", 41)(101, "mat-datepicker", 35, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](103, "div", 43)(104, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](105, "Remarks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](106, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](107, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](108, "textarea", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](109, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](110, "div", 45)(111, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](112, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](113, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_button_click_113_listener() { return ctx.close_space(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](114, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx._LinkSideBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx._displayProjName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx._totalMemos, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx._mappedMemos, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("placeholder", "Select Memo")("settings", ctx.dropdownSettings_Memo)("data", ctx.Memos_List)("ngModel", ctx.ngDropdwonMemo);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", !ctx.ngDropdwonMemo);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx._LinkSideBar1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx.totalPortfolios, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx._portfolioLength, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("placeholder", "Select Portfolio(s)")("settings", ctx.dropdownSettings_Portfolio)("data", ctx._portfoliosList)("ngModel", ctx.ngDropdwonPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", ctx._SelectedPorts == " " || ctx._SelectedPorts == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx._openInfoSideBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.action_details);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.approve_details);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx.ProjectInfo_List);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("for", _r3);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgStyle, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_27__.MultiSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_28__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_28__["ɵr"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__.MatSuffix, _focus_on_click_directive__WEBPACK_IMPORTED_MODULE_20__.FocusOnClickDirective, _angular_common__WEBPACK_IMPORTED_MODULE_24__.PercentPipe, _angular_common__WEBPACK_IMPORTED_MODULE_24__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_24__.DatePipe, _truncate_pipe__WEBPACK_IMPORTED_MODULE_21__.TruncatePipe], styles: [".name-box[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    font-size: 9px;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    letter-spacing: 2px;\r\n    border-radius: 50%;\r\n    line-height: 30px;\r\n    margin-right: 5px;\r\n  }\r\n.names-response[_ngcontent-%COMP%]{\r\n    display :inline-block;\r\n    text-align: left;\r\n  }\r\n.names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{\r\n    display: block;\r\n    font-size: 10px;\r\n    font-weight: 600;\r\n  }\r\n.names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{\r\n    font-weight: 600;\r\n  }\r\n.head-btn[_ngcontent-%COMP%]{\r\n    background-color: rgba(88, 103, 221, 0.1);\r\n      padding: 3px 10px 3px 5px;\r\n      border-radius: 2rem;\r\n      border: 1px solid #b3bcff;\r\n      font-weight: 500;\r\n      font-size: 12px;\r\n  }\r\n.head-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n      width: 25px;\r\n      height: 25px;\r\n      background: #5867dd;\r\n      color: #fff;\r\n      line-height: 25px;\r\n      text-align: center;\r\n      border-radius: 50%;\r\n      margin-right: 3px;\r\n  }\r\n.devider[_ngcontent-%COMP%]{\r\n    height: 1px;\r\n    width: 100%;\r\n    background-color: #f1f1f1;\r\n  }\r\n.pricevalues[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n    padding-bottom: 10px;\r\n    \r\n  }\r\n.top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(1), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(2)  {\r\n    border-top: 1px solid #f1f1f1;\r\n  }\r\n.top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(3), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(4)  {\r\n    border-bottom: none\r\n  }\r\n\r\n\r\n.w-60[_ngcontent-%COMP%]{\r\n    width: 60px;\r\n  }\r\n.dms-links[_ngcontent-%COMP%]{\r\n    list-style-type: disc;\r\n  }\r\n.dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: block;\r\n    text-decoration: underline;\r\n    font-weight: 600;\r\n    margin-bottom: 5px;\r\n  }\r\n.py-10px[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n  }\r\n.dropdown-item[_ngcontent-%COMP%]:active{\r\n    background-color: #dedee0;\r\n  }\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .pro-bar[_ngcontent-%COMP%] {\r\n    background: hsl(0, 0%, 97%);\r\n    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;\r\n    height: 4px;\r\n    margin-bottom: 20px;\r\n    margin-top: 30px;    \r\n    margin-left: 10px;\r\n    position: relative;\r\n    text-align: left;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress_bar_title[_ngcontent-%COMP%] {\r\n    color: hsl(218, 4%, 50%);\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    position: relative;\r\n    top: -28px;\r\n    z-index: 1;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress_number[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%] {\r\n    background-color: hsl(0, 0%, 88%);\r\n    display: block;\r\n    width: 0;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transition: width 1s linear 0s;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    background-color: hsl(0, 0%, 100%);\r\n    border-radius: 50%;\r\n    width: 4px;\r\n    height: 4px;\r\n    position: absolute;\r\n    right: 1px;\r\n    top: 0;\r\n    z-index: 1;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    width: 14px;\r\n    height: 14px;\r\n    background-color: inherit;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    right: -4px;\r\n    top: -5px;\r\n  }\r\n.bg-today[_ngcontent-%COMP%] {\r\n    background-color: #342bf0 !important;\r\n  }\r\n.M_fsize[_ngcontent-%COMP%]{\r\n    font-size: smaller;\r\n  }\r\n.badge[_ngcontent-%COMP%] {\r\n    border-radius: 0;\r\n    font-size: 12px;\r\n    line-height: 1;\r\n    padding: .375rem .5625rem;\r\n    font-weight: normal;\r\n  }\r\n.port_list[_ngcontent-%COMP%]{\r\n    \r\n    padding: 0.75rem 1rem;\r\n\r\n  }\r\n\r\n.border-bottom[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #dee2e6!important;\r\n}\r\n.show1[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.show[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n.item-b[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(n+4) {\r\n    display: none;\r\n}\r\n.tr-9[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n}\r\n.no-after[_ngcontent-%COMP%]::after{\r\n  content: none !important;\r\n}\r\n.hold-drop[_ngcontent-%COMP%]{\r\n  width: 500px;\r\n}\r\n.br-cus[_ngcontent-%COMP%] {\r\n  border-left: 1px solid #eee;\r\n}\r\n.card-itm1[_ngcontent-%COMP%]{\r\n  background: #fff;\r\n    border: 1px solid #ebedf2;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 1px #00000026;\r\n}\r\n\r\n.black_overlay[_ngcontent-%COMP%]{\r\n  display: none;\r\n  position: fixed;\r\n  top: 0%;\r\n  left: 0%;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0,0,0,.32);\r\n  z-index: 90;\r\n  -moz-opacity: .8;\r\n  opacity: .8;\r\n  filter: alpha(opacity=80);\r\n}\r\n.comment-list[_ngcontent-%COMP%]{\r\n  padding-bottom: 1.25rem;\r\n}\r\n.comt-text[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 5px;\r\n  \r\n  font-size: 14px;\r\n}\r\n.blw[_ngcontent-%COMP%]   .dt[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\r\n.comt-info[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  color: #494f54;\r\n  color: #595d6e;\r\n\r\n}\r\n.prv-cmts[_ngcontent-%COMP%]{\r\n max-height: 200px;\r\n overflow: auto; \r\n}\r\n.s1[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   .c1[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   .s1[_ngcontent-%COMP%]{\r\n  display: inline;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]:before, .dwn-arw[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]:before {\r\n  content: \"\\f078\";\r\n}\r\n.action-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\r\n  margin-bottom: 0;\r\n}\r\n.date-drop1[_ngcontent-%COMP%], .date-drop2[_ngcontent-%COMP%], .date-drop3[_ngcontent-%COMP%] {\r\n  width: 350px;\r\n}\r\n  .input-group-append .mat-icon-button {\r\n  height: 35px !important;\r\n}\r\n.date-drop1[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n    left: -226px;\r\n}\r\n.date-drop2[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n    left: -247px\r\n}\r\n.date-drop3[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n    left: -169px\r\n}\r\n.w-45[_ngcontent-%COMP%] {\r\n  width: 45% !important;\r\n}\r\n.w-55[_ngcontent-%COMP%] {\r\n  width: 55% !important;\r\n}\r\n  .no-ellip span.ng-option-label {\r\n    text-overflow: unset;\r\n    white-space: break-spaces;\r\n\r\n}\r\n.fixed-btn[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  z-index: 99;\r\n  bottom: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.spacer-tab[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: fixed;\r\n  z-index: 999;\r\n  border: 1px solid rgb(232 234 237);\r\n  overflow: auto;\r\n  max-height: 450px;\r\n  opacity: 1;\r\n  width: 400px;\r\n  bottom: 20px;\r\n  right: 10px;\r\n  box-shadow: -1px 2px 20px #00478a21;\r\n  border-radius: 8px;\r\n  padding: 5px 0;\r\n  background-color: rgb(255 255 255);\r\n}\r\n\r\n.spacer--body[_ngcontent-%COMP%] {\r\n  margin-left: 0;\r\n  padding-left: 10px;\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n  background-color: #fff;\r\n}\r\n  .input-group-append .mat-icon-button {\r\n  height: 35px !important;\r\n}\r\n#sidebar-overlay[_ngcontent-%COMP%] {\r\n  background-color: rgba(50, 58, 70, .2);\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: none;\r\n  z-index: 998;\r\n  transition: all .2s ease-out;\r\n  cursor: pointer;\r\n}\r\n.left-w[_ngcontent-%COMP%]{\r\n  min-width: 105px;\r\n}\r\n.cmts-items[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px 15px;\r\n  border-bottom: 1px solid #e4e7e8;\r\n}\r\n.cmts-svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n  height: 20px;\r\n  fill: #8d95a5;\r\n}\r\n.appr-comts[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  flex: 1;\r\n}\r\n.exs-cmts[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  color: #4b4343;\r\n}\r\n.exs-cmts[_ngcontent-%COMP%]   .crd-bdy[_ngcontent-%COMP%]{  \r\n  overflow: auto;\r\n  max-height: 200px;\r\n}\r\n.cmts-items[_ngcontent-%COMP%]:hover   .cmts-svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  transform: scale(1.1);\r\n  fill: #2786fb;\r\n}\r\n.cmts-svg[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n.card-car[_ngcontent-%COMP%]{\r\n  color: #595d6e;\r\n}\r\n.card-car[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  line-height: 1;\r\n  margin-bottom: 0;\r\n}\r\n.card-car[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  line-height: 1;\r\n  margin-bottom: 0;\r\n  color: #595d6e !important;\r\n}\r\n.detail-icn[_ngcontent-%COMP%]   svg.dater[_ngcontent-%COMP%]{\r\n  width: 22px;\r\n  height: 22px;\r\n}\r\n.offcanvas-header[_ngcontent-%COMP%] {\r\n  min-height: 50px;\r\n  padding: 0 25px;\r\n  border-bottom: 1px solid #ebedf2;\r\n}\r\n.subtask-list[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  background-color: #fff;\r\n  background-clip: border-box;\r\n  border: 1px solid #ebedf2;\r\n  box-shadow: 0 0.75rem 6rem rgb(56 65 74 / 3%);\r\n  border-radius: 0.25rem;\r\n  margin-bottom: 12px;\r\n  display: block;\r\n  color: #595d6e;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   span.showv[_ngcontent-%COMP%]{\r\n  display: inline-flex;\r\n  align-items: center;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   .showv[_ngcontent-%COMP%]{\r\n  display: inline-flex;\r\n}\r\n.showv[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   .flex-hdv[_ngcontent-%COMP%]{\r\n  flex: unset;\r\n}\r\n.flex-hdv[_ngcontent-%COMP%]{\r\n  flex:1;\r\n}\r\n.ml--2[_ngcontent-%COMP%] {\r\n  margin-left: -15px;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   .swap-view[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n\r\n}\r\n.swap-view[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   .swap-less[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.scrollbar1[_ngcontent-%COMP%] {\r\n  max-height: calc(100vh - 178px);\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n.scrollbar1[_ngcontent-%COMP%] {\r\n  max-height: calc(100vh - 138px);\r\n  overflow-y: auto;\r\n}\r\n\r\n.scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n  border-radius: 10px;\r\n}\r\n\r\n.scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #ccc;\r\n}\r\n.sticky-header[_ngcontent-%COMP%]{\r\n  margin-top: 0px;\r\n  z-index: 14;\r\n  position: sticky;\r\n  top: 0px;\r\n  font-size: 18px;\r\n}\r\n.desc-msg[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n}\r\n.desc-msg[_ngcontent-%COMP%]{\r\n  padding: 6px 7px;\r\n}\r\n.custom-link[_ngcontent-%COMP%] {\r\n  color: navy;\r\n  text-decoration: underline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQztBQUNqQztJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLHlDQUF5QztNQUN2Qyx5QkFBeUI7TUFDekIsbUJBQW1CO01BQ25CLHlCQUF5QjtNQUN6QixnQkFBZ0I7TUFDaEIsZUFBZTtFQUNuQjtBQUNBO01BQ0ksV0FBVztNQUNYLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsV0FBVztNQUNYLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLGlCQUFpQjtFQUNyQjtBQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEI7dUNBQ21DO0VBQ3JDO0FBRUE7SUFDRSw2QkFBNkI7RUFDL0I7QUFDQTtJQUNFO0VBQ0Y7QUFFQSxnQ0FBZ0M7QUFDaEM7O0tBRUc7QUFFSDtJQUNFLFdBQVc7RUFDYjtBQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBLHFDQUFxQztBQUV2QztJQUNJLDJCQUEyQjtJQUMzQixnREFBZ0Q7SUFDaEQsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtFQUNaO0FBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFFQTtJQUNFLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsUUFBUTtJQUNSLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCw4QkFBOEI7RUFDaEM7QUFFQTtJQUNFLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixNQUFNO0lBQ04sVUFBVTtFQUNaO0FBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztFQUNYO0FBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsK0JBQStCO0lBQy9CLHFCQUFxQjs7RUFFdkI7QUFDQTs7R0FFQztBQUNEO0lBQ0UsMENBQTBDO0FBQzlDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGdCQUFnQjtJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsK0JBQStCO0FBQ25DO0FBQ0E7O0dBRUc7QUFDSDtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7O0FBRWhCO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsY0FBYztBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0lBQ2hCO0FBQ0o7QUFDQTtFQUNFLGtCQUFrQjtJQUNoQjtBQUNKO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5Qjs7QUFFN0I7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBOzs7OztHQUtHO0FBQ0g7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0NBQWtDO0FBQ3BDO0FBQ0E7O0dBRUc7QUFDSDtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0VBQ1QsYUFBYTtFQUNiLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsT0FBTztBQUNUO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qiw2Q0FBNkM7RUFDN0Msc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsY0FBYztBQUNoQjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsTUFBTTtBQUNSO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjs7QUFFdkI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLGdCQUFnQjtBQUNsQjtBQUVBLFVBQVU7QUFFVjtFQUNFLFVBQVU7QUFDWjtBQUVBLFVBQVU7QUFFVjtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBLFdBQVc7QUFFWDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFFQSxvQkFBb0I7QUFFcEI7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBRVgsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUIiLCJmaWxlIjoicHJvamVjdC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBOZXcgZGVzaWduIENTUyAgZnJvbSBIZXJlLi4uICovXHJcbi5uYW1lLWJveHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYW1lcy1yZXNwb25zZXtcclxuICAgIGRpc3BsYXkgOmlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYW1lcy1yZXNwb25zZSBzcGFuOmZpcnN0LWNoaWxke1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICAubmFtZXMtcmVzcG9uc2Ugc3BhbjpsYXN0LWNoaWxke1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWQtYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OCwgMTAzLCAyMjEsIDAuMSk7XHJcbiAgICAgIHBhZGRpbmc6IDNweCAxMHB4IDNweCA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmhlYWQtYnRuIGl7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM1ODY3ZGQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIH1cclxuICBcclxuICAuZGV2aWRlcntcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICAucHJpY2V2YWx1ZXMge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC8qIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTsgKi9cclxuICB9XHJcbiAgXHJcbiAgLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgxKSwgLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgyKSAge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgfVxyXG4gIC50b3AtYm9yZGVyIC5wcmljZXZhbHVlczpudGgtY2hpbGQoMyksIC50b3AtYm9yZGVyIC5wcmljZXZhbHVlczpudGgtY2hpbGQoNCkgIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmVcclxuICB9XHJcbiAgXHJcbiAgLyogLnByaWNldmFsdWVzOm50aC1jaGlsZCgyKSwgICovXHJcbiAgLyogLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIC53LTYwe1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kbXMtbGlua3N7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbiAgfVxyXG4gIFxyXG4gIC5kbXMtbGlua3MgbGkgYXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICAucHktMTBweHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1pdGVtOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZTA7XHJcbiAgfVxyXG5cclxuICAvKiA9PT09PT09PT0gUHJvZ3Jlc3MgQmFyID09PT09PT09PSAqL1xyXG5cclxuLnByb2dyZXNzX2JhciAucHJvLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDk3JSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggaHNsYSgwLCAwJSwgMCUsIDAuMSkgaW5zZXQ7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4OyAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfYmFyX3RpdGxlIHtcclxuICAgIGNvbG9yOiBoc2woMjE4LCA0JSwgNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0yOHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfbnVtYmVyIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2dyZXNzX2JhciAucHJvZ3Jlc3MtYmFyLWlubmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgODglKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMXMgbGluZWFyIDBzO1xyXG4gIH1cclxuICBcclxuICAucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDFweDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ncmVzc19iYXIgLnByb2dyZXNzLWJhci1pbm5lcjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC00cHg7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZy10b2RheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQyYmYwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5NX2ZzaXple1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gIH1cclxuICAuYmFkZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNTYyNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIC5wb3J0X2xpc3R7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNmZhOyAqL1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG5cclxuICB9XHJcbiAgLyogLnBvcnRfbGlzdC5ib3JkZXItYm90dG9tOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2IWltcG9ydGFudDtcclxufSAqL1xyXG4gIC5ib3JkZXItYm90dG9tIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2IWltcG9ydGFudDtcclxufVxyXG4uc2hvdzEge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNob3c6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaXRlbS1iIGRpdjpudGgtY2hpbGQobis0KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi50ci05e1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuLm5vLWFmdGVyOjphZnRlcntcclxuICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhvbGQtZHJvcHtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuLmJyLWN1cyB7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcbi5jYXJkLWl0bTF7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmVkZjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxcHggIzAwMDAwMDI2O1xyXG59XHJcbi8qIC5kYXRlLWVkdHtcclxuICB3aWR0aDogNTAwcHg7XHJcbn0gKi9cclxuLmJsYWNrX292ZXJsYXl7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwJTtcclxuICBsZWZ0OiAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMzIpO1xyXG4gIHotaW5kZXg6IDkwO1xyXG4gIC1tb3otb3BhY2l0eTogLjg7XHJcbiAgb3BhY2l0eTogLjg7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTgwKTtcclxufVxyXG4uY29tbWVudC1saXN0e1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xyXG59XHJcbi5jb210LXRleHR7XHJcbiAgLyogY29sb3I6ICMxNDE3MWE7ICovXHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAvKiBtYXJnaW4tdG9wOiAycHg7ICovXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5ibHcgLmR0IHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG4uY29tdC1pbmZvIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjNDk0ZjU0O1xyXG4gIGNvbG9yOiAjNTk1ZDZlO1xyXG5cclxufVxyXG4ucHJ2LWNtdHN7XHJcbiBtYXgtaGVpZ2h0OiAyMDBweDtcclxuIG92ZXJmbG93OiBhdXRvOyBcclxufVxyXG4uczF7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY29sbGFwc2VkIC5jMXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jb2xsYXBzZWQgLnMxe1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4uY29sbGFwc2VkIC5mYS1jaGV2cm9uLXVwOmJlZm9yZSwgLmR3bi1hcncgLmZhLWNoZXZyb24tdXA6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZjA3OFwiO1xyXG59XHJcbi5hY3Rpb24tY29udGVudCBoNntcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5kYXRlLWRyb3AxLCAuZGF0ZS1kcm9wMiwgLmRhdGUtZHJvcDMge1xyXG4gIHdpZHRoOiAzNTBweDtcclxufVxyXG46Om5nLWRlZXAgLmlucHV0LWdyb3VwLWFwcGVuZCAubWF0LWljb24tYnV0dG9uIHtcclxuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxufVxyXG4uZGF0ZS1kcm9wMXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMjI2cHg7XHJcbn1cclxuLmRhdGUtZHJvcDJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTI0N3B4XHJcbn1cclxuLmRhdGUtZHJvcDN7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTE2OXB4XHJcbn1cclxuLnctNDUge1xyXG4gIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcclxufVxyXG4udy01NSB7XHJcbiAgd2lkdGg6IDU1JSAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubm8tZWxsaXAgc3Bhbi5uZy1vcHRpb24tbGFiZWwge1xyXG4gICAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xyXG5cclxufVxyXG4uZml4ZWQtYnRuIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcbi8qIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSNpbmhpZGV7XHJcbm9wYWNpdHk6IDA7XHJcbndpZHRoOiAxMDAlO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmxlZnQ6IDA7XHJcbn0gKi9cclxuLnNwYWNlci10YWIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzMiAyMzQgMjM3KTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA0NTBweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogLTFweCAycHggMjBweCAjMDA0NzhhMjE7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSk7XHJcbn1cclxuLyogaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiAuc3BhY2VyLXRhYntcclxuZGlzcGxheTogYmxvY2s7ICAgIFxyXG59ICovXHJcbi5zcGFjZXItLWJvZHkge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG46Om5nLWRlZXAgLmlucHV0LWdyb3VwLWFwcGVuZCAubWF0LWljb24tYnV0dG9uIHtcclxuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxufVxyXG4jc2lkZWJhci1vdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCA1OCwgNzAsIC4yKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgei1pbmRleDogOTk4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5sZWZ0LXd7XHJcbiAgbWluLXdpZHRoOiAxMDVweDtcclxufVxyXG4uY210cy1pdGVtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlN2U4O1xyXG59XHJcbi5jbXRzLXN2ZyBzdmcge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBmaWxsOiAjOGQ5NWE1O1xyXG59XHJcbi5hcHByLWNvbXRzIGg2IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZmxleDogMTtcclxufVxyXG4uZXhzLWNtdHMge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6ICM0YjQzNDM7XHJcbn1cclxuLmV4cy1jbXRzIC5jcmQtYmR5eyAgXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbn1cclxuLmNtdHMtaXRlbXM6aG92ZXIgLmNtdHMtc3ZnIHN2ZyB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIGZpbGw6ICMyNzg2ZmI7XHJcbn1cclxuLmNtdHMtc3ZnIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNhcmQtY2Fye1xyXG4gIGNvbG9yOiAjNTk1ZDZlO1xyXG59XHJcbi5jYXJkLWNhciBoNXtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uY2FyZC1jYXIgLmg1IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBjb2xvcjogIzU5NWQ2ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5kZXRhaWwtaWNuIHN2Zy5kYXRlcntcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbn1cclxuLm9mZmNhbnZhcy1oZWFkZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMCAyNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlZGYyO1xyXG59XHJcbi5zdWJ0YXNrLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWRmMjtcclxuICBib3gtc2hhZG93OiAwIDAuNzVyZW0gNnJlbSByZ2IoNTYgNjUgNzQgLyAzJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjNTk1ZDZlO1xyXG59XHJcblxyXG4uY29sbGFwc2VkICBzcGFuLnNob3d2e1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNvbGxhcHNlZCAuc2hvd3Z7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuLnNob3d2e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jb2xsYXBzZWQgLmZsZXgtaGR2e1xyXG4gIGZsZXg6IHVuc2V0O1xyXG59XHJcbi5mbGV4LWhkdntcclxuICBmbGV4OjE7XHJcbn1cclxuLm1sLS0yIHtcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn1cclxuLmNvbGxhcHNlZCAuc3dhcC12aWV3e1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbn1cclxuLnN3YXAtdmlld3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jb2xsYXBzZWQgLnN3YXAtbGVzc3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zY3JvbGxiYXIxIHtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTc4cHgpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4uc2Nyb2xsYmFyMSB7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEzOHB4KTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4vKiB3aWR0aCAqL1xyXG5cclxuLnNjcm9sbGJhcjE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNnB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG5cclxuLnNjcm9sbGJhcjE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuXHJcbi5zY3JvbGxiYXIxOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuXHJcbi5zY3JvbGxiYXIxOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG4uc3RpY2t5LWhlYWRlcntcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgei1pbmRleDogMTQ7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uZGVzYy1tc2cgaDYge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4uZGVzYy1tc2d7XHJcbiAgcGFkZGluZzogNnB4IDdweDtcclxufVxyXG5cclxuLmN1c3RvbS1saW5rIHtcclxuICBjb2xvcjogbmF2eTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufSJdfQ== */"] });


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
//# sourceMappingURL=default-src_app__LayoutDashboard_project-info_project-info_module_ts.js.map