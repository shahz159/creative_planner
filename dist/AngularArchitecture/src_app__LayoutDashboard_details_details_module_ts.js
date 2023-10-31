"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["src_app__LayoutDashboard_details_details_module_ts"],{

/***/ 94796:
/*!********************************************************************!*\
  !*** ./src/app/_LayoutDashboard/details/details-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsRoutingModule": () => (/* binding */ DetailsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details/details.component */ 61446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    { path: '', component: _details_details_component__WEBPACK_IMPORTED_MODULE_0__.DetailsComponent,
        children: [
            {
                path: 'ActionToProject/:id',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app__LayoutDashboard_action-to-project_action-to-project_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../action-to-project/action-to-project.module */ 69840)).then(m => m.ActionToProjectModule),
            }
        ]
    },
];
class DetailsRoutingModule {
}
DetailsRoutingModule.ɵfac = function DetailsRoutingModule_Factory(t) { return new (t || DetailsRoutingModule)(); };
DetailsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DetailsRoutingModule });
DetailsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 65033:
/*!************************************************************!*\
  !*** ./src/app/_LayoutDashboard/details/details.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsModule": () => (/* binding */ DetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 94796);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details/details.component */ 61446);
/* harmony import */ var _meeting_report_meeting_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meeting-report/meeting-report.component */ 5131);
/* harmony import */ var _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects-summary/projects-summary.component */ 80880);
/* harmony import */ var _more_details_more_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../more-details/more-details.component */ 89753);
/* harmony import */ var _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../to-do-projects/to-do-projects.component */ 80872);
/* harmony import */ var _project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../project-unplanned-task/project-unplanned-task.component */ 32444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);









class DetailsModule {
}
DetailsModule.ɵfac = function DetailsModule_Factory(t) { return new (t || DetailsModule)(); };
DetailsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: DetailsModule });
DetailsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        _project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_6__.ProjectUnplannedTaskComponent, _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_5__.ToDoProjectsComponent, _more_details_more_details_component__WEBPACK_IMPORTED_MODULE_4__.MoreDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsSummaryComponent, _meeting_report_meeting_report_component__WEBPACK_IMPORTED_MODULE_2__.MeetingReportComponent
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DetailsModule, { declarations: [_details_details_component__WEBPACK_IMPORTED_MODULE_1__.DetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app__LayoutDashboard_details_details_module_ts.js.map