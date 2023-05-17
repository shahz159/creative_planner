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
function ProjectsSummaryComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 88)(1, "label", 89)(2, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function ProjectsSummaryComponent_div_67_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13); const item_r10 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r12.isTypeChecked(item_r10)); })("ngModelChange", function ProjectsSummaryComponent_div_67_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13); const item_r10 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](item_r10.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", item_r10.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r10.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r10.Count);
} }
function ProjectsSummaryComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 88)(1, "label", 92)(2, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function ProjectsSummaryComponent_div_74_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r17); const item_r15 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r16.isStatusChecked(item_r15)); })("ngModelChange", function ProjectsSummaryComponent_div_74_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r17); const item_r15 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](item_r15.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", item_r15.checked)("checked", item_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r15.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r15.Count);
} }
function ProjectsSummaryComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 88)(1, "label", 92)(2, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function ProjectsSummaryComponent_div_81_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21); const item_r19 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r20.isEmpChecked(item_r19)); })("ngModelChange", function ProjectsSummaryComponent_div_81_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21); const item_r19 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](item_r19.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", item_r19.checked)("checked", item_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r19.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r19.Count);
} }
function ProjectsSummaryComponent_span_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("About (", ctx_r6._CurrentpageRecords, ") results found");
} }
function ProjectsSummaryComponent_tr_135_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "a", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_tr_135_div_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r64); const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r62._OpenMemosInfo(item_r23.Project_Code, item_r23.Project_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "img", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function ProjectsSummaryComponent_tr_135_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "No Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r23.ReportType);
} }
function ProjectsSummaryComponent_tr_135_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r23.SubmissionType1);
} }
function ProjectsSummaryComponent_tr_135_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](2, 1, item_r23.DeadLine, "dd-MM-yyyy"), "");
} }
function ProjectsSummaryComponent_tr_135_a_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 122)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Owner:", item_r23.Project_Owner, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r23.Owner);
} }
function ProjectsSummaryComponent_tr_135_a_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 122)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Owner & Support: ", item_r23.Project_Owner, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r23.Owner);
} }
function ProjectsSummaryComponent_tr_135_a_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 122)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Responsible: ", item_r23.Team_Res, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r23.Resp);
} }
function ProjectsSummaryComponent_tr_135_a_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 122)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Authority: ", item_r23.Team_Autho, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r23.Autho);
} }
function ProjectsSummaryComponent_tr_135_a_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 122)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Responsible & Authority: ", item_r23.Team_Autho, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r23.Autho);
} }
function ProjectsSummaryComponent_tr_135_a_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 122)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Support: ", item_r23.Team_Support, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r23.Support);
} }
function ProjectsSummaryComponent_tr_135_a_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 123)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "1+");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate1"]("title", "Coordinator & Informer: ", item_r23.Team_Coor, " ");
} }
function ProjectsSummaryComponent_tr_135_a_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 123)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "1+");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate2"]("title", "Coordinator: ", item_r23.Team_Coor, " & Informer: ", item_r23.Team_Informer, " ");
} }
function ProjectsSummaryComponent_tr_135_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_div_49_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 127)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", item_r23.Delaydays, " days");
} }
function ProjectsSummaryComponent_tr_135_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Delay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ProjectsSummaryComponent_tr_135_div_49_span_3_Template, 3, 1, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Delaydays > 0);
} }
function ProjectsSummaryComponent_tr_135_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "ToDo InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "ToDo Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "New Todo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Completion Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Forward Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Project Complete Rejected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Enactive Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Version ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Deadline Extend Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Hold ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Project Hold Under Approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "ToDo Achieved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Standardtask Enactive Hold ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function ProjectsSummaryComponent_tr_135_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr", 94)(1, "td", 95)(2, "a", 96)(3, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_tr_135_Template_i_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r80); const item_r23 = restoredCtx.$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r79.openInfo(item_r23.Project_Code, item_r23.Project_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "a", 98)(5, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_tr_135_Template_i_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r80); const item_r23 = restoredCtx.$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r81.moreDetails(item_r23.Project_Code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, ProjectsSummaryComponent_tr_135_div_7_Template, 3, 0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, ProjectsSummaryComponent_tr_135_ng_template_8_Template, 2, 0, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "td")(11, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "td")(14, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](17, ProjectsSummaryComponent_tr_135_div_17_Template, 3, 0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, ProjectsSummaryComponent_tr_135_ng_template_18_Template, 2, 1, "ng-template", null, 104, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "td")(21, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](24, ProjectsSummaryComponent_tr_135_div_24_Template, 3, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, ProjectsSummaryComponent_tr_135_ng_template_25_Template, 3, 4, "ng-template", null, 105, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](31, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "td", 108)(33, "div", 109)(34, "div", 110)(35, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](36, ProjectsSummaryComponent_tr_135_a_36_Template, 3, 2, "a", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](37, ProjectsSummaryComponent_tr_135_a_37_Template, 3, 2, "a", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](38, ProjectsSummaryComponent_tr_135_a_38_Template, 3, 2, "a", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](39, ProjectsSummaryComponent_tr_135_a_39_Template, 3, 2, "a", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](40, ProjectsSummaryComponent_tr_135_a_40_Template, 3, 2, "a", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](41, ProjectsSummaryComponent_tr_135_a_41_Template, 3, 2, "a", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](42, ProjectsSummaryComponent_tr_135_a_42_Template, 3, 1, "a", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](43, ProjectsSummaryComponent_tr_135_a_43_Template, 3, 2, "a", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "svg", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](46, "path", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "td", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](48, ProjectsSummaryComponent_tr_135_div_48_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](49, ProjectsSummaryComponent_tr_135_div_49_Template, 4, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](50, ProjectsSummaryComponent_tr_135_div_50_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](51, ProjectsSummaryComponent_tr_135_div_51_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](52, ProjectsSummaryComponent_tr_135_div_52_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](53, ProjectsSummaryComponent_tr_135_div_53_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](54, ProjectsSummaryComponent_tr_135_div_54_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](55, ProjectsSummaryComponent_tr_135_div_55_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](56, ProjectsSummaryComponent_tr_135_div_56_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](57, ProjectsSummaryComponent_tr_135_div_57_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](58, ProjectsSummaryComponent_tr_135_div_58_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](59, ProjectsSummaryComponent_tr_135_div_59_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](60, ProjectsSummaryComponent_tr_135_div_60_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](61, ProjectsSummaryComponent_tr_135_div_61_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](62, ProjectsSummaryComponent_tr_135_div_62_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](63, ProjectsSummaryComponent_tr_135_div_63_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](64, ProjectsSummaryComponent_tr_135_div_64_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](65, ProjectsSummaryComponent_tr_135_div_65_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](66, ProjectsSummaryComponent_tr_135_div_66_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](67, ProjectsSummaryComponent_tr_135_div_67_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](9);
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](19);
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Link_Status == 1)("ngIfElse", _r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r23.Project_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r23.Exec_BlockName);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.ReportType == null)("ngIfElse", _r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r23.Team_Res);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Exec_BlockName == "Standard Tasks" || item_r23.Exec_BlockName == "Routine Tasks")("ngIfElse", _r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](28, 39, item_r23.LastUpdate, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](31, 42, item_r23.LastUpdate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Owner != item_r23.Support);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Owner == item_r23.Support);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Resp != item_r23.Autho);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Resp != item_r23.Autho);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Resp == item_r23.Autho);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Owner != item_r23.Support);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Coord == item_r23.Informer);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Coord != item_r23.Informer);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "ToDo InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "ToDo Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "New Todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "Completion Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "Forward Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "Project Complete Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "Enactive Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "Version");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "Project Holded");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "Project Hold Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "ToDo Achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r23.Status == "Standardtask Enactive Hold");
} }
function ProjectsSummaryComponent_div_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 132)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r8._filtersMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r8._filtersMessage2);
} }
function ProjectsSummaryComponent_div_152_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r82.Subject, " ");
} }
function ProjectsSummaryComponent_div_152_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
} if (rf & 2) {
    const item_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r82.Subject, " ");
} }
function ProjectsSummaryComponent_div_152_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 84)(1, "div", 85)(2, "h5", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_div_152_Template_h5_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r90); const item_r82 = restoredCtx.$implicit; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r89.openUrl(item_r82.Url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ProjectsSummaryComponent_div_152_div_3_Template, 3, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ProjectsSummaryComponent_div_152_ng_template_4_Template, 2, 1, "ng-template", null, 133, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r82 = ctx.$implicit;
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", item_r82.Attachment == true)("ngIfElse", _r85);
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
    GetProjectsByUserName(type) {
        this.Type = type;
        this.BsService.setProjectSummaryType(type);
        if (this.Type == 'ALL Projects') {
            this.ObjUserDetails.PageNumber = this.CurrentPageNo;
            this.ObjUserDetails.PageSize = 30;
            this.service.GetProjectsByUserName_Service_ForSummary(this.ObjUserDetails).subscribe(data => {
                this._ProjectDataList = data;
                //  console.log("Summary Data---->", this._ProjectDataList);
                this.ActualDataList = data;
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
            this.service.GetProjectsByOwner_Service_ForSummary(this.ObjUserDetails).subscribe(data => {
                this._ProjectDataList = data;
                //  console.log("Summary Data---->", this._ProjectDataList);
                this.ActualDataList = data;
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
                // console.log(this._totalProjectsCount, this._CurrentpageRecords,this.LastPage,this.lastPagerecords );
            });
        }
        else if (this.Type == 'RACIS Projects') {
            this._objDropdownDTO.EmpNo = this.Current_user_ID;
            this._objDropdownDTO.Selected_ProjectType = this.selectedType_String;
            this._objDropdownDTO.Selected_Status = this.selectedStatus_String;
            this._objDropdownDTO.SelectedEmp_No = this.selectedEmp_String;
            this._objDropdownDTO.Selected_SearchText = this.searchText;
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
        }
        else {
            this.edited = true;
        }
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
ProjectsSummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: ProjectsSummaryComponent, selectors: [["app-projects-summary"]], decls: 172, vars: 42, consts: [["id", "sumdet", 1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height", "side_view"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "dropdown"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "kt-portlet__head-title", "cursor-pointer", "dropdown-toggle", "select-box"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "main-d"], [3, "ngClass", "click"], [1, "kt-portlet__head-label", "mr-2"], [1, "kt-header__topbar-item", "kt-header__topbar-item--search", "mr-3"], [1, "kt-header__topbar-wrapper"], [1, "kt-quick-search", "kt-quick-search--inline"], [1, "kt-quick-search__form"], [1, "input-group"], ["type", "text", "placeholder", "Search Projects", "autofocus", "", 1, "form-control", "project-search", "kt-quick-search__input", "pl-3", 2, "width", "300px", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "input-group-prepend"], ["type", "submit", 1, "input-group-text", 3, "click"], [1, "flaticon2-search-1"], [1, "mr-3"], [4, "ngIf"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "disabled", "click"], [1, "fas", "fa-angle-left", "mr-0"], [1, "fas", "fa-angle-right", "mr-0"], [1, "mr-2"], ["data-toggle", "kt-tooltip", "title", "Click to sort Asc", 1, "btn", "btn-label-primary", "btn-sm", 3, "hidden", "click"], [1, "fa", "fa-sort-alpha-down-alt", "font-16", "mr-0"], ["data-toggle", "kt-tooltip", "title", "Click to sort Desc", 1, "btn", "btn-label-primary", "btn-sm", 3, "hidden", "click"], [1, "fas", "fa-sort-alpha-up", "font-16", "mr-0"], [1, "stores-sec", "mr-1"], [1, "nav", "navbar-nav", "filters"], ["id", "filtermenu", 1, "dropdown", "mega-dropdown"], ["data-toggle", "dropdown", 3, "ngClass"], [1, "fas", "fa-ellipsis-v", "mr-0"], [1, "dropdown-menu", "mega-dropdown-menu"], [3, "click"], [1, "col-md-10"], [1, "d-inline-block"], [1, "col-md-2"], [1, "col-md-12"], ["type", "text", "placeholder", "Search Filters", 1, "form-control", "kt-quick-search__input", "pl-3", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [1, "col-md-4"], [1, "count-height"], ["class", "d-flex justify-content-between", 4, "ngFor", "ngForOf"], ["data-toggle", "dropdown", 1, "btn", "btn-label-success", "btn-outline-success", "btn-upper", "btn-sm", "btn-bold", "mr-2"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-2", 3, "click"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fas", "fa-sync-alt", "mr-0"], [1, "kt-portlet"], [1, "kt-portlet__body", "kt-portlet__body_scroll", "pt-0"], [1, "card", "projects-list", "no-border"], [1, "card-body"], ["id", "project-4_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4", "no-footer"], [1, "col-sm-12"], [1, "table-responsive"], ["role", "grid", 1, "table", "table-hover", "dataTable", "no-footer", "dtr-inline", 2, "width", "0px"], ["role", "row"], ["tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-sort", "ascending", "aria-label", ": activate to sort column descending", 2, "width", "100px"], ["data-order", "desc", "data-name", "Project_Name", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Title &amp; Description: activate to sort column ascending", 1, "curser-pointer", 2, "width", "0px", 3, "appSort", "click"], ["data-toggle", "kt-tooltip", "title", "Click to sort", 1, "mr-2", 3, "hidden"], [1, "fas", "fa-sort-alpha-up"], [1, "fa", "fa-sort-alpha-down-alt"], ["data-order", "desc", "data-name", "Exec_BlockName", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Type: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], [1, "fas", "fa-sort"], ["data-order", "desc", "data-name", "ReportType", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Category: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["data-order", "desc", "data-name", "TM_DisplayName", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "User Name: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["data-order", "desc", "data-name", "DeadLine", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "End Date: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["data-order", "desc", "data-name", "Users", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Users: activate to sort column ascending", 1, "curser-pointer"], ["data-order", "desc", "data-name", "Status", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Status: activate to sort column ascending", 1, "curser-pointer", 3, "appSort"], ["role", "row", "class", "odd", 4, "ngFor", "ngForOf"], ["class", "text-center py-4", "style", "color: lightgrey", 4, "ngIf"], ["id", "MemosSideBar", 1, "sideInfobar", "animate-right"], [1, "kt-portlet__head", "p-3", "bg-primary"], ["href", "javascript:void(0)", 1, "closebtn", "pull-right", "text-white", 3, "click"], [1, "title-sidebar", "mb-0", "text-white"], [1, "curser-pointer"], ["width", "25px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png"], [1, "text-small", "text-white"], [1, "kt-portlet__body", "p-3"], ["id", "accordionExample7", 1, "accordion", "accordion-light", "accordion-svg-icon"], [1, "kt-widget1", "kt-widget1--fit"], ["class", "kt-widget1__item", 4, "ngFor", "ngForOf"], ["id", "DARSideBar", 1, "sideInfobar", "animate-right"], [1, "kt-widget1__item"], [1, "kt-widget1__info", "kt-align-left"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], ["id", "rightbar-overlay", 3, "click"], [1, "d-flex", "justify-content-between"], [1, "kt-checkbox"], ["type", "checkbox", 3, "ngModel", "change", "ngModelChange"], [1, "count-btn"], [1, "kt-checkbox", "mb-3"], ["type", "checkbox", 3, "ngModel", "checked", "change", "ngModelChange"], ["role", "row", 1, "odd"], ["align", "center"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "Project Info!", 1, "btn", "px-0", "mr-2"], [1, "fa", "fa-info-circle", "info-icon-cir", 3, "click"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "More Info!", 1, "btn", "px-0", "mr-2"], [1, "fa", "fa-chart-bar", "info-icon-cir", 3, "click"], [4, "ngIf", "ngIfElse"], ["not_Linked", ""], [1, "kt-widget__title", "mb-0"], [1, "kt-widget__other"], ["ReportType", ""], ["Projecttype", ""], ["data-toggle", "tooltip", "data-placement", "top", 3, "title"], [1, "kt-widget__other", "text-info"], ["data-toggle", "tooltip", "data-placement", "top", "title", "RACIS"], [1, "kt-widget__details"], [1, "kt-section__content", "kt-section__content--solid"], [1, "kt-media-group"], ["data-toggle", "kt-tooltip", "data-skin", "brand", "data-placement", "top", "data-original-title", "John Myer", "class", "kt-media kt-media--sm kt-media--circle", 3, "title", 4, "ngIf"], ["data-toggle", "kt-tooltip", "data-skin", "brand", "data-placement", "top", "data-original-title", "Micheal York", "class", "kt-media kt-media--sm kt-media--circle", 3, "title", 4, "ngIf"], [1, "pin-icn", "d-none"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-pin-angle-fill"], ["d", "M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"], [1, "stat-td"], [1, "curser-pointer", 3, "click"], ["width", "19px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png", "title", "Linked"], ["width", "19px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png", "title", "Not Linked", 1, "black-white"], [1, "kt-widget__other", "text-nowrap"], ["data-toggle", "kt-tooltip", "data-skin", "brand", "data-placement", "top", "data-original-title", "John Myer", 1, "kt-media", "kt-media--sm", "kt-media--circle", 3, "title"], ["data-toggle", "kt-tooltip", "data-skin", "brand", "data-placement", "top", "data-original-title", "Micheal York", 1, "kt-media", "kt-media--sm", "kt-media--circle", 3, "title"], [1, "text-info", "font-weight-400"], [1, "text-danger", "font-weight-400"], ["class", "text-danger delayDays", 4, "ngIf"], [1, "text-danger", "delayDays"], [1, "text-warning", "font-weight-400"], [1, "text-primary", "font-weight-400"], [1, "text-success", "font-weight-400"], [1, "font-weight-400", 2, "color", "#c0b5dc"], [1, "text-center", "py-4", 2, "color", "lightgrey"], ["Onlysubject", ""], [1, "fas", "fa-paperclip", 2, "color", "#A9A9A9"], [1, "fas", "fa-circle"]], template: function ProjectsSummaryComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](76, "div", 42)(77, "div", 43)(78, "p")(79, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](80, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](81, ProjectsSummaryComponent_div_81_Template, 7, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](82, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](83, "br")(84, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](85, "div", 1)(86, "div", 37)(87, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](88, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](89, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_89_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](90, "Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](91, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_button_click_91_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](92, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](93, "div", 49)(94, "div", 50)(95, "div", 51)(96, "div", 52)(97, "div", 53)(98, "div", 1)(99, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](100, ProjectsSummaryComponent_span_100_Template, 2, 1, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](101, "div", 55)(102, "table", 56)(103, "thead")(104, "tr", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](105, "th", 58)(106, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](107, "th", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_th_click_107_listener() { return ctx._SortPortfoliolist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](108, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](109, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](110, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](111, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](112, " ProjectName ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](113, "th", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](114, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](115, " ProjectType ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](116, "th", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](117, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](118, " Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](119, "th", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](120, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](121, " Responsible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](122, "th", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](123, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](124, " Deadline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](125, "th", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](126, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](127, " Last Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](128, "th", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](129, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](130, " RACIS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](131, "th", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](132, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](133, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](134, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](135, ProjectsSummaryComponent_tr_135_Template, 68, 44, "tr", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](136, ProjectsSummaryComponent_div_136_Template, 5, 2, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](137, "div", 72)(138, "div", 73)(139, "div", 5)(140, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_a_click_140_listener() { return ctx._CloseMemosidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](141, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](142, "div", 75)(143, "h5", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](144, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](145, " Linked Memos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](146, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](148, "div", 79)(149, "div", 80)(150, "div", 52)(151, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](152, ProjectsSummaryComponent_div_152_Template, 6, 2, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](153, "div", 83)(154, "div", 73)(155, "div", 5)(156, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_a_click_156_listener() { return ctx._CloseDARSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](157, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](158, "div", 75)(159, "h5", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](160, " DAR Achievements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](161, "div", 79)(162, "div", 80)(163, "div", 52)(164, "div", 81)(165, "div", 84)(166, "div", 85)(167, "h5", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](168);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](169, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](170, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](171, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProjectsSummaryComponent_Template_div_click_171_listener() { return ctx.closeInfo(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx._totalProjectsCount, "");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](68, 33, ctx.TypeContInFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](75, 36, ctx.StatusCountFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](82, 39, ctx.EmpCountInFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](19);
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _sort_directive__WEBPACK_IMPORTED_MODULE_12__.SortDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__.Ng2SearchPipe, src_app_Shared_DateAgo_DateAgoPipe__WEBPACK_IMPORTED_MODULE_14__.DateAgoPipe], styles: [".list-icon-color[_ngcontent-%COMP%]{\r\n    color: #969696\r\n   }\r\n\r\n  .loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\r\n    background: #0dc5c1;\r\n    animation: load1 1s infinite ease-in-out;\r\n    width: 1em;\r\n    height: 4em;\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%] {\r\n    color: #0dc5c1;\r\n    text-indent: -9999em;\r\n    margin: 88px auto;\r\n    position: relative;\r\n    font-size: 11px;\r\n    transform: translateZ(0);\r\n    animation-delay: -0.16s;\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    top: 0;\r\n    content: '';\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%]:before {\r\n    left: -1.5em;\r\n    animation-delay: -0.32s;\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%]:after {\r\n    left: 1.5em;\r\n  }\r\n\r\n  @keyframes load1 {\r\n    0%,\r\n    80%,\r\n    100% {\r\n      box-shadow: 0 0;\r\n      height: 4em;\r\n    }\r\n    40% {\r\n      box-shadow: 0 -2em;\r\n      height: 5em;\r\n    }\r\n  }\r\n\r\n  .center[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 200px;\r\n  }\r\n\r\n  .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\r\n    border-radius: 2px;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]{\r\n  width: 400px;\r\n  height: auto;\r\n  max-height: 400px;\r\n  padding: 10px;\r\n  top: 38px !important;\r\n  left: auto !important;\r\n  right: 0px !important;\r\n  overflow-y: auto;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n  .ngx-pagination[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n}\r\n\r\n  #backBtn[_ngcontent-%COMP%]:hover{\r\n background-color:#5867dd ;\r\n color: white; \r\n}\r\n\r\n  #Mdl_closebtn[_ngcontent-%COMP%]:hover{\r\n  background-color: #dc3545;\r\n  color:white\r\n}\r\n\r\n  .text-warning-1[_ngcontent-%COMP%]{\r\n  background-color: #ffe0a7;\r\n  color:#FFA800;\r\n  width: auto;\r\n  padding: 4px 8px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  .text-danger-1[_ngcontent-%COMP%]{\r\n  color: #F64E60;\r\n  background-color: #FFE2E5;\r\n  width: auto;\r\n  padding: 4px 8px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%], .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-up[_ngcontent-%COMP%]{\r\n  border-top: 7px solid #adadad !important;\r\n    border-left: 7px solid transparent !important;\r\n    border-right: 7px solid transparent !important\r\n}\r\n\r\n  .multiselect-dropdown[_ngcontent-%COMP%]{\r\n  width: 80px !important;\r\n\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]{\r\n    border: 0;\r\n    background: none;\r\n    font-size: 16px;\r\n    outline: none !important;\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 30px;\r\n    width: 30px;\r\n    background-color: #f5f6fc;\r\n    border: 1px solid #b3bcff;\r\n    color: #5867dd;\r\n    transition: all 0.3s ease;\r\n    cursor: pointer;\r\n    margin: 0 8px 0 0;\r\n    border-radius: 0;\r\n    border-radius: 4px;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon[_ngcontent-%COMP%] {\r\n    height: 18px;\r\n    width: 18px;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]{\r\n  height: 25px;\r\n  width: 25px;\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{\r\n    fill: #5867dd;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\r\n    fill: #5867dd;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\r\n    fill: #fff;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{\r\n  fill: #fff;\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover, .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]{\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n  }\r\n\r\n  .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    color: #ccc;\r\n  }\r\n\r\n  .card-title[_ngcontent-%COMP%]   .favourite.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{\r\n    color: #ffc107;\r\n  }\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    border-color: #d6d6d6;\r\n  }\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.success {\r\n    border-left: 5px solid #1dc9b7;\r\n    \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.warning {\r\n    border-left: 5px solid #ffb822; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.info {\r\n    border-left: 5px solid #2786fb; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.danger {\r\n    border-left: 5px solid #F58A8B; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.UnderApprovals {\r\n  border-left: 5px solid #BD838C; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.ForwardUnderApproval {\r\n  border-left: 5px solid #E0B1D7; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.completeUnderApproval {\r\n  border-left: 5px solid #98c7bf; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.projectHold {\r\n  border-left: 5px solid #C0B5DC; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.HoldunderApp {\r\n  border-left: 5px solid #a85098; \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.DeadlineExtended{\r\n  border-left: 5px solid #E0B1D7; \r\n}\r\n\r\n  .delayDays[_ngcontent-%COMP%]{\r\n  font-size: 11px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n  transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\r\n  fill: #5E5F63;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\r\n  padding: 0.2rem 20px;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%] {\r\n  width: 800px;\r\n  max-width: 100%;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  vertical-align: top;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n  .kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n  min-height: 60px;\r\n}\r\n\r\n  .kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n}\r\n\r\n  .dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc !important;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\r\n  background-color: transparent !important;\r\n  color: #74788D !important;\r\n  cursor: auto;\r\n}\r\n\r\n  .kt-nav__link-text[_ngcontent-%COMP%]:hover {\r\n  color: #74788D !important;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\r\n  background-color: rgba(154, 100, 142, 0.2);\r\n  color: #333 !important;\r\n  transition: all 0.3s;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\r\n  color: #333;\r\n}\r\n\r\n  .kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background: rgb(195, 195, 195);\r\n}\r\n\r\n  \r\n\r\n  .kt-quick-panel2[_ngcontent-%COMP%] {\r\n  width: 650px !important;\r\n}\r\n\r\n  .kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\r\n  right: -660px;\r\n  left: auto;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #F1F1F1;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\r\n  background-color: #FFFFFF !important;\r\n}\r\n\r\n  .chatcount[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  margin-left: -15px;\r\n  margin-top: -10px;\r\n}\r\n\r\n  .kt-badge.kt-badge--dark[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background: #8C8D92;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n  transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\r\n  fill: #5E5F63;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\r\n  padding: 0.2rem 20px;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-font-ReplyRequired[_ngcontent-%COMP%] {\r\n  color: #a6c !important;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%] {\r\n  width: 800px;\r\n  max-width: 100%;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  vertical-align: top;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n  .kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n  min-height: 60px;\r\n}\r\n\r\n  .kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n}\r\n\r\n  .dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc !important;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\r\n  background-color: transparent !important;\r\n  color: #74788D !important;\r\n  cursor: auto;\r\n}\r\n\r\n  .kt-nav__link-text[_ngcontent-%COMP%]:hover {\r\n  color: #74788D !important;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\r\n  background-color: rgba(154, 100, 142, 0.2);\r\n  color: #333 !important;\r\n  transition: all 0.3s;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\r\n  color: #333;\r\n}\r\n\r\n  .kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background: rgb(195, 195, 195);\r\n}\r\n\r\n  \r\n\r\n  .kt-quick-panel2[_ngcontent-%COMP%] {\r\n  width: 650px !important;\r\n}\r\n\r\n  .kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\r\n  right: -660px;\r\n  left: auto;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #F1F1F1;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background: none;\r\n  outline: none !important;\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 35px;\r\n  width: 35px;\r\n  background-color: #FFFFFF;\r\n  transition: all 0.3s ease;\r\n  cursor: pointer;\r\n  margin: 0;\r\n  border-radius: 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-badge.kt-badge--inline[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  width: auto;\r\n  padding: 0.15rem 0.75rem;\r\n  border-radius: 2px;\r\n  margin-left: 4px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%] {\r\n  padding: 17px;\r\n  width: 243px;\r\n}\r\n\r\n  \r\n\r\n  .Replied_border_left_true_warning[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #ffb822;\r\n}\r\n\r\n  .Replied_border_left_true_primary[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #95bed9;\r\n}\r\n\r\n  .Replied_border_left_true_success[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #95bed9;\r\n}\r\n\r\n  .Replied_border_left_true_Danger[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #F58A8B;\r\n}\r\n\r\n  .Replied_border_left_true_hold[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #c0b5dc\r\n}\r\n\r\n  .Replied_border_left_true_rejected[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #f5c293;\r\n}\r\n\r\n  .Replied_border_left_true_underApprovals[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #BD838C;\r\n}\r\n\r\n  .Replied_border_left_true_forwardUnderApproval[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #E0B1D7;\r\n}\r\n\r\n  .Replied_border_left_true_completeUnderApproval[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #98c7bf;\r\n}\r\n\r\n  .Replied_border_left_true_projectHold[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #C0B5DC;\r\n}\r\n\r\n  .Replied_border_left_true_NewProject[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #007bff;\r\n}\r\n\r\n  .Replied_border_left_true_DeadlineExtended[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #E0B1D7;\r\n}\r\n\r\n  .Replied_border_left_true_HoldunderApp[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #a85098;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%] {\r\n    margin-left: -17px;\r\n}\r\n\r\n  .icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  margin-right: 15px !important;\r\n  z-index: 2;\r\n}\r\n\r\n  .icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  width: 18px;\r\n    height: 18px;\r\n    text-align: center;\r\n    font-size: 10px;\r\n    font-weight: 700;\r\n  color: #fff;\r\n  background: #5867dd;\r\n  border: 1px solid #5867dd;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: -11px;\r\n  right: -11px;\r\n  z-index: 3;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]{\r\n  margin-top: 0px !important;\r\n}\r\n\r\n  .multiselect-dropdown[_ngcontent-unj-c40][_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-unj-c40][_ngcontent-%COMP%]{\r\n  width: 150px !important;\r\n}\r\n\r\n  \r\n\r\n  virtual-scroller[_ngcontent-%COMP%] {\r\n  \r\n  height: 200px;\r\n}\r\n\r\n  .vsdiv[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: 30px;\r\n}\r\n\r\n  \r\n\r\n  .sideInfobar[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 999;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: #ffffff;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  \r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%]{\r\n  background-color: #f5f6fc;\r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tcolor: #333;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n\r\n  .info-icon-cir[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: #5867dd;\r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]{\r\n  border-bottom: 0.07rem dashed #dedede;\r\n  padding: 6px;\r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%]{\r\n  border-bottom: 0.07rem dashed rgba(0,0,0,0.3);\r\n}\r\n\r\n  \r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%]{\r\n  font-weight: 600;\r\n}\r\n\r\n  .sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]{\r\n    width: 270px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n  .count-height[_ngcontent-%COMP%]{\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]   .justify-content-between[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #f1f1f1;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #ccc;\r\n}\r\n\r\n  .dropdown[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]{\r\n  border-color: #5867dd;\r\n}\r\n\r\n  .kt-checkbox[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\r\n  border: solid #5867dd;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown[_ngcontent-%COMP%] {\r\n  position: static !important;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    width: 60%;\r\n    \r\n    top: 20px !important;\r\n    left: -22px !important;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  border-bottom: 15px solid #fff;\r\n  border-right: 17px solid transparent;\r\n  border-left: 17px solid transparent;\r\n  position: absolute;\r\n  top: -15px;\r\n  left: 32px;\r\n  z-index: 10;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  border-bottom: 17px solid #ccc;\r\n  border-right: 19px solid transparent;\r\n  border-left: 19px solid transparent;\r\n  position: absolute;\r\n  top: -17px;\r\n  left: 30px;\r\n  z-index: 8;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu1[_ngcontent-%COMP%]   .filter-box[_ngcontent-%COMP%]{\r\n  width: 33.3333%;\r\n  display: inline-block;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){\r\n  width: 3%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){\r\n  width: 33%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3){\r\n  width: 10%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4){\r\n  width: 10%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5){\r\n  width: 15%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6){\r\n  width: 10%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(7), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7){\r\n  width: 10%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(8), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8){\r\n  width: 10%;\r\n}\r\n\r\n  .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{\r\n  \r\n  cursor: pointer;\r\n}\r\n\r\n  .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{\r\n  border: 1px solid #d6dbff;\r\n  border-radius: 5px;\r\n}\r\n\r\n  .show_entries[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 3px;\r\n  background-color: #fff;\r\n \r\n}\r\n\r\n  .show_entries[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n  \r\n  border: 2px solid rgba(88, 103, 221, 0.3);\r\n  color: #5867dd;\r\n  font-weight: bold;\r\n}\r\n\r\n  .count-btn[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  padding: 0px 10px;\r\n  font-weight: 700;\r\n  color: rgb(88, 88, 88);\r\n  font-size: 14px;\r\n  line-height: 25px;\r\n}\r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__toolbar[_ngcontent-%COMP%]   .kt-inbox__search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  height: 44px;\r\n  border: none;\r\n  background-color: #f2f3f7;\r\n}\r\n\r\n  .input-group[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: stretch;\r\n  width: 100% !important;\r\n}\r\n\r\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]{\r\n  \r\n  background-color: #fff;\r\n  width: 25vw;\r\n  box-shadow: none;\r\n  border: 1px solid #d6dbff !important;\r\n  margin-top: 5px;\r\n}\r\n\r\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{\r\n  background-color: #f5f6fc;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%]   .kt-inbox__items[_ngcontent-%COMP%]   .kt-inbox__item[_ngcontent-%COMP%]{\r\n  position: relative;\r\n}\r\n\r\n  .delete-btn[_ngcontent-%COMP%]{\r\n  display: none;\r\n  position: absolute;\r\n   right: 0px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    background-color: #f2f3f7;\r\n    color: grey;\r\n    line-height: 63px;\r\n    padding: 0 20px;\r\n    transition: all 2s ease !important;\r\n}\r\n\r\n  .delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  background: none;\r\n  font-size: 16px;\r\n  outline: none !important;\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  height: 30px;\r\n  width: 30px;\r\n  background-color: #f5f6fc;\r\n  border: 1px solid #b3bcff;\r\n  color: #5867dd;\r\n  transition: all 0.3s ease;\r\n  cursor: pointer;\r\n  margin: 10px 8px 0 0;\r\n  border-radius: 0;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  text-align: center;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n  \r\n\r\n  .btn-secondary.theme-btn[_ngcontent-%COMP%]{\r\n  background-color: #5867dd;\r\n  color: #fff;\r\n}\r\n\r\n  .btn.btn-label-primary[_ngcontent-%COMP%]{\r\n  border: 1px solid #b3bcff;\r\n}\r\n\r\n  .delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n}\r\n\r\n  .kt-inbox__item[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n  .sidebar-more[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: 50%;\r\n}\r\n\r\n  .footer[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 50%;\r\n  background-color: dodgerblue;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n  .ng-autocomplete[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n}\r\n\r\n  \r\n\r\n  .memoscount[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 70px;\r\n  height: 34px;\r\n  margin: 5px;\r\n  border: 1px solid rgba(0, 0, 0, .2);\r\n  text-align: justify;\r\n\r\n}\r\n\r\n  .blue[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n}\r\n\r\n  .purple[_ngcontent-%COMP%] {\r\n  background: #00B74A;\r\n}\r\n\r\n  .wine[_ngcontent-%COMP%] {\r\n  background: #F93154;\r\n}\r\n\r\n  \r\n\r\n  .M_fsize[_ngcontent-%COMP%]{\r\n  font-size: smaller;\r\n}\r\n\r\n  .badge[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  font-size: 12px;\r\n  line-height: 1;\r\n  padding: .375rem .5625rem;\r\n  font-weight: normal;\r\n}\r\n\r\n  .badge-outline-primary[_ngcontent-%COMP%] {\r\n  color: #405189;\r\n  border: 1.5px solid #405189\r\n}\r\n\r\n  .badge.badge-pill[_ngcontent-%COMP%] {\r\n  border-radius: 10rem\r\n}\r\n\r\n  .badge-outline-info[_ngcontent-%COMP%] {\r\n  color: #3da5f4;\r\n  border: 1.5px solid #3da5f4\r\n}\r\n\r\n  .badge-outline-danger[_ngcontent-%COMP%] {\r\n  color: #f1536e;\r\n  border: 1.5px solid #f1536e\r\n}\r\n\r\n  .badge-outline-success[_ngcontent-%COMP%] {\r\n  color: #00c689;\r\n  border: 1.5px solid #00c689\r\n}\r\n\r\n  .badge-outline-warning[_ngcontent-%COMP%] {\r\n  color: #fda006;\r\n  border: 1px solid #fda006\r\n}\r\n\r\n  \r\n\r\n  .name-box[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  font-size: 9px;\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: #5867dd;\r\n  color: #fff;\r\n  font-weight: 500;\r\n  letter-spacing: 2px;\r\n  border-radius: 50%;\r\n  line-height: 30px;\r\n  margin-right: 5px;\r\n}\r\n\r\n  .names-response[_ngcontent-%COMP%]{\r\n  display :inline-block;\r\n  text-align: left;\r\n}\r\n\r\n  .names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{\r\n  display: block;\r\n  font-size: 10px;\r\n  font-weight: 600;\r\n}\r\n\r\n  .names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{\r\n  font-weight: 600;\r\n}\r\n\r\n  .head-btn[_ngcontent-%COMP%]{\r\n  background-color: rgba(88, 103, 221, 0.1);\r\n    padding: 3px 10px 3px 5px;\r\n    border-radius: 2rem;\r\n    border: 1px solid #b3bcff;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n}\r\n\r\n  .head-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #5867dd;\r\n    color: #fff;\r\n    line-height: 25px;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    margin-right: 3px;\r\n}\r\n\r\n  .devider[_ngcontent-%COMP%]{\r\n  height: 1px;\r\n  width: 100%;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n  .pricevalues[_ngcontent-%COMP%] {\r\n  padding-top: 30px;\r\n  padding-bottom: 10px;\r\n  border-right: 1px solid #f1f1f1;\r\n  border-bottom: 1px solid #f1f1f1;\r\n}\r\n\r\n  .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(1), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(2)  {\r\n  border-top: 1px solid #f1f1f1;\r\n}\r\n\r\n  .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(3), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(4)  {\r\n  border-bottom: none\r\n}\r\n\r\n  .pricevalues[_ngcontent-%COMP%]:nth-child(2), .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\r\n  border-right: none;\r\n}\r\n\r\n  .dms-links[_ngcontent-%COMP%]{\r\n  list-style-type: disc;\r\n}\r\n\r\n  .dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  display: block;\r\n  text-decoration: underline;\r\n  font-weight: 600;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n  \r\n\r\n  mat-select[_ngcontent-%COMP%]{\r\n  padding: 10px 5px;\r\n  background-color: #fff;\r\n  margin-right: 5px;\r\n}\r\n\r\n  div#mat-select-0-panel[_ngcontent-%COMP%]{\r\n  min-width: auto;\r\n}\r\n\r\n  .mat-select-panel-wrap.ng-tns-c275-0.ng-trigger.ng-trigger-transformPanelWrap.ng-star-inserted[_ngcontent-%COMP%]{\r\n  transform: none;\r\n}\r\n\r\n    .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\r\n  color: unset;\r\n}\r\n\r\n    .mat-option-pseudo-checkbox.mat-pseudo-checkbox-checked {\r\n  background-color: #303F9F;\r\n}\r\n\r\n  \r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .pro-bar[_ngcontent-%COMP%] {\r\n  background: hsl(0, 0%, 97%);\r\n  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;\r\n  height: 4px;\r\n  margin-bottom: 12px;\r\n  margin-top: 30px;\r\n  position: relative;\r\n  text-align: left;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress_bar_title[_ngcontent-%COMP%] {\r\n  color: hsl(218, 4%, 50%);\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  position: relative;\r\n  top: -28px;\r\n  z-index: 1;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress_number[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%] {\r\n  background-color: hsl(0, 0%, 88%);\r\n  display: block;\r\n  width: 0;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  transition: width 1s linear 0s;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  background-color: hsl(0, 0%, 100%);\r\n  border-radius: 50%;\r\n  width: 4px;\r\n  height: 4px;\r\n  position: absolute;\r\n  right: 1px;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  width: 14px;\r\n  height: 14px;\r\n  background-color: inherit;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  right: -4px;\r\n  top: -5px;\r\n}\r\n\r\n  .kt-widget__details[_ngcontent-%COMP%] {\r\n  min-width: 90px;\r\n}\r\n\r\n  .kt-media-group[_ngcontent-%COMP%]   .kt-media.kt-media--sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n  .kt-media-group[_ngcontent-%COMP%]   .kt-media.kt-media--sm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  width: 25px;\r\n  height: 25px;\r\n  background: #deecf8;\r\n  color: #2786fb;\r\n}\r\n\r\n  .bg-today[_ngcontent-%COMP%] {\r\n  background-color: #342bf0 !important;\r\n}\r\n\r\n  .w-45[_ngcontent-%COMP%] {\r\n  width: 45% !important;\r\n}\r\n\r\n  .w-55[_ngcontent-%COMP%] {\r\n  width: 55% !important;\r\n}\r\n\r\n  @media only screen and (max-width: 768px) {\r\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]{\r\n    width: 80vw;\r\n  }\r\n}\r\n\r\n  .suc-hvr[_ngcontent-%COMP%] {\r\n  color: #1dc9b7;\r\n}\r\n\r\n  .suc-hvr[_ngcontent-%COMP%]:hover {\r\n  background: #1dc9b7;\r\n  color: #fff;\r\n}\r\n\r\n  .dan-hvr[_ngcontent-%COMP%] {\r\n  color: #dc3545;\r\n}\r\n\r\n  .dan-hvr[_ngcontent-%COMP%]:hover {\r\n  background: #dc3545;\r\n  color: #fff;\r\n}\r\n\r\n  .kt-widget__title[_ngcontent-%COMP%]{\r\n  width: 250px;\r\n}\r\n\r\n  .btn-fw[_ngcontent-%COMP%]{\r\n  font-weight: 500;\r\n}\r\n\r\n  .asc-ar[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n  .btn-sort[_ngcontent-%COMP%]{\r\n  color: #0b0e1f;\r\n  background-color: #fff;\r\n  border: 1px solid #eef1f6;\r\n  border-radius: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n  a.ordr-a[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  margin-left: 5px;\r\n  color: #0b0e1f;\r\n}\r\n\r\n  .sort-by[_ngcontent-%COMP%]{\r\n  color: #999999;\r\n  font-size: 12px;\r\n  padding: 8px;\r\n\r\n}\r\n\r\n  .sort-a[_ngcontent-%COMP%]{\r\n  text-decoration: underline;\r\n}\r\n\r\n  .sort-drop[_ngcontent-%COMP%]{\r\n  padding: 0.8rem 0;\r\n  min-width: 12rem;\r\n  margin-top: 5px;\r\n}\r\n\r\n  .sort-drop[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{\r\n  padding: 0.4rem 1rem;\r\n}\r\n\r\n  .sort-drop[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n  background: #f1f6fd;\r\n  color: #0b0e1f;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  display: flex;\r\n}\r\n\r\n  .sort-drop[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .ckc-icn[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  color: #3b93fc;\r\n}\r\n\r\n  .btn-sort[_ngcontent-%COMP%]:hover, .btn-sort[_ngcontent-%COMP%]:focus, .btn-sort[_ngcontent-%COMP%]:active  {\r\n  color: #0b0e1f;\r\n  background-color: #f5f7fa;\r\n  border: 1px solid #e1e6ee;\r\n}\r\n\r\n  .select-box[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n  a.dropdown-item[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n  @media (max-width: 1440px){\r\n  .kt-widget__title[_ngcontent-%COMP%]{\r\n    width: 240px;\r\n  }\r\n  .stat-td[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    width: 135px;\r\n  }\r\n  .stat-td[_ngcontent-%COMP%]{\r\n    width: 135px;\r\n  }\r\n}\r\n\r\n  @media (max-width: 1300px){\r\n.kt-widget__title[_ngcontent-%COMP%]{\r\n    width: 180px;\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLXN1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1CSzs7RUFFSDtJQUNFO0dBQ0Q7O0VBQ0Q7OztJQUdFLG1CQUFtQjtJQUVuQix3Q0FBd0M7SUFDeEMsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFDQTtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBR2Ysd0JBQXdCO0lBRXhCLHVCQUF1QjtFQUN6Qjs7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7RUFDYjs7RUFDQTtJQUNFLFlBQVk7SUFFWix1QkFBdUI7RUFDekI7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBY0E7SUFDRTs7O01BR0UsZUFBZTtNQUNmLFdBQVc7SUFDYjtJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLFdBQVc7SUFDYjtFQUNGOztFQUNBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtFQUNmOztFQUNBO0lBQ0Usa0JBQWtCO0FBQ3RCOztFQUNBOzs7Ozs7S0FNSzs7RUFFTDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0VBQ0EsVUFBVTs7RUFDVjtFQUNFLFVBQVU7QUFDWjs7RUFFQSxVQUFVOztFQUNWO0VBQ0UsbUJBQW1CO0FBQ3JCOztFQUVBLFdBQVc7O0VBQ1g7RUFDRSxnQkFBZ0I7QUFDbEI7O0VBRUEsb0JBQW9COztFQUNwQjtFQUNFLGdCQUFnQjtBQUNsQjs7RUFDQTtFQUNFLGVBQWU7QUFDakI7O0VBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiOztFQUNBO0VBQ0UseUJBQXlCO0VBQ3pCO0FBQ0Y7O0VBRUE7RUFDRSx5QkFB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QUNFLFlBQVk7QUFDZDs7RUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7RUFDQTtFQUNFLGFBQWE7QUFDZjs7RUFDQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztFQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztFQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZOztBQUVkOztFQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztFQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztFQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztFQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjs7RUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztFQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0VBQ0E7RUFDRSxlQUFlO0FBQ2pCOztFQUNBO0VBQ0UsZUFBZTtBQUNqQjs7RUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztFQUdBO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0EiLCJmaWxlIjoicHJvamVjdHMtc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogI2xvYWRpbmd7IFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgbGVmdDogNTAlOyBcclxuICB0b3A6IDUwJTsgXHJcbiAgei1pbmRleDogMTsgXHJcbiAgd2lkdGg6IDE1MHB4OyBcclxuICBoZWlnaHQ6IDE1MHB4OyBcclxuICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDsgXHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgXHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiOyBcclxuICB3aWR0aDogMTIwcHg7IFxyXG4gIGhlaWdodDogMTIwcHg7IFxyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7IFxyXG4gIH0gXHJcbiAgICBcclxuICBAa2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH0gXHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSBcclxuICB9ICovXHJcblxyXG4gIC5saXN0LWljb24tY29sb3J7XHJcbiAgICBjb2xvcjogIzk2OTY5NlxyXG4gICB9XHJcbiAgLmxvYWRlcixcclxuICAubG9hZGVyOmJlZm9yZSxcclxuICAubG9hZGVyOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwZGM1YzE7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDEgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb246IGxvYWQxIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgd2lkdGg6IDFlbTtcclxuICAgIGhlaWdodDogNGVtO1xyXG4gIH1cclxuICAubG9hZGVyIHtcclxuICAgIGNvbG9yOiAjMGRjNWMxO1xyXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgICBtYXJnaW46IDg4cHggYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICB9XHJcbiAgLmxvYWRlcjpiZWZvcmUsXHJcbiAgLmxvYWRlcjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjb250ZW50OiAnJztcclxuICB9XHJcbiAgLmxvYWRlcjpiZWZvcmUge1xyXG4gICAgbGVmdDogLTEuNWVtO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG4gIH1cclxuICAubG9hZGVyOmFmdGVyIHtcclxuICAgIGxlZnQ6IDEuNWVtO1xyXG4gIH1cclxuXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQxIHtcclxuICAgIDAlLFxyXG4gICAgODAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMDtcclxuICAgICAgaGVpZ2h0OiA0ZW07XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICBib3gtc2hhZG93OiAwIC0yZW07XHJcbiAgICAgIGhlaWdodDogNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGxvYWQxIHtcclxuICAgIDAlLFxyXG4gICAgODAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMDtcclxuICAgICAgaGVpZ2h0OiA0ZW07XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICBib3gtc2hhZG93OiAwIC0yZW07XHJcbiAgICAgIGhlaWdodDogNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICAubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbi8qIFxyXG4gIHRhYmxlLCB0aCwgdGQge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXItc3BhY2luZzogMTVweDtcclxuICB9ICovXHJcblxyXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51e1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0b3A6IDM4cHggIWltcG9ydGFudDtcclxuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLyogd2lkdGggKi9cclxuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbi5zaGFyZWRkZXRhaWxzLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzU1NTtcclxufVxyXG4ubmd4LXBhZ2luYXRpb24ge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4jYmFja0J0bjpob3ZlcntcclxuIGJhY2tncm91bmQtY29sb3I6IzU4NjdkZCA7XHJcbiBjb2xvcjogd2hpdGU7IFxyXG59XHJcbiNNZGxfY2xvc2VidG46aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICBjb2xvcjp3aGl0ZVxyXG59XHJcblxyXG4udGV4dC13YXJuaW5nLTF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTBhNztcclxuICBjb2xvcjojRkZBODAwO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udGV4dC1kYW5nZXItMXtcclxuICBjb2xvcjogI0Y2NEU2MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFMkU1O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuZHJvcGRvd24tZG93bixcclxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLmRyb3Bkb3duLXVwe1xyXG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjYWRhZGFkICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5tdWx0aXNlbGVjdC1kcm9wZG93bntcclxuICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4ua3QtdG9kb19fZGV0YWlsc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29ue1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcclxuICAgIGNvbG9yOiAjNTg2N2RkO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMCA4cHggMCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcblxyXG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiBzdmcua3Qtc3ZnLWljb24ge1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgfVxyXG5cclxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24gc3ZnLmt0LXN2Zy1pY29uLmFkZC1pY29ue1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxufVxyXG5cclxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiAua3Qtc3ZnLWljb24gZyBbZmlsbF17XHJcbiAgICBmaWxsOiAjNTg2N2RkO1xyXG4gIH1cclxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24gcGF0aHtcclxuICAgIGZpbGw6ICM1ODY3ZGQ7XHJcbiAgfVxyXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uOmhvdmVyIHN2Zy5rdC1zdmctaWNvbi5hZGQtaWNvbiBwYXRoLFxyXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uLmFjdGl2ZSBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24gcGF0aHtcclxuICAgIGZpbGw6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbjpob3ZlciAua3Qtc3ZnLWljb24gZyBbZmlsbF0sXHJcbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlIC5rdC1zdmctaWNvbiBnIFtmaWxsXXtcclxuICBmaWxsOiAjZmZmO1xyXG59XHJcblxyXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uOmhvdmVyLFxyXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLmNhcmQtdGl0bGUgLmZhdm91cml0ZSBpe1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgfVxyXG4gIC5jYXJkLXRpdGxlIC5mYXZvdXJpdGUuYWN0aXZlIGksXHJcbiAgLmNhcmQtdGl0bGUgLmZhdm91cml0ZTpob3ZlciBpe1xyXG4gICAgY29sb3I6ICNmZmMxMDc7XHJcbiAgfVxyXG5cclxuICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGR7XHJcbiAgICBib3JkZXItY29sb3I6ICNkNmQ2ZDY7XHJcbiAgfVxyXG5cclxuICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuc3VjY2VzcyB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMxZGM5Yjc7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiA0cHg7ICovXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLndhcm5pbmcge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZiODIyOyBcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuaW5mbyB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyNzg2ZmI7IFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5kYW5nZXIge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRjU4QThCOyBcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuVW5kZXJBcHByb3ZhbHMge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0JEODM4QzsgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLkZvcndhcmRVbmRlckFwcHJvdmFsIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7IFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5jb21wbGV0ZVVuZGVyQXBwcm92YWwge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZjsgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLnByb2plY3RIb2xkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNDMEI1REM7IFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5Ib2xkdW5kZXJBcHAge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E4NTA5ODsgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLkRlYWRsaW5lRXh0ZW5kZWR7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3OyBcclxufVxyXG4uZGVsYXlEYXlze1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsgZyBbZmlsbF0ge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGN1YmljLWJlemllcigwLjkzLCAwLjM1LCAxLCAxKTtcclxuICBmaWxsOiAjNUU1RjYzO1xyXG59XHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2FzaWRlIC5rdC1pbmJveF9fbmF2IC5rdC1uYXYgLmt0LW5hdl9faXRlbSAua3QtbmF2X19saW5rIHtcclxuICBwYWRkaW5nOiAwLjJyZW0gMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLm1haWwtZHJvcGRvd24ge1xyXG4gIHdpZHRoOiA4MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1haWwtZHJvcGRvd24gdGFibGUgdGQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4ua3QtcXVpY2stcGFuZWwgLmt0LXBvcnRsZXQua3QtcG9ydGxldC0taGVhZC1sZyAua3QtcG9ydGxldF9faGVhZCB7XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxufVxyXG4ua3QtaW5ib3hfX2ljb24gLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVudS1zbSB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5kcm9wZG93bi1yZXBseSB1bCBsaSBhIC5rdC1uYXZfX2xpbmstaWNvbiB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9fbGFiZWwge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG59XHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2Zvcm0gLmt0LWluYm94X19ib2R5IC5rdC1pbmJveF9fdG8gLmt0LWluYm94X19maWVsZCAua3QtaW5ib3hfX2lucHV0IGlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5rdC1uYXZfX2xpbmstbm9ob3Zlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzc0Nzg4RCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogYXV0bztcclxufVxyXG4ua3QtbmF2X19saW5rLXRleHQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XHJcbn1cclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmssXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTQsIDEwMCwgMTQyLCAwLjIpO1xyXG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93LFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuLmt0LWJhZGdlLmt0LWJhZGdlLS11bmlmaWVkLWJyYW5kIHtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTk1LCAxOTUsIDE5NSk7XHJcbn1cclxuLyogLmluYm94LXRleHQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn0gKi9cclxuLmt0LXF1aWNrLXBhbmVsMiB7XHJcbiAgd2lkdGg6IDY1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmt0LXF1aWNrLXBhbmVsLS1yaWdodCAua3QtcXVpY2stcGFuZWwge1xyXG4gIHJpZ2h0OiAtNjYwcHg7XHJcbiAgbGVmdDogYXV0bztcclxufVxyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xyXG59XHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG59XHJcbi8qIC5zb21lY2xhc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59ICovXHJcbi8qIDpob3N0KC5zb21lQ2xhc3MpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn0gKi9cclxuLmt0LWluYm94IC5rdC1pbmJveF9faWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2hhdGNvdW50IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLWRhcmsge1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQ6ICM4QzhEOTI7XHJcbn1cclxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsgZyBbZmlsbF0ge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGN1YmljLWJlemllcigwLjkzLCAwLjM1LCAxLCAxKTtcclxuICBmaWxsOiAjNUU1RjYzO1xyXG59XHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2FzaWRlIC5rdC1pbmJveF9fbmF2IC5rdC1uYXYgLmt0LW5hdl9faXRlbSAua3QtbmF2X19saW5rIHtcclxuICBwYWRkaW5nOiAwLjJyZW0gMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmt0LWZvbnQtUmVwbHlSZXF1aXJlZCB7XHJcbiAgY29sb3I6ICNhNmMgIWltcG9ydGFudDtcclxufVxyXG4ubWFpbC1kcm9wZG93biB7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4ubWFpbC1kcm9wZG93biB0YWJsZSB0ZCB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5rdC1xdWljay1wYW5lbCAua3QtcG9ydGxldC5rdC1wb3J0bGV0LS1oZWFkLWxnIC5rdC1wb3J0bGV0X19oZWFkIHtcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5rdC1pbmJveF9faWNvbiAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1tZW51LXNtIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuLmRyb3Bkb3duLXJlcGx5IHVsIGxpIGEgLmt0LW5hdl9fbGluay1pY29uIHtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19mb3JtIC5rdC1pbmJveF9fYm9keSAua3QtaW5ib3hfX3RvIC5rdC1pbmJveF9fZmllbGQgLmt0LWluYm94X19sYWJlbCB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9faW5wdXQgaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmt0LW5hdl9fbGluay1ub2hvdmVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcbi5rdC1uYXZfX2xpbmstdGV4dDpob3ZlciB7XHJcbiAgY29sb3I6ICM3NDc4OEQgIWltcG9ydGFudDtcclxufVxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTAwLCAxNDIsIDAuMik7XHJcbiAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93IHtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLXVuaWZpZWQtYnJhbmQge1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQ6IHJnYigxOTUsIDE5NSwgMTk1KTtcclxufVxyXG4vKiAuaW5ib3gtdGV4dCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufSAqL1xyXG4ua3QtcXVpY2stcGFuZWwyIHtcclxuICB3aWR0aDogNjUwcHggIWltcG9ydGFudDtcclxufVxyXG4ua3QtcXVpY2stcGFuZWwtLXJpZ2h0IC5rdC1xdWljay1wYW5lbCB7XHJcbiAgcmlnaHQ6IC02NjBweDtcclxuICBsZWZ0OiBhdXRvO1xyXG59XHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XHJcbn1cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1NTU7XHJcbn1cclxuLyogLnNvbWVjbGFzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0gKi9cclxuLyogOmhvc3QoLnNvbWVDbGFzcykge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSAqL1xyXG4ua3QtaW5ib3ggLmt0LWluYm94X19pY29uIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMzVweDtcclxuICB3aWR0aDogMzVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLWlubGluZSB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAuMTVyZW0gMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19hc2lkZSB7XHJcbiAgcGFkZGluZzogMTdweDtcclxuICB3aWR0aDogMjQzcHg7XHJcbn1cclxuLyogU3RhdHVzIENvbG9ycyAqL1xyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3dhcm5pbmd7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZiODIyO1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcHJpbWFyeXtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5NWJlZDk7XHJcbn1cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9zdWNjZXNze1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk1YmVkOTtcclxufVxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX0RhbmdlcntcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNGNThBOEI7XHJcbn1cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9ob2xke1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2MwYjVkY1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcmVqZWN0ZWR7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjVjMjkzO1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfdW5kZXJBcHByb3ZhbHN7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQkQ4MzhDO1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfZm9yd2FyZFVuZGVyQXBwcm92YWx7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3O1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfY29tcGxldGVVbmRlckFwcHJvdmFse1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZjtcclxufVxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3Byb2plY3RIb2xke1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0MwQjVEQztcclxufVxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX05ld1Byb2plY3R7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDA3YmZmO1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfRGVhZGxpbmVFeHRlbmRlZHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7XHJcbn1cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9Ib2xkdW5kZXJBcHB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTg1MDk4O1xyXG59XHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2xpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xyXG59XHJcbi5pY29ucy1maWx0ZXIgLmt0LXRvZG9fX2ljb257XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmljb25zLWZpbHRlciAua3QtdG9kb19faWNvbiBzcGFue1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNTg2N2RkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1ODY3ZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMXB4O1xyXG4gIHJpZ2h0OiAtMTFweDtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcbi8qIC5pY29ucy1maWx0ZXIgLmt0LXRvZG9fX2ljb246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczYTFmNyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnRcclxufSAqL1xyXG4vKiAuaWNvbnMtZmlsdGVyIC5rdC10b2RvX19pY29uOmhvdmVyIHNwYW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMTM0LCAyNTEsIDEpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudFxyXG59ICovXHJcblxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGV7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdWx0aXNlbGVjdC1kcm9wZG93bltfbmdjb250ZW50LXVuai1jNDBdIC5kcm9wZG93bi1idG5bX25nY29udGVudC11bmotYzQwXXtcclxuICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxufVxyXG4vKiB2aXJ0dWFsIFNjcm9sbGVyICovXHJcbnZpcnR1YWwtc2Nyb2xsZXIge1xyXG4gIC8qIHdpZHRoOiAzNTBweDsgKi9cclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbiBcclxuLnZzZGl2IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi8qID09PSBTaWRlYmFyID09PSAqL1xyXG4uc2lkZUluZm9iYXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIC8qIHBhZGRpbmctdG9wOiA2MHB4OyAqL1xyXG59XHJcbi5zaWRlSW5mb2JhciAua3QtcG9ydGxldF9faGVhZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmNsb3NlYnRuIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICMzMzM7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWljb24tY2lye1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzU4NjdkZDtcclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVte1xyXG4gIGJvcmRlci1ib3R0b206IDAuMDdyZW0gZGFzaGVkICNkZWRlZGU7XHJcbiAgcGFkZGluZzogNnB4O1xyXG59XHJcbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbS5kYXJre1xyXG4gIGJvcmRlci1ib3R0b206IDAuMDdyZW0gZGFzaGVkIHJnYmEoMCwwLDAsMC4zKTtcclxufVxyXG5cclxuLyogLmt0LWluYm94X19kYXRldGltZXtcclxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufSAqL1xyXG5cclxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtIC5rdC13aWRnZXQxX19pbmZvIC5rdC13aWRnZXQxX190aXRsZXtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5zaWRlSW5mb2JhciAudGl0bGUtc2lkZWJhcntcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbi5jb3VudC1oZWlnaHR7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLyogLmNvdW50LWhlaWdodCAuanVzdGlmeS1jb250ZW50LWJldHdlZW57XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn0gKi9cclxuLmNvdW50LWhlaWdodCAuanVzdGlmeS1jb250ZW50LWJldHdlZW4gLmt0LWNoZWNrYm94e1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcblxyXG4vKiB3aWR0aCAqL1xyXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDNweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuLmNvdW50LWhlaWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbi5jb3VudC1oZWlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcblxyXG4uZHJvcGRvd24gLmt0LWNoZWNrYm94ID4gaW5wdXQ6Y2hlY2tlZCB+IHNwYW57XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTg2N2RkO1xyXG59XHJcbi5rdC1jaGVja2JveCA+IHNwYW46YWZ0ZXIge1xyXG4gIGJvcmRlcjogc29saWQgIzU4NjdkZDtcclxufVxyXG5cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcclxufVxyXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTsgKi9cclxuICAgIHRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogLTIycHggIWltcG9ydGFudDtcclxufVxyXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1sZWZ0OiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xNXB4O1xyXG4gIGxlZnQ6IDMycHg7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1sZWZ0OiAxOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xN3B4O1xyXG4gIGxlZnQ6IDMwcHg7XHJcbiAgei1pbmRleDogODtcclxufVxyXG5cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudTEgLmZpbHRlci1ib3h7XHJcbiAgd2lkdGg6IDMzLjMzMzMlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMSksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDEpe1xyXG4gIHdpZHRoOiAzJTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCgyKSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoMil7XHJcbiAgd2lkdGg6IDMzJTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCgzKSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoMyl7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg0KSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoNCl7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg1KSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoNSl7XHJcbiAgd2lkdGg6IDE1JTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg2KSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoNil7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg3KSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoNyl7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg4KSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoOCl7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLmt0LXF1aWNrLXNlYXJjaCAua3QtcXVpY2stc2VhcmNoX19mb3JtIC5pbnB1dC1ncm91cC1wcmVwZW5kIC5pbnB1dC1ncm91cC10ZXh0LCAua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3VwLWFwcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2ZmOyAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3Vwe1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmRiZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uc2hvd19lbnRyaWVzIHNwYW57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiBcclxufVxyXG4uc2hvd19lbnRyaWVzIHNlbGVjdHtcclxuICAvKiB3aWR0aDogMTAwcHg7ICovXHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSg4OCwgMTAzLCAyMjEsIDAuMyk7XHJcbiAgY29sb3I6ICM1ODY3ZGQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jb3VudC1idG57XHJcbiAgLyogaGVpZ2h0OiAyNXB4OyAqL1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7ICovXHJcbiAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDg4LCA4OCwgODgpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG4vKiBTZWFyY2ggUHJvamVjdHMgKi9cclxuLmt0LWluYm94IC5rdC1pbmJveF9fdG9vbGJhciAua3QtaW5ib3hfX3NlYXJjaCAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xyXG59XHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZCwgLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kLXNob3J0e1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNlMmU5ZmY7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMjV2dztcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmRiZmYgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kIC5mb3JtLWNvbnRyb2wsIC5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZC1zaG9ydCAuZm9ybS1jb250cm9se1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmM7XHJcbn1cclxuXHJcbi8qIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uLmFjdGl2ZSAgKi9cclxuXHJcbi8qIC52YWxpbm9vcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnZhbGlub29yOjpiZWZvcmV7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDBweDtcclxuICB0b3A6IDBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59ICovXHJcblxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19saXN0IC5rdC1pbmJveF9faXRlbXMgLmt0LWluYm94X19pdGVte1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZGVsZXRlLWJ0bntcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgcmlnaHQ6IDBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNztcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDYzcHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAhaW1wb3J0YW50O1xyXG59XHJcbi5kZWxldGUtYnRuIGl7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XHJcbiAgY29sb3I6ICM1ODY3ZGQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAxMHB4IDhweCAwIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi8qIC5kZWxldGUtYnRuIGl7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjc7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlICFpbXBvcnRhbnQ7XHJcbn0qL1xyXG4uYnRuLXNlY29uZGFyeS50aGVtZS1idG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYnRuLmJ0bi1sYWJlbC1wcmltYXJ5e1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XHJcbn1cclxuXHJcbi5kZWxldGUtYnRuIGk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmt0LWluYm94X19pdGVtOmhvdmVyIC5kZWxldGUtYnRue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2lkZWJhci1tb3Jle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubmctYXV0b2NvbXBsZXRlIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi8qIEJveGVzICAqL1xyXG4ubWVtb3Njb3VudCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcblxyXG59XHJcblxyXG4uYmx1ZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLnB1cnBsZSB7XHJcbiAgYmFja2dyb3VuZDogIzAwQjc0QTtcclxufVxyXG5cclxuLndpbmUge1xyXG4gIGJhY2tncm91bmQ6ICNGOTMxNTQ7XHJcbn1cclxuLyogbWVtb3NDb3VudF9Gb250c2l6ZSAqL1xyXG4uTV9mc2l6ZXtcclxuICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgcGFkZGluZzogLjM3NXJlbSAuNTYyNXJlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uYmFkZ2Utb3V0bGluZS1wcmltYXJ5IHtcclxuICBjb2xvcjogIzQwNTE4OTtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkICM0MDUxODlcclxufVxyXG5cclxuLmJhZGdlLmJhZGdlLXBpbGwge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtXHJcbn1cclxuXHJcbi5iYWRnZS1vdXRsaW5lLWluZm8ge1xyXG4gIGNvbG9yOiAjM2RhNWY0O1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgIzNkYTVmNFxyXG59XHJcblxyXG4uYmFkZ2Utb3V0bGluZS1kYW5nZXIge1xyXG4gIGNvbG9yOiAjZjE1MzZlO1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgI2YxNTM2ZVxyXG59XHJcblxyXG4uYmFkZ2Utb3V0bGluZS1zdWNjZXNzIHtcclxuICBjb2xvcjogIzAwYzY4OTtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkICMwMGM2ODlcclxufVxyXG5cclxuLmJhZGdlLW91dGxpbmUtd2FybmluZyB7XHJcbiAgY29sb3I6ICNmZGEwMDY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZkYTAwNlxyXG59XHJcbi8qIE5ldyBkZXNpZ24gQ1NTICBmcm9tIEhlcmUuLi4gKi9cclxuLm5hbWUtYm94e1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDlweDtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ubmFtZXMtcmVzcG9uc2V7XHJcbiAgZGlzcGxheSA6aW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5uYW1lcy1yZXNwb25zZSBzcGFuOmZpcnN0LWNoaWxke1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5uYW1lcy1yZXNwb25zZSBzcGFuOmxhc3QtY2hpbGR7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmhlYWQtYnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDEwMywgMjIxLCAwLjEpO1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHggM3B4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiY2ZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uaGVhZC1idG4gaXtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzU4NjdkZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG5cclxuLmRldmlkZXJ7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLnByaWNldmFsdWVzIHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcblxyXG4udG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDEpLCAudG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDIpICB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn1cclxuLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgzKSwgLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSAge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmVcclxufVxyXG5cclxuLnByaWNldmFsdWVzOm50aC1jaGlsZCgyKSwgLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcblxyXG4uZG1zLWxpbmtze1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcclxufVxyXG5cclxuLmRtcy1saW5rcyBsaSBhe1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT0gTWF0IFNlbGVjdCBTdHlsZXMgPT09PT09PT09ICovXHJcblxyXG5tYXQtc2VsZWN0e1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuZGl2I21hdC1zZWxlY3QtMC1wYW5lbHtcclxuICBtaW4td2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtc2VsZWN0LXBhbmVsLXdyYXAubmctdG5zLWMyNzUtMC5uZy10cmlnZ2VyLm5nLXRyaWdnZXItdHJhbnNmb3JtUGFuZWxXcmFwLm5nLXN0YXItaW5zZXJ0ZWR7XHJcbiAgdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcclxuICBjb2xvcjogdW5zZXQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LW9wdGlvbi1wc2V1ZG8tY2hlY2tib3gubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzRjlGO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT0gUHJvZ3Jlc3MgQmFyID09PT09PT09PSAqL1xyXG5cclxuLnByb2dyZXNzX2JhciAucHJvLWJhciB7XHJcbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCA5NyUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCBoc2xhKDAsIDAlLCAwJSwgMC4xKSBpbnNldDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzX2Jhcl90aXRsZSB7XHJcbiAgY29sb3I6IGhzbCgyMTgsIDQlLCA1MCUpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0yOHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzX251bWJlciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgODglKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDFzIGxpbmVhciAwcztcclxufVxyXG5cclxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3MtYmFyLWlubmVyOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogNHB4O1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMXB4O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTRweDtcclxuICB0b3A6IC01cHg7XHJcbn1cclxuLmt0LXdpZGdldF9fZGV0YWlscyB7XHJcbiAgbWluLXdpZHRoOiA5MHB4O1xyXG59XHJcbi5rdC1tZWRpYS1ncm91cCAua3QtbWVkaWEua3QtbWVkaWEtLXNtIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmt0LW1lZGlhLWdyb3VwIC5rdC1tZWRpYS5rdC1tZWRpYS0tc20gc3BhbiB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNkZWVjZjg7XHJcbiAgY29sb3I6ICMyNzg2ZmI7XHJcbn1cclxuLmJnLXRvZGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQyYmYwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnctNDUge1xyXG4gIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcclxufVxyXG4udy01NSB7XHJcbiAgd2lkdGg6IDU1JSAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmR7XHJcbiAgICB3aWR0aDogODB2dztcclxuICB9XHJcbn1cclxuXHJcbi5zdWMtaHZyIHtcclxuICBjb2xvcjogIzFkYzliNztcclxufVxyXG4uc3VjLWh2cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzFkYzliNztcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uZGFuLWh2ciB7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuLmRhbi1odnI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmt0LXdpZGdldF9fdGl0bGV7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcbi5idG4tZnd7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYXNjLWFye1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmJ0bi1zb3J0e1xyXG4gIGNvbG9yOiAjMGIwZTFmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZjFmNjtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5hLm9yZHItYSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgY29sb3I6ICMwYjBlMWY7XHJcbn1cclxuLnNvcnQtYnl7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbn1cclxuLnNvcnQtYXtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uc29ydC1kcm9we1xyXG4gIHBhZGRpbmc6IDAuOHJlbSAwO1xyXG4gIG1pbi13aWR0aDogMTJyZW07XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5zb3J0LWRyb3AgLmRyb3Bkb3duLWl0ZW17XHJcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XHJcbn1cclxuLnNvcnQtZHJvcCAuYWN0aXZle1xyXG4gIGJhY2tncm91bmQ6ICNmMWY2ZmQ7XHJcbiAgY29sb3I6ICMwYjBlMWY7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uc29ydC1kcm9wIC5hY3RpdmUgLmNrYy1pY257XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiAjM2I5M2ZjO1xyXG59XHJcbi5idG4tc29ydDpob3ZlciwgLmJ0bi1zb3J0OmZvY3VzLCAuYnRuLXNvcnQ6YWN0aXZlICB7XHJcbiAgY29sb3I6ICMwYjBlMWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmYTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlNmVlO1xyXG59XHJcbi5zZWxlY3QtYm94e1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5hLmRyb3Bkb3duLWl0ZW17XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpe1xyXG4gIC5rdC13aWRnZXRfX3RpdGxle1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gIH1cclxuICAuc3RhdC10ZCBkaXZ7XHJcbiAgICB3aWR0aDogMTM1cHg7XHJcbiAgfVxyXG4gIC5zdGF0LXRke1xyXG4gICAgd2lkdGg6IDEzNXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpe1xyXG4ua3Qtd2lkZ2V0X190aXRsZXtcclxuICAgIHdpZHRoOiAxODBweDtcclxufVxyXG59XHJcbiJdfQ== */"] });


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