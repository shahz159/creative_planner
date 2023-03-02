"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["src_app__LayoutDashboard_action-to-project_action-to-project_module_ts"],{

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
/* harmony import */ var src_app_Models_sub_task_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_Models/sub-task-dto */ 9962);
/* harmony import */ var src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/user-details-dto */ 12359);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ 77585);
/* harmony import */ var src_app_LayoutDashboard_project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.component */ 32444);
/* harmony import */ var _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../to-do-projects/to-do-projects.component */ 80872);
/* harmony import */ var _more_details_more_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../more-details/more-details.component */ 89753);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);


















function ActionToProjectComponent_ng_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r25.Project_Code);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r25.Project_Name, " ");
} }
function ActionToProjectComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Project required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Action Name required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Description required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_ng_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r26.Emp_No);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r26.DisplayName, " ");
} }
function ActionToProjectComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Assign To required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_ng_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r27, " ");
} }
function ActionToProjectComponent_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Start Date required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_div_65_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "End Date required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 23)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "End Date :");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 42)(6, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ActionToProjectComponent_div_65_Template_input_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r29.open()); })("ngModelChange", function ActionToProjectComponent_div_65_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r33._EndDate = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "mat-datepicker-toggle", 28)(10, "mat-datepicker", null, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, ActionToProjectComponent_div_65_span_12_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matDatepicker", _r29)("min", ctx_r15._StartDate)("ngModel", ctx_r15._EndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", _r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r15._edate == true);
} }
function ActionToProjectComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 23)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "End Date :");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ActionToProjectComponent_div_66_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r36.enddateChecker()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "input", 46, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ActionToProjectComponent_div_66_Template_input_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r37); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r35.open()); })("ngModelChange", function ActionToProjectComponent_div_66_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r39._EndDate = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "mat-datepicker-toggle", 28)(10, "mat-datepicker", null, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matDatepicker", _r35)("matDatepickerFilter", ctx_r16.myFilter)("ngModel", ctx_r16._EndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", _r35);
} }
function ActionToProjectComponent_span_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Allocated hours required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "*Allocation per day limit is 10 hours.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Please enter the hours less than or equal to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " hours!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r21.maxAllocation);
} }
function ActionToProjectComponent_span_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r22._message);
} }
function ActionToProjectComponent_button_85_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ActionToProjectComponent_button_85_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r40.sweetAlert()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r23.Sub_ProjectName || !ctx_r23._Description || !ctx_r23.selectedEmpNo || !ctx_r23._StartDate || !ctx_r23._EndDate || !ctx_r23._allocated || ctx_r23._allocated > ctx_r23.maxAllocation);
} }
function ActionToProjectComponent_button_86_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ActionToProjectComponent_button_86_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r42.sweetAlert()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r24.Sub_ProjectName || !ctx_r24._Description || !ctx_r24.selectedEmpNo || !ctx_r24._StartDate || !ctx_r24._EndDate || ctx_r24._allocated > ctx_r24.maxAllocation);
} }
//import { empty } from '@angular-devkit/schematics';
class ActionToProjectComponent {
    constructor(notifyService, ProjectTypeService, router, dialog, dateAdapter, BsService, service, _projectunplanned, _Todoproject, _MoreDetails, route) {
        this.notifyService = notifyService;
        this.ProjectTypeService = ProjectTypeService;
        this.router = router;
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
        this.selected_Employee = [];
        this.maxlimit = true;
        // super(notifyService,ProjectTypeService,router,dialog,dateAdapter,BsService);
        this.CurrentUser_ID = localStorage.getItem('EmpNo');
        this.ObjSubTaskDTO = new src_app_Models_sub_task_dto__WEBPACK_IMPORTED_MODULE_0__.SubTaskDTO;
        this.ObjUserDetails = new src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_1__.UserDetailsDTO();
        this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
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
                    this.Owner_Empno = data['Owner_empno'];
                    // console.log(data,this.ProjectDeadLineDate,this.Owner_Empno,"back");
                });
            }
        });
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
    }
    GetAllEmployeesForAssignDropdown() {
        this.ownerArr = [];
        let obj = {
            pagenumber: 1,
            Emp_No: this.CurrentUser_ID,
            Mode: 'AssignedTask'
        };
        this.service._GetCompletedProjects(obj).subscribe((data) => {
            this._EmployeeListForDropdown = JSON.parse(data[0]['EmployeeList']);
            this._EmployeeListForDropdown.forEach(element => {
                if (this.Current_user_ID != this.Owner_Empno) {
                    if (element.Emp_No == this.Current_user_ID) {
                        this.CurrentUser_Name = element.DisplayName;
                        this.ownerArr.push(this.CurrentUser_Name);
                    }
                    if (element.Emp_No == this.Owner_Empno) {
                        this.ownerName = element.DisplayName;
                        this.ownerArr.push(this.ownerName);
                    }
                }
                else if (this.Current_user_ID == this.Owner_Empno) {
                    if (element.Emp_No == this.Owner_Empno) {
                        this.ownerName = element.DisplayName;
                        this.ownerArr.push(this.ownerName);
                    }
                }
            });
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
    onFilterChange(event) {
        this.filterText = event;
        this.GetProjectsByUserName();
    }
    ProjectOnSelect() {
        // this.selectedProjectCode = obj['Project_Code'];
        this.selectedProjectCode = this.selectedProjectCodelist;
        this.service.GetDeadlineByProjectCode(this.selectedProjectCode).subscribe(data => {
            this.ProjectDeadLineDate = data["DeadLine"];
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
        this.selectedEmpNo = obj;
    }
    EmployeeOnDeselect(obj) {
        this.selectedEmpNo = null;
    }
    alertMaxAllocation() {
        if (this._StartDate == null || this._EndDate == null) {
            this._message = "Start Date/End date missing!!";
        }
        else {
            var Difference_In_Time = this._StartDate.getTime() - this._EndDate.getTime();
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            this.maxAllocation = (-Difference_In_Days) * 10 / 1;
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
            this.ownerNo = null;
        }
        else {
            if (this.owner == this.CurrentUser_Name) {
                this.ownerNo = this.Current_user_ID;
            }
            else if (this.owner == this.ownerName) {
                this.ownerNo = this.Owner_Empno;
            }
        }
        console.log(this.ownerNo);
        if (this._MasterCode == null) {
            this.ObjSubTaskDTO.MasterCode = this.selectedProjectCode;
            this._MasterCode = this.selectedProjectCode;
        }
        else {
            this.ObjSubTaskDTO.MasterCode = this._MasterCode;
        }
        this.service._GetNewProjectCode(this.ObjSubTaskDTO).subscribe(data => {
            // debugger
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
            var datestrStart = moment__WEBPACK_IMPORTED_MODULE_3__(this._StartDate).format();
            var datestrEnd = moment__WEBPACK_IMPORTED_MODULE_3__(this._EndDate).format();
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
            fd.append("Owner", this.ownerNo);
            if (this.ObjSubTaskDTO.Duration != null) {
                fd.append("Duration", this.ObjSubTaskDTO.Duration.toString());
            }
            else {
                this.ObjSubTaskDTO.Duration = 0;
            }
            this.service._InsertNewSubtask(fd).subscribe(data => {
                console.log(data, "action data");
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
                else {
                    this._MoreDetails.CallOnSubmitAction();
                    this.Clear_Feilds();
                    this.closeInfo();
                    this._inputAttachments = [];
                }
            });
            // setTimeout(this._projectunplanned.CallOnSubmitCategory, 3000);
            // this._projectunplanned.CallOnSubmitCategory();
            // setTimeout(this._Todoproject.CallOnSubmitAction, 3000);
            // setTimeout(function () {
            //   this.loadsubcateg();
            // }, 3000);
            // this._Todoproject.CallOnSubmitAction();
            // setTimeout(this._MoreDetails.CallOnSubmitAction, 3000);
            // this._MoreDetails.CallOnSubmitAction();
        });
        this.notifyService.showInfo("Created Successfully", "Action");
    }
    convert(str) {
        var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
        return [day, mnth, date.getFullYear()].join("-");
    }
    sweetAlert() {
        var datestrEnd = (new Date(this._EndDate)).toUTCString();
        var datedead = (new Date(this.ProjectDeadLineDate)).toUTCString();
        const dateOne = new Date(this._EndDate);
        const dateTwo = new Date(this.ProjectDeadLineDate);
        // console.log(dateOne)
        // console.log(dateTwo)
        if (dateTwo <= dateOne) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: 'Action DeadLine is Greater then Main Project DeadLine ?',
                text: 'Do you Want to Continue For Selection Of Date After Main Project DeadLine!!',
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
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Cancelled', 'Action is Not Created', 'error');
                }
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
ActionToProjectComponent.ɵfac = function ActionToProjectComponent_Factory(t) { return new (t || ActionToProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_5__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_13__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_6__.BsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_5__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_LayoutDashboard_project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_7__.ProjectUnplannedTaskComponent), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_8__.ToDoProjectsComponent), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_more_details_more_details_component__WEBPACK_IMPORTED_MODULE_9__.MoreDetailsComponent), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute)); };
ActionToProjectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ActionToProjectComponent, selectors: [["app-action-to-project"]], decls: 87, vars: 30, consts: [[1, "p-4"], [1, "offcanvas-header", "d-flex", "align-items-center", "justify-content-between", "pb-2", "mb-3", "brdr-b"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-icon", "btn-hover-primary", "closebtn", 3, "click"], [1, "fa", "fa-times"], [1, "font-weight-bold", "m-0"], [1, "pro-nm", "text-info", "mb-2"], [1, "form-group", 3, "hidden"], [1, "text-danger"], ["reuired", "", "placeholder", "Select Project", 3, "ngModel", "change", "ngModelChange"], ["action", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["style", "color:red", 4, "ngIf"], [1, "form-group"], ["required", "", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["required", "", 1, "form-control", 2, "height", "100px", 3, "ngModel", "ngModelChange"], ["description", "ngModel"], [1, "form-group", "text-dark-50", "w-75px", "flex-grow-1", "brdng-0"], ["reuired", "", "placeholder", "Select Employee", 3, "ngModel", "Change", "ngModelChange"], ["assign", "ngModel"], ["reuired", "", "placeholder", "Select Owner", 3, "ngModel", "ngModelChange"], ["ownerno", "ngModel"], [1, "d-flex", "gap-1"], [1, "form-group", "flex-1"], [1, "input-group", 3, "click"], ["matInput", "", "required", "", "placeholder", "Start Date", 1, "form-control", 3, "matDatepicker", "min", "ngModel", "click", "ngModelChange"], ["startdate", "ngModel"], [1, "input-group-text", "p-0"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["class", "form-group flex-1", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["required", "", "type", "number", "min", "0", "oninput", "validity.valid||(value='');", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["allocated", "ngModel"], ["for", "exampleFormControlFile1"], ["aria-label", "With textarea", 1, "form-control", 2, "height", "111px", 3, "ngModel", "ngModelChange"], [1, "custom-file", "pl-1"], ["type", "file", "id", "uploadFile", "accept", "application/pdf", 1, "form-control-file", 3, "change"], [1, "form-group", "mb-1"], ["type", "submit", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], [3, "value"], [2, "color", "red"], [1, "input-group"], ["matInput", "", "required", "", "placeholder", "End Date", 1, "form-control", 3, "matDatepicker", "min", "ngModel", "click", "ngModelChange"], ["Enddate", "ngModel"], ["picker2", ""], ["matInput", "", "required", "", "placeholder", "End Date", 1, "form-control", 3, "matDatepicker", "matDatepickerFilter", "ngModel", "click", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function ActionToProjectComponent_Template(rf, ctx) { if (rf & 1) {
        const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ActionToProjectComponent_Template_a_click_2_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Action To Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 6)(9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Select Project :");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ng-select", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function ActionToProjectComponent_Template_ng_select_change_13_listener() { return ctx.ProjectOnSelect(); })("ngModelChange", function ActionToProjectComponent_Template_ng_select_ngModelChange_13_listener($event) { return ctx.selectedProjectCodelist = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, ActionToProjectComponent_ng_option_15_Template, 2, 2, "ng-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, ActionToProjectComponent_span_16_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 12)(18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, " Action Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ActionToProjectComponent_Template_input_ngModelChange_22_listener($event) { return ctx.Sub_ProjectName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, ActionToProjectComponent_span_24_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 12)(26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Description :");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "textarea", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ActionToProjectComponent_Template_textarea_ngModelChange_30_listener($event) { return ctx._Description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, ActionToProjectComponent_span_32_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 17)(34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, " Assign To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "ng-select", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("Change", function ActionToProjectComponent_Template_ng_select_Change_40_listener($event) { return ctx.EmployeeOnSelect($event); })("ngModelChange", function ActionToProjectComponent_Template_ng_select_ngModelChange_40_listener($event) { return ctx.selectedEmpNo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](42, ActionToProjectComponent_ng_option_42_Template, 2, 2, "ng-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, ActionToProjectComponent_span_43_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 17)(45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "Action Owner : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "ng-select", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ActionToProjectComponent_Template_ng_select_ngModelChange_48_listener($event) { return ctx.owner = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](50, ActionToProjectComponent_ng_option_50_Template, 2, 2, "ng-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 22)(52, "div", 23)(53, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "Start Date : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ActionToProjectComponent_Template_div_click_57_listener() { return ctx.startdatechecker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ActionToProjectComponent_Template_input_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r44); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](63); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r13.open()); })("ngModelChange", function ActionToProjectComponent_Template_input_ngModelChange_58_listener($event) { return ctx._StartDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](61, "mat-datepicker-toggle", 28)(62, "mat-datepicker", null, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](64, ActionToProjectComponent_span_64_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](65, ActionToProjectComponent_div_65_Template, 13, 5, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](66, ActionToProjectComponent_div_66_Template, 12, 4, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 12)(68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "Allocated Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](70, ActionToProjectComponent_span_70_Template, 2, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ActionToProjectComponent_Template_input_ngModelChange_71_listener($event) { return ctx._allocated = $event; })("click", function ActionToProjectComponent_Template_input_click_71_listener() { return ctx.alertMaxAllocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](73, ActionToProjectComponent_span_73_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](74, ActionToProjectComponent_span_74_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](75, ActionToProjectComponent_span_75_Template, 5, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](76, ActionToProjectComponent_span_76_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "div", 12)(78, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "textarea", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function ActionToProjectComponent_Template_textarea_ngModelChange_80_listener($event) { return ctx._remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "div", 12)(82, "div", 36)(83, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function ActionToProjectComponent_Template_input_change_83_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](85, ActionToProjectComponent_button_85_Template, 2, 1, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](86, ActionToProjectComponent_button_86_Template, 2, 1, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](63);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx._MainPrjectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx.ProjectsDropdownBoolean);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.selectedProjectCodelist);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx._projcode == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.Sub_ProjectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx._subname == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx._Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx._desbool == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.selectedEmpNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx._EmployeeListForDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx._selectemp == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.owner);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.ownerArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matDatepicker", _r13)("min", ctx.disablePreviousDate)("ngModel", ctx._StartDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx._sdate == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx._StartDate != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx._StartDate == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedEmpNo == ctx.Current_user_ID);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx._allocated);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedEmpNo == ctx.Current_user_ID && _r18.touched && _r18.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx._allocated > ctx.maxAllocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx._allocated > ctx.maxAllocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx._StartDate == null || ctx._EndDate == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx._remarks);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedEmpNo == ctx.Current_user_ID);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedEmpNo != ctx.Current_user_ID);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerToggle, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["ɵr"]], styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n  -moz-appearance: textfield;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi10by1wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7QUFFQSxZQUFZO0FBQ1o7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoiYWN0aW9uLXRvLXByb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIEZpcmVmb3ggKi9cclxuaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxufVxyXG4iXX0= */"] });


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
//# sourceMappingURL=src_app__LayoutDashboard_action-to-project_action-to-project_module_ts.js.map