"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([[668],{

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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_tr_120_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r39); const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); ctx_r37.openInfo(item_r33.Project_Code, item_r33.Project_Name); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r37.info_active_btn(item_r33)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ViewDashboardProjectsComponent_tr_120_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 121)(1, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_tr_120_a_3_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r42); const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r40.moreDetails(item_r33.Project_Code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
const _c0 = function (a0, a1, a2) { return { "text-danger font-weight-400": a0, "text-success font-weight-400": a1, "text-warning font-weight-400": a2 }; };
function ViewDashboardProjectsComponent_tr_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 112)(1, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ViewDashboardProjectsComponent_tr_120_a_2_Template, 2, 0, "a", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ViewDashboardProjectsComponent_tr_120_a_3_Template, 2, 0, "a", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "td", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](20, "dateAgo1");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "td", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", item_r33.isActive);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](14, 15, item_r33.Start_Date, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](17, 18, item_r33.End_Date, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](20, 21, item_r33.Creation_Date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](23, _c0, item_r33.Status == "Rejected", item_r33.Status == "Accepted", item_r33.Status == "Pending"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r33.Status, " ");
} }
function ViewDashboardProjectsComponent_tr_159_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "a", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_tr_159_div_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r71); const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r69._OpenMemosInfo(item_r43.Project_Code, item_r43.Project_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ViewDashboardProjectsComponent_tr_159_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Developemt");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r43.ReportType);
} }
function ViewDashboardProjectsComponent_tr_159_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Delay ", item_r43.Delaydays, " days");
} }
function ViewDashboardProjectsComponent_tr_159_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "ToDo InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "ToDo Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "New Todo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Completion Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Forward Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Project Complete Rejected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Enactive Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Version ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Deadline Extend Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Hold ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Project Hold Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} }
function ViewDashboardProjectsComponent_tr_159_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 123)(1, "td", 124)(2, "a", 125)(3, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_tr_159_Template_i_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75); const item_r43 = restoredCtx.$implicit; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); ctx_r74.openInfo(item_r43.Project_Code, item_r43.Project_Name); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r74.info_active_btn(item_r43)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "a", 121)(5, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_tr_159_Template_i_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75); const item_r43 = restoredCtx.$implicit; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r76.moreDetails(item_r43.Project_Code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ViewDashboardProjectsComponent_tr_159_div_7_Template, 3, 0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, ViewDashboardProjectsComponent_tr_159_ng_template_8_Template, 2, 0, "ng-template", null, 128, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "td")(11, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td")(14, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, ViewDashboardProjectsComponent_tr_159_div_17_Template, 3, 0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, ViewDashboardProjectsComponent_tr_159_ng_template_18_Template, 2, 1, "ng-template", null, 130, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "td")(21, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "td")(24, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "td")(28, "span", 129);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", item_r43.isActive);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](26, 29, item_r43.DeadLine, "dd-MM-yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](30, 32, item_r43.LastModified_Date), "");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r77.Subject, " ");
} }
function ViewDashboardProjectsComponent_div_215_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
} if (rf & 2) {
    const item_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r77.Subject, " ");
} }
function ViewDashboardProjectsComponent_div_215_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 140)(1, "div", 141)(2, "h5", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewDashboardProjectsComponent_div_215_Template_h5_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r85); const item_r77 = restoredCtx.$implicit; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r84.openUrl(item_r77.Url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ViewDashboardProjectsComponent_div_215_div_3_Template, 3, 1, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ViewDashboardProjectsComponent_div_215_ng_template_4_Template, 2, 1, "ng-template", null, 142, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
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
        // document.getElementById("mysideInfobar").classList.add("kt-quick-panel--on");
        $('#Project_info_slider_bar').addClass('open_sidebar_info');
        this.router.navigate(["../ViewProjects/" + this.Mode + "/projectinfo/", pcode, "3"]);
        //this.router.navigate(["../portfolioprojects/" + this._Pid + "/projectinfo/", pcode]);
        document.getElementById("rightbar-overlay").style.display = "block";
        document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    }
    closeInfo() {
        // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
        $('#Project_info_slider_bar').removeClass('open_sidebar_info');
        // $('.project-list_AC').removeClass('active');
        if (this.Mode == 'AssignedTask') {
            this._AssignedProjectsList.forEach(item => item.isActive = false);
        }
        else {
            this._ProjectDataList.forEach(item => item.isActive = false);
        }
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
    info_active_btn(item) {
        item.isActive = !item.isActive;
        if (this.Mode == 'AssignedTask') {
            if (item.isActive) {
                this._AssignedProjectsList.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.isActive = false;
                    }
                });
            }
        }
        else {
            if (item.isActive) {
                this._ProjectDataList.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.isActive = false;
                    }
                });
            }
        }
    }
}
ViewDashboardProjectsComponent.ɵfac = function ViewDashboardProjectsComponent_Factory(t) { return new (t || ViewDashboardProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_5__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_6__.LinkService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute)); };
ViewDashboardProjectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: ViewDashboardProjectsComponent, selectors: [["app-view-dashboard-projects"]], decls: 217, vars: 56, consts: [[1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height", "side_view"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi", "mt-3", "mb-2"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], ["class", "kt-portlet__head-title", 4, "ngIf"], ["class", "dropdown", 4, "ngIf"], [1, "kt-portlet__head-label", "mr-2"], [1, "kt-header__topbar-item", "kt-header__topbar-item--search", "mr-3"], [1, "kt-header__topbar-wrapper"], [1, "kt-quick-search", "kt-quick-search--inline"], [1, "kt-quick-search__form"], [1, "input-group"], ["type", "text", "placeholder", "Search Projects", "autofocus", "", 1, "form-control", "project-search", "kt-quick-search__input", "pl-3", 2, "width", "300px", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "input-group-prepend"], [1, "input-group-text", 3, "click", "keydown.enter"], [1, "flaticon2-search-1"], [1, "mr-3"], [4, "ngIf"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "disabled", "click"], [1, "fas", "fa-angle-left", "mr-0"], [1, "fas", "fa-angle-right", "mr-0"], [1, "stores-sec", "mr-1"], [1, "nav", "navbar-nav", "filters"], ["id", "filtermenu", 1, "dropdown", "mega-dropdown"], ["data-toggle", "dropdown", 3, "ngClass"], [1, "fas", "fa-ellipsis-v", "mr-0"], [1, "dropdown-menu", "mega-dropdown-menu"], [3, "click"], [1, "col-md-8"], [1, "d-inline-block"], [1, "col-md-12"], ["type", "text", "placeholder", "Search Filters", 1, "form-control", "kt-quick-search__input", "pl-3", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [1, "col-md-4"], [1, "count-height"], ["class", "d-flex justify-content-between", 4, "ngFor", "ngForOf"], ["data-toggle", "dropdown", 1, "btn", "btn-label-success", "btn-outline-success", "btn-upper", "btn-sm", "btn-bold", "mr-2"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", 3, "click"], [1, "mr-1"], ["data-toggle", "kt-tooltip", "title", "Click to sort Asc", 1, "btn", "btn-label-primary", "btn-sm", 3, "hidden", "click"], [1, "fa", "fa-sort-alpha-down-alt", "font-16", "mr-0"], ["data-toggle", "kt-tooltip", "title", "Click to sort Desc", 1, "btn", "btn-label-primary", "btn-sm", 3, "hidden", "click"], [1, "fas", "fa-sort-alpha-up", "font-16", "mr-0"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fas", "fa-sync-alt", "mr-0"], [1, "kt-portlet"], [1, "kt-portlet__body", "kt-portlet__body_scroll", "pt-0"], [1, "card", "projects-list", "no-border"], [1, "card-body"], [1, "dataTables_wrapper", "dt-bootstrap4", "no-footer", 3, "hidden"], [1, "col-sm-12"], ["role", "grid", 1, "table", "table-hover", "dataTable", "no-footer", "dtr-inline"], [2, "width", "100px"], ["class", "odd project-list_AC", 3, "active", 4, "ngFor", "ngForOf"], [1, "text-center", 2, "color", "lightgrey"], ["id", "project-4_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4", "no-footer", 3, "hidden"], ["id", "project-4", "role", "grid", 1, "table", "table-hover", "dataTable", "no-footer", "dtr-inline", 2, "width", "0px"], ["role", "row"], ["tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-sort", "ascending", "aria-label", ": activate to sort column descending", 2, "width", "100px"], ["data-order", "desc", "data-name", "Project_Name", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Title &amp; Description: activate to sort column ascending", 1, "curser-pointer", 2, "width", "0px", 3, "appSort", "click"], ["data-toggle", "kt-tooltip", "title", "Click to sort", 1, "mr-2", 3, "hidden"], [1, "fas", "fa-sort-alpha-up"], [1, "fa", "fa-sort-alpha-down-alt"], ["data-order", "desc", "data-name", "Exec_BlockName", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Type: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], [1, "fas", "fa-sort"], ["data-order", "desc", "data-name", "ReportType", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Category: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["data-order", "desc", "data-name", "TM_DisplayName", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "User Name: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["data-order", "desc", "data-name", "DeadLine", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "End Date: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["data-order", "desc", "data-name", "Status", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Status: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["role", "row", "class", "odd project-list_AC", 3, "active", 4, "ngFor", "ngForOf"], [1, "text-center", "py-4", 2, "color", "lightgrey"], [1, "col-sm-12", "col-md-5"], [1, "col-sm-12", "col-md-7"], ["id", "Project_info_slider_bar", 1, "project-info-side-bar", "animate-right"], ["id", "LinkSideBar", 1, "sideInfobar", "animate-right"], [1, "kt-portlet__head", "p-3", "bg-primary"], ["href", "javascript:void(0)", 1, "closebtn", "pull-right", "text-white", 3, "click"], [1, "title-sidebar", "mb-0", "text-white"], [1, "fa", "fa-link"], [1, "kt-nav"], [1, "kt-nav__head", "d-block"], [1, "text-primary"], [1, "M_fsize"], [1, "badge", "badge-pill", "badge-outline-info"], [1, "badge", "badge-pill", "badge-outline-success"], [1, "kt-nav__separator"], [1, "kt-nav__item", "px-4"], [1, "d-flex"], [1, "mutlidropdown-set", "mutlidropdown-full", "mr-1", 2, "flex", "3", 3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onDeSelect"], [1, "kt-nav__foot"], ["id", "MemosSideBar", 1, "sideInfobar", "animate-right"], [1, "curser-pointer"], ["width", "25px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png"], [1, "text-small", "text-white"], [1, "kt-portlet__body", "p-3"], ["id", "accordionExample7", 1, "accordion", "accordion-light", "accordion-svg-icon"], [1, "kt-widget1", "kt-widget1--fit"], ["class", "kt-widget1__item", 4, "ngFor", "ngForOf"], ["id", "rightbar-overlay", 3, "click"], [1, "kt-portlet__head-title"], [1, "dropdown"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "kt-portlet__head-title", "cursor-pointer", "dropdown-toggle", "select-box"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "main-d"], [3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click"], [1, "d-flex", "justify-content-between"], [1, "kt-checkbox"], ["type", "checkbox", 3, "ngModel", "change", "ngModelChange"], [1, "count-btn"], [1, "kt-checkbox", "mb-3"], ["type", "checkbox", 3, "ngModel", "checked", "change", "ngModelChange"], [1, "odd", "project-list_AC"], [1, "kt-widget__title", "mb-0"], ["data-toggle", "tooltip", "title", "Project Details!", "class", "btn px-0 mr-2", 3, "click", 4, "ngIf"], ["tabindex", "0", "class", "btn px-0 mr-2", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "More Info!", 4, "ngIf"], ["data-toggle", "tooltip", 1, "kt-widget__title", "mb-0", "text-ellipsis", "w-max-180px", 3, "title"], ["data-toggle", "tooltip", 1, "kt-widget__title", "mb-0", "text-ellipsis", "w-max-100px", 3, "title"], [1, "kt-widget__title", "mb-0", 3, "ngClass"], ["data-toggle", "tooltip", "title", "Project Details!", 1, "btn", "px-0", "mr-2", 3, "click"], [1, "fa", "fa-info-circle", "info-icon-cir"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "More Info!", 1, "btn", "px-0", "mr-2"], [1, "fa", "fa-chart-bar", "info-icon-cir", 3, "click"], ["role", "row", 1, "odd", "project-list_AC"], ["align", "center"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", 1, "btn", "px-0", "mr-2"], [1, "fa", "fa-info-circle", "info-icon-cir", 3, "click"], [4, "ngIf", "ngIfElse"], ["not_Linked", ""], [1, "kt-widget__other"], ["ReportType", ""], [1, "curser-pointer", 3, "click"], ["width", "19px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png", "title", "Linked"], ["width", "19px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png", "title", "Not Linked", 1, "black-white"], [1, "text-info", "font-weight-400"], [1, "text-danger", "font-weight-400"], [1, "text-warning", "font-weight-400"], [1, "text-primary", "font-weight-400"], [1, "text-success", "font-weight-400"], [1, "font-weight-400", 2, "color", "#c0b5dc"], [1, "kt-widget1__item"], [1, "kt-widget1__info", "kt-align-left"], ["Onlysubject", ""], [1, "fas", "fa-paperclip", 2, "color", "#A9A9A9"], [1, "fas", "fa-circle"]], template: function ViewDashboardProjectsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](120, ViewDashboardProjectsComponent_tr_120_Template, 23, 27, "tr", 54);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](159, ViewDashboardProjectsComponent_tr_159_Template, 50, 34, "tr", 70);
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__.MultiSelectComponent, _sort_directive__WEBPACK_IMPORTED_MODULE_8__.SortDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__.Ng2SearchPipe, _view_date_ago__WEBPACK_IMPORTED_MODULE_10__.ViewDateAgo], styles: [".list-icon-color[_ngcontent-%COMP%]{\r\n    color: #969696\r\n   }\r\n\r\n  .loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\r\n    background: #0dc5c1;\r\n    animation: load1 1s infinite ease-in-out;\r\n    width: 1em;\r\n    height: 4em;\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%] {\r\n    color: #0dc5c1;\r\n    text-indent: -9999em;\r\n    margin: 88px auto;\r\n    position: relative;\r\n    font-size: 11px;\r\n    transform: translateZ(0);\r\n    animation-delay: -0.16s;\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    top: 0;\r\n    content: '';\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%]:before {\r\n    left: -1.5em;\r\n    animation-delay: -0.32s;\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%]:after {\r\n    left: 1.5em;\r\n  }\r\n\r\n  @keyframes load1 {\r\n    0%,\r\n    80%,\r\n    100% {\r\n      box-shadow: 0 0;\r\n      height: 4em;\r\n    }\r\n    40% {\r\n      box-shadow: 0 -2em;\r\n      height: 5em;\r\n    }\r\n  }\r\n\r\n  .center[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 200px;\r\n  }\r\n\r\n  .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\r\n    border-radius: 2px;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]{\r\n  width: 400px;\r\n  height: auto;\r\n  max-height: 400px;\r\n  padding: 10px;\r\n  top: 38px !important;\r\n  left: auto !important;\r\n  right: 0px !important;\r\n  overflow-y: auto;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n  .ngx-pagination[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n}\r\n\r\n  #backBtn[_ngcontent-%COMP%]:hover{\r\n background-color:#5867dd ;\r\n color: white; \r\n}\r\n\r\n  #Mdl_closebtn[_ngcontent-%COMP%]:hover{\r\n  background-color: #dc3545;\r\n  color:white\r\n}\r\n\r\n  .text-warning-1[_ngcontent-%COMP%]{\r\n  background-color: #ffe0a7;\r\n  color:#FFA800;\r\n  width: auto;\r\n  padding: 4px 8px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  .text-danger-1[_ngcontent-%COMP%]{\r\n  color: #F64E60;\r\n  background-color: #FFE2E5;\r\n  width: auto;\r\n  padding: 4px 8px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%], .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-up[_ngcontent-%COMP%]{\r\n  border-top: 7px solid #adadad !important;\r\n    border-left: 7px solid transparent !important;\r\n    border-right: 7px solid transparent !important\r\n}\r\n\r\n  .multiselect-dropdown[_ngcontent-%COMP%]{\r\n  width: 80px !important;\r\n\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]{\r\n    border: 0;\r\n    background: none;\r\n    font-size: 16px;\r\n    outline: none !important;\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 30px;\r\n    width: 30px;\r\n    background-color: #f5f6fc;\r\n    border: 1px solid #b3bcff;\r\n    color: #5867dd;\r\n    transition: all 0.3s ease;\r\n    cursor: pointer;\r\n    margin: 0 8px 0 0;\r\n    border-radius: 0;\r\n    border-radius: 4px;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon[_ngcontent-%COMP%] {\r\n    height: 18px;\r\n    width: 18px;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]{\r\n  height: 25px;\r\n  width: 25px;\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{\r\n    fill: #5867dd;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\r\n    fill: #5867dd;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\r\n    fill: #fff;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{\r\n  fill: #fff;\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover, .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]{\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n  }\r\n\r\n  .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    color: #ccc;\r\n  }\r\n\r\n  .card-title[_ngcontent-%COMP%]   .favourite.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{\r\n    color: #ffc107;\r\n  }\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    border-color: #d6d6d6;\r\n  }\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.success {\r\n    border-left: 5px solid #1dc9b7;\r\n    \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.warning {\r\n    border-left: 5px solid #ffb822; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.info {\r\n    border-left: 5px solid #2786fb; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.danger {\r\n    border-left: 5px solid #F58A8B; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.UnderApprovals {\r\n  border-left: 5px solid #BD838C; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.ForwardUnderApproval {\r\n  border-left: 5px solid #E0B1D7; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.completeUnderApproval {\r\n  border-left: 5px solid #98c7bf; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.projectHold {\r\n  border-left: 5px solid #C0B5DC; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.HoldunderApp {\r\n  border-left: 5px solid #a85098; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.DeadlineExtended{\r\n  border-left: 5px solid #E0B1D7; \r\n}\r\n\r\n  .delayDays[_ngcontent-%COMP%]{\r\n  font-size: 11px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n  transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\r\n  fill: #5E5F63;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\r\n  padding: 0.2rem 20px;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%] {\r\n  width: 800px;\r\n  max-width: 100%;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  vertical-align: top;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n  .kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n  min-height: 60px;\r\n}\r\n\r\n  .kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n}\r\n\r\n  .dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc !important;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\r\n  background-color: transparent !important;\r\n  color: #74788D !important;\r\n  cursor: auto;\r\n}\r\n\r\n  .kt-nav__link-text[_ngcontent-%COMP%]:hover {\r\n  color: #74788D !important;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\r\n  background-color: rgba(154, 100, 142, 0.2);\r\n  color: #333 !important;\r\n  transition: all 0.3s;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\r\n  color: #333;\r\n}\r\n\r\n  .kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background: rgb(195, 195, 195);\r\n}\r\n\r\n  \r\n\r\n  .kt-quick-panel2[_ngcontent-%COMP%] {\r\n  width: 650px !important;\r\n}\r\n\r\n  .kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\r\n  right: -660px;\r\n  left: auto;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #F1F1F1;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\r\n  background-color: #FFFFFF !important;\r\n}\r\n\r\n  .chatcount[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  margin-left: -15px;\r\n  margin-top: -10px;\r\n}\r\n\r\n  .kt-badge.kt-badge--dark[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background: #8C8D92;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n  transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\r\n  fill: #5E5F63;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\r\n  padding: 0.2rem 20px;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-font-ReplyRequired[_ngcontent-%COMP%] {\r\n  color: #a6c !important;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%] {\r\n  width: 800px;\r\n  max-width: 100%;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  vertical-align: top;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n  .kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n  min-height: 60px;\r\n}\r\n\r\n  .kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n}\r\n\r\n  .dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc !important;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\r\n  background-color: transparent !important;\r\n  color: #74788D !important;\r\n  cursor: auto;\r\n}\r\n\r\n  .kt-nav__link-text[_ngcontent-%COMP%]:hover {\r\n  color: #74788D !important;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\r\n  background-color: rgba(154, 100, 142, 0.2);\r\n  color: #333 !important;\r\n  transition: all 0.3s;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\r\n  color: #333;\r\n}\r\n\r\n  .kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background: rgb(195, 195, 195);\r\n}\r\n\r\n  \r\n\r\n  .kt-quick-panel2[_ngcontent-%COMP%] {\r\n  width: 650px !important;\r\n}\r\n\r\n  .kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\r\n  right: -660px;\r\n  left: auto;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #F1F1F1;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background: none;\r\n  outline: none !important;\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 35px;\r\n  width: 35px;\r\n  background-color: #FFFFFF;\r\n  transition: all 0.3s ease;\r\n  cursor: pointer;\r\n  margin: 0;\r\n  border-radius: 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-badge.kt-badge--inline[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  width: auto;\r\n  padding: 0.15rem 0.75rem;\r\n  border-radius: 2px;\r\n  margin-left: 4px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%] {\r\n  padding: 17px;\r\n  width: 243px;\r\n}\r\n\r\n  \r\n\r\n  .Replied_border_left_true_warning[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #ffb822;\r\n}\r\n\r\n  .Replied_border_left_true_primary[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #95bed9;\r\n}\r\n\r\n  .Replied_border_left_true_success[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #95bed9;\r\n}\r\n\r\n  .Replied_border_left_true_Danger[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #F58A8B;\r\n}\r\n\r\n  .Replied_border_left_true_hold[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #c0b5dc\r\n}\r\n\r\n  .Replied_border_left_true_rejected[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #f5c293;\r\n}\r\n\r\n  .Replied_border_left_true_underApprovals[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #BD838C;\r\n}\r\n\r\n  .Replied_border_left_true_forwardUnderApproval[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #E0B1D7;\r\n}\r\n\r\n  .Replied_border_left_true_completeUnderApproval[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #98c7bf;\r\n}\r\n\r\n  .Replied_border_left_true_projectHold[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #C0B5DC;\r\n}\r\n\r\n  .Replied_border_left_true_NewProject[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #007bff;\r\n}\r\n\r\n  .Replied_border_left_true_DeadlineExtended[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #E0B1D7;\r\n}\r\n\r\n  .Replied_border_left_true_HoldunderApp[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #a85098;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%] {\r\n    margin-left: -17px;\r\n}\r\n\r\n  .icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  margin-right: 15px !important;\r\n  z-index: 2;\r\n}\r\n\r\n  .icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  width: 18px;\r\n    height: 18px;\r\n    text-align: center;\r\n    font-size: 10px;\r\n    font-weight: 700;\r\n  color: #fff;\r\n  background: #5867dd;\r\n  border: 1px solid #5867dd;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: -11px;\r\n  right: -11px;\r\n  z-index: 3;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]{\r\n  margin-top: 0px !important;\r\n}\r\n\r\n  .multiselect-dropdown[_ngcontent-unj-c40][_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-unj-c40][_ngcontent-%COMP%]{\r\n  width: 150px !important;\r\n}\r\n\r\n  \r\n\r\n  .sideInfobar[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 999;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: #ffffff;\r\n  border-left: 1px solid #b3bcff;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  \r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%]{\r\n  background-color: #f5f6fc;\r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tcolor: #333;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n\r\n  .info-icon-cir[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: #5867dd;\r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]{\r\n  border-bottom: 0.07rem dashed #dedede;\r\n  padding: 6px;\r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%]{\r\n  border-bottom: 0.07rem dashed rgba(0,0,0,0.3);\r\n}\r\n\r\n  \r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%]{\r\n  font-weight: 600;\r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]{\r\n    width: 270px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n  .count-height[_ngcontent-%COMP%]{\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]   .justify-content-between[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #f1f1f1;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #ccc;\r\n}\r\n\r\n  .dropdown[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]{\r\n  border-color: #5867dd;\r\n}\r\n\r\n  .kt-checkbox[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\r\n  border: solid #5867dd;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown[_ngcontent-%COMP%] {\r\n  position: static !important;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    width: 60%;\r\n    \r\n    top: 20px !important;\r\n    left: -22px !important;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  border-bottom: 15px solid #fff;\r\n  border-right: 17px solid transparent;\r\n  border-left: 17px solid transparent;\r\n  position: absolute;\r\n  top: -15px;\r\n  left: 32px;\r\n  z-index: 10;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  border-bottom: 17px solid #ccc;\r\n  border-right: 19px solid transparent;\r\n  border-left: 19px solid transparent;\r\n  position: absolute;\r\n  top: -17px;\r\n  left: 30px;\r\n  z-index: 8;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu1[_ngcontent-%COMP%]   .filter-box[_ngcontent-%COMP%]{\r\n  width: 33.3333%;\r\n  display: inline-block;\r\n}\r\n\r\n  \r\n\r\n  .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{\r\n  \r\n  cursor: pointer;\r\n}\r\n\r\n  .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{\r\n  border: 1px solid #d6dbff;\r\n  border-radius: 5px;\r\n}\r\n\r\n  .show_entries[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 3px;\r\n  background-color: #fff;\r\n \r\n}\r\n\r\n  .show_entries[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n  \r\n  border: 2px solid rgba(88, 103, 221, 0.3);\r\n  color: #5867dd;\r\n  font-weight: bold;\r\n}\r\n\r\n  .count-btn[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  padding: 0px 10px;\r\n  font-weight: 700;\r\n  color: rgb(88, 88, 88);\r\n  font-size: 14px;\r\n  line-height: 25px;\r\n}\r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__toolbar[_ngcontent-%COMP%]   .kt-inbox__search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  height: 44px;\r\n  border: none;\r\n  background-color: #f2f3f7;\r\n}\r\n\r\n  .input-group[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: stretch;\r\n  width: 100% !important;\r\n}\r\n\r\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]{\r\n  \r\n  background-color: #fff;\r\n  width: 25vw;\r\n  box-shadow: none;\r\n  border: 1px solid #d6dbff !important;\r\n  margin-top: 5px;\r\n}\r\n\r\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{\r\n  background-color: #f5f6fc;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%]   .kt-inbox__items[_ngcontent-%COMP%]   .kt-inbox__item[_ngcontent-%COMP%]{\r\n  position: relative;\r\n}\r\n\r\n  .delete-btn[_ngcontent-%COMP%]{\r\n  display: none;\r\n  position: absolute;\r\n   right: 0px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    background-color: #f2f3f7;\r\n    color: grey;\r\n    line-height: 63px;\r\n    padding: 0 20px;\r\n    transition: all 2s ease !important;\r\n}\r\n\r\n  .delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  background: none;\r\n  font-size: 16px;\r\n  outline: none !important;\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  height: 30px;\r\n  width: 30px;\r\n  background-color: #f5f6fc;\r\n  border: 1px solid #b3bcff;\r\n  color: #5867dd;\r\n  transition: all 0.3s ease;\r\n  cursor: pointer;\r\n  margin: 10px 8px 0 0;\r\n  border-radius: 0;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  text-align: center;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n  \r\n\r\n  .btn-secondary.theme-btn[_ngcontent-%COMP%]{\r\n  background-color: #5867dd;\r\n  color: #fff;\r\n}\r\n\r\n  .btn.btn-label-primary[_ngcontent-%COMP%]{\r\n  border: 1px solid #b3bcff;\r\n}\r\n\r\n  .delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n}\r\n\r\n  .kt-inbox__item[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n  \r\n\r\n  .name-box[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  font-size: 9px;\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: #5867dd;\r\n  color: #fff;\r\n  font-weight: 500;\r\n  letter-spacing: 2px;\r\n  border-radius: 50%;\r\n  line-height: 30px;\r\n  margin-right: 5px;\r\n}\r\n\r\n  .names-response[_ngcontent-%COMP%]{\r\n  display :inline-block;\r\n  text-align: left;\r\n}\r\n\r\n  .names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{\r\n  display: block;\r\n  font-size: 10px;\r\n  font-weight: 600;\r\n}\r\n\r\n  .names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{\r\n  font-weight: 600;\r\n}\r\n\r\n  .head-btn[_ngcontent-%COMP%]{\r\n  background-color: rgba(88, 103, 221, 0.1);\r\n    padding: 3px 10px 3px 5px;\r\n    border-radius: 2rem;\r\n    border: 1px solid #b3bcff;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n}\r\n\r\n  .head-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #5867dd;\r\n    color: #fff;\r\n    line-height: 25px;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    margin-right: 3px;\r\n}\r\n\r\n  .devider[_ngcontent-%COMP%]{\r\n  height: 1px;\r\n  width: 100%;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n  .pricevalues[_ngcontent-%COMP%] {\r\n  padding-top: 30px;\r\n  padding-bottom: 10px;\r\n  border-right: 1px solid #f1f1f1;\r\n  border-bottom: 1px solid #f1f1f1;\r\n}\r\n\r\n  .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(1), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(2)  {\r\n  border-top: 1px solid #f1f1f1;\r\n}\r\n\r\n  .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(3), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(4)  {\r\n  border-bottom: none\r\n}\r\n\r\n  .pricevalues[_ngcontent-%COMP%]:nth-child(2), .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\r\n  border-right: none;\r\n}\r\n\r\n  .dms-links[_ngcontent-%COMP%]{\r\n  list-style-type: disc;\r\n}\r\n\r\n  .dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  display: block;\r\n  text-decoration: underline;\r\n  font-weight: 600;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n  \r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .pro-bar[_ngcontent-%COMP%] {\r\n  background: hsl(0, 0%, 97%);\r\n  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;\r\n  height: 4px;\r\n  margin-bottom: 12px;\r\n  margin-top: 30px;\r\n  position: relative;\r\n  text-align: left;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress_bar_title[_ngcontent-%COMP%] {\r\n  color: hsl(218, 4%, 50%);\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  position: relative;\r\n  top: -28px;\r\n  z-index: 1;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress_number[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%] {\r\n  background-color: hsl(0, 0%, 88%);\r\n  display: block;\r\n  width: 0;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  transition: width 1s linear 0s;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  background-color: hsl(0, 0%, 100%);\r\n  border-radius: 50%;\r\n  width: 4px;\r\n  height: 4px;\r\n  position: absolute;\r\n  right: 1px;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  width: 14px;\r\n  height: 14px;\r\n  background-color: inherit;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  right: -4px;\r\n  top: -5px;\r\n}\r\n\r\n  .bg-today[_ngcontent-%COMP%] {\r\n  background-color: #342bf0 !important;\r\n}\r\n\r\n  @media only screen and (max-width: 768px) {\r\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]{\r\n    width: 80vw;\r\n  }\r\n}\r\n\r\n  .main-d[_ngcontent-%COMP%]{\r\n  margin-top: 7px;\r\n  padding: 0.875rem 0;\r\n}\r\n\r\n  .main-d[_ngcontent-%COMP%]   a.dropdown-item[_ngcontent-%COMP%]{\r\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  cursor: pointer !important;\r\n}\r\n\r\n  .show[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]:after {\r\n  transform: translateY(-50%) rotate(180deg);\r\n}\r\n\r\n  .select-box[_ngcontent-%COMP%]:after {\r\n  position: absolute;\r\n  right: -20px;\r\n  top: 50%;\r\n  border: none;\r\n  transform: translateY(-50%) rotate(0deg);\r\n  transition: all 0.2s ease-in-out;\r\n  content: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14.001' height='8.165' viewBox='0 0 14.001 8.165'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23212121;%7D%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M13.861,60.224l-.7-.7a.441.441,0,0,0-.645,0L7,65.036,1.487,59.522a.441.441,0,0,0-.645,0l-.7.7a.441.441,0,0,0,0,.645l6.537,6.538a.441.441,0,0,0,.645,0l6.538-6.538a.442.442,0,0,0,0-.645Z' transform='translate(0 -59.382)'/%3E%3C/svg%3E\");\r\n}\r\n\r\n  .no-after[_ngcontent-%COMP%]::after{\r\n  content: none !important;\r\n}\r\n\r\n  .cursor-pointer[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n  .dropdown-item[_ngcontent-%COMP%]:focus {\r\n  color: #16181b;\r\n  text-decoration: none;\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n  .dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #007bff;\r\n}\r\n\r\n  .kt-widget__title[_ngcontent-%COMP%] {\r\n  width: 250px;\r\n}\r\n\r\n  @media (max-width: 1440px){\r\n.kt-widget__title[_ngcontent-%COMP%] {\r\n    width: 240px;\r\n}\r\n}\r\n\r\n  span.count2[_ngcontent-%COMP%] {\r\n  margin-left: 2px;\r\n  width: 20px;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  background: #deecf8;\r\n  color: #2786fb;\r\n  border-radius: 50%;\r\n  font-size: 0.9rem;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: 600;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctZGFzaGJvYXJkLXByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FtQks7O0VBRUg7SUFDRTtHQUNEOztFQUNEOzs7SUFHRSxtQkFBbUI7SUFFbkIsd0NBQXdDO0lBQ3hDLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUdmLHdCQUF3QjtJQUV4Qix1QkFBdUI7RUFDekI7O0VBQ0E7O0lBRUUsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxZQUFZO0lBRVosdUJBQXVCO0VBQ3pCOztFQUNBO0lBQ0UsV0FBVztFQUNiOztFQWNBO0lBQ0U7OztNQUdFLGVBQWU7TUFDZixXQUFXO0lBQ2I7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixXQUFXO0lBQ2I7RUFDRjs7RUFDQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7RUFDZjs7RUFDQTtJQUNFLGtCQUFrQjtBQUN0Qjs7RUFDQTs7Ozs7O0tBTUs7O0VBRUw7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztFQUNBLFVBQVU7O0VBQ1Y7RUFDRSxVQUFVO0FBQ1o7O0VBRUEsVUFBVTs7RUFDVjtFQUNFLG1CQUFtQjtBQUNyQjs7RUFFQSxXQUFXOztFQUNYO0VBQ0UsZ0JBQWdCO0FBQ2xCOztFQUVBLG9CQUFvQjs7RUFDcEI7RUFDRSxnQkFBZ0I7QUFDbEI7O0VBQ0E7RUFDRSxlQUFlO0FBQ2pCOztFQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLFlBQVk7QUFDYjs7RUFDQTtFQUNFLHlCQUF5QjtFQUN6QjtBQUNGOztFQUVBO0VB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RUFDQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztFQUVBO0VBQ0UsWUFBWTtBQUNkOztFQUNBO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7O0VBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJ2aWV3LWRhc2hib2FyZC1wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogI2xvYWRpbmd7IFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgbGVmdDogNTAlOyBcclxuICB0b3A6IDUwJTsgXHJcbiAgei1pbmRleDogMTsgXHJcbiAgd2lkdGg6IDE1MHB4OyBcclxuICBoZWlnaHQ6IDE1MHB4OyBcclxuICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDsgXHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgXHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiOyBcclxuICB3aWR0aDogMTIwcHg7IFxyXG4gIGhlaWdodDogMTIwcHg7IFxyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7IFxyXG4gIH0gXHJcbiAgICBcclxuICBAa2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH0gXHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSBcclxuICB9ICovXHJcblxyXG4gIC5saXN0LWljb24tY29sb3J7XHJcbiAgICBjb2xvcjogIzk2OTY5NlxyXG4gICB9XHJcbiAgLmxvYWRlcixcclxuICAubG9hZGVyOmJlZm9yZSxcclxuICAubG9hZGVyOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwZGM1YzE7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDEgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb246IGxvYWQxIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgd2lkdGg6IDFlbTtcclxuICAgIGhlaWdodDogNGVtO1xyXG4gIH1cclxuICAubG9hZGVyIHtcclxuICAgIGNvbG9yOiAjMGRjNWMxO1xyXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgICBtYXJnaW46IDg4cHggYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICB9XHJcbiAgLmxvYWRlcjpiZWZvcmUsXHJcbiAgLmxvYWRlcjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjb250ZW50OiAnJztcclxuICB9XHJcbiAgLmxvYWRlcjpiZWZvcmUge1xyXG4gICAgbGVmdDogLTEuNWVtO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG4gIH1cclxuICAubG9hZGVyOmFmdGVyIHtcclxuICAgIGxlZnQ6IDEuNWVtO1xyXG4gIH1cclxuXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQxIHtcclxuICAgIDAlLFxyXG4gICAgODAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMDtcclxuICAgICAgaGVpZ2h0OiA0ZW07XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICBib3gtc2hhZG93OiAwIC0yZW07XHJcbiAgICAgIGhlaWdodDogNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGxvYWQxIHtcclxuICAgIDAlLFxyXG4gICAgODAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMDtcclxuICAgICAgaGVpZ2h0OiA0ZW07XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICBib3gtc2hhZG93OiAwIC0yZW07XHJcbiAgICAgIGhlaWdodDogNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICAubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbi8qIFxyXG4gIHRhYmxlLCB0aCwgdGQge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXItc3BhY2luZzogMTVweDtcclxuICB9ICovXHJcblxyXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51e1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0b3A6IDM4cHggIWltcG9ydGFudDtcclxuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLyogd2lkdGggKi9cclxuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbi5zaGFyZWRkZXRhaWxzLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzU1NTtcclxufVxyXG4ubmd4LXBhZ2luYXRpb24ge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4jYmFja0J0bjpob3ZlcntcclxuIGJhY2tncm91bmQtY29sb3I6IzU4NjdkZCA7XHJcbiBjb2xvcjogd2hpdGU7IFxyXG59XHJcbiNNZGxfY2xvc2VidG46aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICBjb2xvcjp3aGl0ZVxyXG59XHJcblxyXG4udGV4dC13YXJuaW5nLTF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTBhNztcclxuICBjb2xvcjojRkZBODAwO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udGV4dC1kYW5nZXItMXtcclxuICBjb2xvcjogI0Y2NEU2MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFMkU1O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuZHJvcGRvd24tZG93bixcclxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLmRyb3Bkb3duLXVwe1xyXG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjYWRhZGFkICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5tdWx0aXNlbGVjdC1kcm9wZG93bntcclxuICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4ua3QtdG9kb19fZGV0YWlsc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29ue1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcclxuICAgIGNvbG9yOiAjNTg2N2RkO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMCA4cHggMCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcblxyXG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiBzdmcua3Qtc3ZnLWljb24ge1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgfVxyXG5cclxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24gc3ZnLmt0LXN2Zy1pY29uLmFkZC1pY29ue1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxufVxyXG5cclxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiAua3Qtc3ZnLWljb24gZyBbZmlsbF17XHJcbiAgICBmaWxsOiAjNTg2N2RkO1xyXG4gIH1cclxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24gcGF0aHtcclxuICAgIGZpbGw6ICM1ODY3ZGQ7XHJcbiAgfVxyXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uOmhvdmVyIHN2Zy5rdC1zdmctaWNvbi5hZGQtaWNvbiBwYXRoLFxyXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uLmFjdGl2ZSBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24gcGF0aHtcclxuICAgIGZpbGw6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbjpob3ZlciAua3Qtc3ZnLWljb24gZyBbZmlsbF0sXHJcbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlIC5rdC1zdmctaWNvbiBnIFtmaWxsXXtcclxuICBmaWxsOiAjZmZmO1xyXG59XHJcblxyXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uOmhvdmVyLFxyXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLmNhcmQtdGl0bGUgLmZhdm91cml0ZSBpe1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgfVxyXG4gIC5jYXJkLXRpdGxlIC5mYXZvdXJpdGUuYWN0aXZlIGksXHJcbiAgLmNhcmQtdGl0bGUgLmZhdm91cml0ZTpob3ZlciBpe1xyXG4gICAgY29sb3I6ICNmZmMxMDc7XHJcbiAgfVxyXG5cclxuICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGR7XHJcbiAgICBib3JkZXItY29sb3I6ICNkNmQ2ZDY7XHJcbiAgfVxyXG5cclxuICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuc3VjY2VzcyB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMxZGM5Yjc7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiA0cHg7ICovXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLndhcm5pbmcge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZiODIyOyBcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuaW5mbyB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyNzg2ZmI7IFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5kYW5nZXIge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRjU4QThCOyBcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuVW5kZXJBcHByb3ZhbHMge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0JEODM4QzsgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLkZvcndhcmRVbmRlckFwcHJvdmFsIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7IFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5jb21wbGV0ZVVuZGVyQXBwcm92YWwge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZjsgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLnByb2plY3RIb2xkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNDMEI1REM7IFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5Ib2xkdW5kZXJBcHAge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E4NTA5ODsgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLkRlYWRsaW5lRXh0ZW5kZWR7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3OyBcclxufVxyXG4uZGVsYXlEYXlze1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsgZyBbZmlsbF0ge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGN1YmljLWJlemllcigwLjkzLCAwLjM1LCAxLCAxKTtcclxuICBmaWxsOiAjNUU1RjYzO1xyXG59XHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2FzaWRlIC5rdC1pbmJveF9fbmF2IC5rdC1uYXYgLmt0LW5hdl9faXRlbSAua3QtbmF2X19saW5rIHtcclxuICBwYWRkaW5nOiAwLjJyZW0gMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLm1haWwtZHJvcGRvd24ge1xyXG4gIHdpZHRoOiA4MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1haWwtZHJvcGRvd24gdGFibGUgdGQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4ua3QtcXVpY2stcGFuZWwgLmt0LXBvcnRsZXQua3QtcG9ydGxldC0taGVhZC1sZyAua3QtcG9ydGxldF9faGVhZCB7XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxufVxyXG4ua3QtaW5ib3hfX2ljb24gLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVudS1zbSB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5kcm9wZG93bi1yZXBseSB1bCBsaSBhIC5rdC1uYXZfX2xpbmstaWNvbiB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9fbGFiZWwge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG59XHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2Zvcm0gLmt0LWluYm94X19ib2R5IC5rdC1pbmJveF9fdG8gLmt0LWluYm94X19maWVsZCAua3QtaW5ib3hfX2lucHV0IGlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5rdC1uYXZfX2xpbmstbm9ob3Zlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzc0Nzg4RCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogYXV0bztcclxufVxyXG4ua3QtbmF2X19saW5rLXRleHQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XHJcbn1cclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmssXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTQsIDEwMCwgMTQyLCAwLjIpO1xyXG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93LFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuLmt0LWJhZGdlLmt0LWJhZGdlLS11bmlmaWVkLWJyYW5kIHtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTk1LCAxOTUsIDE5NSk7XHJcbn1cclxuLyogLmluYm94LXRleHQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn0gKi9cclxuLmt0LXF1aWNrLXBhbmVsMiB7XHJcbiAgd2lkdGg6IDY1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmt0LXF1aWNrLXBhbmVsLS1yaWdodCAua3QtcXVpY2stcGFuZWwge1xyXG4gIHJpZ2h0OiAtNjYwcHg7XHJcbiAgbGVmdDogYXV0bztcclxufVxyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xyXG59XHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG59XHJcbi8qIC5zb21lY2xhc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59ICovXHJcbi8qIDpob3N0KC5zb21lQ2xhc3MpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn0gKi9cclxuLmt0LWluYm94IC5rdC1pbmJveF9faWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2hhdGNvdW50IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLWRhcmsge1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQ6ICM4QzhEOTI7XHJcbn1cclxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsgZyBbZmlsbF0ge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGN1YmljLWJlemllcigwLjkzLCAwLjM1LCAxLCAxKTtcclxuICBmaWxsOiAjNUU1RjYzO1xyXG59XHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2FzaWRlIC5rdC1pbmJveF9fbmF2IC5rdC1uYXYgLmt0LW5hdl9faXRlbSAua3QtbmF2X19saW5rIHtcclxuICBwYWRkaW5nOiAwLjJyZW0gMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmt0LWZvbnQtUmVwbHlSZXF1aXJlZCB7XHJcbiAgY29sb3I6ICNhNmMgIWltcG9ydGFudDtcclxufVxyXG4ubWFpbC1kcm9wZG93biB7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4ubWFpbC1kcm9wZG93biB0YWJsZSB0ZCB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5rdC1xdWljay1wYW5lbCAua3QtcG9ydGxldC5rdC1wb3J0bGV0LS1oZWFkLWxnIC5rdC1wb3J0bGV0X19oZWFkIHtcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5rdC1pbmJveF9faWNvbiAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1tZW51LXNtIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuLmRyb3Bkb3duLXJlcGx5IHVsIGxpIGEgLmt0LW5hdl9fbGluay1pY29uIHtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19mb3JtIC5rdC1pbmJveF9fYm9keSAua3QtaW5ib3hfX3RvIC5rdC1pbmJveF9fZmllbGQgLmt0LWluYm94X19sYWJlbCB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9faW5wdXQgaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmt0LW5hdl9fbGluay1ub2hvdmVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcbi5rdC1uYXZfX2xpbmstdGV4dDpob3ZlciB7XHJcbiAgY29sb3I6ICM3NDc4OEQgIWltcG9ydGFudDtcclxufVxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTAwLCAxNDIsIDAuMik7XHJcbiAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93IHtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLXVuaWZpZWQtYnJhbmQge1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQ6IHJnYigxOTUsIDE5NSwgMTk1KTtcclxufVxyXG4vKiAuaW5ib3gtdGV4dCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufSAqL1xyXG4ua3QtcXVpY2stcGFuZWwyIHtcclxuICB3aWR0aDogNjUwcHggIWltcG9ydGFudDtcclxufVxyXG4ua3QtcXVpY2stcGFuZWwtLXJpZ2h0IC5rdC1xdWljay1wYW5lbCB7XHJcbiAgcmlnaHQ6IC02NjBweDtcclxuICBsZWZ0OiBhdXRvO1xyXG59XHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XHJcbn1cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1NTU7XHJcbn1cclxuLyogLnNvbWVjbGFzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0gKi9cclxuLyogOmhvc3QoLnNvbWVDbGFzcykge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSAqL1xyXG4ua3QtaW5ib3ggLmt0LWluYm94X19pY29uIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMzVweDtcclxuICB3aWR0aDogMzVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLWlubGluZSB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAuMTVyZW0gMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19hc2lkZSB7XHJcbiAgcGFkZGluZzogMTdweDtcclxuICB3aWR0aDogMjQzcHg7XHJcbn1cclxuLyogU3RhdHVzIENvbG9ycyAqL1xyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3dhcm5pbmd7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZiODIyO1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcHJpbWFyeXtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5NWJlZDk7XHJcbn1cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9zdWNjZXNze1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk1YmVkOTtcclxufVxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX0RhbmdlcntcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNGNThBOEI7XHJcbn1cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9ob2xke1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2MwYjVkY1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcmVqZWN0ZWR7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjVjMjkzO1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfdW5kZXJBcHByb3ZhbHN7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQkQ4MzhDO1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfZm9yd2FyZFVuZGVyQXBwcm92YWx7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3O1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfY29tcGxldGVVbmRlckFwcHJvdmFse1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZjtcclxufVxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3Byb2plY3RIb2xke1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0MwQjVEQztcclxufVxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX05ld1Byb2plY3R7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDA3YmZmO1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfRGVhZGxpbmVFeHRlbmRlZHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7XHJcbn1cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9Ib2xkdW5kZXJBcHB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTg1MDk4O1xyXG59XHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2xpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xyXG59XHJcbi5pY29ucy1maWx0ZXIgLmt0LXRvZG9fX2ljb257XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmljb25zLWZpbHRlciAua3QtdG9kb19faWNvbiBzcGFue1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNTg2N2RkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1ODY3ZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMXB4O1xyXG4gIHJpZ2h0OiAtMTFweDtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcbi8qIC5pY29ucy1maWx0ZXIgLmt0LXRvZG9fX2ljb246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczYTFmNyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnRcclxufSAqL1xyXG4vKiAuaWNvbnMtZmlsdGVyIC5rdC10b2RvX19pY29uOmhvdmVyIHNwYW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMTM0LCAyNTEsIDEpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudFxyXG59ICovXHJcblxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGV7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdWx0aXNlbGVjdC1kcm9wZG93bltfbmdjb250ZW50LXVuai1jNDBdIC5kcm9wZG93bi1idG5bX25nY29udGVudC11bmotYzQwXXtcclxuICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogPT09IFNpZGViYXIgPT09ICovXHJcbi5zaWRlSW5mb2JhciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYjNiY2ZmO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIC8qIHBhZGRpbmctdG9wOiA2MHB4OyAqL1xyXG59XHJcbi5zaWRlSW5mb2JhciAua3QtcG9ydGxldF9faGVhZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmNsb3NlYnRuIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICMzMzM7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWljb24tY2lye1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzU4NjdkZDtcclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVte1xyXG4gIGJvcmRlci1ib3R0b206IDAuMDdyZW0gZGFzaGVkICNkZWRlZGU7XHJcbiAgcGFkZGluZzogNnB4O1xyXG59XHJcbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbS5kYXJre1xyXG4gIGJvcmRlci1ib3R0b206IDAuMDdyZW0gZGFzaGVkIHJnYmEoMCwwLDAsMC4zKTtcclxufVxyXG5cclxuLyogLmt0LWluYm94X19kYXRldGltZXtcclxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufSAqL1xyXG5cclxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtIC5rdC13aWRnZXQxX19pbmZvIC5rdC13aWRnZXQxX190aXRsZXtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5zaWRlSW5mb2JhciAudGl0bGUtc2lkZWJhcntcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbi5jb3VudC1oZWlnaHR7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLyogLmNvdW50LWhlaWdodCAuanVzdGlmeS1jb250ZW50LWJldHdlZW57XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn0gKi9cclxuLmNvdW50LWhlaWdodCAuanVzdGlmeS1jb250ZW50LWJldHdlZW4gLmt0LWNoZWNrYm94e1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcblxyXG4vKiB3aWR0aCAqL1xyXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDNweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuLmNvdW50LWhlaWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbi5jb3VudC1oZWlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcblxyXG4uZHJvcGRvd24gLmt0LWNoZWNrYm94ID4gaW5wdXQ6Y2hlY2tlZCB+IHNwYW57XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTg2N2RkO1xyXG59XHJcbi5rdC1jaGVja2JveCA+IHNwYW46YWZ0ZXIge1xyXG4gIGJvcmRlcjogc29saWQgIzU4NjdkZDtcclxufVxyXG5cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcclxufVxyXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTsgKi9cclxuICAgIHRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogLTIycHggIWltcG9ydGFudDtcclxufVxyXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1sZWZ0OiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xNXB4O1xyXG4gIGxlZnQ6IDMycHg7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1sZWZ0OiAxOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xN3B4O1xyXG4gIGxlZnQ6IDMwcHg7XHJcbiAgei1pbmRleDogODtcclxufVxyXG5cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudTEgLmZpbHRlci1ib3h7XHJcbiAgd2lkdGg6IDMzLjMzMzMlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4vKiBcclxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMSksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDEpe1xyXG4gIHdpZHRoOiAzJTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCgyKSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoMil7XHJcbiAgd2lkdGg6IDMlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDMpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCgzKXtcclxuICB3aWR0aDogMzMlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDQpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg0KXtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDUpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg1KXtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDYpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg2KXtcclxuICB3aWR0aDogMTUlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDcpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg3KXtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDgpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg4KXtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDkpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg5KXtcclxuICB3aWR0aDogMTAlO1xyXG59ICovXHJcblxyXG4ua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHQsIC5rdC1xdWljay1zZWFyY2ggLmt0LXF1aWNrLXNlYXJjaF9fZm9ybSAuaW5wdXQtZ3JvdXAtYXBwZW5kIC5pbnB1dC1ncm91cC10ZXh0e1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZmY7ICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5rdC1xdWljay1zZWFyY2ggLmt0LXF1aWNrLXNlYXJjaF9fZm9ybSAuaW5wdXQtZ3JvdXB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZGJmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5zaG93X2VudHJpZXMgc3BhbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuIFxyXG59XHJcbi5zaG93X2VudHJpZXMgc2VsZWN0e1xyXG4gIC8qIHdpZHRoOiAxMDBweDsgKi9cclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDg4LCAxMDMsIDIyMSwgMC4zKTtcclxuICBjb2xvcjogIzU4NjdkZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvdW50LWJ0bntcclxuICAvKiBoZWlnaHQ6IDI1cHg7ICovXHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDsgKi9cclxuICBwYWRkaW5nOiAwcHggMTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoODgsIDg4LCA4OCk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcbi8qIFNlYXJjaCBQcm9qZWN0cyAqL1xyXG4ua3QtaW5ib3ggLmt0LWluYm94X190b29sYmFyIC5rdC1pbmJveF9fc2VhcmNoIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjc7XHJcbn1cclxuLmlucHV0LWdyb3VwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kLCAuZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQtc2hvcnR7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2UyZTlmZjsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAyNXZ3O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZGJmZiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQgLmZvcm0tY29udHJvbCwgLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kLXNob3J0IC5mb3JtLWNvbnRyb2x7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcclxufVxyXG5cclxuLyogLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlICAqL1xyXG5cclxuLyogLnZhbGlub29ye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udmFsaW5vb3I6OmJlZm9yZXtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn0gKi9cclxuXHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2xpc3QgLmt0LWluYm94X19pdGVtcyAua3QtaW5ib3hfX2l0ZW17XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5kZWxldGUtYnRue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICByaWdodDogMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBsaW5lLWhlaWdodDogNjNweDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRlbGV0ZS1idG4gaXtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcclxuICBjb2xvcjogIzU4NjdkZDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDEwcHggOHB4IDAgMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuLyogLmRlbGV0ZS1idG4gaXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNztcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UgIWltcG9ydGFudDtcclxufSovXHJcbi5idG4tc2Vjb25kYXJ5LnRoZW1lLWJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5idG4uYnRuLWxhYmVsLXByaW1hcnl7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcclxufVxyXG5cclxuLmRlbGV0ZS1idG4gaTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4ua3QtaW5ib3hfX2l0ZW06aG92ZXIgLmRlbGV0ZS1idG57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIE5ldyBkZXNpZ24gQ1NTICBmcm9tIEhlcmUuLi4gKi9cclxuLm5hbWUtYm94e1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDlweDtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ubmFtZXMtcmVzcG9uc2V7XHJcbiAgZGlzcGxheSA6aW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5uYW1lcy1yZXNwb25zZSBzcGFuOmZpcnN0LWNoaWxke1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5uYW1lcy1yZXNwb25zZSBzcGFuOmxhc3QtY2hpbGR7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmhlYWQtYnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDEwMywgMjIxLCAwLjEpO1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHggM3B4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiY2ZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uaGVhZC1idG4gaXtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzU4NjdkZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG5cclxuLmRldmlkZXJ7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLnByaWNldmFsdWVzIHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcblxyXG4udG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDEpLCAudG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDIpICB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn1cclxuLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgzKSwgLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSAge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmVcclxufVxyXG5cclxuLnByaWNldmFsdWVzOm50aC1jaGlsZCgyKSwgLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcbi5kbXMtbGlua3N7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xyXG59XHJcblxyXG4uZG1zLWxpbmtzIGxpIGF7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi8qID09PT09PT09PSBQcm9ncmVzcyBCYXIgPT09PT09PT09ICovXHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm8tYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDk3JSk7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IGhzbGEoMCwgMCUsIDAlLCAwLjEpIGluc2V0O1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfYmFyX3RpdGxlIHtcclxuICBjb2xvcjogaHNsKDIxOCwgNCUsIDUwJSk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTI4cHg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfbnVtYmVyIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzLWJhci1pbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA4OCUpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgbGluZWFyIDBzO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXI6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxcHg7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzLWJhci1pbm5lcjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTRweDtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtNHB4O1xyXG4gIHRvcDogLTVweDtcclxufVxyXG4uYmctdG9kYXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDJiZjAgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5ke1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgfVxyXG59XHJcbi5tYWluLWR7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG4gIHBhZGRpbmc6IDAuODc1cmVtIDA7XHJcbn1cclxuLm1haW4tZCBhLmRyb3Bkb3duLWl0ZW17XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiLFwiTm90byBDb2xvciBFbW9qaVwiO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbi5zaG93IC5zZWxlY3QtYm94OmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5zZWxlY3QtYm94OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IC0yMHB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDBkZWcpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGNvbnRlbnQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTQuMDAxJyBoZWlnaHQ9JzguMTY1JyB2aWV3Qm94PScwIDAgMTQuMDAxIDguMTY1JyUzRSUzQ2RlZnMlM0UlM0NzdHlsZSUzRS5hJTdCZmlsbDolMjMyMTIxMjE7JTdEJTNDL3N0eWxlJTNFJTNDL2RlZnMlM0UlM0NwYXRoIGNsYXNzPSdhJyBkPSdNMTMuODYxLDYwLjIyNGwtLjctLjdhLjQ0MS40NDEsMCwwLDAtLjY0NSwwTDcsNjUuMDM2LDEuNDg3LDU5LjUyMmEuNDQxLjQ0MSwwLDAsMC0uNjQ1LDBsLS43LjdhLjQ0MS40NDEsMCwwLDAsMCwuNjQ1bDYuNTM3LDYuNTM4YS40NDEuNDQxLDAsMCwwLC42NDUsMGw2LjUzOC02LjUzOGEuNDQyLjQ0MiwwLDAsMCwwLS42NDVaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC01OS4zODIpJy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG59XHJcbi5uby1hZnRlcjo6YWZ0ZXJ7XHJcbiAgY29udGVudDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5jdXJzb3ItcG9pbnRlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRyb3Bkb3duLWl0ZW06Zm9jdXMge1xyXG4gIGNvbG9yOiAjMTYxODFiO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcbi5kcm9wZG93bi1pdGVtLmFjdGl2ZSwgLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuLmt0LXdpZGdldF9fdGl0bGUge1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KXtcclxuLmt0LXdpZGdldF9fdGl0bGUge1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG59XHJcbn1cclxuc3Bhbi5jb3VudDIge1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNkZWVjZjg7XHJcbiAgY29sb3I6ICMyNzg2ZmI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4iXX0= */"] });


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
//# sourceMappingURL=668.js.map