"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["src_app__LayoutDashboard_more-details_more-details_module_ts"],{

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
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app__LayoutDashboard_action-to-project_action-to-project_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../action-to-project/action-to-project.module */ 69840)).then(m => m.ActionToProjectModule)
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _more_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more-details-routing.module */ 43932);
/* harmony import */ var _more_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more-details.component */ 89753);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project-unplanned-task/project-unplanned-task.component */ 32444);
/* harmony import */ var _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../to-do-projects/to-do-projects.component */ 80872);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects-summary/projects-summary.component */ 80880);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notification/notification.component */ 2352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);














class MoreDetailsModule {
}
MoreDetailsModule.ɵfac = function MoreDetailsModule_Factory(t) { return new (t || MoreDetailsModule)(); };
MoreDetailsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: MoreDetailsModule });
MoreDetailsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_2__.ProjectUnplannedTaskComponent, _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_3__.ToDoProjectsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsSummaryComponent, _notification_notification_component__WEBPACK_IMPORTED_MODULE_5__.NotificationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _more_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.MoreDetailsRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__.NgMultiSelectDropDownModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MoreDetailsModule, { declarations: [_more_details_component__WEBPACK_IMPORTED_MODULE_1__.MoreDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _more_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.MoreDetailsRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__.NgMultiSelectDropDownModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app__LayoutDashboard_more-details_more-details_module_ts.js.map