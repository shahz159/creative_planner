(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_LayoutDashboard-to-do-projects-to-do-projects-module"],{

/***/ "./src/app/_LayoutDashboard/to-do-projects/to-do-projects-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/to-do-projects/to-do-projects-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ToDoProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoProjectsRoutingModule", function() { return ToDoProjectsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _to_do_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-do-projects.component */ "./src/app/_LayoutDashboard/to-do-projects/to-do-projects.component.ts");





const routes = [{
        path: '', component: _to_do_projects_component__WEBPACK_IMPORTED_MODULE_2__["ToDoProjectsComponent"],
        children: [
            {
                path: 'projectinfo/:projectcode',
                loadChildren: () => Promise.all(/*! import() | project-info-project-info-module */[__webpack_require__.e("default~_LayoutDashboard-dashboard-dashboard-module~_LayoutDashboard-more-details-more-details-modul~98b028d3"), __webpack_require__.e("default~_LayoutDashboard-dashboard-dashboard-module~_LayoutDashboard-home-home-module~_LayoutDashboa~20575a49"), __webpack_require__.e("default~_LayoutDashboard-dashboard-dashboard-module~project-info-project-info-module"), __webpack_require__.e("default~_LayoutDashboard-more-details-more-details-module~project-info-project-info-module"), __webpack_require__.e("default~_LayoutDashboard-projects-summary-projects-summary-module~project-info-project-info-module"), __webpack_require__.e("project-info-project-info-module")]).then(__webpack_require__.bind(null, /*! ../project-info/project-info.module */ "./src/app/_LayoutDashboard/project-info/project-info.module.ts")).then(m => m.ProjectInfoModule)
            },
            {
                path: 'ActionToProject',
                loadChildren: () => __webpack_require__.e(/*! import() | action-to-project-action-to-project-module */ "action-to-project-action-to-project-module").then(__webpack_require__.bind(null, /*! ../action-to-project/action-to-project.module */ "./src/app/_LayoutDashboard/action-to-project/action-to-project.module.ts")).then(m => m.ActionToProjectModule)
            }
        ]
    }];
class ToDoProjectsRoutingModule {
}
ToDoProjectsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ToDoProjectsRoutingModule });
ToDoProjectsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ToDoProjectsRoutingModule_Factory(t) { return new (t || ToDoProjectsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToDoProjectsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDoProjectsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/_LayoutDashboard/to-do-projects/to-do-projects.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/to-do-projects/to-do-projects.module.ts ***!
  \**************************************************************************/
/*! exports provided: ToDoProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoProjectsModule", function() { return ToDoProjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _to_do_projects_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./to-do-projects-routing.module */ "./src/app/_LayoutDashboard/to-do-projects/to-do-projects-routing.module.ts");
/* harmony import */ var _to_do_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./to-do-projects.component */ "./src/app/_LayoutDashboard/to-do-projects/to-do-projects.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../project-unplanned-task/project-unplanned-task.component */ "./src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.component.ts");











//import { MatDatepickerToggle } from '@angular/material/datepicker';




class ToDoProjectsModule {
}
ToDoProjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ToDoProjectsModule });
ToDoProjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ToDoProjectsModule_Factory(t) { return new (t || ToDoProjectsModule)(); }, providers: [_project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_13__["ProjectUnplannedTaskComponent"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
            // MatDatepickerToggle,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _to_do_projects_routing_module__WEBPACK_IMPORTED_MODULE_3__["ToDoProjectsRoutingModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["NgMultiSelectDropDownModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToDoProjectsModule, { declarations: [_to_do_projects_component__WEBPACK_IMPORTED_MODULE_4__["ToDoProjectsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
        // MatDatepickerToggle,
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _to_do_projects_routing_module__WEBPACK_IMPORTED_MODULE_3__["ToDoProjectsRoutingModule"],
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["NgMultiSelectDropDownModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipeModule"]], exports: [_to_do_projects_component__WEBPACK_IMPORTED_MODULE_4__["ToDoProjectsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDoProjectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _to_do_projects_component__WEBPACK_IMPORTED_MODULE_4__["ToDoProjectsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                    // MatDatepickerToggle,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _to_do_projects_routing_module__WEBPACK_IMPORTED_MODULE_3__["ToDoProjectsRoutingModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["NgMultiSelectDropDownModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipeModule"]
                ],
                providers: [_project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_13__["ProjectUnplannedTaskComponent"]],
                exports: [
                    _to_do_projects_component__WEBPACK_IMPORTED_MODULE_4__["ToDoProjectsComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=_LayoutDashboard-to-do-projects-to-do-projects-module.js.map