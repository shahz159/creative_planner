"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([[550],{

/***/ 64065:
/*!******************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/notification/notification-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationRoutingModule": () => (/* binding */ NotificationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.component */ 2352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _notification_component__WEBPACK_IMPORTED_MODULE_0__.NotificationComponent,
        children: [
            {
                path: 'projectinfo/:projectcode/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(649), __webpack_require__.e(116), __webpack_require__.e(598), __webpack_require__.e(784), __webpack_require__.e(476), __webpack_require__.e(668), __webpack_require__.e(669)]).then(__webpack_require__.bind(__webpack_require__, /*! ../project-info/project-info.module */ 71784)).then(m => m.ProjectInfoModule)
            }
        ]
    }];
class NotificationRoutingModule {
}
NotificationRoutingModule.ɵfac = function NotificationRoutingModule_Factory(t) { return new (t || NotificationRoutingModule)(); };
NotificationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NotificationRoutingModule });
NotificationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotificationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 39472:
/*!**********************************************************************!*\
  !*** ./src/app/_LayoutDashboard/notification/notification.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationModule": () => (/* binding */ NotificationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-routing.module */ 64065);
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component */ 2352);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _projects_summary_projects_summary_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects-summary/projects-summary.module */ 75852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);








class NotificationModule {
}
NotificationModule.ɵfac = function NotificationModule_Factory(t) { return new (t || NotificationModule)(); };
NotificationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: NotificationModule });
NotificationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationRoutingModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
        _projects_summary_projects_summary_module__WEBPACK_IMPORTED_MODULE_3__.ProjectsSummaryModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NotificationModule, { declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationRoutingModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
        _projects_summary_projects_summary_module__WEBPACK_IMPORTED_MODULE_3__.ProjectsSummaryModule], exports: [_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=550.js.map