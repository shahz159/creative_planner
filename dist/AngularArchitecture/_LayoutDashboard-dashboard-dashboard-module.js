(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_LayoutDashboard-dashboard-dashboard-module"],{

/***/ "./src/app/_LayoutDashboard/dashboard/dashboard-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/dashboard/dashboard-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/_LayoutDashboard/dashboard/dashboard.component.ts");





const routes = [{
        path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        children: [
            {
                path: 'projectinfo/:projectcode',
                loadChildren: () => Promise.all(/*! import() | project-info-project-info-module */[__webpack_require__.e("default~_LayoutDashboard-dashboard-dashboard-module~_LayoutDashboard-more-details-more-details-modul~98b028d3"), __webpack_require__.e("default~_LayoutDashboard-dashboard-dashboard-module~_LayoutDashboard-home-home-module~_LayoutDashboa~20575a49"), __webpack_require__.e("default~_LayoutDashboard-dashboard-dashboard-module~project-info-project-info-module"), __webpack_require__.e("default~_LayoutDashboard-projects-summary-projects-summary-module~project-info-project-info-module"), __webpack_require__.e("project-info-project-info-module")]).then(__webpack_require__.bind(null, /*! ../project-info/project-info.module */ "./src/app/_LayoutDashboard/project-info/project-info.module.ts")).then(m => m.ProjectInfoModule)
            }
        ]
    }];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/_LayoutDashboard/dashboard/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/_LayoutDashboard/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Models_status_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/status-dto */ "./src/app/_Models/status-dto.ts");
/* harmony import */ var src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Models/completed-projects-dto */ "./src/app/_Models/completed-projects-dto.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/project-type.service */ "./src/app/_Services/project-type.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_Services/notification.service */ "./src/app/_Services/notification.service.ts");
/* harmony import */ var src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_Services/link.service */ "./src/app/_Services/link.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");













function DashboardComponent_div_261_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_261_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_261_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_261_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_261_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_261_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_261_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_261_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_261_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_261_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_261_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_261_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_261_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_261_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_261_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_261_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_261_div_1_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_261_div_2_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_261_div_3_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_261_div_4_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_261_div_5_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_261_div_6_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_261_div_7_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_div_261_div_8_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DashboardComponent_div_261_div_9_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_div_261_div_10_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DashboardComponent_div_261_div_11_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_div_261_div_12_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DashboardComponent_div_261_div_13_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashboardComponent_div_261_div_14_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DashboardComponent_div_261_div_15_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Request Type :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "To: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "By: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "On : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.Req_Type == "Project Forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.Req_Type == "Approved Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.Req_Type == "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.Req_Type == "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.Req_Type == "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.Req_Type == "Project Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.Req_Type == "Deadline Extend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.Req_Type == "Task Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.Req_Type == "Not Achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.Req_Type == "Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.Req_Type == "New Project Reject Release");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.Req_Type == "KPI Achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.Req_Type == "Forward Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.Req_Type == "StandardTask Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.Req_Type == "Standardtask Enactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.Req_Type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", item_r3.Exec_BlockName, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.Project_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r3.Req_Coments);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Comments : ", item_r3.Req_Coments, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.SubmittedTo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.SubmittedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 23, item_r3.Rec_Date, "dd-MM-yyyy"));
} }
function DashboardComponent_div_262_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_262_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_262_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_262_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_262_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_262_div_1_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_262_div_2_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_262_div_3_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_262_div_4_Template, 2, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "To: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "By: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "On : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r20.DARStatus == "Submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r20.DARStatus == "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r20.DARStatus == "Suspend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r20.DARStatus == "Accepted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" DAR Status : ", item_r20.DARStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" DAR Code - ", item_r20.Emp_Rep_No, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r20.SubmittedTo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r20.SubmittedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 9, item_r20.submissiondate, "dd-MM-yyyy"));
} }
function DashboardComponent_div_274_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r26.Delaydays, " Days Delay");
} }
function DashboardComponent_div_274_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r26.Status, " ");
} }
function DashboardComponent_div_274_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r26.Status, " ");
} }
function DashboardComponent_div_274_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r26.Status, " ");
} }
function DashboardComponent_div_274_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r26.Status, " ");
} }
function DashboardComponent_div_274_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r26.Status, " ");
} }
function DashboardComponent_div_274_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r26.Status, "");
} }
function DashboardComponent_div_274_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r26.Status, "");
} }
function DashboardComponent_div_274_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r26.Status, "");
} }
function DashboardComponent_div_274_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r26.Status, "");
} }
function DashboardComponent_div_274_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r26.Status, "");
} }
function DashboardComponent_div_274_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r26.Status, "");
} }
const _c0 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) { return { "text-danger": a0, "text-Completed": a1, "text-warning": a2, "text-underApp": a3, "text-info": a4, "text-Rejected": a5, "text-underApproval": a6, "text-underApproval": a7, "text-primary": a8, "text-success": a9, "text-CompleteRejected": a10, "text-Todo": a11, "text-info": a12 }; };
function DashboardComponent_div_274_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No Portfolio's has created");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_274_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const item_r26 = ctx.$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.redirectTo_Portfolio(item_r26.Portfolio_ID, item_r26.Portfolio_Name, item_r26.CreatedName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DashboardComponent_div_274_div_13_Template, 3, 1, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashboardComponent_div_274_div_14_Template, 3, 1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DashboardComponent_div_274_div_15_Template, 3, 1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DashboardComponent_div_274_div_16_Template, 3, 1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DashboardComponent_div_274_div_17_Template, 3, 1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DashboardComponent_div_274_div_18_Template, 3, 1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DashboardComponent_div_274_div_19_Template, 3, 1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DashboardComponent_div_274_div_20_Template, 3, 1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DashboardComponent_div_274_div_21_Template, 3, 1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DashboardComponent_div_274_div_22_Template, 3, 1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DashboardComponent_div_274_div_23_Template, 3, 1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DashboardComponent_div_274_div_24_Template, 3, 1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r2.messageForEmpty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](16, _c0, [item_r26.Status == "Delay", item_r26.Status == "Completed", item_r26.Status == "InProcess", item_r26.Status == "Under Approval", item_r26.Status == "Completion Under Approval", item_r26.Status == "New Project Rejected", item_r26.Status == "Enactive Under Approval", item_r26.Status == "Forward Under Approval", item_r26.Status == "New Project", item_r26.Status == "Completion Under Approval", item_r26.Status == "Project Complete Rejected", item_r26.Status == "ToDo Completed", item_r26.Status == "New Todo"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r26.Portfolio_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r26.Status == "Delay")("ngIfElse", ctx_r2.Inprocess);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r26.Status == "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r26.Status == "Project Holded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r26.Status == "Completion Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r26.Status == "Forward Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r26.Status == "Project Hold Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r26.Status == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r26.Status == "Project Complete Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r26.Status == "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r26.Status == "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r26.Status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r26.Status == "New Todo");
} }
class DashboardComponent {
    constructor(service, 
    //private loadingBar: LoadingBarService,
    router, notifyService, _LinkService) {
        this.service = service;
        this.router = router;
        this.notifyService = notifyService;
        this._LinkService = _LinkService;
        this.posts = [];
        this._ActualProjectList = [];
        this._CalendarProjectsList = {};
        this.Project_Mode = "My";
        //GetSummaryCounts
        this.DelayCount = sessionStorage.getItem('DelayCount');
        this.CompletedCount = sessionStorage.getItem('CompletedCount');
        this.TotalExpiryInMonth = sessionStorage.getItem('TotalExpiryInMonth');
        this.TotalExpiryPortfolio = 0;
        this.EmployeeVacationInDays = sessionStorage.getItem('EmployeeVacationInDays');
        this.TotalDARSubmitted = sessionStorage.getItem('TotalDARSubmitted');
        this.TodaysDARAchievement = sessionStorage.getItem('TodaysDARAchievement');
        this.TotalDARRejected = sessionStorage.getItem('TotalDARRejected');
        this.YesterdaysDAR_Status = sessionStorage.getItem('YesterdaysDAR_Status');
        this.RejectedCount = sessionStorage.getItem('RejectedCount');
        this.AssignedProjects = sessionStorage.getItem('AssignedProjects');
        this.ProjectsNotStarted = sessionStorage.getItem('ProjectsNotStarted');
        this.ProjectsNotWorking = sessionStorage.getItem('ProjectsNotWorking');
        this.NotificationCount = 0;
        this.page_Name = "ViewProjects";
        this._raciDetails = true;
        this._MemosNotFound = "";
        this.dropdownSettings_Memo = {};
        this._objStatusDTO = new src_app_Models_status_dto__WEBPACK_IMPORTED_MODULE_1__["StatusDTO"];
        this._ObjCompletedProj = new src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_2__["CompletedProjectsDTO"]();
    }
    handleEventClick(arg) {
        this.ProjectCode = arg.event._def.extendedProps.Project_Code;
        this.router.navigate(["../backend/dashboard/projectinfo", this.ProjectCode]);
        document.getElementById("mysideInfobar").style.width = "70%";
    }
    closeInfo() {
        document.getElementById("mysideInfobar").style.width = "0";
    }
    ngOnInit() {
        //----Adding One Day---for Date Concept----//
        // var date = new Date();
        // date.setDate(date.getDate() + 1);
        this.Current_user_ID = localStorage.getItem('EmpNo');
        this.CurrentUser_fullname = localStorage.getItem("UserfullName");
        // this.notifyService.showInfo(this.CurrentUser_fullname + ' ' + ' ', 'Login By :');
        // this.notifyService.showSuccess("Successfully", "Logged In");
        this._subtaskDiv = true;
        this.projectactivity_Div = false;
        this.DARactivity_Div = true;
        this.CurrentUser_fullname = localStorage.getItem('UserfullName');
        this.GetDashboardSummary();
        this.service.GetActivities(this.Current_user_ID).subscribe((data) => {
            this._NotificationActivityList = data;
            this._RequestActivity = JSON.parse(this._NotificationActivityList[0]['RequestActivity_Json']);
            this._DarActivityList = JSON.parse(this._NotificationActivityList[0]['DarActivity_Json']);
        });
        this._objStatusDTO.Emp_No = this.Current_user_ID;
        this._objStatusDTO.PageNumber = 1;
        this.service.GetPortfolioStatus(this._objStatusDTO).subscribe((data) => {
            console.log("Porfolio Data Dashbaord--->", data);
            this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
            //JSON.parse(data[0]['PortfolioList_Json']);
            // data as StatusDTO[];
            // var counts = {};
            // this._ListProjStat.forEach(function (x) { counts[x.Status] = (counts[x.Status] || 0) + 1; });
            this.TotalExpiryPortfolio = data[0]['DelayCount'];
            //console.log("------>",this.TotalExpiryPortfolio)
            if (this._ListProjStat.length == 0) {
                this.messageForEmpty = false;
            }
            else {
                this.messageForEmpty = true;
            }
        });
        //Dashboard_Summary
        this.userProjects();
        // this.GetCalendarProjects();
        // this.LoadingBar.stop();
    }
    GetCalendarProjects() {
        let Empno = this.Current_user_ID;
        this.calendarOptions = {
            //plugins: [ dayGridPlugin, interactionPlugin ],
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
            },
            themeSystem: "solar",
            eventClick: this.handleEventClick.bind(this),
            events: this._CalendarProjectsList,
            dayMaxEvents: 6,
        };
        // this.service._GetCalendarProjects(Empno).subscribe
        //   ((data) => {
        //     this._ActualProjectList = data as CompletedProjectsDTO[];
        //     this._CalendarProjectsList = this._ActualProjectList.sort((a, b) => (a.ProjectType > b.ProjectType) ? 1 : -1);
        //     //Calendar Options
        //   });
        this.userProjects();
    }
    allProjects() {
        this.Project_Mode = "All";
        // this.LoadingBar.start();
        let Empno = this.Current_user_ID;
        this.service._GetCalendarProjects(Empno).subscribe((data) => {
            this._ActualProjectList = data;
            //Sorting...
            this._CalendarProjectsList = this._ActualProjectList.sort((a, b) => (a.ProjectType > b.ProjectType) ? 1 : -1);
            this.calendarOptions = {
                // plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
                },
                eventClick: this.handleEventClick.bind(this),
                events: this._CalendarProjectsList,
                dayMaxEvents: 10,
            };
        });
        //this.LoadingBar.stop();
    }
    userProjects() {
        this.Project_Mode = "My";
        let Empno = this.Current_user_ID;
        this.service._GetCalendarProjects(Empno).subscribe((data) => {
            this._ActualProjectList = data;
            //Sorting...
            this._CalendarProjectsList = this._ActualProjectList.sort((a, b) => (a.ProjectType > b.ProjectType) ? 1 : -1);
            //Filtering
            this._CalendarProjectsList = this._ActualProjectList.filter(user => user.TeamRes == this.CurrentUser_fullname);
            this.calendarOptions = {
                //plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
                },
                themeSystem: 'yeti',
                eventClick: this.handleEventClick.bind(this),
                events: this._CalendarProjectsList,
                dayMaxEvents: 10,
            };
        });
        //this.LoadingBar.stop();
    }
    teamProjects() {
        this.Project_Mode = "My Team";
        let Empno = this.Current_user_ID;
        this.service._GetCalendarProjects(Empno).subscribe((data) => {
            this._ActualProjectList = data;
            //Sorting...
            this._CalendarProjectsList = this._ActualProjectList.sort((a, b) => (a.ProjectType > b.ProjectType) ? 1 : -1);
            //Filtering
            this._CalendarProjectsList = this._ActualProjectList.filter(user => user.ProjectOwner == this.CurrentUser_fullname);
            this.calendarOptions = {
                //plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
                },
                eventClick: this.handleEventClick.bind(this),
                events: this._CalendarProjectsList,
                dayMaxEvents: 10,
            };
        });
    }
    GetDashboardSummary() {
        this.Emp_No = localStorage.getItem('EmpNo');
        this.service._GetDashboardSummaryCount(this.Emp_No)
            .subscribe((data) => {
            this.DelayCount = data[0]['DelayCount'];
            sessionStorage.setItem('DelayCount', this.DelayCount);
            this.CompletedCount = data[0]['CompletedCount'];
            sessionStorage.setItem('CompletedCount', this.CompletedCount);
            this.TotalExpiryInMonth = data[0]['ExpiryOneMonth'];
            sessionStorage.setItem('TotalExpiryInMonth', this.TotalExpiryInMonth);
            this.EmployeeVacationInDays = data[0]['EmployeeVacationInDays'];
            sessionStorage.setItem('EmployeeVacationInDays', this.EmployeeVacationInDays);
            this.TotalDARSubmitted = data[0]['TotalDARSubmitted'];
            sessionStorage.setItem('TotalDARSubmitted', this.TotalDARSubmitted);
            this.TodaysDARAchievement = data[0]['TodaysDARAchievement'];
            sessionStorage.setItem('TodaysDARAchievement', this.TodaysDARAchievement);
            this.TotalDARRejected = data[0]['TotalDARRejected'];
            sessionStorage.setItem('TotalDARRejected', this.TotalDARRejected);
            this.YesterdaysDAR_Status = data[0]['YesterdaysDAR_Status'];
            sessionStorage.setItem('YesterdaysDAR_Status', this.YesterdaysDAR_Status);
            this.RejectedCount = data[0]['RejectedCount'];
            sessionStorage.setItem('RejectedCount', this.RejectedCount);
            this.AssignedProjects = data[0]['AssignedProjects'];
            sessionStorage.setItem('AssignedProjects', this.AssignedProjects);
            this.ProjectsNotStarted = data[0]['ProjectsNotStarted'];
            sessionStorage.setItem('ProjectsNotStarted', this.ProjectsNotStarted);
            this.ProjectsNotWorking = data[0]['ProjectsNotWorking'];
            sessionStorage.setItem('ProjectsNotWorking', this.ProjectsNotWorking);
            this.NotificationCount = data[0]['NotificationCount'];
            //console.log("counts data------>",data)
        });
    }
    OnClickProjAct() {
        this.projectactivity_Div = false;
        this.DARactivity_Div = true;
    }
    OnClickDarAct() {
        this.projectactivity_Div = true;
        this.DARactivity_Div = false;
    }
    //LiveUrl:string="creativeplanner/ViewProjects/";
    UnderApproval_Click() {
        this._ProjectDataList = [];
        let Mode = "UnderApproval";
        var url = document.baseURI + this.page_Name;
        var myurl = `${url}/${Mode}`;
        var myWindow = window.open(myurl);
        myWindow.focus();
    }
    Delay_Click() {
        //alert("ok")
        this._ProjectDataList = [];
        let Mode = "Delay";
        var url = document.baseURI + this.page_Name;
        var myurl = `${url}/${Mode}`;
        console.log(myurl);
        var myWindow = window.open(myurl);
        myWindow.focus();
    }
    Rejected_Click() {
        this._ProjectDataList = [];
        let Mode = "Rejected";
        var url = document.baseURI + this.page_Name;
        var myurl = `${url}/${Mode}`;
        var myWindow = window.open(myurl);
        myWindow.focus();
    }
    ExpiryInOneMonth_Click() {
        this._ProjectDataList = [];
        let Mode = "ExOneMonth";
        var url = document.baseURI + this.page_Name;
        var myurl = `${url}/${Mode}`;
        var myWindow = window.open(myurl);
        myWindow.focus();
    }
    AssignedTask_Click() {
        let Mode = "AssignedTask";
        var url = document.baseURI + this.page_Name;
        var myurl = `${url}/${Mode}`;
        var myWindow = window.open(myurl);
        myWindow.focus();
    }
    Not_Started() {
        this._ProjectDataList = [];
        let Mode = "NotStarted";
        var url = document.baseURI + this.page_Name;
        var myurl = `${url}/${Mode}`;
        var myWindow = window.open(myurl);
        myWindow.focus();
    }
    Not_Working() {
        this._ProjectDataList = [];
        let Mode = "NotWorking";
        var url = document.baseURI + this.page_Name;
        var myurl = `${url}/${Mode}`;
        var myWindow = window.open(myurl);
        myWindow.focus();
    }
    Portfolio_Click() {
        //this.router.navigate(['/Portfolios/']);
        const Url = 'backend/Portfolio';
        var url = document.baseURI + 'Portfolio';
        var myurl = `${url}`;
        var myWindow = window.open(Url);
        myWindow.focus();
    }
    bttn_RACI() {
        this._raciDetails = !this._raciDetails;
    }
    GetmemosInSideInfoBar() {
        this._LinkService._GetOnlyMemoIdsByProjectCode(this.pCode).
            subscribe((data) => {
            let Table_data = data;
            this._DBMemosIDList = data[0]['JsonData'];
            //console.log("----DBMemlist----->",this._DBMemosIDList);
            // if(this._DBMemosIDList==[]){
            //   this._MemosSubjectList = [];
            //   this._MemosNotFound = "No memos linked";
            // }
            // else{
            //   this._MemosSubjectList = JSON.parse(data[0]['JsonData']);
            // }
            if (Table_data.length > 0) {
                this._MemosNotFound = "";
                this._JsonString = data[0]['JsonData'];
                this._LinkService._GetMemosSubject(this._JsonString).
                    subscribe((data) => {
                    this._MemosSubjectList = JSON.parse(data['JsonData']);
                });
            }
            else {
                this._MemosSubjectList = [];
                this._MemosNotFound = "No memos linked";
            }
        });
    }
    openUrl(memo_Url) {
        const Url = memo_Url;
        window.open(Url);
    }
    moreDetails(ProjectCode) {
        let name = 'MoreDetails';
        var url = document.baseURI + name;
        var myurl = `${url}/${ProjectCode}`;
        var myWindow = window.open(myurl, ProjectCode);
        myWindow.focus();
    }
    GetMemosByEmployeeId() {
        this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
            subscribe((data) => {
            this.Memos_List = JSON.parse(data['JsonData']);
            this._ActualMemoslist = JSON.parse(data['JsonData']);
            this._totalMemos = this._ActualMemoslist.length;
            this.dropdownSettings_Memo = {
                singleSelection: false,
                idField: 'MailId',
                textField: 'Subject',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 1,
                allowSearchFilter: true
            };
        });
    }
    Memo_Select(selecteditems) {
        let arr = [];
        this.Empty_MemoDropdown = selecteditems;
        this.Empty_MemoDropdown.forEach(element => {
            arr.push({ MailId: element.MailId });
            this._SelectedMemos = arr;
        });
    }
    Memo_Deselect() {
        let arr = [];
        this.Empty_MemoDropdown = this.ngDropdwonMemo;
        this.Empty_MemoDropdown.forEach(element => {
            arr.push({ MailId: element.MailId });
            this._SelectedMemos = arr;
        });
    }
    _onRowClick(projectCode, ProjName) {
        this._SelectedIdsfromDb = [];
        this.Selected_Projectcode = projectCode;
        this._displayProjName = ProjName;
        this.GetMemosByEmployeeId();
        this._LinkService._GetOnlyMemoIdsByProjectCode(projectCode).
            subscribe((data) => {
            let Table_data = data;
            if (Table_data.length > 0) {
                this._JsonString = JSON.stringify(data[0]['JsonData']);
                this._dbMemoIdList = JSON.parse(data[0]['JsonData']);
                let arr1 = this._ActualMemoslist;
                let arr2 = this._dbMemoIdList;
                this._SelectedIdsfromDb = underscore__WEBPACK_IMPORTED_MODULE_3__["map"](arr2, (d) => { return d.MailId; });
                this.Memos_List = underscore__WEBPACK_IMPORTED_MODULE_3__["reject"](arr1, (d) => {
                    var findId = underscore__WEBPACK_IMPORTED_MODULE_3__["find"](this._SelectedIdsfromDb, (sId) => { return sId === d.MailId; });
                    if (findId) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                let arr = [];
                this._SelectedIdsfromDb.forEach(item => {
                    arr.push({ MailId: item });
                    this._SelectedIdsfromDb = arr;
                });
                if (this._dbMemoIdList == undefined) {
                    this._mappedMemos = 0;
                }
                else {
                    this._mappedMemos = this._dbMemoIdList.length;
                }
            }
            else {
                this._mappedMemos = 0;
                // console.log("No Memos linked For This Project...")
            }
        });
        document.getElementById("LinkSideBar").style.width = "360px";
    }
    closeLinkSideBar() {
        document.getElementById("LinkSideBar").style.width = "0";
    }
    AddDms() {
        this._onRowClick(this.ProjectCode, this.ProjectName);
    }
    _AddLink() {
        let _ProjectCode = this.Selected_Projectcode;
        let appId = 101; //this._ApplicationId;
        if (this._SelectedIdsfromDb > 0 || this._SelectedIdsfromDb != undefined) {
            this.memoId = JSON.stringify(this._SelectedIdsfromDb.concat(this._SelectedMemos));
        }
        else {
            this.memoId = JSON.stringify(this._SelectedMemos);
        }
        let UserId = this.Current_user_ID;
        if (this._SelectedMemos.length > 0) {
            this._LinkService.InsertMemosOn_ProjectCode(_ProjectCode, appId, this.memoId, UserId).
                subscribe((data) => {
                this.GetmemosInSideInfoBar();
                let Returndata = data['Message'];
                this.notifyService.showSuccess("", Returndata);
                this.ngDropdwonMemo = [];
                this._SelectedMemos = [];
            });
        }
        else {
            this.notifyService.showInfo("Request Cancelled", "Please select memo(s) to link");
        }
    }
    //Delete Memos 96290  CRS2004
    deleteMemos(memoId, pcode) {
        this._MemosSubjectList = [];
        let _DeleteSelectedMemo = [];
        _DeleteSelectedMemo.push({ MailId: memoId });
        let arr1 = this._DBMemosIDList;
        let arr2 = _DeleteSelectedMemo;
        let result = arr1.filter(o1 => !arr2.some(o2 => o1.MailId === o2.MailId));
        this._DBMemosIDList = underscore__WEBPACK_IMPORTED_MODULE_3__["map"](arr2, (d) => { return d.MailId; });
        this.memoId = JSON.stringify(result);
        let appId = 101;
        let UserId = this.Current_user_ID;
        this._LinkService.InsertMemosOn_ProjectCode(pcode, appId, this.memoId, UserId).
            subscribe((data) => {
            this.UpdateMemos(pcode);
            let Returndata = data['Message'];
            this.notifyService.showInfo("", Returndata);
        });
    }
    UpdateMemos(pcode) {
        this._LinkService._GetOnlyMemoIdsByProjectCode(pcode).
            subscribe((data) => {
            let Table_data = data;
            if (Table_data.length > 0) {
                this._MemosNotFound = "";
                this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
                this._JsonString = data[0]['JsonData'];
                this._LinkService._GetMemosSubject(this._JsonString).
                    subscribe((data) => {
                    this._MemosSubjectList = JSON.parse(data['JsonData']);
                });
            }
            else {
                this._MemosSubjectList = [];
                this._MemosNotFound = "No memos linked";
            }
        });
    }
    redirectTo_Portfolio(P_id, P_Name, CreatedName) {
        sessionStorage.setItem('portfolioId', P_id);
        sessionStorage.setItem('portfolioname', P_Name);
        sessionStorage.setItem('PortfolioOwner', CreatedName);
        let name = 'portfolioprojects';
        var url = document.baseURI + name;
        var myurl = `${url}/${P_id}`;
        var myWindow = window.open(myurl, P_id);
        myWindow.focus();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_4__["ProjectTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_7__["LinkService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 329, vars: 26, consts: [["id", "kt_header", 1, "kt-header", "kt-grid", "kt-grid--ver", "kt-header--fixed"], ["id", "kt_header_menu_wrapper", 1, "kt-header-menu-wrapper", "kt-grid__item", "kt-grid__item--fluid"], [1, "pl-4", "pt-4"], [1, "kt-header__topbar"], [1, "kt-header__topbar-item", "dropdown"], [1, "dropdown-menu", "dropdown-menu-fit", "dropdown-menu-right", "dropdown-menu-anim", "dropdown-menu-xl"], [1, "kt-head", "kt-head--skin-light", "kt-head--fit-x"], [1, "kt-head__title"], [1, "btn", "btn-label-primary", "btn-sm", "btn-bold", "btn-font-md"], [1, "tab-content"], ["id", "topbar_notifications_notifications", "role", "tabpanel", 1, "tab-pane", "active", "show"], ["data-scroll", "true", "data-height", "300", "data-mobile-height", "200", 1, "kt-notification", "kt-margin-t-10", "kt-margin-b-10", "kt-scroll"], [1, "kt-notification__item"], [1, "kt-notification__item-icon"], [1, "flaticon2-line-chart", "kt-font-success"], [1, "kt-notification__item-details"], [1, "kt-notification__item-title"], [1, "kt-notification__item-time"], [1, "flaticon2-box-1", "kt-font-brand"], [1, "flaticon2-chart2", "kt-font-danger"], [1, "flaticon2-image-file", "kt-font-warning"], ["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor", "pb-0"], [1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi", "kt-portlet--height-fluid", "d-none"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title"], ["href", "#notifymodal", "data-toggle", "modal", 1, "text-dark", "kt-portlet__head-label"], ["data-count", "5", 1, "fas", "fa-bell", "bell-icon", "kt-portlet__head-title", 2, "font-size", "20px"], [1, "col-lg-12", "mb-1"], [1, "d-flex", "justify-content-between"], ["type", "button", "data-toggle", "collapse", "data-target", "#multiCollapse1", "aria-expanded", "false", "aria-controls", "multiCollapse1", 1, "btn", "btn-info", "btn-sm", "mb-2"], [1, "fas", "fa-chevron-up"], [1, "row", "card-spacer"], [1, "col-lg-3", "col-md-6"], ["role", "button", 1, "action-count", 3, "click"], [1, "d-flex", "align-items-center"], [1, "symbol", "me-5"], [1, "symbol-label", "bg-dangr"], [1, "svg-icon", "svg-icon-2x", "svg-icon-success", "navbg"], [1, "fas", "fa-prescription-bottle"], [1, "action-content"], [1, "fs-3", "text-info-cus", "opacity-75", "fw-bold", "mt-1", "mb-0"], [1, "fw-bolder", "text-muted", "pt-3", "fs-5"], [1, "symbol-label", "bg-coral"], [1, "fas", "fa-calendar-day"], [1, "symbol-label", "bg-light-nav"], [1, "far", "fa-stop-circle"], [1, "symbol-label", "bg-info"], [1, "far", "fa-file-alt"], [1, "fas", "fa-calendar-times"], [1, "fs-6"], [1, "fw-bolder", "text-muted", "pt-3", "fs-6"], [1, "fas", "fa-ban"], [1, "symbol-label", "bg-warning"], [1, "fas", "fa-spinner"], [1, "col-lg-3", "col-md-6", 3, "click"], ["role", "button", 1, "action-count"], [1, "fab", "fa-empire"], ["id", "multiCollapse1", 1, "col-lg-12", "mb-2", "collapse", "multi-collapse"], [1, "card", "card-stretch", "shadow-sm", "mb-3", "mb-xxl-8"], [1, "card-body"], [1, "symbol-label", "bg-success-1"], [1, "svg-icon", "svg-icon-2x"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "#ffffff", "viewBox", "0 0 16 16", 1, "bi", "bi-hourglass-split"], ["d", "M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"], [1, "fs-3", "text-info-cus", "opacity-75", "fw-bold", "mt-1"], [1, "fw-bolder", "text-muted", "pt-1", "fs-5"], [1, "d-block"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "#ffffff", "viewBox", "0 0 16 16", 1, "bi", "bi-clock"], ["d", "M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"], ["d", "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "#ffffff", "viewBox", "0 0 16 16", 1, "bi", "bi-stack"], ["d", "m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"], ["d", "m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"], [1, "kt-portlet__head-icon", "d-flex", "justify-content-between"], [1, "kt-portlet__head-title", "mr-3"], [1, "far", "fa-calendar-alt"], [1, "dropdown"], ["data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "h6", "p-3", "pb-4", "dropdown-toggle"], [1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", 3, "click"], [1, "kt-portlet"], [1, "kt-portlet__body"], [3, "options"], [1, "col-lg-7"], [1, "kt-portlet", "kt-portlet--height-fluid"], [1, "dashboard-subtitle"], ["id", "kt_widget5_tab1_content", "aria-expanded", "true", 1, "tab-pane", "active", 3, "hidden"], [1, "kt-widget5", "height-adjust"], ["class", "kt-widget5__item", 4, "ngFor", "ngForOf"], ["id", "kt_widget5_tab2_content", 1, "tab-pane", "active", 3, "hidden"], [1, "col-lg-5"], ["class", "kt-widget5__item no-border", 4, "ngFor", "ngForOf"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], ["id", "notifymodal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "notifyModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "notifylabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "list-group"], [1, "list-group-item"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary"], ["id", "LinkSideBar", 1, "sideInfobar", "animate-right"], [1, "kt-portlet__head", "p-3", "bg-primary"], ["href", "javascript:void(0)", 1, "closebtn", "pull-right", "text-white", 3, "click"], [1, "title-sidebar", "mb-0", "text-white"], [1, "fa", "fa-link"], [1, "kt-nav"], [1, "kt-nav__head", "d-block"], [1, "text-primary"], [1, "M_fsize"], [1, "badge", "badge-pill", "badge-outline-info"], [1, "badge", "badge-pill", "badge-outline-success"], [1, "kt-nav__separator"], [1, "kt-nav__item", "px-4"], [1, "d-flex"], [1, "mutlidropdown-set", "mutlidropdown-full", "mr-1", 2, "flex", "3", 3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onDeSelect"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", 3, "click"], [1, "kt-nav__foot"], [1, "kt-widget5__item"], [4, "ngIf"], [1, "kt-widget5__content"], [1, "kt-widget5__section"], [1, "kt-widget5__title", "Activity-title", "mb-1"], [1, "kt-widget5__desc", "mb-0"], [1, "kt-widget5__desc", "mb-0", 3, "title"], [1, "Activity-title"], [1, "kt-widget5__info", "Activity-date"], [1, "kt-font-info"], [1, "bullet", "bullet-bar", "dar-border-height", "bg-primary", "align-self-stretch", "mr-3"], [1, "bullet", "bullet-bar", "dar-border-height", "bg-success", "align-self-stretch", "mr-3"], [1, "bullet", "bullet-bar", "dar-border-height", "bg-danger", "align-self-stretch", "mr-3"], [1, "bullet", "bullet-bar", "dar-border-height", "bg-info", "align-self-stretch", "mr-3"], [1, "bullet", "bullet-bar", "dar-border-height", "bg-warning", "align-self-stretch", "mr-3"], [1, "bullet", "bullet-bar", "dar-border-height", "bg-success", "align-self-stretch", "mr-3", 2, "background-color", "#28a745"], [1, "bullet", "bullet-bar", "dar-border-height", "align-self-stretch", "mr-3", 2, "background-color", "#C0B5DC"], [1, "kt-widget5__title"], [1, "kt-widget5__desc"], [1, "bullet", "bullet-bar", "dar-border-height", "align-self-stretch", "mr-3", 2, "background-color", "#F5C293"], [1, "kt-widget5__item", "no-border"], [3, "hidden"], [2, "color", "lightgrey", "text-align", "center"], [1, "mr-2"], [1, "fas", "fa-circle", "mr-2", 3, "ngClass"], ["role", "button", 3, "click"], [1, "kt-widget5__info"], [4, "ngIf", "ngIfElse"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-danger", "kt-badge.kt-badge-light-bold", "kt-badge--inline"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-warning", "kt-badge.kt-badge-light-bold", "kt-badge--inline"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-info", "kt-badge.kt-badge-light-bold", "kt-badge--inline"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-primary", "kt-badge.kt-badge-light-bold", "kt-badge--inline"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-success", "kt-badge.kt-badge-light-bold", "kt-badge--inline"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Main Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Notifications \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "4 new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Subtask Created For Dr Cafe. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " 2 hrs ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Creative Planner Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " 3 hrs ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " RunWay Module Subtask Added ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 3 hrs ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Process Detail Module Subtask Added ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " 5 hrs ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Main Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Need Your Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "DAR Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_68_listener() { return ctx.Delay_Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Delay Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_80_listener() { return ctx.ExpiryInOneMonth_Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Delay In One Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_92_listener() { return ctx.Not_Started(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Projects not Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_104_listener() { return ctx.AssignedTask_Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Assigned Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_116_listener() { return ctx.Not_Working(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Not Working from 1 Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_130_listener() { return ctx.Rejected_Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Rejected Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_142_listener() { return ctx.UnderApproval_Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Under Approval Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_153_listener() { return ctx.Portfolio_Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Delay Portfolios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "DAR Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "svg", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Todays DAR Achievement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "svg", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Yesterday's DAR Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "svg", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "DAR Under Approval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " DAR Rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "h5", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " My Calendar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_239_listener() { return ctx.userProjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "My");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_241_listener() { return ctx.teamProjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "My Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_243_listener() { return ctx.allProjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "full-calendar", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Date Range : Last One Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](261, DashboardComponent_div_261_Template, 46, 26, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](262, DashboardComponent_div_262_Template, 29, 12, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, " Portfolios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](274, DashboardComponent_div_274_Template, 25, 30, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "h5", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "ul", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "li", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Subtask Created For Dr Cafe.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "li", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Creative Planner Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "li", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "RunWay Module Subtask Added");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "li", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Process Detail Module Subtask Added");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "li", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Dashboard Notifications Click to view Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "button", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "button", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Clear All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_306_listener() { return ctx.closeLinkSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "h5", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "i", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, " Link Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "ul", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "li", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "p", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, " Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, " Linked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "li", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "ng-multiselect-dropdown", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_ng_multiselect_dropdown_ngModelChange_325_listener($event) { return ctx.ngDropdwonMemo = $event; })("onSelect", function DashboardComponent_Template_ng_multiselect_dropdown_onSelect_325_listener() { return ctx.Memo_Select(ctx.ngDropdwonMemo); })("onDeSelect", function DashboardComponent_Template_ng_multiselect_dropdown_onDeSelect_325_listener() { return ctx.Memo_Deselect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "button", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_326_listener() { return ctx._AddLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "li", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.DelayCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.TotalExpiryInMonth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ProjectsNotStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.AssignedProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.ProjectsNotWorking, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.RejectedCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.CompletedCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.TotalExpiryPortfolio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.TodaysDARAchievement, " Hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.YesterdaysDAR_Status, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.TotalDARSubmitted, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.TotalDARRejected, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Project_Mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.calendarOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.projectactivity_Div);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._RequestActivity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._DarActivityList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.DARactivity_Div);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._ListProjStat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._displayProjName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._totalMemos, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._mappedMemos, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Select Memo")("settings", ctx.dropdownSettings_Memo)("data", ctx.Memos_List)("ngModel", ctx.ngDropdwonMemo);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__["FullCalendarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: [".height-adjust[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    max-height: 60vh;\r\n    overflow: auto;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.height-adjust[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.height-adjust[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.height-adjust[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #ccc;\r\n    border-radius: 8px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.height-adjust[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n}\r\n\r\n\r\n.dashboard-subtitle[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #a5a4a4;\r\n}\r\n\r\n\r\n.Activity-title[_ngcontent-%COMP%] {\r\n    color: #22b9ff !important;\r\n}\r\n\r\n\r\n.Activity-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .Activity-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #7d7d7d;\r\n}\r\n\r\n\r\n.Activity-date[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n}\r\n\r\n\r\n.dialogboxDropdpwn[_ngcontent-%COMP%]   .multiselect-dropdown[_ngcontent-%COMP%] {\r\n    width: 250px !important;\r\n}\r\n\r\n\r\n.fc[_ngcontent-%COMP%]   .fc-button-primary[_ngcontent-%COMP%] {\r\n    background-color: #fff !important;\r\n    border-color: #2c3e50 !important;\r\n    color: #fff !important;\r\n}\r\n\r\n\r\n.action-count[_ngcontent-%COMP%] {\r\n    background-color: #ffffff;\r\n    box-shadow: 0px 0px 13px 0px rgb(82 63 105 / 5%);\r\n    background-color: #ffffff;\r\n    margin-bottom: 15px;\r\n    padding: 15px;\r\n    border-radius: 0.25rem;\r\n    color: #646c9a;\r\n    \r\n    letter-spacing: 0.2px;\r\n    transition: all .3s ease !important;\r\n}\r\n\r\n\r\n.action-count[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.02);\r\n}\r\n\r\n\r\n.action-count[_ngcontent-%COMP%]   .count-icon[_ngcontent-%COMP%] {\r\n    background-color: #deecfd;\r\n    padding: 5px 8px;\r\n    height: 30px;\r\n    border-radius: 6px;\r\n    margin-right: 15px;\r\n    color: #00b2ff;\r\n}\r\n\r\n\r\n.action-count[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n}\r\n\r\n\r\n.action-count[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #696969;\r\n}\r\n\r\n\r\n.action-count.bg-grey[_ngcontent-%COMP%] {\r\n    background-color: #efeff1;\r\n}\r\n\r\n\r\n.action-count.bg-grey[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%]   a.arrow-btn[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    background-color: #f9d57f;\r\n    color: #333;\r\n    padding: 7px 10px;\r\n    font-size: 11px;\r\n    border-radius: 8px;\r\n}\r\n\r\n\r\n.action-bg-warning[_ngcontent-%COMP%] {\r\n    background-color: #f9d57f;\r\n}\r\n\r\n\r\n.action-count.action-bg-warning[_ngcontent-%COMP%]   .count-icon[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    color: #f9d57f;\r\n}\r\n\r\n\r\n.action-count[_ngcontent-%COMP%]   .action-meeting[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    background-color: #f9d57f;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    padding: 8px;\r\n    border-radius: 9px;\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n.action-count[_ngcontent-%COMP%]   .action-meeting[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n}\r\n\r\n\r\n.bd-example-modal-lg[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 200px);\r\n    overflow-y: auto;\r\n}\r\n\r\n\r\n.collapsed[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]:before {\r\n    content: \"\\f078\";\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.bd-example-modal-lg[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.bd-example-modal-lg[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.bd-example-modal-lg[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #ccc;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.bd-example-modal-lg[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n}\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   .table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n    color: #212529;\r\n    background-color: #fafbfc;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.sideInfobar[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 999;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: #f1f1f1;\r\n    border-left: 1px solid #EDEAE9;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    box-shadow:0 .1rem 1rem .25rem rgb(0 0 0/5%)!important;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.name-box[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-size: 9px;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    letter-spacing: 2px;\r\n    border-radius: 50%;\r\n    line-height: 30px;\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n.names-response[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    text-align: left;\r\n}\r\n\r\n\r\n.names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\r\n    display: block;\r\n    font-size: 10px;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.head-btn[_ngcontent-%COMP%] {\r\n    background-color: rgba(88, 103, 221, 0.1);\r\n    padding: 3px 10px 3px 5px;\r\n    border-radius: 2rem;\r\n    border: 1px solid #b3bcff;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n}\r\n\r\n\r\n.head-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #5867dd;\r\n    color: #fff;\r\n    line-height: 25px;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    margin-right: 3px;\r\n}\r\n\r\n\r\n.devider[_ngcontent-%COMP%] {\r\n    height: 1px;\r\n    width: 100%;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n\r\n.pricevalues[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n    padding-bottom: 10px;\r\n    border-right: 1px solid #f1f1f1;\r\n    border-bottom: 1px solid #f1f1f1;\r\n}\r\n\r\n\r\n.top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(1), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(2) {\r\n    border-top: 1px solid #f1f1f1;\r\n}\r\n\r\n\r\n.top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(3), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\r\n    border-bottom: none\r\n}\r\n\r\n\r\n.pricevalues[_ngcontent-%COMP%]:nth-child(2), .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\r\n    border-right: none;\r\n}\r\n\r\n\r\n.w-60[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n}\r\n\r\n\r\n.dms-links[_ngcontent-%COMP%] {\r\n    list-style-type: disc;\r\n}\r\n\r\n\r\n.dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-decoration: underline;\r\n    font-weight: 600;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n.py-10px[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n\r\n.dropdown-item[_ngcontent-%COMP%]:active {\r\n    background-color: #dedee0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .pro-bar[_ngcontent-%COMP%] {\r\n    background: hsl(0, 0%, 97%);\r\n    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;\r\n    height: 4px;\r\n    margin-bottom: 12px;\r\n    margin-top: 30px;\r\n    position: relative;\r\n    text-align: left;\r\n}\r\n\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress_bar_title[_ngcontent-%COMP%] {\r\n    color: hsl(218, 4%, 50%);\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    position: relative;\r\n    top: -28px;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress_number[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%] {\r\n    background-color: hsl(0, 0%, 88%);\r\n    display: block;\r\n    width: 0;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transition: width 1s linear 0s;\r\n}\r\n\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    background-color: hsl(0, 0%, 100%);\r\n    border-radius: 50%;\r\n    width: 4px;\r\n    height: 4px;\r\n    position: absolute;\r\n    right: 1px;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    width: 14px;\r\n    height: 14px;\r\n    background-color: inherit;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    right: -4px;\r\n    top: -5px;\r\n}\r\n\r\n\r\n.bg-today[_ngcontent-%COMP%] {\r\n    background-color: #342bf0 !important;\r\n}\r\n\r\n\r\n.M_fsize[_ngcontent-%COMP%] {\r\n    font-size: smaller;\r\n}\r\n\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n    border-radius: 0;\r\n    font-size: 12px;\r\n    line-height: 1;\r\n    padding: .375rem .5625rem;\r\n    font-weight: normal;\r\n}\r\n\r\n\r\n.text-Rejected[_ngcontent-%COMP%] {\r\n    color: #E6747A !important;\r\n}\r\n\r\n\r\n.text-underApproval[_ngcontent-%COMP%] {\r\n    color: #98c7bf !important;\r\n}\r\n\r\n\r\n.text-CompleteRejected[_ngcontent-%COMP%] {\r\n    color: #D83C3C !important;\r\n}\r\n\r\n\r\n.text-underApp[_ngcontent-%COMP%] {\r\n    color: #4495D5 !important;\r\n}\r\n\r\n\r\n.text-Todo[_ngcontent-%COMP%] {\r\n    color: #45F495 !important;\r\n}\r\n\r\n\r\n.text-Completed[_ngcontent-%COMP%] {\r\n    color: #41D37B !important;\r\n}\r\n\r\n\r\n.bell-icon[data-count][_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 10px;\r\n    content: attr(data-count);\r\n    font-size: 45%;\r\n    padding: 0.6em;\r\n    border-radius: 999px;\r\n    line-height: .75em;\r\n    color: white;\r\n    background: rgba(255, 0, 0, 0.85);\r\n    text-align: center;\r\n    min-width: 2em;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.menu-sub-dropdown[_ngcontent-%COMP%] {\r\n    display: none;\r\n    border-radius: 0.475rem;\r\n    background-color: #fff;\r\n    box-shadow: 0 0 50px 0 rgb(82 63 105 / 15%);\r\n    z-index: 105;\r\n}\r\n\r\n\r\n.kt-subheader--enabled[_ngcontent-%COMP%]   .kt-content[_ngcontent-%COMP%] {\r\n    padding-top: 60px !important;\r\n}\r\n\r\n\r\n.kt-content[_ngcontent-%COMP%] {\r\n    padding-top: 60px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX0xheW91dERhc2hib2FyZC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7OztBQUdBLFVBQVU7OztBQUVWO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQSxVQUFVOzs7QUFFVjtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBR0EsV0FBVzs7O0FBRVg7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOzs7QUFHQSxvQkFBb0I7OztBQUVwQjtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7OztBQUVBOztJQUVJLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyxzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdEQUFnRDtJQUNoRCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFFckIsbUNBQW1DO0FBQ3ZDOzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQjs7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBLFVBQVU7OztBQUVWO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQSxVQUFVOzs7QUFFVjtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBR0EsV0FBVzs7O0FBRVg7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOzs7QUFHQSxvQkFBb0I7OztBQUVwQjtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOzs7QUFHQSxvQkFBb0I7OztBQUVwQjtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IsZUFBZTtJQUNmLFlBQVk7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzREFBc0Q7SUFDdEQsdUJBQXVCO0FBQzNCOzs7QUFFQSxpQ0FBaUM7OztBQUVqQztJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0FBQ3BDOzs7QUFFQTs7SUFFSSw2QkFBNkI7QUFDakM7OztBQUVBOztJQUVJO0FBQ0o7OztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7O0FBR0EscUNBQXFDOzs7QUFFckM7SUFDSSwyQkFBMkI7SUFDM0IsZ0RBQWdEO0lBQ2hELFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsY0FBYztJQUNkLFFBQVE7SUFDUixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsOEJBQThCO0FBQ2xDOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixNQUFNO0lBQ04sVUFBVTtBQUNkOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7OztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QiwyQ0FBMkM7SUFDM0MsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7OztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvX0xheW91dERhc2hib2FyZC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVpZ2h0LWFkanVzdCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcblxyXG4vKiB3aWR0aCAqL1xyXG5cclxuLmhlaWdodC1hZGp1c3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcblxyXG4vKiBUcmFjayAqL1xyXG5cclxuLmhlaWdodC1hZGp1c3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcblxyXG4vKiBIYW5kbGUgKi9cclxuXHJcbi5oZWlnaHQtYWRqdXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcblxyXG4uaGVpZ2h0LWFkanVzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzU1NTtcclxufVxyXG5cclxuLmRhc2hib2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2E1YTRhNDtcclxufVxyXG5cclxuLkFjdGl2aXR5LXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMjJiOWZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5BY3Rpdml0eS10aXRsZSBzcGFuLFxyXG4uQWN0aXZpdHktdGl0bGUgc21hbGwge1xyXG4gICAgY29sb3I6ICM3ZDdkN2Q7XHJcbn1cclxuXHJcbi5BY3Rpdml0eS1kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmRpYWxvZ2JveERyb3BkcHduIC5tdWx0aXNlbGVjdC1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZjIC5mYy1idXR0b24tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMyYzNlNTAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY3Rpb24tY291bnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTNweCAwcHggcmdiKDgyIDYzIDEwNSAvIDUlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICBjb2xvcjogIzY0NmM5YTtcclxuICAgIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDRzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdGlvbi1jb3VudDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG59XHJcblxyXG4uYWN0aW9uLWNvdW50IC5jb3VudC1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWVjZmQ7XHJcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgY29sb3I6ICMwMGIyZmY7XHJcbn1cclxuXHJcbi5hY3Rpb24tY291bnQgLmFjdGlvbi1jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmFjdGlvbi1jb3VudCAuYWN0aW9uLWNvbnRlbnQgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzY5Njk2OTtcclxufVxyXG5cclxuLmFjdGlvbi1jb3VudC5iZy1ncmV5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZjE7XHJcbn1cclxuXHJcbi5hY3Rpb24tY291bnQuYmctZ3JleSAuYWN0aW9uLWNvbnRlbnQgYS5hcnJvdy1idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZDU3ZjtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5hY3Rpb24tYmctd2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlkNTdmO1xyXG59XHJcblxyXG4uYWN0aW9uLWNvdW50LmFjdGlvbi1iZy13YXJuaW5nIC5jb3VudC1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogI2Y5ZDU3ZjtcclxufVxyXG5cclxuLmFjdGlvbi1jb3VudCAuYWN0aW9uLW1lZXRpbmcgaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlkNTdmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5hY3Rpb24tY291bnQgLmFjdGlvbi1tZWV0aW5nIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uYmQtZXhhbXBsZS1tb2RhbC1sZyAubW9kYWwtYm9keSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5jb2xsYXBzZWQgLmZhLWNoZXZyb24tdXA6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDc4XCI7XHJcbn1cclxuXHJcbi8qIHdpZHRoICovXHJcblxyXG4uYmQtZXhhbXBsZS1tb2RhbC1sZyAubW9kYWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuXHJcbi8qIFRyYWNrICovXHJcblxyXG4uYmQtZXhhbXBsZS1tb2RhbC1sZyAubW9kYWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG5cclxuLmJkLWV4YW1wbGUtbW9kYWwtbGcgLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuXHJcbi5iZC1leGFtcGxlLW1vZGFsLWxnIC5tb2RhbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSAudGFibGUtaG92ZXIgdGJvZHkgdHI6aG92ZXIge1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYmZjO1xyXG59XHJcblxyXG5cclxuLyogPT09IFNpZGViYXIgPT09ICovXHJcblxyXG4uc2lkZUluZm9iYXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNFREVBRTk7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYm94LXNoYWRvdzowIC4xcmVtIDFyZW0gLjI1cmVtIHJnYigwIDAgMC81JSkhaW1wb3J0YW50O1xyXG4gICAgLyogcGFkZGluZy10b3A6IDYwcHg7ICovXHJcbn1cclxuXHJcbi8qIE5ldyBkZXNpZ24gQ1NTICBmcm9tIEhlcmUuLi4gKi9cclxuXHJcbi5uYW1lLWJveCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ubmFtZXMtcmVzcG9uc2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLm5hbWVzLXJlc3BvbnNlIHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubmFtZXMtcmVzcG9uc2Ugc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5oZWFkLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg4LCAxMDMsIDIyMSwgMC4xKTtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4IDNweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5oZWFkLWJ0biBpIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzU4NjdkZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG5cclxuLmRldmlkZXIge1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5wcmljZXZhbHVlcyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcblxyXG4udG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDEpLFxyXG4udG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDIpIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcblxyXG4udG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDMpLFxyXG4udG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDQpIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmVcclxufVxyXG5cclxuLnByaWNldmFsdWVzOm50aC1jaGlsZCgyKSxcclxuLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi53LTYwIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4uZG1zLWxpbmtzIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcclxufVxyXG5cclxuLmRtcy1saW5rcyBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ucHktMTBweCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbTphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVlMDtcclxufVxyXG5cclxuXHJcbi8qID09PT09PT09PSBQcm9ncmVzcyBCYXIgPT09PT09PT09ICovXHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm8tYmFyIHtcclxuICAgIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgOTclKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCBoc2xhKDAsIDAlLCAwJSwgMC4xKSBpbnNldDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzc19iYXJfdGl0bGUge1xyXG4gICAgY29sb3I6IGhzbCgyMTgsIDQlLCA1MCUpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTI4cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzc19udW1iZXIge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA4OCUpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBsaW5lYXIgMHM7XHJcbn1cclxuXHJcbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzLWJhci1pbm5lcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMXB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3MtYmFyLWlubmVyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTRweDtcclxuICAgIHRvcDogLTVweDtcclxufVxyXG5cclxuLmJnLXRvZGF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDJiZjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLk1fZnNpemUge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNTYyNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi50ZXh0LVJlamVjdGVkIHtcclxuICAgIGNvbG9yOiAjRTY3NDdBICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXVuZGVyQXBwcm92YWwge1xyXG4gICAgY29sb3I6ICM5OGM3YmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtQ29tcGxldGVSZWplY3RlZCB7XHJcbiAgICBjb2xvcjogI0Q4M0MzQyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC11bmRlckFwcCB7XHJcbiAgICBjb2xvcjogIzQ0OTVENSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1Ub2RvIHtcclxuICAgIGNvbG9yOiAjNDVGNDk1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LUNvbXBsZXRlZCB7XHJcbiAgICBjb2xvcjogIzQxRDM3QiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmVsbC1pY29uW2RhdGEtY291bnRdOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLWNvdW50KTtcclxuICAgIGZvbnQtc2l6ZTogNDUlO1xyXG4gICAgcGFkZGluZzogMC42ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAuNzVlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjg1KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1pbi13aWR0aDogMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5tZW51LXN1Yi1kcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC40NzVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDUwcHggMCByZ2IoODIgNjMgMTA1IC8gMTUlKTtcclxuICAgIHotaW5kZXg6IDEwNTtcclxufVxyXG5cclxuLmt0LXN1YmhlYWRlci0tZW5hYmxlZCAua3QtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ua3QtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweCAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_4__["ProjectTypeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }, { type: src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_7__["LinkService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_LayoutDashboard/dashboard/dashboard.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/_LayoutDashboard/dashboard/dashboard.module.ts ***!
  \****************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/_LayoutDashboard/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/_LayoutDashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");











_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__["FullCalendarModule"].registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_6__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7__["default"],
    _fullcalendar_list__WEBPACK_IMPORTED_MODULE_8__["default"],
]);
class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__["FullCalendarModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__["FullCalendarModule"],
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"]], exports: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                    _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__["FullCalendarModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"]
                ],
                exports: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=_LayoutDashboard-dashboard-dashboard-module.js.map