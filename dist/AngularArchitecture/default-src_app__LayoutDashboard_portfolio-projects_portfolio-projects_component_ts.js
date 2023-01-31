"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["default-src_app__LayoutDashboard_portfolio-projects_portfolio-projects_component_ts"],{

/***/ 6272:
/*!*************************************************!*\
  !*** ./src/app/Shared/date-format-pipe.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateFormatPipePipe": () => (/* binding */ DateFormatPipePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DateFormatPipePipe {
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago'; // singular (1 day ago)
                    }
                    else {
                        return counter + ' ' + i + 's ago'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }
}
DateFormatPipePipe.ɵfac = function DateFormatPipePipe_Factory(t) { return new (t || DateFormatPipePipe)(); };
DateFormatPipePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateAgo", type: DateFormatPipePipe, pure: true });


/***/ }),

/***/ 70476:
/*!*************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/portfolio-projects/portfolio-projects.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioProjectsComponent": () => (/* binding */ PortfolioProjectsComponent)
/* harmony export */ });
/* harmony import */ var src_app_Models_portfolio_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_Models/portfolio-dto */ 60198);
/* harmony import */ var src_app_Models_shareportfolio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/shareportfolio */ 85471);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ 63936);
/* harmony import */ var src_app_Models_status_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Models/status-dto */ 14360);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/core */ 19770);
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ 61049);
/* harmony import */ var src_app_Shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/components/confirm-dialog/confirm-dialog.component */ 49785);
/* harmony import */ var src_app_Models_dropdown_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_Models/dropdown-dto */ 79536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ 77585);
/* harmony import */ var src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_Services/link.service */ 33529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var src_app_Shared_date_format_pipe_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/Shared/date-format-pipe.pipe */ 6272);





//import { LoadingBarService } from '@ngx-loading-bar/core';
//Pie - Charts-------------------



//import { ItemsList } from '@ng-select/ng-select/lib/items-list';














const _c0 = ["closebutton"];
function PortfolioProjectsComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_ng_container_36_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r13.labelInprocess()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r0.HideStatusDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r0.CountInprocess, " InProcess");
} }
function PortfolioProjectsComponent_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_ng_container_37_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r15.labelDelay()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r1.HideStatusDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.CountDelay, " Delay");
} }
function PortfolioProjectsComponent_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "a", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_ng_container_38_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r17.labelCompleted()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r2.HideStatusDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r2.CountCompleted, " Completed");
} }
function PortfolioProjectsComponent_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "a", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_ng_container_39_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r19.labelNewProject()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r3.HideStatusDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r3.CountNewProject, " New Project");
} }
function PortfolioProjectsComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "a", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_ng_container_40_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r21.labelUA()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r4.HideStatusDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r4.CountAll_UA, " Under Approval's");
} }
function PortfolioProjectsComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "a", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_ng_container_41_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r23.labelProjectHold()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r5.HideStatusDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r5.CountProjectHold, " Project Hold");
} }
function PortfolioProjectsComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_ng_container_42_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r25.labelRejecteds()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r6.HideStatusDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r6.CountRejecteds, " Rejected's");
} }
function PortfolioProjectsComponent_ng_container_43_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "a", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_ng_container_43_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r27.labelToDoAchieved()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r7.HideStatusDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r7.Count_ToDoAchieved, " ToDo Achieved");
} }
function PortfolioProjectsComponent_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "a", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_ng_container_44_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r29.labelToDoCompleted()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r8.HideStatusDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r8.Count_ToDoCompleted, " ToDo Completed");
} }
function PortfolioProjectsComponent_div_57_ng_container_1_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span")(1, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_div_57_ng_container_1_span_8_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r64); const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r62._OpenMemosInfo(item1_r33.Project_Code, item1_r33.Project_Name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} }
function PortfolioProjectsComponent_div_57_ng_container_1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Developemt");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} }
function PortfolioProjectsComponent_div_57_ng_container_1_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item1_r33.ReportType);
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item1_r33.SubmissionType);
} }
function PortfolioProjectsComponent_div_57_ng_container_1_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, item1_r33.DeadLine, "dd-MM-yyyy"), "");
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_35_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 138)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("(", item1_r33.Delaydays, " Days)");
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, PortfolioProjectsComponent_div_57_ng_container_1_div_35_span_3_Template, 3, 1, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item1_r33.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Delaydays > 0);
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item1_r33.Status, " ");
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item1_r33.Status);
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item1_r33.Status);
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item1_r33.Status);
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item1_r33.Status);
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item1_r33.Status);
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item1_r33.Status, " ");
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item1_r33.Status, " ");
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item1_r33.Status, " ");
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item1_r33.Status);
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item1_r33.Status, " ");
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item1_r33.Status, " ");
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item1_r33.Status, " ");
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item1_r33.Status, " ");
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item1_r33.Status, " ");
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item1_r33.Status, " ");
} }
function PortfolioProjectsComponent_div_57_ng_container_1_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 150)(1, "a", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_div_57_ng_container_1_div_52_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r89); const item1_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r87.DeleteProject(item1_r33.Project_ID, item1_r33.Portfolio_ID, item1_r33.Project_Code, item1_r33.Project_Name, item1_r33.Created_By)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} }
const _c1 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) { return { "danger": a0, "success": a1, "warning": a2, "EnactiveUnderApp": a3, "ForwardUnderApproval": a4, "newProject": a5, "completeUnderApproval": a6, "projectComRejected": a7, "UnderApprovals": a8, "DeadlineExtended": a9, "HoldunderApp": a10, "projectholded": a11, "NewprojectRejected": a12, "projecthold": a13, "TodoAchieved": a14, "ToDoCompleted": a15, "NewTodo": a16 }; };
function PortfolioProjectsComponent_div_57_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 114)(2, "div", 115)(3, "div", 116)(4, "a", 117)(5, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_div_57_ng_container_1_Template_i_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r91); const item1_r33 = restoredCtx.$implicit; const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r90.openInfo2(item1_r33.Project_Code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "a", 119)(7, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_div_57_ng_container_1_Template_i_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r91); const item1_r33 = restoredCtx.$implicit; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r92.moreDetails(item1_r33.Project_Code)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, PortfolioProjectsComponent_div_57_ng_container_1_span_8_Template, 3, 0, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, PortfolioProjectsComponent_div_57_ng_container_1_ng_template_9_Template, 2, 0, "ng-template", null, 122, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 123)(12, "p", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 125)(15, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, PortfolioProjectsComponent_div_57_ng_container_1_div_18_Template, 3, 0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, PortfolioProjectsComponent_div_57_ng_container_1_ng_template_19_Template, 2, 1, "ng-template", null, 127, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 123)(22, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 125)(25, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, PortfolioProjectsComponent_div_57_ng_container_1_div_26_Template, 3, 1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](27, PortfolioProjectsComponent_div_57_ng_container_1_ng_template_27_Template, 3, 4, "ng-template", null, 129, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](30, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](33, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, PortfolioProjectsComponent_div_57_ng_container_1_div_35_Template, 4, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](36, PortfolioProjectsComponent_div_57_ng_container_1_div_36_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](37, PortfolioProjectsComponent_div_57_ng_container_1_div_37_Template, 4, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](38, PortfolioProjectsComponent_div_57_ng_container_1_div_38_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](39, PortfolioProjectsComponent_div_57_ng_container_1_div_39_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](40, PortfolioProjectsComponent_div_57_ng_container_1_div_40_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](41, PortfolioProjectsComponent_div_57_ng_container_1_div_41_Template, 4, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](42, PortfolioProjectsComponent_div_57_ng_container_1_div_42_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](43, PortfolioProjectsComponent_div_57_ng_container_1_div_43_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](44, PortfolioProjectsComponent_div_57_ng_container_1_div_44_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](45, PortfolioProjectsComponent_div_57_ng_container_1_div_45_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](46, PortfolioProjectsComponent_div_57_ng_container_1_div_46_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](47, PortfolioProjectsComponent_div_57_ng_container_1_div_47_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](48, PortfolioProjectsComponent_div_57_ng_container_1_div_48_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](49, PortfolioProjectsComponent_div_57_ng_container_1_div_49_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](50, PortfolioProjectsComponent_div_57_ng_container_1_div_50_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](51, PortfolioProjectsComponent_div_57_ng_container_1_div_51_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](52, PortfolioProjectsComponent_div_57_ng_container_1_div_52_Template, 3, 0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item1_r33 = ctx.$implicit;
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](10);
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](20);
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](28);
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunctionV"](35, _c1, [item1_r33.Status == "Delay", item1_r33.Status == "Completed", item1_r33.Status == "InProcess", item1_r33.Status == "Enactive Under Approval", item1_r33.Status == "Forward Under Approval", item1_r33.Status == "New Project", item1_r33.Status == "Completion Under Approval", item1_r33.Status == "Project Complete Rejected", item1_r33.Status == "Under Approval", item1_r33.Status == "Deadline Extend Under Approval", item1_r33.Status == "Project Hold Under Approval", item1_r33.Status == "Project Holded", item1_r33.Status == "New Project Rejected", item1_r33.Status == "Project Hold", item1_r33.Status == "ToDo Achieved", item1_r33.Status == "ToDo Completed", item1_r33.Status == "New Todo"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Link_Status == 1)("ngIfElse", _r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item1_r33.Project_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item1_r33.Exec_BlockName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.ReportType == null)("ngIfElse", _r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item1_r33.TM_DisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Exec_BlockName == "Standard Tasks" || item1_r33.Exec_BlockName == "Routine Tasks")("ngIfElse", _r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](30, 30, item1_r33.Created_DT, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](33, 33, item1_r33.Project_StartDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Status == "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Status == "Project Complete Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Status == "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Status == "Project Holded");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Status == "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Status == "New Todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Status == "Completion Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Status == "Forward Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Status == "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Status == "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Status == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Status == "Enactive Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Status == "Project Hold Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Status == "ToDo Achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item1_r33.Status == "ToDo Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r31.viewpreference != "View Only");
} }
function PortfolioProjectsComponent_div_57_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 153)(1, "div")(2, "div", 154)(3, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_div_57_div_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r93.populateForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Add Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_div_57_div_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r94); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r95.share_Users()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "i", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "i", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Shared Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r32.Share_preferences);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx_r32._btnShareDetails);
} }
function PortfolioProjectsComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PortfolioProjectsComponent_div_57_ng_container_1_Template, 53, 53, "ng-container", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "` ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, PortfolioProjectsComponent_div_57_div_5_Template, 11, 2, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](3, 5, ctx_r9._ProjectsListBy_Pid, ctx_r9._PortProjStatus), ctx_r9._SearchProjects));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r9._MessageIfNotOwner == "");
} }
const _c2 = function (a0) { return { "color": a0 }; };
function PortfolioProjectsComponent_tr_126_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "td")(6, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "td", 161)(9, "a", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_tr_126_Template_a_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r98); const item_r96 = restoredCtx.$implicit; const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r97.deleteSharedUsers(item_r96.Portfolio_ID, item_r96.EmployeeId, item_r96.SharedbyEmpNo)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r96.Shared_To, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r96.Shared_By, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](4, _c2, item_r96.Preferences === "Full Access" ? "#28a745" : "#dc3545"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r96.Preferences);
} }
function PortfolioProjectsComponent_div_147_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r99.Subject, " ");
} }
function PortfolioProjectsComponent_div_147_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
} if (rf & 2) {
    const item_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r99.Subject, " ");
} }
function PortfolioProjectsComponent_div_147_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 164)(1, "div", 165)(2, "h5", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_div_147_Template_h5_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r107); const item_r99 = restoredCtx.$implicit; const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r106.openUrl(item_r99.Url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, PortfolioProjectsComponent_div_147_div_3_Template, 3, 1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, PortfolioProjectsComponent_div_147_ng_template_4_Template, 2, 1, "ng-template", null, 166, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r99 = ctx.$implicit;
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r99.Attachment == true)("ngIfElse", _r102);
} }
const _c3 = function (a0) { return { "border-color": a0 }; };
class PortfolioProjectsComponent {
    constructor(service, notifyService, cdr, router, route, 
    // private loadingBar: LoadingBarService,
    _snackBar, dialog, BsService, _LinkService) {
        this.service = service;
        this.notifyService = notifyService;
        this.cdr = cdr;
        this.router = router;
        this.route = route;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.BsService = BsService;
        this._LinkService = _LinkService;
        this._raciDetails = true;
        this.selectedItems = [];
        // dropdownSettings_Status: IDropdownSettings = {};
        this.dropdownSettings = {};
        this.dropdownSettings_Emp = {};
        this.dropdownSettings_Cmp = {};
        this.dropdownSettings_Stat = {};
        this.dropdownSettings_Team = {};
        this.dropdownsettings_Page = {};
        this._SelectedEmployees = [];
        this.ngEmployeeDropdown2 = [];
        this._ExistingPortfolioOfProjects = [];
        //Sorting.....
        this.clicks = 0;
        this.A2Z = true;
        this.Z2A = false;
        this._loadChildComponent = false;
        this.dropdownSettings_Memo = {};
        //this.ObjUserDetails = new UserDetailsDTO();
        this.Obj_Portfolio_DTO = new src_app_Models_portfolio_dto__WEBPACK_IMPORTED_MODULE_0__.PortfolioDTO();
        this._objStatusDTO = new src_app_Models_status_dto__WEBPACK_IMPORTED_MODULE_3__.StatusDTO;
        this.ObjSharePortfolio = new src_app_Models_shareportfolio__WEBPACK_IMPORTED_MODULE_1__.Shareportfolio_DTO();
        this._objDropdownDTO = new src_app_Models_dropdown_dto__WEBPACK_IMPORTED_MODULE_7__.DropdownDTO();
    }
    ngOnInit() {
        this.Current_user_ID = localStorage.getItem('EmpNo');
        this.Project_Graph = "Graphs";
        this.Max50Char = true;
        this.pieBarCharts = true;
        this._btnShareDetails = true;
        this.route.paramMap.subscribe(params => {
            var id = params.get('portfolioId');
            this.Url_portfolioId = parseInt(id);
            this.BsService.setSelectedPortId(this.Url_portfolioId);
        });
        this.GetPortfolioProjectsByPid();
        this.router.navigate(["../portfolioprojects/" + this._Pid + "/"]);
    }
    GetPortfolioProjectsByPid() {
        this._PortFolio_Namecardheader = sessionStorage.getItem('portfolioname');
        this._Pid = this.Url_portfolioId;
        this.Current_user_ID = localStorage.getItem('EmpNo');
        this._PortfolioOwner = sessionStorage.getItem('PortfolioOwner');
        this._Portfolio_CreatedDT = sessionStorage.getItem('portfolioCDT');
        this._PortProjStatus = "";
        this._ShareDetailsList = [];
        // console.log(this._PortFolio_Namecardheader, this._Pid, this.Current_user_ID);
        // this._PortfolioListTable = false;
        this.PortfolioList = true;
        this.Obj_Portfolio_DTO.Portfolio_ID = this._Pid;
        //this._Pid = P_id;
        //this._PortFolio_Namecardheader = P_Name;
        this.Obj_Portfolio_DTO.Portfolio_Name = this._PortFolio_Namecardheader;
        //Get Projects
        this._ProjectsListBy_Pid = [];
        //this.LoadingBar_state.start();
        this.service.GetProjectsBy_portfolioId(this._Pid)
            .subscribe((data) => {
            this._MessageIfNotOwner = data[0]['message'];
            this._PortfolioDetailsById = JSON.parse(data[0]['PortfolioDetailsJson']);
            this._PortFolio_Namecardheader = this._PortfolioDetailsById[0]['Portfolio_Name'];
            this.Rename_PortfolioName = this._PortFolio_Namecardheader;
            this._PortfolioOwner = this._PortfolioDetailsById[0]['Portfolio_Owner'];
            this.createdBy = this._PortfolioDetailsById[0]['Created_By'];
            this._ProjectsListBy_Pid = JSON.parse(data[0]['JosnProjectsByPid']);
            debugger;
            console.log("Portfolio Projects---->", this._ProjectsListBy_Pid, this._PortfolioDetailsById);
            // this.filteredPortfolioProjects = this._ProjectsListBy_Pid;
            this._StatusCountDB = JSON.parse(data[0]['JsonStatusCount']);
            //console.log('JsonStatusCount------->', this._StatusCountDB);
            // this.LoadingBar_state.stop();
            this.TotalProjects = this._ProjectsListBy_Pid.length;
            var rez = {};
            this._ProjectsListBy_Pid.forEach(function (item) {
                rez[item.Status] ? rez[item.Status]++ : rez[item.Status] = 1;
            });
            // Countsall
            this.CountInprocess = rez['InProcess'];
            if (!this.CountInprocess) {
                this.CountInprocess = 0;
            }
            this.CountCompleted = rez['Completed'];
            if (!this.CountCompleted) {
                this.CountCompleted = 0;
            }
            this.CountDelay = rez['Delay'];
            if (!this.CountDelay) {
                this.CountDelay = 0;
            }
            this.CountNewProject = rez['New Project'];
            if (!this.CountNewProject) {
                this.CountNewProject = 0;
            }
            this.countnewprojecRejected = rez['New Project Rejected'];
            if (!this.countnewprojecRejected) {
                this.countnewprojecRejected = 0;
            }
            //Step One
            this.countprojectCompletelyRejected = rez['Project Complete Rejected'];
            if (!this.countprojectCompletelyRejected) {
                this.countprojectCompletelyRejected = 0;
            }
            this.CountForward = rez['Forward Under Approval'];
            if (!this.CountForward) {
                this.CountForward = 0;
            }
            this.CountCompletionUA = rez['Completion Under Approval'];
            if (!this.CountCompletionUA) {
                this.CountCompletionUA = 0;
            }
            this.CountDeadLineExtendedUA = rez['Deadline Extended Under Approval'];
            if (!this.CountDeadLineExtendedUA) {
                this.CountDeadLineExtendedUA = 0;
            }
            this.CountProjectHoldUA = rez['Project Hold Under Approval'];
            if (!this.CountProjectHoldUA) {
                this.CountProjectHoldUA = 0;
            }
            this.CountUnderApproval = rez['Under Approval'];
            if (!this.CountUnderApproval) {
                this.CountUnderApproval = 0;
            }
            this.CountProjectHold = rez['Project Hold'];
            if (!this.CountProjectHold) {
                this.CountProjectHold = 0;
            }
            this.Count_ToDoAchieved = rez['ToDo Achieved'];
            if (!this.Count_ToDoAchieved) {
                this.Count_ToDoAchieved = 0;
            }
            this.Count_ToDoCompleted = rez['ToDo Completed'];
            if (!this.Count_ToDoCompleted) {
                this.Count_ToDoCompleted = 0;
            }
            let ProjectHolded = rez['Project Holded'];
            if (!ProjectHolded) {
                ProjectHolded = 0;
            }
            let EnactiveUA = rez['Enactive Under Approval'];
            if (!EnactiveUA) {
                EnactiveUA = 0;
            }
            this.CountAll_UA = this.CountForward + this.CountCompletionUA + this.CountDeadLineExtendedUA + this.CountUnderApproval + this.CountProjectHoldUA + EnactiveUA;
            this.CountNewProject = this.CountNewProject;
            this.CountRejecteds = this.countprojectCompletelyRejected + this.countnewprojecRejected;
            //console.log("rejecteds Projects Count---->",this.CountRejecteds)
            this.CountProjectHold = this.CountProjectHold + ProjectHolded;
            //Returns Max Value
            this.MaxDelays = Math.max.apply(Math, this._ProjectsListBy_Pid.map(function (o) { return o.Delaydays; }));
            //let DelayStat:any = this._ProjectsListBy_Pid.map(function (o) { return o.Status=="Delay"; })
            if (this.MaxDelays > 0) {
                let action = "Close";
                this.snackBarRef = this._snackBar.open('Maximum Delay Days    ' + "  (" + this.MaxDelays + ')', action, {
                    duration: 2500,
                });
                //this.notifyService.showError(" Maximum Days Delay",this.MaxDelays);
                this.snackBarRef._open();
                // this._snackBar.open("Maximum Days Delay",this.MaxDelays);
            }
            this.dropdownSettings_Status = {
                singleSelection: true,
                idField: 'StatusCountDB',
                textField: 'StatusCountDB',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 1,
                allowSearchFilter: true
            };
            this.EmpDropdwn = Array.from(this._ProjectsListBy_Pid.reduce((m, t) => m.set(t.TM_DisplayName, t), new Map()).values());
            // this.EmpDropdwn = this.EmpDropdwn.sort((a, b) => (a.TM_DisplayName > b.TM_DisplayName) ? 1 : -1);
            this.dropdownSettings_forEmpChart = {
                singleSelection: true,
                idField: 'Emp_No',
                textField: 'TM_DisplayName',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 1,
                allowSearchFilter: true,
            };
            this._ShareDetailsList = JSON.parse(data[0]['SharedDetailsJson']);
            if (this._ShareDetailsList == 0) {
                this._btnShareDetails = true;
            }
            else {
                this._btnShareDetails = false;
            }
            this.PreferenceTpye = data[0]["PreferenceType"];
            this.With_Data = JSON.parse(data[0]['EmployeePreferenceJson']);
            this.Share_preferences = false;
            this.viewpreference = this.With_Data[0].Preferences;
            if (this.PreferenceTpye == 1) {
                if (this.With_Data[0].Preferences == "View Only") {
                    this.Share_preferences = true;
                }
                else if (this.With_Data[0].Preferences == "Full Access") {
                    this.Share_preferences = false;
                }
            }
            else if (this.PreferenceTpye == 0) {
                this.Share_preferences = false;
            }
        });
    }
    btnEdit() {
        this.Max50Char = true;
    }
    bttn_RACI() {
        this._raciDetails = !this._raciDetails;
    }
    clearSession() {
        localStorage.clear();
        sessionStorage.clear();
    }
    populateForm() {
        this.Obj_Portfolio_DTO.Portfolio_ID;
        let _Portid = this.Obj_Portfolio_DTO.Portfolio_ID;
        // localStorage.setItem('_PortfolioId', _Portid);
        //console.log("Populate Form Id", _Portid);
        localStorage.setItem('_PortfolioName', this._PortFolio_Namecardheader);
        // this.returnProjectsUrl = 'CreatePortfolio';
        // this.router.navigate([this.returnProjectsUrl]);
        let name = 'AddProjectsToPortfolio';
        var url = document.baseURI + name;
        var myurl = `${url}/${_Portid}`;
        var myWindow = window.open(myurl, _Portid);
        myWindow.focus();
    }
    RenamePortfolio() {
        if (this.Rename_PortfolioName.length > 50) {
            this.Max50Char = false;
        }
        else {
            this.Max50Char = true;
            this._objStatusDTO.Portfolio_Name = this.Rename_PortfolioName;
            this._objStatusDTO.Portfolio_ID = this._Pid;
            let _Pname = this._objStatusDTO.Portfolio_Name;
            let _Pid = this._objStatusDTO.Portfolio_ID;
            this.service.Portfolio_Rename(_Pname, _Pid).subscribe(data => {
                this._objStatusDTO.Emp_No = this.Current_user_ID;
                this.service.GetPortfolioStatus(this._objStatusDTO).subscribe((data) => {
                    // this.LoadingBar_state.start();
                    this._ListProjStat = data;
                    this._PortFolio_Namecardheader = _Pname;
                    // this.LoadingBar_state.stop();
                    this.notifyService.showSuccess(this.Rename_PortfolioName, "Successfully Renamed To : ");
                });
                //this.service.GetProjectsBy_portfolioId(this._Pid);
            });
        }
    }
    resetInputText() {
        this._portfolioName = '';
        this.alreadyExists = '';
        this.activeClass_NewPortfolio = false;
    }
    DropdownOpen() {
        this.activeClass_NewPortfolio = true;
    }
    GetCompanies() {
        this.service.GetCompanies().subscribe(res => {
            this.Company_List = res;
            // console.log(this.Company_List)
            this.dropdownSettings_Cmp = {
                singleSelection: true,
                idField: 'Com_No',
                textField: 'Com_Name',
                itemsShowLimit: 1,
                allowSearchFilter: true,
                closeDropDownOnSelection: true
            };
        });
    }
    OnEmpSelect(emp) {
        this._ErrorMessage_User = "";
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
    share_Users() {
        document.getElementById("shareBar").style.width = "400px";
        document.getElementById("rightbar-overlay").style.display = "block";
        this.GetCompanies();
        //SnackBar Dismiss
    }
    OnCompanySelect(CompNo) {
        this.ngEmployeeDropdown = null;
        this._ErrorMessage_comp = "";
        this._CompanyNo = CompNo['Com_No'];
        this.CompanyDropdown = this._CompanyNo;
        // let PortfolioId: any = localStorage.getItem('Pid');
        this.service.GetEmployeesby_CompNo(this._CompanyNo, this.Url_portfolioId)
            .subscribe((data) => {
            console.log("Portfolio Id-------->", this.Url_portfolioId, this._CompanyNo);
            console.log("-Employees--->", data);
            this.EmployeeList = data;
            //console.log("employee lst",this.EmployeeList);
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
    OnCmpDeselect() {
        //this.ngCompanyDropdown = [{}];
        this.ngCompanyDropdown = "";
    }
    EmpChartOnSelect(emp) {
        this.BarChartEmpNo = emp['Emp_No'];
        this.LoadBarChart();
        // this.barchartData = this.barchartData.filter(i => this.BarChartEmpNo.includes(i.Emp_No));
    }
    EmpChartOnDeselect() {
        this.BarChartEmpNo = null;
        this.LoadBarChart();
    }
    // Current_user_ID: string;
    GetUserDetails() {
        this.service.NewGetUserDetails(this.Current_user);
    }
    GetPortfolioByEmployee() {
        this.service.GetPortfolioByEmployee()
            .subscribe((data) => {
            this._PortfolioList = data;
            this._ExistingPortfolioOfProjects = this._PortfolioList;
            //console.log("Portfolio:", this._ExistingPortfolioOfProjects);
            this.cdr.detectChanges();
        });
    }
    _PortfolioListTable_Bttn() {
        this._ShareDetailsList = [];
        this._ProjectsListBy_Pid = [];
        // this._PortfolioListTable = true;
        this.PortfolioList = false;
        this._PreferencesList = [];
    }
    Radio_View_fullaccess(val) {
        this._ErrorMessage_Pref = "";
        this._Preferences = val;
    }
    share() {
        if (this.CompanyDropdown == undefined) {
            return this._ErrorMessage_comp = "* Please Select Company";
        }
        if (this.EmployeeDropdown == undefined) {
            return this._ErrorMessage_User = "* Please Select User Name";
        }
        if (this.preferences == null) {
            return this._ErrorMessage_Pref = "* Please Select Preferences";
        }
        if (this.Current_user_ID == this.EmployeeDropdown.replace(/\s/g, "")) {
            this.notifyService.showInfo("You Can't Share Portfolio by yourSelf", "");
        }
        else {
            if (this.CompanyDropdown != undefined && this.EmployeeDropdown != undefined && this.preferences != null) {
                this.ObjSharePortfolio.CompanyId = this._CompanyNo;
                this.ObjSharePortfolio.EmployeeId = this._SelectedEmpIds_String;
                this.ObjSharePortfolio.Portfolio_ID = this.Url_portfolioId;
                this.ObjSharePortfolio.Preference = this._Preferences;
                this.ObjSharePortfolio.Shared_By = this.Current_user_ID;
                this.ObjSharePortfolio.IsActive = true;
                this.service.SharePortfolio(this.ObjSharePortfolio);
                this.notifyService.showInfo("Successfully", "Portfolio Shared");
                this.GetPortfolioProjectsByPid();
                this.Close_ShareModel();
                this.PortfolioList = false;
                this.cdr.detectChanges();
            }
        }
    }
    Close_ShareModel() {
        this.CompanyDropdown = "";
        this.EmployeeDropdown = "";
        this._ErrorMessage_comp = "";
        this._ErrorMessage_User = "";
        this._ErrorMessage_Pref = "";
        this.preferences = null;
        // this.ngEmployeeDropdown.size == 0;
        this.ngCompanyDropdown = [];
        this.ngEmployeeDropdown = [];
        this.closebutton.nativeElement.click();
    }
    DeleteProject(Proj_id, port_id, Pcode, proj_Name, createdBy) {
        this.deletedBy = this.Current_user_ID;
        //if (createdBy == this.Current_user_ID) {
        let String_Text = 'Delete';
        const confirmDialog = this.dialog.open(src_app_Shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialogComponent, {
            data: {
                mode: 'delete',
                title1: 'Confirmation ',
                message1: proj_Name
            }
        });
        confirmDialog.afterClosed().subscribe(result => {
            if (result === true) {
                this.service.DeleteProject(Proj_id, port_id, Pcode, proj_Name, createdBy, this.deletedBy).subscribe((data) => {
                    this.service.GetProjectsBy_portfolioId(this._Pid)
                        .subscribe((data) => {
                        //console.log("qwerty" + data);
                        this._ProjectsListBy_Pid = JSON.parse(data[0]['JosnProjectsByPid']);
                        this._StatusCountDB = JSON.parse(data[0]['JsonStatusCount']);
                        this.TotalProjects = this._ProjectsListBy_Pid.length;
                        var rez = {};
                        this._ProjectsListBy_Pid.forEach(function (item) {
                            rez[item.Status] ? rez[item.Status]++ : rez[item.Status] = 1;
                        });
                        // this.CountInprocess = rez['InProcess'];
                        // this.CountDelay = rez['Delay'];
                        this.CountInprocess = rez['InProcess'];
                        if (!this.CountInprocess) {
                            this.CountInprocess = 0;
                        }
                        this.Count_ToDoAchieved = rez['ToDo Achieved'];
                        if (!this.Count_ToDoAchieved) {
                            this.Count_ToDoAchieved = 0;
                        }
                        this.Count_ToDoCompleted = rez['ToDo Completed'];
                        if (!this.Count_ToDoCompleted) {
                            this.Count_ToDoCompleted = 0;
                        }
                        this.CountCompleted = rez['Completed'];
                        if (!this.CountCompleted) {
                            this.CountCompleted = 0;
                        }
                        this.CountDelay = rez['Delay'];
                        if (!this.CountDelay) {
                            this.CountDelay = 0;
                        }
                        this.CountNewProject = rez['New Project'];
                        if (!this.CountNewProject) {
                            this.CountNewProject = 0;
                        }
                        this.countnewprojecRejected = rez['New Project Rejected'];
                        if (!this.countnewprojecRejected) {
                            this.countnewprojecRejected = 0;
                        }
                        //Step Two
                        this.countprojectCompletelyRejected = rez['Project Complete Rejected'];
                        if (!this.countprojectCompletelyRejected) {
                            this.countprojectCompletelyRejected = 0;
                        }
                        this.CountForward = rez['Forward Under Approval'];
                        if (!this.CountForward) {
                            this.CountForward = 0;
                        }
                        this.CountCompletionUA = rez['Completion Under Approval'];
                        if (!this.CountCompletionUA) {
                            this.CountCompletionUA = 0;
                        }
                        this.CountDeadLineExtendedUA = rez['Deadline Extended Under Approval'];
                        if (!this.CountDeadLineExtendedUA) {
                            this.CountDeadLineExtendedUA = 0;
                        }
                        this.CountProjectHoldUA = rez['Project Hold Under Approval'];
                        if (!this.CountProjectHoldUA) {
                            this.CountProjectHoldUA = 0;
                        }
                        this.CountUnderApproval = rez['Under Approval'];
                        if (!this.CountUnderApproval) {
                            this.CountUnderApproval = 0;
                        }
                        this.CountProjectHold = rez['Project Hold'];
                        if (!this.CountProjectHold) {
                            this.CountProjectHold = 0;
                        }
                        let ProjectHolded = rez['Project Hold'];
                        if (!ProjectHolded) {
                            ProjectHolded = 0;
                        }
                        let EnactiveUA = rez['Enactive Under Approval'];
                        if (!EnactiveUA) {
                            EnactiveUA = 0;
                        }
                        this.CountAll_UA = this.CountForward + this.CountCompletionUA + this.CountDeadLineExtendedUA + this.CountUnderApproval + this.CountProjectHoldUA + EnactiveUA;
                        this.CountNewProject = this.CountNewProject;
                        this.CountRejecteds = this.countprojectCompletelyRejected + this.countnewprojecRejected;
                        // console.log("rejecteds Projects Count---->", this.CountRejecteds)
                        this.CountProjectHold = this.CountProjectHold + ProjectHolded;
                        this.notifyService.showSuccess("Deleted successfully ", '');
                    });
                    this._objStatusDTO.Emp_No = this.Current_user_ID;
                    this.service.GetPortfolioStatus(this._objStatusDTO).subscribe((data) => {
                        this._ListProjStat = data;
                        this.cdr.detectChanges();
                    });
                });
            }
            else {
                this.notifyService.showInfo("Action Cancelled ", '');
            }
        });
        //}
        //  else {
        // this.notifyService.showError("Can't delete shared projects", 'Permission Denied ');
        //  }
    }
    deleteSharedUsers(p_id, empid, Sharedby) {
        var deleteProject = window.confirm('Are you sure you want to Remove ?');
        if (deleteProject) {
            //console.log(p_id, empid, Sharedby);
            this.service.Portfolio_ShareUsersDelete(p_id, empid, Sharedby).subscribe((data) => {
                this.service.GetProjectsBy_portfolioId(p_id)
                    .subscribe((data) => {
                    this._ShareDetailsList = JSON.parse(data[0]['SharedDetailsJson']);
                    //console.log(this._ShareDetailsList)
                    if (this._ShareDetailsList == 0) {
                        this._btnShareDetails = true;
                    }
                    else {
                        this._btnShareDetails = false;
                    }
                });
            });
            this.notifyService.showSuccess("Removed Successfully", '');
        }
        else {
            this.notifyService.showInfo("Action Cancelled", '');
        }
    }
    labelAll() {
        this._PortProjStatus = "";
    }
    labelInprocess() {
        this._PortProjStatus = "InProcess";
    }
    labelDelay() {
        this._PortProjStatus = "Delay";
    }
    labelCompleted() {
        this._PortProjStatus = "Completed";
    }
    labelNewProject() {
        this._PortProjStatus = "New Project";
        if (this._PortProjStatus.includes('New Project')) {
            this._PortProjStatus = 'New Project';
        }
    }
    labelRejecteds() {
        this._PortProjStatus = "Rejected";
        this._PortProjStatus.includes('Rejected');
        //this._PortProjStatus.includes('New Project Rejected');
    }
    labelToDoAchieved() {
        this._PortProjStatus = "ToDo Achieved";
        // this._PortProjStatus.includes('ToDo Achieved');
    }
    labelToDoCompleted() {
        this._PortProjStatus = "ToDo Completed";
    }
    labelUA() {
        this._PortProjStatus = "Under Approval";
        this._PortProjStatus.includes('Under Approval');
    }
    labelProjectHold() {
        this._PortProjStatus = "Project Hold";
        this._PortProjStatus.includes('Project Hold');
    }
    _SortProjectList() {
        this.clicks += 1;
        if (this.clicks != 1) {
            this.A2Z = true;
            this.Z2A = false;
            this.clicks = 0;
        }
        else {
            this.A2Z = false;
            this.Z2A = true;
        }
    }
    ProjectsGraphsClick() {
        // this.snackBarRef.dismiss();
        if (this.Project_Graph == "Graphs") {
            this.Project_Graph = "Projects";
            this.Graphs();
        }
        else {
            this.Project_Graph = "Graphs";
            this.ProjectsClick();
        }
    }
    Graphs() {
        this.pieBarCharts = false;
        this.HideStatusDropdown = true;
        this.HideProjects = true;
        // this.BarChartEmp = [];
        // am4core.useTheme(am4themes_animated);
        this.LoadPieChart();
        this.LoadBarChart();
    }
    ProjectsClick() {
        this.HideProjects = false;
        this.pieBarCharts = true;
        this.HideStatusDropdown = false;
        // this.BarChartEmp = [];
    }
    LoadPieChart() {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.options.autoDispose = true;
        let PieChart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.create("chartdiv2", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__.PieChart3D);
        PieChart.logo.disabled = true;
        PieChart.paddingRight = 20;
        this.service._Chart_Percentage(this._Pid).subscribe((data) => {
            this._ChartData = data;
            //console.log("ChartData", this._ChartData);
            PieChart.data = this._ChartData;
            let pieSeries = PieChart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__.PieSeries3D());
            pieSeries.slices.template.propertyFields.fill = "color";
            pieSeries.dataFields.value = "Percentage";
            pieSeries.dataFields.category = "Status";
            PieChart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__.Legend();
            PieChart.legend.position = "absolute";
            PieChart.legend.reverseOrder = true;
        });
    }
    LoadBarChart() {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.options.autoDispose = true;
        let BarChart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.create("chartdiv1", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__.XYChart3D);
        BarChart.logo.disabled = true;
        this.service._BarChart(this._Pid, this.BarChartEmpNo).subscribe((data) => {
            //this.LoadingBar_state.start();
            this.barchartData = data;
            //console.log("BarChartData", this.barchartData);
            BarChart.data = this.barchartData;
            //legend start
            BarChart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__.Legend();
            BarChart.legend.position = "bottom";
            BarChart.legend.reverseOrder = true;
            //legend Ends
            let categoryAxis = BarChart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__.CategoryAxis());
            categoryAxis.dataFields.category = "Type";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 5;
            let valueAxis = BarChart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__.ValueAxis());
            valueAxis.strictMinMax = false;
            valueAxis.title.text = "Projects";
            valueAxis.renderer.labels.template.adapter.add("text", function (text) {
                return text;
            });
            // Create series 1  (Delay)
            this.barchartData.forEach(element => {
                if (element.DelayCount != 0 && element.Status == 'Delay') {
                    let series = BarChart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__.ColumnSeries3D());
                    series.columns.template.propertyFields.fill = "#F58A8B";
                    series.dataFields.valueY = "DelayCount";
                    series.dataFields.categoryX = "Type";
                    series.name = "Delay";
                    series.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#F58A8B");
                    series.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#F58A8B");
                    series.clustered = false;
                    series.columns.template.fillOpacity = 0.9;
                    series.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.percent(50);
                    series.columns.template.tooltipText = "Delay : [bold]{DelayCount}[/]";
                }
                //Series 2 (InProcess)
                if (element.InProcessCount != 0 && element.Status == 'InProcess') {
                    let series2 = BarChart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__.ColumnSeries3D());
                    series2.columns.template.propertyFields.fill = "#E1AC9B";
                    series2.dataFields.valueY = "InProcessCount";
                    series2.dataFields.categoryX = "Type";
                    series2.name = "InProcess";
                    series2.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#E1AC9B");
                    series2.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#E1AC9B");
                    series2.clustered = false;
                    series2.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.percent(50);
                    series2.columns.template.tooltipText = "InProcess : [bold]{InProcessCount}[/]";
                }
                //Series 2 (Completion Under Approval)
                if (element.CUA_Count != 0 && element.Status == 'Completion Under Approval') {
                    let series4 = BarChart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__.ColumnSeries3D());
                    series4.columns.template.propertyFields.fill = "#98C7BF";
                    series4.dataFields.valueY = "CUA_Count";
                    series4.dataFields.categoryX = "Type";
                    series4.name = "Completion UnderApproval";
                    series4.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#98C7BF");
                    series4.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#98C7BF");
                    series4.clustered = false;
                    series4.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.percent(50);
                    series4.columns.template.tooltipText = "Completion Under Approval : [bold]{CompletionUnderApprovalCount}[/]";
                }
                // Series  (Under Approval)
                if (element.UA_Count != 0 && element.Status == "Under Approval") {
                    let series5 = BarChart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__.ColumnSeries3D());
                    series5.columns.template.propertyFields.fill = "#BD838C";
                    series5.dataFields.valueY = "UA_Count";
                    series5.dataFields.categoryX = "Type";
                    series5.name = "Under Approval";
                    series5.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#BD838C");
                    series5.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#BD838C");
                    series5.clustered = false;
                    series5.columns.template.tooltipText = "Under Approval : [bold]{UA_Count}[/]";
                    series5.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.percent(50);
                }
                if (element.PHUA_Count != 0 && element.Status == "Project Hold Under Approval") {
                    // Series 3 (Project Hold Under Approval)
                    let series6 = BarChart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__.ColumnSeries3D());
                    series6.columns.template.propertyFields.fill = "#a85098";
                    series6.dataFields.valueY = "PHUA_Count";
                    series6.dataFields.categoryX = "Type";
                    series6.name = "Project Hold Under Approval";
                    series6.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#a85098");
                    series6.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#a85098");
                    series6.clustered = false;
                    series6.columns.template.tooltipText = "Hold Under Approval : [bold]{PHUA_Count}[/]";
                    series6.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.percent(50);
                }
                if (element.PCR_Count > 0 && element.Status == "Project Complete Rejected") {
                    // Series 4 (Project Comlete Rejected)
                    let series7 = BarChart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__.ColumnSeries3D());
                    series7.columns.template.propertyFields.fill = "#F5C293";
                    series7.dataFields.valueY = "PCR_Count";
                    series7.dataFields.categoryX = "Type";
                    series7.name = "Project Complete Rejected";
                    series7.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#F5C293");
                    series7.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#F5C293");
                    series7.clustered = false;
                    series7.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.percent(50);
                    series7.columns.template.tooltipText = "Project Complete Rejected : [bold]{PCR_Count}[/]";
                }
                if (element.PH_Count != 0 && element.Status == "Project Hold") {
                    // Series 8
                    let series8 = BarChart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__.ColumnSeries3D());
                    series8.columns.template.propertyFields.fill = "#a85098";
                    series8.dataFields.valueY = "PH_Count";
                    series8.dataFields.categoryX = "Type";
                    series8.name = "Project Hold";
                    series8.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#a85098");
                    series8.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#a85098");
                    series8.clustered = false;
                    series8.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.percent(50);
                    series8.columns.template.tooltipText = "Project Hold : [bold]{PH_Count}[/]";
                }
            });
            //Series 3 (Total Projects)
            let series9 = BarChart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__.ColumnSeries3D());
            series9.dataFields.valueY = "TypeCount";
            series9.dataFields.categoryX = "Type";
            series9.name = "Total Projects";
            series9.clustered = false;
            series9.columns.template.propertyFields.fill = "#22b9ff";
            series9.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#22b9ff");
            series9.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#22b9ff");
            series9.columns.template.tooltipText = "Total Projects: [bold]{TypeCount}[/]";
            series9.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.percent(50);
        });
    }
    _OpenMemosInfo(_projectCode, _projectName) {
        this._displayProjName = _projectName;
        this._LinkService._GetOnlyMemoIdsByProjectCode(_projectCode).
            subscribe((data) => {
            let Table_data = data;
            if (Table_data.length > 0) {
                this._DBMemosIDList = data[0]['JsonData'];
                //console.log("--------->",this._DBMemosIDList);
                if (this._DBMemosIDList == '[]') {
                    this._MemosNotFound = "No memos linked";
                }
                else {
                    this._MemosNotFound = "";
                    this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
                }
                // console.log("--------->",this._DBMemosIDList);
                this._JsonString = data[0]['JsonData'];
                this._LinkService._GetMemosSubject(this._JsonString).
                    subscribe((data) => {
                    this._MemosSubjectList = JSON.parse(data['JsonData']);
                    this._MemosNotFound = "";
                });
            }
            else {
                this._MemosSubjectList = [];
                this._MemosNotFound = "No memos linked";
            }
        });
        //Displaying Right Side Bar...
        document.getElementById("MemosSideBar").style.width = "350px";
    }
    _CloseMemosidebar() {
        document.getElementById("MemosSideBar").style.width = "0";
    }
    openUrl(memo_Url) {
        const Url = memo_Url;
        // console.log("Url----------->", memo_Url);
        window.open(Url);
    }
    moreDetails(pcode) {
        let name = 'MoreDetails';
        var url = document.baseURI + name;
        var myurl = `${url}/${pcode}`;
        var myWindow = window.open(myurl, pcode);
        myWindow.focus();
    }
    // openInfo(pcode, pName) {
    //   this._loadChildComponent = true;
    //   this.parentToChild = pcode;
    //   let projName = pName;
    //   document.getElementById("mysideInfobar").style.width = "410px";
    // }
    openInfo2(pcode) {
        this.router.navigate(["../portfolioprojects/" + this._Pid + "/projectinfo/", pcode, "2"]);
        //document.getElementById("mysideInfobar").style.width = "410px";
        document.getElementById("mysideInfobar").classList.add("kt-quick-panel--on");
        //setTimeout((this.closeInfo2),1000, "Hello", "John");
        document.getElementById("rightbar-overlay").style.display = "block";
        document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    }
    closeInfo2() {
        document.getElementById("InfoContent2").style.width = "0";
        //document.getElementById("mysideInfobar").style.width='0';
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    }
    closeInfo() {
        document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
        this.router.navigate(["../portfolioprojects/" + this._Pid + "/"]);
    }
    // share_Users() {
    // }
    _CloseshareBar() {
        this.Close_ShareModel();
        document.getElementById("shareBar").style.width = "0";
        document.getElementById("rightbar-overlay").style.display = "none";
    }
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
                this._SelectedIdsfromDb = underscore__WEBPACK_IMPORTED_MODULE_2__.map(arr2, (d) => { return d.MailId; });
                this.Memos_List = underscore__WEBPACK_IMPORTED_MODULE_2__.reject(arr1, (d) => {
                    var findId = underscore__WEBPACK_IMPORTED_MODULE_2__.find(this._SelectedIdsfromDb, (sId) => { return sId === d.MailId; });
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
        this._onRowClick(this.pCode, this.pName);
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
                this._OpenMemosInfo(this.pCode, this.pName);
                document.getElementById("MemosSideBar").style.width = "0";
                // this.GetmemosInSideInfoBar();
                let Returndata = data['Message'];
                this.notifyService.showSuccess("", Returndata);
                this.closeLinkSideBar();
                this.ngDropdwonMemo = [];
                this._SelectedMemos = [];
            });
        }
        else {
            this.notifyService.showInfo("Request Cancelled", "Please select memo(s) to link");
        }
    }
    //Delete Memos 162942  CRS26428
    deleteMemos(memoId, pcode) {
        // memoId = 162942;
        // pcode = 'CRS26428';
        this._MemosSubjectList = [];
        let _DeleteSelectedMemo = [];
        _DeleteSelectedMemo.push({ MailId: memoId });
        let arr1 = this._DBMemosIDList;
        let arr2 = _DeleteSelectedMemo;
        // console.log("DB Memo List=--------->", this._DBMemosIDList);
        // console.log("_DeleteSelectedMemo List------------>", _DeleteSelectedMemo);
        let result = arr1.filter(o1 => !arr2.some(o2 => o1.MailId === o2.MailId));
        this._DBMemosIDList = underscore__WEBPACK_IMPORTED_MODULE_2__.map(arr2, (d) => { return d.MailId; });
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
        this._MemosSubjectList = [];
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
}
PortfolioProjectsComponent.ɵfac = function PortfolioProjectsComponent_Factory(t) { return new (t || PortfolioProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_8__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_9__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_10__.BsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_11__.LinkService)); };
PortfolioProjectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: PortfolioProjectsComponent, selectors: [["app-portfolio-projects"]], viewQuery: function PortfolioProjectsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.closebutton = _t.first);
    } }, decls: 196, vars: 47, consts: [[1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height", "side_view"], [1, "row"], [1, "kt-portlet"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title", "mr-3"], ["id", "groupportfolio", "data-toggle", "dropdown", 1, "btn", "btn-outline-hover-primary", "btn-sm", "btn-icon", "btn-circle", 3, "disabled", "click"], [1, "fa", "fa-edit", "m-2"], [1, "ml-4", 2, "color", "red", 3, "hidden"], [1, "dropdown-menu", "dropdown-menu-left", "dropdown-menu-fit", "dropdown-menu-md", "bg-ground-short", "mr-2"], [1, "kt-nav"], [1, "kt-nav__head", "d-block"], [1, "mb-0"], [1, "kt-nav__separator"], [1, "kt-nav__item", "px-4"], ["type", "text", "placeholder", "Enter Portfolio Name", 1, "form-control", 3, "ngModel", "ngStyle", "ngModelChange"], [1, "kt-nav__foot"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-3", 3, "disabled", "click"], [1, "kt-quick-search", "kt-quick-search--inline", "ml-3", 3, "hidden"], [1, "kt-quick-search__form"], [1, "input-group"], ["type", "text", "placeholder", "Search Projects", 1, "form-control", "kt-quick-search__input", "pl-3", 2, "width", "170px", "height", "30px", 3, "ngModel", "ngModelChange"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "flaticon2-search-1"], [1, "kt-portlet__head-toolbar"], ["href", "javascript:void(0)", 1, "badge", "badge-primary", "kt-badge--inline", "mr-2", "py-10px", "btn-sm", 3, "hidden", "click"], [4, "ngIf"], [1, "kt-todo__details"], ["role", "tablist", 1, "nav", "nav-pills", "nav-pills-sm", "nav-pills-label", "nav-pills-bold"], [1, "nav-item"], ["role", "button", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-2", 3, "click"], [1, "kt-portlet__body", "pt-3"], [1, "tab-content"], ["aria-expanded", "true", 1, "tab-pane", "active", 3, "hidden"], [1, "card", "projects-list", "no-border", "kt-portlet__body_scroll", "kt-portlet__body_scroll1"], [1, "card-body", "pt-0"], ["id", "project-4_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4", "no-footer"], ["class", "col-sm-12", 4, "ngIf"], [2, "color", "lightgrey", "font-size", "large", "text-align", "center"], [3, "hidden"], [1, "col-lg-6"], [1, "kt-portlet__head-icon", "kt-hidden"], [1, "la", "la-gear"], [1, "kt-portlet__head-title"], [1, "kt-portlet__body"], ["id", "kt_flotcharts_8", 2, "height", "368px"], ["id", "chartdiv2", 2, "width", "100%", "height", "385px"], [1, "mutlidropdown-set", 3, "placeholder", "settings", "ngModel", "data", "ngModelChange", "onSelect", "onDeSelect"], ["id", "kt_flotcharts_7", 2, "height", "368px"], ["id", "chartdiv1", 2, "width", "90%", "height", "400px"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["closebutton", ""], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["id", "exampleModal2", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", "yt", "", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "text-dark"], [1, "text-primary"], [1, "modal-body", "min-scroll"], [1, "table", "table-bordered", "table-striped"], [4, "ngFor", "ngForOf"], ["type", "button", "id", "Mdl_closebtn", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], ["id", "MemosSideBar", 1, "sideInfobar", "animate-right"], [1, "kt-portlet__head", "p-3", "bg-primary"], ["href", "javascript:void(0)", 1, "closebtn", "pull-right", "text-white", 3, "click"], [1, "title-sidebar", "mb-0", "text-white"], [1, "curser-pointer"], ["width", "25px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png"], [1, "text-small", "text-white"], [1, "kt-portlet__body", "p-3"], ["id", "accordionExample7", 1, "accordion", "accordion-light", "accordion-svg-icon"], [1, "card-body"], [1, "kt-widget1", "kt-widget1--fit"], ["class", "kt-widget1__item", 4, "ngFor", "ngForOf"], ["id", "shareBar", 1, "sideInfobar", "offcanvas", "animate-right"], [1, "px-4", "pt-4", "pb-1"], [1, "offcanvas-header", "d-flex", "align-items-center", "justify-content-between", "pb-2"], [1, "font-weight-bold", "m-0"], ["href", "javascript:void(0)", 1, "closebtn", "btn", "btn-xs", "btn-icon", "btn-hover-primary", "mt-2", 3, "click"], [1, "fa", "fa-times"], [1, "card-body", "multi"], [1, "form-group"], ["for", "exampleInputEmail1"], ["name", "CompanyDropdown", 1, "mutlidropdown-set", 3, "placeholder", "ngModel", "settings", "data", "ngModelChange", "onSelect", "onDeSelect"], [1, "text-danger"], ["name", "EmployeeDropdown", 1, "mutlidropdown-set", 3, "placeholder", "ngModel", "settings", "data", "ngModelChange", "onSelect", "onDeSelect"], [1, "form-group", "mb-0"], [1, "mb-3"], [1, "form-check-inline"], [1, "form-check-label"], ["type", "radio", "value", "View Only", "name", "optradio", 1, "form-check-input", 3, "ngModel", "ngModelChange", "change"], ["type", "radio", "value", "Full Access", "name", "optradio", 1, "form-check-input", 3, "ngModel", "ngModelChange", "change"], [1, "pt-3", "text-right"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "mr-3", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["id", "rightbar-overlay", 3, "click"], ["href", "javascript:void(0)", 1, "badge", "badge-warning", "kt-badge--inline", "mr-2", "btn-sm", "py-10px", 3, "hidden", "click"], ["href", "javascript:void(0)", 1, "badge", "badge-danger", "kt-badge--inline", "mr-2", "btn-sm", "py-10px", 3, "hidden", "click"], ["href", "javascript:void(0)", 1, "badge", "badge-success", "kt-badge--inline", "mr-2", "btn-sm", "py-10px", 3, "hidden", "click"], ["href", "javascript:void(0)", 1, "badge", "kt-badge--inline", "mr-2", "btn-sm", "text-white", "py-10px", 2, "background-color", "#98c7bf", 3, "hidden", "click"], ["href", "javascript:void(0)", 1, "badge", "badge-info", "kt-badge--inline", "mr-2", "btn-sm", "py-10px", 3, "hidden", "click"], ["href", "javascript:void(0)", 1, "badge", "kt-badge--inline", "mr-2", "btn-sm", "text-white", "py-10px", 2, "background-color", "#646c9a", 3, "hidden", "click"], ["href", "javascript:void(0)", 1, "badge", "kt-badge--inline", "mr-2", "btn-sm", "text-white", "py-10px", 2, "background-color", "#e6c947", 3, "hidden", "click"], ["href", "javascript:void(0)", 1, "badge", "kt-badge--inline", "mr-2", "btn-sm", "py-10px", "text-white", 2, "background-color", "#BB8FCE", 3, "hidden", "click"], [1, "col-sm-12"], ["class", "d-flex justify-content-between mt-1", 4, "ngIf"], [1, "card", "my-1", "shadow-sm", "brdr", "success", 3, "ngClass"], [1, "card-body", "d-flex", "align-items-center", "justify-content-around"], [1, "icond"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", 1, "p-lg-2", "p-0", "mr-2"], [1, "fa", "fa-info-circle", "info-icon-cir", 3, "click"], ["tabindex", "0", "role", "button", "placement", "right", "data-trigger", "focus", "data-toggle", "tooltip", "title", "More Info!", 1, "btn", "px-0", "mr-2"], [1, "fa", "fa-chart-bar", "info-icon-cir", 3, "click"], [4, "ngIf", "ngIfElse"], ["not_Linked", ""], [1, "mx-2", "p-1", 2, "flex", "1"], [1, "kt-widget__title", "mb-0", 2, "width", "250px"], [1, "mx-2", "p-1"], [1, "kt-widget__other"], ["ReportType", ""], [1, "kt-widget__other", "text-nowrap", "ng-star-inserted"], ["Projecttype", ""], ["data-toggle", "tooltip", "data-placement", "top", 1, "mx-2", "p-1", 2, "flex", "0.5", 3, "title"], ["class", "mx-2 p-1", "style", "flex: 0;", 4, "ngIf"], [1, "curser-pointer", 3, "click"], ["width", "19px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png", "title", "Linked"], ["width", "19px", "src", "https://cswebapps.com/dmsweb/assets/media/logos/dms-logo.png", "title", "Not Linked", 1, "black-white"], [1, "kt-widget__other", "text-nowrap"], [1, "text-danger", "font-weight-400"], ["class", "text-danger delayDays", 4, "ngIf"], [1, "text-danger", "delayDays"], [1, "text-success", "font-weight-400"], [1, "text-warning", "font-weight-400"], [1, "font-weight-400", 2, "color", "#646c9a"], [1, "text-info", "font-weight-400"], [1, "font-weight-400", "text-info"], [1, "font-weight-400", "text-warning"], [1, "font-weight-400", 2, "color", "#98c7bf"], [1, "font-weight-400", 2, "color", "#E0B1D7"], [1, "font-weight-400", 2, "color", "#BD838C"], [1, "font-weight-400", 2, "color", "#a85098"], [1, "font-weight-400", 2, "color", "#BB8FCE"], [1, "mx-2", "p-1", 2, "flex", "0"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-2", "px-2", "py-1", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-trash-alt", "mr-0"], [1, "d-flex", "justify-content-between", "mt-1"], [1, "", 3, "hidden"], ["type", "button", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-2", 3, "click"], ["type", "button", "data-trigger", "focus", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-2", 3, "click"], [1, "fas", "fa-share-alt"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal2", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-2", 3, "hidden"], [1, "fas", "fa-file-alt"], [3, "ngStyle"], ["align", "center"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-0", "px-2", "py-1", 3, "click"], [1, "fas", "fa-trash-alt", "mr-0"], [1, "kt-widget1__item"], [1, "kt-widget1__info", "kt-align-left"], ["Onlysubject", ""], [1, "fas", "fa-paperclip", 2, "color", "#A9A9A9"], [1, "fas", "fa-circle"]], template: function PortfolioProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5)(6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_Template_button_click_8_listener() { return ctx.btnEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "span", 8)(12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "*Only 50 characters allowed");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 9)(15, "ul", 10)(16, "li", 11)(17, "p", 12)(18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "Rename Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "li", 14)(22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function PortfolioProjectsComponent_Template_input_ngModelChange_22_listener($event) { return ctx.Rename_PortfolioName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "li", 16)(24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_Template_button_click_24_listener() { return ctx.RenamePortfolio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, "Update Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 18)(27, "div", 19)(28, "div", 20)(29, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function PortfolioProjectsComponent_Template_input_ngModelChange_29_listener($event) { return ctx._SearchProjects = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 22)(31, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](32, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "div", 25)(34, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_Template_a_click_34_listener() { return ctx.labelAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](36, PortfolioProjectsComponent_ng_container_36_Template, 3, 2, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](37, PortfolioProjectsComponent_ng_container_37_Template, 3, 2, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](38, PortfolioProjectsComponent_ng_container_38_Template, 3, 2, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](39, PortfolioProjectsComponent_ng_container_39_Template, 3, 2, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](40, PortfolioProjectsComponent_ng_container_40_Template, 3, 2, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](41, PortfolioProjectsComponent_ng_container_41_Template, 3, 2, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](42, PortfolioProjectsComponent_ng_container_42_Template, 3, 2, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](43, PortfolioProjectsComponent_ng_container_43_Template, 3, 2, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](44, PortfolioProjectsComponent_ng_container_44_Template, 3, 2, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "div", 28)(46, "ul", 29)(47, "li", 30)(48, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_Template_a_click_48_listener() { return ctx.ProjectsGraphsClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "div", 32)(51, "div", 33)(52, "div", 34)(53, "div", 35)(54, "div", 36)(55, "div", 37)(56, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](57, PortfolioProjectsComponent_div_57_Template, 6, 8, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "div", 39)(59, "span")(60, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "div", 40)(63, "div", 1)(64, "div", 41)(65, "div", 2)(66, "div", 3)(67, "div", 4)(68, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](69, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](71, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](72, "div", 45)(73, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](74, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](75, "div", 41)(76, "div", 2)(77, "div", 3)(78, "div", 4)(79, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](80, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](82, " Projects Vs Team Member(s) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](83, "div", 25)(84, "ng-multiselect-dropdown", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function PortfolioProjectsComponent_Template_ng_multiselect_dropdown_ngModelChange_84_listener($event) { return ctx.BarChartEmp = $event; })("onSelect", function PortfolioProjectsComponent_Template_ng_multiselect_dropdown_onSelect_84_listener($event) { return ctx.EmpChartOnSelect($event); })("onDeSelect", function PortfolioProjectsComponent_Template_ng_multiselect_dropdown_onDeSelect_84_listener() { return ctx.EmpChartOnDeselect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](85, "div", 45)(86, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](87, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "div", 51)(89, "div", 52)(90, "div", 53)(91, "div", 54)(92, "h5", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](93, " Share Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](94, "button", 56, 57)(96, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](97, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](98, "div", 59)(99, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](100, "div", 61)(101, "div", 62)(102, "div", 53)(103, "div", 54)(104, "div")(105, "h5", 55)(106, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](107, "Shared Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](108, "h6", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](109, "Portfolio Owner: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](110, "strong", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](112, "button", 56)(113, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](114, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](115, "div", 65)(116, "table", 66)(117, "tr")(118, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](119, "Shared To");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](120, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](121, "Shared By");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](122, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](123, "Preference Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](124, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](125, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](126, PortfolioProjectsComponent_tr_126_Template, 11, 6, "tr", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](127, "div", 60)(128, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_Template_button_click_128_listener() { return ctx.Close_ShareModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](129, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](130, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](131, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](132, "div", 70)(133, "div", 71)(134, "div", 4)(135, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_Template_a_click_135_listener() { return ctx._CloseMemosidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](136, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](137, "div", 73)(138, "h5", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](139, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](140, " Linked Memos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](141, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](143, "div", 77)(144, "div", 78)(145, "div", 79)(146, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](147, PortfolioProjectsComponent_div_147_Template, 6, 2, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](148, "div", 82)(149, "div", 83)(150, "div", 84)(151, "h4", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](152, " Share Portfolio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](153, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_Template_a_click_153_listener() { return ctx._CloseshareBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](154, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](155, "div", 77)(156, "div", 78)(157, "div", 88)(158, "form")(159, "div", 89)(160, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](161, "Select Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](162, "div")(163, "ng-multiselect-dropdown", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function PortfolioProjectsComponent_Template_ng_multiselect_dropdown_ngModelChange_163_listener($event) { return ctx.ngCompanyDropdown = $event; })("onSelect", function PortfolioProjectsComponent_Template_ng_multiselect_dropdown_onSelect_163_listener($event) { return ctx.OnCompanySelect($event); })("onDeSelect", function PortfolioProjectsComponent_Template_ng_multiselect_dropdown_onDeSelect_163_listener() { return ctx.OnCmpDeselect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](164, "p", 92)(165, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](167, "div", 89)(168, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](169, "Select User");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](170, "div")(171, "ng-multiselect-dropdown", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function PortfolioProjectsComponent_Template_ng_multiselect_dropdown_ngModelChange_171_listener($event) { return ctx.ngEmployeeDropdown = $event; })("onSelect", function PortfolioProjectsComponent_Template_ng_multiselect_dropdown_onSelect_171_listener($event) { return ctx.OnEmpSelect($event); })("onDeSelect", function PortfolioProjectsComponent_Template_ng_multiselect_dropdown_onDeSelect_171_listener() { return ctx.OnEmpDeselect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](172, "p", 92)(173, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](174);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](175, "div", 94)(176, "label", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](177, "Preferences");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](178, "div")(179, "div", 96)(180, "label", 97)(181, "input", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function PortfolioProjectsComponent_Template_input_ngModelChange_181_listener($event) { return ctx.preferences = $event; })("change", function PortfolioProjectsComponent_Template_input_change_181_listener($event) { return ctx.Radio_View_fullaccess($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](182, "View Only ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](183, "div", 96)(184, "label", 97)(185, "input", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function PortfolioProjectsComponent_Template_input_ngModelChange_185_listener($event) { return ctx.preferences = $event; })("change", function PortfolioProjectsComponent_Template_input_change_185_listener($event) { return ctx.Radio_View_fullaccess($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](186, "Full Access ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](187, "p", 92)(188, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](189);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](190, "div", 100)(191, "button", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_Template_button_click_191_listener() { return ctx._CloseshareBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](192, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](193, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_Template_button_click_193_listener() { return ctx.share(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](194, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](195, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PortfolioProjectsComponent_Template_div_click_195_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx._PortFolio_Namecardheader);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx._MessageIfNotOwner != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx.Max50Char);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.Rename_PortfolioName)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](45, _c3, ctx.Rename_PortfolioName == "" ? "rgb(255 177 175)" : "rgb(136 150 255)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx.Rename_PortfolioName == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx.HideStatusDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx._SearchProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx.HideStatusDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Total ", ctx.TotalProjects, " Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.CountInprocess > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.CountDelay > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.CountCompleted > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.CountNewProject > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.CountAll_UA > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.CountProjectHold > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.CountRejecteds > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.Count_ToDoAchieved > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.Count_ToDoAchieved > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.Project_Graph, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx.HideProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx._MessageIfNotOwner == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx._MessageIfNotOwner);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx.pieBarCharts);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("placeholder", " All      ")("settings", ctx.dropdownSettings_forEmpChart)("ngModel", ctx.BarChartEmp)("data", ctx.EmpDropdwn);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx._PortfolioOwner);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx._ShareDetailsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx._displayProjName);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx._MemosSubjectList);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("placeholder", " Company ")("ngModel", ctx.ngCompanyDropdown)("settings", ctx.dropdownSettings_Cmp)("data", ctx.Company_List);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx._ErrorMessage_comp);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("placeholder", " TM Name ")("ngModel", ctx.ngEmployeeDropdown)("settings", ctx.dropdownSettings_Emp)("data", ctx.EmployeeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx._ErrorMessage_User, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.preferences);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.preferences);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx._ErrorMessage_Pref, "");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterOutlet, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__.MultiSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__.Ng2SearchPipe, src_app_Shared_date_format_pipe_pipe__WEBPACK_IMPORTED_MODULE_13__.DateFormatPipePipe], styles: [".list-icon-color[_ngcontent-%COMP%]{\r\n    color: #969696\r\n   }\r\n\r\n  .loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\r\n    background: #0dc5c1;\r\n    animation: load1 1s infinite ease-in-out;\r\n    width: 1em;\r\n    height: 4em;\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%] {\r\n    color: #0dc5c1;\r\n    text-indent: -9999em;\r\n    margin: 88px auto;\r\n    position: relative;\r\n    font-size: 11px;\r\n    transform: translateZ(0);\r\n    animation-delay: -0.16s;\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    top: 0;\r\n    content: '';\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%]:before {\r\n    left: -1.5em;\r\n    animation-delay: -0.32s;\r\n  }\r\n\r\n  .loader[_ngcontent-%COMP%]:after {\r\n    left: 1.5em;\r\n  }\r\n\r\n  @keyframes load1 {\r\n    0%,\r\n    80%,\r\n    100% {\r\n      box-shadow: 0 0;\r\n      height: 4em;\r\n    }\r\n    40% {\r\n      box-shadow: 0 -2em;\r\n      height: 5em;\r\n    }\r\n  }\r\n\r\n  .center[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 200px;\r\n  }\r\n\r\n  .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\r\n    border-radius: 2px;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]{\r\n  width: 400px;\r\n  height: auto;\r\n  max-height: 400px;\r\n  padding: 10px;\r\n  top: 38px !important;\r\n  left: auto !important;\r\n  right: 0px !important;\r\n  overflow-y: auto;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n  \r\n\r\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n  .ngx-pagination[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n}\r\n\r\n  #backBtn[_ngcontent-%COMP%]:hover{\r\n background-color:#0073e6 ;\r\n color: white; \r\n}\r\n\r\n  #Mdl_closebtn[_ngcontent-%COMP%]:hover{\r\n  background-color: #dc3545;\r\n  color:white\r\n}\r\n\r\n  .text-warning-1[_ngcontent-%COMP%]{\r\n  background-color: #ffe0a7;\r\n  color:#FFA800;\r\n  width: auto;\r\n  padding: 4px 8px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  .text-danger-1[_ngcontent-%COMP%]{\r\n  color: #F64E60;\r\n  background-color: #FFE2E5;\r\n  width: auto;\r\n  padding: 4px 8px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%], .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-up[_ngcontent-%COMP%]{\r\n  border-top: 7px solid #adadad !important;\r\n    border-left: 7px solid transparent !important;\r\n    border-right: 7px solid transparent !important\r\n}\r\n\r\n  .icond[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  vertical-align: middle;\r\n}\r\n\r\n  .card.brdr[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n  flex: 0.5;\r\n  text-align: left; \r\n}\r\n\r\n  .card.brdr[_ngcontent-%COMP%] {\r\n  border-left: 4px solid #2786fb;\r\n  border-radius: 5px;\r\n}\r\n\r\n  .card.brdr.danger[_ngcontent-%COMP%] {\r\n  border-left: 4px solid #dc3545;\r\n}\r\n\r\n  .card.brdr.success[_ngcontent-%COMP%] {\r\n  border-left: 4px solid #1dc9b7;\r\n}\r\n\r\n    .dropdown-list{\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]{\r\n    border: 0;\r\n    background: none;\r\n    font-size: 16px;\r\n    outline: none !important;\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 30px;\r\n    width: 30px;\r\n    background-color: #f5f6fc;\r\n    border: 1px solid #b3bcff;\r\n    color: #5867dd;\r\n    transition: all 0.3s ease;\r\n    cursor: pointer;\r\n    margin: 0 8px 0 0;\r\n    border-radius: 0;\r\n    border-radius: 4px;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon[_ngcontent-%COMP%] {\r\n    height: 18px;\r\n    width: 18px;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]{\r\n  height: 25px;\r\n  width: 25px;\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{\r\n    fill: #5867dd;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\r\n    fill: #5867dd;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\r\n    fill: #fff;\r\n  }\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{\r\n  fill: #fff;\r\n}\r\n\r\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover, .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]{\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n  }\r\n\r\n  .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    color: #ccc;\r\n  }\r\n\r\n  .card-title[_ngcontent-%COMP%]   .favourite.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{\r\n    color: #ffc107;\r\n  }\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    border-color: #d6d6d6;\r\n  }\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.success[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    box-shadow: -5px 0px 1px #1dc9b7\r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.warning[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #ffb822\r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.info[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #2786fb\r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.danger[_ngcontent-%COMP%] {\r\n    \r\n    box-shadow: -5px 0px 1px #F58A8B\r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.UnderApprovals[_ngcontent-%COMP%] {\r\n  \r\n  box-shadow: -5px 0px 1px #BD838C\r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.ForwardUnderApproval[_ngcontent-%COMP%] {\r\n  \r\n  box-shadow: -5px 0px 1px #E0B1D7 \r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.completeUnderApproval[_ngcontent-%COMP%] {\r\n  \r\n  box-shadow: -5px 0px 1px #98c7bf\r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.newProject[_ngcontent-%COMP%] {\r\n  \r\n  box-shadow: -5px 0px 1px #98c7bf\r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.projecthold[_ngcontent-%COMP%] {\r\n  \r\n  box-shadow: -5px 0px 1px #C0B5DC\r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.projectComRejected[_ngcontent-%COMP%] {\r\n  \r\n  box-shadow: -5px 0px 1px #e6c947\r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.projectholded[_ngcontent-%COMP%] {\r\n  \r\n  box-shadow: -5px 0px 1px #C0B5DC\r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.NewprojectRejected[_ngcontent-%COMP%] {\r\n  \r\n  box-shadow: -5px 0px 1px #C0B5DC\r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.HoldunderApp[_ngcontent-%COMP%] {\r\n  \r\n  box-shadow: -5px 0px 1px #a85098\r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.DeadlineExtended[_ngcontent-%COMP%]{\r\n  \r\n  box-shadow: -5px 0px 1px #E0B1D7\r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.EnactiveUnderApp[_ngcontent-%COMP%]{\r\n  \r\n  box-shadow: -5px 0px 1px #E0B1D7\r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.TodoAchieved[_ngcontent-%COMP%]{\r\n  \r\n  box-shadow: -5px 0px 1px #BB8FCE\r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.ToDoCompleted[_ngcontent-%COMP%]{\r\n  \r\n  box-shadow: -5px 0px 1px #d19ae9\r\n}\r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.NewTodo[_ngcontent-%COMP%]{\r\n  \r\n  box-shadow: -5px 0px 1px #5088a8\r\n}\r\n\r\n  .delayDays[_ngcontent-%COMP%]{\r\n  font-size: 10px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n  transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\r\n  fill: #5E5F63;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\r\n  padding: 0.2rem 20px;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%] {\r\n  width: 800px;\r\n  max-width: 100%;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  vertical-align: top;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n  .kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n  min-height: 60px;\r\n}\r\n\r\n  .kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n}\r\n\r\n  .dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc !important;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\r\n  background-color: transparent !important;\r\n  color: #74788D !important;\r\n  cursor: auto;\r\n}\r\n\r\n  .kt-nav__link-text[_ngcontent-%COMP%]:hover {\r\n  color: #74788D !important;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\r\n  background-color: rgba(154, 100, 142, 0.2);\r\n  color: #333 !important;\r\n  transition: all 0.3s;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\r\n  color: #333;\r\n}\r\n\r\n  .kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background: rgb(195, 195, 195);\r\n}\r\n\r\n  \r\n\r\n  .kt-quick-panel2[_ngcontent-%COMP%] {\r\n  width: 650px !important;\r\n}\r\n\r\n  .kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\r\n  right: -660px;\r\n  left: auto;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #F1F1F1;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\r\n  background-color: #FFFFFF !important;\r\n}\r\n\r\n  .chatcount[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  margin-left: -15px;\r\n  margin-top: -10px;\r\n}\r\n\r\n  .kt-badge.kt-badge--dark[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background: #8C8D92;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\r\n  transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\r\n  fill: #5E5F63;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\r\n  padding: 0.2rem 20px;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-font-ReplyRequired[_ngcontent-%COMP%] {\r\n  color: #a6c !important;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%] {\r\n  width: 800px;\r\n  max-width: 100%;\r\n}\r\n\r\n  .mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  vertical-align: top;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n  .kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n  min-height: 60px;\r\n}\r\n\r\n  .kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n}\r\n\r\n  .dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc !important;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\r\n  background-color: transparent !important;\r\n  color: #74788D !important;\r\n  cursor: auto;\r\n}\r\n\r\n  .kt-nav__link-text[_ngcontent-%COMP%]:hover {\r\n  color: #74788D !important;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\r\n  background-color: rgba(154, 100, 142, 0.2);\r\n  color: #333 !important;\r\n  transition: all 0.3s;\r\n}\r\n\r\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\r\n  color: #333;\r\n}\r\n\r\n  .kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\r\n  color: #FFFFFF;\r\n  background: rgb(195, 195, 195);\r\n}\r\n\r\n  \r\n\r\n  .kt-quick-panel2[_ngcontent-%COMP%] {\r\n  width: 650px !important;\r\n}\r\n\r\n  .kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\r\n  right: -660px;\r\n  left: auto;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n  border-radius: 5px;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #F1F1F1;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #ccc;\r\n}\r\n\r\n  \r\n\r\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background: none;\r\n  outline: none !important;\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 35px;\r\n  width: 35px;\r\n  background-color: #FFFFFF;\r\n  transition: all 0.3s ease;\r\n  cursor: pointer;\r\n  margin: 0;\r\n  border-radius: 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n  .kt-badge.kt-badge--inline[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  width: auto;\r\n  padding: 0.15rem 0.75rem;\r\n  border-radius: 2px;\r\n  margin-left: 4px;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%] {\r\n  padding: 17px;\r\n  width: 243px;\r\n}\r\n\r\n  \r\n\r\n  .Replied_border_left_true_warning[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #ffb822;\r\n}\r\n\r\n  .Replied_border_left_true_primary[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #95bed9;\r\n}\r\n\r\n  .Replied_border_left_true_success[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #95bed9;\r\n}\r\n\r\n  .Replied_border_left_true_Danger[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #F58A8B;\r\n}\r\n\r\n  .Replied_border_left_true_hold[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #c0b5dc\r\n}\r\n\r\n  .Replied_border_left_true_rejected[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #f5c293;\r\n}\r\n\r\n  .Replied_border_left_true_underApprovals[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #BD838C;\r\n}\r\n\r\n  .Replied_border_left_true_forwardUnderApproval[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #E0B1D7;\r\n}\r\n\r\n  .Replied_border_left_true_completeUnderApproval[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #98c7bf;\r\n}\r\n\r\n  .Replied_border_left_true_projectHold[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #C0B5DC;\r\n}\r\n\r\n  .Replied_border_left_true_NewProject[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #007bff;\r\n}\r\n\r\n  .Replied_border_left_true_DeadlineExtended[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #E0B1D7;\r\n}\r\n\r\n  .Replied_border_left_true_HoldunderApp[_ngcontent-%COMP%]{\r\n  border-left: 5px solid #a85098;\r\n}\r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%] {\r\n    margin-left: -17px;\r\n}\r\n\r\n  .icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  margin-right: 15px !important;\r\n  z-index: 2;\r\n}\r\n\r\n  .icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  width: 18px;\r\n    height: 18px;\r\n    text-align: center;\r\n    font-size: 10px;\r\n    font-weight: 700;\r\n  color: #fff;\r\n  background: #5867dd;\r\n  border: 1px solid #5867dd;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: -11px;\r\n  right: -11px;\r\n  z-index: 3;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]{\r\n  margin-top: 0px !important;\r\n}\r\n\r\n  .multiselect-dropdown[_ngcontent-unj-c40][_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-unj-c40][_ngcontent-%COMP%]{\r\n  width: 150px !important;\r\n}\r\n\r\n  \r\n\r\n  .sideInfobar[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 999;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: #ffffff;\r\n  border-left: 1px solid #EDEAE9;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  box-shadow:0 .1rem 1rem .25rem rgb(0 0 0/5%)!important;\r\n  \r\n}\r\n\r\n  .count-height[_ngcontent-%COMP%]{\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]   .justify-content-between[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]{\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 3px;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #f1f1f1;\r\n}\r\n\r\n  \r\n\r\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #ccc;\r\n}\r\n\r\n  .dropdown[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]{\r\n  border-color: #0073e6;\r\n}\r\n\r\n  .kt-checkbox[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\r\n  border: solid #0073e6;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown[_ngcontent-%COMP%] {\r\n  position: static !important;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    width: 60%;\r\n    \r\n    top: 20px !important;\r\n    left: -22px !important;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  border-bottom: 15px solid #fff;\r\n  border-right: 17px solid transparent;\r\n  border-left: 17px solid transparent;\r\n  position: absolute;\r\n  top: -15px;\r\n  left: 32px;\r\n  z-index: 10;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  border-bottom: 17px solid #ccc;\r\n  border-right: 19px solid transparent;\r\n  border-left: 19px solid transparent;\r\n  position: absolute;\r\n  top: -17px;\r\n  left: 30px;\r\n  z-index: 8;\r\n}\r\n\r\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu1[_ngcontent-%COMP%]   .filter-box[_ngcontent-%COMP%]{\r\n  width: 33.3333%;\r\n  display: inline-block;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){\r\n  width: 3%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){\r\n  width: 4%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3){\r\n  width: 33%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4){\r\n  width: 10%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5){\r\n  width: 10%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6){\r\n  width: 15%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(7), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7){\r\n  width: 10%;\r\n}\r\n\r\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(8), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8){\r\n  width: 15%;\r\n}\r\n\r\n  .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{\r\n  \r\n  cursor: pointer;\r\n}\r\n\r\n  .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{\r\n  border: 1px solid #d6dbff;\r\n  border-radius: 5px;\r\n}\r\n\r\n  .show_entries[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 3px;\r\n  background-color: #fff;\r\n \r\n}\r\n\r\n  .show_entries[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n  \r\n  border: 2px solid rgba(88, 103, 221, 0.3);\r\n  color: #5867dd;\r\n  font-weight: bold;\r\n}\r\n\r\n  .count-btn[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  padding: 0px 10px;\r\n  font-weight: 700;\r\n  color: rgb(88, 88, 88);\r\n  font-size: 14px;\r\n  line-height: 25px;\r\n}\r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__toolbar[_ngcontent-%COMP%]   .kt-inbox__search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  height: 44px;\r\n  border: none;\r\n  background-color: #f2f3f7;\r\n}\r\n\r\n  .input-group[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: stretch;\r\n  width: 100% !important;\r\n}\r\n\r\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]{\r\n  \r\n  background-color: #fff;\r\n  width: 25vw;\r\n  box-shadow: none;\r\n  border: 1px solid #d6dbff !important;\r\n  margin-top: 5px;\r\n}\r\n\r\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{\r\n  background-color: #f5f6fc;\r\n}\r\n\r\n  \r\n\r\n  \r\n\r\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%]   .kt-inbox__items[_ngcontent-%COMP%]   .kt-inbox__item[_ngcontent-%COMP%]{\r\n  position: relative;\r\n}\r\n\r\n  .delete-btn[_ngcontent-%COMP%]{\r\n  display: none;\r\n  position: absolute;\r\n   right: 0px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    background-color: #f2f3f7;\r\n    color: grey;\r\n    line-height: 59px;\r\n    padding: 0 20px;\r\n    transition: all 2s ease !important;\r\n}\r\n\r\n  .delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  background: none;\r\n  font-size: 16px;\r\n  outline: none !important;\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  height: 30px;\r\n  width: 30px;\r\n  background-color: #f5f6fc;\r\n  border: 1px solid #b3bcff;\r\n  color: #5867dd;\r\n  transition: all 0.3s ease;\r\n  cursor: pointer;\r\n  margin: 10px 8px 0 0;\r\n  border-radius: 0;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  text-align: center;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n  \r\n\r\n  .btn-secondary.theme-btn[_ngcontent-%COMP%]{\r\n  background-color: #5867dd;\r\n  color: #fff;\r\n}\r\n\r\n  .btn.btn-label-primary[_ngcontent-%COMP%]{\r\n  border: 1px solid #b3bcff;\r\n}\r\n\r\n  .delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\r\n    background-color: #5867dd;\r\n    color: #fff;\r\n}\r\n\r\n  .kt-inbox__item[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n  .modal-body.min-scroll[_ngcontent-%COMP%]{\r\n  height: auto;\r\n  max-height: 300px;\r\n  overflow-y: hidden;\r\n}\r\n\r\n  .modal-body.min-scroll[_ngcontent-%COMP%]:hover{\r\n  overflow-y: scroll;\r\n}\r\n\r\n  .modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n  .modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n  .modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #5867dd;\r\n  border-radius: 8px;\r\n}\r\n\r\n  .modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: #b3bcff;\r\n}\r\n\r\n  .kt-inbox__details[_ngcontent-%COMP%]{\r\n  margin-top: 0px !important;\r\n}\r\n\r\n  .font-16[_ngcontent-%COMP%]{\r\n  font-size: 16px !important;\r\n}\r\n\r\n  \r\n\r\n  .name-box[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  font-size: 9px;\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: #5867dd;\r\n  color: #fff;\r\n  font-weight: 500;\r\n  letter-spacing: 2px;\r\n  border-radius: 50%;\r\n  line-height: 30px;\r\n  margin-right: 5px;\r\n}\r\n\r\n  .names-response[_ngcontent-%COMP%]{\r\n  display :inline-block;\r\n  text-align: left;\r\n}\r\n\r\n  .names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{\r\n  display: block;\r\n  font-size: 10px;\r\n  font-weight: 600;\r\n}\r\n\r\n  .names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{\r\n  font-weight: 600;\r\n}\r\n\r\n  .head-btn[_ngcontent-%COMP%]{\r\n  background-color: rgba(88, 103, 221, 0.1);\r\n    padding: 3px 10px 3px 5px;\r\n    border-radius: 2rem;\r\n    border: 1px solid #b3bcff;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n}\r\n\r\n  .head-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #5867dd;\r\n    color: #fff;\r\n    line-height: 25px;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    margin-right: 3px;\r\n}\r\n\r\n  .devider[_ngcontent-%COMP%]{\r\n  height: 1px;\r\n  width: 100%;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n  .pricevalues[_ngcontent-%COMP%] {\r\n  padding-top: 30px;\r\n  padding-bottom: 10px;\r\n  border-right: 1px solid #f1f1f1;\r\n  border-bottom: 1px solid #f1f1f1;\r\n}\r\n\r\n  .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(1), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(2)  {\r\n  border-top: 1px solid #f1f1f1;\r\n}\r\n\r\n  .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(3), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(4)  {\r\n  border-bottom: none\r\n}\r\n\r\n  .pricevalues[_ngcontent-%COMP%]:nth-child(2), .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\r\n  border-right: none;\r\n}\r\n\r\n  .dms-links[_ngcontent-%COMP%]{\r\n  list-style-type: disc;\r\n}\r\n\r\n  .dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  display: block;\r\n  text-decoration: underline;\r\n  font-weight: 600;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n  .py-10px[_ngcontent-%COMP%]{\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n  \r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .pro-bar[_ngcontent-%COMP%] {\r\n  background: hsl(0, 0%, 97%);\r\n  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;\r\n  height: 4px;\r\n  margin-bottom: 12px;\r\n  margin-top: 30px;\r\n  position: relative;\r\n  text-align: left;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress_bar_title[_ngcontent-%COMP%] {\r\n  color: hsl(218, 4%, 50%);\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  position: relative;\r\n  top: -28px;\r\n  z-index: 1;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress_number[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%] {\r\n  background-color: hsl(0, 0%, 88%);\r\n  display: block;\r\n  width: 0;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  transition: width 1s linear 0s;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  background-color: hsl(0, 0%, 100%);\r\n  border-radius: 50%;\r\n  width: 4px;\r\n  height: 4px;\r\n  position: absolute;\r\n  right: 1px;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  width: 14px;\r\n  height: 14px;\r\n  background-color: inherit;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  right: -4px;\r\n  top: -5px;\r\n}\r\n\r\n  .bg-today[_ngcontent-%COMP%] {\r\n  background-color: #342bf0 !important;\r\n}\r\n\r\n  \r\n\r\n  @media only screen and (max-width: 768px) {\r\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]{\r\n    width: 80vw;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby1wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbUJLOztFQUVIO0lBQ0U7R0FDRDs7RUFDRDs7O0lBR0UsbUJBQW1CO0lBRW5CLHdDQUF3QztJQUN4QyxVQUFVO0lBQ1YsV0FBVztFQUNiOztFQUNBO0lBQ0UsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFHZix3QkFBd0I7SUFFeEIsdUJBQXVCO0VBQ3pCOztFQUNBOztJQUVFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztFQUNiOztFQUNBO0lBQ0UsWUFBWTtJQUVaLHVCQUF1QjtFQUN6Qjs7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFjQTtJQUNFOzs7TUFHRSxlQUFlO01BQ2YsV0FBVztJQUNiO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsV0FBVztJQUNiO0VBQ0Y7O0VBQ0E7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxrQkFBa0I7QUFDdEI7O0VBQ0E7Ozs7OztLQU1LOztFQUVMO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7RUFDQSxVQUFVOztFQUNWO0VBQ0UsVUFBVTtBQUNaOztFQUVBLFVBQVU7O0VBQ1Y7RUFDRSxtQkFBbUI7QUFDckI7O0VBRUEsV0FBVzs7RUFDWDtFQUNFLGdCQUFnQjtBQUNsQjs7RUFFQSxvQkFBb0I7O0VBQ3BCO0VBQ0UsZ0JBQWdCO0FBQ2xCOztFQUNBO0VBQ0UsZUFBZTtBQUNqQjs7RUFDQTtDQUNDLHlCQUF5QjtDQUN6QixZQUFZO0FBQ2I7O0VBQ0E7RUFDRSx5QkFBeUI7RUFDekI7QUFDRjs7RUFFQTtFQUNFLHlC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QUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04sVUFBVTtBQUNaOztFQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7QUFDWDs7RUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7RUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7O0VBRUg7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGOztFQUNBOzs7OztHQUtHIiwiZmlsZSI6InBvcnRmb2xpby1wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogI2xvYWRpbmd7IFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgbGVmdDogNTAlOyBcclxuICB0b3A6IDUwJTsgXHJcbiAgei1pbmRleDogMTsgXHJcbiAgd2lkdGg6IDE1MHB4OyBcclxuICBoZWlnaHQ6IDE1MHB4OyBcclxuICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDsgXHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgXHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiOyBcclxuICB3aWR0aDogMTIwcHg7IFxyXG4gIGhlaWdodDogMTIwcHg7IFxyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7IFxyXG4gIH0gXHJcbiAgICBcclxuICBAa2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH0gXHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSBcclxuICB9ICovXHJcblxyXG4gIC5saXN0LWljb24tY29sb3J7XHJcbiAgICBjb2xvcjogIzk2OTY5NlxyXG4gICB9XHJcbiAgLmxvYWRlcixcclxuICAubG9hZGVyOmJlZm9yZSxcclxuICAubG9hZGVyOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwZGM1YzE7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDEgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb246IGxvYWQxIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgd2lkdGg6IDFlbTtcclxuICAgIGhlaWdodDogNGVtO1xyXG4gIH1cclxuICAubG9hZGVyIHtcclxuICAgIGNvbG9yOiAjMGRjNWMxO1xyXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgICBtYXJnaW46IDg4cHggYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICB9XHJcbiAgLmxvYWRlcjpiZWZvcmUsXHJcbiAgLmxvYWRlcjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjb250ZW50OiAnJztcclxuICB9XHJcbiAgLmxvYWRlcjpiZWZvcmUge1xyXG4gICAgbGVmdDogLTEuNWVtO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG4gIH1cclxuICAubG9hZGVyOmFmdGVyIHtcclxuICAgIGxlZnQ6IDEuNWVtO1xyXG4gIH1cclxuXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQxIHtcclxuICAgIDAlLFxyXG4gICAgODAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMDtcclxuICAgICAgaGVpZ2h0OiA0ZW07XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICBib3gtc2hhZG93OiAwIC0yZW07XHJcbiAgICAgIGhlaWdodDogNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGxvYWQxIHtcclxuICAgIDAlLFxyXG4gICAgODAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMDtcclxuICAgICAgaGVpZ2h0OiA0ZW07XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICBib3gtc2hhZG93OiAwIC0yZW07XHJcbiAgICAgIGhlaWdodDogNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICAubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbi8qIFxyXG4gIHRhYmxlLCB0aCwgdGQge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXItc3BhY2luZzogMTVweDtcclxuICB9ICovXHJcblxyXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51e1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0b3A6IDM4cHggIWltcG9ydGFudDtcclxuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLyogd2lkdGggKi9cclxuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbi5zaGFyZWRkZXRhaWxzLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzU1NTtcclxufVxyXG4ubmd4LXBhZ2luYXRpb24ge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4jYmFja0J0bjpob3ZlcntcclxuIGJhY2tncm91bmQtY29sb3I6IzAwNzNlNiA7XHJcbiBjb2xvcjogd2hpdGU7IFxyXG59XHJcbiNNZGxfY2xvc2VidG46aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICBjb2xvcjp3aGl0ZVxyXG59XHJcblxyXG4udGV4dC13YXJuaW5nLTF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTBhNztcclxuICBjb2xvcjojRkZBODAwO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udGV4dC1kYW5nZXItMXtcclxuICBjb2xvcjogI0Y2NEU2MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFMkU1O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuZHJvcGRvd24tZG93bixcclxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLmRyb3Bkb3duLXVwe1xyXG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjYWRhZGFkICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50XHJcbn1cclxuLmljb25kIGl7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uY2FyZC5icmRyIC5jYXJkLWJvZHk+ZGl2IHtcclxuICBmbGV4OiAwLjU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbn1cclxuLmNhcmQuYnJkciB7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMjc4NmZiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uY2FyZC5icmRyLmRhbmdlciB7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZGMzNTQ1O1xyXG59XHJcbi5jYXJkLmJyZHIuc3VjY2VzcyB7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMWRjOWI3O1xyXG59XHJcbjo6bmctZGVlcCAuZHJvcGRvd24tbGlzdHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufVxyXG5cclxuLmt0LXRvZG9fX2RldGFpbHN7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbntcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XHJcbiAgICBjb2xvcjogIzU4NjdkZDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDAgOHB4IDAgMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG5cclxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24gc3ZnLmt0LXN2Zy1pY29uIHtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gIH1cclxuXHJcbi5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uIHN2Zy5rdC1zdmctaWNvbi5hZGQtaWNvbntcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24gLmt0LXN2Zy1pY29uIGcgW2ZpbGxde1xyXG4gICAgZmlsbDogIzU4NjdkZDtcclxuICB9XHJcbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24gc3ZnLmt0LXN2Zy1pY29uLmFkZC1pY29uIHBhdGh7XHJcbiAgICBmaWxsOiAjNTg2N2RkO1xyXG4gIH1cclxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbjpob3ZlciBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24gcGF0aCxcclxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbi5hY3RpdmUgc3ZnLmt0LXN2Zy1pY29uLmFkZC1pY29uIHBhdGh7XHJcbiAgICBmaWxsOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb246aG92ZXIgLmt0LXN2Zy1pY29uIGcgW2ZpbGxdLFxyXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uLmFjdGl2ZSAua3Qtc3ZnLWljb24gZyBbZmlsbF17XHJcbiAgZmlsbDogI2ZmZjtcclxufVxyXG5cclxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbjpob3ZlcixcclxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbi5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIC5jYXJkLXRpdGxlIC5mYXZvdXJpdGUgaXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gIH1cclxuICAuY2FyZC10aXRsZSAuZmF2b3VyaXRlLmFjdGl2ZSBpLFxyXG4gIC5jYXJkLXRpdGxlIC5mYXZvdXJpdGU6aG92ZXIgaXtcclxuICAgIGNvbG9yOiAjZmZjMTA3O1xyXG4gIH1cclxuXHJcbiAgLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyIHRke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDZkNmQ2O1xyXG4gIH1cclxuXHJcbiAgLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLnN1Y2Nlc3Mge1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMWRjOWI3OyAqL1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogNHB4OyAqL1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICMxZGM5YjdcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIud2FybmluZyB7XHJcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmI4MjI7ICAqL1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNmZmI4MjJcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIuaW5mbyB7XHJcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyNzg2ZmI7ICAqL1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICMyNzg2ZmJcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIuZGFuZ2VyIHtcclxuICAgIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0Y1OEE4QjsgICovXHJcbiAgICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggI0Y1OEE4QlxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5VbmRlckFwcHJvdmFscyB7XHJcbiAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQkQ4MzhDOyAgKi9cclxuICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggI0JEODM4Q1xyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5Gb3J3YXJkVW5kZXJBcHByb3ZhbCB7XHJcbiAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3OyAqL1xyXG4gIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjRTBCMUQ3IFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5jb21wbGV0ZVVuZGVyQXBwcm92YWwge1xyXG4gIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZjsgICovXHJcbiAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICM5OGM3YmZcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIubmV3UHJvamVjdCB7XHJcbiAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOThjN2JmOyAgKi9cclxuICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggIzk4YzdiZlxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5wcm9qZWN0aG9sZCB7XHJcbiAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQzBCNURDOyAgKi9cclxuICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggI0MwQjVEQ1xyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5wcm9qZWN0Q29tUmVqZWN0ZWQge1xyXG4gIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0MwQjVEQzsgICovXHJcbiAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNlNmM5NDdcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIucHJvamVjdGhvbGRlZCB7XHJcbiAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQzBCNURDOyAgKi9cclxuICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggI0MwQjVEQ1xyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5OZXdwcm9qZWN0UmVqZWN0ZWQge1xyXG4gIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0MwQjVEQzsgICovXHJcbiAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNDMEI1RENcclxufVxyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLkhvbGR1bmRlckFwcCB7XHJcbiAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTg1MDk4OyAgKi9cclxuICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggI2E4NTA5OFxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5EZWFkbGluZUV4dGVuZGVke1xyXG4gIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0UwQjFENzsgICovXHJcbiAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNFMEIxRDdcclxufVxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIuRW5hY3RpdmVVbmRlckFwcHtcclxuICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7ICAqL1xyXG4gIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjRTBCMUQ3XHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLlRvZG9BY2hpZXZlZHtcclxuICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7ICAqL1xyXG4gIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjQkI4RkNFXHJcbn1cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLlRvRG9Db21wbGV0ZWR7XHJcbiAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3OyAgKi9cclxuICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggI2QxOWFlOVxyXG59XHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5OZXdUb2Rve1xyXG4gIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0UwQjFENzsgICovXHJcbiAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICM1MDg4YThcclxufVxyXG4uZGVsYXlEYXlze1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsgZyBbZmlsbF0ge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGN1YmljLWJlemllcigwLjkzLCAwLjM1LCAxLCAxKTtcclxuICBmaWxsOiAjNUU1RjYzO1xyXG59XHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2FzaWRlIC5rdC1pbmJveF9fbmF2IC5rdC1uYXYgLmt0LW5hdl9faXRlbSAua3QtbmF2X19saW5rIHtcclxuICBwYWRkaW5nOiAwLjJyZW0gMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLm1haWwtZHJvcGRvd24ge1xyXG4gIHdpZHRoOiA4MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1haWwtZHJvcGRvd24gdGFibGUgdGQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4ua3QtcXVpY2stcGFuZWwgLmt0LXBvcnRsZXQua3QtcG9ydGxldC0taGVhZC1sZyAua3QtcG9ydGxldF9faGVhZCB7XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxufVxyXG4ua3QtaW5ib3hfX2ljb24gLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVudS1zbSB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5kcm9wZG93bi1yZXBseSB1bCBsaSBhIC5rdC1uYXZfX2xpbmstaWNvbiB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9fbGFiZWwge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG59XHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2Zvcm0gLmt0LWluYm94X19ib2R5IC5rdC1pbmJveF9fdG8gLmt0LWluYm94X19maWVsZCAua3QtaW5ib3hfX2lucHV0IGlucHV0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5rdC1uYXZfX2xpbmstbm9ob3Zlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzc0Nzg4RCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogYXV0bztcclxufVxyXG4ua3QtbmF2X19saW5rLXRleHQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XHJcbn1cclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmssXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTQsIDEwMCwgMTQyLCAwLjIpO1xyXG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93LFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLXRleHQsXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuLmt0LWJhZGdlLmt0LWJhZGdlLS11bmlmaWVkLWJyYW5kIHtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTk1LCAxOTUsIDE5NSk7XHJcbn1cclxuLyogLmluYm94LXRleHQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn0gKi9cclxuLmt0LXF1aWNrLXBhbmVsMiB7XHJcbiAgd2lkdGg6IDY1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmt0LXF1aWNrLXBhbmVsLS1yaWdodCAua3QtcXVpY2stcGFuZWwge1xyXG4gIHJpZ2h0OiAtNjYwcHg7XHJcbiAgbGVmdDogYXV0bztcclxufVxyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xyXG59XHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG59XHJcbi8qIC5zb21lY2xhc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59ICovXHJcbi8qIDpob3N0KC5zb21lQ2xhc3MpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn0gKi9cclxuLmt0LWluYm94IC5rdC1pbmJveF9faWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2hhdGNvdW50IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLWRhcmsge1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQ6ICM4QzhEOTI7XHJcbn1cclxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsgZyBbZmlsbF0ge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGN1YmljLWJlemllcigwLjkzLCAwLjM1LCAxLCAxKTtcclxuICBmaWxsOiAjNUU1RjYzO1xyXG59XHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2FzaWRlIC5rdC1pbmJveF9fbmF2IC5rdC1uYXYgLmt0LW5hdl9faXRlbSAua3QtbmF2X19saW5rIHtcclxuICBwYWRkaW5nOiAwLjJyZW0gMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmt0LWZvbnQtUmVwbHlSZXF1aXJlZCB7XHJcbiAgY29sb3I6ICNhNmMgIWltcG9ydGFudDtcclxufVxyXG4ubWFpbC1kcm9wZG93biB7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4ubWFpbC1kcm9wZG93biB0YWJsZSB0ZCB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5rdC1xdWljay1wYW5lbCAua3QtcG9ydGxldC5rdC1wb3J0bGV0LS1oZWFkLWxnIC5rdC1wb3J0bGV0X19oZWFkIHtcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5rdC1pbmJveF9faWNvbiAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1tZW51LXNtIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuLmRyb3Bkb3duLXJlcGx5IHVsIGxpIGEgLmt0LW5hdl9fbGluay1pY29uIHtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19mb3JtIC5rdC1pbmJveF9fYm9keSAua3QtaW5ib3hfX3RvIC5rdC1pbmJveF9fZmllbGQgLmt0LWluYm94X19sYWJlbCB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9faW5wdXQgaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmt0LW5hdl9fbGluay1ub2hvdmVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcbi5rdC1uYXZfX2xpbmstdGV4dDpob3ZlciB7XHJcbiAgY29sb3I6ICM3NDc4OEQgIWltcG9ydGFudDtcclxufVxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTAwLCAxNDIsIDAuMik7XHJcbiAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXHJcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxyXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcclxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93IHtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLXVuaWZpZWQtYnJhbmQge1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQ6IHJnYigxOTUsIDE5NSwgMTk1KTtcclxufVxyXG4vKiAuaW5ib3gtdGV4dCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufSAqL1xyXG4ua3QtcXVpY2stcGFuZWwyIHtcclxuICB3aWR0aDogNjUwcHggIWltcG9ydGFudDtcclxufVxyXG4ua3QtcXVpY2stcGFuZWwtLXJpZ2h0IC5rdC1xdWljay1wYW5lbCB7XHJcbiAgcmlnaHQ6IC02NjBweDtcclxuICBsZWZ0OiBhdXRvO1xyXG59XHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XHJcbn1cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbn1cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1NTU7XHJcbn1cclxuLyogLnNvbWVjbGFzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0gKi9cclxuLyogOmhvc3QoLnNvbWVDbGFzcykge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSAqL1xyXG4ua3QtaW5ib3ggLmt0LWluYm94X19pY29uIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMzVweDtcclxuICB3aWR0aDogMzVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLWlubGluZSB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAuMTVyZW0gMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19hc2lkZSB7XHJcbiAgcGFkZGluZzogMTdweDtcclxuICB3aWR0aDogMjQzcHg7XHJcbn1cclxuLyogU3RhdHVzIENvbG9ycyAqL1xyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3dhcm5pbmd7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZiODIyO1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcHJpbWFyeXtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5NWJlZDk7XHJcbn1cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9zdWNjZXNze1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk1YmVkOTtcclxufVxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX0RhbmdlcntcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNGNThBOEI7XHJcbn1cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9ob2xke1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2MwYjVkY1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfcmVqZWN0ZWR7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjVjMjkzO1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfdW5kZXJBcHByb3ZhbHN7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQkQ4MzhDO1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfZm9yd2FyZFVuZGVyQXBwcm92YWx7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3O1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfY29tcGxldGVVbmRlckFwcHJvdmFse1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZjtcclxufVxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3Byb2plY3RIb2xke1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0MwQjVEQztcclxufVxyXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX05ld1Byb2plY3R7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDA3YmZmO1xyXG59XHJcbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfRGVhZGxpbmVFeHRlbmRlZHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDc7XHJcbn1cclxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9Ib2xkdW5kZXJBcHB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTg1MDk4O1xyXG59XHJcbi5rdC1pbmJveCAua3QtaW5ib3hfX2xpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xyXG59XHJcbi5pY29ucy1maWx0ZXIgLmt0LXRvZG9fX2ljb257XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmljb25zLWZpbHRlciAua3QtdG9kb19faWNvbiBzcGFue1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNTg2N2RkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1ODY3ZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMXB4O1xyXG4gIHJpZ2h0OiAtMTFweDtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcbi8qIC5pY29ucy1maWx0ZXIgLmt0LXRvZG9fX2ljb246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczYTFmNyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnRcclxufSAqL1xyXG4vKiAuaWNvbnMtZmlsdGVyIC5rdC10b2RvX19pY29uOmhvdmVyIHNwYW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMTM0LCAyNTEsIDEpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudFxyXG59ICovXHJcblxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGV7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdWx0aXNlbGVjdC1kcm9wZG93bltfbmdjb250ZW50LXVuai1jNDBdIC5kcm9wZG93bi1idG5bX25nY29udGVudC11bmotYzQwXXtcclxuICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogPT09IFNpZGViYXIgPT09ICovXHJcbi5zaWRlSW5mb2JhciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRURFQUU5O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGJveC1zaGFkb3c6MCAuMXJlbSAxcmVtIC4yNXJlbSByZ2IoMCAwIDAvNSUpIWltcG9ydGFudDtcclxuICAvKiBwYWRkaW5nLXRvcDogNjBweDsgKi9cclxufVxyXG4uY291bnQtaGVpZ2h0e1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi8qIC5jb3VudC1oZWlnaHQgLmp1c3RpZnktY29udGVudC1iZXR3ZWVue1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59ICovXHJcbi5jb3VudC1oZWlnaHQgLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIC5rdC1jaGVja2JveHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5cclxuLyogd2lkdGggKi9cclxuLmNvdW50LWhlaWdodDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbi5jb3VudC1oZWlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuLmNvdW50LWhlaWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG5cclxuLmRyb3Bkb3duIC5rdC1jaGVja2JveCA+IGlucHV0OmNoZWNrZWQgfiBzcGFue1xyXG4gIGJvcmRlci1jb2xvcjogIzAwNzNlNjtcclxufVxyXG4ua3QtY2hlY2tib3ggPiBzcGFuOmFmdGVyIHtcclxuICBib3JkZXI6IHNvbGlkICMwMDczZTY7XHJcbn1cclxuXHJcbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duIHtcclxuICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XHJcbn1cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7ICovXHJcbiAgICB0b3A6IDIwcHggIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IC0yMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yaWdodDogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItbGVmdDogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTVweDtcclxuICBsZWZ0OiAzMnB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMTdweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yaWdodDogMTlweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItbGVmdDogMTlweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTdweDtcclxuICBsZWZ0OiAzMHB4O1xyXG4gIHotaW5kZXg6IDg7XHJcbn1cclxuXHJcbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnUxIC5maWx0ZXItYm94e1xyXG4gIHdpZHRoOiAzMy4zMzMzJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDEpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCgxKXtcclxuICB3aWR0aDogMyU7XHJcbn1cclxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMiksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDIpe1xyXG4gIHdpZHRoOiA0JTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCgzKSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoMyl7XHJcbiAgd2lkdGg6IDMzJTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg0KSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoNCl7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg1KSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoNSl7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg2KSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoNil7XHJcbiAgd2lkdGg6IDE1JTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg3KSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoNyl7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg4KSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoOCl7XHJcbiAgd2lkdGg6IDE1JTtcclxufVxyXG5cclxuLmt0LXF1aWNrLXNlYXJjaCAua3QtcXVpY2stc2VhcmNoX19mb3JtIC5pbnB1dC1ncm91cC1wcmVwZW5kIC5pbnB1dC1ncm91cC10ZXh0LCAua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3VwLWFwcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2ZmOyAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3Vwe1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmRiZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uc2hvd19lbnRyaWVzIHNwYW57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiBcclxufVxyXG4uc2hvd19lbnRyaWVzIHNlbGVjdHtcclxuICAvKiB3aWR0aDogMTAwcHg7ICovXHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSg4OCwgMTAzLCAyMjEsIDAuMyk7XHJcbiAgY29sb3I6ICM1ODY3ZGQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jb3VudC1idG57XHJcbiAgLyogaGVpZ2h0OiAyNXB4OyAqL1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7ICovXHJcbiAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDg4LCA4OCwgODgpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG4vKiBTZWFyY2ggUHJvamVjdHMgKi9cclxuLmt0LWluYm94IC5rdC1pbmJveF9fdG9vbGJhciAua3QtaW5ib3hfX3NlYXJjaCAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xyXG59XHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZCwgLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kLXNob3J0e1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNlMmU5ZmY7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMjV2dztcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmRiZmYgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kIC5mb3JtLWNvbnRyb2wsIC5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZC1zaG9ydCAuZm9ybS1jb250cm9se1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmM7XHJcbn1cclxuXHJcbi8qIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uLmFjdGl2ZSAgKi9cclxuXHJcbi8qIC52YWxpbm9vcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnZhbGlub29yOjpiZWZvcmV7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDBweDtcclxuICB0b3A6IDBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59ICovXHJcblxyXG4ua3QtaW5ib3ggLmt0LWluYm94X19saXN0IC5rdC1pbmJveF9faXRlbXMgLmt0LWluYm94X19pdGVte1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZGVsZXRlLWJ0bntcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgcmlnaHQ6IDBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNztcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDU5cHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAhaW1wb3J0YW50O1xyXG59XHJcbi5kZWxldGUtYnRuIGl7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XHJcbiAgY29sb3I6ICM1ODY3ZGQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAxMHB4IDhweCAwIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi8qIC5kZWxldGUtYnRuIGl7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjc7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlICFpbXBvcnRhbnQ7XHJcbn0qL1xyXG4uYnRuLXNlY29uZGFyeS50aGVtZS1idG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYnRuLmJ0bi1sYWJlbC1wcmltYXJ5e1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2JjZmY7XHJcbn1cclxuXHJcbi5kZWxldGUtYnRuIGk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmt0LWluYm94X19pdGVtOmhvdmVyIC5kZWxldGUtYnRue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keS5taW4tc2Nyb2xse1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuLm1vZGFsLWJvZHkubWluLXNjcm9sbDpob3ZlcntcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5Lm1pbi1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG4ubW9kYWwtYm9keS5taW4tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkubWluLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICM1ODY3ZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4ubW9kYWwtYm9keS5taW4tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2IzYmNmZjtcclxufVxyXG4ua3QtaW5ib3hfX2RldGFpbHN7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb250LTE2e1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIE5ldyBEZXNpZ24gT0YgU2lkZSBCYXIgKi9cclxuLm5hbWUtYm94e1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDlweDtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ubmFtZXMtcmVzcG9uc2V7XHJcbiAgZGlzcGxheSA6aW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5uYW1lcy1yZXNwb25zZSBzcGFuOmZpcnN0LWNoaWxke1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5uYW1lcy1yZXNwb25zZSBzcGFuOmxhc3QtY2hpbGR7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmhlYWQtYnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDEwMywgMjIxLCAwLjEpO1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHggM3B4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiY2ZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uaGVhZC1idG4gaXtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzU4NjdkZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG5cclxuLmRldmlkZXJ7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLnByaWNldmFsdWVzIHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcblxyXG4udG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDEpLCAudG9wLWJvcmRlciAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDIpICB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn1cclxuLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgzKSwgLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSAge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmVcclxufVxyXG5cclxuLnByaWNldmFsdWVzOm50aC1jaGlsZCgyKSwgLnByaWNldmFsdWVzOm50aC1jaGlsZCg0KSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbi5kbXMtbGlua3N7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xyXG59XHJcblxyXG4uZG1zLWxpbmtzIGxpIGF7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5weS0xMHB4e1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4vKiBQcm9ncmVzcyBCYXIgKi9cclxuLnByb2dyZXNzX2JhciAucHJvLWJhciB7XHJcbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCA5NyUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCBoc2xhKDAsIDAlLCAwJSwgMC4xKSBpbnNldDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzX2Jhcl90aXRsZSB7XHJcbiAgY29sb3I6IGhzbCgyMTgsIDQlLCA1MCUpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0yOHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzX251bWJlciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgODglKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDFzIGxpbmVhciAwcztcclxufVxyXG5cclxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3MtYmFyLWlubmVyOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogNHB4O1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMXB4O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTRweDtcclxuICB0b3A6IC01cHg7XHJcbn1cclxuXHJcbi5iZy10b2RheSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MmJmMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogLnBvcnRmb2xpby1zZWFyY2h7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9zZWFyY2hpY29uLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBwYWRkaW5nOiAxMnB4IDBweCAxMnB4IDBweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnBvcnRmb2xpby1zZWFyY2g6Zm9jdXMge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOGE4ODg4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxufSAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZHtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gIH1cclxufVxyXG4vKiAubmctc2VsZWN0Lm5nLXNlbGVjdC1kaXNhYmxlZD4ubmctc2VsZWN0LWNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRhZGFkO1xyXG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjYWRhZGFkICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50XHJcbn0gKi9cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app__LayoutDashboard_portfolio-projects_portfolio-projects_component_ts.js.map