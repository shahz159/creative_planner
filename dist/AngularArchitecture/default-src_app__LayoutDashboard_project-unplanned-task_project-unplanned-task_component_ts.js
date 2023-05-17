"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["default-src_app__LayoutDashboard_project-unplanned-task_project-unplanned-task_component_ts"],{

/***/ 32444:
/*!*********************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectUnplannedTaskComponent": () => (/* binding */ ProjectUnplannedTaskComponent)
/* harmony export */ });
/* harmony import */ var src_app_Shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Shared/components/confirm-dialog/confirm-dialog.component */ 49785);
/* harmony import */ var src_app_Models_assigntask_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/assigntask-dto */ 60065);
/* harmony import */ var src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Models/completed-projects-dto */ 60808);
/* harmony import */ var src_app_Models_sub_task_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Models/sub-task-dto */ 9962);
/* harmony import */ var src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Models/user-details-dto */ 12359);
/* harmony import */ var src_app_Models_category_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Models/category-dto */ 24594);
/* harmony import */ var node_modules_tippy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! node_modules/tippy.js */ 83293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ 77585);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);






// import { ac } from 'src/app/_LayoutDashboard/action-to-project/action-to-project.component';













function ProjectUnplannedTaskComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.acceptCount);
} }
function ProjectUnplannedTaskComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProjectUnplannedTaskComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.pendingCount);
} }
function ProjectUnplannedTaskComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProjectUnplannedTaskComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r4.rejectCount);
} }
function ProjectUnplannedTaskComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProjectUnplannedTaskComponent_div_32_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 67)(1, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r17.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r17.SCount);
} }
function ProjectUnplannedTaskComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 52)(1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 55)(4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_32_Template_div_click_4_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 1)(6, "div", 57)(7, "h5")(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Total Tasks - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "h5", 58)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 1)(16, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 62)(20, "div", 60)(21, "div", 63)(22, "p")(23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, ProjectUnplannedTaskComponent_div_32_div_25_Template, 7, 2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 1)(28, "div", 60)(29, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_32_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r19.underDev()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_32_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.underDev()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r6.procount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r6.status_list);
} }
const _c0 = function (a0) { return { "bg-secondary": a0 }; };
function ProjectUnplannedTaskComponent_li_37_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 71)(1, "a")(2, "div", 72)(3, "span", 73)(4, "div", 74)(5, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectUnplannedTaskComponent_li_37_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r24.Cat_Name = $event); })("keydown.enter", function ProjectUnplannedTaskComponent_li_37_Template_input_keydown_enter_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const item_r22 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r26.OnCategoryRename(item_r22.Category_ID)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 76)(7, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_li_37_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const item_r22 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r27.OnCategoryRename(item_r22.Category_ID)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_li_37_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const item_r22 = restoredCtx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r28.OnCat_Cancel(item_r22.Category_ID)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 81)(12, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_li_37_Template_div_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const item_r22 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r29.OnCategoryClick(item_r22.Category_ID, item_r22.Category_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span")(14, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span", 84)(17, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "span", 86)(21, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "span", 87)(24, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "mat-menu", 89, 90)(28, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_li_37_Template_button_click_28_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const item_r22 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r30.OnCategoryEdit_Click(item_r22.Category_ID, item_r22.Category_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "mat-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_li_37_Template_button_click_33_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25); const item_r22 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r31.OnDeleteCategory(item_r22.Category_ID, item_r22.Category_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "mat-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](27);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](11, _c0, item_r22.Category_ID == ctx_r7._Categoryid));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "TextboxCat_", item_r22.Category_ID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r7.Cat_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "LabelCat_", item_r22.Category_ID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r22.Category_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 9, item_r22.Created_DT), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r22.TaskCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", _r23)("hidden", ctx_r7.hideMenuOfCategory);
} }
function ProjectUnplannedTaskComponent_h5_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProjectUnplannedTaskComponent_div_134_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Action Added To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-icon", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "task_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function ProjectUnplannedTaskComponent_div_134_div_23_span_24_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span")(1, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_134_div_23_span_24_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r41); const item1_r39 = restoredCtx.$implicit; const item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r40.OnEmployeeSelect(item1_r39.Emp_No, item_r32.Assign_Id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item1_r39.Tm_DisplayName);
} }
function ProjectUnplannedTaskComponent_div_134_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 113)(1, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_134_div_23_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r45); const item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r43.OnEditNameClick(item_r32.Task_Name, item_r32.Assign_Id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_134_div_23_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r45); const item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r46._Deletetask(item_r32.Assign_Id, item_r32.Task_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 116)(8, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "mat-menu", 89, 117)(12, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_134_div_23_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r45); const item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r48.GetProjectTypeList(item_r32.Task_Name, item_r32.Assign_Id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "mat-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Assign Task/Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_134_div_23_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r45); const item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r50.ActionToProject_Click(item_r32.Task_Name, item_r32.Assign_Id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "mat-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "new_label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Add Action To Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "mat-menu", null, 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, ProjectUnplannedTaskComponent_div_134_div_23_span_24_Template, 3, 1, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](11);
    const item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "div_", item_r32.Assign_Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", _r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r35.EmployeeList);
} }
function ProjectUnplannedTaskComponent_div_134_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 93)(1, "div", 94)(2, "div", 95)(3, "div", 96)(4, "div", 97)(5, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_134_Template_input_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r54); const item_r32 = restoredCtx.$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r53.OnRadioClick(item_r32.Assign_Id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 99)(7, "div", 100)(8, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 102)(11, "div", 74)(12, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectUnplannedTaskComponent_div_134_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r55._taskName = $event); })("keydown.enter", function ProjectUnplannedTaskComponent_div_134_Template_input_keydown_enter_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r54); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r56.OnTask_Rename()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 104)(14, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_134_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r54); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r57.OnTask_Rename()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_134_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r54); const item_r32 = restoredCtx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r58.onCancel(item_r32.Assign_Id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 107)(19, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, ProjectUnplannedTaskComponent_div_134_span_22_Template, 4, 0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, ProjectUnplannedTaskComponent_div_134_div_23_Template, 25, 3, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", item_r32.TypeOfTask == "SUBTASK");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "spnLabel_", item_r32.Assign_Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r32.Task_Name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "spanTextbox_", item_r32.Assign_Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r9._taskName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](21, 8, item_r32.Creation_Date, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r32.TypeOfTask == "SUBTASK");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r32.TypeOfTask != "SUBTASK");
} }
function ProjectUnplannedTaskComponent_h5_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProjectUnplannedTaskComponent_div_137_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 121)(1, "div", 122)(2, "div", 95)(3, "div", 96)(4, "div", 97)(5, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_137_Template_input_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r61); const item_r59 = restoredCtx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r60.On_Uncheck(item_r59.Assign_Id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 99)(8, "div", 100)(9, "span", 124)(10, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 107)(13, "span", 108)(14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "div", 126)(20, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r59.Task_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](16, 3, item_r59.Modified_DT, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r59.ToDo_Status, " ");
} }
function ProjectUnplannedTaskComponent_h5_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Action To Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1, a2, a3) { return { "kt-badge--unified-success": a0, "kt-badge--unified-warning1": a1, "kt-badge--unified-danger": a2, "kt-badge--unified-info": a3 }; };
function ProjectUnplannedTaskComponent_div_140_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 148)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction4"](2, _c1, item_r62.Status == "Completed", item_r62.Status == "InProcess", item_r62.Status == "Project Hold", item_r62.Status == "Completion Under Approval"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r62.Status, "");
} }
function ProjectUnplannedTaskComponent_div_140_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 149)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", item_r62.Status, " ", item_r62.Delaydays, " days");
} }
function ProjectUnplannedTaskComponent_div_140_span_54_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_140_span_54_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r71); const item_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r69.LoadDocument(item_r62.Reference)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "a", 152)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r62.FileName);
} }
function ProjectUnplannedTaskComponent_div_140_span_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r62.Remarks);
} }
function ProjectUnplannedTaskComponent_div_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 93)(1, "div", 128)(2, "div", 95)(3, "div", 96)(4, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 99)(7, "div", 129)(8, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 132)(13, "span", 133)(14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "img", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, " Action Added To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "mat-icon", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "task_alt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, " Assigned To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "mat-icon", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "task_alt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "span", 136)(32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](34, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 85)(36, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](37, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, ProjectUnplannedTaskComponent_div_140_span_39_Template, 3, 7, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, ProjectUnplannedTaskComponent_div_140_span_40_Template, 3, 2, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "span", 141)(42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](43, "img", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](46, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "span", 143)(48, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](49, "img", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](52, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, ProjectUnplannedTaskComponent_div_140_span_54_Template, 5, 1, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](55, ProjectUnplannedTaskComponent_div_140_span_55_Template, 4, 1, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](56, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r62.Task_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r62.Task_Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 13, item_r62.Creation_Date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r62.Project_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r62.Assigned_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](34, 15, item_r62.Modified_DT), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", item_r62.Project_type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r62.Status != "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r62.Status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](46, 17, item_r62.Start_Date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](52, 19, item_r62.End_Date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r62.FileName != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r62.Remarks != "" && item_r62.Remarks != "undefined");
} }
function ProjectUnplannedTaskComponent_h5_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Assigned Task/Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProjectUnplannedTaskComponent_div_143_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_143_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r87); const item_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r85.openInfo(item_r74.Project_Code, item_r74.Project_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProjectUnplannedTaskComponent_div_143_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_143_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r90); const item_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r88.moreDetails(item_r74.Project_Code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProjectUnplannedTaskComponent_div_143_label_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r74.Project_type, "");
} }
const _c2 = function (a0, a1, a2, a3) { return { "kt-badge--unified-success": a0, "kt-badge--unified-warning": a1, "kt-badge--unified-danger": a2, "kt-badge--unified-info": a3 }; };
function ProjectUnplannedTaskComponent_div_143_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 177)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction4"](2, _c2, item_r74.Project_status == "Completed", item_r74.Project_status == "InProcess", item_r74.Project_status == "Rejected" || item_r74.Project_status == "Project Complete Rejected" || item_r74.Project_status == "New Project Rejected", item_r74.Project_status == "Under Approval" || item_r74.Project_status == "Completion Under Approval" || item_r74.Project_status == "Deadline Extend Under Approval"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r74.Project_status, "");
} }
function ProjectUnplannedTaskComponent_div_143_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 178)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", item_r74.Project_status, " ", item_r74.Delaydays, " days");
} }
function ProjectUnplannedTaskComponent_div_143_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 178)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Hold ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function ProjectUnplannedTaskComponent_div_143_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 141)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 1, item_r74.Start_Date), "");
} }
function ProjectUnplannedTaskComponent_div_143_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 143)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 1, item_r74.End_Date), "");
} }
function ProjectUnplannedTaskComponent_div_143_span_46_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_143_span_46_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r98); const item_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r96.LoadDocument(item_r74.Reference)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "a", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_143_span_46_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r98); const item_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r99.LoadDocument(item_r74.Reference)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r74.FileName);
} }
function ProjectUnplannedTaskComponent_div_143_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r74.Remarks);
} }
const _c3 = function (a0, a1, a2) { return { "kt-badge--unified-danger": a0, "kt-badge--unified-success": a1, "kt-badge--unified-warning": a2 }; };
function ProjectUnplannedTaskComponent_div_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 93)(1, "div", 155)(2, "div", 95)(3, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 99)(6, "div", 156)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ProjectUnplannedTaskComponent_div_143_a_8_Template, 2, 0, "a", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ProjectUnplannedTaskComponent_div_143_a_9_Template, 2, 0, "a", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 159)(12, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 132)(17, "span", 133)(18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "img", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, " Assigned Task/Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "mat-icon", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "task_alt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "span", 163)(30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](31, "img", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](34, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "span", 165)(36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, ProjectUnplannedTaskComponent_div_143_label_39_Template, 3, 1, "label", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, ProjectUnplannedTaskComponent_div_143_span_40_Template, 3, 7, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, ProjectUnplannedTaskComponent_div_143_span_41_Template, 3, 2, "span", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, ProjectUnplannedTaskComponent_div_143_span_42_Template, 3, 0, "span", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, ProjectUnplannedTaskComponent_div_143_span_43_Template, 6, 3, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, ProjectUnplannedTaskComponent_div_143_span_44_Template, 6, 3, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, ProjectUnplannedTaskComponent_div_143_span_46_Template, 5, 1, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](47, ProjectUnplannedTaskComponent_div_143_span_47_Template, 4, 1, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](48, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r74.Project_Code != null && item_r74.Status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r74.Project_Code != null && item_r74.Status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r74.Task_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r74.Task_Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 17, item_r74.Creation_Date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r74.AssignedTo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](34, 19, item_r74.Modified_DT), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](21, _c3, item_r74.Status == "Rejected", item_r74.Status == "Accepted", item_r74.Status == "Pending"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r74.Status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r74.Project_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r74.Project_status && item_r74.Project_status != "Delay" && item_r74.Project_status != "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r74.Project_status && item_r74.Project_status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r74.Project_status && item_r74.Project_status == "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r74.Start_Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r74.End_Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r74.FileName !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r74.Remarks != "" && item_r74.Remarks != "undefined" && item_r74.Remarks != "null");
} }
class ProjectUnplannedTaskComponent {
    constructor(notifyService, ProjectTypeService, router, dialog, dateAdapter, BsService
    // ,_Id
    // ,_Name
    ) {
        this.notifyService = notifyService;
        this.ProjectTypeService = ProjectTypeService;
        this.router = router;
        this.dialog = dialog;
        this.dateAdapter = dateAdapter;
        this.BsService = BsService;
        this.panelOpenState = false;
        this.disablePreviousDate = new Date();
        this.disableAfterStartDate = new Date();
        this.IfNoTaskFound = "Please select category to view task's";
        this._Demotext = "";
        this._TodoList = [];
        this._CompletedList = [];
        this.ActionedSubtask_Json = [];
        this.ActionedAssigned_Josn = [];
        this._EndDate = null;
        this._StartDate = null;
        this._SelectedEmpNo = '';
        this.SelectedEmplList = [];
        this._remarks = "";
        this.Mdl_CategoryName = "";
        this.ShowTaskList_Div = true;
        this._taskName = "";
        this.selectedEmployee = "";
        this.selectedProjectCodelist = [];
        this.dropdownSettings_Projects = {};
        this.dropdownSettings_Employee = {};
        this.Label_TaskName = false;
        this.Textbox_EditTaskName = true;
        this.hideMenuOfCategory = false;
        // this._Id='0';
        // this._Name='NA';
        this._ObjAssigntaskDTO = new src_app_Models_assigntask_dto__WEBPACK_IMPORTED_MODULE_1__.AssigntaskDTO();
        this._ObjCompletedProj = new src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_2__.CompletedProjectsDTO();
        this.ObjUserDetails = new src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_4__.UserDetailsDTO();
        this.ObjSubTaskDTO = new src_app_Models_sub_task_dto__WEBPACK_IMPORTED_MODULE_3__.SubTaskDTO();
        this.ObjCategoryDTO = new src_app_Models_category_dto__WEBPACK_IMPORTED_MODULE_5__.CategoryDTO();
        this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
        this.disableAfterStartDate.setDate(this.disableAfterStartDate.getDate());
        this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    }
    // private _bar: boolean = false;
    get selectedcatname() {
        return this._selectedcatname;
    }
    set selectedcatname(value) {
        this._selectedcatname = value;
    }
    // ngAfterContentChecked() {
    //   tippy('.Start_Date', {
    //     content: "Enter qwerty Name",
    //     arrow: true,
    //     animation: 'scale-extreme',
    //     theme: 'gradient',
    //     animateFill: true,
    //     inertia: true,
    //   });
    // }
    ngOnInit() {
        this.CurrentUser_ID = localStorage.getItem('EmpNo');
        this.getCatid();
        this.GetAssignFormEmployeeDropdownList();
        this.getrunwayCount();
        (0,node_modules_tippy_js__WEBPACK_IMPORTED_MODULE_10__["default"])('#tippy1', {
            content: "Runway Tasks!!",
            arrow: true,
            animation: 'scale-extreme',
            //animation: 'tada',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            // trigger: 'click',
            // delay: [1000, 200]
        });
        (0,node_modules_tippy_js__WEBPACK_IMPORTED_MODULE_10__["default"])('#tippy2', {
            content: "Add Category!",
            arrow: true,
            animation: 'scale-extreme',
            //animation: 'tada',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            // trigger: 'click',
            // delay: [1000, 200]
        });
        (0,node_modules_tippy_js__WEBPACK_IMPORTED_MODULE_10__["default"])('#tippy3', {
            content: "Add Task!",
            arrow: true,
            animation: 'scale-extreme',
            //animation: 'tada',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            // trigger: 'click',
            // delay: [1000, 200]
        });
        (0,node_modules_tippy_js__WEBPACK_IMPORTED_MODULE_10__["default"])('.mybutton', {
            content: "Enter Rack Name",
            arrow: true,
            animation: 'scale-extreme',
            //animation: 'tada',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            // trigger: 'click',
            // delay: [1000, 200]
        });
        //   window.onload = () => {
        //   tippy('#tippy1', {
        //     arrow: true,
        //     animation: 'scale-extreme',
        //     //animation: 'tada',
        //     theme: 'gradient',
        //     animateFill: true,
        //     inertia: true,
        //     // trigger: 'click',
        //     // delay: [1000, 200]
        //   });
        // }
    }
    getCatid() {
        this.ProjectTypeService._GetRunwayCatId(this.CurrentUser_ID).subscribe((data) => {
            this.newCatid = (data[0]['CategoryId']);
            this.GetTodoProjects();
        });
        this.router.navigate(["UnplannedTask/"]);
    }
    EnterSubmit(_Demotext) {
        if (_Demotext != "") {
            this._ObjAssigntaskDTO.CategoryId = this._Categoryid;
            this._ObjAssigntaskDTO.TypeOfTask = "ToDo";
            this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
            this._ObjAssigntaskDTO.TaskName = this._Demotext;
            this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe((data) => {
                //console.log("Data---->", data);
                this._TodoList = JSON.parse(data['TodoList']);
                let message = data['Message'];
                this._Demotext = "";
                //this.GetAssignTask();
                this.notifyService.showSuccess("Successfully", "Added");
                // this.closeInfo();
            });
        }
        else {
            this.notifyService.showInfo("Failed to add task!!", "Please Enter Task Name");
        }
        this.clearFeilds();
    }
    GetAssigned_SubtaskProjects() {
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.CategoryId = this._Categoryid;
        this._ObjCompletedProj.Mode = 'Todo';
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            // console.log("Data---->", data);
            this.CategoryList = JSON.parse(data[0]['CategoryList']);
            this._TodoList = JSON.parse(data[0]['JsonData_Json']);
            this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
            this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
            this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
        });
    }
    LoadDocument(url) {
        var myWindow = window.open(url);
        myWindow.focus();
    }
    getrunwayCount() {
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this.ProjectTypeService._GetCategoryCountforRunway(this._ObjCompletedProj).subscribe((data) => {
            this.procount = JSON.parse(data[0]['Procount']);
            this.catcount = JSON.parse(data[0]['CatCount']);
            this.status_list = JSON.parse(data[0]['statuscount']);
            this.status_list.forEach(element => {
                if (element.Status == 'Accepted') {
                    this.acceptCount = element.SCount;
                }
                if (element.Status == 'Pending') {
                    this.pendingCount = element.SCount;
                }
                if (element.Status == 'Rejected') {
                    this.rejectCount = element.SCount;
                }
            });
            console.log(this.acceptCount, this.pendingCount, this.rejectCount, this.procount, this.catcount, "count");
        });
    }
    underDev() {
        this.notifyService.showError("**Development under maintainance", "Failed!!");
    }
    GetTodoProjects() {
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.CategoryId = this.newCatid;
        this._ObjCompletedProj.Mode = 'Todo';
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            // console.log("Data---->", data);
            this.CategoryList = JSON.parse(data[0]['CategoryList']);
            this._TodoList = JSON.parse(data[0]['JsonData_Json']);
            // this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
            // this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
            this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
            // console.log(this.ActionedAssigned_Josn)
            this._TodoList = JSON.parse(data[0]['JsonData_Json']);
            this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
            this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
            if (this.ActionedSubtask_Json.length > 0 || this.ActionedAssigned_Josn.length > 0 || this._TodoList.length > 0) {
                document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
                //(<HTMLInputElement>document.getElementById("SelectedCat_" + C_id)).style.backgroundColor = "#e1e1ef";
                this._CategoryActive = true;
                this.IfNoTaskFound = "";
                this._Categoryid = data[0]["CategoryId"];
                this._CategoryName = data[0]["CategoryName"];
                this.ShowTaskList_Div = false;
                this.Label_TaskName = false;
                this.Textbox_EditTaskName = true;
                this._taskName = "";
                /// Get Tasks On Category Click  /////
                this._ObjCompletedProj.PageNumber = 1;
                this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
                this._ObjCompletedProj.CategoryId = this._Categoryid;
                this._ObjCompletedProj.Mode = 'Todo';
            }
            this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
            let _Accepted = 0;
            let _Pending = 0;
            let _Rejected = 0;
            this.ActionedAssigned_Josn.forEach(element => {
                if (element.Status == "Accepted") {
                    _Accepted = _Accepted + 1;
                }
                else if (element.Status == "Pending") {
                    _Pending = _Pending + 1;
                }
                else if (element.Status == "Rejected") {
                    _Rejected = _Rejected + 1;
                }
            });
            this.CountsAccepted = _Accepted;
            this.CountsPending = _Pending;
            this.CountsRejected = _Rejected;
        });
    }
    OnRadioClick(id) {
        this._ObjAssigntaskDTO.TypeOfTask = "Update";
        this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
        this._ObjAssigntaskDTO.AssignId = id;
        this._ObjAssigntaskDTO.CategoryId = this._Categoryid;
        this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe((data) => {
            this._TodoList = JSON.parse(data['TodoList']);
            this._CompletedList = JSON.parse(data['CompletedList']);
            let message = data['Message'];
            this._Demotext = "";
            //this.GetAssignTask();
            this.notifyService.showSuccess("", message);
            // this.closeInfo();
        });
    }
    On_Uncheck(id) {
        this._ObjAssigntaskDTO.TypeOfTask = "UnCheck";
        this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
        this._ObjAssigntaskDTO.AssignId = id;
        this._ObjAssigntaskDTO.CategoryId = this._Categoryid;
        this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe((data) => {
            this._TodoList = JSON.parse(data['TodoList']);
            this._CompletedList = JSON.parse(data['CompletedList']);
            let message = data['Message'];
            this._Demotext = "";
            //this.GetAssignTask();
            this.notifyService.showInfo("", message);
            // this.closeInfo();
        });
    }
    _Deletetask(id, name) {
        const confirmDialog = this.dialog.open(src_app_Shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
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
                this._ObjAssigntaskDTO.CategoryId = this._Categoryid;
                this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe((data) => {
                    this._TodoList = JSON.parse(data['TodoList']);
                    this._CompletedList = JSON.parse(data['CompletedList']);
                    let message = data['Message'];
                    this._Demotext = "";
                    this.notifyService.showInfo("Successfully", message);
                });
            }
            else {
                //this.notifyService.showInfo("Cancelled", "Delete");
            }
        });
    }
    // GetActionToProjectEmployeeDropdownList() {
    //   this.ProjectTypeService.SubTaskDetailsService_ToDo_Page(this.selectedProjectCode, this.Comp_No).subscribe(
    //     (data) => {
    //       this.EmployeeList = JSON.parse(data[0]['RacisEmployee_Json']);
    //       this.dropdownSettings_Employee = {
    //         singleSelection: true,
    //         idField: 'Emp_No',
    //         textField: 'Name',
    //         itemsShowLimit: 1,
    //         allowSearchFilter: true,
    //         closeDropDownOnSelection: true,
    //         searchAutofocus:true
    //       };
    //     })
    // }
    onFilterChange(event) {
        this.filterText = event;
        //console.log("---Event------>", this.filterText);
        this.GetProjectsByUserName();
    }
    //Fetching Employee For Assigning Projects
    GetAssignFormEmployeeDropdownList() {
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.Mode = 'AssignedTask';
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
            //console.log(this.EmployeeList);
            this.dropdownSettings_Employee = {
                singleSelection: true,
                idField: 'Emp_No',
                textField: 'DisplayName',
                itemsShowLimit: 3,
                allowSearchFilter: true,
                closeDropDownOnSelection: true
            };
        });
    }
    EmployeeOnSelect(obj) {
        this._SelectedEmpNo = obj['Emp_No'];
        this.selectedEmployee = this._SelectedEmpNo;
    }
    EmployeeOnDeselect(obj) {
        this._SelectedEmpNo = "";
        this.selectedEmployee = this._SelectedEmpNo;
    }
    // onEmpChange(selectedEmpNo) {
    //   this._SelectedEmpNo = selectedEmpNo;
    // }
    //---------- Insert Assign Task ----------------//
    clearFeilds() {
        this._description = "";
        this._StartDate = null;
        this._EndDate = null;
        this._SelectedEmpNo = "";
        this.selectedProjectType = null;
        this.selectedProjectCode = "";
        this.SelectedEmplList = [];
        this.selectedProjectCodelist = [];
        this._Demotext = "";
        this.Mdl_CategoryName = "";
    }
    CallOnSubmitCategory() {
        // console.log('A');
        this.OnCategoryClick(this._selectedcatid, this._selectedcatname);
        // this.GetTodoProjects();
        // setTimeout(function(){
        //   alert(this._selectedcatid);
        //   this.OnCategoryClick(this._selectedcatid, this._selectedcatname);
        // },3000);
    }
    OnSubmitCategory(Mdl_CategoryName) {
        if (this.Mdl_CategoryName != "") {
            this._ObjAssigntaskDTO.TypeOfTask = "CategoryInsert";
            this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
            this._ObjAssigntaskDTO.CategoryName = Mdl_CategoryName;
            this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe((data) => {
                //console.log(data);
                //this._TodoList = JSON.parse(data['TodoList']);
                this.GetTodoProjects();
                // this.CategoryList = JSON.parse(data['CategoryList']);
                let message = data['Message'];
                this.notifyService.showSuccess("Successfully", message);
                // this.Mdl_CategoryName = "";
            });
        }
        else {
            this.notifyService.showInfo("Category Name Required", "");
        }
        this.clearFeilds();
    }
    OnCategoryClick(C_id, C_Name) {
        // _Id = C_id;
        // _Name = C_Name;
        // debugger
        this._selectedcatname = C_Name;
        this._selectedcatid = C_id;
        this.BsService.setNewCategoryID(this._selectedcatid);
        this.BsService.setNewCategoryName(this._selectedcatname);
        //(<HTMLInputElement>document.getElementById("SelectedCat_" + C_id)).style.backgroundColor = "#e1e1ef";
        this._CategoryActive = true;
        this.IfNoTaskFound = "";
        this._Categoryid = C_id;
        this._CategoryName = C_Name;
        this.ShowTaskList_Div = false;
        this.Label_TaskName = false;
        this.Textbox_EditTaskName = true;
        this._taskName = "";
        /// Get Tasks On Category Click  /////
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.CategoryId = this._Categoryid;
        this._ObjCompletedProj.Mode = 'Todo';
        // alert(this._Categoryid);
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            //this.CategoryList = JSON.parse(data[0]['CategoryList']);
            this._TodoList = JSON.parse(data[0]['JsonData_Json']);
            this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
            this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
            this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
            let _Accepted = 0;
            let _Pending = 0;
            let _Rejected = 0;
            this.ActionedAssigned_Josn.forEach(element => {
                if (element.Status == "Accepted") {
                    _Accepted = _Accepted + 1;
                }
                else if (element.Status == "Pending") {
                    _Pending = _Pending + 1;
                }
                else if (element.Status == "Rejected") {
                    _Rejected = _Rejected + 1;
                }
            });
            this.CountsAccepted = _Accepted;
            this.CountsPending = _Pending;
            this.CountsRejected = _Rejected;
            // alert(this.CountsAccepted);
            // console.log(this.CountsAccepted);
        });
        document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    }
    GetProjectTypeList(taskName, id) {
        // debugger
        this._taskName = taskName;
        this.task_id = id;
        this.router.navigate(["UnplannedTask/ActionToAssign/"]);
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
    detailsbar() {
        document.getElementById("rightbar-overlay").style.display = "block";
    }
    ActionToProject_Click(taskName, Assignid) {
        // debugger
        this._taskName = taskName;
        this._AssignId = Assignid;
        this.router.navigate(["UnplannedTask/ActionToProject/2"]);
        this.BsService.SetNewAssignId(this._AssignId);
        this.BsService.SetNewAssignedName(this._taskName);
        document.getElementById("mysideInfobar").classList.add("kt-action-panel--on");
        document.getElementById("rightbar-overlay").style.display = "block";
        document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
        $("#mysideInfobar").scrollTop(0);
        //this.GetProjectsByUserName();
    }
    GetProjectsByUserName() {
        // this.LoadingBar.start();
        this.ObjUserDetails.PageNumber = 1;
        this.ObjUserDetails.PageSize = 30;
        this.ObjUserDetails.SearchText = this.filterText;
        this.ProjectTypeService.GetProjectsForRunwayTaskDropdown(this.ObjUserDetails).subscribe(data => {
            this._ProjectDataList = JSON.parse(data[0]['DropdownProjects_Json']);
            this.dropdownSettings_Projects = {
                singleSelection: true,
                idField: 'Project_Code',
                textField: 'Project_Name',
                itemsShowLimit: 1,
                allowSearchFilter: true,
                closeDropDownOnSelection: true,
                clearSearchFilter: true,
                searchPlaceholderText: "Search by project name",
                maxHeight: "500px",
                allowRemoteDataSearch: true,
                noDataAvailablePlaceholderText: 'Please wait..'
            };
            // console.log("Project List for Dropdown...",this._ProjectDataList);
        });
    }
    ProjectOnSelect(obj) {
        this.selectedProjectCode = obj['Project_Code'];
        this.BsService.setSelectedProjectCodeFromRunwayTask(this.selectedProjectCode);
        this.ProjectTypeService.SubTaskDetailsService(this.selectedProjectCode).subscribe((data) => {
            let ProjectInfo_List;
            ProjectInfo_List = JSON.parse(data[0]['ProjectInfo']);
            this.RACI_Autho = ProjectInfo_List[0]['Authority'];
            this.RACI_Coor = ProjectInfo_List[0]['Coor'];
            this.RACI_Informer = ProjectInfo_List[0]['Informer'];
            this.RACI_Resp = ProjectInfo_List[0]['Responsible'];
            this.RACI_Supp = ProjectInfo_List[0]['Support'];
            this.RACI_Owner = ProjectInfo_List[0]['OwnerEmpNo'];
            this.Comp_No = ProjectInfo_List[0]['Emp_Comp_No'];
            this.ProjectType_DB = ProjectInfo_List[0]['Project_Block'];
            this.BsService.setProjectAuthoity(this.RACI_Autho);
        });
    }
    ProjectOnDeselect(obj) {
        this.selectedProjectCode = "";
    }
    OnSubmit() {
        // console.log("--------->",this._StartDate.getTime());
        if (this.Subproj_Code != undefined || this._StartDate != null || this._EndDate != null) {
            this.ObjSubTaskDTO.AssignId = this._AssignId;
            this.ObjSubTaskDTO.MasterCode = this.selectedProjectCode;
            this.ObjSubTaskDTO.SubTask_ProjectCode = this.Subproj_Code;
            this.ObjSubTaskDTO.SubProject_Name = this._taskName;
            this.ObjSubTaskDTO.SubtaskDescription = this._description;
            this.ObjSubTaskDTO.ProjectBlock = this.ProjectType_DB;
            //this._StartDate = (moment(this._StartDate)).format('DD-MMM-YYYY HH:mm:ss')
            this.ObjSubTaskDTO.StartDate = this._StartDate;
            // this._EndDate = (moment(this._StartDate)).format('DD-MMM-YYYY HH:mm:ss')
            this.ObjSubTaskDTO.SubProject_DeadLine = this._EndDate;
            var Difference_In_Time = this._StartDate.getTime() - this._EndDate.getTime();
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            this.ObjSubTaskDTO.Duration = (-Difference_In_Days);
            this.ObjSubTaskDTO.Duration = this.ObjSubTaskDTO.Duration * 8 / 1;
            this.ObjSubTaskDTO.Emp_No = this.CurrentUser_ID;
            this.ObjSubTaskDTO.Comp_No = this.Comp_No;
            this.ObjSubTaskDTO.Team_Res = this.RACI_Resp;
            ;
            this.ObjSubTaskDTO.Team_Autho = this.RACI_Autho;
            this.ObjSubTaskDTO.Team_Coor = this.RACI_Coor;
            this.ObjSubTaskDTO.Team_Informer = this.RACI_Informer;
            this.ObjSubTaskDTO.Team_Support = this.RACI_Supp;
            this.ObjSubTaskDTO.Project_Owner = this.CurrentUser_ID;
            this.ObjSubTaskDTO.AssignTo = this._SelectedEmpNo;
            this.ObjSubTaskDTO.Remarks = this._remarks;
            this.ObjSubTaskDTO.Attachments = this._inputAttachments;
            this.ProjectTypeService._InsertNewSubtask(this.ObjSubTaskDTO).subscribe(data => {
                this.notifyService.showInfo("Created Successfully", '');
                this.closeInfo();
                this.clearFeilds();
                this.GetAssigned_SubtaskProjects();
            });
        }
        else {
            this.notifyService.showInfo("", 'Star(*) mark feilds required ');
        }
    }
    Clear_Feilds() {
        this._taskName = "";
        this._Description = "";
        this._description = "";
        this._StartDate = null;
        this._EndDate = null;
        this._remarks = "";
    }
    OnEditNameClick(name, id) {
        this._taskName = name;
        this._AssignId = id;
        document.getElementById("spanTextbox_" + id).style.display = "block";
        document.getElementById("spnLabel_" + id).style.display = "none";
        document.getElementById("div_" + id).style.display = "none";
    }
    OnTask_Rename() {
        if (this._taskName != "") {
            this._ObjAssigntaskDTO.TypeOfTask = "Rename";
            this._ObjAssigntaskDTO.TaskName = this._taskName;
            this._ObjAssigntaskDTO.AssignId = this._AssignId;
            this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
            this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe((data) => {
                this.OnCategoryClick(this._Categoryid, this._CategoryName);
                let message = data['Message'];
                this.notifyService.showInfo("", message);
                document.getElementById("spanTextbox_" + this._AssignId).style.display = "none";
                document.getElementById("spnLabel_" + this._AssignId).style.display = "block";
                document.getElementById("div_" + this._AssignId).style.display = "block";
            });
        }
        else {
            this.notifyService.showInfo("Empty string cannot be save", "Please give some name.");
        }
    }
    onCancel(id) {
        document.getElementById("div_" + id).style.display = "block";
        document.getElementById("spanTextbox_" + id).style.display = "none";
        document.getElementById("spnLabel_" + id).style.display = "block";
    }
    OnCategoryEdit_Click(Cid, Cname) {
        document.getElementById("TextboxCat_" + Cid).style.display = "block";
        document.getElementById("LabelCat_" + Cid).style.display = "none";
        this.Cat_Name = Cname;
        this.hideMenuOfCategory = true;
    }
    OnCat_Cancel(Cid) {
        document.getElementById("TextboxCat_" + Cid).style.display = "none";
        document.getElementById("LabelCat_" + Cid).style.display = "block";
        this.hideMenuOfCategory = false;
    }
    OnCategoryRename(Cid) {
        if (this.Cat_Name != "") {
            this.ObjCategoryDTO.Mode = "Rename";
            this.ObjCategoryDTO.CategoryId = Cid;
            this.ObjCategoryDTO.CategoryName = this.Cat_Name;
            this.ObjCategoryDTO.CurrentUser = this.CurrentUser_ID;
            this.ProjectTypeService._CategoryRenameDelete(this.ObjCategoryDTO).subscribe((data) => {
                // console.log(data);
                let message = data['Message'];
                this.notifyService.showSuccess("", message);
                this.GetTodoProjects();
                this.OnCategoryClick(Cid, this.Cat_Name);
                this.OnCat_Cancel(Cid);
            });
        }
        else {
            this.notifyService.showInfo("Empty string cannot be save", "Please give some name.");
        }
    }
    OnDeleteCategory(Cid, Cname) {
        const confirmDialog = this.dialog.open(src_app_Shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
            data: {
                mode: 'Category_Delete',
                titleDelete: 'Delete Confirmation ',
                CategoryName: Cname
            }
        });
        confirmDialog.afterClosed().subscribe(result => {
            if (result === true) {
                this.ObjCategoryDTO.Mode = "Delete";
                this.ObjCategoryDTO.CategoryId = Cid;
                this.ObjCategoryDTO.CategoryName = Cname;
                this.ObjCategoryDTO.CurrentUser = this.CurrentUser_ID;
                this.ProjectTypeService._CategoryRenameDelete(this.ObjCategoryDTO).subscribe((data) => {
                    let message = data['Message'];
                    this.notifyService.showInfo("", message);
                    this.GetTodoProjects();
                    this.IfNoTaskFound;
                    this.ShowTaskList_Div = true;
                    this.Label_TaskName = true;
                    // this.Textbox_EditTaskName = true;
                    // this._taskName = "";
                    this.OnCat_Cancel(Cid);
                });
            }
            else {
                //this.notifyService.showInfo("Cancelled", "Delete");
            }
        });
    }
    openInfo(pcode, pName) {
        document.getElementById("mysideInfobar").classList.add("kt-quick-panel--on");
        document.getElementById("rightbar-overlay").style.display = "block";
        document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
        // this.router.navigate(["UnplannedTask/ActionToProject/"]);
        this.router.navigate(["UnplannedTask/projectinfo/", pcode]);
    }
    closeInfo() {
        this.clearFeilds();
        document.getElementById("mysideInfobar").classList.remove("kt-action-panel--on");
        document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
        document.getElementById("rightbar-overlay").style.display = "none";
        this.router.navigate(["UnplannedTask/"]);
    }
    moreDetails(ProjectCode) {
        let name = 'MoreDetails';
        var url = document.baseURI + name;
        var myurl = `${url}/${ProjectCode}`;
        var myWindow = window.open(myurl, ProjectCode);
        myWindow.focus();
    }
}
ProjectUnplannedTaskComponent.ɵfac = function ProjectUnplannedTaskComponent_Factory(t) { return new (t || ProjectUnplannedTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_7__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_13__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_8__.BsServiceService)); };
ProjectUnplannedTaskComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ProjectUnplannedTaskComponent, selectors: [["app-project-unplanned-task"]], decls: 157, vars: 40, consts: [[1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height", "side_view"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi", "kt-portlet--height-fluid"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], ["id", "tippy1", 1, "kt-portlet__head-title"], [1, "fas", "fa-registered", "mr-2", "text-primary"], [1, "count-list", "count-header"], [1, "kt-portlet__head-toolbar"], [1, "badge", "bdg-new", "kt-badge--inline", "mr-2", "py-8px", "btn-sm"], [1, "count"], [1, "badge", "bdg-new", "bdg-suc", "kt-badge--inline", "mr-2", "btn-sm", "py-8px"], ["class", "count", 4, "ngIf"], [1, "badge", "bdg-new", "bdg-war", "kt-badge--inline", "mr-2", "btn-sm", "py-8px"], [1, "badge", "bdg-new", "bdg-dan", "kt-badge--inline", "mr-2", "btn-sm", "py-8px"], ["class", "dropdown-menu-left topy-filtr d-none", "id", "", 4, "ngIf"], [1, "col-lg-3"], [1, "sidebar", "scrollbar"], [1, "side-bar-box"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "add_assigned_task1", "mt-2"], [1, "form-group", "mb-0"], [1, "input-group"], [1, "input-group-prepend", "w-100"], ["id", "basic-addon2", "primary", "true", "id", "tippy2", 1, "btn", "btn-primary", "btn-sm", "lh-25", 3, "click"], [1, "la", "la-plus", "text-white", "mr-0"], ["type", "text", "placeholder", "Add category and press enter to submit", "aria-describedby", "basic-addon2", "primary", "true", 1, "form-control", "add_assign_task_input", "brdr-gr", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "col-lg-9"], [2, "color", "lightgray"], [3, "hidden"], [1, "count-list", "p-3", "bg-white", "rounded-xl", "my-2"], [1, "count-list", "p-3", "grid", "gap-1", "grid-template-columns-7", "bg-gray-400", "rounded-xl", "my-2", "d-none"], [1, "d-flex", "align-items-start", "p-2", "shad", "rounded-xl", "overflow-hidden", "bg-white"], [1, "lead"], [1, "kt-badge", "kt-badge--primary", "kt-badge--inline", "mr-2", "count-num"], [1, "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid"], ["id", "kt_inbox", 1, "kt-inbox"], [1, "col-lg-12", "scrollbar1"], [4, "ngIf"], ["data-type", "inbox", 1, "kt-inbox__items"], ["class", "mb-2 card", 4, "ngFor", "ngForOf"], ["class", "card mb-2", 4, "ngFor", "ngForOf"], [1, "add_assigned_task-removeforcss", "mt-2", "pr-1"], ["id", "addbtn", 1, "btn", "btn-sm", "btn-primary", "font-weight-bold", "mr-2", "py-2", "px-3", "px-xxl-5", "text-white", "my-1", "float-right", "d-none"], [1, "la", "la-plus", "text-white", "mr-2"], ["id", "addtsk", 1, "input-group"], [1, "input-group-prepend"], ["id", "basic-addon1", "id", "tippy3", "primary", "true", 1, "btn", "btn-primary", "btn-sm", "lh-25", 3, "click"], ["type", "text", "aria-describedby", "basic-addon1", "primary", "true", 1, "form-control", "add_assign_task_input", "brdr-gr", 3, "ngModel", "placeholder", "ngModelChange", "keyup.enter"], ["id", "rightbar-overlay", 3, "click"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], ["id", "", 1, "dropdown-menu-left", "topy-filtr", "d-none"], ["data-toggle", "dropdown", 1, "btn", "btn-label-info", "btn-upper", "btn-sm", "btn-bold", 2, "padding", "5px 12px"], [1, "fas", "fa-ellipsis-v", "mr-0"], [1, "dropdown-menu", "dropdown-menu-right"], [3, "click"], [1, "col-md-10"], [1, "d-inline-block"], [1, "col-md-2"], [1, "col-md-12"], ["type", "text", "placeholder", "Search Filters", 1, "form-control", "kt-quick-search__input", "pl-3"], [1, "row", "scroll-drop"], [1, "count-height"], ["class", "d-flex justify-content-between", 4, "ngFor", "ngForOf"], ["data-toggle", "dropdown", 1, "btn", "btn-label-success", "btn-outline-success", "btn-upper", "btn-sm", "btn-bold", "mr-2", 3, "click"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-2", 3, "click"], [1, "d-flex", "justify-content-between"], [1, "kt-checkbox", "mb-3"], ["type", "checkbox"], [1, "count-btn"], [3, "ngClass"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap"], [1, "kt-inbox__subject", "w-100", 2, "display", "none", 3, "id"], [1, "d-flex"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange", "keydown.enter"], ["id", "button-addon4", 1, "d-flex", "ml-3"], [1, "btn", "btn-secondary", "btn", "btn-sm", "py-0", "px-2", "mr-2", 3, "click"], [1, "fas", "fa-check", "text-info"], [1, "btn", "btn-secondary", "btn", "btn-sm", "py-0", "px-2", 3, "click"], [1, "fas", "fa-times", "text-dark"], [1, "d-flex", "flex-column", "align-items-cente", "py-2", "w-90"], [3, "id", "click"], [1, "text-dark-75", "font-weight-bold", "text-hover-primary", "font-size-lg", "project-title", "mb-2"], [1, "kt-badge", "kt-badge--dark", "kt-badge--inline", "w-content"], [1, ""], [1, "kt-badge", "kt-badge--info", "kt-badge--inline", "w-content"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", "matTooltip", "More", 3, "matMenuTriggerFor", "hidden"], ["color", "primary"], ["xPosition", "after"], ["menuCat", "matMenu"], ["mat-menu-item", "", "mat", "", 3, "click"], ["color", "primary", 1, "mr-2"], [1, "mb-2", "card"], [1, "card-body", "p-2", "Replied_border_left_true_NewProject", "mr-2"], ["data-type", "inbox", 1, "d-flex", "flex-wrap", "align-items-center", "my-1"], [1, "symbol", "symbol-60", "symbol-2by3", "flex-shrink-0", "m-auto"], [1, "kt-inbox__actions"], ["type", "radio", "name", "Subtask", 1, "subtask-radio", "mx-4", 3, "disabled", "click"], [1, "d-flex", "flex-column", "flex-grow-1", "my-lg-0", "my-2", "pr-2", "w-75"], [1, "text-dark-75", "font-weight-bolder", "text-hover-primary", "font-size-lg"], [1, "kt-inbox__subject", 3, "id"], [1, "kt-inbox__subject", 2, "display", "none", 3, "id"], ["type", "text", "autofocus", "", 1, "form-control", 2, "width", "78%", "height", "32px", 3, "ngModel", "ngModelChange", "keydown.enter"], ["id", "button-addon4", 1, "d-inline-block", "ml-3"], [1, "btn", "btn-primary", "btn", "btn-sm", "mr-2", 3, "click"], [1, "btn", "btn-secondary", "btn", "btn-sm", 3, "click"], [1, "mt-2"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-dark", "kt-badge-light-bold", "kt-badge--inline", "mr-2"], ["class", "kt-inbox__label kt-badge kt-badge--unified-primary kt-badge-light-bold kt-badge--inline", 4, "ngIf"], ["class", "d-flex align-items-center py-lg-0 py-2", 3, "id", 4, "ngIf"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-primary", "kt-badge-light-bold", "kt-badge--inline"], ["color", "primary", 1, "ml-2"], [1, "d-flex", "align-items-center", "py-lg-0", "py-2", 3, "id"], ["matTooltip", "Action Re-Name", 1, "mr-2", "cursor-pointer", 3, "click"], ["matTooltip", "Delete Task", 1, "mr-2", "cursor-pointer", 3, "click"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", "matTooltip", "More", 1, "cursor-pointer", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["AssignTo", "matMenu"], [4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"], [1, "card", "mb-2"], [1, "card-body", "p-2", "Replied_border_left_true_success", "mr-2"], ["type", "radio", "checked", "", 1, "subtask-radio", "mx-4", 3, "click"], [1, "kt-inbox__subject"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-success", "kt-badge-light-bold", "kt-badge--inline"], [1, "kt-inbox__datetime"], [1, "delete-btn"], [1, "card-body", "p-2", "Replied_border_left_true_underApprovals", "mr-2"], [1, "text-dark-75", "font-weight-bolder", "text-hover-primary", "font-size-lg", "ml-1"], [1, "kt-inbox__subject", "h5"], [1, "desc", "ml-2", "mb-2"], [1, "my-2"], ["data-toggle", "tooltip", "title", "Created Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge--unified-dark", "kt-badge-light-bold", "kt-badge--inline"], ["src", "../creativeplanner/assets/icons/create2.png", "alt", "actiondate", 1, "badge-img"], ["color", "primary", 1, "ml-2", "mr-2"], ["data-toggle", "tooltip", "title", "Assigned Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge--unified-dark", "kt-badge-light-bold", "kt-badge--inline"], ["data-toggle", "tooltip", "title", "Project Type!", 1, "kt-badge", "kt-hover--primary", "kt-bg-light-primary", "kt-badge--inline", "ver-m"], [1, "fa", "fa-clone", "mr-2"], ["data-toggle", "tooltip", "title", "Action Status!", "class", "kt-inbox__label kt-badge kt-badge kt-badge-light-bold kt-badge--inline", 3, "ngClass", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Action Status!", "class", "kt-inbox__label kt-badge kt-badge kt-badge-light-bold kt-badge--inline kt-badge--unified-danger", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Start Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge", "kt-badge--unified-primary", "kt-badge-light-bold", "kt-badge--inline"], ["src", "../creativeplanner/assets/icons/strat-prim.png", "alt", "actiondate", 1, "badge-img"], ["data-toggle", "tooltip", "title", "End Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge", "kt-badge--unified-primary", "kt-badge-light-bold", "kt-badge--inline"], ["src", "../creativeplanner/assets/icons/end-prim.png", "alt", "actiondate", 1, "badge-img"], [1, "mt-1", "pl-2"], ["data-toggle", "tooltip", "title", "Attachment!", "class", "mr-3 text-nowrap mb-2 d-inline-block", 3, "click", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Remarks!", "class", "mr-3 text-nowrap mb-2 d-inline-block", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Action Status!", 1, "kt-inbox__label", "kt-badge", "kt-badge", "kt-badge-light-bold", "kt-badge--inline", 3, "ngClass"], ["data-toggle", "tooltip", "title", "Action Status!", 1, "kt-inbox__label", "kt-badge", "kt-badge", "kt-badge-light-bold", "kt-badge--inline", "kt-badge--unified-danger"], ["data-toggle", "tooltip", "title", "Attachment!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block", 3, "click"], [1, "fas", "fa-file-pdf", "text-muted", "mr-1"], ["title", "Click To Open File", 1, "text-info", "curser-pointer"], ["data-toggle", "tooltip", "title", "Remarks!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], [1, "fas", "fa-registered", "text-muted", "mr-1"], [1, "card-body", "p-2", "Replied_border_left_true_warning", "mr-2"], [1, "d-flex", "align-items-center", "justify-content-between"], ["data-toggle", "tooltip", "title", "Project Details!", "class", "curser-pointer", 3, "click", 4, "ngIf"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "More Info!", "class", "ml-3 curser-pointer", 3, "click", 4, "ngIf"], [1, "text-dark-75", "font-weight-bolder", "text-hover-primary", "font-size-lg", "ml-1", "flex-1"], [1, "kt-inbox__subject", "h5", "mybutton"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-info", "kt-badge-light-bold", "kt-badge--inline"], ["color", "success", 1, "ml-2", "mr-2"], ["data-toggle", "tooltip", "title", "Assigned Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge--unified-info", "kt-badge-light-bold", "kt-badge--inline"], ["src", "../creativeplanner/assets/icons/create1.png", "alt", "actiondate", 1, "badge-img"], ["data-toggle", "tooltip", "title", "Assigned Status!", 1, "kt-inbox__label", "kt-badge", "kt-badge", "kt-badge-light-bold", "kt-badge--inline", 3, "ngClass"], [1, "my-1"], ["data-toggle", "tooltip", "title", "Project Type!", "class", "kt-badge kt-hover--primary kt-bg-light-primary kt-badge--inline ver-m", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Project Status!", "class", "kt-inbox__label kt-badge kt-badge kt-badge-light-bold kt-badge--inline", 3, "ngClass", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Project Status!", "class", "kt-inbox__label kt-badge kt-badge kt-badge-light-bold kt-badge--inline kt-badge--unified-danger", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Start Date!", "class", "kt-inbox__label kt-badge kt-badge kt-badge--unified-primary kt-badge-light-bold kt-badge--inline", 4, "ngIf"], ["data-toggle", "tooltip", "title", "End Date!", "class", "kt-inbox__label kt-badge kt-badge kt-badge--unified-primary kt-badge-light-bold kt-badge--inline", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Remarks!", "class", "mx-3 text-nowrap mb-2 d-inline-block", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Project Details!", 1, "curser-pointer", 3, "click"], [1, "fa", "fa-info-circle", "info-icon-cir"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "More Info!", 1, "ml-3", "curser-pointer", 3, "click"], [1, "fa", "fa-chart-bar", "info-icon-cir"], ["data-toggle", "tooltip", "title", "Project Status!", 1, "kt-inbox__label", "kt-badge", "kt-badge", "kt-badge-light-bold", "kt-badge--inline", 3, "ngClass"], ["data-toggle", "tooltip", "title", "Project Status!", 1, "kt-inbox__label", "kt-badge", "kt-badge", "kt-badge-light-bold", "kt-badge--inline", "kt-badge--unified-danger"], ["title", "Click To Open File", 1, "text-info", "curser-pointer", 3, "click"], ["data-toggle", "tooltip", "title", "Remarks!", 1, "mx-3", "text-nowrap", "mb-2", "d-inline-block"]], template: function ProjectUnplannedTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Runway Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "label", 10)(13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, " Total Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "label", 10)(17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, " Total Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, ProjectUnplannedTaskComponent_span_21_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, ProjectUnplannedTaskComponent_span_22_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Accepted ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, ProjectUnplannedTaskComponent_span_25_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, ProjectUnplannedTaskComponent_span_26_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, " Pending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, ProjectUnplannedTaskComponent_span_29_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, ProjectUnplannedTaskComponent_span_30_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, " Rejected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, ProjectUnplannedTaskComponent_div_32_Template, 33, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 1)(34, "div", 17)(35, "div", 18)(36, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, ProjectUnplannedTaskComponent_li_37_Template, 38, 13, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 21)(39, "div", 22)(40, "div", 23)(41, "div", 24)(42, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_Template_button_click_42_listener() { return ctx.OnSubmitCategory(ctx.Mdl_CategoryName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](43, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectUnplannedTaskComponent_Template_input_ngModelChange_44_listener($event) { return ctx.Mdl_CategoryName = $event; })("keyup.enter", function ProjectUnplannedTaskComponent_Template_input_keyup_enter_44_listener() { return ctx.OnSubmitCategory(ctx.Mdl_CategoryName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 28)(46, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 30)(49, "div", 1)(50, "div", 2)(51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 31)(54, "div", 9)(55, "label", 10)(56, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, " Total Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "label", 10)(60, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, " Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "label", 10)(64, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, " Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "label", 10)(68, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, " Action To Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "label", 10)(72, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74, " Assigned Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "label", 12)(76, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](78, " Accepted");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "label", 14)(80, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, " Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "label", 15)(84, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86, " Rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "div", 32)(88, "label", 33)(89, "div", 34)(90, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](92, "Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "label", 33)(94, "div", 34)(95, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](97, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "label", 33)(99, "div", 34)(100, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](102, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "label", 33)(104, "div", 34)(105, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](107, "Action To Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "label", 33)(109, "div", 34)(110, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](112, "Assigned Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](113, "label", 33)(114, "div", 34)(115, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](117, "Accepted");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](118, "label", 33)(119, "div", 34)(120, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](122, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](123, "label", 33)(124, "div", 34)(125, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](127, "Rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](128, "div", 36)(129, "div", 37)(130, "div", 1)(131, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](132, ProjectUnplannedTaskComponent_h5_132_Template, 2, 0, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](133, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](134, ProjectUnplannedTaskComponent_div_134_Template, 24, 11, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](135, ProjectUnplannedTaskComponent_h5_135_Template, 2, 0, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](136, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](137, ProjectUnplannedTaskComponent_div_137_Template, 21, 6, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](138, ProjectUnplannedTaskComponent_h5_138_Template, 2, 0, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](139, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](140, ProjectUnplannedTaskComponent_div_140_Template, 57, 21, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](141, ProjectUnplannedTaskComponent_h5_141_Template, 2, 0, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](142, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](143, ProjectUnplannedTaskComponent_div_143_Template, 49, 25, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "div", 43)(145, "div", 22)(146, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](147, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](148, "Add Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](149, "div", 46)(150, "div", 47)(151, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_Template_button_click_151_listener() { return ctx.EnterSubmit(ctx._Demotext); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](152, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](153, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectUnplannedTaskComponent_Template_input_ngModelChange_153_listener($event) { return ctx._Demotext = $event; })("keyup.enter", function ProjectUnplannedTaskComponent_Template_input_keyup_enter_153_listener() { return ctx.EnterSubmit(ctx._Demotext); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](154, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_Template_div_click_154_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](155, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](156, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.catcount);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.procount);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.acceptCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.acceptCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.pendingCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.pendingCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.rejectCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.rejectCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.status_list != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.CategoryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.Mdl_CategoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.IfNoTaskFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx.ShowTaskList_Div);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx._CategoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.ActionedSubtask_Json.length + ctx.ActionedAssigned_Josn.length + ctx._CompletedList.length + ctx._TodoList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx._TodoList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx._CompletedList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.ActionedSubtask_Json.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.ActionedAssigned_Josn.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.CountsAccepted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.CountsPending);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.CountsRejected);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.ActionedSubtask_Json.length + ctx.ActionedAssigned_Josn.length + ctx._CompletedList.length + ctx._TodoList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx._TodoList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx._CompletedList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.ActionedSubtask_Json.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.ActionedAssigned_Josn.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.CountsAccepted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.CountsPending);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.CountsRejected);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx._TodoList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx._TodoList);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx._CompletedList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx._CompletedList);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.ActionedSubtask_Json.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ActionedSubtask_Json);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.ActionedAssigned_Josn.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.ActionedAssigned_Josn);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("placeholder", "Add task to @'", ctx._CategoryName, "' and press enter to submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx._Demotext);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: [".sidebar[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    \r\n    background-color: #fff;\r\n    \r\n}\r\n\r\n.scrollbar[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 138px);\r\n    overflow-y: auto;\r\n}\r\n\r\n\r\n\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 6px;\r\n}\r\n\r\n\r\n\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\r\n\r\n\r\n\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #ccc;\r\n    border-radius: 10px;\r\n}\r\n\r\n.py-8px[_ngcontent-%COMP%] {\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n}\r\n\r\n\r\n\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #ccc;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: black;\r\n    padding: 10px 16px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background-color: #e0e0e0;\r\n    color: rgb(48, 46, 46);\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\r\n    background-color: #f4f4f4;\r\n    color: rgb(48, 46, 46);\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\r\n    color: #3c3c3c;\r\n    font-weight: 500;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #484848;\r\n}\r\n\r\ndiv.content[_ngcontent-%COMP%] {\r\n    margin-left: 200px;\r\n    padding: 1px 16px;\r\n    height: 1000px;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .sidebar[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: auto;\r\n        position: relative;\r\n    }\r\n\r\n    .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        float: left;\r\n    }\r\n\r\n    div.content[_ngcontent-%COMP%] {\r\n        margin-left: 0;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        float: none;\r\n    }\r\n}\r\n\r\n\r\n\r\nh4[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n}\r\n\r\n.project-info-page[_ngcontent-%COMP%] {\r\n    letter-spacing: 0.4px;\r\n}\r\n\r\n.project-description[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #969696;\r\n    font-size: 13px;\r\n}\r\n\r\n.project-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #646464;\r\n    \r\n}\r\n\r\n.project-budget[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .project-duration[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    color: #969696;\r\n}\r\n\r\n.project-duration-bar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n.sideInfobar[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    right: 0;\r\n    background: #ffffff;\r\n    box-shadow: 0px 1px 9px -3px rgb(0 0 0 / 75%);\r\n    border-left: 1px solid #ffffff;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    overflow-y: auto;\r\n    z-index: 999;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    backface-visibility: hidden;\r\n    -webkit-backface-visibility: hidden;\r\n    \r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n    background-color: #f5f6fc;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #333;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 25px;\r\n    font-size: 20px;\r\n    margin-left: 50px;\r\n}\r\n\r\n.info-icon-cir[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #5867dd;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%] {\r\n    border-bottom: 0.07rem dashed #dedede;\r\n    padding: 6px;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%] {\r\n    border-bottom: 0.07rem dashed rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%] {\r\n    width: 270px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.side-bar-box[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    padding-left: 0px !important;\r\n}\r\n\r\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #f1f1f1;\r\n    font-weight: 400;\r\n}\r\n\r\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n    border-bottom: none\r\n}\r\n\r\n.subtask-list[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    border-bottom: 1px solid #f1f1f1;\r\n    padding: 7px 0 5px;\r\n}\r\n\r\n.subtask-list[_ngcontent-%COMP%]:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.subtask-radio[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-right: 15px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.subtask-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n}\r\n\r\n.subtask-list[_ngcontent-%COMP%]   p.subtask-list-title[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n}\r\n\r\n#accordionExample5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    margin-top: 15px;\r\n}\r\n\r\n.accordion.accordion-svg-icon[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:last-child   .card-body[_ngcontent-%COMP%] {\r\n    padding-left: 0px;\r\n}\r\n\r\n.accordion.accordion-light[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]:after {\r\n    left: 0px !important;\r\n    font-weight: 600;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.accordion.accordion-light[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\r\n    padding-left: 25px;\r\n    font-size: 16px;\r\n}\r\n\r\n.text-Rejected[_ngcontent-%COMP%] {\r\n    color: #E6747A !important;\r\n}\r\n\r\n.text-underApproval[_ngcontent-%COMP%] {\r\n    color: #98c7bf !important;\r\n}\r\n\r\n.text-CompleteRejected[_ngcontent-%COMP%] {\r\n    color: #D83C3C !important;\r\n}\r\n\r\n.text-underApp[_ngcontent-%COMP%] {\r\n    color: #702c72e7 !important;\r\n}\r\n\r\n.text-Todo[_ngcontent-%COMP%] {\r\n    color: #45F495 !important;\r\n}\r\n\r\n.text-Completed[_ngcontent-%COMP%] {\r\n    color: #41D37B !important;\r\n}\r\n\r\ninput.largerCheckbox[_ngcontent-%COMP%] {\r\n    width: 13px;\r\n    height: 13px;\r\n}\r\n\r\n.textarea[_ngcontent-%COMP%] {\r\n    height: 381px;\r\n}\r\n\r\n.kt-checkbox[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    margin-bottom: inherit;\r\n}\r\n\r\n.assigned_task[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    padding: 10px;\r\n    box-shadow: 0 0 5px #ccc;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.assigned_task[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n    font-weight: 500;\r\n}\r\n\r\n.assigned_task[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .add_assigned_task[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    margin-right: 8px;\r\n    color: #646c9a;\r\n}\r\n\r\n\r\n\r\n.add_assign_task_input[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    border-color: #fff;\r\n    padding: 0.65rem 0.5rem;\r\n}\r\n\r\n.input-group-shdw[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 10px #b3bcff;\r\n}\r\n\r\n.add_assigned_task[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 8px;\r\n    right: 8px;\r\n}\r\n\r\n.add_assign_task_input[_ngcontent-%COMP%] {\r\n    height: calc(1.5em + 1.3rem + 8px);\r\n}\r\n\r\n.add_assigned_task[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   span.input-group-text[_ngcontent-%COMP%] {\r\n    padding-left: 2px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.add_assigned_task[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n    margin-right: 0px;\r\n}\r\n\r\n.curser-pointer[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    padding-left: 0px;\r\n}\r\n\r\n.scrollbar[_ngcontent-%COMP%]   .assigned_task[_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.project-active[_ngcontent-%COMP%] {\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n.kt-widget12[_ngcontent-%COMP%]   .kt-widget12__content[_ngcontent-%COMP%]   .kt-widget12__item[_ngcontent-%COMP%] {\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.list-icon-color[_ngcontent-%COMP%] {\r\n    color: #969696\r\n}\r\n\r\n.loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\r\n    background: #0dc5c1;\r\n    animation: load1 1s infinite ease-in-out;\r\n    width: 1em;\r\n    height: 4em;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%] {\r\n    color: #0dc5c1;\r\n    text-indent: -9999em;\r\n    margin: 88px auto;\r\n    position: relative;\r\n    font-size: 11px;\r\n    transform: translateZ(0);\r\n    animation-delay: -0.16s;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    top: 0;\r\n    content: '';\r\n}\r\n\r\n.loader[_ngcontent-%COMP%]:before {\r\n    left: -1.5em;\r\n    animation-delay: -0.32s;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%]:after {\r\n    left: 1.5em;\r\n}\r\n\r\n@keyframes load1 {\r\n\r\n    0%,\r\n    80%,\r\n    100% {\r\n        box-shadow: 0 0;\r\n        height: 4em;\r\n    }\r\n\r\n    40% {\r\n        box-shadow: 0 -2em;\r\n        height: 5em;\r\n    }\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 200px;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\r\n    border-radius: 2px;\r\n}\r\n\r\n\r\n\r\n.shareddetails.dropdown-menu[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    height: auto;\r\n    max-height: 400px;\r\n    padding: 10px;\r\n    top: 38px !important;\r\n    left: auto !important;\r\n    right: 0px !important;\r\n    overflow-y: auto;\r\n}\r\n\r\n\r\n\r\n.shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n\r\n\r\n\r\n.shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\r\n\r\n\r\n\r\n.shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #ccc;\r\n}\r\n\r\n\r\n\r\n.shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n}\r\n\r\n.ngx-pagination[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n}\r\n\r\n#backBtn[_ngcontent-%COMP%]:hover {\r\n    background-color: #0073e6;\r\n    color: white;\r\n}\r\n\r\n#Mdl_closebtn[_ngcontent-%COMP%]:hover {\r\n    background-color: #dc3545;\r\n    color: white\r\n}\r\n\r\n.text-warning-1[_ngcontent-%COMP%] {\r\n    background-color: #ffe0a7;\r\n    color: #FFA800;\r\n    width: auto;\r\n    padding: 4px 8px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.text-danger-1[_ngcontent-%COMP%] {\r\n    color: #F64E60;\r\n    background-color: #FFE2E5;\r\n    width: auto;\r\n    padding: 4px 8px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%], .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-up[_ngcontent-%COMP%] {\r\n    border-top: 7px solid #adadad !important;\r\n    border-left: 7px solid transparent !important;\r\n    border-right: 7px solid transparent !important\r\n}\r\n\r\n.multiselect-dropdown[_ngcontent-%COMP%] {\r\n    width: 80px !important;\r\n}\r\n\r\n.kt-todo__details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background: none;\r\n    font-size: 16px;\r\n    outline: none !important;\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 30px;\r\n    width: 30px;\r\n    background-color: #f5f6fc;\r\n    border: 1px solid #b3bcff;\r\n    color: #5867dd;\r\n    transition: all 0.3s ease;\r\n    cursor: pointer;\r\n    margin: 0 8px 0 0;\r\n    border-radius: 0;\r\n    border-radius: 4px;\r\n}\r\n\r\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon[_ngcontent-%COMP%] {\r\n    height: 18px;\r\n    width: 18px;\r\n}\r\n\r\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%] {\r\n    height: 25px;\r\n    width: 25px;\r\n}\r\n\r\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n    fill: #5867dd;\r\n}\r\n\r\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    fill: #5867dd;\r\n}\r\n\r\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    fill: #fff;\r\n}\r\n\r\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n    fill: #fff;\r\n}\r\n\r\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover, .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%] {\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: #ccc;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%]   .favourite.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    color: #ffc107;\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-color: #d6d6d6;\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.success[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    box-shadow: -5px 0px 1px #1dc9b7\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.warning[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #ffb822\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.info[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #2786fb\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.danger[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #F58A8B\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.UnderApprovals[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #BD838C\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.ForwardUnderApproval[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #E0B1D7\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.completeUnderApproval[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #98c7bf\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.newProject[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #98c7bf\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.projecthold[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #C0B5DC\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.projectComRejected[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #e6c947\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.projectholded[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #C0B5DC\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.NewprojectRejected[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #C0B5DC\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.HoldunderApp[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #a85098\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.DeadlineExtended[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #E0B1D7\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.EnactiveUnderApp[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #E0B1D7\r\n}\r\n\r\n.delayDays[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n    transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\r\n    fill: #5E5F63;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\r\n    padding: 0.2rem 20px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.mail-dropdown[_ngcontent-%COMP%] {\r\n    width: 800px;\r\n    max-width: 100%;\r\n}\r\n\r\n.mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: top;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n    min-height: 60px;\r\n}\r\n\r\n.kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\r\n    width: 150px;\r\n}\r\n\r\n.dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    border: 1px solid #ccc !important;\r\n    border-radius: 4px;\r\n}\r\n\r\n.kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\r\n    background-color: transparent !important;\r\n    color: #74788D !important;\r\n    cursor: auto;\r\n}\r\n\r\n.kt-nav__link-text[_ngcontent-%COMP%]:hover {\r\n    color: #74788D !important;\r\n}\r\n\r\n.kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\r\n    background-color: rgba(154, 100, 142, 0.2);\r\n    color: #333 !important;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\r\n    color: #333;\r\n}\r\n\r\n.kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n    background: rgb(195, 195, 195);\r\n}\r\n\r\n\r\n\r\n.kt-quick-panel2[_ngcontent-%COMP%] {\r\n    width: 650px !important;\r\n}\r\n\r\n.kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\r\n    right: -660px;\r\n    left: auto;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 6px;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #F1F1F1;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #ccc;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\r\n    background-color: #FFFFFF !important;\r\n}\r\n\r\n.chatcount[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    margin-left: -15px;\r\n    margin-top: -10px;\r\n}\r\n\r\n.kt-badge.kt-badge--dark[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n    background: #8C8D92;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n    transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\r\n    fill: #5E5F63;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\r\n    padding: 0.2rem 20px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.kt-font-ReplyRequired[_ngcontent-%COMP%] {\r\n    color: #a6c !important;\r\n}\r\n\r\n.mail-dropdown[_ngcontent-%COMP%] {\r\n    width: 800px;\r\n    max-width: 100%;\r\n}\r\n\r\n.mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: top;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n    min-height: 60px;\r\n}\r\n\r\n.kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\r\n    width: 150px;\r\n}\r\n\r\n.dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    border: 1px solid #ccc !important;\r\n    border-radius: 4px;\r\n}\r\n\r\n.kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\r\n    background-color: transparent !important;\r\n    color: #74788D !important;\r\n    cursor: auto;\r\n}\r\n\r\n.kt-nav__link-text[_ngcontent-%COMP%]:hover {\r\n    color: #74788D !important;\r\n}\r\n\r\n.kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\r\n    background-color: rgba(154, 100, 142, 0.2);\r\n    color: #333 !important;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\r\n    color: #333;\r\n}\r\n\r\n.kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n    background: rgb(195, 195, 195);\r\n}\r\n\r\n\r\n\r\n.kt-quick-panel2[_ngcontent-%COMP%] {\r\n    width: 650px !important;\r\n}\r\n\r\n.kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\r\n    right: -660px;\r\n    left: auto;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 6px;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #F1F1F1;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #ccc;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background: none;\r\n    outline: none !important;\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 35px;\r\n    width: 35px;\r\n    background-color: #FFFFFF;\r\n    transition: all 0.3s ease;\r\n    cursor: pointer;\r\n    margin: 0;\r\n    border-radius: 0;\r\n    border-radius: 4px;\r\n}\r\n\r\n.kt-badge.kt-badge--inline[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    width: auto;\r\n    padding: 0.15rem 0.75rem;\r\n    border-radius: 2px;\r\n    margin-left: 4px;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%] {\r\n    padding: 17px;\r\n    width: 243px;\r\n}\r\n\r\n\r\n\r\n.Replied_border_left_true_warning[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #ffb822;\r\n}\r\n\r\n.Replied_border_left_true_primary[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #95bed9;\r\n}\r\n\r\n.Replied_border_left_true_success[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #3CB371;\r\n}\r\n\r\n.Replied_border_left_true_Danger[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #F58A8B;\r\n}\r\n\r\n.Replied_border_left_true_hold[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #c0b5dc\r\n}\r\n\r\n.Replied_border_left_true_rejected[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #f5c293;\r\n}\r\n\r\n.Replied_border_left_true_underApprovals[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #BD838C;\r\n}\r\n\r\n.Replied_border_left_true_forwardUnderApproval[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #E0B1D7;\r\n}\r\n\r\n.Replied_border_left_true_completeUnderApproval[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #98c7bf;\r\n}\r\n\r\n.Replied_border_left_true_projectHold[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #C0B5DC;\r\n}\r\n\r\n.Replied_border_left_true_NewProject[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #3699ff;\r\n}\r\n\r\n.Replied_border_left_true_DeadlineExtended[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #E0B1D7;\r\n}\r\n\r\n.Replied_border_left_true_HoldunderApp[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #a85098;\r\n}\r\n\r\n.Replied_border_left_true_NewToDo[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #5088a8;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%] {\r\n    margin-left: -17px;\r\n}\r\n\r\n.icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-right: 15px !important;\r\n    z-index: 2;\r\n}\r\n\r\n.icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n    height: 18px;\r\n    text-align: center;\r\n    font-size: 10px;\r\n    font-weight: 700;\r\n    color: #fff;\r\n    background: #5867dd;\r\n    border: 1px solid #5867dd;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: -11px;\r\n    right: -11px;\r\n    z-index: 3;\r\n}\r\n\r\n.fa-clone[_ngcontent-%COMP%]{\r\n    padding: 4px 0px;\r\n    font-size: 13px;\r\n}\r\n\r\n.desc[_ngcontent-%COMP%]{\r\n        color: grey;\r\n        font-size: 13px;\r\n        font-weight: 400;\r\n}\r\n\r\n.remks[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%] {\r\n    margin-top: 0px !important;\r\n}\r\n\r\n.multiselect-dropdown[_ngcontent-unj-c40][_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-unj-c40][_ngcontent-%COMP%] {\r\n    width: 150px !important;\r\n}\r\n\r\n\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n    background-color: #f5f6fc;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #333;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n\r\n.info-icon-cir[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #5867dd;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%] {\r\n    border-bottom: 0.07rem dashed #dedede;\r\n    padding: 6px;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%] {\r\n    border-bottom: 0.07rem dashed rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.kt-inbox__datetime[_ngcontent-%COMP%] {\r\n    font-size: 13.5px !important;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%] {\r\n    width: 270px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.count-height[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    overflow-y: hidden;\r\n}\r\n\r\n.count-height[_ngcontent-%COMP%]:hover {\r\n    overflow-y: auto;\r\n}\r\n\r\n\r\n\r\n.count-height[_ngcontent-%COMP%]   .justify-content-between[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n\r\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 3px;\r\n}\r\n\r\n\r\n\r\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\r\n\r\n\r\n\r\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #f1f1f1;\r\n}\r\n\r\n\r\n\r\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #ccc;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:checked ~ span[_ngcontent-%COMP%] {\r\n    border-color: #0073e6;\r\n}\r\n\r\n.kt-checkbox[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:after {\r\n    border: solid #0073e6;\r\n}\r\n\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown[_ngcontent-%COMP%] {\r\n    position: static !important;\r\n}\r\n\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    width: 60%;\r\n    \r\n    top: 20px !important;\r\n    left: -22px !important;\r\n}\r\n\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    border-bottom: 15px solid #fff;\r\n    border-right: 17px solid transparent;\r\n    border-left: 17px solid transparent;\r\n    position: absolute;\r\n    top: -15px;\r\n    left: 32px;\r\n    z-index: 10;\r\n}\r\n\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    border-bottom: 17px solid #ccc;\r\n    border-right: 19px solid transparent;\r\n    border-left: 19px solid transparent;\r\n    position: absolute;\r\n    top: -17px;\r\n    left: 30px;\r\n    z-index: 8;\r\n}\r\n\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu1[_ngcontent-%COMP%]   .filter-box[_ngcontent-%COMP%] {\r\n    width: 33.3333%;\r\n    display: inline-block;\r\n}\r\n\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\r\n    width: 3%;\r\n}\r\n\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\r\n    width: 4%;\r\n}\r\n\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\r\n    width: 33%;\r\n}\r\n\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\r\n    width: 10%;\r\n}\r\n\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\r\n    width: 10%;\r\n}\r\n\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\r\n    width: 15%;\r\n}\r\n\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(7), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7) {\r\n    width: 10%;\r\n}\r\n\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(8), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8) {\r\n    width: 15%;\r\n}\r\n\r\n.kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n    \r\n    cursor: pointer;\r\n}\r\n\r\n.kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n    border: 1px solid #d6dbff;\r\n    border-radius: 5px;\r\n}\r\n\r\n.show_entries[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 3px;\r\n    background-color: #fff;\r\n}\r\n\r\n.show_entries[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n    \r\n    border: 2px solid rgba(88, 103, 221, 0.3);\r\n    color: #5867dd;\r\n    font-weight: bold;\r\n}\r\n\r\n.count-btn[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    padding: 0px 10px;\r\n    font-weight: 700;\r\n    color: rgb(88, 88, 88);\r\n    font-size: 14px;\r\n    line-height: 25px;\r\n}\r\n\r\n\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__toolbar[_ngcontent-%COMP%]   .kt-inbox__search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    height: 44px;\r\n    border: none;\r\n    background-color: #f2f3f7;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: stretch;\r\n    width: 100% !important;\r\n}\r\n\r\n.dropdown-menu-md.bg-ground[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #fff;\r\n    width: 25vw;\r\n    box-shadow: none;\r\n    border: 1px solid #d6dbff !important;\r\n    margin-top: 5px;\r\n}\r\n\r\n.dropdown-menu-md.bg-ground[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    background-color: #f5f6fc;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%]   .kt-inbox__items[_ngcontent-%COMP%]   .kt-inbox__item[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.delete-btn[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    background-color: #f2f3f7;\r\n    color: grey;\r\n    line-height: 59px;\r\n    padding: 0 20px;\r\n    transition: all 2s ease !important;\r\n}\r\n\r\n.delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    background: none;\r\n    font-size: 16px;\r\n    outline: none !important;\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    height: 30px;\r\n    width: 30px;\r\n    background-color: #f5f6fc;\r\n    border: 1px solid #b3bcff;\r\n    color: #5867dd;\r\n    transition: all 0.3s ease;\r\n    cursor: pointer;\r\n    margin: 10px 8px 0 0;\r\n    border-radius: 0;\r\n    border-radius: 4px;\r\n    padding: 5px;\r\n    text-align: center;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n\r\n\r\n.btn-secondary.theme-btn[_ngcontent-%COMP%] {\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n}\r\n\r\n.btn.btn-label-primary[_ngcontent-%COMP%] {\r\n    border: 1px solid #b3bcff;\r\n}\r\n\r\n.delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n}\r\n\r\n.kt-inbox__item[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.modal-body.min-scroll[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    max-height: 300px;\r\n    overflow-y: hidden;\r\n}\r\n\r\n.modal-body.min-scroll[_ngcontent-%COMP%]:hover {\r\n    overflow-y: scroll;\r\n}\r\n\r\n.modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n\r\n.modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\r\n\r\n.modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #5867dd;\r\n    border-radius: 8px;\r\n}\r\n\r\n.modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #b3bcff;\r\n}\r\n\r\n.kt-inbox__details[_ngcontent-%COMP%] {\r\n    margin-top: 0px !important;\r\n}\r\n\r\n.font-16[_ngcontent-%COMP%] {\r\n    font-size: 16px !important;\r\n}\r\n\r\n\r\n\r\n.name-box[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-size: 9px;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    letter-spacing: 2px;\r\n    border-radius: 50%;\r\n    line-height: 30px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.names-response[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    text-align: left;\r\n}\r\n\r\n.names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\r\n    display: block;\r\n    font-size: 10px;\r\n    font-weight: 600;\r\n}\r\n\r\n.names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\r\n    font-weight: 600;\r\n}\r\n\r\n.head-btn[_ngcontent-%COMP%] {\r\n    background-color: rgba(88, 103, 221, 0.1);\r\n    padding: 3px 10px 3px 5px;\r\n    border-radius: 2rem;\r\n    border: 1px solid #b3bcff;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n}\r\n\r\n.head-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #5867dd;\r\n    color: #fff;\r\n    line-height: 25px;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    margin-right: 3px;\r\n}\r\n\r\n.devider[_ngcontent-%COMP%] {\r\n    height: 1px;\r\n    width: 100%;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n.pricevalues[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n    padding-bottom: 10px;\r\n    border-right: 1px solid #f1f1f1;\r\n    border-bottom: 1px solid #f1f1f1;\r\n}\r\n\r\n.top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(1), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(2) {\r\n    border-top: 1px solid #f1f1f1;\r\n}\r\n\r\n.top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(3), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\r\n    border-bottom: none\r\n}\r\n\r\n.pricevalues[_ngcontent-%COMP%]:nth-child(2), .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\r\n    border-right: none;\r\n}\r\n\r\n.dms-links[_ngcontent-%COMP%] {\r\n    list-style-type: disc;\r\n}\r\n\r\n.dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-decoration: underline;\r\n    font-weight: 600;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.py-10px[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .pro-bar[_ngcontent-%COMP%] {\r\n    background: hsl(0, 0%, 97%);\r\n    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;\r\n    height: 4px;\r\n    margin-bottom: 12px;\r\n    margin-top: 30px;\r\n    position: relative;\r\n    text-align: left;\r\n}\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress_bar_title[_ngcontent-%COMP%] {\r\n    color: hsl(218, 4%, 50%);\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    position: relative;\r\n    top: -28px;\r\n    z-index: 1;\r\n}\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress_number[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%] {\r\n    background-color: hsl(0, 0%, 88%);\r\n    display: block;\r\n    width: 0;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transition: width 1s linear 0s;\r\n}\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    background-color: hsl(0, 0%, 100%);\r\n    border-radius: 50%;\r\n    width: 4px;\r\n    height: 4px;\r\n    position: absolute;\r\n    right: 1px;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    width: 14px;\r\n    height: 14px;\r\n    background-color: inherit;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    right: -4px;\r\n    top: -5px;\r\n}\r\n\r\n.bg-today[_ngcontent-%COMP%] {\r\n    background-color: #342bf0 !important;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #333;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 25px;\r\n    font-size: 20px;\r\n    margin-left: 50px;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .dropdown-menu-md.bg-ground[_ngcontent-%COMP%] {\r\n        width: 80vw;\r\n    }\r\n}\r\n\r\n.mat-icon.mat-primary[_ngcontent-%COMP%] {\r\n    color: #3699ff;\r\n}\r\n\r\n.scrollbar1[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 237px);\r\n    overflow: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n.brdr-gr[_ngcontent-%COMP%] {\r\n    border: 1px solid #dce1f5;\r\n}\r\n\r\n  .dropdown-list {\r\n    overflow: hidden;\r\n}\r\n\r\n.text-hover-primary[_ngcontent-%COMP%], .text-hover-primary[_ngcontent-%COMP%]:hover, a.text-hover-primary[_ngcontent-%COMP%], a.text-hover-primary[_ngcontent-%COMP%]:hover {\r\n    transition: color .15s ease, background-color .15s ease, border-color .15s ease, box-shadow .15s ease;\r\n}\r\n\r\n.text-hover-primary[_ngcontent-%COMP%]:hover, .text-hover-primary[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], a.text-hover-primary[_ngcontent-%COMP%]:hover, a.text-hover-primary[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    color: #3699ff !important;\r\n}\r\n\r\n.font-bolder[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.lh-25[_ngcontent-%COMP%] {\r\n    line-height: 2.5;\r\n}\r\n\r\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    transform: scale(0.95);\r\n    transition: transform .2s !important;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] {\r\n    transition: transform .2s !important;\r\n}\r\n\r\n.w-content[_ngcontent-%COMP%] {\r\n    width: -moz-fit-content !important;\r\n    width: fit-content !important;\r\n}\r\n\r\ninput.form-control.add_assign_task_input[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    font-weight: bold;\r\n}\r\n\r\n.b-r-20[_ngcontent-%COMP%] {\r\n    border-radius: 20px !important;\r\n    padding: 4px 6px !important;\r\n}\r\n\r\n.w-90[_ngcontent-%COMP%] {\r\n    width: 90% !important;\r\n}\r\n\r\n.offcanvas[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    box-shadow: 0px 1px 9px -3px rgb(0 0 0 / 25%);\r\n}\r\n\r\nmat-icon[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n\r\n.cursor-pointer[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.input-group-text[_ngcontent-%COMP%] > .mat-icon-button[_ngcontent-%COMP%] {\r\n    line-height: 35px !important;\r\n}\r\n\r\n.badge-img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    padding: 2px 0px;\r\n    margin-right: 4px;\r\n}\r\n\r\n.fa-code-branch[_ngcontent-%COMP%] {\r\n    transform: rotate(180deg) scaleX(-1);\r\n    vertical-align: middle;\r\n}\r\n\r\n.overlay-card[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: transparent;\r\n    z-index: 2;\r\n    cursor: pointer;\r\n}\r\n\r\n.kt-badge.kt-badge--unified-warning1[_ngcontent-%COMP%] {\r\n    color: #F3AA0F;\r\n    background: rgb(255 184 34 / 25%);\r\n}\r\n\r\n.bdg-new[_ngcontent-%COMP%] {\r\n    background-color: rgb(123 104 238 / 15%);\r\n    color: #7b68ee;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n}\r\n\r\nspan.count[_ngcontent-%COMP%] {\r\n    background: #9886eb;\r\n    padding: 0px 4px;\r\n    color: #ffffff;\r\n    cursor: auto;\r\n    border-radius: 3px;\r\n}\r\n\r\n.bdg-suc[_ngcontent-%COMP%]{\r\n    background-color: rgb(104 238 198 / 15%);\r\n    color: #1dc9b7;\r\n}\r\n\r\n.bdg-suc[_ngcontent-%COMP%]   span.count[_ngcontent-%COMP%] {\r\n    background: #1dc9b7;\r\n}\r\n\r\n.bdg-war[_ngcontent-%COMP%]{\r\n    background-color: rgb(255 154 54 / 21%);\r\n    color: #dd9600;\r\n}\r\n\r\n.bdg-war[_ngcontent-%COMP%]   span.count[_ngcontent-%COMP%] {\r\n    background: #ffb822;\r\n}\r\n\r\n.bdg-dan[_ngcontent-%COMP%]{\r\n    background-color: rgb(238 104 104 / 15%);\r\n    color: #dc3545;\r\n}\r\n\r\n.bdg-dan[_ngcontent-%COMP%]   span.count[_ngcontent-%COMP%] {\r\n    background: #dc3545;\r\n}\r\n\r\n.count-list.count-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.topy-filtr[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    width: 400px;\r\n    top: 10px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtdW5wbGFubmVkLXRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCOztBQUdBLFVBQVU7O0FBRVY7SUFDSSxVQUFVO0FBQ2Q7O0FBR0EsVUFBVTs7QUFFVjtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFHQSxXQUFXOztBQUVYO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBQ0Esb0JBQW9COztBQUVwQjtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztJQUNmO0FBQ0o7O0FBR0EsZ0NBQWdDOztBQUVoQztJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7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QUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUNBO0lBQ0ksY0FBYztJQUNkLGlDQUFpQztBQUNyQzs7QUFDQTtJQUNJLHdDQUF3QztJQUN4QyxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMsY0FBYztBQUNsQjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLHVDQUF1QztJQUN2QyxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hDLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixvQkFBb0I7QUFDeEIiLCJmaWxlIjoicHJvamVjdC11bnBsYW5uZWQtdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC8qIHdpZHRoOiAzMDBweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcbn1cclxuXHJcbi5zY3JvbGxiYXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTM4cHgpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuXHJcbi8qIHdpZHRoICovXHJcblxyXG4uc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNnB4O1xyXG59XHJcblxyXG5cclxuLyogVHJhY2sgKi9cclxuXHJcbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcblxyXG4vKiBIYW5kbGUgKi9cclxuXHJcbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucHktOHB4IHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG5cclxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG5cclxuLnNpZGViYXIgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNpZGViYXIgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgIGNvbG9yOiByZ2IoNDgsIDQ2LCA0Nik7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICBjb2xvcjogcmdiKDQ4LCA0NiwgNDYpO1xyXG59XHJcblxyXG4uc2lkZWJhciAucHJvamVjdC10aXRsZSB7XHJcbiAgICBjb2xvcjogIzNjM2MzYztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5kLWZsZXggcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzQ4NDg0ODtcclxufVxyXG5cclxuZGl2LmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMXB4IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDEwMDBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlYmFyIGEge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIC5zaWRlYmFyIGEge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIE1vcmUgRGV0YWlscyBDb21wb25lbnRzIENTUyAqL1xyXG5cclxuaDQge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5oNSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWluZm8tcGFnZSB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIC5kLWZsZXggc3BhbiB7XHJcbiAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnByb2plY3QtZGVzY3JpcHRpb24gcCB7XHJcbiAgICBjb2xvcjogIzY0NjQ2NDtcclxuICAgIC8qIGZvbnQtc2l6ZTogMTRweDsgKi9cclxufVxyXG5cclxuLnByb2plY3QtYnVkZ2V0IGg2LFxyXG4ucHJvamVjdC1kdXJhdGlvbiBoNiB7XHJcbiAgICBjb2xvcjogIzk2OTY5NjtcclxufVxyXG5cclxuLnByb2plY3QtZHVyYXRpb24tYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLyogPT09IFNpZGViYXIgPT09ICovXHJcblxyXG4uc2lkZUluZm9iYXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA5cHggLTNweCByZ2IoMCAwIDAgLyA3NSUpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC8qIHBhZGRpbmctdG9wOiA2MHB4OyAqL1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmt0LXBvcnRsZXRfX2hlYWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5jbG9zZWJ0biB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWljb24tY2lyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjNTg2N2RkO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgI2RlZGVkZTtcclxuICAgIHBhZGRpbmc6IDZweDtcclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtLmRhcmsge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG5cclxuLyogLmt0LWluYm94X19kYXRldGltZXtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxuXHJcbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbSAua3Qtd2lkZ2V0MV9faW5mbyAua3Qtd2lkZ2V0MV9fdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC50aXRsZS1zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uc2lkZS1iYXItYm94IHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaWRlLWJhci1ib3ggbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uc2lkZS1iYXItYm94IGxpOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZVxyXG59XHJcblxyXG4uc3VidGFzay1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgIHBhZGRpbmc6IDdweCAwIDVweDtcclxufVxyXG5cclxuLnN1YnRhc2stbGlzdDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5zdWJ0YXNrLXJhZGlvIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uc3VidGFzay1saXN0IHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnN1YnRhc2stbGlzdCBwLnN1YnRhc2stbGlzdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4jYWNjb3JkaW9uRXhhbXBsZTUgLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLmFjY29yZGlvbi1zdmctaWNvbiAuY2FyZDpsYXN0LWNoaWxkIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24uYWNjb3JkaW9uLWxpZ2h0IC5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZTphZnRlciB7XHJcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLmFjY29yZGlvbi5hY2NvcmRpb24tbGlnaHQgLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRleHQtUmVqZWN0ZWQge1xyXG4gICAgY29sb3I6ICNFNjc0N0EgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtdW5kZXJBcHByb3ZhbCB7XHJcbiAgICBjb2xvcjogIzk4YzdiZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1Db21wbGV0ZVJlamVjdGVkIHtcclxuICAgIGNvbG9yOiAjRDgzQzNDICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXVuZGVyQXBwIHtcclxuICAgIGNvbG9yOiAjNzAyYzcyZTcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtVG9kbyB7XHJcbiAgICBjb2xvcjogIzQ1RjQ5NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1Db21wbGV0ZWQge1xyXG4gICAgY29sb3I6ICM0MUQzN0IgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXQubGFyZ2VyQ2hlY2tib3gge1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbn1cclxuXHJcbi50ZXh0YXJlYSB7XHJcbiAgICBoZWlnaHQ6IDM4MXB4O1xyXG59XHJcblxyXG4ua3QtY2hlY2tib3gge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogaW5oZXJpdDtcclxufVxyXG5cclxuLmFzc2lnbmVkX3Rhc2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNjY2M7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYXNzaWduZWRfdGFzayBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5hc3NpZ25lZF90YXNrIGksXHJcbi5hZGRfYXNzaWduZWRfdGFzayBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGNvbG9yOiAjNjQ2YzlhO1xyXG59XHJcblxyXG5cclxuLyogLmlucHV0LWdyb3VwLXRleHQsICovXHJcblxyXG4uYWRkX2Fzc2lnbl90YXNrX2lucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwLjY1cmVtIDAuNXJlbTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXNoZHcge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2IzYmNmZjtcclxufVxyXG5cclxuLmFkZF9hc3NpZ25lZF90YXNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmFkZF9hc3NpZ25fdGFza19pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAxLjNyZW0gKyA4cHgpO1xyXG59XHJcblxyXG4uYWRkX2Fzc2lnbmVkX3Rhc2sgLmlucHV0LWdyb3VwLWFwcGVuZCBzcGFuLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5hZGRfYXNzaWduZWRfdGFzayAuaW5wdXQtZ3JvdXAtYXBwZW5kIC5pbnB1dC1ncm91cC10ZXh0IGkge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uY3Vyc2VyLXBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnNjcm9sbGJhciAuYXNzaWduZWRfdGFzazpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4ua3Qtd2lkZ2V0MTIgLmt0LXdpZGdldDEyX19jb250ZW50IC5rdC13aWRnZXQxMl9faXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG5cclxuLyogVGVzdGluZyAqL1xyXG5cclxuXHJcbi8qICNsb2FkaW5neyBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gIGxlZnQ6IDUwJTsgXHJcbiAgdG9wOiA1MCU7IFxyXG4gIHotaW5kZXg6IDE7IFxyXG4gIHdpZHRoOiAxNTBweDsgXHJcbiAgaGVpZ2h0OiAxNTBweDsgXHJcbiAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7IFxyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyBcclxuICBib3JkZXItcmFkaXVzOiA1MCU7IFxyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjsgXHJcbiAgd2lkdGg6IDEyMHB4OyBcclxuICBoZWlnaHQ6IDEyMHB4OyBcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyBcclxuICB9IFxyXG4gICAgXHJcbiAgQGtleWZyYW1lcyBzcGluIHsgXHJcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9IFxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gXHJcbiAgfSAqL1xyXG5cclxuLmxpc3QtaWNvbi1jb2xvciB7XHJcbiAgICBjb2xvcjogIzk2OTY5NlxyXG59XHJcblxyXG4ubG9hZGVyLFxyXG4ubG9hZGVyOmJlZm9yZSxcclxuLmxvYWRlcjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGRjNWMxO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQxIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkMSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgIHdpZHRoOiAxZW07XHJcbiAgICBoZWlnaHQ6IDRlbTtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgICBjb2xvcjogIzBkYzVjMTtcclxuICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xyXG4gICAgbWFyZ2luOiA4OHB4IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbn1cclxuXHJcbi5sb2FkZXI6YmVmb3JlLFxyXG4ubG9hZGVyOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG59XHJcblxyXG4ubG9hZGVyOmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAtMS41ZW07XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XHJcbn1cclxuXHJcbi5sb2FkZXI6YWZ0ZXIge1xyXG4gICAgbGVmdDogMS41ZW07XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkMSB7XHJcblxyXG4gICAgMCUsXHJcbiAgICA4MCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDA7XHJcbiAgICAgICAgaGVpZ2h0OiA0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgNDAlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIC0yZW07XHJcbiAgICAgICAgaGVpZ2h0OiA1ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZDEge1xyXG5cclxuICAgIDAlLFxyXG4gICAgODAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwO1xyXG4gICAgICAgIGhlaWdodDogNGVtO1xyXG4gICAgfVxyXG5cclxuICAgIDQwJSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMmVtO1xyXG4gICAgICAgIGhlaWdodDogNWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4ubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG5cclxuLyogXHJcbiAgdGFibGUsIHRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAxNXB4O1xyXG4gIH0gKi9cclxuXHJcbi5zaGFyZWRkZXRhaWxzLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdG9wOiAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLyogd2lkdGggKi9cclxuXHJcbi5zaGFyZWRkZXRhaWxzLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcblxyXG4vKiBUcmFjayAqL1xyXG5cclxuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG5cclxuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG5cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG5cclxuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzU1NTtcclxufVxyXG5cclxuLm5neC1wYWdpbmF0aW9uIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuI2JhY2tCdG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNlNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI01kbF9jbG9zZWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgY29sb3I6IHdoaXRlXHJcbn1cclxuXHJcbi50ZXh0LXdhcm5pbmctMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMGE3O1xyXG4gICAgY29sb3I6ICNGRkE4MDA7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlci0xIHtcclxuICAgIGNvbG9yOiAjRjY0RTYwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTJFNTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLmRyb3Bkb3duLWRvd24sXHJcbi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5kcm9wZG93bi11cCB7XHJcbiAgICBib3JkZXItdG9wOiA3cHggc29saWQgI2FkYWRhZCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudFxyXG59XHJcblxyXG4ubXVsdGlzZWxlY3QtZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmt0LXRvZG9fX2RldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcclxuICAgIGNvbG9yOiAjNTg2N2RkO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMCA4cHggMCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24gc3ZnLmt0LXN2Zy1pY29uIHtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG59XHJcblxyXG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24ge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbi5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uIC5rdC1zdmctaWNvbiBnIFtmaWxsXSB7XHJcbiAgICBmaWxsOiAjNTg2N2RkO1xyXG59XHJcblxyXG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24gcGF0aCB7XHJcbiAgICBmaWxsOiAjNTg2N2RkO1xyXG59XHJcblxyXG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbjpob3ZlciBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24gcGF0aCxcclxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlIHN2Zy5rdC1zdmctaWNvbi5hZGQtaWNvbiBwYXRoIHtcclxuICAgIGZpbGw6ICNmZmY7XHJcbn1cclxuXHJcbi5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uOmhvdmVyIC5rdC1zdmctaWNvbiBnIFtmaWxsXSxcclxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlIC5rdC1zdmctaWNvbiBnIFtmaWxsXSB7XHJcbiAgICBmaWxsOiAjZmZmO1xyXG59XHJcblxyXG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbjpob3ZlcixcclxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUgLmZhdm91cml0ZSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSAuZmF2b3VyaXRlLmFjdGl2ZSBpLFxyXG4uY2FyZC10aXRsZSAuZmF2b3VyaXRlOmhvdmVyIGkge1xyXG4gICAgY29sb3I6ICNmZmMxMDc7XHJcbn1cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNkNmQ2ZDY7XHJcbn1cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5zdWNjZXNzIHtcclxuICAgIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzFkYzliNzsgKi9cclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDRweDsgKi9cclxuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjMWRjOWI3XHJcbn1cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci53YXJuaW5nIHtcclxuICAgIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2ZmYjgyMjsgICovXHJcbiAgICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggI2ZmYjgyMlxyXG59XHJcblxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIuaW5mbyB7XHJcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyNzg2ZmI7ICAqL1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICMyNzg2ZmJcclxufVxyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLmRhbmdlciB7XHJcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNGNThBOEI7ICAqL1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNGNThBOEJcclxufVxyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLlVuZGVyQXBwcm92YWxzIHtcclxuICAgIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0JEODM4QzsgICovXHJcbiAgICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggI0JEODM4Q1xyXG59XHJcblxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIuRm9yd2FyZFVuZGVyQXBwcm92YWwge1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3OyAqL1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNFMEIxRDdcclxufVxyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLmNvbXBsZXRlVW5kZXJBcHByb3ZhbCB7XHJcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5OGM3YmY7ICAqL1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICM5OGM3YmZcclxufVxyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLm5ld1Byb2plY3Qge1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOThjN2JmOyAgKi9cclxuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjOThjN2JmXHJcbn1cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5wcm9qZWN0aG9sZCB7XHJcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNDMEI1REM7ICAqL1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNDMEI1RENcclxufVxyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLnByb2plY3RDb21SZWplY3RlZCB7XHJcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNDMEI1REM7ICAqL1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNlNmM5NDdcclxufVxyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLnByb2plY3Rob2xkZWQge1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQzBCNURDOyAgKi9cclxuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjQzBCNURDXHJcbn1cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5OZXdwcm9qZWN0UmVqZWN0ZWQge1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQzBCNURDOyAgKi9cclxuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjQzBCNURDXHJcbn1cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5Ib2xkdW5kZXJBcHAge1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTg1MDk4OyAgKi9cclxuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjYTg1MDk4XHJcbn1cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5EZWFkbGluZUV4dGVuZGVkIHtcclxuICAgIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0UwQjFENzsgICovXHJcbiAgICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggI0UwQjFEN1xyXG59XHJcblxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIuRW5hY3RpdmVVbmRlckFwcCB7XHJcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7ICAqL1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNFMEIxRDdcclxufVxyXG5cclxuLmRlbGF5RGF5cyB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2FzaWRlIC5rdC1pbmJveF9fbmF2IC5rdC1uYXYgLmt0LW5hdl9faXRlbSAua3QtbmF2X19saW5rIGcgW2ZpbGxdIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuOTMsIDAuMzUsIDEsIDEpO1xyXG4gICAgZmlsbDogIzVFNUY2MztcclxufVxyXG5cclxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsge1xyXG4gICAgcGFkZGluZzogMC4ycmVtIDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5tYWlsLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haWwtZHJvcGRvd24gdGFibGUgdGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5rdC1xdWljay1wYW5lbCAua3QtcG9ydGxldC5rdC1wb3J0bGV0LS1oZWFkLWxnIC5rdC1wb3J0bGV0X19oZWFkIHtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5rdC1pbmJveF9faWNvbiAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1tZW51LXNtIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLXJlcGx5IHVsIGxpIGEgLmt0LW5hdl9fbGluay1pY29uIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19mb3JtIC5rdC1pbmJveF9fYm9keSAua3QtaW5ib3hfX3RvIC5rdC1pbmJveF9fZmllbGQgLmt0LWluYm94X19sYWJlbCB7XHJcbiAgICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9faW5wdXQgaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4ua3QtbmF2X19saW5rLW5vaG92ZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IGF1dG87XHJcbn1cclxuXHJcbi5rdC1uYXZfX2xpbmstdGV4dDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzc0Nzg4RCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU0LCAxMDAsIDE0MiwgMC4yKTtcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93LFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyB7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmt0LWJhZGdlLmt0LWJhZGdlLS11bmlmaWVkLWJyYW5kIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE5NSwgMTk1LCAxOTUpO1xyXG59XHJcblxyXG5cclxuLyogLmluYm94LXRleHQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn0gKi9cclxuXHJcbi5rdC1xdWljay1wYW5lbDIge1xyXG4gICAgd2lkdGg6IDY1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5rdC1xdWljay1wYW5lbC0tcmlnaHQgLmt0LXF1aWNrLXBhbmVsIHtcclxuICAgIHJpZ2h0OiAtNjYwcHg7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLyogd2lkdGggKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuXHJcbi8qIFRyYWNrICovXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNGMUYxRjE7XHJcbn1cclxuXHJcblxyXG4vKiBIYW5kbGUgKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG5cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG59XHJcblxyXG5cclxuLyogLnNvbWVjbGFzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0gKi9cclxuXHJcblxyXG4vKiA6aG9zdCguc29tZUNsYXNzKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59ICovXHJcblxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNoYXRjb3VudCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbi5rdC1iYWRnZS5rdC1iYWRnZS0tZGFyayB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGJhY2tncm91bmQ6ICM4QzhEOTI7XHJcbn1cclxuXHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2FzaWRlIC5rdC1pbmJveF9fbmF2IC5rdC1uYXYgLmt0LW5hdl9faXRlbSAua3QtbmF2X19saW5rIGcgW2ZpbGxdIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuOTMsIDAuMzUsIDEsIDEpO1xyXG4gICAgZmlsbDogIzVFNUY2MztcclxufVxyXG5cclxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsge1xyXG4gICAgcGFkZGluZzogMC4ycmVtIDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5rdC1mb250LVJlcGx5UmVxdWlyZWQge1xyXG4gICAgY29sb3I6ICNhNmMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haWwtZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFpbC1kcm9wZG93biB0YWJsZSB0ZCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmt0LXF1aWNrLXBhbmVsIC5rdC1wb3J0bGV0Lmt0LXBvcnRsZXQtLWhlYWQtbGcgLmt0LXBvcnRsZXRfX2hlYWQge1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxufVxyXG5cclxuLmt0LWluYm94X19pY29uIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLW1lbnUtc20ge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tcmVwbHkgdWwgbGkgYSAua3QtbmF2X19saW5rLWljb24ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2Zvcm0gLmt0LWluYm94X19ib2R5IC5rdC1pbmJveF9fdG8gLmt0LWluYm94X19maWVsZCAua3QtaW5ib3hfX2xhYmVsIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19mb3JtIC5rdC1pbmJveF9fYm9keSAua3QtaW5ib3hfX3RvIC5rdC1pbmJveF9fZmllbGQgLmt0LWluYm94X19pbnB1dCBpbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5rdC1uYXZfX2xpbmstbm9ob3Zlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM3NDc4OEQgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogYXV0bztcclxufVxyXG5cclxuLmt0LW5hdl9fbGluay10ZXh0OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmssXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTQsIDEwMCwgMTQyLCAwLjIpO1xyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93IHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLXVuaWZpZWQtYnJhbmQge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk1LCAxOTUsIDE5NSk7XHJcbn1cclxuXHJcblxyXG4vKiAuaW5ib3gtdGV4dCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufSAqL1xyXG5cclxuLmt0LXF1aWNrLXBhbmVsMiB7XHJcbiAgICB3aWR0aDogNjUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmt0LXF1aWNrLXBhbmVsLS1yaWdodCAua3QtcXVpY2stcGFuZWwge1xyXG4gICAgcmlnaHQ6IC02NjBweDtcclxuICAgIGxlZnQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG4vKiB3aWR0aCAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5cclxuLyogVHJhY2sgKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI0YxRjFGMTtcclxufVxyXG5cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcblxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbn1cclxuXHJcblxyXG4vKiAuc29tZWNsYXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufSAqL1xyXG5cclxuXHJcbi8qIDpob3N0KC5zb21lQ2xhc3MpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn0gKi9cclxuXHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2ljb24ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5rdC1iYWRnZS5rdC1iYWRnZS0taW5saW5lIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMC4xNXJlbSAwLjc1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG5cclxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUge1xyXG4gICAgcGFkZGluZzogMTdweDtcclxuICAgIHdpZHRoOiAyNDNweDtcclxufVxyXG5cclxuXHJcbi8qIFN0YXR1cyBDb2xvcnMgKi9cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfd2FybmluZyB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmI4MjI7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcHJpbWFyeSB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5NWJlZDk7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfc3VjY2VzcyB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMzQ0IzNzE7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfRGFuZ2VyIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0Y1OEE4QjtcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9ob2xkIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2MwYjVkY1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3JlamVjdGVkIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y1YzI5MztcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV91bmRlckFwcHJvdmFscyB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNCRDgzOEM7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfZm9yd2FyZFVuZGVyQXBwcm92YWwge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3O1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX2NvbXBsZXRlVW5kZXJBcHByb3ZhbCB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5OGM3YmY7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcHJvamVjdEhvbGQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQzBCNURDO1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX05ld1Byb2plY3Qge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMzY5OWZmO1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX0RlYWRsaW5lRXh0ZW5kZWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3O1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX0hvbGR1bmRlckFwcCB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhODUwOTg7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfTmV3VG9EbyB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM1MDg4YTg7XHJcbn1cclxuXHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2xpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xyXG59XHJcblxyXG4uaWNvbnMtZmlsdGVyIC5rdC10b2RvX19pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmljb25zLWZpbHRlciAua3QtdG9kb19faWNvbiBzcGFuIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzU4NjdkZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1ODY3ZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMXB4O1xyXG4gICAgcmlnaHQ6IC0xMXB4O1xyXG4gICAgei1pbmRleDogMztcclxufVxyXG4uZmEtY2xvbmV7XHJcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5kZXNje1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5yZW1rc3tcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbn1cclxuLyogLmljb25zLWZpbHRlciAua3QtdG9kb19faWNvbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNhMWY3ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudFxyXG59ICovXHJcblxyXG5cclxuLyogLmljb25zLWZpbHRlciAua3QtdG9kb19faWNvbjpob3ZlciBzcGFue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDEzNCwgMjUxLCAxKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnRcclxufSAqL1xyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXVsdGlzZWxlY3QtZHJvcGRvd25bX25nY29udGVudC11bmotYzQwXSAuZHJvcGRvd24tYnRuW19uZ2NvbnRlbnQtdW5qLWM0MF0ge1xyXG4gICAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKiA9PT0gU2lkZWJhciA9PT0gKi9cclxuXHJcbi5zaWRlSW5mb2JhciAua3QtcG9ydGxldF9faGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmNsb3NlYnRuIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmluZm8taWNvbi1jaXIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM1ODY3ZGQ7XHJcbn1cclxuXHJcbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjA3cmVtIGRhc2hlZCAjZGVkZWRlO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW0uZGFyayB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjA3cmVtIGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5rdC1pbmJveF9fZGF0ZXRpbWUge1xyXG4gICAgZm9udC1zaXplOiAxMy41cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtIC5rdC13aWRnZXQxX19pbmZvIC5rdC13aWRnZXQxX190aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLnRpdGxlLXNpZGViYXIge1xyXG4gICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5jb3VudC1oZWlnaHQge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvdW50LWhlaWdodDpob3ZlciB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4vKiAuY291bnQtaGVpZ2h0IC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbntcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcclxufSAqL1xyXG5cclxuLmNvdW50LWhlaWdodCAuanVzdGlmeS1jb250ZW50LWJldHdlZW4gLmt0LWNoZWNrYm94IHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuXHJcbi8qIHdpZHRoICovXHJcblxyXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogM3B4O1xyXG59XHJcblxyXG5cclxuLyogVHJhY2sgKi9cclxuXHJcbi5jb3VudC1oZWlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcblxyXG4vKiBIYW5kbGUgKi9cclxuXHJcbi5jb3VudC1oZWlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuXHJcbi5jb3VudC1oZWlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuXHJcbi5kcm9wZG93biAua3QtY2hlY2tib3g+aW5wdXQ6Y2hlY2tlZH5zcGFuIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwNzNlNjtcclxufVxyXG5cclxuLmt0LWNoZWNrYm94PnNwYW46YWZ0ZXIge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjMDA3M2U2O1xyXG59XHJcblxyXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnUge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lOyAqL1xyXG4gICAgdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAtMjJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDE3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xNXB4O1xyXG4gICAgbGVmdDogMzJweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmlnaHQ6IDE5cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMTlweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTE3cHg7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgei1pbmRleDogODtcclxufVxyXG5cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudTEgLmZpbHRlci1ib3gge1xyXG4gICAgd2lkdGg6IDMzLjMzMzMlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCgxKSxcclxuI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoMSkge1xyXG4gICAgd2lkdGg6IDMlO1xyXG59XHJcblxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCgyKSxcclxuI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgd2lkdGg6IDQlO1xyXG59XHJcblxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCgzKSxcclxuI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoMykge1xyXG4gICAgd2lkdGg6IDMzJTtcclxufVxyXG5cclxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNCksXHJcbiNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDQpIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDUpLFxyXG4jcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg1KSB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg2KSxcclxuI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoNikge1xyXG4gICAgd2lkdGg6IDE1JTtcclxufVxyXG5cclxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNyksXHJcbiNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDcpIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDgpLFxyXG4jcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg4KSB7XHJcbiAgICB3aWR0aDogMTUlO1xyXG59XHJcblxyXG4ua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHQsXHJcbi5rdC1xdWljay1zZWFyY2ggLmt0LXF1aWNrLXNlYXJjaF9fZm9ybSAuaW5wdXQtZ3JvdXAtYXBwZW5kIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZmY7ICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5rdC1xdWljay1zZWFyY2ggLmt0LXF1aWNrLXNlYXJjaF9fZm9ybSAuaW5wdXQtZ3JvdXAge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZGJmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnNob3dfZW50cmllcyBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNob3dfZW50cmllcyBzZWxlY3Qge1xyXG4gICAgLyogd2lkdGg6IDEwMHB4OyAqL1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg4OCwgMTAzLCAyMjEsIDAuMyk7XHJcbiAgICBjb2xvcjogIzU4NjdkZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY291bnQtYnRuIHtcclxuICAgIC8qIGhlaWdodDogMjVweDsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7ICovXHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogcmdiKDg4LCA4OCwgODgpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcblxyXG4vKiBTZWFyY2ggUHJvamVjdHMgKi9cclxuXHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX3Rvb2xiYXIgLmt0LWluYm94X19zZWFyY2ggLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNztcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZCxcclxuLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kLXNob3J0IHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlMmU5ZmY7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDI1dnc7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZGJmZiAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQgLmZvcm0tY29udHJvbCxcclxuLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kLXNob3J0IC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcclxufVxyXG5cclxuXHJcbi8qIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uLmFjdGl2ZSAgKi9cclxuXHJcblxyXG4vKiAudmFsaW5vb3J7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi52YWxpbm9vcjo6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwcHg7XHJcbiAgdG9wOiAwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSAqL1xyXG5cclxuLmt0LWluYm94IC5rdC1pbmJveF9fbGlzdCAua3QtaW5ib3hfX2l0ZW1zIC5rdC1pbmJveF9faXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kZWxldGUtYnRuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBsaW5lLWhlaWdodDogNTlweDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kZWxldGUtYnRuIGkge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiY2ZmO1xyXG4gICAgY29sb3I6ICM1ODY3ZGQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDhweCAwIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuXHJcbi8qIC5kZWxldGUtYnRuIGl7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjc7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlICFpbXBvcnRhbnQ7XHJcbn0qL1xyXG5cclxuLmJ0bi1zZWNvbmRhcnkudGhlbWUtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJ0bi5idG4tbGFiZWwtcHJpbWFyeSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiY2ZmO1xyXG59XHJcblxyXG4uZGVsZXRlLWJ0biBpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmt0LWluYm94X19pdGVtOmhvdmVyIC5kZWxldGUtYnRuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keS5taW4tc2Nyb2xsIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keS5taW4tc2Nyb2xsOmhvdmVyIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkubWluLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkubWluLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkubWluLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzU4NjdkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkubWluLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2IzYmNmZjtcclxufVxyXG5cclxuLmt0LWluYm94X19kZXRhaWxzIHtcclxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9udC0xNiB7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qIE5ldyBEZXNpZ24gT0YgU2lkZSBCYXIgKi9cclxuXHJcbi5uYW1lLWJveCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ubmFtZXMtcmVzcG9uc2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLm5hbWVzLXJlc3BvbnNlIHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubmFtZXMtcmVzcG9uc2Ugc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5oZWFkLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg4LCAxMDMsIDIyMSwgMC4xKTtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4IDNweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5oZWFkLWJ0biBpIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzU4NjdkZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG5cclxuLmRldmlkZXIge1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5wcmljZXZhbHVlcyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcblxyXG4udG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDEpLFxyXG4udG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDIpIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcblxyXG4udG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDMpLFxyXG4udG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDQpIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmVcclxufVxyXG5cclxuLnByaWNldmFsdWVzOm50aC1jaGlsZCgyKSxcclxuLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi5kbXMtbGlua3Mge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xyXG59XHJcblxyXG4uZG1zLWxpbmtzIGxpIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5weS0xMHB4IHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBQcm9ncmVzcyBCYXIgKi9cclxuXHJcbi5wcm9ncmVzc19iYXIgLnByby1iYXIge1xyXG4gICAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCA5NyUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IGhzbGEoMCwgMCUsIDAlLCAwLjEpIGluc2V0O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzX2Jhcl90aXRsZSB7XHJcbiAgICBjb2xvcjogaHNsKDIxOCwgNCUsIDUwJSk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMjhweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzX251bWJlciB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzLWJhci1pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg4JSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDFzIGxpbmVhciAwcztcclxufVxyXG5cclxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3MtYmFyLWlubmVyOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtNHB4O1xyXG4gICAgdG9wOiAtNXB4O1xyXG59XHJcblxyXG4uYmctdG9kYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MmJmMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmNsb3NlYnRuIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuXHJcbi8qIC5wb3J0Zm9saW8tc2VhcmNoe1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvc2VhcmNoaWNvbi5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgcGFkZGluZzogMTJweCAwcHggMTJweCAwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8tc2VhcmNoOmZvY3VzIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzhhODg4ODtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn0gKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZCB7XHJcbiAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtaWNvbi5tYXQtcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogIzM2OTlmZjtcclxufVxyXG5cclxuLnNjcm9sbGJhcjEge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjM3cHgpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5icmRyLWdyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2UxZjU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZHJvcGRvd24tbGlzdCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGV4dC1ob3Zlci1wcmltYXJ5LFxyXG4udGV4dC1ob3Zlci1wcmltYXJ5OmhvdmVyLFxyXG5hLnRleHQtaG92ZXItcHJpbWFyeSxcclxuYS50ZXh0LWhvdmVyLXByaW1hcnk6aG92ZXIge1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZSwgYm94LXNoYWRvdyAuMTVzIGVhc2U7XHJcbn1cclxuXHJcbi50ZXh0LWhvdmVyLXByaW1hcnk6aG92ZXIsXHJcbi50ZXh0LWhvdmVyLXByaW1hcnk6aG92ZXIgaSxcclxuYS50ZXh0LWhvdmVyLXByaW1hcnk6aG92ZXIsXHJcbmEudGV4dC1ob3Zlci1wcmltYXJ5OmhvdmVyIGkge1xyXG4gICAgY29sb3I6ICMzNjk5ZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvbnQtYm9sZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5saC0yNSB7XHJcbiAgICBsaW5lLWhlaWdodDogMi41O1xyXG59XHJcblxyXG4uc2lkZS1iYXItYm94IGxpOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53LWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAtbW96LWZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXQuZm9ybS1jb250cm9sLmFkZF9hc3NpZ25fdGFza19pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmItci0yMCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA0cHggNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53LTkwIHtcclxuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm9mZmNhbnZhcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDlweCAtM3B4IHJnYigwIDAgMCAvIDI1JSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDlweCAtM3B4IHJnYigwIDAgMCAvIDI1JSk7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4uY3Vyc29yLXBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dD4ubWF0LWljb24tYnV0dG9uIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iYWRnZS1pbWcge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAycHggMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5mYS1jb2RlLWJyYW5jaCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHNjYWxlWCgtMSk7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5vdmVybGF5LWNhcmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmt0LWJhZGdlLmt0LWJhZGdlLS11bmlmaWVkLXdhcm5pbmcxIHtcclxuICAgIGNvbG9yOiAjRjNBQTBGO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSAxODQgMzQgLyAyNSUpO1xyXG59XHJcbi5iZGctbmV3IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjMgMTA0IDIzOCAvIDE1JSk7XHJcbiAgICBjb2xvcjogIzdiNjhlZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuc3Bhbi5jb3VudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTg4NmViO1xyXG4gICAgcGFkZGluZzogMHB4IDRweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5iZGctc3Vje1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCAyMzggMTk4IC8gMTUlKTtcclxuICAgIGNvbG9yOiAjMWRjOWI3O1xyXG59XHJcbi5iZGctc3VjIHNwYW4uY291bnQge1xyXG4gICAgYmFja2dyb3VuZDogIzFkYzliNztcclxufVxyXG4uYmRnLXdhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMTU0IDU0IC8gMjElKTtcclxuICAgIGNvbG9yOiAjZGQ5NjAwO1xyXG59XHJcbi5iZGctd2FyIHNwYW4uY291bnQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmYjgyMjtcclxufVxyXG4uYmRnLWRhbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzggMTA0IDEwNCAvIDE1JSk7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxufVxyXG4uYmRnLWRhbiBzcGFuLmNvdW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNkYzM1NDU7XHJcbn1cclxuLmNvdW50LWxpc3QuY291bnQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59ICAgXHJcbi50b3B5LWZpbHRyIC5kcm9wZG93bi1tZW51IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICB0b3A6IDEwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 77585:
/*!*************************************************!*\
  !*** ./src/app/_Services/bs-service.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BsServiceService": () => (/* binding */ BsServiceService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class BsServiceService {
    constructor() {
        this._Pcode = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this._PName = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this._catId = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this._catName = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this._AssignId = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this._TaskName = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this._typeoftask = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this._projectCode = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this._Authority = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this._SummaryType = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this._portId = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.bs_projectCode = this._Pcode.asObservable();
        this.bs_ProjectName = this._PName.asObservable();
        this.bs_AssignId = this._AssignId.asObservable();
        this.bs_TaskName = this._TaskName.asObservable();
        this.bs_catId = this._catId.asObservable();
        this.bs_catName = this._catName.asObservable();
        this.bs_TypeofTask = this._typeoftask.asObservable();
        this.bs_SelectedProjectCode = this._projectCode.asObservable();
        this.bs_Authority = this._Authority.asObservable();
        this.bs_SummaryType = this._SummaryType.asObservable();
        this.bs_SelectedPortId = this._portId.asObservable();
    }
    SetNewPojectCode(NewPCode) {
        this._Pcode.next(NewPCode);
    }
    SetNewPojectName(ProjName) {
        this._PName.next(ProjName);
    }
    SetNewAssignId(assignId) {
        this._AssignId.next(assignId);
    }
    SetNewAssignedName(taskname) {
        this._TaskName.next(taskname);
    }
    setNewCategoryID(catid) {
        this._catId.next(catid);
    }
    setNewCategoryName(catname) {
        this._catName.next(catname);
    }
    setNewTypeofTask(typoftask) {
        this._typeoftask.next(typoftask);
    }
    setSelectedProjectCodeFromRunwayTask(pcode) {
        this._projectCode.next(pcode);
    }
    setProjectAuthoity(auth) {
        this._Authority.next(auth);
    }
    setProjectSummaryType(type) {
        this._SummaryType.next(type);
    }
    setSelectedPortId(portid) {
        this._portId.next(portid);
    }
}
BsServiceService.ɵfac = function BsServiceService_Factory(t) { return new (t || BsServiceService)(); };
BsServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BsServiceService, factory: BsServiceService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app__LayoutDashboard_project-unplanned-task_project-unplanned-task_component_ts.js.map