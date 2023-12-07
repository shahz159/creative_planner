"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([[33],{

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
                loadChildren: () => __webpack_require__.e(/*! import() */ 840).then(__webpack_require__.bind(__webpack_require__, /*! ../action-to-project/action-to-project.module */ 69840)).then(m => m.ActionToProjectModule),
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 94796);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details/details.component */ 61446);
/* harmony import */ var _meeting_report_meeting_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meeting-report/meeting-report.component */ 5131);
/* harmony import */ var _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects-summary/projects-summary.component */ 80880);
/* harmony import */ var _more_details_more_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../more-details/more-details.component */ 89753);
/* harmony import */ var _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../to-do-projects/to-do-projects.component */ 80872);
/* harmony import */ var _project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../project-unplanned-task/project-unplanned-task.component */ 32444);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ 11169);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);



















//import { FilterPipe } from 'path-to-filter-pipe';
class DetailsModule {
}
DetailsModule.ɵfac = function DetailsModule_Factory(t) { return new (t || DetailsModule)(); };
DetailsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: DetailsModule });
DetailsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        _project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_6__.ProjectUnplannedTaskComponent, _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_5__.ToDoProjectsComponent, _more_details_more_details_component__WEBPACK_IMPORTED_MODULE_4__.MoreDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _projects_summary_projects_summary_component__WEBPACK_IMPORTED_MODULE_3__.ProjectsSummaryComponent, _meeting_report_meeting_report_component__WEBPACK_IMPORTED_MODULE_2__.MeetingReportComponent
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__.NgMultiSelectDropDownModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__.Ng2SearchPipeModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__.MatAutocompleteModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](DetailsModule, { declarations: [
        // FilterPipe,
        _details_details_component__WEBPACK_IMPORTED_MODULE_1__.DetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__.NgMultiSelectDropDownModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__.Ng2SearchPipeModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__.MatAutocompleteModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule] }); })();


/***/ })

}]);
//# sourceMappingURL=33.js.map