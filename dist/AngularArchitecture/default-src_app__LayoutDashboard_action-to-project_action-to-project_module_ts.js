"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["default-src_app__LayoutDashboard_action-to-project_action-to-project_module_ts"],{

/***/ 5338:
/*!****************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/action-to-project/action-to-project-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionToProjectRoutingModule": () => (/* binding */ ActionToProjectRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _action_to_project_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-to-project.component */ 98093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
        path: '', component: _action_to_project_component__WEBPACK_IMPORTED_MODULE_0__.ActionToProjectComponent
    }
];
class ActionToProjectRoutingModule {
}
ActionToProjectRoutingModule.ɵfac = function ActionToProjectRoutingModule_Factory(t) { return new (t || ActionToProjectRoutingModule)(); };
ActionToProjectRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ActionToProjectRoutingModule });
ActionToProjectRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ActionToProjectRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 98093:
/*!***********************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/action-to-project/action-to-project.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionToProjectComponent": () => (/* binding */ ActionToProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_Models_sub_task_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_Models/sub-task-dto */ 9962);
/* harmony import */ var src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/user-details-dto */ 12359);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _meeting_report_meeting_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../meeting-report/meeting-report.component */ 5131);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ 77585);
/* harmony import */ var src_app_LayoutDashboard_project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.component */ 32444);
/* harmony import */ var _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../to-do-projects/to-do-projects.component */ 80872);
/* harmony import */ var _more_details_more_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../more-details/more-details.component */ 89753);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);




















function ActionToProjectComponent_ng_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ng-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", item_r25.Project_Code);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r25.Project_Name, " ");
} }
function ActionToProjectComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Action Name required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Description required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "disabled-option": a0 }; };
function ActionToProjectComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.item;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](2, _c0, item_r26.Emp_No === ctx_r7.Owner_Empno));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r26.RACIS, " ");
} }
function ActionToProjectComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Assign To required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_ng_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ng-option", 51)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", item_r27.Emp_No)("disabled", item_r27.Emp_No == ctx_r10.selectedEmpNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r27.RACIS);
} }
function ActionToProjectComponent_span_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Start Date required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_div_68_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "End Date required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 28)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "End Date :");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 52)(6, "input", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ActionToProjectComponent_div_68_Template_input_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r32); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](11); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r29.open()); })("ngModelChange", function ActionToProjectComponent_div_68_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r33._EndDate = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "mat-datepicker-toggle", 33)(10, "mat-datepicker", null, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, ActionToProjectComponent_div_68_span_12_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](11);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matDatepicker", _r29)("min", ctx_r14._StartDate)("ngModel", ctx_r14._EndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("for", _r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r14._edate == true);
} }
function ActionToProjectComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 28)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "End Date :");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ActionToProjectComponent_div_69_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r36.enddateChecker()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "input", 56, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ActionToProjectComponent_div_69_Template_input_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r37); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](11); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r35.open()); })("ngModelChange", function ActionToProjectComponent_div_69_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r39._EndDate = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "mat-datepicker-toggle", 33)(10, "mat-datepicker", null, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](11);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matDatepicker", _r35)("matDatepickerFilter", ctx_r15.myFilter)("ngModel", ctx_r15._EndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("for", _r35);
} }
function ActionToProjectComponent_span_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Allocated hours required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*Allocation per day limit is 10 hours.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Please enter the hours less than or equal to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " hours!");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r20.maxAllocation);
} }
function ActionToProjectComponent_span_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "*Allocated hours cannot be 0, please enter a value.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r22._message);
} }
function ActionToProjectComponent_button_90_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ActionToProjectComponent_button_90_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r40.sweetAlert()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r23.Sub_ProjectName || !ctx_r23._Description || !ctx_r23.selectedEmpNo || !ctx_r23._StartDate || !ctx_r23._EndDate || !ctx_r23._allocated || ctx_r23._allocated > ctx_r23.maxAllocation);
} }
function ActionToProjectComponent_button_91_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ActionToProjectComponent_button_91_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r42.sweetAlert()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r24.Sub_ProjectName || !ctx_r24._Description || !ctx_r24.selectedEmpNo || !ctx_r24._StartDate || !ctx_r24._EndDate || ctx_r24._allocated > ctx_r24.maxAllocation);
} }
//import { empty } from '@angular-devkit/schematics';
class ActionToProjectComponent {
    constructor(notifyService, ProjectTypeService, router, _meetingreport, dialog, dateAdapter, BsService, service, _projectunplanned, _Todoproject, _MoreDetails, route) {
        this.notifyService = notifyService;
        this.ProjectTypeService = ProjectTypeService;
        this.router = router;
        this._meetingreport = _meetingreport;
        this.dialog = dialog;
        this.dateAdapter = dateAdapter;
        this.BsService = BsService;
        this.service = service;
        this._projectunplanned = _projectunplanned;
        this._Todoproject = _Todoproject;
        this._MoreDetails = _MoreDetails;
        this.route = route;
        // extends ProjectUnplannedTaskComponent
        // @ViewChild(ProjectUnplannedTaskComponent ) _projectunplanned !:any ;
        this.Sub_ProjectName = null;
        this._Description = null;
        this._StartDate = null;
        this._EndDate = null;
        this._inputAttachments = [];
        this.selectedEmpNo = null;
        this._MainPrjectName = "";
        //selected_Employee: any[];
        this.dropdownSettings_EMP = {};
        this.disablePreviousDate = new Date();
        this.task_id = null;
        this.ProjectsDropdownBoolean = false;
        this._MasterCode = null;
        this.ProjectBlock = null;
        this.selectedFile = null;
        this.dropdownSettings_Projects = {};
        this.cat_name = "";
        this._EmployeeListForDropdown = [];
        this.ownerArr = [];
        this.nonRacis = [];
        this.allUsers = [];
        this.selected_Employee = [];
        this.maxlimit = true;
        this.start_dt = new Date();
        this.end_dt = new Date();
        this.isHierarchy = false;
        // super(notifyService,ProjectTypeService,router,dialog,dateAdapter,BsService);
        this.CurrentUser_ID = localStorage.getItem('EmpNo');
        this.ObjSubTaskDTO = new src_app_Models_sub_task_dto__WEBPACK_IMPORTED_MODULE_0__.SubTaskDTO;
        this.ObjUserDetails = new src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_1__.UserDetailsDTO();
        this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
        this.BsService.bs_projectCode.subscribe(p => this.pcode = p);
        this.BsService.bs_ProjectName.subscribe(N => this._MainPrjectName = N);
        this.BsService.bs_AssignId.subscribe(id => this.task_id = id);
        this.BsService.bs_TaskName.subscribe(t => {
            this.Sub_ProjectName = t;
        });
        this._inputAttachments = [];
        this._projcode = false;
        this._desbool = false;
        this._subname = false;
        this._sdate = false;
        this._edate = false;
        this._selectemp = false;
    }
    ngOnInit() {
        this._projcode = false;
        this._desbool = false;
        this._subname = false;
        this._sdate = false;
        this._edate = false;
        this._selectemp = false;
        this._Urlid = this.route.snapshot.params['id'];
        this.BsService.bs_catId.subscribe(c => { this.cat_id = c; });
        this.BsService.bs_catName.subscribe(d => { this.cat_name = d; });
        this.Current_user_ID = localStorage.getItem('EmpNo');
        this.GetAllEmployeesForAssignDropdown();
        this.gethierarchy();
        this.getRACISandNonRACIS();
        const input = document.getElementById("hour-input");
        //And disable the wheel default functionality:
        input.addEventListener("wheel", function (event) {
            event.preventDefault();
        });
    }
    GetAllEmployeesForAssignDropdown() {
        let obj = {
            pagenumber: 1,
            Emp_No: this.CurrentUser_ID,
            Mode: 'AssignedTask'
        };
        this.BsService.bs_projectCode.subscribe(p => {
            if (p == null) {
                this.ProjectsDropdownBoolean = false;
                this.GetProjectsByUserName();
                this._MasterCode = null;
            }
            else {
                this._MasterCode = p;
                this.ProjectsDropdownBoolean = true;
                this.selectedProjectCode = p;
                this.service.GetDeadlineByProjectCode(this.selectedProjectCode).subscribe(data => {
                    this.ProjectDeadLineDate = data["DeadLine"];
                    this.ProjectStartDate = data["StartDate"];
                    this.Owner_Empno = data['Owner_empno'];
                    this.Resp_empno = data['Resp_empno'];
                    this.Autho_empno = data['Autho_empno'];
                    const dateOne = new Date(this.disablePreviousDate);
                    const dateTwo = new Date(this.ProjectStartDate);
                    if (dateTwo > dateOne) {
                        this.disablePreviousDate = this.ProjectStartDate;
                    }
                    // console.log(dateOne,dateTwo,this.disablePreviousDate,this.ProjectStartDate,"dates")
                });
            }
        });
        this.service._GetCompletedProjects(obj).subscribe((data) => {
            this._EmployeeListForDropdown = JSON.parse(data[0]['EmployeeList']);
            //console.log(this.EmployeeList);
            this.dropdownSettings_EMP = {
                searchAutofocus: true,
                singleSelection: true,
                idField: 'Emp_No',
                textField: 'DisplayName',
                itemsShowLimit: 2,
                closeDropDownOnSelection: true,
                allowSearchFilter: true,
            };
        });
    }
    getRACISandNonRACIS() {
        this.service.GetRACISandNonRACISEmployeesforMoredetails(this.pcode).subscribe((data) => {
            this.ownerArr = (JSON.parse(data[0]['RacisList']));
            this.nonRacis = (JSON.parse(data[0]['OtherList']));
            this.allUsers = (JSON.parse(data[0]['alluserlist']));
            console.log(this.allUsers, "groupby");
        });
    }
    onOptionClick(item) {
        if (item == this.Owner_Empno) {
            // Prevent selecting disabled option
            return false;
        }
    }
    onFilterChange(event) {
        this.filterText = event;
        this.GetProjectsByUserName();
    }
    ProjectOnSelect() {
        let obj = {
            pagenumber: 1,
            Emp_No: this.CurrentUser_ID,
            Mode: 'AssignedTask'
        };
        // this.selectedProjectCode = obj['Project_Code'];
        this.selectedProjectCode = this.selectedProjectCodelist;
        this.service.GetDeadlineByProjectCode(this.selectedProjectCode).subscribe(data => {
            this.ProjectDeadLineDate = data["DeadLine"];
            this.ProjectStartDate = data["StartDate"];
            this.Owner_Empno = data['Owner_empno'];
            this.Resp_empno = data['Resp_empno'];
            this.Autho_empno = data['Autho_empno'];
            const dateOne = new Date(this.disablePreviousDate);
            const dateTwo = new Date(this.ProjectStartDate);
            if (dateTwo > dateOne) {
                this.disablePreviousDate = this.ProjectStartDate;
            }
        });
        this.service.GetRACISandNonRACISEmployeesforMoredetails(this.selectedProjectCode).subscribe((data) => {
            this.ownerArr = (JSON.parse(data[0]['RacisList']));
            this.nonRacis = (JSON.parse(data[0]['OtherList']));
            this.allUsers = (JSON.parse(data[0]['alluserlist']));
            console.log(this.allUsers, "groupby");
        });
        this.service._GetCompletedProjects(obj).subscribe((data) => {
            this._EmployeeListForDropdown = JSON.parse(data[0]['EmployeeList']);
            //console.log(this.EmployeeList);
            this.dropdownSettings_EMP = {
                searchAutofocus: true,
                singleSelection: true,
                idField: 'Emp_No',
                textField: 'DisplayName',
                itemsShowLimit: 2,
                closeDropDownOnSelection: true,
                allowSearchFilter: true,
            };
        });
    }
    ProjectOnDeselect(obj) {
        this.selectedProjectCode = "";
    }
    GetProjectsByUserName() {
        // this.LoadingBar.start();
        this.ObjUserDetails.PageNumber = 1;
        this.ObjUserDetails.PageSize = 30;
        this.ObjUserDetails.SearchText = this.filterText;
        this.service.GetProjectsForRunwayTaskDropdown(this.ObjUserDetails).subscribe(data => {
            this._ProjectDataList = JSON.parse(data[0]['DropdownProjects_Json']);
            this.Owner_Empno = this._ProjectDataList[0]['Owner_EmpNo'];
            this.dropdownSettings_Projects = {
                singleSelection: true,
                idField: 'Project_Code',
                textField: 'Project_Name',
                itemsShowLimit: 1,
                allowSearchFilter: true,
                closeDropDownOnSelection: true,
                clearSearchFilter: true,
                searchPlaceholderText: "Search by project name",
                maxHeight: "500px",
                allowRemoteDataSearch: true,
                noDataAvailablePlaceholderText: 'Please wait..',
            };
            // console.log("Project List for Dropdown...",this._ProjectDataList);
        });
    }
    onFileChange(e) {
        this._inputAttachments = [...this._inputAttachments, {
                FileName: e.target.files[0].name,
                Size: e.target.files[0].size,
                Files: e.target.files[0]
            }];
    }
    EmployeeOnSelect(obj) {
        // this.selectedEmpNo = obj['Emp_No'];
        if (obj['Emp_No'] == this.Owner_Empno) {
            this.selectedEmpNo = "";
            this._selectemp = true;
            this.notifyService.showInfo("Action cannot be assigned to project owner", "");
        }
        else {
            this._selectemp = false;
            this.selectedEmpNo = obj['Emp_No'];
        }
    }
    EmployeeOnDeselect(obj) {
        this.selectedEmpNo = null;
    }
    alertMaxAllocation() {
        if (this._StartDate == null || this._EndDate == null) {
            this._message = "Start Date/End date missing!!";
        }
        else {
            // this.start_dt = moment(this._StartDate).format("MM/DD/YYYY");
            // this.end_dt = moment(this._EndDate).format("MM/DD/YYYY");
            this.start_dt = new Date(this._StartDate);
            this.end_dt = new Date(this._EndDate);
            console.log(this.start_dt, this.end_dt, this.maxAllocation, "allcoation");
            var Difference_In_Time = this.start_dt.getTime() - this.end_dt.getTime();
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            if (Difference_In_Days == 0) {
                Difference_In_Days = -1;
                this.maxAllocation = (-Difference_In_Days) * 10 / 1;
            }
            else {
                this.maxAllocation = (-Difference_In_Days) * 10 / 1 + 10;
            }
            console.log(this.start_dt, this.end_dt, this.maxAllocation, "allcoation");
        }
    }
    OnSubmit() {
        if (this._Urlid == 2 && (this.selectedProjectCodelist == null || this.selectedProjectCodelist == undefined)) {
            this._projcode = true;
            return false;
        }
        if (this._Description == "" || this._Description == null || this._Description == undefined) {
            this._desbool = true;
            return false;
        }
        if (this.Sub_ProjectName == "" || this.Sub_ProjectName == null || this.Sub_ProjectName == undefined) {
            this._subname = true;
            return false;
        }
        if (this._StartDate == null || this._StartDate == null || this._StartDate == undefined) {
            this._sdate = true;
            return false;
        }
        if (this._EndDate == null || this._EndDate == null || this._EndDate == undefined) {
            this._edate = true;
            return false;
        }
        if (this.selectedEmpNo == "" || this.selectedEmpNo == null || this.selectedEmpNo == undefined) {
            this._selectemp = true;
            return false;
        }
        if (this.owner == null || this.owner == undefined || this.owner == '') {
            this.owner = this.Owner_Empno;
        }
        else {
            this.owner = this.owner;
        }
        if (this._MasterCode == null) {
            this.ObjSubTaskDTO.MasterCode = this.selectedProjectCode;
            this._MasterCode = this.selectedProjectCode;
        }
        else {
            this.ObjSubTaskDTO.MasterCode = this._MasterCode;
        }
        this.service._GetNewProjectCode(this.ObjSubTaskDTO).subscribe(data => {
            this.Sub_ProjectCode = data['SubTask_ProjectCode'];
            this.EmpNo_Autho = data['Team_Autho'];
            this.ProjectBlock = data['ProjectBlock'];
            if (this.task_id != null) {
                this.ObjSubTaskDTO.AssignId = this.task_id;
            }
            else {
                this.task_id = 0;
            }
            this.ObjSubTaskDTO.SubProject_Name = this.Sub_ProjectName;
            this.ObjSubTaskDTO.SubtaskDescription = this._Description;
            this.ObjSubTaskDTO.ProjectBlock = this.ProjectBlock;
            this.ObjSubTaskDTO.StartDate = this._StartDate;
            this.ObjSubTaskDTO.SubProject_DeadLine = this._EndDate;
            // this.ObjSubTaskDTO.Duration = (-Difference_In_Days);
            // this.ObjSubTaskDTO.Duration = this.ObjSubTaskDTO.Duration * 8 / 1;
            //If we are using 8 hours format then divide by 3 for HourDifference.
            this.maxAllocation = this.maxAllocation * 8 / 1;
            this.ObjSubTaskDTO.Emp_No = this.CurrentUser_ID;
            this.ObjSubTaskDTO.AssignTo = this.selectedEmpNo;
            this.ObjSubTaskDTO.Remarks = this._remarks;
            this.ObjSubTaskDTO.Duration = this._allocated;
            // this.ObjSubTaskDTO.Attachments = this._inputAttachments;      
            if (this._inputAttachments.length > 0) {
                this.ObjSubTaskDTO.Attachments = this._inputAttachments[0].Files;
            }
            var datestrStart = moment__WEBPACK_IMPORTED_MODULE_3__(this._StartDate).format("MM/DD/YYYY");
            var datestrEnd = moment__WEBPACK_IMPORTED_MODULE_3__(this._EndDate).format("MM/DD/YYYY");
            // alert(datestrStart)
            // alert(datestrEnd)
            console.log(datestrStart, this._StartDate, "startdate");
            console.log(datestrEnd, this._EndDate, "enddate");
            const fd = new FormData();
            fd.append("Project_Code", this.Sub_ProjectCode);
            fd.append("Team_Autho", this.EmpNo_Autho);
            // fd.append('file', this._inputAttachments[0].Files);
            if (this._inputAttachments.length > 0) {
                fd.append("Attachment", "true");
                fd.append('file', this._inputAttachments[0].Files);
            }
            else {
                fd.append("Attachment", "false");
                fd.append('file', "");
            }
            fd.append("_MasterCode", this.ObjSubTaskDTO.MasterCode);
            fd.append("SubtaskName", this.Sub_ProjectName);
            fd.append("Desc", this._Description);
            fd.append("Projectblock", this.ProjectBlock);
            fd.append("StartDate", datestrStart);
            fd.append("EndDate", datestrEnd);
            // fd.append("Allocated", this.maxAllocation.toString());
            fd.append("Emp_No", this.CurrentUser_ID);
            fd.append("AssignTo", this.selectedEmpNo);
            fd.append("Remarks", this._remarks);
            fd.append("EmployeeName", localStorage.getItem('UserfullName'));
            fd.append("AssignId", this.task_id.toString());
            fd.append("Owner", this.owner);
            if (this.ObjSubTaskDTO.Duration != null) {
                fd.append("Duration", this.ObjSubTaskDTO.Duration.toString());
            }
            else {
                this.ObjSubTaskDTO.Duration = 0;
            }
            this.service._InsertNewSubtask(fd).subscribe(event => {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpEventType.Response) {
                    var myJSON = JSON.stringify(event);
                    this._Message = (JSON.parse(myJSON).body).Message;
                    // console.log(event,myJSON,this._Message,"action data");
                    if (this._Message == '1') {
                        this.notifyService.showSuccess("Action created successfully", "Success");
                    }
                    else if (this._Message == '2') {
                        this.notifyService.showInfo("Request submitted to the Assigned employee", "Action Under Approval");
                    }
                    else if (this._Message == '3') {
                        this.notifyService.showError("Something went wrong", "Action not created");
                    }
                    else {
                        this.notifyService.showError("Something went wrong", "Action not created");
                    }
                }
                if (this._Urlid == 1) {
                    this._Todoproject.CallOnSubmitAction();
                    this.Clear_Feilds();
                    this.closeInfo();
                    this._inputAttachments = [];
                }
                else if (this._Urlid == 2) {
                    this._projectunplanned.getCatid();
                    this.Clear_Feilds();
                    this.closeInfo();
                    this._inputAttachments = [];
                }
                else if (this._Urlid == 3) {
                    this._meetingreport.getScheduleId();
                    this._meetingreport.GetAssigned_SubtaskProjects();
                    this.Clear_Feilds();
                    this.closeInfo();
                    this._inputAttachments = [];
                }
                else {
                    // this._MoreDetails.GetProjectDetails();
                    // this._MoreDetails.GetSubtask_Details();
                    // this._MoreDetails.getapproval_actiondetails();
                    // this._MoreDetails.getRejectType();
                    this.Clear_Feilds();
                    this.closeInfo();
                    this._inputAttachments = [];
                }
            });
        });
    }
    convert(str) {
        var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
        return [day, mnth, date.getFullYear()].join("-");
    }
    gethierarchy() {
        this.service.GetHierarchyofOwnerforMoredetails(this.Current_user_ID, this.pcode).subscribe((data) => {
            if (data['message'] == '1') {
                this.isHierarchy = true;
            }
            else {
                this.isHierarchy = false;
            }
        });
    }
    sweetAlert() {
        var datestrEnd = (new Date(this._EndDate)).toUTCString();
        var datedead = (new Date(this.ProjectDeadLineDate)).toUTCString();
        const dateOne = new Date(this._EndDate);
        const dateTwo = new Date(this.ProjectDeadLineDate);
        // console.log(dateOne)
        // console.log(dateTwo)
        if ((dateTwo < dateOne) && (this.Current_user_ID == this.Owner_Empno || this.Current_user_ID == this.Resp_empno || this.Current_user_ID == this.Autho_empno || this.isHierarchy == true)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: 'Action deadLine is greater than main project deadLine ?',
                text: 'Do you want to continue for selection of date after main project deadLine!!',
                // icon: 'warning',
                // iconHtml: '<img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Blue_question_mark_icon.svg">',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No'
            }).then((response) => {
                if (response.value) {
                    this.OnSubmit();
                }
                else if (response.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().DismissReason.cancel)) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Cancelled', 'Action not created', 'error');
                }
            });
        }
        else if ((dateTwo < dateOne) && (this.Current_user_ID != this.Owner_Empno && this.Current_user_ID != this.Resp_empno && this.Current_user_ID != this.Autho_empno && this.isHierarchy == false)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: 'Unable to create this action.',
                text: 'You have selected the action end date greater than project deadline. Please contact the project responsible to extend project end date and try again.',
                // showCancelButton: true
            });
        }
        else {
            this.OnSubmit();
        }
    }
    closeInfo() {
        // alert(this._Urlid);
        if (this._Urlid == 2) {
            this.router.navigate(["UnplannedTask/"]);
        }
        else if (this._Urlid == 1) {
            this.router.navigate(["./backend/ToDoProjects/"]);
        }
        else if (this._Urlid == 3) {
            this._meetingreport.getScheduleId();
        }
        else {
            this.router.navigate(["./MoreDetails", this.selectedProjectCode]);
        }
        this.Clear_Feilds();
        document.getElementById("mysideInfobar").classList.remove("kt-action-panel--on");
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementById("mysideInfobar1").classList.remove("kt-action-panel--on");
    }
    Clear_Feilds() {
        this.selectedProjectCodelist = [];
        this.Sub_ProjectCode = null;
        this.Sub_ProjectName = null;
        this._Description = null;
        this._projcode = false;
        this._desbool = false;
        this._subname = false;
        this._sdate = false;
        this._edate = false;
        this._selectemp = false;
        this._StartDate = null;
        this._EndDate = null;
        this._remarks = "";
        this._allocated = null;
        this._inputAttachments = [];
        this._inputAttachments2 = [];
        this.selectedEmpNo = '';
        this.selected_Employee = [];
        document.getElementById("uploadFile").value = "";
    }
    startdatechecker() {
        this._sdate = false;
        this._EndDate = null;
    }
    enddateChecker() {
        this._sdate = true;
        this.myFilter = (d) => {
            const day = (d || new Date()).getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 1 && day !== 2 && day !== 3 && day !== 4 && day !== 5 && day !== 6 && day !== 7;
        };
    }
}
ActionToProjectComponent.ɵfac = function ActionToProjectComponent_Factory(t) { return new (t || ActionToProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_5__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_meeting_report_meeting_report_component__WEBPACK_IMPORTED_MODULE_6__.MeetingReportComponent), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_15__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_7__.BsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_5__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_LayoutDashboard_project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_8__.ProjectUnplannedTaskComponent), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_9__.ToDoProjectsComponent), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_more_details_more_details_component__WEBPACK_IMPORTED_MODULE_10__.MoreDetailsComponent), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute)); };
ActionToProjectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: ActionToProjectComponent, selectors: [["app-action-to-project"]], decls: 94, vars: 32, consts: [[1, "kt-portlet"], [1, "kt-portlet__head"], [1, "offcanvas-header", "d-flex", "align-items-center", "justify-content-between", "flex-1"], [1, "m-0"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-hover-info", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24", "fill", "currentColor"], ["fill", "none", "d", "M0 0h24v24H0z"], ["d", "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"], [1, "kt-portlet__body", "pb-0", "pt-3", "sidehf_scroll", "scroll-y"], [1, "pro-nm", "text-info", "mb-2"], [1, "form-group", 3, "hidden"], [1, "text-danger"], ["reuired", "", "placeholder", "Select project", 3, "ngModel", "change", "ngModelChange"], ["action", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["style", "color:red", 4, "ngIf"], [1, "form-group"], ["required", "", "type", "text", "placeholder", "Enter action name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["required", "", "placeholder", "Enter action description", 1, "form-control", 2, "height", "100px", 3, "ngModel", "ngModelChange"], ["description", "ngModel"], [1, "form-group", "text-dark-50", "w-75px", "flex-grow-1", "brdng-0"], ["bindLabel", "RACIS", "bindValue", "Emp_No", "groupBy", "usergroup", "placeholder", "Select employee", "name", "RACIS", "required", "", 3, "items", "searchable", "ngModel", "change", "ngModelChange"], ["ng-option-tmp", ""], ["reuired", "", "placeholder", "Select owner", 3, "ngModel", "ngModelChange"], ["ownerno", "ngModel"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "d-flex", "gap-1"], [1, "form-group", "flex-1"], [1, "input-group", 3, "click"], ["matInput", "", "required", "", "placeholder", "Start date", 1, "form-control", 3, "matDatepicker", "min", "ngModel", "click", "ngModelChange"], ["startdate", "ngModel"], [1, "input-group-text", "p-0"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["class", "form-group flex-1", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["id", "hour-input", "required", "", "type", "number", "placeholder", "Enter action duration in hrs", "min", "0", "oninput", "validity.valid||(value='');", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["allocated", "ngModel"], ["for", "exampleFormControlFile1"], ["aria-label", "With textarea", "placeholder", "Enter action remarks if any", 1, "form-control", 2, "height", "111px", 3, "ngModel", "ngModelChange"], [1, "custom-file", "pl-1"], ["type", "file", "id", "uploadFile", 1, "form-control-file", 3, "change"], [1, "kt-portlet__foot", "py-3"], [1, "form-group", "mb-0"], ["type", "submit", "class", "btn btn-info btn-sm", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", "class", "btn  btn-info btn-sm", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-secondary", "btn-sm", "ml-2", 3, "click"], [3, "value"], [2, "color", "red"], [3, "ngClass"], [3, "value", "disabled"], [1, "input-group"], ["matInput", "", "required", "", "placeholder", "End date", 1, "form-control", 3, "matDatepicker", "min", "ngModel", "click", "ngModelChange"], ["Enddate", "ngModel"], ["picker2", ""], ["matInput", "", "required", "", "placeholder", "End Date", 1, "form-control", 3, "matDatepicker", "matDatepickerFilter", "ngModel", "click", "ngModelChange"], ["type", "submit", 1, "btn", "btn-info", "btn-sm", 3, "disabled", "click"]], template: function ActionToProjectComponent_Template(rf, ctx) { if (rf & 1) {
        const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Action To Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ActionToProjectComponent_Template_a_click_5_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "path", 6)(8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 8)(10, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 10)(13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Select Project :");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "ng-select", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ActionToProjectComponent_Template_ng_select_change_17_listener() { return ctx.ProjectOnSelect(); })("ngModelChange", function ActionToProjectComponent_Template_ng_select_ngModelChange_17_listener($event) { return ctx.selectedProjectCodelist = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ActionToProjectComponent_ng_option_19_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, ActionToProjectComponent_span_20_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 16)(22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, " Action Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ActionToProjectComponent_Template_input_ngModelChange_26_listener($event) { return ctx.Sub_ProjectName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, ActionToProjectComponent_span_28_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 16)(30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "Description :");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "textarea", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ActionToProjectComponent_Template_textarea_ngModelChange_34_listener($event) { return ctx._Description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, ActionToProjectComponent_span_36_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "div", 21)(38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, " Assign To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "ng-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ActionToProjectComponent_Template_ng_select_change_44_listener($event) { return ctx.EmployeeOnSelect($event); })("ngModelChange", function ActionToProjectComponent_Template_ng_select_ngModelChange_44_listener($event) { return ctx.selectedEmpNo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](45, ActionToProjectComponent_ng_template_45_Template, 2, 4, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](46, ActionToProjectComponent_span_46_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "div", 21)(48, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, "Action Owner : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](50, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "ng-select", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ActionToProjectComponent_Template_ng_select_ngModelChange_51_listener($event) { return ctx.owner = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](53, ActionToProjectComponent_ng_option_53_Template, 3, 3, "ng-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "div", 27)(55, "div", 28)(56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57, "Start Date : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ActionToProjectComponent_Template_div_click_60_listener() { return ctx.startdatechecker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ActionToProjectComponent_Template_input_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r44); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](66); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r12.open()); })("ngModelChange", function ActionToProjectComponent_Template_input_ngModelChange_61_listener($event) { return ctx._StartDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](64, "mat-datepicker-toggle", 33)(65, "mat-datepicker", null, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](67, ActionToProjectComponent_span_67_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](68, ActionToProjectComponent_div_68_Template, 13, 5, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](69, ActionToProjectComponent_div_69_Template, 12, 4, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](70, "div", 16)(71, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](72, "Allocated Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](73, ActionToProjectComponent_span_73_Template, 2, 0, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ActionToProjectComponent_Template_input_ngModelChange_74_listener($event) { return ctx._allocated = $event; })("click", function ActionToProjectComponent_Template_input_click_74_listener() { return ctx.alertMaxAllocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](76, ActionToProjectComponent_span_76_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](77, ActionToProjectComponent_span_77_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](78, ActionToProjectComponent_span_78_Template, 5, 1, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](79, ActionToProjectComponent_span_79_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](80, ActionToProjectComponent_span_80_Template, 2, 1, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "div", 16)(82, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](83, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "textarea", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ActionToProjectComponent_Template_textarea_ngModelChange_84_listener($event) { return ctx._remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "div", 16)(86, "div", 41)(87, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ActionToProjectComponent_Template_input_change_87_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](88, "div", 43)(89, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](90, ActionToProjectComponent_button_90_Template, 2, 1, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](91, ActionToProjectComponent_button_91_Template, 2, 1, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](92, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ActionToProjectComponent_Template_button_click_92_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](93, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](66);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx._MainPrjectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx.ProjectsDropdownBoolean);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.selectedProjectCodelist);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx._projcode == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.Sub_ProjectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx._subname == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx._Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx._desbool == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.allUsers)("searchable", true)("ngModel", ctx.selectedEmpNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx._selectemp == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.owner);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.ownerArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matDatepicker", _r12)("min", ctx.disablePreviousDate)("ngModel", ctx._StartDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("for", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx._sdate == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx._StartDate != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx._StartDate == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedEmpNo == ctx.Current_user_ID);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx._allocated);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedEmpNo == ctx.Current_user_ID && _r17.touched && _r17.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx._allocated > ctx.maxAllocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx._allocated > ctx.maxAllocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx._allocated == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx._StartDate == null || ctx._EndDate == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx._remarks);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedEmpNo == ctx.Current_user_ID);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedEmpNo != ctx.Current_user_ID);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerToggle, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__["ɵr"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__["ɵf"]], styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.disabled-option[_ngcontent-%COMP%] {\n  color: gray;\n  cursor: not-allowed; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi10by1wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7QUFFQSxZQUFZO0FBQ1o7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckIiLCJmaWxlIjoiYWN0aW9uLXRvLXByb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBGaXJlZm94ICovXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuLmRpc2FibGVkLW9wdGlvbiB7XG4gIGNvbG9yOiBncmF5O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkOyBcbn0iXX0= */"] });


/***/ }),

/***/ 69840:
/*!********************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/action-to-project/action-to-project.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionToProjectModule": () => (/* binding */ ActionToProjectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _action_to_project_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-to-project-routing.module */ 5338);
/* harmony import */ var _action_to_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-to-project.component */ 98093);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);









class ActionToProjectModule {
}
ActionToProjectModule.ɵfac = function ActionToProjectModule_Factory(t) { return new (t || ActionToProjectModule)(); };
ActionToProjectModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ActionToProjectModule });
ActionToProjectModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _action_to_project_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActionToProjectRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__.NgMultiSelectDropDownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ActionToProjectModule, { declarations: [_action_to_project_component__WEBPACK_IMPORTED_MODULE_1__.ActionToProjectComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _action_to_project_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActionToProjectRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__.NgMultiSelectDropDownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule], exports: [_action_to_project_component__WEBPACK_IMPORTED_MODULE_1__.ActionToProjectComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app__LayoutDashboard_action-to-project_action-to-project_module_ts.js.map