(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_LayoutDashboard-dashboard-dashboard-module"],{

/***/ "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm2015/kolkov-angular-editor.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm2015/kolkov-angular-editor.js ***!
  \********************************************************************************************/
/*! exports provided: AngularEditorComponent, AngularEditorModule, AngularEditorService, AngularEditorToolbarComponent, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorComponent", function() { return AngularEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorModule", function() { return AngularEditorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorService", function() { return AngularEditorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorToolbarComponent", function() { return AngularEditorToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return AeSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");












const _c0 = ["editor"];
const _c1 = ["editorWrapper"];
const _c2 = ["editorToolbar"];
function AngularEditorComponent_angular_editor_toolbar_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "angular-editor-toolbar", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function AngularEditorComponent_angular_editor_toolbar_2_Template_angular_editor_toolbar_execute_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.executeCommand($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1.id)("uploadUrl", ctx_r1.config.uploadUrl)("upload", ctx_r1.config.upload)("showToolbar", ctx_r1.config.showToolbar !== undefined ? ctx_r1.config.showToolbar : true)("fonts", ctx_r1.getFonts())("customClasses", ctx_r1.config.customClasses)("defaultFontName", ctx_r1.config.defaultFontName)("defaultFontSize", ctx_r1.config.defaultFontSize)("hiddenButtons", ctx_r1.config.toolbarHiddenButtons);
} }
function AngularEditorComponent_angular_editor_toolbar_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "angular-editor-toolbar", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function AngularEditorComponent_angular_editor_toolbar_9_Template_angular_editor_toolbar_execute_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.executeCommand($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r4.id)("uploadUrl", ctx_r4.config.uploadUrl)("upload", ctx_r4.config.upload)("showToolbar", ctx_r4.config.showToolbar !== undefined ? ctx_r4.config.showToolbar : true)("fonts", ctx_r4.getFonts())("customClasses", ctx_r4.config.customClasses)("defaultFontName", ctx_r4.config.defaultFontName)("defaultFontSize", ctx_r4.config.defaultFontSize)("hiddenButtons", ctx_r4.config.toolbarHiddenButtons);
} }
const _c3 = ["fileInput"];
function AngularEditorToolbarComponent_div_0_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ae-select", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AngularEditorToolbarComponent_div_0_div_55_Template_ae_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.customClassId = $event; })("change", function AngularEditorToolbarComponent_div_0_div_55_Template_ae_select_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.setCustomClass(ctx_r7.customClassId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r3.customClassList)("ngModel", ctx_r3.customClassId)("disabled", ctx_r3.htmlMode)("hidden", ctx_r3.isButtonHidden("customClasses"));
} }
function AngularEditorToolbarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.triggerCommand("undo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.triggerCommand("redo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.triggerCommand("bold"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.triggerCommand("italic"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.triggerCommand("underline"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.triggerCommand("strikeThrough"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.triggerCommand("subscript"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.triggerCommand("superscript"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.triggerCommand("justifyLeft"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.triggerCommand("justifyCenter"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.triggerCommand("justifyRight"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.triggerCommand("justifyFull"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.triggerCommand("indent"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.triggerCommand("outdent"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.triggerCommand("insertUnorderedList"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.triggerCommand("insertOrderedList"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ae-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AngularEditorToolbarComponent_div_0_Template_ae_select_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.block = $event; })("change", function AngularEditorToolbarComponent_div_0_Template_ae_select_change_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.triggerCommand(ctx_r26.block); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ae-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AngularEditorToolbarComponent_div_0_Template_ae_select_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.fontName = $event; })("change", function AngularEditorToolbarComponent_div_0_Template_ae_select_change_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.setFontName(ctx_r28.fontName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ae-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AngularEditorToolbarComponent_div_0_Template_ae_select_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.fontSize = $event; })("change", function AngularEditorToolbarComponent_div_0_Template_ae_select_change_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.setFontSize(ctx_r30.fontSize); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AngularEditorToolbarComponent_div_0_Template_input_change_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.insertColor(_r1.value, "textColor"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r32.focus(); return _r1.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 38, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AngularEditorToolbarComponent_div_0_Template_input_change_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.insertColor(_r2.value, "backgroundColor"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r34.focus(); return _r2.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AngularEditorToolbarComponent_div_0_div_55_Template, 2, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.insertUrl(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.triggerCommand("unlink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AngularEditorToolbarComponent_div_0_Template_input_change_61_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.onFileChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r38.focus(); return _r4.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.insertVideo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.triggerCommand("insertHorizontalRule"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.triggerCommand("removeFormat"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngularEditorToolbarComponent_div_0_Template_button_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.triggerCommand("toggleEditorMode"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.isButtonHidden("undo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.isButtonHidden("redo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "bold-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("bold"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "italic-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("italic"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "underline-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("underline"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "strikeThrough-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("strikeThrough"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "subscript-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("subscript"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "superscript-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("superscript"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "justifyLeft-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyLeft"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "justifyCenter-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyCenter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "justifyRight-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyRight"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "justifyFull-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("justifyFull"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "indent-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("indent"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "outdent-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("outdent"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "insertUnorderedList-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertUnorderedList"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "insertOrderedList-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertOrderedList"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.headings)("ngModel", ctx_r0.block)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("heading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.fonts)("ngModel", ctx_r0.fontName)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("fontName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.fontSizes)("ngModel", ctx_r0.fontSize)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("fontSize"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "foregroundColorPicker-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("textColor"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "backgroundColorPicker-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("backgroundColor"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0._customClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "link-" + ctx_r0.id)("disabled", ctx_r0.isLinkButtonDisabled)("hidden", ctx_r0.isButtonHidden("link"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "unlink-" + ctx_r0.id)("disabled", ctx_r0.htmlMode || !ctx_r0.linkSelected)("hidden", ctx_r0.isButtonHidden("unlink"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "insertImage-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertImage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "insertVideo-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertVideo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "insertHorizontalRule-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("insertHorizontalRule"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "clearFormatting-" + ctx_r0.id)("disabled", ctx_r0.htmlMode)("hidden", ctx_r0.isButtonHidden("removeFormat"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "toggleEditorMode-" + ctx_r0.id)("hidden", ctx_r0.isButtonHidden("toggleEditorMode"));
} }
const _c4 = ["labelButton"];
const _c5 = function (a0, a1) { return { "selected": a0, "focused": a1 }; };
function AeSelectComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AeSelectComponent_button_8_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.optionSelect(item_r3, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c5, item_r3.value === ctx_r1.value, i_r4 === ctx_r1.optionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.label, " ");
} }
function AeSelectComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No items for select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c6 = function (a0) { return { "ae-expanded": a0 }; };
class AngularEditorService {
    constructor(http, doc) {
        this.http = http;
        this.doc = doc;
        /**
         * save selection when the editor is focussed out
         */
        this.saveSelection = () => {
            if (this.doc.getSelection) {
                const sel = this.doc.getSelection();
                if (sel.getRangeAt && sel.rangeCount) {
                    this.savedSelection = sel.getRangeAt(0);
                    this.selectedText = sel.toString();
                }
            }
            else if (this.doc.getSelection && this.doc.createRange) {
                this.savedSelection = document.createRange();
            }
            else {
                this.savedSelection = null;
            }
        };
    }
    /**
     * Executed command from editor header buttons exclude toggleEditorMode
     * @param command string from triggerCommand
     */
    executeCommand(command) {
        const commands = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre'];
        if (commands.includes(command)) {
            this.doc.execCommand('formatBlock', false, command);
            return;
        }
        this.doc.execCommand(command, false, null);
    }
    /**
     * Create URL link
     * @param url string from UI prompt
     */
    createLink(url) {
        if (!url.includes('http')) {
            this.doc.execCommand('createlink', false, url);
        }
        else {
            const newUrl = '<a href="' + url + '" target="_blank">' + this.selectedText + '</a>';
            this.insertHtml(newUrl);
        }
    }
    /**
     * insert color either font or background
     *
     * @param color color to be inserted
     * @param where where the color has to be inserted either text/background
     */
    insertColor(color, where) {
        const restored = this.restoreSelection();
        if (restored) {
            if (where === 'textColor') {
                this.doc.execCommand('foreColor', false, color);
            }
            else {
                this.doc.execCommand('hiliteColor', false, color);
            }
        }
    }
    /**
     * Set font name
     * @param fontName string
     */
    setFontName(fontName) {
        this.doc.execCommand('fontName', false, fontName);
    }
    /**
     * Set font size
     * @param fontSize string
     */
    setFontSize(fontSize) {
        this.doc.execCommand('fontSize', false, fontSize);
    }
    /**
     * Create raw HTML
     * @param html HTML string
     */
    insertHtml(html) {
        const isHTMLInserted = this.doc.execCommand('insertHTML', false, html);
        if (!isHTMLInserted) {
            throw new Error('Unable to perform the operation');
        }
    }
    /**
     * restore selection when the editor is focused in
     *
     * saved selection when the editor is focused out
     */
    restoreSelection() {
        if (this.savedSelection) {
            if (this.doc.getSelection) {
                const sel = this.doc.getSelection();
                sel.removeAllRanges();
                sel.addRange(this.savedSelection);
                return true;
            }
            else if (this.doc.getSelection /*&& this.savedSelection.select*/) {
                // this.savedSelection.select();
                return true;
            }
        }
        else {
            return false;
        }
    }
    /**
     * setTimeout used for execute 'saveSelection' method in next event loop iteration
     */
    executeInNextQueueIteration(callbackFn, timeout = 1e2) {
        setTimeout(callbackFn, timeout);
    }
    /** check any selection is made or not */
    checkSelection() {
        const selectedText = this.savedSelection.toString();
        if (selectedText.length === 0) {
            throw new Error('No Selection Made');
        }
        return true;
    }
    /**
     * Upload file to uploadUrl
     * @param file The file
     */
    uploadImage(file) {
        const uploadData = new FormData();
        uploadData.append('file', file, file.name);
        return this.http.post(this.uploadUrl, uploadData, {
            reportProgress: true,
            observe: 'events',
            withCredentials: this.uploadWithCredentials,
        });
    }
    /**
     * Insert image with Url
     * @param imageUrl The imageUrl.
     */
    insertImage(imageUrl) {
        this.doc.execCommand('insertImage', false, imageUrl);
    }
    setDefaultParagraphSeparator(separator) {
        this.doc.execCommand('defaultParagraphSeparator', false, separator);
    }
    createCustomClass(customClass) {
        let newTag = this.selectedText;
        if (customClass) {
            const tagName = customClass.tag ? customClass.tag : 'span';
            newTag = '<' + tagName + ' class="' + customClass.class + '">' + this.selectedText + '</' + tagName + '>';
        }
        this.insertHtml(newTag);
    }
    insertVideo(videoUrl) {
        if (videoUrl.match('www.youtube.com')) {
            this.insertYouTubeVideoTag(videoUrl);
        }
        if (videoUrl.match('vimeo.com')) {
            this.insertVimeoVideoTag(videoUrl);
        }
    }
    insertYouTubeVideoTag(videoUrl) {
        const id = videoUrl.split('v=')[1];
        const imageUrl = `https://img.youtube.com/vi/${id}/0.jpg`;
        const thumbnail = `
      <div style='position: relative'>
        <a href='${videoUrl}' target='_blank'>
          <img src="${imageUrl}" alt="click to watch"/>
          <img style='position: absolute; left:200px; top:140px'
          src="https://img.icons8.com/color/96/000000/youtube-play.png"/>
        </a>
      </div>`;
        this.insertHtml(thumbnail);
    }
    insertVimeoVideoTag(videoUrl) {
        const sub = this.http.get(`https://vimeo.com/api/oembed.json?url=${videoUrl}`).subscribe(data => {
            const imageUrl = data.thumbnail_url_with_play_button;
            const thumbnail = `<div>
        <a href='${videoUrl}' target='_blank'>
          <img src="${imageUrl}" alt="${data.title}"/>
        </a>
      </div>`;
            this.insertHtml(thumbnail);
            sub.unsubscribe();
        });
    }
    nextNode(node) {
        if (node.hasChildNodes()) {
            return node.firstChild;
        }
        else {
            while (node && !node.nextSibling) {
                node = node.parentNode;
            }
            if (!node) {
                return null;
            }
            return node.nextSibling;
        }
    }
    getRangeSelectedNodes(range, includePartiallySelectedContainers) {
        let node = range.startContainer;
        const endNode = range.endContainer;
        let rangeNodes = [];
        // Special case for a range that is contained within a single node
        if (node === endNode) {
            rangeNodes = [node];
        }
        else {
            // Iterate nodes until we hit the end container
            while (node && node !== endNode) {
                rangeNodes.push(node = this.nextNode(node));
            }
            // Add partially selected nodes at the start of the range
            node = range.startContainer;
            while (node && node !== range.commonAncestorContainer) {
                rangeNodes.unshift(node);
                node = node.parentNode;
            }
        }
        // Add ancestors of the range container, if required
        if (includePartiallySelectedContainers) {
            node = range.commonAncestorContainer;
            while (node) {
                rangeNodes.push(node);
                node = node.parentNode;
            }
        }
        return rangeNodes;
    }
    getSelectedNodes() {
        const nodes = [];
        if (this.doc.getSelection) {
            const sel = this.doc.getSelection();
            for (let i = 0, len = sel.rangeCount; i < len; ++i) {
                nodes.push.apply(nodes, this.getRangeSelectedNodes(sel.getRangeAt(i), true));
            }
        }
        return nodes;
    }
    replaceWithOwnChildren(el) {
        const parent = el.parentNode;
        while (el.hasChildNodes()) {
            parent.insertBefore(el.firstChild, el);
        }
        parent.removeChild(el);
    }
    removeSelectedElements(tagNames) {
        const tagNamesArray = tagNames.toLowerCase().split(',');
        this.getSelectedNodes().forEach((node) => {
            if (node.nodeType === 1 &&
                tagNamesArray.indexOf(node.tagName.toLowerCase()) > -1) {
                // Remove the node and replace it with its children
                this.replaceWithOwnChildren(node);
            }
        });
    }
}
AngularEditorService.ɵfac = function AngularEditorService_Factory(t) { return new (t || AngularEditorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
AngularEditorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AngularEditorService, factory: AngularEditorService.ɵfac });
AngularEditorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularEditorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, null); })();

const angularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
        { class: 'arial', name: 'Arial' },
        { class: 'times-new-roman', name: 'Times New Roman' },
        { class: 'calibri', name: 'Calibri' },
        { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    outline: true,
    /*toolbarHiddenButtons: [
      ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript'],
      ['heading', 'fontName', 'fontSize', 'color'],
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
      ['cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo'],
      ['paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList'],
      ['link', 'unlink', 'image', 'video']
    ]*/
};

function isDefined(value) {
    return value !== undefined && value !== null;
}

class AngularEditorComponent {
    constructor(r, editorService, doc, sanitizer, cdRef, defaultTabIndex, autoFocus) {
        this.r = r;
        this.editorService = editorService;
        this.doc = doc;
        this.sanitizer = sanitizer;
        this.cdRef = cdRef;
        this.autoFocus = autoFocus;
        this.modeVisual = true;
        this.showPlaceholder = false;
        this.disabled = false;
        this.focused = false;
        this.touched = false;
        this.changed = false;
        this.id = '';
        this.config = angularEditorConfig;
        this.placeholder = '';
        this.viewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** emits `blur` event when focused out from the textarea */
        // eslint-disable-next-line @angular-eslint/no-output-native, @angular-eslint/no-output-rename
        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** emits `focus` event when focused in to the textarea */
        // eslint-disable-next-line @angular-eslint/no-output-rename, @angular-eslint/no-output-native
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabindex = -1;
        const parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
    }
    onFocus() {
        this.focus();
    }
    ngOnInit() {
        this.config.toolbarPosition = this.config.toolbarPosition ? this.config.toolbarPosition : angularEditorConfig.toolbarPosition;
    }
    ngAfterViewInit() {
        if (isDefined(this.autoFocus)) {
            this.focus();
        }
    }
    onPaste(event) {
        if (this.config.rawPaste) {
            event.preventDefault();
            const text = event.clipboardData.getData('text/plain');
            document.execCommand('insertHTML', false, text);
            return text;
        }
    }
    /**
     * Executed command from editor header buttons
     * @param command string from triggerCommand
     */
    executeCommand(command) {
        this.focus();
        if (command === 'focus') {
            return;
        }
        if (command === 'toggleEditorMode') {
            this.toggleEditorMode(this.modeVisual);
        }
        else if (command !== '') {
            if (command === 'clear') {
                this.editorService.removeSelectedElements(this.getCustomTags());
                this.onContentChange(this.textArea.nativeElement);
            }
            else if (command === 'default') {
                this.editorService.removeSelectedElements('h1,h2,h3,h4,h5,h6,p,pre');
                this.onContentChange(this.textArea.nativeElement);
            }
            else {
                this.editorService.executeCommand(command);
            }
            this.exec();
        }
    }
    /**
     * focus event
     */
    onTextAreaFocus(event) {
        if (this.focused) {
            event.stopPropagation();
            return;
        }
        this.focused = true;
        this.focusEvent.emit(event);
        if (!this.touched || !this.changed) {
            this.editorService.executeInNextQueueIteration(() => {
                this.configure();
                this.touched = true;
            });
        }
    }
    /**
     * @description fires when cursor leaves textarea
     */
    onTextAreaMouseOut(event) {
        this.editorService.saveSelection();
    }
    /**
     * blur event
     */
    onTextAreaBlur(event) {
        /**
         * save selection if focussed out
         */
        this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);
        if (typeof this.onTouched === 'function') {
            this.onTouched();
        }
        if (event.relatedTarget !== null) {
            const parent = event.relatedTarget.parentElement;
            if (!parent.classList.contains('angular-editor-toolbar-set') && !parent.classList.contains('ae-picker')) {
                this.blurEvent.emit(event);
                this.focused = false;
            }
        }
    }
    /**
     *  focus the text area when the editor is focused
     */
    focus() {
        if (this.modeVisual) {
            this.textArea.nativeElement.focus();
        }
        else {
            const sourceText = this.doc.getElementById('sourceText' + this.id);
            sourceText.focus();
            this.focused = true;
        }
    }
    /**
     * Executed from the contenteditable section while the input property changes
     * @param element html element from contenteditable
     */
    onContentChange(element) {
        let html = '';
        if (this.modeVisual) {
            html = element.innerHTML;
        }
        else {
            html = element.innerText;
        }
        if ((!html || html === '<br>')) {
            html = '';
        }
        if (typeof this.onChange === 'function') {
            this.onChange(this.config.sanitize || this.config.sanitize === undefined ?
                this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, html) : html);
            if ((!html) !== this.showPlaceholder) {
                this.togglePlaceholder(this.showPlaceholder);
            }
        }
        this.changed = true;
    }
    /**
     * Set the function to be called
     * when the control receives a change event.
     *
     * @param fn a function
     */
    registerOnChange(fn) {
        this.onChange = e => (e === '<br>' ? fn('') : fn(e));
    }
    /**
     * Set the function to be called
     * when the control receives a touch event.
     *
     * @param fn a function
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Write a new value to the element.
     *
     * @param value value to be executed when there is a change in contenteditable
     */
    writeValue(value) {
        if ((!value || value === '<br>' || value === '') !== this.showPlaceholder) {
            this.togglePlaceholder(this.showPlaceholder);
        }
        if (value === undefined || value === '' || value === '<br>') {
            value = null;
        }
        this.refreshView(value);
    }
    /**
     * refresh view/HTML of the editor
     *
     * @param value html string from the editor
     */
    refreshView(value) {
        const normalizedValue = value === null ? '' : value;
        this.r.setProperty(this.textArea.nativeElement, 'innerHTML', normalizedValue);
        return;
    }
    /**
     * toggles placeholder based on input string
     *
     * @param value A HTML string from the editor
     */
    togglePlaceholder(value) {
        if (!value) {
            this.r.addClass(this.editorWrapper.nativeElement, 'show-placeholder');
            this.showPlaceholder = true;
        }
        else {
            this.r.removeClass(this.editorWrapper.nativeElement, 'show-placeholder');
            this.showPlaceholder = false;
        }
    }
    /**
     * Implements disabled state for this element
     *
     * @param isDisabled Disabled flag
     */
    setDisabledState(isDisabled) {
        const div = this.textArea.nativeElement;
        const action = isDisabled ? 'addClass' : 'removeClass';
        this.r[action](div, 'disabled');
        this.disabled = isDisabled;
    }
    /**
     * toggles editor mode based on bToSource bool
     *
     * @param bToSource A boolean value from the editor
     */
    toggleEditorMode(bToSource) {
        let oContent;
        const editableElement = this.textArea.nativeElement;
        if (bToSource) {
            oContent = this.r.createText(editableElement.innerHTML);
            this.r.setProperty(editableElement, 'innerHTML', '');
            this.r.setProperty(editableElement, 'contentEditable', false);
            const oPre = this.r.createElement('pre');
            this.r.setStyle(oPre, 'margin', '0');
            this.r.setStyle(oPre, 'outline', 'none');
            const oCode = this.r.createElement('code');
            this.r.setProperty(oCode, 'id', 'sourceText' + this.id);
            this.r.setStyle(oCode, 'display', 'block');
            this.r.setStyle(oCode, 'white-space', 'pre-wrap');
            this.r.setStyle(oCode, 'word-break', 'keep-all');
            this.r.setStyle(oCode, 'outline', 'none');
            this.r.setStyle(oCode, 'margin', '0');
            this.r.setStyle(oCode, 'background-color', '#fff5b9');
            this.r.setProperty(oCode, 'contentEditable', true);
            this.r.appendChild(oCode, oContent);
            this.focusInstance = this.r.listen(oCode, 'focus', (event) => this.onTextAreaFocus(event));
            this.blurInstance = this.r.listen(oCode, 'blur', (event) => this.onTextAreaBlur(event));
            this.r.appendChild(oPre, oCode);
            this.r.appendChild(editableElement, oPre);
            // ToDo move to service
            this.doc.execCommand('defaultParagraphSeparator', false, 'div');
            this.modeVisual = false;
            this.viewMode.emit(false);
            oCode.focus();
        }
        else {
            if (this.doc.querySelectorAll) {
                this.r.setProperty(editableElement, 'innerHTML', editableElement.innerText);
            }
            else {
                oContent = this.doc.createRange();
                oContent.selectNodeContents(editableElement.firstChild);
                this.r.setProperty(editableElement, 'innerHTML', oContent.toString());
            }
            this.r.setProperty(editableElement, 'contentEditable', true);
            this.modeVisual = true;
            this.viewMode.emit(true);
            this.onContentChange(editableElement);
            editableElement.focus();
        }
        this.editorToolbar.setEditorMode(!this.modeVisual);
    }
    /**
     * toggles editor buttons when cursor moved or positioning
     *
     * Send a node array from the contentEditable of the editor
     */
    exec() {
        this.editorToolbar.triggerButtons();
        let userSelection;
        if (this.doc.getSelection) {
            userSelection = this.doc.getSelection();
            this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);
        }
        let a = userSelection.focusNode;
        const els = [];
        while (a && a.id !== 'editor') {
            els.unshift(a);
            a = a.parentNode;
        }
        this.editorToolbar.triggerBlocks(els);
    }
    configure() {
        this.editorService.uploadUrl = this.config.uploadUrl;
        this.editorService.uploadWithCredentials = this.config.uploadWithCredentials;
        if (this.config.defaultParagraphSeparator) {
            this.editorService.setDefaultParagraphSeparator(this.config.defaultParagraphSeparator);
        }
        if (this.config.defaultFontName) {
            this.editorService.setFontName(this.config.defaultFontName);
        }
        if (this.config.defaultFontSize) {
            this.editorService.setFontSize(this.config.defaultFontSize);
        }
    }
    getFonts() {
        const fonts = this.config.fonts ? this.config.fonts : angularEditorConfig.fonts;
        return fonts.map(x => {
            return { label: x.name, value: x.name };
        });
    }
    getCustomTags() {
        const tags = ['span'];
        this.config.customClasses.forEach(x => {
            if (x.tag !== undefined) {
                if (!tags.includes(x.tag)) {
                    tags.push(x.tag);
                }
            }
        });
        return tags.join(',');
    }
    ngOnDestroy() {
        if (this.blurInstance) {
            this.blurInstance();
        }
        if (this.focusInstance) {
            this.focusInstance();
        }
    }
    filterStyles(html) {
        html = html.replace('position: fixed;', '');
        return html;
    }
}
AngularEditorComponent.ɵfac = function AngularEditorComponent_Factory(t) { return new (t || AngularEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AngularEditorService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('autofocus')); };
AngularEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AngularEditorComponent, selectors: [["angular-editor"]], viewQuery: function AngularEditorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textArea = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editorWrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editorToolbar = _t.first);
    } }, hostVars: 1, hostBindings: function AngularEditorComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function AngularEditorComponent_focus_HostBindingHandler() { return ctx.onFocus(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.tabindex);
    } }, inputs: { id: "id", config: "config", placeholder: "placeholder", tabIndex: "tabIndex" }, outputs: { viewMode: "viewMode", blurEvent: "blur", focusEvent: "focus", html: "html" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => AngularEditorComponent),
                multi: true
            },
            AngularEditorService
        ])], decls: 10, vars: 19, consts: [[1, "angular-editor"], ["angularEditor", ""], [3, "id", "uploadUrl", "upload", "showToolbar", "fonts", "customClasses", "defaultFontName", "defaultFontSize", "hiddenButtons", "execute", 4, "ngIf"], [1, "angular-editor-wrapper"], ["editorWrapper", ""], [1, "angular-editor-textarea", 3, "input", "focus", "blur", "click", "keyup", "mouseout", "paste"], ["editor", ""], [1, "angular-editor-placeholder"], [3, "id", "uploadUrl", "upload", "showToolbar", "fonts", "customClasses", "defaultFontName", "defaultFontSize", "hiddenButtons", "execute"], ["editorToolbar", ""]], template: function AngularEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AngularEditorComponent_angular_editor_toolbar_2_Template, 2, 9, "angular-editor-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AngularEditorComponent_Template_div_input_5_listener($event) { return ctx.onContentChange($event.target); })("focus", function AngularEditorComponent_Template_div_focus_5_listener($event) { return ctx.onTextAreaFocus($event); })("blur", function AngularEditorComponent_Template_div_blur_5_listener($event) { return ctx.onTextAreaBlur($event); })("click", function AngularEditorComponent_Template_div_click_5_listener() { return ctx.exec(); })("keyup", function AngularEditorComponent_Template_div_keyup_5_listener() { return ctx.exec(); })("mouseout", function AngularEditorComponent_Template_div_mouseout_5_listener($event) { return ctx.onTextAreaMouseOut($event); })("paste", function AngularEditorComponent_Template_div_paste_5_listener($event) { return ctx.onPaste($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AngularEditorComponent_angular_editor_toolbar_9_Template, 2, 9, "angular-editor-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.config.width)("min-width", ctx.config.minWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.toolbarPosition === "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.config.height)("min-height", ctx.config.minHeight)("max-height", ctx.config.maxHeight)("outline", ctx.config.outline === false ? "none" : undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("contenteditable", ctx.config.editable)("tabindex", ctx.disabled ? 0 - 1 : ctx.tabIndex)("translate", ctx.config.translate)("spellcheck", ctx.config.spellcheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.placeholder || ctx.config["placeholder"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.toolbarPosition === "bottom");
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], AngularEditorToolbarComponent]; }, styles: ["@charset \"UTF-8\";\n@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa[_ngcontent-%COMP%]{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg[_ngcontent-%COMP%]{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x[_ngcontent-%COMP%]{font-size:2em}.fa-3x[_ngcontent-%COMP%]{font-size:3em}.fa-4x[_ngcontent-%COMP%]{font-size:4em}.fa-5x[_ngcontent-%COMP%]{font-size:5em}.fa-fw[_ngcontent-%COMP%]{width:1.2857142857em;text-align:center}.fa-ul[_ngcontent-%COMP%]{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{position:relative}.fa-li[_ngcontent-%COMP%]{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg[_ngcontent-%COMP%]{left:-1.8571428571em}.fa-border[_ngcontent-%COMP%]{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left[_ngcontent-%COMP%]{float:left}.fa-pull-right[_ngcontent-%COMP%]{float:right}.fa.fa-pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.fa-pull-right[_ngcontent-%COMP%]{margin-left:.3em}.pull-right[_ngcontent-%COMP%]{float:right}.pull-left[_ngcontent-%COMP%]{float:left}.fa.pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.pull-right[_ngcontent-%COMP%]{margin-left:.3em}.fa-spin[_ngcontent-%COMP%]{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse[_ngcontent-%COMP%]{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.fa-rotate-90[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";transform:scaleY(-1)}[_ngcontent-%COMP%]:root   .fa-flip-horizontal[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-vertical[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-90[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-180[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-270[_ngcontent-%COMP%]{filter:none}.fa-stack[_ngcontent-%COMP%]{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x[_ngcontent-%COMP%], .fa-stack-2x[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x[_ngcontent-%COMP%]{line-height:inherit}.fa-stack-2x[_ngcontent-%COMP%]{font-size:2em}.fa-inverse[_ngcontent-%COMP%]{color:#fff}.fa-glass[_ngcontent-%COMP%]:before{content:\"\uF000\"}.fa-music[_ngcontent-%COMP%]:before{content:\"\uF001\"}.fa-search[_ngcontent-%COMP%]:before{content:\"\uF002\"}.fa-envelope-o[_ngcontent-%COMP%]:before{content:\"\uF003\"}.fa-heart[_ngcontent-%COMP%]:before{content:\"\uF004\"}.fa-star[_ngcontent-%COMP%]:before{content:\"\uF005\"}.fa-star-o[_ngcontent-%COMP%]:before{content:\"\uF006\"}.fa-user[_ngcontent-%COMP%]:before{content:\"\uF007\"}.fa-film[_ngcontent-%COMP%]:before{content:\"\uF008\"}.fa-th-large[_ngcontent-%COMP%]:before{content:\"\uF009\"}.fa-th[_ngcontent-%COMP%]:before{content:\"\uF00A\"}.fa-th-list[_ngcontent-%COMP%]:before{content:\"\uF00B\"}.fa-check[_ngcontent-%COMP%]:before{content:\"\uF00C\"}.fa-close[_ngcontent-%COMP%]:before, .fa-remove[_ngcontent-%COMP%]:before, .fa-times[_ngcontent-%COMP%]:before{content:\"\uF00D\"}.fa-search-plus[_ngcontent-%COMP%]:before{content:\"\uF00E\"}.fa-search-minus[_ngcontent-%COMP%]:before{content:\"\uF010\"}.fa-power-off[_ngcontent-%COMP%]:before{content:\"\uF011\"}.fa-signal[_ngcontent-%COMP%]:before{content:\"\uF012\"}.fa-cog[_ngcontent-%COMP%]:before, .fa-gear[_ngcontent-%COMP%]:before{content:\"\uF013\"}.fa-trash-o[_ngcontent-%COMP%]:before{content:\"\uF014\"}.fa-home[_ngcontent-%COMP%]:before{content:\"\uF015\"}.fa-file-o[_ngcontent-%COMP%]:before{content:\"\uF016\"}.fa-clock-o[_ngcontent-%COMP%]:before{content:\"\uF017\"}.fa-road[_ngcontent-%COMP%]:before{content:\"\uF018\"}.fa-download[_ngcontent-%COMP%]:before{content:\"\uF019\"}.fa-arrow-circle-o-down[_ngcontent-%COMP%]:before{content:\"\uF01A\"}.fa-arrow-circle-o-up[_ngcontent-%COMP%]:before{content:\"\uF01B\"}.fa-inbox[_ngcontent-%COMP%]:before{content:\"\uF01C\"}.fa-play-circle-o[_ngcontent-%COMP%]:before{content:\"\uF01D\"}.fa-repeat[_ngcontent-%COMP%]:before, .fa-rotate-right[_ngcontent-%COMP%]:before{content:\"\uF01E\"}.fa-refresh[_ngcontent-%COMP%]:before{content:\"\uF021\"}.fa-list-alt[_ngcontent-%COMP%]:before{content:\"\uF022\"}.fa-lock[_ngcontent-%COMP%]:before{content:\"\uF023\"}.fa-flag[_ngcontent-%COMP%]:before{content:\"\uF024\"}.fa-headphones[_ngcontent-%COMP%]:before{content:\"\uF025\"}.fa-volume-off[_ngcontent-%COMP%]:before{content:\"\uF026\"}.fa-volume-down[_ngcontent-%COMP%]:before{content:\"\uF027\"}.fa-volume-up[_ngcontent-%COMP%]:before{content:\"\uF028\"}.fa-qrcode[_ngcontent-%COMP%]:before{content:\"\uF029\"}.fa-barcode[_ngcontent-%COMP%]:before{content:\"\uF02A\"}.fa-tag[_ngcontent-%COMP%]:before{content:\"\uF02B\"}.fa-tags[_ngcontent-%COMP%]:before{content:\"\uF02C\"}.fa-book[_ngcontent-%COMP%]:before{content:\"\uF02D\"}.fa-bookmark[_ngcontent-%COMP%]:before{content:\"\uF02E\"}.fa-print[_ngcontent-%COMP%]:before{content:\"\uF02F\"}.fa-camera[_ngcontent-%COMP%]:before{content:\"\uF030\"}.fa-font[_ngcontent-%COMP%]:before{content:\"\uF031\"}.fa-bold[_ngcontent-%COMP%]:before{content:\"\uF032\"}.fa-italic[_ngcontent-%COMP%]:before{content:\"\uF033\"}.fa-text-height[_ngcontent-%COMP%]:before{content:\"\uF034\"}.fa-text-width[_ngcontent-%COMP%]:before{content:\"\uF035\"}.fa-align-left[_ngcontent-%COMP%]:before{content:\"\uF036\"}.fa-align-center[_ngcontent-%COMP%]:before{content:\"\uF037\"}.fa-align-right[_ngcontent-%COMP%]:before{content:\"\uF038\"}.fa-align-justify[_ngcontent-%COMP%]:before{content:\"\uF039\"}.fa-list[_ngcontent-%COMP%]:before{content:\"\uF03A\"}.fa-dedent[_ngcontent-%COMP%]:before, .fa-outdent[_ngcontent-%COMP%]:before{content:\"\uF03B\"}.fa-indent[_ngcontent-%COMP%]:before{content:\"\uF03C\"}.fa-video-camera[_ngcontent-%COMP%]:before{content:\"\uF03D\"}.fa-image[_ngcontent-%COMP%]:before, .fa-photo[_ngcontent-%COMP%]:before, .fa-picture-o[_ngcontent-%COMP%]:before{content:\"\uF03E\"}.fa-pencil[_ngcontent-%COMP%]:before{content:\"\uF040\"}.fa-map-marker[_ngcontent-%COMP%]:before{content:\"\uF041\"}.fa-adjust[_ngcontent-%COMP%]:before{content:\"\uF042\"}.fa-tint[_ngcontent-%COMP%]:before{content:\"\uF043\"}.fa-edit[_ngcontent-%COMP%]:before, .fa-pencil-square-o[_ngcontent-%COMP%]:before{content:\"\uF044\"}.fa-share-square-o[_ngcontent-%COMP%]:before{content:\"\uF045\"}.fa-check-square-o[_ngcontent-%COMP%]:before{content:\"\uF046\"}.fa-arrows[_ngcontent-%COMP%]:before{content:\"\uF047\"}.fa-step-backward[_ngcontent-%COMP%]:before{content:\"\uF048\"}.fa-fast-backward[_ngcontent-%COMP%]:before{content:\"\uF049\"}.fa-backward[_ngcontent-%COMP%]:before{content:\"\uF04A\"}.fa-play[_ngcontent-%COMP%]:before{content:\"\uF04B\"}.fa-pause[_ngcontent-%COMP%]:before{content:\"\uF04C\"}.fa-stop[_ngcontent-%COMP%]:before{content:\"\uF04D\"}.fa-forward[_ngcontent-%COMP%]:before{content:\"\uF04E\"}.fa-fast-forward[_ngcontent-%COMP%]:before{content:\"\uF050\"}.fa-step-forward[_ngcontent-%COMP%]:before{content:\"\uF051\"}.fa-eject[_ngcontent-%COMP%]:before{content:\"\uF052\"}.fa-chevron-left[_ngcontent-%COMP%]:before{content:\"\uF053\"}.fa-chevron-right[_ngcontent-%COMP%]:before{content:\"\uF054\"}.fa-plus-circle[_ngcontent-%COMP%]:before{content:\"\uF055\"}.fa-minus-circle[_ngcontent-%COMP%]:before{content:\"\uF056\"}.fa-times-circle[_ngcontent-%COMP%]:before{content:\"\uF057\"}.fa-check-circle[_ngcontent-%COMP%]:before{content:\"\uF058\"}.fa-question-circle[_ngcontent-%COMP%]:before{content:\"\uF059\"}.fa-info-circle[_ngcontent-%COMP%]:before{content:\"\uF05A\"}.fa-crosshairs[_ngcontent-%COMP%]:before{content:\"\uF05B\"}.fa-times-circle-o[_ngcontent-%COMP%]:before{content:\"\uF05C\"}.fa-check-circle-o[_ngcontent-%COMP%]:before{content:\"\uF05D\"}.fa-ban[_ngcontent-%COMP%]:before{content:\"\uF05E\"}.fa-arrow-left[_ngcontent-%COMP%]:before{content:\"\uF060\"}.fa-arrow-right[_ngcontent-%COMP%]:before{content:\"\uF061\"}.fa-arrow-up[_ngcontent-%COMP%]:before{content:\"\uF062\"}.fa-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF063\"}.fa-mail-forward[_ngcontent-%COMP%]:before, .fa-share[_ngcontent-%COMP%]:before{content:\"\uF064\"}.fa-expand[_ngcontent-%COMP%]:before{content:\"\uF065\"}.fa-compress[_ngcontent-%COMP%]:before{content:\"\uF066\"}.fa-plus[_ngcontent-%COMP%]:before{content:\"\uF067\"}.fa-minus[_ngcontent-%COMP%]:before{content:\"\uF068\"}.fa-asterisk[_ngcontent-%COMP%]:before{content:\"\uF069\"}.fa-exclamation-circle[_ngcontent-%COMP%]:before{content:\"\uF06A\"}.fa-gift[_ngcontent-%COMP%]:before{content:\"\uF06B\"}.fa-leaf[_ngcontent-%COMP%]:before{content:\"\uF06C\"}.fa-fire[_ngcontent-%COMP%]:before{content:\"\uF06D\"}.fa-eye[_ngcontent-%COMP%]:before{content:\"\uF06E\"}.fa-eye-slash[_ngcontent-%COMP%]:before{content:\"\uF070\"}.fa-exclamation-triangle[_ngcontent-%COMP%]:before, .fa-warning[_ngcontent-%COMP%]:before{content:\"\uF071\"}.fa-plane[_ngcontent-%COMP%]:before{content:\"\uF072\"}.fa-calendar[_ngcontent-%COMP%]:before{content:\"\uF073\"}.fa-random[_ngcontent-%COMP%]:before{content:\"\uF074\"}.fa-comment[_ngcontent-%COMP%]:before{content:\"\uF075\"}.fa-magnet[_ngcontent-%COMP%]:before{content:\"\uF076\"}.fa-chevron-up[_ngcontent-%COMP%]:before{content:\"\uF077\"}.fa-chevron-down[_ngcontent-%COMP%]:before{content:\"\uF078\"}.fa-retweet[_ngcontent-%COMP%]:before{content:\"\uF079\"}.fa-shopping-cart[_ngcontent-%COMP%]:before{content:\"\uF07A\"}.fa-folder[_ngcontent-%COMP%]:before{content:\"\uF07B\"}.fa-folder-open[_ngcontent-%COMP%]:before{content:\"\uF07C\"}.fa-arrows-v[_ngcontent-%COMP%]:before{content:\"\uF07D\"}.fa-arrows-h[_ngcontent-%COMP%]:before{content:\"\uF07E\"}.fa-bar-chart-o[_ngcontent-%COMP%]:before, .fa-bar-chart[_ngcontent-%COMP%]:before{content:\"\uF080\"}.fa-twitter-square[_ngcontent-%COMP%]:before{content:\"\uF081\"}.fa-facebook-square[_ngcontent-%COMP%]:before{content:\"\uF082\"}.fa-camera-retro[_ngcontent-%COMP%]:before{content:\"\uF083\"}.fa-key[_ngcontent-%COMP%]:before{content:\"\uF084\"}.fa-cogs[_ngcontent-%COMP%]:before, .fa-gears[_ngcontent-%COMP%]:before{content:\"\uF085\"}.fa-comments[_ngcontent-%COMP%]:before{content:\"\uF086\"}.fa-thumbs-o-up[_ngcontent-%COMP%]:before{content:\"\uF087\"}.fa-thumbs-o-down[_ngcontent-%COMP%]:before{content:\"\uF088\"}.fa-star-half[_ngcontent-%COMP%]:before{content:\"\uF089\"}.fa-heart-o[_ngcontent-%COMP%]:before{content:\"\uF08A\"}.fa-sign-out[_ngcontent-%COMP%]:before{content:\"\uF08B\"}.fa-linkedin-square[_ngcontent-%COMP%]:before{content:\"\uF08C\"}.fa-thumb-tack[_ngcontent-%COMP%]:before{content:\"\uF08D\"}.fa-external-link[_ngcontent-%COMP%]:before{content:\"\uF08E\"}.fa-sign-in[_ngcontent-%COMP%]:before{content:\"\uF090\"}.fa-trophy[_ngcontent-%COMP%]:before{content:\"\uF091\"}.fa-github-square[_ngcontent-%COMP%]:before{content:\"\uF092\"}.fa-upload[_ngcontent-%COMP%]:before{content:\"\uF093\"}.fa-lemon-o[_ngcontent-%COMP%]:before{content:\"\uF094\"}.fa-phone[_ngcontent-%COMP%]:before{content:\"\uF095\"}.fa-square-o[_ngcontent-%COMP%]:before{content:\"\uF096\"}.fa-bookmark-o[_ngcontent-%COMP%]:before{content:\"\uF097\"}.fa-phone-square[_ngcontent-%COMP%]:before{content:\"\uF098\"}.fa-twitter[_ngcontent-%COMP%]:before{content:\"\uF099\"}.fa-facebook-f[_ngcontent-%COMP%]:before, .fa-facebook[_ngcontent-%COMP%]:before{content:\"\uF09A\"}.fa-github[_ngcontent-%COMP%]:before{content:\"\uF09B\"}.fa-unlock[_ngcontent-%COMP%]:before{content:\"\uF09C\"}.fa-credit-card[_ngcontent-%COMP%]:before{content:\"\uF09D\"}.fa-feed[_ngcontent-%COMP%]:before, .fa-rss[_ngcontent-%COMP%]:before{content:\"\uF09E\"}.fa-hdd-o[_ngcontent-%COMP%]:before{content:\"\uF0A0\"}.fa-bullhorn[_ngcontent-%COMP%]:before{content:\"\uF0A1\"}.fa-bell[_ngcontent-%COMP%]:before{content:\"\uF0F3\"}.fa-certificate[_ngcontent-%COMP%]:before{content:\"\uF0A3\"}.fa-hand-o-right[_ngcontent-%COMP%]:before{content:\"\uF0A4\"}.fa-hand-o-left[_ngcontent-%COMP%]:before{content:\"\uF0A5\"}.fa-hand-o-up[_ngcontent-%COMP%]:before{content:\"\uF0A6\"}.fa-hand-o-down[_ngcontent-%COMP%]:before{content:\"\uF0A7\"}.fa-arrow-circle-left[_ngcontent-%COMP%]:before{content:\"\uF0A8\"}.fa-arrow-circle-right[_ngcontent-%COMP%]:before{content:\"\uF0A9\"}.fa-arrow-circle-up[_ngcontent-%COMP%]:before{content:\"\uF0AA\"}.fa-arrow-circle-down[_ngcontent-%COMP%]:before{content:\"\uF0AB\"}.fa-globe[_ngcontent-%COMP%]:before{content:\"\uF0AC\"}.fa-wrench[_ngcontent-%COMP%]:before{content:\"\uF0AD\"}.fa-tasks[_ngcontent-%COMP%]:before{content:\"\uF0AE\"}.fa-filter[_ngcontent-%COMP%]:before{content:\"\uF0B0\"}.fa-briefcase[_ngcontent-%COMP%]:before{content:\"\uF0B1\"}.fa-arrows-alt[_ngcontent-%COMP%]:before{content:\"\uF0B2\"}.fa-group[_ngcontent-%COMP%]:before, .fa-users[_ngcontent-%COMP%]:before{content:\"\uF0C0\"}.fa-chain[_ngcontent-%COMP%]:before, .fa-link[_ngcontent-%COMP%]:before{content:\"\uF0C1\"}.fa-cloud[_ngcontent-%COMP%]:before{content:\"\uF0C2\"}.fa-flask[_ngcontent-%COMP%]:before{content:\"\uF0C3\"}.fa-cut[_ngcontent-%COMP%]:before, .fa-scissors[_ngcontent-%COMP%]:before{content:\"\uF0C4\"}.fa-copy[_ngcontent-%COMP%]:before, .fa-files-o[_ngcontent-%COMP%]:before{content:\"\uF0C5\"}.fa-paperclip[_ngcontent-%COMP%]:before{content:\"\uF0C6\"}.fa-floppy-o[_ngcontent-%COMP%]:before, .fa-save[_ngcontent-%COMP%]:before{content:\"\uF0C7\"}.fa-square[_ngcontent-%COMP%]:before{content:\"\uF0C8\"}.fa-bars[_ngcontent-%COMP%]:before, .fa-navicon[_ngcontent-%COMP%]:before, .fa-reorder[_ngcontent-%COMP%]:before{content:\"\uF0C9\"}.fa-list-ul[_ngcontent-%COMP%]:before{content:\"\uF0CA\"}.fa-list-ol[_ngcontent-%COMP%]:before{content:\"\uF0CB\"}.fa-strikethrough[_ngcontent-%COMP%]:before{content:\"\uF0CC\"}.fa-underline[_ngcontent-%COMP%]:before{content:\"\uF0CD\"}.fa-table[_ngcontent-%COMP%]:before{content:\"\uF0CE\"}.fa-magic[_ngcontent-%COMP%]:before{content:\"\uF0D0\"}.fa-truck[_ngcontent-%COMP%]:before{content:\"\uF0D1\"}.fa-pinterest[_ngcontent-%COMP%]:before{content:\"\uF0D2\"}.fa-pinterest-square[_ngcontent-%COMP%]:before{content:\"\uF0D3\"}.fa-google-plus-square[_ngcontent-%COMP%]:before{content:\"\uF0D4\"}.fa-google-plus[_ngcontent-%COMP%]:before{content:\"\uF0D5\"}.fa-money[_ngcontent-%COMP%]:before{content:\"\uF0D6\"}.fa-caret-down[_ngcontent-%COMP%]:before{content:\"\uF0D7\"}.fa-caret-up[_ngcontent-%COMP%]:before{content:\"\uF0D8\"}.fa-caret-left[_ngcontent-%COMP%]:before{content:\"\uF0D9\"}.fa-caret-right[_ngcontent-%COMP%]:before{content:\"\uF0DA\"}.fa-columns[_ngcontent-%COMP%]:before{content:\"\uF0DB\"}.fa-sort[_ngcontent-%COMP%]:before, .fa-unsorted[_ngcontent-%COMP%]:before{content:\"\uF0DC\"}.fa-sort-desc[_ngcontent-%COMP%]:before, .fa-sort-down[_ngcontent-%COMP%]:before{content:\"\uF0DD\"}.fa-sort-asc[_ngcontent-%COMP%]:before, .fa-sort-up[_ngcontent-%COMP%]:before{content:\"\uF0DE\"}.fa-envelope[_ngcontent-%COMP%]:before{content:\"\uF0E0\"}.fa-linkedin[_ngcontent-%COMP%]:before{content:\"\uF0E1\"}.fa-rotate-left[_ngcontent-%COMP%]:before, .fa-undo[_ngcontent-%COMP%]:before{content:\"\uF0E2\"}.fa-gavel[_ngcontent-%COMP%]:before, .fa-legal[_ngcontent-%COMP%]:before{content:\"\uF0E3\"}.fa-dashboard[_ngcontent-%COMP%]:before, .fa-tachometer[_ngcontent-%COMP%]:before{content:\"\uF0E4\"}.fa-comment-o[_ngcontent-%COMP%]:before{content:\"\uF0E5\"}.fa-comments-o[_ngcontent-%COMP%]:before{content:\"\uF0E6\"}.fa-bolt[_ngcontent-%COMP%]:before, .fa-flash[_ngcontent-%COMP%]:before{content:\"\uF0E7\"}.fa-sitemap[_ngcontent-%COMP%]:before{content:\"\uF0E8\"}.fa-umbrella[_ngcontent-%COMP%]:before{content:\"\uF0E9\"}.fa-clipboard[_ngcontent-%COMP%]:before, .fa-paste[_ngcontent-%COMP%]:before{content:\"\uF0EA\"}.fa-lightbulb-o[_ngcontent-%COMP%]:before{content:\"\uF0EB\"}.fa-exchange[_ngcontent-%COMP%]:before{content:\"\uF0EC\"}.fa-cloud-download[_ngcontent-%COMP%]:before{content:\"\uF0ED\"}.fa-cloud-upload[_ngcontent-%COMP%]:before{content:\"\uF0EE\"}.fa-user-md[_ngcontent-%COMP%]:before{content:\"\uF0F0\"}.fa-stethoscope[_ngcontent-%COMP%]:before{content:\"\uF0F1\"}.fa-suitcase[_ngcontent-%COMP%]:before{content:\"\uF0F2\"}.fa-bell-o[_ngcontent-%COMP%]:before{content:\"\uF0A2\"}.fa-coffee[_ngcontent-%COMP%]:before{content:\"\uF0F4\"}.fa-cutlery[_ngcontent-%COMP%]:before{content:\"\uF0F5\"}.fa-file-text-o[_ngcontent-%COMP%]:before{content:\"\uF0F6\"}.fa-building-o[_ngcontent-%COMP%]:before{content:\"\uF0F7\"}.fa-hospital-o[_ngcontent-%COMP%]:before{content:\"\uF0F8\"}.fa-ambulance[_ngcontent-%COMP%]:before{content:\"\uF0F9\"}.fa-medkit[_ngcontent-%COMP%]:before{content:\"\uF0FA\"}.fa-fighter-jet[_ngcontent-%COMP%]:before{content:\"\uF0FB\"}.fa-beer[_ngcontent-%COMP%]:before{content:\"\uF0FC\"}.fa-h-square[_ngcontent-%COMP%]:before{content:\"\uF0FD\"}.fa-plus-square[_ngcontent-%COMP%]:before{content:\"\uF0FE\"}.fa-angle-double-left[_ngcontent-%COMP%]:before{content:\"\uF100\"}.fa-angle-double-right[_ngcontent-%COMP%]:before{content:\"\uF101\"}.fa-angle-double-up[_ngcontent-%COMP%]:before{content:\"\uF102\"}.fa-angle-double-down[_ngcontent-%COMP%]:before{content:\"\uF103\"}.fa-angle-left[_ngcontent-%COMP%]:before{content:\"\uF104\"}.fa-angle-right[_ngcontent-%COMP%]:before{content:\"\uF105\"}.fa-angle-up[_ngcontent-%COMP%]:before{content:\"\uF106\"}.fa-angle-down[_ngcontent-%COMP%]:before{content:\"\uF107\"}.fa-desktop[_ngcontent-%COMP%]:before{content:\"\uF108\"}.fa-laptop[_ngcontent-%COMP%]:before{content:\"\uF109\"}.fa-tablet[_ngcontent-%COMP%]:before{content:\"\uF10A\"}.fa-mobile-phone[_ngcontent-%COMP%]:before, .fa-mobile[_ngcontent-%COMP%]:before{content:\"\uF10B\"}.fa-circle-o[_ngcontent-%COMP%]:before{content:\"\uF10C\"}.fa-quote-left[_ngcontent-%COMP%]:before{content:\"\uF10D\"}.fa-quote-right[_ngcontent-%COMP%]:before{content:\"\uF10E\"}.fa-spinner[_ngcontent-%COMP%]:before{content:\"\uF110\"}.fa-circle[_ngcontent-%COMP%]:before{content:\"\uF111\"}.fa-mail-reply[_ngcontent-%COMP%]:before, .fa-reply[_ngcontent-%COMP%]:before{content:\"\uF112\"}.fa-github-alt[_ngcontent-%COMP%]:before{content:\"\uF113\"}.fa-folder-o[_ngcontent-%COMP%]:before{content:\"\uF114\"}.fa-folder-open-o[_ngcontent-%COMP%]:before{content:\"\uF115\"}.fa-smile-o[_ngcontent-%COMP%]:before{content:\"\uF118\"}.fa-frown-o[_ngcontent-%COMP%]:before{content:\"\uF119\"}.fa-meh-o[_ngcontent-%COMP%]:before{content:\"\uF11A\"}.fa-gamepad[_ngcontent-%COMP%]:before{content:\"\uF11B\"}.fa-keyboard-o[_ngcontent-%COMP%]:before{content:\"\uF11C\"}.fa-flag-o[_ngcontent-%COMP%]:before{content:\"\uF11D\"}.fa-flag-checkered[_ngcontent-%COMP%]:before{content:\"\uF11E\"}.fa-terminal[_ngcontent-%COMP%]:before{content:\"\uF120\"}.fa-code[_ngcontent-%COMP%]:before{content:\"\uF121\"}.fa-mail-reply-all[_ngcontent-%COMP%]:before, .fa-reply-all[_ngcontent-%COMP%]:before{content:\"\uF122\"}.fa-star-half-empty[_ngcontent-%COMP%]:before, .fa-star-half-full[_ngcontent-%COMP%]:before, .fa-star-half-o[_ngcontent-%COMP%]:before{content:\"\uF123\"}.fa-location-arrow[_ngcontent-%COMP%]:before{content:\"\uF124\"}.fa-crop[_ngcontent-%COMP%]:before{content:\"\uF125\"}.fa-code-fork[_ngcontent-%COMP%]:before{content:\"\uF126\"}.fa-chain-broken[_ngcontent-%COMP%]:before, .fa-unlink[_ngcontent-%COMP%]:before{content:\"\uF127\"}.fa-question[_ngcontent-%COMP%]:before{content:\"\uF128\"}.fa-info[_ngcontent-%COMP%]:before{content:\"\uF129\"}.fa-exclamation[_ngcontent-%COMP%]:before{content:\"\uF12A\"}.fa-superscript[_ngcontent-%COMP%]:before{content:\"\uF12B\"}.fa-subscript[_ngcontent-%COMP%]:before{content:\"\uF12C\"}.fa-eraser[_ngcontent-%COMP%]:before{content:\"\uF12D\"}.fa-puzzle-piece[_ngcontent-%COMP%]:before{content:\"\uF12E\"}.fa-microphone[_ngcontent-%COMP%]:before{content:\"\uF130\"}.fa-microphone-slash[_ngcontent-%COMP%]:before{content:\"\uF131\"}.fa-shield[_ngcontent-%COMP%]:before{content:\"\uF132\"}.fa-calendar-o[_ngcontent-%COMP%]:before{content:\"\uF133\"}.fa-fire-extinguisher[_ngcontent-%COMP%]:before{content:\"\uF134\"}.fa-rocket[_ngcontent-%COMP%]:before{content:\"\uF135\"}.fa-maxcdn[_ngcontent-%COMP%]:before{content:\"\uF136\"}.fa-chevron-circle-left[_ngcontent-%COMP%]:before{content:\"\uF137\"}.fa-chevron-circle-right[_ngcontent-%COMP%]:before{content:\"\uF138\"}.fa-chevron-circle-up[_ngcontent-%COMP%]:before{content:\"\uF139\"}.fa-chevron-circle-down[_ngcontent-%COMP%]:before{content:\"\uF13A\"}.fa-html5[_ngcontent-%COMP%]:before{content:\"\uF13B\"}.fa-css3[_ngcontent-%COMP%]:before{content:\"\uF13C\"}.fa-anchor[_ngcontent-%COMP%]:before{content:\"\uF13D\"}.fa-unlock-alt[_ngcontent-%COMP%]:before{content:\"\uF13E\"}.fa-bullseye[_ngcontent-%COMP%]:before{content:\"\uF140\"}.fa-ellipsis-h[_ngcontent-%COMP%]:before{content:\"\uF141\"}.fa-ellipsis-v[_ngcontent-%COMP%]:before{content:\"\uF142\"}.fa-rss-square[_ngcontent-%COMP%]:before{content:\"\uF143\"}.fa-play-circle[_ngcontent-%COMP%]:before{content:\"\uF144\"}.fa-ticket[_ngcontent-%COMP%]:before{content:\"\uF145\"}.fa-minus-square[_ngcontent-%COMP%]:before{content:\"\uF146\"}.fa-minus-square-o[_ngcontent-%COMP%]:before{content:\"\uF147\"}.fa-level-up[_ngcontent-%COMP%]:before{content:\"\uF148\"}.fa-level-down[_ngcontent-%COMP%]:before{content:\"\uF149\"}.fa-check-square[_ngcontent-%COMP%]:before{content:\"\uF14A\"}.fa-pencil-square[_ngcontent-%COMP%]:before{content:\"\uF14B\"}.fa-external-link-square[_ngcontent-%COMP%]:before{content:\"\uF14C\"}.fa-share-square[_ngcontent-%COMP%]:before{content:\"\uF14D\"}.fa-compass[_ngcontent-%COMP%]:before{content:\"\uF14E\"}.fa-caret-square-o-down[_ngcontent-%COMP%]:before, .fa-toggle-down[_ngcontent-%COMP%]:before{content:\"\uF150\"}.fa-caret-square-o-up[_ngcontent-%COMP%]:before, .fa-toggle-up[_ngcontent-%COMP%]:before{content:\"\uF151\"}.fa-caret-square-o-right[_ngcontent-%COMP%]:before, .fa-toggle-right[_ngcontent-%COMP%]:before{content:\"\uF152\"}.fa-eur[_ngcontent-%COMP%]:before, .fa-euro[_ngcontent-%COMP%]:before{content:\"\uF153\"}.fa-gbp[_ngcontent-%COMP%]:before{content:\"\uF154\"}.fa-dollar[_ngcontent-%COMP%]:before, .fa-usd[_ngcontent-%COMP%]:before{content:\"\uF155\"}.fa-inr[_ngcontent-%COMP%]:before, .fa-rupee[_ngcontent-%COMP%]:before{content:\"\uF156\"}.fa-cny[_ngcontent-%COMP%]:before, .fa-jpy[_ngcontent-%COMP%]:before, .fa-rmb[_ngcontent-%COMP%]:before, .fa-yen[_ngcontent-%COMP%]:before{content:\"\uF157\"}.fa-rouble[_ngcontent-%COMP%]:before, .fa-rub[_ngcontent-%COMP%]:before, .fa-ruble[_ngcontent-%COMP%]:before{content:\"\uF158\"}.fa-krw[_ngcontent-%COMP%]:before, .fa-won[_ngcontent-%COMP%]:before{content:\"\uF159\"}.fa-bitcoin[_ngcontent-%COMP%]:before, .fa-btc[_ngcontent-%COMP%]:before{content:\"\uF15A\"}.fa-file[_ngcontent-%COMP%]:before{content:\"\uF15B\"}.fa-file-text[_ngcontent-%COMP%]:before{content:\"\uF15C\"}.fa-sort-alpha-asc[_ngcontent-%COMP%]:before{content:\"\uF15D\"}.fa-sort-alpha-desc[_ngcontent-%COMP%]:before{content:\"\uF15E\"}.fa-sort-amount-asc[_ngcontent-%COMP%]:before{content:\"\uF160\"}.fa-sort-amount-desc[_ngcontent-%COMP%]:before{content:\"\uF161\"}.fa-sort-numeric-asc[_ngcontent-%COMP%]:before{content:\"\uF162\"}.fa-sort-numeric-desc[_ngcontent-%COMP%]:before{content:\"\uF163\"}.fa-thumbs-up[_ngcontent-%COMP%]:before{content:\"\uF164\"}.fa-thumbs-down[_ngcontent-%COMP%]:before{content:\"\uF165\"}.fa-youtube-square[_ngcontent-%COMP%]:before{content:\"\uF166\"}.fa-youtube[_ngcontent-%COMP%]:before{content:\"\uF167\"}.fa-xing[_ngcontent-%COMP%]:before{content:\"\uF168\"}.fa-xing-square[_ngcontent-%COMP%]:before{content:\"\uF169\"}.fa-youtube-play[_ngcontent-%COMP%]:before{content:\"\uF16A\"}.fa-dropbox[_ngcontent-%COMP%]:before{content:\"\uF16B\"}.fa-stack-overflow[_ngcontent-%COMP%]:before{content:\"\uF16C\"}.fa-instagram[_ngcontent-%COMP%]:before{content:\"\uF16D\"}.fa-flickr[_ngcontent-%COMP%]:before{content:\"\uF16E\"}.fa-adn[_ngcontent-%COMP%]:before{content:\"\uF170\"}.fa-bitbucket[_ngcontent-%COMP%]:before{content:\"\uF171\"}.fa-bitbucket-square[_ngcontent-%COMP%]:before{content:\"\uF172\"}.fa-tumblr[_ngcontent-%COMP%]:before{content:\"\uF173\"}.fa-tumblr-square[_ngcontent-%COMP%]:before{content:\"\uF174\"}.fa-long-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF175\"}.fa-long-arrow-up[_ngcontent-%COMP%]:before{content:\"\uF176\"}.fa-long-arrow-left[_ngcontent-%COMP%]:before{content:\"\uF177\"}.fa-long-arrow-right[_ngcontent-%COMP%]:before{content:\"\uF178\"}.fa-apple[_ngcontent-%COMP%]:before{content:\"\uF179\"}.fa-windows[_ngcontent-%COMP%]:before{content:\"\uF17A\"}.fa-android[_ngcontent-%COMP%]:before{content:\"\uF17B\"}.fa-linux[_ngcontent-%COMP%]:before{content:\"\uF17C\"}.fa-dribbble[_ngcontent-%COMP%]:before{content:\"\uF17D\"}.fa-skype[_ngcontent-%COMP%]:before{content:\"\uF17E\"}.fa-foursquare[_ngcontent-%COMP%]:before{content:\"\uF180\"}.fa-trello[_ngcontent-%COMP%]:before{content:\"\uF181\"}.fa-female[_ngcontent-%COMP%]:before{content:\"\uF182\"}.fa-male[_ngcontent-%COMP%]:before{content:\"\uF183\"}.fa-gittip[_ngcontent-%COMP%]:before, .fa-gratipay[_ngcontent-%COMP%]:before{content:\"\uF184\"}.fa-sun-o[_ngcontent-%COMP%]:before{content:\"\uF185\"}.fa-moon-o[_ngcontent-%COMP%]:before{content:\"\uF186\"}.fa-archive[_ngcontent-%COMP%]:before{content:\"\uF187\"}.fa-bug[_ngcontent-%COMP%]:before{content:\"\uF188\"}.fa-vk[_ngcontent-%COMP%]:before{content:\"\uF189\"}.fa-weibo[_ngcontent-%COMP%]:before{content:\"\uF18A\"}.fa-renren[_ngcontent-%COMP%]:before{content:\"\uF18B\"}.fa-pagelines[_ngcontent-%COMP%]:before{content:\"\uF18C\"}.fa-stack-exchange[_ngcontent-%COMP%]:before{content:\"\uF18D\"}.fa-arrow-circle-o-right[_ngcontent-%COMP%]:before{content:\"\uF18E\"}.fa-arrow-circle-o-left[_ngcontent-%COMP%]:before{content:\"\uF190\"}.fa-caret-square-o-left[_ngcontent-%COMP%]:before, .fa-toggle-left[_ngcontent-%COMP%]:before{content:\"\uF191\"}.fa-dot-circle-o[_ngcontent-%COMP%]:before{content:\"\uF192\"}.fa-wheelchair[_ngcontent-%COMP%]:before{content:\"\uF193\"}.fa-vimeo-square[_ngcontent-%COMP%]:before{content:\"\uF194\"}.fa-try[_ngcontent-%COMP%]:before, .fa-turkish-lira[_ngcontent-%COMP%]:before{content:\"\uF195\"}.fa-plus-square-o[_ngcontent-%COMP%]:before{content:\"\uF196\"}.fa-space-shuttle[_ngcontent-%COMP%]:before{content:\"\uF197\"}.fa-slack[_ngcontent-%COMP%]:before{content:\"\uF198\"}.fa-envelope-square[_ngcontent-%COMP%]:before{content:\"\uF199\"}.fa-wordpress[_ngcontent-%COMP%]:before{content:\"\uF19A\"}.fa-openid[_ngcontent-%COMP%]:before{content:\"\uF19B\"}.fa-bank[_ngcontent-%COMP%]:before, .fa-institution[_ngcontent-%COMP%]:before, .fa-university[_ngcontent-%COMP%]:before{content:\"\uF19C\"}.fa-graduation-cap[_ngcontent-%COMP%]:before, .fa-mortar-board[_ngcontent-%COMP%]:before{content:\"\uF19D\"}.fa-yahoo[_ngcontent-%COMP%]:before{content:\"\uF19E\"}.fa-google[_ngcontent-%COMP%]:before{content:\"\uF1A0\"}.fa-reddit[_ngcontent-%COMP%]:before{content:\"\uF1A1\"}.fa-reddit-square[_ngcontent-%COMP%]:before{content:\"\uF1A2\"}.fa-stumbleupon-circle[_ngcontent-%COMP%]:before{content:\"\uF1A3\"}.fa-stumbleupon[_ngcontent-%COMP%]:before{content:\"\uF1A4\"}.fa-delicious[_ngcontent-%COMP%]:before{content:\"\uF1A5\"}.fa-digg[_ngcontent-%COMP%]:before{content:\"\uF1A6\"}.fa-pied-piper-pp[_ngcontent-%COMP%]:before{content:\"\uF1A7\"}.fa-pied-piper-alt[_ngcontent-%COMP%]:before{content:\"\uF1A8\"}.fa-drupal[_ngcontent-%COMP%]:before{content:\"\uF1A9\"}.fa-joomla[_ngcontent-%COMP%]:before{content:\"\uF1AA\"}.fa-language[_ngcontent-%COMP%]:before{content:\"\uF1AB\"}.fa-fax[_ngcontent-%COMP%]:before{content:\"\uF1AC\"}.fa-building[_ngcontent-%COMP%]:before{content:\"\uF1AD\"}.fa-child[_ngcontent-%COMP%]:before{content:\"\uF1AE\"}.fa-paw[_ngcontent-%COMP%]:before{content:\"\uF1B0\"}.fa-spoon[_ngcontent-%COMP%]:before{content:\"\uF1B1\"}.fa-cube[_ngcontent-%COMP%]:before{content:\"\uF1B2\"}.fa-cubes[_ngcontent-%COMP%]:before{content:\"\uF1B3\"}.fa-behance[_ngcontent-%COMP%]:before{content:\"\uF1B4\"}.fa-behance-square[_ngcontent-%COMP%]:before{content:\"\uF1B5\"}.fa-steam[_ngcontent-%COMP%]:before{content:\"\uF1B6\"}.fa-steam-square[_ngcontent-%COMP%]:before{content:\"\uF1B7\"}.fa-recycle[_ngcontent-%COMP%]:before{content:\"\uF1B8\"}.fa-automobile[_ngcontent-%COMP%]:before, .fa-car[_ngcontent-%COMP%]:before{content:\"\uF1B9\"}.fa-cab[_ngcontent-%COMP%]:before, .fa-taxi[_ngcontent-%COMP%]:before{content:\"\uF1BA\"}.fa-tree[_ngcontent-%COMP%]:before{content:\"\uF1BB\"}.fa-spotify[_ngcontent-%COMP%]:before{content:\"\uF1BC\"}.fa-deviantart[_ngcontent-%COMP%]:before{content:\"\uF1BD\"}.fa-soundcloud[_ngcontent-%COMP%]:before{content:\"\uF1BE\"}.fa-database[_ngcontent-%COMP%]:before{content:\"\uF1C0\"}.fa-file-pdf-o[_ngcontent-%COMP%]:before{content:\"\uF1C1\"}.fa-file-word-o[_ngcontent-%COMP%]:before{content:\"\uF1C2\"}.fa-file-excel-o[_ngcontent-%COMP%]:before{content:\"\uF1C3\"}.fa-file-powerpoint-o[_ngcontent-%COMP%]:before{content:\"\uF1C4\"}.fa-file-image-o[_ngcontent-%COMP%]:before, .fa-file-photo-o[_ngcontent-%COMP%]:before, .fa-file-picture-o[_ngcontent-%COMP%]:before{content:\"\uF1C5\"}.fa-file-archive-o[_ngcontent-%COMP%]:before, .fa-file-zip-o[_ngcontent-%COMP%]:before{content:\"\uF1C6\"}.fa-file-audio-o[_ngcontent-%COMP%]:before, .fa-file-sound-o[_ngcontent-%COMP%]:before{content:\"\uF1C7\"}.fa-file-movie-o[_ngcontent-%COMP%]:before, .fa-file-video-o[_ngcontent-%COMP%]:before{content:\"\uF1C8\"}.fa-file-code-o[_ngcontent-%COMP%]:before{content:\"\uF1C9\"}.fa-vine[_ngcontent-%COMP%]:before{content:\"\uF1CA\"}.fa-codepen[_ngcontent-%COMP%]:before{content:\"\uF1CB\"}.fa-jsfiddle[_ngcontent-%COMP%]:before{content:\"\uF1CC\"}.fa-life-bouy[_ngcontent-%COMP%]:before, .fa-life-buoy[_ngcontent-%COMP%]:before, .fa-life-ring[_ngcontent-%COMP%]:before, .fa-life-saver[_ngcontent-%COMP%]:before, .fa-support[_ngcontent-%COMP%]:before{content:\"\uF1CD\"}.fa-circle-o-notch[_ngcontent-%COMP%]:before{content:\"\uF1CE\"}.fa-ra[_ngcontent-%COMP%]:before, .fa-rebel[_ngcontent-%COMP%]:before, .fa-resistance[_ngcontent-%COMP%]:before{content:\"\uF1D0\"}.fa-empire[_ngcontent-%COMP%]:before, .fa-ge[_ngcontent-%COMP%]:before{content:\"\uF1D1\"}.fa-git-square[_ngcontent-%COMP%]:before{content:\"\uF1D2\"}.fa-git[_ngcontent-%COMP%]:before{content:\"\uF1D3\"}.fa-hacker-news[_ngcontent-%COMP%]:before, .fa-y-combinator-square[_ngcontent-%COMP%]:before, .fa-yc-square[_ngcontent-%COMP%]:before{content:\"\uF1D4\"}.fa-tencent-weibo[_ngcontent-%COMP%]:before{content:\"\uF1D5\"}.fa-qq[_ngcontent-%COMP%]:before{content:\"\uF1D6\"}.fa-wechat[_ngcontent-%COMP%]:before, .fa-weixin[_ngcontent-%COMP%]:before{content:\"\uF1D7\"}.fa-paper-plane[_ngcontent-%COMP%]:before, .fa-send[_ngcontent-%COMP%]:before{content:\"\uF1D8\"}.fa-paper-plane-o[_ngcontent-%COMP%]:before, .fa-send-o[_ngcontent-%COMP%]:before{content:\"\uF1D9\"}.fa-history[_ngcontent-%COMP%]:before{content:\"\uF1DA\"}.fa-circle-thin[_ngcontent-%COMP%]:before{content:\"\uF1DB\"}.fa-header[_ngcontent-%COMP%]:before{content:\"\uF1DC\"}.fa-paragraph[_ngcontent-%COMP%]:before{content:\"\uF1DD\"}.fa-sliders[_ngcontent-%COMP%]:before{content:\"\uF1DE\"}.fa-share-alt[_ngcontent-%COMP%]:before{content:\"\uF1E0\"}.fa-share-alt-square[_ngcontent-%COMP%]:before{content:\"\uF1E1\"}.fa-bomb[_ngcontent-%COMP%]:before{content:\"\uF1E2\"}.fa-futbol-o[_ngcontent-%COMP%]:before, .fa-soccer-ball-o[_ngcontent-%COMP%]:before{content:\"\uF1E3\"}.fa-tty[_ngcontent-%COMP%]:before{content:\"\uF1E4\"}.fa-binoculars[_ngcontent-%COMP%]:before{content:\"\uF1E5\"}.fa-plug[_ngcontent-%COMP%]:before{content:\"\uF1E6\"}.fa-slideshare[_ngcontent-%COMP%]:before{content:\"\uF1E7\"}.fa-twitch[_ngcontent-%COMP%]:before{content:\"\uF1E8\"}.fa-yelp[_ngcontent-%COMP%]:before{content:\"\uF1E9\"}.fa-newspaper-o[_ngcontent-%COMP%]:before{content:\"\uF1EA\"}.fa-wifi[_ngcontent-%COMP%]:before{content:\"\uF1EB\"}.fa-calculator[_ngcontent-%COMP%]:before{content:\"\uF1EC\"}.fa-paypal[_ngcontent-%COMP%]:before{content:\"\uF1ED\"}.fa-google-wallet[_ngcontent-%COMP%]:before{content:\"\uF1EE\"}.fa-cc-visa[_ngcontent-%COMP%]:before{content:\"\uF1F0\"}.fa-cc-mastercard[_ngcontent-%COMP%]:before{content:\"\uF1F1\"}.fa-cc-discover[_ngcontent-%COMP%]:before{content:\"\uF1F2\"}.fa-cc-amex[_ngcontent-%COMP%]:before{content:\"\uF1F3\"}.fa-cc-paypal[_ngcontent-%COMP%]:before{content:\"\uF1F4\"}.fa-cc-stripe[_ngcontent-%COMP%]:before{content:\"\uF1F5\"}.fa-bell-slash[_ngcontent-%COMP%]:before{content:\"\uF1F6\"}.fa-bell-slash-o[_ngcontent-%COMP%]:before{content:\"\uF1F7\"}.fa-trash[_ngcontent-%COMP%]:before{content:\"\uF1F8\"}.fa-copyright[_ngcontent-%COMP%]:before{content:\"\uF1F9\"}.fa-at[_ngcontent-%COMP%]:before{content:\"\uF1FA\"}.fa-eyedropper[_ngcontent-%COMP%]:before{content:\"\uF1FB\"}.fa-paint-brush[_ngcontent-%COMP%]:before{content:\"\uF1FC\"}.fa-birthday-cake[_ngcontent-%COMP%]:before{content:\"\uF1FD\"}.fa-area-chart[_ngcontent-%COMP%]:before{content:\"\uF1FE\"}.fa-pie-chart[_ngcontent-%COMP%]:before{content:\"\uF200\"}.fa-line-chart[_ngcontent-%COMP%]:before{content:\"\uF201\"}.fa-lastfm[_ngcontent-%COMP%]:before{content:\"\uF202\"}.fa-lastfm-square[_ngcontent-%COMP%]:before{content:\"\uF203\"}.fa-toggle-off[_ngcontent-%COMP%]:before{content:\"\uF204\"}.fa-toggle-on[_ngcontent-%COMP%]:before{content:\"\uF205\"}.fa-bicycle[_ngcontent-%COMP%]:before{content:\"\uF206\"}.fa-bus[_ngcontent-%COMP%]:before{content:\"\uF207\"}.fa-ioxhost[_ngcontent-%COMP%]:before{content:\"\uF208\"}.fa-angellist[_ngcontent-%COMP%]:before{content:\"\uF209\"}.fa-cc[_ngcontent-%COMP%]:before{content:\"\uF20A\"}.fa-ils[_ngcontent-%COMP%]:before, .fa-shekel[_ngcontent-%COMP%]:before, .fa-sheqel[_ngcontent-%COMP%]:before{content:\"\uF20B\"}.fa-meanpath[_ngcontent-%COMP%]:before{content:\"\uF20C\"}.fa-buysellads[_ngcontent-%COMP%]:before{content:\"\uF20D\"}.fa-connectdevelop[_ngcontent-%COMP%]:before{content:\"\uF20E\"}.fa-dashcube[_ngcontent-%COMP%]:before{content:\"\uF210\"}.fa-forumbee[_ngcontent-%COMP%]:before{content:\"\uF211\"}.fa-leanpub[_ngcontent-%COMP%]:before{content:\"\uF212\"}.fa-sellsy[_ngcontent-%COMP%]:before{content:\"\uF213\"}.fa-shirtsinbulk[_ngcontent-%COMP%]:before{content:\"\uF214\"}.fa-simplybuilt[_ngcontent-%COMP%]:before{content:\"\uF215\"}.fa-skyatlas[_ngcontent-%COMP%]:before{content:\"\uF216\"}.fa-cart-plus[_ngcontent-%COMP%]:before{content:\"\uF217\"}.fa-cart-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF218\"}.fa-diamond[_ngcontent-%COMP%]:before{content:\"\uF219\"}.fa-ship[_ngcontent-%COMP%]:before{content:\"\uF21A\"}.fa-user-secret[_ngcontent-%COMP%]:before{content:\"\uF21B\"}.fa-motorcycle[_ngcontent-%COMP%]:before{content:\"\uF21C\"}.fa-street-view[_ngcontent-%COMP%]:before{content:\"\uF21D\"}.fa-heartbeat[_ngcontent-%COMP%]:before{content:\"\uF21E\"}.fa-venus[_ngcontent-%COMP%]:before{content:\"\uF221\"}.fa-mars[_ngcontent-%COMP%]:before{content:\"\uF222\"}.fa-mercury[_ngcontent-%COMP%]:before{content:\"\uF223\"}.fa-intersex[_ngcontent-%COMP%]:before, .fa-transgender[_ngcontent-%COMP%]:before{content:\"\uF224\"}.fa-transgender-alt[_ngcontent-%COMP%]:before{content:\"\uF225\"}.fa-venus-double[_ngcontent-%COMP%]:before{content:\"\uF226\"}.fa-mars-double[_ngcontent-%COMP%]:before{content:\"\uF227\"}.fa-venus-mars[_ngcontent-%COMP%]:before{content:\"\uF228\"}.fa-mars-stroke[_ngcontent-%COMP%]:before{content:\"\uF229\"}.fa-mars-stroke-v[_ngcontent-%COMP%]:before{content:\"\uF22A\"}.fa-mars-stroke-h[_ngcontent-%COMP%]:before{content:\"\uF22B\"}.fa-neuter[_ngcontent-%COMP%]:before{content:\"\uF22C\"}.fa-genderless[_ngcontent-%COMP%]:before{content:\"\uF22D\"}.fa-facebook-official[_ngcontent-%COMP%]:before{content:\"\uF230\"}.fa-pinterest-p[_ngcontent-%COMP%]:before{content:\"\uF231\"}.fa-whatsapp[_ngcontent-%COMP%]:before{content:\"\uF232\"}.fa-server[_ngcontent-%COMP%]:before{content:\"\uF233\"}.fa-user-plus[_ngcontent-%COMP%]:before{content:\"\uF234\"}.fa-user-times[_ngcontent-%COMP%]:before{content:\"\uF235\"}.fa-bed[_ngcontent-%COMP%]:before, .fa-hotel[_ngcontent-%COMP%]:before{content:\"\uF236\"}.fa-viacoin[_ngcontent-%COMP%]:before{content:\"\uF237\"}.fa-train[_ngcontent-%COMP%]:before{content:\"\uF238\"}.fa-subway[_ngcontent-%COMP%]:before{content:\"\uF239\"}.fa-medium[_ngcontent-%COMP%]:before{content:\"\uF23A\"}.fa-y-combinator[_ngcontent-%COMP%]:before, .fa-yc[_ngcontent-%COMP%]:before{content:\"\uF23B\"}.fa-optin-monster[_ngcontent-%COMP%]:before{content:\"\uF23C\"}.fa-opencart[_ngcontent-%COMP%]:before{content:\"\uF23D\"}.fa-expeditedssl[_ngcontent-%COMP%]:before{content:\"\uF23E\"}.fa-battery-4[_ngcontent-%COMP%]:before, .fa-battery-full[_ngcontent-%COMP%]:before, .fa-battery[_ngcontent-%COMP%]:before{content:\"\uF240\"}.fa-battery-3[_ngcontent-%COMP%]:before, .fa-battery-three-quarters[_ngcontent-%COMP%]:before{content:\"\uF241\"}.fa-battery-2[_ngcontent-%COMP%]:before, .fa-battery-half[_ngcontent-%COMP%]:before{content:\"\uF242\"}.fa-battery-1[_ngcontent-%COMP%]:before, .fa-battery-quarter[_ngcontent-%COMP%]:before{content:\"\uF243\"}.fa-battery-0[_ngcontent-%COMP%]:before, .fa-battery-empty[_ngcontent-%COMP%]:before{content:\"\uF244\"}.fa-mouse-pointer[_ngcontent-%COMP%]:before{content:\"\uF245\"}.fa-i-cursor[_ngcontent-%COMP%]:before{content:\"\uF246\"}.fa-object-group[_ngcontent-%COMP%]:before{content:\"\uF247\"}.fa-object-ungroup[_ngcontent-%COMP%]:before{content:\"\uF248\"}.fa-sticky-note[_ngcontent-%COMP%]:before{content:\"\uF249\"}.fa-sticky-note-o[_ngcontent-%COMP%]:before{content:\"\uF24A\"}.fa-cc-jcb[_ngcontent-%COMP%]:before{content:\"\uF24B\"}.fa-cc-diners-club[_ngcontent-%COMP%]:before{content:\"\uF24C\"}.fa-clone[_ngcontent-%COMP%]:before{content:\"\uF24D\"}.fa-balance-scale[_ngcontent-%COMP%]:before{content:\"\uF24E\"}.fa-hourglass-o[_ngcontent-%COMP%]:before{content:\"\uF250\"}.fa-hourglass-1[_ngcontent-%COMP%]:before, .fa-hourglass-start[_ngcontent-%COMP%]:before{content:\"\uF251\"}.fa-hourglass-2[_ngcontent-%COMP%]:before, .fa-hourglass-half[_ngcontent-%COMP%]:before{content:\"\uF252\"}.fa-hourglass-3[_ngcontent-%COMP%]:before, .fa-hourglass-end[_ngcontent-%COMP%]:before{content:\"\uF253\"}.fa-hourglass[_ngcontent-%COMP%]:before{content:\"\uF254\"}.fa-hand-grab-o[_ngcontent-%COMP%]:before, .fa-hand-rock-o[_ngcontent-%COMP%]:before{content:\"\uF255\"}.fa-hand-paper-o[_ngcontent-%COMP%]:before, .fa-hand-stop-o[_ngcontent-%COMP%]:before{content:\"\uF256\"}.fa-hand-scissors-o[_ngcontent-%COMP%]:before{content:\"\uF257\"}.fa-hand-lizard-o[_ngcontent-%COMP%]:before{content:\"\uF258\"}.fa-hand-spock-o[_ngcontent-%COMP%]:before{content:\"\uF259\"}.fa-hand-pointer-o[_ngcontent-%COMP%]:before{content:\"\uF25A\"}.fa-hand-peace-o[_ngcontent-%COMP%]:before{content:\"\uF25B\"}.fa-trademark[_ngcontent-%COMP%]:before{content:\"\uF25C\"}.fa-registered[_ngcontent-%COMP%]:before{content:\"\uF25D\"}.fa-creative-commons[_ngcontent-%COMP%]:before{content:\"\uF25E\"}.fa-gg[_ngcontent-%COMP%]:before{content:\"\uF260\"}.fa-gg-circle[_ngcontent-%COMP%]:before{content:\"\uF261\"}.fa-tripadvisor[_ngcontent-%COMP%]:before{content:\"\uF262\"}.fa-odnoklassniki[_ngcontent-%COMP%]:before{content:\"\uF263\"}.fa-odnoklassniki-square[_ngcontent-%COMP%]:before{content:\"\uF264\"}.fa-get-pocket[_ngcontent-%COMP%]:before{content:\"\uF265\"}.fa-wikipedia-w[_ngcontent-%COMP%]:before{content:\"\uF266\"}.fa-safari[_ngcontent-%COMP%]:before{content:\"\uF267\"}.fa-chrome[_ngcontent-%COMP%]:before{content:\"\uF268\"}.fa-firefox[_ngcontent-%COMP%]:before{content:\"\uF269\"}.fa-opera[_ngcontent-%COMP%]:before{content:\"\uF26A\"}.fa-internet-explorer[_ngcontent-%COMP%]:before{content:\"\uF26B\"}.fa-television[_ngcontent-%COMP%]:before, .fa-tv[_ngcontent-%COMP%]:before{content:\"\uF26C\"}.fa-contao[_ngcontent-%COMP%]:before{content:\"\uF26D\"}.fa-500px[_ngcontent-%COMP%]:before{content:\"\uF26E\"}.fa-amazon[_ngcontent-%COMP%]:before{content:\"\uF270\"}.fa-calendar-plus-o[_ngcontent-%COMP%]:before{content:\"\uF271\"}.fa-calendar-minus-o[_ngcontent-%COMP%]:before{content:\"\uF272\"}.fa-calendar-times-o[_ngcontent-%COMP%]:before{content:\"\uF273\"}.fa-calendar-check-o[_ngcontent-%COMP%]:before{content:\"\uF274\"}.fa-industry[_ngcontent-%COMP%]:before{content:\"\uF275\"}.fa-map-pin[_ngcontent-%COMP%]:before{content:\"\uF276\"}.fa-map-signs[_ngcontent-%COMP%]:before{content:\"\uF277\"}.fa-map-o[_ngcontent-%COMP%]:before{content:\"\uF278\"}.fa-map[_ngcontent-%COMP%]:before{content:\"\uF279\"}.fa-commenting[_ngcontent-%COMP%]:before{content:\"\uF27A\"}.fa-commenting-o[_ngcontent-%COMP%]:before{content:\"\uF27B\"}.fa-houzz[_ngcontent-%COMP%]:before{content:\"\uF27C\"}.fa-vimeo[_ngcontent-%COMP%]:before{content:\"\uF27D\"}.fa-black-tie[_ngcontent-%COMP%]:before{content:\"\uF27E\"}.fa-fonticons[_ngcontent-%COMP%]:before{content:\"\uF280\"}.fa-reddit-alien[_ngcontent-%COMP%]:before{content:\"\uF281\"}.fa-edge[_ngcontent-%COMP%]:before{content:\"\uF282\"}.fa-credit-card-alt[_ngcontent-%COMP%]:before{content:\"\uF283\"}.fa-codiepie[_ngcontent-%COMP%]:before{content:\"\uF284\"}.fa-modx[_ngcontent-%COMP%]:before{content:\"\uF285\"}.fa-fort-awesome[_ngcontent-%COMP%]:before{content:\"\uF286\"}.fa-usb[_ngcontent-%COMP%]:before{content:\"\uF287\"}.fa-product-hunt[_ngcontent-%COMP%]:before{content:\"\uF288\"}.fa-mixcloud[_ngcontent-%COMP%]:before{content:\"\uF289\"}.fa-scribd[_ngcontent-%COMP%]:before{content:\"\uF28A\"}.fa-pause-circle[_ngcontent-%COMP%]:before{content:\"\uF28B\"}.fa-pause-circle-o[_ngcontent-%COMP%]:before{content:\"\uF28C\"}.fa-stop-circle[_ngcontent-%COMP%]:before{content:\"\uF28D\"}.fa-stop-circle-o[_ngcontent-%COMP%]:before{content:\"\uF28E\"}.fa-shopping-bag[_ngcontent-%COMP%]:before{content:\"\uF290\"}.fa-shopping-basket[_ngcontent-%COMP%]:before{content:\"\uF291\"}.fa-hashtag[_ngcontent-%COMP%]:before{content:\"\uF292\"}.fa-bluetooth[_ngcontent-%COMP%]:before{content:\"\uF293\"}.fa-bluetooth-b[_ngcontent-%COMP%]:before{content:\"\uF294\"}.fa-percent[_ngcontent-%COMP%]:before{content:\"\uF295\"}.fa-gitlab[_ngcontent-%COMP%]:before{content:\"\uF296\"}.fa-wpbeginner[_ngcontent-%COMP%]:before{content:\"\uF297\"}.fa-wpforms[_ngcontent-%COMP%]:before{content:\"\uF298\"}.fa-envira[_ngcontent-%COMP%]:before{content:\"\uF299\"}.fa-universal-access[_ngcontent-%COMP%]:before{content:\"\uF29A\"}.fa-wheelchair-alt[_ngcontent-%COMP%]:before{content:\"\uF29B\"}.fa-question-circle-o[_ngcontent-%COMP%]:before{content:\"\uF29C\"}.fa-blind[_ngcontent-%COMP%]:before{content:\"\uF29D\"}.fa-audio-description[_ngcontent-%COMP%]:before{content:\"\uF29E\"}.fa-volume-control-phone[_ngcontent-%COMP%]:before{content:\"\uF2A0\"}.fa-braille[_ngcontent-%COMP%]:before{content:\"\uF2A1\"}.fa-assistive-listening-systems[_ngcontent-%COMP%]:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting[_ngcontent-%COMP%]:before, .fa-asl-interpreting[_ngcontent-%COMP%]:before{content:\"\uF2A3\"}.fa-deaf[_ngcontent-%COMP%]:before, .fa-deafness[_ngcontent-%COMP%]:before, .fa-hard-of-hearing[_ngcontent-%COMP%]:before{content:\"\uF2A4\"}.fa-glide[_ngcontent-%COMP%]:before{content:\"\uF2A5\"}.fa-glide-g[_ngcontent-%COMP%]:before{content:\"\uF2A6\"}.fa-sign-language[_ngcontent-%COMP%]:before, .fa-signing[_ngcontent-%COMP%]:before{content:\"\uF2A7\"}.fa-low-vision[_ngcontent-%COMP%]:before{content:\"\uF2A8\"}.fa-viadeo[_ngcontent-%COMP%]:before{content:\"\uF2A9\"}.fa-viadeo-square[_ngcontent-%COMP%]:before{content:\"\uF2AA\"}.fa-snapchat[_ngcontent-%COMP%]:before{content:\"\uF2AB\"}.fa-snapchat-ghost[_ngcontent-%COMP%]:before{content:\"\uF2AC\"}.fa-snapchat-square[_ngcontent-%COMP%]:before{content:\"\uF2AD\"}.fa-pied-piper[_ngcontent-%COMP%]:before{content:\"\uF2AE\"}.fa-first-order[_ngcontent-%COMP%]:before{content:\"\uF2B0\"}.fa-yoast[_ngcontent-%COMP%]:before{content:\"\uF2B1\"}.fa-themeisle[_ngcontent-%COMP%]:before{content:\"\uF2B2\"}.fa-google-plus-circle[_ngcontent-%COMP%]:before, .fa-google-plus-official[_ngcontent-%COMP%]:before{content:\"\uF2B3\"}.fa-fa[_ngcontent-%COMP%]:before, .fa-font-awesome[_ngcontent-%COMP%]:before{content:\"\uF2B4\"}.fa-handshake-o[_ngcontent-%COMP%]:before{content:\"\uF2B5\"}.fa-envelope-open[_ngcontent-%COMP%]:before{content:\"\uF2B6\"}.fa-envelope-open-o[_ngcontent-%COMP%]:before{content:\"\uF2B7\"}.fa-linode[_ngcontent-%COMP%]:before{content:\"\uF2B8\"}.fa-address-book[_ngcontent-%COMP%]:before{content:\"\uF2B9\"}.fa-address-book-o[_ngcontent-%COMP%]:before{content:\"\uF2BA\"}.fa-address-card[_ngcontent-%COMP%]:before, .fa-vcard[_ngcontent-%COMP%]:before{content:\"\uF2BB\"}.fa-address-card-o[_ngcontent-%COMP%]:before, .fa-vcard-o[_ngcontent-%COMP%]:before{content:\"\uF2BC\"}.fa-user-circle[_ngcontent-%COMP%]:before{content:\"\uF2BD\"}.fa-user-circle-o[_ngcontent-%COMP%]:before{content:\"\uF2BE\"}.fa-user-o[_ngcontent-%COMP%]:before{content:\"\uF2C0\"}.fa-id-badge[_ngcontent-%COMP%]:before{content:\"\uF2C1\"}.fa-drivers-license[_ngcontent-%COMP%]:before, .fa-id-card[_ngcontent-%COMP%]:before{content:\"\uF2C2\"}.fa-drivers-license-o[_ngcontent-%COMP%]:before, .fa-id-card-o[_ngcontent-%COMP%]:before{content:\"\uF2C3\"}.fa-quora[_ngcontent-%COMP%]:before{content:\"\uF2C4\"}.fa-free-code-camp[_ngcontent-%COMP%]:before{content:\"\uF2C5\"}.fa-telegram[_ngcontent-%COMP%]:before{content:\"\uF2C6\"}.fa-thermometer-4[_ngcontent-%COMP%]:before, .fa-thermometer-full[_ngcontent-%COMP%]:before, .fa-thermometer[_ngcontent-%COMP%]:before{content:\"\uF2C7\"}.fa-thermometer-3[_ngcontent-%COMP%]:before, .fa-thermometer-three-quarters[_ngcontent-%COMP%]:before{content:\"\uF2C8\"}.fa-thermometer-2[_ngcontent-%COMP%]:before, .fa-thermometer-half[_ngcontent-%COMP%]:before{content:\"\uF2C9\"}.fa-thermometer-1[_ngcontent-%COMP%]:before, .fa-thermometer-quarter[_ngcontent-%COMP%]:before{content:\"\uF2CA\"}.fa-thermometer-0[_ngcontent-%COMP%]:before, .fa-thermometer-empty[_ngcontent-%COMP%]:before{content:\"\uF2CB\"}.fa-shower[_ngcontent-%COMP%]:before{content:\"\uF2CC\"}.fa-bath[_ngcontent-%COMP%]:before, .fa-bathtub[_ngcontent-%COMP%]:before, .fa-s15[_ngcontent-%COMP%]:before{content:\"\uF2CD\"}.fa-podcast[_ngcontent-%COMP%]:before{content:\"\uF2CE\"}.fa-window-maximize[_ngcontent-%COMP%]:before{content:\"\uF2D0\"}.fa-window-minimize[_ngcontent-%COMP%]:before{content:\"\uF2D1\"}.fa-window-restore[_ngcontent-%COMP%]:before{content:\"\uF2D2\"}.fa-times-rectangle[_ngcontent-%COMP%]:before, .fa-window-close[_ngcontent-%COMP%]:before{content:\"\uF2D3\"}.fa-times-rectangle-o[_ngcontent-%COMP%]:before, .fa-window-close-o[_ngcontent-%COMP%]:before{content:\"\uF2D4\"}.fa-bandcamp[_ngcontent-%COMP%]:before{content:\"\uF2D5\"}.fa-grav[_ngcontent-%COMP%]:before{content:\"\uF2D6\"}.fa-etsy[_ngcontent-%COMP%]:before{content:\"\uF2D7\"}.fa-imdb[_ngcontent-%COMP%]:before{content:\"\uF2D8\"}.fa-ravelry[_ngcontent-%COMP%]:before{content:\"\uF2D9\"}.fa-eercast[_ngcontent-%COMP%]:before{content:\"\uF2DA\"}.fa-microchip[_ngcontent-%COMP%]:before{content:\"\uF2DB\"}.fa-snowflake-o[_ngcontent-%COMP%]:before{content:\"\uF2DC\"}.fa-superpowers[_ngcontent-%COMP%]:before{content:\"\uF2DD\"}.fa-wpexplorer[_ngcontent-%COMP%]:before{content:\"\uF2DE\"}.fa-meetup[_ngcontent-%COMP%]:before{content:\"\uF2E0\"}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable[_ngcontent-%COMP%]:active, .sr-only-focusable[_ngcontent-%COMP%]:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a[_ngcontent-%COMP%]{cursor:pointer}.angular-editor-textarea[_ngcontent-%COMP%]{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea[_ngcontent-%COMP%]:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:hsla(0,0%,100%,.5)}.angular-editor-toolbar[_ngcontent-%COMP%]{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.focus[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:focus{outline:0}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label[_ngcontent-%COMP%]{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.background[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{background:#555}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]{background:#fff5b9}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]:hover{background-color:#fffa98}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid hsla(0,0%,100%,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:24px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h2[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h3[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{font-size:15px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h6[_ngcontent-%COMP%]{font-size:13px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .pre[_ngcontent-%COMP%]{font-size:12px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]{display:inline-block;width:50px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size1[_ngcontent-%COMP%]{font-size:10px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size2[_ngcontent-%COMP%]{font-size:12px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size3[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size4[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size5[_ngcontent-%COMP%]{font-size:18px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size6[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size7[_ngcontent-%COMP%]{font-size:22px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{position:relative;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]:not([style*=\"display:none\"]):not([style*=\"display: none\"]){display:inline-block}.angular-editor[_ngcontent-%COMP%]{position:relative}.angular-editor[_ngcontent-%COMP%]     [contenteditable=true]:empty:before{content:attr(placeholder);color:#868e96;opacity:1}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]{position:relative}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%]{min-height:5rem;padding:.5rem .8rem 1rem;border:1px solid #ddd;background-color:transparent;overflow-x:hidden;overflow-y:auto;position:relative}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%]     blockquote{margin-left:1rem;border-left:.2em solid #dfe2e5;padding-left:.5rem}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]     p{margin-bottom:0}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-placeholder[_ngcontent-%COMP%]{display:none;position:absolute;top:0;padding:.5rem .8rem 1rem .9rem;color:#6c757d;opacity:.75}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper.show-placeholder[_ngcontent-%COMP%]   .angular-editor-placeholder[_ngcontent-%COMP%]{display:block}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper.disabled[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.5;pointer-events:none}"] });
AngularEditorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: AngularEditorService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['tabindex',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['autofocus',] }] }
];
AngularEditorComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    html: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    textArea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['editor', { static: true },] }],
    editorWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['editorWrapper', { static: true },] }],
    editorToolbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['editorToolbar',] }],
    viewMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    blurEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['blur',] }],
    focusEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['focus',] }],
    tabindex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.tabindex',] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'angular-editor',
                template: "<div\n     class=\"angular-editor\"\n     #angularEditor\n     [style.width]=\"config.width\"\n     [style.minWidth]=\"config.minWidth\"\n>\n     <angular-editor-toolbar\n          *ngIf=\"config.toolbarPosition === 'top'\"\n          #editorToolbar\n          [id]=\"id\"\n          [uploadUrl]=\"config.uploadUrl\"\n          [upload]=\"config.upload\"\n          [showToolbar]=\"config.showToolbar !== undefined ? config.showToolbar : true\"\n          [fonts]=\"getFonts()\"\n          [customClasses]=\"config.customClasses\"\n          [defaultFontName]=\"config.defaultFontName\"\n          [defaultFontSize]=\"config.defaultFontSize\"\n          [hiddenButtons]=\"config.toolbarHiddenButtons\"\n          (execute)=\"executeCommand($event)\"\n     ></angular-editor-toolbar>\n\n     <div\n          class=\"angular-editor-wrapper\"\n          #editorWrapper\n     >\n          <div\n               #editor\n               class=\"angular-editor-textarea\"\n               [attr.contenteditable]=\"config.editable\"\n               [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n               [attr.translate]=\"config.translate\"\n               [attr.spellcheck]=\"config.spellcheck\"\n               [style.height]=\"config.height\"\n               [style.minHeight]=\"config.minHeight\"\n               [style.maxHeight]=\"config.maxHeight\"\n               [style.outline]=\"config.outline === false ? 'none': undefined\"\n               (input)=\"onContentChange($event.target)\"\n               (focus)=\"onTextAreaFocus($event)\"\n               (blur)=\"onTextAreaBlur($event)\"\n               (click)=\"exec()\"\n               (keyup)=\"exec()\"\n               (mouseout)=\"onTextAreaMouseOut($event)\"\n               (paste)=\"onPaste($event)\"\n          >\n          </div>\n          <span class=\"angular-editor-placeholder\">{{ placeholder || config['placeholder'] }}</span>\n     </div>\n     <angular-editor-toolbar\n          *ngIf=\"config.toolbarPosition === 'bottom'\"\n          #editorToolbar\n          [id]=\"id\"\n          [uploadUrl]=\"config.uploadUrl\"\n          [upload]=\"config.upload\"\n          [showToolbar]=\"config.showToolbar !== undefined ? config.showToolbar : true\"\n          [fonts]=\"getFonts()\"\n          [customClasses]=\"config.customClasses\"\n          [defaultFontName]=\"config.defaultFontName\"\n          [defaultFontSize]=\"config.defaultFontSize\"\n          [hiddenButtons]=\"config.toolbarHiddenButtons\"\n          (execute)=\"executeCommand($event)\"\n     ></angular-editor-toolbar>\n</div>\n",
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => AngularEditorComponent),
                        multi: true
                    },
                    AngularEditorService
                ],
                styles: ["@charset \"UTF-8\";\n/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";transform:scaleY(-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\uF000\"}.fa-music:before{content:\"\uF001\"}.fa-search:before{content:\"\uF002\"}.fa-envelope-o:before{content:\"\uF003\"}.fa-heart:before{content:\"\uF004\"}.fa-star:before{content:\"\uF005\"}.fa-star-o:before{content:\"\uF006\"}.fa-user:before{content:\"\uF007\"}.fa-film:before{content:\"\uF008\"}.fa-th-large:before{content:\"\uF009\"}.fa-th:before{content:\"\uF00A\"}.fa-th-list:before{content:\"\uF00B\"}.fa-check:before{content:\"\uF00C\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\uF00D\"}.fa-search-plus:before{content:\"\uF00E\"}.fa-search-minus:before{content:\"\uF010\"}.fa-power-off:before{content:\"\uF011\"}.fa-signal:before{content:\"\uF012\"}.fa-cog:before,.fa-gear:before{content:\"\uF013\"}.fa-trash-o:before{content:\"\uF014\"}.fa-home:before{content:\"\uF015\"}.fa-file-o:before{content:\"\uF016\"}.fa-clock-o:before{content:\"\uF017\"}.fa-road:before{content:\"\uF018\"}.fa-download:before{content:\"\uF019\"}.fa-arrow-circle-o-down:before{content:\"\uF01A\"}.fa-arrow-circle-o-up:before{content:\"\uF01B\"}.fa-inbox:before{content:\"\uF01C\"}.fa-play-circle-o:before{content:\"\uF01D\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\uF01E\"}.fa-refresh:before{content:\"\uF021\"}.fa-list-alt:before{content:\"\uF022\"}.fa-lock:before{content:\"\uF023\"}.fa-flag:before{content:\"\uF024\"}.fa-headphones:before{content:\"\uF025\"}.fa-volume-off:before{content:\"\uF026\"}.fa-volume-down:before{content:\"\uF027\"}.fa-volume-up:before{content:\"\uF028\"}.fa-qrcode:before{content:\"\uF029\"}.fa-barcode:before{content:\"\uF02A\"}.fa-tag:before{content:\"\uF02B\"}.fa-tags:before{content:\"\uF02C\"}.fa-book:before{content:\"\uF02D\"}.fa-bookmark:before{content:\"\uF02E\"}.fa-print:before{content:\"\uF02F\"}.fa-camera:before{content:\"\uF030\"}.fa-font:before{content:\"\uF031\"}.fa-bold:before{content:\"\uF032\"}.fa-italic:before{content:\"\uF033\"}.fa-text-height:before{content:\"\uF034\"}.fa-text-width:before{content:\"\uF035\"}.fa-align-left:before{content:\"\uF036\"}.fa-align-center:before{content:\"\uF037\"}.fa-align-right:before{content:\"\uF038\"}.fa-align-justify:before{content:\"\uF039\"}.fa-list:before{content:\"\uF03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\uF03B\"}.fa-indent:before{content:\"\uF03C\"}.fa-video-camera:before{content:\"\uF03D\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\uF03E\"}.fa-pencil:before{content:\"\uF040\"}.fa-map-marker:before{content:\"\uF041\"}.fa-adjust:before{content:\"\uF042\"}.fa-tint:before{content:\"\uF043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\uF044\"}.fa-share-square-o:before{content:\"\uF045\"}.fa-check-square-o:before{content:\"\uF046\"}.fa-arrows:before{content:\"\uF047\"}.fa-step-backward:before{content:\"\uF048\"}.fa-fast-backward:before{content:\"\uF049\"}.fa-backward:before{content:\"\uF04A\"}.fa-play:before{content:\"\uF04B\"}.fa-pause:before{content:\"\uF04C\"}.fa-stop:before{content:\"\uF04D\"}.fa-forward:before{content:\"\uF04E\"}.fa-fast-forward:before{content:\"\uF050\"}.fa-step-forward:before{content:\"\uF051\"}.fa-eject:before{content:\"\uF052\"}.fa-chevron-left:before{content:\"\uF053\"}.fa-chevron-right:before{content:\"\uF054\"}.fa-plus-circle:before{content:\"\uF055\"}.fa-minus-circle:before{content:\"\uF056\"}.fa-times-circle:before{content:\"\uF057\"}.fa-check-circle:before{content:\"\uF058\"}.fa-question-circle:before{content:\"\uF059\"}.fa-info-circle:before{content:\"\uF05A\"}.fa-crosshairs:before{content:\"\uF05B\"}.fa-times-circle-o:before{content:\"\uF05C\"}.fa-check-circle-o:before{content:\"\uF05D\"}.fa-ban:before{content:\"\uF05E\"}.fa-arrow-left:before{content:\"\uF060\"}.fa-arrow-right:before{content:\"\uF061\"}.fa-arrow-up:before{content:\"\uF062\"}.fa-arrow-down:before{content:\"\uF063\"}.fa-mail-forward:before,.fa-share:before{content:\"\uF064\"}.fa-expand:before{content:\"\uF065\"}.fa-compress:before{content:\"\uF066\"}.fa-plus:before{content:\"\uF067\"}.fa-minus:before{content:\"\uF068\"}.fa-asterisk:before{content:\"\uF069\"}.fa-exclamation-circle:before{content:\"\uF06A\"}.fa-gift:before{content:\"\uF06B\"}.fa-leaf:before{content:\"\uF06C\"}.fa-fire:before{content:\"\uF06D\"}.fa-eye:before{content:\"\uF06E\"}.fa-eye-slash:before{content:\"\uF070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\uF071\"}.fa-plane:before{content:\"\uF072\"}.fa-calendar:before{content:\"\uF073\"}.fa-random:before{content:\"\uF074\"}.fa-comment:before{content:\"\uF075\"}.fa-magnet:before{content:\"\uF076\"}.fa-chevron-up:before{content:\"\uF077\"}.fa-chevron-down:before{content:\"\uF078\"}.fa-retweet:before{content:\"\uF079\"}.fa-shopping-cart:before{content:\"\uF07A\"}.fa-folder:before{content:\"\uF07B\"}.fa-folder-open:before{content:\"\uF07C\"}.fa-arrows-v:before{content:\"\uF07D\"}.fa-arrows-h:before{content:\"\uF07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\uF080\"}.fa-twitter-square:before{content:\"\uF081\"}.fa-facebook-square:before{content:\"\uF082\"}.fa-camera-retro:before{content:\"\uF083\"}.fa-key:before{content:\"\uF084\"}.fa-cogs:before,.fa-gears:before{content:\"\uF085\"}.fa-comments:before{content:\"\uF086\"}.fa-thumbs-o-up:before{content:\"\uF087\"}.fa-thumbs-o-down:before{content:\"\uF088\"}.fa-star-half:before{content:\"\uF089\"}.fa-heart-o:before{content:\"\uF08A\"}.fa-sign-out:before{content:\"\uF08B\"}.fa-linkedin-square:before{content:\"\uF08C\"}.fa-thumb-tack:before{content:\"\uF08D\"}.fa-external-link:before{content:\"\uF08E\"}.fa-sign-in:before{content:\"\uF090\"}.fa-trophy:before{content:\"\uF091\"}.fa-github-square:before{content:\"\uF092\"}.fa-upload:before{content:\"\uF093\"}.fa-lemon-o:before{content:\"\uF094\"}.fa-phone:before{content:\"\uF095\"}.fa-square-o:before{content:\"\uF096\"}.fa-bookmark-o:before{content:\"\uF097\"}.fa-phone-square:before{content:\"\uF098\"}.fa-twitter:before{content:\"\uF099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\uF09A\"}.fa-github:before{content:\"\uF09B\"}.fa-unlock:before{content:\"\uF09C\"}.fa-credit-card:before{content:\"\uF09D\"}.fa-feed:before,.fa-rss:before{content:\"\uF09E\"}.fa-hdd-o:before{content:\"\uF0A0\"}.fa-bullhorn:before{content:\"\uF0A1\"}.fa-bell:before{content:\"\uF0F3\"}.fa-certificate:before{content:\"\uF0A3\"}.fa-hand-o-right:before{content:\"\uF0A4\"}.fa-hand-o-left:before{content:\"\uF0A5\"}.fa-hand-o-up:before{content:\"\uF0A6\"}.fa-hand-o-down:before{content:\"\uF0A7\"}.fa-arrow-circle-left:before{content:\"\uF0A8\"}.fa-arrow-circle-right:before{content:\"\uF0A9\"}.fa-arrow-circle-up:before{content:\"\uF0AA\"}.fa-arrow-circle-down:before{content:\"\uF0AB\"}.fa-globe:before{content:\"\uF0AC\"}.fa-wrench:before{content:\"\uF0AD\"}.fa-tasks:before{content:\"\uF0AE\"}.fa-filter:before{content:\"\uF0B0\"}.fa-briefcase:before{content:\"\uF0B1\"}.fa-arrows-alt:before{content:\"\uF0B2\"}.fa-group:before,.fa-users:before{content:\"\uF0C0\"}.fa-chain:before,.fa-link:before{content:\"\uF0C1\"}.fa-cloud:before{content:\"\uF0C2\"}.fa-flask:before{content:\"\uF0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\uF0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\uF0C5\"}.fa-paperclip:before{content:\"\uF0C6\"}.fa-floppy-o:before,.fa-save:before{content:\"\uF0C7\"}.fa-square:before{content:\"\uF0C8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\uF0C9\"}.fa-list-ul:before{content:\"\uF0CA\"}.fa-list-ol:before{content:\"\uF0CB\"}.fa-strikethrough:before{content:\"\uF0CC\"}.fa-underline:before{content:\"\uF0CD\"}.fa-table:before{content:\"\uF0CE\"}.fa-magic:before{content:\"\uF0D0\"}.fa-truck:before{content:\"\uF0D1\"}.fa-pinterest:before{content:\"\uF0D2\"}.fa-pinterest-square:before{content:\"\uF0D3\"}.fa-google-plus-square:before{content:\"\uF0D4\"}.fa-google-plus:before{content:\"\uF0D5\"}.fa-money:before{content:\"\uF0D6\"}.fa-caret-down:before{content:\"\uF0D7\"}.fa-caret-up:before{content:\"\uF0D8\"}.fa-caret-left:before{content:\"\uF0D9\"}.fa-caret-right:before{content:\"\uF0DA\"}.fa-columns:before{content:\"\uF0DB\"}.fa-sort:before,.fa-unsorted:before{content:\"\uF0DC\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\uF0DD\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\uF0DE\"}.fa-envelope:before{content:\"\uF0E0\"}.fa-linkedin:before{content:\"\uF0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\uF0E2\"}.fa-gavel:before,.fa-legal:before{content:\"\uF0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\uF0E4\"}.fa-comment-o:before{content:\"\uF0E5\"}.fa-comments-o:before{content:\"\uF0E6\"}.fa-bolt:before,.fa-flash:before{content:\"\uF0E7\"}.fa-sitemap:before{content:\"\uF0E8\"}.fa-umbrella:before{content:\"\uF0E9\"}.fa-clipboard:before,.fa-paste:before{content:\"\uF0EA\"}.fa-lightbulb-o:before{content:\"\uF0EB\"}.fa-exchange:before{content:\"\uF0EC\"}.fa-cloud-download:before{content:\"\uF0ED\"}.fa-cloud-upload:before{content:\"\uF0EE\"}.fa-user-md:before{content:\"\uF0F0\"}.fa-stethoscope:before{content:\"\uF0F1\"}.fa-suitcase:before{content:\"\uF0F2\"}.fa-bell-o:before{content:\"\uF0A2\"}.fa-coffee:before{content:\"\uF0F4\"}.fa-cutlery:before{content:\"\uF0F5\"}.fa-file-text-o:before{content:\"\uF0F6\"}.fa-building-o:before{content:\"\uF0F7\"}.fa-hospital-o:before{content:\"\uF0F8\"}.fa-ambulance:before{content:\"\uF0F9\"}.fa-medkit:before{content:\"\uF0FA\"}.fa-fighter-jet:before{content:\"\uF0FB\"}.fa-beer:before{content:\"\uF0FC\"}.fa-h-square:before{content:\"\uF0FD\"}.fa-plus-square:before{content:\"\uF0FE\"}.fa-angle-double-left:before{content:\"\uF100\"}.fa-angle-double-right:before{content:\"\uF101\"}.fa-angle-double-up:before{content:\"\uF102\"}.fa-angle-double-down:before{content:\"\uF103\"}.fa-angle-left:before{content:\"\uF104\"}.fa-angle-right:before{content:\"\uF105\"}.fa-angle-up:before{content:\"\uF106\"}.fa-angle-down:before{content:\"\uF107\"}.fa-desktop:before{content:\"\uF108\"}.fa-laptop:before{content:\"\uF109\"}.fa-tablet:before{content:\"\uF10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\uF10B\"}.fa-circle-o:before{content:\"\uF10C\"}.fa-quote-left:before{content:\"\uF10D\"}.fa-quote-right:before{content:\"\uF10E\"}.fa-spinner:before{content:\"\uF110\"}.fa-circle:before{content:\"\uF111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\uF112\"}.fa-github-alt:before{content:\"\uF113\"}.fa-folder-o:before{content:\"\uF114\"}.fa-folder-open-o:before{content:\"\uF115\"}.fa-smile-o:before{content:\"\uF118\"}.fa-frown-o:before{content:\"\uF119\"}.fa-meh-o:before{content:\"\uF11A\"}.fa-gamepad:before{content:\"\uF11B\"}.fa-keyboard-o:before{content:\"\uF11C\"}.fa-flag-o:before{content:\"\uF11D\"}.fa-flag-checkered:before{content:\"\uF11E\"}.fa-terminal:before{content:\"\uF120\"}.fa-code:before{content:\"\uF121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\uF122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\uF123\"}.fa-location-arrow:before{content:\"\uF124\"}.fa-crop:before{content:\"\uF125\"}.fa-code-fork:before{content:\"\uF126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\uF127\"}.fa-question:before{content:\"\uF128\"}.fa-info:before{content:\"\uF129\"}.fa-exclamation:before{content:\"\uF12A\"}.fa-superscript:before{content:\"\uF12B\"}.fa-subscript:before{content:\"\uF12C\"}.fa-eraser:before{content:\"\uF12D\"}.fa-puzzle-piece:before{content:\"\uF12E\"}.fa-microphone:before{content:\"\uF130\"}.fa-microphone-slash:before{content:\"\uF131\"}.fa-shield:before{content:\"\uF132\"}.fa-calendar-o:before{content:\"\uF133\"}.fa-fire-extinguisher:before{content:\"\uF134\"}.fa-rocket:before{content:\"\uF135\"}.fa-maxcdn:before{content:\"\uF136\"}.fa-chevron-circle-left:before{content:\"\uF137\"}.fa-chevron-circle-right:before{content:\"\uF138\"}.fa-chevron-circle-up:before{content:\"\uF139\"}.fa-chevron-circle-down:before{content:\"\uF13A\"}.fa-html5:before{content:\"\uF13B\"}.fa-css3:before{content:\"\uF13C\"}.fa-anchor:before{content:\"\uF13D\"}.fa-unlock-alt:before{content:\"\uF13E\"}.fa-bullseye:before{content:\"\uF140\"}.fa-ellipsis-h:before{content:\"\uF141\"}.fa-ellipsis-v:before{content:\"\uF142\"}.fa-rss-square:before{content:\"\uF143\"}.fa-play-circle:before{content:\"\uF144\"}.fa-ticket:before{content:\"\uF145\"}.fa-minus-square:before{content:\"\uF146\"}.fa-minus-square-o:before{content:\"\uF147\"}.fa-level-up:before{content:\"\uF148\"}.fa-level-down:before{content:\"\uF149\"}.fa-check-square:before{content:\"\uF14A\"}.fa-pencil-square:before{content:\"\uF14B\"}.fa-external-link-square:before{content:\"\uF14C\"}.fa-share-square:before{content:\"\uF14D\"}.fa-compass:before{content:\"\uF14E\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\uF150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\uF151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\uF152\"}.fa-eur:before,.fa-euro:before{content:\"\uF153\"}.fa-gbp:before{content:\"\uF154\"}.fa-dollar:before,.fa-usd:before{content:\"\uF155\"}.fa-inr:before,.fa-rupee:before{content:\"\uF156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\uF157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\uF158\"}.fa-krw:before,.fa-won:before{content:\"\uF159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\uF15A\"}.fa-file:before{content:\"\uF15B\"}.fa-file-text:before{content:\"\uF15C\"}.fa-sort-alpha-asc:before{content:\"\uF15D\"}.fa-sort-alpha-desc:before{content:\"\uF15E\"}.fa-sort-amount-asc:before{content:\"\uF160\"}.fa-sort-amount-desc:before{content:\"\uF161\"}.fa-sort-numeric-asc:before{content:\"\uF162\"}.fa-sort-numeric-desc:before{content:\"\uF163\"}.fa-thumbs-up:before{content:\"\uF164\"}.fa-thumbs-down:before{content:\"\uF165\"}.fa-youtube-square:before{content:\"\uF166\"}.fa-youtube:before{content:\"\uF167\"}.fa-xing:before{content:\"\uF168\"}.fa-xing-square:before{content:\"\uF169\"}.fa-youtube-play:before{content:\"\uF16A\"}.fa-dropbox:before{content:\"\uF16B\"}.fa-stack-overflow:before{content:\"\uF16C\"}.fa-instagram:before{content:\"\uF16D\"}.fa-flickr:before{content:\"\uF16E\"}.fa-adn:before{content:\"\uF170\"}.fa-bitbucket:before{content:\"\uF171\"}.fa-bitbucket-square:before{content:\"\uF172\"}.fa-tumblr:before{content:\"\uF173\"}.fa-tumblr-square:before{content:\"\uF174\"}.fa-long-arrow-down:before{content:\"\uF175\"}.fa-long-arrow-up:before{content:\"\uF176\"}.fa-long-arrow-left:before{content:\"\uF177\"}.fa-long-arrow-right:before{content:\"\uF178\"}.fa-apple:before{content:\"\uF179\"}.fa-windows:before{content:\"\uF17A\"}.fa-android:before{content:\"\uF17B\"}.fa-linux:before{content:\"\uF17C\"}.fa-dribbble:before{content:\"\uF17D\"}.fa-skype:before{content:\"\uF17E\"}.fa-foursquare:before{content:\"\uF180\"}.fa-trello:before{content:\"\uF181\"}.fa-female:before{content:\"\uF182\"}.fa-male:before{content:\"\uF183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\uF184\"}.fa-sun-o:before{content:\"\uF185\"}.fa-moon-o:before{content:\"\uF186\"}.fa-archive:before{content:\"\uF187\"}.fa-bug:before{content:\"\uF188\"}.fa-vk:before{content:\"\uF189\"}.fa-weibo:before{content:\"\uF18A\"}.fa-renren:before{content:\"\uF18B\"}.fa-pagelines:before{content:\"\uF18C\"}.fa-stack-exchange:before{content:\"\uF18D\"}.fa-arrow-circle-o-right:before{content:\"\uF18E\"}.fa-arrow-circle-o-left:before{content:\"\uF190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\uF191\"}.fa-dot-circle-o:before{content:\"\uF192\"}.fa-wheelchair:before{content:\"\uF193\"}.fa-vimeo-square:before{content:\"\uF194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\uF195\"}.fa-plus-square-o:before{content:\"\uF196\"}.fa-space-shuttle:before{content:\"\uF197\"}.fa-slack:before{content:\"\uF198\"}.fa-envelope-square:before{content:\"\uF199\"}.fa-wordpress:before{content:\"\uF19A\"}.fa-openid:before{content:\"\uF19B\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\uF19C\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\uF19D\"}.fa-yahoo:before{content:\"\uF19E\"}.fa-google:before{content:\"\uF1A0\"}.fa-reddit:before{content:\"\uF1A1\"}.fa-reddit-square:before{content:\"\uF1A2\"}.fa-stumbleupon-circle:before{content:\"\uF1A3\"}.fa-stumbleupon:before{content:\"\uF1A4\"}.fa-delicious:before{content:\"\uF1A5\"}.fa-digg:before{content:\"\uF1A6\"}.fa-pied-piper-pp:before{content:\"\uF1A7\"}.fa-pied-piper-alt:before{content:\"\uF1A8\"}.fa-drupal:before{content:\"\uF1A9\"}.fa-joomla:before{content:\"\uF1AA\"}.fa-language:before{content:\"\uF1AB\"}.fa-fax:before{content:\"\uF1AC\"}.fa-building:before{content:\"\uF1AD\"}.fa-child:before{content:\"\uF1AE\"}.fa-paw:before{content:\"\uF1B0\"}.fa-spoon:before{content:\"\uF1B1\"}.fa-cube:before{content:\"\uF1B2\"}.fa-cubes:before{content:\"\uF1B3\"}.fa-behance:before{content:\"\uF1B4\"}.fa-behance-square:before{content:\"\uF1B5\"}.fa-steam:before{content:\"\uF1B6\"}.fa-steam-square:before{content:\"\uF1B7\"}.fa-recycle:before{content:\"\uF1B8\"}.fa-automobile:before,.fa-car:before{content:\"\uF1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\uF1BA\"}.fa-tree:before{content:\"\uF1BB\"}.fa-spotify:before{content:\"\uF1BC\"}.fa-deviantart:before{content:\"\uF1BD\"}.fa-soundcloud:before{content:\"\uF1BE\"}.fa-database:before{content:\"\uF1C0\"}.fa-file-pdf-o:before{content:\"\uF1C1\"}.fa-file-word-o:before{content:\"\uF1C2\"}.fa-file-excel-o:before{content:\"\uF1C3\"}.fa-file-powerpoint-o:before{content:\"\uF1C4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\uF1C5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\uF1C6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\uF1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\uF1C8\"}.fa-file-code-o:before{content:\"\uF1C9\"}.fa-vine:before{content:\"\uF1CA\"}.fa-codepen:before{content:\"\uF1CB\"}.fa-jsfiddle:before{content:\"\uF1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\uF1CD\"}.fa-circle-o-notch:before{content:\"\uF1CE\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\uF1D0\"}.fa-empire:before,.fa-ge:before{content:\"\uF1D1\"}.fa-git-square:before{content:\"\uF1D2\"}.fa-git:before{content:\"\uF1D3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\uF1D4\"}.fa-tencent-weibo:before{content:\"\uF1D5\"}.fa-qq:before{content:\"\uF1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\uF1D7\"}.fa-paper-plane:before,.fa-send:before{content:\"\uF1D8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\uF1D9\"}.fa-history:before{content:\"\uF1DA\"}.fa-circle-thin:before{content:\"\uF1DB\"}.fa-header:before{content:\"\uF1DC\"}.fa-paragraph:before{content:\"\uF1DD\"}.fa-sliders:before{content:\"\uF1DE\"}.fa-share-alt:before{content:\"\uF1E0\"}.fa-share-alt-square:before{content:\"\uF1E1\"}.fa-bomb:before{content:\"\uF1E2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\uF1E3\"}.fa-tty:before{content:\"\uF1E4\"}.fa-binoculars:before{content:\"\uF1E5\"}.fa-plug:before{content:\"\uF1E6\"}.fa-slideshare:before{content:\"\uF1E7\"}.fa-twitch:before{content:\"\uF1E8\"}.fa-yelp:before{content:\"\uF1E9\"}.fa-newspaper-o:before{content:\"\uF1EA\"}.fa-wifi:before{content:\"\uF1EB\"}.fa-calculator:before{content:\"\uF1EC\"}.fa-paypal:before{content:\"\uF1ED\"}.fa-google-wallet:before{content:\"\uF1EE\"}.fa-cc-visa:before{content:\"\uF1F0\"}.fa-cc-mastercard:before{content:\"\uF1F1\"}.fa-cc-discover:before{content:\"\uF1F2\"}.fa-cc-amex:before{content:\"\uF1F3\"}.fa-cc-paypal:before{content:\"\uF1F4\"}.fa-cc-stripe:before{content:\"\uF1F5\"}.fa-bell-slash:before{content:\"\uF1F6\"}.fa-bell-slash-o:before{content:\"\uF1F7\"}.fa-trash:before{content:\"\uF1F8\"}.fa-copyright:before{content:\"\uF1F9\"}.fa-at:before{content:\"\uF1FA\"}.fa-eyedropper:before{content:\"\uF1FB\"}.fa-paint-brush:before{content:\"\uF1FC\"}.fa-birthday-cake:before{content:\"\uF1FD\"}.fa-area-chart:before{content:\"\uF1FE\"}.fa-pie-chart:before{content:\"\uF200\"}.fa-line-chart:before{content:\"\uF201\"}.fa-lastfm:before{content:\"\uF202\"}.fa-lastfm-square:before{content:\"\uF203\"}.fa-toggle-off:before{content:\"\uF204\"}.fa-toggle-on:before{content:\"\uF205\"}.fa-bicycle:before{content:\"\uF206\"}.fa-bus:before{content:\"\uF207\"}.fa-ioxhost:before{content:\"\uF208\"}.fa-angellist:before{content:\"\uF209\"}.fa-cc:before{content:\"\uF20A\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\uF20B\"}.fa-meanpath:before{content:\"\uF20C\"}.fa-buysellads:before{content:\"\uF20D\"}.fa-connectdevelop:before{content:\"\uF20E\"}.fa-dashcube:before{content:\"\uF210\"}.fa-forumbee:before{content:\"\uF211\"}.fa-leanpub:before{content:\"\uF212\"}.fa-sellsy:before{content:\"\uF213\"}.fa-shirtsinbulk:before{content:\"\uF214\"}.fa-simplybuilt:before{content:\"\uF215\"}.fa-skyatlas:before{content:\"\uF216\"}.fa-cart-plus:before{content:\"\uF217\"}.fa-cart-arrow-down:before{content:\"\uF218\"}.fa-diamond:before{content:\"\uF219\"}.fa-ship:before{content:\"\uF21A\"}.fa-user-secret:before{content:\"\uF21B\"}.fa-motorcycle:before{content:\"\uF21C\"}.fa-street-view:before{content:\"\uF21D\"}.fa-heartbeat:before{content:\"\uF21E\"}.fa-venus:before{content:\"\uF221\"}.fa-mars:before{content:\"\uF222\"}.fa-mercury:before{content:\"\uF223\"}.fa-intersex:before,.fa-transgender:before{content:\"\uF224\"}.fa-transgender-alt:before{content:\"\uF225\"}.fa-venus-double:before{content:\"\uF226\"}.fa-mars-double:before{content:\"\uF227\"}.fa-venus-mars:before{content:\"\uF228\"}.fa-mars-stroke:before{content:\"\uF229\"}.fa-mars-stroke-v:before{content:\"\uF22A\"}.fa-mars-stroke-h:before{content:\"\uF22B\"}.fa-neuter:before{content:\"\uF22C\"}.fa-genderless:before{content:\"\uF22D\"}.fa-facebook-official:before{content:\"\uF230\"}.fa-pinterest-p:before{content:\"\uF231\"}.fa-whatsapp:before{content:\"\uF232\"}.fa-server:before{content:\"\uF233\"}.fa-user-plus:before{content:\"\uF234\"}.fa-user-times:before{content:\"\uF235\"}.fa-bed:before,.fa-hotel:before{content:\"\uF236\"}.fa-viacoin:before{content:\"\uF237\"}.fa-train:before{content:\"\uF238\"}.fa-subway:before{content:\"\uF239\"}.fa-medium:before{content:\"\uF23A\"}.fa-y-combinator:before,.fa-yc:before{content:\"\uF23B\"}.fa-optin-monster:before{content:\"\uF23C\"}.fa-opencart:before{content:\"\uF23D\"}.fa-expeditedssl:before{content:\"\uF23E\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\uF240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\uF241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\uF242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\uF243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\uF244\"}.fa-mouse-pointer:before{content:\"\uF245\"}.fa-i-cursor:before{content:\"\uF246\"}.fa-object-group:before{content:\"\uF247\"}.fa-object-ungroup:before{content:\"\uF248\"}.fa-sticky-note:before{content:\"\uF249\"}.fa-sticky-note-o:before{content:\"\uF24A\"}.fa-cc-jcb:before{content:\"\uF24B\"}.fa-cc-diners-club:before{content:\"\uF24C\"}.fa-clone:before{content:\"\uF24D\"}.fa-balance-scale:before{content:\"\uF24E\"}.fa-hourglass-o:before{content:\"\uF250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\uF251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\uF252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\uF253\"}.fa-hourglass:before{content:\"\uF254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\uF255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\uF256\"}.fa-hand-scissors-o:before{content:\"\uF257\"}.fa-hand-lizard-o:before{content:\"\uF258\"}.fa-hand-spock-o:before{content:\"\uF259\"}.fa-hand-pointer-o:before{content:\"\uF25A\"}.fa-hand-peace-o:before{content:\"\uF25B\"}.fa-trademark:before{content:\"\uF25C\"}.fa-registered:before{content:\"\uF25D\"}.fa-creative-commons:before{content:\"\uF25E\"}.fa-gg:before{content:\"\uF260\"}.fa-gg-circle:before{content:\"\uF261\"}.fa-tripadvisor:before{content:\"\uF262\"}.fa-odnoklassniki:before{content:\"\uF263\"}.fa-odnoklassniki-square:before{content:\"\uF264\"}.fa-get-pocket:before{content:\"\uF265\"}.fa-wikipedia-w:before{content:\"\uF266\"}.fa-safari:before{content:\"\uF267\"}.fa-chrome:before{content:\"\uF268\"}.fa-firefox:before{content:\"\uF269\"}.fa-opera:before{content:\"\uF26A\"}.fa-internet-explorer:before{content:\"\uF26B\"}.fa-television:before,.fa-tv:before{content:\"\uF26C\"}.fa-contao:before{content:\"\uF26D\"}.fa-500px:before{content:\"\uF26E\"}.fa-amazon:before{content:\"\uF270\"}.fa-calendar-plus-o:before{content:\"\uF271\"}.fa-calendar-minus-o:before{content:\"\uF272\"}.fa-calendar-times-o:before{content:\"\uF273\"}.fa-calendar-check-o:before{content:\"\uF274\"}.fa-industry:before{content:\"\uF275\"}.fa-map-pin:before{content:\"\uF276\"}.fa-map-signs:before{content:\"\uF277\"}.fa-map-o:before{content:\"\uF278\"}.fa-map:before{content:\"\uF279\"}.fa-commenting:before{content:\"\uF27A\"}.fa-commenting-o:before{content:\"\uF27B\"}.fa-houzz:before{content:\"\uF27C\"}.fa-vimeo:before{content:\"\uF27D\"}.fa-black-tie:before{content:\"\uF27E\"}.fa-fonticons:before{content:\"\uF280\"}.fa-reddit-alien:before{content:\"\uF281\"}.fa-edge:before{content:\"\uF282\"}.fa-credit-card-alt:before{content:\"\uF283\"}.fa-codiepie:before{content:\"\uF284\"}.fa-modx:before{content:\"\uF285\"}.fa-fort-awesome:before{content:\"\uF286\"}.fa-usb:before{content:\"\uF287\"}.fa-product-hunt:before{content:\"\uF288\"}.fa-mixcloud:before{content:\"\uF289\"}.fa-scribd:before{content:\"\uF28A\"}.fa-pause-circle:before{content:\"\uF28B\"}.fa-pause-circle-o:before{content:\"\uF28C\"}.fa-stop-circle:before{content:\"\uF28D\"}.fa-stop-circle-o:before{content:\"\uF28E\"}.fa-shopping-bag:before{content:\"\uF290\"}.fa-shopping-basket:before{content:\"\uF291\"}.fa-hashtag:before{content:\"\uF292\"}.fa-bluetooth:before{content:\"\uF293\"}.fa-bluetooth-b:before{content:\"\uF294\"}.fa-percent:before{content:\"\uF295\"}.fa-gitlab:before{content:\"\uF296\"}.fa-wpbeginner:before{content:\"\uF297\"}.fa-wpforms:before{content:\"\uF298\"}.fa-envira:before{content:\"\uF299\"}.fa-universal-access:before{content:\"\uF29A\"}.fa-wheelchair-alt:before{content:\"\uF29B\"}.fa-question-circle-o:before{content:\"\uF29C\"}.fa-blind:before{content:\"\uF29D\"}.fa-audio-description:before{content:\"\uF29E\"}.fa-volume-control-phone:before{content:\"\uF2A0\"}.fa-braille:before{content:\"\uF2A1\"}.fa-assistive-listening-systems:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\uF2A3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\uF2A4\"}.fa-glide:before{content:\"\uF2A5\"}.fa-glide-g:before{content:\"\uF2A6\"}.fa-sign-language:before,.fa-signing:before{content:\"\uF2A7\"}.fa-low-vision:before{content:\"\uF2A8\"}.fa-viadeo:before{content:\"\uF2A9\"}.fa-viadeo-square:before{content:\"\uF2AA\"}.fa-snapchat:before{content:\"\uF2AB\"}.fa-snapchat-ghost:before{content:\"\uF2AC\"}.fa-snapchat-square:before{content:\"\uF2AD\"}.fa-pied-piper:before{content:\"\uF2AE\"}.fa-first-order:before{content:\"\uF2B0\"}.fa-yoast:before{content:\"\uF2B1\"}.fa-themeisle:before{content:\"\uF2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\uF2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\uF2B4\"}.fa-handshake-o:before{content:\"\uF2B5\"}.fa-envelope-open:before{content:\"\uF2B6\"}.fa-envelope-open-o:before{content:\"\uF2B7\"}.fa-linode:before{content:\"\uF2B8\"}.fa-address-book:before{content:\"\uF2B9\"}.fa-address-book-o:before{content:\"\uF2BA\"}.fa-address-card:before,.fa-vcard:before{content:\"\uF2BB\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\uF2BC\"}.fa-user-circle:before{content:\"\uF2BD\"}.fa-user-circle-o:before{content:\"\uF2BE\"}.fa-user-o:before{content:\"\uF2C0\"}.fa-id-badge:before{content:\"\uF2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\uF2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\uF2C3\"}.fa-quora:before{content:\"\uF2C4\"}.fa-free-code-camp:before{content:\"\uF2C5\"}.fa-telegram:before{content:\"\uF2C6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\uF2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\uF2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\uF2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\uF2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\uF2CB\"}.fa-shower:before{content:\"\uF2CC\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\uF2CD\"}.fa-podcast:before{content:\"\uF2CE\"}.fa-window-maximize:before{content:\"\uF2D0\"}.fa-window-minimize:before{content:\"\uF2D1\"}.fa-window-restore:before{content:\"\uF2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\uF2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\uF2D4\"}.fa-bandcamp:before{content:\"\uF2D5\"}.fa-grav:before{content:\"\uF2D6\"}.fa-etsy:before{content:\"\uF2D7\"}.fa-imdb:before{content:\"\uF2D8\"}.fa-ravelry:before{content:\"\uF2D9\"}.fa-eercast:before{content:\"\uF2DA\"}.fa-microchip:before{content:\"\uF2DB\"}.fa-snowflake-o:before{content:\"\uF2DC\"}.fa-superpowers:before{content:\"\uF2DD\"}.fa-wpexplorer:before{content:\"\uF2DE\"}.fa-meetup:before{content:\"\uF2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:hsla(0,0%,100%,.5)}.angular-editor-toolbar{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid hsla(0,0%,100%,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*=\"display:none\"]):not([style*=\"display: none\"]){display:inline-block}.angular-editor{position:relative}.angular-editor ::ng-deep [contenteditable=true]:empty:before{content:attr(placeholder);color:#868e96;opacity:1}.angular-editor .angular-editor-wrapper{position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea{min-height:5rem;padding:.5rem .8rem 1rem;border:1px solid #ddd;background-color:transparent;overflow-x:hidden;overflow-y:auto;position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea ::ng-deep blockquote{margin-left:1rem;border-left:.2em solid #dfe2e5;padding-left:.5rem}.angular-editor .angular-editor-wrapper ::ng-deep p{margin-bottom:0}.angular-editor .angular-editor-wrapper .angular-editor-placeholder{display:none;position:absolute;top:0;padding:.5rem .8rem 1rem .9rem;color:#6c757d;opacity:.75}.angular-editor .angular-editor-wrapper.show-placeholder .angular-editor-placeholder{display:block}.angular-editor .angular-editor-wrapper.disabled{cursor:not-allowed;opacity:.5;pointer-events:none}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: AngularEditorService }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['tabindex']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['autofocus']
            }] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], viewMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], blurEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['blur']
        }], focusEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['focus']
        }], tabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.tabindex']
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focus']
        }], html: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], textArea: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['editor', { static: true }]
        }], editorWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['editorWrapper', { static: true }]
        }], editorToolbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['editorToolbar']
        }] }); })();

class AngularEditorToolbarComponent {
    constructor(r, editorService, er, doc) {
        this.r = r;
        this.editorService = editorService;
        this.er = er;
        this.doc = doc;
        this.htmlMode = false;
        this.linkSelected = false;
        this.block = 'default';
        this.fontName = 'Times New Roman';
        this.fontSize = '3';
        this.headings = [
            {
                label: 'Heading 1',
                value: 'h1',
            },
            {
                label: 'Heading 2',
                value: 'h2',
            },
            {
                label: 'Heading 3',
                value: 'h3',
            },
            {
                label: 'Heading 4',
                value: 'h4',
            },
            {
                label: 'Heading 5',
                value: 'h5',
            },
            {
                label: 'Heading 6',
                value: 'h6',
            },
            {
                label: 'Heading 7',
                value: 'h7',
            },
            {
                label: 'Paragraph',
                value: 'p',
            },
            {
                label: 'Predefined',
                value: 'pre'
            },
            {
                label: 'Standard',
                value: 'div'
            },
            {
                label: 'default',
                value: 'default'
            }
        ];
        this.fontSizes = [
            {
                label: '1',
                value: '1',
            },
            {
                label: '2',
                value: '2',
            },
            {
                label: '3',
                value: '3',
            },
            {
                label: '4',
                value: '4',
            },
            {
                label: '5',
                value: '5',
            },
            {
                label: '6',
                value: '6',
            },
            {
                label: '7',
                value: '7',
            }
        ];
        this.customClassId = '-1';
        this.customClassList = [{ label: '', value: '' }];
        // uploadUrl: string;
        this.tagMap = {
            BLOCKQUOTE: 'indent',
            A: 'link'
        };
        this.select = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'PRE', 'DIV'];
        this.buttons = ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'justifyLeft', 'justifyCenter',
            'justifyRight', 'justifyFull', 'indent', 'outdent', 'insertUnorderedList', 'insertOrderedList', 'link'];
        this.fonts = [{ label: '', value: '' }];
        this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set customClasses(classes) {
        if (classes) {
            this._customClasses = classes;
            this.customClassList = this._customClasses.map((x, i) => ({ label: x.name, value: i.toString() }));
            this.customClassList.unshift({ label: 'Clear Class', value: '-1' });
        }
    }
    set defaultFontName(value) {
        if (value) {
            this.fontName = value;
        }
    }
    set defaultFontSize(value) {
        if (value) {
            this.fontSize = value;
        }
    }
    get isLinkButtonDisabled() {
        return this.htmlMode || !Boolean(this.editorService.selectedText);
    }
    /**
     * Trigger command from editor header buttons
     * @param command string from toolbar buttons
     */
    triggerCommand(command) {
        this.execute.emit(command);
    }
    /**
     * highlight editor buttons when cursor moved or positioning
     */
    triggerButtons() {
        if (!this.showToolbar) {
            return;
        }
        this.buttons.forEach(e => {
            const result = this.doc.queryCommandState(e);
            const elementById = this.doc.getElementById(e + '-' + this.id);
            if (result) {
                this.r.addClass(elementById, 'active');
            }
            else {
                this.r.removeClass(elementById, 'active');
            }
        });
    }
    /**
     * trigger highlight editor buttons when cursor moved or positioning in block
     */
    triggerBlocks(nodes) {
        if (!this.showToolbar) {
            return;
        }
        this.linkSelected = nodes.findIndex(x => x.nodeName === 'A') > -1;
        let found = false;
        this.select.forEach(y => {
            const node = nodes.find(x => x.nodeName === y);
            if (node !== undefined && y === node.nodeName) {
                if (found === false) {
                    this.block = node.nodeName.toLowerCase();
                    found = true;
                }
            }
            else if (found === false) {
                this.block = 'default';
            }
        });
        found = false;
        if (this._customClasses) {
            this._customClasses.forEach((y, index) => {
                const node = nodes.find(x => {
                    if (x instanceof Element) {
                        return x.className === y.class;
                    }
                });
                if (node !== undefined) {
                    if (found === false) {
                        this.customClassId = index.toString();
                        found = true;
                    }
                }
                else if (found === false) {
                    this.customClassId = '-1';
                }
            });
        }
        Object.keys(this.tagMap).map(e => {
            const elementById = this.doc.getElementById(this.tagMap[e] + '-' + this.id);
            const node = nodes.find(x => x.nodeName === e);
            if (node !== undefined && e === node.nodeName) {
                this.r.addClass(elementById, 'active');
            }
            else {
                this.r.removeClass(elementById, 'active');
            }
        });
        this.foreColour = this.doc.queryCommandValue('ForeColor');
        this.fontSize = this.doc.queryCommandValue('FontSize');
        this.fontName = this.doc.queryCommandValue('FontName').replace(/"/g, '');
        this.backColor = this.doc.queryCommandValue('backColor');
    }
    /**
     * insert URL link
     */
    insertUrl() {
        let url = 'https:\/\/';
        const selection = this.editorService.savedSelection;
        if (selection && selection.commonAncestorContainer.parentElement.nodeName === 'A') {
            const parent = selection.commonAncestorContainer.parentElement;
            if (parent.href !== '') {
                url = parent.href;
            }
        }
        url = prompt('Insert URL link', url);
        if (url && url !== '' && url !== 'https://') {
            this.editorService.createLink(url);
        }
    }
    /**
     * insert Video link
     */
    insertVideo() {
        this.execute.emit('');
        const url = prompt('Insert Video link', `https://`);
        if (url && url !== '' && url !== `https://`) {
            this.editorService.insertVideo(url);
        }
    }
    /** insert color */
    insertColor(color, where) {
        this.editorService.insertColor(color, where);
        this.execute.emit('');
    }
    /**
     * set font Name/family
     * @param foreColor string
     */
    setFontName(foreColor) {
        this.editorService.setFontName(foreColor);
        this.execute.emit('');
    }
    /**
     * set font Size
     * @param fontSize string
     */
    setFontSize(fontSize) {
        this.editorService.setFontSize(fontSize);
        this.execute.emit('');
    }
    /**
     * toggle editor mode (WYSIWYG or SOURCE)
     * @param m boolean
     */
    setEditorMode(m) {
        const toggleEditorModeButton = this.doc.getElementById('toggleEditorMode' + '-' + this.id);
        if (m) {
            this.r.addClass(toggleEditorModeButton, 'active');
        }
        else {
            this.r.removeClass(toggleEditorModeButton, 'active');
        }
        this.htmlMode = m;
    }
    /**
     * Upload image when file is selected.
     */
    onFileChanged(event) {
        const file = event.target.files[0];
        if (file.type.includes('image/')) {
            if (this.upload) {
                this.upload(file).subscribe(() => this.watchUploadImage);
            }
            else if (this.uploadUrl) {
                this.editorService.uploadImage(file).subscribe(() => this.watchUploadImage);
            }
            else {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const fr = e.currentTarget;
                    this.editorService.insertImage(fr.result.toString());
                };
                reader.readAsDataURL(file);
            }
        }
    }
    watchUploadImage(response, event) {
        const { imageUrl } = response.body;
        this.editorService.insertImage(imageUrl);
        event.srcElement.value = null;
    }
    /**
     * Set custom class
     */
    setCustomClass(classId) {
        if (classId === '-1') {
            this.execute.emit('clear');
        }
        else {
            this.editorService.createCustomClass(this._customClasses[+classId]);
        }
    }
    isButtonHidden(name) {
        if (!name) {
            return false;
        }
        if (!(this.hiddenButtons instanceof Array)) {
            return false;
        }
        let result;
        for (const arr of this.hiddenButtons) {
            if (arr instanceof Array) {
                result = arr.find(item => item === name);
            }
            if (result) {
                break;
            }
        }
        return result !== undefined;
    }
    focus() {
        this.execute.emit('focus');
        console.log('focused');
    }
}
AngularEditorToolbarComponent.ɵfac = function AngularEditorToolbarComponent_Factory(t) { return new (t || AngularEditorToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AngularEditorService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
AngularEditorToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AngularEditorToolbarComponent, selectors: [["angular-editor-toolbar"]], viewQuery: function AngularEditorToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myInputFile = _t.first);
    } }, inputs: { fonts: "fonts", customClasses: "customClasses", defaultFontName: "defaultFontName", defaultFontSize: "defaultFontSize", id: "id", uploadUrl: "uploadUrl", upload: "upload", showToolbar: "showToolbar", hiddenButtons: "hiddenButtons" }, outputs: { execute: "execute" }, decls: 1, vars: 1, consts: [["class", "angular-editor-toolbar", 4, "ngIf"], [1, "angular-editor-toolbar"], [1, "angular-editor-toolbar-set"], ["type", "button", "title", "Undo", "tabindex", "-1", 1, "angular-editor-button", 3, "hidden", "click"], [1, "fa", "fa-undo"], ["type", "button", "title", "Redo", "tabindex", "-1", 1, "angular-editor-button", 3, "hidden", "click"], [1, "fa", "fa-repeat"], ["type", "button", "title", "Bold", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-bold"], ["type", "button", "title", "Italic", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-italic"], ["type", "button", "title", "Underline", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-underline"], ["type", "button", "title", "Strikethrough", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-strikethrough"], ["type", "button", "title", "Subscript", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-subscript"], ["type", "button", "title", "Superscript", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-superscript"], ["type", "button", "title", "Justify Left", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-left"], ["type", "button", "title", "Justify Center", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-center"], ["type", "button", "title", "Justify Right", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-right"], ["type", "button", "title", "Justify Full", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-align-justify"], ["type", "button", "title", "Indent", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-indent"], ["type", "button", "title", "Outdent", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-outdent"], ["type", "button", "title", "Unordered List", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-list-ul"], ["type", "button", "title", "Ordered List", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-list-ol"], ["tabindex", "-1", 1, "select-heading", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"], ["tabindex", "-1", 1, "select-font", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"], ["tabindex", "-1", 1, "select-font-size", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"], ["type", "color", 2, "display", "none", 3, "change"], ["fgInput", ""], ["type", "button", "title", "Text Color", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "color-label", "foreground"], [1, "fa", "fa-font"], ["bgInput", ""], ["type", "button", "title", "Background Color", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "color-label", "background"], ["class", "angular-editor-toolbar-set", 4, "ngIf"], ["type", "button", "title", "Insert Link", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-link"], ["type", "button", "title", "Unlink", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-chain-broken"], ["accept", "image/*", "type", "file", 2, "display", "none", 3, "change"], ["fileInput", ""], ["type", "button", "title", "Insert Image", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-image"], ["type", "button", "title", "Insert Video", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-video-camera"], ["type", "button", "title", "Horizontal Line", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-minus"], ["type", "button", "title", "Clear Formatting", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "disabled", "hidden", "click"], [1, "fa", "fa-remove"], ["type", "button", "title", "HTML Code", "tabindex", "-1", 1, "angular-editor-button", 3, "id", "hidden", "click"], [1, "fa", "fa-code"], ["tabindex", "-1", 1, "select-custom-style", 3, "options", "ngModel", "disabled", "hidden", "ngModelChange", "change"]], template: function AngularEditorToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AngularEditorToolbarComponent_div_0_Template, 75, 83, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showToolbar);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], AeSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]; }, styles: ["@charset \"UTF-8\";\n@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa[_ngcontent-%COMP%]{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg[_ngcontent-%COMP%]{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x[_ngcontent-%COMP%]{font-size:2em}.fa-3x[_ngcontent-%COMP%]{font-size:3em}.fa-4x[_ngcontent-%COMP%]{font-size:4em}.fa-5x[_ngcontent-%COMP%]{font-size:5em}.fa-fw[_ngcontent-%COMP%]{width:1.2857142857em;text-align:center}.fa-ul[_ngcontent-%COMP%]{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{position:relative}.fa-li[_ngcontent-%COMP%]{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg[_ngcontent-%COMP%]{left:-1.8571428571em}.fa-border[_ngcontent-%COMP%]{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left[_ngcontent-%COMP%]{float:left}.fa-pull-right[_ngcontent-%COMP%]{float:right}.fa.fa-pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.fa-pull-right[_ngcontent-%COMP%]{margin-left:.3em}.pull-right[_ngcontent-%COMP%]{float:right}.pull-left[_ngcontent-%COMP%]{float:left}.fa.pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.pull-right[_ngcontent-%COMP%]{margin-left:.3em}.fa-spin[_ngcontent-%COMP%]{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse[_ngcontent-%COMP%]{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.fa-rotate-90[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical[_ngcontent-%COMP%]{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";transform:scaleY(-1)}[_ngcontent-%COMP%]:root   .fa-flip-horizontal[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-vertical[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-90[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-180[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-270[_ngcontent-%COMP%]{filter:none}.fa-stack[_ngcontent-%COMP%]{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x[_ngcontent-%COMP%], .fa-stack-2x[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x[_ngcontent-%COMP%]{line-height:inherit}.fa-stack-2x[_ngcontent-%COMP%]{font-size:2em}.fa-inverse[_ngcontent-%COMP%]{color:#fff}.fa-glass[_ngcontent-%COMP%]:before{content:\"\uF000\"}.fa-music[_ngcontent-%COMP%]:before{content:\"\uF001\"}.fa-search[_ngcontent-%COMP%]:before{content:\"\uF002\"}.fa-envelope-o[_ngcontent-%COMP%]:before{content:\"\uF003\"}.fa-heart[_ngcontent-%COMP%]:before{content:\"\uF004\"}.fa-star[_ngcontent-%COMP%]:before{content:\"\uF005\"}.fa-star-o[_ngcontent-%COMP%]:before{content:\"\uF006\"}.fa-user[_ngcontent-%COMP%]:before{content:\"\uF007\"}.fa-film[_ngcontent-%COMP%]:before{content:\"\uF008\"}.fa-th-large[_ngcontent-%COMP%]:before{content:\"\uF009\"}.fa-th[_ngcontent-%COMP%]:before{content:\"\uF00A\"}.fa-th-list[_ngcontent-%COMP%]:before{content:\"\uF00B\"}.fa-check[_ngcontent-%COMP%]:before{content:\"\uF00C\"}.fa-close[_ngcontent-%COMP%]:before, .fa-remove[_ngcontent-%COMP%]:before, .fa-times[_ngcontent-%COMP%]:before{content:\"\uF00D\"}.fa-search-plus[_ngcontent-%COMP%]:before{content:\"\uF00E\"}.fa-search-minus[_ngcontent-%COMP%]:before{content:\"\uF010\"}.fa-power-off[_ngcontent-%COMP%]:before{content:\"\uF011\"}.fa-signal[_ngcontent-%COMP%]:before{content:\"\uF012\"}.fa-cog[_ngcontent-%COMP%]:before, .fa-gear[_ngcontent-%COMP%]:before{content:\"\uF013\"}.fa-trash-o[_ngcontent-%COMP%]:before{content:\"\uF014\"}.fa-home[_ngcontent-%COMP%]:before{content:\"\uF015\"}.fa-file-o[_ngcontent-%COMP%]:before{content:\"\uF016\"}.fa-clock-o[_ngcontent-%COMP%]:before{content:\"\uF017\"}.fa-road[_ngcontent-%COMP%]:before{content:\"\uF018\"}.fa-download[_ngcontent-%COMP%]:before{content:\"\uF019\"}.fa-arrow-circle-o-down[_ngcontent-%COMP%]:before{content:\"\uF01A\"}.fa-arrow-circle-o-up[_ngcontent-%COMP%]:before{content:\"\uF01B\"}.fa-inbox[_ngcontent-%COMP%]:before{content:\"\uF01C\"}.fa-play-circle-o[_ngcontent-%COMP%]:before{content:\"\uF01D\"}.fa-repeat[_ngcontent-%COMP%]:before, .fa-rotate-right[_ngcontent-%COMP%]:before{content:\"\uF01E\"}.fa-refresh[_ngcontent-%COMP%]:before{content:\"\uF021\"}.fa-list-alt[_ngcontent-%COMP%]:before{content:\"\uF022\"}.fa-lock[_ngcontent-%COMP%]:before{content:\"\uF023\"}.fa-flag[_ngcontent-%COMP%]:before{content:\"\uF024\"}.fa-headphones[_ngcontent-%COMP%]:before{content:\"\uF025\"}.fa-volume-off[_ngcontent-%COMP%]:before{content:\"\uF026\"}.fa-volume-down[_ngcontent-%COMP%]:before{content:\"\uF027\"}.fa-volume-up[_ngcontent-%COMP%]:before{content:\"\uF028\"}.fa-qrcode[_ngcontent-%COMP%]:before{content:\"\uF029\"}.fa-barcode[_ngcontent-%COMP%]:before{content:\"\uF02A\"}.fa-tag[_ngcontent-%COMP%]:before{content:\"\uF02B\"}.fa-tags[_ngcontent-%COMP%]:before{content:\"\uF02C\"}.fa-book[_ngcontent-%COMP%]:before{content:\"\uF02D\"}.fa-bookmark[_ngcontent-%COMP%]:before{content:\"\uF02E\"}.fa-print[_ngcontent-%COMP%]:before{content:\"\uF02F\"}.fa-camera[_ngcontent-%COMP%]:before{content:\"\uF030\"}.fa-font[_ngcontent-%COMP%]:before{content:\"\uF031\"}.fa-bold[_ngcontent-%COMP%]:before{content:\"\uF032\"}.fa-italic[_ngcontent-%COMP%]:before{content:\"\uF033\"}.fa-text-height[_ngcontent-%COMP%]:before{content:\"\uF034\"}.fa-text-width[_ngcontent-%COMP%]:before{content:\"\uF035\"}.fa-align-left[_ngcontent-%COMP%]:before{content:\"\uF036\"}.fa-align-center[_ngcontent-%COMP%]:before{content:\"\uF037\"}.fa-align-right[_ngcontent-%COMP%]:before{content:\"\uF038\"}.fa-align-justify[_ngcontent-%COMP%]:before{content:\"\uF039\"}.fa-list[_ngcontent-%COMP%]:before{content:\"\uF03A\"}.fa-dedent[_ngcontent-%COMP%]:before, .fa-outdent[_ngcontent-%COMP%]:before{content:\"\uF03B\"}.fa-indent[_ngcontent-%COMP%]:before{content:\"\uF03C\"}.fa-video-camera[_ngcontent-%COMP%]:before{content:\"\uF03D\"}.fa-image[_ngcontent-%COMP%]:before, .fa-photo[_ngcontent-%COMP%]:before, .fa-picture-o[_ngcontent-%COMP%]:before{content:\"\uF03E\"}.fa-pencil[_ngcontent-%COMP%]:before{content:\"\uF040\"}.fa-map-marker[_ngcontent-%COMP%]:before{content:\"\uF041\"}.fa-adjust[_ngcontent-%COMP%]:before{content:\"\uF042\"}.fa-tint[_ngcontent-%COMP%]:before{content:\"\uF043\"}.fa-edit[_ngcontent-%COMP%]:before, .fa-pencil-square-o[_ngcontent-%COMP%]:before{content:\"\uF044\"}.fa-share-square-o[_ngcontent-%COMP%]:before{content:\"\uF045\"}.fa-check-square-o[_ngcontent-%COMP%]:before{content:\"\uF046\"}.fa-arrows[_ngcontent-%COMP%]:before{content:\"\uF047\"}.fa-step-backward[_ngcontent-%COMP%]:before{content:\"\uF048\"}.fa-fast-backward[_ngcontent-%COMP%]:before{content:\"\uF049\"}.fa-backward[_ngcontent-%COMP%]:before{content:\"\uF04A\"}.fa-play[_ngcontent-%COMP%]:before{content:\"\uF04B\"}.fa-pause[_ngcontent-%COMP%]:before{content:\"\uF04C\"}.fa-stop[_ngcontent-%COMP%]:before{content:\"\uF04D\"}.fa-forward[_ngcontent-%COMP%]:before{content:\"\uF04E\"}.fa-fast-forward[_ngcontent-%COMP%]:before{content:\"\uF050\"}.fa-step-forward[_ngcontent-%COMP%]:before{content:\"\uF051\"}.fa-eject[_ngcontent-%COMP%]:before{content:\"\uF052\"}.fa-chevron-left[_ngcontent-%COMP%]:before{content:\"\uF053\"}.fa-chevron-right[_ngcontent-%COMP%]:before{content:\"\uF054\"}.fa-plus-circle[_ngcontent-%COMP%]:before{content:\"\uF055\"}.fa-minus-circle[_ngcontent-%COMP%]:before{content:\"\uF056\"}.fa-times-circle[_ngcontent-%COMP%]:before{content:\"\uF057\"}.fa-check-circle[_ngcontent-%COMP%]:before{content:\"\uF058\"}.fa-question-circle[_ngcontent-%COMP%]:before{content:\"\uF059\"}.fa-info-circle[_ngcontent-%COMP%]:before{content:\"\uF05A\"}.fa-crosshairs[_ngcontent-%COMP%]:before{content:\"\uF05B\"}.fa-times-circle-o[_ngcontent-%COMP%]:before{content:\"\uF05C\"}.fa-check-circle-o[_ngcontent-%COMP%]:before{content:\"\uF05D\"}.fa-ban[_ngcontent-%COMP%]:before{content:\"\uF05E\"}.fa-arrow-left[_ngcontent-%COMP%]:before{content:\"\uF060\"}.fa-arrow-right[_ngcontent-%COMP%]:before{content:\"\uF061\"}.fa-arrow-up[_ngcontent-%COMP%]:before{content:\"\uF062\"}.fa-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF063\"}.fa-mail-forward[_ngcontent-%COMP%]:before, .fa-share[_ngcontent-%COMP%]:before{content:\"\uF064\"}.fa-expand[_ngcontent-%COMP%]:before{content:\"\uF065\"}.fa-compress[_ngcontent-%COMP%]:before{content:\"\uF066\"}.fa-plus[_ngcontent-%COMP%]:before{content:\"\uF067\"}.fa-minus[_ngcontent-%COMP%]:before{content:\"\uF068\"}.fa-asterisk[_ngcontent-%COMP%]:before{content:\"\uF069\"}.fa-exclamation-circle[_ngcontent-%COMP%]:before{content:\"\uF06A\"}.fa-gift[_ngcontent-%COMP%]:before{content:\"\uF06B\"}.fa-leaf[_ngcontent-%COMP%]:before{content:\"\uF06C\"}.fa-fire[_ngcontent-%COMP%]:before{content:\"\uF06D\"}.fa-eye[_ngcontent-%COMP%]:before{content:\"\uF06E\"}.fa-eye-slash[_ngcontent-%COMP%]:before{content:\"\uF070\"}.fa-exclamation-triangle[_ngcontent-%COMP%]:before, .fa-warning[_ngcontent-%COMP%]:before{content:\"\uF071\"}.fa-plane[_ngcontent-%COMP%]:before{content:\"\uF072\"}.fa-calendar[_ngcontent-%COMP%]:before{content:\"\uF073\"}.fa-random[_ngcontent-%COMP%]:before{content:\"\uF074\"}.fa-comment[_ngcontent-%COMP%]:before{content:\"\uF075\"}.fa-magnet[_ngcontent-%COMP%]:before{content:\"\uF076\"}.fa-chevron-up[_ngcontent-%COMP%]:before{content:\"\uF077\"}.fa-chevron-down[_ngcontent-%COMP%]:before{content:\"\uF078\"}.fa-retweet[_ngcontent-%COMP%]:before{content:\"\uF079\"}.fa-shopping-cart[_ngcontent-%COMP%]:before{content:\"\uF07A\"}.fa-folder[_ngcontent-%COMP%]:before{content:\"\uF07B\"}.fa-folder-open[_ngcontent-%COMP%]:before{content:\"\uF07C\"}.fa-arrows-v[_ngcontent-%COMP%]:before{content:\"\uF07D\"}.fa-arrows-h[_ngcontent-%COMP%]:before{content:\"\uF07E\"}.fa-bar-chart-o[_ngcontent-%COMP%]:before, .fa-bar-chart[_ngcontent-%COMP%]:before{content:\"\uF080\"}.fa-twitter-square[_ngcontent-%COMP%]:before{content:\"\uF081\"}.fa-facebook-square[_ngcontent-%COMP%]:before{content:\"\uF082\"}.fa-camera-retro[_ngcontent-%COMP%]:before{content:\"\uF083\"}.fa-key[_ngcontent-%COMP%]:before{content:\"\uF084\"}.fa-cogs[_ngcontent-%COMP%]:before, .fa-gears[_ngcontent-%COMP%]:before{content:\"\uF085\"}.fa-comments[_ngcontent-%COMP%]:before{content:\"\uF086\"}.fa-thumbs-o-up[_ngcontent-%COMP%]:before{content:\"\uF087\"}.fa-thumbs-o-down[_ngcontent-%COMP%]:before{content:\"\uF088\"}.fa-star-half[_ngcontent-%COMP%]:before{content:\"\uF089\"}.fa-heart-o[_ngcontent-%COMP%]:before{content:\"\uF08A\"}.fa-sign-out[_ngcontent-%COMP%]:before{content:\"\uF08B\"}.fa-linkedin-square[_ngcontent-%COMP%]:before{content:\"\uF08C\"}.fa-thumb-tack[_ngcontent-%COMP%]:before{content:\"\uF08D\"}.fa-external-link[_ngcontent-%COMP%]:before{content:\"\uF08E\"}.fa-sign-in[_ngcontent-%COMP%]:before{content:\"\uF090\"}.fa-trophy[_ngcontent-%COMP%]:before{content:\"\uF091\"}.fa-github-square[_ngcontent-%COMP%]:before{content:\"\uF092\"}.fa-upload[_ngcontent-%COMP%]:before{content:\"\uF093\"}.fa-lemon-o[_ngcontent-%COMP%]:before{content:\"\uF094\"}.fa-phone[_ngcontent-%COMP%]:before{content:\"\uF095\"}.fa-square-o[_ngcontent-%COMP%]:before{content:\"\uF096\"}.fa-bookmark-o[_ngcontent-%COMP%]:before{content:\"\uF097\"}.fa-phone-square[_ngcontent-%COMP%]:before{content:\"\uF098\"}.fa-twitter[_ngcontent-%COMP%]:before{content:\"\uF099\"}.fa-facebook-f[_ngcontent-%COMP%]:before, .fa-facebook[_ngcontent-%COMP%]:before{content:\"\uF09A\"}.fa-github[_ngcontent-%COMP%]:before{content:\"\uF09B\"}.fa-unlock[_ngcontent-%COMP%]:before{content:\"\uF09C\"}.fa-credit-card[_ngcontent-%COMP%]:before{content:\"\uF09D\"}.fa-feed[_ngcontent-%COMP%]:before, .fa-rss[_ngcontent-%COMP%]:before{content:\"\uF09E\"}.fa-hdd-o[_ngcontent-%COMP%]:before{content:\"\uF0A0\"}.fa-bullhorn[_ngcontent-%COMP%]:before{content:\"\uF0A1\"}.fa-bell[_ngcontent-%COMP%]:before{content:\"\uF0F3\"}.fa-certificate[_ngcontent-%COMP%]:before{content:\"\uF0A3\"}.fa-hand-o-right[_ngcontent-%COMP%]:before{content:\"\uF0A4\"}.fa-hand-o-left[_ngcontent-%COMP%]:before{content:\"\uF0A5\"}.fa-hand-o-up[_ngcontent-%COMP%]:before{content:\"\uF0A6\"}.fa-hand-o-down[_ngcontent-%COMP%]:before{content:\"\uF0A7\"}.fa-arrow-circle-left[_ngcontent-%COMP%]:before{content:\"\uF0A8\"}.fa-arrow-circle-right[_ngcontent-%COMP%]:before{content:\"\uF0A9\"}.fa-arrow-circle-up[_ngcontent-%COMP%]:before{content:\"\uF0AA\"}.fa-arrow-circle-down[_ngcontent-%COMP%]:before{content:\"\uF0AB\"}.fa-globe[_ngcontent-%COMP%]:before{content:\"\uF0AC\"}.fa-wrench[_ngcontent-%COMP%]:before{content:\"\uF0AD\"}.fa-tasks[_ngcontent-%COMP%]:before{content:\"\uF0AE\"}.fa-filter[_ngcontent-%COMP%]:before{content:\"\uF0B0\"}.fa-briefcase[_ngcontent-%COMP%]:before{content:\"\uF0B1\"}.fa-arrows-alt[_ngcontent-%COMP%]:before{content:\"\uF0B2\"}.fa-group[_ngcontent-%COMP%]:before, .fa-users[_ngcontent-%COMP%]:before{content:\"\uF0C0\"}.fa-chain[_ngcontent-%COMP%]:before, .fa-link[_ngcontent-%COMP%]:before{content:\"\uF0C1\"}.fa-cloud[_ngcontent-%COMP%]:before{content:\"\uF0C2\"}.fa-flask[_ngcontent-%COMP%]:before{content:\"\uF0C3\"}.fa-cut[_ngcontent-%COMP%]:before, .fa-scissors[_ngcontent-%COMP%]:before{content:\"\uF0C4\"}.fa-copy[_ngcontent-%COMP%]:before, .fa-files-o[_ngcontent-%COMP%]:before{content:\"\uF0C5\"}.fa-paperclip[_ngcontent-%COMP%]:before{content:\"\uF0C6\"}.fa-floppy-o[_ngcontent-%COMP%]:before, .fa-save[_ngcontent-%COMP%]:before{content:\"\uF0C7\"}.fa-square[_ngcontent-%COMP%]:before{content:\"\uF0C8\"}.fa-bars[_ngcontent-%COMP%]:before, .fa-navicon[_ngcontent-%COMP%]:before, .fa-reorder[_ngcontent-%COMP%]:before{content:\"\uF0C9\"}.fa-list-ul[_ngcontent-%COMP%]:before{content:\"\uF0CA\"}.fa-list-ol[_ngcontent-%COMP%]:before{content:\"\uF0CB\"}.fa-strikethrough[_ngcontent-%COMP%]:before{content:\"\uF0CC\"}.fa-underline[_ngcontent-%COMP%]:before{content:\"\uF0CD\"}.fa-table[_ngcontent-%COMP%]:before{content:\"\uF0CE\"}.fa-magic[_ngcontent-%COMP%]:before{content:\"\uF0D0\"}.fa-truck[_ngcontent-%COMP%]:before{content:\"\uF0D1\"}.fa-pinterest[_ngcontent-%COMP%]:before{content:\"\uF0D2\"}.fa-pinterest-square[_ngcontent-%COMP%]:before{content:\"\uF0D3\"}.fa-google-plus-square[_ngcontent-%COMP%]:before{content:\"\uF0D4\"}.fa-google-plus[_ngcontent-%COMP%]:before{content:\"\uF0D5\"}.fa-money[_ngcontent-%COMP%]:before{content:\"\uF0D6\"}.fa-caret-down[_ngcontent-%COMP%]:before{content:\"\uF0D7\"}.fa-caret-up[_ngcontent-%COMP%]:before{content:\"\uF0D8\"}.fa-caret-left[_ngcontent-%COMP%]:before{content:\"\uF0D9\"}.fa-caret-right[_ngcontent-%COMP%]:before{content:\"\uF0DA\"}.fa-columns[_ngcontent-%COMP%]:before{content:\"\uF0DB\"}.fa-sort[_ngcontent-%COMP%]:before, .fa-unsorted[_ngcontent-%COMP%]:before{content:\"\uF0DC\"}.fa-sort-desc[_ngcontent-%COMP%]:before, .fa-sort-down[_ngcontent-%COMP%]:before{content:\"\uF0DD\"}.fa-sort-asc[_ngcontent-%COMP%]:before, .fa-sort-up[_ngcontent-%COMP%]:before{content:\"\uF0DE\"}.fa-envelope[_ngcontent-%COMP%]:before{content:\"\uF0E0\"}.fa-linkedin[_ngcontent-%COMP%]:before{content:\"\uF0E1\"}.fa-rotate-left[_ngcontent-%COMP%]:before, .fa-undo[_ngcontent-%COMP%]:before{content:\"\uF0E2\"}.fa-gavel[_ngcontent-%COMP%]:before, .fa-legal[_ngcontent-%COMP%]:before{content:\"\uF0E3\"}.fa-dashboard[_ngcontent-%COMP%]:before, .fa-tachometer[_ngcontent-%COMP%]:before{content:\"\uF0E4\"}.fa-comment-o[_ngcontent-%COMP%]:before{content:\"\uF0E5\"}.fa-comments-o[_ngcontent-%COMP%]:before{content:\"\uF0E6\"}.fa-bolt[_ngcontent-%COMP%]:before, .fa-flash[_ngcontent-%COMP%]:before{content:\"\uF0E7\"}.fa-sitemap[_ngcontent-%COMP%]:before{content:\"\uF0E8\"}.fa-umbrella[_ngcontent-%COMP%]:before{content:\"\uF0E9\"}.fa-clipboard[_ngcontent-%COMP%]:before, .fa-paste[_ngcontent-%COMP%]:before{content:\"\uF0EA\"}.fa-lightbulb-o[_ngcontent-%COMP%]:before{content:\"\uF0EB\"}.fa-exchange[_ngcontent-%COMP%]:before{content:\"\uF0EC\"}.fa-cloud-download[_ngcontent-%COMP%]:before{content:\"\uF0ED\"}.fa-cloud-upload[_ngcontent-%COMP%]:before{content:\"\uF0EE\"}.fa-user-md[_ngcontent-%COMP%]:before{content:\"\uF0F0\"}.fa-stethoscope[_ngcontent-%COMP%]:before{content:\"\uF0F1\"}.fa-suitcase[_ngcontent-%COMP%]:before{content:\"\uF0F2\"}.fa-bell-o[_ngcontent-%COMP%]:before{content:\"\uF0A2\"}.fa-coffee[_ngcontent-%COMP%]:before{content:\"\uF0F4\"}.fa-cutlery[_ngcontent-%COMP%]:before{content:\"\uF0F5\"}.fa-file-text-o[_ngcontent-%COMP%]:before{content:\"\uF0F6\"}.fa-building-o[_ngcontent-%COMP%]:before{content:\"\uF0F7\"}.fa-hospital-o[_ngcontent-%COMP%]:before{content:\"\uF0F8\"}.fa-ambulance[_ngcontent-%COMP%]:before{content:\"\uF0F9\"}.fa-medkit[_ngcontent-%COMP%]:before{content:\"\uF0FA\"}.fa-fighter-jet[_ngcontent-%COMP%]:before{content:\"\uF0FB\"}.fa-beer[_ngcontent-%COMP%]:before{content:\"\uF0FC\"}.fa-h-square[_ngcontent-%COMP%]:before{content:\"\uF0FD\"}.fa-plus-square[_ngcontent-%COMP%]:before{content:\"\uF0FE\"}.fa-angle-double-left[_ngcontent-%COMP%]:before{content:\"\uF100\"}.fa-angle-double-right[_ngcontent-%COMP%]:before{content:\"\uF101\"}.fa-angle-double-up[_ngcontent-%COMP%]:before{content:\"\uF102\"}.fa-angle-double-down[_ngcontent-%COMP%]:before{content:\"\uF103\"}.fa-angle-left[_ngcontent-%COMP%]:before{content:\"\uF104\"}.fa-angle-right[_ngcontent-%COMP%]:before{content:\"\uF105\"}.fa-angle-up[_ngcontent-%COMP%]:before{content:\"\uF106\"}.fa-angle-down[_ngcontent-%COMP%]:before{content:\"\uF107\"}.fa-desktop[_ngcontent-%COMP%]:before{content:\"\uF108\"}.fa-laptop[_ngcontent-%COMP%]:before{content:\"\uF109\"}.fa-tablet[_ngcontent-%COMP%]:before{content:\"\uF10A\"}.fa-mobile-phone[_ngcontent-%COMP%]:before, .fa-mobile[_ngcontent-%COMP%]:before{content:\"\uF10B\"}.fa-circle-o[_ngcontent-%COMP%]:before{content:\"\uF10C\"}.fa-quote-left[_ngcontent-%COMP%]:before{content:\"\uF10D\"}.fa-quote-right[_ngcontent-%COMP%]:before{content:\"\uF10E\"}.fa-spinner[_ngcontent-%COMP%]:before{content:\"\uF110\"}.fa-circle[_ngcontent-%COMP%]:before{content:\"\uF111\"}.fa-mail-reply[_ngcontent-%COMP%]:before, .fa-reply[_ngcontent-%COMP%]:before{content:\"\uF112\"}.fa-github-alt[_ngcontent-%COMP%]:before{content:\"\uF113\"}.fa-folder-o[_ngcontent-%COMP%]:before{content:\"\uF114\"}.fa-folder-open-o[_ngcontent-%COMP%]:before{content:\"\uF115\"}.fa-smile-o[_ngcontent-%COMP%]:before{content:\"\uF118\"}.fa-frown-o[_ngcontent-%COMP%]:before{content:\"\uF119\"}.fa-meh-o[_ngcontent-%COMP%]:before{content:\"\uF11A\"}.fa-gamepad[_ngcontent-%COMP%]:before{content:\"\uF11B\"}.fa-keyboard-o[_ngcontent-%COMP%]:before{content:\"\uF11C\"}.fa-flag-o[_ngcontent-%COMP%]:before{content:\"\uF11D\"}.fa-flag-checkered[_ngcontent-%COMP%]:before{content:\"\uF11E\"}.fa-terminal[_ngcontent-%COMP%]:before{content:\"\uF120\"}.fa-code[_ngcontent-%COMP%]:before{content:\"\uF121\"}.fa-mail-reply-all[_ngcontent-%COMP%]:before, .fa-reply-all[_ngcontent-%COMP%]:before{content:\"\uF122\"}.fa-star-half-empty[_ngcontent-%COMP%]:before, .fa-star-half-full[_ngcontent-%COMP%]:before, .fa-star-half-o[_ngcontent-%COMP%]:before{content:\"\uF123\"}.fa-location-arrow[_ngcontent-%COMP%]:before{content:\"\uF124\"}.fa-crop[_ngcontent-%COMP%]:before{content:\"\uF125\"}.fa-code-fork[_ngcontent-%COMP%]:before{content:\"\uF126\"}.fa-chain-broken[_ngcontent-%COMP%]:before, .fa-unlink[_ngcontent-%COMP%]:before{content:\"\uF127\"}.fa-question[_ngcontent-%COMP%]:before{content:\"\uF128\"}.fa-info[_ngcontent-%COMP%]:before{content:\"\uF129\"}.fa-exclamation[_ngcontent-%COMP%]:before{content:\"\uF12A\"}.fa-superscript[_ngcontent-%COMP%]:before{content:\"\uF12B\"}.fa-subscript[_ngcontent-%COMP%]:before{content:\"\uF12C\"}.fa-eraser[_ngcontent-%COMP%]:before{content:\"\uF12D\"}.fa-puzzle-piece[_ngcontent-%COMP%]:before{content:\"\uF12E\"}.fa-microphone[_ngcontent-%COMP%]:before{content:\"\uF130\"}.fa-microphone-slash[_ngcontent-%COMP%]:before{content:\"\uF131\"}.fa-shield[_ngcontent-%COMP%]:before{content:\"\uF132\"}.fa-calendar-o[_ngcontent-%COMP%]:before{content:\"\uF133\"}.fa-fire-extinguisher[_ngcontent-%COMP%]:before{content:\"\uF134\"}.fa-rocket[_ngcontent-%COMP%]:before{content:\"\uF135\"}.fa-maxcdn[_ngcontent-%COMP%]:before{content:\"\uF136\"}.fa-chevron-circle-left[_ngcontent-%COMP%]:before{content:\"\uF137\"}.fa-chevron-circle-right[_ngcontent-%COMP%]:before{content:\"\uF138\"}.fa-chevron-circle-up[_ngcontent-%COMP%]:before{content:\"\uF139\"}.fa-chevron-circle-down[_ngcontent-%COMP%]:before{content:\"\uF13A\"}.fa-html5[_ngcontent-%COMP%]:before{content:\"\uF13B\"}.fa-css3[_ngcontent-%COMP%]:before{content:\"\uF13C\"}.fa-anchor[_ngcontent-%COMP%]:before{content:\"\uF13D\"}.fa-unlock-alt[_ngcontent-%COMP%]:before{content:\"\uF13E\"}.fa-bullseye[_ngcontent-%COMP%]:before{content:\"\uF140\"}.fa-ellipsis-h[_ngcontent-%COMP%]:before{content:\"\uF141\"}.fa-ellipsis-v[_ngcontent-%COMP%]:before{content:\"\uF142\"}.fa-rss-square[_ngcontent-%COMP%]:before{content:\"\uF143\"}.fa-play-circle[_ngcontent-%COMP%]:before{content:\"\uF144\"}.fa-ticket[_ngcontent-%COMP%]:before{content:\"\uF145\"}.fa-minus-square[_ngcontent-%COMP%]:before{content:\"\uF146\"}.fa-minus-square-o[_ngcontent-%COMP%]:before{content:\"\uF147\"}.fa-level-up[_ngcontent-%COMP%]:before{content:\"\uF148\"}.fa-level-down[_ngcontent-%COMP%]:before{content:\"\uF149\"}.fa-check-square[_ngcontent-%COMP%]:before{content:\"\uF14A\"}.fa-pencil-square[_ngcontent-%COMP%]:before{content:\"\uF14B\"}.fa-external-link-square[_ngcontent-%COMP%]:before{content:\"\uF14C\"}.fa-share-square[_ngcontent-%COMP%]:before{content:\"\uF14D\"}.fa-compass[_ngcontent-%COMP%]:before{content:\"\uF14E\"}.fa-caret-square-o-down[_ngcontent-%COMP%]:before, .fa-toggle-down[_ngcontent-%COMP%]:before{content:\"\uF150\"}.fa-caret-square-o-up[_ngcontent-%COMP%]:before, .fa-toggle-up[_ngcontent-%COMP%]:before{content:\"\uF151\"}.fa-caret-square-o-right[_ngcontent-%COMP%]:before, .fa-toggle-right[_ngcontent-%COMP%]:before{content:\"\uF152\"}.fa-eur[_ngcontent-%COMP%]:before, .fa-euro[_ngcontent-%COMP%]:before{content:\"\uF153\"}.fa-gbp[_ngcontent-%COMP%]:before{content:\"\uF154\"}.fa-dollar[_ngcontent-%COMP%]:before, .fa-usd[_ngcontent-%COMP%]:before{content:\"\uF155\"}.fa-inr[_ngcontent-%COMP%]:before, .fa-rupee[_ngcontent-%COMP%]:before{content:\"\uF156\"}.fa-cny[_ngcontent-%COMP%]:before, .fa-jpy[_ngcontent-%COMP%]:before, .fa-rmb[_ngcontent-%COMP%]:before, .fa-yen[_ngcontent-%COMP%]:before{content:\"\uF157\"}.fa-rouble[_ngcontent-%COMP%]:before, .fa-rub[_ngcontent-%COMP%]:before, .fa-ruble[_ngcontent-%COMP%]:before{content:\"\uF158\"}.fa-krw[_ngcontent-%COMP%]:before, .fa-won[_ngcontent-%COMP%]:before{content:\"\uF159\"}.fa-bitcoin[_ngcontent-%COMP%]:before, .fa-btc[_ngcontent-%COMP%]:before{content:\"\uF15A\"}.fa-file[_ngcontent-%COMP%]:before{content:\"\uF15B\"}.fa-file-text[_ngcontent-%COMP%]:before{content:\"\uF15C\"}.fa-sort-alpha-asc[_ngcontent-%COMP%]:before{content:\"\uF15D\"}.fa-sort-alpha-desc[_ngcontent-%COMP%]:before{content:\"\uF15E\"}.fa-sort-amount-asc[_ngcontent-%COMP%]:before{content:\"\uF160\"}.fa-sort-amount-desc[_ngcontent-%COMP%]:before{content:\"\uF161\"}.fa-sort-numeric-asc[_ngcontent-%COMP%]:before{content:\"\uF162\"}.fa-sort-numeric-desc[_ngcontent-%COMP%]:before{content:\"\uF163\"}.fa-thumbs-up[_ngcontent-%COMP%]:before{content:\"\uF164\"}.fa-thumbs-down[_ngcontent-%COMP%]:before{content:\"\uF165\"}.fa-youtube-square[_ngcontent-%COMP%]:before{content:\"\uF166\"}.fa-youtube[_ngcontent-%COMP%]:before{content:\"\uF167\"}.fa-xing[_ngcontent-%COMP%]:before{content:\"\uF168\"}.fa-xing-square[_ngcontent-%COMP%]:before{content:\"\uF169\"}.fa-youtube-play[_ngcontent-%COMP%]:before{content:\"\uF16A\"}.fa-dropbox[_ngcontent-%COMP%]:before{content:\"\uF16B\"}.fa-stack-overflow[_ngcontent-%COMP%]:before{content:\"\uF16C\"}.fa-instagram[_ngcontent-%COMP%]:before{content:\"\uF16D\"}.fa-flickr[_ngcontent-%COMP%]:before{content:\"\uF16E\"}.fa-adn[_ngcontent-%COMP%]:before{content:\"\uF170\"}.fa-bitbucket[_ngcontent-%COMP%]:before{content:\"\uF171\"}.fa-bitbucket-square[_ngcontent-%COMP%]:before{content:\"\uF172\"}.fa-tumblr[_ngcontent-%COMP%]:before{content:\"\uF173\"}.fa-tumblr-square[_ngcontent-%COMP%]:before{content:\"\uF174\"}.fa-long-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF175\"}.fa-long-arrow-up[_ngcontent-%COMP%]:before{content:\"\uF176\"}.fa-long-arrow-left[_ngcontent-%COMP%]:before{content:\"\uF177\"}.fa-long-arrow-right[_ngcontent-%COMP%]:before{content:\"\uF178\"}.fa-apple[_ngcontent-%COMP%]:before{content:\"\uF179\"}.fa-windows[_ngcontent-%COMP%]:before{content:\"\uF17A\"}.fa-android[_ngcontent-%COMP%]:before{content:\"\uF17B\"}.fa-linux[_ngcontent-%COMP%]:before{content:\"\uF17C\"}.fa-dribbble[_ngcontent-%COMP%]:before{content:\"\uF17D\"}.fa-skype[_ngcontent-%COMP%]:before{content:\"\uF17E\"}.fa-foursquare[_ngcontent-%COMP%]:before{content:\"\uF180\"}.fa-trello[_ngcontent-%COMP%]:before{content:\"\uF181\"}.fa-female[_ngcontent-%COMP%]:before{content:\"\uF182\"}.fa-male[_ngcontent-%COMP%]:before{content:\"\uF183\"}.fa-gittip[_ngcontent-%COMP%]:before, .fa-gratipay[_ngcontent-%COMP%]:before{content:\"\uF184\"}.fa-sun-o[_ngcontent-%COMP%]:before{content:\"\uF185\"}.fa-moon-o[_ngcontent-%COMP%]:before{content:\"\uF186\"}.fa-archive[_ngcontent-%COMP%]:before{content:\"\uF187\"}.fa-bug[_ngcontent-%COMP%]:before{content:\"\uF188\"}.fa-vk[_ngcontent-%COMP%]:before{content:\"\uF189\"}.fa-weibo[_ngcontent-%COMP%]:before{content:\"\uF18A\"}.fa-renren[_ngcontent-%COMP%]:before{content:\"\uF18B\"}.fa-pagelines[_ngcontent-%COMP%]:before{content:\"\uF18C\"}.fa-stack-exchange[_ngcontent-%COMP%]:before{content:\"\uF18D\"}.fa-arrow-circle-o-right[_ngcontent-%COMP%]:before{content:\"\uF18E\"}.fa-arrow-circle-o-left[_ngcontent-%COMP%]:before{content:\"\uF190\"}.fa-caret-square-o-left[_ngcontent-%COMP%]:before, .fa-toggle-left[_ngcontent-%COMP%]:before{content:\"\uF191\"}.fa-dot-circle-o[_ngcontent-%COMP%]:before{content:\"\uF192\"}.fa-wheelchair[_ngcontent-%COMP%]:before{content:\"\uF193\"}.fa-vimeo-square[_ngcontent-%COMP%]:before{content:\"\uF194\"}.fa-try[_ngcontent-%COMP%]:before, .fa-turkish-lira[_ngcontent-%COMP%]:before{content:\"\uF195\"}.fa-plus-square-o[_ngcontent-%COMP%]:before{content:\"\uF196\"}.fa-space-shuttle[_ngcontent-%COMP%]:before{content:\"\uF197\"}.fa-slack[_ngcontent-%COMP%]:before{content:\"\uF198\"}.fa-envelope-square[_ngcontent-%COMP%]:before{content:\"\uF199\"}.fa-wordpress[_ngcontent-%COMP%]:before{content:\"\uF19A\"}.fa-openid[_ngcontent-%COMP%]:before{content:\"\uF19B\"}.fa-bank[_ngcontent-%COMP%]:before, .fa-institution[_ngcontent-%COMP%]:before, .fa-university[_ngcontent-%COMP%]:before{content:\"\uF19C\"}.fa-graduation-cap[_ngcontent-%COMP%]:before, .fa-mortar-board[_ngcontent-%COMP%]:before{content:\"\uF19D\"}.fa-yahoo[_ngcontent-%COMP%]:before{content:\"\uF19E\"}.fa-google[_ngcontent-%COMP%]:before{content:\"\uF1A0\"}.fa-reddit[_ngcontent-%COMP%]:before{content:\"\uF1A1\"}.fa-reddit-square[_ngcontent-%COMP%]:before{content:\"\uF1A2\"}.fa-stumbleupon-circle[_ngcontent-%COMP%]:before{content:\"\uF1A3\"}.fa-stumbleupon[_ngcontent-%COMP%]:before{content:\"\uF1A4\"}.fa-delicious[_ngcontent-%COMP%]:before{content:\"\uF1A5\"}.fa-digg[_ngcontent-%COMP%]:before{content:\"\uF1A6\"}.fa-pied-piper-pp[_ngcontent-%COMP%]:before{content:\"\uF1A7\"}.fa-pied-piper-alt[_ngcontent-%COMP%]:before{content:\"\uF1A8\"}.fa-drupal[_ngcontent-%COMP%]:before{content:\"\uF1A9\"}.fa-joomla[_ngcontent-%COMP%]:before{content:\"\uF1AA\"}.fa-language[_ngcontent-%COMP%]:before{content:\"\uF1AB\"}.fa-fax[_ngcontent-%COMP%]:before{content:\"\uF1AC\"}.fa-building[_ngcontent-%COMP%]:before{content:\"\uF1AD\"}.fa-child[_ngcontent-%COMP%]:before{content:\"\uF1AE\"}.fa-paw[_ngcontent-%COMP%]:before{content:\"\uF1B0\"}.fa-spoon[_ngcontent-%COMP%]:before{content:\"\uF1B1\"}.fa-cube[_ngcontent-%COMP%]:before{content:\"\uF1B2\"}.fa-cubes[_ngcontent-%COMP%]:before{content:\"\uF1B3\"}.fa-behance[_ngcontent-%COMP%]:before{content:\"\uF1B4\"}.fa-behance-square[_ngcontent-%COMP%]:before{content:\"\uF1B5\"}.fa-steam[_ngcontent-%COMP%]:before{content:\"\uF1B6\"}.fa-steam-square[_ngcontent-%COMP%]:before{content:\"\uF1B7\"}.fa-recycle[_ngcontent-%COMP%]:before{content:\"\uF1B8\"}.fa-automobile[_ngcontent-%COMP%]:before, .fa-car[_ngcontent-%COMP%]:before{content:\"\uF1B9\"}.fa-cab[_ngcontent-%COMP%]:before, .fa-taxi[_ngcontent-%COMP%]:before{content:\"\uF1BA\"}.fa-tree[_ngcontent-%COMP%]:before{content:\"\uF1BB\"}.fa-spotify[_ngcontent-%COMP%]:before{content:\"\uF1BC\"}.fa-deviantart[_ngcontent-%COMP%]:before{content:\"\uF1BD\"}.fa-soundcloud[_ngcontent-%COMP%]:before{content:\"\uF1BE\"}.fa-database[_ngcontent-%COMP%]:before{content:\"\uF1C0\"}.fa-file-pdf-o[_ngcontent-%COMP%]:before{content:\"\uF1C1\"}.fa-file-word-o[_ngcontent-%COMP%]:before{content:\"\uF1C2\"}.fa-file-excel-o[_ngcontent-%COMP%]:before{content:\"\uF1C3\"}.fa-file-powerpoint-o[_ngcontent-%COMP%]:before{content:\"\uF1C4\"}.fa-file-image-o[_ngcontent-%COMP%]:before, .fa-file-photo-o[_ngcontent-%COMP%]:before, .fa-file-picture-o[_ngcontent-%COMP%]:before{content:\"\uF1C5\"}.fa-file-archive-o[_ngcontent-%COMP%]:before, .fa-file-zip-o[_ngcontent-%COMP%]:before{content:\"\uF1C6\"}.fa-file-audio-o[_ngcontent-%COMP%]:before, .fa-file-sound-o[_ngcontent-%COMP%]:before{content:\"\uF1C7\"}.fa-file-movie-o[_ngcontent-%COMP%]:before, .fa-file-video-o[_ngcontent-%COMP%]:before{content:\"\uF1C8\"}.fa-file-code-o[_ngcontent-%COMP%]:before{content:\"\uF1C9\"}.fa-vine[_ngcontent-%COMP%]:before{content:\"\uF1CA\"}.fa-codepen[_ngcontent-%COMP%]:before{content:\"\uF1CB\"}.fa-jsfiddle[_ngcontent-%COMP%]:before{content:\"\uF1CC\"}.fa-life-bouy[_ngcontent-%COMP%]:before, .fa-life-buoy[_ngcontent-%COMP%]:before, .fa-life-ring[_ngcontent-%COMP%]:before, .fa-life-saver[_ngcontent-%COMP%]:before, .fa-support[_ngcontent-%COMP%]:before{content:\"\uF1CD\"}.fa-circle-o-notch[_ngcontent-%COMP%]:before{content:\"\uF1CE\"}.fa-ra[_ngcontent-%COMP%]:before, .fa-rebel[_ngcontent-%COMP%]:before, .fa-resistance[_ngcontent-%COMP%]:before{content:\"\uF1D0\"}.fa-empire[_ngcontent-%COMP%]:before, .fa-ge[_ngcontent-%COMP%]:before{content:\"\uF1D1\"}.fa-git-square[_ngcontent-%COMP%]:before{content:\"\uF1D2\"}.fa-git[_ngcontent-%COMP%]:before{content:\"\uF1D3\"}.fa-hacker-news[_ngcontent-%COMP%]:before, .fa-y-combinator-square[_ngcontent-%COMP%]:before, .fa-yc-square[_ngcontent-%COMP%]:before{content:\"\uF1D4\"}.fa-tencent-weibo[_ngcontent-%COMP%]:before{content:\"\uF1D5\"}.fa-qq[_ngcontent-%COMP%]:before{content:\"\uF1D6\"}.fa-wechat[_ngcontent-%COMP%]:before, .fa-weixin[_ngcontent-%COMP%]:before{content:\"\uF1D7\"}.fa-paper-plane[_ngcontent-%COMP%]:before, .fa-send[_ngcontent-%COMP%]:before{content:\"\uF1D8\"}.fa-paper-plane-o[_ngcontent-%COMP%]:before, .fa-send-o[_ngcontent-%COMP%]:before{content:\"\uF1D9\"}.fa-history[_ngcontent-%COMP%]:before{content:\"\uF1DA\"}.fa-circle-thin[_ngcontent-%COMP%]:before{content:\"\uF1DB\"}.fa-header[_ngcontent-%COMP%]:before{content:\"\uF1DC\"}.fa-paragraph[_ngcontent-%COMP%]:before{content:\"\uF1DD\"}.fa-sliders[_ngcontent-%COMP%]:before{content:\"\uF1DE\"}.fa-share-alt[_ngcontent-%COMP%]:before{content:\"\uF1E0\"}.fa-share-alt-square[_ngcontent-%COMP%]:before{content:\"\uF1E1\"}.fa-bomb[_ngcontent-%COMP%]:before{content:\"\uF1E2\"}.fa-futbol-o[_ngcontent-%COMP%]:before, .fa-soccer-ball-o[_ngcontent-%COMP%]:before{content:\"\uF1E3\"}.fa-tty[_ngcontent-%COMP%]:before{content:\"\uF1E4\"}.fa-binoculars[_ngcontent-%COMP%]:before{content:\"\uF1E5\"}.fa-plug[_ngcontent-%COMP%]:before{content:\"\uF1E6\"}.fa-slideshare[_ngcontent-%COMP%]:before{content:\"\uF1E7\"}.fa-twitch[_ngcontent-%COMP%]:before{content:\"\uF1E8\"}.fa-yelp[_ngcontent-%COMP%]:before{content:\"\uF1E9\"}.fa-newspaper-o[_ngcontent-%COMP%]:before{content:\"\uF1EA\"}.fa-wifi[_ngcontent-%COMP%]:before{content:\"\uF1EB\"}.fa-calculator[_ngcontent-%COMP%]:before{content:\"\uF1EC\"}.fa-paypal[_ngcontent-%COMP%]:before{content:\"\uF1ED\"}.fa-google-wallet[_ngcontent-%COMP%]:before{content:\"\uF1EE\"}.fa-cc-visa[_ngcontent-%COMP%]:before{content:\"\uF1F0\"}.fa-cc-mastercard[_ngcontent-%COMP%]:before{content:\"\uF1F1\"}.fa-cc-discover[_ngcontent-%COMP%]:before{content:\"\uF1F2\"}.fa-cc-amex[_ngcontent-%COMP%]:before{content:\"\uF1F3\"}.fa-cc-paypal[_ngcontent-%COMP%]:before{content:\"\uF1F4\"}.fa-cc-stripe[_ngcontent-%COMP%]:before{content:\"\uF1F5\"}.fa-bell-slash[_ngcontent-%COMP%]:before{content:\"\uF1F6\"}.fa-bell-slash-o[_ngcontent-%COMP%]:before{content:\"\uF1F7\"}.fa-trash[_ngcontent-%COMP%]:before{content:\"\uF1F8\"}.fa-copyright[_ngcontent-%COMP%]:before{content:\"\uF1F9\"}.fa-at[_ngcontent-%COMP%]:before{content:\"\uF1FA\"}.fa-eyedropper[_ngcontent-%COMP%]:before{content:\"\uF1FB\"}.fa-paint-brush[_ngcontent-%COMP%]:before{content:\"\uF1FC\"}.fa-birthday-cake[_ngcontent-%COMP%]:before{content:\"\uF1FD\"}.fa-area-chart[_ngcontent-%COMP%]:before{content:\"\uF1FE\"}.fa-pie-chart[_ngcontent-%COMP%]:before{content:\"\uF200\"}.fa-line-chart[_ngcontent-%COMP%]:before{content:\"\uF201\"}.fa-lastfm[_ngcontent-%COMP%]:before{content:\"\uF202\"}.fa-lastfm-square[_ngcontent-%COMP%]:before{content:\"\uF203\"}.fa-toggle-off[_ngcontent-%COMP%]:before{content:\"\uF204\"}.fa-toggle-on[_ngcontent-%COMP%]:before{content:\"\uF205\"}.fa-bicycle[_ngcontent-%COMP%]:before{content:\"\uF206\"}.fa-bus[_ngcontent-%COMP%]:before{content:\"\uF207\"}.fa-ioxhost[_ngcontent-%COMP%]:before{content:\"\uF208\"}.fa-angellist[_ngcontent-%COMP%]:before{content:\"\uF209\"}.fa-cc[_ngcontent-%COMP%]:before{content:\"\uF20A\"}.fa-ils[_ngcontent-%COMP%]:before, .fa-shekel[_ngcontent-%COMP%]:before, .fa-sheqel[_ngcontent-%COMP%]:before{content:\"\uF20B\"}.fa-meanpath[_ngcontent-%COMP%]:before{content:\"\uF20C\"}.fa-buysellads[_ngcontent-%COMP%]:before{content:\"\uF20D\"}.fa-connectdevelop[_ngcontent-%COMP%]:before{content:\"\uF20E\"}.fa-dashcube[_ngcontent-%COMP%]:before{content:\"\uF210\"}.fa-forumbee[_ngcontent-%COMP%]:before{content:\"\uF211\"}.fa-leanpub[_ngcontent-%COMP%]:before{content:\"\uF212\"}.fa-sellsy[_ngcontent-%COMP%]:before{content:\"\uF213\"}.fa-shirtsinbulk[_ngcontent-%COMP%]:before{content:\"\uF214\"}.fa-simplybuilt[_ngcontent-%COMP%]:before{content:\"\uF215\"}.fa-skyatlas[_ngcontent-%COMP%]:before{content:\"\uF216\"}.fa-cart-plus[_ngcontent-%COMP%]:before{content:\"\uF217\"}.fa-cart-arrow-down[_ngcontent-%COMP%]:before{content:\"\uF218\"}.fa-diamond[_ngcontent-%COMP%]:before{content:\"\uF219\"}.fa-ship[_ngcontent-%COMP%]:before{content:\"\uF21A\"}.fa-user-secret[_ngcontent-%COMP%]:before{content:\"\uF21B\"}.fa-motorcycle[_ngcontent-%COMP%]:before{content:\"\uF21C\"}.fa-street-view[_ngcontent-%COMP%]:before{content:\"\uF21D\"}.fa-heartbeat[_ngcontent-%COMP%]:before{content:\"\uF21E\"}.fa-venus[_ngcontent-%COMP%]:before{content:\"\uF221\"}.fa-mars[_ngcontent-%COMP%]:before{content:\"\uF222\"}.fa-mercury[_ngcontent-%COMP%]:before{content:\"\uF223\"}.fa-intersex[_ngcontent-%COMP%]:before, .fa-transgender[_ngcontent-%COMP%]:before{content:\"\uF224\"}.fa-transgender-alt[_ngcontent-%COMP%]:before{content:\"\uF225\"}.fa-venus-double[_ngcontent-%COMP%]:before{content:\"\uF226\"}.fa-mars-double[_ngcontent-%COMP%]:before{content:\"\uF227\"}.fa-venus-mars[_ngcontent-%COMP%]:before{content:\"\uF228\"}.fa-mars-stroke[_ngcontent-%COMP%]:before{content:\"\uF229\"}.fa-mars-stroke-v[_ngcontent-%COMP%]:before{content:\"\uF22A\"}.fa-mars-stroke-h[_ngcontent-%COMP%]:before{content:\"\uF22B\"}.fa-neuter[_ngcontent-%COMP%]:before{content:\"\uF22C\"}.fa-genderless[_ngcontent-%COMP%]:before{content:\"\uF22D\"}.fa-facebook-official[_ngcontent-%COMP%]:before{content:\"\uF230\"}.fa-pinterest-p[_ngcontent-%COMP%]:before{content:\"\uF231\"}.fa-whatsapp[_ngcontent-%COMP%]:before{content:\"\uF232\"}.fa-server[_ngcontent-%COMP%]:before{content:\"\uF233\"}.fa-user-plus[_ngcontent-%COMP%]:before{content:\"\uF234\"}.fa-user-times[_ngcontent-%COMP%]:before{content:\"\uF235\"}.fa-bed[_ngcontent-%COMP%]:before, .fa-hotel[_ngcontent-%COMP%]:before{content:\"\uF236\"}.fa-viacoin[_ngcontent-%COMP%]:before{content:\"\uF237\"}.fa-train[_ngcontent-%COMP%]:before{content:\"\uF238\"}.fa-subway[_ngcontent-%COMP%]:before{content:\"\uF239\"}.fa-medium[_ngcontent-%COMP%]:before{content:\"\uF23A\"}.fa-y-combinator[_ngcontent-%COMP%]:before, .fa-yc[_ngcontent-%COMP%]:before{content:\"\uF23B\"}.fa-optin-monster[_ngcontent-%COMP%]:before{content:\"\uF23C\"}.fa-opencart[_ngcontent-%COMP%]:before{content:\"\uF23D\"}.fa-expeditedssl[_ngcontent-%COMP%]:before{content:\"\uF23E\"}.fa-battery-4[_ngcontent-%COMP%]:before, .fa-battery-full[_ngcontent-%COMP%]:before, .fa-battery[_ngcontent-%COMP%]:before{content:\"\uF240\"}.fa-battery-3[_ngcontent-%COMP%]:before, .fa-battery-three-quarters[_ngcontent-%COMP%]:before{content:\"\uF241\"}.fa-battery-2[_ngcontent-%COMP%]:before, .fa-battery-half[_ngcontent-%COMP%]:before{content:\"\uF242\"}.fa-battery-1[_ngcontent-%COMP%]:before, .fa-battery-quarter[_ngcontent-%COMP%]:before{content:\"\uF243\"}.fa-battery-0[_ngcontent-%COMP%]:before, .fa-battery-empty[_ngcontent-%COMP%]:before{content:\"\uF244\"}.fa-mouse-pointer[_ngcontent-%COMP%]:before{content:\"\uF245\"}.fa-i-cursor[_ngcontent-%COMP%]:before{content:\"\uF246\"}.fa-object-group[_ngcontent-%COMP%]:before{content:\"\uF247\"}.fa-object-ungroup[_ngcontent-%COMP%]:before{content:\"\uF248\"}.fa-sticky-note[_ngcontent-%COMP%]:before{content:\"\uF249\"}.fa-sticky-note-o[_ngcontent-%COMP%]:before{content:\"\uF24A\"}.fa-cc-jcb[_ngcontent-%COMP%]:before{content:\"\uF24B\"}.fa-cc-diners-club[_ngcontent-%COMP%]:before{content:\"\uF24C\"}.fa-clone[_ngcontent-%COMP%]:before{content:\"\uF24D\"}.fa-balance-scale[_ngcontent-%COMP%]:before{content:\"\uF24E\"}.fa-hourglass-o[_ngcontent-%COMP%]:before{content:\"\uF250\"}.fa-hourglass-1[_ngcontent-%COMP%]:before, .fa-hourglass-start[_ngcontent-%COMP%]:before{content:\"\uF251\"}.fa-hourglass-2[_ngcontent-%COMP%]:before, .fa-hourglass-half[_ngcontent-%COMP%]:before{content:\"\uF252\"}.fa-hourglass-3[_ngcontent-%COMP%]:before, .fa-hourglass-end[_ngcontent-%COMP%]:before{content:\"\uF253\"}.fa-hourglass[_ngcontent-%COMP%]:before{content:\"\uF254\"}.fa-hand-grab-o[_ngcontent-%COMP%]:before, .fa-hand-rock-o[_ngcontent-%COMP%]:before{content:\"\uF255\"}.fa-hand-paper-o[_ngcontent-%COMP%]:before, .fa-hand-stop-o[_ngcontent-%COMP%]:before{content:\"\uF256\"}.fa-hand-scissors-o[_ngcontent-%COMP%]:before{content:\"\uF257\"}.fa-hand-lizard-o[_ngcontent-%COMP%]:before{content:\"\uF258\"}.fa-hand-spock-o[_ngcontent-%COMP%]:before{content:\"\uF259\"}.fa-hand-pointer-o[_ngcontent-%COMP%]:before{content:\"\uF25A\"}.fa-hand-peace-o[_ngcontent-%COMP%]:before{content:\"\uF25B\"}.fa-trademark[_ngcontent-%COMP%]:before{content:\"\uF25C\"}.fa-registered[_ngcontent-%COMP%]:before{content:\"\uF25D\"}.fa-creative-commons[_ngcontent-%COMP%]:before{content:\"\uF25E\"}.fa-gg[_ngcontent-%COMP%]:before{content:\"\uF260\"}.fa-gg-circle[_ngcontent-%COMP%]:before{content:\"\uF261\"}.fa-tripadvisor[_ngcontent-%COMP%]:before{content:\"\uF262\"}.fa-odnoklassniki[_ngcontent-%COMP%]:before{content:\"\uF263\"}.fa-odnoklassniki-square[_ngcontent-%COMP%]:before{content:\"\uF264\"}.fa-get-pocket[_ngcontent-%COMP%]:before{content:\"\uF265\"}.fa-wikipedia-w[_ngcontent-%COMP%]:before{content:\"\uF266\"}.fa-safari[_ngcontent-%COMP%]:before{content:\"\uF267\"}.fa-chrome[_ngcontent-%COMP%]:before{content:\"\uF268\"}.fa-firefox[_ngcontent-%COMP%]:before{content:\"\uF269\"}.fa-opera[_ngcontent-%COMP%]:before{content:\"\uF26A\"}.fa-internet-explorer[_ngcontent-%COMP%]:before{content:\"\uF26B\"}.fa-television[_ngcontent-%COMP%]:before, .fa-tv[_ngcontent-%COMP%]:before{content:\"\uF26C\"}.fa-contao[_ngcontent-%COMP%]:before{content:\"\uF26D\"}.fa-500px[_ngcontent-%COMP%]:before{content:\"\uF26E\"}.fa-amazon[_ngcontent-%COMP%]:before{content:\"\uF270\"}.fa-calendar-plus-o[_ngcontent-%COMP%]:before{content:\"\uF271\"}.fa-calendar-minus-o[_ngcontent-%COMP%]:before{content:\"\uF272\"}.fa-calendar-times-o[_ngcontent-%COMP%]:before{content:\"\uF273\"}.fa-calendar-check-o[_ngcontent-%COMP%]:before{content:\"\uF274\"}.fa-industry[_ngcontent-%COMP%]:before{content:\"\uF275\"}.fa-map-pin[_ngcontent-%COMP%]:before{content:\"\uF276\"}.fa-map-signs[_ngcontent-%COMP%]:before{content:\"\uF277\"}.fa-map-o[_ngcontent-%COMP%]:before{content:\"\uF278\"}.fa-map[_ngcontent-%COMP%]:before{content:\"\uF279\"}.fa-commenting[_ngcontent-%COMP%]:before{content:\"\uF27A\"}.fa-commenting-o[_ngcontent-%COMP%]:before{content:\"\uF27B\"}.fa-houzz[_ngcontent-%COMP%]:before{content:\"\uF27C\"}.fa-vimeo[_ngcontent-%COMP%]:before{content:\"\uF27D\"}.fa-black-tie[_ngcontent-%COMP%]:before{content:\"\uF27E\"}.fa-fonticons[_ngcontent-%COMP%]:before{content:\"\uF280\"}.fa-reddit-alien[_ngcontent-%COMP%]:before{content:\"\uF281\"}.fa-edge[_ngcontent-%COMP%]:before{content:\"\uF282\"}.fa-credit-card-alt[_ngcontent-%COMP%]:before{content:\"\uF283\"}.fa-codiepie[_ngcontent-%COMP%]:before{content:\"\uF284\"}.fa-modx[_ngcontent-%COMP%]:before{content:\"\uF285\"}.fa-fort-awesome[_ngcontent-%COMP%]:before{content:\"\uF286\"}.fa-usb[_ngcontent-%COMP%]:before{content:\"\uF287\"}.fa-product-hunt[_ngcontent-%COMP%]:before{content:\"\uF288\"}.fa-mixcloud[_ngcontent-%COMP%]:before{content:\"\uF289\"}.fa-scribd[_ngcontent-%COMP%]:before{content:\"\uF28A\"}.fa-pause-circle[_ngcontent-%COMP%]:before{content:\"\uF28B\"}.fa-pause-circle-o[_ngcontent-%COMP%]:before{content:\"\uF28C\"}.fa-stop-circle[_ngcontent-%COMP%]:before{content:\"\uF28D\"}.fa-stop-circle-o[_ngcontent-%COMP%]:before{content:\"\uF28E\"}.fa-shopping-bag[_ngcontent-%COMP%]:before{content:\"\uF290\"}.fa-shopping-basket[_ngcontent-%COMP%]:before{content:\"\uF291\"}.fa-hashtag[_ngcontent-%COMP%]:before{content:\"\uF292\"}.fa-bluetooth[_ngcontent-%COMP%]:before{content:\"\uF293\"}.fa-bluetooth-b[_ngcontent-%COMP%]:before{content:\"\uF294\"}.fa-percent[_ngcontent-%COMP%]:before{content:\"\uF295\"}.fa-gitlab[_ngcontent-%COMP%]:before{content:\"\uF296\"}.fa-wpbeginner[_ngcontent-%COMP%]:before{content:\"\uF297\"}.fa-wpforms[_ngcontent-%COMP%]:before{content:\"\uF298\"}.fa-envira[_ngcontent-%COMP%]:before{content:\"\uF299\"}.fa-universal-access[_ngcontent-%COMP%]:before{content:\"\uF29A\"}.fa-wheelchair-alt[_ngcontent-%COMP%]:before{content:\"\uF29B\"}.fa-question-circle-o[_ngcontent-%COMP%]:before{content:\"\uF29C\"}.fa-blind[_ngcontent-%COMP%]:before{content:\"\uF29D\"}.fa-audio-description[_ngcontent-%COMP%]:before{content:\"\uF29E\"}.fa-volume-control-phone[_ngcontent-%COMP%]:before{content:\"\uF2A0\"}.fa-braille[_ngcontent-%COMP%]:before{content:\"\uF2A1\"}.fa-assistive-listening-systems[_ngcontent-%COMP%]:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting[_ngcontent-%COMP%]:before, .fa-asl-interpreting[_ngcontent-%COMP%]:before{content:\"\uF2A3\"}.fa-deaf[_ngcontent-%COMP%]:before, .fa-deafness[_ngcontent-%COMP%]:before, .fa-hard-of-hearing[_ngcontent-%COMP%]:before{content:\"\uF2A4\"}.fa-glide[_ngcontent-%COMP%]:before{content:\"\uF2A5\"}.fa-glide-g[_ngcontent-%COMP%]:before{content:\"\uF2A6\"}.fa-sign-language[_ngcontent-%COMP%]:before, .fa-signing[_ngcontent-%COMP%]:before{content:\"\uF2A7\"}.fa-low-vision[_ngcontent-%COMP%]:before{content:\"\uF2A8\"}.fa-viadeo[_ngcontent-%COMP%]:before{content:\"\uF2A9\"}.fa-viadeo-square[_ngcontent-%COMP%]:before{content:\"\uF2AA\"}.fa-snapchat[_ngcontent-%COMP%]:before{content:\"\uF2AB\"}.fa-snapchat-ghost[_ngcontent-%COMP%]:before{content:\"\uF2AC\"}.fa-snapchat-square[_ngcontent-%COMP%]:before{content:\"\uF2AD\"}.fa-pied-piper[_ngcontent-%COMP%]:before{content:\"\uF2AE\"}.fa-first-order[_ngcontent-%COMP%]:before{content:\"\uF2B0\"}.fa-yoast[_ngcontent-%COMP%]:before{content:\"\uF2B1\"}.fa-themeisle[_ngcontent-%COMP%]:before{content:\"\uF2B2\"}.fa-google-plus-circle[_ngcontent-%COMP%]:before, .fa-google-plus-official[_ngcontent-%COMP%]:before{content:\"\uF2B3\"}.fa-fa[_ngcontent-%COMP%]:before, .fa-font-awesome[_ngcontent-%COMP%]:before{content:\"\uF2B4\"}.fa-handshake-o[_ngcontent-%COMP%]:before{content:\"\uF2B5\"}.fa-envelope-open[_ngcontent-%COMP%]:before{content:\"\uF2B6\"}.fa-envelope-open-o[_ngcontent-%COMP%]:before{content:\"\uF2B7\"}.fa-linode[_ngcontent-%COMP%]:before{content:\"\uF2B8\"}.fa-address-book[_ngcontent-%COMP%]:before{content:\"\uF2B9\"}.fa-address-book-o[_ngcontent-%COMP%]:before{content:\"\uF2BA\"}.fa-address-card[_ngcontent-%COMP%]:before, .fa-vcard[_ngcontent-%COMP%]:before{content:\"\uF2BB\"}.fa-address-card-o[_ngcontent-%COMP%]:before, .fa-vcard-o[_ngcontent-%COMP%]:before{content:\"\uF2BC\"}.fa-user-circle[_ngcontent-%COMP%]:before{content:\"\uF2BD\"}.fa-user-circle-o[_ngcontent-%COMP%]:before{content:\"\uF2BE\"}.fa-user-o[_ngcontent-%COMP%]:before{content:\"\uF2C0\"}.fa-id-badge[_ngcontent-%COMP%]:before{content:\"\uF2C1\"}.fa-drivers-license[_ngcontent-%COMP%]:before, .fa-id-card[_ngcontent-%COMP%]:before{content:\"\uF2C2\"}.fa-drivers-license-o[_ngcontent-%COMP%]:before, .fa-id-card-o[_ngcontent-%COMP%]:before{content:\"\uF2C3\"}.fa-quora[_ngcontent-%COMP%]:before{content:\"\uF2C4\"}.fa-free-code-camp[_ngcontent-%COMP%]:before{content:\"\uF2C5\"}.fa-telegram[_ngcontent-%COMP%]:before{content:\"\uF2C6\"}.fa-thermometer-4[_ngcontent-%COMP%]:before, .fa-thermometer-full[_ngcontent-%COMP%]:before, .fa-thermometer[_ngcontent-%COMP%]:before{content:\"\uF2C7\"}.fa-thermometer-3[_ngcontent-%COMP%]:before, .fa-thermometer-three-quarters[_ngcontent-%COMP%]:before{content:\"\uF2C8\"}.fa-thermometer-2[_ngcontent-%COMP%]:before, .fa-thermometer-half[_ngcontent-%COMP%]:before{content:\"\uF2C9\"}.fa-thermometer-1[_ngcontent-%COMP%]:before, .fa-thermometer-quarter[_ngcontent-%COMP%]:before{content:\"\uF2CA\"}.fa-thermometer-0[_ngcontent-%COMP%]:before, .fa-thermometer-empty[_ngcontent-%COMP%]:before{content:\"\uF2CB\"}.fa-shower[_ngcontent-%COMP%]:before{content:\"\uF2CC\"}.fa-bath[_ngcontent-%COMP%]:before, .fa-bathtub[_ngcontent-%COMP%]:before, .fa-s15[_ngcontent-%COMP%]:before{content:\"\uF2CD\"}.fa-podcast[_ngcontent-%COMP%]:before{content:\"\uF2CE\"}.fa-window-maximize[_ngcontent-%COMP%]:before{content:\"\uF2D0\"}.fa-window-minimize[_ngcontent-%COMP%]:before{content:\"\uF2D1\"}.fa-window-restore[_ngcontent-%COMP%]:before{content:\"\uF2D2\"}.fa-times-rectangle[_ngcontent-%COMP%]:before, .fa-window-close[_ngcontent-%COMP%]:before{content:\"\uF2D3\"}.fa-times-rectangle-o[_ngcontent-%COMP%]:before, .fa-window-close-o[_ngcontent-%COMP%]:before{content:\"\uF2D4\"}.fa-bandcamp[_ngcontent-%COMP%]:before{content:\"\uF2D5\"}.fa-grav[_ngcontent-%COMP%]:before{content:\"\uF2D6\"}.fa-etsy[_ngcontent-%COMP%]:before{content:\"\uF2D7\"}.fa-imdb[_ngcontent-%COMP%]:before{content:\"\uF2D8\"}.fa-ravelry[_ngcontent-%COMP%]:before{content:\"\uF2D9\"}.fa-eercast[_ngcontent-%COMP%]:before{content:\"\uF2DA\"}.fa-microchip[_ngcontent-%COMP%]:before{content:\"\uF2DB\"}.fa-snowflake-o[_ngcontent-%COMP%]:before{content:\"\uF2DC\"}.fa-superpowers[_ngcontent-%COMP%]:before{content:\"\uF2DD\"}.fa-wpexplorer[_ngcontent-%COMP%]:before{content:\"\uF2DE\"}.fa-meetup[_ngcontent-%COMP%]:before{content:\"\uF2E0\"}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable[_ngcontent-%COMP%]:active, .sr-only-focusable[_ngcontent-%COMP%]:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a[_ngcontent-%COMP%]{cursor:pointer}.angular-editor-textarea[_ngcontent-%COMP%]{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea[_ngcontent-%COMP%]:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:hsla(0,0%,100%,.5)}.angular-editor-toolbar[_ngcontent-%COMP%]{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.focus[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:focus{outline:0}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label[_ngcontent-%COMP%]{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.background[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{background:#555}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]{background:#fff5b9}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]:hover{background-color:#fffa98}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid hsla(0,0%,100%,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:24px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h2[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h3[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{font-size:15px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h6[_ngcontent-%COMP%]{font-size:13px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .pre[_ngcontent-%COMP%]{font-size:12px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]{display:inline-block;width:50px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size1[_ngcontent-%COMP%]{font-size:10px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size2[_ngcontent-%COMP%]{font-size:12px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size3[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size4[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size5[_ngcontent-%COMP%]{font-size:18px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size6[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size7[_ngcontent-%COMP%]{font-size:22px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{position:relative;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]:not([style*=\"display:none\"]):not([style*=\"display: none\"]), .select-button[_ngcontent-%COMP%]{display:inline-block}.select-button.disabled[_ngcontent-%COMP%]{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}"] });
AngularEditorToolbarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: AngularEditorService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
AngularEditorToolbarComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    uploadUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    upload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showToolbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fonts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    defaultFontName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    defaultFontSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hiddenButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    execute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    myInputFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['fileInput', { static: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularEditorToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'angular-editor-toolbar',
                template: "<div class=\"angular-editor-toolbar\" *ngIf=\"showToolbar\">\n  <div class=\"angular-editor-toolbar-set\">\n    <button type=\"button\" title=\"Undo\" class=\"angular-editor-button\" (click)=\"triggerCommand('undo')\"\n            [hidden]=\"isButtonHidden('undo')\" tabindex=\"-1\"><i\n      class='fa fa-undo'></i></button>\n    <button type=\"button\" title=\"Redo\" class=\"angular-editor-button\" (click)=\"triggerCommand('redo')\"\n            [hidden]=\"isButtonHidden('redo')\" tabindex=\"-1\"><i\n      class='fa fa-repeat'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'bold-'+id\" type=\"button\" title=\"Bold\" class=\"angular-editor-button\" (click)=\"triggerCommand('bold')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('bold')\" tabindex=\"-1\"><i class='fa fa-bold'></i></button>\n    <button [id]=\"'italic-'+id\" type=\"button\" title=\"Italic\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('italic')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('italic')\" tabindex=\"-1\"><i class='fa fa-italic'></i>\n    </button>\n    <button [id]=\"'underline-'+id\" type=\"button\" title=\"Underline\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('underline')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('underline')\"\n            tabindex=\"-1\"><i class='fa fa-underline'></i></button>\n    <button [id]=\"'strikeThrough-'+id\" type=\"button\" title=\"Strikethrough\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('strikeThrough')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('strikeThrough')\"\n            tabindex=\"-1\"><i class='fa fa-strikethrough'></i></button>\n    <button [id]=\"'subscript-'+id\" type=\"button\" title=\"Subscript\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('subscript')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('subscript')\"\n            tabindex=\"-1\"><i class='fa fa-subscript'></i></button>\n    <button [id]=\"'superscript-'+id\" type=\"button\" title=\"Superscript\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('superscript')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('superscript')\"\n            tabindex=\"-1\"><i class='fa fa-superscript'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'justifyLeft-'+id\" type=\"button\" title=\"Justify Left\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyLeft')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyLeft')\"\n            tabindex=\"-1\"><i\n      class='fa fa-align-left'></i></button>\n    <button [id]=\"'justifyCenter-'+id\" type=\"button\" title=\"Justify Center\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyCenter')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyCenter')\"\n            tabindex=\"-1\"><i\n      class='fa fa-align-center'></i></button>\n    <button [id]=\"'justifyRight-'+id\" type=\"button\" title=\"Justify Right\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyRight')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyRight')\"\n            tabindex=\"-1\">\n      <i class='fa fa-align-right'></i></button>\n    <button [id]=\"'justifyFull-'+id\" type=\"button\" title=\"Justify Full\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyFull')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyFull')\"\n            tabindex=\"-1\"><i\n      class='fa fa-align-justify'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'indent-'+id\" type=\"button\" title=\"Indent\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('indent')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('indent')\" tabindex=\"-1\"><i\n      class='fa fa-indent'></i></button>\n    <button [id]=\"'outdent-'+id\" type=\"button\" title=\"Outdent\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('outdent')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('outdent')\" tabindex=\"-1\"><i\n      class='fa fa-outdent'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'insertUnorderedList-'+id\" type=\"button\" title=\"Unordered List\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertUnorderedList')\" [disabled]=\"htmlMode\"\n            [hidden]=\"isButtonHidden('insertUnorderedList')\" tabindex=\"-1\"><i\n      class='fa fa-list-ul'></i></button>\n    <button [id]=\"'insertOrderedList-'+id\" type=\"button\" title=\"Ordered List\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertOrderedList')\" [disabled]=\"htmlMode\"\n            [hidden]=\"isButtonHidden('insertOrderedList')\" tabindex=\"-1\"><i\n      class='fa fa-list-ol'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n\n    <ae-select class=\"select-heading\" [options]=\"headings\"\n               [(ngModel)]=\"block\"\n               (change)=\"triggerCommand(block)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('heading')\"\n               tabindex=\"-1\"></ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n\n    <ae-select class=\"select-font\" [options]=\"fonts\"\n               [(ngModel)]=\"fontName\"\n               (change)=\"setFontName(fontName)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('fontName')\"\n               tabindex=\"-1\"></ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n\n    <ae-select class=\"select-font-size\" [options]=\"fontSizes\"\n               [(ngModel)]=\"fontSize\"\n               (change)=\"setFontSize(fontSize)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('fontSize')\"\n               tabindex=\"-1\">\n    </ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <input\n      style=\"display: none\"\n      type=\"color\" (change)=\"insertColor(fgInput.value, 'textColor')\"\n      #fgInput>\n    <button [id]=\"'foregroundColorPicker-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"focus(); ; fgInput.click()\"\n            title=\"Text Color\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('textColor')\" tabindex=\"-1\"><span\n      class=\"color-label foreground\"><i class=\"fa fa-font\"></i></span>\n    </button>\n    <input\n      style=\"display: none\"\n      type=\"color\" (change)=\"insertColor(bgInput.value, 'backgroundColor')\"\n      #bgInput>\n    <button [id]=\"'backgroundColorPicker-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"focus(); ; bgInput.click()\"\n            title=\"Background Color\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('backgroundColor')\" tabindex=\"-1\"><span\n      class=\"color-label background\"><i class=\"fa fa-font\"></i></span>\n    </button>\n  </div>\n  <div *ngIf=\"_customClasses\" class=\"angular-editor-toolbar-set\">\n    <ae-select class=\"select-custom-style\" [options]=\"customClassList\"\n               [(ngModel)]=\"customClassId\"\n               (change)=\"setCustomClass(customClassId)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('customClasses')\"\n               tabindex=\"-1\"></ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'link-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"insertUrl()\"\n            title=\"Insert Link\" [disabled]=\"isLinkButtonDisabled\" [hidden]=\"isButtonHidden('link')\" tabindex=\"-1\">\n      <i class=\"fa fa-link\"></i>\n    </button>\n    <button [id]=\"'unlink-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"triggerCommand('unlink')\"\n            title=\"Unlink\" [disabled]=\"htmlMode || !linkSelected\" [hidden]=\"isButtonHidden('unlink')\" tabindex=\"-1\">\n      <i class=\"fa fa-chain-broken\"></i>\n    </button>\n    <input\n      style=\"display: none\"\n      accept=\"image/*\"\n      type=\"file\" (change)=\"onFileChanged($event)\"\n      #fileInput>\n    <button [id]=\"'insertImage-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"focus(); fileInput.click()\"\n            title=\"Insert Image\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('insertImage')\" tabindex=\"-1\"><i class=\"fa fa-image\"></i>\n    </button>\n    <button [id]=\"'insertVideo-'+id\" type=\"button\" class=\"angular-editor-button\"\n            (click)=\"insertVideo()\" title=\"Insert Video\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('insertVideo')\"\n            tabindex=\"-1\"><i\n      class=\"fa fa-video-camera\"></i></button>\n    <button [id]=\"'insertHorizontalRule-'+id\" type=\"button\" title=\"Horizontal Line\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertHorizontalRule')\" [disabled]=\"htmlMode\"\n            [hidden]=\"isButtonHidden('insertHorizontalRule')\" tabindex=\"-1\"><i\n      class=\"fa fa-minus\"></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'clearFormatting-'+id\" type=\"button\" title=\"Clear Formatting\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('removeFormat')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('removeFormat')\"\n            tabindex=\"-1\"><i class='fa fa-remove'></i>\n    </button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'toggleEditorMode-'+id\" type=\"button\" title=\"HTML Code\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('toggleEditorMode')\" [hidden]=\"isButtonHidden('toggleEditorMode')\" tabindex=\"-1\"><i\n      class='fa fa-code'></i></button>\n  </div>\n</div>\n",
                styles: ["@charset \"UTF-8\";\n/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";transform:scaleY(-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\uF000\"}.fa-music:before{content:\"\uF001\"}.fa-search:before{content:\"\uF002\"}.fa-envelope-o:before{content:\"\uF003\"}.fa-heart:before{content:\"\uF004\"}.fa-star:before{content:\"\uF005\"}.fa-star-o:before{content:\"\uF006\"}.fa-user:before{content:\"\uF007\"}.fa-film:before{content:\"\uF008\"}.fa-th-large:before{content:\"\uF009\"}.fa-th:before{content:\"\uF00A\"}.fa-th-list:before{content:\"\uF00B\"}.fa-check:before{content:\"\uF00C\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\uF00D\"}.fa-search-plus:before{content:\"\uF00E\"}.fa-search-minus:before{content:\"\uF010\"}.fa-power-off:before{content:\"\uF011\"}.fa-signal:before{content:\"\uF012\"}.fa-cog:before,.fa-gear:before{content:\"\uF013\"}.fa-trash-o:before{content:\"\uF014\"}.fa-home:before{content:\"\uF015\"}.fa-file-o:before{content:\"\uF016\"}.fa-clock-o:before{content:\"\uF017\"}.fa-road:before{content:\"\uF018\"}.fa-download:before{content:\"\uF019\"}.fa-arrow-circle-o-down:before{content:\"\uF01A\"}.fa-arrow-circle-o-up:before{content:\"\uF01B\"}.fa-inbox:before{content:\"\uF01C\"}.fa-play-circle-o:before{content:\"\uF01D\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\uF01E\"}.fa-refresh:before{content:\"\uF021\"}.fa-list-alt:before{content:\"\uF022\"}.fa-lock:before{content:\"\uF023\"}.fa-flag:before{content:\"\uF024\"}.fa-headphones:before{content:\"\uF025\"}.fa-volume-off:before{content:\"\uF026\"}.fa-volume-down:before{content:\"\uF027\"}.fa-volume-up:before{content:\"\uF028\"}.fa-qrcode:before{content:\"\uF029\"}.fa-barcode:before{content:\"\uF02A\"}.fa-tag:before{content:\"\uF02B\"}.fa-tags:before{content:\"\uF02C\"}.fa-book:before{content:\"\uF02D\"}.fa-bookmark:before{content:\"\uF02E\"}.fa-print:before{content:\"\uF02F\"}.fa-camera:before{content:\"\uF030\"}.fa-font:before{content:\"\uF031\"}.fa-bold:before{content:\"\uF032\"}.fa-italic:before{content:\"\uF033\"}.fa-text-height:before{content:\"\uF034\"}.fa-text-width:before{content:\"\uF035\"}.fa-align-left:before{content:\"\uF036\"}.fa-align-center:before{content:\"\uF037\"}.fa-align-right:before{content:\"\uF038\"}.fa-align-justify:before{content:\"\uF039\"}.fa-list:before{content:\"\uF03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\uF03B\"}.fa-indent:before{content:\"\uF03C\"}.fa-video-camera:before{content:\"\uF03D\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\uF03E\"}.fa-pencil:before{content:\"\uF040\"}.fa-map-marker:before{content:\"\uF041\"}.fa-adjust:before{content:\"\uF042\"}.fa-tint:before{content:\"\uF043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\uF044\"}.fa-share-square-o:before{content:\"\uF045\"}.fa-check-square-o:before{content:\"\uF046\"}.fa-arrows:before{content:\"\uF047\"}.fa-step-backward:before{content:\"\uF048\"}.fa-fast-backward:before{content:\"\uF049\"}.fa-backward:before{content:\"\uF04A\"}.fa-play:before{content:\"\uF04B\"}.fa-pause:before{content:\"\uF04C\"}.fa-stop:before{content:\"\uF04D\"}.fa-forward:before{content:\"\uF04E\"}.fa-fast-forward:before{content:\"\uF050\"}.fa-step-forward:before{content:\"\uF051\"}.fa-eject:before{content:\"\uF052\"}.fa-chevron-left:before{content:\"\uF053\"}.fa-chevron-right:before{content:\"\uF054\"}.fa-plus-circle:before{content:\"\uF055\"}.fa-minus-circle:before{content:\"\uF056\"}.fa-times-circle:before{content:\"\uF057\"}.fa-check-circle:before{content:\"\uF058\"}.fa-question-circle:before{content:\"\uF059\"}.fa-info-circle:before{content:\"\uF05A\"}.fa-crosshairs:before{content:\"\uF05B\"}.fa-times-circle-o:before{content:\"\uF05C\"}.fa-check-circle-o:before{content:\"\uF05D\"}.fa-ban:before{content:\"\uF05E\"}.fa-arrow-left:before{content:\"\uF060\"}.fa-arrow-right:before{content:\"\uF061\"}.fa-arrow-up:before{content:\"\uF062\"}.fa-arrow-down:before{content:\"\uF063\"}.fa-mail-forward:before,.fa-share:before{content:\"\uF064\"}.fa-expand:before{content:\"\uF065\"}.fa-compress:before{content:\"\uF066\"}.fa-plus:before{content:\"\uF067\"}.fa-minus:before{content:\"\uF068\"}.fa-asterisk:before{content:\"\uF069\"}.fa-exclamation-circle:before{content:\"\uF06A\"}.fa-gift:before{content:\"\uF06B\"}.fa-leaf:before{content:\"\uF06C\"}.fa-fire:before{content:\"\uF06D\"}.fa-eye:before{content:\"\uF06E\"}.fa-eye-slash:before{content:\"\uF070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\uF071\"}.fa-plane:before{content:\"\uF072\"}.fa-calendar:before{content:\"\uF073\"}.fa-random:before{content:\"\uF074\"}.fa-comment:before{content:\"\uF075\"}.fa-magnet:before{content:\"\uF076\"}.fa-chevron-up:before{content:\"\uF077\"}.fa-chevron-down:before{content:\"\uF078\"}.fa-retweet:before{content:\"\uF079\"}.fa-shopping-cart:before{content:\"\uF07A\"}.fa-folder:before{content:\"\uF07B\"}.fa-folder-open:before{content:\"\uF07C\"}.fa-arrows-v:before{content:\"\uF07D\"}.fa-arrows-h:before{content:\"\uF07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\uF080\"}.fa-twitter-square:before{content:\"\uF081\"}.fa-facebook-square:before{content:\"\uF082\"}.fa-camera-retro:before{content:\"\uF083\"}.fa-key:before{content:\"\uF084\"}.fa-cogs:before,.fa-gears:before{content:\"\uF085\"}.fa-comments:before{content:\"\uF086\"}.fa-thumbs-o-up:before{content:\"\uF087\"}.fa-thumbs-o-down:before{content:\"\uF088\"}.fa-star-half:before{content:\"\uF089\"}.fa-heart-o:before{content:\"\uF08A\"}.fa-sign-out:before{content:\"\uF08B\"}.fa-linkedin-square:before{content:\"\uF08C\"}.fa-thumb-tack:before{content:\"\uF08D\"}.fa-external-link:before{content:\"\uF08E\"}.fa-sign-in:before{content:\"\uF090\"}.fa-trophy:before{content:\"\uF091\"}.fa-github-square:before{content:\"\uF092\"}.fa-upload:before{content:\"\uF093\"}.fa-lemon-o:before{content:\"\uF094\"}.fa-phone:before{content:\"\uF095\"}.fa-square-o:before{content:\"\uF096\"}.fa-bookmark-o:before{content:\"\uF097\"}.fa-phone-square:before{content:\"\uF098\"}.fa-twitter:before{content:\"\uF099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\uF09A\"}.fa-github:before{content:\"\uF09B\"}.fa-unlock:before{content:\"\uF09C\"}.fa-credit-card:before{content:\"\uF09D\"}.fa-feed:before,.fa-rss:before{content:\"\uF09E\"}.fa-hdd-o:before{content:\"\uF0A0\"}.fa-bullhorn:before{content:\"\uF0A1\"}.fa-bell:before{content:\"\uF0F3\"}.fa-certificate:before{content:\"\uF0A3\"}.fa-hand-o-right:before{content:\"\uF0A4\"}.fa-hand-o-left:before{content:\"\uF0A5\"}.fa-hand-o-up:before{content:\"\uF0A6\"}.fa-hand-o-down:before{content:\"\uF0A7\"}.fa-arrow-circle-left:before{content:\"\uF0A8\"}.fa-arrow-circle-right:before{content:\"\uF0A9\"}.fa-arrow-circle-up:before{content:\"\uF0AA\"}.fa-arrow-circle-down:before{content:\"\uF0AB\"}.fa-globe:before{content:\"\uF0AC\"}.fa-wrench:before{content:\"\uF0AD\"}.fa-tasks:before{content:\"\uF0AE\"}.fa-filter:before{content:\"\uF0B0\"}.fa-briefcase:before{content:\"\uF0B1\"}.fa-arrows-alt:before{content:\"\uF0B2\"}.fa-group:before,.fa-users:before{content:\"\uF0C0\"}.fa-chain:before,.fa-link:before{content:\"\uF0C1\"}.fa-cloud:before{content:\"\uF0C2\"}.fa-flask:before{content:\"\uF0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\uF0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\uF0C5\"}.fa-paperclip:before{content:\"\uF0C6\"}.fa-floppy-o:before,.fa-save:before{content:\"\uF0C7\"}.fa-square:before{content:\"\uF0C8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\uF0C9\"}.fa-list-ul:before{content:\"\uF0CA\"}.fa-list-ol:before{content:\"\uF0CB\"}.fa-strikethrough:before{content:\"\uF0CC\"}.fa-underline:before{content:\"\uF0CD\"}.fa-table:before{content:\"\uF0CE\"}.fa-magic:before{content:\"\uF0D0\"}.fa-truck:before{content:\"\uF0D1\"}.fa-pinterest:before{content:\"\uF0D2\"}.fa-pinterest-square:before{content:\"\uF0D3\"}.fa-google-plus-square:before{content:\"\uF0D4\"}.fa-google-plus:before{content:\"\uF0D5\"}.fa-money:before{content:\"\uF0D6\"}.fa-caret-down:before{content:\"\uF0D7\"}.fa-caret-up:before{content:\"\uF0D8\"}.fa-caret-left:before{content:\"\uF0D9\"}.fa-caret-right:before{content:\"\uF0DA\"}.fa-columns:before{content:\"\uF0DB\"}.fa-sort:before,.fa-unsorted:before{content:\"\uF0DC\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\uF0DD\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\uF0DE\"}.fa-envelope:before{content:\"\uF0E0\"}.fa-linkedin:before{content:\"\uF0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\uF0E2\"}.fa-gavel:before,.fa-legal:before{content:\"\uF0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\uF0E4\"}.fa-comment-o:before{content:\"\uF0E5\"}.fa-comments-o:before{content:\"\uF0E6\"}.fa-bolt:before,.fa-flash:before{content:\"\uF0E7\"}.fa-sitemap:before{content:\"\uF0E8\"}.fa-umbrella:before{content:\"\uF0E9\"}.fa-clipboard:before,.fa-paste:before{content:\"\uF0EA\"}.fa-lightbulb-o:before{content:\"\uF0EB\"}.fa-exchange:before{content:\"\uF0EC\"}.fa-cloud-download:before{content:\"\uF0ED\"}.fa-cloud-upload:before{content:\"\uF0EE\"}.fa-user-md:before{content:\"\uF0F0\"}.fa-stethoscope:before{content:\"\uF0F1\"}.fa-suitcase:before{content:\"\uF0F2\"}.fa-bell-o:before{content:\"\uF0A2\"}.fa-coffee:before{content:\"\uF0F4\"}.fa-cutlery:before{content:\"\uF0F5\"}.fa-file-text-o:before{content:\"\uF0F6\"}.fa-building-o:before{content:\"\uF0F7\"}.fa-hospital-o:before{content:\"\uF0F8\"}.fa-ambulance:before{content:\"\uF0F9\"}.fa-medkit:before{content:\"\uF0FA\"}.fa-fighter-jet:before{content:\"\uF0FB\"}.fa-beer:before{content:\"\uF0FC\"}.fa-h-square:before{content:\"\uF0FD\"}.fa-plus-square:before{content:\"\uF0FE\"}.fa-angle-double-left:before{content:\"\uF100\"}.fa-angle-double-right:before{content:\"\uF101\"}.fa-angle-double-up:before{content:\"\uF102\"}.fa-angle-double-down:before{content:\"\uF103\"}.fa-angle-left:before{content:\"\uF104\"}.fa-angle-right:before{content:\"\uF105\"}.fa-angle-up:before{content:\"\uF106\"}.fa-angle-down:before{content:\"\uF107\"}.fa-desktop:before{content:\"\uF108\"}.fa-laptop:before{content:\"\uF109\"}.fa-tablet:before{content:\"\uF10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\uF10B\"}.fa-circle-o:before{content:\"\uF10C\"}.fa-quote-left:before{content:\"\uF10D\"}.fa-quote-right:before{content:\"\uF10E\"}.fa-spinner:before{content:\"\uF110\"}.fa-circle:before{content:\"\uF111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\uF112\"}.fa-github-alt:before{content:\"\uF113\"}.fa-folder-o:before{content:\"\uF114\"}.fa-folder-open-o:before{content:\"\uF115\"}.fa-smile-o:before{content:\"\uF118\"}.fa-frown-o:before{content:\"\uF119\"}.fa-meh-o:before{content:\"\uF11A\"}.fa-gamepad:before{content:\"\uF11B\"}.fa-keyboard-o:before{content:\"\uF11C\"}.fa-flag-o:before{content:\"\uF11D\"}.fa-flag-checkered:before{content:\"\uF11E\"}.fa-terminal:before{content:\"\uF120\"}.fa-code:before{content:\"\uF121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\uF122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\uF123\"}.fa-location-arrow:before{content:\"\uF124\"}.fa-crop:before{content:\"\uF125\"}.fa-code-fork:before{content:\"\uF126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\uF127\"}.fa-question:before{content:\"\uF128\"}.fa-info:before{content:\"\uF129\"}.fa-exclamation:before{content:\"\uF12A\"}.fa-superscript:before{content:\"\uF12B\"}.fa-subscript:before{content:\"\uF12C\"}.fa-eraser:before{content:\"\uF12D\"}.fa-puzzle-piece:before{content:\"\uF12E\"}.fa-microphone:before{content:\"\uF130\"}.fa-microphone-slash:before{content:\"\uF131\"}.fa-shield:before{content:\"\uF132\"}.fa-calendar-o:before{content:\"\uF133\"}.fa-fire-extinguisher:before{content:\"\uF134\"}.fa-rocket:before{content:\"\uF135\"}.fa-maxcdn:before{content:\"\uF136\"}.fa-chevron-circle-left:before{content:\"\uF137\"}.fa-chevron-circle-right:before{content:\"\uF138\"}.fa-chevron-circle-up:before{content:\"\uF139\"}.fa-chevron-circle-down:before{content:\"\uF13A\"}.fa-html5:before{content:\"\uF13B\"}.fa-css3:before{content:\"\uF13C\"}.fa-anchor:before{content:\"\uF13D\"}.fa-unlock-alt:before{content:\"\uF13E\"}.fa-bullseye:before{content:\"\uF140\"}.fa-ellipsis-h:before{content:\"\uF141\"}.fa-ellipsis-v:before{content:\"\uF142\"}.fa-rss-square:before{content:\"\uF143\"}.fa-play-circle:before{content:\"\uF144\"}.fa-ticket:before{content:\"\uF145\"}.fa-minus-square:before{content:\"\uF146\"}.fa-minus-square-o:before{content:\"\uF147\"}.fa-level-up:before{content:\"\uF148\"}.fa-level-down:before{content:\"\uF149\"}.fa-check-square:before{content:\"\uF14A\"}.fa-pencil-square:before{content:\"\uF14B\"}.fa-external-link-square:before{content:\"\uF14C\"}.fa-share-square:before{content:\"\uF14D\"}.fa-compass:before{content:\"\uF14E\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\uF150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\uF151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\uF152\"}.fa-eur:before,.fa-euro:before{content:\"\uF153\"}.fa-gbp:before{content:\"\uF154\"}.fa-dollar:before,.fa-usd:before{content:\"\uF155\"}.fa-inr:before,.fa-rupee:before{content:\"\uF156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\uF157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\uF158\"}.fa-krw:before,.fa-won:before{content:\"\uF159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\uF15A\"}.fa-file:before{content:\"\uF15B\"}.fa-file-text:before{content:\"\uF15C\"}.fa-sort-alpha-asc:before{content:\"\uF15D\"}.fa-sort-alpha-desc:before{content:\"\uF15E\"}.fa-sort-amount-asc:before{content:\"\uF160\"}.fa-sort-amount-desc:before{content:\"\uF161\"}.fa-sort-numeric-asc:before{content:\"\uF162\"}.fa-sort-numeric-desc:before{content:\"\uF163\"}.fa-thumbs-up:before{content:\"\uF164\"}.fa-thumbs-down:before{content:\"\uF165\"}.fa-youtube-square:before{content:\"\uF166\"}.fa-youtube:before{content:\"\uF167\"}.fa-xing:before{content:\"\uF168\"}.fa-xing-square:before{content:\"\uF169\"}.fa-youtube-play:before{content:\"\uF16A\"}.fa-dropbox:before{content:\"\uF16B\"}.fa-stack-overflow:before{content:\"\uF16C\"}.fa-instagram:before{content:\"\uF16D\"}.fa-flickr:before{content:\"\uF16E\"}.fa-adn:before{content:\"\uF170\"}.fa-bitbucket:before{content:\"\uF171\"}.fa-bitbucket-square:before{content:\"\uF172\"}.fa-tumblr:before{content:\"\uF173\"}.fa-tumblr-square:before{content:\"\uF174\"}.fa-long-arrow-down:before{content:\"\uF175\"}.fa-long-arrow-up:before{content:\"\uF176\"}.fa-long-arrow-left:before{content:\"\uF177\"}.fa-long-arrow-right:before{content:\"\uF178\"}.fa-apple:before{content:\"\uF179\"}.fa-windows:before{content:\"\uF17A\"}.fa-android:before{content:\"\uF17B\"}.fa-linux:before{content:\"\uF17C\"}.fa-dribbble:before{content:\"\uF17D\"}.fa-skype:before{content:\"\uF17E\"}.fa-foursquare:before{content:\"\uF180\"}.fa-trello:before{content:\"\uF181\"}.fa-female:before{content:\"\uF182\"}.fa-male:before{content:\"\uF183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\uF184\"}.fa-sun-o:before{content:\"\uF185\"}.fa-moon-o:before{content:\"\uF186\"}.fa-archive:before{content:\"\uF187\"}.fa-bug:before{content:\"\uF188\"}.fa-vk:before{content:\"\uF189\"}.fa-weibo:before{content:\"\uF18A\"}.fa-renren:before{content:\"\uF18B\"}.fa-pagelines:before{content:\"\uF18C\"}.fa-stack-exchange:before{content:\"\uF18D\"}.fa-arrow-circle-o-right:before{content:\"\uF18E\"}.fa-arrow-circle-o-left:before{content:\"\uF190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\uF191\"}.fa-dot-circle-o:before{content:\"\uF192\"}.fa-wheelchair:before{content:\"\uF193\"}.fa-vimeo-square:before{content:\"\uF194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\uF195\"}.fa-plus-square-o:before{content:\"\uF196\"}.fa-space-shuttle:before{content:\"\uF197\"}.fa-slack:before{content:\"\uF198\"}.fa-envelope-square:before{content:\"\uF199\"}.fa-wordpress:before{content:\"\uF19A\"}.fa-openid:before{content:\"\uF19B\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\uF19C\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\uF19D\"}.fa-yahoo:before{content:\"\uF19E\"}.fa-google:before{content:\"\uF1A0\"}.fa-reddit:before{content:\"\uF1A1\"}.fa-reddit-square:before{content:\"\uF1A2\"}.fa-stumbleupon-circle:before{content:\"\uF1A3\"}.fa-stumbleupon:before{content:\"\uF1A4\"}.fa-delicious:before{content:\"\uF1A5\"}.fa-digg:before{content:\"\uF1A6\"}.fa-pied-piper-pp:before{content:\"\uF1A7\"}.fa-pied-piper-alt:before{content:\"\uF1A8\"}.fa-drupal:before{content:\"\uF1A9\"}.fa-joomla:before{content:\"\uF1AA\"}.fa-language:before{content:\"\uF1AB\"}.fa-fax:before{content:\"\uF1AC\"}.fa-building:before{content:\"\uF1AD\"}.fa-child:before{content:\"\uF1AE\"}.fa-paw:before{content:\"\uF1B0\"}.fa-spoon:before{content:\"\uF1B1\"}.fa-cube:before{content:\"\uF1B2\"}.fa-cubes:before{content:\"\uF1B3\"}.fa-behance:before{content:\"\uF1B4\"}.fa-behance-square:before{content:\"\uF1B5\"}.fa-steam:before{content:\"\uF1B6\"}.fa-steam-square:before{content:\"\uF1B7\"}.fa-recycle:before{content:\"\uF1B8\"}.fa-automobile:before,.fa-car:before{content:\"\uF1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\uF1BA\"}.fa-tree:before{content:\"\uF1BB\"}.fa-spotify:before{content:\"\uF1BC\"}.fa-deviantart:before{content:\"\uF1BD\"}.fa-soundcloud:before{content:\"\uF1BE\"}.fa-database:before{content:\"\uF1C0\"}.fa-file-pdf-o:before{content:\"\uF1C1\"}.fa-file-word-o:before{content:\"\uF1C2\"}.fa-file-excel-o:before{content:\"\uF1C3\"}.fa-file-powerpoint-o:before{content:\"\uF1C4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\uF1C5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\uF1C6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\uF1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\uF1C8\"}.fa-file-code-o:before{content:\"\uF1C9\"}.fa-vine:before{content:\"\uF1CA\"}.fa-codepen:before{content:\"\uF1CB\"}.fa-jsfiddle:before{content:\"\uF1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\uF1CD\"}.fa-circle-o-notch:before{content:\"\uF1CE\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\uF1D0\"}.fa-empire:before,.fa-ge:before{content:\"\uF1D1\"}.fa-git-square:before{content:\"\uF1D2\"}.fa-git:before{content:\"\uF1D3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\uF1D4\"}.fa-tencent-weibo:before{content:\"\uF1D5\"}.fa-qq:before{content:\"\uF1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\uF1D7\"}.fa-paper-plane:before,.fa-send:before{content:\"\uF1D8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\uF1D9\"}.fa-history:before{content:\"\uF1DA\"}.fa-circle-thin:before{content:\"\uF1DB\"}.fa-header:before{content:\"\uF1DC\"}.fa-paragraph:before{content:\"\uF1DD\"}.fa-sliders:before{content:\"\uF1DE\"}.fa-share-alt:before{content:\"\uF1E0\"}.fa-share-alt-square:before{content:\"\uF1E1\"}.fa-bomb:before{content:\"\uF1E2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\uF1E3\"}.fa-tty:before{content:\"\uF1E4\"}.fa-binoculars:before{content:\"\uF1E5\"}.fa-plug:before{content:\"\uF1E6\"}.fa-slideshare:before{content:\"\uF1E7\"}.fa-twitch:before{content:\"\uF1E8\"}.fa-yelp:before{content:\"\uF1E9\"}.fa-newspaper-o:before{content:\"\uF1EA\"}.fa-wifi:before{content:\"\uF1EB\"}.fa-calculator:before{content:\"\uF1EC\"}.fa-paypal:before{content:\"\uF1ED\"}.fa-google-wallet:before{content:\"\uF1EE\"}.fa-cc-visa:before{content:\"\uF1F0\"}.fa-cc-mastercard:before{content:\"\uF1F1\"}.fa-cc-discover:before{content:\"\uF1F2\"}.fa-cc-amex:before{content:\"\uF1F3\"}.fa-cc-paypal:before{content:\"\uF1F4\"}.fa-cc-stripe:before{content:\"\uF1F5\"}.fa-bell-slash:before{content:\"\uF1F6\"}.fa-bell-slash-o:before{content:\"\uF1F7\"}.fa-trash:before{content:\"\uF1F8\"}.fa-copyright:before{content:\"\uF1F9\"}.fa-at:before{content:\"\uF1FA\"}.fa-eyedropper:before{content:\"\uF1FB\"}.fa-paint-brush:before{content:\"\uF1FC\"}.fa-birthday-cake:before{content:\"\uF1FD\"}.fa-area-chart:before{content:\"\uF1FE\"}.fa-pie-chart:before{content:\"\uF200\"}.fa-line-chart:before{content:\"\uF201\"}.fa-lastfm:before{content:\"\uF202\"}.fa-lastfm-square:before{content:\"\uF203\"}.fa-toggle-off:before{content:\"\uF204\"}.fa-toggle-on:before{content:\"\uF205\"}.fa-bicycle:before{content:\"\uF206\"}.fa-bus:before{content:\"\uF207\"}.fa-ioxhost:before{content:\"\uF208\"}.fa-angellist:before{content:\"\uF209\"}.fa-cc:before{content:\"\uF20A\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\uF20B\"}.fa-meanpath:before{content:\"\uF20C\"}.fa-buysellads:before{content:\"\uF20D\"}.fa-connectdevelop:before{content:\"\uF20E\"}.fa-dashcube:before{content:\"\uF210\"}.fa-forumbee:before{content:\"\uF211\"}.fa-leanpub:before{content:\"\uF212\"}.fa-sellsy:before{content:\"\uF213\"}.fa-shirtsinbulk:before{content:\"\uF214\"}.fa-simplybuilt:before{content:\"\uF215\"}.fa-skyatlas:before{content:\"\uF216\"}.fa-cart-plus:before{content:\"\uF217\"}.fa-cart-arrow-down:before{content:\"\uF218\"}.fa-diamond:before{content:\"\uF219\"}.fa-ship:before{content:\"\uF21A\"}.fa-user-secret:before{content:\"\uF21B\"}.fa-motorcycle:before{content:\"\uF21C\"}.fa-street-view:before{content:\"\uF21D\"}.fa-heartbeat:before{content:\"\uF21E\"}.fa-venus:before{content:\"\uF221\"}.fa-mars:before{content:\"\uF222\"}.fa-mercury:before{content:\"\uF223\"}.fa-intersex:before,.fa-transgender:before{content:\"\uF224\"}.fa-transgender-alt:before{content:\"\uF225\"}.fa-venus-double:before{content:\"\uF226\"}.fa-mars-double:before{content:\"\uF227\"}.fa-venus-mars:before{content:\"\uF228\"}.fa-mars-stroke:before{content:\"\uF229\"}.fa-mars-stroke-v:before{content:\"\uF22A\"}.fa-mars-stroke-h:before{content:\"\uF22B\"}.fa-neuter:before{content:\"\uF22C\"}.fa-genderless:before{content:\"\uF22D\"}.fa-facebook-official:before{content:\"\uF230\"}.fa-pinterest-p:before{content:\"\uF231\"}.fa-whatsapp:before{content:\"\uF232\"}.fa-server:before{content:\"\uF233\"}.fa-user-plus:before{content:\"\uF234\"}.fa-user-times:before{content:\"\uF235\"}.fa-bed:before,.fa-hotel:before{content:\"\uF236\"}.fa-viacoin:before{content:\"\uF237\"}.fa-train:before{content:\"\uF238\"}.fa-subway:before{content:\"\uF239\"}.fa-medium:before{content:\"\uF23A\"}.fa-y-combinator:before,.fa-yc:before{content:\"\uF23B\"}.fa-optin-monster:before{content:\"\uF23C\"}.fa-opencart:before{content:\"\uF23D\"}.fa-expeditedssl:before{content:\"\uF23E\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\uF240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\uF241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\uF242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\uF243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\uF244\"}.fa-mouse-pointer:before{content:\"\uF245\"}.fa-i-cursor:before{content:\"\uF246\"}.fa-object-group:before{content:\"\uF247\"}.fa-object-ungroup:before{content:\"\uF248\"}.fa-sticky-note:before{content:\"\uF249\"}.fa-sticky-note-o:before{content:\"\uF24A\"}.fa-cc-jcb:before{content:\"\uF24B\"}.fa-cc-diners-club:before{content:\"\uF24C\"}.fa-clone:before{content:\"\uF24D\"}.fa-balance-scale:before{content:\"\uF24E\"}.fa-hourglass-o:before{content:\"\uF250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\uF251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\uF252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\uF253\"}.fa-hourglass:before{content:\"\uF254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\uF255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\uF256\"}.fa-hand-scissors-o:before{content:\"\uF257\"}.fa-hand-lizard-o:before{content:\"\uF258\"}.fa-hand-spock-o:before{content:\"\uF259\"}.fa-hand-pointer-o:before{content:\"\uF25A\"}.fa-hand-peace-o:before{content:\"\uF25B\"}.fa-trademark:before{content:\"\uF25C\"}.fa-registered:before{content:\"\uF25D\"}.fa-creative-commons:before{content:\"\uF25E\"}.fa-gg:before{content:\"\uF260\"}.fa-gg-circle:before{content:\"\uF261\"}.fa-tripadvisor:before{content:\"\uF262\"}.fa-odnoklassniki:before{content:\"\uF263\"}.fa-odnoklassniki-square:before{content:\"\uF264\"}.fa-get-pocket:before{content:\"\uF265\"}.fa-wikipedia-w:before{content:\"\uF266\"}.fa-safari:before{content:\"\uF267\"}.fa-chrome:before{content:\"\uF268\"}.fa-firefox:before{content:\"\uF269\"}.fa-opera:before{content:\"\uF26A\"}.fa-internet-explorer:before{content:\"\uF26B\"}.fa-television:before,.fa-tv:before{content:\"\uF26C\"}.fa-contao:before{content:\"\uF26D\"}.fa-500px:before{content:\"\uF26E\"}.fa-amazon:before{content:\"\uF270\"}.fa-calendar-plus-o:before{content:\"\uF271\"}.fa-calendar-minus-o:before{content:\"\uF272\"}.fa-calendar-times-o:before{content:\"\uF273\"}.fa-calendar-check-o:before{content:\"\uF274\"}.fa-industry:before{content:\"\uF275\"}.fa-map-pin:before{content:\"\uF276\"}.fa-map-signs:before{content:\"\uF277\"}.fa-map-o:before{content:\"\uF278\"}.fa-map:before{content:\"\uF279\"}.fa-commenting:before{content:\"\uF27A\"}.fa-commenting-o:before{content:\"\uF27B\"}.fa-houzz:before{content:\"\uF27C\"}.fa-vimeo:before{content:\"\uF27D\"}.fa-black-tie:before{content:\"\uF27E\"}.fa-fonticons:before{content:\"\uF280\"}.fa-reddit-alien:before{content:\"\uF281\"}.fa-edge:before{content:\"\uF282\"}.fa-credit-card-alt:before{content:\"\uF283\"}.fa-codiepie:before{content:\"\uF284\"}.fa-modx:before{content:\"\uF285\"}.fa-fort-awesome:before{content:\"\uF286\"}.fa-usb:before{content:\"\uF287\"}.fa-product-hunt:before{content:\"\uF288\"}.fa-mixcloud:before{content:\"\uF289\"}.fa-scribd:before{content:\"\uF28A\"}.fa-pause-circle:before{content:\"\uF28B\"}.fa-pause-circle-o:before{content:\"\uF28C\"}.fa-stop-circle:before{content:\"\uF28D\"}.fa-stop-circle-o:before{content:\"\uF28E\"}.fa-shopping-bag:before{content:\"\uF290\"}.fa-shopping-basket:before{content:\"\uF291\"}.fa-hashtag:before{content:\"\uF292\"}.fa-bluetooth:before{content:\"\uF293\"}.fa-bluetooth-b:before{content:\"\uF294\"}.fa-percent:before{content:\"\uF295\"}.fa-gitlab:before{content:\"\uF296\"}.fa-wpbeginner:before{content:\"\uF297\"}.fa-wpforms:before{content:\"\uF298\"}.fa-envira:before{content:\"\uF299\"}.fa-universal-access:before{content:\"\uF29A\"}.fa-wheelchair-alt:before{content:\"\uF29B\"}.fa-question-circle-o:before{content:\"\uF29C\"}.fa-blind:before{content:\"\uF29D\"}.fa-audio-description:before{content:\"\uF29E\"}.fa-volume-control-phone:before{content:\"\uF2A0\"}.fa-braille:before{content:\"\uF2A1\"}.fa-assistive-listening-systems:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\uF2A3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\uF2A4\"}.fa-glide:before{content:\"\uF2A5\"}.fa-glide-g:before{content:\"\uF2A6\"}.fa-sign-language:before,.fa-signing:before{content:\"\uF2A7\"}.fa-low-vision:before{content:\"\uF2A8\"}.fa-viadeo:before{content:\"\uF2A9\"}.fa-viadeo-square:before{content:\"\uF2AA\"}.fa-snapchat:before{content:\"\uF2AB\"}.fa-snapchat-ghost:before{content:\"\uF2AC\"}.fa-snapchat-square:before{content:\"\uF2AD\"}.fa-pied-piper:before{content:\"\uF2AE\"}.fa-first-order:before{content:\"\uF2B0\"}.fa-yoast:before{content:\"\uF2B1\"}.fa-themeisle:before{content:\"\uF2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\uF2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\uF2B4\"}.fa-handshake-o:before{content:\"\uF2B5\"}.fa-envelope-open:before{content:\"\uF2B6\"}.fa-envelope-open-o:before{content:\"\uF2B7\"}.fa-linode:before{content:\"\uF2B8\"}.fa-address-book:before{content:\"\uF2B9\"}.fa-address-book-o:before{content:\"\uF2BA\"}.fa-address-card:before,.fa-vcard:before{content:\"\uF2BB\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\uF2BC\"}.fa-user-circle:before{content:\"\uF2BD\"}.fa-user-circle-o:before{content:\"\uF2BE\"}.fa-user-o:before{content:\"\uF2C0\"}.fa-id-badge:before{content:\"\uF2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\uF2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\uF2C3\"}.fa-quora:before{content:\"\uF2C4\"}.fa-free-code-camp:before{content:\"\uF2C5\"}.fa-telegram:before{content:\"\uF2C6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\uF2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\uF2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\uF2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\uF2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\uF2CB\"}.fa-shower:before{content:\"\uF2CC\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\uF2CD\"}.fa-podcast:before{content:\"\uF2CE\"}.fa-window-maximize:before{content:\"\uF2D0\"}.fa-window-minimize:before{content:\"\uF2D1\"}.fa-window-restore:before{content:\"\uF2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\uF2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\uF2D4\"}.fa-bandcamp:before{content:\"\uF2D5\"}.fa-grav:before{content:\"\uF2D6\"}.fa-etsy:before{content:\"\uF2D7\"}.fa-imdb:before{content:\"\uF2D8\"}.fa-ravelry:before{content:\"\uF2D9\"}.fa-eercast:before{content:\"\uF2DA\"}.fa-microchip:before{content:\"\uF2DB\"}.fa-snowflake-o:before{content:\"\uF2DC\"}.fa-superpowers:before{content:\"\uF2DD\"}.fa-wpexplorer:before{content:\"\uF2DE\"}.fa-meetup:before{content:\"\uF2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:hsla(0,0%,100%,.5)}.angular-editor-toolbar{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid hsla(0,0%,100%,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*=\"display:none\"]):not([style*=\"display: none\"]),.select-button{display:inline-block}.select-button.disabled{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: AngularEditorService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, { fonts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], execute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], customClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], defaultFontName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], defaultFontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], uploadUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], upload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showToolbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hiddenButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], myInputFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput', { static: true }]
        }] }); })();

class AeSelectComponent {
    constructor(elRef, r) {
        this.elRef = elRef;
        this.r = r;
        this.options = [];
        this.disabled = false;
        this.optionId = 0;
        this.opened = false;
        this.hidden = 'inline-block';
        // eslint-disable-next-line @angular-eslint/no-output-native, @angular-eslint/no-output-rename
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = () => {
        };
        this.onTouched = () => {
        };
    }
    get label() {
        return this.selectedOption && this.selectedOption.hasOwnProperty('label') ? this.selectedOption.label : 'Select';
    }
    get value() {
        return this.selectedOption.value;
    }
    ngOnInit() {
        this.selectedOption = this.options[0];
        if (isDefined(this.isHidden) && this.isHidden) {
            this.hide();
        }
    }
    hide() {
        this.hidden = 'none';
    }
    optionSelect(option, event) {
        event.stopPropagation();
        this.setValue(option.value);
        this.onChange(this.selectedOption.value);
        this.changeEvent.emit(this.selectedOption.value);
        this.onTouched();
        this.opened = false;
    }
    toggleOpen(event) {
        // event.stopPropagation();
        if (this.disabled) {
            return;
        }
        this.opened = !this.opened;
    }
    onClick($event) {
        if (!this.elRef.nativeElement.contains($event.target)) {
            this.close();
        }
    }
    close() {
        this.opened = false;
    }
    get isOpen() {
        return this.opened;
    }
    writeValue(value) {
        if (!value || typeof value !== 'string') {
            return;
        }
        this.setValue(value);
    }
    setValue(value) {
        let index = 0;
        const selectedEl = this.options.find((el, i) => {
            index = i;
            return el.value === value;
        });
        if (selectedEl) {
            this.selectedOption = selectedEl;
            this.optionId = index;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.labelButton.nativeElement.disabled = isDisabled;
        const div = this.labelButton.nativeElement;
        const action = isDisabled ? 'addClass' : 'removeClass';
        this.r[action](div, 'disabled');
        this.disabled = isDisabled;
    }
    handleKeyDown($event) {
        if (!this.opened) {
            return;
        }
        // console.log($event.key);
        // if (KeyCode[$event.key]) {
        switch ($event.key) {
            case 'ArrowDown':
                this._handleArrowDown($event);
                break;
            case 'ArrowUp':
                this._handleArrowUp($event);
                break;
            case 'Space':
                this._handleSpace($event);
                break;
            case 'Enter':
                this._handleEnter($event);
                break;
            case 'Tab':
                this._handleTab($event);
                break;
            case 'Escape':
                this.close();
                $event.preventDefault();
                break;
            case 'Backspace':
                this._handleBackspace();
                break;
        }
        // } else if ($event.key && $event.key.length === 1) {
        // this._keyPress$.next($event.key.toLocaleLowerCase());
        // }
    }
    _handleArrowDown($event) {
        if (this.optionId < this.options.length - 1) {
            this.optionId++;
        }
    }
    _handleArrowUp($event) {
        if (this.optionId >= 1) {
            this.optionId--;
        }
    }
    _handleSpace($event) {
    }
    _handleEnter($event) {
        this.optionSelect(this.options[this.optionId], $event);
    }
    _handleTab($event) {
    }
    _handleBackspace() {
    }
}
AeSelectComponent.ɵfac = function AeSelectComponent_Factory(t) { return new (t || AeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
AeSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeSelectComponent, selectors: [["ae-select"]], viewQuery: function AeSelectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c4, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelButton = _t.first);
    } }, hostVars: 2, hostBindings: function AeSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AeSelectComponent_click_HostBindingHandler($event) { return ctx.onClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function AeSelectComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.hidden);
    } }, inputs: { options: "options", isHidden: ["hidden", "isHidden"] }, outputs: { changeEvent: "change" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => AeSelectComponent),
                multi: true
            }
        ])], decls: 10, vars: 7, consts: [[1, "ae-font", "ae-picker", 3, "ngClass"], ["tabindex", "0", "type", "button", "role", "button", 1, "ae-picker-label", 3, "tabIndex", "click"], ["labelButton", ""], ["viewBox", "0 0 18 18"], ["points", "7 11 9 13 11 11 7 11", 1, "ae-stroke"], ["points", "7 7 9 5 11 7 7 7", 1, "ae-stroke"], [1, "ae-picker-options"], ["tabindex", "-1", "type", "button", "role", "button", "class", "ae-picker-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "dropdown-item", 4, "ngIf"], ["tabindex", "-1", "type", "button", "role", "button", 1, "ae-picker-item", 3, "ngClass", "click"], [1, "dropdown-item"]], template: function AeSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AeSelectComponent_Template_button_click_1_listener($event) { return ctx.toggleOpen($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "polygon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "polygon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AeSelectComponent_button_8_Template, 2, 5, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AeSelectComponent_span_9_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c6, ctx.isOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", 0 - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.options.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".ae-font.ae-picker{color:#444}.ae-font.ae-picker,.ae-font .ae-picker-label{display:inline-block;float:left;width:100%;position:relative;vertical-align:middle}.ae-font .ae-picker-label{cursor:pointer;height:100%;padding-left:8px;padding-right:10px;line-height:26px;font-size:85%;text-align:left;background-color:#fff;min-width:2rem;border:1px solid #ddd;text-overflow:clip;overflow:hidden;white-space:nowrap}.ae-font .ae-picker-label:before{content:\"\";position:absolute;right:0;top:0;width:20px;height:100%;background:linear-gradient(90deg,#fff,#fff)}.ae-font .ae-picker-label:focus{outline:none}.ae-font .ae-picker-label:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.ae-font .ae-picker-label:hover:before{background:linear-gradient(90deg,#f5f5f5 100%,#fff 0)}.ae-font .ae-picker-label:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.ae-font .ae-picker-label:disabled:before{background:linear-gradient(90deg,#f5f5f5 100%,#fff 0)}.ae-font .ae-picker-label svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ae-font .ae-picker-label svg:not(:root){overflow:hidden}.ae-font .ae-picker-label svg .ae-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-font .ae-picker-options{background-color:#fff;display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3;border:1px solid transparent;box-shadow:0 2px 8px rgba(0,0,0,.2)}.ae-font .ae-picker-options .ae-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px;padding-left:5px;z-index:3;text-align:left;background-color:transparent;min-width:2rem;width:100%;border:0 solid #ddd}.ae-font .ae-picker-options .ae-picker-item.selected{color:#06c;background-color:#fff4c2}.ae-font .ae-picker-options .ae-picker-item.focused,.ae-font .ae-picker-options .ae-picker-item:hover{background-color:#fffa98}.ae-font.ae-expanded{display:block;margin-top:-1px;z-index:1}.ae-font.ae-expanded .ae-picker-label,.ae-font.ae-expanded .ae-picker-label svg{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg .ae-stroke{stroke:#ccc}.ae-font.ae-expanded .ae-picker-options{display:block;margin-top:-1px;top:100%;z-index:3;border-color:#ccc}"], encapsulation: 2 });
AeSelectComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
AeSelectComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hidden',] }],
    hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.display',] }],
    changeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['change',] }],
    labelButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['labelButton', { static: true },] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click', ['$event'],] }],
    handleKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AeSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ae-select',
                template: "<span class=\"ae-font ae-picker\" [ngClass]=\"{'ae-expanded':isOpen}\">\n  <button [tabIndex]=\"-1\" #labelButton tabindex=\"0\" type=\"button\" role=\"button\" class=\"ae-picker-label\" (click)=\"toggleOpen($event);\">{{label}}\n    <svg viewBox=\"0 0 18 18\">\n     <!-- <use x=\"0\" y=\"0\" xlink:href=\"../assets/icons.svg#hom\"></use>-->\n      <polygon class=\"ae-stroke\" points=\"7 11 9 13 11 11 7 11\"></polygon>\n      <polygon class=\"ae-stroke\" points=\"7 7 9 5 11 7 7 7\"></polygon>\n    </svg>\n  </button>\n  <span class=\"ae-picker-options\">\n    <button tabindex=\"-1\" type=\"button\" role=\"button\" class=\"ae-picker-item\"\n          *ngFor=\"let item of options; let i = index\"\n          [ngClass]=\"{'selected': item.value === value, 'focused': i === optionId}\"\n          (click)=\"optionSelect(item, $event)\">\n          {{item.label}}\n    </button>\n    <span class=\"dropdown-item\" *ngIf=\"!options.length\">No items for select</span>\n  </span>\n</span>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => AeSelectComponent),
                        multi: true
                    }
                ],
                styles: [".ae-font.ae-picker{color:#444}.ae-font.ae-picker,.ae-font .ae-picker-label{display:inline-block;float:left;width:100%;position:relative;vertical-align:middle}.ae-font .ae-picker-label{cursor:pointer;height:100%;padding-left:8px;padding-right:10px;line-height:26px;font-size:85%;text-align:left;background-color:#fff;min-width:2rem;border:1px solid #ddd;text-overflow:clip;overflow:hidden;white-space:nowrap}.ae-font .ae-picker-label:before{content:\"\";position:absolute;right:0;top:0;width:20px;height:100%;background:linear-gradient(90deg,#fff,#fff)}.ae-font .ae-picker-label:focus{outline:none}.ae-font .ae-picker-label:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.ae-font .ae-picker-label:hover:before{background:linear-gradient(90deg,#f5f5f5 100%,#fff 0)}.ae-font .ae-picker-label:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.ae-font .ae-picker-label:disabled:before{background:linear-gradient(90deg,#f5f5f5 100%,#fff 0)}.ae-font .ae-picker-label svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ae-font .ae-picker-label svg:not(:root){overflow:hidden}.ae-font .ae-picker-label svg .ae-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-font .ae-picker-options{background-color:#fff;display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3;border:1px solid transparent;box-shadow:0 2px 8px rgba(0,0,0,.2)}.ae-font .ae-picker-options .ae-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px;padding-left:5px;z-index:3;text-align:left;background-color:transparent;min-width:2rem;width:100%;border:0 solid #ddd}.ae-font .ae-picker-options .ae-picker-item.selected{color:#06c;background-color:#fff4c2}.ae-font .ae-picker-options .ae-picker-item.focused,.ae-font .ae-picker-options .ae-picker-item:hover{background-color:#fffa98}.ae-font.ae-expanded{display:block;margin-top:-1px;z-index:1}.ae-font.ae-expanded .ae-picker-label,.ae-font.ae-expanded .ae-picker-label svg{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg .ae-stroke{stroke:#ccc}.ae-font.ae-expanded .ae-picker-options{display:block;margin-top:-1px;top:100%;z-index:3;border-color:#ccc}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.display']
        }], changeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['change']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }], handleKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
        }], isHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['hidden']
        }], labelButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['labelButton', { static: true }]
        }] }); })();

class AngularEditorModule {
}
AngularEditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularEditorModule });
AngularEditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularEditorModule_Factory(t) { return new (t || AngularEditorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularEditorModule, { declarations: function () { return [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]; }, exports: function () { return [AngularEditorComponent, AngularEditorToolbarComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularEditorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ],
                declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent],
                exports: [AngularEditorComponent, AngularEditorToolbarComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of angular-editor
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=kolkov-angular-editor.js.map

/***/ }),

/***/ "./src/app/_LayoutDashboard/dashboard/dashboard-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/dashboard/dashboard-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/_LayoutDashboard/dashboard/dashboard.component.ts");





const routes = [{
        path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        children: [
            {
                path: 'projectinfo/:projectcode',
                loadChildren: () => Promise.all(/*! import() | project-info-project-info-module */[__webpack_require__.e("default~_LayoutDashboard-dashboard-dashboard-module~_LayoutDashboard-more-details-more-details-modul~e4a35ce1"), __webpack_require__.e("default~_LayoutDashboard-dashboard-dashboard-module~_LayoutDashboard-home-home-module~_LayoutDashboa~c6e1f4d7"), __webpack_require__.e("default~_LayoutDashboard-dashboard-dashboard-module~_LayoutDashboard-more-details-more-details-modul~e9176ab2"), __webpack_require__.e("default~_LayoutDashboard-dashboard-dashboard-module~project-info-project-info-module"), __webpack_require__.e("default~_LayoutDashboard-projects-summary-projects-summary-module~project-info-project-info-module"), __webpack_require__.e("project-info-project-info-module")]).then(__webpack_require__.bind(null, /*! ../project-info/project-info.module */ "./src/app/_LayoutDashboard/project-info/project-info.module.ts")).then(m => m.ProjectInfoModule)
            }
        ]
    }];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/_LayoutDashboard/dashboard/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/_LayoutDashboard/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Models_status_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/status-dto */ "./src/app/_Models/status-dto.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Models/completed-projects-dto */ "./src/app/_Models/completed-projects-dto.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var src_app_Models_calender_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_Models/calender-dto */ "./src/app/_Models/calender-dto.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_Services/project-type.service */ "./src/app/_Services/project-type.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_Services/notification.service */ "./src/app/_Services/notification.service.ts");
/* harmony import */ var src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/_Services/link.service */ "./src/app/_Services/link.service.ts");
/* harmony import */ var src_app_Services_calender_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/_Services/calender.service */ "./src/app/_Services/calender.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm2015/kolkov-angular-editor.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
























function DashboardComponent_div_264_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_264_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_264_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_264_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_264_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_264_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_264_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_264_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_264_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_264_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_264_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_264_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_264_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_264_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_264_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_264_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_264_div_1_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_264_div_2_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_264_div_3_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_264_div_4_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_264_div_5_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_264_div_6_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_264_div_7_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_div_264_div_8_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DashboardComponent_div_264_div_9_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_div_264_div_10_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DashboardComponent_div_264_div_11_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_div_264_div_12_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DashboardComponent_div_264_div_13_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashboardComponent_div_264_div_14_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DashboardComponent_div_264_div_15_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Request Type :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "To: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "By: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "On : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.Req_Type == "Project Forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.Req_Type == "Approved Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.Req_Type == "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.Req_Type == "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.Req_Type == "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.Req_Type == "Project Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.Req_Type == "Deadline Extend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.Req_Type == "Task Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.Req_Type == "Not Achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.Req_Type == "Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.Req_Type == "New Project Reject Release");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.Req_Type == "KPI Achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.Req_Type == "Forward Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.Req_Type == "StandardTask Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.Req_Type == "Standardtask Enactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.Req_Type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", item_r13.Exec_BlockName, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.Project_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r13.Req_Coments);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Comments : ", item_r13.Req_Coments, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.SubmittedTo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.SubmittedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 23, item_r13.Rec_Date, "dd-MM-yyyy"));
} }
function DashboardComponent_div_265_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_265_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_265_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_265_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_265_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_265_div_1_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_265_div_2_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_265_div_3_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_265_div_4_Template, 2, 0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "To: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "By: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "On : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r30.DARStatus == "Submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r30.DARStatus == "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r30.DARStatus == "Suspend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r30.DARStatus == "Accepted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" DAR Status : ", item_r30.DARStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" DAR Code - ", item_r30.Emp_Rep_No, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r30.SubmittedTo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r30.SubmittedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 9, item_r30.submissiondate, "dd-MM-yyyy"));
} }
function DashboardComponent_div_277_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r36.Delaydays, " Days Delay");
} }
function DashboardComponent_div_277_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r36.Status, " ");
} }
function DashboardComponent_div_277_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r36.Status, " ");
} }
function DashboardComponent_div_277_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r36.Status, " ");
} }
function DashboardComponent_div_277_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r36.Status, " ");
} }
function DashboardComponent_div_277_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r36.Status, " ");
} }
function DashboardComponent_div_277_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r36.Status, "");
} }
function DashboardComponent_div_277_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r36.Status, "");
} }
function DashboardComponent_div_277_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r36.Status, "");
} }
function DashboardComponent_div_277_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r36.Status, "");
} }
function DashboardComponent_div_277_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r36.Status, "");
} }
function DashboardComponent_div_277_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r36.Status, "");
} }
const _c0 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) { return { "text-danger": a0, "text-Completed": a1, "text-warning": a2, "text-underApp": a3, "text-info": a4, "text-Rejected": a5, "text-underApproval": a6, "text-underApproval": a7, "text-primary": a8, "text-success": a9, "text-CompleteRejected": a10, "text-Todo": a11, "text-info": a12 }; };
function DashboardComponent_div_277_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No Portfolio's has created");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_277_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const item_r36 = ctx.$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.redirectTo_Portfolio(item_r36.Portfolio_ID, item_r36.Portfolio_Name, item_r36.CreatedName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DashboardComponent_div_277_div_13_Template, 3, 1, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashboardComponent_div_277_div_14_Template, 3, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DashboardComponent_div_277_div_15_Template, 3, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DashboardComponent_div_277_div_16_Template, 3, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DashboardComponent_div_277_div_17_Template, 3, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DashboardComponent_div_277_div_18_Template, 3, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DashboardComponent_div_277_div_19_Template, 3, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DashboardComponent_div_277_div_20_Template, 3, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DashboardComponent_div_277_div_21_Template, 3, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DashboardComponent_div_277_div_22_Template, 3, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DashboardComponent_div_277_div_23_Template, 3, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DashboardComponent_div_277_div_24_Template, 3, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r2.messageForEmpty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](16, _c0, [item_r36.Status == "Delay", item_r36.Status == "Completed", item_r36.Status == "InProcess", item_r36.Status == "Under Approval", item_r36.Status == "Completion Under Approval", item_r36.Status == "New Project Rejected", item_r36.Status == "Enactive Under Approval", item_r36.Status == "Forward Under Approval", item_r36.Status == "New Project", item_r36.Status == "Completion Under Approval", item_r36.Status == "Project Complete Rejected", item_r36.Status == "ToDo Completed", item_r36.Status == "New Todo"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r36.Portfolio_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r36.Status == "Delay")("ngIfElse", ctx_r2.Inprocess);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r36.Status == "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r36.Status == "Project Holded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r36.Status == "Completion Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r36.Status == "Forward Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r36.Status == "Project Hold Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r36.Status == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r36.Status == "Project Complete Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r36.Status == "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r36.Status == "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r36.Status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r36.Status == "New Todo");
} }
function DashboardComponent_ng_option_376_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r64.Project_Code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r64.BlockNameProject, "");
} }
function DashboardComponent_div_377_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 4, ctx_r4.Projectstartdate, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 7, ctx_r4.projectEnddate, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.AllocatedHours);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.Status_project);
} }
function DashboardComponent_ng_option_383_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r65.Project_Code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r65.Project_Name, "");
} }
function DashboardComponent_div_384_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.St_date, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.Ed_date, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.Allocated_subtask, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6._status);
} }
function DashboardComponent_ng_container_416_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_container_416_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const item_r66 = ctx.$implicit; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.addstarttime(item_r66); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r66);
} }
function DashboardComponent_ng_container_422_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_container_422_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const item1_r69 = ctx.$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.addendtime(item1_r69); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item1_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item1_r69);
} }
function DashboardComponent_div_426_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", time_r74.count)("value", time_r74.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", time_r74.StartTime, " - ", time_r74.EndTime, " ");
} }
function DashboardComponent_div_426_ng_container_11_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_426_ng_container_11_td_4_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const i_r78 = ctx.index; const sick_r77 = ctx.$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r79.TimeClick(i_r78 + 1, sick_r77.SlotTime); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sick_r77 = ctx.$implicit;
    const i_r78 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", i_r78 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "div_", i_r78 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sick_r77.SlotTime);
} }
function DashboardComponent_div_426_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_426_ng_container_11_td_4_Template, 5, 3, "td", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sin_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sin_r75.SlotsJson);
} }
function DashboardComponent_div_426_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DashboardComponent_div_426_Template_select_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.getavltime($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_div_426_option_10_Template, 2, 4, "option", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DashboardComponent_div_426_ng_container_11_Template, 5, 1, "ng-container", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r9._selectedId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r9._SecondSelectedId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r9._total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.doubleclickdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.Avaliabletime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.timeslotsavl);
} }
function DashboardComponent_ng_container_427_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const zero_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", zero_r83.Date, "-------", zero_r83.StartTime, "-------", zero_r83.EndTime, "");
} }
function DashboardComponent_ng_container_443_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DashboardComponent_ng_container_443_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.selectedDay($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r84.checked == true ? "repeat-day active" : "repeat-day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r84.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r84.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r84.Day, " ");
} }
function DashboardComponent_div_444_div_404_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r90, " ");
} }
function DashboardComponent_div_444_div_404_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Repeat on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_444_div_404_div_5_Template, 2, 1, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r87.monthArr);
} }
function DashboardComponent_div_444_div_405_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r92);
} }
function DashboardComponent_div_444_div_405_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_444_div_405_ng_container_4_Template, 3, 1, "ng-container", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r88.weeklyarr);
} }
function DashboardComponent_div_444_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "January 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "T");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "W");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "T");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "29");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "31");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "11");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "12");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "13");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "14");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "16");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "17");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "18");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "19");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "21");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "22");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "23");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "24");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "26");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "27");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "28");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "29");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "31");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Clear date-range");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h5", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "January 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "table", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "T");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "W");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "T");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "tr", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "29");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "31");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "tr", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "td", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "11");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "tr", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "12");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "13");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "14");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "16");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "17");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "18");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "tr", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "19");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "21");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "22");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "23");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "24");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "tr", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "26");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "27");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "28");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "29");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "31");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "a", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Clear date-range");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "h5", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "January 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "table", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "T");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "W");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "T");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "th", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "tr", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "td", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "29");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "td", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "td", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "31");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "tr", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "11");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "tr", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "12");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "13");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "14");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "16");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "17");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "18");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "tr", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "19");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "21");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "22");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "23");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "24");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "tr", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "26");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "27");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "28");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "29");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "td", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "31");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "td", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "span", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "a", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "Clear date-range");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](404, DashboardComponent_div_444_div_404_Template, 6, 1, "div", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](405, DashboardComponent_div_444_div_405_Template, 5, 1, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](403);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r12.SubmissionName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12._Exec_BlockName == "Standard Tasks" && (ctx_r12.SubmissionName == "Quarterly" || ctx_r12.SubmissionName == "Half Yearly" || ctx_r12.SubmissionName == "Annually"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12._Exec_BlockName == "Standard Tasks" && ctx_r12.SubmissionName == "Monthly");
} }
// import { ConsoleService } from '@ng-select/ng-select/lib/console.service';
// import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
// import { forEach } from '@angular-devkit/schematics';
class DashboardComponent {
    constructor(service, 
    //private loadingBar: LoadingBarService,
    router, datepipe, notifyService, _LinkService, CalenderService) {
        this.service = service;
        this.router = router;
        this.datepipe = datepipe;
        this.notifyService = notifyService;
        this._LinkService = _LinkService;
        this.CalenderService = CalenderService;
        this.posts = [];
        this._ActualProjectList = [];
        this._CalendarProjectsList = {};
        this.disablePreviousDate = new Date();
        this.Alltimes = [];
        this.selectedadayandtime = [];
        this.StartTimearr = [];
        this.EndTimearr = [];
        this.Projectstartdate = "";
        this.St_date = "";
        this._Exec_BlockName = "";
        this.day = false;
        this.dayArr = [
            {
                "Day": "S",
                "value": "0",
                "checked": false
            },
            {
                "Day": "M",
                "value": "1",
                "checked": false
            },
            {
                "Day": "T",
                "value": "2",
                "checked": false
            },
            {
                "Day": "W",
                "value": "3",
                "checked": false
            },
            {
                "Day": "Th",
                "value": "4",
                "checked": false
            },
            {
                "Day": "Fr",
                "value": "5",
                "checked": false
            },
            {
                "Day": "Sa",
                "value": "6",
                "checked": false
            }
        ];
        //For dates
        this.daysSelected = [];
        this.selectdaytime = [];
        this.daysSelectedII = [];
        this.singleselectarry = [];
        this.Doubleselectedday = [];
        this.Avaliabletime = [];
        this.Timechangearry = [];
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD").toString();
        this.maxDate = "";
        // minDate = "2022-11-01";
        // maxDate = "2022-11-30";
        this.selecteddays = [];
        this.timeslotsavl = [];
        this.Checkdatetimejson = [];
        this.preventSingleClick = false;
        this.Project_Mode = "My";
        this.DelayCount = sessionStorage.getItem('DelayCount');
        this.CompletedCount = sessionStorage.getItem('CompletedCount');
        this.TotalExpiryInMonth = sessionStorage.getItem('TotalExpiryInMonth');
        this.TotalExpiryPortfolio = 0;
        this.EmployeeVacationInDays = sessionStorage.getItem('EmployeeVacationInDays');
        this.TotalDARSubmitted = sessionStorage.getItem('TotalDARSubmitted');
        this.TodaysDARAchievement = sessionStorage.getItem('TodaysDARAchievement');
        this.TotalDARRejected = sessionStorage.getItem('TotalDARRejected');
        this.YesterdaysDAR_Status = sessionStorage.getItem('YesterdaysDAR_Status');
        this.RejectedCount = sessionStorage.getItem('RejectedCount');
        this.AssignedProjects = sessionStorage.getItem('AssignedProjects');
        this.ProjectsNotStarted = sessionStorage.getItem('ProjectsNotStarted');
        this.ProjectsNotWorking = sessionStorage.getItem('ProjectsNotWorking');
        this.NotificationCount = 0;
        this._raciDetails = true;
        this._MemosNotFound = "";
        this.dropdownSettings_Memo = {};
        this.page_Name = "ViewProjects";
        this._selectedId = 0;
        this._SecondSelectedId = 0;
        this._total = 14;
        this._firstClick = 0;
        this._EmployeeListForDropdown = [];
        this.dropdownSettings_Emp = {};
        this.ngEmployeeDropdown2 = [];
        this._SelectedEmployees = [];
        this.config = {
            editable: true,
            spellcheck: true,
            height: '15rem',
            minHeight: '5rem',
            placeholder: 'Enter text here...',
            translate: 'no',
            defaultParagraphSeparator: 'p',
            defaultFontName: 'Arial',
            toolbarHiddenButtons: [
                [
                    'bold',
                    'italic',
                    'underline',
                    'strikeThrough',
                    'subscript',
                    'superscript',
                    'indent',
                    'outdent',
                    'insertUnorderedList',
                    'insertOrderedList',
                    'heading',
                    'fontName'
                ],
                [
                    'fontSize',
                    'textColor',
                    'backgroundColor',
                    'customClasses',
                    'link',
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
        this.isSelected = (event) => {
            const date = event.getFullYear() +
                "-" +
                ("00" + (event.getMonth() + 1)).slice(-2) +
                "-" +
                ("00" + event.getDate()).slice(-2);
            //return this.daysSelected.find(x => x == Date) ? "selected" : null;
            return this.daysSelectedII.find(x => x.Date == date && x.IsActive == false) ? "selected" :
                this.daysSelectedII.find(y => y.Date == date && y.IsActive == true) ? "selectedinvalid" : null;
        };
        this.monthdates = [];
        this._objStatusDTO = new src_app_Models_status_dto__WEBPACK_IMPORTED_MODULE_1__["StatusDTO"];
        this._ObjCompletedProj = new src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_3__["CompletedProjectsDTO"]();
        this._calenderDto = new src_app_Models_calender_dto__WEBPACK_IMPORTED_MODULE_6__["CalenderDTO"];
        this.BlockNameProject = [];
        this.BlockNameProject1 = [];
        this.Timeslab = [];
        this.Selecteddaate = this.datepipe.transform(new Date(), 'YYYY/MM/DD');
        // //Get Dates as per day between date range
        // //Add days in an array
        // this.selecteddays.push(3);
        // this.selecteddays.push(2);
        // this.minDate = "2022-11-01";
        // this.maxDate = "2022-11-30";
        // var start = moment(this.minDate);
        // var end = moment(this.maxDate);
        // var result = [];
        // for (let index = 0; index < this.selecteddays.length; index++) {
        //   var day = this.selecteddays[index];
        //   start = start.subtract(7, "days");
        //   var current = start.clone();
        //   while (current.day(7 + day).isSameOrBefore(end)) {
        //     console.log(current);
        //     result.push(current.clone());
        //   }
        // }
        // const format2 = "YYYY-MM-DD"
        // this.daysSelected = result.map(m => moment(m).format(format2));
    }
    ngOnInit() {
        //----Adding One Day---for Date Concept----//
        // var date = new Date();
        // date.setDate(date.getDate() + 1);
        this.ScheduleType = "Task";
        this.GetProjectAndsubtashDrpforCalender();
        this.GetTimeslabfordate();
        this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
        this.typetext = "This Project consists of Core/Secondary Projects";
        this.Current_user_ID = localStorage.getItem('EmpNo');
        this.CurrentUser_fullname = localStorage.getItem("UserfullName");
        // this.notifyService.showInfo(this.CurrentUser_fullname + ' ' + ' ', 'Login By :');
        // this.notifyService.showSuccess("Successfully", "Logged In");
        this._subtaskDiv = true;
        this.projectactivity_Div = false;
        this.DARactivity_Div = true;
        this.CurrentUser_fullname = localStorage.getItem('UserfullName');
        this.GetDashboardSummary();
        this.service.GetActivities(this.Current_user_ID).subscribe((data) => {
            this._NotificationActivityList = data;
            this._RequestActivity = JSON.parse(this._NotificationActivityList[0]['RequestActivity_Json']);
            this._DarActivityList = JSON.parse(this._NotificationActivityList[0]['DarActivity_Json']);
        });
        this._objStatusDTO.Emp_No = this.Current_user_ID;
        this._objStatusDTO.PageNumber = 1;
        this.service.GetPortfolioStatus(this._objStatusDTO).subscribe((data) => {
            // console.log("Porfolio Data Dashbaord--->", data);
            this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
            //JSON.parse(data[0]['PortfolioList_Json']);
            // data as StatusDTO[];
            // var counts = {};
            // this._ListProjStat.forEach(function (x) { counts[x.Status] = (counts[x.Status] || 0) + 1; });
            this.TotalExpiryPortfolio = data[0]['DelayCount'];
            //console.log("------>",this.TotalExpiryPortfolio)
            if (this._ListProjStat.length == 0) {
                this.messageForEmpty = false;
            }
            else {
                this.messageForEmpty = true;
            }
        });
        //Dashboard_Summary
        this.userProjects();
        // this.GetCalendarProjects();
        // this.LoadingBar.stop();
    }
    // Scheduling Work
    // Start Here
    // if (this.ScheduleType == "Task") {
    //   this.Title_Name;
    //   this.MasterCode;
    //   this.Subtask;
    // }
    // else if (this.ScheduleType == "Event") {
    //   this.Title_Name;
    //   this.MasterCode;
    //   this.Link_Type;
    //   this.User_Name;
    //   this.Location_Type;
    //   this.Latitude_Type;
    //   this.Longtitude_Type;
    //   this.Description_Type;
    // }
    // console.log(this.daysSelectedII, "finaljson")
    // // this.daysSelectedII;
    // // this.daysSelectedII.forEach(element => {
    // // this.EventNumber=new Date().getUTCMilliseconds();
    OnSubmitSchedule() {
        var now = new Date();
        let timestamp = "";
        timestamp = now.getFullYear().toString() + now.getMonth().toString() + now.getDate().toString()
            + now.getHours().toString() + now.getMinutes().toString() + now.getSeconds().toString(); // 2011
        this.EventNumber = timestamp;
        this.daysSelectedII.forEach(element => {
            var columnName = "Emp_No";
            element[columnName] = this.Current_user_ID;
            var columnNames = "ScheduleType";
            element[columnNames] = this.ScheduleType == "Task" ? 1 : 2;
            var columnName = "Emp_No";
            element[columnName] = this.Current_user_ID;
            var columnName = "Title_Name";
            element[columnName] = this.Title_Name;
            var columnName = "MasterCode";
            element[columnName] = this.MasterCode;
            // var columnName = "Link_Type";
            // element[columnName] = this.Link_Type == undefined ? "" : this.Link_Type;
            var columnName = "User_Name";
            element[columnName] = this._SelectedEmpIds_String == undefined ? "" : this._SelectedEmpIds_String;
            var columnName = "Location_Type";
            element[columnName] = this.Location_Type == undefined ? "" : this.Location_Type;
            var columnName = "Latitude_Type";
            element[columnName] = this.Latitude_Type == undefined ? "" : this.Latitude_Type;
            var columnName = "Longtitude_Type";
            element[columnName] = this.Longtitude_Type == undefined ? "" : this.Longtitude_Type;
            var columnName = "Description";
            element[columnName] = this.Description_Type == undefined ? "" : this.Description_Type;
            var columnName = "Subtask";
            element[columnName] = this.Subtask == undefined ? "" : this.Subtask;
            var columnName = "EventNumber";
            element[columnName] = this.ScheduleType == "Task" ? 0 : this.EventNumber;
        });
        console.log(this._SelectedEmpIds_String);
        console.log(JSON.stringify(this.daysSelectedII));
        this._calenderDto.ScheduleJson = JSON.stringify(this.daysSelectedII);
        this.CalenderService.NewInsertCalender(this._calenderDto).subscribe(data => {
            console.log(data, "m");
            this._Message = data['message'];
            this.notifyService.showSuccess(this._Message, "Success");
        });
    }
    Task_type(value) {
        if (value == 1) {
            this.ScheduleType = "Task";
            document.getElementById("subtaskid").style.display = "block";
            // document.getElementById("Link_Name").style.display = "none";
            document.getElementById("Guest_Name").style.display = "none";
            document.getElementById("Location_Name").style.display = "none";
            document.getElementById("Descrip_Name").style.display = "none";
        }
        else {
            this.ScheduleType = "Event";
            document.getElementById("subtaskid").style.display = "none";
            // document.getElementById("Link_Name").style.display = "block";
            document.getElementById("Guest_Name").style.display = "block";
            document.getElementById("Location_Name").style.display = "block";
            document.getElementById("Descrip_Name").style.display = "block";
        }
    }
    GetSubtasklistfromProject(MasterCode) {
        this.BlockNameProject.forEach(element => {
            if (element.Project_Code == MasterCode) {
                this.Projectstartdate = element.StatDate;
                this.projectEnddate = element.Enddate;
                this.Status_project = element.Status;
                this.AllocatedHours = element.Allocated;
                var number = this.calculateDiff(this.projectEnddate);
                if (number >= 90) {
                    const format2 = "YYYY-MM-DD";
                    this.maxDate = moment__WEBPACK_IMPORTED_MODULE_2__(moment__WEBPACK_IMPORTED_MODULE_2__().add(90, 'days')).format(format2).toString();
                }
                else {
                    this.maxDate = this.projectEnddate;
                }
            }
        });
        if (MasterCode != undefined) {
            this._calenderDto.Project_Code = MasterCode;
            this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe((data) => {
                console.log(data);
                this.BlockNameProject1 = JSON.parse(data['Projectlist']);
            });
            this.BlockNameProject.forEach(element => {
                if (element.Project_Code == MasterCode) {
                    this._Exec_BlockName = element.Exec_BlockName;
                    this.SubmissionName = element.Submission;
                }
            });
            if (this._Exec_BlockName == "Standard Tasks" || this._Exec_BlockName == "To do List") {
                document.getElementById("subtaskid").style.display = "none";
            }
            else {
                document.getElementById("subtaskid").style.display = "block";
            }
        }
    }
    getChangeSubtaskDetais(Project_Code) {
        this.BlockNameProject1.forEach(element => {
            if (element.Project_Code == Project_Code) {
                this.St_date = element.StatDate;
                this.Ed_date = element.Enddate;
                this._status = element.Status;
                this.Allocated_subtask = element.Allocated;
            }
        });
    }
    selectedDay(days) {
        //Checked the day
        let objIndex = this.dayArr.findIndex((obj => obj.value == days.target.value));
        this.dayArr[objIndex].checked = days.target.checked;
        //Get dates by selected day
        var start = moment__WEBPACK_IMPORTED_MODULE_2__(this.minDate);
        var end = moment__WEBPACK_IMPORTED_MODULE_2__(this.maxDate);
        var result = [];
        for (let index = 0; index < this.dayArr.length; index++) {
            if (this.dayArr[index].checked) {
                const day = parseInt(this.dayArr[index].value);
                start = start.subtract(7, "days");
                var current = start.clone();
                while (current.day(7 + day).isSameOrBefore(end)) {
                    result.push(current.clone());
                }
            }
        }
        const format2 = "YYYY-MM-DD";
        //result = result.map(m => moment(m).format(format2));
        // make a Set to hold values from namesToDeleteArr
        // use filter() method
        // to filter only those elements
        // that need not to be deleted from the array
        this.daysSelected = result.map(m => moment__WEBPACK_IMPORTED_MODULE_2__(m).format(format2));
        const namesToDeleteSet = new Set(this.daysSelected);
        this.singleselectarry = this.singleselectarry.filter((name) => {
            // return those elements not in the namesToDeleteSet
            return !namesToDeleteSet.has(name);
        });
        this.singleselectarry.forEach(element => {
            this.daysSelected.push(moment__WEBPACK_IMPORTED_MODULE_2__(element).format(format2));
        });
        // this.daysSelected.push({ format2 });
        this.daysSelectedII = [];
        this.daysSelected.forEach(element => {
            var jsonData = {};
            var columnName = "Date";
            jsonData[columnName] = element;
            var columnNames = "StartTime";
            jsonData[columnNames] = this.Startts;
            var columnNamee = "EndTime";
            jsonData[columnNamee] = this.Endtms;
            this.daysSelectedII.push(jsonData);
        });
        this.calendar.updateTodaysDate();
        this.Checkdatetimetable(this.daysSelectedII);
    }
    select(event) {
        this.preventSingleClick = false;
        const delay = 200;
        const date = event.getFullYear() + "-" + ("00" + (event.getMonth() + 1)).slice(-2) + "-" + ("00" + event.getDate()).slice(-2);
        this.doubleclickdate = date;
        this.timer = setTimeout(() => {
            if (!this.preventSingleClick) {
                const index = this.daysSelected.findIndex(x => x == date);
                if (index < 0) {
                    this.daysSelected.push(date);
                    this.singleselectarry.push(date);
                }
                else {
                    this.daysSelected.splice(index, 1);
                    this.singleselectarry.splice(index, 1);
                }
                this.calendar.updateTodaysDate();
                this.daysSelectedII = [];
                this.daysSelected.forEach(element => {
                    const found = this.Timechangearry.some(el => el.Date === element);
                    if (found) {
                        this.Timechangearry.forEach(element2 => {
                            if (element2.Date == element) {
                                var jsonData = {};
                                var columnName = "Date";
                                jsonData[columnName] = element2.Date;
                                var columnNames = "StartTime";
                                jsonData[columnNames] = element2.StartTime;
                                var columnNamee = "EndTime";
                                jsonData[columnNamee] = element2.EndTime;
                                this.daysSelectedII.push(jsonData);
                            }
                        });
                    }
                    else {
                        var jsonData = {};
                        var columnName = "Date";
                        jsonData[columnName] = element;
                        var columnNames = "StartTime";
                        jsonData[columnNames] = this.Startts;
                        var columnNamee = "EndTime";
                        jsonData[columnNamee] = this.Endtms;
                        this.daysSelectedII.push(jsonData);
                    }
                });
                this.Checkdatetimetable(this.daysSelectedII);
                this.calendar.updateTodaysDate();
            }
        }, delay);
    }
    Checkdatetimetable(_array) {
        this._calenderDto.json = JSON.stringify(_array);
        this._calenderDto.EmpNo = this.Current_user_ID;
        this.CalenderService.NewGetcheckdateandtime(this._calenderDto).subscribe((data) => {
            this.daysSelectedII = JSON.parse(data['Checkdatetimejson']);
            this.calendar.updateTodaysDate();
            console.log("First value Array" + JSON.stringify(this.daysSelectedII));
        });
    }
    Doubleclick(event) {
        this.preventSingleClick = true;
        clearTimeout(this.timer);
        this._calenderDto.Scheduled_date = this.doubleclickdate;
        this.CalenderService.NewGetScheduledtime(this._calenderDto).subscribe((data) => {
            this.Avaliabletime = JSON.parse(data["AvailableSlotsJson"]);
            // this._total = this.Avaliabletime[0].SlotsJson.length;
            this.timeslotsavl = [];
        });
        // const date=event.getFullYear() + "-" + ("00" + (event.getMonth() + 1)).slice(-2) + "-" + ("00" + event.getDate()).slice(-2);
        console.log(event);
        this.calendar.updateTodaysDate();
    }
    getavltime(e) {
        this.timeslotsavl = [];
        this.timeslotsavl.push(this.Avaliabletime.find(i => i.count === parseInt(e.target.value)));
        this._selectedId = 0;
        this._SecondSelectedId = 0;
        this._total = this.timeslotsavl.length;
    }
    GetProjectAndsubtashDrpforCalender() {
        this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe((data) => {
            // console.log(data)
            this.BlockNameProject = JSON.parse(data['Projectlist']);
            this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);
            // this.BlockNameProject = data as [];
            this.dropdownSettings_Emp = {
                singleSelection: false,
                idField: 'Emp_No',
                textField: 'TM_DisplayName',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 5,
                allowSearchFilter: true,
                closeDropDownOnSelection: true
            };
        });
    }
    EmployeeOnSelect(obj) {
        // this.selectedEmpNo = obj['Emp_No'];
        this.User_Name = obj;
    }
    GetTimeslabfordate() {
        this._calenderDto.minutes = 15;
        this._calenderDto.StartTime = "05:00";
        this._calenderDto.EndTime = "22:00";
        this.CalenderService.GetTimeslabcalender(this._calenderDto).subscribe((data) => {
            this._arrayObj = data;
            this._arrayObj.forEach(element => {
                this.EndTimearr.push(element.TSStart);
                this.StartTimearr.push(element.TSStart);
                this.Alltimes.push(element.TSStart);
            });
            console.log(this.EndTimearr[0]);
            console.log("Array" + this.EndTimearr);
        });
    }
    addstarttime(TSStart) {
        this.Alltimes = [];
        this.StartTimearr.forEach(element => {
            this.Alltimes.push(element);
        });
        this.Startts = TSStart;
        let _index = this.StartTimearr.indexOf(TSStart);
        this.EndTimearr = this.Alltimes.splice(_index + 1);
        this.Startts = TSStart;
        this.Endtms = this.EndTimearr[0];
    }
    addendtime(TSEnd) {
        this.Endtms = TSEnd;
        if (this.Startts > this.Endtms) {
            this.Endtms = this.Startts;
        }
    }
    TimeClick(id, stime) {
        if (this._selectedId == 0) {
            jquery__WEBPACK_IMPORTED_MODULE_7__('.wp-100 .active').removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__('#div_' + id).children('.time-slt-card').addClass('active');
            this._selectedId = id;
            this.slottime = stime;
        }
        else if (this._SecondSelectedId == 0) {
            this._SecondSelectedId = id;
            for (var i = 1; i <= this._SecondSelectedId; i++) {
                if (i > this._selectedId) {
                    jquery__WEBPACK_IMPORTED_MODULE_7__('#div_' + i).children('.time-slt-card').addClass('active');
                }
            }
            this.daysSelectedII.forEach(element => {
                if (element.Date == this.doubleclickdate) {
                    element.StartTime = this.slottime;
                    element.EndTime = stime;
                    element.IsActive = false;
                }
            });
            // console.log("Updated Array"+JSON.stringify(this.daysSelectedII))
            const found = this.Timechangearry.some(el => el.Date === this.doubleclickdate);
            if (!found) {
                var jsonData = {};
                var columnName = "Date";
                jsonData[columnName] = this.doubleclickdate;
                var columnNames = "StartTime";
                jsonData[columnNames] = this.slottime;
                var columnNamee = "EndTime";
                jsonData[columnNamee] = stime;
                this.Timechangearry.push(jsonData);
            }
            else {
                this.Timechangearry.forEach(element => {
                    if (element.Date == this.doubleclickdate) {
                        element.StartTime = this.slottime;
                        element.EndTime = stime;
                    }
                });
            }
            console.log("Updated Array" + JSON.stringify(this.Timechangearry));
            this.calendar.updateTodaysDate();
            this._selectedId = 0;
            this._SecondSelectedId = 0;
        }
        else {
            this._selectedId = id;
            this._SecondSelectedId = 0;
            this._firstClick = 0;
            jquery__WEBPACK_IMPORTED_MODULE_7__('.wp-100 .active').removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__('.wp-100 .time').removeClass('time');
            jquery__WEBPACK_IMPORTED_MODULE_7__('#div_' + id).children('.time-slt-card').addClass('active');
        }
        this.loadAPI = new Promise((resolve) => {
            this.loadScript();
            resolve(true);
        });
        // var _selectedId = this._selectedId;
        // var _SecondSelectedId = this._SecondSelectedId;
        // var _total = 14;
        // if (this._firstClick == 0) {
        //   $('table tr td').on("mouseenter", function () {
        //     if (_selectedId != 0 && _SecondSelectedId == 0) {
        //       for (var i = 1; i <= _total; i++) {
        //         if (i > _selectedId) {
        //           $('#div_' + i).children('.time-slt-card').addClass('time');
        //         }
        //         if ((parseInt(this.id) == i) && (i > _selectedId)) {
        //           $('#div_' + i).children('.time-slt-card').addClass('time');
        //           return false;
        //         }
        //       }
        //     }
        //   }).on("mouseleave", function () {
        //     if (_selectedId != 0) {
        //       for (var i = 1; i <= _total; i++) {
        //         if (i > _selectedId) {
        //           $('#div_' + i).children('.time-slt-card').removeClass('time');
        //         }
        //       }
        //     }
        //   });
        // }
        // this._firstClick = 1;
    }
    loadScript() {
        var isFound = false;
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; ++i) {
            if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
                isFound = true;
            }
        }
        if (!isFound) {
            var dynamicScripts = [
                "../../../creativeplanner/assets/js/timehover.js",
            ];
            // var dynamicScripts = [
            //   environment.assetsurl + "../../../assets/js/dashboard/jquery.knob.min.js",
            //   environment.assetsurl + "assets/js/dashboard/jquery.peity.min.js",
            //   environment.assetsurl + "assets/js/dashboard/main.js"
            // ];
            for (var i = 0; i < dynamicScripts.length; i++) {
                let node = document.createElement('script');
                node.src = dynamicScripts[i];
                node.type = 'text/javascript';
                node.async = false;
                node.charset = 'utf-8';
                document.getElementsByTagName('head')[0].appendChild(node);
            }
        }
    }
    SelectDropDown(val) {
        if (val.value == 2) {
            document.getElementById("weekly_121").style.display = "block";
        }
        else if (val.value == 1) {
            document.getElementById("weekly_121").style.display = "none";
            var start = moment__WEBPACK_IMPORTED_MODULE_2__(this.minDate);
            var end = moment__WEBPACK_IMPORTED_MODULE_2__(this.maxDate);
            const format2 = "YYYY-MM-DD";
            const d1 = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(start).format(format2));
            const d2 = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(end).format(format2));
            const date = new Date(d1.getTime());
            this.daysSelectedII = [];
            const dates = [];
            while (date <= d2) {
                dates.push(moment__WEBPACK_IMPORTED_MODULE_2__(date).format(format2));
                var jsonData = {};
                var columnName = "Date";
                jsonData[columnName] = (moment__WEBPACK_IMPORTED_MODULE_2__(date).format(format2));
                var columnNames = "StartTime";
                jsonData[columnNames] = this.Startts;
                var columnNamee = "EndTime";
                jsonData[columnNamee] = this.Endtms;
                this.daysSelectedII.push(jsonData);
                date.setDate(date.getDate() + 1);
            }
            // this.daysSelected = dates;
            // const dd=[];
            // dd.push("2022-11-17");
            // this.daysSelected=dd;
            this.Checkdatetimetable(this.daysSelectedII);
            this.calendar.updateTodaysDate();
            // this.getDatesInRange(, new Date(moment(end).format(format2)))
        }
        else if (val.value == 3) {
            const format2 = "YYYY-MM-DD";
            var start = moment__WEBPACK_IMPORTED_MODULE_2__(this.minDate);
            const d1 = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(start).format(format2));
            var end = moment__WEBPACK_IMPORTED_MODULE_2__(this.maxDate);
            const d2 = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(end).format(format2));
            const date = new Date(d1.getTime());
            if (this.daysSelectedII.length > 0) {
                var date1 = new Date(), y = date1.getFullYear(), m = date1.getMonth();
                var lastDay = new Date(y, m + 1, 0);
                // monthdates
                const enddate = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(lastDay).format(format2));
                this.daysSelectedII.forEach(element => {
                    var exist = moment__WEBPACK_IMPORTED_MODULE_2__(element.Date).isBetween(d1, enddate);
                    if (exist) {
                        const d22 = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(end).format(format2));
                        const d12 = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(element.Date).format(format2));
                        d12.setMonth(d12.getMonth() + 1);
                        while (d12 <= d22) {
                            var jsonData = {};
                            var columnName = "Date";
                            jsonData[columnName] = moment__WEBPACK_IMPORTED_MODULE_2__(d12).format(format2);
                            var columnNames = "StartTime";
                            jsonData[columnNames] = this.Startts;
                            var columnNamee = "EndTime";
                            jsonData[columnNamee] = this.Endtms;
                            this.daysSelectedII.push(jsonData);
                            this.daysSelected.push(moment__WEBPACK_IMPORTED_MODULE_2__(d12).format(format2));
                            d12.setMonth(d12.getMonth() + 1);
                        }
                    }
                });
            }
            else {
                document.getElementById("weekly_121").style.display = "none";
                this.daysSelectedII = [];
                const dates = [];
                while (date <= d2) {
                    dates.push(moment__WEBPACK_IMPORTED_MODULE_2__(date).format(format2));
                    var jsonData = {};
                    var columnName = "Date";
                    jsonData[columnName] = (moment__WEBPACK_IMPORTED_MODULE_2__(date).format(format2));
                    var columnNames = "StartTime";
                    jsonData[columnNames] = this.Startts;
                    var columnNamee = "EndTime";
                    jsonData[columnNamee] = this.Endtms;
                    this.daysSelectedII.push(jsonData);
                    date.setMonth(date.getMonth() + 1);
                }
            }
            this.Checkdatetimetable(this.daysSelectedII);
            this.calendar.updateTodaysDate();
        }
    }
    OnEmpSelect(emp) {
        let arr = [];
        this.EmployeeDropdown = emp['Emp_No'];
        //console.log("Selected Employees---->", JSON.stringify(this.ngEmployeeDropdown));
        this.ngEmployeeDropdown2 = this.ngEmployeeDropdown;
        this.ngEmployeeDropdown2.forEach(element => {
            arr.push({ Emp_No: element.Emp_No });
            this._SelectedEmployees = (arr);
        });
        //Make Comma Separate..
        this._SelectedEmpIds_String = this._SelectedEmployees.map(select => {
            return select.Emp_No;
        }).join(',');
    }
    OnEmpDeselect() {
        let arr = [];
        this.ngEmployeeDropdown2 = this.ngEmployeeDropdown;
        this.ngEmployeeDropdown2.forEach(element => {
            arr.push({ Emp_No: element.Emp_No });
            this._SelectedEmployees = arr;
        });
        this._SelectedEmpIds_String = this._SelectedEmployees.map(select => {
            return select.Emp_No;
        }).join(',');
    }
    // End Here
    // Scheduling Work
    handleEventClick(arg) {
        this.ProjectCode = arg.event._def.extendedProps.Project_Code;
        this.router.navigate(["../backend/dashboard/projectinfo", this.ProjectCode]);
        document.getElementById("mysideInfobar").style.width = "70%";
        document.getElementById("rightbar-overlay").style.display = "block";
        document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    }
    closeInfo() {
        document.getElementById("mysideInfobar").style.width = "0";
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
        document.getElementById("mysideInfobar_schd").classList.remove("open_sidebar");
    }
    addEvent(type, event) {
    }
    GetCalendarProjects() {
        let Empno = this.Current_user_ID;
        this.calendarOptions = {
            //plugins: [ dayGridPlugin, interactionPlugin ],
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
            },
            themeSystem: "solar",
            eventClick: this.handleEventClick.bind(this),
            events: this._CalendarProjectsList,
            dayMaxEvents: 6,
        };
        // this.service._GetCalendarProjects(Empno).subscribe
        //   ((data) => {
        //     this._ActualProjectList = data as CompletedProjectsDTO[];
        //     this._CalendarProjectsList = this._ActualProjectList.sort((a, b) => (a.ProjectType > b.ProjectType) ? 1 : -1);
        //     //Calendar Options
        //   });
        this.userProjects();
    }
    allProjects() {
        this.Project_Mode = "All";
        // this.LoadingBar.start();
        let Empno = this.Current_user_ID;
        this.service._GetCalendarProjects(Empno).subscribe((data) => {
            this._ActualProjectList = data;
            //Sorting...
            this._CalendarProjectsList = this._ActualProjectList.sort((a, b) => (a.ProjectType > b.ProjectType) ? 1 : -1);
            this.calendarOptions = {
                // plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
                },
                eventClick: this.handleEventClick.bind(this),
                events: this._CalendarProjectsList,
                dayMaxEvents: 10,
            };
        });
        //this.LoadingBar.stop();
    }
    userProjects() {
        this.Project_Mode = "My";
        let Empno = this.Current_user_ID;
        this.service._GetCalendarProjects(Empno).subscribe((data) => {
            this._ActualProjectList = data;
            //Sorting...
            this._CalendarProjectsList = this._ActualProjectList.sort((a, b) => (a.ProjectType > b.ProjectType) ? 1 : -1);
            //Filtering
            this._CalendarProjectsList = this._ActualProjectList.filter(user => user.TeamRes == this.CurrentUser_fullname);
            this.calendarOptions = {
                //plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
                },
                themeSystem: 'yeti',
                eventClick: this.handleEventClick.bind(this),
                events: this._CalendarProjectsList,
                dayMaxEvents: 10,
            };
        });
        //this.LoadingBar.stop();
    }
    teamProjects() {
        this.Project_Mode = "My Team";
        let Empno = this.Current_user_ID;
        this.service._GetCalendarProjects(Empno).subscribe((data) => {
            this._ActualProjectList = data;
            //Sorting...
            this._CalendarProjectsList = this._ActualProjectList.sort((a, b) => (a.ProjectType > b.ProjectType) ? 1 : -1);
            //Filtering
            this._CalendarProjectsList = this._ActualProjectList.filter(user => user.ProjectOwner == this.CurrentUser_fullname);
            this.calendarOptions = {
                //plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
                },
                eventClick: this.handleEventClick.bind(this),
                events: this._CalendarProjectsList,
                dayMaxEvents: 10,
            };
        });
    }
    GetDashboardSummary() {
        this.Emp_No = localStorage.getItem('EmpNo');
        this.service._GetDashboardSummaryCount(this.Emp_No)
            .subscribe((data) => {
            this.DelayCount = data[0]['DelayCount'];
            sessionStorage.setItem('DelayCount', this.DelayCount);
            this.CompletedCount = data[0]['CompletedCount'];
            sessionStorage.setItem('CompletedCount', this.CompletedCount);
            this.TotalExpiryInMonth = data[0]['ExpiryOneMonth'];
            sessionStorage.setItem('TotalExpiryInMonth', this.TotalExpiryInMonth);
            this.EmployeeVacationInDays = data[0]['EmployeeVacationInDays'];
            sessionStorage.setItem('EmployeeVacationInDays', this.EmployeeVacationInDays);
            this.TotalDARSubmitted = data[0]['TotalDARSubmitted'];
            sessionStorage.setItem('TotalDARSubmitted', this.TotalDARSubmitted);
            this.TodaysDARAchievement = data[0]['TodaysDARAchievement'];
            sessionStorage.setItem('TodaysDARAchievement', this.TodaysDARAchievement);
            this.TotalDARRejected = data[0]['TotalDARRejected'];
            sessionStorage.setItem('TotalDARRejected', this.TotalDARRejected);
            this.YesterdaysDAR_Status = data[0]['YesterdaysDAR_Status'];
            sessionStorage.setItem('YesterdaysDAR_Status', this.YesterdaysDAR_Status);
            this.RejectedCount = data[0]['RejectedCount'];
            sessionStorage.setItem('RejectedCount', this.RejectedCount);
            this.AssignedProjects = data[0]['AssignedProjects'];
            sessionStorage.setItem('AssignedProjects', this.AssignedProjects);
            this.ProjectsNotStarted = data[0]['ProjectsNotStarted'];
            sessionStorage.setItem('ProjectsNotStarted', this.ProjectsNotStarted);
            this.ProjectsNotWorking = data[0]['ProjectsNotWorking'];
            sessionStorage.setItem('ProjectsNotWorking', this.ProjectsNotWorking);
            this.NotificationCount = data[0]['NotificationCount'];
            //console.log("counts data------>",data)
        });
    }
    OnClickProjAct() {
        this.projectactivity_Div = false;
        this.DARactivity_Div = true;
    }
    OnClickDarAct() {
        this.projectactivity_Div = true;
        this.DARactivity_Div = false;
    }
    //LiveUrl:string="creativeplanner/ViewProjects/";
    UnderApproval_Click() {
        this._ProjectDataList = [];
        let Mode = "UnderApproval";
        var url = document.baseURI + this.page_Name;
        var myurl = `${url}/${Mode}`;
        var myWindow = window.open(myurl);
        myWindow.focus();
    }
    Delay_Click() {
        this._ProjectDataList = [];
        let Mode = "Delay";
        var url = document.baseURI + this.page_Name;
        var myurl = `${url}/${Mode}`;
        console.log(myurl);
        var myWindow = window.open(myurl);
        myWindow.focus();
    }
    Rejected_Click() {
        this._ProjectDataList = [];
        let Mode = "Rejected";
        var url = document.baseURI + this.page_Name;
        var myurl = `${url}/${Mode}`;
        var myWindow = window.open(myurl);
        myWindow.focus();
    }
    ExpiryInOneMonth_Click() {
        this._ProjectDataList = [];
        let Mode = "ExOneMonth";
        var url = document.baseURI + this.page_Name;
        var myurl = `${url}/${Mode}`;
        var myWindow = window.open(myurl);
        myWindow.focus();
    }
    AssignedTask_Click() {
        let Mode = "AssignedTask";
        var url = document.baseURI + this.page_Name;
        var myurl = `${url}/${Mode}`;
        var myWindow = window.open(myurl);
        myWindow.focus();
    }
    Not_Started() {
        this._ProjectDataList = [];
        let Mode = "NotStarted";
        var url = document.baseURI + this.page_Name;
        var myurl = `${url}/${Mode}`;
        var myWindow = window.open(myurl);
        myWindow.focus();
    }
    Not_Working() {
        this._ProjectDataList = [];
        let Mode = "NotWorking";
        var url = document.baseURI + this.page_Name;
        var myurl = `${url}/${Mode}`;
        var myWindow = window.open(myurl);
        myWindow.focus();
    }
    Portfolio_Click() {
        //this.router.navigate(['/Portfolios/']);
        const Url = 'backend/Portfolio';
        var url = document.baseURI + 'Portfolio';
        var myurl = `${url}`;
        var myWindow = window.open(Url);
        myWindow.focus();
    }
    bttn_RACI() {
        this._raciDetails = !this._raciDetails;
    }
    GetmemosInSideInfoBar() {
        this._LinkService._GetOnlyMemoIdsByProjectCode(this.pCode).
            subscribe((data) => {
            let Table_data = data;
            this._DBMemosIDList = data[0]['JsonData'];
            //console.log("----DBMemlist----->",this._DBMemosIDList);
            // if(this._DBMemosIDList==[]){
            //   this._MemosSubjectList = [];
            //   this._MemosNotFound = "No memos linked";
            // }
            // else{
            //   this._MemosSubjectList = JSON.parse(data[0]['JsonData']);
            // }
            if (Table_data.length > 0) {
                this._MemosNotFound = "";
                this._JsonString = data[0]['JsonData'];
                this._LinkService._GetMemosSubject(this._JsonString).
                    subscribe((data) => {
                    this._MemosSubjectList = JSON.parse(data['JsonData']);
                });
            }
            else {
                this._MemosSubjectList = [];
                this._MemosNotFound = "No memos linked";
            }
        });
    }
    openUrl(memo_Url) {
        const Url = memo_Url;
        window.open(Url);
    }
    moreDetails(ProjectCode) {
        let name = 'MoreDetails';
        var url = document.baseURI + name;
        var myurl = `${url}/${ProjectCode}`;
        var myWindow = window.open(myurl, ProjectCode);
        myWindow.focus();
    }
    // Add Dms and Delete Functionality
    GetMemosByEmployeeId() {
        this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
            subscribe((data) => {
            this.Memos_List = JSON.parse(data['JsonData']);
            this._ActualMemoslist = JSON.parse(data['JsonData']);
            this._totalMemos = this._ActualMemoslist.length;
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
    Memo_Select(selecteditems) {
        let arr = [];
        this.Empty_MemoDropdown = selecteditems;
        this.Empty_MemoDropdown.forEach(element => {
            arr.push({ MailId: element.MailId });
            this._SelectedMemos = arr;
        });
    }
    Memo_Deselect() {
        let arr = [];
        this.Empty_MemoDropdown = this.ngDropdwonMemo;
        this.Empty_MemoDropdown.forEach(element => {
            arr.push({ MailId: element.MailId });
            this._SelectedMemos = arr;
        });
    }
    _onRowClick(projectCode, ProjName) {
        this._SelectedIdsfromDb = [];
        this.Selected_Projectcode = projectCode;
        this._displayProjName = ProjName;
        this.GetMemosByEmployeeId();
        this._LinkService._GetOnlyMemoIdsByProjectCode(projectCode).
            subscribe((data) => {
            let Table_data = data;
            if (Table_data.length > 0) {
                this._JsonString = JSON.stringify(data[0]['JsonData']);
                this._dbMemoIdList = JSON.parse(data[0]['JsonData']);
                let arr1 = this._ActualMemoslist;
                let arr2 = this._dbMemoIdList;
                this._SelectedIdsfromDb = underscore__WEBPACK_IMPORTED_MODULE_4__["map"](arr2, (d) => { return d.MailId; });
                this.Memos_List = underscore__WEBPACK_IMPORTED_MODULE_4__["reject"](arr1, (d) => {
                    var findId = underscore__WEBPACK_IMPORTED_MODULE_4__["find"](this._SelectedIdsfromDb, (sId) => { return sId === d.MailId; });
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
    AddDms() {
        this._onRowClick(this.ProjectCode, this.ProjectName);
    }
    _AddLink() {
        let _ProjectCode = this.Selected_Projectcode;
        let appId = 101; //this._ApplicationId;
        if (this._SelectedIdsfromDb > 0 || this._SelectedIdsfromDb != undefined) {
            this.memoId = JSON.stringify(this._SelectedIdsfromDb.concat(this._SelectedMemos));
        }
        else {
            this.memoId = JSON.stringify(this._SelectedMemos);
        }
        let UserId = this.Current_user_ID;
        if (this._SelectedMemos.length > 0) {
            this._LinkService.InsertMemosOn_ProjectCode(_ProjectCode, appId, this.memoId, UserId).
                subscribe((data) => {
                this.GetmemosInSideInfoBar();
                let Returndata = data['Message'];
                this.notifyService.showSuccess("", Returndata);
                this.ngDropdwonMemo = [];
                this._SelectedMemos = [];
            });
        }
        else {
            this.notifyService.showInfo("Request Cancelled", "Please select memo(s) to link");
        }
    }
    //Delete Memos 96290  CRS2004
    deleteMemos(memoId, pcode) {
        this._MemosSubjectList = [];
        let _DeleteSelectedMemo = [];
        _DeleteSelectedMemo.push({ MailId: memoId });
        let arr1 = this._DBMemosIDList;
        let arr2 = _DeleteSelectedMemo;
        let result = arr1.filter(o1 => !arr2.some(o2 => o1.MailId === o2.MailId));
        this._DBMemosIDList = underscore__WEBPACK_IMPORTED_MODULE_4__["map"](arr2, (d) => { return d.MailId; });
        this.memoId = JSON.stringify(result);
        let appId = 101;
        let UserId = this.Current_user_ID;
        this._LinkService.InsertMemosOn_ProjectCode(pcode, appId, this.memoId, UserId).
            subscribe((data) => {
            this.UpdateMemos(pcode);
            let Returndata = data['Message'];
            this.notifyService.showInfo("", Returndata);
        });
    }
    UpdateMemos(pcode) {
        this._LinkService._GetOnlyMemoIdsByProjectCode(pcode).
            subscribe((data) => {
            let Table_data = data;
            if (Table_data.length > 0) {
                this._MemosNotFound = "";
                this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
                this._JsonString = data[0]['JsonData'];
                this._LinkService._GetMemosSubject(this._JsonString).
                    subscribe((data) => {
                    this._MemosSubjectList = JSON.parse(data['JsonData']);
                });
            }
            else {
                this._MemosSubjectList = [];
                this._MemosNotFound = "No memos linked";
            }
        });
    }
    redirectTo_Portfolio(P_id, P_Name, CreatedName) {
        sessionStorage.setItem('portfolioId', P_id);
        sessionStorage.setItem('portfolioname', P_Name);
        sessionStorage.setItem('PortfolioOwner', CreatedName);
        let name = 'portfolioprojects';
        var url = document.baseURI + name;
        var myurl = `${url}/${P_id}`;
        var myWindow = window.open(myurl, P_id);
        myWindow.focus();
    }
    calculateDiff(dateSent) {
        let currentDate = new Date();
        dateSent = new Date(dateSent);
        return Math.floor((Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) / (1000 * 60 * 60 * 24));
    }
    OnSubmitcalender() {
        this.SelectStartdate = this.datepipe.transform(this.SelectStartdate, 'MM/dd/yyyy');
        this.Selectenddate = this.datepipe.transform(this.Selectenddate, 'MM/dd/yyyy');
        this._calenderDto.Emp_No = this.Current_user_ID;
        if (this._Exec_BlockName == 'Standard Tasks') {
            this._calenderDto.Project_Code = this.MasterCode;
            if (this.selectDay == 'S') {
                this._calenderDto.Weekday = "Sunday";
            }
            else if (this.selectDay == 'M') {
                this._calenderDto.Weekday = "Monday";
            }
            else if (this.selectDay == 'T') {
                this._calenderDto.Weekday = "Tuesday";
            }
            else if (this.selectDay == 'W') {
                this._calenderDto.Weekday = "Wednesday";
            }
            else if (this.selectDay == 'Th') {
                this._calenderDto.Weekday = "Thursday";
            }
            else if (this.selectDay == 'F') {
                this._calenderDto.Weekday = "Friday";
            }
            else if (this.selectDay == 'Sa') {
                this._calenderDto.Weekday = "Saturday";
            }
        }
        else {
            this._calenderDto.Project_Code = this.Subtask;
        }
        this._calenderDto.Start_date = this.SelectStartdate;
        this._calenderDto.End_date = this.Selectenddate;
        this._calenderDto.Start_time = this.Startts;
        this._calenderDto.End_time = this.Endtms;
        // this._calenderDto.Status  = true;
        console.log(this._calenderDto.Weekday, "Insert test");
        this.CalenderService.NewInsertCalender(this._calenderDto).subscribe(data => {
            console.log(data, "m");
            this._Message = data['message'];
            this.notifyService.showSuccess(this._Message, "Success");
        });
        this.MasterCode = null;
        this.Subtask = null;
        this.Startts = null;
        this.Endtms = null;
        this.SelectStartdate = null;
        this.Selectenddate = null;
        this.selectDay = null;
    }
    openschd() {
        document.getElementById("mysideInfobar_schd").classList.add("open_sidebar");
        document.getElementById("rightbar-overlay").style.display = "block";
        document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    }
    closeschd() {
        document.getElementById("mysideInfobar_schd").classList.remove("open_sidebar");
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
        this.MasterCode = null;
        this.Subtask = null;
        this.Startts = null;
        this.Endtms = null;
        this.SelectStartdate = null;
        this.Selectenddate = null;
        this.selectDay = null;
        this.St_date = null;
        this.Ed_date = null;
        this._status = null;
        this.Allocated_subtask = null;
        this.Projectstartdate = null;
        this.Projectstartdate = null;
        this.projectEnddate = null;
        this.Status_project = null;
        this.AllocatedHours = null;
        this.daysSelected = [];
        this.selectdaytime = [];
        this.daysSelectedII = [];
        this.singleselectarry = [];
        this.Avaliabletime = [];
        this.Doubleclick(this.event);
        this.calendar.updateTodaysDate();
        this.dayArr.map((element) => {
            return element.checked = false;
            ;
        });
    }
    showcore() {
        this.typetext = "This Project consists of Core/Secondary Projects";
        document.getElementById("core_viw").classList.add("show");
        document.getElementById("stan_viw").classList.remove("show");
        document.getElementById("sec_viw").classList.remove("show");
        document.getElementById("core_tab").classList.add("btn-light-primary");
        document.getElementById("stan_tab").classList.remove("btn-light-primary");
        document.getElementById("sec_tab").classList.remove("btn-light-primary");
    }
    showstan() {
        this.typetext = "This Project consists of Standard/Routine Task";
        document.getElementById("stan_viw").classList.add("show");
        document.getElementById("sec_viw").classList.remove("show");
        document.getElementById("core_viw").classList.remove("show");
        document.getElementById("stan_tab").classList.add("btn-light-primary");
        document.getElementById("core_tab").classList.remove("btn-light-primary");
        document.getElementById("sec_tab").classList.remove("btn-light-primary");
    }
    showsec() {
        this.typetext = "This Project consists of ToDo Task";
        document.getElementById("sec_viw").classList.add("show");
        document.getElementById("core_viw").classList.remove("show");
        document.getElementById("stan_viw").classList.remove("show");
        document.getElementById("sec_tab").classList.add("btn-light-primary");
        document.getElementById("core_tab").classList.remove("btn-light-primary");
        document.getElementById("stan_tab").classList.remove("btn-light-primary");
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_8__["ProjectTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_12__["LinkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_calender_service__WEBPACK_IMPORTED_MODULE_13__["CalenderService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatCalendar"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.calendar = _t.first);
    } }, decls: 448, vars: 57, consts: [["id", "kt_header", 1, "kt-header", "kt-grid", "kt-grid--ver", "kt-header--fixed"], ["id", "kt_header_menu_wrapper", 1, "kt-header-menu-wrapper", "kt-grid__item", "kt-grid__item--fluid"], [1, "pl-4", "pt-4"], [1, "kt-header__topbar"], [1, "kt-header__topbar-item", "dropdown"], [1, "dropdown-menu", "dropdown-menu-fit", "dropdown-menu-right", "dropdown-menu-anim", "dropdown-menu-xl"], [1, "kt-head", "kt-head--skin-light", "kt-head--fit-x"], [1, "kt-head__title"], [1, "btn", "btn-label-primary", "btn-sm", "btn-bold", "btn-font-md"], [1, "tab-content"], ["id", "topbar_notifications_notifications", "role", "tabpanel", 1, "tab-pane", "active", "show"], ["data-scroll", "true", "data-height", "300", "data-mobile-height", "200", 1, "kt-notification", "kt-margin-t-10", "kt-margin-b-10", "kt-scroll"], [1, "kt-notification__item"], [1, "kt-notification__item-icon"], [1, "flaticon2-line-chart", "kt-font-success"], [1, "kt-notification__item-details"], [1, "kt-notification__item-title"], [1, "kt-notification__item-time"], [1, "flaticon2-box-1", "kt-font-brand"], [1, "flaticon2-chart2", "kt-font-danger"], [1, "flaticon2-image-file", "kt-font-warning"], ["id", "kt_content", 1, "kt-content", "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor", "pb-0", "side_view"], [1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi", "kt-portlet--height-fluid", "d-none"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title"], ["href", "#notifymodal", "data-toggle", "modal", 1, "text-dark", "kt-portlet__head-label"], ["data-count", "5", 1, "fas", "fa-bell", "bell-icon", "kt-portlet__head-title", 2, "font-size", "20px"], [1, "col-lg-12", "mb-1"], [1, "d-flex", "justify-content-between"], ["type", "button", "data-toggle", "collapse", "data-target", "#multiCollapse1", "aria-expanded", "false", "aria-controls", "multiCollapse1", 1, "btn", "btn-info", "btn-sm", "mb-2"], [1, "fas", "fa-chevron-up"], [1, "row", "card-spacer"], [1, "col-lg-3", "col-md-6"], ["role", "button", 1, "action-count", 3, "click"], [1, "d-flex", "align-items-center"], [1, "symbol", "me-5"], [1, "symbol-label", "bg-dangr"], [1, "svg-icon", "svg-icon-2x", "svg-icon-success", "navbg"], [1, "fas", "fa-prescription-bottle"], [1, "action-content"], [1, "fs-3", "text-info-cus", "opacity-75", "fw-bold", "mt-1", "mb-0"], [1, "fw-bolder", "text-muted", "pt-3", "fs-5"], [1, "symbol-label", "bg-coral"], [1, "fas", "fa-calendar-day"], [1, "symbol-label", "bg-light-nav"], [1, "far", "fa-stop-circle"], [1, "symbol-label", "bg-info"], [1, "far", "fa-file-alt"], [1, "fas", "fa-calendar-times"], [1, "fs-6"], [1, "fw-bolder", "text-muted", "pt-3", "fs-6"], [1, "fas", "fa-ban"], [1, "symbol-label", "bg-warning"], [1, "fas", "fa-spinner"], [1, "col-lg-3", "col-md-6", 3, "click"], ["role", "button", 1, "action-count"], [1, "fab", "fa-empire"], ["id", "multiCollapse1", 1, "col-lg-12", "mb-2", "collapse", "multi-collapse"], [1, "card", "card-stretch", "shadow-sm", "mb-3", "mb-xxl-8"], [1, "card-body"], [1, "symbol-label", "bg-success-1"], [1, "svg-icon", "svg-icon-2x"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "#ffffff", "viewBox", "0 0 16 16", 1, "bi", "bi-hourglass-split"], ["d", "M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"], [1, "fs-3", "text-info-cus", "opacity-75", "fw-bold", "mt-1"], [1, "fw-bolder", "text-muted", "pt-1", "fs-5"], [1, "d-block"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "#ffffff", "viewBox", "0 0 16 16", 1, "bi", "bi-clock"], ["d", "M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"], ["d", "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "#ffffff", "viewBox", "0 0 16 16", 1, "bi", "bi-stack"], ["d", "m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"], ["d", "m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"], [1, "kt-portlet__head-icon", "d-flex", "justify-content-between"], [1, "kt-portlet__head-title", "mr-3"], [1, "far", "fa-calendar-alt"], [1, "d-flex"], [1, "btn", "btn-sm", "btn-info", "mb-2", 3, "click"], [1, "dropdown"], ["data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "h6", "p-3", "pb-4", "dropdown-toggle"], [1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", 3, "click"], [1, "kt-portlet"], [1, "kt-portlet__body"], [3, "options"], [1, "col-lg-7"], [1, "kt-portlet", "kt-portlet--height-fluid"], [1, "dashboard-subtitle"], ["id", "kt_widget5_tab1_content", "aria-expanded", "true", 1, "tab-pane", "active", 3, "hidden"], [1, "kt-widget5", "height-adjust"], ["class", "kt-widget5__item", 4, "ngFor", "ngForOf"], ["id", "kt_widget5_tab2_content", 1, "tab-pane", "active", 3, "hidden"], [1, "col-lg-5"], ["class", "kt-widget5__item no-border", 4, "ngFor", "ngForOf"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], ["id", "notifymodal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "notifyModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "notifylabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "list-group"], [1, "list-group-item"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary"], ["id", "LinkSideBar", 1, "sideInfobar", "animate-right"], [1, "kt-portlet__head", "p-3", "bg-primary"], ["href", "javascript:void(0)", 1, "closebtn", "pull-right", "text-white", 3, "click"], [1, "title-sidebar", "mb-0", "text-white"], [1, "fa", "fa-link"], [1, "kt-nav"], [1, "kt-nav__head", "d-block"], [1, "text-primary"], [1, "M_fsize"], [1, "badge", "badge-pill", "badge-outline-info"], [1, "badge", "badge-pill", "badge-outline-success"], [1, "kt-nav__separator"], [1, "kt-nav__item", "px-4"], [1, "mutlidropdown-set", "mutlidropdown-full", "mr-1", 2, "flex", "3", 3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onDeSelect"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", 3, "click"], [1, "kt-nav__foot"], ["id", "rightbar-overlay", 3, "click"], ["id", "mysideInfobar_schd", 1, "sideInfobar", "animate-right", "offcanvas"], [1, "px-4", "pt-4", "pb-1", "border-bottom"], [1, "offcanvas-header", "d-flex", "align-items-center", "justify-content-between", "pb-2"], [1, "m-0"], ["href", "javascript:void(0)", 1, "closebtn", "btn", "btn-xs", "btn-icon", "btn-hover-primary", 3, "click"], [1, "fa", "fa-times"], [1, "px-4", "pt-2"], [1, "pt-2"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "my-2"], [1, "d-none", "align-items-start"], ["for", "customSwitch1", 1, "form-check-label", "mr-2"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "customSwitch1", 1, "form-check-input"], ["for", "customSwitch1", 1, "form-check-label"], ["role", "group", 1, "btn-group"], ["type", "button", "data-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "btn-tsk"], [1, "svg-icon", "svg-icon-primary", "svg-icon-2x", "mr-2"], ["width", "36", "height", "36", "viewBox", "0 0 36 36"], ["fill", "#34A853", "d", "M16 16v14h4V20z"], ["fill", "#4285F4", "d", "M30 16H20l-4 4h14z"], ["fill", "#FBBC05", "d", "M6 16v4h10l4-4z"], ["fill", "#4285F4", "d", "M20 16V6h-4v14z"], ["fill", "none", "d", "M0 0h36v36H0z"], [1, "dropdown-menu", "drop-cus"], [1, "form-group"], [1, "cus-lbl"], ["placeholder", "Enter Title", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Select Project", 1, "kt-input", "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "txtm-cus mt-1 ml-1", 4, "ngIf"], ["id", "core_viw", 1, "content-main", "show", "pt-0"], ["id", "subtaskid", 1, "form-group"], ["placeholder", "Select Action", 1, "kt-input", "form-control", 3, "ngModel", "ngModelChange", "change"], ["id", "Guest_Name", 1, "form-group", 2, "display", "none"], ["name", "EmployeeDropdown", 1, "mutlidropdown-set", 3, "placeholder", "ngModel", "settings", "data", "ngModelChange", "onSelect", "onDeSelect"], ["id", "Location_Name", 1, "section-1", 2, "display", "none"], ["placeholder", "Enter Full Address", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "d-flex", "gap-15"], [1, "form-group", "flex-1"], ["placeholder", "EnterLatitude_Type Latitude Ex:15.000000", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Enter Longitude Ex:15.000000", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "Descrip_Name", 1, "form-group", 2, "display", "none"], [3, "ngModel", "config", "ngModelChange"], [1, "input-group", "align-items-start", "flex-nowrap", "dropdown", "mr-2", "mt-3", "gap-1"], [1, "wc-cus"], [1, "form-group", "dropfocus", "ml-0", "dropdown", "mb-3"], ["type", "text", "placeholder", "Start Time", "data-toggle", "dropdown", 1, "form-control", 3, "ngModel", "ngModelChange"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "End Time", "data-toggle", "dropdown", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "demo-inline-calendar-card"], [3, "dateClass", "minDate", "maxDate", "dblclick", "selectedChange"], ["class", "d-flex align-items-center flex-wrap pl-3 pt-3 width-cus border", 4, "ngIf"], [1, "form-group", "w-matc"], [1, ""], ["name", "Select Type", "placeholder", "Do not repeat", 1, "form-control", 3, "selectionChange"], [3, "value"], ["id", "weekly_121", 1, "ml-0", "form-group", 2, "display", "none"], [1, "pt-1"], [4, "ngIf"], [1, "form-group", "mb-1"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "kt-widget5__item"], [1, "kt-widget5__content"], [1, "kt-widget5__section"], [1, "kt-widget5__title", "Activity-title", "mb-1"], [1, "kt-widget5__desc", "mb-0"], [1, "kt-widget5__desc", "mb-0", 3, "title"], [1, "Activity-title"], [1, "kt-widget5__info", "Activity-date"], [1, "kt-font-info"], [1, "bullet", "bullet-bar", "dar-border-height", "bg-primary", "align-self-stretch", "mr-3"], [1, "bullet", "bullet-bar", "dar-border-height", "bg-success", "align-self-stretch", "mr-3"], [1, "bullet", "bullet-bar", "dar-border-height", "bg-danger", "align-self-stretch", "mr-3"], [1, "bullet", "bullet-bar", "dar-border-height", "bg-info", "align-self-stretch", "mr-3"], [1, "bullet", "bullet-bar", "dar-border-height", "bg-warning", "align-self-stretch", "mr-3"], [1, "bullet", "bullet-bar", "dar-border-height", "bg-success", "align-self-stretch", "mr-3", 2, "background-color", "#28a745"], [1, "bullet", "bullet-bar", "dar-border-height", "align-self-stretch", "mr-3", 2, "background-color", "#C0B5DC"], [1, "kt-widget5__title"], [1, "kt-widget5__desc"], [1, "bullet", "bullet-bar", "dar-border-height", "align-self-stretch", "mr-3", 2, "background-color", "#F5C293"], [1, "kt-widget5__item", "no-border"], [3, "hidden"], [2, "color", "lightgrey", "text-align", "center"], [1, "mr-2"], [1, "fas", "fa-circle", "mr-2", 3, "ngClass"], ["role", "button", 3, "click"], [1, "kt-widget5__info"], [4, "ngIf", "ngIfElse"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-danger", "kt-badge.kt-badge-light-bold", "kt-badge--inline"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-warning", "kt-badge.kt-badge-light-bold", "kt-badge--inline"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-info", "kt-badge.kt-badge-light-bold", "kt-badge--inline"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-primary", "kt-badge.kt-badge-light-bold", "kt-badge--inline"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-success", "kt-badge.kt-badge-light-bold", "kt-badge--inline"], [1, "txtm-cus", "mt-1", "ml-1"], [1, "d-inline-flex", "align-items-center"], [1, "fas", "fa-calendar-alt", "mr-2"], [1, "d-inline-flex", "align-items-center", "ml-2"], [1, "fas", "fa-clock", "mr-2"], [1, "fas", "fa-star", "mr-2"], [1, "d-flex", "align-items-center", "flex-wrap", "pl-3", "pt-3", "width-cus", "border"], ["type", "hidden", "id", "hdnSelectedId", 3, "value"], ["type", "hidden", "id", "hdnSecondSelectedId", 3, "value"], ["type", "hidden", "id", "hdntotal", 3, "value"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", "px-3", "mb-2"], [1, "badge", "badge-light-primary"], [1, "form-control", "w-maxc", 3, "change"], [3, "id", "value", 4, "ngFor", "ngForOf"], [3, "id", "value"], [1, "table-time"], ["id", "tbl_times", 1, ""], [1, "d-flex", "flex-wrap", "justify-content-between"], [3, "id", "click", 4, "ngFor", "ngForOf"], [3, "id", "click"], [1, "wp-100", 3, "id"], [1, "time-slt-card"], [1, "time-slt-time"], [3, "ngClass"], ["type", "checkbox", "name", "DaysChk", 1, "rep-chk", 3, "id", "value", "change"], [1, "form-group", "align-items-start", "mb-3", "d-none"], [1, "calendar-wrap", "mr-3"], [1, "month-year"], [1, "calendar"], ["scope", "col", 1, "day-title"], [1, "week"], ["tabindex", "0", 1, "day", "prev-mon"], [1, "day-number"], ["tabindex", "0", 1, "day"], ["tabindex", "0", 1, "day", "active-a"], ["tabindex", "0", 1, "day", "next-mon"], [1, "resetbtn"], [1, "calendar-wrap"], ["class", "form-group", "id", "dayrep", 4, "ngIf"], ["class", "form-group ", 4, "ngIf"], ["id", "dayrep", 1, "form-group"], ["class", "repeat-month", 4, "ngFor", "ngForOf"], [1, "repeat-month"], [1, "dropfocus", "dropdown", "w-200", "ml-0"], ["type", "text", "placeholder", "Select Repeat Weekday", "data-toggle", "dropdown", 1, "kt-input", "form-control"], [1, "dropdown-item"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Main Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Notifications \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "4 new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Subtask Created For Dr Cafe. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " 2 hrs ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Creative Planner Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " 3 hrs ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " RunWay Module Subtask Added ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 3 hrs ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Process Detail Module Subtask Added ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " 5 hrs ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Main Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Need Your Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "DAR Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_68_listener() { return ctx.Delay_Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Delay Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_80_listener() { return ctx.ExpiryInOneMonth_Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Delay In One Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_92_listener() { return ctx.Not_Started(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Projects not Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_104_listener() { return ctx.AssignedTask_Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Assigned Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_116_listener() { return ctx.Not_Working(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Not Working from 1 Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_130_listener() { return ctx.Rejected_Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Rejected Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_142_listener() { return ctx.UnderApproval_Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Under Approval Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_153_listener() { return ctx.Portfolio_Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Delay Portfolios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "DAR Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "svg", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Todays DAR Achievement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "svg", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Yesterday's DAR Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "svg", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "DAR Under Approval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " DAR Rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "h5", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " My Calendar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_236_listener() { return ctx.openschd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_242_listener() { return ctx.userProjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "My");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_244_listener() { return ctx.teamProjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "My Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_246_listener() { return ctx.allProjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "full-calendar", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "span", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Date Range : Last One Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](264, DashboardComponent_div_264_Template, 46, 26, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](265, DashboardComponent_div_265_Template, 29, 12, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " Portfolios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "span", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](277, DashboardComponent_div_277_Template, 25, 30, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "h5", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "button", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "ul", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "li", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Subtask Created For Dr Cafe.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "li", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Creative Planner Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "li", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "RunWay Module Subtask Added");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Process Detail Module Subtask Added");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "li", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Dashboard Notifications Click to view Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "button", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "button", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Clear All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_309_listener() { return ctx.closeLinkSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "h5", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, " Link Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "ul", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "li", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "p", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, " Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, " Linked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "li", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "ng-multiselect-dropdown", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_ng_multiselect_dropdown_ngModelChange_328_listener($event) { return ctx.ngDropdwonMemo = $event; })("onSelect", function DashboardComponent_Template_ng_multiselect_dropdown_onSelect_328_listener() { return ctx.Memo_Select(ctx.ngDropdwonMemo); })("onDeSelect", function DashboardComponent_Template_ng_multiselect_dropdown_onDeSelect_328_listener() { return ctx.Memo_Deselect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "button", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_329_listener() { return ctx._AddLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "li", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_332_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "h4", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Schedule Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "a", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_338_listener() { return ctx.closeschd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "i", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "label", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "input", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "label", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "button", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "span", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "svg", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "path", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "path", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "path", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "path", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "path", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_364_listener() { return ctx.Task_type(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_366_listener() { return ctx.Task_type(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "label", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "input", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_371_listener($event) { return ctx.Title_Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "label", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Select Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "ng-select", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_ng_select_ngModelChange_375_listener($event) { return ctx.MasterCode = $event; })("change", function DashboardComponent_Template_ng_select_change_375_listener($event) { return ctx.GetSubtasklistfromProject($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](376, DashboardComponent_ng_option_376_Template, 2, 2, "ng-option", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](377, DashboardComponent_div_377_Template, 15, 10, "div", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "label", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Select Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "ng-select", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_ng_select_ngModelChange_382_listener($event) { return ctx.Subtask = $event; })("change", function DashboardComponent_Template_ng_select_change_382_listener($event) { return ctx.getChangeSubtaskDetais($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](383, DashboardComponent_ng_option_383_Template, 2, 2, "ng-option", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](384, DashboardComponent_div_384_Template, 13, 4, "div", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "label", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Add Guest ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "ng-multiselect-dropdown", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_ng_multiselect_dropdown_ngModelChange_388_listener($event) { return ctx.ngEmployeeDropdown = $event; })("onSelect", function DashboardComponent_Template_ng_multiselect_dropdown_onSelect_388_listener($event) { return ctx.OnEmpSelect($event); })("onDeSelect", function DashboardComponent_Template_ng_multiselect_dropdown_onDeSelect_388_listener() { return ctx.OnEmpDeselect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "label", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "textarea", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_textarea_ngModelChange_393_listener($event) { return ctx.Location_Type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "label", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Latittude ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "input", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_398_listener($event) { return ctx.Latitude_Type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "label", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Longitude ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "input", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_402_listener($event) { return ctx.Longtitude_Type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "label", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "angular-editor", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_angular_editor_ngModelChange_406_listener($event) { return ctx.Description_Type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "div", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "div", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "div", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "label", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "Start Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "input", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_414_listener($event) { return ctx.Startts = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "div", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](416, DashboardComponent_ng_container_416_Template, 3, 1, "ng-container", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "label", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "End Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "input", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_420_listener($event) { return ctx.Endtms = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "div", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](422, DashboardComponent_ng_container_422_Template, 3, 1, "ng-container", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "mat-card", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "mat-calendar", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function DashboardComponent_Template_mat_calendar_dblclick_425_listener($event) { return ctx.Doubleclick($event); })("selectedChange", function DashboardComponent_Template_mat_calendar_selectedChange_425_listener($event) { return ctx.select($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](426, DashboardComponent_div_426_Template, 12, 6, "div", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](427, DashboardComponent_ng_container_427_Template, 4, 3, "ng-container", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "div", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "label", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "Repeat on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "mat-select", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DashboardComponent_Template_mat_select_selectionChange_431_listener($event) { return ctx.SelectDropDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "mat-option", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "mat-option", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "mat-option", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "div", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "label", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "div", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](443, DashboardComponent_ng_container_443_Template, 4, 4, "ng-container", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](444, DashboardComponent_div_444_Template, 406, 3, "div", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "div", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "button", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_446_listener() { return ctx.OnSubmitSchedule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.DelayCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.TotalExpiryInMonth, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.ProjectsNotStarted, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.AssignedProjects, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.ProjectsNotWorking, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.RejectedCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.CompletedCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.TotalExpiryPortfolio, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.TodaysDARAchievement, " Hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.YesterdaysDAR_Status, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.TotalDARSubmitted, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.TotalDARRejected, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Project_Mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.calendarOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.projectactivity_Div);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._RequestActivity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._DarActivityList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.DARactivity_Div);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._ListProjStat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._displayProjName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._totalMemos, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._mappedMemos, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Select Memo")("settings", ctx.dropdownSettings_Memo)("data", ctx.Memos_List)("ngModel", ctx.ngDropdwonMemo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ScheduleType, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Title_Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.MasterCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.BlockNameProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Projectstartdate != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Subtask);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.BlockNameProject1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.St_date != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", " TM Name ")("ngModel", ctx.ngEmployeeDropdown)("settings", ctx.dropdownSettings_Emp)("data", ctx._EmployeeListForDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Location_Type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Latitude_Type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Longtitude_Type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Description_Type)("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Startts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.StartTimearr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Endtms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.EndTimearr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dateClass", ctx.isSelected)("minDate", ctx.minDate)("maxDate", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preventSingleClick == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.daysSelectedII);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dayArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isChecked == "1");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_15__["FullCalendarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_18__["AngularEditorComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCard"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatCalendar"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["ɵr"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: [".height-adjust[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    max-height: 60vh;\r\n    overflow: auto;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.height-adjust[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.height-adjust[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.height-adjust[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #ccc;\r\n    border-radius: 8px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.height-adjust[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n}\r\n\r\n\r\n.dashboard-subtitle[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #a5a4a4;\r\n}\r\n\r\n\r\n.Activity-title[_ngcontent-%COMP%] {\r\n    color: #22b9ff !important;\r\n}\r\n\r\n\r\n.Activity-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .Activity-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: #7d7d7d;\r\n}\r\n\r\n\r\n.Activity-date[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n}\r\n\r\n\r\n.dialogboxDropdpwn[_ngcontent-%COMP%]   .multiselect-dropdown[_ngcontent-%COMP%] {\r\n    width: 250px !important;\r\n}\r\n\r\n\r\n.fc[_ngcontent-%COMP%]   .fc-button-primary[_ngcontent-%COMP%] {\r\n    background-color: #fff !important;\r\n    border-color: #2c3e50 !important;\r\n    color: #fff !important;\r\n}\r\n\r\n\r\n.action-count[_ngcontent-%COMP%] {\r\n    background-color: #ffffff;\r\n    box-shadow: 0px 0px 13px 0px rgb(82 63 105 / 5%);\r\n    background-color: #ffffff;\r\n    margin-bottom: 15px;\r\n    padding: 15px;\r\n    border-radius: 0.25rem;\r\n    color: #646c9a;\r\n    \r\n    letter-spacing: 0.2px;\r\n    transition: all .3s ease !important;\r\n}\r\n\r\n\r\n.action-count[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.02);\r\n}\r\n\r\n\r\n.action-count[_ngcontent-%COMP%]   .count-icon[_ngcontent-%COMP%] {\r\n    background-color: #deecfd;\r\n    padding: 5px 8px;\r\n    height: 30px;\r\n    border-radius: 6px;\r\n    margin-right: 15px;\r\n    color: #00b2ff;\r\n}\r\n\r\n\r\n.action-count[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n}\r\n\r\n\r\n.action-count[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #696969;\r\n}\r\n\r\n\r\n.action-count.bg-grey[_ngcontent-%COMP%] {\r\n    background-color: #efeff1;\r\n}\r\n\r\n\r\n.action-count.bg-grey[_ngcontent-%COMP%]   .action-content[_ngcontent-%COMP%]   a.arrow-btn[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    background-color: #f9d57f;\r\n    color: #333;\r\n    padding: 7px 10px;\r\n    font-size: 11px;\r\n    border-radius: 8px;\r\n}\r\n\r\n\r\n.action-bg-warning[_ngcontent-%COMP%] {\r\n    background-color: #f9d57f;\r\n}\r\n\r\n\r\n.action-count.action-bg-warning[_ngcontent-%COMP%]   .count-icon[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    color: #f9d57f;\r\n}\r\n\r\n\r\n.action-count[_ngcontent-%COMP%]   .action-meeting[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    background-color: #f9d57f;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    padding: 8px;\r\n    border-radius: 9px;\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n.action-count[_ngcontent-%COMP%]   .action-meeting[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n}\r\n\r\n\r\n.bd-example-modal-lg[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 200px);\r\n    overflow-y: auto;\r\n}\r\n\r\n\r\n.collapsed[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]:before {\r\n    content: \"\\f078\";\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.bd-example-modal-lg[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.bd-example-modal-lg[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.bd-example-modal-lg[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #ccc;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.bd-example-modal-lg[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n}\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   .table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n    color: #212529;\r\n    background-color: #fafbfc;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.sideInfobar[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 999;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: #ffffff;\r\n    border-left: 1px solid #EDEAE9;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    box-shadow: 0 .1rem 1rem .25rem rgb(0 0 0/5%) !important;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.name-box[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-size: 9px;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    letter-spacing: 2px;\r\n    border-radius: 50%;\r\n    line-height: 30px;\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n.names-response[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    text-align: left;\r\n}\r\n\r\n\r\n.names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\r\n    display: block;\r\n    font-size: 10px;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.head-btn[_ngcontent-%COMP%] {\r\n    background-color: rgba(88, 103, 221, 0.1);\r\n    padding: 3px 10px 3px 5px;\r\n    border-radius: 2rem;\r\n    border: 1px solid #b3bcff;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n}\r\n\r\n\r\n.head-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #5867dd;\r\n    color: #fff;\r\n    line-height: 25px;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    margin-right: 3px;\r\n}\r\n\r\n\r\n.devider[_ngcontent-%COMP%] {\r\n    height: 1px;\r\n    width: 100%;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n\r\n.pricevalues[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n    padding-bottom: 10px;\r\n    border-right: 1px solid #f1f1f1;\r\n    border-bottom: 1px solid #f1f1f1;\r\n}\r\n\r\n\r\n.top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(1), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(2) {\r\n    border-top: 1px solid #f1f1f1;\r\n}\r\n\r\n\r\n.top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(3), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\r\n    border-bottom: none\r\n}\r\n\r\n\r\n.pricevalues[_ngcontent-%COMP%]:nth-child(2), .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\r\n    border-right: none;\r\n}\r\n\r\n\r\n.w-60[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n}\r\n\r\n\r\n.dms-links[_ngcontent-%COMP%] {\r\n    list-style-type: disc;\r\n}\r\n\r\n\r\n.dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-decoration: underline;\r\n    font-weight: 600;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n.py-10px[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n\r\n.dropdown-item[_ngcontent-%COMP%]:active {\r\n    background-color: #dedee0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .pro-bar[_ngcontent-%COMP%] {\r\n    background: hsl(0, 0%, 97%);\r\n    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;\r\n    height: 4px;\r\n    margin-bottom: 12px;\r\n    margin-top: 30px;\r\n    position: relative;\r\n    text-align: left;\r\n}\r\n\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress_bar_title[_ngcontent-%COMP%] {\r\n    color: hsl(218, 4%, 50%);\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    position: relative;\r\n    top: -28px;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress_number[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%] {\r\n    background-color: hsl(0, 0%, 88%);\r\n    display: block;\r\n    width: 0;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transition: width 1s linear 0s;\r\n}\r\n\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    background-color: hsl(0, 0%, 100%);\r\n    border-radius: 50%;\r\n    width: 4px;\r\n    height: 4px;\r\n    position: absolute;\r\n    right: 1px;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    width: 14px;\r\n    height: 14px;\r\n    background-color: inherit;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    right: -4px;\r\n    top: -5px;\r\n}\r\n\r\n\r\n.bg-today[_ngcontent-%COMP%] {\r\n    background-color: #342bf0 !important;\r\n}\r\n\r\n\r\n.M_fsize[_ngcontent-%COMP%] {\r\n    font-size: smaller;\r\n}\r\n\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n    border-radius: 0;\r\n    font-size: 12px;\r\n    line-height: 1;\r\n    padding: .375rem .5625rem;\r\n    font-weight: normal;\r\n}\r\n\r\n\r\n.text-Rejected[_ngcontent-%COMP%] {\r\n    color: #E6747A !important;\r\n}\r\n\r\n\r\n.text-underApproval[_ngcontent-%COMP%] {\r\n    color: #98c7bf !important;\r\n}\r\n\r\n\r\n.text-CompleteRejected[_ngcontent-%COMP%] {\r\n    color: #D83C3C !important;\r\n}\r\n\r\n\r\n.text-underApp[_ngcontent-%COMP%] {\r\n    color: #4495D5 !important;\r\n}\r\n\r\n\r\n.text-Todo[_ngcontent-%COMP%] {\r\n    color: #45F495 !important;\r\n}\r\n\r\n\r\n.text-Completed[_ngcontent-%COMP%] {\r\n    color: #41D37B !important;\r\n}\r\n\r\n\r\n.bell-icon[data-count][_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 10px;\r\n    content: attr(data-count);\r\n    font-size: 45%;\r\n    padding: 0.6em;\r\n    border-radius: 999px;\r\n    line-height: .75em;\r\n    color: white;\r\n    background: rgba(255, 0, 0, 0.85);\r\n    text-align: center;\r\n    min-width: 2em;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.menu-sub-dropdown[_ngcontent-%COMP%] {\r\n    display: none;\r\n    border-radius: 0.475rem;\r\n    background-color: #fff;\r\n    box-shadow: 0 0 50px 0 rgb(82 63 105 / 15%);\r\n    z-index: 105;\r\n}\r\n\r\n\r\n.kt-subheader--enabled[_ngcontent-%COMP%]   .kt-content[_ngcontent-%COMP%] {\r\n    padding-top: 60px !important;\r\n}\r\n\r\n\r\n.kt-content[_ngcontent-%COMP%] {\r\n    padding-top: 60px !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.kt-input[_ngcontent-%COMP%] {\r\n    height: 36px;\r\n    line-height: 25px;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    \r\n    line-height: 24px;\r\n    background-color: rgba(255, 255, 255, 0);\r\n    color: #3c4043;\r\n    border: none;\r\n    border-radius: 0;\r\n    border-bottom: 2px solid #dadce0;\r\n    padding: 0.65rem 1rem;\r\n}\r\n\r\n\r\n.kt-input[_ngcontent-%COMP%]:focus {\r\n    border-bottom: 2px solid #1a73e8;\r\n}\r\n\r\n\r\n.repeat-day.active[_ngcontent-%COMP%], .repeat-month.active[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: #1a73e8;\r\n}\r\n\r\n\r\n.repeat-day[_ngcontent-%COMP%], .repeat-month[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    box-sizing: border-box;\r\n    width: 24px;\r\n    height: 24px;\r\n    font-size: 10px;\r\n    font-weight: 500;\r\n    border-radius: 50%;\r\n    background-color: #f1f3f4;\r\n    color: #80868b;\r\n    margin-right: 8px;\r\n    cursor: pointer;\r\n    text-transform: capitalize;\r\n    position: relative;\r\n}\r\n\r\n\r\n.dropfocus[_ngcontent-%COMP%] {\r\n    margin: 0px 0px;\r\n}\r\n\r\n\r\n.dropfocus.dropdown.show[_ngcontent-%COMP%] {\r\n    background: #f1f3f4;\r\n}\r\n\r\n\r\n#mysideInfobar_schd[_ngcontent-%COMP%] {\r\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.dropfocus[_ngcontent-%COMP%]   .dropdown-menu.show[_ngcontent-%COMP%] {\r\n    min-width: 100%;\r\n    height: 200px;\r\n    overflow: auto;\r\n}\r\n\r\n\r\n.eve-icons[_ngcontent-%COMP%] {\r\n    color: #5f6368;\r\n}\r\n\r\n\r\n.eve-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\n.content-main[_ngcontent-%COMP%] {\r\n    display: none;\r\n    padding-top: 20px;\r\n}\r\n\r\n\r\n.content-main.show[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n\r\n.w-200[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n}\r\n\r\n\r\n.w-300[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n}\r\n\r\n\r\n.inf-det[_ngcontent-%COMP%] {\r\n    padding: 10px 5px;\r\n    line-height: 1.2;\r\n    color: #969696;\r\n    font-weight: 600;\r\n    font-family: var(--font-family-sans-serif);\r\n}\r\n\r\n\r\n  ng-select {\r\n    border-bottom: none !important;\r\n    padding: 0 !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.dropfocus[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 6px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.dropfocus[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.dropfocus[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #ccc;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n.form-check-input[_ngcontent-%COMP%]:checked {\r\n    background-color: #3699ff;\r\n    border-color: #3699ff;\r\n}\r\n\r\n\r\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\r\n    width: 2em;\r\n    margin-left: -2.5em;\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\");\r\n    background-position: left center;\r\n    border-radius: 2em;\r\n    transition: background-position .15s ease-in-out;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.form-check-label[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.form-check-input[_ngcontent-%COMP%] {\r\n    width: 1.143em;\r\n    height: 1.143em;\r\n    margin-top: 0.1785em;\r\n    vertical-align: top;\r\n    background-color: #fff;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    border: 1px solid #adb5bd;\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    -webkit-print-color-adjust: exact;\r\n    print-color-adjust: exact;\r\n}\r\n\r\n\r\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\r\n    background-position: right center;\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\");\r\n}\r\n\r\n\r\n.form-check-input[_ngcontent-%COMP%]:checked[type=\"checkbox\"] {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\");\r\n}\r\n\r\n\r\n.form-check-input[_ngcontent-%COMP%]:checked[type=\"radio\"] {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\");\r\n}\r\n\r\n\r\n.form-check-input[type=\"checkbox\"][_ngcontent-%COMP%]:indeterminate {\r\n    background-color: var(--ct-form-check-input-indeterminate-bg-color);\r\n    border-color: var(--ct-form-check-input-indeterminate-border-color);\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\");\r\n}\r\n\r\n\r\n.form-check-input[_ngcontent-%COMP%]:disabled {\r\n    pointer-events: none;\r\n    filter: none;\r\n    opacity: 0.5;\r\n}\r\n\r\n\r\n.form-check-input[_ngcontent-%COMP%]:disabled ~ .form-check-label[_ngcontent-%COMP%], .form-check-input[disabled][_ngcontent-%COMP%] ~ .form-check-label[_ngcontent-%COMP%] {\r\n    cursor: default;\r\n    opacity: 0.5;\r\n}\r\n\r\n\r\n.form-switch[_ngcontent-%COMP%] {\r\n    padding-left: 2.5em;\r\n}\r\n\r\n\r\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\r\n    width: 2em;\r\n    margin-left: -2.5em;\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%238b96a0'/%3e%3c/svg%3e\");\r\n    background-position: left center;\r\n    border-radius: 2em;\r\n    transition: background-position 0.15s ease-in-out;\r\n}\r\n\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n    .form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\r\n        transition: none;\r\n    }\r\n}\r\n\r\n\r\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:focus {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%238b96a0'/%3e%3c/svg%3e\");\r\n}\r\n\r\n\r\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\r\n    background-position: right center;\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\r\n}\r\n\r\n\r\n.calendar[_ngcontent-%COMP%] {\r\n    table-layout: fixed;\r\n    width: 100%;\r\n    margin-bottom: 0.75em;\r\n    overflow: hidden;\r\n    border-collapse: collapse;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n\r\n.calendar-wrap[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 0.75em;\r\n    margin: auto;\r\n    font-size: 3vw;\r\n    background-color: #fff;\r\n    border-radius: 1.5em;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n    box-shadow: 0 0.0625em 0.25em rgb(0 20 50 / 20%), 0 0.5em 0.5em 0.125em rgb(0 20 50 / 10%);\r\n}\r\n\r\n\r\n.calendar-wrap[_ngcontent-%COMP%] {\r\n    max-width: 450px;\r\n    font-size: 1.15rem;\r\n}\r\n\r\n\r\n.day-title[_ngcontent-%COMP%] {\r\n    width: 3em;\r\n    height: 3.5em;\r\n    vertical-align: top;\r\n    font-weight: bold;\r\n    font-size: 0.65em;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.0625em;\r\n    box-shadow:\r\n        inset 0 -0.875em #fff,\r\n        inset 0 -1em rgba(0, 20, 50, 0.1);\r\n}\r\n\r\n\r\n.day[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 3em;\r\n}\r\n\r\n\r\n.day[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.day-number[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 26px;\r\n    border-radius: 100px;\r\n}\r\n\r\n\r\n.day.today[_ngcontent-%COMP%]   span.day-number[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    border: 0.25em solid transparent;\r\n    box-shadow: inset 0 0 0 2em #37474f;\r\n}\r\n\r\n\r\n.day.prev-mon[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%], .day.next-mon[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%], .day.prev-mon[_ngcontent-%COMP%]:hover   .day-number[_ngcontent-%COMP%], .day.next-mon[_ngcontent-%COMP%]:hover   .day-number[_ngcontent-%COMP%] {\r\n    color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n\r\n.day.today[_ngcontent-%COMP%]:focus   .day-number[_ngcontent-%COMP%]::after {\r\n    width: 102%;\r\n    height: 102%;\r\n}\r\n\r\n\r\n.day[_ngcontent-%COMP%]:hover   span.day-number[_ngcontent-%COMP%] {\r\n    color: #0288d1;\r\n}\r\n\r\n\r\n.day[_ngcontent-%COMP%]:first-child, .day[_ngcontent-%COMP%]:last-child {\r\n    color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n\r\n.day.range[_ngcontent-%COMP%] {\r\n    color: #0288d1;\r\n    background-color: #e1f5fe;\r\n}\r\n\r\n\r\n.day.active-a[_ngcontent-%COMP%]   span.day-number[_ngcontent-%COMP%], .day.active-b[_ngcontent-%COMP%]   span.day-number[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background-color: #03A9F4;\r\n}\r\n\r\n\r\n.day[_ngcontent-%COMP%]:first-child, .day[_ngcontent-%COMP%]:last-child {\r\n    color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n\r\n.resetbtn[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0.5em 1em;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    font-size: 0.6875em;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.0625em;\r\n    background-color: #37474F;\r\n    border-radius: 1.5em;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.calendar-wrap[_ngcontent-%COMP%]   .resetbtn[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n\r\n.resetbtn[_ngcontent-%COMP%]:hover {\r\n    color: #ede3e3;\r\n}\r\n\r\n\r\n.day.prev-mon[_ngcontent-%COMP%], .day.prev-mon[_ngcontent-%COMP%]:focus, .day.next-mon[_ngcontent-%COMP%], .day.next-mon[_ngcontent-%COMP%]:focus {\r\n    outline: none !important;\r\n    border: none;\r\n    box-shadow: none;\r\n    cursor: not-allowed;\r\n}\r\n\r\n\r\n.day.prev-mon[_ngcontent-%COMP%]:focus   .day-number[_ngcontent-%COMP%], .day-number[_ngcontent-%COMP%]:focus, .day.next-mon[_ngcontent-%COMP%]:focus   .day-number[_ngcontent-%COMP%] {\r\n    outline: none !important;\r\n    border: none;\r\n    box-shadow: none;\r\n    cursor: not-allowed;\r\n}\r\n\r\n\r\n  mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n\r\n  .mat-calendar-body-cell.selected>.mat-calendar-body-cell-content,   .mat-calendar-body-cell.selected:hover>.mat-calendar-body-cell-content,   .mat-calendar-body-cell.selected>.mat-calendar-body-cell-content:hover {\r\n    background-color: #1a84e8 !important;\r\n    color: #fff !important;\r\n}\r\n\r\n\r\n.mat-calendar-body-cell.selected[_ngcontent-%COMP%] {\r\n    background-color: #1a84e8 !important;\r\n    border-radius: 50%\r\n}\r\n\r\n\r\n  .mat-calendar-body-cell.selectedinvalid>.mat-calendar-body-cell-content,   .mat-calendar-body-cell.selectedinvalid:hover>.mat-calendar-body-cell-content,   .mat-calendar-body-cell.selectedinvalid>.mat-calendar-body-cell-content:hover {\r\n    background-color: #e8281a !important;\r\n    color: #fff !important;\r\n}\r\n\r\n\r\n.mat-calendar-body-cell.selectedinvalid[_ngcontent-%COMP%] {\r\n    background-color: #e8281a !important;\r\n    border-radius: 50%\r\n}\r\n\r\n\r\n.drop-calendar[_ngcontent-%COMP%] {\r\n    width: 30rem\r\n}\r\n\r\n\r\n\r\n\r\n\r\n  .mat-calendar-controls {\r\n    margin-top: 0px !important;\r\n}\r\n\r\n\r\n  .demo-inline-calendar-card {\r\n    padding-top: 0px !important;\r\n}\r\n\r\n\r\n.wc-cus[_ngcontent-%COMP%] {\r\n    width: 48%;\r\n}\r\n\r\n\r\n.width-cus[_ngcontent-%COMP%] {\r\n    width: 52%;\r\n}\r\n\r\n\r\n.rep-chk[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    opacity: 0;\r\n}\r\n\r\n\r\n.gap-15[_ngcontent-%COMP%] {\r\n    gap: 15px;\r\n}\r\n\r\n\r\n.btn-tsk[_ngcontent-%COMP%] {\r\n    height: 48px;\r\n    transition: border 280ms cubic-bezier(.4, 0, .2, 1), box-shadow 280ms cubic-bezier(.4, 0, .2, 1);\r\n    box-shadow: 0px 1px 2px 0px rgb(60 64 67 / 30%), 0px 1px 3px 1px rgb(60 64 67 / 15%);\r\n    background-color: rgba(255, 255, 255, 0.502);\r\n    width: 145px;\r\n    border-radius: 48px;\r\n}\r\n\r\n\r\n.svg-icon.svg-icon-primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n    transition: fill 0.3s ease;\r\n    fill: #3699FF !important;\r\n}\r\n\r\n\r\n.svg-icon.svg-icon-2x[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    height: 2rem !important;\r\n    width: 2rem !important;\r\n}\r\n\r\n\r\n.d-flex[_ngcontent-%COMP%] {\r\n    display: flex !important;\r\n}\r\n\r\n\r\n.flex-wrap[_ngcontent-%COMP%] {\r\n    flex-wrap: wrap !important;\r\n}\r\n\r\n\r\n.time-slt-card[_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    padding: 7px 9px 7px 10px;\r\n    border-radius: 6px;\r\n    text-align: end;\r\n    line-height: 11px;\r\n}\r\n\r\n\r\np.time-slt-time[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n\r\nspan.time-slt-md[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    padding: 2px;\r\n\r\n    color: #898989;\r\n}\r\n\r\n\r\n.wp-100[_ngcontent-%COMP%] {\r\n    \r\n    width: 74px;\r\n    margin: 10px 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.time-slt-card.active[_ngcontent-%COMP%] {\r\n    background-color: #66b4f7;\r\n    color: #fff;\r\n    box-shadow: 1px 4px 5px #6db6f561;\r\n}\r\n\r\n\r\n.time-slt-card.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n\r\n\r\n.time[_ngcontent-%COMP%]:hover {\r\n    color: yellow;\r\n}\r\n\r\n\r\n.time[_ngcontent-%COMP%] {\r\n    background-color: #aeb2b5;\r\n    color: #fff;\r\n    box-shadow: 1px 4px 5px #6db6f561;\r\n}\r\n\r\n\r\n.table-time[_ngcontent-%COMP%]{\r\n    max-height: 450px;\r\n    overflow: auto;\r\n}\r\n\r\n\r\n.table-time[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    background-color: #fff;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n\r\n.table-time[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background-color: #fff;\r\n}\r\n\r\n\r\n.table-time[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: #1c1c9e80;\r\n    border-radius: 16px;\r\n    border: 5px solid #fff;\r\n}\r\n\r\n\r\n.w-maxc[_ngcontent-%COMP%]{\r\n    width: 132px;\r\n    width: max-content;\r\n}\r\n\r\n\r\n.badge.badge-light-primary[_ngcontent-%COMP%] {\r\n    background-color: rgba(115,103,240,.12);\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.badge.badge-light-primary[_ngcontent-%COMP%] {\r\n    color: #7367f0!important;\r\n}\r\n\r\n\r\n.drop-cus[_ngcontent-%COMP%]{\r\n    background: #fff;\r\n    border: 0;\r\n    -webkit-border-radius: 8px;\r\n    box-shadow: 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%), 0px 5px 5px -3px rgb(0 0 0 / 20%);\r\n    min-width: unset;\r\n    width: 100%;\r\n    margin-top: 8px;\r\n    border-radius: 8px;\r\n}\r\n\r\n\r\n.drop-cus[_ngcontent-%COMP%]   a.dropdown-item[_ngcontent-%COMP%]{\r\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\r\n    font-size: 14px;\r\n    padding: 0.5rem 1.2rem;\r\n    color: #222;\r\n}\r\n\r\n\r\n.drop-cus[_ngcontent-%COMP%]   a.dropdown-item[_ngcontent-%COMP%]:hover{\r\nbackground-color: #f1f3f4;\r\n}\r\n\r\n\r\n.w-matc[_ngcontent-%COMP%] {\r\n    width: 47.5%;\r\n}\r\n\r\n\r\n.open_sidebar[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\r\n\r\n\r\n.section-1[_ngcontent-%COMP%]{\r\n    background-color: #fafafa;\r\n    border: 1px solid #eee;\r\n    border-radius: 0 0 4px 4px;\r\n    padding: 15px;\r\n    min-height: 90px;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n\r\n@media Screen and (max-width: 1600px) {\r\n\r\n.table-time[_ngcontent-%COMP%] {\r\n    max-height: 400px;\r\n    overflow: auto;\r\n}\r\n}\r\n\r\n\r\n@media Screen and (max-width: 1400px) {\r\n\r\n.table-time[_ngcontent-%COMP%] {\r\n    max-height: 350px;\r\n    overflow: auto;\r\n}\r\n}\r\n\r\n\r\n@media Screen and (max-width: 1220px) {\r\n\r\n.wp-100[_ngcontent-%COMP%] {\r\n    width: 64px;\r\n    margin: 10px 5px;\r\n}\r\n.time-slt-card[_ngcontent-%COMP%]{\r\n    padding: 7px 9px 7px 10px;\r\n}\r\n}\r\n\r\n\r\n@media Screen and (max-width: 1024px) {\r\n\r\n    .open_sidebar[_ngcontent-%COMP%] {\r\n        width: 75%;\r\n    }\r\n}\r\n\r\n\r\n@media Screen and (max-width: 768px) {\r\n\r\n    .open_sidebar[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX0xheW91dERhc2hib2FyZC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7OztBQUdBLFVBQVU7OztBQUVWO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQSxVQUFVOzs7QUFFVjtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBR0EsV0FBVzs7O0FBRVg7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOzs7QUFHQSxvQkFBb0I7OztBQUVwQjtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7OztBQUVBOztJQUVJLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyxzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdEQUFnRDtJQUNoRCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFFckIsbUNBQW1DO0FBQ3ZDOzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBLFVBQVU7OztBQUVWO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQSxVQUFVOzs7QUFFVjtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBR0EsV0FBVzs7O0FBRVg7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOzs7QUFHQSxvQkFBb0I7OztBQUVwQjtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOzs7QUFHQSxvQkFBb0I7OztBQUVwQjtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IsZUFBZTtJQUNmLFlBQVk7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix3REFBd0Q7SUFDeEQsdUJBQXVCO0FBQzNCOzs7QUFFQSxpQ0FBaUM7OztBQUVqQztJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0FBQ3BDOzs7QUFFQTs7SUFFSSw2QkFBNkI7QUFDakM7OztBQUVBOztJQUVJO0FBQ0o7OztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7O0FBR0EscUNBQXFDOzs7QUFFckM7SUFDSSwyQkFBMkI7SUFDM0IsZ0RBQWdEO0lBQ2hELFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsY0FBYztJQUNkLFFBQVE7SUFDUixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsOEJBQThCO0FBQ2xDOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixNQUFNO0lBQ04sVUFBVTtBQUNkOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7OztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QiwyQ0FBMkM7SUFDM0MsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7OztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOzs7QUFFQTs7OztHQUlHOzs7QUFDSDtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHdDQUF3QztJQUN4QyxjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7O0FBRUE7O0lBRUksWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7O0FBRUE7O0lBSUksb0JBQW9CO0lBRXBCLG1CQUFtQjtJQUVuQix1QkFBdUI7SUFFdkIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUVoQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksMktBQTJLO0FBQy9LOzs7QUFFQTs7R0FFRzs7O0FBRUg7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsMENBQTBDO0FBQzlDOzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixxQkFBcUI7QUFDekI7OztBQUVBLFVBQVU7OztBQUVWO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQSxVQUFVOzs7QUFFVjtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBR0EsV0FBVzs7O0FBRVg7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQiwrT0FBK087SUFDL08sZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUVsQixnREFBZ0Q7SUFDaEQsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUV4QixnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtBQUM3Qjs7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsK09BQStPO0FBQ25QOzs7QUFFQTtJQUNJLCtPQUErTztBQUNuUDs7O0FBRUE7SUFDSSx1SkFBdUo7QUFDM0o7OztBQUVBO0lBQ0ksbUVBQW1FO0lBQ25FLG1FQUFtRTtJQUNuRSx5T0FBeU87QUFDN087OztBQUVBO0lBQ0ksb0JBQW9CO0lBRXBCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOzs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQiwwSkFBMEo7SUFDMUosZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUVsQixpREFBaUQ7QUFDckQ7OztBQUVBO0lBQ0k7UUFFSSxnQkFBZ0I7SUFDcEI7QUFDSjs7O0FBRUE7SUFDSSwwSkFBMEo7QUFDOUo7OztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHVKQUF1SjtBQUMzSjs7O0FBR0E7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHdDQUF3QztBQUM1Qzs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFHekIsaUJBQWlCO0lBQ2pCLDBGQUEwRjtBQUM5Rjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4Qjs7eUNBRXFDO0FBQ3pDOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJOzs7QUFDSjtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLG1DQUFtQztBQUN2Qzs7O0FBRUE7Ozs7SUFJSSx5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7O0lBRUkseUJBQXlCO0FBQzdCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7OztBQUVBOztJQUVJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7OztBQUVBOztJQUVJLHlCQUF5QjtBQUM3Qjs7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7OztBQUVBOzs7O0lBSUksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTs7O0lBR0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFJQTtJQUNJLFdBQVc7QUFDZjs7O0FBRUE7OztJQUdJLG9DQUFvQztJQUNwQyxzQkFBc0I7QUFDMUI7OztBQUdBO0lBQ0ksb0NBQW9DO0lBQ3BDO0FBQ0o7OztBQUVBOzs7SUFHSSxvQ0FBb0M7SUFDcEMsc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLG9DQUFvQztJQUNwQztBQUNKOzs7QUFFQTtJQUNJO0FBQ0o7OztBQUVBOztHQUVHOzs7QUFDSDtJQUNJLDBCQUEwQjtBQUM5Qjs7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7OztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOzs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0dBQWdHO0lBRWhHLG9GQUFvRjtJQUNwRiw0Q0FBNEM7SUFDNUMsWUFBWTtJQUVaLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFFSSwwQkFBMEI7SUFDMUIsd0JBQXdCO0FBQzVCOzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7OztBQUlBO0lBQ0ksd0JBQXdCO0FBQzVCOzs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZOztJQUVaLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGlDQUFpQztBQUNyQzs7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGlDQUFpQztBQUNyQzs7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7O0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOzs7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7OztBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7OztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCwwQkFBMEI7SUFFMUIsbUhBQW1IO0lBQ25ILGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7O0FBQ0E7SUFDSSwyS0FBMks7SUFDM0ssZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7OztBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOzs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7OztBQUNBO0lBQ0ksVUFBVTtBQUNkOzs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFDQTs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7OztBQUNBOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFDQTs7O0FBQ0E7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTs7O0FBQ0E7O0lBRUk7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7O0FBQ0E7O0lBRUk7UUFDSSxXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL19MYXlvdXREYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlaWdodC1hZGp1c3Qge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNjB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLyogd2lkdGggKi9cclxuXHJcbi5oZWlnaHQtYWRqdXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG59XHJcblxyXG5cclxuLyogVHJhY2sgKi9cclxuXHJcbi5oZWlnaHQtYWRqdXN0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG5cclxuLyogSGFuZGxlICovXHJcblxyXG4uaGVpZ2h0LWFkanVzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG5cclxuLmhlaWdodC1hZGp1c3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNhNWE0YTQ7XHJcbn1cclxuXHJcbi5BY3Rpdml0eS10aXRsZSB7XHJcbiAgICBjb2xvcjogIzIyYjlmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uQWN0aXZpdHktdGl0bGUgc3BhbixcclxuLkFjdGl2aXR5LXRpdGxlIHNtYWxsIHtcclxuICAgIGNvbG9yOiAjN2Q3ZDdkO1xyXG59XHJcblxyXG4uQWN0aXZpdHktZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5kaWFsb2dib3hEcm9wZHB3biAubXVsdGlzZWxlY3QtZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mYyAuZmMtYnV0dG9uLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMmMzZTUwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aW9uLWNvdW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEzcHggMHB4IHJnYig4MiA2MyAxMDUgLyA1JSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgY29sb3I6ICM2NDZjOWE7XHJcbiAgICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA0cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY3Rpb24tY291bnQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxufVxyXG5cclxuLmFjdGlvbi1jb3VudCAuY291bnQtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlY2ZkO1xyXG4gICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGNvbG9yOiAjMDBiMmZmO1xyXG59XHJcblxyXG4uYWN0aW9uLWNvdW50IC5hY3Rpb24tY29udGVudCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5hY3Rpb24tY291bnQgLmFjdGlvbi1jb250ZW50IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM2OTY5Njk7XHJcbn1cclxuXHJcbi5hY3Rpb24tY291bnQuYmctZ3JleSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmYxO1xyXG59XHJcblxyXG4uYWN0aW9uLWNvdW50LmJnLWdyZXkgLmFjdGlvbi1jb250ZW50IGEuYXJyb3ctYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWQ1N2Y7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uYWN0aW9uLWJnLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZDU3ZjtcclxufVxyXG5cclxuLmFjdGlvbi1jb3VudC5hY3Rpb24tYmctd2FybmluZyAuY291bnQtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICNmOWQ1N2Y7XHJcbn1cclxuXHJcbi5hY3Rpb24tY291bnQgLmFjdGlvbi1tZWV0aW5nIGkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZDU3ZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uYWN0aW9uLWNvdW50IC5hY3Rpb24tbWVldGluZyBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmJkLWV4YW1wbGUtbW9kYWwtbGcgLm1vZGFsLWJvZHkge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmNvbGxhcHNlZCAuZmEtY2hldnJvbi11cDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXGYwNzhcIjtcclxufVxyXG5cclxuLyogd2lkdGggKi9cclxuXHJcbi5iZC1leGFtcGxlLW1vZGFsLWxnIC5tb2RhbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG59XHJcblxyXG5cclxuLyogVHJhY2sgKi9cclxuXHJcbi5iZC1leGFtcGxlLW1vZGFsLWxnIC5tb2RhbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG5cclxuLyogSGFuZGxlICovXHJcblxyXG4uYmQtZXhhbXBsZS1tb2RhbC1sZyAubW9kYWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG5cclxuLmJkLWV4YW1wbGUtbW9kYWwtbGcgLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IC50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XHJcbn1cclxuXHJcblxyXG4vKiA9PT0gU2lkZWJhciA9PT0gKi9cclxuXHJcbi5zaWRlSW5mb2JhciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0VERUFFOTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBib3gtc2hhZG93OiAwIC4xcmVtIDFyZW0gLjI1cmVtIHJnYigwIDAgMC81JSkgIWltcG9ydGFudDtcclxuICAgIC8qIHBhZGRpbmctdG9wOiA2MHB4OyAqL1xyXG59XHJcblxyXG4vKiBOZXcgZGVzaWduIENTUyAgZnJvbSBIZXJlLi4uICovXHJcblxyXG4ubmFtZS1ib3gge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLm5hbWVzLXJlc3BvbnNlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5uYW1lcy1yZXNwb25zZSBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm5hbWVzLXJlc3BvbnNlIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaGVhZC1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OCwgMTAzLCAyMjEsIDAuMSk7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweCAzcHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uaGVhZC1idG4gaSB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICM1ODY3ZGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbn1cclxuXHJcbi5kZXZpZGVyIHtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4ucHJpY2V2YWx1ZXMge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcclxufVxyXG5cclxuLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgxKSxcclxuLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgyKSB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjFmMTtcclxufVxyXG5cclxuLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgzKSxcclxuLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lXHJcbn1cclxuXHJcbi5wcmljZXZhbHVlczpudGgtY2hpbGQoMiksXHJcbi5wcmljZXZhbHVlczpudGgtY2hpbGQoNCkge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcblxyXG4udy02MCB7XHJcbiAgICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLmRtcy1saW5rcyB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbn1cclxuXHJcbi5kbXMtbGlua3MgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnB5LTEwcHgge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZTA7XHJcbn1cclxuXHJcblxyXG4vKiA9PT09PT09PT0gUHJvZ3Jlc3MgQmFyID09PT09PT09PSAqL1xyXG5cclxuLnByb2dyZXNzX2JhciAucHJvLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDk3JSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggaHNsYSgwLCAwJSwgMCUsIDAuMSkgaW5zZXQ7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfYmFyX3RpdGxlIHtcclxuICAgIGNvbG9yOiBoc2woMjE4LCA0JSwgNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0yOHB4O1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfbnVtYmVyIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3MtYmFyLWlubmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgODglKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMXMgbGluZWFyIDBzO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDFweDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzLWJhci1pbm5lcjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC00cHg7XHJcbiAgICB0b3A6IC01cHg7XHJcbn1cclxuXHJcbi5iZy10b2RheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQyYmYwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5NX2ZzaXplIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjU2MjVyZW07XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4udGV4dC1SZWplY3RlZCB7XHJcbiAgICBjb2xvcjogI0U2NzQ3QSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC11bmRlckFwcHJvdmFsIHtcclxuICAgIGNvbG9yOiAjOThjN2JmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LUNvbXBsZXRlUmVqZWN0ZWQge1xyXG4gICAgY29sb3I6ICNEODNDM0MgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtdW5kZXJBcHAge1xyXG4gICAgY29sb3I6ICM0NDk1RDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtVG9kbyB7XHJcbiAgICBjb2xvcjogIzQ1RjQ5NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1Db21wbGV0ZWQge1xyXG4gICAgY29sb3I6ICM0MUQzN0IgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJlbGwtaWNvbltkYXRhLWNvdW50XTphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1jb3VudCk7XHJcbiAgICBmb250LXNpemU6IDQ1JTtcclxuICAgIHBhZGRpbmc6IDAuNmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogLjc1ZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC44NSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubWVudS1zdWItZHJvcGRvd24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNDc1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1MHB4IDAgcmdiKDgyIDYzIDEwNSAvIDE1JSk7XHJcbiAgICB6LWluZGV4OiAxMDU7XHJcbn1cclxuXHJcbi5rdC1zdWJoZWFkZXItLWVuYWJsZWQgLmt0LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmt0LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogaW5wdXQua3QtaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufSAqL1xyXG4ua3QtaW5wdXQge1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgLyogaGVpZ2h0OiAyNHB4OyAqL1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgY29sb3I6ICMzYzQwNDM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkYWRjZTA7XHJcbiAgICBwYWRkaW5nOiAwLjY1cmVtIDFyZW07XHJcbn1cclxuXHJcbi5rdC1pbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFhNzNlODtcclxufVxyXG5cclxuLnJlcGVhdC1kYXkuYWN0aXZlLFxyXG4ucmVwZWF0LW1vbnRoLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE3M2U4O1xyXG59XHJcblxyXG4ucmVwZWF0LWRheSxcclxuLnJlcGVhdC1tb250aCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNDtcclxuICAgIGNvbG9yOiAjODA4NjhiO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bmb2N1cyB7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbn1cclxuXHJcbi5kcm9wZm9jdXMuZHJvcGRvd24uc2hvdyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmM2Y0O1xyXG59XHJcblxyXG4jbXlzaWRlSW5mb2Jhcl9zY2hkIHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCxzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIixcIk5vdG8gQ29sb3IgRW1vamlcIjtcclxufVxyXG5cclxuLyogI215c2lkZUluZm9iYXJfc2NoZCBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIiwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZlxyXG59ICovXHJcblxyXG4uZHJvcGZvY3VzIC5kcm9wZG93bi1tZW51LnNob3cge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uZXZlLWljb25zIHtcclxuICAgIGNvbG9yOiAjNWY2MzY4O1xyXG59XHJcblxyXG4uZXZlLWljb25zIGkge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmNvbnRlbnQtbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LW1haW4uc2hvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnctMjAwIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnctMzAwIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmluZi1kZXQge1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgY29sb3I6ICM5Njk2OTY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LXNhbnMtc2VyaWYpO1xyXG59XHJcblxyXG46Om5nLWRlZXAgbmctc2VsZWN0IHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogd2lkdGggKi9cclxuXHJcbi5kcm9wZm9jdXMgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbn1cclxuXHJcblxyXG4vKiBUcmFjayAqL1xyXG5cclxuLmRyb3Bmb2N1cyAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG5cclxuLmRyb3Bmb2N1cyAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2OTlmZjtcclxuICAgIGJvcmRlci1jb2xvcjogIzM2OTlmZjtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0IHtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTIuNWVtO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCclM2UlM2NwYXRoIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmZmJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMycgZD0nTTYgMTBsMyAzbDYtNicvJTNlJTNjL3N2ZyUzZVwiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWxhYmVsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQge1xyXG4gICAgd2lkdGg6IDEuMTQzZW07XHJcbiAgICBoZWlnaHQ6IDEuMTQzZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjE3ODVlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhZGI1YmQ7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xyXG4gICAgcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCclM2UlM2NwYXRoIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmZmJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMycgZD0nTTYgMTBsMyAzbDYtNicvJTNlJTNjL3N2ZyUzZVwiKTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCclM2UlM2NwYXRoIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmZmJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMycgZD0nTTYgMTBsMyAzbDYtNicvJTNlJTNjL3N2ZyUzZVwiKTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM2UlM2NjaXJjbGUgcj0nMicgZmlsbD0nJTIzZmZmJy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06aW5kZXRlcm1pbmF0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdC1mb3JtLWNoZWNrLWlucHV0LWluZGV0ZXJtaW5hdGUtYmctY29sb3IpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jdC1mb3JtLWNoZWNrLWlucHV0LWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnJTNlJTNjcGF0aCBmaWxsPSdub25lJyBzdHJva2U9JyUyM2ZmZicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzMnIGQ9J002IDEwaDgnLyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0OmRpc2FibGVkIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XHJcbiAgICBmaWx0ZXI6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0OmRpc2FibGVkfi5mb3JtLWNoZWNrLWxhYmVsLFxyXG4uZm9ybS1jaGVjay1pbnB1dFtkaXNhYmxlZF1+LmZvcm0tY2hlY2stbGFiZWwge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2gge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVlbTtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0IHtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTIuNWVtO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM2UlM2NjaXJjbGUgcj0nMycgZmlsbD0nJTIzOGI5NmEwJy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG4gICAgLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0IHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnJTNlJTNjY2lyY2xlIHI9JzMnIGZpbGw9JyUyMzhiOTZhMCcvJTNlJTNjL3N2ZyUzZVwiKTtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM2UlM2NjaXJjbGUgcj0nMycgZmlsbD0nJTIzZmZmJy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG59XHJcblxyXG5cclxuLmNhbGVuZGFyIHtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmNhbGVuZGFyLXdyYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjc1ZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjVlbTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMDYyNWVtIDAuMjVlbSByZ2IoMCAyMCA1MCAvIDIwJSksIDAgMC41ZW0gMC41ZW0gMC4xMjVlbSByZ2IoMCAyMCA1MCAvIDEwJSk7XHJcbn1cclxuXHJcbi5jYWxlbmRhci13cmFwIHtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMTVyZW07XHJcbn1cclxuXHJcbi5kYXktdGl0bGUge1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICAgIGhlaWdodDogMy41ZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDAuNjVlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNjI1ZW07XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgICAgIGluc2V0IDAgLTAuODc1ZW0gI2ZmZixcclxuICAgICAgICBpbnNldCAwIC0xZW0gcmdiYSgwLCAyMCwgNTAsIDAuMSk7XHJcbn1cclxuXHJcbi5kYXkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbn1cclxuXHJcbi5kYXk6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLyogLmRheTpmb2N1cyAuZGF5LW51bWJlcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIGJvcmRlcjogMC4yNWVtIHNvbGlkICMwMjg4ZDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfSBcclxuICBcclxuICAuZGF5LmFjdGl2ZS1hOmZvY3VzIC5kYXktbnVtYmVyOjphZnRlcixcclxuICAuZGF5LmFjdGl2ZS1iOmZvY3VzIC5kYXktbnVtYmVyOjphZnRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9Ki9cclxuLmRheS1udW1iZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuLmRheS50b2RheSBzcGFuLmRheS1udW1iZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDAuMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJlbSAjMzc0NzRmO1xyXG59XHJcblxyXG4uZGF5LnByZXYtbW9uIC5kYXktbnVtYmVyLFxyXG4uZGF5Lm5leHQtbW9uIC5kYXktbnVtYmVyLFxyXG4uZGF5LnByZXYtbW9uOmhvdmVyIC5kYXktbnVtYmVyLFxyXG4uZGF5Lm5leHQtbW9uOmhvdmVyIC5kYXktbnVtYmVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5kYXkudG9kYXk6Zm9jdXMgLmRheS1udW1iZXI6OmFmdGVyIHtcclxuICAgIHdpZHRoOiAxMDIlO1xyXG4gICAgaGVpZ2h0OiAxMDIlO1xyXG59XHJcblxyXG4uZGF5OmhvdmVyIHNwYW4uZGF5LW51bWJlciB7XHJcbiAgICBjb2xvcjogIzAyODhkMTtcclxufVxyXG5cclxuLmRheTpmaXJzdC1jaGlsZCxcclxuLmRheTpsYXN0LWNoaWxkIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5kYXkucmFuZ2Uge1xyXG4gICAgY29sb3I6ICMwMjg4ZDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmNWZlO1xyXG59XHJcblxyXG4uZGF5LmFjdGl2ZS1hIHNwYW4uZGF5LW51bWJlcixcclxuLmRheS5hY3RpdmUtYiBzcGFuLmRheS1udW1iZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNBOUY0O1xyXG59XHJcblxyXG4uZGF5OmZpcnN0LWNoaWxkLFxyXG4uZGF5Omxhc3QtY2hpbGQge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLnJlc2V0YnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDAuNjg3NWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA2MjVlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzQ3NEY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjVlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhbGVuZGFyLXdyYXAgLnJlc2V0YnRuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucmVzZXRidG46aG92ZXIge1xyXG4gICAgY29sb3I6ICNlZGUzZTM7XHJcbn1cclxuXHJcbi5kYXkucHJldi1tb24sXHJcbi5kYXkucHJldi1tb246Zm9jdXMsXHJcbi5kYXkubmV4dC1tb24sXHJcbi5kYXkubmV4dC1tb246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5kYXkucHJldi1tb246Zm9jdXMgLmRheS1udW1iZXIsXHJcbi5kYXktbnVtYmVyOmZvY3VzLFxyXG4uZGF5Lm5leHQtbW9uOmZvY3VzIC5kYXktbnVtYmVyIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG5cclxuXHJcbjo6bmctZGVlcCBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLnNlbGVjdGVkPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQsXHJcbjo6bmctZGVlcCAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC5zZWxlY3RlZDpob3Zlcj4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50LFxyXG46Om5nLWRlZXAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwuc2VsZWN0ZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE4NGU4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwuc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhODRlOCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlXHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC5zZWxlY3RlZGludmFsaWQ+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudCxcclxuOjpuZy1kZWVwIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLnNlbGVjdGVkaW52YWxpZDpob3Zlcj4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50LFxyXG46Om5nLWRlZXAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwuc2VsZWN0ZWRpbnZhbGlkPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4MjgxYSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLnNlbGVjdGVkaW52YWxpZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgyODFhICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCVcclxufVxyXG5cclxuLmRyb3AtY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDMwcmVtXHJcbn1cclxuXHJcbi8qIC5kZW1vLWlubGluZS1jYWxlbmRhci1jYXJkIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufSAqL1xyXG46Om5nLWRlZXAgLm1hdC1jYWxlbmRhci1jb250cm9scyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5kZW1vLWlubGluZS1jYWxlbmRhci1jYXJkIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLndjLWN1cyB7XHJcbiAgICB3aWR0aDogNDglO1xyXG59XHJcblxyXG4ud2lkdGgtY3VzIHtcclxuICAgIHdpZHRoOiA1MiU7XHJcbn1cclxuXHJcbi5yZXAtY2hrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5nYXAtMTUge1xyXG4gICAgZ2FwOiAxNXB4O1xyXG59XHJcblxyXG4uYnRuLXRzayB7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMjgwbXMgY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSksIGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMnB4IDBweCByZ2IoNjAgNjQgNjcgLyAzMCUpLCAwcHggMXB4IDNweCAxcHggcmdiKDYwIDY0IDY3IC8gMTUlKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IDBweCByZ2IoNjAgNjQgNjcgLyAzMCUpLCAwcHggMXB4IDNweCAxcHggcmdiKDYwIDY0IDY3IC8gMTUlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MDIpO1xyXG4gICAgd2lkdGg6IDE0NXB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0OHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDhweDtcclxufVxyXG5cclxuLnN2Zy1pY29uLnN2Zy1pY29uLXByaW1hcnkgc3ZnIGcgW2ZpbGxdIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcclxuICAgIGZpbGw6ICMzNjk5RkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN2Zy1pY29uLnN2Zy1pY29uLTJ4IHN2ZyB7XHJcbiAgICBoZWlnaHQ6IDJyZW0gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAycmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXdyYXAge1xyXG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aW1lLXNsdC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBwYWRkaW5nOiA3cHggOXB4IDdweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbn1cclxuXHJcbnAudGltZS1zbHQtdGltZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuc3Bhbi50aW1lLXNsdC1tZCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcblxyXG4gICAgY29sb3I6ICM4OTg5ODk7XHJcbn1cclxuXHJcbi53cC0xMDAge1xyXG4gICAgLyogcGFkZGluZzogNXB4OyAqL1xyXG4gICAgd2lkdGg6IDc0cHg7XHJcbiAgICBtYXJnaW46IDEwcHggNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGltZS1zbHQtY2FyZC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2YjRmNztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDRweCA1cHggIzZkYjZmNTYxO1xyXG59XHJcblxyXG4udGltZS1zbHQtY2FyZC5hY3RpdmUgc3BhbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRpbWU6aG92ZXIge1xyXG4gICAgY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLnRpbWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FlYjJiNTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDRweCA1cHggIzZkYjZmNTYxO1xyXG59XHJcbi50YWJsZS10aW1le1xyXG4gICAgbWF4LWhlaWdodDogNDUwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4udGFibGUtdGltZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4udGFibGUtdGltZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRhYmxlLXRpbWU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzFjOWU4MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZmZmO1xyXG59XHJcbi53LW1heGN7XHJcbiAgICB3aWR0aDogMTMycHg7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuLmJhZGdlLmJhZGdlLWxpZ2h0LXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsMTAzLDI0MCwuMTIpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmJhZGdlLmJhZGdlLWxpZ2h0LXByaW1hcnkge1xyXG4gICAgY29sb3I6ICM3MzY3ZjAhaW1wb3J0YW50O1xyXG59XHJcbi5kcm9wLWN1c3tcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDhweCAxMHB4IDFweCByZ2IoMCAwIDAgLyAxNCUpLCAwcHggM3B4IDE0cHggMnB4IHJnYigwIDAgMCAvIDEyJSksIDBweCA1cHggNXB4IC0zcHggcmdiKDAgMCAwIC8gMjAlKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAxcHggcmdiKDAgMCAwIC8gMTQlKSwgMHB4IDNweCAxNHB4IDJweCByZ2IoMCAwIDAgLyAxMiUpLCAwcHggNXB4IDVweCAtM3B4IHJnYigwIDAgMCAvIDIwJSk7XHJcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuLmRyb3AtY3VzIGEuZHJvcGRvd24taXRlbXtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCxzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIixcIk5vdG8gQ29sb3IgRW1vamlcIjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XHJcbiAgICBjb2xvcjogIzIyMjtcclxufVxyXG4uZHJvcC1jdXMgYS5kcm9wZG93bi1pdGVtOmhvdmVye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZjFmM2Y0O1xyXG59XHJcbi53LW1hdGMge1xyXG4gICAgd2lkdGg6IDQ3LjUlO1xyXG59XHJcbi5vcGVuX3NpZGViYXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4uc2VjdGlvbi0xe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA5MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5AbWVkaWEgU2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuXHJcbi50YWJsZS10aW1lIHtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxufVxyXG5AbWVkaWEgU2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuXHJcbi50YWJsZS10aW1lIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxufVxyXG5AbWVkaWEgU2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcclxuXHJcbi53cC0xMDAge1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBtYXJnaW46IDEwcHggNXB4O1xyXG59XHJcbi50aW1lLXNsdC1jYXJke1xyXG4gICAgcGFkZGluZzogN3B4IDlweCA3cHggMTBweDtcclxufVxyXG59XHJcbkBtZWRpYSBTY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG5cclxuICAgIC5vcGVuX3NpZGViYXIge1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIFNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgICAub3Blbl9zaWRlYmFyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_8__["ProjectTypeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] }, { type: src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] }, { type: src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_12__["LinkService"] }, { type: src_app_Services_calender_service__WEBPACK_IMPORTED_MODULE_13__["CalenderService"] }]; }, { calendar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatCalendar"]]
        }] }); })();


/***/ }),

/***/ "./src/app/_LayoutDashboard/dashboard/dashboard.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/_LayoutDashboard/dashboard/dashboard.module.ts ***!
  \****************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/_LayoutDashboard/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/_LayoutDashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm2015/kolkov-angular-editor.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/material-module */ "./src/app/material-module.ts");





















// import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__["FullCalendarModule"].registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_7__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_8__["default"],
    _fullcalendar_list__WEBPACK_IMPORTED_MODULE_9__["default"],
]);
class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__["FullCalendarModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_18__["MaterialModule"],
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_17__["AngularEditorModule"]
            // NgxDaterangepickerMd.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__["FullCalendarModule"],
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        src_app_material_module__WEBPACK_IMPORTED_MODULE_18__["MaterialModule"],
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_17__["AngularEditorModule"]
        // NgxDaterangepickerMd.forRoot()
    ], exports: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                    _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__["FullCalendarModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_18__["MaterialModule"],
                    _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_17__["AngularEditorModule"]
                    // NgxDaterangepickerMd.forRoot()
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
                exports: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/_Models/calender-dto.ts":
/*!*****************************************!*\
  !*** ./src/app/_Models/calender-dto.ts ***!
  \*****************************************/
/*! exports provided: CalenderDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderDTO", function() { return CalenderDTO; });
class CalenderDTO {
}


/***/ }),

/***/ "./src/app/_Services/calender.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_Services/calender.service.ts ***!
  \***********************************************/
/*! exports provided: CalenderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderService", function() { return CalenderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Models_calender_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_Models/calender-dto */ "./src/app/_Models/calender-dto.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _apiurl_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apiurl.service */ "./src/app/_Services/apiurl.service.ts");





class CalenderService {
    constructor(http, commonUrl) {
        this.http = http;
        this.commonUrl = commonUrl;
        this.rootUrl = this.commonUrl.apiurl;
        this.obj_CalenderDTO = new _Models_calender_dto__WEBPACK_IMPORTED_MODULE_1__["CalenderDTO"];
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
    NewInsertCalender(obj) {
        this.obj_CalenderDTO.ScheduleJson = obj.ScheduleJson;
        return this.http.post(this.rootUrl + "TestAPI/NewInsertSchedule_Calender", this.obj_CalenderDTO);
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
CalenderService.ɵfac = function CalenderService_Factory(t) { return new (t || CalenderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_apiurl_service__WEBPACK_IMPORTED_MODULE_3__["ApiurlService"])); };
CalenderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalenderService, factory: CalenderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalenderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _apiurl_service__WEBPACK_IMPORTED_MODULE_3__["ApiurlService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_Services/notification.service.ts":
/*!***************************************************!*\
  !*** ./src/app/_Services/notification.service.ts ***!
  \***************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");



class NotificationService {
    //message:string;title:string;
    constructor(toastr) {
        this.toastr = toastr;
    }
    showSuccess(message, title) {
        this.toastr.success(message, title, {
            closeButton: true
        });
    }
    showError(message, title) {
        this.toastr.error(message, title, {
            closeButton: true,
        });
    }
    showInfo(message, title) {
        this.toastr.info(message, title, {
            closeButton: true,
        });
    }
    showWarning(message, title) {
        this.toastr.warning(message, title, {
            closeButton: true
        });
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=_LayoutDashboard-dashboard-dashboard-module.js.map