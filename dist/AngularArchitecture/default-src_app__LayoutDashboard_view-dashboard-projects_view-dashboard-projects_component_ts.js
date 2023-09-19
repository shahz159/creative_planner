"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["default-src_app__LayoutDashboard_view-dashboard-projects_view-dashboard-projects_component_ts"],{

/***/ 71448:
/*!****************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/view-dashboard-projects/sort.directive.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortDirective": () => (/* binding */ SortDirective)
/* harmony export */ });
/* harmony import */ var src_app_Directive_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Directive/sort */ 84956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class SortDirective {
    constructor(renderer, targetElem) {
        this.renderer = renderer;
        this.targetElem = targetElem;
    }
    sortData() {
        // Create Object of Sort Class
        const sort = new src_app_Directive_sort__WEBPACK_IMPORTED_MODULE_0__.Sort();
        // Get Reference Of Current Clicked Element
        const elem = this.targetElem.nativeElement;
        // Get In WHich Order list should be sorted by default it should be set to desc on element attribute
        const order = elem.getAttribute("data-order");
        // Get The Property Type specially set [data-type=date] if it is date field
        const type = elem.getAttribute("data-type");
        // Get The Property Name from Element Attribute
        const property = elem.getAttribute("data-name");
        if (order === "desc") {
            this.appSort.sort(sort.startSort(property, order, type));
            elem.setAttribute("data-order", "asc");
        }
        else {
            this.appSort.sort(sort.startSort(property, order, type));
            elem.setAttribute("data-order", "desc");
        }
    }
}
SortDirective.ɵfac = function SortDirective_Factory(t) { return new (t || SortDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
SortDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: SortDirective, selectors: [["", "appSort", ""]], hostBindings: function SortDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortDirective_click_HostBindingHandler() { return ctx.sortData(); });
    } }, inputs: { appSort: "appSort" } });


/***/ }),

/***/ 27668:
/*!***********************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/view-dashboard-projects/view-dashboard-projects.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDashboardProjectsComponent": () => (/* binding */ ViewDashboardProjectsComponent)
/* harmony export */ });
/* harmony import */ var src_app_Models_dropdown_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_Models/dropdown-dto */ 79536);
/* harmony import */ var src_app_Models_portfolio_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/portfolio-dto */ 60198);
/* harmony import */ var src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Models/user-details-dto */ 12359);
/* harmony import */ var src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Models/completed-projects-dto */ 60808);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_Services/link.service */ 33529);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _sort_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sort.directive */ 71448);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _view_date_ago__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-date-ago */ 56437);
















function ViewDashboardProjectsComponent_h3_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "h3", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r0._Statustitle, " ");
} }
function ViewDashboardProjectsComponent_div_7_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_div_7_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r16.getAssignedProjects(ctx_r16.type1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Projects Assigned By Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r14.Type == "Assigned by me" ? "dropdown-item active" : "dropdown-item");
} }
function ViewDashboardProjectsComponent_div_7_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_div_7_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r18.getAssignedProjects(ctx_r18.type2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Projects Assigned To Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r15.Type == "Assigned to me" ? "dropdown-item active" : "dropdown-item");
} }
function ViewDashboardProjectsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 101)(1, "h3", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ViewDashboardProjectsComponent_div_7_a_4_Template, 2, 1, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, ViewDashboardProjectsComponent_div_7_a_5_Template, 2, 1, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Projects ", ctx_r1.Type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.Mode == "AssignedTask");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.Mode == "AssignedTask");
} }
function ViewDashboardProjectsComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " 0 - 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} }
function ViewDashboardProjectsComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", ctx_r3.CurrentPageNo, " - ", ctx_r3._CurrentpageRecords, " ");
} }
function ViewDashboardProjectsComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", ctx_r4._CurrentpageRecords * (ctx_r4.CurrentPageNo - 1) + 1, " - ", ctx_r4._CurrentpageRecords * ctx_r4.CurrentPageNo, " ");
} }
function ViewDashboardProjectsComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", ctx_r5.lastPagerecords * (ctx_r5.CurrentPageNo - 1) + 1, " - ", ctx_r5.lastPagerecords * (ctx_r5.CurrentPageNo - 1) + ctx_r5._CurrentpageRecords, " ");
} }
function ViewDashboardProjectsComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r6._totalProjectsCount.toLocaleString(), "");
} }
function ViewDashboardProjectsComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r7._totalProjectsCount, "");
} }
function ViewDashboardProjectsComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 106)(1, "label", 107)(2, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ViewDashboardProjectsComponent_div_56_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r23); const item_r20 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r22.isTypeChecked(item_r20)); })("ngModelChange", function ViewDashboardProjectsComponent_div_56_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r23); const item_r20 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](item_r20.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", item_r20.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r20.Exec_BlockName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r20.Count);
} }
function ViewDashboardProjectsComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 106)(1, "label", 110)(2, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ViewDashboardProjectsComponent_div_63_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r27); const item_r25 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r26.isStatusChecked(item_r25)); })("ngModelChange", function ViewDashboardProjectsComponent_div_63_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r27); const item_r25 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](item_r25.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", item_r25.checked)("checked", item_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r25.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r25.Count);
} }
function ViewDashboardProjectsComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 106)(1, "label", 110)(2, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ViewDashboardProjectsComponent_div_70_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r31); const item_r29 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r30.isEmpChecked(item_r29)); })("ngModelChange", function ViewDashboardProjectsComponent_div_70_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r31); const item_r29 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](item_r29.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", item_r29.checked)("checked", item_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r29.TM_DisplayName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r29.Count);
} }
function ViewDashboardProjectsComponent_tr_120_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_tr_120_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r39); const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r37.openInfo(item_r33.Project_Code, item_r33.Project_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ViewDashboardProjectsComponent_tr_120_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 120)(1, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_tr_120_a_3_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r42); const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r40.moreDetails(item_r33.Project_Code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
const _c0 = function (a0, a1, a2) { return { "text-danger font-weight-400": a0, "text-success font-weight-400": a1, "text-warning font-weight-400": a2 }; };
function ViewDashboardProjectsComponent_tr_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ViewDashboardProjectsComponent_tr_120_a_2_Template, 2, 0, "a", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ViewDashboardProjectsComponent_tr_120_a_3_Template, 2, 0, "a", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](20, "dateAgo1");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "td", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r33.Project_Code != null && item_r33.Status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r33.Project_Code != null && item_r33.Status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("title", item_r33.Task_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r33.Task_Name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("title", item_r33.Task_Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r33.Task_Description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r33.ProjectType);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r33.Employee);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](14, 13, item_r33.Start_Date, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](17, 16, item_r33.End_Date, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](20, 19, item_r33.Creation_Date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](21, _c0, item_r33.Status == "Rejected", item_r33.Status == "Accepted", item_r33.Status == "Pending"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r33.Status, " ");
} }
function ViewDashboardProjectsComponent_tr_159_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "a", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_tr_159_div_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r71); const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r69._OpenMemosInfo(item_r43.Project_Code, item_r43.Project_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ViewDashboardProjectsComponent_tr_159_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Developemt");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r43.ReportType);
} }
function ViewDashboardProjectsComponent_tr_159_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Delay ", item_r43.Delaydays, " days");
} }
function ViewDashboardProjectsComponent_tr_159_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "ToDo InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "ToDo Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "New Todo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Completion Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Forward Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Project Complete Rejected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Enactive Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Version ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Deadline Extend Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Hold ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Project Hold Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 122)(1, "td", 123)(2, "a", 124)(3, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_tr_159_Template_i_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75); const item_r43 = restoredCtx.$implicit; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r74.openInfo(item_r43.Project_Code, item_r43.Project_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "a", 120)(5, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_tr_159_Template_i_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75); const item_r43 = restoredCtx.$implicit; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r76.moreDetails(item_r43.Project_Code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ViewDashboardProjectsComponent_tr_159_div_7_Template, 3, 0, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, ViewDashboardProjectsComponent_tr_159_ng_template_8_Template, 2, 0, "ng-template", null, 127, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "td")(11, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td")(14, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, ViewDashboardProjectsComponent_tr_159_div_17_Template, 3, 0, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, ViewDashboardProjectsComponent_tr_159_ng_template_18_Template, 2, 1, "ng-template", null, 129, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "td")(21, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "td")(24, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "td")(28, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](30, "dateAgo1");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, ViewDashboardProjectsComponent_tr_159_div_32_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, ViewDashboardProjectsComponent_tr_159_div_33_Template, 3, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, ViewDashboardProjectsComponent_tr_159_div_34_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](35, ViewDashboardProjectsComponent_tr_159_div_35_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, ViewDashboardProjectsComponent_tr_159_div_36_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](37, ViewDashboardProjectsComponent_tr_159_div_37_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](38, ViewDashboardProjectsComponent_tr_159_div_38_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](39, ViewDashboardProjectsComponent_tr_159_div_39_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, ViewDashboardProjectsComponent_tr_159_div_40_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](41, ViewDashboardProjectsComponent_tr_159_div_41_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](42, ViewDashboardProjectsComponent_tr_159_div_42_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, ViewDashboardProjectsComponent_tr_159_div_43_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, ViewDashboardProjectsComponent_tr_159_div_44_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](45, ViewDashboardProjectsComponent_tr_159_div_45_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](46, ViewDashboardProjectsComponent_tr_159_div_46_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](47, ViewDashboardProjectsComponent_tr_159_div_47_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](48, ViewDashboardProjectsComponent_tr_159_div_48_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](49, ViewDashboardProjectsComponent_tr_159_div_49_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r43 = ctx.$implicit;
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](9);
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Link_Status == 1)("ngIfElse", _r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r43.Project_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r43.Exec_BlockName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.ReportType == null)("ngIfElse", _r49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r43.TM_DisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](26, 27, item_r43.DeadLine, "dd-MM-yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](30, 30, item_r43.LastModified_Date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Status == "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Status == "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Status == "ToDo InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Status == "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Status == "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Status == "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Status == "ToDo Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Status == "New Todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Status == "Completion Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Status == "Forward Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Status == "Project Complete Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Status == "Enactive Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Status == "Version");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Status == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Status == "Project Holded");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r43.Status == "Project Hold Under Approval");
} }
function ViewDashboardProjectsComponent_div_215_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r77.Subject, " ");
} }
function ViewDashboardProjectsComponent_div_215_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
} if (rf & 2) {
    const item_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r77.Subject, " ");
} }
function ViewDashboardProjectsComponent_div_215_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 139)(1, "div", 140)(2, "h5", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_div_215_Template_h5_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r85); const item_r77 = restoredCtx.$implicit; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r84.openUrl(item_r77.Url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ViewDashboardProjectsComponent_div_215_div_3_Template, 3, 1, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ViewDashboardProjectsComponent_div_215_ng_template_4_Template, 2, 1, "ng-template", null, 141, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r77 = ctx.$implicit;
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r77.Attachment == true)("ngIfElse", _r80);
} }
class ViewDashboardProjectsComponent {
    constructor(service, _LinkService, notifyService, router, activatedRoute) {
        this.service = service;
        this._LinkService = _LinkService;
        this.notifyService = notifyService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.EmpCountInFilter = [];
        this.TypeContInFilter = [];
        this.StatusCountFilter = [];
        //Declarations//
        this.master_checked = false;
        this.checked = false;
        this.CurrentPageNo = 1;
        this.un_FilteredProjects = [];
        this.edited = false;
        this.Current_user_ID = localStorage.getItem('EmpNo');
        this.type1 = "Assigned by me";
        this.type2 = "Assigned to me";
        this.checkedItems_Status = [];
        this.checkedItems_Type = [];
        this.checkedItems_Emp = [];
        this.selectedItem_Status = [];
        this.selectedItem_Type = [];
        this.selectedItem_Emp = [];
        this.clicks = 0;
        this._MemosNotFound = "";
        this._raciDetails = true;
        this.clicks1 = 0;
        this.A2Z1 = true;
        this.Z2A1 = false;
        this.dropdownSettings_Memo = {};
        this.ObjUserDetails = new src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_2__.UserDetailsDTO();
        this._objDropdownDTO = new src_app_Models_dropdown_dto__WEBPACK_IMPORTED_MODULE_0__.DropdownDTO();
        this.Obj_Portfolio_DTO = new src_app_Models_portfolio_dto__WEBPACK_IMPORTED_MODULE_1__.PortfolioDTO();
        this._ObjCompletedProj = new src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_3__.CompletedProjectsDTO();
    }
    ngOnInit() {
        console.log("------base Url-------->", this.router.url);
        this.A2Z = true;
        this.Z2A = false;
        this._subtaskDiv = true;
        this.Mode = this.activatedRoute.snapshot.params.Mode;
        this.GetCompletedProjects();
        this.getAssignedProjects(this.type1);
        this.router.navigate(["../ViewProjects/" + this.Mode]);
        // this.notFoundData=true;
        //this.AssignedTask = true;
        //this.projectsDataTable = false;
        //this.portfolioName = localStorage.getItem('_PortfolioName');
    }
    openInfo(pcode, pName) {
        document.getElementById("mysideInfobar").classList.add("kt-quick-panel--on");
        this.router.navigate(["../ViewProjects/" + this.Mode + "/projectinfo/", pcode, "3"]);
        //this.router.navigate(["../portfolioprojects/" + this._Pid + "/projectinfo/", pcode]);
        document.getElementById("rightbar-overlay").style.display = "block";
        document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    }
    closeInfo() {
        document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
        this.router.navigate(["../ViewProjects/" + this.Mode]);
    }
    _CloseMemosidebar() {
        document.getElementById("MemosSideBar").style.width = "0";
    }
    GetCompletedProjects() {
        // debugger
        // this.Mode = this.service._getMessage();
        let EmpNo = this.Current_user_ID;
        let Pgno = this.CurrentPageNo;
        //Passing to OBJ DTO...
        this._ObjCompletedProj.Mode = this.Mode;
        this._ObjCompletedProj.Emp_No = EmpNo;
        this._ObjCompletedProj.PageNumber = Pgno;
        this._ObjCompletedProj.PageSize = 30;
        if (this.Mode != "AssignedTask" && this.Mode != "") {
            this.projectsDataTable = false;
            this.AssignedTask = true;
            if (this.Mode == "Delay") {
                this._Statustitle = "Delay Projects";
                this._totalProjectsCount = parseInt(sessionStorage.getItem('DelayCount'));
            }
            if (this.Mode == "UnderApproval") {
                this._Statustitle = "Under Approval Projects";
                this._totalProjectsCount = parseInt(sessionStorage.getItem('CompletedCount'));
            }
            if (this.Mode == "Rejected") {
                this._Statustitle = "Rejected Projects";
                this._totalProjectsCount = parseInt(sessionStorage.getItem('RejectedCount'));
            }
            if (this.Mode == "ExOneMonth") {
                this._Statustitle = "Delay In One Month";
                this._totalProjectsCount = parseInt(sessionStorage.getItem('TotalExpiryInMonth'));
            }
            if (this.Mode == "NotWorking") {
                this._Statustitle = "Not Working Projects From One Month";
                this._totalProjectsCount = parseInt(sessionStorage.getItem('ProjectsNotWorking'));
            }
            if (this.Mode == "NotStarted") {
                this._Statustitle = "Projects Not Started";
                this._totalProjectsCount = parseInt(sessionStorage.getItem('ProjectsNotStarted'));
            }
            //Reset The List for New Data
            this._ProjectDataList = [];
            this.service._GetCompletedProjects(this._ObjCompletedProj)
                .subscribe((data) => {
                if (JSON.parse(data[0]['JsonData_Json']).length == 0) {
                    this.notSelectedAnything_msg = "Sorry, No records found in " + this._Statustitle;
                    this.notSelectedAnything_msg2 = "Please select from dashboard, the data you're looking for";
                    this.CurrentPageNo = 0;
                    this._CurrentpageRecords = 0;
                }
                else {
                    this._ProjectDataList = JSON.parse(data[0]['JsonData_Json']);
                    this.EmpCountInFilter = JSON.parse(data[0]['Employee_Json']);
                    this.TypeContInFilter = JSON.parse(data[0]['ProjectType_Json']);
                    this.StatusCountFilter = JSON.parse(data[0]['Status_Json']);
                    this._CurrentpageRecords = this._ProjectDataList.length;
                    this._totalProjectsCount = data[0]['delaycount'];
                }
            });
        }
    }
    getAssignedProjects(type) {
        let EmpNo = this.Current_user_ID;
        if (this.Mode == "AssignedTask") {
            this.AssignedTask = false;
            this.projectsDataTable = true;
            this._Statustitle = "Assigned Projects";
            this.CurrentPageNo = 1;
            this._ObjCompletedProj.Type = type;
            this.Type = type;
            // alert(type);
            this._ObjCompletedProj.Emp_No = EmpNo;
            this._ObjCompletedProj.PageNumber = this.CurrentPageNo;
            this._ObjCompletedProj.RowsOfPage = 30;
            this.service._GetAssignedProjects(this._ObjCompletedProj).
                subscribe(data => {
                console.log(data);
                if (JSON.parse(data[0]['JsonData_Json']).length == 0) {
                    this.notSelectedAnything_msg = "Sorry, No records found in " + this._Statustitle;
                    this.notSelectedAnything_msg2 = "Please select from dashboard, the data you're looking for";
                    this.CurrentPageNo = 0;
                    this._totalProjectsCount = 0;
                    this._CurrentpageRecords = 0;
                }
                else {
                    this._AssignedProjectsList = JSON.parse(data[0]['JsonData_Json']);
                    this._CurrentpageRecords = this._AssignedProjectsList.length;
                    if (type == 'Assigned by me')
                        this._totalProjectsCount = (data[0]['AssignTOcount']);
                    else
                        this._totalProjectsCount = (data[0]['AssignBYcount']);
                    this.TypeContInFilter = JSON.parse(data[0]['ProjectType_Json']);
                    this.StatusCountFilter = JSON.parse(data[0]['Status_Json']);
                    this.EmpCountInFilter = JSON.parse(data[0]['Employee_Json']);
                    console.log(this._AssignedProjectsList, this.TypeContInFilter, this.StatusCountFilter, this.EmpCountInFilter, "test assign");
                }
            });
        }
    }
    BackBttn() {
        this._ProjectDataList = [];
        this.service.Mode = "";
        this.router.navigate(['backend/dashboard']);
    }
    isStatusChecked(item) {
        let arr = [];
        this.edited = true;
        this.StatusCountFilter.forEach(element => {
            if (element.checked == true) {
                arr.push({ Status: element.Status });
                return this.checkedItems_Status = arr;
            }
        });
        let arr2 = [];
        this.StatusCountFilter.filter((item) => {
            if (item.checked == true) {
                this.applyFilters();
                return arr2.push(item);
            }
        });
        this.selectedItem_Status.push(arr2);
        this.StatusCountFilter.forEach(element => {
            if (element.checked == false) {
                this.selectedItem_Status.length = 0;
                this.resetFilters();
            }
        });
        if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0 && this.selectedItem_Emp.length == 0) {
            this.edited = false;
        }
        else {
            this.edited = true;
        }
    }
    isTypeChecked(item) {
        let arr = [];
        this.TypeContInFilter.forEach(element => {
            if (element.checked == true) {
                arr.push({ Block_No: element.Project_Block });
                return this.checkedItems_Type = arr;
            }
        });
        let arr2 = [];
        this.TypeContInFilter.filter((item) => {
            if (item.checked == true) {
                this.applyFilters();
                return arr2.push(item);
            }
        });
        this.selectedItem_Type.push(arr2);
        this.TypeContInFilter.forEach(element => {
            if (element.checked == false) {
                this.selectedItem_Type.length = 0;
                this.resetFilters();
            }
        });
        if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0 && this.selectedItem_Emp.length == 0) {
            this.edited = false;
        }
        else {
            this.edited = true;
        }
    }
    isEmpChecked(item) {
        let arr = [];
        this.edited = true;
        this.EmpCountInFilter.forEach(element => {
            if (element.checked == true) {
                arr.push({ Emp_No: element.Emp_No });
                return this.checkedItems_Emp = arr;
            }
        });
        let arr2 = [];
        this.EmpCountInFilter.filter((item) => {
            if (item.checked == true) {
                this.applyFilters();
                return arr2.push(item);
            }
        });
        this.selectedItem_Emp.push(arr2);
        this.EmpCountInFilter.forEach(element => {
            if (element.checked == false) {
                this.selectedItem_Emp.length = 0;
                this.resetFilters();
            }
        });
        if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0 && this.selectedItem_Emp.length == 0) {
            this.edited = false;
        }
        else {
            this.edited = true;
        }
    }
    resetFilters() {
        this.searchText = "";
        this.search_Type = [];
        this.CurrentPageNo = 1;
        this.edited = false;
        if (this.selectedItem_Type.length == 0) {
            this.selectedType_String = null;
            this.checkedItems_Type = [];
        }
        if (this.selectedItem_Status.length == 0) {
            this.selectedStatus_String = null;
            this.checkedItems_Status = [];
        }
        if (this.selectedItem_Emp.length == 0) {
            this.selectedEmp_String = null;
            this.checkedItems_Emp = [];
        }
        //console.log("On Reset--->", this.checkedItems_Type, this.checkedItems_Status, this.checkedItems_Emp);
        this.applyFilters();
    }
    //Apply Filters
    SearchbyText() {
        this.CurrentPageNo = 1;
        this.applyFilters();
    }
    applyFilters() {
        if (this.Mode != "AssignedTask" && this.Mode != "") {
            this.selectedEmp_String = this.checkedItems_Emp.map(select => {
                return select.Emp_No;
            }).join(',');
            this.selectedType_String = this.checkedItems_Type.map(select => {
                return select.Block_No;
            }).join(',');
            this.selectedStatus_String = this.checkedItems_Status.map(select => {
                return select.Status;
            }).join(',');
            //console.log(this.checkedItems_Status, this.checkedItems_Type, this.checkedItems_Emp);
            this._ObjCompletedProj.SelectedStatus = this.selectedStatus_String;
            this._ObjCompletedProj.SelectedEmp_No = this.selectedEmp_String;
            this._ObjCompletedProj.SelectedBlock_No = this.selectedType_String;
            this._ObjCompletedProj.PageNumber = this.CurrentPageNo;
            this._ObjCompletedProj.PageSize = 30;
            this._ObjCompletedProj.Project_SearchText = this.searchText;
            //console.log("string------->", this.selectedType_String, this.selectedEmp_String, this.selectedStatus_String);
            this.service._GetCompletedProjects(this._ObjCompletedProj)
                .subscribe(data => {
                this._ProjectDataList = JSON.parse(data[0]['JsonData_Json']);
                this._CurrentpageRecords = this._ProjectDataList.length;
                if (this._ProjectDataList.length == 0) {
                    this._filtersMessage = "No projects matched your search";
                    this._filtersMessage2 = "Please try again";
                }
                else {
                    this._filtersMessage = "";
                    this._filtersMessage2 = "";
                }
                //Employee
                if (this.selectedItem_Emp.length == 0) {
                    this.EmpCountInFilter = JSON.parse(data[0]['Employee_Json']);
                }
                else {
                    this.EmpCountInFilter = this.selectedItem_Emp[0];
                }
                //Type
                if (this.selectedItem_Type.length == 0) {
                    this.TypeContInFilter = JSON.parse(data[0]['ProjectType_Json']);
                }
                else {
                    this.TypeContInFilter = this.selectedItem_Type[0];
                }
                //Status
                if (this.selectedItem_Status.length == 0) {
                    this.StatusCountFilter = JSON.parse(data[0]['Status_Json']);
                }
                else {
                    this.StatusCountFilter = this.selectedItem_Status[0];
                }
                this._totalProjectsCount = data[0]['delaycount'];
                let _vl = this._totalProjectsCount / 30;
                let _vl1 = _vl % 1;
                if (_vl1 > 0.000) {
                    this.LastPage = Math.trunc(_vl) + 1;
                }
                else {
                    this.LastPage = Math.trunc(_vl);
                }
                if (this.CurrentPageNo == this.LastPage) {
                    this.lastPagerecords = 30;
                }
            });
        }
        else if (this.Mode == "AssignedTask") {
            this.selectedEmp_String = this.checkedItems_Emp.map(select => {
                return select.Emp_No;
            }).join(',');
            this.selectedType_String = this.checkedItems_Type.map(select => {
                return select.Block_No;
            }).join(',');
            this.selectedStatus_String = this.checkedItems_Status.map(select => {
                return select.Status;
            }).join(',');
            //console.log(this.checkedItems_Status, this.checkedItems_Type, this.checkedItems_Emp);
            this._ObjCompletedProj.SelectedStatus = this.selectedStatus_String;
            this._ObjCompletedProj.SelectedEmp_No = this.selectedEmp_String;
            this._ObjCompletedProj.SelectedBlock_No = this.selectedType_String;
            this._ObjCompletedProj.PageNumber = this.CurrentPageNo;
            this._ObjCompletedProj.RowsOfPage = 30;
            this._ObjCompletedProj.Project_SearchText = this.searchText;
            this.service._GetAssignedProjects(this._ObjCompletedProj).
                subscribe(data => {
                this._AssignedProjectsList = JSON.parse(data[0]['JsonData_Json']);
                this._CurrentpageRecords = this._AssignedProjectsList.length;
                //Type
                if (this.selectedItem_Type.length == 0) {
                    this.TypeContInFilter = JSON.parse(data[0]['ProjectType_Json']);
                }
                else {
                    this.TypeContInFilter = this.selectedItem_Type[0];
                }
                //Status
                if (this.selectedItem_Status.length == 0) {
                    this.StatusCountFilter = JSON.parse(data[0]['Status_Json']);
                }
                else {
                    this.StatusCountFilter = this.selectedItem_Status[0];
                }
                //Employees
                if (this.selectedItem_Emp.length == 0) {
                    this.EmpCountInFilter = JSON.parse(data[0]['Employee_Json']);
                }
                else {
                    this.EmpCountInFilter = this.selectedItem_Emp[0];
                }
                if (this._ObjCompletedProj.Type == 'Assigned by me')
                    this._totalProjectsCount = (data[0]['AssignTOcount']);
                else
                    this._totalProjectsCount = (data[0]['AssignBYcount']);
                let _vl = this._totalProjectsCount / 30;
                let _vl1 = _vl % 1;
                if (_vl1 > 0.000) {
                    this.LastPage = Math.trunc(_vl) + 1;
                }
                else {
                    this.LastPage = Math.trunc(_vl);
                }
                if (this.CurrentPageNo == this.LastPage) {
                    this.lastPagerecords = 30;
                }
            });
        }
    }
    resetAll() {
        this.txtSearch = '';
        this.selectedItem_Type.length = 0;
        this.selectedItem_Status.length = 0;
        this.selectedItem_Emp.length = 0;
        this.resetFilters();
    }
    _SortProjectList() {
        this.clicks += 1;
        if (this.clicks != 1) {
            this.A2Z = true;
            this.Z2A = false;
            this._ProjectDataList = this._ProjectDataList.sort((a, b) => (a.Project_Code > b.Project_Code) ? -1 : 1);
            this.clicks = 0;
        }
        else {
            this.A2Z = false;
            this.Z2A = true;
            this._ProjectDataList = this._ProjectDataList.sort((a, b) => (a.Project_Code > b.Project_Code) ? 1 : -1);
        }
    }
    GetmemosInSideInfoBar() {
        this._LinkService._GetOnlyMemoIdsByProjectCode(this.pCode).
            subscribe((data) => {
            let Table_data = data;
            console.log("----data---->", data);
            // if(Table_data[0]['JsonData']==[]){
            //   this._MemosSubjectList = [];
            //   this._MemosNotFound = "No memos linked";
            // }
            if (Table_data.length > 0) {
                this._MemosNotFound = "";
                this._JsonString = data[0]['JsonData'];
                this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
                this._LinkService._GetMemosSubject(this._JsonString).
                    subscribe((data) => {
                    this._MemosSubjectList = JSON.parse(data['JsonData']);
                    // console.log("Subject Name ------------>", this._MemosSubjectList);
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
        console.log("Url----------->", memo_Url);
        window.open(Url);
    }
    bttn_RACI() {
        this._raciDetails = !this._raciDetails;
    }
    _SortPortfoliolist() {
        this.clicks1 += 1;
        if (this.clicks1 != 1) {
            this.A2Z1 = true;
            this.Z2A1 = false;
            this.clicks1 = 0;
        }
        else {
            this.A2Z1 = false;
            this.Z2A1 = true;
        }
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
                this._SelectedIdsfromDb = underscore__WEBPACK_IMPORTED_MODULE_4__.map(arr2, (d) => { return d.MailId; });
                this.Memos_List = underscore__WEBPACK_IMPORTED_MODULE_4__.reject(arr1, (d) => {
                    var findId = underscore__WEBPACK_IMPORTED_MODULE_4__.find(this._SelectedIdsfromDb, (sId) => { return sId === d.MailId; });
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
                console.log("No Memos linked For This Project...");
            }
        });
        document.getElementById("LinkSideBar").style.width = "360px";
    }
    closeLinkSideBar() {
        document.getElementById("LinkSideBar").style.width = "0";
    }
    AddDms() {
        this._onRowClick(this.pCode, this.pName);
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
        this._DBMemosIDList = underscore__WEBPACK_IMPORTED_MODULE_4__.map(arr2, (d) => { return d.MailId; });
        this.memoId = JSON.stringify(result);
        let appId = 101;
        let UserId = this.Current_user_ID;
        this._LinkService.InsertMemosOn_ProjectCode(pcode, appId, this.memoId, UserId).
            subscribe((data) => {
            this.UpdateMemos(pcode);
            // this.GetmemosInSideInfoBar();
            let Returndata = data['Message'];
            this.notifyService.showInfo("", Returndata);
        });
    }
    UpdateMemos(pcode) {
        this._MemosSubjectList = [];
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
    _OpenMemosInfo(_projectCode, _projectName) {
        this._dbMemoIdList = [];
        this._displayProjName = _projectName;
        this._LinkService._GetOnlyMemoIdsByProjectCode(_projectCode).
            subscribe((data) => {
            let Table_data = data;
            //console.log("Linked Db Memos Data---->",data);
            let Dbdata = data[0]['JsonData'];
            // console.log(Dbdata);
            //console.log("DBdata Memos Data---->",Dbdata);
            if (Dbdata == '[]') {
                this._MemosSubjectList = [];
                this._MemosNotFound = "No memos linked";
            }
            if (Table_data.length > 0 && data[0]['JsonData'] != '[]') {
                this._MemosNotFound = "";
                this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
                this._JsonString = data[0]['JsonData'];
                this._LinkService._GetMemosSubject(this._JsonString).
                    subscribe((data) => {
                    // console.log("------------>", data);
                    this._MemosSubjectList = JSON.parse(data['JsonData']);
                    //console.log("Subject Name ------------>", this._MemosSubjectList);
                });
            }
            else {
                this._MemosSubjectList = [];
                this._MemosNotFound = "No memos linked";
            }
        });
        //Displaying Right Side Bar... 
        document.getElementById("MemosSideBar").style.width = "350px";
    }
    moreDetails(pcode) {
        let name = 'MoreDetails';
        var url = document.baseURI + name;
        var myurl = `${url}/${pcode}`;
        var myWindow = window.open(myurl, pcode);
        myWindow.focus();
    }
}
ViewDashboardProjectsComponent.ɵfac = function ViewDashboardProjectsComponent_Factory(t) { return new (t || ViewDashboardProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_5__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_6__.LinkService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute)); };
ViewDashboardProjectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: ViewDashboardProjectsComponent, selectors: [["app-view-dashboard-projects"]], decls: 217, vars: 56, consts: [[1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height", "side_view"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi", "mt-3", "mb-2"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], ["class", "kt-portlet__head-title", 4, "ngIf"], ["class", "dropdown", 4, "ngIf"], [1, "kt-portlet__head-label", "mr-2"], [1, "kt-header__topbar-item", "kt-header__topbar-item--search", "mr-3"], [1, "kt-header__topbar-wrapper"], [1, "kt-quick-search", "kt-quick-search--inline"], [1, "kt-quick-search__form"], [1, "input-group"], ["type", "text", "placeholder", "Search Projects", "autofocus", "", 1, "form-control", "project-search", "kt-quick-search__input", "pl-3", 2, "width", "300px", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "input-group-prepend"], [1, "input-group-text", 3, "click", "keydown.enter"], [1, "flaticon2-search-1"], [1, "mr-3"], [4, "ngIf"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "disabled", "click"], [1, "fas", "fa-angle-left", "mr-0"], [1, "fas", "fa-angle-right", "mr-0"], [1, "stores-sec", "mr-1"], [1, "nav", "navbar-nav", "filters"], ["id", "filtermenu", 1, "dropdown", "mega-dropdown"], ["data-toggle", "dropdown", 3, "ngClass"], [1, "fas", "fa-ellipsis-v", "mr-0"], [1, "dropdown-menu", "mega-dropdown-menu"], [3, "click"], [1, "col-md-8"], [1, "d-inline-block"], [1, "col-md-12"], ["type", "text", "placeholder", "Search Filters", 1, "form-control", "kt-quick-search__input", "pl-3", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [1, "col-md-4"], [1, "count-height"], ["class", "d-flex justify-content-between", 4, "ngFor", "ngForOf"], ["data-toggle", "dropdown", 1, "btn", "btn-label-success", "btn-outline-success", "btn-upper", "btn-sm", "btn-bold", "mr-2"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", 3, "click"], [1, "mr-1"], ["data-toggle", "kt-tooltip", "title", "Click to sort Asc", 1, "btn", "btn-label-primary", "btn-sm", 3, "hidden", "click"], [1, "fa", "fa-sort-alpha-down-alt", "font-16", "mr-0"], ["data-toggle", "kt-tooltip", "title", "Click to sort Desc", 1, "btn", "btn-label-primary", "btn-sm", 3, "hidden", "click"], [1, "fas", "fa-sort-alpha-up", "font-16", "mr-0"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fas", "fa-sync-alt", "mr-0"], [1, "kt-portlet"], [1, "kt-portlet__body", "kt-portlet__body_scroll", "pt-0"], [1, "card", "projects-list", "no-border"], [1, "card-body"], [1, "dataTables_wrapper", "dt-bootstrap4", "no-footer", 3, "hidden"], [1, "col-sm-12"], ["role", "grid", 1, "table", "table-hover", "dataTable", "no-footer", "dtr-inline"], [2, "width", "100px"], [4, "ngFor", "ngForOf"], [1, "text-center", 2, "color", "lightgrey"], ["id", "project-4_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4", "no-footer", 3, "hidden"], ["id", "project-4", "role", "grid", 1, "table", "table-hover", "dataTable", "no-footer", "dtr-inline", 2, "width", "0px"], ["role", "row"], ["tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-sort", "ascending", "aria-label", ": activate to sort column descending", 2, "width", "100px"], ["data-order", "desc", "data-name", "Project_Name", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Title &amp; Description: activate to sort column ascending", 1, "curser-pointer", 2, "width", "0px", 3, "appSort", "click"], ["data-toggle", "kt-tooltip", "title", "Click to sort", 1, "mr-2", 3, "hidden"], [1, "fas", "fa-sort-alpha-up"], [1, "fa", "fa-sort-alpha-down-alt"], ["data-order", "desc", "data-name", "Exec_BlockName", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Type: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], [1, "fas", "fa-sort"], ["data-order", "desc", "data-name", "ReportType", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Category: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["data-order", "desc", "data-name", "TM_DisplayName", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "User Name: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["data-order", "desc", "data-name", "DeadLine", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "End Date: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["data-order", "desc", "data-name", "Status", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Status: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["role", "row", "class", "odd", 4, "ngFor", "ngForOf"], [1, "text-center", "py-4", 2, "color", "lightgrey"], [1, "col-sm-12", "col-md-5"], [1, "col-sm-12", "col-md-7"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], ["id", "LinkSideBar", 1, "sideInfobar", "animate-right"], [1, "kt-portlet__head", "p-3", "bg-primary"], ["href", "javascript:void(0)", 1, "closebtn", "pull-right", "text-white", 3, "click"], [1, "title-sidebar", "mb-0", "text-white"], [1, "fa", "fa-link"], [1, "kt-nav"], [1, "kt-nav__head", "d-block"], [1, "text-primary"], [1, "M_fsize"], [1, "badge", "badge-pill", "badge-outline-info"], [1, "badge", "badge-pill", "badge-outline-success"], [1, "kt-nav__separator"], [1, "kt-nav__item", "px-4"], [1, "d-flex"], [1, "mutlidropdown-set", "mutlidropdown-full", "mr-1", 2, "flex", "3", 3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onDeSelect"], [1, "kt-nav__foot"], ["id", "MemosSideBar", 1, "sideInfobar", "animate-right"], [1, "curser-pointer"], ["width", "25px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png"], [1, "text-small", "text-white"], [1, "kt-portlet__body", "p-3"], ["id", "accordionExample7", 1, "accordion", "accordion-light", "accordion-svg-icon"], [1, "kt-widget1", "kt-widget1--fit"], ["class", "kt-widget1__item", 4, "ngFor", "ngForOf"], ["id", "rightbar-overlay", 3, "click"], [1, "kt-portlet__head-title"], [1, "dropdown"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "kt-portlet__head-title", "cursor-pointer", "dropdown-toggle", "select-box"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "main-d"], [3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click"], [1, "d-flex", "justify-content-between"], [1, "kt-checkbox"], ["type", "checkbox", 3, "ngModel", "change", "ngModelChange"], [1, "count-btn"], [1, "kt-checkbox", "mb-3"], ["type", "checkbox", 3, "ngModel", "checked", "change", "ngModelChange"], [1, "kt-widget__title", "mb-0"], ["data-toggle", "tooltip", "title", "Project Details!", "class", "btn px-0 mr-2", 3, "click", 4, "ngIf"], ["tabindex", "0", "class", "btn px-0 mr-2", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "More Info!", 4, "ngIf"], ["data-toggle", "tooltip", 1, "kt-widget__title", "mb-0", "text-ellipsis", "w-max-180px", 3, "title"], ["data-toggle", "tooltip", 1, "kt-widget__title", "mb-0", "text-ellipsis", "w-max-100px", 3, "title"], [1, "kt-widget__title", "mb-0", 3, "ngClass"], ["data-toggle", "tooltip", "title", "Project Details!", 1, "btn", "px-0", "mr-2", 3, "click"], [1, "fa", "fa-info-circle", "info-icon-cir"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "More Info!", 1, "btn", "px-0", "mr-2"], [1, "fa", "fa-chart-bar", "info-icon-cir", 3, "click"], ["role", "row", 1, "odd"], ["align", "center"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", 1, "btn", "px-0", "mr-2"], [1, "fa", "fa-info-circle", "info-icon-cir", 3, "click"], [4, "ngIf", "ngIfElse"], ["not_Linked", ""], [1, "kt-widget__other"], ["ReportType", ""], [1, "curser-pointer", 3, "click"], ["width", "19px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png", "title", "Linked"], ["width", "19px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png", "title", "Not Linked", 1, "black-white"], [1, "text-info", "font-weight-400"], [1, "text-danger", "font-weight-400"], [1, "text-warning", "font-weight-400"], [1, "text-primary", "font-weight-400"], [1, "text-success", "font-weight-400"], [1, "font-weight-400", 2, "color", "#c0b5dc"], [1, "kt-widget1__item"], [1, "kt-widget1__info", "kt-align-left"], ["Onlysubject", ""], [1, "fas", "fa-paperclip", 2, "color", "#A9A9A9"], [1, "fas", "fa-circle"]], template: function ViewDashboardProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, ViewDashboardProjectsComponent_h3_6_Template, 2, 1, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ViewDashboardProjectsComponent_div_7_Template, 6, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "div", 13)(14, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ViewDashboardProjectsComponent_Template_input_ngModelChange_14_listener($event) { return ctx.searchText = $event; })("keydown.enter", function ViewDashboardProjectsComponent_Template_input_keydown_enter_14_listener() { return ctx.SearchbyText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 15)(16, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_Template_button_click_16_listener() { return ctx.SearchbyText(); })("keydown.enter", function ViewDashboardProjectsComponent_Template_button_keydown_enter_16_listener($event) { return $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ViewDashboardProjectsComponent_ng_container_19_Template, 2, 0, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, ViewDashboardProjectsComponent_ng_container_20_Template, 2, 2, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, ViewDashboardProjectsComponent_ng_container_21_Template, 2, 2, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, ViewDashboardProjectsComponent_ng_container_22_Template, 2, 2, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, ViewDashboardProjectsComponent_span_24_Template, 2, 1, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](25, ViewDashboardProjectsComponent_span_25_Template, 2, 1, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_Template_button_click_26_listener() { ctx.CurrentPageNo = ctx.CurrentPageNo - 1; return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_Template_button_click_28_listener() { ctx.CurrentPageNo = ctx.CurrentPageNo + 1; return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "div", 23)(31, "ul", 24)(32, "li", 25)(33, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 28)(36, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_Template_div_click_36_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "div", 1)(38, "div", 30)(39, "h5")(40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, "Total Projects - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "h5", 31)(43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](45, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "div", 1)(47, "div", 32)(48, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ViewDashboardProjectsComponent_Template_input_ngModelChange_48_listener($event) { return ctx.txtSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "div", 1)(51, "div", 34)(52, "div", 35)(53, "p")(54, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](56, ViewDashboardProjectsComponent_div_56_Template, 7, 3, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](57, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "div", 34)(59, "div", 35)(60, "p")(61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](62, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](63, ViewDashboardProjectsComponent_div_63_Template, 7, 4, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](64, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](65, "div", 34)(66, "div", 35)(67, "p")(68, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](69, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](70, ViewDashboardProjectsComponent_div_70_Template, 7, 4, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](71, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](72, "br")(73, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "div")(75, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](76, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](77, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_Template_button_click_77_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](78, "Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "div", 39)(80, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_Template_a_click_80_listener() { return ctx._SortProjectList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](81, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_Template_a_click_82_listener() { return ctx._SortProjectList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](83, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_Template_button_click_84_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](85, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "div", 46)(87, "div", 47)(88, "div", 48)(89, "div", 49)(90, "div", 50)(91, "div", 1)(92, "div", 51)(93, "table", 52)(94, "thead")(95, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](96, "th", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](97, "th")(98, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](99, "Task Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "th")(101, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](102, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](103, "th")(104, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](105, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "th")(107, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](108, "Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "th")(110, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](111, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](112, "th")(113, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](114, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](115, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](116, "Last Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](117, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](118, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](119, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](120, ViewDashboardProjectsComponent_tr_120_Template, 23, 25, "tr", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](121, "div", 55)(122, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "div", 56)(127, "div", 1)(128, "div", 51)(129, "table", 57)(130, "thead")(131, "tr", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](132, "th", 59)(133, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](134, "th", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_Template_th_click_134_listener() { return ctx._SortPortfoliolist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](135, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](136, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](137, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](138, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](139, " Project Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](140, "th", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](141, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](142, " Project Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](143, "th", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](144, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](145, " Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](146, "th", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](147, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](148, " Employee Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](149, "th", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](150, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](151, " End Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](152, "th", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](153, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](154, " Last Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](155, "th", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](156, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](157, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](158, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](159, ViewDashboardProjectsComponent_tr_159_Template, 50, 32, "tr", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](160, "div", 71)(161, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](165, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](168);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](169, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](170, "div", 72)(171, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](172, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](173, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](174, "div", 75)(175, "div", 76)(176, "div", 5)(177, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_Template_a_click_177_listener() { return ctx.closeLinkSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](178, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](179, "h5", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](180, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](181, " Link Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](182, "ul", 80)(183, "li", 81)(184, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](185);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](186, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](187, " Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](188, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](189);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](190, " Linked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](191, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](192);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](193, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](194, "li", 87)(195, "div", 88)(196, "ng-multiselect-dropdown", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ViewDashboardProjectsComponent_Template_ng_multiselect_dropdown_ngModelChange_196_listener($event) { return ctx.ngDropdwonMemo = $event; })("onSelect", function ViewDashboardProjectsComponent_Template_ng_multiselect_dropdown_onSelect_196_listener() { return ctx.Memo_Select(ctx.ngDropdwonMemo); })("onDeSelect", function ViewDashboardProjectsComponent_Template_ng_multiselect_dropdown_onDeSelect_196_listener() { return ctx.Memo_Deselect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](197, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_Template_button_click_197_listener() { return ctx._AddLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](198, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](199, "li", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](200, "div", 91)(201, "div", 76)(202, "div", 5)(203, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_Template_a_click_203_listener() { return ctx._CloseMemosidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](204, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](205, "div", 78)(206, "h5", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](207, "img", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](208, " Linked Memos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](209, "span", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](210);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](211, "div", 95)(212, "div", 96)(213, "div", 49)(214, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](215, ViewDashboardProjectsComponent_div_215_Template, 6, 2, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](216, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_Template_div_click_216_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.Mode != "AssignedTask" && ctx.Mode != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.Mode == "AssignedTask");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.CurrentPageNo == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.CurrentPageNo == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.CurrentPageNo != 1 && ctx.CurrentPageNo != ctx.LastPage && ctx.CurrentPageNo != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.CurrentPageNo == ctx.LastPage && ctx.CurrentPageNo != 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx._totalProjectsCount >= 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx._totalProjectsCount < 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx.CurrentPageNo <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx._CurrentpageRecords < 30 || ctx.CurrentPageNo == ctx.LastPage && ctx._CurrentpageRecords == 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx.edited ? "btn btn-label-primary btn-upper btn-sm btn-bold filter-dot" : "btn btn-label-primary btn-upper btn-sm btn-bold");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx._totalProjectsCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.txtSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](57, 47, ctx.TypeContInFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](64, 50, ctx.StatusCountFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](71, 53, ctx.EmpCountInFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx.Z2A);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx.A2Z);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx.AssignedTask);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx._AssignedProjectsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx.notSelectedAnything_msg, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.notSelectedAnything_msg2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx.projectsDataTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx.Z2A1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx.A2Z1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx._filtersMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx._filtersMessage2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx.notSelectedAnything_msg, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.notSelectedAnything_msg2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx._displayProjName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx._totalMemos, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx._mappedMemos, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("placeholder", "Select Memo")("settings", ctx.dropdownSettings_Memo)("data", ctx.Memos_List)("ngModel", ctx.ngDropdwonMemo);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx._displayProjName);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx._MemosSubjectList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__.MultiSelectComponent, _sort_directive__WEBPACK_IMPORTED_MODULE_8__.SortDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__.Ng2SearchPipe, _view_date_ago__WEBPACK_IMPORTED_MODULE_10__.ViewDateAgo], styles: [".list-icon-color[_ngcontent-%COMP%]{\n    color: #969696\n   }\n\n  .loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\n    background: #0dc5c1;\n    animation: load1 1s infinite ease-in-out;\n    width: 1em;\n    height: 4em;\n  }\n\n  .loader[_ngcontent-%COMP%] {\n    color: #0dc5c1;\n    text-indent: -9999em;\n    margin: 88px auto;\n    position: relative;\n    font-size: 11px;\n    transform: translateZ(0);\n    animation-delay: -0.16s;\n  }\n\n  .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\n    position: absolute;\n    top: 0;\n    content: '';\n  }\n\n  .loader[_ngcontent-%COMP%]:before {\n    left: -1.5em;\n    animation-delay: -0.32s;\n  }\n\n  .loader[_ngcontent-%COMP%]:after {\n    left: 1.5em;\n  }\n\n  @keyframes load1 {\n    0%,\n    80%,\n    100% {\n      box-shadow: 0 0;\n      height: 4em;\n    }\n    40% {\n      box-shadow: 0 -2em;\n      height: 5em;\n    }\n  }\n\n  .center[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 200px;\n  }\n\n  .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    border-radius: 2px;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]{\n  width: 400px;\n  height: auto;\n  max-height: 400px;\n  padding: 10px;\n  top: 38px !important;\n  left: auto !important;\n  right: 0px !important;\n  overflow-y: auto;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n  .ngx-pagination[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n  #backBtn[_ngcontent-%COMP%]:hover{\n background-color:#5867dd ;\n color: white; \n}\n\n  #Mdl_closebtn[_ngcontent-%COMP%]:hover{\n  background-color: #dc3545;\n  color:white\n}\n\n  .text-warning-1[_ngcontent-%COMP%]{\n  background-color: #ffe0a7;\n  color:#FFA800;\n  width: auto;\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n\n  .text-danger-1[_ngcontent-%COMP%]{\n  color: #F64E60;\n  background-color: #FFE2E5;\n  width: auto;\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n\n  .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%], .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-up[_ngcontent-%COMP%]{\n  border-top: 7px solid #adadad !important;\n    border-left: 7px solid transparent !important;\n    border-right: 7px solid transparent !important\n}\n\n  .multiselect-dropdown[_ngcontent-%COMP%]{\n  width: 80px !important;\n\n}\n\n  .kt-todo__details[_ngcontent-%COMP%]{\n  display: flex;\n}\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]{\n    border: 0;\n    background: none;\n    font-size: 16px;\n    outline: none !important;\n    box-shadow: none;\n    outline: none !important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 30px;\n    width: 30px;\n    background-color: #f5f6fc;\n    border: 1px solid #b3bcff;\n    color: #5867dd;\n    transition: all 0.3s ease;\n    cursor: pointer;\n    margin: 0 8px 0 0;\n    border-radius: 0;\n    border-radius: 4px;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon[_ngcontent-%COMP%] {\n    height: 18px;\n    width: 18px;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]{\n  height: 25px;\n  width: 25px;\n}\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{\n    fill: #5867dd;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\n    fill: #5867dd;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\n    fill: #fff;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{\n  fill: #fff;\n}\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover, .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]{\n    background-color: #5867dd;\n    color: #fff;\n  }\n\n  .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    font-size: 18px;\n    color: #ccc;\n  }\n\n  .card-title[_ngcontent-%COMP%]   .favourite.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{\n    color: #ffc107;\n  }\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\n    border-color: #d6d6d6;\n  }\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.success {\n    border-left: 5px solid #1dc9b7;\n    \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.warning {\n    border-left: 5px solid #ffb822; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.info {\n    border-left: 5px solid #2786fb; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.danger {\n    border-left: 5px solid #F58A8B; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.UnderApprovals {\n  border-left: 5px solid #BD838C; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.ForwardUnderApproval {\n  border-left: 5px solid #E0B1D7; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.completeUnderApproval {\n  border-left: 5px solid #98c7bf; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.projectHold {\n  border-left: 5px solid #C0B5DC; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.HoldunderApp {\n  border-left: 5px solid #a85098; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.DeadlineExtended{\n  border-left: 5px solid #E0B1D7; \n}\n\n  .delayDays[_ngcontent-%COMP%]{\n  font-size: 11px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n  transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\n  fill: #5E5F63;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\n  padding: 0.2rem 20px;\n  border-radius: 4px;\n}\n\n  .mail-dropdown[_ngcontent-%COMP%] {\n  width: 800px;\n  max-width: 100%;\n}\n\n  .mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-bottom: 5px;\n}\n\n  .kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\n  min-height: 60px;\n}\n\n  .kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n  .dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #ccc !important;\n  border-radius: 4px;\n}\n\n  .kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n  color: #74788D !important;\n  cursor: auto;\n}\n\n  .kt-nav__link-text[_ngcontent-%COMP%]:hover {\n  color: #74788D !important;\n}\n\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\n  background-color: rgba(154, 100, 142, 0.2);\n  color: #333 !important;\n  transition: all 0.3s;\n}\n\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n  .kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background: rgb(195, 195, 195);\n}\n\n  \n\n  .kt-quick-panel2[_ngcontent-%COMP%] {\n  width: 650px !important;\n}\n\n  .kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\n  right: -660px;\n  left: auto;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  border-radius: 5px;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #F1F1F1;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n  \n\n  \n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\n  background-color: #FFFFFF !important;\n}\n\n  .chatcount[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-left: -15px;\n  margin-top: -10px;\n}\n\n  .kt-badge.kt-badge--dark[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background: #8C8D92;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n  transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\n  fill: #5E5F63;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\n  padding: 0.2rem 20px;\n  border-radius: 4px;\n}\n\n  .kt-font-ReplyRequired[_ngcontent-%COMP%] {\n  color: #a6c !important;\n}\n\n  .mail-dropdown[_ngcontent-%COMP%] {\n  width: 800px;\n  max-width: 100%;\n}\n\n  .mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-bottom: 5px;\n}\n\n  .kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\n  min-height: 60px;\n}\n\n  .kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n  .dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #ccc !important;\n  border-radius: 4px;\n}\n\n  .kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n  color: #74788D !important;\n  cursor: auto;\n}\n\n  .kt-nav__link-text[_ngcontent-%COMP%]:hover {\n  color: #74788D !important;\n}\n\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\n  background-color: rgba(154, 100, 142, 0.2);\n  color: #333 !important;\n  transition: all 0.3s;\n}\n\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n  .kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background: rgb(195, 195, 195);\n}\n\n  \n\n  .kt-quick-panel2[_ngcontent-%COMP%] {\n  width: 650px !important;\n}\n\n  .kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\n  right: -660px;\n  left: auto;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  border-radius: 5px;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #F1F1F1;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n  \n\n  \n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  outline: none !important;\n  box-shadow: none;\n  outline: none !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 35px;\n  width: 35px;\n  background-color: #FFFFFF;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  margin: 0;\n  border-radius: 0;\n  border-radius: 4px;\n}\n\n  .kt-badge.kt-badge--inline[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n  padding: 0.15rem 0.75rem;\n  border-radius: 2px;\n  margin-left: 4px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%] {\n  padding: 17px;\n  width: 243px;\n}\n\n  \n\n  .Replied_border_left_true_warning[_ngcontent-%COMP%]{\n  border-left: 5px solid #ffb822;\n}\n\n  .Replied_border_left_true_primary[_ngcontent-%COMP%]{\n  border-left: 5px solid #95bed9;\n}\n\n  .Replied_border_left_true_success[_ngcontent-%COMP%]{\n  border-left: 5px solid #95bed9;\n}\n\n  .Replied_border_left_true_Danger[_ngcontent-%COMP%]{\n  border-left: 5px solid #F58A8B;\n}\n\n  .Replied_border_left_true_hold[_ngcontent-%COMP%]{\n  border-left: 5px solid #c0b5dc\n}\n\n  .Replied_border_left_true_rejected[_ngcontent-%COMP%]{\n  border-left: 5px solid #f5c293;\n}\n\n  .Replied_border_left_true_underApprovals[_ngcontent-%COMP%]{\n  border-left: 5px solid #BD838C;\n}\n\n  .Replied_border_left_true_forwardUnderApproval[_ngcontent-%COMP%]{\n  border-left: 5px solid #E0B1D7;\n}\n\n  .Replied_border_left_true_completeUnderApproval[_ngcontent-%COMP%]{\n  border-left: 5px solid #98c7bf;\n}\n\n  .Replied_border_left_true_projectHold[_ngcontent-%COMP%]{\n  border-left: 5px solid #C0B5DC;\n}\n\n  .Replied_border_left_true_NewProject[_ngcontent-%COMP%]{\n  border-left: 5px solid #007bff;\n}\n\n  .Replied_border_left_true_DeadlineExtended[_ngcontent-%COMP%]{\n  border-left: 5px solid #E0B1D7;\n}\n\n  .Replied_border_left_true_HoldunderApp[_ngcontent-%COMP%]{\n  border-left: 5px solid #a85098;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%] {\n    margin-left: -17px;\n}\n\n  .icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]{\n  position: relative;\n  margin-right: 15px !important;\n  z-index: 2;\n}\n\n  .icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  width: 18px;\n    height: 18px;\n    text-align: center;\n    font-size: 10px;\n    font-weight: 700;\n  color: #fff;\n  background: #5867dd;\n  border: 1px solid #5867dd;\n  border-radius: 50%;\n  position: absolute;\n  top: -11px;\n  right: -11px;\n  z-index: 3;\n}\n\n  \n\n  \n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]{\n  margin-top: 0px !important;\n}\n\n  .multiselect-dropdown[_ngcontent-unj-c40][_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-unj-c40][_ngcontent-%COMP%]{\n  width: 150px !important;\n}\n\n  \n\n  .sideInfobar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  right: 0;\n  background-color: #ffffff;\n  border-left: 1px solid #b3bcff;\n  overflow-x: hidden;\n  transition: 0.5s;\n  \n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%]{\n  background-color: #f5f6fc;\n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n\ttext-decoration: none;\n\tcolor: #333;\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n\n  .info-icon-cir[_ngcontent-%COMP%]{\n  font-size: 20px;\n  color: #5867dd;\n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]{\n  border-bottom: 0.07rem dashed #dedede;\n  padding: 6px;\n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%]{\n  border-bottom: 0.07rem dashed rgba(0,0,0,0.3);\n}\n\n  \n\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%]{\n  font-weight: 600;\n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]{\n    width: 270px;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n  .count-height[_ngcontent-%COMP%]{\n  max-height: 200px;\n  overflow-y: auto;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]   .justify-content-between[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]{\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #f1f1f1;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #ccc;\n}\n\n  .dropdown[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]{\n  border-color: #5867dd;\n}\n\n  .kt-checkbox[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  border: solid #5867dd;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown[_ngcontent-%COMP%] {\n  position: static !important;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%] {\n    padding: 20px;\n    width: 60%;\n    \n    top: 20px !important;\n    left: -22px !important;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:before {\n  content: \"\";\n  border-bottom: 15px solid #fff;\n  border-right: 17px solid transparent;\n  border-left: 17px solid transparent;\n  position: absolute;\n  top: -15px;\n  left: 32px;\n  z-index: 10;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  border-bottom: 17px solid #ccc;\n  border-right: 19px solid transparent;\n  border-left: 19px solid transparent;\n  position: absolute;\n  top: -17px;\n  left: 30px;\n  z-index: 8;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu1[_ngcontent-%COMP%]   .filter-box[_ngcontent-%COMP%]{\n  width: 33.3333%;\n  display: inline-block;\n}\n\n  \n\n  .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{\n  \n  cursor: pointer;\n}\n\n  .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{\n  border: 1px solid #d6dbff;\n  border-radius: 5px;\n}\n\n  .show_entries[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 3px;\n  background-color: #fff;\n \n}\n\n  .show_entries[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\n  \n  border: 2px solid rgba(88, 103, 221, 0.3);\n  color: #5867dd;\n  font-weight: bold;\n}\n\n  .count-btn[_ngcontent-%COMP%]{\n  \n  \n  padding: 0px 10px;\n  font-weight: 700;\n  color: rgb(88, 88, 88);\n  font-size: 14px;\n  line-height: 25px;\n}\n\n  \n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__toolbar[_ngcontent-%COMP%]   .kt-inbox__search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 44px;\n  border: none;\n  background-color: #f2f3f7;\n}\n\n  .input-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100% !important;\n}\n\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]{\n  \n  background-color: #fff;\n  width: 25vw;\n  box-shadow: none;\n  border: 1px solid #d6dbff !important;\n  margin-top: 5px;\n}\n\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{\n  background-color: #f5f6fc;\n}\n\n  \n\n  \n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%]   .kt-inbox__items[_ngcontent-%COMP%]   .kt-inbox__item[_ngcontent-%COMP%]{\n  position: relative;\n}\n\n  .delete-btn[_ngcontent-%COMP%]{\n  display: none;\n  position: absolute;\n   right: 0px;\n    top: 50%;\n    transform: translateY(-50%);\n    background-color: #f2f3f7;\n    color: grey;\n    line-height: 63px;\n    padding: 0 20px;\n    transition: all 2s ease !important;\n}\n\n  .delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n  background: none;\n  font-size: 16px;\n  outline: none !important;\n  box-shadow: none;\n  outline: none !important;\n  height: 30px;\n  width: 30px;\n  background-color: #f5f6fc;\n  border: 1px solid #b3bcff;\n  color: #5867dd;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  margin: 10px 8px 0 0;\n  border-radius: 0;\n  border-radius: 4px;\n  padding: 5px;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n\n  \n\n  .btn-secondary.theme-btn[_ngcontent-%COMP%]{\n  background-color: #5867dd;\n  color: #fff;\n}\n\n  .btn.btn-label-primary[_ngcontent-%COMP%]{\n  border: 1px solid #b3bcff;\n}\n\n  .delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\n    background-color: #5867dd;\n    color: #fff;\n}\n\n  .kt-inbox__item[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%]{\n  display: block;\n}\n\n  \n\n  .name-box[_ngcontent-%COMP%]{\n  display: inline-block;\n  font-size: 9px;\n  width: 30px;\n  height: 30px;\n  background-color: #5867dd;\n  color: #fff;\n  font-weight: 500;\n  letter-spacing: 2px;\n  border-radius: 50%;\n  line-height: 30px;\n  margin-right: 5px;\n}\n\n  .names-response[_ngcontent-%COMP%]{\n  display :inline-block;\n  text-align: left;\n}\n\n  .names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{\n  display: block;\n  font-size: 10px;\n  font-weight: 600;\n}\n\n  .names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{\n  font-weight: 600;\n}\n\n  .head-btn[_ngcontent-%COMP%]{\n  background-color: rgba(88, 103, 221, 0.1);\n    padding: 3px 10px 3px 5px;\n    border-radius: 2rem;\n    border: 1px solid #b3bcff;\n    font-weight: 500;\n    font-size: 12px;\n}\n\n  .head-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    width: 25px;\n    height: 25px;\n    background: #5867dd;\n    color: #fff;\n    line-height: 25px;\n    text-align: center;\n    border-radius: 50%;\n    margin-right: 3px;\n}\n\n  .devider[_ngcontent-%COMP%]{\n  height: 1px;\n  width: 100%;\n  background-color: #f1f1f1;\n}\n\n  .pricevalues[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-bottom: 10px;\n  border-right: 1px solid #f1f1f1;\n  border-bottom: 1px solid #f1f1f1;\n}\n\n  .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(1), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(2)  {\n  border-top: 1px solid #f1f1f1;\n}\n\n  .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(3), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(4)  {\n  border-bottom: none\n}\n\n  .pricevalues[_ngcontent-%COMP%]:nth-child(2), .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\n  border-right: none;\n}\n\n  .dms-links[_ngcontent-%COMP%]{\n  list-style-type: disc;\n}\n\n  .dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  display: block;\n  text-decoration: underline;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n\n  \n\n  .progress_bar[_ngcontent-%COMP%]   .pro-bar[_ngcontent-%COMP%] {\n  background: hsl(0, 0%, 97%);\n  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;\n  height: 4px;\n  margin-bottom: 12px;\n  margin-top: 30px;\n  position: relative;\n  text-align: left;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress_bar_title[_ngcontent-%COMP%] {\n  color: hsl(218, 4%, 50%);\n  font-size: 12px;\n  font-weight: 600;\n  position: relative;\n  top: -28px;\n  z-index: 1;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress_number[_ngcontent-%COMP%] {\n  float: right;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%] {\n  background-color: hsl(0, 0%, 88%);\n  display: block;\n  width: 0;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: width 1s linear 0s;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background-color: hsl(0, 0%, 100%);\n  border-radius: 50%;\n  width: 4px;\n  height: 4px;\n  position: absolute;\n  right: 1px;\n  top: 0;\n  z-index: 1;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 14px;\n  height: 14px;\n  background-color: inherit;\n  border-radius: 50%;\n  position: absolute;\n  right: -4px;\n  top: -5px;\n}\n\n  .bg-today[_ngcontent-%COMP%] {\n  background-color: #342bf0 !important;\n}\n\n  @media only screen and (max-width: 768px) {\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]{\n    width: 80vw;\n  }\n}\n\n  .main-d[_ngcontent-%COMP%]{\n  margin-top: 7px;\n  padding: 0.875rem 0;\n}\n\n  .main-d[_ngcontent-%COMP%]   a.dropdown-item[_ngcontent-%COMP%]{\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\n  font-size: 1rem;\n  font-weight: 400;\n  cursor: pointer !important;\n}\n\n  .show[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]:after {\n  transform: translateY(-50%) rotate(180deg);\n}\n\n  .select-box[_ngcontent-%COMP%]:after {\n  position: absolute;\n  right: -20px;\n  top: 50%;\n  border: none;\n  transform: translateY(-50%) rotate(0deg);\n  transition: all 0.2s ease-in-out;\n  content: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14.001' height='8.165' viewBox='0 0 14.001 8.165'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23212121;%7D%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M13.861,60.224l-.7-.7a.441.441,0,0,0-.645,0L7,65.036,1.487,59.522a.441.441,0,0,0-.645,0l-.7.7a.441.441,0,0,0,0,.645l6.537,6.538a.441.441,0,0,0,.645,0l6.538-6.538a.442.442,0,0,0,0-.645Z' transform='translate(0 -59.382)'/%3E%3C/svg%3E\");\n}\n\n  .no-after[_ngcontent-%COMP%]::after{\n  content: none !important;\n}\n\n  .cursor-pointer[_ngcontent-%COMP%]{\n  cursor: pointer;\n}\n\n  .dropdown-item[_ngcontent-%COMP%]:focus {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n\n  .dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #007bff;\n}\n\n  .kt-widget__title[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\n  @media (max-width: 1440px){\n.kt-widget__title[_ngcontent-%COMP%] {\n    width: 240px;\n}\n}\n\n  span.count2[_ngcontent-%COMP%] {\n  margin-left: 2px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  background: #deecf8;\n  color: #2786fb;\n  border-radius: 50%;\n  font-size: 0.9rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctZGFzaGJvYXJkLXByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FtQks7O0VBRUg7SUFDRTtHQUNEOztFQUNEOzs7SUFHRSxtQkFBbUI7SUFFbkIsd0NBQXdDO0lBQ3hDLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUdmLHdCQUF3QjtJQUV4Qix1QkFBdUI7RUFDekI7O0VBQ0E7O0lBRUUsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxZQUFZO0lBRVosdUJBQXVCO0VBQ3pCOztFQUNBO0lBQ0UsV0FBVztFQUNiOztFQWNBO0lBQ0U7OztNQUdFLGVBQWU7TUFDZixXQUFXO0lBQ2I7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixXQUFXO0lBQ2I7RUFDRjs7RUFDQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7RUFDZjs7RUFDQTtJQUNFLGtCQUFrQjtBQUN0Qjs7RUFDQTs7Ozs7O0tBTUs7O0VBRUw7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztFQUNBLFVBQVU7O0VBQ1Y7RUFDRSxVQUFVO0FBQ1o7O0VBRUEsVUFBVTs7RUFDVjtFQUNFLG1CQUFtQjtBQUNyQjs7RUFFQSxXQUFXOztFQUNYO0VBQ0UsZ0JBQWdCO0FBQ2xCOztFQUVBLG9CQUFvQjs7RUFDcEI7RUFDRSxnQkFBZ0I7QUFDbEI7O0VBQ0E7RUFDRSxlQUFlO0FBQ2pCOztFQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLFlBQVk7QUFDYjs7RUFDQTtFQUNFLHlCQUF5QjtFQUN6QjtBQUNGOztFQUVBO0VB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RUFDQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztFQUVBO0VBQ0UsWUFBWTtBQUNkOztFQUNBO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7O0VBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJ2aWV3LWRhc2hib2FyZC1wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogI2xvYWRpbmd7IFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICBsZWZ0OiA1MCU7IFxuICB0b3A6IDUwJTsgXG4gIHotaW5kZXg6IDE7IFxuICB3aWR0aDogMTUwcHg7IFxuICBoZWlnaHQ6IDE1MHB4OyBcbiAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7IFxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjsgXG4gIHdpZHRoOiAxMjBweDsgXG4gIGhlaWdodDogMTIwcHg7IFxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyBcbiAgfSBcbiAgICBcbiAgQGtleWZyYW1lcyBzcGluIHsgXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfSBcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSBcbiAgfSAqL1xuXG4gIC5saXN0LWljb24tY29sb3J7XG4gICAgY29sb3I6ICM5Njk2OTZcbiAgIH1cbiAgLmxvYWRlcixcbiAgLmxvYWRlcjpiZWZvcmUsXG4gIC5sb2FkZXI6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICMwZGM1YzE7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQxIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbjogbG9hZDEgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgd2lkdGg6IDFlbTtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgfVxuICAubG9hZGVyIHtcbiAgICBjb2xvcjogIzBkYzVjMTtcbiAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgICBtYXJnaW46IDg4cHggYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gIH1cbiAgLmxvYWRlcjpiZWZvcmUsXG4gIC5sb2FkZXI6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgY29udGVudDogJyc7XG4gIH1cbiAgLmxvYWRlcjpiZWZvcmUge1xuICAgIGxlZnQ6IC0xLjVlbTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICB9XG4gIC5sb2FkZXI6YWZ0ZXIge1xuICAgIGxlZnQ6IDEuNWVtO1xuICB9XG5cbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQxIHtcbiAgICAwJSxcbiAgICA4MCUsXG4gICAgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIDA7XG4gICAgICBoZWlnaHQ6IDRlbTtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgLTJlbTtcbiAgICAgIGhlaWdodDogNWVtO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGxvYWQxIHtcbiAgICAwJSxcbiAgICA4MCUsXG4gICAgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIDA7XG4gICAgICBoZWlnaHQ6IDRlbTtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgLTJlbTtcbiAgICAgIGhlaWdodDogNWVtO1xuICAgIH1cbiAgfVxuICAuY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuICAubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi8qIFxuICB0YWJsZSwgdGgsIHRkIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgdGFibGUge1xuICAgIGJvcmRlci1zcGFjaW5nOiAxNXB4O1xuICB9ICovXG5cbi5zaGFyZWRkZXRhaWxzLmRyb3Bkb3duLW1lbnV7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgdG9wOiAzOHB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLyogd2lkdGggKi9cbi5zaGFyZWRkZXRhaWxzLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbn1cblxuLyogVHJhY2sgKi9cbi5zaGFyZWRkZXRhaWxzLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLyogSGFuZGxlICovXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuLm5neC1wYWdpbmF0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuI2JhY2tCdG46aG92ZXJ7XG4gYmFja2dyb3VuZC1jb2xvcjojNTg2N2RkIDtcbiBjb2xvcjogd2hpdGU7IFxufVxuI01kbF9jbG9zZWJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbiAgY29sb3I6d2hpdGVcbn1cblxuLnRleHQtd2FybmluZy0xe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMGE3O1xuICBjb2xvcjojRkZBODAwO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udGV4dC1kYW5nZXItMXtcbiAgY29sb3I6ICNGNjRFNjA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkUyRTU7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5kcm9wZG93bi1kb3duLFxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLmRyb3Bkb3duLXVwe1xuICBib3JkZXItdG9wOiA3cHggc29saWQgI2FkYWRhZCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50XG59XG5cbi5tdWx0aXNlbGVjdC1kcm9wZG93bntcbiAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcblxufVxuLmt0LXRvZG9fX2RldGFpbHN7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbntcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmM7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcbiAgICBjb2xvcjogIzU4NjdkZDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAwIDhweCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24gc3ZnLmt0LXN2Zy1pY29uIHtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gIH1cblxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24gc3ZnLmt0LXN2Zy1pY29uLmFkZC1pY29ue1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uIC5rdC1zdmctaWNvbiBnIFtmaWxsXXtcbiAgICBmaWxsOiAjNTg2N2RkO1xuICB9XG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uIHN2Zy5rdC1zdmctaWNvbi5hZGQtaWNvbiBwYXRoe1xuICAgIGZpbGw6ICM1ODY3ZGQ7XG4gIH1cbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb246aG92ZXIgc3ZnLmt0LXN2Zy1pY29uLmFkZC1pY29uIHBhdGgsXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uLmFjdGl2ZSBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24gcGF0aHtcbiAgICBmaWxsOiAjZmZmO1xuICB9XG5cbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb246aG92ZXIgLmt0LXN2Zy1pY29uIGcgW2ZpbGxdLFxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbi5hY3RpdmUgLmt0LXN2Zy1pY29uIGcgW2ZpbGxde1xuICBmaWxsOiAjZmZmO1xufVxuXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uOmhvdmVyLFxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbi5hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuY2FyZC10aXRsZSAuZmF2b3VyaXRlIGl7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjY2NjO1xuICB9XG4gIC5jYXJkLXRpdGxlIC5mYXZvdXJpdGUuYWN0aXZlIGksXG4gIC5jYXJkLXRpdGxlIC5mYXZvdXJpdGU6aG92ZXIgaXtcbiAgICBjb2xvcjogI2ZmYzEwNztcbiAgfVxuXG4gIC5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZHtcbiAgICBib3JkZXItY29sb3I6ICNkNmQ2ZDY7XG4gIH1cblxuICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuc3VjY2VzcyB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMWRjOWI3O1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDRweDsgKi9cbn1cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC53YXJuaW5nIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmI4MjI7IFxufVxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLmluZm8ge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzI3ODZmYjsgXG59XG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuZGFuZ2VyIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNGNThBOEI7IFxufVxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLlVuZGVyQXBwcm92YWxzIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQkQ4MzhDOyBcbn1cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5Gb3J3YXJkVW5kZXJBcHByb3ZhbCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0UwQjFENzsgXG59XG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuY29tcGxldGVVbmRlckFwcHJvdmFsIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOThjN2JmOyBcbn1cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5wcm9qZWN0SG9sZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0MwQjVEQzsgXG59XG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuSG9sZHVuZGVyQXBwIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTg1MDk4OyBcbn1cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5EZWFkbGluZUV4dGVuZGVke1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7IFxufVxuLmRlbGF5RGF5c3tcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4ua3QtaW5ib3ggLmt0LWluYm94X19hc2lkZSAua3QtaW5ib3hfX25hdiAua3QtbmF2IC5rdC1uYXZfX2l0ZW0gLmt0LW5hdl9fbGluayBnIFtmaWxsXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4zcyBjdWJpYy1iZXppZXIoMC45MywgMC4zNSwgMSwgMSk7XG4gIGZpbGw6ICM1RTVGNjM7XG59XG4ua3QtaW5ib3ggLmt0LWluYm94X19hc2lkZSAua3QtaW5ib3hfX25hdiAua3QtbmF2IC5rdC1uYXZfX2l0ZW0gLmt0LW5hdl9fbGluayB7XG4gIHBhZGRpbmc6IDAuMnJlbSAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ubWFpbC1kcm9wZG93biB7XG4gIHdpZHRoOiA4MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLm1haWwtZHJvcGRvd24gdGFibGUgdGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmt0LXF1aWNrLXBhbmVsIC5rdC1wb3J0bGV0Lmt0LXBvcnRsZXQtLWhlYWQtbGcgLmt0LXBvcnRsZXRfX2hlYWQge1xuICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuLmt0LWluYm94X19pY29uIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLW1lbnUtc20ge1xuICB3aWR0aDogMTUwcHg7XG59XG4uZHJvcGRvd24tcmVwbHkgdWwgbGkgYSAua3QtbmF2X19saW5rLWljb24ge1xuICB3aWR0aDogMjBweDtcbn1cbi5rdC1pbmJveCAua3QtaW5ib3hfX2Zvcm0gLmt0LWluYm94X19ib2R5IC5rdC1pbmJveF9fdG8gLmt0LWluYm94X19maWVsZCAua3QtaW5ib3hfX2xhYmVsIHtcbiAgd2lkdGg6IDYwcHg7XG59XG4ua3QtaW5ib3ggLmt0LWluYm94X19mb3JtIC5rdC1pbmJveF9fYm9keSAua3QtaW5ib3hfX3RvIC5rdC1pbmJveF9fZmllbGQgLmt0LWluYm94X19pbnB1dCBpbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmt0LW5hdl9fbGluay1ub2hvdmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6ICM3NDc4OEQgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBhdXRvO1xufVxuLmt0LW5hdl9fbGluay10ZXh0OmhvdmVyIHtcbiAgY29sb3I6ICM3NDc4OEQgIWltcG9ydGFudDtcbn1cbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rLFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rLFxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU0LCAxMDAsIDE0MiwgMC4yKTtcbiAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93LFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3cge1xuICBjb2xvcjogIzMzMztcbn1cbi5rdC1iYWRnZS5rdC1iYWRnZS0tdW5pZmllZC1icmFuZCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBiYWNrZ3JvdW5kOiByZ2IoMTk1LCAxOTUsIDE5NSk7XG59XG4vKiAuaW5ib3gtdGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiA2MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59ICovXG4ua3QtcXVpY2stcGFuZWwyIHtcbiAgd2lkdGg6IDY1MHB4ICFpbXBvcnRhbnQ7XG59XG4ua3QtcXVpY2stcGFuZWwtLXJpZ2h0IC5rdC1xdWljay1wYW5lbCB7XG4gIHJpZ2h0OiAtNjYwcHg7XG4gIGxlZnQ6IGF1dG87XG59XG4vKiB3aWR0aCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI0YxRjFGMTtcbn1cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG59XG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuLyogLnNvbWVjbGFzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgZGlzcGxheTogbm9uZTtcbn0gKi9cbi8qIDpob3N0KC5zb21lQ2xhc3MpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufSAqL1xuLmt0LWluYm94IC5rdC1pbmJveF9faWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbn1cblxuLmNoYXRjb3VudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLWRhcmsge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZDogIzhDOEQ5Mjtcbn1cbi5rdC1pbmJveCAua3QtaW5ib3hfX2FzaWRlIC5rdC1pbmJveF9fbmF2IC5rdC1uYXYgLmt0LW5hdl9faXRlbSAua3QtbmF2X19saW5rIGcgW2ZpbGxdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGN1YmljLWJlemllcigwLjkzLCAwLjM1LCAxLCAxKTtcbiAgZmlsbDogIzVFNUY2Mztcbn1cbi5rdC1pbmJveCAua3QtaW5ib3hfX2FzaWRlIC5rdC1pbmJveF9fbmF2IC5rdC1uYXYgLmt0LW5hdl9faXRlbSAua3QtbmF2X19saW5rIHtcbiAgcGFkZGluZzogMC4ycmVtIDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5rdC1mb250LVJlcGx5UmVxdWlyZWQge1xuICBjb2xvcjogI2E2YyAhaW1wb3J0YW50O1xufVxuLm1haWwtZHJvcGRvd24ge1xuICB3aWR0aDogODAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5tYWlsLWRyb3Bkb3duIHRhYmxlIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5rdC1xdWljay1wYW5lbCAua3QtcG9ydGxldC5rdC1wb3J0bGV0LS1oZWFkLWxnIC5rdC1wb3J0bGV0X19oZWFkIHtcbiAgbWluLWhlaWdodDogNjBweDtcbn1cbi5rdC1pbmJveF9faWNvbiAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1tZW51LXNtIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLmRyb3Bkb3duLXJlcGx5IHVsIGxpIGEgLmt0LW5hdl9fbGluay1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG59XG4ua3QtaW5ib3ggLmt0LWluYm94X19mb3JtIC5rdC1pbmJveF9fYm9keSAua3QtaW5ib3hfX3RvIC5rdC1pbmJveF9fZmllbGQgLmt0LWluYm94X19sYWJlbCB7XG4gIHdpZHRoOiA2MHB4O1xufVxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9faW5wdXQgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5rdC1uYXZfX2xpbmstbm9ob3Zlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogYXV0bztcbn1cbi5rdC1uYXZfX2xpbmstdGV4dDpob3ZlciB7XG4gIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XG59XG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTAwLCAxNDIsIDAuMik7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay10ZXh0LFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay10ZXh0LFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay10ZXh0LFxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93IHtcbiAgY29sb3I6ICMzMzM7XG59XG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLXVuaWZpZWQtYnJhbmQge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZDogcmdiKDE5NSwgMTk1LCAxOTUpO1xufVxuLyogLmluYm94LXRleHQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogNjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSAqL1xuLmt0LXF1aWNrLXBhbmVsMiB7XG4gIHdpZHRoOiA2NTBweCAhaW1wb3J0YW50O1xufVxuLmt0LXF1aWNrLXBhbmVsLS1yaWdodCAua3QtcXVpY2stcGFuZWwge1xuICByaWdodDogLTY2MHB4O1xuICBsZWZ0OiBhdXRvO1xufVxuLyogd2lkdGggKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XG59XG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU1NTtcbn1cbi8qIC5zb21lY2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGRpc3BsYXk6IG5vbmU7XG59ICovXG4vKiA6aG9zdCguc29tZUNsYXNzKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0gKi9cbi5rdC1pbmJveCAua3QtaW5ib3hfX2ljb24ge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5rdC1iYWRnZS5rdC1iYWRnZS0taW5saW5lIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMC4xNXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4ua3QtaW5ib3ggLmt0LWluYm94X19hc2lkZSB7XG4gIHBhZGRpbmc6IDE3cHg7XG4gIHdpZHRoOiAyNDNweDtcbn1cbi8qIFN0YXR1cyBDb2xvcnMgKi9cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfd2FybmluZ3tcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZiODIyO1xufVxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9wcmltYXJ5e1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5NWJlZDk7XG59XG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3N1Y2Nlc3N7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk1YmVkOTtcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfRGFuZ2Vye1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNGNThBOEI7XG59XG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX2hvbGR7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2MwYjVkY1xufVxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9yZWplY3RlZHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjVjMjkzO1xufVxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV91bmRlckFwcHJvdmFsc3tcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQkQ4MzhDO1xufVxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9mb3J3YXJkVW5kZXJBcHByb3ZhbHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3O1xufVxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9jb21wbGV0ZVVuZGVyQXBwcm92YWx7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZjtcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcHJvamVjdEhvbGR7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0MwQjVEQztcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfTmV3UHJvamVjdHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDA3YmZmO1xufVxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9EZWFkbGluZUV4dGVuZGVke1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7XG59XG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX0hvbGR1bmRlckFwcHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTg1MDk4O1xufVxuLmt0LWluYm94IC5rdC1pbmJveF9fbGlzdCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xufVxuLmljb25zLWZpbHRlciAua3QtdG9kb19faWNvbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgei1pbmRleDogMjtcbn1cbi5pY29ucy1maWx0ZXIgLmt0LXRvZG9fX2ljb24gc3BhbntcbiAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM1ODY3ZGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1ODY3ZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMXB4O1xuICByaWdodDogLTExcHg7XG4gIHotaW5kZXg6IDM7XG59XG4vKiAuaWNvbnMtZmlsdGVyIC5rdC10b2RvX19pY29uOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNhMWY3ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnRcbn0gKi9cbi8qIC5pY29ucy1maWx0ZXIgLmt0LXRvZG9fX2ljb246aG92ZXIgc3BhbntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMTM0LCAyNTEsIDEpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnRcbn0gKi9cblxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxle1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm11bHRpc2VsZWN0LWRyb3Bkb3duW19uZ2NvbnRlbnQtdW5qLWM0MF0gLmRyb3Bkb3duLWJ0bltfbmdjb250ZW50LXVuai1jNDBde1xuICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbn1cblxuLyogPT09IFNpZGViYXIgPT09ICovXG4uc2lkZUluZm9iYXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYjNiY2ZmO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIC8qIHBhZGRpbmctdG9wOiA2MHB4OyAqL1xufVxuLnNpZGVJbmZvYmFyIC5rdC1wb3J0bGV0X19oZWFke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xufVxuXG4uc2lkZUluZm9iYXIgLmNsb3NlYnRuIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRjb2xvcjogIzMzMztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uaW5mby1pY29uLWNpcntcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzU4NjdkZDtcbn1cblxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVte1xuICBib3JkZXItYm90dG9tOiAwLjA3cmVtIGRhc2hlZCAjZGVkZWRlO1xuICBwYWRkaW5nOiA2cHg7XG59XG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW0uZGFya3tcbiAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgcmdiYSgwLDAsMCwwLjMpO1xufVxuXG4vKiAua3QtaW5ib3hfX2RhdGV0aW1le1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbn0gKi9cblxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtIC5rdC13aWRnZXQxX19pbmZvIC5rdC13aWRnZXQxX190aXRsZXtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5zaWRlSW5mb2JhciAudGl0bGUtc2lkZWJhcntcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uY291bnQtaGVpZ2h0e1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLyogLmNvdW50LWhlaWdodCAuanVzdGlmeS1jb250ZW50LWJldHdlZW57XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xufSAqL1xuLmNvdW50LWhlaWdodCAuanVzdGlmeS1jb250ZW50LWJldHdlZW4gLmt0LWNoZWNrYm94e1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuXG4vKiB3aWR0aCAqL1xuLmNvdW50LWhlaWdodDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogM3B4O1xufVxuXG4vKiBUcmFjayAqL1xuLmNvdW50LWhlaWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBIYW5kbGUgKi9cbi5jb3VudC1oZWlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG59XG5cbi5kcm9wZG93biAua3QtY2hlY2tib3ggPiBpbnB1dDpjaGVja2VkIH4gc3BhbntcbiAgYm9yZGVyLWNvbG9yOiAjNTg2N2RkO1xufVxuLmt0LWNoZWNrYm94ID4gc3BhbjphZnRlciB7XG4gIGJvcmRlcjogc29saWQgIzU4NjdkZDtcbn1cblxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24ge1xuICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG59XG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lOyAqL1xuICAgIHRvcDogMjBweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IC0yMnB4ICFpbXBvcnRhbnQ7XG59XG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJpZ2h0OiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNXB4O1xuICBsZWZ0OiAzMnB4O1xuICB6LWluZGV4OiAxMDtcbn1cbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yaWdodDogMTlweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDE5cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTdweDtcbiAgbGVmdDogMzBweDtcbiAgei1pbmRleDogODtcbn1cblxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudTEgLmZpbHRlci1ib3h7XG4gIHdpZHRoOiAzMy4zMzMzJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLyogXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCgxKSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoMSl7XG4gIHdpZHRoOiAzJTtcbn1cbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDIpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCgyKXtcbiAgd2lkdGg6IDMlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMyksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDMpe1xuICB3aWR0aDogMzMlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNCksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDQpe1xuICB3aWR0aDogMTAlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNSksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDUpe1xuICB3aWR0aDogMTAlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNiksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDYpe1xuICB3aWR0aDogMTUlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNyksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDcpe1xuICB3aWR0aDogMTAlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoOCksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDgpe1xuICB3aWR0aDogMTAlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoOSksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDkpe1xuICB3aWR0aDogMTAlO1xufSAqL1xuXG4ua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHQsIC5rdC1xdWljay1zZWFyY2ggLmt0LXF1aWNrLXNlYXJjaF9fZm9ybSAuaW5wdXQtZ3JvdXAtYXBwZW5kIC5pbnB1dC1ncm91cC10ZXh0e1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2ZmOyAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3Vwe1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkYmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zaG93X2VudHJpZXMgc3BhbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiBcbn1cbi5zaG93X2VudHJpZXMgc2VsZWN0e1xuICAvKiB3aWR0aDogMTAwcHg7ICovXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoODgsIDEwMywgMjIxLCAwLjMpO1xuICBjb2xvcjogIzU4NjdkZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb3VudC1idG57XG4gIC8qIGhlaWdodDogMjVweDsgKi9cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDsgKi9cbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiByZ2IoODgsIDg4LCA4OCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG4vKiBTZWFyY2ggUHJvamVjdHMgKi9cbi5rdC1pbmJveCAua3QtaW5ib3hfX3Rvb2xiYXIgLmt0LWluYm94X19zZWFyY2ggLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNztcbn1cbi5pbnB1dC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kLCAuZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQtc2hvcnR7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNlMmU5ZmY7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAyNXZ3O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkYmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZCAuZm9ybS1jb250cm9sLCAuZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQtc2hvcnQgLmZvcm0tY29udHJvbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcbn1cblxuLyogLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlICAqL1xuXG4vKiAudmFsaW5vb3J7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi52YWxpbm9vcjo6YmVmb3Jle1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59ICovXG5cbi5rdC1pbmJveCAua3QtaW5ib3hfX2xpc3QgLmt0LWluYm94X19pdGVtcyAua3QtaW5ib3hfX2l0ZW17XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kZWxldGUtYnRue1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICByaWdodDogMHB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGxpbmUtaGVpZ2h0OiA2M3B4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAhaW1wb3J0YW50O1xufVxuLmRlbGV0ZS1idG4gaXtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcbiAgY29sb3I6ICM1ODY3ZGQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDhweCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLyogLmRlbGV0ZS1idG4gaXtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjc7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZSAhaW1wb3J0YW50O1xufSovXG4uYnRuLXNlY29uZGFyeS50aGVtZS1idG57XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi5idG4tbGFiZWwtcHJpbWFyeXtcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcbn1cblxuLmRlbGV0ZS1idG4gaTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmt0LWluYm94X19pdGVtOmhvdmVyIC5kZWxldGUtYnRue1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogTmV3IGRlc2lnbiBDU1MgIGZyb20gSGVyZS4uLiAqL1xuLm5hbWUtYm94e1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5uYW1lcy1yZXNwb25zZXtcbiAgZGlzcGxheSA6aW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubmFtZXMtcmVzcG9uc2Ugc3BhbjpmaXJzdC1jaGlsZHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5uYW1lcy1yZXNwb25zZSBzcGFuOmxhc3QtY2hpbGR7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5oZWFkLWJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OCwgMTAzLCAyMjEsIDAuMSk7XG4gICAgcGFkZGluZzogM3B4IDEwcHggM3B4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uaGVhZC1idG4gaXtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogIzU4NjdkZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4uZGV2aWRlcntcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4ucHJpY2V2YWx1ZXMge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMWYxZjE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuXG4udG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDEpLCAudG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDIpICB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgzKSwgLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSAge1xuICBib3JkZXItYm90dG9tOiBub25lXG59XG5cbi5wcmljZXZhbHVlczpudGgtY2hpbGQoMiksIC5wcmljZXZhbHVlczpudGgtY2hpbGQoNCkge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4uZG1zLWxpbmtze1xuICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG59XG5cbi5kbXMtbGlua3MgbGkgYXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi8qID09PT09PT09PSBQcm9ncmVzcyBCYXIgPT09PT09PT09ICovXG5cbi5wcm9ncmVzc19iYXIgLnByby1iYXIge1xuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDk3JSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCBoc2xhKDAsIDAlLCAwJSwgMC4xKSBpbnNldDtcbiAgaGVpZ2h0OiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfYmFyX3RpdGxlIHtcbiAgY29sb3I6IGhzbCgyMTgsIDQlLCA1MCUpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjhweDtcbiAgei1pbmRleDogMTtcbn1cblxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfbnVtYmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg4JSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgbGluZWFyIDBzO1xufVxuXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMXB4O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzLWJhci1pbm5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTRweDtcbiAgdG9wOiAtNXB4O1xufVxuLmJnLXRvZGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MmJmMCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmR7XG4gICAgd2lkdGg6IDgwdnc7XG4gIH1cbn1cbi5tYWluLWR7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgcGFkZGluZzogMC44NzVyZW0gMDtcbn1cbi5tYWluLWQgYS5kcm9wZG93bi1pdGVte1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsc2Fucy1zZXJpZixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUkgU3ltYm9sXCIsXCJOb3RvIENvbG9yIEVtb2ppXCI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG4uc2hvdyAuc2VsZWN0LWJveDphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTgwZGVnKTtcbn1cblxuLnNlbGVjdC1ib3g6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMjBweDtcbiAgdG9wOiA1MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGNvbnRlbnQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTQuMDAxJyBoZWlnaHQ9JzguMTY1JyB2aWV3Qm94PScwIDAgMTQuMDAxIDguMTY1JyUzRSUzQ2RlZnMlM0UlM0NzdHlsZSUzRS5hJTdCZmlsbDolMjMyMTIxMjE7JTdEJTNDL3N0eWxlJTNFJTNDL2RlZnMlM0UlM0NwYXRoIGNsYXNzPSdhJyBkPSdNMTMuODYxLDYwLjIyNGwtLjctLjdhLjQ0MS40NDEsMCwwLDAtLjY0NSwwTDcsNjUuMDM2LDEuNDg3LDU5LjUyMmEuNDQxLjQ0MSwwLDAsMC0uNjQ1LDBsLS43LjdhLjQ0MS40NDEsMCwwLDAsMCwuNjQ1bDYuNTM3LDYuNTM4YS40NDEuNDQxLDAsMCwwLC42NDUsMGw2LjUzOC02LjUzOGEuNDQyLjQ0MiwwLDAsMCwwLS42NDVaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC01OS4zODIpJy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLm5vLWFmdGVyOjphZnRlcntcbiAgY29udGVudDogbm9uZSAhaW1wb3J0YW50O1xufVxuLmN1cnNvci1wb2ludGVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZHJvcGRvd24taXRlbTpmb2N1cyB7XG4gIGNvbG9yOiAjMTYxODFiO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG4uZHJvcGRvd24taXRlbS5hY3RpdmUsIC5kcm9wZG93bi1pdGVtOmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG59XG5cbi5rdC13aWRnZXRfX3RpdGxlIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCl7XG4ua3Qtd2lkZ2V0X190aXRsZSB7XG4gICAgd2lkdGg6IDI0MHB4O1xufVxufVxuc3Bhbi5jb3VudDIge1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogI2RlZWNmODtcbiAgY29sb3I6ICMyNzg2ZmI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"] });


/***/ }),

/***/ 56437:
/*!***************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/view-dashboard-projects/view-date-ago.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDateAgo": () => (/* binding */ ViewDateAgo)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ViewDateAgo {
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
ViewDateAgo.ɵfac = function ViewDateAgo_Factory(t) { return new (t || ViewDateAgo)(); };
ViewDateAgo.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateAgo1", type: ViewDateAgo, pure: true });


/***/ })

}]);
//# sourceMappingURL=default-src_app__LayoutDashboard_view-dashboard-projects_view-dashboard-projects_component_ts.js.map