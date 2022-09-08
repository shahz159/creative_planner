(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["action-to-project-action-to-project-module"],{

/***/ "./src/app/_LayoutDashboard/action-to-project/action-to-project-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/action-to-project/action-to-project-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ActionToProjectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionToProjectRoutingModule", function() { return ActionToProjectRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _action_to_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-to-project.component */ "./src/app/_LayoutDashboard/action-to-project/action-to-project.component.ts");





const routes = [{
        path: '', component: _action_to_project_component__WEBPACK_IMPORTED_MODULE_2__["ActionToProjectComponent"]
    }
];
class ActionToProjectRoutingModule {
}
ActionToProjectRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ActionToProjectRoutingModule });
ActionToProjectRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ActionToProjectRoutingModule_Factory(t) { return new (t || ActionToProjectRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ActionToProjectRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionToProjectRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/_LayoutDashboard/action-to-project/action-to-project.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/action-to-project/action-to-project.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ActionToProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionToProjectComponent", function() { return ActionToProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Models_sub_task_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/sub-task-dto */ "./src/app/_Models/sub-task-dto.ts");
/* harmony import */ var src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Models/user-details-dto */ "./src/app/_Models/user-details-dto.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/notification.service */ "./src/app/_Services/notification.service.ts");
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Services/project-type.service */ "./src/app/_Services/project-type.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ "./src/app/_Services/bs-service.service.ts");
/* harmony import */ var src_app_LayoutDashboard_project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.component */ "./src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.component.ts");
/* harmony import */ var _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../to-do-projects/to-do-projects.component */ "./src/app/_LayoutDashboard/to-do-projects/to-do-projects.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");


















function ActionToProjectComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Project required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Action Name required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_ng_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r22.Emp_No);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r22.DisplayName, " ");
} }
function ActionToProjectComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Assign To required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start Date required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "End Date required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Allocated hours required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Allocation per day limit is 10 hours.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionToProjectComponent_span_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter the hours less than or equal to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " hours!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.maxAllocation);
} }
function ActionToProjectComponent_span_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19._message);
} }
function ActionToProjectComponent_button_87_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionToProjectComponent_button_87_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.sweetAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r20.selectedProjectCodelist || !ctx_r20.Sub_ProjectName || !ctx_r20._Description || !ctx_r20.selected_Employee || !ctx_r20._StartDate || !ctx_r20._EndDate || !ctx_r20._allocated || ctx_r20._allocated > ctx_r20.maxAllocation);
} }
function ActionToProjectComponent_button_88_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionToProjectComponent_button_88_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.sweetAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r21.selectedProjectCodelist || !ctx_r21.Sub_ProjectName || !ctx_r21._Description || !ctx_r21.selected_Employee || !ctx_r21._StartDate || !ctx_r21._EndDate || ctx_r21._allocated > ctx_r21.maxAllocation);
} }
//import { empty } from '@angular-devkit/schematics';
class ActionToProjectComponent {
    constructor(notifyService, ProjectTypeService, router, dialog, dateAdapter, BsService, service, _projectunplanned, _Todoproject) {
        this.notifyService = notifyService;
        this.ProjectTypeService = ProjectTypeService;
        this.router = router;
        this.dialog = dialog;
        this.dateAdapter = dateAdapter;
        this.BsService = BsService;
        this.service = service;
        this._projectunplanned = _projectunplanned;
        this._Todoproject = _Todoproject;
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
        this._EmployeeListForDropdown = [];
        this.selectedProjectCodelist = [];
        this.selected_Employee = [];
        this.maxlimit = true;
        // super(notifyService,ProjectTypeService,router,dialog,dateAdapter,BsService);
        this.CurrentUser_ID = localStorage.getItem('EmpNo');
        this.ObjSubTaskDTO = new src_app_Models_sub_task_dto__WEBPACK_IMPORTED_MODULE_1__["SubTaskDTO"];
        this.ObjUserDetails = new src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_2__["UserDetailsDTO"]();
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
        this.Current_user_ID = localStorage.getItem('EmpNo');
        this.GetAllEmployeesForAssignDropdown();
    }
    GetAllEmployeesForAssignDropdown() {
        let obj = {
            pagenumber: 1,
            Emp_No: this.CurrentUser_ID,
            Mode: 'AssignedTask'
        };
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
    onFilterChange(event) {
        this.filterText = event;
        this.GetProjectsByUserName();
    }
    ProjectOnSelect(obj) {
        this.selectedProjectCode = obj['Project_Code'];
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
        if (this._MainPrjectName == "" || this._MainPrjectName == null || this._MainPrjectName == undefined) {
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
            var datestrStart = (new Date(this._StartDate)).toUTCString();
            var datestrEnd = (new Date(this._EndDate)).toUTCString();
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
            if (this.ObjSubTaskDTO.Duration != null) {
                fd.append("Duration", this.ObjSubTaskDTO.Duration.toString());
            }
            else {
                this.ObjSubTaskDTO.Duration = 0;
            }
            this.service._InsertNewSubtask(fd).subscribe(data => {
                this.notifyService.showInfo("Created Successfully", "Action");
                // super.OnCategoryClick(super._selectedcatid,super._selectedcatname);
                // this.closeInfo();
                this._Todoproject.CallOnSubmitAction();
                this._projectunplanned.CallOnSubmitCategory();
                this.Clear_Feilds();
                this.closeInfo();
                this._inputAttachments = [];
            });
            setTimeout(this._projectunplanned.CallOnSubmitCategory, 3000);
            this._projectunplanned.CallOnSubmitCategory();
            setTimeout(this._Todoproject.CallOnSubmitAction, 3000);
            // setTimeout(function () {
            //   this.loadsubcateg();
            // }, 3000);
            this._Todoproject.CallOnSubmitAction();
        });
    }
    sweetAlert() {
        var datestrEnd = (new Date(this._EndDate)).toUTCString();
        var datedead = (new Date(this.ProjectDeadLineDate)).toUTCString();
        const dateOne = new Date(this._EndDate);
        const dateTwo = new Date(this.ProjectDeadLineDate);
        // console.log(dateOne)
        // console.log(dateTwo)
        if (dateTwo <= dateOne) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
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
                else if (response.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Cancelled', 'Action is Not Created', 'error');
                }
            });
        }
        else {
            this.OnSubmit();
        }
    }
    closeInfo() {
        debugger;
        document.getElementById("mysideInfobar").style.width = "0";
        this.Clear_Feilds();
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
        document.getElementById("mysideInfobar1").style.width = "0";
    }
    Clear_Feilds() {
        debugger;
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
        this._allocated = 0;
        this._inputAttachments = [];
        this._inputAttachments2 = [];
        this.selectedEmpNo = '';
        this.selected_Employee = [];
        this.selectedProjectCodelist = [];
        document.getElementById("uploadFile").value = "";
    }
}
ActionToProjectComponent.ɵfac = function ActionToProjectComponent_Factory(t) { return new (t || ActionToProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_5__["ProjectTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_9__["BsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_5__["ProjectTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_LayoutDashboard_project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_10__["ProjectUnplannedTaskComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_11__["ToDoProjectsComponent"])); };
ActionToProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionToProjectComponent, selectors: [["app-action-to-project"]], decls: 89, vars: 36, consts: [["id", "mysideInfobar_NewSubtask", 1, "sideInfobar", "animate-right", "offcanvas"], [1, "p-4"], [1, "offcanvas-header", "d-flex", "align-items-center", "justify-content-between", "pb-2", "mb-3", "brdr-b"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-icon", "btn-hover-primary", "closebtn", 3, "click"], [1, "fa", "fa-times"], [1, "font-weight-bold", "m-0"], [1, "pro-nm", "text-info", "mb-2"], [1, "form-group", 3, "hidden"], [1, "text-danger"], ["required", "", 3, "formControl", "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onDeSelect", "onFilterChange"], ["style", "color:red", 4, "ngIf"], [1, "form-group"], ["required", "", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["required", "", 1, "form-control", 2, "height", "139px", 3, "ngModel", "ngModelChange"], ["description", "ngModel"], [1, "form-group", "text-dark-50", "w-75px", "flex-grow-1", "brdng-0"], ["reuired", "", "placeholder", "Select Employee", 3, "ngModel", "Change", "ngModelChange"], ["assign", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "input-group"], ["matInput", "", "required", "", "placeholder", "Start Date", 1, "form-control", 3, "matDatepicker", "min", "ngModel", "click", "ngModelChange"], ["startdate", "ngModel"], [1, "input-group-text", "p-0"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "required", "", "placeholder", "End Date", 1, "form-control", 3, "matDatepicker", "min", "ngModel", "click", "ngModelChange"], ["Enddate", "ngModel"], ["picker2", ""], ["class", "text-danger", 4, "ngIf"], ["required", "", "type", "number", "min", "0", "oninput", "validity.valid||(value='');", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["allocated", "ngModel"], ["for", "exampleFormControlFile1"], ["aria-label", "With textarea", 1, "form-control", 2, "height", "111px", 3, "ngModel", "ngModelChange"], [1, "custom-file", "pl-1"], ["type", "file", "id", "uploadFile", "accept", "application/pdf", 1, "form-control-file", 3, "change"], [1, "form-group", "mb-1"], ["type", "submit", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], [2, "color", "red"], [3, "value"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function ActionToProjectComponent_Template(rf, ctx) { if (rf & 1) {
        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionToProjectComponent_Template_a_click_3_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Action To Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select Project :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ng-multiselect-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActionToProjectComponent_Template_ng_multiselect_dropdown_ngModelChange_14_listener($event) { return ctx.selectedProjectCodelist = $event; })("onSelect", function ActionToProjectComponent_Template_ng_multiselect_dropdown_onSelect_14_listener($event) { return ctx.ProjectOnSelect($event); })("onDeSelect", function ActionToProjectComponent_Template_ng_multiselect_dropdown_onDeSelect_14_listener($event) { return ctx.ProjectOnDeselect($event); })("onFilterChange", function ActionToProjectComponent_Template_ng_multiselect_dropdown_onFilterChange_14_listener($event) { return ctx.onFilterChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ActionToProjectComponent_span_15_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Action Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActionToProjectComponent_Template_input_ngModelChange_21_listener($event) { return ctx.Sub_ProjectName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ActionToProjectComponent_span_23_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Description :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "textarea", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActionToProjectComponent_Template_textarea_ngModelChange_29_listener($event) { return ctx._Description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ActionToProjectComponent_span_31_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Assign To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ng-select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("Change", function ActionToProjectComponent_Template_ng_select_Change_39_listener($event) { return ctx.EmployeeOnSelect($event); })("ngModelChange", function ActionToProjectComponent_Template_ng_select_ngModelChange_39_listener($event) { return ctx.selectedEmpNo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ActionToProjectComponent_ng_option_41_Template, 2, 2, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ActionToProjectComponent_span_42_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Start Date : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionToProjectComponent_Template_input_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](54); return _r9.open(); })("ngModelChange", function ActionToProjectComponent_Template_input_ngModelChange_49_listener($event) { return ctx._StartDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "mat-datepicker-toggle", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "mat-datepicker", null, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ActionToProjectComponent_span_55_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "End Date :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionToProjectComponent_Template_input_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67); return _r12.open(); })("ngModelChange", function ActionToProjectComponent_Template_input_ngModelChange_62_listener($event) { return ctx._EndDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "mat-datepicker-toggle", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "mat-datepicker", null, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ActionToProjectComponent_span_68_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Allocated Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, ActionToProjectComponent_span_72_Template, 2, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActionToProjectComponent_Template_input_ngModelChange_73_listener($event) { return ctx._allocated = $event; })("click", function ActionToProjectComponent_Template_input_click_73_listener() { return ctx.alertMaxAllocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ActionToProjectComponent_span_75_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ActionToProjectComponent_span_76_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, ActionToProjectComponent_span_77_Template, 5, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, ActionToProjectComponent_span_78_Template, 2, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "textarea", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActionToProjectComponent_Template_textarea_ngModelChange_82_listener($event) { return ctx._remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ActionToProjectComponent_Template_input_change_85_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, ActionToProjectComponent_button_87_Template, 2, 1, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, ActionToProjectComponent_button_88_Template, 2, 1, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](54);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._MainPrjectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.ProjectsDropdownBoolean);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r1.required && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", _r1)("placeholder", "Select Project")("settings", ctx.dropdownSettings_Projects)("data", ctx._ProjectDataList)("ngModel", ctx.selectedProjectCodelist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._projcode == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Sub_ProjectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._subname == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._desbool == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedEmpNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._EmployeeListForDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._selectemp == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r9)("min", ctx.disablePreviousDate)("ngModel", ctx._StartDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._sdate == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r12)("min", ctx.disablePreviousDate)("ngModel", ctx._EndDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._edate == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedEmpNo == ctx.Current_user_ID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._allocated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedEmpNo == ctx.Current_user_ID && _r15.touched && _r15.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._allocated > ctx.maxAllocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._allocated > ctx.maxAllocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._StartDate == null || ctx._EndDate == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._remarks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedEmpNo == ctx.Current_user_ID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedEmpNo != ctx.Current_user_ID);
    } }, directives: [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NumberValueAccessor"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["ɵr"]], styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n  -moz-appearance: textfield;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX0xheW91dERhc2hib2FyZC9hY3Rpb24tdG8tcHJvamVjdC9hY3Rpb24tdG8tcHJvamVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQztBQUNoQzs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYO0FBRUEsWUFBWTtBQUNaO0VBQ0UsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvX0xheW91dERhc2hib2FyZC9hY3Rpb24tdG8tcHJvamVjdC9hY3Rpb24tdG8tcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogRmlyZWZveCAqL1xyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionToProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-action-to-project',
                templateUrl: './action-to-project.component.html',
                styleUrls: ['./action-to-project.component.css']
            }]
    }], function () { return [{ type: src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }, { type: src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_5__["ProjectTypeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"] }, { type: src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_9__["BsServiceService"] }, { type: src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_5__["ProjectTypeService"] }, { type: src_app_LayoutDashboard_project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_10__["ProjectUnplannedTaskComponent"] }, { type: _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_11__["ToDoProjectsComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_LayoutDashboard/action-to-project/action-to-project.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/action-to-project/action-to-project.module.ts ***!
  \********************************************************************************/
/*! exports provided: ActionToProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionToProjectModule", function() { return ActionToProjectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _action_to_project_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-to-project-routing.module */ "./src/app/_LayoutDashboard/action-to-project/action-to-project-routing.module.ts");
/* harmony import */ var _action_to_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action-to-project.component */ "./src/app/_LayoutDashboard/action-to-project/action-to-project.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_Services/notification.service */ "./src/app/_Services/notification.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");










class ActionToProjectModule {
}
ActionToProjectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ActionToProjectModule });
ActionToProjectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ActionToProjectModule_Factory(t) { return new (t || ActionToProjectModule)(); }, providers: [
        src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _action_to_project_routing_module__WEBPACK_IMPORTED_MODULE_3__["ActionToProjectRoutingModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ActionToProjectModule, { declarations: [_action_to_project_component__WEBPACK_IMPORTED_MODULE_4__["ActionToProjectComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _action_to_project_routing_module__WEBPACK_IMPORTED_MODULE_3__["ActionToProjectRoutingModule"],
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"]], exports: [_action_to_project_component__WEBPACK_IMPORTED_MODULE_4__["ActionToProjectComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionToProjectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_action_to_project_component__WEBPACK_IMPORTED_MODULE_4__["ActionToProjectComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _action_to_project_routing_module__WEBPACK_IMPORTED_MODULE_3__["ActionToProjectRoutingModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"]
                ], exports: [
                    _action_to_project_component__WEBPACK_IMPORTED_MODULE_4__["ActionToProjectComponent"]
                ],
                providers: [
                    src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=action-to-project-action-to-project-module.js.map