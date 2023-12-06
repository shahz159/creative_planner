"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([[694],{

/***/ 40334:
/*!**************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-creation/project-creation-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectCreationRoutingModule": () => (/* binding */ ProjectCreationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _project_creation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-creation.component */ 54880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
        path: '', component: _project_creation_component__WEBPACK_IMPORTED_MODULE_0__.ProjectCreationComponent
    }];
class ProjectCreationRoutingModule {
}
ProjectCreationRoutingModule.ɵfac = function ProjectCreationRoutingModule_Factory(t) { return new (t || ProjectCreationRoutingModule)(); };
ProjectCreationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProjectCreationRoutingModule });
ProjectCreationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProjectCreationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 54880:
/*!*********************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-creation/project-creation.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectCreationComponent": () => (/* binding */ ProjectCreationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ProjectCreationComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectCreationComponent.ɵfac = function ProjectCreationComponent_Factory(t) { return new (t || ProjectCreationComponent)(); };
ProjectCreationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectCreationComponent, selectors: [["app-project-creation"]], decls: 385, vars: 0, consts: [[1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi", "kt-portlet--height-fluid"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title"], [1, "new_Project", "d-flex"], [1, "leftside-bar", "mr-3"], [1, "kt-portlet__body", "kt-portlet__body_scroll", "pt-4"], ["href", "#"], [1, "la", "la-sun-o"], [1, "la", "la-star-o"], [1, "la", "la-calendar"], [1, "la", "la-user"], [1, "la", "la-home"], [1, "la", "la-list"], [1, "la", "la-plus"], [1, "center-box"], [1, "kt-portlet", "kt-portlet--bordered-semi", "kt-portlet--height-fluid", "height-adjust-100"], [1, "kt-portlet__body", "pt-4"], [1, "project-name", "mb-4"], [1, "kt-todo__icon", "mr-3"], [1, "tasks-list"], [1, "kt-radio", "kt-radio--bold", "kt-radio--brand", "mb-0"], ["type", "radio", "name", "radio6"], [1, "backgroundLines"], [1, "rightside-bar", "ml-3"], [1, "d-flex", "justify-content-between"], [1, "project-name", "mb-4", "strong-600"], [1, "far", "fa-star"], ["data-toggle", "modal", "data-target", "#ProjectType", 1, "set-box"], [1, "mb-0"], ["data-toggle", "modal", "data-target", "#clientname", 1, "set-box"], ["data-toggle", "modal", "data-target", "#CategoryName", 1, "set-box"], [1, "mb-4", "strong-600"], ["data-toggle", "modal", "data-target", "#OwnerName", 1, "set-box"], ["data-toggle", "modal", "data-target", "#ResponsibleName", 1, "set-box"], ["data-toggle", "modal", "data-target", "#CoordinatingName", 1, "set-box"], ["data-toggle", "modal", "data-target", "#InformName", 1, "set-box"], ["data-toggle", "modal", "data-target", "#AuditorName", 1, "set-box"], ["data-toggle", "modal", "data-target", "#SupportName", 1, "set-box"], ["id", "ProjectType", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], [1, "modal-body"], [1, "btn-brand"], [1, "btn-success"], [1, "btn-info"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary"], ["id", "clientname", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "la", "la-angle-right"], ["id", "CategoryName", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "OwnerName", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "ResponsibleName", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "AuthorityName", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "CoordinatingName", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "InformName", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "AuditorName", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "SupportName", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"]], template: function ProjectCreationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " UnPlanned Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 3)(11, "div", 9)(12, "ul")(13, "li")(14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " My Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li")(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li")(22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Planned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li")(26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Assigned to me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li")(30, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul")(34, "li")(35, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Globus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li")(39, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " New List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18)(43, "div", 19)(44, "div", 20)(45, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " New Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul", 23)(51, "li")(52, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Task Name 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li")(57, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Task Name 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li")(62, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Task Name 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 27)(68, "div", 19)(69, "div", 20)(70, "div", 28)(71, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Test Task 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 31)(76, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Project Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 33)(80, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Client ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 34)(84, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h5", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Team Section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 36)(90, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Owner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 36)(94, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Responsible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 37)(98, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Authority ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 38)(102, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Coordinating ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 39)(106, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Inform ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 40)(110, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Auditor (optional) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 41)(114, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 42)(118, "div", 43)(119, "div", 44)(120, "div", 45)(121, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Assigned To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 47)(124, "ul")(125, "li")(126, "a", 10)(127, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Vali@devboxsoftware.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li")(131, "a", 10)(132, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Mubeen@devboxsoftware.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li")(136, "a", 10)(137, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Asif@devboxsoftware.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li")(141, "a", 10)(142, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Vali@devboxsoftware.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li")(146, "a", 10)(147, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Mubeen@devboxsoftware.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li")(151, "a", 10)(152, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " Asif@devboxsoftware.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 51)(156, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 54)(161, "div", 43)(162, "div", 44)(163, "div", 45)(164, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Client Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 47)(167, "ul")(168, "li")(169, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Creative Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li")(173, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " YR Global ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li")(177, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " dr.CAFE Coffee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 51)(181, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 56)(186, "div", 43)(187, "div", 44)(188, "div", 45)(189, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 47)(192, "ul")(193, "li")(194, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " Creative Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li")(198, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " YR Global ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "li")(202, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " dr.CAFE Coffee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 51)(206, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 57)(211, "div", 43)(212, "div", 44)(213, "div", 45)(214, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Owner Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 47)(217, "ul")(218, "li")(219, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " Creative Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "li")(223, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " YR Global ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "li")(227, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " dr.CAFE Coffee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 51)(231, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 58)(236, "div", 43)(237, "div", 44)(238, "div", 45)(239, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Responsible Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 47)(242, "ul")(243, "li")(244, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " Creative Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "li")(248, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " YR Global ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "li")(252, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " dr.CAFE Coffee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 51)(256, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 59)(261, "div", 43)(262, "div", 44)(263, "div", 45)(264, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Responsible Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 47)(267, "ul")(268, "li")(269, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " Creative Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "li")(273, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, " YR Global ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "li")(277, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " dr.CAFE Coffee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 51)(281, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 60)(286, "div", 43)(287, "div", 44)(288, "div", 45)(289, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Responsible Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 47)(292, "ul")(293, "li")(294, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, " Creative Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li")(298, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " YR Global ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "li")(302, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, " dr.CAFE Coffee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 51)(306, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 61)(311, "div", 43)(312, "div", 44)(313, "div", 45)(314, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Responsible Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 47)(317, "ul")(318, "li")(319, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, " Creative Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "li")(323, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, " YR Global ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "li")(327, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, " dr.CAFE Coffee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 51)(331, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 62)(336, "div", 43)(337, "div", 44)(338, "div", 45)(339, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Responsible Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 47)(342, "ul")(343, "li")(344, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, " Creative Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "li")(348, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, " YR Global ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "li")(352, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, " dr.CAFE Coffee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 51)(356, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 63)(361, "div", 43)(362, "div", 44)(363, "div", 45)(364, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Responsible Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 47)(367, "ul")(368, "li")(369, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, " Creative Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "li")(373, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, " YR Global ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "li")(377, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, " dr.CAFE Coffee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 51)(381, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, styles: [".form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%] {\n    font-size: 14px;\n}\n\n.new_project[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.leftside-bar[_ngcontent-%COMP%], .rightside-bar[_ngcontent-%COMP%] {\n    width: 290px;\n}\n\n.rightside-bar[_ngcontent-%COMP%] {\n    width: 320px;\n}\n\n.leftside-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    padding-left: 0;\n}\n\n.leftside-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    padding: 6px 0;\n    font-size: 14px;\n    color: #48465b;\n}\n\n.leftside-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-right: 10px;\n}\n\n.center-box[_ngcontent-%COMP%] {\n    flex: 1 1 0px;\n    display: flex;\n    overflow: hidden;\n}\n\n.center-box[_ngcontent-%COMP%]   h4.project-name[_ngcontent-%COMP%] {\n    color: #5867dd;\n}\n\n.height-adjust-100[_ngcontent-%COMP%] {\n    height: calc(100vh - 120px);\n}\n\n.center-box[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin-bottom: 10px;\n}\n\n.center-box[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-right: 10px;\n}\n\n.backgroundLines[_ngcontent-%COMP%] {\n    flex: 1;\n    background: linear-gradient( 180deg, white, white 52px, #e5e5e5 52px, #e5e5e5 52px);\n    background-size: 100% 53px;\n    box-shadow: inset 0 1px 0 0 #e5e5e5;\n}\n\n.tasks-list[_ngcontent-%COMP%] {\n    list-style-type: none;\n    padding-left: 0px;\n    margin-bottom: 0px;\n}\n\n.tasks-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    border-top: 1.5px solid #e5e5e5;\n    padding: 16px 0;\n}\n\n.strong-600[_ngcontent-%COMP%] {\n    font-weight: 600;\n}\n\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    padding-left: 0px;\n    height: 100%;\n    max-height: 280px;\n    overflow-y: auto;\n}\n\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 5px;\n}\n\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n    color: #333;\n    letter-spacing: 0.3px;\n}\n\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    border-radius: 50%;\n    line-height: 30px;\n    font-weight: 600;\n    margin-right: 5px;\n}\n\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n    background-color: #f1f1f1;\n}\n\n.set-box[_ngcontent-%COMP%] {\n    border: 1px solid #e2e2e2;\n    padding: 10px;\n    margin-bottom: 15px;\n    cursor: pointer;\n}\n\n.set-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 14px;\n    color: #48465b;\n}\n\n.set-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtY3JlYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxtRkFBbUY7SUFDbkYsMEJBQTBCO0lBQzFCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InByb2plY3QtY3JlYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIGxhYmVsLFxuLmZvcm0tY29udHJvbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubmV3X3Byb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sZWZ0c2lkZS1iYXIsXG4ucmlnaHRzaWRlLWJhciB7XG4gICAgd2lkdGg6IDI5MHB4O1xufVxuXG4ucmlnaHRzaWRlLWJhciB7XG4gICAgd2lkdGg6IDMyMHB4O1xufVxuXG4ubGVmdHNpZGUtYmFyIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubGVmdHNpZGUtYmFyIHVsIGxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDZweCAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzQ4NDY1Yjtcbn1cblxuLmxlZnRzaWRlLWJhciB1bCBsaSBhIGkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jZW50ZXItYm94IHtcbiAgICBmbGV4OiAxIDEgMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNlbnRlci1ib3ggaDQucHJvamVjdC1uYW1lIHtcbiAgICBjb2xvcjogIzU4NjdkZDtcbn1cblxuLmhlaWdodC1hZGp1c3QtMTAwIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XG59XG5cbi5jZW50ZXItYm94IC5rdC10b2RvX19pY29uIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNlbnRlci1ib3ggLmt0LXRvZG9fX2ljb24gaSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmJhY2tncm91bmRMaW5lcyB7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIDE4MGRlZywgd2hpdGUsIHdoaXRlIDUycHgsICNlNWU1ZTUgNTJweCwgI2U1ZTVlNSA1MnB4KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTNweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIDAgI2U1ZTVlNTtcbn1cblxuLnRhc2tzLWxpc3Qge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi50YXNrcy1saXN0IGxpIHtcbiAgICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCAjZTVlNWU1O1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbn1cblxuLnN0cm9uZy02MDAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tb2RhbCAubW9kYWwtYm9keSB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAyODBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubW9kYWwgLm1vZGFsLWJvZHkgdWwgbGkge1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLm1vZGFsIC5tb2RhbC1ib2R5IHVsIGxpIGEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG5cbi5tb2RhbCAubW9kYWwtYm9keSB1bCBsaSBhIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubW9kYWwgLm1vZGFsLWJvZHkgdWwgbGkuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4uc2V0LWJveCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2V0LWJveCBwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM0ODQ2NWI7XG59XG5cbi5zZXQtYm94IHAgaSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 60694:
/*!******************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-creation/project-creation.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectCreationModule": () => (/* binding */ ProjectCreationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _project_creation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-creation.component */ 54880);
/* harmony import */ var _project_creation_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-creation-routing.module */ 40334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class ProjectCreationModule {
}
ProjectCreationModule.ɵfac = function ProjectCreationModule_Factory(t) { return new (t || ProjectCreationModule)(); };
ProjectCreationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProjectCreationModule });
ProjectCreationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _project_creation_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProjectCreationRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProjectCreationModule, { declarations: [_project_creation_component__WEBPACK_IMPORTED_MODULE_0__.ProjectCreationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _project_creation_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProjectCreationRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=694.js.map