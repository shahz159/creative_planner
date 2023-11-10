"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([[4677],{

/***/ 2524:
/*!**********************************************************************!*\
  !*** ./src/app/_LayoutDashboard/timeline/timeline-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelineRoutingModule": () => (/* binding */ TimelineRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline.component */ 1897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    { path: '', component: _timeline_component__WEBPACK_IMPORTED_MODULE_0__.TimelineComponent }
];
class TimelineRoutingModule {
}
TimelineRoutingModule.ɵfac = function TimelineRoutingModule_Factory(t) { return new (t || TimelineRoutingModule)(); };
TimelineRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TimelineRoutingModule });
TimelineRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TimelineRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 34677:
/*!**************************************************************!*\
  !*** ./src/app/_LayoutDashboard/timeline/timeline.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelineModule": () => (/* binding */ TimelineModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _timeline_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline-routing.module */ 2524);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);





class TimelineModule {
}
TimelineModule.ɵfac = function TimelineModule_Factory(t) { return new (t || TimelineModule)(); };
TimelineModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TimelineModule });
TimelineModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_DATE_LOCALE, useValue: 'en-GB' }], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _timeline_routing_module__WEBPACK_IMPORTED_MODULE_0__.TimelineRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TimelineModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _timeline_routing_module__WEBPACK_IMPORTED_MODULE_0__.TimelineRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=4677.js.map