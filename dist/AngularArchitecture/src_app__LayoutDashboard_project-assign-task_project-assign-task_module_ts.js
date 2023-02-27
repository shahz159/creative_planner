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
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_amcharts_amcharts4_charts_js-node_modules_amcharts_amcharts4_core_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app__LayoutDashboard_to-do-projects_to-do-projects_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_projects-summary_projects-summary_component_ts"), __webpack_require__.e("default-src_app__Services_link_service_ts-node_modules_underscore_modules_index-all_js"), __webpack_require__.e("default-src_app__LayoutDashboard_project-info_project-info_module_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_portfolio-projects_portfolio-projects_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_view-dashboard-projects_view-dashboard-projects_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_projects-add_projects-add_component_ts"), __webpack_require__.e("src_app_Directive_sort_ts-src_app__Services_approvals_service_ts-node_modules_ng2-search-filt-ab147f")]).then(__webpack_require__.bind(__webpack_require__, /*! ../project-info/project-info.module */ 71784)).then(m => m.ProjectInfoModule)
            },
            {
                path: 'ActionToAssign',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app__LayoutDashboard_action-to-assign_action-to-assign_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../action-to-assign/action-to-assign.module */ 36833)).then(m => m.ActionToAssignModule),
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











function ProjectAssignTaskComponent_li_73_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_li_73_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const item_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.OnAssigntaskClick(item_r6.Employee, item_r6.End_Date, item_r6.ProjectType, item_r6.Start_Date, item_r6.Task_Description, item_r6.Task_Name, item_r6.AssignedBy, item_r6.CreatedBy, item_r6.IsActive, item_r6.Reject, item_r6.Reject_Comments, item_r6.Status, item_r6.Reference, item_r6.ProjectDays, item_r6.Creation_Date, item_r6.SubmissionType, item_r6.Modified_DT, item_r6.Project_Code, item_r6.Remarks, item_r6.FileName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 100)(5, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 100)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 101);
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
function ProjectAssignTaskComponent_span_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.ProjectDays, " days");
} }
function ProjectAssignTaskComponent_span_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.SubmissionType, "");
} }
function ProjectAssignTaskComponent_span_138_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_span_138_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.LoadDocument(ctx_r9.Reference)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.FileName);
} }
function ProjectAssignTaskComponent_span_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.Remarks);
} }
function ProjectAssignTaskComponent_div_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 107)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r11.name, "");
} }
const _c0 = function (a0, a1, a2) { return { "text-success": a0, "text-info": a1, "text-warning": a2 }; };
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
        this.paragraph_msg = true;
        this._DisplayForm = false;
        this.Div_TaskDetails = true;
        this._DemoVersion = true;
        let typeoftask = "IFAT";
        this.BsService.setNewTypeofTask(typeoftask);
        this.router.navigate(["AssignTask/ActionToAssign/"]);
        document.getElementById("mysideInfobar").style.width = "60%";
        document.getElementById("rightbar-overlay").style.display = "block";
    }
    closeInfo() {
        this.Clearfeilds();
        document.getElementById("mysideInfobar").style.width = "0px";
        document.getElementById("rightbar-overlay").style.display = "none";
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
        console.log("For Accept", this.ProjectCode);
        document.getElementById("mysideInfobar").style.width = "60%";
        //document.getElementById("rightbar-overlay").style.display = "block";
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
ProjectAssignTaskComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProjectAssignTaskComponent, selectors: [["app-project-assign-task"]], inputs: { min: "min" }, decls: 200, vars: 50, consts: [[1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title", "mr-2"], [1, "fab", "fa-buffer", "mr-2", "text-primary"], [1, "text-muted", "mt-2"], [1, "kt-header__topbar", "pr-0"], [1, "kt-widget19__stats", "text-center", "px-4", "m-auto"], [1, "btn", "btn-primary", "btn-sm", "btn-bold", "cust-btn", 3, "click"], [1, "fas", "fa-plus", "mr-2"], [1, "kt-widget19__stats", "text-center", "mr-1", "m-auto"], [1, "btn-group"], ["aria-expanded", "true", "data-toggle", "dropdown", 1, "btn", "btn-info", "btn-sm", "cust-btn", "dropdown-toggle", "waves-effect", "show"], [1, "fas", "fa-ellipsis-v", "mr-2"], [1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-header"], [1, "fas", "fa-filter", "mr-2"], [1, "dropdown-item", 3, "click"], [1, "kt-badge", "kt-badge--primary", "kt-badge--inline", "mr-2"], [1, "kt-drop-text"], [1, "kt-badge", "kt-badge--success", "kt-badge--inline", "mr-2"], [1, "kt-badge", "kt-badge--info", "kt-badge--inline", "mr-2"], [1, "dropdown-item"], [1, "kt-badge", "kt-badge--danger", "kt-badge--inline", "mr-2"], [1, "kt-badge", "kt-badge--dark", "kt-badge--inline", "mr-2"], [1, "col-lg-3", "p-0"], [1, "card", "shadow-sm", "brdr-r-0"], [1, "card-header"], ["type", "search", "placeholder", "Search for assigned task..", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], [1, "d-none"], [1, "text-primary"], [1, "sidebar", "pr-2"], [1, "scrollbar"], [1, "side-bar-box"], [4, "ngFor", "ngForOf"], [1, "col-lg-9", "p-0"], [2, "color", "lightgray", "font-size", "large", 3, "hidden"], [2, "margin", "0px", "color", "lightgrey"], [1, "mt-0", "card", "border-left-0", "shadow-sm", "scrollbar-rt", 3, "hidden"], [1, "subtask-list"], [1, "kt-widget12"], [1, "kt-widget12__content"], [1, "d-flex", "justify-content-between", "flex-wrap", 2, "border-bottom", "1px solid #eee"], [1, "text-right", "col-lg-12", 3, "hidden"], ["title", "More Infomation", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fa", "fa-chart-bar"], ["title", "Project Infomation", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fa", "fa-info-circle", "mr-0"], ["title", "Add Assign Task", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fas", "fa-plus", "mr-0"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1"], [1, "fas", "fa-sort-alpha-up", "fa-lg", "mr-0"], [1, "text-info", "strong", "h5", "mt-3", "ml-3"], [1, "mb-3", "mt-1", "pl-15px", "h5", 2, "color", "grey", "font-size", "small"], ["id", "Span_DescName"], [1, "mb-1", "pl-15px"], [1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], [1, "fas", "fa-project-diagram", "text-muted", "mr-1"], [1, "mr-3", "text-nowrap", "mb-2", "d-inline-block", 3, "ngClass"], [1, "fas", "fa-calendar-alt", "text-muted", "mr-1"], [1, "fas", "fa-clock", "text-muted", "mr-1"], ["class", "my-1 fs-4 kt-widget12__value", 4, "ngIf"], [1, "text-muted", "mr-1"], ["class", "mr-3 text-nowrap mb-2 d-inline-block", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Remarks!", "class", "mr-3 text-nowrap mb-2 d-inline-block", 4, "ngIf"], [3, "hidden"], [1, "scrollbar", 3, "hidden"], ["class", "assigned_task d-flex justify-content-between", 4, "ngFor", "ngForOf"], [1, "add_assigned_task", 3, "hidden"], [1, "form-group", "mb-0"], [1, "input-group"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], [1, "la", "la-plus", "mr-0"], ["type", "text", "placeholder", "Add Task", "aria-describedby", "basic-addon1", 1, "form-control", "add_assign_task_input", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "la", "la-calendar-o"], ["id", "basic-addon1", "data-toggle", "modal", "data-target", "#AssignTo", 1, "input-group-text", "curser-pointer"], [1, "la", "la-user"], ["id", "basic-addon1", "data-toggle", "modal", "data-target", "#AttachmentModal", 1, "input-group-text"], [1, "la", "la-paperclip"], ["id", "AssignTo", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary"], ["id", "AttachmentModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["href", "#"], [1, "la", "la-angle-right"], ["id", "rightbar-overlay"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], [3, "click"], [1, "project-title", "mb-2"], [1, "d-flex", "justify-content-between"], [1, "mb-2"], [1, "my-1", "fs-4", "kt-widget12__value"], [1, "fas", "fa-file-pdf", "text-muted", "mr-1"], [1, "text-info", "curser-pointer", 3, "click"], ["data-toggle", "tooltip", "title", "Remarks!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], [1, "fas", "fa-registered", "text-muted", "mr-1"], [1, "assigned_task", "d-flex", "justify-content-between"], [1, "la", "la-check"], [1, "la", "la-star-o"], [1, "la", "la-trash"]], template: function ProjectAssignTaskComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_a_click_37_listener() { return ctx.GetInProcess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div")(39, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, " In Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "a", 25)(44, "div")(45, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_a_click_49_listener() { return ctx.GetRejected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div")(51, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_a_click_55_listener() { return ctx.GetNotStarted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div")(57, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Not Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 1)(62, "div", 28)(63, "div", 29)(64, "div", 30)(65, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectAssignTaskComponent_Template_input_ngModelChange_65_listener($event) { return ctx._AssignTaskSearch = $event; })("input", function ProjectAssignTaskComponent_Template_input_input_65_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Filtered : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 34)(71, "div", 35)(72, "ul", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](73, ProjectAssignTaskComponent_li_73_Template, 16, 11, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 38)(75, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Select the project from left panel to display result here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "h4", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 41)(80, "div", 42)(81, "div", 43)(82, "div", 44)(83, "div", 45)(84, "div", 46)(85, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_button_click_85_listener() { return ctx.moreDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](86, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_button_click_87_listener() { return ctx.ProjectInfoDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](88, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectAssignTaskComponent_Template_button_click_89_listener() { return ctx.ShowForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](90, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](92, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 2)(94, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "p", 56)(98, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "p", 58)(101, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](102, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "span", 61)(106, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](109, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](112, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](114, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](117, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](119, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](120, ProjectAssignTaskComponent_span_120_Template, 2, 1, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](121, ProjectAssignTaskComponent_span_121_Template, 2, 1, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "p", 58)(123, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](124, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](128, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](132, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](135, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](136, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](138, ProjectAssignTaskComponent_span_138_Template, 5, 1, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](139, ProjectAssignTaskComponent_span_139_Template, 4, 1, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "h4", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "EP Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](143, ProjectAssignTaskComponent_div_143_Template, 9, 1, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "div", 71)(145, "div", 72)(146, "div", 73)(147, "div", 74)(148, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](149, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectAssignTaskComponent_Template_input_ngModelChange_150_listener($event) { return ctx._Demotext = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "div", 78)(152, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](153, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](155, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](156, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](157, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](158, "div", 84)(159, "div", 85)(160, "div", 86)(161, "div", 87)(162, "h5", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](163, "Responsible Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "div", 89)(165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](166, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "div", 90)(168, "button", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](171, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](172, "div", 93)(173, "div", 85)(174, "div", 86)(175, "div", 87)(176, "h5", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](177, "Responsible Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](178, "div", 89)(179, "ul")(180, "li")(181, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](182, "i", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](183, " Creative Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](184, "li")(185, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](186, "i", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](187, " YR Global ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](188, "li")(189, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](190, "i", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](191, " dr.CAFE Coffee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](192, "div", 90)(193, "button", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](194, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](195, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](196, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](197, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](198, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](199, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(", ctx.FilteredText, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.countAssigned);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.countAccepted);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.countInprocess);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.countCompleted);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](46, _c0, ctx.Status == "Accepted", ctx.Status == "Pending", ctx.Status == "Rejected"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](112, 34, ctx.Start_Date, "dd-MM-yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](117, 37, ctx.End_Date, "dd-MM-yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.SubmissionType == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.SubmissionType != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("By: ", ctx.AssignedBy, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("To : ", ctx.Employee, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("On : ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](135, 40, ctx.ModifyDate, "dd-MM-yyyy"), " \u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](136, 43, ctx.ModifyDate, "h:mm a"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".sidebar[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    \n    background-color: #fff;\n    \n}\n\n.scrollbar[_ngcontent-%COMP%] {\n    height: calc(100vh - 160px);\n    overflow-y: auto;\n}\n\n.scrollbar-rt[_ngcontent-%COMP%] {\n    height: calc(100vh - 99px);\n    overflow-y: auto;\n}\n\n.card.border-left-0[_ngcontent-%COMP%] {\n    border-radius: 0px 0.25rem 0.25rem 0px;\n}\n\n.brdr-r-0[_ngcontent-%COMP%] {\n    border-radius: 0.25rem 0px 0px 0.25rem;\n}\n\n.kt-widget19__stats[_ngcontent-%COMP%] {\n    margin-bottom: 0.7rem;\n}\n\n.cust-btn[_ngcontent-%COMP%] {\n    padding: 3px 7px;\n}\n\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    transition: transform .2s!important;\n    transform: scale(.95);\n    background: #f0f8ff;\n}\n\n#rightbar-overlay[_ngcontent-%COMP%] {\n    background-color: rgba(50, 58, 70, .2);\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    display: none;\n    z-index: 998;\n    transition: all .2s ease-out;\n}\n\n.pl-15px[_ngcontent-%COMP%]{\n        padding-left: 15px;\n}\n\n\n\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 6px;\n}\n\n\n\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: #f1f1f1;\n}\n\n\n\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #ccc;\n    border-radius: 10px;\n}\n\n\n\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #ccc;\n}\n\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    color: black;\n    padding: 10px 16px;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.sidebar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    background-color: #e0e0e0;\n    color: rgb(48, 46, 46);\n}\n\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\n    background-color: #f4f4f4;\n    color: rgb(48, 46, 46);\n}\n\n.sidebar[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n    color: #3c3c3c;\n    font-weight: 500;\n}\n\n.sidebar[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: #484848;\n}\n\ndiv.content[_ngcontent-%COMP%] {\n    margin-left: 200px;\n    padding: 1px 16px;\n    height: 1000px;\n}\n\n@media screen and (max-width: 700px) {\n    .sidebar[_ngcontent-%COMP%] {\n        width: 100%;\n        height: auto;\n        position: relative;\n    }\n    .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        float: left;\n    }\n    div.content[_ngcontent-%COMP%] {\n        margin-left: 0;\n    }\n}\n\n@media screen and (max-width: 400px) {\n    .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        text-align: center;\n        float: none;\n    }\n}\n\n\n\nh4[_ngcontent-%COMP%] {\n    font-size: 17px;\n}\n\nh5[_ngcontent-%COMP%] {\n    font-size: 15px;\n}\n\n.project-info-page[_ngcontent-%COMP%] {\n    letter-spacing: 0.4px;\n}\n\n.project-description[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #969696;\n    font-size: 13px;\n}\n\n.project-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #646464;\n    \n}\n\n.project-budget[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .project-duration[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    color: #969696;\n}\n\n.project-duration-bar[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n  .dropdown-list {\n    overflow: overlay;\n}\n\n\n\n.sideInfobar[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 999;\n    top: 0;\n    right: 0;\n    background-color: #ffffff;\n    border-left: 1px solid #b3bcff;\n    overflow-x: hidden;\n    transition: 0.5s;\n    \n}\n\n.sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\n    background-color: #f5f6fc;\n}\n\n.sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: #333;\n    position: absolute;\n    top: 10px;\n    right: 25px;\n    font-size: 20px;\n    margin-left: 50px;\n}\n\n.info-icon-cir[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #5867dd;\n}\n\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%] {\n    border-bottom: 0.07rem dashed #dedede;\n    padding: 6px;\n}\n\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%] {\n    border-bottom: 0.07rem dashed rgba(0, 0, 0, 0.3);\n}\n\n\n\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%] {\n    font-weight: 600;\n}\n\n.sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%] {\n    width: 270px;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.side-bar-box[_ngcontent-%COMP%] {\n    list-style-type: none;\n    padding-left: 0px !important;\n}\n\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #f1f1f1;\n    font-weight: 400;\n}\n\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    border-bottom: none\n}\n\n.subtask-list[_ngcontent-%COMP%] {\n    display: flex;\n    border-bottom: 1px solid #f1f1f1;\n    padding: 7px 0 5px;\n}\n\n.subtask-list[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n}\n\n.subtask-radio[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    margin-right: 15px;\n    margin-top: 5px;\n}\n\n.subtask-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 12px;\n}\n\n.subtask-list[_ngcontent-%COMP%]   p.subtask-list-title[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: 500;\n}\n\n#accordionExample5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    background-color: transparent;\n    margin-top: 15px;\n}\n\n.accordion.accordion-svg-icon[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:last-child   .card-body[_ngcontent-%COMP%] {\n    padding-left: 0px;\n}\n\n.accordion.accordion-light[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]:after {\n    left: 0px !important;\n    font-weight: 600;\n    font-size: 1.3rem;\n}\n\n.accordion.accordion-light[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    padding-left: 25px;\n    font-size: 16px;\n}\n\n.text-Rejected[_ngcontent-%COMP%] {\n    color: #E6747A !important;\n}\n\n.text-underApproval[_ngcontent-%COMP%] {\n    color: #98c7bf !important;\n}\n\n.text-CompleteRejected[_ngcontent-%COMP%] {\n    color: #D83C3C !important;\n}\n\n.text-underApp[_ngcontent-%COMP%] {\n    color: #702c72e7 !important;\n}\n\n.text-Todo[_ngcontent-%COMP%] {\n    color: #45F495 !important;\n}\n\n.text-Completed[_ngcontent-%COMP%] {\n    color: #41D37B !important;\n}\n\ninput.largerCheckbox[_ngcontent-%COMP%] {\n    width: 13px;\n    height: 13px;\n}\n\n.textarea[_ngcontent-%COMP%] {\n    height: 381px;\n}\n\n.kt-checkbox[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    margin-bottom: inherit;\n}\n\n.assigned_task[_ngcontent-%COMP%] {\n    background-color: #fff;\n    padding: 10px;\n    box-shadow: 0 0 5px #ccc;\n    margin-bottom: 10px;\n}\n\n.assigned_task[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n    font-weight: 500;\n}\n\n.assigned_task[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .add_assigned_task[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: 700;\n    margin-right: 8px;\n    color: #646c9a;\n}\n\n.input-group-text[_ngcontent-%COMP%], .add_assign_task_input[_ngcontent-%COMP%] {\n    padding: 0.65rem 0.5rem;\n}\n\n.input-group[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: stretch;\n    width: 100% !important;\n}\n\n.input-group[_ngcontent-%COMP%] {\n    transition: transform .2s !important;\n}\n\n.add_assigned_task[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0px;\n    left: 8px;\n    right: 8px;\n}\n\n.add_assign_task_input[_ngcontent-%COMP%] {\n    height: calc(1.5em + 1.3rem + 8px);\n}\n\n.add_assigned_task[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   span.input-group-text[_ngcontent-%COMP%] {\n    padding-left: 2px;\n    padding-right: 5px;\n}\n\n.add_assigned_task[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight: 400;\n    margin-right: 0px;\n}\n\n.curser-pointer[_ngcontent-%COMP%] {\n    counter: pointer;\n}\n\nul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    padding-left: 0px;\n}\n\n.scrollbar[_ngcontent-%COMP%]   .assigned_task[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 50px;\n}\n\n.project-active[_ngcontent-%COMP%] {\n    background-color: #f1f1f1;\n}\n\n.kt-widget12[_ngcontent-%COMP%]   .kt-widget12__content[_ngcontent-%COMP%]   .kt-widget12__item[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n}\n\n.kt-widget19__stats[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtYXNzaWduLXRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7O0FBQ0E7UUFDUSxrQkFBa0I7QUFDMUI7O0FBRUEsVUFBVTs7QUFFVjtJQUNJLFVBQVU7QUFDZDs7QUFHQSxVQUFVOztBQUVWO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUdBLFdBQVc7O0FBRVg7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUdBLG9CQUFvQjs7QUFFcEI7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7QUFDSjs7QUFHQSxnQ0FBZ0M7O0FBRWhDO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFHQSxvQkFBb0I7O0FBRXBCO0lBQ0ksWUFBWTtJQUNaLFFBQVE7SUFDUixlQUFlO0lBQ2YsWUFBWTtJQUNaLE1BQU07SUFDTixRQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnREFBZ0Q7QUFDcEQ7O0FBR0E7O0tBRUs7O0FBRUw7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJwcm9qZWN0LWFzc2lnbi10YXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLyogd2lkdGg6IDMwMHB4OyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xufVxuXG4uc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnNjcm9sbGJhci1ydCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTlweCk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNhcmQuYm9yZGVyLWxlZnQtMCB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDAuMjVyZW0gMC4yNXJlbSAwcHg7XG59XG5cbi5icmRyLXItMCB7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwcHggMHB4IDAuMjVyZW07XG59XG5cbi5rdC13aWRnZXQxOV9fc3RhdHMge1xuICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcbn1cblxuLmN1c3QtYnRuIHtcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xufVxuXG4uc2lkZS1iYXItYm94IGxpOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC45NSk7XG4gICAgYmFja2dyb3VuZDogI2YwZjhmZjtcbn1cblxuI3JpZ2h0YmFyLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDU4LCA3MCwgLjIpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB6LWluZGV4OiA5OTg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcbn1cbi5wbC0xNXB4e1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi8qIHdpZHRoICovXG5cbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNnB4O1xufVxuXG5cbi8qIFRyYWNrICovXG5cbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG5cbi8qIEhhbmRsZSAqL1xuXG4uc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuXG4uc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuLnNpZGViYXIgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2lkZWJhciBhLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgICBjb2xvcjogcmdiKDQ4LCA0NiwgNDYpO1xufVxuXG4uc2lkZWJhciBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICBjb2xvcjogcmdiKDQ4LCA0NiwgNDYpO1xufVxuXG4uc2lkZWJhciAucHJvamVjdC10aXRsZSB7XG4gICAgY29sb3I6ICMzYzNjM2M7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNpZGViYXIgLmQtZmxleCBwIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG59XG5cbmRpdi5jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgcGFkZGluZzogMXB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxMDAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgLnNpZGViYXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5zaWRlYmFyIGEge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gICAgZGl2LmNvbnRlbnQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgLnNpZGViYXIgYSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgfVxufVxuXG5cbi8qIE1vcmUgRGV0YWlscyBDb21wb25lbnRzIENTUyAqL1xuXG5oNCB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5oNSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ucHJvamVjdC1pbmZvLXBhZ2Uge1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbn1cblxuLnByb2plY3QtZGVzY3JpcHRpb24gLmQtZmxleCBzcGFuIHtcbiAgICBjb2xvcjogIzk2OTY5NjtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHAge1xuICAgIGNvbG9yOiAjNjQ2NDY0O1xuICAgIC8qIGZvbnQtc2l6ZTogMTRweDsgKi9cbn1cblxuLnByb2plY3QtYnVkZ2V0IGg2LFxuLnByb2plY3QtZHVyYXRpb24gaDYge1xuICAgIGNvbG9yOiAjOTY5Njk2O1xufVxuXG4ucHJvamVjdC1kdXJhdGlvbi1iYXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRyb3Bkb3duLWxpc3Qge1xuICAgIG92ZXJmbG93OiBvdmVybGF5O1xufVxuXG5cbi8qID09PSBTaWRlYmFyID09PSAqL1xuXG4uc2lkZUluZm9iYXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2IzYmNmZjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAvKiBwYWRkaW5nLXRvcDogNjBweDsgKi9cbn1cblxuLnNpZGVJbmZvYmFyIC5rdC1wb3J0bGV0X19oZWFkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xufVxuXG4uc2lkZUluZm9iYXIgLmNsb3NlYnRuIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMjVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5pbmZvLWljb24tY2lyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICM1ODY3ZGQ7XG59XG5cbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgI2RlZGVkZTtcbiAgICBwYWRkaW5nOiA2cHg7XG59XG5cbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbS5kYXJrIHtcbiAgICBib3JkZXItYm90dG9tOiAwLjA3cmVtIGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cblxuLyogLmt0LWluYm94X19kYXRldGltZXtcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgfSAqL1xuXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW0gLmt0LXdpZGdldDFfX2luZm8gLmt0LXdpZGdldDFfX3RpdGxlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2lkZUluZm9iYXIgLnRpdGxlLXNpZGViYXIge1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnNpZGUtYmFyLWJveCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlLWJhci1ib3ggbGkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5zaWRlLWJhci1ib3ggbGk6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZVxufVxuXG4uc3VidGFzay1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgIHBhZGRpbmc6IDdweCAwIDVweDtcbn1cblxuLnN1YnRhc2stbGlzdDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uc3VidGFzay1yYWRpbyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5zdWJ0YXNrLWxpc3QgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5zdWJ0YXNrLWxpc3QgcC5zdWJ0YXNrLWxpc3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jYWNjb3JkaW9uRXhhbXBsZTUgLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5hY2NvcmRpb24uYWNjb3JkaW9uLXN2Zy1pY29uIC5jYXJkOmxhc3QtY2hpbGQgLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5hY2NvcmRpb24uYWNjb3JkaW9uLWxpZ2h0IC5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZTphZnRlciB7XG4gICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmFjY29yZGlvbi5hY2NvcmRpb24tbGlnaHQgLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGV4dC1SZWplY3RlZCB7XG4gICAgY29sb3I6ICNFNjc0N0EgIWltcG9ydGFudDtcbn1cblxuLnRleHQtdW5kZXJBcHByb3ZhbCB7XG4gICAgY29sb3I6ICM5OGM3YmYgIWltcG9ydGFudDtcbn1cblxuLnRleHQtQ29tcGxldGVSZWplY3RlZCB7XG4gICAgY29sb3I6ICNEODNDM0MgIWltcG9ydGFudDtcbn1cblxuLnRleHQtdW5kZXJBcHAge1xuICAgIGNvbG9yOiAjNzAyYzcyZTcgIWltcG9ydGFudDtcbn1cblxuLnRleHQtVG9kbyB7XG4gICAgY29sb3I6ICM0NUY0OTUgIWltcG9ydGFudDtcbn1cblxuLnRleHQtQ29tcGxldGVkIHtcbiAgICBjb2xvcjogIzQxRDM3QiAhaW1wb3J0YW50O1xufVxuXG5pbnB1dC5sYXJnZXJDaGVja2JveCB7XG4gICAgd2lkdGg6IDEzcHg7XG4gICAgaGVpZ2h0OiAxM3B4O1xufVxuXG4udGV4dGFyZWEge1xuICAgIGhlaWdodDogMzgxcHg7XG59XG5cbi5rdC1jaGVja2JveCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IGluaGVyaXQ7XG59XG5cbi5hc3NpZ25lZF90YXNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjY2NjO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5hc3NpZ25lZF90YXNrIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYXNzaWduZWRfdGFzayBpLFxuLmFkZF9hc3NpZ25lZF90YXNrIGkge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIGNvbG9yOiAjNjQ2YzlhO1xufVxuXG4uaW5wdXQtZ3JvdXAtdGV4dCxcbi5hZGRfYXNzaWduX3Rhc2tfaW5wdXQge1xuICAgIHBhZGRpbmc6IDAuNjVyZW0gMC41cmVtO1xufVxuXG4uaW5wdXQtZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQtZ3JvdXAge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgIWltcG9ydGFudDtcbn1cblxuLmFkZF9hc3NpZ25lZF90YXNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogOHB4O1xuICAgIHJpZ2h0OiA4cHg7XG59XG5cbi5hZGRfYXNzaWduX3Rhc2tfaW5wdXQge1xuICAgIGhlaWdodDogY2FsYygxLjVlbSArIDEuM3JlbSArIDhweCk7XG59XG5cbi5hZGRfYXNzaWduZWRfdGFzayAuaW5wdXQtZ3JvdXAtYXBwZW5kIHNwYW4uaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uYWRkX2Fzc2lnbmVkX3Rhc2sgLmlucHV0LWdyb3VwLWFwcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCBpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmN1cnNlci1wb2ludGVyIHtcbiAgICBjb3VudGVyOiBwb2ludGVyO1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4uc2Nyb2xsYmFyIC5hc3NpZ25lZF90YXNrOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5wcm9qZWN0LWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cblxuLmt0LXdpZGdldDEyIC5rdC13aWRnZXQxMl9fY29udGVudCAua3Qtd2lkZ2V0MTJfX2l0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4ua3Qtd2lkZ2V0MTlfX3N0YXRzIC5kcm9wZG93bi1pdGVtIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });


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