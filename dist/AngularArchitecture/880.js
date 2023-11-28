"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([[880],{

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
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _sort_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sort.directive */ 67848);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var src_app_Shared_DateAgo_DateAgoPipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/Shared/DateAgo/DateAgoPipe */ 81802);




//import { LoadingBarService } from '@ngx-loading-bar/core';

















function ProjectsSummaryComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r0.CurrentPageNo, " - ", ctx_r0._CurrentpageRecords, " ");
} }
function ProjectsSummaryComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r1._CurrentpageRecords * (ctx_r1.CurrentPageNo - 1) + 1, " - ", ctx_r1._CurrentpageRecords * ctx_r1.CurrentPageNo, " ");
} }
function ProjectsSummaryComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r2.lastPagerecords * (ctx_r2.CurrentPageNo - 1) + 1, " - ", ctx_r2.lastPagerecords * (ctx_r2.CurrentPageNo - 1) + ctx_r2._CurrentpageRecords, " ");
} }
function ProjectsSummaryComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r3._totalProjectsCount.toLocaleString(), "");
} }
function ProjectsSummaryComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r4._totalProjectsCount, "");
} }
function ProjectsSummaryComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 356)(1, "label", 357)(2, "input", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function ProjectsSummaryComponent_div_70_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16); const item_r13 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r15.isTypeChecked(item_r13)); })("ngModelChange", function ProjectsSummaryComponent_div_70_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16); const item_r13 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](item_r13.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span", 359);
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
function ProjectsSummaryComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 356)(1, "label", 360)(2, "input", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function ProjectsSummaryComponent_div_77_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r20); const item_r18 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r19.isStatusChecked(item_r18)); })("ngModelChange", function ProjectsSummaryComponent_div_77_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r20); const item_r18 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](item_r18.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span", 359);
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
function ProjectsSummaryComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 356)(1, "label", 360)(2, "input", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectsSummaryComponent_div_79_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r22.isChecked = $event); })("click", function ProjectsSummaryComponent_div_79_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r24.onCheckboxClick(ctx_r24.Type)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r7.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r7.cancelcount);
} }
function ProjectsSummaryComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 356)(1, "label", 360)(2, "input", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function ProjectsSummaryComponent_div_85_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27); const item_r25 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r26.isEmpChecked(item_r25)); })("ngModelChange", function ProjectsSummaryComponent_div_85_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27); const item_r25 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](item_r25.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span", 359);
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
function ProjectsSummaryComponent_span_277_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("About (", ctx_r9._CurrentpageRecords, ") results found");
} }
function ProjectsSummaryComponent_tr_312_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "a", 388);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_tr_312_div_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r73); const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r71._OpenMemosInfo(item_r29.Project_Code, item_r29.Project_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "img", 389);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 390);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function ProjectsSummaryComponent_tr_312_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 391);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Actioncount);
} }
function ProjectsSummaryComponent_tr_312_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "No category");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.ReportType);
} }
function ProjectsSummaryComponent_tr_312_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 392);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.SubmissionType1);
} }
function ProjectsSummaryComponent_tr_312_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 392);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](2, 1, item_r29.DeadLine, "dd-MM-yyyy"), "");
} }
function ProjectsSummaryComponent_tr_312_a_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 393)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Owner:", item_r29.Project_Owner, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Owner);
} }
function ProjectsSummaryComponent_tr_312_a_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 393)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Owner & Support: ", item_r29.Project_Owner, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Owner);
} }
function ProjectsSummaryComponent_tr_312_a_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 393)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Responsible: ", item_r29.Team_Res, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Resp);
} }
function ProjectsSummaryComponent_tr_312_a_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 393)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Authority: ", item_r29.Team_Autho, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Autho);
} }
function ProjectsSummaryComponent_tr_312_a_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 393)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Responsible & Authority: ", item_r29.Team_Autho, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Autho);
} }
function ProjectsSummaryComponent_tr_312_a_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 393)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Support: ", item_r29.Team_Support, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Support);
} }
function ProjectsSummaryComponent_tr_312_a_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 394)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "1+");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Coordinator & Informer: ", item_r29.Team_Coor, " ");
} }
function ProjectsSummaryComponent_tr_312_a_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 394)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "1+");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate2"]("title", "Coordinator: ", item_r29.Team_Coor, " & Informer: ", item_r29.Team_Informer, " ");
} }
function ProjectsSummaryComponent_tr_312_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 395);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_50_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 398)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r29.Delaydays, " days");
} }
function ProjectsSummaryComponent_tr_312_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Delay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ProjectsSummaryComponent_tr_312_div_50_span_3_Template, 3, 1, "span", 397);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Delaydays > 0);
} }
function ProjectsSummaryComponent_tr_312_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 399);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "ToDo InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "ToDo Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "New Todo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Completion Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 401);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Cancellation Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 401);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Cancelled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 402);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 399);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Forward Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Project Complete Rejected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Enactive Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Version ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 395);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Deadline Extend Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 403);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Hold ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 403);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Project Hold Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 395);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "ToDo Achieved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Standardtask Enactive Hold ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_312_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr", 363)(1, "td", 364)(2, "a", 365)(3, "i", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_tr_312_Template_i_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r90); const item_r29 = restoredCtx.$implicit; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); ctx_r89.openInfo(item_r29.Project_Code, item_r29.Project_Name); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r89.info_active_btn(item_r29)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "a", 367)(5, "i", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_tr_312_Template_i_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r90); const item_r29 = restoredCtx.$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r91.moreDetails(item_r29.Project_Code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, ProjectsSummaryComponent_tr_312_div_7_Template, 3, 0, "div", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, ProjectsSummaryComponent_tr_312_ng_template_8_Template, 2, 0, "ng-template", null, 370, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "td")(11, "p", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, ProjectsSummaryComponent_tr_312_span_13_Template, 2, 1, "span", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "td")(15, "span", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, ProjectsSummaryComponent_tr_312_div_18_Template, 3, 0, "div", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, ProjectsSummaryComponent_tr_312_ng_template_19_Template, 2, 1, "ng-template", null, 374, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "td")(22, "span", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, ProjectsSummaryComponent_tr_312_div_25_Template, 3, 1, "div", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](26, ProjectsSummaryComponent_tr_312_ng_template_26_Template, 3, 4, "ng-template", null, 375, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "td", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "span", 377);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](32, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "td", 378)(34, "div", 379)(35, "div", 380)(36, "div", 381);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](37, ProjectsSummaryComponent_tr_312_a_37_Template, 3, 2, "a", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](38, ProjectsSummaryComponent_tr_312_a_38_Template, 3, 2, "a", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](39, ProjectsSummaryComponent_tr_312_a_39_Template, 3, 2, "a", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](40, ProjectsSummaryComponent_tr_312_a_40_Template, 3, 2, "a", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](41, ProjectsSummaryComponent_tr_312_a_41_Template, 3, 2, "a", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](42, ProjectsSummaryComponent_tr_312_a_42_Template, 3, 2, "a", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](43, ProjectsSummaryComponent_tr_312_a_43_Template, 3, 1, "a", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](44, ProjectsSummaryComponent_tr_312_a_44_Template, 3, 2, "a", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "span", 384);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "svg", 385);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](47, "path", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "td", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](49, ProjectsSummaryComponent_tr_312_div_49_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](50, ProjectsSummaryComponent_tr_312_div_50_Template, 4, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](51, ProjectsSummaryComponent_tr_312_div_51_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](52, ProjectsSummaryComponent_tr_312_div_52_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](53, ProjectsSummaryComponent_tr_312_div_53_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](54, ProjectsSummaryComponent_tr_312_div_54_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](55, ProjectsSummaryComponent_tr_312_div_55_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](56, ProjectsSummaryComponent_tr_312_div_56_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](57, ProjectsSummaryComponent_tr_312_div_57_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](58, ProjectsSummaryComponent_tr_312_div_58_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](59, ProjectsSummaryComponent_tr_312_div_59_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](60, ProjectsSummaryComponent_tr_312_div_60_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](61, ProjectsSummaryComponent_tr_312_div_61_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](62, ProjectsSummaryComponent_tr_312_div_62_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](63, ProjectsSummaryComponent_tr_312_div_63_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](64, ProjectsSummaryComponent_tr_312_div_64_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](65, ProjectsSummaryComponent_tr_312_div_65_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](66, ProjectsSummaryComponent_tr_312_div_66_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](67, ProjectsSummaryComponent_tr_312_div_67_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](68, ProjectsSummaryComponent_tr_312_div_68_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](69, ProjectsSummaryComponent_tr_312_div_69_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](70, ProjectsSummaryComponent_tr_312_div_70_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](9);
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](20);
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("active", item_r29.isActive);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](29, 44, item_r29.LastUpdate, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](32, 47, item_r29.LastUpdate), "");
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
function ProjectsSummaryComponent_div_313_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 404)(1, "h4");
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
function ProjectsSummaryComponent_div_329_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 406);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r92.Subject, " ");
} }
function ProjectsSummaryComponent_div_329_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "i", 407);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
} if (rf & 2) {
    const item_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r92.Subject, " ");
} }
function ProjectsSummaryComponent_div_329_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 124)(1, "div", 125)(2, "h5", 388);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_div_329_Template_h5_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r100); const item_r92 = restoredCtx.$implicit; const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r99.openUrl(item_r92.Url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ProjectsSummaryComponent_div_329_div_3_Template, 3, 1, "div", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ProjectsSummaryComponent_div_329_ng_template_4_Template, 2, 1, "ng-template", null, 405, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
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
        this.selectedIndex = null;
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
        // JQUERY
        $(document).ready(function () {
            // Action next
            $('.btn-next').on('click', function () {
                // Get value from data-to in button next 
                const n = $(this).attr('data-to');
                // Action trigger click for tag a with id in value n
                $(n).trigger('click');
            });
            // Action back
            $('.btn-prev').on('click', function () {
                // Get value from data-to in button prev
                const n = $(this).attr('data-to');
                // Action trigger click for tag a with id in value n
                $(n).trigger('click');
            });
        });
        $(document).ready(function () {
            $('.card').click(function () {
                $('.card').removeClass("active");
                $(this).addClass("active");
            });
        });
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
        // document.getElementById("Project_info_slider_bar").classList.add("kt-quick-panel--on");
        // this.router.navigate(["../backend/ProjectsSummary/projectinfo", pcode,"1"]);
        // document.getElementById("rightbar-overlay").style.display = "block";
        // // document.getElementById("sumdet").classList.add("position-fixed");
        // document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
        $('#Project_info_slider_bar').addClass('open_sidebar_info');
        this.router.navigate(["../backend/ProjectsSummary/projectinfo", pcode, "1"]);
        document.getElementById("rightbar-overlay").style.display = "block";
        document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    }
    info_active_btn(item) {
        item.isActive = !item.isActive;
        // If you want to allow only one item to be active at a time, uncomment the following lines:
        if (item.isActive) {
            this._ProjectDataList.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.isActive = false;
                }
            });
        }
    }
    OpenProject() {
        document.getElementById("New_project_Add").classList.add("open_sidebar");
        document.getElementById("rightbar-overlay").style.display = "block";
        document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    }
    closeInfo() {
        // $('.project-list_AC').removeClass('active');
        this._ProjectDataList.forEach(item => item.isActive = false);
        this.Clear_Feilds();
        // document.getElementById("Project_info_slider_bar").classList.remove("kt-quick-panel--on");
        document.getElementById("New_project_Add").classList.remove("open_sidebar");
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementById("actyInfobar_header").classList.remove("open_sidebar");
        //document.getElementById("sumdet").classList.remove("position-fixed");
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
        this.router.navigate(["/backend/ProjectsSummary/"]);
        $('#Project_info_slider_bar').removeClass('open_sidebar_info');
    }
    Action_view() {
        document.getElementsByClassName("Adv-option")[0].classList.add("d-none");
        document.getElementsByClassName("Adv-option")[1].classList.add("d-none");
        document.getElementsByClassName("act-view-btns")[0].classList.remove("d-none");
        document.getElementsByClassName("my-crd")[0].classList.remove("d-none");
        document.getElementById("bc_pot").style.display = "block";
    }
    Back_Option() {
        document.getElementsByClassName("Adv-option")[0].classList.remove("d-none");
        document.getElementsByClassName("Adv-option")[1].classList.remove("d-none");
        document.getElementsByClassName("act-view-btns")[0].classList.add("d-none");
        document.getElementsByClassName("my-crd")[0].classList.add("d-none");
        document.getElementById("bc_pot").style.display = "none";
    }
    APPV_view() {
        document.getElementsByClassName("kt-assd-pds")[0].classList.add("d-none");
        document.getElementsByClassName("kt-prd-dtl")[0].classList.remove("d-none");
    }
    Add_actions() {
        document.getElementsByClassName("Add-Act-Move")[0].classList.add("container-fluid");
        document.getElementsByClassName("Add-Act-Move")[0].classList.remove("container");
        document.getElementsByClassName("kt-action-list")[1].classList.remove("d-none");
        document.getElementsByClassName("open-Action-Form")[0].classList.remove("d-none");
        document.getElementsByClassName("kt-portlet__foot")[1].classList.remove("d-none");
        document.getElementById("Action_btn_hide").style.display = "None";
        document.getElementsByClassName("add-w9")[0].classList.add("col-lg-7");
        document.getElementsByClassName("Add-Act-Move")[1].classList.remove("VW_60");
        document.getElementsByClassName("hide-act-btns")[0].classList.remove("d-none");
        document.getElementsByClassName("Project-Ct-full")[0].classList.remove("col-lg-12");
        $('.Add-Act-Move').addClass('container-fluid');
        $('.Add-Act-Move').removeClass('container');
        $('#act_bd_box').addClass('d-none');
        $('.kt-portlet__body').addClass('add-vhd-h');
    }
    Back_Option_Act() {
        document.getElementsByClassName("Add-Act-Move")[0].classList.remove("container-fluid");
        document.getElementsByClassName("Add-Act-Move")[0].classList.add("container");
        document.getElementsByClassName("kt-action-list")[1].classList.add("d-none");
        document.getElementsByClassName("open-Action-Form")[0].classList.add("d-none");
        document.getElementsByClassName("kt-portlet__foot")[1].classList.add("d-none");
        document.getElementById("Action_btn_hide").style.display = "block";
        document.getElementsByClassName("add-w9")[0].classList.remove("col-lg-7");
        $('#act_bd_box').addClass('d-none');
        $('.kt-portlet__body').removeClass('add-vhd-h');
    }
    Close_action() {
        // $('#act_bd_box').show();
        // document.getElementById("act_bd_box").style.display="block";
        $('#act_bd_box').removeClass('d-none');
        document.getElementById("act_bd_box").classList.remove("d-none");
        document.getElementsByClassName("Add-Act-Move")[1].classList.remove("container-fluid");
        document.getElementsByClassName("Add-Act-Move")[1].classList.add("container");
        document.getElementsByClassName("Add-Act-Move")[1].classList.add("VW_60");
        document.getElementsByClassName("open-Action-Form")[0].classList.add("d-none");
        document.getElementsByClassName("add-w9")[0].classList.remove("col-lg-7");
        document.getElementsByClassName("hide-act-btns")[0].classList.add("d-none");
        document.getElementsByClassName("Project-Ct-full")[0].classList.add("col-lg-12");
        document.getElementsByClassName("Project-Ct-full")[1].classList.remove("col-lg-7");
    }
    // project info js -------------------------------------
    Open_project_info() {
        $('#Project_info_slider_bar').addClass('open_sidebar_info');
        document.getElementById("rightbar-overlay").style.display = "block";
        document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
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
        var myWindow = window.open(myurl, "_");
        myWindow.focus();
    }
    newDetails(pcode) {
        let name = 'Details';
        var url = document.baseURI + name;
        var myurl = `${url}/${pcode}`;
        var myWindow = window.open(myurl, "_");
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
ProjectsSummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: ProjectsSummaryComponent, selectors: [["app-projects-summary"]], decls: 1108, vars: 44, consts: [["id", "sumdet", 1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height", "side_view"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi", "mb-2"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "dropdown"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "kt-portlet__head-title", "cursor-pointer", "dropdown-toggle", "select-box"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "main-d"], [3, "ngClass", "click"], [1, "kt-portlet__head-label", "mr-2"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "Project Info!", 1, "btn", "px-0", "mr-2"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "mb-0", 3, "click"], [1, "kt-header__topbar-item", "kt-header__topbar-item--search", "mr-3"], [1, "kt-header__topbar-wrapper"], [1, "kt-quick-search", "kt-quick-search--inline"], [1, "kt-quick-search__form"], [1, "input-group"], ["type", "text", "placeholder", "Search Projects", "autofocus", "", 1, "form-control", "project-search", "kt-quick-search__input", "pl-3", 2, "width", "300px", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "input-group-prepend"], ["type", "submit", 1, "input-group-text", 3, "click"], [1, "flaticon2-search-1"], [1, "mr-3"], [4, "ngIf"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "disabled", "click"], [1, "fas", "fa-angle-left", "mr-0"], [1, "fas", "fa-angle-right", "mr-0"], [1, "mr-1"], ["data-toggle", "kt-tooltip", "title", "Click to sort Asc", 1, "btn", "btn-label-primary", "btn-sm", 3, "hidden", "click"], [1, "fa", "fa-sort-alpha-down-alt", "font-16", "mr-0"], ["data-toggle", "kt-tooltip", "title", "Click to sort Desc", 1, "btn", "btn-label-primary", "btn-sm", 3, "hidden", "click"], [1, "fas", "fa-sort-alpha-up", "font-16", "mr-0"], [1, "stores-sec", "mr-1"], [1, "nav", "navbar-nav", "filters"], ["id", "filtermenu", 1, "dropdown", "mega-dropdown"], ["data-toggle", "dropdown", 3, "ngClass"], [1, "fas", "fa-ellipsis-v", "mr-0"], [1, "dropdown-menu", "mega-dropdown-menu"], [3, "click"], [1, "col-md-10"], [1, "d-inline-block"], [1, "col-md-2"], [1, "col-md-12"], ["type", "text", "placeholder", "Search Filters", 1, "form-control", "kt-quick-search__input", "pl-3", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [1, "col-md-4"], [1, "count-height"], ["class", "d-flex justify-content-between", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-between", 4, "ngIf"], ["data-toggle", "dropdown", 1, "btn", "btn-label-success", "btn-outline-success", "btn-upper", "btn-sm", "btn-bold", "mr-2"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-2", 3, "click"], [1, "btn-group", "d-none"], ["data-toggle", "dropdown", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "filter-dot", "mr-1"], ["id", "div_filters", 1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-fit", "dropdown-width-700", "drop-posn", "filts-dr"], [1, "kt-nav"], [1, "kt-nav__head", "d-flex", "justify-content-between"], [1, "kt-nav__separator"], [1, "kt-nav__item", "px-3", "mb-2"], ["autoFocus", "", "type", "search", "autocomplete", "off", "name", "Search", "placeholder", "Search...", 1, "form-control"], [1, "kt-nav__item", "px-4", "pt-2", 3, "click"], [1, "col-lg-4"], [1, "mb-0"], [1, "height-scroll"], [1, "kt-checkbox", "kt-checkbox--info"], ["type", "checkbox", "name", "companychk", "value", ""], [1, "opts-flx"], [1, "selectd-opts"], [1, "slt-div"], [1, "opt-txt"], ["aria-hidden", "true", 1, "removeButton"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "rmv-icn", "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "px-4", "filt-btns"], [1, "btn", "btn-info", "mr-2", "text-white", "btn-xs"], [1, "btn", "btn-outline-info", "btn-xs", "text-dark-75"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fas", "fa-sync-alt", "mr-0"], [1, "ticks-grad", "mb-3", "mt-3", "d-none"], [1, "col-md-3"], [1, "d-flex", "align-items-center"], [1, ""], [1, "example_icon", 2, "opacity", "1", "transform", "none"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "2", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24"], ["d", "M21.0049 3C21.5572 3 22.0049 3.44772 22.0049 4V9.5C20.6242 9.5 19.5049 10.6193 19.5049 12C19.5049 13.3807 20.6242 14.5 22.0049 14.5V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V14.5C3.38559 14.5 4.50488 13.3807 4.50488 12C4.50488 10.6193 3.38559 9.5 2.00488 9.5V4C2.00488 3.44772 2.4526 3 3.00488 3H21.0049ZM20.0049 5H4.00488V7.968L4.16077 8.04908C5.49935 8.78105 6.42516 10.1735 6.49998 11.7882L6.50488 12C6.50488 13.7042 5.55755 15.1871 4.16077 15.9509L4.00488 16.031V19H20.0049V16.031L19.849 15.9509C18.5104 15.219 17.5846 13.8265 17.5098 12.2118L17.5049 12C17.5049 10.2958 18.4522 8.81287 19.849 8.04908L20.0049 7.968V5ZM16.0049 9V15H8.00488V9H16.0049Z", "fill", "#fff"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "-1 -1 18 18", 1, "bi", "bi-patch-check-fill"], ["d", "M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"], [1, "kt-portlet", "scrollbar1"], [1, "kt-portlet__body", "kt-portlet__body_scroll", "pt-0"], [1, "projects-list", "no-border"], [1, "card-body"], ["id", "project-4_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4", "no-footer"], [1, "col-sm-12"], [1, "table-responsive"], ["role", "grid", 1, "table", "table-hover", "dataTable", "no-footer", "dtr-inline", 2, "width", "0px"], ["role", "row"], ["tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-sort", "ascending", "aria-label", ": activate to sort column descending", 2, "width", "100px"], ["data-order", "desc", "data-name", "Project_Name", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Title &amp; Description: activate to sort column ascending", 1, "curser-pointer", 2, "width", "0px", 3, "appSort", "click"], ["data-toggle", "kt-tooltip", "title", "Click to sort", 1, "mr-2", 3, "hidden"], [1, "fas", "fa-sort-alpha-up"], [1, "fa", "fa-sort-alpha-down-alt"], ["data-order", "desc", "data-name", "Exec_BlockName", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Type: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], [1, "fas", "fa-sort"], ["data-order", "desc", "data-name", "ReportType", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Category: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["data-order", "desc", "data-name", "TM_DisplayName", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "User Name: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["data-order", "desc", "data-name", "DeadLine", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "End Date: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["data-order", "desc", "data-name", "Users", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Users: activate to sort column ascending", 1, "curser-pointer"], ["data-order", "desc", "data-name", "Status", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Status: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["role", "row", "class", "odd project-list_AC", 3, "active", 4, "ngFor", "ngForOf"], ["class", "text-center py-4", "style", "color: lightgrey", 4, "ngIf"], ["id", "MemosSideBar", 1, "sideInfobar", "animate-right"], [1, "kt-portlet__head", "p-3", "bg-primary"], ["href", "javascript:void(0)", 1, "closebtn", "pull-right", "text-white", 3, "click"], [1, "title-sidebar", "mb-0", "text-white"], [1, "curser-pointer"], ["width", "25px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png"], [1, "text-small", "text-white"], [1, "kt-portlet__body", "p-3"], ["id", "accordionExample7", 1, "accordion", "accordion-light", "accordion-svg-icon"], [1, "kt-widget1", "kt-widget1--fit"], ["class", "kt-widget1__item", 4, "ngFor", "ngForOf"], ["id", "DARSideBar", 1, "sideInfobar", "animate-right"], [1, "kt-widget1__item"], [1, "kt-widget1__info", "kt-align-left"], ["id", "Project_info_slider_bar", 1, "project-info-side-bar", "animate-right"], ["id", "New_project_Add", 1, "add_new_project_slide", "animate-right"], [1, "modal-header"], ["data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-icon", "btn-active-color-primary"], [1, "btn", "btn-icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24", "fill", "#ccc"], ["fill", "none", "d", "M0 0h24v24H0z"], ["d", "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"], [1, "kt-portlet__body", "kt-portlet__body_scroll", "p-0"], [1, "container", "Add-Act-Move"], [1, "col", "add-w9"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "justify-content-center", "mb-3", "mt-3", "text-center", "custom"], [1, "step-line"], [1, "nav-item"], ["id", "pills-1-tab", "data-toggle", "pill", "href", "#pills-1", "role", "tab", "aria-controls", "pills-1", "aria-selected", "true", 1, "nav-link", "active", "custom"], [1, "icon"], [1, "text"], ["id", "pills-2-tab", "data-toggle", "pill", "href", "#pills-2", "role", "tab", "aria-controls", "pills-2", "aria-selected", "false", 1, "nav-link", "custom"], ["id", "pills-3-tab", "data-toggle", "pill", "href", "#pills-3", "role", "tab", "aria-controls", "pills-3", "aria-selected", "false", 1, "nav-link", "custom"], ["id", "pills-4-tab", "data-toggle", "pill", "href", "#pills-4", "role", "tab", "aria-controls", "pills-3", "aria-selected", "false", 1, "nav-link", "custom"], ["id", "pills-tabContent", 1, "tab-content", "custom"], ["id", "pills-1", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "section-bottom"], [1, "section-cards"], [1, "card", "active"], [1, "kt-pd-svg"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "80px", "height", "80px", "viewBox", "0 0 24 24", "version", "1.1", "jetwayHooks", "{}"], ["jetwayHookID", "366692D3-B1F2-4C00-B619-21BE6F7C8C98", "id", "cloud-game-servers-24-colored", "stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["jetwayHookID", "36CB1E00-ACE1-4F46-A7A5-F569E64BEB84", "x", "0", "y", "0", "width", "24", "height", "24"], ["jetwayHookID", "1DF457AD-487C-4EB7-8D73-501E58CA30AA", "transform", "translate(3.000000, 3.000000)"], ["d", "M0.76,17.48 L17.48,17.48 C17.8997364,17.48 18.24,17.8202636 18.24,18.24 C18.24,18.6597364 17.8997364,19 17.48,19 L0.76,19 L0.76,19 L0.76,17.48 Z", "jetwayHookID", "A1386B53-136B-4FDE-B39C-E8B23CC4E105", "fill", "#3367D6"], ["d", "M18.24,0 L18.24,0 L18.24,0 L18.24,7.6 C18.24,8.01973641 17.8997364,8.36 17.48,8.36 C17.0602636,8.36 16.72,8.01973641 16.72,7.6 L16.72,1.52 C16.72,0.68052718 17.4005272,1.54208655e-16 18.24,0 Z", "jetwayHookID", "8A5FA304-E2C1-45B3-B491-6E8444A2429C", "fill", "#3367D6", "transform", "translate(17.480000, 4.180000) scale(-1, 1) translate(-17.480000, -4.180000) "], ["d", "M11.4,0 L15.96,0 C16.3797364,1.44940277e-16 16.72,0.34026359 16.72,0.76 C16.72,1.17973641 16.3797364,1.52 15.96,1.52 L11.4,1.52 L11.4,1.52 L11.4,0 Z", "jetwayHookID", "DA985DDD-E55A-4384-BEE8-A4BB2235A434", "fill", "#5C85DE", "transform", "translate(14.060000, 0.760000) scale(-1, 1) translate(-14.060000, -0.760000) "], ["d", "M11.4,6.84 L17.48,6.84 C17.8997364,6.84 18.24,7.18026359 18.24,7.6 C18.24,8.01973641 17.8997364,8.36 17.48,8.36 L11.4,8.36 L11.4,8.36 L11.4,6.84 Z", "jetwayHookID", "076CBF64-54ED-45F7-B7C1-FB729FE6CEB6", "fill", "#3367D6", "transform", "translate(14.820000, 7.600000) scale(-1, 1) translate(-14.820000, -7.600000) "], ["d", "M0,6.84 L6.08,6.84 C6.49973641,6.84 6.84,7.18026359 6.84,7.6 C6.84,8.01973641 6.49973641,8.36 6.08,8.36 L0,8.36 L0,8.36 L0,6.84 Z", "jetwayHookID", "9D7490DB-3E00-48F3-9F67-3A8484F6479D", "fill", "#3367D6"], ["d", "M1.52,0 L1.52,0 L1.52,0 L1.52,7.6 C1.52,8.01973641 1.17973641,8.36 0.76,8.36 C0.34026359,8.36 1.05060361e-15,8.01973641 0,7.6 L0,1.52 C-1.0280577e-16,0.68052718 0.68052718,1.54208655e-16 1.52,0 Z", "jetwayHookID", "8A85673F-D7EF-46DF-A9B9-C06B2CA4C8DE", "fill", "#3367D6"], ["d", "M1.52,0 L6.08,0 C6.49973641,3.39179748e-17 6.84,0.34026359 6.84,0.76 C6.84,1.17973641 6.49973641,1.52 6.08,1.52 L1.52,1.52 L1.52,1.52 L1.52,0 Z", "jetwayHookID", "81A39E20-6B50-4A6C-BB70-8E390C348701", "fill", "#5C85DE"], ["jetwayHookID", "0824AAAC-7FBF-431A-A45C-51709E950122", "transform", "translate(14.820000, 14.440000) scale(-1, 1) translate(-14.820000, -14.440000) translate(11.400000, 9.880000)"], ["d", "M1.71,-1.17820905e-14 L1.71,-1.17820905e-14 L1.71,-1.17820905e-14 L1.71,8.265 C1.71,8.73720346 1.32720346,9.12 0.855,9.12 C0.382796539,9.12 1.16805127e-15,8.73720346 0,8.265 L0,1.71 C-1.15656491e-16,0.765593078 0.765593078,-1.16086057e-14 1.71,-1.17820905e-14 Z", "jetwayHookID", "5142CCCE-FF3E-4E8F-AE47-789A9DDC3642", "fill", "#3367D6"], ["d", "M1.71,0 L6.01090909,0 C6.46880336,5.08395105e-16 6.84,0.371196644 6.84,0.829090909 C6.84,1.28698517 6.46880336,1.65818182 6.01090909,1.65818182 L1.71,1.65818182 L1.71,1.65818182 L1.71,0 Z", "jetwayHookID", "5A28F64E-1331-40C4-B901-8E3C7B78DC05", "fill", "#5C85DE"], ["jetwayHookID", "A0E769E5-1774-4CDF-8721-E7D659D2CF3B", "transform", "translate(0.000000, 9.880000)"], ["d", "M1.71,0 L1.71,0 L1.71,0 L1.71,8.265 C1.71,8.73720346 1.32720346,9.12 0.855,9.12 C0.382796539,9.12 -3.86260964e-16,8.73720346 0,8.265 L0,1.71 C-1.15656491e-16,0.765593078 0.765593078,1.73484737e-16 1.71,0 Z", "jetwayHookID", "F0FB98A6-D291-4BB0-86D2-8A5EA62D6574", "fill", "#3367D6"], ["d", "M1.71,0 L6.01090909,0 C6.46880336,2.69084905e-17 6.84,0.371196644 6.84,0.829090909 C6.84,1.28698517 6.46880336,1.65818182 6.01090909,1.65818182 L1.71,1.65818182 L1.71,1.65818182 L1.71,0 Z", "jetwayHookID", "8DBDB72D-D9BC-4329-814E-42F7C8CE44A5", "fill", "#5C85DE"], ["jetwayHookID", "335B7DD7-A866-4092-B323-091474842FFC", "fill", "#3367D6", "points", "13.68 5.016 10.336 5.016 10.336 8.36 8.664 8.36 8.664 5.016 5.32 5.016 5.32 3.344 8.664 3.344 8.664 0 10.336 0 10.336 3.344 13.68 3.344"], ["d", "M12.4938062,14.0138062 C12.9388812,13.5687313 13.6611188,13.5687313 14.1061938,14.0138062 C14.5512687,14.4588812 14.5512687,15.1811188 14.1061938,15.6261938 C13.6611188,16.0712687 12.9388812,16.0712687 12.4938062,15.6261938 C12.0487313,15.1811188 12.0487313,14.4588812 12.4938062,14.0138062 Z", "jetwayHookID", "B7E0ABCA-9878-41FD-BA02-74A25C5E0101", "fill", "#3367D6"], ["d", "M8.31380621,15.6261938 C7.86873126,15.1811188 7.86873126,14.4588812 8.31380621,14.0138062 C8.75888115,13.5687313 9.48111885,13.5687313 9.92619379,14.0138062 C10.3712687,14.4588812 10.3712687,15.1811188 9.92619379,15.6261938 C9.48111885,16.0712687 8.75888115,16.0712687 8.31380621,15.6261938", "jetwayHookID", "77B82BE9-0886-4564-A038-8EB1D5F9F271", "fill", "#3367D6"], ["d", "M8.31380621,11.8261938 C7.86873126,11.3811188 7.86873126,10.6588812 8.31380621,10.2138062 C8.75888115,9.76873126 9.48111885,9.76873126 9.92619379,10.2138062 C10.3712687,10.6588812 10.3712687,11.3811188 9.92619379,11.8261938 C9.48111885,12.2712687 8.75888115,12.2712687 8.31380621,11.8261938", "jetwayHookID", "E588DF94-00F8-4EF2-8F4A-966EF5F61F1F", "fill", "#5C85DE"], ["d", "M4.13380621,15.6261938 C3.68873126,15.1811188 3.68873126,14.4588812 4.13380621,14.0138062 C4.57888115,13.5687313 5.30111885,13.5687313 5.74619379,14.0138062 C6.19126874,14.4588812 6.19126874,15.1811188 5.74619379,15.6261938 C5.30111885,16.0712687 4.57888115,16.0712687 4.13380621,15.6261938", "jetwayHookID", "E0808619-CFA9-46EA-802C-2478869022F4", "fill", "#3367D6"], [1, "kt-cd-tlv"], [1, "card"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "80px", "height", "80px", "viewBox", "0 0 24 24", "version", "1.1"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["x", "0", "y", "0", "width", "24", "height", "24"], ["transform", "translate(2.062500, 2.812500)", "fill-rule", "nonzero"], ["fill", "#185ABC", "cx", "1.649625", "cy", "1.65", "rx", "1.649625", "ry", "1.65"], ["fill", "#185ABC", "cx", "1.649625", "cy", "9.1297616", "rx", "1.649625", "ry", "1.65"], ["fill", "#185ABC", "cx", "1.649625", "cy", "16.6095232", "rx", "1.649625", "ry", "1.65"], ["fill", "#185ABC", "cx", "17.6941875", "cy", "9.13062371", "r", "2.0625"], ["d", "M4.88925,10.120268 L8.3773125,10.120268 C8.51476433,9.88190788 8.66401604,9.65069595 8.8245,9.4275116 L9.0331875,9.12631314 C8.8145625,8.82511469 8.605875,8.51387629 8.3971875,8.1223183 L4.88925,8.1223183 C4.96522553,8.38052276 5.01190022,8.64661662 5.028375,8.91547423 L5.028375,9.33715206 C5.01273823,9.60282137 4.96603851,9.86568784 4.88925,10.120268 Z", "fill", "#669DF6"], ["d", "M11.4380625,6.09424871 L11.2095,5.68261082 L10.93125,5.2207732 L10.494,4.34729768 C9.241875,1.83731057 7.95,0.682716495 5.346375,0.682716495 L4.88925,0.682716495 C4.98314234,1.0088872 5.02999933,1.34703044 5.028375,1.68671134 C5.0302779,2.0264111 4.98341533,2.36459463 4.88925,2.69070619 L5.346375,2.69070619 C6.95625,2.69070619 7.6618125,3.20274356 8.6356875,4.97981443 L8.8741875,5.41153222 L9.1126875,5.89344974 C10.553625,8.80503479 11.5970625,9.90942912 14.011875,10.1503879 C13.932969,9.82166447 13.8929393,9.48464468 13.892625,9.14639304 C13.8937418,8.80690401 13.9405456,8.46914494 14.03175,8.1423982 L14.091375,8.1423982 C12.91875,8.03195876 12.243,7.51992139 11.4380625,6.09424871 Z", "fill", "#185ABC"], ["d", "M9.6095625,11.485701 L9.3710625,11.9374987 L8.9934375,12.7005348 L8.7549375,13.1523325 L8.526375,13.5639704 C7.612125,15.1804021 6.896625,15.6522796 5.346375,15.6522796 L4.88925,15.6522796 C4.96690716,15.9100795 5.01361706,16.1763741 5.028375,16.4454356 L5.028375,16.8169137 C5.01277982,17.0858764 4.96608733,17.3520717 4.88925,17.6100696 L5.60475,17.6100696 C7.9996875,17.5397899 9.2915625,16.3751559 10.5735,13.9555284 L11.110125,12.8812539 L11.3188125,12.4896959 L11.4976875,12.1583776 C11.641561,11.9075733 11.8008742,11.6661399 11.9746875,11.4355013 C11.3580959,11.202557 10.7864145,10.862807 10.2853125,10.4315064 C10.032207,10.7638576 9.80621522,11.116413 9.6095625,11.485701 Z", "fill", "#669DF6"], ["xmlns", "http://www.w3.org/2000/svg", "width", "100px", "height", "100px", "viewBox", "0 0 24 24", "id", "Artwork", "fill", "#000000"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["d", "M12,6.23h0L7.28,8.33v3.15A6.73,6.73,0,0,0,10,16.79a5.75,5.75,0,0,0,2,1h0Z", 2, "fill", "#669df6"], ["d", "M12,17.77a6.52,6.52,0,0,0,4.72-6.29V8.33L12,6.23Z", 2, "fill", "#185abc"], ["d", "M17.08,11.62c0,.26,0,.51-.06.76H19.4v-.76Z", 2, "fill", "#185abc"], ["d", "M6.92,11.62c0,.26,0,.51.06.76H4.6v-.76Z", 2, "fill", "#185abc"], ["d", "M3.59,12.73a.73.73,0,0,1,0-1.46v-.6a1.33,1.33,0,1,0,0,2.66Z", 2, "fill", "#aecbfa"], ["d", "M14.22,14.27a.56.56,0,0,1-.56.55H10.34l-.1,0a.54.54,0,0,1-.45-.53V11.5a.55.55,0,0,1,.55-.55h.28v-.56a1.39,1.39,0,0,1,2.77,0V11h.27a.33.33,0,0,1,.15,0,.54.54,0,0,1,.38.42.29.29,0,0,1,0,.1ZM12,9.54h-.1a.85.85,0,0,0-.75.74s0,.07,0,.1V11h1.72v-.56a.85.85,0,0,0-.08-.35A.84.84,0,0,0,12,9.54Z", 2, "fill", "#fff"], ["d", "M12.25,11.58l-1.1,1.47h.63v1.11l1.07-1.49h-.6Z", 2, "fill", "#185abc"], ["d", "M3.59,13.33A1.32,1.32,0,0,0,4.92,12v0a1.32,1.32,0,0,0-1.33-1.33v.6a.73.73,0,0,1,0,1.46Z", 2, "fill", "#669df6"], ["d", "M20.41,12.73a.73.73,0,0,1,0-1.46v-.6a1.33,1.33,0,0,0,0,2.66Z", 2, "fill", "#aecbfa"], ["d", "M20.41,13.33A1.32,1.32,0,0,0,21.75,12v0a1.33,1.33,0,0,0-1.34-1.33v.6a.73.73,0,1,1,0,1.46Z", 2, "fill", "#669df6"], [1, "kt-ctv-btn"], ["type", "button", "data-to", "#pills-2-tab", 1, "btn", "btn-primary", "my-ct-v-btn", "btn-next"], ["id", "pills-2", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], [1, "kt-assd-pds"], [1, "col-lg-12", "mb-3"], [1, "my-sub-task-tittle", "mt-3", "mb-2"], [1, "kt-action-list"], [1, "kt-act-card", "d-flex", "align-items-center"], [1, "kt-act-no"], [1, "kt-act-info"], [1, "kt-act-ttl-v"], [1, "d-flex"], [1, "kt-vi-act-dtl"], [1, "kt-act-svg-ic"], ["xmlns", "http://www.w3.org/2000/svg", "width", "15px", "height", "15px", "viewBox", "0 0 1024 1024", "version", "1.1", 1, "icon"], ["d", "M892.1 938.7H131.9c-17.8 0-35.1-3.5-51.4-10.4-15.6-6.6-29.7-16.1-41.9-28.2C26.5 888 17 873.9 10.3 858.2 3.5 841.8 0 824.5 0 806.8V217.2c0-17.8 3.5-35 10.4-51.3 6.6-15.7 16.1-29.8 28.2-41.9 12.2-12.2 26.3-21.7 42-28.3 16.2-6.9 33.5-10.4 51.3-10.4h83.4c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7h-83.4c-6.3 0-12.4 1.2-18.1 3.6-5.6 2.4-10.6 5.7-14.9 10-4.3 4.3-7.6 9.2-10 14.8-2.4 5.7-3.6 11.8-3.6 18.1v589.6c0 6.3 1.2 12.4 3.7 18.1 2.3 5.5 5.7 10.5 10 14.8 4.3 4.2 9.2 7.6 14.8 9.9 5.8 2.4 11.9 3.7 18.1 3.7h760.2c6.3 0 12.4-1.2 18.1-3.6 5.6-2.4 10.6-5.7 14.9-10 4.3-4.3 7.6-9.2 10-14.8 2.4-5.7 3.6-11.8 3.6-18.1V217.2c0-6.3-1.2-12.4-3.7-18.1-2.3-5.5-5.7-10.5-10-14.8-4.3-4.2-9.2-7.6-14.8-9.9-5.8-2.4-11.9-3.7-18.1-3.7h-83.4c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h83.4c17.8 0 35.1 3.5 51.4 10.4 15.6 6.6 29.7 16.1 41.9 28.2 12.1 12.1 21.6 26.2 28.3 41.9 6.9 16.3 10.4 33.6 10.4 51.4v589.6c0 17.8-3.5 35-10.4 51.3-6.6 15.7-16.1 29.8-28.2 41.9-12.2 12.2-26.3 21.7-42 28.3-16.3 6.9-33.6 10.4-51.4 10.4z", "fill", "#3688FF"], ["d", "M341.3 277.3c-23.6 0-42.7-19.1-42.7-42.7V85.3c0-23.6 19.1-42.7 42.7-42.7S384 61.8 384 85.3v149.3c0 23.6-19.1 42.7-42.7 42.7zM682.7 277.3c-23.6 0-42.7-19.1-42.7-42.7V85.3c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v149.3c-0.1 23.6-19.2 42.7-42.7 42.7zM810.7 490.7H213.3c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h597.3c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.6 42.7zM810.7 704H213.3c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h597.3c23.6 0 42.7 19.1 42.7 42.7S834.2 704 810.7 704z", "fill", "#5F6379"], [1, "kt-act-ic-info"], ["width", "15px", "height", "15px", "viewBox", "0 0 1024.00 1024.00", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "fill", "#3688ff", "stroke", "#3688ff", "stroke-width", "0.01024", 1, "icon"], ["d", "M39.76192 512a472.23808 459.43808 0 1 0 944.47616 0 472.23808 459.43808 0 1 0-944.47616 0Z", "fill", "#3688ff"], ["d", "M94.09536 512a417.90464 406.57408 0 1 0 835.80928 0 417.90464 406.57408 0 1 0-835.80928 0Z", "fill", "#FFFFFF"], ["d", "M470.24128 512a41.75872 40.6272 0 1 0 83.51744 0 41.75872 40.6272 0 1 0-83.51744 0Z", "fill", "#000000"], ["d", "M528.7168 472.93952c0 8.9856-7.48544 16.26624-16.7168 16.26624-9.23136 0-16.7168-7.28064-16.7168-16.26624V253.35808c0-8.9856 7.48544-16.26624 16.7168-16.26624 9.23136 0 16.7168 7.28064 16.7168 16.26624v219.58144zM476.83584 532.25984c7.03488-5.82144 17.5872-4.992 23.56736 1.85344a15.96416 15.96416 0 0 1-1.90464 22.92736l-101.88288 84.3008c-7.03488 5.82144-17.5872 4.992-23.56736-1.85344a15.96416 15.96416 0 0 1 1.90464-22.92736l101.88288-84.3008z", "fill", "#000000"], ["d", "M512 661.3c-117.6 0-213.3-95.7-213.3-213.3S394.4 234.7 512 234.7 725.3 330.4 725.3 448 629.6 661.3 512 661.3z m0-341.3c-70.6 0-128 57.4-128 128s57.4 128 128 128 128-57.4 128-128-57.4-128-128-128z", "fill", "#5F6379"], ["d", "M837 862.9c-15.7 0-30.8-8.7-38.2-23.7C744.3 729.5 634.4 661.3 512 661.3s-232.3 68.1-286.8 177.9c-10.5 21.1-36.1 29.7-57.2 19.2s-29.7-36.1-19.2-57.2C217.8 662.3 357 576 512 576s294.2 86.3 363.2 225.2c10.5 21.1 1.9 46.7-19.2 57.2-6.1 3-12.6 4.5-19 4.5z", "fill", "#5F6379"], ["d", "M512 1002.7c-270.6 0-490.7-220.1-490.7-490.7S241.4 21.3 512 21.3s490.7 220.1 490.7 490.7-220.1 490.7-490.7 490.7z m0-896c-223.5 0-405.3 181.8-405.3 405.3S288.5 917.3 512 917.3 917.3 735.5 917.3 512 735.5 106.7 512 106.7z", "fill", "#3688FF"], [1, "kt-act-btns"], [1, "kt-dl-icon", "db-v"], [1, "kt-svg-ic"], ["width", "26px", "height", "26px", "viewBox", "0 0 23 23", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "12", "cy", "12", "r", "9", "fill", "#ff4d4d", "fill-opacity", "0.24"], ["d", "M9.00009 14.9997L15.0001 8.99966", "stroke", "#d10000", "stroke-width", "1.44"], ["d", "M15 15L9 9", "stroke", "#d10000", "stroke-width", "1.44"], [1, "kt-dl-icon"], [1, "kt-svg-ic", 3, "click"], ["width", "26px", "height", "26px", "viewBox", "2 2 19 19", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "12", "cy", "12", "r", "8", "fill", "#0091eb", "fill-opacity", "0.24"], ["d", "M9.5 12L11.3939 13.8939C11.4525 13.9525 11.5475 13.9525 11.6061 13.8939L15.5 10", "stroke", "#0091eb", "stroke-width", "1.56"], [1, "kt-prd-dtl", "d-none"], [1, "col-lg-12", "mb-2"], [1, "form-group", "text-dark-50", "w-75px", "flex-grow-1", "brdng-0"], [1, "text-danger"], ["type", "text", "placeholder", "Give your Project Name", 1, "form-control", "ng-pristine"], ["data-kt-autosize", "true", "placeholder", "Add a Description", 1, "form-control", "form-control", "kt-desc-textarea"], [1, "col-lg-6", "mb-2"], ["placeholder", "Select Type..", 1, "kt-form-vd"], ["type", "text", "placeholder", "add google map location..", 1, "form-control", "ng-pristine"], [1, "kt-lc-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pin-map"], ["fill-rule", "evenodd", "d", "M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"], ["fill-rule", "evenodd", "d", "M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"], ["href", "https://maps.app.goo.gl/i6pCxHn5imNotrhq5"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22px", "height", "22px", "viewBox", "0 0 1024 1024", "version", "1.1", 1, "icon"], ["d", "M823.3 938.8H229.4c-71.6 0-129.8-58.2-129.8-129.8V215.1c0-71.6 58.2-129.8 129.8-129.8h297c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7h-297c-24.5 0-44.4 19.9-44.4 44.4V809c0 24.5 19.9 44.4 44.4 44.4h593.9c24.5 0 44.4-19.9 44.4-44.4V512c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v297c0 71.6-58.2 129.8-129.8 129.8z", "fill", "#3688FF"], ["d", "M483 756.5c-1.8 0-3.5-0.1-5.3-0.3l-134.5-16.8c-19.4-2.4-34.6-17.7-37-37l-16.8-134.5c-1.6-13.1 2.9-26.2 12.2-35.5l374.6-374.6c51.1-51.1 134.2-51.1 185.3 0l26.3 26.3c24.8 24.7 38.4 57.6 38.4 92.7 0 35-13.6 67.9-38.4 92.7L513.2 744c-8.1 8.1-19 12.5-30.2 12.5z m-96.3-97.7l80.8 10.1 359.8-359.8c8.6-8.6 13.4-20.1 13.4-32.3 0-12.2-4.8-23.7-13.4-32.3L801 218.2c-17.9-17.8-46.8-17.8-64.6 0L376.6 578l10.1 80.8z", "fill", "#5F6379"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20px", "height", "20px", "viewBox", "0 0 1024 1024", "version", "1.1", 1, "icon"], ["d", "M779.5 1002.7h-535c-64.3 0-116.5-52.3-116.5-116.5V170.7h768v715.5c0 64.2-52.3 116.5-116.5 116.5zM213.3 256v630.1c0 17.2 14 31.2 31.2 31.2h534.9c17.2 0 31.2-14 31.2-31.2V256H213.3z", "fill", "#3688FF"], ["d", "M917.3 256H106.7C83.1 256 64 236.9 64 213.3s19.1-42.7 42.7-42.7h810.7c23.6 0 42.7 19.1 42.7 42.7S940.9 256 917.3 256zM618.7 128H405.3c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h213.3c23.6 0 42.7 19.1 42.7 42.7S642.2 128 618.7 128zM405.3 725.3c-23.6 0-42.7-19.1-42.7-42.7v-256c0-23.6 19.1-42.7 42.7-42.7S448 403 448 426.6v256c0 23.6-19.1 42.7-42.7 42.7zM618.7 725.3c-23.6 0-42.7-19.1-42.7-42.7v-256c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v256c-0.1 23.6-19.2 42.7-42.7 42.7z", "fill", "#5F6379"], [1, "kt-ctv-btn-two"], ["type", "button", "data-to", "#pills-1-tab", 1, "btn", "btn-primary", "my-ct-v-btn-back", "btn-prev"], ["type", "button", "data-to", "#pills-3-tab", 1, "btn", "btn-primary", "my-ct-v-btn", "btn-next"], ["id", "pills-3", "role", "tabpanel", "aria-labelledby", "pills-contact-tab", 1, "tab-pane", "fade"], ["type", "text", "placeholder", "Select Option", 1, "form-control", "ng-pristine"], [1, "kt-support-view"], [1, "symbol-group", "symbol-hover", "flex-nowrap"], ["data-bs-toggle", "tooltip", "data-bs-original-title", "Alan Warden", "data-kt-initialized", "1", 1, "symbol", "symbol-35px", "symbol-circle"], [1, "symbol-label", "bg-warning", "text-inverse-warning", "fw-bold"], ["data-bs-toggle", "tooltip", "aria-label", "Michael Eberon", "data-bs-original-title", "Michael Eberon", "data-kt-initialized", "1", 1, "symbol", "symbol-35px", "symbol-circle"], ["alt", "Pic", "src", "https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-11.jpg"], ["data-bs-toggle", "tooltip", "data-bs-original-title", "Susan Redwood", "data-kt-initialized", "1", 1, "symbol", "symbol-35px", "symbol-circle"], [1, "symbol-label", "bg-primary", "text-inverse-primary", "fw-bold"], ["data-bs-toggle", "tooltip", "aria-label", "Melody Macy", "data-bs-original-title", "Melody Macy", "data-kt-initialized", "1", 1, "symbol", "symbol-35px", "symbol-circle"], ["alt", "Pic", "src", "https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-2.jpg"], ["data-bs-toggle", "tooltip", "data-bs-original-title", "Perry Matthew", "data-kt-initialized", "1", 1, "symbol", "symbol-35px", "symbol-circle"], [1, "symbol-label", "bg-danger", "text-inverse-danger", "fw-bold"], ["data-bs-toggle", "tooltip", "aria-label", "Barry Walter", "data-bs-original-title", "Barry Walter", "data-kt-initialized", "1", 1, "symbol", "symbol-35px", "symbol-circle"], ["alt", "Pic", "src", "https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-12.jpg"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#kt_modal_view_users", 1, "symbol", "symbol-35px", "symbol-circle"], [1, "symbol-label", "bg-dark", "text-gray-300", "fs-8", "fw-bold"], ["type", "button", "data-to", "#pills-2-tab", 1, "btn", "btn-primary", "my-ct-v-btn-back", "btn-prev"], ["type", "button", "data-to", "#pills-4-tab", 1, "btn", "btn-primary", "my-ct-v-btn", "btn-next"], ["id", "pills-4", "role", "tabpanel", "aria-labelledby", "pills-contact-tab", 1, "tab-pane", "fade"], [1, "section-bottom", "Adv-option"], ["type", "date", "placeholder", "Select Date", 1, "form-control", "ng-pristine"], [1, "formbold-mb-5", "formbold-file-input"], ["type", "file", "name", "file", "id", "file"], ["for", "file"], [1, "formbold-drop-file"], [1, "formbold-or"], [1, "formbold-browse"], [1, "formbold-file-list", "formbold-mb-5"], [1, "formbold-file-item"], [1, "formbold-file-name"], ["width", "10", "height", "10", "viewBox", "0 0 10 10", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z", "fill", "currentColor"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z", "fill", "currentColor"], [1, "kt-ctv-btn-two", "Adv-option"], ["type", "button", "data-to", "#pills-3-tab", 1, "btn", "btn-primary", "my-ct-v-btn-back", "btn-prev"], ["type", "button", "data-to", "#pills-4-tab", 1, "btn", "btn-primary", "my-ct-v-btn", "btn-next", "Action-v-btn", 3, "click"], [1, "my-crd", "mb-6", "mb-xl-9", "d-none"], [1, "card-body", "pt-9", "pb-0"], [1, "d-flex", "flex-wrap", "flex-sm-nowrap", "mb-6"], [1, "d-flex", "flex-center", "flex-shrink-0", "bg-light", "rounded", "w-100px", "h-100px", "w-lg-150px", "h-lg-150px", "me-2", "mb-2"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACg0lEQVR4nO1avW7bMBDWlr0gByq1gaJ5hCRAhw5ZiiAuUPQB3K0OyNSZOrVAwCVZssRAu3RxqQB9ARud00rOnowd+gbx7B8BLGhbjiooUuSYpqTcBxAGhNOR/HD3HS2eZQGmePJ0fxsR1sOEDbHNZOEHYUO1H7UvKw2o2iCYsL7xReshoq/2l0wAoY2pMe1sbDTXrAWBCeUzP9y0vdoHJqyr7BFh75e6kCIQkMkeAwEUIgCbFiutQnjfFLBLOkADKIigBVUgARiqAI0tg8g+eI0IHcQJi3qO1mktjciwj+g7JuwzRQBap7VkAtheKgEhH9F3TNhnIiArcnO0zWqPgQAKEYAhBVghq4BWDUAFqAJaCciK3Kh6VnsMBFCIAAwpwLRVAWxP7xpI5VCefbqSnuNPRvNdZ+JL/QbPksZD7V0xHrrC711+H22vrApsbp7USaUpAwJan6+NETAfYtz/dS5v7wp0iqDr+I3ZxJ2fLblmsgqo+V3hd6ck+Ld3BVoJEGM+Cz+ehzIYux68AgK0hvQC9kCAgAjgkAJ50YD62x9/ohUiQFi5S6sBb159u0jyG/goPQFuxDZYJBAgIAI4pIDzCDTgLpQ+BeqPvQw2Tf8XQPM2OdZddpucKQIu2gO5u/NlYn/04XcKAdXyNko+e/5Rdr7eJBMwb5W1qVeWVlm7cihfvjiV7eO/sRES931CC5JSYJGhBPEuwYzivy9A5SFgzJcxf+EJcFP8ptkBAQIigEMKrAKgAQJEkEMVcKAMSjgIOXAUlstMhVUfqXNTBYAAp2gR4MwbJPI1wg0SOqFaUVRLSr42H2mR0Q3VlOQ5vqealAznvZrf652PtrRv2ioI/gGpqVHaVMedFgAAAABJRU5ErkJggg==", "alt", "image", 1, "mw-50px", "mw-lg-75px"], [1, "d-flex", "justify-content-between", "align-items-start", "flex-wrap", "mb-2"], [1, "d-flex", "flex-column"], [1, "d-flex", "align-items-center", "mb-1"], ["href", "#", 1, "text-gray-800", "text-hover-primary", "fs-2", "fw-bold", "me-3"], [1, "d-flex", "flex-wrap", "fw-semibold", "mb-2", "fs-5", "text-gray-400"], [1, "flex-grow-1", "w-100"], [1, "d-flex", "flex-wrap"], [1, "dtl-bg-light-v", "border", "border-gray-300", "border-dashed", "rounded", "min-w-125px", "py-3", "px-4", "me-8", "mr-2"], [1, "fs-7", "fw-stl"], [1, "fw-semi-lt", "fs-8"], [1, "wd-xv"], ["id", "Action_btn_hide", 1, "kt-ctv-btn-two", "act-view-btns", "d-none"], [1, "justify-content-between", "d-flex", "align-items-center", "w-100"], [1, "kt-left-option"], [1, "form-group", "mb-0"], [1, "checkbox-list"], [1, "checkbox", "kt-fnt-vd"], ["type", "checkbox", "name", "Checkboxes1"], [1, "kt-right-act-btn"], ["type", "button", 1, "btn", "btn-primary", "my-ct-v-btn-back", "btn-prev", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "my-ct-v-btn", "btn-next", 3, "click"], ["id", "act_bd_box", 1, "act-bd-box", "d-none"], [1, "kt-action-list", "d-none"], [1, "col-lg-5", "open-Action-Form", "d-none"], [1, "right-side-act"], [1, "Act-tittle-Right"], [1, "kt-Action-Form"], ["type", "text", "placeholder", "Enter Action Name...", 1, "form-control", "ng-pristine"], ["data-kt-autosize", "true", "placeholder", "Add action Description...", 1, "form-control", "form-control", "kt-desc-textarea"], ["placeholder", "Select Employee..", 1, "kt-form-vd"], ["for", "f-option", 1, "l-radio"], ["type", "radio", "id", "f-option", "name", "selector", "tabindex", "1"], ["for", "s-option", 1, "l-radio"], ["type", "radio", "id", "s-option", "name", "selector", "tabindex", "2"], [1, "col-lg-6", "mb-1"], ["_ngcontent-onv-c392", "", "type", "date", "placeholder", "Start Date", 1, "form-control", "ng-pristine"], ["_ngcontent-onv-c392", "", "type", "date", "placeholder", "End Date", 1, "form-control", "ng-pristine"], [1, "col-lg-12", "mb-1"], ["_ngcontent-onv-c392", "", "type", "number", "placeholder", "Enter Total Hours", 1, "form-control", "ng-pristine"], ["data-kt-autosize", "true", "placeholder", "Enter Action remarks if any...", 1, "form-control", "form-control", "kt-desc-textarea"], ["for", "file", 1, "my-chosse-flv"], [1, "kt-portlet__foot", "d-none", "px-3", "py-2"], [1, "container-fluid", "Add-Act-Move"], [1, "col-lg-7", "Project-Ct-full"], [1, "kt-ctv-btn-two", "mt-0"], ["type", "button", 1, "btn", "btn-primary", "my-ct-v-btn", "btn-next"], [1, "col-lg-5", "hide-act-btns"], [1, "kt-ctv-btn-two", "mt-0", "kt-right-style"], ["type", "button", 1, "btn", "btn-primary", "my-ct-v-btn-back", "sm-btn-close", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "my-ct-v-btn", "sm-btn-submit"], ["id", "rightbar-overlay", 3, "click"], [1, "d-flex", "justify-content-between"], [1, "kt-checkbox"], ["type", "checkbox", 3, "ngModel", "change", "ngModelChange"], [1, "count-btn"], [1, "kt-checkbox", "mb-3"], ["type", "checkbox", 3, "ngModel", "checked", "change", "ngModelChange"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "click"], ["role", "row", 1, "odd", "project-list_AC"], ["align", "center"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "Project Info!", 1, "btn", "px-0", "mr-2", "curser-pointer"], [1, "fa", "fa-info-circle", "info-icon-cir", 3, "click"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "More Info!", 1, "btn", "px-0", "mr-2", "curser-pointer"], [1, "fa", "fa-chart-bar", "info-icon-cir", 3, "click"], [4, "ngIf", "ngIfElse"], ["not_Linked", ""], [1, "kt-widget__title", "mb-0"], ["class", "count2", 4, "ngIf"], [1, "kt-widget__other"], ["ReportType", ""], ["Projecttype", ""], ["data-toggle", "tooltip", "data-placement", "top", 3, "title"], [1, "kt-widget__other", "text-info"], ["data-toggle", "tooltip", "data-placement", "top", "title", "RACIS"], [1, "kt-widget__details"], [1, "kt-section__content", "kt-section__content--solid"], [1, "kt-media-group"], ["data-toggle", "kt-tooltip", "data-skin", "brand", "data-placement", "top", "data-original-title", "John Myer", "class", "kt-media kt-media--sm kt-media--circle", 3, "title", 4, "ngIf"], ["data-toggle", "kt-tooltip", "data-skin", "brand", "data-placement", "top", "data-original-title", "Micheal York", "class", "kt-media kt-media--sm kt-media--circle", 3, "title", 4, "ngIf"], [1, "pin-icn", "d-none"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pin-angle-fill"], ["d", "M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"], [1, "stat-td"], [1, "curser-pointer", 3, "click"], ["width", "19px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png", "title", "Linked"], ["width", "19px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png", "title", "Not Linked", 1, "black-white"], [1, "count2"], [1, "kt-widget__other", "text-nowrap"], ["data-toggle", "kt-tooltip", "data-skin", "brand", "data-placement", "top", "data-original-title", "John Myer", 1, "kt-media", "kt-media--sm", "kt-media--circle", 3, "title"], ["data-toggle", "kt-tooltip", "data-skin", "brand", "data-placement", "top", "data-original-title", "Micheal York", 1, "kt-media", "kt-media--sm", "kt-media--circle", 3, "title"], [1, "text-info", "font-weight-400"], [1, "text-danger", "font-weight-400"], ["class", "text-danger delayDays", 4, "ngIf"], [1, "text-danger", "delayDays"], [1, "text-warning", "font-weight-400"], [1, "text-primary", "font-weight-400"], [1, "text-cancel", "font-weight-400"], [1, "text-success", "font-weight-400"], [1, "font-weight-400", 2, "color", "#c0b5dc"], [1, "text-center", "py-4", 2, "color", "lightgrey"], ["Onlysubject", ""], [1, "fas", "fa-paperclip", 2, "color", "#A9A9A9"], [1, "fas", "fa-circle"]], template: function ProjectsSummaryComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 10)(15, "a", 11)(16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_16_listener() { return ctx.OpenProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17, "Add New Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "div", 16)(22, "div", 17)(23, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectsSummaryComponent_Template_input_ngModelChange_23_listener($event) { return ctx.searchText = $event; })("keydown.enter", function ProjectsSummaryComponent_Template_input_keydown_enter_23_listener($event) { return ctx.search($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "div", 19)(25, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_25_listener() { return ctx.SearchbyText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](26, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](28, ProjectsSummaryComponent_ng_container_28_Template, 2, 2, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](29, ProjectsSummaryComponent_ng_container_29_Template, 2, 2, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](30, ProjectsSummaryComponent_ng_container_30_Template, 2, 2, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](32, ProjectsSummaryComponent_span_32_Template, 2, 1, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](33, ProjectsSummaryComponent_span_33_Template, 2, 1, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_34_listener() { ctx.CurrentPageNo = ctx.CurrentPageNo - 1; return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](35, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_36_listener() { ctx.CurrentPageNo = ctx.CurrentPageNo + 1; return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](37, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 27)(39, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_a_click_39_listener() { return ctx._SortProjectList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](40, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_a_click_41_listener() { return ctx._SortProjectList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](42, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "div", 32)(44, "ul", 33)(45, "li", 34)(46, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](47, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "div", 37)(49, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_div_click_49_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](50, "div", 1)(51, "div", 39)(52, "h5")(53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](54, "Total Projects - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](55, "h5", 40)(56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](58, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](59, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](60, "div", 1)(61, "div", 42)(62, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectsSummaryComponent_Template_input_ngModelChange_62_listener($event) { return ctx.txtSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](64, "div", 1)(65, "div", 44)(66, "div", 45)(67, "p")(68, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](69, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](70, ProjectsSummaryComponent_div_70_Template, 7, 3, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](71, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](72, "div", 44)(73, "div", 45)(74, "p")(75, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](76, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](77, ProjectsSummaryComponent_div_77_Template, 7, 4, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](78, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](79, ProjectsSummaryComponent_div_79_Template, 8, 2, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](80, "div", 44)(81, "div", 45)(82, "p")(83, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](84, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](85, ProjectsSummaryComponent_div_85_Template, 7, 4, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](86, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](87, "br")(88, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](89, "div", 1)(90, "div", 39)(91, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](92, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](93, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_93_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](94, "Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](95, "div", 50)(96, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](97, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](98, "div", 52)(99, "ul", 53)(100, "li", 54)(101, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](102, "User Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](103, "li", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](104, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](105, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](106, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_li_click_106_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](107, "div", 1)(108, "div", 59)(109, "h6", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](110, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](111, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](112, "div", 61)(113, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](114, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](115, " Core Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](116, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](117, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](118, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](119, " Routine Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](120, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](121, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](122, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](123, " Secondary Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](124, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](125, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](126, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](127, " Standard Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](129, "div", 64)(130, "div", 65)(131, "div", 66)(132, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](133, " Core Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](134, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](135, "svg", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](136, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](137, "div", 65)(138, "div", 66)(139, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](140, " Routine Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](141, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](142, "svg", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](143, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](144, "div", 59)(145, "h6", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](146, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](147, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](148, "div", 61)(149, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](150, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](151, " Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](152, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](153, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](154, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](155, " Completion Under Approval ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](156, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](157, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](158, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](159, " InProcess ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](160, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](161, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](162, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](163, " Hold ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](164, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](165, "div", 64)(166, "div", 65)(167, "div", 66)(168, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](169, " Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](170, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](171, "svg", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](172, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](173, "div", 65)(174, "div", 66)(175, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](176, " InProcess ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](177, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](178, "svg", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](179, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](180, "div", 59)(181, "h6", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](182, "Employees ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](183, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](184, "div", 61)(185, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](186, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](187, " User 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](188, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](189, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](190, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](191, " User 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](192, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](193, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](194, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](195, " User 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](196, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](197, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](198, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](199, " User 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](200, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](201, "div", 64)(202, "div", 65)(203, "div", 66)(204, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](205, " User 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](206, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](207, "svg", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](208, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](209, "div", 65)(210, "div", 66)(211, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](212, " User 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](213, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](214, "svg", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](215, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](216, "li", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](217, "li", 71)(218, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](219, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](220, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](221, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](222, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_222_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](223, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](224, "div", 76)(225, "div", 1)(226, "div", 77)(227, "div", 78)(228, "div", 79)(229, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](230, "svg", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](231, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](232, "div", 79)(233, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](234, "New Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](235, "h4", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](236, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](237, "div", 77)(238, "div", 78)(239, "div", 79)(240, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](241, "svg", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](242, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](243, "div", 79)(244, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](245, "Inprocess");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](246, "h4", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](247, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](248, "div", 77)(249, "div", 78)(250, "div", 79)(251, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](252, "svg", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](253, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](254, "div", 79)(255, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](256, "Under Approval");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](257, "h4", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](258, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](259, "div", 77)(260, "div", 78)(261, "div", 79)(262, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](263, "svg", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](264, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](265, "div", 79)(266, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](267, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](268, "h4", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](269, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](270, "div", 89)(271, "div", 90)(272, "div", 91)(273, "div", 92)(274, "div", 93)(275, "div", 1)(276, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](277, ProjectsSummaryComponent_span_277_Template, 2, 1, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](278, "div", 95)(279, "table", 96)(280, "thead")(281, "tr", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](282, "th", 98)(283, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](284, "th", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_th_click_284_listener() { return ctx._SortPortfoliolist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](285, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](286, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](287, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](288, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](289, " ProjectName ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](290, "th", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](291, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](292, " ProjectType ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](293, "th", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](294, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](295, " Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](296, "th", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](297, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](298, " Responsible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](299, "th", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](300, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](301, " Deadline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](302, "th", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](303, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](304, " Last Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](305, "th", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](306, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](307, " RACIS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](308, "th", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](309, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](310, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](311, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](312, ProjectsSummaryComponent_tr_312_Template, 71, 49, "tr", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](313, ProjectsSummaryComponent_div_313_Template, 5, 2, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](314, "div", 112)(315, "div", 113)(316, "div", 5)(317, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_a_click_317_listener() { return ctx._CloseMemosidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](318, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](319, "div", 115)(320, "h5", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](321, "img", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](322, " Linked Memos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](323, "span", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](324);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](325, "div", 119)(326, "div", 120)(327, "div", 92)(328, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](329, ProjectsSummaryComponent_div_329_Template, 6, 2, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](330, "div", 123)(331, "div", 113)(332, "div", 5)(333, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_a_click_333_listener() { return ctx._CloseDARSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](334, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](335, "div", 115)(336, "h5", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](337, " DAR Achievements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](338, "div", 119)(339, "div", 120)(340, "div", 92)(341, "div", 121)(342, "div", 124)(343, "div", 125)(344, "h5", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](345);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](346, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](347, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](348, "div", 127)(349, "div", 128)(350, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](351, "Create a Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](352, "div", 129)(353, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_div_click_353_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](354, "svg", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](355, "path", 132)(356, "path", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](357, "div", 134)(358, "div", 135)(359, "div", 1)(360, "div", 136)(361, "ul", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](362, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](363, "li", 139)(364, "a", 140)(365, "span", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](366, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](367, "span", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](368, "Project Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](369, "li", 139)(370, "a", 143)(371, "span", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](372, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](373, "span", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](374, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](375, "li", 139)(376, "a", 144)(377, "span", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](378, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](379, "span", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](380, "Add People");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](381, "li", 139)(382, "a", 145)(383, "span", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](384, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](385, "span", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](386, "Advance Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](387, "div", 146)(388, "div", 147)(389, "div", 148)(390, "section", 149)(391, "div")(392, "div", 150)(393, "div", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](394, "svg", 152)(395, "g", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](396, "rect", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](397, "g", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](398, "path", 156)(399, "path", 157)(400, "path", 158)(401, "path", 159)(402, "path", 160)(403, "path", 161)(404, "path", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](405, "g", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](406, "path", 164)(407, "path", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](408, "g", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](409, "path", 167)(410, "path", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](411, "polygon", 169)(412, "path", 170)(413, "path", 171)(414, "path", 172)(415, "path", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](416, "div", 174)(417, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](418, "Start From Scratech");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](419, "div")(420, "div", 175)(421, "div", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](422, "svg", 176)(423, "g", 177)(424, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](425, "rect", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](426, "g", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](427, "ellipse", 180)(428, "ellipse", 181)(429, "ellipse", 182)(430, "circle", 183)(431, "path", 184)(432, "path", 185)(433, "path", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](434, "div", 174)(435, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](436, "Assigned projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](437, "div")(438, "div", 175)(439, "div", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](440, "svg", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](441, "g", 188)(442, "g", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](443, "g", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](444, "path", 191)(445, "path", 192)(446, "path", 193)(447, "path", 194)(448, "path", 195)(449, "path", 196)(450, "path", 197)(451, "path", 198)(452, "path", 199)(453, "path", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](454, "div", 174)(455, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](456, "Templates");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](457, "div", 201)(458, "button", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](459, "Next Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](460, "div", 203)(461, "div", 148)(462, "div", 204)(463, "div", 1)(464, "div", 205)(465, "div", 206)(466, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](467, "Assigned / conditional projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](468, "div", 2)(469, "div", 207)(470, "div", 208)(471, "div", 209)(472, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](473, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](474, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](475, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](476, "div", 210)(477, "div", 211)(478, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](479, "Devbox UI Design Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](480, "div", 212)(481, "div", 213)(482, "span", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](483, "svg", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](484, "path", 216)(485, "path", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](486, "span", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](487, "12-04-2022 - 02-05-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](488, "div", 213)(489, "span", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](490, "svg", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](491, "g", 188)(492, "g", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](493, "g", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](494, "path", 220)(495, "path", 221)(496, "path", 222)(497, "path", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](498, "span", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](499, "10 Hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](500, "div", 213)(501, "span", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](502, "svg", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](503, "path", 224)(504, "path", 225)(505, "path", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](506, "span", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](507, "Ramesh Nalapalli");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](508, "div", 227)(509, "div", 78)(510, "div", 228)(511, "span", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](512, "svg", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](513, "g", 188)(514, "g", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](515, "g", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](516, "circle", 231)(517, "path", 232)(518, "path", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](519, "div", 234)(520, "span", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_span_click_520_listener() { return ctx.APPV_view(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](521, "svg", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](522, "g", 188)(523, "g", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](524, "g", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](525, "circle", 237)(526, "path", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](527, "div", 208)(528, "div", 209)(529, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](530, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](531, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](532, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](533, "div", 210)(534, "div", 211)(535, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](536, "YRG Develoment Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](537, "div", 212)(538, "div", 213)(539, "span", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](540, "svg", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](541, "path", 216)(542, "path", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](543, "span", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](544, "12-04-2022 - 02-05-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](545, "div", 213)(546, "span", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](547, "svg", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](548, "g", 188)(549, "g", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](550, "g", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](551, "path", 220)(552, "path", 221)(553, "path", 222)(554, "path", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](555, "span", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](556, "10 Hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](557, "div", 213)(558, "span", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](559, "svg", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](560, "path", 224)(561, "path", 225)(562, "path", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](563, "span", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](564, "Ramesh Nalapalli");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](565, "div", 227)(566, "div", 78)(567, "div", 228)(568, "span", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](569, "svg", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](570, "g", 188)(571, "g", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](572, "g", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](573, "circle", 231)(574, "path", 232)(575, "path", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](576, "div", 234)(577, "span", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_span_click_577_listener() { return ctx.APPV_view(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](578, "svg", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](579, "g", 188)(580, "g", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](581, "g", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](582, "circle", 237)(583, "path", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](584, "div", 239)(585, "div", 1)(586, "div", 240)(587, "div", 241)(588, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](589, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](590, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](591, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](592, "input", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](593, "div", 240)(594, "div", 241)(595, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](596, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](597, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](598, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](599, "textarea", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](600, "div", 245)(601, "div", 241)(602, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](603, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](604, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](605, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](606, "ng-select", 246)(607, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](608, "Core Rask");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](609, "div", 245)(610, "div", 241)(611, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](612, "Select Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](613, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](614, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](615, "ng-select", 246)(616, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](617, "Devbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](618, "div", 245)(619, "div", 241)(620, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](621, "Select Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](622, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](623, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](624, "ng-select", 246)(625, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](626, "Devbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](627, "div", 245)(628, "div", 241)(629, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](630, "project location");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](631, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](632, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](633, "input", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](634, "div", 2)(635, "div", 206)(636, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](637, "Project Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](638, "div", 208)(639, "div", 209)(640, "span", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](641, "svg", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](642, "path", 250)(643, "path", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](644, "div", 210)(645, "div", 211)(646, "a", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](647, "https://maps.app.goo.gl/i6pCxHn5imNotrhq5");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](648, "div", 227)(649, "div", 78)(650, "div", 228)(651, "span", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](652, "svg", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](653, "path", 254)(654, "path", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](655, "div", 234)(656, "span", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](657, "svg", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](658, "path", 257)(659, "path", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](660, "div", 208)(661, "div", 209)(662, "span", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](663, "svg", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](664, "path", 250)(665, "path", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](666, "div", 210)(667, "div", 211)(668, "a", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](669, "https://maps.app.goo.gl/i6pCxHn5imNotrhq5");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](670, "div", 227)(671, "div", 78)(672, "div", 228)(673, "span", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](674, "svg", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](675, "path", 254)(676, "path", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](677, "div", 234)(678, "span", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](679, "svg", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](680, "path", 257)(681, "path", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](682, "div", 259)(683, "button", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](684, "Previous Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](685, "button", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](686, "Next Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](687, "div", 262)(688, "div", 148)(689, "div", 1)(690, "div", 245)(691, "div", 241)(692, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](693, "Select Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](694, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](695, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](696, "ng-select", 246)(697, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](698, "Waseem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](699, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](700, "Shanhaz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](701, "div", 245)(702, "div", 241)(703, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](704, "Responsible");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](705, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](706, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](707, "ng-select", 246)(708, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](709, "Waseem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](710, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](711, "Shanhaz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](712, "div", 245)(713, "div", 241)(714, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](715, "Authority");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](716, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](717, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](718, "ng-select", 246)(719, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](720, "Devbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](721, "div", 245)(722, "div", 241)(723, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](724, "Coordinating");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](725, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](726, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](727, "ng-select", 246)(728, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](729, "Devbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](730, "div", 245)(731, "div", 241)(732, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](733, "Inform");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](734, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](735, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](736, "ng-select", 246)(737, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](738, "Devbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](739, "div", 245)(740, "div", 241)(741, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](742, "Auditor (Optional):");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](743, "input", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](744, "div", 240)(745, "div", 241)(746, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](747, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](748, "ng-select", 246)(749, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](750, "Devbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](751, "div", 2)(752, "div", 264)(753, "div", 265)(754, "div", 266)(755, "span", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](756, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](757, "div", 268);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](758, "img", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](759, "div", 270)(760, "span", 271);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](761, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](762, "div", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](763, "img", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](764, "div", 274)(765, "span", 275);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](766, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](767, "div", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](768, "img", 277);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](769, "a", 278)(770, "span", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](771, "+42");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](772, "div", 259)(773, "button", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](774, "Previous Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](775, "button", 281);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](776, "Next Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](777, "div", 282)(778, "div", 283)(779, "div", 1)(780, "div", 245)(781, "div", 241)(782, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](783, "Start Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](784, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](785, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](786, "input", 284);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](787, "div", 245)(788, "div", 241)(789, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](790, "End Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](791, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](792, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](793, "input", 284);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](794, "div", 240)(795, "div", 241)(796, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](797, "Reference Attachment");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](798, "div", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](799, "input", 286);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](800, "label", 287)(801, "div")(802, "span", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](803, " Drop files here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](804, "span", 289);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](805, " Or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](806, "span", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](807, " Browse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](808, "div", 291)(809, "div", 292)(810, "span", 293);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](811, " banner-design.png ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](812, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](813, "svg", 294);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](814, "path", 295)(815, "path", 296);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](816, "div", 297)(817, "button", 298);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](818, "Previous Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](819, "button", 299);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_819_listener() { return ctx.Action_view(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](820, "Next Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](821, "div", 300)(822, "div", 301)(823, "div", 302)(824, "div", 212)(825, "div", 303);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](826, "img", 304);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](827, "div", 305)(828, "div", 306)(829, "div", 307)(830, "a", 308);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](831, "CRM Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](832, "div", 309);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](833, " #1 Tool to get started with Web Apps any Kind& size ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](834, "div", 310)(835, "div", 305)(836, "div", 311)(837, "div", 312)(838, "div", 78)(839, "div", 313);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](840, "Secondary Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](841, "div", 314);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](842, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](843, "div", 312)(844, "div", 78)(845, "div", 313);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](846, "29 Jan, 2023 - 31 Nov, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](847, "div", 314);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](848, "Project Duratioion");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](849, "div", 312)(850, "div", 78)(851, "div", 313);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](852, "SAR 8,454,00");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](853, "div", 314);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](854, "Budget Spent");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](855, "div", 312)(856, "div", 78)(857, "div", 313)(858, "span", 315);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](859, "10 Hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](860, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](861, "span", 315);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](862, "10 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](863, "div", 314)(864, "span", 315);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](865, "Allocated");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](866, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](867, "span", 315);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](868, "Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](869, "div", 316)(870, "div", 317)(871, "div", 318)(872, "div", 319)(873, "div", 320)(874, "label", 321);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](875, "input", 322)(876, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](877, " Creating a project requires no actions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](878, "div", 323)(879, "button", 324);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_879_listener() { return ctx.Back_Option(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](880, "Back To Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](881, "button", 325);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_881_listener() { return ctx.Add_actions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](882, "Add Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](883, "div", 326)(884, "div", 317)(885, "div", 206)(886, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](887, "List of action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](888, "button", 325);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_888_listener() { return ctx.Add_actions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](889, "Add Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](890, "div", 327)(891, "div", 207)(892, "div", 208)(893, "div", 209)(894, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](895, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](896, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](897, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](898, "div", 210)(899, "div", 211)(900, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](901, "Devbox UI Design Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](902, "div", 212)(903, "div", 213)(904, "span", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](905, "svg", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](906, "path", 216)(907, "path", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](908, "span", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](909, "12-04-2022 - 02-05-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](910, "div", 213)(911, "span", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](912, "svg", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](913, "g", 188)(914, "g", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](915, "g", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](916, "path", 220)(917, "path", 221)(918, "path", 222)(919, "path", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](920, "span", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](921, "10 Hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](922, "div", 213)(923, "span", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](924, "svg", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](925, "path", 224)(926, "path", 225)(927, "path", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](928, "span", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](929, "Ramesh Nalapalli");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](930, "div", 227)(931, "div", 78)(932, "div", 228)(933, "span", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](934, "svg", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](935, "path", 254)(936, "path", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](937, "div", 234)(938, "span", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](939, "svg", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](940, "path", 257)(941, "path", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](942, "div", 208)(943, "div", 209)(944, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](945, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](946, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](947, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](948, "div", 210)(949, "div", 211)(950, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](951, "Devbox Develoment");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](952, "div", 212)(953, "div", 213)(954, "span", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](955, "svg", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](956, "path", 216)(957, "path", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](958, "span", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](959, "12-04-2022 - 02-05-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](960, "div", 213)(961, "span", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](962, "svg", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](963, "g", 188)(964, "g", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](965, "g", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](966, "path", 220)(967, "path", 221)(968, "path", 222)(969, "path", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](970, "span", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](971, "10 Hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](972, "div", 213)(973, "span", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](974, "svg", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](975, "path", 224)(976, "path", 225)(977, "path", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](978, "span", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](979, "Ramesh Nalapalli");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](980, "div", 227)(981, "div", 78)(982, "div", 228)(983, "span", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](984, "svg", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](985, "path", 254)(986, "path", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](987, "div", 234)(988, "span", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](989, "svg", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](990, "path", 257)(991, "path", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](992, "div", 328)(993, "div", 329)(994, "div", 330)(995, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](996, "Action to Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](997, "div", 331)(998, "div", 1)(999, "div", 240)(1000, "div", 241)(1001, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1002, "Action Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1003, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1004, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1005, "input", 332);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1006, "div", 240)(1007, "div", 241)(1008, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1009, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1010, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1011, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1012, "textarea", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1013, "div", 240)(1014, "div", 241)(1015, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1016, "Assign To");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1017, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1018, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1019, "ng-select", 334)(1020, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1021, "Ramesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1022, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1023, "Suresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1024, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1025, "Afzel");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1026, "div", 2)(1027, "div", 241)(1028, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1029, "Dependency type");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1030, "div")(1031, "label", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1032, "input", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1033, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1034, "dependent");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1035, "label", 337);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1036, "input", 338);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1037, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1038, "independent");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1039, "div", 240)(1040, "div", 241)(1041, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1042, "Action Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1043, "ng-select", 334)(1044, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1045, "Ramesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1046, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1047, "Suresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1048, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1049, "Afzel");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1050, "div", 339)(1051, "div", 241)(1052, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1053, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1054, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1055, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1056, "input", 340);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1057, "div", 339)(1058, "div", 241)(1059, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1060, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1061, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1062, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1063, "input", 341);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1064, "div", 342)(1065, "div", 241)(1066, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1067, "Allocated Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1068, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1069, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1070, "input", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1071, "div", 240)(1072, "div", 241)(1073, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1074, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1075, "textarea", 344);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1076, "div", 240)(1077, "div", 241)(1078, "div", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1079, "input", 286);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1080, "label", 345)(1081, "div")(1082, "span", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1083, "Choose File");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1084, "div", 291)(1085, "div", 292)(1086, "span", 293);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1087, " banner-design.png ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1088, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1089, "svg", 294);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1090, "path", 295)(1091, "path", 296);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1092, "div", 346)(1093, "div", 347)(1094, "div", 1)(1095, "div", 348)(1096, "div", 349)(1097, "button", 324);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_1097_listener() { return ctx.Back_Option_Act(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1098, "Back To Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1099, "button", 350);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1100, "Create a Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1101, "div", 351)(1102, "div", 352)(1103, "button", 353);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_1103_listener() { return ctx.Close_action(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1104, " Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1105, "button", 354);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1106, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1107, "div", 355);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_div_click_1107_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx.Type, " Summary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx.Type == "RACIS Projects" ? "dropdown-item active" : "dropdown-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx.Type == "ALL Projects" ? "dropdown-item active" : "dropdown-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](71, 35, ctx.TypeContInFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](78, 38, ctx.StatusCountFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.cancelcheck == "1" && ctx.canceledit == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](86, 41, ctx.EmpCountInFilter, ctx.txtSearch));
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__["ɵr"], _sort_directive__WEBPACK_IMPORTED_MODULE_12__.SortDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__.Ng2SearchPipe, src_app_Shared_DateAgo_DateAgoPipe__WEBPACK_IMPORTED_MODULE_14__.DateAgoPipe], styles: [".list-icon-color[_ngcontent-%COMP%]{\r\n    color: #969696\r\n   }\r\n\r\n  .loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\r\n    background: #0dc5c1;\r\n    animation: load1 1s infinite ease-in-out;\r\n    width: 1em;\r\n    height: 4em;\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%] {\r\n    color: #0dc5c1;\r\n    text-indent: -9999em;\r\n    margin: 88px auto;\r\n    position: relative;\r\n    font-size: 11px;\r\n    transform: translateZ(0);\r\n    animation-delay: -0.16s;\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    top: 0;\r\n    content: '';\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%]:before {\r\n    left: -1.5em;\r\n    animation-delay: -0.32s;\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%]:after {\r\n    left: 1.5em;\r\n  }\r\n\r\n  @keyframes load1 {\r\n    0%,\r\n    80%,\r\n    100% {\r\n      box-shadow: 0 0;\r\n      height: 4em;\r\n    }\r\n    40% {\r\n      box-shadow: 0 -2em;\r\n      height: 5em;\r\n    }\r\n  }\r\n\r\n  .center[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 200px;\r\n  }\r\n\r\n  .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\r\n    border-radius: 2px;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]{\r\n  width: 400px;\r\n  height: auto;\r\n  max-height: 400px;\r\n  padding: 10px;\r\n  top: 38px !important;\r\n  left: auto !important;\r\n  right: 0px !important;\r\n  overflow-y: auto;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n  .ngx-pagination[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n}\r\n\r\n  #backBtn[_ngcontent-%COMP%]:hover{\r\n background-color:#5867dd ;\r\n color: white; \r\n}\r\n\r\n  #Mdl_closebtn[_ngcontent-%COMP%]:hover{\r\n  background-color: #dc3545;\r\n  color:white\r\n}\r\n\r\n  .text-warning-1[_ngcontent-%COMP%]{\r\n  background-color: #ffe0a7;\r\n  color:#FFA800;\r\n  width: auto;\r\n  padding: 4px 8px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  .text-danger-1[_ngcontent-%COMP%]{\r\n  color: #F64E60;\r\n  background-color: #FFE2E5;\r\n  width: auto;\r\n  padding: 4px 8px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%], .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-up[_ngcontent-%COMP%]{\r\n  border-top: 7px solid #adadad !important;\r\n    border-left: 7px solid transparent !important;\r\n    border-right: 7px solid transparent !important\r\n}\r\n\r\n  .multiselect-dropdown[_ngcontent-%COMP%]{\r\n  width: 80px !important;\r\n\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]{\r\n    border: 0;\r\n    background: none;\r\n    font-size: 16px;\r\n    outline: none !important;\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 30px;\r\n    width: 30px;\r\n    background-color: #f5f6fc;\r\n    border: 1px solid #b3bcff;\r\n    color: #5867dd;\r\n    transition: all 0.3s ease;\r\n    cursor: pointer;\r\n    margin: 0 8px 0 0;\r\n    border-radius: 0;\r\n    border-radius: 4px;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon[_ngcontent-%COMP%] {\r\n    height: 18px;\r\n    width: 18px;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]{\r\n  height: 25px;\r\n  width: 25px;\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{\r\n    fill: #5867dd;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\r\n    fill: #5867dd;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\r\n    fill: #fff;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{\r\n  fill: #fff;\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover, .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]{\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n  }\r\n\r\n  .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    color: #ccc;\r\n  }\r\n\r\n  .card-title[_ngcontent-%COMP%]   .favourite.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{\r\n    color: #ffc107;\r\n  }\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    border-color: #d6d6d6;\r\n  }\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.success {\r\n    border-left: 5px solid #1dc9b7;\r\n    \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.warning {\r\n    border-left: 5px solid #ffb822; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.info {\r\n    border-left: 5px solid #2786fb; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.danger {\r\n    border-left: 5px solid #F58A8B; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.UnderApprovals {\r\n  border-left: 5px solid #BD838C; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.ForwardUnderApproval {\r\n  border-left: 5px solid #E0B1D7; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.completeUnderApproval {\r\n  border-left: 5px solid #98c7bf; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.projectHold {\r\n  border-left: 5px solid #C0B5DC; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.HoldunderApp {\r\n  border-left: 5px solid #a85098; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.DeadlineExtended{\r\n  border-left: 5px solid #E0B1D7; \r\n}\r\n\r\n  .delayDays[_ngcontent-%COMP%]{\r\n  font-size: 11px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n  transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\r\n  fill: #5E5F63;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\r\n  padding: 0.2rem 20px;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%] {\r\n  width: 800px;\r\n  max-width: 100%;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  vertical-align: top;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n  .kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n  min-height: 60px;\r\n}\r\n\r\n  .kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n}\r\n\r\n  .dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc !important;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\r\n  background-color: transparent !important;\r\n  color: #74788D !important;\r\n  cursor: auto;\r\n}\r\n\r\n  .kt-nav__link-text[_ngcontent-%COMP%]:hover {\r\n  color: #74788D !important;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\r\n  background-color: rgba(154, 100, 142, 0.2);\r\n  color: #333 !important;\r\n  transition: all 0.3s;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\r\n  color: #333;\r\n}\r\n\r\n  .kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background: rgb(195, 195, 195);\r\n}\r\n\r\n  \r\n\r\n  .kt-quick-panel2[_ngcontent-%COMP%] {\r\n  width: 650px !important;\r\n}\r\n\r\n  .kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\r\n  right: -660px;\r\n  left: auto;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #F1F1F1;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\r\n  background-color: #FFFFFF !important;\r\n}\r\n\r\n  .chatcount[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  margin-left: -15px;\r\n  margin-top: -10px;\r\n}\r\n\r\n  .kt-badge.kt-badge--dark[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background: #8C8D92;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n  transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\r\n  fill: #5E5F63;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\r\n  padding: 0.2rem 20px;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-font-ReplyRequired[_ngcontent-%COMP%] {\r\n  color: #a6c !important;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%] {\r\n  width: 800px;\r\n  max-width: 100%;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  vertical-align: top;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n  .kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n  min-height: 60px;\r\n}\r\n\r\n  .kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n}\r\n\r\n  .dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc !important;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\r\n  background-color: transparent !important;\r\n  color: #74788D !important;\r\n  cursor: auto;\r\n}\r\n\r\n  .kt-nav__link-text[_ngcontent-%COMP%]:hover {\r\n  color: #74788D !important;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\r\n  background-color: rgba(154, 100, 142, 0.2);\r\n  color: #333 !important;\r\n  transition: all 0.3s;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\r\n  color: #333;\r\n}\r\n\r\n  .kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background: rgb(195, 195, 195);\r\n}\r\n\r\n  \r\n\r\n  .kt-quick-panel2[_ngcontent-%COMP%] {\r\n  width: 650px !important;\r\n}\r\n\r\n  .kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\r\n  right: -660px;\r\n  left: auto;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #F1F1F1;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background: none;\r\n  outline: none !important;\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 35px;\r\n  width: 35px;\r\n  background-color: #FFFFFF;\r\n  transition: all 0.3s ease;\r\n  cursor: pointer;\r\n  margin: 0;\r\n  border-radius: 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-badge.kt-badge--inline[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  width: auto;\r\n  padding: 0.15rem 0.75rem;\r\n  border-radius: 2px;\r\n  margin-left: 4px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%] {\r\n  padding: 17px;\r\n  width: 243px;\r\n}\r\n\r\n  \r\n\r\n  .Replied_border_left_true_warning[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #ffb822;\r\n}\r\n\r\n  .Replied_border_left_true_primary[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #95bed9;\r\n}\r\n\r\n  .Replied_border_left_true_success[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #95bed9;\r\n}\r\n\r\n  .Replied_border_left_true_Danger[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #F58A8B;\r\n}\r\n\r\n  .Replied_border_left_true_hold[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #c0b5dc\r\n}\r\n\r\n  .Replied_border_left_true_rejected[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #f5c293;\r\n}\r\n\r\n  .Replied_border_left_true_underApprovals[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #BD838C;\r\n}\r\n\r\n  .Replied_border_left_true_forwardUnderApproval[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #E0B1D7;\r\n}\r\n\r\n  .Replied_border_left_true_completeUnderApproval[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #98c7bf;\r\n}\r\n\r\n  .Replied_border_left_true_projectHold[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #C0B5DC;\r\n}\r\n\r\n  .Replied_border_left_true_NewProject[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #007bff;\r\n}\r\n\r\n  .Replied_border_left_true_DeadlineExtended[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #E0B1D7;\r\n}\r\n\r\n  .Replied_border_left_true_HoldunderApp[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #a85098;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%] {\r\n    margin-left: -17px;\r\n}\r\n\r\n  .icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  margin-right: 15px !important;\r\n  z-index: 2;\r\n}\r\n\r\n  .icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  width: 18px;\r\n    height: 18px;\r\n    text-align: center;\r\n    font-size: 10px;\r\n    font-weight: 700;\r\n  color: #fff;\r\n  background: #5867dd;\r\n  border: 1px solid #5867dd;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: -11px;\r\n  right: -11px;\r\n  z-index: 3;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]{\r\n  margin-top: 0px !important;\r\n}\r\n\r\n  .multiselect-dropdown[_ngcontent-unj-c40][_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-unj-c40][_ngcontent-%COMP%]{\r\n  width: 150px !important;\r\n}\r\n\r\n  \r\n\r\n  virtual-scroller[_ngcontent-%COMP%] {\r\n  \r\n  height: 200px;\r\n}\r\n\r\n  .vsdiv[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: 30px;\r\n}\r\n\r\n  \r\n\r\n  .sideInfobar[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 999;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: #ffffff;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  \r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%]{\r\n  background-color: #f5f6fc;\r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tcolor: #333;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n\r\n  .info-icon-cir[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: #5867dd;\r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]{\r\n  border-bottom: 0.07rem dashed #dedede;\r\n  padding: 6px;\r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%]{\r\n  border-bottom: 0.07rem dashed rgba(0,0,0,0.3);\r\n}\r\n\r\n  \r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%]{\r\n  font-weight: 600;\r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]{\r\n    width: 270px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n  .count-height[_ngcontent-%COMP%]{\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]   .justify-content-between[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #f1f1f1;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #ccc;\r\n}\r\n\r\n  .dropdown[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]{\r\n  border-color: #5867dd;\r\n}\r\n\r\n  .kt-checkbox[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\r\n  border: solid #5867dd;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown[_ngcontent-%COMP%] {\r\n  position: static !important;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    width: 60%;\r\n    \r\n    top: 20px !important;\r\n    left: -22px !important;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  border-bottom: 15px solid #fff;\r\n  border-right: 17px solid transparent;\r\n  border-left: 17px solid transparent;\r\n  position: absolute;\r\n  top: -15px;\r\n  left: 32px;\r\n  z-index: 10;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  border-bottom: 17px solid #ccc;\r\n  border-right: 19px solid transparent;\r\n  border-left: 19px solid transparent;\r\n  position: absolute;\r\n  top: -17px;\r\n  left: 30px;\r\n  z-index: 8;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu1[_ngcontent-%COMP%]   .filter-box[_ngcontent-%COMP%]{\r\n  width: 33.3333%;\r\n  display: inline-block;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){\r\n  width: 3%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){\r\n  width: 33%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3){\r\n  width: 10%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4){\r\n  width: 10%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5){\r\n  width: 15%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6){\r\n  width: 10%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(7), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7){\r\n  width: 10%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(8), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8){\r\n  width: 10%;\r\n}\r\n\r\n  .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{\r\n  \r\n  cursor: pointer;\r\n}\r\n\r\n  .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{\r\n  border: 1px solid #d6dbff;\r\n  border-radius: 5px;\r\n}\r\n\r\n  .show_entries[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 3px;\r\n  background-color: #fff;\r\n \r\n}\r\n\r\n  .show_entries[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n  \r\n  border: 2px solid rgba(88, 103, 221, 0.3);\r\n  color: #5867dd;\r\n  font-weight: bold;\r\n}\r\n\r\n  .count-btn[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  padding: 0px 10px;\r\n  font-weight: 700;\r\n  color: rgb(88, 88, 88);\r\n  font-size: 14px;\r\n  line-height: 25px;\r\n}\r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__toolbar[_ngcontent-%COMP%]   .kt-inbox__search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  height: 44px;\r\n  border: none;\r\n  background-color: #f2f3f7;\r\n}\r\n\r\n  .input-group[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: stretch;\r\n  width: 100% !important;\r\n}\r\n\r\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]{\r\n  \r\n  background-color: #fff;\r\n  width: 25vw;\r\n  box-shadow: none;\r\n  border: 1px solid #d6dbff !important;\r\n  margin-top: 5px;\r\n}\r\n\r\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{\r\n  background-color: #f5f6fc;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%]   .kt-inbox__items[_ngcontent-%COMP%]   .kt-inbox__item[_ngcontent-%COMP%]{\r\n  position: relative;\r\n}\r\n\r\n  .delete-btn[_ngcontent-%COMP%]{\r\n  display: none;\r\n  position: absolute;\r\n   right: 0px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    background-color: #f2f3f7;\r\n    color: grey;\r\n    line-height: 63px;\r\n    padding: 0 20px;\r\n    transition: all 2s ease !important;\r\n}\r\n\r\n  .delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  background: none;\r\n  font-size: 16px;\r\n  outline: none !important;\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  height: 30px;\r\n  width: 30px;\r\n  background-color: #f5f6fc;\r\n  border: 1px solid #b3bcff;\r\n  color: #5867dd;\r\n  transition: all 0.3s ease;\r\n  cursor: pointer;\r\n  margin: 10px 8px 0 0;\r\n  border-radius: 0;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  text-align: center;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n  \r\n\r\n  .btn-secondary.theme-btn[_ngcontent-%COMP%]{\r\n  background-color: #5867dd;\r\n  color: #fff;\r\n}\r\n\r\n  .btn.btn-label-primary[_ngcontent-%COMP%]{\r\n  border: 1px solid #b3bcff;\r\n}\r\n\r\n  .delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n}\r\n\r\n  .kt-inbox__item[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n  .sidebar-more[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: 50%;\r\n}\r\n\r\n  .footer[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 50%;\r\n  background-color: dodgerblue;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n  .ng-autocomplete[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n}\r\n\r\n  \r\n\r\n  .memoscount[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 70px;\r\n  height: 34px;\r\n  margin: 5px;\r\n  border: 1px solid rgba(0, 0, 0, .2);\r\n  text-align: justify;\r\n\r\n}\r\n\r\n  .blue[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n}\r\n\r\n  .purple[_ngcontent-%COMP%] {\r\n  background: #00B74A;\r\n}\r\n\r\n  .wine[_ngcontent-%COMP%] {\r\n  background: #F93154;\r\n}\r\n\r\n  \r\n\r\n  .M_fsize[_ngcontent-%COMP%]{\r\n  font-size: smaller;\r\n}\r\n\r\n  .badge[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  font-size: 12px;\r\n  line-height: 1;\r\n  padding: .375rem .5625rem;\r\n  font-weight: normal;\r\n}\r\n\r\n  .badge-outline-primary[_ngcontent-%COMP%] {\r\n  color: #405189;\r\n  border: 1.5px solid #405189\r\n}\r\n\r\n  .badge.badge-pill[_ngcontent-%COMP%] {\r\n  border-radius: 10rem\r\n}\r\n\r\n  .badge-outline-info[_ngcontent-%COMP%] {\r\n  color: #3da5f4;\r\n  border: 1.5px solid #3da5f4\r\n}\r\n\r\n  .badge-outline-danger[_ngcontent-%COMP%] {\r\n  color: #f1536e;\r\n  border: 1.5px solid #f1536e\r\n}\r\n\r\n  .badge-outline-success[_ngcontent-%COMP%] {\r\n  color: #00c689;\r\n  border: 1.5px solid #00c689\r\n}\r\n\r\n  .badge-outline-warning[_ngcontent-%COMP%] {\r\n  color: #fda006;\r\n  border: 1px solid #fda006\r\n}\r\n\r\n  \r\n\r\n  .name-box[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  font-size: 9px;\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: #5867dd;\r\n  color: #fff;\r\n  font-weight: 500;\r\n  letter-spacing: 2px;\r\n  border-radius: 50%;\r\n  line-height: 30px;\r\n  margin-right: 5px;\r\n}\r\n\r\n  .names-response[_ngcontent-%COMP%]{\r\n  display :inline-block;\r\n  text-align: left;\r\n}\r\n\r\n  .names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{\r\n  display: block;\r\n  font-size: 10px;\r\n  font-weight: 600;\r\n}\r\n\r\n  .names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{\r\n  font-weight: 600;\r\n}\r\n\r\n  .head-btn[_ngcontent-%COMP%]{\r\n  background-color: rgba(88, 103, 221, 0.1);\r\n    padding: 3px 10px 3px 5px;\r\n    border-radius: 2rem;\r\n    border: 1px solid #b3bcff;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n}\r\n\r\n  .head-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #5867dd;\r\n    color: #fff;\r\n    line-height: 25px;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    margin-right: 3px;\r\n}\r\n\r\n  .devider[_ngcontent-%COMP%]{\r\n  height: 1px;\r\n  width: 100%;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n  .pricevalues[_ngcontent-%COMP%] {\r\n  padding-top: 30px;\r\n  padding-bottom: 10px;\r\n  border-right: 1px solid #f1f1f1;\r\n  border-bottom: 1px solid #f1f1f1;\r\n}\r\n\r\n  .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(1), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(2)  {\r\n  border-top: 1px solid #f1f1f1;\r\n}\r\n\r\n  .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(3), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(4)  {\r\n  border-bottom: none\r\n}\r\n\r\n  .pricevalues[_ngcontent-%COMP%]:nth-child(2), .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\r\n  border-right: none;\r\n}\r\n\r\n  .dms-links[_ngcontent-%COMP%]{\r\n  list-style-type: disc;\r\n}\r\n\r\n  .dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  display: block;\r\n  text-decoration: underline;\r\n  font-weight: 600;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n  \r\n\r\n  mat-select[_ngcontent-%COMP%]{\r\n  padding: 10px 5px;\r\n  background-color: #fff;\r\n  margin-right: 5px;\r\n}\r\n\r\n  div#mat-select-0-panel[_ngcontent-%COMP%]{\r\n  min-width: auto;\r\n}\r\n\r\n  .mat-select-panel-wrap.ng-tns-c275-0.ng-trigger.ng-trigger-transformPanelWrap.ng-star-inserted[_ngcontent-%COMP%]{\r\n  transform: none;\r\n}\r\n\r\n    .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\r\n  color: unset;\r\n}\r\n\r\n    .mat-option-pseudo-checkbox.mat-pseudo-checkbox-checked {\r\n  background-color: #303F9F;\r\n}\r\n\r\n  \r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .pro-bar[_ngcontent-%COMP%] {\r\n  background: hsl(0, 0%, 97%);\r\n  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;\r\n  height: 4px;\r\n  margin-bottom: 12px;\r\n  margin-top: 30px;\r\n  position: relative;\r\n  text-align: left;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress_bar_title[_ngcontent-%COMP%] {\r\n  color: hsl(218, 4%, 50%);\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  position: relative;\r\n  top: -28px;\r\n  z-index: 1;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress_number[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%] {\r\n  background-color: hsl(0, 0%, 88%);\r\n  display: block;\r\n  width: 0;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  transition: width 1s linear 0s;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  background-color: hsl(0, 0%, 100%);\r\n  border-radius: 50%;\r\n  width: 4px;\r\n  height: 4px;\r\n  position: absolute;\r\n  right: 1px;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  width: 14px;\r\n  height: 14px;\r\n  background-color: inherit;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  right: -4px;\r\n  top: -5px;\r\n}\r\n\r\n  .kt-widget__details[_ngcontent-%COMP%] {\r\n  min-width: 90px;\r\n}\r\n\r\n  .kt-media-group[_ngcontent-%COMP%]   .kt-media.kt-media--sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n  .kt-media-group[_ngcontent-%COMP%]   .kt-media.kt-media--sm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  width: 25px;\r\n  height: 25px;\r\n  background: #deecf8;\r\n  color: #2786fb;\r\n}\r\n\r\n  .bg-today[_ngcontent-%COMP%] {\r\n  background-color: #342bf0 !important;\r\n}\r\n\r\n  .w-45[_ngcontent-%COMP%] {\r\n  width: 45% !important;\r\n}\r\n\r\n  .w-55[_ngcontent-%COMP%] {\r\n  width: 55% !important;\r\n}\r\n\r\n  @media only screen and (max-width: 768px) {\r\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]{\r\n    width: 80vw;\r\n  }\r\n}\r\n\r\n  .suc-hvr[_ngcontent-%COMP%] {\r\n  color: #1dc9b7;\r\n}\r\n\r\n  .suc-hvr[_ngcontent-%COMP%]:hover {\r\n  background: #1dc9b7;\r\n  color: #fff;\r\n}\r\n\r\n  .dan-hvr[_ngcontent-%COMP%] {\r\n  color: #dc3545;\r\n}\r\n\r\n  .dan-hvr[_ngcontent-%COMP%]:hover {\r\n  background: #dc3545;\r\n  color: #fff;\r\n}\r\n\r\n  .kt-widget__title[_ngcontent-%COMP%]{\r\n  width: 250px;\r\n}\r\n\r\n  .btn-fw[_ngcontent-%COMP%]{\r\n  font-weight: 500;\r\n}\r\n\r\n  .asc-ar[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n  .btn-sort[_ngcontent-%COMP%]{\r\n  color: #0b0e1f;\r\n  background-color: #fff;\r\n  border: 1px solid #eef1f6;\r\n  border-radius: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n  a.ordr-a[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  margin-left: 5px;\r\n  color: #0b0e1f;\r\n}\r\n\r\n  .sort-by[_ngcontent-%COMP%]{\r\n  color: #999999;\r\n  font-size: 12px;\r\n  padding: 8px;\r\n\r\n}\r\n\r\n  .sort-a[_ngcontent-%COMP%]{\r\n  text-decoration: underline;\r\n}\r\n\r\n  .sort-drop[_ngcontent-%COMP%]{\r\n  padding: 0.8rem 0;\r\n  min-width: 12rem;\r\n  margin-top: 5px;\r\n}\r\n\r\n  .sort-drop[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{\r\n  padding: 0.4rem 1rem;\r\n}\r\n\r\n  .sort-drop[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n  background: #f1f6fd;\r\n  color: #0b0e1f;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  display: flex;\r\n}\r\n\r\n  .sort-drop[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .ckc-icn[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  color: #3b93fc;\r\n}\r\n\r\n  .btn-sort[_ngcontent-%COMP%]:hover, .btn-sort[_ngcontent-%COMP%]:focus, .btn-sort[_ngcontent-%COMP%]:active  {\r\n  color: #0b0e1f;\r\n  background-color: #f5f7fa;\r\n  border: 1px solid #e1e6ee;\r\n}\r\n\r\n  .select-box[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n  a.dropdown-item[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n  @media (max-width: 1440px){\r\n  .kt-widget__title[_ngcontent-%COMP%]{\r\n    width: 240px;\r\n  }\r\n  .stat-td[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    width: 135px;\r\n  }\r\n  .stat-td[_ngcontent-%COMP%]{\r\n    width: 135px;\r\n  }\r\n}\r\n\r\n  @media (max-width: 1300px){\r\n.kt-widget__title[_ngcontent-%COMP%]{\r\n    width: 180px;\r\n}\r\n}\r\n\r\n  span.count[_ngcontent-%COMP%] {\r\n  background: #9886eb;\r\n  padding: 0 4px;\r\n  color: #fff;\r\n  cursor: auto;\r\n  border-radius: 3px;\r\n}\r\n\r\n  .ticks-grad[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(to left, #f9a8d4, #d8b4fe, #818cf8);\r\n  color: #fff;\r\n  padding: 15px 20px;\r\n  border-radius: 12px;\r\n  margin-bottom: 20px;\r\n  min-height: 90px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n  .example_icon[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-right: 10px;\r\n  background: rgba(255, 255, 255, 0.2);\r\n  border-radius: 12px;\r\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\r\n  backdrop-filter: blur(5px);\r\n  -webkit-backdrop-filter: blur(5px);\r\n}\r\n\r\n  span.example_icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n  span.example_icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n}\r\n\r\n  span.count1[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border: 1px solid #9886eb;\r\n  padding: 0;\r\n  color: #9886eb;\r\n  cursor: auto;\r\n  border-radius: 500px;\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n  span.count2[_ngcontent-%COMP%] {\r\n  margin-left: 2px;\r\n  width: 20px;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  background: #deecf8;\r\n  color: #2786fb !important;\r\n  border-radius: 50%;\r\n  font-size: 0.9rem;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: 600;\r\n}\r\n\r\n  .scrollbar1[_ngcontent-%COMP%] {\r\n  max-height: calc(100vh - 178px); \r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n  .scrollbar1[_ngcontent-%COMP%] {\r\n  max-height: calc(100vh - 138px); \r\n  overflow-y: auto;\r\n}\r\n\r\n  .scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n  \r\n\r\n  .scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n  \r\n\r\n  .scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n  border-radius: 10px;\r\n}\r\n\r\n  \r\n\r\n  .scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #ccc;\r\n}\r\n\r\n  .form-check-input[_ngcontent-%COMP%] {\r\n  \r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 11' width='13' height='11' fill='none'%3e%3cpath d='M11.0426 1.02893C11.3258 0.695792 11.8254 0.655283 12.1585 0.938451C12.4917 1.22162 12.5322 1.72124 12.249 2.05437L5.51985 9.97104C5.23224 10.3094 4.72261 10.3451 4.3907 10.05L0.828197 6.88335C0.50141 6.59288 0.471975 6.09249 0.762452 5.7657C1.05293 5.43891 1.55332 5.40948 1.88011 5.69995L4.83765 8.32889L11.0426 1.02893Z' fill='%23FFFFFF'/%3e%3c/svg%3e\");\r\n}\r\n\r\n  .ps-1[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  float: unset;\r\n  margin: 4px !important;\r\n}\r\n\r\n  \r\n\r\n  .add_new_project_slide[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 999;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: #ffffff;\r\n  border-left: 1px solid #EDEAE9;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  box-shadow: 0 0.1rem 1rem 0.25rem rgb(0 0 0/5%) !important;\r\n}\r\n\r\n  .open_sidebar[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n  .step-line[_ngcontent-%COMP%] {\r\n     \r\n     height: 2px;\r\n     width: 34vw;\r\n     position: absolute;\r\n     top: 45px;\r\n     z-index: 1;\r\n     border-top: 1px dashed #dfdfdf;\r\n}\r\n\r\n  .nav-pills.custom[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  margin: 0 20px;\r\n  z-index: 2;\r\n}\r\n\r\n  .nav-link.active.custom[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  color: #007bff;\r\n}\r\n\r\n  .nav-link.custom[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n  display: flex;\r\n    flex-direction: column;\r\n    gap: 7px;\r\n    min-width: 8vw;\r\n}\r\n\r\n  .nav-link.custom[_ngcontent-%COMP%]   span.icon[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  border-radius: 50px;\r\n  width: 46px;\r\n  height: 46px;\r\n  margin: 0 auto;border: 1px solid #e0e0e0;\r\n}\r\n\r\n  .nav-link.custom.active[_ngcontent-%COMP%]   span.icon[_ngcontent-%COMP%] {\r\n  background-color: #007bff;\r\n  color: #fff;\r\n}\r\n\r\n  .nav-link.custom[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 28px;\r\n}\r\n\r\n  .tab-content.custom[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n  .tab-content.custom[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%] {\r\n  width: 60vw;\r\n}\r\n\r\n  @media screen and (min-width: 840px) {\r\n  .tab-content.custom[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%] {\r\n    width: 60vw;\r\n  }\r\n}\r\n\r\n  .nav-link.active.custom[_ngcontent-%COMP%]:hover {\r\n  background-color: unset !important;\r\n  color: #007bff !important;\r\n}\r\n\r\n  .kt-portlet[_ngcontent-%COMP%]   .kt-portlet__body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 25px;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-portlet__body_scroll[_ngcontent-%COMP%]{\r\n  height: calc(100vh - 130px);\r\n  min-height:50vh;;\r\n  overflow-y: auto;\r\n}\r\n\r\n  .section-bottom[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  border-radius: 1rem;\r\n  padding: 2rem 3rem;\r\n  min-height: 18rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  box-shadow: 0 10px 15px #5867dd40;\r\n}\r\n\r\n  .section-bottom[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0rem;\r\n}\r\n\r\n  .section-bottom[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  letter-spacing: 1px;\r\n}\r\n\r\n  .section-bottom[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  cursor: pointer;\r\n  outline: none;\r\n  border-radius: 5px;\r\n  padding: 0.75rem 2rem;\r\n  background-color: #F2F0F0;\r\n}\r\n\r\n  .section-bottom[_ngcontent-%COMP%]   .section-cards[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-gap: 1rem;\r\n  color: #fff;\r\n}\r\n\r\n  \r\n\r\n  .section-bottom[_ngcontent-%COMP%]   .section-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 2rem;\r\n  height: 11rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  \r\n  align-items: center;\r\n  border-radius: 1rem;\r\n}\r\n\r\n  .section-bottom[_ngcontent-%COMP%]   .section-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n  .section-bottom[_ngcontent-%COMP%]   .section-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 1.7rem;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n  .section-bottom[_ngcontent-%COMP%]   .section-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 1.4rem;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n  .section-bottom[_ngcontent-%COMP%]   .section-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: -0.8rem;\r\n  text-align: left;\r\n  opacity: 0.9;\r\n}\r\n\r\n  .kt-cd-tlv[_ngcontent-%COMP%] {\r\n  margin-top: 13px;\r\n  text-align: center;\r\n}\r\n\r\n  .kt-cd-tlv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #676f9c;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n}\r\n\r\n  .card[_ngcontent-%COMP%] {\r\n  cursor: pointer;    transition: 0.6s;\r\n  position: relative;\r\n}\r\n\r\n  .card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 20px 50px rgb(0 0 0 / 22%);\r\n}\r\n\r\n  .card.active[_ngcontent-%COMP%] {\r\n  border: 1px solid #abcdff;\r\n  color: #fff;\r\n  background-color: #e4f0ff;\r\n}\r\n\r\n  .kt-ctv-btn[_ngcontent-%COMP%] {\r\n  margin-top: 3rem;\r\n  text-align: end;\r\n}\r\n\r\n  .my-ct-v-btn[_ngcontent-%COMP%] {\r\n  width: 120px;\r\n  margin-right: 1px;\r\n}\r\n\r\n  .card.active[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: #fff;\r\n  position: absolute;\r\n  top: -9px;\r\n  right: -8px;\r\n  border-radius: 50pc;\r\n  border: 1px solid #abcdff;\r\n}\r\n\r\n  .card.active[_ngcontent-%COMP%]::before {\r\n  border: solid #61a8ff;\r\n  position: absolute;\r\n  transform: rotate(-45deg);\r\n  border-width: 0 0 2px 2px !important;\r\n  height: 8px;\r\n  width: 18px;\r\n  content: \"\";\r\n  margin: 17px 0 0 14px;\r\n  right: 2px;\r\n  top: -12px;\r\n  z-index: 1;\r\n}\r\n\r\n  .kt-desc-textarea[_ngcontent-%COMP%] {\r\n  min-height: 104px;\r\n}\r\n\r\n  .kt-ctv-btn-two[_ngcontent-%COMP%] {\r\n  margin-top: 3rem;\r\n  text-align: end;\r\n}\r\n\r\n  .my-ct-v-btn-back[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n  min-width: 120px;\r\n  background-color: #efefef !important;\r\n  border-color: #efefef !important;\r\n  color: #6b6b6b !important;\r\n}\r\n\r\n  .ng-select-container[_ngcontent-%COMP%] {\r\n  border: 0 !important;\r\n}\r\n\r\n  .nav-pills[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:active, .nav-pills[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:hover {\r\n  background-color:unset; \r\n  color: unset; \r\n}\r\n\r\n  \r\n\r\n  .formbold-mb-5[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n  .formbold-pt-3[_ngcontent-%COMP%] {\r\n  padding-top: 12px;\r\n}\r\n\r\n  .formbold-main-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 48px;\r\n}\r\n\r\n  .formbold-form-wrapper[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  max-width: 550px;\r\n  width: 100%;\r\n  background: white;\r\n}\r\n\r\n  .formbold-form-label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  color: #07074d;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n  .formbold-form-label-2[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  font-size: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n  .formbold-form-input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 12px 24px;\r\n  border-radius: 6px;\r\n  border: 1px solid #e0e0e0;\r\n  background: white;\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  color: #6b7280;\r\n  outline: none;\r\n  resize: none;\r\n}\r\n\r\n  .formbold-form-input[_ngcontent-%COMP%]:focus {\r\n  border-color: #6a64f1;\r\n  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n  .formbold-btn[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  border-radius: 6px;\r\n  padding: 14px 32px;\r\n  border: none;\r\n  font-weight: 600;\r\n  background-color: #6a64f1;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n  .formbold-btn[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n  .formbold--mx-3[_ngcontent-%COMP%] {\r\n  margin-left: -12px;\r\n  margin-right: -12px;\r\n}\r\n\r\n  .formbold-px-3[_ngcontent-%COMP%] {\r\n  padding-left: 12px;\r\n  padding-right: 12px;\r\n}\r\n\r\n  .flex[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n  .flex-wrap[_ngcontent-%COMP%] {\r\n  flex-wrap: wrap;\r\n}\r\n\r\n  .w-full[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n  .formbold-file-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n  .formbold-file-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  border: 1px dashed #e0e0e0;\r\n  border-radius: 6px;\r\n  min-height: 100px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 10px;\r\n  text-align: center;\r\n  margin-top: 5px;\r\n}\r\n\r\n  .formbold-drop-file[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-weight: 400;\r\n  color: #9f9f9f;\r\n  text-transform: capitalize;\r\n  letter-spacing: 0.5px;\r\n  font-size: 17px;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n  .formbold-or[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n    font-size: 14px;\r\n    color: #b1b1b1;\r\n    display: block;\r\n    margin-bottom: 5px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n  .formbold-browse[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n    font-size: 14px;\r\n    color: #959595;\r\n    display: inline-block;\r\n    padding: 8px 28px;\r\n    border: 1px solid #e0e0e0;\r\n    border-radius: 4px;\r\n    text-transform: capitalize;\r\n    cursor: pointer;\r\n}\r\n\r\n  .formbold-file-list[_ngcontent-%COMP%] {\r\n  border-radius: 6px;\r\n  background: #f5f7fb;\r\n  padding: 16px 16px;\r\n}\r\n\r\n  .formbold-mb-5.formbold-file-input[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n  .formbold-file-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n  .formbold-file-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  color: #07074d;\r\n  border: none;\r\n  background: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n  .formbold-file-name[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  color: #5867dd;\r\n  padding-right: 12px;\r\n}\r\n\r\n  .formbold-progress-bar[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 6px;\r\n  border-radius: 8px;\r\n  background: #e2e5ef;\r\n}\r\n\r\n  .formbold-progress[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 75%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  background: #6a64f1;\r\n  border-radius: 8px;\r\n}\r\n\r\n  @media (min-width: 540px) {\r\n  .sm\\:w-half[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n  .btn.btn-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\r\n  fill: #737373;\r\n}\r\n\r\n  \r\n\r\n  .card[_ngcontent-%COMP%]{\r\n  border: 1px solid #F1F1F2;\r\n  border-radius: 0.625rem;\r\n}\r\n\r\n  .card.card-body[_ngcontent-%COMP%]{\r\n  padding: 2rem 2.25rem;\r\n  color: var(--bs-card-color);\r\n}\r\n\r\n  .d-flex[_ngcontent-%COMP%]{\r\n  display: flex!important;\r\n}\r\n\r\n  .flex-wrap[_ngcontent-%COMP%]{\r\n  flex-wrap: wrap!important;\r\n}\r\n\r\n  .rounded[_ngcontent-%COMP%]{\r\n  border-radius: 0.475rem!important;\r\n}\r\n\r\n  .w-lg-150px[_ngcontent-%COMP%]{\r\n  width: 50px!important;\r\n}\r\n\r\n  .h-lg-150px[_ngcontent-%COMP%]{\r\n  height: 63px!important;\r\n}\r\n\r\n  .bg-light[_ngcontent-%COMP%]{\r\n  --bs-bg-rgb-color: 249,249,249;\r\n  background-color: #f5f5f5!important;\r\n}\r\n\r\n  .flex-center[_ngcontent-%COMP%]{\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n  .flex-grow-1[_ngcontent-%COMP%]{\r\n  flex-grow: 1!important;\r\n}\r\n\r\n  .flex-wrap[_ngcontent-%COMP%]{\r\n  flex-wrap: wrap!important;\r\n}\r\n\r\n  .justify-content-between[_ngcontent-%COMP%]{\r\n  justify-content: space-between!important;\r\n}\r\n\r\n  .align-items-start[_ngcontent-%COMP%]{\r\n  align-items: flex-start!important;\r\n}\r\n\r\n  .flex-column[_ngcontent-%COMP%]{\r\n  flex-direction: column!important;\r\n}\r\n\r\n  .border-gray-300[_ngcontent-%COMP%] {\r\n  border-color: #dbdfe9!important;\r\n}\r\n\r\n  .border-dashed[_ngcontent-%COMP%] {\r\n  border-style: dashed!important;\r\n  border-color: #dbdfe9;\r\n}\r\n\r\n  .border-dashed[_ngcontent-%COMP%] {\r\n  border-style: dashed!important;\r\n  border-color: #dbdfe9;\r\n}\r\n\r\n  .px-4[_ngcontent-%COMP%] {\r\n  padding-right: 0.5rem!important;\r\n  padding-left: 0.5rem!important;\r\n}\r\n\r\n  .py-3[_ngcontent-%COMP%] {\r\n  padding-top: 0.5rem!important;\r\n  padding-bottom: 0.5rem!important;\r\n}\r\n\r\n  .min-w-125px[_ngcontent-%COMP%] {\r\n  min-width: 125px!important;\r\n}\r\n\r\n  .fw-stl[_ngcontent-%COMP%] {\r\n  color: #4d5aa1;\r\n  font-weight: 600;\r\n}\r\n\r\n  .fs-7[_ngcontent-%COMP%] {\r\n  font-size: .95rem!important;\r\n}\r\n\r\n  .fw-semi-lt[_ngcontent-%COMP%] {\r\n  color: #8f8f8f;\r\n  margin-top: 3px;\r\n}\r\n\r\n  .fs-8[_ngcontent-%COMP%] {\r\n  font-size: .85rem!important;\r\n}\r\n\r\n  .mw-lg-75px[_ngcontent-%COMP%]{\r\n  max-width: 35px!important;\r\n}\r\n\r\n  .me-2[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n  .my-crd[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  border-radius: 1rem;\r\n  padding: 1rem 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  box-shadow: 0px 5px 20px #5867dd38;\r\n}\r\n\r\n  .kt-sub-box-vew[_ngcontent-%COMP%]   .mb-1[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 3px;\r\n}\r\n\r\n  .my-sub-task-tittle[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  color: #686c8b;\r\n  padding: 4px 0px;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n  button.btn.btn-sm.btn-bg-light.Clr-act[_ngcontent-%COMP%] {\r\n  background-color: #f1f1f2;\r\n  margin-right: 10px;\r\n}\r\n\r\n  .Kt-act-btnb[_ngcontent-%COMP%] {\r\n  text-align: end;\r\n  padding-right: 3px !important;\r\n}\r\n\r\n  .kt-act-no[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-right: 8px;\r\n  background-color: #e9f3ff;\r\n  padding: 6px;\r\n  border-radius: 5px;\r\n  color: #2786fb;\r\n}\r\n\r\n  .kt-act-no[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #818080;\r\n  font-size: 9px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.7px;\r\n}\r\n\r\n  .kt-act-no[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-bottom: 0px;\r\n  font-weight: 700;\r\n  font-size: 15px;\r\n}\r\n\r\n  .kt-act-ttl-v[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: #6c79e1;\r\n  margin-bottom: 3px;\r\n  font-size: 16px;\r\n}\r\n\r\n  .kt-act-ttl-v[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-bottom: 0px;\r\n  color: #a3a3a3;\r\n}\r\n\r\n  .kt-act-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n  .kt-act-btns[_ngcontent-%COMP%] {\r\n  border-left: 1px solid #ccc;\r\n  padding: 8px;\r\n}\r\n\r\n  .kt-dl-icon.db-v[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n  .kt-dl-icon[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  opacity: 0.7;\r\n}\r\n\r\n  .kt-dl-icon[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n\r\n  .kt-act-card[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  background-color: #ffffff;\r\n  border-radius: 7px;\r\n  box-shadow: 1px 1px 20px #cccccc78;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n  span.kt-act-svg-ic[_ngcontent-%COMP%] {\r\n  border-right: 1px solid #ccc;\r\n  margin: 0pc 4px;\r\n  padding-right: 4px;\r\n}\r\n\r\n  span.kt-act-svg-ic[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: -2.3px;\r\n}\r\n\r\n  .kt-vi-act-dtl[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n  .kt-sub-box-vew[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  border-radius: 1rem;\r\n  padding: 1rem 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  box-shadow: 0px 5px 20px #5867dd38;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n  .kt-portlet__foot[_ngcontent-%COMP%] {\r\n  padding: 0rem 2rem;\r\n}\r\n\r\n  .kt-portlet__foot[_ngcontent-%COMP%] {\r\n  box-shadow: 0px -5px 6px #cccccca1;\r\n}\r\n\r\n  .add_new_project_slide[_ngcontent-%COMP%]   .kt-portlet__body_scroll[_ngcontent-%COMP%]{\r\n  height: calc(100vh - 70px);\r\n  min-height:50vh;;\r\n  overflow-y: auto;\r\n}\r\n\r\n  .add-vhd-h[_ngcontent-%COMP%]{\r\n  height: calc(100vh - 117px) !important;\r\n}\r\n\r\n  \r\n\r\n  .symbol-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  margin-left: 10px;\r\n}\r\n\r\n  .symbol[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  flex-shrink: 0;\r\n  position: relative;\r\n  border-radius: 0.475rem;\r\n}\r\n\r\n  .flex-nowrap[_ngcontent-%COMP%] {\r\n  flex-wrap: nowrap!important;\r\n}\r\n\r\n  .symbol-group.symbol-hover[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n  .symbol-group[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 0;\r\n  margin-left: -10px;\r\n  transition: all .3s ease;\r\n}\r\n\r\n  .symbol.symbol-circle[_ngcontent-%COMP%], .symbol.symbol-circle[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%], .symbol.symbol-circle[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n  .symbol[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: 500;\r\n  color: #252f4a;\r\n  background-color: #f9f9f9;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  border-radius: 0.475rem;\r\n}\r\n\r\n  .text-inverse-warning[_ngcontent-%COMP%] {\r\n  color: #ffffff!important;\r\n}\r\n\r\n  .bg-warning[_ngcontent-%COMP%] {\r\n  --bs-bg-rgb-color: rgba(255,199,0);\r\n  background-color: #ffc700!important;\r\n}\r\n\r\n  .fw-bold[_ngcontent-%COMP%] {\r\n  font-weight: 600!important;\r\n}\r\n\r\n  .symbol[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n  .symbol-group[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n  .symbol.symbol-35px[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%] {\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n\r\n  .symbol-group.symbol-hover[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n  .symbol[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%]:after {\r\n  border-radius: 0.475rem;\r\n}\r\n\r\n  .symbol-group[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%]:after {\r\n  display: block;\r\n  content: \" \";\r\n  border-radius: inherit;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  border: 2px solid #fff;\r\n  -webkit-background-clip: padding-box;\r\n  background-clip: padding-box;\r\n}\r\n\r\n  .bg-primary[_ngcontent-%COMP%] {\r\n  --bs-bg-rgb-color: rgba(62,151,255);\r\n  background-color: #3e97ff!important;\r\n}\r\n\r\n  .text-inverse-primary[_ngcontent-%COMP%] {\r\n  color: #ffffff!important;\r\n}\r\n\r\n  .symbol.symbol-35px[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n\r\n  .text-inverse-danger[_ngcontent-%COMP%] {\r\n  color: #ffffff!important;\r\n}\r\n\r\n  .text-gray-300[_ngcontent-%COMP%] {\r\n  color: #dbdfe9!important;\r\n}\r\n\r\n  label.my-chosse-flv[_ngcontent-%COMP%] {\r\n  min-height: 55px !important;\r\n  background-color: #e1e1e1;\r\n  cursor: pointer;\r\n}\r\n\r\n  .my-chosse-flv[_ngcontent-%COMP%]   .formbold-drop-file[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-weight: 400;\r\n  color: #717171;\r\n  text-transform: capitalize;\r\n  letter-spacing: 0.5px;\r\n  line-height: 12px;\r\n  font-size: 16px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n  .right-side-act[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n  border-left: 3px solid #d9d9d9;\r\n  height: calc(100vh - 117px);\r\n  overflow: auto;\r\n}\r\n\r\n  .kt-action-list[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n}\r\n\r\n  .Act-tittle-Right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  text-transform: capitalize;\r\n  font-weight: 600;\r\n}\r\n\r\n  .Act-tittle-Right[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #ccc;\r\n  margin-bottom: 10px;\r\n  padding-bottom: 9px;\r\n}\r\n\r\n  .kt-right-style[_ngcontent-%COMP%] {\r\n  padding-left: 15px;\r\n  border-left: 3px solid #d9d9d9;\r\n}\r\n\r\n  .sm-btn-submit[_ngcontent-%COMP%] {\r\n  width: 70px !important;\r\n  padding: 5px;\r\n  background-color: #2196F3 !important;\r\n  border: 1px solid #2196f3 !important;\r\n}\r\n\r\n  .sm-btn-close[_ngcontent-%COMP%]{\r\n  min-width: 60px !important;\r\n  padding: 5px;\r\n}\r\n\r\n  .VW_60[_ngcontent-%COMP%]{\r\n  width: 60vw;;\r\n}\r\n\r\n  .act-bd-box[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n}\r\n\r\n  label.checkbox.kt-fnt-vd[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  font-size: 35px;\r\n  position: relative;\r\n  top: 1px;\r\n  \r\n  margin-right: 5px;\r\n}\r\n\r\n  label.checkbox.kt-fnt-vd[_ngcontent-%COMP%] {\r\n  margin-bottom: 0px !important;\r\n  font-size: 15px;\r\n  color: #6e7497;\r\n}\r\n\r\n  @media (max-width: 2500px){\r\n  .tab-content.custom[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%] {\r\n    width: 50vw;\r\n}\r\n  }\r\n\r\n  @media (max-width: 1280px){\r\n    .tab-content.custom[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%] {\r\n      width: 60vw;\r\n  }\r\n    }\r\n\r\n  .l-radio[_ngcontent-%COMP%] {\r\n  padding: 6px;\r\n  border-radius: 50px;\r\n  display: inline-flex;\r\n  cursor: pointer;\r\n  transition: background 0.2s ease;\r\n  margin: 8px 0;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n  .l-radio[_ngcontent-%COMP%]:hover, .l-radio[_ngcontent-%COMP%]:focus-within {\r\n  background: rgba(159, 159, 159, 0.1);\r\n}\r\n\r\n  .l-radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 10px;\r\n  background: none;\r\n  border: 0;\r\n  box-shadow: inset 0 0 0 1px #9F9F9F;\r\n  box-shadow: inset 0 0 0 1.5px #9F9F9F;\r\n  -webkit-appearance: none;\r\n          appearance: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  transition: box-shadow 150ms cubic-bezier(0.95, 0.15, 0.5, 1.25);\r\n  pointer-events: none;\r\n}\r\n\r\n  .l-radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\n  .l-radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked {\r\n  box-shadow: inset 0 0 0 6px #6743ee;\r\n}\r\n\r\n  .l-radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  line-height: 20px;\r\n  padding: 0 8px;\r\n}\r\n\r\n  \r\n\r\n  .project-info-side-bar[_ngcontent-%COMP%] {\r\n      height: 100%;\r\n      width: 0;\r\n      position: fixed;\r\n      z-index: 999;\r\n      top: 0;\r\n      right: 0;\r\n      background-color: #ffffff;\r\n      border-left: 1px solid #EDEAE9;\r\n      overflow-x: hidden;\r\n      transition: 0.5s;\r\n      box-shadow: 0 0.1rem 1rem 0.25rem rgb(0 0 0/5%) !important;\r\n  }\r\n\r\n  .open_sidebar_info[_ngcontent-%COMP%] {\r\n    width: 55% !important;\r\n}\r\n\r\n  .kt-info-body[_ngcontent-%COMP%] {\r\n  margin: 1.3rem;\r\n  border: 1px solid #ededed;\r\n  height: calc(100vh - 4vh);\r\n}\r\n\r\n  .kt-title-icon[_ngcontent-%COMP%] {\r\n  background-color: #527ce2;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50px;\r\n  display: flex;\r\n  margin-right: 1rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n  .kt-info-box-tittle[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 15px;\r\n  color: #6388e3;\r\n  font-weight: 400;\r\n  margin-bottom: 10px;    letter-spacing: 0.5px;\r\n}\r\n\r\n  .kt-project-type[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n  .Kt-Pd-Status[_ngcontent-%COMP%] {\r\n  background-color: #000;\r\n  color: #fff;\r\n  margin: 0px 10px;\r\n  margin-left: 1rem;\r\n  font-weight: 600;\r\n  padding: 6px 13px; \r\n     max-width: 140px;\r\n  min-width: 130px;\r\n}\r\n\r\n  .Core_task[_ngcontent-%COMP%] {\r\n  background-color: #ffc43a;\r\n}\r\n\r\n  .kt-project-name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: #181818;\r\n  font-weight: 700;\r\n}\r\n\r\n  .kt-project-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #999999;\r\n  font-weight: 400;\r\n}\r\n\r\n  .kt-project-desc[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n}\r\n\r\n  .kt-info-box[_ngcontent-%COMP%] {\r\n  padding: 10px 10px;\r\n  border-bottom: 1px solid #ededed;\r\n}\r\n\r\n  .More_info[_ngcontent-%COMP%] {\r\n  background-color: #4574fe !important;\r\n}\r\n\r\n  .kt-info-lable-v[_ngcontent-%COMP%] {\r\n  color: #939393;\r\n  letter-spacing: 0.3px;\r\n  font-size: 14px;\r\n}\r\n\r\n  .kt-info-data-v[_ngcontent-%COMP%] {\r\n  background-color: #f0f0f0;\r\n  border-radius: 35px;\r\n  padding: 5px 4px;\r\n  font-weight: 500;\r\n  color: #4f4f4f;\r\n  margin-top: 10px;\r\n}\r\n\r\n  .kt-client-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  border-radius: 50px;\r\n}\r\n\r\n  .kt-client-icon[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\n  .bg-light-shade[_ngcontent-%COMP%] {\r\n  background-color: #eaf2fd !important;\r\n}\r\n\r\n  .Delay[_ngcontent-%COMP%]{\r\n  background-color: #Ed6207 !important;\r\n}\r\n\r\n  .kt-project-sts-data[_ngcontent-%COMP%] {\r\n  margin-top: 17px;\r\n  color: #3b3b3b;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n}\r\n\r\n  .progress.kt-projcect-progress.bar[_ngcontent-%COMP%] {\r\n  border-radius: 50px;\r\n  height: 10px;\r\n}\r\n\r\n  .bg-inprogress[_ngcontent-%COMP%] {\r\n  background-color: #505050;\r\n}\r\n\r\n  .bg-delay[_ngcontent-%COMP%] {\r\n  background-color: #Ed6207;\r\n}\r\n\r\n  .bg-done[_ngcontent-%COMP%] {\r\n  background-color: #6aad3a;\r\n}\r\n\r\n  .kt-prg-bar-info[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #3d3d3d;\r\n}\r\n\r\n  .kt-prg-bar-info[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  margin-right: 5px;\r\n}\r\n\r\n  .kt-total-prg-vl[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  font-size: 21px !important;\r\n}\r\n\r\n  .Deadline_Extend[_ngcontent-%COMP%]{\r\n  background-color: #f48383;\r\n}\r\n\r\n  button.Kt-Approval-btns[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 3px 5px;\r\n  border-radius: 50px;\r\n  background-color: #fff;\r\n  color: #4f4f4f;\r\n  border: 2px solid #fff;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n}\r\n\r\n  .Btn_Accpet[_ngcontent-%COMP%] {\r\n  border-color: #8ab991 !important;\r\n}\r\n\r\n  .Btn_Edit_Accept[_ngcontent-%COMP%] {\r\n  border-color: #7caccd !important;\r\n}\r\n\r\n  .Btn_Conditional_Accept[_ngcontent-%COMP%] {\r\n  border-color: #407f4c !important;\r\n}\r\n\r\n  .Btn_Reject[_ngcontent-%COMP%] {\r\n  border-color: #cf8e66 !important;\r\n}\r\n\r\n  .kt-approval-msg[_ngcontent-%COMP%] {\r\n  background-color: #f0f0f0;\r\n  padding: 10px;\r\n  border-radius: 6px;\r\n  min-height: 85px;\r\n}\r\n\r\n  .text-end[_ngcontent-%COMP%] {\r\n  text-align: end;\r\n}\r\n\r\n  .btn-project-stv[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  background-color: #f0f0f0;\r\n}\r\n\r\n  .Bt-Submit[_ngcontent-%COMP%] {\r\n  background-color: #878787;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n  .kt-info-pg-footer[_ngcontent-%COMP%] {\r\n  margin: 5px 10px;\r\n}\r\n\r\n  @media only screen and (min-width: 1800px) and (max-width: 2500px)  {\r\n  .open_sidebar_info[_ngcontent-%COMP%] {\r\n    width: 40% !important;\r\n}\r\n}\r\n\r\n  @media only screen and (min-width: 1385px) and (max-width: 1800px)  {\r\n  .open_sidebar_info[_ngcontent-%COMP%] {\r\n    width: 50% !important;\r\n}\r\n}\r\n\r\n  @media only screen and (min-width: 1280px) and (max-width: 1385px)  {\r\n  .open_sidebar_info[_ngcontent-%COMP%] {\r\n    width: 55% !important;\r\n}\r\n}\r\n\r\n  @media (max-width: 1280px){\r\n    .open_sidebar_info[_ngcontent-%COMP%] {\r\n      width: 58% !important;\r\n  }\r\n    }\r\n\r\n  \r\n\r\n  .btn[_ngcontent-%COMP%]:focus, .btn.focus[_ngcontent-%COMP%] {\r\n    outline: 0;\r\n    box-shadow: none !important;\r\n}\r\n\r\n  tr.odd.project-list_AC.active[_ngcontent-%COMP%]{\r\n  background-color: #4377ff;\r\n    color: #fff !important;\r\n}\r\n\r\n  tr.odd.project-list_AC.active[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLXN1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1CSzs7RUFFSDtJQUNFO0dBQ0Q7O0VBQ0Q7OztJQUdFLG1CQUFtQjtJQUVuQix3Q0FBd0M7SUFDeEMsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFDQTtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBR2Ysd0JBQXdCO0lBRXhCLHVCQUF1QjtFQUN6Qjs7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7RUFDYjs7RUFDQTtJQUNFLFlBQVk7SUFFWix1QkFBdUI7RUFDekI7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBY0E7SUFDRTs7O01BR0UsZUFBZTtNQUNmLFdBQVc7SUFDYjtJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLFdBQVc7SUFDYjtFQUNGOztFQUNBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtFQUNmOztFQUNBO0lBQ0Usa0JBQWtCO0FBQ3RCOztFQUNBOzs7Ozs7S0FNSzs7RUFFTDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0VBQ0EsVUFBVTs7RUFDVjtFQUNFLFVBQVU7QUFDWjs7RUFFQSxVQUFVOztFQUNWO0VBQ0UsbUJBQW1CO0FBQ3JCOztFQUVBLFdBQVc7O0VBQ1g7RUFDRSxnQkFBZ0I7QUFDbEI7O0VBRUEsb0JBQW9COztFQUNwQjtFQUNFLGdCQUFnQjtBQUNsQjs7RUFDQTtFQUNFLGVBQWU7QUFDakI7O0VBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiOztFQUNBO0VBQ0UseUJBQXlCO0VBQ3pCO0FBQ0Y7O0VBRUE7RUFDRSx5QkFB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YixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztFQUNBO0VBQ0UsZUFBZTtBQUNqQjs7RUFDQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0VBQ0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0VBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0VBR0M7RUFDQztJQUNFLHFCQUFxQjtBQUN6QjtBQUNBOztFQUVBO0VBQ0U7SUFDRSxxQkFBcUI7QUFDekI7QUFDQTs7RUFFQTtFQUNFO0lBQ0UscUJBQXFCO0FBQ3pCO0FBQ0E7O0VBQ0U7SUFDRTtNQUNFLHFCQUFxQjtFQUN6QjtJQUNFOztFQUNGLG1EQUFtRDs7RUFFbkQ7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0FBQy9COztFQUNBO0VBQ0UseUJBQXlCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7RUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJwcm9qZWN0cy1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAjbG9hZGluZ3sgXHJcbiAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICBsZWZ0OiA1MCU7IFxyXG4gIHRvcDogNTAlOyBcclxuICB6LWluZGV4OiAxOyBcclxuICB3aWR0aDogMTUwcHg7IFxyXG4gIGhlaWdodDogMTUwcHg7IFxyXG4gIG1hcmdpbjogLTc1cHggMCAwIC03NXB4OyBcclxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlOyBcclxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7IFxyXG4gIHdpZHRoOiAxMjBweDsgXHJcbiAgaGVpZ2h0OiAxMjBweDsgXHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgXHJcbiAgfSBcclxuICAgIFxyXG4gIEBrZXlmcmFtZXMgc3BpbiB7IFxyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfSBcclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IFxyXG4gIH0gKi9cclxuXHJcbiAgLmxpc3QtaWNvbi1jb2xvcntcclxuICAgIGNvbG9yOiAjOTY5Njk2XHJcbiAgIH1cclxuICAubG9hZGVyLFxyXG4gIC5sb2FkZXI6YmVmb3JlLFxyXG4gIC5sb2FkZXI6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzBkYzVjMTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkMSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbjogbG9hZDEgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICB3aWR0aDogMWVtO1xyXG4gICAgaGVpZ2h0OiA0ZW07XHJcbiAgfVxyXG4gIC5sb2FkZXIge1xyXG4gICAgY29sb3I6ICMwZGM1YzE7XHJcbiAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcclxuICAgIG1hcmdpbjogODhweCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xyXG4gIH1cclxuICAubG9hZGVyOmJlZm9yZSxcclxuICAubG9hZGVyOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gIH1cclxuICAubG9hZGVyOmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAtMS41ZW07XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XHJcbiAgfVxyXG4gIC5sb2FkZXI6YWZ0ZXIge1xyXG4gICAgbGVmdDogMS41ZW07XHJcbiAgfVxyXG5cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDEge1xyXG4gICAgMCUsXHJcbiAgICA4MCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAwO1xyXG4gICAgICBoZWlnaHQ6IDRlbTtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgLTJlbTtcclxuICAgICAgaGVpZ2h0OiA1ZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbG9hZDEge1xyXG4gICAgMCUsXHJcbiAgICA4MCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAwO1xyXG4gICAgICBoZWlnaHQ6IDRlbTtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgLTJlbTtcclxuICAgICAgaGVpZ2h0OiA1ZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gIC5tb2RhbCAubW9kYWwtY29udGVudCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuLyogXHJcbiAgdGFibGUsIHRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAxNXB4O1xyXG4gIH0gKi9cclxuXHJcbi5zaGFyZWRkZXRhaWxzLmRyb3Bkb3duLW1lbnV7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRvcDogMzhweCAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICByaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4vKiB3aWR0aCAqL1xyXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbi5zaGFyZWRkZXRhaWxzLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG59XHJcbi5uZ3gtcGFnaW5hdGlvbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbiNiYWNrQnRuOmhvdmVye1xyXG4gYmFja2dyb3VuZC1jb2xvcjojNTg2N2RkIDtcclxuIGNvbG9yOiB3aGl0ZTsgXHJcbn1cclxuI01kbF9jbG9zZWJ0bjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xyXG4gIGNvbG9yOndoaXRlXHJcbn1cclxuXHJcbi50ZXh0LXdhcm5pbmctMXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMGE3O1xyXG4gIGNvbG9yOiNGRkE4MDA7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZzogNHB4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlci0xe1xyXG4gIGNvbG9yOiAjRjY0RTYwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkUyRTU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZzogNHB4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5kcm9wZG93bi1kb3duLFxyXG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuZHJvcGRvd24tdXB7XHJcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNhZGFkYWQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm11bHRpc2VsZWN0LWRyb3Bkb3due1xyXG4gIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5rdC10b2RvX19kZXRhaWxze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb257XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiY2ZmO1xyXG4gICAgY29sb3I6ICM1ODY3ZGQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAwIDhweCAwIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuXHJcbi5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uIHN2Zy5rdC1zdmctaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB3aWR0aDogMThweDtcclxuICB9XHJcblxyXG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiBzdmcua3Qtc3ZnLWljb24uYWRkLWljb257XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG59XHJcblxyXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uIC5rdC1zdmctaWNvbiBnIFtmaWxsXXtcclxuICAgIGZpbGw6ICM1ODY3ZGQ7XHJcbiAgfVxyXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uIHN2Zy5rdC1zdmctaWNvbi5hZGQtaWNvbiBwYXRoe1xyXG4gICAgZmlsbDogIzU4NjdkZDtcclxuICB9XHJcbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb246aG92ZXIgc3ZnLmt0LXN2Zy1pY29uLmFkZC1pY29uIHBhdGgsXHJcbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlIHN2Zy5rdC1zdmctaWNvbi5hZGQtaWNvbiBwYXRoe1xyXG4gICAgZmlsbDogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uOmhvdmVyIC5rdC1zdmctaWNvbiBnIFtmaWxsXSxcclxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbi5hY3RpdmUgLmt0LXN2Zy1pY29uIGcgW2ZpbGxde1xyXG4gIGZpbGw6ICNmZmY7XHJcbn1cclxuXHJcbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb246aG92ZXIsXHJcbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuY2FyZC10aXRsZSAuZmF2b3VyaXRlIGl7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI2NjYztcclxuICB9XHJcbiAgLmNhcmQtdGl0bGUgLmZhdm91cml0ZS5hY3RpdmUgaSxcclxuICAuY2FyZC10aXRsZSAuZmF2b3VyaXRlOmhvdmVyIGl7XHJcbiAgICBjb2xvcjogI2ZmYzEwNztcclxuICB9XHJcblxyXG4gIC5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZHtcclxuICAgIGJvcmRlci1jb2xvcjogI2Q2ZDZkNjtcclxuICB9XHJcblxyXG4gIC5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5zdWNjZXNzIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzFkYzliNztcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDRweDsgKi9cclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQud2FybmluZyB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmI4MjI7IFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5pbmZvIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzI3ODZmYjsgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLmRhbmdlciB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNGNThBOEI7IFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5VbmRlckFwcHJvdmFscyB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQkQ4MzhDOyBcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuRm9yd2FyZFVuZGVyQXBwcm92YWwge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0UwQjFENzsgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLmNvbXBsZXRlVW5kZXJBcHByb3ZhbCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOThjN2JmOyBcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQucHJvamVjdEhvbGQge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0MwQjVEQzsgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLkhvbGR1bmRlckFwcCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTg1MDk4OyBcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuRGVhZGxpbmVFeHRlbmRlZHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7IFxyXG59XHJcbi5kZWxheURheXN7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19hc2lkZSAua3QtaW5ib3hfX25hdiAua3QtbmF2IC5rdC1uYXZfX2l0ZW0gLmt0LW5hdl9fbGluayBnIFtmaWxsXSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuOTMsIDAuMzUsIDEsIDEpO1xyXG4gIGZpbGw6ICM1RTVGNjM7XHJcbn1cclxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsge1xyXG4gIHBhZGRpbmc6IDAuMnJlbSAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ubWFpbC1kcm9wZG93biB7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4ubWFpbC1kcm9wZG93biB0YWJsZSB0ZCB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5rdC1xdWljay1wYW5lbCAua3QtcG9ydGxldC5rdC1wb3J0bGV0LS1oZWFkLWxnIC5rdC1wb3J0bGV0X19oZWFkIHtcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5rdC1pbmJveF9faWNvbiAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1tZW51LXNtIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuLmRyb3Bkb3duLXJlcGx5IHVsIGxpIGEgLmt0LW5hdl9fbGluay1pY29uIHtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19mb3JtIC5rdC1pbmJveF9fYm9keSAua3QtaW5ib3hfX3RvIC5rdC1pbmJveF9fZmllbGQgLmt0LWluYm94X19sYWJlbCB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9faW5wdXQgaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmt0LW5hdl9fbGluay1ub2hvdmVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcbi5rdC1uYXZfX2xpbmstdGV4dDpob3ZlciB7XHJcbiAgY29sb3I6ICM3NDc4OEQgIWltcG9ydGFudDtcclxufVxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTAwLCAxNDIsIDAuMik7XHJcbiAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93IHtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLXVuaWZpZWQtYnJhbmQge1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQ6IHJnYigxOTUsIDE5NSwgMTk1KTtcclxufVxyXG4vKiAuaW5ib3gtdGV4dCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufSAqL1xyXG4ua3QtcXVpY2stcGFuZWwyIHtcclxuICB3aWR0aDogNjUwcHggIWltcG9ydGFudDtcclxufVxyXG4ua3QtcXVpY2stcGFuZWwtLXJpZ2h0IC5rdC1xdWljay1wYW5lbCB7XHJcbiAgcmlnaHQ6IC02NjBweDtcclxuICBsZWZ0OiBhdXRvO1xyXG59XHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XHJcbn1cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1NTU7XHJcbn1cclxuLyogLnNvbWVjbGFzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0gKi9cclxuLyogOmhvc3QoLnNvbWVDbGFzcykge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSAqL1xyXG4ua3QtaW5ib3ggLmt0LWluYm94X19pY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaGF0Y291bnQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcbi5rdC1iYWRnZS5rdC1iYWRnZS0tZGFyayB7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgYmFja2dyb3VuZDogIzhDOEQ5MjtcclxufVxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19hc2lkZSAua3QtaW5ib3hfX25hdiAua3QtbmF2IC5rdC1uYXZfX2l0ZW0gLmt0LW5hdl9fbGluayBnIFtmaWxsXSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuOTMsIDAuMzUsIDEsIDEpO1xyXG4gIGZpbGw6ICM1RTVGNjM7XHJcbn1cclxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsge1xyXG4gIHBhZGRpbmc6IDAuMnJlbSAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ua3QtZm9udC1SZXBseVJlcXVpcmVkIHtcclxuICBjb2xvcjogI2E2YyAhaW1wb3J0YW50O1xyXG59XHJcbi5tYWlsLWRyb3Bkb3duIHtcclxuICB3aWR0aDogODAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYWlsLWRyb3Bkb3duIHRhYmxlIHRkIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLmt0LXF1aWNrLXBhbmVsIC5rdC1wb3J0bGV0Lmt0LXBvcnRsZXQtLWhlYWQtbGcgLmt0LXBvcnRsZXRfX2hlYWQge1xyXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmt0LWluYm94X19pY29uIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLW1lbnUtc20ge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG4uZHJvcGRvd24tcmVwbHkgdWwgbGkgYSAua3QtbmF2X19saW5rLWljb24ge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2Zvcm0gLmt0LWluYm94X19ib2R5IC5rdC1pbmJveF9fdG8gLmt0LWluYm94X19maWVsZCAua3QtaW5ib3hfX2xhYmVsIHtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19mb3JtIC5rdC1pbmJveF9fYm9keSAua3QtaW5ib3hfX3RvIC5rdC1pbmJveF9fZmllbGQgLmt0LWluYm94X19pbnB1dCBpbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ua3QtbmF2X19saW5rLW5vaG92ZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM3NDc4OEQgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IGF1dG87XHJcbn1cclxuLmt0LW5hdl9fbGluay10ZXh0OmhvdmVyIHtcclxuICBjb2xvcjogIzc0Nzg4RCAhaW1wb3J0YW50O1xyXG59XHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmssXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU0LCAxMDAsIDE0MiwgMC4yKTtcclxuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay10ZXh0LFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93LFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay10ZXh0LFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay10ZXh0LFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3cge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcbi5rdC1iYWRnZS5rdC1iYWRnZS0tdW5pZmllZC1icmFuZCB7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgYmFja2dyb3VuZDogcmdiKDE5NSwgMTk1LCAxOTUpO1xyXG59XHJcbi8qIC5pbmJveC10ZXh0IHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59ICovXHJcbi5rdC1xdWljay1wYW5lbDIge1xyXG4gIHdpZHRoOiA2NTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5rdC1xdWljay1wYW5lbC0tcmlnaHQgLmt0LXF1aWNrLXBhbmVsIHtcclxuICByaWdodDogLTY2MHB4O1xyXG4gIGxlZnQ6IGF1dG87XHJcbn1cclxuLyogd2lkdGggKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDZweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI0YxRjFGMTtcclxufVxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzU1NTtcclxufVxyXG4vKiAuc29tZWNsYXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufSAqL1xyXG4vKiA6aG9zdCguc29tZUNsYXNzKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59ICovXHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2ljb24ge1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5rdC1iYWRnZS5rdC1iYWRnZS0taW5saW5lIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZzogMC4xNXJlbSAwLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2FzaWRlIHtcclxuICBwYWRkaW5nOiAxN3B4O1xyXG4gIHdpZHRoOiAyNDNweDtcclxufVxyXG4vKiBTdGF0dXMgQ29sb3JzICovXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfd2FybmluZ3tcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmI4MjI7XHJcbn1cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9wcmltYXJ5e1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk1YmVkOTtcclxufVxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3N1Y2Nlc3N7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOTViZWQ5O1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfRGFuZ2Vye1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0Y1OEE4QjtcclxufVxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX2hvbGR7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYzBiNWRjXHJcbn1cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9yZWplY3RlZHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmNWMyOTM7XHJcbn1cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV91bmRlckFwcHJvdmFsc3tcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNCRDgzOEM7XHJcbn1cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9mb3J3YXJkVW5kZXJBcHByb3ZhbHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7XHJcbn1cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9jb21wbGV0ZVVuZGVyQXBwcm92YWx7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOThjN2JmO1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcHJvamVjdEhvbGR7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQzBCNURDO1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfTmV3UHJvamVjdHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMwMDdiZmY7XHJcbn1cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9EZWFkbGluZUV4dGVuZGVke1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0UwQjFENztcclxufVxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX0hvbGR1bmRlckFwcHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhODUwOTg7XHJcbn1cclxuLmt0LWluYm94IC5rdC1pbmJveF9fbGlzdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE3cHg7XHJcbn1cclxuLmljb25zLWZpbHRlciAua3QtdG9kb19faWNvbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uaWNvbnMtZmlsdGVyIC5rdC10b2RvX19pY29uIHNwYW57XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICM1ODY3ZGQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzU4NjdkZDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTExcHg7XHJcbiAgcmlnaHQ6IC0xMXB4O1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuLyogLmljb25zLWZpbHRlciAua3QtdG9kb19faWNvbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNhMWY3ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudFxyXG59ICovXHJcbi8qIC5pY29ucy1maWx0ZXIgLmt0LXRvZG9fX2ljb246aG92ZXIgc3BhbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAxMzQsIDI1MSwgMSkgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50XHJcbn0gKi9cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXtcclxuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm11bHRpc2VsZWN0LWRyb3Bkb3duW19uZ2NvbnRlbnQtdW5qLWM0MF0gLmRyb3Bkb3duLWJ0bltfbmdjb250ZW50LXVuai1jNDBde1xyXG4gIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHZpcnR1YWwgU2Nyb2xsZXIgKi9cclxudmlydHVhbC1zY3JvbGxlciB7XHJcbiAgLyogd2lkdGg6IDM1MHB4OyAqL1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuIFxyXG4udnNkaXYge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLyogPT09IFNpZGViYXIgPT09ICovXHJcbi5zaWRlSW5mb2JhciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgLyogcGFkZGluZy10b3A6IDYwcHg7ICovXHJcbn1cclxuLnNpZGVJbmZvYmFyIC5rdC1wb3J0bGV0X19oZWFke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmM7XHJcbn1cclxuXHJcbi5zaWRlSW5mb2JhciAuY2xvc2VidG4ge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjogIzMzMztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmluZm8taWNvbi1jaXJ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjNTg2N2RkO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW17XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgI2RlZGVkZTtcclxuICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtLmRhcmt7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgcmdiYSgwLDAsMCwwLjMpO1xyXG59XHJcblxyXG4vKiAua3QtaW5ib3hfX2RhdGV0aW1le1xyXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG59ICovXHJcblxyXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW0gLmt0LXdpZGdldDFfX2luZm8gLmt0LXdpZGdldDFfX3RpdGxle1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnNpZGVJbmZvYmFyIC50aXRsZS1zaWRlYmFye1xyXG4gICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLmNvdW50LWhlaWdodHtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4vKiAuY291bnQtaGVpZ2h0IC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbntcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcclxufSAqL1xyXG4uY291bnQtaGVpZ2h0IC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiAua3QtY2hlY2tib3h7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuXHJcbi8qIHdpZHRoICovXHJcbi5jb3VudC1oZWlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogM3B4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbi5jb3VudC1oZWlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuLmNvdW50LWhlaWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuXHJcbi5kcm9wZG93biAua3QtY2hlY2tib3ggPiBpbnB1dDpjaGVja2VkIH4gc3BhbntcclxuICBib3JkZXItY29sb3I6ICM1ODY3ZGQ7XHJcbn1cclxuLmt0LWNoZWNrYm94ID4gc3BhbjphZnRlciB7XHJcbiAgYm9yZGVyOiBzb2xpZCAjNTg2N2RkO1xyXG59XHJcblxyXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93biB7XHJcbiAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xyXG59XHJcbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnUge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lOyAqL1xyXG4gICAgdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAtMjJweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgI2ZmZjtcclxuICBib3JkZXItcmlnaHQ6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTE1cHg7XHJcbiAgbGVmdDogMzJweDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJvcmRlci1ib3R0b206IDE3cHggc29saWQgI2NjYztcclxuICBib3JkZXItcmlnaHQ6IDE5cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDE5cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTE3cHg7XHJcbiAgbGVmdDogMzBweDtcclxuICB6LWluZGV4OiA4O1xyXG59XHJcblxyXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51MSAuZmlsdGVyLWJveHtcclxuICB3aWR0aDogMzMuMzMzMyU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCgxKSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoMSl7XHJcbiAgd2lkdGg6IDMlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDIpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCgyKXtcclxuICB3aWR0aDogMzMlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDMpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCgzKXtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDQpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg0KXtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDUpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg1KXtcclxuICB3aWR0aDogMTUlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDYpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg2KXtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDcpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg3KXtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDgpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg4KXtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHQsIC5rdC1xdWljay1zZWFyY2ggLmt0LXF1aWNrLXNlYXJjaF9fZm9ybSAuaW5wdXQtZ3JvdXAtYXBwZW5kIC5pbnB1dC1ncm91cC10ZXh0e1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZmY7ICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5rdC1xdWljay1zZWFyY2ggLmt0LXF1aWNrLXNlYXJjaF9fZm9ybSAuaW5wdXQtZ3JvdXB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZGJmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5zaG93X2VudHJpZXMgc3BhbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuIFxyXG59XHJcbi5zaG93X2VudHJpZXMgc2VsZWN0e1xyXG4gIC8qIHdpZHRoOiAxMDBweDsgKi9cclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDg4LCAxMDMsIDIyMSwgMC4zKTtcclxuICBjb2xvcjogIzU4NjdkZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvdW50LWJ0bntcclxuICAvKiBoZWlnaHQ6IDI1cHg7ICovXHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDsgKi9cclxuICBwYWRkaW5nOiAwcHggMTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoODgsIDg4LCA4OCk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcbi8qIFNlYXJjaCBQcm9qZWN0cyAqL1xyXG4ua3QtaW5ib3ggLmt0LWluYm94X190b29sYmFyIC5rdC1pbmJveF9fc2VhcmNoIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjc7XHJcbn1cclxuLmlucHV0LWdyb3VwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kLCAuZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQtc2hvcnR7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2UyZTlmZjsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAyNXZ3O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZGJmZiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQgLmZvcm0tY29udHJvbCwgLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kLXNob3J0IC5mb3JtLWNvbnRyb2x7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcclxufVxyXG5cclxuLyogLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlICAqL1xyXG5cclxuLyogLnZhbGlub29ye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udmFsaW5vb3I6OmJlZm9yZXtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn0gKi9cclxuXHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2xpc3QgLmt0LWluYm94X19pdGVtcyAua3QtaW5ib3hfX2l0ZW17XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5kZWxldGUtYnRue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICByaWdodDogMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBsaW5lLWhlaWdodDogNjNweDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRlbGV0ZS1idG4gaXtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcclxuICBjb2xvcjogIzU4NjdkZDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDEwcHggOHB4IDAgMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuLyogLmRlbGV0ZS1idG4gaXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNztcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UgIWltcG9ydGFudDtcclxufSovXHJcbi5idG4tc2Vjb25kYXJ5LnRoZW1lLWJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5idG4uYnRuLWxhYmVsLXByaW1hcnl7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcclxufVxyXG5cclxuLmRlbGV0ZS1idG4gaTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4ua3QtaW5ib3hfX2l0ZW06aG92ZXIgLmRlbGV0ZS1idG57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zaWRlYmFyLW1vcmV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTBweDtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uZy1hdXRvY29tcGxldGUge1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLyogQm94ZXMgICovXHJcbi5tZW1vc2NvdW50IHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuXHJcbn1cclxuXHJcbi5ibHVlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4ucHVycGxlIHtcclxuICBiYWNrZ3JvdW5kOiAjMDBCNzRBO1xyXG59XHJcblxyXG4ud2luZSB7XHJcbiAgYmFja2dyb3VuZDogI0Y5MzE1NDtcclxufVxyXG4vKiBtZW1vc0NvdW50X0ZvbnRzaXplICovXHJcbi5NX2ZzaXple1xyXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBwYWRkaW5nOiAuMzc1cmVtIC41NjI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5iYWRnZS1vdXRsaW5lLXByaW1hcnkge1xyXG4gIGNvbG9yOiAjNDA1MTg5O1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgIzQwNTE4OVxyXG59XHJcblxyXG4uYmFkZ2UuYmFkZ2UtcGlsbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTByZW1cclxufVxyXG5cclxuLmJhZGdlLW91dGxpbmUtaW5mbyB7XHJcbiAgY29sb3I6ICMzZGE1ZjQ7XHJcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjM2RhNWY0XHJcbn1cclxuXHJcbi5iYWRnZS1vdXRsaW5lLWRhbmdlciB7XHJcbiAgY29sb3I6ICNmMTUzNmU7XHJcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZjE1MzZlXHJcbn1cclxuXHJcbi5iYWRnZS1vdXRsaW5lLXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjMDBjNjg5O1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgIzAwYzY4OVxyXG59XHJcblxyXG4uYmFkZ2Utb3V0bGluZS13YXJuaW5nIHtcclxuICBjb2xvcjogI2ZkYTAwNjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmRhMDA2XHJcbn1cclxuLyogTmV3IGRlc2lnbiBDU1MgIGZyb20gSGVyZS4uLiAqL1xyXG4ubmFtZS1ib3h7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5uYW1lcy1yZXNwb25zZXtcclxuICBkaXNwbGF5IDppbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLm5hbWVzLXJlc3BvbnNlIHNwYW46Zmlyc3QtY2hpbGR7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLm5hbWVzLXJlc3BvbnNlIHNwYW46bGFzdC1jaGlsZHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaGVhZC1idG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OCwgMTAzLCAyMjEsIDAuMSk7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweCAzcHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5oZWFkLWJ0biBpe1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTg2N2RkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG59XHJcblxyXG4uZGV2aWRlcntcclxuICBoZWlnaHQ6IDFweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4ucHJpY2V2YWx1ZXMge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn1cclxuXHJcbi50b3AtYm9yZGVyIC5wcmljZXZhbHVlczpudGgtY2hpbGQoMSksIC50b3AtYm9yZGVyIC5wcmljZXZhbHVlczpudGgtY2hpbGQoMikgIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjFmMTtcclxufVxyXG4udG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDMpLCAudG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDQpICB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZVxyXG59XHJcblxyXG4ucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDIpLCAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDQpIHtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi5kbXMtbGlua3N7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xyXG59XHJcblxyXG4uZG1zLWxpbmtzIGxpIGF7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi8qID09PT09PT09PSBNYXQgU2VsZWN0IFN0eWxlcyA9PT09PT09PT0gKi9cclxuXHJcbm1hdC1zZWxlY3R7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5kaXYjbWF0LXNlbGVjdC0wLXBhbmVse1xyXG4gIG1pbi13aWR0aDogYXV0bztcclxufVxyXG5cclxuLm1hdC1zZWxlY3QtcGFuZWwtd3JhcC5uZy10bnMtYzI3NS0wLm5nLXRyaWdnZXIubmctdHJpZ2dlci10cmFuc2Zvcm1QYW5lbFdyYXAubmctc3Rhci1pbnNlcnRlZHtcclxuICB0cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xyXG4gIGNvbG9yOiB1bnNldDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtb3B0aW9uLXBzZXVkby1jaGVja2JveC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDNGOUY7XHJcbn1cclxuXHJcbi8qID09PT09PT09PSBQcm9ncmVzcyBCYXIgPT09PT09PT09ICovXHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm8tYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDk3JSk7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IGhzbGEoMCwgMCUsIDAlLCAwLjEpIGluc2V0O1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfYmFyX3RpdGxlIHtcclxuICBjb2xvcjogaHNsKDIxOCwgNCUsIDUwJSk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTI4cHg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfbnVtYmVyIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzLWJhci1pbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA4OCUpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgbGluZWFyIDBzO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXI6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxcHg7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzLWJhci1pbm5lcjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTRweDtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtNHB4O1xyXG4gIHRvcDogLTVweDtcclxufVxyXG4ua3Qtd2lkZ2V0X19kZXRhaWxzIHtcclxuICBtaW4td2lkdGg6IDkwcHg7XHJcbn1cclxuLmt0LW1lZGlhLWdyb3VwIC5rdC1tZWRpYS5rdC1tZWRpYS0tc20gaW1nIHtcclxuICBtYXgtd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ua3QtbWVkaWEtZ3JvdXAgLmt0LW1lZGlhLmt0LW1lZGlhLS1zbSBzcGFuIHtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgYmFja2dyb3VuZDogI2RlZWNmODtcclxuICBjb2xvcjogIzI3ODZmYjtcclxufVxyXG4uYmctdG9kYXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDJiZjAgIWltcG9ydGFudDtcclxufVxyXG4udy00NSB7XHJcbiAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xyXG59XHJcbi53LTU1IHtcclxuICB3aWR0aDogNTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZHtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gIH1cclxufVxyXG5cclxuLnN1Yy1odnIge1xyXG4gIGNvbG9yOiAjMWRjOWI3O1xyXG59XHJcbi5zdWMtaHZyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMWRjOWI3O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5kYW4taHZyIHtcclxuICBjb2xvcjogI2RjMzU0NTtcclxufVxyXG4uZGFuLWh2cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4ua3Qtd2lkZ2V0X190aXRsZXtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuLmJ0bi1md3tcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5hc2MtYXJ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uYnRuLXNvcnR7XHJcbiAgY29sb3I6ICMwYjBlMWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVmMWY2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmEub3Jkci1hIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBjb2xvcjogIzBiMGUxZjtcclxufVxyXG4uc29ydC1ieXtcclxuICBjb2xvcjogIzk5OTk5OTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG5cclxufVxyXG4uc29ydC1he1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5zb3J0LWRyb3B7XHJcbiAgcGFkZGluZzogMC44cmVtIDA7XHJcbiAgbWluLXdpZHRoOiAxMnJlbTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnNvcnQtZHJvcCAuZHJvcGRvd24taXRlbXtcclxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcclxufVxyXG4uc29ydC1kcm9wIC5hY3RpdmV7XHJcbiAgYmFja2dyb3VuZDogI2YxZjZmZDtcclxuICBjb2xvcjogIzBiMGUxZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5zb3J0LWRyb3AgLmFjdGl2ZSAuY2tjLWljbntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICMzYjkzZmM7XHJcbn1cclxuLmJ0bi1zb3J0OmhvdmVyLCAuYnRuLXNvcnQ6Zm9jdXMsIC5idG4tc29ydDphY3RpdmUgIHtcclxuICBjb2xvcjogIzBiMGUxZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmN2ZhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWU2ZWU7XHJcbn1cclxuLnNlbGVjdC1ib3h7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmEuZHJvcGRvd24taXRlbXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCl7XHJcbiAgLmt0LXdpZGdldF9fdGl0bGV7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgfVxyXG4gIC5zdGF0LXRkIGRpdntcclxuICAgIHdpZHRoOiAxMzVweDtcclxuICB9XHJcbiAgLnN0YXQtdGR7XHJcbiAgICB3aWR0aDogMTM1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCl7XHJcbi5rdC13aWRnZXRfX3RpdGxle1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG59XHJcbn1cclxuXHJcbnNwYW4uY291bnQge1xyXG4gIGJhY2tncm91bmQ6ICM5ODg2ZWI7XHJcbiAgcGFkZGluZzogMCA0cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnRpY2tzLWdyYWQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZjlhOGQ0LCAjZDhiNGZlLCAjODE4Y2Y4KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDkwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZXhhbXBsZV9pY29uIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XHJcbn1cclxuXHJcbnNwYW4uZXhhbXBsZV9pY29uIHN2ZyB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG5zcGFuLmV4YW1wbGVfaWNvbiBpIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuc3Bhbi5jb3VudDEge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzk4ODZlYjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjOTg4NmViO1xyXG4gIGN1cnNvcjogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA1MDBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuc3Bhbi5jb3VudDIge1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNkZWVjZjg7XHJcbiAgY29sb3I6ICMyNzg2ZmIgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5zY3JvbGxiYXIxIHtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTc4cHgpOyBcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLnNjcm9sbGJhcjEge1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzhweCk7IFxyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLnNjcm9sbGJhcjE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNnB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG5cclxuLnNjcm9sbGJhcjE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuXHJcbi5zY3JvbGxiYXIxOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuXHJcbi5zY3JvbGxiYXIxOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG4uZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgLyogdmVydGljYWwtYWxpZ246IHRleHQtdG9wOyAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMyAxMScgd2lkdGg9JzEzJyBoZWlnaHQ9JzExJyBmaWxsPSdub25lJyUzZSUzY3BhdGggZD0nTTExLjA0MjYgMS4wMjg5M0MxMS4zMjU4IDAuNjk1NzkyIDExLjgyNTQgMC42NTUyODMgMTIuMTU4NSAwLjkzODQ1MUMxMi40OTE3IDEuMjIxNjIgMTIuNTMyMiAxLjcyMTI0IDEyLjI0OSAyLjA1NDM3TDUuNTE5ODUgOS45NzEwNEM1LjIzMjI0IDEwLjMwOTQgNC43MjI2MSAxMC4zNDUxIDQuMzkwNyAxMC4wNUwwLjgyODE5NyA2Ljg4MzM1QzAuNTAxNDEgNi41OTI4OCAwLjQ3MTk3NSA2LjA5MjQ5IDAuNzYyNDUyIDUuNzY1N0MxLjA1MjkzIDUuNDM4OTEgMS41NTMzMiA1LjQwOTQ4IDEuODgwMTEgNS42OTk5NUw0LjgzNzY1IDguMzI4ODlMMTEuMDQyNiAxLjAyODkzWicgZmlsbD0nJTIzRkZGRkZGJy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG59XHJcbi5wcy0xe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogdW5zZXQ7XHJcbiAgbWFyZ2luOiA0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLyotLS0tLW5ldyBwcm9qZWN0IGFkZCBzaWRlIGJhciBjc3MtLS0tLS0qL1xyXG5cclxuLmFkZF9uZXdfcHJvamVjdF9zbGlkZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRURFQUU5O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xcmVtIDFyZW0gMC4yNXJlbSByZ2IoMCAwIDAvNSUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vcGVuX3NpZGViYXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdGVwLWxpbmUge1xyXG4gICAgIC8qIGJhY2tncm91bmQ6ICNlMGUwZTA7ICovXHJcbiAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgd2lkdGg6IDM0dnc7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHRvcDogNDVweDtcclxuICAgICB6LWluZGV4OiAxO1xyXG4gICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2RmZGZkZjtcclxufVxyXG4ubmF2LXBpbGxzLmN1c3RvbSBsaSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4ubmF2LWxpbmsuYWN0aXZlLmN1c3RvbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuLm5hdi1saW5rLmN1c3RvbSB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDdweDtcclxuICAgIG1pbi13aWR0aDogOHZ3O1xyXG59XHJcbi5uYXYtbGluay5jdXN0b20gc3Bhbi5pY29uIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHdpZHRoOiA0NnB4O1xyXG4gIGhlaWdodDogNDZweDtcclxuICBtYXJnaW46IDAgYXV0bztib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG59XHJcbi5uYXYtbGluay5jdXN0b20uYWN0aXZlIHNwYW4uaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4ubmF2LWxpbmsuY3VzdG9tIGkge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG4udGFiLWNvbnRlbnQuY3VzdG9tIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi50YWItY29udGVudC5jdXN0b20gLnRhYi1wYW5lIHtcclxuICB3aWR0aDogNjB2dztcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDBweCkge1xyXG4gIC50YWItY29udGVudC5jdXN0b20gLnRhYi1wYW5lIHtcclxuICAgIHdpZHRoOiA2MHZ3O1xyXG4gIH1cclxufVxyXG4ubmF2LWxpbmsuYWN0aXZlLmN1c3RvbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5rdC1wb3J0bGV0IC5rdC1wb3J0bGV0X19ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmt0LXBvcnRsZXRfX2JvZHlfc2Nyb2xse1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEzMHB4KTtcclxuICBtaW4taGVpZ2h0OjUwdmg7O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5zZWN0aW9uLWJvdHRvbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcclxuICBtaW4taGVpZ2h0OiAxOHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzU4NjdkZDQwO1xyXG59XHJcbi5zZWN0aW9uLWJvdHRvbSAuc2VjdGlvbi1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMHJlbTtcclxufVxyXG4uc2VjdGlvbi1ib3R0b20gLnNlY3Rpb24taGVhZGVyIGgzIHtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbi5zZWN0aW9uLWJvdHRvbSAuc2VjdGlvbi1oZWFkZXIgYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMEYwO1xyXG59XHJcbi5zZWN0aW9uLWJvdHRvbSAuc2VjdGlvbi1jYXJkcyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiAxcmVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi8qIC5zZWN0aW9uLWJvdHRvbSAuc2VjdGlvbi1jYXJkcyAuY2FyZDpudGgtb2YtdHlwZSgxKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QjczRjtcclxuICBib3gtc2hhZG93OiAwIDVweCA4cHggI0Y0QjczRjtcclxufVxyXG4uc2VjdGlvbi1ib3R0b20gLnNlY3Rpb24tY2FyZHMgLmNhcmQ6bnRoLW9mLXR5cGUoMikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOTc3NTE7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggOHB4ICNGOTc3NTE7XHJcbn1cclxuLnNlY3Rpb24tYm90dG9tIC5zZWN0aW9uLWNhcmRzIC5jYXJkOm50aC1vZi10eXBlKDMpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjk5NjUxO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDhweCAjRjk5NjUxO1xyXG59ICovXHJcbi5zZWN0aW9uLWJvdHRvbSAuc2VjdGlvbi1jYXJkcyAuY2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgaGVpZ2h0OiAxMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLyogb3BhY2l0eTogLTAuNTsgKi9cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuLnNlY3Rpb24tYm90dG9tIC5zZWN0aW9uLWNhcmRzIC5jYXJkIGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5zZWN0aW9uLWJvdHRvbSAuc2VjdGlvbi1jYXJkcyAuY2FyZCBkaXYgaDEge1xyXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLnNlY3Rpb24tYm90dG9tIC5zZWN0aW9uLWNhcmRzIC5jYXJkIGRpdiBpIHtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG4uc2VjdGlvbi1ib3R0b20gLnNlY3Rpb24tY2FyZHMgLmNhcmQgcCB7XHJcbiAgbWFyZ2luLXRvcDogLTAuOHJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG4ua3QtY2QtdGx2IHtcclxuICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ua3QtY2QtdGx2IHAge1xyXG4gIGNvbG9yOiAjNjc2ZjljO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5jYXJkIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7ICAgIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jYXJkOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2IoMCAwIDAgLyAyMiUpO1xyXG59XHJcbi5jYXJkLmFjdGl2ZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2FiY2RmZjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRmMGZmO1xyXG59XHJcbi5rdC1jdHYtYnRuIHtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG4ubXktY3Qtdi1idG4ge1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDFweDtcclxufVxyXG5cclxuLmNhcmQuYWN0aXZlOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtOXB4O1xyXG4gIHJpZ2h0OiAtOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcGM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2FiY2RmZjtcclxufVxyXG4uY2FyZC5hY3RpdmU6OmJlZm9yZSB7XHJcbiAgYm9yZGVyOiBzb2xpZCAjNjFhOGZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIGJvcmRlci13aWR0aDogMCAwIDJweCAycHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDhweDtcclxuICB3aWR0aDogMThweDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIG1hcmdpbjogMTdweCAwIDAgMTRweDtcclxuICByaWdodDogMnB4O1xyXG4gIHRvcDogLTEycHg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4ua3QtZGVzYy10ZXh0YXJlYSB7XHJcbiAgbWluLWhlaWdodDogMTA0cHg7XHJcbn1cclxuXHJcbi5rdC1jdHYtYnRuLXR3byB7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuLm15LWN0LXYtYnRuLWJhY2sge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWYgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICNlZmVmZWYgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzZiNmI2YiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtcGlsbHMgLm5hdi1pdGVtIC5uYXYtbGluazphY3RpdmUsIC5uYXYtcGlsbHMgLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUsIC5uYXYtcGlsbHMgLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6dW5zZXQ7IFxyXG4gIGNvbG9yOiB1bnNldDsgXHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS1maWxlIHVwbG9hZGUgLS0tLS0tLS0tLS0qL1xyXG4uZm9ybWJvbGQtbWItNSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZm9ybWJvbGQtcHQtMyB7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbn1cclxuLmZvcm1ib2xkLW1haW4td3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDQ4cHg7XHJcbn1cclxuXHJcbi5mb3JtYm9sZC1mb3JtLXdyYXBwZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogNTUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLmZvcm1ib2xkLWZvcm0tbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMDcwNzRkO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuLmZvcm1ib2xkLWZvcm0tbGFiZWwtMiB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvcm1ib2xkLWZvcm0taW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjRweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzZiNzI4MDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHJlc2l6ZTogbm9uZTtcclxufVxyXG4uZm9ybWJvbGQtZm9ybS1pbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNmE2NGYxO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxuXHJcbi5mb3JtYm9sZC1idG4ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmc6IDE0cHggMzJweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmE2NGYxO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZvcm1ib2xkLWJ0bjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG5cclxuLmZvcm1ib2xkLS1teC0zIHtcclxuICBtYXJnaW4tbGVmdDogLTEycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcclxufVxyXG4uZm9ybWJvbGQtcHgtMyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbn1cclxuLmZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmZsZXgtd3JhcCB7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi53LWZ1bGwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybWJvbGQtZmlsZS1pbnB1dCBpbnB1dCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybWJvbGQtZmlsZS1pbnB1dCBsYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZTBlMGUwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5mb3JtYm9sZC1kcm9wLWZpbGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICM5ZjlmOWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5mb3JtYm9sZC1vciB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjYjFiMWIxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5mb3JtYm9sZC1icm93c2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzk1OTU5NTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDhweCAyOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybWJvbGQtZmlsZS1saXN0IHtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYjtcclxuICBwYWRkaW5nOiAxNnB4IDE2cHg7XHJcbn1cclxuLmZvcm1ib2xkLW1iLTUuZm9ybWJvbGQtZmlsZS1pbnB1dCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmZvcm1ib2xkLWZpbGUtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmZvcm1ib2xkLWZpbGUtaXRlbSBidXR0b24ge1xyXG4gIGNvbG9yOiAjMDcwNzRkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtYm9sZC1maWxlLW5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNTg2N2RkO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbn1cclxuLmZvcm1ib2xkLXByb2dyZXNzLWJhciB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlMmU1ZWY7XHJcbn1cclxuXHJcbi5mb3JtYm9sZC1wcm9ncmVzcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQ6ICM2YTY0ZjE7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTQwcHgpIHtcclxuICAuc21cXDp3LWhhbGYge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuLmJ0bi5idG4taWNvbiBzdmc6aG92ZXIge1xyXG4gIGZpbGw6ICM3MzczNzM7XHJcbn1cclxuXHJcbi8qLS0tcHJvamVjdCBzaGFydCBkYXRhIHZpZXcgLS0tLS0tLS0tKi9cclxuLmNhcmR7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0YxRjFGMjtcclxuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxufVxyXG4uY2FyZC5jYXJkLWJvZHl7XHJcbiAgcGFkZGluZzogMnJlbSAyLjI1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1icy1jYXJkLWNvbG9yKTtcclxufS5kLWZsZXh7XHJcbiAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcbn0uZmxleC13cmFwe1xyXG4gIGZsZXgtd3JhcDogd3JhcCFpbXBvcnRhbnQ7XHJcbn0ucm91bmRlZHtcclxuICBib3JkZXItcmFkaXVzOiAwLjQ3NXJlbSFpbXBvcnRhbnQ7XHJcbn0udy1sZy0xNTBweHtcclxuICB3aWR0aDogNTBweCFpbXBvcnRhbnQ7XHJcbn0uaC1sZy0xNTBweHtcclxuICBoZWlnaHQ6IDYzcHghaW1wb3J0YW50O1xyXG59LmJnLWxpZ2h0e1xyXG4gIC0tYnMtYmctcmdiLWNvbG9yOiAyNDksMjQ5LDI0OTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1IWltcG9ydGFudDtcclxufS5mbGV4LWNlbnRlcntcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59LmZsZXgtZ3Jvdy0xe1xyXG4gIGZsZXgtZ3JvdzogMSFpbXBvcnRhbnQ7XHJcbn0uZmxleC13cmFwe1xyXG4gIGZsZXgtd3JhcDogd3JhcCFpbXBvcnRhbnQ7XHJcbn0uanVzdGlmeS1jb250ZW50LWJldHdlZW57XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIWltcG9ydGFudDtcclxufS5hbGlnbi1pdGVtcy1zdGFydHtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCFpbXBvcnRhbnQ7XHJcbn0uZmxleC1jb2x1bW57XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiFpbXBvcnRhbnQ7XHJcbn1cclxuLmJvcmRlci1ncmF5LTMwMCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGJkZmU5IWltcG9ydGFudDtcclxufS5ib3JkZXItZGFzaGVkIHtcclxuICBib3JkZXItc3R5bGU6IGRhc2hlZCFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGJkZmU5O1xyXG59LmJvcmRlci1kYXNoZWQge1xyXG4gIGJvcmRlci1zdHlsZTogZGFzaGVkIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICNkYmRmZTk7XHJcbn0ucHgtNCB7XHJcbiAgcGFkZGluZy1yaWdodDogMC41cmVtIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSFpbXBvcnRhbnQ7XHJcbn0ucHktMyB7XHJcbiAgcGFkZGluZy10b3A6IDAuNXJlbSFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbSFpbXBvcnRhbnQ7XHJcbn0ubWluLXctMTI1cHgge1xyXG4gIG1pbi13aWR0aDogMTI1cHghaW1wb3J0YW50O1xyXG59LmZ3LXN0bCB7XHJcbiAgY29sb3I6ICM0ZDVhYTE7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufS5mcy03IHtcclxuICBmb250LXNpemU6IC45NXJlbSFpbXBvcnRhbnQ7XHJcbn0uZnctc2VtaS1sdCB7XHJcbiAgY29sb3I6ICM4ZjhmOGY7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59LmZzLTgge1xyXG4gIGZvbnQtc2l6ZTogLjg1cmVtIWltcG9ydGFudDtcclxufVxyXG4ubXctbGctNzVweHtcclxuICBtYXgtd2lkdGg6IDM1cHghaW1wb3J0YW50O1xyXG59XHJcbi5tZS0yIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLm15LWNyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAyMHB4ICM1ODY3ZGQzODtcclxufVxyXG4ua3Qtc3ViLWJveC12ZXcgLm1iLTEgLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG4ubXktc3ViLXRhc2stdGl0dGxlIGg1IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogIzY4NmM4YjtcclxuICBwYWRkaW5nOiA0cHggMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5idXR0b24uYnRuLmJ0bi1zbS5idG4tYmctbGlnaHQuQ2xyLWFjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMjtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLkt0LWFjdC1idG5iIHtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgcGFkZGluZy1yaWdodDogM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmt0LWFjdC1ubyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWYzZmY7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogIzI3ODZmYjtcclxufVxyXG4ua3QtYWN0LW5vIHNwYW4ge1xyXG4gIGNvbG9yOiAjODE4MDgwO1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xyXG59XHJcbi5rdC1hY3Qtbm8gcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5rdC1hY3QtdHRsLXYgaDYge1xyXG4gIGNvbG9yOiAjNmM3OWUxO1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmt0LWFjdC10dGwtdiBwIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgY29sb3I6ICNhM2EzYTM7XHJcbn1cclxuXHJcbi5rdC1hY3QtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmt0LWFjdC1idG5zIHtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcbi5rdC1kbC1pY29uLmRiLXYge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmt0LWRsLWljb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLmt0LWRsLWljb246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmt0LWFjdC1jYXJkIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAyMHB4ICNjY2NjY2M3ODtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuc3Bhbi5rdC1hY3Qtc3ZnLWljIHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1hcmdpbjogMHBjIDRweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbn1cclxuc3Bhbi5rdC1hY3Qtc3ZnLWljIHN2ZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTIuM3B4O1xyXG59XHJcbi5rdC12aS1hY3QtZHRsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmt0LXN1Yi1ib3gtdmV3IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDIwcHggIzU4NjdkZDM4O1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4ua3QtcG9ydGxldF9fZm9vdCB7XHJcbiAgcGFkZGluZzogMHJlbSAycmVtO1xyXG59XHJcbi5rdC1wb3J0bGV0X19mb290IHtcclxuICBib3gtc2hhZG93OiAwcHggLTVweCA2cHggI2NjY2NjY2ExO1xyXG59XHJcbi5hZGRfbmV3X3Byb2plY3Rfc2xpZGUgLmt0LXBvcnRsZXRfX2JvZHlfc2Nyb2xse1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xyXG4gIG1pbi1oZWlnaHQ6NTB2aDs7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4uYWRkLXZoZC1oe1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDExN3B4KSAhaW1wb3J0YW50O1xyXG59XHJcbi8qLS0tLS0tdG8gc2hvdyB0ZWFtIG1lbWJlcnMgLS0tLS0tLS0tLSovXHJcbi5zeW1ib2wtZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnN5bWJvbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjQ3NXJlbTtcclxufVxyXG4uZmxleC1ub3dyYXAge1xyXG4gIGZsZXgtd3JhcDogbm93cmFwIWltcG9ydGFudDtcclxufS5zeW1ib2wtZ3JvdXAuc3ltYm9sLWhvdmVyIC5zeW1ib2wge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufS5zeW1ib2wtZ3JvdXAgLnN5bWJvbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxufS5zeW1ib2wuc3ltYm9sLWNpcmNsZSwgLnN5bWJvbC5zeW1ib2wtY2lyY2xlIC5zeW1ib2wtbGFiZWwsIC5zeW1ib2wuc3ltYm9sLWNpcmNsZT5pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uc3ltYm9sIC5zeW1ib2wtbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMjUyZjRhO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC40NzVyZW07XHJcbn0udGV4dC1pbnZlcnNlLXdhcm5pbmcge1xyXG4gIGNvbG9yOiAjZmZmZmZmIWltcG9ydGFudDtcclxufS5iZy13YXJuaW5nIHtcclxuICAtLWJzLWJnLXJnYi1jb2xvcjogcmdiYSgyNTUsMTk5LDApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmM3MDAhaW1wb3J0YW50O1xyXG59XHJcbi5mdy1ib2xkIHtcclxuICBmb250LXdlaWdodDogNjAwIWltcG9ydGFudDtcclxufVxyXG4uc3ltYm9sIC5zeW1ib2wtbGFiZWwge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn0uc3ltYm9sLWdyb3VwIC5zeW1ib2wtbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufS5zeW1ib2wuc3ltYm9sLTM1cHggLnN5bWJvbC1sYWJlbCB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG59LnN5bWJvbC1ncm91cC5zeW1ib2wtaG92ZXIgLnN5bWJvbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59LnN5bWJvbCAuc3ltYm9sLWxhYmVsOmFmdGVyIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjQ3NXJlbTtcclxufS5zeW1ib2wtZ3JvdXAgLnN5bWJvbC1sYWJlbDphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbn1cclxuLmJnLXByaW1hcnkge1xyXG4gIC0tYnMtYmctcmdiLWNvbG9yOiByZ2JhKDYyLDE1MSwyNTUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTk3ZmYhaW1wb3J0YW50O1xyXG59LnRleHQtaW52ZXJzZS1wcmltYXJ5IHtcclxuICBjb2xvcjogI2ZmZmZmZiFpbXBvcnRhbnQ7XHJcbn1cclxuLnN5bWJvbC5zeW1ib2wtMzVweD5pbWcge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLnRleHQtaW52ZXJzZS1kYW5nZXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1ncmF5LTMwMCB7XHJcbiAgY29sb3I6ICNkYmRmZTkhaW1wb3J0YW50O1xyXG59XHJcbmxhYmVsLm15LWNob3NzZS1mbHYge1xyXG4gIG1pbi1oZWlnaHQ6IDU1cHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm15LWNob3NzZS1mbHYgLmZvcm1ib2xkLWRyb3AtZmlsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzcxNzE3MTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnJpZ2h0LXNpZGUtYWN0IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2Q5ZDlkOTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTdweCk7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmt0LWFjdGlvbi1saXN0IHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcbi5BY3QtdGl0dGxlLVJpZ2h0IGgzIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufS5BY3QtdGl0dGxlLVJpZ2h0IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XHJcbn1cclxuLmt0LXJpZ2h0LXN0eWxlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZDlkOWQ5O1xyXG59XHJcbi5zbS1idG4tc3VibWl0IHtcclxuICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxOTZmMyAhaW1wb3J0YW50O1xyXG59XHJcbi5zbS1idG4tY2xvc2V7XHJcbiAgbWluLXdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5WV182MHtcclxuICB3aWR0aDogNjB2dzs7XHJcbn1cclxuLmFjdC1iZC1ib3gge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1sYWJlbC5jaGVja2JveC5rdC1mbnQtdmQgaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxcHg7XHJcbiAgLyogaGVpZ2h0OiAxMnB4OyAqL1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbmxhYmVsLmNoZWNrYm94Lmt0LWZudC12ZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjNmU3NDk3O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAyNTAwcHgpe1xyXG4gIC50YWItY29udGVudC5jdXN0b20gLnRhYi1wYW5lIHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG59XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KXtcclxuICAgIC50YWItY29udGVudC5jdXN0b20gLnRhYi1wYW5lIHtcclxuICAgICAgd2lkdGg6IDYwdnc7XHJcbiAgfVxyXG4gICAgfVxyXG4gICAgXHJcbi5sLXJhZGlvIHtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5sLXJhZGlvOmhvdmVyLCAubC1yYWRpbzpmb2N1cy13aXRoaW4ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTU5LCAxNTksIDE1OSwgMC4xKTtcclxufVxyXG4ubC1yYWRpbyBpbnB1dCB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzlGOUY5RjtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxLjVweCAjOUY5RjlGO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBjdWJpYy1iZXppZXIoMC45NSwgMC4xNSwgMC41LCAxLjI1KTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4ubC1yYWRpbyBpbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ubC1yYWRpbyBpbnB1dDpjaGVja2VkIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA2cHggIzY3NDNlZTtcclxufVxyXG4ubC1yYWRpbyBzcGFuIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBwYWRkaW5nOiAwIDhweDtcclxufVxyXG5cclxuICAgIC8qPT09PT09PT09IHByb2plY3QgaW5mbyBzaWRlIGJhciBjc3MgPT09PT09PT09PSovXHJcbiAgICAucHJvamVjdC1pbmZvLXNpZGUtYmFyIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0VERUFFOTtcclxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAuMXJlbSAxcmVtIDAuMjVyZW0gcmdiKDAgMCAwLzUlKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAub3Blbl9zaWRlYmFyX2luZm8ge1xyXG4gICAgd2lkdGg6IDU1JSAhaW1wb3J0YW50O1xyXG59XHJcbi5rdC1pbmZvLWJvZHkge1xyXG4gIG1hcmdpbjogMS4zcmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNHZoKTtcclxufVxyXG4ua3QtdGl0bGUtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyN2NlMjtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5rdC1pbmZvLWJveC10aXR0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICM2Mzg4ZTM7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbn1cclxuLmt0LXByb2plY3QtdHlwZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5LdC1QZC1TdGF0dXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAwcHggMTBweDtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDZweCAxM3B4OyBcclxuICAgICBtYXgtd2lkdGg6IDE0MHB4O1xyXG4gIG1pbi13aWR0aDogMTMwcHg7XHJcbn1cclxuLkNvcmVfdGFzayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzQzYTtcclxufVxyXG4ua3QtcHJvamVjdC1uYW1lIGg0IHtcclxuICBjb2xvcjogIzE4MTgxODtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5rdC1wcm9qZWN0LWRlc2MgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmt0LXByb2plY3QtZGVzYyB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5rdC1pbmZvLWJveCB7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xyXG59XHJcbi5Nb3JlX2luZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTc0ZmUgIWltcG9ydGFudDtcclxufVxyXG4ua3QtaW5mby1sYWJsZS12IHtcclxuICBjb2xvcjogIzkzOTM5MztcclxuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5rdC1pbmZvLWRhdGEtdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gIHBhZGRpbmc6IDVweCA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzRmNGY0ZjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5rdC1jbGllbnQtaWNvbiBpbWcge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuLmt0LWNsaWVudC1pY29uIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5iZy1saWdodC1zaGFkZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZjJmZCAhaW1wb3J0YW50O1xyXG59XHJcbi5EZWxheXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRWQ2MjA3ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmt0LXByb2plY3Qtc3RzLWRhdGEge1xyXG4gIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgY29sb3I6ICMzYjNiM2I7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnByb2dyZXNzLmt0LXByb2pjZWN0LXByb2dyZXNzLmJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuLmJnLWlucHJvZ3Jlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XHJcbn1cclxuLmJnLWRlbGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRWQ2MjA3O1xyXG59XHJcbi5iZy1kb25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFhZDNhO1xyXG59XHJcbi5rdC1wcmctYmFyLWluZm8ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjM2QzZDNkO1xyXG59XHJcbi5rdC1wcmctYmFyLWluZm8gYiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5rdC10b3RhbC1wcmctdmwgYiB7XHJcbiAgZm9udC1zaXplOiAyMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLkRlYWRsaW5lX0V4dGVuZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ4MzgzO1xyXG59XHJcbmJ1dHRvbi5LdC1BcHByb3ZhbC1idG5zIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogIzRmNGY0ZjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59LkJ0bl9BY2NwZXQge1xyXG4gIGJvcmRlci1jb2xvcjogIzhhYjk5MSAhaW1wb3J0YW50O1xyXG59XHJcbi5CdG5fRWRpdF9BY2NlcHQge1xyXG4gIGJvcmRlci1jb2xvcjogIzdjYWNjZCAhaW1wb3J0YW50O1xyXG59XHJcbi5CdG5fQ29uZGl0aW9uYWxfQWNjZXB0IHtcclxuICBib3JkZXItY29sb3I6ICM0MDdmNGMgIWltcG9ydGFudDtcclxufVxyXG4uQnRuX1JlamVjdCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2Y4ZTY2ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmt0LWFwcHJvdmFsLW1zZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtaW4taGVpZ2h0OiA4NXB4O1xyXG59XHJcbi50ZXh0LWVuZCB7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcbi5idG4tcHJvamVjdC1zdHYge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcbi5CdC1TdWJtaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4Nzg3ODc7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG4ua3QtaW5mby1wZy1mb290ZXIge1xyXG4gIG1hcmdpbjogNXB4IDEwcHg7XHJcbn1cclxuXHJcblxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxODAwcHgpIGFuZCAobWF4LXdpZHRoOiAyNTAwcHgpICB7XHJcbiAgLm9wZW5fc2lkZWJhcl9pbmZvIHtcclxuICAgIHdpZHRoOiA0MCUgIWltcG9ydGFudDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzODVweCkgYW5kIChtYXgtd2lkdGg6IDE4MDBweCkgIHtcclxuICAub3Blbl9zaWRlYmFyX2luZm8ge1xyXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTM4NXB4KSAge1xyXG4gIC5vcGVuX3NpZGViYXJfaW5mbyB7XHJcbiAgICB3aWR0aDogNTUlICFpbXBvcnRhbnQ7XHJcbn1cclxufVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpe1xyXG4gICAgLm9wZW5fc2lkZWJhcl9pbmZvIHtcclxuICAgICAgd2lkdGg6IDU4JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAgIH1cclxuICAvKj09PT09PT09PSBwcm9qZWN0IGluZm8gc2lkZSBiYXIgY3NzIGVuZD09PT09PT09PSovXHJcblxyXG4gIC5idG46Zm9jdXMsIC5idG4uZm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG50ci5vZGQucHJvamVjdC1saXN0X0FDLmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3N2ZmO1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG50ci5vZGQucHJvamVjdC1saXN0X0FDLmFjdGl2ZSAqIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"] });


/***/ }),

/***/ 67848:
/*!*********************************************************************!*\
  !*** ./src/app/_LayoutDashboard/projects-summary/sort.directive.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortDirective": () => (/* binding */ SortDirective)
/* harmony export */ });
/* harmony import */ var src_app_Directive_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Directive/sort */ 84956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



//import { Directive } from '@angular/core';
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

/***/ 62424:
/*!*****************************************!*\
  !*** ./src/app/_Models/approval-dto.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalDTO": () => (/* binding */ ApprovalDTO)
/* harmony export */ });
class ApprovalDTO {
}


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

/***/ 18810:
/*!************************************************!*\
  !*** ./src/app/_Services/approvals.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalsService": () => (/* binding */ ApprovalsService)
/* harmony export */ });
/* harmony import */ var _Models_approval_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_Models/approval-dto */ 62424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _apiurl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiurl.service */ 77983);




class ApprovalsService {
    constructor(http, commonUrl) {
        this.http = http;
        this.commonUrl = commonUrl;
        this.rootUrl = this.commonUrl.apiurl;
        this.obj_approvalDTO = new _Models_approval_dto__WEBPACK_IMPORTED_MODULE_0__.ApprovalDTO();
    }
    GetApprovalStatus(obj) {
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.standardid = obj.standardid;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewGetApprovalStatus", this.obj_approvalDTO);
    }
    GetProjectApproval(pcode) {
        this.obj_approvalDTO.Project_Code = pcode;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewGetProjectApprovals", this.obj_approvalDTO);
    }
    GetAppovalandActionDetails(obj) {
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewGetAppovalandActionDetails", this.obj_approvalDTO);
    }
    GetGlobalRejectList(pcode) {
        this.obj_approvalDTO.Project_Code = "";
        return this.http.post(this.rootUrl + "ApprovalAPI/NewGetGlobalRejectList", this.obj_approvalDTO);
    }
    GetHoldDate(obj) {
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewGetHoldDate", this.obj_approvalDTO);
    }
    GetRejecttype(obj) {
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewGetRejectType", this.obj_approvalDTO);
    }
    UpdateReleaseDate(obj) {
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.hold_date = obj.hold_date;
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewUpdateReleasedate", this.obj_approvalDTO);
    }
    NewResponseService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Request_Date = obj.Request_Date;
        this.obj_approvalDTO.Request_type = obj.Request_type;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewResponseServiceforApprovals", this.obj_approvalDTO);
    }
    NewMultiResponseService(obj) {
        this.obj_approvalDTO.responselist = obj.responselist;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewMultiResponseforApprovals", this.obj_approvalDTO);
    }
    NewUpdateAcceptApprovalsService(obj) {
        return this.http.post(this.rootUrl + "ApprovalAPI/UpdateAcceptApprovals", obj);
    }
    NewUpdateRejectApprovalsService(obj) {
        return this.http.post(this.rootUrl + "ApprovalAPI/UpdateRejectApprovals", obj);
    }
    NewUpdateSingleAcceptApprovalsService(obj) {
        return this.http.post(this.rootUrl + "ApprovalAPI/UpdateSingleAcceptApproval", obj);
    }
    NewUpdateSingleRejectApprovalsService(obj) {
        return this.http.post(this.rootUrl + "ApprovalAPI/UpdateSingleRejectApprovals", obj);
    }
    GetRejectComments(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.rejectType = obj.rejectType;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Status = obj.Status;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewGetRejectCommentsbyRejectType", this.obj_approvalDTO);
    }
    GetGlobalRejectComments(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.rejectType = obj.rejectType;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Status = obj.Status;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewGetGlobalRejectComments", this.obj_approvalDTO);
    }
    InsertAcceptApprovalService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Request_type = obj.Request_type;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertAcceptApprovalService", this.obj_approvalDTO);
    }
    InsertUpdateProjectCancelReleaseService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Request_type = obj.Request_type;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertUpdateProjectCancelRelease", this.obj_approvalDTO);
    }
    InsertTransferApprovalService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Responsible = obj.Responsible;
        this.obj_approvalDTO.deadline = obj.deadline;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertTransferApprovalService", this.obj_approvalDTO);
    }
    InsertProjectTransfer(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Responsible = obj.Responsible;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertProjectTransfer", this.obj_approvalDTO);
    }
    InsertForwardApprovalService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Responsible = obj.Responsible;
        this.obj_approvalDTO.deadline = obj.deadline;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertForwardApprovalService", this.obj_approvalDTO);
    }
    InsertRevertApprovalService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Responsible = obj.Responsible;
        this.obj_approvalDTO.deadline = obj.deadline;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertRevertApprovalService", this.obj_approvalDTO);
    }
    InsertConditionalAcceptApprovalService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Request_type = obj.Request_type;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertConditionalAcceptApprovalService", this.obj_approvalDTO);
    }
    InsertRejectApprovalService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Request_type = obj.Request_type;
        this.obj_approvalDTO.rejectType = obj.rejectType;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertRejectApprovalsService", this.obj_approvalDTO);
    }
    InsertStandardApprovalService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Request_Date = obj.Request_Date;
        this.obj_approvalDTO.Request_type = obj.Request_type;
        this.obj_approvalDTO.rejectType = obj.rejectType;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        this.obj_approvalDTO.approvaltype = obj.approvaltype;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertStandardApprovals", this.obj_approvalDTO);
    }
}
ApprovalsService.ɵfac = function ApprovalsService_Factory(t) { return new (t || ApprovalsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_apiurl_service__WEBPACK_IMPORTED_MODULE_1__.ApiurlService)); };
ApprovalsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApprovalsService, factory: ApprovalsService.ɵfac, providedIn: 'root' });


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
//# sourceMappingURL=880.js.map