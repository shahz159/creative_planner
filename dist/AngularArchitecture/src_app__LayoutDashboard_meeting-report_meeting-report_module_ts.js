"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["src_app__LayoutDashboard_meeting-report_meeting-report_module_ts"],{

/***/ 76187:
/*!**********************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/meeting-report/meeting-report-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetingReportRoutingModule": () => (/* binding */ MeetingReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _meeting_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meeting-report.component */ 5131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _meeting_report_component__WEBPACK_IMPORTED_MODULE_0__.MeetingReportComponent }];
class MeetingReportRoutingModule {
}
MeetingReportRoutingModule.ɵfac = function MeetingReportRoutingModule_Factory(t) { return new (t || MeetingReportRoutingModule)(); };
MeetingReportRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MeetingReportRoutingModule });
MeetingReportRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MeetingReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var src_app_Services_calender_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/calender.service */ 21041);
/* harmony import */ var src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/link.service */ 33529);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @kolkov/angular-editor */ 167);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);











function MeetingReportComponent_div_1_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75)(1, "div", 35)(2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "svg", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "path", 77)(5, "circle", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 38)(7, "div", 5)(8, "div", 39)(9, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", item_r1.Addressurl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.Location);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.FullAddress_loc);
} }
function MeetingReportComponent_div_1_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 80)(1, "div", 35)(2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "path", 81)(5, "path", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 38)(7, "div", 5)(8, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 80)(1, "div", 35)(2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "path", 81)(5, "path", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 38)(7, "div", 5)(8, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_58_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 84)(1, "div", 85)(2, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_div_58_div_1_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const _user_r17 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_user_r17.checked = $event); })("click", function MeetingReportComponent_div_1_div_58_div_1_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.Online_methoduser($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 87)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "svg", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "path", 89)(7, "path", 90)(8, "path", 91)(9, "rect", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 93)(11, "div", 5)(12, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _user_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", _user_r17.stringval)("checked", ctx_r16.userchecked)("ngModel", _user_r17.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_user_r17.TM_DisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _user_r17.Designation_Name, "/", _user_r17.Com_Name, "");
} }
function MeetingReportComponent_div_1_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MeetingReportComponent_div_1_div_58_div_1_Template, 16, 6, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.User_Scheduledjson);
} }
function MeetingReportComponent_div_1_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 96)(1, "div", 35)(2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 38)(5, "div", 5)(6, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_61_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 84)(1, "div", 99)(2, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_div_61_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const _pro_r21 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_pro_r21.checked = $event); })("click", function MeetingReportComponent_div_1_div_61_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.Online_methodproject($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 38)(4, "div")(5, "div", 39)(6, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_61_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const _pro_r21 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r25.moreDetails(_pro_r21.stringval)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _pro_r21 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", _pro_r21.stringval)("checked", ctx_r7.projectchecked)("ngModel", _pro_r21.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _pro_r21.Project_Name, "");
} }
function MeetingReportComponent_div_1_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 102)(1, "div", 35)(2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 38)(5, "div", 5)(6, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Portfolios");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 84)(1, "div", 99)(2, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_div_64_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const _prot_r26 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_prot_r26.checked = $event); })("click", function MeetingReportComponent_div_1_div_64_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.Online_methodportfolio($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 38)(4, "div")(5, "div", 39)(6, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_64_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const _prot_r26 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r30.OnCardClick(_prot_r26.numberval)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _prot_r26 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", _prot_r26.numberval)("checked", ctx_r9.portfolioschecked)("ngModel", _prot_r26.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _prot_r26.Portfolio_Name, "");
} }
function MeetingReportComponent_div_1_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 105)(1, "div", 35)(2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "svg", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "path", 107)(5, "path", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 38)(7, "div", 5)(8, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "DMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_67_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 84)(1, "div", 99)(2, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_div_67_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const itemMemos_r31 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](itemMemos_r31.checked = $event); })("click", function MeetingReportComponent_div_1_div_67_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r35.Online_methoddms($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 38)(4, "div")(5, "div", 39)(6, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_67_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const itemMemos_r31 = restoredCtx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r36.openUrl(itemMemos_r31.Url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const itemMemos_r31 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", itemMemos_r31.MailId)("checked", ctx_r11.dmschecked)("ngModel", itemMemos_r31.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", itemMemos_r31.Subject, "");
} }
function MeetingReportComponent_div_1_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 110)(1, "div", 35)(2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "svg", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "path", 107)(5, "path", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 38)(7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", item_r1.Description, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function MeetingReportComponent_div_1_div_69_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 38)(1, "div", 5)(2, "div", 39)(3, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const trt_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", trt_r39.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](trt_r39.File_Name);
} }
function MeetingReportComponent_div_1_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 114)(1, "div", 35)(2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "svg", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "path", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, MeetingReportComponent_div_1_div_69_div_5_Template, 5, 2, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r13.Attachments_ary);
} }
function MeetingReportComponent_div_1_div_98_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Not found a task");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function MeetingReportComponent_div_1_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 118)(1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 122)(6, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Tomorrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "svg", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "path", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "svg", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "path", 128)(16, "path", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "svg", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "path", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "svg", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "path", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "svg", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "path", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, MeetingReportComponent_div_1_div_98_div_27_Template, 2, 0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r14.text);
} }
function MeetingReportComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Meeting Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "div", 11)(11, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 13)(14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 15)(24, "div", 16)(25, "div", 17)(26, "div", 18)(27, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Meeting Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 5)(30, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Collapse");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 22)(34, "div", 23)(35, "div", 24)(36, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 28)(40, "div", 29)(41, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Click To View or modify meeting Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, MeetingReportComponent_div_1_div_46_Template, 13, 3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, MeetingReportComponent_div_1_div_47_Template, 10, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, MeetingReportComponent_div_1_div_48_Template, 10, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 34)(50, "div", 35)(51, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 38)(55, "div", 5)(56, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, MeetingReportComponent_div_1_div_58_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, MeetingReportComponent_div_1_div_59_Template, 8, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, MeetingReportComponent_div_1_div_61_Template, 8, 4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, MeetingReportComponent_div_1_div_62_Template, 8, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, MeetingReportComponent_div_1_div_64_Template, 8, 4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, MeetingReportComponent_div_1_div_65_Template, 10, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, MeetingReportComponent_div_1_div_67_Template, 8, 4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, MeetingReportComponent_div_1_div_68_Template, 9, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, MeetingReportComponent_div_1_div_69_Template, 6, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 48)(71, "div", 49)(72, "div", 50)(73, "h5", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, " Meeting Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 52)(76, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_Template_a_click_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r43.open_side()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](77, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_Template_a_click_78_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r45.open_side()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](79, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 57)(81, "div", 58)(82, "div", 59)(83, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "angular-editor", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_Template_angular_editor_ngModelChange_85_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r46.Notes_Type = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div", 62)(87, "div", 63)(88, "div", 64)(89, "h1", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "Things To do");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 66)(92, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "5 tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "form", 68)(95, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_Template_input_ngModelChange_95_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r47._Demotext = $event); })("keyup.enter", function MeetingReportComponent_div_1_Template_input_keyup_enter_95_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r48.EnterSubmit(ctx_r48._Demotext)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_Template_button_click_96_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r49.EnterSubmit(ctx_r49._Demotext)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "Add Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](98, MeetingReportComponent_div_1_div_98_Template, 28, 2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "div", 72)(100, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r1.Task_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](16, 21, item_r1.Schedule_date, "d EEE, MMMM YYYY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r1.NewSt_Time, " \u2013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r1.NewEd_Time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r1.Location);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r1.Onlinelink.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r1.Onlinelink == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.User_Scheduledjson.length, " guests");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.User_Scheduledjson.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.Project_NameScheduledjson.length > 0 || ctx_r0.Project_NameScheduledjson != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.Project_NameScheduledjson);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.portfolio_Scheduledjson.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.portfolio_Scheduledjson);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r1.DMS_Name != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0._MemosSubjectList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r1.Description != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.Attachments_ary.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.Notes_Type)("config", ctx_r0.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0._Demotext);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.text);
} }
class MeetingReportComponent {
    constructor(route, notifyService, CalenderService, _LinkService, ProjectTypeService) {
        this.route = route;
        this.notifyService = notifyService;
        this.CalenderService = CalenderService;
        this._LinkService = _LinkService;
        this.ProjectTypeService = ProjectTypeService;
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
        this.projectchecked1 = true;
        this.dmschecked1 = true;
        this.portfoliochecked1 = true;
        this.checkedusers = [];
        this.checkedproject = [];
        this.checkeddms = [];
        this.checkedportfolio = [];
        this.Meeting_Detailsdata = [];
        // config: AngularEditorConfig = {
        //   editable: true,
        //   spellcheck: true,
        //   height: 'auto',
        //   minHeight: '5rem',
        //   maxHeight: 'auto',
        //   width: 'auto',
        //   minWidth: '0',
        //   placeholder: 'Enter text here...',
        //   translate: 'no',
        //   defaultParagraphSeparator: 'p',
        //   defaultFontName: 'Arial',
        //   toolbarHiddenButtons: [
        //     [
        //       // 'bold',
        //       // 'italic',
        //       // 'underline',
        //       'strikeThrough',
        //       'subscript',
        //       'superscript',
        //       'indent',
        //       'outdent',
        //       // 'insertUnorderedList',
        //       // 'insertOrderedList',
        //       'heading'
        //       // 'fontName'
        //     ],
        //     [
        //       // 'fontSize',
        //       // 'textColor',
        //       // 'backgroundColor',
        //       'customClasses',
        //       'unlink',
        //       'insertImage',
        //       'insertVideo',
        //       'insertHorizontalRule',
        //       'removeFormat',
        //       'toggleEditorMode',
        //    'fontSelector',
        //    'justifyLeft',
        //    'justifyCenter',
        //    'justifyRight',
        //    'justifyFull',
        //    'bold',
        //    'italic',
        //    'underline',
        //    'heading',
        //     ]
        //   ],
        //   customClasses: [
        //     {
        //       name: 'quote',
        //       class: 'quote',
        //     },
        //     {
        //       name: 'redText',
        //       class: 'redText',
        //     },
        //     {
        //       name: 'titleText',
        //       class: 'titleText',
        //       tag: 'h1',
        //     },
        //   ],
        // };
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
                    'heading',
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
                    'toggleEditorMode'
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
        this._TodoList = [];
        this.text = [];
        this._calenderDto = new src_app_Models_calender_dto__WEBPACK_IMPORTED_MODULE_0__.CalenderDTO;
        this._ObjAssigntaskDTO = new src_app_Models_assigntask_dto__WEBPACK_IMPORTED_MODULE_1__.AssigntaskDTO();
    }
    ngOnInit() {
        this.CurrentUser_ID = localStorage.getItem('EmpNo');
        this.route.paramMap.subscribe(params => {
            var scode = params.get('scheduleid');
            this.Scheduleid = scode;
        });
        this.meeting_details();
        // document.addEventListener('DOMContentLoaded', function () {
        //     const addButton = document.querySelector('#btn1') as HTMLButtonElement;
        //       const input = document.querySelector('#todo-input') as HTMLInputElement;
        //       const ul = document.querySelector('#todo-list') as HTMLUListElement;
        //       addButton.addEventListener('click', (event: Event) => {
        //         event.preventDefault();
        //         alert('dfgdf');
        //         const todoText: string = input.value.trim();
        //         if (todoText !== '') {
        //           const li: HTMLLIElement = document.createElement('li');
        //           li.textContent = todoText;
        //           ul.appendChild(li);
        //           input.value = '';
        //         }
        //       });
        //       ul.addEventListener('click', (event: Event) => {
        //         const target = event.target as HTMLElement;
        //         if (target.tagName === 'LI') {
        //           const li = target as HTMLLIElement;
        //           li.contentEditable = 'true';
        //           li.focus();
        //         }
        //       });
        //       ul.addEventListener('blur', (event: Event) => {
        //         const target = event.target as HTMLElement;
        //         if (target.tagName === 'LI') {
        //           const li = target as HTMLLIElement;
        //           li.contentEditable = 'false';
        //         }
        //       });
        //     }); 
    }
    meeting_details() {
        this.Schedule_ID = this.Scheduleid;
        this._calenderDto.Schedule_ID = this.Schedule_ID;
        this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe((data) => {
            this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
            console.log(this.EventScheduledjson, "111111");
            debugger;
            this.User_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Add_guests);
            this.User_Scheduledjson.forEach(element => {
                this.checkedusers.push(element.stringval);
            });
            console.log(this.checkedusers, "chec");
            this.Project_NameScheduledjson = JSON.parse(this.EventScheduledjson[0].Project_code);
            this.Project_NameScheduledjson.forEach(element => {
                this.checkedproject.push(element.stringval);
            });
            console.log(this.checkedproject, "chec1");
            // alert(this.Project_NameScheduledjson) 
            this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson;
            this.portfolio_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Portfolio_Name);
            this.portfolio_Scheduledjson.forEach(element => {
                this.checkedportfolio.push(element.numberval);
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
                    });
                    this.checkeddms = this.checkeddms.map((num) => num.toString());
                });
            }
        });
    }
    EnterSubmit(_Demotext) {
        if (_Demotext != "") {
            this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
            this._ObjAssigntaskDTO.TaskName = this._Demotext;
            this.text.push(this._Demotext);
            this._Demotext = "";
            //   this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
            //     (data) => {
            //       //console.log("Data---->", data);
            //       this._TodoList = JSON.parse(data['TodoList']);
            //       let message: string = data['Message'];
            //       this._Demotext = "";
            //       //this.GetAssignTask();
            //       this.notifyService.showSuccess("Successfully", "Added");
            //       // this.closeInfo();
            //     });
            // }
            // else {
            //   this.notifyService.showInfo("Failed to add task!!", "Please Enter Task Name");
            // }
        }
    }
    Online_methodproject(event) {
        if (event.target.checked == true) {
            this.checkedproject.push(event.target.value);
            // alert(this.checkedproject);
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
            // alert(this.checkedportfolio);
        }
        else if (event.target.checked == false) {
            let index = this.checkedportfolio.indexOf(event.target.value);
            if (index > -1) {
                this.checkedportfolio.splice(index, 1);
            }
            // alert(this.checkedportfolio);
        }
        console.log(this.checkedportfolio);
    }
    Online_methoddms(event) {
        if (event.target.checked == true) {
            this.checkeddms.push(event.target.value);
            // alert(this.checkeddms);
        }
        else if (event.target.checked == false) {
            let index = this.checkeddms.indexOf(event.target.value);
            if (index > -1) {
                this.checkeddms.splice(index, 1);
            }
            // alert(this.checkeddms);
        }
        console.log(this.checkeddms);
    }
    Online_methoduser(event) {
        // if(event.target.checked==true){
        //   this.userchecked1=true;
        // }
        // else{
        //   this.userchecked1=false;
        // }
        if (event.target.checked == true) {
            this.checkedusers.push(event.target.value);
            // alert(this.checkedusers);
        }
        else if (event.target.checked == false) {
            let index = this.checkedusers.indexOf(event.target.value);
            if (index > -1) {
                this.checkedusers.splice(index, 1);
            }
            // alert(this.checkedusers);
        }
        console.log(this.checkedusers);
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
    Insert_meetingreport() {
        debugger;
        this.Schedule_ID = this.Scheduleid;
        this._calenderDto.Schedule_ID = this.Schedule_ID;
        this._calenderDto.Notes = this.Notes_Type;
        this._calenderDto.Action_item = this.Action_item;
        this.CalenderService.NewGetMeeting_report(this._calenderDto).subscribe(data => {
        });
    }
    open_side() {
        document.getElementById("cardmain").classList.add("cards-main");
    }
    close_side() {
        document.getElementById("cardmain").classList.remove("cards-main");
    }
}
MeetingReportComponent.ɵfac = function MeetingReportComponent_Factory(t) { return new (t || MeetingReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_Services_calender_service__WEBPACK_IMPORTED_MODULE_3__.CalenderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_4__.LinkService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_5__.ProjectTypeService)); };
MeetingReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: MeetingReportComponent, selectors: [["app-meeting-report"]], decls: 2, vars: 1, consts: [[1, "grey-bg"], ["class", "col-md-12 p-3", 4, "ngFor", "ngForOf"], [1, "col-md-12", "p-3"], [1, "card", "meet-card"], [1, "card-header"], [1, ""], [1, "mb-0", "card-title"], [1, "header2"], ["id", "NameDate", 1, "main-title"], ["id", "", 1, "title-right"], [1, "title-area"], [1, "title-main"], ["id", "title1"], [1, "d-flex"], [1, "title-day"], [1, "card-body", "scrolly", "card-body2"], [1, "px-3"], [1, "card", "card-mid", "flex-1"], ["data-toggle", "collapse", "href", ".meetdt", "role", "button", "aria-expanded", "false", "aria-controls", "meetdt", 1, "card-header", "d-flex-cen", "justify-content-between", "collapsed"], ["clas", "card-title"], ["title", "Collapse Details", "id", "minusc", 1, "text-muted", "text-hover-info", "mr-3"], [1, "far", "fa-minus-square", "mr-2"], [1, "card-body", "px-0", "pt-0"], [1, "center-data", "collapse", "show", "meetdt", "p-3"], [1, "meet-icon"], ["aria-hidden", "true", 1, "side-icns"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "viewBox", "0 0 24 24", 1, "svg-icn"], ["d", "M13 21V23H11V21H3C2.44772 21 2 20.5523 2 20V6H22V20C22 20.5523 21.5523 21 21 21H13ZM4 19H20V8H4V19ZM13 10H18V12H13V10ZM13 14H18V16H13V14ZM9 10V13H12C12 14.6569 10.6569 16 9 16C7.34315 16 6 14.6569 6 13C6 11.3431 7.34315 10 9 10ZM2 3H22V5H2V3Z"], [1, "colps-data"], [1, "mt-3"], ["data-toggle", "collapse", "href", ".meetdt", "role", "button", "aria-expanded", "false", "aria-controls", "meetdt", 1, "btn", "btn-sm", "btn-info", "mt-3"], [1, "collapse", "meetdt"], ["id", "location", "class", "eve-area", 4, "ngIf"], ["id", "", "class", "eve-area", 4, "ngIf"], ["id", "userlength", 1, "eve-area"], [1, "left-icon"], ["focusable", "false", "width", "20", "height", "20", "viewBox", "0 0 24 24", 1, "svg-icn"], ["d", "M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z"], [1, "rgt-des"], [1, "main-s"], ["id", "userlist", "class", "avar-div", 4, "ngIf"], ["id", "project", "class", "eve-area", 4, "ngIf"], [1, "side-div"], ["class", "d-flex align-items-center", 4, "ngFor", "ngForOf"], ["id", "portfolio", "class", "eve-area", 4, "ngIf"], ["id", "dms", "class", "eve-area py-2", 4, "ngIf"], ["id", "desc", "class", "eve-area py-2", 4, "ngIf"], ["id", "", "class", "eve-area py-2", 4, "ngIf"], ["id", "cardmain", 1, ""], [1, "card", "card-mid", "flex-1", "mt-3"], [1, "card-header", "d-flex-cen", "justify-content-between"], ["clas", "card-title", "data-toggle", "collapse", "href", ".meetdt", "role", "button", "aria-expanded", "false", "aria-controls", "meetdt"], [1, "side-acns"], [1, "mr-3", 3, "click"], ["src", "assets/images/dms-logo.png", 1, "hed-icn", "dms-icn"], [1, "text-info", 3, "click"], ["src", "assets/images/action.png", 1, "hed-icn"], [1, "card-body"], [1, "notes-section"], ["id", "Descrip_Name", 1, "form-group"], [1, "cus-lbl"], [3, "ngModel", "config", "ngModelChange"], [1, "action-section"], [1, "todo-main"], [1, "task-header"], [1, "task-header-title"], [1, "task-tools"], [1, "task-count"], [1, "task-form"], ["id", "todo-input", "name", "text", "placeholder", "Add a new task...", "autofocus", "true", 1, "task-input", 3, "ngModel", "ngModelChange", "keyup.enter"], ["id", "btn1", 1, "task-button", 3, "click"], ["class", "todo-list", 4, "ngFor", "ngForOf"], [1, "card-footer", "text-right"], [1, "btn", "btn-info", "btn-sm", "mr-2"], [1, "btn", "btn-secondary", "btn-sm", "mr-2"], ["id", "location", 1, "eve-area"], ["focusable", "false", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "svg-icn"], ["d", "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"], ["cx", "12", "cy", "9", "r", "2.5"], ["target", "\u201D_blank\u201D", 3, "href"], ["id", "", 1, "eve-area"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"], ["id", "userlist", 1, "avar-div"], [1, "d-flex", "align-items-center"], [1, "form-check", "form-check-custom", "form-check-solid"], ["type", "checkbox", "id", "flexCheckChecked5", 1, "form-check-input", "ps-1", 3, "value", "checked", "ngModel", "ngModelChange", "click"], [1, "px-2", "position-relative"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 192 192", "enable-background", "new 0 0 192 192", "width", "24px", "height", "24px", 2, "width", "20px"], ["fill", "#E0E0E0", "d", "M96,0C43.01,0,0,43.01,0,96s43.01,96,96,96s96-43.01,96-96S148.99,0,96,0z"], ["fill", "#BDBDBD", "d", "M96,85.09c13.28,0,24-10.72,24-24c0-13.28-10.72-24-24-24s-24,10.72-24,24C72,74.37,82.72,85.09,96,85.09z"], ["fill", "#BDBDBD", "d", "M96,99.27c-29.33,0-52.36,14.18-52.36,27.27c11.09,17.06,30.51,28.36,52.36,28.36s41.27-11.3,52.36-28.36C148.36,113.45,125.33,99.27,96,99.27z"], ["fill", "none", "width", "192", "height", "192"], [1, "rgt-des", "ml-2"], ["name", "user", 1, "main-s"], [1, "sub-s", "text-ellp"], ["id", "project", 1, "eve-area"], [1, "fab-icn", "fab", "fa-wpforms"], [1, "main-s", "pro-nm"], [1, "form-check", "form-check-custom", "form-check-solid", "mr-2"], ["type", "checkbox", "id", "flexCheckChecked1", 1, "form-check-input", "ps-1", 3, "value", "checked", "ngModel", "ngModelChange", "click"], ["href", "javascript:void(0)", 3, "click"], ["id", "portfolio", 1, "eve-area"], [1, "fas-icn", "fas", "fa-list"], ["type", "checkbox", "id", "flexCheckChecked2", 1, "form-check-input", "ps-1", 3, "value", "checked", "ngModel", "ngModelChange", "click"], ["id", "dms", 1, "eve-area", "py-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "20", "height", "20", 1, "svg-icn"], ["fill", "none", "d", "M0 0h24v24H0z"], ["d", "M5.455 15L1 18.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455zm-.692-2H16V4H3v10.385L4.763 13zM8 17h10.237L20 18.385V8h1a1 1 0 0 1 1 1v13.5L17.545 19H9a1 1 0 0 1-1-1v-1z"], ["type", "checkbox", "id", "flexCheckChecked3", 1, "form-check-input", "ps-1", 3, "value", "checked", "ngModel", "ngModelChange", "click"], ["id", "desc", 1, "eve-area", "py-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24", 1, "svg-icn"], ["d", "M13 6v15h-2V6H5V4h14v2z"], [1, "main-s", 3, "innerHTML"], ["id", "", 1, "eve-area", "py-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 18 18", "width", "20", "height", "20", 1, "svg-icn"], ["d", "M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"], ["class", "rgt-des", 4, "ngFor", "ngForOf"], [1, "todo-list"], [1, "task-item"], ["type", "checkbox", 1, "task-status"], [1, "task-name"], [1, "task-actions"], [1, "btn-white", "btn", "btn-sm"], [1, "task-btns"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-clockwise"], ["fill-rule", "evenodd", "d", "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"], ["d", "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"], [1, "task-delete", "task-btns"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "aria-hidden", "true", "role", "img", "font-size", "1.5rem", "width", "1em", "height", "1em", "viewBox", "0 0 24 24", 1, "iconify", "iconify--mdi"], ["fill", "currentColor", "d", "M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z"], [1, "task-list"], ["class", "task-empty", 4, "ngIf"], [1, "task-empty"]], template: function MeetingReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MeetingReportComponent_div_1_Template, 104, 24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.EventScheduledjson);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_9__.AngularEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: [".meet-card[_ngcontent-%COMP%]{\r\n    border-radius: 10px;\r\n}\r\n.meet-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:first-child {\r\n    border-radius: 10px 10px 0 0;\r\n}\r\nh5.card-ttle[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    color: #3c4043;\r\n}\r\n.header2[_ngcontent-%COMP%] {\r\n    padding: 40px 40px;\r\n    background-color: #f7f8fa;\r\n    border-bottom: 1px solid #ebedf2;\r\n    \r\n}\r\n.card-body2[_ngcontent-%COMP%]{\r\n    background-color: #f1f5f9;\r\n}\r\n.title-right[_ngcontent-%COMP%]{\r\n    padding-top:6px;\r\n}\r\n.main-title[_ngcontent-%COMP%]{       \r\n    width: 100%;\r\n    position: relative;\r\n    display: flex;\r\n    min-height: 32px;\r\n    padding-right: 16px;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    transition: background-color 100ms linear; \r\n    min-height: 32px;\r\n    margin-bottom: 12px;\r\n}\r\n.boxcl-div[_ngcontent-%COMP%]{\r\n    color: #5f6368;\r\n    padding-left: 3px;\r\n    width: 45px;\r\n    box-flex: 0;\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n    align-items: center;\r\n    max-height: 36px;\r\n    max-height: 36px;\r\n    align-self: stretch;\r\n    display: flex;\r\n}\r\n.box-cl[_ngcontent-%COMP%]{\r\n    border-radius: 40px;\r\n    height: 14px;\r\n    width: 14px;\r\n    margin-left: 3px;\r\n    margin-top: 3px;\r\n}\r\n.eve-area[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    position: relative;\r\n    display: flex;\r\n    min-height: 32px;\r\n    padding-right: 16px;\r\n    box-sizing: border-box;\r\n    align-items: center;\r\n    outline: none;\r\n    transition: background-color 100ms linear;\r\n}\r\n.eve-modal[_ngcontent-%COMP%]   .scrolly[_ngcontent-%COMP%]{\r\n    overflow: auto;\r\n    overflow-x: hidden;\r\n}\r\n.rgt-des[_ngcontent-%COMP%]{\r\n    padding-bottom: 6px;\r\n    padding-top: 6px;\r\n    box-flex: 1;\r\n    flex-grow: 1;\r\n    display: block;\r\n    overflow: auto;\r\n}\r\n.left-icon[_ngcontent-%COMP%]{\r\n    color: #5f6368;\r\n    padding-left: 3px;\r\n    padding-right: 17px;\r\n    width: 45px;\r\n    max-height: 52px;\r\n    display: flex;\r\n    align-items: center;\r\n    align-self: stretch;\r\n}\r\n.tool-span[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.svg-icn[_ngcontent-%COMP%]{\r\n    fill: #5f6368;\r\n}\r\n.fas-icn[_ngcontent-%COMP%]{\r\n    color: #5f6368;\r\n    font-size: 16px;\r\n}\r\n.fab-icn[_ngcontent-%COMP%]{\r\n    color: #1c1e21;\r\n    font-size: 19px;\r\n}\r\n.text-ellp[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.title-main[_ngcontent-%COMP%]{\r\n    font-family: \"Google Sans\",Roboto,Arial,sans-serif;\r\n    font-size: 22px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #3c4043;\r\n    max-height: 56px;\r\n    overflow-wrap: break-word;\r\n    word-wrap: break-word;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n}\r\n.title-day[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    letter-spacing: .2px;\r\n    line-height: 20px;\r\n    color: #3c4043;\r\n}\r\n.day-dot[_ngcontent-%COMP%]{\r\n    margin: 0 8px;\r\n    font-weight: 700;\r\n\r\n}\r\n.main-s[_ngcontent-%COMP%]{    \r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    letter-spacing: .2px;\r\n    line-height: 20px;\r\n    color: #3c4043;\r\n}\r\n.sub-s[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    letter-spacing: .3px;\r\n    line-height: 18px;\r\n    color: #5f6368;\r\n}\r\n.avar-div[_ngcontent-%COMP%], .side-div[_ngcontent-%COMP%]{\r\n    padding-left: 54px;\r\n}\r\n.card-mid[_ngcontent-%COMP%]   .eve-area[_ngcontent-%COMP%]:not(:first-child){\r\n    border-top: 1px solid #ebedf2;\r\n}\r\n.card-mid[_ngcontent-%COMP%]   .eve-area[_ngcontent-%COMP%]{\r\n    padding: 7px 20px;\r\n}\r\n.grey-bg[_ngcontent-%COMP%]{\r\n    background: #d8dadc;\r\n    height: 100vh;\r\n}\r\n.form-check-input[_ngcontent-%COMP%] {\r\n    vertical-align: text-top;\r\n    cursor: pointer;\r\n    border-radius: 4px;\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 11' width='13' height='11' fill='none'%3e%3cpath d='M11.0426 1.02893C11.3258 0.695792 11.8254 0.655283 12.1585 0.938451C12.4917 1.22162 12.5322 1.72124 12.249 2.05437L5.51985 9.97104C5.23224 10.3094 4.72261 10.3451 4.3907 10.05L0.828197 6.88335C0.50141 6.59288 0.471975 6.09249 0.762452 5.7657C1.05293 5.43891 1.55332 5.40948 1.88011 5.69995L4.83765 8.32889L11.0426 1.02893Z' fill='%23FFFFFF'/%3e%3c/svg%3e\");\r\n}\r\n.ps-1[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    float: unset;\r\n    margin: 0 !important;\r\n}\r\nimg.hed-icn[_ngcontent-%COMP%] {\r\n    width: 24px;\r\n}\r\nimg.dms-icn[_ngcontent-%COMP%] {\r\n    width: 22px;\r\n}\r\n.head-icns[_ngcontent-%COMP%]{\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n.cards-main[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n.card-side[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    display: none;\r\n}\r\n.cards-main[_ngcontent-%COMP%]   .card-side[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n.side-acns[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.pend-btn[_ngcontent-%COMP%]{\r\n    width: max-content;\r\n    color: #fff;\r\n    background-color: #2c3e50 !important;\r\n    border-color: #2c3e50 !important;\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n    background-color: transparent;\r\n    border: 1px solid transparent;\r\n    padding: 0.4em 0.65em;\r\n    font-size: 1em;\r\n    line-height: 1.5;\r\n    border-radius: 0.25em;\r\n    cursor: pointer;\r\n}\r\n.pend-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    fill: #fff;\r\n    width: 18px;\r\n    height: 18px;\r\n}\r\n.center-data[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n.center-data[_ngcontent-%COMP%]   .meet-icon[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    padding: 0;\r\n    color: #5f6368;\r\n}\r\n.center-data[_ngcontent-%COMP%]   svg.svg-icn[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n#minusc[_ngcontent-%COMP%]{\r\n    display: block;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   #minusc[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n.todo-main[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: auto;\r\n    background-color: #fff;\r\n    font-family: var(--font);\r\n    border-radius: 5px;\r\n    font-size: 15px;\r\n    overflow: hidden;\r\n    color: #455963;\r\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);\r\n  }\r\n.todo-list[_ngcontent-%COMP%] {\r\n    max-height: 60vh;\r\n    overflow: auto;\r\n  }\r\n.task-status[_ngcontent-%COMP%] {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 18px;\r\n    height: 18px;\r\n    cursor: pointer;\r\n    border: 2px solid #bbbdc7;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    margin-right: 10px;\r\n    position: relative;\r\n  }\r\n.task-status[_ngcontent-%COMP%]:checked {\r\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='405.272' height='405.272'%3e%3cpath d='M393.401 124.425L179.603 338.208c-15.832 15.835-41.514 15.835-57.361 0L11.878 227.836c-15.838-15.835-15.838-41.52 0-57.358 15.841-15.841 41.521-15.841 57.355-.006l81.698 81.699L336.037 67.064c15.841-15.841 41.523-15.829 57.358 0 15.835 15.838 15.835 41.514.006 57.361z' fill='%23fff'/%3e%3c/svg%3e\");\r\n    background-size: 10px;\r\n    background-color: #4acea3;\r\n    border-color: #38bb90;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n  }\r\n.task-delete[_ngcontent-%COMP%] {\r\n    margin-left: 8px;\r\n  }\r\n.task-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    padding: 12px 20px;\r\n  }\r\n.task-item[_ngcontent-%COMP%]    + .task-item[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #eef0f5;\r\n  }\r\n.task-item[_ngcontent-%COMP%]:hover {\r\n    background-color: #f6fbff;\r\n  }\r\n.task-name[_ngcontent-%COMP%] {\r\n    margin-right: auto;\r\n    flex: 1;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    margin-bottom: 0;\r\n    line-height: 26px;\r\n  }\r\n.task-item.is-completed[_ngcontent-%COMP%]    > .task-name[_ngcontent-%COMP%] {\r\n    -webkit-text-decoration: line-through;\r\n    text-decoration: line-through;\r\n  }\r\n.task-item.is-completed[_ngcontent-%COMP%] {\r\n    background-color: rgba(74, 206, 163, 0.1);\r\n  }\r\n.task-header-title[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    padding: 20px 20px 6px 20px;\r\n  }\r\n.task-tools[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    align-items: flex-start;\r\n    padding: 0 20px;\r\n  }\r\n.task-filter[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    padding: 3px 8px;\r\n    background: 0;\r\n    font-size: 14px;\r\n    line-height: 1;\r\n    cursor: pointer;\r\n    font-family: var(--font);\r\n    color: #8a9ca5;\r\n    border-radius: 20px;\r\n  }\r\n.task-filter.is-active[_ngcontent-%COMP%] {\r\n    background-color: #7996a5;\r\n    color: #fff;\r\n  }\r\n.task-count[_ngcontent-%COMP%] {\r\n    color: #8a9ca5;\r\n    font-size: 14px;\r\n  }\r\n.task-form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-top: 10px;\r\n  }\r\n.task-input[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    font-size: 16px;\r\n    font-family: var(--font);\r\n    padding: 10px 20px;\r\n    border: 0;\r\n    box-shadow: 0 -1px 0 #e2e4ea inset;\r\n    color: #455963;\r\n  }\r\n.task-input[_ngcontent-%COMP%]::placeholder {\r\n    color: #a8b5bb;\r\n  }\r\n.task-input[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 -1px 0 #bdcdd6 inset;\r\n    outline: none;\r\n  }\r\n.task-button[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n.task-btns[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background: transparent;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    margin-left: 8px;\r\n  }\r\n.task-btns[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    color: #737373;\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 24px;\r\n    max-width: 24px;\r\n    vertical-align: middle;\r\n}\r\n.task-delete[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\r\n    color: #dc4771;\r\n}\r\n.task-actions[_ngcontent-%COMP%]{\r\n    display: none;\r\n    align-items: center;\r\n}\r\n.task-item[_ngcontent-%COMP%]:hover    > .task-actions[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n.task-empty[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg fill='%23f4f4f4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 486.463 486.463'%3e%3cpath d='M243.225 333.382c-13.6 0-25 11.4-25 25s11.4 25 25 25c13.1 0 25-11.4 24.4-24.4.6-14.3-10.7-25.6-24.4-25.6z'/%3e%3cpath d='M474.625 421.982c15.7-27.1 15.8-59.4.2-86.4l-156.6-271.2c-15.5-27.3-43.5-43.5-74.9-43.5s-59.4 16.3-74.9 43.4l-156.8 271.5c-15.6 27.3-15.5 59.8.3 86.9 15.6 26.8 43.5 42.9 74.7 42.9h312.8c31.3 0 59.4-16.3 75.2-43.6zm-34-19.6c-8.7 15-24.1 23.9-41.3 23.9h-312.8c-17 0-32.3-8.7-40.8-23.4-8.6-14.9-8.7-32.7-.1-47.7l156.8-271.4c8.5-14.9 23.7-23.7 40.9-23.7 17.1 0 32.4 8.9 40.9 23.8l156.7 271.4c8.4 14.6 8.3 32.2-.3 47.1z'/%3e%3cpath d='M237.025 157.882c-11.9 3.4-19.3 14.2-19.3 27.3.6 7.9 1.1 15.9 1.7 23.8 1.7 30.1 3.4 59.6 5.1 89.7.6 10.2 8.5 17.6 18.7 17.6s18.2-7.9 18.7-18.2c0-6.2 0-11.9.6-18.2 1.1-19.3 2.3-38.6 3.4-57.9.6-12.5 1.7-25 2.3-37.5 0-4.5-.6-8.5-2.3-12.5-5.1-11.2-17-16.9-28.9-14.1z'/%3e%3c/svg%3e\");\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    font-weight: 500;\r\n    font-size: 18px;\r\n    background-size: 80px;\r\n  }\r\n.btn-white[_ngcontent-%COMP%]{\r\n    background-color: #fff;\r\n    border: 1px dashed #ccc;\r\n    border-radius: 40px;\r\n    color: #737373;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    height: 26px;\r\n    margin: 0 4px;\r\n    padding: 0 10px 0 8px;\r\n  }\r\n@media (max-width: 600px) {\r\n    .task-actions[_ngcontent-%COMP%] {\r\n      display: block;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmctcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQywwRUFBMEU7QUFDOUU7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUdsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUVuQixzQkFBc0I7SUFDdEIsYUFBYTtJQUViLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFdBQVc7SUFFWCxXQUFXO0lBRVgsWUFBWTtJQUVaLGNBQWM7SUFFZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFHbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFFbkIsc0JBQXNCO0lBRXRCLG1CQUFtQjtJQUNuQixhQUFhO0lBRWIseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBRWhCLFdBQVc7SUFFWCxZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtEQUFrRDtJQUNsRCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDRmQUE0ZjtBQUNoZ0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHdDQUF3QztFQUMxQztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7QUFFQTtJQUNFLHdCQUF3QjtJQUV4QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsMmJBQTJiO0lBQzNiLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QiwyQkFBMkI7RUFDN0I7QUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSw2QkFBNkI7RUFDL0I7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxxQ0FBcUM7SUFDckMsNkJBQTZCO0VBQy9CO0FBRUE7SUFDRSx5Q0FBeUM7RUFDM0M7QUFFQTtJQUNFLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtFQUM3QjtBQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7QUFFQTtJQUNFLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztFQUNiO0FBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsT0FBTztJQUNQLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxrQ0FBa0M7SUFDbEMsY0FBYztFQUNoQjtBQVVBO0lBQ0UsY0FBYztFQUNoQjtBQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLGFBQWE7RUFDZjtBQUVBO0lBQ0UsYUFBYTtFQUNmO0FBRUE7SUFDRSxTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFFQTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw0OUJBQTQ5QjtJQUM1OUIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRTtNQUNFLGNBQWM7SUFDaEI7RUFDRiIsImZpbGUiOiJtZWV0aW5nLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lZXQtY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLm1lZXQtY2FyZCAuY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxufVxyXG5oNS5jYXJkLXR0bGV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMzYzQwNDM7XHJcbn1cclxuLmhlYWRlcjIge1xyXG4gICAgcGFkZGluZzogNDBweCA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlZGYyO1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNmOWE4ZDQsI2Q4YjRmZSAsIzgxOGNmNik7ICovXHJcbn1cclxuLmNhcmQtYm9keTJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xyXG59XHJcbi50aXRsZS1yaWdodHtcclxuICAgIHBhZGRpbmctdG9wOjZweDtcclxufVxyXG4ubWFpbi10aXRsZXsgICAgICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi1oZWlnaHQ6IDMycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBsaW5lYXI7IFxyXG4gICAgbWluLWhlaWdodDogMzJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuLmJveGNsLWRpdntcclxuICAgIGNvbG9yOiAjNWY2MzY4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XHJcbiAgICBib3gtZmxleDogMDtcclxuICAgIC13ZWJraXQtZmxleC1ncm93OiAwO1xyXG4gICAgZmxleC1ncm93OiAwO1xyXG4gICAgLXdlYmtpdC1mbGV4LXNocmluazogMDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDM2cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNnB4O1xyXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmJveC1jbHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuLmV2ZS1hcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGxpbmVhcjtcclxufVxyXG4uZXZlLW1vZGFsIC5zY3JvbGx5e1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuLnJndC1kZXN7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICBib3gtZmxleDogMTtcclxuICAgIC13ZWJraXQtZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4ubGVmdC1pY29ue1xyXG4gICAgY29sb3I6ICM1ZjYzNjg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE3cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIG1heC1oZWlnaHQ6IDUycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbn1cclxuLnRvb2wtc3BhbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc3ZnLWljbntcclxuICAgIGZpbGw6ICM1ZjYzNjg7XHJcbn1cclxuLmZhcy1pY257XHJcbiAgICBjb2xvcjogIzVmNjM2ODtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uZmFiLWljbntcclxuICAgIGNvbG9yOiAjMWMxZTIxO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcbi50ZXh0LWVsbHB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi50aXRsZS1tYWlue1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIixSb2JvdG8sQXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGNvbG9yOiAjM2M0MDQzO1xyXG4gICAgbWF4LWhlaWdodDogNTZweDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcbi50aXRsZS1kYXl7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4ycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjM2M0MDQzO1xyXG59XHJcbi5kYXktZG90e1xyXG4gICAgbWFyZ2luOiAwIDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG59XHJcbi5tYWluLXN7ICAgIFxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzNjNDA0MztcclxufVxyXG4uc3ViLXN7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4zcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGNvbG9yOiAjNWY2MzY4O1xyXG59XHJcbi5hdmFyLWRpdiwgLnNpZGUtZGl2e1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1NHB4O1xyXG59XHJcblxyXG4uY2FyZC1taWQgLmV2ZS1hcmVhOm5vdCg6Zmlyc3QtY2hpbGQpe1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYmVkZjI7XHJcbn1cclxuLmNhcmQtbWlkIC5ldmUtYXJlYXtcclxuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xyXG59XHJcbi5ncmV5LWJne1xyXG4gICAgYmFja2dyb3VuZDogI2Q4ZGFkYztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLmZvcm0tY2hlY2staW5wdXQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMyAxMScgd2lkdGg9JzEzJyBoZWlnaHQ9JzExJyBmaWxsPSdub25lJyUzZSUzY3BhdGggZD0nTTExLjA0MjYgMS4wMjg5M0MxMS4zMjU4IDAuNjk1NzkyIDExLjgyNTQgMC42NTUyODMgMTIuMTU4NSAwLjkzODQ1MUMxMi40OTE3IDEuMjIxNjIgMTIuNTMyMiAxLjcyMTI0IDEyLjI0OSAyLjA1NDM3TDUuNTE5ODUgOS45NzEwNEM1LjIzMjI0IDEwLjMwOTQgNC43MjI2MSAxMC4zNDUxIDQuMzkwNyAxMC4wNUwwLjgyODE5NyA2Ljg4MzM1QzAuNTAxNDEgNi41OTI4OCAwLjQ3MTk3NSA2LjA5MjQ5IDAuNzYyNDUyIDUuNzY1N0MxLjA1MjkzIDUuNDM4OTEgMS41NTMzMiA1LjQwOTQ4IDEuODgwMTEgNS42OTk5NUw0LjgzNzY1IDguMzI4ODlMMTEuMDQyNiAxLjAyODkzWicgZmlsbD0nJTIzRkZGRkZGJy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG59XHJcbi5wcy0xe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IHVuc2V0O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuaW1nLmhlZC1pY24ge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbn1cclxuaW1nLmRtcy1pY24ge1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbn1cclxuLmhlYWQtaWNuc3tcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcbi5jYXJkcy1tYWluIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmNhcmQtc2lkZXtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jYXJkcy1tYWluIC5jYXJkLXNpZGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5zaWRlLWFjbnMgYXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucGVuZC1idG57XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzJjM2U1MCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMC40ZW0gMC42NWVtO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5wZW5kLWJ0biBzdmcge1xyXG4gICAgZmlsbDogI2ZmZjtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uY2VudGVyLWRhdGEge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2VudGVyLWRhdGEgLm1lZXQtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb2xvcjogIzVmNjM2ODtcclxufVxyXG4uY2VudGVyLWRhdGEgc3ZnLnN2Zy1pY24ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbiNtaW51c2N7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uY29sbGFwc2VkICNtaW51c2N7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udG9kby1tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjb2xvcjogIzQ1NTk2MztcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG4gIFxyXG4gIC50b2RvLWxpc3Qge1xyXG4gICAgbWF4LWhlaWdodDogNjB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAudGFzay1zdGF0dXMge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JiYmRjNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLXN0YXR1czpjaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDUuMjcyJyBoZWlnaHQ9JzQwNS4yNzInJTNlJTNjcGF0aCBkPSdNMzkzLjQwMSAxMjQuNDI1TDE3OS42MDMgMzM4LjIwOGMtMTUuODMyIDE1LjgzNS00MS41MTQgMTUuODM1LTU3LjM2MSAwTDExLjg3OCAyMjcuODM2Yy0xNS44MzgtMTUuODM1LTE1LjgzOC00MS41MiAwLTU3LjM1OCAxNS44NDEtMTUuODQxIDQxLjUyMS0xNS44NDEgNTcuMzU1LS4wMDZsODEuNjk4IDgxLjY5OUwzMzYuMDM3IDY3LjA2NGMxNS44NDEtMTUuODQxIDQxLjUyMy0xNS44MjkgNTcuMzU4IDAgMTUuODM1IDE1LjgzOCAxNS44MzUgNDEuNTE0LjAwNiA1Ny4zNjF6JyBmaWxsPSclMjNmZmYnLyUzZSUzYy9zdmclM2VcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGFjZWEzO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMzhiYjkwO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2stZGVsZXRlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWl0ZW0gKyAudGFzay1pdGVtIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVmMGY1O1xyXG4gIH1cclxuICBcclxuICAudGFzay1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmZiZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLW5hbWUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZmxleDogMTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWl0ZW0uaXMtY29tcGxldGVkID4gLnRhc2stbmFtZSB7XHJcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWl0ZW0uaXMtY29tcGxldGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDIwNiwgMTYzLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAudGFzay1oZWFkZXItdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCA2cHggMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2stdG9vbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gIH1cclxuICBcclxuICAudGFzay1maWx0ZXIge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogM3B4IDhweDtcclxuICAgIGJhY2tncm91bmQ6IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcclxuICAgIGNvbG9yOiAjOGE5Y2E1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2stZmlsdGVyLmlzLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5NmE1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWNvdW50IHtcclxuICAgIGNvbG9yOiAjOGE5Y2E1O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAudGFzay1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAudGFzay1pbnB1dCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAtMXB4IDAgI2UyZTRlYSBpbnNldDtcclxuICAgIGNvbG9yOiAjNDU1OTYzO1xyXG4gIH1cclxuICBcclxuICAudGFzay1pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2E4YjViYjtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2staW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYThiNWJiO1xyXG4gIH1cclxuICBcclxuICAudGFzay1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNhOGI1YmI7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWlucHV0OmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTFweCAwICNiZGNkZDYgaW5zZXQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAudGFzay1idXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2stYnRucyB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgLnRhc2stYnRucyBzdmcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6ICM3MzczNzM7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1heC13aWR0aDogMjRweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnRhc2stZGVsZXRlIHN2Z3tcclxuICAgIGNvbG9yOiAjZGM0NzcxO1xyXG59XHJcbi50YXNrLWFjdGlvbnN7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4gIC50YXNrLWl0ZW06aG92ZXIgPiAudGFzay1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWVtcHR5IHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNjc3ZnIGZpbGw9JyUyM2Y0ZjRmNCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDg2LjQ2MyA0ODYuNDYzJyUzZSUzY3BhdGggZD0nTTI0My4yMjUgMzMzLjM4MmMtMTMuNiAwLTI1IDExLjQtMjUgMjVzMTEuNCAyNSAyNSAyNWMxMy4xIDAgMjUtMTEuNCAyNC40LTI0LjQuNi0xNC4zLTEwLjctMjUuNi0yNC40LTI1LjZ6Jy8lM2UlM2NwYXRoIGQ9J000NzQuNjI1IDQyMS45ODJjMTUuNy0yNy4xIDE1LjgtNTkuNC4yLTg2LjRsLTE1Ni42LTI3MS4yYy0xNS41LTI3LjMtNDMuNS00My41LTc0LjktNDMuNXMtNTkuNCAxNi4zLTc0LjkgNDMuNGwtMTU2LjggMjcxLjVjLTE1LjYgMjcuMy0xNS41IDU5LjguMyA4Ni45IDE1LjYgMjYuOCA0My41IDQyLjkgNzQuNyA0Mi45aDMxMi44YzMxLjMgMCA1OS40LTE2LjMgNzUuMi00My42em0tMzQtMTkuNmMtOC43IDE1LTI0LjEgMjMuOS00MS4zIDIzLjloLTMxMi44Yy0xNyAwLTMyLjMtOC43LTQwLjgtMjMuNC04LjYtMTQuOS04LjctMzIuNy0uMS00Ny43bDE1Ni44LTI3MS40YzguNS0xNC45IDIzLjctMjMuNyA0MC45LTIzLjcgMTcuMSAwIDMyLjQgOC45IDQwLjkgMjMuOGwxNTYuNyAyNzEuNGM4LjQgMTQuNiA4LjMgMzIuMi0uMyA0Ny4xeicvJTNlJTNjcGF0aCBkPSdNMjM3LjAyNSAxNTcuODgyYy0xMS45IDMuNC0xOS4zIDE0LjItMTkuMyAyNy4zLjYgNy45IDEuMSAxNS45IDEuNyAyMy44IDEuNyAzMC4xIDMuNCA1OS42IDUuMSA4OS43LjYgMTAuMiA4LjUgMTcuNiAxOC43IDE3LjZzMTguMi03LjkgMTguNy0xOC4yYzAtNi4yIDAtMTEuOS42LTE4LjIgMS4xLTE5LjMgMi4zLTM4LjYgMy40LTU3LjkuNi0xMi41IDEuNy0yNSAyLjMtMzcuNSAwLTQuNS0uNi04LjUtMi4zLTEyLjUtNS4xLTExLjItMTctMTYuOS0yOC45LTE0LjF6Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwcHg7XHJcbiAgfVxyXG4gIC5idG4td2hpdGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgY29sb3I6ICM3MzczNzM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgbWFyZ2luOiAwIDRweDtcclxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDhweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAudGFzay1hY3Rpb25zIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 8347:
/*!**************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/meeting-report/meeting-report.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetingReportModule": () => (/* binding */ MeetingReportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _meeting_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meeting-report.component */ 5131);
/* harmony import */ var _meeting_report_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meeting-report-routing.module */ 76187);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kolkov/angular-editor */ 167);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






class MeetingReportModule {
}
MeetingReportModule.ɵfac = function MeetingReportModule_Factory(t) { return new (t || MeetingReportModule)(); };
MeetingReportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MeetingReportModule });
MeetingReportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _meeting_report_routing_module__WEBPACK_IMPORTED_MODULE_1__.MeetingReportRoutingModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_4__.AngularEditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MeetingReportModule, { declarations: [_meeting_report_component__WEBPACK_IMPORTED_MODULE_0__.MeetingReportComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _meeting_report_routing_module__WEBPACK_IMPORTED_MODULE_1__.MeetingReportRoutingModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_4__.AngularEditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 44316:
/*!********************************************!*\
  !*** ./src/app/_Models/attachments-dto.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachmentsDTO": () => (/* binding */ AttachmentsDTO)
/* harmony export */ });
class AttachmentsDTO {
}


/***/ }),

/***/ 26399:
/*!*************************************!*\
  !*** ./src/app/_Models/link-dto.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkDTO": () => (/* binding */ LinkDTO)
/* harmony export */ });
class LinkDTO {
}


/***/ }),

/***/ 33529:
/*!*******************************************!*\
  !*** ./src/app/_Services/link.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkService": () => (/* binding */ LinkService)
/* harmony export */ });
/* harmony import */ var _Models_link_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_Models/link-dto */ 26399);
/* harmony import */ var _Models_attachments_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_Models/attachments-dto */ 44316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _apiurl_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiurl.service */ 77983);





class LinkService {
    constructor(http, commonUrl) {
        this.http = http;
        this.commonUrl = commonUrl;
        this.DMS_URL = "https://cswebapps.com/dmsapi/api/";
        //readonly DMS_URL = sessionStorage.getItem("_AppUrl");
        //EP Common URL
        this.rootUrl = this.commonUrl.apiurl;
        this.ObjLinkDTO = new _Models_link_dto__WEBPACK_IMPORTED_MODULE_0__.LinkDTO();
        this.ObjAttachmentsDTO = new _Models_attachments_dto__WEBPACK_IMPORTED_MODULE_1__.AttachmentsDTO();
    }
    GetApplicationDetails() {
        return this.http.post(this.rootUrl + "ApplicationLinkAPI/NewGetApplication_Details", this.ObjLinkDTO);
    }
    GetMemosByEmployeeCode(CurrentUser) {
        this.ObjLinkDTO.EmployeeCode = CurrentUser;
        return this.http.post(this.DMS_URL + "LatestCommunicationAPI/NewGetMemosByEmployeeCode", this.ObjLinkDTO);
    }
    InsertMemosOn_ProjectCode(projCode, appId, memoId, UserId) {
        // console.log("In Service ---->",projCode,appId,memoId,UserId);
        this.ObjLinkDTO.Project_Code = projCode;
        this.ObjLinkDTO.Application_Id = appId;
        this.ObjLinkDTO.JsonData = memoId;
        this.ObjLinkDTO.Created_By = UserId;
        // console.log("Details Parameters--->",projCode,appId,memoId,UserId);
        return this.http.post(this.rootUrl + "ApplicationLinkAPI/NewInsertMemobyProjectCode", this.ObjLinkDTO);
    }
    _GetOnlyMemoIdsByProjectCode(projectCode) {
        this.ObjLinkDTO.Project_Code = projectCode;
        return this.http.post(this.rootUrl + "ApplicationLinkAPI/NewGetOnlyMemoIdsByProjectCode", this.ObjLinkDTO);
    }
    _GetMemosSubject(JsonString) {
        //console.log("Sending JsonFormat----->",JsonString);
        this.ObjLinkDTO.MemosJSON = JsonString;
        // console.log("ObjLinkDTO----->",this.ObjLinkDTO);
        //let Url="https://cswebapps.com/dmsapi/api/LatestCommunicationAPI/NewGetMemosSubject"
        return this.http.post(this.DMS_URL + "LatestCommunicationAPI/NewGetMemosSubject", this.ObjLinkDTO);
    }
    _GetAttachments(EmpNo, ProjCode, ProjBlock) {
        this.ObjAttachmentsDTO.EmpNo = EmpNo;
        this.ObjAttachmentsDTO.ProjectCode = ProjCode;
        this.ObjAttachmentsDTO.ProjectType = ProjBlock;
        return this.http.post(this.rootUrl + "Notification/NewGetAttachmentsFiles", this.ObjAttachmentsDTO);
    }
}
LinkService.ɵfac = function LinkService_Factory(t) { return new (t || LinkService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_apiurl_service__WEBPACK_IMPORTED_MODULE_2__.ApiurlService)); };
LinkService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LinkService, factory: LinkService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app__LayoutDashboard_meeting-report_meeting-report_module_ts.js.map