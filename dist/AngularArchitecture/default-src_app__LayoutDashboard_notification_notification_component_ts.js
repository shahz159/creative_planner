"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["default-src_app__LayoutDashboard_notification_notification_component_ts"],{

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ 9991);










function NotificationComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r0.CurrentPageNo, " - ", ctx_r0._CurrentpageRecords, " ");
} }
function NotificationComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r1._CurrentpageRecords * (ctx_r1.CurrentPageNo - 1) + 1, " - ", ctx_r1._CurrentpageRecords * ctx_r1.CurrentPageNo, " ");
} }
function NotificationComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r2.lastPagerecords * (ctx_r2.CurrentPageNo - 1) + 1, " - ", ctx_r2.lastPagerecords * (ctx_r2.CurrentPageNo - 1) + ctx_r2._CurrentpageRecords, " ");
} }
function NotificationComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 68)(1, "label", 69)(2, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function NotificationComponent_div_61_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11); const item_r8 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.isTypeChecked(item_r8)); })("ngModelChange", function NotificationComponent_div_61_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11); const item_r8 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](item_r8.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", item_r8.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r8.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r8.Count);
} }
function NotificationComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 68)(1, "label", 72)(2, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function NotificationComponent_div_68_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const item_r13 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.isRequestChecked(item_r13)); })("ngModelChange", function NotificationComponent_div_68_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const item_r13 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](item_r13.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", item_r13.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r13.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r13.Count);
} }
function NotificationComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 68)(1, "label", 72)(2, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function NotificationComponent_div_75_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const item_r17 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.isEmpChecked(item_r17)); })("ngModelChange", function NotificationComponent_div_75_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const item_r17 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](item_r17.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", item_r17.checked)("checked", item_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r17.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r17.Count);
} }
function NotificationComponent_tr_121_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r21.Req_Type);
} }
function NotificationComponent_tr_121_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r21.Req_Type);
} }
function NotificationComponent_tr_121_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r21.Req_Type);
} }
function NotificationComponent_tr_121_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r21.Req_Type);
} }
function NotificationComponent_tr_121_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r21.Req_Coments);
} }
function NotificationComponent_tr_121_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Not Provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function NotificationComponent_tr_121_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 93)(1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_tr_121_div_26_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36); const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r34.clearResponse(item_r21.Project_Code, item_r21.Rec_Date, item_r21.Req_Type)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "svg", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "path", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Clear response ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
function NotificationComponent_tr_121_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 74)(2, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_tr_121_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38); const item_r21 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r37.openInfo(item_r21.Project_Code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_tr_121_Template_a_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38); const item_r21 = restoredCtx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r39.moreDetails(item_r21.Project_Code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td")(7, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td")(10, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, NotificationComponent_tr_121_span_13_Template, 2, 1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, NotificationComponent_tr_121_span_14_Template, 2, 1, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, NotificationComponent_tr_121_span_15_Template, 2, 1, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, NotificationComponent_tr_121_span_16_Template, 2, 1, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td")(18, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "td")(21, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, NotificationComponent_tr_121_td_24_Template, 2, 1, "td", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, NotificationComponent_tr_121_td_25_Template, 2, 0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, NotificationComponent_tr_121_div_26_Template, 7, 0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r21.Project_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r21.Exec_BlockName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r21.Req_Type == "New Project" || item_r21.Req_Type == "Information" || item_r21.Req_Type == "Deadline Extend" || item_r21.Req_Type == "ToDo Achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r21.Req_Type == "New Project Reject Release" || item_r21.Req_Type == "Project Hold" || item_r21.Req_Type == "Task-Reject" || item_r21.Req_Type == "Project Complete Rejected" || item_r21.Req_Type == "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r21.Req_Type == "Project Complete" || item_r21.Req_Type == "Task Complete" || item_r21.Req_Type == "StandardTask Completed" || item_r21.Req_Type == "Approved Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r21.Req_Type == "Project Forward" || item_r21.Req_Type == "New Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r21.SubmittedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](23, 11, item_r21.Rec_Date, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r21.Req_Coments);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r21.Req_Coments == null || item_r21.Req_Coments == "" || item_r21.Req_Coments == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r21.Send_From == "WR");
} }
function NotificationComponent_div_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 99)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7._filtersMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7._filtersMessage2);
} }
class NotificationComponent {
    constructor(service, approvalservice, notifyService, router) {
        this.service = service;
        this.approvalservice = approvalservice;
        this.notifyService = notifyService;
        this.router = router;
        this.CurrentPageNo = 1;
        this.emptyspace = true;
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
        this.notificationDTO = new src_app_Models_notification_activity_dto__WEBPACK_IMPORTED_MODULE_1__.NotificationActivityDTO();
    }
    ngOnInit() {
        this.router.navigate(["Notifications"]);
        this.Current_user_ID = localStorage.getItem('EmpNo');
        this.viewAll();
    }
    viewAll() {
        this.notificationDTO.Emp_No = this.Current_user_ID;
        this.notificationDTO.PageNumber = 1;
        this.notificationDTO.PageSize = 20;
        this.notificationDTO.SelectedStatus = null;
        this.notificationDTO.SelectedEmp_No = null;
        this.notificationDTO.SelectedType = null;
        this.notificationDTO.SearchText = null;
        this.service.GetViewAllDashboardnotifications(this.notificationDTO).subscribe((data) => {
            // this._NotificationActivityList = data as NotificationActivityDTO[];
            this._NotificationActivity = JSON.parse(data[0]['Notification_Json']);
            console.log(this._NotificationActivity, "ws");
            this._totalProjectsCount = (data[0]['notificationcount']);
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
        document.getElementById("mysideInfobar").classList.add("kt-quick-panel--on");
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
                this.notifyService.showInfo("Response cleared.", '');
            this.viewAll();
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
        document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
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
    notinAction() {
        this.notifyService.showError("Development Under Maintainance", 'Failed');
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_2__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_Services_approvals_service__WEBPACK_IMPORTED_MODULE_3__.ApprovalsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
NotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], decls: 126, vars: 27, consts: [["id", "notifi", 1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height", "side_view", "pt-3"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title", "mr-4"], [1, "kt-menu__link-icon", "fas", "fa-bell", "mr-2", "text-primary"], [1, "kt-portlet__head-label", "mr-2"], [1, "kt-header__topbar-item", "kt-header__topbar-item--search", "mr-3"], [1, "kt-header__topbar-wrapper"], [1, "kt-quick-search", "kt-quick-search--inline"], [1, "kt-quick-search__form"], [1, "input-group"], ["type", "text", "autofocus", "", "placeholder", "Search Projects", 1, "form-control", "project-search", "kt-quick-search__input", "pl-3", 2, "width", "300px", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "input-group-prepend"], ["type", "submit", 1, "input-group-text", 3, "click"], [1, "flaticon2-search-1"], [1, "mr-3"], [4, "ngIf"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "disabled", "click"], [1, "fas", "fa-angle-left", "mr-0"], [1, "fas", "fa-angle-right", "mr-0"], [1, "mr-2"], ["data-toggle", "kt-tooltip", "title", "Click to sort Asc", 1, "btn", "btn-label-primary", "btn-sm"], [1, "fa", "fa-sort-alpha-down-alt", "font-16", "mr-0"], [1, "stores-sec", "mr-1"], [1, "nav", "navbar-nav", "filters"], ["id", "filtermenu", 1, "dropdown", "mega-dropdown"], ["data-toggle", "dropdown", 3, "ngClass"], [1, "fas", "fa-ellipsis-v", "mr-0"], [1, "dropdown-menu", "mega-dropdown-menu"], [3, "click"], [1, "col-md-10"], [1, "d-inline-block"], [1, "col-md-2"], [1, "col-md-12"], ["type", "text", "placeholder", "Search Filters", 1, "form-control", "kt-quick-search__input", "pl-3", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [1, "col-md-4"], [1, "count-height"], ["class", "d-flex justify-content-between", 4, "ngFor", "ngForOf"], ["data-toggle", "dropdown", 1, "btn", "btn-label-success", "btn-outline-success", "btn-upper", "btn-sm", "btn-bold", "mr-2"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-2", 3, "click"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fas", "fa-sync-alt", "mr-0"], [1, "kt-portlet"], [1, "kt-portlet__body", "kt-portlet__body_scroll", "px-1", "pt-3", "pb-0"], ["id", "project-4_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4", "no-footer"], [1, "col-sm-12"], [1, "d-none"], [1, "table-responsive"], ["role", "grid", 1, "table", "table-hover", "dataTable", "no-footer", "dtr-inline", 2, "width", "0px"], ["role", "row"], ["tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-sort", "ascending", "aria-label", ": activate to sort column descending", 2, "width", "100px"], ["data-order", "desc", "data-name", "Project_Name", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Title &amp; Description: activate to sort column ascending", 1, "curser-pointer", 2, "width", "0px", 3, "click"], ["data-toggle", "kt-tooltip", "title", "Click to sort", 1, "mr-2", 3, "hidden"], [1, "fas", "fa-sort-alpha-up"], [1, "fa", "fa-sort-alpha-down-alt"], ["data-order", "desc", "data-name", "Exec_BlockName", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Project Type: activate to sort column ascending", 1, "curser-pointer"], [1, "fas", "fa-sort"], ["data-order", "desc", "data-name", "ReportType", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "Category: activate to sort column ascending", 1, "curser-pointer"], ["data-order", "desc", "data-name", "Submitedby", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "User Name: activate to sort column ascending", 1, "curser-pointer"], ["data-order", "desc", "data-name", "RequestDate", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "End Date: activate to sort column ascending", 1, "curser-pointer"], ["data-order", "desc", "data-name", "Comments", "tabindex", "0", "aria-controls", "project-4", "rowspan", "1", "colspan", "1", "aria-label", "End Date: activate to sort column ascending", 1, "curser-pointer", "cmmts", "text-ellipsis"], [4, "ngFor", "ngForOf"], ["class", "text-center py-4", "style", "color: lightgrey", 4, "ngIf"], ["id", "rightbar-overlay", 3, "click"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], [1, "d-flex", "justify-content-between"], [1, "kt-checkbox"], ["type", "checkbox", 3, "ngModel", "change", "ngModelChange"], [1, "count-btn"], [1, "kt-checkbox", "mb-3"], ["type", "checkbox", 3, "ngModel", "checked", "change", "ngModelChange"], ["align", "center"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "Project Info!", 1, "btn", "px-0", "mr-2", 3, "click"], [1, "fa", "fa-info-circle", "info-icon-cir"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "More Info!", 1, "btn", "px-0", "mr-2", 3, "click"], [1, "fa", "fa-chart-bar", "info-icon-cir"], [1, "kt-widget__title", "mb-0"], [1, "kt-widget__other"], ["class", "text-info font-weight-400", 4, "ngIf"], ["class", "text-danger font-weight-400", 4, "ngIf"], ["class", "text-success font-weight-400", 4, "ngIf"], ["class", "text-primary font-weight-400", 4, "ngIf"], [1, "kt-widget__other", "text-nowrap"], ["class", "cmmts text-ellipsis", "data-toggle", "tooltip", "title", "Comments", 4, "ngIf"], ["class", "hvr-item", 4, "ngIf"], [1, "text-info", "font-weight-400"], [1, "text-danger", "font-weight-400"], [1, "text-success", "font-weight-400"], [1, "text-primary", "font-weight-400"], ["data-toggle", "tooltip", "title", "Comments", 1, "cmmts", "text-ellipsis"], [1, "hvr-item"], [1, "chck-div", 3, "click"], [1, "chk-icn"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 1, "svg-icn"], ["d", "M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"], [1, "mark-txt"], [1, "text-center", "py-4", 2, "color", "lightgrey"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NotificationComponent_Template_input_ngModelChange_16_listener($event) { return ctx.searchText = $event; })("keydown.enter", function NotificationComponent_Template_input_keydown_enter_16_listener($event) { return ctx.search($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 15)(18, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_18_listener($event) { return ctx.search($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, NotificationComponent_ng_container_21_Template, 2, 2, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, NotificationComponent_ng_container_22_Template, 2, 2, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, NotificationComponent_ng_container_23_Template, 2, 2, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_27_listener() { ctx.CurrentPageNo = ctx.CurrentPageNo - 1; return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_29_listener() { ctx.CurrentPageNo = ctx.CurrentPageNo + 1; return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 23)(32, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 26)(35, "ul", 27)(36, "li", 28)(37, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 31)(40, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_div_click_40_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 1)(42, "div", 33)(43, "h5")(44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Total Projects - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "h5", 34)(47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 1)(52, "div", 36)(53, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NotificationComponent_Template_input_ngModelChange_53_listener($event) { return ctx.txtSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 1)(56, "div", 38)(57, "div", 39)(58, "p")(59, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, NotificationComponent_div_61_Template, 7, 3, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](62, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 38)(64, "div", 39)(65, "p")(66, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Request Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, NotificationComponent_div_68_Template, 7, 3, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](69, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 38)(71, "div", 39)(72, "p")(73, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, NotificationComponent_div_75_Template, 7, 4, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](76, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](77, "br")(78, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 1)(80, "div", 33)(81, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_83_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_85_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](86, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 45)(88, "div", 46)(89, "div", 47)(90, "div", 1)(91, "div", 48)(92, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 50)(95, "table", 51)(96, "thead")(97, "tr", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](98, "th", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "th", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_th_click_99_listener() { return ctx._SortPortfoliolist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](101, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](103, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, " Project Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "th", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](106, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, " Project Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "th", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](109, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110, " Request Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "th", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](112, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113, " Submitted By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "th", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](115, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](116, " Request Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "th", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](118, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119, " Comments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](121, NotificationComponent_tr_121_Template, 27, 14, "tr", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](122, NotificationComponent_div_122_Template, 5, 2, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_div_click_123_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](125, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.CurrentPageNo == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.CurrentPageNo != 1 && ctx.CurrentPageNo != ctx.LastPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.CurrentPageNo == ctx.LastPage && ctx.CurrentPageNo != 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx._totalProjectsCount, "");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](62, 18, ctx.TypeContInFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](69, 21, ctx.RequestCountFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](76, 24, ctx.EmpCountInFilter, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("About (", ctx._CurrentpageRecords, ") results found");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.Z2A1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.A2Z1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx._NotificationActivity);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.emptyspace == false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipe], styles: [".card.brdr[_ngcontent-%COMP%] {\r\n    border-left: 4px solid #2786fb;\r\n    border-radius: 5px;\r\n}\r\n.pro-rsec[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n}\r\n.tic-abt[_ngcontent-%COMP%] {\r\n    color: #8898aa!important;\r\n}\r\n.notifi-list[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\r\n    color: #32325d;\r\n    line-height: 1.5;\r\n}\r\n.pro-dc[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 999;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: #ffffff;\r\n  border-left: 1px solid #b3bcff;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  \r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%]{\r\n  background-color: #f5f6fc;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #333;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n.info-icon-cir[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: #5867dd;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]{\r\n  border-bottom: 0.07rem dashed #dedede;\r\n  padding: 6px;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%]{\r\n  border-bottom: 0.07rem dashed rgba(0,0,0,0.3);\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%]{\r\n  font-weight: 600;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]{\r\n    width: 270px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n  border: 1px solid #d6dbff;\r\n  border-radius: 5px;\r\n}\r\n.cmmts.text-ellipsis[_ngcontent-%COMP%]{max-width: 250px;}\r\n.text-ellipsis[_ngcontent-%COMP%]{\r\n  white-space: nowrap;\r\n  overflow: hidden!important;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%], .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-up[_ngcontent-%COMP%]{\r\n  border-top: 7px solid #adadad !important;\r\n    border-left: 7px solid transparent !important;\r\n    border-right: 7px solid transparent !important\r\n}\r\n.multiselect-dropdown[_ngcontent-%COMP%]{\r\n  width: 80px !important;\r\n\r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n  border-color: #d6d6d6;\r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.success {\r\n  border-left: 5px solid #1dc9b7;\r\n  \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.warning {\r\n    border-left: 5px solid #ffb822; \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.info {\r\n    border-left: 5px solid #2786fb; \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.danger {\r\n    border-left: 5px solid #F58A8B; \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.UnderApprovals {\r\n  border-left: 5px solid #BD838C; \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.ForwardUnderApproval {\r\n  border-left: 5px solid #E0B1D7; \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.completeUnderApproval {\r\n  border-left: 5px solid #98c7bf; \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.projectHold {\r\n  border-left: 5px solid #C0B5DC; \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.HoldunderApp {\r\n  border-left: 5px solid #a85098; \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child.DeadlineExtended{\r\n  border-left: 5px solid #E0B1D7; \r\n}\r\n.delayDays[_ngcontent-%COMP%]{\r\n  font-size: 11px;\r\n}\r\n.kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n  min-height: 60px;\r\n}\r\n.kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background: rgb(195, 195, 195);\r\n}\r\n\r\n.kt-quick-panel2[_ngcontent-%COMP%] {\r\n  width: 650px !important;\r\n}\r\n.kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\r\n  right: -660px;\r\n  left: auto;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n  border-radius: 5px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #F1F1F1;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n\r\n.text-ellipsis.w-600[_ngcontent-%COMP%] {\r\n  white-space: nowrap;\r\n  width: 600px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.kt-quick-panel2[_ngcontent-%COMP%] {\r\n  width: 650px !important;\r\n}\r\n.kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\r\n  right: -660px;\r\n  left: auto;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n  border-radius: 5px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #F1F1F1;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n\r\n.kt-portlet__body_scroll[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 100px);\r\n  overflow: auto;\r\n  visibility: hidden;\r\n  \r\n}\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]{\r\n  margin: 0px !important;\r\n}\r\n.multiselect-dropdown[_ngcontent-unj-c40][_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-unj-c40][_ngcontent-%COMP%]{\r\n  width: 150px !important;\r\n}\r\n\r\nvirtual-scroller[_ngcontent-%COMP%] {\r\n  \r\n  height: 200px;\r\n}\r\n.vsdiv[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: 30px;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 999;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: #ffffff;\r\n  border-left: 1px solid #b3bcff;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  \r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%]{\r\n  background-color: #f5f6fc;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tcolor: #333;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n.info-icon-cir[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: #5867dd;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]{\r\n  border-bottom: 0.07rem dashed #dedede;\r\n  padding: 6px;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%]{\r\n  border-bottom: 0.07rem dashed rgba(0,0,0,0.3);\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%]{\r\n  font-weight: 600;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]{\r\n    width: 270px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.count-height[_ngcontent-%COMP%]{\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.count-height[_ngcontent-%COMP%]   .justify-content-between[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #ccc;\r\n}\r\n.dropdown[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]{\r\n  border-color: #5867dd;\r\n}\r\n.kt-checkbox[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\r\n  border: solid #5867dd;\r\n}\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown[_ngcontent-%COMP%] {\r\n  position: static !important;\r\n}\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    width: 60%;\r\n    \r\n    top: 20px !important;\r\n    left: -22px !important;\r\n}\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  border-bottom: 15px solid #fff;\r\n  border-right: 17px solid transparent;\r\n  border-left: 17px solid transparent;\r\n  position: absolute;\r\n  top: -15px;\r\n  left: 32px;\r\n  z-index: 10;\r\n}\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  border-bottom: 17px solid #ccc;\r\n  border-right: 19px solid transparent;\r\n  border-left: 19px solid transparent;\r\n  position: absolute;\r\n  top: -17px;\r\n  left: 30px;\r\n  z-index: 8;\r\n}\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu1[_ngcontent-%COMP%]   .filter-box[_ngcontent-%COMP%]{\r\n  width: 33.3333%;\r\n  display: inline-block;\r\n}\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){\r\n  width: 3%;\r\n}\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){\r\n  width: 33%;\r\n}\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3){\r\n  width: 10%;\r\n}\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4){\r\n  width: 10%;\r\n}\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5){\r\n  width: 15%;\r\n}\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6){\r\n  width: 10%;\r\n}\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(7), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7){\r\n  width: 10%;\r\n}\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(8), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8){\r\n  width: 10%;\r\n}\r\n.kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{\r\n  \r\n  cursor: pointer;\r\n}\r\n.kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{\r\n  border: 1px solid #d6dbff;\r\n  border-radius: 5px;\r\n}\r\n.show_entries[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 3px;\r\n  background-color: #fff;\r\n \r\n}\r\n.show_entries[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n  \r\n  border: 2px solid rgba(88, 103, 221, 0.3);\r\n  color: #5867dd;\r\n  font-weight: bold;\r\n}\r\n.count-btn[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  padding: 0px 10px;\r\n  font-weight: 700;\r\n  color: rgb(88, 88, 88);\r\n  font-size: 14px;\r\n  line-height: 25px;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__toolbar[_ngcontent-%COMP%]   .kt-inbox__search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  height: 44px;\r\n  border: none;\r\n  background-color: #f2f3f7;\r\n}\r\n.input-group[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: stretch;\r\n  width: 100% !important;\r\n}\r\n.dropdown-menu-md.bg-ground[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]{\r\n  \r\n  background-color: #fff;\r\n  width: 25vw;\r\n  box-shadow: none;\r\n  border: 1px solid #d6dbff !important;\r\n  margin-top: 5px;\r\n}\r\n.dropdown-menu-md.bg-ground[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{\r\n  background-color: #f5f6fc;\r\n}\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%]   .kt-inbox__items[_ngcontent-%COMP%]   .kt-inbox__item[_ngcontent-%COMP%]{\r\n  position: relative;\r\n}\r\n.delete-btn[_ngcontent-%COMP%]{\r\n  display: none;\r\n  position: absolute;\r\n   right: 0px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    background-color: #f2f3f7;\r\n    color: grey;\r\n    line-height: 63px;\r\n    padding: 0 20px;\r\n    transition: all 2s ease !important;\r\n}\r\n.delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  background: none;\r\n  font-size: 16px;\r\n  outline: none !important;\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  height: 30px;\r\n  width: 30px;\r\n  background-color: #f5f6fc;\r\n  border: 1px solid #b3bcff;\r\n  color: #5867dd;\r\n  transition: all 0.3s ease;\r\n  cursor: pointer;\r\n  margin: 10px 8px 0 0;\r\n  border-radius: 0;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  text-align: center;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.btn-secondary.theme-btn[_ngcontent-%COMP%]{\r\n  background-color: #5867dd;\r\n  color: #fff;\r\n}\r\n.btn.btn-label-primary[_ngcontent-%COMP%]{\r\n  border: 1px solid #b3bcff;\r\n}\r\n.delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n}\r\n.kt-inbox__item[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.sidebar-more[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: 50%;\r\n}\r\n.footer[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 50%;\r\n  background-color: dodgerblue;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n.ng-autocomplete[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n}\r\n\r\n.memoscount[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 70px;\r\n  height: 34px;\r\n  margin: 5px;\r\n  border: 1px solid rgba(0, 0, 0, .2);\r\n  text-align: justify;\r\n\r\n}\r\n.blue[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n}\r\n.purple[_ngcontent-%COMP%] {\r\n  background: #00B74A;\r\n}\r\n.wine[_ngcontent-%COMP%] {\r\n  background: #F93154;\r\n}\r\n\r\n.M_fsize[_ngcontent-%COMP%]{\r\n  font-size: smaller;\r\n}\r\n.badge[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  font-size: 12px;\r\n  line-height: 1;\r\n  padding: .375rem .5625rem;\r\n  font-weight: normal;\r\n}\r\n.badge-outline-primary[_ngcontent-%COMP%] {\r\n  color: #405189;\r\n  border: 1.5px solid #405189\r\n}\r\n.badge.badge-pill[_ngcontent-%COMP%] {\r\n  border-radius: 10rem\r\n}\r\n.badge-outline-info[_ngcontent-%COMP%] {\r\n  color: #3da5f4;\r\n  border: 1.5px solid #3da5f4\r\n}\r\n.badge-outline-danger[_ngcontent-%COMP%] {\r\n  color: #f1536e;\r\n  border: 1.5px solid #f1536e\r\n}\r\n.badge-outline-success[_ngcontent-%COMP%] {\r\n  color: #00c689;\r\n  border: 1.5px solid #00c689\r\n}\r\n.badge-outline-warning[_ngcontent-%COMP%] {\r\n  color: #fda006;\r\n  border: 1px solid #fda006\r\n}\r\n.dms-links[_ngcontent-%COMP%]{\r\n  list-style-type: disc;\r\n}\r\n.dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  display: block;\r\n  text-decoration: underline;\r\n  font-weight: 600;\r\n  margin-bottom: 5px;\r\n}\r\n\r\nmat-select[_ngcontent-%COMP%]{\r\n  padding: 10px 5px;\r\n  background-color: #fff;\r\n  margin-right: 5px;\r\n}\r\ndiv#mat-select-0-panel[_ngcontent-%COMP%]{\r\n  min-width: auto;\r\n}\r\n.mat-select-panel-wrap.ng-tns-c275-0.ng-trigger.ng-trigger-transformPanelWrap.ng-star-inserted[_ngcontent-%COMP%]{\r\n  transform: none;\r\n}\r\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\r\n  color: unset;\r\n}\r\n  .mat-option-pseudo-checkbox.mat-pseudo-checkbox-checked {\r\n  background-color: #303F9F;\r\n}\r\n.kt-widget__details[_ngcontent-%COMP%] {\r\n  min-width: 90px;\r\n}\r\n.kt-media-group[_ngcontent-%COMP%]   .kt-media.kt-media--sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n.kt-media-group[_ngcontent-%COMP%]   .kt-media.kt-media--sm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  width: 25px;\r\n  height: 25px;\r\n  background: #deecf8;\r\n  color: #2786fb;\r\n}\r\n.bg-today[_ngcontent-%COMP%] {\r\n  background-color: #342bf0 !important;\r\n}\r\n.w-45[_ngcontent-%COMP%] {\r\n  width: 45% !important;\r\n}\r\n.w-55[_ngcontent-%COMP%] {\r\n  width: 55% !important;\r\n}\r\n#project-4_wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.hvr-item[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  right: 0;\r\n  background: #fff;\r\n  height: 100%;\r\n  min-width: 200px;\r\n  margin: auto;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-top: 1px solid #ebedf2;\r\n  color: #2786fb;\r\n}\r\n.chck-div[_ngcontent-%COMP%]{  \r\n  cursor: pointer;\r\n}\r\n#project-4_wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   .hvr-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n#project-4_wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n}\r\n.chck-div[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.2);\r\n  transition: transform .2s;\r\n}\r\n.chk-icn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\r\n  width: 20px;\r\n  height: 20px;\r\n  fill: #2786fb;\r\n}\r\n.hvr-item[_ngcontent-%COMP%]::after {\r\n  width: 145px;\r\n  transition: all 0.1s;\r\n  content: \"\";\r\n  height: 47px;\r\n  margin-left: -144px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-image: linear-gradient(90deg, rgba(250, 251, 252, 0) 0%, #FAFBFC 100%);\r\n  opacity: 1;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]{\r\n    width: 80vw;\r\n  }\r\n}\r\n.suc-hvr[_ngcontent-%COMP%] {\r\n  color: #1dc9b7;\r\n}\r\n.suc-hvr[_ngcontent-%COMP%]:hover {\r\n  background: #1dc9b7;\r\n  color: #fff;\r\n}\r\n.dan-hvr[_ngcontent-%COMP%] {\r\n  color: #dc3545;\r\n}\r\n.dan-hvr[_ngcontent-%COMP%]:hover {\r\n  background: #dc3545;\r\n  color: #fff;\r\n}\r\n.kt-widget__title[_ngcontent-%COMP%]{\r\n  width: 250px;\r\n}\r\n@media (max-width: 1440px){\r\n  .kt-widget__title[_ngcontent-%COMP%]{\r\n    width: 240px;\r\n  }\r\n  .stat-td[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    width: 135px;\r\n  }\r\n  .stat-td[_ngcontent-%COMP%]{\r\n    width: 135px;\r\n  }\r\n}\r\n@media (max-width: 1300px){\r\n.kt-widget__title[_ngcontent-%COMP%]{\r\n    width: 180px;\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCO0FBRUE7RUFDRSxZQUFZO0VBQ1osUUFBUTtFQUNSLGVBQWU7RUFDZixZQUFZO0VBQ1osTUFBTTtFQUNOLFFBQVE7RUFDUix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLDZDQUE2QztBQUMvQztBQUdBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBRUEscUJBQXFCLGdCQUFnQixDQUFDO0FBQ3RDO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQix1QkFBdUI7QUFDekI7QUFFQSx3QkFBd0I7QUFFeEI7O0VBRUUsd0NBQXdDO0lBQ3RDLDZDQUE2QztJQUM3QztBQUNKO0FBRUE7RUFDRSxzQkFBc0I7O0FBRXhCO0FBQ0E7RUFD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QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsaUZBQWlGO0VBQ2pGLFVBQVU7QUFDWjtBQUNBOztHQUVHO0FBQ0g7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBR0E7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQSIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLmJyZHIge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMjc4NmZiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5wcm8tcnNlYyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG4udGljLWFidCB7XHJcbiAgICBjb2xvcjogIzg4OThhYSFpbXBvcnRhbnQ7XHJcbn1cclxuLm5vdGlmaS1saXN0IC5jYXJkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMzIzMjVkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4ucHJvLWRjIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2IzYmNmZjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICAvKiBwYWRkaW5nLXRvcDogNjBweDsgKi9cclxufVxyXG4uc2lkZUluZm9iYXIgLmt0LXBvcnRsZXRfX2hlYWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5jbG9zZWJ0biB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmluZm8taWNvbi1jaXJ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjNTg2N2RkO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW17XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgI2RlZGVkZTtcclxuICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtLmRhcmt7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgcmdiYSgwLDAsMCwwLjMpO1xyXG59XHJcblxyXG5cclxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtIC5rdC13aWRnZXQxX19pbmZvIC5rdC13aWRnZXQxX190aXRsZXtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5zaWRlSW5mb2JhciAudGl0bGUtc2lkZWJhcntcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbi5rdC1xdWljay1zZWFyY2ggLmt0LXF1aWNrLXNlYXJjaF9fZm9ybSAuaW5wdXQtZ3JvdXAge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmRiZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uY21tdHMudGV4dC1lbGxpcHNpc3ttYXgtd2lkdGg6IDI1MHB4O31cclxuLnRleHQtZWxsaXBzaXN7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuIWltcG9ydGFudDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLyogcHJvamVjdCBzdW1tYXJ5IGNzcyAqL1xyXG5cclxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLmRyb3Bkb3duLWRvd24sXHJcbi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5kcm9wZG93bi11cHtcclxuICBib3JkZXItdG9wOiA3cHggc29saWQgI2FkYWRhZCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudFxyXG59XHJcblxyXG4ubXVsdGlzZWxlY3QtZHJvcGRvd257XHJcbiAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRke1xyXG4gIGJvcmRlci1jb2xvcjogI2Q2ZDZkNjtcclxufVxyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLnN1Y2Nlc3Mge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzFkYzliNztcclxuICAvKiBib3JkZXItcmFkaXVzOiA0cHg7ICovXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLndhcm5pbmcge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZiODIyOyBcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuaW5mbyB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyNzg2ZmI7IFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5kYW5nZXIge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRjU4QThCOyBcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIgdGQ6Zmlyc3QtY2hpbGQuVW5kZXJBcHByb3ZhbHMge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0JEODM4QzsgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLkZvcndhcmRVbmRlckFwcHJvdmFsIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7IFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5jb21wbGV0ZVVuZGVyQXBwcm92YWwge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZjsgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLnByb2plY3RIb2xkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNDMEI1REM7IFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZDpmaXJzdC1jaGlsZC5Ib2xkdW5kZXJBcHAge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E4NTA5ODsgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkOmZpcnN0LWNoaWxkLkRlYWRsaW5lRXh0ZW5kZWR7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3OyBcclxufVxyXG4uZGVsYXlEYXlze1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4ua3QtcXVpY2stcGFuZWwgLmt0LXBvcnRsZXQua3QtcG9ydGxldC0taGVhZC1sZyAua3QtcG9ydGxldF9faGVhZCB7XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxufVxyXG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLXVuaWZpZWQtYnJhbmQge1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQ6IHJnYigxOTUsIDE5NSwgMTk1KTtcclxufVxyXG4vKiAuaW5ib3gtdGV4dCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufSAqL1xyXG4ua3QtcXVpY2stcGFuZWwyIHtcclxuICB3aWR0aDogNjUwcHggIWltcG9ydGFudDtcclxufVxyXG4ua3QtcXVpY2stcGFuZWwtLXJpZ2h0IC5rdC1xdWljay1wYW5lbCB7XHJcbiAgcmlnaHQ6IC02NjBweDtcclxuICBsZWZ0OiBhdXRvO1xyXG59XHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XHJcbn1cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1NTU7XHJcbn1cclxuLyogLnNvbWVjbGFzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0gKi9cclxuLyogOmhvc3QoLnNvbWVDbGFzcykge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSAqL1xyXG4udGV4dC1lbGxpcHNpcy53LTYwMCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4ua3QtcXVpY2stcGFuZWwyIHtcclxuICB3aWR0aDogNjUwcHggIWltcG9ydGFudDtcclxufVxyXG4ua3QtcXVpY2stcGFuZWwtLXJpZ2h0IC5rdC1xdWljay1wYW5lbCB7XHJcbiAgcmlnaHQ6IC02NjBweDtcclxuICBsZWZ0OiBhdXRvO1xyXG59XHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XHJcbn1cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1NTU7XHJcbn1cclxuLyogLnNvbWVjbGFzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0gKi9cclxuLyogOmhvc3QoLnNvbWVDbGFzcykge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSAqL1xyXG4ua3QtcG9ydGxldF9fYm9keV9zY3JvbGwge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxle1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdWx0aXNlbGVjdC1kcm9wZG93bltfbmdjb250ZW50LXVuai1jNDBdIC5kcm9wZG93bi1idG5bX25nY29udGVudC11bmotYzQwXXtcclxuICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxufVxyXG4vKiB2aXJ0dWFsIFNjcm9sbGVyICovXHJcbnZpcnR1YWwtc2Nyb2xsZXIge1xyXG4gIC8qIHdpZHRoOiAzNTBweDsgKi9cclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbiBcclxuLnZzZGl2IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi8qID09PSBTaWRlYmFyID09PSAqL1xyXG4uc2lkZUluZm9iYXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2IzYmNmZjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICAvKiBwYWRkaW5nLXRvcDogNjBweDsgKi9cclxufVxyXG4uc2lkZUluZm9iYXIgLmt0LXBvcnRsZXRfX2hlYWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5jbG9zZWJ0biB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiAjMzMzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uaW5mby1pY29uLWNpcntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICM1ODY3ZGQ7XHJcbn1cclxuXHJcbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbXtcclxuICBib3JkZXItYm90dG9tOiAwLjA3cmVtIGRhc2hlZCAjZGVkZWRlO1xyXG4gIHBhZGRpbmc6IDZweDtcclxufVxyXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW0uZGFya3tcclxuICBib3JkZXItYm90dG9tOiAwLjA3cmVtIGRhc2hlZCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcbi8qIC5rdC1pbmJveF9fZGF0ZXRpbWV7XHJcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuXHJcbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbSAua3Qtd2lkZ2V0MV9faW5mbyAua3Qtd2lkZ2V0MV9fdGl0bGV7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uc2lkZUluZm9iYXIgLnRpdGxlLXNpZGViYXJ7XHJcbiAgICB3aWR0aDogMjcwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4uY291bnQtaGVpZ2h0e1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi8qIC5jb3VudC1oZWlnaHQgLmp1c3RpZnktY29udGVudC1iZXR3ZWVue1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59ICovXHJcbi5jb3VudC1oZWlnaHQgLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIC5rdC1jaGVja2JveHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5cclxuLyogd2lkdGggKi9cclxuLmNvdW50LWhlaWdodDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbi5jb3VudC1oZWlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuLmNvdW50LWhlaWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG5cclxuLmRyb3Bkb3duIC5rdC1jaGVja2JveCA+IGlucHV0OmNoZWNrZWQgfiBzcGFue1xyXG4gIGJvcmRlci1jb2xvcjogIzU4NjdkZDtcclxufVxyXG4ua3QtY2hlY2tib3ggPiBzcGFuOmFmdGVyIHtcclxuICBib3JkZXI6IHNvbGlkICM1ODY3ZGQ7XHJcbn1cclxuXHJcbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duIHtcclxuICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XHJcbn1cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7ICovXHJcbiAgICB0b3A6IDIwcHggIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IC0yMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yaWdodDogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItbGVmdDogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTVweDtcclxuICBsZWZ0OiAzMnB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMTdweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yaWdodDogMTlweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItbGVmdDogMTlweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTdweDtcclxuICBsZWZ0OiAzMHB4O1xyXG4gIHotaW5kZXg6IDg7XHJcbn1cclxuXHJcbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnUxIC5maWx0ZXItYm94e1xyXG4gIHdpZHRoOiAzMy4zMzMzJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDEpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCgxKXtcclxuICB3aWR0aDogMyU7XHJcbn1cclxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMiksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDIpe1xyXG4gIHdpZHRoOiAzMyU7XHJcbn1cclxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMyksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDMpe1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNCksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDQpe1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNSksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDUpe1xyXG4gIHdpZHRoOiAxNSU7XHJcbn1cclxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNiksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDYpe1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNyksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDcpe1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoOCksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDgpe1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi5rdC1xdWljay1zZWFyY2ggLmt0LXF1aWNrLXNlYXJjaF9fZm9ybSAuaW5wdXQtZ3JvdXAtcHJlcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCwgLmt0LXF1aWNrLXNlYXJjaCAua3QtcXVpY2stc2VhcmNoX19mb3JtIC5pbnB1dC1ncm91cC1hcHBlbmQgLmlucHV0LWdyb3VwLXRleHR7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2U0ZTdmZjsgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmt0LXF1aWNrLXNlYXJjaCAua3QtcXVpY2stc2VhcmNoX19mb3JtIC5pbnB1dC1ncm91cHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkYmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnNob3dfZW50cmllcyBzcGFue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gXHJcbn1cclxuLnNob3dfZW50cmllcyBzZWxlY3R7XHJcbiAgLyogd2lkdGg6IDEwMHB4OyAqL1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoODgsIDEwMywgMjIxLCAwLjMpO1xyXG4gIGNvbG9yOiAjNTg2N2RkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY291bnQtYnRue1xyXG4gIC8qIGhlaWdodDogMjVweDsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkOyAqL1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYig4OCwgODgsIDg4KTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuLyogU2VhcmNoIFByb2plY3RzICovXHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX3Rvb2xiYXIgLmt0LWluYm94X19zZWFyY2ggLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xyXG4gIGhlaWdodDogNDRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNztcclxufVxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQsIC5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZC1zaG9ydHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOWZmOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDI1dnc7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkYmZmICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZCAuZm9ybS1jb250cm9sLCAuZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQtc2hvcnQgLmZvcm0tY29udHJvbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG59XHJcblxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19saXN0IC5rdC1pbmJveF9faXRlbXMgLmt0LWluYm94X19pdGVte1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZGVsZXRlLWJ0bntcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgcmlnaHQ6IDBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNztcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDYzcHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAhaW1wb3J0YW50O1xyXG59XHJcbi5kZWxldGUtYnRuIGl7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XHJcbiAgY29sb3I6ICM1ODY3ZGQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAxMHB4IDhweCAwIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi8qIC5kZWxldGUtYnRuIGl7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjc7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlICFpbXBvcnRhbnQ7XHJcbn0qL1xyXG4uYnRuLXNlY29uZGFyeS50aGVtZS1idG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYnRuLmJ0bi1sYWJlbC1wcmltYXJ5e1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XHJcbn1cclxuXHJcbi5kZWxldGUtYnRuIGk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmt0LWluYm94X19pdGVtOmhvdmVyIC5kZWxldGUtYnRue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2lkZWJhci1tb3Jle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubmctYXV0b2NvbXBsZXRlIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi8qIEJveGVzICAqL1xyXG4ubWVtb3Njb3VudCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcblxyXG59XHJcblxyXG4uYmx1ZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLnB1cnBsZSB7XHJcbiAgYmFja2dyb3VuZDogIzAwQjc0QTtcclxufVxyXG5cclxuLndpbmUge1xyXG4gIGJhY2tncm91bmQ6ICNGOTMxNTQ7XHJcbn1cclxuLyogbWVtb3NDb3VudF9Gb250c2l6ZSAqL1xyXG4uTV9mc2l6ZXtcclxuICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgcGFkZGluZzogLjM3NXJlbSAuNTYyNXJlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uYmFkZ2Utb3V0bGluZS1wcmltYXJ5IHtcclxuICBjb2xvcjogIzQwNTE4OTtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkICM0MDUxODlcclxufVxyXG5cclxuLmJhZGdlLmJhZGdlLXBpbGwge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtXHJcbn1cclxuXHJcbi5iYWRnZS1vdXRsaW5lLWluZm8ge1xyXG4gIGNvbG9yOiAjM2RhNWY0O1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgIzNkYTVmNFxyXG59XHJcblxyXG4uYmFkZ2Utb3V0bGluZS1kYW5nZXIge1xyXG4gIGNvbG9yOiAjZjE1MzZlO1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgI2YxNTM2ZVxyXG59XHJcblxyXG4uYmFkZ2Utb3V0bGluZS1zdWNjZXNzIHtcclxuICBjb2xvcjogIzAwYzY4OTtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkICMwMGM2ODlcclxufVxyXG5cclxuLmJhZGdlLW91dGxpbmUtd2FybmluZyB7XHJcbiAgY29sb3I6ICNmZGEwMDY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZkYTAwNlxyXG59XHJcblxyXG4uZG1zLWxpbmtze1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcclxufVxyXG5cclxuLmRtcy1saW5rcyBsaSBhe1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT0gTWF0IFNlbGVjdCBTdHlsZXMgPT09PT09PT09ICovXHJcblxyXG5tYXQtc2VsZWN0e1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuZGl2I21hdC1zZWxlY3QtMC1wYW5lbHtcclxuICBtaW4td2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtc2VsZWN0LXBhbmVsLXdyYXAubmctdG5zLWMyNzUtMC5uZy10cmlnZ2VyLm5nLXRyaWdnZXItdHJhbnNmb3JtUGFuZWxXcmFwLm5nLXN0YXItaW5zZXJ0ZWR7XHJcbiAgdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcclxuICBjb2xvcjogdW5zZXQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LW9wdGlvbi1wc2V1ZG8tY2hlY2tib3gubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzRjlGO1xyXG59XHJcblxyXG4ua3Qtd2lkZ2V0X19kZXRhaWxzIHtcclxuICBtaW4td2lkdGg6IDkwcHg7XHJcbn1cclxuLmt0LW1lZGlhLWdyb3VwIC5rdC1tZWRpYS5rdC1tZWRpYS0tc20gaW1nIHtcclxuICBtYXgtd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ua3QtbWVkaWEtZ3JvdXAgLmt0LW1lZGlhLmt0LW1lZGlhLS1zbSBzcGFuIHtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgYmFja2dyb3VuZDogI2RlZWNmODtcclxuICBjb2xvcjogIzI3ODZmYjtcclxufVxyXG4uYmctdG9kYXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDJiZjAgIWltcG9ydGFudDtcclxufVxyXG4udy00NSB7XHJcbiAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xyXG59XHJcbi53LTU1IHtcclxuICB3aWR0aDogNTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNwcm9qZWN0LTRfd3JhcHBlciB0YWJsZSB0Ym9keSB0ciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5odnItaXRlbSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ViZWRmMjtcclxuICBjb2xvcjogIzI3ODZmYjtcclxufVxyXG4uY2hjay1kaXZ7ICBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI3Byb2plY3QtNF93cmFwcGVyIHRhYmxlIHRib2R5IHRyOmhvdmVyIC5odnItaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4jcHJvamVjdC00X3dyYXBwZXIgdGFibGUgdGJvZHkgdHI6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XHJcbn1cclxuLmNoY2stZGl2OmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcclxufVxyXG4uY2hrLWljbiBzdmd7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGZpbGw6ICMyNzg2ZmI7XHJcbn1cclxuLmh2ci1pdGVtOjphZnRlciB7XHJcbiAgd2lkdGg6IDE0NXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiA0N3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTQ0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTAsIDI1MSwgMjUyLCAwKSAwJSwgI0ZBRkJGQyAxMDAlKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi8qICNwcm9qZWN0LTRfd3JhcHBlciB0cjpob3ZlciAuaHZyLWl0ZW06OmFmdGVyICB7XHJcbiAgb3BhY2l0eTogMTtcclxufSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5ke1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgfVxyXG59XHJcblxyXG4uc3VjLWh2ciB7XHJcbiAgY29sb3I6ICMxZGM5Yjc7XHJcbn1cclxuLnN1Yy1odnI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMxZGM5Yjc7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmRhbi1odnIge1xyXG4gIGNvbG9yOiAjZGMzNTQ1O1xyXG59XHJcbi5kYW4taHZyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5rdC13aWRnZXRfX3RpdGxle1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KXtcclxuICAua3Qtd2lkZ2V0X190aXRsZXtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICB9XHJcbiAgLnN0YXQtdGQgZGl2e1xyXG4gICAgd2lkdGg6IDEzNXB4O1xyXG4gIH1cclxuICAuc3RhdC10ZHtcclxuICAgIHdpZHRoOiAxMzVweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KXtcclxuLmt0LXdpZGdldF9fdGl0bGV7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbn1cclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app__LayoutDashboard_notification_notification_component_ts.js.map