"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["src_app__LayoutDashboard_fileview_fileview_module_ts"],{

/***/ 82459:
/*!**********************************************************************!*\
  !*** ./src/app/_LayoutDashboard/fileview/fileview-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileviewRoutingModule": () => (/* binding */ FileviewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _fileview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fileview.component */ 41291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _fileview_component__WEBPACK_IMPORTED_MODULE_0__.FileviewComponent }];
class FileviewRoutingModule {
}
FileviewRoutingModule.ɵfac = function FileviewRoutingModule_Factory(t) { return new (t || FileviewRoutingModule)(); };
FileviewRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FileviewRoutingModule });
FileviewRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FileviewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 41291:
/*!*****************************************************************!*\
  !*** ./src/app/_LayoutDashboard/fileview/fileview.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileviewComponent": () => (/* binding */ FileviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ 63940);
/* harmony import */ var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-doc-viewer */ 89300);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 68562);











function FileviewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileviewComponent_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.download(ctx_r6.src, ctx_r6.filename)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 37)(5, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Download ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function FileviewComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileviewComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.DownloadHistory()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 37)(4, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " History ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function FileviewComponent_ng_container_3_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("of ", ctx_r10.pdf.numPages, "");
} }
function FileviewComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40)(2, "div", 10)(3, "div", 10)(4, "div", 41)(5, "div", 42)(6, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileviewComponent_ng_container_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.incrementZoom(-0.1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "svg", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "circle", 45)(9, "line", 46)(10, "line", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 48)(12, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FileviewComponent_ng_container_3_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.zoom = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Input is not a number!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileviewComponent_ng_container_3_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.incrementZoom(0.1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "svg", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "circle", 45)(18, "line", 46)(19, "line", 50)(20, "line", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 42)(22, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileviewComponent_ng_container_3_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.incrementPage(-1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field", 48)(25, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FileviewComponent_ng_container_3_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.page = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Input is not a number!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, FileviewComponent_ng_container_3_span_28_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileviewComponent_ng_container_3_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.incrementPage(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "pdf-viewer", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function FileviewComponent_ng_container_3_Template_pdf_viewer_pageChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.page = $event); })("after-load-complete", function FileviewComponent_ng_container_3_Template_pdf_viewer_after_load_complete_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.afterLoadComplete($event)); })("on-progress", function FileviewComponent_ng_container_3_Template_pdf_viewer_on_progress_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.onProgress($event)); })("page-rendered", function FileviewComponent_ng_container_3_Template_pdf_viewer_page_rendered_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.pageRendered($event)); })("pages-initialized", function FileviewComponent_ng_container_3_Template_pdf_viewer_pages_initialized_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.pageInitialized($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.zoom);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.pdf);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.src)("page", ctx_r2.page)("rotation", ctx_r2.rotation)("original-size", ctx_r2.originalSize)("show-all", ctx_r2.showAll)("fit-to-page", ctx_r2.fitToPage)("zoom", ctx_r2.zoom)("zoom-scale", ctx_r2.zoomScale)("stick-to-page", ctx_r2.stickToPage)("render-text", ctx_r2.renderText)("external-link-target", "blank")("autoresize", ctx_r2.autoresize)("show-borders", false);
} }
function FileviewComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngx-doc-viewer", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("url", ctx_r3.src)("viewer", ctx_r3.viewer);
} }
function FileviewComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40)(2, "div", 10)(3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r4.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function FileviewComponent_ng_container_6_div_5_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileviewComponent_ng_container_6_div_5_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.download(ctx_r26.src, ctx_r26.filename)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Download File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FileviewComponent_ng_container_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Preview Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " The File is not available for preview currently. Please download the file to view. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FileviewComponent_ng_container_6_div_5_span_5_Template, 4, 0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r23.viewer != "" && ctx_r23.IsCommunicarionMemoDownload == true);
} }
function FileviewComponent_ng_container_6_div_6_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileviewComponent_ng_container_6_div_6_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r29.download(ctx_r29.src, ctx_r29.filename)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Download File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FileviewComponent_ng_container_6_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Access Denied");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " You do not have access to view the file. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FileviewComponent_ng_container_6_div_6_span_5_Template, 4, 0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r24.viewer != "" && ctx_r24.IsCommunicarionMemoDownload == true);
} }
function FileviewComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 56)(2, "div", 57)(3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FileviewComponent_ng_container_6_div_5_Template, 6, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FileviewComponent_ng_container_6_div_6_Template, 6, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.invalid == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.invalid == true);
} }
class FileviewComponent {
    constructor(route, service) {
        this.route = route;
        this.service = service;
        //url:string;
        this.pdfSrc = "";
        this.page = 1;
        this.rotation = 0;
        this.zoom = 0.5;
        this.zoomScale = 'page-width';
        this.originalSize = false;
        this.renderText = true;
        this.isLoaded = false;
        this.stickToPage = false;
        this.showAll = true;
        this.autoresize = true;
        this.fitToPage = false;
        this.isOutlineShown = false;
        this.pdfQuery = '';
        this.mobile = false;
        this._IsConfidential = 'false';
        this.invalid = false;
        this._LoginUserId = this.Current_user_ID;
    }
    ngOnInit() {
        this.Current_user_ID = localStorage.getItem('EmpNo');
        this.IsCommunicarionMemoDownload = localStorage.getItem('IsCommunicationDownload');
        var decoder = new TextDecoder();
        this.url_project_code = this.route.snapshot.params['projectcode'];
        alert(this.url_project_code);
        let surl = this.route.snapshot.params['url'];
        this.route.queryParams.subscribe(params => {
            let surl = params['url'];
            const arr = surl.split(',').map(element => {
                return Number(element);
            });
            this.src = decoder.decode(new Uint8Array(arr));
            let uid = params['uid'];
            const arruid = uid.split(',').map(element => {
                return Number(element);
            });
            if (decoder.decode(new Uint8Array(arruid)).toString() != this.Current_user_ID.toString()) {
                this.viewer = '';
                this.invalid = true;
                alert('Invalid User');
                return false;
            }
            let type = params['type'];
            let officetext = ".ppt, .pptx, .doc, .docx, .xls, .xlsx";
            let office = officetext.includes(type.toLowerCase());
            let googletext = ".txt,.css, .html, .php, .c, .cpp, .h, .hpp, .js, .pages, .ai, .psd, .tiff, .dxf, .svg, .eps, .ps, .ttf, .xps, .zip, .rar";
            let google = googletext.includes(type.toLowerCase());
            let pdftext = ".pdf, .application/pdf";
            let pdf = pdftext.includes(type.toLocaleLowerCase());
            let Imagetext = ".jpg, .jpeg, .webp, .avif, .jfif, .svg, .ico, .gif .image/jpg, .image/png, .png";
            let Image = Imagetext.includes(type.toLocaleLowerCase());
            // let Audiotext = ".mp3, .wav, .ogg"
            // let Audio = Audiotext.includes(contenttype.toLocaleLowerCase());
            // let Videotext = ".mp4, .mov, .wmv, .avi, .webm"
            // let Video = Videotext.includes(contenttype.toLocaleLowerCase());
            if (office) {
                this.viewer = "office";
            }
            else if (google) {
                this.viewer = "google";
            }
            else if (pdf) {
                this.viewer = "pdf";
            }
            else if (Image) {
                this.viewer = "image";
            }
            // else if (Audio) {
            //   this.viewer = "Audio";
            // }
            // else if (Video) {
            //   this.viewer = "Video";
            // }
            else {
                this.viewer = "";
            }
            let scontenttype = '';
            this.filename = params['filename'];
            this.filename = this.filename.replace(/%26/g, "&");
            console.log(this.filename, "filename123");
            if (this.viewer == null || this.viewer == '' || this.viewer == undefined) {
                this.service.PathExtention(this.src).subscribe(da => {
                    scontenttype = da["ContentType"];
                    let contenttype = scontenttype; //decoder.decode(new Uint8Array(arrct));
                    let officetext = ".ppt, .pptx, .doc, .docx, .xls, .xlsx";
                    let office = officetext.includes(contenttype.toLowerCase());
                    let googletext = ".txt,.css, .html, .php, .c, .cpp, .h, .hpp, .js, .pages, .ai, .psd, .tiff, .dxf, .svg, .eps, .ps, .ttf, .xps, .zip, .rar";
                    let google = googletext.includes(contenttype.toLowerCase());
                    let pdftext = ".pdf, .application/pdf";
                    let pdf = pdftext.includes(contenttype.toLocaleLowerCase());
                    let Imagetext = ".jpg, .jpeg, .webp, .avif, .jfif, .svg, .ico, .gif .image/jpg, .image/png, .png";
                    let Image = Imagetext.includes(contenttype.toLocaleLowerCase());
                    // let Audiotext = ".mp3, .wav, .ogg"
                    // let Audio = Audiotext.includes(contenttype.toLocaleLowerCase());
                    // let Videotext = ".mp4, .mov, .wmv, .avi, .webm"
                    // let Video = Videotext.includes(contenttype.toLocaleLowerCase());
                    if (office) {
                        this.viewer = "office";
                    }
                    else if (google) {
                        this.viewer = "google";
                    }
                    else if (pdf) {
                        this.viewer = "pdf";
                    }
                    else if (Image) {
                        this.viewer = "image";
                    }
                    // else if (Audio) {
                    //   this.viewer = "Audio";
                    // }
                    // else if (Video) {
                    //   this.viewer = "Video";
                    // }
                    else {
                        this.viewer = "";
                    }
                });
            }
        });
    }
    incrementZoom(amount) {
        this.zoom += amount;
    }
    incrementPage(amount) {
        this.page += amount;
    }
    /**
    * Get pdf information after it's loaded
    * @param pdf pdf document proxy
    */
    afterLoadComplete(pdf) {
        this.pdf = pdf;
        this.loadOutline();
    }
    /**
     * Get outline
     */
    loadOutline() {
        this.pdf.getOutline().then((outline) => {
            this.outline = outline;
        });
    }
    rotate(angle) {
        this.rotation += angle;
    }
    /**
     * Pdf loading progress callback
     * @param progressData pdf progress data
     */
    onProgress(progressData) {
        console.log(progressData);
        this.progressData = progressData;
        this.isLoaded = progressData.loaded >= progressData.total;
        this.error = null; // clear error
    }
    getInt(value) {
        return Math.round(value);
    }
    /**
     * Navigate to destination
     * @param destination pdf navigate to
     */
    // navigateTo(destination: any) {
    //   this.pdfComponent.pdfLinkService.goToDestination(destination);
    // }
    /**
     * Scroll view
     */
    // scrollToPage() {
    //   this.pdfComponent.pdfViewer.scrollPageIntoView({
    //     pageNumber: 3
    //   });
    // }
    /**
     * Page rendered callback, which is called when a page is rendered (called multiple times)
     *
     * @param e custom event
     */
    pageRendered(e) {
        console.log('(page-rendered)', e);
    }
    /**
     * Page initialized callback.
     *
     * @param {CustomEvent} e
     */
    pageInitialized(e) {
        console.log('(page-initialized)', e);
    }
    // searchQueryChanged(newQuery: string) {
    //   if (newQuery !== this.pdfQuery) {
    //     this.pdfQuery = newQuery;
    //     this.pdfComponent.pdfFindController.executeCommand('find', {
    //       query: this.pdfQuery,
    //       highlightAll: true
    //     });
    //   } else {
    //     this.pdfComponent.pdfFindController.executeCommand('findagain', {
    //       query: this.pdfQuery,
    //       highlightAll: true
    //     });
    //   }
    // }
    onResize(event) {
        if (event.target.innerWidth <= 768)
            this.mobile = true;
        else
            this.mobile = false;
    }
    download(url, filename) {
        fetch(url).then(function (t) {
            return t.blob().then((b) => {
                var a = document.createElement("a");
                a.href = URL.createObjectURL(b);
                a.setAttribute("download", filename);
                a.click();
            });
        });
    }
    // HistoryList: any;
    DownloadHistory() {
        alert(this.Current_user_ID);
        // this._obj.MailDocId = this.MailDocId;
        // this._obj.OrganizationId = this._LoginUserId;
        // this._obj.AnnouncementDocId = this._AnnouncementDocId;
        // this._obj.MailId = this._mailid;
        // this.newmemoService.HistoryDownload(this._obj).subscribe(
        //   data => {
        //     this._obj = data as InboxDTO;
        //     this.HistoryList = JSON.parse(this._obj.RequestJson);
        //     this.HistoryList.forEach(element => {
        //       element.DatesJson = JSON.parse(element.DatesJson);
        //     });
        //     // console.log(this.HistoryList, "HistoryList");
        //   })
    }
    searchhistory() {
        this.HistorySearch = "";
    }
}
FileviewComponent.ɵfac = function FileviewComponent_Factory(t) { return new (t || FileviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_0__.ProjectTypeService)); };
FileviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FileviewComponent, selectors: [["app-fileview"]], hostBindings: function FileviewComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function FileviewComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 46, vars: 7, consts: [["class", "", 4, "ngIf"], ["class", "btn btn-info mt-3", "href", "javascript:void(0)", "data-target", "#open_modal", "data-toggle", "modal", "aria-haspopup", "true", "aria-expanded", "false", 3, "click", 4, "ngIf"], [4, "ngIf"], ["id", "open_modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content", "border-0"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "modal-body"], [1, ""], [1, "kt-inbox__search", "mb-3"], ["id", "search-grp", 1, "input-group", "group-active"], [1, "input-group-prepend"], [1, "input-group-text", "px-2", "py-0"], ["type", "button", "role", "button", "id", "srch-btn", "data-tooltip", "Search", "aria-label", "Search", 1, "srch-btns", "p-0"], ["focusable", "false", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"], ["d", "M0,0h24v24H0V0z", "fill", "none"], ["type", "text", "placeholder", "Search", "autocomplete", "off", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text", "p-0", "py-0"], ["type", "button", "role", "button", "id", "clrr-btn", "data-tooltip", "Clear Search", "aria-label", "Clear Search", 1, "srch-btns", "ml-1", 3, "click"], ["d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"], ["d", "M0 0h24v24H0z", "fill", "none"], [1, "card"], [1, "card-header", "d-none", "bg-white", "d-flex-center"], [1, "crd-txt", "text-info", "flex-1"], [1, "svg-icns"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "-2 0 22 22", "width", "16", "height", "16", "fill", "currentColor"], ["d", "M2.328 6.868l7.017 6.253a1 1 0 0 0 1.33 0l7.009-6.246-7.137-4.665a1 1 0 0 0-1.094 0L2.328 6.868zM18 7.082v2.19l-5.994 5.342a3 3 0 0 1-3.992 0L2 9.254V7.083 18h16V7.082zM.906 5.408L8.359.536a3 3 0 0 1 3.282 0l7.453 4.872A2 2 0 0 1 20 7.082V18a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7.082a2 2 0 0 1 .906-1.674z"], [1, "card-body", "crd-list", "scroll-y", "p-0"], [1, "modal-footer"], [1, "dropdown-actions"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", "btn-xs"], [1, "btn", "btn-info", "float-left", "mb", "mt-3", "mx-3", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-download"], ["d", "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"], ["d", "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"], ["href", "javascript:void(0)", "data-target", "#open_modal", "data-toggle", "modal", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-info", "mt-3", 3, "click"], [1, "pt-3", "px-3"], [1, "d-flex", "justify-content-end"], [1, "mb"], ["mat-button", "", "type", "button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["x1", "8", "y1", "11", "x2", "14", "y2", "11"], [1, "page-number"], ["matInput", "", "type", "number", "placeholder", "Zoom", "pattern", "-?[0-9]*(\\.[0-9]+)?", 3, "ngModel", "ngModelChange"], ["x1", "11", "y1", "8", "x2", "11", "y2", "14"], ["matInput", "", "type", "number", "placeholder", "Page", "pattern", "-?[0-9]*(\\.[0-9]+)?", 3, "ngModel", "ngModelChange"], [2, "width", "100%", "height", "calc(100vh - 90px)", 3, "src", "page", "rotation", "original-size", "show-all", "fit-to-page", "zoom", "zoom-scale", "stick-to-page", "render-text", "external-link-target", "autoresize", "show-borders", "pageChange", "after-load-complete", "on-progress", "page-rendered", "pages-initialized"], [2, "width", "100%", "height", "calc(100vh - 55px)", 3, "url", "viewer"], [1, "ion-img-viewer"], [3, "src"], [1, "pt-3", "px-3", "no-prevw", "d-flex"], [1, "d-flex", "align-items-center", "flex-column", "m-auto"], [1, "shake2"], ["src", "assets/images/doc-brek.png"], ["class", "text-center", 4, "ngIf"], [1, "text-center"], ["class", "btn btn-info mt-3", 3, "click", 4, "ngIf"], [1, "btn", "btn-info", "mt-3", 3, "click"], [1, "material-icons", "p-0", "mr-1", "fs-4"]], template: function FileviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FileviewComponent_div_1_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FileviewComponent_a_2_Template, 6, 0, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FileviewComponent_ng_container_3_Template, 32, 16, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FileviewComponent_ng_container_4_Template, 4, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FileviewComponent_ng_container_5_Template, 5, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FileviewComponent_ng_container_6_Template, 7, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Attachment Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "span", 14)(20, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "path", 17)(23, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FileviewComponent_Template_input_ngModelChange_24_listener($event) { return ctx.HistorySearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 20)(26, "span", 21)(27, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileviewComponent_Template_button_click_27_listener() { return ctx.searchhistory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "path", 23)(30, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 25)(32, "div", 26)(33, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Read By");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 10)(36, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 32)(43, "div", 33)(44, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewer != "" && ctx.IsCommunicarionMemoDownload == "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invalid == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewer == "pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewer == "office" || ctx.viewer == "google");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewer == "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewer == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.HistorySearch);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__.PdfViewerComponent, ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_5__.NgxDocViewerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput], styles: [".ion-img-viewer[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    text-align: center;\r\n    \r\n    background: #edf0f7;\r\n}\r\n\r\n.ion-img-viewer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-height: 100vh;\r\n    max-width: 100%;\r\n    margin: auto;\r\n    object-fit: cover;\r\n    object-position: bottom;\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\nmat-toolbar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 100;\r\n}\r\n\r\n.select-file__container[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.select-file__container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.page-number[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n}\r\n\r\n.mb[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n}\r\n\r\npdf-viewer[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n    color: #ff4146;\r\n}\r\n\r\n#progress[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    width: 100px;\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#progress[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%], #progress[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\r\n    height: 20px;\r\n}\r\n\r\n#progress[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\r\n    background-color: #e3e3e3;\r\n}\r\n\r\n#progress[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\r\n    width: 0;\r\n    max-width: 100%;\r\n    background-color: #3f51b5;\r\n    transition: .5s width;\r\n}\r\n\r\n.outline-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.outline-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #ea1f62;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n}\r\n\r\nmat-drawer[_ngcontent-%COMP%] {\r\n    width: 320px;\r\n    padding: 12px;\r\n}\r\n\r\nmat-drawer-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 64px;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n}\r\n\r\npdf-viewer[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    width: 284px;\r\n    text-align: left;\r\n}\r\n\r\n.title.mob[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\na.button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.no-prevw[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n    background: #fff;\r\n}\r\n\r\n.shake2[_ngcontent-%COMP%] {\r\n    animation-name: wobble;\r\n    -webkit-animation-duration: 0.95s;\r\n    -webkit-animation-timing-function: linear;\r\n    -webkit-transform-origin: 50% 100%;\r\n  }\r\n\r\n\r\n\r\n@keyframes wobble {\r\n    0% {\r\n      transform: none;\r\n    }\r\n    15% {\r\n      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\r\n    }\r\n    30% {\r\n      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\r\n    }\r\n    45% {\r\n      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\r\n    }\r\n    60% {\r\n      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\r\n    }\r\n    75% {\r\n      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\r\n    }\r\n    100% {\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n.usr-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: 8px 0px 8px 0px;\r\n    padding-top: 0;\r\n    gap: 8px;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n}\r\n\r\n.usr-item[_ngcontent-%COMP%]:not(:first-child) {\r\n    border-top: 1px solid #ebedf2;\r\n    padding-top: 8px;\r\n}\r\n\r\n.usr-detail[_ngcontent-%COMP%]{\r\n    line-height: 1;\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%]{\r\n    height: 34px;\r\n    width: 34px;\r\n    border-radius: 50%;\r\n    position: relative;\r\n}\r\n\r\n.usr-img[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    transition: opacity .15s ease-out;\r\n}\r\n\r\n.user-name[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: #111b21;\r\n}\r\n\r\n.read-time[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 20px;\r\n    color: #667781;\r\n}\r\n\r\nspan.svg-icns[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.svg-icns[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n  width: 14px;\r\n  height: 14px;\r\n}\r\n\r\n.cate-icns[_ngcontent-%COMP%]{\r\n  width: 14px;\r\n  height: 14px;\r\n}\r\n\r\n.dwn-cnt[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border: 1px solid #9886eb;\r\n  padding: 0px 4px;\r\n  color: #747891;\r\n  cursor: auto;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 3px;\r\n}\r\n\r\na.dwn-cnt[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.clp-dwn[_ngcontent-%COMP%]{\r\n  color: #9886eb;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTs7Ozs7OztHQU9HOztBQUVIO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBRUksc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyx5Q0FBeUM7SUFDekMsa0NBQWtDO0VBQ3BDOztBQUNBOzs7S0FHRzs7QUErQkg7SUFDRTtNQUVFLGVBQWU7SUFDakI7SUFDQTtNQUVFLDJEQUEyRDtJQUM3RDtJQUNBO01BRUUseURBQXlEO0lBQzNEO0lBQ0E7TUFFRSwyREFBMkQ7SUFDN0Q7SUFDQTtNQUVFLHlEQUF5RDtJQUMzRDtJQUNBO01BRUUsMERBQTBEO0lBQzVEO0lBQ0E7TUFFRSxlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUY7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQzs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImZpbGV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWltZy12aWV3ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmMGY3O1xyXG59XHJcblxyXG4uaW9uLWltZy12aWV3ZXIgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IGJvdHRvbTtcclxufVxyXG5cclxuLmltZy1jb250YWluZXJ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uaW1nLWNvbnRhaW5lciBpbWd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLyogLm5nMi1wZGYtdmlld2VyLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59ICovXHJcblxyXG5tYXQtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5zZWxlY3QtZmlsZV9fY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0LWZpbGVfX2NvbnRhaW5lciBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5wYWdlLW51bWJlciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLm1iIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbnBkZi12aWV3ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogI2ZmNDE0NjtcclxufVxyXG5cclxuI3Byb2dyZXNzIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuI3Byb2dyZXNzIC5iYXIsXHJcbiNwcm9ncmVzcyAuYmcge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4jcHJvZ3Jlc3MgLmJnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XHJcbn1cclxuXHJcbiNwcm9ncmVzcyAuYmFyIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgIHRyYW5zaXRpb246IC41cyB3aWR0aDtcclxufVxyXG5cclxuLm91dGxpbmUtbGlzdCBsaSBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm91dGxpbmUtbGlzdCBsaSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZWExZjYyO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5tYXQtZHJhd2VyIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjRweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxucGRmLXZpZXdlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICB3aWR0aDogMjg0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGl0bGUubW9iIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYS5idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcbi5uby1wcmV2d3tcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5zaGFrZTIge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogd29iYmxlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHdvYmJsZTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjk1cztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICB9XHJcbiAgLyogLnNoYWtlMjpob3ZlciB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgfSAqL1xyXG4gIEAtd2Via2l0LWtleWZyYW1lcyB3b2JibGUge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gICAgMTUlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyk7XHJcbiAgICB9XHJcbiAgICAzMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDNkZWcpO1xyXG4gICAgfVxyXG4gICAgNDUlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAyZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDJkZWcpO1xyXG4gICAgfVxyXG4gICAgNzUlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTFkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTFkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgd29iYmxlIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICAgIDE1JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xyXG4gICAgfVxyXG4gICAgMzAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcclxuICAgIH1cclxuICAgIDQ1JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xyXG4gICAgfVxyXG4gICAgNjAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMmRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAyZGVnKTtcclxuICAgIH1cclxuICAgIDc1JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi51c3ItaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiA4cHggMHB4IDhweCAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxufVxyXG4udXNyLWl0ZW06bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYmVkZjI7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi51c3ItZGV0YWlse1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuLmltZy1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICB3aWR0aDogMzRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udXNyLWltZ3tcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBlYXNlLW91dDtcclxufVxyXG4udXNlci1uYW1le1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMTExYjIxO1xyXG59XHJcbi5yZWFkLXRpbWV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzY2Nzc4MTtcclxufVxyXG5zcGFuLnN2Zy1pY25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcbi5zdmctaWNucyBzdmcge1xyXG4gIHdpZHRoOiAxNHB4O1xyXG4gIGhlaWdodDogMTRweDtcclxufVxyXG4uY2F0ZS1pY25ze1xyXG4gIHdpZHRoOiAxNHB4O1xyXG4gIGhlaWdodDogMTRweDtcclxufVxyXG4uZHduLWNudCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTg4NmViO1xyXG4gIHBhZGRpbmc6IDBweCA0cHg7XHJcbiAgY29sb3I6ICM3NDc4OTE7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAzcHg7XHJcbn1cclxuYS5kd24tY250IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNscC1kd257XHJcbiAgY29sb3I6ICM5ODg2ZWI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 15024:
/*!**************************************************************!*\
  !*** ./src/app/_LayoutDashboard/fileview/fileview.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileviewModule": () => (/* binding */ FileviewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fileview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fileview-routing.module */ 82459);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-pdf-viewer */ 63940);
/* harmony import */ var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-doc-viewer */ 89300);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _fileview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fileview.component */ 41291);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material-module */ 48696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);








class FileviewModule {
}
FileviewModule.ɵfac = function FileviewModule_Factory(t) { return new (t || FileviewModule)(); };
FileviewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: FileviewModule });
FileviewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _fileview_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileviewRoutingModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__.PdfViewerModule,
        ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_6__.NgxDocViewerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FileviewModule, { declarations: [_fileview_component__WEBPACK_IMPORTED_MODULE_1__.FileviewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _fileview_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileviewRoutingModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__.PdfViewerModule,
        ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_6__.NgxDocViewerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app__LayoutDashboard_fileview_fileview_module_ts.js.map