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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_Services/link.service */ 33529);
/* harmony import */ var src_app_Services_approvals_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_Services/approvals.service */ 18810);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ 77585);
/* harmony import */ var _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../projects-summary/projects-summary.component */ 80880);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_Services_parameter_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/_Services/parameter.service */ 95636);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _focus_on_click_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./focus-on-click.directive */ 44926);

//import { CalendarOptions } from '@fullcalendar/angular';
























function ProjectInfoComponent_div_59_span_15_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_span_15_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r24.OnEditProject(ctx_r24.Pid, ctx_r24._ProjectName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "EidtBtn_single", ctx_r2.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx_r2.Editbutton);
} }
function ProjectInfoComponent_div_59_span_27_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_span_27_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r26.OnEditProject_Desc(ctx_r26.Pid, ctx_r26.Proj_Desc)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "EidtBtn_single", ctx_r3.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx_r3.Editbutton);
} }
function ProjectInfoComponent_div_59_div_36_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, " Project Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_59_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 89)(1, "div", 25)(2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ProjectInfoComponent_div_59_div_36_button_3_Template, 3, 0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r4.requestType != "Project Forward");
} }
function ProjectInfoComponent_div_59_div_37_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 134)(1, "div", 15)(2, "div")(3, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 135)(6, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 137)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r29.initials1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r29.Submitted_By);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r29.requestComments);
} }
function ProjectInfoComponent_div_59_div_37_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 51)(1, "div", 25)(2, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "svg", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "path", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 103)(6, "h6", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Request Deadline");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "h6", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](10, 1, ctx_r30.requestDeadline, "dd-MM-yyyy"));
} }
function ProjectInfoComponent_div_59_div_37_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 139)(1, "div", 15)(2, "div")(3, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 135)(6, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 140)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 141)(12, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r38.Initial);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r38.Submitted_By);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r38.Req_Coments);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r38.Request_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](16, 5, item_r38.Req_date, "dd-MM-yyyy"));
} }
function ProjectInfoComponent_div_59_div_37_div_51_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_37_div_51_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r39.typeChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "label", 144)(2, "input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_div_37_div_51_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r41.selectedType = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Conditional Accept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r32.selectedType);
} }
function ProjectInfoComponent_div_59_div_37_div_58_ng_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ng-option", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", item_r46.TypeID);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r46.RejectType, " ");
} }
function ProjectInfoComponent_div_59_div_37_div_58_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r44.rejDesc);
} }
function ProjectInfoComponent_div_59_div_37_div_58_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Please select Reject type!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_59_div_37_div_58_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_37_div_58_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r47.clickonselect()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Reject Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ng-select", 147, 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_div_37_div_58_Template_ng_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r49.rejectType = $event); })("click", function ProjectInfoComponent_div_59_div_37_div_58_Template_ng_select_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r48); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r50.rejectApproval()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, ProjectInfoComponent_div_59_div_37_div_58_ng_option_7_Template, 2, 2, "ng-option", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, ProjectInfoComponent_div_59_div_37_div_58_span_8_Template, 2, 1, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, ProjectInfoComponent_div_59_div_37_div_58_span_9_Template, 2, 0, "span", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r33.rejectType);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r33.reject_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r33.rejectType != 1 && ctx_r33.rejectType);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r33.noRejectType == true);
} }
function ProjectInfoComponent_div_59_div_37_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 154)(1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Enter Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "textarea", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_div_37_div_59_Template_textarea_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r51.comments = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r34.comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r34.commentSelected);
} }
function ProjectInfoComponent_div_59_div_37_div_61_ng_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ng-option", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", item_r55.Req_Coments);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r55.Req_Coments, " ");
} }
function ProjectInfoComponent_div_59_div_37_div_61_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_37_div_61_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r56.clickonselect()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Select From Existing Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "ng-select", 156, 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_div_37_div_61_Template_ng_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r58.commentSelected = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, ProjectInfoComponent_div_59_div_37_div_61_ng_option_5_Template, 2, 2, "ng-option", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r35.commentSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r35.comments_list);
} }
function ProjectInfoComponent_div_59_div_37_div_62_ng_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ng-option", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", item_r61.Req_Coments);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 2, item_r61.Req_Coments), " ");
} }
function ProjectInfoComponent_div_59_div_37_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_37_div_62_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r62.clickonselect()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Select From Existing Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "ng-select", 157, 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_div_37_div_62_Template_ng_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r63); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r64.commentSelected = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, ProjectInfoComponent_div_59_div_37_div_62_ng_option_5_Template, 3, 4, "ng-option", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r36.commentSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r36.rejectcommentsList);
} }
function ProjectInfoComponent_div_59_div_37_div_63_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 158)(1, "button", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_37_div_63_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r65.submitApproval()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_37_div_63_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r66); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r67.resetApproval()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !ctx_r37.comments || !ctx_r37.selectedType);
} }
function ProjectInfoComponent_div_59_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 93)(1, "div", 94)(2, "div", 15)(3, "div", 95)(4, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, ProjectInfoComponent_div_59_div_37_div_5_Template, 11, 3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 98)(7, "div", 99)(8, "div", 51)(9, "div", 25)(10, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "svg", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "path", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 103)(14, "h6", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, "Request Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "h6", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 51)(20, "div", 25)(21, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "svg", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](23, "path", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "div", 103)(25, "h6", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, "Request Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "h6", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](29, ProjectInfoComponent_div_59_div_37_div_29_Template, 11, 4, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31, " View Previous Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](33, ProjectInfoComponent_div_59_div_37_div_33_Template, 17, 8, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "div", 113)(35, "div", 25)(36, "div", 114)(37, "div", 115)(38, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, "Project Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](42, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "div", 119)(44, "div", 120)(45, "div", 121)(46, "div")(47, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_37_Template_div_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r68.typeChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "label", 123)(49, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_div_37_Template_input_ngModelChange_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r69); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r70.selectedType = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](50, "Accept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](51, ProjectInfoComponent_div_59_div_37_div_51_Template, 4, 1, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](52, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_37_Template_div_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r69); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r71.typeChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "label", 126)(54, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_div_37_Template_input_ngModelChange_54_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r69); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r72.selectedType = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](55, "Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "div", 128)(57, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](58, ProjectInfoComponent_div_59_div_37_div_58_Template, 10, 4, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](59, ProjectInfoComponent_div_59_div_37_div_59_Template, 7, 2, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](60, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](61, ProjectInfoComponent_div_59_div_37_div_61_Template, 6, 2, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](62, ProjectInfoComponent_div_59_div_37_div_62_Template, 6, 2, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](63, ProjectInfoComponent_div_59_div_37_div_63_Template, 5, 1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r5.requestComments != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](18, 13, ctx_r5.requestDate, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r5.requestType);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r5.prviousCommentsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r5.selectedType);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r5.requestType == "New Project" || ctx_r5.requestType == "Project Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r5.selectedType);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r5.selectedType == "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r5.selectedType == "3" || ctx_r5.selectedType == "1" || ctx_r5.selectedType == "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r5.selectedType == "1" || ctx_r5.selectedType == "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r5.selectedType == "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r5.selectedType == "3" || ctx_r5.selectedType == "1" || ctx_r5.selectedType == "2");
} }
function ProjectInfoComponent_div_59_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 49)(1, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Submission Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 53)(6, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r1.SubmissionType1);
} }
function ProjectInfoComponent_div_59_ng_template_55_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 165)(1, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_55_div_4_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r81.onEditDeadline(ctx_r81.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 167)(4, "ul", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_55_div_4_Template_ul_click_4_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "li", 169)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Deadline Extend");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 170)(10, "div", 171)(11, "div", 154)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, "Select Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 173)(17, "input", 174, 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_55_div_4_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r82); const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](22); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](_r80.open()); })("keydown.enter", function ProjectInfoComponent_div_59_ng_template_55_div_4_Template_input_keydown_enter_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r82); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r85.onProject_ExtendDeadline(ctx_r85.Pid, ctx_r85._MasterCode)); })("ngModelChange", function ProjectInfoComponent_div_59_ng_template_55_div_4_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r82); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r86._ProjDeadline = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](20, "mat-datepicker-toggle", 177)(21, "mat-datepicker", 154, 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "div", 179)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "textarea", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_ng_template_55_div_4_Template_textarea_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r82); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r87.extend_remarks = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](29, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "div", 181)(31, "button", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_55_div_4_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r82); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r88.onProject_ExtendDeadline(ctx_r88.Pid, ctx_r88._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "button", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_55_div_4_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r82); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r89.onCancel(ctx_r89.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](22);
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "DeadlineArea_", ctx_r75.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "Deadlinetext_", ctx_r75.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("matDatepicker", _r80)("min", ctx_r75.EndDate1)("ngModel", ctx_r75._ProjDeadline);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("for", _r80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r75.extend_remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !ctx_r75._ProjDeadline || !ctx_r75.extend_remarks);
} }
function ProjectInfoComponent_div_59_ng_template_55_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 165)(1, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_55_div_5_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r92.onHoldClick(ctx_r92.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 186)(4, "ul", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_55_div_5_Template_ul_click_4_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "li", 169)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 170)(10, "div", 171)(11, "div", 187)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, "Select Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 188)(17, "input", 189, 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_55_div_5_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r93); const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](22); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](_r91.open()); })("keydown.enter", function ProjectInfoComponent_div_59_ng_template_55_div_5_Template_input_keydown_enter_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r93); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r96.onProject_Hold(ctx_r96.Pid, ctx_r96._MasterCode)); })("ngModelChange", function ProjectInfoComponent_div_59_ng_template_55_div_5_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r93); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r97.Holddate = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](20, "mat-datepicker-toggle", 177)(21, "mat-datepicker", 154, 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "div", 179)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "textarea", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_ng_template_55_div_5_Template_textarea_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r93); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r98.hold_remarks = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](29, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "div", 181)(31, "button", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_55_div_5_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r93); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r99.onProject_Hold(ctx_r99.Pid, ctx_r99._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "button", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_ng_template_55_div_5_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r93); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r100.onCancel(ctx_r100.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](22);
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "HoldArea_", ctx_r76.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "Holdtext_", ctx_r76.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("matDatepicker", _r91)("min", ctx_r76.minhold)("max", ctx_r76.maxhold)("ngModel", ctx_r76.Holddate);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("for", _r91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r76.hold_remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !ctx_r76.Holddate || !ctx_r76.hold_remarks);
} }
function ProjectInfoComponent_div_59_ng_template_55_h5_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](2, 1, item_r1.DeadLine, "dd-MM-yyyy"));
} }
function ProjectInfoComponent_div_59_ng_template_55_h5_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "h5", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Extended Deadline ", ctx_r78.deadlineCount, " times!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](2, 2, item_r1.DeadLine, "dd-MM-yyyy"));
} }
function ProjectInfoComponent_div_59_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 49)(1, "div", 161)(2, "p", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ProjectInfoComponent_div_59_ng_template_55_div_4_Template, 35, 8, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, ProjectInfoComponent_div_59_ng_template_55_div_5_Template, 35, 9, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, ProjectInfoComponent_div_59_ng_template_55_h5_9_Template, 3, 4, "h5", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, ProjectInfoComponent_div_59_ng_template_55_h5_10_Template, 3, 5, "h5", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx_r8.Current_user_ID == item_r1.OwnerEmpNo || ctx_r8.Current_user_ID == item_r1.Responsible || ctx_r8.Current_user_ID == item_r1.Authority) && (item_r1.Status != "Completed" && item_r1.Status != "Project Hold" && item_r1.Status != "Completion Under Approval" && item_r1.Status != "Deadline Extend Under Approval" && item_r1.Status != "Enactive Under Approval" && item_r1.Status != "Forward Under Approval" && item_r1.Status != "Project Hold Under Approval" && item_r1.Status != "Under Approval" && item_r1.Status != "New Project Rejected" && item_r1.Status != "Project Complete Rejected" && item_r1.Status != "ToDo Achieved" && item_r1.Status != "ToDo Completed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx_r8.Current_user_ID == item_r1.OwnerEmpNo || ctx_r8.Current_user_ID == item_r1.Responsible || ctx_r8.Current_user_ID == item_r1.Authority) && (item_r1.Status != "Project Hold" && item_r1.Status != "Completed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r8.deadlineCount == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r8.deadlineCount > 0);
} }
function ProjectInfoComponent_div_59_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 49)(1, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 53)(6, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r9.Difference_In_Days, " days");
} }
function ProjectInfoComponent_div_59_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 49)(1, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 53)(6, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Continuous");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
} }
function ProjectInfoComponent_div_59_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 49)(1, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Allocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 53)(6, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r1.Duration, " Hrs ");
} }
function ProjectInfoComponent_div_59_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 194)(1, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Allocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 53)(6, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r1.StandardDuration, " ");
} }
function ProjectInfoComponent_div_59_div_71_h5_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "h5", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "", item_r1.Delaydays, " Days Delay!");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r106._MainProjectStatus);
} }
function ProjectInfoComponent_div_59_div_71_h5_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "h5", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r107._MainProjectStatus);
} }
function ProjectInfoComponent_div_59_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 49)(1, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, ProjectInfoComponent_div_59_div_71_h5_6_Template, 2, 2, "h5", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, ProjectInfoComponent_div_59_div_71_h5_7_Template, 2, 1, "h5", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Delaydays > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Delayday <= 0);
} }
function ProjectInfoComponent_div_59_ng_template_72_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r1.Status);
} }
function ProjectInfoComponent_div_59_ng_template_72_div_7_h5_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "h5", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "", item_r1.Delaydays, " Days Delay!");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_div_7_h5_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "h5", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProjectInfoComponent_div_59_ng_template_72_div_7_h5_1_Template, 2, 2, "h5", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, ProjectInfoComponent_div_59_ng_template_72_div_7_h5_2_Template, 2, 1, "h5", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Delaydays > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Delayday <= 0);
} }
function ProjectInfoComponent_div_59_ng_template_72_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r1.Status);
} }
function ProjectInfoComponent_div_59_ng_template_72_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", " Hold till ", ctx_r117.proj_holddate, " !!");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r1.Status);
} }
function ProjectInfoComponent_div_59_ng_template_72_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r1.Status, " ");
} }
function ProjectInfoComponent_div_59_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 49)(1, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, ProjectInfoComponent_div_59_ng_template_72_div_6_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, ProjectInfoComponent_div_59_ng_template_72_div_7_Template, 3, 2, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, ProjectInfoComponent_div_59_ng_template_72_div_8_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, ProjectInfoComponent_div_59_ng_template_72_div_9_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, ProjectInfoComponent_div_59_ng_template_72_div_10_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, ProjectInfoComponent_div_59_ng_template_72_div_11_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, ProjectInfoComponent_div_59_ng_template_72_div_12_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, ProjectInfoComponent_div_59_ng_template_72_div_13_Template, 3, 2, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, ProjectInfoComponent_div_59_ng_template_72_div_14_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, ProjectInfoComponent_div_59_ng_template_72_div_15_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](16, ProjectInfoComponent_div_59_ng_template_72_div_16_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](17, ProjectInfoComponent_div_59_ng_template_72_div_17_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, ProjectInfoComponent_div_59_ng_template_72_div_18_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, ProjectInfoComponent_div_59_ng_template_72_div_19_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](20, ProjectInfoComponent_div_59_ng_template_72_div_20_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](21, ProjectInfoComponent_div_59_ng_template_72_div_21_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](22, ProjectInfoComponent_div_59_ng_template_72_div_22_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](23, ProjectInfoComponent_div_59_ng_template_72_div_23_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](24, ProjectInfoComponent_div_59_ng_template_72_div_24_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, ProjectInfoComponent_div_59_ng_template_72_div_25_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](26, ProjectInfoComponent_div_59_ng_template_72_div_26_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "ToDo InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "Project Hold" && !ctx_r15.proj_holddate);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "Project Hold" && ctx_r15.proj_holddate);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "ToDo Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "New Todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "Completion Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "Forward Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "Project Complete Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "Enactive Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "Version");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "Project Holded");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "Project Hold Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "ToDo Achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status == "Standardtask Enactive Hold");
} }
function ProjectInfoComponent_div_59_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 49)(1, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 53)(6, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r1.ReportType, " ");
} }
const _c0 = function (a0) { return { width: a0 }; };
function ProjectInfoComponent_div_59_div_84_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 208)(2, "small", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "span", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r158.ProjectStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r158.ProjectPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](3, _c0, ctx_r158.ProjectPercentage));
} }
function ProjectInfoComponent_div_59_div_84_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 208)(2, "small", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "span", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r159.ProjectStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r159.ProjectPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](3, _c0, ctx_r159.ProjectPercentage));
} }
function ProjectInfoComponent_div_59_div_84_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 208)(2, "small", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r160.ProjectStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r160.ProjectPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](3, _c0, ctx_r160.ProjectPercentage));
} }
function ProjectInfoComponent_div_59_div_84_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 208)(2, "small", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r161.ProjectStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r161.ProjectPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](3, _c0, ctx_r161.ProjectPercentage));
} }
function ProjectInfoComponent_div_59_div_84_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 208)(2, "small", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r162.ProjectStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r162.ProjectPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](3, _c0, ctx_r162.ProjectPercentage));
} }
function ProjectInfoComponent_div_59_div_84_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 208)(2, "small", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " Just Started ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r163.ProjectPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](2, _c0, ctx_r163.ProjectPercentage));
} }
function ProjectInfoComponent_div_59_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 23)(1, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, ProjectInfoComponent_div_59_div_84_div_2_Template, 7, 5, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ProjectInfoComponent_div_59_div_84_div_3_Template, 7, 5, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ProjectInfoComponent_div_59_div_84_div_4_Template, 7, 5, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, ProjectInfoComponent_div_59_div_84_div_5_Template, 7, 5, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, ProjectInfoComponent_div_59_div_84_div_6_Template, 7, 5, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, ProjectInfoComponent_div_59_div_84_div_7_Template, 7, 4, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r17.ProjectStatus == "Not Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r17.ProjectStatus == "Just Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r17.ProjectStatus == "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r17.ProjectStatus == "UnderCompletion");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r17.ProjectStatus == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r17.ProjectStatus == "ProjDuration0");
} }
function ProjectInfoComponent_div_59_div_96_ng_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ng-option", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r168 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", item_r168.Emp_No);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r168.DisplayName, " ");
} }
function ProjectInfoComponent_div_59_div_96_Template(rf, ctx) { if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 165)(1, "button", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_96_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r170); const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r169.onTransferClick(ctx_r169.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 219)(6, "ul", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_96_Template_ul_click_6_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "li", 169)(8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "Project Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 170)(12, "div", 171)(13, "div", 154)(14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, " Transfer To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "ng-select", 220, 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("Change", function ProjectInfoComponent_div_59_div_96_Template_ng_select_Change_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r170); const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r172.EmployeeOnSelect($event)); })("ngModelChange", function ProjectInfoComponent_div_59_div_96_Template_ng_select_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r170); const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r173.selectedEmpNo = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](22, ProjectInfoComponent_div_59_div_96_ng_option_22_Template, 2, 2, "ng-option", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "div", 187)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25, "Select New Deadline");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 188)(29, "input", 222, 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_96_Template_input_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r170); const _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](34); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](_r167.open()); })("ngModelChange", function ProjectInfoComponent_div_59_div_96_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r170); const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r175.TransDate = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](32, "mat-datepicker-toggle", 177)(33, "mat-datepicker", 154, 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "div", 154)(36, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "textarea", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_div_96_Template_textarea_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r170); const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r176.transfer_remarks = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "div", 181)(42, "button", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_96_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r170); const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r177.underDev()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "button", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_96_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r170); const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r178.onCancel(ctx_r178.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](45, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](34);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "TransferArea_", ctx_r18.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r18.selectedEmpNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r18.Employee_List);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "Transtext_", ctx_r18.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("matDatepicker", _r167)("min", ctx_r18.minhold)("max", ctx_r18.maxhold)("ngModel", ctx_r18.TransDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("for", _r167);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r18.transfer_remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !ctx_r18.selectedEmpNo || !ctx_r18.TransDate || !ctx_r18.transfer_remarks);
} }
function ProjectInfoComponent_div_59_tr_162_Template(rf, ctx) { if (rf & 1) {
    const _r182 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr")(1, "td", 225)(2, "a", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_tr_162_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r182); const itemMemos_r179 = restoredCtx.$implicit; const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r181.openUrl(itemMemos_r179.Url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "td", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_tr_162_Template_td_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r182); const itemMemos_r179 = restoredCtx.$implicit; const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r183.deleteMemos(itemMemos_r179.MailId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "i", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const itemMemos_r179 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", itemMemos_r179.Subject, "");
} }
function ProjectInfoComponent_div_59_tr_180_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_tr_180_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r190); const tezz_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit; const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r188.OnPortfolioClick(tezz_r184.Portfolio_ID, tezz_r184.Portfolio_Name, tezz_r184.Created_By)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tezz_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](tezz_r184.Portfolio_Name);
} }
function ProjectInfoComponent_div_59_tr_180_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "i", 228);
} }
function ProjectInfoComponent_div_59_tr_180_Template(rf, ctx) { if (rf & 1) {
    const _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr")(1, "td", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, ProjectInfoComponent_div_59_tr_180_a_2_Template, 2, 1, "a", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "td", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_tr_180_Template_td_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r193); const tezz_r184 = restoredCtx.$implicit; const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r192.DeleteProject(ctx_r192.Pid, tezz_r184.Portfolio_ID, ctx_r192._MasterCode, ctx_r192._ProjectName, tezz_r184.Created_By)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ProjectInfoComponent_div_59_tr_180_i_4_Template, 1, 0, "i", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tezz_r184 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", tezz_r184.Portfolio_Name != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", tezz_r184.Portfolio_Name != "");
} }
function ProjectInfoComponent_div_59_div_183_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_div_35_h5_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "h5", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_div_35_h5_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "h5", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "", task_r194.Delaydays, " Days Delay!");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProjectInfoComponent_div_59_div_183_div_35_h5_1_Template, 2, 1, "h5", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, ProjectInfoComponent_div_59_div_183_div_35_h5_2_Template, 2, 2, "h5", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.Delayday == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.Delaydays > 0);
} }
function ProjectInfoComponent_div_59_div_183_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "h5", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", task_r194.SubProject_Status, "");
} }
function ProjectInfoComponent_div_59_div_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 63)(1, "div", 78)(2, "div", 25)(3, "div", 75)(4, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "i", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 232)(8, "h5", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 23)(11, "div", 48)(12, "div", 49)(13, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](16, "i", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 53)(18, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 49)(21, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, "Responsible");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](24, "i", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "div", 53)(26, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 49)(29, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](32, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](34, ProjectInfoComponent_div_59_div_183_div_34_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](35, ProjectInfoComponent_div_59_div_183_div_35_Template, 3, 2, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](36, ProjectInfoComponent_div_59_div_183_div_36_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](37, ProjectInfoComponent_div_59_div_183_div_37_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](38, ProjectInfoComponent_div_59_div_183_div_38_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](39, ProjectInfoComponent_div_59_div_183_div_39_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](40, ProjectInfoComponent_div_59_div_183_div_40_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](41, ProjectInfoComponent_div_59_div_183_div_41_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](42, ProjectInfoComponent_div_59_div_183_div_42_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](43, ProjectInfoComponent_div_59_div_183_div_43_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](44, ProjectInfoComponent_div_59_div_183_div_44_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](45, ProjectInfoComponent_div_59_div_183_div_45_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](46, ProjectInfoComponent_div_59_div_183_div_46_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](47, ProjectInfoComponent_div_59_div_183_div_47_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](48, ProjectInfoComponent_div_59_div_183_div_48_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](49, ProjectInfoComponent_div_59_div_183_div_49_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](50, ProjectInfoComponent_div_59_div_183_div_50_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](51, ProjectInfoComponent_div_59_div_183_div_51_Template, 3, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](52, "div", 48)(53, "div", 49)(54, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](55, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](57, "i", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "div", 53)(59, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](61, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](62, "div", 49)(63, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](64, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](66, "i", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](67, "div", 53)(68, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](70, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](71, "div", 49)(72, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](73, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](74, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](75, "i", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](76, "div", 53)(77, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](79, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const task_r194 = ctx.$implicit;
    const i_r195 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Action ", i_r195 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](task_r194.SubProject_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](task_r194.Subtask_Owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](task_r194.Subtask_Res);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.SubProject_Status == "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.SubProject_Status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.SubProject_Status == "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.SubProject_Status == "ToDo InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.SubProject_Status == "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.SubProject_Status == "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.SubProject_Status == "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.SubProject_Status == "ToDo Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.SubProject_Status == "New Todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.SubProject_Status == "Completion Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.SubProject_Status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.SubProject_Status == "Forward Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.SubProject_Status == "Project Complete Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.SubProject_Status == "Enactive Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.SubProject_Status == "Version");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.SubProject_Status == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.SubProject_Status == "Project Holded");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", task_r194.SubProject_Status == "Project Hold Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](61, 25, task_r194.StartDate, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](70, 28, task_r194.SubProject_DeadLine, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](79, 31, task_r194.Project_Cost, "SAR "));
} }
function ProjectInfoComponent_div_59_div_184_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 25)(1, "div", 242)(2, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "i", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 243)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 23)(9, "div", 48)(10, "div", 49)(11, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "i", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 53)(16, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "div", 49)(19, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20, "Responsible");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](22, "i", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "div", 53)(24, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "div", 49)(27, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](30, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "div", 53)(32, "h5", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "div", 48)(35, "div", 49)(36, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](39, "i", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 53)(41, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](43, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "div", 49)(45, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](46, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](48, "i", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "div", 53)(50, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](52, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "div", 49)(54, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](55, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](57, "i", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "div", 53)(59, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](61, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const task_r237 = ctx.$implicit;
    const i_r238 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Action ", i_r238 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](task_r237.SubProject_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](task_r237.Subtask_Owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](task_r237.Subtask_Res);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](43, 7, task_r237.StartDate, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](52, 10, task_r237.SubProject_DeadLine, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](61, 13, task_r237.Project_Cost, "SAR "));
} }
function ProjectInfoComponent_div_59_div_184_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 63)(1, "div", 239)(2, "div", 25)(3, "div", 75)(4, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "i", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, " Action's Done List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, ProjectInfoComponent_div_59_div_184_div_7_Template, 62, 16, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r22.CompletedList);
} }
function ProjectInfoComponent_div_59_div_185_div_7_div_60_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_59_div_185_div_7_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProjectInfoComponent_div_59_div_185_div_7_div_60_p_1_Template, 2, 0, "p", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "i", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 53)(5, "h6", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r240.FileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r240.FileName);
} }
function ProjectInfoComponent_div_59_div_185_div_7_div_61_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function ProjectInfoComponent_div_59_div_185_div_7_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProjectInfoComponent_div_59_div_185_div_7_div_61_p_1_Template, 2, 0, "p", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "i", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 53)(5, "h6", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r240.Remarks != "" && item_r240.Remarks != "null");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r240.Remarks);
} }
function ProjectInfoComponent_div_59_div_185_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 246)(1, "div", 242)(2, "div", 232)(3, "h5", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 23)(8, "div", 48)(9, "div", 49)(10, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "Assigned By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "i", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 53)(15, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 49)(18, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19, "Assigned Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](21, "i", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "div", 53)(23, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "div", 49)(27, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, "Assigned To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](30, "i", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "div", 53)(32, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "div", 49)(35, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](38, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](39, "div", 53)(40, "h5", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "div", 49)(43, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](44, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](46, "i", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "div", 53)(48, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](50, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "div", 49)(52, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](53, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](54, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](55, "i", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "div", 53)(57, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](59, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](60, ProjectInfoComponent_div_59_div_185_div_7_div_60_Template, 7, 2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](61, ProjectInfoComponent_div_59_div_185_div_7_div_61_Template, 7, 2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r240 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r240.Task_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r240.Task_Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r240.AssignedBy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](25, 10, item_r240.Creation_Date, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r240.AssignedTo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r240.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](50, 13, item_r240.Start_Date, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](59, 16, item_r240.End_Date, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r240.FileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r240.Remarks != "" && item_r240.Remarks != "null");
} }
function ProjectInfoComponent_div_59_div_185_Template(rf, ctx) { if (rf & 1) {
    const _r248 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 63)(1, "div", 239)(2, "div", 75)(3, "button", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_div_185_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r248); const ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r247.scrldwn()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Assigned Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, ProjectInfoComponent_div_59_div_185_div_7_Template, 62, 19, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r23.AssigntaskList);
} }
function ProjectInfoComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div")(8, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r250); const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r249.moreDetails()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "More Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 31)(12, "div", 32)(13, "h5", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, ProjectInfoComponent_div_59_span_15_Template, 2, 2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "span", 35)(17, "div", 15)(18, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r250); const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r251._modelProjectName = $event); })("keydown.enter", function ProjectInfoComponent_div_59_Template_input_keydown_enter_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r250); const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r252.OnProject_Rename(ctx_r252.Pid, ctx_r252._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 37)(20, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r250); const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r253.OnProject_Rename(ctx_r253.Pid, ctx_r253._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r250); const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r254.onCancel(ctx_r254.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "p")(25, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](27, ProjectInfoComponent_div_59_span_27_Template, 2, 2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "span", 42)(29, "div", 15)(30, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_div_59_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r250); const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r255._modelProjDesc = $event); })("keydown.enter", function ProjectInfoComponent_div_59_Template_input_keydown_enter_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r250); const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r256.OnProject_Rename(ctx_r256.Pid, ctx_r256._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "div", 37)(32, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r250); const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r257.OnProject_Rename(ctx_r257.Pid, ctx_r257._MasterCode)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r250); const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r258.onCancel(ctx_r258.Pid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](35, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](36, ProjectInfoComponent_div_59_div_36_Template, 4, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](37, ProjectInfoComponent_div_59_div_37_Template, 64, 16, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 45)(39, "div", 46)(40, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](41, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](42, "Project Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "div", 23)(44, "div", 48)(45, "div", 49)(46, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](47, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](49, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](50, "div", 53)(51, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](53, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](54, ProjectInfoComponent_div_59_div_54_Template, 8, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](55, ProjectInfoComponent_div_59_ng_template_55_Template, 11, 4, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](57, ProjectInfoComponent_div_59_div_57_Template, 8, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](58, ProjectInfoComponent_div_59_div_58_Template, 8, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](59, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](60, ProjectInfoComponent_div_59_div_60_Template, 8, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](61, ProjectInfoComponent_div_59_div_61_Template, 8, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](62, "div", 49)(63, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](64, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](66, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](67, "div", 53)(68, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](70, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](71, ProjectInfoComponent_div_59_div_71_Template, 8, 2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](72, ProjectInfoComponent_div_59_ng_template_72_Template, 27, 21, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](74, "div", 48)(75, "div", 49)(76, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](77, "Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](78, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](79, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](80, "div", 53)(81, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](83, ProjectInfoComponent_div_59_div_83_Template, 8, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](84, ProjectInfoComponent_div_59_div_84_Template, 8, 6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](85, "div", 63)(86, "div", 64)(87, "div", 65)(88, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](90, "div", 67)(91, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](92, "Responsible");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](93, "h5", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](95, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](96, ProjectInfoComponent_div_59_div_96_Template, 46, 11, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](97, "div")(98, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_Template_button_click_98_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r250); const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r259.bttn_RACI()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](99, "RACIS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](100, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](101, "div", 74)(102, "div", 23)(103, "div", 75)(104, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](105, "RACIS Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](106, "div", 48)(107, "div", 76)(108, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](109, "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](110, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](111, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](112, "div", 53)(113, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](115, "div", 76)(116, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](117, "Authority");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](118, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](119, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](120, "div", 53)(121, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](122);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](123, "div", 76)(124, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](125, "Coordinator");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](126, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](127, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](128, "div", 53)(129, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](130);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](131, "div", 76)(132, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](133, "Informer");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](134, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](135, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](136, "div", 53)(137, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](138);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](139, "div", 76)(140, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](141, "Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](142, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](143, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](144, "div", 53)(145, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](146);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](147, "div", 63)(148, "div", 78)(149, "div", 25)(150, "div", 79)(151, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](152, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](153, " DMS Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](154, "div")(155, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_Template_button_click_155_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r250); const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r260.AddDms()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](156, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](157, "Link DMS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](158, "div", 23)(159, "div", 80)(160, "table", 81)(161, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](162, ProjectInfoComponent_div_59_tr_162_Template, 6, 1, "tr", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](163, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](164);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](165, "div", 63)(166, "div", 78)(167, "div", 25)(168, "div", 75)(169, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](170, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](171, "Portfolio Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](172, "div")(173, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_div_59_Template_button_click_173_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r250); const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r261.AddPortfolio()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](174, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](175, "Link Portfolio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](176, "div", 23)(177, "div", 80)(178, "table", 81)(179, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](180, ProjectInfoComponent_div_59_tr_180_Template, 5, 2, "tr", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](181, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](182);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](183, ProjectInfoComponent_div_59_div_183_Template, 80, 34, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](184, ProjectInfoComponent_div_59_div_184_Template, 8, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](185, ProjectInfoComponent_div_59_div_185_Template, 8, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](56);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](73);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r1.Exec_BlockName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "pro_name_", ctx_r0.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r1.Project_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx_r0.Current_user_ID == item_r1.OwnerEmpNo || ctx_r0.Current_user_ID == item_r1.Responsible || ctx_r0.Current_user_ID == item_r1.Authority) && item_r1.Status != "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "spanTextbox_single", ctx_r0.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "textboxfocus_single", ctx_r0.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r0._modelProjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "Span_Desc_", ctx_r0.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r1.Project_Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx_r0.Current_user_ID == item_r1.OwnerEmpNo || ctx_r0.Current_user_ID == item_r1.Responsible || ctx_r0.Current_user_ID == item_r1.Authority) && item_r1.Status != "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "spanTextarea_single", ctx_r0.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("id", "textboxfocus_single", ctx_r0.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r0._modelProjDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.Current_user_ID == ctx_r0.approvalEmpId && item_r1.Status != "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.Current_user_ID == ctx_r0.approvalEmpId && ctx_r0.requestType != "Project Forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](53, 44, item_r1.DPG, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Exec_BlockName == "Standard Tasks")("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Exec_BlockName != "Standard Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Exec_BlockName == "Standard Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Exec_BlockName != "Standard Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Exec_BlockName == "Standard Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](70, 47, item_r1.Project_Cost, "SAR "));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0._MainProjectStatus == "Delay")("ngIfElse", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r1.Client_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.ReportType);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r1.Status != "Completion Under Approval" && item_r1.Status != "Completed" && item_r1.Exec_BlockName != "Standard Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r0.initials, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r0.Project_Responsible);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx_r0.Current_user_ID == item_r1.OwnerEmpNo || ctx_r0.Current_user_ID == item_r1.Responsible) && (item_r1.Status != "Completed" && item_r1.Status != "Project Hold" && item_r1.Status != "Completion Under Approval" && item_r1.Status != "Deadline Extend Under Approval" && item_r1.Status != "Enactive Under Approval" && item_r1.Status != "Forward Under Approval" && item_r1.Status != "Project Hold Under Approval" && item_r1.Status != "Under Approval" && item_r1.Status != "New Project Rejected" && item_r1.Status != "Project Complete Rejected" && item_r1.Status != "ToDo Achieved" && item_r1.Status != "ToDo Completed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx_r0._raciDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r1.Project_Owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r1.Team_Autho);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r1.Team_Coor);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r1.Team_Informer);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r1.Team_Support);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0._MemosSubjectList);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r0._MemosNotFound);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0._portfoliolist);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r0.noPort);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.Subtask_List);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.CompletedList != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.AssigntaskList != "");
} }
class ProjectInfoComponent {
    constructor(service, _LinkService, approvalservice, notifyService, router, BsService, _projectSummary, datepipe, dialog, ShareParameter_Service, route, elementRef) {
        this.service = service;
        this._LinkService = _LinkService;
        this.approvalservice = approvalservice;
        this.notifyService = notifyService;
        this.router = router;
        this.BsService = BsService;
        this._projectSummary = _projectSummary;
        this.datepipe = datepipe;
        this.dialog = dialog;
        this.ShareParameter_Service = ShareParameter_Service;
        this.route = route;
        this.elementRef = elementRef;
        this._LinkSideBar = true;
        this._LinkSideBar1 = true;
        this._openInfoSideBar = false;
        this.approvalObj = new src_app_Models_approval_dto__WEBPACK_IMPORTED_MODULE_5__.ApprovalDTO();
        this.EndDate1 = new Date();
        this.minhold = new Date();
        this.maxhold = new Date();
        this.dropdownSettings_Memo = {};
        this.dropdownSettings_Portfolio = {};
        this._raciDetails = true;
        this._modelProjAlloc = 0;
        this.noRejectType = false;
        //Transfer Project
        this.selectedEmpNo = null;
        this.objPortfolioDto = new src_app_Models_portfolio_dto__WEBPACK_IMPORTED_MODULE_3__.PortfolioDTO();
        this.objProjectDto = new src_app_Models_project_details_dto__WEBPACK_IMPORTED_MODULE_6__.ProjectDetailsDTO();
        this.BsService.bs_SummaryType.subscribe(t => {
            this.Summarytype = t;
        });
    }
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
                console.log(this.Employee_List, 'EMPList');
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
                this.EndDate1 = this.date2;
                this.Pid = this.ProjectInfo_List[0]['id'];
                this._MasterCode = this.ProjectInfo_List[0]['Project_Code'];
                this._ProjectName = this.ProjectInfo_List[0]['Project_Name'];
                this.Proj_Desc = this.ProjectInfo_List[0]['Project_Description'];
                this.Comp_No = this.ProjectInfo_List[0]['Emp_Comp_No'];
                this.EmpNo_Own = this.ProjectInfo_List[0]['Project_Owner'];
                this.EmpNo_Res = this.ProjectInfo_List[0]['Team_Res'];
                this.EmpNo_Autho = this.ProjectInfo_List[0]['Team_Autho'];
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
        if (this._Urlid == '1') {
            this.router.navigate(["/backend/ProjectsSummary/"]);
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
    OnProject_Rename(id, Pcode) {
        if (this._modelProjectName != "" && this._modelProjDesc != "") {
            this.service._ProjectRenameService(id, this._modelProjectName, this._modelProjDesc, this.Current_user_ID, this._modelProjAlloc).subscribe(data => {
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
    clickonselect() {
        this.comments = this.commentSelected;
    }
    typeChange() {
        this.comments = null;
        this.commentSelected = null;
        this.rejectType = null;
        this.noRejectType = false;
    }
    submitApproval() {
        if (this.selectedType == '1') {
            this.approvalObj.Emp_no = this.Current_user_ID;
            this.approvalObj.Project_Code = this.projectCode;
            this.approvalObj.Request_type = this.requestType;
            this.approvalObj.Remarks = this.comments;
            this.approvalservice.InsertAcceptApprovalService(this.approvalObj).
                subscribe((data) => {
                this._Message = (data['message']);
                this.notifyService.showSuccess("Project Approved Successfully", this._Message);
                this.fun_LoadProjectDetails();
                this.getapprovalStats();
                if (this._Urlid == '1') {
                    this.router.navigate(["/backend/ProjectsSummary/"]);
                    this._projectSummary.GetProjectsByUserName(this.Summarytype);
                }
            });
        }
        else if (this.selectedType == '2') {
            this.approvalObj.Emp_no = this.Current_user_ID;
            this.approvalObj.Project_Code = this.projectCode;
            this.approvalObj.Request_type = this.requestType;
            this.approvalObj.Remarks = this.comments;
            this.approvalservice.InsertConditionalAcceptApprovalService(this.approvalObj).
                subscribe((data) => {
                this._Message = (data['message']);
                this.notifyService.showSuccess("Project Approved Successfully", this._Message);
                this.fun_LoadProjectDetails();
                this.getapprovalStats();
                if (this._Urlid == '1') {
                    this.router.navigate(["/backend/ProjectsSummary/"]);
                    this._projectSummary.GetProjectsByUserName(this.Summarytype);
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
                    this.notifyService.showSuccess(this._Message, "Rejected Successfully");
                    this.fun_LoadProjectDetails();
                    this.getapprovalStats();
                    if (this._Urlid == '1') {
                        this.router.navigate(["/backend/ProjectsSummary/"]);
                        this._projectSummary.GetProjectsByUserName(this.Summarytype);
                    }
                });
            }
        }
        else if (this.selectedType == '4') {
            this.notifyService.showError("Not Approved - Development under maintainance", "Failed");
        }
        // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");  
        // document.getElementById("rightbar-overlay").style.display = "none";
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
                this.requestDate = (this.requestDetails[0]['Request_date']);
                this.requestDeadline = (this.requestDetails[0]['Request_deadline']);
                this.approvalEmpId = (this.requestDetails[0]['Emp_no']);
                this.requestComments = (this.requestDetails[0]['Remarks']);
                this.comments_list = JSON.parse(this.requestDetails[0]['comments_Json']);
                this.Submitted_By = (this.requestDetails[0]['Submitted_By']);
                this.reject_list = JSON.parse(this.requestDetails[0]['reject_list']);
                this.prviousCommentsList = JSON.parse(this.requestDetails[0]['previousComments_JSON']);
                const fullName = this.Submitted_By.split(' ');
                this.initials1 = fullName.shift().charAt(0) + fullName.pop().charAt(0);
                this.initials1 = this.initials1.toUpperCase();
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
        this.commentSelected = null;
        this.comments = "";
        this.noRejectType = false;
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
            this.objProjectDto.Project_EndDate = this._ProjDeadline;
            this.objProjectDto.Project_Code = Pcode;
            this.objProjectDto.Remarks = this.extend_remarks;
            this.service._ProjectDeadlineExtendService(this.objProjectDto).subscribe(data => {
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
    EmployeeOnSelect(obj) {
        this.selectedEmpNo = obj;
    }
    onTransferClick(id) {
        document.getElementById("TransferArea_" + id).classList.add("d-block");
        // document.getElementsByClassName("date-drop1")[0].classList.remove("d-block");
        // document.getElementsByClassName("date-drop2")[0].classList.remove("d-block");
        this.Editbutton = true;
        document.getElementById("Transtext_" + id).focus();
    }
}
ProjectInfoComponent.ɵfac = function ProjectInfoComponent_Factory(t) { return new (t || ProjectInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_7__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_8__.LinkService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_Services_approvals_service__WEBPACK_IMPORTED_MODULE_9__.ApprovalsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_10__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_11__.BsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_12__.ProjectsSummaryComponent), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_Services_parameter_service__WEBPACK_IMPORTED_MODULE_13__.ParameterService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.ElementRef)); };
ProjectInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: ProjectInfoComponent, selectors: [["app-project-info"]], inputs: { inputFromParent: "inputFromParent" }, decls: 60, vars: 19, consts: [["id", "LinkSideBar", 1, "sideInfobar", "shadow-0", "animate-right", 3, "hidden"], [1, "px-4", "pt-4", "pb-1"], [1, "offcanvas-header", "d-flex", "align-items-center", "justify-content-between", "pb-2"], [1, "font-weight-bold", "m-0"], [1, "fa", "fa-link", "mr-1"], ["href", "javascript:void(0)", 1, "closebtn", "btn", "btn-xs", "btn-icon", "btn-hover-primary", 3, "click"], [1, "fa", "fa-times"], [1, "kt-nav"], [1, "kt-nav__head", "d-block"], [1, "text-primary"], [1, "M_fsize"], [1, "badge", "badge-pill", "badge-outline-info"], [1, "badge", "badge-pill", "badge-outline-success"], [1, "kt-nav__separator"], [1, "kt-nav__item", "px-4"], [1, "d-flex"], [1, "mutlidropdown-set", "mutlidropdown-full", "mr-1", 2, "flex", "3", 3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onDeSelect"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", 3, "disabled", "click"], [1, "kt-nav__foot"], ["id", "LinkSideBar1", 1, "sideInfobar", "shadow-0", "animate-right", 3, "hidden"], ["appFocusOnClick", "", 1, "mutlidropdown-set", "mutlidropdown-full", "mr-1", 2, "flex", "3", 3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right", "offcanvas", 3, "hidden"], ["class", "card-body", 4, "ngFor", "ngForOf"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-0"], [1, ""], [1, "mb-2"], [1, "kt-badge", "kt-hover--primary", "kt-bg-light-primary", "kt-badge--inline"], [1, "fa", "fa-clone", "mr-2"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "py-1", 3, "click"], [1, "fa", "fa-chart-bar"], [1, "mt-1"], [1, "align-items-center"], [1, "fs-3", "mb-2", "d-inline-blck", 3, "id"], ["class", "text-info", 3, "hidden", "id", "click", 4, "ngIf"], [1, "kt-inbox__subject", "mb-2", "w-100", 2, "display", "none", 3, "id"], ["type", "text", 1, "form-control", 2, "width", "78%", "height", "32px", 3, "id", "ngModel", "ngModelChange", "keydown.enter"], ["id", "button-addon4", 1, "d-inline-block", "ml-3"], [1, "btn", "btn-primary", "btn", "btn-sm", "mr-2", 3, "click"], [1, "btn", "btn-secondary", "btn", "btn-sm", 3, "click"], [1, "text-muted", "fs-5", 3, "id"], ["class", "text-info fs-5", 3, "hidden", "id", "click", 4, "ngIf"], [1, "kt-inbox__subject", "mt-2", 2, "display", "none", 3, "id"], ["class", "d-flex  align-items-center justify-content-between", 4, "ngIf"], ["class", "card card-itm1 mt-2 collapse show", "id", "pro_actns", 4, "ngIf"], [1, "border-top", "mt-3"], [1, "mt-3"], [1, "fa", "fa-file-alt", "mr-2"], [1, "row"], [1, "col-md-4"], [1, "mt-2", "mb-1", "text-muted", "fs-7"], [1, "d-flex", "align-items-center"], [1, "fas", "fa-calendar-alt", "fs-3", "text-muted", "mr-2"], [1, "w-100"], [1, "my-1", "font-14"], ["class", "col-md-4", 4, "ngIf", "ngIfElse"], ["EndDate", ""], ["class", "col-md-4", 4, "ngIf"], ["class", "col-md-4 pricevalues text-left py-0", 4, "ngIf"], [1, "fas", "fa-wallet", "fs-3", "text-muted", "mr-2"], ["other", ""], [1, "fas", "fa-briefcase", "fs-3", "text-muted", "mr-2"], ["class", "card-body", 4, "ngIf"], [1, "border-top"], [1, "d-flex", "align-items-center", "my-3"], [1, "d-flex", "flex-grow-1", "align-items-center"], [1, "name-box", "text-center"], [1, "names-response"], ["clas", "fs-10"], [1, "fs-4", "my-1"], [1, "ml-2", "mt-3"], ["class", "dropdown", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "py-1", "pr-2", "dwn-arw", 3, "click"], [1, "ml-1", "mb-1", "fa", "fa-chevron-up"], ["id", "raciDetails", 1, "card", "border-0", "shadow-sm", "mb-3", 3, "hidden"], [1, "my-2"], [1, "col-md-6"], [1, "fas", "fa-caret-right", "fs-2", "text-success", "mr-2"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-3"], [1, "my-0"], [1, "fs-6"], [1, "table"], [4, "ngFor", "ngForOf"], [2, "color", "gray"], ["class", " border-top", 4, "ngFor", "ngForOf"], ["class", "border-top", 4, "ngIf"], [1, "text-info", 3, "hidden", "id", "click"], [1, "fas", "fa-edit", "ml-2", "mb-1", "curser-pointer"], [1, "text-info", "fs-5", 3, "hidden", "id", "click"], [1, "d-flex", "align-items-center", "justify-content-between"], ["type", "button", "class", "btn btn-primary btn-sm py-1 d-flex align-items-center", "data-toggle", "collapse", "href", "#pro_actns", "role", "button", "aria-expanded", "true", "aria-controls", "pro_actns", 4, "ngIf"], ["type", "button", "data-toggle", "collapse", "href", "#pro_actns", "role", "button", "aria-expanded", "true", "aria-controls", "pro_actns", 1, "btn", "btn-primary", "btn-sm", "py-1", "d-flex", "align-items-center"], [1, "fa", "fa-chevron-up", "ml-2", "m-0"], ["id", "pro_actns", 1, "card", "card-itm1", "mt-2", "collapse", "show"], [1, "card-body", "px-0"], [1, "w-45"], [1, "px-cb"], ["class", "comment-list pb-0", 4, "ngIf"], [1, "py-2"], ["id", "ProjectDetails_Main", 1, "proctdetls", "flex-column", "d-flex", "gap-1"], [1, "svg-icon", "svg-icon-2x", "text-primary", "mr-2"], ["width", "24", "height", "24", "viewBox", "0 0 40 40", "aria-hidden", "true", "focusable", "false", "fill", "currentColor"], ["d", "M24,2V1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H10V1c0-0.6-0.4-1-1-1S8,0.4,8,1v1C4.7,2,2,4.7,2,8v16c0,3.3,2.7,6,6,6h16c3.3,0,6-2.7,6-6V8C30,4.7,27.3,2,24,2z M8,4v1c0,0.6,0.4,1,1,1s1-0.4,1-1V4h12v1c0,0.6,0.4,1,1,1s1-0.4,1-1V4c2.2,0,4,1.8,4,4v2H4V8C4,5.8,5.8,4,8,4z M24,28H8c-2.2,0-4-1.8-4-4V12h24v12C28,26.2,26.2,28,24,28z"], [1, "action-content"], [1, "txtm-cus", "mb-1", "pt-1"], [1, "mt-1", "text-blue"], [1, "svg-icon", "svg-icon-2x", "text-info", "mr-2"], ["_ngcontent-jrv-c350", "", "width", "24", "height", "24", "viewBox", "0 0 40 40", "aria-hidden", "true", "focusable", "false", "fill", "currentColor"], ["_ngcontent-jrv-c350", "", "d", "M30.5,9h-7.8l-3.6-3.6C18.2,4.5,16.9,4,15.6,4h-5.1C6.9,4,4,6.9,4,10.5v19c0,3.6,2.9,6.5,6.5,6.5h19c3.6,0,6.5-2.9,6.5-6.5v-15C36,11.5,33.5,9,\n                                            30.5,9z M33,29.5c0,1.9-1.6,3.5-3.5,3.5h-19C8.6,33,7,31.4,7,29.5v-19C7,8.6,8.6,7,10.5,7h5.1c0.5,0,1,0.2,1.4,0.6l4.1,4c0.3,0.3,0.7,0.4,1.1,0.4h8.4c1.4,\n                                            0,2.5,1.1,2.5,2.5L33,29.5L33,29.5z M13.5,13L13.5,13c0.8,0,1.5,0.7,1.5,1.5v13c0,0.8-0.7,1.5-1.5,1.5l0,0c-0.8,0-1.5-0.7-1.5-1.5v-13C12,13.7,12.7,13,13.5,13z\n                                            M25.5,18L25.5,18c0.8,0,1.5,0.7,1.5,1.5v8c0,0.8-0.7,1.5-1.5,1.5l0,0c-0.8,0-1.5-0.7-1.5-1.5v-8C24,18.7,24.7,18,25.5,18z M19.5,22L19.5,22c0.8,0,1.5,0.7,1.5,1\n                                            .5v4c0,0.8-0.7,1.5-1.5,1.5l0,0c-0.8,0-1.5-0.7-1.5-1.5v-4C18,22.7,18.7,22,19.5,22z"], ["class", "d-flex align-items-center", 4, "ngIf"], ["data-toggle", "collapse", "href", "#prevco", "role", "button", "aria-expanded", "false", "aria-controls", "prevco", 1, "btn--1", "btn-info--1", "btn-sm--1", "text-info", "py-2"], ["id", "prevco", 1, "px-cb", "pt-cb", "bg-gry", "collapse", "kt-portlet__body_scroll", "prv-cmts"], ["class", "comment-list", 4, "ngFor", "ngForOf"], [1, "px-3", "w-55", "flex-1", "br-cus"], [1, "card-title", "mb-0"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "det-text", "pro-nm", "pl-1", "text-blue"], [2, "color", "red"], [1, "fas", "fa-chevron-up", "text-info1", "mr-2", "d-none"], ["id", "proj_act_acc", 1, "px-1"], [1, "pro_act_div", "px-0", "pt-1"], [1, "form-group", "mb-2"], [1, "form-check-inline", 3, "click"], [1, "form-check-label", "lbl-suc", "btn-app"], ["id", "rdbButtons_0", "type", "radio", "name", "rdbButtons", "value", "1", "checked", "checked", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["class", "form-check-inline", 3, "click", 4, "ngIf"], [1, "form-check-label", "lbl-dan", "btn-app"], ["id", "rdbButtons_2", "type", "radio", "name", "rdbButtons", "value", "3", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["id", "comts1", 1, ""], [1, "col-md-12", "checked-rad", "pl-1", "pt-3"], ["class", "form-group", 3, "click", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], [1, "appr-comts"], ["class", "d-flex justify-content-end mb-2", 4, "ngIf"], [1, "comment-list", "pb-0"], [1, "d-flex", "flex-column", "flex-grow-1"], [1, "comt-info"], [1, "comment-text"], [1, "svg-icon", "svg-icon-2x", "text-dangr", "mr-2"], [1, "comment-list"], [1, "comt-text"], [1, "blw", "mt-2"], [1, "kt-badge", "kt-badge--inline", "kt-badge--unified-info"], [1, "dt", "kt-badge", "kt-badge--inline", "kt-badge--unified-dark"], [1, "form-check-label", "lbl-war", "btn-app"], ["id", "rdbButtons_1", "type", "radio", "name", "rdbButtons", "value", "2", 1, "form-check-input", 3, "ngModel", "ngModelChange"], [1, "form-group", 3, "click"], ["required", "", "name", "rej_type", "placeholder", "Select Reject Type", "id", "rej_type", 3, "ngModel", "ngModelChange", "click"], ["action", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["style", "color:grey", 4, "ngIf"], ["style", "color:red", 4, "ngIf"], [3, "value"], [2, "color", "grey"], [1, "form-group"], [1, "form-control", "h-100px", 3, "ngModel", "ngModelChange"], ["required", "", "name", "comment_accept", "placeholder", "Select Comment", "id", "comment_accept", 1, "no-ellip", 3, "ngModel", "ngModelChange"], ["required", "", "name", "comment_reject", "placeholder", "Select Comment", "id", "comment_reject", 1, "no-ellip", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-end", "mb-2"], ["type", "submit", "primary", "true", 1, "btn", "btn-sm", "py-1", "btn-info", "mr-2", 3, "disabled", "click"], [1, "btn", "btn-sm", "py-1", "btn-secondary", 3, "click"], [1, "d-flex", "mt-2", "mb-1"], [1, "m-0", "text-muted", "fs-7"], ["class", "my-1 font-14", 4, "ngIf"], ["class", "my-1 font-14", "style", "color:red", "data-toggle", "kt-tooltip", 3, "title", 4, "ngIf"], [1, "dropdown"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", "no-after", "text-info", 3, "click"], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-fit", "date-drop1", 3, "id"], [1, "kt-nav", "pb-0", 3, "click"], [1, "kt-nav__head", "py-0"], [1, "height-scroll", "h-scr"], [1, "px-4", "py-3"], [1, "text-danger"], [1, "d-flex", "input-group"], ["matInput", "", "placeholder", "Select Date", "name", "date", 1, "form-control", 3, "matDatepicker", "id", "min", "ngModel", "click", "keydown.enter", "ngModelChange"], ["Deadlinetext", "ngModel"], [1, "input-group-append"], ["matSuffix", "", 1, "btn-secondary", 3, "for"], ["picker2", ""], [1, "form-group", "mb-1"], ["placeholder", "", "rows", "2", "cols", "20", 1, "form-control", 2, "height", "70px", 3, "ngModel", "ngModelChange"], [1, "px-4", "pb-3"], [1, "btn", "btn-info", "btn-sm", "mr-2", "text-white", 3, "disabled", "click"], [1, "btn", "btn-outline-info", "btn-sm", "text-dark-75", 3, "click"], ["type", "button", "id", "hold-icn", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", "no-after", "text-info", 3, "click"], [1, "fas", "fa-pause", "ml-2", "mb-1", "curser-pointer"], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-fit", "date-drop2", 3, "id"], [1, "form-group", "input-group"], [1, "input-group"], ["matInput", "", "placeholder", "Select Date", "name", "date", 1, "form-control", 3, "matDatepicker", "id", "min", "max", "ngModel", "click", "keydown.enter", "ngModelChange"], ["Holddt", "ngModel"], ["picker3", ""], ["data-toggle", "kt-tooltip", 1, "my-1", "font-14", 2, "color", "red", 3, "title"], [1, "fa", "fa-clock", "fs-3", "text-muted", "mr-2"], [1, "col-md-4", "pricevalues", "text-left", "py-0"], [1, "fas", "fa-star", "fs-3", "text-muted", "mr-2"], ["class", "my-1 font-14 text-danger", "data-toggle", "tooltip", 3, "title", 4, "ngIf"], ["class", "my-1 font-14 text-danger", 4, "ngIf"], ["data-toggle", "tooltip", 1, "my-1", "font-14", "text-danger", 3, "title"], [1, "my-1", "font-14", "text-danger"], [4, "ngIf"], [1, "my-1", "font-14", "text-info"], [1, "my-1", "font-14", "text-warning"], [1, "my-1", "font-14", "text-primary"], [1, "my-1", "font-14", "text-success"], [1, "my-1", "font-14", 2, "color", "#c0b5dc"], [1, "fas", "fa-bars", "fs-3", "text-muted", "mr-2"], [1, "progress_bar"], [1, "pro-bar"], [1, "progress_bar_title"], [1, "progress_number"], ["data-value", "0", "data-percentage-value", "0", 1, "progress-bar-inner", "bg-today", 3, "ngStyle"], ["data-value", "10", "data-percentage-value", "10", 1, "progress-bar-inner", "bg-today", 3, "ngStyle"], ["data-value", "40", "data-percentage-value", "40", 1, "progress-bar-inner", "bg-today", 3, "ngStyle"], ["data-value", "90", "data-percentage-value", "90", 1, "progress-bar-inner", "bg-today", 3, "ngStyle"], ["data-value", "100", "data-percentage-value", "100", 1, "progress-bar-inner", "bg-today", 3, "ngStyle"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "btn-sm", "py-1", "dropdown-toggle", "no-after", 3, "click"], [1, "fa", "fa-forward"], [1, "ml-1"], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-fit", "date-drop3", 3, "id"], ["reuired", "", "placeholder", "Select Employee", 3, "ngModel", "Change", "ngModelChange"], ["transfer", "ngModel"], ["matInput", "", "placeholder", "Select Date", "name", "date", 1, "form-control", 3, "matDatepicker", "id", "min", "max", "ngModel", "click", "ngModelChange"], ["Transdt", "ngModel"], ["picker4", ""], [1, "tr-9"], ["href", "javascript:void(0)", 3, "click"], [1, "align-top", "curser-pointer", 3, "click"], [1, "fas", "fa-trash-alt", "text-primary"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "fas fa-trash-alt text-primary", 4, "ngIf"], [1, "fa", "fa-window-restore", "mr-2"], [1, "d-flex", "mt-3", "flex-column"], [1, "fs-4", "mb-1"], [1, "fas", "fa-user-tie", "fs-3", "text-muted", "mr-2"], [1, "fas", "fa-calendar-alt", "fs-2", "text-muted", "mr-2"], [1, "fas", "fa-wallet", "fs-2", "text-muted", "mr-2"], [1, "1", "my-1", "font-14", "text-info"], [2, "color", "#c0b5dc"], [1, "d-block", "align-items-center", "justify-content-between", "mt-3"], [1, "fa", "fa-list", "mr-2"], ["class", "", 4, "ngFor", "ngForOf"], [1, "text-left", "mt-3"], [1, "text-left", "my-3"], ["type", "button", "id", "asgnid-colpse", "data-toggle", "collapse", "data-target", "#assignlapse", "aria-expanded", "false", 1, "btn", "btn-primary", "btn-sm", "py-1", "d-flex", "align-items-center", "asgn-colpse", "collapsed", 3, "click"], ["id", "assignlapse", "class", "collapse", "aria-labelledby", "assignlapse", 4, "ngFor", "ngForOf"], ["id", "assignlapse", "aria-labelledby", "assignlapse", 1, "collapse"], [1, "fs-3", "mb-2"], [1, "text-muted", "fs-5"], ["class", "mt-2 mb-1 text-muted fs-7", 4, "ngIf"], [1, "fas", "fa-file-pdf", "fs-2", "text-muted", "mr-2"], [1, "fas", "fa-registered", "fs-2", "text-muted", "mr-2"]], template: function ProjectInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " Link DMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_a_click_6_listener() { return ctx.closeLinkSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ul", 7)(9, "li", 8)(10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, " Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, " Linked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "li", 14)(21, "div", 15)(22, "ng-multiselect-dropdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_Template_ng_multiselect_dropdown_ngModelChange_22_listener($event) { return ctx.ngDropdwonMemo = $event; })("onSelect", function ProjectInfoComponent_Template_ng_multiselect_dropdown_onSelect_22_listener() { return ctx.Memo_Select(ctx.ngDropdwonMemo); })("onDeSelect", function ProjectInfoComponent_Template_ng_multiselect_dropdown_onDeSelect_22_listener() { return ctx.Memo_Deselect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_button_click_23_listener() { return ctx._AddLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](25, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "div", 19)(27, "div", 1)(28, "div", 2)(29, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](30, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31, " Link Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_a_click_32_listener() { return ctx.closeLinkSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](33, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "ul", 7)(35, "li", 8)(36, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37, " Portfolios");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, " Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](42, " Linked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "li", 14)(47, "div", 15)(48, "ng-multiselect-dropdown", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectInfoComponent_Template_ng_multiselect_dropdown_ngModelChange_48_listener($event) { return ctx.ngDropdwonPort = $event; })("onSelect", function ProjectInfoComponent_Template_ng_multiselect_dropdown_onSelect_48_listener() { return ctx.Portfolio_Select(ctx.ngDropdwonPort); })("onDeSelect", function ProjectInfoComponent_Template_ng_multiselect_dropdown_onDeSelect_48_listener() { return ctx.Portfolio_Deselect(ctx.ngDropdwonPort); })("onSelectAll", function ProjectInfoComponent_Template_ng_multiselect_dropdown_onSelectAll_48_listener($event) { return ctx.Portfolio_SelectAll($event); })("onDeSelectAll", function ProjectInfoComponent_Template_ng_multiselect_dropdown_onDeSelectAll_48_listener() { return ctx.Portfolio_DeSelectAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_button_click_49_listener() { return ctx.addProjectToPortfolio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](50, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](51, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](52, "div", 21)(53, "div", 1)(54, "div", 2)(55, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](56, " Project Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](57, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectInfoComponent_Template_a_click_57_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](58, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](59, ProjectInfoComponent_div_59_Template, 186, 50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx._LinkSideBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx._displayProjName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx._totalMemos, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx._mappedMemos, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("placeholder", "Select Memo")("settings", ctx.dropdownSettings_Memo)("data", ctx.Memos_List)("ngModel", ctx.ngDropdwonMemo);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !ctx.ngDropdwonMemo);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx._LinkSideBar1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx.totalPortfolios, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx._portfolioLength, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("placeholder", "Select Portfolio(s)")("settings", ctx.dropdownSettings_Portfolio)("data", ctx._portfoliosList)("ngModel", ctx.ngDropdwonPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx._SelectedPorts == " " || ctx._SelectedPorts == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx._openInfoSideBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.ProjectInfo_List);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgStyle, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__.MultiSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__["ɵr"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatSuffix, _focus_on_click_directive__WEBPACK_IMPORTED_MODULE_14__.FocusOnClickDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe], styles: [".name-box[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    font-size: 9px;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    letter-spacing: 2px;\r\n    border-radius: 50%;\r\n    line-height: 30px;\r\n    margin-right: 5px;\r\n  }\r\n.names-response[_ngcontent-%COMP%]{\r\n    display :inline-block;\r\n    text-align: left;\r\n  }\r\n.names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{\r\n    display: block;\r\n    font-size: 10px;\r\n    font-weight: 600;\r\n  }\r\n.names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{\r\n    font-weight: 600;\r\n  }\r\n.head-btn[_ngcontent-%COMP%]{\r\n    background-color: rgba(88, 103, 221, 0.1);\r\n      padding: 3px 10px 3px 5px;\r\n      border-radius: 2rem;\r\n      border: 1px solid #b3bcff;\r\n      font-weight: 500;\r\n      font-size: 12px;\r\n  }\r\n.head-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n      width: 25px;\r\n      height: 25px;\r\n      background: #5867dd;\r\n      color: #fff;\r\n      line-height: 25px;\r\n      text-align: center;\r\n      border-radius: 50%;\r\n      margin-right: 3px;\r\n  }\r\n.devider[_ngcontent-%COMP%]{\r\n    height: 1px;\r\n    width: 100%;\r\n    background-color: #f1f1f1;\r\n  }\r\n.pricevalues[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n    padding-bottom: 10px;\r\n    \r\n  }\r\n.top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(1), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(2)  {\r\n    border-top: 1px solid #f1f1f1;\r\n  }\r\n.top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(3), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(4)  {\r\n    border-bottom: none\r\n  }\r\n\r\n\r\n.w-60[_ngcontent-%COMP%]{\r\n    width: 60px;\r\n  }\r\n.dms-links[_ngcontent-%COMP%]{\r\n    list-style-type: disc;\r\n  }\r\n.dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: block;\r\n    text-decoration: underline;\r\n    font-weight: 600;\r\n    margin-bottom: 5px;\r\n  }\r\n.py-10px[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n  }\r\n.dropdown-item[_ngcontent-%COMP%]:active{\r\n    background-color: #dedee0;\r\n  }\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .pro-bar[_ngcontent-%COMP%] {\r\n    background: hsl(0, 0%, 97%);\r\n    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;\r\n    height: 4px;\r\n    margin-bottom: 12px;\r\n    margin-top: 30px;\r\n    position: relative;\r\n    text-align: left;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress_bar_title[_ngcontent-%COMP%] {\r\n    color: hsl(218, 4%, 50%);\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    position: relative;\r\n    top: -28px;\r\n    z-index: 1;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress_number[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%] {\r\n    background-color: hsl(0, 0%, 88%);\r\n    display: block;\r\n    width: 0;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transition: width 1s linear 0s;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    background-color: hsl(0, 0%, 100%);\r\n    border-radius: 50%;\r\n    width: 4px;\r\n    height: 4px;\r\n    position: absolute;\r\n    right: 1px;\r\n    top: 0;\r\n    z-index: 1;\r\n  }\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    width: 14px;\r\n    height: 14px;\r\n    background-color: inherit;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    right: -4px;\r\n    top: -5px;\r\n  }\r\n.bg-today[_ngcontent-%COMP%] {\r\n    background-color: #342bf0 !important;\r\n  }\r\n.M_fsize[_ngcontent-%COMP%]{\r\n    font-size: smaller;\r\n  }\r\n.badge[_ngcontent-%COMP%] {\r\n    border-radius: 0;\r\n    font-size: 12px;\r\n    line-height: 1;\r\n    padding: .375rem .5625rem;\r\n    font-weight: normal;\r\n  }\r\n.port_list[_ngcontent-%COMP%]{\r\n    \r\n    padding: 0.75rem 1rem;\r\n\r\n  }\r\n\r\n.border-bottom[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #dee2e6!important;\r\n}\r\n.show1[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.show[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n.item-b[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(n+4) {\r\n    display: none;\r\n}\r\n.tr-9[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n}\r\n.no-after[_ngcontent-%COMP%]::after{\r\n  content: none !important;\r\n}\r\n.hold-drop[_ngcontent-%COMP%]{\r\n  width: 500px;\r\n}\r\n.br-cus[_ngcontent-%COMP%] {\r\n  border-left: 1px solid #eee;\r\n}\r\n.card-itm1[_ngcontent-%COMP%]{\r\n  background: #fff;\r\n    border: 1px solid #ebedf2;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 1px #00000026;\r\n}\r\n\r\n.black_overlay[_ngcontent-%COMP%]{\r\n  display: none;\r\n  position: fixed;\r\n  top: 0%;\r\n  left: 0%;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0,0,0,.32);\r\n  z-index: 90;\r\n  -moz-opacity: .8;\r\n  opacity: .8;\r\n  filter: alpha(opacity=80);\r\n}\r\n.comment-list[_ngcontent-%COMP%]{\r\n  padding-bottom: 1.25rem;\r\n}\r\n.comt-text[_ngcontent-%COMP%]{\r\n  \r\n  margin-left: 5px;\r\n  margin-top: 2px;\r\n  font-size: 14px;\r\n}\r\n.blw[_ngcontent-%COMP%]   .dt[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\r\n.comt-info[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  color: #494f54;\r\n\r\n}\r\n.prv-cmts[_ngcontent-%COMP%]{\r\n max-height: 200px;\r\n overflow: auto; \r\n}\r\n.collapsed[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]:before, .dwn-arw[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]:before {\r\n  content: \"\\f078\";\r\n}\r\n.date-drop1[_ngcontent-%COMP%], .date-drop2[_ngcontent-%COMP%], .date-drop3[_ngcontent-%COMP%] {\r\n  width: 350px;\r\n}\r\n  .input-group-append .mat-icon-button {\r\n  height: 35px !important;\r\n}\r\n.date-drop1[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n    left: -329px;\r\n}\r\n.date-drop2[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n    left: -332px\r\n}\r\n.date-drop3[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n    left: -169px\r\n}\r\n.w-45[_ngcontent-%COMP%] {\r\n  width: 45% !important;\r\n}\r\n.w-55[_ngcontent-%COMP%] {\r\n  width: 55% !important;\r\n}\r\n  .no-ellip span.ng-option-label {\r\n    text-overflow: unset;\r\n    white-space: break-spaces;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQztBQUNqQztJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLHlDQUF5QztNQUN2Qyx5QkFBeUI7TUFDekIsbUJBQW1CO01BQ25CLHlCQUF5QjtNQUN6QixnQkFBZ0I7TUFDaEIsZUFBZTtFQUNuQjtBQUNBO01BQ0ksV0FBVztNQUNYLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsV0FBVztNQUNYLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLGlCQUFpQjtFQUNyQjtBQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEI7dUNBQ21DO0VBQ3JDO0FBRUE7SUFDRSw2QkFBNkI7RUFDL0I7QUFDQTtJQUNFO0VBQ0Y7QUFFQSxnQ0FBZ0M7QUFDaEM7O0tBRUc7QUFFSDtJQUNFLFdBQVc7RUFDYjtBQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBLHFDQUFxQztBQUV2QztJQUNJLDJCQUEyQjtJQUMzQixnREFBZ0Q7SUFDaEQsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0VBQ1o7QUFFQTtJQUNFLFlBQVk7RUFDZDtBQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLDhCQUE4QjtFQUNoQztBQUVBO0lBQ0UsV0FBVztJQUNYLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTixVQUFVO0VBQ1o7QUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0VBQ1g7QUFFQTtJQUNFLG9DQUFvQztFQUN0QztBQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSwrQkFBK0I7SUFDL0IscUJBQXFCOztFQUV2QjtBQUNBOztHQUVDO0FBQ0Q7SUFDRSwwQ0FBMEM7QUFDOUM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsZ0JBQWdCO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiwrQkFBK0I7QUFDbkM7QUFDQTs7R0FFRztBQUNIO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjOztBQUVoQjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7QUFDZjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtJQUNoQjtBQUNKO0FBQ0E7RUFDRSxrQkFBa0I7SUFDaEI7QUFDSjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQix5QkFBeUI7O0FBRTdCIiwiZmlsZSI6InByb2plY3QtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTmV3IGRlc2lnbiBDU1MgIGZyb20gSGVyZS4uLiAqL1xyXG4ubmFtZS1ib3h7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuICBcclxuICAubmFtZXMtcmVzcG9uc2V7XHJcbiAgICBkaXNwbGF5IDppbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAubmFtZXMtcmVzcG9uc2Ugc3BhbjpmaXJzdC1jaGlsZHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgLm5hbWVzLXJlc3BvbnNlIHNwYW46bGFzdC1jaGlsZHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDEwMywgMjIxLCAwLjEpO1xyXG4gICAgICBwYWRkaW5nOiAzcHggMTBweCAzcHggNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiY2ZmO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5oZWFkLWJ0biBpe1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNTg2N2RkO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICB9XHJcbiAgXHJcbiAgLmRldmlkZXJ7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICB9XHJcbiAgXHJcbiAgLnByaWNldmFsdWVzIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAvKiBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7ICovXHJcbiAgfVxyXG4gIFxyXG4gIC50b3AtYm9yZGVyIC5wcmljZXZhbHVlczpudGgtY2hpbGQoMSksIC50b3AtYm9yZGVyIC5wcmljZXZhbHVlczpudGgtY2hpbGQoMikgIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuICAudG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDMpLCAudG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDQpICB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lXHJcbiAgfVxyXG4gIFxyXG4gIC8qIC5wcmljZXZhbHVlczpudGgtY2hpbGQoMiksICAqL1xyXG4gIC8qIC5wcmljZXZhbHVlczpudGgtY2hpbGQoNCkge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIH0gKi9cclxuICBcclxuICAudy02MHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gIH1cclxuICBcclxuICAuZG1zLWxpbmtze1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xyXG4gIH1cclxuICBcclxuICAuZG1zLWxpbmtzIGxpIGF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLnB5LTEwcHh7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24taXRlbTphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWUwO1xyXG4gIH1cclxuXHJcbiAgLyogPT09PT09PT09IFByb2dyZXNzIEJhciA9PT09PT09PT0gKi9cclxuXHJcbi5wcm9ncmVzc19iYXIgLnByby1iYXIge1xyXG4gICAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCA5NyUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IGhzbGEoMCwgMCUsIDAlLCAwLjEpIGluc2V0O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ncmVzc19iYXIgLnByb2dyZXNzX2Jhcl90aXRsZSB7XHJcbiAgICBjb2xvcjogaHNsKDIxOCwgNCUsIDUwJSk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMjhweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ncmVzc19iYXIgLnByb2dyZXNzX251bWJlciB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ncmVzc19iYXIgLnByb2dyZXNzLWJhci1pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg4JSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDFzIGxpbmVhciAwcztcclxuICB9XHJcbiAgXHJcbiAgLnByb2dyZXNzX2JhciAucHJvZ3Jlc3MtYmFyLWlubmVyOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtNHB4O1xyXG4gICAgdG9wOiAtNXB4O1xyXG4gIH1cclxuICBcclxuICAuYmctdG9kYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MmJmMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuTV9mc2l6ZXtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICB9XHJcbiAgLmJhZGdlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjU2MjVyZW07XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuICAucG9ydF9saXN0e1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjZmYTsgKi9cclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuXHJcbiAgfVxyXG4gIC8qIC5wb3J0X2xpc3QuYm9yZGVyLWJvdHRvbTpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNiFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuICAuYm9yZGVyLWJvdHRvbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNiFpbXBvcnRhbnQ7XHJcbn1cclxuLnNob3cxIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zaG93OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLml0ZW0tYiBkaXY6bnRoLWNoaWxkKG4rNCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4udHItOXtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcbi5uby1hZnRlcjo6YWZ0ZXJ7XHJcbiAgY29udGVudDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5ob2xkLWRyb3B7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcbi5ici1jdXMge1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VlZTtcclxufVxyXG4uY2FyZC1pdG0xe1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlZGYyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMXB4ICMwMDAwMDAyNjtcclxufVxyXG4vKiAuZGF0ZS1lZHR7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59ICovXHJcbi5ibGFja19vdmVybGF5e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMCU7XHJcbiAgbGVmdDogMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjMyKTtcclxuICB6LWluZGV4OiA5MDtcclxuICAtbW96LW9wYWNpdHk6IC44O1xyXG4gIG9wYWNpdHk6IC44O1xyXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT04MCk7XHJcbn1cclxuLmNvbW1lbnQtbGlzdHtcclxuICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcclxufVxyXG4uY29tdC10ZXh0e1xyXG4gIC8qIGNvbG9yOiAjMTQxNzFhOyAqL1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYmx3IC5kdCB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuLmNvbXQtaW5mbyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzQ5NGY1NDtcclxuXHJcbn1cclxuLnBydi1jbXRze1xyXG4gbWF4LWhlaWdodDogMjAwcHg7XHJcbiBvdmVyZmxvdzogYXV0bzsgXHJcbn1cclxuLmNvbGxhcHNlZCAuZmEtY2hldnJvbi11cDpiZWZvcmUsIC5kd24tYXJ3IC5mYS1jaGV2cm9uLXVwOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGYwNzhcIjtcclxufVxyXG4uZGF0ZS1kcm9wMSwgLmRhdGUtZHJvcDIsIC5kYXRlLWRyb3AzIHtcclxuICB3aWR0aDogMzUwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5pbnB1dC1ncm91cC1hcHBlbmQgLm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRhdGUtZHJvcDF7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTMyOXB4O1xyXG59XHJcbi5kYXRlLWRyb3Aye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC0zMzJweFxyXG59XHJcbi5kYXRlLWRyb3Aze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC0xNjlweFxyXG59XHJcbi53LTQ1IHtcclxuICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnctNTUge1xyXG4gIHdpZHRoOiA1NSUgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm5vLWVsbGlwIHNwYW4ubmctb3B0aW9uLWxhYmVsIHtcclxuICAgIHRleHQtb3ZlcmZsb3c6IHVuc2V0O1xyXG4gICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcclxuXHJcbn0iXX0= */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _project_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-info-routing.module */ 51029);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _project_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-info.component */ 84697);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _focus_on_click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focus-on-click.directive */ 44926);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects-summary/projects-summary.component */ 80880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);

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
ProjectInfoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ProjectInfoModule });
ProjectInfoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsSummaryComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        // BrowserModule,
        _project_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectInfoRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__.NgMultiSelectDropDownModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProjectInfoModule, { declarations: [_project_info_component__WEBPACK_IMPORTED_MODULE_1__.ProjectInfoComponent, _focus_on_click_directive__WEBPACK_IMPORTED_MODULE_2__.FocusOnClickDirective], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        // BrowserModule,
        _project_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectInfoRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__.NgMultiSelectDropDownModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app__LayoutDashboard_project-info_project-info_module_ts.js.map