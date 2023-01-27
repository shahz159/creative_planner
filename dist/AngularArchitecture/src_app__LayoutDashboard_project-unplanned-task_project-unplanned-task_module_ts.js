"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["src_app__LayoutDashboard_project-unplanned-task_project-unplanned-task_module_ts"],{

/***/ 23222:
/*!**************************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task-routing.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectUnplannedTaskRoutingModule": () => (/* binding */ ProjectUnplannedTaskRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-unplanned-task.component */ 32444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
        path: '', component: _project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_0__.ProjectUnplannedTaskComponent,
        children: [
            {
                path: 'ActionToProject/:id',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app__LayoutDashboard_action-to-project_action-to-project_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../action-to-project/action-to-project.module */ 69840)).then(m => m.ActionToProjectModule)
            },
            {
                path: 'ActionToAssign',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app__LayoutDashboard_action-to-assign_action-to-assign_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../action-to-assign/action-to-assign.module */ 36833)).then(m => m.ActionToAssignModule)
            },
            {
                path: 'projectinfo/:projectcode',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app__LayoutDashboard_project-info_project-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../project-info/project-info.module */ 71784)).then(m => m.ProjectInfoModule)
            }
        ]
    }];
class ProjectUnplannedTaskRoutingModule {
}
ProjectUnplannedTaskRoutingModule.ɵfac = function ProjectUnplannedTaskRoutingModule_Factory(t) { return new (t || ProjectUnplannedTaskRoutingModule)(); };
ProjectUnplannedTaskRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProjectUnplannedTaskRoutingModule });
ProjectUnplannedTaskRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProjectUnplannedTaskRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 25016:
/*!******************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectUnplannedTaskModule": () => (/* binding */ ProjectUnplannedTaskModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-unplanned-task.component */ 32444);
/* harmony import */ var _project_unplanned_task_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-unplanned-task-routing.module */ 23222);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _task_date_ago_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-date-ago.pipe */ 51420);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../to-do-projects/to-do-projects.component */ 80872);
/* harmony import */ var _more_details_more_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../more-details/more-details.component */ 89753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);


















//import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-';
class ProjectUnplannedTaskModule {
}
ProjectUnplannedTaskModule.ɵfac = function ProjectUnplannedTaskModule_Factory(t) { return new (t || ProjectUnplannedTaskModule)(); };
ProjectUnplannedTaskModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ProjectUnplannedTaskModule });
ProjectUnplannedTaskModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService, _to_do_projects_to_do_projects_component__WEBPACK_IMPORTED_MODULE_4__.ToDoProjectsComponent, _more_details_more_details_component__WEBPACK_IMPORTED_MODULE_5__.MoreDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _project_unplanned_task_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProjectUnplannedTaskRoutingModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__.NgMultiSelectDropDownModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProjectUnplannedTaskModule, { declarations: [_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_0__.ProjectUnplannedTaskComponent,
        _task_date_ago_pipe__WEBPACK_IMPORTED_MODULE_2__.TaskDateAgoPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _project_unplanned_task_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProjectUnplannedTaskRoutingModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__.NgMultiSelectDropDownModule], exports: [_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_0__.ProjectUnplannedTaskComponent] }); })();


/***/ }),

/***/ 51420:
/*!*******************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-unplanned-task/task-date-ago.pipe.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskDateAgoPipe": () => (/* binding */ TaskDateAgoPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

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
TaskDateAgoPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "taskDateAgo", type: TaskDateAgoPipe, pure: true });


/***/ })

}]);
//# sourceMappingURL=src_app__LayoutDashboard_project-unplanned-task_project-unplanned-task_module_ts.js.map