"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["default-src_app__LayoutDashboard_action-to-assign_action-to-assign_module_ts"],{

/***/ 47752:
/*!**************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/action-to-assign/action-to-assign-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionToAssignRoutingModule": () => (/* binding */ ActionToAssignRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _action_to_assign_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-to-assign.component */ 1322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
        path: '', component: _action_to_assign_component__WEBPACK_IMPORTED_MODULE_0__.ActionToAssignComponent
    }
];
class ActionToAssignRoutingModule {
}
ActionToAssignRoutingModule.ɵfac = function ActionToAssignRoutingModule_Factory(t) { return new (t || ActionToAssignRoutingModule)(); };
ActionToAssignRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ActionToAssignRoutingModule });
ActionToAssignRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ActionToAssignRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1322:
/*!*********************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/action-to-assign/action-to-assign.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionToAssignComponent": () => (/* binding */ ActionToAssignComponent)
/* harmony export */ });
/* harmony import */ var src_app_Models_assigntask_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_Models/assigntask-dto */ 60065);
/* harmony import */ var src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/completed-projects-dto */ 60808);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ 77585);
/* harmony import */ var src_app_LayoutDashboard_project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.component */ 32444);
/* harmony import */ var _meeting_report_meeting_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../meeting-report/meeting-report.component */ 5131);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);

















function ActionToAssignComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r10.Exec_BlockNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r10.Exec_BlockName, " ");
} }
function ActionToAssignComponent_ng_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ng-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r11.Emp_No);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r11.DisplayName, " ");
} }
function ActionToAssignComponent_span_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Assign To required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ActionToAssignComponent_ng_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ng-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r12.Portfolio_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r12.Portfolio_Name, " ");
} }
function ActionToAssignComponent_span_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Start Date required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ActionToAssignComponent_div_64_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "End Date required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ActionToAssignComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "End Date :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ActionToAssignComponent_div_64_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r15.datesCheck()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ActionToAssignComponent_div_64_Template_input_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r13.open()); })("ngModelChange", function ActionToAssignComponent_div_64_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18._EndDate = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "mat-datepicker-toggle", 25)(7, "mat-datepicker", null, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ActionToAssignComponent_div_64_span_9_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r13)("min", ctx_r8._StartDate)("ngModel", ctx_r8._EndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.noEndDate == true);
} }
function ActionToAssignComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "End Date :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ActionToAssignComponent_div_65_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r20.enddateChecker()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ActionToAssignComponent_div_65_Template_input_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r19.open()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "mat-datepicker-toggle", 25)(7, "mat-datepicker", null, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r19)("matDatepickerFilter", ctx_r9.myFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r19);
} }
class ActionToAssignComponent {
    constructor(notifyService, route, ProjectTypeService, dateAdapter, datepipe, router, BsService, _projectunplanned, _meetingreport) {
        this.notifyService = notifyService;
        this.route = route;
        this.ProjectTypeService = ProjectTypeService;
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.router = router;
        this.BsService = BsService;
        this._projectunplanned = _projectunplanned;
        this._meetingreport = _meetingreport;
        this.selectedProjectType = "";
        this._description = "";
        this._StartDate = null;
        this._EndDate = null;
        this._SelectedEmpNo = "";
        this.disablePreviousDate = new Date();
        this._taskName = "";
        this.dropdownSettings_Employee = {};
        this.cat_name = "";
        this.txtdisabled = false;
        this.buttondisable = true;
        this._remarks = "";
        this._inputAttachments = [];
        this.selectedFile = null;
        this.typeoftask = "";
        this.selectedEmployee = "";
        this.noStartDate = false;
        this.noEndDate = false;
        this._ObjAssigntaskDTO = new src_app_Models_assigntask_dto__WEBPACK_IMPORTED_MODULE_0__.AssigntaskDTO();
        this._ObjCompletedProj = new src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_1__.CompletedProjectsDTO();
        this.BsService.bs_AssignId.subscribe(i => this.task_id = i);
        this.BsService.bs_TaskName.subscribe(t => {
            this._taskName = t;
            if (this._taskName == null) {
                this.txtdisabled = false;
                this._taskName = null;
            }
            else {
                this.txtdisabled = true;
            }
        });
        this._inputAttachments = [];
    }
    ngOnInit() {
        this.CurrentUser_ID = localStorage.getItem('EmpNo');
        this._Urlid = this.route.snapshot.params['id'];
        this.getProjectTypeList();
        this.GetAssignFormEmployeeDropdownList();
        this.BsService.bs_catId.subscribe(c => { this.cat_id = c; });
        this.BsService.bs_catName.subscribe(d => { this.cat_name = d; });
        this.ProjectTypeService.GetPortfoliosForAssignTask().subscribe((data) => {
            this.PortfolioList = data;
            console.log(this.PortfolioList, "portfolios");
        });
    }
    getProjectTypeList() {
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.Mode = 'AssignedTask';
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
        });
    }
    EmployeeOnSelect(obj) {
        this._SelectedEmpNo = obj;
        this.selectedEmployee = this._SelectedEmpNo;
    }
    EmployeeOnDeselect(obj) {
        this._SelectedEmpNo = null;
        this.selectedEmployee = this._SelectedEmpNo;
    }
    onFileChangeATP(e) {
        // this._inputAttachments = <File>e.target.files[0];
        this._inputAttachments = [...this._inputAttachments, {
                FileName: e.target.files[0].name,
                Size: e.target.files[0].size,
                Files: e.target.files[0]
            }];
    }
    datesCheck() {
        this.noEndDate = false;
    }
    OnAssignTask_Submit() {
        // debugger
        if (this._StartDate == null && this._EndDate != null) {
            this.noStartDate = true;
            this.noEndDate = false;
        }
        else if (this._StartDate != null && this._EndDate == null) {
            this.noEndDate = true;
            this.noStartDate = false;
        }
        else {
            this._ObjAssigntaskDTO.TaskName = this._taskName;
            this._ObjAssigntaskDTO.TaskDescription = this._description;
            var datestrStart;
            var datestrEnd;
            if (this._StartDate != null && this._EndDate != null) {
                // current_Date: any = this.datepipe.transform(new Date(), 'yyyy/MM/dd');
                // datestrStart = (new Date(this._StartDate)).toUTCString();
                // datestrEnd = (new Date(this._EndDate)).toUTCString();
                // datestrStart = this.datepipe.transform(this._StartDate, 'yyyy/MM/dd HH:MM:SS');
                // datestrEnd = this.datepipe.transform(this._EndDate, 'yyyy/MM/dd HH:MM:SS');
                datestrStart = moment__WEBPACK_IMPORTED_MODULE_2__(this._StartDate).format();
                datestrEnd = moment__WEBPACK_IMPORTED_MODULE_2__(this._EndDate).format();
                this._ObjAssigntaskDTO.StartDate = datestrStart;
                this._ObjAssigntaskDTO.EndDate = datestrEnd;
            }
            else {
                // datestrStart = this.datepipe.transform(new Date(), 'yyyy/MM/dd HH:MM:SS');
                // datestrEnd = this.datepipe.transform(new Date(), 'yyyy/MM/dd HH:MM:SS');
                datestrStart = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format();
                datestrEnd = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format();
                this._ObjAssigntaskDTO.StartDate = datestrStart;
                this._ObjAssigntaskDTO.EndDate = datestrEnd;
            }
            if (this._StartDate != null && this._EndDate != null) {
                this.Difference_In_Time = this._StartDate.getTime() - this._EndDate.getTime();
                this.Difference_In_Days = this.Difference_In_Time / (1000 * 3600 * 24);
                this._ObjAssigntaskDTO.ProjectDays = (-this.Difference_In_Days);
            }
            else {
                this._ObjAssigntaskDTO.ProjectDays = 0;
            }
            //for hours Un-Comment Below Line
            //this._ObjAssigntaskDTO.ProjectDays = this._ObjAssigntaskDTO.ProjectDays * 8 / 1;
            this.BsService.bs_TypeofTask.subscribe(t => {
                this.typeoftask = t;
            });
            this._ObjAssigntaskDTO.TypeOfTask = this.typeoftask;
            this._ObjAssigntaskDTO.AssignTo = this.selectedEmployee;
            this._ObjAssigntaskDTO.Assigned_By = this.CurrentUser_ID;
            this._ObjAssigntaskDTO.AssignId = this.task_id;
            this._ObjAssigntaskDTO.ProjectType = this.selectedProjectType;
            this._ObjAssigntaskDTO.Remarks = this._remarks;
            // console.log(this.selectedProjectType);
            if (this._inputAttachments != null) {
                if (this._inputAttachments.length > 0) {
                    this._ObjAssigntaskDTO.Reference = this._inputAttachments[0].Files;
                }
            }
            //console.log("Sending Obj..",this._ObjAssigntaskDTO)
            const fd = new FormData();
            fd.append("AssignTo", this._ObjAssigntaskDTO.AssignTo);
            if (this._inputAttachments != null) {
                if (this._inputAttachments.length > 0) {
                    fd.append("Attachment", "true");
                    fd.append('file', this._inputAttachments[0].Files);
                    console.log(this._inputAttachments, 'files');
                }
            }
            else {
                fd.append("Attachment", "false");
                fd.append('file', "");
            }
            fd.append("TaskName", this._taskName);
            fd.append("Desc", this._description);
            fd.append("StartDate", datestrStart);
            fd.append("EndDate", datestrEnd);
            fd.append("ProjectDays", this._ObjAssigntaskDTO.ProjectDays.toString());
            fd.append("TypeofTask", this.typeoftask);
            fd.append("Remarks", this._remarks);
            fd.append("ProjectType", this.selectedProjectType);
            if (this.task_id != null) {
                fd.append("AssignId", this.task_id.toString());
            }
            fd.append("AssignedBy", this.CurrentUser_ID);
            if (this.port_id != null && this.port_id != undefined && this.port_id != '') {
                this.port_id = this.port_id;
            }
            else {
                this.port_id = 0;
            }
            fd.append("Portfolio_Id", this.port_id);
            this.ProjectTypeService._InsertAssignTaskServie(fd).subscribe((data) => {
                if (this._Urlid == 1) {
                    this._projectunplanned.getCatid();
                    this.router.navigate(["UnplannedTask/"]);
                    let message = data['Message'];
                    this.notifyService.showSuccess("Task sent to assign projects", message);
                    this.clearFeilds();
                    this.closeInfo();
                    this._inputAttachments = [];
                }
                else if (this._Urlid == 2) {
                    this._meetingreport.getScheduleId();
                    this._meetingreport.GetAssigned_SubtaskProjects();
                    let message = data['Message'];
                    this.notifyService.showSuccess("Task sent to assign projects", message);
                    this.clearFeilds();
                    this.closeInfo();
                    this._inputAttachments = [];
                }
            });
        }
    }
    // this.OnCategoryClick(this._Categoryid, this._CategoryName);
    // this._TodoList = JSON.parse(data['TodoList']);
    // this._CompletedList = JSON.parse(data['CompletedList']);
    closeInfo() {
        this.clearFeilds();
        if (this._Urlid == 1) {
            this.router.navigate(["UnplannedTask/"]);
        }
        else if (this._Urlid == 2) {
            this._meetingreport.getScheduleId();
        }
        document.getElementById("mysideInfobar").classList.remove("kt-action-panel--on");
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
        document.getElementById("rightbar-overlay").style.display = "none";
        // document.getElementById("mysideInfobar_NewSubtask").classList.remove("kt-quick-panel--on");
        //document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    }
    clearFeilds() {
        this._description = "";
        this._StartDate = null;
        this._remarks = null;
        this._inputAttachments = null;
        document.getElementById("uploadFile").value = "";
        //document.getElementById("uploadFile").Value = null;
        this._EndDate = null;
        this._SelectedEmpNo = "";
        this.selectedProjectType = null;
        this.selectedProjectCode = "";
        this.SelectedEmplList = [];
        this.selectedProjectCodelist = [];
        this.noStartDate = false;
        this.noEndDate = false;
    }
    GetAssignFormEmployeeDropdownList() {
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.Mode = 'AssignedTask';
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
            //console.log(this.EmployeeList);
            this.dropdownSettings_Employee = {
                singleSelection: true,
                idField: 'Emp_No',
                textField: 'DisplayName',
                itemsShowLimit: 3,
                allowSearchFilter: true,
                closeDropDownOnSelection: true
            };
        });
    }
    startdatechecker() {
        this.noStartDate = false;
        this.noEndDate = true;
        this._EndDate = null;
    }
    enddateChecker() {
        this.noStartDate = true;
        this.myFilter = (d) => {
            const day = (d || new Date()).getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 1 && day !== 2 && day !== 3 && day !== 4 && day !== 5 && day !== 6 && day !== 7;
        };
    }
}
ActionToAssignComponent.ɵfac = function ActionToAssignComponent_Factory(t) { return new (t || ActionToAssignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_4__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_5__.BsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_LayoutDashboard_project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_6__.ProjectUnplannedTaskComponent), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_meeting_report_meeting_report_component__WEBPACK_IMPORTED_MODULE_7__.MeetingReportComponent)); };
ActionToAssignComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ActionToAssignComponent, selectors: [["app-action-to-assign"]], decls: 78, vars: 27, consts: [[1, "p-4"], ["kt-hidden-height", "40", 1, "offcanvas-header", "d-flex", "align-items-center", "justify-content-between", "pb-5"], [1, "font-weight-bold", "m-0"], ["href", "javascript:void(0)", 1, "btn", "btn-xs", "btn-icon", "btn-hover-primary", 3, "click"], [1, "fa", "fa-times"], [1, "form-group"], ["placeholder", "Select project type", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", 3, "hidden"], ["name", "Select Type", "placeholder", "Submission type", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value"], ["type", "text", "placeholder", "Enter task name", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["aria-describedby", "basic-addon1", "placeholder", "Enter task description", 1, "form-control", 2, "height", "100px", 3, "ngModel", "ngModelChange"], [1, "form-group", "text-dark-50", "w-75px", "flex-grow-1", "brdng-0"], [1, "text-danger"], ["required", "", "placeholder", "Select employee", 3, "ngModel", "change", "ngModelChange"], ["assign", "ngModel"], ["style", "color:red", 4, "ngIf"], ["placeholder", "Select portfolio", 3, "ngModel", "ngModelChange"], ["Portfolio", "ngModel"], [1, "d-flex", "gap-1"], [1, "form-group", "flex-1"], [1, "input-group", 3, "click"], ["matInput", "", "placeholder", "Start date", 1, "form-control", 3, "matDatepicker", "min", "ngModel", "click", "ngModelChange"], [1, "input-group-text", "p-0"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["class", "form-group flex-1", 4, "ngIf"], ["for", "exampleFormControlFile1"], ["aria-label", "With textarea", "placeholder", "Enter task rearks if any", 1, "form-control", 2, "height", "111px", 3, "ngModel", "ngModelChange"], [1, "custom-file", "pl-1"], ["type", "file", "id", "uploadFile", "value", "hello", "accept", "application/pdf", 1, "form-control-file", 3, "change"], [1, "form-group", "mb-1"], ["type", "submit", 1, "btn", "btn-primary", 2, "width", "150px", 3, "disabled", "click"], [2, "color", "red"], ["matInput", "", "placeholder", "End date", 1, "form-control", 3, "matDatepicker", "min", "ngModel", "click", "ngModelChange"], ["picker2", ""], ["matInput", "", "placeholder", "End Date", 1, "form-control", 3, "matDatepicker", "matDatepickerFilter", "click"]], template: function ActionToAssignComponent_Template(rf, ctx) { if (rf & 1) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Assign Task/Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ActionToAssignComponent_Template_a_click_4_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5)(7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Project Type : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ActionToAssignComponent_Template_mat_select_ngModelChange_9_listener($event) { return ctx.selectedProjectType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, ActionToAssignComponent_mat_option_10_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 8)(12, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ActionToAssignComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.SelectedSubmissionType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Select Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Quarterly");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "HalfYearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Annually");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 5)(28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, " Task/Project Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ActionToAssignComponent_Template_input_ngModelChange_30_listener($event) { return ctx._taskName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 5)(32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Description : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ActionToAssignComponent_Template_textarea_ngModelChange_34_listener($event) { return ctx._description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 13)(36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, " Assign To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "ng-select", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function ActionToAssignComponent_Template_ng_select_change_42_listener($event) { return ctx.EmployeeOnSelect($event); })("ngModelChange", function ActionToAssignComponent_Template_ng_select_ngModelChange_42_listener($event) { return ctx.SelectedEmplList = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, ActionToAssignComponent_ng_option_44_Template, 2, 2, "ng-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, ActionToAssignComponent_span_45_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 13)(47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Link Portfolio : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "ng-select", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ActionToAssignComponent_Template_ng_select_ngModelChange_50_listener($event) { return ctx.port_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, ActionToAssignComponent_ng_option_52_Template, 2, 2, "ng-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 20)(54, "div", 21)(55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "Start Date : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ActionToAssignComponent_Template_div_click_57_listener() { return ctx.startdatechecker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ActionToAssignComponent_Template_input_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](62); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r6.open()); })("ngModelChange", function ActionToAssignComponent_Template_input_ngModelChange_58_listener($event) { return ctx._StartDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](60, "mat-datepicker-toggle", 25)(61, "mat-datepicker", null, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, ActionToAssignComponent_span_63_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, ActionToAssignComponent_div_64_Template, 10, 5, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](65, ActionToAssignComponent_div_65_Template, 9, 3, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div", 5)(67, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "textarea", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ActionToAssignComponent_Template_textarea_ngModelChange_69_listener($event) { return ctx._remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 5)(71, "div", 30)(72, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, "Reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function ActionToAssignComponent_Template_input_change_74_listener($event) { return ctx.onFileChangeATP($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 32)(76, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ActionToAssignComponent_Template_button_click_76_listener() { return ctx.OnAssignTask_Submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, "Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](43);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.selectedProjectType);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.ProjectTypelist);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.selectedProjectType != "003" && ctx.selectedProjectType != "008");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.SelectedSubmissionType);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx._taskName);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx._description);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.SelectedEmplList);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.EmployeeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _r1.touched && !ctx.SelectedEmplList);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.port_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.PortfolioList);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r6)("min", ctx.disablePreviousDate)("ngModel", ctx._StartDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.noStartDate == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx._StartDate != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx._StartDate == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx._remarks);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.SelectedEmplList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__["ɵr"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tdG8tYXNzaWduLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 36833:
/*!******************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/action-to-assign/action-to-assign.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionToAssignModule": () => (/* binding */ ActionToAssignModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _action_to_assign_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-to-assign-routing.module */ 47752);
/* harmony import */ var _action_to_assign_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-to-assign.component */ 1322);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);










class ActionToAssignModule {
}
ActionToAssignModule.ɵfac = function ActionToAssignModule_Factory(t) { return new (t || ActionToAssignModule)(); };
ActionToAssignModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ActionToAssignModule });
ActionToAssignModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _action_to_assign_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActionToAssignRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__.NgMultiSelectDropDownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ActionToAssignModule, { declarations: [_action_to_assign_component__WEBPACK_IMPORTED_MODULE_1__.ActionToAssignComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _action_to_assign_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActionToAssignRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__.NgMultiSelectDropDownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app__LayoutDashboard_action-to-assign_action-to-assign_module_ts.js.map