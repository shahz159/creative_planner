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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ 77585);
/* harmony import */ var src_app_LayoutDashboard_project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.component */ 32444);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
















function ActionToAssignComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", item_r8.Exec_BlockNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r8.Exec_BlockName, " ");
} }
function ActionToAssignComponent_ng_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", item_r9.Emp_No);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r9.DisplayName, " ");
} }
function ActionToAssignComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Assign To required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ActionToAssignComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Start Date required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ActionToAssignComponent_div_41_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "End Date required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ActionToAssignComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "End Date :");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ActionToAssignComponent_div_41_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.datesCheck()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ActionToAssignComponent_div_41_Template_input_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r10.open()); })("ngModelChange", function ActionToAssignComponent_div_41_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15._EndDate = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "mat-datepicker-toggle", 20)(7, "mat-datepicker", null, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ActionToAssignComponent_div_41_span_9_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matDatepicker", _r10)("min", ctx_r6._StartDate)("ngModel", ctx_r6._EndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.noEndDate == true);
} }
function ActionToAssignComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "End Date :");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ActionToAssignComponent_div_42_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.enddateChecker()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ActionToAssignComponent_div_42_Template_input_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r16.open()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "mat-datepicker-toggle", 20)(7, "mat-datepicker", null, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matDatepicker", _r16)("matDatepickerFilter", ctx_r7.myFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", _r16);
} }
class ActionToAssignComponent {
    constructor(notifyService, ProjectTypeService, dateAdapter, datepipe, router, BsService, _projectunplanned) {
        this.notifyService = notifyService;
        this.ProjectTypeService = ProjectTypeService;
        this.dateAdapter = dateAdapter;
        this.datepipe = datepipe;
        this.router = router;
        this.BsService = BsService;
        this._projectunplanned = _projectunplanned;
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
        this.getProjectTypeList();
        this.GetAssignFormEmployeeDropdownList();
        this.BsService.bs_catId.subscribe(c => { this.cat_id = c; });
        this.BsService.bs_catName.subscribe(d => { this.cat_name = d; });
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
            // alert(datestrStart);
            // alert(datestrEnd);
            // alert(this.cat_id);
            // alert(this.cat_name);
            this.ProjectTypeService._InsertAssignTaskServie(fd).subscribe((data) => {
                this._projectunplanned.getCatid();
                this.router.navigate(["UnplannedTask/"]);
                let message = data['Message'];
                this.notifyService.showSuccess("Task sent to assign projects", message);
                // alert(1);
                this.clearFeilds();
                this.closeInfo();
                this._inputAttachments = [];
            });
        }
    }
    // this.OnCategoryClick(this._Categoryid, this._CategoryName);
    // this._TodoList = JSON.parse(data['TodoList']);
    // this._CompletedList = JSON.parse(data['CompletedList']);
    closeInfo() {
        this.clearFeilds();
        this.router.navigate(["UnplannedTask/"]);
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
ActionToAssignComponent.ɵfac = function ActionToAssignComponent_Factory(t) { return new (t || ActionToAssignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_4__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_5__.BsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_LayoutDashboard_project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_6__.ProjectUnplannedTaskComponent)); };
ActionToAssignComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ActionToAssignComponent, selectors: [["app-action-to-assign"]], decls: 71, vars: 25, consts: [[1, "p-4"], ["kt-hidden-height", "40", 1, "offcanvas-header", "d-flex", "align-items-center", "justify-content-between", "pb-5"], [1, "font-weight-bold", "m-0"], ["href", "javascript:void(0)", 1, "btn", "btn-xs", "btn-icon", "btn-hover-primary", 3, "click"], [1, "fa", "fa-times"], [1, "form-group"], ["placeholder", "Select Project Type", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Enter Task Name", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["aria-describedby", "basic-addon1", 1, "form-control", 2, "height", "100px", 3, "ngModel", "ngModelChange"], [1, "form-group", "text-dark-50", "w-75px", "flex-grow-1", "brdng-0"], [1, "text-danger"], ["required", "", "placeholder", "Select Employee", 3, "ngModel", "change", "ngModelChange"], ["assign", "ngModel"], ["style", "color:red", 4, "ngIf"], [1, "d-flex", "gap-1"], [1, "form-group", "flex-1"], [1, "input-group", 3, "click"], ["matInput", "", "placeholder", "Start Date", 1, "form-control", 3, "matDatepicker", "min", "ngModel", "click", "ngModelChange"], [1, "input-group-text", "p-0"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["class", "form-group flex-1", 4, "ngIf"], [1, "form-group", 3, "hidden"], ["name", "Select Type", "placeholder", "Submission Type", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value"], ["for", "exampleFormControlFile1"], ["aria-label", "With textarea", 1, "form-control", 2, "height", "111px", 3, "ngModel", "ngModelChange"], [1, "custom-file", "pl-1"], ["type", "file", "id", "uploadFile", "value", "hello", "accept", "application/pdf", 1, "form-control-file", 3, "change"], [1, "form-group", "mb-1"], ["type", "submit", 1, "btn", "btn-primary", 2, "width", "150px", 3, "disabled", "click"], [2, "color", "red"], ["matInput", "", "placeholder", "End Date", 1, "form-control", 3, "matDatepicker", "min", "ngModel", "click", "ngModelChange"], ["picker2", ""], ["matInput", "", "placeholder", "End Date", 1, "form-control", 3, "matDatepicker", "matDatepickerFilter", "click"]], template: function ActionToAssignComponent_Template(rf, ctx) { if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Assign Task/Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ActionToAssignComponent_Template_a_click_4_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5)(7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Project Type : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ActionToAssignComponent_Template_mat_select_ngModelChange_9_listener($event) { return ctx.selectedProjectType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ActionToAssignComponent_mat_option_10_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 5)(12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Task/Project Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ActionToAssignComponent_Template_input_ngModelChange_14_listener($event) { return ctx._taskName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 5)(16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Description : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ActionToAssignComponent_Template_textarea_ngModelChange_18_listener($event) { return ctx._description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 10)(20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Assign To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "ng-select", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ActionToAssignComponent_Template_ng_select_change_26_listener($event) { return ctx.EmployeeOnSelect($event); })("ngModelChange", function ActionToAssignComponent_Template_ng_select_ngModelChange_26_listener($event) { return ctx.SelectedEmplList = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, ActionToAssignComponent_ng_option_28_Template, 2, 2, "ng-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, ActionToAssignComponent_span_29_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 15)(31, "div", 16)(32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Start Date : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ActionToAssignComponent_Template_div_click_34_listener() { return ctx.startdatechecker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ActionToAssignComponent_Template_input_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](39); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r4.open()); })("ngModelChange", function ActionToAssignComponent_Template_input_ngModelChange_35_listener($event) { return ctx._StartDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "mat-datepicker-toggle", 20)(38, "mat-datepicker", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, ActionToAssignComponent_span_40_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, ActionToAssignComponent_div_41_Template, 10, 5, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, ActionToAssignComponent_div_42_Template, 9, 3, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 23)(44, "mat-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ActionToAssignComponent_Template_mat_select_ngModelChange_44_listener($event) { return ctx.SelectedSubmissionType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Select Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Quarterly");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "HalfYearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Annually");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 5)(60, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ActionToAssignComponent_Template_textarea_ngModelChange_62_listener($event) { return ctx._remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 5)(64, "div", 28)(65, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ActionToAssignComponent_Template_input_change_67_listener($event) { return ctx.onFileChangeATP($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 30)(69, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ActionToAssignComponent_Template_button_click_69_listener() { return ctx.OnAssignTask_Submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](27);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.selectedProjectType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.ProjectTypelist);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx._taskName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx._description);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.SelectedEmplList);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.EmployeeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r1.touched && !ctx.SelectedEmplList);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matDatepicker", _r4)("min", ctx.disablePreviousDate)("ngModel", ctx._StartDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.noStartDate == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx._StartDate != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx._StartDate == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx.selectedProjectType != "003");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.SelectedSubmissionType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx._remarks);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.SelectedEmplList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["ɵr"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tdG8tYXNzaWduLmNvbXBvbmVudC5jc3MifQ== */"] });


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