"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["src_app__LayoutDashboard_project-assign-task_project-assign-task_module_ts"],{

/***/ 41743:
/*!********************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-assign-task/project-assign-task-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectAssignTaskRoutingModule": () => (/* binding */ ProjectAssignTaskRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _project_assign_task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-assign-task.component */ 75092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




//import { ProjectAssignTaskModule } from './project-assign-task.module';
const routes = [{
        path: '', component: _project_assign_task_component__WEBPACK_IMPORTED_MODULE_0__.ProjectAssignTaskComponent,
        children: [
            {
                path: 'projectinfo/:projectcode',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_amcharts_amcharts4_charts_js-node_modules_amcharts_amcharts4_core_js"), __webpack_require__.e("default-src_app__LayoutDashboard_projects-summary_projects-summary_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_project-info_truncate_pipe_ts-src_app__LayoutDashboard_to-do-5edd93"), __webpack_require__.e("default-src_app__Services_link_service_ts-node_modules_underscore_modules_index-all_js"), __webpack_require__.e("default-src_app__LayoutDashboard_project-info_project-info_module_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_portfolio-projects_portfolio-projects_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_view-dashboard-projects_view-dashboard-projects_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_notification_notification_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_projects-add_projects-add_component_ts"), __webpack_require__.e("src_app__LayoutDashboard_projects-summary_sort_directive_ts-src_app__Services_approvals_servi-03427c1")]).then(__webpack_require__.bind(__webpack_require__, /*! ../project-info/project-info.module */ 71784)).then(m => m.ProjectInfoModule)
            },
            {
                path: 'ActionToAssign',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__Services_calender_service_ts-node_modules_kolkov_angular-editor___ivy_ngcc__-f69c55"), __webpack_require__.e("default-src_app__LayoutDashboard_meeting-report_meeting-report_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_action-to-assign_action-to-assign_module_ts"), __webpack_require__.e("src_app__Services_link_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../action-to-assign/action-to-assign.module */ 36833)).then(m => m.ActionToAssignModule),
            }
        ]
    }];
class ProjectAssignTaskRoutingModule {
}
ProjectAssignTaskRoutingModule.ɵfac = function ProjectAssignTaskRoutingModule_Factory(t) { return new (t || ProjectAssignTaskRoutingModule)(); };
ProjectAssignTaskRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProjectAssignTaskRoutingModule });
ProjectAssignTaskRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProjectAssignTaskRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 75092:
/*!***************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-assign-task/project-assign-task.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectAssignTaskComponent": () => (/* binding */ ProjectAssignTaskComponent)
/* harmony export */ });
/* harmony import */ var src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_Models/completed-projects-dto */ 60808);
/* harmony import */ var src_app_Models_assigntask_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/assigntask-dto */ 60065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ 77585);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);











function ProjectAssignTaskComponent_li_61_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_li_61_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const item_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.OnAssigntaskClick(item_r6.Employee, item_r6.End_Date, item_r6.ProjectType, item_r6.Start_Date, item_r6.Task_Description, item_r6.Task_Name, item_r6.AssignedBy, item_r6.CreatedBy, item_r6.IsActive, item_r6.Reject, item_r6.Reject_Comments, item_r6.Status, item_r6.Reference, item_r6.ProjectDays, item_r6.Creation_Date, item_r6.SubmissionType, item_r6.Modified_DT, item_r6.Project_Code, item_r6.Remarks, item_r6.FileName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 98)(5, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 98)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r6.Task_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r6.Employee);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](9, 5, item_r6.Start_Date, "dd-MM-yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r6.ProjectType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](15, 8, item_r6.End_Date, "dd-MM-yyyy"), "");
} }
function ProjectAssignTaskComponent_span_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ProjectDays, " days");
} }
function ProjectAssignTaskComponent_span_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.SubmissionType, "");
} }
function ProjectAssignTaskComponent_span_125_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_span_125_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.LoadDocument(ctx_r9.Reference)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.FileName);
} }
function ProjectAssignTaskComponent_span_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.Remarks);
} }
function ProjectAssignTaskComponent_div_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 105)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r11.name, "");
} }
const _c0 = function (a0, a1, a2) { return { "text-success": a0, "text-warning": a1, "text-danger": a2 }; };
class ProjectAssignTaskComponent {
    constructor(ProjectTypeService, notifyService, dateAdapter, http, router, BsService) {
        this.ProjectTypeService = ProjectTypeService;
        this.notifyService = notifyService;
        this.dateAdapter = dateAdapter;
        this.http = http;
        this.router = router;
        this.BsService = BsService;
        this.dropdownList = [];
        this.selectedItems = [];
        this.selectedItems_Employee = [];
        this.dropdownSettings = {};
        this.dropdownSettings_EMP = {};
        this.paragraph_msg = false;
        this._DisplayForm = true;
        this.Div_TaskDetails = true;
        this.selectedEmployee = "";
        this.disablePreviousDate = new Date();
        this.disableAfterStartDate = new Date();
        this.ProjectTypelist = [];
        this.FilteredText = "";
        this.ProjectCode = null;
        this._taskName = "";
        this._description = "";
        this._DemoVersion = true;
        this.DemoTasksList = [
            {
                id: 1,
                name: 'Creative Planner Single User Login.'
            },
            {
                id: 2,
                name: 'Meeting With Rafi Sir.'
            },
            {
                id: 3,
                name: 'Merge Multiple Apps Organisation level.'
            }
        ];
        this._ObjCompletedProj = new src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_0__.CompletedProjectsDTO();
        this._ObjAssigntaskDTO = new src_app_Models_assigntask_dto__WEBPACK_IMPORTED_MODULE_1__.AssigntaskDTO();
        this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
        this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
        this.disableAfterStartDate.setDate(this.disablePreviousDate.getDate());
    }
    ngOnInit() {
        this.CurrentUser_ID = localStorage.getItem('EmpNo');
        this.GetAssignTask();
        this.dropdownSettings = {
            singleSelection: true,
            idField: 'Exec_BlockNo',
            textField: 'Exec_BlockName',
            itemsShowLimit: 1,
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.dropdownSettings_EMP = {
            searchAutofocus: true,
            singleSelection: true,
            idField: 'Emp_No',
            textField: 'DisplayName',
            itemsShowLimit: 1,
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
    }
    GetAssignTask() {
        this.Div_TaskDetails = true;
        this.FilteredText = "ALL";
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.Mode = 'AssignedTask';
        this._ObjCompletedProj.Filter = null;
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            // console.log("Data---->", data);
            this.Assigntask_List = JSON.parse(data[0]['JsonData_Json']);
            // console.log("On First Load---->", this.Assigntask_List);
            this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
            this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
            //console.log(this.EmployeeList);
            this.countAssigned = (data[0]['CountAssigned']);
            // console.log("Count--->",this.countAssigne)
            if (this.countAssigned == 0) {
                this.NotfoundAssignedTask = "Sorry, No records found ! ";
                this.paragraph_msg = true;
            }
            else {
                this.NotfoundAssignedTask = "";
                this.paragraph_msg = false;
            }
            this.countAccepted = (data[0]['CountAccepted']);
            this.countCompleted = (data[0]['CountCompleted']);
            this.countInprocess = (data[0]['CountInProcess']);
            this.countNotStarted = (data[0]['CountNotStarted']);
            this.countRejected = (data[0]['CountRejected']);
        });
    }
    GetAccepted() {
        this.Div_TaskDetails = true;
        this.FilteredText = "Accepted";
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.Mode = 'AssignedTask';
        this._ObjCompletedProj.Filter = 'Accepted';
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            // console.log("Data---->", data);
            this.Assigntask_List = JSON.parse(data[0]['JsonData_Json']);
            //console.log("On Second Load---->", this.Assigntask_List);
            this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
            this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
            //console.log(this.EmployeeList);
            this.countAssigned = (data[0]['CountAssigned']);
            // console.log("Count--->",this.countAssigne)
            if (this.countAssigned == 0) {
                this.NotfoundAssignedTask = "Sorry, No records found ! ";
                this.paragraph_msg = true;
            }
            else {
                this.NotfoundAssignedTask = "";
                this.paragraph_msg = false;
            }
            this.countAccepted = (data[0]['CountAccepted']);
            this.countCompleted = (data[0]['CountCompleted']);
            this.countInprocess = (data[0]['CountInProcess']);
            this.countNotStarted = (data[0]['CountNotStarted']);
            this.countRejected = (data[0]['CountRejected']);
        });
    }
    GetInProcess() {
        this.Div_TaskDetails = true;
        this.FilteredText = "In Process";
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.Mode = 'AssignedTask';
        this._ObjCompletedProj.Filter = 'InProcess';
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            // console.log("Data---->", data);
            this.Assigntask_List = JSON.parse(data[0]['JsonData_Json']);
            //  console.log("On Second Load---->", this.Assigntask_List);
            this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
            this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
            //console.log(this.EmployeeList);
            this.countAssigned = (data[0]['CountAssigned']);
            // console.log("Count--->",this.countAssigne)
            if (this.countAssigned == 0) {
                this.NotfoundAssignedTask = "Sorry, No records found ! ";
                this.paragraph_msg = true;
            }
            else {
                this.NotfoundAssignedTask = "";
                this.paragraph_msg = false;
            }
            this.countAccepted = (data[0]['CountAccepted']);
            this.countCompleted = (data[0]['CountCompleted']);
            this.countInprocess = (data[0]['CountInProcess']);
            this.countNotStarted = (data[0]['CountNotStarted']);
            this.countRejected = (data[0]['CountRejected']);
        });
    }
    GetRejected() {
        this.Div_TaskDetails = true;
        this.FilteredText = "Rejected";
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.Mode = 'AssignedTask';
        this._ObjCompletedProj.Filter = 'Rejected';
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            // console.log("Data---->", data);
            this.Assigntask_List = JSON.parse(data[0]['JsonData_Json']);
            //console.log("On Second Load---->", this.Assigntask_List);
            this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
            this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
            //console.log(this.EmployeeList);
            this.countAssigned = (data[0]['CountAssigned']);
            // console.log("Count--->",this.countAssigne)
            if (this.countAssigned == 0) {
                this.NotfoundAssignedTask = "Sorry, No records found ! ";
                this.paragraph_msg = true;
            }
            else {
                this.NotfoundAssignedTask = "";
                this.paragraph_msg = false;
            }
            this.countAccepted = (data[0]['CountAccepted']);
            this.countCompleted = (data[0]['CountCompleted']);
            this.countInprocess = (data[0]['CountInProcess']);
            this.countNotStarted = (data[0]['CountNotStarted']);
            this.countRejected = (data[0]['CountRejected']);
        });
    }
    GetNotStarted() {
        this.Div_TaskDetails = true;
        this.FilteredText = "Not Started";
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.Mode = 'AssignedTask';
        this._ObjCompletedProj.Filter = 'NotStarted';
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            // console.log("Data---->", data);
            this.Assigntask_List = JSON.parse(data[0]['JsonData_Json']);
            //console.log("On Second Load---->", this.Assigntask_List);
            this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
            this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
            //console.log(this.EmployeeList);
            this.countAssigned = (data[0]['CountAssigned']);
            // console.log("Count--->",this.countAssigne)
            if (this.countAssigned == 0) {
                this.NotfoundAssignedTask = "Sorry, No records found ! ";
                this.paragraph_msg = true;
            }
            else {
                this.NotfoundAssignedTask = "";
                this.paragraph_msg = false;
            }
            this.countAccepted = (data[0]['CountAccepted']);
            this.countCompleted = (data[0]['CountCompleted']);
            this.countInprocess = (data[0]['CountInProcess']);
            this.countNotStarted = (data[0]['CountNotStarted']);
            this.countRejected = (data[0]['CountRejected']);
        });
    }
    Search() {
        if (this._AssignTaskSearch != "") {
            this.Assigntask_List = this.Assigntask_List.filter(res => {
                return res.Task_Name.toLocaleLowerCase().match(this._AssignTaskSearch.toLocaleLowerCase());
            });
        }
        else if (this._AssignTaskSearch == "") {
            this.ngOnInit();
        }
    }
    ProjectTypeOnSelect(obj) {
        this.selectedProjectType = obj['Exec_BlockNo'];
    }
    ProjectTypeOnDeselect(obj) {
        this.selectedProjectType = "Not Selected";
    }
    EmpOnSelect(obj) {
        this.selectedEmployee = obj['Emp_No'];
    }
    EmpOnDeselect(obj) {
        this.selectedEmployee = "Not Selected";
    }
    search(value) {
        value = this.searchText;
    }
    ShowForm() {
        // this.paragraph_msg = true;
        // this._DisplayForm = false;
        // this.Div_TaskDetails = true;
        // this._DemoVersion = true;
        // let typeoftask: any = "IFAT";
        // this.BsService.setNewTypeofTask(typeoftask);
        // this.router.navigate(["AssignTask/ActionToAssign/"]);
        // document.getElementById("mysideInfobar").style.width = "60%";
        // document.getElementById("rightbar-overlay").style.display = "block";
        this.notifyService.showError("Development under maintainance", "Failed");
    }
    closeInfo() {
        this.Clearfeilds();
        document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    }
    OnAssigntaskClick(Emp, Edt, Ptype, Sdt, TDesc, TName, ABy, CBy, IsAct, Reject, RejCommts, Status, Ref, Dur, Cr_DT, Sub_type, Mdy_DT, pCode, Remarks, FileName) {
        this.paragraph_msg = true;
        this.Div_TaskDetails = false;
        this._DisplayForm = true;
        this.Task_Name = TName;
        this.Task_Description = TDesc;
        this.Start_Date = Sdt;
        this.End_Date = Edt;
        this.ProjectType = Ptype;
        this.Employee = Emp;
        this.AssignedBy = ABy;
        this.CreatedBy = CBy;
        this.Isactive = IsAct;
        this.Rejected = Reject;
        this.RejectedComment = RejCommts;
        this.Status = Status;
        this.ProjectDays = Dur;
        this.Reference = Ref;
        this.Remarks = Remarks;
        this.ModifyDate = Mdy_DT;
        this.Creation_Date = Cr_DT;
        this.SubmissionType = Sub_type;
        this.ProjectCode = pCode;
        this.FileName = FileName;
        this.closeInfo();
    }
    onFileChange(filepath) {
        this._fileName = filepath.replace("C:\\fakepath\\", "");
    }
    LoadDocument(url) {
        this.src = url;
        var myWindow = window.open(url);
        myWindow.focus();
    }
    // OnSubmit() {
    //   if (this._taskName != "") {
    //     this._ObjAssigntaskDTO.TypeOfTask = "IFAT";
    //     this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
    //     this._ObjAssigntaskDTO.ProjectType = this.selectedProjectType;
    //     this._ObjAssigntaskDTO.TaskName = this._taskName;
    //     this._ObjAssigntaskDTO.TaskDescription = this._description;
    //     this._ObjAssigntaskDTO.AssignTo = this.selectedEmployee;
    //     this._ObjAssigntaskDTO.StartDate = this._StartDate;
    //     this._ObjAssigntaskDTO.EndDate = this._EndDate;
    //     this._ObjAssigntaskDTO.SubmissionType = this.SelectedSubmissionType;
    //     this._ObjAssigntaskDTO.Remarks = this._remarks;
    //     //Days Difference
    //     var Difference_In_Time = this._StartDate.getTime() - this._EndDate.getTime();
    //     var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    //     this._ObjAssigntaskDTO.ProjectDays = (-Difference_In_Days);
    //     //this._ObjAssigntaskDTO.ProjectDays = this._ObjAssigntaskDTO.ProjectDays * 8 / 1;
    //     this._ObjAssigntaskDTO.Reference = this._fileName;
    //     this.ProjectTypeService._InsertAssignTaskServie(this._ObjAssigntaskDTO).subscribe(
    //       (data) => {
    //         this.GetAssignTask();
    //         this.notifyService.showSuccess("", "Inserted Successfully");
    //         this.closeInfo();
    //       });
    //   }
    //   else {
    //     this.notifyService.showInfo("Empty Inputs Found,   ...", "Try Again");
    //   }
    // }
    Clearfeilds() {
        this.selectedProjectType = "";
        this._taskName = "";
        this._description = "";
        this.selectedEmployee = "";
        this._StartDate = null;
        this._EndDate = null;
        this.SelectedSubmissionType = "";
        this._fileName = "";
        this.selectedItems = [];
        this.selectedItems_Employee = [];
    }
    DemoView() {
        this.paragraph_msg = true;
        this.Div_TaskDetails = true;
        this._DemoVersion = false;
        this.NotfoundAssignedTask = "";
        this.closeInfo();
    }
    EnterSubmit(_Demotext) {
        if (_Demotext == "") {
            this.notifyService.showError("Plz Enter Task Name", "Failed To Add !");
        }
        else {
            let NewDemoTasksList = {
                id: 4,
                name: _Demotext,
            };
            this.DemoTasksList.push(NewDemoTasksList);
            this.DemoTasksList = this.DemoTasksList;
            this._Demotext = "";
            this.notifyService.showSuccess("Successfully Added", "Add Message");
        }
    }
    onFileSelected(event) {
        if (event.target.files.length > 0) {
            this._fileName = event.target.files[0]['name'];
            // console.log(this.filename22)
        }
    }
    submit() {
        const formData = new FormData();
        formData.append('file', this.filename22);
        //"http://localhost:4200/backend/dashboard"
        let url = "http://localhost:1221/Uploads";
        let angularUrl = "http://localhost:4200/Uploads";
        this.http.post(url, formData)
            .subscribe(res => {
            console.log(res);
        });
    }
    ProjectInfoDetails() {
        document.getElementById("mysideInfobar").classList.add("kt-quick-panel--on");
        document.getElementById("rightbar-overlay").style.display = "block";
        this.router.navigate(["AssignTask/projectinfo", this.ProjectCode]);
    }
    moreDetails() {
        let name = 'MoreDetails';
        var url = document.baseURI + name;
        var myurl = `${url}/${this.ProjectCode}`;
        var myWindow = window.open(myurl, this.ProjectCode);
        myWindow.focus();
    }
}
ProjectAssignTaskComponent.ɵfac = function ProjectAssignTaskComponent_Factory(t) { return new (t || ProjectAssignTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_2__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_6__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_4__.BsServiceService)); };
ProjectAssignTaskComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProjectAssignTaskComponent, selectors: [["app-project-assign-task"]], inputs: { min: "min" }, decls: 187, vars: 44, consts: [[1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height", "side_view"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi", "mt-3"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title", "mr-2"], [1, "fab", "fa-buffer", "mr-2", "text-primary"], [1, "text-muted", "mt-2"], [1, "kt-header__topbar", "pr-0"], [1, "kt-widget19__stats", "text-center", "px-4", "m-auto"], [1, "btn", "btn-primary", "btn-sm", "btn-bold", "cust-btn", 3, "click"], [1, "fas", "fa-plus", "mr-2"], [1, "kt-widget19__stats", "text-center", "mr-1", "m-auto"], [1, "btn-group"], ["aria-expanded", "true", "data-toggle", "dropdown", 1, "btn", "btn-info", "btn-sm", "cust-btn", "dropdown-toggle", "waves-effect", "show"], [1, "fas", "fa-ellipsis-v", "mr-2"], [1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-header"], [1, "fas", "fa-filter", "mr-2"], [1, "dropdown-item", 3, "click"], [1, "kt-badge", "kt-badge--primary", "kt-badge--inline", "mr-2"], [1, "kt-drop-text"], [1, "kt-badge", "kt-badge--success", "kt-badge--inline", "mr-2"], [1, "kt-badge", "kt-badge--danger", "kt-badge--inline", "mr-2"], [1, "kt-badge", "kt-badge--warning", "kt-badge--inline", "mr-2"], [1, "col-lg-3", "p-0"], [1, "card", "shadow-sm", "brdr-r-0"], [1, "card-header"], ["type", "search", "placeholder", "Search for assigned task..", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], [1, "d-none"], [1, "text-primary"], [1, "sidebar", "pr-2"], [1, "scrollbar"], [1, "side-bar-box"], [4, "ngFor", "ngForOf"], [1, "col-lg-9", "p-0"], [2, "color", "lightgray", "font-size", "large", 3, "hidden"], [2, "margin", "0px", "color", "lightgrey"], [1, "mt-0", "card", "border-left-0", "shadow-sm", "scrollbar-rt", 3, "hidden"], [1, "subtask-list"], [1, "kt-widget12"], [1, "kt-widget12__content"], [1, "d-flex", "justify-content-between", "flex-wrap", 2, "border-bottom", "1px solid #eee"], [1, "text-right", "col-lg-12", 3, "hidden"], ["title", "More Infomation", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fa", "fa-chart-bar"], ["title", "Project Infomation", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fa", "fa-info-circle", "mr-0"], ["title", "Add Assign Task", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fas", "fa-plus", "mr-0"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1"], [1, "fas", "fa-sort-alpha-up", "fa-lg", "mr-0"], [1, "text-info", "strong", "h5", "mt-3", "ml-3"], [1, "mb-3", "mt-1", "pl-15px", "h5", 2, "color", "grey", "font-size", "small"], ["id", "Span_DescName"], [1, "mb-1", "pl-15px"], [1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], [1, "fas", "fa-project-diagram", "text-muted", "mr-1"], [1, "mr-3", "text-nowrap", "mb-2", "d-inline-block", 3, "ngClass"], [1, "fas", "fa-calendar-alt", "text-muted", "mr-1"], [1, "fas", "fa-clock", "text-muted", "mr-1"], ["class", "my-1 fs-4 kt-widget12__value", 4, "ngIf"], [1, "text-muted", "mr-1"], ["class", "mr-3 text-nowrap mb-2 d-inline-block", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Remarks!", "class", "mr-3 text-nowrap mb-2 d-inline-block", 4, "ngIf"], [3, "hidden"], [1, "scrollbar", 3, "hidden"], ["class", "assigned_task d-flex justify-content-between", 4, "ngFor", "ngForOf"], [1, "add_assigned_task", 3, "hidden"], [1, "form-group", "mb-0"], [1, "input-group"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], [1, "la", "la-plus", "mr-0"], ["type", "text", "placeholder", "Add Task", "aria-describedby", "basic-addon1", 1, "form-control", "add_assign_task_input", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "la", "la-calendar-o"], ["id", "basic-addon1", "data-toggle", "modal", "data-target", "#AssignTo", 1, "input-group-text", "curser-pointer"], [1, "la", "la-user"], ["id", "basic-addon1", "data-toggle", "modal", "data-target", "#AttachmentModal", 1, "input-group-text"], [1, "la", "la-paperclip"], ["id", "AssignTo", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary"], ["id", "AttachmentModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["href", "#"], [1, "la", "la-angle-right"], ["id", "rightbar-overlay", 3, "click"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], [3, "click"], [1, "project-title", "mb-2"], [1, "d-flex", "justify-content-between"], [1, "mb-2"], [1, "my-1", "fs-4", "kt-widget12__value"], [1, "fas", "fa-file-pdf", "text-muted", "mr-1"], [1, "text-info", "curser-pointer", 3, "click"], ["data-toggle", "tooltip", "title", "Remarks!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], [1, "fas", "fa-registered", "text-muted", "mr-1"], [1, "assigned_task", "d-flex", "justify-content-between"], [1, "la", "la-check"], [1, "la", "la-star-o"], [1, "la", "la-trash"]], template: function ProjectAssignTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Assigned Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_button_click_14_listener() { return ctx.ShowForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Add Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 17)(22, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Filter Tasks :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_a_click_25_listener() { return ctx.GetAssignTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div")(27, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Total Assigned");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_a_click_31_listener() { return ctx.GetAccepted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div")(33, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Accepted");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_a_click_37_listener() { return ctx.GetRejected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div")(39, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_a_click_43_listener() { return ctx.GetNotStarted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div")(45, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Not Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 1)(50, "div", 26)(51, "div", 27)(52, "div", 28)(53, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectAssignTaskComponent_Template_input_ngModelChange_53_listener($event) { return ctx._AssignTaskSearch = $event; })("input", function ProjectAssignTaskComponent_Template_input_input_53_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Filtered : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 32)(59, "div", 33)(60, "ul", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](61, ProjectAssignTaskComponent_li_61_Template, 16, 11, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 36)(63, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Select the project from left panel to display result here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "h4", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 39)(68, "div", 40)(69, "div", 41)(70, "div", 42)(71, "div", 43)(72, "div", 44)(73, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_button_click_73_listener() { return ctx.moreDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](74, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_button_click_75_listener() { return ctx.ProjectInfoDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_button_click_77_listener() { return ctx.ShowForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](78, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](80, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 2)(82, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "p", 54)(86, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "p", 56)(89, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](90, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "span", 59)(94, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](97, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](100, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](102, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](105, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](107, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](108, ProjectAssignTaskComponent_span_108_Template, 2, 1, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, ProjectAssignTaskComponent_span_109_Template, 2, 1, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "p", 56)(111, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](112, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](116, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](120, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](123, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](125, ProjectAssignTaskComponent_span_125_Template, 5, 1, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](126, ProjectAssignTaskComponent_span_126_Template, 4, 1, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "h4", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, "EP Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](130, ProjectAssignTaskComponent_div_130_Template, 9, 1, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "div", 69)(132, "div", 70)(133, "div", 71)(134, "div", 72)(135, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](136, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectAssignTaskComponent_Template_input_ngModelChange_137_listener($event) { return ctx._Demotext = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "div", 76)(139, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](140, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](142, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](144, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "div", 82)(146, "div", 83)(147, "div", 84)(148, "div", 85)(149, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "Responsible Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "div", 87)(152, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](153, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "div", 88)(155, "button", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](156, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "button", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](158, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "div", 91)(160, "div", 83)(161, "div", 84)(162, "div", 85)(163, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](164, "Responsible Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "div", 87)(166, "ul")(167, "li")(168, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](169, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](170, " Creative Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](171, "li")(172, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](173, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](174, " YR Global ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](175, "li")(176, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](177, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](178, " dr.CAFE Coffee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](179, "div", 88)(180, "button", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](181, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](182, "button", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](183, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](184, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_div_click_184_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](185, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](186, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.FilteredText);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.countAssigned);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.countAccepted);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.countRejected);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.countNotStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx._AssignTaskSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.FilteredText);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.Assigntask_List);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.paragraph_msg);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.NotfoundAssignedTask, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.Div_TaskDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.ProjectCode == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.Task_Name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.Task_Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.ProjectType);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](40, _c0, ctx.Status == "Accepted", ctx.Status == "Pending", ctx.Status == "Rejected"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](100, 31, ctx.Start_Date, "dd-MM-yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](105, 34, ctx.End_Date, "dd-MM-yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.SubmissionType == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.SubmissionType != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("By: ", ctx.AssignedBy, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("To : ", ctx.Employee, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("On : ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](123, 37, ctx.ModifyDate, "dd-MM-yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.FileName != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.Remarks != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx._DemoVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx._DemoVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.DemoTasksList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx._DemoVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx._Demotext);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".sidebar[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    \n    background-color: #fff;\n    \n}\n\n.scrollbar[_ngcontent-%COMP%] {\n    height: calc(100vh - 160px);\n    overflow-y: auto;\n}\n\n.scrollbar-rt[_ngcontent-%COMP%] {\n    height: calc(100vh - 99px);\n    overflow-y: auto;\n}\n\n.card.border-left-0[_ngcontent-%COMP%] {\n    border-radius: 0px 0.25rem 0.25rem 0px;\n}\n\n.brdr-r-0[_ngcontent-%COMP%] {\n    border-radius: 0.25rem 0px 0px 0.25rem;\n}\n\n.kt-widget19__stats[_ngcontent-%COMP%] {\n    margin-bottom: 0.7rem;\n}\n\n.cust-btn[_ngcontent-%COMP%] {\n    padding: 3px 7px;\n}\n\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    transition: transform .2s!important;\n    transform: scale(.95);\n    background: #f0f8ff;\n}\n\n#rightbar-overlay[_ngcontent-%COMP%] {\n    background-color: rgba(50, 58, 70, .2);\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    display: none;\n    z-index: 998;\n    transition: all .2s ease-out;\n}\n\n.pl-15px[_ngcontent-%COMP%]{\n        padding-left: 15px;\n}\n\n\n\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 6px;\n}\n\n\n\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: #f1f1f1;\n}\n\n\n\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #ccc;\n    border-radius: 10px;\n}\n\n\n\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #ccc;\n}\n\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    color: black;\n    padding: 10px 16px;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.sidebar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    background-color: #e0e0e0;\n    color: rgb(48, 46, 46);\n}\n\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\n    background-color: #f4f4f4;\n    color: rgb(48, 46, 46);\n}\n\n.sidebar[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n    color: #3c3c3c;\n    font-weight: 500;\n}\n\n.sidebar[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: #484848;\n}\n\ndiv.content[_ngcontent-%COMP%] {\n    margin-left: 200px;\n    padding: 1px 16px;\n    height: 1000px;\n}\n\n@media screen and (max-width: 700px) {\n    .sidebar[_ngcontent-%COMP%] {\n        width: 100%;\n        height: auto;\n        position: relative;\n    }\n    .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        float: left;\n    }\n    div.content[_ngcontent-%COMP%] {\n        margin-left: 0;\n    }\n}\n\n@media screen and (max-width: 400px) {\n    .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        text-align: center;\n        float: none;\n    }\n}\n\n\n\nh4[_ngcontent-%COMP%] {\n    font-size: 17px;\n}\n\nh5[_ngcontent-%COMP%] {\n    font-size: 15px;\n}\n\n.project-info-page[_ngcontent-%COMP%] {\n    letter-spacing: 0.4px;\n}\n\n.project-description[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #969696;\n    font-size: 13px;\n}\n\n.project-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #646464;\n    \n}\n\n.project-budget[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .project-duration[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    color: #969696;\n}\n\n.project-duration-bar[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n  .dropdown-list {\n    overflow: overlay;\n}\n\n\n\n.sideInfobar[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 999;\n    top: 0;\n    right: 0;\n    background-color: #ffffff;\n    overflow-x: hidden;\n    transition: 0.5s;\n    \n}\n\n.sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\n    background-color: #f5f6fc;\n}\n\n.sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: #333;\n    position: absolute;\n    top: 10px;\n    right: 25px;\n    font-size: 20px;\n    margin-left: 50px;\n}\n\n.info-icon-cir[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #5867dd;\n}\n\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%] {\n    border-bottom: 0.07rem dashed #dedede;\n    padding: 6px;\n}\n\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%] {\n    border-bottom: 0.07rem dashed rgba(0, 0, 0, 0.3);\n}\n\n\n\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%] {\n    font-weight: 600;\n}\n\n.sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%] {\n    width: 270px;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.side-bar-box[_ngcontent-%COMP%] {\n    list-style-type: none;\n    padding-left: 0px !important;\n}\n\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #f1f1f1;\n    font-weight: 400;\n}\n\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    border-bottom: none\n}\n\n.subtask-list[_ngcontent-%COMP%] {\n    display: flex;\n    border-bottom: 1px solid #f1f1f1;\n    padding: 7px 0 5px;\n}\n\n.subtask-list[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n}\n\n.subtask-radio[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    margin-right: 15px;\n    margin-top: 5px;\n}\n\n.subtask-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 12px;\n}\n\n.subtask-list[_ngcontent-%COMP%]   p.subtask-list-title[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: 500;\n}\n\n#accordionExample5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    background-color: transparent;\n    margin-top: 15px;\n}\n\n.accordion.accordion-svg-icon[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:last-child   .card-body[_ngcontent-%COMP%] {\n    padding-left: 0px;\n}\n\n.accordion.accordion-light[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]:after {\n    left: 0px !important;\n    font-weight: 600;\n    font-size: 1.3rem;\n}\n\n.accordion.accordion-light[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    padding-left: 25px;\n    font-size: 16px;\n}\n\n.text-Rejected[_ngcontent-%COMP%] {\n    color: #E6747A !important;\n}\n\n.text-underApproval[_ngcontent-%COMP%] {\n    color: #98c7bf !important;\n}\n\n.text-CompleteRejected[_ngcontent-%COMP%] {\n    color: #D83C3C !important;\n}\n\n.text-underApp[_ngcontent-%COMP%] {\n    color: #702c72e7 !important;\n}\n\n.text-Todo[_ngcontent-%COMP%] {\n    color: #45F495 !important;\n}\n\n.text-Completed[_ngcontent-%COMP%] {\n    color: #41D37B !important;\n}\n\ninput.largerCheckbox[_ngcontent-%COMP%] {\n    width: 13px;\n    height: 13px;\n}\n\n.textarea[_ngcontent-%COMP%] {\n    height: 381px;\n}\n\n.kt-checkbox[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    margin-bottom: inherit;\n}\n\n.assigned_task[_ngcontent-%COMP%] {\n    background-color: #fff;\n    padding: 10px;\n    box-shadow: 0 0 5px #ccc;\n    margin-bottom: 10px;\n}\n\n.assigned_task[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n    font-weight: 500;\n}\n\n.assigned_task[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .add_assigned_task[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: 700;\n    margin-right: 8px;\n    color: #646c9a;\n}\n\n.input-group-text[_ngcontent-%COMP%], .add_assign_task_input[_ngcontent-%COMP%] {\n    padding: 0.65rem 0.5rem;\n}\n\n.input-group[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: stretch;\n    width: 100% !important;\n}\n\n.input-group[_ngcontent-%COMP%] {\n    transition: transform .2s !important;\n}\n\n.add_assigned_task[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0px;\n    left: 8px;\n    right: 8px;\n}\n\n.add_assign_task_input[_ngcontent-%COMP%] {\n    height: calc(1.5em + 1.3rem + 8px);\n}\n\n.add_assigned_task[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   span.input-group-text[_ngcontent-%COMP%] {\n    padding-left: 2px;\n    padding-right: 5px;\n}\n\n.add_assigned_task[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight: 400;\n    margin-right: 0px;\n}\n\n.curser-pointer[_ngcontent-%COMP%] {\n    counter: pointer;\n}\n\nul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    padding-left: 0px;\n}\n\n.scrollbar[_ngcontent-%COMP%]   .assigned_task[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 50px;\n}\n\n.project-active[_ngcontent-%COMP%] {\n    background-color: #f1f1f1;\n}\n\n.kt-widget12[_ngcontent-%COMP%]   .kt-widget12__content[_ngcontent-%COMP%]   .kt-widget12__item[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n}\n\n.kt-widget19__stats[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtYXNzaWduLXRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7O0FBQ0E7UUFDUSxrQkFBa0I7QUFDMUI7O0FBRUEsVUFBVTs7QUFFVjtJQUNJLFVBQVU7QUFDZDs7QUFHQSxVQUFVOztBQUVWO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUdBLFdBQVc7O0FBRVg7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUdBLG9CQUFvQjs7QUFFcEI7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7QUFDSjs7QUFHQSxnQ0FBZ0M7O0FBRWhDO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFHQSxvQkFBb0I7O0FBRXBCO0lBQ0ksWUFBWTtJQUNaLFFBQVE7SUFDUixlQUFlO0lBQ2YsWUFBWTtJQUNaLE1BQU07SUFDTixRQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdEQUFnRDtBQUNwRDs7QUFHQTs7S0FFSzs7QUFFTDtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InByb2plY3QtYXNzaWduLXRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICAvKiB3aWR0aDogMzAwcHg7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG59XG5cbi5zY3JvbGxiYXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uc2Nyb2xsYmFyLXJ0IHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5OXB4KTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY2FyZC5ib3JkZXItbGVmdC0wIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMC4yNXJlbSAwLjI1cmVtIDBweDtcbn1cblxuLmJyZHItci0wIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDBweCAwcHggMC4yNXJlbTtcbn1cblxuLmt0LXdpZGdldDE5X19zdGF0cyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xufVxuXG4uY3VzdC1idG4ge1xuICAgIHBhZGRpbmc6IDNweCA3cHg7XG59XG5cbi5zaWRlLWJhci1ib3ggbGk6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcbiAgICBiYWNrZ3JvdW5kOiAjZjBmOGZmO1xufVxuXG4jcmlnaHRiYXItb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgNTgsIDcwLCAuMik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHotaW5kZXg6IDk5ODtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xufVxuLnBsLTE1cHh7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLyogd2lkdGggKi9cblxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA2cHg7XG59XG5cblxuLyogVHJhY2sgKi9cblxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cblxuLyogSGFuZGxlICovXG5cbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG5cbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuXG4uc2lkZWJhciBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaWRlYmFyIGEuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICAgIGNvbG9yOiByZ2IoNDgsIDQ2LCA0Nik7XG59XG5cbi5zaWRlYmFyIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgIGNvbG9yOiByZ2IoNDgsIDQ2LCA0Nik7XG59XG5cbi5zaWRlYmFyIC5wcm9qZWN0LXRpdGxlIHtcbiAgICBjb2xvcjogIzNjM2MzYztcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc2lkZWJhciAuZC1mbGV4IHAge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuZGl2LmNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgICBwYWRkaW5nOiAxcHggMTZweDtcbiAgICBoZWlnaHQ6IDEwMDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAuc2lkZWJhciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLnNpZGViYXIgYSB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICBkaXYuY29udGVudCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICAuc2lkZWJhciBhIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG59XG5cblxuLyogTW9yZSBEZXRhaWxzIENvbXBvbmVudHMgQ1NTICovXG5cbmg0IHtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5cbmg1IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5wcm9qZWN0LWluZm8tcGFnZSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xufVxuXG4ucHJvamVjdC1kZXNjcmlwdGlvbiAuZC1mbGV4IHNwYW4ge1xuICAgIGNvbG9yOiAjOTY5Njk2O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnByb2plY3QtZGVzY3JpcHRpb24gcCB7XG4gICAgY29sb3I6ICM2NDY0NjQ7XG4gICAgLyogZm9udC1zaXplOiAxNHB4OyAqL1xufVxuXG4ucHJvamVjdC1idWRnZXQgaDYsXG4ucHJvamVjdC1kdXJhdGlvbiBoNiB7XG4gICAgY29sb3I6ICM5Njk2OTY7XG59XG5cbi5wcm9qZWN0LWR1cmF0aW9uLWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZHJvcGRvd24tbGlzdCB7XG4gICAgb3ZlcmZsb3c6IG92ZXJsYXk7XG59XG5cblxuLyogPT09IFNpZGViYXIgPT09ICovXG5cbi5zaWRlSW5mb2JhciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgLyogcGFkZGluZy10b3A6IDYwcHg7ICovXG59XG5cbi5zaWRlSW5mb2JhciAua3QtcG9ydGxldF9faGVhZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcbn1cblxuLnNpZGVJbmZvYmFyIC5jbG9zZWJ0biB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDI1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uaW5mby1pY29uLWNpciB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNTg2N2RkO1xufVxuXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW0ge1xuICAgIGJvcmRlci1ib3R0b206IDAuMDdyZW0gZGFzaGVkICNkZWRlZGU7XG4gICAgcGFkZGluZzogNnB4O1xufVxuXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW0uZGFyayB7XG4gICAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG5cbi8qIC5rdC1pbmJveF9fZGF0ZXRpbWV7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIH0gKi9cblxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtIC5rdC13aWRnZXQxX19pbmZvIC5rdC13aWRnZXQxX190aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNpZGVJbmZvYmFyIC50aXRsZS1zaWRlYmFyIHtcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5zaWRlLWJhci1ib3gge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc2lkZS1iYXItYm94IGxpIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uc2lkZS1iYXItYm94IGxpOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmVcbn1cblxuLnN1YnRhc2stbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICBwYWRkaW5nOiA3cHggMCA1cHg7XG59XG5cbi5zdWJ0YXNrLWxpc3Q6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnN1YnRhc2stcmFkaW8ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uc3VidGFzay1saXN0IHAge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc3VidGFzay1saXN0IHAuc3VidGFzay1saXN0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuI2FjY29yZGlvbkV4YW1wbGU1IC5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uYWNjb3JkaW9uLmFjY29yZGlvbi1zdmctaWNvbiAuY2FyZDpsYXN0LWNoaWxkIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4uYWNjb3JkaW9uLmFjY29yZGlvbi1saWdodCAuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGU6YWZ0ZXIge1xuICAgIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5hY2NvcmRpb24uYWNjb3JkaW9uLWxpZ2h0IC5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnRleHQtUmVqZWN0ZWQge1xuICAgIGNvbG9yOiAjRTY3NDdBICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXVuZGVyQXBwcm92YWwge1xuICAgIGNvbG9yOiAjOThjN2JmICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LUNvbXBsZXRlUmVqZWN0ZWQge1xuICAgIGNvbG9yOiAjRDgzQzNDICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXVuZGVyQXBwIHtcbiAgICBjb2xvcjogIzcwMmM3MmU3ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LVRvZG8ge1xuICAgIGNvbG9yOiAjNDVGNDk1ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LUNvbXBsZXRlZCB7XG4gICAgY29sb3I6ICM0MUQzN0IgIWltcG9ydGFudDtcbn1cblxuaW5wdXQubGFyZ2VyQ2hlY2tib3gge1xuICAgIHdpZHRoOiAxM3B4O1xuICAgIGhlaWdodDogMTNweDtcbn1cblxuLnRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDM4MXB4O1xufVxuXG4ua3QtY2hlY2tib3gge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiBpbmhlcml0O1xufVxuXG4uYXNzaWduZWRfdGFzayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2NjYztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYXNzaWduZWRfdGFzayBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmFzc2lnbmVkX3Rhc2sgaSxcbi5hZGRfYXNzaWduZWRfdGFzayBpIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBjb2xvcjogIzY0NmM5YTtcbn1cblxuLmlucHV0LWdyb3VwLXRleHQsXG4uYWRkX2Fzc2lnbl90YXNrX2lucHV0IHtcbiAgICBwYWRkaW5nOiAwLjY1cmVtIDAuNXJlbTtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzICFpbXBvcnRhbnQ7XG59XG5cbi5hZGRfYXNzaWduZWRfdGFzayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDhweDtcbiAgICByaWdodDogOHB4O1xufVxuXG4uYWRkX2Fzc2lnbl90YXNrX2lucHV0IHtcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAxLjNyZW0gKyA4cHgpO1xufVxuXG4uYWRkX2Fzc2lnbmVkX3Rhc2sgLmlucHV0LWdyb3VwLWFwcGVuZCBzcGFuLmlucHV0LWdyb3VwLXRleHQge1xuICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmFkZF9hc3NpZ25lZF90YXNrIC5pbnB1dC1ncm91cC1hcHBlbmQgLmlucHV0LWdyb3VwLXRleHQgaSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5jdXJzZXItcG9pbnRlciB7XG4gICAgY291bnRlcjogcG9pbnRlcjtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLnNjcm9sbGJhciAuYXNzaWduZWRfdGFzazpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ucHJvamVjdC1hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5rdC13aWRnZXQxMiAua3Qtd2lkZ2V0MTJfX2NvbnRlbnQgLmt0LXdpZGdldDEyX19pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmt0LXdpZGdldDE5X19zdGF0cyAuZHJvcGRvd24taXRlbSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ 61215:
/*!************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-assign-task/project-assign-task.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectAssignTaskModule": () => (/* binding */ ProjectAssignTaskModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _project_assign_task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-assign-task.component */ 75092);
/* harmony import */ var _project_assign_task_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-assign-task-routing.module */ 41743);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project-unplanned-task/project-unplanned-task.component */ 32444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);










//import {MatAutocompleteModule} from '@angular/material/autocomplete';
class ProjectAssignTaskModule {
}
ProjectAssignTaskModule.ɵfac = function ProjectAssignTaskModule_Factory(t) { return new (t || ProjectAssignTaskModule)(); };
ProjectAssignTaskModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProjectAssignTaskModule });
ProjectAssignTaskModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_2__.ProjectUnplannedTaskComponent
    ], imports: [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__.NgMultiSelectDropDownModule.forRoot(),
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule,
        _project_assign_task_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProjectAssignTaskRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProjectAssignTaskModule, { declarations: [_project_assign_task_component__WEBPACK_IMPORTED_MODULE_0__.ProjectAssignTaskComponent], imports: [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__.NgMultiSelectDropDownModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule,
        _project_assign_task_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProjectAssignTaskRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app__LayoutDashboard_project-assign-task_project-assign-task_module_ts.js.map