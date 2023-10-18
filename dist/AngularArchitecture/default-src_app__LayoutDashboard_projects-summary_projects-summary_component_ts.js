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
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _sort_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sort.directive */ 67848);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var src_app_Shared_DateAgo_DateAgoPipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/Shared/DateAgo/DateAgoPipe */ 81802);




//import { LoadingBarService } from '@ngx-loading-bar/core';

















function ProjectsSummaryComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r0.CurrentPageNo, " - ", ctx_r0._CurrentpageRecords, " ");
} }
function ProjectsSummaryComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r1._CurrentpageRecords * (ctx_r1.CurrentPageNo - 1) + 1, " - ", ctx_r1._CurrentpageRecords * ctx_r1.CurrentPageNo, " ");
} }
function ProjectsSummaryComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r2.lastPagerecords * (ctx_r2.CurrentPageNo - 1) + 1, " - ", ctx_r2.lastPagerecords * (ctx_r2.CurrentPageNo - 1) + ctx_r2._CurrentpageRecords, " ");
} }
function ProjectsSummaryComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r3._totalProjectsCount.toLocaleString(), "");
} }
function ProjectsSummaryComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r4._totalProjectsCount, "");
} }
function ProjectsSummaryComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 145)(1, "label", 480)(2, "input", 481);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function ProjectsSummaryComponent_div_72_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16); const item_r13 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r15.isTypeChecked(item_r13)); })("ngModelChange", function ProjectsSummaryComponent_div_72_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16); const item_r13 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](item_r13.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span", 482);
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
function ProjectsSummaryComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 145)(1, "label", 483)(2, "input", 484);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function ProjectsSummaryComponent_div_79_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r20); const item_r18 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r19.isStatusChecked(item_r18)); })("ngModelChange", function ProjectsSummaryComponent_div_79_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r20); const item_r18 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](item_r18.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span", 482);
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
function ProjectsSummaryComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 145)(1, "label", 483)(2, "input", 485);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectsSummaryComponent_div_81_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r22.isChecked = $event); })("click", function ProjectsSummaryComponent_div_81_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r24.onCheckboxClick(ctx_r24.Type)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span", 482);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r7.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r7.cancelcount);
} }
function ProjectsSummaryComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 145)(1, "label", 483)(2, "input", 484);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function ProjectsSummaryComponent_div_87_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27); const item_r25 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r26.isEmpChecked(item_r25)); })("ngModelChange", function ProjectsSummaryComponent_div_87_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27); const item_r25 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](item_r25.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span", 482);
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
function ProjectsSummaryComponent_span_279_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("About (", ctx_r9._CurrentpageRecords, ") results found");
} }
function ProjectsSummaryComponent_tr_314_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "a", 509);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_tr_314_div_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r73); const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r71._OpenMemosInfo(item_r29.Project_Code, item_r29.Project_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "img", 510);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 511);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function ProjectsSummaryComponent_tr_314_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 512);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Actioncount);
} }
function ProjectsSummaryComponent_tr_314_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 494);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "No category");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 494);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.ReportType);
} }
function ProjectsSummaryComponent_tr_314_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 513);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.SubmissionType1);
} }
function ProjectsSummaryComponent_tr_314_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 513);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](2, 1, item_r29.DeadLine, "dd-MM-yyyy"), "");
} }
function ProjectsSummaryComponent_tr_314_a_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 514)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Owner:", item_r29.Project_Owner, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Owner);
} }
function ProjectsSummaryComponent_tr_314_a_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 514)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Owner & Support: ", item_r29.Project_Owner, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Owner);
} }
function ProjectsSummaryComponent_tr_314_a_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 514)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Responsible: ", item_r29.Team_Res, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Resp);
} }
function ProjectsSummaryComponent_tr_314_a_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 514)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Authority: ", item_r29.Team_Autho, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Autho);
} }
function ProjectsSummaryComponent_tr_314_a_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 514)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Responsible & Authority: ", item_r29.Team_Autho, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Autho);
} }
function ProjectsSummaryComponent_tr_314_a_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 514)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Support: ", item_r29.Team_Support, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r29.Support);
} }
function ProjectsSummaryComponent_tr_314_a_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 515)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "1+");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Coordinator & Informer: ", item_r29.Team_Coor, " ");
} }
function ProjectsSummaryComponent_tr_314_a_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 515)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "1+");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate2"]("title", "Coordinator: ", item_r29.Team_Coor, " & Informer: ", item_r29.Team_Informer, " ");
} }
function ProjectsSummaryComponent_tr_314_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 516);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_50_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 519)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r29.Delaydays, " days");
} }
function ProjectsSummaryComponent_tr_314_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 517);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Delay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ProjectsSummaryComponent_tr_314_div_50_span_3_Template, 3, 1, "span", 518);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r29.Delaydays > 0);
} }
function ProjectsSummaryComponent_tr_314_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 520);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 521);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "ToDo InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 521);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 517);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 517);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 521);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "ToDo Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 521);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "New Todo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 521);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Completion Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 522);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Cancellation Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 522);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Cancelled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 523);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 520);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Forward Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 517);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Project Complete Rejected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 517);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Enactive Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 517);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Version ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 516);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Deadline Extend Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 524);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Hold ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 524);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Project Hold Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 516);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "ToDo Achieved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 517);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Standardtask Enactive Hold ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_314_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr", 486)(1, "td", 487)(2, "a", 11)(3, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_tr_314_Template_i_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r90); const item_r29 = restoredCtx.$implicit; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r89.openInfo(item_r29.Project_Code, item_r29.Project_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "a", 488)(5, "i", 489);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_tr_314_Template_i_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r90); const item_r29 = restoredCtx.$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r91.moreDetails(item_r29.Project_Code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, ProjectsSummaryComponent_tr_314_div_7_Template, 3, 0, "div", 490);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, ProjectsSummaryComponent_tr_314_ng_template_8_Template, 2, 0, "ng-template", null, 491, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "td")(11, "p", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, ProjectsSummaryComponent_tr_314_span_13_Template, 2, 1, "span", 493);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "td")(15, "span", 494);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, ProjectsSummaryComponent_tr_314_div_18_Template, 3, 0, "div", 490);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, ProjectsSummaryComponent_tr_314_ng_template_19_Template, 2, 1, "ng-template", null, 495, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "td")(22, "span", 494);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, ProjectsSummaryComponent_tr_314_div_25_Template, 3, 1, "div", 490);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](26, ProjectsSummaryComponent_tr_314_ng_template_26_Template, 3, 4, "ng-template", null, 496, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "td", 497);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "span", 498);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](32, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "td", 499)(34, "div", 500)(35, "div", 501)(36, "div", 502);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](37, ProjectsSummaryComponent_tr_314_a_37_Template, 3, 2, "a", 503);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](38, ProjectsSummaryComponent_tr_314_a_38_Template, 3, 2, "a", 503);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](39, ProjectsSummaryComponent_tr_314_a_39_Template, 3, 2, "a", 503);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](40, ProjectsSummaryComponent_tr_314_a_40_Template, 3, 2, "a", 503);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](41, ProjectsSummaryComponent_tr_314_a_41_Template, 3, 2, "a", 503);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](42, ProjectsSummaryComponent_tr_314_a_42_Template, 3, 2, "a", 503);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](43, ProjectsSummaryComponent_tr_314_a_43_Template, 3, 1, "a", 504);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](44, ProjectsSummaryComponent_tr_314_a_44_Template, 3, 2, "a", 504);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "span", 505);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "svg", 506);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](47, "path", 507);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "td", 508);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](49, ProjectsSummaryComponent_tr_314_div_49_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](50, ProjectsSummaryComponent_tr_314_div_50_Template, 4, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](51, ProjectsSummaryComponent_tr_314_div_51_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](52, ProjectsSummaryComponent_tr_314_div_52_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](53, ProjectsSummaryComponent_tr_314_div_53_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](54, ProjectsSummaryComponent_tr_314_div_54_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](55, ProjectsSummaryComponent_tr_314_div_55_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](56, ProjectsSummaryComponent_tr_314_div_56_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](57, ProjectsSummaryComponent_tr_314_div_57_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](58, ProjectsSummaryComponent_tr_314_div_58_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](59, ProjectsSummaryComponent_tr_314_div_59_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](60, ProjectsSummaryComponent_tr_314_div_60_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](61, ProjectsSummaryComponent_tr_314_div_61_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](62, ProjectsSummaryComponent_tr_314_div_62_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](63, ProjectsSummaryComponent_tr_314_div_63_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](64, ProjectsSummaryComponent_tr_314_div_64_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](65, ProjectsSummaryComponent_tr_314_div_65_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](66, ProjectsSummaryComponent_tr_314_div_66_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](67, ProjectsSummaryComponent_tr_314_div_67_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](68, ProjectsSummaryComponent_tr_314_div_68_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](69, ProjectsSummaryComponent_tr_314_div_69_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](70, ProjectsSummaryComponent_tr_314_div_70_Template, 3, 0, "div", 24);
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
function ProjectsSummaryComponent_div_315_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 525)(1, "h4");
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
function ProjectsSummaryComponent_div_331_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 527);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r92.Subject, " ");
} }
function ProjectsSummaryComponent_div_331_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "i", 528);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
} if (rf & 2) {
    const item_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r92.Subject, " ");
} }
function ProjectsSummaryComponent_div_331_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 125)(1, "div", 126)(2, "h5", 509);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_div_331_Template_h5_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r100); const item_r92 = restoredCtx.$implicit; const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r99.openUrl(item_r92.Url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ProjectsSummaryComponent_div_331_div_3_Template, 3, 1, "div", 490);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ProjectsSummaryComponent_div_331_ng_template_4_Template, 2, 1, "ng-template", null, 526, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
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
        document.getElementById("mysideInfobar").classList.add("kt-quick-panel--on");
        this.router.navigate(["../backend/ProjectsSummary/projectinfo", pcode, "1"]);
        document.getElementById("rightbar-overlay").style.display = "block";
        // document.getElementById("sumdet").classList.add("position-fixed");
        document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    }
    OpenProject() {
        document.getElementById("New_project_Add").classList.add("open_sidebar");
        document.getElementById("rightbar-overlay").style.display = "block";
        document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    }
    closeInfo() {
        this.Clear_Feilds();
        document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
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
    close_info_Slide() {
        $('#Project_info_slider_bar').removeClass('open_sidebar_info');
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
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
ProjectsSummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: ProjectsSummaryComponent, selectors: [["app-projects-summary"]], decls: 1341, vars: 44, consts: [["id", "sumdet", 1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height", "side_view"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi", "mb-2"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "dropdown"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "kt-portlet__head-title", "cursor-pointer", "dropdown-toggle", "select-box"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "main-d"], [3, "ngClass", "click"], [1, "kt-portlet__head-label", "mr-2"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "Project Info!", 1, "btn", "px-0", "mr-2"], [1, "fa", "fa-info-circle", "info-icon-cir", 3, "click"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "mb-0", 3, "click"], [1, "kt-header__topbar-item", "kt-header__topbar-item--search", "mr-3"], [1, "kt-header__topbar-wrapper"], [1, "kt-quick-search", "kt-quick-search--inline"], [1, "kt-quick-search__form"], [1, "input-group"], ["type", "text", "placeholder", "Search Projects", "autofocus", "", 1, "form-control", "project-search", "kt-quick-search__input", "pl-3", 2, "width", "300px", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "input-group-prepend"], ["type", "submit", 1, "input-group-text", 3, "click"], [1, "flaticon2-search-1"], [1, "mr-3"], [4, "ngIf"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "disabled", "click"], [1, "fas", "fa-angle-left", "mr-0"], [1, "fas", "fa-angle-right", "mr-0"], [1, "mr-1"], ["data-toggle", "kt-tooltip", "title", "Click to sort Asc", 1, "btn", "btn-label-primary", "btn-sm", 3, "hidden", "click"], [1, "fa", "fa-sort-alpha-down-alt", "font-16", "mr-0"], ["data-toggle", "kt-tooltip", "title", "Click to sort Desc", 1, "btn", "btn-label-primary", "btn-sm", 3, "hidden", "click"], [1, "fas", "fa-sort-alpha-up", "font-16", "mr-0"], [1, "stores-sec", "mr-1"], [1, "nav", "navbar-nav", "filters"], ["id", "filtermenu", 1, "dropdown", "mega-dropdown"], ["data-toggle", "dropdown", 3, "ngClass"], [1, "fas", "fa-ellipsis-v", "mr-0"], [1, "dropdown-menu", "mega-dropdown-menu"], [3, "click"], [1, "col-md-10"], [1, "d-inline-block"], [1, "col-md-2"], [1, "col-md-12"], ["type", "text", "placeholder", "Search Filters", 1, "form-control", "kt-quick-search__input", "pl-3", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [1, "col-md-4"], [1, "count-height"], ["class", "d-flex justify-content-between", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-between", 4, "ngIf"], ["data-toggle", "dropdown", 1, "btn", "btn-label-success", "btn-outline-success", "btn-upper", "btn-sm", "btn-bold", "mr-2"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-2", 3, "click"], [1, "btn-group", "d-none"], ["data-toggle", "dropdown", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "filter-dot", "mr-1"], ["id", "div_filters", 1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-fit", "dropdown-width-700", "drop-posn", "filts-dr"], [1, "kt-nav"], [1, "kt-nav__head", "d-flex", "justify-content-between"], [1, "kt-nav__separator"], [1, "kt-nav__item", "px-3", "mb-2"], ["autoFocus", "", "type", "search", "autocomplete", "off", "name", "Search", "placeholder", "Search...", 1, "form-control"], [1, "kt-nav__item", "px-4", "pt-2", 3, "click"], [1, "col-lg-4"], [1, "mb-0"], [1, "height-scroll"], [1, "kt-checkbox", "kt-checkbox--info"], ["type", "checkbox", "name", "companychk", "value", ""], [1, "opts-flx"], [1, "selectd-opts"], [1, "slt-div"], [1, "opt-txt"], ["aria-hidden", "true", 1, "removeButton"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "rmv-icn", "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "px-4", "filt-btns"], [1, "btn", "btn-info", "mr-2", "text-white", "btn-xs"], [1, "btn", "btn-outline-info", "btn-xs", "text-dark-75"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fas", "fa-sync-alt", "mr-0"], [1, "ticks-grad", "mb-3", "mt-3", "d-none"], [1, "col-md-3"], [1, "d-flex", "align-items-center"], [1, ""], [1, "example_icon", 2, "opacity", "1", "transform", "none"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "2", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24"], ["d", "M21.0049 3C21.5572 3 22.0049 3.44772 22.0049 4V9.5C20.6242 9.5 19.5049 10.6193 19.5049 12C19.5049 13.3807 20.6242 14.5 22.0049 14.5V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V14.5C3.38559 14.5 4.50488 13.3807 4.50488 12C4.50488 10.6193 3.38559 9.5 2.00488 9.5V4C2.00488 3.44772 2.4526 3 3.00488 3H21.0049ZM20.0049 5H4.00488V7.968L4.16077 8.04908C5.49935 8.78105 6.42516 10.1735 6.49998 11.7882L6.50488 12C6.50488 13.7042 5.55755 15.1871 4.16077 15.9509L4.00488 16.031V19H20.0049V16.031L19.849 15.9509C18.5104 15.219 17.5846 13.8265 17.5098 12.2118L17.5049 12C17.5049 10.2958 18.4522 8.81287 19.849 8.04908L20.0049 7.968V5ZM16.0049 9V15H8.00488V9H16.0049Z", "fill", "#fff"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "-1 -1 18 18", 1, "bi", "bi-patch-check-fill"], ["d", "M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"], [1, "kt-portlet", "scrollbar1"], [1, "kt-portlet__body", "kt-portlet__body_scroll", "pt-0"], [1, "projects-list", "no-border"], [1, "card-body"], ["id", "project-4_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4", "no-footer"], [1, "col-sm-12"], [1, "table-responsive"], ["role", "grid", 1, "table", "table-hover", "dataTable", "no-footer", "dtr-inline", 2, "width", "0px"], ["role", "row"], ["tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-sort", "ascending", "aria-label", ": activate to sort column descending", 2, "width", "100px"], ["data-order", "desc", "data-name", "Project_Name", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Title &amp; Description: activate to sort column ascending", 1, "curser-pointer", 2, "width", "0px", 3, "appSort", "click"], ["data-toggle", "kt-tooltip", "title", "Click to sort", 1, "mr-2", 3, "hidden"], [1, "fas", "fa-sort-alpha-up"], [1, "fa", "fa-sort-alpha-down-alt"], ["data-order", "desc", "data-name", "Exec_BlockName", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Type: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], [1, "fas", "fa-sort"], ["data-order", "desc", "data-name", "ReportType", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Category: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["data-order", "desc", "data-name", "TM_DisplayName", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "User Name: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["data-order", "desc", "data-name", "DeadLine", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "End Date: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["data-order", "desc", "data-name", "Users", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Users: activate to sort column ascending", 1, "curser-pointer"], ["data-order", "desc", "data-name", "Status", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Status: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["role", "row", "class", "odd", 4, "ngFor", "ngForOf"], ["class", "text-center py-4", "style", "color: lightgrey", 4, "ngIf"], ["id", "MemosSideBar", 1, "sideInfobar", "animate-right"], [1, "kt-portlet__head", "p-3", "bg-primary"], ["href", "javascript:void(0)", 1, "closebtn", "pull-right", "text-white", 3, "click"], [1, "title-sidebar", "mb-0", "text-white"], [1, "curser-pointer"], ["width", "25px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png"], [1, "text-small", "text-white"], [1, "kt-portlet__body", "p-3"], ["id", "accordionExample7", 1, "accordion", "accordion-light", "accordion-svg-icon"], [1, "kt-widget1", "kt-widget1--fit"], ["class", "kt-widget1__item", 4, "ngFor", "ngForOf"], ["id", "DARSideBar", 1, "sideInfobar", "animate-right"], [1, "kt-widget1__item"], [1, "kt-widget1__info", "kt-align-left"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], ["id", "Project_info_slider_bar", 1, "project-info-side-bar", "animate-right"], [1, "kt-info-body"], [1, "kt-info-box"], [1, "kt-info-box-tittle"], [1, "kt-title-icon"], ["width", "20px", "height", "20px", "viewBox", "0 0 48 48", "xmlns", "http://www.w3.org/2000/svg", "fill", "#ffffff", "stroke", "none"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["id", "Layer_2", "data-name", "Layer 2"], ["id", "invisible_box", "data-name", "invisible box"], ["width", "48", "height", "48", "fill", "none"], ["id", "Layer_7", "data-name", "Layer 7"], ["x", "33", "y", "4", "width", "10", "height", "40", "rx", "2"], ["x", "19", "y", "19", "width", "10", "height", "25", "rx", "2"], ["x", "5", "y", "33", "width", "10", "height", "11", "rx", "2"], [1, "kt-project-info-body", "pl-3"], [1, "d-flex", "justify-content-between"], [1, "kt-project-name"], [1, "kt-project-type"], [1, "Kt-Pd-Status", "Core_task"], [1, "kt-project-desc"], [1, "kt-info-box", "mt-2"], ["width", "20px", "height", "20px", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "stroke", "#ffffff"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM10.25 11C10.25 10.4477 10.6977 10 11.25 10H12.75C13.3023 10 13.75 10.4477 13.75 11V18C13.75 18.5523 13.3023 19 12.75 19H11.25C10.6977 19 10.25 18.5523 10.25 18V11ZM14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9C13.1046 9 14 8.10457 14 7Z", "fill", "#ffffff"], [1, "Kt-Pd-Status", "More_info"], [1, "row", "mt-3", "px-3"], [1, "col", "text-center"], [1, "kt-info-lable-v"], [1, "kt-info-lable-icon"], ["width", "24px", "height", "24px", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", "id", "handshake"], ["fill", "#898989", "data-name", "Handshake"], ["d", "M10.17 38a1.007 1.007 0 0 1-.458-.11L2.09 33.964a1 1 0 0 1-.434-1.342l8.954-17.686a1 1 0 0 1 1.347-.439l7.251 3.7a1 1 0 0 1 .448 1.324l-8.584 17.908a1.006 1.006 0 0 1-.583.516 1.028 1.028 0 0 1-.319.055Zm-6.281-5.36 5.824 3 7.718-16.1-5.49-2.8Z"], ["d", "M20.53 24.084a1 1 0 0 1-.491-.129l-2.906-1.637a1 1 0 1 1 .981-1.743l2.4 1.351c.937-.568 2.965-1.791 4.263-2.524 2.119-1.2 3.611-1.035 5.324.588a1 1 0 0 1-1.375 1.452c-1.064-1.008-1.618-1.06-2.965-.3-1.668.943-4.677 2.777-4.708 2.8a1 1 0 0 1-.523.142Z"], ["d", "M46.837 41.483a3.827 3.827 0 0 1-2.072-.547c-.92-.614-4.968-4.584-5.77-5.373a1 1 0 0 1 1.4-1.426c1.8 1.777 4.888 4.742 5.477 5.135a2.328 2.328 0 0 0 2.364-.244 1.422 1.422 0 0 0-.04-2.182c-1.022-1.15-5.268-5.235-6.2-6.131a66.293 66.293 0 0 1-9.432-4.322l-1.052.688a4.582 4.582 0 0 1-1.771 2.731 2.759 2.759 0 0 1-2.278.532 3.475 3.475 0 0 1-2.409-1.444 4.74 4.74 0 0 1-.166-3.617c.853-3.414 2.237-4.293 4.152-5.509l.421-.269c2.11-1.355 3.921-2.077 5.909-1.182 1.236.557 5.623 2.256 6.869 2.738l4.176-1.369a1 1 0 0 1 .623 1.9l-4.515 1.48a1.007 1.007 0 0 1-.67-.016c-.237-.092-5.815-2.238-7.3-2.908-.891-.4-1.832-.359-4.008 1.039l-.43.275c-1.747 1.109-2.624 1.667-3.284 4.306-.338 1.352-.182 1.9-.059 2.1.158.264.524.371 1.107.517a.856.856 0 0 0 .706-.2A2.587 2.587 0 0 0 29.6 26.4a1 1 0 0 1 .448-.75l1.925-1.259A1 1 0 0 1 33 24.353c.068.037 6.81 3.724 9.763 4.5a1.018 1.018 0 0 1 .438.245c.216.207 5.3 5.075 6.494 6.422a3.4 3.4 0 0 1-.04 4.924 4.013 4.013 0 0 1-2.818 1.039Z"], ["d", "M48.947 37.182a1 1 0 0 1-.405-1.914l3.508-1.554a1 1 0 1 1 .81 1.828L49.351 37.1a1 1 0 0 1-.404.082Z"], ["d", "M53.534 38a1 1 0 0 1-.927-.626l-7.548-18.726a1 1 0 0 1 .59-1.316l8.066-2.886a1 1 0 0 1 1.266.572l7.4 18.574a1 1 0 0 1-.571 1.3l-7.918 3.038a1 1 0 0 1-.358.07zM47.3 18.864l6.791 16.847 6.054-2.32-6.665-16.737zm-4.968 25.652a3.386 3.386 0 0 1-2.264-.779c-1.339-1.19-4.781-4.63-4.927-4.776a1 1 0 0 1 1.414-1.414c.035.035 3.547 3.545 4.841 4.7a1.951 1.951 0 0 0 1.8.12A2.709 2.709 0 0 0 45 40.208a1 1 0 0 1 1.971.34 4.712 4.712 0 0 1-3.11 3.7 4.654 4.654 0 0 1-1.529.268z"], ["d", "M37.678 46.94a3.164 3.164 0 0 1-2.241-.8l-3.552-3.552 1.415-1.415 3.552 3.552a1.8 1.8 0 0 0 1.457.136 2.636 2.636 0 0 0 1.918-1.879 1 1 0 1 1 1.912.586 4.657 4.657 0 0 1-4.46 3.372Z"], ["d", "M33.866 49.611a3.632 3.632 0 0 1-2.269-.735 298.882 298.882 0 0 0-2.715-2.148 1 1 0 1 1 1.231-1.576s1.249.975 2.734 2.163a2.127 2.127 0 0 0 2.1.043 1.559 1.559 0 0 0 .942-1.493 1 1 0 0 1 .969-1.03 1.013 1.013 0 0 1 1.03.97 3.558 3.558 0 0 1-2.048 3.343 4.461 4.461 0 0 1-1.974.463Z"], ["d", "M26.372 49.148a2.5 2.5 0 0 1-.947-.19A4.416 4.416 0 0 1 23.5 47.12a3.151 3.151 0 0 1-2.083-.313 4.825 4.825 0 0 1-2.086-3.088 1 1 0 0 1 .137-.741c.813-1.268 2.039-3.239 2.222-3.65A2.546 2.546 0 0 1 23.35 38a3.358 3.358 0 0 1 2.842.544 2.98 2.98 0 0 1 1.324 2.742 3.329 3.329 0 0 1 2.46 1.251 3.59 3.59 0 0 1 .383 3.067 5.949 5.949 0 0 1-3 3.344 2.534 2.534 0 0 1-.987.2Zm-1.188-3.121c.314.531.875 1.293 1.4 1.074a3.949 3.949 0 0 0 1.882-2.139 1.621 1.621 0 0 0-.1-1.247 1.585 1.585 0 0 0-1.154-.452Zm-3.791-2.35a2.526 2.526 0 0 0 .977 1.372 1.214 1.214 0 0 0 .963.063l2.135-3.66a1.065 1.065 0 0 0-.412-1.264 1.4 1.4 0 0 0-1.1-.281.751.751 0 0 0-.44.243c-.264.585-1.534 2.601-2.123 3.527Z"], ["d", "M18.729 45.239a2.451 2.451 0 0 1-.7-.1c-1.713-.515-2.384-2.733-2.455-2.984a1 1 0 0 1 .093-.765 41.481 41.481 0 0 1 2.815-4.26 3.394 3.394 0 0 1 4.494-.807c.944.655 1.636 2.08.478 3.942a1 1 0 1 1-1.7-1.055c.257-.415.48-.966.081-1.243a1.384 1.384 0 0 0-1.769.382 39.431 39.431 0 0 0-2.435 3.64c.219.523.592 1.122.973 1.235.337.1.8-.246 1.051-.46a1 1 0 0 1 1.308 1.514 3.41 3.41 0 0 1-2.234.961Z"], ["d", "M16.534 42.88a1 1 0 0 1-.323-.054c-.169-.057-4.155-1.45-4.155-4.572a1.012 1.012 0 0 1 .048-.309 11.688 11.688 0 0 1 1.473-2.8 3.105 3.105 0 0 1 3.848-.744 2.589 2.589 0 0 1 1.4 3.207c-.654 2.106-1.325 4.513-1.332 4.538a1 1 0 0 1-.963.731Zm-2.47-4.471c.1.936 1.058 1.648 1.826 2.075.261-.912.648-2.239 1.028-3.466a.6.6 0 0 0-.376-.82 1.2 1.2 0 0 0-1.329.1 10.356 10.356 0 0 0-1.149 2.111Z"], ["d", "M13.877 37.529a1 1 0 0 1-.564-.175l-2.623-1.8a1 1 0 0 1 1.13-1.651l2.623 1.8a1 1 0 0 1-.566 1.826Z"], [1, "kt-info-data-v"], ["width", "24px", "height", "24px", "xmlns", "http://www.w3.org/2000/svg", "fill", "#898989", "viewBox", "0 0 101 101", "id", "user"], ["fill", "#898989", "d", "M50.4 54.5c10.1 0 18.2-8.2 18.2-18.2S60.5 18 50.4 18s-18.2 8.2-18.2 18.2 8.1 18.3 18.2 18.3zm0-31.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4S37 43.7 37 36.3s6-13.5 13.4-13.5zM18.8 83h63.4c1.3 0 2.4-1.1 2.4-2.4 0-12.6-10.3-22.9-22.9-22.9H39.3c-12.6 0-22.9 10.3-22.9 22.9 0 1.3 1.1 2.4 2.4 2.4zm20.5-20.5h22.4c9.2 0 16.7 6.8 17.9 15.7H21.4c1.2-8.9 8.7-15.7 17.9-15.7z"], [1, "kt-info-data-v", "bg-light-shade"], ["width", "24px", "height", "24px", "xmlns", "http://www.w3.org/2000/svg", "fill", "#898989", "enable-background", "new 0 0 24 24", "viewBox", "0 0 24 24", "id", "office-bag"], ["d", "M19.5,6H16V5c-0.0014038-1.1040039-0.8959961-1.9985962-2-2h-4C8.8959961,3.0014038,8.0014038,3.8959961,8,5v1H4.5C3.119812,6.0012817,2.0012817,7.119812,2,8.5v10c0.0012817,1.380188,1.119812,2.4987183,2.5,2.5h15c1.380188-0.0012817,2.4987183-1.119812,2.5-2.5v-10C21.9987183,7.119812,20.880188,6.0012817,19.5,6z M9,5c0.0003662-0.552124,0.447876-0.9996338,1-1h4c0.552124,0.0003662,0.9996338,0.447876,1,1v1H9V5z M21,18.5c-0.0009155,0.828064-0.671936,1.4990845-1.5,1.5h-15c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5v-6.4726562l5.8417969,1.9472656C8.8928833,13.991333,8.9462891,13.999939,9,14h6c0.053772-0.000061,0.1071777-0.008667,0.1582642-0.0253906L21,12.0273438V18.5z M21,11.0059204c-0.0525513,0-0.1055908,0.0019531-0.1581421,0.0194702L14.9190063,13H9.0810547l-5.9228516-1.9746094C3.1056519,11.0078735,3.0525513,11.0059204,3,11.0059204V8.5C3.0009155,7.671936,3.671936,7.0009155,4.5,7h15c0.828064,0.0009155,1.4990845,0.671936,1.5,1.5V11.0059204z"], ["width", "24px", "height", "24px", "xmlns", "http://www.w3.org/2000/svg", "fill", "#898989", "viewBox", "0 0 64 64", "id", "money"], ["d", "M32,46A10,10,0,1,0,22,36,10.011,10.011,0,0,0,32,46Zm0-18a8,8,0,1,1-8,8A8.009,8.009,0,0,1,32,28Z"], ["d", "M32,39a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,2,2.816V42a1,1,0,0,0,2,0V40.816A2.993,2.993,0,0,0,32,35a1,1,0,1,1,1-1,1,1,0,0,0,2,0,3,3,0,0,0-2-2.816V30a1,1,0,0,0-2,0v1.184A2.993,2.993,0,0,0,32,37a1,1,0,0,1,0,2Z"], ["d", "M59.218,36h-6.48a27.909,27.909,0,0,0-8.3-12.82l-5.556-4.862a2.974,2.974,0,0,0-1.092-5.2l5.043-7.564a1,1,0,0,0-.067-1.2c-.025-.028-.057-.045-.084-.071l.008-.008A8.36,8.36,0,0,0,37,2a8.223,8.223,0,0,0-4.671,1.466C29.224,2.108,26,.747,21.4,4.2a1,1,0,0,0-.232,1.355l5.043,7.564a2.967,2.967,0,0,0-1.538,4.751L19.94,22.288l1.366,1.461L26.394,19h10.23l6.5,5.685A25.925,25.925,0,0,1,50.641,36H46.782A2.785,2.785,0,0,0,44,38.782v2.436A2.756,2.756,0,0,0,44.664,43,2.756,2.756,0,0,0,44,44.782v2.436a2.765,2.765,0,0,0,.15.861,2.783,2.783,0,0,0-2.15,2.7v2.436a2.783,2.783,0,0,0,2.15,2.7,2.765,2.765,0,0,0-.15.861v2.436a2.9,2.9,0,0,0,.035.35A10.982,10.982,0,0,1,41,60h-.126A2.74,2.74,0,0,0,41,59.218V56.782A2.756,2.756,0,0,0,40.336,55,2.756,2.756,0,0,0,41,53.218V50.782A2.785,2.785,0,0,0,38.218,48H25.782A2.785,2.785,0,0,0,23,50.782v2.436A2.756,2.756,0,0,0,23.664,55,2.756,2.756,0,0,0,23,56.782v2.436a2.74,2.74,0,0,0,.126.782H23a10.982,10.982,0,0,1-3.035-.432,2.9,2.9,0,0,0,.035-.35V56.782a2.765,2.765,0,0,0-.15-.861,2.783,2.783,0,0,0,2.15-2.7V50.782a2.783,2.783,0,0,0-2.15-2.7,2.765,2.765,0,0,0,.15-.861V44.782A2.756,2.756,0,0,0,19.336,43,2.756,2.756,0,0,0,20,41.218V38.782A2.785,2.785,0,0,0,17.218,36h-4.03A26,26,0,0,1,19.7,25.26L18.3,23.839A28.007,28.007,0,0,0,11.1,36H4.782A2.785,2.785,0,0,0,2,38.782v2.436A2.756,2.756,0,0,0,2.664,43,2.756,2.756,0,0,0,2,44.782v2.436a2.783,2.783,0,0,0,2.15,2.7,2.765,2.765,0,0,0-.15.861v2.436a2.765,2.765,0,0,0,.15.861A2.783,2.783,0,0,0,2,56.782v2.436A2.785,2.785,0,0,0,4.782,62H17.218a2.752,2.752,0,0,0,1.759-.645A12.964,12.964,0,0,0,23,62H41a12.964,12.964,0,0,0,4.023-.645A2.752,2.752,0,0,0,46.782,62H59.218A2.785,2.785,0,0,0,62,59.218V56.782a2.783,2.783,0,0,0-2.15-2.7,2.765,2.765,0,0,0,.15-.861V50.782a2.765,2.765,0,0,0-.15-.861,2.783,2.783,0,0,0,2.15-2.7V44.782A2.756,2.756,0,0,0,61.336,43,2.756,2.756,0,0,0,62,41.218V38.782A2.785,2.785,0,0,0,59.218,36ZM39.844,4.7a8.592,8.592,0,0,1-5.115-.262A6.139,6.139,0,0,1,37,4,6.492,6.492,0,0,1,39.844,4.7Zm-8.233.638c2.249.985,4.732,2.075,7.983,1.472L35.465,13h-6.93l-5.16-7.74C26.649,3.162,28.862,4.13,31.611,5.335ZM27,17a1,1,0,0,1,0-2H37a1,1,0,0,1,0,2ZM20,53.218a.783.783,0,0,1-.782.782H6.782A.783.783,0,0,1,6,53.218V50.782A.783.783,0,0,1,6.782,50H8v2h2V50h2v2h2V50h2v2h2V50h1.218a.783.783,0,0,1,.782.782ZM4,38.782A.783.783,0,0,1,4.782,38H6v2H8V38h2v2h2V38h2v2h2V38h1.218a.783.783,0,0,1,.782.782v2.436a.783.783,0,0,1-.782.782H4.782A.783.783,0,0,1,4,41.218Zm0,6A.783.783,0,0,1,4.782,44H6v2H8V44h2v2h2V44h2v2h2V44h1.218a.783.783,0,0,1,.782.782v2.436a.783.783,0,0,1-.782.782H4.782A.783.783,0,0,1,4,47.218ZM18,59.218a.783.783,0,0,1-.782.782H4.782A.783.783,0,0,1,4,59.218V56.782A.783.783,0,0,1,4.782,56H6v2H8V56h2v2h2V56h2v2h2V56h1.218a.783.783,0,0,1,.782.782Zm7-8.436A.783.783,0,0,1,25.782,50H27v2h2V50h2v2h2V50h2v2h2V50h1.218a.783.783,0,0,1,.782.782v2.436a.783.783,0,0,1-.782.782H25.782A.783.783,0,0,1,25,53.218ZM25.782,60A.783.783,0,0,1,25,59.218V56.782A.783.783,0,0,1,25.782,56H27v2h2V56h2v2h2V56h2v2h2V56h1.218a.783.783,0,0,1,.782.782v2.436a.783.783,0,0,1-.782.782ZM46,38.782A.783.783,0,0,1,46.782,38H48v2h2V38h2v2h2V38h2v2h2V38h1.218a.783.783,0,0,1,.782.782v2.436a.783.783,0,0,1-.782.782H46.782A.783.783,0,0,1,46,41.218Zm-2,12A.783.783,0,0,1,44.782,50H46v2h2V50h2v2h2V50h2v2h2V50h1.218a.783.783,0,0,1,.782.782v2.436a.783.783,0,0,1-.782.782H44.782A.783.783,0,0,1,44,53.218Zm16,8.436a.783.783,0,0,1-.782.782H46.782A.783.783,0,0,1,46,59.218V56.782A.783.783,0,0,1,46.782,56H48v2h2V56h2v2h2V56h2v2h2V56h1.218a.783.783,0,0,1,.782.782Zm0-12a.783.783,0,0,1-.782.782H46.782A.783.783,0,0,1,46,47.218V44.782A.783.783,0,0,1,46.782,44H48v2h2V44h2v2h2V44h2v2h2V44h1.218a.783.783,0,0,1,.782.782Z"], ["width", "24px", "height", "24px", "xmlns", "http://www.w3.org/2000/svg", "fill", "#898989", "viewBox", "0 0 48 48", "id", "international-client"], ["fill", "#0c0c0c", "d", "M24 0C10.767 0 0 10.767 0 24s10.767 24 24 24 24-10.767 24-24S37.233 0 24 0zm0 47C11.318 47 1 36.682 1 24S11.318 1 24 1s23 10.318 23 23-10.318 23-23 23z"], ["fill", "#0c0c0c", "d", "M10.529 36.494a.499.499 0 1 0-.738.674l.362.396c.208.229.324.525.324.835V39.5a.5.5 0 0 0 1 0v-1.101c0-.56-.208-1.096-.585-1.509l-.363-.396zm8.804-.402a.5.5 0 0 0-.033.706c.237.26.368.597.368.948V39.5a.5.5 0 0 0 1 0v-1.754c0-.602-.223-1.177-.628-1.622a.5.5 0 0 0-.707-.032zm8.628.032a2.4 2.4 0 0 0-.629 1.622V39.5a.5.5 0 0 0 1 0v-1.754c0-.352.131-.688.368-.948a.499.499 0 0 0-.032-.706.497.497 0 0 0-.707.032zm9.51.37-.363.396a2.234 2.234 0 0 0-.584 1.509V39.5a.5.5 0 0 0 1 0v-1.101c0-.31.115-.606.323-.835l.362-.396a.5.5 0 1 0-.738-.674z"], ["fill", "#0c0c0c", "d", "M38.378 34.064 36 33.172V32.02a2.983 2.983 0 0 0 .999-2.219v-1.169l.581-2.13c.082-.453-.019-.911-.284-1.288s-.662-.627-1.116-.703l-2.85-.475a1.68 1.68 0 0 0-1.91 1.263 1.473 1.473 0 0 0-.7.479c-.282.349-.39.8-.278 1.303L31 28.642v1.16c0 .884.391 1.671 1.001 2.221v1.149l-2.378.893c-.04.015-.074.038-.113.054l-.834-.519a1.676 1.676 0 0 0 .941-1.783 28.909 28.909 0 0 1-.364-4.563V25.597a5.222 5.222 0 0 0-5.216-5.216 5.222 5.222 0 0 0-5.216 5.216v1.657c0 1.521-.123 3.057-.364 4.563a1.656 1.656 0 0 0 .903 1.76l-.869.542c-.038-.016-.073-.039-.112-.054L16 33.172V32.02a2.983 2.983 0 0 0 .999-2.219v-1.169l.581-2.13c.082-.453-.019-.911-.284-1.288s-.662-.627-1.116-.703l-2.85-.475a1.682 1.682 0 0 0-1.91 1.263 1.473 1.473 0 0 0-.7.479c-.282.349-.39.8-.278 1.303L11 28.642v1.16c0 .884.391 1.671 1.001 2.221v1.149l-2.378.893A2.51 2.51 0 0 0 8 36.405V39.5a.5.5 0 0 0 1 0v-3.095c0-.622.391-1.186.974-1.405l.998-.374a4 4 0 0 0 3.029 1.393 4 4 0 0 0 3.028-1.393l.615.231A2.82 2.82 0 0 0 17 36.634V39.5a.5.5 0 0 0 1 0v-2.866c0-.646.327-1.235.875-1.576l2.224-1.386c.756.789 1.798 1.269 2.9 1.269 1.102 0 2.143-.48 2.899-1.268l2.225 1.385c.549.341.877.93.877 1.577V39.5a.5.5 0 0 0 1 0v-2.865c0-.665-.242-1.279-.644-1.778l.615-.231A4 4 0 0 0 34 36.019a4 4 0 0 0 3.028-1.393l.998.374c.583.219.974.783.974 1.405V39.5a.5.5 0 0 0 1 0v-3.095a2.512 2.512 0 0 0-1.622-2.341zm-6.881-7.658a.478.478 0 0 1 .372-.177c.276 0 .5-.256.5-.532a.69.69 0 0 1 .797-.674l2.85.475a.702.702 0 0 1 .463.292c.11.156.152.347.127.492l-.302 1.104-.085-.124a.499.499 0 0 0-.413-.218H32.18a.499.499 0 0 0-.416.223l-.129.192-.234-.65a.476.476 0 0 1 .096-.403zm.502 2.307.448-.67h3.095l.457.669v1.09a1.99 1.99 0 0 1-1.364 1.886l-.025.008a1.988 1.988 0 0 1-1.808-.306c-.003-.002-.006-.001-.008-.003a1.991 1.991 0 0 1-.795-1.586v-1.088zm-10.77-.94v-.631c0-.768.446-1.453 1.113-1.807 1.212.879 2.613 1.36 4.069 1.36h.001l.227.007c.04 0 .077.01.116.013v1.058c0 1.523-1.24 2.764-2.763 2.764s-2.763-1.24-2.763-2.764zm5.038 4.327v-1.348a3.746 3.746 0 0 0 1.489-2.979v-.565c.305.328.497.786.497 1.295 0 .082.024.156.059.224.054 1.089.145 2.177.318 3.248a.68.68 0 0 1-.671.787h-.629l-1.063-.662zm-6.153.662a.68.68 0 0 1-.67-.787c.25-1.558.376-3.146.376-4.721v-1.657c0-2.324 1.891-4.216 4.216-4.216s4.216 1.892 4.216 4.216v.717a2.534 2.534 0 0 0-.752-.445.482.482 0 0 0-.176-.059 2.363 2.363 0 0 0-.668-.107l-.227-.007c-1.316 0-2.573-.441-3.646-1.264a.496.496 0 0 0-.562-.162 3.076 3.076 0 0 0-1.976 2.672c-.004.027-.016.051-.016.078v.755c0 1.222.595 2.299 1.5 2.987V32.1l-1.062.662h-.553zm-8.617-6.356a.478.478 0 0 1 .372-.177c.276 0 .5-.256.5-.532a.69.69 0 0 1 .797-.674l2.85.475a.702.702 0 0 1 .463.292c.11.156.152.347.127.492l-.302 1.104-.085-.124a.499.499 0 0 0-.413-.218H12.18a.499.499 0 0 0-.416.223l-.129.192-.234-.65a.476.476 0 0 1 .096-.403zm.502 2.307.448-.67h3.095l.457.669v1.09a1.99 1.99 0 0 1-.798 1.588l-.003.001a1.987 1.987 0 0 1-.568.299l-.015.005c-.398.13-.828.131-1.227.002l-.022-.007a1.99 1.99 0 0 1-.565-.297l-.004-.001a1.992 1.992 0 0 1-.799-1.589v-1.09zM14 35.019a3 3 0 0 1-2.006-.776l.682-.256a.5.5 0 0 0 .324-.468v-.892c.062.022.127.032.19.05.088.025.174.053.265.07.135.025.272.035.41.041.045.002.088.014.134.014.044 0 .085-.011.129-.013.14-.006.279-.017.416-.042.091-.017.177-.045.265-.07.064-.018.13-.028.192-.051v.893a.5.5 0 0 0 .324.468l.681.256a3.003 3.003 0 0 1-2.006.776zm10-1.079c-.76 0-1.484-.301-2.039-.806l.533-.332a.491.491 0 0 0 .226-.425h.009v-1.075a3.71 3.71 0 0 0 1.263.234c.449 0 .874-.092 1.274-.237v1.078h.01c0 .167.075.33.227.425l.535.333A3.04 3.04 0 0 1 24 33.94zm10 1.079a3 3 0 0 1-2.006-.776l.682-.256a.5.5 0 0 0 .324-.468v-.893c.056.02.116.029.173.046.094.027.186.057.284.075.132.024.266.034.4.04.048.002.093.014.141.014.042 0 .081-.011.122-.012.143-.006.285-.017.426-.043.084-.016.164-.042.246-.065.069-.019.14-.03.208-.055v.892a.5.5 0 0 0 .324.468l.682.256a2.999 2.999 0 0 1-2.006.777z"], ["fill", "#0c0c0c", "d", "M24 8C15.178 8 8 15.178 8 24c0 2.362.536 4.738 1.551 6.871a.5.5 0 0 0 .903-.43A15.086 15.086 0 0 1 9 24c0-1.067 1.549-2.195 4.207-3.055-.068.5-.12 1.007-.154 1.522a.5.5 0 0 0 .466.532.493.493 0 0 0 .532-.466c.043-.649.124-1.28.222-1.902 1.406-.377 3.057-.681 4.9-.879-.034.411-.063.823-.086 1.235a.5.5 0 0 0 .471.527l.029.001a.5.5 0 0 0 .499-.472c.027-.473.06-.935.098-1.384a46.1 46.1 0 0 1 3.818-.16c1.342 0 2.612.06 3.818.16.036.421.067.851.093 1.293a.49.49 0 0 0 .528.47.5.5 0 0 0 .47-.528c-.022-.381-.05-.762-.081-1.142 1.842.198 3.493.502 4.899.879.098.622.179 1.253.222 1.901a.497.497 0 0 0 .497.468l.034-.001a.501.501 0 0 0 .466-.532 22.08 22.08 0 0 0-.154-1.522C37.451 21.805 39 22.933 39 24c0 2.21-.5 4.434-1.447 6.43a.5.5 0 1 0 .903.428A16.103 16.103 0 0 0 40 24c0-8.822-7.178-16-16-16zm0 1c.909 0 1.921 1.487 2.7 4.169A23.144 23.144 0 0 0 24 13c-.922 0-1.821.066-2.701.169C22.078 10.486 23.089 9 24 9zm-3.774 4.322c-1.34.224-2.621.554-3.806.994 1.409-2.466 3.327-4.246 5.482-4.96-.676.946-1.235 2.326-1.676 3.966zm5.87-3.967c2.155.713 4.075 2.494 5.484 4.961a20.939 20.939 0 0 0-3.807-.995c-.442-1.639-1.001-3.02-1.677-3.966zm-7.274.585c-1.523 1.203-2.836 2.913-3.831 4.976-2.071.974-3.792 2.272-5.009 3.789a15.06 15.06 0 0 1 8.84-8.765zM9.43 21.664c.763-2.115 2.525-3.971 4.949-5.326a20.413 20.413 0 0 0-.989 3.525c-1.636.484-3.011 1.086-3.96 1.801zm5.033-2.094a18.87 18.87 0 0 1 1.269-3.905 19.187 19.187 0 0 1 4.235-1.287 37.984 37.984 0 0 0-.699 4.373c-1.706.18-3.337.455-4.805.819zM24 18.5c-1.245 0-2.494.057-3.719.158.18-1.689.438-3.181.746-4.459a22.198 22.198 0 0 1 5.945 0c.309 1.278.567 2.771.747 4.459A45.407 45.407 0 0 0 24 18.5zm4.733.251a38.014 38.014 0 0 0-.7-4.373c1.522.284 2.95.718 4.236 1.287a18.87 18.87 0 0 1 1.269 3.905 35.836 35.836 0 0 0-4.805-.819zm5.878 1.112a20.503 20.503 0 0 0-.989-3.525c2.423 1.355 4.185 3.211 4.948 5.326-.949-.715-2.324-1.317-3.959-1.801zm-1.602-4.946c-.994-2.063-2.308-3.773-3.831-4.976a15.05 15.05 0 0 1 8.839 8.765c-1.217-1.517-2.938-2.816-5.008-3.789z"], [1, "kt-clinet-img-x"], [1, "kt-client-icon"], ["src", "https://www.drcafe.com/assets/images/DC_new_Logo_new.png"], ["width", "20px", "height", "20px", "viewBox", "0 0 512 512", "id", "svg2793", "version", "1.1", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "cc", "http://creativecommons.org/ns#", 0, "xmlns", "dc", "http://purl.org/dc/elements/1.1/", 0, "xmlns", "rdf", "http://www.w3.org/1999/02/22-rdf-syntax-ns#", 0, "xmlns", "serif", "http://www.serif.com/", 0, "xmlns", "svg", "http://www.w3.org/2000/svg", "fill", "#ffffff", "stroke", "#ffffff", 2, "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "2"], ["id", "defs2797"], ["id", "_09-Round-Chart", "transform", "translate(-3072,-1024)", 2, "display", "inline"], ["id", "g2606", "transform", "translate(3282.77,1327.86)"], ["d", "M 0,175.522 C -89.87,157.49 -160.117,87.247 -178.15,-2.619 h 91.441 c 6.863,19.997 18.253,38.267 33.348,53.362 C -38.267,65.838 -19.997,77.227 0,84.09 Z M 18.637,58.348 C -20.648,48.532 -51.15,18.03 -60.967,-21.255 c -1.669,-6.678 -7.669,-11.364 -14.553,-11.364 h -120.25 c -4.3,0 -8.394,1.846 -11.242,5.071 -2.847,3.222 -4.174,7.513 -3.643,11.781 7.022,56.445 33.152,109.793 73.578,150.217 40.426,40.426 93.777,66.554 150.225,73.576 0.619,0.078 1.237,0.115 1.853,0.115 3.636,0 7.173,-1.322 9.93,-3.758 C 28.154,201.536 30,197.442 30,193.141 V 72.901 C 30,66.018 25.314,60.018 18.637,58.348", "id", "path2604", 2, "fill-rule", "nonzero"], ["id", "g2610", "transform", "translate(3373.23,1327.86)"], ["d", "M 0,175.522 V 84.088 C 19.996,77.221 38.268,65.83 53.362,50.735 68.456,35.641 79.846,17.374 86.709,-2.619 h 91.44 C 160.109,87.248 89.863,157.49 0,175.522 M 195.771,-32.619 H 75.521 c -6.884,0 -12.883,4.686 -14.553,11.364 C 51.151,18.02 20.647,48.524 -18.64,58.35 -25.316,60.02 -30,66.019 -30,72.901 v 120.24 c 0,4.301 1.846,8.395 5.069,11.242 2.757,2.436 6.294,3.758 9.93,3.758 0.616,0 1.234,-0.038 1.853,-0.115 56.444,-7.022 109.793,-33.15 150.218,-73.576 40.426,-40.424 66.559,-93.772 73.585,-150.215 0.532,-4.269 -0.795,-8.56 -3.642,-11.783 -2.847,-3.225 -6.942,-5.071 -11.242,-5.071", "id", "path2608", 2, "fill-rule", "nonzero"], ["id", "g2614", "transform", "translate(3282.77,1140.29)"], ["d", "m 0,7.771 c -20.002,6.866 -38.273,18.258 -53.369,33.354 -15.094,15.093 -26.482,33.361 -33.341,53.353 h -91.44 C -160.118,4.617 -89.871,-65.629 0,-83.67 Z m 24.93,-120.305 c -3.224,-2.847 -7.508,-4.173 -11.784,-3.642 -56.444,7.026 -109.793,33.159 -150.219,73.584 -40.429,40.427 -66.561,93.775 -73.582,150.218 -0.531,4.269 0.796,8.559 3.643,11.783 2.848,3.223 6.942,5.069 11.242,5.069 h 120.25 c 6.885,0 12.885,-4.686 14.553,-11.365 C -51.159,73.837 -20.656,43.336 18.639,33.51 25.316,31.841 30,25.841 30,18.959 v -120.251 c 0,-4.3 -1.847,-8.395 -5.07,-11.242", "id", "path2612", 2, "fill-rule", "nonzero"], ["id", "g2618", "transform", "translate(3373.23,1231.74)"], ["d", "m 0,-175.115 c 89.872,18.04 160.118,88.285 178.151,178.148 H 86.71 C 79.847,-16.963 68.457,-35.232 53.362,-50.328 38.268,-65.423 19.997,-76.812 0,-83.676 Z m -18.637,117.182 c 39.286,9.816 69.788,40.318 79.605,79.603 1.669,6.678 7.669,11.363 14.553,11.363 h 120.25 c 4.3,0 8.394,-1.845 11.242,-5.069 2.847,-3.224 4.174,-7.514 3.643,-11.782 -7.021,-56.443 -33.152,-109.793 -73.578,-150.219 -40.425,-40.425 -93.776,-66.557 -150.225,-73.584 -4.258,-0.527 -8.559,0.795 -11.783,3.643 -3.223,2.846 -5.07,6.941 -5.07,11.242 v 120.25 c 0,6.884 4.686,12.884 11.363,14.553", "id", "path2616", 2, "fill-rule", "nonzero"], [1, "Kt-Pd-Status", "Delay"], [1, "row", "mt-3", "align-items-center", "px-3"], [1, "col-lg-11"], [1, "kt-project-sts-data"], [1, "col-lg-12", "mt-4"], [1, "progress", "kt-projcect-progress", "bar"], ["role", "progressbar", "aria-valuenow", "15", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-inprogress", 2, "width", "50%"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-delay", 2, "width", "30%"], ["role", "progressbar", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-done", 2, "width", "20%"], [1, "col-lg-6", "text-center", "mt-4"], [1, "kt-prg-bar-info"], [1, "col", "text-center", "mt-4"], [1, "col-lg-1", "text-center"], [1, "kt-prg-bar-info", "kt-total-prg-vl", "mt-4"], [1, "kt-info-box", "mt-2", "border-0"], ["width", "20px", "height", "20px", "viewBox", "0 0 32 32", "enable-background", "new 0 0 32 32", "id", "_x3C_Layer_x3E_", "version", "1.1", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "fill", "#000000", "stroke", "#000000"], ["id", "Check_x2C__click_x2C__decision_x2C__hand_x2C__choice_x2C__approval"], ["id", "XMLID_3788_"], ["id", "TDD_testing_x2C__code_coding_laptop_6_"], ["id", "XMLID_3861_"], ["d", " M13.89,26.034l-1.4-1.244c-0.7-0.63-1.24-1.41-1.58-2.29L8.9,16.95c-0.17-0.47,0.05-0.99,0.5-1.2c0.24-0.11,0.48-0.16,0.73-0.16 c0.63,0,1.24,0.351,1.55,0.95l1.84,3.7c0.62-0.46,0.98-1.19,0.98-1.95V6.5C14.5,5.67,15.17,5,16,5s1.5,0.67,1.5,1.5v8 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5V15c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5v1c0-0.83,0.67-1.5,1.5-1.5 s1.5,0.67,1.5,1.5v8.09c0,0.675-0.203,1.333-0.574,1.891", "fill", "none", "id", "XMLID_3863_", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10"], ["fill", "none", "id", "XMLID_3862_", "points", " 13.5,30.5 13.5,27.5 26.5,27.5 26.5,30.5 ", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10"], ["id", "XMLID_3789_"], ["d", " M10.477,5.541C10.492,5.691,10.5,5.845,10.5,6c0,2.479-2.009,4.488-4.488,4.488S1.524,8.479,1.524,6s2.01-4.488,4.488-4.488 c0.793,0,1.539,0.207,2.186,0.568", "fill", "none", "id", "XMLID_3860_", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10"], ["fill", "none", "id", "XMLID_3794_", "points", " 10.313,2.842 6.012,7.143 3.94,5.071 ", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10"], ["cx", "26", "cy", "6", "fill", "none", "id", "XMLID_3793_", "r", "4.5", "stroke", "#ffffff", "stroke-miterlimit", "10"], ["id", "XMLID_3790_"], ["fill", "none", "id", "XMLID_3792_", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "x1", "27.5", "x2", "24.5", "y1", "7.5", "y2", "4.5"], ["fill", "none", "id", "XMLID_3791_", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "x1", "27.5", "x2", "24.5", "y1", "4.5", "y2", "7.5"], ["id", "XMLID_2861_"], ["id", "TDD_testing_x2C__code_coding_laptop_5_"], ["id", "XMLID_3573_"], ["d", " M13.89,26.034l-1.4-1.244c-0.7-0.63-1.24-1.41-1.58-2.29L8.9,16.95c-0.17-0.47,0.05-0.99,0.5-1.2c0.24-0.11,0.48-0.16,0.73-0.16 c0.63,0,1.24,0.351,1.55,0.95l1.84,3.7c0.62-0.46,0.98-1.19,0.98-1.95V6.5C14.5,5.67,15.17,5,16,5s1.5,0.67,1.5,1.5v8 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5V15c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5v1c0-0.83,0.67-1.5,1.5-1.5 s1.5,0.67,1.5,1.5v8.09c0,0.675-0.203,1.333-0.574,1.891", "fill", "none", "id", "XMLID_3575_", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10"], ["fill", "none", "id", "XMLID_3574_", "points", " 13.5,30.5 13.5,27.5 26.5,27.5 26.5,30.5 ", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10"], ["id", "XMLID_2862_"], ["d", " M10.477,5.541C10.492,5.691,10.5,5.845,10.5,6c0,2.479-2.009,4.488-4.488,4.488S1.524,8.479,1.524,6s2.01-4.488,4.488-4.488 c0.793,0,1.539,0.207,2.186,0.568", "fill", "none", "id", "XMLID_3572_", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10"], ["fill", "none", "id", "XMLID_3571_", "points", " 10.313,2.842 6.012,7.143 3.94,5.071 ", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10"], ["cx", "26", "cy", "6", "fill", "none", "id", "XMLID_3570_", "r", "4.5", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10"], ["id", "XMLID_3567_"], ["fill", "none", "id", "XMLID_3569_", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "x1", "27.5", "x2", "24.5", "y1", "7.5", "y2", "4.5"], ["fill", "none", "id", "XMLID_3568_", "stroke", "#ffffff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "x1", "27.5", "x2", "24.5", "y1", "4.5", "y2", "7.5"], [1, "Kt-Pd-Status", "Deadline_Extend"], [1, "kt-info-data-v", "bg-light-shade", "text-center"], [1, "col-lg-8"], [1, "row", "mt-4", "px-3"], [1, "col-lg-12", "mb-1"], [1, "col"], [1, "Kt-Approval-btns", "Btn_Accpet"], [1, "Kt-Approval-btns", "Btn_Edit_Accept"], [1, "Kt-Approval-btns", "Btn_Conditional_Accept"], [1, "Kt-Approval-btns", "Btn_Reject"], [1, "col-lg-12", "mt-3"], ["id", "exampleTextarea", "rows", "3", 1, "form-control", "kt-approval-msg"], [1, "clearfix"], [1, "kt-info-pg-footer"], [1, "row", "px-3"], [1, "kt-info-pg-btns", "text-end"], ["type", "button", "data-to", "#pills-3-tab", 1, "btn", "btn-project-stv", "mr-3", "Bt-Close", 3, "click"], ["type", "button", "data-to", "#pills-3-tab", 1, "btn", "btn-project-stv", "Bt-Submit"], ["id", "New_project_Add", 1, "add_new_project_slide", "animate-right"], [1, "modal-header"], ["data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-icon", "btn-active-color-primary"], [1, "btn", "btn-icon", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24", "fill", "#ccc"], ["fill", "none", "d", "M0 0h24v24H0z"], ["d", "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"], [1, "kt-portlet__body", "kt-portlet__body_scroll", "p-0"], [1, "container", "Add-Act-Move"], [1, "col", "add-w9"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "justify-content-center", "mb-3", "mt-3", "text-center", "custom"], [1, "step-line"], [1, "nav-item"], ["id", "pills-1-tab", "data-toggle", "pill", "href", "#pills-1", "role", "tab", "aria-controls", "pills-1", "aria-selected", "true", 1, "nav-link", "active", "custom"], [1, "icon"], [1, "text"], ["id", "pills-2-tab", "data-toggle", "pill", "href", "#pills-2", "role", "tab", "aria-controls", "pills-2", "aria-selected", "false", 1, "nav-link", "custom"], ["id", "pills-3-tab", "data-toggle", "pill", "href", "#pills-3", "role", "tab", "aria-controls", "pills-3", "aria-selected", "false", 1, "nav-link", "custom"], ["id", "pills-4-tab", "data-toggle", "pill", "href", "#pills-4", "role", "tab", "aria-controls", "pills-3", "aria-selected", "false", 1, "nav-link", "custom"], ["id", "pills-tabContent", 1, "tab-content", "custom"], ["id", "pills-1", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "section-bottom"], [1, "section-cards"], [1, "card", "active"], [1, "kt-pd-svg"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "80px", "height", "80px", "viewBox", "0 0 24 24", "version", "1.1", "jetwayHooks", "{}"], ["jetwayHookID", "366692D3-B1F2-4C00-B619-21BE6F7C8C98", "id", "cloud-game-servers-24-colored", "stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["jetwayHookID", "36CB1E00-ACE1-4F46-A7A5-F569E64BEB84", "x", "0", "y", "0", "width", "24", "height", "24"], ["jetwayHookID", "1DF457AD-487C-4EB7-8D73-501E58CA30AA", "transform", "translate(3.000000, 3.000000)"], ["d", "M0.76,17.48 L17.48,17.48 C17.8997364,17.48 18.24,17.8202636 18.24,18.24 C18.24,18.6597364 17.8997364,19 17.48,19 L0.76,19 L0.76,19 L0.76,17.48 Z", "jetwayHookID", "A1386B53-136B-4FDE-B39C-E8B23CC4E105", "fill", "#3367D6"], ["d", "M18.24,0 L18.24,0 L18.24,0 L18.24,7.6 C18.24,8.01973641 17.8997364,8.36 17.48,8.36 C17.0602636,8.36 16.72,8.01973641 16.72,7.6 L16.72,1.52 C16.72,0.68052718 17.4005272,1.54208655e-16 18.24,0 Z", "jetwayHookID", "8A5FA304-E2C1-45B3-B491-6E8444A2429C", "fill", "#3367D6", "transform", "translate(17.480000, 4.180000) scale(-1, 1) translate(-17.480000, -4.180000) "], ["d", "M11.4,0 L15.96,0 C16.3797364,1.44940277e-16 16.72,0.34026359 16.72,0.76 C16.72,1.17973641 16.3797364,1.52 15.96,1.52 L11.4,1.52 L11.4,1.52 L11.4,0 Z", "jetwayHookID", "DA985DDD-E55A-4384-BEE8-A4BB2235A434", "fill", "#5C85DE", "transform", "translate(14.060000, 0.760000) scale(-1, 1) translate(-14.060000, -0.760000) "], ["d", "M11.4,6.84 L17.48,6.84 C17.8997364,6.84 18.24,7.18026359 18.24,7.6 C18.24,8.01973641 17.8997364,8.36 17.48,8.36 L11.4,8.36 L11.4,8.36 L11.4,6.84 Z", "jetwayHookID", "076CBF64-54ED-45F7-B7C1-FB729FE6CEB6", "fill", "#3367D6", "transform", "translate(14.820000, 7.600000) scale(-1, 1) translate(-14.820000, -7.600000) "], ["d", "M0,6.84 L6.08,6.84 C6.49973641,6.84 6.84,7.18026359 6.84,7.6 C6.84,8.01973641 6.49973641,8.36 6.08,8.36 L0,8.36 L0,8.36 L0,6.84 Z", "jetwayHookID", "9D7490DB-3E00-48F3-9F67-3A8484F6479D", "fill", "#3367D6"], ["d", "M1.52,0 L1.52,0 L1.52,0 L1.52,7.6 C1.52,8.01973641 1.17973641,8.36 0.76,8.36 C0.34026359,8.36 1.05060361e-15,8.01973641 0,7.6 L0,1.52 C-1.0280577e-16,0.68052718 0.68052718,1.54208655e-16 1.52,0 Z", "jetwayHookID", "8A85673F-D7EF-46DF-A9B9-C06B2CA4C8DE", "fill", "#3367D6"], ["d", "M1.52,0 L6.08,0 C6.49973641,3.39179748e-17 6.84,0.34026359 6.84,0.76 C6.84,1.17973641 6.49973641,1.52 6.08,1.52 L1.52,1.52 L1.52,1.52 L1.52,0 Z", "jetwayHookID", "81A39E20-6B50-4A6C-BB70-8E390C348701", "fill", "#5C85DE"], ["jetwayHookID", "0824AAAC-7FBF-431A-A45C-51709E950122", "transform", "translate(14.820000, 14.440000) scale(-1, 1) translate(-14.820000, -14.440000) translate(11.400000, 9.880000)"], ["d", "M1.71,-1.17820905e-14 L1.71,-1.17820905e-14 L1.71,-1.17820905e-14 L1.71,8.265 C1.71,8.73720346 1.32720346,9.12 0.855,9.12 C0.382796539,9.12 1.16805127e-15,8.73720346 0,8.265 L0,1.71 C-1.15656491e-16,0.765593078 0.765593078,-1.16086057e-14 1.71,-1.17820905e-14 Z", "jetwayHookID", "5142CCCE-FF3E-4E8F-AE47-789A9DDC3642", "fill", "#3367D6"], ["d", "M1.71,0 L6.01090909,0 C6.46880336,5.08395105e-16 6.84,0.371196644 6.84,0.829090909 C6.84,1.28698517 6.46880336,1.65818182 6.01090909,1.65818182 L1.71,1.65818182 L1.71,1.65818182 L1.71,0 Z", "jetwayHookID", "5A28F64E-1331-40C4-B901-8E3C7B78DC05", "fill", "#5C85DE"], ["jetwayHookID", "A0E769E5-1774-4CDF-8721-E7D659D2CF3B", "transform", "translate(0.000000, 9.880000)"], ["d", "M1.71,0 L1.71,0 L1.71,0 L1.71,8.265 C1.71,8.73720346 1.32720346,9.12 0.855,9.12 C0.382796539,9.12 -3.86260964e-16,8.73720346 0,8.265 L0,1.71 C-1.15656491e-16,0.765593078 0.765593078,1.73484737e-16 1.71,0 Z", "jetwayHookID", "F0FB98A6-D291-4BB0-86D2-8A5EA62D6574", "fill", "#3367D6"], ["d", "M1.71,0 L6.01090909,0 C6.46880336,2.69084905e-17 6.84,0.371196644 6.84,0.829090909 C6.84,1.28698517 6.46880336,1.65818182 6.01090909,1.65818182 L1.71,1.65818182 L1.71,1.65818182 L1.71,0 Z", "jetwayHookID", "8DBDB72D-D9BC-4329-814E-42F7C8CE44A5", "fill", "#5C85DE"], ["jetwayHookID", "335B7DD7-A866-4092-B323-091474842FFC", "fill", "#3367D6", "points", "13.68 5.016 10.336 5.016 10.336 8.36 8.664 8.36 8.664 5.016 5.32 5.016 5.32 3.344 8.664 3.344 8.664 0 10.336 0 10.336 3.344 13.68 3.344"], ["d", "M12.4938062,14.0138062 C12.9388812,13.5687313 13.6611188,13.5687313 14.1061938,14.0138062 C14.5512687,14.4588812 14.5512687,15.1811188 14.1061938,15.6261938 C13.6611188,16.0712687 12.9388812,16.0712687 12.4938062,15.6261938 C12.0487313,15.1811188 12.0487313,14.4588812 12.4938062,14.0138062 Z", "jetwayHookID", "B7E0ABCA-9878-41FD-BA02-74A25C5E0101", "fill", "#3367D6"], ["d", "M8.31380621,15.6261938 C7.86873126,15.1811188 7.86873126,14.4588812 8.31380621,14.0138062 C8.75888115,13.5687313 9.48111885,13.5687313 9.92619379,14.0138062 C10.3712687,14.4588812 10.3712687,15.1811188 9.92619379,15.6261938 C9.48111885,16.0712687 8.75888115,16.0712687 8.31380621,15.6261938", "jetwayHookID", "77B82BE9-0886-4564-A038-8EB1D5F9F271", "fill", "#3367D6"], ["d", "M8.31380621,11.8261938 C7.86873126,11.3811188 7.86873126,10.6588812 8.31380621,10.2138062 C8.75888115,9.76873126 9.48111885,9.76873126 9.92619379,10.2138062 C10.3712687,10.6588812 10.3712687,11.3811188 9.92619379,11.8261938 C9.48111885,12.2712687 8.75888115,12.2712687 8.31380621,11.8261938", "jetwayHookID", "E588DF94-00F8-4EF2-8F4A-966EF5F61F1F", "fill", "#5C85DE"], ["d", "M4.13380621,15.6261938 C3.68873126,15.1811188 3.68873126,14.4588812 4.13380621,14.0138062 C4.57888115,13.5687313 5.30111885,13.5687313 5.74619379,14.0138062 C6.19126874,14.4588812 6.19126874,15.1811188 5.74619379,15.6261938 C5.30111885,16.0712687 4.57888115,16.0712687 4.13380621,15.6261938", "jetwayHookID", "E0808619-CFA9-46EA-802C-2478869022F4", "fill", "#3367D6"], [1, "kt-cd-tlv"], [1, "card"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "80px", "height", "80px", "viewBox", "0 0 24 24", "version", "1.1"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["x", "0", "y", "0", "width", "24", "height", "24"], ["transform", "translate(2.062500, 2.812500)", "fill-rule", "nonzero"], ["fill", "#185ABC", "cx", "1.649625", "cy", "1.65", "rx", "1.649625", "ry", "1.65"], ["fill", "#185ABC", "cx", "1.649625", "cy", "9.1297616", "rx", "1.649625", "ry", "1.65"], ["fill", "#185ABC", "cx", "1.649625", "cy", "16.6095232", "rx", "1.649625", "ry", "1.65"], ["fill", "#185ABC", "cx", "17.6941875", "cy", "9.13062371", "r", "2.0625"], ["d", "M4.88925,10.120268 L8.3773125,10.120268 C8.51476433,9.88190788 8.66401604,9.65069595 8.8245,9.4275116 L9.0331875,9.12631314 C8.8145625,8.82511469 8.605875,8.51387629 8.3971875,8.1223183 L4.88925,8.1223183 C4.96522553,8.38052276 5.01190022,8.64661662 5.028375,8.91547423 L5.028375,9.33715206 C5.01273823,9.60282137 4.96603851,9.86568784 4.88925,10.120268 Z", "fill", "#669DF6"], ["d", "M11.4380625,6.09424871 L11.2095,5.68261082 L10.93125,5.2207732 L10.494,4.34729768 C9.241875,1.83731057 7.95,0.682716495 5.346375,0.682716495 L4.88925,0.682716495 C4.98314234,1.0088872 5.02999933,1.34703044 5.028375,1.68671134 C5.0302779,2.0264111 4.98341533,2.36459463 4.88925,2.69070619 L5.346375,2.69070619 C6.95625,2.69070619 7.6618125,3.20274356 8.6356875,4.97981443 L8.8741875,5.41153222 L9.1126875,5.89344974 C10.553625,8.80503479 11.5970625,9.90942912 14.011875,10.1503879 C13.932969,9.82166447 13.8929393,9.48464468 13.892625,9.14639304 C13.8937418,8.80690401 13.9405456,8.46914494 14.03175,8.1423982 L14.091375,8.1423982 C12.91875,8.03195876 12.243,7.51992139 11.4380625,6.09424871 Z", "fill", "#185ABC"], ["d", "M9.6095625,11.485701 L9.3710625,11.9374987 L8.9934375,12.7005348 L8.7549375,13.1523325 L8.526375,13.5639704 C7.612125,15.1804021 6.896625,15.6522796 5.346375,15.6522796 L4.88925,15.6522796 C4.96690716,15.9100795 5.01361706,16.1763741 5.028375,16.4454356 L5.028375,16.8169137 C5.01277982,17.0858764 4.96608733,17.3520717 4.88925,17.6100696 L5.60475,17.6100696 C7.9996875,17.5397899 9.2915625,16.3751559 10.5735,13.9555284 L11.110125,12.8812539 L11.3188125,12.4896959 L11.4976875,12.1583776 C11.641561,11.9075733 11.8008742,11.6661399 11.9746875,11.4355013 C11.3580959,11.202557 10.7864145,10.862807 10.2853125,10.4315064 C10.032207,10.7638576 9.80621522,11.116413 9.6095625,11.485701 Z", "fill", "#669DF6"], ["xmlns", "http://www.w3.org/2000/svg", "width", "100px", "height", "100px", "viewBox", "0 0 24 24", "id", "Artwork", "fill", "#000000"], ["d", "M12,6.23h0L7.28,8.33v3.15A6.73,6.73,0,0,0,10,16.79a5.75,5.75,0,0,0,2,1h0Z", 2, "fill", "#669df6"], ["d", "M12,17.77a6.52,6.52,0,0,0,4.72-6.29V8.33L12,6.23Z", 2, "fill", "#185abc"], ["d", "M17.08,11.62c0,.26,0,.51-.06.76H19.4v-.76Z", 2, "fill", "#185abc"], ["d", "M6.92,11.62c0,.26,0,.51.06.76H4.6v-.76Z", 2, "fill", "#185abc"], ["d", "M3.59,12.73a.73.73,0,0,1,0-1.46v-.6a1.33,1.33,0,1,0,0,2.66Z", 2, "fill", "#aecbfa"], ["d", "M14.22,14.27a.56.56,0,0,1-.56.55H10.34l-.1,0a.54.54,0,0,1-.45-.53V11.5a.55.55,0,0,1,.55-.55h.28v-.56a1.39,1.39,0,0,1,2.77,0V11h.27a.33.33,0,0,1,.15,0,.54.54,0,0,1,.38.42.29.29,0,0,1,0,.1ZM12,9.54h-.1a.85.85,0,0,0-.75.74s0,.07,0,.1V11h1.72v-.56a.85.85,0,0,0-.08-.35A.84.84,0,0,0,12,9.54Z", 2, "fill", "#fff"], ["d", "M12.25,11.58l-1.1,1.47h.63v1.11l1.07-1.49h-.6Z", 2, "fill", "#185abc"], ["d", "M3.59,13.33A1.32,1.32,0,0,0,4.92,12v0a1.32,1.32,0,0,0-1.33-1.33v.6a.73.73,0,0,1,0,1.46Z", 2, "fill", "#669df6"], ["d", "M20.41,12.73a.73.73,0,0,1,0-1.46v-.6a1.33,1.33,0,0,0,0,2.66Z", 2, "fill", "#aecbfa"], ["d", "M20.41,13.33A1.32,1.32,0,0,0,21.75,12v0a1.33,1.33,0,0,0-1.34-1.33v.6a.73.73,0,1,1,0,1.46Z", 2, "fill", "#669df6"], [1, "kt-ctv-btn"], ["type", "button", "data-to", "#pills-2-tab", 1, "btn", "btn-primary", "my-ct-v-btn", "btn-next"], ["id", "pills-2", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], [1, "kt-assd-pds"], [1, "col-lg-12", "mb-3"], [1, "my-sub-task-tittle", "mt-3", "mb-2"], [1, "kt-action-list"], [1, "kt-act-card", "d-flex", "align-items-center"], [1, "kt-act-no"], [1, "kt-act-info"], [1, "kt-act-ttl-v"], [1, "d-flex"], [1, "kt-vi-act-dtl"], [1, "kt-act-svg-ic"], ["xmlns", "http://www.w3.org/2000/svg", "width", "15px", "height", "15px", "viewBox", "0 0 1024 1024", "version", "1.1", 1, "icon"], ["d", "M892.1 938.7H131.9c-17.8 0-35.1-3.5-51.4-10.4-15.6-6.6-29.7-16.1-41.9-28.2C26.5 888 17 873.9 10.3 858.2 3.5 841.8 0 824.5 0 806.8V217.2c0-17.8 3.5-35 10.4-51.3 6.6-15.7 16.1-29.8 28.2-41.9 12.2-12.2 26.3-21.7 42-28.3 16.2-6.9 33.5-10.4 51.3-10.4h83.4c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7h-83.4c-6.3 0-12.4 1.2-18.1 3.6-5.6 2.4-10.6 5.7-14.9 10-4.3 4.3-7.6 9.2-10 14.8-2.4 5.7-3.6 11.8-3.6 18.1v589.6c0 6.3 1.2 12.4 3.7 18.1 2.3 5.5 5.7 10.5 10 14.8 4.3 4.2 9.2 7.6 14.8 9.9 5.8 2.4 11.9 3.7 18.1 3.7h760.2c6.3 0 12.4-1.2 18.1-3.6 5.6-2.4 10.6-5.7 14.9-10 4.3-4.3 7.6-9.2 10-14.8 2.4-5.7 3.6-11.8 3.6-18.1V217.2c0-6.3-1.2-12.4-3.7-18.1-2.3-5.5-5.7-10.5-10-14.8-4.3-4.2-9.2-7.6-14.8-9.9-5.8-2.4-11.9-3.7-18.1-3.7h-83.4c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h83.4c17.8 0 35.1 3.5 51.4 10.4 15.6 6.6 29.7 16.1 41.9 28.2 12.1 12.1 21.6 26.2 28.3 41.9 6.9 16.3 10.4 33.6 10.4 51.4v589.6c0 17.8-3.5 35-10.4 51.3-6.6 15.7-16.1 29.8-28.2 41.9-12.2 12.2-26.3 21.7-42 28.3-16.3 6.9-33.6 10.4-51.4 10.4z", "fill", "#3688FF"], ["d", "M341.3 277.3c-23.6 0-42.7-19.1-42.7-42.7V85.3c0-23.6 19.1-42.7 42.7-42.7S384 61.8 384 85.3v149.3c0 23.6-19.1 42.7-42.7 42.7zM682.7 277.3c-23.6 0-42.7-19.1-42.7-42.7V85.3c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v149.3c-0.1 23.6-19.2 42.7-42.7 42.7zM810.7 490.7H213.3c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h597.3c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.6 42.7zM810.7 704H213.3c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h597.3c23.6 0 42.7 19.1 42.7 42.7S834.2 704 810.7 704z", "fill", "#5F6379"], [1, "kt-act-ic-info"], ["width", "15px", "height", "15px", "viewBox", "0 0 1024.00 1024.00", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "fill", "#3688ff", "stroke", "#3688ff", "stroke-width", "0.01024", 1, "icon"], ["d", "M39.76192 512a472.23808 459.43808 0 1 0 944.47616 0 472.23808 459.43808 0 1 0-944.47616 0Z", "fill", "#3688ff"], ["d", "M94.09536 512a417.90464 406.57408 0 1 0 835.80928 0 417.90464 406.57408 0 1 0-835.80928 0Z", "fill", "#FFFFFF"], ["d", "M470.24128 512a41.75872 40.6272 0 1 0 83.51744 0 41.75872 40.6272 0 1 0-83.51744 0Z", "fill", "#000000"], ["d", "M528.7168 472.93952c0 8.9856-7.48544 16.26624-16.7168 16.26624-9.23136 0-16.7168-7.28064-16.7168-16.26624V253.35808c0-8.9856 7.48544-16.26624 16.7168-16.26624 9.23136 0 16.7168 7.28064 16.7168 16.26624v219.58144zM476.83584 532.25984c7.03488-5.82144 17.5872-4.992 23.56736 1.85344a15.96416 15.96416 0 0 1-1.90464 22.92736l-101.88288 84.3008c-7.03488 5.82144-17.5872 4.992-23.56736-1.85344a15.96416 15.96416 0 0 1 1.90464-22.92736l101.88288-84.3008z", "fill", "#000000"], ["d", "M512 661.3c-117.6 0-213.3-95.7-213.3-213.3S394.4 234.7 512 234.7 725.3 330.4 725.3 448 629.6 661.3 512 661.3z m0-341.3c-70.6 0-128 57.4-128 128s57.4 128 128 128 128-57.4 128-128-57.4-128-128-128z", "fill", "#5F6379"], ["d", "M837 862.9c-15.7 0-30.8-8.7-38.2-23.7C744.3 729.5 634.4 661.3 512 661.3s-232.3 68.1-286.8 177.9c-10.5 21.1-36.1 29.7-57.2 19.2s-29.7-36.1-19.2-57.2C217.8 662.3 357 576 512 576s294.2 86.3 363.2 225.2c10.5 21.1 1.9 46.7-19.2 57.2-6.1 3-12.6 4.5-19 4.5z", "fill", "#5F6379"], ["d", "M512 1002.7c-270.6 0-490.7-220.1-490.7-490.7S241.4 21.3 512 21.3s490.7 220.1 490.7 490.7-220.1 490.7-490.7 490.7z m0-896c-223.5 0-405.3 181.8-405.3 405.3S288.5 917.3 512 917.3 917.3 735.5 917.3 512 735.5 106.7 512 106.7z", "fill", "#3688FF"], [1, "kt-act-btns"], [1, "kt-dl-icon", "db-v"], [1, "kt-svg-ic"], ["width", "26px", "height", "26px", "viewBox", "0 0 23 23", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "12", "cy", "12", "r", "9", "fill", "#ff4d4d", "fill-opacity", "0.24"], ["d", "M9.00009 14.9997L15.0001 8.99966", "stroke", "#d10000", "stroke-width", "1.44"], ["d", "M15 15L9 9", "stroke", "#d10000", "stroke-width", "1.44"], [1, "kt-dl-icon"], [1, "kt-svg-ic", 3, "click"], ["width", "26px", "height", "26px", "viewBox", "2 2 19 19", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "12", "cy", "12", "r", "8", "fill", "#0091eb", "fill-opacity", "0.24"], ["d", "M9.5 12L11.3939 13.8939C11.4525 13.9525 11.5475 13.9525 11.6061 13.8939L15.5 10", "stroke", "#0091eb", "stroke-width", "1.56"], [1, "kt-prd-dtl", "d-none"], [1, "col-lg-12", "mb-2"], [1, "form-group", "text-dark-50", "w-75px", "flex-grow-1", "brdng-0"], [1, "text-danger"], ["type", "text", "placeholder", "Give your Project Name", 1, "form-control", "ng-pristine"], ["data-kt-autosize", "true", "placeholder", "Add a Description", 1, "form-control", "form-control", "kt-desc-textarea"], [1, "col-lg-6", "mb-2"], ["placeholder", "Select Type..", 1, "kt-form-vd"], ["type", "text", "placeholder", "add google map location..", 1, "form-control", "ng-pristine"], [1, "kt-lc-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pin-map"], ["fill-rule", "evenodd", "d", "M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"], ["fill-rule", "evenodd", "d", "M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"], ["href", "https://maps.app.goo.gl/i6pCxHn5imNotrhq5"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22px", "height", "22px", "viewBox", "0 0 1024 1024", "version", "1.1", 1, "icon"], ["d", "M823.3 938.8H229.4c-71.6 0-129.8-58.2-129.8-129.8V215.1c0-71.6 58.2-129.8 129.8-129.8h297c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7h-297c-24.5 0-44.4 19.9-44.4 44.4V809c0 24.5 19.9 44.4 44.4 44.4h593.9c24.5 0 44.4-19.9 44.4-44.4V512c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v297c0 71.6-58.2 129.8-129.8 129.8z", "fill", "#3688FF"], ["d", "M483 756.5c-1.8 0-3.5-0.1-5.3-0.3l-134.5-16.8c-19.4-2.4-34.6-17.7-37-37l-16.8-134.5c-1.6-13.1 2.9-26.2 12.2-35.5l374.6-374.6c51.1-51.1 134.2-51.1 185.3 0l26.3 26.3c24.8 24.7 38.4 57.6 38.4 92.7 0 35-13.6 67.9-38.4 92.7L513.2 744c-8.1 8.1-19 12.5-30.2 12.5z m-96.3-97.7l80.8 10.1 359.8-359.8c8.6-8.6 13.4-20.1 13.4-32.3 0-12.2-4.8-23.7-13.4-32.3L801 218.2c-17.9-17.8-46.8-17.8-64.6 0L376.6 578l10.1 80.8z", "fill", "#5F6379"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20px", "height", "20px", "viewBox", "0 0 1024 1024", "version", "1.1", 1, "icon"], ["d", "M779.5 1002.7h-535c-64.3 0-116.5-52.3-116.5-116.5V170.7h768v715.5c0 64.2-52.3 116.5-116.5 116.5zM213.3 256v630.1c0 17.2 14 31.2 31.2 31.2h534.9c17.2 0 31.2-14 31.2-31.2V256H213.3z", "fill", "#3688FF"], ["d", "M917.3 256H106.7C83.1 256 64 236.9 64 213.3s19.1-42.7 42.7-42.7h810.7c23.6 0 42.7 19.1 42.7 42.7S940.9 256 917.3 256zM618.7 128H405.3c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h213.3c23.6 0 42.7 19.1 42.7 42.7S642.2 128 618.7 128zM405.3 725.3c-23.6 0-42.7-19.1-42.7-42.7v-256c0-23.6 19.1-42.7 42.7-42.7S448 403 448 426.6v256c0 23.6-19.1 42.7-42.7 42.7zM618.7 725.3c-23.6 0-42.7-19.1-42.7-42.7v-256c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v256c-0.1 23.6-19.2 42.7-42.7 42.7z", "fill", "#5F6379"], [1, "kt-ctv-btn-two"], ["type", "button", "data-to", "#pills-1-tab", 1, "btn", "btn-primary", "my-ct-v-btn-back", "btn-prev"], ["type", "button", "data-to", "#pills-3-tab", 1, "btn", "btn-primary", "my-ct-v-btn", "btn-next"], ["id", "pills-3", "role", "tabpanel", "aria-labelledby", "pills-contact-tab", 1, "tab-pane", "fade"], ["type", "text", "placeholder", "Select Option", 1, "form-control", "ng-pristine"], [1, "kt-support-view"], [1, "symbol-group", "symbol-hover", "flex-nowrap"], ["data-bs-toggle", "tooltip", "data-bs-original-title", "Alan Warden", "data-kt-initialized", "1", 1, "symbol", "symbol-35px", "symbol-circle"], [1, "symbol-label", "bg-warning", "text-inverse-warning", "fw-bold"], ["data-bs-toggle", "tooltip", "aria-label", "Michael Eberon", "data-bs-original-title", "Michael Eberon", "data-kt-initialized", "1", 1, "symbol", "symbol-35px", "symbol-circle"], ["alt", "Pic", "src", "https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-11.jpg"], ["data-bs-toggle", "tooltip", "data-bs-original-title", "Susan Redwood", "data-kt-initialized", "1", 1, "symbol", "symbol-35px", "symbol-circle"], [1, "symbol-label", "bg-primary", "text-inverse-primary", "fw-bold"], ["data-bs-toggle", "tooltip", "aria-label", "Melody Macy", "data-bs-original-title", "Melody Macy", "data-kt-initialized", "1", 1, "symbol", "symbol-35px", "symbol-circle"], ["alt", "Pic", "src", "https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-2.jpg"], ["data-bs-toggle", "tooltip", "data-bs-original-title", "Perry Matthew", "data-kt-initialized", "1", 1, "symbol", "symbol-35px", "symbol-circle"], [1, "symbol-label", "bg-danger", "text-inverse-danger", "fw-bold"], ["data-bs-toggle", "tooltip", "aria-label", "Barry Walter", "data-bs-original-title", "Barry Walter", "data-kt-initialized", "1", 1, "symbol", "symbol-35px", "symbol-circle"], ["alt", "Pic", "src", "https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-12.jpg"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#kt_modal_view_users", 1, "symbol", "symbol-35px", "symbol-circle"], [1, "symbol-label", "bg-dark", "text-gray-300", "fs-8", "fw-bold"], ["type", "button", "data-to", "#pills-2-tab", 1, "btn", "btn-primary", "my-ct-v-btn-back", "btn-prev"], ["type", "button", "data-to", "#pills-4-tab", 1, "btn", "btn-primary", "my-ct-v-btn", "btn-next"], ["id", "pills-4", "role", "tabpanel", "aria-labelledby", "pills-contact-tab", 1, "tab-pane", "fade"], [1, "section-bottom", "Adv-option"], ["type", "date", "placeholder", "Select Date", 1, "form-control", "ng-pristine"], [1, "formbold-mb-5", "formbold-file-input"], ["type", "file", "name", "file", "id", "file"], ["for", "file"], [1, "formbold-drop-file"], [1, "formbold-or"], [1, "formbold-browse"], [1, "formbold-file-list", "formbold-mb-5"], [1, "formbold-file-item"], [1, "formbold-file-name"], ["width", "10", "height", "10", "viewBox", "0 0 10 10", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z", "fill", "currentColor"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z", "fill", "currentColor"], [1, "kt-ctv-btn-two", "Adv-option"], ["type", "button", "data-to", "#pills-3-tab", 1, "btn", "btn-primary", "my-ct-v-btn-back", "btn-prev"], ["type", "button", "data-to", "#pills-4-tab", 1, "btn", "btn-primary", "my-ct-v-btn", "btn-next", "Action-v-btn", 3, "click"], [1, "my-crd", "mb-6", "mb-xl-9", "d-none"], [1, "card-body", "pt-9", "pb-0"], [1, "d-flex", "flex-wrap", "flex-sm-nowrap", "mb-6"], [1, "d-flex", "flex-center", "flex-shrink-0", "bg-light", "rounded", "w-100px", "h-100px", "w-lg-150px", "h-lg-150px", "me-2", "mb-2"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACg0lEQVR4nO1avW7bMBDWlr0gByq1gaJ5hCRAhw5ZiiAuUPQB3K0OyNSZOrVAwCVZssRAu3RxqQB9ARud00rOnowd+gbx7B8BLGhbjiooUuSYpqTcBxAGhNOR/HD3HS2eZQGmePJ0fxsR1sOEDbHNZOEHYUO1H7UvKw2o2iCYsL7xReshoq/2l0wAoY2pMe1sbDTXrAWBCeUzP9y0vdoHJqyr7BFh75e6kCIQkMkeAwEUIgCbFiutQnjfFLBLOkADKIigBVUgARiqAI0tg8g+eI0IHcQJi3qO1mktjciwj+g7JuwzRQBap7VkAtheKgEhH9F3TNhnIiArcnO0zWqPgQAKEYAhBVghq4BWDUAFqAJaCciK3Kh6VnsMBFCIAAwpwLRVAWxP7xpI5VCefbqSnuNPRvNdZ+JL/QbPksZD7V0xHrrC711+H22vrApsbp7USaUpAwJan6+NETAfYtz/dS5v7wp0iqDr+I3ZxJ2fLblmsgqo+V3hd6ck+Ld3BVoJEGM+Cz+ehzIYux68AgK0hvQC9kCAgAjgkAJ50YD62x9/ohUiQFi5S6sBb159u0jyG/goPQFuxDZYJBAgIAI4pIDzCDTgLpQ+BeqPvQw2Tf8XQPM2OdZddpucKQIu2gO5u/NlYn/04XcKAdXyNko+e/5Rdr7eJBMwb5W1qVeWVlm7cihfvjiV7eO/sRES931CC5JSYJGhBPEuwYzivy9A5SFgzJcxf+EJcFP8ptkBAQIigEMKrAKgAQJEkEMVcKAMSjgIOXAUlstMhVUfqXNTBYAAp2gR4MwbJPI1wg0SOqFaUVRLSr42H2mR0Q3VlOQ5vqealAznvZrf652PtrRv2ioI/gGpqVHaVMedFgAAAABJRU5ErkJggg==", "alt", "image", 1, "mw-50px", "mw-lg-75px"], [1, "d-flex", "justify-content-between", "align-items-start", "flex-wrap", "mb-2"], [1, "d-flex", "flex-column"], [1, "d-flex", "align-items-center", "mb-1"], ["href", "#", 1, "text-gray-800", "text-hover-primary", "fs-2", "fw-bold", "me-3"], [1, "d-flex", "flex-wrap", "fw-semibold", "mb-2", "fs-5", "text-gray-400"], [1, "flex-grow-1", "w-100"], [1, "d-flex", "flex-wrap"], [1, "dtl-bg-light-v", "border", "border-gray-300", "border-dashed", "rounded", "min-w-125px", "py-3", "px-4", "me-8", "mr-2"], [1, "fs-7", "fw-stl"], [1, "fw-semi-lt", "fs-8"], [1, "wd-xv"], ["id", "Action_btn_hide", 1, "kt-ctv-btn-two", "act-view-btns", "d-none"], [1, "justify-content-between", "d-flex", "align-items-center", "w-100"], [1, "kt-left-option"], [1, "form-group", "mb-0"], [1, "checkbox-list"], [1, "checkbox", "kt-fnt-vd"], ["type", "checkbox", "name", "Checkboxes1"], [1, "kt-right-act-btn"], ["type", "button", 1, "btn", "btn-primary", "my-ct-v-btn-back", "btn-prev", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "my-ct-v-btn", "btn-next", 3, "click"], ["id", "act_bd_box", 1, "act-bd-box", "d-none"], [1, "kt-action-list", "d-none"], [1, "col-lg-5", "open-Action-Form", "d-none"], [1, "right-side-act"], [1, "Act-tittle-Right"], [1, "kt-Action-Form"], ["type", "text", "placeholder", "Enter Action Name...", 1, "form-control", "ng-pristine"], ["data-kt-autosize", "true", "placeholder", "Add action Description...", 1, "form-control", "form-control", "kt-desc-textarea"], ["placeholder", "Select Employee..", 1, "kt-form-vd"], [1, "col-lg-6", "mb-1"], ["_ngcontent-onv-c392", "", "type", "date", "placeholder", "Start Date", 1, "form-control", "ng-pristine"], ["_ngcontent-onv-c392", "", "type", "date", "placeholder", "End Date", 1, "form-control", "ng-pristine"], ["_ngcontent-onv-c392", "", "type", "number", "placeholder", "Enter Total Hours", 1, "form-control", "ng-pristine"], ["data-kt-autosize", "true", "placeholder", "Enter Action remarks if any...", 1, "form-control", "form-control", "kt-desc-textarea"], ["for", "file", 1, "my-chosse-flv"], [1, "kt-portlet__foot", "d-none", "px-3", "py-2"], [1, "container-fluid", "Add-Act-Move"], [1, "col-lg-7", "Project-Ct-full"], [1, "kt-ctv-btn-two", "mt-0"], ["type", "button", 1, "btn", "btn-primary", "my-ct-v-btn", "btn-next"], [1, "col-lg-5", "hide-act-btns"], [1, "kt-ctv-btn-two", "mt-0", "kt-right-style"], ["type", "button", 1, "btn", "btn-primary", "my-ct-v-btn-back", "sm-btn-close", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "my-ct-v-btn", "sm-btn-submit"], ["id", "rightbar-overlay", 3, "click"], [1, "kt-checkbox"], ["type", "checkbox", 3, "ngModel", "change", "ngModelChange"], [1, "count-btn"], [1, "kt-checkbox", "mb-3"], ["type", "checkbox", 3, "ngModel", "checked", "change", "ngModelChange"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "click"], ["role", "row", 1, "odd"], ["align", "center"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "More Info!", 1, "btn", "px-0", "mr-2"], [1, "fa", "fa-chart-bar", "info-icon-cir", 3, "click"], [4, "ngIf", "ngIfElse"], ["not_Linked", ""], [1, "kt-widget__title", "mb-0"], ["class", "count2", 4, "ngIf"], [1, "kt-widget__other"], ["ReportType", ""], ["Projecttype", ""], ["data-toggle", "tooltip", "data-placement", "top", 3, "title"], [1, "kt-widget__other", "text-info"], ["data-toggle", "tooltip", "data-placement", "top", "title", "RACIS"], [1, "kt-widget__details"], [1, "kt-section__content", "kt-section__content--solid"], [1, "kt-media-group"], ["data-toggle", "kt-tooltip", "data-skin", "brand", "data-placement", "top", "data-original-title", "John Myer", "class", "kt-media kt-media--sm kt-media--circle", 3, "title", 4, "ngIf"], ["data-toggle", "kt-tooltip", "data-skin", "brand", "data-placement", "top", "data-original-title", "Micheal York", "class", "kt-media kt-media--sm kt-media--circle", 3, "title", 4, "ngIf"], [1, "pin-icn", "d-none"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pin-angle-fill"], ["d", "M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"], [1, "stat-td"], [1, "curser-pointer", 3, "click"], ["width", "19px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png", "title", "Linked"], ["width", "19px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png", "title", "Not Linked", 1, "black-white"], [1, "count2"], [1, "kt-widget__other", "text-nowrap"], ["data-toggle", "kt-tooltip", "data-skin", "brand", "data-placement", "top", "data-original-title", "John Myer", 1, "kt-media", "kt-media--sm", "kt-media--circle", 3, "title"], ["data-toggle", "kt-tooltip", "data-skin", "brand", "data-placement", "top", "data-original-title", "Micheal York", 1, "kt-media", "kt-media--sm", "kt-media--circle", 3, "title"], [1, "text-info", "font-weight-400"], [1, "text-danger", "font-weight-400"], ["class", "text-danger delayDays", 4, "ngIf"], [1, "text-danger", "delayDays"], [1, "text-warning", "font-weight-400"], [1, "text-primary", "font-weight-400"], [1, "text-cancel", "font-weight-400"], [1, "text-success", "font-weight-400"], [1, "font-weight-400", 2, "color", "#c0b5dc"], [1, "text-center", "py-4", 2, "color", "lightgrey"], ["Onlysubject", ""], [1, "fas", "fa-paperclip", 2, "color", "#A9A9A9"], [1, "fas", "fa-circle"]], template: function ProjectsSummaryComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 10)(15, "a", 11)(16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_i_click_16_listener() { return ctx.Open_project_info(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "a", 11)(18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_18_listener() { return ctx.OpenProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19, "Add New Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 14)(21, "div", 15)(22, "div", 16)(23, "div", 17)(24, "div", 18)(25, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectsSummaryComponent_Template_input_ngModelChange_25_listener($event) { return ctx.searchText = $event; })("keydown.enter", function ProjectsSummaryComponent_Template_input_keydown_enter_25_listener($event) { return ctx.search($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "div", 20)(27, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_27_listener() { return ctx.SearchbyText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](28, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](30, ProjectsSummaryComponent_ng_container_30_Template, 2, 2, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](31, ProjectsSummaryComponent_ng_container_31_Template, 2, 2, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](32, ProjectsSummaryComponent_ng_container_32_Template, 2, 2, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](34, ProjectsSummaryComponent_span_34_Template, 2, 1, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](35, ProjectsSummaryComponent_span_35_Template, 2, 1, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_36_listener() { ctx.CurrentPageNo = ctx.CurrentPageNo - 1; return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](37, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_38_listener() { ctx.CurrentPageNo = ctx.CurrentPageNo + 1; return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](39, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 28)(41, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_a_click_41_listener() { return ctx._SortProjectList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](42, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_a_click_43_listener() { return ctx._SortProjectList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](44, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "div", 33)(46, "ul", 34)(47, "li", 35)(48, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](49, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](50, "div", 38)(51, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_div_click_51_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](52, "div", 1)(53, "div", 40)(54, "h5")(55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](56, "Total Projects - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](57, "h5", 41)(58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](60, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](61, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](62, "div", 1)(63, "div", 43)(64, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ProjectsSummaryComponent_Template_input_ngModelChange_64_listener($event) { return ctx.txtSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](66, "div", 1)(67, "div", 45)(68, "div", 46)(69, "p")(70, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](71, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](72, ProjectsSummaryComponent_div_72_Template, 7, 3, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](73, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](74, "div", 45)(75, "div", 46)(76, "p")(77, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](78, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](79, ProjectsSummaryComponent_div_79_Template, 7, 4, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](80, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](81, ProjectsSummaryComponent_div_81_Template, 8, 2, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](82, "div", 45)(83, "div", 46)(84, "p")(85, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](86, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](87, ProjectsSummaryComponent_div_87_Template, 7, 4, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](88, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](89, "br")(90, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](91, "div", 1)(92, "div", 40)(93, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](94, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](95, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_95_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](96, "Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](97, "div", 51)(98, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](99, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](100, "div", 53)(101, "ul", 54)(102, "li", 55)(103, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](104, "User Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](105, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](106, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](107, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](108, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_li_click_108_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](109, "div", 1)(110, "div", 60)(111, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](112, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](113, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](114, "div", 62)(115, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](116, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](117, " Core Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](119, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](120, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](121, " Routine Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](123, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](124, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](125, " Secondary Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](126, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](127, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](128, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](129, " Standard Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](130, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](131, "div", 65)(132, "div", 66)(133, "div", 67)(134, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](135, " Core Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](136, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](137, "svg", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](138, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](139, "div", 66)(140, "div", 67)(141, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](142, " Routine Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](143, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](144, "svg", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](145, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](146, "div", 60)(147, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](148, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](149, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](150, "div", 62)(151, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](152, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](153, " Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](154, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](155, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](156, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](157, " Completion Under Approval ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](158, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](159, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](160, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](161, " InProcess ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](162, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](163, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](164, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](165, " Hold ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](166, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](167, "div", 65)(168, "div", 66)(169, "div", 67)(170, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](171, " Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](172, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](173, "svg", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](174, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](175, "div", 66)(176, "div", 67)(177, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](178, " InProcess ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](179, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](180, "svg", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](181, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](182, "div", 60)(183, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](184, "Employees ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](185, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](186, "div", 62)(187, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](188, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](189, " User 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](190, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](191, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](192, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](193, " User 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](194, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](195, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](196, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](197, " User 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](198, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](199, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](200, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](201, " User 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](202, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](203, "div", 65)(204, "div", 66)(205, "div", 67)(206, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](207, " User 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](208, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](209, "svg", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](210, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](211, "div", 66)(212, "div", 67)(213, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](214, " User 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](215, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](216, "svg", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](217, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](218, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](219, "li", 72)(220, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](221, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](222, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](223, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](224, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_224_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](225, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](226, "div", 77)(227, "div", 1)(228, "div", 78)(229, "div", 79)(230, "div", 80)(231, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](232, "svg", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](233, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](234, "div", 80)(235, "h5", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](236, "New Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](237, "h4", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](238, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](239, "div", 78)(240, "div", 79)(241, "div", 80)(242, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](243, "svg", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](244, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](245, "div", 80)(246, "h5", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](247, "Inprocess");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](248, "h4", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](249, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](250, "div", 78)(251, "div", 79)(252, "div", 80)(253, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](254, "svg", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](255, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](256, "div", 80)(257, "h5", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](258, "Under Approval");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](259, "h4", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](260, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](261, "div", 78)(262, "div", 79)(263, "div", 80)(264, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](265, "svg", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](266, "path", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](267, "div", 80)(268, "h5", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](269, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](270, "h4", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](271, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](272, "div", 90)(273, "div", 91)(274, "div", 92)(275, "div", 93)(276, "div", 94)(277, "div", 1)(278, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](279, ProjectsSummaryComponent_span_279_Template, 2, 1, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](280, "div", 96)(281, "table", 97)(282, "thead")(283, "tr", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](284, "th", 99)(285, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](286, "th", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_th_click_286_listener() { return ctx._SortPortfoliolist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](287, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](288, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](289, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](290, "i", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](291, " ProjectName ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](292, "th", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](293, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](294, " ProjectType ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](295, "th", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](296, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](297, " Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](298, "th", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](299, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](300, " Responsible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](301, "th", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](302, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](303, " Deadline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](304, "th", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](305, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](306, " Last Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](307, "th", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](308, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](309, " RACIS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](310, "th", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](311, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](312, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](313, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](314, ProjectsSummaryComponent_tr_314_Template, 71, 47, "tr", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](315, ProjectsSummaryComponent_div_315_Template, 5, 2, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](316, "div", 113)(317, "div", 114)(318, "div", 5)(319, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_a_click_319_listener() { return ctx._CloseMemosidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](320, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](321, "div", 116)(322, "h5", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](323, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](324, " Linked Memos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](325, "span", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](326);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](327, "div", 120)(328, "div", 121)(329, "div", 93)(330, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](331, ProjectsSummaryComponent_div_331_Template, 6, 2, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](332, "div", 124)(333, "div", 114)(334, "div", 5)(335, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_a_click_335_listener() { return ctx._CloseDARSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](336, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](337, "div", 116)(338, "h5", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](339, " DAR Achievements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](340, "div", 120)(341, "div", 121)(342, "div", 93)(343, "div", 122)(344, "div", 125)(345, "div", 126)(346, "h5", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](347);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](348, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](349, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](350, "div", 128)(351, "div", 129)(352, "div", 130)(353, "div", 131)(354, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](355, "svg", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](356, "g", 134)(357, "g", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](358, "g", 136)(359, "g", 137)(360, "g", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](361, "rect", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](362, "g", 140)(363, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](364, "rect", 141)(365, "rect", 142)(366, "rect", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](367, " Project Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](368, "div", 144)(369, "div", 145)(370, "div", 146)(371, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](372, "Preventive Maintenance plan for Equipment, RO and RC for month of june 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](373, "div", 147)(374, "div", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](375, " Core Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](376, "div", 149)(377, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](378, "This report solidifies the current available candidates for the final interview session to be conducted by the Chairman");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](379, "div", 150)(380, "div", 145)(381, "div", 131)(382, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](383, "svg", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](384, "g", 134)(385, "g", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](386, "g", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](387, "path", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](388, " Project Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](389, "div", 147)(390, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](391, " More info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](392, "div", 154)(393, "div", 155)(394, "div", 156)(395, "span", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](396, "svg", 158)(397, "g", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](398, "path", 160)(399, "path", 161)(400, "path", 162)(401, "path", 163)(402, "path", 164)(403, "path", 165)(404, "path", 166)(405, "path", 167)(406, "path", 168)(407, "path", 169)(408, "path", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](409, " Owner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](410, "div", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](411, " Mohammed Asif ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](412, "div", 155)(413, "div", 156)(414, "span", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](415, "svg", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](416, "path", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](417, " Responsible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](418, "div", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](419, " Allen Steve ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](420, "div", 155)(421, "div", 156)(422, "span", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](423, "svg", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](424, "path", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](425, " Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](426, "div", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](427, " Recruitment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](428, "div", 155)(429, "div", 156)(430, "span", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](431, "svg", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](432, "path", 178)(433, "path", 179)(434, "path", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](435, " Cost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](436, "div", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](437, " 120.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](438, "div", 155)(439, "div", 156)(440, "span", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](441, "svg", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](442, "path", 182)(443, "path", 183)(444, "path", 184)(445, "path", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](446, " Client ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](447, "div", 186)(448, "div", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](449, "img", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](450, "div", 150)(451, "div", 145)(452, "div", 131)(453, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](454, "svg", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](455, "g", 134)(456, "g", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](457, "g", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](458, "defs", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](459, "g", 191)(460, "g", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](461, "path", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](462, "g", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](463, "path", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](464, "g", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](465, "path", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](466, "g", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](467, "path", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](468, " Project States ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](469, "div", 147)(470, "div", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](471, " Delay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](472, "div", 201)(473, "div", 202)(474, "div", 1)(475, "div", 155)(476, "div", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](477, " Starting date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](478, "div", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](479, " 12-08-2023 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](480, "div", 155)(481, "div", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](482, " Ending date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](483, "div", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](484, " 09-04-2024 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](485, "div", 155)(486, "div", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](487, " Duration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](488, "div", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](489, " 30 days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](490, "div", 155)(491, "div", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](492, " Allocated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](493, "div", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](494, " 45 hrs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](495, "div", 204)(496, "div", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](497, "div", 206)(498, "div", 207)(499, "div", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](500, "div", 209)(501, "div", 210)(502, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](503, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](504, " in Progress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](505, "div", 211)(506, "div", 210)(507, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](508, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](509, " Delay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](510, "div", 211)(511, "div", 210)(512, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](513, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](514, " Done ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](515, "div", 212)(516, "div", 213)(517, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](518, "2/8");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](519, "div", 214)(520, "div", 145)(521, "div", 131)(522, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](523, "svg", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](524, "g", 134)(525, "g", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](526, "g", 136)(527, "g", 216)(528, "g", 217)(529, "g", 218)(530, "g", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](531, "path", 220)(532, "polyline", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](533, "g", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](534, "path", 223)(535, "polyline", 224)(536, "circle", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](537, "g", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](538, "line", 227)(539, "line", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](540, "g", 229)(541, "g", 230)(542, "g", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](543, "path", 232)(544, "polyline", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](545, "g", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](546, "path", 235)(547, "polyline", 236)(548, "circle", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](549, "g", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](550, "line", 239)(551, "line", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](552, " Request Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](553, "div", 147)(554, "div", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](555, " Deadline Extend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](556, "div", 154)(557, "div", 60)(558, "div", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](559, "New Deadline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](560, "div", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](561, " 12-10-2023 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](562, "div", 243)(563, "div", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](564, "Resion for extend deadline");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](565, "div", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](566, " Still collecting more CV's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](567, "div", 244)(568, "div", 245)(569, "div", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](570, "Approval*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](571, "div", 246)(572, "button", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](573, "Accept");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](574, "div", 246)(575, "button", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](576, "Edit & Accept");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](577, "div", 246)(578, "button", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](579, "Conditional Accept");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](580, "div", 246)(581, "button", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](582, "Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](583, "div", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](584, "textarea", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](585, "div", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](586, "div", 254)(587, "div", 255)(588, "div", 2)(589, "div", 256)(590, "button", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_590_listener() { return ctx.close_info_Slide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](591, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](592, "button", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](593, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](594, "div", 259)(595, "div", 260)(596, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](597, "Create a Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](598, "div", 261)(599, "div", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_div_click_599_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](600, "svg", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](601, "path", 264)(602, "path", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](603, "div", 266)(604, "div", 267)(605, "div", 1)(606, "div", 268)(607, "ul", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](608, "div", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](609, "li", 271)(610, "a", 272)(611, "span", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](612, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](613, "span", 274);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](614, "Project Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](615, "li", 271)(616, "a", 275)(617, "span", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](618, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](619, "span", 274);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](620, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](621, "li", 271)(622, "a", 276)(623, "span", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](624, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](625, "span", 274);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](626, "Add People");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](627, "li", 271)(628, "a", 277)(629, "span", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](630, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](631, "span", 274);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](632, "Advance Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](633, "div", 278)(634, "div", 279)(635, "div", 280)(636, "section", 281)(637, "div")(638, "div", 282)(639, "div", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](640, "svg", 284)(641, "g", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](642, "rect", 286);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](643, "g", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](644, "path", 288)(645, "path", 289)(646, "path", 290)(647, "path", 291)(648, "path", 292)(649, "path", 293)(650, "path", 294);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](651, "g", 295);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](652, "path", 296)(653, "path", 297);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](654, "g", 298);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](655, "path", 299)(656, "path", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](657, "polygon", 301)(658, "path", 302)(659, "path", 303)(660, "path", 304)(661, "path", 305);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](662, "div", 306)(663, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](664, "Start From Scratech");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](665, "div")(666, "div", 307)(667, "div", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](668, "svg", 308)(669, "g", 309)(670, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](671, "rect", 310);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](672, "g", 311);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](673, "ellipse", 312)(674, "ellipse", 313)(675, "ellipse", 314)(676, "circle", 315)(677, "path", 316)(678, "path", 317)(679, "path", 318);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](680, "div", 306)(681, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](682, "Assigned projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](683, "div")(684, "div", 307)(685, "div", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](686, "svg", 319);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](687, "g", 134)(688, "g", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](689, "g", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](690, "path", 320)(691, "path", 321)(692, "path", 322)(693, "path", 323)(694, "path", 324)(695, "path", 325)(696, "path", 326)(697, "path", 327)(698, "path", 328)(699, "path", 329);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](700, "div", 306)(701, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](702, "Templates");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](703, "div", 330)(704, "button", 331);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](705, "Next Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](706, "div", 332)(707, "div", 280)(708, "div", 333)(709, "div", 1)(710, "div", 334)(711, "div", 335)(712, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](713, "Assigned / conditional projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](714, "div", 2)(715, "div", 336)(716, "div", 337)(717, "div", 338)(718, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](719, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](720, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](721, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](722, "div", 339)(723, "div", 340)(724, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](725, "Devbox UI Design Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](726, "div", 341)(727, "div", 342)(728, "span", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](729, "svg", 344);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](730, "path", 345)(731, "path", 346);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](732, "span", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](733, "12-04-2022 - 02-05-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](734, "div", 342)(735, "span", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](736, "svg", 348);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](737, "g", 134)(738, "g", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](739, "g", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](740, "path", 349)(741, "path", 350)(742, "path", 351)(743, "path", 352);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](744, "span", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](745, "10 Hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](746, "div", 342)(747, "span", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](748, "svg", 344);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](749, "path", 353)(750, "path", 354)(751, "path", 355);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](752, "span", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](753, "Ramesh Nalapalli");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](754, "div", 356)(755, "div", 79)(756, "div", 357)(757, "span", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](758, "svg", 359);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](759, "g", 134)(760, "g", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](761, "g", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](762, "circle", 360)(763, "path", 361)(764, "path", 362);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](765, "div", 363)(766, "span", 364);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_span_click_766_listener() { return ctx.APPV_view(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](767, "svg", 365);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](768, "g", 134)(769, "g", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](770, "g", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](771, "circle", 366)(772, "path", 367);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](773, "div", 337)(774, "div", 338)(775, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](776, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](777, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](778, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](779, "div", 339)(780, "div", 340)(781, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](782, "YRG Develoment Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](783, "div", 341)(784, "div", 342)(785, "span", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](786, "svg", 344);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](787, "path", 345)(788, "path", 346);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](789, "span", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](790, "12-04-2022 - 02-05-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](791, "div", 342)(792, "span", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](793, "svg", 348);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](794, "g", 134)(795, "g", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](796, "g", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](797, "path", 349)(798, "path", 350)(799, "path", 351)(800, "path", 352);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](801, "span", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](802, "10 Hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](803, "div", 342)(804, "span", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](805, "svg", 344);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](806, "path", 353)(807, "path", 354)(808, "path", 355);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](809, "span", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](810, "Ramesh Nalapalli");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](811, "div", 356)(812, "div", 79)(813, "div", 357)(814, "span", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](815, "svg", 359);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](816, "g", 134)(817, "g", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](818, "g", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](819, "circle", 360)(820, "path", 361)(821, "path", 362);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](822, "div", 363)(823, "span", 364);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_span_click_823_listener() { return ctx.APPV_view(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](824, "svg", 365);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](825, "g", 134)(826, "g", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](827, "g", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](828, "circle", 366)(829, "path", 367);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](830, "div", 368)(831, "div", 1)(832, "div", 369)(833, "div", 370)(834, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](835, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](836, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](837, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](838, "input", 372);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](839, "div", 369)(840, "div", 370)(841, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](842, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](843, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](844, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](845, "textarea", 373);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](846, "div", 374)(847, "div", 370)(848, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](849, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](850, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](851, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](852, "ng-select", 375)(853, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](854, "Core Rask");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](855, "div", 374)(856, "div", 370)(857, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](858, "Select Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](859, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](860, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](861, "ng-select", 375)(862, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](863, "Devbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](864, "div", 374)(865, "div", 370)(866, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](867, "Select Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](868, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](869, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](870, "ng-select", 375)(871, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](872, "Devbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](873, "div", 374)(874, "div", 370)(875, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](876, "project location");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](877, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](878, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](879, "input", 376);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](880, "div", 2)(881, "div", 335)(882, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](883, "Project Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](884, "div", 337)(885, "div", 338)(886, "span", 377);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](887, "svg", 378);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](888, "path", 379)(889, "path", 380);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](890, "div", 339)(891, "div", 340)(892, "a", 381);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](893, "https://maps.app.goo.gl/i6pCxHn5imNotrhq5");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](894, "div", 356)(895, "div", 79)(896, "div", 357)(897, "span", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](898, "svg", 382);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](899, "path", 383)(900, "path", 384);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](901, "div", 363)(902, "span", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](903, "svg", 385);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](904, "path", 386)(905, "path", 387);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](906, "div", 337)(907, "div", 338)(908, "span", 377);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](909, "svg", 378);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](910, "path", 379)(911, "path", 380);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](912, "div", 339)(913, "div", 340)(914, "a", 381);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](915, "https://maps.app.goo.gl/i6pCxHn5imNotrhq5");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](916, "div", 356)(917, "div", 79)(918, "div", 357)(919, "span", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](920, "svg", 382);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](921, "path", 383)(922, "path", 384);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](923, "div", 363)(924, "span", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](925, "svg", 385);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](926, "path", 386)(927, "path", 387);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](928, "div", 388)(929, "button", 389);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](930, "Previous Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](931, "button", 390);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](932, "Next Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](933, "div", 391)(934, "div", 280)(935, "div", 1)(936, "div", 374)(937, "div", 370)(938, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](939, "Select Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](940, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](941, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](942, "ng-select", 375)(943, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](944, "Waseem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](945, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](946, "Shanhaz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](947, "div", 374)(948, "div", 370)(949, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](950, "Responsible");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](951, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](952, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](953, "ng-select", 375)(954, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](955, "Waseem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](956, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](957, "Shanhaz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](958, "div", 374)(959, "div", 370)(960, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](961, "Authority");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](962, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](963, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](964, "ng-select", 375)(965, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](966, "Devbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](967, "div", 374)(968, "div", 370)(969, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](970, "Coordinating");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](971, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](972, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](973, "ng-select", 375)(974, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](975, "Devbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](976, "div", 374)(977, "div", 370)(978, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](979, "Inform");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](980, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](981, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](982, "ng-select", 375)(983, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](984, "Devbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](985, "div", 374)(986, "div", 370)(987, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](988, "Auditor (Optional):");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](989, "input", 392);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](990, "div", 369)(991, "div", 370)(992, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](993, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](994, "ng-select", 375)(995, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](996, "Devbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](997, "div", 2)(998, "div", 393)(999, "div", 394)(1000, "div", 395)(1001, "span", 396);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1002, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1003, "div", 397);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1004, "img", 398);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1005, "div", 399)(1006, "span", 400);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1007, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1008, "div", 401);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1009, "img", 402);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1010, "div", 403)(1011, "span", 404);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1012, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1013, "div", 405);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1014, "img", 406);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1015, "a", 407)(1016, "span", 408);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1017, "+42");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1018, "div", 388)(1019, "button", 409);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1020, "Previous Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1021, "button", 410);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1022, "Next Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1023, "div", 411)(1024, "div", 412)(1025, "div", 1)(1026, "div", 374)(1027, "div", 370)(1028, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1029, "Start Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1030, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1031, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1032, "input", 413);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1033, "div", 374)(1034, "div", 370)(1035, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1036, "End Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1037, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1038, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1039, "input", 413);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1040, "div", 369)(1041, "div", 370)(1042, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1043, "Reference Attachment");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1044, "div", 414);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1045, "input", 415);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1046, "label", 416)(1047, "div")(1048, "span", 417);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1049, " Drop files here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1050, "span", 418);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1051, " Or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1052, "span", 419);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1053, " Browse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1054, "div", 420)(1055, "div", 421)(1056, "span", 422);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1057, " banner-design.png ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1058, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1059, "svg", 423);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1060, "path", 424)(1061, "path", 425);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1062, "div", 426)(1063, "button", 427);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1064, "Previous Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1065, "button", 428);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_1065_listener() { return ctx.Action_view(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1066, "Next Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1067, "div", 429)(1068, "div", 430)(1069, "div", 431)(1070, "div", 341)(1071, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1072, "img", 433);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1073, "div", 434)(1074, "div", 435)(1075, "div", 436)(1076, "a", 437);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1077, "CRM Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1078, "div", 438);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1079, " #1 Tool to get started with Web Apps any Kind& size ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1080, "div", 439)(1081, "div", 434)(1082, "div", 440)(1083, "div", 441)(1084, "div", 79)(1085, "div", 442);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1086, "Secondary Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1087, "div", 443);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1088, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1089, "div", 441)(1090, "div", 79)(1091, "div", 442);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1092, "29 Jan, 2023 - 31 Nov, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1093, "div", 443);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1094, "Project Duratioion");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1095, "div", 441)(1096, "div", 79)(1097, "div", 442);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1098, "SAR 8,454,00");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1099, "div", 443);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1100, "Budget Spent");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1101, "div", 441)(1102, "div", 79)(1103, "div", 442)(1104, "span", 444);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1105, "10 Hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1106, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1107, "span", 444);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1108, "10 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1109, "div", 443)(1110, "span", 444);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1111, "Allocated");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1112, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1113, "span", 444);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1114, "Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1115, "div", 445)(1116, "div", 446)(1117, "div", 447)(1118, "div", 448)(1119, "div", 449)(1120, "label", 450);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1121, "input", 451)(1122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1123, " Creating a project requires no actions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1124, "div", 452)(1125, "button", 453);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_1125_listener() { return ctx.Back_Option(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1126, "Back To Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1127, "button", 454);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_1127_listener() { return ctx.Add_actions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1128, "Add Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1129, "div", 455)(1130, "div", 446)(1131, "div", 335)(1132, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1133, "List of action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1134, "button", 454);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_1134_listener() { return ctx.Add_actions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1135, "Add Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1136, "div", 456)(1137, "div", 336)(1138, "div", 337)(1139, "div", 338)(1140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1141, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1142, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1143, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1144, "div", 339)(1145, "div", 340)(1146, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1147, "Devbox UI Design Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1148, "div", 341)(1149, "div", 342)(1150, "span", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1151, "svg", 344);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1152, "path", 345)(1153, "path", 346);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1154, "span", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1155, "12-04-2022 - 02-05-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1156, "div", 342)(1157, "span", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1158, "svg", 348);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1159, "g", 134)(1160, "g", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1161, "g", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1162, "path", 349)(1163, "path", 350)(1164, "path", 351)(1165, "path", 352);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1166, "span", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1167, "10 Hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1168, "div", 342)(1169, "span", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1170, "svg", 344);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1171, "path", 353)(1172, "path", 354)(1173, "path", 355);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1174, "span", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1175, "Ramesh Nalapalli");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1176, "div", 356)(1177, "div", 79)(1178, "div", 357)(1179, "span", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1180, "svg", 382);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1181, "path", 383)(1182, "path", 384);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1183, "div", 363)(1184, "span", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1185, "svg", 385);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1186, "path", 386)(1187, "path", 387);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1188, "div", 337)(1189, "div", 338)(1190, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1191, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1192, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1193, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1194, "div", 339)(1195, "div", 340)(1196, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1197, "Devbox Develoment");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1198, "div", 341)(1199, "div", 342)(1200, "span", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1201, "svg", 344);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1202, "path", 345)(1203, "path", 346);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1204, "span", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1205, "12-04-2022 - 02-05-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1206, "div", 342)(1207, "span", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1208, "svg", 348);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1209, "g", 134)(1210, "g", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1211, "g", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1212, "path", 349)(1213, "path", 350)(1214, "path", 351)(1215, "path", 352);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1216, "span", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1217, "10 Hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1218, "div", 342)(1219, "span", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1220, "svg", 344);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1221, "path", 353)(1222, "path", 354)(1223, "path", 355);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1224, "span", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1225, "Ramesh Nalapalli");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1226, "div", 356)(1227, "div", 79)(1228, "div", 357)(1229, "span", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1230, "svg", 382);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1231, "path", 383)(1232, "path", 384);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1233, "div", 363)(1234, "span", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1235, "svg", 385);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1236, "path", 386)(1237, "path", 387);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1238, "div", 457)(1239, "div", 458)(1240, "div", 459)(1241, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1242, "Action to Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1243, "div", 460)(1244, "div", 1)(1245, "div", 369)(1246, "div", 370)(1247, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1248, "Action Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1249, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1250, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1251, "input", 461);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1252, "div", 369)(1253, "div", 370)(1254, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1255, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1256, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1257, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1258, "textarea", 462);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1259, "div", 369)(1260, "div", 370)(1261, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1262, "Assign To");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1263, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1264, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1265, "ng-select", 463)(1266, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1267, "Ramesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1268, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1269, "Suresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1270, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1271, "Afzel");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1272, "div", 369)(1273, "div", 370)(1274, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1275, "Action Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1276, "ng-select", 463)(1277, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1278, "Ramesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1279, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1280, "Suresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1281, "ng-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1282, "Afzel");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1283, "div", 464)(1284, "div", 370)(1285, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1286, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1287, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1288, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1289, "input", 465);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1290, "div", 464)(1291, "div", 370)(1292, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1293, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1294, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1295, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1296, "input", 466);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1297, "div", 245)(1298, "div", 370)(1299, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1300, "Allocated Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1301, "span", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1302, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1303, "input", 467);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1304, "div", 369)(1305, "div", 370)(1306, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1307, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1308, "textarea", 468);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1309, "div", 369)(1310, "div", 370)(1311, "div", 414);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1312, "input", 415);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1313, "label", 469)(1314, "div")(1315, "span", 417);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1316, "Choose File");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1317, "div", 420)(1318, "div", 421)(1319, "span", 422);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1320, " banner-design.png ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1321, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1322, "svg", 423);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1323, "path", 424)(1324, "path", 425);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1325, "div", 470)(1326, "div", 471)(1327, "div", 1)(1328, "div", 472)(1329, "div", 473)(1330, "button", 453);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_1330_listener() { return ctx.Back_Option_Act(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1331, "Back To Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1332, "button", 474);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1333, "Create a Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1334, "div", 475)(1335, "div", 476)(1336, "button", 477);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_1336_listener() { return ctx.Close_action(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1337, " Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1338, "button", 478);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1339, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1340, "div", 479);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_div_click_1340_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx.Type, " Summary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx.Type == "RACIS Projects" ? "dropdown-item active" : "dropdown-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx.Type == "ALL Projects" ? "dropdown-item active" : "dropdown-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](13);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](73, 35, ctx.TypeContInFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](80, 38, ctx.StatusCountFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.cancelcheck == "1" && ctx.canceledit == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](88, 41, ctx.EmpCountInFilter, ctx.txtSearch));
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__["ɵr"], _sort_directive__WEBPACK_IMPORTED_MODULE_12__.SortDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__.Ng2SearchPipe, src_app_Shared_DateAgo_DateAgoPipe__WEBPACK_IMPORTED_MODULE_14__.DateAgoPipe], styles: [".list-icon-color[_ngcontent-%COMP%]{\r\n    color: #969696\r\n   }\r\n\r\n  .loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\r\n    background: #0dc5c1;\r\n    animation: load1 1s infinite ease-in-out;\r\n    width: 1em;\r\n    height: 4em;\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%] {\r\n    color: #0dc5c1;\r\n    text-indent: -9999em;\r\n    margin: 88px auto;\r\n    position: relative;\r\n    font-size: 11px;\r\n    transform: translateZ(0);\r\n    animation-delay: -0.16s;\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    top: 0;\r\n    content: '';\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%]:before {\r\n    left: -1.5em;\r\n    animation-delay: -0.32s;\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%]:after {\r\n    left: 1.5em;\r\n  }\r\n\r\n  @keyframes load1 {\r\n    0%,\r\n    80%,\r\n    100% {\r\n      box-shadow: 0 0;\r\n      height: 4em;\r\n    }\r\n    40% {\r\n      box-shadow: 0 -2em;\r\n      height: 5em;\r\n    }\r\n  }\r\n\r\n  .center[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 200px;\r\n  }\r\n\r\n  .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\r\n    border-radius: 2px;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]{\r\n  width: 400px;\r\n  height: auto;\r\n  max-height: 400px;\r\n  padding: 10px;\r\n  top: 38px !important;\r\n  left: auto !important;\r\n  right: 0px !important;\r\n  overflow-y: auto;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n  .ngx-pagination[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n}\r\n\r\n  #backBtn[_ngcontent-%COMP%]:hover{\r\n background-color:#5867dd ;\r\n color: white; \r\n}\r\n\r\n  #Mdl_closebtn[_ngcontent-%COMP%]:hover{\r\n  background-color: #dc3545;\r\n  color:white\r\n}\r\n\r\n  .text-warning-1[_ngcontent-%COMP%]{\r\n  background-color: #ffe0a7;\r\n  color:#FFA800;\r\n  width: auto;\r\n  padding: 4px 8px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  .text-danger-1[_ngcontent-%COMP%]{\r\n  color: #F64E60;\r\n  background-color: #FFE2E5;\r\n  width: auto;\r\n  padding: 4px 8px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%], .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-up[_ngcontent-%COMP%]{\r\n  border-top: 7px solid #adadad !important;\r\n    border-left: 7px solid transparent !important;\r\n    border-right: 7px solid transparent !important\r\n}\r\n\r\n  .multiselect-dropdown[_ngcontent-%COMP%]{\r\n  width: 80px !important;\r\n\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]{\r\n    border: 0;\r\n    background: none;\r\n    font-size: 16px;\r\n    outline: none !important;\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 30px;\r\n    width: 30px;\r\n    background-color: #f5f6fc;\r\n    border: 1px solid #b3bcff;\r\n    color: #5867dd;\r\n    transition: all 0.3s ease;\r\n    cursor: pointer;\r\n    margin: 0 8px 0 0;\r\n    border-radius: 0;\r\n    border-radius: 4px;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon[_ngcontent-%COMP%] {\r\n    height: 18px;\r\n    width: 18px;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]{\r\n  height: 25px;\r\n  width: 25px;\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{\r\n    fill: #5867dd;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\r\n    fill: #5867dd;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\r\n    fill: #fff;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{\r\n  fill: #fff;\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover, .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]{\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n  }\r\n\r\n  .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    color: #ccc;\r\n  }\r\n\r\n  .card-title[_ngcontent-%COMP%]   .favourite.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{\r\n    color: #ffc107;\r\n  }\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    border-color: #d6d6d6;\r\n  }\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.success {\r\n    border-left: 5px solid #1dc9b7;\r\n    \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.warning {\r\n    border-left: 5px solid #ffb822; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.info {\r\n    border-left: 5px solid #2786fb; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.danger {\r\n    border-left: 5px solid #F58A8B; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.UnderApprovals {\r\n  border-left: 5px solid #BD838C; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.ForwardUnderApproval {\r\n  border-left: 5px solid #E0B1D7; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.completeUnderApproval {\r\n  border-left: 5px solid #98c7bf; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.projectHold {\r\n  border-left: 5px solid #C0B5DC; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.HoldunderApp {\r\n  border-left: 5px solid #a85098; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.DeadlineExtended{\r\n  border-left: 5px solid #E0B1D7; \r\n}\r\n\r\n  .delayDays[_ngcontent-%COMP%]{\r\n  font-size: 11px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n  transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\r\n  fill: #5E5F63;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\r\n  padding: 0.2rem 20px;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%] {\r\n  width: 800px;\r\n  max-width: 100%;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  vertical-align: top;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n  .kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n  min-height: 60px;\r\n}\r\n\r\n  .kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n}\r\n\r\n  .dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc !important;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\r\n  background-color: transparent !important;\r\n  color: #74788D !important;\r\n  cursor: auto;\r\n}\r\n\r\n  .kt-nav__link-text[_ngcontent-%COMP%]:hover {\r\n  color: #74788D !important;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\r\n  background-color: rgba(154, 100, 142, 0.2);\r\n  color: #333 !important;\r\n  transition: all 0.3s;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\r\n  color: #333;\r\n}\r\n\r\n  .kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background: rgb(195, 195, 195);\r\n}\r\n\r\n  \r\n\r\n  .kt-quick-panel2[_ngcontent-%COMP%] {\r\n  width: 650px !important;\r\n}\r\n\r\n  .kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\r\n  right: -660px;\r\n  left: auto;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #F1F1F1;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\r\n  background-color: #FFFFFF !important;\r\n}\r\n\r\n  .chatcount[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  margin-left: -15px;\r\n  margin-top: -10px;\r\n}\r\n\r\n  .kt-badge.kt-badge--dark[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background: #8C8D92;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n  transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\r\n  fill: #5E5F63;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\r\n  padding: 0.2rem 20px;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-font-ReplyRequired[_ngcontent-%COMP%] {\r\n  color: #a6c !important;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%] {\r\n  width: 800px;\r\n  max-width: 100%;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  vertical-align: top;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n  .kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n  min-height: 60px;\r\n}\r\n\r\n  .kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n}\r\n\r\n  .dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc !important;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\r\n  background-color: transparent !important;\r\n  color: #74788D !important;\r\n  cursor: auto;\r\n}\r\n\r\n  .kt-nav__link-text[_ngcontent-%COMP%]:hover {\r\n  color: #74788D !important;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\r\n  background-color: rgba(154, 100, 142, 0.2);\r\n  color: #333 !important;\r\n  transition: all 0.3s;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\r\n  color: #333;\r\n}\r\n\r\n  .kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background: rgb(195, 195, 195);\r\n}\r\n\r\n  \r\n\r\n  .kt-quick-panel2[_ngcontent-%COMP%] {\r\n  width: 650px !important;\r\n}\r\n\r\n  .kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\r\n  right: -660px;\r\n  left: auto;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #F1F1F1;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background: none;\r\n  outline: none !important;\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 35px;\r\n  width: 35px;\r\n  background-color: #FFFFFF;\r\n  transition: all 0.3s ease;\r\n  cursor: pointer;\r\n  margin: 0;\r\n  border-radius: 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-badge.kt-badge--inline[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  width: auto;\r\n  padding: 0.15rem 0.75rem;\r\n  border-radius: 2px;\r\n  margin-left: 4px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%] {\r\n  padding: 17px;\r\n  width: 243px;\r\n}\r\n\r\n  \r\n\r\n  .Replied_border_left_true_warning[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #ffb822;\r\n}\r\n\r\n  .Replied_border_left_true_primary[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #95bed9;\r\n}\r\n\r\n  .Replied_border_left_true_success[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #95bed9;\r\n}\r\n\r\n  .Replied_border_left_true_Danger[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #F58A8B;\r\n}\r\n\r\n  .Replied_border_left_true_hold[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #c0b5dc\r\n}\r\n\r\n  .Replied_border_left_true_rejected[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #f5c293;\r\n}\r\n\r\n  .Replied_border_left_true_underApprovals[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #BD838C;\r\n}\r\n\r\n  .Replied_border_left_true_forwardUnderApproval[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #E0B1D7;\r\n}\r\n\r\n  .Replied_border_left_true_completeUnderApproval[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #98c7bf;\r\n}\r\n\r\n  .Replied_border_left_true_projectHold[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #C0B5DC;\r\n}\r\n\r\n  .Replied_border_left_true_NewProject[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #007bff;\r\n}\r\n\r\n  .Replied_border_left_true_DeadlineExtended[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #E0B1D7;\r\n}\r\n\r\n  .Replied_border_left_true_HoldunderApp[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #a85098;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%] {\r\n    margin-left: -17px;\r\n}\r\n\r\n  .icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  margin-right: 15px !important;\r\n  z-index: 2;\r\n}\r\n\r\n  .icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  width: 18px;\r\n    height: 18px;\r\n    text-align: center;\r\n    font-size: 10px;\r\n    font-weight: 700;\r\n  color: #fff;\r\n  background: #5867dd;\r\n  border: 1px solid #5867dd;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: -11px;\r\n  right: -11px;\r\n  z-index: 3;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]{\r\n  margin-top: 0px !important;\r\n}\r\n\r\n  .multiselect-dropdown[_ngcontent-unj-c40][_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-unj-c40][_ngcontent-%COMP%]{\r\n  width: 150px !important;\r\n}\r\n\r\n  \r\n\r\n  virtual-scroller[_ngcontent-%COMP%] {\r\n  \r\n  height: 200px;\r\n}\r\n\r\n  .vsdiv[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: 30px;\r\n}\r\n\r\n  \r\n\r\n  .sideInfobar[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 999;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: #ffffff;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  \r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%]{\r\n  background-color: #f5f6fc;\r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tcolor: #333;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n\r\n  .info-icon-cir[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: #5867dd;\r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]{\r\n  border-bottom: 0.07rem dashed #dedede;\r\n  padding: 6px;\r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%]{\r\n  border-bottom: 0.07rem dashed rgba(0,0,0,0.3);\r\n}\r\n\r\n  \r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%]{\r\n  font-weight: 600;\r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]{\r\n    width: 270px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n  .count-height[_ngcontent-%COMP%]{\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]   .justify-content-between[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #f1f1f1;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #ccc;\r\n}\r\n\r\n  .dropdown[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]{\r\n  border-color: #5867dd;\r\n}\r\n\r\n  .kt-checkbox[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\r\n  border: solid #5867dd;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown[_ngcontent-%COMP%] {\r\n  position: static !important;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    width: 60%;\r\n    \r\n    top: 20px !important;\r\n    left: -22px !important;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  border-bottom: 15px solid #fff;\r\n  border-right: 17px solid transparent;\r\n  border-left: 17px solid transparent;\r\n  position: absolute;\r\n  top: -15px;\r\n  left: 32px;\r\n  z-index: 10;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  border-bottom: 17px solid #ccc;\r\n  border-right: 19px solid transparent;\r\n  border-left: 19px solid transparent;\r\n  position: absolute;\r\n  top: -17px;\r\n  left: 30px;\r\n  z-index: 8;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu1[_ngcontent-%COMP%]   .filter-box[_ngcontent-%COMP%]{\r\n  width: 33.3333%;\r\n  display: inline-block;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){\r\n  width: 3%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){\r\n  width: 33%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3){\r\n  width: 10%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4){\r\n  width: 10%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5){\r\n  width: 15%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6){\r\n  width: 10%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(7), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7){\r\n  width: 10%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(8), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8){\r\n  width: 10%;\r\n}\r\n\r\n  .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{\r\n  \r\n  cursor: pointer;\r\n}\r\n\r\n  .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{\r\n  border: 1px solid #d6dbff;\r\n  border-radius: 5px;\r\n}\r\n\r\n  .show_entries[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 3px;\r\n  background-color: #fff;\r\n \r\n}\r\n\r\n  .show_entries[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n  \r\n  border: 2px solid rgba(88, 103, 221, 0.3);\r\n  color: #5867dd;\r\n  font-weight: bold;\r\n}\r\n\r\n  .count-btn[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  padding: 0px 10px;\r\n  font-weight: 700;\r\n  color: rgb(88, 88, 88);\r\n  font-size: 14px;\r\n  line-height: 25px;\r\n}\r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__toolbar[_ngcontent-%COMP%]   .kt-inbox__search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  height: 44px;\r\n  border: none;\r\n  background-color: #f2f3f7;\r\n}\r\n\r\n  .input-group[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: stretch;\r\n  width: 100% !important;\r\n}\r\n\r\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]{\r\n  \r\n  background-color: #fff;\r\n  width: 25vw;\r\n  box-shadow: none;\r\n  border: 1px solid #d6dbff !important;\r\n  margin-top: 5px;\r\n}\r\n\r\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{\r\n  background-color: #f5f6fc;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%]   .kt-inbox__items[_ngcontent-%COMP%]   .kt-inbox__item[_ngcontent-%COMP%]{\r\n  position: relative;\r\n}\r\n\r\n  .delete-btn[_ngcontent-%COMP%]{\r\n  display: none;\r\n  position: absolute;\r\n   right: 0px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    background-color: #f2f3f7;\r\n    color: grey;\r\n    line-height: 63px;\r\n    padding: 0 20px;\r\n    transition: all 2s ease !important;\r\n}\r\n\r\n  .delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  background: none;\r\n  font-size: 16px;\r\n  outline: none !important;\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  height: 30px;\r\n  width: 30px;\r\n  background-color: #f5f6fc;\r\n  border: 1px solid #b3bcff;\r\n  color: #5867dd;\r\n  transition: all 0.3s ease;\r\n  cursor: pointer;\r\n  margin: 10px 8px 0 0;\r\n  border-radius: 0;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  text-align: center;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n  \r\n\r\n  .btn-secondary.theme-btn[_ngcontent-%COMP%]{\r\n  background-color: #5867dd;\r\n  color: #fff;\r\n}\r\n\r\n  .btn.btn-label-primary[_ngcontent-%COMP%]{\r\n  border: 1px solid #b3bcff;\r\n}\r\n\r\n  .delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n}\r\n\r\n  .kt-inbox__item[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n  .sidebar-more[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: 50%;\r\n}\r\n\r\n  .footer[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 50%;\r\n  background-color: dodgerblue;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n  .ng-autocomplete[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n}\r\n\r\n  \r\n\r\n  .memoscount[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 70px;\r\n  height: 34px;\r\n  margin: 5px;\r\n  border: 1px solid rgba(0, 0, 0, .2);\r\n  text-align: justify;\r\n\r\n}\r\n\r\n  .blue[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n}\r\n\r\n  .purple[_ngcontent-%COMP%] {\r\n  background: #00B74A;\r\n}\r\n\r\n  .wine[_ngcontent-%COMP%] {\r\n  background: #F93154;\r\n}\r\n\r\n  \r\n\r\n  .M_fsize[_ngcontent-%COMP%]{\r\n  font-size: smaller;\r\n}\r\n\r\n  .badge[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  font-size: 12px;\r\n  line-height: 1;\r\n  padding: .375rem .5625rem;\r\n  font-weight: normal;\r\n}\r\n\r\n  .badge-outline-primary[_ngcontent-%COMP%] {\r\n  color: #405189;\r\n  border: 1.5px solid #405189\r\n}\r\n\r\n  .badge.badge-pill[_ngcontent-%COMP%] {\r\n  border-radius: 10rem\r\n}\r\n\r\n  .badge-outline-info[_ngcontent-%COMP%] {\r\n  color: #3da5f4;\r\n  border: 1.5px solid #3da5f4\r\n}\r\n\r\n  .badge-outline-danger[_ngcontent-%COMP%] {\r\n  color: #f1536e;\r\n  border: 1.5px solid #f1536e\r\n}\r\n\r\n  .badge-outline-success[_ngcontent-%COMP%] {\r\n  color: #00c689;\r\n  border: 1.5px solid #00c689\r\n}\r\n\r\n  .badge-outline-warning[_ngcontent-%COMP%] {\r\n  color: #fda006;\r\n  border: 1px solid #fda006\r\n}\r\n\r\n  \r\n\r\n  .name-box[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  font-size: 9px;\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: #5867dd;\r\n  color: #fff;\r\n  font-weight: 500;\r\n  letter-spacing: 2px;\r\n  border-radius: 50%;\r\n  line-height: 30px;\r\n  margin-right: 5px;\r\n}\r\n\r\n  .names-response[_ngcontent-%COMP%]{\r\n  display :inline-block;\r\n  text-align: left;\r\n}\r\n\r\n  .names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{\r\n  display: block;\r\n  font-size: 10px;\r\n  font-weight: 600;\r\n}\r\n\r\n  .names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{\r\n  font-weight: 600;\r\n}\r\n\r\n  .head-btn[_ngcontent-%COMP%]{\r\n  background-color: rgba(88, 103, 221, 0.1);\r\n    padding: 3px 10px 3px 5px;\r\n    border-radius: 2rem;\r\n    border: 1px solid #b3bcff;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n}\r\n\r\n  .head-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #5867dd;\r\n    color: #fff;\r\n    line-height: 25px;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    margin-right: 3px;\r\n}\r\n\r\n  .devider[_ngcontent-%COMP%]{\r\n  height: 1px;\r\n  width: 100%;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n  .pricevalues[_ngcontent-%COMP%] {\r\n  padding-top: 30px;\r\n  padding-bottom: 10px;\r\n  border-right: 1px solid #f1f1f1;\r\n  border-bottom: 1px solid #f1f1f1;\r\n}\r\n\r\n  .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(1), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(2)  {\r\n  border-top: 1px solid #f1f1f1;\r\n}\r\n\r\n  .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(3), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(4)  {\r\n  border-bottom: none\r\n}\r\n\r\n  .pricevalues[_ngcontent-%COMP%]:nth-child(2), .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\r\n  border-right: none;\r\n}\r\n\r\n  .dms-links[_ngcontent-%COMP%]{\r\n  list-style-type: disc;\r\n}\r\n\r\n  .dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  display: block;\r\n  text-decoration: underline;\r\n  font-weight: 600;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n  \r\n\r\n  mat-select[_ngcontent-%COMP%]{\r\n  padding: 10px 5px;\r\n  background-color: #fff;\r\n  margin-right: 5px;\r\n}\r\n\r\n  div#mat-select-0-panel[_ngcontent-%COMP%]{\r\n  min-width: auto;\r\n}\r\n\r\n  .mat-select-panel-wrap.ng-tns-c275-0.ng-trigger.ng-trigger-transformPanelWrap.ng-star-inserted[_ngcontent-%COMP%]{\r\n  transform: none;\r\n}\r\n\r\n    .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\r\n  color: unset;\r\n}\r\n\r\n    .mat-option-pseudo-checkbox.mat-pseudo-checkbox-checked {\r\n  background-color: #303F9F;\r\n}\r\n\r\n  \r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .pro-bar[_ngcontent-%COMP%] {\r\n  background: hsl(0, 0%, 97%);\r\n  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;\r\n  height: 4px;\r\n  margin-bottom: 12px;\r\n  margin-top: 30px;\r\n  position: relative;\r\n  text-align: left;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress_bar_title[_ngcontent-%COMP%] {\r\n  color: hsl(218, 4%, 50%);\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  position: relative;\r\n  top: -28px;\r\n  z-index: 1;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress_number[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%] {\r\n  background-color: hsl(0, 0%, 88%);\r\n  display: block;\r\n  width: 0;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  transition: width 1s linear 0s;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  background-color: hsl(0, 0%, 100%);\r\n  border-radius: 50%;\r\n  width: 4px;\r\n  height: 4px;\r\n  position: absolute;\r\n  right: 1px;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  width: 14px;\r\n  height: 14px;\r\n  background-color: inherit;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  right: -4px;\r\n  top: -5px;\r\n}\r\n\r\n  .kt-widget__details[_ngcontent-%COMP%] {\r\n  min-width: 90px;\r\n}\r\n\r\n  .kt-media-group[_ngcontent-%COMP%]   .kt-media.kt-media--sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n  .kt-media-group[_ngcontent-%COMP%]   .kt-media.kt-media--sm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  width: 25px;\r\n  height: 25px;\r\n  background: #deecf8;\r\n  color: #2786fb;\r\n}\r\n\r\n  .bg-today[_ngcontent-%COMP%] {\r\n  background-color: #342bf0 !important;\r\n}\r\n\r\n  .w-45[_ngcontent-%COMP%] {\r\n  width: 45% !important;\r\n}\r\n\r\n  .w-55[_ngcontent-%COMP%] {\r\n  width: 55% !important;\r\n}\r\n\r\n  @media only screen and (max-width: 768px) {\r\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]{\r\n    width: 80vw;\r\n  }\r\n}\r\n\r\n  .suc-hvr[_ngcontent-%COMP%] {\r\n  color: #1dc9b7;\r\n}\r\n\r\n  .suc-hvr[_ngcontent-%COMP%]:hover {\r\n  background: #1dc9b7;\r\n  color: #fff;\r\n}\r\n\r\n  .dan-hvr[_ngcontent-%COMP%] {\r\n  color: #dc3545;\r\n}\r\n\r\n  .dan-hvr[_ngcontent-%COMP%]:hover {\r\n  background: #dc3545;\r\n  color: #fff;\r\n}\r\n\r\n  .kt-widget__title[_ngcontent-%COMP%]{\r\n  width: 250px;\r\n}\r\n\r\n  .btn-fw[_ngcontent-%COMP%]{\r\n  font-weight: 500;\r\n}\r\n\r\n  .asc-ar[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n  .btn-sort[_ngcontent-%COMP%]{\r\n  color: #0b0e1f;\r\n  background-color: #fff;\r\n  border: 1px solid #eef1f6;\r\n  border-radius: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n  a.ordr-a[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  margin-left: 5px;\r\n  color: #0b0e1f;\r\n}\r\n\r\n  .sort-by[_ngcontent-%COMP%]{\r\n  color: #999999;\r\n  font-size: 12px;\r\n  padding: 8px;\r\n\r\n}\r\n\r\n  .sort-a[_ngcontent-%COMP%]{\r\n  text-decoration: underline;\r\n}\r\n\r\n  .sort-drop[_ngcontent-%COMP%]{\r\n  padding: 0.8rem 0;\r\n  min-width: 12rem;\r\n  margin-top: 5px;\r\n}\r\n\r\n  .sort-drop[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{\r\n  padding: 0.4rem 1rem;\r\n}\r\n\r\n  .sort-drop[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n  background: #f1f6fd;\r\n  color: #0b0e1f;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  display: flex;\r\n}\r\n\r\n  .sort-drop[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .ckc-icn[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  color: #3b93fc;\r\n}\r\n\r\n  .btn-sort[_ngcontent-%COMP%]:hover, .btn-sort[_ngcontent-%COMP%]:focus, .btn-sort[_ngcontent-%COMP%]:active  {\r\n  color: #0b0e1f;\r\n  background-color: #f5f7fa;\r\n  border: 1px solid #e1e6ee;\r\n}\r\n\r\n  .select-box[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n  a.dropdown-item[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n  @media (max-width: 1440px){\r\n  .kt-widget__title[_ngcontent-%COMP%]{\r\n    width: 240px;\r\n  }\r\n  .stat-td[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    width: 135px;\r\n  }\r\n  .stat-td[_ngcontent-%COMP%]{\r\n    width: 135px;\r\n  }\r\n}\r\n\r\n  @media (max-width: 1300px){\r\n.kt-widget__title[_ngcontent-%COMP%]{\r\n    width: 180px;\r\n}\r\n}\r\n\r\n  span.count[_ngcontent-%COMP%] {\r\n  background: #9886eb;\r\n  padding: 0 4px;\r\n  color: #fff;\r\n  cursor: auto;\r\n  border-radius: 3px;\r\n}\r\n\r\n  .ticks-grad[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(to left, #f9a8d4, #d8b4fe, #818cf8);\r\n  color: #fff;\r\n  padding: 15px 20px;\r\n  border-radius: 12px;\r\n  margin-bottom: 20px;\r\n  min-height: 90px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n  .example_icon[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-right: 10px;\r\n  background: rgba(255, 255, 255, 0.2);\r\n  border-radius: 12px;\r\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\r\n  backdrop-filter: blur(5px);\r\n  -webkit-backdrop-filter: blur(5px);\r\n}\r\n\r\n  span.example_icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n  span.example_icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n}\r\n\r\n  span.count1[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border: 1px solid #9886eb;\r\n  padding: 0;\r\n  color: #9886eb;\r\n  cursor: auto;\r\n  border-radius: 500px;\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n  span.count2[_ngcontent-%COMP%] {\r\n  margin-left: 2px;\r\n  width: 20px;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  background: #deecf8;\r\n  color: #2786fb;\r\n  border-radius: 50%;\r\n  font-size: 0.9rem;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: 600;\r\n}\r\n\r\n  .scrollbar1[_ngcontent-%COMP%] {\r\n  max-height: calc(100vh - 178px); \r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n  .scrollbar1[_ngcontent-%COMP%] {\r\n  max-height: calc(100vh - 138px); \r\n  overflow-y: auto;\r\n}\r\n\r\n  .scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n  \r\n\r\n  .scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n  \r\n\r\n  .scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n  border-radius: 10px;\r\n}\r\n\r\n  \r\n\r\n  .scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #ccc;\r\n}\r\n\r\n  .form-check-input[_ngcontent-%COMP%] {\r\n  \r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 11' width='13' height='11' fill='none'%3e%3cpath d='M11.0426 1.02893C11.3258 0.695792 11.8254 0.655283 12.1585 0.938451C12.4917 1.22162 12.5322 1.72124 12.249 2.05437L5.51985 9.97104C5.23224 10.3094 4.72261 10.3451 4.3907 10.05L0.828197 6.88335C0.50141 6.59288 0.471975 6.09249 0.762452 5.7657C1.05293 5.43891 1.55332 5.40948 1.88011 5.69995L4.83765 8.32889L11.0426 1.02893Z' fill='%23FFFFFF'/%3e%3c/svg%3e\");\r\n}\r\n\r\n  .ps-1[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  float: unset;\r\n  margin: 4px !important;\r\n}\r\n\r\n  \r\n\r\n  .add_new_project_slide[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 999;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: #ffffff;\r\n  border-left: 1px solid #EDEAE9;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  box-shadow: 0 0.1rem 1rem 0.25rem rgb(0 0 0/5%) !important;\r\n}\r\n\r\n  .open_sidebar[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n  .step-line[_ngcontent-%COMP%] {\r\n     \r\n     height: 2px;\r\n     width: 34vw;\r\n     position: absolute;\r\n     top: 45px;\r\n     z-index: 1;\r\n     border-top: 1px dashed #dfdfdf;\r\n}\r\n\r\n  .nav-pills.custom[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  margin: 0 20px;\r\n  z-index: 2;\r\n}\r\n\r\n  .nav-link.active.custom[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  color: #007bff;\r\n}\r\n\r\n  .nav-link.custom[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n  display: flex;\r\n    flex-direction: column;\r\n    gap: 7px;\r\n    min-width: 8vw;\r\n}\r\n\r\n  .nav-link.custom[_ngcontent-%COMP%]   span.icon[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  border-radius: 50px;\r\n  width: 46px;\r\n  height: 46px;\r\n  margin: 0 auto;border: 1px solid #e0e0e0;\r\n}\r\n\r\n  .nav-link.custom.active[_ngcontent-%COMP%]   span.icon[_ngcontent-%COMP%] {\r\n  background-color: #007bff;\r\n  color: #fff;\r\n}\r\n\r\n  .nav-link.custom[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 28px;\r\n}\r\n\r\n  .tab-content.custom[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n  .tab-content.custom[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%] {\r\n  width: 60vw;\r\n}\r\n\r\n  @media screen and (min-width: 840px) {\r\n  .tab-content.custom[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%] {\r\n    width: 60vw;\r\n  }\r\n}\r\n\r\n  .nav-link.active.custom[_ngcontent-%COMP%]:hover {\r\n  background-color: unset !important;\r\n  color: #007bff !important;\r\n}\r\n\r\n  .kt-portlet[_ngcontent-%COMP%]   .kt-portlet__body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 25px;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-portlet__body_scroll[_ngcontent-%COMP%]{\r\n  height: calc(100vh - 130px);\r\n  min-height:50vh;;\r\n  overflow-y: auto;\r\n}\r\n\r\n  .section-bottom[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  border-radius: 1rem;\r\n  padding: 2rem 3rem;\r\n  min-height: 18rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  box-shadow: 0 10px 15px #5867dd40;\r\n}\r\n\r\n  .section-bottom[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0rem;\r\n}\r\n\r\n  .section-bottom[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  letter-spacing: 1px;\r\n}\r\n\r\n  .section-bottom[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  cursor: pointer;\r\n  outline: none;\r\n  border-radius: 5px;\r\n  padding: 0.75rem 2rem;\r\n  background-color: #F2F0F0;\r\n}\r\n\r\n  .section-bottom[_ngcontent-%COMP%]   .section-cards[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-gap: 1rem;\r\n  color: #fff;\r\n}\r\n\r\n  \r\n\r\n  .section-bottom[_ngcontent-%COMP%]   .section-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 2rem;\r\n  height: 11rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  \r\n  align-items: center;\r\n  border-radius: 1rem;\r\n}\r\n\r\n  .section-bottom[_ngcontent-%COMP%]   .section-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n  .section-bottom[_ngcontent-%COMP%]   .section-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 1.7rem;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n  .section-bottom[_ngcontent-%COMP%]   .section-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 1.4rem;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n  .section-bottom[_ngcontent-%COMP%]   .section-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: -0.8rem;\r\n  text-align: left;\r\n  opacity: 0.9;\r\n}\r\n\r\n  .kt-cd-tlv[_ngcontent-%COMP%] {\r\n  margin-top: 13px;\r\n  text-align: center;\r\n}\r\n\r\n  .kt-cd-tlv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #676f9c;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n}\r\n\r\n  .card[_ngcontent-%COMP%] {\r\n  cursor: pointer;    transition: 0.6s;\r\n  position: relative;\r\n}\r\n\r\n  .card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 20px 50px rgb(0 0 0 / 22%);\r\n}\r\n\r\n  .card.active[_ngcontent-%COMP%] {\r\n  border: 1px solid #abcdff;\r\n  color: #fff;\r\n  background-color: #e4f0ff;\r\n}\r\n\r\n  .kt-ctv-btn[_ngcontent-%COMP%] {\r\n  margin-top: 3rem;\r\n  text-align: end;\r\n}\r\n\r\n  .my-ct-v-btn[_ngcontent-%COMP%] {\r\n  width: 120px;\r\n  margin-right: 1px;\r\n}\r\n\r\n  .card.active[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: #fff;\r\n  position: absolute;\r\n  top: -9px;\r\n  right: -8px;\r\n  border-radius: 50pc;\r\n  border: 1px solid #abcdff;\r\n}\r\n\r\n  .card.active[_ngcontent-%COMP%]::before {\r\n  border: solid #61a8ff;\r\n  position: absolute;\r\n  transform: rotate(-45deg);\r\n  border-width: 0 0 2px 2px !important;\r\n  height: 8px;\r\n  width: 18px;\r\n  content: \"\";\r\n  margin: 17px 0 0 14px;\r\n  right: 2px;\r\n  top: -12px;\r\n  z-index: 1;\r\n}\r\n\r\n  .kt-desc-textarea[_ngcontent-%COMP%] {\r\n  min-height: 104px;\r\n}\r\n\r\n  .kt-ctv-btn-two[_ngcontent-%COMP%] {\r\n  margin-top: 3rem;\r\n  text-align: end;\r\n}\r\n\r\n  .my-ct-v-btn-back[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n  min-width: 120px;\r\n  background-color: #efefef !important;\r\n  border-color: #efefef !important;\r\n  color: #6b6b6b !important;\r\n}\r\n\r\n  .ng-select-container[_ngcontent-%COMP%] {\r\n  border: 0 !important;\r\n}\r\n\r\n  .nav-pills[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:active, .nav-pills[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:hover {\r\n  background-color:unset; \r\n  color: unset; \r\n}\r\n\r\n  \r\n\r\n  .formbold-mb-5[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n  .formbold-pt-3[_ngcontent-%COMP%] {\r\n  padding-top: 12px;\r\n}\r\n\r\n  .formbold-main-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 48px;\r\n}\r\n\r\n  .formbold-form-wrapper[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  max-width: 550px;\r\n  width: 100%;\r\n  background: white;\r\n}\r\n\r\n  .formbold-form-label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  color: #07074d;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n  .formbold-form-label-2[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  font-size: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n  .formbold-form-input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 12px 24px;\r\n  border-radius: 6px;\r\n  border: 1px solid #e0e0e0;\r\n  background: white;\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  color: #6b7280;\r\n  outline: none;\r\n  resize: none;\r\n}\r\n\r\n  .formbold-form-input[_ngcontent-%COMP%]:focus {\r\n  border-color: #6a64f1;\r\n  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n  .formbold-btn[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  border-radius: 6px;\r\n  padding: 14px 32px;\r\n  border: none;\r\n  font-weight: 600;\r\n  background-color: #6a64f1;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n  .formbold-btn[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n  .formbold--mx-3[_ngcontent-%COMP%] {\r\n  margin-left: -12px;\r\n  margin-right: -12px;\r\n}\r\n\r\n  .formbold-px-3[_ngcontent-%COMP%] {\r\n  padding-left: 12px;\r\n  padding-right: 12px;\r\n}\r\n\r\n  .flex[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n  .flex-wrap[_ngcontent-%COMP%] {\r\n  flex-wrap: wrap;\r\n}\r\n\r\n  .w-full[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n  .formbold-file-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n  .formbold-file-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  border: 1px dashed #e0e0e0;\r\n  border-radius: 6px;\r\n  min-height: 100px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 10px;\r\n  text-align: center;\r\n  margin-top: 5px;\r\n}\r\n\r\n  .formbold-drop-file[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-weight: 400;\r\n  color: #9f9f9f;\r\n  text-transform: capitalize;\r\n  letter-spacing: 0.5px;\r\n  font-size: 17px;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n  .formbold-or[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n    font-size: 14px;\r\n    color: #b1b1b1;\r\n    display: block;\r\n    margin-bottom: 5px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n  .formbold-browse[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n    font-size: 14px;\r\n    color: #959595;\r\n    display: inline-block;\r\n    padding: 8px 28px;\r\n    border: 1px solid #e0e0e0;\r\n    border-radius: 4px;\r\n    text-transform: capitalize;\r\n    cursor: pointer;\r\n}\r\n\r\n  .formbold-file-list[_ngcontent-%COMP%] {\r\n  border-radius: 6px;\r\n  background: #f5f7fb;\r\n  padding: 16px 16px;\r\n}\r\n\r\n  .formbold-mb-5.formbold-file-input[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n  .formbold-file-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n  .formbold-file-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  color: #07074d;\r\n  border: none;\r\n  background: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n  .formbold-file-name[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  color: #5867dd;\r\n  padding-right: 12px;\r\n}\r\n\r\n  .formbold-progress-bar[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 6px;\r\n  border-radius: 8px;\r\n  background: #e2e5ef;\r\n}\r\n\r\n  .formbold-progress[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 75%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  background: #6a64f1;\r\n  border-radius: 8px;\r\n}\r\n\r\n  @media (min-width: 540px) {\r\n  .sm\\:w-half[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n  .btn.btn-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\r\n  fill: #737373;\r\n}\r\n\r\n  \r\n\r\n  .card[_ngcontent-%COMP%]{\r\n  border: 1px solid #F1F1F2;\r\n  border-radius: 0.625rem;\r\n}\r\n\r\n  .card.card-body[_ngcontent-%COMP%]{\r\n  padding: 2rem 2.25rem;\r\n  color: var(--bs-card-color);\r\n}\r\n\r\n  .d-flex[_ngcontent-%COMP%]{\r\n  display: flex!important;\r\n}\r\n\r\n  .flex-wrap[_ngcontent-%COMP%]{\r\n  flex-wrap: wrap!important;\r\n}\r\n\r\n  .rounded[_ngcontent-%COMP%]{\r\n  border-radius: 0.475rem!important;\r\n}\r\n\r\n  .w-lg-150px[_ngcontent-%COMP%]{\r\n  width: 50px!important;\r\n}\r\n\r\n  .h-lg-150px[_ngcontent-%COMP%]{\r\n  height: 63px!important;\r\n}\r\n\r\n  .bg-light[_ngcontent-%COMP%]{\r\n  --bs-bg-rgb-color: 249,249,249;\r\n  background-color: #f5f5f5!important;\r\n}\r\n\r\n  .flex-center[_ngcontent-%COMP%]{\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n  .flex-grow-1[_ngcontent-%COMP%]{\r\n  flex-grow: 1!important;\r\n}\r\n\r\n  .flex-wrap[_ngcontent-%COMP%]{\r\n  flex-wrap: wrap!important;\r\n}\r\n\r\n  .justify-content-between[_ngcontent-%COMP%]{\r\n  justify-content: space-between!important;\r\n}\r\n\r\n  .align-items-start[_ngcontent-%COMP%]{\r\n  align-items: flex-start!important;\r\n}\r\n\r\n  .flex-column[_ngcontent-%COMP%]{\r\n  flex-direction: column!important;\r\n}\r\n\r\n  .border-gray-300[_ngcontent-%COMP%] {\r\n  border-color: #dbdfe9!important;\r\n}\r\n\r\n  .border-dashed[_ngcontent-%COMP%] {\r\n  border-style: dashed!important;\r\n  border-color: #dbdfe9;\r\n}\r\n\r\n  .border-dashed[_ngcontent-%COMP%] {\r\n  border-style: dashed!important;\r\n  border-color: #dbdfe9;\r\n}\r\n\r\n  .px-4[_ngcontent-%COMP%] {\r\n  padding-right: 0.5rem!important;\r\n  padding-left: 0.5rem!important;\r\n}\r\n\r\n  .py-3[_ngcontent-%COMP%] {\r\n  padding-top: 0.5rem!important;\r\n  padding-bottom: 0.5rem!important;\r\n}\r\n\r\n  .min-w-125px[_ngcontent-%COMP%] {\r\n  min-width: 125px!important;\r\n}\r\n\r\n  .fw-stl[_ngcontent-%COMP%] {\r\n  color: #4d5aa1;\r\n  font-weight: 600;\r\n}\r\n\r\n  .fs-7[_ngcontent-%COMP%] {\r\n  font-size: .95rem!important;\r\n}\r\n\r\n  .fw-semi-lt[_ngcontent-%COMP%] {\r\n  color: #8f8f8f;\r\n  margin-top: 3px;\r\n}\r\n\r\n  .fs-8[_ngcontent-%COMP%] {\r\n  font-size: .85rem!important;\r\n}\r\n\r\n  .mw-lg-75px[_ngcontent-%COMP%]{\r\n  max-width: 35px!important;\r\n}\r\n\r\n  .me-2[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n  .my-crd[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  border-radius: 1rem;\r\n  padding: 1rem 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  box-shadow: 0px 5px 20px #5867dd38;\r\n}\r\n\r\n  .kt-sub-box-vew[_ngcontent-%COMP%]   .mb-1[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 3px;\r\n}\r\n\r\n  .my-sub-task-tittle[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  color: #686c8b;\r\n  padding: 4px 0px;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n  button.btn.btn-sm.btn-bg-light.Clr-act[_ngcontent-%COMP%] {\r\n  background-color: #f1f1f2;\r\n  margin-right: 10px;\r\n}\r\n\r\n  .Kt-act-btnb[_ngcontent-%COMP%] {\r\n  text-align: end;\r\n  padding-right: 3px !important;\r\n}\r\n\r\n  .kt-act-no[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-right: 8px;\r\n  background-color: #e9f3ff;\r\n  padding: 6px;\r\n  border-radius: 5px;\r\n  color: #2786fb;\r\n}\r\n\r\n  .kt-act-no[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #818080;\r\n  font-size: 9px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.7px;\r\n}\r\n\r\n  .kt-act-no[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-bottom: 0px;\r\n  font-weight: 700;\r\n  font-size: 15px;\r\n}\r\n\r\n  .kt-act-ttl-v[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: #6c79e1;\r\n  margin-bottom: 3px;\r\n  font-size: 16px;\r\n}\r\n\r\n  .kt-act-ttl-v[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-bottom: 0px;\r\n  color: #a3a3a3;\r\n}\r\n\r\n  .kt-act-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n  .kt-act-btns[_ngcontent-%COMP%] {\r\n  border-left: 1px solid #ccc;\r\n  padding: 8px;\r\n}\r\n\r\n  .kt-dl-icon.db-v[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n  .kt-dl-icon[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  opacity: 0.7;\r\n}\r\n\r\n  .kt-dl-icon[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n\r\n  .kt-act-card[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  background-color: #ffffff;\r\n  border-radius: 7px;\r\n  box-shadow: 1px 1px 20px #cccccc78;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n  span.kt-act-svg-ic[_ngcontent-%COMP%] {\r\n  border-right: 1px solid #ccc;\r\n  margin: 0pc 4px;\r\n  padding-right: 4px;\r\n}\r\n\r\n  span.kt-act-svg-ic[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: -2.3px;\r\n}\r\n\r\n  .kt-vi-act-dtl[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n  .kt-sub-box-vew[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  border-radius: 1rem;\r\n  padding: 1rem 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  box-shadow: 0px 5px 20px #5867dd38;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n  .kt-portlet__foot[_ngcontent-%COMP%] {\r\n  padding: 0rem 2rem;\r\n}\r\n\r\n  .kt-portlet__foot[_ngcontent-%COMP%] {\r\n  box-shadow: 0px -5px 6px #cccccca1;\r\n}\r\n\r\n  .add_new_project_slide[_ngcontent-%COMP%]   .kt-portlet__body_scroll[_ngcontent-%COMP%]{\r\n  height: calc(100vh - 70px);\r\n  min-height:50vh;;\r\n  overflow-y: auto;\r\n}\r\n\r\n  .add-vhd-h[_ngcontent-%COMP%]{\r\n  height: calc(100vh - 117px) !important;\r\n}\r\n\r\n  \r\n\r\n  .symbol-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  margin-left: 10px;\r\n}\r\n\r\n  .symbol[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  flex-shrink: 0;\r\n  position: relative;\r\n  border-radius: 0.475rem;\r\n}\r\n\r\n  .flex-nowrap[_ngcontent-%COMP%] {\r\n  flex-wrap: nowrap!important;\r\n}\r\n\r\n  .symbol-group.symbol-hover[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n  .symbol-group[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 0;\r\n  margin-left: -10px;\r\n  transition: all .3s ease;\r\n}\r\n\r\n  .symbol.symbol-circle[_ngcontent-%COMP%], .symbol.symbol-circle[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%], .symbol.symbol-circle[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n  .symbol[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: 500;\r\n  color: #252f4a;\r\n  background-color: #f9f9f9;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  border-radius: 0.475rem;\r\n}\r\n\r\n  .text-inverse-warning[_ngcontent-%COMP%] {\r\n  color: #ffffff!important;\r\n}\r\n\r\n  .bg-warning[_ngcontent-%COMP%] {\r\n  --bs-bg-rgb-color: rgba(255,199,0);\r\n  background-color: #ffc700!important;\r\n}\r\n\r\n  .fw-bold[_ngcontent-%COMP%] {\r\n  font-weight: 600!important;\r\n}\r\n\r\n  .symbol[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n  .symbol-group[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n  .symbol.symbol-35px[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%] {\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n\r\n  .symbol-group.symbol-hover[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n  .symbol[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%]:after {\r\n  border-radius: 0.475rem;\r\n}\r\n\r\n  .symbol-group[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%]:after {\r\n  display: block;\r\n  content: \" \";\r\n  border-radius: inherit;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  border: 2px solid #fff;\r\n  -webkit-background-clip: padding-box;\r\n  background-clip: padding-box;\r\n}\r\n\r\n  .bg-primary[_ngcontent-%COMP%] {\r\n  --bs-bg-rgb-color: rgba(62,151,255);\r\n  background-color: #3e97ff!important;\r\n}\r\n\r\n  .text-inverse-primary[_ngcontent-%COMP%] {\r\n  color: #ffffff!important;\r\n}\r\n\r\n  .symbol.symbol-35px[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n\r\n  .text-inverse-danger[_ngcontent-%COMP%] {\r\n  color: #ffffff!important;\r\n}\r\n\r\n  .text-gray-300[_ngcontent-%COMP%] {\r\n  color: #dbdfe9!important;\r\n}\r\n\r\n  label.my-chosse-flv[_ngcontent-%COMP%] {\r\n  min-height: 55px !important;\r\n  background-color: #e1e1e1;\r\n  cursor: pointer;\r\n}\r\n\r\n  .my-chosse-flv[_ngcontent-%COMP%]   .formbold-drop-file[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-weight: 400;\r\n  color: #717171;\r\n  text-transform: capitalize;\r\n  letter-spacing: 0.5px;\r\n  line-height: 12px;\r\n  font-size: 16px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n  .right-side-act[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n  border-left: 3px solid #d9d9d9;\r\n  height: calc(100vh - 117px);\r\n  overflow: auto;\r\n}\r\n\r\n  .kt-action-list[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n}\r\n\r\n  .Act-tittle-Right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  text-transform: capitalize;\r\n  font-weight: 600;\r\n}\r\n\r\n  .Act-tittle-Right[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #ccc;\r\n  margin-bottom: 10px;\r\n  padding-bottom: 9px;\r\n}\r\n\r\n  .kt-right-style[_ngcontent-%COMP%] {\r\n  padding-left: 15px;\r\n  border-left: 3px solid #d9d9d9;\r\n}\r\n\r\n  .sm-btn-submit[_ngcontent-%COMP%] {\r\n  width: 70px !important;\r\n  padding: 5px;\r\n  background-color: #2196F3 !important;\r\n  border: 1px solid #2196f3 !important;\r\n}\r\n\r\n  .sm-btn-close[_ngcontent-%COMP%]{\r\n  min-width: 60px !important;\r\n  padding: 5px;\r\n}\r\n\r\n  .VW_60[_ngcontent-%COMP%]{\r\n  width: 60vw;;\r\n}\r\n\r\n  .act-bd-box[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n}\r\n\r\n  label.checkbox.kt-fnt-vd[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  font-size: 35px;\r\n  position: relative;\r\n  top: 1px;\r\n  \r\n  margin-right: 5px;\r\n}\r\n\r\n  label.checkbox.kt-fnt-vd[_ngcontent-%COMP%] {\r\n  margin-bottom: 0px !important;\r\n  font-size: 15px;\r\n  color: #6e7497;\r\n}\r\n\r\n  @media (max-width: 2500px){\r\n  .tab-content.custom[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%] {\r\n    width: 50vw;\r\n}\r\n  }\r\n\r\n  @media (max-width: 1280px){\r\n    .tab-content.custom[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%] {\r\n      width: 60vw;\r\n  }\r\n    }\r\n\r\n  \r\n\r\n  .project-info-side-bar[_ngcontent-%COMP%] {\r\n      height: 100%;\r\n      width: 0;\r\n      position: fixed;\r\n      z-index: 999;\r\n      top: 0;\r\n      right: 0;\r\n      background-color: #ffffff;\r\n      border-left: 1px solid #EDEAE9;\r\n      overflow-x: hidden;\r\n      transition: 0.5s;\r\n      box-shadow: 0 0.1rem 1rem 0.25rem rgb(0 0 0/5%) !important;\r\n  }\r\n\r\n  .open_sidebar_info[_ngcontent-%COMP%] {\r\n    width: 55% !important;\r\n}\r\n\r\n  .kt-info-body[_ngcontent-%COMP%] {\r\n  margin: 1.3rem;\r\n  border: 1px solid #ededed;\r\n  height: calc(100vh - 4vh);\r\n}\r\n\r\n  .kt-title-icon[_ngcontent-%COMP%] {\r\n  background-color: #527ce2;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50px;\r\n  display: flex;\r\n  margin-right: 1rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n  .kt-info-box-tittle[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 15px;\r\n  color: #6388e3;\r\n  font-weight: 400;\r\n  margin-bottom: 10px;    letter-spacing: 0.5px;\r\n}\r\n\r\n  .kt-project-type[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n  .Kt-Pd-Status[_ngcontent-%COMP%] {\r\n  background-color: #000;\r\n  color: #fff;\r\n  margin: 0px 10px;\r\n  margin-left: 1rem;\r\n  font-weight: 600;\r\n  padding: 6px 13px; \r\n     max-width: 140px;\r\n  min-width: 130px;\r\n}\r\n\r\n  .Core_task[_ngcontent-%COMP%] {\r\n  background-color: #ffc43a;\r\n}\r\n\r\n  .kt-project-name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: #181818;\r\n  font-weight: 700;\r\n}\r\n\r\n  .kt-project-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #999999;\r\n  font-weight: 400;\r\n}\r\n\r\n  .kt-project-desc[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n}\r\n\r\n  .kt-info-box[_ngcontent-%COMP%] {\r\n  padding: 10px 10px;\r\n  border-bottom: 1px solid #ededed;\r\n}\r\n\r\n  .More_info[_ngcontent-%COMP%] {\r\n  background-color: #4574fe !important;\r\n}\r\n\r\n  .kt-info-lable-v[_ngcontent-%COMP%] {\r\n  color: #939393;\r\n  letter-spacing: 0.3px;\r\n  font-size: 14px;\r\n}\r\n\r\n  .kt-info-data-v[_ngcontent-%COMP%] {\r\n  background-color: #f0f0f0;\r\n  border-radius: 35px;\r\n  padding: 5px 4px;\r\n  font-weight: 500;\r\n  color: #4f4f4f;\r\n  margin-top: 10px;\r\n}\r\n\r\n  .kt-client-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  border-radius: 50px;\r\n}\r\n\r\n  .kt-client-icon[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\n  .bg-light-shade[_ngcontent-%COMP%] {\r\n  background-color: #eaf2fd !important;\r\n}\r\n\r\n  .Delay[_ngcontent-%COMP%]{\r\n  background-color: #Ed6207 !important;\r\n}\r\n\r\n  .kt-project-sts-data[_ngcontent-%COMP%] {\r\n  margin-top: 17px;\r\n  color: #3b3b3b;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n}\r\n\r\n  .progress.kt-projcect-progress.bar[_ngcontent-%COMP%] {\r\n  border-radius: 50px;\r\n  height: 10px;\r\n}\r\n\r\n  .bg-inprogress[_ngcontent-%COMP%] {\r\n  background-color: #505050;\r\n}\r\n\r\n  .bg-delay[_ngcontent-%COMP%] {\r\n  background-color: #Ed6207;\r\n}\r\n\r\n  .bg-done[_ngcontent-%COMP%] {\r\n  background-color: #6aad3a;\r\n}\r\n\r\n  .kt-prg-bar-info[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #3d3d3d;\r\n}\r\n\r\n  .kt-prg-bar-info[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  margin-right: 5px;\r\n}\r\n\r\n  .kt-total-prg-vl[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  font-size: 21px !important;\r\n}\r\n\r\n  .Deadline_Extend[_ngcontent-%COMP%]{\r\n  background-color: #f48383;\r\n}\r\n\r\n  button.Kt-Approval-btns[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 3px 5px;\r\n  border-radius: 50px;\r\n  background-color: #fff;\r\n  color: #4f4f4f;\r\n  border: 2px solid #fff;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n}\r\n\r\n  .Btn_Accpet[_ngcontent-%COMP%] {\r\n  border-color: #8ab991 !important;\r\n}\r\n\r\n  .Btn_Edit_Accept[_ngcontent-%COMP%] {\r\n  border-color: #7caccd !important;\r\n}\r\n\r\n  .Btn_Conditional_Accept[_ngcontent-%COMP%] {\r\n  border-color: #407f4c !important;\r\n}\r\n\r\n  .Btn_Reject[_ngcontent-%COMP%] {\r\n  border-color: #cf8e66 !important;\r\n}\r\n\r\n  .kt-approval-msg[_ngcontent-%COMP%] {\r\n  background-color: #f0f0f0;\r\n  padding: 10px;\r\n  border-radius: 6px;\r\n  min-height: 85px;\r\n}\r\n\r\n  .text-end[_ngcontent-%COMP%] {\r\n  text-align: end;\r\n}\r\n\r\n  .btn-project-stv[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  background-color: #f0f0f0;\r\n}\r\n\r\n  .Bt-Submit[_ngcontent-%COMP%] {\r\n  background-color: #878787;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n  .kt-info-pg-footer[_ngcontent-%COMP%] {\r\n  margin: 5px 10px;\r\n}\r\n\r\n  @media only screen and (min-width: 1800px) and (max-width: 2500px)  {\r\n  .open_sidebar_info[_ngcontent-%COMP%] {\r\n    width: 40% !important;\r\n}\r\n}\r\n\r\n  @media only screen and (min-width: 1385px) and (max-width: 1800px)  {\r\n  .open_sidebar_info[_ngcontent-%COMP%] {\r\n    width: 50% !important;\r\n}\r\n}\r\n\r\n  @media only screen and (min-width: 1280px) and (max-width: 1385px)  {\r\n  .open_sidebar_info[_ngcontent-%COMP%] {\r\n    width: 55% !important;\r\n}\r\n}\r\n\r\n  @media (max-width: 1280px){\r\n    .open_sidebar_info[_ngcontent-%COMP%] {\r\n      width: 58% !important;\r\n  }\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLXN1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1CSzs7RUFFSDtJQUNFO0dBQ0Q7O0VBQ0Q7OztJQUdFLG1CQUFtQjtJQUVuQix3Q0FBd0M7SUFDeEMsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFDQTtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBR2Ysd0JBQXdCO0lBRXhCLHVCQUF1QjtFQUN6Qjs7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7RUFDYjs7RUFDQTtJQUNFLFlBQVk7SUFFWix1QkFBdUI7RUFDekI7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBY0E7SUFDRTs7O01BR0UsZUFBZTtNQUNmLFdBQVc7SUFDYjtJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLFdBQVc7SUFDYjtFQUNGOztFQUNBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtFQUNmOztFQUNBO0lBQ0Usa0JBQWtCO0FBQ3RCOztFQUNBOzs7Ozs7S0FNSzs7RUFFTDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0VBQ0EsVUFBVTs7RUFDVjtFQUNFLFVBQVU7QUFDWjs7RUFFQSxVQUFVOztFQUNWO0VBQ0UsbUJBQW1CO0FBQ3JCOztFQUVBLFdBQVc7O0VBQ1g7RUFDRSxnQkFBZ0I7QUFDbEI7O0VBRUEsb0JBQW9COztFQUNwQjtFQUNFLGdCQUFnQjtBQUNsQjs7RUFDQTtFQUNFLGVBQWU7QUFDakI7O0VBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiOztFQUNBO0VBQ0UseUJBQXlCO0VBQ3pCO0FBQ0Y7O0VBRUE7RUFDRSx5QkFB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QUNkLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztFQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7RUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7RUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7RUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7RUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7RUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0VBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7O0VBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0VBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7RUFBQztFQUNDLGdDQUFnQztBQUNsQzs7RUFDQTtFQUNFLGdDQUFnQztBQUNsQzs7RUFDQTtFQUNFLGdDQUFnQztBQUNsQzs7RUFDQTtFQUNFLGdDQUFnQztBQUNsQzs7RUFDQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7RUFDQTtFQUNFLGVBQWU7QUFDakI7O0VBQ0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztFQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztFQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztFQUdDO0VBQ0M7SUFDRSxxQkFBcUI7QUFDekI7QUFDQTs7RUFFQTtFQUNFO0lBQ0UscUJBQXFCO0FBQ3pCO0FBQ0E7O0VBRUE7RUFDRTtJQUNFLHFCQUFxQjtBQUN6QjtBQUNBOztFQUNFO0lBQ0U7TUFDRSxxQkFBcUI7RUFDekI7SUFDRTs7RUFDRixtREFBbUQiLCJmaWxlIjoicHJvamVjdHMtc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogI2xvYWRpbmd7IFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgbGVmdDogNTAlOyBcclxuICB0b3A6IDUwJTsgXHJcbiAgei1pbmRleDogMTsgXHJcbiAgd2lkdGg6IDE1MHB4OyBcclxuICBoZWlnaHQ6IDE1MHB4OyBcclxuICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDsgXHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgXHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiOyBcclxuICB3aWR0aDogMTIwcHg7IFxyXG4gIGhlaWdodDogMTIwcHg7IFxyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7IFxyXG4gIH0gXHJcbiAgICBcclxuICBAa2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH0gXHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSBcclxuICB9ICovXHJcblxyXG4gIC5saXN0LWljb24tY29sb3J7XHJcbiAgICBjb2xvcjogIzk2OTY5NlxyXG4gICB9XHJcbiAgLmxvYWRlcixcclxuICAubG9hZGVyOmJlZm9yZSxcclxuICAubG9hZGVyOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwZGM1YzE7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDEgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb246IGxvYWQxIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgd2lkdGg6IDFlbTtcclxuICAgIGhlaWdodDogNGVtO1xyXG4gIH1cclxuICAubG9hZGVyIHtcclxuICAgIGNvbG9yOiAjMGRjNWMxO1xyXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgICBtYXJnaW46IDg4cHggYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICB9XHJcbiAgLmxvYWRlcjpiZWZvcmUsXHJcbiAgLmxvYWRlcjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjb250ZW50OiAnJztcclxuICB9XHJcbiAgLmxvYWRlcjpiZWZvcmUge1xyXG4gICAgbGVmdDogLTEuNWVtO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG4gIH1cclxuICAubG9hZGVyOmFmdGVyIHtcclxuICAgIGxlZnQ6IDEuNWVtO1xyXG4gIH1cclxuXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQxIHtcclxuICAgIDAlLFxyXG4gICAgODAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMDtcclxuICAgICAgaGVpZ2h0OiA0ZW07XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICBib3gtc2hhZG93OiAwIC0yZW07XHJcbiAgICAgIGhlaWdodDogNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGxvYWQxIHtcclxuICAgIDAlLFxyXG4gICAgODAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMDtcclxuICAgICAgaGVpZ2h0OiA0ZW07XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICBib3gtc2hhZG93OiAwIC0yZW07XHJcbiAgICAgIGhlaWdodDogNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICAubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbi8qIFxyXG4gIHRhYmxlLCB0aCwgdGQge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXItc3BhY2luZzogMTVweDtcclxuICB9ICovXHJcblxyXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51e1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0b3A6IDM4cHggIWltcG9ydGFudDtcclxuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLyogd2lkdGggKi9cclxuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbi5zaGFyZWRkZXRhaWxzLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzU1NTtcclxufVxyXG4ubmd4LXBhZ2luYXRpb24ge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4jYmFja0J0bjpob3ZlcntcclxuIGJhY2tncm91bmQtY29sb3I6IzU4NjdkZCA7XHJcbiBjb2xvcjogd2hpdGU7IFxyXG59XHJcbiNNZGxfY2xvc2VidG46aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICBjb2xvcjp3aGl0ZVxyXG59XHJcblxyXG4udGV4dC13YXJuaW5nLTF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTBhNztcclxuICBjb2xvcjojRkZBODAwO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udGV4dC1kYW5nZXItMXtcclxuICBjb2xvcjogI0Y2NEU2MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFMkU1O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuZHJvcGRvd24tZG93bixcclxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLmRyb3Bkb3duLXVwe1xyXG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjYWRhZGFkICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5tdWx0aXNlbGVjdC1kcm9wZG93bntcclxuICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4ua3QtdG9kb19fZGV0YWlsc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29ue1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcclxuICAgIGNvbG9yOiAjNTg2N2RkO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMCA4cHggMCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcblxyXG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiBzdmcua3Qtc3ZnLWljb24ge1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgfVxyXG5cclxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24gc3ZnLmt0LXN2Zy1pY29uLmFkZC1pY29ue1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxufVxyXG5cclxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiAua3Qtc3ZnLWljb24gZyBbZmlsbF17XHJcbiAgICBmaWxsOiAjNTg2N2RkO1xyXG4gIH1cclxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24gcGF0aHtcclxuICAgIGZpbGw6ICM1ODY3ZGQ7XHJcbiAgfVxyXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uOmhvdmVyIHN2Zy5rdC1zdmctaWNvbi5hZGQtaWNvbiBwYXRoLFxyXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uLmFjdGl2ZSBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24gcGF0aHtcclxuICAgIGZpbGw6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbjpob3ZlciAua3Qtc3ZnLWljb24gZyBbZmlsbF0sXHJcbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlIC5rdC1zdmctaWNvbiBnIFtmaWxsXXtcclxuICBmaWxsOiAjZmZmO1xyXG59XHJcblxyXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uOmhvdmVyLFxyXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLmNhcmQtdGl0bGUgLmZhdm91cml0ZSBpe1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgfVxyXG4gIC5jYXJkLXRpdGxlIC5mYXZvdXJpdGUuYWN0aXZlIGksXHJcbiAgLmNhcmQtdGl0bGUgLmZhdm91cml0ZTpob3ZlciBpe1xyXG4gICAgY29sb3I6ICNmZmMxMDc7XHJcbiAgfVxyXG5cclxuICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGR7XHJcbiAgICBib3JkZXItY29sb3I6ICNkNmQ2ZDY7XHJcbiAgfVxyXG5cclxuICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuc3VjY2VzcyB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMxZGM5Yjc7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiA0cHg7ICovXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLndhcm5pbmcge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZiODIyOyBcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuaW5mbyB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyNzg2ZmI7IFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5kYW5nZXIge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRjU4QThCOyBcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuVW5kZXJBcHByb3ZhbHMge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0JEODM4QzsgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLkZvcndhcmRVbmRlckFwcHJvdmFsIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7IFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5jb21wbGV0ZVVuZGVyQXBwcm92YWwge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZjsgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLnByb2plY3RIb2xkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNDMEI1REM7IFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5Ib2xkdW5kZXJBcHAge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E4NTA5ODsgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLkRlYWRsaW5lRXh0ZW5kZWR7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3OyBcclxufVxyXG4uZGVsYXlEYXlze1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsgZyBbZmlsbF0ge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGN1YmljLWJlemllcigwLjkzLCAwLjM1LCAxLCAxKTtcclxuICBmaWxsOiAjNUU1RjYzO1xyXG59XHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2FzaWRlIC5rdC1pbmJveF9fbmF2IC5rdC1uYXYgLmt0LW5hdl9faXRlbSAua3QtbmF2X19saW5rIHtcclxuICBwYWRkaW5nOiAwLjJyZW0gMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLm1haWwtZHJvcGRvd24ge1xyXG4gIHdpZHRoOiA4MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1haWwtZHJvcGRvd24gdGFibGUgdGQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4ua3QtcXVpY2stcGFuZWwgLmt0LXBvcnRsZXQua3QtcG9ydGxldC0taGVhZC1sZyAua3QtcG9ydGxldF9faGVhZCB7XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxufVxyXG4ua3QtaW5ib3hfX2ljb24gLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVudS1zbSB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5kcm9wZG93bi1yZXBseSB1bCBsaSBhIC5rdC1uYXZfX2xpbmstaWNvbiB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9fbGFiZWwge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG59XHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2Zvcm0gLmt0LWluYm94X19ib2R5IC5rdC1pbmJveF9fdG8gLmt0LWluYm94X19maWVsZCAua3QtaW5ib3hfX2lucHV0IGlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5rdC1uYXZfX2xpbmstbm9ob3Zlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzc0Nzg4RCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogYXV0bztcclxufVxyXG4ua3QtbmF2X19saW5rLXRleHQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XHJcbn1cclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmssXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTQsIDEwMCwgMTQyLCAwLjIpO1xyXG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93LFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuLmt0LWJhZGdlLmt0LWJhZGdlLS11bmlmaWVkLWJyYW5kIHtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTk1LCAxOTUsIDE5NSk7XHJcbn1cclxuLyogLmluYm94LXRleHQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn0gKi9cclxuLmt0LXF1aWNrLXBhbmVsMiB7XHJcbiAgd2lkdGg6IDY1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmt0LXF1aWNrLXBhbmVsLS1yaWdodCAua3QtcXVpY2stcGFuZWwge1xyXG4gIHJpZ2h0OiAtNjYwcHg7XHJcbiAgbGVmdDogYXV0bztcclxufVxyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xyXG59XHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG59XHJcbi8qIC5zb21lY2xhc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59ICovXHJcbi8qIDpob3N0KC5zb21lQ2xhc3MpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn0gKi9cclxuLmt0LWluYm94IC5rdC1pbmJveF9faWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2hhdGNvdW50IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLWRhcmsge1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQ6ICM4QzhEOTI7XHJcbn1cclxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsgZyBbZmlsbF0ge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGN1YmljLWJlemllcigwLjkzLCAwLjM1LCAxLCAxKTtcclxuICBmaWxsOiAjNUU1RjYzO1xyXG59XHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2FzaWRlIC5rdC1pbmJveF9fbmF2IC5rdC1uYXYgLmt0LW5hdl9faXRlbSAua3QtbmF2X19saW5rIHtcclxuICBwYWRkaW5nOiAwLjJyZW0gMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmt0LWZvbnQtUmVwbHlSZXF1aXJlZCB7XHJcbiAgY29sb3I6ICNhNmMgIWltcG9ydGFudDtcclxufVxyXG4ubWFpbC1kcm9wZG93biB7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4ubWFpbC1kcm9wZG93biB0YWJsZSB0ZCB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5rdC1xdWljay1wYW5lbCAua3QtcG9ydGxldC5rdC1wb3J0bGV0LS1oZWFkLWxnIC5rdC1wb3J0bGV0X19oZWFkIHtcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5rdC1pbmJveF9faWNvbiAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1tZW51LXNtIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuLmRyb3Bkb3duLXJlcGx5IHVsIGxpIGEgLmt0LW5hdl9fbGluay1pY29uIHtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19mb3JtIC5rdC1pbmJveF9fYm9keSAua3QtaW5ib3hfX3RvIC5rdC1pbmJveF9fZmllbGQgLmt0LWluYm94X19sYWJlbCB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9faW5wdXQgaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmt0LW5hdl9fbGluay1ub2hvdmVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcbi5rdC1uYXZfX2xpbmstdGV4dDpob3ZlciB7XHJcbiAgY29sb3I6ICM3NDc4OEQgIWltcG9ydGFudDtcclxufVxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTAwLCAxNDIsIDAuMik7XHJcbiAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93IHtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLXVuaWZpZWQtYnJhbmQge1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQ6IHJnYigxOTUsIDE5NSwgMTk1KTtcclxufVxyXG4vKiAuaW5ib3gtdGV4dCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufSAqL1xyXG4ua3QtcXVpY2stcGFuZWwyIHtcclxuICB3aWR0aDogNjUwcHggIWltcG9ydGFudDtcclxufVxyXG4ua3QtcXVpY2stcGFuZWwtLXJpZ2h0IC5rdC1xdWljay1wYW5lbCB7XHJcbiAgcmlnaHQ6IC02NjBweDtcclxuICBsZWZ0OiBhdXRvO1xyXG59XHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XHJcbn1cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1NTU7XHJcbn1cclxuLyogLnNvbWVjbGFzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0gKi9cclxuLyogOmhvc3QoLnNvbWVDbGFzcykge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSAqL1xyXG4ua3QtaW5ib3ggLmt0LWluYm94X19pY29uIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMzVweDtcclxuICB3aWR0aDogMzVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLWlubGluZSB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAuMTVyZW0gMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19hc2lkZSB7XHJcbiAgcGFkZGluZzogMTdweDtcclxuICB3aWR0aDogMjQzcHg7XHJcbn1cclxuLyogU3RhdHVzIENvbG9ycyAqL1xyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3dhcm5pbmd7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZiODIyO1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcHJpbWFyeXtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5NWJlZDk7XHJcbn1cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9zdWNjZXNze1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk1YmVkOTtcclxufVxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX0RhbmdlcntcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNGNThBOEI7XHJcbn1cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9ob2xke1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2MwYjVkY1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcmVqZWN0ZWR7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjVjMjkzO1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfdW5kZXJBcHByb3ZhbHN7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQkQ4MzhDO1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfZm9yd2FyZFVuZGVyQXBwcm92YWx7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3O1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfY29tcGxldGVVbmRlckFwcHJvdmFse1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZjtcclxufVxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3Byb2plY3RIb2xke1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0MwQjVEQztcclxufVxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX05ld1Byb2plY3R7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDA3YmZmO1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfRGVhZGxpbmVFeHRlbmRlZHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7XHJcbn1cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9Ib2xkdW5kZXJBcHB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTg1MDk4O1xyXG59XHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2xpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xyXG59XHJcbi5pY29ucy1maWx0ZXIgLmt0LXRvZG9fX2ljb257XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmljb25zLWZpbHRlciAua3QtdG9kb19faWNvbiBzcGFue1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNTg2N2RkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1ODY3ZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMXB4O1xyXG4gIHJpZ2h0OiAtMTFweDtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcbi8qIC5pY29ucy1maWx0ZXIgLmt0LXRvZG9fX2ljb246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczYTFmNyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnRcclxufSAqL1xyXG4vKiAuaWNvbnMtZmlsdGVyIC5rdC10b2RvX19pY29uOmhvdmVyIHNwYW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMTM0LCAyNTEsIDEpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudFxyXG59ICovXHJcblxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGV7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdWx0aXNlbGVjdC1kcm9wZG93bltfbmdjb250ZW50LXVuai1jNDBdIC5kcm9wZG93bi1idG5bX25nY29udGVudC11bmotYzQwXXtcclxuICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxufVxyXG4vKiB2aXJ0dWFsIFNjcm9sbGVyICovXHJcbnZpcnR1YWwtc2Nyb2xsZXIge1xyXG4gIC8qIHdpZHRoOiAzNTBweDsgKi9cclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbiBcclxuLnZzZGl2IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi8qID09PSBTaWRlYmFyID09PSAqL1xyXG4uc2lkZUluZm9iYXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIC8qIHBhZGRpbmctdG9wOiA2MHB4OyAqL1xyXG59XHJcbi5zaWRlSW5mb2JhciAua3QtcG9ydGxldF9faGVhZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmNsb3NlYnRuIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICMzMzM7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWljb24tY2lye1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzU4NjdkZDtcclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVte1xyXG4gIGJvcmRlci1ib3R0b206IDAuMDdyZW0gZGFzaGVkICNkZWRlZGU7XHJcbiAgcGFkZGluZzogNnB4O1xyXG59XHJcbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbS5kYXJre1xyXG4gIGJvcmRlci1ib3R0b206IDAuMDdyZW0gZGFzaGVkIHJnYmEoMCwwLDAsMC4zKTtcclxufVxyXG5cclxuLyogLmt0LWluYm94X19kYXRldGltZXtcclxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufSAqL1xyXG5cclxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtIC5rdC13aWRnZXQxX19pbmZvIC5rdC13aWRnZXQxX190aXRsZXtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5zaWRlSW5mb2JhciAudGl0bGUtc2lkZWJhcntcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbi5jb3VudC1oZWlnaHR7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLyogLmNvdW50LWhlaWdodCAuanVzdGlmeS1jb250ZW50LWJldHdlZW57XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn0gKi9cclxuLmNvdW50LWhlaWdodCAuanVzdGlmeS1jb250ZW50LWJldHdlZW4gLmt0LWNoZWNrYm94e1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcblxyXG4vKiB3aWR0aCAqL1xyXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDNweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuLmNvdW50LWhlaWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbi5jb3VudC1oZWlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcblxyXG4uZHJvcGRvd24gLmt0LWNoZWNrYm94ID4gaW5wdXQ6Y2hlY2tlZCB+IHNwYW57XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTg2N2RkO1xyXG59XHJcbi5rdC1jaGVja2JveCA+IHNwYW46YWZ0ZXIge1xyXG4gIGJvcmRlcjogc29saWQgIzU4NjdkZDtcclxufVxyXG5cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcclxufVxyXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTsgKi9cclxuICAgIHRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogLTIycHggIWltcG9ydGFudDtcclxufVxyXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1sZWZ0OiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xNXB4O1xyXG4gIGxlZnQ6IDMycHg7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1sZWZ0OiAxOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xN3B4O1xyXG4gIGxlZnQ6IDMwcHg7XHJcbiAgei1pbmRleDogODtcclxufVxyXG5cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudTEgLmZpbHRlci1ib3h7XHJcbiAgd2lkdGg6IDMzLjMzMzMlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMSksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDEpe1xyXG4gIHdpZHRoOiAzJTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCgyKSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoMil7XHJcbiAgd2lkdGg6IDMzJTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCgzKSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoMyl7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg0KSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoNCl7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg1KSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoNSl7XHJcbiAgd2lkdGg6IDE1JTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg2KSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoNil7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg3KSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoNyl7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg4KSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoOCl7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLmt0LXF1aWNrLXNlYXJjaCAua3QtcXVpY2stc2VhcmNoX19mb3JtIC5pbnB1dC1ncm91cC1wcmVwZW5kIC5pbnB1dC1ncm91cC10ZXh0LCAua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3VwLWFwcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2ZmOyAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3Vwe1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmRiZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uc2hvd19lbnRyaWVzIHNwYW57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiBcclxufVxyXG4uc2hvd19lbnRyaWVzIHNlbGVjdHtcclxuICAvKiB3aWR0aDogMTAwcHg7ICovXHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSg4OCwgMTAzLCAyMjEsIDAuMyk7XHJcbiAgY29sb3I6ICM1ODY3ZGQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jb3VudC1idG57XHJcbiAgLyogaGVpZ2h0OiAyNXB4OyAqL1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7ICovXHJcbiAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDg4LCA4OCwgODgpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG4vKiBTZWFyY2ggUHJvamVjdHMgKi9cclxuLmt0LWluYm94IC5rdC1pbmJveF9fdG9vbGJhciAua3QtaW5ib3hfX3NlYXJjaCAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xyXG59XHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZCwgLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kLXNob3J0e1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNlMmU5ZmY7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMjV2dztcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmRiZmYgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kIC5mb3JtLWNvbnRyb2wsIC5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZC1zaG9ydCAuZm9ybS1jb250cm9se1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmM7XHJcbn1cclxuXHJcbi8qIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uLmFjdGl2ZSAgKi9cclxuXHJcbi8qIC52YWxpbm9vcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnZhbGlub29yOjpiZWZvcmV7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDBweDtcclxuICB0b3A6IDBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59ICovXHJcblxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19saXN0IC5rdC1pbmJveF9faXRlbXMgLmt0LWluYm94X19pdGVte1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZGVsZXRlLWJ0bntcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgcmlnaHQ6IDBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNztcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDYzcHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAhaW1wb3J0YW50O1xyXG59XHJcbi5kZWxldGUtYnRuIGl7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XHJcbiAgY29sb3I6ICM1ODY3ZGQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAxMHB4IDhweCAwIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi8qIC5kZWxldGUtYnRuIGl7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjc7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlICFpbXBvcnRhbnQ7XHJcbn0qL1xyXG4uYnRuLXNlY29uZGFyeS50aGVtZS1idG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYnRuLmJ0bi1sYWJlbC1wcmltYXJ5e1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XHJcbn1cclxuXHJcbi5kZWxldGUtYnRuIGk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmt0LWluYm94X19pdGVtOmhvdmVyIC5kZWxldGUtYnRue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2lkZWJhci1tb3Jle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubmctYXV0b2NvbXBsZXRlIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi8qIEJveGVzICAqL1xyXG4ubWVtb3Njb3VudCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcblxyXG59XHJcblxyXG4uYmx1ZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLnB1cnBsZSB7XHJcbiAgYmFja2dyb3VuZDogIzAwQjc0QTtcclxufVxyXG5cclxuLndpbmUge1xyXG4gIGJhY2tncm91bmQ6ICNGOTMxNTQ7XHJcbn1cclxuLyogbWVtb3NDb3VudF9Gb250c2l6ZSAqL1xyXG4uTV9mc2l6ZXtcclxuICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgcGFkZGluZzogLjM3NXJlbSAuNTYyNXJlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uYmFkZ2Utb3V0bGluZS1wcmltYXJ5IHtcclxuICBjb2xvcjogIzQwNTE4OTtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkICM0MDUxODlcclxufVxyXG5cclxuLmJhZGdlLmJhZGdlLXBpbGwge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtXHJcbn1cclxuXHJcbi5iYWRnZS1vdXRsaW5lLWluZm8ge1xyXG4gIGNvbG9yOiAjM2RhNWY0O1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgIzNkYTVmNFxyXG59XHJcblxyXG4uYmFkZ2Utb3V0bGluZS1kYW5nZXIge1xyXG4gIGNvbG9yOiAjZjE1MzZlO1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgI2YxNTM2ZVxyXG59XHJcblxyXG4uYmFkZ2Utb3V0bGluZS1zdWNjZXNzIHtcclxuICBjb2xvcjogIzAwYzY4OTtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkICMwMGM2ODlcclxufVxyXG5cclxuLmJhZGdlLW91dGxpbmUtd2FybmluZyB7XHJcbiAgY29sb3I6ICNmZGEwMDY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZkYTAwNlxyXG59XHJcbi8qIE5ldyBkZXNpZ24gQ1NTICBmcm9tIEhlcmUuLi4gKi9cclxuLm5hbWUtYm94e1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDlweDtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ubmFtZXMtcmVzcG9uc2V7XHJcbiAgZGlzcGxheSA6aW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5uYW1lcy1yZXNwb25zZSBzcGFuOmZpcnN0LWNoaWxke1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5uYW1lcy1yZXNwb25zZSBzcGFuOmxhc3QtY2hpbGR7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmhlYWQtYnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDEwMywgMjIxLCAwLjEpO1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHggM3B4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiY2ZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uaGVhZC1idG4gaXtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzU4NjdkZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG5cclxuLmRldmlkZXJ7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLnByaWNldmFsdWVzIHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcblxyXG4udG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDEpLCAudG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDIpICB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn1cclxuLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgzKSwgLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSAge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmVcclxufVxyXG5cclxuLnByaWNldmFsdWVzOm50aC1jaGlsZCgyKSwgLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcblxyXG4uZG1zLWxpbmtze1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcclxufVxyXG5cclxuLmRtcy1saW5rcyBsaSBhe1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT0gTWF0IFNlbGVjdCBTdHlsZXMgPT09PT09PT09ICovXHJcblxyXG5tYXQtc2VsZWN0e1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuZGl2I21hdC1zZWxlY3QtMC1wYW5lbHtcclxuICBtaW4td2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtc2VsZWN0LXBhbmVsLXdyYXAubmctdG5zLWMyNzUtMC5uZy10cmlnZ2VyLm5nLXRyaWdnZXItdHJhbnNmb3JtUGFuZWxXcmFwLm5nLXN0YXItaW5zZXJ0ZWR7XHJcbiAgdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcclxuICBjb2xvcjogdW5zZXQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LW9wdGlvbi1wc2V1ZG8tY2hlY2tib3gubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzRjlGO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT0gUHJvZ3Jlc3MgQmFyID09PT09PT09PSAqL1xyXG5cclxuLnByb2dyZXNzX2JhciAucHJvLWJhciB7XHJcbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCA5NyUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCBoc2xhKDAsIDAlLCAwJSwgMC4xKSBpbnNldDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzX2Jhcl90aXRsZSB7XHJcbiAgY29sb3I6IGhzbCgyMTgsIDQlLCA1MCUpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0yOHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzX251bWJlciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgODglKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDFzIGxpbmVhciAwcztcclxufVxyXG5cclxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3MtYmFyLWlubmVyOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogNHB4O1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMXB4O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTRweDtcclxuICB0b3A6IC01cHg7XHJcbn1cclxuLmt0LXdpZGdldF9fZGV0YWlscyB7XHJcbiAgbWluLXdpZHRoOiA5MHB4O1xyXG59XHJcbi5rdC1tZWRpYS1ncm91cCAua3QtbWVkaWEua3QtbWVkaWEtLXNtIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmt0LW1lZGlhLWdyb3VwIC5rdC1tZWRpYS5rdC1tZWRpYS0tc20gc3BhbiB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNkZWVjZjg7XHJcbiAgY29sb3I6ICMyNzg2ZmI7XHJcbn1cclxuLmJnLXRvZGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQyYmYwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnctNDUge1xyXG4gIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcclxufVxyXG4udy01NSB7XHJcbiAgd2lkdGg6IDU1JSAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmR7XHJcbiAgICB3aWR0aDogODB2dztcclxuICB9XHJcbn1cclxuXHJcbi5zdWMtaHZyIHtcclxuICBjb2xvcjogIzFkYzliNztcclxufVxyXG4uc3VjLWh2cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzFkYzliNztcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uZGFuLWh2ciB7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuLmRhbi1odnI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmt0LXdpZGdldF9fdGl0bGV7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcbi5idG4tZnd7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYXNjLWFye1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmJ0bi1zb3J0e1xyXG4gIGNvbG9yOiAjMGIwZTFmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZjFmNjtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5hLm9yZHItYSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgY29sb3I6ICMwYjBlMWY7XHJcbn1cclxuLnNvcnQtYnl7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbn1cclxuLnNvcnQtYXtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uc29ydC1kcm9we1xyXG4gIHBhZGRpbmc6IDAuOHJlbSAwO1xyXG4gIG1pbi13aWR0aDogMTJyZW07XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5zb3J0LWRyb3AgLmRyb3Bkb3duLWl0ZW17XHJcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XHJcbn1cclxuLnNvcnQtZHJvcCAuYWN0aXZle1xyXG4gIGJhY2tncm91bmQ6ICNmMWY2ZmQ7XHJcbiAgY29sb3I6ICMwYjBlMWY7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uc29ydC1kcm9wIC5hY3RpdmUgLmNrYy1pY257XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiAjM2I5M2ZjO1xyXG59XHJcbi5idG4tc29ydDpob3ZlciwgLmJ0bi1zb3J0OmZvY3VzLCAuYnRuLXNvcnQ6YWN0aXZlICB7XHJcbiAgY29sb3I6ICMwYjBlMWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmYTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlNmVlO1xyXG59XHJcbi5zZWxlY3QtYm94e1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5hLmRyb3Bkb3duLWl0ZW17XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpe1xyXG4gIC5rdC13aWRnZXRfX3RpdGxle1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gIH1cclxuICAuc3RhdC10ZCBkaXZ7XHJcbiAgICB3aWR0aDogMTM1cHg7XHJcbiAgfVxyXG4gIC5zdGF0LXRke1xyXG4gICAgd2lkdGg6IDEzNXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpe1xyXG4ua3Qtd2lkZ2V0X190aXRsZXtcclxuICAgIHdpZHRoOiAxODBweDtcclxufVxyXG59XHJcblxyXG5zcGFuLmNvdW50IHtcclxuICBiYWNrZ3JvdW5kOiAjOTg4NmViO1xyXG4gIHBhZGRpbmc6IDAgNHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi50aWNrcy1ncmFkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2Y5YThkNCwgI2Q4YjRmZSwgIzgxOGNmOCk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtaW4taGVpZ2h0OiA5MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGVfaWNvbiB7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG59XHJcblxyXG5zcGFuLmV4YW1wbGVfaWNvbiBzdmcge1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuc3Bhbi5leGFtcGxlX2ljb24gaSB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbnNwYW4uY291bnQxIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ODg2ZWI7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogIzk4ODZlYjtcclxuICBjdXJzb3I6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNTAwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbnNwYW4uY291bnQyIHtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjZGVlY2Y4O1xyXG4gIGNvbG9yOiAjMjc4NmZiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnNjcm9sbGJhcjEge1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzhweCk7IFxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4uc2Nyb2xsYmFyMSB7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEzOHB4KTsgXHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4uc2Nyb2xsYmFyMTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcblxyXG4uc2Nyb2xsYmFyMTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG5cclxuLnNjcm9sbGJhcjE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG5cclxuLnNjcm9sbGJhcjE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcbi5mb3JtLWNoZWNrLWlucHV0IHtcclxuICAvKiB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7ICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEzIDExJyB3aWR0aD0nMTMnIGhlaWdodD0nMTEnIGZpbGw9J25vbmUnJTNlJTNjcGF0aCBkPSdNMTEuMDQyNiAxLjAyODkzQzExLjMyNTggMC42OTU3OTIgMTEuODI1NCAwLjY1NTI4MyAxMi4xNTg1IDAuOTM4NDUxQzEyLjQ5MTcgMS4yMjE2MiAxMi41MzIyIDEuNzIxMjQgMTIuMjQ5IDIuMDU0MzdMNS41MTk4NSA5Ljk3MTA0QzUuMjMyMjQgMTAuMzA5NCA0LjcyMjYxIDEwLjM0NTEgNC4zOTA3IDEwLjA1TDAuODI4MTk3IDYuODgzMzVDMC41MDE0MSA2LjU5Mjg4IDAuNDcxOTc1IDYuMDkyNDkgMC43NjI0NTIgNS43NjU3QzEuMDUyOTMgNS40Mzg5MSAxLjU1MzMyIDUuNDA5NDggMS44ODAxMSA1LjY5OTk1TDQuODM3NjUgOC4zMjg4OUwxMS4wNDI2IDEuMDI4OTNaJyBmaWxsPSclMjNGRkZGRkYnLyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuLnBzLTF7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiB1bnNldDtcclxuICBtYXJnaW46IDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKi0tLS0tbmV3IHByb2plY3QgYWRkIHNpZGUgYmFyIGNzcy0tLS0tLSovXHJcblxyXG4uYWRkX25ld19wcm9qZWN0X3NsaWRlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNFREVBRTk7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gMXJlbSAwLjI1cmVtIHJnYigwIDAgMC81JSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm9wZW5fc2lkZWJhcntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnN0ZXAtbGluZSB7XHJcbiAgICAgLyogYmFja2dyb3VuZDogI2UwZTBlMDsgKi9cclxuICAgICBoZWlnaHQ6IDJweDtcclxuICAgICB3aWR0aDogMzR2dztcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgdG9wOiA0NXB4O1xyXG4gICAgIHotaW5kZXg6IDE7XHJcbiAgICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjZGZkZmRmO1xyXG59XHJcbi5uYXYtcGlsbHMuY3VzdG9tIGxpIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW46IDAgMjBweDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5uYXYtbGluay5hY3RpdmUuY3VzdG9tIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzAwN2JmZjtcclxufVxyXG4ubmF2LWxpbmsuY3VzdG9tIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogN3B4O1xyXG4gICAgbWluLXdpZHRoOiA4dnc7XHJcbn1cclxuLm5hdi1saW5rLmN1c3RvbSBzcGFuLmljb24ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgd2lkdGg6IDQ2cHg7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO2JvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbn1cclxuLm5hdi1saW5rLmN1c3RvbS5hY3RpdmUgc3Bhbi5pY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5uYXYtbGluay5jdXN0b20gaSB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcbi50YWItY29udGVudC5jdXN0b20ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRhYi1jb250ZW50LmN1c3RvbSAudGFiLXBhbmUge1xyXG4gIHdpZHRoOiA2MHZ3O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MHB4KSB7XHJcbiAgLnRhYi1jb250ZW50LmN1c3RvbSAudGFiLXBhbmUge1xyXG4gICAgd2lkdGg6IDYwdnc7XHJcbiAgfVxyXG59XHJcbi5uYXYtbGluay5hY3RpdmUuY3VzdG9tOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmt0LXBvcnRsZXQgLmt0LXBvcnRsZXRfX2JvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ua3QtcG9ydGxldF9fYm9keV9zY3JvbGx7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTMwcHgpO1xyXG4gIG1pbi1oZWlnaHQ6NTB2aDs7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLnNlY3Rpb24tYm90dG9tIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgcGFkZGluZzogMnJlbSAzcmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDE4cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjNTg2N2RkNDA7XHJcbn1cclxuLnNlY3Rpb24tYm90dG9tIC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwcmVtO1xyXG59XHJcbi5zZWN0aW9uLWJvdHRvbSAuc2VjdGlvbi1oZWFkZXIgaDMge1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLnNlY3Rpb24tYm90dG9tIC5zZWN0aW9uLWhlYWRlciBidXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMC43NXJlbSAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYwRjA7XHJcbn1cclxuLnNlY3Rpb24tYm90dG9tIC5zZWN0aW9uLWNhcmRzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ3JpZC1nYXA6IDFyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLyogLnNlY3Rpb24tYm90dG9tIC5zZWN0aW9uLWNhcmRzIC5jYXJkOm50aC1vZi10eXBlKDEpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCNzNGO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDhweCAjRjRCNzNGO1xyXG59XHJcbi5zZWN0aW9uLWJvdHRvbSAuc2VjdGlvbi1jYXJkcyAuY2FyZDpudGgtb2YtdHlwZSgyKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5Nzc1MTtcclxuICBib3gtc2hhZG93OiAwIDVweCA4cHggI0Y5Nzc1MTtcclxufVxyXG4uc2VjdGlvbi1ib3R0b20gLnNlY3Rpb24tY2FyZHMgLmNhcmQ6bnRoLW9mLXR5cGUoMykge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOTk2NTE7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggOHB4ICNGOTk2NTE7XHJcbn0gKi9cclxuLnNlY3Rpb24tYm90dG9tIC5zZWN0aW9uLWNhcmRzIC5jYXJkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBoZWlnaHQ6IDExcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKiBvcGFjaXR5OiAtMC41OyAqL1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG4uc2VjdGlvbi1ib3R0b20gLnNlY3Rpb24tY2FyZHMgLmNhcmQgZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnNlY3Rpb24tYm90dG9tIC5zZWN0aW9uLWNhcmRzIC5jYXJkIGRpdiBoMSB7XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4uc2VjdGlvbi1ib3R0b20gLnNlY3Rpb24tY2FyZHMgLmNhcmQgZGl2IGkge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcbi5zZWN0aW9uLWJvdHRvbSAuc2VjdGlvbi1jYXJkcyAuY2FyZCBwIHtcclxuICBtYXJnaW4tdG9wOiAtMC44cmVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcbi5rdC1jZC10bHYge1xyXG4gIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5rdC1jZC10bHYgcCB7XHJcbiAgY29sb3I6ICM2NzZmOWM7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmNhcmQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjsgICAgdHJhbnNpdGlvbjogMC42cztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNhcmQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYigwIDAgMCAvIDIyJSk7XHJcbn1cclxuLmNhcmQuYWN0aXZlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYWJjZGZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGYwZmY7XHJcbn1cclxuLmt0LWN0di1idG4ge1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcbi5teS1jdC12LWJ0biB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMXB4O1xyXG59XHJcblxyXG4uY2FyZC5hY3RpdmU6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC05cHg7XHJcbiAgcmlnaHQ6IC04cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBwYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYWJjZGZmO1xyXG59XHJcbi5jYXJkLmFjdGl2ZTo6YmVmb3JlIHtcclxuICBib3JkZXI6IHNvbGlkICM2MWE4ZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4IDJweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgbWFyZ2luOiAxN3B4IDAgMCAxNHB4O1xyXG4gIHJpZ2h0OiAycHg7XHJcbiAgdG9wOiAtMTJweDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5rdC1kZXNjLXRleHRhcmVhIHtcclxuICBtaW4taGVpZ2h0OiAxMDRweDtcclxufVxyXG5cclxuLmt0LWN0di1idG4tdHdvIHtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG4ubXktY3Qtdi1idG4tYmFjayB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2VmZWZlZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNmI2YjZiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1waWxscyAubmF2LWl0ZW0gLm5hdi1saW5rOmFjdGl2ZSwgLm5hdi1waWxscyAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSwgLm5hdi1waWxscyAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp1bnNldDsgXHJcbiAgY29sb3I6IHVuc2V0OyBcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLWZpbGUgdXBsb2FkZSAtLS0tLS0tLS0tLSovXHJcbi5mb3JtYm9sZC1tYi01IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mb3JtYm9sZC1wdC0zIHtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxufVxyXG4uZm9ybWJvbGQtbWFpbi13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDhweDtcclxufVxyXG5cclxuLmZvcm1ib2xkLWZvcm0td3JhcHBlciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA1NTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uZm9ybWJvbGQtZm9ybS1sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMwNzA3NGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG4uZm9ybWJvbGQtZm9ybS1sYWJlbC0yIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybWJvbGQtZm9ybS1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjNmI3MjgwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcbi5mb3JtYm9sZC1mb3JtLWlucHV0OmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICM2YTY0ZjE7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG5cclxuLmZvcm1ib2xkLWJ0biB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogMTRweCAzMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YTY0ZjE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZm9ybWJvbGQtYnRuOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcblxyXG4uZm9ybWJvbGQtLW14LTMge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xMnB4O1xyXG59XHJcbi5mb3JtYm9sZC1weC0zIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTJweDtcclxufVxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZmxleC13cmFwIHtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLnctZnVsbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtYm9sZC1maWxlLWlucHV0IGlucHV0IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtYm9sZC1maWxlLWlucHV0IGxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNlMGUwZTA7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmZvcm1ib2xkLWRyb3AtZmlsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzlmOWY5ZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmZvcm1ib2xkLW9yIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNiMWIxYjE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmZvcm1ib2xkLWJyb3dzZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjOTU5NTk1O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDI4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtYm9sZC1maWxlLWxpc3Qge1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBiYWNrZ3JvdW5kOiAjZjVmN2ZiO1xyXG4gIHBhZGRpbmc6IDE2cHggMTZweDtcclxufVxyXG4uZm9ybWJvbGQtbWItNS5mb3JtYm9sZC1maWxlLWlucHV0IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZm9ybWJvbGQtZmlsZS1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZm9ybWJvbGQtZmlsZS1pdGVtIGJ1dHRvbiB7XHJcbiAgY29sb3I6ICMwNzA3NGQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm1ib2xkLWZpbGUtbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM1ODY3ZGQ7XHJcbiAgcGFkZGluZy1yaWdodDogMTJweDtcclxufVxyXG4uZm9ybWJvbGQtcHJvZ3Jlc3MtYmFyIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDZweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogI2UyZTVlZjtcclxufVxyXG5cclxuLmZvcm1ib2xkLXByb2dyZXNzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZDogIzZhNjRmMTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NDBweCkge1xyXG4gIC5zbVxcOnctaGFsZiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG4uYnRuLmJ0bi1pY29uIHN2Zzpob3ZlciB7XHJcbiAgZmlsbDogIzczNzM3MztcclxufVxyXG5cclxuLyotLS1wcm9qZWN0IHNoYXJ0IGRhdGEgdmlldyAtLS0tLS0tLS0qL1xyXG4uY2FyZHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRjFGMUYyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG59XHJcbi5jYXJkLmNhcmQtYm9keXtcclxuICBwYWRkaW5nOiAycmVtIDIuMjVyZW07XHJcbiAgY29sb3I6IHZhcigtLWJzLWNhcmQtY29sb3IpO1xyXG59LmQtZmxleHtcclxuICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcclxufS5mbGV4LXdyYXB7XHJcbiAgZmxleC13cmFwOiB3cmFwIWltcG9ydGFudDtcclxufS5yb3VuZGVke1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNDc1cmVtIWltcG9ydGFudDtcclxufS53LWxnLTE1MHB4e1xyXG4gIHdpZHRoOiA1MHB4IWltcG9ydGFudDtcclxufS5oLWxnLTE1MHB4e1xyXG4gIGhlaWdodDogNjNweCFpbXBvcnRhbnQ7XHJcbn0uYmctbGlnaHR7XHJcbiAgLS1icy1iZy1yZ2ItY29sb3I6IDI0OSwyNDksMjQ5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjUhaW1wb3J0YW50O1xyXG59LmZsZXgtY2VudGVye1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0uZmxleC1ncm93LTF7XHJcbiAgZmxleC1ncm93OiAxIWltcG9ydGFudDtcclxufS5mbGV4LXdyYXB7XHJcbiAgZmxleC13cmFwOiB3cmFwIWltcG9ydGFudDtcclxufS5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbntcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4haW1wb3J0YW50O1xyXG59LmFsaWduLWl0ZW1zLXN0YXJ0e1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0IWltcG9ydGFudDtcclxufS5mbGV4LWNvbHVtbntcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uIWltcG9ydGFudDtcclxufVxyXG4uYm9yZGVyLWdyYXktMzAwIHtcclxuICBib3JkZXItY29sb3I6ICNkYmRmZTkhaW1wb3J0YW50O1xyXG59LmJvcmRlci1kYXNoZWQge1xyXG4gIGJvcmRlci1zdHlsZTogZGFzaGVkIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICNkYmRmZTk7XHJcbn0uYm9yZGVyLWRhc2hlZCB7XHJcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2RiZGZlOTtcclxufS5weC00IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0haW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMC41cmVtIWltcG9ydGFudDtcclxufS5weS0zIHtcclxuICBwYWRkaW5nLXRvcDogMC41cmVtIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtIWltcG9ydGFudDtcclxufS5taW4tdy0xMjVweCB7XHJcbiAgbWluLXdpZHRoOiAxMjVweCFpbXBvcnRhbnQ7XHJcbn0uZnctc3RsIHtcclxuICBjb2xvcjogIzRkNWFhMTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59LmZzLTcge1xyXG4gIGZvbnQtc2l6ZTogLjk1cmVtIWltcG9ydGFudDtcclxufS5mdy1zZW1pLWx0IHtcclxuICBjb2xvcjogIzhmOGY4ZjtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbn0uZnMtOCB7XHJcbiAgZm9udC1zaXplOiAuODVyZW0haW1wb3J0YW50O1xyXG59XHJcbi5tdy1sZy03NXB4e1xyXG4gIG1heC13aWR0aDogMzVweCFpbXBvcnRhbnQ7XHJcbn1cclxuLm1lLTIge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4ubXktY3JkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDIwcHggIzU4NjdkZDM4O1xyXG59XHJcbi5rdC1zdWItYm94LXZldyAubWItMSAuZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcbi5teS1zdWItdGFzay10aXR0bGUgaDUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjNjg2YzhiO1xyXG4gIHBhZGRpbmc6IDRweCAwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcbmJ1dHRvbi5idG4uYnRuLXNtLmJ0bi1iZy1saWdodC5DbHItYWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYyO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uS3QtYWN0LWJ0bmIge1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzcHggIWltcG9ydGFudDtcclxufVxyXG4ua3QtYWN0LW5vIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjNmZjtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiAjMjc4NmZiO1xyXG59XHJcbi5rdC1hY3Qtbm8gc3BhbiB7XHJcbiAgY29sb3I6ICM4MTgwODA7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC43cHg7XHJcbn1cclxuLmt0LWFjdC1ubyBwIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmt0LWFjdC10dGwtdiBoNiB7XHJcbiAgY29sb3I6ICM2Yzc5ZTE7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ua3QtYWN0LXR0bC12IHAge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBjb2xvcjogI2EzYTNhMztcclxufVxyXG5cclxuLmt0LWFjdC1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ua3QtYWN0LWJ0bnMge1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuLmt0LWRsLWljb24uZGItdiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ua3QtZGwtaWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG4ua3QtZGwtaWNvbjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4ua3QtYWN0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDIwcHggI2NjY2NjYzc4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5zcGFuLmt0LWFjdC1zdmctaWMge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWFyZ2luOiAwcGMgNHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxufVxyXG5zcGFuLmt0LWFjdC1zdmctaWMgc3ZnIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMi4zcHg7XHJcbn1cclxuLmt0LXZpLWFjdC1kdGwge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4ua3Qtc3ViLWJveC12ZXcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMjBweCAjNTg2N2RkMzg7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi5rdC1wb3J0bGV0X19mb290IHtcclxuICBwYWRkaW5nOiAwcmVtIDJyZW07XHJcbn1cclxuLmt0LXBvcnRsZXRfX2Zvb3Qge1xyXG4gIGJveC1zaGFkb3c6IDBweCAtNXB4IDZweCAjY2NjY2NjYTE7XHJcbn1cclxuLmFkZF9uZXdfcHJvamVjdF9zbGlkZSAua3QtcG9ydGxldF9fYm9keV9zY3JvbGx7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XHJcbiAgbWluLWhlaWdodDo1MHZoOztcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5hZGQtdmhkLWh7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTE3cHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuLyotLS0tLS10byBzaG93IHRlYW0gbWVtYmVycyAtLS0tLS0tLS0tKi9cclxuLnN5bWJvbC1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uc3ltYm9sIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNDc1cmVtO1xyXG59XHJcbi5mbGV4LW5vd3JhcCB7XHJcbiAgZmxleC13cmFwOiBub3dyYXAhaW1wb3J0YW50O1xyXG59LnN5bWJvbC1ncm91cC5zeW1ib2wtaG92ZXIgLnN5bWJvbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59LnN5bWJvbC1ncm91cCAuc3ltYm9sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMDtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xyXG59LnN5bWJvbC5zeW1ib2wtY2lyY2xlLCAuc3ltYm9sLnN5bWJvbC1jaXJjbGUgLnN5bWJvbC1sYWJlbCwgLnN5bWJvbC5zeW1ib2wtY2lyY2xlPmltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5zeW1ib2wgLnN5bWJvbC1sYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMyNTJmNGE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjQ3NXJlbTtcclxufS50ZXh0LWludmVyc2Utd2FybmluZyB7XHJcbiAgY29sb3I6ICNmZmZmZmYhaW1wb3J0YW50O1xyXG59LmJnLXdhcm5pbmcge1xyXG4gIC0tYnMtYmctcmdiLWNvbG9yOiByZ2JhKDI1NSwxOTksMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzcwMCFpbXBvcnRhbnQ7XHJcbn1cclxuLmZ3LWJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAhaW1wb3J0YW50O1xyXG59XHJcbi5zeW1ib2wgLnN5bWJvbC1sYWJlbCB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufS5zeW1ib2wtZ3JvdXAgLnN5bWJvbC1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59LnN5bWJvbC5zeW1ib2wtMzVweCAuc3ltYm9sLWxhYmVsIHtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbn0uc3ltYm9sLWdyb3VwLnN5bWJvbC1ob3ZlciAuc3ltYm9sIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0uc3ltYm9sIC5zeW1ib2wtbGFiZWw6YWZ0ZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNDc1cmVtO1xyXG59LnN5bWJvbC1ncm91cCAuc3ltYm9sLWxhYmVsOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxufVxyXG4uYmctcHJpbWFyeSB7XHJcbiAgLS1icy1iZy1yZ2ItY29sb3I6IHJnYmEoNjIsMTUxLDI1NSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOTdmZiFpbXBvcnRhbnQ7XHJcbn0udGV4dC1pbnZlcnNlLXByaW1hcnkge1xyXG4gIGNvbG9yOiAjZmZmZmZmIWltcG9ydGFudDtcclxufVxyXG4uc3ltYm9sLnN5bWJvbC0zNXB4PmltZyB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4udGV4dC1pbnZlcnNlLWRhbmdlciB7XHJcbiAgY29sb3I6ICNmZmZmZmYhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LWdyYXktMzAwIHtcclxuICBjb2xvcjogI2RiZGZlOSFpbXBvcnRhbnQ7XHJcbn1cclxubGFiZWwubXktY2hvc3NlLWZsdiB7XHJcbiAgbWluLWhlaWdodDogNTVweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZTE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubXktY2hvc3NlLWZsdiAuZm9ybWJvbGQtZHJvcC1maWxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjNzE3MTcxO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBsaW5lLWhlaWdodDogMTJweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4ucmlnaHQtc2lkZS1hY3Qge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZDlkOWQ5O1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDExN3B4KTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4ua3QtYWN0aW9uLWxpc3Qge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuLkFjdC10aXR0bGUtUmlnaHQgaDMge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59LkFjdC10aXR0bGUtUmlnaHQge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDlweDtcclxufVxyXG4ua3QtcmlnaHQtc3R5bGUge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNkOWQ5ZDk7XHJcbn1cclxuLnNtLWJ0bi1zdWJtaXQge1xyXG4gIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjMgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNtLWJ0bi1jbG9zZXtcclxuICBtaW4td2lkdGg6IDYwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLlZXXzYwe1xyXG4gIHdpZHRoOiA2MHZ3OztcclxufVxyXG4uYWN0LWJkLWJveCB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufWxhYmVsLmNoZWNrYm94Lmt0LWZudC12ZCBpbnB1dCB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDFweDtcclxuICAvKiBoZWlnaHQ6IDEycHg7ICovXHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxubGFiZWwuY2hlY2tib3gua3QtZm50LXZkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICM2ZTc0OTc7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDI1MDBweCl7XHJcbiAgLnRhYi1jb250ZW50LmN1c3RvbSAudGFiLXBhbmUge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbn1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpe1xyXG4gICAgLnRhYi1jb250ZW50LmN1c3RvbSAudGFiLXBhbmUge1xyXG4gICAgICB3aWR0aDogNjB2dztcclxuICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyo9PT09PT09PT0gcHJvamVjdCBpbmZvIHNpZGUgYmFyIGNzcyA9PT09PT09PT09Ki9cclxuICAgIC5wcm9qZWN0LWluZm8tc2lkZS1iYXIge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRURFQUU5O1xyXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4xcmVtIDFyZW0gMC4yNXJlbSByZ2IoMCAwIDAvNSUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5vcGVuX3NpZGViYXJfaW5mbyB7XHJcbiAgICB3aWR0aDogNTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmt0LWluZm8tYm9keSB7XHJcbiAgbWFyZ2luOiAxLjNyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWRlZDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0dmgpO1xyXG59XHJcbi5rdC10aXRsZS1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI3Y2UyO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmt0LWluZm8tYm94LXRpdHRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzYzODhlMztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7ICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG4ua3QtcHJvamVjdC10eXBlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLkt0LVBkLVN0YXR1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW46IDBweCAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogNnB4IDEzcHg7IFxyXG4gICAgIG1heC13aWR0aDogMTQwcHg7XHJcbiAgbWluLXdpZHRoOiAxMzBweDtcclxufVxyXG4uQ29yZV90YXNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNDNhO1xyXG59XHJcbi5rdC1wcm9qZWN0LW5hbWUgaDQge1xyXG4gIGNvbG9yOiAjMTgxODE4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmt0LXByb2plY3QtZGVzYyBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4ua3QtcHJvamVjdC1kZXNjIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmt0LWluZm8tYm94IHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XHJcbn1cclxuLk1vcmVfaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NzRmZSAhaW1wb3J0YW50O1xyXG59XHJcbi5rdC1pbmZvLWxhYmxlLXYge1xyXG4gIGNvbG9yOiAjOTM5MzkzO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmt0LWluZm8tZGF0YS12IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgcGFkZGluZzogNXB4IDRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjNGY0ZjRmO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmt0LWNsaWVudC1pY29uIGltZyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4ua3QtY2xpZW50LWljb24ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmJnLWxpZ2h0LXNoYWRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFmMmZkICFpbXBvcnRhbnQ7XHJcbn1cclxuLkRlbGF5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFZDYyMDcgIWltcG9ydGFudDtcclxufVxyXG4ua3QtcHJvamVjdC1zdHMtZGF0YSB7XHJcbiAgbWFyZ2luLXRvcDogMTdweDtcclxuICBjb2xvcjogIzNiM2IzYjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ucHJvZ3Jlc3Mua3QtcHJvamNlY3QtcHJvZ3Jlc3MuYmFyIHtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxufVxyXG4uYmctaW5wcm9ncmVzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcclxufVxyXG4uYmctZGVsYXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFZDYyMDc7XHJcbn1cclxuLmJnLWRvbmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YWFkM2E7XHJcbn1cclxuLmt0LXByZy1iYXItaW5mbyB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMzZDNkM2Q7XHJcbn1cclxuLmt0LXByZy1iYXItaW5mbyBiIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmt0LXRvdGFsLXByZy12bCBiIHtcclxuICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcclxufVxyXG4uRGVhZGxpbmVfRXh0ZW5ke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDgzODM7XHJcbn1cclxuYnV0dG9uLkt0LUFwcHJvdmFsLWJ0bnMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjNGY0ZjRmO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn0uQnRuX0FjY3BldCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjOGFiOTkxICFpbXBvcnRhbnQ7XHJcbn1cclxuLkJ0bl9FZGl0X0FjY2VwdCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjN2NhY2NkICFpbXBvcnRhbnQ7XHJcbn1cclxuLkJ0bl9Db25kaXRpb25hbF9BY2NlcHQge1xyXG4gIGJvcmRlci1jb2xvcjogIzQwN2Y0YyAhaW1wb3J0YW50O1xyXG59XHJcbi5CdG5fUmVqZWN0IHtcclxuICBib3JkZXItY29sb3I6ICNjZjhlNjYgIWltcG9ydGFudDtcclxufVxyXG4ua3QtYXBwcm92YWwtbXNnIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDg1cHg7XHJcbn1cclxuLnRleHQtZW5kIHtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuLmJ0bi1wcm9qZWN0LXN0diB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbn1cclxuLkJ0LVN1Ym1pdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3ODc4NztcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcbi5rdC1pbmZvLXBnLWZvb3RlciB7XHJcbiAgbWFyZ2luOiA1cHggMTBweDtcclxufVxyXG5cclxuXHJcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE4MDBweCkgYW5kIChtYXgtd2lkdGg6IDI1MDBweCkgIHtcclxuICAub3Blbl9zaWRlYmFyX2luZm8ge1xyXG4gICAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM4NXB4KSBhbmQgKG1heC13aWR0aDogMTgwMHB4KSAge1xyXG4gIC5vcGVuX3NpZGViYXJfaW5mbyB7XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzg1cHgpICB7XHJcbiAgLm9wZW5fc2lkZWJhcl9pbmZvIHtcclxuICAgIHdpZHRoOiA1NSUgIWltcG9ydGFudDtcclxufVxyXG59XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCl7XHJcbiAgICAub3Blbl9zaWRlYmFyX2luZm8ge1xyXG4gICAgICB3aWR0aDogNTglICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICAgfVxyXG4gIC8qPT09PT09PT09IHByb2plY3QgaW5mbyBzaWRlIGJhciBjc3MgZW5kPT09PT09PT09Ki8iXX0= */"] });


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