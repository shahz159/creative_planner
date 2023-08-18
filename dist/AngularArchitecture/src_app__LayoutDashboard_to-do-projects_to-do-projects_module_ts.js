"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["src_app__LayoutDashboard_to-do-projects_to-do-projects_module_ts"],{

/***/ 76440:
/*!**********************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/to-do-projects/to-do-projects-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDoProjectsRoutingModule": () => (/* binding */ ToDoProjectsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _to_do_projects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-projects.component */ 80872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
        path: '', component: _to_do_projects_component__WEBPACK_IMPORTED_MODULE_0__.ToDoProjectsComponent,
        children: [
            {
                path: 'projectinfo/:projectcode/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__LayoutDashboard_project-info_project-info_module_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_portfolio-projects_portfolio-projects_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_view-dashboard-projects_view-dashboard-projects_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_notification_notification_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_projects-add_projects-add_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../project-info/project-info.module */ 71784)).then(m => m.ProjectInfoModule)
            },
            {
                path: 'ActionToProject/:id',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app__LayoutDashboard_action-to-project_action-to-project_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../action-to-project/action-to-project.module */ 69840)).then(m => m.ActionToProjectModule)
            }
        ]
    }];
class ToDoProjectsRoutingModule {
}
ToDoProjectsRoutingModule.ɵfac = function ToDoProjectsRoutingModule_Factory(t) { return new (t || ToDoProjectsRoutingModule)(); };
ToDoProjectsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ToDoProjectsRoutingModule });
ToDoProjectsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ToDoProjectsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 89923:
/*!**************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/to-do-projects/to-do-projects.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDoProjectsModule": () => (/* binding */ ToDoProjectsModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _to_do_projects_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-projects-routing.module */ 76440);
/* harmony import */ var _to_do_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do-projects.component */ 80872);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project-unplanned-task/project-unplanned-task.component */ 32444);
/* harmony import */ var _more_details_more_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../more-details/more-details.component */ 89753);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../projects-summary/projects-summary.component */ 80880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);










//import { MatDatepickerToggle } from '@angular/material/datepicker';








class ToDoProjectsModule {
}
ToDoProjectsModule.ɵfac = function ToDoProjectsModule_Factory(t) { return new (t || ToDoProjectsModule)(); };
ToDoProjectsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ToDoProjectsModule });
ToDoProjectsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService, _project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_3__.ProjectUnplannedTaskComponent, _more_details_more_details_component__WEBPACK_IMPORTED_MODULE_4__.MoreDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_6__.ProjectsSummaryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatNativeDateModule,
        // MatDatepickerToggle,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
        _to_do_projects_routing_module__WEBPACK_IMPORTED_MODULE_0__.ToDoProjectsRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__.NgMultiSelectDropDownModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ToDoProjectsModule, { declarations: [_to_do_projects_component__WEBPACK_IMPORTED_MODULE_1__.ToDoProjectsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatNativeDateModule,
        // MatDatepickerToggle,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
        _to_do_projects_routing_module__WEBPACK_IMPORTED_MODULE_0__.ToDoProjectsRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__.NgMultiSelectDropDownModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule], exports: [_to_do_projects_component__WEBPACK_IMPORTED_MODULE_1__.ToDoProjectsComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app__LayoutDashboard_to-do-projects_to-do-projects_module_ts.js.map