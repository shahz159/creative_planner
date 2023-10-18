"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["default-src_app__LayoutDashboard_projects-summary_projects-summary_component_ts"],{

/***/ 81802:
/*!***********************************************!*\
  !*** ./src/app/Shared/DateAgo/DateAgoPipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateAgoPipe": () => (/* binding */ DateAgoPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DateAgoPipe {
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
DateAgoPipe.ɵfac = function DateAgoPipe_Factory(t) { return new (t || DateAgoPipe)(); };
DateAgoPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateAgo", type: DateAgoPipe, pure: true });


/***/ }),

/***/ 80880:
/*!*********************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/projects-summary/projects-summary.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsSummaryComponent": () => (/* binding */ ProjectsSummaryComponent)
/* harmony export */ });
/* harmony import */ var src_app_Models_dropdown_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_Models/dropdown-dto */ 79536);
/* harmony import */ var src_app_Models_portfolio_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/portfolio-dto */ 60198);
/* harmony import */ var src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Models/user-details-dto */ 12359);
/* harmony import */ var src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Models/completed-projects-dto */ 60808);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var src_app_Models_approval_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Models/approval-dto */ 62424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_Services/link.service */ 33529);
/* harmony import */ var src_app_Services_parameter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_Services/parameter.service */ 95636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ 77585);
/* harmony import */ var src_app_Services_approvals_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_Services/approvals.service */ 18810);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _sort_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sort.directive */ 67848);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var src_app_Shared_DateAgo_DateAgoPipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/Shared/DateAgo/DateAgoPipe */ 81802);




//import { LoadingBarService } from '@ngx-loading-bar/core';
















function ProjectsSummaryComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r0.CurrentPageNo, " - ", ctx_r0._CurrentpageRecords, " ");
} }
function ProjectsSummaryComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r1._CurrentpageRecords * (ctx_r1.CurrentPageNo - 1) + 1, " - ", ctx_r1._CurrentpageRecords * ctx_r1.CurrentPageNo, " ");
} }
function ProjectsSummaryComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r2.lastPagerecords * (ctx_r2.CurrentPageNo - 1) + 1, " - ", ctx_r2.lastPagerecords * (ctx_r2.CurrentPageNo - 1) + ctx_r2._CurrentpageRecords, " ");
} }
function ProjectsSummaryComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r3._totalProjectsCount.toLocaleString(), "");
} }
function ProjectsSummaryComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r4._totalProjectsCount, "");
} }
function ProjectsSummaryComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 126)(1, "label", 127)(2, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function ProjectsSummaryComponent_div_67_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16); const item_r13 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r15.isTypeChecked(item_r13)); })("ngModelChange", function ProjectsSummaryComponent_div_67_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16); const item_r13 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](item_r13.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", item_r13.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r13.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r13.Count);
} }
function ProjectsSummaryComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 126)(1, "label", 130)(2, "input", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function ProjectsSummaryComponent_div_74_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r20); const item_r18 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r19.isStatusChecked(item_r18)); })("ngModelChange", function ProjectsSummaryComponent_div_74_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r20); const item_r18 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](item_r18.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", item_r18.checked)("checked", item_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r18.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r18.Count);
} }
function ProjectsSummaryComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 126)(1, "label", 130)(2, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectsSummaryComponent_div_76_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r22.isChecked = $event); })("click", function ProjectsSummaryComponent_div_76_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r24.onCheckboxClick(ctx_r24.Type)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r7.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r7.cancelcount);
} }
function ProjectsSummaryComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 126)(1, "label", 130)(2, "input", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function ProjectsSummaryComponent_div_82_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27); const item_r25 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r26.isEmpChecked(item_r25)); })("ngModelChange", function ProjectsSummaryComponent_div_82_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27); const item_r25 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](item_r25.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", item_r25.checked)("checked", item_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r25.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r25.Count);
} }
function ProjectsSummaryComponent_span_274_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("About (", ctx_r9._CurrentpageRecords, ") results found");
} }
function ProjectsSummaryComponent_tr_309_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "a", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_tr_309_div_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r73); const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r71._OpenMemosInfo(item_r29.Project_Code, item_r29.Project_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "img", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function ProjectsSummaryComponent_tr_309_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Actioncount);
} }
function ProjectsSummaryComponent_tr_309_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "No category");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.ReportType);
} }
function ProjectsSummaryComponent_tr_309_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.SubmissionType1);
} }
function ProjectsSummaryComponent_tr_309_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](2, 1, item_r29.DeadLine, "dd-MM-yyyy"), "");
} }
function ProjectsSummaryComponent_tr_309_a_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 163)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Owner:", item_r29.Project_Owner, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Owner);
} }
function ProjectsSummaryComponent_tr_309_a_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 163)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Owner & Support: ", item_r29.Project_Owner, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Owner);
} }
function ProjectsSummaryComponent_tr_309_a_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 163)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Responsible: ", item_r29.Team_Res, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Resp);
} }
function ProjectsSummaryComponent_tr_309_a_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 163)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Authority: ", item_r29.Team_Autho, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Autho);
} }
function ProjectsSummaryComponent_tr_309_a_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 163)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Responsible & Authority: ", item_r29.Team_Autho, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Autho);
} }
function ProjectsSummaryComponent_tr_309_a_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 163)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Support: ", item_r29.Team_Support, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Support);
} }
function ProjectsSummaryComponent_tr_309_a_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 164)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "1+");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Coordinator & Informer: ", item_r29.Team_Coor, " ");
} }
function ProjectsSummaryComponent_tr_309_a_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 164)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "1+");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate2"]("title", "Coordinator: ", item_r29.Team_Coor, " & Informer: ", item_r29.Team_Informer, " ");
} }
function ProjectsSummaryComponent_tr_309_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_50_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 168)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r29.Delaydays, " days");
} }
function ProjectsSummaryComponent_tr_309_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Delay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ProjectsSummaryComponent_tr_309_div_50_span_3_Template, 3, 1, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Delaydays > 0);
} }
function ProjectsSummaryComponent_tr_309_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "ToDo InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "ToDo Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "New Todo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Completion Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Cancellation Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Cancelled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Forward Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Project Complete Rejected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Enactive Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Version ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Deadline Extend Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Hold ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Project Hold Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "ToDo Achieved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Standardtask Enactive Hold ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_309_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr", 133)(1, "td", 134)(2, "a", 135)(3, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_tr_309_Template_i_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r90); const item_r29 = restoredCtx.$implicit; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r89.openInfo(item_r29.Project_Code, item_r29.Project_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "a", 137)(5, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_tr_309_Template_i_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r90); const item_r29 = restoredCtx.$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r91.moreDetails(item_r29.Project_Code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, ProjectsSummaryComponent_tr_309_div_7_Template, 3, 0, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, ProjectsSummaryComponent_tr_309_ng_template_8_Template, 2, 0, "ng-template", null, 140, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "td")(11, "p", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, ProjectsSummaryComponent_tr_309_span_13_Template, 2, 1, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "td")(15, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, ProjectsSummaryComponent_tr_309_div_18_Template, 3, 0, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, ProjectsSummaryComponent_tr_309_ng_template_19_Template, 2, 1, "ng-template", null, 144, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "td")(22, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, ProjectsSummaryComponent_tr_309_div_25_Template, 3, 1, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](26, ProjectsSummaryComponent_tr_309_ng_template_26_Template, 3, 4, "ng-template", null, 145, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](32, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "td", 148)(34, "div", 149)(35, "div", 150)(36, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](37, ProjectsSummaryComponent_tr_309_a_37_Template, 3, 2, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](38, ProjectsSummaryComponent_tr_309_a_38_Template, 3, 2, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](39, ProjectsSummaryComponent_tr_309_a_39_Template, 3, 2, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](40, ProjectsSummaryComponent_tr_309_a_40_Template, 3, 2, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](41, ProjectsSummaryComponent_tr_309_a_41_Template, 3, 2, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](42, ProjectsSummaryComponent_tr_309_a_42_Template, 3, 2, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](43, ProjectsSummaryComponent_tr_309_a_43_Template, 3, 1, "a", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](44, ProjectsSummaryComponent_tr_309_a_44_Template, 3, 2, "a", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "svg", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](47, "path", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "td", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](49, ProjectsSummaryComponent_tr_309_div_49_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](50, ProjectsSummaryComponent_tr_309_div_50_Template, 4, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](51, ProjectsSummaryComponent_tr_309_div_51_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](52, ProjectsSummaryComponent_tr_309_div_52_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](53, ProjectsSummaryComponent_tr_309_div_53_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](54, ProjectsSummaryComponent_tr_309_div_54_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](55, ProjectsSummaryComponent_tr_309_div_55_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](56, ProjectsSummaryComponent_tr_309_div_56_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](57, ProjectsSummaryComponent_tr_309_div_57_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](58, ProjectsSummaryComponent_tr_309_div_58_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](59, ProjectsSummaryComponent_tr_309_div_59_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](60, ProjectsSummaryComponent_tr_309_div_60_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](61, ProjectsSummaryComponent_tr_309_div_61_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](62, ProjectsSummaryComponent_tr_309_div_62_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](63, ProjectsSummaryComponent_tr_309_div_63_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](64, ProjectsSummaryComponent_tr_309_div_64_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](65, ProjectsSummaryComponent_tr_309_div_65_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](66, ProjectsSummaryComponent_tr_309_div_66_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](67, ProjectsSummaryComponent_tr_309_div_67_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](68, ProjectsSummaryComponent_tr_309_div_68_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](69, ProjectsSummaryComponent_tr_309_div_69_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](70, ProjectsSummaryComponent_tr_309_div_70_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](9);
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](20);
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Link_Status == 1)("ngIfElse", _r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r29.Project_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Actioncount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Exec_BlockName);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.ReportType == null)("ngIfElse", _r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Team_Res);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Exec_BlockName == "Standard Tasks" || item_r29.Exec_BlockName == "Routine Tasks")("ngIfElse", _r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](29, 42, item_r29.LastUpdate, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](32, 45, item_r29.LastUpdate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Owner != item_r29.Support);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Owner == item_r29.Support);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Resp != item_r29.Autho);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Resp != item_r29.Autho);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Resp == item_r29.Autho);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Owner != item_r29.Support);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Coord == item_r29.Informer);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Coord != item_r29.Informer);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "ToDo InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "ToDo Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "New Todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "Completion Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "Cancellation Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "Forward Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "Project Complete Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "Enactive Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "Version");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "Project Holded");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "Project Hold Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "ToDo Achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Status == "Standardtask Enactive Hold");
} }
function ProjectsSummaryComponent_div_310_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 174)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r11._filtersMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r11._filtersMessage2);
} }
function ProjectsSummaryComponent_div_326_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r92.Subject, " ");
} }
function ProjectsSummaryComponent_div_326_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "i", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
} if (rf & 2) {
    const item_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r92.Subject, " ");
} }
function ProjectsSummaryComponent_div_326_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 122)(1, "div", 123)(2, "h5", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_div_326_Template_h5_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r100); const item_r92 = restoredCtx.$implicit; const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r99.openUrl(item_r92.Url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ProjectsSummaryComponent_div_326_div_3_Template, 3, 1, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ProjectsSummaryComponent_div_326_ng_template_4_Template, 2, 1, "ng-template", null, 175, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r92 = ctx.$implicit;
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r92.Attachment == true)("ngIfElse", _r95);
} }
//import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
// import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
//import { ViewChild } from '@angular/core';
class ProjectsSummaryComponent {
    constructor(service, _LinkService, ShareParameter, 
    // private loadingBar: LoadingBarService,
    router, BsService, approvalservice, notifyService) {
        this.service = service;
        this._LinkService = _LinkService;
        this.ShareParameter = ShareParameter;
        this.router = router;
        this.BsService = BsService;
        this.approvalservice = approvalservice;
        this.notifyService = notifyService;
        // maskEditorAppliedMessage: string;
        // @ViewChild('popOver') public popover: NgbPopover;
        this.dropdownSettings_Memo = {};
        this.edited = false;
        this.canceledit = false;
        this.searchResult = false;
        this.keyword = 'Subject';
        this._raciDetails = true;
        this.approvalObj = new src_app_Models_approval_dto__WEBPACK_IMPORTED_MODULE_5__.ApprovalDTO();
        this.EmpCountInFilter = [];
        this.TypeContInFilter = [];
        this.StatusCountFilter = [];
        //Declarations//
        this.master_checked = false;
        this.checked = false;
        this.emptyspace = true;
        this.un_FilteredProjects = [];
        this.CurrentPageNo = 1;
        this.type1 = "RACIS Projects";
        this.type2 = "ALL Projects";
        this.isChecked = false;
        this.checkedItems_Status = [];
        this.checkedItems_Type = [];
        this.checkedItems_Emp = [];
        this.selectedItem_Status = [];
        this.selectedItem_Type = [];
        this.selectedItem_Emp = [];
        this._MemosNotFound = "";
        this.clicks = 0;
        this.clicks1 = 0;
        this.A2Z1 = true;
        this.Z2A1 = false;
        this.ObjUserDetails = new src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_2__.UserDetailsDTO();
        this._objDropdownDTO = new src_app_Models_dropdown_dto__WEBPACK_IMPORTED_MODULE_0__.DropdownDTO();
        this.Obj_Portfolio_DTO = new src_app_Models_portfolio_dto__WEBPACK_IMPORTED_MODULE_1__.PortfolioDTO();
        this._ObjCompletedProj = new src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_3__.CompletedProjectsDTO();
    }
    ngOnInit() {
        this._raciDetails = true;
        this.A2Z = true;
        this.Z2A = false;
        this._subtaskDiv = true;
        this.Current_user_ID = localStorage.getItem('EmpNo');
        //  alert(123)
        // this.GetApplicationDetails();
        this.router.navigate(["/backend/ProjectsSummary/"]);
        this.GetProjectsByUserName(this.type1);
        //this.portfolioName = localStorage.getItem('_PortfolioName');
    }
    GetMemosByEmployeeId() {
        this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
            subscribe((data) => {
            this.Memos_List = JSON.parse(data['JsonData']);
            this._ActualMemoslist = JSON.parse(data['JsonData']);
            // console.log("Actual Memo List By EmpId--->", this._ActualMemoslist)
            this._totalMemos = this._ActualMemoslist.length;
            // console.log("Memos List", JSON.parse(data['JsonData']));
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
    _onRowClick(projectCode, ProjName) {
        this._SelectedIdsfromDb = [];
        this.Selected_Projectcode = projectCode;
        // console.log("projt Code------->",projectCode);
        this._displayProjName = ProjName;
        this.GetMemosByEmployeeId();
        this._LinkService._GetOnlyMemoIdsByProjectCode(projectCode).
            subscribe((data) => {
            let Table_data = data;
            // console.log("Memos Id Form DB--->", data);
            if (Table_data.length > 0) {
                this._JsonString = JSON.stringify(data[0]['JsonData']);
                //console.log("Memos Ids-------->", (this._JsonString));
                this._dbMemoIdList = JSON.parse(data[0]['JsonData']);
                let arr1 = this._ActualMemoslist;
                // console.log("Actula Memo List On Row Click--->", this._ActualMemoslist);
                let arr2 = this._dbMemoIdList;
                this._SelectedIdsfromDb = underscore__WEBPACK_IMPORTED_MODULE_4__.map(arr2, (d) => { return d.MailId; });
                //Rejecting Same Ids 
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
                //   // console.log("On Row Click----selectedIdfrom DB---->",this._SelectedIdsfromDb);
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
    GetApplicationDetails() {
        let AppData;
        this._LinkService.GetApplicationDetails().
            subscribe((data) => {
            AppData = JSON.parse(data[0]['ApplicationDetails_Json']);
            // console.log(AppData);
            this._ApplicationId = AppData[0]['Application_Id'];
            this._ApplicationName = AppData[0]['Application_Name'];
            this._ApplicationUrl = AppData[0]['Api_Url'];
            this._AppIcon = AppData[0]['Icon'];
            sessionStorage.setItem("_AppUrl", this._ApplicationUrl);
            //console.log(this._ApplicationUrl);
        });
    }
    Memo_Select(selecteditems) {
        //console.log("Selected Item---->",selecteditems)
        let arr = [];
        this.Empty_MemoDropdown = selecteditems;
        // console.log("Before ForEach data Selected Memos---->",this.Empty_MemoDropdown,)
        this.Empty_MemoDropdown.forEach(element => {
            arr.push({ MailId: element.MailId });
            this._SelectedMemos = arr;
        });
        //console.log("Selected Memos In Array--->", arr)
    }
    Memo_Deselect() {
        let arr = [];
        this.Empty_MemoDropdown = this.ngDropdwonMemo;
        this.Empty_MemoDropdown.forEach(element => {
            arr.push({ MailId: element.MailId });
            this._SelectedMemos = arr;
        });
        //console.log("Deselect Memos--->", this._SelectedMemos)
    }
    // search(value: string) { 
    //   let filter = value.toLowerCase();
    //   return this.Memos_List.filter(option => option.toLowerCase().startsWith(filter));
    // }
    // onKey(value) { 
    //   this.Memos_List = this.search(value);
    //   }
    deleteMemos(memoId, pcode) {
        this._MemosSubjectList = [];
        let _DeleteSelectedMemo = [];
        _DeleteSelectedMemo.push({ MailId: memoId });
        //_DeleteList.push(pcode);
        //console.log("---->Delete Memo",_DeleteSelectedMemo);
        let arr1 = this._DBMemosIDList;
        let arr2 = _DeleteSelectedMemo;
        let result = arr1.filter(o1 => !arr2.some(o2 => o1.MailId === o2.MailId));
        //console.log("Final Result ----->",result);
        this._DBMemosIDList = underscore__WEBPACK_IMPORTED_MODULE_4__.map(arr2, (d) => { return d.MailId; });
        this.memoId = JSON.stringify(result);
        //console.log("-----Final O/p--->", this.memoId);
        let appId = 101;
        let UserId = this.Current_user_ID;
        this._LinkService.InsertMemosOn_ProjectCode(pcode, appId, this.memoId, UserId).
            subscribe((data) => {
            // this._OpenMemosInfo(pcode,this.pName);
            //this.GetProjectsByUserName();
            let Returndata = data['Message'];
            this.UpdateMemos(pcode);
            this.notifyService.showInfo("", Returndata);
        });
    }
    UpdateMemos(pcode) {
        this._LinkService._GetOnlyMemoIdsByProjectCode(pcode).
            subscribe((data) => {
            let Table_data = data;
            //console.log("Linked Db Memos Data---->",data[0]['JsonData']);
            if (Table_data.length > 0) {
                this._MemosNotFound = "";
                this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
                // console.log("List----->",this._dbMemoIdList)
                this._JsonString = data[0]['JsonData'];
                this._LinkService._GetMemosSubject(this._JsonString).
                    subscribe((data) => {
                    //console.log("------------>", data);
                    this._MemosSubjectList = JSON.parse(data['JsonData']);
                    //console.log("Subject Name ------------>", this._MemosSubjectList);
                });
            }
            else {
                this._MemosSubjectList = [];
                this._MemosNotFound = "No memos linked";
            }
        });
    }
    _AddLink() {
        let _ProjectCode = this.Selected_Projectcode;
        let appId = 101; //this._ApplicationId;
        //console.log("selected Memos From Dropdown-->", this._SelectedMemos);
        if (this._SelectedIdsfromDb > 0 || this._SelectedIdsfromDb != undefined) {
            // console.log("Table Ids-->", this._SelectedIdsfromDb);
            this.memoId = JSON.stringify(this._SelectedIdsfromDb.concat(this._SelectedMemos));
            // console.log("After Joins Final Output=======>", this.memoId);
        }
        else {
            this.memoId = JSON.stringify(this._SelectedMemos);
            // console.log("Ëlse Block...Executed---->", this.memoId);
        }
        let UserId = this.Current_user_ID;
        if (this._SelectedMemos.length > 0) {
            this._LinkService.InsertMemosOn_ProjectCode(_ProjectCode, appId, this.memoId, UserId).
                subscribe((data) => {
                this.UpdateMemos(this.pCode);
                //this.GetProjectsByUserName();
                let Returndata = data['Message'];
                this.notifyService.showSuccess("", Returndata);
                this.ngDropdwonMemo = [];
                this._SelectedMemos = [];
            });
        }
        else {
            this.notifyService.showInfo("Request Cancelled", "Please select memo(s) to link");
        }
        this.closeLinkSideBar();
    }
    onFocused(e) {
        // do something when input is focused
    }
    onCheckboxClick(type) {
        this.edited = false;
        // Update the isChecked property whenever the checkbox is clicked
        this.isChecked = !this.isChecked;
        if (this.isChecked == true) {
            this.edited = true;
        }
        else {
            this.edited = false;
        }
        this.GetProjectsByUserName(type);
        // this.getDropdownsDataFromDB();
        // this.applyFilters();
        // alert(this.isChecked);
    }
    GetProjectsByUserName(type) {
        this.Type = type;
        this.BsService.setProjectSummaryType(type);
        if (this.Type == 'ALL Projects') {
            this.ObjUserDetails.PageNumber = this.CurrentPageNo;
            this.ObjUserDetails.PageSize = 30;
            if (this.isChecked == true) {
                this.ObjUserDetails.ActiveStatus = "Inactive";
            }
            else {
                this.ObjUserDetails.ActiveStatus = "Active";
            }
            this.service.GetProjectsByUserName_Service_ForSummary(this.ObjUserDetails).subscribe(data => {
                this._ProjectDataList = data;
                console.log("Summary Data---->", this._ProjectDataList);
                this.ActualDataList = data;
                this.cancelcheck = this.ActualDataList[0]['cancel'];
                this.cancelcount = this.ActualDataList[0]['cancelcount'];
                if (this._ProjectDataList.length > 0) {
                }
                this.un_FilteredProjects = this.ActualDataList;
                if (this._ProjectDataList) {
                    this._CurrentpageRecords = this._ProjectDataList.length;
                }
                if (this._ProjectDataList.length == 0) {
                    this._filtersMessage = "No more projects matched your search";
                    this._filtersMessage2 = " Clear the filters & try again";
                    this.emptyspace = false;
                }
                else {
                    this._filtersMessage = "";
                    this._filtersMessage2 = "";
                    this.emptyspace = true;
                }
                this.getDropdownsDataFromDB();
            });
        }
        else if (this.Type == 'RACIS Projects') {
            this.ObjUserDetails.PageNumber = this.CurrentPageNo;
            this.ObjUserDetails.PageSize = 30;
            if (this.isChecked == true) {
                this.ObjUserDetails.ActiveStatus = "Inactive";
            }
            else {
                this.ObjUserDetails.ActiveStatus = "Active";
            }
            this.service.GetProjectsByOwner_Service_ForSummary(this.ObjUserDetails).subscribe(data => {
                this._ProjectDataList = data;
                console.log("Summary Data---->", this._ProjectDataList);
                this.ActualDataList = data;
                this.cancelcheck = this.ActualDataList[0]['cancel'];
                this.cancelcount = this.ActualDataList[0]['cancelcount'];
                if (this._ProjectDataList.length > 0) {
                }
                this.un_FilteredProjects = this.ActualDataList;
                if (this._ProjectDataList) {
                    this._CurrentpageRecords = this._ProjectDataList.length;
                }
                if (this._ProjectDataList.length == 0) {
                    this._filtersMessage = "No more projects matched your search";
                    this._filtersMessage2 = " Clear the filters & try again";
                    this.emptyspace = false;
                }
                else {
                    this._filtersMessage = "";
                    this._filtersMessage2 = "";
                    this.emptyspace = true;
                }
                this.getDropdownsDataFromDB();
            });
        }
    }
    getDropdownsDataFromDB() {
        if (this.Type == 'ALL Projects') {
            this._objDropdownDTO.EmpNo = this.Current_user_ID;
            this._objDropdownDTO.Selected_ProjectType = this.selectedType_String;
            this._objDropdownDTO.Selected_Status = this.selectedStatus_String;
            this._objDropdownDTO.SelectedEmp_No = this.selectedEmp_String;
            this._objDropdownDTO.Selected_SearchText = this.searchText;
            if (this.isChecked == true) {
                this._objDropdownDTO.ActiveStatus = "Inactive";
            }
            else {
                this._objDropdownDTO.ActiveStatus = "Active";
            }
            // this._objDropdownDTO.PortfolioId = null;
            this.service.GetDropDownsData_ForSummary(this._objDropdownDTO)
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
                this.count_LinkedProjects = this._totalProjectsCount[0]['TotalLinked'];
                this._totalProjectsCount = this._totalProjectsCount[0]['TotalProjects'];
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
                //  console.log(this._totalProjectsCount, this._CurrentpageRecords,this.LastPage,this.lastPagerecords,"drop" );
            });
        }
        else if (this.Type == 'RACIS Projects') {
            this._objDropdownDTO.EmpNo = this.Current_user_ID;
            this._objDropdownDTO.Selected_ProjectType = this.selectedType_String;
            this._objDropdownDTO.Selected_Status = this.selectedStatus_String;
            this._objDropdownDTO.SelectedEmp_No = this.selectedEmp_String;
            this._objDropdownDTO.Selected_SearchText = this.searchText;
            if (this.isChecked == true) {
                this._objDropdownDTO.ActiveStatus = "Inactive";
            }
            else {
                this._objDropdownDTO.ActiveStatus = "Active";
            }
            // this._objDropdownDTO.PortfolioId = null;
            this.service.GetDropDownsOwnerData_ForSummary(this._objDropdownDTO)
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
                this.count_LinkedProjects = this._totalProjectsCount[0]['TotalLinked'];
                this._totalProjectsCount = this._totalProjectsCount[0]['TotalProjects'];
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
                // console.log(this._totalProjectsCount, this._CurrentpageRecords,this.LastPage,this.lastPagerecords );
            });
        }
    }
    isStatusChecked(item) {
        let arr = [];
        this.edited = true;
        this.canceledit = true;
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
        if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0 && this.selectedItem_Emp.length == 0) {
            this.edited = false;
            this.canceledit = false;
        }
        else {
            this.edited = true;
            // this.canceledit = true;
        }
    }
    isTypeChecked(item) {
        let arr = [];
        this.edited = true;
        this.canceledit = true;
        console.log(this.TypeContInFilter, "type");
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
        if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0 && this.selectedItem_Emp.length == 0) {
            this.edited = false;
            this.canceledit = false;
        }
        else {
            this.edited = true;
        }
    }
    isEmpChecked(item) {
        let arr = [];
        this.edited = true;
        this.canceledit = true;
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
            this.canceledit = false;
        }
        else {
            this.edited = true;
        }
    }
    //Apply Filters
    SearchbyText() {
        if (this.searchText == '') {
            this.searchResult = false;
            this.CurrentPageNo = 1;
            this.applyFilters();
        }
        else {
            this.searchResult = true;
            this.CurrentPageNo = 1;
            this.applyFilters();
        }
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
        if (this.Type == 'ALL Projects') {
            //console.log(this.checkedItems_Status, this.checkedItems_Type, this.checkedItems_Emp);
            this.ObjUserDetails.SelectedStatus = this.selectedStatus_String;
            this.ObjUserDetails.SelectedEmp_No = this.selectedEmp_String;
            this.ObjUserDetails.SelectedBlock_No = this.selectedType_String;
            this.ObjUserDetails.PageNumber = this.CurrentPageNo;
            this.ObjUserDetails.PageSize = 30;
            this.ObjUserDetails.SearchText = this.searchText;
            this.ObjUserDetails.PortfolioId = null;
            if (this.isChecked == true) {
                this.ObjUserDetails.ActiveStatus = "Inactive";
            }
            else {
                this.ObjUserDetails.ActiveStatus = "Active";
            }
            //console.log("string------->", this.selectedType_String, this.selectedEmp_String, this.selectedStatus_String);
            this.service.GetProjectsByUserName_Service_ForSummary(this.ObjUserDetails)
                .subscribe(data => {
                //this._ProjectDataList = JSON.parse(data[0]['Projects_Json']);
                this._ProjectDataList = data;
                this._CurrentpageRecords = this._ProjectDataList.length;
                if (this._ProjectDataList.length == 0) {
                    this._filtersMessage = "No more projects matched your search";
                    this._filtersMessage2 = " Clear the filters & try again";
                    this.emptyspace = false;
                }
                else {
                    this._filtersMessage = "";
                    this._filtersMessage2 = "";
                    this.emptyspace = true;
                }
            });
            //Filtering Checkbox de
            this.getDropdownsDataFromDB();
        }
        else if (this.Type == 'RACIS Projects') {
            this.ObjUserDetails.SelectedStatus = this.selectedStatus_String;
            this.ObjUserDetails.SelectedEmp_No = this.selectedEmp_String;
            this.ObjUserDetails.SelectedBlock_No = this.selectedType_String;
            this.ObjUserDetails.PageNumber = this.CurrentPageNo;
            this.ObjUserDetails.PageSize = 30;
            this.ObjUserDetails.SearchText = this.searchText;
            this.ObjUserDetails.PortfolioId = null;
            if (this.isChecked == true) {
                this.ObjUserDetails.ActiveStatus = "Inactive";
            }
            else {
                this.ObjUserDetails.ActiveStatus = "Active";
            }
            //console.log("string------->", this.selectedType_String, this.selectedEmp_String, this.selectedStatus_String);
            this.service.GetProjectsByOwner_Service_ForSummary(this.ObjUserDetails)
                .subscribe(data => {
                //this._ProjectDataList = JSON.parse(data[0]['Projects_Json']);
                this._ProjectDataList = data;
                this._CurrentpageRecords = this._ProjectDataList.length;
                if (this._ProjectDataList.length == 0) {
                    this._filtersMessage = "No more projects matched your search";
                    this._filtersMessage2 = " Clear the filters & try again";
                    this.emptyspace = false;
                }
                else {
                    this._filtersMessage = "";
                    this._filtersMessage2 = "";
                    this.emptyspace = true;
                }
            });
            this.getDropdownsDataFromDB();
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
    resetAll() {
        this.searchResult = false;
        this.txtSearch = '';
        this.searchText = '';
        this.selectedItem_Type.length = 0;
        this.selectedItem_Status.length = 0;
        this.selectedItem_Emp.length = 0;
        this.isChecked = false;
        this.resetFilters();
    }
    openInfo(pcode, pName) {
        document.getElementById("mysideInfobar").classList.add("kt-quick-panel--on");
        this.router.navigate(["../backend/ProjectsSummary/projectinfo", pcode, "1"]);
        document.getElementById("rightbar-overlay").style.display = "block";
        // document.getElementById("sumdet").classList.add("position-fixed");
        document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    }
    closeInfo() {
        this.Clear_Feilds();
        document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementById("actyInfobar_header").classList.remove("open_sidebar");
        //document.getElementById("sumdet").classList.remove("position-fixed");
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
        this.router.navigate(["/backend/ProjectsSummary/"]);
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
    _CloseMemosidebar() {
        document.getElementById("MemosSideBar").style.width = "0";
    }
    // LoadingBar = this.loadingBar.useRef('http');
    BackBttn() {
        this._ProjectDataList = [];
        this.service.Mode = "";
        // this.LoadingBar.stop();
        this.router.navigate(['/MainDashboard']);
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
    //_ProjectCode:string;
    openUrl(memo_Url) {
        const Url = memo_Url;
        //console.log("Url----------->", memo_Url);
        window.open(Url);
    }
    bttn_RACI() {
        this._raciDetails = !this._raciDetails;
    }
    OpenDARinfo(projCode) {
        this.projCode = projCode;
        this.service._GetDARAchievements(projCode)
            .subscribe((data) => {
            console.log(data, "dar");
            this._DARList = JSON.parse(data[0]['DAR_AchievementJson']);
            if (this._DARList.length) {
                this._DarAchievement = this._DARList[0]['WorkAchieved'] == null ? "Not Found" : this._DARList[0]['WorkAchieved'];
            }
            else {
                this._DarAchievement = "Not Found";
            }
            //console.log(this._DARProjectName)
        });
        document.getElementById("DARSideBar").style.width = "350px";
    }
    _CloseDARSideBar() {
        document.getElementById("DARSideBar").style.width = "0";
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
    moreDetails(pcode) {
        let name = 'MoreDetails';
        var url = document.baseURI + name;
        var myurl = `${url}/${pcode}`;
        var myWindow = window.open(myurl, pcode);
        myWindow.focus();
    }
    AddDms() {
        this._onRowClick(this.pCode, this.pName);
    }
    search(event) {
        if (this.searchText == "") {
            this.searchResult = true;
            this.SearchbyText();
        }
        else {
            this.searchResult = true;
            this.SearchbyText();
        }
        //console.log("Searh Text---->",event)
    }
    getapprovalStats(project_code, status) {
        this.Projectcode = project_code;
        this.Status = status;
        this.approvalObj.Project_Code = project_code;
        this.approvalservice.GetApprovalStatus(this.approvalObj).subscribe((data) => {
            this.requestDetails = data;
            // console.log(this.requestDetails, "req")
            if (this.requestDetails.length > 0) {
                this.requestType = (this.requestDetails[0]['Request_type']);
                this.requestDate = (this.requestDetails[0]['Request_date']);
                this.requestDeadline = (this.requestDetails[0]['Request_deadline']);
                this.approvalEmpId = (this.requestDetails[0]['Emp_no']);
                this.requestComments = (this.requestDetails[0]['Remarks']);
            }
            // console.log(this.approvalEmpId ,this.requestComments,this.requestDate,this.requestDeadline,this.requestType,"request status");
        });
    }
    typeChange() {
        this.comments = "";
        this.commentSelected = "";
    }
    Clear_Feilds() {
        this.selectedType = null;
        this.commentSelected = null;
    }
}
ProjectsSummaryComponent.ɵfac = function ProjectsSummaryComponent_Factory(t) { return new (t || ProjectsSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_6__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_7__.LinkService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_Services_parameter_service__WEBPACK_IMPORTED_MODULE_8__.ParameterService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_9__.BsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_Services_approvals_service__WEBPACK_IMPORTED_MODULE_10__.ApprovalsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_11__.NotificationService)); };
ProjectsSummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: ProjectsSummaryComponent, selectors: [["app-projects-summary"]], decls: 346, vars: 44, consts: [["id", "sumdet", 1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height", "side_view"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi", "mb-2"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "dropdown"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "kt-portlet__head-title", "cursor-pointer", "dropdown-toggle", "select-box"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "main-d"], [3, "ngClass", "click"], [1, "kt-portlet__head-label", "mr-2"], [1, "kt-header__topbar-item", "kt-header__topbar-item--search", "mr-3"], [1, "kt-header__topbar-wrapper"], [1, "kt-quick-search", "kt-quick-search--inline"], [1, "kt-quick-search__form"], [1, "input-group"], ["type", "text", "placeholder", "Search Projects", "autofocus", "", 1, "form-control", "project-search", "kt-quick-search__input", "pl-3", 2, "width", "300px", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "input-group-prepend"], ["type", "submit", 1, "input-group-text", 3, "click"], [1, "flaticon2-search-1"], [1, "mr-3"], [4, "ngIf"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "disabled", "click"], [1, "fas", "fa-angle-left", "mr-0"], [1, "fas", "fa-angle-right", "mr-0"], [1, "mr-1"], ["data-toggle", "kt-tooltip", "title", "Click to sort Asc", 1, "btn", "btn-label-primary", "btn-sm", 3, "hidden", "click"], [1, "fa", "fa-sort-alpha-down-alt", "font-16", "mr-0"], ["data-toggle", "kt-tooltip", "title", "Click to sort Desc", 1, "btn", "btn-label-primary", "btn-sm", 3, "hidden", "click"], [1, "fas", "fa-sort-alpha-up", "font-16", "mr-0"], [1, "stores-sec", "mr-1"], [1, "nav", "navbar-nav", "filters"], ["id", "filtermenu", 1, "dropdown", "mega-dropdown"], ["data-toggle", "dropdown", 3, "ngClass"], [1, "fas", "fa-ellipsis-v", "mr-0"], [1, "dropdown-menu", "mega-dropdown-menu"], [3, "click"], [1, "col-md-10"], [1, "d-inline-block"], [1, "col-md-2"], [1, "col-md-12"], ["type", "text", "placeholder", "Search Filters", 1, "form-control", "kt-quick-search__input", "pl-3", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [1, "col-md-4"], [1, "count-height"], ["class", "d-flex justify-content-between", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-between", 4, "ngIf"], ["data-toggle", "dropdown", 1, "btn", "btn-label-success", "btn-outline-success", "btn-upper", "btn-sm", "btn-bold", "mr-2"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-2", 3, "click"], [1, "btn-group", "d-none"], ["data-toggle", "dropdown", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "filter-dot", "mr-1"], ["id", "div_filters", 1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-fit", "dropdown-width-700", "drop-posn", "filts-dr"], [1, "kt-nav"], [1, "kt-nav__head", "d-flex", "justify-content-between"], [1, "kt-nav__separator"], [1, "kt-nav__item", "px-3", "mb-2"], ["autoFocus", "", "type", "search", "autocomplete", "off", "name", "Search", "placeholder", "Search...", 1, "form-control"], [1, "kt-nav__item", "px-4", "pt-2", 3, "click"], [1, "col-lg-4"], [1, "mb-0"], [1, "height-scroll"], [1, "kt-checkbox", "kt-checkbox--info"], ["type", "checkbox", "name", "companychk", "value", ""], [1, "opts-flx"], [1, "selectd-opts"], [1, "slt-div"], [1, "opt-txt"], ["aria-hidden", "true", 1, "removeButton"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "rmv-icn", "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "px-4", "filt-btns"], [1, "btn", "btn-info", "mr-2", "text-white", "btn-xs"], [1, "btn", "btn-outline-info", "btn-xs", "text-dark-75"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fas", "fa-sync-alt", "mr-0"], [1, "ticks-grad", "mb-3", "mt-3", "d-none"], [1, "col-md-3"], [1, "d-flex", "align-items-center"], [1, ""], [1, "example_icon", 2, "opacity", "1", "transform", "none"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "2", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24"], ["d", "M21.0049 3C21.5572 3 22.0049 3.44772 22.0049 4V9.5C20.6242 9.5 19.5049 10.6193 19.5049 12C19.5049 13.3807 20.6242 14.5 22.0049 14.5V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V14.5C3.38559 14.5 4.50488 13.3807 4.50488 12C4.50488 10.6193 3.38559 9.5 2.00488 9.5V4C2.00488 3.44772 2.4526 3 3.00488 3H21.0049ZM20.0049 5H4.00488V7.968L4.16077 8.04908C5.49935 8.78105 6.42516 10.1735 6.49998 11.7882L6.50488 12C6.50488 13.7042 5.55755 15.1871 4.16077 15.9509L4.00488 16.031V19H20.0049V16.031L19.849 15.9509C18.5104 15.219 17.5846 13.8265 17.5098 12.2118L17.5049 12C17.5049 10.2958 18.4522 8.81287 19.849 8.04908L20.0049 7.968V5ZM16.0049 9V15H8.00488V9H16.0049Z", "fill", "#fff"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "-1 -1 18 18", 1, "bi", "bi-patch-check-fill"], ["d", "M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"], [1, "kt-portlet", "scrollbar1"], [1, "kt-portlet__body", "kt-portlet__body_scroll", "pt-0"], [1, "card", "projects-list", "no-border"], [1, "card-body"], ["id", "project-4_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4", "no-footer"], [1, "col-sm-12"], [1, "table-responsive"], ["role", "grid", 1, "table", "table-hover", "dataTable", "no-footer", "dtr-inline", 2, "width", "0px"], ["role", "row"], ["tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-sort", "ascending", "aria-label", ": activate to sort column descending", 2, "width", "100px"], ["data-order", "desc", "data-name", "Project_Name", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Title &amp; Description: activate to sort column ascending", 1, "curser-pointer", 2, "width", "0px", 3, "appSort", "click"], ["data-toggle", "kt-tooltip", "title", "Click to sort", 1, "mr-2", 3, "hidden"], [1, "fas", "fa-sort-alpha-up"], [1, "fa", "fa-sort-alpha-down-alt"], ["data-order", "desc", "data-name", "Exec_BlockName", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Type: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], [1, "fas", "fa-sort"], ["data-order", "desc", "data-name", "ReportType", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Category: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["data-order", "desc", "data-name", "TM_DisplayName", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "User Name: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["data-order", "desc", "data-name", "DeadLine", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "End Date: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["data-order", "desc", "data-name", "Users", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Users: activate to sort column ascending", 1, "curser-pointer"], ["data-order", "desc", "data-name", "Status", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Status: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["role", "row", "class", "odd", 4, "ngFor", "ngForOf"], ["class", "text-center py-4", "style", "color: lightgrey", 4, "ngIf"], ["id", "MemosSideBar", 1, "sideInfobar", "animate-right"], [1, "kt-portlet__head", "p-3", "bg-primary"], ["href", "javascript:void(0)", 1, "closebtn", "pull-right", "text-white", 3, "click"], [1, "title-sidebar", "mb-0", "text-white"], [1, "curser-pointer"], ["width", "25px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png"], [1, "text-small", "text-white"], [1, "kt-portlet__body", "p-3"], ["id", "accordionExample7", 1, "accordion", "accordion-light", "accordion-svg-icon"], [1, "kt-widget1", "kt-widget1--fit"], ["class", "kt-widget1__item", 4, "ngFor", "ngForOf"], ["id", "DARSideBar", 1, "sideInfobar", "animate-right"], [1, "kt-widget1__item"], [1, "kt-widget1__info", "kt-align-left"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], ["id", "rightbar-overlay", 3, "click"], [1, "d-flex", "justify-content-between"], [1, "kt-checkbox"], ["type", "checkbox", 3, "ngModel", "change", "ngModelChange"], [1, "count-btn"], [1, "kt-checkbox", "mb-3"], ["type", "checkbox", 3, "ngModel", "checked", "change", "ngModelChange"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "click"], ["role", "row", 1, "odd"], ["align", "center"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "Project Info!", 1, "btn", "px-0", "mr-2"], [1, "fa", "fa-info-circle", "info-icon-cir", 3, "click"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "More Info!", 1, "btn", "px-0", "mr-2"], [1, "fa", "fa-chart-bar", "info-icon-cir", 3, "click"], [4, "ngIf", "ngIfElse"], ["not_Linked", ""], [1, "kt-widget__title", "mb-0"], ["class", "count2", 4, "ngIf"], [1, "kt-widget__other"], ["ReportType", ""], ["Projecttype", ""], ["data-toggle", "tooltip", "data-placement", "top", 3, "title"], [1, "kt-widget__other", "text-info"], ["data-toggle", "tooltip", "data-placement", "top", "title", "RACIS"], [1, "kt-widget__details"], [1, "kt-section__content", "kt-section__content--solid"], [1, "kt-media-group"], ["data-toggle", "kt-tooltip", "data-skin", "brand", "data-placement", "top", "data-original-title", "John Myer", "class", "kt-media kt-media--sm kt-media--circle", 3, "title", 4, "ngIf"], ["data-toggle", "kt-tooltip", "data-skin", "brand", "data-placement", "top", "data-original-title", "Micheal York", "class", "kt-media kt-media--sm kt-media--circle", 3, "title", 4, "ngIf"], [1, "pin-icn", "d-none"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pin-angle-fill"], ["d", "M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"], [1, "stat-td"], [1, "curser-pointer", 3, "click"], ["width", "19px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png", "title", "Linked"], ["width", "19px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png", "title", "Not Linked", 1, "black-white"], [1, "count2"], [1, "kt-widget__other", "text-nowrap"], ["data-toggle", "kt-tooltip", "data-skin", "brand", "data-placement", "top", "data-original-title", "John Myer", 1, "kt-media", "kt-media--sm", "kt-media--circle", 3, "title"], ["data-toggle", "kt-tooltip", "data-skin", "brand", "data-placement", "top", "data-original-title", "Micheal York", 1, "kt-media", "kt-media--sm", "kt-media--circle", 3, "title"], [1, "text-info", "font-weight-400"], [1, "text-danger", "font-weight-400"], ["class", "text-danger delayDays", 4, "ngIf"], [1, "text-danger", "delayDays"], [1, "text-warning", "font-weight-400"], [1, "text-primary", "font-weight-400"], [1, "text-cancel", "font-weight-400"], [1, "text-success", "font-weight-400"], [1, "font-weight-400", 2, "color", "#c0b5dc"], [1, "text-center", "py-4", 2, "color", "lightgrey"], ["Onlysubject", ""], [1, "fas", "fa-paperclip", 2, "color", "#A9A9A9"], [1, "fas", "fa-circle"]], template: function ProjectsSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_a_click_10_listener() { return ctx.GetProjectsByUserName(ctx.type1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "RACIS Projects Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_a_click_12_listener() { return ctx.GetProjectsByUserName(ctx.type2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, "ALL Projects Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectsSummaryComponent_Template_input_ngModelChange_20_listener($event) { return ctx.searchText = $event; })("keydown.enter", function ProjectsSummaryComponent_Template_input_keydown_enter_20_listener($event) { return ctx.search($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 17)(22, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_22_listener() { return ctx.SearchbyText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](23, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, ProjectsSummaryComponent_ng_container_25_Template, 2, 2, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](26, ProjectsSummaryComponent_ng_container_26_Template, 2, 2, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](27, ProjectsSummaryComponent_ng_container_27_Template, 2, 2, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](29, ProjectsSummaryComponent_span_29_Template, 2, 1, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](30, ProjectsSummaryComponent_span_30_Template, 2, 1, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_31_listener() { ctx.CurrentPageNo = ctx.CurrentPageNo - 1; return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](32, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_33_listener() { ctx.CurrentPageNo = ctx.CurrentPageNo + 1; return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](34, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "div", 25)(36, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_a_click_36_listener() { return ctx._SortProjectList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](37, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_a_click_38_listener() { return ctx._SortProjectList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](39, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 30)(41, "ul", 31)(42, "li", 32)(43, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](44, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "div", 35)(46, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_div_click_46_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "div", 1)(48, "div", 37)(49, "h5")(50, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](51, "Total Projects - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](52, "h5", 38)(53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](55, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](56, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](57, "div", 1)(58, "div", 40)(59, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectsSummaryComponent_Template_input_ngModelChange_59_listener($event) { return ctx.txtSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](61, "div", 1)(62, "div", 42)(63, "div", 43)(64, "p")(65, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](66, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](67, ProjectsSummaryComponent_div_67_Template, 7, 3, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](68, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](69, "div", 42)(70, "div", 43)(71, "p")(72, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](73, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](74, ProjectsSummaryComponent_div_74_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](75, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](76, ProjectsSummaryComponent_div_76_Template, 8, 2, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](77, "div", 42)(78, "div", 43)(79, "p")(80, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](81, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](82, ProjectsSummaryComponent_div_82_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](83, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](84, "br")(85, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](86, "div", 1)(87, "div", 37)(88, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](89, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](90, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_90_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](91, "Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](92, "div", 48)(93, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](94, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](95, "div", 50)(96, "ul", 51)(97, "li", 52)(98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](99, "User Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](100, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](101, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](102, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](103, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_li_click_103_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](104, "div", 1)(105, "div", 57)(106, "h6", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](107, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](108, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](109, "div", 59)(110, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](111, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](112, " Core Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](113, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](114, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](115, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](116, " Routine Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](118, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](119, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](120, " Secondary Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](122, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](123, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](124, " Standard Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](125, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](126, "div", 62)(127, "div", 63)(128, "div", 64)(129, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](130, " Core Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](131, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](132, "svg", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](133, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](134, "div", 63)(135, "div", 64)(136, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](137, " Routine Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](138, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](139, "svg", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](140, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](141, "div", 57)(142, "h6", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](143, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](144, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](145, "div", 59)(146, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](147, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](148, " Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](149, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](150, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](151, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](152, " Completion Under Approval ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](154, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](155, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](156, " InProcess ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](157, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](158, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](159, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](160, " Hold ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](161, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](162, "div", 62)(163, "div", 63)(164, "div", 64)(165, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](166, " Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](167, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](168, "svg", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](169, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](170, "div", 63)(171, "div", 64)(172, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](173, " InProcess ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](174, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](175, "svg", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](176, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](177, "div", 57)(178, "h6", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](179, "Employees ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](180, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](181, "div", 59)(182, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](183, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](184, " User 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](185, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](186, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](187, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](188, " User 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](189, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](190, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](191, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](192, " User 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](193, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](194, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](195, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](196, " User 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](197, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](198, "div", 62)(199, "div", 63)(200, "div", 64)(201, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](202, " User 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](203, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](204, "svg", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](205, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](206, "div", 63)(207, "div", 64)(208, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](209, " User 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](210, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](211, "svg", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](212, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](213, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](214, "li", 69)(215, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](216, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](217, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](218, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](219, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_219_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](220, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](221, "div", 74)(222, "div", 1)(223, "div", 75)(224, "div", 76)(225, "div", 77)(226, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](227, "svg", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](228, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](229, "div", 77)(230, "h5", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](231, "New Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](232, "h4", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](233, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](234, "div", 75)(235, "div", 76)(236, "div", 77)(237, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](238, "svg", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](239, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](240, "div", 77)(241, "h5", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](242, "Inprocess");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](243, "h4", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](244, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](245, "div", 75)(246, "div", 76)(247, "div", 77)(248, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](249, "svg", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](250, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](251, "div", 77)(252, "h5", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](253, "Under Approval");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](254, "h4", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](255, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](256, "div", 75)(257, "div", 76)(258, "div", 77)(259, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](260, "svg", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](261, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](262, "div", 77)(263, "h5", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](264, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](265, "h4", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](266, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](267, "div", 87)(268, "div", 88)(269, "div", 89)(270, "div", 90)(271, "div", 91)(272, "div", 1)(273, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](274, ProjectsSummaryComponent_span_274_Template, 2, 1, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](275, "div", 93)(276, "table", 94)(277, "thead")(278, "tr", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](279, "th", 96)(280, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](281, "th", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_th_click_281_listener() { return ctx._SortPortfoliolist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](282, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](283, "i", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](284, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](285, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](286, " ProjectName ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](287, "th", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](288, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](289, " ProjectType ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](290, "th", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](291, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](292, " Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](293, "th", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](294, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](295, " Responsible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](296, "th", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](297, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](298, " Deadline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](299, "th", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](300, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](301, " Last Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](302, "th", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](303, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](304, " RACIS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](305, "th", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](306, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](307, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](308, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](309, ProjectsSummaryComponent_tr_309_Template, 71, 47, "tr", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](310, ProjectsSummaryComponent_div_310_Template, 5, 2, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](311, "div", 110)(312, "div", 111)(313, "div", 5)(314, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_a_click_314_listener() { return ctx._CloseMemosidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](315, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](316, "div", 113)(317, "h5", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](318, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](319, " Linked Memos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](320, "span", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](321);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](322, "div", 117)(323, "div", 118)(324, "div", 90)(325, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](326, ProjectsSummaryComponent_div_326_Template, 6, 2, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](327, "div", 121)(328, "div", 111)(329, "div", 5)(330, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_a_click_330_listener() { return ctx._CloseDARSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](331, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](332, "div", 113)(333, "h5", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](334, " DAR Achievements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](335, "div", 117)(336, "div", 118)(337, "div", 90)(338, "div", 119)(339, "div", 122)(340, "div", 123)(341, "h5", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](342);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](343, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](344, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](345, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_div_click_345_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx.Type, " Summary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx.Type == "RACIS Projects" ? "dropdown-item active" : "dropdown-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx.Type == "ALL Projects" ? "dropdown-item active" : "dropdown-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.CurrentPageNo == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.CurrentPageNo != 1 && ctx.CurrentPageNo != ctx.LastPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.CurrentPageNo == ctx.LastPage && ctx.CurrentPageNo != 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx._totalProjectsCount >= 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx._totalProjectsCount < 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx.CurrentPageNo == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx._CurrentpageRecords < 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx.Z2A);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx.A2Z);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx.edited ? "btn btn-label-primary btn-upper btn-sm btn-bold filter-dot" : "btn btn-label-primary btn-upper btn-sm btn-bold");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx._totalProjectsCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.txtSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](68, 35, ctx.TypeContInFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](75, 38, ctx.StatusCountFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.cancelcheck == "1" && ctx.canceledit == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](83, 41, ctx.EmpCountInFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](192);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.searchResult == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx.Z2A1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx.A2Z1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("appSort", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx._ProjectDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.emptyspace == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx._displayProjName);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx._MemosSubjectList);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx._DarAchievement, " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _sort_directive__WEBPACK_IMPORTED_MODULE_12__.SortDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__.Ng2SearchPipe, src_app_Shared_DateAgo_DateAgoPipe__WEBPACK_IMPORTED_MODULE_14__.DateAgoPipe], styles: [".list-icon-color[_ngcontent-%COMP%]{\n    color: #969696\n   }\n\n  .loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\n    background: #0dc5c1;\n    animation: load1 1s infinite ease-in-out;\n    width: 1em;\n    height: 4em;\n  }\n\n  .loader[_ngcontent-%COMP%] {\n    color: #0dc5c1;\n    text-indent: -9999em;\n    margin: 88px auto;\n    position: relative;\n    font-size: 11px;\n    transform: translateZ(0);\n    animation-delay: -0.16s;\n  }\n\n  .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\n    position: absolute;\n    top: 0;\n    content: '';\n  }\n\n  .loader[_ngcontent-%COMP%]:before {\n    left: -1.5em;\n    animation-delay: -0.32s;\n  }\n\n  .loader[_ngcontent-%COMP%]:after {\n    left: 1.5em;\n  }\n\n  @keyframes load1 {\n    0%,\n    80%,\n    100% {\n      box-shadow: 0 0;\n      height: 4em;\n    }\n    40% {\n      box-shadow: 0 -2em;\n      height: 5em;\n    }\n  }\n\n  .center[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 200px;\n  }\n\n  .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    border-radius: 2px;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]{\n  width: 400px;\n  height: auto;\n  max-height: 400px;\n  padding: 10px;\n  top: 38px !important;\n  left: auto !important;\n  right: 0px !important;\n  overflow-y: auto;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n  .ngx-pagination[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n  #backBtn[_ngcontent-%COMP%]:hover{\n background-color:#5867dd ;\n color: white; \n}\n\n  #Mdl_closebtn[_ngcontent-%COMP%]:hover{\n  background-color: #dc3545;\n  color:white\n}\n\n  .text-warning-1[_ngcontent-%COMP%]{\n  background-color: #ffe0a7;\n  color:#FFA800;\n  width: auto;\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n\n  .text-danger-1[_ngcontent-%COMP%]{\n  color: #F64E60;\n  background-color: #FFE2E5;\n  width: auto;\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n\n  .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%], .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-up[_ngcontent-%COMP%]{\n  border-top: 7px solid #adadad !important;\n    border-left: 7px solid transparent !important;\n    border-right: 7px solid transparent !important\n}\n\n  .multiselect-dropdown[_ngcontent-%COMP%]{\n  width: 80px !important;\n\n}\n\n  .kt-todo__details[_ngcontent-%COMP%]{\n  display: flex;\n}\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]{\n    border: 0;\n    background: none;\n    font-size: 16px;\n    outline: none !important;\n    box-shadow: none;\n    outline: none !important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 30px;\n    width: 30px;\n    background-color: #f5f6fc;\n    border: 1px solid #b3bcff;\n    color: #5867dd;\n    transition: all 0.3s ease;\n    cursor: pointer;\n    margin: 0 8px 0 0;\n    border-radius: 0;\n    border-radius: 4px;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon[_ngcontent-%COMP%] {\n    height: 18px;\n    width: 18px;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]{\n  height: 25px;\n  width: 25px;\n}\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{\n    fill: #5867dd;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\n    fill: #5867dd;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\n    fill: #fff;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{\n  fill: #fff;\n}\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover, .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]{\n    background-color: #5867dd;\n    color: #fff;\n  }\n\n  .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    font-size: 18px;\n    color: #ccc;\n  }\n\n  .card-title[_ngcontent-%COMP%]   .favourite.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{\n    color: #ffc107;\n  }\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\n    border-color: #d6d6d6;\n  }\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.success {\n    border-left: 5px solid #1dc9b7;\n    \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.warning {\n    border-left: 5px solid #ffb822; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.info {\n    border-left: 5px solid #2786fb; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.danger {\n    border-left: 5px solid #F58A8B; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.UnderApprovals {\n  border-left: 5px solid #BD838C; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.ForwardUnderApproval {\n  border-left: 5px solid #E0B1D7; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.completeUnderApproval {\n  border-left: 5px solid #98c7bf; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.projectHold {\n  border-left: 5px solid #C0B5DC; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.HoldunderApp {\n  border-left: 5px solid #a85098; \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.DeadlineExtended{\n  border-left: 5px solid #E0B1D7; \n}\n\n  .delayDays[_ngcontent-%COMP%]{\n  font-size: 11px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n  transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\n  fill: #5E5F63;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\n  padding: 0.2rem 20px;\n  border-radius: 4px;\n}\n\n  .mail-dropdown[_ngcontent-%COMP%] {\n  width: 800px;\n  max-width: 100%;\n}\n\n  .mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-bottom: 5px;\n}\n\n  .kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\n  min-height: 60px;\n}\n\n  .kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n  .dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #ccc !important;\n  border-radius: 4px;\n}\n\n  .kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n  color: #74788D !important;\n  cursor: auto;\n}\n\n  .kt-nav__link-text[_ngcontent-%COMP%]:hover {\n  color: #74788D !important;\n}\n\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\n  background-color: rgba(154, 100, 142, 0.2);\n  color: #333 !important;\n  transition: all 0.3s;\n}\n\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n  .kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background: rgb(195, 195, 195);\n}\n\n  \n\n  .kt-quick-panel2[_ngcontent-%COMP%] {\n  width: 650px !important;\n}\n\n  .kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\n  right: -660px;\n  left: auto;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  border-radius: 5px;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #F1F1F1;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n  \n\n  \n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\n  background-color: #FFFFFF !important;\n}\n\n  .chatcount[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-left: -15px;\n  margin-top: -10px;\n}\n\n  .kt-badge.kt-badge--dark[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background: #8C8D92;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n  transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\n  fill: #5E5F63;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\n  padding: 0.2rem 20px;\n  border-radius: 4px;\n}\n\n  .kt-font-ReplyRequired[_ngcontent-%COMP%] {\n  color: #a6c !important;\n}\n\n  .mail-dropdown[_ngcontent-%COMP%] {\n  width: 800px;\n  max-width: 100%;\n}\n\n  .mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-bottom: 5px;\n}\n\n  .kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\n  min-height: 60px;\n}\n\n  .kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n  .dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #ccc !important;\n  border-radius: 4px;\n}\n\n  .kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n  color: #74788D !important;\n  cursor: auto;\n}\n\n  .kt-nav__link-text[_ngcontent-%COMP%]:hover {\n  color: #74788D !important;\n}\n\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\n  background-color: rgba(154, 100, 142, 0.2);\n  color: #333 !important;\n  transition: all 0.3s;\n}\n\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n  .kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background: rgb(195, 195, 195);\n}\n\n  \n\n  .kt-quick-panel2[_ngcontent-%COMP%] {\n  width: 650px !important;\n}\n\n  .kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\n  right: -660px;\n  left: auto;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  border-radius: 5px;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #F1F1F1;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n  \n\n  \n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  outline: none !important;\n  box-shadow: none;\n  outline: none !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 35px;\n  width: 35px;\n  background-color: #FFFFFF;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  margin: 0;\n  border-radius: 0;\n  border-radius: 4px;\n}\n\n  .kt-badge.kt-badge--inline[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n  padding: 0.15rem 0.75rem;\n  border-radius: 2px;\n  margin-left: 4px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%] {\n  padding: 17px;\n  width: 243px;\n}\n\n  \n\n  .Replied_border_left_true_warning[_ngcontent-%COMP%]{\n  border-left: 5px solid #ffb822;\n}\n\n  .Replied_border_left_true_primary[_ngcontent-%COMP%]{\n  border-left: 5px solid #95bed9;\n}\n\n  .Replied_border_left_true_success[_ngcontent-%COMP%]{\n  border-left: 5px solid #95bed9;\n}\n\n  .Replied_border_left_true_Danger[_ngcontent-%COMP%]{\n  border-left: 5px solid #F58A8B;\n}\n\n  .Replied_border_left_true_hold[_ngcontent-%COMP%]{\n  border-left: 5px solid #c0b5dc\n}\n\n  .Replied_border_left_true_rejected[_ngcontent-%COMP%]{\n  border-left: 5px solid #f5c293;\n}\n\n  .Replied_border_left_true_underApprovals[_ngcontent-%COMP%]{\n  border-left: 5px solid #BD838C;\n}\n\n  .Replied_border_left_true_forwardUnderApproval[_ngcontent-%COMP%]{\n  border-left: 5px solid #E0B1D7;\n}\n\n  .Replied_border_left_true_completeUnderApproval[_ngcontent-%COMP%]{\n  border-left: 5px solid #98c7bf;\n}\n\n  .Replied_border_left_true_projectHold[_ngcontent-%COMP%]{\n  border-left: 5px solid #C0B5DC;\n}\n\n  .Replied_border_left_true_NewProject[_ngcontent-%COMP%]{\n  border-left: 5px solid #007bff;\n}\n\n  .Replied_border_left_true_DeadlineExtended[_ngcontent-%COMP%]{\n  border-left: 5px solid #E0B1D7;\n}\n\n  .Replied_border_left_true_HoldunderApp[_ngcontent-%COMP%]{\n  border-left: 5px solid #a85098;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%] {\n    margin-left: -17px;\n}\n\n  .icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]{\n  position: relative;\n  margin-right: 15px !important;\n  z-index: 2;\n}\n\n  .icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  width: 18px;\n    height: 18px;\n    text-align: center;\n    font-size: 10px;\n    font-weight: 700;\n  color: #fff;\n  background: #5867dd;\n  border: 1px solid #5867dd;\n  border-radius: 50%;\n  position: absolute;\n  top: -11px;\n  right: -11px;\n  z-index: 3;\n}\n\n  \n\n  \n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]{\n  margin-top: 0px !important;\n}\n\n  .multiselect-dropdown[_ngcontent-unj-c40][_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-unj-c40][_ngcontent-%COMP%]{\n  width: 150px !important;\n}\n\n  \n\n  virtual-scroller[_ngcontent-%COMP%] {\n  \n  height: 200px;\n}\n\n  .vsdiv[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 30px;\n}\n\n  \n\n  .sideInfobar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  right: 0;\n  background-color: #ffffff;\n  overflow-x: hidden;\n  transition: 0.5s;\n  \n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%]{\n  background-color: #f5f6fc;\n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n\ttext-decoration: none;\n\tcolor: #333;\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n\n  .info-icon-cir[_ngcontent-%COMP%]{\n  font-size: 20px;\n  color: #5867dd;\n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]{\n  border-bottom: 0.07rem dashed #dedede;\n  padding: 6px;\n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%]{\n  border-bottom: 0.07rem dashed rgba(0,0,0,0.3);\n}\n\n  \n\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%]{\n  font-weight: 600;\n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]{\n    width: 270px;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n  .count-height[_ngcontent-%COMP%]{\n  max-height: 200px;\n  overflow-y: auto;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]   .justify-content-between[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]{\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #f1f1f1;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #ccc;\n}\n\n  .dropdown[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]{\n  border-color: #5867dd;\n}\n\n  .kt-checkbox[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  border: solid #5867dd;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown[_ngcontent-%COMP%] {\n  position: static !important;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%] {\n    padding: 20px;\n    width: 60%;\n    \n    top: 20px !important;\n    left: -22px !important;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:before {\n  content: \"\";\n  border-bottom: 15px solid #fff;\n  border-right: 17px solid transparent;\n  border-left: 17px solid transparent;\n  position: absolute;\n  top: -15px;\n  left: 32px;\n  z-index: 10;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  border-bottom: 17px solid #ccc;\n  border-right: 19px solid transparent;\n  border-left: 19px solid transparent;\n  position: absolute;\n  top: -17px;\n  left: 30px;\n  z-index: 8;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu1[_ngcontent-%COMP%]   .filter-box[_ngcontent-%COMP%]{\n  width: 33.3333%;\n  display: inline-block;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){\n  width: 3%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){\n  width: 33%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3){\n  width: 10%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4){\n  width: 10%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5){\n  width: 15%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6){\n  width: 10%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(7), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7){\n  width: 10%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(8), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8){\n  width: 10%;\n}\n\n  .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{\n  \n  cursor: pointer;\n}\n\n  .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{\n  border: 1px solid #d6dbff;\n  border-radius: 5px;\n}\n\n  .show_entries[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 3px;\n  background-color: #fff;\n \n}\n\n  .show_entries[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\n  \n  border: 2px solid rgba(88, 103, 221, 0.3);\n  color: #5867dd;\n  font-weight: bold;\n}\n\n  .count-btn[_ngcontent-%COMP%]{\n  \n  \n  padding: 0px 10px;\n  font-weight: 700;\n  color: rgb(88, 88, 88);\n  font-size: 14px;\n  line-height: 25px;\n}\n\n  \n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__toolbar[_ngcontent-%COMP%]   .kt-inbox__search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 44px;\n  border: none;\n  background-color: #f2f3f7;\n}\n\n  .input-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100% !important;\n}\n\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]{\n  \n  background-color: #fff;\n  width: 25vw;\n  box-shadow: none;\n  border: 1px solid #d6dbff !important;\n  margin-top: 5px;\n}\n\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{\n  background-color: #f5f6fc;\n}\n\n  \n\n  \n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%]   .kt-inbox__items[_ngcontent-%COMP%]   .kt-inbox__item[_ngcontent-%COMP%]{\n  position: relative;\n}\n\n  .delete-btn[_ngcontent-%COMP%]{\n  display: none;\n  position: absolute;\n   right: 0px;\n    top: 50%;\n    transform: translateY(-50%);\n    background-color: #f2f3f7;\n    color: grey;\n    line-height: 63px;\n    padding: 0 20px;\n    transition: all 2s ease !important;\n}\n\n  .delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n  background: none;\n  font-size: 16px;\n  outline: none !important;\n  box-shadow: none;\n  outline: none !important;\n  height: 30px;\n  width: 30px;\n  background-color: #f5f6fc;\n  border: 1px solid #b3bcff;\n  color: #5867dd;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  margin: 10px 8px 0 0;\n  border-radius: 0;\n  border-radius: 4px;\n  padding: 5px;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n\n  \n\n  .btn-secondary.theme-btn[_ngcontent-%COMP%]{\n  background-color: #5867dd;\n  color: #fff;\n}\n\n  .btn.btn-label-primary[_ngcontent-%COMP%]{\n  border: 1px solid #b3bcff;\n}\n\n  .delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\n    background-color: #5867dd;\n    color: #fff;\n}\n\n  .kt-inbox__item[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%]{\n  display: block;\n}\n\n  .sidebar-more[_ngcontent-%COMP%]{\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n}\n\n  .footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 50%;\n  background-color: dodgerblue;\n  color: white;\n  text-align: center;\n}\n\n  .ng-autocomplete[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n  \n\n  .memoscount[_ngcontent-%COMP%] {\n  float: left;\n  width: 70px;\n  height: 34px;\n  margin: 5px;\n  border: 1px solid rgba(0, 0, 0, .2);\n  text-align: justify;\n\n}\n\n  .blue[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n  .purple[_ngcontent-%COMP%] {\n  background: #00B74A;\n}\n\n  .wine[_ngcontent-%COMP%] {\n  background: #F93154;\n}\n\n  \n\n  .M_fsize[_ngcontent-%COMP%]{\n  font-size: smaller;\n}\n\n  .badge[_ngcontent-%COMP%] {\n  border-radius: 0;\n  font-size: 12px;\n  line-height: 1;\n  padding: .375rem .5625rem;\n  font-weight: normal;\n}\n\n  .badge-outline-primary[_ngcontent-%COMP%] {\n  color: #405189;\n  border: 1.5px solid #405189\n}\n\n  .badge.badge-pill[_ngcontent-%COMP%] {\n  border-radius: 10rem\n}\n\n  .badge-outline-info[_ngcontent-%COMP%] {\n  color: #3da5f4;\n  border: 1.5px solid #3da5f4\n}\n\n  .badge-outline-danger[_ngcontent-%COMP%] {\n  color: #f1536e;\n  border: 1.5px solid #f1536e\n}\n\n  .badge-outline-success[_ngcontent-%COMP%] {\n  color: #00c689;\n  border: 1.5px solid #00c689\n}\n\n  .badge-outline-warning[_ngcontent-%COMP%] {\n  color: #fda006;\n  border: 1px solid #fda006\n}\n\n  \n\n  .name-box[_ngcontent-%COMP%]{\n  display: inline-block;\n  font-size: 9px;\n  width: 30px;\n  height: 30px;\n  background-color: #5867dd;\n  color: #fff;\n  font-weight: 500;\n  letter-spacing: 2px;\n  border-radius: 50%;\n  line-height: 30px;\n  margin-right: 5px;\n}\n\n  .names-response[_ngcontent-%COMP%]{\n  display :inline-block;\n  text-align: left;\n}\n\n  .names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{\n  display: block;\n  font-size: 10px;\n  font-weight: 600;\n}\n\n  .names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{\n  font-weight: 600;\n}\n\n  .head-btn[_ngcontent-%COMP%]{\n  background-color: rgba(88, 103, 221, 0.1);\n    padding: 3px 10px 3px 5px;\n    border-radius: 2rem;\n    border: 1px solid #b3bcff;\n    font-weight: 500;\n    font-size: 12px;\n}\n\n  .head-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    width: 25px;\n    height: 25px;\n    background: #5867dd;\n    color: #fff;\n    line-height: 25px;\n    text-align: center;\n    border-radius: 50%;\n    margin-right: 3px;\n}\n\n  .devider[_ngcontent-%COMP%]{\n  height: 1px;\n  width: 100%;\n  background-color: #f1f1f1;\n}\n\n  .pricevalues[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-bottom: 10px;\n  border-right: 1px solid #f1f1f1;\n  border-bottom: 1px solid #f1f1f1;\n}\n\n  .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(1), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(2)  {\n  border-top: 1px solid #f1f1f1;\n}\n\n  .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(3), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(4)  {\n  border-bottom: none\n}\n\n  .pricevalues[_ngcontent-%COMP%]:nth-child(2), .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\n  border-right: none;\n}\n\n  .dms-links[_ngcontent-%COMP%]{\n  list-style-type: disc;\n}\n\n  .dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  display: block;\n  text-decoration: underline;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n\n  \n\n  mat-select[_ngcontent-%COMP%]{\n  padding: 10px 5px;\n  background-color: #fff;\n  margin-right: 5px;\n}\n\n  div#mat-select-0-panel[_ngcontent-%COMP%]{\n  min-width: auto;\n}\n\n  .mat-select-panel-wrap.ng-tns-c275-0.ng-trigger.ng-trigger-transformPanelWrap.ng-star-inserted[_ngcontent-%COMP%]{\n  transform: none;\n}\n\n    .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: unset;\n}\n\n    .mat-option-pseudo-checkbox.mat-pseudo-checkbox-checked {\n  background-color: #303F9F;\n}\n\n  \n\n  .progress_bar[_ngcontent-%COMP%]   .pro-bar[_ngcontent-%COMP%] {\n  background: hsl(0, 0%, 97%);\n  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;\n  height: 4px;\n  margin-bottom: 12px;\n  margin-top: 30px;\n  position: relative;\n  text-align: left;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress_bar_title[_ngcontent-%COMP%] {\n  color: hsl(218, 4%, 50%);\n  font-size: 12px;\n  font-weight: 600;\n  position: relative;\n  top: -28px;\n  z-index: 1;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress_number[_ngcontent-%COMP%] {\n  float: right;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%] {\n  background-color: hsl(0, 0%, 88%);\n  display: block;\n  width: 0;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: width 1s linear 0s;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background-color: hsl(0, 0%, 100%);\n  border-radius: 50%;\n  width: 4px;\n  height: 4px;\n  position: absolute;\n  right: 1px;\n  top: 0;\n  z-index: 1;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 14px;\n  height: 14px;\n  background-color: inherit;\n  border-radius: 50%;\n  position: absolute;\n  right: -4px;\n  top: -5px;\n}\n\n  .kt-widget__details[_ngcontent-%COMP%] {\n  min-width: 90px;\n}\n\n  .kt-media-group[_ngcontent-%COMP%]   .kt-media.kt-media--sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 25px;\n  height: 25px;\n  cursor: pointer;\n}\n\n  .kt-media-group[_ngcontent-%COMP%]   .kt-media.kt-media--sm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  background: #deecf8;\n  color: #2786fb;\n}\n\n  .bg-today[_ngcontent-%COMP%] {\n  background-color: #342bf0 !important;\n}\n\n  .w-45[_ngcontent-%COMP%] {\n  width: 45% !important;\n}\n\n  .w-55[_ngcontent-%COMP%] {\n  width: 55% !important;\n}\n\n  @media only screen and (max-width: 768px) {\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]{\n    width: 80vw;\n  }\n}\n\n  .suc-hvr[_ngcontent-%COMP%] {\n  color: #1dc9b7;\n}\n\n  .suc-hvr[_ngcontent-%COMP%]:hover {\n  background: #1dc9b7;\n  color: #fff;\n}\n\n  .dan-hvr[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n  .dan-hvr[_ngcontent-%COMP%]:hover {\n  background: #dc3545;\n  color: #fff;\n}\n\n  .kt-widget__title[_ngcontent-%COMP%]{\n  width: 250px;\n}\n\n  .btn-fw[_ngcontent-%COMP%]{\n  font-weight: 500;\n}\n\n  .asc-ar[_ngcontent-%COMP%]{\n  display: none;\n}\n\n  .btn-sort[_ngcontent-%COMP%]{\n  color: #0b0e1f;\n  background-color: #fff;\n  border: 1px solid #eef1f6;\n  border-radius: 30px;\n  display: flex;\n  align-items: center;\n}\n\n  a.ordr-a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-left: 5px;\n  color: #0b0e1f;\n}\n\n  .sort-by[_ngcontent-%COMP%]{\n  color: #999999;\n  font-size: 12px;\n  padding: 8px;\n\n}\n\n  .sort-a[_ngcontent-%COMP%]{\n  text-decoration: underline;\n}\n\n  .sort-drop[_ngcontent-%COMP%]{\n  padding: 0.8rem 0;\n  min-width: 12rem;\n  margin-top: 5px;\n}\n\n  .sort-drop[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{\n  padding: 0.4rem 1rem;\n}\n\n  .sort-drop[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\n  background: #f1f6fd;\n  color: #0b0e1f;\n  align-items: center;\n  justify-content: space-between;\n  display: flex;\n}\n\n  .sort-drop[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .ckc-icn[_ngcontent-%COMP%]{\n  display: inline-block;\n  color: #3b93fc;\n}\n\n  .btn-sort[_ngcontent-%COMP%]:hover, .btn-sort[_ngcontent-%COMP%]:focus, .btn-sort[_ngcontent-%COMP%]:active  {\n  color: #0b0e1f;\n  background-color: #f5f7fa;\n  border: 1px solid #e1e6ee;\n}\n\n  .select-box[_ngcontent-%COMP%]{\n  cursor: pointer;\n}\n\n  a.dropdown-item[_ngcontent-%COMP%]{\n  cursor: pointer;\n}\n\n  @media (max-width: 1440px){\n  .kt-widget__title[_ngcontent-%COMP%]{\n    width: 240px;\n  }\n  .stat-td[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    width: 135px;\n  }\n  .stat-td[_ngcontent-%COMP%]{\n    width: 135px;\n  }\n}\n\n  @media (max-width: 1300px){\n.kt-widget__title[_ngcontent-%COMP%]{\n    width: 180px;\n}\n}\n\n  span.count[_ngcontent-%COMP%] {\n  background: #9886eb;\n  padding: 0 4px;\n  color: #fff;\n  cursor: auto;\n  border-radius: 3px;\n}\n\n  .ticks-grad[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to left, #f9a8d4, #d8b4fe, #818cf8);\n  color: #fff;\n  padding: 15px 20px;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  min-height: 90px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n  .example_icon[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 55px;\n  height: 55px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n}\n\n  span.example_icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n\n  span.example_icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n  span.count1[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #9886eb;\n  padding: 0;\n  color: #9886eb;\n  cursor: auto;\n  border-radius: 500px;\n  width: 20px;\n  height: 20px;\n}\n\n  span.count2[_ngcontent-%COMP%] {\n  margin-left: 2px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  background: #deecf8;\n  color: #2786fb;\n  border-radius: 50%;\n  font-size: 0.9rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n}\n\n  .scrollbar1[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 178px);\n  overflow: hidden;\n  overflow-y: auto;\n}\n\n  .scrollbar1[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 138px);\n  overflow-y: auto;\n}\n\n  .scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n  \n\n  .scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n  \n\n  .scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 10px;\n}\n\n  \n\n  .scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #ccc;\n}\n\n  .form-check-input[_ngcontent-%COMP%] {\n  \n  cursor: pointer;\n  border-radius: 4px;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 11' width='13' height='11' fill='none'%3e%3cpath d='M11.0426 1.02893C11.3258 0.695792 11.8254 0.655283 12.1585 0.938451C12.4917 1.22162 12.5322 1.72124 12.249 2.05437L5.51985 9.97104C5.23224 10.3094 4.72261 10.3451 4.3907 10.05L0.828197 6.88335C0.50141 6.59288 0.471975 6.09249 0.762452 5.7657C1.05293 5.43891 1.55332 5.40948 1.88011 5.69995L4.83765 8.32889L11.0426 1.02893Z' fill='%23FFFFFF'/%3e%3c/svg%3e\");\n}\n\n  .ps-1[_ngcontent-%COMP%]{\n  position: relative;\n  float: unset;\n  margin: 4px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLXN1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1CSzs7RUFFSDtJQUNFO0dBQ0Q7O0VBQ0Q7OztJQUdFLG1CQUFtQjtJQUVuQix3Q0FBd0M7SUFDeEMsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFDQTtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBR2Ysd0JBQXdCO0lBRXhCLHVCQUF1QjtFQUN6Qjs7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7RUFDYjs7RUFDQTtJQUNFLFlBQVk7SUFFWix1QkFBdUI7RUFDekI7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBY0E7SUFDRTs7O01BR0UsZUFBZTtNQUNmLFdBQVc7SUFDYjtJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLFdBQVc7SUFDYjtFQUNGOztFQUNBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtFQUNmOztFQUNBO0lBQ0Usa0JBQWtCO0FBQ3RCOztFQUNBOzs7Ozs7S0FNSzs7RUFFTDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0VBQ0EsVUFBVTs7RUFDVjtFQUNFLFVBQVU7QUFDWjs7RUFFQSxVQUFVOztFQUNWO0VBQ0UsbUJBQW1CO0FBQ3JCOztFQUVBLFdBQVc7O0VBQ1g7RUFDRSxnQkFBZ0I7QUFDbEI7O0VBRUEsb0JBQW9COztFQUNwQjtFQUNFLGdCQUFnQjtBQUNsQjs7RUFDQTtFQUNFLGVBQWU7QUFDakI7O0VBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiOztFQUNBO0VBQ0UseUJBQXlCO0VBQ3pCO0FBQ0Y7O0VBRUE7RUFDRSx5QkFB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RUFDbEIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsMEJBQTBCO0VBQzFCLGtDQUFrQztBQUNwQzs7RUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0VBRUE7RUFDRSxlQUFlO0FBQ2pCOztFQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7RUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztFQUNBO0VBQ0UsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0VBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0FBQ2xCOztFQUNBO0VBQ0UsVUFBVTtBQUNaOztFQUVBLFVBQVU7O0VBRVY7RUFDRSxtQkFBbUI7QUFDckI7O0VBRUEsV0FBVzs7RUFFWDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0VBRUEsb0JBQW9COztFQUVwQjtFQUNFLGdCQUFnQjtBQUNsQjs7RUFDQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDRmQUE0ZjtBQUM5Zjs7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InByb2plY3RzLXN1bW1hcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICNsb2FkaW5neyBcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgbGVmdDogNTAlOyBcbiAgdG9wOiA1MCU7IFxuICB6LWluZGV4OiAxOyBcbiAgd2lkdGg6IDE1MHB4OyBcbiAgaGVpZ2h0OiAxNTBweDsgXG4gIG1hcmdpbjogLTc1cHggMCAwIC03NXB4OyBcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IFxuICBib3JkZXItcmFkaXVzOiA1MCU7IFxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7IFxuICB3aWR0aDogMTIwcHg7IFxuICBoZWlnaHQ6IDEyMHB4OyBcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgXG4gIH0gXG4gICAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7IFxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH0gXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gXG4gIH0gKi9cblxuICAubGlzdC1pY29uLWNvbG9ye1xuICAgIGNvbG9yOiAjOTY5Njk2XG4gICB9XG4gIC5sb2FkZXIsXG4gIC5sb2FkZXI6YmVmb3JlLFxuICAubG9hZGVyOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMGRjNWMxO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkMSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb246IGxvYWQxIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIHdpZHRoOiAxZW07XG4gICAgaGVpZ2h0OiA0ZW07XG4gIH1cbiAgLmxvYWRlciB7XG4gICAgY29sb3I6ICMwZGM1YzE7XG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XG4gICAgbWFyZ2luOiA4OHB4IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICB9XG4gIC5sb2FkZXI6YmVmb3JlLFxuICAubG9hZGVyOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGNvbnRlbnQ6ICcnO1xuICB9XG4gIC5sb2FkZXI6YmVmb3JlIHtcbiAgICBsZWZ0OiAtMS41ZW07XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgfVxuICAubG9hZGVyOmFmdGVyIHtcbiAgICBsZWZ0OiAxLjVlbTtcbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBsb2FkMSB7XG4gICAgMCUsXG4gICAgODAlLFxuICAgIDEwMCUge1xuICAgICAgYm94LXNoYWRvdzogMCAwO1xuICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0yZW07XG4gICAgICBoZWlnaHQ6IDVlbTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBsb2FkMSB7XG4gICAgMCUsXG4gICAgODAlLFxuICAgIDEwMCUge1xuICAgICAgYm94LXNoYWRvdzogMCAwO1xuICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0yZW07XG4gICAgICBoZWlnaHQ6IDVlbTtcbiAgICB9XG4gIH1cbiAgLmNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbiAgLm1vZGFsIC5tb2RhbC1jb250ZW50IHtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4vKiBcbiAgdGFibGUsIHRoLCB0ZCB7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG4gIHRhYmxlIHtcbiAgICBib3JkZXItc3BhY2luZzogMTVweDtcbiAgfSAqL1xuXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51e1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRvcDogMzhweCAhaW1wb3J0YW50O1xuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi8qIHdpZHRoICovXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG59XG5cbi8qIFRyYWNrICovXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi8qIEhhbmRsZSAqL1xuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbi5zaGFyZWRkZXRhaWxzLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU1NTtcbn1cbi5uZ3gtcGFnaW5hdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbiNiYWNrQnRuOmhvdmVye1xuIGJhY2tncm91bmQtY29sb3I6IzU4NjdkZCA7XG4gY29sb3I6IHdoaXRlOyBcbn1cbiNNZGxfY2xvc2VidG46aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gIGNvbG9yOndoaXRlXG59XG5cbi50ZXh0LXdhcm5pbmctMXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTBhNztcbiAgY29sb3I6I0ZGQTgwMDtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRleHQtZGFuZ2VyLTF7XG4gIGNvbG9yOiAjRjY0RTYwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFMkU1O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuZHJvcGRvd24tZG93bixcbi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5kcm9wZG93bi11cHtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNhZGFkYWQgIWltcG9ydGFudDtcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudFxufVxuXG4ubXVsdGlzZWxlY3QtZHJvcGRvd257XG4gIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG5cbn1cbi5rdC10b2RvX19kZXRhaWxze1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb257XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XG4gICAgY29sb3I6ICM1ODY3ZGQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMCA4cHggMCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG5cbi5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uIHN2Zy5rdC1zdmctaWNvbiB7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICB9XG5cbi5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uIHN2Zy5rdC1zdmctaWNvbi5hZGQtaWNvbntcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbn1cblxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiAua3Qtc3ZnLWljb24gZyBbZmlsbF17XG4gICAgZmlsbDogIzU4NjdkZDtcbiAgfVxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24gcGF0aHtcbiAgICBmaWxsOiAjNTg2N2RkO1xuICB9XG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uOmhvdmVyIHN2Zy5rdC1zdmctaWNvbi5hZGQtaWNvbiBwYXRoLFxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbi5hY3RpdmUgc3ZnLmt0LXN2Zy1pY29uLmFkZC1pY29uIHBhdGh7XG4gICAgZmlsbDogI2ZmZjtcbiAgfVxuXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uOmhvdmVyIC5rdC1zdmctaWNvbiBnIFtmaWxsXSxcbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlIC5rdC1zdmctaWNvbiBnIFtmaWxsXXtcbiAgZmlsbDogI2ZmZjtcbn1cblxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbjpob3ZlcixcbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmNhcmQtdGl0bGUgLmZhdm91cml0ZSBpe1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI2NjYztcbiAgfVxuICAuY2FyZC10aXRsZSAuZmF2b3VyaXRlLmFjdGl2ZSBpLFxuICAuY2FyZC10aXRsZSAuZmF2b3VyaXRlOmhvdmVyIGl7XG4gICAgY29sb3I6ICNmZmMxMDc7XG4gIH1cblxuICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGR7XG4gICAgYm9yZGVyLWNvbG9yOiAjZDZkNmQ2O1xuICB9XG5cbiAgLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLnN1Y2Nlc3Mge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzFkYzliNztcbiAgICAvKiBib3JkZXItcmFkaXVzOiA0cHg7ICovXG59XG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQud2FybmluZyB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZiODIyOyBcbn1cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5pbmZvIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyNzg2ZmI7IFxufVxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLmRhbmdlciB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRjU4QThCOyBcbn1cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5VbmRlckFwcHJvdmFscyB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0JEODM4QzsgXG59XG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuRm9yd2FyZFVuZGVyQXBwcm92YWwge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7IFxufVxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLmNvbXBsZXRlVW5kZXJBcHByb3ZhbCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZjsgXG59XG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQucHJvamVjdEhvbGQge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNDMEI1REM7IFxufVxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLkhvbGR1bmRlckFwcCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E4NTA5ODsgXG59XG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuRGVhZGxpbmVFeHRlbmRlZHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3OyBcbn1cbi5kZWxheURheXN7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsgZyBbZmlsbF0ge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuOTMsIDAuMzUsIDEsIDEpO1xuICBmaWxsOiAjNUU1RjYzO1xufVxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsge1xuICBwYWRkaW5nOiAwLjJyZW0gMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLm1haWwtZHJvcGRvd24ge1xuICB3aWR0aDogODAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5tYWlsLWRyb3Bkb3duIHRhYmxlIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5rdC1xdWljay1wYW5lbCAua3QtcG9ydGxldC5rdC1wb3J0bGV0LS1oZWFkLWxnIC5rdC1wb3J0bGV0X19oZWFkIHtcbiAgbWluLWhlaWdodDogNjBweDtcbn1cbi5rdC1pbmJveF9faWNvbiAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1tZW51LXNtIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLmRyb3Bkb3duLXJlcGx5IHVsIGxpIGEgLmt0LW5hdl9fbGluay1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG59XG4ua3QtaW5ib3ggLmt0LWluYm94X19mb3JtIC5rdC1pbmJveF9fYm9keSAua3QtaW5ib3hfX3RvIC5rdC1pbmJveF9fZmllbGQgLmt0LWluYm94X19sYWJlbCB7XG4gIHdpZHRoOiA2MHB4O1xufVxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9faW5wdXQgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5rdC1uYXZfX2xpbmstbm9ob3Zlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogYXV0bztcbn1cbi5rdC1uYXZfX2xpbmstdGV4dDpob3ZlciB7XG4gIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XG59XG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTAwLCAxNDIsIDAuMik7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay10ZXh0LFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay10ZXh0LFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay10ZXh0LFxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93IHtcbiAgY29sb3I6ICMzMzM7XG59XG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLXVuaWZpZWQtYnJhbmQge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZDogcmdiKDE5NSwgMTk1LCAxOTUpO1xufVxuLyogLmluYm94LXRleHQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogNjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSAqL1xuLmt0LXF1aWNrLXBhbmVsMiB7XG4gIHdpZHRoOiA2NTBweCAhaW1wb3J0YW50O1xufVxuLmt0LXF1aWNrLXBhbmVsLS1yaWdodCAua3QtcXVpY2stcGFuZWwge1xuICByaWdodDogLTY2MHB4O1xuICBsZWZ0OiBhdXRvO1xufVxuLyogd2lkdGggKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XG59XG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU1NTtcbn1cbi8qIC5zb21lY2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGRpc3BsYXk6IG5vbmU7XG59ICovXG4vKiA6aG9zdCguc29tZUNsYXNzKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0gKi9cbi5rdC1pbmJveCAua3QtaW5ib3hfX2ljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG59XG5cbi5jaGF0Y291bnQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLmt0LWJhZGdlLmt0LWJhZGdlLS1kYXJrIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQ6ICM4QzhEOTI7XG59XG4ua3QtaW5ib3ggLmt0LWluYm94X19hc2lkZSAua3QtaW5ib3hfX25hdiAua3QtbmF2IC5rdC1uYXZfX2l0ZW0gLmt0LW5hdl9fbGluayBnIFtmaWxsXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4zcyBjdWJpYy1iZXppZXIoMC45MywgMC4zNSwgMSwgMSk7XG4gIGZpbGw6ICM1RTVGNjM7XG59XG4ua3QtaW5ib3ggLmt0LWluYm94X19hc2lkZSAua3QtaW5ib3hfX25hdiAua3QtbmF2IC5rdC1uYXZfX2l0ZW0gLmt0LW5hdl9fbGluayB7XG4gIHBhZGRpbmc6IDAuMnJlbSAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ua3QtZm9udC1SZXBseVJlcXVpcmVkIHtcbiAgY29sb3I6ICNhNmMgIWltcG9ydGFudDtcbn1cbi5tYWlsLWRyb3Bkb3duIHtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ubWFpbC1kcm9wZG93biB0YWJsZSB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4ua3QtcXVpY2stcGFuZWwgLmt0LXBvcnRsZXQua3QtcG9ydGxldC0taGVhZC1sZyAua3QtcG9ydGxldF9faGVhZCB7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG59XG4ua3QtaW5ib3hfX2ljb24gLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVudS1zbSB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5kcm9wZG93bi1yZXBseSB1bCBsaSBhIC5rdC1uYXZfX2xpbmstaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9fbGFiZWwge1xuICB3aWR0aDogNjBweDtcbn1cbi5rdC1pbmJveCAua3QtaW5ib3hfX2Zvcm0gLmt0LWluYm94X19ib2R5IC5rdC1pbmJveF9fdG8gLmt0LWluYm94X19maWVsZCAua3QtaW5ib3hfX2lucHV0IGlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ua3QtbmF2X19saW5rLW5vaG92ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzc0Nzg4RCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IGF1dG87XG59XG4ua3QtbmF2X19saW5rLXRleHQ6aG92ZXIge1xuICBjb2xvcjogIzc0Nzg4RCAhaW1wb3J0YW50O1xufVxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmssXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmssXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTQsIDEwMCwgMTQyLCAwLjIpO1xuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93LFxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyB7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmt0LWJhZGdlLmt0LWJhZGdlLS11bmlmaWVkLWJyYW5kIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQ6IHJnYigxOTUsIDE5NSwgMTk1KTtcbn1cbi8qIC5pbmJveC10ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDYwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0gKi9cbi5rdC1xdWljay1wYW5lbDIge1xuICB3aWR0aDogNjUwcHggIWltcG9ydGFudDtcbn1cbi5rdC1xdWljay1wYW5lbC0tcmlnaHQgLmt0LXF1aWNrLXBhbmVsIHtcbiAgcmlnaHQ6IC02NjBweDtcbiAgbGVmdDogYXV0bztcbn1cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xufVxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1NTU7XG59XG4vKiAuc29tZWNsYXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBkaXNwbGF5OiBub25lO1xufSAqL1xuLyogOmhvc3QoLnNvbWVDbGFzcykge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59ICovXG4ua3QtaW5ib3ggLmt0LWluYm94X19pY29uIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLWlubGluZSB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDAuMTVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUge1xuICBwYWRkaW5nOiAxN3B4O1xuICB3aWR0aDogMjQzcHg7XG59XG4vKiBTdGF0dXMgQ29sb3JzICovXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3dhcm5pbmd7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2ZmYjgyMjtcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcHJpbWFyeXtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOTViZWQ5O1xufVxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9zdWNjZXNze1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5NWJlZDk7XG59XG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX0RhbmdlcntcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRjU4QThCO1xufVxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9ob2xke1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNjMGI1ZGNcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcmVqZWN0ZWR7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y1YzI5Mztcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfdW5kZXJBcHByb3ZhbHN7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0JEODM4Qztcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfZm9yd2FyZFVuZGVyQXBwcm92YWx7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0UwQjFENztcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfY29tcGxldGVVbmRlckFwcHJvdmFse1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5OGM3YmY7XG59XG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3Byb2plY3RIb2xke1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNDMEI1REM7XG59XG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX05ld1Byb2plY3R7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzAwN2JmZjtcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfRGVhZGxpbmVFeHRlbmRlZHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3O1xufVxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9Ib2xkdW5kZXJBcHB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E4NTA5ODtcbn1cbi5rdC1pbmJveCAua3QtaW5ib3hfX2xpc3Qge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTdweDtcbn1cbi5pY29ucy1maWx0ZXIgLmt0LXRvZG9fX2ljb257XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDI7XG59XG4uaWNvbnMtZmlsdGVyIC5rdC10b2RvX19pY29uIHNwYW57XG4gIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNTg2N2RkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTg2N2RkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTFweDtcbiAgcmlnaHQ6IC0xMXB4O1xuICB6LWluZGV4OiAzO1xufVxuLyogLmljb25zLWZpbHRlciAua3QtdG9kb19faWNvbjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczYTFmNyAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50XG59ICovXG4vKiAuaWNvbnMtZmlsdGVyIC5rdC10b2RvX19pY29uOmhvdmVyIHNwYW57XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDEzNCwgMjUxLCAxKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50XG59ICovXG5cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tdWx0aXNlbGVjdC1kcm9wZG93bltfbmdjb250ZW50LXVuai1jNDBdIC5kcm9wZG93bi1idG5bX25nY29udGVudC11bmotYzQwXXtcbiAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG59XG4vKiB2aXJ0dWFsIFNjcm9sbGVyICovXG52aXJ0dWFsLXNjcm9sbGVyIHtcbiAgLyogd2lkdGg6IDM1MHB4OyAqL1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuIFxuLnZzZGl2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi8qID09PSBTaWRlYmFyID09PSAqL1xuLnNpZGVJbmZvYmFyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgLyogcGFkZGluZy10b3A6IDYwcHg7ICovXG59XG4uc2lkZUluZm9iYXIgLmt0LXBvcnRsZXRfX2hlYWR7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmM7XG59XG5cbi5zaWRlSW5mb2JhciAuY2xvc2VidG4ge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiAjMzMzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5pbmZvLWljb24tY2lye1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNTg2N2RkO1xufVxuXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW17XG4gIGJvcmRlci1ib3R0b206IDAuMDdyZW0gZGFzaGVkICNkZWRlZGU7XG4gIHBhZGRpbmc6IDZweDtcbn1cbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbS5kYXJre1xuICBib3JkZXItYm90dG9tOiAwLjA3cmVtIGRhc2hlZCByZ2JhKDAsMCwwLDAuMyk7XG59XG5cbi8qIC5rdC1pbmJveF9fZGF0ZXRpbWV7XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xufSAqL1xuXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW0gLmt0LXdpZGdldDFfX2luZm8gLmt0LXdpZGdldDFfX3RpdGxle1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnNpZGVJbmZvYmFyIC50aXRsZS1zaWRlYmFye1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5jb3VudC1oZWlnaHR7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4vKiAuY291bnQtaGVpZ2h0IC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbntcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XG59ICovXG4uY291bnQtaGVpZ2h0IC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiAua3QtY2hlY2tib3h7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5cbi8qIHdpZHRoICovXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAzcHg7XG59XG5cbi8qIFRyYWNrICovXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi8qIEhhbmRsZSAqL1xuLmNvdW50LWhlaWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbi5jb3VudC1oZWlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuLmRyb3Bkb3duIC5rdC1jaGVja2JveCA+IGlucHV0OmNoZWNrZWQgfiBzcGFue1xuICBib3JkZXItY29sb3I6ICM1ODY3ZGQ7XG59XG4ua3QtY2hlY2tib3ggPiBzcGFuOmFmdGVyIHtcbiAgYm9yZGVyOiBzb2xpZCAjNTg2N2RkO1xufVxuXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbn1cbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnUge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7ICovXG4gICAgdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogLTIycHggIWltcG9ydGFudDtcbn1cbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmlnaHQ6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE1cHg7XG4gIGxlZnQ6IDMycHg7XG4gIHotaW5kZXg6IDEwO1xufVxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1ib3R0b206IDE3cHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJpZ2h0OiAxOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogMTlweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xN3B4O1xuICBsZWZ0OiAzMHB4O1xuICB6LWluZGV4OiA4O1xufVxuXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51MSAuZmlsdGVyLWJveHtcbiAgd2lkdGg6IDMzLjMzMzMlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDEpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCgxKXtcbiAgd2lkdGg6IDMlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMiksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDIpe1xuICB3aWR0aDogMzMlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMyksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDMpe1xuICB3aWR0aDogMTAlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNCksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDQpe1xuICB3aWR0aDogMTAlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNSksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDUpe1xuICB3aWR0aDogMTUlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNiksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDYpe1xuICB3aWR0aDogMTAlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNyksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDcpe1xuICB3aWR0aDogMTAlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoOCksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDgpe1xuICB3aWR0aDogMTAlO1xufVxuXG4ua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHQsIC5rdC1xdWljay1zZWFyY2ggLmt0LXF1aWNrLXNlYXJjaF9fZm9ybSAuaW5wdXQtZ3JvdXAtYXBwZW5kIC5pbnB1dC1ncm91cC10ZXh0e1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2ZmOyAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3Vwe1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkYmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zaG93X2VudHJpZXMgc3BhbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiBcbn1cbi5zaG93X2VudHJpZXMgc2VsZWN0e1xuICAvKiB3aWR0aDogMTAwcHg7ICovXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoODgsIDEwMywgMjIxLCAwLjMpO1xuICBjb2xvcjogIzU4NjdkZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb3VudC1idG57XG4gIC8qIGhlaWdodDogMjVweDsgKi9cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDsgKi9cbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiByZ2IoODgsIDg4LCA4OCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG4vKiBTZWFyY2ggUHJvamVjdHMgKi9cbi5rdC1pbmJveCAua3QtaW5ib3hfX3Rvb2xiYXIgLmt0LWluYm94X19zZWFyY2ggLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNztcbn1cbi5pbnB1dC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kLCAuZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQtc2hvcnR7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNlMmU5ZmY7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAyNXZ3O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkYmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZCAuZm9ybS1jb250cm9sLCAuZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQtc2hvcnQgLmZvcm0tY29udHJvbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcbn1cblxuLyogLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlICAqL1xuXG4vKiAudmFsaW5vb3J7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi52YWxpbm9vcjo6YmVmb3Jle1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59ICovXG5cbi5rdC1pbmJveCAua3QtaW5ib3hfX2xpc3QgLmt0LWluYm94X19pdGVtcyAua3QtaW5ib3hfX2l0ZW17XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kZWxldGUtYnRue1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICByaWdodDogMHB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGxpbmUtaGVpZ2h0OiA2M3B4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAhaW1wb3J0YW50O1xufVxuLmRlbGV0ZS1idG4gaXtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcbiAgY29sb3I6ICM1ODY3ZGQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDhweCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLyogLmRlbGV0ZS1idG4gaXtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjc7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZSAhaW1wb3J0YW50O1xufSovXG4uYnRuLXNlY29uZGFyeS50aGVtZS1idG57XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi5idG4tbGFiZWwtcHJpbWFyeXtcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcbn1cblxuLmRlbGV0ZS1idG4gaTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmt0LWluYm94X19pdGVtOmhvdmVyIC5kZWxldGUtYnRue1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNpZGViYXItbW9yZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDUwJTtcbn1cbi5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubmctYXV0b2NvbXBsZXRlIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4vKiBCb3hlcyAgKi9cbi5tZW1vc2NvdW50IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcblxufVxuXG4uYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5wdXJwbGUge1xuICBiYWNrZ3JvdW5kOiAjMDBCNzRBO1xufVxuXG4ud2luZSB7XG4gIGJhY2tncm91bmQ6ICNGOTMxNTQ7XG59XG4vKiBtZW1vc0NvdW50X0ZvbnRzaXplICovXG4uTV9mc2l6ZXtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuXG4uYmFkZ2Uge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBwYWRkaW5nOiAuMzc1cmVtIC41NjI1cmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYmFkZ2Utb3V0bGluZS1wcmltYXJ5IHtcbiAgY29sb3I6ICM0MDUxODk7XG4gIGJvcmRlcjogMS41cHggc29saWQgIzQwNTE4OVxufVxuXG4uYmFkZ2UuYmFkZ2UtcGlsbCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtXG59XG5cbi5iYWRnZS1vdXRsaW5lLWluZm8ge1xuICBjb2xvcjogIzNkYTVmNDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjM2RhNWY0XG59XG5cbi5iYWRnZS1vdXRsaW5lLWRhbmdlciB7XG4gIGNvbG9yOiAjZjE1MzZlO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNmMTUzNmVcbn1cblxuLmJhZGdlLW91dGxpbmUtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMDBjNjg5O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICMwMGM2ODlcbn1cblxuLmJhZGdlLW91dGxpbmUtd2FybmluZyB7XG4gIGNvbG9yOiAjZmRhMDA2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmRhMDA2XG59XG4vKiBOZXcgZGVzaWduIENTUyAgZnJvbSBIZXJlLi4uICovXG4ubmFtZS1ib3h7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiA5cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLm5hbWVzLXJlc3BvbnNle1xuICBkaXNwbGF5IDppbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5uYW1lcy1yZXNwb25zZSBzcGFuOmZpcnN0LWNoaWxke1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm5hbWVzLXJlc3BvbnNlIHNwYW46bGFzdC1jaGlsZHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmhlYWQtYnRue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg4LCAxMDMsIDIyMSwgMC4xKTtcbiAgICBwYWRkaW5nOiAzcHggMTBweCAzcHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5oZWFkLWJ0biBpe1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiAjNTg2N2RkO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbi5kZXZpZGVye1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5wcmljZXZhbHVlcyB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YxZjFmMTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XG59XG5cbi50b3AtYm9yZGVyIC5wcmljZXZhbHVlczpudGgtY2hpbGQoMSksIC50b3AtYm9yZGVyIC5wcmljZXZhbHVlczpudGgtY2hpbGQoMikgIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYxZjE7XG59XG4udG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDMpLCAudG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDQpICB7XG4gIGJvcmRlci1ib3R0b206IG5vbmVcbn1cblxuLnByaWNldmFsdWVzOm50aC1jaGlsZCgyKSwgLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLmRtcy1saW5rc3tcbiAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xufVxuXG4uZG1zLWxpbmtzIGxpIGF7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4vKiA9PT09PT09PT0gTWF0IFNlbGVjdCBTdHlsZXMgPT09PT09PT09ICovXG5cbm1hdC1zZWxlY3R7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbmRpdiNtYXQtc2VsZWN0LTAtcGFuZWx7XG4gIG1pbi13aWR0aDogYXV0bztcbn1cblxuLm1hdC1zZWxlY3QtcGFuZWwtd3JhcC5uZy10bnMtYzI3NS0wLm5nLXRyaWdnZXIubmctdHJpZ2dlci10cmFuc2Zvcm1QYW5lbFdyYXAubmctc3Rhci1pbnNlcnRlZHtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG46Om5nLWRlZXAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgY29sb3I6IHVuc2V0O1xufVxuXG46Om5nLWRlZXAgLm1hdC1vcHRpb24tcHNldWRvLWNoZWNrYm94Lm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDNGOUY7XG59XG5cbi8qID09PT09PT09PSBQcm9ncmVzcyBCYXIgPT09PT09PT09ICovXG5cbi5wcm9ncmVzc19iYXIgLnByby1iYXIge1xuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDk3JSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCBoc2xhKDAsIDAlLCAwJSwgMC4xKSBpbnNldDtcbiAgaGVpZ2h0OiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfYmFyX3RpdGxlIHtcbiAgY29sb3I6IGhzbCgyMTgsIDQlLCA1MCUpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjhweDtcbiAgei1pbmRleDogMTtcbn1cblxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfbnVtYmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg4JSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgbGluZWFyIDBzO1xufVxuXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMXB4O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzLWJhci1pbm5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTRweDtcbiAgdG9wOiAtNXB4O1xufVxuLmt0LXdpZGdldF9fZGV0YWlscyB7XG4gIG1pbi13aWR0aDogOTBweDtcbn1cbi5rdC1tZWRpYS1ncm91cCAua3QtbWVkaWEua3QtbWVkaWEtLXNtIGltZyB7XG4gIG1heC13aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ua3QtbWVkaWEtZ3JvdXAgLmt0LW1lZGlhLmt0LW1lZGlhLS1zbSBzcGFuIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogI2RlZWNmODtcbiAgY29sb3I6ICMyNzg2ZmI7XG59XG4uYmctdG9kYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQyYmYwICFpbXBvcnRhbnQ7XG59XG4udy00NSB7XG4gIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcbn1cbi53LTU1IHtcbiAgd2lkdGg6IDU1JSAhaW1wb3J0YW50O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmR7XG4gICAgd2lkdGg6IDgwdnc7XG4gIH1cbn1cblxuLnN1Yy1odnIge1xuICBjb2xvcjogIzFkYzliNztcbn1cbi5zdWMtaHZyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzFkYzliNztcbiAgY29sb3I6ICNmZmY7XG59XG4uZGFuLWh2ciB7XG4gIGNvbG9yOiAjZGMzNTQ1O1xufVxuLmRhbi1odnI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5rdC13aWRnZXRfX3RpdGxle1xuICB3aWR0aDogMjUwcHg7XG59XG4uYnRuLWZ3e1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmFzYy1hcntcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5idG4tc29ydHtcbiAgY29sb3I6ICMwYjBlMWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWYxZjY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5hLm9yZHItYSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY29sb3I6ICMwYjBlMWY7XG59XG4uc29ydC1ieXtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogOHB4O1xuXG59XG4uc29ydC1he1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5zb3J0LWRyb3B7XG4gIHBhZGRpbmc6IDAuOHJlbSAwO1xuICBtaW4td2lkdGg6IDEycmVtO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uc29ydC1kcm9wIC5kcm9wZG93bi1pdGVte1xuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcbn1cbi5zb3J0LWRyb3AgLmFjdGl2ZXtcbiAgYmFja2dyb3VuZDogI2YxZjZmZDtcbiAgY29sb3I6ICMwYjBlMWY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zb3J0LWRyb3AgLmFjdGl2ZSAuY2tjLWljbntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzNiOTNmYztcbn1cbi5idG4tc29ydDpob3ZlciwgLmJ0bi1zb3J0OmZvY3VzLCAuYnRuLXNvcnQ6YWN0aXZlICB7XG4gIGNvbG9yOiAjMGIwZTFmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmN2ZhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlNmVlO1xufVxuLnNlbGVjdC1ib3h7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmEuZHJvcGRvd24taXRlbXtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCl7XG4gIC5rdC13aWRnZXRfX3RpdGxle1xuICAgIHdpZHRoOiAyNDBweDtcbiAgfVxuICAuc3RhdC10ZCBkaXZ7XG4gICAgd2lkdGg6IDEzNXB4O1xuICB9XG4gIC5zdGF0LXRke1xuICAgIHdpZHRoOiAxMzVweDtcbiAgfVxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpe1xuLmt0LXdpZGdldF9fdGl0bGV7XG4gICAgd2lkdGg6IDE4MHB4O1xufVxufVxuXG5zcGFuLmNvdW50IHtcbiAgYmFja2dyb3VuZDogIzk4ODZlYjtcbiAgcGFkZGluZzogMCA0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnRpY2tzLWdyYWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2Y5YThkNCwgI2Q4YjRmZSwgIzgxOGNmOCk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXhhbXBsZV9pY29uIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbn1cblxuc3Bhbi5leGFtcGxlX2ljb24gc3ZnIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuc3Bhbi5leGFtcGxlX2ljb24gaSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbnNwYW4uY291bnQxIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk4ODZlYjtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICM5ODg2ZWI7XG4gIGN1cnNvcjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTAwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5zcGFuLmNvdW50MiB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZGVlY2Y4O1xuICBjb2xvcjogIzI3ODZmYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnNjcm9sbGJhcjEge1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTc4cHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnNjcm9sbGJhcjEge1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTM4cHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnNjcm9sbGJhcjE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cblxuLyogVHJhY2sgKi9cblxuLnNjcm9sbGJhcjE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLyogSGFuZGxlICovXG5cbi5zY3JvbGxiYXIxOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuXG4uc2Nyb2xsYmFyMTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuLmZvcm0tY2hlY2staW5wdXQge1xuICAvKiB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7ICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEzIDExJyB3aWR0aD0nMTMnIGhlaWdodD0nMTEnIGZpbGw9J25vbmUnJTNlJTNjcGF0aCBkPSdNMTEuMDQyNiAxLjAyODkzQzExLjMyNTggMC42OTU3OTIgMTEuODI1NCAwLjY1NTI4MyAxMi4xNTg1IDAuOTM4NDUxQzEyLjQ5MTcgMS4yMjE2MiAxMi41MzIyIDEuNzIxMjQgMTIuMjQ5IDIuMDU0MzdMNS41MTk4NSA5Ljk3MTA0QzUuMjMyMjQgMTAuMzA5NCA0LjcyMjYxIDEwLjM0NTEgNC4zOTA3IDEwLjA1TDAuODI4MTk3IDYuODgzMzVDMC41MDE0MSA2LjU5Mjg4IDAuNDcxOTc1IDYuMDkyNDkgMC43NjI0NTIgNS43NjU3QzEuMDUyOTMgNS40Mzg5MSAxLjU1MzMyIDUuNDA5NDggMS44ODAxMSA1LjY5OTk1TDQuODM3NjUgOC4zMjg4OUwxMS4wNDI2IDEuMDI4OTNaJyBmaWxsPSclMjNGRkZGRkYnLyUzZSUzYy9zdmclM2VcIik7XG59XG4ucHMtMXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogdW5zZXQ7XG4gIG1hcmdpbjogNHB4ICFpbXBvcnRhbnQ7XG59Il19 */"] });


/***/ }),

/***/ 86862:
/*!**************************************!*\
  !*** ./src/app/_Models/share-dto.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareDto": () => (/* binding */ ShareDto)
/* harmony export */ });
class ShareDto {
}


/***/ }),

/***/ 95636:
/*!************************************************!*\
  !*** ./src/app/_Services/parameter.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParameterService": () => (/* binding */ ParameterService)
/* harmony export */ });
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ 88898);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Models_share_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_Models/share-dto */ 86862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class ParameterService {
    constructor() {
        this.shareMessage = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject("Empty Message");
        this.newMessage = this.shareMessage.asObservable();
        this.objShareDTO = new _Models_share_dto__WEBPACK_IMPORTED_MODULE_0__.ShareDto;
    }
    Sharemethod(pCode, loadComponent) {
        debugger;
        alert("Service---->" + pCode + " " + loadComponent);
        this.projectCode = pCode;
        this.loadComponent = loadComponent;
        console.log("Service------->", this.projectCode, this.loadComponent);
        return this.objShareDTO;
    }
}
ParameterService.ɵfac = function ParameterService_Factory(t) { return new (t || ParameterService)(); };
ParameterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ParameterService, factory: ParameterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 88898:
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/BehaviorSubject.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Subject_1 = __webpack_require__(/*! ./Subject */ 68094);

var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ 6225);

var BehaviorSubject = function (_super) {
  __extends(BehaviorSubject, _super);

  function BehaviorSubject(_value) {
    var _this = _super.call(this) || this;

    _this._value = _value;
    return _this;
  }

  Object.defineProperty(BehaviorSubject.prototype, "value", {
    get: function () {
      return this.getValue();
    },
    enumerable: true,
    configurable: true
  });

  BehaviorSubject.prototype._subscribe = function (subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);

    if (subscription && !subscription.closed) {
      subscriber.next(this._value);
    }

    return subscription;
  };

  BehaviorSubject.prototype.getValue = function () {
    if (this.hasError) {
      throw this.thrownError;
    } else if (this.closed) {
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    } else {
      return this._value;
    }
  };

  BehaviorSubject.prototype.next = function (value) {
    _super.prototype.next.call(this, this._value = value);
  };

  return BehaviorSubject;
}(Subject_1.Subject);

exports.BehaviorSubject = BehaviorSubject;

/***/ }),

/***/ 84758:
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ 40290);

var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ 27);

var observable_1 = __webpack_require__(/*! ./symbol/observable */ 28550);

var pipe_1 = __webpack_require__(/*! ./util/pipe */ 90598);

var config_1 = __webpack_require__(/*! ./config */ 38893);

var Observable = function () {
  function Observable(subscribe) {
    this._isScalar = false;

    if (subscribe) {
      this._subscribe = subscribe;
    }
  }

  Observable.prototype.lift = function (operator) {
    var observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  };

  Observable.prototype.subscribe = function (observerOrNext, error, complete) {
    var operator = this.operator;
    var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);

    if (operator) {
      sink.add(operator.call(sink, this.source));
    } else {
      sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
    }

    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
      if (sink.syncErrorThrowable) {
        sink.syncErrorThrowable = false;

        if (sink.syncErrorThrown) {
          throw sink.syncErrorValue;
        }
      }
    }

    return sink;
  };

  Observable.prototype._trySubscribe = function (sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        sink.syncErrorThrown = true;
        sink.syncErrorValue = err;
      }

      if (canReportError_1.canReportError(sink)) {
        sink.error(err);
      } else {
        console.warn(err);
      }
    }
  };

  Observable.prototype.forEach = function (next, promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var subscription;
      subscription = _this.subscribe(function (value) {
        try {
          next(value);
        } catch (err) {
          reject(err);

          if (subscription) {
            subscription.unsubscribe();
          }
        }
      }, reject, resolve);
    });
  };

  Observable.prototype._subscribe = function (subscriber) {
    var source = this.source;
    return source && source.subscribe(subscriber);
  };

  Observable.prototype[observable_1.observable] = function () {
    return this;
  };

  Observable.prototype.pipe = function () {
    var operations = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }

    if (operations.length === 0) {
      return this;
    }

    return pipe_1.pipeFromArray(operations)(this);
  };

  Observable.prototype.toPromise = function (promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var value;

      _this.subscribe(function (x) {
        return value = x;
      }, function (err) {
        return reject(err);
      }, function () {
        return resolve(value);
      });
    });
  };

  Observable.create = function (subscribe) {
    return new Observable(subscribe);
  };

  return Observable;
}();

exports.Observable = Observable;

function getPromiseCtor(promiseCtor) {
  if (!promiseCtor) {
    promiseCtor = config_1.config.Promise || Promise;
  }

  if (!promiseCtor) {
    throw new Error('no Promise impl found');
  }

  return promiseCtor;
}

/***/ }),

/***/ 70413:
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var config_1 = __webpack_require__(/*! ./config */ 38893);

var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ 65613);

exports.empty = {
  closed: true,
  next: function (value) {},
  error: function (err) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
      throw err;
    } else {
      hostReportError_1.hostReportError(err);
    }
  },
  complete: function () {}
};

/***/ }),

/***/ 68094:
/*!***********************************************!*\
  !*** ./node_modules/rxjs/internal/Subject.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Observable_1 = __webpack_require__(/*! ./Observable */ 84758);

var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ 71160);

var Subscription_1 = __webpack_require__(/*! ./Subscription */ 91919);

var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ 6225);

var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ 95978);

var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ 12478);

var SubjectSubscriber = function (_super) {
  __extends(SubjectSubscriber, _super);

  function SubjectSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    return _this;
  }

  return SubjectSubscriber;
}(Subscriber_1.Subscriber);

exports.SubjectSubscriber = SubjectSubscriber;

var Subject = function (_super) {
  __extends(Subject, _super);

  function Subject() {
    var _this = _super.call(this) || this;

    _this.observers = [];
    _this.closed = false;
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }

  Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
    return new SubjectSubscriber(this);
  };

  Subject.prototype.lift = function (operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };

  Subject.prototype.next = function (value) {
    if (this.closed) {
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    }

    if (!this.isStopped) {
      var observers = this.observers;
      var len = observers.length;
      var copy = observers.slice();

      for (var i = 0; i < len; i++) {
        copy[i].next(value);
      }
    }
  };

  Subject.prototype.error = function (err) {
    if (this.closed) {
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    }

    this.hasError = true;
    this.thrownError = err;
    this.isStopped = true;
    var observers = this.observers;
    var len = observers.length;
    var copy = observers.slice();

    for (var i = 0; i < len; i++) {
      copy[i].error(err);
    }

    this.observers.length = 0;
  };

  Subject.prototype.complete = function () {
    if (this.closed) {
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    }

    this.isStopped = true;
    var observers = this.observers;
    var len = observers.length;
    var copy = observers.slice();

    for (var i = 0; i < len; i++) {
      copy[i].complete();
    }

    this.observers.length = 0;
  };

  Subject.prototype.unsubscribe = function () {
    this.isStopped = true;
    this.closed = true;
    this.observers = null;
  };

  Subject.prototype._trySubscribe = function (subscriber) {
    if (this.closed) {
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    } else {
      return _super.prototype._trySubscribe.call(this, subscriber);
    }
  };

  Subject.prototype._subscribe = function (subscriber) {
    if (this.closed) {
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    } else if (this.hasError) {
      subscriber.error(this.thrownError);
      return Subscription_1.Subscription.EMPTY;
    } else if (this.isStopped) {
      subscriber.complete();
      return Subscription_1.Subscription.EMPTY;
    } else {
      this.observers.push(subscriber);
      return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
    }
  };

  Subject.prototype.asObservable = function () {
    var observable = new Observable_1.Observable();
    observable.source = this;
    return observable;
  };

  Subject.create = function (destination, source) {
    return new AnonymousSubject(destination, source);
  };

  return Subject;
}(Observable_1.Observable);

exports.Subject = Subject;

var AnonymousSubject = function (_super) {
  __extends(AnonymousSubject, _super);

  function AnonymousSubject(destination, source) {
    var _this = _super.call(this) || this;

    _this.destination = destination;
    _this.source = source;
    return _this;
  }

  AnonymousSubject.prototype.next = function (value) {
    var destination = this.destination;

    if (destination && destination.next) {
      destination.next(value);
    }
  };

  AnonymousSubject.prototype.error = function (err) {
    var destination = this.destination;

    if (destination && destination.error) {
      this.destination.error(err);
    }
  };

  AnonymousSubject.prototype.complete = function () {
    var destination = this.destination;

    if (destination && destination.complete) {
      this.destination.complete();
    }
  };

  AnonymousSubject.prototype._subscribe = function (subscriber) {
    var source = this.source;

    if (source) {
      return this.source.subscribe(subscriber);
    } else {
      return Subscription_1.Subscription.EMPTY;
    }
  };

  return AnonymousSubject;
}(Subject);

exports.AnonymousSubject = AnonymousSubject;

/***/ }),

/***/ 95978:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/SubjectSubscription.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Subscription_1 = __webpack_require__(/*! ./Subscription */ 91919);

var SubjectSubscription = function (_super) {
  __extends(SubjectSubscription, _super);

  function SubjectSubscription(subject, subscriber) {
    var _this = _super.call(this) || this;

    _this.subject = subject;
    _this.subscriber = subscriber;
    _this.closed = false;
    return _this;
  }

  SubjectSubscription.prototype.unsubscribe = function () {
    if (this.closed) {
      return;
    }

    this.closed = true;
    var subject = this.subject;
    var observers = subject.observers;
    this.subject = null;

    if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
      return;
    }

    var subscriberIndex = observers.indexOf(this.subscriber);

    if (subscriberIndex !== -1) {
      observers.splice(subscriberIndex, 1);
    }
  };

  return SubjectSubscription;
}(Subscription_1.Subscription);

exports.SubjectSubscription = SubjectSubscription;

/***/ }),

/***/ 71160:
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ 57654);

var Observer_1 = __webpack_require__(/*! ./Observer */ 70413);

var Subscription_1 = __webpack_require__(/*! ./Subscription */ 91919);

var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ 12478);

var config_1 = __webpack_require__(/*! ./config */ 38893);

var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ 65613);

var Subscriber = function (_super) {
  __extends(Subscriber, _super);

  function Subscriber(destinationOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this.syncErrorValue = null;
    _this.syncErrorThrown = false;
    _this.syncErrorThrowable = false;
    _this.isStopped = false;

    switch (arguments.length) {
      case 0:
        _this.destination = Observer_1.empty;
        break;

      case 1:
        if (!destinationOrNext) {
          _this.destination = Observer_1.empty;
          break;
        }

        if (typeof destinationOrNext === 'object') {
          if (destinationOrNext instanceof Subscriber) {
            _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
            _this.destination = destinationOrNext;
            destinationOrNext.add(_this);
          } else {
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext);
          }

          break;
        }

      default:
        _this.syncErrorThrowable = true;
        _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
        break;
    }

    return _this;
  }

  Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
    return this;
  };

  Subscriber.create = function (next, error, complete) {
    var subscriber = new Subscriber(next, error, complete);
    subscriber.syncErrorThrowable = false;
    return subscriber;
  };

  Subscriber.prototype.next = function (value) {
    if (!this.isStopped) {
      this._next(value);
    }
  };

  Subscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      this.isStopped = true;

      this._error(err);
    }
  };

  Subscriber.prototype.complete = function () {
    if (!this.isStopped) {
      this.isStopped = true;

      this._complete();
    }
  };

  Subscriber.prototype.unsubscribe = function () {
    if (this.closed) {
      return;
    }

    this.isStopped = true;

    _super.prototype.unsubscribe.call(this);
  };

  Subscriber.prototype._next = function (value) {
    this.destination.next(value);
  };

  Subscriber.prototype._error = function (err) {
    this.destination.error(err);
    this.unsubscribe();
  };

  Subscriber.prototype._complete = function () {
    this.destination.complete();
    this.unsubscribe();
  };

  Subscriber.prototype._unsubscribeAndRecycle = function () {
    var _parentOrParents = this._parentOrParents;
    this._parentOrParents = null;
    this.unsubscribe();
    this.closed = false;
    this.isStopped = false;
    this._parentOrParents = _parentOrParents;
    return this;
  };

  return Subscriber;
}(Subscription_1.Subscription);

exports.Subscriber = Subscriber;

var SafeSubscriber = function (_super) {
  __extends(SafeSubscriber, _super);

  function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this._parentSubscriber = _parentSubscriber;
    var next;
    var context = _this;

    if (isFunction_1.isFunction(observerOrNext)) {
      next = observerOrNext;
    } else if (observerOrNext) {
      next = observerOrNext.next;
      error = observerOrNext.error;
      complete = observerOrNext.complete;

      if (observerOrNext !== Observer_1.empty) {
        context = Object.create(observerOrNext);

        if (isFunction_1.isFunction(context.unsubscribe)) {
          _this.add(context.unsubscribe.bind(context));
        }

        context.unsubscribe = _this.unsubscribe.bind(_this);
      }
    }

    _this._context = context;
    _this._next = next;
    _this._error = error;
    _this._complete = complete;
    return _this;
  }

  SafeSubscriber.prototype.next = function (value) {
    if (!this.isStopped && this._next) {
      var _parentSubscriber = this._parentSubscriber;

      if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
        this.__tryOrUnsub(this._next, value);
      } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;
      var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;

      if (this._error) {
        if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(this._error, err);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, this._error, err);

          this.unsubscribe();
        }
      } else if (!_parentSubscriber.syncErrorThrowable) {
        this.unsubscribe();

        if (useDeprecatedSynchronousErrorHandling) {
          throw err;
        }

        hostReportError_1.hostReportError(err);
      } else {
        if (useDeprecatedSynchronousErrorHandling) {
          _parentSubscriber.syncErrorValue = err;
          _parentSubscriber.syncErrorThrown = true;
        } else {
          hostReportError_1.hostReportError(err);
        }

        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.complete = function () {
    var _this = this;

    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;

      if (this._complete) {
        var wrappedComplete = function () {
          return _this._complete.call(_this._context);
        };

        if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(wrappedComplete);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, wrappedComplete);

          this.unsubscribe();
        }
      } else {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
    try {
      fn.call(this._context, value);
    } catch (err) {
      this.unsubscribe();

      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        throw err;
      } else {
        hostReportError_1.hostReportError(err);
      }
    }
  };

  SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
    if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
      throw new Error('bad call');
    }

    try {
      fn.call(this._context, value);
    } catch (err) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        parent.syncErrorValue = err;
        parent.syncErrorThrown = true;
        return true;
      } else {
        hostReportError_1.hostReportError(err);
        return true;
      }
    }

    return false;
  };

  SafeSubscriber.prototype._unsubscribe = function () {
    var _parentSubscriber = this._parentSubscriber;
    this._context = null;
    this._parentSubscriber = null;

    _parentSubscriber.unsubscribe();
  };

  return SafeSubscriber;
}(Subscriber);

exports.SafeSubscriber = SafeSubscriber;

/***/ }),

/***/ 91919:
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var isArray_1 = __webpack_require__(/*! ./util/isArray */ 4682);

var isObject_1 = __webpack_require__(/*! ./util/isObject */ 97832);

var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ 57654);

var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ 50492);

var Subscription = function () {
  function Subscription(unsubscribe) {
    this.closed = false;
    this._parentOrParents = null;
    this._subscriptions = null;

    if (unsubscribe) {
      this._unsubscribe = unsubscribe;
    }
  }

  Subscription.prototype.unsubscribe = function () {
    var errors;

    if (this.closed) {
      return;
    }

    var _a = this,
        _parentOrParents = _a._parentOrParents,
        _unsubscribe = _a._unsubscribe,
        _subscriptions = _a._subscriptions;

    this.closed = true;
    this._parentOrParents = null;
    this._subscriptions = null;

    if (_parentOrParents instanceof Subscription) {
      _parentOrParents.remove(this);
    } else if (_parentOrParents !== null) {
      for (var index = 0; index < _parentOrParents.length; ++index) {
        var parent_1 = _parentOrParents[index];
        parent_1.remove(this);
      }
    }

    if (isFunction_1.isFunction(_unsubscribe)) {
      try {
        _unsubscribe.call(this);
      } catch (e) {
        errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
      }
    }

    if (isArray_1.isArray(_subscriptions)) {
      var index = -1;
      var len = _subscriptions.length;

      while (++index < len) {
        var sub = _subscriptions[index];

        if (isObject_1.isObject(sub)) {
          try {
            sub.unsubscribe();
          } catch (e) {
            errors = errors || [];

            if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
              errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
            } else {
              errors.push(e);
            }
          }
        }
      }
    }

    if (errors) {
      throw new UnsubscriptionError_1.UnsubscriptionError(errors);
    }
  };

  Subscription.prototype.add = function (teardown) {
    var subscription = teardown;

    if (!teardown) {
      return Subscription.EMPTY;
    }

    switch (typeof teardown) {
      case 'function':
        subscription = new Subscription(teardown);

      case 'object':
        if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
          return subscription;
        } else if (this.closed) {
          subscription.unsubscribe();
          return subscription;
        } else if (!(subscription instanceof Subscription)) {
          var tmp = subscription;
          subscription = new Subscription();
          subscription._subscriptions = [tmp];
        }

        break;

      default:
        {
          throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
    }

    var _parentOrParents = subscription._parentOrParents;

    if (_parentOrParents === null) {
      subscription._parentOrParents = this;
    } else if (_parentOrParents instanceof Subscription) {
      if (_parentOrParents === this) {
        return subscription;
      }

      subscription._parentOrParents = [_parentOrParents, this];
    } else if (_parentOrParents.indexOf(this) === -1) {
      _parentOrParents.push(this);
    } else {
      return subscription;
    }

    var subscriptions = this._subscriptions;

    if (subscriptions === null) {
      this._subscriptions = [subscription];
    } else {
      subscriptions.push(subscription);
    }

    return subscription;
  };

  Subscription.prototype.remove = function (subscription) {
    var subscriptions = this._subscriptions;

    if (subscriptions) {
      var subscriptionIndex = subscriptions.indexOf(subscription);

      if (subscriptionIndex !== -1) {
        subscriptions.splice(subscriptionIndex, 1);
      }
    }
  };

  Subscription.EMPTY = function (empty) {
    empty.closed = true;
    return empty;
  }(new Subscription());

  return Subscription;
}();

exports.Subscription = Subscription;

function flattenUnsubscriptionErrors(errors) {
  return errors.reduce(function (errs, err) {
    return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
  }, []);
}

/***/ }),

/***/ 38893:
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
  Promise: undefined,

  set useDeprecatedSynchronousErrorHandling(value) {
    if (value) {
      var error = new Error();
      console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
    } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
      console.log('RxJS: Back to a better error behavior. Thank you. <3');
    }

    _enable_super_gross_mode_that_will_cause_bad_things = value;
  },

  get useDeprecatedSynchronousErrorHandling() {
    return _enable_super_gross_mode_that_will_cause_bad_things;
  }

};

/***/ }),

/***/ 28550:
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

exports.observable = function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();

/***/ }),

/***/ 12478:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

exports.rxSubscriber = function () {
  return typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
}();

exports.$$rxSubscriber = exports.rxSubscriber;

/***/ }),

/***/ 6225:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var ObjectUnsubscribedErrorImpl = function () {
  function ObjectUnsubscribedErrorImpl() {
    Error.call(this);
    this.message = 'object unsubscribed';
    this.name = 'ObjectUnsubscribedError';
    return this;
  }

  ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
  return ObjectUnsubscribedErrorImpl;
}();

exports.ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

/***/ }),

/***/ 50492:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var UnsubscriptionErrorImpl = function () {
  function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
      return i + 1 + ") " + err.toString();
    }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
  }

  UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
  return UnsubscriptionErrorImpl;
}();

exports.UnsubscriptionError = UnsubscriptionErrorImpl;

/***/ }),

/***/ 40290:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ 71160);

function canReportError(observer) {
  while (observer) {
    var _a = observer,
        closed_1 = _a.closed,
        destination = _a.destination,
        isStopped = _a.isStopped;

    if (closed_1 || isStopped) {
      return false;
    } else if (destination && destination instanceof Subscriber_1.Subscriber) {
      observer = destination;
    } else {
      observer = null;
    }
  }

  return true;
}

exports.canReportError = canReportError;

/***/ }),

/***/ 65613:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function hostReportError(err) {
  setTimeout(function () {
    throw err;
  }, 0);
}

exports.hostReportError = hostReportError;

/***/ }),

/***/ 1902:
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function identity(x) {
  return x;
}

exports.identity = identity;

/***/ }),

/***/ 4682:
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

exports.isArray = function () {
  return Array.isArray || function (x) {
    return x && typeof x.length === 'number';
  };
}();

/***/ }),

/***/ 57654:
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function isFunction(x) {
  return typeof x === 'function';
}

exports.isFunction = isFunction;

/***/ }),

/***/ 97832:
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function isObject(x) {
  return x !== null && typeof x === 'object';
}

exports.isObject = isObject;

/***/ }),

/***/ 90598:
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var identity_1 = __webpack_require__(/*! ./identity */ 1902);

function pipe() {
  var fns = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }

  return pipeFromArray(fns);
}

exports.pipe = pipe;

function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity_1.identity;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return function piped(input) {
    return fns.reduce(function (prev, fn) {
      return fn(prev);
    }, input);
  };
}

exports.pipeFromArray = pipeFromArray;

/***/ }),

/***/ 27:
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ 71160);

var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ 12478);

var Observer_1 = __webpack_require__(/*! ../Observer */ 70413);

function toSubscriber(nextOrObserver, error, complete) {
  if (nextOrObserver) {
    if (nextOrObserver instanceof Subscriber_1.Subscriber) {
      return nextOrObserver;
    }

    if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
      return nextOrObserver[rxSubscriber_1.rxSubscriber]();
    }
  }

  if (!nextOrObserver && !error && !complete) {
    return new Subscriber_1.Subscriber(Observer_1.empty);
  }

  return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}

exports.toSubscriber = toSubscriber;

/***/ })

}]);
//# sourceMappingURL=default-src_app__LayoutDashboard_projects-summary_projects-summary_component_ts.js.map