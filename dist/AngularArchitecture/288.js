"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([[288],{

/***/ 43932:
/*!******************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/more-details/more-details-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoreDetailsRoutingModule": () => (/* binding */ MoreDetailsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _more_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more-details.component */ 89753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _more_details_component__WEBPACK_IMPORTED_MODULE_0__.MoreDetailsComponent,
        children: [
            {
                path: 'ActionToProject',
                loadChildren: () => __webpack_require__.e(/*! import() */ 840).then(__webpack_require__.bind(__webpack_require__, /*! ../action-to-project/action-to-project.module */ 69840)).then(m => m.ActionToProjectModule)
            }
        ]
    }];
class MoreDetailsRoutingModule {
}
MoreDetailsRoutingModule.ɵfac = function MoreDetailsRoutingModule_Factory(t) { return new (t || MoreDetailsRoutingModule)(); };
MoreDetailsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MoreDetailsRoutingModule });
MoreDetailsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MoreDetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 76288:
/*!**********************************************************************!*\
  !*** ./src/app/_LayoutDashboard/more-details/more-details.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoreDetailsModule": () => (/* binding */ MoreDetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _more_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more-details-routing.module */ 43932);
/* harmony import */ var _more_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more-details.component */ 89753);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project-unplanned-task/project-unplanned-task.component */ 32444);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../to-do-projects/to-do-projects.component */ 80872);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../projects-summary/projects-summary.component */ 80880);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notification/notification.component */ 2352);
/* harmony import */ var _project_info_project_info_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../project-info/project-info.module */ 71784);
/* harmony import */ var _project_info_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../project-info/truncate.pipe */ 99457);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-pdf-viewer */ 63940);
/* harmony import */ var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-doc-viewer */ 89300);
/* harmony import */ var _meeting_report_meeting_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../meeting-report/meeting-report.component */ 5131);
/* harmony import */ var _details_details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../details/details/details.component */ 61446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);






















class MoreDetailsModule {
}
MoreDetailsModule.ɵfac = function MoreDetailsModule_Factory(t) { return new (t || MoreDetailsModule)(); };
MoreDetailsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: MoreDetailsModule });
MoreDetailsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_2__.ProjectUnplannedTaskComponent, _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_4__.ToDoProjectsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_5__.ProjectsSummaryComponent, _notification_notification_component__WEBPACK_IMPORTED_MODULE_6__.NotificationComponent,
        _project_info_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__.TruncatePipe, _meeting_report_meeting_report_component__WEBPACK_IMPORTED_MODULE_9__.MeetingReportComponent, _details_details_details_component__WEBPACK_IMPORTED_MODULE_10__.DetailsComponent,
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MAT_DATE_LOCALE, useValue: 'en-GB' }], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _more_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.MoreDetailsRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__.NgMultiSelectDropDownModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule, _project_info_project_info_module__WEBPACK_IMPORTED_MODULE_7__.ProjectInfoModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__.PdfViewerModule,
        ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_20__.NgxDocViewerModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](MoreDetailsModule, { declarations: [_more_details_component__WEBPACK_IMPORTED_MODULE_1__.MoreDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _more_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.MoreDetailsRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__.NgMultiSelectDropDownModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule, _project_info_project_info_module__WEBPACK_IMPORTED_MODULE_7__.ProjectInfoModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__.PdfViewerModule,
        ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_20__.NgxDocViewerModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule] }); })();


/***/ })

}]);
//# sourceMappingURL=288.js.map