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
/* harmony import */ var src_app_Models_project_details_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_Models/project-details-dto */ 46047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-pdf-viewer */ 63940);
/* harmony import */ var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-doc-viewer */ 89300);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 9991);














function FileviewComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22)(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FileviewComponent_div_17_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.download(ctx_r7.src, ctx_r7.filename)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "path", 50)(5, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Download ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} }
function FileviewComponent_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FileviewComponent_a_18_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.DownloadHistory(ctx_r9.filename)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " History ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function FileviewComponent_ng_container_19_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 72)(1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx_r13.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r13.progress, "% ");
} }
function FileviewComponent_ng_container_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FileviewComponent_ng_container_19_div_1_div_1_Template, 3, 3, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r11.progress > 0);
} }
function FileviewComponent_ng_container_19_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("of ", ctx_r12.pdf.numPages, "");
} }
function FileviewComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FileviewComponent_ng_container_19_div_1_Template, 2, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 57)(3, "div", 22)(4, "div", 22)(5, "div", 58)(6, "div", 59)(7, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FileviewComponent_ng_container_19_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.incrementZoom(-0.1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "svg", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "circle", 62)(10, "line", 63)(11, "line", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-form-field", 65)(13, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FileviewComponent_ng_container_19_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.zoom = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Input is not a number!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FileviewComponent_ng_container_19_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.incrementZoom(0.1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "svg", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "circle", 62)(19, "line", 63)(20, "line", 67)(21, "line", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 59)(23, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FileviewComponent_ng_container_19_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.incrementPage(-1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-form-field", 65)(26, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FileviewComponent_ng_container_19_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.page = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Input is not a number!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, FileviewComponent_ng_container_19_span_29_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FileviewComponent_ng_container_19_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.incrementPage(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "pdf-viewer", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function FileviewComponent_ng_container_19_Template_pdf_viewer_pageChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.page = $event); })("after-load-complete", function FileviewComponent_ng_container_19_Template_pdf_viewer_after_load_complete_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.afterLoadComplete($event)); })("on-progress", function FileviewComponent_ng_container_19_Template_pdf_viewer_on_progress_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.onProgress($event)); })("page-rendered", function FileviewComponent_ng_container_19_Template_pdf_viewer_page_rendered_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.pageRendered($event)); })("pages-initialized", function FileviewComponent_ng_container_19_Template_pdf_viewer_pages_initialized_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.pageInitialized($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.ShowProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.zoom);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.pdf);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.src)("page", ctx_r2.page)("rotation", ctx_r2.rotation)("original-size", ctx_r2.originalSize)("show-all", ctx_r2.showAll)("fit-to-page", ctx_r2.fitToPage)("zoom", ctx_r2.zoom)("zoom-scale", ctx_r2.zoomScale)("stick-to-page", ctx_r2.stickToPage)("render-text", ctx_r2.renderText)("external-link-target", "blank")("autoresize", ctx_r2.autoresize)("show-borders", false);
} }
function FileviewComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 57)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ngx-doc-viewer", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("url", ctx_r3.src)("viewer", ctx_r3.viewer);
} }
function FileviewComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 57)(2, "div", 22)(3, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r4.src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function FileviewComponent_ng_container_22_div_5_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FileviewComponent_ng_container_22_div_5_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.download(ctx_r29.src, ctx_r29.filename)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Download File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FileviewComponent_ng_container_22_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 82)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Preview Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " The File is not available for preview currently. Please download the file to view. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, FileviewComponent_ng_container_22_div_5_span_5_Template, 4, 0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r26.viewer != "" && ctx_r26.IsCommunicarionMemoDownload == true);
} }
function FileviewComponent_ng_container_22_div_6_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FileviewComponent_ng_container_22_div_6_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.download(ctx_r32.src, ctx_r32.filename)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Download File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FileviewComponent_ng_container_22_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 82)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Access Denied");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " You do not have access to view the file. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, FileviewComponent_ng_container_22_div_6_span_5_Template, 4, 0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r27.viewer != "" && ctx_r27.IsCommunicarionMemoDownload == true);
} }
function FileviewComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 77)(2, "div", 78)(3, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, FileviewComponent_ng_container_22_div_5_Template, 6, 1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, FileviewComponent_ng_container_22_div_6_Template, 6, 1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.invalid == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.invalid == true);
} }
function FileviewComponent_ng_container_58_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 96)(2, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "path", 50)(5, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 89)(7, "div", 22)(8, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const src_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Downloaded on ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](10, 1, src_r37.download_date, "MMM d y"), "");
} }
function FileviewComponent_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 86)(2, "div", 87)(3, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 89)(6, "div", 22)(7, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 22)(10, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 22)(14, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "svg", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "path", 50)(17, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 94)(20, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, FileviewComponent_ng_container_58_ng_container_21_Template, 11, 4, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r34 = ctx.$implicit;
    const R_r35 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-target", "#collapseExample" + R_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r34.Initial, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r34.empname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 7, data_r34.DownloadDate, "MMM d y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r34.count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "collapseExample", R_r35, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", data_r34.dates);
} }
class FileviewComponent {
    constructor(route, service, notifyService) {
        this.route = route;
        this.service = service;
        this.notifyService = notifyService;
        //url:string;
        this.pdfSrc = "";
        this.ShowProgress = false;
        this.page = 1;
        this.progress = 0;
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
        this.objProjectDto = new src_app_Models_project_details_dto__WEBPACK_IMPORTED_MODULE_0__.ProjectDetailsDTO();
    }
    ngOnInit() {
        this.Current_user_ID = localStorage.getItem('EmpNo');
        this.IsCommunicarionMemoDownload = localStorage.getItem('IsCommunicationDownload');
        var decoder = new TextDecoder();
        this.url_project_code = this.route.snapshot.params['projectcode'];
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
                this.ShowProgress = true;
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
            this.submitby = params['submitby'];
            this.submitby = this.submitby.replace(/%26/g, "&");
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
        this.progress = Math.round(progressData.loaded / progressData.total * 100);
        if (this.progress == 100)
            this.ShowProgress = false;
        // console.log(`Uploaded! ${this.progress}%`);
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
        this.objProjectDto.Project_Code = this.url_project_code;
        this.objProjectDto.Emp_No = this.Current_user_ID;
        this.objProjectDto.filename = this.filename;
        this.service._InsertDownloadhistoryServie(this.objProjectDto).subscribe(data => {
            this.notifyService.showSuccess("Downloaded successfully", "Success");
        });
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
    DownloadHistory(filename) {
        this.objProjectDto.Project_Code = this.url_project_code;
        this.objProjectDto.filename = filename;
        this.service._GetDownloadhistoryServie(this.objProjectDto).subscribe(data => {
            this.history_list = (JSON.parse(data[0]['historyList']));
            this.datelist = (JSON.parse(data[0]['DatesJson']));
            console.log(JSON.parse(data[0]['historyList']), "history");
        });
    }
    searchhistory() {
        this.HistorySearch = "";
    }
}
FileviewComponent.ɵfac = function FileviewComponent_Factory(t) { return new (t || FileviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_1__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService)); };
FileviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FileviewComponent, selectors: [["app-fileview"]], hostBindings: function FileviewComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function FileviewComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    } }, decls: 64, vars: 13, consts: [[1, "kt-cus-head"], [1, "d-flex-cen", "flex-1"], [1, "kt-inbox__info"], [1, "kt-inbox__sender"], [1, "kt-media--sm", "kt-media--dark"], ["src", "assets/icons/Group 20.png", "alt", "", 1, "w-auto", 2, "height", "50px"], [1, "kt-inbox__details", "d-flex-center", "w-100", "justify-content-between"], [1, "kt-memo-dt-fl"], [1, "kt-inbox__message"], [1, "kt-inbox__flv-user"], [1, "kt-inbox__labels"], [1, "kt-fils-v-uname"], ["class", "", 4, "ngIf"], ["class", "btn btn-dull mt-3", "href", "javascript:void(0)", "data-target", "#open_modal", "data-toggle", "modal", "aria-haspopup", "true", "aria-expanded", "false", 3, "click", 4, "ngIf"], [4, "ngIf"], ["id", "open_modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content", "border-0"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "modal-body"], [1, ""], [1, "kt-inbox__search", "mb-3"], ["id", "search-grp", 1, "input-group", "group-active"], [1, "input-group-prepend"], [1, "input-group-text", "px-2", "py-0"], ["type", "button", "role", "button", "id", "srch-btn", "data-tooltip", "Search", "aria-label", "Search", 1, "srch-btns", "p-0"], ["focusable", "false", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"], ["d", "M0,0h24v24H0V0z", "fill", "none"], ["type", "text", "placeholder", "Search", "autocomplete", "off", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text", "p-0", "py-0"], ["type", "button", "role", "button", "id", "clrr-btn", "data-tooltip", "Clear Search", "aria-label", "Clear Search", 1, "srch-btns", "ml-1", 3, "click"], ["d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"], ["d", "M0 0h24v24H0z", "fill", "none"], [1, "card"], [1, "card-header", "d-none", "bg-white", "d-flex-center"], [1, "crd-txt", "text-info", "flex-1"], [1, "svg-icns"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "-2 0 22 22", "width", "16", "height", "16", "fill", "currentColor"], ["d", "M2.328 6.868l7.017 6.253a1 1 0 0 0 1.33 0l7.009-6.246-7.137-4.665a1 1 0 0 0-1.094 0L2.328 6.868zM18 7.082v2.19l-5.994 5.342a3 3 0 0 1-3.992 0L2 9.254V7.083 18h16V7.082zM.906 5.408L8.359.536a3 3 0 0 1 3.282 0l7.453 4.872A2 2 0 0 1 20 7.082V18a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7.082a2 2 0 0 1 .906-1.674z"], [1, "card-body", "crd-list", "scroll-y", "p-0"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "dropdown-actions"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", "btn-xs"], [1, "btn", "btn-info", "float-left", "mb", "mt-3", "mx-3", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-download"], ["d", "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"], ["d", "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"], ["href", "javascript:void(0)", "data-target", "#open_modal", "data-toggle", "modal", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-dull", "mt-3", 3, "click"], [1, "svg-icns1"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20px", "height", "20px", "fill", "currentColor", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M19.6873 14.2222C19.8909 13.5167 20 12.7711 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.3413 20 16.4476 18.9943 17.9106 17.3912M19.6873 14.2222L19 13M19.6873 14.2222L20.75 13.25M9 12L11 14L15 10", "stroke", "#464455", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "col-md-12 progress_container mt-mc-20", 4, "ngIf"], [1, "pt-3", "px-3"], [1, "d-flex", "justify-content-end"], [1, "mb"], ["mat-button", "", "type", "button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["x1", "8", "y1", "11", "x2", "14", "y2", "11"], [1, "page-number"], ["matInput", "", "type", "number", "placeholder", "Zoom", "pattern", "-?[0-9]*(\\.[0-9]+)?", 3, "ngModel", "ngModelChange"], ["x1", "11", "y1", "8", "x2", "11", "y2", "14"], ["matInput", "", "type", "number", "placeholder", "Page", "pattern", "-?[0-9]*(\\.[0-9]+)?", 3, "ngModel", "ngModelChange"], [2, "width", "100%", "height", "calc(100vh - 90px)", 3, "src", "page", "rotation", "original-size", "show-all", "fit-to-page", "zoom", "zoom-scale", "stick-to-page", "render-text", "external-link-target", "autoresize", "show-borders", "pageChange", "after-load-complete", "on-progress", "page-rendered", "pages-initialized"], [1, "col-md-12", "progress_container", "mt-mc-20"], ["class", "progress form-group", 4, "ngIf"], [1, "progress", "form-group"], ["role", "progressbar", 1, "progress-bar", "progress-bar-striped", "bg-success"], [2, "width", "100%", "height", "calc(100vh - 55px)", 3, "url", "viewer"], [1, "ion-img-viewer"], [3, "src"], [1, "pt-3", "px-3", "no-prevw", "d-flex"], [1, "d-flex", "align-items-center", "flex-column", "m-auto"], [1, "shake2"], ["src", "assets/images/doc-brek.png"], ["class", "text-center", 4, "ngIf"], [1, "text-center"], ["class", "btn btn-info mt-3", 3, "click", 4, "ngIf"], [1, "btn", "btn-info", "mt-3", 3, "click"], [1, "material-icons", "p-0", "mr-1", "fs-4"], [1, "users-list"], ["data-toggle", "collapse", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "usr-item"], [1, "initial-box", "color-7", "b-50", "mr-2"], [1, "flex-1"], [1, "user-name"], [1, "read-time"], [1, "dwn-cnt", "btn"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "cate-icns"], [1, "collapse", 3, "id"], [1, "card", "mx-4"], [1, "usr-item"], [1, "clp-dwn"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, ""]], template: function FileviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7)(10, "a", 8)(11, "span", 9)(12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 10)(15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, FileviewComponent_div_17_Template, 7, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, FileviewComponent_a_18_Template, 5, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, FileviewComponent_ng_container_19_Template, 33, 17, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, FileviewComponent_ng_container_20_Template, 4, 2, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, FileviewComponent_ng_container_21_Template, 5, 1, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, FileviewComponent_ng_container_22_Template, 7, 2, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 15)(24, "div", 16)(25, "div", 17)(26, "div", 18)(27, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Attachment Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 21)(31, "div", 22)(32, "div", 23)(33, "div", 24)(34, "div", 25)(35, "span", 26)(36, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "path", 29)(39, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FileviewComponent_Template_input_ngModelChange_40_listener($event) { return ctx.HistorySearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 32)(42, "span", 33)(43, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FileviewComponent_Template_button_click_43_listener() { return ctx.searchhistory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "path", 35)(46, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 37)(48, "div", 38)(49, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Read By");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 22)(52, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "svg", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, " 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 43)(57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, FileviewComponent_ng_container_58_Template, 22, 10, "ng-container", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](59, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 45)(61, "div", 46)(62, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.submitby);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.filename);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.viewer != "" && ctx.Current_user_ID == "2000");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.invalid == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.viewer == "pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.viewer == "office" || ctx.viewer == "google");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.viewer == "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.viewer == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.HistorySearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](59, 10, ctx.history_list, ctx.HistorySearch));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__.PdfViewerComponent, ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_8__.NgxDocViewerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipe], styles: [".ion-img-viewer[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    text-align: center;\n    \n    background: #edf0f7;\n}\n\n.ion-img-viewer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 100vh;\n    max-width: 100%;\n    margin: auto;\n    object-fit: cover;\n    object-position: bottom;\n}\n\n.img-container[_ngcontent-%COMP%]{\n  overflow: hidden;\n}\n\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width: 100%;\n}\n\n\n\nmat-toolbar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 100;\n}\n\n.select-file__container[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    margin-bottom: 20px;\n}\n\n.select-file__container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n}\n\n.page-number[_ngcontent-%COMP%] {\n    width: 50px;\n}\n\n.mb[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n\npdf-viewer[_ngcontent-%COMP%] {\n    display: block;\n}\n\n.error[_ngcontent-%COMP%] {\n    color: #ff4146;\n}\n\n#progress[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    width: 100px;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n#progress[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%], #progress[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n    height: 20px;\n}\n\n#progress[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n    background-color: #e3e3e3;\n}\n\n#progress[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n    width: 0;\n    max-width: 100%;\n    background-color: #3f51b5;\n    transition: .5s width;\n}\n\n.outline-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.outline-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #ea1f62;\n}\n\n.spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n}\n\nmat-drawer[_ngcontent-%COMP%] {\n    width: 320px;\n    padding: 12px;\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 64px;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n\npdf-viewer[_ngcontent-%COMP%] {\n    height: 100%;\n}\n\n.title[_ngcontent-%COMP%] {\n    width: 284px;\n    text-align: left;\n}\n\n.title.mob[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\na.button[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.no-prevw[_ngcontent-%COMP%]{\n    height: 100vh;\n    background: #fff;\n}\n\n.shake2[_ngcontent-%COMP%] {\n    animation-name: wobble;\n    -webkit-animation-duration: 0.95s;\n    -webkit-animation-timing-function: linear;\n    -webkit-transform-origin: 50% 100%;\n  }\n\n\n\n@keyframes wobble {\n    0% {\n      transform: none;\n    }\n    15% {\n      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    }\n    30% {\n      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    }\n    45% {\n      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    }\n    60% {\n      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    }\n    75% {\n      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    }\n    100% {\n      transform: none;\n    }\n  }\n\n.usr-item[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 8px 0px 8px 0px;\n    padding-top: 0;\n    gap: 8px;\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n\n.usr-item[_ngcontent-%COMP%]:not(:first-child) {\n    border-top: 1px solid #ebedf2;\n    padding-top: 8px;\n}\n\n.usr-detail[_ngcontent-%COMP%]{\n    line-height: 1;\n}\n\n.img-container[_ngcontent-%COMP%]{\n    height: 34px;\n    width: 34px;\n    border-radius: 50%;\n    position: relative;\n}\n\n.usr-img[_ngcontent-%COMP%]{\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    transition: opacity .15s ease-out;\n}\n\n.user-name[_ngcontent-%COMP%]{\n    font-size: 14px;\n    font-weight: 400;\n    color: #111b21;\n}\n\n.read-time[_ngcontent-%COMP%]{\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 20px;\n    color: #667781;\n}\n\nspan.svg-icns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.svg-icns[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n\n.cate-icns[_ngcontent-%COMP%]{\n  width: 14px;\n  height: 14px;\n}\n\n.dwn-cnt[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #9886eb;\n  padding: 0px 4px;\n  color: #747891;\n  cursor: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n}\n\na.dwn-cnt[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.clp-dwn[_ngcontent-%COMP%]{\n  color: #9886eb;\n}\n\n.btn-dull[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: #ffffff !important;\n}\n\nspan.svg-icns1[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #fff;\n}\n\n.initial-box[_ngcontent-%COMP%] {\n  background-color: #f9ce6f;\n  color: #fff;\n  padding: 10px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\n.color-7[_ngcontent-%COMP%] {\n  background-color: #9b59b6;\n}\n\n.b-50[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.srch-btns[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  padding: 0 5px;\n  line-height: 0;\n}\n\n.srch-btns[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #444746;\n  \n}\n\n.srch-btns[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{\n  \n  fill: #2786fb !important;\n}\n\n.d-flex-center[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: space-between;\n  display: flex;\n}\n\n.kt-cus-head[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  box-shadow: 1px 3px 4px #cccccc82;\n  background-color: #fff;\n  margin-bottom: 0.5rem;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n    height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n    margin: 0;\n    font-family: var(--font-family-sans-serif);\n    line-height: 1.5 !important;\n}\n\n.kt-inbox__message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.w-49[_ngcontent-%COMP%] {\n  width: 49%;\n}\n\n.btn-rounded[_ngcontent-%COMP%] {\n  border-radius: 25px;\n}\n\n.kt-memo-dt-fl[_ngcontent-%COMP%]{\n  border-left: 1px solid #ccc;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTs7Ozs7OztHQU9HOztBQUVIO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBRUksc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyx5Q0FBeUM7SUFDekMsa0NBQWtDO0VBQ3BDOztBQUNBOzs7S0FHRzs7QUErQkg7SUFDRTtNQUVFLGVBQWU7SUFDakI7SUFDQTtNQUVFLDJEQUEyRDtJQUM3RDtJQUNBO01BRUUseURBQXlEO0lBQzNEO0lBQ0E7TUFFRSwyREFBMkQ7SUFDN0Q7SUFDQTtNQUVFLHlEQUF5RDtJQUMzRDtJQUNBO01BRUUsMERBQTBEO0lBQzVEO0lBQ0E7TUFFRSxlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUY7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQzs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYztFQUNkO3VCQUNxQjtBQUN2Qjs7QUFDQTtFQUNFLDBDQUEwQztFQUMxQyx3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFDQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztJQUNULDBDQUEwQztJQUMxQywyQkFBMkI7QUFDL0I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJmaWxldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1pbWctdmlld2VyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cbiAgICBiYWNrZ3JvdW5kOiAjZWRmMGY3O1xufVxuXG4uaW9uLWltZy12aWV3ZXIgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogYm90dG9tO1xufVxuXG4uaW1nLWNvbnRhaW5lcntcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbWctY29udGFpbmVyIGltZ3tcbiAgd2lkdGg6IDEwMCU7XG59XG4vKiAubmcyLXBkZi12aWV3ZXItY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG59ICovXG5cbm1hdC10b29sYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG4uc2VsZWN0LWZpbGVfX2NvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uc2VsZWN0LWZpbGVfX2NvbnRhaW5lciBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ucGFnZS1udW1iZXIge1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4ubWIge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbnBkZi12aWV3ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOiAjZmY0MTQ2O1xufVxuXG4jcHJvZ3Jlc3Mge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbiNwcm9ncmVzcyAuYmFyLFxuI3Byb2dyZXNzIC5iZyB7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4jcHJvZ3Jlc3MgLmJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xufVxuXG4jcHJvZ3Jlc3MgLmJhciB7XG4gICAgd2lkdGg6IDA7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgdHJhbnNpdGlvbjogLjVzIHdpZHRoO1xufVxuXG4ub3V0bGluZS1saXN0IGxpIGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm91dGxpbmUtbGlzdCBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2VhMWY2Mjtcbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbm1hdC1kcmF3ZXIge1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xufVxuXG5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjRweDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbn1cblxucGRmLXZpZXdlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUge1xuICAgIHdpZHRoOiAyODRweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGl0bGUubW9iIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmEuYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLm5vLXByZXZ3e1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zaGFrZTIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHdvYmJsZTtcbiAgICBhbmltYXRpb24tbmFtZTogd29iYmxlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjk1cztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICB9XG4gIC8qIC5zaGFrZTI6aG92ZXIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIH0gKi9cbiAgQC13ZWJraXQta2V5ZnJhbWVzIHdvYmJsZSB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICAgIDE1JSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyk7XG4gICAgfVxuICAgIDMwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcbiAgICB9XG4gICAgNDUlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDJkZWcpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDJkZWcpO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTFkZWcpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyB3b2JibGUge1xuICAgIDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgICAxNSUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XG4gICAgfVxuICAgIDQ1JSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XG4gICAgfVxuICAgIDYwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAyZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAyZGVnKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMWRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICB9XG5cbi51c3ItaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDhweCAwcHggOHB4IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cbi51c3ItaXRlbTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYmVkZjI7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbn1cbi51c3ItZGV0YWlse1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmltZy1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIHdpZHRoOiAzNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udXNyLWltZ3tcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGVhc2Utb3V0O1xufVxuLnVzZXItbmFtZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzExMWIyMTtcbn1cbi5yZWFkLXRpbWV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICM2Njc3ODE7XG59XG5zcGFuLnN2Zy1pY25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG59XG5cbi5zdmctaWNucyBzdmcge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xufVxuLmNhdGUtaWNuc3tcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbn1cbi5kd24tY250IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk4ODZlYjtcbiAgcGFkZGluZzogMHB4IDRweDtcbiAgY29sb3I6ICM3NDc4OTE7XG4gIGN1cnNvcjogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogM3B4O1xufVxuYS5kd24tY250IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNscC1kd257XG4gIGNvbG9yOiAjOTg4NmViO1xufVxuLmJ0bi1kdWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcbiAgYm9yZGVyLWNvbG9yOiAjNmM3NTdkO1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuc3Bhbi5zdmctaWNuczEgc3ZnIHBhdGgge1xuICBzdHJva2U6ICNmZmY7XG59XG4uaW5pdGlhbC1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjljZTZmO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNvbG9yLTcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWI1OWI2O1xufVxuLmItNTAge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc3JjaC1idG5zIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBsaW5lLWhlaWdodDogMDtcbn1cbi5zcmNoLWJ0bnMgc3ZnIHtcbiAgY29sb3I6ICM0NDQ3NDY7XG4gIC8qIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7ICovXG59XG4uc3JjaC1idG5zOmhvdmVyIHN2Z3tcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MCw2NCw2NywuMDgpOyAqL1xuICBmaWxsOiAjMjc4NmZiICFpbXBvcnRhbnQ7XG59XG4uZC1mbGV4LWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5rdC1jdXMtaGVhZCB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm94LXNoYWRvdzogMXB4IDNweCA0cHggI2NjY2NjYzgyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5odG1sLFxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LXNhbnMtc2VyaWYpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjUgIWltcG9ydGFudDtcbn1cbi5rdC1pbmJveF9fbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udy00OSB7XG4gIHdpZHRoOiA0OSU7XG59XG5cbi5idG4tcm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5rdC1tZW1vLWR0LWZse1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuXG4iXX0= */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fileview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fileview-routing.module */ 82459);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-pdf-viewer */ 63940);
/* harmony import */ var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-doc-viewer */ 89300);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _fileview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fileview.component */ 41291);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material-module */ 48696);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);









class FileviewModule {
}
FileviewModule.ɵfac = function FileviewModule_Factory(t) { return new (t || FileviewModule)(); };
FileviewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: FileviewModule });
FileviewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _fileview_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileviewRoutingModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__.PdfViewerModule,
        ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_7__.NgxDocViewerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FileviewModule, { declarations: [_fileview_component__WEBPACK_IMPORTED_MODULE_1__.FileviewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _fileview_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileviewRoutingModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__.PdfViewerModule,
        ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_7__.NgxDocViewerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule] }); })();


/***/ }),

/***/ 9991:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe),
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



class Ng2SearchPipe {
  /**
   * @param {?} items object from array
   * @param {?} term term's search
   * @return {?}
   */
  transform(items, term) {
    if (!term || !items) return items;
    return Ng2SearchPipe.filter(items, term);
  }
  /**
   *
   * @param {?} items List of items to filter
   * @param {?} term  a string term to compare with every property of the list
   *
   * @return {?}
   */


  static filter(items, term) {
    const
    /** @type {?} */
    toCompare = term.toLowerCase();
    /**
     * @param {?} item
     * @param {?} term
     * @return {?}
     */

    function checkInside(item, term) {
      for (let
      /** @type {?} */
      property in item) {
        if (item[property] === null || item[property] == undefined) {
          continue;
        }

        if (typeof item[property] === 'object') {
          if (checkInside(item[property], term)) {
            return true;
          }
        }

        if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }

      return false;
    }

    return items.filter(function (item) {
      return checkInside(item, term);
    });
  }

}

Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) {
  return new (t || Ng2SearchPipe)();
};

Ng2SearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filter",
  type: Ng2SearchPipe,
  pure: false
});
Ng2SearchPipe.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Ng2SearchPipe,
  factory: Ng2SearchPipe.ɵfac
});
/**
 * @nocollapse
 */

Ng2SearchPipe.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'filter',
      pure: false
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

class Ng2SearchPipeModule {}

Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) {
  return new (t || Ng2SearchPipeModule)();
};

Ng2SearchPipeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: Ng2SearchPipeModule
});
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */

Ng2SearchPipeModule.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [Ng2SearchPipe],
      exports: [Ng2SearchPipe]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, {
    declarations: [Ng2SearchPipe],
    exports: [Ng2SearchPipe]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app__LayoutDashboard_fileview_fileview_module_ts.js.map