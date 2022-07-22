(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~_LayoutDashboard-project-assign-task-project-assign-task-module~_LayoutDashboard-project-unp~57ece1de"],{

/***/ "./src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProjectUnplannedTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectUnplannedTaskComponent", function() { return ProjectUnplannedTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Shared/components/confirm-dialog/confirm-dialog.component */ "./src/app/Shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var src_app_Models_assigntask_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Models/assigntask-dto */ "./src/app/_Models/assigntask-dto.ts");
/* harmony import */ var src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Models/completed-projects-dto */ "./src/app/_Models/completed-projects-dto.ts");
/* harmony import */ var src_app_Models_sub_task_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Models/sub-task-dto */ "./src/app/_Models/sub-task-dto.ts");
/* harmony import */ var src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Models/user-details-dto */ "./src/app/_Models/user-details-dto.ts");
/* harmony import */ var src_app_Models_category_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_Models/category-dto */ "./src/app/_Models/category-dto.ts");
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_Services/notification.service */ "./src/app/_Services/notification.service.ts");
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_Services/project-type.service */ "./src/app/_Services/project-type.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ "./src/app/_Services/bs-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
// import { ConeColumn } from '@amcharts/amcharts4/charts';
// import { number } from '@amcharts/amcharts4/core';
// import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
// import { createOfflineCompileUrlResolver } from '@angular/compiler';



















const _c0 = function (a0) { return { "bg-secondary": a0 }; };
function ProjectUnplannedTaskComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectUnplannedTaskComponent_li_14_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.Cat_Name = $event; })("keydown.enter", function ProjectUnplannedTaskComponent_li_14_Template_input_keydown_enter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.OnCategoryRename(item_r9.Category_ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_li_14_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r9 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.OnCategoryRename(item_r9.Category_ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_li_14_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r9 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.OnCat_Cancel(item_r9.Category_ID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_li_14_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r9 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.OnCategoryClick(item_r9.Category_ID, item_r9.Category_Name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-menu", 62, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_li_14_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r9 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.OnCategoryEdit_Click(item_r9.Category_ID, item_r9.Category_Name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_li_14_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r9 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.OnDeleteCategory(item_r9.Category_ID, item_r9.Category_Name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, item_r9.Category_ID == ctx_r0._Categoryid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "TextboxCat_", item_r9.Category_ID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.Cat_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "LabelCat_", item_r9.Category_ID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9.Category_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 9, item_r9.Created_DT), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.TaskCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r10)("hidden", ctx_r0.hideMenuOfCategory);
} }
function ProjectUnplannedTaskComponent_h5_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectUnplannedTaskComponent_div_36_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action Added To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "task_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectUnplannedTaskComponent_div_36_div_23_span_24_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_36_div_23_span_24_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const item1_r26 = ctx.$implicit; const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.OnEmployeeSelect(item1_r26.Emp_No, item_r19.Assign_Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item1_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item1_r26.Tm_DisplayName);
} }
function ProjectUnplannedTaskComponent_div_36_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_36_div_23_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.OnEditNameClick(item_r19.Task_Name, item_r19.Assign_Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_36_div_23_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33._Deletetask(item_r19.Assign_Id, item_r19.Task_Name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", 62, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_36_div_23_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.GetProjectTypeList(item_r19.Task_Name, item_r19.Assign_Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Assign Task/Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_36_div_23_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.ActionToProject_Click(item_r19.Task_Name, item_r19.Assign_Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "new_label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add Action To Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-menu", null, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProjectUnplannedTaskComponent_div_36_div_23_span_24_Template, 3, 1, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "div_", item_r19.Assign_Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.EmployeeList);
} }
function ProjectUnplannedTaskComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_36_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const item_r19 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.OnRadioClick(item_r19.Assign_Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectUnplannedTaskComponent_div_36_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42._taskName = $event; })("keydown.enter", function ProjectUnplannedTaskComponent_div_36_Template_input_keydown_enter_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.OnTask_Rename(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_36_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.OnTask_Rename(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_36_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const item_r19 = ctx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.onCancel(item_r19.Assign_Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProjectUnplannedTaskComponent_div_36_span_22_Template, 4, 0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProjectUnplannedTaskComponent_div_36_div_23_Template, 25, 3, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r19.TypeOfTask == "SUBTASK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "spnLabel_", item_r19.Assign_Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r19.Task_Name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "spanTextbox_", item_r19.Assign_Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2._taskName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 8, item_r19.Creation_Date, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19.TypeOfTask == "SUBTASK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19.TypeOfTask != "SUBTASK");
} }
function ProjectUnplannedTaskComponent_h5_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectUnplannedTaskComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_39_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const item_r46 = ctx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.On_Uncheck(item_r46.Assign_Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r46.Task_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 3, item_r46.Modified_DT, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r46.ToDo_Status, " ");
} }
function ProjectUnplannedTaskComponent_h5_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Action To Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectUnplannedTaskComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Standard Tasks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Action Added To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "task_alt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Assigned To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "task_alt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r49.Task_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r49.Task_Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 10, item_r49.Creation_Date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r49.Project_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r49.Assigned_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 12, item_r49.Modified_DT), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r49.Status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 14, item_r49.Start_Date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 16, item_r49.End_Date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r49.Remarks);
} }
function ProjectUnplannedTaskComponent_h5_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Assigned Task/Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectUnplannedTaskComponent_div_45_span_49_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_div_45_span_49_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const item_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.openInfo(item_r50.Project_Code, item_r50.Project_Name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r50.Project_Code, " ");
} }
function ProjectUnplannedTaskComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Assigned Task/Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "task_alt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ProjectUnplannedTaskComponent_div_45_span_49_Template, 5, 1, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Files Attached ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r50.Task_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r50.Task_Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r50.Project_type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 11, item_r50.Creation_Date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r50.AssignedTo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 13, item_r50.Modified_DT), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r50.Status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 15, item_r50.Start_Date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 17, item_r50.End_Date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r50.Project_Code != null && item_r50.Status != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r50.Remarks);
} }
class ProjectUnplannedTaskComponent {
    constructor(notifyService, ProjectTypeService, router, dialog, dateAdapter, BsService
    // ,_Id
    // ,_Name
    ) {
        // this._Id='0';
        // this._Name='NA';
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
        this._ObjAssigntaskDTO = new src_app_Models_assigntask_dto__WEBPACK_IMPORTED_MODULE_2__["AssigntaskDTO"]();
        this._ObjCompletedProj = new src_app_Models_completed_projects_dto__WEBPACK_IMPORTED_MODULE_3__["CompletedProjectsDTO"]();
        this.ObjUserDetails = new src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_5__["UserDetailsDTO"]();
        this.ObjSubTaskDTO = new src_app_Models_sub_task_dto__WEBPACK_IMPORTED_MODULE_4__["SubTaskDTO"]();
        this.ObjCategoryDTO = new src_app_Models_category_dto__WEBPACK_IMPORTED_MODULE_6__["CategoryDTO"]();
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
    //   // alert(1)
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
        this.GetTodoProjects();
        this.GetAssignFormEmployeeDropdownList();
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
    }
    GetAssigned_SubtaskProjects() {
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.CategoryId = this._Categoryid;
        this._ObjCompletedProj.Mode = 'Todo';
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            //console.log("Data---->", data);
            this.CategoryList = JSON.parse(data[0]['CategoryList']);
            this._TodoList = JSON.parse(data[0]['JsonData_Json']);
            this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
            this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
            this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
        });
    }
    GetTodoProjects() {
        this._ObjCompletedProj.PageNumber = 1;
        this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
        this._ObjCompletedProj.CategoryId = this._Categoryid;
        this._ObjCompletedProj.Mode = 'Todo';
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            //console.log("Data---->", data);
            this.CategoryList = JSON.parse(data[0]['CategoryList']);
            this._TodoList = JSON.parse(data[0]['JsonData_Json']);
            this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
            this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
            this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
            console.log(this.ActionedAssigned_Josn);
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
        const confirmDialog = this.dialog.open(src_app_Shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"], {
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
        // alert(this._SelectedEmpNo);
    }
    EmployeeOnDeselect(obj) {
        this._SelectedEmpNo = "";
        this.selectedEmployee = this._SelectedEmpNo;
    }
    // onEmpChange(selectedEmpNo) {
    //   this._SelectedEmpNo = selectedEmpNo;
    //   alert(this._SelectedEmpNo);
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
    }
    CallOnSubmitCategory() {
        console.log('A');
        debugger;
        // alert(this._selectedcatid + "-" + this._selectedcatname);
        this.OnCategoryClick(this._selectedcatid, this._selectedcatname);
    }
    OnSubmitCategory(CtgryName) {
        if (this.Mdl_CategoryName != "") {
            this._ObjAssigntaskDTO.TypeOfTask = "CategoryInsert";
            this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
            this._ObjAssigntaskDTO.CategoryName = CtgryName;
            this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe((data) => {
                //console.log(data);
                //this._TodoList = JSON.parse(data['TodoList']);
                this.GetTodoProjects();
                // this.CategoryList = JSON.parse(data['CategoryList']);
                let message = data['Message'];
                this.notifyService.showSuccess("Successfully", message);
                this.Mdl_CategoryName = "";
            });
        }
        else {
            this.notifyService.showInfo("Category Name Required", "");
        }
    }
    OnCategoryClick(C_id, C_Name) {
        // _Id = C_id;
        // _Name = C_Name;
        this._selectedcatname = C_Name;
        this._selectedcatid = C_id;
        document.getElementById("mysideInfobar").style.width = "0px";
        // alert(this._selectedcatname);
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
        this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
            //this.CategoryList = JSON.parse(data[0]['CategoryList']);
            this._TodoList = JSON.parse(data[0]['JsonData_Json']);
            this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
            this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
            this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
        });
    }
    closeInfo() {
        document.getElementById("mysideInfobar").style.width = "0px";
        this.clearFeilds();
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementById("prodetbar").style.width = "0px";
    }
    GetProjectTypeList(taskName, id) {
        this._taskName = taskName;
        this.task_id = id;
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
        //document.getElementById("mysideInfobar_AssignTask").style.width = "60%";
        this.router.navigate(["UnplannedTask/ActionToAssign/"]);
        document.getElementById("mysideInfobar").style.width = "60%";
    }
    detailsbar() {
        document.getElementById("prodetbar").style.width = "60%";
        document.getElementById("rightbar-overlay").style.display = "block";
    }
    ActionToProject_Click(taskName, Assignid) {
        this._taskName = taskName;
        this._AssignId = Assignid;
        this.BsService.SetNewAssignId(this._AssignId);
        this.BsService.SetNewAssignedName(this._taskName);
        this.router.navigate(["UnplannedTask/ActionToProject/"]);
        document.getElementById("mysideInfobar").style.width = "60%";
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
        // alert(this.selectedProjectCode)
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
            // alert(this.RACI_Autho)
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
        const confirmDialog = this.dialog.open(src_app_Shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"], {
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
        document.getElementById("mysideInfobar").style.width = "50%";
        // document.getElementById("rightbar-overlay").style.display = "block";
        //alert(pcode)
        // this.router.navigate(["UnplannedTask/ActionToProject/"]);
        this.router.navigate(["UnplannedTask/projectinfo/", pcode]);
    }
}
ProjectUnplannedTaskComponent.ɵfac = function ProjectUnplannedTaskComponent_Factory(t) { return new (t || ProjectUnplannedTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_8__["ProjectTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["DateAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_12__["BsServiceService"])); };
ProjectUnplannedTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectUnplannedTaskComponent, selectors: [["app-project-unplanned-task"]], decls: 66, vars: 15, consts: [[1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi", "kt-portlet--height-fluid"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], ["id", "tippy1", 1, "kt-portlet__head-title"], [1, "fas", "fa-registered", "mr-2", "text-primary"], [1, "col-lg-3"], [1, "sidebar", "scrollbar"], [1, "side-bar-box"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "add_assigned_task1", "mt-2"], [1, "form-group", "mb-0"], [1, "input-group"], [1, "input-group-prepend", "w-100"], [1, "btn", "btn-primary", "btn-sm", "lh-25", 3, "click"], [1, "la", "la-plus", "text-white", "mr-0"], ["type", "text", "placeholder", "Add category and press enter to submit", 1, "form-control", "add_assign_task_input", "brdr-gr", 3, "ngModel", "keydown.enter", "ngModelChange"], [1, "col-lg-9"], [2, "color", "lightgray"], [3, "hidden"], [1, "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid"], ["id", "kt_inbox", 1, "kt-inbox"], [1, "col-lg-12", "scrollbar1"], [4, "ngIf"], ["data-type", "inbox", 1, "kt-inbox__items"], ["class", "mb-2 card", 4, "ngFor", "ngForOf"], ["class", "card mb-2", 4, "ngFor", "ngForOf"], [1, "add_assigned_task-removeforcss", "mt-2", "pr-1"], ["id", "addbtn", 1, "btn", "btn-sm", "btn-primary", "font-weight-bold", "mr-2", "py-2", "px-3", "px-xxl-5", "text-white", "my-1", "float-right", "d-none"], [1, "la", "la-plus", "text-white", "mr-2"], ["id", "addtsk", 1, "input-group"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "btn", "btn-primary", "btn-sm", "lh-25", 3, "click"], ["type", "text", "aria-describedby", "basic-addon1", 1, "form-control", "add_assign_task_input", "brdr-gr", 3, "ngModel", "placeholder", "ngModelChange", "keydown.enter"], ["id", "rightbar-overlay", 3, "click"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], ["id", "prodetbar", 1, "sideInfobar", "animate-right"], [1, "p-4"], [1, "offcanvas-header", "d-flex", "align-items-center", "justify-content-between", "pb-2", "mb-3", "brdr-b"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-icon", "btn-hover-primary", "closebtn", 3, "click"], [1, "fa", "fa-times"], [1, "font-weight-bold", "m-0"], [3, "ngClass"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap"], [1, "kt-inbox__subject", "w-100", 2, "display", "none", 3, "id"], [1, "d-flex"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange", "keydown.enter"], ["id", "button-addon4", 1, "d-flex", "ml-3"], [1, "btn", "btn-secondary", "btn", "btn-sm", "py-0", "px-2", "mr-2", 3, "click"], [1, "fas", "fa-check", "text-info"], [1, "btn", "btn-secondary", "btn", "btn-sm", "py-0", "px-2", 3, "click"], [1, "fas", "fa-times", "text-dark"], [1, "d-flex", "flex-column", "align-items-cente", "py-2", "w-90"], [3, "id", "click"], [1, "text-dark-75", "font-weight-bold", "text-hover-primary", "font-size-lg", "project-title", "mb-2"], [1, "kt-badge", "kt-badge--dark", "kt-badge--inline", "w-content"], [1, ""], [1, "kt-badge", "kt-badge--info", "kt-badge--inline", "w-content"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", "matTooltip", "More", 3, "matMenuTriggerFor", "hidden"], ["color", "primary"], ["xPosition", "after"], ["menuCat", "matMenu"], ["mat-menu-item", "", "mat", "", 3, "click"], ["color", "primary", 1, "mr-2"], [1, "mb-2", "card"], [1, "card-body", "p-2", "Replied_border_left_true_NewProject", "mr-2"], ["data-type", "inbox", 1, "d-flex", "flex-wrap", "align-items-center", "my-1"], [1, "symbol", "symbol-60", "symbol-2by3", "flex-shrink-0", "m-auto"], [1, "kt-inbox__actions"], ["type", "radio", "name", "Subtask", 1, "subtask-radio", "mx-4", 3, "disabled", "click"], [1, "d-flex", "flex-column", "flex-grow-1", "my-lg-0", "my-2", "pr-3", "w-75"], [1, "text-dark-75", "font-weight-bolder", "text-hover-primary", "font-size-lg"], [1, "kt-inbox__subject", 3, "id"], [1, "kt-inbox__subject", 2, "display", "none", 3, "id"], ["type", "text", "autofocus", "", 1, "form-control", 2, "width", "78%", "height", "32px", 3, "ngModel", "ngModelChange", "keydown.enter"], ["id", "button-addon4", 1, "d-inline-block", "ml-3"], [1, "btn", "btn-primary", "btn", "btn-sm", "mr-2", 3, "click"], [1, "btn", "btn-secondary", "btn", "btn-sm", 3, "click"], [1, "mt-2"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-dark", "kt-badge-light-bold", "kt-badge--inline", "mr-2"], ["class", "kt-inbox__label kt-badge kt-badge--unified-primary kt-badge-light-bold kt-badge--inline", 4, "ngIf"], ["class", "d-flex align-items-center py-lg-0 py-2", 3, "id", 4, "ngIf"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-primary", "kt-badge-light-bold", "kt-badge--inline"], ["color", "primary", 1, "ml-2"], [1, "d-flex", "align-items-center", "py-lg-0", "py-2", 3, "id"], ["matTooltip", "Action Re-Name", 1, "mr-2", 3, "click"], ["matTooltip", "Delete Task", 1, "mr-2", 3, "click"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", "matTooltip", "More", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["AssignTo", "matMenu"], [4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"], [1, "card", "mb-2"], [1, "card-body", "p-2", "Replied_border_left_true_success", "mr-2"], ["type", "radio", "checked", "", 1, "subtask-radio", "mx-4", 3, "click"], [1, "kt-inbox__subject"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-success", "kt-badge-light-bold", "kt-badge--inline"], [1, "kt-inbox__datetime"], [1, "delete-btn"], [1, "card-body", "p-2", "Replied_border_left_true_underApprovals", "mr-2"], [1, "text-dark-75", "font-weight-bolder", "text-hover-primary", "font-size-lg", "ml-1"], [1, "kt-inbox__subject", "h5"], [1, "desc", "ml-2", "mb-2"], [1, "my-2"], [1, "kt-badge", "kt-hover--primary", "kt-bg-light-primary", "kt-badge--inline", "ver-m"], [1, "fa", "fa-clone", "mr-2"], ["data-toggle", "tooltip", "title", "Created Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge--unified-dark", "kt-badge-light-bold", "kt-badge--inline"], ["src", "../assets/icons/create2.png", "alt", "actiondate", 1, "badge-img"], ["color", "primary", 1, "ml-2", "mr-2"], ["data-toggle", "tooltip", "title", "Assigned Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge--unified-dark", "kt-badge-light-bold", "kt-badge--inline"], ["data-tippy-content", "Another Tooltip", 1, "kt-inbox__label", "kt-badge", "kt-badge", "kt-badge--unified-danger", "kt-badge-light-bold", "kt-badge--inline", "tippy3"], ["data-toggle", "tooltip", "title", "Start Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge", "kt-badge--unified-primary", "kt-badge-light-bold", "kt-badge--inline"], ["src", "../assets/icons/strat-prim.png", "alt", "actiondate", 1, "badge-img"], ["data-toggle", "tooltip", "title", "End Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge", "kt-badge--unified-primary", "kt-badge-light-bold", "kt-badge--inline"], ["src", "../assets/icons/end-prim.png", "alt", "actiondate", 1, "badge-img"], [1, "mt-1"], [1, "desc", "remks", "ml-2"], [1, "card-body", "p-2", "Replied_border_left_true_warning", "mr-2"], [1, "kt-inbox__subject", "h5", "mybutton"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-info", "kt-badge-light-bold", "kt-badge--inline"], ["color", "success", 1, "ml-2", "mr-2"], ["data-toggle", "tooltip", "title", "Assigned Date!", 1, "kt-inbox__label", "kt-badge", "kt-badge--unified-info", "kt-badge-light-bold", "kt-badge--inline"], ["src", "../assets/icons/create1.png", "alt", "actiondate", 1, "badge-img"], ["class", "kt-inbox__label kt-badge text-white kt-badge-light-bold bg-coral kt-badge--inline cursor-pointer", 3, "click", 4, "ngIf"], [1, "kt-inbox__label", "kt-badge", "kt-badge-light-bold", "kt-badge--inline", "cursor-pointer"], [1, "fas", "fa-link", "mr-2"], [1, "kt-inbox__label", "kt-badge", "text-white", "kt-badge-light-bold", "bg-coral", "kt-badge--inline", "cursor-pointer", 3, "click"], [1, "fas", "fa-code-branch", "mr-2"]], template: function ProjectUnplannedTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Runway Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProjectUnplannedTaskComponent_li_14_Template, 38, 13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_Template_button_click_19_listener() { return ctx.OnSubmitCategory(ctx.Mdl_CategoryName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ProjectUnplannedTaskComponent_Template_input_keydown_enter_21_listener() { return ctx.OnSubmitCategory(ctx.Mdl_CategoryName); })("ngModelChange", function ProjectUnplannedTaskComponent_Template_input_ngModelChange_21_listener($event) { return ctx.Mdl_CategoryName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ProjectUnplannedTaskComponent_h5_34_Template, 2, 0, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ProjectUnplannedTaskComponent_div_36_Template, 24, 11, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ProjectUnplannedTaskComponent_h5_37_Template, 2, 0, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ProjectUnplannedTaskComponent_div_39_Template, 21, 6, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ProjectUnplannedTaskComponent_h5_40_Template, 2, 0, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProjectUnplannedTaskComponent_div_42_Template, 58, 18, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ProjectUnplannedTaskComponent_h5_43_Template, 2, 0, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ProjectUnplannedTaskComponent_div_45_Template, 59, 19, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Add Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_Template_button_click_53_listener() { return ctx.EnterSubmit(ctx._Demotext); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectUnplannedTaskComponent_Template_input_ngModelChange_55_listener($event) { return ctx._Demotext = $event; })("keydown.enter", function ProjectUnplannedTaskComponent_Template_input_keydown_enter_55_listener() { return ctx.EnterSubmit(ctx._Demotext); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_Template_div_click_56_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectUnplannedTaskComponent_Template_a_click_62_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.CategoryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Mdl_CategoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.IfNoTaskFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.ShowTaskList_Div);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._CategoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._TodoList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._TodoList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._CompletedList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._CompletedList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ActionedSubtask_Json.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ActionedSubtask_Json);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ActionedAssigned_Josn.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ActionedAssigned_Josn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "Add task to @'", ctx._CategoryName, "' and press enter to submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._Demotext);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuItem"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]], styles: [".sidebar[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    \r\n    background-color: #fff;\r\n    \r\n}\r\n\r\n.scrollbar[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 138px);\r\n    overflow-y: auto;\r\n}\r\n\r\n\r\n\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 6px;\r\n}\r\n\r\n\r\n\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\r\n\r\n\r\n\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #ccc;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #ccc;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: black;\r\n    padding: 10px 16px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background-color: #e0e0e0;\r\n    color: rgb(48, 46, 46);\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\r\n    background-color: #f4f4f4;\r\n    color: rgb(48, 46, 46);\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\r\n    color: #3c3c3c;\r\n    font-weight: 500;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #484848;\r\n}\r\n\r\ndiv.content[_ngcontent-%COMP%] {\r\n    margin-left: 200px;\r\n    padding: 1px 16px;\r\n    height: 1000px;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .sidebar[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: auto;\r\n        position: relative;\r\n    }\r\n\r\n    .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        float: left;\r\n    }\r\n\r\n    div.content[_ngcontent-%COMP%] {\r\n        margin-left: 0;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        float: none;\r\n    }\r\n}\r\n\r\n\r\n\r\nh4[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n}\r\n\r\n.project-info-page[_ngcontent-%COMP%] {\r\n    letter-spacing: 0.4px;\r\n}\r\n\r\n.project-description[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #969696;\r\n    font-size: 13px;\r\n}\r\n\r\n.project-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #646464;\r\n    \r\n}\r\n\r\n.project-budget[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .project-duration[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    color: #969696;\r\n}\r\n\r\n.project-duration-bar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n.sideInfobar[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    right: 0;\r\n    background: #ffffff;\r\n    box-shadow: 0px 1px 9px -3px rgb(0 0 0 / 75%);\r\n    border-left: 1px solid #ffffff;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    overflow-y: auto;\r\n    z-index: 999;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    backface-visibility: hidden;\r\n    -webkit-backface-visibility: hidden;\r\n    \r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n    background-color: #f5f6fc;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #333;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 25px;\r\n    font-size: 20px;\r\n    margin-left: 50px;\r\n}\r\n\r\n.info-icon-cir[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #5867dd;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%] {\r\n    border-bottom: 0.07rem dashed #dedede;\r\n    padding: 6px;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%] {\r\n    border-bottom: 0.07rem dashed rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%] {\r\n    width: 270px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.side-bar-box[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    padding-left: 0px !important;\r\n}\r\n\r\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #f1f1f1;\r\n    font-weight: 400;\r\n}\r\n\r\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n    border-bottom: none\r\n}\r\n\r\n.subtask-list[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    border-bottom: 1px solid #f1f1f1;\r\n    padding: 7px 0 5px;\r\n}\r\n\r\n.subtask-list[_ngcontent-%COMP%]:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.subtask-radio[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-right: 15px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.subtask-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n}\r\n\r\n.subtask-list[_ngcontent-%COMP%]   p.subtask-list-title[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n}\r\n\r\n#accordionExample5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    margin-top: 15px;\r\n}\r\n\r\n.accordion.accordion-svg-icon[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:last-child   .card-body[_ngcontent-%COMP%] {\r\n    padding-left: 0px;\r\n}\r\n\r\n.accordion.accordion-light[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]:after {\r\n    left: 0px !important;\r\n    font-weight: 600;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.accordion.accordion-light[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\r\n    padding-left: 25px;\r\n    font-size: 16px;\r\n}\r\n\r\n.text-Rejected[_ngcontent-%COMP%] {\r\n    color: #E6747A !important;\r\n}\r\n\r\n.text-underApproval[_ngcontent-%COMP%] {\r\n    color: #98c7bf !important;\r\n}\r\n\r\n.text-CompleteRejected[_ngcontent-%COMP%] {\r\n    color: #D83C3C !important;\r\n}\r\n\r\n.text-underApp[_ngcontent-%COMP%] {\r\n    color: #702c72e7 !important;\r\n}\r\n\r\n.text-Todo[_ngcontent-%COMP%] {\r\n    color: #45F495 !important;\r\n}\r\n\r\n.text-Completed[_ngcontent-%COMP%] {\r\n    color: #41D37B !important;\r\n}\r\n\r\ninput.largerCheckbox[_ngcontent-%COMP%] {\r\n    width: 13px;\r\n    height: 13px;\r\n}\r\n\r\n.textarea[_ngcontent-%COMP%] {\r\n    height: 381px;\r\n}\r\n\r\n.kt-checkbox[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    margin-bottom: inherit;\r\n}\r\n\r\n.assigned_task[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    padding: 10px;\r\n    box-shadow: 0 0 5px #ccc;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.assigned_task[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n    font-weight: 500;\r\n}\r\n\r\n.assigned_task[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .add_assigned_task[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    margin-right: 8px;\r\n    color: #646c9a;\r\n}\r\n\r\n\r\n\r\n.add_assign_task_input[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    border-color: #fff;\r\n    padding: 0.65rem 0.5rem;\r\n}\r\n\r\n.input-group-shdw[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 10px #b3bcff;\r\n}\r\n\r\n.add_assigned_task[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 8px;\r\n    right: 8px;\r\n}\r\n\r\n.add_assign_task_input[_ngcontent-%COMP%] {\r\n    height: calc(1.5em + 1.3rem + 8px);\r\n}\r\n\r\n.add_assigned_task[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   span.input-group-text[_ngcontent-%COMP%] {\r\n    padding-left: 2px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.add_assigned_task[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n    margin-right: 0px;\r\n}\r\n\r\n.curser-pointer[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    padding-left: 0px;\r\n}\r\n\r\n.scrollbar[_ngcontent-%COMP%]   .assigned_task[_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.project-active[_ngcontent-%COMP%] {\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n.kt-widget12[_ngcontent-%COMP%]   .kt-widget12__content[_ngcontent-%COMP%]   .kt-widget12__item[_ngcontent-%COMP%] {\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.list-icon-color[_ngcontent-%COMP%] {\r\n    color: #969696\r\n}\r\n\r\n.loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\r\n    background: #0dc5c1;\r\n    animation: load1 1s infinite ease-in-out;\r\n    width: 1em;\r\n    height: 4em;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%] {\r\n    color: #0dc5c1;\r\n    text-indent: -9999em;\r\n    margin: 88px auto;\r\n    position: relative;\r\n    font-size: 11px;\r\n    transform: translateZ(0);\r\n    animation-delay: -0.16s;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    top: 0;\r\n    content: '';\r\n}\r\n\r\n.loader[_ngcontent-%COMP%]:before {\r\n    left: -1.5em;\r\n    animation-delay: -0.32s;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%]:after {\r\n    left: 1.5em;\r\n}\r\n\r\n@keyframes load1 {\r\n\r\n    0%,\r\n    80%,\r\n    100% {\r\n        box-shadow: 0 0;\r\n        height: 4em;\r\n    }\r\n\r\n    40% {\r\n        box-shadow: 0 -2em;\r\n        height: 5em;\r\n    }\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 200px;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\r\n    border-radius: 2px;\r\n}\r\n\r\n\r\n\r\n.shareddetails.dropdown-menu[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    height: auto;\r\n    max-height: 400px;\r\n    padding: 10px;\r\n    top: 38px !important;\r\n    left: auto !important;\r\n    right: 0px !important;\r\n    overflow-y: auto;\r\n}\r\n\r\n\r\n\r\n.shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n\r\n\r\n\r\n.shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\r\n\r\n\r\n\r\n.shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #ccc;\r\n}\r\n\r\n\r\n\r\n.shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n}\r\n\r\n.ngx-pagination[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n}\r\n\r\n#backBtn[_ngcontent-%COMP%]:hover {\r\n    background-color: #0073e6;\r\n    color: white;\r\n}\r\n\r\n#Mdl_closebtn[_ngcontent-%COMP%]:hover {\r\n    background-color: #dc3545;\r\n    color: white\r\n}\r\n\r\n.text-warning-1[_ngcontent-%COMP%] {\r\n    background-color: #ffe0a7;\r\n    color: #FFA800;\r\n    width: auto;\r\n    padding: 4px 8px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.text-danger-1[_ngcontent-%COMP%] {\r\n    color: #F64E60;\r\n    background-color: #FFE2E5;\r\n    width: auto;\r\n    padding: 4px 8px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%], .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-up[_ngcontent-%COMP%] {\r\n    border-top: 7px solid #adadad !important;\r\n    border-left: 7px solid transparent !important;\r\n    border-right: 7px solid transparent !important\r\n}\r\n\r\n.multiselect-dropdown[_ngcontent-%COMP%] {\r\n    width: 80px !important;\r\n}\r\n\r\n.kt-todo__details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background: none;\r\n    font-size: 16px;\r\n    outline: none !important;\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 30px;\r\n    width: 30px;\r\n    background-color: #f5f6fc;\r\n    border: 1px solid #b3bcff;\r\n    color: #5867dd;\r\n    transition: all 0.3s ease;\r\n    cursor: pointer;\r\n    margin: 0 8px 0 0;\r\n    border-radius: 0;\r\n    border-radius: 4px;\r\n}\r\n\r\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon[_ngcontent-%COMP%] {\r\n    height: 18px;\r\n    width: 18px;\r\n}\r\n\r\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%] {\r\n    height: 25px;\r\n    width: 25px;\r\n}\r\n\r\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n    fill: #5867dd;\r\n}\r\n\r\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    fill: #5867dd;\r\n}\r\n\r\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    fill: #fff;\r\n}\r\n\r\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n    fill: #fff;\r\n}\r\n\r\n.kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover, .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%] {\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: #ccc;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%]   .favourite.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    color: #ffc107;\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-color: #d6d6d6;\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.success[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    box-shadow: -5px 0px 1px #1dc9b7\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.warning[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #ffb822\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.info[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #2786fb\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.danger[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #F58A8B\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.UnderApprovals[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #BD838C\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.ForwardUnderApproval[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #E0B1D7\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.completeUnderApproval[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #98c7bf\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.newProject[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #98c7bf\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.projecthold[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #C0B5DC\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.projectComRejected[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #e6c947\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.projectholded[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #C0B5DC\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.NewprojectRejected[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #C0B5DC\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.HoldunderApp[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #a85098\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.DeadlineExtended[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #E0B1D7\r\n}\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.EnactiveUnderApp[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #E0B1D7\r\n}\r\n\r\n.delayDays[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n    transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\r\n    fill: #5E5F63;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\r\n    padding: 0.2rem 20px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.mail-dropdown[_ngcontent-%COMP%] {\r\n    width: 800px;\r\n    max-width: 100%;\r\n}\r\n\r\n.mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: top;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n    min-height: 60px;\r\n}\r\n\r\n.kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\r\n    width: 150px;\r\n}\r\n\r\n.dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    border: 1px solid #ccc !important;\r\n    border-radius: 4px;\r\n}\r\n\r\n.kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\r\n    background-color: transparent !important;\r\n    color: #74788D !important;\r\n    cursor: auto;\r\n}\r\n\r\n.kt-nav__link-text[_ngcontent-%COMP%]:hover {\r\n    color: #74788D !important;\r\n}\r\n\r\n.kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\r\n    background-color: rgba(154, 100, 142, 0.2);\r\n    color: #333 !important;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\r\n    color: #333;\r\n}\r\n\r\n.kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n    background: rgb(195, 195, 195);\r\n}\r\n\r\n\r\n\r\n.kt-quick-panel2[_ngcontent-%COMP%] {\r\n    width: 650px !important;\r\n}\r\n\r\n.kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\r\n    right: -660px;\r\n    left: auto;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 6px;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #F1F1F1;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #ccc;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\r\n    background-color: #FFFFFF !important;\r\n}\r\n\r\n.chatcount[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    margin-left: -15px;\r\n    margin-top: -10px;\r\n}\r\n\r\n.kt-badge.kt-badge--dark[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n    background: #8C8D92;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n    transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\r\n    fill: #5E5F63;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\r\n    padding: 0.2rem 20px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.kt-font-ReplyRequired[_ngcontent-%COMP%] {\r\n    color: #a6c !important;\r\n}\r\n\r\n.mail-dropdown[_ngcontent-%COMP%] {\r\n    width: 800px;\r\n    max-width: 100%;\r\n}\r\n\r\n.mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: top;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n    min-height: 60px;\r\n}\r\n\r\n.kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\r\n    width: 150px;\r\n}\r\n\r\n.dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    border: 1px solid #ccc !important;\r\n    border-radius: 4px;\r\n}\r\n\r\n.kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\r\n    background-color: transparent !important;\r\n    color: #74788D !important;\r\n    cursor: auto;\r\n}\r\n\r\n.kt-nav__link-text[_ngcontent-%COMP%]:hover {\r\n    color: #74788D !important;\r\n}\r\n\r\n.kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\r\n    background-color: rgba(154, 100, 142, 0.2);\r\n    color: #333 !important;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\r\n    color: #333;\r\n}\r\n\r\n.kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n    background: rgb(195, 195, 195);\r\n}\r\n\r\n\r\n\r\n.kt-quick-panel2[_ngcontent-%COMP%] {\r\n    width: 650px !important;\r\n}\r\n\r\n.kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\r\n    right: -660px;\r\n    left: auto;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 6px;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #F1F1F1;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #ccc;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background: none;\r\n    outline: none !important;\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 35px;\r\n    width: 35px;\r\n    background-color: #FFFFFF;\r\n    transition: all 0.3s ease;\r\n    cursor: pointer;\r\n    margin: 0;\r\n    border-radius: 0;\r\n    border-radius: 4px;\r\n}\r\n\r\n.kt-badge.kt-badge--inline[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    width: auto;\r\n    padding: 0.15rem 0.75rem;\r\n    border-radius: 2px;\r\n    margin-left: 4px;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%] {\r\n    padding: 17px;\r\n    width: 243px;\r\n}\r\n\r\n\r\n\r\n.Replied_border_left_true_warning[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #ffb822;\r\n}\r\n\r\n.Replied_border_left_true_primary[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #95bed9;\r\n}\r\n\r\n.Replied_border_left_true_success[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #3CB371;\r\n}\r\n\r\n.Replied_border_left_true_Danger[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #F58A8B;\r\n}\r\n\r\n.Replied_border_left_true_hold[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #c0b5dc\r\n}\r\n\r\n.Replied_border_left_true_rejected[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #f5c293;\r\n}\r\n\r\n.Replied_border_left_true_underApprovals[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #BD838C;\r\n}\r\n\r\n.Replied_border_left_true_forwardUnderApproval[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #E0B1D7;\r\n}\r\n\r\n.Replied_border_left_true_completeUnderApproval[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #98c7bf;\r\n}\r\n\r\n.Replied_border_left_true_projectHold[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #C0B5DC;\r\n}\r\n\r\n.Replied_border_left_true_NewProject[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #3699ff;\r\n}\r\n\r\n.Replied_border_left_true_DeadlineExtended[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #E0B1D7;\r\n}\r\n\r\n.Replied_border_left_true_HoldunderApp[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #a85098;\r\n}\r\n\r\n.Replied_border_left_true_NewToDo[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #5088a8;\r\n}\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%] {\r\n    margin-left: -17px;\r\n}\r\n\r\n.icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-right: 15px !important;\r\n    z-index: 2;\r\n}\r\n\r\n.icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n    height: 18px;\r\n    text-align: center;\r\n    font-size: 10px;\r\n    font-weight: 700;\r\n    color: #fff;\r\n    background: #5867dd;\r\n    border: 1px solid #5867dd;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: -11px;\r\n    right: -11px;\r\n    z-index: 3;\r\n}\r\n\r\n.fa-clone[_ngcontent-%COMP%]{\r\n    padding: 4px 0px;\r\n    font-size: 13px;\r\n}\r\n\r\n.desc[_ngcontent-%COMP%]{\r\n        color: grey;\r\n        font-size: 13px;\r\n        font-weight: 400;\r\n}\r\n\r\n.remks[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%] {\r\n    margin-top: 0px !important;\r\n}\r\n\r\n.multiselect-dropdown[_ngcontent-unj-c40][_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-unj-c40][_ngcontent-%COMP%] {\r\n    width: 150px !important;\r\n}\r\n\r\n\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n    background-color: #f5f6fc;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #333;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n\r\n.info-icon-cir[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #5867dd;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%] {\r\n    border-bottom: 0.07rem dashed #dedede;\r\n    padding: 6px;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%] {\r\n    border-bottom: 0.07rem dashed rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.kt-inbox__datetime[_ngcontent-%COMP%] {\r\n    font-size: 13.5px !important;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%] {\r\n    width: 270px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.count-height[_ngcontent-%COMP%] {\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n}\r\n\r\n\r\n\r\n.count-height[_ngcontent-%COMP%]   .justify-content-between[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n\r\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 3px;\r\n}\r\n\r\n\r\n\r\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\r\n\r\n\r\n\r\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #f1f1f1;\r\n}\r\n\r\n\r\n\r\n.count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #ccc;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:checked ~ span[_ngcontent-%COMP%] {\r\n    border-color: #0073e6;\r\n}\r\n\r\n.kt-checkbox[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:after {\r\n    border: solid #0073e6;\r\n}\r\n\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown[_ngcontent-%COMP%] {\r\n    position: static !important;\r\n}\r\n\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    width: 60%;\r\n    \r\n    top: 20px !important;\r\n    left: -22px !important;\r\n}\r\n\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    border-bottom: 15px solid #fff;\r\n    border-right: 17px solid transparent;\r\n    border-left: 17px solid transparent;\r\n    position: absolute;\r\n    top: -15px;\r\n    left: 32px;\r\n    z-index: 10;\r\n}\r\n\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    border-bottom: 17px solid #ccc;\r\n    border-right: 19px solid transparent;\r\n    border-left: 19px solid transparent;\r\n    position: absolute;\r\n    top: -17px;\r\n    left: 30px;\r\n    z-index: 8;\r\n}\r\n\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu1[_ngcontent-%COMP%]   .filter-box[_ngcontent-%COMP%] {\r\n    width: 33.3333%;\r\n    display: inline-block;\r\n}\r\n\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\r\n    width: 3%;\r\n}\r\n\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\r\n    width: 4%;\r\n}\r\n\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\r\n    width: 33%;\r\n}\r\n\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\r\n    width: 10%;\r\n}\r\n\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\r\n    width: 10%;\r\n}\r\n\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\r\n    width: 15%;\r\n}\r\n\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(7), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7) {\r\n    width: 10%;\r\n}\r\n\r\n#project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(8), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8) {\r\n    width: 15%;\r\n}\r\n\r\n.kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n    \r\n    cursor: pointer;\r\n}\r\n\r\n.kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n    border: 1px solid #d6dbff;\r\n    border-radius: 5px;\r\n}\r\n\r\n.show_entries[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 3px;\r\n    background-color: #fff;\r\n}\r\n\r\n.show_entries[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n    \r\n    border: 2px solid rgba(88, 103, 221, 0.3);\r\n    color: #5867dd;\r\n    font-weight: bold;\r\n}\r\n\r\n.count-btn[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    padding: 0px 10px;\r\n    font-weight: 700;\r\n    color: rgb(88, 88, 88);\r\n    font-size: 14px;\r\n    line-height: 25px;\r\n}\r\n\r\n\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__toolbar[_ngcontent-%COMP%]   .kt-inbox__search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    height: 44px;\r\n    border: none;\r\n    background-color: #f2f3f7;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: stretch;\r\n    width: 100% !important;\r\n}\r\n\r\n.dropdown-menu-md.bg-ground[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #fff;\r\n    width: 25vw;\r\n    box-shadow: none;\r\n    border: 1px solid #d6dbff !important;\r\n    margin-top: 5px;\r\n}\r\n\r\n.dropdown-menu-md.bg-ground[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    background-color: #f5f6fc;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%]   .kt-inbox__items[_ngcontent-%COMP%]   .kt-inbox__item[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.delete-btn[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    background-color: #f2f3f7;\r\n    color: grey;\r\n    line-height: 59px;\r\n    padding: 0 20px;\r\n    transition: all 2s ease !important;\r\n}\r\n\r\n.delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    background: none;\r\n    font-size: 16px;\r\n    outline: none !important;\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    height: 30px;\r\n    width: 30px;\r\n    background-color: #f5f6fc;\r\n    border: 1px solid #b3bcff;\r\n    color: #5867dd;\r\n    transition: all 0.3s ease;\r\n    cursor: pointer;\r\n    margin: 10px 8px 0 0;\r\n    border-radius: 0;\r\n    border-radius: 4px;\r\n    padding: 5px;\r\n    text-align: center;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n\r\n\r\n.btn-secondary.theme-btn[_ngcontent-%COMP%] {\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n}\r\n\r\n.btn.btn-label-primary[_ngcontent-%COMP%] {\r\n    border: 1px solid #b3bcff;\r\n}\r\n\r\n.delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n}\r\n\r\n.kt-inbox__item[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.modal-body.min-scroll[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    max-height: 300px;\r\n    overflow-y: hidden;\r\n}\r\n\r\n.modal-body.min-scroll[_ngcontent-%COMP%]:hover {\r\n    overflow-y: scroll;\r\n}\r\n\r\n.modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n\r\n.modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\r\n\r\n.modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #5867dd;\r\n    border-radius: 8px;\r\n}\r\n\r\n.modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #b3bcff;\r\n}\r\n\r\n.kt-inbox__details[_ngcontent-%COMP%] {\r\n    margin-top: 0px !important;\r\n}\r\n\r\n.font-16[_ngcontent-%COMP%] {\r\n    font-size: 16px !important;\r\n}\r\n\r\n\r\n\r\n.name-box[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-size: 9px;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    letter-spacing: 2px;\r\n    border-radius: 50%;\r\n    line-height: 30px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.names-response[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    text-align: left;\r\n}\r\n\r\n.names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\r\n    display: block;\r\n    font-size: 10px;\r\n    font-weight: 600;\r\n}\r\n\r\n.names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\r\n    font-weight: 600;\r\n}\r\n\r\n.head-btn[_ngcontent-%COMP%] {\r\n    background-color: rgba(88, 103, 221, 0.1);\r\n    padding: 3px 10px 3px 5px;\r\n    border-radius: 2rem;\r\n    border: 1px solid #b3bcff;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n}\r\n\r\n.head-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #5867dd;\r\n    color: #fff;\r\n    line-height: 25px;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    margin-right: 3px;\r\n}\r\n\r\n.devider[_ngcontent-%COMP%] {\r\n    height: 1px;\r\n    width: 100%;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n.pricevalues[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n    padding-bottom: 10px;\r\n    border-right: 1px solid #f1f1f1;\r\n    border-bottom: 1px solid #f1f1f1;\r\n}\r\n\r\n.top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(1), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(2) {\r\n    border-top: 1px solid #f1f1f1;\r\n}\r\n\r\n.top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(3), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\r\n    border-bottom: none\r\n}\r\n\r\n.pricevalues[_ngcontent-%COMP%]:nth-child(2), .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\r\n    border-right: none;\r\n}\r\n\r\n.dms-links[_ngcontent-%COMP%] {\r\n    list-style-type: disc;\r\n}\r\n\r\n.dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-decoration: underline;\r\n    font-weight: 600;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.py-10px[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .pro-bar[_ngcontent-%COMP%] {\r\n    background: hsl(0, 0%, 97%);\r\n    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;\r\n    height: 4px;\r\n    margin-bottom: 12px;\r\n    margin-top: 30px;\r\n    position: relative;\r\n    text-align: left;\r\n}\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress_bar_title[_ngcontent-%COMP%] {\r\n    color: hsl(218, 4%, 50%);\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    position: relative;\r\n    top: -28px;\r\n    z-index: 1;\r\n}\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress_number[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%] {\r\n    background-color: hsl(0, 0%, 88%);\r\n    display: block;\r\n    width: 0;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transition: width 1s linear 0s;\r\n}\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    background-color: hsl(0, 0%, 100%);\r\n    border-radius: 50%;\r\n    width: 4px;\r\n    height: 4px;\r\n    position: absolute;\r\n    right: 1px;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    width: 14px;\r\n    height: 14px;\r\n    background-color: inherit;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    right: -4px;\r\n    top: -5px;\r\n}\r\n\r\n.bg-today[_ngcontent-%COMP%] {\r\n    background-color: #342bf0 !important;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #333;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 25px;\r\n    font-size: 20px;\r\n    margin-left: 50px;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .dropdown-menu-md.bg-ground[_ngcontent-%COMP%] {\r\n        width: 80vw;\r\n    }\r\n}\r\n\r\n.mat-icon.mat-primary[_ngcontent-%COMP%] {\r\n    color: #3699ff;\r\n}\r\n\r\n.scrollbar1[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 178px);\r\n    overflow: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n.brdr-gr[_ngcontent-%COMP%] {\r\n    border: 1px solid #dce1f5;\r\n}\r\n\r\n  .dropdown-list {\r\n    overflow: hidden;\r\n}\r\n\r\n.text-hover-primary[_ngcontent-%COMP%], .text-hover-primary[_ngcontent-%COMP%]:hover, a.text-hover-primary[_ngcontent-%COMP%], a.text-hover-primary[_ngcontent-%COMP%]:hover {\r\n    transition: color .15s ease, background-color .15s ease, border-color .15s ease, box-shadow .15s ease;\r\n}\r\n\r\n.text-hover-primary[_ngcontent-%COMP%]:hover, .text-hover-primary[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], a.text-hover-primary[_ngcontent-%COMP%]:hover, a.text-hover-primary[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    color: #3699ff !important;\r\n}\r\n\r\n.font-bolder[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.lh-25[_ngcontent-%COMP%] {\r\n    line-height: 2.5;\r\n}\r\n\r\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    transform: scale(0.95);\r\n    transition: transform .2s !important;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] {\r\n    transition: transform .2s !important;\r\n}\r\n\r\n.w-content[_ngcontent-%COMP%] {\r\n    width: -webkit-fit-content !important;\r\n    width: -moz-fit-content !important;\r\n    width: fit-content !important;\r\n}\r\n\r\ninput.form-control.add_assign_task_input[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    font-weight: bold;\r\n}\r\n\r\n.b-r-20[_ngcontent-%COMP%] {\r\n    border-radius: 20px !important;\r\n    padding: 4px 6px !important;\r\n}\r\n\r\n.w-90[_ngcontent-%COMP%] {\r\n    width: 90% !important;\r\n}\r\n\r\n.offcanvas[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    box-shadow: 0px 1px 9px -3px rgb(0 0 0 / 25%);\r\n}\r\n\r\nmat-icon[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n\r\n.cursor-pointer[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.input-group-text[_ngcontent-%COMP%] > .mat-icon-button[_ngcontent-%COMP%] {\r\n    line-height: 35px !important;\r\n}\r\n\r\n.badge-img[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    padding: 2px 0px;\r\n    margin-right: 4px;\r\n}\r\n\r\n.fa-code-branch[_ngcontent-%COMP%] {\r\n    transform: rotate(180deg) scaleX(-1);\r\n    vertical-align: middle;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX0xheW91dERhc2hib2FyZC9wcm9qZWN0LXVucGxhbm5lZC10YXNrL3Byb2plY3QtdW5wbGFubmVkLXRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCOztBQUdBLFVBQVU7O0FBRVY7SUFDSSxVQUFVO0FBQ2Q7O0FBR0EsVUFBVTs7QUFFVjtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFHQSxXQUFXOztBQUVYO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFHQSxvQkFBb0I7O0FBRXBCO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7QUFDSjs7QUFHQSxnQ0FBZ0M7O0FBRWhDO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtB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OztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvX0xheW91dERhc2hib2FyZC9wcm9qZWN0LXVucGxhbm5lZC10YXNrL3Byb2plY3QtdW5wbGFubmVkLXRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAvKiB3aWR0aDogMzAwcHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xyXG59XHJcblxyXG4uc2Nyb2xsYmFyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEzOHB4KTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcblxyXG4vKiB3aWR0aCAqL1xyXG5cclxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDZweDtcclxufVxyXG5cclxuXHJcbi8qIFRyYWNrICovXHJcblxyXG4uc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG5cclxuLyogSGFuZGxlICovXHJcblxyXG4uc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG5cclxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG5cclxuLnNpZGViYXIgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNpZGViYXIgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgIGNvbG9yOiByZ2IoNDgsIDQ2LCA0Nik7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICBjb2xvcjogcmdiKDQ4LCA0NiwgNDYpO1xyXG59XHJcblxyXG4uc2lkZWJhciAucHJvamVjdC10aXRsZSB7XHJcbiAgICBjb2xvcjogIzNjM2MzYztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5kLWZsZXggcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzQ4NDg0ODtcclxufVxyXG5cclxuZGl2LmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMXB4IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDEwMDBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlYmFyIGEge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIC5zaWRlYmFyIGEge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIE1vcmUgRGV0YWlscyBDb21wb25lbnRzIENTUyAqL1xyXG5cclxuaDQge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5oNSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWluZm8tcGFnZSB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIC5kLWZsZXggc3BhbiB7XHJcbiAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnByb2plY3QtZGVzY3JpcHRpb24gcCB7XHJcbiAgICBjb2xvcjogIzY0NjQ2NDtcclxuICAgIC8qIGZvbnQtc2l6ZTogMTRweDsgKi9cclxufVxyXG5cclxuLnByb2plY3QtYnVkZ2V0IGg2LFxyXG4ucHJvamVjdC1kdXJhdGlvbiBoNiB7XHJcbiAgICBjb2xvcjogIzk2OTY5NjtcclxufVxyXG5cclxuLnByb2plY3QtZHVyYXRpb24tYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLyogPT09IFNpZGViYXIgPT09ICovXHJcblxyXG4uc2lkZUluZm9iYXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA5cHggLTNweCByZ2IoMCAwIDAgLyA3NSUpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC8qIHBhZGRpbmctdG9wOiA2MHB4OyAqL1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmt0LXBvcnRsZXRfX2hlYWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5jbG9zZWJ0biB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWljb24tY2lyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjNTg2N2RkO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgI2RlZGVkZTtcclxuICAgIHBhZGRpbmc6IDZweDtcclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtLmRhcmsge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG5cclxuLyogLmt0LWluYm94X19kYXRldGltZXtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxuXHJcbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbSAua3Qtd2lkZ2V0MV9faW5mbyAua3Qtd2lkZ2V0MV9fdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC50aXRsZS1zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uc2lkZS1iYXItYm94IHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaWRlLWJhci1ib3ggbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uc2lkZS1iYXItYm94IGxpOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZVxyXG59XHJcblxyXG4uc3VidGFzay1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgIHBhZGRpbmc6IDdweCAwIDVweDtcclxufVxyXG5cclxuLnN1YnRhc2stbGlzdDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5zdWJ0YXNrLXJhZGlvIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uc3VidGFzay1saXN0IHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnN1YnRhc2stbGlzdCBwLnN1YnRhc2stbGlzdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4jYWNjb3JkaW9uRXhhbXBsZTUgLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLmFjY29yZGlvbi1zdmctaWNvbiAuY2FyZDpsYXN0LWNoaWxkIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24uYWNjb3JkaW9uLWxpZ2h0IC5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZTphZnRlciB7XHJcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLmFjY29yZGlvbi5hY2NvcmRpb24tbGlnaHQgLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRleHQtUmVqZWN0ZWQge1xyXG4gICAgY29sb3I6ICNFNjc0N0EgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtdW5kZXJBcHByb3ZhbCB7XHJcbiAgICBjb2xvcjogIzk4YzdiZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1Db21wbGV0ZVJlamVjdGVkIHtcclxuICAgIGNvbG9yOiAjRDgzQzNDICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXVuZGVyQXBwIHtcclxuICAgIGNvbG9yOiAjNzAyYzcyZTcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtVG9kbyB7XHJcbiAgICBjb2xvcjogIzQ1RjQ5NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1Db21wbGV0ZWQge1xyXG4gICAgY29sb3I6ICM0MUQzN0IgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXQubGFyZ2VyQ2hlY2tib3gge1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbn1cclxuXHJcbi50ZXh0YXJlYSB7XHJcbiAgICBoZWlnaHQ6IDM4MXB4O1xyXG59XHJcblxyXG4ua3QtY2hlY2tib3gge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogaW5oZXJpdDtcclxufVxyXG5cclxuLmFzc2lnbmVkX3Rhc2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNjY2M7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYXNzaWduZWRfdGFzayBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5hc3NpZ25lZF90YXNrIGksXHJcbi5hZGRfYXNzaWduZWRfdGFzayBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGNvbG9yOiAjNjQ2YzlhO1xyXG59XHJcblxyXG5cclxuLyogLmlucHV0LWdyb3VwLXRleHQsICovXHJcblxyXG4uYWRkX2Fzc2lnbl90YXNrX2lucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwLjY1cmVtIDAuNXJlbTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXNoZHcge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2IzYmNmZjtcclxufVxyXG5cclxuLmFkZF9hc3NpZ25lZF90YXNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmFkZF9hc3NpZ25fdGFza19pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAxLjNyZW0gKyA4cHgpO1xyXG59XHJcblxyXG4uYWRkX2Fzc2lnbmVkX3Rhc2sgLmlucHV0LWdyb3VwLWFwcGVuZCBzcGFuLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5hZGRfYXNzaWduZWRfdGFzayAuaW5wdXQtZ3JvdXAtYXBwZW5kIC5pbnB1dC1ncm91cC10ZXh0IGkge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uY3Vyc2VyLXBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnNjcm9sbGJhciAuYXNzaWduZWRfdGFzazpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4ua3Qtd2lkZ2V0MTIgLmt0LXdpZGdldDEyX19jb250ZW50IC5rdC13aWRnZXQxMl9faXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG5cclxuLyogVGVzdGluZyAqL1xyXG5cclxuXHJcbi8qICNsb2FkaW5neyBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gIGxlZnQ6IDUwJTsgXHJcbiAgdG9wOiA1MCU7IFxyXG4gIHotaW5kZXg6IDE7IFxyXG4gIHdpZHRoOiAxNTBweDsgXHJcbiAgaGVpZ2h0OiAxNTBweDsgXHJcbiAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7IFxyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyBcclxuICBib3JkZXItcmFkaXVzOiA1MCU7IFxyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjsgXHJcbiAgd2lkdGg6IDEyMHB4OyBcclxuICBoZWlnaHQ6IDEyMHB4OyBcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyBcclxuICB9IFxyXG4gICAgXHJcbiAgQGtleWZyYW1lcyBzcGluIHsgXHJcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9IFxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gXHJcbiAgfSAqL1xyXG5cclxuLmxpc3QtaWNvbi1jb2xvciB7XHJcbiAgICBjb2xvcjogIzk2OTY5NlxyXG59XHJcblxyXG4ubG9hZGVyLFxyXG4ubG9hZGVyOmJlZm9yZSxcclxuLmxvYWRlcjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGRjNWMxO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQxIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkMSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgIHdpZHRoOiAxZW07XHJcbiAgICBoZWlnaHQ6IDRlbTtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgICBjb2xvcjogIzBkYzVjMTtcclxuICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xyXG4gICAgbWFyZ2luOiA4OHB4IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbn1cclxuXHJcbi5sb2FkZXI6YmVmb3JlLFxyXG4ubG9hZGVyOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG59XHJcblxyXG4ubG9hZGVyOmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAtMS41ZW07XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XHJcbn1cclxuXHJcbi5sb2FkZXI6YWZ0ZXIge1xyXG4gICAgbGVmdDogMS41ZW07XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkMSB7XHJcblxyXG4gICAgMCUsXHJcbiAgICA4MCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDA7XHJcbiAgICAgICAgaGVpZ2h0OiA0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgNDAlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIC0yZW07XHJcbiAgICAgICAgaGVpZ2h0OiA1ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZDEge1xyXG5cclxuICAgIDAlLFxyXG4gICAgODAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwO1xyXG4gICAgICAgIGhlaWdodDogNGVtO1xyXG4gICAgfVxyXG5cclxuICAgIDQwJSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMmVtO1xyXG4gICAgICAgIGhlaWdodDogNWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4ubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG5cclxuLyogXHJcbiAgdGFibGUsIHRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAxNXB4O1xyXG4gIH0gKi9cclxuXHJcbi5zaGFyZWRkZXRhaWxzLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdG9wOiAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLyogd2lkdGggKi9cclxuXHJcbi5zaGFyZWRkZXRhaWxzLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcblxyXG4vKiBUcmFjayAqL1xyXG5cclxuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG5cclxuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG5cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG5cclxuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzU1NTtcclxufVxyXG5cclxuLm5neC1wYWdpbmF0aW9uIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuI2JhY2tCdG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNlNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI01kbF9jbG9zZWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgY29sb3I6IHdoaXRlXHJcbn1cclxuXHJcbi50ZXh0LXdhcm5pbmctMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMGE3O1xyXG4gICAgY29sb3I6ICNGRkE4MDA7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlci0xIHtcclxuICAgIGNvbG9yOiAjRjY0RTYwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTJFNTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLmRyb3Bkb3duLWRvd24sXHJcbi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5kcm9wZG93bi11cCB7XHJcbiAgICBib3JkZXItdG9wOiA3cHggc29saWQgI2FkYWRhZCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudFxyXG59XHJcblxyXG4ubXVsdGlzZWxlY3QtZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmt0LXRvZG9fX2RldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcclxuICAgIGNvbG9yOiAjNTg2N2RkO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMCA4cHggMCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24gc3ZnLmt0LXN2Zy1pY29uIHtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG59XHJcblxyXG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24ge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbi5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uIC5rdC1zdmctaWNvbiBnIFtmaWxsXSB7XHJcbiAgICBmaWxsOiAjNTg2N2RkO1xyXG59XHJcblxyXG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24gcGF0aCB7XHJcbiAgICBmaWxsOiAjNTg2N2RkO1xyXG59XHJcblxyXG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbjpob3ZlciBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24gcGF0aCxcclxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlIHN2Zy5rdC1zdmctaWNvbi5hZGQtaWNvbiBwYXRoIHtcclxuICAgIGZpbGw6ICNmZmY7XHJcbn1cclxuXHJcbi5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uOmhvdmVyIC5rdC1zdmctaWNvbiBnIFtmaWxsXSxcclxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlIC5rdC1zdmctaWNvbiBnIFtmaWxsXSB7XHJcbiAgICBmaWxsOiAjZmZmO1xyXG59XHJcblxyXG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbjpob3ZlcixcclxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUgLmZhdm91cml0ZSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSAuZmF2b3VyaXRlLmFjdGl2ZSBpLFxyXG4uY2FyZC10aXRsZSAuZmF2b3VyaXRlOmhvdmVyIGkge1xyXG4gICAgY29sb3I6ICNmZmMxMDc7XHJcbn1cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNkNmQ2ZDY7XHJcbn1cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5zdWNjZXNzIHtcclxuICAgIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzFkYzliNzsgKi9cclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDRweDsgKi9cclxuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjMWRjOWI3XHJcbn1cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci53YXJuaW5nIHtcclxuICAgIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2ZmYjgyMjsgICovXHJcbiAgICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggI2ZmYjgyMlxyXG59XHJcblxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIuaW5mbyB7XHJcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyNzg2ZmI7ICAqL1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICMyNzg2ZmJcclxufVxyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLmRhbmdlciB7XHJcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNGNThBOEI7ICAqL1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNGNThBOEJcclxufVxyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLlVuZGVyQXBwcm92YWxzIHtcclxuICAgIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0JEODM4QzsgICovXHJcbiAgICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggI0JEODM4Q1xyXG59XHJcblxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIuRm9yd2FyZFVuZGVyQXBwcm92YWwge1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3OyAqL1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNFMEIxRDdcclxufVxyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLmNvbXBsZXRlVW5kZXJBcHByb3ZhbCB7XHJcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5OGM3YmY7ICAqL1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICM5OGM3YmZcclxufVxyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLm5ld1Byb2plY3Qge1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOThjN2JmOyAgKi9cclxuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjOThjN2JmXHJcbn1cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5wcm9qZWN0aG9sZCB7XHJcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNDMEI1REM7ICAqL1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNDMEI1RENcclxufVxyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLnByb2plY3RDb21SZWplY3RlZCB7XHJcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNDMEI1REM7ICAqL1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNlNmM5NDdcclxufVxyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLnByb2plY3Rob2xkZWQge1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQzBCNURDOyAgKi9cclxuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjQzBCNURDXHJcbn1cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5OZXdwcm9qZWN0UmVqZWN0ZWQge1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQzBCNURDOyAgKi9cclxuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjQzBCNURDXHJcbn1cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5Ib2xkdW5kZXJBcHAge1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTg1MDk4OyAgKi9cclxuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjYTg1MDk4XHJcbn1cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5EZWFkbGluZUV4dGVuZGVkIHtcclxuICAgIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0UwQjFENzsgICovXHJcbiAgICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggI0UwQjFEN1xyXG59XHJcblxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIuRW5hY3RpdmVVbmRlckFwcCB7XHJcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7ICAqL1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNFMEIxRDdcclxufVxyXG5cclxuLmRlbGF5RGF5cyB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2FzaWRlIC5rdC1pbmJveF9fbmF2IC5rdC1uYXYgLmt0LW5hdl9faXRlbSAua3QtbmF2X19saW5rIGcgW2ZpbGxdIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuOTMsIDAuMzUsIDEsIDEpO1xyXG4gICAgZmlsbDogIzVFNUY2MztcclxufVxyXG5cclxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsge1xyXG4gICAgcGFkZGluZzogMC4ycmVtIDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5tYWlsLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haWwtZHJvcGRvd24gdGFibGUgdGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5rdC1xdWljay1wYW5lbCAua3QtcG9ydGxldC5rdC1wb3J0bGV0LS1oZWFkLWxnIC5rdC1wb3J0bGV0X19oZWFkIHtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5rdC1pbmJveF9faWNvbiAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1tZW51LXNtIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLXJlcGx5IHVsIGxpIGEgLmt0LW5hdl9fbGluay1pY29uIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19mb3JtIC5rdC1pbmJveF9fYm9keSAua3QtaW5ib3hfX3RvIC5rdC1pbmJveF9fZmllbGQgLmt0LWluYm94X19sYWJlbCB7XHJcbiAgICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9faW5wdXQgaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4ua3QtbmF2X19saW5rLW5vaG92ZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IGF1dG87XHJcbn1cclxuXHJcbi5rdC1uYXZfX2xpbmstdGV4dDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzc0Nzg4RCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU0LCAxMDAsIDE0MiwgMC4yKTtcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93LFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyB7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmt0LWJhZGdlLmt0LWJhZGdlLS11bmlmaWVkLWJyYW5kIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE5NSwgMTk1LCAxOTUpO1xyXG59XHJcblxyXG5cclxuLyogLmluYm94LXRleHQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn0gKi9cclxuXHJcbi5rdC1xdWljay1wYW5lbDIge1xyXG4gICAgd2lkdGg6IDY1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5rdC1xdWljay1wYW5lbC0tcmlnaHQgLmt0LXF1aWNrLXBhbmVsIHtcclxuICAgIHJpZ2h0OiAtNjYwcHg7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLyogd2lkdGggKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuXHJcbi8qIFRyYWNrICovXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNGMUYxRjE7XHJcbn1cclxuXHJcblxyXG4vKiBIYW5kbGUgKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG5cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG59XHJcblxyXG5cclxuLyogLnNvbWVjbGFzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0gKi9cclxuXHJcblxyXG4vKiA6aG9zdCguc29tZUNsYXNzKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59ICovXHJcblxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNoYXRjb3VudCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbi5rdC1iYWRnZS5rdC1iYWRnZS0tZGFyayB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGJhY2tncm91bmQ6ICM4QzhEOTI7XHJcbn1cclxuXHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2FzaWRlIC5rdC1pbmJveF9fbmF2IC5rdC1uYXYgLmt0LW5hdl9faXRlbSAua3QtbmF2X19saW5rIGcgW2ZpbGxdIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuOTMsIDAuMzUsIDEsIDEpO1xyXG4gICAgZmlsbDogIzVFNUY2MztcclxufVxyXG5cclxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsge1xyXG4gICAgcGFkZGluZzogMC4ycmVtIDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5rdC1mb250LVJlcGx5UmVxdWlyZWQge1xyXG4gICAgY29sb3I6ICNhNmMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haWwtZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFpbC1kcm9wZG93biB0YWJsZSB0ZCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmt0LXF1aWNrLXBhbmVsIC5rdC1wb3J0bGV0Lmt0LXBvcnRsZXQtLWhlYWQtbGcgLmt0LXBvcnRsZXRfX2hlYWQge1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxufVxyXG5cclxuLmt0LWluYm94X19pY29uIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLW1lbnUtc20ge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tcmVwbHkgdWwgbGkgYSAua3QtbmF2X19saW5rLWljb24ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2Zvcm0gLmt0LWluYm94X19ib2R5IC5rdC1pbmJveF9fdG8gLmt0LWluYm94X19maWVsZCAua3QtaW5ib3hfX2xhYmVsIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19mb3JtIC5rdC1pbmJveF9fYm9keSAua3QtaW5ib3hfX3RvIC5rdC1pbmJveF9fZmllbGQgLmt0LWluYm94X19pbnB1dCBpbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5rdC1uYXZfX2xpbmstbm9ob3Zlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM3NDc4OEQgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogYXV0bztcclxufVxyXG5cclxuLmt0LW5hdl9fbGluay10ZXh0OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmssXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTQsIDEwMCwgMTQyLCAwLjIpO1xyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93IHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLXVuaWZpZWQtYnJhbmQge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk1LCAxOTUsIDE5NSk7XHJcbn1cclxuXHJcblxyXG4vKiAuaW5ib3gtdGV4dCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufSAqL1xyXG5cclxuLmt0LXF1aWNrLXBhbmVsMiB7XHJcbiAgICB3aWR0aDogNjUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmt0LXF1aWNrLXBhbmVsLS1yaWdodCAua3QtcXVpY2stcGFuZWwge1xyXG4gICAgcmlnaHQ6IC02NjBweDtcclxuICAgIGxlZnQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG4vKiB3aWR0aCAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5cclxuLyogVHJhY2sgKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI0YxRjFGMTtcclxufVxyXG5cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcblxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbn1cclxuXHJcblxyXG4vKiAuc29tZWNsYXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufSAqL1xyXG5cclxuXHJcbi8qIDpob3N0KC5zb21lQ2xhc3MpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn0gKi9cclxuXHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2ljb24ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5rdC1iYWRnZS5rdC1iYWRnZS0taW5saW5lIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMC4xNXJlbSAwLjc1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG5cclxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUge1xyXG4gICAgcGFkZGluZzogMTdweDtcclxuICAgIHdpZHRoOiAyNDNweDtcclxufVxyXG5cclxuXHJcbi8qIFN0YXR1cyBDb2xvcnMgKi9cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfd2FybmluZyB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmI4MjI7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcHJpbWFyeSB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5NWJlZDk7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfc3VjY2VzcyB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMzQ0IzNzE7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfRGFuZ2VyIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0Y1OEE4QjtcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9ob2xkIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2MwYjVkY1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3JlamVjdGVkIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y1YzI5MztcclxufVxyXG5cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV91bmRlckFwcHJvdmFscyB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNCRDgzOEM7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfZm9yd2FyZFVuZGVyQXBwcm92YWwge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3O1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX2NvbXBsZXRlVW5kZXJBcHByb3ZhbCB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5OGM3YmY7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcHJvamVjdEhvbGQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQzBCNURDO1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX05ld1Byb2plY3Qge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMzY5OWZmO1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX0RlYWRsaW5lRXh0ZW5kZWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3O1xyXG59XHJcblxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX0hvbGR1bmRlckFwcCB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhODUwOTg7XHJcbn1cclxuXHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfTmV3VG9EbyB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM1MDg4YTg7XHJcbn1cclxuXHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2xpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xyXG59XHJcblxyXG4uaWNvbnMtZmlsdGVyIC5rdC10b2RvX19pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmljb25zLWZpbHRlciAua3QtdG9kb19faWNvbiBzcGFuIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzU4NjdkZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1ODY3ZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMXB4O1xyXG4gICAgcmlnaHQ6IC0xMXB4O1xyXG4gICAgei1pbmRleDogMztcclxufVxyXG4uZmEtY2xvbmV7XHJcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5kZXNje1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5yZW1rc3tcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbn1cclxuLyogLmljb25zLWZpbHRlciAua3QtdG9kb19faWNvbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNhMWY3ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudFxyXG59ICovXHJcblxyXG5cclxuLyogLmljb25zLWZpbHRlciAua3QtdG9kb19faWNvbjpob3ZlciBzcGFue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDEzNCwgMjUxLCAxKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnRcclxufSAqL1xyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXVsdGlzZWxlY3QtZHJvcGRvd25bX25nY29udGVudC11bmotYzQwXSAuZHJvcGRvd24tYnRuW19uZ2NvbnRlbnQtdW5qLWM0MF0ge1xyXG4gICAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKiA9PT0gU2lkZWJhciA9PT0gKi9cclxuXHJcbi5zaWRlSW5mb2JhciAua3QtcG9ydGxldF9faGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmNsb3NlYnRuIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmluZm8taWNvbi1jaXIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM1ODY3ZGQ7XHJcbn1cclxuXHJcbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjA3cmVtIGRhc2hlZCAjZGVkZWRlO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW0uZGFyayB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjA3cmVtIGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5rdC1pbmJveF9fZGF0ZXRpbWUge1xyXG4gICAgZm9udC1zaXplOiAxMy41cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtIC5rdC13aWRnZXQxX19pbmZvIC5rdC13aWRnZXQxX190aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uc2lkZUluZm9iYXIgLnRpdGxlLXNpZGViYXIge1xyXG4gICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5jb3VudC1oZWlnaHQge1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLyogLmNvdW50LWhlaWdodCAuanVzdGlmeS1jb250ZW50LWJldHdlZW57XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn0gKi9cclxuXHJcbi5jb3VudC1oZWlnaHQgLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIC5rdC1jaGVja2JveCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcblxyXG4vKiB3aWR0aCAqL1xyXG5cclxuLmNvdW50LWhlaWdodDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDNweDtcclxufVxyXG5cclxuXHJcbi8qIFRyYWNrICovXHJcblxyXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG5cclxuLyogSGFuZGxlICovXHJcblxyXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcblxyXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcblxyXG4uZHJvcGRvd24gLmt0LWNoZWNrYm94PmlucHV0OmNoZWNrZWR+c3BhbiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDczZTY7XHJcbn1cclxuXHJcbi5rdC1jaGVja2JveD5zcGFuOmFmdGVyIHtcclxuICAgIGJvcmRlcjogc29saWQgIzAwNzNlNjtcclxufVxyXG5cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTsgKi9cclxuICAgIHRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogLTIycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yaWdodDogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTVweDtcclxuICAgIGxlZnQ6IDMycHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTdweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDE5cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xN3B4O1xyXG4gICAgbGVmdDogMzBweDtcclxuICAgIHotaW5kZXg6IDg7XHJcbn1cclxuXHJcbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnUxIC5maWx0ZXItYm94IHtcclxuICAgIHdpZHRoOiAzMy4zMzMzJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMSksXHJcbiNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDEpIHtcclxuICAgIHdpZHRoOiAzJTtcclxufVxyXG5cclxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMiksXHJcbiNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgIHdpZHRoOiA0JTtcclxufVxyXG5cclxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMyksXHJcbiNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDMpIHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbn1cclxuXHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDQpLFxyXG4jcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg0KSB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg1KSxcclxuI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoNSkge1xyXG4gICAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNiksXHJcbiNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDYpIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDcpLFxyXG4jcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCg3KSB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg4KSxcclxuI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoOCkge1xyXG4gICAgd2lkdGg6IDE1JTtcclxufVxyXG5cclxuLmt0LXF1aWNrLXNlYXJjaCAua3QtcXVpY2stc2VhcmNoX19mb3JtIC5pbnB1dC1ncm91cC1wcmVwZW5kIC5pbnB1dC1ncm91cC10ZXh0LFxyXG4ua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3VwLWFwcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2ZmOyAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3VwIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmRiZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5zaG93X2VudHJpZXMgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zaG93X2VudHJpZXMgc2VsZWN0IHtcclxuICAgIC8qIHdpZHRoOiAxMDBweDsgKi9cclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoODgsIDEwMywgMjIxLCAwLjMpO1xyXG4gICAgY29sb3I6ICM1ODY3ZGQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvdW50LWJ0biB7XHJcbiAgICAvKiBoZWlnaHQ6IDI1cHg7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkOyAqL1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IHJnYig4OCwgODgsIDg4KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG5cclxuLyogU2VhcmNoIFByb2plY3RzICovXHJcblxyXG4ua3QtaW5ib3ggLmt0LWluYm94X190b29sYmFyIC5rdC1pbmJveF9fc2VhcmNoIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjc7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQsXHJcbi5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZC1zaG9ydCB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOWZmOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmRiZmYgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kIC5mb3JtLWNvbnRyb2wsXHJcbi5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZC1zaG9ydCAuZm9ybS1jb250cm9sIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmM7XHJcbn1cclxuXHJcblxyXG4vKiAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbi5hY3RpdmUgICovXHJcblxyXG5cclxuLyogLnZhbGlub29ye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udmFsaW5vb3I6OmJlZm9yZXtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn0gKi9cclxuXHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2xpc3QgLmt0LWluYm94X19pdGVtcyAua3QtaW5ib3hfX2l0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZGVsZXRlLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNztcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDU5cHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGVsZXRlLWJ0biBpIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcclxuICAgIGNvbG9yOiAjNTg2N2RkO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCA4cHggMCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcblxyXG4vKiAuZGVsZXRlLWJ0biBpe1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZSAhaW1wb3J0YW50O1xyXG59Ki9cclxuXHJcbi5idG4tc2Vjb25kYXJ5LnRoZW1lLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5idG4uYnRuLWxhYmVsLXByaW1hcnkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcclxufVxyXG5cclxuLmRlbGV0ZS1idG4gaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5rdC1pbmJveF9faXRlbTpob3ZlciAuZGVsZXRlLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm1vZGFsLWJvZHkubWluLXNjcm9sbCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkubWluLXNjcm9sbDpob3ZlciB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5Lm1pbi1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5Lm1pbi1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5Lm1pbi1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM1ODY3ZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5Lm1pbi1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNiM2JjZmY7XHJcbn1cclxuXHJcbi5rdC1pbmJveF9fZGV0YWlscyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvbnQtMTYge1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKiBOZXcgRGVzaWduIE9GIFNpZGUgQmFyICovXHJcblxyXG4ubmFtZS1ib3gge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLm5hbWVzLXJlc3BvbnNlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5uYW1lcy1yZXNwb25zZSBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm5hbWVzLXJlc3BvbnNlIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaGVhZC1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OCwgMTAzLCAyMjEsIDAuMSk7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweCAzcHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uaGVhZC1idG4gaSB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICM1ODY3ZGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbn1cclxuXHJcbi5kZXZpZGVyIHtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4ucHJpY2V2YWx1ZXMge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcclxufVxyXG5cclxuLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgxKSxcclxuLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgyKSB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjFmMTtcclxufVxyXG5cclxuLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgzKSxcclxuLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lXHJcbn1cclxuXHJcbi5wcmljZXZhbHVlczpudGgtY2hpbGQoMiksXHJcbi5wcmljZXZhbHVlczpudGgtY2hpbGQoNCkge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcblxyXG4uZG1zLWxpbmtzIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcclxufVxyXG5cclxuLmRtcy1saW5rcyBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ucHktMTBweCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLyogUHJvZ3Jlc3MgQmFyICovXHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm8tYmFyIHtcclxuICAgIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgOTclKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCBoc2xhKDAsIDAlLCAwJSwgMC4xKSBpbnNldDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzc19iYXJfdGl0bGUge1xyXG4gICAgY29sb3I6IGhzbCgyMTgsIDQlLCA1MCUpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTI4cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzc19udW1iZXIge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA4OCUpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBsaW5lYXIgMHM7XHJcbn1cclxuXHJcbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzLWJhci1pbm5lcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMXB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3MtYmFyLWlubmVyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTRweDtcclxuICAgIHRvcDogLTVweDtcclxufVxyXG5cclxuLmJnLXRvZGF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDJiZjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5jbG9zZWJ0biB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcblxyXG4vKiAucG9ydGZvbGlvLXNlYXJjaHtcclxuICB3aWR0aDogMzBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3NlYXJjaGljb24ucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHBhZGRpbmc6IDEycHggMHB4IDEycHggMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ucG9ydGZvbGlvLXNlYXJjaDpmb2N1cyB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4YTg4ODg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59ICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQge1xyXG4gICAgICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LWljb24ubWF0LXByaW1hcnkge1xyXG4gICAgY29sb3I6ICMzNjk5ZmY7XHJcbn1cclxuXHJcbi5zY3JvbGxiYXIxIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE3OHB4KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uYnJkci1nciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNlMWY1O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmRyb3Bkb3duLWxpc3Qge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRleHQtaG92ZXItcHJpbWFyeSxcclxuLnRleHQtaG92ZXItcHJpbWFyeTpob3ZlcixcclxuYS50ZXh0LWhvdmVyLXByaW1hcnksXHJcbmEudGV4dC1ob3Zlci1wcmltYXJ5OmhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UsIGJveC1zaGFkb3cgLjE1cyBlYXNlO1xyXG59XHJcblxyXG4udGV4dC1ob3Zlci1wcmltYXJ5OmhvdmVyLFxyXG4udGV4dC1ob3Zlci1wcmltYXJ5OmhvdmVyIGksXHJcbmEudGV4dC1ob3Zlci1wcmltYXJ5OmhvdmVyLFxyXG5hLnRleHQtaG92ZXItcHJpbWFyeTpob3ZlciBpIHtcclxuICAgIGNvbG9yOiAjMzY5OWZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb250LWJvbGRlciB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubGgtMjUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNTtcclxufVxyXG5cclxuLnNpZGUtYmFyLWJveCBsaTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udy1jb250ZW50IHtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogLW1vei1maXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0LmZvcm0tY29udHJvbC5hZGRfYXNzaWduX3Rhc2tfaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5iLXItMjAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogNHB4IDZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udy05MCB7XHJcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vZmZjYW52YXMge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCA5cHggLTNweCByZ2IoMCAwIDAgLyAyNSUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA5cHggLTNweCByZ2IoMCAwIDAgLyAyNSUpO1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLmN1cnNvci1wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXRleHQ+Lm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmFkZ2UtaW1nIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMnB4IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcblxyXG4uZmEtY29kZS1icmFuY2gge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSBzY2FsZVgoLTEpO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectUnplannedTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-unplanned-task',
                templateUrl: './project-unplanned-task.component.html',
                styleUrls: ['./project-unplanned-task.component.css']
            }]
    }], function () { return [{ type: src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }, { type: src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_8__["ProjectTypeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["DateAdapter"] }, { type: src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_12__["BsServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_Services/bs-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_Services/bs-service.service.ts ***!
  \*************************************************/
/*! exports provided: BsServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsServiceService", function() { return BsServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class BsServiceService {
    constructor() {
        this._Pcode = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._PName = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._AssignId = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._TaskName = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._typeoftask = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._projectCode = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._Authority = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.bs_projectCode = this._Pcode.asObservable();
        this.bs_ProjectName = this._PName.asObservable();
        this.bs_AssignId = this._AssignId.asObservable();
        this.bs_TaskName = this._TaskName.asObservable();
        this.bs_TypeofTask = this._typeoftask.asObservable();
        this.bs_SelectedProjectCode = this._projectCode.asObservable();
        this.bs_Authority = this._Authority.asObservable();
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
    setNewTypeofTask(typoftask) {
        this._typeoftask.next(typoftask);
    }
    setSelectedProjectCodeFromRunwayTask(pcode) {
        this._projectCode.next(pcode);
    }
    setProjectAuthoity(auth) {
        this._Authority.next(auth);
    }
}
BsServiceService.ɵfac = function BsServiceService_Factory(t) { return new (t || BsServiceService)(); };
BsServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BsServiceService, factory: BsServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
//# sourceMappingURL=default~_LayoutDashboard-project-assign-task-project-assign-task-module~_LayoutDashboard-project-unp~57ece1de.js.map