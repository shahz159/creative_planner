(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["main"],{

/***/ 49785:
/*!******************************************************************************!*\
  !*** ./src/app/Shared/components/confirm-dialog/confirm-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84522);





function ConfirmDialogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "p")(5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Do you want to delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span")(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p")(11, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p")(14, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6)(17, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.title1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.message1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.message2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.message3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
} }
function ConfirmDialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "p")(5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Do you want to delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span")(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "this Memo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.title1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
} }
function ConfirmDialogComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "p")(5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Are you sure, Do you want to delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span")(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.data.title1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.data.taskName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
} }
function ConfirmDialogComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "p")(5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Are you sure, Do you want to delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span")(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.data.titleDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.data.CategoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
} }
function ConfirmDialogComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10)(11, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ConfirmDialogComponent_div_4_Template_input_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onFileChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6)(13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.data.filetitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.data.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ProjectCode:", ctx_r4.data.projectCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Autho :", ctx_r4.data.EMpNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
} }
class ConfirmDialogComponent {
    //Mat_ProjectsList = [];
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.selectedFile = null;
    }
    ngOnInit() {
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ConfirmDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 5, vars: 5, consts: [[4, "ngIf"], ["mat-dialog-title", ""], ["mat-dialog-content", "", 2, "text-align", "center"], [2, "color", "darkgray"], [1, "text-danger"], [1, "text-primary"], [2, "float", "right", "margin", "20px"], ["mat-raised-button", "", "color", "primary", 1, "mr-3", 3, "mat-dialog-close"], ["mat-raised-button", "", 3, "mat-dialog-close"], [2, "color", "mediumslateblue"], [1, "mb-3"], ["type", "file", "id", "formFile", "accept", "application/pdf", 1, "form-control", 3, "change"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmDialogComponent_div_0_Template, 21, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmDialogComponent_div_1_Template, 15, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfirmDialogComponent_div_2_Template, 15, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfirmDialogComponent_div_3_Template, 15, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfirmDialogComponent_div_4_Template, 17, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.mode == "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.mode == "memos_Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.mode == "Todo_Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.mode == "Category_Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.mode == "fileUpload");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */", ".dialogboxDropdpwn[_ngcontent-%COMP%]   .multiselect-dropdown[_ngcontent-%COMP%] {\n        width: 250px;\n    }"] });


/***/ }),

/***/ 90449:
/*!*************************************************************!*\
  !*** ./src/app/_LayoutDashboard/header/header.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 171, vars: 0, consts: [["id", "kt_header_mobile", 1, "kt-header-mobile", "kt-header-mobile--fixed"], [1, "kt-header-mobile__logo"], ["href", "#"], ["alt", "Logo", "src", "assets/images/logo.png"], [1, "kt-header-mobile__toolbar"], ["id", "kt_aside_mobile_toggler", 1, "kt-header-mobile__toolbar-toggler", "kt-header-mobile__toolbar-toggler--left"], ["id", "kt_header", 1, "kt-header", "kt-grid", "kt-grid--ver", "kt-header--fixed", 2, "display", "none"], ["id", "kt_header_menu_wrapper", 1, "kt-header-menu-wrapper", "kt-grid__item", "kt-grid__item--fluid"], [1, "pl-4", "pt-4"], [1, "kt-header__topbar"], [1, "kt-header__topbar-item", "dropdown"], ["data-toggle", "dropdown", "data-offset", "10px,0px", 1, "kt-header__topbar-wrapper"], [1, "kt-header__topbar-icon", "kt-header__topbar-icon--success"], [1, "flaticon2-bell-alarm-symbol"], [1, "kt-hidden", "kt-badge", "kt-badge--danger"], [1, "dropdown-menu", "dropdown-menu-fit", "dropdown-menu-right", "dropdown-menu-anim", "dropdown-menu-xl"], [1, "kt-head", "kt-head--skin-light", "kt-head--fit-x"], [1, "kt-head__title"], [1, "btn", "btn-label-primary", "btn-sm", "btn-bold", "btn-font-md"], ["role", "tablist", 1, "nav", "nav-tabs", "nav-tabs-line", "nav-tabs-bold", "nav-tabs-line-3x", "nav-tabs-line-brand", "kt-notification-item-padding-x", "mt-0"], [1, "nav-item"], ["data-toggle", "tab", "href", "#topbar_notifications_notifications", "role", "tab", "aria-selected", "true", 1, "nav-link", "show", "active"], ["data-toggle", "tab", "href", "#topbar_notifications_events", "role", "tab", "aria-selected", "false", 1, "nav-link"], [1, "tab-content"], ["id", "topbar_notifications_notifications", "role", "tabpanel", 1, "tab-pane", "active", "show"], ["data-scroll", "true", "data-height", "300", "data-mobile-height", "200", 1, "kt-notification", "kt-margin-t-10", "kt-margin-b-10", "kt-scroll", "ps", 2, "height", "300px", "overflow", "hidden"], ["href", "#", 1, "kt-notification__item"], [1, "kt-notification__item-icon"], [1, "flaticon2-line-chart", "kt-font-success"], [1, "kt-notification__item-details"], [1, "kt-notification__item-title"], [1, "kt-notification__item-time"], [1, "flaticon2-box-1", "kt-font-brand"], [1, "flaticon2-chart2", "kt-font-danger"], [1, "flaticon2-image-file", "kt-font-warning"], [1, "flaticon2-drop", "kt-font-info"], [1, "flaticon2-pie-chart-2", "kt-font-success"], [1, "flaticon2-favourite", "kt-font-danger"], ["href", "#", 1, "kt-notification__item", "kt-notification__item--read"], [1, "flaticon2-safe", "kt-font-primary"], [1, "flaticon2-psd", "kt-font-success"], [1, "flaticon-download-1", "kt-font-danger"], [1, "flaticon-security", "kt-font-warning"], [1, "flaticon2-pie-chart", "kt-font-success"], [1, "ps__rail-x", 2, "left", "0px", "bottom", "0px"], ["tabindex", "0", 1, "ps__thumb-x", 2, "left", "0px", "width", "0px"], [1, "ps__rail-y", 2, "top", "0px", "right", "0px"], ["tabindex", "0", 1, "ps__thumb-y", 2, "top", "0px", "height", "0px"], [1, "kt-header__topbar-item", "kt-header__topbar-item--user"], [1, "kt-header__topbar-icon"], [1, "flaticon2-user-outline-symbol"], [1, "kt-user-card", "kt-user-card--skin-light", "kt-notification-item-padding-x"], [1, "kt-user-card__name"], [2, "color", "#22b9ff"], [1, "kt-notification"], [1, "kt-notification__item"], [1, "flaticon2-mail", "kt-font-warning"], [1, "kt-notification__item-title", "kt-font-bold"], [1, "flaticon2-rocket-1", "kt-font-danger"], [1, "flaticon2-hourglass", "kt-font-brand"], [1, "kt-notification__custom", "kt-space-between"], ["target", "_blank", 1, "btn", "btn-label", "btn-label-brand", "btn-sm", "btn-bold"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15)(18, "form")(19, "div", 16)(20, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Notifications \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "23 new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 19)(25, "li", 20)(26, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 20)(29, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23)(32, "div", 24)(33, "div", 25)(34, "a", 26)(35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 29)(38, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " New order has been received ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 2 hrs ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 26)(43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29)(46, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " New customer is registered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " 3 hrs ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 26)(51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29)(54, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Application has been approved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " 3 hrs ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 26)(59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 29)(62, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " New file has been uploaded ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " 5 hrs ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 26)(67, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 29)(70, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " New user feedback received ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " 8 hrs ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 26)(75, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 29)(78, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " System reboot has been successfully completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " 12 hrs ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 26)(83, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 29)(86, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " New order has been placed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " 15 hrs ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 38)(91, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 29)(94, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Company meeting canceled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " 19 hrs ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 26)(99, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 29)(102, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " New report has been received ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " 23 hrs ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 26)(107, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 29)(110, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Finance report has been generated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " 25 hrs ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 26)(115, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 29)(118, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " New customer comment recieved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " 2 days ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 26)(123, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 29)(126, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " New customer is registered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " 3 days ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 48)(135, "div", 11)(136, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 15)(139, "div", 51)(140, "div", 52)(141, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Welcome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 54)(144, "a", 55)(145, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 29)(148, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " My Messages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Inbox and tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 55)(153, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 29)(156, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " My Activities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Logs and notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "a", 55)(161, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 29)(164, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " My Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " latest tasks and projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 60)(169, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: ["header[_ngcontent-%COMP%]{\n    padding: 14px;\n    background: #3f51b5;\n    \n}\n.text[_ngcontent-%COMP%]{\n    color: white;\n    font-size: large;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n.logout[_ngcontent-%COMP%]{\n    padding-top: 0.8%;\n}\n\n.filler[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n }\n.gap[_ngcontent-%COMP%] {\n    margin-right: 10px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkRBQTZEO0FBQ2pFO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDZFQUE2RTtBQUNqRjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksY0FBYztDQUNqQjtBQUNBO0lBQ0csa0JBQWtCO0NBQ3JCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5oZWFkZXJ7XG4gICAgcGFkZGluZzogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNjJFNiwgIzMzQUVGRik7ICovXG59XG4udGV4dHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbn1cbi5sb2dvdXR7XG4gICAgcGFkZGluZy10b3A6IDAuOCU7XG59XG5cbi8qIG1hdCB0b29sIGJhciAqL1xuLmZpbGxlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gfVxuIC5nYXAge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiB9XG4iXX0= */"] });


/***/ }),

/***/ 29612:
/*!***************************************************************!*\
  !*** ./src/app/_LayoutDashboard/sidebar/sidebar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_modules_tippy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node_modules/tippy.js */ 83293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Services/auth.service */ 83827);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-loading-bar/core */ 3571);







const _c0 = function () { return { exact: true }; };
class SidebarComponent {
    constructor(router, authService, notifyService, loadingBarServce) {
        this.router = router;
        this.authService = authService;
        this.notifyService = notifyService;
        this.loadingBarServce = loadingBarServce;
        this.loadingBar_state = this.loadingBarServce.useRef('http');
    }
    ngOnInit() {
        this._CurrentUser = localStorage.getItem('_Currentuser');
        this._fullname = localStorage.getItem('UserfullName');
        this._EmpNo = localStorage.getItem('EmpNo');
        this.OrganizationId = localStorage.getItem('OrganizationId');
        this._CompNo = sessionStorage.getItem("EmpCompNo");
        jquery__WEBPACK_IMPORTED_MODULE_0__(document).ready(function () {
            // import('../../../assets/js/test.js');
            jquery__WEBPACK_IMPORTED_MODULE_0__('<script/>', { type: 'text/javascript', src: 'assets/js/test.js' }).appendTo('head');
        });
        (0,node_modules_tippy_js__WEBPACK_IMPORTED_MODULE_3__["default"])('#dashboard', {
            content: "Dashboard",
            arrow: true,
            animation: 'scale-extreme',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            placement: 'right'
        });
        (0,node_modules_tippy_js__WEBPACK_IMPORTED_MODULE_3__["default"])('#performance', {
            content: "Performance dashboard",
            arrow: true,
            animation: 'scale-extreme',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            placement: 'right'
        });
        (0,node_modules_tippy_js__WEBPACK_IMPORTED_MODULE_3__["default"])('#Portfolio', {
            content: "Portfolios",
            arrow: true,
            animation: 'scale-extreme',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            placement: 'right'
        });
        (0,node_modules_tippy_js__WEBPACK_IMPORTED_MODULE_3__["default"])('#summary', {
            content: "Project summary",
            arrow: true,
            animation: 'scale-extreme',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            placement: 'right'
        });
        (0,node_modules_tippy_js__WEBPACK_IMPORTED_MODULE_3__["default"])('#timeline', {
            content: "Timeline",
            arrow: true,
            animation: 'scale-extreme',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            placement: 'right'
        });
        (0,node_modules_tippy_js__WEBPACK_IMPORTED_MODULE_3__["default"])('#todo', {
            content: "Process details",
            arrow: true,
            animation: 'scale-extreme',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            placement: 'right'
        });
        (0,node_modules_tippy_js__WEBPACK_IMPORTED_MODULE_3__["default"])('#assign', {
            content: "Assign projects",
            arrow: true,
            animation: 'scale-extreme',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            placement: 'right'
        });
        (0,node_modules_tippy_js__WEBPACK_IMPORTED_MODULE_3__["default"])('#runway', {
            content: "Runway tasks",
            arrow: true,
            animation: 'scale-extreme',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            placement: 'right'
        });
        (0,node_modules_tippy_js__WEBPACK_IMPORTED_MODULE_3__["default"])('#settins', {
            content: "Settings",
            arrow: true,
            animation: 'scale-extreme',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            placement: 'right'
        });
        (0,node_modules_tippy_js__WEBPACK_IMPORTED_MODULE_3__["default"])('#logout', {
            content: "Logout",
            arrow: true,
            animation: 'scale-extreme',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            placement: 'right'
        });
        (0,node_modules_tippy_js__WEBPACK_IMPORTED_MODULE_3__["default"])('#creative', {
            content: "Creative Planner",
            arrow: true,
            animation: 'scale-extreme',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            placement: 'right'
        });
    }
    // AfterViewInit():void{
    //   alert('ok');  
    // }
    // ngAfterViewInit() {
    //We loading the player script on after view is loaded
    // import('node_modules/jquery/dist/jquery.min.js');
    // import('../../../assets/plugins/global/plugins.bundle.js');
    //  import('../../../assets/js/test.js');
    // alert("test");
    // }
    menuopen() {
        //document.getElementById("kt-menu__item--submenu1").classList.toggle("kt-menu__item--open-dropdown");
        // document.getElementById("kt-menu__item--submenu1").classList.toggle("kt-menu__item--hover");
        // document.getElementById("kt-menu__item--submenu1").classList.toggle("kt-menu__item--open");
    }
    logout() {
        this.loadingBar_state.stop();
        //console.log('logout');
        this.authService.logout();
        sessionStorage.clear();
        localStorage.clear();
        // console.log(this.authService.logout()); 
        this.router.navigate(['login']);
        // window.sessionStorage.clear();
        //localStorage.removeItem('EmpNo');
        //window.localStorage.clear();
        //console.log("local Storage----->", localStorage.getItem('EmpNo'));
    }
    clearSession() {
        localStorage.clear();
        sessionStorage.clear();
    }
    Btn_AssignTask() {
        let name = "AssignTask";
        var url = document.baseURI + name;
        var myurl = `${url}`;
        var myWindow = window.open(myurl);
        myWindow.focus();
    }
    Btn_UnplannedTask() {
        let name = "UnplannedTask";
        var url = document.baseURI + name;
        var myurl = `${url}`;
        var myWindow = window.open(myurl);
        myWindow.focus();
    }
    notinAction() {
        this.notifyService.showError("Development Under Maintainance", 'Failed');
    }
    menutoggle() {
        document.getElementById("kt-bodyc").classList.toggle("kt-aside--show");
        document.getElementById("kt-bodyc").classList.toggle("kt-aside--minimize");
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_6__.LoadingBarService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 99, vars: 3, consts: [["id", "kt_aside_close_btn", 1, "kt-aside-close"], [1, "la", "la-close"], ["id", "kt_aside", 1, "kt-aside", "kt-aside--fixed", "kt-grid__item", "kt-grid", "kt-grid--desktop", "kt-grid--hor-desktop"], ["id", "kt_aside_brand", 1, "kt-aside__brand", "kt-grid__item"], [1, "kt-aside__brand-logo"], ["alt", "Logo", "src", "assets/images/logo.png", "id", "creative"], ["alt", "Logo", "src", "assets/images/cp.png", "width", "200px", 1, "logo-txt"], ["id", "kt_aside_menu_wrapper", 1, "kt-aside-menu-wrapper", "kt-grid__item", "kt-grid__item--fluid", "pt-0"], ["id", "kt_aside_menu", "data-ktmenu-vertical", "1", "data-ktmenu-dropdown", "1", "data-ktmenu-scroll", "0", 1, "kt-aside-menu", "kt-aside-menu--dropdown"], [1, "kt-menu__nav", "pt-0"], [1, "kt-menu__item"], ["routerLink", "dashboard", "routerLinkActive", "active", 1, "kt-menu__link", 3, "routerLinkActiveOptions"], ["id", "dashboard", 1, "kt-menu__link-icon", "flaticon2-protection"], [1, "kt-menu__link-text"], [1, "kt-menu__ver-arrow", "la", "la-angle-right"], ["routerLink", "PerformanceDashboard", "routerLinkActive", "active", 1, "kt-menu__link"], ["id", "performance", 1, "kt-menu__link-icon", "far", "fa-chart-bar"], ["routerLink", "Portfolio", "routerLinkActive", "active", 1, "kt-menu__link", "kt-menu__toggle"], ["id", "Portfolio", 1, "kt-menu__link-icon", "fas", "fa-list"], ["routerLink", "ProjectsSummary", "routerLinkActive", "active", 1, "kt-menu__link", "kt-menu__toggle"], ["id", "summary", 1, "kt-menu__link-icon", "fab", "fa-wpforms"], ["routerLink", "ToDoProjects", "routerLinkActive", "active", 1, "kt-menu__link", "kt-menu__toggle"], ["id", "todo", 1, "kt-menu__link-icon", "fas", "fa-clipboard-check"], [1, "kt-menu__link", "kt-menu__toggle", 3, "click"], ["id", "assign", 1, "kt-menu__link-icon", "fab", "fa-buffer"], ["id", "runway", 1, "kt-menu__link-icon", "fas", "fa-registered"], ["routerLink", "Timeline", "routerLinkActive", "active", 1, "kt-menu__link", "kt-menu__toggle"], ["id", "timeline", 1, "kt-menu__link-icon", "fab", "fa-tumblr-square"], ["id", "kt-menu__item--submenu1", "routerLinkActive", "active", "data-ktmenu-submenu-toggle", "click", "aria-haspopup", "true", 1, "kt-menu__item", "kt-menu__item--submenu", "kt-menu__item--submenu", "kt-menu__item--bottom-2", 3, "click"], ["routerLinkActive", "active", 1, "kt-menu__link", "kt-menu__toggle"], ["id", "settins", 1, "kt-menu__link-icon", "flaticon-avatar"], [1, "kt-menu__submenu", "kt-menu__submenu--up"], [1, "kt-menu__arrow"], [1, "kt-menu__subnav"], ["aria-haspopup", "true", 1, "kt-menu__item"], [1, "kt-menu__link"], ["routerLink", "settings/myprofile", "routerLinkActive", "active", 1, "kt-menu__link"], [1, "kt-menu__link-icon", "la", "la-user"], ["routerLink", "settings/privacypolicy", "routerLinkActive", "active", 1, "kt-menu__link"], [1, "kt-menu__link-icon", "flaticon2-document"], ["aria-haspopup", "true", "data-ktmenu-submenu-toggle", "click", 1, "kt-menu__item", "kt-menu__item--submenu", "kt-menu__item--bottom-1", 3, "click"], [1, "kt-menu__link", "kt-menu__toggle"], ["id", "logout", 1, "kt-menu__link-icon", "flaticon-logout"], [1, "side-btn", 3, "click"], [1, "btn-mini"], [1, "fas", "fa-chevron-left"], [1, "kt-aside-menu-overlay"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "ul", 9)(11, "li", 10)(12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li", 10)(18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Performance dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "li", 10)(24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Portfolios");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "li", 10)(30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Projects summary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "li", 10)(36, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Process details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "li", 10)(42, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_42_listener() { return ctx.Btn_AssignTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Assigned tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "li", 10)(48, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_48_listener() { return ctx.Btn_UnplannedTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Runway task");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "li", 10)(54, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Timeline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_li_click_59_listener() { return ctx.menuopen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "User details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "ul", 33)(68, "li", 34)(69, "a", 35)(70, "span", 13)(71, "u")(72, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "li", 34)(75, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "li", 34)(80, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "li", 34)(85, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](86, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_li_click_89_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](91, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](94, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_95_listener() { return ctx.menutoggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](98, "div", 46);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx._fullname);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive], styles: [".active[_ngcontent-%COMP%]{\r\n    background: #4c59688f;\r\n   \r\n}\r\n.kt-aside--minimize[_ngcontent-%COMP%]   .kt-aside-menu[_ngcontent-%COMP%]   .kt-menu__nav[_ngcontent-%COMP%] > .kt-menu__item[_ngcontent-%COMP%] > .kt-menu__link.active[_ngcontent-%COMP%] > .kt-menu__link-icon[_ngcontent-%COMP%] {\r\n    color: #5867dd !important;\r\n}\r\n.side-btn[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjs7QUFFekI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNGM1OTY4OGY7XHJcbiAgIFxyXG59XHJcbi5rdC1hc2lkZS0tbWluaW1pemUgLmt0LWFzaWRlLW1lbnUgLmt0LW1lbnVfX25hdj4ua3QtbWVudV9faXRlbT4ua3QtbWVudV9fbGluay5hY3RpdmU+Lmt0LW1lbnVfX2xpbmstaWNvbiB7XHJcbiAgICBjb2xvcjogIzU4NjdkZCAhaW1wb3J0YW50O1xyXG59XHJcbi5zaWRlLWJ0biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 1897:
/*!*****************************************************************!*\
  !*** ./src/app/_LayoutDashboard/timeline/timeline.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelineComponent": () => (/* binding */ TimelineComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_Models_project_details_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/project-details-dto */ 46047);
/* harmony import */ var src_app_Models_sub_task_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Models/sub-task-dto */ 9962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);













function TimelineComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "path", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function TimelineComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "path", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function TimelineComponent_div_38_div_4_div_1_tr_24_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_div_38_div_4_div_1_tr_24_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31); const item1_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.moreDetails(item1_r22.project_code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item1_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, item1_r22.ProjectName));
} }
function TimelineComponent_div_38_div_4_div_1_tr_24_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Lunch");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TimelineComponent_div_38_div_4_div_1_tr_24_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TimelineComponent_div_38_div_4_div_1_tr_24_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item1_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, item1_r22.Tasktype));
} }
function TimelineComponent_div_38_div_4_div_1_tr_24_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 80)(1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item1_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, item1_r22.ActionName));
} }
function TimelineComponent_div_38_div_4_div_1_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td")(4, "div", 102)(5, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, TimelineComponent_div_38_div_4_div_1_tr_24_a_10_Template, 3, 3, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, TimelineComponent_div_38_div_4_div_1_tr_24_a_11_Template, 2, 0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, TimelineComponent_div_38_div_4_div_1_tr_24_a_12_Template, 2, 0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, TimelineComponent_div_38_div_4_div_1_tr_24_a_13_Template, 3, 3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, TimelineComponent_div_38_div_4_div_1_tr_24_div_14_Template, 5, 3, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r22 = ctx.$implicit;
    const j_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](j_r23 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", item1_r22.Initial, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item1_r22.EmpName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item1_r22.ProjectName && item1_r22.Tasktype != "Lunch" && item1_r22.Tasktype != "Personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item1_r22.Tasktype == "Lunch");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item1_r22.Tasktype == "Personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item1_r22.ProjectName && item1_r22.Tasktype != "Lunch" && item1_r22.Tasktype != "Personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item1_r22.ActionName && item1_r22.ActionName != item1_r22.ProjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item1_r22.WorkAchieved);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item1_r22.starttime);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item1_r22.endtime);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item1_r22.Duration);
} }
function TimelineComponent_div_38_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 92)(1, "div", 70)(2, "h4", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 66)(6, "table", 94)(7, "thead")(8, "tr")(9, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "S.No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Achievement");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "End");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, TimelineComponent_div_38_div_4_div_1_tr_24_Template, 23, 12, "tr", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 99)(26, "div", 66)(27, "ul", 100)(28, "li", 101)(29, "span")(30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Total Hours: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 3, item_r19.SubmissionDate, "fullDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r19.Dardata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", item_r19.TotalDuration, " Hrs");
} }
function TimelineComponent_div_38_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 108)(1, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_div_38_div_4_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); ctx_r35.CurrentPageNo = ctx_r35.CurrentPageNo + 1; return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r35.loadMore()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Load More!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r17._CurrentpageRecords < 30);
} }
function TimelineComponent_div_38_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 108)(1, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_div_38_div_4_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); ctx_r37.CurrentPageNo = ctx_r37.CurrentPageNo + 1; return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r37.loadMore1()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Load More!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r18._CurrentpageRecords < 30);
} }
function TimelineComponent_div_38_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TimelineComponent_div_38_div_4_div_1_Template, 34, 6, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TimelineComponent_div_38_div_4_div_2_Template, 3, 1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TimelineComponent_div_38_div_4_div_3_Template, 3, 1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r14.darArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r14.Type == "My Timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r14.Type == "RACIS Timeline");
} }
function TimelineComponent_div_38_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 110)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No Timeline found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Please ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_div_38_div_5_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r39.darcreate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " to create timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function TimelineComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "div", 65)(3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TimelineComponent_div_38_div_4_Template, 4, 3, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, TimelineComponent_div_38_div_5_Template, 9, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 69)(7, "div", 70)(8, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " 14, March 2023 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 72)(11, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Stream Application(creative Planner) Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 74)(14, "div", 75)(15, "div", 76)(16, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " VM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 78)(19, "div", 79)(20, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Venkata Maharshi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Logged");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " '3 Hrs 30mins' ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "svg", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "path", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " 10:30 AM - 02:00 PM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 80)(31, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Stream Application(creative Planner) Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 80)(36, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Notifications And Timeline Activity Modules In Dashboard Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Rebinding done in notifications page for the responses from the users after clicking on more info icon.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 74)(42, "div", 75)(43, "div", 76)(44, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, " VM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 78)(47, "div", 79)(48, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, " Venkata Maharshi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Logged");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, " '3 Hrs 30mins' ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "svg", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "path", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, " 10:30 AM - 02:00 PM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, " in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 80)(59, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Stream Application(creative Planner) Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 80)(64, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Runway Module For Assign Project And Action To Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Action to project service update for the list of projects to be shown in runway page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 70)(70, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, " 13, March 2023 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "a", 88)(73, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Stream Application(creative Planner) Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 74)(76, "div", 75)(77, "div", 76)(78, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, " VM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 78)(81, "div", 79)(82, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, " Venkata Maharshi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Logged");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, " '3 Hrs 30mins' ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "svg", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](89, "path", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, " 10:30 AM - 02:00 PM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, " in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 80)(93, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Stream Application(creative Planner) Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 80)(98, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "Runway Module For Assign Project And Action To Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Action to project service update for the list of projects to be shown in runway page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.showtimeline == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.showtimeline == false);
} }
function TimelineComponent_div_39_div_4_div_1_tr_25_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 80)(1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 1, item1_r47.ActionName));
} }
function TimelineComponent_div_39_div_4_div_1_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td")(4, "div", 102)(5, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, TimelineComponent_div_39_div_4_div_1_tr_25_div_14_Template, 6, 3, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r47 = ctx.$implicit;
    const j_r48 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](j_r48 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", item1_r47.Initial, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item1_r47.EmpName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 9, item1_r47.date, "fullDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item1_r47.ActionName && item1_r47.ActionName != item1_r47.ProjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item1_r47.WorkAchieved, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item1_r47.starttime);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item1_r47.endtime);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item1_r47.Duration);
} }
function TimelineComponent_div_39_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 65)(1, "div", 70)(2, "h4", 93)(3, "a", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_div_39_div_4_div_1_Template_a_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52); const item_r44 = restoredCtx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r51.moreDetails(item_r44.project_code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 66)(7, "table", 94)(8, "thead")(9, "tr")(10, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "S.No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Achieved Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Achievement");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "End");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, TimelineComponent_div_39_div_4_div_1_tr_25_Template, 22, 12, "tr", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 99)(27, "div", 66)(28, "ul", 100)(29, "li", 101)(30, "span")(31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Total Hours: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, item_r44.ProjectName));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r44.Dardata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", item_r44.TotalDuration, " Hrs");
} }
function TimelineComponent_div_39_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TimelineComponent_div_39_div_4_div_1_Template, 35, 5, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 108)(3, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_div_39_div_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); ctx_r53.CurrentPageNo = ctx_r53.CurrentPageNo + 1; return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r53.loadMorebySort()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Load More!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r41.darArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r41._CurrentpageRecords < 30);
} }
function TimelineComponent_div_39_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 110)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No Timeline found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Please ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_div_39_div_5_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r55.darcreate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " to create timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function TimelineComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63)(1, "div", 112)(2, "div", 65)(3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TimelineComponent_div_39_div_4_Template, 5, 2, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, TimelineComponent_div_39_div_5_Template, 9, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.showtimeline == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.showtimeline == false);
} }
function TimelineComponent_div_64_ng_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r59.Project_Code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, item_r59.Project_Name), " ");
} }
function TimelineComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ng-select", 116, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TimelineComponent_div_64_Template_ng_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r60.master_code = $event); })("change", function TimelineComponent_div_64_Template_ng_select_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r62.getTimelineActions()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TimelineComponent_div_64_ng_option_7_Template, 3, 4, "ng-option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r5.master_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.projectList);
} }
function TimelineComponent_div_65_ng_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r65.Project_Code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, item_r65.Project_Name), " ");
} }
function TimelineComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ng-select", 120, 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TimelineComponent_div_65_Template_ng_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r66.project_code = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TimelineComponent_div_65_ng_option_7_Template, 3, 4, "ng-option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r6.project_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.actionList);
} }
function TimelineComponent_ng_option_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 122)(1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r68 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r68)("disabled", item_r68 != ctx_r8.lastEndtime && ctx_r8.bol == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r68);
} }
function TimelineComponent_ng_option_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 122)(1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r70 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r70)("disabled", item_r70 <= ctx_r10.lastEndtime);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r70);
} }
function TimelineComponent_span_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "End time cannot be less than Start time!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TimelineComponent_button_101_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_button_101_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r72.submitDar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r12.master_code || !ctx_r12.project_code || !ctx_r12.workdes || !ctx_r12.starttime || !ctx_r12.endtime || ctx_r12.endtime < ctx_r12.starttime);
} }
function TimelineComponent_button_102_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_button_102_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r74.submitDar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r13.master_code || !ctx_r13.workdes || !ctx_r13.starttime || !ctx_r13.endtime || ctx_r13.endtime < ctx_r13.starttime);
} }
class TimelineComponent {
    constructor(service, notifyService, datepipe) {
        this.service = service;
        this.notifyService = notifyService;
        this.datepipe = datepipe;
        this.type1 = 'My Timeline';
        this.type2 = 'RACIS Timeline';
        this.CurrentPageNo = 1;
        this.darArray = [];
        this.sort1 = 'Date';
        this.sort2 = 'Project';
        this.activeDate = false;
        this.activeProject = false;
        this.showProject = false;
        this.showAction = false;
        this.disablePreviousDate = new Date();
        this.todayDate = new Date();
        this.current_Date = this.datepipe.transform(new Date(), 'MM/dd/yyyy');
        this.date = new Date();
        this.dateF = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(new Date());
        this.timedata = [];
        this.starttimearr = [];
        this.endtimearr = [];
        this.bol = true;
        this.showtimeline = true;
        this.ObjSubTaskDTO = new src_app_Models_sub_task_dto__WEBPACK_IMPORTED_MODULE_2__.SubTaskDTO();
        this.objProjectDto = new src_app_Models_project_details_dto__WEBPACK_IMPORTED_MODULE_1__.ProjectDetailsDTO();
    }
    ngOnInit() {
        this.Current_user_ID = localStorage.getItem('EmpNo');
        this.timelineLog(this.type1);
        this.activeDate = true;
        this.sortType = this.sort1;
        this.disablePreviousDate.setDate(this.disablePreviousDate.getDate() - 1);
        this.current_Date = moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format("MM/DD/YYYY");
        this.currenthours = this.date.getHours();
        this.currentminutes = this.date.getMinutes();
    }
    timelineLog(type) {
        this.Type = type;
        this.showtimeline = true;
        this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
        this.ObjSubTaskDTO.PageNumber = 1;
        this.ObjSubTaskDTO.PageSize = 30;
        this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe(data => {
            this.timelineList = JSON.parse(data[0]['DAR_Details_Json']);
            this.timelineDuration = (data[0]['TotalTime']);
            this.darArray = this.timelineList;
            this._CurrentpageRecords = this.timelineList.length;
            if (this.timelineList.length == 0) {
                this.showtimeline = false;
                this.timelineDuration = 0;
            }
        });
    }
    timelineLog1(type) {
        this.Type = type;
        this.showtimeline = true;
        this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
        this.ObjSubTaskDTO.PageNumber = 1;
        this.ObjSubTaskDTO.PageSize = 30;
        this.service._GetTimelineActivityforRACIS(this.ObjSubTaskDTO).subscribe(data => {
            this.timelineList = JSON.parse(data[0]['DAR_Details_Json']);
            this.darArray = this.timelineList;
            this._CurrentpageRecords = this.timelineList.length;
            if (this.timelineList.length == 0) {
                this.showtimeline = false;
            }
        });
        this.service._GetTimelineDurationforRACIS(this.ObjSubTaskDTO).subscribe(data => {
            this.timelineDuration = (data[0]['TotalTime']);
        });
    }
    sortTimeline(sort) {
        this.sortType = sort;
        if (sort == 'Date') {
            this.activeDate = true;
            this.activeProject = false;
        }
        if (sort == 'Project') {
            this.activeDate = false;
            this.activeProject = true;
        }
        if (this.Type == 'My Timeline') {
            this.showtimeline = true;
            this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
            this.ObjSubTaskDTO.PageNumber = 1;
            this.ObjSubTaskDTO.PageSize = 30;
            this.ObjSubTaskDTO.sort = sort;
            this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe(data => {
                this.timelineList = JSON.parse(data[0]['DAR_Details_Json']);
                this.timelineDuration = (data[0]['TotalTime']);
                this.darArray = this.timelineList;
                this._CurrentpageRecords = this.timelineList.length;
                if (this.timelineList.length == 0) {
                    this.showtimeline = false;
                    this.timelineDuration = 0;
                }
            });
        }
        else if (this.Type == 'RACIS Timeline') {
            this.showtimeline = true;
            this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
            this.ObjSubTaskDTO.PageNumber = 1;
            this.ObjSubTaskDTO.PageSize = 30;
            this.ObjSubTaskDTO.sort = sort;
            this.service._GetTimelineActivityforRACIS(this.ObjSubTaskDTO).subscribe(data => {
                this.timelineList = JSON.parse(data[0]['DAR_Details_Json']);
                this.darArray = this.timelineList;
                this._CurrentpageRecords = this.timelineList.length;
                if (this.timelineList.length == 0) {
                    this.showtimeline = false;
                    this.timelineDuration = 0;
                }
            });
            this.service._GetTimelineDurationforRACIS(this.ObjSubTaskDTO).subscribe(data => {
                this.timelineDuration = (data[0]['TotalTime']);
            });
        }
    }
    loadMore() {
        this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
        this.ObjSubTaskDTO.PageNumber = this.CurrentPageNo;
        this.ObjSubTaskDTO.PageSize = 30;
        this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe(data => {
            this.timelineList = JSON.parse(data[0]['DAR_Details_Json']);
            this.timelineDuration = (data[0]['TotalTime']);
            this.timelineList.forEach(element => {
                this.darArray.push(element);
            });
            if (this.timelineList) {
                this._CurrentpageRecords = this.timelineList.length;
            }
        });
    }
    loadMore1() {
        this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
        this.ObjSubTaskDTO.PageNumber = this.CurrentPageNo;
        this.ObjSubTaskDTO.PageSize = 30;
        this.service._GetTimelineActivityforRACIS(this.ObjSubTaskDTO).subscribe(data => {
            this.timelineList = JSON.parse(data[0]['DAR_Details_Json']);
            this.timelineList.forEach(element => {
                this.darArray.push(element);
            });
            if (this.timelineList) {
                this._CurrentpageRecords = this.timelineList.length;
            }
        });
        this.service._GetTimelineDurationforRACIS(this.ObjSubTaskDTO).subscribe(data => {
            this.timelineDuration = (data[0]['TotalTime']);
        });
    }
    loadMorebySort() {
        if (this.Type == 'My Timeline') {
            this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
            this.ObjSubTaskDTO.PageNumber = this.CurrentPageNo;
            this.ObjSubTaskDTO.PageSize = 30;
            this.ObjSubTaskDTO.sort = this.sortType;
            this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe(data => {
                this.timelineList = JSON.parse(data[0]['DAR_Details_Json']);
                this.timelineDuration = (data[0]['TotalTime']);
                this.timelineList.forEach(element => {
                    this.darArray.push(element);
                });
                if (this.timelineList) {
                    this._CurrentpageRecords = this.timelineList.length;
                }
            });
        }
        else if (this.Type == 'RACIS Timeline') {
            this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
            this.ObjSubTaskDTO.PageNumber = this.CurrentPageNo;
            this.ObjSubTaskDTO.PageSize = 30;
            this.ObjSubTaskDTO.sort = this.sortType;
            this.service._GetTimelineActivityforRACIS(this.ObjSubTaskDTO).subscribe(data => {
                this.timelineList = JSON.parse(data[0]['DAR_Details_Json']);
                this.timelineList.forEach(element => {
                    this.darArray.push(element);
                });
                this.service._GetTimelineDurationforRACIS(this.ObjSubTaskDTO).subscribe(data => {
                    this.timelineDuration = (data[0]['TotalTime']);
                });
                if (this.timelineList) {
                    this._CurrentpageRecords = this.timelineList.length;
                }
            });
        }
    }
    getTimelineProjects() {
        this.showProject = true;
        this.master_code = null;
        this.project_code = null;
        this.showAction = false;
        this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
        this.ObjSubTaskDTO.ProjectBlock = this.project_type;
        this.service._GetTimelineProjects(this.ObjSubTaskDTO).subscribe(data => {
            this.projectList = JSON.parse(data[0]['ProjectList']);
        });
    }
    getTimelineActions() {
        this.showAction = false;
        this.project_code = null;
        this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
        this.ObjSubTaskDTO.Project_Code = this.master_code;
        this.service._GetTimelineProjects(this.ObjSubTaskDTO).subscribe(data => {
            this.actionList = JSON.parse(data[0]['ActionList']);
            if (this.actionList == null || this.actionList == '' || this.actionList.length == 0) {
                this.showAction = false;
            }
            else {
                this.showAction = true;
            }
        });
    }
    clear() {
        this.showProject = false;
        this.master_code = null;
        this.project_code = null;
        this.showAction = false;
        this.project_type = null;
        this.workdes = "";
        this.workdes = "";
        this.current_Date = this.datepipe.transform(new Date(), 'MM/dd/yyyy');
        this.dateF = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(new Date());
        this.starttime = null;
        this.endtime = null;
        this.starttimearr = [];
        this.endtimearr = [];
    }
    // Timeline submission
    orgValueChange(val) {
        this.current_Date = moment__WEBPACK_IMPORTED_MODULE_0__(val.value).format("MM/DD/YYYY");
    }
    getDarTime() {
        this.timedata = [];
        this.timedata1 = ["08:00",
            "08:15", "08:30", "08:45", "09:00",
            "09:15", "09:30", "09:45", "10:00",
            "10:15", "10:30", "10:45", "11:00",
            "11:15", "11:30", "11:45", "12:00",
            "12:15", "12:30", "12:45", "13:00",
            "13:15", "13:30", "13:45", "14:00",
            "14:15", "14:30", "14:45", "15:00",
            "15:15", "15:30", "15:45", "16:00",
            "16:15", "16:30", "16:45", "17:00",
            "17:15", "17:30", "17:45", "18:00",
            "18:15", "18:30", "18:45", "19:00",
            "19:15", "19:30", "19:45", "20:00"];
        this.objProjectDto.Emp_No = this.Current_user_ID;
        this.current_Date = this.datepipe.transform(this.current_Date, 'MM/dd/yyyy');
        this.date11 = moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format("MM/DD/YYYY");
        this.objProjectDto.date = this.current_Date;
        if (this.current_Date == this.date11) {
            this.timedata1.forEach(element => {
                const [shours, sminutes] = element.split(":");
                if (shours <= this.currenthours)
                    this.timedata.push(element);
            });
        }
        else {
            this.timedata1.forEach(element => {
                this.timedata.push(element);
            });
        }
        this.service._GetTimeforDar(this.Current_user_ID, this.current_Date)
            .subscribe(data => {
            debugger;
            this.timeList = JSON.parse(data[0]['time_json']);
            if (this.timeList.length != 0) {
                this.bol = false;
                this.timeList.forEach(element => {
                    this.starttimearr.push(element.starttime);
                });
                this.timeList.forEach(element => {
                    this.endtimearr.push(element.endtime);
                });
                let l = this.endtimearr.length;
                this.lastEndtime = this.endtimearr[l - 1];
            }
            else if (this.timeList.length == 0) {
                this.bol = true;
                this.lastEndtime = 0;
                this.starttimearr = [];
                this.endtimearr = [];
            }
        });
    }
    diff_minutes(dt2, dt1) {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= 60;
        return Math.abs(Math.round(diff));
    }
    submitDar() {
        if (this.starttime != null && this.endtime != null) {
            const [shours, sminutes] = this.starttime.split(":");
            const [ehours, eminutes] = this.endtime.split(":");
            var dt1 = new Date(2014, 10, 2, shours, sminutes);
            var dt2 = new Date(2014, 10, 2, ehours, eminutes);
            this.minutes = this.diff_minutes(dt1, dt2) % 60;
            if (this.minutes < 10) {
                this.minutes = "0" + this.minutes;
            }
            this.hours = Math.floor(this.diff_minutes(dt1, dt2) / 60);
            if (this.hours < 10) {
                this.hours = "0" + this.hours;
            }
            this.timecount = (this.hours + ":" + this.minutes);
        }
        this.objProjectDto.Emp_No = this.Current_user_ID;
        if (this.starttime != undefined && this.endtime != undefined && this.timecount != undefined) {
            this.objProjectDto.StartTime = this.starttime;
            this.objProjectDto.EndTime = this.endtime;
            this.objProjectDto.TimeCount = this.timecount;
        }
        this.current_Date = this.datepipe.transform(this.current_Date, 'MM/dd/yyyy');
        this.objProjectDto.date = this.current_Date;
        this.objProjectDto.WorkAchieved = this.workdes;
        if (this.showAction == false) {
            this.objProjectDto.Master_code = this.master_code;
            this.objProjectDto.Project_Code = this.master_code;
        }
        else if (this.showAction == true) {
            this.objProjectDto.Master_code = this.master_code;
            this.objProjectDto.Project_Code = this.project_code;
        }
        this.objProjectDto.Exec_BlockName = null;
        this.objProjectDto.Project_Name = null;
        this.objProjectDto.Emp_Comp_No = null;
        this.service._InsertDARServie(this.objProjectDto)
            .subscribe(data => {
            this._Message = data['message'];
            this.notifyService.showSuccess(this._Message, "Success");
        });
        this.timelineLog(this.Type);
        this.getDarTime();
        document.getElementById("timepage").classList.remove("position-fixed");
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
        this.clear();
    }
    // Timeline submission ends
    darcreate() {
        document.getElementById("timepage").classList.add("position-fixed");
        document.getElementById("rightbar-overlay").style.display = "block";
        document.getElementById("darsidebar").classList.add("kt-quick-panel--on");
        this.clear();
    }
    closedarBar() {
        document.getElementById("timepage").classList.remove("position-fixed");
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
        this.notifyService.showError("Cancelled", '');
        this.clear();
    }
    closeInfo() {
        document.getElementById("timepage").classList.remove("position-fixed");
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
        this.clear();
    }
    moreDetails(pcode) {
        let name = 'MoreDetails';
        var url = document.baseURI + name;
        var myurl = `${url}/${pcode}`;
        var myWindow = window.open(myurl, pcode);
        myWindow.focus();
    }
    notinAction() {
        this.notifyService.showError("Development Under Maintainance", 'Failed');
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_3__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe)); };
TimelineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], decls: 108, vars: 32, consts: [["id", "timepage", 1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height", "side_view"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi"], [1, "kt-portlet__head", "align-items-center"], [1, "kt-portlet__head-label"], [1, "dropdown"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "kt-portlet__head-title", "cursor-pointer", "dropdown-toggle", "select-box"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "main-d"], [3, "ngClass", "click"], [1, "d-flex", "align-items-center"], [1, "mr-2"], ["id", "srt-btn", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn-pill", "btn", "btn-sm", "btn-sort", "mr-2", "dropdown-toggle", "no-after"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-sort-down", "desc-ar"], ["d", "M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-sort-up", "asc-ar"], ["d", "M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"], ["href", "javascritp:void(0)", 1, "ordr-a"], ["aria-labelledby", "srt-btn", 1, "dropdown-menu", "dropdown-menu-right", "sort-drop"], [1, "sort-by", "pb-2"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "btn-fw", 3, "click"], ["class", "kt-portlet portlet-height", 4, "ngIf"], ["id", "darsidebar", 1, "sideInfobar", "animate-right"], [1, "kt-portlet"], [1, "kt-portlet__head"], [1, "offcanvas-header", "d-flex", "align-items-center", "justify-content-between", "pb-2"], [1, "m-0"], [1, "fa", "fa-link", "mr-1"], ["href", "javascript:void(0)", 1, "closebtn", "btn", "btn-xs", "btn-icon", "btn-hover-info", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24", "fill", "currentColor"], ["fill", "none", "d", "M0 0h24v24H0z"], ["d", "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"], [1, "kt-portlet__body", "pb-0", "pt-3", "sidehf_scroll", "scroll-y"], [1, "form-group", "text-dark-50", "w-75px", "flex-grow-1", "brdng-0"], [1, "text-danger"], ["required", "", "name", "type", "placeholder", "Select Type", "id", "projType", 3, "ngModel", "ngModelChange", "change"], ["type", "ngModel"], ["value", "core"], ["value", "standard"], ["class", "form-group text-dark-50 w-75px flex-grow-1 brdng-0", 4, "ngIf"], [1, "form-group"], ["type", "text", "name", "work", "placeholder", "Define your achievement here.", 1, "form-control", "h-100px", 3, "ngModel", "ngModelChange"], [1, "input-group"], ["matInput", "", "id", "d-date", "required", "", "placeholder", "Select Date", "name", "date", 1, "form-control", 3, "value", "matDatepicker", "min", "max", "dateChange", "click"], [1, "input-group-text", "p-0"], ["matSuffix", "", 3, "for"], ["picker1", ""], [1, "d-flex", "gap-1"], [1, "form-group", "w-100"], ["name", "time", "placeholder", "Select Start Time", "id", "time-start", 3, "ngModel", "click", "ngModelChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["name", "endtim", "placeholder", "Select End Time", "id", "time-end", 3, "ngModel", "click", "ngModelChange"], ["end", "ngModel"], ["style", "color:red", "id", "err1", 4, "ngIf"], [1, "kt-portlet__foot", "py-3"], ["type", "submit", "class", "btn btn-sm btn-info", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-info btn-sm", 3, "disabled", "click", 4, "ngIf"], ["type", "reset", 1, "btn", "btn-secondary", "btn-sm", "ml-2", 3, "click"], ["type", "submit", 1, "btn", "btn-secondary", "btn-sm", "ml-2", 3, "click"], ["id", "rightbar-overlay", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-check", "ckc-icn"], ["d", "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"], [1, "kt-portlet", "portlet-height"], [1, "kt-portlet__body", "kt-portlet__body_scroll", "p-0"], [1, "mt-3"], [1, ""], ["class", "scrollbar1", 4, "ngIf"], ["class", "text-center py-4", "style", "color: lightgrey", 4, "ngIf"], [1, "timeline", "d-none"], [1, "timeline-header", "sticky-header"], [1, "header-text", "header-date", "d-none"], ["href", "javascript:void(0)", 1, "pro-name"], [1, "header-text"], [1, "timeline-item"], [1, "timeline-icon", "symbol", "symbol-circle", "symbol-40px"], [1, "symbol-label", "kt-bg-light-primary"], [1, "timeline-media"], [1, "timeline-content", "mb-10", "mt-n2"], [1, "overflow-auto", "pt-2", "pr-3"], [1, "timeline-text", "fs-6"], [1, "desp-txt", "fs-7"], [1, "ml-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "width", "16px", "height", "16px", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6", 2, "vertical-align", "sub", "color", "#848c93"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"], ["href", "javascript:void(0)", 1, "pro-link"], [1, "timeline-text", "fs-6", "achv-txt"], [1, "header-text", "header-date"], ["href", "javascript:void(0)", 1, "pro-name", "d-none"], [1, "scrollbar1"], ["class", "px-4", 4, "ngFor", "ngForOf"], ["style", "text-align:center", 4, "ngIf"], [1, "px-4"], [1, "header-date", "p-0"], [1, "time-table", "mb-1"], [2, "width", "50px"], [2, "width", "280px"], [2, "width", "80px"], [4, "ngFor", "ngForOf"], [1, "time-totals", "mb-3"], [1, "time-totals-list"], [1, "totals-list--item"], [1, "d-flex"], [1, "initial-box", "color-7", "b-50", "mr-2"], [1, "user--name"], ["class", "pro-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "timeline-text fs-6", 4, "ngIf"], ["href", "javascript:void(0)", 1, "pro-link", 3, "click"], [2, "text-align", "center"], [1, "btn", "btn-info", "loadMore", 3, "hidden", "click"], [1, "text-center", "py-4", 2, "color", "lightgrey"], ["href", "javascript:void(0)", 3, "click"], [1, "kt-portlet__body", "kt-portlet__body_scroll", "pt-0"], ["class", "item-b  ribbon-content scrollbar1", 4, "ngIf"], [1, "item-b", "ribbon-content", "scrollbar1"], ["class", "mt-3", 4, "ngFor", "ngForOf"], ["required", "", "name", "project", "placeholder", "Select Project", "id", "projName", 3, "ngModel", "ngModelChange", "change"], ["project", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["required", "", "name", "action", "placeholder", "Select Action", "id", "actinName", 3, "ngModel", "ngModelChange"], ["action", "ngModel"], [3, "value", "disabled"], ["id", "err1", 2, "color", "red"], ["type", "submit", 1, "btn", "btn-sm", "btn-info", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-info", "btn-sm", 3, "disabled", "click"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_Template_a_click_10_listener() { return ctx.timelineLog(ctx.type1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_Template_a_click_12_listener() { return ctx.timelineLog1(ctx.type2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 6)(20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 18)(28, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Sort by");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_Template_a_click_30_listener() { return ctx.sortTimeline(ctx.sort1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, TimelineComponent_span_32_Template, 3, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_Template_a_click_33_listener() { return ctx.sortTimeline(ctx.sort2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, TimelineComponent_span_35_Template, 3, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_Template_button_click_36_listener() { return ctx.darcreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, " Create Timeline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, TimelineComponent_div_38_Template, 103, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, TimelineComponent_div_39_Template, 6, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 23)(41, "div", 24)(42, "div", 25)(43, "div", 26)(44, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Timeline Submission");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_Template_a_click_47_listener() { return ctx.closedarBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "path", 31)(50, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 33)(52, "div")(53, "div", 34)(54, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Project Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "ng-select", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TimelineComponent_Template_ng_select_ngModelChange_58_listener($event) { return ctx.project_type = $event; })("change", function TimelineComponent_Template_ng_select_change_58_listener() { return ctx.getTimelineProjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "ng-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Core/Secondary tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "ng-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Standard/Routine/ToDo tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, TimelineComponent_div_64_Template, 8, 2, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, TimelineComponent_div_65_Template, 8, 2, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 41)(67, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Work Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "textarea", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TimelineComponent_Template_textarea_ngModelChange_71_listener($event) { return ctx.workdes = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 41)(73, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 43)(78, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dateChange", function TimelineComponent_Template_input_dateChange_78_listener($event) { return ctx.orgValueChange($event); })("click", function TimelineComponent_Template_input_click_78_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r76); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](82); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r7.open()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](80, "mat-datepicker-toggle", 46)(81, "mat-datepicker", null, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 48)(84, "div", 49)(85, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "Start Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "ng-select", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_Template_ng_select_click_89_listener() { return ctx.getDarTime(); })("ngModelChange", function TimelineComponent_Template_ng_select_ngModelChange_89_listener($event) { return ctx.starttime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](90, TimelineComponent_ng_option_90_Template, 3, 3, "ng-option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 49)(92, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "End Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "ng-select", 52, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_Template_ng_select_click_96_listener() { return ctx.getDarTime(); })("ngModelChange", function TimelineComponent_Template_ng_select_ngModelChange_96_listener($event) { return ctx.endtime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](98, TimelineComponent_ng_option_98_Template, 3, 3, "ng-option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](99, TimelineComponent_span_99_Template, 2, 0, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](101, TimelineComponent_button_101_Template, 2, 1, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](102, TimelineComponent_button_102_Template, 2, 1, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_Template_button_click_103_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_Template_button_click_105_listener() { return ctx.closedarBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimelineComponent_Template_div_click_107_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.Type, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.Type == ctx.type1 ? "dropdown-item active" : "dropdown-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.type1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.Type == ctx.type2 ? "dropdown-item active" : "dropdown-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.type2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total Achievement hours: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](18, 29, ctx.timelineDuration, "1.2-2"), " hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.sortType);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.activeDate ? "dropdown-item active" : "dropdown-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeDate == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.activeProject ? "dropdown-item active" : "dropdown-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeProject == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortType == "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortType == "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.project_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showProject == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showAction == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.workdes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.dateF.value)("matDatepicker", _r7)("min", ctx.disablePreviousDate)("max", ctx.todayDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.starttime);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.timedata);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.endtime);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.timedata);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.endtime < ctx.starttime);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showAction == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showAction == false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["ɵr"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".timeline-header[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    font-size: 15px;\r\n    color: #333;\r\n    font-weight: 600;\r\n    border-bottom: none;\r\n    background-color: #fff;\r\n    padding-bottom: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-top: 0px;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    z-index: 14;\r\n}\r\n.sticky-header[_ngcontent-%COMP%]{\r\n    margin-top: 0px;\r\n    z-index: 14;\r\n    position: sticky;\r\n    top: 0px;\r\n    font-size: 18px;\r\n}\r\n.pro-name[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    color: #333;\r\n    display: flex;\r\n    align-items: center;\r\n    min-width: 0;\r\n    max-width: 80%;\r\n}\r\n.pro-name.pro-link[_ngcontent-%COMP%]{\r\n    color: #5867dd;\r\n}\r\n.header-date[_ngcontent-%COMP%]{\r\n    color: #333;\r\n    margin-bottom: 1rem;\r\n}\r\n.header-text[_ngcontent-%COMP%] {\r\n    line-height: 1.42857;\r\n    margin-right: 5px;\r\n    -ms-word-break: break-word;\r\n    word-break: break-word;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.portlet-height[_ngcontent-%COMP%]{\r\n    min-height: calc(100vh - 110px);\r\n    margin-bottom: 0px;\r\n}\r\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: flex;\r\n    align-items: flex-start;\r\n}\r\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\r\n    background: #ffff;\r\n    box-shadow: 0 0.1rem 1rem 0.25rem rgb(0 0 0 / 5%);\r\n    margin-bottom: 1.5rem;\r\n    padding: 15px;\r\n    border-radius: 5px;\r\n    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgb(111 107 107 / 8%) 0px 0px 0px 1px;\r\n}\r\n.timeline[_ngcontent-%COMP%]   .timeline-line[_ngcontent-%COMP%] {\r\n    display: block;\r\n    content: \" \";\r\n    justify-content: center;\r\n    position: absolute;\r\n    z-index: 0;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    transform: translate(50%);\r\n    border-left-width: 1px;\r\n    border-left-style: dashed;\r\n    border-left-color: #d2d5e5;\r\n}\r\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:last-child   .timeline-line[_ngcontent-%COMP%] {\r\n    bottom: 100%;\r\n}\r\n.timeline-media[_ngcontent-%COMP%]{\r\n    color: #2786fb!important;\r\n}\r\n.w-40px[_ngcontent-%COMP%] {\r\n    width: 40px!important;\r\n}\r\n.timeline[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%] {\r\n    z-index: 1;\r\n    flex-shrink: 0;\r\n    margin-right: 1rem;\r\n}\r\n.timeline[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%] {\r\n    z-index: 1;\r\n    flex-shrink: 0;\r\n    margin-right: 1rem;\r\n}\r\n.symbol.symbol-circle[_ngcontent-%COMP%], .symbol.symbol-circle[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%], .symbol.symbol-circle[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n}\r\n.symbol[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n.symbol.symbol-40px[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n.symbol.symbol-35px[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    height: 35px;\r\n}\r\n.symbol.symbol-22px[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\r\n    width: 22px;\r\n    height: 22px;\r\n}\r\n.symbol[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    border: 1px solid #cdcdd8;\r\n}\r\n.symbol[_ngcontent-%COMP%]   .symbol-label[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-weight: 500;\r\n    color: #3f4254;\r\n    background-color: #f5f8fa;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    background-size: cover;\r\n    border-radius: 0.475rem;\r\n}\r\n.svg-icon[_ngcontent-%COMP%] {\r\n    line-height: 1;\r\n}\r\n.svg-icon.svg-icon-2[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    height: 1.5rem!important;\r\n    width: 1.5rem!important;\r\n}\r\n.svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    height: 1.15rem;\r\n    width: 1.15rem;\r\n}\r\n.timeline[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow: auto;\r\n    \r\n}\r\n.timeline-text[_ngcontent-%COMP%]{\r\n    color: #333;\r\n    color: #29282d;\r\n    margin-bottom: 0.5rem;\r\n}\r\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0px !important;\r\n}\r\n.achv-txt[_ngcontent-%COMP%]{\r\n    color: #54585d;\r\n}\r\n.desp-txt[_ngcontent-%COMP%]{\r\n    margin-right: 5px;\r\n    color: #64697d;\r\n    color: #848c93;\r\n}\r\n\r\n.time-table[_ngcontent-%COMP%] {\r\n    border-collapse: separate;\r\n    border-spacing: 0;\r\n    width: 100%;\r\n    margin-bottom: 7px;\r\n    font-size: 13px;\r\n    border: solid #e1e1e1 1px;\r\n    border-radius: 4px;\r\n  }\r\n.time-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    background-color: rgb(21, 21, 42) !important;\r\n    background-color: #6e6d76 !important;\r\n  }\r\n.time-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    padding: 10px;\r\n    font-weight: 600;\r\n  }\r\n.time-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\r\n    background: #f7f9fb;\r\n  }\r\n.time-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\r\n    border-left: none;\r\n  }\r\n.time-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-left: 1px solid #e1e6ee;\r\n    border-top: 1px solid #e1e6ee;\r\n    padding: 10px;\r\n    color: #0b0e1f;\r\n    vertical-align: middle;\r\n  }\r\n.time-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n    background: #f2f5f9;\r\n    transition: all 0.1s ease-in-out;\r\n  }\r\n.user--name[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n.tags-wrap[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n  }\r\n.tags_tag[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    color: #ffffff;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    line-height: 20px;\r\n    height: 20px;\r\n    padding: 0 8px;\r\n    border-radius: 10px;\r\n    position: relative;\r\n    margin-bottom: 3px;\r\n    margin-right: 4px;\r\n    cursor: pointer;\r\n  }\r\n.tags-name[_ngcontent-%COMP%] {\r\n    max-width: 180px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n.tags-remove[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    color: #fff;\r\n    margin-left: 5px;\r\n    display: none;\r\n  }\r\n.tags-tag[_ngcontent-%COMP%]:hover   .tags-remove[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n.u-common-icon[_ngcontent-%COMP%] {\r\n    pointer-events: none;\r\n    color: #aaa;\r\n    transition: transform 210ms ease-in-out;\r\n  }\r\n.color--inherit[_ngcontent-%COMP%] {\r\n    color: inherit !important;\r\n  }\r\n.chckbx[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n.b-50[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n  }\r\n.list-header[_ngcontent-%COMP%] {\r\n    margin: 10px 0 0 9px;\r\n    display: flex;\r\n  }\r\n.header-date[_ngcontent-%COMP%] {\r\n    align-self: flex-start;\r\n    color: #0b0e1f !important;\r\n    font-size: 16px !important;\r\n    font-weight: 600 !important;\r\n    border: none;\r\n    padding: 10px 0 5px;\r\n  }\r\n.time-totals[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    color: #0b0e1f;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: end;\r\n  }\r\n.time-totals-list[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    list-style-type: none;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n.totals-list--item[_ngcontent-%COMP%] {\r\n    margin-left: 12px;\r\n    font-weight: 400;\r\n  }\r\n.initial-box[_ngcontent-%COMP%] {\r\n    background-color: #f9ce6f;\r\n    color: #fff;\r\n    padding: 0;\r\n    border-radius: 5px;\r\n    font-weight: 600;\r\n    width: 25px;\r\n    height: 25px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 12px;\r\n  }\r\n.b-50[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n  }\r\n.color-7[_ngcontent-%COMP%] {\r\n    background-color: #9b59b6;\r\n  }\r\n.noti[_ngcontent-%COMP%] {\r\n    background: #153b5669;\r\n    border-radius: 50%;\r\n    padding: 0.2em 0.5rem 0.35rem 0.5rem;\r\n    min-width: 1.429rem;\r\n    min-height: 1.429rem;\r\n    line-height: 1;\r\n    margin-left: 5px;\r\n    position: absolute;\r\n    top: -7px;\r\n    right: -6px;\r\n  }\r\n\r\n.sideInfobar[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 999;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: #ffffff;\r\n    border-left: 1px solid #EDEAE9;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    box-shadow: 0 .1rem 1rem .25rem rgb(0 0 0/5%) !important;\r\n    \r\n}\r\n.btn-fw[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n}\r\n.asc-ar[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n.btn-sort[_ngcontent-%COMP%]{\r\n    color: #0b0e1f;\r\n    background-color: #fff;\r\n    border: 1px solid #eef1f6;\r\n    border-radius: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\na.ordr-a[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    margin-left: 5px;\r\n    color: #0b0e1f;\r\n}\r\n.sort-by[_ngcontent-%COMP%]{\r\n    color: #999999;\r\n    font-size: 12px;\r\n    padding: 8px;\r\n\r\n}\r\n.sort-a[_ngcontent-%COMP%]{\r\n    text-decoration: underline;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]{\r\n    padding: 0.8rem 0;\r\n    min-width: 12rem;\r\n    margin-top: 5px;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{\r\n    padding: 0.4rem 1rem;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background: #f1f6fd;\r\n    color: #0b0e1f;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    display: flex;\r\n}\r\n.sort-drop[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .ckc-icn[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    color: #3b93fc;\r\n}\r\n.btn-sort[_ngcontent-%COMP%]:hover, .btn-sort[_ngcontent-%COMP%]:focus, .btn-sort[_ngcontent-%COMP%]:active  {\r\n    color: #0b0e1f;\r\n    background-color: #f5f7fa;\r\n    border: 1px solid #e1e6ee;\r\n}\r\n.select-box[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\na.dropdown-item[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n@media Screen and (min-width: 1025px) {\r\n\r\n.kt-quick-panel--on[_ngcontent-%COMP%]{\r\n    width: 50% !important;\r\n\r\n}\r\n}\r\n@media Screen and (max-width: 1024px) {\r\n\r\n    .kt-quick-panel--on[_ngcontent-%COMP%] {\r\n        width: 75%;\r\n    }\r\n}\r\n@media Screen and (max-width: 768px) {\r\n\r\n    .kt-quick-panel--on[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n}\r\n.scrollbar1[_ngcontent-%COMP%] {\r\n  max-height: calc(100vh - 130px);\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n.scrollbar1[_ngcontent-%COMP%] {\r\n  max-height: calc(100vh - 138px);\r\n  overflow-y: auto;\r\n}\r\n\r\n.scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n.scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n  border-radius: 10px;\r\n}\r\n\r\n.scrollbar1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #ccc;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFFWCxnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlEQUFpRDtJQUNqRCxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1RkFBdUY7QUFDM0Y7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsT0FBTztJQUNQLE1BQU07SUFDTixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBRUE7OztJQUdJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsY0FBYztBQUNsQjtBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsNENBQTRDO0lBQzVDLG9DQUFvQztFQUN0QztBQUVBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixjQUFjO0lBQ2Qsc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsZ0NBQWdDO0VBQ2xDO0FBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7QUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFFQTtJQUNFLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsdUNBQXVDO0VBQ3pDO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLGFBQWE7RUFDZjtBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7RUFDdEI7QUFDQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0VBQ2I7QUFDRixvQkFBb0I7QUFFcEI7SUFDSSxZQUFZO0lBQ1osUUFBUTtJQUNSLGVBQWU7SUFDZixZQUFZO0lBQ1osTUFBTTtJQUNOLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsd0RBQXdEO0lBQ3hELHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7O0FBRUE7SUFDSSxxQkFBcUI7O0FBRXpCO0FBQ0E7QUFDQTs7SUFFSTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7O0lBRUk7UUFDSSxXQUFXO0lBQ2Y7QUFDSjtBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7QUFFQSxVQUFVO0FBRVY7RUFDRSxVQUFVO0FBQ1o7QUFFQSxVQUFVO0FBRVY7RUFDRSxtQkFBbUI7QUFDckI7QUFFQSxXQUFXO0FBRVg7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBRUEsb0JBQW9CO0FBRXBCO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InRpbWVsaW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi50aW1lbGluZS1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTQ7XHJcbn1cclxuLnN0aWNreS1oZWFkZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB6LWluZGV4OiAxNDtcclxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ucHJvLW5hbWUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG59XHJcbi5wcm8tbmFtZS5wcm8tbGlua3tcclxuICAgIGNvbG9yOiAjNTg2N2RkO1xyXG59XHJcbi5oZWFkZXItZGF0ZXtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4uaGVhZGVyLXRleHQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIC1tcy13b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLnBvcnRsZXQtaGVpZ2h0e1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDExMHB4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4udGltZWxpbmUgLnRpbWVsaW5lLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG4udGltZWxpbmUgLnRpbWVsaW5lLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMXJlbSAxcmVtIDAuMjVyZW0gcmdiKDAgMCAwIC8gNSUpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDZweCAyNHB4IDBweCwgcmdiKDExMSAxMDcgMTA3IC8gOCUpIDBweCAwcHggMHB4IDFweDtcclxufVxyXG4udGltZWxpbmUgLnRpbWVsaW5lLWxpbmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUpO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBkYXNoZWQ7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2QyZDVlNTtcclxufVxyXG5cclxuLnRpbWVsaW5lIC50aW1lbGluZS1pdGVtOmxhc3QtY2hpbGQgLnRpbWVsaW5lLWxpbmUge1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG59XHJcbi50aW1lbGluZS1tZWRpYXtcclxuICAgIGNvbG9yOiAjMjc4NmZiIWltcG9ydGFudDtcclxufVxyXG5cclxuLnctNDBweCB7XHJcbiAgICB3aWR0aDogNDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aW1lbGluZSAudGltZWxpbmUtaWNvbiB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi50aW1lbGluZSAudGltZWxpbmUtaWNvbiB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5zeW1ib2wuc3ltYm9sLWNpcmNsZSxcclxuLnN5bWJvbC5zeW1ib2wtY2lyY2xlIC5zeW1ib2wtbGFiZWwsXHJcbi5zeW1ib2wuc3ltYm9sLWNpcmNsZT5pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uc3ltYm9sIC5zeW1ib2wtbGFiZWwge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5zeW1ib2wuc3ltYm9sLTQwcHggLnN5bWJvbC1sYWJlbCB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG4uc3ltYm9sLnN5bWJvbC0zNXB4IC5zeW1ib2wtbGFiZWwge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuLnN5bWJvbC5zeW1ib2wtMjJweD5pbWcge1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbn1cclxuLnN5bWJvbCBpbWcge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NkY2RkODtcclxufVxyXG5cclxuLnN5bWJvbCAuc3ltYm9sLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMzZjQyNTQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOGZhO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC40NzVyZW07XHJcbn1cclxuXHJcbi5zdmctaWNvbiB7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuLnN2Zy1pY29uLnN2Zy1pY29uLTIgc3ZnIHtcclxuICAgIGhlaWdodDogMS41cmVtIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxLjVyZW0haW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3ZnLWljb24gc3ZnIHtcclxuICAgIGhlaWdodDogMS4xNXJlbTtcclxuICAgIHdpZHRoOiAxLjE1cmVtO1xyXG59XHJcblxyXG4udGltZWxpbmUgLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDEuNXJlbTsgKi9cclxufVxyXG4udGltZWxpbmUtdGV4dHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgY29sb3I6ICMyOTI4MmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuLnRpbWVsaW5lIC50aW1lbGluZS1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY2h2LXR4dHtcclxuICAgIGNvbG9yOiAjNTQ1ODVkO1xyXG59XHJcbi5kZXNwLXR4dHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgY29sb3I6ICM2NDY5N2Q7XHJcbiAgICBjb2xvcjogIzg0OGM5MztcclxufVxyXG5cclxuLyogdGltZWxpbmV0YWJsZSAqL1xyXG4udGltZS10YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlcjogc29saWQgI2UxZTFlMSAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIC50aW1lLXRhYmxlIHRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgMjEsIDQyKSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlNmQ3NiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudGltZS10YWJsZSB0aCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICAudGltZS10YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjlmYjtcclxuICB9XHJcbiAgLnRpbWUtdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgfVxyXG4gIC50aW1lLXRhYmxlIHRkIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UxZTZlZTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTFlNmVlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjMGIwZTFmO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgLnRpbWUtdGFibGUgdGJvZHkgdHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjVmOTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAudXNlci0tbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnRhZ3Mtd3JhcCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICAudGFnc190YWcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnRhZ3MtbmFtZSB7XHJcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcbiAgLnRhZ3MtcmVtb3ZlIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC50YWdzLXRhZzpob3ZlciAudGFncy1yZW1vdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC51LWNvbW1vbi1pY29uIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjEwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5jb2xvci0taW5oZXJpdCB7XHJcbiAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY2hja2J4IHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAuYi01MCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5saXN0LWhlYWRlciB7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwIDlweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5oZWFkZXItZGF0ZSB7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgY29sb3I6ICMwYjBlMWYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweCAwIDVweDtcclxuICB9XHJcbiAgLnRpbWUtdG90YWxzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzBiMGUxZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgfVxyXG4gIC50aW1lLXRvdGFscy1saXN0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAudG90YWxzLWxpc3QtLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICAuaW5pdGlhbC1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5Y2U2ZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5iLTUwIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgLmNvbG9yLTcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzliNTliNjtcclxuICB9XHJcbiAgLm5vdGkge1xyXG4gICAgYmFja2dyb3VuZDogIzE1M2I1NjY5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogMC4yZW0gMC41cmVtIDAuMzVyZW0gMC41cmVtO1xyXG4gICAgbWluLXdpZHRoOiAxLjQyOXJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDEuNDI5cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtN3B4O1xyXG4gICAgcmlnaHQ6IC02cHg7XHJcbiAgfVxyXG4vKiA9PT0gU2lkZWJhciA9PT0gKi9cclxuXHJcbi5zaWRlSW5mb2JhciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0VERUFFOTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBib3gtc2hhZG93OiAwIC4xcmVtIDFyZW0gLjI1cmVtIHJnYigwIDAgMC81JSkgIWltcG9ydGFudDtcclxuICAgIC8qIHBhZGRpbmctdG9wOiA2MHB4OyAqL1xyXG59XHJcbi5idG4tZnd7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5hc2MtYXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5idG4tc29ydHtcclxuICAgIGNvbG9yOiAjMGIwZTFmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWYxZjY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuYS5vcmRyLWEge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiAjMGIwZTFmO1xyXG59XHJcbi5zb3J0LWJ5e1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcblxyXG59XHJcbi5zb3J0LWF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uc29ydC1kcm9we1xyXG4gICAgcGFkZGluZzogMC44cmVtIDA7XHJcbiAgICBtaW4td2lkdGg6IDEycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5zb3J0LWRyb3AgLmRyb3Bkb3duLWl0ZW17XHJcbiAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcclxufVxyXG4uc29ydC1kcm9wIC5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNmZkO1xyXG4gICAgY29sb3I6ICMwYjBlMWY7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uc29ydC1kcm9wIC5hY3RpdmUgLmNrYy1pY257XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogIzNiOTNmYztcclxufVxyXG4uYnRuLXNvcnQ6aG92ZXIsIC5idG4tc29ydDpmb2N1cywgLmJ0bi1zb3J0OmFjdGl2ZSAge1xyXG4gICAgY29sb3I6ICMwYjBlMWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmN2ZhO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTZlZTtcclxufVxyXG4uc2VsZWN0LWJveHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuYS5kcm9wZG93bi1pdGVte1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5AbWVkaWEgU2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuXHJcbi5rdC1xdWljay1wYW5lbC0tb257XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbn1cclxuQG1lZGlhIFNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gICAgLmt0LXF1aWNrLXBhbmVsLS1vbiB7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgU2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAgIC5rdC1xdWljay1wYW5lbC0tb24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2Nyb2xsYmFyMSB7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEzMHB4KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLnNjcm9sbGJhcjEge1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzhweCk7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLyogd2lkdGggKi9cclxuXHJcbi5zY3JvbGxiYXIxOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDZweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuXHJcbi5zY3JvbGxiYXIxOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcblxyXG4uc2Nyb2xsYmFyMTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcblxyXG4uc2Nyb2xsYmFyMTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 63319:
/*!*********************************************************************!*\
  !*** ./src/app/_Layouts/backend-layout/backend-layout.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackendLayoutComponent": () => (/* binding */ BackendLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _LayoutDashboard_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_LayoutDashboard/header/header.component */ 90449);
/* harmony import */ var _LayoutDashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_LayoutDashboard/sidebar/sidebar.component */ 29612);




class BackendLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
BackendLayoutComponent.ɵfac = function BackendLayoutComponent_Factory(t) { return new (t || BackendLayoutComponent)(); };
BackendLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BackendLayoutComponent, selectors: [["app-backend-layout"]], decls: 9, vars: 0, consts: [[1, "kt-grid", "kt-grid--hor", "kt-grid--root"], [1, "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--ver", "kt-page"], [1, "kt-aside-menu-overlay"], ["id", "kt_wrapper", 1, "kt-grid__item", "kt-grid__item--fluid", "kt-grid", "kt-grid--hor", "kt-wrapper"], ["id", "kt_scrolltop", 1, "kt-scrolltop"], [1, "fa", "fa-arrow-up"]], template: function BackendLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-header")(3, "app-sidebar")(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _LayoutDashboard_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _LayoutDashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWNrZW5kLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 4631:
/*!*********************************************************************!*\
  !*** ./src/app/_Layouts/default-layout/default-layout.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLayoutComponent": () => (/* binding */ DefaultLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class DefaultLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
DefaultLayoutComponent.ɵfac = function DefaultLayoutComponent_Factory(t) { return new (t || DefaultLayoutComponent)(); };
DefaultLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultLayoutComponent, selectors: [["app-default-layout"]], decls: 2, vars: 0, consts: [[1, "kt-grid", "kt-grid--hor", "kt-grid--root"]], template: function DefaultLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWZhdWx0LWxheW91dC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 60065:
/*!*******************************************!*\
  !*** ./src/app/_Models/assigntask-dto.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssigntaskDTO": () => (/* binding */ AssigntaskDTO)
/* harmony export */ });
class AssigntaskDTO {
}


/***/ }),

/***/ 27563:
/*!******************************************!*\
  !*** ./src/app/_Models/bar-chart-dto.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarChartDTO": () => (/* binding */ BarChartDTO)
/* harmony export */ });
class BarChartDTO {
}


/***/ }),

/***/ 24594:
/*!*****************************************!*\
  !*** ./src/app/_Models/category-dto.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryDTO": () => (/* binding */ CategoryDTO)
/* harmony export */ });
class CategoryDTO {
}


/***/ }),

/***/ 30525:
/*!**************************************!*\
  !*** ./src/app/_Models/chart-dto.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartDTO": () => (/* binding */ ChartDTO)
/* harmony export */ });
class ChartDTO {
}


/***/ }),

/***/ 23925:
/*!*****************************************!*\
  !*** ./src/app/_Models/column-chart.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnChartDTO": () => (/* binding */ ColumnChartDTO)
/* harmony export */ });
class ColumnChartDTO {
}


/***/ }),

/***/ 60808:
/*!***************************************************!*\
  !*** ./src/app/_Models/completed-projects-dto.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletedProjectsDTO": () => (/* binding */ CompletedProjectsDTO)
/* harmony export */ });
class CompletedProjectsDTO {
}


/***/ }),

/***/ 58803:
/*!************************************!*\
  !*** ./src/app/_Models/dar-dto.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarDTO": () => (/* binding */ DarDTO)
/* harmony export */ });
class DarDTO {
}


/***/ }),

/***/ 79536:
/*!*****************************************!*\
  !*** ./src/app/_Models/dropdown-dto.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownDTO": () => (/* binding */ DropdownDTO)
/* harmony export */ });
class DropdownDTO {
}


/***/ }),

/***/ 10397:
/*!*****************************************!*\
  !*** ./src/app/_Models/employee-dto.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeDTO": () => (/* binding */ EmployeeDTO)
/* harmony export */ });
class EmployeeDTO {
}


/***/ }),

/***/ 97661:
/*!**************************************!*\
  !*** ./src/app/_Models/login-dto.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginDTO": () => (/* binding */ LoginDTO)
/* harmony export */ });
class LoginDTO {
}


/***/ }),

/***/ 68827:
/*!******************************************************!*\
  !*** ./src/app/_Models/notification-activity-dto.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationActivityDTO": () => (/* binding */ NotificationActivityDTO)
/* harmony export */ });
class NotificationActivityDTO {
}


/***/ }),

/***/ 60198:
/*!******************************************!*\
  !*** ./src/app/_Models/portfolio-dto.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioDTO": () => (/* binding */ PortfolioDTO)
/* harmony export */ });
// import { Time } from '@angular/common';
class PortfolioDTO {
    constructor() {
        this.SelectedProjects = [];
    }
}


/***/ }),

/***/ 46047:
/*!************************************************!*\
  !*** ./src/app/_Models/project-details-dto.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailsDTO": () => (/* binding */ ProjectDetailsDTO)
/* harmony export */ });
class ProjectDetailsDTO {
}


/***/ }),

/***/ 64286:
/*!********************************************!*\
  !*** ./src/app/_Models/projecttype-dto.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjecttypeDTO": () => (/* binding */ ProjecttypeDTO)
/* harmony export */ });
class ProjecttypeDTO {
}


/***/ }),

/***/ 85471:
/*!*******************************************!*\
  !*** ./src/app/_Models/shareportfolio.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shareportfolio_DTO": () => (/* binding */ Shareportfolio_DTO)
/* harmony export */ });
class Shareportfolio_DTO {
}


/***/ }),

/***/ 14360:
/*!***************************************!*\
  !*** ./src/app/_Models/status-dto.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusDTO": () => (/* binding */ StatusDTO)
/* harmony export */ });
class StatusDTO {
}


/***/ }),

/***/ 9962:
/*!*****************************************!*\
  !*** ./src/app/_Models/sub-task-dto.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubTaskDTO": () => (/* binding */ SubTaskDTO)
/* harmony export */ });
class SubTaskDTO {
}


/***/ }),

/***/ 12359:
/*!*********************************************!*\
  !*** ./src/app/_Models/user-details-dto.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsDTO": () => (/* binding */ UserDetailsDTO)
/* harmony export */ });
class UserDetailsDTO {
}


/***/ }),

/***/ 77983:
/*!*********************************************!*\
  !*** ./src/app/_Services/apiurl.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiurlService": () => (/* binding */ ApiurlService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class ApiurlService {
    constructor() {
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        this.apiurl = this.baseUrl;
    }
}
ApiurlService.ɵfac = function ApiurlService_Factory(t) { return new (t || ApiurlService)(); };
ApiurlService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiurlService, factory: ApiurlService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 83827:
/*!*******************************************!*\
  !*** ./src/app/_Services/auth.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class AuthService {
    constructor() { }
    logout() {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('token');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 32278:
/*!***************************************************!*\
  !*** ./src/app/_Services/notification.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 82808);


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
            // disableTimeOut: true,
            // tapToDismiss: false,
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
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService)); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 42430:
/*!***************************************************!*\
  !*** ./src/app/_Services/project-type.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectTypeService": () => (/* binding */ ProjectTypeService)
/* harmony export */ });
/* harmony import */ var _Models_projecttype_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_Models/projecttype-dto */ 64286);
/* harmony import */ var _Models_project_details_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_Models/project-details-dto */ 46047);
/* harmony import */ var _Models_employee_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_Models/employee-dto */ 10397);
/* harmony import */ var src_app_Models_portfolio_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Models/portfolio-dto */ 60198);
/* harmony import */ var _Models_login_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_Models/login-dto */ 97661);
/* harmony import */ var _Models_user_details_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_Models/user-details-dto */ 12359);
/* harmony import */ var _Models_shareportfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_Models/shareportfolio */ 85471);
/* harmony import */ var _Models_status_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_Models/status-dto */ 14360);
/* harmony import */ var _Models_notification_activity_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_Models/notification-activity-dto */ 68827);
/* harmony import */ var _Models_chart_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_Models/chart-dto */ 30525);
/* harmony import */ var src_app_Models_bar_chart_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_Models/bar-chart-dto */ 27563);
/* harmony import */ var src_app_Models_sub_task_dto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_Models/sub-task-dto */ 9962);
/* harmony import */ var src_app_Models_column_chart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/_Models/column-chart */ 23925);
/* harmony import */ var src_app_Models_dropdown_dto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/_Models/dropdown-dto */ 79536);
/* harmony import */ var _Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_Models/completed-projects-dto */ 60808);
/* harmony import */ var _Models_dar_dto__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_Models/dar-dto */ 58803);
/* harmony import */ var _Models_assigntask_dto__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../_Models/assigntask-dto */ 60065);
/* harmony import */ var _Models_category_dto__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../_Models/category-dto */ 24594);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _apiurl_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./apiurl.service */ 77983);























//import { BarChartComponent } from '../_Views/bar-chart/bar-chart.component';
class ProjectTypeService {
    constructor(http, commonUrl) {
        this.http = http;
        this.commonUrl = commonUrl;
        this.Project_TypeList = [];
        this.rootUrl = this.commonUrl.apiurl;
        this.ObjprojectTypeDto = new _Models_projecttype_dto__WEBPACK_IMPORTED_MODULE_0__.ProjecttypeDTO;
        this.ObjEmployeeDetails = new _Models_employee_dto__WEBPACK_IMPORTED_MODULE_2__.EmployeeDTO;
        this.Obj_LoginDTO = new _Models_login_dto__WEBPACK_IMPORTED_MODULE_4__.LoginDTO;
        this.userDTO = new _Models_user_details_dto__WEBPACK_IMPORTED_MODULE_5__.UserDetailsDTO;
        this.ObjUserDetails = new _Models_user_details_dto__WEBPACK_IMPORTED_MODULE_5__.UserDetailsDTO;
        this._ObjSharePortfolio = new _Models_shareportfolio__WEBPACK_IMPORTED_MODULE_6__.Shareportfolio_DTO;
        this.objPortfolioDTO = new src_app_Models_portfolio_dto__WEBPACK_IMPORTED_MODULE_3__.PortfolioDTO;
        this.ObjStatusDTO = new _Models_status_dto__WEBPACK_IMPORTED_MODULE_7__.StatusDTO;
        this.ObjNotificationDto = new _Models_notification_activity_dto__WEBPACK_IMPORTED_MODULE_8__.NotificationActivityDTO;
        this._ObjChartDTO = new _Models_chart_dto__WEBPACK_IMPORTED_MODULE_9__.ChartDTO;
        this.ObjBarChartDTO = new src_app_Models_bar_chart_dto__WEBPACK_IMPORTED_MODULE_10__.BarChartDTO;
        this.ObjSubTaskDTO = new src_app_Models_sub_task_dto__WEBPACK_IMPORTED_MODULE_11__.SubTaskDTO;
        this.objColumnChartDTO = new src_app_Models_column_chart__WEBPACK_IMPORTED_MODULE_12__.ColumnChartDTO;
        this.objDropdownsDTO = new src_app_Models_dropdown_dto__WEBPACK_IMPORTED_MODULE_13__.DropdownDTO;
        this._ObjCompletedProj = new _Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_14__.CompletedProjectsDTO();
        this._objDARAchievement = new _Models_dar_dto__WEBPACK_IMPORTED_MODULE_15__.DarDTO();
        this._ObjAssigntaskDTO = new _Models_assigntask_dto__WEBPACK_IMPORTED_MODULE_16__.AssigntaskDTO();
        this.ObjCategoryDTO = new _Models_category_dto__WEBPACK_IMPORTED_MODULE_17__.CategoryDTO();
        this.ObjDto = new _Models_project_details_dto__WEBPACK_IMPORTED_MODULE_1__.ProjectDetailsDTO();
        this._ObjProjectDTO = new _Models_project_details_dto__WEBPACK_IMPORTED_MODULE_1__.ProjectDetailsDTO();
    }
    GetProjectTypeList() {
        let EmpNo = localStorage.getItem('EmpNo');
        this.ObjUserDetails.Emp_No = EmpNo;
        return this.http.post(this.rootUrl + "TestAPI/NewGetProjectTypes", this.ObjUserDetails);
        // .subscribe(data => {this.ProjectTypeList = data as ProjecttypeDTO[]
        //   this.Project_TypeList=this.ProjectTypeList.sort((a, b) => (a.Exec_BlockName > b.Exec_BlockName) ? 1 : -1);
        // });
    }
    GetProjects(Ptype_Id) {
        this.ObjprojectTypeDto.ProjectType_ID = Ptype_Id;
        return this.http.post(this.rootUrl + "TestAPI/NewGetProjects", this.ObjprojectTypeDto);
    }
    GetProjects_EPDB() {
        return this.http.post(this.rootUrl + "TestAPI/NewGetProjectsDetails", this.ObjDto);
        // .subscribe((data) =>this.ProjectDetails_List = data as ProjectDetailsDTO[]);
    }
    AlreadyExistsPortfolioService(pname) {
        this.objPortfolioDTO.SearchText = pname;
        return this.http.post(this.rootUrl + "Projects/NewCheckPortfolioExists", this.objPortfolioDTO);
    }
    GetProjectsBy_portfolioId(pid) {
        // let P_Id: string = sessionStorage.getItem('Pid');
        // let parsePid: number = +P_Id;
        this.objPortfolioDTO.Portfolio_ID = pid;
        this.objPortfolioDTO.EmployeeId = localStorage.getItem('EmpNo');
        return this.http.post(this.rootUrl + "TestAPI/NewGetPortfolioSharePreferences_Json", this.objPortfolioDTO);
    }
    GetPortfoliosBy_ProjectId(pid) {
        this.objPortfolioDTO.Project_Code = pid;
        this.objPortfolioDTO.Emp_No = localStorage.getItem('EmpNo');
        return this.http.post(this.rootUrl + "TestAPI/NewGetPortfoliosBy_ProjectId", this.objPortfolioDTO);
    }
    GetPortfoliosForAssignTask() {
        this.objPortfolioDTO.Emp_No = localStorage.getItem('EmpNo');
        return this.http.post(this.rootUrl + "TestAPI/NewGetPortfoliosForAssignTask", this.objPortfolioDTO);
    }
    GetTotalPortfoliosBy_Employeeid() {
        this.objPortfolioDTO.Emp_No = localStorage.getItem('EmpNo');
        return this.http.post(this.rootUrl + "TestAPI/NewGetTotalPortfoliosofEmployee", this.objPortfolioDTO);
    }
    GetProjectsByUserName_Service(obj) {
        let EmpNo = localStorage.getItem('EmpNo');
        this.ObjUserDetails.Emp_No = EmpNo;
        this.ObjUserDetails.SelectedBlock_No = obj.SelectedBlock_No;
        this.ObjUserDetails.SelectedEmp_No = obj.SelectedEmp_No;
        this.ObjUserDetails.SelectedStatus = obj.SelectedStatus;
        this.ObjUserDetails.PageNumber = obj.PageNumber;
        this.ObjUserDetails.PageSize = obj.PageSize;
        this.ObjUserDetails.SearchText = obj.SearchText;
        this.ObjUserDetails.PortfolioId = obj.PortfolioId;
        return this.http.post(this.rootUrl + "TestAPI/NewGetProjectDetailsByUserName", this.ObjUserDetails);
    }
    GetProjectsByUserName_Service_ForSummary(obj) {
        let EmpNo = localStorage.getItem('EmpNo');
        this.ObjUserDetails.Emp_No = EmpNo;
        this.ObjUserDetails.SelectedBlock_No = obj.SelectedBlock_No;
        this.ObjUserDetails.SelectedEmp_No = obj.SelectedEmp_No;
        this.ObjUserDetails.SelectedStatus = obj.SelectedStatus;
        this.ObjUserDetails.PageNumber = obj.PageNumber;
        this.ObjUserDetails.PageSize = obj.PageSize;
        this.ObjUserDetails.SearchText = obj.SearchText;
        //this.ObjUserDetails.PortfolioId = obj.PortfolioId;
        return this.http.post(this.rootUrl + "TestAPI/NewGetProjectDetailsByUserName_ForSummary", this.ObjUserDetails);
    }
    GetProjectsByOwner_Service_ForSummary(obj) {
        let EmpNo = localStorage.getItem('EmpNo');
        this.ObjUserDetails.Emp_No = EmpNo;
        this.ObjUserDetails.SelectedBlock_No = obj.SelectedBlock_No;
        this.ObjUserDetails.SelectedEmp_No = obj.SelectedEmp_No;
        this.ObjUserDetails.SelectedStatus = obj.SelectedStatus;
        this.ObjUserDetails.PageNumber = obj.PageNumber;
        this.ObjUserDetails.PageSize = obj.PageSize;
        this.ObjUserDetails.SearchText = obj.SearchText;
        //this.ObjUserDetails.PortfolioId = obj.PortfolioId;
        return this.http.post(this.rootUrl + "TestAPI/NewGetProjectDetailsByOwner_ForSummary", this.ObjUserDetails);
    }
    GetProjectsByUserName_Service_ForProjectsTODO(obj) {
        let EmpNo = localStorage.getItem('EmpNo');
        this.ObjUserDetails.Emp_No = EmpNo;
        this.ObjUserDetails.SelectedBlock_No = obj.SelectedBlock_No;
        this.ObjUserDetails.SelectedEmp_No = obj.SelectedEmp_No;
        this.ObjUserDetails.SelectedStatus = obj.SelectedStatus;
        this.ObjUserDetails.PageNumber = obj.PageNumber;
        this.ObjUserDetails.PageSize = obj.PageSize;
        this.ObjUserDetails.SearchText = obj.SearchText;
        //this.ObjUserDetails.PortfolioId = obj.PortfolioId;
        return this.http.post(this.rootUrl + "TestAPI/NewGetProjectDetailsByUserName_ForToDoProjects", this.ObjUserDetails);
    }
    GetProjectsForRunwayTaskDropdown(obj) {
        let EmpNo = localStorage.getItem('EmpNo');
        this.ObjUserDetails.Emp_No = EmpNo;
        this.ObjUserDetails.PageNumber = obj.PageNumber;
        this.ObjUserDetails.PageSize = obj.PageSize;
        this.ObjUserDetails.SearchText = obj.SearchText;
        //this.ObjUserDetails.PortfolioId = obj.PortfolioId;
        return this.http.post(this.rootUrl + "Projects/NewGetProjectsForRunwayTask", this.ObjUserDetails);
    }
    GetDeadlineByProjectCode(Project_Code) {
        this.ObjUserDetails.Project_Code = Project_Code;
        return this.http.post(this.rootUrl + "Notification/NewGetDeadLineByProjectCode", this.ObjUserDetails);
    }
    GetProjectsFor_ProjectsChart(EmpNo) {
        this.ObjUserDetails.Emp_No = EmpNo;
        return this.http.post(this.rootUrl + "TestAPI/NewGetProjectDetailsByUserName", this.ObjUserDetails);
    }
    GetEmployeesById(EmpNo) {
        this.ObjEmployeeDetails.Emp_No = EmpNo;
        return this.http.post(this.rootUrl + "TestAPI/NewGetEmployeById", this.ObjEmployeeDetails);
        // .subscribe((data) =>this.ProjectDetails_List = data as ProjectDetailsDTO[]);
    }
    // GetEmployees() {
    //   return this.http.post(this.rootUrl + "TestAPI/NewGetEmployees", this.ObjEmployeeDetails)
    //     .subscribe((data) => this.EmployeeList = data as EmployeeDTO[]);
    // }
    GetEmployeesby_CompNo(cmpNo, Pid) {
        this.ObjEmployeeDetails.Emp_Comp_No = cmpNo;
        this.ObjEmployeeDetails.Portfolio_ID = Pid;
        return this.http.post(this.rootUrl + "TestAPI/NewGetEmployeesByComp_No", this.ObjEmployeeDetails);
    }
    SavePortfolio(objFromComp) {
        this.objPortfolioDTO = objFromComp;
        objFromComp.Portfolio_ID = this.ObjUserDetails.PortfolioId;
        this.objPortfolioDTO.Portfolio_Name = objFromComp.Portfolio_Name;
        // this.objPortfolioDTO.Status;
        this.objPortfolioDTO.SelectedProjects = objFromComp.SelectedProjects;
        if (this.objPortfolioDTO.Portfolio_ID == 0) {
            this.objPortfolioDTO.Created_By = this.ObjUserDetails.Emp_No;
            this.objPortfolioDTO.Modified_By = null;
        }
        else {
            this.objPortfolioDTO.Created_By = null;
            this.objPortfolioDTO.Modified_By = this.ObjUserDetails.Emp_No;
            this.objPortfolioDTO.Created_By = this.ObjUserDetails.Emp_No;
        }
        return this.http.post(this.rootUrl + "/TestAPI/NewInsertPortfolio", objFromComp);
        // .subscribe(data => {
        //   this.objPortfolioDTO = data as PortfolioDTO;
        //   // this.getDocTypeData();
        // });
    }
    InsertPortfolioIdsByProjectCode(objFromComp) {
        this.objPortfolioDTO.SelectedPortIdsJson = objFromComp.SelectedPortIdsJson;
        this.objPortfolioDTO.Project_Code = objFromComp.Project_Code;
        this.objPortfolioDTO.Emp_No = objFromComp.Emp_No;
        this.objPortfolioDTO.Created_By = objFromComp.Emp_No;
        this.objPortfolioDTO.Modified_By = objFromComp.Emp_No;
        return this.http.post(this.rootUrl + "/TestAPI/NewInsertPortfoliosByProjectCode", this.objPortfolioDTO);
    }
    //Get Portfolio
    GetPortfolio() {
        return this.http.post(this.rootUrl + "TestAPI/NewGetPortfolio", this.objPortfolioDTO);
    }
    //Get Companies
    GetCompanies() {
        return this.http.post(this.rootUrl + "TestAPI/NewGetCompanies", this.obj_CompanyDTO);
    }
    LoginCredentials(objLoginDetails) {
        return this.http.post(this.rootUrl + "TestAPI/NewGetLoginDetails", objLoginDetails);
        // .subscribe(data => {
        //   this.User_Details = data as LoginDTO[];
        //   alert("Second :" + JSON.stringify(this.User_Details));
        // });
    }
    NewGetUserDetails(UserName) {
        this.userDTO.UserName = UserName;
        return this.http.post(this.rootUrl + "TestAPI/NewGetUserDetails", this.userDTO).
            subscribe((data) => {
            this.user_DetailList = data;
            this.EmpNo = data[0]['Emp_No'].replace(/\s/g, "");
            this.EmpCompNo = data[0]['Emp_Comp_No'].replace(/\s/g, "");
            this.SystemRole = data[0]['Emp_SystemRole'];
        });
    }
    GetPortfolioByEmployee() {
        let EmpNo = localStorage.getItem('EmpNo');
        this.ObjUserDetails.Emp_No = EmpNo;
        return this.http.post(this.rootUrl + "TestAPI/NewGetPortfolioByEmployee", this.ObjUserDetails);
        // .subscribe(
        //   (data) => {
        //     this.Portfolio_List = data as PortfolioDTO[];
        //     console.log("PortfolioList------>", this.Portfolio_List);
        //   });
    }
    SharePortfolio(_ObjShare) {
        console.log("Obj Share---->", _ObjShare);
        return this.http.post(this.rootUrl + "TestAPI/NewInsertUpdateSharePortfolio", _ObjShare)
            .subscribe(data => {
            this._ObjSharePortfolio = data;
        });
    }
    GetPreferences(empId, pid) {
        this._ObjSharePortfolio.EmployeeId = empId;
        this._ObjSharePortfolio.Portfolio_ID = pid;
        return this.http.post(this.rootUrl + "TestAPI/NewGetPreferencesByEmployeeId", this._ObjSharePortfolio);
    }
    GetShareDetailsBy_PId(pid) {
        this._ObjSharePortfolio.Portfolio_ID = pid;
        return this.http.post(this.rootUrl + "TestAPI/NewGetShareDetailsByPortfolio_ID", this._ObjSharePortfolio);
    }
    GetStatusByPortfolioId(pid) {
        this.ObjStatusDTO.Portfolio_ID = pid;
        return this.http.post(this.rootUrl + "TestAPI/NewGetStatus", this._ObjSharePortfolio);
    }
    GetPortfolioStatus(objStatus) {
        this.ObjStatusDTO.Emp_No = objStatus.Emp_No;
        this.ObjStatusDTO.SelectedEmployee = objStatus.SelectedEmployee;
        this.ObjStatusDTO.SelectedCompany = objStatus.SelectedCompany;
        this.ObjStatusDTO.SelectedStatus = objStatus.SelectedStatus;
        this.ObjStatusDTO.PageNumber = objStatus.PageNumber;
        this.ObjStatusDTO.RowsOfPage = 30;
        this.ObjStatusDTO.SearchText = objStatus.SearchText;
        return this.http.post(this.rootUrl + "TestAPI/NewGetPortfolioStatusColor", this.ObjStatusDTO);
    }
    // GetPortfolioStatus_For_Filter(objStatus: StatusDTO) {
    //   this.ObjStatusDTO.Emp_No = objStatus.Emp_No;
    //   this.ObjStatusDTO.SelectedEmployee = objStatus.SelectedEmployee;
    //   this.ObjStatusDTO.SelectedCompany = objStatus.SelectedCompany;
    //   this.ObjStatusDTO.SelectedStatus = objStatus.SelectedStatus;
    //   debugger
    //   return this.http.post(this.rootUrl + "TestAPI/NewGetPortfolioStatusColor", this.ObjStatusDTO);
    // }
    GetActivities(Emp_No) {
        this.ObjNotificationDto.Emp_No = Emp_No;
        return this.http.post(this.rootUrl + "Notification/NewGetNotificationActivities", this.ObjNotificationDto);
    }
    GetDashboardnotifications(obj) {
        this.ObjNotificationDto.Emp_No = obj.Emp_No;
        return this.http.post(this.rootUrl + "Notification/NewGetDashboardNotifications", this.ObjNotificationDto);
    }
    GetHierarchyofOwnerforMoredetails(empno, projcode) {
        this._ObjProjectDTO.Emp_No = empno;
        this._ObjProjectDTO.Project_Code = projcode;
        return this.http.post(this.rootUrl + "Notification/NewGetHierarchyofOwnerforMoredetails", this._ObjProjectDTO);
    }
    GetViewAllDashboardnotifications(obj) {
        this.ObjNotificationDto.Emp_No = obj.Emp_No;
        this.ObjNotificationDto.PageNumber = obj.PageNumber;
        this.ObjNotificationDto.PageSize = obj.PageSize;
        this.ObjNotificationDto.SelectedType = obj.SelectedType;
        this.ObjNotificationDto.SelectedRequest = obj.SelectedRequest;
        this.ObjNotificationDto.SelectedStatus = obj.SelectedStatus;
        this.ObjNotificationDto.SelectedEmp_No = obj.SelectedEmp_No;
        this.ObjNotificationDto.SearchText = obj.SearchText;
        this.ObjNotificationDto.sendtype = obj.sendtype;
        return this.http.post(this.rootUrl + "Notification/NewGetViewAllNotifications", this.ObjNotificationDto);
    }
    SetFavourite_Service(portfolioId, isfav, empId) {
        this.ObjStatusDTO.Portfolio_ID = portfolioId;
        this.ObjStatusDTO.IsFavourite = isfav;
        this.ObjStatusDTO.Emp_No = empId;
        return this.http.post(this.rootUrl + "TestAPI/NewPortfolioIsFavourite", this.ObjStatusDTO);
    }
    Portfolio_Rename(PortName, portfolioId) {
        this.ObjStatusDTO.Portfolio_ID = portfolioId;
        this.ObjStatusDTO.Portfolio_Name = PortName;
        return this.http.post(this.rootUrl + "TestAPI/NewPortfolioRenamed", this.ObjStatusDTO);
    }
    Portfolio_ShareUsersDelete(pid, empId, shareby) {
        this.objPortfolioDTO.Portfolio_ID = pid;
        this.objPortfolioDTO.Shared_To = empId;
        this.objPortfolioDTO.SharedbyEmpNo = shareby;
        return this.http.post(this.rootUrl + "TestAPI/NewDeletePortfolioShareUsers", this.objPortfolioDTO);
    }
    _Chart_Percentage(pid) {
        this._ObjChartDTO.PortfolioId = pid;
        return this.http.post(this.rootUrl + "TestAPI/NewGetChartDetails", this._ObjChartDTO);
        //this.clear3();
    }
    _BarChart(pid, empNo) {
        this.ObjBarChartDTO.PortfolioId = pid;
        this.ObjBarChartDTO.Emp_No = empNo;
        // this._ObjChartDTO.Employee=empId;
        return this.http.post(this.rootUrl + "TestAPI/NewGetBarChart", this.ObjBarChartDTO);
        //this.clearSession();
    }
    GetRACISandNonRACISEmployeesforMoredetails(prjCode) {
        this.ObjSubTaskDTO.Project_Code = prjCode;
        return this.http.post(this.rootUrl + "TestAPI/NewGetRACISandNonRACISEmployees", this.ObjSubTaskDTO);
    }
    GetHierarchydropdownforMoredetails(empno) {
        this.ObjSubTaskDTO.Emp_No = empno;
        return this.http.post(this.rootUrl + "TestAPI/NewGetHierarchydropdownformoredetails", this.ObjSubTaskDTO);
    }
    SubTaskDetailsService(prjCode) {
        this.ObjSubTaskDTO.Project_Code = prjCode;
        let EmpNo = localStorage.getItem('EmpNo');
        this.ObjSubTaskDTO.Emp_No = EmpNo;
        return this.http.post(this.rootUrl + "TestAPI/NewSubTaskDetails", this.ObjSubTaskDTO);
    }
    // New Subtask Page
    SubTaskDetailsService_ToDo_Page(prjCode, compCode, empno) {
        this.ObjSubTaskDTO.Project_Code = prjCode;
        this.ObjSubTaskDTO.Comp_No = compCode;
        this.ObjSubTaskDTO.Emp_No = empno;
        return this.http.post(this.rootUrl + "TestAPI/NewSubTaskDetails", this.ObjSubTaskDTO);
    }
    SubTaskStatusCheck(Project_Code) {
        this.ObjSubTaskDTO.Project_Code = Project_Code;
        return this.http.post(this.rootUrl + "Notification/NewGetSubtaskStatusCheck", this.ObjSubTaskDTO);
    }
    ColumnChartData(emp) {
        //alert(emp);
        this.objColumnChartDTO.Emp_No = emp;
        return this.http.post(this.rootUrl + "TestAPI/NewColumnChart", this.objColumnChartDTO);
    }
    DARGraphCalculations_Json(Pcode) {
        //alert(emp);
        this.objColumnChartDTO.ProjectCode = Pcode;
        return this.http.post(this.rootUrl + "TestAPI/NewDARGraphCalculations_Json", this.objColumnChartDTO);
    }
    GetDropDownsData(obj) {
        this.objDropdownsDTO.EmpNo = obj.EmpNo;
        this.objDropdownsDTO.Selected_ProjectType = obj.Selected_ProjectType;
        this.objDropdownsDTO.Selected_Status = obj.Selected_Status;
        this.objDropdownsDTO.SelectedEmp_No = obj.SelectedEmp_No;
        this.objDropdownsDTO.Selected_SearchText = obj.Selected_SearchText;
        this.objDropdownsDTO.PortfolioId = obj.PortfolioId;
        return this.http.post(this.rootUrl + "TestAPI/NewGetDropdownsData", this.objDropdownsDTO);
    }
    GetDropDownsData_ForSummary(obj) {
        this.objDropdownsDTO.EmpNo = obj.EmpNo;
        this.objDropdownsDTO.Selected_ProjectType = obj.Selected_ProjectType;
        this.objDropdownsDTO.Selected_Status = obj.Selected_Status;
        this.objDropdownsDTO.SelectedEmp_No = obj.SelectedEmp_No;
        this.objDropdownsDTO.Selected_SearchText = obj.Selected_SearchText;
        //this.objDropdownsDTO.PortfolioId = obj.PortfolioId;
        return this.http.post(this.rootUrl + "TestAPI/NewGetDropdownsDataForSummary", this.objDropdownsDTO);
    }
    GetDropDownsOwnerData_ForSummary(obj) {
        this.objDropdownsDTO.EmpNo = obj.EmpNo;
        this.objDropdownsDTO.Selected_ProjectType = obj.Selected_ProjectType;
        this.objDropdownsDTO.Selected_Status = obj.Selected_Status;
        this.objDropdownsDTO.SelectedEmp_No = obj.SelectedEmp_No;
        this.objDropdownsDTO.Selected_SearchText = obj.Selected_SearchText;
        //this.objDropdownsDTO.PortfolioId = obj.PortfolioId;
        return this.http.post(this.rootUrl + "TestAPI/NewGetDropdownsOwnerDataForSummary", this.objDropdownsDTO);
    }
    clearSession() {
        localStorage.clear();
    }
    DeleteProject(proj_Id, port_id, PrjCode, proj_Name, createdBy, deletedBy) {
        debugger;
        this.objPortfolioDTO.Portfolio_ID = port_id;
        this.objPortfolioDTO.Project_ID = proj_Id;
        this.objPortfolioDTO.Project_Code = PrjCode;
        this.objPortfolioDTO.Project_Name = proj_Name;
        this.objPortfolioDTO.Created_By = createdBy;
        this.objPortfolioDTO.Deleted_By = deletedBy;
        return this.http.post(this.rootUrl + "TestAPI/NewDeletePortfolioProjects", this.objPortfolioDTO);
    }
    _DeletePortfolios(pid, portName, createdBy, createdDT, deletedBy, ProjCount, status) {
        this.objPortfolioDTO.Portfolio_ID = pid;
        this.objPortfolioDTO.Portfolio_Name = portName;
        this.objPortfolioDTO.Created_By = createdBy;
        this.objPortfolioDTO.Created_DT = createdDT;
        this.objPortfolioDTO.Deleted_By = deletedBy;
        this.objPortfolioDTO.ProjectsCount = ProjCount;
        this.objPortfolioDTO.Status = status;
        return this.http.post(this.rootUrl + "TestAPI/NewDeletePortfolio", this.objPortfolioDTO);
    }
    _GetDashboardSummaryCount(Emp_No) {
        this.ObjNotificationDto.Emp_No = Emp_No;
        return this.http.post(this.rootUrl + "Notification/NewGetDashboardSummaryCount", this.ObjNotificationDto);
    }
    _GetCompletedProjects(objDTO) {
        this._ObjCompletedProj.Emp_No = objDTO.Emp_No;
        this._ObjCompletedProj.Mode = objDTO.Mode;
        this._ObjCompletedProj.PageNumber = objDTO.PageNumber;
        this._ObjCompletedProj.SelectedBlock_No = objDTO.SelectedBlock_No;
        this._ObjCompletedProj.SelectedStatus = objDTO.SelectedStatus;
        this._ObjCompletedProj.SelectedEmp_No = objDTO.SelectedEmp_No;
        this._ObjCompletedProj.CategoryId = objDTO.CategoryId;
        this._ObjCompletedProj.Schedule_ID = objDTO.Schedule_ID;
        this._ObjCompletedProj.Filter = objDTO.Filter;
        this._ObjCompletedProj.Project_SearchText = objDTO.Project_SearchText;
        return this.http.post(this.rootUrl + "Notification/NewGetCompletedProjects", this._ObjCompletedProj);
    }
    _GetCategoryCountforRunway(objDTO) {
        this._ObjCompletedProj.Emp_No = objDTO.Emp_No;
        return this.http.post(this.rootUrl + "Notification/NewGetCategoryCountforRunway", this._ObjCompletedProj);
    }
    _GetRunwayCatId(EmpID) {
        this._ObjCompletedProj.Emp_No = EmpID;
        return this.http.post(this.rootUrl + "Notification/NewGetRunwayCatId", this._ObjCompletedProj);
    }
    _GetAssignedProjects(objDTO) {
        this._ObjCompletedProj.Emp_No = objDTO.Emp_No;
        this._ObjCompletedProj.Type = objDTO.Type;
        this._ObjCompletedProj.PageNumber = objDTO.PageNumber;
        this._ObjCompletedProj.RowsOfPage = objDTO.RowsOfPage;
        this._ObjCompletedProj.SelectedBlock_No = objDTO.SelectedBlock_No;
        this._ObjCompletedProj.SelectedStatus = objDTO.SelectedStatus;
        this._ObjCompletedProj.SelectedEmp_No = objDTO.SelectedEmp_No;
        this._ObjCompletedProj.Project_SearchText = objDTO.Project_SearchText;
        return this.http.post(this.rootUrl + "Notification/NewGetAssignedProjects", this._ObjCompletedProj);
    }
    _GetCalendarProjects(empNo) {
        this._ObjCompletedProj.Emp_No = empNo;
        return this.http.post(this.rootUrl + "Notification/NewGetCalendarProjects", this._ObjCompletedProj);
    }
    _GetDARAchievements(projectCode) {
        this._objDARAchievement.project_code = projectCode;
        return this.http.post(this.rootUrl + "Notification/NewGetDARAchievement", this._objDARAchievement);
    }
    _GetDARbyMasterCode(obj) {
        this.ObjSubTaskDTO.MasterCode = obj.MasterCode;
        this.ObjSubTaskDTO.PageNumber = obj.PageNumber;
        this.ObjSubTaskDTO.PageSize = obj.PageSize;
        return this.http.post(this.rootUrl + "TestAPI/NewDARDetailsByMasterCode", this.ObjSubTaskDTO);
    }
    _GetMeetingList(obj) {
        this.ObjSubTaskDTO.Project_Code = obj.Project_Code;
        return this.http.post(this.rootUrl + "TestAPI/NewMeeting_Viewsinmores", this.ObjSubTaskDTO);
    }
    _GetTimelineActivity(obj) {
        // let EmpNo = localStorage.getItem('EmpNo');
        this.ObjSubTaskDTO.Emp_No = obj.Emp_No;
        this.ObjSubTaskDTO.PageNumber = obj.PageNumber;
        this.ObjSubTaskDTO.PageSize = obj.PageSize;
        this.ObjSubTaskDTO.sort = obj.sort;
        this.ObjSubTaskDTO.Start_Date = obj.Start_Date;
        this.ObjSubTaskDTO.End_Date = obj.End_Date;
        return this.http.post(this.rootUrl + "TestAPI/NewGetTimelineActivity", this.ObjSubTaskDTO);
    }
    _GetTimelineActivityforRACIS(obj) {
        // let EmpNo = localStorage.getItem('EmpNo');
        this.ObjSubTaskDTO.Emp_No = obj.Emp_No;
        this.ObjSubTaskDTO.PageNumber = obj.PageNumber;
        this.ObjSubTaskDTO.PageSize = obj.PageSize;
        this.ObjSubTaskDTO.sort = obj.sort;
        this.ObjSubTaskDTO.Start_Date = obj.Start_Date;
        this.ObjSubTaskDTO.End_Date = obj.End_Date;
        return this.http.post(this.rootUrl + "TestAPI/NewGetTimelineActivityforRACIS", this.ObjSubTaskDTO);
    }
    _GetTimelineDurationforRACIS(obj) {
        this.ObjSubTaskDTO.Emp_No = obj.Emp_No;
        this.ObjSubTaskDTO.sort = obj.sort;
        this.ObjSubTaskDTO.Start_Date = obj.Start_Date;
        this.ObjSubTaskDTO.End_Date = obj.End_Date;
        return this.http.post(this.rootUrl + "TestAPI/NewGetTimelineDurationforRACIS", this.ObjSubTaskDTO);
    }
    _GetTimelineProjects(obj) {
        this.ObjSubTaskDTO.Emp_No = obj.Emp_No;
        this.ObjSubTaskDTO.ProjectBlock = obj.ProjectBlock;
        this.ObjSubTaskDTO.Project_Code = obj.Project_Code;
        return this.http.post(this.rootUrl + "TestAPI/NewGetTimelineProjects", this.ObjSubTaskDTO);
    }
    autoRefresh(interval) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_19__.Observable(observer => {
            setInterval(() => {
                this._GetTimelineActivity(this.ObjSubTaskDTO).subscribe(data => {
                    observer.next(data);
                });
            }, interval);
        });
    }
    _GetNewProjectCode(obj) {
        this.ObjSubTaskDTO.MasterCode = obj.MasterCode;
        return this.http.post(this.rootUrl + "Notification/NewGenerateNewProjectCode", this.ObjSubTaskDTO);
    }
    _InsertNewSubtask(data) {
        // let _fullname = localStorage.getItem('UserfullName');
        // this.ObjSubTaskDTO.AssignId = obj.AssignId;
        // this.ObjSubTaskDTO.MasterCode = obj.MasterCode;
        // // this.ObjSubTaskDTO.SubTask_ProjectCode = obj.SubTask_ProjectCode;
        // this.ObjSubTaskDTO.SubProject_Name = obj.SubProject_Name;
        // this.ObjSubTaskDTO.ProjectBlock = obj.ProjectBlock;
        // this.ObjSubTaskDTO.SubtaskDescription = obj.SubtaskDescription;
        // this.ObjSubTaskDTO.StartDate = obj.StartDate;
        // this.ObjSubTaskDTO.SubProject_DeadLine = obj.SubProject_DeadLine;
        // this.ObjSubTaskDTO.Duration = obj.Duration;
        // this.ObjSubTaskDTO.Emp_No = obj.Emp_No;
        // this.ObjSubTaskDTO.EmployeeName = _fullname;
        // this.ObjSubTaskDTO.Comp_No = obj.Comp_No;
        // this.ObjSubTaskDTO.Team_Res = obj.Team_Res;
        // this.ObjSubTaskDTO.Team_Autho = obj.Team_Autho;
        // this.ObjSubTaskDTO.Team_Coor = obj.Team_Coor;
        // this.ObjSubTaskDTO.Team_Informer = obj.Team_Informer;
        // this.ObjSubTaskDTO.Team_Support = obj.Team_Support;
        // this.ObjSubTaskDTO.Project_Owner = obj.Project_Owner;
        // this.ObjSubTaskDTO.AssignTo = obj.AssignTo;
        // this.ObjSubTaskDTO.Remarks = obj.Remarks;
        // this.ObjSubTaskDTO.Attachments = obj.Attachments;
        return this.http.post(this.rootUrl + "Notification/NewInsertSubTaskByProjectCode", data, {
            reportProgress: true,
            observe: 'events'
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.catchError)(this.errorMgmt));
        //Notification/NewInsertSubTaskByProjectCode
    }
    // _UpdateMainProjectByProjectCode(objsubtask) {
    //   this.ObjSubTaskDTO.MasterCode = objsubtask.MasterCode;
    //   this.ObjSubTaskDTO.Attachments = objsubtask.Attachments;
    //   this.ObjSubTaskDTO.Attachments2 = objsubtask.Attachments2;
    //   this.ObjSubTaskDTO.Remarks = objsubtask.Remarks;
    //   return this.http.post(this.rootUrl + "Notification/UploadToAzureAsyn", this.ObjSubTaskDTO);
    // }
    _fileuploadService(data) {
        return this.http.post(this.rootUrl + "Notification/UpdateMainProject_ByProjectCode", data, {
            reportProgress: true,
            observe: 'events'
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.catchError)(this.errorMgmt));
    }
    _UpdateStandardTaskSubmission(data) {
        return this.http.post(this.rootUrl + "Notification/UpdateStandardTaskSubmission", data, {
            reportProgress: true,
            observe: 'events'
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.catchError)(this.errorMgmt));
    }
    _UpdateSubtaskByProjectCode(fd) {
        // this.ObjSubTaskDTO.MasterCode = objsubtask.MasterCode;
        // this.ObjSubTaskDTO.SubTask_ProjectCode = objsubtask.SubTask_ProjectCode;
        // this.ObjSubTaskDTO.Attachments = objsubtask.Attachments;
        // this.ObjSubTaskDTO.Remarks = objsubtask.Remarks;
        return this.http.post(this.rootUrl + "Notification/NewUpdateSubTaskByProjectCode", fd, {
            reportProgress: true,
            observe: 'events'
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.catchError)(this.errorMgmt));
    }
    _InsertOnlyTaskServie(_ObjAssigntaskDTO) {
        this._ObjAssigntaskDTO.TypeOfTask = _ObjAssigntaskDTO.TypeOfTask;
        this._ObjAssigntaskDTO.CreatedBy = localStorage.getItem('EmpNo');
        this._ObjAssigntaskDTO.ProjectType = _ObjAssigntaskDTO.ProjectType;
        this._ObjAssigntaskDTO.TaskName = _ObjAssigntaskDTO.TaskName;
        this._ObjAssigntaskDTO.TaskDescription = _ObjAssigntaskDTO.TaskDescription;
        this._ObjAssigntaskDTO.AssignTo = _ObjAssigntaskDTO.AssignTo;
        this._ObjAssigntaskDTO.StartDate = _ObjAssigntaskDTO.StartDate;
        this._ObjAssigntaskDTO.EndDate = _ObjAssigntaskDTO.EndDate;
        this._ObjAssigntaskDTO.ProjectDays = _ObjAssigntaskDTO.ProjectDays;
        this._ObjAssigntaskDTO.SubmissionType = _ObjAssigntaskDTO.SubmissionType;
        this._ObjAssigntaskDTO.AssignId = _ObjAssigntaskDTO.AssignId;
        this._ObjAssigntaskDTO.CategoryName = _ObjAssigntaskDTO.CategoryName;
        this._ObjAssigntaskDTO.CategoryId = _ObjAssigntaskDTO.CategoryId;
        this._ObjAssigntaskDTO.Remarks = _ObjAssigntaskDTO.Remarks;
        this._ObjAssigntaskDTO.Reference = _ObjAssigntaskDTO.Reference;
        this._ObjAssigntaskDTO.Schedule_ID = _ObjAssigntaskDTO.Schedule_ID;
        return this.http.post(this.rootUrl + "Notification/NewInsertOnlyTask", this._ObjAssigntaskDTO);
    }
    _InsertAssignTaskServie(fd) {
        return this.http.post(this.rootUrl + "Notification/NewInsertAssignTask", fd);
    }
    _InsertDARServie(obj) {
        this.ObjDto.Emp_No = obj.Emp_No;
        this.ObjDto.Exec_BlockName = obj.Exec_BlockName;
        this.ObjDto.Project_Name = obj.Project_Name;
        this.ObjDto.StartTime = obj.StartTime;
        this.ObjDto.EndTime = obj.EndTime;
        this.ObjDto.WorkAchieved = obj.WorkAchieved;
        this.ObjDto.date = obj.date;
        this.ObjDto.TimeCount = obj.TimeCount;
        this.ObjDto.Emp_Comp_No = obj.Emp_Comp_No;
        this.ObjDto.Project_Code = obj.Project_Code;
        this.ObjDto.Master_code = obj.Master_code;
        return this.http.post(this.rootUrl + "TestAPI/NewInsertDAR", this.ObjDto);
    }
    _GetTimeforDar(empid, date) {
        this.ObjDto.Emp_No = empid;
        this.ObjDto.date = date;
        return this.http.post(this.rootUrl + "TestAPI/NewGetTimeForDarService", this.ObjDto);
    }
    _CategoryRenameDelete(obj) {
        this.ObjCategoryDTO.Mode = obj.Mode;
        this.ObjCategoryDTO.CategoryId = obj.CategoryId;
        this.ObjCategoryDTO.CategoryName = obj.CategoryName;
        this.ObjCategoryDTO.CurrentUser = obj.CurrentUser;
        return this.http.post(this.rootUrl + "Category/NewCategoryRenameDelete", this.ObjCategoryDTO);
    }
    _ProjectRenameService(id, pname, Desc, Currentuser) {
        this.ObjDto.Project_Id = id;
        this.ObjDto.Project_Name = pname;
        this.ObjDto.Project_Description = Desc;
        this.ObjDto.Emp_No = Currentuser;
        return this.http.post(this.rootUrl + "Category/NewProjectRename", this.ObjDto);
    }
    _NewProjectDurationService(pcode, duration, remarks, emp_no) {
        this.ObjDto.Project_Code = pcode;
        this.ObjDto.Duration = duration;
        this.ObjDto.Emp_No = emp_no;
        this.ObjDto.Remarks = remarks;
        return this.http.post(this.rootUrl + "Category/NewProjectDuration", this.ObjDto);
    }
    _NewProjectCategoryService(pcode, Empno, reportid, remarks) {
        this.ObjDto.Project_Code = pcode;
        this.ObjDto.Emp_No = Empno;
        this.ObjDto.ReportId = reportid;
        this.ObjDto.Remarks = remarks;
        return this.http.post(this.rootUrl + "Category/NewProjectChangeCategory", this.ObjDto);
    }
    _NewProjectClientService(pcode, Empno, clientid, remarks) {
        this.ObjDto.Project_Code = pcode;
        this.ObjDto.Emp_No = Empno;
        this.ObjDto.ClientId = clientid;
        this.ObjDto.Remarks = remarks;
        return this.http.post(this.rootUrl + "Category/NewProjectChangeClient", this.ObjDto);
    }
    _NewProjectSupportService(pcode, Empno, support, remarks) {
        this.ObjDto.Project_Code = pcode;
        this.ObjDto.Emp_No = Empno;
        this.ObjDto.Team_Support = support;
        this.ObjDto.Remarks = remarks;
        return this.http.post(this.rootUrl + "Category/NewProjectUpdateSupport", this.ObjDto);
    }
    _NewProjectOwnerRespService(obj) {
        this.ObjDto.Project_Code = obj.Project_Code;
        this.ObjDto.Emp_No = obj.Emp_No;
        this.ObjDto.Project_Owner = obj.Project_Owner;
        this.ObjDto.Team_Res = obj.Team_Res;
        this.ObjDto.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "Category/NewProjectUpdateOwnerResponsible", this.ObjDto);
    }
    _ProjectDeadlineExtendService(pcode, enddate, startdate, remarks) {
        let EmpNo = localStorage.getItem('EmpNo');
        this.ObjDto.Emp_No = EmpNo;
        this.ObjDto.Project_Code = pcode;
        this.ObjDto.Project_EndDate = enddate;
        this.ObjDto.Project_StartDate = startdate;
        this.ObjDto.Remarks = remarks;
        return this.http.post(this.rootUrl + "Category/NewProjectDeadlineExtend", this.ObjDto);
    }
    _ProjectHoldService(obj) {
        let EmpNo = localStorage.getItem('EmpNo');
        this.ObjDto.Emp_No = EmpNo;
        this.ObjDto.Project_Code = obj.Project_Code;
        this.ObjDto.Project_holddate = obj.Project_holddate;
        this.ObjDto.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "Category/NewProjectHold", this.ObjDto);
    }
    getDeadlineCountbyProjectcode(pCode) {
        this.ObjDto.Project_Code = pCode;
        return this.http.post(this.rootUrl + "Category/NewGetDeadlineCountbyPCode", this.ObjDto);
    }
    getHoldDatebyProjectcode(pCode) {
        this.ObjDto.Project_Code = pCode;
        return this.http.post(this.rootUrl + "Category/NewGetProjectHoldDatebyPCode", this.ObjDto);
    }
    SharingDataService(obj) {
        return obj;
    }
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.throwError)(errorMessage);
    }
    _setMessage(mode) {
        this.Mode = mode;
    }
    _getMessage() {
        return this.Mode;
    }
}
ProjectTypeService.ɵfac = function ProjectTypeService_Factory(t) { return new (t || ProjectTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_apiurl_service__WEBPACK_IMPORTED_MODULE_18__.ApiurlService)); };
ProjectTypeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjectable"]({ token: ProjectTypeService, factory: ProjectTypeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 95107);
/* harmony import */ var _Layouts_backend_layout_backend_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Layouts/backend-layout/backend-layout.component */ 63319);
/* harmony import */ var _routes_backend_layout_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/backend-layout-route */ 40717);
/* harmony import */ var _Layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Layouts/default-layout/default-layout.component */ 4631);
/* harmony import */ var _routes_default_layout_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/default-layout-route */ 51730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);








//import { Settings_Routes } from './settings/setting-routing.module';
const routes = [
    {
        path: '', component: _Layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutComponent, children: _routes_default_layout_route__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_ROUTES
    },
    {
        path: 'backend', component: _Layouts_backend_layout_backend_layout_component__WEBPACK_IMPORTED_MODULE_1__.BackendLayoutComponent, children: _routes_backend_layout_route__WEBPACK_IMPORTED_MODULE_2__.BACKEND_ROUTES,
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-loading-bar/core */ 3571);




class AppComponent {
    constructor() {
        this.title = 'CreativePlanner';
    }
    // _loadChildComponent = false;
    // parentToChild: string;
    // objShareDTO: ShareDto;
    ngOnInit() {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
            if (location.protocol === 'http:') {
                window.location.href = location.href.replace('http', 'https');
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [["ref", "http", 3, "height", "includeSpinner"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-loading-bar", 0)(1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", "3px")("includeSpinner", false);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__.LoadingBarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-loading-bar/router */ 70239);
/* harmony import */ var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-loading-bar/http-client */ 2723);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _LayoutDashboard_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_LayoutDashboard/header/header.component */ 90449);
/* harmony import */ var _LayoutDashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_LayoutDashboard/sidebar/sidebar.component */ 29612);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material-module */ 48696);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ 95107);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _Layouts_backend_layout_backend_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_Layouts/backend-layout/backend-layout.component */ 63319);
/* harmony import */ var _Layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_Layouts/default-layout/default-layout.component */ 4631);
/* harmony import */ var src_app_Shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Shared/components/confirm-dialog/confirm-dialog.component */ 49785);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _LayoutDashboard_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_LayoutDashboard/timeline/timeline.component */ 1897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);






















// import { ProjectCreationComponent } from './_LayoutDashboard/project-creation/project-creation.component';
// import { ProjectAssignTaskComponent } from './_LayoutDashboard/project-assign-task/project-assign-task.component';
//  import { ProjectUnplannedTaskComponent } from './_LayoutDashboard/project-unplanned-task/project-unplanned-task.component';
//import { ToDoProjectsComponent } from './_LayoutDashboard/to-do-projects/to-do-projects.component';
//import { FilterPipeSearchPipe } from './Shared/filter-pipe-search.pipe';
//import { ProjectInfoComponent } from "src/app/_LayoutDashboard/project-info/project-info.component";
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard
        // ,ProjectUnplannedTaskComponent
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrModule.forRoot({}),
        _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
        _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_16__.LoadingBarRouterModule,
        _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_17__.LoadingBarHttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__.NgMultiSelectDropDownModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _Layouts_backend_layout_backend_layout_component__WEBPACK_IMPORTED_MODULE_6__.BackendLayoutComponent,
        _Layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutComponent,
        _LayoutDashboard_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _LayoutDashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent,
        src_app_Shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__.ConfirmDialogComponent,
        _LayoutDashboard_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__.TimelineComponent
        // MeetingReportComponent
        // NotificationComponent    
        // ProjectCreationComponent,
        // ProjectAssignTaskComponent,
        // ProjectUnplannedTaskComponent,
        // ToDoProjectsComponent,
        //FilterPipeSearchPipe,
        // ProjectInfoComponent
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
        _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_16__.LoadingBarRouterModule,
        _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_17__.LoadingBarHttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__.NgMultiSelectDropDownModule] }); })();


/***/ }),

/***/ 95107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);



class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    // canActivate(
    //   next: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return true;
    // }
    canActivate(route, state) {
        if (this.isLoggedIn()) {
            return true;
        }
        // navigate to login page as user is not authenticated      
        this.router.navigate(['/login']);
        return false;
    }
    isLoggedIn() {
        let status = false;
        if (localStorage.getItem('isLoggedIn') == "true") {
            status = true;
            //this.router.navigate(['/login'], {queryParams: {returnUrl: state}});
        }
        else {
            status = false;
        }
        return status;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 48696:
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ 86079);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/portal */ 17520);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/stepper */ 41861);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ 59673);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ 15183);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/badge */ 83335);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 64865);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button-toggle */ 19837);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/chips */ 11169);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/stepper */ 44193);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tree */ 53453);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);












































class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__.ClipboardModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__.MatTreeModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__.ScrollingModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_43__.NgSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__.ClipboardModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__.MatTreeModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__.ScrollingModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_43__.NgSelectModule] }); })();


/***/ }),

/***/ 40717:
/*!************************************************!*\
  !*** ./src/app/routes/backend-layout-route.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BACKEND_ROUTES": () => (/* binding */ BACKEND_ROUTES)
/* harmony export */ });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/auth.guard */ 95107);

const BACKEND_ROUTES = [
    {
        path: 'dashboard', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__Services_link_service_ts-node_modules_underscore_modules_index-all_js"), __webpack_require__.e("default-src_app__Services_calender_service_ts-node_modules_kolkov_angular-editor___ivy_ngcc__-f69c55"), __webpack_require__.e("src_app__LayoutDashboard_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/dashboard/dashboard.module */ 59552)).then(m => m.DashboardModule)
    },
    {
        path: 'Portfolio', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_amcharts_amcharts4_charts_js-node_modules_amcharts_amcharts4_core_js"), __webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-pag-cc3a5d"), __webpack_require__.e("src_app__LayoutDashboard_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/home/home.module */ 45671)).then(m => m.HomeModule)
    },
    {
        path: 'portfolio', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_amcharts_amcharts4_charts_js-node_modules_amcharts_amcharts4_core_js"), __webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-pag-cc3a5d"), __webpack_require__.e("src_app__LayoutDashboard_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/home/home.module */ 45671)).then(m => m.HomeModule)
    },
    {
        path: 'ProjectsSummary', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__LayoutDashboard_projects-summary_projects-summary_component_ts"), __webpack_require__.e("default-src_app__Services_link_service_ts-node_modules_underscore_modules_index-all_js"), __webpack_require__.e("src_app_Directive_sort_ts-src_app__LayoutDashboard_projects-summary_projects-summary_module_t-69f463")]).then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/projects-summary/projects-summary.module */ 75852)).then(m => m.ProjectsSummaryModule),
    },
    {
        path: 'Timeline', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app__LayoutDashboard_timeline_timeline_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/timeline/timeline.module */ 34677)).then(m => m.TimelineModule),
    },
    {
        path: 'PerformanceDashboard', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_amcharts_amcharts4_charts_js-node_modules_amcharts_amcharts4_core_js"), __webpack_require__.e("src_app__LayoutDashboard_projects-chart_projects-chart_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/projects-chart/projects-chart.module */ 75821)).then(m => m.ProjectsChartModule)
    },
    {
        path: 'performancedashboard', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_amcharts_amcharts4_charts_js-node_modules_amcharts_amcharts4_core_js"), __webpack_require__.e("src_app__LayoutDashboard_projects-chart_projects-chart_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/projects-chart/projects-chart.module */ 75821)).then(m => m.ProjectsChartModule)
    },
    {
        path: 'DeleteHistory', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app__LayoutDashboard_history_history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/history/history.module */ 63120)).then(m => m.HistoryModule)
    },
    {
        path: 'ToDoProjects', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_amcharts_amcharts4_charts_js-node_modules_amcharts_amcharts4_core_js"), __webpack_require__.e("default-src_app__LayoutDashboard_to-do-projects_to-do-projects_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_projects-summary_projects-summary_component_ts"), __webpack_require__.e("default-src_app__Services_link_service_ts-node_modules_underscore_modules_index-all_js"), __webpack_require__.e("default-src_app__LayoutDashboard_project-unplanned-task_project-unplanned-task_component_ts"), __webpack_require__.e("default-src_app_Directive_sort_ts-src_app__LayoutDashboard_more-details_more-details_componen-ef1f26"), __webpack_require__.e("src_app__LayoutDashboard_to-do-projects_to-do-projects_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/to-do-projects/to-do-projects.module */ 89923)).then(m => m.ToDoProjectsModule)
    },
    {
        path: 'settings', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_settings_setting_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../settings/setting.module */ 74261)).then(m => m.SettingModule)
    },
    {
        path: 'userpolicy/:val', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_policy_policy_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../policy/policy.module */ 14202)).then(m => m.PolicyModule)
    }
];


/***/ }),

/***/ 51730:
/*!************************************************!*\
  !*** ./src/app/routes/default-layout-route.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_ROUTES": () => (/* binding */ DEFAULT_ROUTES)
/* harmony export */ });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/auth.guard */ 95107);

const DEFAULT_ROUTES = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app__LayoutDefault_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDefault/login/login.module */ 83187)).then(m => m.LoginModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app__LayoutDefault_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDefault/login/login.module */ 83187)).then(m => m.LoginModule)
    },
    {
        path: 'moredetails/:projectcode', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_amcharts_amcharts4_charts_js-node_modules_amcharts_amcharts4_core_js"), __webpack_require__.e("default-src_app__LayoutDashboard_to-do-projects_to-do-projects_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_projects-summary_projects-summary_component_ts"), __webpack_require__.e("default-src_app__Services_link_service_ts-node_modules_underscore_modules_index-all_js"), __webpack_require__.e("default-src_app__LayoutDashboard_notification_notification_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_project-unplanned-task_project-unplanned-task_component_ts"), __webpack_require__.e("default-src_app_Directive_sort_ts-src_app__LayoutDashboard_more-details_more-details_componen-ef1f26"), __webpack_require__.e("src_app__LayoutDashboard_more-details_more-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/more-details/more-details.module */ 76288)).then(m => m.MoreDetailsModule),
    },
    {
        path: 'MoreDetails/:projectcode', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_amcharts_amcharts4_charts_js-node_modules_amcharts_amcharts4_core_js"), __webpack_require__.e("default-src_app__LayoutDashboard_to-do-projects_to-do-projects_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_projects-summary_projects-summary_component_ts"), __webpack_require__.e("default-src_app__Services_link_service_ts-node_modules_underscore_modules_index-all_js"), __webpack_require__.e("default-src_app__LayoutDashboard_notification_notification_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_project-unplanned-task_project-unplanned-task_component_ts"), __webpack_require__.e("default-src_app_Directive_sort_ts-src_app__LayoutDashboard_more-details_more-details_componen-ef1f26"), __webpack_require__.e("src_app__LayoutDashboard_more-details_more-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/more-details/more-details.module */ 76288)).then(m => m.MoreDetailsModule),
    },
    {
        path: 'Notifications', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__LayoutDashboard_notification_notification_component_ts"), __webpack_require__.e("src_app__LayoutDashboard_notification_notification_module_ts-src_app__Services_approvals_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/notification/notification.module */ 39472)).then(m => m.NotificationModule),
    },
    {
        path: 'Meeting-Report/:scheduleid', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__LayoutDashboard_project-unplanned-task_project-unplanned-task_component_ts"), __webpack_require__.e("default-src_app__Services_calender_service_ts-node_modules_kolkov_angular-editor___ivy_ngcc__-f69c55"), __webpack_require__.e("default-src_app__LayoutDashboard_meeting-report_meeting-report_component_ts"), __webpack_require__.e("src_app__LayoutDashboard_meeting-report_meeting-report_module_ts-src_app__Services_link_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/meeting-report/meeting-report.module */ 8347)).then(m => m.MeetingReportModule),
    },
    {
        path: 'portfolioprojects/:portfolioId', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_amcharts_amcharts4_charts_js-node_modules_amcharts_amcharts4_core_js"), __webpack_require__.e("default-src_app__Services_link_service_ts-node_modules_underscore_modules_index-all_js"), __webpack_require__.e("default-src_app__LayoutDashboard_portfolio-projects_portfolio-projects_component_ts"), __webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-pag-cc3a5d"), __webpack_require__.e("src_app__LayoutDashboard_portfolio-projects_portfolio-projects_module_ts-src_app__Services_bs-517bd3")]).then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/portfolio-projects/portfolio-projects.module */ 19094)).then(m => m.PortfolioProjectsModule)
    },
    {
        path: 'AddProjectsToPortfolio/:portfolioId', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__Services_link_service_ts-node_modules_underscore_modules_index-all_js"), __webpack_require__.e("default-src_app__LayoutDashboard_projects-add_projects-add_component_ts"), __webpack_require__.e("src_app_Directive_sort_ts-src_app__LayoutDashboard_projects-add_projects-add_module_ts-src_ap-52451f")]).then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/projects-add/projects-add.module */ 98543)).then(m => m.ProjectsAddModule)
    },
    {
        path: 'NewProjectCreation', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app__LayoutDashboard_project-creation_project-creation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/project-creation/project-creation.module */ 60694)).then(m => m.ProjectCreationModule)
    },
    {
        path: 'AssignTask', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__LayoutDashboard_project-unplanned-task_project-unplanned-task_component_ts"), __webpack_require__.e("src_app__LayoutDashboard_project-assign-task_project-assign-task_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/project-assign-task/project-assign-task.module */ 61215)).then(m => m.ProjectAssignTaskModule),
    },
    {
        path: 'UnplannedTask', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_amcharts_amcharts4_charts_js-node_modules_amcharts_amcharts4_core_js"), __webpack_require__.e("default-src_app__LayoutDashboard_to-do-projects_to-do-projects_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_projects-summary_projects-summary_component_ts"), __webpack_require__.e("default-src_app__Services_link_service_ts-node_modules_underscore_modules_index-all_js"), __webpack_require__.e("default-src_app__LayoutDashboard_project-unplanned-task_project-unplanned-task_component_ts"), __webpack_require__.e("default-src_app__Services_calender_service_ts-node_modules_kolkov_angular-editor___ivy_ngcc__-f69c55"), __webpack_require__.e("default-src_app_Directive_sort_ts-src_app__LayoutDashboard_more-details_more-details_componen-ef1f26"), __webpack_require__.e("default-src_app__LayoutDashboard_meeting-report_meeting-report_component_ts"), __webpack_require__.e("src_app__LayoutDashboard_project-unplanned-task_project-unplanned-task_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/project-unplanned-task/project-unplanned-task.module */ 25016)).then(m => m.ProjectUnplannedTaskModule)
    },
    {
        path: 'ViewProjects/:Mode', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__Services_link_service_ts-node_modules_underscore_modules_index-all_js"), __webpack_require__.e("default-src_app__LayoutDashboard_view-dashboard-projects_view-dashboard-projects_component_ts"), __webpack_require__.e("src_app_Directive_sort_ts-src_app__LayoutDashboard_view-dashboard-projects_view-dashboard-pro-b755d3")]).then(__webpack_require__.bind(__webpack_require__, /*! ../_LayoutDashboard/view-dashboard-projects/view-dashboard-projects.module */ 18684)).then(m => m.ViewDashboardProjectsModule)
    },
    // {
    //      path: 'projectinfo/:projectcode',
    //      loadChildren: () => import('../_LayoutDashboard/project-info/project-info.module').then(m => m.ProjectInfoModule)
    //    },
    // {
    //      path: 'ViewProjects/:Mode',component:ViewDashboardProjectsComponent,
    //      children: [
    //           {
    //             path: 'projectinfo/:projectcode',
    //             loadChildren: () => import('../_LayoutDashboard/project-info/project-info.module').then(m => m.ProjectInfoModule)
    //           }
    //         ]
    // }
    {
        path: 'userpolicy', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_policy_policy_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../policy/policy.module */ 14202)).then(m => m.PolicyModule)
    },
];


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //localServer
    baseUrl: 'http://localhost:1221/api/'
    // baseUrl:'https://cswebapps.com/PortfolioAPI/api/'
    //DMS Live Server
    //baseUrl:'http://localhost:1221/api/'
    //MyMachine Local IIS Server
    // baseUrl: 'http://localhost:8080/webapi/api/'
};
/* http://localhost:53977/
 baseUrl:'http://cswebapps.com/PortfolioAPI/api/'
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 82469,
	"./tg.js": 82469,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map