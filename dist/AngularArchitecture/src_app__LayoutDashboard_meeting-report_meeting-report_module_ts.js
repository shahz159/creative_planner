"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["src_app__LayoutDashboard_meeting-report_meeting-report_module_ts"],{

/***/ 76187:
/*!**********************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/meeting-report/meeting-report-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetingReportRoutingModule": () => (/* binding */ MeetingReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _meeting_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meeting-report.component */ 5131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _meeting_report_component__WEBPACK_IMPORTED_MODULE_0__.MeetingReportComponent }];
class MeetingReportRoutingModule {
}
MeetingReportRoutingModule.ɵfac = function MeetingReportRoutingModule_Factory(t) { return new (t || MeetingReportRoutingModule)(); };
MeetingReportRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MeetingReportRoutingModule });
MeetingReportRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MeetingReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5131:
/*!*****************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/meeting-report/meeting-report.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetingReportComponent": () => (/* binding */ MeetingReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class MeetingReportComponent {
    constructor() { }
    ngOnInit() {
    }
}
MeetingReportComponent.ɵfac = function MeetingReportComponent_Factory(t) { return new (t || MeetingReportComponent)(); };
MeetingReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetingReportComponent, selectors: [["app-meeting-report"]], decls: 169, vars: 0, consts: [[1, "grey-bg"], [1, "col-md-12", "p-3"], [1, "card", "meet-card"], [1, "card-header"], [1, ""], [1, "mb-0", "card-title"], [1, "header2"], ["id", "NameDate", 1, "main-title"], ["id", "", 1, "title-right"], [1, "title-area"], [1, "title-main"], ["id", "title1"], [1, "d-flex"], [1, "title-day"], [1, "card-body", "scrolly", "card-body2"], [1, "px-3"], [1, "card", "card-mid"], [1, "card-body", "p-0"], ["id", "location", 1, "eve-area"], [1, "left-icon"], ["aria-hidden", "true", 1, "side-icns"], ["focusable", "false", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "svg-icn"], ["d", "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"], ["cx", "12", "cy", "9", "r", "2.5"], [1, "rgt-des"], [1, "main-s"], ["href", "#", "target", "\u201D_blank\u201D"], ["id", "", 1, "eve-area"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "viewBox", "0 0 24 24", 1, "svg-icn"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"], ["id", "userlength", 1, "eve-area"], ["focusable", "false", "width", "20", "height", "20", "viewBox", "0 0 24 24", 1, "svg-icn"], ["d", "M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z"], ["id", "userlist", 1, "avar-div"], [1, "d-flex", "align-items-center"], [1, "px-2", "position-relative"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 192 192", "enable-background", "new 0 0 192 192", "width", "24px", "height", "24px", 2, "width", "20px"], ["fill", "#E0E0E0", "d", "M96,0C43.01,0,0,43.01,0,96s43.01,96,96,96s96-43.01,96-96S148.99,0,96,0z"], ["fill", "#BDBDBD", "d", "M96,85.09c13.28,0,24-10.72,24-24c0-13.28-10.72-24-24-24s-24,10.72-24,24C72,74.37,82.72,85.09,96,85.09z"], ["fill", "#BDBDBD", "d", "M96,99.27c-29.33,0-52.36,14.18-52.36,27.27c11.09,17.06,30.51,28.36,52.36,28.36s41.27-11.3,52.36-28.36C148.36,113.45,125.33,99.27,96,99.27z"], ["fill", "none", "width", "192", "height", "192"], [1, "rgt-des", "ml-2"], [1, "sub-s", "text-ellp"], ["id", "project", 1, "eve-area"], [1, "fab-icn", "fab", "fa-wpforms"], [1, "main-s", "pro-nm"], [1, "side-div"], [1, "px-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24", 1, "svg-icn"], ["fill", "none", "d", "M0 0h24v24H0z"], ["d", "M16 12l-6 6V6z"], ["href", "javascript:void(0)"], ["id", "portfolio", 1, "eve-area"], [1, "fas-icn", "fas", "fa-list"], ["id", "dms", 1, "eve-area", "py-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "20", "height", "20", 1, "svg-icn"], ["d", "M5.455 15L1 18.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455zm-.692-2H16V4H3v10.385L4.763 13zM8 17h10.237L20 18.385V8h1a1 1 0 0 1 1 1v13.5L17.545 19H9a1 1 0 0 1-1-1v-1z"], ["id", "desc", 1, "eve-area", "py-2"], ["d", "M13 6v15h-2V6H5V4h14v2z"], ["id", "", 1, "eve-area", "py-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 18 18", "width", "20", "height", "20", 1, "svg-icn"], ["d", "M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"], ["target", "\u201D_blank\u201D"]], template: function MeetingReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Meeting Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Weekly meeting with EP Team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Friday, June 9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "4:00PM \u2013 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " 4:30PM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14)(26, "div", 15)(27, "div", 16)(28, "div", 17)(29, "div", 18)(30, "div", 19)(31, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 22)(34, "circle", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24)(36, "div", 4)(37, "div", 25)(38, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Devbox Software Pvt Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "2nd Floor, KUB Towers, Rd Number 3, Sri Shyam Nagar, Telecom Nagar, Gachibowli, Hyderabad, Telangana 500032, India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27)(43, "div", 19)(44, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 29)(47, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24)(49, "div", 4)(50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 31)(53, "div", 19)(54, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "svg", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24)(58, "div", 4)(59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "3 guests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 34)(62, "div", 35)(63, "div", 36)(64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 38)(67, "path", 39)(68, "path", 40)(69, "rect", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 42)(71, "div", 4)(72, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Abdul Naveed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Sr. Dot Net Developer/Devbox Software Pvt Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 44)(77, "div", 19)(78, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 24)(81, "div", 4)(82, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 47)(85, "div", 35)(86, "div", 48)(87, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "svg", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 50)(90, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 24)(92, "div")(93, "div", 25)(94, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Meeting with EP Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 53)(97, "div", 19)(98, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 24)(101, "div", 4)(102, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Portfolios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 47)(105, "div", 35)(106, "div", 48)(107, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "svg", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 50)(110, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 24)(112, "div")(113, "div", 25)(114, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " New Portfolio for Project actions test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 55)(117, "div", 19)(118, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "svg", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 50)(121, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 24)(123, "div", 4)(124, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "DMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 47)(127, "div", 35)(128, "div", 48)(129, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "svg", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 50)(132, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 24)(134, "div")(135, "div", 25)(136, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " AHC HelpDesk Issue report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 35)(139, "div", 48)(140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "svg", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 50)(143, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 24)(145, "div")(146, "div", 25)(147, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Azure File Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 58)(150, "div", 19)(151, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "svg", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 50)(154, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 24)(156, "div", 4)(157, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 60)(160, "div", 19)(161, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "svg", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 24)(165, "div", 4)(166, "div", 25)(167, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Attachment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()();
    } }, styles: [".meet-card[_ngcontent-%COMP%]{\r\n    border-radius: 10px;\r\n}\r\n.meet-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:first-child {\r\n    border-radius: 10px 10px 0 0;\r\n}\r\nh5.card-ttle[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    color: #3c4043;\r\n}\r\n.header2[_ngcontent-%COMP%] {\r\n    padding: 40px 40px;\r\n    background-color: #f7f8fa;\r\n    border-bottom: 1px solid #ebedf2;\r\n    \r\n}\r\n.card-body2[_ngcontent-%COMP%]{\r\n    background-color: #f1f5f9;\r\n}\r\n.title-right[_ngcontent-%COMP%]{\r\n    padding-top:6px;\r\n}\r\n.main-title[_ngcontent-%COMP%]{       \r\n    width: 100%;\r\n    position: relative;\r\n    display: flex;\r\n    min-height: 32px;\r\n    padding-right: 16px;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    transition: background-color 100ms linear; \r\n    min-height: 32px;\r\n    margin-bottom: 12px;\r\n}\r\n.boxcl-div[_ngcontent-%COMP%]{\r\n    color: #5f6368;\r\n    padding-left: 3px;\r\n    width: 45px;\r\n    box-flex: 0;\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n    align-items: center;\r\n    max-height: 36px;\r\n    max-height: 36px;\r\n    align-self: stretch;\r\n    display: flex;\r\n}\r\n.box-cl[_ngcontent-%COMP%]{\r\n    border-radius: 40px;\r\n    height: 14px;\r\n    width: 14px;\r\n    margin-left: 3px;\r\n    margin-top: 3px;\r\n}\r\n.eve-area[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    position: relative;\r\n    display: flex;\r\n    min-height: 32px;\r\n    padding-right: 16px;\r\n    box-sizing: border-box;\r\n    align-items: center;\r\n    outline: none;\r\n    transition: background-color 100ms linear;\r\n}\r\n.eve-modal[_ngcontent-%COMP%]   .scrolly[_ngcontent-%COMP%]{\r\n    overflow: auto;\r\n    overflow-x: hidden;\r\n}\r\n.rgt-des[_ngcontent-%COMP%]{\r\n    padding-bottom: 6px;\r\n    padding-top: 6px;\r\n    box-flex: 1;\r\n    flex-grow: 1;\r\n    display: block;\r\n    overflow: auto;\r\n}\r\n.left-icon[_ngcontent-%COMP%]{\r\n    color: #5f6368;\r\n    padding-left: 3px;\r\n    padding-right: 17px;\r\n    width: 45px;\r\n    max-height: 52px;\r\n    display: flex;\r\n    align-items: center;\r\n    align-self: stretch;\r\n}\r\n.tool-span[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.svg-icn[_ngcontent-%COMP%]{\r\n    fill: #5f6368;\r\n}\r\n.fas-icn[_ngcontent-%COMP%]{\r\n    color: #5f6368;\r\n    font-size: 16px;\r\n}\r\n.fab-icn[_ngcontent-%COMP%]{\r\n    color: #1c1e21;\r\n    font-size: 19px;\r\n}\r\n.text-ellp[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.title-main[_ngcontent-%COMP%]{\r\n    font-family: \"Google Sans\",Roboto,Arial,sans-serif;\r\n    font-size: 22px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #3c4043;\r\n    max-height: 56px;\r\n    overflow-wrap: break-word;\r\n    word-wrap: break-word;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n}\r\n.title-day[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    letter-spacing: .2px;\r\n    line-height: 20px;\r\n    color: #3c4043;\r\n}\r\n.day-dot[_ngcontent-%COMP%]{\r\n    margin: 0 8px;\r\n    font-weight: 700;\r\n\r\n}\r\n.main-s[_ngcontent-%COMP%]{    \r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    letter-spacing: .2px;\r\n    line-height: 20px;\r\n    color: #3c4043;\r\n}\r\n.sub-s[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    letter-spacing: .3px;\r\n    line-height: 18px;\r\n    color: #5f6368;\r\n}\r\n.avar-div[_ngcontent-%COMP%], .side-div[_ngcontent-%COMP%]{\r\n    padding-left: 41px;\r\n}\r\n.card-mid[_ngcontent-%COMP%]   .eve-area[_ngcontent-%COMP%]:not(:first-child){\r\n    border-top: 1px solid #ebedf2;\r\n}\r\n.card-mid[_ngcontent-%COMP%]   .eve-area[_ngcontent-%COMP%]{\r\n    padding: 7px 20px;\r\n}\r\n.grey-bg[_ngcontent-%COMP%]{\r\n    background: #d8dadc;\r\n    height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmctcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQywwRUFBMEU7QUFDOUU7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUdsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUVuQixzQkFBc0I7SUFDdEIsYUFBYTtJQUViLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFdBQVc7SUFFWCxXQUFXO0lBRVgsWUFBWTtJQUVaLGNBQWM7SUFFZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFHbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFFbkIsc0JBQXNCO0lBRXRCLG1CQUFtQjtJQUNuQixhQUFhO0lBRWIseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBRWhCLFdBQVc7SUFFWCxZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtEQUFrRDtJQUNsRCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakIiLCJmaWxlIjoibWVldGluZy1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZWV0LWNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5tZWV0LWNhcmQgLmNhcmQtaGVhZGVyOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbn1cclxuaDUuY2FyZC10dGxle1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjM2M0MDQzO1xyXG59XHJcbi5oZWFkZXIyIHtcclxuICAgIHBhZGRpbmc6IDQwcHggNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4ZmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWRmMjtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZjlhOGQ0LCNkOGI0ZmUgLCM4MThjZjYpOyAqL1xyXG59XHJcbi5jYXJkLWJvZHkye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcclxufVxyXG4udGl0bGUtcmlnaHR7XHJcbiAgICBwYWRkaW5nLXRvcDo2cHg7XHJcbn1cclxuLm1haW4tdGl0bGV7ICAgICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgbGluZWFyOyBcclxuICAgIG1pbi1oZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbi5ib3hjbC1kaXZ7XHJcbiAgICBjb2xvcjogIzVmNjM2ODtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xyXG4gICAgYm94LWZsZXg6IDA7XHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMDtcclxuICAgIGZsZXgtZ3JvdzogMDtcclxuICAgIC13ZWJraXQtZmxleC1zaHJpbms6IDA7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNnB4O1xyXG4gICAgbWF4LWhlaWdodDogMzZweDtcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5ib3gtY2x7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi5ldmUtYXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLWhlaWdodDogMzJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBsaW5lYXI7XHJcbn1cclxuLmV2ZS1tb2RhbCAuc2Nyb2xseXtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbi5yZ3QtZGVze1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgYm94LWZsZXg6IDE7XHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmxlZnQtaWNvbntcclxuICAgIGNvbG9yOiAjNWY2MzY4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG59XHJcbi50b29sLXNwYW57XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnN2Zy1pY257XHJcbiAgICBmaWxsOiAjNWY2MzY4O1xyXG59XHJcbi5mYXMtaWNue1xyXG4gICAgY29sb3I6ICM1ZjYzNjg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmZhYi1pY257XHJcbiAgICBjb2xvcjogIzFjMWUyMTtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG4udGV4dC1lbGxwe1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4udGl0bGUtbWFpbntcclxuICAgIGZvbnQtZmFtaWx5OiBcIkdvb2dsZSBTYW5zXCIsUm9ib3RvLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBjb2xvcjogIzNjNDA0MztcclxuICAgIG1heC1oZWlnaHQ6IDU2cHg7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxufVxyXG4udGl0bGUtZGF5e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzNjNDA0MztcclxufVxyXG4uZGF5LWRvdHtcclxuICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxufVxyXG4ubWFpbi1zeyAgICBcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICMzYzQwNDM7XHJcbn1cclxuLnN1Yi1ze1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBjb2xvcjogIzVmNjM2ODtcclxufVxyXG4uYXZhci1kaXYsIC5zaWRlLWRpdntcclxuICAgIHBhZGRpbmctbGVmdDogNDFweDtcclxufVxyXG5cclxuLmNhcmQtbWlkIC5ldmUtYXJlYTpub3QoOmZpcnN0LWNoaWxkKXtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWJlZGYyO1xyXG59XHJcbi5jYXJkLW1pZCAuZXZlLWFyZWF7XHJcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcclxufVxyXG4uZ3JleS1iZ3tcclxuICAgIGJhY2tncm91bmQ6ICNkOGRhZGM7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59Il19 */"] });


/***/ }),

/***/ 8347:
/*!**************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/meeting-report/meeting-report.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetingReportModule": () => (/* binding */ MeetingReportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _meeting_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meeting-report.component */ 5131);
/* harmony import */ var _meeting_report_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meeting-report-routing.module */ 76187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class MeetingReportModule {
}
MeetingReportModule.ɵfac = function MeetingReportModule_Factory(t) { return new (t || MeetingReportModule)(); };
MeetingReportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MeetingReportModule });
MeetingReportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _meeting_report_routing_module__WEBPACK_IMPORTED_MODULE_1__.MeetingReportRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MeetingReportModule, { declarations: [_meeting_report_component__WEBPACK_IMPORTED_MODULE_0__.MeetingReportComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _meeting_report_routing_module__WEBPACK_IMPORTED_MODULE_1__.MeetingReportRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app__LayoutDashboard_meeting-report_meeting-report_module_ts.js.map