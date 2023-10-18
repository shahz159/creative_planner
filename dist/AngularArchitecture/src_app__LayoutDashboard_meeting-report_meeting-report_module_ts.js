"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["src_app__LayoutDashboard_meeting-report_meeting-report_module_ts"],{

/***/ 76187:
/*!**********************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/meeting-report/meeting-report-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetingReportRoutingModule": () => (/* binding */ MeetingReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _meeting_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meeting-report.component */ 5131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _meeting_report_component__WEBPACK_IMPORTED_MODULE_0__.MeetingReportComponent,
        children: [
            {
                path: 'ActionToAssign/:id',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app__LayoutDashboard_action-to-assign_action-to-assign_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../action-to-assign/action-to-assign.module */ 36833)).then(m => m.ActionToAssignModule)
            },
            {
                path: 'ActionToProject/:id',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app__LayoutDashboard_action-to-project_action-to-project_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../action-to-project/action-to-project.module */ 69840)).then(m => m.ActionToProjectModule)
            }
        ]
    }];
class MeetingReportRoutingModule {
}
MeetingReportRoutingModule.ɵfac = function MeetingReportRoutingModule_Factory(t) { return new (t || MeetingReportRoutingModule)(); };
MeetingReportRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MeetingReportRoutingModule });
MeetingReportRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MeetingReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8347:
/*!**************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/meeting-report/meeting-report.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetingReportModule": () => (/* binding */ MeetingReportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _meeting_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meeting-report.component */ 5131);
/* harmony import */ var _meeting_report_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meeting-report-routing.module */ 76187);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @kolkov/angular-editor */ 167);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project-unplanned-task/project-unplanned-task.component */ 32444);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../to-do-projects/to-do-projects.component */ 80872);
/* harmony import */ var _more_details_more_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../more-details/more-details.component */ 89753);
/* harmony import */ var _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../projects-summary/projects-summary.component */ 80880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);















class MeetingReportModule {
}
MeetingReportModule.ɵfac = function MeetingReportModule_Factory(t) { return new (t || MeetingReportModule)(); };
MeetingReportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: MeetingReportModule });
MeetingReportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        _project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_2__.ProjectUnplannedTaskComponent, _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_3__.ToDoProjectsComponent, _more_details_more_details_component__WEBPACK_IMPORTED_MODULE_4__.MoreDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_5__.ProjectsSummaryComponent
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
        _meeting_report_routing_module__WEBPACK_IMPORTED_MODULE_1__.MeetingReportRoutingModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_9__.AngularEditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MeetingReportModule, { declarations: [_meeting_report_component__WEBPACK_IMPORTED_MODULE_0__.MeetingReportComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
        _meeting_report_routing_module__WEBPACK_IMPORTED_MODULE_1__.MeetingReportRoutingModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_9__.AngularEditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app__LayoutDashboard_meeting-report_meeting-report_module_ts.js.map