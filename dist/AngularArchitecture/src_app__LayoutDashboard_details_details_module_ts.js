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




const routes = [{ path: '', component: _details_details_component__WEBPACK_IMPORTED_MODULE_0__.DetailsComponent }];
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 94796);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details/details.component */ 61446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class DetailsModule {
}
DetailsModule.ɵfac = function DetailsModule_Factory(t) { return new (t || DetailsModule)(); };
DetailsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DetailsModule });
DetailsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DetailsModule, { declarations: [_details_details_component__WEBPACK_IMPORTED_MODULE_1__.DetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsRoutingModule] }); })();


/***/ }),

/***/ 61446:
/*!***********************************************************************!*\
  !*** ./src/app/_LayoutDashboard/details/details/details.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsComponent": () => (/* binding */ DetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(); };
DetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 21, vars: 0, consts: [[1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height", "side_view", "mt-4"], [1, "card", "mb-6", "mb-xl-9"], [1, "card-body", "pt-9", "pb-0"], [1, "d-flex", "flex-wrap", "flex-sm-nowrap", "mb-6"], [1, "d-flex", "flex-center", "flex-shrink-0", "bg-light", "rounded", "w-100px", "h-100px", "w-lg-150px", "h-lg-150px", "me-7", "mb-4"], ["src", "https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/brand-logos/volicity-9.svg", "alt", "image", 1, "mw-50px", "mw-lg-75px"], [1, "flex-grow-1"], [1, "d-flex", "justify-content-between", "align-items-start", "flex-wrap", "mb-2"], [1, "d-flex", "flex-column"], [1, "d-flex", "align-items-center", "mb-1"], ["href", "#", 1, "text-gray-800", "text-hover-primary", "fs-2", "fw-bold", "me-3"], [1, "badge", "badge-light-success", "me-auto"], [1, "d-flex", "flex-wrap", "fw-semibold", "mb-4", "fs-5", "text-gray-400"], [1, "d-flex", "mb-4"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#kt_modal_users_search", 1, "btn", "btn-sm", "btn-bg-light", "btn-active-color-primary", "me-3"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#kt_modal_new_target", 1, "btn", "btn-sm", "btn-primary", "me-3"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "CRM Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "In Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " #1 Tool to get started with Web Apps any Kind of ok& size ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13)(17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Add Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } }, styles: [".card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\r\n    padding: 2rem 2.25rem;\r\n     color: var(--bs-card-color); \r\n}\r\n.py-9[_ngcontent-%COMP%] {\r\n    padding-top: 2.25rem!important;\r\n    padding-bottom: 2.25rem!important;\r\n}\r\n.pb-0[_ngcontent-%COMP%] {\r\n    padding-bottom: 0!important;\r\n}\r\n.flex-center[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.bg-light[_ngcontent-%COMP%] {\r\n    --bs-bg-rgb-color: 249,249,249;\r\n    background-color: #f5f5f5!important;\r\n}\r\n.h-lg-150px[_ngcontent-%COMP%] {\r\n    height: 150px!important;\r\n}\r\n.w-lg-150px[_ngcontent-%COMP%] {\r\n    width: 150px!important;\r\n}\r\n.rounded[_ngcontent-%COMP%] {\r\n    border-radius: 0.475rem!important;\r\n}\r\n.mw-lg-75px[_ngcontent-%COMP%] {\r\n    max-width: 75px!important;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    border: 1px solid #F1F1F2;\r\n    border-radius: 0.625rem;\r\n}\r\n.me-7[_ngcontent-%COMP%] {\r\n    margin-right: 1.75rem!important;\r\n}\r\n.mb-4[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem!important;\r\n}\r\n.flex-grow-1[_ngcontent-%COMP%] {\r\n    flex-grow: 1!important;\r\n}\r\n.mb-2[_ngcontent-%COMP%] {\r\n    margin-bottom: 0.5rem!important;\r\n}\r\n.align-items-start[_ngcontent-%COMP%] {\r\n    align-items: flex-start!important;\r\n}\r\n.justify-content-between[_ngcontent-%COMP%] {\r\n    justify-content: space-between!important;\r\n}\r\n.flex-wrap[_ngcontent-%COMP%] {\r\n    flex-wrap: wrap!important;\r\n}\r\n.d-flex[_ngcontent-%COMP%] {\r\n    display: flex!important;\r\n}\r\n.flex-column[_ngcontent-%COMP%] {\r\n    flex-direction: column!important;\r\n}\r\n.text-gray-800[_ngcontent-%COMP%] {\r\n    color: #252f4a!important;\r\n}\r\n.text-hover-primary[_ngcontent-%COMP%] {\r\n    transition: color .2s ease;\r\n}\r\n.fs-2[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem!important;\r\n}\r\n.fw-bold[_ngcontent-%COMP%] {\r\n    font-weight: 600!important;\r\n}\r\n.me-3[_ngcontent-%COMP%] {\r\n    margin-right: 0.75rem!important;\r\n}\r\n.badge-light-success[_ngcontent-%COMP%] {\r\n    color: #50cd89;\r\n    background-color: #e8fff3;\r\n}\r\n.badge[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n}\r\n.me-auto[_ngcontent-%COMP%] {\r\n    margin-right: auto!important;\r\n}\r\n.text-gray-400[_ngcontent-%COMP%] {\r\n    color: #b5b5c3!important;\r\n}\r\n.fw-semibold[_ngcontent-%COMP%] {\r\n    font-weight: 500!important;\r\n}\r\n.fs-5[_ngcontent-%COMP%] {\r\n    font-size: 1.15rem!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtLQUNwQiwyQkFBMkI7QUFDaEM7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUFDO0lBQ0csOEJBQThCO0lBQzlCLG1DQUFtQztBQUN2QztBQUFDO0lBQ0csdUJBQXVCO0FBQzNCO0FBQUM7SUFDRyxzQkFBc0I7QUFDMUI7QUFBQztJQUNHLGlDQUFpQztBQUNyQztBQUFDO0lBQ0cseUJBQXlCO0FBQzdCO0FBQUM7SUFDRyx5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCO0FBQUM7SUFDRywrQkFBK0I7QUFDbkM7QUFBQztJQUNHLDZCQUE2QjtBQUNqQztBQUFDO0lBQ0csc0JBQXNCO0FBQzFCO0FBQUM7SUFDRywrQkFBK0I7QUFDbkM7QUFBQztJQUNHLGlDQUFpQztBQUNyQztBQUFDO0lBQ0csd0NBQXdDO0FBQzVDO0FBQUM7SUFDRyx5QkFBeUI7QUFDN0I7QUFBQztJQUNHLHVCQUF1QjtBQUMzQjtBQUFDO0lBQ0csZ0NBQWdDO0FBQ3BDO0FBQUM7SUFDRyx3QkFBd0I7QUFDNUI7QUFBQztJQUNHLDBCQUEwQjtBQUM5QjtBQUFDO0lBQ0csMkJBQTJCO0FBQy9CO0FBQUM7SUFDRywwQkFBMEI7QUFDOUI7QUFBQztJQUNHLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3QjtBQUFDO0lBQ0csb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2QjtBQUFDO0lBQ0csNEJBQTRCO0FBQ2hDO0FBQUM7SUFDRyx3QkFBd0I7QUFDNUI7QUFBQztJQUNHLDBCQUEwQjtBQUM5QjtBQUFDO0lBQ0csNEJBQTRCO0FBQ2hDIiwiZmlsZSI6ImRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMnJlbSAyLjI1cmVtO1xyXG4gICAgIGNvbG9yOiB2YXIoLS1icy1jYXJkLWNvbG9yKTsgXHJcbn1cclxuLnB5LTkge1xyXG4gICAgcGFkZGluZy10b3A6IDIuMjVyZW0haW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIuMjVyZW0haW1wb3J0YW50O1xyXG59XHJcbi5wYi0wIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwIWltcG9ydGFudDtcclxufVxyXG4uZmxleC1jZW50ZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59LmJnLWxpZ2h0IHtcclxuICAgIC0tYnMtYmctcmdiLWNvbG9yOiAyNDksMjQ5LDI0OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjUhaW1wb3J0YW50O1xyXG59LmgtbGctMTUwcHgge1xyXG4gICAgaGVpZ2h0OiAxNTBweCFpbXBvcnRhbnQ7XHJcbn0udy1sZy0xNTBweCB7XHJcbiAgICB3aWR0aDogMTUwcHghaW1wb3J0YW50O1xyXG59LnJvdW5kZWQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC40NzVyZW0haW1wb3J0YW50O1xyXG59Lm13LWxnLTc1cHgge1xyXG4gICAgbWF4LXdpZHRoOiA3NXB4IWltcG9ydGFudDtcclxufS5jYXJkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMUYxRjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxufS5tZS03IHtcclxuICAgIG1hcmdpbi1yaWdodDogMS43NXJlbSFpbXBvcnRhbnQ7XHJcbn0ubWItNCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtIWltcG9ydGFudDtcclxufS5mbGV4LWdyb3ctMSB7XHJcbiAgICBmbGV4LWdyb3c6IDEhaW1wb3J0YW50O1xyXG59Lm1iLTIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtIWltcG9ydGFudDtcclxufS5hbGlnbi1pdGVtcy1zdGFydCB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCFpbXBvcnRhbnQ7XHJcbn0uanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIWltcG9ydGFudDtcclxufS5mbGV4LXdyYXAge1xyXG4gICAgZmxleC13cmFwOiB3cmFwIWltcG9ydGFudDtcclxufS5kLWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcbn0uZmxleC1jb2x1bW4ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiFpbXBvcnRhbnQ7XHJcbn0udGV4dC1ncmF5LTgwMCB7XHJcbiAgICBjb2xvcjogIzI1MmY0YSFpbXBvcnRhbnQ7XHJcbn0udGV4dC1ob3Zlci1wcmltYXJ5IHtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlO1xyXG59LmZzLTIge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW0haW1wb3J0YW50O1xyXG59LmZ3LWJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCFpbXBvcnRhbnQ7XHJcbn0ubWUtMyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW0haW1wb3J0YW50O1xyXG59XHJcbi5iYWRnZS1saWdodC1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiAjNTBjZDg5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZmZmMztcclxufS5iYWRnZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0ubWUtYXV0byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8haW1wb3J0YW50O1xyXG59LnRleHQtZ3JheS00MDAge1xyXG4gICAgY29sb3I6ICNiNWI1YzMhaW1wb3J0YW50O1xyXG59LmZ3LXNlbWlib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAhaW1wb3J0YW50O1xyXG59LmZzLTUge1xyXG4gICAgZm9udC1zaXplOiAxLjE1cmVtIWltcG9ydGFudDtcclxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app__LayoutDashboard_details_details_module_ts.js.map