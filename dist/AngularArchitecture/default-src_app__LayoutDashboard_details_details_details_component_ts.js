"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["default-src_app__LayoutDashboard_details_details_details_component_ts"],{

/***/ 61446:
/*!***********************************************************************!*\
  !*** ./src/app/_LayoutDashboard/details/details/details.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsComponent": () => (/* binding */ DetailsComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _Services_project_more_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_Services/project-more-details.service */ 59342);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ 77585);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);







const _c0 = function (a0, a1, a2) { return { "Core_task": a0, "Secondary_task": a1, "Todo_task": a2 }; };
function DetailsComponent_div_270_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](2, _c0, ctx_r0.projectInformation.projectType === "Core Tasks", ctx_r0.projectInformation.projectType === "Secondary Tasks", ctx_r0.projectInformation.projectType === "To do List"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.projectInformation && ctx_r0.projectInformation.projectType, " ");
} }
const _c1 = function (a0, a1, a2, a3) { return { "Delay": a0, "bg-inprogress": a1, "bg-done": a2, "bg-rejected": a3 }; };
function DetailsComponent_div_294_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](2, _c1, ctx_r1.projectInformation.projectStatus === "Delay", ctx_r1.projectInformation.projectStatus === "InProcess", ctx_r1.projectInformation.projectStatus === "Completed", ctx_r1.projectInformation.projectStatus === "New Project Rejected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.projectInformation && ctx_r1.projectInformation.projectStatus, " ");
} }
function DetailsComponent_div_319_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 178)(2, "div", 179)(3, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMapInterpolate1"]("width: ", ctx_r2.projectInformation.TOTAL_ACTIONS_IN_PROCESS / ctx_r2.projectInformation.TOTAL_ACTIONS * 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMapInterpolate1"]("width: ", ctx_r2.projectInformation.TOTAL_ACTIONS_IN_DELAY / ctx_r2.projectInformation.TOTAL_ACTIONS * 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMapInterpolate1"]("width: ", ctx_r2.projectInformation.TOTAL_ACTIONS_DONE / ctx_r2.projectInformation.TOTAL_ACTIONS * 100, "%");
} }
function DetailsComponent_div_320_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 181)(1, "div", 182)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " in Process ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.projectInformation.TOTAL_ACTIONS_IN_PROCESS);
} }
function DetailsComponent_div_321_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 183)(1, "div", 182)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Delay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.projectInformation.TOTAL_ACTIONS_IN_DELAY);
} }
function DetailsComponent_div_322_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 183)(1, "div", 182)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Done ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.projectInformation.TOTAL_ACTIONS_DONE);
} }
function DetailsComponent_div_323_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 184)(1, "div", 185)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r6.projectInformation.TOTAL_ACTIONS_DONE, "/", ctx_r6.projectInformation.TOTAL_ACTIONS, "");
} }
function DetailsComponent_div_324_div_25_ng_container_1_div_1_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_324_div_25_ng_container_1_div_1_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Delay ", action_r16 && action_r16.actiondelay, " days");
} }
function DetailsComponent_div_324_div_25_ng_container_1_div_1_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "In Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_324_div_25_ng_container_1_div_1_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_324_div_25_ng_container_1_div_1_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](action_r16 && action_r16.status);
} }
const _c2 = function (a0) { return { "Active": a0 }; };
function DetailsComponent_div_324_div_25_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailsComponent_div_324_div_25_ng_container_1_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const i_r17 = restoredCtx.index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.showActionDetails(i_r17)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 41)(2, "div", 196)(3, "div", 197)(4, "div", 198)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 31)(8, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 199)(13, "div", 200)(14, "div", 201)(15, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 203)(18, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, DetailsComponent_div_324_div_25_ng_container_1_div_1_span_19_Template, 2, 0, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, DetailsComponent_div_324_div_25_ng_container_1_div_1_span_20_Template, 2, 1, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, DetailsComponent_div_324_div_25_ng_container_1_div_1_span_21_Template, 2, 0, "span", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, DetailsComponent_div_324_div_25_ng_container_1_div_1_span_22_Template, 2, 0, "span", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, DetailsComponent_div_324_div_25_ng_container_1_div_1_span_23_Template, 2, 1, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const action_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c2, ctx_r15.currentActionView === i_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](action_r16 && action_r16.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" By ", action_r16 && action_r16.responsible, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", action_r16 && action_r16.deadline, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Action ", action_r16 && action_r16.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", action_r16.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "New Project Rejected");
} }
function DetailsComponent_div_324_div_25_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailsComponent_div_324_div_25_ng_container_1_div_1_Template, 24, 12, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r12.projectInformation.projectActions);
} }
function DetailsComponent_div_324_div_25_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "no actions available");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_324_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailsComponent_div_324_div_25_ng_container_1_Template, 2, 1, "ng-container", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DetailsComponent_div_324_div_25_ng_template_2_Template, 2, 0, "ng-template", null, 193, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r11.projectInformation.projectActions.length)("ngIfElse", _r13);
} }
function DetailsComponent_div_324_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 186)(1, "div", 96)(2, "div", 82)(3, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "svg", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "g", 85)(6, "g", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "g", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "defs", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "g", 104)(10, "g", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "path", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "g", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "path", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "g", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "path", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "g", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "path", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Project Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 98)(20, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailsComponent_div_324_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r27.addNewAction()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "svg", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "path", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Add Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, DetailsComponent_div_324_div_25_Template, 4, 2, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.projectInformation);
} }
function DetailsComponent_ng_container_392_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98)(1, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r30.projectInformation && ctx_r30.projectInformation.projectDelayInDays, " days delay ");
} }
function DetailsComponent_ng_container_392_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98)(1, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function DetailsComponent_ng_container_392_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98)(1, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " In Process ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function DetailsComponent_ng_container_392_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98)(1, "div", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Rejected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function DetailsComponent_ng_container_392_div_7_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98)(1, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r34.projectInformation && ctx_r34.projectInformation.projectStatus, " ");
} }
function DetailsComponent_ng_container_392_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailsComponent_ng_container_392_div_7_div_1_Template, 3, 1, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DetailsComponent_ng_container_392_div_7_div_2_Template, 3, 0, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DetailsComponent_ng_container_392_div_7_div_3_Template, 3, 0, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DetailsComponent_ng_container_392_div_7_div_4_Template, 3, 0, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DetailsComponent_ng_container_392_div_7_div_5_Template, 3, 1, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx_r29.projectInformation.projectStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "New Project Rejected");
} }
function DetailsComponent_ng_container_392_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 214)(2, "div", 215)(3, "div", 96)(4, "div", 97)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DetailsComponent_ng_container_392_div_7_Template, 6, 5, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 217)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 218)(12, "div", 115)(13, "div", 116)(14, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "svg", 220)(16, "g", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "path", 222)(18, "path", 223)(19, "path", 224)(20, "path", 225)(21, "path", 226)(22, "path", 227)(23, "path", 228)(24, "path", 229)(25, "path", 230)(26, "path", 231)(27, "path", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Owner ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 115)(32, "div", 116)(33, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "svg", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "path", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Responsible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 115)(40, "div", 116)(41, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "svg", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "path", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 115)(48, "div", 116)(49, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "svg", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "path", 240)(52, "path", 241)(53, "path", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, " Cost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 115)(58, "div", 116)(59, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "svg", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "path", 244)(62, "path", 245)(63, "path", 246)(64, "path", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, " Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 248)(67, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 249)(70, "div", 115)(71, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, " Starting date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 115)(76, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, " Ending date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 115)(81, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, " Duration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "div", 115)(86, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, " Allocated ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 115)(91, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, " RACIS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 117)(94, "div", 250)(95, "div", 251)(96, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "img", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](99, "img", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](101, "img", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "a", 257)(103, "span", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "+42");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 41)(107, "div", 260)(108, "div", 261)(109, "div", 58)(110, "div", 59)(111, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, "Recent activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "div", 60)(114, "div", 61)(115, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116, "17 Jul ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](117, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "08:42 AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](121, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "div", 66)(123, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, "Project Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, " Outlines keep you honest. And keep structure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "div", 61)(127, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, "22 Jul ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](129, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, "11:42 PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](133, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "div", 66)(135, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, "Sub task 01");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, " Rebrand strategy planning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "div", 61)(139, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, "02 Aug ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](141, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143, "10:42 PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](145, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "div", 66)(147, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](148, "Sub task 02");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149, " Navigation optimization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "div", 61)(151, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](152, "08 Aug ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](153, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](155, "01:42 AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](157, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "div", 66)(159, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](160, "Sub task 03");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](161, " Indulging in poorly driving and keep structure keep great ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "div", 260)(163, "div", 57)(164, "div", 58)(165, "div", 59)(166, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](167, "Statistics");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](168, "div", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.projectInformation && ctx_r8.projectInformation.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.projectInformation);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.projectInformation && ctx_r8.projectInformation.projectDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.projectInformation && ctx_r8.projectInformation.projectOwner, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.projectInformation && ctx_r8.projectInformation.projectResponsible, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.projectInformation && ctx_r8.projectInformation.projectCategory, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.projectInformation && ctx_r8.projectInformation.projectCost, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.projectInformation && ctx_r8.projectInformation.projectClient, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.projectInformation && ctx_r8.projectInformation.projectStartDate.getDate() + "-" + ctx_r8.projectInformation.projectStartDate.getMonth() + "-" + ctx_r8.projectInformation.projectStartDate.getFullYear(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.projectInformation && ctx_r8.projectInformation.projectEndDate.getDate() + "-" + ctx_r8.projectInformation.projectEndDate.getMonth() + "-" + ctx_r8.projectInformation.projectEndDate.getFullYear(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.projectInformation && ctx_r8.projectInformation.projectDuration, " days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.projectInformation && ctx_r8.projectInformation.projectAllocatedHours, " hrs ");
} }
function DetailsComponent_ng_template_393_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 272)(1, "div", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 275)(4, "path", 276)(5, "path", 277)(6, "path", 278)(7, "path", 279)(8, "path", 280)(9, "path", 281)(10, "path", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Your 2 days delay in the projrct will affect the projrect flow. take extra effect to catch up on the deadline. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function DetailsComponent_ng_template_393_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailsComponent_ng_template_393_ng_container_0_div_1_Template, 13, 0, "div", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r35.projectInformation.projectActions[ctx_r35.currentActionView].status === "Delay");
} }
function DetailsComponent_ng_template_393_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98)(1, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r36.projectInformation && ctx_r36.projectInformation.projectActions[ctx_r36.currentActionView].actiondelay, " days delay ");
} }
function DetailsComponent_ng_template_393_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98)(1, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function DetailsComponent_ng_template_393_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98)(1, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " In Progress ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function DetailsComponent_ng_template_393_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98)(1, "div", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Rejected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function DetailsComponent_ng_template_393_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98)(1, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r40.projectInformation.projectActions[ctx_r40.currentActionView].status, " ");
} }
function DetailsComponent_ng_template_393_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DetailsComponent_ng_template_393_ng_container_0_Template, 2, 1, "ng-container", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 214)(2, "div", 82)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 215)(6, "div", 96)(7, "div", 97)(8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, DetailsComponent_ng_template_393_div_11_Template, 3, 1, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, DetailsComponent_ng_template_393_div_12_Template, 3, 0, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, DetailsComponent_ng_template_393_div_13_Template, 3, 0, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, DetailsComponent_ng_template_393_div_14_Template, 3, 0, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, DetailsComponent_ng_template_393_div_15_Template, 3, 1, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 217)(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 218)(20, "div", 115)(21, "div", 116)(22, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "svg", 220)(24, "g", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "path", 222)(26, "path", 223)(27, "path", 224)(28, "path", 225)(29, "path", 226)(30, "path", 227)(31, "path", 228)(32, "path", 229)(33, "path", 230)(34, "path", 231)(35, "path", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Owner ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 115)(40, "div", 116)(41, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "svg", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "path", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " Responsible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 115)(48, "div", 116)(49, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "svg", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "path", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 115)(56, "div", 116)(57, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "svg", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "path", 240)(60, "path", 241)(61, "path", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, " Cost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, " 120.00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 115)(66, "div", 116)(67, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "svg", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "path", 244)(70, "path", 245)(71, "path", 246)(72, "path", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, " Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 248)(75, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 249)(78, "div", 115)(79, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, " Starting date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 115)(84, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, " Ending date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 115)(89, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, " Duration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 115)(94, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, " Allocated ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 115)(99, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, " RACIS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 117)(102, "div", 250)(103, "div", 251)(104, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "img", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](107, "img", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](109, "img", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "a", 257)(111, "span", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, "+42");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.projectInformation);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Action ", ctx_r10.projectInformation && ctx_r10.projectInformation.projectActions[ctx_r10.currentActionView].id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r10.projectInformation && ctx_r10.projectInformation.projectActions[ctx_r10.currentActionView].action);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx_r10.projectInformation.projectActions[ctx_r10.currentActionView].status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r10.projectInformation && ctx_r10.projectInformation.projectActions[ctx_r10.currentActionView].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.projectInformation && ctx_r10.projectInformation.projectActions[ctx_r10.currentActionView].owner, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.projectInformation && ctx_r10.projectInformation.projectActions[ctx_r10.currentActionView].responsible, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.projectInformation && ctx_r10.projectInformation.projectCategory, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.projectInformation && ctx_r10.projectInformation.projectClient, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.projectInformation && ctx_r10.projectInformation.projectActions[ctx_r10.currentActionView].startDate.getDate() + "-" + ctx_r10.projectInformation.projectActions[ctx_r10.currentActionView].startDate.getMonth() + "-" + ctx_r10.projectInformation.projectActions[ctx_r10.currentActionView].startDate.getFullYear(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.projectInformation && ctx_r10.projectInformation.projectActions[ctx_r10.currentActionView].endDate.getDate() + "-" + ctx_r10.projectInformation.projectActions[ctx_r10.currentActionView].endDate.getMonth() + "-" + ctx_r10.projectInformation.projectActions[ctx_r10.currentActionView].endDate.getFullYear(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.projectInformation && ctx_r10.projectInformation.projectActions[ctx_r10.currentActionView].duration, " days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.projectInformation && ctx_r10.projectInformation.projectActions[ctx_r10.currentActionView].allocated, " hrs ");
} }
class ProjectAction {
    constructor(id, action, description, owner, responsible, client, status, deadline, actiondelay, category, startd, endd) {
        this.id = id;
        this.action = action;
        this.description = description;
        this.client = client;
        this.status = status;
        this.owner = owner;
        this.responsible = responsible;
        const d = new Date(deadline);
        this.deadline = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
        this.actiondelay = actiondelay;
        this.category = category;
        this.startDate = new Date(startd);
        this.endDate = new Date(endd);
        this.duration = Math.abs(moment__WEBPACK_IMPORTED_MODULE_0__(startd).diff(moment__WEBPACK_IMPORTED_MODULE_0__(endd), 'days'));
        this.allocated = Math.abs(moment__WEBPACK_IMPORTED_MODULE_0__(startd).diff(moment__WEBPACK_IMPORTED_MODULE_0__(endd), 'hours'));
    }
}
class ProjectInformation {
    constructor(pName, pDes, pTy, pC, pId, pstatus, startd, endd, allocatedH, delayd, client, owner, cost, category, responsible, prjact) {
        this.TOTAL_ACTIONS_IN_PROCESS = 0;
        this.TOTAL_ACTIONS_IN_DELAY = 0;
        this.TOTAL_ACTIONS_DONE = 0;
        this.TOTAL_ACTIONS = 0;
        this.projectName = pName;
        this.projectDescription = pDes;
        this.projectType = pTy;
        this.projectCode = pC;
        this.projectId = pId;
        this.projectStatus = pstatus;
        this.projectStartDate = new Date(startd);
        this.projectEndDate = new Date(endd);
        this.projectAllocatedHours = allocatedH;
        this.projectDuration = Math.abs(moment__WEBPACK_IMPORTED_MODULE_0__(startd).diff(moment__WEBPACK_IMPORTED_MODULE_0__(endd), "days"));
        this.projectDelayInDays = delayd;
        this.projectActions = prjact;
        this.projectClient = client;
        this.projectOwner = owner;
        this.projectCost = cost;
        this.projectCategory = category;
        this.projectResponsible = responsible;
        this.projectActions.forEach(action => {
            if (action.status === 'Completed')
                this.TOTAL_ACTIONS_DONE += 1;
            else if (action.status === 'Delay')
                this.TOTAL_ACTIONS_IN_DELAY += 1;
            else if (action.status === 'InProcess')
                this.TOTAL_ACTIONS_IN_PROCESS += 1;
        });
        this.TOTAL_ACTIONS = this.TOTAL_ACTIONS_DONE + this.TOTAL_ACTIONS_IN_DELAY + this.TOTAL_ACTIONS_IN_PROCESS;
    }
}
class DetailsComponent {
    constructor(projectMoreDetailsService, router, activatedRoute, bsService) {
        this.projectMoreDetailsService = projectMoreDetailsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.bsService = bsService;
    }
    charts() { }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => this.URL_ProjectCode = params.get('ProjectCode')); // GET THE PROJECT CODE AND SET it.
        this.getProjectDetails(this.URL_ProjectCode); // get all project details from the api.
        this.showActionDetails(undefined); // initially show the Project details
        // this.router.navigate(["./Details", this.URL_ProjectCode]);
    }
    ngAfterViewInit() {
        this.drawStatistics();
    }
    drawStatistics() {
        //  chart js ---------------------
        new FusionCharts({
            type: "radialbar",
            width: "100%",
            height: "100%",
            renderAt: "chart-container",
            dataSource: {
                chart: {
                    theme: "fusion",
                    // caption: "7Hr 32M",
                    // subCaption: "January 2021",
                    showLegend: 1,
                    innerRadius: 30,
                    outerRadius: 105,
                    showLabels: 1,
                    labelText: "$label"
                },
                data: [
                    {
                        label: "Design",
                        value: 94.09,
                        color: "#5867dd" //Custom Color
                    },
                    {
                        label: "Develoment",
                        value: 59.89,
                        color: "#b2beff" //Custom Color
                    },
                    {
                        label: "Testing",
                        value: 91.53,
                        color: "#985eff" //Custom Color
                    }
                ]
            }
        }).render();
        // chart js end ----------------
        var lang = {
            "javascript": "70%",
        };
        var multiply = 4;
        $.each(lang, function (language, pourcent) {
            var delay = 700;
            setTimeout(function () {
                $('#' + language + '-pourcent').html(pourcent);
            }, delay * multiply);
            multiply++;
        });
    }
    getProjectDetails(prjCode) {
        this.projectMoreDetailsService.getProjectMoreDetails(prjCode).subscribe(res => {
            console.log("=====check this=======>", res);
            const { Project_Name, Project_Type, Project_Description, Project_Code, id } = JSON.parse(res[0].ProjectName_Json)[0];
            const { StartDate, EndDate, AllocatedHours, Status, Delaydays } = JSON.parse(res[0].ProjectStates_Json)[0];
            const { Client_Name, Owner, Project_Cost, ReportType, Responsible } = JSON.parse(res[0].ProjectInfo_Json)[0];
            console.log('action json==>', JSON.parse(res[0].Action_Json));
            const actionjsonobj = JSON.parse(res[0].Action_Json);
            const prjactions = actionjsonobj ? actionjsonobj.map(action => new ProjectAction(action.IndexId, action.Project_Name, action.Project_Description, action.Subtask_Owner, action.Subtask_Res, action.Client, action.Status, action.EndDate, action.Delaydays, action.Category, action.StartDate, action.EndDate)) : []; // if there is no actions in the project then assign an empty array .
            this.projectInformation = new ProjectInformation(Project_Name, Project_Description, Project_Type, Project_Code, id, Status, StartDate, EndDate, AllocatedHours, Delaydays, Client_Name, Owner, Project_Cost, ReportType, Responsible, prjactions);
            // also setting projectcode, projectname in BsService.
            this.bsService.SetNewPojectCode(this.projectInformation.projectCode);
            this.bsService.SetNewPojectName(this.projectInformation.projectName);
            console.log("projectInformation:", this.projectInformation);
        });
    }
    showActionDetails(index) {
        if (index !== undefined)
            this.currentActionView = index;
    }
    //  addNewAction(){
    //  }
    addNewAction() {
        if (this.projectInformation.projectStatus === 'Completed') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: "Wait This Project is Already Completed",
                text: 'Do you want to reopen this Project?',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No'
            })
                .then((option) => {
                if (option.isConfirmed) { // user said yes to add new action into a project which is already completed.
                    this.showSideBar();
                }
                else {
                    // when the user said no 
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Cancelled', 'Action not created', 'error');
                }
            })
                .catch(e => console.log(e));
        }
        else {
            // if projectStatus is 'Delay' ...
            this.showSideBar();
        }
    }
    showSideBar() {
        this.router.navigate(["./Details", this.URL_ProjectCode, "ActionToProject", "4"]);
        document.getElementById("mysideInfobar1").classList.add("kt-action-panel--on");
        document.getElementById("newdetails").classList.add("position-fixed");
        document.getElementById("rightbar-overlay").style.display = "block";
        $("#mysideInfobar1").scrollTop(0);
    }
    closeInfo() {
        document.getElementById("mysideInfobar1").classList.remove("kt-action-panel--on");
        document.getElementById("newdetails").classList.remove("position-fixed");
        document.getElementById("rightbar-overlay").style.display = "none";
        this.router.navigate(["./Details", this.URL_ProjectCode]);
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_Services_project_more_details_service__WEBPACK_IMPORTED_MODULE_2__.ProjectMoreDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_3__.BsServiceService)); };
DetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 398, vars: 16, consts: [["id", "newdetails", 1, "kt-container", "kt-grid__item", "kt-grid__item--fluid", "margin-height", "side_view", "mt-3", "p-3"], [1, "card", "mb-6", "mb-xl-9", "d-none"], [1, "card-body", "pt-9", "pb-0"], [1, "d-flex", "flex-wrap", "flex-sm-nowrap", "mb-6"], [1, "d-flex", "flex-center", "flex-shrink-0", "bg-light", "rounded", "w-100px", "h-100px", "w-lg-150px", "h-lg-150px", "me-7", "mb-4"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACg0lEQVR4nO1avW7bMBDWlr0gByq1gaJ5hCRAhw5ZiiAuUPQB3K0OyNSZOrVAwCVZssRAu3RxqQB9ARud00rOnowd+gbx7B8BLGhbjiooUuSYpqTcBxAGhNOR/HD3HS2eZQGmePJ0fxsR1sOEDbHNZOEHYUO1H7UvKw2o2iCYsL7xReshoq/2l0wAoY2pMe1sbDTXrAWBCeUzP9y0vdoHJqyr7BFh75e6kCIQkMkeAwEUIgCbFiutQnjfFLBLOkADKIigBVUgARiqAI0tg8g+eI0IHcQJi3qO1mktjciwj+g7JuwzRQBap7VkAtheKgEhH9F3TNhnIiArcnO0zWqPgQAKEYAhBVghq4BWDUAFqAJaCciK3Kh6VnsMBFCIAAwpwLRVAWxP7xpI5VCefbqSnuNPRvNdZ+JL/QbPksZD7V0xHrrC711+H22vrApsbp7USaUpAwJan6+NETAfYtz/dS5v7wp0iqDr+I3ZxJ2fLblmsgqo+V3hd6ck+Ld3BVoJEGM+Cz+ehzIYux68AgK0hvQC9kCAgAjgkAJ50YD62x9/ohUiQFi5S6sBb159u0jyG/goPQFuxDZYJBAgIAI4pIDzCDTgLpQ+BeqPvQw2Tf8XQPM2OdZddpucKQIu2gO5u/NlYn/04XcKAdXyNko+e/5Rdr7eJBMwb5W1qVeWVlm7cihfvjiV7eO/sRES931CC5JSYJGhBPEuwYzivy9A5SFgzJcxf+EJcFP8ptkBAQIigEMKrAKgAQJEkEMVcKAMSjgIOXAUlstMhVUfqXNTBYAAp2gR4MwbJPI1wg0SOqFaUVRLSr42H2mR0Q3VlOQ5vqealAznvZrf652PtrRv2ioI/gGpqVHaVMedFgAAAABJRU5ErkJggg==", "alt", "image", 1, "mw-50px", "mw-lg-75px"], [1, "flex-grow-1"], [1, "d-flex", "justify-content-between", "align-items-start", "flex-wrap", "mb-2"], [1, "d-flex", "flex-column"], [1, "d-flex", "align-items-center", "mb-1"], ["href", "#", 1, "text-gray-800", "text-hover-primary", "fs-2", "fw-bold", "me-3"], [1, "badge", "badge-light-success", "me-auto"], [1, "d-flex", "flex-wrap", "fw-semibold", "mb-4", "fs-5", "text-gray-400"], [1, "d-flex", "mb-4", "align-items-center"], [1, "skills-bar-container", "mb-0"], [1, "progressbar-title"], [1, "badge", "me-auto"], ["id", "javascript-pourcent", 1, "percent"], [1, "bar-container"], ["id", "progress-javascript", 1, "progressbar", "progresspurple"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#kt_modal_users_search", 1, "btn", "btn-sm", "btn-bg-light", "btn-active-color-primary", "me-3"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#kt_modal_new_target", 1, "btn", "btn-sm", "btn-primary", "me-3"], [1, "d-flex", "flex-wrap"], [1, "dtl-bg-light-v", "border", "border-gray-300", "border-dashed", "rounded", "min-w-125px", "py-3", "px-4", "me-8", "mb-3"], [1, "d-flex", "align-items-center"], [1, "fs-7", "fw-stl"], [1, "fw-semi-lt", "fs-8"], [1, "wd-xv"], [1, "kt-Status"], [1, "kt-status-view"], [1, "kt-un-apr"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "fa", "fa-circle", "text-danger-glow", "blink"], [1, "separator"], [1, "nav", "nav-stretch", "nav-line-tabs", "nav-line-tabs-2x", "border-transparent", "fs-5", "fw-bold"], [1, "nav-item"], ["data-toggle", "tab", "href", "#Overview", 1, "nav-link", "text-active-primary", "py-5", "me-6", "active"], ["data-toggle", "tab", "href", "#Actions", 1, "nav-link", "text-active-primary", "py-5", "me-6"], [1, "nav-link", "text-active-primary", "py-5", "me-6"], [1, "tab-content", "card", "profile-tab", "mt-3", "d-none"], ["id", "Overview", 1, "card-body", "pt-9", "card1", "active"], [1, "row"], [1, "col-lg-3"], [1, "kt-cl-view"], [1, "kt-dl-icon"], [1, "kt-svg-ic"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-briefcase"], ["d", "M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"], [1, "kt-dl-info"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "fill", "currentColor", "viewBox", "0 0 66 60"], ["fill", "#9b59b6", "d", "M312,312 L312,305.995826 C312,302.684502 314.679642,300 317.990053,300 L334.009947,300 C337.3168,300 340,302.690579 340,305.995826 L340,312 L350.004174,312 C353.317266,312 356,314.678966 356,317.994844 L356,328.005156 C356,329.109726 355.104569,330.005156 354,330.005156 C352.895431,330.005156 352,329.109726 352,328.005156 L352,317.994844 C352,316.889365 351.109385,316 350.004174,316 L344,316 L344,332 C344,333.104569 343.104569,334 342,334 C340.895431,334 340,333.104569 340,332 L340,316 L312,316 L312,350 L336,350 C337.104569,350 338,350.895431 338,352 C338,353.104569 337.104569,354 336,354 L301.995826,354 C298.682734,354 296,351.321034 296,348.005156 L296,317.994844 C296,314.685886 298.690043,312 301.995826,312 L312,312 Z M308,316 L301.995826,316 C300.897799,316 300,316.896411 300,317.994844 L300,348.005156 C300,349.110635 300.890615,350 301.995826,350 L308,350 L308,316 Z M316,312 L336,312 L336,305.995826 C336,304.897263 335.105198,304 334.009947,304 L317.990053,304 C316.890405,304 316,304.89202 316,305.995826 L316,312 Z M362,362 C362,363.104569 361.104569,364 360,364 C358.895431,364 358,363.104569 358,362 L358,360.003925 C358,357.65552 356.443235,356 354.5,356 L348.003351,356 C345.604886,356 344,357.604253 344,360 L344,362 C344,363.104569 343.104569,364 342,364 C340.895431,364 340,363.104569 340,362 L340,360 C340,355.394761 343.3961,352 348.003351,352 L354.5,352 C358.709246,352 362,355.499507 362,360.003925 L362,362 Z M351,349 C347.134007,349 344,345.865993 344,342 C344,338.134007 347.134007,335 351,335 C354.865993,335 358,338.134007 358,342 C358,345.865993 354.865993,349 351,349 Z M351,345 C352.656854,345 354,343.656854 354,342 C354,340.343146 352.656854,339 351,339 C349.343146,339 348,340.343146 348,342 C348,343.656854 349.343146,345 351,345 Z", "transform", "translate(-296 -300)"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "fill", "currentColor", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 96 95", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 96 96"], ["d", "M93.362,70.897c-0.471-1.651-2.838-6.811-13.527-3.904l-18.895,5.14c-0.962,0.261-1.916,0.371-2.873,0.33  c0.479-0.436,0.904-0.964,1.261-1.583c1.663-2.881,0.686-6.615-2.224-8.502c-0.056-0.036-0.114-0.068-0.173-0.097  c-4.473-2.107-8.662-5.026-12.027-7.372c-1.168-0.814-2.272-1.584-3.221-2.199c-3.813-2.474-8.038-1.807-11.667-0.829l-14.074,3.794  l-0.471-1.818c-0.547-2.116-2.714-3.39-4.829-2.844L5.36,52.381c-2.115,0.548-3.391,2.714-2.843,4.829l7.099,27.435  c0.462,1.784,2.074,2.97,3.837,2.97c0.328,0,0.66-0.041,0.992-0.127l5.281-1.367c1.022-0.265,1.881-0.913,2.419-1.827  s0.689-1.98,0.424-3.002l-0.881-3.406l3.242-0.869l19.442,11.225c2.104,1.215,4.284,1.824,6.516,1.824  c1.246,0,2.508-0.19,3.782-0.57l34.556-10.316C92.36,78.245,94.332,74.297,93.362,70.897z M18.989,83.273l-5.281,1.367  c-0.544,0.141-1.102-0.187-1.243-0.732L5.365,56.473c-0.139-0.535,0.197-1.105,0.732-1.243l5.281-1.367  c0.082-0.021,0.165-0.031,0.246-0.031c0.453,0,0.879,0.31,0.997,0.763c0,0,0,0,0,0l7.099,27.435  C19.859,82.566,19.524,83.135,18.989,83.273z M88.383,76.361L53.827,86.677c-2.749,0.82-5.435,0.49-7.984-0.982l-19.97-11.53  c-0.338-0.195-0.74-0.248-1.116-0.147l-3.806,1.02l-4.273-16.513l14.103-3.802c3.154-0.85,6.464-1.384,9.3,0.456  c0.908,0.589,1.942,1.31,3.14,2.144c3.432,2.392,7.698,5.366,12.358,7.574c1.563,1.063,2.081,2.987,1.2,4.512  c-1.144,1.981-3.004,1.766-4.383,1.22c-2.421-1.199-8.85-5.037-9.946-5.67c-0.704-0.406-1.604-0.165-2.01,0.539  c-0.406,0.704-0.165,1.604,0.539,2.01c1.077,0.622,7.616,4.525,10.144,5.775c0.01,0.005,0.021,0.01,0.031,0.015  c0.626,0.309,1.273,0.614,1.945,0.915c2.903,1.298,5.721,1.546,8.613,0.76l18.896-5.14c5.457-1.485,9.168-0.785,9.925,1.871  C91.055,73.537,89.97,75.887,88.383,76.361z M11.342,58.302c-0.109,0.93-0.951,1.595-1.881,1.486  c-0.93-0.109-1.595-0.951-1.486-1.881c0.109-0.93,0.951-1.595,1.881-1.486C10.785,56.53,11.451,57.372,11.342,58.302z   M38.043,38.233l3.59,1.382c0.524,1.917,1.286,3.755,2.273,5.482l-1.562,3.518c-0.247,0.556-0.126,1.207,0.304,1.638l4.966,4.965  c0.43,0.43,1.081,0.551,1.638,0.304l3.519-1.563c1.727,0.987,3.565,1.749,5.48,2.272l1.382,3.591  c0.219,0.568,0.764,0.943,1.373,0.943h7.022c0.609,0,1.154-0.375,1.373-0.943l1.382-3.59c1.916-0.524,3.754-1.286,5.482-2.273  l3.518,1.562c0.556,0.247,1.207,0.126,1.638-0.304l4.965-4.966c0.43-0.43,0.551-1.081,0.304-1.637l-1.563-3.519  c0.987-1.728,1.749-3.565,2.272-5.48l3.591-1.382c0.568-0.219,0.943-0.764,0.943-1.373v-7.022c0-0.609-0.375-1.154-0.943-1.373  l-3.59-1.381c-0.524-1.916-1.286-3.754-2.273-5.482l1.562-3.517c0.247-0.556,0.126-1.207-0.304-1.638l-4.966-4.966  c-0.43-0.43-1.081-0.551-1.638-0.304l-3.519,1.563c-1.728-0.987-3.565-1.749-5.48-2.272l-1.382-3.591  c-0.219-0.568-0.764-0.943-1.373-0.943h-7.022c-0.609,0-1.154,0.375-1.373,0.943l-1.382,3.591c-1.915,0.523-3.753,1.285-5.48,2.272  l-3.519-1.563c-0.556-0.247-1.207-0.126-1.638,0.304l-4.965,4.966c-0.43,0.43-0.551,1.081-0.304,1.637l1.563,3.519  c-0.987,1.728-1.749,3.565-2.272,5.481l-3.59,1.382c-0.568,0.219-0.943,0.764-0.943,1.373v7.022  C37.1,37.468,37.474,38.014,38.043,38.233z M40.042,30.848l3.356-1.292c0.453-0.174,0.791-0.561,0.903-1.032  c0.509-2.139,1.353-4.176,2.51-6.053c0.254-0.413,0.289-0.925,0.092-1.369l-1.461-3.29l3.537-3.537l3.29,1.461  c0.444,0.197,0.955,0.163,1.369-0.092c1.878-1.156,3.914-2.001,6.053-2.51c0.472-0.112,0.858-0.45,1.032-0.903l1.292-3.357h5.002  l1.292,3.357c0.174,0.453,0.561,0.79,1.032,0.903c2.139,0.509,4.175,1.353,6.053,2.51c0.413,0.254,0.925,0.288,1.369,0.092  l3.29-1.461l3.537,3.537L82.128,21.1c-0.197,0.443-0.163,0.955,0.092,1.369c1.156,1.878,2.001,3.915,2.51,6.054  c0.112,0.472,0.45,0.858,0.903,1.033l3.356,1.292v5.002l-3.357,1.292c-0.453,0.174-0.791,0.561-0.903,1.033  c-0.509,2.138-1.353,4.175-2.509,6.053c-0.254,0.413-0.289,0.925-0.092,1.369l1.461,3.29l-3.537,3.537l-3.289-1.461  c-0.443-0.197-0.956-0.163-1.369,0.092c-1.878,1.156-3.914,2.001-6.054,2.51c-0.472,0.112-0.858,0.45-1.032,0.903l-1.292,3.355  h-5.002l-1.292-3.357c-0.174-0.453-0.56-0.79-1.032-0.903c-2.139-0.509-4.175-1.353-6.053-2.51  c-0.413-0.254-0.925-0.289-1.369-0.092l-3.29,1.461l-3.537-3.537l1.461-3.289c0.197-0.443,0.163-0.955-0.092-1.369  c-1.156-1.877-2-3.914-2.51-6.054c-0.112-0.472-0.45-0.858-0.903-1.032l-3.356-1.292V30.848z M64.515,47.234  c7.656,0,13.885-6.229,13.885-13.885s-6.229-13.885-13.885-13.885c-7.656,0-13.885,6.229-13.885,13.885S56.859,47.234,64.515,47.234  z M64.515,22.406c6.034,0,10.943,4.909,10.943,10.943s-4.909,10.943-10.943,10.943c-6.034,0-10.943-4.909-10.943-10.943  S58.482,22.406,64.515,22.406z M62.889,40.364c0.885,0,1.717-0.344,2.342-0.97c1.55-1.55,3.112-3.135,4.623-4.667  c0.906-0.919,1.811-1.837,2.72-2.754c1.283-1.295,1.276-3.393-0.016-4.677c-0.625-0.621-1.453-0.963-2.334-0.963  c-0.004,0-0.009,0-0.013,0c-0.884,0.003-1.714,0.351-2.336,0.979l-4.996,5.046l-1.728-1.728c-0.626-0.626-1.457-0.97-2.342-0.97  c-0.885,0-1.717,0.344-2.342,0.97c-0.625,0.626-0.97,1.457-0.97,2.342c0,0.885,0.345,1.717,0.97,2.342l4.08,4.08  C61.172,40.019,62.004,40.364,62.889,40.364z M58.439,32.972c0-0.07,0.019-0.172,0.108-0.262c0.072-0.072,0.167-0.108,0.262-0.108  c0.095,0,0.19,0.036,0.262,0.108l2.774,2.774c0.276,0.276,0.65,0.431,1.04,0.431c0.001,0,0.002,0,0.004,0  c0.391-0.001,0.766-0.158,1.042-0.436l6.036-6.097c0.087-0.088,0.187-0.107,0.256-0.107c0,0,0.001,0,0.002,0  c0.07,0,0.171,0.019,0.259,0.107c0.143,0.142,0.143,0.375,0,0.52c-0.91,0.918-1.817,1.839-2.725,2.759  c-1.507,1.529-3.066,3.11-4.609,4.652c-0.09,0.09-0.192,0.108-0.262,0.108s-0.172-0.019-0.262-0.108l-4.08-4.08  C58.458,33.144,58.439,33.042,58.439,32.972z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "fill", "currentColor", "version", "1.1", "viewBox", "0 0 30 30", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 30 30"], ["d", "M13,14c0.272,0,0.539-0.111,0.731-0.318c0.275-0.295,0.346-0.727,0.18-1.095l-4.983-11C8.815,1.34,8.606,1.148,8.351,1.058  C8.094,0.966,7.812,0.984,7.568,1.106C4.505,2.642,2.13,5.379,1.051,8.615c-0.17,0.513,0.097,1.067,0.603,1.254l11,4.068  C12.767,13.979,12.884,14,13,14z M3.296,8.345c0.884-2.024,2.382-3.76,4.26-4.939l3.545,7.826L3.296,8.345z"], ["d", "M16,3c-1.104,0-2.23,0.151-3.347,0.45c-0.534,0.143-0.851,0.69-0.708,1.224c0.143,0.534,0.696,0.854,1.224,0.708  C14.118,5.129,15.07,5,16,5c6.065,0,11,4.935,11,11s-4.935,11-11,11S5,22.065,5,16c0-0.992,0.146-2.008,0.437-3.017  c0.152-0.531-0.154-1.085-0.685-1.237c-0.531-0.149-1.085,0.153-1.237,0.685C3.173,13.62,3,14.821,3,16c0,7.168,5.832,13,13,13  s13-5.832,13-13S23.168,3,16,3z"], [1, "col-lg-5"], [1, "kt-over-pd-in"], [1, "kt-ct-project"], [1, "kt-ct-sub-ttl"], [1, "timeline-label"], [1, "timeline-item"], [1, "timeline-label", "fw-bold", "text-gray-800", "fs-6"], [1, "kt-dt-l"], [1, "timeline-badge"], [1, "fa", "fa-genderless", "text-primary", "fs-1"], [1, "fw-mormal", "timeline-content", "text-muted", "ps-3"], [1, "kt-timeline-tl", "fw-bold", "text-gray-800", "mb-0"], [1, "fa", "fa-genderless", "text-success", "fs-1"], [1, "fa", "fa-genderless", "text-warning", "fs-1"], [1, "col-lg-4"], [1, "kt-chart-v"], [1, "card-header-ovr", "pt-7", "mb-7"], [1, "card-title", "align-items-start", "flex-column"], [1, "card-label", "fw-bold", "text-gray-800", "d-block"], [1, "text-gray-400", "mt-1", "fw-semibold", "fs-6", "d-block"], [1, "card-toolbar"], ["href", "", 1, "btn", "btn-sm", "btn-light"], ["id", "Actions", 1, "card-body", "pt-9", "card1"], [1, "card"], [1, "card-body", "p-3"], [1, "kt-info-box"], [1, "kt-info-box-tittle"], [1, "kt-title-icon"], ["width", "20px", "height", "20px", "viewBox", "0 0 48 48", "xmlns", "http://www.w3.org/2000/svg", "fill", "#ffffff", "stroke", "none"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["id", "Layer_2", "data-name", "Layer 2"], ["id", "invisible_box", "data-name", "invisible box"], ["width", "48", "height", "48", "fill", "none"], ["id", "Layer_7", "data-name", "Layer 7"], ["x", "33", "y", "4", "width", "10", "height", "40", "rx", "2"], ["x", "19", "y", "19", "width", "10", "height", "25", "rx", "2"], ["x", "5", "y", "33", "width", "10", "height", "11", "rx", "2"], [1, "kt-project-info-body", "pl-3"], [1, "d-flex", "justify-content-between"], [1, "kt-project-name"], [1, "kt-project-type"], ["class", "Kt-Pd-Status", 3, "ngClass", 4, "ngIf"], [1, "kt-project-desc"], [1, "kt-info-box", "mt-2"], ["width", "20px", "height", "20px", "viewBox", "0 0 512 512", "id", "svg2793", "version", "1.1", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "cc", "http://creativecommons.org/ns#", 0, "xmlns", "dc", "http://purl.org/dc/elements/1.1/", 0, "xmlns", "rdf", "http://www.w3.org/1999/02/22-rdf-syntax-ns#", 0, "xmlns", "serif", "http://www.serif.com/", 0, "xmlns", "svg", "http://www.w3.org/2000/svg", "fill", "#ffffff", "stroke", "#ffffff", 2, "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "2"], ["id", "defs2797"], ["id", "_09-Round-Chart", "transform", "translate(-3072,-1024)", 2, "display", "inline"], ["id", "g2606", "transform", "translate(3282.77,1327.86)"], ["d", "M 0,175.522 C -89.87,157.49 -160.117,87.247 -178.15,-2.619 h 91.441 c 6.863,19.997 18.253,38.267 33.348,53.362 C -38.267,65.838 -19.997,77.227 0,84.09 Z M 18.637,58.348 C -20.648,48.532 -51.15,18.03 -60.967,-21.255 c -1.669,-6.678 -7.669,-11.364 -14.553,-11.364 h -120.25 c -4.3,0 -8.394,1.846 -11.242,5.071 -2.847,3.222 -4.174,7.513 -3.643,11.781 7.022,56.445 33.152,109.793 73.578,150.217 40.426,40.426 93.777,66.554 150.225,73.576 0.619,0.078 1.237,0.115 1.853,0.115 3.636,0 7.173,-1.322 9.93,-3.758 C 28.154,201.536 30,197.442 30,193.141 V 72.901 C 30,66.018 25.314,60.018 18.637,58.348", "id", "path2604", 2, "fill-rule", "nonzero"], ["id", "g2610", "transform", "translate(3373.23,1327.86)"], ["d", "M 0,175.522 V 84.088 C 19.996,77.221 38.268,65.83 53.362,50.735 68.456,35.641 79.846,17.374 86.709,-2.619 h 91.44 C 160.109,87.248 89.863,157.49 0,175.522 M 195.771,-32.619 H 75.521 c -6.884,0 -12.883,4.686 -14.553,11.364 C 51.151,18.02 20.647,48.524 -18.64,58.35 -25.316,60.02 -30,66.019 -30,72.901 v 120.24 c 0,4.301 1.846,8.395 5.069,11.242 2.757,2.436 6.294,3.758 9.93,3.758 0.616,0 1.234,-0.038 1.853,-0.115 56.444,-7.022 109.793,-33.15 150.218,-73.576 40.426,-40.424 66.559,-93.772 73.585,-150.215 0.532,-4.269 -0.795,-8.56 -3.642,-11.783 -2.847,-3.225 -6.942,-5.071 -11.242,-5.071", "id", "path2608", 2, "fill-rule", "nonzero"], ["id", "g2614", "transform", "translate(3282.77,1140.29)"], ["d", "m 0,7.771 c -20.002,6.866 -38.273,18.258 -53.369,33.354 -15.094,15.093 -26.482,33.361 -33.341,53.353 h -91.44 C -160.118,4.617 -89.871,-65.629 0,-83.67 Z m 24.93,-120.305 c -3.224,-2.847 -7.508,-4.173 -11.784,-3.642 -56.444,7.026 -109.793,33.159 -150.219,73.584 -40.429,40.427 -66.561,93.775 -73.582,150.218 -0.531,4.269 0.796,8.559 3.643,11.783 2.848,3.223 6.942,5.069 11.242,5.069 h 120.25 c 6.885,0 12.885,-4.686 14.553,-11.365 C -51.159,73.837 -20.656,43.336 18.639,33.51 25.316,31.841 30,25.841 30,18.959 v -120.251 c 0,-4.3 -1.847,-8.395 -5.07,-11.242", "id", "path2612", 2, "fill-rule", "nonzero"], ["id", "g2618", "transform", "translate(3373.23,1231.74)"], ["d", "m 0,-175.115 c 89.872,18.04 160.118,88.285 178.151,178.148 H 86.71 C 79.847,-16.963 68.457,-35.232 53.362,-50.328 38.268,-65.423 19.997,-76.812 0,-83.676 Z m -18.637,117.182 c 39.286,9.816 69.788,40.318 79.605,79.603 1.669,6.678 7.669,11.363 14.553,11.363 h 120.25 c 4.3,0 8.394,-1.845 11.242,-5.069 2.847,-3.224 4.174,-7.514 3.643,-11.782 -7.021,-56.443 -33.152,-109.793 -73.578,-150.219 -40.425,-40.425 -93.776,-66.557 -150.225,-73.584 -4.258,-0.527 -8.559,0.795 -11.783,3.643 -3.223,2.846 -5.07,6.941 -5.07,11.242 v 120.25 c 0,6.884 4.686,12.884 11.363,14.553", "id", "path2616", 2, "fill-rule", "nonzero"], [1, "row", "mt-3", "align-items-center", "px-3"], [1, "col-lg-11"], [1, "col", "text-center"], [1, "kt-info-lable-v"], [1, "kt-project-sts-data"], [1, "col-lg-12", "mt-4"], ["class", "progress kt-projcect-progress bar", 4, "ngIf"], ["class", "col-lg-6 text-center mt-4", 4, "ngIf"], ["class", "col text-center mt-4", 4, "ngIf"], ["class", "col-lg-1  p-1 text-center", 4, "ngIf"], ["class", "kt-info-box pb-0 mt-2", 4, "ngIf"], [1, "col-lg-7", "pl-1"], [1, "kt-info-box", "pr-2"], [1, "kt-project-tool-bar"], [1, "d-flex", "flex-grow-1", "align-items-center", "gap_ic"], [1, "kt-inbox__icon"], ["src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png", "height", "29"], [1, "br-line"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M10.8448 8.73376C10.542 8.73376 10.1143 8.77561 9.66899 8.83659C9.46096 8.86508 9.30234 9.02371 9.27385 9.23174C9.21286 9.67703 9.17102 10.1048 9.17102 10.4075C9.17102 10.7102 9.21286 11.138 9.27385 11.5833C9.30234 11.7913 9.46096 11.9499 9.66899 11.9784C10.1143 12.0394 10.542 12.0812 10.8448 12.0812C11.1475 12.0812 11.5752 12.0394 12.0205 11.9784C12.2285 11.9499 12.3872 11.7913 12.4157 11.5833C12.4766 11.138 12.5185 10.7102 12.5185 10.4075C12.5185 10.1048 12.4766 9.67703 12.4157 9.23174C12.3872 9.02371 12.2285 8.86508 12.0205 8.83659C11.5752 8.77561 11.1475 8.73376 10.8448 8.73376ZM9.48731 7.50999C8.68398 7.62001 8.05726 8.24673 7.94725 9.05005C7.88414 9.51081 7.83203 10.0113 7.83203 10.4075C7.83203 10.8037 7.88414 11.3042 7.94725 11.7649C8.05726 12.5683 8.68398 13.195 9.48731 13.305C9.94806 13.3681 10.4485 13.4202 10.8448 13.4202C11.241 13.4202 11.7414 13.3681 12.2022 13.305C13.0055 13.195 13.6322 12.5683 13.7423 11.7649C13.8054 11.3042 13.8575 10.8037 13.8575 10.4075C13.8575 10.0113 13.8054 9.51081 13.7423 9.05005C13.6322 8.24673 13.0055 7.62001 12.2022 7.50999C11.7414 7.44689 11.241 7.39478 10.8448 7.39478C10.4485 7.39478 9.94806 7.44689 9.48731 7.50999Z", "fill", "#7784EE"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M3.48025 8.73376C3.17752 8.73376 2.74978 8.77561 2.30449 8.83659C2.09646 8.86508 1.93784 9.02371 1.90935 9.23174C1.84836 9.67703 1.80652 10.1048 1.80652 10.4075C1.80652 10.7102 1.84836 11.138 1.90935 11.5833C1.93784 11.7913 2.09646 11.9499 2.30449 11.9784C2.74978 12.0394 3.17752 12.0812 3.48025 12.0812C3.78298 12.0812 4.21072 12.0394 4.65601 11.9784C4.86404 11.9499 5.02266 11.7913 5.05115 11.5833C5.11214 11.138 5.15398 10.7102 5.15398 10.4075C5.15398 10.1048 5.11214 9.67703 5.05115 9.23174C5.02266 9.02371 4.86404 8.86508 4.65601 8.83659C4.21072 8.77561 3.78298 8.73376 3.48025 8.73376ZM2.12281 7.50999C1.31948 7.62001 0.692762 8.24673 0.582744 9.05005C0.519642 9.51081 0.467529 10.0113 0.467529 10.4075C0.467529 10.8037 0.519642 11.3042 0.582744 11.7649C0.692762 12.5683 1.31948 13.195 2.12281 13.305C2.58356 13.3681 3.08402 13.4202 3.48025 13.4202C3.87648 13.4202 4.37694 13.3681 4.83769 13.305C5.64102 13.195 6.26774 12.5683 6.37776 11.7649C6.44086 11.3042 6.49297 10.8037 6.49297 10.4075C6.49297 10.0113 6.44086 9.51081 6.37776 9.05005C6.26774 8.24673 5.64102 7.62001 4.83769 7.50999C4.37694 7.44689 3.87648 7.39478 3.48025 7.39478C3.08402 7.39478 2.58356 7.44689 2.12281 7.50999Z", "fill", "#7784EE"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M10.8445 1.36926C10.5418 1.36926 10.114 1.41111 9.66875 1.47209C9.46072 1.50058 9.3021 1.65921 9.2736 1.86724C9.21262 2.31253 9.17077 2.74026 9.17077 3.04299C9.17077 3.34573 9.21262 3.77346 9.2736 4.21875C9.3021 4.42678 9.46072 4.58541 9.66875 4.6139C10.114 4.67488 10.5418 4.71673 10.8445 4.71673C11.1472 4.71673 11.575 4.67488 12.0203 4.6139C12.2283 4.58541 12.3869 4.42678 12.4154 4.21875C12.4764 3.77346 12.5182 3.34573 12.5182 3.04299C12.5182 2.74026 12.4764 2.31253 12.4154 1.86724C12.3869 1.65921 12.2283 1.50058 12.0203 1.47209C11.575 1.41111 11.1472 1.36926 10.8445 1.36926ZM9.48707 0.145488C8.68374 0.255507 8.05702 0.882227 7.947 1.68555C7.8839 2.1463 7.83179 2.64676 7.83179 3.04299C7.83179 3.43923 7.8839 3.93968 7.947 4.40043C8.05702 5.20376 8.68374 5.83048 9.48707 5.9405C9.94782 6.0036 10.4483 6.05571 10.8445 6.05571C11.2407 6.05571 11.7412 6.0036 12.2019 5.9405C13.0053 5.83048 13.632 5.20376 13.742 4.40043C13.8051 3.93968 13.8572 3.43923 13.8572 3.04299C13.8572 2.64676 13.8051 2.1463 13.742 1.68555C13.632 0.882227 13.0053 0.255507 12.2019 0.145488C11.7412 0.0823858 11.2407 0.0302734 10.8445 0.0302734C10.4483 0.0302734 9.94782 0.0823858 9.48707 0.145488Z", "fill", "#7784EE"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M3.48001 1.36926C3.17727 1.36926 2.74954 1.41111 2.30425 1.47209C2.09622 1.50058 1.93759 1.65921 1.9091 1.86724C1.84812 2.31253 1.80627 2.74026 1.80627 3.04299C1.80627 3.34573 1.84812 3.77346 1.9091 4.21875C1.93759 4.42678 2.09622 4.58541 2.30425 4.6139C2.74954 4.67488 3.17727 4.71673 3.48001 4.71673C3.78274 4.71673 4.21047 4.67488 4.65576 4.6139C4.86379 4.58541 5.02242 4.42678 5.05091 4.21875C5.11189 3.77346 5.15374 3.34573 5.15374 3.04299C5.15374 2.74026 5.11189 2.31253 5.05091 1.86724C5.02242 1.65921 4.86379 1.50058 4.65576 1.47209C4.21047 1.41111 3.78274 1.36926 3.48001 1.36926ZM2.12256 0.145488C1.31924 0.255507 0.692518 0.882227 0.582499 1.68555C0.519398 2.1463 0.467285 2.64676 0.467285 3.04299C0.467285 3.43923 0.519398 3.93968 0.582499 4.40043C0.692518 5.20376 1.31924 5.83048 2.12256 5.9405C2.58332 6.0036 3.08377 6.05571 3.48001 6.05571C3.87624 6.05571 4.37669 6.0036 4.83745 5.9405C5.64077 5.83048 6.26749 5.20376 6.37751 4.40043C6.44061 3.93968 6.49273 3.43923 6.49273 3.04299C6.49273 2.64676 6.44061 2.1463 6.37751 1.68555C6.26749 0.882227 5.64077 0.255507 4.83745 0.145488C4.37669 0.0823858 3.87624 0.0302734 3.48001 0.0302734C3.08377 0.0302734 2.58332 0.0823858 2.12256 0.145488Z", "fill", "#7784EE"], ["xmlns", "http://www.w3.org/2000/svg", "width", "17", "height", "17", "viewBox", "0 0 16 16", "fill", "none"], ["d", "M6.37456 3.31534C7.01566 1.71709 7.3362 0.917969 7.88742 0.917969C8.43864 0.917969 8.75919 1.71709 9.40028 3.31534L9.43014 3.38977C9.79233 4.2927 9.97342 4.74416 10.3425 5.01857C10.7116 5.29298 11.1961 5.33637 12.1651 5.42315L12.3402 5.43884C13.9261 5.58086 14.719 5.65188 14.8887 6.15636C15.0584 6.66084 14.4695 7.19659 13.2918 8.26808L12.8987 8.62569C12.3025 9.1681 12.0044 9.4393 11.8655 9.79476C11.8396 9.86106 11.818 9.92899 11.801 9.99812C11.7097 10.3687 11.797 10.7621 11.9715 11.549L12.0259 11.7939C12.3467 13.24 12.5072 13.9631 12.2271 14.275C12.1224 14.3915 11.9864 14.4754 11.8352 14.5166C11.4308 14.627 10.8567 14.1591 9.70834 13.2234C8.95431 12.609 8.57729 12.3018 8.14443 12.2327C7.97417 12.2055 7.80067 12.2055 7.63041 12.2327C7.19755 12.3018 6.82054 12.609 6.06651 13.2234C4.91819 14.1591 4.34402 14.627 3.93961 14.5166C3.78849 14.4754 3.65246 14.3915 3.54779 14.275C3.26769 13.9631 3.42811 13.24 3.74896 11.7939L3.80331 11.549C3.97789 10.7621 4.06518 10.3687 3.97385 9.99812C3.95682 9.92899 3.93527 9.86106 3.90936 9.79476C3.77042 9.4393 3.47232 9.1681 2.87613 8.62569L2.48306 8.26808C1.30533 7.19659 0.716458 6.66084 0.886127 6.15636C1.0558 5.65188 1.84873 5.58086 3.4346 5.43884L3.60978 5.42315C4.57877 5.33637 5.06326 5.29298 5.43234 5.01857C5.80143 4.74416 5.98252 4.2927 6.34471 3.38976L6.37456 3.31534Z", "stroke", "#a3a3a3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "17", "height", "17", "viewBox", "0 0 13 15", "fill", "none"], ["d", "M6.81742 0.684216C6.8785 0.67625 6.94055 0.6804 7.00003 0.69643C7.0595 0.71246 7.11524 0.740056 7.16404 0.777639L12.3706 4.77234C12.4693 4.84802 12.5338 4.95978 12.55 5.08303C12.5663 5.20629 12.5329 5.33094 12.4572 5.42958C12.0692 5.93536 11.5329 6.10763 11.1327 6.16101C10.9676 6.18208 10.8189 6.18495 10.6993 6.18064L8.17068 9.47642L8.20131 9.55664C8.27982 9.76695 8.37617 10.0618 8.44318 10.398C8.57335 11.0462 8.62023 11.9707 8.06497 12.6945C7.98929 12.7931 7.87754 12.8576 7.75428 12.8739C7.63102 12.8901 7.50637 12.8567 7.40773 12.781L4.43253 10.4983L1.86451 13.8454C1.707 14.0507 0.841887 14.8333 0.636598 14.6758C0.431309 14.5183 0.963199 13.4801 1.1207 13.2748L3.68873 9.92767L0.713523 7.64498C0.614889 7.5693 0.550356 7.45754 0.534122 7.33429C0.517888 7.21103 0.551282 7.08638 0.626958 6.98774C1.18222 6.26402 2.0874 6.06992 2.74641 6.02725C3.06702 6.0078 3.38872 6.01621 3.70788 6.05239L6.23652 2.75661C6.19368 2.61823 6.16249 2.47652 6.14328 2.33294C6.09122 1.9326 6.11932 1.36924 6.5068 0.864204C6.54421 0.815265 6.5909 0.77418 6.6442 0.743296C6.69749 0.712413 6.75636 0.692337 6.81742 0.684216ZM7.1882 2.63126L7.18912 2.63315C7.22659 2.71125 7.24169 2.79821 7.23273 2.88437C7.22378 2.97053 7.19113 3.05252 7.1384 3.12125L4.28504 6.84025C4.23209 6.90926 4.16099 6.96217 4.07968 6.99308C3.99838 7.02398 3.91008 7.03165 3.82466 7.01523L3.82317 7.01409L3.81025 7.01245L3.75297 7.00394C3.43982 6.95802 3.12278 6.94443 2.80685 6.9634C2.41168 6.98871 2.03161 7.07286 1.73345 7.24586L7.52915 11.6925C7.61904 11.3598 7.60192 10.9709 7.52404 10.5826C7.45681 10.2535 7.35381 9.9328 7.21686 9.62612L7.21136 9.61481L7.20987 9.61367C7.17183 9.53527 7.15639 9.44783 7.16528 9.36114C7.17418 9.27446 7.20707 9.19197 7.26024 9.12294L10.1136 5.40394C10.1685 5.3318 10.2431 5.27713 10.3285 5.24655C10.4138 5.21597 10.5062 5.21078 10.5944 5.23162C10.7325 5.24858 10.8721 5.24816 11.0101 5.23036C11.1153 5.21651 11.2224 5.19237 11.3239 5.15091L7.0694 1.88667C7.05696 1.99529 7.05933 2.10464 7.07392 2.21036C7.09344 2.35506 7.13186 2.49657 7.1882 2.63126Z", "fill", "#a3a3a3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "17", "height", "17", "viewBox", "0 0 15 15", "fill", "none"], ["d", "M4.93511 7.22363L1.77732 10.3519C1.68511 10.4434 1.61193 10.5522 1.56198 10.672C1.51204 10.7919 1.48633 10.9205 1.48633 11.0504C1.48633 11.1802 1.51204 11.3088 1.56198 11.4287C1.61193 11.5486 1.68511 11.6574 1.77732 11.7488L3.86284 13.8343C3.95429 13.9265 4.06309 13.9997 4.18297 14.0497C4.30284 14.0996 4.43142 14.1253 4.56129 14.1253C4.69115 14.1253 4.81973 14.0996 4.93961 14.0497C5.05949 13.9997 5.16829 13.9265 5.25974 13.8343L8.38802 10.6765", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M10.8374 8.22701L13.9657 5.09873C14.0579 5.00728 14.1311 4.89848 14.181 4.7786C14.231 4.65872 14.2567 4.53014 14.2567 4.40028C14.2567 4.27041 14.231 4.14183 14.181 4.02196C14.1311 3.90208 14.0579 3.79328 13.9657 3.70183L11.9097 1.6163C11.8183 1.5241 11.7095 1.45092 11.5896 1.40097C11.4697 1.35103 11.3411 1.32532 11.2113 1.32532C11.0814 1.32532 10.9528 1.35103 10.8329 1.40097C10.7131 1.45092 10.6043 1.5241 10.5128 1.6163L7.38452 4.7741", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9.85364 5.75781L5.9187 9.69276", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "19", "viewBox", "0 0 16 12", "fill", "none"], ["d", "M8.40679 9.57515H5.80679V11.1137C5.80679 11.2805 5.61445 11.374 5.48322 11.2709L1.25679 7.95015L5.48322 4.62938C5.61445 4.52627 5.80679 4.61975 5.80679 4.78664V6.32515H9.70679", "stroke", "#a3a3a3"], ["d", "M7.10688 3.07549H9.70688V1.53698C9.70688 1.37009 9.89922 1.27661 10.0304 1.37972L14.2569 4.70049L10.0304 8.02126C9.89922 8.12436 9.70688 8.03088 9.70688 7.86399V6.32549H5.80688", "stroke", "#a3a3a3"], ["d", "M1.25684 6.68393C1.25684 5.84386 1.25684 5.42382 1.42033 5.10295C1.56414 4.82071 1.79361 4.59124 2.07585 4.44743C2.39672 4.28394 2.81676 4.28394 3.65684 4.28394H4.65829C5.08905 4.28394 5.30444 4.28394 5.49459 4.34953C5.66274 4.40753 5.8159 4.50219 5.94298 4.62666C6.08668 4.76741 6.18299 4.96006 6.37562 5.34535L6.84368 6.28157C7.03631 6.66687 7.13263 6.85952 7.27633 7.00027C7.4034 7.12474 7.55656 7.2194 7.72471 7.2774C7.91487 7.34299 8.13025 7.34299 8.56102 7.34299H11.8565C12.6966 7.34299 13.1166 7.34299 13.4375 7.50648C13.7198 7.65029 13.9492 7.87976 14.093 8.16201C14.2565 8.48288 14.2565 8.90291 14.2565 9.74299V11.8252C14.2565 12.6653 14.2565 13.0853 14.093 13.4062C13.9492 13.6884 13.7198 13.9179 13.4375 14.0617C13.1166 14.2252 12.6966 14.2252 11.8565 14.2252H3.65684C2.81676 14.2252 2.39672 14.2252 2.07585 14.0617C1.79361 13.9179 1.56414 13.6884 1.42033 13.4062C1.25684 13.0853 1.25684 12.6653 1.25684 11.8252V6.68393Z", "stroke", "#a3a3a3"], ["d", "M11.9626 6.96026V4.1819C11.9626 3.93731 11.9626 3.81502 11.935 3.69993C11.9105 3.59789 11.8701 3.50035 11.8152 3.41088C11.7534 3.30996 11.6669 3.22348 11.494 3.05053L10.1372 1.69373C9.96421 1.52078 9.87773 1.4343 9.77681 1.37246C9.68734 1.31763 9.5898 1.27722 9.48776 1.25273C9.37267 1.2251 9.25038 1.2251 9.00579 1.2251H5.95103C5.11095 1.2251 4.69091 1.2251 4.37004 1.38859C4.0878 1.5324 3.85833 1.76187 3.71452 2.04411C3.55103 2.36498 3.55103 2.78502 3.55103 3.6251V4.66619", "stroke", "#a3a3a3"], ["d", "M8.90381 1.22518L8.90381 2.68394C8.90381 3.24399 8.90381 3.52401 9.0128 3.73793C9.10868 3.92609 9.26166 4.07907 9.44982 4.17494C9.66373 4.28394 9.94376 4.28394 10.5038 4.28394L11.9626 4.28394", "stroke", "#a3a3a3"], ["d", "M4.25635 8.22522C4.53249 8.22522 4.75635 8.00136 4.75635 7.72522C4.75635 7.44908 4.53249 7.22522 4.25635 7.22522C3.98021 7.22522 3.75635 7.44908 3.75635 7.72522C3.75635 8.00136 3.98021 8.22522 4.25635 8.22522Z", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M7.50635 8.22522C7.78249 8.22522 8.00635 8.00136 8.00635 7.72522C8.00635 7.44908 7.78249 7.22522 7.50635 7.22522C7.23021 7.22522 7.00635 7.44908 7.00635 7.72522C7.00635 8.00136 7.23021 8.22522 7.50635 8.22522Z", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M10.7563 8.22522C11.0325 8.22522 11.2563 8.00136 11.2563 7.72522C11.2563 7.44908 11.0325 7.22522 10.7563 7.22522C10.4802 7.22522 10.2563 7.44908 10.2563 7.72522C10.2563 8.00136 10.4802 8.22522 10.7563 8.22522Z", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M7.75635 1.22522C6.58059 1.22559 5.42694 1.54486 4.41829 2.14903C3.40964 2.75321 2.58374 3.61966 2.02858 4.6561C1.47342 5.69254 1.20978 6.86015 1.26574 8.03458C1.3217 9.209 1.69516 10.3463 2.34635 11.3252L1.25635 14.2252L4.90635 13.5652C5.78526 13.9947 6.74977 14.2203 7.728 14.2251C8.70622 14.23 9.67292 14.014 10.556 13.5932C11.4392 13.1724 12.2159 12.5578 12.8284 11.795C13.4409 11.0322 13.8733 10.1411 14.0935 9.18793C14.3136 8.23479 14.3158 7.24425 14.0998 6.29015C13.8838 5.33605 13.4553 4.44301 12.8461 3.67759C12.237 2.91216 11.4629 2.29411 10.5816 1.86949C9.70033 1.44487 8.73458 1.22464 7.75635 1.22522V1.22522Z", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["xmlns", "http://www.w3.org/2000/svg", "width", "17", "height", "17", "viewBox", "0 0 12 15", "fill", "none"], ["d", "M8.26025 3.32532H2.26025C1.70797 3.32532 1.26025 3.77303 1.26025 4.32532V13.3253C1.26025 13.8776 1.70797 14.3253 2.26025 14.3253H8.26025C8.81254 14.3253 9.26025 13.8776 9.26025 13.3253V4.32532C9.26025 3.77303 8.81254 3.32532 8.26025 3.32532Z", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3.26025 5.82532H7.26025", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3.26025 8.32532H7.26025", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3.26025 10.8253H5.26025", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3.76025 1.32532H10.2603C10.5255 1.32532 10.7798 1.43067 10.9674 1.61821C11.1549 1.80575 11.2603 2.0601 11.2603 2.32532V11.8253", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2.26025 9.89526L9.26025 9.89526C9.81254 9.89526 10.2603 9.44755 10.2603 8.89526L10.2603 1.89526C10.2603 1.34298 9.81254 0.895264 9.26025 0.895264L2.26025 0.895264C1.70797 0.895264 1.26025 1.34298 1.26025 1.89526L1.26025 8.89526C1.26025 9.44755 1.70797 9.89526 2.26025 9.89526Z", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12.7603 5.09521L13.5403 5.34521C13.6662 5.38594 13.7827 5.45123 13.8831 5.53729C13.9835 5.62336 14.0659 5.72849 14.1254 5.84661C14.185 5.96473 14.2205 6.09348 14.2299 6.22541C14.2393 6.35735 14.2225 6.48984 14.1803 6.61521L12.0003 13.2052C11.9179 13.4571 11.739 13.6659 11.5027 13.7859C11.2665 13.9059 10.9923 13.9272 10.7403 13.8452L6.32031 12.3952", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M1.26025 7.39526H10.2603", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["xmlns", "http://www.w3.org/2000/svg", "width", "15", "height", "14", "viewBox", "0 0 15 14", "fill", "none"], ["d", "M5.73242 5.25464C6.97506 5.25464 7.98242 4.24728 7.98242 3.00464C7.98242 1.762 6.97506 0.754639 5.73242 0.754639C4.48978 0.754639 3.48242 1.762 3.48242 3.00464C3.48242 4.24728 4.48978 5.25464 5.73242 5.25464Z", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M10.2324 12.7546H1.23242V11.7546C1.23242 10.5612 1.70653 9.41657 2.55044 8.57266C3.39436 7.72874 4.53895 7.25464 5.73242 7.25464C6.9259 7.25464 8.07049 7.72874 8.9144 8.57266C9.75832 9.41657 10.2324 10.5612 10.2324 11.7546V12.7546Z", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9.73242 0.754639C10.3292 0.754639 10.9015 0.991692 11.3234 1.41365C11.7454 1.83561 11.9824 2.4079 11.9824 3.00464C11.9824 3.60138 11.7454 4.17367 11.3234 4.59563C10.9015 5.01759 10.3292 5.25464 9.73242 5.25464", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M11.3323 7.44458C12.1841 7.76863 12.9175 8.34369 13.4353 9.09367C13.9532 9.84365 14.2311 10.7332 14.2323 11.6446V12.7546H12.7323", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M13.2324 3.72534H2.23242C1.68014 3.72534 1.23242 4.17306 1.23242 4.72534V11.7253C1.23242 12.2776 1.68014 12.7253 2.23242 12.7253H13.2324C13.7847 12.7253 14.2324 12.2776 14.2324 11.7253V4.72534C14.2324 4.17306 13.7847 3.72534 13.2324 3.72534Z", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M1.23242 7.72534H14.2324", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M7.73242 6.72534V8.72534", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M10.7324 3.72534C10.7324 2.92969 10.4164 2.16663 9.85374 1.60402C9.29113 1.04141 8.52807 0.725342 7.73242 0.725342V0.725342C6.93677 0.725342 6.17371 1.04141 5.6111 1.60402C5.04849 2.16663 4.73242 2.92969 4.73242 3.72534", "stroke", "#a3a3a3", "stroke-linecap", "round", "stroke-linejoin", "round"], [4, "ngIf", "ngIfElse"], ["ActionContent", ""], ["id", "rightbar-overlay", 3, "click"], ["id", "mysideInfobar1", 1, "sideInfobar", "animate-right"], [1, "Kt-Pd-Status", 3, "ngClass"], [1, "progress", "kt-projcect-progress", "bar"], ["role", "progressbar", "aria-valuenow", "15", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-inprogress"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-delay"], ["role", "progressbar", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-done"], [1, "col-lg-6", "text-center", "mt-4"], [1, "kt-prg-bar-info"], [1, "col", "text-center", "mt-4"], [1, "col-lg-1", "p-1", "text-center"], [1, "kt-prg-bar-info", "kt-total-prg-vl", "mt-4"], [1, "kt-info-box", "pb-0", "mt-2"], [1, "Kt-Pd-Status", "Add_Action_btn", 3, "click"], [1, "add-act-plus-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "4 3 8 12", 1, "bi", "bi-plus"], ["d", "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"], ["class", "kt-project-action-list-view", 4, "ngIf"], [1, "kt-project-action-list-view"], ["noActionsAvailable", ""], ["class", "kt-projcect-act-list", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "kt-projcect-act-list", 3, "ngClass", "click"], [1, "col-lg-8", "pl-0", "pr-1"], [1, "kt-p-box"], [1, "kt-action-p-tittle"], [1, "col-lg-4", "pl-2"], [1, "kt-p-box", "text-center"], [1, "kt-p-status"], [1, "kt-p-action-No"], [1, "kt-p-action-Status"], [3, "ngSwitch"], ["class", "Status-done", 4, "ngSwitchCase"], ["class", "Status-Delay", 4, "ngSwitchCase"], ["class", "Status-In-progress", 4, "ngSwitchCase"], ["class", "bg-rejected", "style", "background-color: transparent;", 4, "ngSwitchCase"], ["class", "Status-In-progress", 4, "ngSwitchDefault"], [1, "Status-done"], [1, "Status-Delay"], [1, "Status-In-progress"], [1, "bg-rejected", 2, "background-color", "transparent"], [1, "kt-info-box", "mt-2", "border-0"], [1, "kt-project-info-body"], [3, "ngSwitch", 4, "ngIf"], [1, "kt-project-desc", "w-80"], [1, "row", "mt-4", "px-3"], [1, "kt-info-lable-icon"], ["width", "24px", "height", "24px", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", "id", "handshake"], ["fill", "#898989", "data-name", "Handshake"], ["d", "M10.17 38a1.007 1.007 0 0 1-.458-.11L2.09 33.964a1 1 0 0 1-.434-1.342l8.954-17.686a1 1 0 0 1 1.347-.439l7.251 3.7a1 1 0 0 1 .448 1.324l-8.584 17.908a1.006 1.006 0 0 1-.583.516 1.028 1.028 0 0 1-.319.055Zm-6.281-5.36 5.824 3 7.718-16.1-5.49-2.8Z"], ["d", "M20.53 24.084a1 1 0 0 1-.491-.129l-2.906-1.637a1 1 0 1 1 .981-1.743l2.4 1.351c.937-.568 2.965-1.791 4.263-2.524 2.119-1.2 3.611-1.035 5.324.588a1 1 0 0 1-1.375 1.452c-1.064-1.008-1.618-1.06-2.965-.3-1.668.943-4.677 2.777-4.708 2.8a1 1 0 0 1-.523.142Z"], ["d", "M46.837 41.483a3.827 3.827 0 0 1-2.072-.547c-.92-.614-4.968-4.584-5.77-5.373a1 1 0 0 1 1.4-1.426c1.8 1.777 4.888 4.742 5.477 5.135a2.328 2.328 0 0 0 2.364-.244 1.422 1.422 0 0 0-.04-2.182c-1.022-1.15-5.268-5.235-6.2-6.131a66.293 66.293 0 0 1-9.432-4.322l-1.052.688a4.582 4.582 0 0 1-1.771 2.731 2.759 2.759 0 0 1-2.278.532 3.475 3.475 0 0 1-2.409-1.444 4.74 4.74 0 0 1-.166-3.617c.853-3.414 2.237-4.293 4.152-5.509l.421-.269c2.11-1.355 3.921-2.077 5.909-1.182 1.236.557 5.623 2.256 6.869 2.738l4.176-1.369a1 1 0 0 1 .623 1.9l-4.515 1.48a1.007 1.007 0 0 1-.67-.016c-.237-.092-5.815-2.238-7.3-2.908-.891-.4-1.832-.359-4.008 1.039l-.43.275c-1.747 1.109-2.624 1.667-3.284 4.306-.338 1.352-.182 1.9-.059 2.1.158.264.524.371 1.107.517a.856.856 0 0 0 .706-.2A2.587 2.587 0 0 0 29.6 26.4a1 1 0 0 1 .448-.75l1.925-1.259A1 1 0 0 1 33 24.353c.068.037 6.81 3.724 9.763 4.5a1.018 1.018 0 0 1 .438.245c.216.207 5.3 5.075 6.494 6.422a3.4 3.4 0 0 1-.04 4.924 4.013 4.013 0 0 1-2.818 1.039Z"], ["d", "M48.947 37.182a1 1 0 0 1-.405-1.914l3.508-1.554a1 1 0 1 1 .81 1.828L49.351 37.1a1 1 0 0 1-.404.082Z"], ["d", "M53.534 38a1 1 0 0 1-.927-.626l-7.548-18.726a1 1 0 0 1 .59-1.316l8.066-2.886a1 1 0 0 1 1.266.572l7.4 18.574a1 1 0 0 1-.571 1.3l-7.918 3.038a1 1 0 0 1-.358.07zM47.3 18.864l6.791 16.847 6.054-2.32-6.665-16.737zm-4.968 25.652a3.386 3.386 0 0 1-2.264-.779c-1.339-1.19-4.781-4.63-4.927-4.776a1 1 0 0 1 1.414-1.414c.035.035 3.547 3.545 4.841 4.7a1.951 1.951 0 0 0 1.8.12A2.709 2.709 0 0 0 45 40.208a1 1 0 0 1 1.971.34 4.712 4.712 0 0 1-3.11 3.7 4.654 4.654 0 0 1-1.529.268z"], ["d", "M37.678 46.94a3.164 3.164 0 0 1-2.241-.8l-3.552-3.552 1.415-1.415 3.552 3.552a1.8 1.8 0 0 0 1.457.136 2.636 2.636 0 0 0 1.918-1.879 1 1 0 1 1 1.912.586 4.657 4.657 0 0 1-4.46 3.372Z"], ["d", "M33.866 49.611a3.632 3.632 0 0 1-2.269-.735 298.882 298.882 0 0 0-2.715-2.148 1 1 0 1 1 1.231-1.576s1.249.975 2.734 2.163a2.127 2.127 0 0 0 2.1.043 1.559 1.559 0 0 0 .942-1.493 1 1 0 0 1 .969-1.03 1.013 1.013 0 0 1 1.03.97 3.558 3.558 0 0 1-2.048 3.343 4.461 4.461 0 0 1-1.974.463Z"], ["d", "M26.372 49.148a2.5 2.5 0 0 1-.947-.19A4.416 4.416 0 0 1 23.5 47.12a3.151 3.151 0 0 1-2.083-.313 4.825 4.825 0 0 1-2.086-3.088 1 1 0 0 1 .137-.741c.813-1.268 2.039-3.239 2.222-3.65A2.546 2.546 0 0 1 23.35 38a3.358 3.358 0 0 1 2.842.544 2.98 2.98 0 0 1 1.324 2.742 3.329 3.329 0 0 1 2.46 1.251 3.59 3.59 0 0 1 .383 3.067 5.949 5.949 0 0 1-3 3.344 2.534 2.534 0 0 1-.987.2Zm-1.188-3.121c.314.531.875 1.293 1.4 1.074a3.949 3.949 0 0 0 1.882-2.139 1.621 1.621 0 0 0-.1-1.247 1.585 1.585 0 0 0-1.154-.452Zm-3.791-2.35a2.526 2.526 0 0 0 .977 1.372 1.214 1.214 0 0 0 .963.063l2.135-3.66a1.065 1.065 0 0 0-.412-1.264 1.4 1.4 0 0 0-1.1-.281.751.751 0 0 0-.44.243c-.264.585-1.534 2.601-2.123 3.527Z"], ["d", "M18.729 45.239a2.451 2.451 0 0 1-.7-.1c-1.713-.515-2.384-2.733-2.455-2.984a1 1 0 0 1 .093-.765 41.481 41.481 0 0 1 2.815-4.26 3.394 3.394 0 0 1 4.494-.807c.944.655 1.636 2.08.478 3.942a1 1 0 1 1-1.7-1.055c.257-.415.48-.966.081-1.243a1.384 1.384 0 0 0-1.769.382 39.431 39.431 0 0 0-2.435 3.64c.219.523.592 1.122.973 1.235.337.1.8-.246 1.051-.46a1 1 0 0 1 1.308 1.514 3.41 3.41 0 0 1-2.234.961Z"], ["d", "M16.534 42.88a1 1 0 0 1-.323-.054c-.169-.057-4.155-1.45-4.155-4.572a1.012 1.012 0 0 1 .048-.309 11.688 11.688 0 0 1 1.473-2.8 3.105 3.105 0 0 1 3.848-.744 2.589 2.589 0 0 1 1.4 3.207c-.654 2.106-1.325 4.513-1.332 4.538a1 1 0 0 1-.963.731Zm-2.47-4.471c.1.936 1.058 1.648 1.826 2.075.261-.912.648-2.239 1.028-3.466a.6.6 0 0 0-.376-.82 1.2 1.2 0 0 0-1.329.1 10.356 10.356 0 0 0-1.149 2.111Z"], ["d", "M13.877 37.529a1 1 0 0 1-.564-.175l-2.623-1.8a1 1 0 0 1 1.13-1.651l2.623 1.8a1 1 0 0 1-.566 1.826Z"], [1, "kt-info-data-v"], ["width", "24px", "height", "24px", "xmlns", "http://www.w3.org/2000/svg", "fill", "#898989", "viewBox", "0 0 101 101", "id", "user"], ["fill", "#898989", "d", "M50.4 54.5c10.1 0 18.2-8.2 18.2-18.2S60.5 18 50.4 18s-18.2 8.2-18.2 18.2 8.1 18.3 18.2 18.3zm0-31.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4S37 43.7 37 36.3s6-13.5 13.4-13.5zM18.8 83h63.4c1.3 0 2.4-1.1 2.4-2.4 0-12.6-10.3-22.9-22.9-22.9H39.3c-12.6 0-22.9 10.3-22.9 22.9 0 1.3 1.1 2.4 2.4 2.4zm20.5-20.5h22.4c9.2 0 16.7 6.8 17.9 15.7H21.4c1.2-8.9 8.7-15.7 17.9-15.7z"], [1, "kt-info-data-v", "bg-light-shade"], ["width", "24px", "height", "24px", "xmlns", "http://www.w3.org/2000/svg", "fill", "#898989", "enable-background", "new 0 0 24 24", "viewBox", "0 0 24 24", "id", "office-bag"], ["d", "M19.5,6H16V5c-0.0014038-1.1040039-0.8959961-1.9985962-2-2h-4C8.8959961,3.0014038,8.0014038,3.8959961,8,5v1H4.5C3.119812,6.0012817,2.0012817,7.119812,2,8.5v10c0.0012817,1.380188,1.119812,2.4987183,2.5,2.5h15c1.380188-0.0012817,2.4987183-1.119812,2.5-2.5v-10C21.9987183,7.119812,20.880188,6.0012817,19.5,6z M9,5c0.0003662-0.552124,0.447876-0.9996338,1-1h4c0.552124,0.0003662,0.9996338,0.447876,1,1v1H9V5z M21,18.5c-0.0009155,0.828064-0.671936,1.4990845-1.5,1.5h-15c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5v-6.4726562l5.8417969,1.9472656C8.8928833,13.991333,8.9462891,13.999939,9,14h6c0.053772-0.000061,0.1071777-0.008667,0.1582642-0.0253906L21,12.0273438V18.5z M21,11.0059204c-0.0525513,0-0.1055908,0.0019531-0.1581421,0.0194702L14.9190063,13H9.0810547l-5.9228516-1.9746094C3.1056519,11.0078735,3.0525513,11.0059204,3,11.0059204V8.5C3.0009155,7.671936,3.671936,7.0009155,4.5,7h15c0.828064,0.0009155,1.4990845,0.671936,1.5,1.5V11.0059204z"], ["width", "24px", "height", "24px", "xmlns", "http://www.w3.org/2000/svg", "fill", "#898989", "viewBox", "0 0 64 64", "id", "money"], ["d", "M32,46A10,10,0,1,0,22,36,10.011,10.011,0,0,0,32,46Zm0-18a8,8,0,1,1-8,8A8.009,8.009,0,0,1,32,28Z"], ["d", "M32,39a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,2,2.816V42a1,1,0,0,0,2,0V40.816A2.993,2.993,0,0,0,32,35a1,1,0,1,1,1-1,1,1,0,0,0,2,0,3,3,0,0,0-2-2.816V30a1,1,0,0,0-2,0v1.184A2.993,2.993,0,0,0,32,37a1,1,0,0,1,0,2Z"], ["d", "M59.218,36h-6.48a27.909,27.909,0,0,0-8.3-12.82l-5.556-4.862a2.974,2.974,0,0,0-1.092-5.2l5.043-7.564a1,1,0,0,0-.067-1.2c-.025-.028-.057-.045-.084-.071l.008-.008A8.36,8.36,0,0,0,37,2a8.223,8.223,0,0,0-4.671,1.466C29.224,2.108,26,.747,21.4,4.2a1,1,0,0,0-.232,1.355l5.043,7.564a2.967,2.967,0,0,0-1.538,4.751L19.94,22.288l1.366,1.461L26.394,19h10.23l6.5,5.685A25.925,25.925,0,0,1,50.641,36H46.782A2.785,2.785,0,0,0,44,38.782v2.436A2.756,2.756,0,0,0,44.664,43,2.756,2.756,0,0,0,44,44.782v2.436a2.765,2.765,0,0,0,.15.861,2.783,2.783,0,0,0-2.15,2.7v2.436a2.783,2.783,0,0,0,2.15,2.7,2.765,2.765,0,0,0-.15.861v2.436a2.9,2.9,0,0,0,.035.35A10.982,10.982,0,0,1,41,60h-.126A2.74,2.74,0,0,0,41,59.218V56.782A2.756,2.756,0,0,0,40.336,55,2.756,2.756,0,0,0,41,53.218V50.782A2.785,2.785,0,0,0,38.218,48H25.782A2.785,2.785,0,0,0,23,50.782v2.436A2.756,2.756,0,0,0,23.664,55,2.756,2.756,0,0,0,23,56.782v2.436a2.74,2.74,0,0,0,.126.782H23a10.982,10.982,0,0,1-3.035-.432,2.9,2.9,0,0,0,.035-.35V56.782a2.765,2.765,0,0,0-.15-.861,2.783,2.783,0,0,0,2.15-2.7V50.782a2.783,2.783,0,0,0-2.15-2.7,2.765,2.765,0,0,0,.15-.861V44.782A2.756,2.756,0,0,0,19.336,43,2.756,2.756,0,0,0,20,41.218V38.782A2.785,2.785,0,0,0,17.218,36h-4.03A26,26,0,0,1,19.7,25.26L18.3,23.839A28.007,28.007,0,0,0,11.1,36H4.782A2.785,2.785,0,0,0,2,38.782v2.436A2.756,2.756,0,0,0,2.664,43,2.756,2.756,0,0,0,2,44.782v2.436a2.783,2.783,0,0,0,2.15,2.7,2.765,2.765,0,0,0-.15.861v2.436a2.765,2.765,0,0,0,.15.861A2.783,2.783,0,0,0,2,56.782v2.436A2.785,2.785,0,0,0,4.782,62H17.218a2.752,2.752,0,0,0,1.759-.645A12.964,12.964,0,0,0,23,62H41a12.964,12.964,0,0,0,4.023-.645A2.752,2.752,0,0,0,46.782,62H59.218A2.785,2.785,0,0,0,62,59.218V56.782a2.783,2.783,0,0,0-2.15-2.7,2.765,2.765,0,0,0,.15-.861V50.782a2.765,2.765,0,0,0-.15-.861,2.783,2.783,0,0,0,2.15-2.7V44.782A2.756,2.756,0,0,0,61.336,43,2.756,2.756,0,0,0,62,41.218V38.782A2.785,2.785,0,0,0,59.218,36ZM39.844,4.7a8.592,8.592,0,0,1-5.115-.262A6.139,6.139,0,0,1,37,4,6.492,6.492,0,0,1,39.844,4.7Zm-8.233.638c2.249.985,4.732,2.075,7.983,1.472L35.465,13h-6.93l-5.16-7.74C26.649,3.162,28.862,4.13,31.611,5.335ZM27,17a1,1,0,0,1,0-2H37a1,1,0,0,1,0,2ZM20,53.218a.783.783,0,0,1-.782.782H6.782A.783.783,0,0,1,6,53.218V50.782A.783.783,0,0,1,6.782,50H8v2h2V50h2v2h2V50h2v2h2V50h1.218a.783.783,0,0,1,.782.782ZM4,38.782A.783.783,0,0,1,4.782,38H6v2H8V38h2v2h2V38h2v2h2V38h1.218a.783.783,0,0,1,.782.782v2.436a.783.783,0,0,1-.782.782H4.782A.783.783,0,0,1,4,41.218Zm0,6A.783.783,0,0,1,4.782,44H6v2H8V44h2v2h2V44h2v2h2V44h1.218a.783.783,0,0,1,.782.782v2.436a.783.783,0,0,1-.782.782H4.782A.783.783,0,0,1,4,47.218ZM18,59.218a.783.783,0,0,1-.782.782H4.782A.783.783,0,0,1,4,59.218V56.782A.783.783,0,0,1,4.782,56H6v2H8V56h2v2h2V56h2v2h2V56h1.218a.783.783,0,0,1,.782.782Zm7-8.436A.783.783,0,0,1,25.782,50H27v2h2V50h2v2h2V50h2v2h2V50h1.218a.783.783,0,0,1,.782.782v2.436a.783.783,0,0,1-.782.782H25.782A.783.783,0,0,1,25,53.218ZM25.782,60A.783.783,0,0,1,25,59.218V56.782A.783.783,0,0,1,25.782,56H27v2h2V56h2v2h2V56h2v2h2V56h1.218a.783.783,0,0,1,.782.782v2.436a.783.783,0,0,1-.782.782ZM46,38.782A.783.783,0,0,1,46.782,38H48v2h2V38h2v2h2V38h2v2h2V38h1.218a.783.783,0,0,1,.782.782v2.436a.783.783,0,0,1-.782.782H46.782A.783.783,0,0,1,46,41.218Zm-2,12A.783.783,0,0,1,44.782,50H46v2h2V50h2v2h2V50h2v2h2V50h1.218a.783.783,0,0,1,.782.782v2.436a.783.783,0,0,1-.782.782H44.782A.783.783,0,0,1,44,53.218Zm16,8.436a.783.783,0,0,1-.782.782H46.782A.783.783,0,0,1,46,59.218V56.782A.783.783,0,0,1,46.782,56H48v2h2V56h2v2h2V56h2v2h2V56h1.218a.783.783,0,0,1,.782.782Zm0-12a.783.783,0,0,1-.782.782H46.782A.783.783,0,0,1,46,47.218V44.782A.783.783,0,0,1,46.782,44H48v2h2V44h2v2h2V44h2v2h2V44h1.218a.783.783,0,0,1,.782.782Z"], ["width", "24px", "height", "24px", "xmlns", "http://www.w3.org/2000/svg", "fill", "#898989", "viewBox", "0 0 48 48", "id", "international-client"], ["fill", "#0c0c0c", "d", "M24 0C10.767 0 0 10.767 0 24s10.767 24 24 24 24-10.767 24-24S37.233 0 24 0zm0 47C11.318 47 1 36.682 1 24S11.318 1 24 1s23 10.318 23 23-10.318 23-23 23z"], ["fill", "#0c0c0c", "d", "M10.529 36.494a.499.499 0 1 0-.738.674l.362.396c.208.229.324.525.324.835V39.5a.5.5 0 0 0 1 0v-1.101c0-.56-.208-1.096-.585-1.509l-.363-.396zm8.804-.402a.5.5 0 0 0-.033.706c.237.26.368.597.368.948V39.5a.5.5 0 0 0 1 0v-1.754c0-.602-.223-1.177-.628-1.622a.5.5 0 0 0-.707-.032zm8.628.032a2.4 2.4 0 0 0-.629 1.622V39.5a.5.5 0 0 0 1 0v-1.754c0-.352.131-.688.368-.948a.499.499 0 0 0-.032-.706.497.497 0 0 0-.707.032zm9.51.37-.363.396a2.234 2.234 0 0 0-.584 1.509V39.5a.5.5 0 0 0 1 0v-1.101c0-.31.115-.606.323-.835l.362-.396a.5.5 0 1 0-.738-.674z"], ["fill", "#0c0c0c", "d", "M38.378 34.064 36 33.172V32.02a2.983 2.983 0 0 0 .999-2.219v-1.169l.581-2.13c.082-.453-.019-.911-.284-1.288s-.662-.627-1.116-.703l-2.85-.475a1.68 1.68 0 0 0-1.91 1.263 1.473 1.473 0 0 0-.7.479c-.282.349-.39.8-.278 1.303L31 28.642v1.16c0 .884.391 1.671 1.001 2.221v1.149l-2.378.893c-.04.015-.074.038-.113.054l-.834-.519a1.676 1.676 0 0 0 .941-1.783 28.909 28.909 0 0 1-.364-4.563V25.597a5.222 5.222 0 0 0-5.216-5.216 5.222 5.222 0 0 0-5.216 5.216v1.657c0 1.521-.123 3.057-.364 4.563a1.656 1.656 0 0 0 .903 1.76l-.869.542c-.038-.016-.073-.039-.112-.054L16 33.172V32.02a2.983 2.983 0 0 0 .999-2.219v-1.169l.581-2.13c.082-.453-.019-.911-.284-1.288s-.662-.627-1.116-.703l-2.85-.475a1.682 1.682 0 0 0-1.91 1.263 1.473 1.473 0 0 0-.7.479c-.282.349-.39.8-.278 1.303L11 28.642v1.16c0 .884.391 1.671 1.001 2.221v1.149l-2.378.893A2.51 2.51 0 0 0 8 36.405V39.5a.5.5 0 0 0 1 0v-3.095c0-.622.391-1.186.974-1.405l.998-.374a4 4 0 0 0 3.029 1.393 4 4 0 0 0 3.028-1.393l.615.231A2.82 2.82 0 0 0 17 36.634V39.5a.5.5 0 0 0 1 0v-2.866c0-.646.327-1.235.875-1.576l2.224-1.386c.756.789 1.798 1.269 2.9 1.269 1.102 0 2.143-.48 2.899-1.268l2.225 1.385c.549.341.877.93.877 1.577V39.5a.5.5 0 0 0 1 0v-2.865c0-.665-.242-1.279-.644-1.778l.615-.231A4 4 0 0 0 34 36.019a4 4 0 0 0 3.028-1.393l.998.374c.583.219.974.783.974 1.405V39.5a.5.5 0 0 0 1 0v-3.095a2.512 2.512 0 0 0-1.622-2.341zm-6.881-7.658a.478.478 0 0 1 .372-.177c.276 0 .5-.256.5-.532a.69.69 0 0 1 .797-.674l2.85.475a.702.702 0 0 1 .463.292c.11.156.152.347.127.492l-.302 1.104-.085-.124a.499.499 0 0 0-.413-.218H32.18a.499.499 0 0 0-.416.223l-.129.192-.234-.65a.476.476 0 0 1 .096-.403zm.502 2.307.448-.67h3.095l.457.669v1.09a1.99 1.99 0 0 1-1.364 1.886l-.025.008a1.988 1.988 0 0 1-1.808-.306c-.003-.002-.006-.001-.008-.003a1.991 1.991 0 0 1-.795-1.586v-1.088zm-10.77-.94v-.631c0-.768.446-1.453 1.113-1.807 1.212.879 2.613 1.36 4.069 1.36h.001l.227.007c.04 0 .077.01.116.013v1.058c0 1.523-1.24 2.764-2.763 2.764s-2.763-1.24-2.763-2.764zm5.038 4.327v-1.348a3.746 3.746 0 0 0 1.489-2.979v-.565c.305.328.497.786.497 1.295 0 .082.024.156.059.224.054 1.089.145 2.177.318 3.248a.68.68 0 0 1-.671.787h-.629l-1.063-.662zm-6.153.662a.68.68 0 0 1-.67-.787c.25-1.558.376-3.146.376-4.721v-1.657c0-2.324 1.891-4.216 4.216-4.216s4.216 1.892 4.216 4.216v.717a2.534 2.534 0 0 0-.752-.445.482.482 0 0 0-.176-.059 2.363 2.363 0 0 0-.668-.107l-.227-.007c-1.316 0-2.573-.441-3.646-1.264a.496.496 0 0 0-.562-.162 3.076 3.076 0 0 0-1.976 2.672c-.004.027-.016.051-.016.078v.755c0 1.222.595 2.299 1.5 2.987V32.1l-1.062.662h-.553zm-8.617-6.356a.478.478 0 0 1 .372-.177c.276 0 .5-.256.5-.532a.69.69 0 0 1 .797-.674l2.85.475a.702.702 0 0 1 .463.292c.11.156.152.347.127.492l-.302 1.104-.085-.124a.499.499 0 0 0-.413-.218H12.18a.499.499 0 0 0-.416.223l-.129.192-.234-.65a.476.476 0 0 1 .096-.403zm.502 2.307.448-.67h3.095l.457.669v1.09a1.99 1.99 0 0 1-.798 1.588l-.003.001a1.987 1.987 0 0 1-.568.299l-.015.005c-.398.13-.828.131-1.227.002l-.022-.007a1.99 1.99 0 0 1-.565-.297l-.004-.001a1.992 1.992 0 0 1-.799-1.589v-1.09zM14 35.019a3 3 0 0 1-2.006-.776l.682-.256a.5.5 0 0 0 .324-.468v-.892c.062.022.127.032.19.05.088.025.174.053.265.07.135.025.272.035.41.041.045.002.088.014.134.014.044 0 .085-.011.129-.013.14-.006.279-.017.416-.042.091-.017.177-.045.265-.07.064-.018.13-.028.192-.051v.893a.5.5 0 0 0 .324.468l.681.256a3.003 3.003 0 0 1-2.006.776zm10-1.079c-.76 0-1.484-.301-2.039-.806l.533-.332a.491.491 0 0 0 .226-.425h.009v-1.075a3.71 3.71 0 0 0 1.263.234c.449 0 .874-.092 1.274-.237v1.078h.01c0 .167.075.33.227.425l.535.333A3.04 3.04 0 0 1 24 33.94zm10 1.079a3 3 0 0 1-2.006-.776l.682-.256a.5.5 0 0 0 .324-.468v-.893c.056.02.116.029.173.046.094.027.186.057.284.075.132.024.266.034.4.04.048.002.093.014.141.014.042 0 .081-.011.122-.012.143-.006.285-.017.426-.043.084-.016.164-.042.246-.065.069-.019.14-.03.208-.055v.892a.5.5 0 0 0 .324.468l.682.256a2.999 2.999 0 0 1-2.006.777z"], ["fill", "#0c0c0c", "d", "M24 8C15.178 8 8 15.178 8 24c0 2.362.536 4.738 1.551 6.871a.5.5 0 0 0 .903-.43A15.086 15.086 0 0 1 9 24c0-1.067 1.549-2.195 4.207-3.055-.068.5-.12 1.007-.154 1.522a.5.5 0 0 0 .466.532.493.493 0 0 0 .532-.466c.043-.649.124-1.28.222-1.902 1.406-.377 3.057-.681 4.9-.879-.034.411-.063.823-.086 1.235a.5.5 0 0 0 .471.527l.029.001a.5.5 0 0 0 .499-.472c.027-.473.06-.935.098-1.384a46.1 46.1 0 0 1 3.818-.16c1.342 0 2.612.06 3.818.16.036.421.067.851.093 1.293a.49.49 0 0 0 .528.47.5.5 0 0 0 .47-.528c-.022-.381-.05-.762-.081-1.142 1.842.198 3.493.502 4.899.879.098.622.179 1.253.222 1.901a.497.497 0 0 0 .497.468l.034-.001a.501.501 0 0 0 .466-.532 22.08 22.08 0 0 0-.154-1.522C37.451 21.805 39 22.933 39 24c0 2.21-.5 4.434-1.447 6.43a.5.5 0 1 0 .903.428A16.103 16.103 0 0 0 40 24c0-8.822-7.178-16-16-16zm0 1c.909 0 1.921 1.487 2.7 4.169A23.144 23.144 0 0 0 24 13c-.922 0-1.821.066-2.701.169C22.078 10.486 23.089 9 24 9zm-3.774 4.322c-1.34.224-2.621.554-3.806.994 1.409-2.466 3.327-4.246 5.482-4.96-.676.946-1.235 2.326-1.676 3.966zm5.87-3.967c2.155.713 4.075 2.494 5.484 4.961a20.939 20.939 0 0 0-3.807-.995c-.442-1.639-1.001-3.02-1.677-3.966zm-7.274.585c-1.523 1.203-2.836 2.913-3.831 4.976-2.071.974-3.792 2.272-5.009 3.789a15.06 15.06 0 0 1 8.84-8.765zM9.43 21.664c.763-2.115 2.525-3.971 4.949-5.326a20.413 20.413 0 0 0-.989 3.525c-1.636.484-3.011 1.086-3.96 1.801zm5.033-2.094a18.87 18.87 0 0 1 1.269-3.905 19.187 19.187 0 0 1 4.235-1.287 37.984 37.984 0 0 0-.699 4.373c-1.706.18-3.337.455-4.805.819zM24 18.5c-1.245 0-2.494.057-3.719.158.18-1.689.438-3.181.746-4.459a22.198 22.198 0 0 1 5.945 0c.309 1.278.567 2.771.747 4.459A45.407 45.407 0 0 0 24 18.5zm4.733.251a38.014 38.014 0 0 0-.7-4.373c1.522.284 2.95.718 4.236 1.287a18.87 18.87 0 0 1 1.269 3.905 35.836 35.836 0 0 0-4.805-.819zm5.878 1.112a20.503 20.503 0 0 0-.989-3.525c2.423 1.355 4.185 3.211 4.948 5.326-.949-.715-2.324-1.317-3.959-1.801zm-1.602-4.946c-.994-2.063-2.308-3.773-3.831-4.976a15.05 15.05 0 0 1 8.839 8.765c-1.217-1.517-2.938-2.816-5.008-3.789z"], [1, "kt-clinet-img-x"], [1, "row", "mt-5", "px-3"], [1, "kt-support-view"], [1, "symbol-group", "symbol-hover", "flex-nowrap"], ["data-bs-toggle", "tooltip", "aria-label", "Michael Eberon", "data-bs-original-title", "Michael Eberon", "data-kt-initialized", "1", 1, "symbol", "symbol-35px", "symbol-circle"], ["alt", "Pic", "src", "https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-11.jpg"], ["alt", "Pic", "src", "https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-17.jpg"], ["data-bs-toggle", "tooltip", "aria-label", "Barry Walter", "data-bs-original-title", "Barry Walter", "data-kt-initialized", "1", 1, "symbol", "symbol-35px", "symbol-circle"], ["alt", "Pic", "src", "https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-12.jpg"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#kt_modal_view_users", 1, "symbol", "symbol-35px", "symbol-circle"], [1, "symbol-label", "bg-dark", "text-gray-300", "fs-8", "fw-bold"], [1, "Dividing-line"], [1, "col-lg-6"], [1, "kt-over-pd-in", "bd-right-x"], ["id", "chart-container", 1, "chart"], ["class", "kt-project-type", 4, "ngSwitchCase"], ["class", "kt-project-type", 4, "ngSwitchDefault"], [1, "Kt-Pd-Status", "Delay"], [1, "Kt-Pd-Status", "bg-done"], [1, "Kt-Pd-Status", "bg-inprogress"], [1, "Kt-Pd-Status", "bg-rejected"], [1, "Kt-Pd-Status"], [4, "ngIf"], ["class", "kt-Note-msg d-flex align-items-center", 4, "ngIf"], [1, "kt-Note-msg", "d-flex", "align-items-center"], [1, "kt-note-icon"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "25", "height", "25", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 66 65", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 66 66"], ["d", "M21.56,44.04l-8.62-14.94l-6.62,3.82c-4.13,2.38-5.54,7.66-3.16,11.78l0,0c2.38,4.13,7.66,5.54,11.78,3.16L21.56,44.04z"], ["d", "M50.47,17.85c0.19,0.32,0.52,0.5,0.87,0.5c0.17,0,0.34-0.04,0.5-0.13l7.95-4.59c0.48-0.28,0.64-0.89,0.37-1.37  s-0.89-0.64-1.37-0.37l-7.95,4.59C50.36,16.76,50.2,17.37,50.47,17.85z"], ["d", "M62.96,24.48l-9.17,0.4c-0.55,0.02-0.98,0.49-0.96,1.04c0.02,0.54,0.47,0.96,1,0.96c0.01,0,0.03,0,0.04,0l9.17-0.4  c0.55-0.02,0.98-0.49,0.96-1.04S63.5,24.48,62.96,24.48z"], ["d", "M44.66,11.77c0.17,0.11,0.35,0.16,0.54,0.16c0.33,0,0.65-0.16,0.84-0.46l4.94-7.74c0.3-0.47,0.16-1.08-0.31-1.38  c-0.46-0.3-1.08-0.16-1.38,0.31l-4.93,7.74C44.05,10.85,44.19,11.47,44.66,11.77z"], ["d", "M21.22,46.55l-5.28,3.05c-0.71,0.41-1.46,0.72-2.24,0.95c0.95,4.69,3.36,8.97,6.88,12.2c1.31,1.21,3.27,1.41,4.81,0.51  c0.04-0.02,0.07-0.04,0.11-0.06c2.25-1.3,2.76-4.35,1.02-6.27C23.89,54,22.06,50.42,21.22,46.55z"], ["d", "M34.34,26.7c-2.33-4.04-8.51-15.33-8.63-21.6c-2.04,2.65-3.06,7.04-4.45,10.81c-1.62,5.07-3.84,9.09-6.78,11.88l8.99,15.58  c3.88-1.15,8.48-1.06,13.67,0.07c3.95,0.68,8.26,1.98,11.57,1.55C42.94,41.38,35.32,28.39,34.34,26.7z"], ["d", "M28.32,2.97c-1.77,1.02,0.06,7.65,4.14,15.97c3.46-1.21,7.39,0.17,9.26,3.43c1.88,3.25,1.12,7.35-1.67,9.74  c5.19,7.75,10.06,12.7,11.83,11.67c2.23-1.29-1.24-11.47-7.75-22.74S30.55,1.68,28.32,2.97z"], ["d", "M38.98,30.4c1.89-1.8,2.36-4.71,1.02-7.03c-1.34-2.33-4.1-3.37-6.6-2.63c0.84,1.63,1.73,3.27,2.67,4.9  C37.01,27.27,37.99,28.87,38.98,30.4z"], [1, "kt-note-text"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "CRM Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "In Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " #1 Tool to get started with Web Apps any Kind& size ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 13)(17, "ul", 14)(18, "li")(19, "div", 15)(20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Add Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Add Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 7)(30, "div", 22)(31, "div", 23)(32, "div", 24)(33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Secondary Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 23)(38, "div", 24)(39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "29 Jan, 2023 - 31 Nov, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Project Duratioion");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 23)(44, "div", 24)(45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "29");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Sub Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 23)(50, "div", 24)(51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "SAR 8,454,00");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Budget Spent");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 23)(56, "div", 24)(57, "div", 25)(58, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "10 Hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "10 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 26)(64, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Allocated");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 28)(70, "div", 29)(71, "div", 30)(72, "div", 31)(73, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "( pending approval )");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, " Syed sayeeduddin Hussain");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "ul", 34)(83, "li", 35)(84, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, " Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "li", 35)(87, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, " Actions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "li", 35)(90, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, " Milestones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "li", 35)(93, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, " DMS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "li", 35)(96, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, " Portfolio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "li", 35)(99, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, " Files ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "li", 35)(102, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, " Timeline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "li", 35)(105, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, " Notes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "li", 35)(108, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, " Comments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "li", 35)(111, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, " Comments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "li", 35)(114, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, " People ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "li", 35)(117, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, " Meetings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "div", 39)(120, "div", 40)(121, "div", 41)(122, "div", 42)(123, "div", 43)(124, "div", 23)(125, "div", 24)(126, "div", 44)(127, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "svg", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](129, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "div", 48)(131, "div", 24)(132, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "Creative Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "div", 43)(137, "div", 23)(138, "div", 24)(139, "div", 44)(140, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "svg", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](142, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "div", 48)(144, "div", 24)(145, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, "Syed Sayeeduddin Hussain");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](148, "Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "div", 43)(150, "div", 23)(151, "div", 24)(152, "div", 44)(153, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "svg", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](155, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "div", 48)(157, "div", 24)(158, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](159, "Shaik Mohammad Rafi");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](161, "Responsible");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "div", 43)(163, "div", 23)(164, "div", 24)(165, "div", 44)(166, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "svg", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](168, "path", 54)(169, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "div", 48)(171, "div", 24)(172, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](173, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](175, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "div", 56)(177, "div", 57)(178, "div", 58)(179, "div", 59)(180, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](181, "Time Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "div", 60)(183, "div", 61)(184, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](185, "17 Jul ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](186, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](188, "08:42 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](189, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](190, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "div", 66)(192, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](193, "Project Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](194, " Outlines keep you honest. And keep structure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "div", 61)(196, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](197, "22 Jul ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](198, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](199, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](200, "11:42 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](201, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](202, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "div", 66)(204, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](205, "Sub task 01");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](206, " Rebrand strategy planning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](207, "div", 61)(208, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](209, "02 Aug ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](210, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](211, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](212, "10:42 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](213, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](214, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](215, "div", 66)(216, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](217, "Sub task 02");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](218, " Navigation optimization ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](219, "div", 61)(220, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](221, "08 Aug ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](222, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](223, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](224, "01:42 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](225, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](226, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](227, "div", 66)(228, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](229, "Sub task 03");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](230, " Indulging in poorly driving and keep structure keep great ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](231, "div", 70)(232, "div", 71)(233, "div", 72)(234, "h3", 73)(235, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](236, "Stats by Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](237, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](238, "8k social visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](239, "div", 76)(240, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](241, "PDF Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](242, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](243, " Hi2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](244, "div", 41)(245, "div", 56)(246, "div", 79)(247, "div", 80)(248, "div", 81)(249, "div", 82)(250, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](251, "svg", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](252, "g", 85)(253, "g", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](254, "g", 87)(255, "g", 88)(256, "g", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](257, "rect", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](258, "g", 91)(259, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](260, "rect", 92)(261, "rect", 93)(262, "rect", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](263, " Project Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](264, "div", 95)(265, "div", 96)(266, "div", 97)(267, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](268);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](269, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](270, DetailsComponent_div_270_Template, 2, 6, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](271, "div", 100)(272, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](273);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](274, "div", 101)(275, "div", 96)(276, "div", 82)(277, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](278, "svg", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](279, "g", 85)(280, "g", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](281, "g", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](282, "defs", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](283, "g", 104)(284, "g", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](285, "path", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](286, "g", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](287, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](288, "g", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](289, "path", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](290, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](291, "path", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](292, " Project States ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](293, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](294, DetailsComponent_div_294_Template, 2, 7, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](295, "div", 113)(296, "div", 114)(297, "div", 41)(298, "div", 115)(299, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](300, " Starting date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](301, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](302);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](303, "div", 115)(304, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](305, " Ending date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](306, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](307);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](308, "div", 115)(309, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](310, " Duration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](311, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](312);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](313, "div", 115)(314, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](315, " Allocated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](316, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](317);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](318, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](319, DetailsComponent_div_319_Template, 4, 9, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](320, DetailsComponent_div_320_Template, 5, 1, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](321, DetailsComponent_div_321_Template, 5, 1, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](322, DetailsComponent_div_322_Template, 5, 1, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](323, DetailsComponent_div_323_Template, 4, 2, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](324, DetailsComponent_div_324_Template, 26, 1, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](325, "div", 124)(326, "div", 79)(327, "div", 80)(328, "div", 125)(329, "div", 126)(330, "div", 127)(331, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](332, "img", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](333, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](334, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](335, "svg", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](336, "path", 132)(337, "path", 133)(338, "path", 134)(339, "path", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](340, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](341, "svg", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](342, "path", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](343, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](344, "svg", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](345, "path", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](346, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](347, "svg", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](348, "path", 141)(349, "path", 142)(350, "path", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](351, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](352, "svg", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](353, "path", 145)(354, "path", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](355, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](356, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](357, "svg", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](358, "path", 147)(359, "path", 148)(360, "path", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](361, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](362, "svg", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](363, "path", 150)(364, "path", 151)(365, "path", 152)(366, "path", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](367, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](368, "svg", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](369, "path", 155)(370, "path", 156)(371, "path", 157)(372, "path", 158)(373, "path", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](374, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](375, "svg", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](376, "path", 160)(377, "path", 161)(378, "path", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](379, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](380, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](381, "svg", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](382, "path", 164)(383, "path", 165)(384, "path", 166)(385, "path", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](386, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](387, "svg", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](388, "path", 168)(389, "path", 169)(390, "path", 170)(391, "path", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](392, DetailsComponent_ng_container_392_Template, 169, 12, "ng-container", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](393, DetailsComponent_ng_template_393_Template, 113, 17, "ng-template", null, 173, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](395, "div", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailsComponent_Template_div_click_395_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](396, "div", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](397, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](394);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](268);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.projectInformation && ctx.projectInformation.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.projectInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.projectInformation && ctx.projectInformation.projectDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.projectInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.projectInformation ? ctx.projectInformation.projectStartDate.getDate() + "-" + ctx.projectInformation.projectStartDate.getMonth() + "-" + ctx.projectInformation.projectStartDate.getFullYear() : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.projectInformation ? ctx.projectInformation.projectEndDate.getDate() + "-" + ctx.projectInformation.projectEndDate.getMonth() + "-" + ctx.projectInformation.projectEndDate.getFullYear() : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.projectInformation && ctx.projectInformation.projectDuration, " days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.projectInformation && ctx.projectInformation.projectAllocatedHours, " hrs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.projectInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.projectInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.projectInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.projectInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.projectInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.projectInformation && (ctx.projectInformation.projectType === "Core Tasks" || ctx.projectInformation.projectType === "Secondary Tasks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentActionView === undefined)("ngIfElse", _r9);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchDefault, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: [".card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\r\n    padding: 2rem 2.25rem;\r\n     color: var(--bs-card-color); \r\n}\r\n.py-9[_ngcontent-%COMP%] {\r\n    padding-top: 2.25rem!important;\r\n    padding-bottom: 2.25rem!important;\r\n}\r\n.pb-0[_ngcontent-%COMP%] {\r\n    padding-bottom: 0!important;\r\n}\r\n.flex-center[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.bg-light[_ngcontent-%COMP%] {\r\n    --bs-bg-rgb-color: 249,249,249;\r\n    background-color: #f5f5f5!important;\r\n}\r\n.h-lg-150px[_ngcontent-%COMP%] {\r\n    height: 150px!important;\r\n}\r\n.w-lg-150px[_ngcontent-%COMP%] {\r\n    width: 90px!important;\r\n}\r\n.rounded[_ngcontent-%COMP%] {\r\n    border-radius: 0.475rem!important;\r\n}\r\n.mw-lg-75px[_ngcontent-%COMP%] {\r\n    max-width: 75px!important;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    border: 1px solid #F1F1F2;\r\n    border-radius: 0.625rem;\r\n}\r\n.me-7[_ngcontent-%COMP%] {\r\n    margin-right: 1.75rem!important;\r\n}\r\n.mb-4[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem!important;\r\n}\r\n.flex-grow-1[_ngcontent-%COMP%] {\r\n    flex-grow: 1!important;\r\n}\r\n.mb-2[_ngcontent-%COMP%] {\r\n    margin-bottom: 0.5rem!important;\r\n}\r\n.align-items-start[_ngcontent-%COMP%] {\r\n    align-items: flex-start!important;\r\n}\r\n.justify-content-between[_ngcontent-%COMP%] {\r\n    justify-content: space-between!important;\r\n}\r\n.flex-wrap[_ngcontent-%COMP%] {\r\n    flex-wrap: wrap!important;\r\n}\r\n.d-flex[_ngcontent-%COMP%] {\r\n    display: flex!important;\r\n}\r\n.flex-column[_ngcontent-%COMP%] {\r\n    flex-direction: column!important;\r\n}\r\n.text-gray-800[_ngcontent-%COMP%] {\r\n    color: #252f4a!important;\r\n}\r\n.text-hover-primary[_ngcontent-%COMP%] {\r\n    transition: color .2s ease;\r\n}\r\n.fs-2[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem!important;\r\n}\r\n.fw-bold[_ngcontent-%COMP%] {\r\n    font-weight: 600!important;\r\n}\r\n.me-3[_ngcontent-%COMP%] {\r\n    margin-right: 0.75rem!important;\r\n}\r\n.badge-light-success[_ngcontent-%COMP%] {\r\n    color: #50cd89;\r\n    background-color: #e8fff3;\r\n}\r\n.badge[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n}\r\n.me-auto[_ngcontent-%COMP%] {\r\n    margin-right: auto!important;\r\n}\r\n.text-gray-400[_ngcontent-%COMP%] {\r\n    color: #b5b5c3!important;\r\n}\r\n.fw-semibold[_ngcontent-%COMP%] {\r\n    font-weight: 500!important;\r\n}\r\n.fs-5[_ngcontent-%COMP%] {\r\n    font-size: 1.15rem!important;\r\n}\r\n.btn.btn-sm.btn-bg-light[_ngcontent-%COMP%] {\r\n    background-color: #f1f1f2;\r\n}\r\n.min-w-125px[_ngcontent-%COMP%] {\r\n    min-width: 125px!important;\r\n}\r\n.rounded[_ngcontent-%COMP%] {\r\n    border-radius: 0.475rem!important;\r\n}\r\n.py-3[_ngcontent-%COMP%] {\r\n    padding-top: 0.75rem!important;\r\n    padding-bottom: 0.75rem!important;\r\n}\r\n.px-4[_ngcontent-%COMP%] {\r\n    padding-right: 1rem!important;\r\n    padding-left: 1rem!important;\r\n}\r\n.mb-3[_ngcontent-%COMP%] {\r\n    margin-bottom: 0.75rem!important;\r\n}\r\n.me-6[_ngcontent-%COMP%] {\r\n    margin-right: 1.5rem!important;\r\n}\r\n.border[_ngcontent-%COMP%] {\r\n    border: 1px solid #F1F1F2 !important;\r\n}\r\n.border-dashed[_ngcontent-%COMP%] {\r\n    border-style: dashed!important;\r\n    border-color: #dbdfe9;\r\n}\r\n.border-gray-300[_ngcontent-%COMP%] {\r\n    border-color: #dbdfe9!important;\r\n}\r\n\r\n.fw-semi-lt[_ngcontent-%COMP%] {\r\n    color: #8f8f8f;\r\n    margin-top: 3px;\r\n}\r\n.fw-stl[_ngcontent-%COMP%] {\r\n    color:#4d5aa1;\r\n    font-weight: 600;\r\n}\r\n.skills-bar-container[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    min-width: 170px;\r\n    list-style: none;\r\n    padding-left: 0px;\r\n    margin-right: 10px;\r\n    border-right: 1px dashed #ccc;\r\n    padding-right: 10px;\r\n  }\r\n.skills-bar-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 1px;\r\n    \r\n  }\r\n.skills-bar-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .progressbar-title[_ngcontent-%COMP%] {\r\n    color: #5867dd;\r\n  }\r\n.skills-bar-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .progressbar-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n.skills-bar-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .progressbar-title[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 5px;\r\n  }\r\n.skills-bar-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%] {\r\n    background: #dde1ff;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 5px;\r\n    margin-top: 5px;\r\n    display: block;\r\n    border-radius: 5px;\r\n  }\r\n.skills-bar-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .progressbar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 0%;\r\n    height: 100%;\r\n    border-radius: 5px;\r\n    animation-duration: 2s;\r\n    animation-timing-function: ease-out;\r\n    animation-fill-mode: both;\r\n  }\r\n.skills-bar-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   #progress-html[_ngcontent-%COMP%] {\r\n    animation-name: progress-html;\r\n    animation-delay: 0.7s;\r\n  }\r\n.skills-bar-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   #progress-css[_ngcontent-%COMP%] {\r\n    animation-name: progress-css;\r\n    animation-delay: 1.4s;\r\n  }\r\n.skills-bar-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   #progress-javascript[_ngcontent-%COMP%] {\r\n    animation-name: progress-javascript;\r\n    animation-delay: 2.1s;\r\n  }\r\n.skills-bar-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   #progress-php[_ngcontent-%COMP%] {\r\n    animation-name: progress-php;\r\n    animation-delay: 2.8s;\r\n  }\r\n.skills-bar-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   #progress-angular[_ngcontent-%COMP%] {\r\n    animation-name: progress-angular;\r\n    animation-delay: 3.5s;\r\n  }\r\n.progressred[_ngcontent-%COMP%] {\r\n    background-color: #c0392b;\r\n  }\r\n.progressblue[_ngcontent-%COMP%] {\r\n    background-color: #1199ff;\r\n  }\r\n.progresspurple[_ngcontent-%COMP%] {\r\n    background-color: #9b59b6;\r\n  }\r\n.progressorange[_ngcontent-%COMP%] {\r\n    background-color: #ffa500;\r\n  }\r\n.progressgreen[_ngcontent-%COMP%] {\r\n    background-color: #27ae60;\r\n  }\r\n@keyframes progress-html {\r\n    0% {\r\n      width: 0%;\r\n    }\r\n    100% {\r\n      width: 100%;\r\n    }\r\n  }\r\n@keyframes progress-css {\r\n    0% {\r\n      width: 0%;\r\n    }\r\n    100% {\r\n      width: 90%;\r\n    }\r\n  }\r\n@keyframes progress-javascript {\r\n    0% {\r\n      width: 0%;\r\n    }\r\n    100% {\r\n      width: 70%;\r\n    }\r\n  }\r\n@keyframes progress-php {\r\n    0% {\r\n      width: 0%;\r\n    }\r\n    100% {\r\n      width: 55%;\r\n    }\r\n  }\r\n@keyframes progress-angular {\r\n    0% {\r\n      width: 0%;\r\n    }\r\n    100% {\r\n      width: 65%;\r\n    }\r\n  }\r\n.text-danger-glow[_ngcontent-%COMP%] {\r\n    color: #ff4141;\r\n    text-shadow: 0 0 20px #f00, 0 0 30px #f00, 0 0 40px #f00, 0 0 50px #f00, 0 0 60px #f00, 0 0 70px #f00, 0 0 80px #f00;\r\n    font-size: 8px;\r\n    position: relative;\r\n    top: -1px;\r\n  }\r\n.blink[_ngcontent-%COMP%] {\r\n    animation: blinker 1s cubic-bezier(.5, 0, 1, 1) infinite alternate;  \r\n  }\r\n@keyframes blinker {  \r\n    from { opacity: 1; }\r\n    to { opacity: 0; }\r\n  }\r\n.kt-un-apr[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 5px;\r\n   \r\n}\r\n.kt-Status[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #fff3f3;\r\n    border-radius: 5px;\r\n    padding: 3px 5px;\r\n}\r\nspan.wd-xv[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 49px;\r\n}\r\n.me-8[_ngcontent-%COMP%] {\r\n    margin-right: 1rem;\r\n}\r\n\r\n.separator[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 0;\r\n    border-bottom: 1px solid #f1f1f2;\r\n}\r\n.nav-line-tabs.nav-line-tabs-2x[_ngcontent-%COMP%] {\r\n    border-bottom-width: 2px;\r\n}\r\n.border-transparent[_ngcontent-%COMP%] {\r\n    border-color: transparent!important;\r\n}\r\n.nav-line-tabs[_ngcontent-%COMP%] {\r\n    border-bottom-width: 1px;\r\n    border-bottom-style: solid;\r\n    border-bottom-color: #f1f1f2;\r\n}\r\n.nav-stretch[_ngcontent-%COMP%] {\r\n    align-items: stretch;\r\n    padding-top: 0!important;\r\n    padding-bottom: 0!important;\r\n}\r\n.fw-bold[_ngcontent-%COMP%] {\r\n    font-weight: 600!important;\r\n}\r\n.fs-5[_ngcontent-%COMP%] {\r\n    font-size: 1.15rem!important;\r\n}\r\n.nav[_ngcontent-%COMP%] {\r\n    --bs-nav-link-padding-x: 1rem;\r\n    --bs-nav-link-padding-y: 0.5rem;\r\n    --bs-nav-link-color: #3e97ff;\r\n    --bs-nav-link-hover-color: #0095e8;\r\n    --bs-nav-link-disabled-color: rgb(6 18 49 / 75%);\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding-left: 0;\r\n    margin-bottom: 0;\r\n    list-style: none;\r\n}\r\n.nav-line-tabs.nav-line-tabs-2x[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n    margin-bottom: -2px;\r\n}\r\n.nav-line-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n    margin-bottom: -1px;\r\n}\r\n.nav-stretch[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: stretch;\r\n    padding-top: 0!important;\r\n    padding-bottom: 0!important;\r\n}\r\n.fs-5[_ngcontent-%COMP%] {\r\n    font-size: 1.15rem!important;\r\n}\r\n.nav-line-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    color: #777;\r\n    border: 0;\r\n    border-bottom: 1px solid transparent;\r\n    font-weight: 400;\r\n    transition: color .2s ease;\r\n    padding: 0.5rem 0;\r\n    margin: 0 1rem;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n}\r\n.text-active-primary.active[_ngcontent-%COMP%] {\r\n    transition: color .2s ease;\r\n    color: #3e97ff!important;\r\n}\r\n.nav-stretch[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.py-5[_ngcontent-%COMP%] {\r\n    padding-top: 1.25rem!important;\r\n    padding-bottom: 1.25rem!important;\r\n}\r\n.nav-line-tabs.nav-line-tabs-2x[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{\r\n  border-bottom-width: 2px;background-color: transparent;\r\n  border: 0;\r\n  border-bottom: 1px solid #3e97ff;\r\n  transition: color .2s ease;font-weight: 600;\r\n}\r\n.nav-line-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:first-child   .nav-link[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n}\r\n.kt-dl-icon[_ngcontent-%COMP%] {\r\n  margin-right: 1rem;\r\n  border-right: 1px dashed #dbdfe9;\r\n  padding-right: 1rem;\r\n}\r\nspan.kt-svg-ic[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  fill: #9b59b6;\r\n}\r\n\r\n.card1[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.card1.active[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.timeline-label[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.timeline-label[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 51px;\r\n  width: 3px;\r\n  top: 0;\r\n  bottom: 0;\r\n  background-color: #f1f1f2;\r\n}\r\n.timeline-label[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  position: relative;\r\n  margin-bottom: 1.7rem;\r\n}\r\n.timeline-label[_ngcontent-%COMP%]   .timeline-label[_ngcontent-%COMP%] {\r\n  width: 65px;\r\n  flex-shrink: 0;\r\n  position: relative;\r\n  color: #252f4a;line-height: 13px;\r\n}\r\n.fw-bold[_ngcontent-%COMP%] {\r\n  font-weight: 600!important;\r\n}\r\n.timeline-label[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 66px;\r\n  width: 3px;\r\n  top: 0;\r\n  bottom: 0;\r\n  background-color: #f1f1f2;\r\n}\r\n.timeline-label[_ngcontent-%COMP%]   .timeline-badge[_ngcontent-%COMP%] {\r\n  flex-shrink: 0;\r\n  background-color: #ffffff;\r\n  width: 1rem;\r\n  height: 1rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 1;\r\n  position: relative;\r\n  margin-top: 1px;\r\n  margin-left: -0.5rem;\r\n  padding: 3px!important;\r\n  border: 6px solid #ffffff!important;\r\n}\r\n.text-warning[_ngcontent-%COMP%] {\r\n  color: #ffc700!important;\r\n}\r\n.fs-1[_ngcontent-%COMP%] {\r\n  font-size: 1.75rem!important;\r\n}\r\n.timeline-label[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\r\n  flex-grow: 1;\r\n}\r\n.text-muted[_ngcontent-%COMP%] {\r\n  color: #99a1b7!important;\r\n}\r\n.ps-3[_ngcontent-%COMP%] {\r\n  padding-left: 0.75rem!important;\r\n}\r\n.text-success[_ngcontent-%COMP%] {\r\n  color: #50cd89!important;\r\n}\r\n.text-danger[_ngcontent-%COMP%] {\r\n  color: #f1416c!important;\r\n}\r\n.text-primary[_ngcontent-%COMP%] {\r\n  color: #009ef7!important;\r\n}\r\nspan.kt-dt-l[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n  color: #a5a5a5;\r\n}\r\n.kt-ct-sub-ttl[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n\r\n.card-header-ovr[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\n.kt-title-icon[_ngcontent-%COMP%] {\r\n  background-color: #527ce2;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50px;\r\n  display: flex;\r\n  margin-right: 1rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.kt-info-box-tittle[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 15px;\r\n  color: #6388e3;\r\n  font-weight: 400;\r\n  margin-bottom: 10px;    letter-spacing: 0.5px;\r\n}\r\n.kt-project-type[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.Kt-Pd-Status[_ngcontent-%COMP%] {\r\n  background-color: #000;\r\n  color: #fff;\r\n  margin: 0px 10px;\r\n  margin-left: 1rem;\r\n  font-weight: 600;\r\n  padding: 6px 13px; \r\n     max-width: 140px;\r\n  min-width: 130px;\r\n  margin-right: 0px;\r\n}\r\n.Core_task[_ngcontent-%COMP%] {\r\n  background-image:linear-gradient(#ffc43a,#e9af29);\r\n}\r\n.Secondary_task[_ngcontent-%COMP%]{\r\n  background-image:linear-gradient(#0095e8,#00669c);\r\n  \r\n}\r\n.Todo_task[_ngcontent-%COMP%]{\r\n  background-image: linear-gradient( rgb(226, 226, 4), rgb(196, 196, 11));\r\n}\r\n.kt-project-name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: #181818;\r\n  font-weight: 700;\r\n}\r\n.kt-project-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #999999;\r\n  font-weight: 400;\r\n}\r\n.kt-project-desc[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n}\r\n.kt-info-box[_ngcontent-%COMP%] {\r\n  padding: 10px 10px;\r\n  border-bottom: 1px solid #ededed;\r\n  padding-right: 0px;\r\n  border: 1px solid #ededed;\r\n}\r\n.More_info[_ngcontent-%COMP%] {\r\n  background-color: #4574fe !important;\r\n}\r\n.kt-info-lable-v[_ngcontent-%COMP%] {\r\n  color: #939393;\r\n  letter-spacing: 0.3px;\r\n  font-size: 14px;\r\n}\r\n.kt-info-data-v[_ngcontent-%COMP%] {\r\n  background-color: #f0f0f0;\r\n  border-radius: 35px;\r\n  padding: 5px 4px;\r\n  font-weight: 500;\r\n  color: #4f4f4f;\r\n  margin-top: 10px;\r\n}\r\n.kt-client-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  border-radius: 50px;\r\n}\r\n.kt-client-icon[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n.bg-light-shade[_ngcontent-%COMP%] {\r\n  background-color: #eaf2fd !important;\r\n}\r\n.Delay[_ngcontent-%COMP%]{\r\n  background-color: #Ed6207 !important;\r\n}\r\n.kt-project-sts-data[_ngcontent-%COMP%] {\r\n  margin-top: 17px;\r\n  color: #3b3b3b;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n}\r\n.progress.kt-projcect-progress.bar[_ngcontent-%COMP%] {\r\n  border-radius: 50px;\r\n  height: 10px;\r\n}\r\n.bg-inprogress[_ngcontent-%COMP%] {\r\n  background-color: #505050;\r\n}\r\n.bg-delay[_ngcontent-%COMP%] {\r\n  background-color: #Ed6207;\r\n}\r\n.bg-done[_ngcontent-%COMP%] {\r\n  background-color: #6aad3a;\r\n}\r\n.bg-rejected[_ngcontent-%COMP%]{\r\n   background-color: rgb(255, 210, 210);\r\n   color:rgb(204, 11, 11);\r\n\r\n}\r\n.kt-prg-bar-info[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  color: #3d3d3d;\r\n}\r\n.kt-prg-bar-info[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  margin-right: 5px;\r\n}\r\n.kt-total-prg-vl[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  font-size: 18px !important;\r\n    margin-right: 0px;\r\n}\r\n.Deadline_Extend[_ngcontent-%COMP%]{\r\n  background-color: #f48383;\r\n}\r\nbutton.Kt-Approval-btns[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 3px 5px;\r\n  border-radius: 50px;\r\n  background-color: #fff;\r\n  color: #4f4f4f;\r\n  border: 2px solid #fff;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n}\r\n.Btn_Accpet[_ngcontent-%COMP%] {\r\n  border-color: #8ab991 !important;\r\n}\r\n.Btn_Edit_Accept[_ngcontent-%COMP%] {\r\n  border-color: #7caccd !important;\r\n}\r\n.Btn_Conditional_Accept[_ngcontent-%COMP%] {\r\n  border-color: #407f4c !important;\r\n}\r\n.Btn_Reject[_ngcontent-%COMP%] {\r\n  border-color: #cf8e66 !important;\r\n}\r\n.kt-approval-msg[_ngcontent-%COMP%] {\r\n  background-color: #f0f0f0;\r\n  padding: 10px;\r\n  border-radius: 6px;\r\n  min-height: 85px;\r\n}\r\n.text-end[_ngcontent-%COMP%] {\r\n  text-align: end;\r\n}\r\n.btn-project-stv[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  background-color: #f0f0f0;\r\n}\r\n.Bt-Submit[_ngcontent-%COMP%] {\r\n  background-color: #878787;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  letter-spacing: 0.5px;\r\n}\r\n.kt-info-pg-footer[_ngcontent-%COMP%] {\r\n  margin: 5px 10px;\r\n}\r\n.Add_Action_btn[_ngcontent-%COMP%] {\r\n  background-color: #737373 !important;\r\n}\r\n.kt-p-box[_ngcontent-%COMP%] {\r\n  padding: 10px 10px;\r\n  background-color: #f6f6f6;\r\n}\r\n.kt-action-p-tittle[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  color: #5d5d5d;\r\n}\r\n.kt-action-p-tittle[_ngcontent-%COMP%] {\r\n  margin-bottom: 11px;\r\n}\r\n.Status-done[_ngcontent-%COMP%]{\r\n  color: #6aad3a;\r\n}\r\nspan.Status-Delay[_ngcontent-%COMP%] {\r\n  color: #Ed6207;\r\n}\r\n.Status-In-progress[_ngcontent-%COMP%] {\r\n  color: #393939;\r\n}\r\n.kt-p-action-No[_ngcontent-%COMP%] {\r\n  margin-bottom: 6px;\r\n  font-weight: 600;\r\n  color: #526dd6;\r\n  text-transform: capitalize;\r\n  font-size: 14px;\r\n}\r\n.kt-p-action-Status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n}\r\n.kt-projcect-act-list[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n.kt-projcect-act-list[_ngcontent-%COMP%]:last-child {\r\n  margin-bottom:0px;\r\n}\r\n.Action-Active[_ngcontent-%COMP%]   .kt-p-box[_ngcontent-%COMP%] {\r\n  background-color: #ebf1ff !important;\r\n}\r\n.kt-projcect-act-list.Action-Active[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  right: -12px;\r\n  top: 0;\r\n  border-top: 35px solid transparent;\r\n  border-bottom: 35px solid transparent;\r\n  border-left: 12px solid #ebf1ff;\r\n  z-index: 9999999;\r\n}\r\n.Active[_ngcontent-%COMP%]   .kt-p-box[_ngcontent-%COMP%]{\r\n  background-color: rgb(216, 239, 255);\r\n  transition-duration:0.4s;\r\n  transition-timing-function:cubic-bezier(0.86, 0, 0.07, 1);\r\n  \r\n}\r\n.kt-projcect-act-list.Action-Active[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  \r\n}\r\n.kt-project-action-list-view[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  height:40vh;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  padding:10px;\r\n}\r\n.kt-project-action-list-view[_ngcontent-%COMP%]::-webkit-scrollbar{ width:9px;   }\r\n.kt-project-action-list-view[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{ background-color:#8cabfa;  border-radius: 50px;  }\r\n.kt-project-action-list-view[_ngcontent-%COMP%]::-webkit-scrollbar-track{ background-color:#e9ebee;  border-radius: 50px;  }\r\n\r\n.br-line[_ngcontent-%COMP%] {\r\n  border-left: 1px solid rgb(100 121 143 / 33%);\r\n  height: 20px;\r\n  margin: 0 2px;\r\n}\r\n.kt-inbox__icon[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.kt-inbox__icon[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background: none;\r\n  box-shadow: none;\r\n  outline: none!important;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 35px;\r\n  width: 35px;\r\n  transition: all .3s ease;\r\n  cursor: pointer;\r\n  margin: 0;\r\n  border-radius: 4px;\r\n}\r\n.kt-inbox__icon[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\r\n.kt-project-tool-bar[_ngcontent-%COMP%] {\r\n  background-color: #f6f6f6;\r\n  padding: 10px;\r\n}\r\n.gap_ic[_ngcontent-%COMP%] {\r\n  gap: 1px;\r\n}\r\n.kt-note-icon[_ngcontent-%COMP%] {\r\n  width: 40px;\r\n  height: 40px;\r\n  background: rgb(233,15,15);\r\n  background: linear-gradient(6deg, rgba(233,15,15,1) 0%, rgba(222,21,11,1) 0%, rgb(253, 126, 122) 69%);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 10px;\r\n  border-radius: 50px;\r\n}\r\n.kt-Note-msg[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 10px;\r\n  background-color: #fd7e7a38;\r\n  margin-top: 10px;\r\n}\r\n.kt-note-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  fill: #fff;\r\n}\r\n.kt-note-text[_ngcontent-%COMP%] {\r\n  margin-left: 14px;\r\n  font-size: 14px;\r\n  padding-right: 10px;\r\n  color: #cb1910;\r\n}\r\n.kt-project-desc.w-80[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n  margin-top: 0px;\r\n}\r\n\r\n.symbol-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  margin-left: 10px;\r\n}\r\n.symbol[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  flex-shrink: 0;\r\n  position: relative;\r\n  border-radius: 0.475rem;\r\n}\r\n.flex-nowrap[_ngcontent-%COMP%] {\r\n  flex-wrap: nowrap!important;\r\n}\r\n.symbol-group.symbol-hover[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n.symbol-group[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 0;\r\n  margin-left: -10px;\r\n  transition: all .3s ease;\r\n}\r\n.symbol.symbol-circle[_ngcontent-%COMP%], .symbol.symbol-circle[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%], .symbol.symbol-circle[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n.symbol[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: 500;\r\n  color: #252f4a;\r\n  background-color: #f9f9f9;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  border-radius: 0.475rem;\r\n}\r\n.text-inverse-warning[_ngcontent-%COMP%] {\r\n  color: #ffffff!important;\r\n}\r\n.bg-warning[_ngcontent-%COMP%] {\r\n  --bs-bg-rgb-color: rgba(255,199,0);\r\n  background-color: #ffc700!important;\r\n}\r\n.fw-bold[_ngcontent-%COMP%] {\r\n  font-weight: 600!important;\r\n}\r\n.symbol[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n.symbol-group[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.symbol.symbol-35px[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%] {\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n.symbol-group.symbol-hover[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n.symbol[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%]:after {\r\n  border-radius: 0.475rem;\r\n}\r\n.symbol-group[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%]:after {\r\n  display: block;\r\n  content: \" \";\r\n  border-radius: inherit;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  border: 2px solid #fff;\r\n  -webkit-background-clip: padding-box;\r\n  background-clip: padding-box;\r\n}\r\n.bg-primary[_ngcontent-%COMP%] {\r\n  --bs-bg-rgb-color: rgba(62,151,255);\r\n  background-color: #3e97ff!important;\r\n}\r\n.text-inverse-primary[_ngcontent-%COMP%] {\r\n  color: #ffffff!important;\r\n}\r\n.symbol.symbol-35px[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n.text-inverse-danger[_ngcontent-%COMP%] {\r\n  color: #ffffff!important;\r\n}\r\n.text-gray-300[_ngcontent-%COMP%] {\r\n  color: #dbdfe9!important;\r\n}\r\nlabel.my-chosse-flv[_ngcontent-%COMP%] {\r\n  min-height: 55px !important;\r\n  background-color: #e1e1e1;\r\n  cursor: pointer;\r\n}\r\n.my-chosse-flv[_ngcontent-%COMP%]   .formbold-drop-file[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-weight: 400;\r\n  color: #717171;\r\n  text-transform: capitalize;\r\n  letter-spacing: 0.5px;\r\n  line-height: 12px;\r\n  font-size: 16px;\r\n  margin-bottom: 0;\r\n}\r\n.right-side-act[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n  border-left: 3px solid #d9d9d9;\r\n  height: calc(100vh - 117px);\r\n  overflow: auto;\r\n}\r\n.kt-action-list[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n}\r\n.Act-tittle-Right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  text-transform: capitalize;\r\n  font-weight: 600;\r\n}\r\n.Act-tittle-Right[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #ccc;\r\n  margin-bottom: 10px;\r\n  padding-bottom: 9px;\r\n}\r\n.kt-right-style[_ngcontent-%COMP%] {\r\n  padding-left: 15px;\r\n  border-left: 3px solid #d9d9d9;\r\n}\r\n.Dividing-line[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n  height: 1px;\r\n  background-color: #ededed;\r\n}\r\n.kt-ct-sub-ttl[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  color: #a1a1a1;\r\n  font-weight: 600;\r\n}\r\n.bd-right-x[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  width: 1px;\r\n  height: 100%;\r\n  position: absolute;\r\n  right: -7px;\r\n  background-color: #dfdfdf;\r\n  top: 35px;\r\n}\r\n.kt-over-pd-in.bd-right-x[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding-right: 20px;\r\n}\r\n\r\n.chart[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-height: 292px;\r\n  overflow: hidden;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 999;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: #ffffff;\r\n  border-left: 1px solid #edeae9;\r\n  box-shadow: 0 1px 9px -3px rgb(0 0 0 / 75%);\r\n  transition: transform 0.2s ease-in;\r\n  overflow-x: hidden;\r\n  color: #212529; \r\n}\n/*# sourceMappingURL=data:application/json;base64,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LGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjtBQUFDO0VBQ0MsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixTQUFTO0FBQ1g7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQSwrQkFBK0I7QUFDL0I7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUVBLGdDQUFnQztBQUloQztFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsZUFBZTtFQUNmLFlBQVk7RUFDWixNQUFNO0VBQ04sUUFBUTtFQUNSLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsMkNBQTJDO0VBQzNDLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQiIsImZpbGUiOiJkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMi4yNXJlbTtcclxuICAgICBjb2xvcjogdmFyKC0tYnMtY2FyZC1jb2xvcik7IFxyXG59XHJcbi5weS05IHtcclxuICAgIHBhZGRpbmctdG9wOiAyLjI1cmVtIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyLjI1cmVtIWltcG9ydGFudDtcclxufVxyXG4ucGItMCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCFpbXBvcnRhbnQ7XHJcbn1cclxuLmZsZXgtY2VudGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufS5iZy1saWdodCB7XHJcbiAgICAtLWJzLWJnLXJnYi1jb2xvcjogMjQ5LDI0OSwyNDk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1IWltcG9ydGFudDtcclxufS5oLWxnLTE1MHB4IHtcclxuICAgIGhlaWdodDogMTUwcHghaW1wb3J0YW50O1xyXG59LnctbGctMTUwcHgge1xyXG4gICAgd2lkdGg6IDkwcHghaW1wb3J0YW50O1xyXG59LnJvdW5kZWQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC40NzVyZW0haW1wb3J0YW50O1xyXG59Lm13LWxnLTc1cHgge1xyXG4gICAgbWF4LXdpZHRoOiA3NXB4IWltcG9ydGFudDtcclxufS5jYXJkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMUYxRjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxufS5tZS03IHtcclxuICAgIG1hcmdpbi1yaWdodDogMS43NXJlbSFpbXBvcnRhbnQ7XHJcbn0ubWItNCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtIWltcG9ydGFudDtcclxufS5mbGV4LWdyb3ctMSB7XHJcbiAgICBmbGV4LWdyb3c6IDEhaW1wb3J0YW50O1xyXG59Lm1iLTIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtIWltcG9ydGFudDtcclxufS5hbGlnbi1pdGVtcy1zdGFydCB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCFpbXBvcnRhbnQ7XHJcbn0uanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIWltcG9ydGFudDtcclxufS5mbGV4LXdyYXAge1xyXG4gICAgZmxleC13cmFwOiB3cmFwIWltcG9ydGFudDtcclxufS5kLWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XHJcbn0uZmxleC1jb2x1bW4ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiFpbXBvcnRhbnQ7XHJcbn0udGV4dC1ncmF5LTgwMCB7XHJcbiAgICBjb2xvcjogIzI1MmY0YSFpbXBvcnRhbnQ7XHJcbn0udGV4dC1ob3Zlci1wcmltYXJ5IHtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlO1xyXG59LmZzLTIge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW0haW1wb3J0YW50O1xyXG59LmZ3LWJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCFpbXBvcnRhbnQ7XHJcbn0ubWUtMyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW0haW1wb3J0YW50O1xyXG59XHJcbi5iYWRnZS1saWdodC1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiAjNTBjZDg5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZmZmMztcclxufS5iYWRnZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0ubWUtYXV0byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8haW1wb3J0YW50O1xyXG59LnRleHQtZ3JheS00MDAge1xyXG4gICAgY29sb3I6ICNiNWI1YzMhaW1wb3J0YW50O1xyXG59LmZ3LXNlbWlib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAhaW1wb3J0YW50O1xyXG59LmZzLTUge1xyXG4gICAgZm9udC1zaXplOiAxLjE1cmVtIWltcG9ydGFudDtcclxufVxyXG4uYnRuLmJ0bi1zbS5idG4tYmctbGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMjtcclxufVxyXG4ubWluLXctMTI1cHgge1xyXG4gICAgbWluLXdpZHRoOiAxMjVweCFpbXBvcnRhbnQ7XHJcbn0ucm91bmRlZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjQ3NXJlbSFpbXBvcnRhbnQ7XHJcbn0ucHktMyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMC43NXJlbSFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbSFpbXBvcnRhbnQ7XHJcbn0ucHgtNCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbSFpbXBvcnRhbnQ7XHJcbn0ubWItMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtIWltcG9ydGFudDtcclxufS5tZS02IHtcclxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtIWltcG9ydGFudDtcclxufVxyXG4uYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMUYxRjIgIWltcG9ydGFudDtcclxufVxyXG4uYm9yZGVyLWRhc2hlZCB7XHJcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNkYmRmZTk7XHJcbn0uYm9yZGVyLWdyYXktMzAwIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2RiZGZlOSFpbXBvcnRhbnQ7XHJcbn1cclxuLyogLmR0bC1iZy1saWdodC12e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuLmZ3LXNlbWktbHQge1xyXG4gICAgY29sb3I6ICM4ZjhmOGY7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuLmZ3LXN0bCB7XHJcbiAgICBjb2xvcjojNGQ1YWExO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuXHJcbi5za2lsbHMtYmFyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWluLXdpZHRoOiAxNzBweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCAjY2NjO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLnNraWxscy1iYXItY29udGFpbmVyIGxpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIC5za2lsbHMtYmFyLWNvbnRhaW5lciBsaSAucHJvZ3Jlc3NiYXItdGl0bGUge1xyXG4gICAgY29sb3I6ICM1ODY3ZGQ7XHJcbiAgfVxyXG4gIC5za2lsbHMtYmFyLWNvbnRhaW5lciBsaSAucHJvZ3Jlc3NiYXItdGl0bGUgaDMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAuc2tpbGxzLWJhci1jb250YWluZXIgbGkgLnByb2dyZXNzYmFyLXRpdGxlIC5wZXJjZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5za2lsbHMtYmFyLWNvbnRhaW5lciBsaSAuYmFyLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRlMWZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIC5za2lsbHMtYmFyLWNvbnRhaW5lciBsaSAuYmFyLWNvbnRhaW5lciAucHJvZ3Jlc3NiYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICB9XHJcbiAgLnNraWxscy1iYXItY29udGFpbmVyIGxpIC5iYXItY29udGFpbmVyICNwcm9ncmVzcy1odG1sIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHByb2dyZXNzLWh0bWw7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcHJvZ3Jlc3MtaHRtbDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xyXG4gIH1cclxuICAuc2tpbGxzLWJhci1jb250YWluZXIgbGkgLmJhci1jb250YWluZXIgI3Byb2dyZXNzLWNzcyB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBwcm9ncmVzcy1jc3M7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcHJvZ3Jlc3MtY3NzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuNHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuNHM7XHJcbiAgfVxyXG4gIC5za2lsbHMtYmFyLWNvbnRhaW5lciBsaSAuYmFyLWNvbnRhaW5lciAjcHJvZ3Jlc3MtamF2YXNjcmlwdCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBwcm9ncmVzcy1qYXZhc2NyaXB0O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHByb2dyZXNzLWphdmFzY3JpcHQ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMi4xcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMi4xcztcclxuICB9XHJcbiAgLnNraWxscy1iYXItY29udGFpbmVyIGxpIC5iYXItY29udGFpbmVyICNwcm9ncmVzcy1waHAge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcHJvZ3Jlc3MtcGhwO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHByb2dyZXNzLXBocDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyLjhzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAyLjhzO1xyXG4gIH1cclxuICAuc2tpbGxzLWJhci1jb250YWluZXIgbGkgLmJhci1jb250YWluZXIgI3Byb2dyZXNzLWFuZ3VsYXIge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcHJvZ3Jlc3MtYW5ndWxhcjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBwcm9ncmVzcy1hbmd1bGFyO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMuNXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDMuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ncmVzc3JlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiO1xyXG4gIH1cclxuICBcclxuICAucHJvZ3Jlc3NibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTk5ZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ncmVzc3B1cnBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWI1OWI2O1xyXG4gIH1cclxuICBcclxuICAucHJvZ3Jlc3NvcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTUwMDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2dyZXNzZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3YWU2MDtcclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHByb2dyZXNzLWh0bWwge1xyXG4gICAgMCUge1xyXG4gICAgICB3aWR0aDogMCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBwcm9ncmVzcy1jc3Mge1xyXG4gICAgMCUge1xyXG4gICAgICB3aWR0aDogMCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHByb2dyZXNzLWphdmFzY3JpcHQge1xyXG4gICAgMCUge1xyXG4gICAgICB3aWR0aDogMCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHByb2dyZXNzLXBocCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHdpZHRoOiAwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB3aWR0aDogNTUlO1xyXG4gICAgfVxyXG4gIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgcHJvZ3Jlc3MtYW5ndWxhciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHdpZHRoOiAwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB3aWR0aDogNjUlO1xyXG4gICAgfVxyXG4gIH1cclxuICBALW1vei1rZXlmcmFtZXMgcHJvZ3Jlc3MtaHRtbCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHdpZHRoOiAwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgQC1tb3ota2V5ZnJhbWVzIHByb2dyZXNzLWNzcyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHdpZHRoOiAwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBALW1vei1rZXlmcmFtZXMgcHJvZ3Jlc3MtamF2YXNjcmlwdCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHdpZHRoOiAwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBALW1vei1rZXlmcmFtZXMgcHJvZ3Jlc3MtcGhwIHtcclxuICAgIDAlIHtcclxuICAgICAgd2lkdGg6IDAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEAtbW96LWtleWZyYW1lcyBwcm9ncmVzcy1hbmd1bGFyIHtcclxuICAgIDAlIHtcclxuICAgICAgd2lkdGg6IDAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgcHJvZ3Jlc3MtaHRtbCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHdpZHRoOiAwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBwcm9ncmVzcy1jc3Mge1xyXG4gICAgMCUge1xyXG4gICAgICB3aWR0aDogMCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBwcm9ncmVzcy1qYXZhc2NyaXB0IHtcclxuICAgIDAlIHtcclxuICAgICAgd2lkdGg6IDAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgcHJvZ3Jlc3MtcGhwIHtcclxuICAgIDAlIHtcclxuICAgICAgd2lkdGg6IDAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgcHJvZ3Jlc3MtYW5ndWxhciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHdpZHRoOiAwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB3aWR0aDogNjUlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtZGFuZ2VyLWdsb3cge1xyXG4gICAgY29sb3I6ICNmZjQxNDE7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDIwcHggI2YwMCwgMCAwIDMwcHggI2YwMCwgMCAwIDQwcHggI2YwMCwgMCAwIDUwcHggI2YwMCwgMCAwIDYwcHggI2YwMCwgMCAwIDcwcHggI2YwMCwgMCAwIDgwcHggI2YwMDtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMXB4O1xyXG4gIH1cclxuICBcclxuICAuYmxpbmsge1xyXG4gICAgYW5pbWF0aW9uOiBibGlua2VyIDFzIGN1YmljLWJlemllciguNSwgMCwgMSwgMSkgaW5maW5pdGUgYWx0ZXJuYXRlOyAgXHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgYmxpbmtlciB7ICBcclxuICAgIGZyb20geyBvcGFjaXR5OiAxOyB9XHJcbiAgICB0byB7IG9wYWNpdHk6IDA7IH1cclxuICB9XHJcbiAgLmt0LXVuLWFwciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgXHJcbn1cclxuLmt0LVN0YXR1cyB7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjNmMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbn1zcGFuLndkLXh2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA0OXB4O1xyXG59Lm1lLTgge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbi8qLS0tLS0tLS0tLS0tLS10YWJzLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLnNlcGFyYXRvciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYyO1xyXG59Lm5hdi1saW5lLXRhYnMubmF2LWxpbmUtdGFicy0yeCB7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbn0uYm9yZGVyLXRyYW5zcGFyZW50IHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG59Lm5hdi1saW5lLXRhYnMge1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZjFmMWYyO1xyXG59Lm5hdi1zdHJldGNoIHtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgcGFkZGluZy10b3A6IDAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAhaW1wb3J0YW50O1xyXG59LmZ3LWJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCFpbXBvcnRhbnQ7XHJcbn0uZnMtNSB7XHJcbiAgICBmb250LXNpemU6IDEuMTVyZW0haW1wb3J0YW50O1xyXG59Lm5hdiB7XHJcbiAgICAtLWJzLW5hdi1saW5rLXBhZGRpbmcteDogMXJlbTtcclxuICAgIC0tYnMtbmF2LWxpbmstcGFkZGluZy15OiAwLjVyZW07XHJcbiAgICAtLWJzLW5hdi1saW5rLWNvbG9yOiAjM2U5N2ZmO1xyXG4gICAgLS1icy1uYXYtbGluay1ob3Zlci1jb2xvcjogIzAwOTVlODtcclxuICAgIC0tYnMtbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6IHJnYig2IDE4IDQ5IC8gNzUlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ubmF2LWxpbmUtdGFicy5uYXYtbGluZS10YWJzLTJ4IC5uYXYtaXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xyXG59Lm5hdi1saW5lLXRhYnMgLm5hdi1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbn0ubmF2LXN0cmV0Y2ggLm5hdi1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIHBhZGRpbmctdG9wOiAwIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwIWltcG9ydGFudDtcclxufS5mcy01IHtcclxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbSFpbXBvcnRhbnQ7XHJcbn0ubmF2LWxpbmUtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufS50ZXh0LWFjdGl2ZS1wcmltYXJ5LmFjdGl2ZSB7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMnMgZWFzZTtcclxuICAgIGNvbG9yOiAjM2U5N2ZmIWltcG9ydGFudDtcclxufS5uYXYtc3RyZXRjaCAubmF2LWxpbmsge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0ucHktNSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMS4yNXJlbSFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtbGluZS10YWJzLm5hdi1saW5lLXRhYnMtMnggLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmV7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNlOTdmZjtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAuMnMgZWFzZTtmb250LXdlaWdodDogNjAwO1xyXG59Lm5hdi1saW5lLXRhYnMgLm5hdi1pdGVtOmZpcnN0LWNoaWxkIC5uYXYtbGluayB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG4ua3QtZGwtaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCAjZGJkZmU5O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxuc3Bhbi5rdC1zdmctaWMgc3ZnIHtcclxuICBmaWxsOiAjOWI1OWI2O1xyXG59XHJcbi8qLS0tLS0tLS0tIHRhYnMgLS0tLS0tLS0tLS0tLSovXHJcbi5jYXJkMSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY2FyZDEuYWN0aXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyotLS0tLS0tLXRpbWUgbGluZSBjc3MgLS0tLS0tLS0tLS0qL1xyXG4udGltZWxpbmUtbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udGltZWxpbmUtbGFiZWw6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MXB4O1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYyO1xyXG59XHJcbi50aW1lbGluZS1sYWJlbCAudGltZWxpbmUtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS43cmVtO1xyXG59XHJcbi50aW1lbGluZS1sYWJlbCAudGltZWxpbmUtbGFiZWwge1xyXG4gIHdpZHRoOiA2NXB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogIzI1MmY0YTtsaW5lLWhlaWdodDogMTNweDtcclxufS5mdy1ib2xkIHtcclxuICBmb250LXdlaWdodDogNjAwIWltcG9ydGFudDtcclxufS50aW1lbGluZS1sYWJlbDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDY2cHg7XHJcbiAgd2lkdGg6IDNweDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjI7XHJcbn0udGltZWxpbmUtbGFiZWwgLnRpbWVsaW5lLWJhZGdlIHtcclxuICBmbGV4LXNocmluazogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIHdpZHRoOiAxcmVtO1xyXG4gIGhlaWdodDogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xyXG4gIHBhZGRpbmc6IDNweCFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiA2cHggc29saWQgI2ZmZmZmZiFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtd2FybmluZyB7XHJcbiAgY29sb3I6ICNmZmM3MDAhaW1wb3J0YW50O1xyXG59LmZzLTEge1xyXG4gIGZvbnQtc2l6ZTogMS43NXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLnRpbWVsaW5lLWxhYmVsIC50aW1lbGluZS1jb250ZW50IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn0udGV4dC1tdXRlZCB7XHJcbiAgY29sb3I6ICM5OWExYjchaW1wb3J0YW50O1xyXG59LnBzLTMge1xyXG4gIHBhZGRpbmctbGVmdDogMC43NXJlbSFpbXBvcnRhbnQ7XHJcbn0udGV4dC1zdWNjZXNzIHtcclxuICBjb2xvcjogIzUwY2Q4OSFpbXBvcnRhbnQ7XHJcbn0udGV4dC1kYW5nZXIge1xyXG4gIGNvbG9yOiAjZjE0MTZjIWltcG9ydGFudDtcclxufS50ZXh0LXByaW1hcnkge1xyXG4gIGNvbG9yOiAjMDA5ZWY3IWltcG9ydGFudDtcclxufVxyXG5zcGFuLmt0LWR0LWwge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBjb2xvcjogI2E1YTVhNTtcclxufVxyXG4ua3QtY3Qtc3ViLXR0bCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4vKi0tLS0tLS0tLS0tLSB0aW1lbGluZSBlbmQgY3NzIC0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0gQ2FydCBjc3MgLS0tLS0tLS0tLS0tLS0qL1xyXG4uY2FyZC1oZWFkZXItb3ZyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLSBDYXJ0IGNzcyBlbmQtLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuLyotLS0tLS0tLS1uZXcgY3NzIC0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ua3QtdGl0bGUtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyN2NlMjtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5rdC1pbmZvLWJveC10aXR0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICM2Mzg4ZTM7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbn1cclxuLmt0LXByb2plY3QtdHlwZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5LdC1QZC1TdGF0dXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAwcHggMTBweDtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDZweCAxM3B4OyBcclxuICAgICBtYXgtd2lkdGg6IDE0MHB4O1xyXG4gIG1pbi13aWR0aDogMTMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5Db3JlX3Rhc2sge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KCNmZmM0M2EsI2U5YWYyOSk7XHJcbn1cclxuLlNlY29uZGFyeV90YXNre1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KCMwMDk1ZTgsIzAwNjY5Yyk7XHJcbiAgXHJcbn1cclxuLlRvZG9fdGFza3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigyMjYsIDIyNiwgNCksIHJnYigxOTYsIDE5NiwgMTEpKTtcclxufVxyXG5cclxuXHJcbi5rdC1wcm9qZWN0LW5hbWUgaDQge1xyXG4gIGNvbG9yOiAjMTgxODE4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmt0LXByb2plY3QtZGVzYyBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4ua3QtcHJvamVjdC1kZXNjIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmt0LWluZm8tYm94IHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XHJcbn1cclxuLk1vcmVfaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NzRmZSAhaW1wb3J0YW50O1xyXG59XHJcbi5rdC1pbmZvLWxhYmxlLXYge1xyXG4gIGNvbG9yOiAjOTM5MzkzO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmt0LWluZm8tZGF0YS12IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgcGFkZGluZzogNXB4IDRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjNGY0ZjRmO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmt0LWNsaWVudC1pY29uIGltZyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4ua3QtY2xpZW50LWljb24ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmJnLWxpZ2h0LXNoYWRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFmMmZkICFpbXBvcnRhbnQ7XHJcbn1cclxuLkRlbGF5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFZDYyMDcgIWltcG9ydGFudDtcclxufVxyXG4ua3QtcHJvamVjdC1zdHMtZGF0YSB7XHJcbiAgbWFyZ2luLXRvcDogMTdweDtcclxuICBjb2xvcjogIzNiM2IzYjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ucHJvZ3Jlc3Mua3QtcHJvamNlY3QtcHJvZ3Jlc3MuYmFyIHtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxufVxyXG4uYmctaW5wcm9ncmVzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcclxufVxyXG4uYmctZGVsYXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFZDYyMDc7XHJcbn1cclxuLmJnLWRvbmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YWFkM2E7XHJcbn1cclxuXHJcbi5iZy1yZWplY3RlZHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjEwLCAyMTApO1xyXG4gICBjb2xvcjpyZ2IoMjA0LCAxMSwgMTEpO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4ua3QtcHJnLWJhci1pbmZvIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzNkM2QzZDtcclxufVxyXG4ua3QtcHJnLWJhci1pbmZvIGIge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4ua3QtdG90YWwtcHJnLXZsIGIge1xyXG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLkRlYWRsaW5lX0V4dGVuZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ4MzgzO1xyXG59XHJcbmJ1dHRvbi5LdC1BcHByb3ZhbC1idG5zIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogIzRmNGY0ZjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59LkJ0bl9BY2NwZXQge1xyXG4gIGJvcmRlci1jb2xvcjogIzhhYjk5MSAhaW1wb3J0YW50O1xyXG59XHJcbi5CdG5fRWRpdF9BY2NlcHQge1xyXG4gIGJvcmRlci1jb2xvcjogIzdjYWNjZCAhaW1wb3J0YW50O1xyXG59XHJcbi5CdG5fQ29uZGl0aW9uYWxfQWNjZXB0IHtcclxuICBib3JkZXItY29sb3I6ICM0MDdmNGMgIWltcG9ydGFudDtcclxufVxyXG4uQnRuX1JlamVjdCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2Y4ZTY2ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmt0LWFwcHJvdmFsLW1zZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtaW4taGVpZ2h0OiA4NXB4O1xyXG59XHJcbi50ZXh0LWVuZCB7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcbi5idG4tcHJvamVjdC1zdHYge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcbi5CdC1TdWJtaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4Nzg3ODc7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG4ua3QtaW5mby1wZy1mb290ZXIge1xyXG4gIG1hcmdpbjogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5BZGRfQWN0aW9uX2J0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNzM3MyAhaW1wb3J0YW50O1xyXG59XHJcbi5rdC1wLWJveCB7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbn0ua3QtYWN0aW9uLXAtdGl0dGxlIGg0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzVkNWQ1ZDtcclxufVxyXG4ua3QtYWN0aW9uLXAtdGl0dGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG59XHJcbi5TdGF0dXMtZG9uZXtcclxuICBjb2xvcjogIzZhYWQzYTtcclxufVxyXG5zcGFuLlN0YXR1cy1EZWxheSB7XHJcbiAgY29sb3I6ICNFZDYyMDc7XHJcbn1cclxuLlN0YXR1cy1Jbi1wcm9ncmVzcyB7XHJcbiAgY29sb3I6ICMzOTM5Mzk7XHJcbn1cclxuLmt0LXAtYWN0aW9uLU5vIHtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzUyNmRkNjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmt0LXAtYWN0aW9uLVN0YXR1cyBzcGFuIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ua3QtcHJvamNlY3QtYWN0LWxpc3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmt0LXByb2pjZWN0LWFjdC1saXN0Omxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206MHB4O1xyXG59XHJcbi5BY3Rpb24tQWN0aXZlIC5rdC1wLWJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZjFmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5rdC1wcm9qY2VjdC1hY3QtbGlzdC5BY3Rpb24tQWN0aXZlOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IC0xMnB4O1xyXG4gIHRvcDogMDtcclxuICBib3JkZXItdG9wOiAzNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDM1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDEycHggc29saWQgI2ViZjFmZjtcclxuICB6LWluZGV4OiA5OTk5OTk5O1xyXG59XHJcblxyXG5cclxuXHJcbi5BY3RpdmUgLmt0LXAtYm94e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIzOSwgMjU1KTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOjAuNHM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuODYsIDAsIDAuMDcsIDEpO1xyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5rdC1wcm9qY2VjdC1hY3QtbGlzdC5BY3Rpb24tQWN0aXZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgXHJcbn1cclxuLmt0LXByb2plY3QtYWN0aW9uLWxpc3QtdmlldyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBoZWlnaHQ6NDB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwYWRkaW5nOjEwcHg7XHJcbn1cclxuLmt0LXByb2plY3QtYWN0aW9uLWxpc3Qtdmlldzo6LXdlYmtpdC1zY3JvbGxiYXJ7IHdpZHRoOjlweDsgICB9XHJcbi5rdC1wcm9qZWN0LWFjdGlvbi1saXN0LXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ieyBiYWNrZ3JvdW5kLWNvbG9yOiM4Y2FiZmE7ICBib3JkZXItcmFkaXVzOiA1MHB4OyAgfVxyXG4ua3QtcHJvamVjdC1hY3Rpb24tbGlzdC12aWV3Ojotd2Via2l0LXNjcm9sbGJhci10cmFja3sgYmFja2dyb3VuZC1jb2xvcjojZTllYmVlOyAgYm9yZGVyLXJhZGl1czogNTBweDsgIH1cclxuXHJcbi8qLS0tLS0tLS0tdG9vbCBiYXIgY3NzIC0tLS0tLS0tLS0tLS0tLSovXHJcbi5ici1saW5lIHtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigxMDAgMTIxIDE0MyAvIDMzJSk7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbjogMCAycHg7XHJcbn1cclxuLmt0LWluYm94X19pY29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmt0LWluYm94X19pY29uIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmUhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5rdC1pbmJveF9faWNvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5rdC1wcm9qZWN0LXRvb2wtYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmdhcF9pYyB7XHJcbiAgZ2FwOiAxcHg7XHJcbn1cclxuLmt0LW5vdGUtaWNvbiB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMzMsMTUsMTUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2ZGVnLCByZ2JhKDIzMywxNSwxNSwxKSAwJSwgcmdiYSgyMjIsMjEsMTEsMSkgMCUsIHJnYigyNTMsIDEyNiwgMTIyKSA2OSUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuLmt0LU5vdGUtbXNnIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDdlN2EzODtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5rdC1ub3RlLWljb24gc3ZnIHtcclxuICBmaWxsOiAjZmZmO1xyXG59XHJcbi5rdC1ub3RlLXRleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGNvbG9yOiAjY2IxOTEwO1xyXG59XHJcbi5rdC1wcm9qZWN0LWRlc2Mudy04MCB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tdG8gc2hvdyB0ZWFtIG1lbWJlcnMgLS0tLS0tLS0tLSovXHJcbi5zeW1ib2wtZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnN5bWJvbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjQ3NXJlbTtcclxufVxyXG4uZmxleC1ub3dyYXAge1xyXG4gIGZsZXgtd3JhcDogbm93cmFwIWltcG9ydGFudDtcclxufS5zeW1ib2wtZ3JvdXAuc3ltYm9sLWhvdmVyIC5zeW1ib2wge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufS5zeW1ib2wtZ3JvdXAgLnN5bWJvbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxufS5zeW1ib2wuc3ltYm9sLWNpcmNsZSwgLnN5bWJvbC5zeW1ib2wtY2lyY2xlIC5zeW1ib2wtbGFiZWwsIC5zeW1ib2wuc3ltYm9sLWNpcmNsZT5pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uc3ltYm9sIC5zeW1ib2wtbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMjUyZjRhO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC40NzVyZW07XHJcbn0udGV4dC1pbnZlcnNlLXdhcm5pbmcge1xyXG4gIGNvbG9yOiAjZmZmZmZmIWltcG9ydGFudDtcclxufS5iZy13YXJuaW5nIHtcclxuICAtLWJzLWJnLXJnYi1jb2xvcjogcmdiYSgyNTUsMTk5LDApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmM3MDAhaW1wb3J0YW50O1xyXG59XHJcbi5mdy1ib2xkIHtcclxuICBmb250LXdlaWdodDogNjAwIWltcG9ydGFudDtcclxufVxyXG4uc3ltYm9sIC5zeW1ib2wtbGFiZWwge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn0uc3ltYm9sLWdyb3VwIC5zeW1ib2wtbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufS5zeW1ib2wuc3ltYm9sLTM1cHggLnN5bWJvbC1sYWJlbCB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG59LnN5bWJvbC1ncm91cC5zeW1ib2wtaG92ZXIgLnN5bWJvbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59LnN5bWJvbCAuc3ltYm9sLWxhYmVsOmFmdGVyIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjQ3NXJlbTtcclxufS5zeW1ib2wtZ3JvdXAgLnN5bWJvbC1sYWJlbDphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbn1cclxuLmJnLXByaW1hcnkge1xyXG4gIC0tYnMtYmctcmdiLWNvbG9yOiByZ2JhKDYyLDE1MSwyNTUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTk3ZmYhaW1wb3J0YW50O1xyXG59LnRleHQtaW52ZXJzZS1wcmltYXJ5IHtcclxuICBjb2xvcjogI2ZmZmZmZiFpbXBvcnRhbnQ7XHJcbn1cclxuLnN5bWJvbC5zeW1ib2wtMzVweD5pbWcge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLnRleHQtaW52ZXJzZS1kYW5nZXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1ncmF5LTMwMCB7XHJcbiAgY29sb3I6ICNkYmRmZTkhaW1wb3J0YW50O1xyXG59XHJcbmxhYmVsLm15LWNob3NzZS1mbHYge1xyXG4gIG1pbi1oZWlnaHQ6IDU1cHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm15LWNob3NzZS1mbHYgLmZvcm1ib2xkLWRyb3AtZmlsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzcxNzE3MTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnJpZ2h0LXNpZGUtYWN0IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2Q5ZDlkOTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTdweCk7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmt0LWFjdGlvbi1saXN0IHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcbi5BY3QtdGl0dGxlLVJpZ2h0IGgzIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufS5BY3QtdGl0dGxlLVJpZ2h0IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XHJcbn1cclxuLmt0LXJpZ2h0LXN0eWxlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZDlkOWQ5O1xyXG59XHJcbi5EaXZpZGluZy1saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxufVxyXG4ua3QtY3Qtc3ViLXR0bCBoNiB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjYTFhMWExO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmJkLXJpZ2h0LXg6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTdweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xyXG4gIHRvcDogMzVweDtcclxufVxyXG4ua3Qtb3Zlci1wZC1pbi5iZC1yaWdodC14IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4vKi0tLS0tLS0tY2hhcnQgY3NzIC0tLS0tLS0tLS0qL1xyXG4uY2hhcnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDI5MnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qLS0tLS0tLS1jaGFydCBjc3MgLS1lbmQtLS0tLS0qL1xyXG5cclxuXHJcblxyXG4uc2lkZUluZm9iYXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VkZWFlOTtcclxuICBib3gtc2hhZG93OiAwIDFweCA5cHggLTNweCByZ2IoMCAwIDAgLyA3NSUpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGNvbG9yOiAjMjEyNTI5OyBcclxufSJdfQ== */"] });


/***/ }),

/***/ 59342:
/*!***********************************************************!*\
  !*** ./src/app/_Services/project-more-details.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectMoreDetailsService": () => (/* binding */ ProjectMoreDetailsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _apiurl_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiurl.service */ 77983);



class ProjectMoreDetailsService {
    constructor(http, commonUrl) {
        this.http = http;
        this.commonUrl = commonUrl;
        this.rootUrl = this.commonUrl.apiurl;
    }
    getProjectMoreDetails(projectcode) {
        const body = { Project_Code: projectcode };
        return this.http.post(this.rootUrl + 'TestAPI/NewGetMoreProjectDetails', body);
    }
}
ProjectMoreDetailsService.ɵfac = function ProjectMoreDetailsService_Factory(t) { return new (t || ProjectMoreDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_apiurl_service__WEBPACK_IMPORTED_MODULE_0__.ApiurlService)); };
ProjectMoreDetailsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjectMoreDetailsService, factory: ProjectMoreDetailsService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app__LayoutDashboard_details_details_details_component_ts.js.map