"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["default-src_app__LayoutDashboard_projects-add_projects-add_component_ts"],{

/***/ 30013:
/*!*********************************************!*\
  !*** ./src/app/Directive/sort.directive.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortDirective": () => (/* binding */ SortDirective)
/* harmony export */ });
/* harmony import */ var _Directive_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive/sort */ 84956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class SortDirective {
    constructor(renderer, targetElem) {
        this.renderer = renderer;
        this.targetElem = targetElem;
    }
    sortData() {
        // Create Object of Sort Class
        const sort = new _Directive_sort__WEBPACK_IMPORTED_MODULE_0__.Sort();
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

/***/ 12669:
/*!*************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/projects-add/projects-add.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsAddComponent": () => (/* binding */ ProjectsAddComponent)
/* harmony export */ });
/* harmony import */ var src_app_Shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Shared/components/confirm-dialog/confirm-dialog.component */ 49785);
/* harmony import */ var src_app_Models_dropdown_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/dropdown-dto */ 79536);
/* harmony import */ var src_app_Models_portfolio_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Models/portfolio-dto */ 60198);
/* harmony import */ var src_app_Models_status_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Models/status-dto */ 14360);
/* harmony import */ var src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Models/user-details-dto */ 12359);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ 77585);
/* harmony import */ var src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_Services/link.service */ 33529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var src_app_Directive_sort_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Directive/sort.directive */ 30013);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-search-filter */ 9991);
//import { LoadingBarService } from '@ngx-loading-bar/core';



















function ProjectsAddComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", ctx_r0.CurrentPageNo, " - ", ctx_r0._CurrentpageRecords, " ");
} }
function ProjectsAddComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", ctx_r1._CurrentpageRecords * (ctx_r1.CurrentPageNo - 1) + 1, " - ", ctx_r1._CurrentpageRecords * ctx_r1.CurrentPageNo, " ");
} }
function ProjectsAddComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r2._totalProjectsCount.toLocaleString(), "");
} }
function ProjectsAddComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r3._totalProjectsCount, "");
} }
function ProjectsAddComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 69)(1, "label", 70)(2, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function ProjectsAddComponent_div_57_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12); const item_r9 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r11.isTypeChecked(item_r9)); })("ngModelChange", function ProjectsAddComponent_div_57_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12); const item_r9 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](item_r9.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", item_r9.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r9.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r9.Count);
} }
function ProjectsAddComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 69)(1, "label", 73)(2, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function ProjectsAddComponent_div_64_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r16); const item_r14 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r15.isStatusChecked(item_r14)); })("ngModelChange", function ProjectsAddComponent_div_64_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r16); const item_r14 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](item_r14.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", item_r14.checked)("checked", item_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r14.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r14.Count);
} }
function ProjectsAddComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 69)(1, "label", 73)(2, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function ProjectsAddComponent_div_71_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20); const item_r18 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r19.isEmpChecked(item_r18)); })("ngModelChange", function ProjectsAddComponent_div_71_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20); const item_r18 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](item_r18.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", item_r18.checked)("checked", item_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r18.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r18.Count);
} }
function ProjectsAddComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("About (", ctx_r7._CurrentpageRecords, ") results found.");
} }
function ProjectsAddComponent_tr_119_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r22.Actioncount);
} }
function ProjectsAddComponent_tr_119_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Developemt");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r22.ReportType);
} }
function ProjectsAddComponent_tr_119_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r22.SubmissionType);
} }
function ProjectsAddComponent_tr_119_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, item_r22.DeadLine, "dd-MM-yyyy"), "");
} }
function ProjectsAddComponent_tr_119_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Delay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "ToDo InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "ToDo Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "New Todo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Completion Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Cancellation Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Cancelled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Forward Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Project Complete Rejected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Enactive Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Version ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Deadline Extend Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Project Holded ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Project Hold Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function ProjectsAddComponent_tr_119_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 75)(1, "td", 76)(2, "mat-list-item")(3, "mat-checkbox", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ProjectsAddComponent_tr_119_Template_mat_checkbox_ngModelChange_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r56); const item_r22 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](item_r22.checked = $event); })("change", function ProjectsAddComponent_tr_119_Template_mat_checkbox_change_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r56); const item_r22 = restoredCtx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); ctx_r57.dataTableCheckbox(); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r57.checkboxclick(item_r22.checked, item_r22.Project_Code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td", 78)(5, "a", 79)(6, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProjectsAddComponent_tr_119_Template_i_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r56); const item_r22 = restoredCtx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r58.openInfo(item_r22.Project_Code, item_r22.Project_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "a", 81)(8, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProjectsAddComponent_tr_119_Template_i_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r56); const item_r22 = restoredCtx.$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r59.moreDetails(item_r22.Project_Code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "td")(10, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, ProjectsAddComponent_tr_119_span_12_Template, 2, 1, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td")(14, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, ProjectsAddComponent_tr_119_div_17_Template, 3, 0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, ProjectsAddComponent_tr_119_ng_template_18_Template, 2, 1, "ng-template", null, 87, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "td")(21, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, ProjectsAddComponent_tr_119_div_24_Template, 3, 1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, ProjectsAddComponent_tr_119_ng_template_25_Template, 3, 4, "ng-template", null, 88, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, ProjectsAddComponent_tr_119_div_28_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, ProjectsAddComponent_tr_119_div_29_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, ProjectsAddComponent_tr_119_div_30_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, ProjectsAddComponent_tr_119_div_31_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](32, ProjectsAddComponent_tr_119_div_32_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, ProjectsAddComponent_tr_119_div_33_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](34, ProjectsAddComponent_tr_119_div_34_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, ProjectsAddComponent_tr_119_div_35_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, ProjectsAddComponent_tr_119_div_36_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, ProjectsAddComponent_tr_119_div_37_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](38, ProjectsAddComponent_tr_119_div_38_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, ProjectsAddComponent_tr_119_div_39_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](40, ProjectsAddComponent_tr_119_div_40_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](41, ProjectsAddComponent_tr_119_div_41_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](42, ProjectsAddComponent_tr_119_div_42_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](43, ProjectsAddComponent_tr_119_div_43_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, ProjectsAddComponent_tr_119_div_44_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](45, ProjectsAddComponent_tr_119_div_45_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, ProjectsAddComponent_tr_119_div_46_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](47, ProjectsAddComponent_tr_119_div_47_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](19);
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](26);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", item_r22.checked)("disabled", ctx_r8.portfolioName == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r22.Project_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Actioncount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r22.Exec_BlockName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.ReportType == null)("ngIfElse", _r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r22.TM_DisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Exec_BlockName == "Standard Tasks" || item_r22.Exec_BlockName == "Routine Tasks")("ngIfElse", _r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "ToDo InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "ToDo Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "New Todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "Completion Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "Cancellation Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "Forward Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "Project Complete Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "Enactive Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "Version");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "Project Holded");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r22.Status == "Project Hold Under Approval");
} }
class ProjectsAddComponent {
    // textMessage:boolean=true;
    constructor(service, 
    // private loadingBar: LoadingBarService,
    notifyService, dialog, router, route, BsService, _LinkService, activatedRoute) {
        this.service = service;
        this.notifyService = notifyService;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.BsService = BsService;
        this._LinkService = _LinkService;
        this.activatedRoute = activatedRoute;
        this.EmpCountInFilter = [];
        this.TypeContInFilter = [];
        this.StatusCountFilter = [];
        this.searchResult = false;
        //Declarations//
        this.master_checked = false;
        this.checked = false;
        this.CurrentPageNo = 1;
        this.un_FilteredProjects = [];
        // LoadingBar_state = this.loadingBar.useRef('http');
        this.Current_user_ID = localStorage.getItem('EmpNo');
        this.checkedItems_Status = [];
        this.checkedItems_Type = [];
        this.checkedItems_Emp = [];
        this.selectedItem_Status = [];
        this.selectedItem_Type = [];
        this.selectedItem_Emp = [];
        this._MemosNotFound = "";
        this._raciDetails = true;
        this.clicks = 0;
        this.A2Z = true;
        this.Z2A = false;
        this.dropdownSettings_Memo = {};
        this._objStatusDTO = new src_app_Models_status_dto__WEBPACK_IMPORTED_MODULE_3__.StatusDTO;
        this.ObjUserDetails = new src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_4__.UserDetailsDTO();
        this._objDropdownDTO = new src_app_Models_dropdown_dto__WEBPACK_IMPORTED_MODULE_1__.DropdownDTO();
        this.Obj_Portfolio_DTO = new src_app_Models_portfolio_dto__WEBPACK_IMPORTED_MODULE_2__.PortfolioDTO();
    }
    ngOnInit() {
        this.portfolioName = localStorage.getItem('_PortfolioName');
        // console.log("----Currrent Portfolio Name----->", this.portfolioName, this.Current_user_ID);
        this._portfolioId = localStorage.getItem('Pid');
        this.route.paramMap.subscribe(params => {
            var id = params.get('portfolioId');
            this.Url_portfolioId = parseInt(id);
            this.BsService.setSelectedPortId(this.Url_portfolioId);
        });
        this.router.navigate(["../AddProjectsToPortfolio/" + this.Url_portfolioId]);
        this.service.GetProjectsBy_portfolioId(this.Url_portfolioId)
            .subscribe((data) => {
            this._PortfolioDetailsById = JSON.parse(data[0]['PortfolioDetailsJson']);
            if (this.portfolioName == "" || this.portfolioName == undefined || this.portfolioName == null) {
                this.portfolioName = this._PortfolioDetailsById[0]['Portfolio_Name'];
                // console.log("Inside Service---->", this._PortFolio_Namecardheader);
            }
        });
        // console.log("Outside Service---->",this._PortFolio_Namecardheader);
        // this._portfolioId=localStorage.getItem('_PortfolioId');
        this.GetProjectsByUserName();
        this.getDropdownsDataFromDB();
    }
    GetProjectsByUserName() {
        //this.LoadingBar_state.start();
        this.ObjUserDetails.PageNumber = this.CurrentPageNo;
        this.ObjUserDetails.PageSize = 30;
        this.ObjUserDetails.PortfolioId = parseInt(this.Url_portfolioId, 10);
        // console.log(this.ObjUserDetails.PortfolioId);
        this.service.GetProjectsByUserName_Service(this.ObjUserDetails).subscribe(data => {
            this._ProjectDataList = data;
            this.ActualDataList = data;
            this.un_FilteredProjects = this.ActualDataList;
            if (this._ProjectDataList) {
                this._CurrentpageRecords = this._ProjectDataList.length;
                // this._totalProjectsCount = this._ProjectDataList.length;
                console.log("ProjectList----------->", this._ProjectDataList.length);
                //console.log("ProjectList----------->", this._ProjectDataList);
            }
        });
        this.getDropdownsDataFromDB();
    }
    getDropdownsDataFromDB() {
        this._objDropdownDTO.EmpNo = this.Current_user_ID;
        this._objDropdownDTO.Selected_ProjectType = this.selectedType_String;
        this._objDropdownDTO.Selected_Status = this.selectedStatus_String;
        this._objDropdownDTO.SelectedEmp_No = this.selectedEmp_String;
        this._objDropdownDTO.Selected_SearchText = this.searchText;
        this._objDropdownDTO.PortfolioId = parseInt(this._portfolioId, 10);
        this.service.GetDropDownsData(this._objDropdownDTO)
            .subscribe((data) => {
            //Emp
            if (this.selectedItem_Emp.length == 0) {
                this.EmpCountInFilter = JSON.parse(data[0]['Emp_Json']);
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
            this._totalProjectsCount = JSON.parse(data[0]['TotalProjectsCount_Json']);
            this._totalProjectsCount = this._totalProjectsCount[0]['TotalProjects'];
            //console.log(this._totalProjectsCount)
        });
    }
    master_CheckBox() {
        for (let value of Object.values(this._ProjectDataList)) {
            value['checked'] = this.master_checked;
            if (value['checked'] === true) {
                this.btn_CreatePortfolio = false;
                this.hidetotalProjects = true;
            }
            else {
                this.btn_CreatePortfolio = true;
                this.hidetotalProjects = false;
            }
            this.selectedItemsList = this._ProjectDataList.filter((checkboxes) => {
                return checkboxes.checked == true;
            });
            //console.log("selectedList------>", this.selectedItemsList);
        }
    }
    checkboxclick(item, Pcode) {
        if (item == true) {
            for (let value of Object.values(this._ProjectDataList)) {
                if (value['checked'] == true && value['Project_Code'] == Pcode) {
                    this.OnSave();
                    return true;
                }
            }
        }
        if (item == false) {
            console.log(this._ProjectDataList);
            this._ProjectDataList.forEach(element => {
                if (element.checked == false && element.Project_Code == Pcode) {
                    let prid = element.id;
                    let poid = this._portfolioId;
                    let Projname = element.Project_Name;
                    let pCode = element.Project_Code;
                    let Createdby = element.Emp_No;
                    this.DeleteProject(prid, poid, pCode, Projname, Createdby);
                    return true;
                }
            });
        }
    }
    fetchSelectedItems() {
        this.selectedItemsList = this._ProjectDataList.filter((checkboxes) => {
            return checkboxes.checked == true;
        });
    }
    dataTableCheckbox() {
        this.btnGetRecords = true;
        this.fetchSelectedItems();
        this.str_portName = this.portfolioName;
    }
    isStatusChecked(item) {
        let arr = [];
        this.StatusCountFilter.forEach(element => {
            if (element.checked == true) {
                arr.push({ Status: element.Name });
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
    }
    isTypeChecked(item) {
        let arr = [];
        this.TypeContInFilter.forEach(element => {
            if (element.checked == true) {
                arr.push({ Block_No: element.Block_No });
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
    }
    isEmpChecked(item) {
        let arr = [];
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
    }
    //Apply Filters
    SearchbyText() {
        this.searchResult = true;
        this.CurrentPageNo = 1;
        this.applyFilters();
    }
    applyFilters() {
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
        this.ObjUserDetails.SelectedStatus = this.selectedStatus_String;
        this.ObjUserDetails.SelectedEmp_No = this.selectedEmp_String;
        this.ObjUserDetails.SelectedBlock_No = this.selectedType_String;
        this.ObjUserDetails.PageNumber = this.CurrentPageNo;
        this.ObjUserDetails.PageSize = 30;
        this.ObjUserDetails.SearchText = this.searchText;
        if (this._portfolioId == 0 || this._portfolioId == undefined || this._portfolioId == null) {
            this.ObjUserDetails.PortfolioId = parseInt(this.Url_portfolioId);
        }
        else {
            this.ObjUserDetails.PortfolioId = parseInt(this._portfolioId);
        }
        //console.log("string------->", this.selectedType_String, this.selectedEmp_String, this.selectedStatus_String);
        this.service.GetProjectsByUserName_Service(this.ObjUserDetails)
            .subscribe(data => {
            //this._ProjectDataList = JSON.parse(data[0]['Projects_Json']);
            this._ProjectDataList = data;
            this._CurrentpageRecords = this._ProjectDataList.length;
            //this._totalProjectsCount=this._ProjectDataList.length;
            if (this._ProjectDataList.length == 0) {
                this._filtersMessage = "No more projects matched your search";
                this._filtersMessage2 = " Clear the filters & try again";
            }
            else {
                this._filtersMessage = "";
                this._filtersMessage2 = "";
            }
        });
        //Filtering Checkbox de
        this.getDropdownsDataFromDB();
    }
    openInfo(pcode, pName) {
        this._portfolioId = this.activatedRoute.snapshot.params.portfolioId;
        this.router.navigate(["../AddProjectsToPortfolio/" + this._portfolioId + "/projectinfo", pcode, "4"]);
        document.getElementById("mysideInfobar").classList.add("kt-quick-panel--on");
        document.getElementById("rightbar-overlay").style.display = "block";
        document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    }
    closeInfo() {
        document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
        this.router.navigate(["../AddProjectsToPortfolio/" + this._portfolioId]);
    }
    //Save Portfolio
    OnSave() {
        this.Obj_Portfolio_DTO.Portfolio_Name = this.portfolioName;
        let LengthOfSelectedItems;
        LengthOfSelectedItems = JSON.stringify(this.selectedItemsList.length);
        this.Obj_Portfolio_DTO.SelectedProjects = this.selectedItemsList;
        this.service.SavePortfolio(this.Obj_Portfolio_DTO)
            .subscribe(data => {
            this._portfolioId = data['Portfolio_ID'];
            this._objStatusDTO.Emp_No = this.Current_user_ID;
            //console.log("Return value--------->", this._portfolioId);
            this.service.GetPortfolioStatus(this._objStatusDTO).subscribe((data) => {
                this._ListProjStat = data;
                //console.log("ListForStatus", this._ListProjStat);
                //Owners Portfolios
                let Listown = this._ListProjStat.filter(i => (i.CreatedName));
                this.countOwners = Listown.length;
                this.countAll = this._ListProjStat.length;
                if (this._ListProjStat.length == 0) {
                    this.messageForEmpty = false; //"No Portfolio's has created";
                }
                else {
                    this.messageForEmpty = true;
                }
            });
        });
        // if (this._portfolioId == 0 || this._portfolioId == null || this._portfolioId == '') {
        //   this.notifyService.showSuccess("Portfolio Created " + ' ' + ' Added ' + ' ' + LengthOfSelectedItems + ' ' + 'Project(s)', '');
        // }
        if (this._portfolioId != '') {
            this.notifyService.showInfo("" + ' ' + 'Added' + ' ' + LengthOfSelectedItems + ' ' + 'Project(s)', '');
        }
    }
    //Function Reset Filters
    resetFilters() {
        this.searchText = "";
        this.search_Type = [];
        this.CurrentPageNo = 1;
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
    resetAll() {
        this.txtSearch = '';
        this.selectedItem_Type.length = 0;
        this.selectedItem_Status.length = 0;
        this.selectedItem_Emp.length = 0;
        this.resetFilters();
    }
    BackBttn() {
        let name = 'portfolioprojects';
        var url = document.baseURI + name;
        console.log("URl Portfolio ID :", this._portfolioId);
        if (!this.Url_portfolioId) {
            this.router.navigate(['backend/Portfolio']);
            //this.router.navigate(["../backend/Portfolio"]);
            //var myWindow = window.open(url);
            //myWindow.focus();
            // var myurl = `${Url2}`;
            // var myWindow = window.open(myurl);
        }
        else {
            this.router.navigate(['portfolioprojects/', this.Url_portfolioId]);
            // var myurl = `${url}/${this._portfolioId}`;
            // var myWindow = window.open(myurl, this._portfolioId);
            // myWindow.focus();
        }
        // this.router.navigate(['backend/Portfolio'])
        //this.router.serializeUrl(this.router.createUrlTree(['Home/Portfolio/']));
        // const Url = this.router.serializeUrl(this.router.createUrlTree(['Home/Portfolio/']));
        // window.open(Url);
    }
    DeleteProject(Proj_id, port_id, Pcode, proj_Name, createdBy) {
        this.deletedBy = this.Current_user_ID;
        let String_Text = 'Delete';
        const confirmDialog = this.dialog.open(src_app_Shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
            data: {
                mode: 'delete',
                title1: 'Confirmation ',
                message1: proj_Name
            }
        });
        confirmDialog.afterClosed().subscribe(result => {
            if (result === true) {
                this.service.DeleteProject(Proj_id, port_id, Pcode, proj_Name, createdBy, this.deletedBy).subscribe((data) => {
                    this.service.GetProjectsBy_portfolioId(this._Pid)
                        .subscribe((data) => {
                        //console.log("Retrun After Delete :" + data);
                        this._ProjectsListBy_Pid = JSON.parse(data[0]['JosnProjectsByPid']);
                        this._StatusCountDB = JSON.parse(data[0]['JsonStatusCount']);
                        this.notifyService.showSuccess("Project removed successfully ", '');
                    });
                    this._objStatusDTO.Emp_No = this.Current_user_ID;
                    this.service.GetPortfolioStatus(this._objStatusDTO).subscribe((data) => {
                        this._ListProjStat = data;
                    });
                });
            }
            else {
                this.notifyService.showInfo("Action Cancelled ", '');
                //checking again if delete Cancel
                this._ProjectDataList.forEach(element => {
                    if (element.checked == false && element.id == Proj_id) {
                        return element.checked = true;
                    }
                });
            }
        });
    }
    _OpenMemosInfo(_projectCode) {
        // this._displayProjName = _projectName;
        this._LinkService._GetOnlyMemoIdsByProjectCode(_projectCode).
            subscribe((data) => {
            let Table_data = data;
            if (Table_data.length > 0) {
                this._MemosNotFound = "";
                this._JsonString = data[0]['JsonData'];
                this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
                this._LinkService._GetMemosSubject(this._JsonString).
                    subscribe((data) => {
                    // console.log("Data------------>", data)
                    this._MemosSubjectList = JSON.parse(data['JsonData']);
                    //console.log("Subject Name ------------>",this._MemosSubjectList);
                });
            }
            else {
                this._MemosSubjectList = [];
                this._MemosNotFound = "No memos linked";
            }
        });
        //Displaying Right Side Bar... 
        //document.getElementById("MemosSideBar").style.width = "350px";
    }
    bttn_RACI() {
        this._raciDetails = !this._raciDetails;
    }
    _SortPortfoliolist() {
        this.clicks += 1;
        if (this.clicks != 1) {
            this.A2Z = true;
            this.Z2A = false;
            this.clicks = 0;
        }
        else {
            this.A2Z = false;
            this.Z2A = true;
        }
    }
    moreDetails(pcode) {
        let name = 'MoreDetails';
        var url = document.baseURI + name;
        var myurl = `${url}/${pcode}`;
        var myWindow = window.open(myurl, pcode);
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
                this._SelectedIdsfromDb = underscore__WEBPACK_IMPORTED_MODULE_5__.map(arr2, (d) => { return d.MailId; });
                this.Memos_List = underscore__WEBPACK_IMPORTED_MODULE_5__.reject(arr1, (d) => {
                    var findId = underscore__WEBPACK_IMPORTED_MODULE_5__.find(this._SelectedIdsfromDb, (sId) => { return sId === d.MailId; });
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
                this._OpenMemosInfo(this.pCode);
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
        this._DBMemosIDList = underscore__WEBPACK_IMPORTED_MODULE_5__.map(arr2, (d) => { return d.MailId; });
        this.memoId = JSON.stringify(result);
        let appId = 101;
        let UserId = this.Current_user_ID;
        this._LinkService.InsertMemosOn_ProjectCode(pcode, appId, this.memoId, UserId).
            subscribe((data) => {
            this._OpenMemosInfo(this.pCode);
            let Returndata = data['Message'];
            this.notifyService.showInfo("", Returndata);
        });
        this.UpdateMemos(pcode);
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
}
ProjectsAddComponent.ɵfac = function ProjectsAddComponent_Factory(t) { return new (t || ProjectsAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_6__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_8__.BsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_9__.LinkService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute)); };
ProjectsAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: ProjectsAddComponent, selectors: [["app-projects-add"]], decls: 132, vars: 34, consts: [[1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height", "side_view"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label", "d-block", "pt-2"], [1, "kt-portlet__head-title"], [1, "font-12"], [1, "text-primary", "mb-2"], [1, "kt-portlet__head-label", "mr-2"], [1, "kt-header__topbar-item", "kt-header__topbar-item--search", "mr-3"], [1, "kt-header__topbar-wrapper"], [1, "kt-quick-search", "kt-quick-search--inline"], [1, "kt-quick-search__form"], [1, "input-group"], ["type", "text", "placeholder", "Search Projects", "autofocus", "", 1, "form-control", "project-search", "kt-quick-search__input", "pl-3", 2, "width", "200px", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "input-group-prepend"], [1, "input-group-text", 3, "click"], [1, "flaticon2-search-1"], [1, "mr-3"], [4, "ngIf"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "disabled", "click"], [1, "fas", "fa-angle-left", "mr-0"], [1, "fas", "fa-angle-right", "mr-0"], [1, "stores-sec", "mr-1"], [1, "nav", "navbar-nav", "filters"], ["id", "filtermenu", 1, "dropdown", "mega-dropdown"], ["data-toggle", "dropdown", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold"], [1, "fas", "fa-ellipsis-v", "mr-0"], [1, "dropdown-menu", "mega-dropdown-menu"], [3, "click"], [1, "col-md-8"], [1, "d-inline-block"], [1, "col-md-12"], ["type", "text", "placeholder", "Search Filters", 1, "form-control", "kt-quick-search__input", "pl-3", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [1, "col-md-4"], [1, "count-height"], ["class", "d-flex justify-content-between", 4, "ngFor", "ngForOf"], ["data-toggle", "dropdown", 1, "btn", "btn-label-success", "btn-outline-success", "btn-upper", "btn-sm", "btn-bold", "mr-2"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", 3, "click"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fas", "fa-sync-alt", "mr-0"], [1, "btn", "btn-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 2, "background-color", "#384ad7", 3, "click"], [1, "kt-portlet"], [1, "kt-portlet__body", "kt-portlet__body_scroll", "pt-0"], [1, "card", "projects-list", "no-border"], [1, "card-body"], ["id", "project-4_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4", "no-footer"], [1, "col-sm-12"], ["id", "project-4", "role", "grid", 1, "table", "table-hover", "dataTable", "no-footer", "dtr-inline", 2, "width", "0px"], ["role", "row"], ["tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-sort", "ascending", "aria-label", ": activate to sort column descending", 2, "width", "0px"], ["data-order", "desc", "data-name", "id", 1, "text-center"], ["data-order", "desc", "data-name", "Project_Name", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Title &amp; Description: activate to sort column ascending", 1, "curser-pointer", 2, "width", "0px", 3, "appSort", "click"], ["data-toggle", "kt-tooltip", "title", "Click to sort", 1, "mr-2", 3, "hidden"], [1, "fas", "fa-sort-alpha-up"], [1, "fa", "fa-sort-alpha-down-alt"], ["data-order", "desc", "data-name", "Exec_BlockName", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Type: activate to sort column ascending", 1, "curser-pointer", 2, "width", "0px", 3, "appSort"], [1, "fas", "fa-sort"], ["data-order", "desc", "data-name", "ReportType", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Category: activate to sort column ascending", 1, "curser-pointer", 2, "width", "0px", 3, "appSort"], ["data-order", "desc", "data-name", "TM_DisplayName", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "User Name: activate to sort column ascending", 1, "curser-pointer", 2, "width", "0px", 3, "appSort"], ["data-order", "desc", "data-name", "DeadLine", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "End Date: activate to sort column ascending", 1, "curser-pointer", 2, "width", "0px", 3, "appSort", "click"], ["data-order", "desc", "data-name", "Status", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Status: activate to sort column ascending", 1, "curser-pointer", 2, "width", "0px", 3, "appSort"], ["role", "row", "class", "odd", 4, "ngFor", "ngForOf"], [1, "text-center", "py-4", 2, "color", "lightgrey"], [1, "col-sm-12", "col-md-5"], [1, "col-sm-12", "col-md-7"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], ["id", "rightbar-overlay", 3, "click"], [1, "d-flex", "justify-content-between"], [1, "kt-checkbox"], ["type", "checkbox", 3, "ngModel", "change", "ngModelChange"], [1, "count-btn"], [1, "kt-checkbox", "mb-3"], ["type", "checkbox", 3, "ngModel", "checked", "change", "ngModelChange"], ["role", "row", 1, "odd"], ["tabindex", "0", 1, "sorting_1"], ["checked", "", "color", "primary", 3, "ngModel", "disabled", "ngModelChange", "change"], ["align", "center"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", 1, "btn", "p-0", "mr-2"], [1, "fa", "fa-info-circle", "info-icon-cir", 3, "click"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "More Info!", 1, "btn", "p-0"], [1, "fa", "fa-chart-bar", "info-icon-cir", 3, "click"], [1, "kt-widget__title", "mb-0"], ["class", "count2", 4, "ngIf"], [1, "kt-widget__other"], [4, "ngIf", "ngIfElse"], ["ReportType", ""], ["Projecttype", ""], [1, "count2"], [1, "kt-widget__other", "text-nowrap"], [1, "text-success", "font-weight-400"], [1, "text-danger", "font-weight-400"], [1, "text-warning", "font-weight-400"], [1, "text-primary", "font-weight-400"], [1, "text-cancel", "font-weight-400"], [1, "text-info", "font-weight-400"], [1, "font-weight-400", 2, "color", "#c0b5dc"]], template: function ProjectsAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "p", 6)(7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " Add projects to portfolio : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ProjectsAddComponent_Template_input_ngModelChange_17_listener($event) { return ctx.searchText = $event; })("keydown.enter", function ProjectsAddComponent_Template_input_keydown_enter_17_listener() { return ctx.SearchbyText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 16)(19, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProjectsAddComponent_Template_button_click_19_listener() { return ctx.SearchbyText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, ProjectsAddComponent_ng_container_22_Template, 2, 2, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, ProjectsAddComponent_ng_container_23_Template, 2, 2, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, ProjectsAddComponent_span_25_Template, 2, 1, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, ProjectsAddComponent_span_26_Template, 2, 1, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProjectsAddComponent_Template_button_click_27_listener() { ctx.CurrentPageNo = ctx.CurrentPageNo - 1; return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](28, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProjectsAddComponent_Template_button_click_29_listener() { ctx.CurrentPageNo = ctx.CurrentPageNo + 1; return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](30, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 24)(32, "ul", 25)(33, "li", 26)(34, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](35, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "div", 29)(37, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProjectsAddComponent_Template_div_click_37_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "div", 1)(39, "div", 31)(40, "h5")(41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, "Total Projects - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "h5", 32)(44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "div", 1)(48, "div", 33)(49, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ProjectsAddComponent_Template_input_ngModelChange_49_listener($event) { return ctx.txtSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "div", 1)(52, "div", 35)(53, "div", 36)(54, "p")(55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](56, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](57, ProjectsAddComponent_div_57_Template, 7, 3, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](58, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "div", 35)(60, "div", 36)(61, "p")(62, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](63, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](64, ProjectsAddComponent_div_64_Template, 7, 4, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](65, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "div", 35)(67, "div", 36)(68, "p")(69, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](70, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](71, ProjectsAddComponent_div_71_Template, 7, 4, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](72, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](73, "br")(74, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](75, "div")(76, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](77, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](78, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProjectsAddComponent_Template_button_click_78_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](79, "Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](80, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProjectsAddComponent_Template_button_click_80_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](81, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](82, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProjectsAddComponent_Template_button_click_82_listener() { return ctx.BackBttn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](83, "Done ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](84, "div", 43)(85, "div", 44)(86, "div", 45)(87, "div", 46)(88, "div", 47)(89, "div", 1)(90, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](91, ProjectsAddComponent_div_91_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](92, "table", 49)(93, "thead")(94, "tr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](95, "th", 51)(96, "th", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](97, "th", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProjectsAddComponent_Template_th_click_97_listener() { return ctx._SortPortfoliolist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](99, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](100, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](101, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](102, " Project Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](103, "th", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](104, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](105, " Project Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](106, "th", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](107, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](108, " Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](109, "th", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](110, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](111, " Employee Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](112, "th", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProjectsAddComponent_Template_th_click_112_listener() { return ctx._SortPortfoliolist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](113, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](114, " End date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](115, "th", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](116, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](117, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](118, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](119, ProjectsAddComponent_tr_119_Template, 48, 30, "tr", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](120, "div", 64)(121, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](125, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](126, "div", 65)(127, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](128, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](129, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](130, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](131, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ProjectsAddComponent_Template_div_click_131_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.portfolioName);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.CurrentPageNo == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.CurrentPageNo != 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx._totalProjectsCount >= 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx._totalProjectsCount < 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx.CurrentPageNo == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx._CurrentpageRecords < 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx._totalProjectsCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.txtSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](58, 25, ctx.TypeContInFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](65, 28, ctx.StatusCountFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](72, 31, ctx.EmpCountInFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.searchResult == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", ctx.Z2A);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", ctx.A2Z);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx._filtersMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx._filtersMessage2, "");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckbox, _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListItem, src_app_Directive_sort_directive__WEBPACK_IMPORTED_MODULE_10__.SortDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__.Ng2SearchPipe], styles: [".list-icon-color[_ngcontent-%COMP%]{\n    color: #969696\n   }\n\n  .loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\n    background: #0dc5c1;\n    animation: load1 1s infinite ease-in-out;\n    width: 1em;\n    height: 4em;\n  }\n\n  .loader[_ngcontent-%COMP%] {\n    color: #0dc5c1;\n    text-indent: -9999em;\n    margin: 88px auto;\n    position: relative;\n    font-size: 11px;\n    transform: translateZ(0);\n    animation-delay: -0.16s;\n  }\n\n  .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\n    position: absolute;\n    top: 0;\n    content: '';\n  }\n\n  .loader[_ngcontent-%COMP%]:before {\n    left: -1.5em;\n    animation-delay: -0.32s;\n  }\n\n  .loader[_ngcontent-%COMP%]:after {\n    left: 1.5em;\n  }\n\n  @keyframes load1 {\n    0%,\n    80%,\n    100% {\n      box-shadow: 0 0;\n      height: 4em;\n    }\n    40% {\n      box-shadow: 0 -2em;\n      height: 5em;\n    }\n  }\n\n  .center[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 200px;\n  }\n\n  .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    border-radius: 2px;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]{\n  width: 400px;\n  height: auto;\n  max-height: 400px;\n  padding: 10px;\n  top: 38px !important;\n  left: auto !important;\n  right: 0px !important;\n  overflow-y: auto;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n  .ngx-pagination[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n  #backBtn[_ngcontent-%COMP%]:hover{\n background-color:#5867dd ;\n color: white; \n}\n\n  #Mdl_closebtn[_ngcontent-%COMP%]:hover{\n  background-color: #dc3545;\n  color:white\n}\n\n  .text-warning-1[_ngcontent-%COMP%]{\n  background-color: #ffe0a7;\n  color:#FFA800;\n  width: auto;\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n\n  .text-danger-1[_ngcontent-%COMP%]{\n  color: #F64E60;\n  background-color: #FFE2E5;\n  width: auto;\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n\n  .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%], .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-up[_ngcontent-%COMP%]{\n  border-top: 7px solid #adadad !important;\n    border-left: 7px solid transparent !important;\n    border-right: 7px solid transparent !important\n}\n\n  .multiselect-dropdown[_ngcontent-%COMP%]{\n  width: 80px !important;\n\n}\n\n  .kt-todo__details[_ngcontent-%COMP%]{\n  display: flex;\n}\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]{\n    border: 0;\n    background: none;\n    font-size: 16px;\n    outline: none !important;\n    box-shadow: none;\n    outline: none !important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 30px;\n    width: 30px;\n    background-color: #f5f6fc;\n    border: 1px solid #b3bcff;\n    color: #5867dd;\n    transition: all 0.3s ease;\n    cursor: pointer;\n    margin: 0 8px 0 0;\n    border-radius: 0;\n    border-radius: 4px;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon[_ngcontent-%COMP%] {\n    height: 18px;\n    width: 18px;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]{\n  height: 25px;\n  width: 25px;\n}\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{\n    fill: #5867dd;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\n    fill: #5867dd;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\n    fill: #fff;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{\n  fill: #fff;\n}\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover, .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]{\n    background-color: #5867dd;\n    color: #fff;\n  }\n\n  .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    font-size: 18px;\n    color: #ccc;\n  }\n\n  .card-title[_ngcontent-%COMP%]   .favourite.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{\n    color: #ffc107;\n  }\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\n    border-color: #d6d6d6;\n  }\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.success {\n    border-left: 5px solid #1dc9b7;\n    \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.warning {\n    border-left: 5px solid #ffb822; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.info {\n    border-left: 5px solid #2786fb; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.danger {\n    border-left: 5px solid #F58A8B; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.UnderApprovals {\n  border-left: 5px solid #BD838C; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.ForwardUnderApproval {\n  border-left: 5px solid #E0B1D7; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.completeUnderApproval {\n  border-left: 5px solid #98c7bf; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.projectHold {\n  border-left: 5px solid #C0B5DC; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.HoldunderApp {\n  border-left: 5px solid #a85098; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.DeadlineExtended{\n  border-left: 5px solid #E0B1D7; \n}\n\n  .delayDays[_ngcontent-%COMP%]{\n  font-size: 11px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n  transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\n  fill: #5E5F63;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\n  padding: 0.2rem 20px;\n  border-radius: 4px;\n}\n\n  .mail-dropdown[_ngcontent-%COMP%] {\n  width: 800px;\n  max-width: 100%;\n}\n\n  .mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-bottom: 5px;\n}\n\n  .kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\n  min-height: 60px;\n}\n\n  .kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n  .dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #ccc !important;\n  border-radius: 4px;\n}\n\n  .kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n  color: #74788D !important;\n  cursor: auto;\n}\n\n  .kt-nav__link-text[_ngcontent-%COMP%]:hover {\n  color: #74788D !important;\n}\n\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\n  background-color: rgba(154, 100, 142, 0.2);\n  color: #333 !important;\n  transition: all 0.3s;\n}\n\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n  .kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background: rgb(195, 195, 195);\n}\n\n  \n\n  .kt-quick-panel2[_ngcontent-%COMP%] {\n  width: 650px !important;\n}\n\n  .kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\n  right: -660px;\n  left: auto;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  border-radius: 5px;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #F1F1F1;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n  \n\n  \n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\n  background-color: #FFFFFF !important;\n}\n\n  .chatcount[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-left: -15px;\n  margin-top: -10px;\n}\n\n  .kt-badge.kt-badge--dark[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background: #8C8D92;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n  transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\n  fill: #5E5F63;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\n  padding: 0.2rem 20px;\n  border-radius: 4px;\n}\n\n  .kt-font-ReplyRequired[_ngcontent-%COMP%] {\n  color: #a6c !important;\n}\n\n  .mail-dropdown[_ngcontent-%COMP%] {\n  width: 800px;\n  max-width: 100%;\n}\n\n  .mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-bottom: 5px;\n}\n\n  .kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\n  min-height: 60px;\n}\n\n  .kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n  .dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #ccc !important;\n  border-radius: 4px;\n}\n\n  .kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n  color: #74788D !important;\n  cursor: auto;\n}\n\n  .kt-nav__link-text[_ngcontent-%COMP%]:hover {\n  color: #74788D !important;\n}\n\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\n  background-color: rgba(154, 100, 142, 0.2);\n  color: #333 !important;\n  transition: all 0.3s;\n}\n\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n  .kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background: rgb(195, 195, 195);\n}\n\n  \n\n  .kt-quick-panel2[_ngcontent-%COMP%] {\n  width: 650px !important;\n}\n\n  .kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\n  right: -660px;\n  left: auto;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  border-radius: 5px;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #F1F1F1;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n  \n\n  \n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  outline: none !important;\n  box-shadow: none;\n  outline: none !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 35px;\n  width: 35px;\n  background-color: #FFFFFF;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  margin: 0;\n  border-radius: 0;\n  border-radius: 4px;\n}\n\n  .kt-badge.kt-badge--inline[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n  padding: 0.15rem 0.75rem;\n  border-radius: 2px;\n  margin-left: 4px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%] {\n  padding: 17px;\n  width: 243px;\n}\n\n  \n\n  .Replied_border_left_true_warning[_ngcontent-%COMP%]{\n  border-left: 5px solid #ffb822;\n}\n\n  .Replied_border_left_true_primary[_ngcontent-%COMP%]{\n  border-left: 5px solid #95bed9;\n}\n\n  .Replied_border_left_true_success[_ngcontent-%COMP%]{\n  border-left: 5px solid #95bed9;\n}\n\n  .Replied_border_left_true_Danger[_ngcontent-%COMP%]{\n  border-left: 5px solid #F58A8B;\n}\n\n  .Replied_border_left_true_hold[_ngcontent-%COMP%]{\n  border-left: 5px solid #c0b5dc\n}\n\n  .Replied_border_left_true_rejected[_ngcontent-%COMP%]{\n  border-left: 5px solid #f5c293;\n}\n\n  .Replied_border_left_true_underApprovals[_ngcontent-%COMP%]{\n  border-left: 5px solid #BD838C;\n}\n\n  .Replied_border_left_true_forwardUnderApproval[_ngcontent-%COMP%]{\n  border-left: 5px solid #E0B1D7;\n}\n\n  .Replied_border_left_true_completeUnderApproval[_ngcontent-%COMP%]{\n  border-left: 5px solid #98c7bf;\n}\n\n  .Replied_border_left_true_projectHold[_ngcontent-%COMP%]{\n  border-left: 5px solid #C0B5DC;\n}\n\n  .Replied_border_left_true_NewProject[_ngcontent-%COMP%]{\n  border-left: 5px solid #007bff;\n}\n\n  .Replied_border_left_true_DeadlineExtended[_ngcontent-%COMP%]{\n  border-left: 5px solid #E0B1D7;\n}\n\n  .Replied_border_left_true_HoldunderApp[_ngcontent-%COMP%]{\n  border-left: 5px solid #a85098;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%] {\n    margin-left: -17px;\n}\n\n  .icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]{\n  position: relative;\n  margin-right: 15px !important;\n  z-index: 2;\n}\n\n  .icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  width: 18px;\n    height: 18px;\n    text-align: center;\n    font-size: 10px;\n    font-weight: 700;\n  color: #fff;\n  background: #5867dd;\n  border: 1px solid #5867dd;\n  border-radius: 50%;\n  position: absolute;\n  top: -11px;\n  right: -11px;\n  z-index: 3;\n}\n\n  \n\n  \n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]{\n  margin-top: 0px !important;\n}\n\n  .multiselect-dropdown[_ngcontent-unj-c40][_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-unj-c40][_ngcontent-%COMP%]{\n  width: 150px !important;\n}\n\n  \n\n  .sideInfobar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  right: 0;\n  background-color: #f1f1f1;\n  border-left: 1px solid #b3bcff;\n  overflow-x: hidden;\n  transition: 0.5s;\n  \n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%]{\n  background-color: #f5f6fc;\n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n\ttext-decoration: none;\n\tcolor: #333;\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n\n  .info-icon-cir[_ngcontent-%COMP%]{\n  font-size: 20px;\n  color: #5867dd;\n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]{\n  border-bottom: 0.07rem dashed #dedede;\n  padding: 6px;\n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%]{\n  border-bottom: 0.07rem dashed rgba(0,0,0,0.3);\n}\n\n  \n\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%]{\n  font-weight: 600;\n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]{\n  width: 270px;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n  .count-height[_ngcontent-%COMP%]{\n  max-height: 200px;\n  overflow-y: auto;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]   .justify-content-between[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]{\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #f1f1f1;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #ccc;\n}\n\n  .dropdown[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]{\n  border-color: #5867dd;\n}\n\n  .kt-checkbox[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  border: solid #5867dd;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown[_ngcontent-%COMP%] {\n  position: static !important;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%] {\n    padding: 20px;\n    width: 60%;\n    \n    top: 20px !important;\n    left: -22px !important;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:before {\n  content: \"\";\n  border-bottom: 15px solid #fff;\n  border-right: 17px solid transparent;\n  border-left: 17px solid transparent;\n  position: absolute;\n  top: -15px;\n  left: 32px;\n  z-index: 10;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  border-bottom: 17px solid #ccc;\n  border-right: 19px solid transparent;\n  border-left: 19px solid transparent;\n  position: absolute;\n  top: -17px;\n  left: 30px;\n  z-index: 8;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu1[_ngcontent-%COMP%]   .filter-box[_ngcontent-%COMP%]{\n  width: 33.3333%;\n  display: inline-block;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){\n  width: 3%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){\n  width: 4%;\n}\n\n  \n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3){\n  width: 33%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4){\n  width: 10%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5){\n  width: 12%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(7), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6){\n  width: 15%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(8), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7){\n  width: 12%;\n}\n\n  .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{\n  \n  cursor: pointer;\n}\n\n  .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{\n  border: 1px solid #d6dbff;\n  border-radius: 5px;\n}\n\n  .show_entries[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 3px;\n  background-color: #fff;\n \n}\n\n  .show_entries[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\n  \n  border: 2px solid rgba(88, 103, 221, 0.3);\n  color: #5867dd;\n  font-weight: bold;\n}\n\n  .count-btn[_ngcontent-%COMP%]{\n  \n  \n  padding: 0px 10px;\n  font-weight: 700;\n  color: rgb(88, 88, 88);\n  font-size: 14px;\n  line-height: 25px;\n}\n\n  \n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__toolbar[_ngcontent-%COMP%]   .kt-inbox__search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 44px;\n  border: none;\n  background-color: #f2f3f7;\n}\n\n  .input-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100% !important;\n}\n\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]{\n  \n  background-color: #fff;\n  width: 25vw;\n  box-shadow: none;\n  border: 1px solid #d6dbff !important;\n  margin-top: 5px;\n}\n\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{\n  background-color: #f5f6fc;\n}\n\n  \n\n  \n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%]   .kt-inbox__items[_ngcontent-%COMP%]   .kt-inbox__item[_ngcontent-%COMP%]{\n  position: relative;\n}\n\n  .delete-btn[_ngcontent-%COMP%]{\n  display: none;\n  position: absolute;\n   right: 0px;\n    top: 50%;\n    transform: translateY(-50%);\n    background-color: #f2f3f7;\n    color: grey;\n    line-height: 63px;\n    padding: 0 20px;\n    transition: all 2s ease !important;\n}\n\n  .delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n  background: none;\n  font-size: 16px;\n  outline: none !important;\n  box-shadow: none;\n  outline: none !important;\n  height: 30px;\n  width: 30px;\n  background-color: #f5f6fc;\n  border: 1px solid #b3bcff;\n  color: #5867dd;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  margin: 10px 8px 0 0;\n  border-radius: 0;\n  border-radius: 4px;\n  padding: 5px;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n\n  \n\n  .btn-secondary.theme-btn[_ngcontent-%COMP%]{\n  background-color: #5867dd;\n  color: #fff;\n}\n\n  .btn.btn-label-primary[_ngcontent-%COMP%]{\n  border: 1px solid #b3bcff;\n}\n\n  .delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\n    background-color: #5867dd;\n    color: #fff;\n}\n\n  .kt-inbox__item[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%]{\n  display: block;\n}\n\n  \n\n  .name-box[_ngcontent-%COMP%]{\n  display: inline-block;\n  font-size: 9px;\n  width: 30px;\n  height: 30px;\n  background-color: #5867dd;\n  color: #fff;\n  font-weight: 500;\n  letter-spacing: 2px;\n  border-radius: 50%;\n  line-height: 30px;\n  margin-right: 5px;\n}\n\n  .names-response[_ngcontent-%COMP%]{\n  display :inline-block;\n  text-align: left;\n}\n\n  .names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{\n  display: block;\n  font-size: 10px;\n  font-weight: 600;\n}\n\n  .names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{\n  font-weight: 600;\n}\n\n  .head-btn[_ngcontent-%COMP%]{\n  background-color: rgba(88, 103, 221, 0.1);\n    padding: 3px 10px 3px 5px;\n    border-radius: 2rem;\n    border: 1px solid #b3bcff;\n    font-weight: 500;\n    font-size: 12px;\n}\n\n  .head-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    width: 25px;\n    height: 25px;\n    background: #5867dd;\n    color: #fff;\n    line-height: 25px;\n    text-align: center;\n    border-radius: 50%;\n    margin-right: 3px;\n}\n\n  .devider[_ngcontent-%COMP%]{\n  height: 1px;\n  width: 100%;\n  background-color: #f1f1f1;\n}\n\n  .pricevalues[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-bottom: 10px;\n  border-right: 1px solid #f1f1f1;\n  border-bottom: 1px solid #f1f1f1;\n}\n\n  .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(1), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(2)  {\n  border-top: 1px solid #f1f1f1;\n}\n\n  .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(3), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(4)  {\n  border-bottom: none\n}\n\n  .pricevalues[_ngcontent-%COMP%]:nth-child(2), .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\n  border-right: none;\n}\n\n  .dms-links[_ngcontent-%COMP%]{\n  list-style-type: disc;\n}\n\n  .dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  display: block;\n  text-decoration: underline;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n\n  \n\n  .progress_bar[_ngcontent-%COMP%]   .pro-bar[_ngcontent-%COMP%] {\n  background: hsl(0, 0%, 97%);\n  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;\n  height: 4px;\n  margin-bottom: 12px;\n  margin-top: 30px;\n  position: relative;\n  text-align: left;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress_bar_title[_ngcontent-%COMP%] {\n  color: hsl(218, 4%, 50%);\n  font-size: 12px;\n  font-weight: 600;\n  position: relative;\n  top: -28px;\n  z-index: 1;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress_number[_ngcontent-%COMP%] {\n  float: right;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%] {\n  background-color: hsl(0, 0%, 88%);\n  display: block;\n  width: 0;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: width 1s linear 0s;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background-color: hsl(0, 0%, 100%);\n  border-radius: 50%;\n  width: 4px;\n  height: 4px;\n  position: absolute;\n  right: 1px;\n  top: 0;\n  z-index: 1;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 14px;\n  height: 14px;\n  background-color: inherit;\n  border-radius: 50%;\n  position: absolute;\n  right: -4px;\n  top: -5px;\n}\n\n  .bg-today[_ngcontent-%COMP%] {\n  background-color: #342bf0 !important;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  min-width: 100px;\n}\n\n  @media only screen and (max-width: 768px) {\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]{\n    width: 80vw;\n  }\n}\n\n  span.count2[_ngcontent-%COMP%] {\n  margin-left: 2px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  background: #deecf8;\n  color: #2786fb;\n  border-radius: 50%;\n  font-size: 0.9rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbUJLOztFQUVIO0lBQ0U7R0FDRDs7RUFDRDs7O0lBR0UsbUJBQW1CO0lBRW5CLHdDQUF3QztJQUN4QyxVQUFVO0lBQ1YsV0FBVztFQUNiOztFQUNBO0lBQ0UsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFHZix3QkFBd0I7SUFFeEIsdUJBQXVCO0VBQ3pCOztFQUNBOztJQUVFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztFQUNiOztFQUNBO0lBQ0UsWUFBWTtJQUVaLHVCQUF1QjtFQUN6Qjs7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFjQTtJQUNFOzs7TUFHRSxlQUFlO01BQ2YsV0FBVztJQUNiO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsV0FBVztJQUNiO0VBQ0Y7O0VBQ0E7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxrQkFBa0I7QUFDdEI7O0VBQ0E7Ozs7OztLQU1LOztFQUVMO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7RUFDQSxVQUFVOztFQUNWO0VBQ0UsVUFBVTtBQUNaOztFQUVBLFVBQVU7O0VBQ1Y7RUFDRSxtQkFBbUI7QUFDckI7O0VBRUEsV0FBVzs7RUFDWDtFQUNFLGdCQUFnQjtBQUNsQjs7RUFFQSxvQkFBb0I7O0VBQ3BCO0VBQ0UsZ0JBQWdCO0FBQ2xCOztFQUNBO0VBQ0UsZUFBZTtBQUNqQjs7RUFDQTtDQUNDLHlCQUF5QjtDQUN6QixZQUFZO0FBQ2I7O0VBQ0E7RUFDRSx5QkFBeUI7RUFDekI7QUFDRjs7RUFFQTtFQUNFLHlCQUF5QjtF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ZWN0cy1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICNsb2FkaW5neyBcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgbGVmdDogNTAlOyBcbiAgdG9wOiA1MCU7IFxuICB6LWluZGV4OiAxOyBcbiAgd2lkdGg6IDE1MHB4OyBcbiAgaGVpZ2h0OiAxNTBweDsgXG4gIG1hcmdpbjogLTc1cHggMCAwIC03NXB4OyBcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IFxuICBib3JkZXItcmFkaXVzOiA1MCU7IFxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7IFxuICB3aWR0aDogMTIwcHg7IFxuICBoZWlnaHQ6IDEyMHB4OyBcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgXG4gIH0gXG4gICAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7IFxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH0gXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gXG4gIH0gKi9cblxuICAubGlzdC1pY29uLWNvbG9ye1xuICAgIGNvbG9yOiAjOTY5Njk2XG4gICB9XG4gIC5sb2FkZXIsXG4gIC5sb2FkZXI6YmVmb3JlLFxuICAubG9hZGVyOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMGRjNWMxO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkMSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb246IGxvYWQxIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIHdpZHRoOiAxZW07XG4gICAgaGVpZ2h0OiA0ZW07XG4gIH1cbiAgLmxvYWRlciB7XG4gICAgY29sb3I6ICMwZGM1YzE7XG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XG4gICAgbWFyZ2luOiA4OHB4IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICB9XG4gIC5sb2FkZXI6YmVmb3JlLFxuICAubG9hZGVyOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGNvbnRlbnQ6ICcnO1xuICB9XG4gIC5sb2FkZXI6YmVmb3JlIHtcbiAgICBsZWZ0OiAtMS41ZW07XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgfVxuICAubG9hZGVyOmFmdGVyIHtcbiAgICBsZWZ0OiAxLjVlbTtcbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBsb2FkMSB7XG4gICAgMCUsXG4gICAgODAlLFxuICAgIDEwMCUge1xuICAgICAgYm94LXNoYWRvdzogMCAwO1xuICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0yZW07XG4gICAgICBoZWlnaHQ6IDVlbTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBsb2FkMSB7XG4gICAgMCUsXG4gICAgODAlLFxuICAgIDEwMCUge1xuICAgICAgYm94LXNoYWRvdzogMCAwO1xuICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0yZW07XG4gICAgICBoZWlnaHQ6IDVlbTtcbiAgICB9XG4gIH1cbiAgLmNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbiAgLm1vZGFsIC5tb2RhbC1jb250ZW50IHtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4vKiBcbiAgdGFibGUsIHRoLCB0ZCB7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG4gIHRhYmxlIHtcbiAgICBib3JkZXItc3BhY2luZzogMTVweDtcbiAgfSAqL1xuXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51e1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRvcDogMzhweCAhaW1wb3J0YW50O1xuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi8qIHdpZHRoICovXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG59XG5cbi8qIFRyYWNrICovXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi8qIEhhbmRsZSAqL1xuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbi5zaGFyZWRkZXRhaWxzLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU1NTtcbn1cbi5uZ3gtcGFnaW5hdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbiNiYWNrQnRuOmhvdmVye1xuIGJhY2tncm91bmQtY29sb3I6IzU4NjdkZCA7XG4gY29sb3I6IHdoaXRlOyBcbn1cbiNNZGxfY2xvc2VidG46aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gIGNvbG9yOndoaXRlXG59XG5cbi50ZXh0LXdhcm5pbmctMXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTBhNztcbiAgY29sb3I6I0ZGQTgwMDtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRleHQtZGFuZ2VyLTF7XG4gIGNvbG9yOiAjRjY0RTYwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFMkU1O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuZHJvcGRvd24tZG93bixcbi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5kcm9wZG93bi11cHtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNhZGFkYWQgIWltcG9ydGFudDtcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudFxufVxuXG4ubXVsdGlzZWxlY3QtZHJvcGRvd257XG4gIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG5cbn1cbi5rdC10b2RvX19kZXRhaWxze1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb257XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XG4gICAgY29sb3I6ICM1ODY3ZGQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMCA4cHggMCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG5cbi5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uIHN2Zy5rdC1zdmctaWNvbiB7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICB9XG5cbi5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uIHN2Zy5rdC1zdmctaWNvbi5hZGQtaWNvbntcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbn1cblxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiAua3Qtc3ZnLWljb24gZyBbZmlsbF17XG4gICAgZmlsbDogIzU4NjdkZDtcbiAgfVxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24gcGF0aHtcbiAgICBmaWxsOiAjNTg2N2RkO1xuICB9XG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uOmhvdmVyIHN2Zy5rdC1zdmctaWNvbi5hZGQtaWNvbiBwYXRoLFxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbi5hY3RpdmUgc3ZnLmt0LXN2Zy1pY29uLmFkZC1pY29uIHBhdGh7XG4gICAgZmlsbDogI2ZmZjtcbiAgfVxuXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uOmhvdmVyIC5rdC1zdmctaWNvbiBnIFtmaWxsXSxcbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlIC5rdC1zdmctaWNvbiBnIFtmaWxsXXtcbiAgZmlsbDogI2ZmZjtcbn1cblxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbjpob3ZlcixcbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmNhcmQtdGl0bGUgLmZhdm91cml0ZSBpe1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI2NjYztcbiAgfVxuICAuY2FyZC10aXRsZSAuZmF2b3VyaXRlLmFjdGl2ZSBpLFxuICAuY2FyZC10aXRsZSAuZmF2b3VyaXRlOmhvdmVyIGl7XG4gICAgY29sb3I6ICNmZmMxMDc7XG4gIH1cblxuICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGR7XG4gICAgYm9yZGVyLWNvbG9yOiAjZDZkNmQ2O1xuICB9XG5cbiAgLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLnN1Y2Nlc3Mge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzFkYzliNztcbiAgICAvKiBib3JkZXItcmFkaXVzOiA0cHg7ICovXG59XG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQud2FybmluZyB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZiODIyOyBcbn1cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5pbmZvIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyNzg2ZmI7IFxufVxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLmRhbmdlciB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRjU4QThCOyBcbn1cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5VbmRlckFwcHJvdmFscyB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0JEODM4QzsgXG59XG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuRm9yd2FyZFVuZGVyQXBwcm92YWwge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7IFxufVxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLmNvbXBsZXRlVW5kZXJBcHByb3ZhbCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZjsgXG59XG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQucHJvamVjdEhvbGQge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNDMEI1REM7IFxufVxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLkhvbGR1bmRlckFwcCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E4NTA5ODsgXG59XG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuRGVhZGxpbmVFeHRlbmRlZHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3OyBcbn1cbi5kZWxheURheXN7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsgZyBbZmlsbF0ge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuOTMsIDAuMzUsIDEsIDEpO1xuICBmaWxsOiAjNUU1RjYzO1xufVxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsge1xuICBwYWRkaW5nOiAwLjJyZW0gMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLm1haWwtZHJvcGRvd24ge1xuICB3aWR0aDogODAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5tYWlsLWRyb3Bkb3duIHRhYmxlIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5rdC1xdWljay1wYW5lbCAua3QtcG9ydGxldC5rdC1wb3J0bGV0LS1oZWFkLWxnIC5rdC1wb3J0bGV0X19oZWFkIHtcbiAgbWluLWhlaWdodDogNjBweDtcbn1cbi5rdC1pbmJveF9faWNvbiAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1tZW51LXNtIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLmRyb3Bkb3duLXJlcGx5IHVsIGxpIGEgLmt0LW5hdl9fbGluay1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG59XG4ua3QtaW5ib3ggLmt0LWluYm94X19mb3JtIC5rdC1pbmJveF9fYm9keSAua3QtaW5ib3hfX3RvIC5rdC1pbmJveF9fZmllbGQgLmt0LWluYm94X19sYWJlbCB7XG4gIHdpZHRoOiA2MHB4O1xufVxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9faW5wdXQgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5rdC1uYXZfX2xpbmstbm9ob3Zlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogYXV0bztcbn1cbi5rdC1uYXZfX2xpbmstdGV4dDpob3ZlciB7XG4gIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XG59XG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTAwLCAxNDIsIDAuMik7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay10ZXh0LFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay10ZXh0LFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay10ZXh0LFxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93IHtcbiAgY29sb3I6ICMzMzM7XG59XG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLXVuaWZpZWQtYnJhbmQge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZDogcmdiKDE5NSwgMTk1LCAxOTUpO1xufVxuLyogLmluYm94LXRleHQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogNjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSAqL1xuLmt0LXF1aWNrLXBhbmVsMiB7XG4gIHdpZHRoOiA2NTBweCAhaW1wb3J0YW50O1xufVxuLmt0LXF1aWNrLXBhbmVsLS1yaWdodCAua3QtcXVpY2stcGFuZWwge1xuICByaWdodDogLTY2MHB4O1xuICBsZWZ0OiBhdXRvO1xufVxuLyogd2lkdGggKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XG59XG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU1NTtcbn1cbi8qIC5zb21lY2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGRpc3BsYXk6IG5vbmU7XG59ICovXG4vKiA6aG9zdCguc29tZUNsYXNzKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0gKi9cbi5rdC1pbmJveCAua3QtaW5ib3hfX2ljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG59XG5cbi5jaGF0Y291bnQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLmt0LWJhZGdlLmt0LWJhZGdlLS1kYXJrIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQ6ICM4QzhEOTI7XG59XG4ua3QtaW5ib3ggLmt0LWluYm94X19hc2lkZSAua3QtaW5ib3hfX25hdiAua3QtbmF2IC5rdC1uYXZfX2l0ZW0gLmt0LW5hdl9fbGluayBnIFtmaWxsXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4zcyBjdWJpYy1iZXppZXIoMC45MywgMC4zNSwgMSwgMSk7XG4gIGZpbGw6ICM1RTVGNjM7XG59XG4ua3QtaW5ib3ggLmt0LWluYm94X19hc2lkZSAua3QtaW5ib3hfX25hdiAua3QtbmF2IC5rdC1uYXZfX2l0ZW0gLmt0LW5hdl9fbGluayB7XG4gIHBhZGRpbmc6IDAuMnJlbSAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ua3QtZm9udC1SZXBseVJlcXVpcmVkIHtcbiAgY29sb3I6ICNhNmMgIWltcG9ydGFudDtcbn1cbi5tYWlsLWRyb3Bkb3duIHtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ubWFpbC1kcm9wZG93biB0YWJsZSB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4ua3QtcXVpY2stcGFuZWwgLmt0LXBvcnRsZXQua3QtcG9ydGxldC0taGVhZC1sZyAua3QtcG9ydGxldF9faGVhZCB7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG59XG4ua3QtaW5ib3hfX2ljb24gLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVudS1zbSB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5kcm9wZG93bi1yZXBseSB1bCBsaSBhIC5rdC1uYXZfX2xpbmstaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9fbGFiZWwge1xuICB3aWR0aDogNjBweDtcbn1cbi5rdC1pbmJveCAua3QtaW5ib3hfX2Zvcm0gLmt0LWluYm94X19ib2R5IC5rdC1pbmJveF9fdG8gLmt0LWluYm94X19maWVsZCAua3QtaW5ib3hfX2lucHV0IGlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ua3QtbmF2X19saW5rLW5vaG92ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzc0Nzg4RCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IGF1dG87XG59XG4ua3QtbmF2X19saW5rLXRleHQ6aG92ZXIge1xuICBjb2xvcjogIzc0Nzg4RCAhaW1wb3J0YW50O1xufVxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmssXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmssXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTQsIDEwMCwgMTQyLCAwLjIpO1xuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93LFxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyB7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmt0LWJhZGdlLmt0LWJhZGdlLS11bmlmaWVkLWJyYW5kIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQ6IHJnYigxOTUsIDE5NSwgMTk1KTtcbn1cbi8qIC5pbmJveC10ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDYwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0gKi9cbi5rdC1xdWljay1wYW5lbDIge1xuICB3aWR0aDogNjUwcHggIWltcG9ydGFudDtcbn1cbi5rdC1xdWljay1wYW5lbC0tcmlnaHQgLmt0LXF1aWNrLXBhbmVsIHtcbiAgcmlnaHQ6IC02NjBweDtcbiAgbGVmdDogYXV0bztcbn1cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xufVxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1NTU7XG59XG4vKiAuc29tZWNsYXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBkaXNwbGF5OiBub25lO1xufSAqL1xuLyogOmhvc3QoLnNvbWVDbGFzcykge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59ICovXG4ua3QtaW5ib3ggLmt0LWluYm94X19pY29uIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLWlubGluZSB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDAuMTVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUge1xuICBwYWRkaW5nOiAxN3B4O1xuICB3aWR0aDogMjQzcHg7XG59XG4vKiBTdGF0dXMgQ29sb3JzICovXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3dhcm5pbmd7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2ZmYjgyMjtcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcHJpbWFyeXtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOTViZWQ5O1xufVxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9zdWNjZXNze1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5NWJlZDk7XG59XG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX0RhbmdlcntcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRjU4QThCO1xufVxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9ob2xke1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNjMGI1ZGNcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcmVqZWN0ZWR7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y1YzI5Mztcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfdW5kZXJBcHByb3ZhbHN7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0JEODM4Qztcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfZm9yd2FyZFVuZGVyQXBwcm92YWx7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0UwQjFENztcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfY29tcGxldGVVbmRlckFwcHJvdmFse1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5OGM3YmY7XG59XG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3Byb2plY3RIb2xke1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNDMEI1REM7XG59XG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX05ld1Byb2plY3R7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzAwN2JmZjtcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfRGVhZGxpbmVFeHRlbmRlZHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3O1xufVxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9Ib2xkdW5kZXJBcHB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E4NTA5ODtcbn1cbi5rdC1pbmJveCAua3QtaW5ib3hfX2xpc3Qge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTdweDtcbn1cbi5pY29ucy1maWx0ZXIgLmt0LXRvZG9fX2ljb257XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDI7XG59XG4uaWNvbnMtZmlsdGVyIC5rdC10b2RvX19pY29uIHNwYW57XG4gIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNTg2N2RkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTg2N2RkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTFweDtcbiAgcmlnaHQ6IC0xMXB4O1xuICB6LWluZGV4OiAzO1xufVxuLyogLmljb25zLWZpbHRlciAua3QtdG9kb19faWNvbjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczYTFmNyAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50XG59ICovXG4vKiAuaWNvbnMtZmlsdGVyIC5rdC10b2RvX19pY29uOmhvdmVyIHNwYW57XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDEzNCwgMjUxLCAxKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50XG59ICovXG5cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tdWx0aXNlbGVjdC1kcm9wZG93bltfbmdjb250ZW50LXVuai1jNDBdIC5kcm9wZG93bi1idG5bX25nY29udGVudC11bmotYzQwXXtcbiAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qID09PSBTaWRlYmFyID09PSAqL1xuLnNpZGVJbmZvYmFyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2IzYmNmZjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICAvKiBwYWRkaW5nLXRvcDogNjBweDsgKi9cbn1cbi5zaWRlSW5mb2JhciAua3QtcG9ydGxldF9faGVhZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcbn1cblxuLnNpZGVJbmZvYmFyIC5jbG9zZWJ0biB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Y29sb3I6ICMzMzM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmluZm8taWNvbi1jaXJ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM1ODY3ZGQ7XG59XG5cbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbXtcbiAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgI2RlZGVkZTtcbiAgcGFkZGluZzogNnB4O1xufVxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtLmRhcmt7XG4gIGJvcmRlci1ib3R0b206IDAuMDdyZW0gZGFzaGVkIHJnYmEoMCwwLDAsMC4zKTtcbn1cblxuLyogLmt0LWluYm94X19kYXRldGltZXtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG59ICovXG5cbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbSAua3Qtd2lkZ2V0MV9faW5mbyAua3Qtd2lkZ2V0MV9fdGl0bGV7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uc2lkZUluZm9iYXIgLnRpdGxlLXNpZGViYXJ7XG4gIHdpZHRoOiAyNzBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5jb3VudC1oZWlnaHR7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4vKiAuY291bnQtaGVpZ2h0IC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbntcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XG59ICovXG4uY291bnQtaGVpZ2h0IC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiAua3QtY2hlY2tib3h7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5cbi8qIHdpZHRoICovXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAzcHg7XG59XG5cbi8qIFRyYWNrICovXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi8qIEhhbmRsZSAqL1xuLmNvdW50LWhlaWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbi5jb3VudC1oZWlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuLmRyb3Bkb3duIC5rdC1jaGVja2JveCA+IGlucHV0OmNoZWNrZWQgfiBzcGFue1xuICBib3JkZXItY29sb3I6ICM1ODY3ZGQ7XG59XG4ua3QtY2hlY2tib3ggPiBzcGFuOmFmdGVyIHtcbiAgYm9yZGVyOiBzb2xpZCAjNTg2N2RkO1xufVxuXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbn1cbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnUge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7ICovXG4gICAgdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogLTIycHggIWltcG9ydGFudDtcbn1cbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmlnaHQ6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE1cHg7XG4gIGxlZnQ6IDMycHg7XG4gIHotaW5kZXg6IDEwO1xufVxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1ib3R0b206IDE3cHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJpZ2h0OiAxOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogMTlweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xN3B4O1xuICBsZWZ0OiAzMHB4O1xuICB6LWluZGV4OiA4O1xufVxuXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51MSAuZmlsdGVyLWJveHtcbiAgd2lkdGg6IDMzLjMzMzMlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDEpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCgxKXtcbiAgd2lkdGg6IDMlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMiksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDIpe1xuICB3aWR0aDogNCU7XG59XG4vKiAjcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCgzKSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoMyl7XG4gIHdpZHRoOiA0JTtcbn0gKi9cbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDQpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCgzKXtcbiAgd2lkdGg6IDMzJTtcbn1cbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDUpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg0KXtcbiAgd2lkdGg6IDEwJTtcbn1cbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDYpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg1KXtcbiAgd2lkdGg6IDEyJTtcbn1cbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDcpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg2KXtcbiAgd2lkdGg6IDE1JTtcbn1cbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDgpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg3KXtcbiAgd2lkdGg6IDEyJTtcbn1cblxuLmt0LXF1aWNrLXNlYXJjaCAua3QtcXVpY2stc2VhcmNoX19mb3JtIC5pbnB1dC1ncm91cC1wcmVwZW5kIC5pbnB1dC1ncm91cC10ZXh0LCAua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3VwLWFwcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2U0ZTdmZjsgKi9cbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmt0LXF1aWNrLXNlYXJjaCAua3QtcXVpY2stc2VhcmNoX19mb3JtIC5pbnB1dC1ncm91cHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZGJmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2hvd19lbnRyaWVzIHNwYW57XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gXG59XG4uc2hvd19lbnRyaWVzIHNlbGVjdHtcbiAgLyogd2lkdGg6IDEwMHB4OyAqL1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDg4LCAxMDMsIDIyMSwgMC4zKTtcbiAgY29sb3I6ICM1ODY3ZGQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY291bnQtYnRue1xuICAvKiBoZWlnaHQ6IDI1cHg7ICovXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7ICovXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogcmdiKDg4LCA4OCwgODgpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuLyogU2VhcmNoIFByb2plY3RzICovXG4ua3QtaW5ib3ggLmt0LWluYm94X190b29sYmFyIC5rdC1pbmJveF9fc2VhcmNoIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjc7XG59XG4uaW5wdXQtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZCwgLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kLXNob3J0e1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOWZmOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMjV2dztcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZGJmZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQgLmZvcm0tY29udHJvbCwgLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kLXNob3J0IC5mb3JtLWNvbnRyb2x7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmM7XG59XG5cbi8qIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uLmFjdGl2ZSAgKi9cblxuLyogLnZhbGlub29ye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udmFsaW5vb3I6OmJlZm9yZXtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufSAqL1xuXG4ua3QtaW5ib3ggLmt0LWluYm94X19saXN0IC5rdC1pbmJveF9faXRlbXMgLmt0LWluYm94X19pdGVte1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGVsZXRlLWJ0bntcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAgcmlnaHQ6IDBweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNztcbiAgICBjb2xvcjogZ3JleTtcbiAgICBsaW5lLWhlaWdodDogNjNweDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgIWltcG9ydGFudDtcbn1cbi5kZWxldGUtYnRuIGl7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XG4gIGNvbG9yOiAjNTg2N2RkO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMTBweCA4cHggMCAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi8qIC5kZWxldGUtYnRuIGl7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UgIWltcG9ydGFudDtcbn0qL1xuLmJ0bi1zZWNvbmRhcnkudGhlbWUtYnRue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5idG4uYnRuLWxhYmVsLXByaW1hcnl7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XG59XG5cbi5kZWxldGUtYnRuIGk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5rdC1pbmJveF9faXRlbTpob3ZlciAuZGVsZXRlLWJ0bntcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuLyogTmV3IGRlc2lnbiBDU1MgIGZyb20gSGVyZS4uLiAqL1xuLm5hbWUtYm94e1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5uYW1lcy1yZXNwb25zZXtcbiAgZGlzcGxheSA6aW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubmFtZXMtcmVzcG9uc2Ugc3BhbjpmaXJzdC1jaGlsZHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5uYW1lcy1yZXNwb25zZSBzcGFuOmxhc3QtY2hpbGR7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5oZWFkLWJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OCwgMTAzLCAyMjEsIDAuMSk7XG4gICAgcGFkZGluZzogM3B4IDEwcHggM3B4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uaGVhZC1idG4gaXtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogIzU4NjdkZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4uZGV2aWRlcntcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4ucHJpY2V2YWx1ZXMge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMWYxZjE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuXG4udG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDEpLCAudG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDIpICB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgzKSwgLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSAge1xuICBib3JkZXItYm90dG9tOiBub25lXG59XG5cbi5wcmljZXZhbHVlczpudGgtY2hpbGQoMiksIC5wcmljZXZhbHVlczpudGgtY2hpbGQoNCkge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cblxuXG4uZG1zLWxpbmtze1xuICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG59XG5cbi5kbXMtbGlua3MgbGkgYXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi8qID09PT09PT09PSBQcm9ncmVzcyBCYXIgPT09PT09PT09ICovXG5cbi5wcm9ncmVzc19iYXIgLnByby1iYXIge1xuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDk3JSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCBoc2xhKDAsIDAlLCAwJSwgMC4xKSBpbnNldDtcbiAgaGVpZ2h0OiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfYmFyX3RpdGxlIHtcbiAgY29sb3I6IGhzbCgyMTgsIDQlLCA1MCUpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjhweDtcbiAgei1pbmRleDogMTtcbn1cblxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfbnVtYmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg4JSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgbGluZWFyIDBzO1xufVxuXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMXB4O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzLWJhci1pbm5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTRweDtcbiAgdG9wOiAtNXB4O1xufVxuXG4uYmctdG9kYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQyYmYwICFpbXBvcnRhbnQ7XG59XG5cbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDIpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCgyKSB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5ke1xuICAgIHdpZHRoOiA4MHZ3O1xuICB9XG59XG5zcGFuLmNvdW50MiB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZGVlY2Y4O1xuICBjb2xvcjogIzI3ODZmYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app__LayoutDashboard_projects-add_projects-add_component_ts.js.map