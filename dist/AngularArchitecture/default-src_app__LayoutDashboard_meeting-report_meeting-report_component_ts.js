"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["default-src_app__LayoutDashboard_meeting-report_meeting-report_component_ts"],{

/***/ 5131:
/*!*****************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/meeting-report/meeting-report.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetingReportComponent": () => (/* binding */ MeetingReportComponent)
/* harmony export */ });
/* harmony import */ var src_app_Models_calender_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_Models/calender-dto */ 52477);
/* harmony import */ var src_app_Models_assigntask_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/assigntask-dto */ 60065);
/* harmony import */ var src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Models/completed-projects-dto */ 60808);
/* harmony import */ var src_app_Shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/components/confirm-dialog/confirm-dialog.component */ 49785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var src_app_Services_calender_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Services/calender.service */ 21041);
/* harmony import */ var src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_Services/link.service */ 33529);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ 77585);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
















const _c0 = ["myTextarea"];
function MeetingReportComponent_div_1_ng_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ng-option", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", item_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r22, "");
} }
function MeetingReportComponent_div_1_ng_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ng-option", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item1_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", item1_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item1_r24, "");
} }
function MeetingReportComponent_div_1_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 231)(1, "div", 22)(2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "path", 232)(5, "circle", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 27)(7, "div", 93)(8, "div", 28)(9, "a", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("href", item_r2.Addressurl, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r2.Location);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r2.FullAddress_loc);
} }
function MeetingReportComponent_div_1_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 235)(1, "div", 22)(2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "svg", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "path", 237)(5, "path", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 27)(7, "div", 93)(8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 235)(1, "div", 22)(2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "svg", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "path", 237)(5, "path", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 27)(7, "div", 93)(8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_63_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 217)(1, "div", 240)(2, "input", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_63_div_1_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r28.Online_methoduser($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 35)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "path", 242)(7, "path", 243)(8, "path", 244)(9, "rect", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 45)(11, "div", 93)(12, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _user_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "flexCheckChecked5_", _user_r27.stringval, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", _user_r27.stringval)("checked", _user_r27.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_user_r27.TM_DisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _user_r27.Designation_Name, "/", _user_r27.Com_Name, "");
} }
function MeetingReportComponent_div_1_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, MeetingReportComponent_div_1_div_63_div_1_Template, 16, 6, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r8.User_Scheduledjson);
} }
function MeetingReportComponent_div_1_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 247)(1, "div", 22)(2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 27)(5, "div", 93)(6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_66_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 217)(1, "div", 248)(2, "input", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_66_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r31.Online_methodproject($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 27)(4, "div")(5, "div", 28)(6, "a", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_66_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32); const _pro_r30 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r33.moreDetails(_pro_r30.stringval)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _pro_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", _pro_r30.stringval)("checked", _pro_r30.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _pro_r30.Project_Name, "");
} }
function MeetingReportComponent_div_1_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 251)(1, "div", 22)(2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 27)(5, "div", 93)(6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Portfolios");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_69_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 217)(1, "div", 248)(2, "input", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_69_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r35.Online_methodportfolio($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 27)(4, "div")(5, "div", 28)(6, "a", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_69_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const _prot_r34 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r37.OnCardClick(_prot_r34.numberval)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _prot_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", _prot_r34.numberval)("checked", _prot_r34.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _prot_r34.Portfolio_Name, "");
} }
function MeetingReportComponent_div_1_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 253)(1, "div", 22)(2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "svg", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "path", 254)(5, "path", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 27)(7, "div", 93)(8, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "DMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_71_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 217)(1, "div", 248)(2, "input", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_71_div_1_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r41.Online_methoddms($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 27)(4, "div")(5, "div", 28)(6, "a", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_71_div_1_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r42); const itemMemos_r39 = restoredCtx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r43.openUrl(itemMemos_r39.Url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const itemMemos_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", itemMemos_r39.MailId)("checked", itemMemos_r39.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", itemMemos_r39.Subject, "");
} }
function MeetingReportComponent_div_1_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, MeetingReportComponent_div_1_div_71_div_1_Template, 8, 3, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r14._MemosSubjectList);
} }
function MeetingReportComponent_div_1_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 257)(1, "div", 22)(2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "svg", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "path", 254)(5, "path", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 27)(7, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", item_r2.Description, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
} }
function MeetingReportComponent_div_1_div_73_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 27)(1, "div", 93)(2, "div", 28)(3, "a", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const trt_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("href", trt_r46.url, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](trt_r46.File_Name);
} }
function MeetingReportComponent_div_1_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 260)(1, "div", 22)(2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "svg", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "path", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, MeetingReportComponent_div_1_div_73_div_5_Template, 5, 2, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r16.Attachments_ary);
} }
function MeetingReportComponent_div_1_div_97_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "input", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "label", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 267)(5, "button", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_97_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50); const item_r47 = restoredCtx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r49.GetProjectTypeList(item_r47.Task_Name, item_r47.Assign_Id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "svg", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "path", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "button", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_97_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50); const item_r47 = restoredCtx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r51._Deletetask(item_r47.Assign_Id, item_r47.Task_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "svg", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "path", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r47.Task_Name);
} }
function MeetingReportComponent_div_1_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Not found a task");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function MeetingReportComponent_div_1_div_101_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 277)(1, "div", 278)(2, "div", 279)(3, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "div", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 282)(6, "div", 283)(7, "div")(8, "a", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "i", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "a", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "i", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 288)(14, "span", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 290)(17, "span", 291)(18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "img", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, " Assigned Task/Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "mat-icon", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "task_alt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "span", 295)(30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](31, "img", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](34, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 297)(36, "span", 298)(37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](39, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](40, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r53.Task_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 5, item_r53.Creation_Date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r53.AssignedTo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](34, 7, item_r53.Modified_DT), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r53.Status, "");
} }
function MeetingReportComponent_div_1_div_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, MeetingReportComponent_div_1_div_101_div_1_Template, 41, 9, "div", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r20.ActionedAssigned_Josn);
} }
function MeetingReportComponent_div_1_ng_option_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ng-option", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", item_r54.Emp_No);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r54.DisplayName, " ");
} }
function MeetingReportComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 157)(1, "div", 158)(2, "div", 159)(3, "div", 93)(4, "h5", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Meeting Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 161)(7, "div", 10)(8, "div", 13)(9, "div", 14)(10, "div", 15)(11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 17)(14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "span", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "i", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 165)(26, "div", 166)(27, "label", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Start Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "ng-select", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_Template_ng_select_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r55.PropStart = $event); })("change", function MeetingReportComponent_div_1_Template_ng_select_change_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r57.purposeaddtime()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, MeetingReportComponent_div_1_ng_option_30_Template, 2, 2, "ng-option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 169)(32, "label", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "End Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "ng-select", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_Template_ng_select_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r58.PurposeEnd = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, MeetingReportComponent_div_1_ng_option_35_Template, 2, 2, "ng-option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 171)(37, "button", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "button", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 174)(43, "div", 175)(44, "div", 176)(45, "div", 177)(46, "div", 159)(47, "h5", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, " Meeting Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 179)(50, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, MeetingReportComponent_div_1_div_51_Template, 13, 3, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](52, MeetingReportComponent_div_1_div_52_Template, 10, 0, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](53, MeetingReportComponent_div_1_div_53_Template, 10, 0, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 183)(55, "div", 22)(56, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "svg", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](58, "path", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "div", 27)(60, "div", 93)(61, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](63, MeetingReportComponent_div_1_div_63_Template, 2, 1, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](64, MeetingReportComponent_div_1_div_64_Template, 8, 0, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](66, MeetingReportComponent_div_1_div_66_Template, 8, 3, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](67, MeetingReportComponent_div_1_div_67_Template, 8, 0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](69, MeetingReportComponent_div_1_div_69_Template, 8, 3, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](70, MeetingReportComponent_div_1_div_70_Template, 10, 0, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](71, MeetingReportComponent_div_1_div_71_Template, 2, 1, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](72, MeetingReportComponent_div_1_div_72_Template, 9, 1, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](73, MeetingReportComponent_div_1_div_73_Template, 6, 1, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "div", 195)(75, "div", 177)(76, "div", 196)(77, "h5", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](78, " Meeting Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "div", 198)(80, "div", 199)(81, "label", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, "Meeting notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "textarea", 200, 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_Template_textarea_ngModelChange_83_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r59.Notes_Type = $event); })("focus", function MeetingReportComponent_div_1_Template_textarea_focus_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r60.addBulletPointsOnFocus()); })("keyup", function MeetingReportComponent_div_1_Template_textarea_keyup_83_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r61.addBulletPointsOnEnter($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "div", 202)(86, "div", 203)(87, "div", 204)(88, "h1", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](89, "Assign Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](91, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "form", 208)(93, "input", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_Template_input_ngModelChange_93_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r62._Demotext = $event); })("keyup.enter", function MeetingReportComponent_div_1_Template_input_keyup_enter_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r63.EnterSubmit(ctx_r63._Demotext)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "button", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_Template_button_click_94_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r64.EnterSubmit(ctx_r64._Demotext)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](95, "Add Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](96, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](97, MeetingReportComponent_div_1_div_97_Template, 11, 1, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](99, MeetingReportComponent_div_1_div_99_Template, 2, 0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](100, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](101, MeetingReportComponent_div_1_div_101_Template, 2, 1, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "div", 216)(103, "div", 217)(104, "div", 218)(105, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](106, "svg", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](107, "path", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "div", 220)(109, "ng-select", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_Template_ng_select_ngModelChange_109_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r65.ngEmployeeDropdown = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](110, MeetingReportComponent_div_1_ng_option_110_Template, 2, 2, "ng-option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](111, "div", 222)(112, "div", 218)(113, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](114, "svg", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](115, "path", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](116, "div", 220)(117, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](118, "input", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](119, "div", 226)(120, "button", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](121, "Assign Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](122, "div", 228)(123, "button", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_Template_button_click_123_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r66.Insert_meetingreport()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](124, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](125, "button", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](126, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r2.Task_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](16, 28, item_r2.Schedule_date, "d EEE, MMMM YYYY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", item_r2.NewSt_Time, " \u2013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r2.NewEd_Time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.PropStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.StartTimearr);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.PurposeEnd);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.EndTimearr);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r2.Location);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r2.Onlinelink.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r2.Onlinelink == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r0.User_Scheduledjson.length, " guests");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.User_Scheduledjson.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.Project_NameScheduledjson.length > 0 || ctx_r0.Project_NameScheduledjson != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.Project_NameScheduledjson);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.portfolio_Scheduledjson.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.portfolio_Scheduledjson);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r2.DMS_Name != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r2.DMS_Name != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r2.Description != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.Attachments_ary.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.Notes_Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0._Demotext);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0._TodoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.ActionedAssigned_Josn.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.ngEmployeeDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0._EmployeeListForDropdown);
} }
function MeetingReportComponent_option_491_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", item_r67.Exec_BlockNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r67.Exec_BlockName, "");
} }
class MeetingReportComponent {
    constructor(route, notifyService, CalenderService, _LinkService, ProjectTypeService, router, BsService, dialog) {
        this.route = route;
        this.notifyService = notifyService;
        this.CalenderService = CalenderService;
        this._LinkService = _LinkService;
        this.ProjectTypeService = ProjectTypeService;
        this.router = router;
        this.BsService = BsService;
        this.dialog = dialog;
        this.EventScheduledjson = [];
        this.User_Scheduledjson = [];
        this.portfolio_Scheduledjson = [];
        this.DMS_Scheduledjson = [];
        this.dmsIdjson = [];
        this._onlinelink = true;
        this.userchecked = true;
        this.projectchecked = true;
        this.dmschecked = true;
        this.portfolioschecked = true;
        this.userchecked1 = true;
        // projectchecked1:boolean=true;
        this.dmschecked1 = true;
        this.portfoliochecked1 = true;
        this.Action_item = [];
        this.checkedusers = [];
        this.checkedproject = [];
        this.checkeddms = [];
        this.checkedportfolio = [];
        this.Meeting_Detailsdata = [];
        this._TodoList = [];
        this.text = [];
        this.config = {
            editable: true,
            spellcheck: true,
            height: 'auto',
            minHeight: '5rem',
            maxHeight: 'auto',
            width: 'auto',
            minWidth: '0',
            placeholder: 'Enter text here...',
            translate: 'no',
            defaultParagraphSeparator: 'p',
            defaultFontName: 'Arial',
            toolbarHiddenButtons: [
                [
                    // 'bold',
                    // 'italic',
                    // 'underline',
                    'strikeThrough',
                    'subscript',
                    'superscript',
                    'indent',
                    'outdent',
                    // 'insertUnorderedList',
                    // 'insertOrderedList',
                    'heading'
                    // 'fontName'
                ],
                [
                    // 'fontSize',
                    // 'textColor',
                    // 'backgroundColor',
                    'customClasses',
                    'unlink',
                    'insertImage',
                    'insertVideo',
                    'insertHorizontalRule',
                    'removeFormat',
                    'toggleEditorMode',
                    'fontSelector',
                    'justifyLeft',
                    'justifyCenter',
                    'justifyRight',
                    'justifyFull',
                    'bold',
                    'italic',
                    'underline',
                    'heading',
                ]
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText',
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
        };
        this.todo = [];
        this._EmployeeListForDropdown = [];
        this.ActionedAssigned_Josn = [];
        this._calenderDto = new src_app_Models_calender_dto__WEBPACK_IMPORTED_MODULE_0__.CalenderDTO;
        this._ObjAssigntaskDTO = new src_app_Models_assigntask_dto__WEBPACK_IMPORTED_MODULE_1__.AssigntaskDTO();
        this._ObjCompletedProj = new src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_2__.CompletedProjectsDTO();
    }
    ngOnInit() {
        this.CurrentUser_ID = localStorage.getItem('EmpNo');
        this.route.paramMap.subscribe(params => {
            var scode = params.get('scheduleid');
            this.Scheduleid = scode;
        });
        this.GetAssigned_SubtaskProjects();
        this.getProjectTypeList();
        this.GetProjectAndsubtashDrpforCalender();
        this.meeting_details();
        this.getScheduleId();
        // modal caledar start
        var dragging = false;
        var days = document.querySelectorAll('.day');
        var offset = 0;
        function activateDay() {
            var activeElement = document.activeElement;
            var activeAItem = document.querySelector('.active-a');
            var activeBItem = document.querySelector('.active-b');
            if (activeAItem && activeBItem) {
                clearActiveDays();
                clearRange();
                activeElement.classList.add('active-a');
                return;
            }
            if (activeAItem)
                activeElement.classList.add('active-b');
            else
                activeElement.classList.add('active-a');
        }
        function clearActiveDays() {
            var activeAItem = document.querySelector('.active-a');
            var activeBItem = document.querySelector('.active-b');
            if (activeAItem)
                activeAItem.classList.remove('active-a');
            if (activeBItem)
                activeBItem.classList.remove('active-b');
        }
        function clearRange() {
            days.forEach(item => {
                item.classList.remove('range');
            });
        }
        function calculateRange() {
            var activeAIndex, activeBIndex;
            days.forEach((item, index) => {
                if (item.classList.contains('active-a'))
                    activeAIndex = index;
                if (item.classList.contains('active-b'))
                    activeBIndex = index;
            });
            if (activeAIndex < activeBIndex) {
                for (var i = activeAIndex; i <= activeBIndex; i++) {
                    days[i].classList.add('range');
                }
            }
            if (activeAIndex > activeBIndex) {
                for (var i = activeAIndex; i >= activeBIndex; i--) {
                    days[i].classList.add('range');
                }
            }
        }
        function startMove(item) {
            dragging = true;
            var activeAItem = document.querySelector('.active-a');
            var activeBItem = document.querySelector('.active-b');
            if (!activeBItem && activeAItem) {
                item.classList.add('active-b');
                calculateRange();
            }
            else {
                clearActiveDays();
                clearRange();
                item.classList.add('active-a');
            }
        }
        function move(item) {
            if (dragging) {
                var activeA = document.querySelector('.active-a');
                var prevActiveB = document.querySelector('.active-b');
                clearRange();
                if (prevActiveB)
                    prevActiveB.classList.remove('active-b');
                if (!item.classList.contains('active-a'))
                    item.classList.add('active-b');
                var activeB = document.querySelector('.active-b');
                calculateRange();
            }
        }
        function endMove(item) {
            dragging = false;
        }
        window.addEventListener('mouseup', e => {
            dragging = false;
        });
        days.forEach((item, index) => {
            var dayNumber = item.querySelector('.day-number').innerHTML;
            if (dayNumber === '1' && !item.classList.contains('next-mon')) {
                offset = index;
            }
            item.addEventListener('mousedown', e => {
                startMove(item);
            });
            item.addEventListener('mousemove', e => {
                move(item);
            });
            item.addEventListener('mouseup', e => {
                endMove(item);
            });
        });
        window.addEventListener('keyup', e => {
            var key = e.keyCode;
            switch (key) {
                case 13:
                    activateDay();
                    calculateRange();
                    break;
            }
        });
        document.querySelector('.reset').addEventListener('click', e => {
            clearActiveDays();
            clearRange();
        });
        // modal caledar end
    }
    addBulletPointsOnFocus() {
        const textarea = this.myTextarea.nativeElement;
        if (textarea.value === '') {
            textarea.value = '• ';
        }
    }
    addBulletPointsOnEnter(event) {
        if (event.key === 'Enter') {
            const textarea = this.myTextarea.nativeElement;
            const textareaValue = textarea.value;
            textarea.value = textareaValue + '\n• ';
            event.preventDefault();
        }
    }
    getScheduleId() {
        this.router.navigate(["Meeting-Report/" + this.Schedule_ID]);
    }
    meeting_details() {
        this.Schedule_ID = this.Scheduleid;
        this._calenderDto.Schedule_ID = this.Schedule_ID;
        this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe((data) => {
            this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
            console.log(this.EventScheduledjson, "111111");
            this.User_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Add_guests);
            this.User_Scheduledjson.forEach(element => {
                this.checkedusers.push(element.stringval);
                element.isChecked = true;
            });
            console.log(this.checkedusers, "chec");
            this.Project_NameScheduledjson = JSON.parse(this.EventScheduledjson[0].Project_code);
            this.Project_NameScheduledjson.forEach(element => {
                element.isChecked = true;
                this.checkedproject.push(element.stringval);
            });
            console.log(this.checkedproject, "chec1");
            this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson;
            this.portfolio_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Portfolio_Name);
            this.portfolio_Scheduledjson.forEach(element => {
                this.checkedportfolio.push(element.numberval);
                element.isChecked = true;
            });
            this.checkedportfolio = this.checkedportfolio.map((num) => num.toString());
            console.log(this.checkedportfolio, "chec2");
            this.DMS_Scheduledjson = this.EventScheduledjson[0].DMS_Name;
            this.DMS_Scheduledjson = this.DMS_Scheduledjson.split(',');
            this.dmsIdjson = [];
            if (this.DMS_Scheduledjson.length > 0) {
                this.DMS_Scheduledjson.forEach(element => {
                    var jsonData = {};
                    var columnName = "MailId";
                    jsonData[columnName] = element;
                    this.dmsIdjson.push(jsonData);
                });
                this.dmsIdjson = JSON.stringify(this.dmsIdjson);
                console.log(this.dmsIdjson, "chec41");
                this._LinkService._GetMemosSubject(this.dmsIdjson).
                    subscribe((data) => {
                    this._MemosSubjectList = JSON.parse(data['JsonData']);
                    this._MemosSubjectList.forEach(element => {
                        this.checkeddms.push(element.MailId);
                        element.isChecked = true;
                    });
                    this.checkeddms = this.checkeddms.map((num) => num.toString());
                });
            }
        });
    }
    EnterSubmit(_Demotext) {
        if (_Demotext != "" && _Demotext != undefined && _Demotext != null) {
            this._ObjAssigntaskDTO.CategoryId = 2411;
            this._ObjAssigntaskDTO.TypeOfTask = "ToDo";
            this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
            this._ObjAssigntaskDTO.TaskName = this._Demotext;
            this._ObjAssigntaskDTO.Schedule_ID = this.Schedule_ID;
            this.text.push(this._Demotext);
            this._Demotext = "";
            this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe((data) => {
                //console.log("Data---->", data);
                this._TodoList = JSON.parse(data['Todomeeting']);
                let message = data['Message'];
                console.log("Data---->", this._TodoList);
                this._Demotext = "";
                //this.GetAssignTask();
                this.notifyService.showSuccess("Successfully", "Added");
                // this.closeInfo();
            });
        }
        // else {
        //   this.notifyService.showInfo("Failed to add task!!", "Please Enter Task Name");
        // }
    }
    Online_methodproject(event) {
        if (event.target.checked == true) {
            this.checkedproject.push(event.target.value);
        }
        else if (event.target.checked == false) {
            let index = this.checkedproject.indexOf(event.target.value);
            if (index > -1) {
                this.checkedproject.splice(index, 1);
            }
            this.Meeting_Detailsdata.push(this.checkedproject);
            console.log(this.Meeting_Detailsdata, "kkk");
        }
    }
    Online_methodportfolio(event) {
        if (event.target.checked == true) {
            this.checkedportfolio.push(event.target.value);
        }
        else if (event.target.checked == false) {
            let index = this.checkedportfolio.indexOf(event.target.value);
            if (index > -1) {
                this.checkedportfolio.splice(index, 1);
            }
        }
        console.log(this.checkedportfolio);
    }
    Online_methoddms(event) {
        if (event.target.checked == true) {
            this.checkeddms.push(event.target.value);
        }
        else if (event.target.checked == false) {
            let index = this.checkeddms.indexOf(event.target.value);
            if (index > -1) {
                this.checkeddms.splice(index, 1);
            }
        }
        console.log(this.checkeddms);
    }
    Online_methoduser(event) {
        if (event.target.checked == true) {
            this.checkedusers.push(event.target.value);
        }
        else if (event.target.checked == false) {
            let index = this.checkedusers.indexOf(event.target.value);
            if (index > -1) {
                this.checkedusers.splice(index, 1);
            }
        }
    }
    OnCardClick(P_id) {
        sessionStorage.setItem('portfolioId', P_id);
        let name = 'portfolioprojects';
        var url = document.baseURI + name;
        var myurl = `${url}/${P_id}`;
        var myWindow = window.open(myurl, P_id);
        myWindow.focus();
    }
    moreDetails(ProjectCode) {
        let name = 'MoreDetails';
        var url = document.baseURI + name;
        var myurl = `${url}/${ProjectCode}`;
        var myWindow = window.open(myurl, ProjectCode);
        myWindow.focus();
    }
    openUrl(memo_Url) {
        const Url = memo_Url;
        window.open(Url);
    }
    GetProjectAndsubtashDrpforCalender() {
        this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe((data) => {
            this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);
            // this.Portfoliolist_1 = JSON.parse(data['Portfolio_drp']);
            // this.ProjectListArray = JSON.parse(data['Projectlist']);
            // console.log(this._EmployeeListForDropdown, "Project List Array");
        });
    }
    Insert_meetingreport() {
        debugger;
        this.Action_item = [];
        this._TodoList.forEach(element => {
            this.Action_item.push(element.Assign_Id);
        });
        debugger;
        this.Schedule_ID = this.Scheduleid;
        this._calenderDto.Schedule_ID = this.Schedule_ID;
        this._calenderDto.Note = this.Notes_Type;
        this._calenderDto.Action_item = this.Action_item.join(',');
        this._calenderDto.User_list = this.checkedusers.join(',');
        this._calenderDto.Dms = this.checkeddms.join(',');
        this._calenderDto.Portfolio = this.checkedportfolio.join(',');
        this._calenderDto.Project = this.checkedproject.join(',');
        // console.log(this._calenderDto,"dto")
        this.CalenderService.NewGetMeeting_report(this._calenderDto).subscribe(data => {
            this.notifyService.showSuccess("Successfully", "Completed");
            // window.close();
        });
    }
    open_side() {
        document.getElementById("cardmain").classList.add("cards-main");
    }
    dropsw() {
        var offbtn = $("#dropusers").offset();
        var offnewtop = offbtn.top + 20;
        var offnewleft = offbtn.left - 340;
        $(".drope").offset({ top: offnewtop, left: offnewleft });
        $(".drope").addClass('show');
    }
    getProjectTypeList() {
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.Mode = 'AssignedTask';
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
        });
        // console.log(this.ProjectTypelist,"121")
    }
    close_side() {
        document.getElementById("cardmain").classList.remove("cards-main");
    }
    GetAssigned_SubtaskProjects() {
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.CategoryId = 2411;
        this._ObjCompletedProj.Mode = 'Todo';
        this._ObjCompletedProj.Schedule_ID = this.Scheduleid;
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            // console.log("Data---->", data);
            // this.CategoryList = JSON.parse(data[0]['CategoryList']);
            this._TodoList = JSON.parse(data[0]['Jsonmeeting_Json']);
            // this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
            // this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
            this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
            console.log("the sss", this._TodoList);
        });
    }
    GetProjectTypeList(taskName, id) {
        // debugger
        this._taskName = taskName;
        this.task_id = id;
        this.router.navigate(["Meeting-Report/" + this.Schedule_ID + "/ActionToAssign/2"]);
        this.BsService.SetNewAssignId(this.task_id);
        this.BsService.SetNewAssignedName(this._taskName);
        let typeoftask = "IFRT";
        this.BsService.setNewTypeofTask(typeoftask);
        // this._ObjCompletedProj.PageNumber = 1;
        // this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        // this._ObjCompletedProj.Mode = 'AssignedTask';
        // this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
        //   (data) => {
        //     this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
        //   });
        //document.getElementById("mysideInfobar_AssignTask").classList.add("kt-quick-panel--on");
        document.getElementById("mysideInfobar").classList.add("kt-action-panel--on");
        document.getElementById("rightbar-overlay").style.display = "block";
        document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
        $("#mysideInfobar").scrollTop(0);
    }
    _Deletetask(id, name) {
        const confirmDialog = this.dialog.open(src_app_Shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogComponent, {
            data: {
                mode: 'Todo_Delete',
                title1: 'Confirmation ',
                taskName: name
                //message1: "proj_Name"
            }
        });
        confirmDialog.afterClosed().subscribe(result => {
            if (result === true) {
                this._ObjAssigntaskDTO.TypeOfTask = "Delete";
                this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
                this._ObjAssigntaskDTO.AssignId = id;
                this._ObjAssigntaskDTO.CategoryId = 2411;
                this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe((data) => {
                    this._TodoList = JSON.parse(data['Jsonmeeting_Json']);
                    // this._CompletedList = JSON.parse(data['CompletedList']);
                    let message = data['Message'];
                    this._Demotext = "";
                    this.notifyService.showInfo("Successfully", message);
                });
            }
            else {
                //this.notifyService.showInfo("Cancelled", "Delete");
            }
            this.GetAssigned_SubtaskProjects();
        });
    }
    closeInfo() {
        document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    }
}
MeetingReportComponent.ɵfac = function MeetingReportComponent_Factory(t) { return new (t || MeetingReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_Services_calender_service__WEBPACK_IMPORTED_MODULE_5__.CalenderService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_6__.LinkService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_7__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_8__.BsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog)); };
MeetingReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: MeetingReportComponent, selectors: [["app-meeting-report"]], viewQuery: function MeetingReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.myTextarea = _t.first);
    } }, decls: 593, vars: 9, consts: [[1, "grey-bg", "side_view"], ["class", "col-md-12 p-3", 4, "ngFor", "ngForOf"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "fs-5"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true", 1, "ki", "ki-close"], [1, "modal-body"], ["id", "NameDate", 1, "main-title"], [1, "boxcl-div"], [1, "box-cl", "ng-star-inserted", 2, "background-color", "#3788d8"], ["id", "", 1, "title-right"], [1, "title-area"], [1, "title-main"], ["id", "title1"], [1, "d-flex"], [1, "title-day"], ["_ngcontent-gnj-c394", ""], ["_ngcontent-gnj-c394", "", 1, "title-day"], ["id", "location", 1, "eve-area", "ng-star-inserted"], [1, "left-icon"], ["aria-hidden", "true", 1, "side-icns"], ["focusable", "false", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "svg-icn"], ["_ngcontent-tgi-c394", "", "d", "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"], ["_ngcontent-tgi-c394", "", "cx", "12", "cy", "9", "r", "2.5"], [1, "rgt-des"], [1, "main-s"], ["target", "\u201D_blank\u201D", "href", ""], [1, "eve-area", "ng-star-inserted"], ["_ngcontent-gpx-c394", "", "focusable", "false", "width", "20", "height", "20", "viewBox", "0 0 24 24", 1, "svg-icn"], ["_ngcontent-gpx-c394", "", "d", "M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z"], [1, "avar-div"], [1, "d-flex", "align-items-center", "ng-star-inserted"], [1, "px-2", "position-relative"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 192 192", "enable-background", "new 0 0 192 192", "width", "24px", "height", "24px", 2, "width", "20px"], ["_ngcontent-nyr-c394", "", "fill", "#E0E0E0", "d", "M96,0C43.01,0,0,43.01,0,96s43.01,96,96,96s96-43.01,96-96S148.99,0,96,0z"], ["_ngcontent-nyr-c394", "", "fill", "#BDBDBD", "d", "M96,85.09c13.28,0,24-10.72,24-24c0-13.28-10.72-24-24-24s-24,10.72-24,24C72,74.37,82.72,85.09,96,85.09z"], ["_ngcontent-nyr-c394", "", "fill", "#BDBDBD", "d", "M96,99.27c-29.33,0-52.36,14.18-52.36,27.27c11.09,17.06,30.51,28.36,52.36,28.36s41.27-11.3,52.36-28.36C148.36,113.45,125.33,99.27,96,99.27z"], ["_ngcontent-nyr-c394", "", "fill", "none", "width", "192", "height", "192"], ["aria-hidden", "true", 1, "statusicn"], ["xmlns", "https://www.w3.org/2000/svg", "width", "14", "height", "14", 1, "ng-star-inserted"], ["_ngcontent-nyr-c394", "", "fill", "#CEEAD6", "d", "M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7z"], ["_ngcontent-nyr-c394", "", "fill", "none", "stroke", "#137333", "stroke-width", "1.5", "d", "M3.5 6.5L6 9l5-5"], [1, "rgt-des", "ml-2"], [1, "sub-s", "text-ellp"], ["id", "project", 1, "eve-area", "ng-star-inserted"], [1, "fab-icn", "fab", "fa-wpforms"], [1, "main-s", "pro-nm"], [1, "side-div", "ng-star-inserted"], [1, "px-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24", 1, "svg-icn"], ["_ngcontent-mja-c394", "", "fill", "none", "d", "M0 0h24v24H0z"], ["_ngcontent-mja-c394", "", "d", "M16 12l-6 6V6z"], ["href", "javascript:void(0)"], [1, "fas-icn", "fas", "fa-list"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "20", "height", "20", 1, "svg-icn"], ["_ngcontent-owa-c389", "", "fill", "none", "d", "M0 0h24v24H0z"], ["_ngcontent-owa-c389", "", "d", "M5.455 15L1 18.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455zm-.692-2H16V4H3v10.385L4.763 13zM8 17h10.237L20 18.385V8h1a1 1 0 0 1 1 1v13.5L17.545 19H9a1 1 0 0 1-1-1v-1z"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 34 34", "width", "24", "height", "24", 1, "svg-icn"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["height", "1", "transform", "translate(32 5) rotate(-180)", "width", "12", "x", "10", "y", "2"], ["height", "1", "transform", "translate(32 9) rotate(-180)", "width", "12", "x", "10", "y", "4"], ["d", "M9,3V4H8A1,1,0,0,0,7,5V7H6V5A2,2,0,0,1,8,3Z"], ["d", "M23,3V4h1a1,1,0,0,1,1,1V7h1V5a2,2,0,0,0-2-2Z"], ["height", "1", "transform", "translate(-10 23) rotate(-90)", "width", "19", "x", "-3", "y", "16"], ["height", "1", "transform", "translate(11 40) rotate(-90)", "width", "15", "x", "18", "y", "14"], ["d", "M8,30V29H8a1,1,0,0,1-1-1V26H6v2a2,2,0,0,0,2,2Z"], ["d", "M21.91,21.15c-.57-.32-.91-.72-.91-1.15a6.09,6.09,0,0,1-.21,1.59c-1,4.07-6,7.18-12.12,7.4H8v1h.72c8.86-.15,16.07-3.15,17.14-7A3.77,3.77,0,0,0,26,22,8.72,8.72,0,0,1,21.91,21.15Zm-5.78,7a10.5,10.5,0,0,0,5.54-6,8.94,8.94,0,0,0,3.15.79C24.07,25,20.91,27,16.13,28.13Z"], ["d", "M11,4V5H10A1,1,0,0,1,9,4V3h1V4Z"], ["d", "M11,3V2H10A1,1,0,0,0,9,3V4h1V3Z"], ["d", "M21,4V5h1a1,1,0,0,0,1-1V3H22V4Z"], ["d", "M21,3V2h1a1,1,0,0,1,1,1V4H22V3Z"], ["cx", "12.5", "cy", "12.5", "r", "1.5", "fill", "#121923", "stroke", "#121923", "stroke-width", "1.2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 34 24", "width", "27", "height", "27", 1, "svg-icn"], ["d", "M19.9994 19.2611H10.9294C10.4794 19.2611 10.1094 18.8911 10.1094 18.4411C10.1094 17.9911 10.4794 17.6211 10.9294 17.6211H19.9994C20.4494 17.6211 20.8194 17.9911 20.8194 18.4411C20.8194 18.9011 20.4494 19.2611 19.9994 19.2611Z", "fill", "#292D32"], ["d", "M19.9994 12.9681H10.9294C10.4794 12.9681 10.1094 12.5981 10.1094 12.1481C10.1094 11.6981 10.4794 11.3281 10.9294 11.3281H19.9994C20.4494 11.3281 20.8194 11.6981 20.8194 12.1481C20.8194 12.5981 20.4494 12.9681 19.9994 12.9681Z", "fill", "#292D32"], ["d", "M19.9994 6.67125H10.9294C10.4794 6.67125 10.1094 6.30125 10.1094 5.85125C10.1094 5.40125 10.4794 5.03125 10.9294 5.03125H19.9994C20.4494 5.03125 20.8194 5.40125 20.8194 5.85125C20.8194 6.30125 20.4494 6.67125 19.9994 6.67125Z", "fill", "#292D32"], ["d", "M4.90969 8.03187C4.68969 8.03187 4.47969 7.94187 4.32969 7.79187L3.41969 6.88188C3.09969 6.56188 3.09969 6.04187 3.41969 5.72187C3.73969 5.40187 4.25969 5.40187 4.57969 5.72187L4.90969 6.05188L7.04969 3.91187C7.36969 3.59188 7.88969 3.59188 8.20969 3.91187C8.52969 4.23188 8.52969 4.75188 8.20969 5.07188L5.48969 7.79187C5.32969 7.94187 5.12969 8.03187 4.90969 8.03187Z", "fill", "#292D32"], ["d", "M4.90969 14.3287C4.69969 14.3287 4.48969 14.2487 4.32969 14.0887L3.41969 13.1788C3.09969 12.8588 3.09969 12.3388 3.41969 12.0188C3.73969 11.6988 4.25969 11.6988 4.57969 12.0188L4.90969 12.3488L7.04969 10.2087C7.36969 9.88875 7.88969 9.88875 8.20969 10.2087C8.52969 10.5288 8.52969 11.0487 8.20969 11.3687L5.48969 14.0887C5.32969 14.2487 5.11969 14.3287 4.90969 14.3287Z", "fill", "#292D32"], ["d", "M4.90969 20.3288C4.69969 20.3288 4.48969 20.2488 4.32969 20.0888L3.41969 19.1788C3.09969 18.8588 3.09969 18.3388 3.41969 18.0188C3.73969 17.6988 4.25969 17.6988 4.57969 18.0188L4.90969 18.3488L7.04969 16.2087C7.36969 15.8888 7.88969 15.8888 8.20969 16.2087C8.52969 16.5288 8.52969 17.0488 8.20969 17.3688L5.48969 20.0888C5.32969 20.2488 5.11969 20.3288 4.90969 20.3288Z", "fill", "#292D32"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "13", "height", "13", 1, "svg-icn"], ["d", "M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z", "fill", "#000000"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "btn-sm", "mr-2"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "mr-2"], ["id", "recurcal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "recurcalTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg", "w-max", "w-min"], ["id", "exampleModalLongTitle", 1, "modal-title"], ["aria-hidden", "true"], [1, ""], [1, "d-flex-cen", "gap-3"], [1, "rec-btns", "gap-3"], [1, "btn", "btn-sm", "btn-white", "btn-min"], [1, "mt-3", "pl-2"], [1, "dropdown", "show"], ["href", "#", "role", "button", "id", "repeatdrop", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "text-info", "dropdown-toggle"], [1, "fas", "fa-redo"], ["aria-labelledby", "repeatdrop", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "cal"], [1, "calendar-wrap"], [1, "month-year"], [1, "calendar"], ["scope", "col", 1, "day-title"], [1, "week"], ["tabindex", "0", 1, "day", "prev-mon"], [1, "day-number"], ["tabindex", "0", 1, "day"], ["tabindex", "0", 1, "day", "today"], ["tabindex", "0", 1, "day", "next-mon"], [1, "button", "reset"], [1, "mt-3", "text-right"], [1, "text-info"], [1, "far", "fa-clock"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "btn-sm"], ["type", "button", 1, "btn", "btn-info", "btn-sm"], ["id", "custmodal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "custom-modal", "aria-hidden", "true", 1, "modal", "fade"], [1, "input-group", "flex-column", "dropdown", "mr-2", "mt-3", "gap-1"], [1, "d-flex-cen", "gap-1", "form-group"], [1, "left-lbls"], [1, "mr-1", "mb-0"], [1, "w-min-150"], ["name", "Select Type", "placeholder", "Do not repeat", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "arrws", "mb-2"], [1, "fas", "fa-chevron-up"], [1, "arw-spn", "mb-1"], [1, "arrws", "mt-2"], [1, "fas", "fa-chevron-down"], [1, "ml-2"], [1, "repeat-day"], ["type", "checkbox", "name", "DaysChk", "id", "Sun", "value", "Sun", 1, "rep-chk"], ["type", "checkbox", "name", "DaysChk", "id", "Mon", "value", "Mon", 1, "rep-chk"], ["type", "checkbox", "name", "DaysChk", "id", "Tue", "value", "Tue", 1, "rep-chk"], ["type", "checkbox", "name", "DaysChk", "id", "Wed", "value", "Wed", 1, "rep-chk"], ["type", "checkbox", "name", "DaysChk", "id", "Thu", "value", "Thu", 1, "rep-chk"], ["type", "checkbox", "name", "DaysChk", "id", "Fri", "value", "Fri", 1, "rep-chk"], ["type", "checkbox", "name", "DaysChk", "id", "Sat", "value", "Sat", 1, "rep-chk"], ["type", "date", "placeholder", "Select EndDate", 1, "form-control"], [1, "text-info", "d-flex-cen"], [1, "far", "fa-clock", "text-info", "mr-2"], [1, "d-flex", "gap-1", "form-group"], [1, "form-check", "ml-1"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios1", "value", "option1", "checked", "", 1, "form-check-input"], ["for", "exampleRadios1", 1, "form-check-label"], [1, "mt-3", "d-flex-cen"], [1, "form-check", "ml-1", "mr-3"], ["type", "radio", "name", "", "id", "", "value", "", "checked", "", 1, "form-check-input"], ["for", "", 1, "form-check-label"], [1, "flex-1", "d-flex-between", "m-0"], ["id", "rightbar-overlay", 3, "click"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], [1, "col-md-12", "p-3"], [1, "card", "meet-card"], [1, "card-header"], [1, "mb-0", "card-title"], [1, "header2", "pt-3"], [1, "title-day", "ropdown"], ["type", "button", "id", "-icn", "aria-haspopup", "true", "aria-expanded", "false", "type", "button", "id", "DW_time_pick", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "text-info", "dropdown-toggle"], ["data-toggle", "tooltip", "title", "edit time ", 1, "fas", "fa-edit", "ml-1", "mb-1", "curser-pointer"], ["aria-labelledby", "DW_time_pick", 1, "dropdown-menu", "p-3", "cstm-swd"], [1, "form-group", "flex-1", "mb-2"], [1, "cus-lbl"], ["placeholder", "Start Time", 1, "kt-input", "form-control", 3, "ngModel", "ngModelChange", "change"], [1, "form-group", "flex-1", "mb-1"], ["placeholder", "End Time", 1, "kt-input", "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "mb-0", "ng-star-inserted", "text-right", "mt-3"], ["_ngcontent-gec-c394", "", "type", "cancel", 1, "btn", "btn-secondary", "btn-sm"], ["type", "submit", 1, "btn", "btn-info", "btn-sm"], [1, "card-body", "scrolly", "card-body2"], [1, "px-3", "row", "mx-0", "mb-3"], [1, "col-md-12", "col-lg-5"], [1, "card", "card-mid", "flex-1", "h-100"], ["clas", "card-title"], [1, "card-body", "px-0", "pt-0"], [1, "meetdt"], ["id", "location", "class", "eve-area", 4, "ngIf"], ["id", "", "class", "eve-area", 4, "ngIf"], ["id", "userlength", 1, "eve-area"], ["focusable", "false", "width", "20", "height", "20", "viewBox", "0 0 24 24", 1, "svg-icn"], ["d", "M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z"], ["id", "userlist", "class", "avar-div", 4, "ngIf"], ["id", "project", "class", "eve-area", 4, "ngIf"], [1, "side-div"], ["class", "d-flex align-items-center", 4, "ngFor", "ngForOf"], ["id", "portfolio", "class", "eve-area", 4, "ngIf"], ["id", "dms", "class", "eve-area py-2", 4, "ngIf"], ["class", "side-div", 4, "ngIf"], ["id", "desc", "class", "eve-area py-2", 4, "ngIf"], ["id", "", "class", "eve-area py-2", 4, "ngIf"], ["id", "cardmain", 1, "col-md-12", "col-lg-7", "mt-3", "mt-lg-0"], [1, "card-header", "d-flex-cen", "justify-content-between"], ["clas", "card-title", "data-toggle", "collapse", "href", ".meetdt", "role", "button", "aria-expanded", "false", "aria-controls", "meetdt"], [1, "card-body"], [1, "notes-section"], ["placeholder", "Add events", 1, "custom-textarea", "form-control", "mb-2", 3, "ngModel", "ngModelChange", "focus", "keyup"], ["myTextarea", ""], [1, "action-section"], [1, "todo-main"], [1, "task-header"], [1, "task-header-title"], [1, "task-tools"], [1, "task-count"], [1, "task-form"], ["id", "todo-input", "name", "text", "placeholder", "Add a new task...", "autofocus", "true", 1, "task-input", 3, "ngModel", "ngModelChange", "keyup.enter"], ["id", "btn1", 1, "task-button", 3, "click"], [1, "todo-list"], ["class", "task-item", 4, "ngFor", "ngForOf"], [1, "task-list"], ["class", "task-empty", 4, "ngIf"], ["class", " mt-3", 4, "ngIf"], ["aria-labelledby", "dropusers", 1, "drops", "drope", "py-3"], [1, "d-flex", "align-items-center"], [1, "col-md-2", "text-center"], ["focusable", "false", "width", "22", "height", "22", "viewBox", "0 0 24 24", 1, "svg-icn"], [1, "col-md-10", "pr-3"], ["name", "ngEmployeeDropdown", "placeholder", "Select Guest ", 1, "kt-input", "form-control", 3, "ngModel", "ngModelChange"], [1, "d-flex", "align-items-center", "mt-3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"], ["type", "date", 1, "form-control"], [1, "px-3", "pt-3", "text-right"], [1, "btn", "btn-sm", "btn-info"], [1, "card-footer", "text-right"], ["data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-info", "btn-sm", "mr-2", 3, "click"], [1, "btn", "btn-secondary", "btn-sm", "mr-2"], ["id", "location", 1, "eve-area"], ["d", "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"], ["cx", "12", "cy", "9", "r", "2.5"], ["target", "\u201D_blank\u201D", 3, "href"], ["id", "", 1, "eve-area"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "viewBox", "0 0 24 24", 1, "svg-icn"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"], ["id", "userlist", 1, "avar-div"], [1, "form-check", "form-check-custom", "form-check-solid"], ["type", "checkbox", 1, "form-check-input", "ps-1", "ng-valid", "ng-dirty", "ng-touched", 3, "id", "value", "checked", "click"], ["fill", "#E0E0E0", "d", "M96,0C43.01,0,0,43.01,0,96s43.01,96,96,96s96-43.01,96-96S148.99,0,96,0z"], ["fill", "#BDBDBD", "d", "M96,85.09c13.28,0,24-10.72,24-24c0-13.28-10.72-24-24-24s-24,10.72-24,24C72,74.37,82.72,85.09,96,85.09z"], ["fill", "#BDBDBD", "d", "M96,99.27c-29.33,0-52.36,14.18-52.36,27.27c11.09,17.06,30.51,28.36,52.36,28.36s41.27-11.3,52.36-28.36C148.36,113.45,125.33,99.27,96,99.27z"], ["fill", "none", "width", "192", "height", "192"], ["name", "user", 1, "main-s"], ["id", "project", 1, "eve-area"], [1, "form-check", "form-check-custom", "form-check-solid", "mr-2"], ["type", "checkbox", "id", "flexCheckChecked1", 1, "form-check-input", "ps-1", 3, "value", "checked", "click"], ["href", "javascript:void(0)", 3, "click"], ["id", "portfolio", 1, "eve-area"], ["type", "checkbox", "id", "flexCheckChecked2", 1, "form-check-input", "ps-1", 3, "value", "checked", "click"], ["id", "dms", 1, "eve-area", "py-2"], ["fill", "none", "d", "M0 0h24v24H0z"], ["d", "M5.455 15L1 18.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455zm-.692-2H16V4H3v10.385L4.763 13zM8 17h10.237L20 18.385V8h1a1 1 0 0 1 1 1v13.5L17.545 19H9a1 1 0 0 1-1-1v-1z"], ["type", "checkbox", "id", "flexCheckChecked3", 1, "form-check-input", "ps-1", 3, "value", "checked", "click"], ["id", "desc", 1, "eve-area", "py-2"], ["d", "M13 6v15h-2V6H5V4h14v2z"], [1, "main-s", 3, "innerHTML"], ["id", "", 1, "eve-area", "py-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 18 18", "width", "20", "height", "20", 1, "svg-icn"], ["d", "M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"], ["class", "rgt-des", 4, "ngFor", "ngForOf"], [1, "task-item"], ["type", "checkbox", 1, "task-status"], [1, "task-name"], [1, "task-actions"], [1, "task-btns", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"], [1, "task-delete", "task-btns", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "aria-hidden", "true", "role", "img", "font-size", "1.5rem", "width", "1em", "height", "1em", "viewBox", "0 0 24 24", 1, "iconify", "iconify--mdi"], ["fill", "currentColor", "d", "M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z"], [1, "task-empty"], [1, "mt-3"], ["class", "mb-2 card", 4, "ngFor", "ngForOf"], [1, "mb-2", "card"], [1, "card-body", "p-2", "Replied_border_left_true_warning", "mr-2"], ["data-type", "inbox", 1, "d-flex", "flex-wrap", "align-items-center", "my-1"], [1, "symbol", "symbol-60", "symbol-2by3", "flex-shrink-0", "m-auto"], [1, "kt-inbox__actions"], [1, "d-flex", "flex-column", "flex-grow-1", "my-lg-0", "my-2", "pr-2", "w-75"], [1, "d-flex", "align-items-center", "justify-content-between"], ["data-toggle", "tooltip", "title", "Project Details!", 1, "curser-pointer"], [1, "fa", "fa-info-circle", "info-icon-cir"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "More Info!", 1, "ml-3", "curser-pointer"], [1, "fa", "fa-chart-bar", "info-icon-cir"], [1, "text-dark-75", "font-weight-bolder", "text-hover-primary", "font-size-lg", "ml-1", "flex-1"], [1, "kt-inbox__subject", "h5", "mybutton"], [1, "my-2"], ["data-toggle", "tooltip", "title", "Created Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge--unified-dark", "kt-badge-light-bold", "kt-badge--inline"], ["src", "../creativeplanner/assets/icons/create2.png", 1, "badge-img"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-info", "kt-badge-light-bold", "kt-badge--inline"], ["role", "img", "color", "success", "aria-hidden", "true", "ng-reflect-color", "success", "data-mat-icon-type", "font", 1, "mat-icon", "notranslate", "ml-2", "mr-2", "mat-success", "material-icons", "mat-ligature-font", "mat-icon-no-color"], ["data-toggle", "tooltip", "title", "Assigned Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge--unified-info", "kt-badge-light-bold", "kt-badge--inline"], ["src", "../creativeplanner/assets/icons/create1.png", 1, "badge-img"], [1, "my-1"], ["data-toggle", "tooltip", "title", "Project Status!", "ng-reflect-ng-class", "[object Object]", 1, "kt-inbox__label", "kt-badge", "kt-badge-light-bold", "kt-badge--inline", "kt-badge--unified-warning"], [1, "mt-2"], [1, "kt-inbox__datetime"]], template: function MeetingReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, MeetingReportComponent_div_1_Template, 127, 31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Meeting Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Daily creative planner meeting with team");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 17)(20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Wednesday, July 19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "9:00AM \u2013 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, " 10:00AM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 21)(29, "div", 22)(30, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "path", 25)(33, "circle", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 27)(35, "div")(36, "div", 28)(37, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Kub Towers");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 30)(41, "div", 22)(42, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](44, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 27)(46, "div")(47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "2 guests");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 33)(50, "div", 34)(51, "div", 35)(52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "svg", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](54, "path", 37)(55, "path", 38)(56, "path", 39)(57, "rect", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "svg", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](60, "path", 43)(61, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "div", 45)(63, "div")(64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65, "Md Waseem Akram");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "Dot Net Developer/Devbox Software Pvt Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "div", 34)(69, "div", 35)(70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "svg", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](72, "path", 37)(73, "path", 38)(74, "path", 39)(75, "rect", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "svg", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](78, "path", 43)(79, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "div", 45)(81, "div")(82, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](83, "Mohammed Mateen");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](85, "Jr. Dot Net Developer/Devbox Software Pvt Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "div", 47)(87, "div", 22)(88, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](89, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "div", 27)(91, "div")(92, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](93, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "div", 50)(95, "div", 34)(96, "div", 51)(97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "svg", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](99, "path", 53)(100, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "div", 27)(102, "div")(103, "div", 28)(104, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](105, " Stream Application development and Integration");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](106, "div", 47)(107, "div", 22)(108, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](109, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](110, "div", 27)(111, "div")(112, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](113, "Portfolios");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](114, "div", 50)(115, "div", 34)(116, "div", 51)(117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](118, "svg", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](119, "path", 53)(120, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](121, "div", 27)(122, "div")(123, "div", 28)(124, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](125, " New Portfolio for event");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](126, "div", 34)(127, "div", 51)(128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](129, "svg", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](130, "path", 53)(131, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](132, "div", 27)(133, "div")(134, "div", 28)(135, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](136, " Tracking Development of Creative Planner");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](137, "div", 47)(138, "div", 22)(139, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](140, "svg", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](141, "path", 58)(142, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](143, "div", 27)(144, "div")(145, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](146, "DMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](147, "div", 50)(148, "div", 34)(149, "div", 51)(150, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](151, "svg", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](152, "path", 53)(153, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](154, "div", 27)(155, "div")(156, "div", 28)(157, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](158, " Designation issue in EP and DMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](159, "div", 34)(160, "div", 51)(161, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](162, "svg", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](163, "path", 53)(164, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](165, "div", 27)(166, "div")(167, "div", 28)(168, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](169, " DMS APIs");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](170, "div", 47)(171, "div", 22)(172, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](173, "svg", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](174, "g", 61)(175, "g", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](176, "g", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](177, "rect", 64)(178, "rect", 65)(179, "path", 66)(180, "path", 67)(181, "rect", 68)(182, "rect", 69)(183, "path", 70)(184, "path", 71)(185, "path", 72)(186, "path", 73)(187, "path", 74)(188, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](189, "div", 27)(190, "div")(191, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](192, "Meeting notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](193, "div", 50)(194, "div", 34)(195, "div", 51)(196, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](197, "svg", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](198, "g", 61)(199, "g", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](200, "g", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](201, "circle", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](202, "div", 27)(203, "div")(204, "div", 28)(205, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](206, " Lorem ipsum dolor sit amet . The graphic and typographic operators");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](207, "div", 34)(208, "div", 51)(209, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](210, "svg", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](211, "g", 61)(212, "g", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](213, "g", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](214, "circle", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](215, "div", 27)(216, "div")(217, "div", 28)(218, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](219, " are different versions distinguishable from the order in whi");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](220, "div", 34)(221, "div", 51)(222, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](223, "svg", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](224, "g", 61)(225, "g", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](226, "g", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](227, "circle", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](228, "div", 27)(229, "div")(230, "div", 28)(231, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](232, " typefaces more in use, an aspect that allows you to have an overview of the rendering of the text in terms of font choice and font size .");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](233, "div", 34)(234, "div", 51)(235, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](236, "svg", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](237, "g", 61)(238, "g", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](239, "g", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](240, "circle", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](241, "div", 27)(242, "div")(243, "div", 28)(244, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](245, " Designation issue in EP and DMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](246, "div", 47)(247, "div", 22)(248, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](249, "svg", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](250, "g", 61)(251, "g", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](252, "g", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](253, "path", 78)(254, "path", 79)(255, "path", 80)(256, "path", 81)(257, "path", 82)(258, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](259, "div", 27)(260, "div")(261, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](262, "Assign Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](263, "div", 50)(264, "div", 34)(265, "div", 51)(266, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](267, "svg", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](268, "g", 61)(269, "g", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](270, "g", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](271, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](272, "div", 27)(273, "div")(274, "div", 28)(275, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](276, " Stream Application development and Integration");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](277, "div", 34)(278, "div", 51)(279, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](280, "svg", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](281, "g", 61)(282, "g", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](283, "g", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](284, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](285, "div", 27)(286, "div")(287, "div", 28)(288, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](289, " Stream Application development and Integration");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](290, "div", 86)(291, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](292, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](293, "button", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](294, "conform");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](295, "div", 89)(296, "div", 90)(297, "div", 4)(298, "div", 5)(299, "h5", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](300, "Set due date and recurrence");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](301, "button", 7)(302, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](303, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](304, "div", 9)(305, "div", 93)(306, "div", 94)(307, "div", 93)(308, "div", 95)(309, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](310, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](311, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](312, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](313, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](314, "Next Monday");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](315, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](316, "In a week");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](317, "div", 97)(318, "div", 98)(319, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](320, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](321, " Does not repeat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](322, "div", 101)(323, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](324, " Does not repeat");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](325, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](326, " Repeat");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](327, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](328, " Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](329, "div", 93)(330, "div", 103)(331, "div", 104)(332, "h2", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](333, "January 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](334, "table", 106)(335, "thead")(336, "tr")(337, "th", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](338, "Sun");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](339, "th", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](340, "Mon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](341, "th", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](342, "Tue");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](343, "th", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](344, "Wed");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](345, "th", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](346, "Thu");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](347, "th", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](348, "Fri");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](349, "th", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](350, "Sat");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](351, "tbody")(352, "tr", 108)(353, "td", 109)(354, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](355, "29");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](356, "td", 109)(357, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](358, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](359, "td", 109)(360, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](361, "31");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](362, "td", 111)(363, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](364, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](365, "td", 112)(366, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](367, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](368, "td", 111)(369, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](370, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](371, "td", 111)(372, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](373, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](374, "tr", 108)(375, "td", 111)(376, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](377, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](378, "td", 111)(379, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](380, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](381, "td", 111)(382, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](383, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](384, "td", 111)(385, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](386, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](387, "td", 111)(388, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](389, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](390, "td", 111)(391, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](392, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](393, "td", 111)(394, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](395, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](396, "tr", 108)(397, "td", 111)(398, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](399, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](400, "td", 111)(401, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](402, "13");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](403, "td", 111)(404, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](405, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](406, "td", 111)(407, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](408, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](409, "td", 111)(410, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](411, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](412, "td", 111)(413, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](414, "17");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](415, "td", 111)(416, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](417, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](418, "tr", 108)(419, "td", 111)(420, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](421, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](422, "td", 111)(423, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](424, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](425, "td", 111)(426, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](427, "21");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](428, "td", 111)(429, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](430, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](431, "td", 111)(432, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](433, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](434, "td", 111)(435, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](436, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](437, "td", 111)(438, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](439, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](440, "tr", 108)(441, "td", 111)(442, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](443, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](444, "td", 111)(445, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](446, "27");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](447, "td", 111)(448, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](449, "28");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](450, "td", 111)(451, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](452, "29");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](453, "td", 111)(454, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](455, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](456, "td", 111)(457, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](458, "31");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](459, "td", 113)(460, "span", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](461, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](462, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](463, "Clear date-range");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](464, "div", 115)(465, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](466, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](467, " Add time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](468, "div", 86)(469, "button", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](470, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](471, "button", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](472, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](473, "div", 120)(474, "div", 90)(475, "div", 4)(476, "div", 5)(477, "h5", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](478, "Custom recurrence");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](479, "button", 7)(480, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](481, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](482, "div", 9)(483, "div", 93)(484, "div", 121)(485, "div", 122)(486, "div", 123)(487, "label", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](488, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](489, "div", 125)(490, "select", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](491, MeetingReportComponent_option_491_Template, 2, 2, "option", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](492, "div", 122)(493, "div", 123)(494, "label", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](495, "Repeat");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](496, "div", 125)(497, "select", 126)(498, "option", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](499, "Select Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](500, "option", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](501, "Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](502, "option", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](503, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](504, "option", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](505, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](506, "option", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](507, "Quarterly");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](508, "option", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](509, "HalfYearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](510, "option", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](511, "Annually");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](512, "div", 122)(513, "div", 123)(514, "label", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](515, "Interval");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](516, "div", 93)(517, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](518, "i", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](519, "span", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](520, "88");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](521, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](522, "i", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](523, "div", 93)(524, "span", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](525, "Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](526, "div", 122)(527, "div", 123)(528, "label", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](529, "On days");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](530, "div", 93)(531, "div", 93)(532, "div", 17)(533, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](534, "input", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](535, " S ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](536, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](537, "input", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](538, " M ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](539, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](540, "input", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](541, " T ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](542, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](543, "input", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](544, " W ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](545, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](546, "input", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](547, " Th ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](548, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](549, "input", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](550, " Fr ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](551, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](552, "input", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](553, " Sa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](554, "div", 122)(555, "div", 123)(556, "label", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](557, "Starts");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](558, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](559, "input", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](560, "div", 134)(561, "a", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](562, "i", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](563, " Add a time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](564, "div", 146)(565, "div", 123)(566, "label", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](567, "Ends");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](568, "div", 93)(569, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](570, "input", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](571, "label", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](572, " Never ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](573, "div", 150)(574, "div", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](575, "input", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](576, "label", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](577, " On ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](578, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](579, "input", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](580, "div", 86)(581, "div", 154)(582, "div", 93)(583, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](584, "Weekly on Tuesday");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](585, "div", 93)(586, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](587, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](588, "button", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](589, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](590, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MeetingReportComponent_Template_div_click_590_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](591, "div", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](592, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.EventScheduledjson);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](490);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ProjectTypelist);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", 16);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵr"], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], styles: [".meet-card[_ngcontent-%COMP%]{\r\n    border-radius: 10px;\r\n}\r\n.meet-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:first-child {\r\n    border-radius: 10px 10px 0 0;\r\n}\r\nh5.card-ttle[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    color: #3c4043;\r\n}\r\n.header2[_ngcontent-%COMP%] {\r\n    padding: 40px;\r\n    padding-bottom: 20px;\r\n    background-color: #f7f8fa;\r\n    border-bottom: 1px solid #ebedf2;\r\n    \r\n}\r\n.card-body2[_ngcontent-%COMP%]{\r\n    background-color: #f1f5f9;\r\n}\r\n.title-right[_ngcontent-%COMP%]{\r\n    padding-top:6px;\r\n}\r\n.main-title[_ngcontent-%COMP%]{       \r\n    width: 100%;\r\n    position: relative;\r\n    display: flex;\r\n    min-height: 32px;\r\n    padding-right: 16px;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    transition: background-color 100ms linear; \r\n    min-height: 32px;\r\n    margin-bottom: 12px;\r\n}\r\n.boxcl-div[_ngcontent-%COMP%]{\r\n    color: #5f6368;\r\n    padding-left: 3px;\r\n    width: 45px;\r\n    box-flex: 0;\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n    align-items: center;\r\n    max-height: 36px;\r\n    max-height: 36px;\r\n    align-self: stretch;\r\n    display: flex;\r\n}\r\n.box-cl[_ngcontent-%COMP%]{\r\n    border-radius: 40px;\r\n    height: 14px;\r\n    width: 14px;\r\n    margin-left: 3px;\r\n    margin-top: 3px;\r\n}\r\n.eve-area[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    position: relative;\r\n    display: flex;\r\n    min-height: 32px;\r\n    padding-right: 16px;\r\n    box-sizing: border-box;\r\n    align-items: center;\r\n    outline: none;\r\n    transition: background-color 100ms linear;\r\n}\r\n.eve-modal[_ngcontent-%COMP%]   .scrolly[_ngcontent-%COMP%]{\r\n    overflow: auto;\r\n    overflow-x: hidden;\r\n}\r\n.rgt-des[_ngcontent-%COMP%]{\r\n    padding-bottom: 6px;\r\n    padding-top: 6px;\r\n    box-flex: 1;\r\n    flex-grow: 1;\r\n    display: block;\r\n    overflow: auto;\r\n}\r\n.left-icon[_ngcontent-%COMP%]{\r\n    color: #5f6368;\r\n    padding-left: 3px;\r\n    padding-right: 17px;\r\n    width: 45px;\r\n    max-height: 52px;\r\n    display: flex;\r\n    align-items: center;\r\n    align-self: stretch;\r\n}\r\n.tool-span[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.svg-icn[_ngcontent-%COMP%]{\r\n    fill: #5f6368;\r\n}\r\n.fas-icn[_ngcontent-%COMP%]{\r\n    color: #5f6368;\r\n    font-size: 16px;\r\n}\r\n.fab-icn[_ngcontent-%COMP%]{\r\n    color: #1c1e21;\r\n    font-size: 19px;\r\n}\r\n.text-ellp[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.title-main[_ngcontent-%COMP%]{\r\n    font-family: \"Google Sans\",Roboto,Arial,sans-serif;\r\n    font-size: 22px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #3c4043;\r\n    max-height: 56px;\r\n    overflow-wrap: break-word;\r\n    word-wrap: break-word;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n}\r\n.title-day[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    letter-spacing: .2px;\r\n    line-height: 20px;\r\n    color: #3c4043;\r\n}\r\n.day-dot[_ngcontent-%COMP%]{\r\n    margin: 0 8px;\r\n    font-weight: 700;\r\n\r\n}\r\n.main-s[_ngcontent-%COMP%]{    \r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    letter-spacing: .2px;\r\n    line-height: 20px;\r\n    color: #3c4043;\r\n}\r\n.sub-s[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    letter-spacing: .3px;\r\n    line-height: 18px;\r\n    color: #5f6368;\r\n}\r\n.avar-div[_ngcontent-%COMP%], .side-div[_ngcontent-%COMP%]{\r\n    padding-left: 54px;\r\n}\r\n.card-mid[_ngcontent-%COMP%]   .eve-area[_ngcontent-%COMP%]:not(:first-child){\r\n    border-top: 1px solid #ebedf2;\r\n}\r\n.card-mid[_ngcontent-%COMP%]   .eve-area[_ngcontent-%COMP%]{\r\n    padding: 7px 20px;\r\n}\r\n.grey-bg[_ngcontent-%COMP%]{\r\n    background: #d8dadc;\r\n    min-height: 100vh;\r\n    height: 100%;\r\n}\r\n.form-check-input[_ngcontent-%COMP%] {\r\n    vertical-align: text-top;\r\n    cursor: pointer;\r\n    border-radius: 4px;\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 11' width='13' height='11' fill='none'%3e%3cpath d='M11.0426 1.02893C11.3258 0.695792 11.8254 0.655283 12.1585 0.938451C12.4917 1.22162 12.5322 1.72124 12.249 2.05437L5.51985 9.97104C5.23224 10.3094 4.72261 10.3451 4.3907 10.05L0.828197 6.88335C0.50141 6.59288 0.471975 6.09249 0.762452 5.7657C1.05293 5.43891 1.55332 5.40948 1.88011 5.69995L4.83765 8.32889L11.0426 1.02893Z' fill='%23FFFFFF'/%3e%3c/svg%3e\");\r\n}\r\n.ps-1[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    float: unset;\r\n    margin: 0 !important;\r\n}\r\nimg.hed-icn[_ngcontent-%COMP%] {\r\n    width: 24px;\r\n}\r\nimg.dms-icn[_ngcontent-%COMP%] {\r\n    width: 22px;\r\n}\r\n.head-icns[_ngcontent-%COMP%]{\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n.cards-main[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n.card-side[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    display: none;\r\n}\r\n.cards-main[_ngcontent-%COMP%]   .card-side[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n.side-acns[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.pend-btn[_ngcontent-%COMP%]{\r\n    width: max-content;\r\n    color: #fff;\r\n    background-color: #2c3e50 !important;\r\n    border-color: #2c3e50 !important;\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n    background-color: transparent;\r\n    border: 1px solid transparent;\r\n    padding: 0.4em 0.65em;\r\n    font-size: 1em;\r\n    line-height: 1.5;\r\n    border-radius: 0.25em;\r\n    cursor: pointer;\r\n}\r\n.pend-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    fill: #fff;\r\n    width: 18px;\r\n    height: 18px;\r\n}\r\n.center-data[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n.center-data[_ngcontent-%COMP%]   .meet-icon[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    padding: 0;\r\n    color: #5f6368;\r\n}\r\n.center-data[_ngcontent-%COMP%]   svg.svg-icn[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n#minusc[_ngcontent-%COMP%]{\r\n    display: block;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   #minusc[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n.todo-main[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: auto;\r\n    background-color: #fff;\r\n    font-family: var(--font);\r\n    border-radius: 5px;\r\n    font-size: 15px;\r\n    overflow: hidden;\r\n    color: #455963;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\r\n  }\r\n.todo-list[_ngcontent-%COMP%] {\r\n    max-height: 20vh;\r\n    overflow: auto;\r\n  }\r\n.task-status[_ngcontent-%COMP%] {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 18px;\r\n    height: 18px;\r\n    cursor: pointer;\r\n    border: 2px solid #bbbdc7;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    margin-right: 10px;\r\n    position: relative;\r\n  }\r\n.task-status[_ngcontent-%COMP%]:checked {\r\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='405.272' height='405.272'%3e%3cpath d='M393.401 124.425L179.603 338.208c-15.832 15.835-41.514 15.835-57.361 0L11.878 227.836c-15.838-15.835-15.838-41.52 0-57.358 15.841-15.841 41.521-15.841 57.355-.006l81.698 81.699L336.037 67.064c15.841-15.841 41.523-15.829 57.358 0 15.835 15.838 15.835 41.514.006 57.361z' fill='%23fff'/%3e%3c/svg%3e\");\r\n    background-size: 10px;\r\n    background-color: #4acea3;\r\n    border-color: #38bb90;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n  }\r\n.task-delete[_ngcontent-%COMP%] {\r\n    margin-left: 8px;\r\n  }\r\n.task-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    padding: 12px 20px;\r\n  }\r\n.task-item[_ngcontent-%COMP%]    + .task-item[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #eef0f5;\r\n  }\r\n.task-item[_ngcontent-%COMP%]:hover {\r\n    background-color: #f6fbff;\r\n  }\r\n.task-name[_ngcontent-%COMP%] {\r\n    margin-right: auto;\r\n    flex: 1;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    margin-bottom: 0;\r\n    line-height: 26px;\r\n  }\r\n.task-item.is-completed[_ngcontent-%COMP%]    > .task-name[_ngcontent-%COMP%] {\r\n    -webkit-text-decoration: line-through;\r\n    text-decoration: line-through;\r\n  }\r\n.task-item.is-completed[_ngcontent-%COMP%] {\r\n    background-color: rgba(74, 206, 163, 0.1);\r\n  }\r\n.task-header-title[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    padding: 20px 20px 6px 20px;\r\n  }\r\n.task-tools[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    align-items: flex-start;\r\n    padding: 0 20px;\r\n  }\r\n.task-filter[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    padding: 3px 8px;\r\n    background: 0;\r\n    font-size: 14px;\r\n    line-height: 1;\r\n    cursor: pointer;\r\n    font-family: var(--font);\r\n    color: #8a9ca5;\r\n    border-radius: 20px;\r\n  }\r\n.task-filter.is-active[_ngcontent-%COMP%] {\r\n    background-color: #7996a5;\r\n    color: #fff;\r\n  }\r\n.task-count[_ngcontent-%COMP%] {\r\n    color: #8a9ca5;\r\n    font-size: 14px;\r\n  }\r\n.task-form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-top: 10px;\r\n  }\r\n.task-input[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    font-size: 16px;\r\n    font-family: var(--font);\r\n    padding: 10px 20px;\r\n    border: 0;\r\n    box-shadow: 0 -1px 0 #e2e4ea inset;\r\n    color: #455963;\r\n  }\r\n.task-input[_ngcontent-%COMP%]::placeholder {\r\n    color: #a8b5bb;\r\n  }\r\n.task-input[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 -1px 0 #bdcdd6 inset;\r\n    outline: none;\r\n  }\r\n.task-button[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n.task-btns[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background: transparent;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    margin-left: 8px;\r\n  }\r\n.task-btns[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    color: #737373;\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 24px;\r\n    max-width: 24px;\r\n    vertical-align: middle;\r\n}\r\n.task-delete[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\r\n    color: #dc4771;\r\n}\r\n.task-actions[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.task-item[_ngcontent-%COMP%]:hover    > .task-actions[_ngcontent-%COMP%], .task-item[_ngcontent-%COMP%]:focus    > .task-actions[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n.task-empty[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg fill='%23f4f4f4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 486.463 486.463'%3e%3cpath d='M243.225 333.382c-13.6 0-25 11.4-25 25s11.4 25 25 25c13.1 0 25-11.4 24.4-24.4.6-14.3-10.7-25.6-24.4-25.6z'/%3e%3cpath d='M474.625 421.982c15.7-27.1 15.8-59.4.2-86.4l-156.6-271.2c-15.5-27.3-43.5-43.5-74.9-43.5s-59.4 16.3-74.9 43.4l-156.8 271.5c-15.6 27.3-15.5 59.8.3 86.9 15.6 26.8 43.5 42.9 74.7 42.9h312.8c31.3 0 59.4-16.3 75.2-43.6zm-34-19.6c-8.7 15-24.1 23.9-41.3 23.9h-312.8c-17 0-32.3-8.7-40.8-23.4-8.6-14.9-8.7-32.7-.1-47.7l156.8-271.4c8.5-14.9 23.7-23.7 40.9-23.7 17.1 0 32.4 8.9 40.9 23.8l156.7 271.4c8.4 14.6 8.3 32.2-.3 47.1z'/%3e%3cpath d='M237.025 157.882c-11.9 3.4-19.3 14.2-19.3 27.3.6 7.9 1.1 15.9 1.7 23.8 1.7 30.1 3.4 59.6 5.1 89.7.6 10.2 8.5 17.6 18.7 17.6s18.2-7.9 18.7-18.2c0-6.2 0-11.9.6-18.2 1.1-19.3 2.3-38.6 3.4-57.9.6-12.5 1.7-25 2.3-37.5 0-4.5-.6-8.5-2.3-12.5-5.1-11.2-17-16.9-28.9-14.1z'/%3e%3c/svg%3e\");\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    font-weight: 500;\r\n    font-size: 18px;\r\n    background-size: 80px;\r\n  }\r\n.btn-white[_ngcontent-%COMP%]{\r\n    background-color: #fff;\r\n    border: 1px dashed #ccc;\r\n    border-radius: 40px;\r\n    color: #737373;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    height: 26px;\r\n    margin: 0 4px;\r\n    padding: 0 10px 0 8px;\r\n  }\r\n@media (max-width: 600px) {\r\n    .task-actions[_ngcontent-%COMP%] {\r\n      display: block;\r\n    }\r\n  }\r\n  .angular-editor-textarea {\r\n    min-height: 8rem !important;\r\n}\r\n.drops[_ngcontent-%COMP%]{\r\n    z-index: 95;\r\n    display: none;\r\n    float: left;\r\n    min-width: 10rem;\r\n    padding: 0.5rem 0;\r\n    margin: 0.125rem 0 0;\r\n    font-size: 1rem;\r\n    color: #212529;\r\n    text-align: left;\r\n    list-style: none;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    position: absolute;\r\n    box-shadow: 0px 0px 50px 0px rgba(82, 63, 105, 0.15);\r\n    border-radius: 4px;\r\n}\r\n.drops.show[_ngcontent-%COMP%]{\r\n    display: block;\r\n    min-width: 400px;\r\n}\r\n.drops-item[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    padding: 0.25rem 1.5rem;\r\n    clear: both;\r\n    font-weight: 400;\r\n    color: #74788d;\r\n    text-align: inherit;\r\n    white-space: nowrap;\r\n    background-color: transparent;\r\n    border: 0;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]{\r\n  padding: 0.8rem 0;\r\n  min-width: 270px;\r\n  margin-top: 5px;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{\r\n  padding: 0.4rem 1rem;\r\n  cursor: pointer;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n  background: #f1f6fd;\r\n  color: #0b0e1f;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  display: flex;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .ckc-icn[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  color: #3b93fc;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .dropdown-item.d-range[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline !important;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active {\r\n  background: none;\r\n}\r\n.kt-input[_ngcontent-%COMP%] {\r\n  height: 36px;\r\n  line-height: 25px;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  \r\n  line-height: 24px;\r\n  background-color: rgba(255, 255, 255, 0);\r\n  color: #3c4043;\r\n  border: none;\r\n  border-radius: 0;\r\n  border-bottom: 2px solid #dadce0;\r\n  padding: 0.65rem 1rem;\r\n}\r\n.kt-input[_ngcontent-%COMP%]:focus {\r\n  border-bottom: 2px solid #1a73e8;\r\n}\r\n.calendar-wrap[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 0.75em;\r\n  margin: auto;\r\n  font-size: 4vw;\r\n  background-color: #fff;\r\n  border-radius: 1.5em;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  box-shadow:\r\n    0 0.0625em 0.25em rgba(0,20,50,0.2),\r\n    0 0.5em 0.5em 0.125em rgba(0,20,50,0.1);\r\n}\r\n@media (min-width: 500px) {\r\n  .calendar-wrap[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    font-size: 13px;\r\n  }\r\n}\r\n.month-year[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.75em;\r\n  font-weight: normal;\r\n  font-size: 1.25em;\r\n  text-align: center;\r\n}\r\n.calendar[_ngcontent-%COMP%] {\r\n  table-layout: fixed;\r\n  width: 100%;\r\n  margin-bottom: 0.75em;\r\n  overflow: hidden;\r\n  border-collapse: collapse;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n.day-title[_ngcontent-%COMP%] {\r\n  width: 25px;\r\n  height: 40px;\r\n  vertical-align: top;\r\n  font-weight: normal;\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.0625em;\r\n  box-shadow: inset 0 -0.875em #fff, inset 0 -1em rgba(0,20,50,0.1);\r\n  text-align: center;\r\n}\r\n.day[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 20px;\r\n  height: 30px;\r\n}\r\n.day[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n.day[_ngcontent-%COMP%]:focus   .day-number[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 80%;\r\n  height: 80%;\r\n  transform: translate(-50%,-50%);\r\n  border: 0.25em solid #0288d1;\r\n  border-radius: 50%;\r\n}\r\n.day.active-a[_ngcontent-%COMP%]:focus   .day-number[_ngcontent-%COMP%]::after, .day.active-b[_ngcontent-%COMP%]:focus   .day-number[_ngcontent-%COMP%]::after {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.day.today[_ngcontent-%COMP%]:focus   .day-number[_ngcontent-%COMP%]::after {\r\n  width: 102%;\r\n  height: 102%;\r\n}\r\n.day[_ngcontent-%COMP%]:hover   span.day-number[_ngcontent-%COMP%] {\r\n  color: #0288d1;\r\n}\r\n.day[_ngcontent-%COMP%]:first-child, .day[_ngcontent-%COMP%]:last-child {\r\n  color: rgba(0,0,0,0.5);\r\n}\r\n.day.range[_ngcontent-%COMP%] {\r\n  color: #0288d1;\r\n  background-color: #e1f5fe;\r\n}\r\n.day.range.active-a[_ngcontent-%COMP%], .day[_ngcontent-%COMP%]:not(.range)    + .day.range.active-b[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: inset -1.5em 0 #e1f5fe;\r\n}\r\n.day.range.active-b[_ngcontent-%COMP%], .day.range[_ngcontent-%COMP%]    + .day.range.active-a[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: inset 1.5em 0 #e1f5fe;\r\n}\r\n.day.range.active-a[_ngcontent-%COMP%]:first-child, .day.range.active-b[_ngcontent-%COMP%]:first-child {\r\n  box-shadow: none;\r\n}\r\n.day.range.active-a[_ngcontent-%COMP%]:first-child    + .day.range[_ngcontent-%COMP%], .day.range.active-b[_ngcontent-%COMP%]:first-child    + .day.range[_ngcontent-%COMP%] {\r\n  box-shadow: -1.5em 0 #e1f5fe;\r\n}\r\n.day.range.active-a[_ngcontent-%COMP%]:first-child    + .day[_ngcontent-%COMP%]:not(.range), .day.range.active-b[_ngcontent-%COMP%]:first-child    + .day[_ngcontent-%COMP%]:not(.range) {\r\n  box-shadow: -4.5em 0 #e1f5fe;\r\n}\r\n.day.range.active-a[_ngcontent-%COMP%]:first-child    + .day.range.active-b[_ngcontent-%COMP%] {\r\n  box-shadow:\r\n    -1.5em 0 #e1f5fe,\r\n    inset 1.5em 0 #e1f5fe;\r\n}\r\n.day-number[_ngcontent-%COMP%] {\r\n  position: relative;\r\n    z-index: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 30px;\r\n    width: 30px;\r\n    border-radius: 50%;\r\n}\r\n.day.active-a[_ngcontent-%COMP%]   span.day-number[_ngcontent-%COMP%], .day.active-b[_ngcontent-%COMP%]   span.day-number[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #03A9F4;\r\n}\r\n.day.prev-mon[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%], .day.next-mon[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\r\n  color: rgba(0,0,0,0.3);\r\n}\r\n.day.prev-mon[class*=\"active\"][_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%], .day.next-mon[class*=\"active\"][_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\r\n  color: rgba(255,255,255,0.5);\r\n  background-color: #81D4FA;\r\n}\r\n.day.today[_ngcontent-%COMP%]   span.day-number[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  border: 0.25em solid transparent;\r\n  box-shadow: inset 0 0 0 2em #37474F;\r\n}\r\n.calendar-wrap[_ngcontent-%COMP%]   .reset[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n.rec-btns[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.btn-min[_ngcontent-%COMP%] {\r\n  min-width: 160px;\r\n  min-height: 34px;\r\n}\r\n.modal-lg.w-min[_ngcontent-%COMP%] {\r\n  min-width: 500px;\r\n}\r\n.repeat-day.active[_ngcontent-%COMP%], .repeat-month.active[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: #1a73e8;\r\n}\r\n.repeat-day[_ngcontent-%COMP%], .repeat-month[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    box-sizing: border-box;\r\n    width: 24px;\r\n    height: 24px;\r\n    font-size: 10px;\r\n    font-weight: 500;\r\n    border-radius: 50%;\r\n    background-color: #f1f3f4;\r\n    color: #80868b;\r\n    margin-right: 8px;\r\n    cursor: pointer;\r\n    text-transform: capitalize;\r\n    position: relative;\r\n}\r\n.rep-chk[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n.w-min-150[_ngcontent-%COMP%]{\r\n  min-width: 150px;\r\n}\r\n.left-lbls[_ngcontent-%COMP%] {\r\n  min-width: 60px;\r\n  text-align: right;\r\n  margin-right: 10px;\r\n}\r\n.numbr[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  text-align: center;\r\n  padding: 0.65rem 0;\r\n}\r\n.arrws[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  text-align: center;\r\n}\r\n.arw-spn[_ngcontent-%COMP%] {\r\n  height: calc(1.5em + 1.3rem + 2px);\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #e2e5ec;\r\n  border-radius: 4px;\r\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  display: block;\r\n  width: 50px;\r\n  text-align: center;\r\n  padding: 0.65rem 0;\r\n}\r\n.form-check-input[type=radio][_ngcontent-%COMP%], .form-check-input[_ngcontent-%COMP%]:checked[type=radio] {\r\n  -webkit-appearance: radio;\r\n  appearance: radio;\r\n  background-image: none;\r\n}\r\n  ng-select {\r\n  border-bottom: none !important;\r\n  padding: 0 !important;\r\n}\r\n\r\n.Replied_border_left_true_warning[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #ffb822;\r\n}\r\n.Replied_border_left_true_primary[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #95bed9;\r\n}\r\n.Replied_border_left_true_success[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #3CB371;\r\n}\r\n.Replied_border_left_true_Danger[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #F58A8B;\r\n}\r\n.Replied_border_left_true_hold[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #c0b5dc\r\n}\r\n.Replied_border_left_true_rejected[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #f5c293;\r\n}\r\n.Replied_border_left_true_underApprovals[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #BD838C;\r\n}\r\n.Replied_border_left_true_forwardUnderApproval[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #E0B1D7;\r\n}\r\n.Replied_border_left_true_completeUnderApproval[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #98c7bf;\r\n}\r\n.Replied_border_left_true_projectHold[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #C0B5DC;\r\n}\r\n.Replied_border_left_true_NewProject[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #3699ff;\r\n}\r\n.Replied_border_left_true_DeadlineExtended[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #E0B1D7;\r\n}\r\n.Replied_border_left_true_HoldunderApp[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #a85098;\r\n}\r\n.Replied_border_left_true_NewToDo[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #5088a8;\r\n}\r\n.info-icon-cir[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: #5867dd;\r\n}\r\n.desc[_ngcontent-%COMP%]{\r\n  color: grey;\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n}\r\n.remks[_ngcontent-%COMP%]{\r\nfont-size: 12px;\r\n\r\n}\r\n.kt-badge.kt-badge--inline[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  width: auto;\r\n  padding: 0.15rem 0.75rem;\r\n  border-radius: 2px;\r\n  margin-left: 4px;\r\n}\r\n.badge-img[_ngcontent-%COMP%] {\r\n  width: 16px;\r\n  padding: 2px 0;\r\n  margin-right: 4px;\r\n}\r\n.mat-icon.mat-primary[_ngcontent-%COMP%] {\r\n  color: #3699ff;\r\n}\r\nmat-icon[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n.cursor-pointer[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n.input-group-text[_ngcontent-%COMP%] > .mat-icon-button[_ngcontent-%COMP%] {\r\n  line-height: 35px !important;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  right: 0;\r\n  background: #ffffff;\r\n  box-shadow: 0px 1px 9px -3px rgb(0 0 0 / 75%);\r\n  border-left: 1px solid #ffffff;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  overflow-y: auto;\r\n  z-index: 999;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  backface-visibility: hidden;\r\n  -webkit-backface-visibility: hidden;\r\n  \r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n  background-color: #f5f6fc;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #333;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 25px;\r\n  font-size: 20px;\r\n  margin-left: 50px;\r\n}\r\n.info-icon-cir[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  color: #5867dd;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%] {\r\n  border-bottom: 0.07rem dashed #dedede;\r\n  padding: 6px;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%] {\r\n  border-bottom: 0.07rem dashed rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%] {\r\n  width: 270px;\r\n  text-align: left;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.side-bar-box[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  padding-left: 0px !important;\r\n}\r\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #f1f1f1;\r\n  font-weight: 400;\r\n}\r\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n  border-bottom: none\r\n}\r\n.custom-textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 150px;\r\n  font-size: 16px;\r\n  padding-left: 25px;\r\n  background-repeat: no-repeat;\r\n  background-position: left center;\r\n  line-height: 1;\r\n  border: 1px solid #ccc;\r\n}\r\n.custom-textarea[_ngcontent-%COMP%]::before {\r\n  content: \"\u2022 \";\r\n  display: inline-block;\r\n  width: 2em;\r\n  margin-left: -1em;\r\n}\r\n.angular-editor-textarea[_ngcontent-%COMP%] {\r\n  max-height: 150px !important;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1; \r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #888; \r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555; \r\n}\r\n.scrolly[_ngcontent-%COMP%] {\r\n  max-height: 100vh;\r\n  overflow: auto;\r\n}\r\n.meet-card[_ngcontent-%COMP%] {\r\n  height: 97vh;\r\n}\r\n.cstm-swd[_ngcontent-%COMP%] {\r\n  box-shadow: 0px 3px 7px #8d8d8d52;\r\n}\r\nspan.statusicn[_ngcontent-%COMP%] {\r\n  right: 2px;\r\n  position: absolute;\r\n  top: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmctcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsMEVBQTBFO0FBQzlFO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFHbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFFbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFFYix5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXO0lBRVgsV0FBVztJQUVYLFlBQVk7SUFFWixjQUFjO0lBRWQsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBR2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBRW5CLHNCQUFzQjtJQUV0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUViLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUVoQixXQUFXO0lBRVgsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lB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QUNuQjtBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBRUEsVUFBVTtBQUNWO0VBQ0UsVUFBVTtBQUNaO0FBRUEsVUFBVTtBQUNWO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUEsV0FBVztBQUNYO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWIiwiZmlsZSI6Im1lZXRpbmctcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVldC1jYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ubWVldC1jYXJkIC5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG59XHJcbmg1LmNhcmQtdHRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzNjNDA0MztcclxufVxyXG4uaGVhZGVyMiB7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZhO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmVkZjI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2Y5YThkNCwjZDhiNGZlICwjODE4Y2Y2KTsgKi9cclxufVxyXG4uY2FyZC1ib2R5MntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XHJcbn1cclxuLnRpdGxlLXJpZ2h0e1xyXG4gICAgcGFkZGluZy10b3A6NnB4O1xyXG59XHJcbi5tYWluLXRpdGxleyAgICAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLWhlaWdodDogMzJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGxpbmVhcjsgXHJcbiAgICBtaW4taGVpZ2h0OiAzMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG4uYm94Y2wtZGl2e1xyXG4gICAgY29sb3I6ICM1ZjYzNjg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcclxuICAgIGJveC1mbGV4OiAwO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDA7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICAtd2Via2l0LWZsZXgtc2hyaW5rOiAwO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWF4LWhlaWdodDogMzZweDtcclxuICAgIG1heC1oZWlnaHQ6IDM2cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uYm94LWNse1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG4uZXZlLWFyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi1oZWlnaHQ6IDMycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgbGluZWFyO1xyXG59XHJcbi5ldmUtbW9kYWwgLnNjcm9sbHl7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4ucmd0LWRlc3tcclxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgIGJveC1mbGV4OiAxO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5sZWZ0LWljb257XHJcbiAgICBjb2xvcjogIzVmNjM2ODtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTdweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgbWF4LWhlaWdodDogNTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxufVxyXG4udG9vbC1zcGFue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zdmctaWNue1xyXG4gICAgZmlsbDogIzVmNjM2ODtcclxufVxyXG4uZmFzLWljbntcclxuICAgIGNvbG9yOiAjNWY2MzY4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5mYWItaWNue1xyXG4gICAgY29sb3I6ICMxYzFlMjE7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuLnRleHQtZWxscHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnRpdGxlLW1haW57XHJcbiAgICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiLFJvYm90byxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgY29sb3I6ICMzYzQwNDM7XHJcbiAgICBtYXgtaGVpZ2h0OiA1NnB4O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuLnRpdGxlLWRheXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICMzYzQwNDM7XHJcbn1cclxuLmRheS1kb3R7XHJcbiAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbn1cclxuLm1haW4tc3sgICAgXHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4ycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjM2M0MDQzO1xyXG59XHJcbi5zdWItc3tcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgY29sb3I6ICM1ZjYzNjg7XHJcbn1cclxuLmF2YXItZGl2LCAuc2lkZS1kaXZ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDU0cHg7XHJcbn1cclxuXHJcbi5jYXJkLW1pZCAuZXZlLWFyZWE6bm90KDpmaXJzdC1jaGlsZCl7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ViZWRmMjtcclxufVxyXG4uY2FyZC1taWQgLmV2ZS1hcmVhe1xyXG4gICAgcGFkZGluZzogN3B4IDIwcHg7XHJcbn1cclxuLmdyZXktYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDhkYWRjO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmZvcm0tY2hlY2staW5wdXQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMyAxMScgd2lkdGg9JzEzJyBoZWlnaHQ9JzExJyBmaWxsPSdub25lJyUzZSUzY3BhdGggZD0nTTExLjA0MjYgMS4wMjg5M0MxMS4zMjU4IDAuNjk1NzkyIDExLjgyNTQgMC42NTUyODMgMTIuMTU4NSAwLjkzODQ1MUMxMi40OTE3IDEuMjIxNjIgMTIuNTMyMiAxLjcyMTI0IDEyLjI0OSAyLjA1NDM3TDUuNTE5ODUgOS45NzEwNEM1LjIzMjI0IDEwLjMwOTQgNC43MjI2MSAxMC4zNDUxIDQuMzkwNyAxMC4wNUwwLjgyODE5NyA2Ljg4MzM1QzAuNTAxNDEgNi41OTI4OCAwLjQ3MTk3NSA2LjA5MjQ5IDAuNzYyNDUyIDUuNzY1N0MxLjA1MjkzIDUuNDM4OTEgMS41NTMzMiA1LjQwOTQ4IDEuODgwMTEgNS42OTk5NUw0LjgzNzY1IDguMzI4ODlMMTEuMDQyNiAxLjAyODkzWicgZmlsbD0nJTIzRkZGRkZGJy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG59XHJcbi5wcy0xe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IHVuc2V0O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuaW1nLmhlZC1pY24ge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbn1cclxuaW1nLmRtcy1pY24ge1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbn1cclxuLmhlYWQtaWNuc3tcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcbi5jYXJkcy1tYWluIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmNhcmQtc2lkZXtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jYXJkcy1tYWluIC5jYXJkLXNpZGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5zaWRlLWFjbnMgYXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucGVuZC1idG57XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzJjM2U1MCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMC40ZW0gMC42NWVtO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5wZW5kLWJ0biBzdmcge1xyXG4gICAgZmlsbDogI2ZmZjtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uY2VudGVyLWRhdGEge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2VudGVyLWRhdGEgLm1lZXQtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb2xvcjogIzVmNjM2ODtcclxufVxyXG4uY2VudGVyLWRhdGEgc3ZnLnN2Zy1pY24ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbiNtaW51c2N7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uY29sbGFwc2VkICNtaW51c2N7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udG9kby1tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjb2xvcjogIzQ1NTk2MztcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG4gIFxyXG4gIC50b2RvLWxpc3Qge1xyXG4gICAgbWF4LWhlaWdodDogMjB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAudGFzay1zdGF0dXMge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JiYmRjNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLXN0YXR1czpjaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDUuMjcyJyBoZWlnaHQ9JzQwNS4yNzInJTNlJTNjcGF0aCBkPSdNMzkzLjQwMSAxMjQuNDI1TDE3OS42MDMgMzM4LjIwOGMtMTUuODMyIDE1LjgzNS00MS41MTQgMTUuODM1LTU3LjM2MSAwTDExLjg3OCAyMjcuODM2Yy0xNS44MzgtMTUuODM1LTE1LjgzOC00MS41MiAwLTU3LjM1OCAxNS44NDEtMTUuODQxIDQxLjUyMS0xNS44NDEgNTcuMzU1LS4wMDZsODEuNjk4IDgxLjY5OUwzMzYuMDM3IDY3LjA2NGMxNS44NDEtMTUuODQxIDQxLjUyMy0xNS44MjkgNTcuMzU4IDAgMTUuODM1IDE1LjgzOCAxNS44MzUgNDEuNTE0LjAwNiA1Ny4zNjF6JyBmaWxsPSclMjNmZmYnLyUzZSUzYy9zdmclM2VcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGFjZWEzO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMzhiYjkwO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2stZGVsZXRlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWl0ZW0gKyAudGFzay1pdGVtIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVmMGY1O1xyXG4gIH1cclxuICBcclxuICAudGFzay1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmZiZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLW5hbWUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZmxleDogMTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWl0ZW0uaXMtY29tcGxldGVkID4gLnRhc2stbmFtZSB7XHJcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWl0ZW0uaXMtY29tcGxldGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDIwNiwgMTYzLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAudGFzay1oZWFkZXItdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCA2cHggMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2stdG9vbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gIH1cclxuICBcclxuICAudGFzay1maWx0ZXIge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogM3B4IDhweDtcclxuICAgIGJhY2tncm91bmQ6IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcclxuICAgIGNvbG9yOiAjOGE5Y2E1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2stZmlsdGVyLmlzLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5NmE1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWNvdW50IHtcclxuICAgIGNvbG9yOiAjOGE5Y2E1O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAudGFzay1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAudGFzay1pbnB1dCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAtMXB4IDAgI2UyZTRlYSBpbnNldDtcclxuICAgIGNvbG9yOiAjNDU1OTYzO1xyXG4gIH1cclxuICBcclxuICAudGFzay1pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2E4YjViYjtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2staW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYThiNWJiO1xyXG4gIH1cclxuICBcclxuICAudGFzay1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNhOGI1YmI7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWlucHV0OmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTFweCAwICNiZGNkZDYgaW5zZXQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAudGFzay1idXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2stYnRucyB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgLnRhc2stYnRucyBzdmcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6ICM3MzczNzM7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1heC13aWR0aDogMjRweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnRhc2stZGVsZXRlIHN2Z3tcclxuICAgIGNvbG9yOiAjZGM0NzcxO1xyXG59XHJcbi50YXNrLWFjdGlvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4gIC50YXNrLWl0ZW06aG92ZXIgPiAudGFzay1hY3Rpb25zLCAudGFzay1pdGVtOmZvY3VzID4gLnRhc2stYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAudGFzay1lbXB0eSB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzY3N2ZyBmaWxsPSclMjNmNGY0ZjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ4Ni40NjMgNDg2LjQ2MyclM2UlM2NwYXRoIGQ9J00yNDMuMjI1IDMzMy4zODJjLTEzLjYgMC0yNSAxMS40LTI1IDI1czExLjQgMjUgMjUgMjVjMTMuMSAwIDI1LTExLjQgMjQuNC0yNC40LjYtMTQuMy0xMC43LTI1LjYtMjQuNC0yNS42eicvJTNlJTNjcGF0aCBkPSdNNDc0LjYyNSA0MjEuOTgyYzE1LjctMjcuMSAxNS44LTU5LjQuMi04Ni40bC0xNTYuNi0yNzEuMmMtMTUuNS0yNy4zLTQzLjUtNDMuNS03NC45LTQzLjVzLTU5LjQgMTYuMy03NC45IDQzLjRsLTE1Ni44IDI3MS41Yy0xNS42IDI3LjMtMTUuNSA1OS44LjMgODYuOSAxNS42IDI2LjggNDMuNSA0Mi45IDc0LjcgNDIuOWgzMTIuOGMzMS4zIDAgNTkuNC0xNi4zIDc1LjItNDMuNnptLTM0LTE5LjZjLTguNyAxNS0yNC4xIDIzLjktNDEuMyAyMy45aC0zMTIuOGMtMTcgMC0zMi4zLTguNy00MC44LTIzLjQtOC42LTE0LjktOC43LTMyLjctLjEtNDcuN2wxNTYuOC0yNzEuNGM4LjUtMTQuOSAyMy43LTIzLjcgNDAuOS0yMy43IDE3LjEgMCAzMi40IDguOSA0MC45IDIzLjhsMTU2LjcgMjcxLjRjOC40IDE0LjYgOC4zIDMyLjItLjMgNDcuMXonLyUzZSUzY3BhdGggZD0nTTIzNy4wMjUgMTU3Ljg4MmMtMTEuOSAzLjQtMTkuMyAxNC4yLTE5LjMgMjcuMy42IDcuOSAxLjEgMTUuOSAxLjcgMjMuOCAxLjcgMzAuMSAzLjQgNTkuNiA1LjEgODkuNy42IDEwLjIgOC41IDE3LjYgMTguNyAxNy42czE4LjItNy45IDE4LjctMTguMmMwLTYuMiAwLTExLjkuNi0xOC4yIDEuMS0xOS4zIDIuMy0zOC42IDMuNC01Ny45LjYtMTIuNSAxLjctMjUgMi4zLTM3LjUgMC00LjUtLjYtOC41LTIuMy0xMi41LTUuMS0xMS4yLTE3LTE2LjktMjguOS0xNC4xeicvJTNlJTNjL3N2ZyUzZVwiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MHB4O1xyXG4gIH1cclxuICAuYnRuLXdoaXRle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGNvbG9yOiAjNzM3MzczO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHggMCA4cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnRhc2stYWN0aW9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuOjpuZy1kZWVwIC5hbmd1bGFyLWVkaXRvci10ZXh0YXJlYSB7XHJcbiAgICBtaW4taGVpZ2h0OiA4cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRyb3Bze1xyXG4gICAgei1pbmRleDogOTU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICBtYXJnaW46IDAuMTI1cmVtIDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNTBweCAwcHggcmdiYSg4MiwgNjMsIDEwNSwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmRyb3BzLnNob3d7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbn1cclxuLmRyb3BzLWl0ZW17XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAxLjVyZW07XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzc0Nzg4ZDtcclxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zb3J0LWRyb3B7XHJcbiAgcGFkZGluZzogMC44cmVtIDA7XHJcbiAgbWluLXdpZHRoOiAyNzBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnNvcnQtZHJvcCAuZHJvcGRvd24taXRlbXtcclxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNvcnQtZHJvcCAuYWN0aXZle1xyXG4gIGJhY2tncm91bmQ6ICNmMWY2ZmQ7XHJcbiAgY29sb3I6ICMwYjBlMWY7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uc29ydC1kcm9wIC5hY3RpdmUgLmNrYy1pY257XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiAjM2I5M2ZjO1xyXG59XHJcbi5zb3J0LWRyb3AgLmRyb3Bkb3duLWl0ZW0uZC1yYW5nZTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxufVxyXG4uc29ydC1kcm9wIC5kcm9wZG93bi1pdGVtOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmt0LWlucHV0IHtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgLyogaGVpZ2h0OiAyNHB4OyAqL1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgY29sb3I6ICMzYzQwNDM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkYWRjZTA7XHJcbiAgcGFkZGluZzogMC42NXJlbSAxcmVtO1xyXG59XHJcblxyXG4ua3QtaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWE3M2U4O1xyXG59XHJcblxyXG4uY2FsZW5kYXItd3JhcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC43NWVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXNpemU6IDR2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJveC1zaGFkb3c6XHJcbiAgICAwIDAuMDYyNWVtIDAuMjVlbSByZ2JhKDAsMjAsNTAsMC4yKSxcclxuICAgIDAgMC41ZW0gMC41ZW0gMC4xMjVlbSByZ2JhKDAsMjAsNTAsMC4xKTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgLmNhbGVuZGFyLXdyYXAge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxufVxyXG5cclxuLm1vbnRoLXllYXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNzVlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhbGVuZGFyIHtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNzVlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmRheS10aXRsZSB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNjI1ZW07XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMC44NzVlbSAjZmZmLCBpbnNldCAwIC0xZW0gcmdiYSgwLDIwLDUwLDAuMSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGF5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZGF5OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZGF5OmZvY3VzIC5kYXktbnVtYmVyOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogODAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgIzAyODhkMTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5kYXkuYWN0aXZlLWE6Zm9jdXMgLmRheS1udW1iZXI6OmFmdGVyLFxyXG4uZGF5LmFjdGl2ZS1iOmZvY3VzIC5kYXktbnVtYmVyOjphZnRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZGF5LnRvZGF5OmZvY3VzIC5kYXktbnVtYmVyOjphZnRlciB7XHJcbiAgd2lkdGg6IDEwMiU7XHJcbiAgaGVpZ2h0OiAxMDIlO1xyXG59XHJcblxyXG4uZGF5OmhvdmVyIHNwYW4uZGF5LW51bWJlciB7XHJcbiAgY29sb3I6ICMwMjg4ZDE7XHJcbn1cclxuXHJcbi5kYXk6Zmlyc3QtY2hpbGQsXHJcbi5kYXk6bGFzdC1jaGlsZCB7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxufVxyXG5cclxuLmRheS5yYW5nZSB7XHJcbiAgY29sb3I6ICMwMjg4ZDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjVmZTtcclxufVxyXG5cclxuLmRheS5yYW5nZS5hY3RpdmUtYSxcclxuLmRheTpub3QoLnJhbmdlKSArIC5kYXkucmFuZ2UuYWN0aXZlLWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xLjVlbSAwICNlMWY1ZmU7XHJcbn1cclxuXHJcbi5kYXkucmFuZ2UuYWN0aXZlLWIsXHJcbi5kYXkucmFuZ2UgKyAuZGF5LnJhbmdlLmFjdGl2ZS1hIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiBpbnNldCAxLjVlbSAwICNlMWY1ZmU7XHJcbn1cclxuXHJcbi5kYXkucmFuZ2UuYWN0aXZlLWE6Zmlyc3QtY2hpbGQsXHJcbi5kYXkucmFuZ2UuYWN0aXZlLWI6Zmlyc3QtY2hpbGQge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5kYXkucmFuZ2UuYWN0aXZlLWE6Zmlyc3QtY2hpbGQgKyAuZGF5LnJhbmdlLFxyXG4uZGF5LnJhbmdlLmFjdGl2ZS1iOmZpcnN0LWNoaWxkICsgLmRheS5yYW5nZSB7XHJcbiAgYm94LXNoYWRvdzogLTEuNWVtIDAgI2UxZjVmZTtcclxufVxyXG5cclxuLmRheS5yYW5nZS5hY3RpdmUtYTpmaXJzdC1jaGlsZCArIC5kYXk6bm90KC5yYW5nZSksXHJcbi5kYXkucmFuZ2UuYWN0aXZlLWI6Zmlyc3QtY2hpbGQgKyAuZGF5Om5vdCgucmFuZ2UpIHtcclxuICBib3gtc2hhZG93OiAtNC41ZW0gMCAjZTFmNWZlO1xyXG59XHJcblxyXG4uZGF5LnJhbmdlLmFjdGl2ZS1hOmZpcnN0LWNoaWxkICsgLmRheS5yYW5nZS5hY3RpdmUtYiB7XHJcbiAgYm94LXNoYWRvdzpcclxuICAgIC0xLjVlbSAwICNlMWY1ZmUsXHJcbiAgICBpbnNldCAxLjVlbSAwICNlMWY1ZmU7XHJcbn1cclxuXHJcbi5kYXktbnVtYmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uZGF5LmFjdGl2ZS1hIHNwYW4uZGF5LW51bWJlcixcclxuLmRheS5hY3RpdmUtYiBzcGFuLmRheS1udW1iZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM0E5RjQ7XHJcbn1cclxuXHJcbi5kYXkucHJldi1tb24gLmRheS1udW1iZXIsXHJcbi5kYXkubmV4dC1tb24gLmRheS1udW1iZXIge1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcbi5kYXkucHJldi1tb25bY2xhc3MqPVwiYWN0aXZlXCJdIC5kYXktbnVtYmVyLFxyXG4uZGF5Lm5leHQtbW9uW2NsYXNzKj1cImFjdGl2ZVwiXSAuZGF5LW51bWJlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFENEZBO1xyXG59XHJcblxyXG4uZGF5LnRvZGF5IHNwYW4uZGF5LW51bWJlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMmVtICMzNzQ3NEY7XHJcbn1cclxuXHJcbi5jYWxlbmRhci13cmFwIC5yZXNldCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnJlYy1idG5ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uYnRuLW1pbiB7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBtaW4taGVpZ2h0OiAzNHB4O1xyXG59XHJcbi5tb2RhbC1sZy53LW1pbiB7XHJcbiAgbWluLXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLnJlcGVhdC1kYXkuYWN0aXZlLFxyXG4ucmVwZWF0LW1vbnRoLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE3M2U4O1xyXG59XHJcblxyXG4ucmVwZWF0LWRheSxcclxuLnJlcGVhdC1tb250aCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNDtcclxuICAgIGNvbG9yOiAjODA4NjhiO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucmVwLWNoayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLnctbWluLTE1MHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG59XHJcbi5sZWZ0LWxibHMge1xyXG4gIG1pbi13aWR0aDogNjBweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLm51bWJyIHtcclxuICB3aWR0aDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC42NXJlbSAwO1xyXG59XHJcbi5hcnJ3cyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hcnctc3BuIHtcclxuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAxLjNyZW0gKyAycHgpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU1ZWM7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC42NXJlbSAwO1xyXG59XHJcbi5mb3JtLWNoZWNrLWlucHV0W3R5cGU9cmFkaW9dLCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkW3R5cGU9cmFkaW9dIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHJhZGlvO1xyXG4gIGFwcGVhcmFuY2U6IHJhZGlvO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuOjpuZy1kZWVwIG5nLXNlbGVjdCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogU3RhdHVzIENvbG9ycyAqL1xyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV93YXJuaW5nIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmI4MjI7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcHJpbWFyeSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOTViZWQ5O1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3N1Y2Nlc3Mge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzNDQjM3MTtcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9EYW5nZXIge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0Y1OEE4QjtcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9ob2xkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNjMGI1ZGNcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9yZWplY3RlZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjVjMjkzO1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3VuZGVyQXBwcm92YWxzIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNCRDgzOEM7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfZm9yd2FyZFVuZGVyQXBwcm92YWwge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0UwQjFENztcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9jb21wbGV0ZVVuZGVyQXBwcm92YWwge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZjtcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9wcm9qZWN0SG9sZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQzBCNURDO1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX05ld1Byb2plY3Qge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzM2OTlmZjtcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9EZWFkbGluZUV4dGVuZGVkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfSG9sZHVuZGVyQXBwIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhODUwOTg7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfTmV3VG9EbyB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNTA4OGE4O1xyXG59XHJcbi5pbmZvLWljb24tY2lye1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzU4NjdkZDtcclxufVxyXG4uZGVzY3tcclxuICBjb2xvcjogZ3JleTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4ucmVta3N7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxuXHJcbn1cclxuLmt0LWJhZGdlLmt0LWJhZGdlLS1pbmxpbmUge1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAwLjE1cmVtIDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbi5iYWRnZS1pbWcge1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDJweCAwO1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcbi5tYXQtaWNvbi5tYXQtcHJpbWFyeSB7XHJcbiAgY29sb3I6ICMzNjk5ZmY7XHJcbn1cclxubWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5jdXJzb3ItcG9pbnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dD4ubWF0LWljb24tYnV0dG9uIHtcclxuICBsaW5lLWhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zaWRlSW5mb2JhciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggOXB4IC0zcHggcmdiKDAgMCAwIC8gNzUlKTtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAvKiBwYWRkaW5nLXRvcDogNjBweDsgKi9cclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5rdC1wb3J0bGV0X19oZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmNsb3NlYnRuIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWljb24tY2lyIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICM1ODY3ZGQ7XHJcbn1cclxuXHJcbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgI2RlZGVkZTtcclxuICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuXHJcbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbS5kYXJrIHtcclxuICBib3JkZXItYm90dG9tOiAwLjA3cmVtIGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcblxyXG4vKiAua3QtaW5ib3hfX2RhdGV0aW1le1xyXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG59ICovXHJcblxyXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW0gLmt0LXdpZGdldDFfX2luZm8gLmt0LXdpZGdldDFfX3RpdGxlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLnRpdGxlLXNpZGViYXIge1xyXG4gIHdpZHRoOiAyNzBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnNpZGUtYmFyLWJveCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaWRlLWJhci1ib3ggbGkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5zaWRlLWJhci1ib3ggbGk6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZVxyXG59XHJcblxyXG4uY3VzdG9tLXRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4uY3VzdG9tLXRleHRhcmVhOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4oCiIFwiO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xyXG59XHJcblxyXG4uYW5ndWxhci1lZGl0b3ItdGV4dGFyZWEge1xyXG4gIG1heC1oZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7IFxyXG59XHJcbiBcclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICM4ODg7IFxyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzU1NTsgXHJcbn1cclxuLnNjcm9sbHkge1xyXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5tZWV0LWNhcmQge1xyXG4gIGhlaWdodDogOTd2aDtcclxufVxyXG4uY3N0bS1zd2Qge1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggN3B4ICM4ZDhkOGQ1MjtcclxufVxyXG5zcGFuLnN0YXR1c2ljbiB7XHJcbiAgcmlnaHQ6IDJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 52477:
/*!*****************************************!*\
  !*** ./src/app/_Models/calender-dto.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalenderDTO": () => (/* binding */ CalenderDTO)
/* harmony export */ });
class CalenderDTO {
}


/***/ }),

/***/ 21041:
/*!***********************************************!*\
  !*** ./src/app/_Services/calender.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalenderService": () => (/* binding */ CalenderService)
/* harmony export */ });
/* harmony import */ var _Models_calender_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_Models/calender-dto */ 52477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _apiurl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiurl.service */ 77983);




class CalenderService {
    constructor(http, commonUrl) {
        this.http = http;
        this.commonUrl = commonUrl;
        this.rootUrl = this.commonUrl.apiurl;
        this.obj_CalenderDTO = new _Models_calender_dto__WEBPACK_IMPORTED_MODULE_0__.CalenderDTO;
    }
    GetCalenderProjectandsubList(obj) {
        let EmpNo = localStorage.getItem('EmpNo');
        this.obj_CalenderDTO.EmpNo = EmpNo;
        this.obj_CalenderDTO.Project_Code = obj.Project_Code;
        return this.http.post(this.rootUrl + "CalenderAPI/NewGetProjectandsubtaskDrp", this.obj_CalenderDTO);
    }
    // starttime:string;
    // min:number;
    // endtime:string;
    GetTimeslabcalender(obj) {
        this.obj_CalenderDTO.minutes = obj.minutes;
        this.obj_CalenderDTO.StartTime = obj.StartTime;
        this.obj_CalenderDTO.EndTime = obj.EndTime;
        return this.http.post(this.rootUrl + "CalenderAPI/NewGettimeslabs", this.obj_CalenderDTO);
    }
    NewGetScheduledtimejson(obj) {
        this.obj_CalenderDTO.EmpNo = obj.EmpNo;
        return this.http.post(this.rootUrl + "CalenderAPI/NewGetScheduledtimejson", this.obj_CalenderDTO);
    }
    NewGetPending_request(obj) {
        this.obj_CalenderDTO.Emp_No = obj.Emp_No;
        return this.http.post(this.rootUrl + "CalenderAPI/NewGetPending_requests1", this.obj_CalenderDTO);
    }
    NewClickEventJSON(obj) {
        this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
        return this.http.post(this.rootUrl + "CalenderAPI/NewGetClickEventJSON", this.obj_CalenderDTO);
    }
    NewGetSearchResults(obj) {
        this.obj_CalenderDTO.EmpNo = obj.EmpNo;
        this.obj_CalenderDTO.Search_text = obj.Search_text;
        return this.http.post(this.rootUrl + "CalenderAPI/NewGetSearchResults", this.obj_CalenderDTO);
    }
    NewGetMeeting_report(obj) {
        this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
        this.obj_CalenderDTO.Note = obj.Note;
        this.obj_CalenderDTO.Action_item = obj.Action_item;
        this.obj_CalenderDTO.User_list = obj.User_list;
        this.obj_CalenderDTO.Dms = obj.Dms;
        this.obj_CalenderDTO.Portfolio = obj.Portfolio;
        this.obj_CalenderDTO.Project = obj.Project;
        return this.http.post(this.rootUrl + "CalenderAPI/NewInsertmeeting_reports1", this.obj_CalenderDTO);
    }
    NewGetrequeat_Accpect(obj) {
        this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
        this.obj_CalenderDTO.EventNumber = obj.EventNumber;
        this.obj_CalenderDTO.flagid = obj.flagid;
        this.obj_CalenderDTO.EmpNo = obj.EmpNo;
        return this.http.post(this.rootUrl + "CalenderAPI/NewGetAcceptedRequeste", this.obj_CalenderDTO);
    }
    NewGetproposenewtime(obj) {
        this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
        this.obj_CalenderDTO.propose_date = obj.propose_date;
        this.obj_CalenderDTO.propose_stt = obj.propose_stt;
        this.obj_CalenderDTO.propose_edt = obj.propose_edt;
        return this.http.post(this.rootUrl + "CalenderAPI/NewGetProposenewdate", this.obj_CalenderDTO);
    }
    NewGetEvent_request(obj) {
        this.obj_CalenderDTO.Emp_No = obj.Emp_No;
        return this.http.post(this.rootUrl + "CalenderAPI/NewGetEvent_request", this.obj_CalenderDTO);
    }
    NewDelete_table(obj) {
        this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
        this.obj_CalenderDTO.flag_id = obj.flag_id;
        return this.http.post(this.rootUrl + "CalenderAPI/NewGetRessheduling_table", this.obj_CalenderDTO);
    }
    NewPending_table(obj) {
        this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
        return this.http.post(this.rootUrl + "CalenderAPI/NewGetPending_tables", this.obj_CalenderDTO);
    }
    NewInsertCalender(obj) {
        this.obj_CalenderDTO.ScheduleJson = obj.ScheduleJson;
        this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
        return this.http.post(this.rootUrl + "TestAPI/NewInsertSchedule_CalenderUpdated", this.obj_CalenderDTO);
    }
    UploadCalendarAttachmenst(data) {
        return this.http.post(this.rootUrl + "TestAPI/NewAddCalendarAttachment", data, {
            reportProgress: true,
            observe: 'events'
        }).pipe();
    }
    EditUploadCalendarAttachmenst(data) {
        return this.http.post(this.rootUrl + "TestAPI/NewAddNewfileCalendarDocuments", data, {
            reportProgress: true,
            observe: 'events'
        }).pipe();
    }
    NewUpdateCalender(obj) {
        this.obj_CalenderDTO.ScheduleJson = obj.ScheduleJson;
        this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
        this.obj_CalenderDTO.flagid = obj.flagid;
        this.obj_CalenderDTO.attachment = obj.attachment;
        return this.http.post(this.rootUrl + "TestAPI/NewupdateSchedule_Calender", this.obj_CalenderDTO);
    }
    NewGetcheckdateandtime(obj) {
        this.obj_CalenderDTO.json = obj.json;
        this.obj_CalenderDTO.EmpNo = obj.EmpNo;
        return this.http.post(this.rootUrl + "CalenderAPI/NewGetcheckdatetimetable", this.obj_CalenderDTO);
    }
    NewGetScheduledtime(obj) {
        this.obj_CalenderDTO.EmpNo = obj.EmpNo;
        this.obj_CalenderDTO.Scheduled_date = obj.Scheduled_date;
        return this.http.post(this.rootUrl + "CalenderAPI/NewGetScheduleddatetime", this.obj_CalenderDTO);
    }
}
CalenderService.ɵfac = function CalenderService_Factory(t) { return new (t || CalenderService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_apiurl_service__WEBPACK_IMPORTED_MODULE_1__.ApiurlService)); };
CalenderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CalenderService, factory: CalenderService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app__LayoutDashboard_meeting-report_meeting-report_component_ts.js.map