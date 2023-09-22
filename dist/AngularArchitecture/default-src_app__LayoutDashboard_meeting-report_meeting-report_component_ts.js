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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var src_app_Services_calender_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_Services/calender.service */ 21041);
/* harmony import */ var src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_Services/link.service */ 33529);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ 77585);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @kolkov/angular-editor */ 167);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 57822);






















const _c0 = ["myTextarea"];
function MeetingReportComponent_div_1_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function MeetingReportComponent_div_1_ng_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r34, "");
} }
function MeetingReportComponent_div_1_ng_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item1_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item1_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item1_r36, "");
} }
function MeetingReportComponent_div_1_div_58_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 228)(1, "button", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_58_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r37.Slide_meeting()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "svg", 231)(4, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "74 all");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "path", 232)(7, "rect", 233)(8, "rect", 234)(9, "rect", 235)(10, "path", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Previous Meeting Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function MeetingReportComponent_div_1_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 237)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "svg", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "path", 239)(5, "circle", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 16)(7, "div", 45)(8, "div", 17)(9, "a", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("href", item_r4.Addressurl, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r4.Location);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r4.FullAddress_loc);
} }
function MeetingReportComponent_div_1_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 242)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "svg", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "path", 244)(5, "path", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 16)(7, "div", 45)(8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 242)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "svg", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "path", 244)(5, "path", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 16)(7, "div", 45)(8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 246)(1, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "svg", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "path", 249)(4, "path", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function MeetingReportComponent_div_1_div_87_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_87_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r40.Updating_Adminmeeting(ctx_r40.Emp_No)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Mark as admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function MeetingReportComponent_div_1_div_98_ng_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r43.Emp_No);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r43.DisplayName, "");
} }
function MeetingReportComponent_div_1_div_98_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 252)(1, "span", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 255)(4, "div", 256)(5, "lable", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Add Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ng-select", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_98_Template_ng_select_click_7_listener($event) { return $event.stopPropagation(); })("ngModelChange", function MeetingReportComponent_div_1_div_98_Template_ng_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r45.ngEmployeeDropdown1 = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, MeetingReportComponent_div_1_div_98_ng_option_8_Template, 2, 2, "ng-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 155)(10, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "button", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_98_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r47.Adduser_meetingreport()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("multiple", true)("ngModel", ctx_r15.ngEmployeeDropdown1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r15._EmployeeListForDropdown);
} }
function MeetingReportComponent_div_1_div_99_div_1__svg_svg_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "svg", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "path", 273)(2, "path", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function MeetingReportComponent_div_1_div_99_div_1__svg_svg_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "svg", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "path", 275)(2, "path", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function MeetingReportComponent_div_1_div_99_div_1__svg_svg_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "svg", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "path", 277)(2, "path", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function MeetingReportComponent_div_1_div_99_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 246)(1, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "svg", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "path", 281)(4, "path", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function MeetingReportComponent_div_1_div_99_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_99_div_1_div_22_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r57); const _user_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r55.Updating_Adminmeeting(_user_r49.stringval)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Mark as admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function MeetingReportComponent_div_1_div_99_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 171)(1, "div", 259)(2, "input", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_99_div_1_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r58.Online_methoduser($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 261)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "svg", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "path", 263)(7, "path", 264)(8, "path", 265)(9, "rect", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, MeetingReportComponent_div_1_div_99_div_1__svg_svg_11_Template, 3, 0, "svg", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, MeetingReportComponent_div_1_div_99_div_1__svg_svg_12_Template, 3, 0, "svg", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, MeetingReportComponent_div_1_div_99_div_1__svg_svg_13_Template, 3, 0, "svg", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 269)(15, "div", 270)(16, "div", 45)(17, "div", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, MeetingReportComponent_div_1_div_99_div_1_div_21_Template, 7, 0, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, MeetingReportComponent_div_1_div_99_div_1_div_22_Template, 4, 0, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _user_r49 = ctx.$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("id", "flexCheckChecked5_", _user_r49.stringval, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r48.isCheckboxDisabled)("value", _user_r49.stringval)("checked", _user_r49.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _user_r49.Status == "Accepted");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _user_r49.Status == "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _user_r49.Status == "May be" || _user_r49.Status == "Proposed");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_user_r49.TM_DisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", _user_r49.Designation_Name, "/", _user_r49.Com_Name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _user_r49.IsAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _user_r49.IsAdmin == false && ctx_r48.Isadmin == true && ctx_r48.isCheckboxDisabled == false);
} }
function MeetingReportComponent_div_1_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, MeetingReportComponent_div_1_div_99_div_1_Template, 23, 12, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r16.User_Scheduledjson);
} }
function MeetingReportComponent_div_1_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 283)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 16)(5, "div", 45)(6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_102_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 171)(1, "div", 284)(2, "input", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_102_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r61.Online_methodproject($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 16)(4, "div")(5, "div", 17)(6, "a", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_102_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r62); const _pro_r60 = restoredCtx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r63.moreDetails(_pro_r60.stringval)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _pro_r60 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r18.isCheckboxDisabled)("value", _pro_r60.stringval)("checked", _pro_r60.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _pro_r60.Project_Name, "");
} }
function MeetingReportComponent_div_1_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 287)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 16)(5, "div", 45)(6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Portfolios");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_105_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 171)(1, "div", 284)(2, "input", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_105_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r65.Online_methodportfolio($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 16)(4, "div")(5, "div", 17)(6, "a", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_105_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r66); const _prot_r64 = restoredCtx.$implicit; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r67.OnCardClick(_prot_r64.numberval)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _prot_r64 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r20.isCheckboxDisabled)("value", _prot_r64.numberval)("checked", _prot_r64.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _prot_r64.Portfolio_Name, "");
} }
function MeetingReportComponent_div_1_div_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 289)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "path", 117)(5, "path", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 16)(7, "div", 45)(8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "DMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_107_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 171)(1, "div", 284)(2, "input", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_107_div_1_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r71.Online_methoddms($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 16)(4, "div")(5, "div", 17)(6, "a", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_107_div_1_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r72); const itemMemos_r69 = restoredCtx.$implicit; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r73.openUrl(itemMemos_r69.Url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const itemMemos_r69 = ctx.$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r68.isCheckboxDisabled)("value", itemMemos_r69.MailId)("checked", itemMemos_r69.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", itemMemos_r69.Subject, "");
} }
function MeetingReportComponent_div_1_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, MeetingReportComponent_div_1_div_107_div_1_Template, 8, 4, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r22._MemosSubjectList);
} }
function MeetingReportComponent_div_1_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 292)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "svg", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "path", 117)(5, "path", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 16)(7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "div", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", item_r4.Description, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function MeetingReportComponent_div_1_div_109_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 16)(1, "div", 45)(2, "div", 17)(3, "a", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const trt_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("href", trt_r76.url, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](trt_r76.File_Name);
} }
function MeetingReportComponent_div_1_div_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 296)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "svg", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "path", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, MeetingReportComponent_div_1_div_109_div_5_Template, 5, 2, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r24.Attachments_ary);
} }
function MeetingReportComponent_div_1_div_118_ng_container_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 310)(1, "div", 303)(2, "div", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "GD");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 312)(7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "li", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const note_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", note_r79.Emp_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", note_r79.Meeting_notes, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function MeetingReportComponent_div_1_div_118_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, MeetingReportComponent_div_1_div_118_ng_container_15_div_1_Template, 9, 2, "div", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const note_r79 = ctx.$implicit;
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r77.CurrentUser_ID != note_r79.Emp_no);
} }
function MeetingReportComponent_div_1_div_118_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 313)(1, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Meeting notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "angular-editor", 314, 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_div_118_div_16_Template_angular_editor_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r83.Notes_Type = $event); })("keyup", function MeetingReportComponent_div_1_div_118_div_16_Template_angular_editor_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r84); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r85.addBulletPointsOnEnter($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r78.Notes_Type)("config", ctx_r78.config);
} }
function MeetingReportComponent_div_1_div_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 16)(1, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Meeting notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "div", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 301)(6, "div", 302)(7, "div", 303)(8, "div", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "NS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 306)(13, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "li", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, MeetingReportComponent_div_1_div_118_ng_container_15_Template, 2, 1, "ng-container", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, MeetingReportComponent_div_1_div_118_div_16_Template, 5, 2, "div", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", ctx_r25.Notespoint, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r25._userfullname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", ctx_r25.Notes_Type, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r25._meetingNotesAry);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r25.Meetingstatuscom == ctx_r25.Completed);
} }
function MeetingReportComponent_div_1_div_119_ng_container_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 310)(1, "div", 303)(2, "div", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "GD");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 312)(7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "li", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const note_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", note_r88.Emp_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", note_r88.Meeting_notes, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function MeetingReportComponent_div_1_div_119_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, MeetingReportComponent_div_1_div_119_ng_container_15_div_1_Template, 9, 2, "div", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const note_r88 = ctx.$implicit;
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r86.CurrentUser_ID != note_r88.Emp_no);
} }
function MeetingReportComponent_div_1_div_119_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 313)(1, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Meeting notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "angular-editor", 314, 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_div_119_div_16_Template_angular_editor_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r92.Notes_Type = $event); })("keyup", function MeetingReportComponent_div_1_div_119_div_16_Template_angular_editor_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r93); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r94.addBulletPointsOnEnter($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r87.Notes_Type)("config", ctx_r87.config);
} }
function MeetingReportComponent_div_1_div_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 16)(1, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Meeting notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "div", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 301)(6, "div", 302)(7, "div", 303)(8, "div", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "NS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 306)(13, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "li", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, MeetingReportComponent_div_1_div_119_ng_container_15_Template, 2, 1, "ng-container", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, MeetingReportComponent_div_1_div_119_div_16_Template, 5, 2, "div", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", ctx_r26.Notespoint, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r26._userfullname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", ctx_r26.Notes_Type, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r26._meetingNotesAry);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r26.Meetingstatuscom == ctx_r26.Completed);
} }
function MeetingReportComponent_div_1_form_127_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 316)(1, "input", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_form_127_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r95._Demotext = $event); })("keyup.enter", function MeetingReportComponent_div_1_form_127_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r96); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r97.EnterSubmit(ctx_r97._Demotext)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "button", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_form_127_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r96); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r98.EnterSubmit(ctx_r98._Demotext)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Add Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r27._Demotext);
} }
function MeetingReportComponent_div_1_div_129_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "input", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "label", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 322)(5, "span", 323)(6, "mat-icon", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-menu", 325, 326)(10, "button", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_129_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r103); const item_r99 = restoredCtx.$implicit; const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r102.GetProjectTypeList(item_r99.Task_Name, item_r99.Assign_Id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "mat-icon", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Assign Task/Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "button", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_129_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r103); const item_r99 = restoredCtx.$implicit; const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r104.ActionToProject_Click(item_r99.Task_Name, item_r99.Assign_Id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "mat-icon", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "new_label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Add Action To Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "button", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_129_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r103); const item_r99 = restoredCtx.$implicit; const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r105._Deletetask(item_r99.Assign_Id, item_r99.Task_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "svg", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "path", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r99 = ctx.$implicit;
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r99.Task_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matMenuTriggerFor", _r101);
} }
function MeetingReportComponent_div_1_div_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Not found a task");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function MeetingReportComponent_div_1_div_133_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 335)(1, "div", 336)(2, "div", 337)(3, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 340)(6, "div", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 342)(10, "span", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 344)(13, "span", 345)(14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "img", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "span", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, " Assigned Task/Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "mat-icon", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "task_alt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "span", 349)(26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "img", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 351)(32, "span", 352)(33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](35, "div", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "div", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r107 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r107.Task_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 5, item_r107.Creation_Date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r107.AssignedTo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](30, 7, item_r107.Modified_DT), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r107.Status, "");
} }
function MeetingReportComponent_div_1_div_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 333)(1, "label", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Assigned Task/Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, MeetingReportComponent_div_1_div_133_div_3_Template, 37, 9, "div", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r30.ActionedAssigned_Josn);
} }
function MeetingReportComponent_div_1_ng_option_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r108 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r108.Emp_No);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r108.DisplayName, " ");
} }
function MeetingReportComponent_div_1_div_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 355)(1, "button", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "End Meeting");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function MeetingReportComponent_div_1_div_155_Template(rf, ctx) { if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 355)(1, "button", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_155_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r110); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r109.leavemeet($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Leave Meeting");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function MeetingReportComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 123)(1, "div", 124)(2, "div", 125)(3, "div", 45)(4, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Meeting Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 127)(7, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " 12:43 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "i", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 133)(16, "div", 134)(17, "div", 135)(18, "div", 136)(19, "div", 137)(20, "div", 138)(21, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 87)(24, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, MeetingReportComponent_div_1_span_33_Template, 2, 0, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 143)(35, "div", 144)(36, "input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_Template_input_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r112); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](41); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r6.open()); })("dateChange", function MeetingReportComponent_div_1_Template_input_dateChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r112); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r113.selectStartDate($event)); })("ngModelChange", function MeetingReportComponent_div_1_Template_input_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r112); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r114._StartDate = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 146)(38, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](39, "mat-datepicker-toggle", 148)(40, "mat-datepicker", null, 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_Template_div_click_42_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Start Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "ng-select", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_Template_ng_select_ngModelChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r112); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r116.Startts = $event); })("open", function MeetingReportComponent_div_1_Template_ng_select_open_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r112); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r117.onfocus($event)); })("change", function MeetingReportComponent_div_1_Template_ng_select_change_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r112); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r118.addstarttime()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, MeetingReportComponent_div_1_ng_option_46_Template, 2, 2, "ng-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_Template_div_click_47_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "End Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "ng-select", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("open", function MeetingReportComponent_div_1_Template_ng_select_open_50_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r112); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r120.onfocus($event)); })("ngModelChange", function MeetingReportComponent_div_1_Template_ng_select_ngModelChange_50_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r112); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r121.Endtms = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](51, MeetingReportComponent_div_1_ng_option_51_Template, 2, 2, "ng-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 155)(53, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "button", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r112); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r122.updatedateandtime_meetingreport()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](58, MeetingReportComponent_div_1_div_58_Template, 12, 0, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "div", 159)(60, "div", 160)(61, "div", 161)(62, "div", 162)(63, "div", 163)(64, "h5", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, " Meeting Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "div", 165)(67, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](68, MeetingReportComponent_div_1_div_68_Template, 13, 3, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](69, MeetingReportComponent_div_1_div_69_Template, 10, 0, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](70, MeetingReportComponent_div_1_div_70_Template, 10, 0, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "div", 169)(72, "div", 170)(73, "div", 171)(74, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "svg", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](76, "path", 174)(77, "path", 175)(78, "path", 176)(79, "path", 177)(80, "path", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "div", 179)(82, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, "organizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](86, MeetingReportComponent_div_1_div_86_Template, 7, 0, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](87, MeetingReportComponent_div_1_div_87_Template, 4, 0, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "div", 182)(89, "div", 12)(90, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](92, "path", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "div", 16)(94, "div", 184)(95, "div", 45)(96, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](98, MeetingReportComponent_div_1_div_98_Template, 15, 3, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](99, MeetingReportComponent_div_1_div_99_Template, 2, 1, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](100, MeetingReportComponent_div_1_div_100_Template, 8, 0, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](102, MeetingReportComponent_div_1_div_102_Template, 8, 4, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](103, MeetingReportComponent_div_1_div_103_Template, 8, 0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](105, MeetingReportComponent_div_1_div_105_Template, 8, 4, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](106, MeetingReportComponent_div_1_div_106_Template, 10, 0, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](107, MeetingReportComponent_div_1_div_107_Template, 2, 1, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](108, MeetingReportComponent_div_1_div_108_Template, 9, 1, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](109, MeetingReportComponent_div_1_div_109_Template, 6, 1, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "div", 195)(111, "div", 162)(112, "div", 196)(113, "h5", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](114, " Meeting Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](115, "div", 198)(116, "div", 199)(117, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](118, MeetingReportComponent_div_1_div_118_Template, 17, 5, "div", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](119, MeetingReportComponent_div_1_div_119_Template, 17, 5, "div", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "div", 202)(121, "div", 203)(122, "div", 204)(123, "h1", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](124, "Assign Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](125, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](126, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](127, MeetingReportComponent_div_1_form_127_Template, 4, 1, "form", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](129, MeetingReportComponent_div_1_div_129_Template, 23, 2, "div", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](131, MeetingReportComponent_div_1_div_131_Template, 2, 0, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](132, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](133, MeetingReportComponent_div_1_div_133_Template, 4, 1, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](134, "div", 214)(135, "div", 171)(136, "div", 215)(137, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](138, "svg", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](139, "path", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](140, "div", 217)(141, "ng-select", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_Template_ng_select_ngModelChange_141_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r112); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r123.ngEmployeeDropdown = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](142, MeetingReportComponent_div_1_ng_option_142_Template, 2, 2, "ng-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](143, "div", 219)(144, "div", 215)(145, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](146, "svg", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](147, "path", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](148, "div", 217)(149, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](150, "input", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](151, "div", 223)(152, "button", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](153, "Assign Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](154, MeetingReportComponent_div_1_div_154_Template, 5, 0, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](155, MeetingReportComponent_div_1_div_155_Template, 5, 0, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](41);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r4.Task_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](26, 41, item_r4.Schedule_date, "d EEE, MMMM YYYY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", item_r4.NewSt_Time, " \u2013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r4.NewEd_Time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.Meetingstatuscom == ctx_r0.Completed && ctx_r0.Isadmin == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matDatepicker", _r6)("min", ctx_r0.disablePreviousDate)("ngModel", ctx_r0._StartDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r0.Startts);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.StartTimearr);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r0.Endtms);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.EndTimearr);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.Previousdata_meeting.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r4.Location);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r4.Onlinelink.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r4.Onlinelink == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.Createdby);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.Isadmin == true && ctx_r0.status == "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.Isadmin == true && ctx_r0.sched_admin == false && ctx_r0.isCheckboxDisabled == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r0.User_Scheduledjson.length, " Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.Meetingstatuscom == ctx_r0.Completed && ctx_r0.Isadmin == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.User_Scheduledjson.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.Project_NameScheduledjson.length > 0 || ctx_r0.Project_NameScheduledjson != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.Project_NameScheduledjson);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.portfolio_Scheduledjson.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.portfolio_Scheduledjson);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r4.DMS_Name != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r4.DMS_Name != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r4.Description != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.Attachments_ary.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.Meetingstatuscom != "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.Meetingstatuscom == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.Meetingstatuscom == ctx_r0.Completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0._TodoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.ActionedAssigned_Josn.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r0.ngEmployeeDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0._EmployeeListForDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.Meetingstatuscom == ctx_r0.Completed && ctx_r0.Isadmin == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.Meetingstatuscom == ctx_r0.Completed && ctx_r0.Isadmin == false);
} }
function MeetingReportComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 134)(1, "div", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "div", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 136)(4, "div", 137)(5, "div", 138)(6, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 87)(9, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "span", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "span", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r124 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r124.Task_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 4, item_r124.Schedule_date, "d EEE, MMMM YYYY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", item_r124.NewSt_Time, " \u2013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r124.NewSt_Time, " ");
} }
function MeetingReportComponent_option_280_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r125 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r125.Exec_BlockNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r125.Exec_BlockName, "");
} }
function MeetingReportComponent_ng_container_396_ng_container_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "div", 302)(2, "div", 303)(3, "div", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "NS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "p", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const pre_r130 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](pre_r130.Emp_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHtml", pre_r130.Meeting_notes, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function MeetingReportComponent_ng_container_396_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 363)(2, "a", 364)(3, "span", 365)(4, "i", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, MeetingReportComponent_ng_container_396_ng_container_1_div_8_Template, 9, 2, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const i_r127 = ctx_r131.index;
    const term_r126 = ctx_r131.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("href", "#Note_", i_r127 + 1, "", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", term_r126.Schedule_date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("id", "Note_", i_r127 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", term_r126.Previous_meeting);
} }
function MeetingReportComponent_ng_container_396_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, MeetingReportComponent_ng_container_396_ng_container_1_Template, 9, 4, "ng-container", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const term_r126 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", term_r126.Previous_meeting.length > 0);
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
        this.ngEmployeeDropdown = [];
        this.checkedproject = [];
        this.checkeddms = [];
        this.checkedportfolio = [];
        this.Meeting_Detailsdata = [];
        this._TodoList = [];
        this.text = [];
        this.Alltimes = [];
        this.EndTimearr = [];
        this.AllEndtime = [];
        this.StartTimearr = [];
        this.timingarryend = [];
        this.Time_End = [];
        this.timearr1 = [];
        this.todo = [];
        this.daysSelectedII = [];
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_4__().format("YYYY-MM-DD").toString();
        this.disablePreviousDate = new Date();
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
        this._meetingNotesAry = [];
        this.interval = 0;
        // addBulletPointsOnFocus() {
        //   const textarea = this.myTextarea.nativeElement;
        //   if (textarea.value === '') {
        //     textarea.value = '• ';
        //   }
        // }
        this.leave = false;
        this.Meetingnotes_time = [];
        this.isCheckboxDisabled = false;
        this.Isadmin = false;
        this.unsubscribe = false;
        this._EmployeeListForDropdown = [];
        // GetProjectAndsubtashDrpforCalender() {
        //   this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
        //     ((data) => {
        //       this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);
        //       // this.Portfoliolist_1 = JSON.parse(data['Portfolio_drp']);
        //       // this.ProjectListArray = JSON.parse(data['Projectlist']);
        //       // console.log(this._EmployeeListForDropdown, "Project List Array");
        //     });
        // }
        this.Previousdata_meeting = [];
        this.Notes = [];
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
        this.GetPreviousdate_meetingdata();
        this.GetMeetingnotes_data();
        this.GetAssigned_SubtaskProjects();
        this.getProjectTypeList();
        // this.GetProjectAndsubtashDrpforCalender()
        this.GetTimeslabfordate();
        this.meeting_details();
        this.getScheduleId();
        this.GetcompletedMeeting_data();
        this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
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
    leavemeet(event) {
        this.leave = true;
        this.addBulletPointsOnEnter(event);
        setTimeout(() => {
            this.delayedFunction();
        }, 2000);
        this.notifyService.showSuccess("Meeting left", "Success");
    }
    delayedFunction() {
        console.log('Function called after 5 seconds');
        window.close();
    }
    addBulletPointsOnEnter(event) {
        if (event.keyCode === 32 || event.keyCode === 13 || this.leave == true) {
            this.Schedule_ID = this.Scheduleid;
            this._calenderDto.Schedule_ID = this.Schedule_ID;
            this._calenderDto.Emp_No = this.CurrentUser_ID;
            this._calenderDto.Meeting_notes = this.Notes_Type;
            this._calenderDto.Status_type = "Left";
            // alert(this.Notes_Type)
            // console.log(this._calenderDto);
            this.CalenderService.NewGetMeeting_notes(this._calenderDto).subscribe(data => {
                // window.close();
            });
        }
    }
    GetMeetingnotes_data() {
        this.Schedule_ID = this.Scheduleid;
        this._calenderDto.Schedule_ID = this.Schedule_ID;
        this._calenderDto.Emp_No = this.CurrentUser_ID;
        this.CalenderService.NewGetMeetingdata_notes(this._calenderDto).subscribe(data => {
            this.Meetingnotes_time = JSON.parse(data['Checkdatetimejson']);
            this.Notes_Type = this.Meetingnotes_time[0]['Meeting_notes'];
            // console.log(this.Meetingnotes_time,'notes111')
        });
    }
    GetcompletedMeeting_data() {
        this.Schedule_ID = this.Scheduleid;
        this._calenderDto.Schedule_ID = this.Schedule_ID;
        this._calenderDto.Emp_No = this.CurrentUser_ID;
        this.CalenderService.NewGetcompleted_meeting(this._calenderDto).subscribe(data => {
            this.CompletedMeeting_notes = JSON.parse(data['meeitng_datajson']);
            this.Meetingstatuscom = this.CompletedMeeting_notes[0]['Meeting_status'];
            this.Userstatus = this.CompletedMeeting_notes[0]['Status'];
            this.Meetingnotescom = this.CompletedMeeting_notes[0]['Notes'];
            this.GetNotedata();
            if (this.Meetingstatuscom == "Completed") {
                this.isCheckboxDisabled = true;
            }
            else {
                this.interval = setInterval(() => {
                    this.GetNotedata();
                }, 5000);
            }
            console.log(this.CompletedMeeting_notes, 'notes11122');
        });
    }
    GetNotedata() {
        this.Schedule_ID = this.Scheduleid;
        this._calenderDto.Schedule_ID = this.Schedule_ID;
        this._calenderDto.Emp_No = this.CurrentUser_ID;
        this.CalenderService.NewGetMeetingnote_comp(this._calenderDto).subscribe(data => {
            this._meetingNotesAry = JSON.parse(data["Checkdatetimejson"]);
            this._userfullname = this._meetingNotesAry.filter(x => x.Emp_no == this.CurrentUser_ID)[0]["Emp_Name"];
            if (this.Meetingstatuscom == "Completed") {
                this.interval == 0;
                if (this.interval == 0) {
                    clearInterval(this.interval);
                }
            }
        });
    }
    onfocus(val) {
        console.log(val, "ttt");
    }
    Adduser_meetingreport() {
        for (const element of this.ngEmployeeDropdown1) {
            this.ngEmployeeDropdown.push(element);
        }
        this.Schedule_ID = this.Scheduleid;
        this._calenderDto.Schedule_ID = this.Schedule_ID;
        this._calenderDto.Emp_No = this.CurrentUser_ID;
        this._calenderDto.User_list = this.ngEmployeeDropdown;
        this.CalenderService.Newinsertuser_meetingreport(this._calenderDto).subscribe(data => {
            this.meeting_details();
        });
        this.ngEmployeeDropdown1 = null;
        this.notifyService.showSuccess("Participant added successfully", "Success");
    }
    updatedateandtime_meetingreport() {
        this.Schedule_ID = this.Scheduleid;
        this._calenderDto.Schedule_ID = this.Schedule_ID;
        this._calenderDto.Scheduled_date = this._StartDate;
        this._calenderDto.StartTime = this.Startts;
        this._calenderDto.EndTime = this.Endtms;
        this.CalenderService.Newdateandtime_meetingreport(this._calenderDto).subscribe(data => {
            this.meeting_details();
        });
    }
    Updating_Adminmeeting(_emp) {
        this.Schedule_ID = this.Scheduleid;
        this._calenderDto.Schedule_ID = this.Schedule_ID;
        this._calenderDto.Emp_No = _emp;
        this._calenderDto.IsAdmin = true;
        this.CalenderService.NewAdmin_meetingreport(this._calenderDto).subscribe(data => {
            this.meeting_details();
        });
    }
    GetTimeslabfordate() {
        this._calenderDto.minutes = 5;
        // this._hrtime = parseInt(moment(new Date()).format("HH"));
        // this.Startts = this._hrtime.toString() + ':00';
        this._calenderDto.StartTime = "00:00";
        this._calenderDto.EndTime = "23:55";
        this.CalenderService.GetTimeslabcalender(this._calenderDto).subscribe((data) => {
            this._arrayObj = data;
            this._arrayObj.forEach(element => {
                this.EndTimearr.push(element.TSEnd);
                this.AllEndtime.push(element.TSEnd);
                this.StartTimearr.push(element.TSStart);
                this.Alltimes.push(element.TSStart);
            });
            // console.log(this.EndTimearr[0]);
            // console.log("Array" + this.EndTimearr);
        });
    }
    addstarttime() {
        this.Alltimes = [];
        this.EndTimearr = [];
        this.AllEndtime = [];
        this.StartTimearr = [];
        this._arrayObj.forEach(element => {
            this.EndTimearr.push(element.TSEnd);
            this.AllEndtime.push(element.TSEnd);
            this.StartTimearr.push(element.TSStart);
            this.Alltimes.push(element.TSStart);
            console.log(this.Alltimes, "times");
        });
        // alert(this.Startts);
        // this.Alltimes = [];
        // this.StartTimearr.forEach(element => {
        //   this.Alltimes.push(element);
        // });
        // this.Startts = this.Startts;
        this.timingarryend = [];
        this.Time_End = [];
        this.Time_End = this.AllEndtime;
        // this.Startts = TSStart;
        let _index = this.Time_End.indexOf(this.Startts);
        this.timingarryend = this.Time_End.splice(_index + 1);
        this.EndTimearr = this.timingarryend;
        this.timearr1 = this.Startts.split(":");
        let vahr = this.timearr1[0];
        let mins = this.timearr1[1].toString();
        if (this.timearr1[0] == 23) {
            this._arrayObj.forEach(element => {
                this.EndTimearr.push(element.TSStart);
            });
            vahr = Number(vahr) + 1;
            if (vahr == 24) {
                vahr = '00';
            }
            this.Endtms = vahr.toString() + ':' + mins;
            if (vahr == '00') {
                this._SEndDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.scstartdate, "YYYY-MM-DD").add(1, 'days');
                // alert(this.scstartdate)
                document.getElementById("Schenddate").style.display = "none";
            }
            else {
                this._SEndDate = this.scstartdate;
            }
        }
        else {
            vahr = Number(vahr) + 1;
            this.Endtms = vahr.toString() + ':' + mins;
        }
        //  alert(this._SEndDate)
        // this.Endtms = this.EndTimearr[0];
        this.daysSelectedII = [];
        var jsonData = {};
        var columnName = "Date";
        jsonData[columnName] = this.minDate;
        var columnNames = "StartTime";
        jsonData[columnNames] = this.Startts;
        var columnNamee = "EndTime";
        jsonData[columnNamee] = this.Endtms;
        var columnNameess = "SEndDate";
        jsonData[columnNameess] = moment__WEBPACK_IMPORTED_MODULE_4__(this._SEndDate).format("YYYY-MM-DD").toString();
        if (this.ScheduleType == "Event") {
            var IsActive = "IsActive";
            jsonData[IsActive] = 0;
        }
        this.daysSelectedII.push(jsonData);
        const selectedStartTimeObj = new Date(`2000-01-01T${this.Startts}:00`);
        this.EndTimearr.forEach(element => {
            // alert(element)
            const _element = element;
            const EndTimeObj = new Date(`2000-01-01T${_element}:00`);
            const diffInMinutes = (EndTimeObj.getTime() - selectedStartTimeObj.getTime()) / 60000;
            // alert(diffInMinutes)
            element = _element.toString() + "-" + diffInMinutes.toString();
        });
        console.log(this.EndTimearr, "End Time Updated");
    }
    addendtime(TSEnd) {
        this.Endtms = TSEnd;
        if (this.Startts > this.Endtms) {
            this.Endtms = this.Startts;
        }
        this.daysSelectedII = [];
        var jsonData = {};
        var columnName = "Date";
        jsonData[columnName] = this.minDate;
        var columnNames = "StartTime";
        jsonData[columnNames] = this.Startts;
        var columnNamee = "EndTime";
        jsonData[columnNamee] = this.Endtms;
        if (this.ScheduleType == "Event") {
            var IsActive = "IsActive";
            jsonData[IsActive] = 0;
        }
        this.daysSelectedII.push(jsonData);
        // this.daysSelectedII = [];
        // this.daysSelected.forEach(element => {
        //   const found = this.Timechangearry.some(el => el.Date === element);
        //   if (found) {
        //     this.Timechangearry.forEach(element2 => {
        //       if (element2.Date == element) {
        //         var jsonData = {};
        //         var columnName = "Date";
        //         jsonData[columnName] = element2.Date;
        //         var columnNames = "StartTime";
        //         jsonData[columnNames] = this.Startts;
        //         var columnNamee = "EndTime";
        //         jsonData[columnNamee] = this.Endtms;
        //         if (this.ScheduleType == "Event") {
        //           var IsActive = "IsActive";
        //           jsonData[IsActive] = 0;
        //         }
        //         this.daysSelectedII.push(jsonData)
        //       }
        //     });
        //   }
        //   else {
        //     var jsonData = {};
        //     var columnName = "Date";
        //     jsonData[columnName] = element;
        //     var columnNames = "StartTime";
        //     jsonData[columnNames] = this.Startts;
        //     var columnNamee = "EndTime";
        //     jsonData[columnNamee] = this.Endtms;
        //     if (this.ScheduleType == "Event" || this.ScheduleType == "Task") {
        //       var IsActive = "IsActive";
        //       jsonData[IsActive] = 1;
        //     }
        //     this.daysSelectedII.push(jsonData);
        //   }
        // });
        // if (this.ScheduleType == "Task") {
        //   this.Checkdatetimetable(this.daysSelectedII);
        // }
        // this.calendar.updateTodaysDate();
    }
    getScheduleId() {
        this.router.navigate(["Meeting-Report/" + this.Schedule_ID]);
    }
    meeting_details() {
        this.Schedule_ID = this.Scheduleid;
        this._calenderDto.Schedule_ID = this.Schedule_ID;
        this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe((data) => {
            this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
            this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);
            console.log(this.EventScheduledjson, "111111");
            this.Startts = this.EventScheduledjson[0]['St_Time'];
            this.Endtms = this.EventScheduledjson[0]['Ed_Time'];
            this.Isadmin = this.EventScheduledjson[0]['IsAdmin'];
            this.status = this.EventScheduledjson[0]['Status'];
            this.Createdby = this.EventScheduledjson[0]['Created_by'];
            this.sched_admin = this.EventScheduledjson[0]['Owner_isadmin'];
            if (this.Isadmin) {
                this.isCheckboxDisabled = false;
            }
            if (!this.Isadmin) {
                this.isCheckboxDisabled = true;
            }
            this._StartDate = this.EventScheduledjson[0]['Schedule_date'];
            this.User_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Add_guests);
            this.totalguest = this.User_Scheduledjson.length;
            this.User_Scheduledjson.forEach(element => {
                this.checkedusers.push(element.stringval);
                element.isChecked = true;
            });
            this.ngEmployeeDropdown = this.checkedusers;
            this.Guestcount = this.checkedusers.length;
            console.log(this.checkedusers, "chec");
            this.Project_NameScheduledjson = JSON.parse(this.EventScheduledjson[0].Project_code);
            this.totalproject = this.Project_NameScheduledjson.length;
            this.Project_NameScheduledjson.forEach(element => {
                element.isChecked = true;
                this.checkedproject.push(element.stringval);
            });
            this.projectcount = this.checkedproject.length;
            console.log(this.User_Scheduledjson, "chec1");
            this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson;
            this.portfolio_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Portfolio_Name);
            this.totalportfolios = this.portfolio_Scheduledjson.length;
            this.portfolio_Scheduledjson.forEach(element => {
                this.checkedportfolio.push(element.numberval);
                element.isChecked = true;
            });
            this.checkedportfolio = this.checkedportfolio.map((num) => num.toString());
            this.portfoliocount = this.checkedportfolio.length;
            console.log(this.checkedportfolio, "chec2");
            this.DMS_Scheduledjson = this.EventScheduledjson[0].DMS_Name;
            this.DMS_Scheduledjson = this.DMS_Scheduledjson.split(',');
            this.totaldms = this.DMS_Scheduledjson.length;
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
                    this.dmscount = this.checkeddms.length;
                });
            }
            if (this.Meetingstatuscom == "Completed") {
                this.isCheckboxDisabled = true;
            }
            else {
                this.interval = setInterval(() => {
                    this.GetNotedata();
                }, 5000);
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
                this.todocount = this._TodoList.length;
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
        this.projectcount = this.checkedproject.length;
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
        this.portfoliocount = this.checkedportfolio.length;
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
        this.dmscount = this.checkeddms.length;
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
        this.Guestcount = this.checkedusers.length;
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
    GetPreviousdate_meetingdata() {
        this.Schedule_ID = this.Scheduleid;
        this._calenderDto.Schedule_ID = this.Schedule_ID;
        this._calenderDto.Emp_No = this.CurrentUser_ID;
        this.CalenderService.NewPrevious_meetingreport(this._calenderDto).subscribe(data => {
            this.Previousdata_meeting = JSON.parse(data['previousmeet_data']);
            // Assuming Previousdata_meeting is an array of objects with a Previous_meeting property
            // this.Previousdata_meeting = this.Previousdata_meeting.filter((item) => item.Previous_meeting.length > 0);
            //  this.Notes = this.Previousdata_meeting.filter(element => !element.Previous_meeting);
            //  this.Notes= this.Previousdata_meeting;
            console.log(this.Previousdata_meeting, "wassssss1111");
            //  console.log(this.Notes,"wassssss") 
        });
    }
    Insert_meetingreport() {
        this.Action_item = [];
        this._TodoList.forEach(element => {
            this.Action_item.push(element.Assign_Id);
        });
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
            this.GetcompletedMeeting_data();
            if (this.Meetingstatuscom == 'Completed') {
                this.interval == 0;
                if (this.interval == 0) {
                    clearInterval(this.interval);
                }
            }
        });
        const modalElement = document.getElementById('exampleModal');
        // Close the modal by removing the "show" class from the modal element
        if (modalElement) {
            modalElement.classList.remove('show');
            // Additionally, you might want to reset the modal backdrop (optional)
            const modalBackdrop = document.querySelector('.modal-backdrop');
            if (modalBackdrop) {
                modalBackdrop.parentNode?.removeChild(modalBackdrop);
            }
        }
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
        this.notifyService.showSuccess("Meeting completed successfully", "Success");
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
        console.log(this.ProjectTypelist, "121");
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
            debugger;
            // console.log("Data---->", data);
            // this.CategoryList = JSON.parse(data[0]['CategoryList']);
            this._TodoList = JSON.parse(data[0]['Jsonmeeting_Json']);
            // this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
            // this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
            this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
            this.assigncount = this.ActionedAssigned_Josn.length;
            this.todocount = this._TodoList.length + this.ActionedAssigned_Josn.length;
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
    ActionToProject_Click(taskName, Assignid) {
        // debugger
        this._taskName = taskName;
        this._AssignId = Assignid;
        this.router.navigate(["Meeting-Report/" + this.Schedule_ID + "/ActionToProject/3"]);
        this.BsService.SetNewAssignId(this._AssignId);
        this.BsService.SetNewAssignedName(this._taskName);
        document.getElementById("mysideInfobar").classList.add("kt-action-panel--on");
        document.getElementById("rightbar-overlay").style.display = "block";
        document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
        $("#mysideInfobar").scrollTop(0);
        //this.GetProjectsByUserName();
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
        document.getElementById("Previous_sidebar").classList.remove("kt-quick-panel--on");
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementById("metting_slide").classList.remove("position-fixed");
    }
    ngOnDestroy() {
        // Unsubscribe when the component is destroyed to prevent memory leaks
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    }
    Slide_meeting() {
        document.getElementById("metting_slide").classList.add("position-fixed");
        document.getElementById("rightbar-overlay").style.display = "block";
        document.getElementById("Previous_sidebar").classList.add("kt-quick-panel--on");
    }
}
MeetingReportComponent.ɵfac = function MeetingReportComponent_Factory(t) { return new (t || MeetingReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_Services_calender_service__WEBPACK_IMPORTED_MODULE_6__.CalenderService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_7__.LinkService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_8__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_9__.BsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog)); };
MeetingReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: MeetingReportComponent, selectors: [["app-meeting-report"]], viewQuery: function MeetingReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.myTextarea = _t.first);
    } }, decls: 397, vars: 21, consts: [["id", "metting_slide", 1, "grey-bg", "side_view"], ["class", "col-md-12 p-3", 4, "ngFor", "ngForOf"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "fs-5"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true", 1, "ki", "ki-close"], [1, "modal-body"], ["id", "NameDate", "class", "main-title", 4, "ngFor", "ngForOf"], [1, "eve-area", "ng-star-inserted"], [1, "left-icon"], ["aria-hidden", "true", 1, "side-icns"], ["focusable", "false", "width", "20", "height", "20", "viewBox", "0 0 24 24", 1, "svg-icn"], ["_ngcontent-gpx-c394", "", "d", "M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z"], [1, "rgt-des"], [1, "main-s"], [1, "kt-dt-cnt-view"], [1, "avar-div"], ["id", "project", 1, "eve-area", "ng-star-inserted"], [1, "fab-icn", "fab", "fa-wpforms"], [1, "main-s", "pro-nm"], [1, "side-div", "ng-star-inserted"], [1, "fas-icn", "fas", "fa-list"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "20", "height", "20", 1, "svg-icn"], ["_ngcontent-owa-c389", "", "fill", "none", "d", "M0 0h24v24H0z"], ["_ngcontent-owa-c389", "", "d", "M5.455 15L1 18.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455zm-.692-2H16V4H3v10.385L4.763 13zM8 17h10.237L20 18.385V8h1a1 1 0 0 1 1 1v13.5L17.545 19H9a1 1 0 0 1-1-1v-1z"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 34 24", "width", "27", "height", "27", 1, "svg-icn"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["d", "M19.9994 19.2611H10.9294C10.4794 19.2611 10.1094 18.8911 10.1094 18.4411C10.1094 17.9911 10.4794 17.6211 10.9294 17.6211H19.9994C20.4494 17.6211 20.8194 17.9911 20.8194 18.4411C20.8194 18.9011 20.4494 19.2611 19.9994 19.2611Z", "fill", "#292D32"], ["d", "M19.9994 12.9681H10.9294C10.4794 12.9681 10.1094 12.5981 10.1094 12.1481C10.1094 11.6981 10.4794 11.3281 10.9294 11.3281H19.9994C20.4494 11.3281 20.8194 11.6981 20.8194 12.1481C20.8194 12.5981 20.4494 12.9681 19.9994 12.9681Z", "fill", "#292D32"], ["d", "M19.9994 6.67125H10.9294C10.4794 6.67125 10.1094 6.30125 10.1094 5.85125C10.1094 5.40125 10.4794 5.03125 10.9294 5.03125H19.9994C20.4494 5.03125 20.8194 5.40125 20.8194 5.85125C20.8194 6.30125 20.4494 6.67125 19.9994 6.67125Z", "fill", "#292D32"], ["d", "M4.90969 8.03187C4.68969 8.03187 4.47969 7.94187 4.32969 7.79187L3.41969 6.88188C3.09969 6.56188 3.09969 6.04187 3.41969 5.72187C3.73969 5.40187 4.25969 5.40187 4.57969 5.72187L4.90969 6.05188L7.04969 3.91187C7.36969 3.59188 7.88969 3.59188 8.20969 3.91187C8.52969 4.23188 8.52969 4.75188 8.20969 5.07188L5.48969 7.79187C5.32969 7.94187 5.12969 8.03187 4.90969 8.03187Z", "fill", "#292D32"], ["d", "M4.90969 14.3287C4.69969 14.3287 4.48969 14.2487 4.32969 14.0887L3.41969 13.1788C3.09969 12.8588 3.09969 12.3388 3.41969 12.0188C3.73969 11.6988 4.25969 11.6988 4.57969 12.0188L4.90969 12.3488L7.04969 10.2087C7.36969 9.88875 7.88969 9.88875 8.20969 10.2087C8.52969 10.5288 8.52969 11.0487 8.20969 11.3687L5.48969 14.0887C5.32969 14.2487 5.11969 14.3287 4.90969 14.3287Z", "fill", "#292D32"], ["d", "M4.90969 20.3288C4.69969 20.3288 4.48969 20.2488 4.32969 20.0888L3.41969 19.1788C3.09969 18.8588 3.09969 18.3388 3.41969 18.0188C3.73969 17.6988 4.25969 17.6988 4.57969 18.0188L4.90969 18.3488L7.04969 16.2087C7.36969 15.8888 7.88969 15.8888 8.20969 16.2087C8.52969 16.5288 8.52969 17.0488 8.20969 17.3688L5.48969 20.0888C5.32969 20.2488 5.11969 20.3288 4.90969 20.3288Z", "fill", "#292D32"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "btn-sm", "mr-2"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "mr-2", 3, "click"], ["id", "recurcal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "recurcalTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg", "w-max", "w-min"], ["id", "exampleModalLongTitle", 1, "modal-title"], ["aria-hidden", "true"], [1, ""], [1, "d-flex-cen", "gap-3"], [1, "rec-btns", "gap-3"], [1, "btn", "btn-sm", "btn-white", "btn-min"], [1, "mt-3", "pl-2"], [1, "dropdown", "show"], ["href", "#", "role", "button", "id", "repeatdrop", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "text-info", "dropdown-toggle"], [1, "fas", "fa-redo"], ["aria-labelledby", "repeatdrop", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "cal"], [1, "calendar-wrap"], [1, "month-year"], [1, "calendar"], ["scope", "col", 1, "day-title"], [1, "week"], ["tabindex", "0", 1, "day", "prev-mon"], [1, "day-number"], ["tabindex", "0", 1, "day"], ["tabindex", "0", 1, "day", "today"], ["tabindex", "0", 1, "day", "next-mon"], [1, "button", "reset"], [1, "mt-3", "text-right"], [1, "text-info"], [1, "far", "fa-clock"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "btn-sm"], ["type", "button", 1, "btn", "btn-info", "btn-sm"], ["id", "custmodal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "custom-modal", "aria-hidden", "true", 1, "modal", "fade"], [1, "input-group", "flex-column", "dropdown", "mr-2", "mt-3", "gap-1"], [1, "d-flex-cen", "gap-1", "form-group"], [1, "left-lbls"], [1, "mr-1", "mb-0"], [1, "w-min-150"], ["name", "Select Type", "placeholder", "Do not repeat", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "arrws", "mb-2"], [1, "fas", "fa-chevron-up"], [1, "arw-spn", "mb-1"], [1, "arrws", "mt-2"], [1, "fas", "fa-chevron-down"], [1, "ml-2"], [1, "d-flex"], [1, "repeat-day"], ["type", "checkbox", "name", "DaysChk", "id", "Sun", "value", "Sun", 1, "rep-chk"], ["type", "checkbox", "name", "DaysChk", "id", "Mon", "value", "Mon", 1, "rep-chk"], ["type", "checkbox", "name", "DaysChk", "id", "Tue", "value", "Tue", 1, "rep-chk"], ["type", "checkbox", "name", "DaysChk", "id", "Wed", "value", "Wed", 1, "rep-chk"], ["type", "checkbox", "name", "DaysChk", "id", "Thu", "value", "Thu", 1, "rep-chk"], ["type", "checkbox", "name", "DaysChk", "id", "Fri", "value", "Fri", 1, "rep-chk"], ["type", "checkbox", "name", "DaysChk", "id", "Sat", "value", "Sat", 1, "rep-chk"], ["type", "date", "placeholder", "Select EndDate", 1, "form-control"], [1, "text-info", "d-flex-cen"], [1, "far", "fa-clock", "text-info", "mr-2"], [1, "d-flex", "gap-1", "form-group"], [1, "form-check", "ml-1"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios1", "value", "option1", "checked", "", 1, "form-check-input"], ["for", "exampleRadios1", 1, "form-check-label"], [1, "mt-3", "d-flex-cen"], [1, "form-check", "ml-1", "mr-3"], ["type", "radio", "name", "", "id", "", "value", "", "checked", "", 1, "form-check-input"], ["for", "", 1, "form-check-label"], [1, "flex-1", "d-flex-between", "m-0"], ["id", "rightbar-overlay", 3, "click"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], ["id", "Previous_sidebar", 1, "sideInfobar", "animate-right"], [1, "kt-portlet"], [1, "kt-portlet__head"], [1, "offcanvas-header", "d-flex", "align-items-center", "justify-content-between", "flex-1"], [1, "m-0"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-hover-info", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24", "fill", "currentColor"], ["fill", "none", "d", "M0 0h24v24H0z"], ["d", "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"], [1, "kt-portlet__body", "pb-0", "pt-3", "sidehf_scroll", "scroll-y"], [1, "kt-met-flr"], [1, "kt-left-view"], [4, "ngFor", "ngForOf"], [1, "col-md-12", "p-3"], [1, "card", "meet-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "card-title"], [1, "kt-timer"], ["id", "countdown"], [1, "time-play-btn"], ["data-toggle", "tooltip", "title", "click here to release project", 1, "fas", "fa-play", "mx-1", "curser-pointer", "relse-act"], [1, "time-play-btn", "d-none"], ["data-toggle", "tooltip", "title", "click here to release project", 1, "fas", "fa-pause", "p-2", "mb-1", "curser-pointer", "relse-act"], [1, "header2", "pt-3"], ["id", "NameDate", 1, "main-title"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100"], ["id", "", 1, "title-right"], [1, "title-area"], [1, "title-main"], ["id", "title1"], [1, "title-day"], [1, "title-day", "ropdown"], ["type", "button", "id", "-icn", "class", "text-info dropdown-toggle", "type", "button", "id", "DW_time_pick", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 4, "ngIf"], ["aria-labelledby", "DW_time_pick", 1, "dropdown-menu", "p-3", "cstm-swd"], [1, "input-group"], ["matInput", "", "placeholder", "Start Date", 1, "form-control", 3, "matDatepicker", "min", "ngModel", "click", "dateChange", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text", "p-0"], ["matSuffix", "", 3, "for"], ["picker1", ""], [1, "form-group", "flex-1", "mb-2", 3, "click"], [1, "cus-lbl"], ["id", "startid", "placeholder", "Start Time", 1, "kt-input", "form-control", 3, "ngModel", "ngModelChange", "open", "change"], [1, "form-group", "flex-1", "mb-1", 3, "click"], ["placeholder", "End Time", 1, "kt-input", "form-control", 3, "ngModel", "open", "ngModelChange"], [1, "form-group", "mb-0", "ng-star-inserted", "text-right", "mt-3"], ["type", "cancel", 1, "btn", "btn-secondary", "btn-sm"], ["type", "submit", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["class", "kt-btn-left", 4, "ngIf"], [1, "card-body", "scrolly", "card-body2"], [1, "px-3", "row", "mx-0", "mb-3"], [1, "col-md-12", "col-lg-5"], [1, "card", "card-mid", "flex-1", "h-100"], [1, "card-header"], ["clas", "card-title"], [1, "card-body", "px-0", "pt-0"], [1, "meetdt"], ["id", "location", "class", "eve-area", 4, "ngIf"], ["id", "", "class", "eve-area", 4, "ngIf"], [1, "kt-organizer-dt", "eve-area"], [1, "w-100", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], ["aria-hidden", "true", 1, "side-icns", "kt-org-ic"], ["width", "20", "height", "20", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 128 160", 0, "xml", "space", "preserve", 1, "svg-icn", 2, "enable-background", "new 0 0 128 128"], ["d", "M0.0106888,117.5239029c0,0,0,2.3451996,0,5.2378006c0,2.8930969-0.4179,5.2382965,3.9990997,5.2382965h31.9960976  c4.4179001,0,3.9863014-2.3457031,3.9804001-5.2388c-0.0057983-2.6191025-0.009697-5.2372971-0.009697-5.2372971  c0-7.2632065-5.9395027-12.9751053-13.0547009-14.858902C29.6972885,100.5653992,31.5,97.2465973,31.5,93.5009995  c0-6.3506012-5.1543121-11.5019989-11.5-11.5019989c-6.3477116,0-11.5,5.1513977-11.5,11.5019989  c0,3.7435989,1.8007889,7.0615005,4.5741882,9.1611023C5.9550886,104.5425034,0.0106888,110.2563019,0.0106888,117.5239029z   M12.5,93.5009995c0-4.1366959,3.3642883-7.5019989,7.5-7.5019989c4.1356888,0,7.5,3.365303,7.5,7.5019989  c0,4.1343002-3.3643112,7.4980011-7.5,7.4980011C15.8642883,100.9990005,12.5,97.6352997,12.5,93.5009995z M18.1034889,106  h3.7735119c6.6688881,0,14.0995884,4.7329025,14.0995884,11.5298004l0.009697,5.2397003  c0.0010033,0.2554016,0.0039024,0.5074005,0.0078011,0.7538986c0.0019989,0.1484985,0.0039139,0.3125,0.0049133,0.4766006H4.0097885  c-0.0029998,0-0.0058999,0-0.0087886,0c0-0.171402,0.0018888-0.3432999,0.0038886-0.4980011  c0.0029001-0.2421951,0.0058002-0.489296,0.0058002-0.7402954v-5.2378006C4.0106888,110.7329025,11.4374886,106,18.1034889,106z"], ["d", "M127.9862823,122.7612c-0.0057983-2.6191025-0.009697-5.2372971-0.009697-5.2372971  c0-7.2632065-5.9394989-12.9751053-13.0547028-14.858902C117.6972885,100.5653992,119.5,97.2465973,119.5,93.5009995  c0-6.3506012-5.1543121-11.5019989-11.5-11.5019989c-6.3477173,0-11.5,5.1513977-11.5,11.5019989  c0,3.7435989,1.8007889,7.0615005,4.5741882,9.1611023c-7.1191025,1.8804016-13.0634995,7.5942001-13.0634995,14.8618011  c0,0,0,2.3451996,0,5.2378006c0,2.8930969-0.4179001,5.2382965,3.9990997,5.2382965h31.9960938  C128.4237823,128,127.9921875,125.6542969,127.9862823,122.7612z M100.5,93.5009995c0-4.1366959,3.3642883-7.5019989,7.5-7.5019989  c4.1356888,0,7.5,3.365303,7.5,7.5019989c0,4.1343002-3.3643112,7.4980011-7.5,7.4980011  C103.8642883,100.9990005,100.5,97.6352997,100.5,93.5009995z M92.0097885,124c-0.0029984,0-0.0059052,0-0.0087891,0  c0-0.171402,0.0018845-0.3432999,0.0038834-0.4980011c0.0029068-0.2421951,0.005806-0.489296,0.005806-0.7402954v-5.2378006  c0-6.7910004,7.426796-11.5239029,14.0927963-11.5239029h3.7735138c6.6688843,0,14.0995865,4.7329025,14.0995865,11.5298004  l0.009697,5.2397003c0.0010071,0.2554016,0.0039063,0.5074005,0.0078049,0.7538986  C123.9960861,123.6718979,123.9980011,123.8358994,124,124H92.0097885z"], ["d", "M44.0106888,117.5239029c0,0,0,2.3451996,0,5.2378006c0,2.8930969-0.4179001,5.2382965,3.9990997,5.2382965h31.9961014  c4.4179001,0,3.9862976-2.3457031,3.9804001-5.2388c-0.005806-2.6191025-0.0097046-5.2372971-0.0097046-5.2372971  c0-7.2632065-5.9394989-12.9751053-13.0546951-14.858902C73.6972885,100.5653992,75.5,97.2465973,75.5,93.5009995  c0-6.3506012-5.1543121-11.5019989-11.5-11.5019989c-6.3477135,0-11.5,5.1513977-11.5,11.5019989  c0,3.7435989,1.8007889,7.0615005,4.5741882,9.1611023C49.9550858,104.5425034,44.0106888,110.2563019,44.0106888,117.5239029z   M56.5,93.5009995c0-4.1366959,3.3642883-7.5019989,7.5-7.5019989c4.1356888,0,7.5,3.365303,7.5,7.5019989  c0,4.1343002-3.3643112,7.4980011-7.5,7.4980011C59.8642883,100.9990005,56.5,97.6352997,56.5,93.5009995z M62.1034889,106h3.77351  c6.6688843,0,14.0995865,4.7329025,14.0995865,11.5298004l0.0097046,5.2397003  c0.0009995,0.2554016,0.0038986,0.5074005,0.0077972,0.7538986C79.9960861,123.6718979,79.9980011,123.8358994,80,124H48.0097885  c-0.0030022,0-0.0059013,0-0.0087891,0c0-0.171402,0.0018883-0.3432999,0.0038872-0.4980011  c0.0028992-0.2421951,0.0058022-0.489296,0.0058022-0.7402954v-5.2378006C48.0106888,110.7329025,55.4374886,106,62.1034889,106z"], ["d", "M36.2597885,42.8852997c-8.5410004,6.1063995-14.9854012,14.9906998-17.9169998,25.4798965l-0.4941998-1.1966934  c-0.4218006-1.0201035-1.5897999-1.5064011-2.6123009-1.0849991c-1.0204992,0.4218979-1.5067997,1.5912933-1.0848999,2.6122971  l3.3320007,8.0679016c0.2714996,0.6576996,0.8729992,1.1215973,1.5781002,1.2176971  C19.1513882,77.9941025,19.2421875,78,19.3320007,78c0.6103878,0,1.1943874-0.2798004,1.5761871-0.7686005l5.3866997-6.8919983  c0.6797009-0.8702011,0.5254002-2.1269989-0.3446999-2.8071976c-0.8690987-0.680603-2.1259995-0.5263062-2.8076,0.3442993  l-0.8114986,1.0380936C24.7606888,60.6348,29.6063881,53.4813995,36,48.142601c0,2.8964996,0,7.8368988,0,8.9540977  C36,58.7001991,37.7938881,60,40.0067863,60H62v7.9462967l-0.2324142-0.4389954  c-0.5155869-0.9756012-1.7275848-1.3476028-2.7030983-0.8320007c-0.9766006,0.5166016-1.3487015,1.7269974-0.8320999,2.7031021  l4,7.5570984C62.5790863,77.5903015,63.2587891,78,64,78c0.741188,0,1.4208908-0.4096985,1.7675858-1.0644989l4-7.5570984  c0.5166016-0.9761047,0.1445007-2.1865005-0.8320999-2.7031021c-0.9754868-0.5170975-2.1864853-0.1436005-2.7031021,0.8320007  L66,67.9462967V60h21.9960861C90.2089996,60,92.0028839,58.7001991,92,57.0971985  c-0.0019989-1.1576996-0.0049133-6.0356979-0.0059128-8.9228973c6.3593979,5.320797,11.1856003,12.4370003,13.6182022,20.6684952  l-0.7549057-0.9662933c-0.6805954-0.8706055-1.9393845-1.0240021-2.8075943-0.3442993  c-0.8701019,0.6801987-1.0244064,1.9369965-0.3447037,2.8071976l5.3867035,6.8919983  C107.4745865,77.7201996,108.0575867,78,108.6679993,78c0.0897903,0,0.1805878-0.0058975,0.2704849-0.0186005  c0.705101-0.0960999,1.3066025-0.5599976,1.5781021-1.2176971l3.3320007-8.0679016  c0.4218979-1.0210037-0.0643997-2.1903992-1.0848999-2.6122971c-1.0243988-0.421402-2.1913986,0.0648956-2.6123047,1.0849991  l-0.5156937,1.2479935c-2.919899-10.490696-9.3603058-19.3827972-17.8973999-25.4994965  c-1.1768036-7.0639992-6.3144989-12.8144989-12.9208984-16.0522995c-0.905304,1.1280003-1.9365005,2.1455994-3.0713043,3.0415993  c6.7539139,2.849102,12.2471008,8.6875,12.2471008,16.099102c0,0,0.0028992,6.982399,0.0058136,9.9945984  c-0.0009995,0-0.001915,0-0.0029144,0H82v-6c0-1.1044998-0.8955154-2-2-2c-1.1045151,0-2,0.8955002-2,2v6H50v-6  c0-1.1044998-0.8955116-2-2-2c-1.1045113,0-2,0.8955002-2,2v6h-5.9932137C40.0048866,56,40.0019989,56,40,56v-9.9961014  C40,38.5898018,45.4950867,32.75,52.25,29.9022999c-1.1348114-0.8964005-2.1660004-1.9139996-3.0703125-3.0419006  C42.5820007,30.0923004,37.4472885,35.8325005,36.2597885,42.8852997z"], ["d", "M79,15.0029001C79,6.7188001,72.2763901,0,64.0009995,0C55.7196884,0,49,6.7188001,49,15.0029001  C49,21.8701,53.6298866,27.6508999,59.9335861,29.4263l-2.8280983,12.7128983  c-0.3203011,1.1933022,0.1240005,3.4506035,1.5195122,4.4643021l2.9638863,2.6156998l0.2793007,0.2066002  c0.6230011,0.3812981,1.3876991,0.5718002,2.1512985,0.5718002c0.7637024,0,1.5274048-0.1905022,2.1514053-0.5713005  l3.2519989-2.8282013c1.2910004-0.9554977,1.839798-3.1317978,1.4501114-4.4735985l-3.284111-12.5757008  C74.1317902,27.9370003,79,22.0419998,79,15.0029001z M66.9062881,43.4838982l-2.8535995,2.517601  c-0.0214005,0.0018997-0.0419998,0.0039024-0.0595016,0.0053024l-2.8740997-2.5371017  c-0.0536995-0.1195984-0.1054001-0.3125-0.1170883-0.4350014l2.7490005-12.3495979l3.2470016,12.4330978  C66.9882889,43.2230988,66.9481888,43.3799019,66.9062881,43.4838982z M64.0009995,26C57.9345856,26,53,21.0669003,53,15.0029001  C53,8.9359999,57.9345856,4,64.0009995,4C70.0653839,4,75,8.9359999,75,15.0029001C75,21.0669003,70.0653839,26,64.0009995,26z"], ["name", "user", 1, "kt-org-v"], ["class", "admin-check curser-pointer", 4, "ngIf"], ["class", "admin-check curser-pointer", 3, "click", 4, "ngIf"], ["id", "userlength", 1, "eve-area"], ["d", "M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z"], [1, "d-flex", "justify-content-between"], ["class", "kt-add-user curser-pointer", 4, "ngIf"], ["id", "userlist", "class", "avar-div", 4, "ngIf"], ["id", "project", "class", "eve-area", 4, "ngIf"], [1, "side-div"], ["class", "d-flex align-items-center", 4, "ngFor", "ngForOf"], ["id", "portfolio", "class", "eve-area", 4, "ngIf"], ["id", "dms", "class", "eve-area py-2", 4, "ngIf"], ["class", "side-div", 4, "ngIf"], ["id", "desc", "class", "eve-area py-2", 4, "ngIf"], ["id", "", "class", "eve-area py-2", 4, "ngIf"], ["id", "cardmain", 1, "col-md-12", "col-lg-7", "mt-3", "mt-lg-0"], [1, "card-header", "d-flex-cen", "justify-content-between"], ["clas", "card-title", "data-toggle", "collapse", "href", ".meetdt", "role", "button", "aria-expanded", "false", "aria-controls", "meetdt"], [1, "card-body"], [1, "notes-section"], [1, "eve-area", "py-2"], ["class", "rgt-des", 4, "ngIf"], [1, "action-section"], [1, "todo-main"], [1, "task-header"], [1, "task-header-title"], [1, "task-tools"], [1, "task-count"], ["class", "task-form", 4, "ngIf"], [1, "todo-list"], ["class", "task-item", 4, "ngFor", "ngForOf"], [1, "task-list"], ["class", "task-empty", 4, "ngIf"], ["class", " mt-3", 4, "ngIf"], ["aria-labelledby", "dropusers", 1, "drops", "drope", "py-3"], [1, "col-md-2", "text-center"], ["focusable", "false", "width", "22", "height", "22", "viewBox", "0 0 24 24", 1, "svg-icn"], [1, "col-md-10", "pr-3"], ["name", "ngEmployeeDropdown", "placeholder", "Select Participants ", 1, "kt-input", "form-control", 3, "ngModel", "ngModelChange"], [1, "d-flex", "align-items-center", "mt-3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"], ["type", "date", 1, "form-control"], [1, "px-3", "pt-3", "text-right"], [1, "btn", "btn-sm", "btn-info"], ["class", "card-footer text-right", 4, "ngIf"], ["type", "button", "id", "-icn", "type", "button", "id", "DW_time_pick", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "text-info", "dropdown-toggle"], ["data-toggle", "tooltip", "title", "edit time ", 1, "fas", "fa-edit", "ml-1", "mb-1", "curser-pointer"], [1, "kt-btn-left"], ["type", "button", 1, "kt-met-notes-v", 3, "click"], [1, "svg-met-note"], ["xmlns", "http://www.w3.org/2000/svg", "data-name", "Layer 1", "viewBox", "0 0 100 125", "x", "0px", "y", "0px"], ["d", "M59.76,5.85H18.08a14,14,0,0,0-14,14V80.15a14,14,0,0,0,14,14h30.4A4,4,0,0,0,51.31,93L72.59,71.7a4,4,0,0,0,1.17-2.83v-49A14,14,0,0,0,59.76,5.85ZM12.08,80.15V19.85a6,6,0,0,1,6-6H59.76a6,6,0,0,1,6,6v45H52.48a8,8,0,0,0-8,8V86.15H18.08A6,6,0,0,1,12.08,80.15Zm48-7.28-7.62,7.62V72.87Z"], ["x", "16.37", "y", "37.13", "width", "44.1", "height", "8"], ["x", "16.37", "y", "53.09", "width", "30.8", "height", "8"], ["x", "16.37", "y", "22.13", "width", "44.1", "height", "8"], ["d", "M86.8,6.44a9.13,9.13,0,0,0-9.12,9.12V69.44A4,4,0,0,0,78,70.9L83.08,84a4,4,0,0,0,7.45,0L95.64,70.9a4,4,0,0,0,.28-1.46V15.56A9.13,9.13,0,0,0,86.8,6.44Zm0,8a1.12,1.12,0,0,1,1.12,1.12v5.19H85.68V15.56A1.12,1.12,0,0,1,86.8,14.44ZM85.68,65.75v-37h2.24v37Z"], ["id", "location", 1, "eve-area"], ["focusable", "false", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "svg-icn"], ["d", "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"], ["cx", "12", "cy", "9", "r", "2.5"], ["target", "\u201D_blank\u201D", 3, "href"], ["id", "", 1, "eve-area"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "viewBox", "0 0 24 24", 1, "svg-icn"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"], [1, "admin-check", "curser-pointer"], ["aria-hidden", "true", 1, "admin-check-svg"], ["xmlns", "https://www.w3.org/2000/svg", "width", "14", "height", "14"], ["fill", "#5867dd", "d", "M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7z"], ["fill", "none", "stroke", "#fff", "stroke-width", "1.5", "d", "M3.5 6.5L6 9l5-5"], [1, "admin-check", "curser-pointer", 3, "click"], [1, "kt-add-user", "curser-pointer"], ["type", "button", "id", "add-users-kt", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle"], [1, "fas", "fa-user-plus"], ["aria-labelledby", "add-users-kt", 1, "dropdown-menu", "p-3", "cstm-swd", "kt-multy-user-dw"], [1, "add-user-body"], ["id", "startid", "placeholder", "Add Participant", 1, "kt-input", "form-control", "h-auto", 3, "multiple", "ngModel", "click", "ngModelChange"], ["id", "userlist", 1, "avar-div"], [1, "form-check", "form-check-custom", "form-check-solid"], ["type", "checkbox", 1, "form-check-input", "ps-1", "ng-valid", "ng-dirty", "ng-touched", 3, "disabled", "id", "value", "checked", "click"], [1, "px-2", "position-relative"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 192 192", "enable-background", "new 0 0 192 192", "width", "24px", "height", "24px", 2, "width", "20px"], ["fill", "#E0E0E0", "d", "M96,0C43.01,0,0,43.01,0,96s43.01,96,96,96s96-43.01,96-96S148.99,0,96,0z"], ["fill", "#BDBDBD", "d", "M96,85.09c13.28,0,24-10.72,24-24c0-13.28-10.72-24-24-24s-24,10.72-24,24C72,74.37,82.72,85.09,96,85.09z"], ["fill", "#BDBDBD", "d", "M96,99.27c-29.33,0-52.36,14.18-52.36,27.27c11.09,17.06,30.51,28.36,52.36,28.36s41.27-11.3,52.36-28.36C148.36,113.45,125.33,99.27,96,99.27z"], ["fill", "none", "width", "192", "height", "192"], ["aria-hidden", "true", 1, "statusicn"], ["xmlns", "https://www.w3.org/2000/svg", "width", "14", "height", "14", 4, "ngIf"], [1, "rgt-des", "ml-2"], [1, "d-flex", "align-items-start", "justify-content-between"], ["name", "user", 1, "main-s"], [1, "sub-s", "text-ellp"], ["fill", "#CEEAD6", "d", "M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7z"], ["fill", "none", "stroke", "#137333", "stroke-width", "1.5", "d", "M3.5 6.5L6 9l5-5"], ["fill", "#FAD2CF", "d", "M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7z"], ["fill", "none", "stroke", "#B31412", "stroke-width", "1.5", "d", "M4 10l6-6M10 10L4 4"], ["fill", "#E8EAED", "d", "M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7z"], ["fill", "none", "stroke", "#3C4043", "stroke-width", "1.5", "d", "M5 5c0-1.1.9-2 2-2s2 .9 2 2-1 1.5-1.5 2S7 8 7 9M7 10v1.5"], ["_ngcontent-hko-c392", "", "aria-hidden", "true", 1, "admin-check-svg"], ["_ngcontent-hko-c392", "", "xmlns", "https://www.w3.org/2000/svg", "width", "14", "height", "14"], ["_ngcontent-hko-c392", "", "fill", "#5867dd", "d", "M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7z"], ["_ngcontent-hko-c392", "", "fill", "none", "stroke", "#fff", "stroke-width", "1.5", "d", "M3.5 6.5L6 9l5-5"], ["id", "project", 1, "eve-area"], [1, "form-check", "form-check-custom", "form-check-solid", "mr-2"], ["type", "checkbox", "id", "flexCheckChecked1", 1, "form-check-input", "ps-1", 3, "disabled", "value", "checked", "click"], ["href", "javascript:void(0)", 3, "click"], ["id", "portfolio", 1, "eve-area"], ["type", "checkbox", "id", "flexCheckChecked2", 1, "form-check-input", "ps-1", 3, "disabled", "value", "checked", "click"], ["id", "dms", 1, "eve-area", "py-2"], ["d", "M5.455 15L1 18.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455zm-.692-2H16V4H3v10.385L4.763 13zM8 17h10.237L20 18.385V8h1a1 1 0 0 1 1 1v13.5L17.545 19H9a1 1 0 0 1-1-1v-1z"], ["type", "checkbox", "id", "flexCheckChecked3", 1, "form-check-input", "ps-1", 3, "disabled", "value", "checked", "click"], ["id", "desc", 1, "eve-area", "py-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24", 1, "svg-icn"], ["d", "M13 6v15h-2V6H5V4h14v2z"], [1, "main-s", 3, "innerHTML"], ["id", "", 1, "eve-area", "py-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 18 18", "width", "20", "height", "20", 1, "svg-icn"], ["d", "M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"], ["class", "rgt-des", 4, "ngFor", "ngForOf"], [1, "note-text", "d-none"], [1, "kt-mt-dw"], [1, "kt-card", "N-user-1"], [1, "kt-user-dt"], [1, "kt-user-2lt", "kt-clr-1"], [1, "kt-user-name"], [1, "kt-user-note", "kt-clr-bg-1"], [3, "innerHTML"], ["class", "form-group mt-notes", "id", "Descrip_Name", 4, "ngIf"], ["class", "kt-card N-user-2", 4, "ngIf"], [1, "kt-card", "N-user-2"], [1, "kt-user-2lt", "kt-clr-2"], [1, "kt-user-note", "kt-clr-bg-2"], ["id", "Descrip_Name", 1, "form-group", "mt-notes"], [3, "ngModel", "config", "ngModelChange", "keyup"], ["myTextarea", ""], [1, "task-form"], ["id", "todo-input", "name", "text", "placeholder", "Add a new task...", "autofocus", "true", 1, "task-input", 3, "ngModel", "ngModelChange", "keyup.enter"], ["id", "btn1", 1, "task-button", 3, "click"], [1, "task-item"], ["type", "checkbox", 1, "task-status"], [1, "task-name"], [1, "task-actions"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", "matTooltip", "More", 1, "cursor-pointer", "ast-kt-dw", 3, "matMenuTriggerFor"], ["color", "primary"], ["xPosition", "after"], ["menu", "matMenu"], ["mat-menu-item", "", "mat", "", 3, "click"], ["color", "primary", 1, "mr-2"], [1, "task-delete", "task-btns", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "aria-hidden", "true", "role", "img", "font-size", "1.5rem", "width", "1em", "height", "1em", "viewBox", "0 0 24 24", 1, "iconify", "iconify--mdi"], ["fill", "currentColor", "d", "M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z"], [1, "task-empty"], [1, "mt-3"], ["class", "mb-2 card", 4, "ngFor", "ngForOf"], [1, "mb-2", "card"], [1, "card-body", "p-2", "Replied_border_left_true_warning", "mr-2"], ["data-type", "inbox", 1, "d-flex", "flex-wrap", "align-items-center", "my-1"], [1, "symbol", "symbol-60", "symbol-2by3", "flex-shrink-0", "m-auto"], [1, "kt-inbox__actions"], [1, "d-flex", "flex-column", "flex-grow-1", "my-lg-0", "my-2", "pr-2", "w-75"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-dark-75", "font-weight-bolder", "text-hover-primary", "font-size-lg", "ml-1", "flex-1"], [1, "kt-inbox__subject", "h5", "mybutton"], [1, "my-2"], ["data-toggle", "tooltip", "title", "Created Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge--unified-dark", "kt-badge-light-bold", "kt-badge--inline"], ["src", "../creativeplanner/assets/icons/create2.png", 1, "badge-img"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-info", "kt-badge-light-bold", "kt-badge--inline"], ["role", "img", "color", "success", "aria-hidden", "true", "ng-reflect-color", "success", "data-mat-icon-type", "font", 1, "mat-icon", "notranslate", "ml-2", "mr-2", "mat-success", "material-icons", "mat-ligature-font", "mat-icon-no-color"], ["data-toggle", "tooltip", "title", "Assigned Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge--unified-info", "kt-badge-light-bold", "kt-badge--inline"], ["src", "../creativeplanner/assets/icons/create1.png", 1, "badge-img"], [1, "my-1"], ["data-toggle", "tooltip", "title", "Project Status!", "ng-reflect-ng-class", "[object Object]", 1, "kt-inbox__label", "kt-badge", "kt-badge-light-bold", "kt-badge--inline", "kt-badge--unified-warning"], [1, "mt-2"], [1, "kt-inbox__datetime"], [1, "card-footer", "text-right"], ["data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-info", "btn-sm", "mr-2"], [1, "btn", "btn-secondary", "btn-sm", "mr-2"], [1, "btn", "btn-info", "btn-sm", "mr-2", 3, "click"], [1, "boxcl-div"], [1, "box-cl", "ng-star-inserted", 2, "background-color", "#3788d8"], ["_ngcontent-gnj-c394", ""], [4, "ngIf"], [1, "kt-meeting-list-view"], ["data-toggle", "collapse", "aria-expanded", "false", 1, "mb-0", "titlediv", "d-flex", "align-items-baseline", "justify-content-between", "collapsed", 3, "href"], [1, "kt-text-wrap"], [1, "material-icons", "fs-2", "mr-2"], [1, "kt-widget__items", "mt-2", "mr-1", "px-2", "collapse", 3, "id"], [3, "innerHtml"]], template: function MeetingReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, MeetingReportComponent_div_1_Template, 156, 44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Meeting Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, MeetingReportComponent_div_11_Template, 18, 7, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 11)(13, "div", 12)(14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 16)(18, "div")(19, "div", 17)(20, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, " Participants");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 20)(25, "div", 12)(26, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 16)(29, "div")(30, "div", 22)(31, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, " Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 20)(36, "div", 12)(37, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](38, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 16)(40, "div")(41, "div", 22)(42, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, " Portfolios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 20)(47, "div", 12)(48, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](50, "path", 26)(51, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 16)(53, "div")(54, "div", 22)(55, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, " DMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "div", 20)(60, "div", 12)(61, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](63, "g", 29)(64, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "g", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](66, "path", 32)(67, "path", 33)(68, "path", 34)(69, "path", 35)(70, "path", 36)(71, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 16)(73, "div")(74, "div", 22)(75, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, " Assign Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](78, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "div", 38)(80, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](81, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_Template_button_click_82_listener() { return ctx.Insert_meetingreport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, "confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "div", 41)(85, "div", 42)(86, "div", 4)(87, "div", 5)(88, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89, "Set due date and recurrence");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "button", 7)(91, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](92, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "div", 9)(94, "div", 45)(95, "div", 46)(96, "div", 45)(97, "div", 47)(98, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](99, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](100, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](101, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](103, "Next Monday");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](105, "In a week");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "div", 49)(107, "div", 50)(108, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](109, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](110, " Does not repeat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "div", 53)(112, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, " Does not repeat");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](115, " Repeat");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](117, " Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "div", 45)(119, "div", 55)(120, "div", 56)(121, "h2", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](122, "January 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "table", 58)(124, "thead")(125, "tr")(126, "th", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](127, "Sun");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "th", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](129, "Mon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "th", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](131, "Tue");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](132, "th", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](133, "Wed");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](134, "th", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](135, "Thu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](136, "th", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](137, "Fri");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](138, "th", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](139, "Sat");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](140, "tbody")(141, "tr", 60)(142, "td", 61)(143, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](144, "29");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](145, "td", 61)(146, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](147, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](148, "td", 61)(149, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](150, "31");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](151, "td", 63)(152, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](153, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](154, "td", 64)(155, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](156, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](157, "td", 63)(158, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](159, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](160, "td", 63)(161, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](162, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](163, "tr", 60)(164, "td", 63)(165, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](166, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](167, "td", 63)(168, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](169, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](170, "td", 63)(171, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](172, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](173, "td", 63)(174, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](175, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](176, "td", 63)(177, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](178, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](179, "td", 63)(180, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](181, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](182, "td", 63)(183, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](184, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](185, "tr", 60)(186, "td", 63)(187, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](188, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](189, "td", 63)(190, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](191, "13");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](192, "td", 63)(193, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](194, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](195, "td", 63)(196, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](197, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](198, "td", 63)(199, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](200, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](201, "td", 63)(202, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](203, "17");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](204, "td", 63)(205, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](206, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](207, "tr", 60)(208, "td", 63)(209, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](210, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](211, "td", 63)(212, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](213, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](214, "td", 63)(215, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](216, "21");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](217, "td", 63)(218, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](219, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](220, "td", 63)(221, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](222, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](223, "td", 63)(224, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](225, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](226, "td", 63)(227, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](228, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](229, "tr", 60)(230, "td", 63)(231, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](232, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](233, "td", 63)(234, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](235, "27");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](236, "td", 63)(237, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](238, "28");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](239, "td", 63)(240, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](241, "29");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](242, "td", 63)(243, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](244, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](245, "td", 63)(246, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](247, "31");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](248, "td", 65)(249, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](250, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](251, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](252, "Clear date-range");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](253, "div", 67)(254, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](255, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](256, " Add time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](257, "div", 38)(258, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](259, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](260, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](261, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](262, "div", 72)(263, "div", 42)(264, "div", 4)(265, "div", 5)(266, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](267, "Custom recurrence");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](268, "button", 7)(269, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](270, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](271, "div", 9)(272, "div", 45)(273, "div", 73)(274, "div", 74)(275, "div", 75)(276, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](277, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](278, "div", 77)(279, "select", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](280, MeetingReportComponent_option_280_Template, 2, 2, "option", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](281, "div", 74)(282, "div", 75)(283, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](284, "Repeat");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](285, "div", 77)(286, "select", 78)(287, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](288, "Select Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](289, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](290, "Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](291, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](292, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](293, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](294, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](295, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](296, "Quarterly");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](297, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](298, "HalfYearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](299, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](300, "Annually");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](301, "div", 74)(302, "div", 75)(303, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](304, "Interval");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](305, "div", 45)(306, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](307, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](308, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](309, "88");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](310, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](311, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](312, "div", 45)(313, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](314, "Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](315, "div", 74)(316, "div", 75)(317, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](318, "On days");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](319, "div", 45)(320, "div", 45)(321, "div", 87)(322, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](323, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](324, " S ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](325, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](326, "input", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](327, " M ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](328, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](329, "input", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](330, " T ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](331, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](332, "input", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](333, " W ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](334, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](335, "input", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](336, " Th ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](337, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](338, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](339, " Fr ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](340, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](341, "input", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](342, " Sa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](343, "div", 74)(344, "div", 75)(345, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](346, "Starts");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](347, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](348, "input", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](349, "div", 86)(350, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](351, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](352, " Add a time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](353, "div", 99)(354, "div", 75)(355, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](356, "Ends");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](357, "div", 45)(358, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](359, "input", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](360, "label", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](361, " Never ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](362, "div", 103)(363, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](364, "input", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](365, "label", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](366, " On ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](367, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](368, "input", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](369, "div", 38)(370, "div", 107)(371, "div", 45)(372, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](373, "Weekly on Tuesday");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](374, "div", 45)(375, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](376, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](377, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](378, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](379, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_Template_div_click_379_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](380, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](381, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](382, "div", 110)(383, "div", 111)(384, "div", 112)(385, "div", 113)(386, "h4", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](387, " Previous Meeting Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](388, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_Template_a_click_388_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](389, "svg", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](390, "path", 117)(391, "path", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](392, "div", 119)(393, "div", 120)(394, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](395, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](396, MeetingReportComponent_ng_container_396_Template, 2, 1, "ng-container", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.EventScheduledjson);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.EventScheduledjson);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx.Guestcount, "/", ctx.totalguest, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx.projectcount, "/", ctx.totalproject, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx.portfoliocount, "/", ctx.totalportfolios, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx.dmscount, "/", ctx.totaldms, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx.assigncount, "/", ctx.todocount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](204);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.ProjectTypelist);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.Previousdata_meeting);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["ɵr"], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_15__.AngularEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgForm, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe], styles: [".meet-card[_ngcontent-%COMP%]{\r\n    border-radius: 10px;\r\n}\r\n.meet-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:first-child {\r\n    border-radius: 10px 10px 0 0;\r\n}\r\nh5.card-ttle[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    color: #3c4043;\r\n}\r\n.header2[_ngcontent-%COMP%] {\r\n    padding: 40px;\r\n    padding-bottom: 20px;\r\n    background-color: #f7f8fa;\r\n    border-bottom: 1px solid #ebedf2;\r\n    \r\n}\r\n.card-body2[_ngcontent-%COMP%]{\r\n    background-color: #f1f5f9;\r\n}\r\n.title-right[_ngcontent-%COMP%]{\r\n    padding-top:6px;\r\n}\r\n.main-title[_ngcontent-%COMP%]{       \r\n    width: 100%;\r\n    position: relative;\r\n    display: flex;\r\n    min-height: 32px;\r\n    padding-right: 16px;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    transition: background-color 100ms linear; \r\n    min-height: 32px;\r\n    margin-bottom: 12px;\r\n}\r\n.boxcl-div[_ngcontent-%COMP%]{\r\n    color: #5f6368;\r\n    padding-left: 3px;\r\n    width: 45px;\r\n    box-flex: 0;\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n    align-items: center;\r\n    max-height: 36px;\r\n    max-height: 36px;\r\n    align-self: stretch;\r\n    display: flex;\r\n}\r\n.box-cl[_ngcontent-%COMP%]{\r\n    border-radius: 40px;\r\n    height: 14px;\r\n    width: 14px;\r\n    margin-left: 3px;\r\n    margin-top: 3px;\r\n}\r\n.eve-area[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    position: relative;\r\n    display: flex;\r\n    min-height: 32px;\r\n    padding-right: 16px;\r\n    box-sizing: border-box;\r\n    align-items: center;\r\n    outline: none;\r\n    transition: background-color 100ms linear;    flex-wrap: wrap;\r\n}\r\n.eve-modal[_ngcontent-%COMP%]   .scrolly[_ngcontent-%COMP%]{\r\n    overflow: auto;\r\n    overflow-x: hidden;\r\n}\r\n.rgt-des[_ngcontent-%COMP%]{\r\n    padding-bottom: 6px;\r\n    padding-top: 6px;\r\n    box-flex: 1;\r\n    flex-grow: 1;\r\n    display: block;\r\n    overflow: auto;\r\n}\r\n.left-icon[_ngcontent-%COMP%]{\r\n    color: #5f6368;\r\n    padding-left: 3px;\r\n    padding-right: 17px;\r\n    width: 45px;\r\n    max-height: 52px;\r\n    display: flex;\r\n    align-items: center;\r\n    align-self: stretch;\r\n}\r\n.tool-span[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.svg-icn[_ngcontent-%COMP%]{\r\n    fill: #5f6368;\r\n}\r\n.fas-icn[_ngcontent-%COMP%]{\r\n    color: #5f6368;\r\n    font-size: 16px;\r\n}\r\n.fab-icn[_ngcontent-%COMP%]{\r\n    color: #1c1e21;\r\n    font-size: 19px;\r\n}\r\n.text-ellp[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.title-main[_ngcontent-%COMP%]{\r\n    font-family: \"Google Sans\",Roboto,Arial,sans-serif;\r\n    font-size: 22px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #3c4043;\r\n    max-height: 56px;\r\n    overflow-wrap: break-word;\r\n    word-wrap: break-word;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n}\r\n.title-day[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    letter-spacing: .2px;\r\n    line-height: 20px;\r\n    color: #3c4043;\r\n}\r\n.day-dot[_ngcontent-%COMP%]{\r\n    margin: 0 8px;\r\n    font-weight: 700;\r\n\r\n}\r\n.main-s[_ngcontent-%COMP%]{    \r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    letter-spacing: .2px;\r\n    line-height: 20px;\r\n    color: #3c4043;\r\n}\r\n.sub-s[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    letter-spacing: .3px;\r\n    line-height: 18px;\r\n    color: #5f6368;\r\n}\r\n.avar-div[_ngcontent-%COMP%], .side-div[_ngcontent-%COMP%]{\r\n    padding-left: 54px;\r\n}\r\n.card-mid[_ngcontent-%COMP%]   .eve-area[_ngcontent-%COMP%]:not(:first-child){\r\n    border-top: 1px solid #ebedf2;\r\n}\r\n.card-mid[_ngcontent-%COMP%]   .eve-area[_ngcontent-%COMP%]{\r\n    padding: 7px 20px;\r\n}\r\n.grey-bg[_ngcontent-%COMP%]{\r\n    background: #d8dadc;\r\n    min-height: 100vh;\r\n    height: 100%;\r\n}\r\n.form-check-input[_ngcontent-%COMP%] {\r\n    vertical-align: text-top;\r\n    cursor: pointer;\r\n    border-radius: 4px;\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 11' width='13' height='11' fill='none'%3e%3cpath d='M11.0426 1.02893C11.3258 0.695792 11.8254 0.655283 12.1585 0.938451C12.4917 1.22162 12.5322 1.72124 12.249 2.05437L5.51985 9.97104C5.23224 10.3094 4.72261 10.3451 4.3907 10.05L0.828197 6.88335C0.50141 6.59288 0.471975 6.09249 0.762452 5.7657C1.05293 5.43891 1.55332 5.40948 1.88011 5.69995L4.83765 8.32889L11.0426 1.02893Z' fill='%23FFFFFF'/%3e%3c/svg%3e\");\r\n}\r\n.ps-1[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    float: unset;\r\n    margin: 0 !important;\r\n}\r\nimg.hed-icn[_ngcontent-%COMP%] {\r\n    width: 24px;\r\n}\r\nimg.dms-icn[_ngcontent-%COMP%] {\r\n    width: 22px;\r\n}\r\n.head-icns[_ngcontent-%COMP%]{\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n.cards-main[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n.card-side[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    display: none;\r\n}\r\n.cards-main[_ngcontent-%COMP%]   .card-side[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n.side-acns[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.pend-btn[_ngcontent-%COMP%]{\r\n    width: max-content;\r\n    color: #fff;\r\n    background-color: #2c3e50 !important;\r\n    border-color: #2c3e50 !important;\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n    background-color: transparent;\r\n    border: 1px solid transparent;\r\n    padding: 0.4em 0.65em;\r\n    font-size: 1em;\r\n    line-height: 1.5;\r\n    border-radius: 0.25em;\r\n    cursor: pointer;\r\n}\r\n.pend-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    fill: #fff;\r\n    width: 18px;\r\n    height: 18px;\r\n}\r\n.center-data[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n.center-data[_ngcontent-%COMP%]   .meet-icon[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    padding: 0;\r\n    color: #5f6368;\r\n}\r\n.center-data[_ngcontent-%COMP%]   svg.svg-icn[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n#minusc[_ngcontent-%COMP%]{\r\n    display: block;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   #minusc[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n.todo-main[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: auto;\r\n    background-color: #fff;\r\n    font-family: var(--font);\r\n    border-radius: 5px;\r\n    font-size: 15px;\r\n    overflow: hidden;\r\n    color: #455963;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\r\n  }\r\n.todo-list[_ngcontent-%COMP%] {\r\n    max-height: 20vh;\r\n    overflow: auto;\r\n  }\r\n.task-status[_ngcontent-%COMP%] {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 18px;\r\n    height: 18px;\r\n    cursor: pointer;\r\n    border: 2px solid #bbbdc7;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    margin-right: 10px;\r\n    position: relative;\r\n  }\r\n.task-status[_ngcontent-%COMP%]:checked {\r\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='405.272' height='405.272'%3e%3cpath d='M393.401 124.425L179.603 338.208c-15.832 15.835-41.514 15.835-57.361 0L11.878 227.836c-15.838-15.835-15.838-41.52 0-57.358 15.841-15.841 41.521-15.841 57.355-.006l81.698 81.699L336.037 67.064c15.841-15.841 41.523-15.829 57.358 0 15.835 15.838 15.835 41.514.006 57.361z' fill='%23fff'/%3e%3c/svg%3e\");\r\n    background-size: 10px;\r\n    background-color: #4acea3;\r\n    border-color: #38bb90;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n  }\r\n.task-delete[_ngcontent-%COMP%] {\r\n    margin-left: 8px;\r\n  }\r\n.task-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    padding: 12px 20px;\r\n  }\r\n.task-item[_ngcontent-%COMP%]    + .task-item[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #eef0f5;\r\n  }\r\n.task-item[_ngcontent-%COMP%]:hover {\r\n    background-color: #f6fbff;\r\n  }\r\n.task-name[_ngcontent-%COMP%] {\r\n    margin-right: auto;\r\n    flex: 1;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    margin-bottom: 0;\r\n    line-height: 26px;\r\n  }\r\n.task-item.is-completed[_ngcontent-%COMP%]    > .task-name[_ngcontent-%COMP%] {\r\n    -webkit-text-decoration: line-through;\r\n    text-decoration: line-through;\r\n  }\r\n.task-item.is-completed[_ngcontent-%COMP%] {\r\n    background-color: rgba(74, 206, 163, 0.1);\r\n  }\r\n.task-header-title[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    padding: 20px 20px 6px 20px;\r\n  }\r\n.task-tools[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    align-items: flex-start;\r\n    padding: 0 20px;\r\n  }\r\n.task-filter[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    padding: 3px 8px;\r\n    background: 0;\r\n    font-size: 14px;\r\n    line-height: 1;\r\n    cursor: pointer;\r\n    font-family: var(--font);\r\n    color: #8a9ca5;\r\n    border-radius: 20px;\r\n  }\r\n.task-filter.is-active[_ngcontent-%COMP%] {\r\n    background-color: #7996a5;\r\n    color: #fff;\r\n  }\r\n.task-count[_ngcontent-%COMP%] {\r\n    color: #8a9ca5;\r\n    font-size: 14px;\r\n  }\r\n.task-form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-top: 10px;\r\n  }\r\n.task-input[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    font-size: 16px;\r\n    font-family: var(--font);\r\n    padding: 10px 20px;\r\n    border: 0;\r\n    box-shadow: 0 -1px 0 #e2e4ea inset;\r\n    color: #455963;\r\n  }\r\n.task-input[_ngcontent-%COMP%]::placeholder {\r\n    color: #a8b5bb;\r\n  }\r\n.task-input[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 -1px 0 #bdcdd6 inset;\r\n    outline: none;\r\n  }\r\n.task-button[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n.task-btns[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background: transparent;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    margin-left: 8px;\r\n  }\r\n.task-btns[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    color: #737373;\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 24px;\r\n    max-width: 24px;\r\n    vertical-align: middle;\r\n}\r\n.task-delete[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\r\n    color: #dc4771;\r\n}\r\n.task-actions[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.task-item[_ngcontent-%COMP%]:hover    > .task-actions[_ngcontent-%COMP%], .task-item[_ngcontent-%COMP%]:focus    > .task-actions[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n.task-empty[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg fill='%23f4f4f4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 486.463 486.463'%3e%3cpath d='M243.225 333.382c-13.6 0-25 11.4-25 25s11.4 25 25 25c13.1 0 25-11.4 24.4-24.4.6-14.3-10.7-25.6-24.4-25.6z'/%3e%3cpath d='M474.625 421.982c15.7-27.1 15.8-59.4.2-86.4l-156.6-271.2c-15.5-27.3-43.5-43.5-74.9-43.5s-59.4 16.3-74.9 43.4l-156.8 271.5c-15.6 27.3-15.5 59.8.3 86.9 15.6 26.8 43.5 42.9 74.7 42.9h312.8c31.3 0 59.4-16.3 75.2-43.6zm-34-19.6c-8.7 15-24.1 23.9-41.3 23.9h-312.8c-17 0-32.3-8.7-40.8-23.4-8.6-14.9-8.7-32.7-.1-47.7l156.8-271.4c8.5-14.9 23.7-23.7 40.9-23.7 17.1 0 32.4 8.9 40.9 23.8l156.7 271.4c8.4 14.6 8.3 32.2-.3 47.1z'/%3e%3cpath d='M237.025 157.882c-11.9 3.4-19.3 14.2-19.3 27.3.6 7.9 1.1 15.9 1.7 23.8 1.7 30.1 3.4 59.6 5.1 89.7.6 10.2 8.5 17.6 18.7 17.6s18.2-7.9 18.7-18.2c0-6.2 0-11.9.6-18.2 1.1-19.3 2.3-38.6 3.4-57.9.6-12.5 1.7-25 2.3-37.5 0-4.5-.6-8.5-2.3-12.5-5.1-11.2-17-16.9-28.9-14.1z'/%3e%3c/svg%3e\");\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    font-weight: 500;\r\n    font-size: 18px;\r\n    background-size: 80px;\r\n  }\r\n.btn-white[_ngcontent-%COMP%]{\r\n    background-color: #fff;\r\n    border: 1px dashed #ccc;\r\n    border-radius: 40px;\r\n    color: #737373;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    height: 26px;\r\n    margin: 0 4px;\r\n    padding: 0 10px 0 8px;\r\n  }\r\n@media (max-width: 600px) {\r\n    .task-actions[_ngcontent-%COMP%] {\r\n      display: block;\r\n    }\r\n  }\r\n  .angular-editor-textarea {\r\n    height: 4rem !important;\r\n}\r\n.drops[_ngcontent-%COMP%]{\r\n    z-index: 95;\r\n    display: none;\r\n    float: left;\r\n    min-width: 10rem;\r\n    padding: 0.5rem 0;\r\n    margin: 0.125rem 0 0;\r\n    font-size: 1rem;\r\n    color: #212529;\r\n    text-align: left;\r\n    list-style: none;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    position: absolute;\r\n    box-shadow: 0px 0px 50px 0px rgba(82, 63, 105, 0.15);\r\n    border-radius: 4px;\r\n}\r\n.drops.show[_ngcontent-%COMP%]{\r\n    display: block;\r\n    min-width: 400px;\r\n}\r\n.drops-item[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    padding: 0.25rem 1.5rem;\r\n    clear: both;\r\n    font-weight: 400;\r\n    color: #74788d;\r\n    text-align: inherit;\r\n    white-space: nowrap;\r\n    background-color: transparent;\r\n    border: 0;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]{\r\n  padding: 0.8rem 0;\r\n  min-width: 270px;\r\n  margin-top: 5px;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{\r\n  padding: 0.4rem 1rem;\r\n  cursor: pointer;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n  background: #f1f6fd;\r\n  color: #0b0e1f;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  display: flex;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .ckc-icn[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  color: #3b93fc;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .dropdown-item.d-range[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline !important;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active {\r\n  background: none;\r\n}\r\n.kt-input[_ngcontent-%COMP%] {\r\n  height: 36px;\r\n  line-height: 25px;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  \r\n  line-height: 24px;\r\n  background-color: rgba(255, 255, 255, 0);\r\n  color: #3c4043;\r\n  border: none;\r\n  border-radius: 0;\r\n  border-bottom: 2px solid #dadce0;\r\n  padding: 0.65rem 1rem;\r\n}\r\n.kt-input[_ngcontent-%COMP%]:focus {\r\n  border-bottom: 2px solid #1a73e8;\r\n}\r\n.calendar-wrap[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 0.75em;\r\n  margin: auto;\r\n  font-size: 4vw;\r\n  background-color: #fff;\r\n  border-radius: 1.5em;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  box-shadow:\r\n    0 0.0625em 0.25em rgba(0,20,50,0.2),\r\n    0 0.5em 0.5em 0.125em rgba(0,20,50,0.1);\r\n}\r\n@media (min-width: 500px) {\r\n  .calendar-wrap[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    font-size: 13px;\r\n  }\r\n}\r\n.month-year[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.75em;\r\n  font-weight: normal;\r\n  font-size: 1.25em;\r\n  text-align: center;\r\n}\r\n.calendar[_ngcontent-%COMP%] {\r\n  table-layout: fixed;\r\n  width: 100%;\r\n  margin-bottom: 0.75em;\r\n  overflow: hidden;\r\n  border-collapse: collapse;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n.day-title[_ngcontent-%COMP%] {\r\n  width: 25px;\r\n  height: 40px;\r\n  vertical-align: top;\r\n  font-weight: normal;\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.0625em;\r\n  box-shadow: inset 0 -0.875em #fff, inset 0 -1em rgba(0,20,50,0.1);\r\n  text-align: center;\r\n}\r\n.day[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 20px;\r\n  height: 30px;\r\n}\r\n.day[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n.day[_ngcontent-%COMP%]:focus   .day-number[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 80%;\r\n  height: 80%;\r\n  transform: translate(-50%,-50%);\r\n  border: 0.25em solid #0288d1;\r\n  border-radius: 50%;\r\n}\r\n.day.active-a[_ngcontent-%COMP%]:focus   .day-number[_ngcontent-%COMP%]::after, .day.active-b[_ngcontent-%COMP%]:focus   .day-number[_ngcontent-%COMP%]::after {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.day.today[_ngcontent-%COMP%]:focus   .day-number[_ngcontent-%COMP%]::after {\r\n  width: 102%;\r\n  height: 102%;\r\n}\r\n.day[_ngcontent-%COMP%]:hover   span.day-number[_ngcontent-%COMP%] {\r\n  color: #0288d1;\r\n}\r\n.day[_ngcontent-%COMP%]:first-child, .day[_ngcontent-%COMP%]:last-child {\r\n  color: rgba(0,0,0,0.5);\r\n}\r\n.day.range[_ngcontent-%COMP%] {\r\n  color: #0288d1;\r\n  background-color: #e1f5fe;\r\n}\r\n.day.range.active-a[_ngcontent-%COMP%], .day[_ngcontent-%COMP%]:not(.range)    + .day.range.active-b[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: inset -1.5em 0 #e1f5fe;\r\n}\r\n.day.range.active-b[_ngcontent-%COMP%], .day.range[_ngcontent-%COMP%]    + .day.range.active-a[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: inset 1.5em 0 #e1f5fe;\r\n}\r\n.day.range.active-a[_ngcontent-%COMP%]:first-child, .day.range.active-b[_ngcontent-%COMP%]:first-child {\r\n  box-shadow: none;\r\n}\r\n.day.range.active-a[_ngcontent-%COMP%]:first-child    + .day.range[_ngcontent-%COMP%], .day.range.active-b[_ngcontent-%COMP%]:first-child    + .day.range[_ngcontent-%COMP%] {\r\n  box-shadow: -1.5em 0 #e1f5fe;\r\n}\r\n.day.range.active-a[_ngcontent-%COMP%]:first-child    + .day[_ngcontent-%COMP%]:not(.range), .day.range.active-b[_ngcontent-%COMP%]:first-child    + .day[_ngcontent-%COMP%]:not(.range) {\r\n  box-shadow: -4.5em 0 #e1f5fe;\r\n}\r\n.day.range.active-a[_ngcontent-%COMP%]:first-child    + .day.range.active-b[_ngcontent-%COMP%] {\r\n  box-shadow:\r\n    -1.5em 0 #e1f5fe,\r\n    inset 1.5em 0 #e1f5fe;\r\n}\r\n.day-number[_ngcontent-%COMP%] {\r\n  position: relative;\r\n    z-index: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 30px;\r\n    width: 30px;\r\n    border-radius: 50%;\r\n}\r\n.day.active-a[_ngcontent-%COMP%]   span.day-number[_ngcontent-%COMP%], .day.active-b[_ngcontent-%COMP%]   span.day-number[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #03A9F4;\r\n}\r\n.day.prev-mon[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%], .day.next-mon[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\r\n  color: rgba(0,0,0,0.3);\r\n}\r\n.day.prev-mon[class*=\"active\"][_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%], .day.next-mon[class*=\"active\"][_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\r\n  color: rgba(255,255,255,0.5);\r\n  background-color: #81D4FA;\r\n}\r\n.day.today[_ngcontent-%COMP%]   span.day-number[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  border: 0.25em solid transparent;\r\n  box-shadow: inset 0 0 0 2em #37474F;\r\n}\r\n.calendar-wrap[_ngcontent-%COMP%]   .reset[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n.rec-btns[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.btn-min[_ngcontent-%COMP%] {\r\n  min-width: 160px;\r\n  min-height: 34px;\r\n}\r\n.modal-lg.w-min[_ngcontent-%COMP%] {\r\n  min-width: 500px;\r\n}\r\n.repeat-day.active[_ngcontent-%COMP%], .repeat-month.active[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: #1a73e8;\r\n}\r\n.repeat-day[_ngcontent-%COMP%], .repeat-month[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    box-sizing: border-box;\r\n    width: 24px;\r\n    height: 24px;\r\n    font-size: 10px;\r\n    font-weight: 500;\r\n    border-radius: 50%;\r\n    background-color: #f1f3f4;\r\n    color: #80868b;\r\n    margin-right: 8px;\r\n    cursor: pointer;\r\n    text-transform: capitalize;\r\n    position: relative;\r\n}\r\n.rep-chk[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n.w-min-150[_ngcontent-%COMP%]{\r\n  min-width: 150px;\r\n}\r\n.left-lbls[_ngcontent-%COMP%] {\r\n  min-width: 60px;\r\n  text-align: right;\r\n  margin-right: 10px;\r\n}\r\n.numbr[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  text-align: center;\r\n  padding: 0.65rem 0;\r\n}\r\n.arrws[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  text-align: center;\r\n}\r\n.arw-spn[_ngcontent-%COMP%] {\r\n  height: calc(1.5em + 1.3rem + 2px);\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #e2e5ec;\r\n  border-radius: 4px;\r\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  display: block;\r\n  width: 50px;\r\n  text-align: center;\r\n  padding: 0.65rem 0;\r\n}\r\n.form-check-input[type=radio][_ngcontent-%COMP%], .form-check-input[_ngcontent-%COMP%]:checked[type=radio] {\r\n  -webkit-appearance: radio;\r\n  appearance: radio;\r\n  background-image: none;\r\n}\r\n  ng-select {\r\n  border-bottom: none !important;\r\n  padding: 0 !important;\r\n}\r\n\r\n.Replied_border_left_true_warning[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #ffb822;\r\n}\r\n.Replied_border_left_true_primary[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #95bed9;\r\n}\r\n.Replied_border_left_true_success[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #3CB371;\r\n}\r\n.Replied_border_left_true_Danger[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #F58A8B;\r\n}\r\n.Replied_border_left_true_hold[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #c0b5dc\r\n}\r\n.Replied_border_left_true_rejected[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #f5c293;\r\n}\r\n.Replied_border_left_true_underApprovals[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #BD838C;\r\n}\r\n.Replied_border_left_true_forwardUnderApproval[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #E0B1D7;\r\n}\r\n.Replied_border_left_true_completeUnderApproval[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #98c7bf;\r\n}\r\n.Replied_border_left_true_projectHold[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #C0B5DC;\r\n}\r\n.Replied_border_left_true_NewProject[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #3699ff;\r\n}\r\n.Replied_border_left_true_DeadlineExtended[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #E0B1D7;\r\n}\r\n.Replied_border_left_true_HoldunderApp[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #a85098;\r\n}\r\n.Replied_border_left_true_NewToDo[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #5088a8;\r\n}\r\n.info-icon-cir[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: #5867dd;\r\n}\r\n.desc[_ngcontent-%COMP%]{\r\n  color: grey;\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n}\r\n.remks[_ngcontent-%COMP%]{\r\nfont-size: 12px;\r\n\r\n}\r\n.kt-badge.kt-badge--inline[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  width: auto;\r\n  padding: 0.15rem 0.75rem;\r\n  border-radius: 2px;\r\n  margin-left: 4px;\r\n}\r\n.badge-img[_ngcontent-%COMP%] {\r\n  width: 16px;\r\n  padding: 2px 0;\r\n  margin-right: 4px;\r\n}\r\n.mat-icon.mat-primary[_ngcontent-%COMP%] {\r\n  color: #3699ff;\r\n}\r\nmat-icon[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n.cursor-pointer[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n.input-group-text[_ngcontent-%COMP%] > .mat-icon-button[_ngcontent-%COMP%] {\r\n  line-height: 35px !important;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  right: 0;\r\n  background: #ffffff;\r\n  box-shadow: 0px 1px 9px -3px rgb(0 0 0 / 75%);\r\n  border-left: 1px solid #ffffff;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  overflow-y: auto;\r\n  z-index: 999;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  backface-visibility: hidden;\r\n  -webkit-backface-visibility: hidden;\r\n  \r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n  background-color: #f5f6fc;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #333;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 25px;\r\n  font-size: 20px;\r\n  margin-left: 50px;\r\n}\r\n.info-icon-cir[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  color: #5867dd;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%] {\r\n  border-bottom: 0.07rem dashed #dedede;\r\n  padding: 6px;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%] {\r\n  border-bottom: 0.07rem dashed rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%] {\r\n  width: 270px;\r\n  text-align: left;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.side-bar-box[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  padding-left: 0px !important;\r\n}\r\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #f1f1f1;\r\n  font-weight: 400;\r\n}\r\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n  border-bottom: none\r\n}\r\n.custom-textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 150px;\r\n  font-size: 16px;\r\n  padding-left: 25px;\r\n  background-repeat: no-repeat;\r\n  background-position: left center;\r\n  line-height: 1;\r\n  border: 1px solid #ccc;\r\n}\r\n.custom-textarea[_ngcontent-%COMP%]::before {\r\n  content: \"\u2022 \";\r\n  display: inline-block;\r\n  width: 2em;\r\n  margin-left: -1em;\r\n}\r\n.angular-editor-textarea[_ngcontent-%COMP%] {\r\n  max-height: 150px !important;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1; \r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #888; \r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555; \r\n}\r\n.scrolly[_ngcontent-%COMP%] {\r\n  max-height: 100vh;\r\n  overflow: auto;\r\n}\r\n.meet-card[_ngcontent-%COMP%] {\r\n  height: 97vh;\r\n}\r\n.cstm-swd[_ngcontent-%COMP%] {\r\n  box-shadow: 0px 3px 7px #8d8d8d52;\r\n}\r\nspan.statusicn[_ngcontent-%COMP%] {\r\n  right: 2px;\r\n  position: absolute;\r\n  top: 4px;\r\n}\r\n.kt-timer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n    font-size: 16px;\r\n    color: #2786fb;\r\n    text-transform: uppercase;\r\n    background-color: #e4f0ff;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.kt-timer[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n  text-transform: capitalize;\r\n}\r\nspan.kt-dt-cnt-view[_ngcontent-%COMP%] {\r\n  color: #2786fb;\r\n  border-right: 1px solid #ccc;\r\n  padding-right: 10px;\r\n  margin-right: 8px;\r\n  width: 26px;\r\n  display: inline-block;\r\n}\r\n.note-text[_ngcontent-%COMP%] {\r\n  font-family: Arial, sans-serif;\r\n}\r\nspan.time-play-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  position: relative;\r\n  top: -2px;\r\n}\r\nspan.time-play-btn[_ngcontent-%COMP%] {\r\n  margin-left: 3px;\r\n  font-size: 12px;\r\n \r\n}\r\n.ast-kt-dw[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 4px;\r\n}\r\n.admin-check[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.admin-check[_ngcontent-%COMP%] {\r\n  margin-right: 20px;\r\n}\r\n.admin-check[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  text-transform: capitalize;\r\n  font-style: italic;\r\n  font-size: 11px;\r\n}\r\nspan.admin-check-svg[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n  position: relative;\r\n  top: -2px;\r\n}\r\n.angular-editor-textarea[_ngcontent-%COMP%] {\r\n  height: 135px !important;\r\n}\r\n.note-text[_ngcontent-%COMP%] {\r\n  max-height: 200px;\r\n  overflow: auto;\r\n}\r\n.kt-multy-user-dw.show[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  transform: unset !important;\r\n}\r\n.kt-admin-mute[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n  fill: #959595;\r\n}\r\n.kt-admin-mute[_ngcontent-%COMP%] {\r\n  color: #959595;\r\n}\r\n\r\n.kt-user-2lt[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #ccc;\r\n  text-align: center;\r\n  border-radius: 100px;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  display: flex;\r\n  color: #fff;\r\n  align-items: center;\r\n  justify-content: center;line-height: 15px;text-transform: uppercase;\r\n}\r\n.kt-user-dt[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.kt-user-name[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n  font-size: 14px;\r\n  text-transform: capitalize;\r\n  font-weight: 500;\r\n  color: #5e5e5e;\r\n}\r\nspan.kt-met-time-date[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n  color: #8f8f8f;\r\n  margin-left: 6px;\r\n  font-weight: 400;\r\n  letter-spacing: 1px;\r\n}\r\n.kt-user-note[_ngcontent-%COMP%] {\r\n  background-color:#f7f8fa;\r\n  padding: 8px;\r\n  border-radius: 5px;\r\n  margin-top: 5px;\r\n}\r\n.kt-user-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  margin-bottom: 5px;\r\n  color: #646464;\r\n}\r\n.kt-user-note[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  padding-left: 22px;\r\n}\r\n.kt-user-note[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  color: #646464;\r\n  font-size: 13px;\r\n}\r\n.kt-card[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n.kt-organizer-dt[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n  align-items: center;\r\n  padding-left: 54px;\r\n}\r\nspan.side-icns.kt-org-ic[_ngcontent-%COMP%] {\r\n  width: 45px;\r\n}\r\n.kt-org-v[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n  text-transform: capitalize;\r\n  letter-spacing: 0.5px;\r\n  color: #a3a3a3;\r\n}\r\n.kt-org-v[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-bottom: 0px;\r\n  font-size: 13px;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  color: #727272;\r\n}\r\n.kt-organizer-dt[_ngcontent-%COMP%] {\r\n  background-color: #f0f7ff;padding-right: 0px !important;\r\n}\r\n.kt-clr-1[_ngcontent-%COMP%] {\r\n  background-color: #ffac00 !important;\r\n}\r\n.kt-clr-bg-1[_ngcontent-%COMP%] {\r\n  background-color: #fffaef !important;\r\n}\r\n.kt-clr-2[_ngcontent-%COMP%] {\r\n  background-color: #537c4a !important;\r\n}\r\n.kt-clr-bg-2[_ngcontent-%COMP%] {\r\n  background-color: #efffe7 !important\r\n}\r\n.kt-clr-3[_ngcontent-%COMP%] {\r\n  background-color: #7b63ff !important;\r\n}\r\n.kt-clr-bg-3[_ngcontent-%COMP%] {\r\n  background-color:#7b63ff1a !important;\r\n}\r\n.kt-mt-dw[_ngcontent-%COMP%] {\r\n  max-height: 150px;\r\n  overflow: auto;\r\n}\r\n\r\n.svg-met-note[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  height: 25px;\r\n  width: 25px;\r\n  position: fixed;\r\n  fill: #ffffff;\r\n  position: relative;\r\n  top: 2px;\r\n}\r\n.kt-met-notes-v[_ngcontent-%COMP%] {\r\n  padding: 5px 15px;\r\n  background-color: transparent;\r\n  border: 1px solid #2786fb;\r\n  border-radius: 5px;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  letter-spacing: 0.5px; \r\n  background-color: #2786fb;\r\n  color: #fff;cursor: pointer;\r\n}\r\n.titlediv[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  cursor: pointer;\r\n  color: #636363;\r\n  font-size: 13px;\r\n  line-height: 27px;\r\n width: 100%;\r\n  font-weight: 400;\r\n  padding: 5px 4px;\r\n  border-radius: 2px;\r\n  background-color: #ecf5ff;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n}\r\n.kt-text-wrap[_ngcontent-%COMP%]{\r\n  white-space: nowrap;\r\n  overflow: hidden!important;\r\n  text-overflow: ellipsis;\r\n  width: 75%;\r\n}\r\n.titlediv.collapsed[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  transform: rotate(270deg);\r\n}\r\n.titlediv[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  right: 0;\r\n  top: 6px;\r\n  color: #747a96;\r\n}\r\n.kt-meeting-list-view[_ngcontent-%COMP%] {\r\n  margin-bottom: 5px;\r\n}\r\n.kt-met-notes-v[_ngcontent-%COMP%]:hover {\r\n  background-color: #f7f8fa;\r\n  color: #2786fb;\r\n  fill: #2786fb;\r\n}\r\n.kt-met-notes-v[_ngcontent-%COMP%]:hover   .svg-met-note[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  fill: #2786fb;\r\n}\r\n.admin-check[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\r\n  background-color: #e1efff;\r\n  color: #2786fb;\r\n  padding: 1px 2px;\r\n  border-radius: 3px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmctcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsMEVBQTBFO0FBQzlFO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFHbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFFbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFFYix5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXO0lBRVgsV0FBVztJQUVYLFlBQVk7SUFFWixjQUFjO0lBRWQsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBR2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBRW5CLHNCQUFzQjtJQUV0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUViLHlDQUF5QyxLQUFLLGVBQWU7QUFDakU7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFFaEIsV0FBVztJQUVYLFlBQVk7SUFDWixjQUFjO0lBQ2QsY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFD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QUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0Esb0RBQW9EO0FBQ3BEO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsV0FBVyxDQUFDLGVBQWU7QUFDN0I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEIsV0FBVztFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1IsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGFBQWE7QUFDZjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoibWVldGluZy1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZWV0LWNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5tZWV0LWNhcmQgLmNhcmQtaGVhZGVyOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbn1cclxuaDUuY2FyZC10dGxle1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjM2M0MDQzO1xyXG59XHJcbi5oZWFkZXIyIHtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4ZmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWRmMjtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZjlhOGQ0LCNkOGI0ZmUgLCM4MThjZjYpOyAqL1xyXG59XHJcbi5jYXJkLWJvZHkye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcclxufVxyXG4udGl0bGUtcmlnaHR7XHJcbiAgICBwYWRkaW5nLXRvcDo2cHg7XHJcbn1cclxuLm1haW4tdGl0bGV7ICAgICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgbGluZWFyOyBcclxuICAgIG1pbi1oZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbi5ib3hjbC1kaXZ7XHJcbiAgICBjb2xvcjogIzVmNjM2ODtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xyXG4gICAgYm94LWZsZXg6IDA7XHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMDtcclxuICAgIGZsZXgtZ3JvdzogMDtcclxuICAgIC13ZWJraXQtZmxleC1zaHJpbms6IDA7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNnB4O1xyXG4gICAgbWF4LWhlaWdodDogMzZweDtcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5ib3gtY2x7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi5ldmUtYXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLWhlaWdodDogMzJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBsaW5lYXI7ICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uZXZlLW1vZGFsIC5zY3JvbGx5e1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuLnJndC1kZXN7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICBib3gtZmxleDogMTtcclxuICAgIC13ZWJraXQtZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4ubGVmdC1pY29ue1xyXG4gICAgY29sb3I6ICM1ZjYzNjg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE3cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIG1heC1oZWlnaHQ6IDUycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbn1cclxuLnRvb2wtc3BhbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc3ZnLWljbntcclxuICAgIGZpbGw6ICM1ZjYzNjg7XHJcbn1cclxuLmZhcy1pY257XHJcbiAgICBjb2xvcjogIzVmNjM2ODtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uZmFiLWljbntcclxuICAgIGNvbG9yOiAjMWMxZTIxO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcbi50ZXh0LWVsbHB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi50aXRsZS1tYWlue1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIixSb2JvdG8sQXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGNvbG9yOiAjM2M0MDQzO1xyXG4gICAgbWF4LWhlaWdodDogNTZweDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcbi50aXRsZS1kYXl7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4ycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjM2M0MDQzO1xyXG59XHJcbi5kYXktZG90e1xyXG4gICAgbWFyZ2luOiAwIDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG59XHJcbi5tYWluLXN7ICAgIFxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzNjNDA0MztcclxufVxyXG4uc3ViLXN7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4zcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGNvbG9yOiAjNWY2MzY4O1xyXG59XHJcbi5hdmFyLWRpdiwgLnNpZGUtZGl2e1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1NHB4O1xyXG59XHJcblxyXG4uY2FyZC1taWQgLmV2ZS1hcmVhOm5vdCg6Zmlyc3QtY2hpbGQpe1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYmVkZjI7XHJcbn1cclxuLmNhcmQtbWlkIC5ldmUtYXJlYXtcclxuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xyXG59XHJcbi5ncmV5LWJne1xyXG4gICAgYmFja2dyb3VuZDogI2Q4ZGFkYztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5mb3JtLWNoZWNrLWlucHV0IHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTMgMTEnIHdpZHRoPScxMycgaGVpZ2h0PScxMScgZmlsbD0nbm9uZSclM2UlM2NwYXRoIGQ9J00xMS4wNDI2IDEuMDI4OTNDMTEuMzI1OCAwLjY5NTc5MiAxMS44MjU0IDAuNjU1MjgzIDEyLjE1ODUgMC45Mzg0NTFDMTIuNDkxNyAxLjIyMTYyIDEyLjUzMjIgMS43MjEyNCAxMi4yNDkgMi4wNTQzN0w1LjUxOTg1IDkuOTcxMDRDNS4yMzIyNCAxMC4zMDk0IDQuNzIyNjEgMTAuMzQ1MSA0LjM5MDcgMTAuMDVMMC44MjgxOTcgNi44ODMzNUMwLjUwMTQxIDYuNTkyODggMC40NzE5NzUgNi4wOTI0OSAwLjc2MjQ1MiA1Ljc2NTdDMS4wNTI5MyA1LjQzODkxIDEuNTUzMzIgNS40MDk0OCAxLjg4MDExIDUuNjk5OTVMNC44Mzc2NSA4LjMyODg5TDExLjA0MjYgMS4wMjg5M1onIGZpbGw9JyUyM0ZGRkZGRicvJTNlJTNjL3N2ZyUzZVwiKTtcclxufVxyXG4ucHMtMXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiB1bnNldDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcbmltZy5oZWQtaWNuIHtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG59XHJcbmltZy5kbXMtaWNuIHtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG59XHJcbi5oZWFkLWljbnN7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxufVxyXG4uY2FyZHMtbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jYXJkLXNpZGV7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY2FyZHMtbWFpbiAuY2FyZC1zaWRle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uc2lkZS1hY25zIGF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBlbmQtYnRue1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMyYzNlNTAgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDAuNGVtIDAuNjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucGVuZC1idG4gc3ZnIHtcclxuICAgIGZpbGw6ICNmZmY7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxufVxyXG5cclxuLmNlbnRlci1kYXRhIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNlbnRlci1kYXRhIC5tZWV0LWljb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6ICM1ZjYzNjg7XHJcbn1cclxuLmNlbnRlci1kYXRhIHN2Zy5zdmctaWNuIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4jbWludXNje1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNvbGxhcHNlZCAjbWludXNje1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRvZG8tbWFpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY29sb3I6ICM0NTU5NjM7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuICBcclxuICAudG9kby1saXN0IHtcclxuICAgIG1heC1oZWlnaHQ6IDIwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnRhc2stc3RhdHVzIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiYmJkYzc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAudGFzay1zdGF0dXM6Y2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDA1LjI3MicgaGVpZ2h0PSc0MDUuMjcyJyUzZSUzY3BhdGggZD0nTTM5My40MDEgMTI0LjQyNUwxNzkuNjAzIDMzOC4yMDhjLTE1LjgzMiAxNS44MzUtNDEuNTE0IDE1LjgzNS01Ny4zNjEgMEwxMS44NzggMjI3LjgzNmMtMTUuODM4LTE1LjgzNS0xNS44MzgtNDEuNTIgMC01Ny4zNTggMTUuODQxLTE1Ljg0MSA0MS41MjEtMTUuODQxIDU3LjM1NS0uMDA2bDgxLjY5OCA4MS42OTlMMzM2LjAzNyA2Ny4wNjRjMTUuODQxLTE1Ljg0MSA0MS41MjMtMTUuODI5IDU3LjM1OCAwIDE1LjgzNSAxNS44MzggMTUuODM1IDQxLjUxNC4wMDYgNTcuMzYxeicgZmlsbD0nJTIzZmZmJy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhY2VhMztcclxuICAgIGJvcmRlci1jb2xvcjogIzM4YmI5MDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWRlbGV0ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuICBcclxuICAudGFzay1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIH1cclxuICBcclxuICAudGFzay1pdGVtICsgLnRhc2staXRlbSB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZjBmNTtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2staXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmYmZmO1xyXG4gIH1cclxuICBcclxuICAudGFzay1uYW1lIHtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGZsZXg6IDE7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuICBcclxuICAudGFzay1pdGVtLmlzLWNvbXBsZXRlZCA+IC50YXNrLW5hbWUge1xyXG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gIH1cclxuICBcclxuICAudGFzay1pdGVtLmlzLWNvbXBsZXRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc0LCAyMDYsIDE2MywgMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2staGVhZGVyLXRpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggNnB4IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLXRvb2xzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2stZmlsdGVyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDNweCA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XHJcbiAgICBjb2xvcjogIzhhOWNhNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWZpbHRlci5pcy1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5OTZhNTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAudGFzay1jb3VudCB7XHJcbiAgICBjb2xvcjogIzhhOWNhNTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2stZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2staW5wdXQge1xyXG4gICAgZmxleDogMTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgLTFweCAwICNlMmU0ZWEgaW5zZXQ7XHJcbiAgICBjb2xvcjogIzQ1NTk2MztcclxuICB9XHJcbiAgXHJcbiAgLnRhc2staW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNhOGI1YmI7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2E4YjViYjtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2staW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYThiNWJiO1xyXG4gIH1cclxuICBcclxuICAudGFzay1pbnB1dDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0xcHggMCAjYmRjZGQ2IGluc2V0O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2stYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWJ0bnMge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIC50YXNrLWJ0bnMgc3ZnIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGNvbG9yOiAjNzM3MzczO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXgtd2lkdGg6IDI0cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi50YXNrLWRlbGV0ZSBzdmd7XHJcbiAgICBjb2xvcjogI2RjNDc3MTtcclxufVxyXG4udGFzay1hY3Rpb25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuICAudGFzay1pdGVtOmhvdmVyID4gLnRhc2stYWN0aW9ucywgLnRhc2staXRlbTpmb2N1cyA+IC50YXNrLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2stZW1wdHkge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgZmlsbD0nJTIzZjRmNGY0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0ODYuNDYzIDQ4Ni40NjMnJTNlJTNjcGF0aCBkPSdNMjQzLjIyNSAzMzMuMzgyYy0xMy42IDAtMjUgMTEuNC0yNSAyNXMxMS40IDI1IDI1IDI1YzEzLjEgMCAyNS0xMS40IDI0LjQtMjQuNC42LTE0LjMtMTAuNy0yNS42LTI0LjQtMjUuNnonLyUzZSUzY3BhdGggZD0nTTQ3NC42MjUgNDIxLjk4MmMxNS43LTI3LjEgMTUuOC01OS40LjItODYuNGwtMTU2LjYtMjcxLjJjLTE1LjUtMjcuMy00My41LTQzLjUtNzQuOS00My41cy01OS40IDE2LjMtNzQuOSA0My40bC0xNTYuOCAyNzEuNWMtMTUuNiAyNy4zLTE1LjUgNTkuOC4zIDg2LjkgMTUuNiAyNi44IDQzLjUgNDIuOSA3NC43IDQyLjloMzEyLjhjMzEuMyAwIDU5LjQtMTYuMyA3NS4yLTQzLjZ6bS0zNC0xOS42Yy04LjcgMTUtMjQuMSAyMy45LTQxLjMgMjMuOWgtMzEyLjhjLTE3IDAtMzIuMy04LjctNDAuOC0yMy40LTguNi0xNC45LTguNy0zMi43LS4xLTQ3LjdsMTU2LjgtMjcxLjRjOC41LTE0LjkgMjMuNy0yMy43IDQwLjktMjMuNyAxNy4xIDAgMzIuNCA4LjkgNDAuOSAyMy44bDE1Ni43IDI3MS40YzguNCAxNC42IDguMyAzMi4yLS4zIDQ3LjF6Jy8lM2UlM2NwYXRoIGQ9J00yMzcuMDI1IDE1Ny44ODJjLTExLjkgMy40LTE5LjMgMTQuMi0xOS4zIDI3LjMuNiA3LjkgMS4xIDE1LjkgMS43IDIzLjggMS43IDMwLjEgMy40IDU5LjYgNS4xIDg5LjcuNiAxMC4yIDguNSAxNy42IDE4LjcgMTcuNnMxOC4yLTcuOSAxOC43LTE4LjJjMC02LjIgMC0xMS45LjYtMTguMiAxLjEtMTkuMyAyLjMtMzguNiAzLjQtNTcuOS42LTEyLjUgMS43LTI1IDIuMy0zNy41IDAtNC41LS42LTguNS0yLjMtMTIuNS01LjEtMTEuMi0xNy0xNi45LTI4LjktMTQuMXonLyUzZSUzYy9zdmclM2VcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogODBweDtcclxuICB9XHJcbiAgLmJ0bi13aGl0ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBjb2xvcjogIzczNzM3MztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgcGFkZGluZzogMCAxMHB4IDAgOHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC50YXNrLWFjdGlvbnMge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbjo6bmctZGVlcCAuYW5ndWxhci1lZGl0b3ItdGV4dGFyZWEge1xyXG4gICAgaGVpZ2h0OiA0cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRyb3Bze1xyXG4gICAgei1pbmRleDogOTU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICBtYXJnaW46IDAuMTI1cmVtIDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNTBweCAwcHggcmdiYSg4MiwgNjMsIDEwNSwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmRyb3BzLnNob3d7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbn1cclxuLmRyb3BzLWl0ZW17XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAxLjVyZW07XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzc0Nzg4ZDtcclxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zb3J0LWRyb3B7XHJcbiAgcGFkZGluZzogMC44cmVtIDA7XHJcbiAgbWluLXdpZHRoOiAyNzBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnNvcnQtZHJvcCAuZHJvcGRvd24taXRlbXtcclxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNvcnQtZHJvcCAuYWN0aXZle1xyXG4gIGJhY2tncm91bmQ6ICNmMWY2ZmQ7XHJcbiAgY29sb3I6ICMwYjBlMWY7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uc29ydC1kcm9wIC5hY3RpdmUgLmNrYy1pY257XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiAjM2I5M2ZjO1xyXG59XHJcbi5zb3J0LWRyb3AgLmRyb3Bkb3duLWl0ZW0uZC1yYW5nZTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxufVxyXG4uc29ydC1kcm9wIC5kcm9wZG93bi1pdGVtOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmt0LWlucHV0IHtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgLyogaGVpZ2h0OiAyNHB4OyAqL1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgY29sb3I6ICMzYzQwNDM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkYWRjZTA7XHJcbiAgcGFkZGluZzogMC42NXJlbSAxcmVtO1xyXG59XHJcblxyXG4ua3QtaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWE3M2U4O1xyXG59XHJcblxyXG4uY2FsZW5kYXItd3JhcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC43NWVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXNpemU6IDR2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJveC1zaGFkb3c6XHJcbiAgICAwIDAuMDYyNWVtIDAuMjVlbSByZ2JhKDAsMjAsNTAsMC4yKSxcclxuICAgIDAgMC41ZW0gMC41ZW0gMC4xMjVlbSByZ2JhKDAsMjAsNTAsMC4xKTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgLmNhbGVuZGFyLXdyYXAge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxufVxyXG5cclxuLm1vbnRoLXllYXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNzVlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhbGVuZGFyIHtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNzVlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmRheS10aXRsZSB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNjI1ZW07XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMC44NzVlbSAjZmZmLCBpbnNldCAwIC0xZW0gcmdiYSgwLDIwLDUwLDAuMSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGF5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZGF5OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZGF5OmZvY3VzIC5kYXktbnVtYmVyOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogODAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgIzAyODhkMTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5kYXkuYWN0aXZlLWE6Zm9jdXMgLmRheS1udW1iZXI6OmFmdGVyLFxyXG4uZGF5LmFjdGl2ZS1iOmZvY3VzIC5kYXktbnVtYmVyOjphZnRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZGF5LnRvZGF5OmZvY3VzIC5kYXktbnVtYmVyOjphZnRlciB7XHJcbiAgd2lkdGg6IDEwMiU7XHJcbiAgaGVpZ2h0OiAxMDIlO1xyXG59XHJcblxyXG4uZGF5OmhvdmVyIHNwYW4uZGF5LW51bWJlciB7XHJcbiAgY29sb3I6ICMwMjg4ZDE7XHJcbn1cclxuXHJcbi5kYXk6Zmlyc3QtY2hpbGQsXHJcbi5kYXk6bGFzdC1jaGlsZCB7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxufVxyXG5cclxuLmRheS5yYW5nZSB7XHJcbiAgY29sb3I6ICMwMjg4ZDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjVmZTtcclxufVxyXG5cclxuLmRheS5yYW5nZS5hY3RpdmUtYSxcclxuLmRheTpub3QoLnJhbmdlKSArIC5kYXkucmFuZ2UuYWN0aXZlLWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xLjVlbSAwICNlMWY1ZmU7XHJcbn1cclxuXHJcbi5kYXkucmFuZ2UuYWN0aXZlLWIsXHJcbi5kYXkucmFuZ2UgKyAuZGF5LnJhbmdlLmFjdGl2ZS1hIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiBpbnNldCAxLjVlbSAwICNlMWY1ZmU7XHJcbn1cclxuXHJcbi5kYXkucmFuZ2UuYWN0aXZlLWE6Zmlyc3QtY2hpbGQsXHJcbi5kYXkucmFuZ2UuYWN0aXZlLWI6Zmlyc3QtY2hpbGQge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5kYXkucmFuZ2UuYWN0aXZlLWE6Zmlyc3QtY2hpbGQgKyAuZGF5LnJhbmdlLFxyXG4uZGF5LnJhbmdlLmFjdGl2ZS1iOmZpcnN0LWNoaWxkICsgLmRheS5yYW5nZSB7XHJcbiAgYm94LXNoYWRvdzogLTEuNWVtIDAgI2UxZjVmZTtcclxufVxyXG5cclxuLmRheS5yYW5nZS5hY3RpdmUtYTpmaXJzdC1jaGlsZCArIC5kYXk6bm90KC5yYW5nZSksXHJcbi5kYXkucmFuZ2UuYWN0aXZlLWI6Zmlyc3QtY2hpbGQgKyAuZGF5Om5vdCgucmFuZ2UpIHtcclxuICBib3gtc2hhZG93OiAtNC41ZW0gMCAjZTFmNWZlO1xyXG59XHJcblxyXG4uZGF5LnJhbmdlLmFjdGl2ZS1hOmZpcnN0LWNoaWxkICsgLmRheS5yYW5nZS5hY3RpdmUtYiB7XHJcbiAgYm94LXNoYWRvdzpcclxuICAgIC0xLjVlbSAwICNlMWY1ZmUsXHJcbiAgICBpbnNldCAxLjVlbSAwICNlMWY1ZmU7XHJcbn1cclxuXHJcbi5kYXktbnVtYmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uZGF5LmFjdGl2ZS1hIHNwYW4uZGF5LW51bWJlcixcclxuLmRheS5hY3RpdmUtYiBzcGFuLmRheS1udW1iZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM0E5RjQ7XHJcbn1cclxuXHJcbi5kYXkucHJldi1tb24gLmRheS1udW1iZXIsXHJcbi5kYXkubmV4dC1tb24gLmRheS1udW1iZXIge1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcbi5kYXkucHJldi1tb25bY2xhc3MqPVwiYWN0aXZlXCJdIC5kYXktbnVtYmVyLFxyXG4uZGF5Lm5leHQtbW9uW2NsYXNzKj1cImFjdGl2ZVwiXSAuZGF5LW51bWJlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFENEZBO1xyXG59XHJcblxyXG4uZGF5LnRvZGF5IHNwYW4uZGF5LW51bWJlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMmVtICMzNzQ3NEY7XHJcbn1cclxuXHJcbi5jYWxlbmRhci13cmFwIC5yZXNldCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnJlYy1idG5ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uYnRuLW1pbiB7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBtaW4taGVpZ2h0OiAzNHB4O1xyXG59XHJcbi5tb2RhbC1sZy53LW1pbiB7XHJcbiAgbWluLXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLnJlcGVhdC1kYXkuYWN0aXZlLFxyXG4ucmVwZWF0LW1vbnRoLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE3M2U4O1xyXG59XHJcblxyXG4ucmVwZWF0LWRheSxcclxuLnJlcGVhdC1tb250aCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNDtcclxuICAgIGNvbG9yOiAjODA4NjhiO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucmVwLWNoayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLnctbWluLTE1MHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG59XHJcbi5sZWZ0LWxibHMge1xyXG4gIG1pbi13aWR0aDogNjBweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLm51bWJyIHtcclxuICB3aWR0aDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC42NXJlbSAwO1xyXG59XHJcbi5hcnJ3cyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hcnctc3BuIHtcclxuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAxLjNyZW0gKyAycHgpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU1ZWM7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC42NXJlbSAwO1xyXG59XHJcbi5mb3JtLWNoZWNrLWlucHV0W3R5cGU9cmFkaW9dLCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkW3R5cGU9cmFkaW9dIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHJhZGlvO1xyXG4gIGFwcGVhcmFuY2U6IHJhZGlvO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuOjpuZy1kZWVwIG5nLXNlbGVjdCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogU3RhdHVzIENvbG9ycyAqL1xyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV93YXJuaW5nIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmI4MjI7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcHJpbWFyeSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOTViZWQ5O1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3N1Y2Nlc3Mge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzNDQjM3MTtcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9EYW5nZXIge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0Y1OEE4QjtcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9ob2xkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNjMGI1ZGNcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9yZWplY3RlZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjVjMjkzO1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3VuZGVyQXBwcm92YWxzIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNCRDgzOEM7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfZm9yd2FyZFVuZGVyQXBwcm92YWwge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0UwQjFENztcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9jb21wbGV0ZVVuZGVyQXBwcm92YWwge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZjtcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9wcm9qZWN0SG9sZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQzBCNURDO1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX05ld1Byb2plY3Qge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzM2OTlmZjtcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9EZWFkbGluZUV4dGVuZGVkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfSG9sZHVuZGVyQXBwIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhODUwOTg7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfTmV3VG9EbyB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNTA4OGE4O1xyXG59XHJcbi5pbmZvLWljb24tY2lye1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzU4NjdkZDtcclxufVxyXG4uZGVzY3tcclxuICBjb2xvcjogZ3JleTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4ucmVta3N7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxuXHJcbn1cclxuLmt0LWJhZGdlLmt0LWJhZGdlLS1pbmxpbmUge1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAwLjE1cmVtIDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbi5iYWRnZS1pbWcge1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDJweCAwO1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcbi5tYXQtaWNvbi5tYXQtcHJpbWFyeSB7XHJcbiAgY29sb3I6ICMzNjk5ZmY7XHJcbn1cclxubWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5jdXJzb3ItcG9pbnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dD4ubWF0LWljb24tYnV0dG9uIHtcclxuICBsaW5lLWhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zaWRlSW5mb2JhciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggOXB4IC0zcHggcmdiKDAgMCAwIC8gNzUlKTtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAvKiBwYWRkaW5nLXRvcDogNjBweDsgKi9cclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5rdC1wb3J0bGV0X19oZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmNsb3NlYnRuIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWljb24tY2lyIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICM1ODY3ZGQ7XHJcbn1cclxuXHJcbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgI2RlZGVkZTtcclxuICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuXHJcbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbS5kYXJrIHtcclxuICBib3JkZXItYm90dG9tOiAwLjA3cmVtIGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcblxyXG4vKiAua3QtaW5ib3hfX2RhdGV0aW1le1xyXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG59ICovXHJcblxyXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW0gLmt0LXdpZGdldDFfX2luZm8gLmt0LXdpZGdldDFfX3RpdGxlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLnRpdGxlLXNpZGViYXIge1xyXG4gIHdpZHRoOiAyNzBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnNpZGUtYmFyLWJveCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaWRlLWJhci1ib3ggbGkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5zaWRlLWJhci1ib3ggbGk6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZVxyXG59XHJcblxyXG4uY3VzdG9tLXRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4uY3VzdG9tLXRleHRhcmVhOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4oCiIFwiO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xyXG59XHJcblxyXG4uYW5ndWxhci1lZGl0b3ItdGV4dGFyZWEge1xyXG4gIG1heC1oZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7IFxyXG59XHJcbiBcclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICM4ODg7IFxyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzU1NTsgXHJcbn1cclxuLnNjcm9sbHkge1xyXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5tZWV0LWNhcmQge1xyXG4gIGhlaWdodDogOTd2aDtcclxufVxyXG4uY3N0bS1zd2Qge1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggN3B4ICM4ZDhkOGQ1MjtcclxufVxyXG5zcGFuLnN0YXR1c2ljbiB7XHJcbiAgcmlnaHQ6IDJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0cHg7XHJcbn1cclxuLmt0LXRpbWVyIHNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzI3ODZmYjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRmMGZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5rdC10aW1lciBzbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbnNwYW4ua3QtZHQtY250LXZpZXcge1xyXG4gIGNvbG9yOiAjMjc4NmZiO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB3aWR0aDogMjZweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLm5vdGUtdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbnNwYW4udGltZS1wbGF5LWJ0biBpIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTJweDtcclxufXNwYW4udGltZS1wbGF5LWJ0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiBcclxufVxyXG4uYXN0LWt0LWR3IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA0cHg7XHJcbn1cclxuLmFkbWluLWNoZWNrIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmFkbWluLWNoZWNrIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmFkbWluLWNoZWNrIHNwYW4ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuc3Bhbi5hZG1pbi1jaGVjay1zdmcge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0ycHg7XHJcbn1cclxuLmFuZ3VsYXItZWRpdG9yLXRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDEzNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5vdGUtdGV4dCB7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmt0LW11bHR5LXVzZXItZHcuc2hvdyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNmb3JtOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ua3QtYWRtaW4tbXV0ZSBzcGFuIHBhdGgge1xyXG4gIGZpbGw6ICM5NTk1OTU7XHJcbn1cclxuXHJcbi5rdC1hZG1pbi1tdXRlIHtcclxuICBjb2xvcjogIzk1OTU5NTtcclxufVxyXG5cclxuLyotLS0tLS0tdXNlciBub3RlcyBjc3MtLS0tLS0tLS0tLS0qL1xyXG4ua3QtdXNlci0ybHQge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7bGluZS1oZWlnaHQ6IDE1cHg7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ua3QtdXNlci1kdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5rdC11c2VyLW5hbWUge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM1ZTVlNWU7XHJcbn1cclxuc3Bhbi5rdC1tZXQtdGltZS1kYXRlIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6ICM4ZjhmOGY7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcblxyXG4ua3QtdXNlci1ub3RlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmN2Y4ZmE7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmt0LXVzZXItbm90ZSBwIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGNvbG9yOiAjNjQ2NDY0O1xyXG59XHJcbi5rdC11c2VyLW5vdGUgdWwge1xyXG4gIHBhZGRpbmctbGVmdDogMjJweDtcclxufVxyXG4ua3QtdXNlci1ub3RlIHVsIGxpIHtcclxuICBjb2xvcjogIzY0NjQ2NDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmt0LWNhcmQge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmt0LW9yZ2FuaXplci1kdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogNTRweDtcclxufVxyXG5cclxuc3Bhbi5zaWRlLWljbnMua3Qtb3JnLWljIHtcclxuICB3aWR0aDogNDVweDtcclxufVxyXG4ua3Qtb3JnLXYgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBjb2xvcjogI2EzYTNhMztcclxufVxyXG4ua3Qtb3JnLXYgcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM3MjcyNzI7XHJcbn1cclxuLmt0LW9yZ2FuaXplci1kdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjdmZjtwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG4ua3QtY2xyLTEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFjMDAgIWltcG9ydGFudDtcclxufVxyXG4ua3QtY2xyLWJnLTEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZhZWYgIWltcG9ydGFudDtcclxufVxyXG4ua3QtY2xyLTIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzdjNGEgIWltcG9ydGFudDtcclxufVxyXG4ua3QtY2xyLWJnLTIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmZmZTcgIWltcG9ydGFudFxyXG59XHJcblxyXG4ua3QtY2xyLTMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3YjYzZmYgIWltcG9ydGFudDtcclxufVxyXG4ua3QtY2xyLWJnLTMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzdiNjNmZjFhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5rdC1tdC1kdyB7XHJcbiAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLyotLS0tLS0tLW1lZXRpbmcgbm90ZXMgZGF0YSB2aWV3IGJ0biAtLS0tLS0tLS0tLS0tKi9cclxuLnN2Zy1tZXQtbm90ZSBzdmcge1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZmlsbDogI2ZmZmZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAycHg7XHJcbn1cclxuXHJcbi5rdC1tZXQtbm90ZXMtdiB7XHJcbiAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzI3ODZmYjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4OyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc4NmZiO1xyXG4gIGNvbG9yOiAjZmZmO2N1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRpdGxlZGl2e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICM2MzYzNjM7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gd2lkdGg6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBwYWRkaW5nOiA1cHggNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmNWZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4ua3QtdGV4dC13cmFwe1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG4udGl0bGVkaXYuY29sbGFwc2VkIGkge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbn1cclxuXHJcbi50aXRsZWRpdiBpe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDZweDtcclxuICBjb2xvcjogIzc0N2E5NjtcclxufVxyXG5cclxuLmt0LW1lZXRpbmctbGlzdC12aWV3IHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5rdC1tZXQtbm90ZXMtdjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYTtcclxuICBjb2xvcjogIzI3ODZmYjtcclxuICBmaWxsOiAjMjc4NmZiO1xyXG59XHJcblxyXG4ua3QtbWV0LW5vdGVzLXY6aG92ZXIgLnN2Zy1tZXQtbm90ZSBzdmcge1xyXG4gIGZpbGw6ICMyNzg2ZmI7XHJcbn1cclxuLmFkbWluLWNoZWNrIHNwYW46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWVmZmY7XHJcbiAgY29sb3I6ICMyNzg2ZmI7XHJcbiAgcGFkZGluZzogMXB4IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app__LayoutDashboard_meeting-report_meeting-report_component_ts.js.map