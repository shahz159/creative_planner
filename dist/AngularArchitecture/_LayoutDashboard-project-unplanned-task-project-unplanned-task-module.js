(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_LayoutDashboard-project-unplanned-task-project-unplanned-task-module"],{

/***/ "./src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: ProjectUnplannedTaskRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectUnplannedTaskRoutingModule", function() { return ProjectUnplannedTaskRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-unplanned-task.component */ "./src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.component.ts");





const routes = [{
        path: '', component: _project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_2__["ProjectUnplannedTaskComponent"],
        children: [
            {
                path: 'ActionToProject',
                loadChildren: () => __webpack_require__.e(/*! import() | action-to-project-action-to-project-module */ "action-to-project-action-to-project-module").then(__webpack_require__.bind(null, /*! ../action-to-project/action-to-project.module */ "./src/app/_LayoutDashboard/action-to-project/action-to-project.module.ts")).then(m => m.ActionToProjectModule)
            },
            {
                path: 'ActionToAssign',
                loadChildren: () => __webpack_require__.e(/*! import() | action-to-assign-action-to-assign-module */ "action-to-assign-action-to-assign-module").then(__webpack_require__.bind(null, /*! ../action-to-assign/action-to-assign.module */ "./src/app/_LayoutDashboard/action-to-assign/action-to-assign.module.ts")).then(m => m.ActionToAssignModule)
            },
            {
                path: 'projectinfo/:projectcode',
                loadChildren: () => Promise.all(/*! import() | project-info-project-info-module */[__webpack_require__.e("default~_LayoutDashboard-dashboard-dashboard-module~_LayoutDashboard-more-details-more-details-modul~98b028d3"), __webpack_require__.e("default~_LayoutDashboard-dashboard-dashboard-module~_LayoutDashboard-home-home-module~_LayoutDashboa~20575a49"), __webpack_require__.e("default~_LayoutDashboard-dashboard-dashboard-module~project-info-project-info-module"), __webpack_require__.e("default~_LayoutDashboard-more-details-more-details-module~project-info-project-info-module"), __webpack_require__.e("default~_LayoutDashboard-projects-summary-projects-summary-module~project-info-project-info-module"), __webpack_require__.e("project-info-project-info-module")]).then(__webpack_require__.bind(null, /*! ../project-info/project-info.module */ "./src/app/_LayoutDashboard/project-info/project-info.module.ts")).then(m => m.ProjectInfoModule)
            }
        ]
    }];
class ProjectUnplannedTaskRoutingModule {
}
ProjectUnplannedTaskRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectUnplannedTaskRoutingModule });
ProjectUnplannedTaskRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectUnplannedTaskRoutingModule_Factory(t) { return new (t || ProjectUnplannedTaskRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectUnplannedTaskRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectUnplannedTaskRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ProjectUnplannedTaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectUnplannedTaskModule", function() { return ProjectUnplannedTaskModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-unplanned-task.component */ "./src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.component.ts");
/* harmony import */ var _project_unplanned_task_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-unplanned-task-routing.module */ "./src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task-routing.module.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _task_date_ago_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./task-date-ago.pipe */ "./src/app/_LayoutDashboard/project-unplanned-task/task-date-ago.pipe.ts");
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/_Services/notification.service */ "./src/app/_Services/notification.service.ts");
/* harmony import */ var _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../to-do-projects/to-do-projects.component */ "./src/app/_LayoutDashboard/to-do-projects/to-do-projects.component.ts");

















//import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-';
class ProjectUnplannedTaskModule {
}
ProjectUnplannedTaskModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectUnplannedTaskModule });
ProjectUnplannedTaskModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectUnplannedTaskModule_Factory(t) { return new (t || ProjectUnplannedTaskModule)(); }, providers: [
        src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"], _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_15__["ToDoProjectsComponent"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _project_unplanned_task_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProjectUnplannedTaskRoutingModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["NgMultiSelectDropDownModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectUnplannedTaskModule, { declarations: [_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_3__["ProjectUnplannedTaskComponent"],
        _task_date_ago_pipe__WEBPACK_IMPORTED_MODULE_13__["TaskDateAgoPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _project_unplanned_task_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProjectUnplannedTaskRoutingModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["NgMultiSelectDropDownModule"]], exports: [_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_3__["ProjectUnplannedTaskComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectUnplannedTaskModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_3__["ProjectUnplannedTaskComponent"],
                    _task_date_ago_pipe__WEBPACK_IMPORTED_MODULE_13__["TaskDateAgoPipe"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _project_unplanned_task_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProjectUnplannedTaskRoutingModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["NgMultiSelectDropDownModule"]
                ],
                exports: [
                    _project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_3__["ProjectUnplannedTaskComponent"],
                ],
                providers: [
                    src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"], _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_15__["ToDoProjectsComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/_LayoutDashboard/project-unplanned-task/task-date-ago.pipe.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-unplanned-task/task-date-ago.pipe.ts ***!
  \*******************************************************************************/
/*! exports provided: TaskDateAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDateAgoPipe", function() { return TaskDateAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TaskDateAgoPipe {
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago'; // singular (1 day ago)
                    }
                    else {
                        return counter + ' ' + i + 's ago'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }
}
TaskDateAgoPipe.ɵfac = function TaskDateAgoPipe_Factory(t) { return new (t || TaskDateAgoPipe)(); };
TaskDateAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "taskDateAgo", type: TaskDateAgoPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskDateAgoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'taskDateAgo'
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=_LayoutDashboard-project-unplanned-task-project-unplanned-task-module.js.map