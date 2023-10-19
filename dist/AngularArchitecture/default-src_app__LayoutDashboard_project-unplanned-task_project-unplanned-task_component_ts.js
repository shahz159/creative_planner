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
const _c2 = function (a0, a1, a2, a3, a4) { return { "kt-badge--unified-success": a0, "kt-badge--unified-warning": a1, "kt-badge--unified-danger": a2, "kt-badge--unified-info": a3, "kt-badge--unified-cancel": a4 }; };
function ProjectUnplannedTaskComponent_div_143_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 177)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction5"](2, _c2, item_r74.Project_status == "Completed", item_r74.Project_status == "InProcess", item_r74.Project_status == "Rejected" || item_r74.Project_status == "Project Complete Rejected" || item_r74.Project_status == "New Project Rejected", item_r74.Project_status == "Under Approval" || item_r74.Project_status == "Completion Under Approval" || item_r74.Project_status == "Deadline Extend Under Approval", item_r74.Project_status == "Cancellation Under Approval" || item_r74.Project_status == "Cancelled"));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, ProjectUnplannedTaskComponent_div_143_span_40_Template, 3, 8, "span", 168);
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
        this.router.navigate(["UnplannedTask/ActionToAssign/1"]);
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
ProjectUnplannedTaskComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ProjectUnplannedTaskComponent, selectors: [["app-project-unplanned-task"]], decls: 157, vars: 40, consts: [[1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height", "side_view"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi", "mt-3", "mb-2"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], ["id", "tippy1", 1, "kt-portlet__head-title"], [1, "fas", "fa-registered", "mr-2", "text-primary"], [1, "count-list", "count-header"], [1, "kt-portlet__head-toolbar"], [1, "badge", "bdg-new", "kt-badge--inline", "mr-2", "py-8px", "btn-sm"], [1, "count"], [1, "badge", "bdg-new", "bdg-suc", "kt-badge--inline", "mr-2", "btn-sm", "py-8px"], ["class", "count", 4, "ngIf"], [1, "badge", "bdg-new", "bdg-war", "kt-badge--inline", "mr-2", "btn-sm", "py-8px"], [1, "badge", "bdg-new", "bdg-dan", "kt-badge--inline", "mr-2", "btn-sm", "py-8px"], ["class", "dropdown-menu-left topy-filtr d-none", "id", "", 4, "ngIf"], [1, "col-lg-3"], [1, "sidebar", "scrollbar"], [1, "side-bar-box"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "add_assigned_task1", "mt-2"], [1, "form-group", "mb-0"], [1, "input-group"], [1, "input-group-prepend", "w-100"], ["id", "basic-addon2", "primary", "true", "id", "tippy2", 1, "btn", "btn-primary", "btn-sm", "lh-25", 3, "click"], [1, "la", "la-plus", "text-white", "mr-0"], ["type", "text", "placeholder", "Add category and press enter to submit", "aria-describedby", "basic-addon2", "primary", "true", 1, "form-control", "add_assign_task_input", "brdr-gr", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "col-lg-9"], [2, "color", "lightgray"], [3, "hidden"], [1, "count-list", "p-3", "bg-white", "rounded-xl", "my-2"], [1, "count-list", "p-3", "grid", "gap-1", "grid-template-columns-7", "bg-gray-400", "rounded-xl", "my-2", "d-none"], [1, "d-flex", "align-items-start", "p-2", "shad", "rounded-xl", "overflow-hidden", "bg-white"], [1, "lead"], [1, "kt-badge", "kt-badge--primary", "kt-badge--inline", "mr-2", "count-num"], [1, "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid"], ["id", "kt_inbox", 1, "kt-inbox"], [1, "col-lg-12", "scrollbar1"], [4, "ngIf"], ["data-type", "inbox", 1, "kt-inbox__items"], ["class", "mb-2 card", 4, "ngFor", "ngForOf"], ["class", "card mb-2", 4, "ngFor", "ngForOf"], [1, "add_assigned_task-removeforcss", "mt-2", "pr-1"], ["id", "addbtn", 1, "btn", "btn-sm", "btn-primary", "font-weight-bold", "mr-2", "py-2", "px-3", "px-xxl-5", "text-white", "my-1", "float-right", "d-none"], [1, "la", "la-plus", "text-white", "mr-2"], ["id", "addtsk", 1, "input-group"], [1, "input-group-prepend"], ["id", "basic-addon1", "id", "tippy3", "primary", "true", 1, "btn", "btn-primary", "btn-sm", "lh-25", 3, "click"], ["type", "text", "aria-describedby", "basic-addon1", "primary", "true", 1, "form-control", "add_assign_task_input", "brdr-gr", 3, "ngModel", "placeholder", "ngModelChange", "keyup.enter"], ["id", "rightbar-overlay", 3, "click"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], ["id", "", 1, "dropdown-menu-left", "topy-filtr", "d-none"], ["data-toggle", "dropdown", 1, "btn", "btn-label-info", "btn-upper", "btn-sm", "btn-bold", 2, "padding", "5px 12px"], [1, "fas", "fa-ellipsis-v", "mr-0"], [1, "dropdown-menu", "dropdown-menu-right"], [3, "click"], [1, "col-md-10"], [1, "d-inline-block"], [1, "col-md-2"], [1, "col-md-12"], ["type", "text", "placeholder", "Search Filters", 1, "form-control", "kt-quick-search__input", "pl-3"], [1, "row", "scroll-drop"], [1, "count-height"], ["class", "d-flex justify-content-between", 4, "ngFor", "ngForOf"], ["data-toggle", "dropdown", 1, "btn", "btn-label-success", "btn-outline-success", "btn-upper", "btn-sm", "btn-bold", "mr-2", 3, "click"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-2", 3, "click"], [1, "d-flex", "justify-content-between"], [1, "kt-checkbox", "mb-3"], ["type", "checkbox"], [1, "count-btn"], [3, "ngClass"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap"], [1, "kt-inbox__subject", "w-100", 2, "display", "none", 3, "id"], [1, "d-flex"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange", "keydown.enter"], ["id", "button-addon4", 1, "d-flex", "ml-3"], [1, "btn", "btn-secondary", "btn", "btn-sm", "py-0", "px-2", "mr-2", 3, "click"], [1, "fas", "fa-check", "text-info"], [1, "btn", "btn-secondary", "btn", "btn-sm", "py-0", "px-2", 3, "click"], [1, "fas", "fa-times", "text-dark"], [1, "d-flex", "flex-column", "align-items-cente", "py-2", "w-90"], [3, "id", "click"], [1, "text-dark-75", "font-weight-bold", "text-hover-primary", "font-size-lg", "project-title", "mb-2"], [1, "kt-badge", "kt-badge--dark", "kt-badge--inline", "w-content"], [1, ""], [1, "kt-badge", "kt-badge--info", "kt-badge--inline", "w-content"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", "matTooltip", "More", 3, "matMenuTriggerFor", "hidden"], ["color", "primary"], ["xPosition", "after"], ["menuCat", "matMenu"], ["mat-menu-item", "", "mat", "", 3, "click"], ["color", "primary", 1, "mr-2"], [1, "mb-2", "card"], [1, "card-body", "p-2", "Replied_border_left_true_NewProject", "mr-2"], ["data-type", "inbox", 1, "d-flex", "flex-wrap", "align-items-center", "my-1"], [1, "symbol", "symbol-60", "symbol-2by3", "flex-shrink-0", "m-auto"], [1, "kt-inbox__actions"], ["type", "radio", "name", "Subtask", 1, "subtask-radio", "mx-4", 3, "disabled", "click"], [1, "d-flex", "flex-column", "flex-grow-1", "my-lg-0", "my-2", "pr-2", "w-75"], [1, "text-dark-75", "font-weight-bolder", "text-hover-primary", "font-size-lg"], [1, "kt-inbox__subject", 3, "id"], [1, "kt-inbox__subject", 2, "display", "none", 3, "id"], ["type", "text", "autofocus", "", 1, "form-control", 2, "width", "78%", "height", "32px", 3, "ngModel", "ngModelChange", "keydown.enter"], ["id", "button-addon4", 1, "d-inline-block", "ml-3"], [1, "btn", "btn-primary", "btn", "btn-sm", "mr-2", 3, "click"], [1, "btn", "btn-secondary", "btn", "btn-sm", 3, "click"], [1, "mt-2"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-dark", "kt-badge-light-bold", "kt-badge--inline", "mr-2"], ["class", "kt-inbox__label kt-badge kt-badge--unified-primary kt-badge-light-bold kt-badge--inline", 4, "ngIf"], ["class", "d-flex align-items-center py-lg-0 py-2", 3, "id", 4, "ngIf"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-primary", "kt-badge-light-bold", "kt-badge--inline"], ["color", "primary", 1, "ml-2"], [1, "d-flex", "align-items-center", "py-lg-0", "py-2", 3, "id"], ["matTooltip", "Action Re-Name", 1, "mr-2", "cursor-pointer", 3, "click"], ["matTooltip", "Delete Task", 1, "mr-2", "cursor-pointer", 3, "click"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", "matTooltip", "More", 1, "cursor-pointer", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["AssignTo", "matMenu"], [4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"], [1, "card", "mb-2"], [1, "card-body", "p-2", "Replied_border_left_true_success", "mr-2"], ["type", "radio", "checked", "", 1, "subtask-radio", "mx-4", 3, "click"], [1, "kt-inbox__subject"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-success", "kt-badge-light-bold", "kt-badge--inline"], [1, "kt-inbox__datetime"], [1, "delete-btn"], [1, "card-body", "p-2", "Replied_border_left_true_underApprovals", "mr-2"], [1, "text-dark-75", "font-weight-bolder", "text-hover-primary", "font-size-lg", "ml-1"], [1, "kt-inbox__subject", "h5"], [1, "desc", "ml-2", "mb-2"], [1, "my-2"], ["data-toggle", "tooltip", "title", "Created Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge--unified-dark", "kt-badge-light-bold", "kt-badge--inline"], ["src", "../creativeplanner/assets/icons/create2.png", "alt", "actiondate", 1, "badge-img"], ["color", "primary", 1, "ml-2", "mr-2"], ["data-toggle", "tooltip", "title", "Assigned Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge--unified-dark", "kt-badge-light-bold", "kt-badge--inline"], ["data-toggle", "tooltip", "title", "Project Type!", 1, "kt-badge", "kt-hover--primary", "kt-bg-light-primary", "kt-badge--inline", "ver-m"], [1, "fa", "fa-clone", "mr-2"], ["data-toggle", "tooltip", "title", "Action Status!", "class", "kt-inbox__label kt-badge kt-badge kt-badge-light-bold kt-badge--inline", 3, "ngClass", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Action Status!", "class", "kt-inbox__label kt-badge kt-badge kt-badge-light-bold kt-badge--inline kt-badge--unified-danger", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Start Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge", "kt-badge--unified-primary", "kt-badge-light-bold", "kt-badge--inline"], ["src", "../creativeplanner/assets/icons/strat-prim.png", "alt", "actiondate", 1, "badge-img"], ["data-toggle", "tooltip", "title", "End Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge", "kt-badge--unified-primary", "kt-badge-light-bold", "kt-badge--inline"], ["src", "../creativeplanner/assets/icons/end-prim.png", "alt", "actiondate", 1, "badge-img"], [1, "mt-1", "pl-2"], ["data-toggle", "tooltip", "title", "Attachment!", "class", "mr-3 text-nowrap mb-2 d-inline-block", 3, "click", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Remarks!", "class", "mr-3 text-nowrap mb-2 d-inline-block", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Action Status!", 1, "kt-inbox__label", "kt-badge", "kt-badge", "kt-badge-light-bold", "kt-badge--inline", 3, "ngClass"], ["data-toggle", "tooltip", "title", "Action Status!", 1, "kt-inbox__label", "kt-badge", "kt-badge", "kt-badge-light-bold", "kt-badge--inline", "kt-badge--unified-danger"], ["data-toggle", "tooltip", "title", "Attachment!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block", 3, "click"], [1, "fas", "fa-file-pdf", "text-muted", "mr-1"], ["title", "Click To Open File", 1, "text-info", "curser-pointer"], ["data-toggle", "tooltip", "title", "Remarks!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], [1, "fas", "fa-registered", "text-muted", "mr-1"], [1, "card-body", "p-2", "Replied_border_left_true_warning", "mr-2"], [1, "d-flex", "align-items-center", "justify-content-between"], ["data-toggle", "tooltip", "title", "Project Details!", "class", "curser-pointer", 3, "click", 4, "ngIf"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "More Info!", "class", "ml-3 curser-pointer", 3, "click", 4, "ngIf"], [1, "text-dark-75", "font-weight-bolder", "text-hover-primary", "font-size-lg", "ml-1", "flex-1"], [1, "kt-inbox__subject", "h5", "mybutton"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-info", "kt-badge-light-bold", "kt-badge--inline"], ["color", "success", 1, "ml-2", "mr-2"], ["data-toggle", "tooltip", "title", "Assigned Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge--unified-info", "kt-badge-light-bold", "kt-badge--inline"], ["src", "../creativeplanner/assets/icons/create1.png", "alt", "actiondate", 1, "badge-img"], ["data-toggle", "tooltip", "title", "Assigned Status!", 1, "kt-inbox__label", "kt-badge", "kt-badge", "kt-badge-light-bold", "kt-badge--inline", 3, "ngClass"], [1, "my-1"], ["data-toggle", "tooltip", "title", "Project Type!", "class", "kt-badge kt-hover--primary kt-bg-light-primary kt-badge--inline ver-m", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Project Status!", "class", "kt-inbox__label kt-badge kt-badge kt-badge-light-bold kt-badge--inline", 3, "ngClass", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Project Status!", "class", "kt-inbox__label kt-badge kt-badge kt-badge-light-bold kt-badge--inline kt-badge--unified-danger", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Start Date!", "class", "kt-inbox__label kt-badge kt-badge kt-badge--unified-primary kt-badge-light-bold kt-badge--inline", 4, "ngIf"], ["data-toggle", "tooltip", "title", "End Date!", "class", "kt-inbox__label kt-badge kt-badge kt-badge--unified-primary kt-badge-light-bold kt-badge--inline", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Remarks!", "class", "mx-3 text-nowrap mb-2 d-inline-block", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Project Details!", 1, "curser-pointer", 3, "click"], [1, "fa", "fa-info-circle", "info-icon-cir"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "More Info!", 1, "ml-3", "curser-pointer", 3, "click"], [1, "fa", "fa-chart-bar", "info-icon-cir"], ["data-toggle", "tooltip", "title", "Project Status!", 1, "kt-inbox__label", "kt-badge", "kt-badge", "kt-badge-light-bold", "kt-badge--inline", 3, "ngClass"], ["data-toggle", "tooltip", "title", "Project Status!", 1, "kt-inbox__label", "kt-badge", "kt-badge", "kt-badge-light-bold", "kt-badge--inline", "kt-badge--unified-danger"], ["title", "Click To Open File", 1, "text-info", "curser-pointer", 3, "click"], ["data-toggle", "tooltip", "title", "Remarks!", 1, "mx-3", "text-nowrap", "mb-2", "d-inline-block"]], template: function ProjectUnplannedTaskComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: [".sidebar[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    \n    background-color: #fff;\n    \n}\n\n.scrollbar[_ngcontent-%COMP%] {\n    height: calc(100vh - 138px);\n    overflow-y: auto;\n}\n\n\n\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 6px;\n}\n\n\n\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: #f1f1f1;\n}\n\n\n\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #ccc;\n    border-radius: 10px;\n}\n\n.py-8px[_ngcontent-%COMP%] {\n    padding-top: 8px;\n    padding-bottom: 8px;\n}\n\n\n\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #ccc;\n}\n\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    color: black;\n    padding: 10px 16px;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.sidebar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    background-color: #e0e0e0;\n    color: rgb(48, 46, 46);\n}\n\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\n    background-color: #f4f4f4;\n    color: rgb(48, 46, 46);\n}\n\n.sidebar[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n    color: #3c3c3c;\n    font-weight: 500;\n}\n\n.sidebar[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: #484848;\n}\n\ndiv.content[_ngcontent-%COMP%] {\n    margin-left: 200px;\n    padding: 1px 16px;\n    height: 1000px;\n}\n\n@media screen and (max-width: 700px) {\n    .sidebar[_ngcontent-%COMP%] {\n        width: 100%;\n        height: auto;\n        position: relative;\n    }\n\n    .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        float: left;\n    }\n\n    div.content[_ngcontent-%COMP%] {\n        margin-left: 0;\n    }\n}\n\n@media screen and (max-width: 400px) {\n    .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        text-align: center;\n        float: none;\n    }\n}\n\n\n\nh4[_ngcontent-%COMP%] {\n    font-size: 17px;\n}\n\nh5[_ngcontent-%COMP%] {\n    font-size: 15px;\n}\n\n.project-info-page[_ngcontent-%COMP%] {\n    letter-spacing: 0.4px;\n}\n\n.project-description[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #969696;\n    font-size: 13px;\n}\n\n.project-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #646464;\n    \n}\n\n.project-budget[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .project-duration[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    color: #969696;\n}\n\n.project-duration-bar[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n\n\n.sideInfobar[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    right: 0;\n    background: #ffffff;\n    box-shadow: 0px 1px 9px -3px rgb(0 0 0 / 75%);\n    border-left: 1px solid #ffffff;\n    overflow-x: hidden;\n    transition: 0.5s;\n    overflow-y: auto;\n    z-index: 999;\n    -webkit-transform: translate3d(0, 0, 0);\n    backface-visibility: hidden;\n    -webkit-backface-visibility: hidden;\n    \n}\n\n.sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\n    background-color: #f5f6fc;\n}\n\n.sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: #333;\n    position: absolute;\n    top: 10px;\n    right: 25px;\n    font-size: 20px;\n    margin-left: 50px;\n}\n\n.info-icon-cir[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #5867dd;\n}\n\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%] {\n    border-bottom: 0.07rem dashed #dedede;\n    padding: 6px;\n}\n\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%] {\n    border-bottom: 0.07rem dashed rgba(0, 0, 0, 0.3);\n}\n\n\n\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%] {\n    font-weight: 600;\n}\n\n.sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%] {\n    width: 270px;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.side-bar-box[_ngcontent-%COMP%] {\n    list-style-type: none;\n    padding-left: 0px !important;\n}\n\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #f1f1f1;\n    font-weight: 400;\n}\n\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    border-bottom: none\n}\n\n.subtask-list[_ngcontent-%COMP%] {\n    display: flex;\n    border-bottom: 1px solid #f1f1f1;\n    padding: 7px 0 5px;\n}\n\n.subtask-list[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n}\n\n.subtask-radio[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    margin-right: 15px;\n    margin-top: 5px;\n}\n\n.subtask-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 12px;\n}\n\n.subtask-list[_ngcontent-%COMP%]   p.subtask-list-title[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: 500;\n}\n\n#accordionExample5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    background-color: transparent;\n    margin-top: 15px;\n}\n\n.accordion.accordion-svg-icon[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:last-child   .card-body[_ngcontent-%COMP%] {\n    padding-left: 0px;\n}\n\n.accordion.accordion-light[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]:after {\n    left: 0px !important;\n    font-weight: 600;\n    font-size: 1.3rem;\n}\n\n.accordion.accordion-light[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    padding-left: 25px;\n    font-size: 16px;\n}\n\n.text-Rejected[_ngcontent-%COMP%] {\n    color: #E6747A !important;\n}\n\n.text-underApproval[_ngcontent-%COMP%] {\n    color: #98c7bf !important;\n}\n\n.text-CompleteRejected[_ngcontent-%COMP%] {\n    color: #D83C3C !important;\n}\n\n.text-underApp[_ngcontent-%COMP%] {\n    color: #702c72e7 !important;\n}\n\n.text-Todo[_ngcontent-%COMP%] {\n    color: #45F495 !important;\n}\n\n.text-Completed[_ngcontent-%COMP%] {\n    color: #41D37B !important;\n}\n\ninput.largerCheckbox[_ngcontent-%COMP%] {\n    width: 13px;\n    height: 13px;\n}\n\n.textarea[_ngcontent-%COMP%] {\n    height: 381px;\n}\n\n.kt-checkbox[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    margin-bottom: inherit;\n}\n\n.assigned_task[_ngcontent-%COMP%] {\n    background-color: #fff;\n    padding: 10px;\n    box-shadow: 0 0 5px #ccc;\n    margin-bottom: 10px;\n}\n\n.assigned_task[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n    font-weight: 500;\n}\n\n.assigned_task[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .add_assigned_task[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: 700;\n    margin-right: 8px;\n    color: #646c9a;\n}\n\n\n\n.add_assign_task_input[_ngcontent-%COMP%] {\n    background-color: #fff;\n    border-color: #fff;\n    padding: 0.65rem 0.5rem;\n}\n\n.input-group-shdw[_ngcontent-%COMP%] {\n    box-shadow: 0 0 10px #b3bcff;\n}\n\n.add_assigned_task[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0px;\n    left: 8px;\n    right: 8px;\n}\n\n.add_assign_task_input[_ngcontent-%COMP%] {\n    height: calc(1.5em + 1.3rem + 8px);\n}\n\n.add_assigned_task[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   span.input-group-text[_ngcontent-%COMP%] {\n    padding-left: 2px;\n    padding-right: 5px;\n}\n\n.add_assigned_task[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight: 400;\n    margin-right: 0px;\n}\n\n.curser-pointer[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\nul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    padding-left: 0px;\n}\n\n.scrollbar[_ngcontent-%COMP%]   .assigned_task[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 50px;\n}\n\n.project-active[_ngcontent-%COMP%] {\n    background-color: #f1f1f1;\n}\n\n.kt-widget12[_ngcontent-%COMP%]   .kt-widget12__content[_ngcontent-%COMP%]   .kt-widget12__item[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n}\n\n\n\n\n\n.list-icon-color[_ngcontent-%COMP%] {\n    color: #969696\n}\n\n.loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\n    background: #0dc5c1;\n    animation: load1 1s infinite ease-in-out;\n    width: 1em;\n    height: 4em;\n}\n\n.loader[_ngcontent-%COMP%] {\n    color: #0dc5c1;\n    text-indent: -9999em;\n    margin: 88px auto;\n    position: relative;\n    font-size: 11px;\n    transform: translateZ(0);\n    animation-delay: -0.16s;\n}\n\n.loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\n    position: absolute;\n    top: 0;\n    content: '';\n}\n\n.loader[_ngcontent-%COMP%]:before {\n    left: -1.5em;\n    animation-delay: -0.32s;\n}\n\n.loader[_ngcontent-%COMP%]:after {\n    left: 1.5em;\n}\n\n@keyframes load1 {\n\n    0%,\n    80%,\n    100% {\n        box-shadow: 0 0;\n        height: 4em;\n    }\n\n    40% {\n        box-shadow: 0 -2em;\n        height: 5em;\n    }\n}\n\n.center[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 200px;\n}\n\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    border-radius: 2px;\n}\n\n\n\n.shareddetails.dropdown-menu[_ngcontent-%COMP%] {\n    width: 400px;\n    height: auto;\n    max-height: 400px;\n    padding: 10px;\n    top: 38px !important;\n    left: auto !important;\n    right: 0px !important;\n    overflow-y: auto;\n}\n\n\n\n.shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 8px;\n}\n\n\n\n.shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: #f1f1f1;\n}\n\n\n\n.shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #ccc;\n}\n\n\n\n.shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n\n.ngx-pagination[_ngcontent-%COMP%] {\n    padding-left: 0;\n}\n\n#backBtn[_ngcontent-%COMP%]:hover {\n    background-color: #0073e6;\n    color: white;\n}\n\n#Mdl_closebtn[_ngcontent-%COMP%]:hover {\n    background-color: #dc3545;\n    color: white\n}\n\n.text-warning-1[_ngcontent-%COMP%] {\n    background-color: #ffe0a7;\n    color: #FFA800;\n    width: auto;\n    padding: 4px 8px;\n    border-radius: 5px;\n}\n\n.text-danger-1[_ngcontent-%COMP%] {\n    color: #F64E60;\n    background-color: #FFE2E5;\n    width: auto;\n    padding: 4px 8px;\n    border-radius: 5px;\n}\n\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%], .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-up[_ngcontent-%COMP%] {\n    border-top: 7px solid #adadad !important;\n    border-left: 7px solid transparent !important;\n    border-right: 7px solid transparent !important\n}\n\n.multiselect-dropdown[_ngcontent-%COMP%] {\n    width: 80px !important;\n}\n\n.kt-todo__details[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%] {\n    border: 0;\n    background: none;\n    font-size: 16px;\n    outline: none !important;\n    box-shadow: none;\n    outline: none !important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 30px;\n    width: 30px;\n    background-color: #f5f6fc;\n    border: 1px solid #b3bcff;\n    color: #5867dd;\n    transition: all 0.3s ease;\n    cursor: pointer;\n    margin: 0 8px 0 0;\n    border-radius: 0;\n    border-radius: 4px;\n}\n\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon[_ngcontent-%COMP%] {\n    height: 18px;\n    width: 18px;\n}\n\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n}\n\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n    fill: #5867dd;\n}\n\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #5867dd;\n}\n\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #fff;\n}\n\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n    fill: #fff;\n}\n\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover, .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%] {\n    background-color: #5867dd;\n    color: #fff;\n}\n\n.card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: #ccc;\n}\n\n.card-title[_ngcontent-%COMP%]   .favourite.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n    color: #ffc107;\n}\n\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border-color: #d6d6d6;\n}\n\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.success[_ngcontent-%COMP%] {\n    \n    \n    box-shadow: -5px 0px 1px #1dc9b7\n}\n\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.warning[_ngcontent-%COMP%] {\n    \n    box-shadow: -5px 0px 1px #ffb822\n}\n\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.info[_ngcontent-%COMP%] {\n    \n    box-shadow: -5px 0px 1px #2786fb\n}\n\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.danger[_ngcontent-%COMP%] {\n    \n    box-shadow: -5px 0px 1px #F58A8B\n}\n\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.UnderApprovals[_ngcontent-%COMP%] {\n    \n    box-shadow: -5px 0px 1px #BD838C\n}\n\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.ForwardUnderApproval[_ngcontent-%COMP%] {\n    \n    box-shadow: -5px 0px 1px #E0B1D7\n}\n\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.completeUnderApproval[_ngcontent-%COMP%] {\n    \n    box-shadow: -5px 0px 1px #98c7bf\n}\n\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.newProject[_ngcontent-%COMP%] {\n    \n    box-shadow: -5px 0px 1px #98c7bf\n}\n\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.projecthold[_ngcontent-%COMP%] {\n    \n    box-shadow: -5px 0px 1px #C0B5DC\n}\n\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.projectComRejected[_ngcontent-%COMP%] {\n    \n    box-shadow: -5px 0px 1px #e6c947\n}\n\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.projectholded[_ngcontent-%COMP%] {\n    \n    box-shadow: -5px 0px 1px #C0B5DC\n}\n\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.NewprojectRejected[_ngcontent-%COMP%] {\n    \n    box-shadow: -5px 0px 1px #C0B5DC\n}\n\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.HoldunderApp[_ngcontent-%COMP%] {\n    \n    box-shadow: -5px 0px 1px #a85098\n}\n\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.DeadlineExtended[_ngcontent-%COMP%] {\n    \n    box-shadow: -5px 0px 1px #E0B1D7\n}\n\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.EnactiveUnderApp[_ngcontent-%COMP%] {\n    \n    box-shadow: -5px 0px 1px #E0B1D7\n}\n\n.delayDays[_ngcontent-%COMP%] {\n    font-size: 10px;\n}\n\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n    transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\n    fill: #5E5F63;\n}\n\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\n    padding: 0.2rem 20px;\n    border-radius: 4px;\n}\n\n.mail-dropdown[_ngcontent-%COMP%] {\n    width: 800px;\n    max-width: 100%;\n}\n\n.mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    vertical-align: top;\n    padding-bottom: 5px;\n}\n\n.kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\n    min-height: 60px;\n}\n\n.kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\n    width: 150px;\n}\n\n.dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\n    width: 20px;\n}\n\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\n    width: 60px;\n}\n\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border: 1px solid #ccc !important;\n    border-radius: 4px;\n}\n\n.kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\n    background-color: transparent !important;\n    color: #74788D !important;\n    cursor: auto;\n}\n\n.kt-nav__link-text[_ngcontent-%COMP%]:hover {\n    color: #74788D !important;\n}\n\n.kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\n    background-color: rgba(154, 100, 142, 0.2);\n    color: #333 !important;\n    transition: all 0.3s;\n}\n\n.kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\n    color: #333;\n}\n\n.kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    background: rgb(195, 195, 195);\n}\n\n\n\n.kt-quick-panel2[_ngcontent-%COMP%] {\n    width: 650px !important;\n}\n\n.kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\n    right: -660px;\n    left: auto;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 6px;\n    border-radius: 5px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: #F1F1F1;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #ccc;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n\n\n\n\n\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\n    background-color: #FFFFFF !important;\n}\n\n.chatcount[_ngcontent-%COMP%] {\n    padding: 10px;\n    margin-left: -15px;\n    margin-top: -10px;\n}\n\n.kt-badge.kt-badge--dark[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    background: #8C8D92;\n}\n\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n    transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\n    fill: #5E5F63;\n}\n\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\n    padding: 0.2rem 20px;\n    border-radius: 4px;\n}\n\n.kt-font-ReplyRequired[_ngcontent-%COMP%] {\n    color: #a6c !important;\n}\n\n.mail-dropdown[_ngcontent-%COMP%] {\n    width: 800px;\n    max-width: 100%;\n}\n\n.mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    vertical-align: top;\n    padding-bottom: 5px;\n}\n\n.kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\n    min-height: 60px;\n}\n\n.kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\n    width: 150px;\n}\n\n.dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\n    width: 20px;\n}\n\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\n    width: 60px;\n}\n\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border: 1px solid #ccc !important;\n    border-radius: 4px;\n}\n\n.kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\n    background-color: transparent !important;\n    color: #74788D !important;\n    cursor: auto;\n}\n\n.kt-nav__link-text[_ngcontent-%COMP%]:hover {\n    color: #74788D !important;\n}\n\n.kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\n    background-color: rgba(154, 100, 142, 0.2);\n    color: #333 !important;\n    transition: all 0.3s;\n}\n\n.kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\n    color: #333;\n}\n\n.kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    background: rgb(195, 195, 195);\n}\n\n\n\n.kt-quick-panel2[_ngcontent-%COMP%] {\n    width: 650px !important;\n}\n\n.kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\n    right: -660px;\n    left: auto;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 6px;\n    border-radius: 5px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: #F1F1F1;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #ccc;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n\n\n\n\n\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\n    border: 0;\n    background: none;\n    outline: none !important;\n    box-shadow: none;\n    outline: none !important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 35px;\n    width: 35px;\n    background-color: #FFFFFF;\n    transition: all 0.3s ease;\n    cursor: pointer;\n    margin: 0;\n    border-radius: 0;\n    border-radius: 4px;\n}\n\n.kt-badge.kt-badge--inline[_ngcontent-%COMP%] {\n    height: auto;\n    width: auto;\n    padding: 0.15rem 0.75rem;\n    border-radius: 2px;\n    margin-left: 4px;\n}\n\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%] {\n    padding: 17px;\n    width: 243px;\n}\n\n\n\n.Replied_border_left_true_warning[_ngcontent-%COMP%] {\n    border-left: 5px solid #ffb822;\n}\n\n.Replied_border_left_true_primary[_ngcontent-%COMP%] {\n    border-left: 5px solid #95bed9;\n}\n\n.Replied_border_left_true_success[_ngcontent-%COMP%] {\n    border-left: 5px solid #3CB371;\n}\n\n.Replied_border_left_true_Danger[_ngcontent-%COMP%] {\n    border-left: 5px solid #F58A8B;\n}\n\n.Replied_border_left_true_hold[_ngcontent-%COMP%] {\n    border-left: 5px solid #c0b5dc\n}\n\n.Replied_border_left_true_rejected[_ngcontent-%COMP%] {\n    border-left: 5px solid #f5c293;\n}\n\n.Replied_border_left_true_underApprovals[_ngcontent-%COMP%] {\n    border-left: 5px solid #BD838C;\n}\n\n.Replied_border_left_true_forwardUnderApproval[_ngcontent-%COMP%] {\n    border-left: 5px solid #E0B1D7;\n}\n\n.Replied_border_left_true_completeUnderApproval[_ngcontent-%COMP%] {\n    border-left: 5px solid #98c7bf;\n}\n\n.Replied_border_left_true_projectHold[_ngcontent-%COMP%] {\n    border-left: 5px solid #C0B5DC;\n}\n\n.Replied_border_left_true_NewProject[_ngcontent-%COMP%] {\n    border-left: 5px solid #3699ff;\n}\n\n.Replied_border_left_true_DeadlineExtended[_ngcontent-%COMP%] {\n    border-left: 5px solid #E0B1D7;\n}\n\n.Replied_border_left_true_HoldunderApp[_ngcontent-%COMP%] {\n    border-left: 5px solid #a85098;\n}\n\n.Replied_border_left_true_NewToDo[_ngcontent-%COMP%] {\n    border-left: 5px solid #5088a8;\n}\n\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%] {\n    margin-left: -17px;\n}\n\n.icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%] {\n    position: relative;\n    margin-right: 15px !important;\n    z-index: 2;\n}\n\n.icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 18px;\n    text-align: center;\n    font-size: 10px;\n    font-weight: 700;\n    color: #fff;\n    background: #5867dd;\n    border: 1px solid #5867dd;\n    border-radius: 50%;\n    position: absolute;\n    top: -11px;\n    right: -11px;\n    z-index: 3;\n}\n\n.fa-clone[_ngcontent-%COMP%]{\n    padding: 4px 0px;\n    font-size: 13px;\n}\n\n.desc[_ngcontent-%COMP%]{\n        color: grey;\n        font-size: 13px;\n        font-weight: 400;\n}\n\n.remks[_ngcontent-%COMP%]{\n    font-size: 12px;\n\n}\n\n\n\n\n\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%] {\n    margin-top: 0px !important;\n}\n\n.multiselect-dropdown[_ngcontent-unj-c40][_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-unj-c40][_ngcontent-%COMP%] {\n    width: 150px !important;\n}\n\n\n\n.sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\n    background-color: #f5f6fc;\n}\n\n.sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: #333;\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n}\n\n.info-icon-cir[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #5867dd;\n}\n\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%] {\n    border-bottom: 0.07rem dashed #dedede;\n    padding: 6px;\n}\n\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%] {\n    border-bottom: 0.07rem dashed rgba(0, 0, 0, 0.3);\n}\n\n.kt-inbox__datetime[_ngcontent-%COMP%] {\n    font-size: 13.5px !important;\n}\n\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%] {\n    font-weight: 600;\n}\n\n.sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%] {\n    width: 270px;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.count-height[_ngcontent-%COMP%] {\n    height: 200px;\n    overflow-y: hidden;\n}\n\n.count-height[_ngcontent-%COMP%]:hover {\n    overflow-y: auto;\n}\n\n\n\n.count-height[_ngcontent-%COMP%]   .justify-content-between[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%] {\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n\n\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 3px;\n}\n\n\n\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: #f1f1f1;\n}\n\n\n\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #f1f1f1;\n}\n\n\n\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #ccc;\n}\n\n.dropdown[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:checked ~ span[_ngcontent-%COMP%] {\n    border-color: #0073e6;\n}\n\n.kt-checkbox[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:after {\n    border: solid #0073e6;\n}\n\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown[_ngcontent-%COMP%] {\n    position: static !important;\n}\n\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%] {\n    padding: 20px;\n    width: 60%;\n    \n    top: 20px !important;\n    left: -22px !important;\n}\n\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:before {\n    content: \"\";\n    border-bottom: 15px solid #fff;\n    border-right: 17px solid transparent;\n    border-left: 17px solid transparent;\n    position: absolute;\n    top: -15px;\n    left: 32px;\n    z-index: 10;\n}\n\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:after {\n    content: \"\";\n    border-bottom: 17px solid #ccc;\n    border-right: 19px solid transparent;\n    border-left: 19px solid transparent;\n    position: absolute;\n    top: -17px;\n    left: 30px;\n    z-index: 8;\n}\n\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu1[_ngcontent-%COMP%]   .filter-box[_ngcontent-%COMP%] {\n    width: 33.3333%;\n    display: inline-block;\n}\n\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n    width: 3%;\n}\n\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    width: 4%;\n}\n\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    width: 33%;\n}\n\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n    width: 10%;\n}\n\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n    width: 10%;\n}\n\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n    width: 15%;\n}\n\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(7), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7) {\n    width: 10%;\n}\n\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(8), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8) {\n    width: 15%;\n}\n\n.kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n    \n    cursor: pointer;\n}\n\n.kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n    border: 1px solid #d6dbff;\n    border-radius: 5px;\n}\n\n.show_entries[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 3px;\n    background-color: #fff;\n}\n\n.show_entries[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    \n    border: 2px solid rgba(88, 103, 221, 0.3);\n    color: #5867dd;\n    font-weight: bold;\n}\n\n.count-btn[_ngcontent-%COMP%] {\n    \n    \n    padding: 0px 10px;\n    font-weight: 700;\n    color: rgb(88, 88, 88);\n    font-size: 14px;\n    line-height: 25px;\n}\n\n\n\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__toolbar[_ngcontent-%COMP%]   .kt-inbox__search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    height: 44px;\n    border: none;\n    background-color: #f2f3f7;\n}\n\n.input-group[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: stretch;\n    width: 100% !important;\n}\n\n.dropdown-menu-md.bg-ground[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%] {\n    \n    background-color: #fff;\n    width: 25vw;\n    box-shadow: none;\n    border: 1px solid #d6dbff !important;\n    margin-top: 5px;\n}\n\n.dropdown-menu-md.bg-ground[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    background-color: #f5f6fc;\n}\n\n\n\n\n\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%]   .kt-inbox__items[_ngcontent-%COMP%]   .kt-inbox__item[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.delete-btn[_ngcontent-%COMP%] {\n    display: none;\n    position: absolute;\n    right: 0px;\n    top: 50%;\n    transform: translateY(-50%);\n    background-color: #f2f3f7;\n    color: grey;\n    line-height: 59px;\n    padding: 0 20px;\n    transition: all 2s ease !important;\n}\n\n.delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    background: none;\n    font-size: 16px;\n    outline: none !important;\n    box-shadow: none;\n    outline: none !important;\n    height: 30px;\n    width: 30px;\n    background-color: #f5f6fc;\n    border: 1px solid #b3bcff;\n    color: #5867dd;\n    transition: all 0.3s ease;\n    cursor: pointer;\n    margin: 10px 8px 0 0;\n    border-radius: 0;\n    border-radius: 4px;\n    padding: 5px;\n    text-align: center;\n    transition: all 0.3s ease;\n}\n\n\n\n.btn-secondary.theme-btn[_ngcontent-%COMP%] {\n    background-color: #5867dd;\n    color: #fff;\n}\n\n.btn.btn-label-primary[_ngcontent-%COMP%] {\n    border: 1px solid #b3bcff;\n}\n\n.delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n    background-color: #5867dd;\n    color: #fff;\n}\n\n.kt-inbox__item[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%] {\n    display: block;\n}\n\n.modal-body.min-scroll[_ngcontent-%COMP%] {\n    height: auto;\n    max-height: 300px;\n    overflow-y: hidden;\n}\n\n.modal-body.min-scroll[_ngcontent-%COMP%]:hover {\n    overflow-y: scroll;\n}\n\n.modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 5px;\n}\n\n.modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: #f1f1f1;\n}\n\n.modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #5867dd;\n    border-radius: 8px;\n}\n\n.modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #b3bcff;\n}\n\n.kt-inbox__details[_ngcontent-%COMP%] {\n    margin-top: 0px !important;\n}\n\n.font-16[_ngcontent-%COMP%] {\n    font-size: 16px !important;\n}\n\n\n\n.name-box[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-size: 9px;\n    width: 30px;\n    height: 30px;\n    background-color: #5867dd;\n    color: #fff;\n    font-weight: 500;\n    letter-spacing: 2px;\n    border-radius: 50%;\n    line-height: 30px;\n    margin-right: 5px;\n}\n\n.names-response[_ngcontent-%COMP%] {\n    display: inline-block;\n    text-align: left;\n}\n\n.names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n    display: block;\n    font-size: 10px;\n    font-weight: 600;\n}\n\n.names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n    font-weight: 600;\n}\n\n.head-btn[_ngcontent-%COMP%] {\n    background-color: rgba(88, 103, 221, 0.1);\n    padding: 3px 10px 3px 5px;\n    border-radius: 2rem;\n    border: 1px solid #b3bcff;\n    font-weight: 500;\n    font-size: 12px;\n}\n\n.head-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n    background: #5867dd;\n    color: #fff;\n    line-height: 25px;\n    text-align: center;\n    border-radius: 50%;\n    margin-right: 3px;\n}\n\n.devider[_ngcontent-%COMP%] {\n    height: 1px;\n    width: 100%;\n    background-color: #f1f1f1;\n}\n\n.pricevalues[_ngcontent-%COMP%] {\n    padding-top: 30px;\n    padding-bottom: 10px;\n    border-right: 1px solid #f1f1f1;\n    border-bottom: 1px solid #f1f1f1;\n}\n\n.top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(1), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(2) {\n    border-top: 1px solid #f1f1f1;\n}\n\n.top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(3), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\n    border-bottom: none\n}\n\n.pricevalues[_ngcontent-%COMP%]:nth-child(2), .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\n    border-right: none;\n}\n\n.dms-links[_ngcontent-%COMP%] {\n    list-style-type: disc;\n}\n\n.dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    text-decoration: underline;\n    font-weight: 600;\n    margin-bottom: 5px;\n}\n\n.py-10px[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n\n\n\n.progress_bar[_ngcontent-%COMP%]   .pro-bar[_ngcontent-%COMP%] {\n    background: hsl(0, 0%, 97%);\n    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;\n    height: 4px;\n    margin-bottom: 12px;\n    margin-top: 30px;\n    position: relative;\n    text-align: left;\n}\n\n.progress_bar[_ngcontent-%COMP%]   .progress_bar_title[_ngcontent-%COMP%] {\n    color: hsl(218, 4%, 50%);\n    font-size: 12px;\n    font-weight: 600;\n    position: relative;\n    top: -28px;\n    z-index: 1;\n}\n\n.progress_bar[_ngcontent-%COMP%]   .progress_number[_ngcontent-%COMP%] {\n    float: right;\n}\n\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%] {\n    background-color: hsl(0, 0%, 88%);\n    display: block;\n    width: 0;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: width 1s linear 0s;\n}\n\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:before {\n    content: \"\";\n    background-color: hsl(0, 0%, 100%);\n    border-radius: 50%;\n    width: 4px;\n    height: 4px;\n    position: absolute;\n    right: 1px;\n    top: 0;\n    z-index: 1;\n}\n\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:after {\n    content: \"\";\n    width: 14px;\n    height: 14px;\n    background-color: inherit;\n    border-radius: 50%;\n    position: absolute;\n    right: -4px;\n    top: -5px;\n}\n\n.bg-today[_ngcontent-%COMP%] {\n    background-color: #342bf0 !important;\n}\n\n.sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: #333;\n    position: absolute;\n    top: 10px;\n    right: 25px;\n    font-size: 20px;\n    margin-left: 50px;\n}\n\n\n\n@media only screen and (max-width: 768px) {\n    .dropdown-menu-md.bg-ground[_ngcontent-%COMP%] {\n        width: 80vw;\n    }\n}\n\n.mat-icon.mat-primary[_ngcontent-%COMP%] {\n    color: #3699ff;\n}\n\n.scrollbar1[_ngcontent-%COMP%] {\n    height: calc(100vh - 237px);\n    overflow: hidden;\n    overflow-y: auto;\n}\n\n.brdr-gr[_ngcontent-%COMP%] {\n    border: 1px solid #dce1f5;\n}\n\n  .dropdown-list {\n    overflow: hidden;\n}\n\n.text-hover-primary[_ngcontent-%COMP%], .text-hover-primary[_ngcontent-%COMP%]:hover, a.text-hover-primary[_ngcontent-%COMP%], a.text-hover-primary[_ngcontent-%COMP%]:hover {\n    transition: color .15s ease, background-color .15s ease, border-color .15s ease, box-shadow .15s ease;\n}\n\n.text-hover-primary[_ngcontent-%COMP%]:hover, .text-hover-primary[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], a.text-hover-primary[_ngcontent-%COMP%]:hover, a.text-hover-primary[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n    color: #3699ff !important;\n}\n\n.font-bolder[_ngcontent-%COMP%] {\n    font-weight: 600;\n}\n\n.lh-25[_ngcontent-%COMP%] {\n    line-height: 2.5;\n}\n\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    transform: scale(0.95);\n    transition: transform .2s !important;\n}\n\n.input-group[_ngcontent-%COMP%] {\n    transition: transform .2s !important;\n}\n\n.w-content[_ngcontent-%COMP%] {\n    width: -moz-fit-content !important;\n    width: fit-content !important;\n}\n\ninput.form-control.add_assign_task_input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n    font-weight: bold;\n}\n\n.b-r-20[_ngcontent-%COMP%] {\n    border-radius: 20px !important;\n    padding: 4px 6px !important;\n}\n\n.w-90[_ngcontent-%COMP%] {\n    width: 90% !important;\n}\n\n.offcanvas[_ngcontent-%COMP%] {\n    background: #ffffff;\n    box-shadow: 0px 1px 9px -3px rgb(0 0 0 / 25%);\n}\n\nmat-icon[_ngcontent-%COMP%] {\n    font-size: 20px;\n    height: 20px;\n    width: 20px;\n}\n\n.cursor-pointer[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.input-group-text[_ngcontent-%COMP%] > .mat-icon-button[_ngcontent-%COMP%] {\n    line-height: 35px !important;\n}\n\n.badge-img[_ngcontent-%COMP%] {\n    width: 16px;\n    padding: 2px 0px;\n    margin-right: 4px;\n}\n\n.fa-code-branch[_ngcontent-%COMP%] {\n    transform: rotate(180deg) scaleX(-1);\n    vertical-align: middle;\n}\n\n.overlay-card[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: transparent;\n    z-index: 2;\n    cursor: pointer;\n}\n\n.kt-badge.kt-badge--unified-warning1[_ngcontent-%COMP%] {\n    color: #F3AA0F;\n    background: rgb(255 184 34 / 25%);\n}\n\n.bdg-new[_ngcontent-%COMP%] {\n    background-color: rgb(123 104 238 / 15%);\n    color: #7b68ee;\n    font-size: 12px;\n    font-weight: 500;\n}\n\nspan.count[_ngcontent-%COMP%] {\n    background: #9886eb;\n    padding: 0px 4px;\n    color: #ffffff;\n    cursor: auto;\n    border-radius: 3px;\n}\n\n.bdg-suc[_ngcontent-%COMP%]{\n    background-color: rgb(104 238 198 / 15%);\n    color: #1dc9b7;\n}\n\n.bdg-suc[_ngcontent-%COMP%]   span.count[_ngcontent-%COMP%] {\n    background: #1dc9b7;\n}\n\n.bdg-war[_ngcontent-%COMP%]{\n    background-color: rgb(255 154 54 / 21%);\n    color: #dd9600;\n}\n\n.bdg-war[_ngcontent-%COMP%]   span.count[_ngcontent-%COMP%] {\n    background: #ffb822;\n}\n\n.bdg-dan[_ngcontent-%COMP%]{\n    background-color: rgb(238 104 104 / 15%);\n    color: #dc3545;\n}\n\n.bdg-dan[_ngcontent-%COMP%]   span.count[_ngcontent-%COMP%] {\n    background: #dc3545;\n}\n\n.count-list.count-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n}\n\n.topy-filtr[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    padding: 20px;\n    width: 400px;\n    top: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtdW5wbGFubmVkLXRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCOztBQUdBLFVBQVU7O0FBRVY7SUFDSSxVQUFVO0FBQ2Q7O0FBR0EsVUFBVTs7QUFFVjtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFHQSxXQUFXOztBQUVYO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBQ0Esb0JBQW9COztBQUVwQjtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztJQUNmO0FBQ0o7O0FBR0EsZ0NBQWdDOztBQUVoQztJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7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QUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUNBO0lBQ0ksY0FBYztJQUNkLGlDQUFpQztBQUNyQzs7QUFDQTtJQUNJLHdDQUF3QztJQUN4QyxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMsY0FBYztBQUNsQjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLHVDQUF1QztJQUN2QyxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hDLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixvQkFBb0I7QUFDeEIiLCJmaWxlIjoicHJvamVjdC11bnBsYW5uZWQtdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC8qIHdpZHRoOiAzMDBweDsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cbn1cblxuLnNjcm9sbGJhciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTM4cHgpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cblxuLyogd2lkdGggKi9cblxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA2cHg7XG59XG5cblxuLyogVHJhY2sgKi9cblxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cblxuLyogSGFuZGxlICovXG5cbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5weS04cHgge1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuXG4uc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuLnNpZGViYXIgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2lkZWJhciBhLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgICBjb2xvcjogcmdiKDQ4LCA0NiwgNDYpO1xufVxuXG4uc2lkZWJhciBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICBjb2xvcjogcmdiKDQ4LCA0NiwgNDYpO1xufVxuXG4uc2lkZWJhciAucHJvamVjdC10aXRsZSB7XG4gICAgY29sb3I6ICMzYzNjM2M7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNpZGViYXIgLmQtZmxleCBwIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG59XG5cbmRpdi5jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgcGFkZGluZzogMXB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxMDAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgLnNpZGViYXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLnNpZGViYXIgYSB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cblxuICAgIGRpdi5jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAgIC5zaWRlYmFyIGEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbn1cblxuXG4vKiBNb3JlIERldGFpbHMgQ29tcG9uZW50cyBDU1MgKi9cblxuaDQge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuaDUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnByb2plY3QtaW5mby1wYWdlIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG59XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uIC5kLWZsZXggc3BhbiB7XG4gICAgY29sb3I6ICM5Njk2OTY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucHJvamVjdC1kZXNjcmlwdGlvbiBwIHtcbiAgICBjb2xvcjogIzY0NjQ2NDtcbiAgICAvKiBmb250LXNpemU6IDE0cHg7ICovXG59XG5cbi5wcm9qZWN0LWJ1ZGdldCBoNixcbi5wcm9qZWN0LWR1cmF0aW9uIGg2IHtcbiAgICBjb2xvcjogIzk2OTY5Njtcbn1cblxuLnByb2plY3QtZHVyYXRpb24tYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4vKiA9PT0gU2lkZWJhciA9PT0gKi9cblxuLnNpZGVJbmZvYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA5cHggLTNweCByZ2IoMCAwIDAgLyA3NSUpO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZmZmZjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC8qIHBhZGRpbmctdG9wOiA2MHB4OyAqL1xufVxuXG4uc2lkZUluZm9iYXIgLmt0LXBvcnRsZXRfX2hlYWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmM7XG59XG5cbi5zaWRlSW5mb2JhciAuY2xvc2VidG4ge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzMzMztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmluZm8taWNvbi1jaXIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzU4NjdkZDtcbn1cblxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtIHtcbiAgICBib3JkZXItYm90dG9tOiAwLjA3cmVtIGRhc2hlZCAjZGVkZWRlO1xuICAgIHBhZGRpbmc6IDZweDtcbn1cblxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtLmRhcmsge1xuICAgIGJvcmRlci1ib3R0b206IDAuMDdyZW0gZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuXG4vKiAua3QtaW5ib3hfX2RhdGV0aW1le1xuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICB9ICovXG5cbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbSAua3Qtd2lkZ2V0MV9faW5mbyAua3Qtd2lkZ2V0MV9fdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zaWRlSW5mb2JhciAudGl0bGUtc2lkZWJhciB7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uc2lkZS1iYXItYm94IHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLnNpZGUtYmFyLWJveCBsaSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnNpZGUtYmFyLWJveCBsaTpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lXG59XG5cbi5zdWJ0YXNrLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgcGFkZGluZzogN3B4IDAgNXB4O1xufVxuXG4uc3VidGFzay1saXN0Omxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5zdWJ0YXNrLXJhZGlvIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnN1YnRhc2stbGlzdCBwIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnN1YnRhc2stbGlzdCBwLnN1YnRhc2stbGlzdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiNhY2NvcmRpb25FeGFtcGxlNSAuY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmFjY29yZGlvbi5hY2NvcmRpb24tc3ZnLWljb24gLmNhcmQ6bGFzdC1jaGlsZCAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLmFjY29yZGlvbi5hY2NvcmRpb24tbGlnaHQgLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlOmFmdGVyIHtcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uYWNjb3JkaW9uLmFjY29yZGlvbi1saWdodCAuY2FyZCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi50ZXh0LVJlamVjdGVkIHtcbiAgICBjb2xvcjogI0U2NzQ3QSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC11bmRlckFwcHJvdmFsIHtcbiAgICBjb2xvcjogIzk4YzdiZiAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1Db21wbGV0ZVJlamVjdGVkIHtcbiAgICBjb2xvcjogI0Q4M0MzQyAhaW1wb3J0YW50O1xufVxuXG4udGV4dC11bmRlckFwcCB7XG4gICAgY29sb3I6ICM3MDJjNzJlNyAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1Ub2RvIHtcbiAgICBjb2xvcjogIzQ1RjQ5NSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1Db21wbGV0ZWQge1xuICAgIGNvbG9yOiAjNDFEMzdCICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0LmxhcmdlckNoZWNrYm94IHtcbiAgICB3aWR0aDogMTNweDtcbiAgICBoZWlnaHQ6IDEzcHg7XG59XG5cbi50ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiAzODFweDtcbn1cblxuLmt0LWNoZWNrYm94IHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogaW5oZXJpdDtcbn1cblxuLmFzc2lnbmVkX3Rhc2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNjY2M7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmFzc2lnbmVkX3Rhc2sgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hc3NpZ25lZF90YXNrIGksXG4uYWRkX2Fzc2lnbmVkX3Rhc2sgaSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgY29sb3I6ICM2NDZjOWE7XG59XG5cblxuLyogLmlucHV0LWdyb3VwLXRleHQsICovXG5cbi5hZGRfYXNzaWduX3Rhc2tfaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuNjVyZW0gMC41cmVtO1xufVxuXG4uaW5wdXQtZ3JvdXAtc2hkdyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2IzYmNmZjtcbn1cblxuLmFkZF9hc3NpZ25lZF90YXNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogOHB4O1xuICAgIHJpZ2h0OiA4cHg7XG59XG5cbi5hZGRfYXNzaWduX3Rhc2tfaW5wdXQge1xuICAgIGhlaWdodDogY2FsYygxLjVlbSArIDEuM3JlbSArIDhweCk7XG59XG5cbi5hZGRfYXNzaWduZWRfdGFzayAuaW5wdXQtZ3JvdXAtYXBwZW5kIHNwYW4uaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uYWRkX2Fzc2lnbmVkX3Rhc2sgLmlucHV0LWdyb3VwLWFwcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCBpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmN1cnNlci1wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5zY3JvbGxiYXIgLmFzc2lnbmVkX3Rhc2s6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnByb2plY3QtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4ua3Qtd2lkZ2V0MTIgLmt0LXdpZGdldDEyX19jb250ZW50IC5rdC13aWRnZXQxMl9faXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuXG4vKiBUZXN0aW5nICovXG5cblxuLyogI2xvYWRpbmd7IFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICBsZWZ0OiA1MCU7IFxuICB0b3A6IDUwJTsgXG4gIHotaW5kZXg6IDE7IFxuICB3aWR0aDogMTUwcHg7IFxuICBoZWlnaHQ6IDE1MHB4OyBcbiAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7IFxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjsgXG4gIHdpZHRoOiAxMjBweDsgXG4gIGhlaWdodDogMTIwcHg7IFxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyBcbiAgfSBcbiAgICBcbiAgQGtleWZyYW1lcyBzcGluIHsgXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfSBcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSBcbiAgfSAqL1xuXG4ubGlzdC1pY29uLWNvbG9yIHtcbiAgICBjb2xvcjogIzk2OTY5NlxufVxuXG4ubG9hZGVyLFxuLmxvYWRlcjpiZWZvcmUsXG4ubG9hZGVyOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMGRjNWMxO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkMSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb246IGxvYWQxIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIHdpZHRoOiAxZW07XG4gICAgaGVpZ2h0OiA0ZW07XG59XG5cbi5sb2FkZXIge1xuICAgIGNvbG9yOiAjMGRjNWMxO1xuICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICAgIG1hcmdpbjogODhweCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbn1cblxuLmxvYWRlcjpiZWZvcmUsXG4ubG9hZGVyOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGNvbnRlbnQ6ICcnO1xufVxuXG4ubG9hZGVyOmJlZm9yZSB7XG4gICAgbGVmdDogLTEuNWVtO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG59XG5cbi5sb2FkZXI6YWZ0ZXIge1xuICAgIGxlZnQ6IDEuNWVtO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDEge1xuXG4gICAgMCUsXG4gICAgODAlLFxuICAgIDEwMCUge1xuICAgICAgICBib3gtc2hhZG93OiAwIDA7XG4gICAgICAgIGhlaWdodDogNGVtO1xuICAgIH1cblxuICAgIDQwJSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTJlbTtcbiAgICAgICAgaGVpZ2h0OiA1ZW07XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxvYWQxIHtcblxuICAgIDAlLFxuICAgIDgwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwO1xuICAgICAgICBoZWlnaHQ6IDRlbTtcbiAgICB9XG5cbiAgICA0MCUge1xuICAgICAgICBib3gtc2hhZG93OiAwIC0yZW07XG4gICAgICAgIGhlaWdodDogNWVtO1xuICAgIH1cbn1cblxuLmNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbi5tb2RhbCAubW9kYWwtY29udGVudCB7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG5cbi8qIFxuICB0YWJsZSwgdGgsIHRkIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgdGFibGUge1xuICAgIGJvcmRlci1zcGFjaW5nOiAxNXB4O1xuICB9ICovXG5cbi5zaGFyZWRkZXRhaWxzLmRyb3Bkb3duLW1lbnUge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0b3A6IDM4cHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cblxuLyogd2lkdGggKi9cblxuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA4cHg7XG59XG5cblxuLyogVHJhY2sgKi9cblxuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cblxuLyogSGFuZGxlICovXG5cbi5zaGFyZWRkZXRhaWxzLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuXG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzU1NTtcbn1cblxuLm5neC1wYWdpbmF0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbiNiYWNrQnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3M2U2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI01kbF9jbG9zZWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbiAgICBjb2xvcjogd2hpdGVcbn1cblxuLnRleHQtd2FybmluZy0xIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMGE3O1xuICAgIGNvbG9yOiAjRkZBODAwO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udGV4dC1kYW5nZXItMSB7XG4gICAgY29sb3I6ICNGNjRFNjA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTJFNTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLmRyb3Bkb3duLWRvd24sXG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuZHJvcGRvd24tdXAge1xuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCAjYWRhZGFkICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnRcbn1cblxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIHtcbiAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xufVxuXG4ua3QtdG9kb19fZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24ge1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiY2ZmO1xuICAgIGNvbG9yOiAjNTg2N2RkO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46IDAgOHB4IDAgMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24gc3ZnLmt0LXN2Zy1pY29uIHtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG59XG5cbi5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uIHN2Zy5rdC1zdmctaWNvbi5hZGQtaWNvbiB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xufVxuXG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiAua3Qtc3ZnLWljb24gZyBbZmlsbF0ge1xuICAgIGZpbGw6ICM1ODY3ZGQ7XG59XG5cbi5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uIHN2Zy5rdC1zdmctaWNvbi5hZGQtaWNvbiBwYXRoIHtcbiAgICBmaWxsOiAjNTg2N2RkO1xufVxuXG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbjpob3ZlciBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24gcGF0aCxcbi5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uLmFjdGl2ZSBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24gcGF0aCB7XG4gICAgZmlsbDogI2ZmZjtcbn1cblxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb246aG92ZXIgLmt0LXN2Zy1pY29uIGcgW2ZpbGxdLFxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlIC5rdC1zdmctaWNvbiBnIFtmaWxsXSB7XG4gICAgZmlsbDogI2ZmZjtcbn1cblxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb246aG92ZXIsXG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5jYXJkLXRpdGxlIC5mYXZvdXJpdGUgaSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjY2NjO1xufVxuXG4uY2FyZC10aXRsZSAuZmF2b3VyaXRlLmFjdGl2ZSBpLFxuLmNhcmQtdGl0bGUgLmZhdm91cml0ZTpob3ZlciBpIHtcbiAgICBjb2xvcjogI2ZmYzEwNztcbn1cblxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRkIHtcbiAgICBib3JkZXItY29sb3I6ICNkNmQ2ZDY7XG59XG5cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5zdWNjZXNzIHtcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICMxZGM5Yjc7ICovXG4gICAgLyogYm9yZGVyLXJhZGl1czogNHB4OyAqL1xuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjMWRjOWI3XG59XG5cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci53YXJuaW5nIHtcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmI4MjI7ICAqL1xuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjZmZiODIyXG59XG5cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5pbmZvIHtcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyNzg2ZmI7ICAqL1xuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjMjc4NmZiXG59XG5cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5kYW5nZXIge1xuICAgIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0Y1OEE4QjsgICovXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNGNThBOEJcbn1cblxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLlVuZGVyQXBwcm92YWxzIHtcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNCRDgzOEM7ICAqL1xuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjQkQ4MzhDXG59XG5cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5Gb3J3YXJkVW5kZXJBcHByb3ZhbCB7XG4gICAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3OyAqL1xuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjRTBCMUQ3XG59XG5cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5jb21wbGV0ZVVuZGVyQXBwcm92YWwge1xuICAgIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZjsgICovXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICM5OGM3YmZcbn1cblxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLm5ld1Byb2plY3Qge1xuICAgIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZjsgICovXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICM5OGM3YmZcbn1cblxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLnByb2plY3Rob2xkIHtcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNDMEI1REM7ICAqL1xuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjQzBCNURDXG59XG5cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5wcm9qZWN0Q29tUmVqZWN0ZWQge1xuICAgIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0MwQjVEQzsgICovXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNlNmM5NDdcbn1cblxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLnByb2plY3Rob2xkZWQge1xuICAgIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0MwQjVEQzsgICovXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNDMEI1RENcbn1cblxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLk5ld3Byb2plY3RSZWplY3RlZCB7XG4gICAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQzBCNURDOyAgKi9cbiAgICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggI0MwQjVEQ1xufVxuXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIuSG9sZHVuZGVyQXBwIHtcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhODUwOTg7ICAqL1xuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjYTg1MDk4XG59XG5cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5EZWFkbGluZUV4dGVuZGVkIHtcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7ICAqL1xuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjRTBCMUQ3XG59XG5cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5FbmFjdGl2ZVVuZGVyQXBwIHtcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7ICAqL1xuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjRTBCMUQ3XG59XG5cbi5kZWxheURheXMge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsgZyBbZmlsbF0ge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGN1YmljLWJlemllcigwLjkzLCAwLjM1LCAxLCAxKTtcbiAgICBmaWxsOiAjNUU1RjYzO1xufVxuXG4ua3QtaW5ib3ggLmt0LWluYm94X19hc2lkZSAua3QtaW5ib3hfX25hdiAua3QtbmF2IC5rdC1uYXZfX2l0ZW0gLmt0LW5hdl9fbGluayB7XG4gICAgcGFkZGluZzogMC4ycmVtIDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubWFpbC1kcm9wZG93biB7XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuLm1haWwtZHJvcGRvd24gdGFibGUgdGQge1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmt0LXF1aWNrLXBhbmVsIC5rdC1wb3J0bGV0Lmt0LXBvcnRsZXQtLWhlYWQtbGcgLmt0LXBvcnRsZXRfX2hlYWQge1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG59XG5cbi5rdC1pbmJveF9faWNvbiAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1tZW51LXNtIHtcbiAgICB3aWR0aDogMTUwcHg7XG59XG5cbi5kcm9wZG93bi1yZXBseSB1bCBsaSBhIC5rdC1uYXZfX2xpbmstaWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5rdC1pbmJveCAua3QtaW5ib3hfX2Zvcm0gLmt0LWluYm94X19ib2R5IC5rdC1pbmJveF9fdG8gLmt0LWluYm94X19maWVsZCAua3QtaW5ib3hfX2xhYmVsIHtcbiAgICB3aWR0aDogNjBweDtcbn1cblxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9faW5wdXQgaW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5rdC1uYXZfX2xpbmstbm9ob3Zlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzc0Nzg4RCAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogYXV0bztcbn1cblxuLmt0LW5hdl9fbGluay10ZXh0OmhvdmVyIHtcbiAgICBjb2xvcjogIzc0Nzg4RCAhaW1wb3J0YW50O1xufVxuXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU0LCAxMDAsIDE0MiwgMC4yKTtcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93LFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3cge1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLXVuaWZpZWQtYnJhbmQge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJhY2tncm91bmQ6IHJnYigxOTUsIDE5NSwgMTk1KTtcbn1cblxuXG4vKiAuaW5ib3gtdGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiA2MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59ICovXG5cbi5rdC1xdWljay1wYW5lbDIge1xuICAgIHdpZHRoOiA2NTBweCAhaW1wb3J0YW50O1xufVxuXG4ua3QtcXVpY2stcGFuZWwtLXJpZ2h0IC5rdC1xdWljay1wYW5lbCB7XG4gICAgcmlnaHQ6IC02NjBweDtcbiAgICBsZWZ0OiBhdXRvO1xufVxuXG5cbi8qIHdpZHRoICovXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5cbi8qIFRyYWNrICovXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICNGMUYxRjE7XG59XG5cblxuLyogSGFuZGxlICovXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICNjY2M7XG59XG5cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM1NTU7XG59XG5cblxuLyogLnNvbWVjbGFzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgZGlzcGxheTogbm9uZTtcbn0gKi9cblxuXG4vKiA6aG9zdCguc29tZUNsYXNzKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0gKi9cblxuLmt0LWluYm94IC5rdC1pbmJveF9faWNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xufVxuXG4uY2hhdGNvdW50IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLmt0LWJhZGdlLmt0LWJhZGdlLS1kYXJrIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBiYWNrZ3JvdW5kOiAjOEM4RDkyO1xufVxuXG4ua3QtaW5ib3ggLmt0LWluYm94X19hc2lkZSAua3QtaW5ib3hfX25hdiAua3QtbmF2IC5rdC1uYXZfX2l0ZW0gLmt0LW5hdl9fbGluayBnIFtmaWxsXSB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuOTMsIDAuMzUsIDEsIDEpO1xuICAgIGZpbGw6ICM1RTVGNjM7XG59XG5cbi5rdC1pbmJveCAua3QtaW5ib3hfX2FzaWRlIC5rdC1pbmJveF9fbmF2IC5rdC1uYXYgLmt0LW5hdl9faXRlbSAua3QtbmF2X19saW5rIHtcbiAgICBwYWRkaW5nOiAwLjJyZW0gMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5rdC1mb250LVJlcGx5UmVxdWlyZWQge1xuICAgIGNvbG9yOiAjYTZjICFpbXBvcnRhbnQ7XG59XG5cbi5tYWlsLWRyb3Bkb3duIHtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbC1kcm9wZG93biB0YWJsZSB0ZCB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4ua3QtcXVpY2stcGFuZWwgLmt0LXBvcnRsZXQua3QtcG9ydGxldC0taGVhZC1sZyAua3QtcG9ydGxldF9faGVhZCB7XG4gICAgbWluLWhlaWdodDogNjBweDtcbn1cblxuLmt0LWluYm94X19pY29uIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLW1lbnUtc20ge1xuICAgIHdpZHRoOiAxNTBweDtcbn1cblxuLmRyb3Bkb3duLXJlcGx5IHVsIGxpIGEgLmt0LW5hdl9fbGluay1pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9fbGFiZWwge1xuICAgIHdpZHRoOiA2MHB4O1xufVxuXG4ua3QtaW5ib3ggLmt0LWluYm94X19mb3JtIC5rdC1pbmJveF9fYm9keSAua3QtaW5ib3hfX3RvIC5rdC1pbmJveF9fZmllbGQgLmt0LWluYm94X19pbnB1dCBpbnB1dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmt0LW5hdl9fbGluay1ub2hvdmVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBhdXRvO1xufVxuXG4ua3QtbmF2X19saW5rLXRleHQ6aG92ZXIge1xuICAgIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XG59XG5cbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rLFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rLFxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTQsIDEwMCwgMTQyLCAwLjIpO1xuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93LFxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyB7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5rdC1iYWRnZS5rdC1iYWRnZS0tdW5pZmllZC1icmFuZCB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgYmFja2dyb3VuZDogcmdiKDE5NSwgMTk1LCAxOTUpO1xufVxuXG5cbi8qIC5pbmJveC10ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDYwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0gKi9cblxuLmt0LXF1aWNrLXBhbmVsMiB7XG4gICAgd2lkdGg6IDY1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rdC1xdWljay1wYW5lbC0tcmlnaHQgLmt0LXF1aWNrLXBhbmVsIHtcbiAgICByaWdodDogLTY2MHB4O1xuICAgIGxlZnQ6IGF1dG87XG59XG5cblxuLyogd2lkdGggKi9cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cblxuLyogVHJhY2sgKi9cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogI0YxRjFGMTtcbn1cblxuXG4vKiBIYW5kbGUgKi9cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzU1NTtcbn1cblxuXG4vKiAuc29tZWNsYXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBkaXNwbGF5OiBub25lO1xufSAqL1xuXG5cbi8qIDpob3N0KC5zb21lQ2xhc3MpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufSAqL1xuXG4ua3QtaW5ib3ggLmt0LWluYm94X19pY29uIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmt0LWJhZGdlLmt0LWJhZGdlLS1pbmxpbmUge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiAwLjE1cmVtIDAuNzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5rdC1pbmJveCAua3QtaW5ib3hfX2FzaWRlIHtcbiAgICBwYWRkaW5nOiAxN3B4O1xuICAgIHdpZHRoOiAyNDNweDtcbn1cblxuXG4vKiBTdGF0dXMgQ29sb3JzICovXG5cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfd2FybmluZyB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZiODIyO1xufVxuXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3ByaW1hcnkge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk1YmVkOTtcbn1cblxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9zdWNjZXNzIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMzQ0IzNzE7XG59XG5cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfRGFuZ2VyIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNGNThBOEI7XG59XG5cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfaG9sZCB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYzBiNWRjXG59XG5cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcmVqZWN0ZWQge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y1YzI5Mztcbn1cblxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV91bmRlckFwcHJvdmFscyB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQkQ4MzhDO1xufVxuXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX2ZvcndhcmRVbmRlckFwcHJvdmFsIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7XG59XG5cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfY29tcGxldGVVbmRlckFwcHJvdmFsIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5OGM3YmY7XG59XG5cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcHJvamVjdEhvbGQge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0MwQjVEQztcbn1cblxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9OZXdQcm9qZWN0IHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMzNjk5ZmY7XG59XG5cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfRGVhZGxpbmVFeHRlbmRlZCB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3O1xufVxuXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX0hvbGR1bmRlckFwcCB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTg1MDk4O1xufVxuXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX05ld1RvRG8ge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzUwODhhODtcbn1cblxuLmt0LWluYm94IC5rdC1pbmJveF9fbGlzdCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xufVxuXG4uaWNvbnMtZmlsdGVyIC5rdC10b2RvX19pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmljb25zLWZpbHRlciAua3QtdG9kb19faWNvbiBzcGFuIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICM1ODY3ZGQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU4NjdkZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTExcHg7XG4gICAgcmlnaHQ6IC0xMXB4O1xuICAgIHotaW5kZXg6IDM7XG59XG4uZmEtY2xvbmV7XG4gICAgcGFkZGluZzogNHB4IDBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4uZGVzY3tcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5yZW1rc3tcbiAgICBmb250LXNpemU6IDEycHg7XG5cbn1cbi8qIC5pY29ucy1maWx0ZXIgLmt0LXRvZG9fX2ljb246aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3M2ExZjcgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudFxufSAqL1xuXG5cbi8qIC5pY29ucy1maWx0ZXIgLmt0LXRvZG9fX2ljb246aG92ZXIgc3BhbntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMTM0LCAyNTEsIDEpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnRcbn0gKi9cblxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIHtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm11bHRpc2VsZWN0LWRyb3Bkb3duW19uZ2NvbnRlbnQtdW5qLWM0MF0gLmRyb3Bkb3duLWJ0bltfbmdjb250ZW50LXVuai1jNDBdIHtcbiAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbn1cblxuXG4vKiA9PT0gU2lkZWJhciA9PT0gKi9cblxuLnNpZGVJbmZvYmFyIC5rdC1wb3J0bGV0X19oZWFkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xufVxuXG4uc2lkZUluZm9iYXIgLmNsb3NlYnRuIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMjVweDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5pbmZvLWljb24tY2lyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICM1ODY3ZGQ7XG59XG5cbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgI2RlZGVkZTtcbiAgICBwYWRkaW5nOiA2cHg7XG59XG5cbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbS5kYXJrIHtcbiAgICBib3JkZXItYm90dG9tOiAwLjA3cmVtIGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5rdC1pbmJveF9fZGF0ZXRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTMuNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbSAua3Qtd2lkZ2V0MV9faW5mbyAua3Qtd2lkZ2V0MV9fdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zaWRlSW5mb2JhciAudGl0bGUtc2lkZWJhciB7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uY291bnQtaGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLmNvdW50LWhlaWdodDpob3ZlciB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLyogLmNvdW50LWhlaWdodCAuanVzdGlmeS1jb250ZW50LWJldHdlZW57XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xufSAqL1xuXG4uY291bnQtaGVpZ2h0IC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiAua3QtY2hlY2tib3gge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cblxuLyogd2lkdGggKi9cblxuLmNvdW50LWhlaWdodDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAzcHg7XG59XG5cblxuLyogVHJhY2sgKi9cblxuLmNvdW50LWhlaWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cblxuLyogSGFuZGxlICovXG5cbi5jb3VudC1oZWlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuLmRyb3Bkb3duIC5rdC1jaGVja2JveD5pbnB1dDpjaGVja2VkfnNwYW4ge1xuICAgIGJvcmRlci1jb2xvcjogIzAwNzNlNjtcbn1cblxuLmt0LWNoZWNrYm94PnNwYW46YWZ0ZXIge1xuICAgIGJvcmRlcjogc29saWQgIzAwNzNlNjtcbn1cblxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbn1cblxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTsgKi9cbiAgICB0b3A6IDIwcHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAtMjJweCAhaW1wb3J0YW50O1xufVxuXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJpZ2h0OiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xNXB4O1xuICAgIGxlZnQ6IDMycHg7XG4gICAgei1pbmRleDogMTA7XG59XG5cbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm9yZGVyLWJvdHRvbTogMTdweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yaWdodDogMTlweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMTlweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTdweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIHotaW5kZXg6IDg7XG59XG5cbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnUxIC5maWx0ZXItYm94IHtcbiAgICB3aWR0aDogMzMuMzMzMyU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCgxKSxcbiNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDEpIHtcbiAgICB3aWR0aDogMyU7XG59XG5cbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDIpLFxuI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoMikge1xuICAgIHdpZHRoOiA0JTtcbn1cblxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMyksXG4jcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCgzKSB7XG4gICAgd2lkdGg6IDMzJTtcbn1cblxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNCksXG4jcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg0KSB7XG4gICAgd2lkdGg6IDEwJTtcbn1cblxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNSksXG4jcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg1KSB7XG4gICAgd2lkdGg6IDEwJTtcbn1cblxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNiksXG4jcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg2KSB7XG4gICAgd2lkdGg6IDE1JTtcbn1cblxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNyksXG4jcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg3KSB7XG4gICAgd2lkdGg6IDEwJTtcbn1cblxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoOCksXG4jcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg4KSB7XG4gICAgd2lkdGg6IDE1JTtcbn1cblxuLmt0LXF1aWNrLXNlYXJjaCAua3QtcXVpY2stc2VhcmNoX19mb3JtIC5pbnB1dC1ncm91cC1wcmVwZW5kIC5pbnB1dC1ncm91cC10ZXh0LFxuLmt0LXF1aWNrLXNlYXJjaCAua3QtcXVpY2stc2VhcmNoX19mb3JtIC5pbnB1dC1ncm91cC1hcHBlbmQgLmlucHV0LWdyb3VwLXRleHQge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZmY7ICovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3VwIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDZkYmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNob3dfZW50cmllcyBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnNob3dfZW50cmllcyBzZWxlY3Qge1xuICAgIC8qIHdpZHRoOiAxMDBweDsgKi9cbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDg4LCAxMDMsIDIyMSwgMC4zKTtcbiAgICBjb2xvcjogIzU4NjdkZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvdW50LWJ0biB7XG4gICAgLyogaGVpZ2h0OiAyNXB4OyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7ICovXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogcmdiKDg4LCA4OCwgODgpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuXG4vKiBTZWFyY2ggUHJvamVjdHMgKi9cblxuLmt0LWluYm94IC5rdC1pbmJveF9fdG9vbGJhciAua3QtaW5ib3hfX3NlYXJjaCAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xufVxuXG4uaW5wdXQtZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQsXG4uZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQtc2hvcnQge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlMmU5ZmY7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMjV2dztcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmRiZmYgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZCAuZm9ybS1jb250cm9sLFxuLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kLXNob3J0IC5mb3JtLWNvbnRyb2wge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmM7XG59XG5cblxuLyogLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlICAqL1xuXG5cbi8qIC52YWxpbm9vcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnZhbGlub29yOjpiZWZvcmV7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0gKi9cblxuLmt0LWluYm94IC5rdC1pbmJveF9fbGlzdCAua3QtaW5ib3hfX2l0ZW1zIC5rdC1pbmJveF9faXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGVsZXRlLWJ0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNztcbiAgICBjb2xvcjogZ3JleTtcbiAgICBsaW5lLWhlaWdodDogNTlweDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgIWltcG9ydGFudDtcbn1cblxuLmRlbGV0ZS1idG4gaSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XG4gICAgY29sb3I6ICM1ODY3ZGQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IDhweCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuXG4vKiAuZGVsZXRlLWJ0biBpe1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNztcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlICFpbXBvcnRhbnQ7XG59Ki9cblxuLmJ0bi1zZWNvbmRhcnkudGhlbWUtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLmJ0bi1sYWJlbC1wcmltYXJ5IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiY2ZmO1xufVxuXG4uZGVsZXRlLWJ0biBpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ua3QtaW5ib3hfX2l0ZW06aG92ZXIgLmRlbGV0ZS1idG4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubW9kYWwtYm9keS5taW4tc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ubW9kYWwtYm9keS5taW4tc2Nyb2xsOmhvdmVyIHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5tb2RhbC1ib2R5Lm1pbi1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNXB4O1xufVxuXG4ubW9kYWwtYm9keS5taW4tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLm1vZGFsLWJvZHkubWluLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICM1ODY3ZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ubW9kYWwtYm9keS5taW4tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2IzYmNmZjtcbn1cblxuLmt0LWluYm94X19kZXRhaWxzIHtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmZvbnQtMTYge1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuXG5cbi8qIE5ldyBEZXNpZ24gT0YgU2lkZSBCYXIgKi9cblxuLm5hbWUtYm94IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLm5hbWVzLXJlc3BvbnNlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm5hbWVzLXJlc3BvbnNlIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubmFtZXMtcmVzcG9uc2Ugc3BhbjpsYXN0LWNoaWxkIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaGVhZC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDEwMywgMjIxLCAwLjEpO1xuICAgIHBhZGRpbmc6IDNweCAxMHB4IDNweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiY2ZmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaGVhZC1idG4gaSB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJhY2tncm91bmQ6ICM1ODY3ZGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuLmRldmlkZXIge1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5wcmljZXZhbHVlcyB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YxZjFmMTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbn1cblxuLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgxKSxcbi50b3AtYm9yZGVyIC5wcmljZXZhbHVlczpudGgtY2hpbGQoMikge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuXG4udG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDMpLFxuLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZVxufVxuXG4ucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDIpLFxuLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uZG1zLWxpbmtzIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG59XG5cbi5kbXMtbGlua3MgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5weS0xMHB4IHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuXG4vKiBQcm9ncmVzcyBCYXIgKi9cblxuLnByb2dyZXNzX2JhciAucHJvLWJhciB7XG4gICAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCA5NyUpO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCBoc2xhKDAsIDAlLCAwJSwgMC4xKSBpbnNldDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzX2Jhcl90aXRsZSB7XG4gICAgY29sb3I6IGhzbCgyMTgsIDQlLCA1MCUpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0yOHB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzX251bWJlciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgODglKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDFzIGxpbmVhciAwcztcbn1cblxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3MtYmFyLWlubmVyOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNHB4O1xuICAgIGhlaWdodDogNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMXB4O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXI6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTRweDtcbiAgICB0b3A6IC01cHg7XG59XG5cbi5iZy10b2RheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MmJmMCAhaW1wb3J0YW50O1xufVxuXG4uc2lkZUluZm9iYXIgLmNsb3NlYnRuIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMjVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cblxuLyogLnBvcnRmb2xpby1zZWFyY2h7XG4gIHdpZHRoOiAzMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvc2VhcmNoaWNvbi5wbmcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyOyBcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZzogMTJweCAwcHggMTJweCAwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluLW91dDtcbn1cblxuLnBvcnRmb2xpby1zZWFyY2g6Zm9jdXMge1xuICB3aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4YTg4ODg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59ICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQge1xuICAgICAgICB3aWR0aDogODB2dztcbiAgICB9XG59XG5cbi5tYXQtaWNvbi5tYXQtcHJpbWFyeSB7XG4gICAgY29sb3I6ICMzNjk5ZmY7XG59XG5cbi5zY3JvbGxiYXIxIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMzdweCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYnJkci1nciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjZTFmNTtcbn1cblxuOjpuZy1kZWVwIC5kcm9wZG93bi1saXN0IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGV4dC1ob3Zlci1wcmltYXJ5LFxuLnRleHQtaG92ZXItcHJpbWFyeTpob3ZlcixcbmEudGV4dC1ob3Zlci1wcmltYXJ5LFxuYS50ZXh0LWhvdmVyLXByaW1hcnk6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UsIGJveC1zaGFkb3cgLjE1cyBlYXNlO1xufVxuXG4udGV4dC1ob3Zlci1wcmltYXJ5OmhvdmVyLFxuLnRleHQtaG92ZXItcHJpbWFyeTpob3ZlciBpLFxuYS50ZXh0LWhvdmVyLXByaW1hcnk6aG92ZXIsXG5hLnRleHQtaG92ZXItcHJpbWFyeTpob3ZlciBpIHtcbiAgICBjb2xvcjogIzM2OTlmZiAhaW1wb3J0YW50O1xufVxuXG4uZm9udC1ib2xkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5saC0yNSB7XG4gICAgbGluZS1oZWlnaHQ6IDIuNTtcbn1cblxuLnNpZGUtYmFyLWJveCBsaTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyAhaW1wb3J0YW50O1xufVxuXG4udy1jb250ZW50IHtcbiAgICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAtbW96LWZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0LmZvcm0tY29udHJvbC5hZGRfYXNzaWduX3Rhc2tfaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYi1yLTIwIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNHB4IDZweCAhaW1wb3J0YW50O1xufVxuXG4udy05MCB7XG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xufVxuXG4ub2ZmY2FudmFzIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCA5cHggLTNweCByZ2IoMCAwIDAgLyAyNSUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggOXB4IC0zcHggcmdiKDAgMCAwIC8gMjUlKTtcbn1cblxubWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5jdXJzb3ItcG9pbnRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5wdXQtZ3JvdXAtdGV4dD4ubWF0LWljb24tYnV0dG9uIHtcbiAgICBsaW5lLWhlaWdodDogMzVweCAhaW1wb3J0YW50O1xufVxuXG4uYmFkZ2UtaW1nIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBwYWRkaW5nOiAycHggMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uZmEtY29kZS1icmFuY2gge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgc2NhbGVYKC0xKTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm92ZXJsYXktY2FyZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5rdC1iYWRnZS5rdC1iYWRnZS0tdW5pZmllZC13YXJuaW5nMSB7XG4gICAgY29sb3I6ICNGM0FBMEY7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSAxODQgMzQgLyAyNSUpO1xufVxuLmJkZy1uZXcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjMgMTA0IDIzOCAvIDE1JSk7XG4gICAgY29sb3I6ICM3YjY4ZWU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5zcGFuLmNvdW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjOTg4NmViO1xuICAgIHBhZGRpbmc6IDBweCA0cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgY3Vyc29yOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5iZGctc3Vje1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDQgMjM4IDE5OCAvIDE1JSk7XG4gICAgY29sb3I6ICMxZGM5Yjc7XG59XG4uYmRnLXN1YyBzcGFuLmNvdW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjMWRjOWI3O1xufVxuLmJkZy13YXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAxNTQgNTQgLyAyMSUpO1xuICAgIGNvbG9yOiAjZGQ5NjAwO1xufVxuLmJkZy13YXIgc3Bhbi5jb3VudCB7XG4gICAgYmFja2dyb3VuZDogI2ZmYjgyMjtcbn1cbi5iZGctZGFue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzggMTA0IDEwNCAvIDE1JSk7XG4gICAgY29sb3I6ICNkYzM1NDU7XG59XG4uYmRnLWRhbiBzcGFuLmNvdW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xufVxuLmNvdW50LWxpc3QuY291bnQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59ICAgXG4udG9weS1maWx0ciAuZHJvcGRvd24tbWVudSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"] });


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