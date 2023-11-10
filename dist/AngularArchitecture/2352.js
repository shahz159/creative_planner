"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([[2352],{

/***/ 2352:
/*!*************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/notification/notification.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var src_app_Models_approval_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_Models/approval-dto */ 62424);
/* harmony import */ var src_app_Models_notification_activity_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/notification-activity-dto */ 68827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var src_app_Services_approvals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/approvals.service */ 18810);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ 9991);











function NotificationComponent_strong_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NotificationComponent_strong_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NotificationComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_div_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r21.acceptSelectedValues()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_div_19_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.rejectpros()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function NotificationComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_div_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.clearResponses()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Clear Responses");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function NotificationComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r4.CurrentPageNo, " - ", ctx_r4._CurrentpageRecords, " ");
} }
function NotificationComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r5._CurrentpageRecords * (ctx_r5.CurrentPageNo - 1) + 1, " - ", ctx_r5._CurrentpageRecords * ctx_r5.CurrentPageNo, " ");
} }
function NotificationComponent_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r6.lastPagerecords * (ctx_r6.CurrentPageNo - 1) + 1, " - ", ctx_r6.lastPagerecords * (ctx_r6.CurrentPageNo - 1) + ctx_r6._CurrentpageRecords, " ");
} }
function NotificationComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r7._totalProjectsCount.toLocaleString(), "");
} }
function NotificationComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r8._totalProjectsCount, "");
} }
function NotificationComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 111)(1, "label", 112)(2, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function NotificationComponent_div_72_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29); const item_r26 = restoredCtx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.isTypeChecked(item_r26)); })("ngModelChange", function NotificationComponent_div_72_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29); const item_r26 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](item_r26.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", item_r26.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r26.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r26.Count);
} }
function NotificationComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 111)(1, "label", 115)(2, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function NotificationComponent_div_79_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33); const item_r31 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r32.isRequestChecked(item_r31)); })("ngModelChange", function NotificationComponent_div_79_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33); const item_r31 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](item_r31.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", item_r31.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r31.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r31.Count);
} }
function NotificationComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 111)(1, "label", 115)(2, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function NotificationComponent_div_86_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const item_r35 = restoredCtx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r36.isEmpChecked(item_r35)); })("ngModelChange", function NotificationComponent_div_86_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const item_r35 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](item_r35.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", item_r35.checked)("checked", item_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r35.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r35.Count);
} }
function NotificationComponent_tr_137_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r39.Category);
} }
function NotificationComponent_tr_137_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NotificationComponent_tr_137_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r39.SubmissionType);
} }
function NotificationComponent_tr_137_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, item_r39.DeadLine, "dd-MM-yyyy"), "");
} }
function NotificationComponent_tr_137_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r39.Req_Type);
} }
function NotificationComponent_tr_137_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r39.Req_Type);
} }
function NotificationComponent_tr_137_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r39.Req_Type);
} }
function NotificationComponent_tr_137_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r39.Req_Type);
} }
function NotificationComponent_tr_137_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", item_r39.Req_Coments);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r39.Req_Coments, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 3, item_r39.Rec_Date, "dd-MM-yyyy"));
} }
function NotificationComponent_tr_137_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Not Provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NotificationComponent_tr_137_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 141)(1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_tr_137_div_31_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r60.clearResponse(item_r39.Project_Code, item_r39.Rec_Date, item_r39.Req_Type)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "svg", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "path", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Mark as read ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", item_r39.Req_Coments);
} }
function NotificationComponent_tr_137_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 117)(2, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function NotificationComponent_tr_137_Template_input_change_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65); const item_r39 = restoredCtx.$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r64.select($event, item_r39)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 117)(4, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_tr_137_Template_a_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65); const item_r39 = restoredCtx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r66.openInfo(item_r39.Project_Code1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_tr_137_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65); const item_r39 = restoredCtx.$implicit; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r67.moreDetails(item_r39.Project_Code1, item_r39.Rec_Date, item_r39.Req_Type)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td")(9, "p", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td")(12, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, NotificationComponent_tr_137_span_15_Template, 2, 1, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, NotificationComponent_tr_137_span_16_Template, 2, 0, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td")(18, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, NotificationComponent_tr_137_div_21_Template, 3, 1, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, NotificationComponent_tr_137_ng_template_22_Template, 3, 4, "ng-template", null, 127, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, NotificationComponent_tr_137_span_25_Template, 2, 1, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, NotificationComponent_tr_137_span_26_Template, 2, 1, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, NotificationComponent_tr_137_span_27_Template, 2, 1, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, NotificationComponent_tr_137_span_28_Template, 2, 1, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, NotificationComponent_tr_137_td_29_Template, 5, 6, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, NotificationComponent_tr_137_td_30_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, NotificationComponent_tr_137_div_31_Template, 7, 1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](23);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r12.isSelected(item_r39));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r39.Project_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r39.Exec_BlockName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r39.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !item_r39.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r39.SubmittedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r39.Exec_BlockName == "Standard Tasks" || item_r39.Exec_BlockName == "Routine Tasks")("ngIfElse", _r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r39.Req_Type == "New Project" || item_r39.Req_Type == "Information" || item_r39.Req_Type == "Deadline Extend" || item_r39.Req_Type == "ToDo Achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r39.Req_Type == "New Project Reject Release" || item_r39.Req_Type == "Project Hold" || item_r39.Req_Type == "Task-Reject" || item_r39.Req_Type == "Not Achieved" || item_r39.Req_Type == "Project Complete Rejected" || item_r39.Req_Type == "New Project Rejected" || item_r39.Req_Type == "Standardtask Enactive" || item_r39.Req_Type == "New Action Rejected" || item_r39.Req_Type == "Project Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r39.Req_Type == "Project Complete" || item_r39.Req_Type == "Task Complete" || item_r39.Req_Type == "Project Release" || item_r39.Req_Type == "StandardTask Completed" || item_r39.Req_Type == "Approved Project" || item_r39.Req_Type == "Approved Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r39.Req_Type == "Project Forward" || item_r39.Req_Type == "RACIS change" || item_r39.Req_Type == "New Action" || item_r39.Req_Type == "Revert Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r39.Req_Coments);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r39.Req_Coments == null || item_r39.Req_Coments == "" || item_r39.Req_Coments == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r39.Send_From == "WR");
} }
function NotificationComponent_div_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 147)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r13._filtersMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r13._filtersMessage2);
} }
const _c0 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) { return { "text-success mb-0": a0, "text-warning mb-0": a1, "text-primary mb-0": a2, "text-info mb-0": a3, "text-Rejected mb-0": a4, "text-underApproval mb-0": a5, "text-underApproval mb-0": a6, "text-underApp mb-0": a7, "text-completed mb-0": a8, "text-completeRejected mb-0": a9, "text-Todo mb-0": a10 }; };
function NotificationComponent_div_160_h6_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h6", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunctionV"](2, _c0, [item_r68.Status == "Completed", item_r68.Status == "InProcess", item_r68.Status == "Under Approval", item_r68.Status == "Completion Under Approval", item_r68.Status == "New Project Rejected", item_r68.Status == "Enactive Under Approval", item_r68.Status == "Forward Under Approval", item_r68.Status == "New Project", item_r68.Status == "Completion Under Approval", item_r68.Status == "Project Complete Rejected", item_r68.Status == "ToDo Completed"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r68.Status, " ");
} }
function NotificationComponent_div_160_h6_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h6", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", item_r68.Status, " ", item_r68.Delaydays, " days ");
} }
const _c1 = function (a0, a1, a2, a3) { return { "text-success mb-0": a0, "text-primary mb-0": a1, "text-info mb-0": a2, "text-danger mb-0": a3 }; };
function NotificationComponent_div_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 148)(1, "div", 149)(2, "div", 51)(3, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 152)(6, "a", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 154)(9, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, NotificationComponent_div_160_h6_10_Template, 2, 14, "h6", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, NotificationComponent_div_160_h6_11_Template, 2, 2, "h6", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 159)(16, "h6", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 51)(21, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "i", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 51)(29, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r68.Project_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r68.Status != "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r68.Status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction4"](14, _c1, item_r68.Req_Type == "Project Complete" || item_r68.Req_Type == "Task Complete" || item_r68.Req_Type == "StandardTask Completed" || item_r68.Req_Type == "Approved Project", item_r68.Req_Type == "Project Forward" || item_r68.Req_Type == "RACIS change" || item_r68.Req_Type == "New Action" || item_r68.Req_Type == "Revert Back", item_r68.Req_Type == "New Project" || item_r68.Req_Type == "Information" || item_r68.Req_Type == "Deadline Extend" || item_r68.Req_Type == "ToDo Achieved", item_r68.Req_Type == "New Project Reject Release" || item_r68.Req_Type == "Project Hold" || item_r68.Req_Type == "Task-Reject" || item_r68.Req_Type == "Not Achieved" || item_r68.Req_Type == "Project Complete Rejected" || item_r68.Req_Type == "New Project Rejected" || item_r68.Req_Type == "Standardtask Enactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r68.Req_Type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](24, 8, item_r68.DPG, "dd/MM/yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](25, 11, item_r68.DeadLine, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r68.Responsible, " ");
} }
function NotificationComponent_ng_option_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-option", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", item_r73.TypeID);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r73.RejectType, " ");
} }
function NotificationComponent_span_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r16.rejDesc);
} }
function NotificationComponent_span_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Please select Reject type!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NotificationComponent_label_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Select From Existing Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NotificationComponent_div_178_div_6_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_div_178_div_6_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r81); const item_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r79.clickonselect(item_r75.Req_Coments)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "svg", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "path", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function NotificationComponent_div_178_div_6_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_div_178_div_6_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const item_r75 = ctx_r83.$implicit; const i_r76 = ctx_r83.index; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r82.clickondeselect(item_r75.Req_Coments, i_r76)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "svg", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "path", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function NotificationComponent_div_178_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 173)(1, "h6", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, NotificationComponent_div_178_div_6_span_4_Template, 3, 0, "span", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, NotificationComponent_div_178_div_6_span_5_Template, 3, 0, "span", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r75 = ctx.$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r74.exist_comment.indexOf(item_r75.Req_Coments) != -1 ? "text-info" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r75.Req_Coments, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r74.exist_comment.indexOf(item_r75.Req_Coments) == -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r74.exist_comment.indexOf(item_r75.Req_Coments) != -1);
} }
function NotificationComponent_div_178_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 168)(1, "div", 169)(2, "div", 86)(3, "h6", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Existing Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, NotificationComponent_div_178_div_6_Template, 6, 4, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r19.rejectcommentsList);
} }
function NotificationComponent_div_179_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 95)(1, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Enter Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "textarea", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NotificationComponent_div_179_Template_textarea_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r85.comments = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r20.comments);
} }
class NotificationComponent {
    constructor(service, approvalservice, notifyService, router) {
        this.service = service;
        this.approvalservice = approvalservice;
        this.notifyService = notifyService;
        this.router = router;
        this._NotificationActivity = [];
        this.CurrentPageNo = 1;
        this.emptyspace = true;
        this.sendtype = 'Req';
        this.type1 = 'Req';
        this.type2 = 'Res';
        ////////////////------------------------------- Filters ------------------------------///////////////
        this.EmpCountInFilter = [];
        this.TypeContInFilter = [];
        this.StatusCountFilter = [];
        this.RequestCountFilter = [];
        this.approvalObj = new src_app_Models_approval_dto__WEBPACK_IMPORTED_MODULE_0__.ApprovalDTO();
        this.checkedItems_Status = [];
        this.checkedItems_Type = [];
        this.checkedItems_Emp = [];
        this.checkedItems_Request = [];
        this.selectedItem_Status = [];
        this.selectedItem_Type = [];
        this.selectedItem_Emp = [];
        this.selectedItem_Request = [];
        this.edited = false;
        this.clicks1 = 0;
        this.A2Z1 = true;
        this.Z2A1 = false;
        this.clicks = 0;
        this.A2Z = true;
        this.Z2A = false;
        // _SortProjectList() {
        //   this.clicks += 1;
        //   if (this.clicks != 1) {
        //     this.A2Z = true;
        //     this.Z2A = false;
        //     this._NotificationActivity = this._NotificationActivity.sort((a, b) => (a.Project_Name > b.Project_Code) ? -1 : 1);
        //     this.clicks = 0;
        //   } else {
        //     this.A2Z = false;
        //     this.Z2A = true;
        //     this._NotificationActivity = this._NotificationActivity.sort((a, b) => (a.Project_Code > b.Project_Code) ? 1 : -1);
        //   }
        // }
        this.sno_arr = [];
        this.selectedItems = [];
        this.selectAllCheckbox = false;
        this.noRejectType = false;
        this.exist_comment = [];
        this.responselist = [];
        this.notificationDTO = new src_app_Models_notification_activity_dto__WEBPACK_IMPORTED_MODULE_1__.NotificationActivityDTO();
    }
    ngOnInit() {
        this.router.navigate(["Notifications"]);
        this.Current_user_ID = localStorage.getItem('EmpNo');
        this.viewAll(this.sendtype);
    }
    viewAll(type) {
        this.sendtype = type;
        if (type == 'Req') {
            this.selectedItems = [];
            const checkbox = document.getElementById('snocheck');
            checkbox.checked = false;
            this.notificationDTO.Emp_No = this.Current_user_ID;
            this.notificationDTO.PageNumber = 1;
            this.notificationDTO.PageSize = 20;
            this.notificationDTO.SelectedStatus = null;
            this.notificationDTO.SelectedEmp_No = null;
            this.notificationDTO.SelectedType = null;
            this.notificationDTO.SearchText = null;
            this.notificationDTO.sendtype = type;
            this.service.GetViewAllDashboardnotifications(this.notificationDTO).subscribe((data) => {
                // this._NotificationActivityList = data as NotificationActivityDTO[];
                this._NotificationActivity = JSON.parse(data[0]['Notification_Json']);
                console.log(this._NotificationActivity, "ws");
                this._totalProjectsCount = (data[0]['notificationcount']);
                this.WScount = (data[0]['WScount']);
                this.WRcount = (data[0]['WRcount']);
                if (this._NotificationActivity) {
                    this.notilength = this._NotificationActivity.length;
                    this._CurrentpageRecords = this._NotificationActivity.length;
                }
                //Emp
                if (this.selectedItem_Emp.length == 0) {
                    this.EmpCountInFilter = JSON.parse(data[0]['Employee_json']);
                }
                else {
                    this.EmpCountInFilter = this.selectedItem_Emp[0];
                }
                //Request
                if (this.selectedItem_Request.length == 0) {
                    this.RequestCountFilter = JSON.parse(data[0]['Request_json']);
                }
                else {
                    this.RequestCountFilter = this.selectedItem_Request[0];
                }
                //Type
                if (this.selectedItem_Type.length == 0) {
                    this.TypeContInFilter = JSON.parse(data[0]['ProjectType_json']);
                }
                else {
                    this.TypeContInFilter = this.selectedItem_Type[0];
                }
                //Status
                if (this.selectedItem_Status.length == 0) {
                    this.StatusCountFilter = JSON.parse(data[0]['Status_json']);
                }
                else {
                    this.StatusCountFilter = this.selectedItem_Status[0];
                }
                this._totalProjectsCount = JSON.parse(data[0]['notificationcount']);
                if (this._NotificationActivity.length == 0) {
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
            let _vl = this._totalProjectsCount / 20;
            let _vl1 = _vl % 1;
            if (_vl1 > 0.000) {
                this.LastPage = Math.trunc(_vl) + 1;
            }
            else {
                this.LastPage = Math.trunc(_vl);
            }
            if (this.CurrentPageNo == this.LastPage) {
                this.lastPagerecords = 20;
            }
        }
        else if (type == 'Res') {
            this.selectedItems = [];
            const checkbox = document.getElementById('snocheck');
            checkbox.checked = false;
            this.notificationDTO.Emp_No = this.Current_user_ID;
            this.notificationDTO.PageNumber = 1;
            this.notificationDTO.PageSize = 20;
            this.notificationDTO.SelectedStatus = null;
            this.notificationDTO.SelectedEmp_No = null;
            this.notificationDTO.SelectedType = null;
            this.notificationDTO.SearchText = null;
            this.notificationDTO.sendtype = type;
            this.service.GetViewAllDashboardnotifications(this.notificationDTO).subscribe((data) => {
                // this._NotificationActivityList = data as NotificationActivityDTO[];
                this._NotificationActivity = JSON.parse(data[0]['Notification_Json']);
                console.log(this._NotificationActivity, "ws");
                this._totalProjectsCount = (data[0]['notificationcount']);
                this.WScount = (data[0]['WScount']);
                this.WRcount = (data[0]['WRcount']);
                if (this._NotificationActivity) {
                    this.notilength = this._NotificationActivity.length;
                    this._CurrentpageRecords = this._NotificationActivity.length;
                }
                //Emp
                if (this.selectedItem_Emp.length == 0) {
                    this.EmpCountInFilter = JSON.parse(data[0]['Employee_json']);
                }
                else {
                    this.EmpCountInFilter = this.selectedItem_Emp[0];
                }
                //Request
                if (this.selectedItem_Request.length == 0) {
                    this.RequestCountFilter = JSON.parse(data[0]['Request_json']);
                }
                else {
                    this.RequestCountFilter = this.selectedItem_Request[0];
                }
                //Type
                if (this.selectedItem_Type.length == 0) {
                    this.TypeContInFilter = JSON.parse(data[0]['ProjectType_json']);
                }
                else {
                    this.TypeContInFilter = this.selectedItem_Type[0];
                }
                //Status
                if (this.selectedItem_Status.length == 0) {
                    this.StatusCountFilter = JSON.parse(data[0]['Status_json']);
                }
                else {
                    this.StatusCountFilter = this.selectedItem_Status[0];
                }
                this._totalProjectsCount = JSON.parse(data[0]['notificationcount']);
                if (this._NotificationActivity.length == 0) {
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
            let _vl = this._totalProjectsCount / 20;
            let _vl1 = _vl % 1;
            if (_vl1 > 0.000) {
                this.LastPage = Math.trunc(_vl) + 1;
            }
            else {
                this.LastPage = Math.trunc(_vl);
            }
            if (this.CurrentPageNo == this.LastPage) {
                this.lastPagerecords = 20;
            }
        }
    }
    loadMore() {
        this.notificationDTO.Emp_No = this.Current_user_ID;
        this.notificationDTO.PageNumber = this.CurrentPageNo;
        this.notificationDTO.PageSize = 20;
        this.service.GetViewAllDashboardnotifications(this.notificationDTO)
            .subscribe(data1 => {
            this._NotificationActivity = JSON.parse(data1[0]['Notification_Json']);
            if (this._NotificationActivity) {
                this._CurrentpageRecords = this._NotificationActivity.length;
            }
        });
    }
    openInfo(pcode) {
        // document.getElementById("Project_info_slider_bar").classList.add("kt-quick-panel--on");
        $('#Project_info_slider_bar').addClass('open_sidebar_info');
        this.router.navigate(["Notifications/projectinfo/", pcode, "6"]);
        document.getElementById("rightbar-overlay").style.display = "block";
        document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    }
    clearResponse(pcode, rec_date, req_type) {
        this.approvalObj.Emp_no = this.Current_user_ID;
        this.approvalObj.Project_Code = pcode;
        this.approvalObj.Request_Date = rec_date;
        this.approvalObj.Request_type = req_type;
        console.log(this.approvalObj, "response");
        this.approvalservice.NewResponseService(this.approvalObj).subscribe(data => {
            console.log(data, "response-data");
            if (data[0]['message'] == '1')
                this.notifyService.showSuccess("Response cleared.", '');
            this.applyFilters();
        });
    }
    moreDetails(pcode) {
        let name = 'MoreDetails';
        var url = document.baseURI + name;
        var myurl = `${url}/${pcode}`;
        var myWindow = window.open(myurl, pcode);
        myWindow.focus();
    }
    closeInfo() {
        this.resetReject();
        // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
        document.getElementById("rejectbar").classList.remove("kt-quick-panel--on");
        $('#Project_info_slider_bar').removeClass('open_sidebar_info');
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
        if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0
            && this.selectedItem_Emp.length == 0 && this.selectedItem_Request.length == 0) {
            this.edited = false;
        }
        else {
            this.edited = true;
        }
    }
    isRequestChecked(item) {
        let arr = [];
        this.RequestCountFilter.forEach(element => {
            if (element.checked == true) {
                arr.push({ Name: element.Name });
                return this.checkedItems_Request = arr;
            }
        });
        let arr2 = [];
        this.RequestCountFilter.filter((item) => {
            if (item.checked == true) {
                this.applyFilters();
                return arr2.push(item);
            }
        });
        this.selectedItem_Request.push(arr2);
        this.RequestCountFilter.forEach(element => {
            if (element.checked == false) {
                this.selectedItem_Request.length = 0;
                this.resetFilters();
            }
        });
        if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0
            && this.selectedItem_Emp.length == 0 && this.selectedItem_Request.length == 0) {
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
        if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0
            && this.selectedItem_Emp.length == 0 && this.selectedItem_Request.length == 0) {
            this.edited = false;
        }
        else {
            this.edited = true;
        }
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
        if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0
            && this.selectedItem_Emp.length == 0 && this.selectedItem_Request.length == 0) {
            this.edited = false;
        }
        else {
            this.edited = true;
        }
    }
    //Apply Filters
    SearchbyText() {
        this.CurrentPageNo = 1;
        this.applyFilters();
    }
    applyFilters() {
        this.selectedEmp_String = this.checkedItems_Emp.map(select => {
            return select.Emp_No;
        }).join(',');
        this.selectedRequest_String = this.checkedItems_Request.map(select => {
            return select.Name;
        }).join(',');
        this.selectedType_String = this.checkedItems_Type.map(select => {
            return select.Block_No;
        }).join(',');
        this.selectedStatus_String = this.checkedItems_Status.map(select => {
            return select.Status;
        }).join(',');
        this.notificationDTO.Emp_No = this.Current_user_ID;
        this.notificationDTO.SelectedEmp_No = this.selectedEmp_String;
        this.notificationDTO.SelectedStatus = this.selectedStatus_String;
        this.notificationDTO.SelectedRequest = this.selectedRequest_String;
        this.notificationDTO.SelectedType = this.selectedType_String;
        this.notificationDTO.PageNumber = this.CurrentPageNo;
        this.notificationDTO.PageSize = 20;
        this.notificationDTO.SearchText = this.searchText;
        this.notificationDTO.sendtype = this.sendtype;
        this.service.GetViewAllDashboardnotifications(this.notificationDTO)
            .subscribe(data => {
            this._NotificationActivity = JSON.parse(data[0]['Notification_Json']);
            //Emp
            if (this.selectedItem_Emp.length == 0) {
                this.EmpCountInFilter = JSON.parse(data[0]['Employee_json']);
            }
            else {
                this.EmpCountInFilter = this.selectedItem_Emp[0];
            }
            //Request
            if (this.selectedItem_Request.length == 0) {
                this.RequestCountFilter = JSON.parse(data[0]['Request_json']);
            }
            else {
                this.RequestCountFilter = this.selectedItem_Request[0];
            }
            //Type
            if (this.selectedItem_Type.length == 0) {
                this.TypeContInFilter = JSON.parse(data[0]['ProjectType_json']);
            }
            else {
                this.TypeContInFilter = this.selectedItem_Type[0];
            }
            //Status
            if (this.selectedItem_Status.length == 0) {
                this.StatusCountFilter = JSON.parse(data[0]['Status_json']);
            }
            else {
                this.StatusCountFilter = this.selectedItem_Status[0];
            }
            this._totalProjectsCount = JSON.parse(data[0]['notificationcount']);
            let _vl = this._totalProjectsCount / 20;
            let _vl1 = _vl % 1;
            if (_vl1 > 0.000) {
                this.LastPage = Math.trunc(_vl) + 1;
            }
            else {
                this.LastPage = Math.trunc(_vl);
            }
            if (this.CurrentPageNo == this.LastPage) {
                this.lastPagerecords = 20;
            }
            if (this._NotificationActivity) {
                this._CurrentpageRecords = this._NotificationActivity.length;
            }
            if (this._NotificationActivity.length == 0) {
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
        if (this.selectedItem_Request.length == 0) {
            this.selectedRequest_String = null;
            this.checkedItems_Request = [];
        }
        if (this.selectedItem_Status.length == 0) {
            this.selectedStatus_String = null;
            this.checkedItems_Status = [];
        }
        if (this.selectedItem_Emp.length == 0) {
            this.selectedEmp_String = null;
            this.checkedItems_Emp = [];
        }
        this.applyFilters();
    }
    resetAll() {
        this.txtSearch = '';
        this.selectedItem_Type.length = 0;
        this.selectedItem_Status.length = 0;
        this.selectedItem_Request.length = 0;
        this.selectedItem_Emp.length = 0;
        this.resetFilters();
    }
    search(event) {
        this.SearchbyText();
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
    selectall(ev) {
        if (this.selectAllCheckbox) {
            this.selectedItems = [...this._NotificationActivity];
        }
        else {
            this.selectedItems = this.selectedItems.filter(item => !this._NotificationActivity.includes(item));
        }
        console.log(this.selectedItems, "all");
    }
    select(ev, item) {
        if (ev.target.checked == false) {
            const checkbox = document.getElementById('snocheck');
            checkbox.checked = false;
        }
        else if (ev.target.checked == true) {
            // Assuming you have checkboxes with a common class name 'checkbox'
            const checkboxes = document.querySelectorAll('.form-check-input');
            const selectAllCheckbox = document.getElementById('snocheck');
            // Add event listeners to each checkbox
            checkboxes.forEach((checkbox) => {
                checkbox.addEventListener('change', updateSelectAllCheckbox);
            });
            // Function to update the "Select All" checkbox state
            function updateSelectAllCheckbox() {
                const allChecked = Array.from(checkboxes).every((checkbox) => checkbox.checked);
                selectAllCheckbox.checked = allChecked;
            }
            // Add event listener to the "Select All" checkbox
            selectAllCheckbox.addEventListener('change', toggleAllCheckboxes);
            // Function to toggle the state of all checkboxes based on the "Select All" checkbox
            function toggleAllCheckboxes() {
                const isChecked = selectAllCheckbox.checked;
                checkboxes.forEach((checkbox) => {
                    checkbox.checked = isChecked;
                });
            }
        }
        const checkbox = ev.target;
        if (checkbox.checked) {
            this.selectedItems.push(item);
        }
        else {
            const index = this.selectedItems.findIndex((selectedItem) => selectedItem === item);
            if (index > -1) {
                this.selectedItems.splice(index, 1);
            }
        }
        console.log(this.selectedItems, "single");
    }
    isSelected(item) {
        return this.selectedItems.includes(item);
    }
    acceptSelectedValues() {
        console.log(this.selectedItems, "accept");
        // this.selectedItems.forEach(element => {
        //   this.approvalObj.Project_Code=element.Project_Code;
        //   this.approvalObj.SNo=element.Sno;
        //   this.approvalObj.Duration=0;
        //   this.approvalObj.Remarks='Accepted';
        //   this.approvalObj.RejectType=element.Reject_Type;
        //   this.approvalObj.OtherType=0;
        //   this.approvalObj.sendFrom="WR";
        //   switch(element.Req_Type){
        //                        case "New Project":
        //                             this.approvalObj.Type = "Approved Project";
        //                             break;
        //                         case "New Project Reject Release":
        //                             this.approvalObj.Type = "Approved Project";
        //                             break;
        //                         case "New Project Hold":
        //                             this.approvalObj.Type = "Approved Hold Project";
        //                             break;
        //                         case "Project Complete":
        //                             this.approvalObj.Type = "Project Complete";
        //                             break;
        //                         case "Project Complete Reject Release":
        //                             this.approvalObj.Type = "Project Complete";
        //                             break;
        //                         case "Project Complete Hold":
        //                             this.approvalObj.Type = "Approved Project Complete Hold";
        //                             break;
        //                         case "Deadline Extend":
        //                             this.approvalObj.Type = "Deadline Extend";
        //                             break;
        //                         case "Deadline Extend Hold":
        //                             this.approvalObj.Type = "Approved Deadline Hold";
        //                             break;
        //                         case "KPI Achieved":
        //                             this.approvalObj.Type = "KPI Completed";
        //                             break;
        //                         case "KPI Enactive":
        //                             this.approvalObj.Type = "KPI Enactive";
        //                             break;
        //                         case "KPI Enactive Hold":
        //                             this.approvalObj.Type = "KPI Enactive Hold";
        //                             break;
        //                         case "KPI Achieved Hold":
        //                             this.approvalObj.Type = "KPI Completed";
        //                             break;
        //                         case "New Todo":
        //                             this.approvalObj.Type = "ToDo InProcess";
        //                             break;
        //                         case "ToDo Achieved":
        //                             this.approvalObj.Type = "ToDo Completed";
        //                             break;
        //                         case "Enactive":
        //                             this.approvalObj.Type = "Standardtask Enactive";
        //                             break;
        //                         case "Task Complete":
        //                             this.approvalObj.Type = "StandardTask Completed";
        //                             break;
        //                         case "Task Complete Hold":
        //                             this.approvalObj.Type = "StandardTask Completed";
        //                             break;
        //                         case "Standardtask Enactive":
        //                             this.approvalObj.Type = "Standardtask Enactive";
        //                             break;
        //                         case "Standardtask Enactive Hold":
        //                             this.approvalObj.Type = "Standardtask Enactive";
        //                             break;
        //                         case "Project Forward":
        //                             this.approvalObj.Type = "Project Forward";
        //                             break;
        //                         case "Revert Back":
        //                             this.approvalObj.Type = "Revert Back";
        //                             break;
        //                         case "Project Hold":
        //                             this.approvalObj.Type = "Project Hold";
        //                             break;
        //                         case "Not Achieved":
        //                             this.approvalObj.Type = "StandardTask Completed";
        //                             break;
        //                         default:
        //                             break;
        //   }
        // });
        if (this.selectedItems.length > 0) {
            this.approvalservice.NewUpdateAcceptApprovalsService(this.selectedItems).subscribe(data => {
                console.log(data, "accept-data");
                this.applyFilters();
            });
            const checkbox = document.getElementById('snocheck');
            checkbox.checked = false;
            this.selectedItems = [];
            this.notifyService.showSuccess("Project(s) approved successfully", 'Success');
        }
        else {
            this.notifyService.showInfo("Please select atleast one project to approve", '');
        }
    }
    rejectApproval() {
        this.noRejectType = false;
        this.reject_list.forEach(element => {
            if (this.rejectType == element.TypeID) {
                this.rejDesc = element.Reject_Description;
            }
        });
        if (this.selectedItems.length == 1) {
            this.approvalObj.Project_Code = (this.selectedItems[0]['Project_Code1']);
            if ((this.selectedItems[0]['Req_Type']) == 'New Project')
                this.approvalObj.Status = 'New Project Rejected';
            else if ((this.selectedItems[0]['Req_Type']) == 'New Project Reject Release')
                this.approvalObj.Status = 'New Project Rejected';
            else if ((this.selectedItems[0]['Req_Type']) == 'New Project Hold')
                this.approvalObj.Status = 'New Project Rejected';
            else if ((this.selectedItems[0]['Req_Type']) == 'Project Complete')
                this.approvalObj.Status = 'Project Complete Rejected';
            else if ((this.selectedItems[0]['Req_Type']) == 'Project Complete Reject Release')
                this.approvalObj.Status = 'Project Complete Rejected';
            else if ((this.selectedItems[0]['Req_Type']) == 'Project Complete Hold')
                this.approvalObj.Status = 'Project Complete Rejected';
            else if ((this.selectedItems[0]['Req_Type']) == 'Deadline Extend')
                this.approvalObj.Status = 'Rejected';
            else if ((this.selectedItems[0]['Req_Type']) == 'Deadline Extend Hold')
                this.approvalObj.Status = 'Rejected';
            else if ((this.selectedItems[0]['Req_Type']) == 'Standardtask Enactive')
                this.approvalObj.Status = 'Enactive-Reject';
            else if ((this.selectedItems[0]['Req_Type']) == 'Project Forward')
                this.approvalObj.Status = 'Forward Reject';
            else if ((this.selectedItems[0]['Req_Type']) == 'Project Hold')
                this.approvalObj.Status = 'Project Hold Reject';
            else if ((this.selectedItems[0]['Req_Type']) == 'Revert Back')
                this.approvalObj.Status = 'Revert Reject';
            else if ((this.selectedItems[0]['Req_Type']) == 'Task Complete')
                this.approvalObj.Status = 'Task-Reject';
            else {
                this.approvalObj.Status = 'Rejected';
            }
        }
        this.approvalObj.Emp_no = this.Current_user_ID;
        this.approvalObj.rejectType = this.rejectType;
        this.approvalservice.GetGlobalRejectComments(this.approvalObj).subscribe(data => {
            this.rejectcommentsList = JSON.parse(data[0]['reject_CommentsList']);
            this.rejectcomments = this.rejectcommentsList.length;
        });
    }
    rejectpros() {
        this.approvalObj.Project_Code = null;
        this.approvalservice.GetGlobalRejectList(this.approvalObj).subscribe((data) => {
            this.reject_list = JSON.parse(data[0]['reject_list']);
        });
        document.getElementById("rejectbar").classList.add("kt-quick-panel--on");
        document.getElementById("rightbar-overlay").style.display = "block";
        document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    }
    clickonselect(com) {
        if (this.comments == null) {
            this.comments = com;
            this.exist_comment.push(com);
        }
        else {
            this.comments = this.comments + " " + com;
            this.exist_comment.push(com);
        }
    }
    clickondeselect(com, id) {
        this.exist_comment = this.exist_comment.filter((comment) => comment != com);
        this.comments = this.comments.replace(com, "");
        console.log(this.exist_comment, "deselect");
    }
    resetReject() {
        this.noRejectType = false;
        this.comments = "";
        this.exist_comment = [];
        this.rejectType = null;
    }
    submitReject() {
        console.log(this.selectedItems, "reject");
        this.selectedItems.forEach(element => {
            element.RejectType = this.rejectType;
            element.Remarks = this.comments;
        });
        console.log(this.selectedItems, "reject1");
        if (this.selectedItems.length > 0) {
            this.approvalservice.NewUpdateRejectApprovalsService(this.selectedItems).subscribe(data => {
                console.log(data, "reject-data");
                this.applyFilters();
            });
            const checkbox = document.getElementById('snocheck');
            checkbox.checked = false;
            this.selectedItems = [];
            this.notifyService.showSuccess("Project(s) rejected successfully", 'Success');
        }
        else {
            this.notifyService.showInfo("Please select atleast one project to reject", '');
        }
        this.resetReject();
        this.closeInfo();
    }
    clearResponses() {
        if (this.selectedItems.length > 0) {
            this.selectedItems.forEach(element => {
                this.responselist.push(element.SNo);
            });
            this.responselist = this.responselist.join(',');
            this.approvalObj.responselist = this.responselist;
            this.approvalservice.NewMultiResponseService(this.approvalObj).subscribe(data => {
                console.log(data, "response-data");
                if (data['message'] == '1')
                    this.notifyService.showSuccess("Response(s) cleared.", '');
                this.viewAll(this.sendtype);
                this.responselist = [];
            });
        }
        else {
            this.notifyService.showInfo("Please select atleast one response to clear", '');
        }
    }
    notinAction() {
        this.notifyService.showError("Development Under Maintainance", 'Failed');
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_2__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_Services_approvals_service__WEBPACK_IMPORTED_MODULE_3__.ApprovalsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
NotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], decls: 185, vars: 46, consts: [["id", "notifi", 1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height", "side_view", "pt-3"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi", "mb-2"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "kt-portlet__head-title", "mr-4", "cursor-pointer", "dropdown-toggle", "select-box"], [1, "kt-menu__link-icon", "fas", "fa-bell", "mr-2", "text-primary"], [4, "ngIf"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "main-d"], [3, "ngClass", "click"], [1, "noti-cus"], [1, "kt-portlet__head-label", "mr-2"], [1, "kt-header__topbar-item", "kt-header__topbar-item--search", "mr-3"], [1, "kt-header__topbar-wrapper"], [1, "kt-quick-search", "kt-quick-search--inline"], [1, "kt-quick-search__form"], [1, "input-group"], ["type", "text", "autofocus", "", "placeholder", "Search Projects", 1, "form-control", "project-search", "kt-quick-search__input", "pl-3", 2, "width", "300px", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "input-group-prepend"], ["type", "submit", 1, "input-group-text", 3, "click"], [1, "flaticon2-search-1"], [1, "mr-3"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "disabled", "click"], [1, "fas", "fa-angle-left", "mr-0"], [1, "fas", "fa-angle-right", "mr-0"], [1, "mr-2"], ["data-toggle", "kt-tooltip", "title", "Click to sort Asc", 1, "btn", "btn-label-primary", "btn-sm"], [1, "fa", "fa-sort-alpha-down-alt", "font-16", "mr-0"], [1, "stores-sec", "mr-1"], [1, "nav", "navbar-nav", "filters"], ["id", "filtermenu", 1, "dropdown", "mega-dropdown"], ["data-toggle", "dropdown", 3, "ngClass"], [1, "fas", "fa-ellipsis-v", "mr-0"], [1, "dropdown-menu", "mega-dropdown-menu"], [3, "click"], [1, "col-md-10"], [1, "d-inline-block"], [1, "col-md-2"], [1, "col-md-12"], ["type", "text", "placeholder", "Search Filters", 1, "form-control", "kt-quick-search__input", "pl-3", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [1, "col-md-4"], [1, "count-height"], ["class", "d-flex justify-content-between", 4, "ngFor", "ngForOf"], ["data-toggle", "dropdown", 1, "btn", "btn-label-success", "btn-outline-success", "btn-upper", "btn-sm", "btn-bold", "mr-2"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-2", 3, "click"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fas", "fa-sync-alt", "mr-0"], [1, "kt-portlet"], [1, "kt-portlet__body", "kt-portlet__body_scroll", "px-1", "py-3"], ["id", "project-4_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4", "no-footer"], [1, ""], [1, "d-none"], [1, "table-responsive"], ["role", "grid", 1, "table", "table-hover", "dataTable", "no-footer", "dtr-inline", 2, "width", "0px"], ["role", "row"], ["tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", 1, "text-center", 2, "width", "50px"], ["type", "checkbox", "id", "snocheck", 1, "form-check-input", "ps-1", "btn", "px-0", 3, "ngModel", "ngModelChange", "change"], ["tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-sort", "ascending", "aria-label", ": activate to sort column descending", 2, "width", "100px"], ["data-order", "desc", "data-name", "Project_Name", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Title &amp; Description: activate to sort column ascending", 1, "curser-pointer", 2, "width", "0px", 3, "click"], ["data-toggle", "kt-tooltip", "title", "Click to sort", 1, "mr-2", 3, "hidden"], [1, "fas", "fa-sort-alpha-up"], [1, "fa", "fa-sort-alpha-down-alt"], ["data-order", "desc", "data-name", "Exec_BlockName", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Type: activate to sort column ascending", 1, "curser-pointer"], [1, "fas", "fa-sort"], ["data-order", "desc", "data-name", "Category", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Type: activate to sort column ascending", 1, "curser-pointer"], ["data-order", "desc", "data-name", "Submitedby", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "User Name: activate to sort column ascending", 1, "curser-pointer"], ["data-order", "desc", "data-name", "Deadline", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "User Name: activate to sort column ascending", 1, "curser-pointer"], ["data-order", "desc", "data-name", "RequestType", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Category: activate to sort column ascending", 1, "curser-pointer"], ["data-order", "desc", "data-name", "Comments", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "End Date: activate to sort column ascending", 1, "curser-pointer", "cmmts", "text-ellipsis"], [4, "ngFor", "ngForOf"], ["class", "text-center py-4", "style", "color: lightgrey", 4, "ngIf"], ["id", "rightbar-overlay", 3, "click"], ["id", "Project_info_slider_bar", 1, "project-info-side-bar", "animate-right"], ["id", "rejectbar", 1, "sideInfobar", "animate-right"], [1, "kt-portlet", "mb-0"], [1, "offcanvas-header", "d-flex", "align-items-center", "justify-content-between", "kt-portlet__head"], [1, "m-0"], ["href", "javascript:void(0)", 1, "closebtn", "btn", "btn-xs", "btn-icon", "btn-hover-info", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24", "fill", "currentColor"], ["fill", "none", "d", "M0 0h24v24H0z"], ["d", "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"], [1, "kt-portlet--body", "mb-0"], [1, "brb-1", "pb-1"], [1, "card-body", "card-car"], [1, "card", "card-mid", "flex-1"], [1, "card-header"], ["clas", "card-title"], [1, "card-body", "p-0"], [1, "cus-scroll", "scroll-y"], ["class", "meetdt", 4, "ngFor", "ngForOf"], ["id", "comts1", 1, "card-body"], [1, "crd-hdr"], [1, "crd-title"], [1, "col-md-12", "checked-rad", "pl-1", "pt-3"], [1, "form-group"], [1, "mb-2"], [2, "color", "red"], ["required", "", "name", "rej_type", "placeholder", "Select Reject Type", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["style", "color:grey", 4, "ngIf"], ["style", "color:red", 4, "ngIf"], ["class", "mb-2", 4, "ngIf"], ["class", "appr-comts", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], [1, "d-flex", "justify-content-end", "mb-2"], [1, "btn", "btn-sm", "btn-secondary", "mr-2", 3, "click"], ["type", "submit", 1, "btn", "btn-sm", "btn-info", 3, "disabled", "click"], [1, "btn", "btn-outline-success", "btn-sm", "mr-2", "fs-7", 3, "click"], [1, "btn", "btn-outline-danger", "btn-sm", "fd-7", 3, "click"], [1, "btn", "btn-outline-success", "btn-sm", "mr-2", 3, "click"], [1, "d-flex", "justify-content-between"], [1, "kt-checkbox"], ["type", "checkbox", 3, "ngModel", "change", "ngModelChange"], [1, "count-btn"], [1, "kt-checkbox", "mb-3"], ["type", "checkbox", 3, "ngModel", "checked", "change", "ngModelChange"], ["align", "center"], ["type", "checkbox", "id", "singlecheck", 1, "form-check-input", "ps-1", "btn", "px-0", "mr-2", 3, "checked", "change"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "Project Info!", 1, "btn", "px-0", "mb-0", 3, "click"], [1, "fa", "fa-info-circle", "info-icon-cir"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "More Info!", 1, "btn", "px-0", "mr-2", 3, "click"], [1, "fa", "fa-chart-bar", "info-icon-cir"], [1, "kt-widget__title", "mb-0"], [1, "kt-widget__other"], ["class", "kt-widget__other", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["Projecttype", ""], ["class", "text-info font-weight-400", 4, "ngIf"], ["class", "text-danger font-weight-400", 4, "ngIf"], ["class", "text-success font-weight-400", 4, "ngIf"], ["class", "text-primary font-weight-400", 4, "ngIf"], ["class", "cmmts text-ellipsis", "data-toggle", "tooltip", 3, "title", 4, "ngIf"], ["class", "hvr-item", "data-toggle", "tooltip", 3, "title", 4, "ngIf"], [1, "kt-widget__other", "text-nowrap"], [1, "text-info", "font-weight-400"], [1, "text-danger", "font-weight-400"], [1, "text-success", "font-weight-400"], [1, "text-primary", "font-weight-400"], ["data-toggle", "tooltip", 1, "cmmts", "text-ellipsis", 3, "title"], ["data-toggle", "tooltip", "title", "Request date"], ["data-toggle", "tooltip", 1, "hvr-item", 3, "title"], [1, "chck-div", 3, "click"], [1, "chk-icn"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 1, "svg-icn"], ["d", "M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"], [1, "mark-txt"], [1, "text-center", "py-4", 2, "color", "lightgrey"], [1, "meetdt"], ["id", "", 1, "eve-area"], [1, "event-main"], [1, "event-color", "event-color--info"], [1, "event-title", "mr-2"], ["href", "javascript:;"], [1, "btm-des"], [1, "ml-4", "mr-2", "status-d"], ["data-toggle", "tooltip", "title", "Project Status!", 3, "ngClass", 4, "ngIf"], ["class", " text-danger mb-0", "data-toggle", "tooltip", "title", "Project Status!", 4, "ngIf"], [1, "mr-2", "showv"], [1, "ml-1", "mr-2", "status-d"], ["data-toggle", "tooltip", "title", "Request type", 3, "ngClass"], [1, "showv", "mr-2", "text-muted"], [1, "far", "fa-calendar-alt", "mr-1"], [1, "far", "fa-user", "mr-1"], ["data-toggle", "tooltip", "title", "Project Status!", 3, "ngClass"], ["data-toggle", "tooltip", "title", "Project Status!", 1, "text-danger", "mb-0"], [3, "value"], [2, "color", "grey"], [1, "appr-comts"], [1, "exs-cmts", "card"], [1, "mb-0"], [1, "crd-bdy", "scroll-y"], ["class", "cmts-items", 4, "ngFor", "ngForOf"], [1, "cmts-items"], [3, "ngClass"], [1, "cmts-actns"], ["class", "cmts-svg", 3, "click", 4, "ngIf"], [1, "cmts-svg", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24"], ["d", "M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"], ["d", "M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"], [1, "form-control", "h-100px", 3, "ngModel", "ngModelChange"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, NotificationComponent_strong_8_Template, 2, 0, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, NotificationComponent_strong_9_Template, 2, 0, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 9)(11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_a_click_11_listener() { return ctx.viewAll(ctx.type1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Approval ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_a_click_15_listener() { return ctx.viewAll(ctx.type2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, NotificationComponent_div_19_Template, 5, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, NotificationComponent_div_20_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 12)(22, "div", 13)(23, "div", 14)(24, "div", 15)(25, "div", 16)(26, "div", 17)(27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NotificationComponent_Template_input_ngModelChange_27_listener($event) { return ctx.searchText = $event; })("keydown.enter", function NotificationComponent_Template_input_keydown_enter_27_listener($event) { return ctx.search($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 19)(29, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_29_listener($event) { return ctx.search($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, NotificationComponent_ng_container_32_Template, 2, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, NotificationComponent_ng_container_33_Template, 2, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, NotificationComponent_ng_container_34_Template, 2, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, NotificationComponent_span_36_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, NotificationComponent_span_37_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_38_listener() { ctx.CurrentPageNo = ctx.CurrentPageNo - 1; return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_40_listener() { ctx.CurrentPageNo = ctx.CurrentPageNo + 1; return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 26)(43, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 29)(46, "ul", 30)(47, "li", 31)(48, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 34)(51, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_div_click_51_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 1)(53, "div", 36)(54, "h5")(55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Total Projects - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "h5", 37)(58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 1)(63, "div", 39)(64, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NotificationComponent_Template_input_ngModelChange_64_listener($event) { return ctx.txtSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 1)(67, "div", 41)(68, "div", 42)(69, "p")(70, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, NotificationComponent_div_72_Template, 7, 3, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](73, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 41)(75, "div", 42)(76, "p")(77, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Request Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](79, NotificationComponent_div_79_Template, 7, 3, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](80, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 41)(82, "div", 42)(83, "p")(84, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](86, NotificationComponent_div_86_Template, 7, 4, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](87, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "br")(89, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 1)(91, "div", 36)(92, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_94_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_96_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](97, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "div", 48)(99, "div", 49)(100, "div", 50)(101, "div", 51)(102, "div", 51)(103, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "div", 53)(106, "table", 54)(107, "thead")(108, "tr", 55)(109, "th", 56)(110, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NotificationComponent_Template_input_ngModelChange_110_listener($event) { return ctx.selectAllCheckbox = $event; })("change", function NotificationComponent_Template_input_change_110_listener($event) { return ctx.selectall($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](111, "th", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "th", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_th_click_112_listener() { return ctx._SortPortfoliolist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](114, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](116, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117, " Project Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "th", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](119, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, " Project Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "th", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](122, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](123, " Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "th", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](125, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126, " Submitted By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "th", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](128, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, " Deadline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "th", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](131, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](132, " Request Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "th", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](134, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](135, " Comments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](137, NotificationComponent_tr_137_Template, 32, 15, "tr", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](138, NotificationComponent_div_138_Template, 5, 2, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](139, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_div_click_139_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](141, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](142, "div", 74)(143, "div", 75)(144, "div", 76)(145, "h4", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](146, "Reject Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_a_click_147_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "svg", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](149, "path", 80)(150, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "div", 82)(152, "div", 83)(153, "div", 84)(154, "div", 85)(155, "div", 86)(156, "h5", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](157, " Projects List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "div", 88)(159, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](160, NotificationComponent_div_160_Template, 32, 19, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "div", 51)(162, "div", 91)(163, "div", 92)(164, "div", 93)(165, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](166, "Reject Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](167, "div", 94)(168, "div", 95)(169, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](170, "Reject Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](172, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](173, "ng-select", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NotificationComponent_Template_ng_select_ngModelChange_173_listener($event) { return ctx.rejectType = $event; })("change", function NotificationComponent_Template_ng_select_change_173_listener() { return ctx.rejectApproval(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](174, NotificationComponent_ng_option_174_Template, 2, 2, "ng-option", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](175, NotificationComponent_span_175_Template, 2, 1, "span", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](176, NotificationComponent_span_176_Template, 2, 0, "span", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](177, NotificationComponent_label_177_Template, 2, 0, "label", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](178, NotificationComponent_div_178_Template, 7, 1, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](179, NotificationComponent_div_179_Template, 6, 1, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](180, "div", 105)(181, "button", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_181_listener() { return ctx.resetReject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](182, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](183, "button", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_183_listener() { return ctx.submitReject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](184, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.sendtype == "Req");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.sendtype == "Res");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.sendtype == "Req" ? "dropdown-item active" : "dropdown-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.WScount);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.sendtype == "Res" ? "dropdown-item active" : "dropdown-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.WRcount);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.sendtype == "Req" && ctx.selectedItems.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.sendtype == "Res" && ctx.selectedItems.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.CurrentPageNo == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.CurrentPageNo != 1 && ctx.CurrentPageNo != ctx.LastPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.CurrentPageNo == ctx.LastPage && ctx.CurrentPageNo != 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx._totalProjectsCount >= 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx._totalProjectsCount < 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.CurrentPageNo == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx._CurrentpageRecords < 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.edited ? "btn btn-label-primary btn-upper btn-sm btn-bold filter-dot" : "btn btn-label-primary btn-upper btn-sm btn-bold");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx._totalProjectsCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.txtSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](73, 37, ctx.TypeContInFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](80, 40, ctx.RequestCountFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](87, 43, ctx.EmpCountInFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("About (", ctx._CurrentpageRecords, ") results found");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.selectAllCheckbox);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.Z2A1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.A2Z1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx._NotificationActivity);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.emptyspace == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.selectedItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.rejectType);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.reject_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.rejectType != 1 && ctx.rejectType);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.noRejectType == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.rejectType && ctx.rejectcomments > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.rejectType && ctx.rejectcomments > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.rejectType);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.comments || !ctx.rejectType);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["ɵr"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipe], styles: [".card.brdr[_ngcontent-%COMP%] {\r\n    border-left: 4px solid #2786fb;\r\n    border-radius: 5px;\r\n}\r\n.pro-rsec[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n}\r\n.tic-abt[_ngcontent-%COMP%] {\r\n    color: #8898aa!important;\r\n}\r\n.notifi-list[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\r\n    color: #32325d;\r\n    line-height: 1.5;\r\n}\r\n.pro-dc[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 999;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: #ffffff;\r\n  border-left: 1px solid #b3bcff;\r\n  border-left: 1px solid #f5f6fc;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  \r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%]{\r\n  background-color: #f5f6fc;\r\n}\r\n.info-icon-cir[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: #5867dd;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]{\r\n  border-bottom: 0.07rem dashed #dedede;\r\n  padding: 6px;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%]{\r\n  border-bottom: 0.07rem dashed rgba(0,0,0,0.3);\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%]{\r\n  font-weight: 600;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]{\r\n    width: 270px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n  border: 1px solid #d6dbff;\r\n  border-radius: 5px;\r\n}\r\n.cmmts.text-ellipsis[_ngcontent-%COMP%]{max-width: 250px;}\r\n.text-ellipsis[_ngcontent-%COMP%]{\r\n  white-space: nowrap;\r\n  overflow: hidden!important;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%], .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-up[_ngcontent-%COMP%]{\r\n  border-top: 7px solid #adadad !important;\r\n    border-left: 7px solid transparent !important;\r\n    border-right: 7px solid transparent !important\r\n}\r\n.multiselect-dropdown[_ngcontent-%COMP%]{\r\n  width: 80px !important;\r\n\r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n  border-color: #d6d6d6;\r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.success {\r\n  border-left: 5px solid #1dc9b7;\r\n  \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.warning {\r\n    border-left: 5px solid #ffb822; \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.info {\r\n    border-left: 5px solid #2786fb; \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.danger {\r\n    border-left: 5px solid #F58A8B; \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.UnderApprovals {\r\n  border-left: 5px solid #BD838C; \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.ForwardUnderApproval {\r\n  border-left: 5px solid #E0B1D7; \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.completeUnderApproval {\r\n  border-left: 5px solid #98c7bf; \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.projectHold {\r\n  border-left: 5px solid #C0B5DC; \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.HoldunderApp {\r\n  border-left: 5px solid #a85098; \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.DeadlineExtended{\r\n  border-left: 5px solid #E0B1D7; \r\n}\r\n.delayDays[_ngcontent-%COMP%]{\r\n  font-size: 11px;\r\n}\r\n.kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n  min-height: 60px;\r\n}\r\n.kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background: rgb(195, 195, 195);\r\n}\r\n\r\n.kt-quick-panel2[_ngcontent-%COMP%] {\r\n  width: 650px !important;\r\n}\r\n.kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\r\n  right: -660px;\r\n  left: auto;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n  border-radius: 5px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #F1F1F1;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n\r\n.text-ellipsis.w-600[_ngcontent-%COMP%] {\r\n  white-space: nowrap;\r\n  width: 600px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.kt-quick-panel2[_ngcontent-%COMP%] {\r\n  width: 650px !important;\r\n}\r\n.kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\r\n  right: -660px;\r\n  left: auto;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n  border-radius: 5px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #F1F1F1;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n\r\n.kt-portlet__body_scroll[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 100px);\r\n    overflow-x: hidden;\r\n  \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]{\r\n  margin: 0px !important;\r\n}\r\n.multiselect-dropdown[_ngcontent-unj-c40][_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-unj-c40][_ngcontent-%COMP%]{\r\n  width: 150px !important;\r\n}\r\n\r\nvirtual-scroller[_ngcontent-%COMP%] {\r\n  \r\n  height: 200px;\r\n}\r\n.vsdiv[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: 30px;\r\n}\r\n\r\n.info-icon-cir[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: #5867dd;\r\n}\r\n.count-height[_ngcontent-%COMP%]{\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.count-height[_ngcontent-%COMP%]   .justify-content-between[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #ccc;\r\n}\r\n.dropdown[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]{\r\n  border-color: #5867dd;\r\n}\r\n.kt-checkbox[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\r\n  border: solid #5867dd;\r\n}\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown[_ngcontent-%COMP%] {\r\n  position: static !important;\r\n}\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    width: 60%;\r\n    \r\n    top: 20px !important;\r\n    left: -22px !important;\r\n}\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  border-bottom: 15px solid #fff;\r\n  border-right: 17px solid transparent;\r\n  border-left: 17px solid transparent;\r\n  position: absolute;\r\n  top: -15px;\r\n  left: 32px;\r\n  z-index: 10;\r\n}\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  border-bottom: 17px solid #ccc;\r\n  border-right: 19px solid transparent;\r\n  border-left: 19px solid transparent;\r\n  position: absolute;\r\n  top: -17px;\r\n  left: 30px;\r\n  z-index: 8;\r\n}\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu1[_ngcontent-%COMP%]   .filter-box[_ngcontent-%COMP%]{\r\n  width: 33.3333%;\r\n  display: inline-block;\r\n}\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){\r\n  width: 3%;\r\n}\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){\r\n  width: 33%;\r\n}\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3){\r\n  width: 10%;\r\n}\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4){\r\n  width: 10%;\r\n}\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5){\r\n  width: 15%;\r\n}\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6){\r\n  width: 10%;\r\n}\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(7), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7){\r\n  width: 10%;\r\n}\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(8), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8){\r\n  width: 10%;\r\n}\r\n.kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{\r\n  \r\n  cursor: pointer;\r\n}\r\n.kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{\r\n  border: 1px solid #d6dbff;\r\n  border-radius: 5px;\r\n}\r\n.show_entries[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 3px;\r\n  background-color: #fff;\r\n \r\n}\r\n.show_entries[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n  \r\n  border: 2px solid rgba(88, 103, 221, 0.3);\r\n  color: #5867dd;\r\n  font-weight: bold;\r\n}\r\n.count-btn[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  padding: 0px 10px;\r\n  font-weight: 700;\r\n  color: rgb(88, 88, 88);\r\n  font-size: 14px;\r\n  line-height: 25px;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__toolbar[_ngcontent-%COMP%]   .kt-inbox__search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  height: 44px;\r\n  border: none;\r\n  background-color: #f2f3f7;\r\n}\r\n.input-group[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: stretch;\r\n  width: 100% !important;\r\n}\r\n.dropdown-menu-md.bg-ground[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]{\r\n  \r\n  background-color: #fff;\r\n  width: 25vw;\r\n  box-shadow: none;\r\n  border: 1px solid #d6dbff !important;\r\n  margin-top: 5px;\r\n}\r\n.dropdown-menu-md.bg-ground[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{\r\n  background-color: #f5f6fc;\r\n}\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%]   .kt-inbox__items[_ngcontent-%COMP%]   .kt-inbox__item[_ngcontent-%COMP%]{\r\n  position: relative;\r\n}\r\n.delete-btn[_ngcontent-%COMP%]{\r\n  display: none;\r\n  position: absolute;\r\n   right: 0px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    background-color: #f2f3f7;\r\n    color: grey;\r\n    line-height: 63px;\r\n    padding: 0 20px;\r\n    transition: all 2s ease !important;\r\n}\r\n.delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  background: none;\r\n  font-size: 16px;\r\n  outline: none !important;\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  height: 30px;\r\n  width: 30px;\r\n  background-color: #f5f6fc;\r\n  border: 1px solid #b3bcff;\r\n  color: #5867dd;\r\n  transition: all 0.3s ease;\r\n  cursor: pointer;\r\n  margin: 10px 8px 0 0;\r\n  border-radius: 0;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  text-align: center;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.btn-secondary.theme-btn[_ngcontent-%COMP%]{\r\n  background-color: #5867dd;\r\n  color: #fff;\r\n}\r\n.btn.btn-label-primary[_ngcontent-%COMP%]{\r\n  border: 1px solid #b3bcff;\r\n}\r\n.delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n}\r\n.kt-inbox__item[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.sidebar-more[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: 50%;\r\n}\r\n.footer[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 50%;\r\n  background-color: dodgerblue;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n.ng-autocomplete[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n}\r\n\r\n.memoscount[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 70px;\r\n  height: 34px;\r\n  margin: 5px;\r\n  border: 1px solid rgba(0, 0, 0, .2);\r\n  text-align: justify;\r\n\r\n}\r\n.blue[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n}\r\n.purple[_ngcontent-%COMP%] {\r\n  background: #00B74A;\r\n}\r\n.wine[_ngcontent-%COMP%] {\r\n  background: #F93154;\r\n}\r\n\r\n.M_fsize[_ngcontent-%COMP%]{\r\n  font-size: smaller;\r\n}\r\n.badge[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  font-size: 12px;\r\n  line-height: 1;\r\n  padding: .375rem .5625rem;\r\n  font-weight: normal;\r\n}\r\n.badge-outline-primary[_ngcontent-%COMP%] {\r\n  color: #405189;\r\n  border: 1.5px solid #405189\r\n}\r\n.badge.badge-pill[_ngcontent-%COMP%] {\r\n  border-radius: 10rem\r\n}\r\n.badge-outline-info[_ngcontent-%COMP%] {\r\n  color: #3da5f4;\r\n  border: 1.5px solid #3da5f4\r\n}\r\n.badge-outline-danger[_ngcontent-%COMP%] {\r\n  color: #f1536e;\r\n  border: 1.5px solid #f1536e\r\n}\r\n.badge-outline-success[_ngcontent-%COMP%] {\r\n  color: #00c689;\r\n  border: 1.5px solid #00c689\r\n}\r\n.badge-outline-warning[_ngcontent-%COMP%] {\r\n  color: #fda006;\r\n  border: 1px solid #fda006\r\n}\r\n.dms-links[_ngcontent-%COMP%]{\r\n  list-style-type: disc;\r\n}\r\n.dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  display: block;\r\n  text-decoration: underline;\r\n  font-weight: 600;\r\n  margin-bottom: 5px;\r\n}\r\n\r\nmat-select[_ngcontent-%COMP%]{\r\n  padding: 10px 5px;\r\n  background-color: #fff;\r\n  margin-right: 5px;\r\n}\r\ndiv#mat-select-0-panel[_ngcontent-%COMP%]{\r\n  min-width: auto;\r\n}\r\n.mat-select-panel-wrap.ng-tns-c275-0.ng-trigger.ng-trigger-transformPanelWrap.ng-star-inserted[_ngcontent-%COMP%]{\r\n  transform: none;\r\n}\r\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\r\n  color: unset;\r\n}\r\n  .mat-option-pseudo-checkbox.mat-pseudo-checkbox-checked {\r\n  background-color: #303F9F;\r\n}\r\n.kt-widget__details[_ngcontent-%COMP%] {\r\n  min-width: 90px;\r\n}\r\n.kt-media-group[_ngcontent-%COMP%]   .kt-media.kt-media--sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n.kt-media-group[_ngcontent-%COMP%]   .kt-media.kt-media--sm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  width: 25px;\r\n  height: 25px;\r\n  background: #deecf8;\r\n  color: #2786fb;\r\n}\r\n.bg-today[_ngcontent-%COMP%] {\r\n  background-color: #342bf0 !important;\r\n}\r\n.w-45[_ngcontent-%COMP%] {\r\n  width: 45% !important;\r\n}\r\n.w-55[_ngcontent-%COMP%] {\r\n  width: 55% !important;\r\n}\r\n#project-4_wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n.hvr-item[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  right: 0;\r\n  background: #fff;\r\n  height: 100%;\r\n  min-width: 200px;\r\n  margin: auto;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-top: 1px solid #ebedf2;\r\n  color: #2786fb;\r\n\r\n}\r\n.chck-div[_ngcontent-%COMP%]{  \r\n  cursor: pointer;\r\n}\r\n#project-4_wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   .hvr-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n#project-4_wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  \r\n  box-shadow: 0px 8px 20px rgb(0 0 0 / 12%);\r\n}\r\n.chck-div[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.2);\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n.chk-icn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\r\n  width: 20px;\r\n  height: 20px;\r\n  fill: #2786fb;\r\n}\r\n.hvr-item[_ngcontent-%COMP%]::after {\r\n  width: 145px;\r\n  transition: all 0.1s;\r\n  content: \"\";\r\n  height: 47px;\r\n  margin-left: -144px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-image: linear-gradient(90deg, rgba(250, 251, 252, 0) 0%, #FAFBFC 100%);\r\n  opacity: 1;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]{\r\n    width: 80vw;\r\n  }\r\n}\r\n.suc-hvr[_ngcontent-%COMP%] {\r\n  color: #1dc9b7;\r\n}\r\n.suc-hvr[_ngcontent-%COMP%]:hover {\r\n  background: #1dc9b7;\r\n  color: #fff;\r\n}\r\n.dan-hvr[_ngcontent-%COMP%] {\r\n  color: #dc3545;\r\n}\r\n.dan-hvr[_ngcontent-%COMP%]:hover {\r\n  background: #dc3545;\r\n  color: #fff;\r\n}\r\n.kt-widget__title[_ngcontent-%COMP%]{\r\n  width: 250px;\r\n}\r\n@media (max-width: 1440px){\r\n  .kt-widget__title[_ngcontent-%COMP%]{\r\n    width: 240px;\r\n  }\r\n  .stat-td[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    width: 135px;\r\n  }\r\n  .stat-td[_ngcontent-%COMP%]{\r\n    width: 135px;\r\n  }\r\n}\r\n@media (max-width: 1300px){\r\n.kt-widget__title[_ngcontent-%COMP%]{\r\n    width: 180px;\r\n}\r\n}\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  width: 60%;\r\n  \r\n  top: 20px !important;\r\n  left: -22px !important;\r\n}\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:before {\r\ncontent: \"\";\r\nborder-bottom: 15px solid #fff;\r\nborder-right: 17px solid transparent;\r\nborder-left: 17px solid transparent;\r\nposition: absolute;\r\ntop: -15px;\r\nleft: 32px;\r\nz-index: 10;\r\n}\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:after {\r\ncontent: \"\";\r\nborder-bottom: 17px solid #ccc;\r\nborder-right: 19px solid transparent;\r\nborder-left: 19px solid transparent;\r\nposition: absolute;\r\ntop: -17px;\r\nleft: 30px;\r\nz-index: 8;\r\n}\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu1[_ngcontent-%COMP%]   .filter-box[_ngcontent-%COMP%]{\r\nwidth: 33.3333%;\r\ndisplay: inline-block;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{\r\n  padding: 0.4rem 1rem;\r\n}\r\na.dropdown-item[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n.select-box[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n.form-check-input1[_ngcontent-%COMP%] {\r\n  vertical-align: text-top;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 11' width='13' height='11' fill='none'%3e%3cpath d='M11.0426 1.02893C11.3258 0.695792 11.8254 0.655283 12.1585 0.938451C12.4917 1.22162 12.5322 1.72124 12.249 2.05437L5.51985 9.97104C5.23224 10.3094 4.72261 10.3451 4.3907 10.05L0.828197 6.88335C0.50141 6.59288 0.471975 6.09249 0.762452 5.7657C1.05293 5.43891 1.55332 5.40948 1.88011 5.69995L4.83765 8.32889L11.0426 1.02893Z' fill='%23FFFFFF'/%3e%3c/svg%3e\");\r\n}\r\n.form-check-input[_ngcontent-%COMP%] {\r\n  vertical-align: text-top;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 11' width='13' height='11' fill='none'%3e%3cpath d='M11.0426 1.02893C11.3258 0.695792 11.8254 0.655283 12.1585 0.938451C12.4917 1.22162 12.5322 1.72124 12.249 2.05437L5.51985 9.97104C5.23224 10.3094 4.72261 10.3451 4.3907 10.05L0.828197 6.88335C0.50141 6.59288 0.471975 6.09249 0.762452 5.7657C1.05293 5.43891 1.55332 5.40948 1.88011 5.69995L4.83765 8.32889L11.0426 1.02893Z' fill='%23FFFFFF'/%3e%3c/svg%3e\");\r\n}\r\n.ps-1[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  float: unset;\r\n  margin: 0 !important;\r\n}\r\n.cmts-items[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px 15px;\r\n  border-bottom: 1px solid #e4e7e8;\r\n}\r\n.cmts-svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n  height: 20px;\r\n  fill: #8d95a5;\r\n}\r\n.appr-comts[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  flex: 1;\r\n}\r\n.exs-cmts[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  color: #4b4343;\r\n}\r\n.exs-cmts[_ngcontent-%COMP%]   .crd-bdy[_ngcontent-%COMP%]{  \r\n  overflow: auto;\r\n  max-height: 200px;\r\n}\r\n.cmts-items[_ngcontent-%COMP%]:hover   .cmts-svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  transform: scale(1.1);\r\n  fill: #2786fb;\r\n}\r\n.cmts-svg[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n.card-car[_ngcontent-%COMP%]{\r\n  color: #595d6e;\r\n}\r\n#rejectbar.kt-quick-panel--on[_ngcontent-%COMP%] {\r\n  width: 50% !important;\r\n}\r\n.event-main[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n  display: flex;\r\n  position: relative;    \r\n  align-items: center;\r\n\r\n}\r\n.event-color[_ngcontent-%COMP%] {\r\nmargin-right: 10px;\r\nbackground-color: transparent;\r\nflex: 0 0 auto;\r\nborder-radius: 40px;\r\nheight: 10px;\r\nwidth: 10px;\r\nmargin-left: 3px;\r\n}\r\n.event-color--info[_ngcontent-%COMP%] {\r\nbackground-color: #4d87ff;\r\n}\r\n.event-color--transparent[_ngcontent-%COMP%] {\r\n  border: 1px solid #ddd;\r\n}\r\n.event-title[_ngcontent-%COMP%] {\r\ncolor: #555;\r\nfont-weight: 600;\r\ndisplay: flex;\r\nflex-direction: row;\r\nflex: 0 1 auto;\r\nflex-wrap: wrap;\r\nword-break: break-word;\r\noverflow-wrap: break-word;\r\nword-wrap: break-word;\r\n-webkit-hyphens: manual;\r\nhyphens: manual;\r\n}\r\n.event-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\ncolor: #007bff;\r\ncolor: #555;\r\n}\r\n.event-media[_ngcontent-%COMP%] {\r\ncolor: #2786fb!important;\r\n}\r\n.desc-1[_ngcontent-%COMP%] {\r\n  margin-left: 24px;\r\n  color: #6d6c71;\r\n}\r\n.btm-des[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.cus-scroll[_ngcontent-%COMP%]{\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n}\r\n.meetdt[_ngcontent-%COMP%] {\r\n  padding: 0.8rem 1.25rem;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n.crd-title[_ngcontent-%COMP%]{\r\n  color: #595d6e;\r\n}\r\n.brb-1[_ngcontent-%COMP%]{\r\n  border-bottom: 1px solid #ebedf2;\r\n}\r\n.status-d[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\r\n  margin-bottom: 0;\r\n}\r\nspan.count2[_ngcontent-%COMP%] {\r\n  margin-left: 2px;\r\n  width: 20px;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  background: #deecf8;\r\n  color: #2786fb;\r\n  border-radius: 50%;\r\n  font-size: 0.9rem;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: 600;\r\n}\r\n.noti[_ngcontent-%COMP%] {\r\n  background: #153b5669;\r\n  border-radius: 50%;\r\n  padding: 0.2em 0.5rem 0.35rem 0.5rem;\r\n  min-width: 1.429rem;\r\n  min-height: 1.429rem;\r\n  line-height: 1;\r\n  margin-left: 5px;\r\n  position: absolute;\r\n  right: 5px;\r\n}\r\n.noti-cus[_ngcontent-%COMP%] {\r\n  background: #153b5669 !important;\r\n  border-radius: 500px !important;\r\n  padding: 0.2em 0.8rem 0.35rem 0.8rem;\r\n  min-width: 1.429rem;\r\n  min-height: 1.429rem;\r\n  line-height: 1;\r\n  margin-left: 45px;\r\n  color: #fff !important;\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n  box-shadow: rgb(0 0 0 / 10%) 0px 0px 5px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCO0FBRUE7RUFDRSxZQUFZO0VBQ1osUUFBUTtFQUNSLGVBQWU7RUFDZixZQUFZO0VBQ1osTUFBTTtFQUNOLFFBQVE7RUFDUix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsNkNBQTZDO0FBQy9DO0FBR0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFFQSxxQkFBcUIsZ0JBQWdCLENBQUM7QUFDdEM7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLHVCQUF1QjtBQUN6QjtBQUVBLHdCQUF3QjtBQUV4Qjs7RUFFRSx3Q0FBd0M7SUFDdEMsNkNBQTZDO0lBQzdDO0FBQ0o7QUFFQTtFQUNFLHNCQUFzQjs7QUFFeEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHdCQUF3QjtBQUMxQjtBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDO0FB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bnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQuYnJkciB7XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMyNzg2ZmI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnByby1yc2VjIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbi50aWMtYWJ0IHtcclxuICAgIGNvbG9yOiAjODg5OGFhIWltcG9ydGFudDtcclxufVxyXG4ubm90aWZpLWxpc3QgLmNhcmQtdGl0bGUge1xyXG4gICAgY29sb3I6ICMzMjMyNWQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcbi5wcm8tZGMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaWRlSW5mb2JhciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYjNiY2ZmO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Y1ZjZmYztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICAvKiBwYWRkaW5nLXRvcDogNjBweDsgKi9cclxufVxyXG4uc2lkZUluZm9iYXIgLmt0LXBvcnRsZXRfX2hlYWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcclxufVxyXG5cclxuLmluZm8taWNvbi1jaXJ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjNTg2N2RkO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW17XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgI2RlZGVkZTtcclxuICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtLmRhcmt7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgcmdiYSgwLDAsMCwwLjMpO1xyXG59XHJcblxyXG5cclxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtIC5rdC13aWRnZXQxX19pbmZvIC5rdC13aWRnZXQxX190aXRsZXtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5zaWRlSW5mb2JhciAudGl0bGUtc2lkZWJhcntcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbi5rdC1xdWljay1zZWFyY2ggLmt0LXF1aWNrLXNlYXJjaF9fZm9ybSAuaW5wdXQtZ3JvdXAge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmRiZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uY21tdHMudGV4dC1lbGxpcHNpc3ttYXgtd2lkdGg6IDI1MHB4O31cclxuLnRleHQtZWxsaXBzaXN7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuIWltcG9ydGFudDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLyogcHJvamVjdCBzdW1tYXJ5IGNzcyAqL1xyXG5cclxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLmRyb3Bkb3duLWRvd24sXHJcbi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5kcm9wZG93bi11cHtcclxuICBib3JkZXItdG9wOiA3cHggc29saWQgI2FkYWRhZCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudFxyXG59XHJcblxyXG4ubXVsdGlzZWxlY3QtZHJvcGRvd257XHJcbiAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRke1xyXG4gIGJvcmRlci1jb2xvcjogI2Q2ZDZkNjtcclxufVxyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLnN1Y2Nlc3Mge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzFkYzliNztcclxuICAvKiBib3JkZXItcmFkaXVzOiA0cHg7ICovXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLndhcm5pbmcge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZiODIyOyBcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuaW5mbyB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyNzg2ZmI7IFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5kYW5nZXIge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRjU4QThCOyBcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuVW5kZXJBcHByb3ZhbHMge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0JEODM4QzsgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLkZvcndhcmRVbmRlckFwcHJvdmFsIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7IFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5jb21wbGV0ZVVuZGVyQXBwcm92YWwge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZjsgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLnByb2plY3RIb2xkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNDMEI1REM7IFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5Ib2xkdW5kZXJBcHAge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E4NTA5ODsgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLkRlYWRsaW5lRXh0ZW5kZWR7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3OyBcclxufVxyXG4uZGVsYXlEYXlze1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4ua3QtcXVpY2stcGFuZWwgLmt0LXBvcnRsZXQua3QtcG9ydGxldC0taGVhZC1sZyAua3QtcG9ydGxldF9faGVhZCB7XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxufVxyXG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLXVuaWZpZWQtYnJhbmQge1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQ6IHJnYigxOTUsIDE5NSwgMTk1KTtcclxufVxyXG4vKiAuaW5ib3gtdGV4dCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufSAqL1xyXG4ua3QtcXVpY2stcGFuZWwyIHtcclxuICB3aWR0aDogNjUwcHggIWltcG9ydGFudDtcclxufVxyXG4ua3QtcXVpY2stcGFuZWwtLXJpZ2h0IC5rdC1xdWljay1wYW5lbCB7XHJcbiAgcmlnaHQ6IC02NjBweDtcclxuICBsZWZ0OiBhdXRvO1xyXG59XHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XHJcbn1cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1NTU7XHJcbn1cclxuLyogLnNvbWVjbGFzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0gKi9cclxuLyogOmhvc3QoLnNvbWVDbGFzcykge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSAqL1xyXG4udGV4dC1lbGxpcHNpcy53LTYwMCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4ua3QtcXVpY2stcGFuZWwyIHtcclxuICB3aWR0aDogNjUwcHggIWltcG9ydGFudDtcclxufVxyXG4ua3QtcXVpY2stcGFuZWwtLXJpZ2h0IC5rdC1xdWljay1wYW5lbCB7XHJcbiAgcmlnaHQ6IC02NjBweDtcclxuICBsZWZ0OiBhdXRvO1xyXG59XHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XHJcbn1cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1NTU7XHJcbn1cclxuLyogLnNvbWVjbGFzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0gKi9cclxuLyogOmhvc3QoLnNvbWVDbGFzcykge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSAqL1xyXG4ua3QtcG9ydGxldF9fYm9keV9zY3JvbGwge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGV7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm11bHRpc2VsZWN0LWRyb3Bkb3duW19uZ2NvbnRlbnQtdW5qLWM0MF0gLmRyb3Bkb3duLWJ0bltfbmdjb250ZW50LXVuai1jNDBde1xyXG4gIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHZpcnR1YWwgU2Nyb2xsZXIgKi9cclxudmlydHVhbC1zY3JvbGxlciB7XHJcbiAgLyogd2lkdGg6IDM1MHB4OyAqL1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuIFxyXG4udnNkaXYge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLyogPT09IFNpZGViYXIgPT09ICovXHJcblxyXG4uaW5mby1pY29uLWNpcntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICM1ODY3ZGQ7XHJcbn1cclxuLmNvdW50LWhlaWdodHtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4vKiAuY291bnQtaGVpZ2h0IC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbntcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcclxufSAqL1xyXG4uY291bnQtaGVpZ2h0IC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiAua3QtY2hlY2tib3h7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuXHJcbi8qIHdpZHRoICovXHJcbi5jb3VudC1oZWlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogM3B4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbi5jb3VudC1oZWlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuLmNvdW50LWhlaWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuXHJcbi5kcm9wZG93biAua3QtY2hlY2tib3ggPiBpbnB1dDpjaGVja2VkIH4gc3BhbntcclxuICBib3JkZXItY29sb3I6ICM1ODY3ZGQ7XHJcbn1cclxuLmt0LWNoZWNrYm94ID4gc3BhbjphZnRlciB7XHJcbiAgYm9yZGVyOiBzb2xpZCAjNTg2N2RkO1xyXG59XHJcblxyXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93biB7XHJcbiAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xyXG59XHJcbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnUge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lOyAqL1xyXG4gICAgdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAtMjJweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgI2ZmZjtcclxuICBib3JkZXItcmlnaHQ6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTE1cHg7XHJcbiAgbGVmdDogMzJweDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJvcmRlci1ib3R0b206IDE3cHggc29saWQgI2NjYztcclxuICBib3JkZXItcmlnaHQ6IDE5cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDE5cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTE3cHg7XHJcbiAgbGVmdDogMzBweDtcclxuICB6LWluZGV4OiA4O1xyXG59XHJcblxyXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51MSAuZmlsdGVyLWJveHtcclxuICB3aWR0aDogMzMuMzMzMyU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCgxKSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoMSl7XHJcbiAgd2lkdGg6IDMlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDIpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCgyKXtcclxuICB3aWR0aDogMzMlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDMpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCgzKXtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDQpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg0KXtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDUpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg1KXtcclxuICB3aWR0aDogMTUlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDYpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg2KXtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDcpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg3KXtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDgpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg4KXtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHQsIC5rdC1xdWljay1zZWFyY2ggLmt0LXF1aWNrLXNlYXJjaF9fZm9ybSAuaW5wdXQtZ3JvdXAtYXBwZW5kIC5pbnB1dC1ncm91cC10ZXh0e1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZmY7ICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5rdC1xdWljay1zZWFyY2ggLmt0LXF1aWNrLXNlYXJjaF9fZm9ybSAuaW5wdXQtZ3JvdXB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZGJmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5zaG93X2VudHJpZXMgc3BhbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuIFxyXG59XHJcbi5zaG93X2VudHJpZXMgc2VsZWN0e1xyXG4gIC8qIHdpZHRoOiAxMDBweDsgKi9cclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDg4LCAxMDMsIDIyMSwgMC4zKTtcclxuICBjb2xvcjogIzU4NjdkZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvdW50LWJ0bntcclxuICAvKiBoZWlnaHQ6IDI1cHg7ICovXHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDsgKi9cclxuICBwYWRkaW5nOiAwcHggMTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoODgsIDg4LCA4OCk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcbi8qIFNlYXJjaCBQcm9qZWN0cyAqL1xyXG4ua3QtaW5ib3ggLmt0LWluYm94X190b29sYmFyIC5rdC1pbmJveF9fc2VhcmNoIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjc7XHJcbn1cclxuLmlucHV0LWdyb3VwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kLCAuZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQtc2hvcnR7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2UyZTlmZjsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAyNXZ3O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZGJmZiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQgLmZvcm0tY29udHJvbCwgLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kLXNob3J0IC5mb3JtLWNvbnRyb2x7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcclxufVxyXG5cclxuLmt0LWluYm94IC5rdC1pbmJveF9fbGlzdCAua3QtaW5ib3hfX2l0ZW1zIC5rdC1pbmJveF9faXRlbXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmRlbGV0ZS1idG57XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIHJpZ2h0OiAwcHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjc7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGxpbmUtaGVpZ2h0OiA2M3B4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgIWltcG9ydGFudDtcclxufVxyXG4uZGVsZXRlLWJ0biBpe1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjNiY2ZmO1xyXG4gIGNvbG9yOiAjNTg2N2RkO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMTBweCA4cHggMCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG4vKiAuZGVsZXRlLWJ0biBpe1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZSAhaW1wb3J0YW50O1xyXG59Ki9cclxuLmJ0bi1zZWNvbmRhcnkudGhlbWUtYnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmJ0bi5idG4tbGFiZWwtcHJpbWFyeXtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjNiY2ZmO1xyXG59XHJcblxyXG4uZGVsZXRlLWJ0biBpOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5rdC1pbmJveF9faXRlbTpob3ZlciAuZGVsZXRlLWJ0bntcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNpZGViYXItbW9yZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG4uZm9vdGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5nLWF1dG9jb21wbGV0ZSB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4vKiBCb3hlcyAgKi9cclxuLm1lbW9zY291bnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxuICBtYXJnaW46IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG5cclxufVxyXG5cclxuLmJsdWUge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5wdXJwbGUge1xyXG4gIGJhY2tncm91bmQ6ICMwMEI3NEE7XHJcbn1cclxuXHJcbi53aW5lIHtcclxuICBiYWNrZ3JvdW5kOiAjRjkzMTU0O1xyXG59XHJcbi8qIG1lbW9zQ291bnRfRm9udHNpemUgKi9cclxuLk1fZnNpemV7XHJcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHBhZGRpbmc6IC4zNzVyZW0gLjU2MjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmJhZGdlLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgY29sb3I6ICM0MDUxODk7XHJcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjNDA1MTg5XHJcbn1cclxuXHJcbi5iYWRnZS5iYWRnZS1waWxsIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHJlbVxyXG59XHJcblxyXG4uYmFkZ2Utb3V0bGluZS1pbmZvIHtcclxuICBjb2xvcjogIzNkYTVmNDtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkICMzZGE1ZjRcclxufVxyXG5cclxuLmJhZGdlLW91dGxpbmUtZGFuZ2VyIHtcclxuICBjb2xvcjogI2YxNTM2ZTtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkICNmMTUzNmVcclxufVxyXG5cclxuLmJhZGdlLW91dGxpbmUtc3VjY2VzcyB7XHJcbiAgY29sb3I6ICMwMGM2ODk7XHJcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMDBjNjg5XHJcbn1cclxuXHJcbi5iYWRnZS1vdXRsaW5lLXdhcm5pbmcge1xyXG4gIGNvbG9yOiAjZmRhMDA2O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZGEwMDZcclxufVxyXG5cclxuLmRtcy1saW5rc3tcclxuICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbn1cclxuXHJcbi5kbXMtbGlua3MgbGkgYXtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLyogPT09PT09PT09IE1hdCBTZWxlY3QgU3R5bGVzID09PT09PT09PSAqL1xyXG5cclxubWF0LXNlbGVjdHtcclxuICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbmRpdiNtYXQtc2VsZWN0LTAtcGFuZWx7XHJcbiAgbWluLXdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LXNlbGVjdC1wYW5lbC13cmFwLm5nLXRucy1jMjc1LTAubmctdHJpZ2dlci5uZy10cmlnZ2VyLXRyYW5zZm9ybVBhbmVsV3JhcC5uZy1zdGFyLWluc2VydGVke1xyXG4gIHRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcHJpbWFyeSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XHJcbiAgY29sb3I6IHVuc2V0O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1vcHRpb24tcHNldWRvLWNoZWNrYm94Lm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwM0Y5RjtcclxufVxyXG5cclxuLmt0LXdpZGdldF9fZGV0YWlscyB7XHJcbiAgbWluLXdpZHRoOiA5MHB4O1xyXG59XHJcbi5rdC1tZWRpYS1ncm91cCAua3QtbWVkaWEua3QtbWVkaWEtLXNtIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmt0LW1lZGlhLWdyb3VwIC5rdC1tZWRpYS5rdC1tZWRpYS0tc20gc3BhbiB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNkZWVjZjg7XHJcbiAgY29sb3I6ICMyNzg2ZmI7XHJcbn1cclxuLmJnLXRvZGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQyYmYwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnctNDUge1xyXG4gIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcclxufVxyXG4udy01NSB7XHJcbiAgd2lkdGg6IDU1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jcHJvamVjdC00X3dyYXBwZXIgdGFibGUgdGJvZHkgdHIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG4uaHZyLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYmVkZjI7XHJcbiAgY29sb3I6ICMyNzg2ZmI7XHJcblxyXG59XHJcbi5jaGNrLWRpdnsgIFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jcHJvamVjdC00X3dyYXBwZXIgdGFibGUgdGJvZHkgdHI6aG92ZXIgLmh2ci1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiNwcm9qZWN0LTRfd3JhcHBlciB0YWJsZSB0Ym9keSB0cjpob3ZlciB7XHJcbiAgLyogYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDsgKi9cclxuICBib3gtc2hhZG93OiAwcHggOHB4IDIwcHggcmdiKDAgMCAwIC8gMTIlKTtcclxufVxyXG4uY2hjay1kaXY6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG4uY2hrLWljbiBzdmd7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGZpbGw6ICMyNzg2ZmI7XHJcbn1cclxuLmh2ci1pdGVtOjphZnRlciB7XHJcbiAgd2lkdGg6IDE0NXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiA0N3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTQ0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTAsIDI1MSwgMjUyLCAwKSAwJSwgI0ZBRkJGQyAxMDAlKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi8qICNwcm9qZWN0LTRfd3JhcHBlciB0cjpob3ZlciAuaHZyLWl0ZW06OmFmdGVyICB7XHJcbiAgb3BhY2l0eTogMTtcclxufSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5ke1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgfVxyXG59XHJcblxyXG4uc3VjLWh2ciB7XHJcbiAgY29sb3I6ICMxZGM5Yjc7XHJcbn1cclxuLnN1Yy1odnI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMxZGM5Yjc7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmRhbi1odnIge1xyXG4gIGNvbG9yOiAjZGMzNTQ1O1xyXG59XHJcbi5kYW4taHZyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5rdC13aWRnZXRfX3RpdGxle1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KXtcclxuICAua3Qtd2lkZ2V0X190aXRsZXtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICB9XHJcbiAgLnN0YXQtdGQgZGl2e1xyXG4gICAgd2lkdGg6IDEzNXB4O1xyXG4gIH1cclxuICAuc3RhdC10ZHtcclxuICAgIHdpZHRoOiAxMzVweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KXtcclxuLmt0LXdpZGdldF9fdGl0bGV7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbn1cclxufVxyXG5cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogNjAlO1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTsgKi9cclxuICB0b3A6IDIwcHggIWltcG9ydGFudDtcclxuICBsZWZ0OiAtMjJweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnU6YmVmb3JlIHtcclxuY29udGVudDogXCJcIjtcclxuYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjZmZmO1xyXG5ib3JkZXItcmlnaHQ6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbmJvcmRlci1sZWZ0OiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogLTE1cHg7XHJcbmxlZnQ6IDMycHg7XHJcbnotaW5kZXg6IDEwO1xyXG59XHJcbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnU6YWZ0ZXIge1xyXG5jb250ZW50OiBcIlwiO1xyXG5ib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkICNjY2M7XHJcbmJvcmRlci1yaWdodDogMTlweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuYm9yZGVyLWxlZnQ6IDE5cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAtMTdweDtcclxubGVmdDogMzBweDtcclxuei1pbmRleDogODtcclxufVxyXG5cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudTEgLmZpbHRlci1ib3h7XHJcbndpZHRoOiAzMy4zMzMzJTtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc29ydC1kcm9wIC5kcm9wZG93bi1pdGVte1xyXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xyXG59XHJcblxyXG5hLmRyb3Bkb3duLWl0ZW17XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zZWxlY3QtYm94e1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQxIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEzIDExJyB3aWR0aD0nMTMnIGhlaWdodD0nMTEnIGZpbGw9J25vbmUnJTNlJTNjcGF0aCBkPSdNMTEuMDQyNiAxLjAyODkzQzExLjMyNTggMC42OTU3OTIgMTEuODI1NCAwLjY1NTI4MyAxMi4xNTg1IDAuOTM4NDUxQzEyLjQ5MTcgMS4yMjE2MiAxMi41MzIyIDEuNzIxMjQgMTIuMjQ5IDIuMDU0MzdMNS41MTk4NSA5Ljk3MTA0QzUuMjMyMjQgMTAuMzA5NCA0LjcyMjYxIDEwLjM0NTEgNC4zOTA3IDEwLjA1TDAuODI4MTk3IDYuODgzMzVDMC41MDE0MSA2LjU5Mjg4IDAuNDcxOTc1IDYuMDkyNDkgMC43NjI0NTIgNS43NjU3QzEuMDUyOTMgNS40Mzg5MSAxLjU1MzMyIDUuNDA5NDggMS44ODAxMSA1LjY5OTk1TDQuODM3NjUgOC4zMjg4OUwxMS4wNDI2IDEuMDI4OTNaJyBmaWxsPSclMjNGRkZGRkYnLyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuLmZvcm0tY2hlY2staW5wdXQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTMgMTEnIHdpZHRoPScxMycgaGVpZ2h0PScxMScgZmlsbD0nbm9uZSclM2UlM2NwYXRoIGQ9J00xMS4wNDI2IDEuMDI4OTNDMTEuMzI1OCAwLjY5NTc5MiAxMS44MjU0IDAuNjU1MjgzIDEyLjE1ODUgMC45Mzg0NTFDMTIuNDkxNyAxLjIyMTYyIDEyLjUzMjIgMS43MjEyNCAxMi4yNDkgMi4wNTQzN0w1LjUxOTg1IDkuOTcxMDRDNS4yMzIyNCAxMC4zMDk0IDQuNzIyNjEgMTAuMzQ1MSA0LjM5MDcgMTAuMDVMMC44MjgxOTcgNi44ODMzNUMwLjUwMTQxIDYuNTkyODggMC40NzE5NzUgNi4wOTI0OSAwLjc2MjQ1MiA1Ljc2NTdDMS4wNTI5MyA1LjQzODkxIDEuNTUzMzIgNS40MDk0OCAxLjg4MDExIDUuNjk5OTVMNC44Mzc2NSA4LjMyODg5TDExLjA0MjYgMS4wMjg5M1onIGZpbGw9JyUyM0ZGRkZGRicvJTNlJTNjL3N2ZyUzZVwiKTtcclxufVxyXG4ucHMtMXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHVuc2V0O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5jbXRzLWl0ZW1zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU3ZTg7XHJcbn1cclxuLmNtdHMtc3ZnIHN2ZyB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGZpbGw6ICM4ZDk1YTU7XHJcbn1cclxuLmFwcHItY29tdHMgaDYge1xyXG4gIG1hcmdpbjogMDtcclxuICBmbGV4OiAxO1xyXG59XHJcbi5leHMtY210cyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogIzRiNDM0MztcclxufVxyXG4uZXhzLWNtdHMgLmNyZC1iZHl7ICBcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uY210cy1pdGVtczpob3ZlciAuY210cy1zdmcgc3ZnIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgZmlsbDogIzI3ODZmYjtcclxufVxyXG4uY210cy1zdmcge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2FyZC1jYXJ7XHJcbiAgY29sb3I6ICM1OTVkNmU7XHJcbn1cclxuI3JlamVjdGJhci5rdC1xdWljay1wYW5lbC0tb24ge1xyXG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxufVxyXG4uZXZlbnQtbWFpbiB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgIFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uZXZlbnQtY29sb3Ige1xyXG5tYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5mbGV4OiAwIDAgYXV0bztcclxuYm9yZGVyLXJhZGl1czogNDBweDtcclxuaGVpZ2h0OiAxMHB4O1xyXG53aWR0aDogMTBweDtcclxubWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG4uZXZlbnQtY29sb3ItLWluZm8ge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjNGQ4N2ZmO1xyXG59XHJcbi5ldmVudC1jb2xvci0tdHJhbnNwYXJlbnQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuLmV2ZW50LXRpdGxlIHtcclxuY29sb3I6ICM1NTU7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmZsZXg6IDAgMSBhdXRvO1xyXG5mbGV4LXdyYXA6IHdyYXA7XHJcbndvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbm92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbndvcmQtd3JhcDogYnJlYWstd29yZDtcclxuLXdlYmtpdC1oeXBoZW5zOiBtYW51YWw7XHJcbi1tcy1oeXBoZW5zOiBtYW51YWw7XHJcbmh5cGhlbnM6IG1hbnVhbDtcclxufVxyXG4uZXZlbnQtdGl0bGUgYSB7XHJcbmNvbG9yOiAjMDA3YmZmO1xyXG5jb2xvcjogIzU1NTtcclxufVxyXG4uZXZlbnQtbWVkaWEge1xyXG5jb2xvcjogIzI3ODZmYiFpbXBvcnRhbnQ7XHJcbn1cclxuLmRlc2MtMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgY29sb3I6ICM2ZDZjNzE7XHJcbn1cclxuLmJ0bS1kZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY3VzLXNjcm9sbHtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5tZWV0ZHQge1xyXG4gIHBhZGRpbmc6IDAuOHJlbSAxLjI1cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcbi5jcmQtdGl0bGV7XHJcbiAgY29sb3I6ICM1OTVkNmU7XHJcbn1cclxuLmJyYi0xe1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlZGYyO1xyXG59XHJcbi5zdGF0dXMtZCBoNntcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbnNwYW4uY291bnQyIHtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjZGVlY2Y4O1xyXG4gIGNvbG9yOiAjMjc4NmZiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5ub3RpIHtcclxuICBiYWNrZ3JvdW5kOiAjMTUzYjU2Njk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBhZGRpbmc6IDAuMmVtIDAuNXJlbSAwLjM1cmVtIDAuNXJlbTtcclxuICBtaW4td2lkdGg6IDEuNDI5cmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDEuNDI5cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA1cHg7XHJcbn1cclxuLm5vdGktY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjMTUzYjU2NjkgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1MDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAuMmVtIDAuOHJlbSAwLjM1cmVtIDAuOHJlbTtcclxuICBtaW4td2lkdGg6IDEuNDI5cmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDEuNDI5cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTAlKSAwcHggMHB4IDVweCAwcHgsIHJnYigwIDAgMCAvIDEwJSkgMHB4IDBweCAxcHggMHB4O1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=2352.js.map