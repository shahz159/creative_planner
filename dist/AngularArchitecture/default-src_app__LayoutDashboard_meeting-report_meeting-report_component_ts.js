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
function MeetingReportComponent_div_1_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function MeetingReportComponent_div_1_ng_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r26, "");
} }
function MeetingReportComponent_div_1_ng_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item1_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item1_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item1_r28, "");
} }
function MeetingReportComponent_div_1_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 187)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "svg", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "path", 189)(5, "circle", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 16)(7, "div", 45)(8, "div", 17)(9, "a", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("href", item_r3.Addressurl, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r3.Location);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r3.FullAddress_loc);
} }
function MeetingReportComponent_div_1_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 192)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "svg", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "path", 194)(5, "path", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 16)(7, "div", 45)(8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 192)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "svg", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "path", 194)(5, "path", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 16)(7, "div", 45)(8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_70_ng_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r31.Emp_No);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r31.DisplayName, "");
} }
function MeetingReportComponent_div_1_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 196)(1, "span", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 199)(4, "div", 200)(5, "lable", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Add Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ng-select", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_70_Template_ng_select_click_7_listener($event) { return $event.stopPropagation(); })("ngModelChange", function MeetingReportComponent_div_1_div_70_Template_ng_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r33.ngEmployeeDropdown = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, MeetingReportComponent_div_1_div_70_ng_option_8_Template, 2, 2, "ng-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 135)(10, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_70_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r35.Adduser_meetingreport()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("multiple", true)("ngModel", ctx_r11.ngEmployeeDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r11._EmployeeListForDropdown);
} }
function MeetingReportComponent_div_1_div_71_div_1__svg_svg_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "svg", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "path", 219)(2, "path", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function MeetingReportComponent_div_1_div_71_div_1__svg_svg_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "svg", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "path", 221)(2, "path", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function MeetingReportComponent_div_1_div_71_div_1__svg_svg_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "svg", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "path", 223)(2, "path", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function MeetingReportComponent_div_1_div_71_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_71_div_1_div_21_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r44); const _user_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r42.Updating_Adminmeeting(_user_r37.stringval)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "svg", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "path", 228)(4, "path", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function MeetingReportComponent_div_1_div_71_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 173)(1, "div", 203)(2, "input", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_71_div_1_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r45.Online_methoduser($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 205)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "svg", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "path", 207)(7, "path", 208)(8, "path", 209)(9, "rect", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, MeetingReportComponent_div_1_div_71_div_1__svg_svg_11_Template, 3, 0, "svg", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, MeetingReportComponent_div_1_div_71_div_1__svg_svg_12_Template, 3, 0, "svg", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, MeetingReportComponent_div_1_div_71_div_1__svg_svg_13_Template, 3, 0, "svg", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 213)(15, "div", 214)(16, "div", 45)(17, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, MeetingReportComponent_div_1_div_71_div_1_div_21_Template, 7, 0, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _user_r37 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("id", "flexCheckChecked5_", _user_r37.stringval, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r36.isCheckboxDisabled)("value", _user_r37.stringval)("checked", _user_r37.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _user_r37.Status == "Accepted");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _user_r37.Status == "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _user_r37.Status == "May be" || _user_r37.Status == "Proposed");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_user_r37.TM_DisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _user_r37.Designation_Name, "/", _user_r37.Com_Name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r36.Meetingstatuscom == ctx_r36.Completed && ctx_r36.Isadmin == true);
} }
function MeetingReportComponent_div_1_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, MeetingReportComponent_div_1_div_71_div_1_Template, 22, 11, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r12.User_Scheduledjson);
} }
function MeetingReportComponent_div_1_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 230)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 16)(5, "div", 45)(6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_74_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 173)(1, "div", 231)(2, "input", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_74_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r48.Online_methodproject($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 16)(4, "div")(5, "div", 17)(6, "a", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_74_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r49); const _pro_r47 = restoredCtx.$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r50.moreDetails(_pro_r47.stringval)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _pro_r47 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r14.isCheckboxDisabled)("value", _pro_r47.stringval)("checked", _pro_r47.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _pro_r47.Project_Name, "");
} }
function MeetingReportComponent_div_1_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 234)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 16)(5, "div", 45)(6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Portfolios");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_77_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 173)(1, "div", 231)(2, "input", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_77_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r52.Online_methodportfolio($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 16)(4, "div")(5, "div", 17)(6, "a", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_77_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r53); const _prot_r51 = restoredCtx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r54.OnCardClick(_prot_r51.numberval)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _prot_r51 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r16.isCheckboxDisabled)("value", _prot_r51.numberval)("checked", _prot_r51.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _prot_r51.Portfolio_Name, "");
} }
function MeetingReportComponent_div_1_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 236)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "path", 237)(5, "path", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 16)(7, "div", 45)(8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "DMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} }
function MeetingReportComponent_div_1_div_79_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 173)(1, "div", 231)(2, "input", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_79_div_1_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r58.Online_methoddms($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 16)(4, "div")(5, "div", 17)(6, "a", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_79_div_1_Template_a_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59); const itemMemos_r56 = restoredCtx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r60.openUrl(itemMemos_r56.Url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const itemMemos_r56 = ctx.$implicit;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r55.isCheckboxDisabled)("value", itemMemos_r56.MailId)("checked", itemMemos_r56.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", itemMemos_r56.Subject, "");
} }
function MeetingReportComponent_div_1_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, MeetingReportComponent_div_1_div_79_div_1_Template, 8, 4, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r18._MemosSubjectList);
} }
function MeetingReportComponent_div_1_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 240)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "svg", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "path", 237)(5, "path", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 16)(7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", item_r3.Description, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function MeetingReportComponent_div_1_div_81_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 16)(1, "div", 45)(2, "div", 17)(3, "a", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const trt_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("href", trt_r63.url, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](trt_r63.File_Name);
} }
function MeetingReportComponent_div_1_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 243)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "svg", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "path", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, MeetingReportComponent_div_1_div_81_div_5_Template, 5, 2, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r20.Attachments_ary);
} }
function MeetingReportComponent_div_1_div_89_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 247)(1, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Meeting notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "angular-editor", 248, 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_div_89_Template_angular_editor_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r65.Notes_Type = $event); })("keyup", function MeetingReportComponent_div_1_div_89_Template_angular_editor_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r66); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r67.addBulletPointsOnEnter($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r21.Notes_Type)("config", ctx_r21.config);
} }
function MeetingReportComponent_div_1_div_96_div_2_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 262)(1, "input", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_div_96_div_2_form_5_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r73._Demotext = $event); })("keyup.enter", function MeetingReportComponent_div_1_div_96_div_2_form_5_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r74); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r75.EnterSubmit(ctx_r75._Demotext)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "button", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_96_div_2_form_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r74); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r76.EnterSubmit(ctx_r76._Demotext)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Add Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r72._Demotext);
} }
function MeetingReportComponent_div_1_div_96_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 257)(1, "h1", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Assign Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, MeetingReportComponent_div_1_div_96_div_2_form_5_Template, 4, 1, "form", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r68.Meetingstatuscom == ctx_r68.Completed);
} }
function MeetingReportComponent_div_1_div_96_div_3_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 262)(1, "input", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_div_96_div_3_form_5_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r78._Demotext = $event); })("keyup.enter", function MeetingReportComponent_div_1_div_96_div_3_form_5_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r80.EnterSubmit(ctx_r80._Demotext)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "button", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_96_div_3_form_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r79); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r81.EnterSubmit(ctx_r81._Demotext)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Add Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r77._Demotext);
} }
function MeetingReportComponent_div_1_div_96_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 257)(1, "h1", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Assign Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, MeetingReportComponent_div_1_div_96_div_3_form_5_Template, 4, 1, "form", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r69.Meetingstatuscom == ctx_r69.Completed);
} }
function MeetingReportComponent_div_1_div_96_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "input", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "label", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 268)(5, "span", 269)(6, "mat-icon", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-menu", 271, 272)(10, "button", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_96_div_5_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r86); const item_r82 = restoredCtx.$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r85.GetProjectTypeList(item_r82.Task_Name, item_r82.Assign_Id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "mat-icon", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Assign Task/Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "button", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_96_div_5_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r86); const item_r82 = restoredCtx.$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r87.ActionToProject_Click(item_r82.Task_Name, item_r82.Assign_Id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "mat-icon", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "new_label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Add Action To Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "button", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_div_96_div_5_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r86); const item_r82 = restoredCtx.$implicit; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r88._Deletetask(item_r82.Assign_Id, item_r82.Task_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "svg", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "path", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r82 = ctx.$implicit;
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r82.Task_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matMenuTriggerFor", _r84);
} }
function MeetingReportComponent_div_1_div_96_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Not found a task");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function MeetingReportComponent_div_1_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 250)(1, "div", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, MeetingReportComponent_div_1_div_96_div_2_Template, 6, 1, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, MeetingReportComponent_div_1_div_96_div_3_Template, 6, 1, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, MeetingReportComponent_div_1_div_96_div_5_Template, 23, 2, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, MeetingReportComponent_div_1_div_96_div_7_Template, 2, 0, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r22.Meetingstatuscom != ctx_r22.Completed && ctx_r22.todocount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r22.Meetingstatuscom == ctx_r22.Completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r22._TodoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r22.text);
} }
function MeetingReportComponent_div_1_div_98_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 281)(1, "div", 282)(2, "div", 283)(3, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 286)(6, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 288)(10, "span", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 290)(13, "span", 291)(14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "img", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, " Assigned Task/Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "mat-icon", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "task_alt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "span", 295)(26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "img", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 297)(32, "span", 298)(33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](35, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r90.Task_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 5, item_r90.Creation_Date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r90.AssignedTo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](30, 7, item_r90.Modified_DT), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r90.Status, "");
} }
function MeetingReportComponent_div_1_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 279)(1, "label", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Assigned Task/Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, MeetingReportComponent_div_1_div_98_div_3_Template, 37, 9, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r23.ActionedAssigned_Josn);
} }
function MeetingReportComponent_div_1_ng_option_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ng-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r91.Emp_No);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r91.DisplayName, " ");
} }
function MeetingReportComponent_div_1_div_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 301)(1, "button", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function MeetingReportComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 110)(1, "div", 111)(2, "div", 112)(3, "div", 45)(4, "h5", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Meeting Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 114)(7, "div", 115)(8, "div", 116)(9, "div", 117)(10, "div", 118)(11, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 87)(14, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, MeetingReportComponent_div_1_span_23_Template, 2, 0, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 123)(25, "div", 124)(26, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_Template_input_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r93); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](31); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r5.open()); })("dateChange", function MeetingReportComponent_div_1_Template_input_dateChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r93); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r94.selectStartDate($event)); })("ngModelChange", function MeetingReportComponent_div_1_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r93); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r95._StartDate = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 126)(28, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "mat-datepicker-toggle", 128)(30, "mat-datepicker", null, 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_Template_div_click_32_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "Start Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "ng-select", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_Template_ng_select_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r93); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r97.Startts = $event); })("open", function MeetingReportComponent_div_1_Template_ng_select_open_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r93); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r98.onfocus($event)); })("change", function MeetingReportComponent_div_1_Template_ng_select_change_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r93); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r99.addstarttime()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, MeetingReportComponent_div_1_ng_option_36_Template, 2, 2, "ng-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_Template_div_click_37_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "End Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "ng-select", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("open", function MeetingReportComponent_div_1_Template_ng_select_open_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r93); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r101.onfocus($event)); })("ngModelChange", function MeetingReportComponent_div_1_Template_ng_select_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r93); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r102.Endtms = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, MeetingReportComponent_div_1_ng_option_41_Template, 2, 2, "ng-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 135)(43, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MeetingReportComponent_div_1_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r93); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r103.updatedateandtime_meetingreport()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div", 138)(49, "div", 139)(50, "div", 140)(51, "div", 141)(52, "div", 142)(53, "h5", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, " Meeting Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 144)(56, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, MeetingReportComponent_div_1_div_57_Template, 13, 3, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](58, MeetingReportComponent_div_1_div_58_Template, 10, 0, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](59, MeetingReportComponent_div_1_div_59_Template, 10, 0, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "div", 148)(61, "div", 12)(62, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](64, "path", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "div", 16)(66, "div", 150)(67, "div", 45)(68, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](70, MeetingReportComponent_div_1_div_70_Template, 15, 3, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](71, MeetingReportComponent_div_1_div_71_Template, 2, 1, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](72, MeetingReportComponent_div_1_div_72_Template, 8, 0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](74, MeetingReportComponent_div_1_div_74_Template, 8, 4, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](75, MeetingReportComponent_div_1_div_75_Template, 8, 0, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](77, MeetingReportComponent_div_1_div_77_Template, 8, 4, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](78, MeetingReportComponent_div_1_div_78_Template, 10, 0, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](79, MeetingReportComponent_div_1_div_79_Template, 2, 1, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](80, MeetingReportComponent_div_1_div_80_Template, 9, 1, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](81, MeetingReportComponent_div_1_div_81_Template, 6, 1, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "div", 161)(83, "div", 141)(84, "div", 162)(85, "h5", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](86, " Meeting Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "div", 164)(88, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](89, MeetingReportComponent_div_1_div_89_Template, 5, 2, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "div", 167)(91, "div", 16)(92, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](93, "Meeting notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](95, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](96, MeetingReportComponent_div_1_div_96_Template, 8, 4, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](97, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](98, MeetingReportComponent_div_1_div_98_Template, 4, 1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "div", 172)(100, "div", 173)(101, "div", 174)(102, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "svg", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](104, "path", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "div", 176)(106, "ng-select", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function MeetingReportComponent_div_1_Template_ng_select_ngModelChange_106_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r93); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r104.ngEmployeeDropdown = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](107, MeetingReportComponent_div_1_ng_option_107_Template, 2, 2, "ng-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "div", 178)(109, "div", 174)(110, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "svg", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](112, "path", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](113, "div", 176)(114, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](115, "input", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "div", 182)(117, "button", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](118, "Assign Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](119, MeetingReportComponent_div_1_div_119_Template, 5, 0, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](31);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r3.Task_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](16, 34, item_r3.Schedule_date, "d EEE, MMMM YYYY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", item_r3.NewSt_Time, " \u2013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r3.NewEd_Time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.Meetingstatuscom == ctx_r0.Completed && ctx_r0.Isadmin == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matDatepicker", _r5)("min", ctx_r0.disablePreviousDate)("ngModel", ctx_r0._StartDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r0.Startts);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.StartTimearr);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r0.Endtms);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.EndTimearr);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r3.Location);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r3.Onlinelink.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r3.Onlinelink == false);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r3.DMS_Name != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r3.DMS_Name != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r3.Description != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.Attachments_ary.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.Meetingstatuscom == ctx_r0.Completed && ctx_r0.Isadmin == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", ctx_r0.Meetingnotescom, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.Meetingstatuscom == ctx_r0.Completed && ctx_r0.Isadmin == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.ActionedAssigned_Josn.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r0.ngEmployeeDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0._EmployeeListForDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.Meetingstatuscom == ctx_r0.Completed && ctx_r0.Isadmin == true);
} }
function MeetingReportComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 115)(1, "div", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "div", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 116)(4, "div", 117)(5, "div", 118)(6, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 87)(9, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "span", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "span", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r105 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r105.Task_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 4, item_r105.Schedule_date, "d EEE, MMMM YYYY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", item_r105.NewSt_Time, " \u2013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r105.NewSt_Time, " ");
} }
function MeetingReportComponent_option_280_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r106 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r106.Exec_BlockNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r106.Exec_BlockName, "");
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
        this.Meetingnotes_time = [];
        this.isCheckboxDisabled = false;
        this.Isadmin = false;
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
        this.GetMeetingnotes_data();
        this.GetAssigned_SubtaskProjects();
        this.getProjectTypeList();
        this.GetProjectAndsubtashDrpforCalender();
        this.GetTimeslabfordate();
        this.meeting_details();
        this.getScheduleId();
        this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
        this.GetcompletedMeeting_data();
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
    // addBulletPointsOnFocus() {
    //   const textarea = this.myTextarea.nativeElement;
    //   if (textarea.value === '') {
    //     textarea.value = '• ';
    //   }
    // }
    addBulletPointsOnEnter(event) {
        if (event.keyCode === 32 || event.keyCode === 13) {
            this.Schedule_ID = this.Scheduleid;
            this._calenderDto.Schedule_ID = this.Schedule_ID;
            this._calenderDto.Emp_No = this.CurrentUser_ID;
            this._calenderDto.Meeting_notes = this.Notes_Type;
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
            this.Meetingstatuscom = this.CompletedMeeting_notes[0]['meeting_status'];
            this.Userstatus = this.CompletedMeeting_notes[0]['Status'];
            this.Meetingnotescom = this.CompletedMeeting_notes[0]['Notes'];
            alert(this.Meetingnotescom);
            if (this.Meetingstatuscom == 'Completed') {
                this.isCheckboxDisabled = true;
            }
            console.log(this.Meetingnotescom, 'notes11122');
        });
    }
    onfocus(val) {
        console.log(val, "ttt");
    }
    Adduser_meetingreport() {
        this.Schedule_ID = this.Scheduleid;
        this._calenderDto.Schedule_ID = this.Schedule_ID;
        this._calenderDto.Emp_No = this.CurrentUser_ID;
        this._calenderDto.User_list = this.ngEmployeeDropdown;
        this.CalenderService.Newinsertuser_meetingreport(this._calenderDto).subscribe(data => {
            this.meeting_details();
        });
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
            console.log(this.EventScheduledjson, "111111");
            this.Startts = this.EventScheduledjson[0]['St_Time'];
            this.Endtms = this.EventScheduledjson[0]['Ed_Time'];
            this.Isadmin = this.EventScheduledjson[0]['IsAdmin'];
            this.status = this.EventScheduledjson[0]['Status'];
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
    GetProjectAndsubtashDrpforCalender() {
        this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe((data) => {
            this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);
            // this.Portfoliolist_1 = JSON.parse(data['Portfolio_drp']);
            // this.ProjectListArray = JSON.parse(data['Projectlist']);
            // console.log(this._EmployeeListForDropdown, "Project List Array");
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
            this.assigncount = this.ActionedAssigned_Josn.length;
            this.todocount = this._TodoList.length + this.ActionedAssigned_Josn.length;
        });
        console.log("the sss", this._TodoList);
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
MeetingReportComponent.ɵfac = function MeetingReportComponent_Factory(t) { return new (t || MeetingReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_Services_calender_service__WEBPACK_IMPORTED_MODULE_6__.CalenderService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_7__.LinkService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_8__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_9__.BsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog)); };
MeetingReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: MeetingReportComponent, selectors: [["app-meeting-report"]], viewQuery: function MeetingReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.myTextarea = _t.first);
    } }, decls: 382, vars: 20, consts: [[1, "grey-bg", "side_view"], ["class", "col-md-12 p-3", 4, "ngFor", "ngForOf"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "fs-5"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true", 1, "ki", "ki-close"], [1, "modal-body"], ["id", "NameDate", "class", "main-title", 4, "ngFor", "ngForOf"], [1, "eve-area", "ng-star-inserted"], [1, "left-icon"], ["aria-hidden", "true", 1, "side-icns"], ["focusable", "false", "width", "20", "height", "20", "viewBox", "0 0 24 24", 1, "svg-icn"], ["_ngcontent-gpx-c394", "", "d", "M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z"], [1, "rgt-des"], [1, "main-s"], [1, "kt-dt-cnt-view"], [1, "avar-div"], ["id", "project", 1, "eve-area", "ng-star-inserted"], [1, "fab-icn", "fab", "fa-wpforms"], [1, "main-s", "pro-nm"], [1, "side-div", "ng-star-inserted"], [1, "fas-icn", "fas", "fa-list"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "20", "height", "20", 1, "svg-icn"], ["_ngcontent-owa-c389", "", "fill", "none", "d", "M0 0h24v24H0z"], ["_ngcontent-owa-c389", "", "d", "M5.455 15L1 18.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455zm-.692-2H16V4H3v10.385L4.763 13zM8 17h10.237L20 18.385V8h1a1 1 0 0 1 1 1v13.5L17.545 19H9a1 1 0 0 1-1-1v-1z"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 34 24", "width", "27", "height", "27", 1, "svg-icn"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["d", "M19.9994 19.2611H10.9294C10.4794 19.2611 10.1094 18.8911 10.1094 18.4411C10.1094 17.9911 10.4794 17.6211 10.9294 17.6211H19.9994C20.4494 17.6211 20.8194 17.9911 20.8194 18.4411C20.8194 18.9011 20.4494 19.2611 19.9994 19.2611Z", "fill", "#292D32"], ["d", "M19.9994 12.9681H10.9294C10.4794 12.9681 10.1094 12.5981 10.1094 12.1481C10.1094 11.6981 10.4794 11.3281 10.9294 11.3281H19.9994C20.4494 11.3281 20.8194 11.6981 20.8194 12.1481C20.8194 12.5981 20.4494 12.9681 19.9994 12.9681Z", "fill", "#292D32"], ["d", "M19.9994 6.67125H10.9294C10.4794 6.67125 10.1094 6.30125 10.1094 5.85125C10.1094 5.40125 10.4794 5.03125 10.9294 5.03125H19.9994C20.4494 5.03125 20.8194 5.40125 20.8194 5.85125C20.8194 6.30125 20.4494 6.67125 19.9994 6.67125Z", "fill", "#292D32"], ["d", "M4.90969 8.03187C4.68969 8.03187 4.47969 7.94187 4.32969 7.79187L3.41969 6.88188C3.09969 6.56188 3.09969 6.04187 3.41969 5.72187C3.73969 5.40187 4.25969 5.40187 4.57969 5.72187L4.90969 6.05188L7.04969 3.91187C7.36969 3.59188 7.88969 3.59188 8.20969 3.91187C8.52969 4.23188 8.52969 4.75188 8.20969 5.07188L5.48969 7.79187C5.32969 7.94187 5.12969 8.03187 4.90969 8.03187Z", "fill", "#292D32"], ["d", "M4.90969 14.3287C4.69969 14.3287 4.48969 14.2487 4.32969 14.0887L3.41969 13.1788C3.09969 12.8588 3.09969 12.3388 3.41969 12.0188C3.73969 11.6988 4.25969 11.6988 4.57969 12.0188L4.90969 12.3488L7.04969 10.2087C7.36969 9.88875 7.88969 9.88875 8.20969 10.2087C8.52969 10.5288 8.52969 11.0487 8.20969 11.3687L5.48969 14.0887C5.32969 14.2487 5.11969 14.3287 4.90969 14.3287Z", "fill", "#292D32"], ["d", "M4.90969 20.3288C4.69969 20.3288 4.48969 20.2488 4.32969 20.0888L3.41969 19.1788C3.09969 18.8588 3.09969 18.3388 3.41969 18.0188C3.73969 17.6988 4.25969 17.6988 4.57969 18.0188L4.90969 18.3488L7.04969 16.2087C7.36969 15.8888 7.88969 15.8888 8.20969 16.2087C8.52969 16.5288 8.52969 17.0488 8.20969 17.3688L5.48969 20.0888C5.32969 20.2488 5.11969 20.3288 4.90969 20.3288Z", "fill", "#292D32"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "btn-sm", "mr-2"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "mr-2", 3, "click"], ["id", "recurcal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "recurcalTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg", "w-max", "w-min"], ["id", "exampleModalLongTitle", 1, "modal-title"], ["aria-hidden", "true"], [1, ""], [1, "d-flex-cen", "gap-3"], [1, "rec-btns", "gap-3"], [1, "btn", "btn-sm", "btn-white", "btn-min"], [1, "mt-3", "pl-2"], [1, "dropdown", "show"], ["href", "#", "role", "button", "id", "repeatdrop", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "text-info", "dropdown-toggle"], [1, "fas", "fa-redo"], ["aria-labelledby", "repeatdrop", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "cal"], [1, "calendar-wrap"], [1, "month-year"], [1, "calendar"], ["scope", "col", 1, "day-title"], [1, "week"], ["tabindex", "0", 1, "day", "prev-mon"], [1, "day-number"], ["tabindex", "0", 1, "day"], ["tabindex", "0", 1, "day", "today"], ["tabindex", "0", 1, "day", "next-mon"], [1, "button", "reset"], [1, "mt-3", "text-right"], [1, "text-info"], [1, "far", "fa-clock"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "btn-sm"], ["type", "button", 1, "btn", "btn-info", "btn-sm"], ["id", "custmodal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "custom-modal", "aria-hidden", "true", 1, "modal", "fade"], [1, "input-group", "flex-column", "dropdown", "mr-2", "mt-3", "gap-1"], [1, "d-flex-cen", "gap-1", "form-group"], [1, "left-lbls"], [1, "mr-1", "mb-0"], [1, "w-min-150"], ["name", "Select Type", "placeholder", "Do not repeat", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "arrws", "mb-2"], [1, "fas", "fa-chevron-up"], [1, "arw-spn", "mb-1"], [1, "arrws", "mt-2"], [1, "fas", "fa-chevron-down"], [1, "ml-2"], [1, "d-flex"], [1, "repeat-day"], ["type", "checkbox", "name", "DaysChk", "id", "Sun", "value", "Sun", 1, "rep-chk"], ["type", "checkbox", "name", "DaysChk", "id", "Mon", "value", "Mon", 1, "rep-chk"], ["type", "checkbox", "name", "DaysChk", "id", "Tue", "value", "Tue", 1, "rep-chk"], ["type", "checkbox", "name", "DaysChk", "id", "Wed", "value", "Wed", 1, "rep-chk"], ["type", "checkbox", "name", "DaysChk", "id", "Thu", "value", "Thu", 1, "rep-chk"], ["type", "checkbox", "name", "DaysChk", "id", "Fri", "value", "Fri", 1, "rep-chk"], ["type", "checkbox", "name", "DaysChk", "id", "Sat", "value", "Sat", 1, "rep-chk"], ["type", "date", "placeholder", "Select EndDate", 1, "form-control"], [1, "text-info", "d-flex-cen"], [1, "far", "fa-clock", "text-info", "mr-2"], [1, "d-flex", "gap-1", "form-group"], [1, "form-check", "ml-1"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios1", "value", "option1", "checked", "", 1, "form-check-input"], ["for", "exampleRadios1", 1, "form-check-label"], [1, "mt-3", "d-flex-cen"], [1, "form-check", "ml-1", "mr-3"], ["type", "radio", "name", "", "id", "", "value", "", "checked", "", 1, "form-check-input"], ["for", "", 1, "form-check-label"], [1, "flex-1", "d-flex-between", "m-0"], ["id", "rightbar-overlay", 3, "click"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], [1, "col-md-12", "p-3"], [1, "card", "meet-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "card-title"], [1, "header2", "pt-3"], ["id", "NameDate", 1, "main-title"], ["id", "", 1, "title-right"], [1, "title-area"], [1, "title-main"], ["id", "title1"], [1, "title-day"], [1, "title-day", "ropdown"], ["type", "button", "id", "-icn", "class", "text-info dropdown-toggle", "type", "button", "id", "DW_time_pick", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 4, "ngIf"], ["aria-labelledby", "DW_time_pick", 1, "dropdown-menu", "p-3", "cstm-swd"], [1, "input-group"], ["matInput", "", "placeholder", "Start Date", 1, "form-control", 3, "matDatepicker", "min", "ngModel", "click", "dateChange", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text", "p-0"], ["matSuffix", "", 3, "for"], ["picker1", ""], [1, "form-group", "flex-1", "mb-2", 3, "click"], [1, "cus-lbl"], ["id", "startid", "placeholder", "Start Time", 1, "kt-input", "form-control", 3, "ngModel", "ngModelChange", "open", "change"], [1, "form-group", "flex-1", "mb-1", 3, "click"], ["placeholder", "End Time", 1, "kt-input", "form-control", 3, "ngModel", "open", "ngModelChange"], [1, "form-group", "mb-0", "ng-star-inserted", "text-right", "mt-3"], ["type", "cancel", 1, "btn", "btn-secondary", "btn-sm"], ["type", "submit", 1, "btn", "btn-info", "btn-sm", 3, "click"], [1, "card-body", "scrolly", "card-body2"], [1, "px-3", "row", "mx-0", "mb-3"], [1, "col-md-12", "col-lg-5"], [1, "card", "card-mid", "flex-1", "h-100"], [1, "card-header"], ["clas", "card-title"], [1, "card-body", "px-0", "pt-0"], [1, "meetdt"], ["id", "location", "class", "eve-area", 4, "ngIf"], ["id", "", "class", "eve-area", 4, "ngIf"], ["id", "userlength", 1, "eve-area"], ["d", "M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z"], [1, "d-flex", "justify-content-between"], ["class", "kt-add-user curser-pointer", 4, "ngIf"], ["id", "userlist", "class", "avar-div", 4, "ngIf"], ["id", "project", "class", "eve-area", 4, "ngIf"], [1, "side-div"], ["class", "d-flex align-items-center", 4, "ngFor", "ngForOf"], ["id", "portfolio", "class", "eve-area", 4, "ngIf"], ["id", "dms", "class", "eve-area py-2", 4, "ngIf"], ["class", "side-div", 4, "ngIf"], ["id", "desc", "class", "eve-area py-2", 4, "ngIf"], ["id", "", "class", "eve-area py-2", 4, "ngIf"], ["id", "cardmain", 1, "col-md-12", "col-lg-7", "mt-3", "mt-lg-0"], [1, "card-header", "d-flex-cen", "justify-content-between"], ["clas", "card-title", "data-toggle", "collapse", "href", ".meetdt", "role", "button", "aria-expanded", "false", "aria-controls", "meetdt"], [1, "card-body"], [1, "notes-section"], ["class", "form-group mt-notes", "id", "Descrip_Name", 4, "ngIf"], [1, "eve-area", "py-2"], [1, "note-text"], [1, "main-s", 3, "innerHTML"], ["class", "action-section", 4, "ngIf"], ["class", " mt-3", 4, "ngIf"], ["aria-labelledby", "dropusers", 1, "drops", "drope", "py-3"], [1, "d-flex", "align-items-center"], [1, "col-md-2", "text-center"], ["focusable", "false", "width", "22", "height", "22", "viewBox", "0 0 24 24", 1, "svg-icn"], [1, "col-md-10", "pr-3"], ["name", "ngEmployeeDropdown", "placeholder", "Select Participants ", 1, "kt-input", "form-control", 3, "ngModel", "ngModelChange"], [1, "d-flex", "align-items-center", "mt-3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"], ["type", "date", 1, "form-control"], [1, "px-3", "pt-3", "text-right"], [1, "btn", "btn-sm", "btn-info"], ["class", "card-footer text-right", 4, "ngIf"], ["type", "button", "id", "-icn", "type", "button", "id", "DW_time_pick", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "text-info", "dropdown-toggle"], ["data-toggle", "tooltip", "title", "edit time ", 1, "fas", "fa-edit", "ml-1", "mb-1", "curser-pointer"], ["id", "location", 1, "eve-area"], ["focusable", "false", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "svg-icn"], ["d", "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"], ["cx", "12", "cy", "9", "r", "2.5"], ["target", "\u201D_blank\u201D", 3, "href"], ["id", "", 1, "eve-area"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "viewBox", "0 0 24 24", 1, "svg-icn"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"], [1, "kt-add-user", "curser-pointer"], ["type", "button", "id", "add-users-kt", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle"], [1, "fas", "fa-user-plus"], ["aria-labelledby", "add-users-kt", 1, "dropdown-menu", "p-3", "cstm-swd", "kt-multy-user-dw"], [1, "add-user-body"], ["id", "startid", "placeholder", "Add Participant", 1, "kt-input", "form-control", "h-auto", 3, "multiple", "ngModel", "click", "ngModelChange"], ["id", "userlist", 1, "avar-div"], [1, "form-check", "form-check-custom", "form-check-solid"], ["type", "checkbox", 1, "form-check-input", "ps-1", "ng-valid", "ng-dirty", "ng-touched", 3, "disabled", "id", "value", "checked", "click"], [1, "px-2", "position-relative"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 192 192", "enable-background", "new 0 0 192 192", "width", "24px", "height", "24px", 2, "width", "20px"], ["fill", "#E0E0E0", "d", "M96,0C43.01,0,0,43.01,0,96s43.01,96,96,96s96-43.01,96-96S148.99,0,96,0z"], ["fill", "#BDBDBD", "d", "M96,85.09c13.28,0,24-10.72,24-24c0-13.28-10.72-24-24-24s-24,10.72-24,24C72,74.37,82.72,85.09,96,85.09z"], ["fill", "#BDBDBD", "d", "M96,99.27c-29.33,0-52.36,14.18-52.36,27.27c11.09,17.06,30.51,28.36,52.36,28.36s41.27-11.3,52.36-28.36C148.36,113.45,125.33,99.27,96,99.27z"], ["fill", "none", "width", "192", "height", "192"], ["aria-hidden", "true", 1, "statusicn"], ["xmlns", "https://www.w3.org/2000/svg", "width", "14", "height", "14", 4, "ngIf"], [1, "rgt-des", "ml-2"], [1, "d-flex", "align-items-start", "justify-content-between"], ["name", "user", 1, "main-s"], [1, "sub-s", "text-ellp"], ["class", "admin-check curser-pointer", 3, "click", 4, "ngIf"], ["xmlns", "https://www.w3.org/2000/svg", "width", "14", "height", "14"], ["fill", "#CEEAD6", "d", "M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7z"], ["fill", "none", "stroke", "#137333", "stroke-width", "1.5", "d", "M3.5 6.5L6 9l5-5"], ["fill", "#FAD2CF", "d", "M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7z"], ["fill", "none", "stroke", "#B31412", "stroke-width", "1.5", "d", "M4 10l6-6M10 10L4 4"], ["fill", "#E8EAED", "d", "M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7z"], ["fill", "none", "stroke", "#3C4043", "stroke-width", "1.5", "d", "M5 5c0-1.1.9-2 2-2s2 .9 2 2-1 1.5-1.5 2S7 8 7 9M7 10v1.5"], [1, "admin-check", "curser-pointer", 3, "click"], ["_ngcontent-hko-c392", "", "aria-hidden", "true", 1, "admin-check-svg"], ["_ngcontent-hko-c392", "", "xmlns", "https://www.w3.org/2000/svg", "width", "14", "height", "14"], ["_ngcontent-hko-c392", "", "fill", "#5867dd", "d", "M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7z"], ["_ngcontent-hko-c392", "", "fill", "none", "stroke", "#fff", "stroke-width", "1.5", "d", "M3.5 6.5L6 9l5-5"], ["id", "project", 1, "eve-area"], [1, "form-check", "form-check-custom", "form-check-solid", "mr-2"], ["type", "checkbox", "id", "flexCheckChecked1", 1, "form-check-input", "ps-1", 3, "disabled", "value", "checked", "click"], ["href", "javascript:void(0)", 3, "click"], ["id", "portfolio", 1, "eve-area"], ["type", "checkbox", "id", "flexCheckChecked2", 1, "form-check-input", "ps-1", 3, "disabled", "value", "checked", "click"], ["id", "dms", 1, "eve-area", "py-2"], ["fill", "none", "d", "M0 0h24v24H0z"], ["d", "M5.455 15L1 18.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455zm-.692-2H16V4H3v10.385L4.763 13zM8 17h10.237L20 18.385V8h1a1 1 0 0 1 1 1v13.5L17.545 19H9a1 1 0 0 1-1-1v-1z"], ["type", "checkbox", "id", "flexCheckChecked3", 1, "form-check-input", "ps-1", 3, "disabled", "value", "checked", "click"], ["id", "desc", 1, "eve-area", "py-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24", 1, "svg-icn"], ["d", "M13 6v15h-2V6H5V4h14v2z"], ["id", "", 1, "eve-area", "py-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 18 18", "width", "20", "height", "20", 1, "svg-icn"], ["d", "M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"], ["class", "rgt-des", 4, "ngFor", "ngForOf"], ["id", "Descrip_Name", 1, "form-group", "mt-notes"], [3, "ngModel", "config", "ngModelChange", "keyup"], ["myTextarea", ""], [1, "action-section"], [1, "todo-main"], ["class", "task-header", 4, "ngIf"], [1, "todo-list"], ["class", "task-item", 4, "ngFor", "ngForOf"], [1, "task-list"], ["class", "task-empty", 4, "ngIf"], [1, "task-header"], [1, "task-header-title"], [1, "task-tools"], [1, "task-count"], ["class", "task-form", 4, "ngIf"], [1, "task-form"], ["id", "todo-input", "name", "text", "placeholder", "Add a new task...", "autofocus", "true", 1, "task-input", 3, "ngModel", "ngModelChange", "keyup.enter"], ["id", "btn1", 1, "task-button", 3, "click"], [1, "task-item"], ["type", "checkbox", 1, "task-status"], [1, "task-name"], [1, "task-actions"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", "matTooltip", "More", 1, "cursor-pointer", "ast-kt-dw", 3, "matMenuTriggerFor"], ["color", "primary"], ["xPosition", "after"], ["menu", "matMenu"], ["mat-menu-item", "", "mat", "", 3, "click"], ["color", "primary", 1, "mr-2"], [1, "task-delete", "task-btns", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "aria-hidden", "true", "role", "img", "font-size", "1.5rem", "width", "1em", "height", "1em", "viewBox", "0 0 24 24", 1, "iconify", "iconify--mdi"], ["fill", "currentColor", "d", "M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z"], [1, "task-empty"], [1, "mt-3"], ["class", "mb-2 card", 4, "ngFor", "ngForOf"], [1, "mb-2", "card"], [1, "card-body", "p-2", "Replied_border_left_true_warning", "mr-2"], ["data-type", "inbox", 1, "d-flex", "flex-wrap", "align-items-center", "my-1"], [1, "symbol", "symbol-60", "symbol-2by3", "flex-shrink-0", "m-auto"], [1, "kt-inbox__actions"], [1, "d-flex", "flex-column", "flex-grow-1", "my-lg-0", "my-2", "pr-2", "w-75"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-dark-75", "font-weight-bolder", "text-hover-primary", "font-size-lg", "ml-1", "flex-1"], [1, "kt-inbox__subject", "h5", "mybutton"], [1, "my-2"], ["data-toggle", "tooltip", "title", "Created Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge--unified-dark", "kt-badge-light-bold", "kt-badge--inline"], ["src", "../creativeplanner/assets/icons/create2.png", 1, "badge-img"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-info", "kt-badge-light-bold", "kt-badge--inline"], ["role", "img", "color", "success", "aria-hidden", "true", "ng-reflect-color", "success", "data-mat-icon-type", "font", 1, "mat-icon", "notranslate", "ml-2", "mr-2", "mat-success", "material-icons", "mat-ligature-font", "mat-icon-no-color"], ["data-toggle", "tooltip", "title", "Assigned Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge--unified-info", "kt-badge-light-bold", "kt-badge--inline"], ["src", "../creativeplanner/assets/icons/create1.png", 1, "badge-img"], [1, "my-1"], ["data-toggle", "tooltip", "title", "Project Status!", "ng-reflect-ng-class", "[object Object]", 1, "kt-inbox__label", "kt-badge", "kt-badge-light-bold", "kt-badge--inline", "kt-badge--unified-warning"], [1, "mt-2"], [1, "kt-inbox__datetime"], [1, "card-footer", "text-right"], ["data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-info", "btn-sm", "mr-2"], [1, "btn", "btn-secondary", "btn-sm", "mr-2"], [1, "boxcl-div"], [1, "box-cl", "ng-star-inserted", 2, "background-color", "#3788d8"], ["_ngcontent-gnj-c394", ""]], template: function MeetingReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, MeetingReportComponent_div_1_Template, 120, 37, "div", 1);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, " Portfolios");
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["ɵr"], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_15__.AngularEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgForm, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe], styles: [".meet-card[_ngcontent-%COMP%]{\r\n    border-radius: 10px;\r\n}\r\n.meet-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:first-child {\r\n    border-radius: 10px 10px 0 0;\r\n}\r\nh5.card-ttle[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    color: #3c4043;\r\n}\r\n.header2[_ngcontent-%COMP%] {\r\n    padding: 40px;\r\n    padding-bottom: 20px;\r\n    background-color: #f7f8fa;\r\n    border-bottom: 1px solid #ebedf2;\r\n    \r\n}\r\n.card-body2[_ngcontent-%COMP%]{\r\n    background-color: #f1f5f9;\r\n}\r\n.title-right[_ngcontent-%COMP%]{\r\n    padding-top:6px;\r\n}\r\n.main-title[_ngcontent-%COMP%]{       \r\n    width: 100%;\r\n    position: relative;\r\n    display: flex;\r\n    min-height: 32px;\r\n    padding-right: 16px;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    transition: background-color 100ms linear; \r\n    min-height: 32px;\r\n    margin-bottom: 12px;\r\n}\r\n.boxcl-div[_ngcontent-%COMP%]{\r\n    color: #5f6368;\r\n    padding-left: 3px;\r\n    width: 45px;\r\n    box-flex: 0;\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n    align-items: center;\r\n    max-height: 36px;\r\n    max-height: 36px;\r\n    align-self: stretch;\r\n    display: flex;\r\n}\r\n.box-cl[_ngcontent-%COMP%]{\r\n    border-radius: 40px;\r\n    height: 14px;\r\n    width: 14px;\r\n    margin-left: 3px;\r\n    margin-top: 3px;\r\n}\r\n.eve-area[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    position: relative;\r\n    display: flex;\r\n    min-height: 32px;\r\n    padding-right: 16px;\r\n    box-sizing: border-box;\r\n    align-items: center;\r\n    outline: none;\r\n    transition: background-color 100ms linear;\r\n}\r\n.eve-modal[_ngcontent-%COMP%]   .scrolly[_ngcontent-%COMP%]{\r\n    overflow: auto;\r\n    overflow-x: hidden;\r\n}\r\n.rgt-des[_ngcontent-%COMP%]{\r\n    padding-bottom: 6px;\r\n    padding-top: 6px;\r\n    box-flex: 1;\r\n    flex-grow: 1;\r\n    display: block;\r\n    overflow: auto;\r\n}\r\n.left-icon[_ngcontent-%COMP%]{\r\n    color: #5f6368;\r\n    padding-left: 3px;\r\n    padding-right: 17px;\r\n    width: 45px;\r\n    max-height: 52px;\r\n    display: flex;\r\n    align-items: center;\r\n    align-self: stretch;\r\n}\r\n.tool-span[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.svg-icn[_ngcontent-%COMP%]{\r\n    fill: #5f6368;\r\n}\r\n.fas-icn[_ngcontent-%COMP%]{\r\n    color: #5f6368;\r\n    font-size: 16px;\r\n}\r\n.fab-icn[_ngcontent-%COMP%]{\r\n    color: #1c1e21;\r\n    font-size: 19px;\r\n}\r\n.text-ellp[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.title-main[_ngcontent-%COMP%]{\r\n    font-family: \"Google Sans\",Roboto,Arial,sans-serif;\r\n    font-size: 22px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #3c4043;\r\n    max-height: 56px;\r\n    overflow-wrap: break-word;\r\n    word-wrap: break-word;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n}\r\n.title-day[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    letter-spacing: .2px;\r\n    line-height: 20px;\r\n    color: #3c4043;\r\n}\r\n.day-dot[_ngcontent-%COMP%]{\r\n    margin: 0 8px;\r\n    font-weight: 700;\r\n\r\n}\r\n.main-s[_ngcontent-%COMP%]{    \r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    letter-spacing: .2px;\r\n    line-height: 20px;\r\n    color: #3c4043;\r\n}\r\n.sub-s[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    letter-spacing: .3px;\r\n    line-height: 18px;\r\n    color: #5f6368;\r\n}\r\n.avar-div[_ngcontent-%COMP%], .side-div[_ngcontent-%COMP%]{\r\n    padding-left: 54px;\r\n}\r\n.card-mid[_ngcontent-%COMP%]   .eve-area[_ngcontent-%COMP%]:not(:first-child){\r\n    border-top: 1px solid #ebedf2;\r\n}\r\n.card-mid[_ngcontent-%COMP%]   .eve-area[_ngcontent-%COMP%]{\r\n    padding: 7px 20px;\r\n}\r\n.grey-bg[_ngcontent-%COMP%]{\r\n    background: #d8dadc;\r\n    min-height: 100vh;\r\n    height: 100%;\r\n}\r\n.form-check-input[_ngcontent-%COMP%] {\r\n    vertical-align: text-top;\r\n    cursor: pointer;\r\n    border-radius: 4px;\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 11' width='13' height='11' fill='none'%3e%3cpath d='M11.0426 1.02893C11.3258 0.695792 11.8254 0.655283 12.1585 0.938451C12.4917 1.22162 12.5322 1.72124 12.249 2.05437L5.51985 9.97104C5.23224 10.3094 4.72261 10.3451 4.3907 10.05L0.828197 6.88335C0.50141 6.59288 0.471975 6.09249 0.762452 5.7657C1.05293 5.43891 1.55332 5.40948 1.88011 5.69995L4.83765 8.32889L11.0426 1.02893Z' fill='%23FFFFFF'/%3e%3c/svg%3e\");\r\n}\r\n.ps-1[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    float: unset;\r\n    margin: 0 !important;\r\n}\r\nimg.hed-icn[_ngcontent-%COMP%] {\r\n    width: 24px;\r\n}\r\nimg.dms-icn[_ngcontent-%COMP%] {\r\n    width: 22px;\r\n}\r\n.head-icns[_ngcontent-%COMP%]{\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n.cards-main[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n.card-side[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    display: none;\r\n}\r\n.cards-main[_ngcontent-%COMP%]   .card-side[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n.side-acns[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.pend-btn[_ngcontent-%COMP%]{\r\n    width: max-content;\r\n    color: #fff;\r\n    background-color: #2c3e50 !important;\r\n    border-color: #2c3e50 !important;\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n    background-color: transparent;\r\n    border: 1px solid transparent;\r\n    padding: 0.4em 0.65em;\r\n    font-size: 1em;\r\n    line-height: 1.5;\r\n    border-radius: 0.25em;\r\n    cursor: pointer;\r\n}\r\n.pend-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    fill: #fff;\r\n    width: 18px;\r\n    height: 18px;\r\n}\r\n.center-data[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n.center-data[_ngcontent-%COMP%]   .meet-icon[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    padding: 0;\r\n    color: #5f6368;\r\n}\r\n.center-data[_ngcontent-%COMP%]   svg.svg-icn[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n#minusc[_ngcontent-%COMP%]{\r\n    display: block;\r\n}\r\n.collapsed[_ngcontent-%COMP%]   #minusc[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n.todo-main[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: auto;\r\n    background-color: #fff;\r\n    font-family: var(--font);\r\n    border-radius: 5px;\r\n    font-size: 15px;\r\n    overflow: hidden;\r\n    color: #455963;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\r\n  }\r\n.todo-list[_ngcontent-%COMP%] {\r\n    max-height: 20vh;\r\n    overflow: auto;\r\n  }\r\n.task-status[_ngcontent-%COMP%] {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 18px;\r\n    height: 18px;\r\n    cursor: pointer;\r\n    border: 2px solid #bbbdc7;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    margin-right: 10px;\r\n    position: relative;\r\n  }\r\n.task-status[_ngcontent-%COMP%]:checked {\r\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='405.272' height='405.272'%3e%3cpath d='M393.401 124.425L179.603 338.208c-15.832 15.835-41.514 15.835-57.361 0L11.878 227.836c-15.838-15.835-15.838-41.52 0-57.358 15.841-15.841 41.521-15.841 57.355-.006l81.698 81.699L336.037 67.064c15.841-15.841 41.523-15.829 57.358 0 15.835 15.838 15.835 41.514.006 57.361z' fill='%23fff'/%3e%3c/svg%3e\");\r\n    background-size: 10px;\r\n    background-color: #4acea3;\r\n    border-color: #38bb90;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n  }\r\n.task-delete[_ngcontent-%COMP%] {\r\n    margin-left: 8px;\r\n  }\r\n.task-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    padding: 12px 20px;\r\n  }\r\n.task-item[_ngcontent-%COMP%]    + .task-item[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #eef0f5;\r\n  }\r\n.task-item[_ngcontent-%COMP%]:hover {\r\n    background-color: #f6fbff;\r\n  }\r\n.task-name[_ngcontent-%COMP%] {\r\n    margin-right: auto;\r\n    flex: 1;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    margin-bottom: 0;\r\n    line-height: 26px;\r\n  }\r\n.task-item.is-completed[_ngcontent-%COMP%]    > .task-name[_ngcontent-%COMP%] {\r\n    -webkit-text-decoration: line-through;\r\n    text-decoration: line-through;\r\n  }\r\n.task-item.is-completed[_ngcontent-%COMP%] {\r\n    background-color: rgba(74, 206, 163, 0.1);\r\n  }\r\n.task-header-title[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    padding: 20px 20px 6px 20px;\r\n  }\r\n.task-tools[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    align-items: flex-start;\r\n    padding: 0 20px;\r\n  }\r\n.task-filter[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    padding: 3px 8px;\r\n    background: 0;\r\n    font-size: 14px;\r\n    line-height: 1;\r\n    cursor: pointer;\r\n    font-family: var(--font);\r\n    color: #8a9ca5;\r\n    border-radius: 20px;\r\n  }\r\n.task-filter.is-active[_ngcontent-%COMP%] {\r\n    background-color: #7996a5;\r\n    color: #fff;\r\n  }\r\n.task-count[_ngcontent-%COMP%] {\r\n    color: #8a9ca5;\r\n    font-size: 14px;\r\n  }\r\n.task-form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-top: 10px;\r\n  }\r\n.task-input[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    font-size: 16px;\r\n    font-family: var(--font);\r\n    padding: 10px 20px;\r\n    border: 0;\r\n    box-shadow: 0 -1px 0 #e2e4ea inset;\r\n    color: #455963;\r\n  }\r\n.task-input[_ngcontent-%COMP%]::placeholder {\r\n    color: #a8b5bb;\r\n  }\r\n.task-input[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 -1px 0 #bdcdd6 inset;\r\n    outline: none;\r\n  }\r\n.task-button[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n.task-btns[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background: transparent;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    margin-left: 8px;\r\n  }\r\n.task-btns[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    color: #737373;\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 24px;\r\n    max-width: 24px;\r\n    vertical-align: middle;\r\n}\r\n.task-delete[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\r\n    color: #dc4771;\r\n}\r\n.task-actions[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.task-item[_ngcontent-%COMP%]:hover    > .task-actions[_ngcontent-%COMP%], .task-item[_ngcontent-%COMP%]:focus    > .task-actions[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n.task-empty[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg fill='%23f4f4f4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 486.463 486.463'%3e%3cpath d='M243.225 333.382c-13.6 0-25 11.4-25 25s11.4 25 25 25c13.1 0 25-11.4 24.4-24.4.6-14.3-10.7-25.6-24.4-25.6z'/%3e%3cpath d='M474.625 421.982c15.7-27.1 15.8-59.4.2-86.4l-156.6-271.2c-15.5-27.3-43.5-43.5-74.9-43.5s-59.4 16.3-74.9 43.4l-156.8 271.5c-15.6 27.3-15.5 59.8.3 86.9 15.6 26.8 43.5 42.9 74.7 42.9h312.8c31.3 0 59.4-16.3 75.2-43.6zm-34-19.6c-8.7 15-24.1 23.9-41.3 23.9h-312.8c-17 0-32.3-8.7-40.8-23.4-8.6-14.9-8.7-32.7-.1-47.7l156.8-271.4c8.5-14.9 23.7-23.7 40.9-23.7 17.1 0 32.4 8.9 40.9 23.8l156.7 271.4c8.4 14.6 8.3 32.2-.3 47.1z'/%3e%3cpath d='M237.025 157.882c-11.9 3.4-19.3 14.2-19.3 27.3.6 7.9 1.1 15.9 1.7 23.8 1.7 30.1 3.4 59.6 5.1 89.7.6 10.2 8.5 17.6 18.7 17.6s18.2-7.9 18.7-18.2c0-6.2 0-11.9.6-18.2 1.1-19.3 2.3-38.6 3.4-57.9.6-12.5 1.7-25 2.3-37.5 0-4.5-.6-8.5-2.3-12.5-5.1-11.2-17-16.9-28.9-14.1z'/%3e%3c/svg%3e\");\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    font-weight: 500;\r\n    font-size: 18px;\r\n    background-size: 80px;\r\n  }\r\n.btn-white[_ngcontent-%COMP%]{\r\n    background-color: #fff;\r\n    border: 1px dashed #ccc;\r\n    border-radius: 40px;\r\n    color: #737373;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    height: 26px;\r\n    margin: 0 4px;\r\n    padding: 0 10px 0 8px;\r\n  }\r\n@media (max-width: 600px) {\r\n    .task-actions[_ngcontent-%COMP%] {\r\n      display: block;\r\n    }\r\n  }\r\n  .angular-editor-textarea {\r\n    height: 10rem !important;\r\n}\r\n.drops[_ngcontent-%COMP%]{\r\n    z-index: 95;\r\n    display: none;\r\n    float: left;\r\n    min-width: 10rem;\r\n    padding: 0.5rem 0;\r\n    margin: 0.125rem 0 0;\r\n    font-size: 1rem;\r\n    color: #212529;\r\n    text-align: left;\r\n    list-style: none;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    position: absolute;\r\n    box-shadow: 0px 0px 50px 0px rgba(82, 63, 105, 0.15);\r\n    border-radius: 4px;\r\n}\r\n.drops.show[_ngcontent-%COMP%]{\r\n    display: block;\r\n    min-width: 400px;\r\n}\r\n.drops-item[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    padding: 0.25rem 1.5rem;\r\n    clear: both;\r\n    font-weight: 400;\r\n    color: #74788d;\r\n    text-align: inherit;\r\n    white-space: nowrap;\r\n    background-color: transparent;\r\n    border: 0;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]{\r\n  padding: 0.8rem 0;\r\n  min-width: 270px;\r\n  margin-top: 5px;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{\r\n  padding: 0.4rem 1rem;\r\n  cursor: pointer;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n  background: #f1f6fd;\r\n  color: #0b0e1f;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  display: flex;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .ckc-icn[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  color: #3b93fc;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .dropdown-item.d-range[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline !important;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active {\r\n  background: none;\r\n}\r\n.kt-input[_ngcontent-%COMP%] {\r\n  height: 36px;\r\n  line-height: 25px;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  \r\n  line-height: 24px;\r\n  background-color: rgba(255, 255, 255, 0);\r\n  color: #3c4043;\r\n  border: none;\r\n  border-radius: 0;\r\n  border-bottom: 2px solid #dadce0;\r\n  padding: 0.65rem 1rem;\r\n}\r\n.kt-input[_ngcontent-%COMP%]:focus {\r\n  border-bottom: 2px solid #1a73e8;\r\n}\r\n.calendar-wrap[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 0.75em;\r\n  margin: auto;\r\n  font-size: 4vw;\r\n  background-color: #fff;\r\n  border-radius: 1.5em;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  box-shadow:\r\n    0 0.0625em 0.25em rgba(0,20,50,0.2),\r\n    0 0.5em 0.5em 0.125em rgba(0,20,50,0.1);\r\n}\r\n@media (min-width: 500px) {\r\n  .calendar-wrap[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    font-size: 13px;\r\n  }\r\n}\r\n.month-year[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.75em;\r\n  font-weight: normal;\r\n  font-size: 1.25em;\r\n  text-align: center;\r\n}\r\n.calendar[_ngcontent-%COMP%] {\r\n  table-layout: fixed;\r\n  width: 100%;\r\n  margin-bottom: 0.75em;\r\n  overflow: hidden;\r\n  border-collapse: collapse;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n.day-title[_ngcontent-%COMP%] {\r\n  width: 25px;\r\n  height: 40px;\r\n  vertical-align: top;\r\n  font-weight: normal;\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.0625em;\r\n  box-shadow: inset 0 -0.875em #fff, inset 0 -1em rgba(0,20,50,0.1);\r\n  text-align: center;\r\n}\r\n.day[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 20px;\r\n  height: 30px;\r\n}\r\n.day[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n.day[_ngcontent-%COMP%]:focus   .day-number[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 80%;\r\n  height: 80%;\r\n  transform: translate(-50%,-50%);\r\n  border: 0.25em solid #0288d1;\r\n  border-radius: 50%;\r\n}\r\n.day.active-a[_ngcontent-%COMP%]:focus   .day-number[_ngcontent-%COMP%]::after, .day.active-b[_ngcontent-%COMP%]:focus   .day-number[_ngcontent-%COMP%]::after {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.day.today[_ngcontent-%COMP%]:focus   .day-number[_ngcontent-%COMP%]::after {\r\n  width: 102%;\r\n  height: 102%;\r\n}\r\n.day[_ngcontent-%COMP%]:hover   span.day-number[_ngcontent-%COMP%] {\r\n  color: #0288d1;\r\n}\r\n.day[_ngcontent-%COMP%]:first-child, .day[_ngcontent-%COMP%]:last-child {\r\n  color: rgba(0,0,0,0.5);\r\n}\r\n.day.range[_ngcontent-%COMP%] {\r\n  color: #0288d1;\r\n  background-color: #e1f5fe;\r\n}\r\n.day.range.active-a[_ngcontent-%COMP%], .day[_ngcontent-%COMP%]:not(.range)    + .day.range.active-b[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: inset -1.5em 0 #e1f5fe;\r\n}\r\n.day.range.active-b[_ngcontent-%COMP%], .day.range[_ngcontent-%COMP%]    + .day.range.active-a[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: inset 1.5em 0 #e1f5fe;\r\n}\r\n.day.range.active-a[_ngcontent-%COMP%]:first-child, .day.range.active-b[_ngcontent-%COMP%]:first-child {\r\n  box-shadow: none;\r\n}\r\n.day.range.active-a[_ngcontent-%COMP%]:first-child    + .day.range[_ngcontent-%COMP%], .day.range.active-b[_ngcontent-%COMP%]:first-child    + .day.range[_ngcontent-%COMP%] {\r\n  box-shadow: -1.5em 0 #e1f5fe;\r\n}\r\n.day.range.active-a[_ngcontent-%COMP%]:first-child    + .day[_ngcontent-%COMP%]:not(.range), .day.range.active-b[_ngcontent-%COMP%]:first-child    + .day[_ngcontent-%COMP%]:not(.range) {\r\n  box-shadow: -4.5em 0 #e1f5fe;\r\n}\r\n.day.range.active-a[_ngcontent-%COMP%]:first-child    + .day.range.active-b[_ngcontent-%COMP%] {\r\n  box-shadow:\r\n    -1.5em 0 #e1f5fe,\r\n    inset 1.5em 0 #e1f5fe;\r\n}\r\n.day-number[_ngcontent-%COMP%] {\r\n  position: relative;\r\n    z-index: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 30px;\r\n    width: 30px;\r\n    border-radius: 50%;\r\n}\r\n.day.active-a[_ngcontent-%COMP%]   span.day-number[_ngcontent-%COMP%], .day.active-b[_ngcontent-%COMP%]   span.day-number[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #03A9F4;\r\n}\r\n.day.prev-mon[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%], .day.next-mon[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\r\n  color: rgba(0,0,0,0.3);\r\n}\r\n.day.prev-mon[class*=\"active\"][_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%], .day.next-mon[class*=\"active\"][_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\r\n  color: rgba(255,255,255,0.5);\r\n  background-color: #81D4FA;\r\n}\r\n.day.today[_ngcontent-%COMP%]   span.day-number[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  border: 0.25em solid transparent;\r\n  box-shadow: inset 0 0 0 2em #37474F;\r\n}\r\n.calendar-wrap[_ngcontent-%COMP%]   .reset[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n.rec-btns[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.btn-min[_ngcontent-%COMP%] {\r\n  min-width: 160px;\r\n  min-height: 34px;\r\n}\r\n.modal-lg.w-min[_ngcontent-%COMP%] {\r\n  min-width: 500px;\r\n}\r\n.repeat-day.active[_ngcontent-%COMP%], .repeat-month.active[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: #1a73e8;\r\n}\r\n.repeat-day[_ngcontent-%COMP%], .repeat-month[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    box-sizing: border-box;\r\n    width: 24px;\r\n    height: 24px;\r\n    font-size: 10px;\r\n    font-weight: 500;\r\n    border-radius: 50%;\r\n    background-color: #f1f3f4;\r\n    color: #80868b;\r\n    margin-right: 8px;\r\n    cursor: pointer;\r\n    text-transform: capitalize;\r\n    position: relative;\r\n}\r\n.rep-chk[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n.w-min-150[_ngcontent-%COMP%]{\r\n  min-width: 150px;\r\n}\r\n.left-lbls[_ngcontent-%COMP%] {\r\n  min-width: 60px;\r\n  text-align: right;\r\n  margin-right: 10px;\r\n}\r\n.numbr[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  text-align: center;\r\n  padding: 0.65rem 0;\r\n}\r\n.arrws[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  text-align: center;\r\n}\r\n.arw-spn[_ngcontent-%COMP%] {\r\n  height: calc(1.5em + 1.3rem + 2px);\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #e2e5ec;\r\n  border-radius: 4px;\r\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  display: block;\r\n  width: 50px;\r\n  text-align: center;\r\n  padding: 0.65rem 0;\r\n}\r\n.form-check-input[type=radio][_ngcontent-%COMP%], .form-check-input[_ngcontent-%COMP%]:checked[type=radio] {\r\n  -webkit-appearance: radio;\r\n  appearance: radio;\r\n  background-image: none;\r\n}\r\n  ng-select {\r\n  border-bottom: none !important;\r\n  padding: 0 !important;\r\n}\r\n\r\n.Replied_border_left_true_warning[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #ffb822;\r\n}\r\n.Replied_border_left_true_primary[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #95bed9;\r\n}\r\n.Replied_border_left_true_success[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #3CB371;\r\n}\r\n.Replied_border_left_true_Danger[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #F58A8B;\r\n}\r\n.Replied_border_left_true_hold[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #c0b5dc\r\n}\r\n.Replied_border_left_true_rejected[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #f5c293;\r\n}\r\n.Replied_border_left_true_underApprovals[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #BD838C;\r\n}\r\n.Replied_border_left_true_forwardUnderApproval[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #E0B1D7;\r\n}\r\n.Replied_border_left_true_completeUnderApproval[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #98c7bf;\r\n}\r\n.Replied_border_left_true_projectHold[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #C0B5DC;\r\n}\r\n.Replied_border_left_true_NewProject[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #3699ff;\r\n}\r\n.Replied_border_left_true_DeadlineExtended[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #E0B1D7;\r\n}\r\n.Replied_border_left_true_HoldunderApp[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #a85098;\r\n}\r\n.Replied_border_left_true_NewToDo[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #5088a8;\r\n}\r\n.info-icon-cir[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: #5867dd;\r\n}\r\n.desc[_ngcontent-%COMP%]{\r\n  color: grey;\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n}\r\n.remks[_ngcontent-%COMP%]{\r\nfont-size: 12px;\r\n\r\n}\r\n.kt-badge.kt-badge--inline[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  width: auto;\r\n  padding: 0.15rem 0.75rem;\r\n  border-radius: 2px;\r\n  margin-left: 4px;\r\n}\r\n.badge-img[_ngcontent-%COMP%] {\r\n  width: 16px;\r\n  padding: 2px 0;\r\n  margin-right: 4px;\r\n}\r\n.mat-icon.mat-primary[_ngcontent-%COMP%] {\r\n  color: #3699ff;\r\n}\r\nmat-icon[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n.cursor-pointer[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n.input-group-text[_ngcontent-%COMP%] > .mat-icon-button[_ngcontent-%COMP%] {\r\n  line-height: 35px !important;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  right: 0;\r\n  background: #ffffff;\r\n  box-shadow: 0px 1px 9px -3px rgb(0 0 0 / 75%);\r\n  border-left: 1px solid #ffffff;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  overflow-y: auto;\r\n  z-index: 999;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  backface-visibility: hidden;\r\n  -webkit-backface-visibility: hidden;\r\n  \r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n  background-color: #f5f6fc;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #333;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 25px;\r\n  font-size: 20px;\r\n  margin-left: 50px;\r\n}\r\n.info-icon-cir[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  color: #5867dd;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%] {\r\n  border-bottom: 0.07rem dashed #dedede;\r\n  padding: 6px;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%] {\r\n  border-bottom: 0.07rem dashed rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n.sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%] {\r\n  width: 270px;\r\n  text-align: left;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.side-bar-box[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  padding-left: 0px !important;\r\n}\r\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #f1f1f1;\r\n  font-weight: 400;\r\n}\r\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n  border-bottom: none\r\n}\r\n.custom-textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 150px;\r\n  font-size: 16px;\r\n  padding-left: 25px;\r\n  background-repeat: no-repeat;\r\n  background-position: left center;\r\n  line-height: 1;\r\n  border: 1px solid #ccc;\r\n}\r\n.custom-textarea[_ngcontent-%COMP%]::before {\r\n  content: \"\u2022 \";\r\n  display: inline-block;\r\n  width: 2em;\r\n  margin-left: -1em;\r\n}\r\n.angular-editor-textarea[_ngcontent-%COMP%] {\r\n  max-height: 150px !important;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1; \r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #888; \r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555; \r\n}\r\n.scrolly[_ngcontent-%COMP%] {\r\n  max-height: 100vh;\r\n  overflow: auto;\r\n}\r\n.meet-card[_ngcontent-%COMP%] {\r\n  height: 97vh;\r\n}\r\n.cstm-swd[_ngcontent-%COMP%] {\r\n  box-shadow: 0px 3px 7px #8d8d8d52;\r\n}\r\nspan.statusicn[_ngcontent-%COMP%] {\r\n  right: 2px;\r\n  position: absolute;\r\n  top: 4px;\r\n}\r\n.kt-timer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n    font-size: 16px;\r\n    color: #2786fb;\r\n    text-transform: uppercase;\r\n    background-color: #e4f0ff;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.kt-timer[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n  text-transform: capitalize;\r\n}\r\nspan.kt-dt-cnt-view[_ngcontent-%COMP%] {\r\n  color: #2786fb;\r\n  border-right: 1px solid #ccc;\r\n  padding-right: 10px;\r\n  margin-right: 8px;\r\n  width: 26px;\r\n  display: inline-block;\r\n}\r\n.note-text[_ngcontent-%COMP%] {\r\n  font-family: Arial, sans-serif;\r\n}\r\nspan.time-play-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  position: relative;\r\n  top: -2px;\r\n}\r\nspan.time-play-btn[_ngcontent-%COMP%] {\r\n  margin-left: 3px;\r\n  font-size: 12px;\r\n \r\n}\r\n.ast-kt-dw[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 4px;\r\n}\r\n.admin-check[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.admin-check[_ngcontent-%COMP%] {\r\n  margin-right: 20px;\r\n}\r\n.admin-check[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  text-transform: capitalize;\r\n  font-style: italic;\r\n  font-size: 11px;\r\n}\r\nspan.admin-check-svg[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n  position: relative;\r\n  top: -2px;\r\n}\r\n.angular-editor-textarea[_ngcontent-%COMP%] {\r\n  height: 135px !important;\r\n}\r\n.note-text[_ngcontent-%COMP%] {\r\n  max-height: 200px;\r\n  overflow: auto;\r\n}\r\n.kt-multy-user-dw.show[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  transform: unset !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRpbmctcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsMEVBQTBFO0FBQzlFO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFHbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFFbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFFYix5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXO0lBRVgsV0FBVztJQUVYLFlBQVk7SUFFWixjQUFjO0lBRWQsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBR2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBRW5CLHNCQUFzQjtJQUV0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUViLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUVoQixXQUFXO0lBRVgsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lB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dGVudCI6WyIubWVldC1jYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ubWVldC1jYXJkIC5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG59XHJcbmg1LmNhcmQtdHRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzNjNDA0MztcclxufVxyXG4uaGVhZGVyMiB7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZhO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmVkZjI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2Y5YThkNCwjZDhiNGZlICwjODE4Y2Y2KTsgKi9cclxufVxyXG4uY2FyZC1ib2R5MntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XHJcbn1cclxuLnRpdGxlLXJpZ2h0e1xyXG4gICAgcGFkZGluZy10b3A6NnB4O1xyXG59XHJcbi5tYWluLXRpdGxleyAgICAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLWhlaWdodDogMzJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGxpbmVhcjsgXHJcbiAgICBtaW4taGVpZ2h0OiAzMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG4uYm94Y2wtZGl2e1xyXG4gICAgY29sb3I6ICM1ZjYzNjg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcclxuICAgIGJveC1mbGV4OiAwO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDA7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICAtd2Via2l0LWZsZXgtc2hyaW5rOiAwO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWF4LWhlaWdodDogMzZweDtcclxuICAgIG1heC1oZWlnaHQ6IDM2cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uYm94LWNse1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG4uZXZlLWFyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi1oZWlnaHQ6IDMycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgbGluZWFyO1xyXG59XHJcbi5ldmUtbW9kYWwgLnNjcm9sbHl7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4ucmd0LWRlc3tcclxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgIGJveC1mbGV4OiAxO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5sZWZ0LWljb257XHJcbiAgICBjb2xvcjogIzVmNjM2ODtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTdweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgbWF4LWhlaWdodDogNTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxufVxyXG4udG9vbC1zcGFue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zdmctaWNue1xyXG4gICAgZmlsbDogIzVmNjM2ODtcclxufVxyXG4uZmFzLWljbntcclxuICAgIGNvbG9yOiAjNWY2MzY4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5mYWItaWNue1xyXG4gICAgY29sb3I6ICMxYzFlMjE7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuLnRleHQtZWxscHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnRpdGxlLW1haW57XHJcbiAgICBmb250LWZhbWlseTogXCJHb29nbGUgU2Fuc1wiLFJvYm90byxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgY29sb3I6ICMzYzQwNDM7XHJcbiAgICBtYXgtaGVpZ2h0OiA1NnB4O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuLnRpdGxlLWRheXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICMzYzQwNDM7XHJcbn1cclxuLmRheS1kb3R7XHJcbiAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbn1cclxuLm1haW4tc3sgICAgXHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4ycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjM2M0MDQzO1xyXG59XHJcbi5zdWItc3tcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgY29sb3I6ICM1ZjYzNjg7XHJcbn1cclxuLmF2YXItZGl2LCAuc2lkZS1kaXZ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDU0cHg7XHJcbn1cclxuXHJcbi5jYXJkLW1pZCAuZXZlLWFyZWE6bm90KDpmaXJzdC1jaGlsZCl7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ViZWRmMjtcclxufVxyXG4uY2FyZC1taWQgLmV2ZS1hcmVhe1xyXG4gICAgcGFkZGluZzogN3B4IDIwcHg7XHJcbn1cclxuLmdyZXktYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDhkYWRjO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmZvcm0tY2hlY2staW5wdXQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMyAxMScgd2lkdGg9JzEzJyBoZWlnaHQ9JzExJyBmaWxsPSdub25lJyUzZSUzY3BhdGggZD0nTTExLjA0MjYgMS4wMjg5M0MxMS4zMjU4IDAuNjk1NzkyIDExLjgyNTQgMC42NTUyODMgMTIuMTU4NSAwLjkzODQ1MUMxMi40OTE3IDEuMjIxNjIgMTIuNTMyMiAxLjcyMTI0IDEyLjI0OSAyLjA1NDM3TDUuNTE5ODUgOS45NzEwNEM1LjIzMjI0IDEwLjMwOTQgNC43MjI2MSAxMC4zNDUxIDQuMzkwNyAxMC4wNUwwLjgyODE5NyA2Ljg4MzM1QzAuNTAxNDEgNi41OTI4OCAwLjQ3MTk3NSA2LjA5MjQ5IDAuNzYyNDUyIDUuNzY1N0MxLjA1MjkzIDUuNDM4OTEgMS41NTMzMiA1LjQwOTQ4IDEuODgwMTEgNS42OTk5NUw0LjgzNzY1IDguMzI4ODlMMTEuMDQyNiAxLjAyODkzWicgZmlsbD0nJTIzRkZGRkZGJy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG59XHJcbi5wcy0xe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IHVuc2V0O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuaW1nLmhlZC1pY24ge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbn1cclxuaW1nLmRtcy1pY24ge1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbn1cclxuLmhlYWQtaWNuc3tcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcbi5jYXJkcy1tYWluIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmNhcmQtc2lkZXtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jYXJkcy1tYWluIC5jYXJkLXNpZGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5zaWRlLWFjbnMgYXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucGVuZC1idG57XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzJjM2U1MCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMC40ZW0gMC42NWVtO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5wZW5kLWJ0biBzdmcge1xyXG4gICAgZmlsbDogI2ZmZjtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uY2VudGVyLWRhdGEge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2VudGVyLWRhdGEgLm1lZXQtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb2xvcjogIzVmNjM2ODtcclxufVxyXG4uY2VudGVyLWRhdGEgc3ZnLnN2Zy1pY24ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbiNtaW51c2N7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uY29sbGFwc2VkICNtaW51c2N7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udG9kby1tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjb2xvcjogIzQ1NTk2MztcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG4gIFxyXG4gIC50b2RvLWxpc3Qge1xyXG4gICAgbWF4LWhlaWdodDogMjB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAudGFzay1zdGF0dXMge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2JiYmRjNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLXN0YXR1czpjaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDUuMjcyJyBoZWlnaHQ9JzQwNS4yNzInJTNlJTNjcGF0aCBkPSdNMzkzLjQwMSAxMjQuNDI1TDE3OS42MDMgMzM4LjIwOGMtMTUuODMyIDE1LjgzNS00MS41MTQgMTUuODM1LTU3LjM2MSAwTDExLjg3OCAyMjcuODM2Yy0xNS44MzgtMTUuODM1LTE1LjgzOC00MS41MiAwLTU3LjM1OCAxNS44NDEtMTUuODQxIDQxLjUyMS0xNS44NDEgNTcuMzU1LS4wMDZsODEuNjk4IDgxLjY5OUwzMzYuMDM3IDY3LjA2NGMxNS44NDEtMTUuODQxIDQxLjUyMy0xNS44MjkgNTcuMzU4IDAgMTUuODM1IDE1LjgzOCAxNS44MzUgNDEuNTE0LjAwNiA1Ny4zNjF6JyBmaWxsPSclMjNmZmYnLyUzZSUzYy9zdmclM2VcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGFjZWEzO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMzhiYjkwO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2stZGVsZXRlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWl0ZW0gKyAudGFzay1pdGVtIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVmMGY1O1xyXG4gIH1cclxuICBcclxuICAudGFzay1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmZiZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLW5hbWUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZmxleDogMTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWl0ZW0uaXMtY29tcGxldGVkID4gLnRhc2stbmFtZSB7XHJcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWl0ZW0uaXMtY29tcGxldGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDIwNiwgMTYzLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAudGFzay1oZWFkZXItdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCA2cHggMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2stdG9vbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gIH1cclxuICBcclxuICAudGFzay1maWx0ZXIge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogM3B4IDhweDtcclxuICAgIGJhY2tncm91bmQ6IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcclxuICAgIGNvbG9yOiAjOGE5Y2E1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2stZmlsdGVyLmlzLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk5NmE1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWNvdW50IHtcclxuICAgIGNvbG9yOiAjOGE5Y2E1O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAudGFzay1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAudGFzay1pbnB1dCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAtMXB4IDAgI2UyZTRlYSBpbnNldDtcclxuICAgIGNvbG9yOiAjNDU1OTYzO1xyXG4gIH1cclxuICBcclxuICAudGFzay1pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2E4YjViYjtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2staW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYThiNWJiO1xyXG4gIH1cclxuICBcclxuICAudGFzay1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNhOGI1YmI7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrLWlucHV0OmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTFweCAwICNiZGNkZDYgaW5zZXQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAudGFzay1idXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRhc2stYnRucyB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgLnRhc2stYnRucyBzdmcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6ICM3MzczNzM7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1heC13aWR0aDogMjRweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnRhc2stZGVsZXRlIHN2Z3tcclxuICAgIGNvbG9yOiAjZGM0NzcxO1xyXG59XHJcbi50YXNrLWFjdGlvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4gIC50YXNrLWl0ZW06aG92ZXIgPiAudGFzay1hY3Rpb25zLCAudGFzay1pdGVtOmZvY3VzID4gLnRhc2stYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAudGFzay1lbXB0eSB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzY3N2ZyBmaWxsPSclMjNmNGY0ZjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ4Ni40NjMgNDg2LjQ2MyclM2UlM2NwYXRoIGQ9J00yNDMuMjI1IDMzMy4zODJjLTEzLjYgMC0yNSAxMS40LTI1IDI1czExLjQgMjUgMjUgMjVjMTMuMSAwIDI1LTExLjQgMjQuNC0yNC40LjYtMTQuMy0xMC43LTI1LjYtMjQuNC0yNS42eicvJTNlJTNjcGF0aCBkPSdNNDc0LjYyNSA0MjEuOTgyYzE1LjctMjcuMSAxNS44LTU5LjQuMi04Ni40bC0xNTYuNi0yNzEuMmMtMTUuNS0yNy4zLTQzLjUtNDMuNS03NC45LTQzLjVzLTU5LjQgMTYuMy03NC45IDQzLjRsLTE1Ni44IDI3MS41Yy0xNS42IDI3LjMtMTUuNSA1OS44LjMgODYuOSAxNS42IDI2LjggNDMuNSA0Mi45IDc0LjcgNDIuOWgzMTIuOGMzMS4zIDAgNTkuNC0xNi4zIDc1LjItNDMuNnptLTM0LTE5LjZjLTguNyAxNS0yNC4xIDIzLjktNDEuMyAyMy45aC0zMTIuOGMtMTcgMC0zMi4zLTguNy00MC44LTIzLjQtOC42LTE0LjktOC43LTMyLjctLjEtNDcuN2wxNTYuOC0yNzEuNGM4LjUtMTQuOSAyMy43LTIzLjcgNDAuOS0yMy43IDE3LjEgMCAzMi40IDguOSA0MC45IDIzLjhsMTU2LjcgMjcxLjRjOC40IDE0LjYgOC4zIDMyLjItLjMgNDcuMXonLyUzZSUzY3BhdGggZD0nTTIzNy4wMjUgMTU3Ljg4MmMtMTEuOSAzLjQtMTkuMyAxNC4yLTE5LjMgMjcuMy42IDcuOSAxLjEgMTUuOSAxLjcgMjMuOCAxLjcgMzAuMSAzLjQgNTkuNiA1LjEgODkuNy42IDEwLjIgOC41IDE3LjYgMTguNyAxNy42czE4LjItNy45IDE4LjctMTguMmMwLTYuMiAwLTExLjkuNi0xOC4yIDEuMS0xOS4zIDIuMy0zOC42IDMuNC01Ny45LjYtMTIuNSAxLjctMjUgMi4zLTM3LjUgMC00LjUtLjYtOC41LTIuMy0xMi41LTUuMS0xMS4yLTE3LTE2LjktMjguOS0xNC4xeicvJTNlJTNjL3N2ZyUzZVwiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MHB4O1xyXG4gIH1cclxuICAuYnRuLXdoaXRle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGNvbG9yOiAjNzM3MzczO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHggMCA4cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnRhc2stYWN0aW9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuOjpuZy1kZWVwIC5hbmd1bGFyLWVkaXRvci10ZXh0YXJlYSB7XHJcbiAgICBoZWlnaHQ6IDEwcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRyb3Bze1xyXG4gICAgei1pbmRleDogOTU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICBtYXJnaW46IDAuMTI1cmVtIDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNTBweCAwcHggcmdiYSg4MiwgNjMsIDEwNSwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmRyb3BzLnNob3d7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbn1cclxuLmRyb3BzLWl0ZW17XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAxLjVyZW07XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzc0Nzg4ZDtcclxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5zb3J0LWRyb3B7XHJcbiAgcGFkZGluZzogMC44cmVtIDA7XHJcbiAgbWluLXdpZHRoOiAyNzBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnNvcnQtZHJvcCAuZHJvcGRvd24taXRlbXtcclxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNvcnQtZHJvcCAuYWN0aXZle1xyXG4gIGJhY2tncm91bmQ6ICNmMWY2ZmQ7XHJcbiAgY29sb3I6ICMwYjBlMWY7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uc29ydC1kcm9wIC5hY3RpdmUgLmNrYy1pY257XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiAjM2I5M2ZjO1xyXG59XHJcbi5zb3J0LWRyb3AgLmRyb3Bkb3duLWl0ZW0uZC1yYW5nZTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxufVxyXG4uc29ydC1kcm9wIC5kcm9wZG93bi1pdGVtOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmt0LWlucHV0IHtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgLyogaGVpZ2h0OiAyNHB4OyAqL1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgY29sb3I6ICMzYzQwNDM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkYWRjZTA7XHJcbiAgcGFkZGluZzogMC42NXJlbSAxcmVtO1xyXG59XHJcblxyXG4ua3QtaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWE3M2U4O1xyXG59XHJcblxyXG4uY2FsZW5kYXItd3JhcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC43NWVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXNpemU6IDR2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJveC1zaGFkb3c6XHJcbiAgICAwIDAuMDYyNWVtIDAuMjVlbSByZ2JhKDAsMjAsNTAsMC4yKSxcclxuICAgIDAgMC41ZW0gMC41ZW0gMC4xMjVlbSByZ2JhKDAsMjAsNTAsMC4xKTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgLmNhbGVuZGFyLXdyYXAge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxufVxyXG5cclxuLm1vbnRoLXllYXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNzVlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhbGVuZGFyIHtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNzVlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmRheS10aXRsZSB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNjI1ZW07XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMC44NzVlbSAjZmZmLCBpbnNldCAwIC0xZW0gcmdiYSgwLDIwLDUwLDAuMSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGF5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZGF5OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZGF5OmZvY3VzIC5kYXktbnVtYmVyOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogODAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgIzAyODhkMTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5kYXkuYWN0aXZlLWE6Zm9jdXMgLmRheS1udW1iZXI6OmFmdGVyLFxyXG4uZGF5LmFjdGl2ZS1iOmZvY3VzIC5kYXktbnVtYmVyOjphZnRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZGF5LnRvZGF5OmZvY3VzIC5kYXktbnVtYmVyOjphZnRlciB7XHJcbiAgd2lkdGg6IDEwMiU7XHJcbiAgaGVpZ2h0OiAxMDIlO1xyXG59XHJcblxyXG4uZGF5OmhvdmVyIHNwYW4uZGF5LW51bWJlciB7XHJcbiAgY29sb3I6ICMwMjg4ZDE7XHJcbn1cclxuXHJcbi5kYXk6Zmlyc3QtY2hpbGQsXHJcbi5kYXk6bGFzdC1jaGlsZCB7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxufVxyXG5cclxuLmRheS5yYW5nZSB7XHJcbiAgY29sb3I6ICMwMjg4ZDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjVmZTtcclxufVxyXG5cclxuLmRheS5yYW5nZS5hY3RpdmUtYSxcclxuLmRheTpub3QoLnJhbmdlKSArIC5kYXkucmFuZ2UuYWN0aXZlLWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xLjVlbSAwICNlMWY1ZmU7XHJcbn1cclxuXHJcbi5kYXkucmFuZ2UuYWN0aXZlLWIsXHJcbi5kYXkucmFuZ2UgKyAuZGF5LnJhbmdlLmFjdGl2ZS1hIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiBpbnNldCAxLjVlbSAwICNlMWY1ZmU7XHJcbn1cclxuXHJcbi5kYXkucmFuZ2UuYWN0aXZlLWE6Zmlyc3QtY2hpbGQsXHJcbi5kYXkucmFuZ2UuYWN0aXZlLWI6Zmlyc3QtY2hpbGQge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5kYXkucmFuZ2UuYWN0aXZlLWE6Zmlyc3QtY2hpbGQgKyAuZGF5LnJhbmdlLFxyXG4uZGF5LnJhbmdlLmFjdGl2ZS1iOmZpcnN0LWNoaWxkICsgLmRheS5yYW5nZSB7XHJcbiAgYm94LXNoYWRvdzogLTEuNWVtIDAgI2UxZjVmZTtcclxufVxyXG5cclxuLmRheS5yYW5nZS5hY3RpdmUtYTpmaXJzdC1jaGlsZCArIC5kYXk6bm90KC5yYW5nZSksXHJcbi5kYXkucmFuZ2UuYWN0aXZlLWI6Zmlyc3QtY2hpbGQgKyAuZGF5Om5vdCgucmFuZ2UpIHtcclxuICBib3gtc2hhZG93OiAtNC41ZW0gMCAjZTFmNWZlO1xyXG59XHJcblxyXG4uZGF5LnJhbmdlLmFjdGl2ZS1hOmZpcnN0LWNoaWxkICsgLmRheS5yYW5nZS5hY3RpdmUtYiB7XHJcbiAgYm94LXNoYWRvdzpcclxuICAgIC0xLjVlbSAwICNlMWY1ZmUsXHJcbiAgICBpbnNldCAxLjVlbSAwICNlMWY1ZmU7XHJcbn1cclxuXHJcbi5kYXktbnVtYmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uZGF5LmFjdGl2ZS1hIHNwYW4uZGF5LW51bWJlcixcclxuLmRheS5hY3RpdmUtYiBzcGFuLmRheS1udW1iZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM0E5RjQ7XHJcbn1cclxuXHJcbi5kYXkucHJldi1tb24gLmRheS1udW1iZXIsXHJcbi5kYXkubmV4dC1tb24gLmRheS1udW1iZXIge1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcbi5kYXkucHJldi1tb25bY2xhc3MqPVwiYWN0aXZlXCJdIC5kYXktbnVtYmVyLFxyXG4uZGF5Lm5leHQtbW9uW2NsYXNzKj1cImFjdGl2ZVwiXSAuZGF5LW51bWJlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFENEZBO1xyXG59XHJcblxyXG4uZGF5LnRvZGF5IHNwYW4uZGF5LW51bWJlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMmVtICMzNzQ3NEY7XHJcbn1cclxuXHJcbi5jYWxlbmRhci13cmFwIC5yZXNldCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnJlYy1idG5ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uYnRuLW1pbiB7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBtaW4taGVpZ2h0OiAzNHB4O1xyXG59XHJcbi5tb2RhbC1sZy53LW1pbiB7XHJcbiAgbWluLXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLnJlcGVhdC1kYXkuYWN0aXZlLFxyXG4ucmVwZWF0LW1vbnRoLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE3M2U4O1xyXG59XHJcblxyXG4ucmVwZWF0LWRheSxcclxuLnJlcGVhdC1tb250aCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNDtcclxuICAgIGNvbG9yOiAjODA4NjhiO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucmVwLWNoayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLnctbWluLTE1MHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG59XHJcbi5sZWZ0LWxibHMge1xyXG4gIG1pbi13aWR0aDogNjBweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLm51bWJyIHtcclxuICB3aWR0aDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC42NXJlbSAwO1xyXG59XHJcbi5hcnJ3cyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hcnctc3BuIHtcclxuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAxLjNyZW0gKyAycHgpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU1ZWM7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC42NXJlbSAwO1xyXG59XHJcbi5mb3JtLWNoZWNrLWlucHV0W3R5cGU9cmFkaW9dLCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkW3R5cGU9cmFkaW9dIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHJhZGlvO1xyXG4gIGFwcGVhcmFuY2U6IHJhZGlvO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuOjpuZy1kZWVwIG5nLXNlbGVjdCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogU3RhdHVzIENvbG9ycyAqL1xyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV93YXJuaW5nIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmI4MjI7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcHJpbWFyeSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOTViZWQ5O1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3N1Y2Nlc3Mge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzNDQjM3MTtcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9EYW5nZXIge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0Y1OEE4QjtcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9ob2xkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNjMGI1ZGNcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9yZWplY3RlZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjVjMjkzO1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3VuZGVyQXBwcm92YWxzIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNCRDgzOEM7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfZm9yd2FyZFVuZGVyQXBwcm92YWwge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0UwQjFENztcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9jb21wbGV0ZVVuZGVyQXBwcm92YWwge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZjtcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9wcm9qZWN0SG9sZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQzBCNURDO1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX05ld1Byb2plY3Qge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzM2OTlmZjtcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9EZWFkbGluZUV4dGVuZGVkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfSG9sZHVuZGVyQXBwIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhODUwOTg7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfTmV3VG9EbyB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNTA4OGE4O1xyXG59XHJcbi5pbmZvLWljb24tY2lye1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzU4NjdkZDtcclxufVxyXG4uZGVzY3tcclxuICBjb2xvcjogZ3JleTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4ucmVta3N7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxuXHJcbn1cclxuLmt0LWJhZGdlLmt0LWJhZGdlLS1pbmxpbmUge1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAwLjE1cmVtIDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbi5iYWRnZS1pbWcge1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDJweCAwO1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcbi5tYXQtaWNvbi5tYXQtcHJpbWFyeSB7XHJcbiAgY29sb3I6ICMzNjk5ZmY7XHJcbn1cclxubWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5jdXJzb3ItcG9pbnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dD4ubWF0LWljb24tYnV0dG9uIHtcclxuICBsaW5lLWhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zaWRlSW5mb2JhciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggOXB4IC0zcHggcmdiKDAgMCAwIC8gNzUlKTtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAvKiBwYWRkaW5nLXRvcDogNjBweDsgKi9cclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5rdC1wb3J0bGV0X19oZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmNsb3NlYnRuIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWljb24tY2lyIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICM1ODY3ZGQ7XHJcbn1cclxuXHJcbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgI2RlZGVkZTtcclxuICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuXHJcbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbS5kYXJrIHtcclxuICBib3JkZXItYm90dG9tOiAwLjA3cmVtIGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcblxyXG4vKiAua3QtaW5ib3hfX2RhdGV0aW1le1xyXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG59ICovXHJcblxyXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW0gLmt0LXdpZGdldDFfX2luZm8gLmt0LXdpZGdldDFfX3RpdGxlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLnRpdGxlLXNpZGViYXIge1xyXG4gIHdpZHRoOiAyNzBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnNpZGUtYmFyLWJveCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaWRlLWJhci1ib3ggbGkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5zaWRlLWJhci1ib3ggbGk6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZVxyXG59XHJcblxyXG4uY3VzdG9tLXRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4uY3VzdG9tLXRleHRhcmVhOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4oCiIFwiO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xyXG59XHJcblxyXG4uYW5ndWxhci1lZGl0b3ItdGV4dGFyZWEge1xyXG4gIG1heC1oZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7IFxyXG59XHJcbiBcclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICM4ODg7IFxyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzU1NTsgXHJcbn1cclxuLnNjcm9sbHkge1xyXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5tZWV0LWNhcmQge1xyXG4gIGhlaWdodDogOTd2aDtcclxufVxyXG4uY3N0bS1zd2Qge1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggN3B4ICM4ZDhkOGQ1MjtcclxufVxyXG5zcGFuLnN0YXR1c2ljbiB7XHJcbiAgcmlnaHQ6IDJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0cHg7XHJcbn1cclxuLmt0LXRpbWVyIHNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzI3ODZmYjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRmMGZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5rdC10aW1lciBzbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbnNwYW4ua3QtZHQtY250LXZpZXcge1xyXG4gIGNvbG9yOiAjMjc4NmZiO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB3aWR0aDogMjZweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLm5vdGUtdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbnNwYW4udGltZS1wbGF5LWJ0biBpIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTJweDtcclxufXNwYW4udGltZS1wbGF5LWJ0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiBcclxufVxyXG4uYXN0LWt0LWR3IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA0cHg7XHJcbn1cclxuLmFkbWluLWNoZWNrIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmFkbWluLWNoZWNrIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmFkbWluLWNoZWNrIHNwYW4ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuc3Bhbi5hZG1pbi1jaGVjay1zdmcge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0ycHg7XHJcbn1cclxuLmFuZ3VsYXItZWRpdG9yLXRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDEzNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5vdGUtdGV4dCB7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmt0LW11bHR5LXVzZXItZHcuc2hvdyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNmb3JtOiB1bnNldCAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app__LayoutDashboard_meeting-report_meeting-report_component_ts.js.map