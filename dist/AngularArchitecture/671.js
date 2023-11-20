"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([[671],{

/***/ 96076:
/*!*******************************************************!*\
  !*** ./src/app/Shared/Filter/grd-filter-pipe.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrdFilterPipePipe": () => (/* binding */ GrdFilterPipePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class GrdFilterPipePipe {
    transform(items, filter, defaultFilter) {
        if (!filter) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        if (filter && Array.isArray(items)) {
            let filterKeys = Object.keys(filter);
            if (defaultFilter) {
                return items.filter(item => filterKeys.reduce((x, keyName) => (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
            }
            else {
                return items.filter(item => {
                    return filterKeys.some((keyName) => {
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
                    });
                });
            }
            //return localStorage.setItem("FilteredData",JSON.stringify(items))
        }
    }
}
GrdFilterPipePipe.ɵfac = function GrdFilterPipePipe_Factory(t) { return new (t || GrdFilterPipePipe)(); };
GrdFilterPipePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "grdFilterPipe", type: GrdFilterPipePipe, pure: true });


/***/ }),

/***/ 59112:
/*!**************************************************************!*\
  !*** ./src/app/_LayoutDashboard/home/home-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 85694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent }];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 85694:
/*!*********************************************************!*\
  !*** ./src/app/_LayoutDashboard/home/home.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var src_app_Models_portfolio_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_Models/portfolio-dto */ 60198);
/* harmony import */ var src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/user-details-dto */ 12359);
/* harmony import */ var src_app_Models_shareportfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Models/shareportfolio */ 85471);
/* harmony import */ var src_app_Models_status_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Models/status-dto */ 14360);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/core */ 19770);
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ 61049);
/* harmony import */ var src_app_Shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/components/confirm-dialog/confirm-dialog.component */ 49785);
/* harmony import */ var src_app_Shared_Filter_grd_filter_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Shared/Filter/grd-filter-pipe.pipe */ 96076);
/* harmony import */ var src_app_Models_dropdown_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_Models/dropdown-dto */ 79536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/_Services/link.service */ 33529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-search-filter */ 9991);





//import { LoadingBarService } from '@ngx-loading-bar/core';
//Pie - Charts-------------------



// import { PaginatePipe } from 'ngx-pagination';

//import { ItemsList } from '@ng-select/ng-select/lib/items-list';











function HomeComponent_strong_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "All Portfolio List");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function HomeComponent_strong_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Favorite Portfolio List");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function HomeComponent_strong_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Owner Portfolio List");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function HomeComponent_strong_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Shared Portfolio List");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function HomeComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " About (");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4._CurrentpageRecords);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](") results found of page ", ctx_r4.Portfolio_CurrentPage, ". ");
} }
function HomeComponent_strong_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r5.countAll.toLocaleString());
} }
function HomeComponent_strong_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r6.countAll);
} }
function HomeComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 78)(1, "label", 79)(2, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function HomeComponent_div_70_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r28); const item_r25 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r27.isCompanychecked(item_r25)); })("ngModelChange", function HomeComponent_div_70_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r28); const item_r25 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](item_r25.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", item_r25.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r25.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](item_r25.Count);
} }
function HomeComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 78)(1, "label", 79)(2, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function HomeComponent_div_78_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r33); const item_r30 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r32.isStatusChecked(item_r30)); })("ngModelChange", function HomeComponent_div_78_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r33); const item_r30 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](item_r30.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", item_r30.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r30.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](item_r30.Count);
} }
function HomeComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 78)(1, "label", 79)(2, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function HomeComponent_div_85_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r38); const item_r35 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r37.isEmpChecked(item_r35)); })("ngModelChange", function HomeComponent_div_85_Template_input_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r38); const item_r35 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](item_r35.checked = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", item_r35.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r35.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](item_r35.Count);
} }
function HomeComponent_label_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", ctx_r10.Portfolio_CurrentPage, " of ", ctx_r10.NoOfPages, " pages");
} }
function HomeComponent_label_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", ctx_r11.Portfolio_FavoritePage, " of ", ctx_r11.NoOfPages, " pages");
} }
function HomeComponent_label_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", ctx_r12.Portfolio_OwnerPage, " of ", ctx_r12.NoOfPages, " pages");
} }
function HomeComponent_label_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", ctx_r13.Portfolio_SharedPage, " of ", ctx_r13.NoOfPages, " pages");
} }
function HomeComponent_button_99_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_button_99_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); ctx_r40.Portfolio_CurrentPage = ctx_r40.Portfolio_CurrentPage - 1; return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r40.getPortfolio_List()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r14.Portfolio_CurrentPage == 1);
} }
function HomeComponent_button_100_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_button_100_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); ctx_r42.Portfolio_FavoritePage = ctx_r42.Portfolio_FavoritePage - 1; return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r42.Favourite_Portfolios()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r15.Portfolio_FavoritePage == 1);
} }
function HomeComponent_button_101_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_button_101_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); ctx_r44.Portfolio_OwnerPage = ctx_r44.Portfolio_OwnerPage - 1; return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r44.Owners_Portfolios()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r16.Portfolio_OwnerPage == 1);
} }
function HomeComponent_button_102_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_button_102_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); ctx_r46.Portfolio_SharedPage = ctx_r46.Portfolio_SharedPage - 1; return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r46.Shared_Portfolios()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r17.Portfolio_SharedPage == 1);
} }
function HomeComponent_button_103_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_button_103_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); ctx_r48.Portfolio_CurrentPage = ctx_r48.Portfolio_CurrentPage + 1; return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r48.getPortfolio_List()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r18.NoOfRecordsPerPage < 30);
} }
function HomeComponent_button_104_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_button_104_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); ctx_r50.Portfolio_FavoritePage = ctx_r50.Portfolio_FavoritePage + 1; return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r50.Favourite_Portfolios()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r19.NoOfRecordsPerPage < 30);
} }
function HomeComponent_button_105_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_button_105_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); ctx_r52.Portfolio_OwnerPage = ctx_r52.Portfolio_OwnerPage + 1; return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r52.Owners_Portfolios()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r20.NoOfRecordsPerPage < 30);
} }
function HomeComponent_button_106_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_button_106_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); ctx_r54.Portfolio_SharedPage = ctx_r54.Portfolio_SharedPage + 1; return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r54.Shared_Portfolios()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r21.NoOfRecordsPerPage < 30);
} }
function HomeComponent_p_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r22.specialnote, " ");
} }
function HomeComponent_div_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "h4", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "No Portfolio's has created");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "h4", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "No Shared ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "h4", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "No Favourites ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", ctx_r23.messageForEmpty);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", ctx_r23.NoSharedmsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", ctx_r23.Nofavmsg);
} }
const _c0 = function (a0) { return { "color": a0 }; };
function HomeComponent_div_140_div_1_a_7_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_1_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_1_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r85); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r83.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_1_a_7_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r76.Current_user_ID);
} }
function HomeComponent_div_140_div_1_a_8_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite1 === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_1_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_1_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r91); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r89.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_1_a_8_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r77.Current_user_ID);
} }
function HomeComponent_div_140_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.CreatedName, " ");
} }
function HomeComponent_div_140_div_1_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.SharedName, " ");
} }
function HomeComponent_div_140_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 89)(2, "div", 90)(3, "div", 91)(4, "div", 92)(5, "div")(6, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_1_a_7_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_div_140_div_1_a_8_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_1_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r97); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r95.OnCardClick(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.CreatedName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 96)(11, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 98)(14, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_1_div_15_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, HomeComponent_div_140_div_1_ng_template_16_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 104)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_1_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r97); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r98._deletePortfolio(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.Created_By, item_r56.Created_DT, item_r56.ProjectsCount, item_r56.Status)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r58.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r58.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r56.Portfolio_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.CreatedName != "")("ngIfElse", _r79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.ProjectsCount, " Project(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.Delaydays, " maximum days delay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](25, 8, item_r56.Created_DT, "medium"));
} }
function HomeComponent_div_140_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 119)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_2_div_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r108); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r106.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_2_div_7_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite1 === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_2_div_7_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_2_div_7_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r115); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit; const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r113.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_2_div_7_a_1_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r110.Current_user_ID);
} }
function HomeComponent_div_140_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_2_div_7_a_1_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r102.Current_user_ID);
} }
function HomeComponent_div_140_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.CreatedName, " ");
} }
function HomeComponent_div_140_div_2_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.SharedName, " ");
} }
function HomeComponent_div_140_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 110)(2, "div", 90)(3, "div", 111)(4, "div", 112)(5, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, HomeComponent_div_140_div_2_div_6_Template, 3, 3, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_2_div_7_Template, 2, 1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_2_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r122); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r120.OnCardClick(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.CreatedName, item_r56.Created_DT)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 116)(10, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 98)(13, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, HomeComponent_div_140_div_2_div_14_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_2_ng_template_15_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 104)(22, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](26, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_2_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r122); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r123._deletePortfolio(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.Created_By, item_r56.Created_DT, item_r56.ProjectsCount, item_r56.Status)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](28, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](16);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r59.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r59.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r56.Portfolio_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.CreatedName != "")("ngIfElse", _r104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.ProjectsCount, " Project(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](24, 8, item_r56.Created_DT, "medium"));
} }
function HomeComponent_div_140_div_3_a_7_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 120);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_3_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_3_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r135); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r133.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_3_a_7_i_1_Template, 1, 3, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r126.Current_user_ID);
} }
function HomeComponent_div_140_div_3_a_8_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite1 === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_3_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_3_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r141); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r139.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_3_a_8_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r127.Current_user_ID);
} }
function HomeComponent_div_140_div_3_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.CreatedName, " ");
} }
function HomeComponent_div_140_div_3_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.SharedName, " ");
} }
function HomeComponent_div_140_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 121)(2, "div", 90)(3, "div", 111)(4, "div", 112)(5, "div", 113)(6, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_3_a_7_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_div_140_div_3_a_8_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_3_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r147); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r145.OnCardClick(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.CreatedName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 116)(11, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 98)(14, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_3_div_15_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, HomeComponent_div_140_div_3_ng_template_16_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 122)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_3_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r147); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r148._deletePortfolio(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.Created_By, item_r56.Created_DT, item_r56.ProjectsCount, item_r56.Status)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r60.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r60.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r56.Portfolio_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.CreatedName != "")("ngIfElse", _r129);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.ProjectsCount, " Project(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](25, 8, item_r56.Created_DT, "medium"));
} }
function HomeComponent_div_140_div_4_a_7_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 120);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_4_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_4_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r160); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r158.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_4_a_7_i_1_Template, 1, 3, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r151.Current_user_ID);
} }
function HomeComponent_div_140_div_4_a_8_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite1 === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_4_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_4_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r166); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r164.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_4_a_8_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r152.Current_user_ID);
} }
function HomeComponent_div_140_div_4_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.CreatedName, " ");
} }
function HomeComponent_div_140_div_4_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.SharedName, " ");
} }
function HomeComponent_div_140_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 124)(2, "div", 90)(3, "div", 111)(4, "div", 112)(5, "div", 113)(6, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_4_a_7_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_div_140_div_4_a_8_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_4_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r172); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r170.OnCardClick(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.CreatedName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 116)(11, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 98)(14, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_4_div_15_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, HomeComponent_div_140_div_4_ng_template_16_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 122)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_4_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r172); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r173._deletePortfolio(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.Created_By, item_r56.Created_DT, item_r56.ProjectsCount, item_r56.Status)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r61.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r61.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r56.Portfolio_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.CreatedName != "")("ngIfElse", _r154);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.ProjectsCount, " Project(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](25, 8, item_r56.Created_DT, "medium"));
} }
function HomeComponent_div_140_div_5_a_7_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 120);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_5_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_5_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r185); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r183.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_5_a_7_i_1_Template, 1, 3, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r176.Current_user_ID);
} }
function HomeComponent_div_140_div_5_a_8_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite1 === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_5_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r191 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_5_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r191); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r189.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_5_a_8_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r177.Current_user_ID);
} }
function HomeComponent_div_140_div_5_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.CreatedName, " ");
} }
function HomeComponent_div_140_div_5_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.SharedName, " ");
} }
function HomeComponent_div_140_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r197 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 126)(2, "div", 90)(3, "div", 111)(4, "div", 112)(5, "div", 113)(6, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_5_a_7_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_div_140_div_5_a_8_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_5_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r197); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r195.OnCardClick(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.CreatedName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 116)(11, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 98)(14, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_5_div_15_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, HomeComponent_div_140_div_5_ng_template_16_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 122)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_5_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r197); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r198._deletePortfolio(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.Created_By, item_r56.Created_DT, item_r56.ProjectsCount, item_r56.Status)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r62.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r62.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r56.Portfolio_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.CreatedName != "")("ngIfElse", _r179);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.ProjectsCount, " Project(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](25, 8, item_r56.Created_DT, "medium"));
} }
function HomeComponent_div_140_div_6_a_7_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 120);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_6_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r210 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_6_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r210); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r208.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_6_a_7_i_1_Template, 1, 3, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r201.Current_user_ID);
} }
function HomeComponent_div_140_div_6_a_8_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite1 === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_6_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_6_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r216); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r214.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_6_a_8_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r202.Current_user_ID);
} }
function HomeComponent_div_140_div_6_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.CreatedName, " ");
} }
function HomeComponent_div_140_div_6_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.SharedName, " ");
} }
function HomeComponent_div_140_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 127)(2, "div", 90)(3, "div", 111)(4, "div", 112)(5, "div", 113)(6, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_6_a_7_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_div_140_div_6_a_8_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_6_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r222); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r220.OnCardClick(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.CreatedName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 116)(11, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 98)(14, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_6_div_15_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, HomeComponent_div_140_div_6_ng_template_16_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 122)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_6_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r222); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r223._deletePortfolio(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.Created_By, item_r56.Created_DT, item_r56.ProjectsCount, item_r56.Status)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r204 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r63.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r63.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r56.Portfolio_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.CreatedName != "")("ngIfElse", _r204);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.ProjectsCount, " Project(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](25, 8, item_r56.Created_DT, "medium"));
} }
function HomeComponent_div_140_div_7_a_7_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 120);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_7_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_7_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r235); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r233.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_7_a_7_i_1_Template, 1, 3, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r226.Current_user_ID);
} }
function HomeComponent_div_140_div_7_a_8_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite1 === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_7_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r241 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_7_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r241); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r239.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_7_a_8_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r227.Current_user_ID);
} }
function HomeComponent_div_140_div_7_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.CreatedName, " ");
} }
function HomeComponent_div_140_div_7_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.SharedName, " ");
} }
function HomeComponent_div_140_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r247 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 129)(2, "div", 90)(3, "div", 111)(4, "div", 112)(5, "div", 113)(6, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_7_a_7_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_div_140_div_7_a_8_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_7_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r247); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r245.OnCardClick(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.CreatedName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 116)(11, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 98)(14, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_7_div_15_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, HomeComponent_div_140_div_7_ng_template_16_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 122)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_7_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r247); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r248._deletePortfolio(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.Created_By, item_r56.Created_DT, item_r56.ProjectsCount, item_r56.Status)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r229 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r64.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r64.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r56.Portfolio_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.CreatedName != "")("ngIfElse", _r229);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.ProjectsCount, " Project(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](25, 8, item_r56.Created_DT, "medium"));
} }
function HomeComponent_div_140_div_8_a_7_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 120);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_8_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r260 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_8_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r260); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r258.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_8_a_7_i_1_Template, 1, 3, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r251.Current_user_ID);
} }
function HomeComponent_div_140_div_8_a_8_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite1 === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_8_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r266 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_8_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r266); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r264.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_8_a_8_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r252.Current_user_ID);
} }
function HomeComponent_div_140_div_8_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.CreatedName, " ");
} }
function HomeComponent_div_140_div_8_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.SharedName, " ");
} }
function HomeComponent_div_140_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r272 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 130)(2, "div", 90)(3, "div", 111)(4, "div", 112)(5, "div", 113)(6, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_8_a_7_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_div_140_div_8_a_8_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_8_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r272); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r270.OnCardClick(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.CreatedName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 116)(11, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 98)(14, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_8_div_15_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, HomeComponent_div_140_div_8_ng_template_16_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 122)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_8_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r272); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r273._deletePortfolio(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.Created_By, item_r56.Created_DT, item_r56.ProjectsCount, item_r56.Status)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r254 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r65.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r65.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r56.Portfolio_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.CreatedName != "")("ngIfElse", _r254);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.ProjectsCount, " Project(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](25, 8, item_r56.Created_DT, "medium"));
} }
function HomeComponent_div_140_div_9_a_7_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 120);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_9_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r285 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_9_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r285); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r283.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_9_a_7_i_1_Template, 1, 3, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r276.Current_user_ID);
} }
function HomeComponent_div_140_div_9_a_8_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite1 === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_9_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r291 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_9_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r291); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r289.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_9_a_8_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r277.Current_user_ID);
} }
function HomeComponent_div_140_div_9_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.CreatedName, " ");
} }
function HomeComponent_div_140_div_9_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.SharedName, " ");
} }
function HomeComponent_div_140_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r297 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 131)(2, "div", 90)(3, "div", 111)(4, "div", 112)(5, "div", 113)(6, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_9_a_7_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_div_140_div_9_a_8_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_9_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r297); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r295.OnCardClick(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.CreatedName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 116)(11, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 98)(14, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_9_div_15_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, HomeComponent_div_140_div_9_ng_template_16_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 122)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_9_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r297); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r298._deletePortfolio(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.Created_By, item_r56.Created_DT, item_r56.ProjectsCount, item_r56.Status)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r279 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r66.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r66.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r56.Portfolio_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.CreatedName != "")("ngIfElse", _r279);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.ProjectsCount, " Project(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](25, 8, item_r56.Created_DT, "medium"));
} }
function HomeComponent_div_140_div_10_a_7_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 120);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_10_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r310 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_10_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r310); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r308.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_10_a_7_i_1_Template, 1, 3, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r301.Current_user_ID);
} }
function HomeComponent_div_140_div_10_a_8_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite1 === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_10_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r316 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_10_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r316); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r314.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_10_a_8_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r302.Current_user_ID);
} }
function HomeComponent_div_140_div_10_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.CreatedName, " ");
} }
function HomeComponent_div_140_div_10_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.SharedName, " ");
} }
function HomeComponent_div_140_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r322 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 133)(2, "div", 90)(3, "div", 111)(4, "div", 112)(5, "div", 113)(6, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_10_a_7_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_div_140_div_10_a_8_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_10_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r322); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r320.OnCardClick(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.CreatedName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 116)(11, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 98)(14, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_10_div_15_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, HomeComponent_div_140_div_10_ng_template_16_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 122)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_10_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r322); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r323._deletePortfolio(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.Created_By, item_r56.Created_DT, item_r56.ProjectsCount, item_r56.Status)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r304 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r67.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r67.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r56.Portfolio_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.CreatedName != "")("ngIfElse", _r304);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.ProjectsCount, " Project(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](25, 8, item_r56.Created_DT, "medium"));
} }
function HomeComponent_div_140_div_11_a_7_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 120);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_11_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r335 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_11_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r335); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r333.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_11_a_7_i_1_Template, 1, 3, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r326.Current_user_ID);
} }
function HomeComponent_div_140_div_11_a_8_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite1 === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_11_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r341 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_11_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r341); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r339.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_11_a_8_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r327.Current_user_ID);
} }
function HomeComponent_div_140_div_11_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.CreatedName, " ");
} }
function HomeComponent_div_140_div_11_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.SharedName, " ");
} }
function HomeComponent_div_140_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r347 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 126)(2, "div", 90)(3, "div", 111)(4, "div", 112)(5, "div", 113)(6, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_11_a_7_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_div_140_div_11_a_8_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_11_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r347); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r345.OnCardClick(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.CreatedName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 116)(11, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 98)(14, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_11_div_15_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, HomeComponent_div_140_div_11_ng_template_16_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 122)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_11_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r347); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r348 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r348._deletePortfolio(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.Created_By, item_r56.Created_DT, item_r56.ProjectsCount, item_r56.Status)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r329 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r68.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r68.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r56.Portfolio_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.CreatedName != "")("ngIfElse", _r329);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.ProjectsCount, " Project(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](25, 8, item_r56.Created_DT, "medium"));
} }
function HomeComponent_div_140_div_12_a_7_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 120);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_12_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r360 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_12_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r360); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r358.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_12_a_7_i_1_Template, 1, 3, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r351 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r351.Current_user_ID);
} }
function HomeComponent_div_140_div_12_a_8_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite1 === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_12_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r366 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_12_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r366); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r364.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_12_a_8_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r352.Current_user_ID);
} }
function HomeComponent_div_140_div_12_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.CreatedName, " ");
} }
function HomeComponent_div_140_div_12_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.SharedName, " ");
} }
function HomeComponent_div_140_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r372 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 126)(2, "div", 90)(3, "div", 111)(4, "div", 112)(5, "div", 113)(6, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_12_a_7_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_div_140_div_12_a_8_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_12_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r372); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r370 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r370.OnCardClick(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.CreatedName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 116)(11, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 98)(14, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_12_div_15_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, HomeComponent_div_140_div_12_ng_template_16_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 122)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_12_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r372); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r373 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r373._deletePortfolio(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.Created_By, item_r56.Created_DT, item_r56.ProjectsCount, item_r56.Status)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r354 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r69.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r69.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r56.Portfolio_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.CreatedName != "")("ngIfElse", _r354);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.ProjectsCount, " Project(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](25, 8, item_r56.Created_DT, "medium"));
} }
function HomeComponent_div_140_div_13_a_7_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 120);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_13_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r385 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_13_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r385); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r383 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r383.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_13_a_7_i_1_Template, 1, 3, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r376 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r376.Current_user_ID);
} }
function HomeComponent_div_140_div_13_a_8_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite1 === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_13_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r391 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_13_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r391); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r389 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r389.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_13_a_8_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r377 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r377.Current_user_ID);
} }
function HomeComponent_div_140_div_13_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.CreatedName, " ");
} }
function HomeComponent_div_140_div_13_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.SharedName, " ");
} }
function HomeComponent_div_140_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r397 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 134)(2, "div", 90)(3, "div", 111)(4, "div", 112)(5, "div", 113)(6, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_13_a_7_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_div_140_div_13_a_8_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_13_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r397); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r395.OnCardClick(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.CreatedName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 116)(11, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 98)(14, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_13_div_15_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, HomeComponent_div_140_div_13_ng_template_16_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 122)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_13_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r397); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r398 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r398._deletePortfolio(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.Created_By, item_r56.Created_DT, item_r56.ProjectsCount, item_r56.Status)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r379 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r70.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r70.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r56.Portfolio_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.CreatedName != "")("ngIfElse", _r379);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.ProjectsCount, " Project(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](25, 8, item_r56.Created_DT, "medium"));
} }
function HomeComponent_div_140_div_14_a_7_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 120);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_14_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r410 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_14_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r410); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r408.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_14_a_7_i_1_Template, 1, 3, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r401 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r401.Current_user_ID);
} }
function HomeComponent_div_140_div_14_a_8_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite1 === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_14_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r416 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_14_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r416); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r414.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_14_a_8_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r402.Current_user_ID);
} }
function HomeComponent_div_140_div_14_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.CreatedName, " ");
} }
function HomeComponent_div_140_div_14_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.SharedName, " ");
} }
function HomeComponent_div_140_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r422 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 135)(2, "div", 90)(3, "div", 111)(4, "div", 112)(5, "div", 113)(6, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_14_a_7_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_div_140_div_14_a_8_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_14_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r422); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r420 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r420.OnCardClick(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.CreatedName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 116)(11, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 98)(14, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_14_div_15_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, HomeComponent_div_140_div_14_ng_template_16_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 122)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_14_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r422); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r423._deletePortfolio(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.Created_By, item_r56.Created_DT, item_r56.ProjectsCount, item_r56.Status)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r404 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r71.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r71.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r56.Portfolio_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.CreatedName != "")("ngIfElse", _r404);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.ProjectsCount, " Project(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](25, 8, item_r56.Created_DT, "medium"));
} }
function HomeComponent_div_140_div_15_a_7_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 120);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_15_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r435 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_15_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r435); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r433 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r433.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_15_a_7_i_1_Template, 1, 3, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r426 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r426.Current_user_ID);
} }
function HomeComponent_div_140_div_15_a_8_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite1 === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_15_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r441 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_15_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r441); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r439 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r439.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_15_a_8_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r427 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r427.Current_user_ID);
} }
function HomeComponent_div_140_div_15_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.CreatedName, " ");
} }
function HomeComponent_div_140_div_15_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.SharedName, " ");
} }
function HomeComponent_div_140_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r447 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 136)(2, "div", 90)(3, "div", 111)(4, "div", 112)(5, "div", 113)(6, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_15_a_7_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_div_140_div_15_a_8_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_15_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r447); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r445 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r445.OnCardClick(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.CreatedName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 116)(11, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 98)(14, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_15_div_15_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, HomeComponent_div_140_div_15_ng_template_16_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 122)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_15_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r447); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r448 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r448._deletePortfolio(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.Created_By, item_r56.Created_DT, item_r56.ProjectsCount, item_r56.Status)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r429 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r72.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r72.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r56.Portfolio_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.CreatedName != "")("ngIfElse", _r429);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.ProjectsCount, " Project(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](25, 8, item_r56.Created_DT, "medium"));
} }
function HomeComponent_div_140_div_16_a_7_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 120);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_16_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r460 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_16_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r460); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r458 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r458.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_16_a_7_i_1_Template, 1, 3, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r451 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r451.Current_user_ID);
} }
function HomeComponent_div_140_div_16_a_8_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite1 === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_16_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r466 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_16_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r466); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r464 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r464.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_16_a_8_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r452 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r452.Current_user_ID);
} }
function HomeComponent_div_140_div_16_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.CreatedName, " ");
} }
function HomeComponent_div_140_div_16_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.SharedName, " ");
} }
function HomeComponent_div_140_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r472 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 134)(2, "div", 90)(3, "div", 111)(4, "div", 112)(5, "div", 113)(6, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_16_a_7_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_div_140_div_16_a_8_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_16_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r472); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r470 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r470.OnCardClick(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.CreatedName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 116)(11, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 98)(14, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_16_div_15_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, HomeComponent_div_140_div_16_ng_template_16_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 122)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_16_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r472); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r473 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r473._deletePortfolio(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.Created_By, item_r56.Created_DT, item_r56.ProjectsCount, item_r56.Status)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r454 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r73.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r73.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r56.Portfolio_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.CreatedName != "")("ngIfElse", _r454);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.ProjectsCount, " Project(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](25, 8, item_r56.Created_DT, "medium"));
} }
function HomeComponent_div_140_div_17_a_7_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 120);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_17_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r485 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_17_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r485); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r483 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r483.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_17_a_7_i_1_Template, 1, 3, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r476 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r476.Current_user_ID);
} }
function HomeComponent_div_140_div_17_a_8_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite1 === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_17_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r491 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_17_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r491); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r489 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r489.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_17_a_8_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r477 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r477.Current_user_ID);
} }
function HomeComponent_div_140_div_17_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.CreatedName, " ");
} }
function HomeComponent_div_140_div_17_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.SharedName, " ");
} }
function HomeComponent_div_140_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r497 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 127)(2, "div", 90)(3, "div", 111)(4, "div", 112)(5, "div", 113)(6, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_17_a_7_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_div_140_div_17_a_8_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_17_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r497); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r495 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r495.OnCardClick(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.CreatedName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 116)(11, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 98)(14, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_17_div_15_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, HomeComponent_div_140_div_17_ng_template_16_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 122)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_17_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r497); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r498 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r498._deletePortfolio(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.Created_By, item_r56.Created_DT, item_r56.ProjectsCount, item_r56.Status)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r479 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r74.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r74.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r56.Portfolio_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.CreatedName != "")("ngIfElse", _r479);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.ProjectsCount, " Project(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](25, 8, item_r56.Created_DT, "medium"));
} }
function HomeComponent_div_140_div_18_a_7_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 120);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_18_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r510 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_18_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r510); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r508 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r508.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_18_a_7_i_1_Template, 1, 3, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r501 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r501.Current_user_ID);
} }
function HomeComponent_div_140_div_18_a_8_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 109);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, item_r56.IsFavourite1 === true ? "#ffc107" : "ccc"));
} }
function HomeComponent_div_140_div_18_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r516 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_18_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r516); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r514 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r514.AddFavourites(item_r56.Portfolio_ID, item_r56.IsFavourite1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_18_a_8_i_1_Template, 1, 3, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r502 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r502.Current_user_ID);
} }
function HomeComponent_div_140_div_18_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.CreatedName, " ");
} }
function HomeComponent_div_140_div_18_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.SharedName, " ");
} }
function HomeComponent_div_140_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r522 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 127)(2, "div", 90)(3, "div", 111)(4, "div", 112)(5, "div", 113)(6, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_18_a_7_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_div_140_div_18_a_8_Template, 2, 1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_18_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r522); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r520 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r520.OnCardClick(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.CreatedName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 116)(11, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 98)(14, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_18_div_15_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, HomeComponent_div_140_div_18_ng_template_16_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 122)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_div_140_div_18_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r522); const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r523 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r523._deletePortfolio(item_r56.Portfolio_ID, item_r56.Portfolio_Name, item_r56.Created_By, item_r56.Created_DT, item_r56.ProjectsCount, item_r56.Status)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r504 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By == ctx_r75.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Created_By != ctx_r75.Current_user_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r56.Portfolio_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.CreatedName != "")("ngIfElse", _r504);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.ProjectsCount, " Project(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r56.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](25, 8, item_r56.Created_DT, "medium"));
} }
function HomeComponent_div_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, HomeComponent_div_140_div_1_Template, 30, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, HomeComponent_div_140_div_2_Template, 29, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, HomeComponent_div_140_div_3_Template, 30, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, HomeComponent_div_140_div_4_Template, 30, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, HomeComponent_div_140_div_5_Template, 30, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, HomeComponent_div_140_div_6_Template, 30, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_div_140_div_7_Template, 30, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_div_140_div_8_Template, 30, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, HomeComponent_div_140_div_9_Template, 30, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, HomeComponent_div_140_div_10_Template, 30, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, HomeComponent_div_140_div_11_Template, 30, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, HomeComponent_div_140_div_12_Template, 30, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, HomeComponent_div_140_div_13_Template, 30, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, HomeComponent_div_140_div_14_Template, 30, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, HomeComponent_div_140_div_15_Template, 30, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, HomeComponent_div_140_div_16_Template, 30, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, HomeComponent_div_140_div_17_Template, 30, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, HomeComponent_div_140_div_18_Template, 30, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Status == "InProcess");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Status == "Completion Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Status == "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Status == "Forward Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Status == "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Status == "Project Complete Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Status == "Project Holded");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Status == "New Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Status == "Enactive Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Status == "Deadline Extend Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Status == "Project Hold Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Status == "New Todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Status == "New Project Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Status == "Version");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Status == "ToDo Achieved");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r56.Status == "ToDo Completed");
} }
const _c1 = function (a0) { return { "active": a0 }; };
const _c2 = function (a0, a1) { return { "border-color": a0, "background-color": a1 }; };
//import { disableCursor } from '@fullcalendar/angular';
//import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
//import { MatPaginator } from '@angular/material/paginator/paginator';
//import { ViewChild } from '@angular/core';
//import { MatPaginator } from '@angular/material/paginator';
// declare var $: any;
class HomeComponent {
    constructor(service, notifyService, cdr, router, 
    // private loadingBar: LoadingBarService,
    _snackBar, dialog, _LinkService) {
        this.service = service;
        this.notifyService = notifyService;
        this.cdr = cdr;
        this.router = router;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this._LinkService = _LinkService;
        this.isFavorite = true;
        this.dropdownList = [];
        this.ProtypeArrlist = [];
        this.selectedItems = [];
        this.dropdownSettings_Status = {};
        this.dropdownSettings = {};
        this.dropdownSettings_Emp = {};
        this.dropdownSettings_Cmp = {};
        this.dropdownSettings_Stat = {};
        this.dropdownSettings_Team = {};
        this.dropdownsettings_Page = {};
        this._SelectedEmployees = [];
        this.edited = false;
        this.searchResult = false;
        this._ProjectDataList = [];
        this.search_status = [];
        this.search_Team = [];
        this.Selected_project_List = [];
        this.obj = {};
        this.selectedRowIds = new Set();
        this.master_checked = false;
        this.p = 1; //Paging
        this.Spinnerloading = false;
        this.SearchByType_List = [];
        //===================//
        this.progressbarValue = 0;
        this.curSec = 0;
        this._ExistingPortfolioOfProjects = [];
        this.Teamlist = [];
        this.StatusList = [];
        this.selectedItemsList = [];
        this.checkedIDs = [];
        this.CurrentPageNo = 1;
        this.btn_Share = true;
        this.returnUrl = 'backend/Dashboard';
        this.returnUrlAddPortfolio = 'CreatePortfolio';
        this._DistinctList = [];
        this.messageForEmpty = false;
        this.todaysDate = new Date();
        //-----------Filtering Dynmic -----//
        this.filteredProjects = [];
        this._portfolioName = "";
        this.NoOfRecordsPerPage = 0;
        this.NoOfPages = 1;
        //for Sorting jan
        this.filterList_Type = [];
        this.filterList_Status = [];
        this.filterList_Emp = [];
        this.filerpipe = new src_app_Shared_Filter_grd_filter_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__.GrdFilterPipePipe();
        this.def_filter = true;
        this.selected_arr_Type = [];
        this.selected_arr_status = [];
        this.selected_arr_Emp = [];
        this.EmpCountInFilter = [];
        this.TypeContInFilter = [];
        this.StatusCountFilter = [];
        this.checkedItems_Status = [];
        this.checkedItems_Company = [];
        this.checkedItems_Emp = [];
        this.selectedItem_Status = [];
        this.selectedItem_Company = [];
        this.selectedItem_Emp = [];
        this._filtersMessage = "";
        this.un_FilteredProjects = [];
        //loadrstart: any = this.LoadingBar_state.start();
        //loadrstop: any = this.LoadingBar_state.stop();
        this.hidetotalProjects = false;
        this.special = false;
        this.specialnote = "special characters `~!@#$%^&*()-_=+,<.>/?;:'" + '"' + "[]{}| not allowed";
        this.EmpDropdwn = [];
        this.ngEmployeeDropdown2 = [];
        this.activeClassOwners = false;
        this.activeClassAll = false;
        this.activeClassShare = false;
        this.activeClassFav = false;
        this.NoSharedmsg = false;
        this.Nofavmsg = false;
        this._loadChildComponent = false;
        this.Portfolio_CurrentPage = 1;
        this.Portfolio_OwnerPage = 1;
        this.Portfolio_SharedPage = 1;
        this.Portfolio_FavoritePage = 1;
        //Sorting.....
        this.clicks = 0;
        this._raciDetails = true;
        this.ObjUserDetails = new src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_1__.UserDetailsDTO();
        this.Obj_Portfolio_DTO = new src_app_Models_portfolio_dto__WEBPACK_IMPORTED_MODULE_0__.PortfolioDTO();
        this._objStatusDTO = new src_app_Models_status_dto__WEBPACK_IMPORTED_MODULE_3__.StatusDTO;
        this.ObjSharePortfolio = new src_app_Models_shareportfolio__WEBPACK_IMPORTED_MODULE_2__.Shareportfolio_DTO();
        this._objDropdownDTO = new src_app_Models_dropdown_dto__WEBPACK_IMPORTED_MODULE_8__.DropdownDTO();
    }
    ngOnInit() {
        this._raciDetails = true;
        this.A2Z = true;
        this.Z2A = false;
        this._subtaskDiv = true;
        this.hideDropdown = true;
        this._ItemsPerpage = 30;
        this.Portfolio_CurrentPage = 1;
        this._portfolioName = '';
        this.todaysDate;
        this.Project_Graph = "Graphs";
        this.NoSharedmsg = true;
        this.Nofavmsg = true;
        this.activeClassAll = true;
        this.activeClassOwners = false;
        this.activeClassShare = false;
        this.activeClassFav = false;
        this.pieBarCharts = true;
        this.Max50Char = true;
        this.HideStatusDropdown = false;
        //this.HideProjects = false;
        // this.isLoading = false;
        this._btnShareDetails = true;
        // this.messageForEmpty = true;
        this.btnGetRecords = true;
        this.PortfolioList = false;
        this._PortfolioListTable = true;
        this._ProjectList = true;
        this.Share_preferences = true;
        this.btn_CreatePortfolio = true;
        this._CurrentUserFullName = localStorage.getItem('UserfullName');
        this.Current_user = localStorage.getItem('_Currentuser');
        this.Current_user_ID = localStorage.getItem('EmpNo');
        this.searchText = '';
        this.search_Team = [];
        this.search_Type = [];
        this.search_status = [];
        this.service.ProjectDetails_List = [];
        this.selectedItemsList = [];
        this.checkedIDs = [];
        //console.log("Login By :", sessionStorage.getItem('EmpNo'));
        this._objStatusDTO.Emp_No = this.Current_user_ID;
        this.getPortfolio_List();
    }
    getPortfolio_List() {
        this._objStatusDTO.PageNumber = this.Portfolio_CurrentPage;
        this.service.GetPortfolioStatus(this._objStatusDTO).subscribe((data) => {
            this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
            console.log(this._ListProjStat, "test");
            this.NoOfRecordsPerPage = this._ListProjStat.length;
            // this.AllPortfolioslist = this._ListProjStat;
            this.Companylist_Json = JSON.parse(data[0]['Company_Json']);
            this.Employeelist_Json = JSON.parse(data[0]['Employee_Json']);
            this.Statuslist_Json = JSON.parse(data[0]['Status_Json']);
            // this._ActualPortfolioList_ForShare = JSON.parse(data[0]['PortfolioList_Json']);
            // this._ActualPListFor_All = JSON.parse(data[0]['PortfolioList_Json']);
            this.countAll = data[0]['Total'];
            this.countOwners = data[0]['Owners'];
            this.countShare = data[0]['Shared'];
            this.countFav = data[0]['Favourites'];
            this.NoOfPages = data[0]['NoOfPages'];
            let shrearry;
            shrearry = this._ListProjStat;
            if (this._ListProjStat.length == 0) {
                this.messageForEmpty = false;
            }
            else {
                this.messageForEmpty = true;
            }
        });
    }
    // OnNext(val) {
    //   if (val == 0) {
    //     this.Portfolio_CurrentPage = this.Portfolio_CurrentPage - 1;
    //     this.getPortfolio_List();
    //   }
    //   else if (val == 1) {
    //     this.Portfolio_CurrentPage = this.Portfolio_CurrentPage + 1;
    //     this.getPortfolio_List();
    //   }
    // }
    onKeyDownEvent(event) {
        this.searchText = event.target.value;
        this.applyFilters();
        //console.log(event.target.value);
    }
    ServerSide_Search(value) {
        this.searchResult = true;
        this.searchText = value;
        this.activeClassAll = true;
        this.activeClassFav = false;
        this.activeClassOwners = false;
        this.activeClassShare = false;
        this.applyFilters();
        // console.log(this.searchText);
    }
    Search() {
        if (this.PortfolioSearch != "") {
            this.Portfolio_CurrentPage = 1;
            this._ListProjStat = this._ListProjStat.filter(res => {
                return res.Portfolio_Name.toLocaleLowerCase().match(this.PortfolioSearch.toLocaleLowerCase());
            });
        }
        else if (this.PortfolioSearch == "") {
            this.ngOnInit();
        }
    }
    filterProjects(searchString) {
        return this.un_FilteredProjects.filter(p => p.Project_Name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
    }
    //Function Reset Filters
    resetFilters() {
        this.searchText = "";
        this.search_Type = [];
        this.Portfolio_CurrentPage = 1;
        this.edited = false;
        if (this.selectedItem_Company.length == 0) {
            this.selectedCom_String = null;
            this.checkedItems_Company = [];
        }
        if (this.selectedItem_Status.length == 0) {
            this.selectedStatus_String = null;
            this.checkedItems_Status = [];
        }
        if (this.selectedItem_Emp.length == 0) {
            this.selectedEmp_String = null;
            this.checkedItems_Emp = [];
        }
        this.applyFilters();
    }
    resetAll() {
        this.txtSearch = '';
        this.selectedItem_Company.length = 0;
        this.selectedItem_Status.length = 0;
        this.selectedItem_Emp.length = 0;
        this.resetFilters();
    }
    StatusSelect(PortfolioProjStatus) {
        this._PortProjStatus = PortfolioProjStatus['StatusCountDB'];
        if (this._PortProjStatus.includes('Delay')) {
            this._PortProjStatus = 'Delay';
        }
        if (this._PortProjStatus.includes('InProcess')) {
            this._PortProjStatus = 'InProcess';
        }
        if (this._PortProjStatus.includes('Completed')) {
            this._PortProjStatus = 'Completed';
        }
        if (this._PortProjStatus.includes('Project Complete Rejected')) {
            this._PortProjStatus = 'Project Complete Rejected';
        }
        if (this._PortProjStatus.includes('Project Hold')) {
            this._PortProjStatus = 'Project Hold';
        }
        if (this._PortProjStatus.includes('New Project Rejected')) {
            this._PortProjStatus = 'New Project Rejected';
        }
        if (this._PortProjStatus.includes('New Project')) {
            this._PortProjStatus = 'New Project';
        }
        if (this._PortProjStatus.includes('Project Holded')) {
            this._PortProjStatus = 'Project Holded';
        }
        if (this._PortProjStatus.includes('Under Approval')) {
            this._PortProjStatus = 'Under Approval';
        }
        if (this._PortProjStatus.includes('Forward Under Approval')) {
            this._PortProjStatus = 'Forward Under Approval';
        }
        if (this._PortProjStatus.includes('Completion Under Approval')) {
            this._PortProjStatus = 'Completion Under Approval';
        }
        if (this._PortProjStatus.includes('Enactive Under Approval')) {
            this._PortProjStatus = 'Enactive Under Approval';
        }
        if (this._PortProjStatus.includes('Deadline Extend Under Approval')) {
            this._PortProjStatus = 'Deadline Extend Under Approval';
        }
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
    labelUA() {
        this._PortProjStatus = "Under Approval";
        this._PortProjStatus.includes('Under Approval');
    }
    labelProjectHold() {
        this._PortProjStatus = "Project Hold";
        this._PortProjStatus.includes('Project Hold');
    }
    labelAll() {
        this._PortProjStatus = "";
    }
    StatusDeselect() {
        this._PortProjStatus = "";
    }
    isStatusChecked(item) {
        let arr = [];
        this.Statuslist_Json.forEach(element => {
            if (element.checked == true) {
                arr.push({ Status: element.Name });
                // console.log("---S--->", this.checkedItems_Status = arr)
                return this.checkedItems_Status = arr;
            }
        });
        let arr2 = [];
        this.Statuslist_Json.filter((item) => {
            if (item.checked == true) {
                this.applyFilters();
                return arr2.push(item);
            }
        });
        this.selectedItem_Status.push(arr2);
        this.Statuslist_Json.forEach(element => {
            if (element.checked == false) {
                this.selectedItem_Status.length = 0;
                this.resetFilters();
            }
        });
        if (this.selectedItem_Company.length == 0 && this.selectedItem_Status.length == 0 && this.selectedItem_Emp.length == 0) {
            this.edited = false;
        }
        else {
            this.edited = true;
        }
    }
    isCompanychecked(item) {
        let arr = [];
        this.Companylist_Json.forEach(element => {
            if (element.checked == true) {
                arr.push({ Company: element.Name });
                // console.log("Checked Company---->", this.checkedItems_Company = arr)
                return this.checkedItems_Company = arr;
            }
        });
        let arr2 = [];
        this.Companylist_Json.filter((item) => {
            if (item.checked == true) {
                this.applyFilters();
                return arr2.push(item);
            }
        });
        this.selectedItem_Company.push(arr2);
        // console.log("selected Item Comp--->",this.selectedItem_Company)
        this.Companylist_Json.forEach(element => {
            if (element.checked == false) {
                this.selectedItem_Company.length = 0;
                this.resetFilters();
            }
        });
        if (this.selectedItem_Company.length == 0 && this.selectedItem_Status.length == 0 && this.selectedItem_Emp.length == 0) {
            this.edited = false;
        }
        else {
            this.edited = true;
        }
    }
    isEmpChecked(item) {
        let arr = [];
        this.Employeelist_Json.forEach(element => {
            if (element.checked == true) {
                arr.push({ Employee: element.Name });
                return this.checkedItems_Emp = arr;
            }
        });
        let arr2 = [];
        this.Employeelist_Json.filter((item) => {
            if (item.checked == true) {
                this.applyFilters();
                return arr2.push(item);
            }
        });
        this.selectedItem_Emp.push(arr2);
        this.Employeelist_Json.forEach(element => {
            if (element.checked == false) {
                this.selectedItem_Emp.length = 0;
                this.resetFilters();
            }
        });
        if (this.selectedItem_Company.length == 0 && this.selectedItem_Status.length == 0 && this.selectedItem_Emp.length == 0) {
            this.edited = false;
        }
        else {
            this.edited = true;
        }
    }
    //Apply Filters
    SearchbyText() {
        this.CurrentPageNo = 1;
        this.applyFilters();
    }
    applyFilters() {
        this.selectedEmp_String = this.checkedItems_Emp.map(select => {
            return select.Employee;
        }).join(',');
        // console.log("Emp--->",this.selectedEmp_String);
        this.selectedCom_String = this.checkedItems_Company.map(select => {
            return select.Company;
        }).join(',');
        // console.log("Comp--->",this.selectedType_String);
        this.selectedStatus_String = this.checkedItems_Status.map(select => {
            return select.Status;
        }).join(',');
        //console.log("Status--->",this.selectedStatus_String);
        this._objStatusDTO.SelectedStatus = this.selectedStatus_String;
        this._objStatusDTO.SelectedEmployee = this.selectedEmp_String;
        this._objStatusDTO.SelectedCompany = this.selectedCom_String;
        this._objStatusDTO.Emp_No = this.Current_user_ID;
        this._objStatusDTO.PageNumber = this.CurrentPageNo;
        this._objStatusDTO.RowsOfPage = 30;
        this._objStatusDTO.SearchText = this.searchText;
        // this.ObjUserDetails.PageNumber = this.CurrentPageNo;
        // this.ObjUserDetails.PageSize = 30;
        //this.ObjUserDetails.SearchText = this.searchText;
        //console.log("string------->", this.selectedType_String, this.selectedEmp_String, this.selectedStatus_String);
        this.service.GetPortfolioStatus(this._objStatusDTO)
            .subscribe(data => {
            this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
            this.Companylist_Json = JSON.parse(data[0]['Company_Json']);
            this.Employeelist_Json = JSON.parse(data[0]['Employee_Json']);
            this.Statuslist_Json = JSON.parse(data[0]['Status_Json']);
            this.NoOfPages = data[0]['NoOfPages'];
            this.countAll = data[0]['Total'];
            // console.log("total values", this.countAll);
            if (this._ListProjStat) {
                this._CurrentpageRecords = this.countAll;
            }
            if (this.selectedItem_Emp.length == 0) {
                this.Employeelist_Json = JSON.parse(data[0]['Employee_Json']);
                this._CurrentpageRecords = this.selectedItem_Emp.length;
            }
            else {
                this.Employeelist_Json = this.selectedItem_Emp[0];
            }
            this._CurrentpageRecords = this._ListProjStat.length;
            //Type
            if (this.selectedItem_Company.length == 0) {
                this.Companylist_Json = JSON.parse(data[0]['Company_Json']);
                this._CurrentpageRecords = this.selectedItem_Company.length;
            }
            else {
                this.Companylist_Json = this.selectedItem_Company[0];
            }
            this._CurrentpageRecords = this._ListProjStat.length;
            //Status
            if (this.selectedItem_Status.length == 0) {
                this.Statuslist_Json = JSON.parse(data[0]['Status_Json']);
                this._CurrentpageRecords = this.selectedItem_Status.length;
            }
            else {
                this.Statuslist_Json = this.selectedItem_Status[0];
            }
            this._CurrentpageRecords = this._ListProjStat.length;
            // this.countAll = this._ListProjStat.length;
            if (this._ListProjStat.length == 0) {
                this._filtersMessage = "No Portfolio Found";
                this._filtersMessage2 = "Please use clear for clearing filters & try again";
            }
            else {
                this._filtersMessage = "";
                this._filtersMessage2 = "";
            }
        });
        //Filtering Checkbox de
        //this.getDropdownsDataFromDB();
    }
    GetProjectsByUserName() {
        //this.LoadingBar_state.start();
        this.ObjUserDetails.PageNumber = this.p;
        this.ObjUserDetails.PageSize = 30;
        this.service.GetProjectsByUserName_Service(this.ObjUserDetails).subscribe(data => {
            this._ProjectDataList = data;
            this.ActualDataList = data;
            this.un_FilteredProjects = this.ActualDataList;
            //console.log("ProjectList----------->", this._ProjectDataList);
            // if (this._ProjectDataList) {
            //   this.LoadingBar_state.stop();
            // }
            if (this._ProjectDataList) {
                this._CurrentpageRecords = this._ProjectDataList.length;
            }
            //this.CountsOf_Emp_Status_ProjectType();
        });
    }
    trackByid(index, item) {
        return item.Project_Code;
    }
    omit_number(event) {
        if (((event.charCode > 96 && event.charCode < 123) || (event.charCode > 64 && event.charCode < 91) || (event.charCode >= 48 && event.charCode <= 57) || event.charCode <= 32)) {
            this.special = false;
            return true;
        }
        else {
            this.notifyService.showInfo('', 'Allowed characters: a-z, A-Z, 0-9');
            this.special = true;
            return false;
        }
    }
    Displayprojectlist() {
        if (this._portfolioName != "") {
            this._portfolioName = this._portfolioName.trim();
            localStorage.setItem("_PortfolioName", this._portfolioName);
            let portId = 0;
            localStorage.setItem('Pid', portId);
            this.service.AlreadyExistsPortfolioService(this._portfolioName).
                subscribe(data => {
                if (data['result'] == 0) {
                    this.notifyService.showError("Portfolio With this Name ", "Already Exists");
                    this.alreadyExists = "! Portfolio already exists with this name";
                }
                else {
                    this.alreadyExists = "";
                    let name = 'AddProjectsToPortfolio';
                    var url = document.baseURI + name;
                    var myurl = `${url}/${this._portfolioName}`;
                    var myWindow = window.open(myurl, this._portfolioName);
                    myWindow.focus();
                }
            });
            // if (this._ListProjStat != null) {
            //   this.PortfolioName = this._ListProjStat.find((x) => x.Portfolio_Name === this._portfolioName);
            // }
            // if (this.PortfolioName == undefined) {
            //   this.alreadyExists = '';
            //   let name: string = 'AddProjectsToPortfolio';
            //   var url = document.baseURI + name;
            //   var myurl = `${url}/${this._portfolioName}`;
            //   var myWindow = window.open(myurl, this._portfolioName);
            //   myWindow.focus();
            // }
            // else {
            //   this.notifyService.showError("Portfolio With this Name ", "Already Exists");
            //   this.alreadyExists = "! Portfolio already exists with this name";
            // }
        }
    }
    CloseBttn() {
        this.p = 1;
        this.Share_preferences = true;
        this._ProjectList = true;
        this.PortfolioList = false;
        this.search_Team = [];
        this.search_Type = [];
        this.search_status = [];
        this.master_CheckBox();
        this._PreferencesList = [];
        this.searchText = '';
    }
    //Master Check Box check/Un-checkAll
    master_CheckBox() {
        for (let value of Object.values(this._ProjectDataList)) {
            value['checked'] = this.master_checked;
            if (value['checked'] === true) {
                this.btn_CreatePortfolio = false;
                this.hidetotalProjects = true;
            }
            else {
                this.btn_CreatePortfolio = true;
                this.hidetotalProjects = false;
            }
            this.selectedItemsList = this._ProjectDataList.filter((checkboxes) => {
                return checkboxes.checked == true;
            });
            //console.log("selectedList------>", this.selectedItemsList);
        }
    }
    checkboxclick() {
        for (let value of Object.values(this._ProjectDataList)) {
            if (value['checked'] === true) {
                this.btn_CreatePortfolio = false;
                this.hidetotalProjects = true;
                return true;
            }
            else {
                this.btn_CreatePortfolio = true;
                this.hidetotalProjects = false;
            }
        }
    }
    fetchSelectedItems() {
        this.selectedItemsList = this._ProjectDataList.filter((checkboxes) => {
            return checkboxes.checked == true;
        });
    }
    dataTableCheckbox() {
        this.btnGetRecords = true;
        this.fetchSelectedItems();
    }
    // ----Selected Rows Starts-
    // Selected Rows Ends----------------
    onSearchProjects(event) {
        this.Search_Value = event.target.value;
        if (this.Search_Value === "") {
            this.matCard = true;
        }
        else {
            this.matCard = false;
        }
    }
    GetProjectDetails() {
        this.service.GetProjects_EPDB().subscribe(res => this.service.ProjectDetails_List = res);
    }
    OnCardClick(P_id, P_Name, CreatedName) {
        sessionStorage.setItem('portfolioId', P_id);
        sessionStorage.setItem('portfolioname', P_Name);
        sessionStorage.setItem('PortfolioOwner', CreatedName);
        //sessionStorage.setItem('portfolioCDT', P_CDT);
        //this.router.navigate(['/portfolioprojects/', P_id]);
        // const Url = this.router.serializeUrl(this.router.createUrlTree(['testcreativeplanner/portfolioprojects/', P_id]));
        // window.open(Url);
        let name = 'portfolioprojects';
        var url = document.baseURI + name;
        var myurl = `${url}/${P_id}`;
        var myWindow = window.open(myurl, P_id);
        myWindow.focus();
    }
    dummy_function(name, id) {
        var url = document.baseURI + name;
        var myurl = `${url}/${id}`;
        var myWindow = window.open(myurl, id);
        myWindow.focus();
    }
    populateForm() {
        this.Obj_Portfolio_DTO.Portfolio_ID;
        let _Portid = this.Obj_Portfolio_DTO.Portfolio_ID;
        // localStorage.setItem('_PortfolioId', _Portid);
        //console.log("Populate Form Id", _Portid);
        localStorage.setItem('_PortfolioName', this.Obj_Portfolio_DTO.Portfolio_Name);
        this.returnProjectsUrl = 'backend/CreatePortfolio';
        this.router.navigate([this.returnProjectsUrl]);
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
            this._objStatusDTO.Emp_No = this.Current_user_ID;
            this.service.Portfolio_Rename(_Pname, _Pid).subscribe(data => {
                this.service.GetPortfolioStatus(this._objStatusDTO).subscribe((data) => {
                    // this.LoadingBar_state.start();
                    this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
                    this.Companylist_Json = JSON.parse(data[0]['Company_Json']);
                    this.Employeelist_Json = JSON.parse(data[0]['Employee_Json']);
                    this.Statuslist_Json = JSON.parse(data[0]['Status_Json']);
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
                allowSearchFilter: true
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
    OnCompanySelect(CompNo) {
        this._ErrorMessage_comp = "";
        this._CompanyNo = CompNo['Com_No'];
        this.CompanyDropdown = this._CompanyNo;
        let PortfolioId = localStorage.getItem('Pid');
        this.service.GetEmployeesby_CompNo(this._CompanyNo, PortfolioId)
            .subscribe((data) => {
            this.EmployeeList = data;
            //console.log("employee lst",this.EmployeeList);
            this.dropdownSettings_Emp = {
                singleSelection: false,
                idField: 'Emp_No',
                textField: 'TM_DisplayName',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 5,
                allowSearchFilter: true
            };
        });
    }
    OnCmpDeselect() {
        //this.ngCompanyDropdown = [{}];
        this.ngCompanyDropdown = "";
    }
    funforGetComp_Users() {
        this.GetCompanies();
        //SnackBar Dismiss
    }
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
        this._PortfolioListTable = true;
        this.PortfolioList = false;
        this._PreferencesList = [];
    }
    Radio_View_fullaccess(val) {
        this._ErrorMessage_Pref = "";
        this._Preferences = val;
    }
    share() {
        //
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
            this.notifyService.showInfo("You Can't Share Portfolio by YourSelf", "Sorry");
            //this.Close_ShareModel();
        }
        else {
            this.ObjSharePortfolio.CompanyId = this._CompanyNo;
            this.ObjSharePortfolio.EmployeeId = this._SelectedEmpIds_String;
            this.ObjSharePortfolio.Portfolio_ID = this._Pid;
            this.ObjSharePortfolio.Preference = this._Preferences;
            this.ObjSharePortfolio.Shared_By = this.Current_user_ID;
            this.ObjSharePortfolio.IsActive = true;
            this.service.SharePortfolio(this.ObjSharePortfolio);
            this.notifyService.showInfo("Successfully", "Portfolio Shared");
            this.Close_ShareModel();
            this._PortfolioListTable = true;
            this.PortfolioList = false;
            this.cdr.detectChanges();
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
    }
    GetDateDiff() {
        var date2 = new Date("06/30/2019");
        var date1 = new Date("07/30/2019");
        if (date1 > date2) {
            alert("Greater Than Date2 ");
        }
        else {
            alert("less than Date 1");
        }
    }
    BackBttn() {
        //
        //Working
        this.ngStatusDrpDwn = [];
        this.BarChartEmp = [];
        this.BarChartEmpNo = null;
        this.PortfolioList = false;
        this._PortfolioListTable = true;
        this.Project_Graph = "Graphs";
        this.ProjectsClick();
        // if (this._snackBar.open) {
        //   this.snackBarRef.dismiss();
        // }
        // if (this.LoadingBar_state) {
        //   this.LoadingBar_state.stop();
        // }
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
                        this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
                        this.Companylist_Json = JSON.parse(data[0]['Company_Json']);
                        this.Employeelist_Json = JSON.parse(data[0]['Employee_Json']);
                        this.Statuslist_Json = JSON.parse(data[0]['Status_Json']);
                        this.cdr.detectChanges();
                    });
                });
            }
            else {
                this.notifyService.showInfo("Action Cancelled ", '');
            }
        });
        // }
        // else {
        //   this.notifyService.showError("Can't delete shared projects", 'Permission Denied ');
        // }
    }
    AddFavourites(portfolioId, isfav) {
        // this.LoadingBar_state.start();
        this.service.SetFavourite_Service(portfolioId, isfav, this.Current_user_ID).subscribe((data) => {
            //  console.log("retrun Data----->",data1)
            this._objStatusDTO.Emp_No = this.Current_user_ID;
            this.service.GetPortfolioStatus(this._objStatusDTO).subscribe((data) => {
                this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
                this.Companylist_Json = JSON.parse(data[0]['Company_Json']);
                this.Employeelist_Json = JSON.parse(data[0]['Employee_Json']);
                this.Statuslist_Json = JSON.parse(data[0]['Status_Json']);
                this.countFav = data[0]['Favourites'];
                //(i.CreatedName == this._CurrentUserFullName)
                // let filter_ListFav: any;
                // filter_ListFav = this._ListProjStat.filter(i => (i.CreatedName == this._CurrentUserFullName));
                // let ListFav: any = filter_ListFav.filter(i => (i.IsFavourite));
                // this.countFav = ListFav.length;
                this.cdr.detectChanges();
                // alert(isfav);
                // alert(portfolioId);
                // this.LoadingBar_state.stop();
                if (isfav == false) {
                    this.messagefav = "Added to Favourites";
                }
                else {
                    this.messagefav = "Removed From Favourites";
                }
                let action = "";
                this._snackBar.open(this.messagefav, action, {
                    duration: 1500,
                });
            });
        });
        // this.isLoading = true
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
    Favourite_Portfolios() {
        // this.Portfolio_CurrentPage = 1;
        this.NoSharedmsg = true;
        this.activeClassFav = true;
        this.activeClassAll = false;
        this.activeClassOwners = false;
        this.activeClassShare = false;
        this.activeClass_NewPortfolio = false;
        this._objStatusDTO.Emp_No = this.Current_user_ID;
        this._objStatusDTO.PageNumber = this.Portfolio_FavoritePage;
        this.service.GetPortfolioStatus(this._objStatusDTO)
            .subscribe(data => {
            this._ListProjStat = JSON.parse(data[0]['Portfolio_FavouritesList']);
            console.log(this._ListProjStat, "favorite");
            let favCount = data[0]['Favourites'];
            if (favCount < 30) {
                this.NoOfPages = 1;
            }
            else {
                this.NoOfPages = data[0]['favpages'];
            }
            if (this._ListProjStat.length > 0) {
                this.Nofavmsg = true;
            }
            else {
                this.Nofavmsg = false;
            }
        });
        // this._ListProjStat = this.AllPortfolioslist.filter(i => (i.CreatedName == this._CurrentUserFullName));
        // this._ListProjStat = this._ListProjStat.filter(x => x.IsFavourite);
        // if (this._ListProjStat.length > 0) {
        //   this.Nofavmsg = true;
        //   this._ListProjStat = this._ListProjStat.filter(x => x.IsFavourite);
        // }
        // else {
        //   this.Nofavmsg = false;
        // }
    }
    Shared_Portfolios() {
        // this.Portfolio_CurrentPage = 1;
        this.Nofavmsg = true;
        this.activeClassShare = true;
        this.activeClassAll = false;
        this.activeClassOwners = false;
        this.activeClassFav = false;
        this.activeClass_NewPortfolio = false;
        this._objStatusDTO.Emp_No = this.Current_user_ID;
        this._objStatusDTO.PageNumber = this.Portfolio_SharedPage;
        // this._ListProjStat = this._ActualPortfolioList_ForShare.filter(i => (i.CreatedName != this._CurrentUserFullName));
        this.service.GetPortfolioStatus(this._objStatusDTO)
            .subscribe(data => {
            this._ListProjStat = JSON.parse(data[0]['Portfolio_SharedList']);
            this.countShare = data[0]['Shared'];
            if (this.countShare < 30) {
                this.NoOfPages = 1;
            }
            else {
                this.NoOfPages = data[0]['sharedpages'];
            }
            // this.countAll = data[0]['Total'];
            if (this._ListProjStat.length > 0) {
                this.NoSharedmsg = true;
            }
            else {
                this.NoSharedmsg = false;
            }
        });
    }
    Owners_Portfolios() {
        // this.Portfolio_CurrentPage = 1;
        this.Nofavmsg = true;
        this.NoSharedmsg = true;
        this.activeClassOwners = true;
        this.activeClassShare = false;
        this.activeClassAll = false;
        this.activeClassFav = false;
        this.activeClass_NewPortfolio = false;
        this._objStatusDTO.Emp_No = this.Current_user_ID;
        this._objStatusDTO.PageNumber = this.Portfolio_OwnerPage;
        // this._ListProjStat = this.AllPortfolioslist.filter(i => (i.CreatedName == this._CurrentUserFullName));
        this.service.GetPortfolioStatus(this._objStatusDTO)
            .subscribe(data => {
            this._ListProjStat = JSON.parse(data[0]['Portfolio_OwnersList']);
            this.countOwners = data[0]['Owners'];
            if (this.countOwners < 30) {
                this.NoOfPages = 1;
            }
            else {
                this.NoOfPages = data[0]['ownerpages'];
            }
        });
    }
    All_Portfolio() {
        this.Portfolio_CurrentPage = 1;
        this.Nofavmsg = true;
        this.NoSharedmsg = true;
        this.activeClassAll = true;
        this.activeClassShare = false;
        this.activeClassOwners = false;
        this.activeClassFav = false;
        this.activeClass_NewPortfolio = false;
        this._objStatusDTO.SearchText = null;
        this._objStatusDTO.PageNumber = this.Portfolio_CurrentPage;
        this.service.GetPortfolioStatus(this._objStatusDTO)
            .subscribe(data => {
            this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
            this.countAll = data[0]['Total'];
            if (this.countAll < 30) {
                this.NoOfPages = 1;
            }
            else {
                this.NoOfPages = data[0]['NoOfPages'];
            }
        });
        //this._ListProjStat = this._ActualPListFor_All;
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
            if (this.barchartData) {
                //this.LoadingBar_state.stop();
            }
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
    EmpChartOnSelect(emp) {
        this.BarChartEmpNo = emp['Emp_No'];
        this.LoadBarChart();
        // this.barchartData = this.barchartData.filter(i => this.BarChartEmpNo.includes(i.Emp_No));
    }
    EmpChartOnDeselect() {
        this.BarChartEmpNo = null;
        this.LoadBarChart();
    }
    openInfo2(pcode, pName, pDes, ptype, pStDt, pEnDT, pStat, pCost, pCom, pCli, pOwn, pRes, pAut, pCoor, pInf, pSup, pReportType) {
        this.pName = pName;
        this.pDesc = pDes;
        this.pType = ptype;
        this.pStdt = pStDt;
        this.pEndDT = pEnDT;
        this.pStat = pStat;
        this.pCost = pCost;
        this.pComp = pCom;
        this.pClient = pCli;
        this.Powner = pOwn;
        this.PRespon = pRes;
        //Extracting First Letter From Name...
        this.initials = pRes.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '');
        this.initials.toUpperCase();
        this.PAut = pAut;
        this.Pcoor = pCoor;
        this.PInfo = pInf;
        this.pSupprt = pSup;
        this.pRType = pReportType;
        //More Details------
        this.MoreDetailsList = [
            { ProjectCode: pcode },
            { ProjectName: pName },
            { Description: pDes },
            { StartDate: pStDt },
            { EndDate: pEnDT },
            { Cost: pCost },
            { Owner: pOwn },
            { Responsible: pRes },
            { Authority: pAut },
            { Coordinator: pCoor },
            { Informer: pInf },
            { Support: pSup },
        ];
        let List_string = JSON.stringify(this.MoreDetailsList);
        localStorage.setItem("moreDetails", List_string);
        this.service.SubTaskDetailsService(pcode).subscribe((data) => {
            this.Subtask_List = data;
            if (Object.keys(data).length > 0) {
                this.Subtask_List = JSON.parse(data[0]['SubtaskDetails_Json']);
                this.TotalWork_Hours = data[0]['TotalHours'];
                this.ProjectPercentage = data[0]['ProjectPercentage'] + '%';
                this.ProjectStatus = data[0]['ProjectStatus'];
                this.subtaskNotFoundMsg = "No Subtask found";
                this._subtaskDiv = true;
            }
            else {
                this.subtaskNotFoundMsg = "";
                this._subtaskDiv = false;
            }
            //console.log("subtask Details 2---->", this.Subtask_List);
            this._TotalSubtaskCount = this.Subtask_List.length;
        });
        document.getElementById("InfoContent2").style.width = "410px";
        this._OpenMemosInfo(pcode, pName);
        document.getElementById("MemosSideBar").style.width = "0";
    }
    openInfo(pcode, pName) {
        this._loadChildComponent = true;
        this.parentToChild = pcode;
        let projName = pName;
        document.getElementById("mysideInfobar").style.width = "410px";
    }
    closeInfo2() {
        document.getElementById("InfoContent2").style.width = "0";
    }
    btnEdit() {
        this.Max50Char = true;
    }
    _Showentries(event) {
        this._ItemsPerpage = event;
        this.Portfolio_CurrentPage = 1;
    }
    _ontextChange() {
        this.alreadyExists = '';
    }
    _deletePortfolio(pid, portName, createdBy, createdDT, ProjCount, status) {
        if (createdBy == this.Current_user_ID) {
            const confirmDialog = this.dialog.open(src_app_Shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialogComponent, {
                data: {
                    mode: 'delete',
                    title1: 'Confirmation ',
                    message1: portName
                }
            });
            confirmDialog.afterClosed().subscribe(result => {
                if (result === true) {
                    this.deletedBy = this.Current_user_ID;
                    this.service._DeletePortfolios(pid, portName, createdBy, createdDT, this.deletedBy, ProjCount, status).subscribe((data) => {
                        this._objStatusDTO.Emp_No = this.Current_user_ID;
                        this.service.GetPortfolioStatus(this._objStatusDTO).subscribe((data) => {
                            //this.LoadingBar_state.start();
                            this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
                            this.Companylist_Json = JSON.parse(data[0]['Company_Json']);
                            this.Employeelist_Json = JSON.parse(data[0]['Employee_Json']);
                            this.Statuslist_Json = JSON.parse(data[0]['Status_Json']);
                            //this.LoadingBar_state.stop();
                            this._ActualPortfolioList_ForShare = JSON.parse(data[0]['PortfolioList_Json']);
                            this._ActualPListFor_All = JSON.parse(data[0]['PortfolioList_Json']);
                            this.AllPortfolioslist = this._ListProjStat;
                            this.countAll = this._ListProjStat.length;
                            let Listown = this._ListProjStat.filter(i => (i.CreatedName == this._CurrentUserFullName));
                            this.countOwners = Listown.length;
                            let ListShare = this._ListProjStat.filter(i => (i.CreatedName != this._CurrentUserFullName));
                            this.countShare = ListShare.length;
                            //
                            let shrearry;
                            shrearry = this._ListProjStat;
                            //console.log("-------->SharedArry--------->", shrearry);
                            let ListFav = Listown.filter(i => (i.IsFavourite));
                            this.countFav = ListFav.length;
                            //console.log("ListForStatus", this._ListProjStat);
                            if (this._ListProjStat.length == 0) {
                                this.messageForEmpty = false;
                            }
                            else {
                                this.messageForEmpty = true;
                            }
                            // this.cdr.detectChanges();
                        });
                    });
                    this.notifyService.showSuccess("Deleted ", 'Successfully');
                }
                else {
                    this.notifyService.showInfo("Delete Cancelled ", '');
                }
            });
        }
        else {
            this.notifyService.showError("Can't delete shared portfolio", 'Permission Denied');
        }
    }
    _SortPortfoliolist() {
        this.clicks += 1;
        if (this.clicks != 1) {
            this.A2Z = true;
            this.Z2A = false;
            this._ListProjStat = this._ListProjStat.sort((a, b) => (a.Portfolio_ID > b.Portfolio_ID) ? -1 : 1);
            this.clicks = 0;
        }
        else {
            this.A2Z = false;
            this.Z2A = true;
            this._ListProjStat = this._ListProjStat.sort((a, b) => (a.Portfolio_ID > b.Portfolio_ID) ? 1 : -1);
        }
    }
    _SortProjectList() {
        this.clicks += 1;
        if (this.clicks != 1) {
            this.A2Z = true;
            this.Z2A = false;
            this._ProjectsListBy_Pid = this._ProjectsListBy_Pid.sort((a, b) => (a.Project_Code > b.Project_Code) ? -1 : 1);
            this.clicks = 0;
        }
        else {
            this.A2Z = false;
            this.Z2A = true;
            this._ProjectsListBy_Pid = this._ProjectsListBy_Pid.sort((a, b) => (a.Project_Code > b.Project_Code) ? 1 : -1);
        }
    }
    _OpenMemosInfo(_projectCode, _projectName) {
        this._displayProjName = _projectName;
        this._LinkService._GetOnlyMemoIdsByProjectCode(_projectCode).
            subscribe((data) => {
            let Table_data = data;
            if (Table_data.length > 0) {
                this._JsonString = data[0]['JsonData'];
                this._LinkService._GetMemosSubject(this._JsonString).
                    subscribe((data) => {
                    // console.log("Data------------>", data)
                    this._MemosSubjectList = JSON.parse(data['JsonData']);
                    this._MemosNotFound = "";
                    //console.log("Subject Name ------------>",this._MemosSubjectList);
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
        console.log("Url----------->", memo_Url);
        window.open(Url);
    }
    bttn_RACI() {
        this._raciDetails = !this._raciDetails;
    }
    //Filter Box Counts Functionality
    CountsOf_Emp_Status_ProjectType() {
        //Employee Count
        let Emp = {};
        this._ProjectDataList.forEach(function (item) {
            Emp[item.TM_DisplayName] ? Emp[item.TM_DisplayName]++ : Emp[item.TM_DisplayName] = 1;
        });
        Object.entries(Emp).forEach(([Name, Count]) => {
            this.EmpCountInFilter.push({ Name, Count });
        });
        this.EmpCountInFilter = this.EmpCountInFilter.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
        //Project Type Count;
        let type = {};
        this._ProjectDataList.forEach(function (item) {
            type[item.Exec_BlockName] ? type[item.Exec_BlockName]++ : type[item.Exec_BlockName] = 1;
        });
        Object.entries(type).forEach(([Name, Count]) => {
            this.TypeContInFilter.push({ Name, Count });
        });
        this.TypeContInFilter = this.TypeContInFilter.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
        //For Status Count
        let Status = {};
        this._ProjectDataList.forEach(function (item) {
            Status[item.Status] ? Status[item.Status]++ : Status[item.Status] = 1;
        });
        Object.entries(Status).forEach(([Name, Count]) => {
            this.StatusCountFilter.push({ Name, Count });
        });
        this.StatusCountFilter = this.StatusCountFilter.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
    }
    GetCounts_On_Filter() {
        //Emp
        let Emp = {};
        this._ProjectDataList.forEach(function (item) {
            Emp[item.TM_DisplayName] ? Emp[item.TM_DisplayName]++ : Emp[item.TM_DisplayName] = 1;
        });
        //console.log("Emp---------->", Emp)
        let arr1 = [];
        Object.entries(Emp).forEach(([Name, Count]) => {
            arr1.push({ Name, Count });
        });
        this.EmpCountInFilter = arr1.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
        //Project Type
        let type = {};
        this._ProjectDataList.forEach(function (item) {
            type[item.Exec_BlockName] ? type[item.Exec_BlockName]++ : type[item.Exec_BlockName] = 1;
        });
        let arr2 = [];
        Object.entries(type).forEach(([Name, Count]) => {
            arr2.push({ Name, Count });
        });
        this.TypeContInFilter = arr2.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
        //Status
        let Status = {};
        this._ProjectDataList.forEach(function (item) {
            Status[item.Status] ? Status[item.Status]++ : Status[item.Status] = 1;
        });
        let arr3 = [];
        Object.entries(Status).forEach(([Name, Count]) => {
            arr3.push({ Name, Count });
        });
        this.StatusCountFilter = arr3.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
    }
    _fromGetProjectsbyusername() {
        var rez = {};
        this._ProjectDataList.forEach(function (item) {
            rez[item.Status] ? rez[item.Status]++ : rez[item.Status] = 1;
        });
        this.CountInprocess1 = rez['InProcess'];
        if (!this.CountInprocess1) {
            this.HCountInprocess = true;
            this.CountInprocess1 = 0;
        }
        this.CountDelay1 = rez['Delay'];
        if (!this.CountDelay1) {
            this.HCountDelay = true;
            this.CountDelay1 = 0;
        }
        this.CountRejected1 = rez['Project Complete Rejected'];
        if (!this.CountRejected1) {
            this.HCountRejected = true;
            this.CountRejected1 = 0;
        }
        this.CountProjectHold1 = rez['Project Hold'];
        if (!this.CountProjectHold1) {
            this.HCountProjectHold = true;
            this.CountProjectHold1 = 0;
        }
        this.CountEnactive1 = rez['Enactive Under Approval'];
        if (!this.CountEnactive1) {
            this.HCountEnactive = true;
            this.CountEnactive1 = 0;
        }
        this.CountForward1 = rez['Forward Under Approval'];
        if (!this.CountForward1) {
            this.HCountForward = true;
            this.CountForward1 = 0;
        }
        this.CountNewProject1 = rez['New Project'];
        if (!this.CountNewProject1) {
            this.HCountNewProject = true;
            this.CountNewProject1 = 0;
        }
    }
    closeInfo() {
        document.getElementById("actyInfobar_header").classList.remove("open_sidebar");
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_9__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_10__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_Services_link_service__WEBPACK_IMPORTED_MODULE_11__.LinkService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 143, vars: 66, consts: [[1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height"], [1, "row", 3, "hidden"], [1, "col-lg-12", "project-description"], [1, "kt-portlet", "kt-portlet--bordered-semi", "mb-2"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title", "mr-4"], [4, "ngIf"], ["style", "color:gray", 4, "ngIf"], [1, "kt-portlet__head-label", "kt-todo__details", "icons-filter", "align-items-center"], [1, "kt-header__topbar-item", "kt-header__topbar-item--search", "pl-4"], [1, "kt-header__topbar-wrapper"], [1, "kt-quick-search", "kt-quick-search--inline", "mr-3"], [1, "kt-quick-search__form"], [1, "input-group"], ["type", "text", "placeholder", "Search All Portfolio", "name", "PortfolioSearch", 1, "form-control", "kt-quick-search__input", "pl-3", 2, "width", "270px", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "flaticon2-search-1", 3, "click"], [1, "kt-portlet__head-toolbar"], ["data-toggle", "kt-tooltip", "title", "All", 1, "kt-todo__icon", 3, "ngClass", "click"], [1, "flaticon2-indent-dots", "mr-1"], ["data-toggle", "kt-tooltip", "title", "Owner", 1, "kt-todo__icon", 3, "ngClass", "click"], [1, "flaticon2-user"], ["data-toggle", "kt-tooltip", "title", "Shared", 1, "kt-todo__icon", 3, "ngClass", "click"], [1, "fas", "fa-share-alt"], ["data-toggle", "kt-tooltip", "title", "Favourite", 1, "kt-todo__icon", "mr-4", 3, "ngClass", "click"], [1, "fas", "fa-star"], ["data-toggle", "kt-tooltip", "title", "Click to sort Asc", 1, "kt-todo__icon", "mr-4", 3, "hidden", "click"], [1, "fa", "fa-sort-alpha-down-alt"], ["data-toggle", "kt-tooltip", "title", "Click to sort Desc", 1, "kt-todo__icon", "mr-4", 3, "hidden", "click"], [1, "fas", "fa-sort-alpha-up"], [1, "stores-sec"], [1, "nav", "navbar-nav", "filters"], ["id", "filtermenu", 1, "dropdown", "mega-dropdown"], ["data-toggle", "dropdown", "aria-expanded", "false", "id", "test2", 3, "ngClass"], [1, "fas", "fa-ellipsis-v", "mr-0"], ["aria-labelledby", "test2", 1, "dropdown-menu", "mega-dropdown-menu"], [3, "click"], [1, "row"], [1, "col-md-10"], [1, "d-inline-block"], [1, "col-md-2"], [1, "col-md-12"], ["type", "text", "placeholder", "Search Filters", 1, "form-control", "kt-quick-search__input", "pl-3", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [1, "col-md-4"], [1, "count-height"], ["class", "d-flex justify-content-between", 4, "ngFor", "ngForOf"], [1, "text-danger"], ["data-toggle", "dropdown", 1, "btn", "btn-label-success", "btn-outline-success", "btn-upper", "btn-sm", "btn-bold", "mr-2"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-2", 3, "click"], ["class", "mx-1", 4, "ngIf"], ["class", "btn btn-label-info btn-upper btn-sm btn-bold mx-1 pg-btn", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-label-info btn-hover-info btn-upper btn-sm btn-bold ml-1 mr-2", 3, "disabled", "click", 4, "ngIf"], ["data-toggle", "dropdown", "id", "test1", "title", "New Portfolio", 1, "kt-todo__icon", "mr-3", 3, "ngClass", "click"], [1, "fas", "fa-plus"], ["aria-labelledby", "test1", 1, "dropdown-menu", "dropdown-menu-right", "dropdown-menu-fit", "dropdown-menu-md", "bg-ground"], [1, "kt-nav"], [1, "kt-nav__item", "px-3"], [1, "kt-nav__separator"], ["type", "text", "placeholder", "Enter Portfolio Name", "type", "text", 1, "form-control", 3, "ngModel", "ngStyle", "ngModelChange", "keydown.enter", "keypress"], [1, "text-danger", "mb-0", "py-1"], ["class", "text-danger mb-0 py-1", 4, "ngIf"], [1, "kt-nav__foot", "d-inline-block"], ["id", "nextbttn", 1, "btn", "btn-secondary", "theme-btn", "btn-upper", "btn-sm", "btn-bold", "mr-2", 3, "disabled", "click"], [1, "btn", "btn-label-secondary", "btn-outline-secondary", "btn-upper", "btn-sm", "btn-bold", 3, "click"], [1, "col-lg-12"], ["id", "accordionExample6", 1, "accordion", "accordion-solid"], [1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "px-0"], ["id", "kt_inbox", 1, "kt-grid", "kt-grid--desktop", "kt-grid--ver-desktop", "kt-inbox"], ["id", "kt_inbox_aside_close", 1, "kt-inbox__aside-close"], [1, "la", "la-close"], [1, "kt-grid__item", "kt-grid__item--fluid", "kt-inbox__list", "kt-inbox__list--shown", "mb-1", "flex-grow-1"], [1, "p-0", "flex-grow-1"], ["data-type", "inbox", 1, "kt-inbox__items"], ["class", "mb_1", 4, "ngFor", "ngForOf"], ["id", "rightbar-overlay", 3, "click"], [2, "color", "gray"], [1, "d-flex", "justify-content-between"], [1, "kt-checkbox"], ["type", "checkbox", 3, "ngModel", "change", "ngModelChange"], [1, "count-btn"], [1, "mx-1"], [1, "btn", "btn-label-info", "btn-upper", "btn-sm", "btn-bold", "mx-1", "pg-btn", 3, "disabled", "click"], [1, "fas", "fa-angle-left", "mr-0"], [1, "btn", "btn-label-info", "btn-hover-info", "btn-upper", "btn-sm", "btn-bold", "ml-1", "mr-2", 3, "disabled", "click"], [1, "fas", "fa-angle-right", "mr-0"], [2, "color", "lightgrey", "text-align", "center", 3, "hidden"], [1, "mb_1"], [1, "Replied_border_left_true_Danger", "card", "mb-2", "brdr-5", "shadow-sm"], ["data-type", "inbox", 1, "kt-inbox__item", "position-relative", "py-2", "mb-0", "border-0"], [1, "kt-inbox__info"], [1, "kt-inbox__actions"], ["data-toggle", "kt-tooltip", "data-skin", "dark", "data-placement", "right", "title", "Favorite", 1, "kt-inbox__icon", "kt-inbox__icon--off", "kt-inbox__icon--light"], [3, "click", 4, "ngIf"], [1, "kt-inbox__details", 3, "click"], [1, "kt-inbox__sender"], [1, "kt-inbox__subject"], [1, "kt-inbox__labels"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-dark", "kt-badge.kt-badge-light-bold", "kt-badge--inline"], [4, "ngIf", "ngIfElse"], ["SharedName", ""], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-info", "kt-badge.kt-badge-light-bold", "kt-badge--inline"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-danger", "kt-badge.kt-badge-light-bold", "kt-badge--inline"], [1, "kt-inbox__datetime"], [1, "delete-btn"], [1, "fas", "fa-edit", "invisible"], [1, "fas", "fa-trash-alt"], ["class", "flaticon-star", 3, "ngStyle", 4, "ngIf"], [1, "flaticon-star", 3, "ngStyle"], ["_ngcontent-spk-c396", "", 1, "Replied_border_left_true_warning", "card", "mb-2", "brdr-5", "shadow-sm"], ["_ngcontent-spk-c396", "", 1, "kt-inbox__info"], ["_ngcontent-spk-c396", "", 1, "kt-inbox__actions"], ["_ngcontent-spk-c396", "", "_nghost-spk-c401", ""], ["_ngcontent-spk-c401", "", "data-toggle", "kt-tooltip", "data-skin", "dark", "data-placement", "right", "title", "Favorite", "class", "kt-inbox__icon kt-inbox__icon--off kt-inbox__icon--light", 4, "ngIf"], ["_ngcontent-spk-c396", "", 1, "kt-inbox__details", 3, "click"], ["_ngcontent-spk-c396", "", 1, "kt-inbox__sender"], ["_ngcontent-spk-c396", "", 1, "kt-inbox__subject"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-warning", "kt-badge.kt-badge-light-bold", "kt-badge--inline"], ["_ngcontent-spk-c401", "", "data-toggle", "kt-tooltip", "data-skin", "dark", "data-placement", "right", "title", "Favorite", 1, "kt-inbox__icon", "kt-inbox__icon--off", "kt-inbox__icon--light"], ["id", "StarIcon", 1, "flaticon-star", 3, "ngStyle"], ["_ngcontent-spk-c396", "", 1, "Replied_border_left_true_completeUnderApproval", "card", "mb-2", "brdr-5", "shadow-sm"], ["_ngcontent-spk-c396", "", 1, "kt-inbox__datetime"], ["class", "flaticon-star", "id", "StarIcon", 3, "ngStyle", 4, "ngIf"], ["_ngcontent-spk-c396", "", 1, "Replied_border_left_true_underApprovals", "card", "mb-2", "brdr-5", "shadow-sm"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-primary", "kt-badge.kt-badge-light-bold", "kt-badge--inline"], ["_ngcontent-spk-c396", "", 1, "Replied_border_left_true_forwardUnderApproval", "card", "mb-2", "brdr-5", "shadow-sm"], ["_ngcontent-spk-c396", "", 1, "Replied_border_left_true_success", "card", "mb-2", "brdr-5", "shadow-sm"], [1, "kt-inbox__label", "kt-badge", "kt-badge--unified-success", "kt-badge.kt-badge-light-bold", "kt-badge--inline"], ["_ngcontent-spk-c396", "", 1, "Replied_border_left_true_hold", "card", "mb-2", "brdr-5", "shadow-sm"], ["_ngcontent-spk-c396", "", 1, "Replied_border_left_true_rejected", "card", "mb-2", "brdr-5", "shadow-sm"], ["_ngcontent-spk-c396", "", 1, "Replied_border_left_true_projectHold", "card", "mb-2", "brdr-5", "shadow-sm"], [1, "kt-inbox__label", "kt-badge", "kt-badge.kt-badge-light-bold", "kt-badge--inline", 2, "background-color", "#eae3fd"], ["_ngcontent-spk-c396", "", 1, "Replied_border_left_true_NewProject", "card", "mb-2", "brdr-5", "shadow-sm"], ["_ngcontent-spk-c396", "", 1, "Replied_border_left_true_HoldunderApp", "card", "mb-2", "brdr-5", "shadow-sm"], ["_ngcontent-spk-c396", "", 1, "Replied_border_left_true_NewToDo", "card", "mb-2", "brdr-5", "shadow-sm"], ["_ngcontent-spk-c396", "", 1, "Replied_border_left_true_Danger", "card", "mb-2", "brdr-5", "shadow-sm"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, HomeComponent_strong_7_Template, 2, 0, "strong", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, HomeComponent_strong_8_Template, 2, 0, "strong", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, HomeComponent_strong_9_Template, 2, 0, "strong", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, HomeComponent_strong_10_Template, 2, 0, "strong", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, HomeComponent_span_11_Template, 5, 2, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "form", 13)(17, "div", 14)(18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_18_listener($event) { return ctx.PortfolioSearch = $event; })("keyup.enter", function HomeComponent_Template_input_keyup_enter_18_listener() { return ctx.ServerSide_Search(ctx.PortfolioSearch); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 16)(20, "span", 17)(21, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_Template_i_click_21_listener() { return ctx.ServerSide_Search(ctx.PortfolioSearch); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 19)(23, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_23_listener() { return ctx.All_Portfolio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](24, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_27_listener() { return ctx.Owners_Portfolios(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](28, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_31_listener() { return ctx.Shared_Portfolios(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](32, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_35_listener() { return ctx.Favourite_Portfolios(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](36, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_39_listener() { return ctx._SortPortfoliolist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](40, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_41_listener() { return ctx._SortPortfoliolist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](42, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "div", 32)(44, "ul", 33)(45, "li", 34)(46, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](47, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "div", 37)(49, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_49_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "div", 39)(51, "div", 40)(52, "h5")(53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, "Total Portfolios - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](56, HomeComponent_strong_56_Template, 2, 1, "strong", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](57, HomeComponent_strong_57_Template, 2, 1, "strong", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](58, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](59, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "div", 39)(61, "div", 43)(62, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_62_listener($event) { return ctx.txtSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](64, "div", 39)(65, "div", 45)(66, "div", 46)(67, "p")(68, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](69, "Companys");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](70, HomeComponent_div_70_Template, 7, 3, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](71, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "div", 45)(73, "div", 46)(74, "p")(75, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](76, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](77, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](78, HomeComponent_div_78_Template, 7, 3, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](79, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "div", 45)(81, "div", 46)(82, "p")(83, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](84, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](85, HomeComponent_div_85_Template, 7, 3, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](86, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](87, "br")(88, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](89, "div", 39)(90, "div", 40)(91, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](92, "Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](93, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_93_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](94, "Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](95, HomeComponent_label_95_Template, 2, 2, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](96, HomeComponent_label_96_Template, 2, 2, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](97, HomeComponent_label_97_Template, 2, 2, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](98, HomeComponent_label_98_Template, 2, 2, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](99, HomeComponent_button_99_Template, 2, 1, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](100, HomeComponent_button_100_Template, 2, 1, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](101, HomeComponent_button_101_Template, 2, 1, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](102, HomeComponent_button_102_Template, 2, 1, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](103, HomeComponent_button_103_Template, 2, 1, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](104, HomeComponent_button_104_Template, 2, 1, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](105, HomeComponent_button_105_Template, 2, 1, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](106, HomeComponent_button_106_Template, 2, 1, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](107, "div")(108, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_108_listener() { return ctx.DropdownOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](109, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](110, "div", 56)(111, "div")(112, "ul", 57)(113, "li", 58)(114, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](115, "Create New Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](116, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](118, "Enter the Portfolio Name you wish to create,it can be editable anytime later.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](119, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_119_listener($event) { return ctx._portfolioName = $event; })("keydown.enter", function HomeComponent_Template_input_keydown_enter_119_listener() { return ctx.Displayprojectlist(); })("keypress", function HomeComponent_Template_input_keypress_119_listener($event) { return ctx.omit_number($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](120, "span")(121, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](124, HomeComponent_p_124_Template, 2, 1, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](125, "li", 63)(126, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_126_listener() { return ctx.Displayprojectlist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](127, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](128, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_128_listener() { return ctx.resetInputText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](129, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](130, "div", 66)(131, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](132, HomeComponent_div_132_Template, 7, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](133, "div", 68)(134, "div", 69)(135, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](136, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](137, "div", 72)(138, "div", 73)(139, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](140, HomeComponent_div_140_Template, 19, 18, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](141, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](142, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_142_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", ctx.PortfolioList);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeClassAll == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeClassFav == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeClassOwners == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeClassShare == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.searchResult == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.PortfolioSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](53, _c1, ctx.activeClassAll));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.countAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](55, _c1, ctx.activeClassOwners));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.countOwners);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](57, _c1, ctx.activeClassShare));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.countShare);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](59, _c1, ctx.activeClassFav));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.countFav);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", ctx.Z2A);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", ctx.A2Z);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx.edited ? "kt-todo__icon mr-4 filter-dot" : "kt-todo__icon mr-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.countAll >= 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.countAll < 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.txtSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](71, 44, ctx.Companylist_Json, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](79, 47, ctx.Statuslist_Json, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](86, 50, ctx.Employeelist_Json, ctx.txtSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeClassAll == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeClassFav == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeClassOwners == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeClassShare == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeClassAll == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeClassFav == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeClassOwners == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeClassShare == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeClassAll == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeClassFav == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeClassOwners == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeClassShare == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](61, _c1, ctx.activeClass_NewPortfolio));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx._portfolioName)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](63, _c2, ctx._portfolioName == "" ? "rgb(255 177 175)" : "rgb(136 150 255)", ctx._portfolioName == "" ? "rgb(253 135 135 / 10%)" : "#f5f6fc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.alreadyExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.special == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx._portfolioName == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.messageForEmpty == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx._ListProjStat);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__.Ng2SearchPipe], styles: [".list-icon-color[_ngcontent-%COMP%]{\n    color: #969696\n   }\n\n  .loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\n    background: #0dc5c1;\n    animation: load1 1s infinite ease-in-out;\n    width: 1em;\n    height: 4em;\n  }\n\n  .loader[_ngcontent-%COMP%] {\n    color: #0dc5c1;\n    text-indent: -9999em;\n    margin: 88px auto;\n    position: relative;\n    font-size: 11px;\n    transform: translateZ(0);\n    animation-delay: -0.16s;\n  }\n\n  .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\n    position: absolute;\n    top: 0;\n    content: '';\n  }\n\n  .loader[_ngcontent-%COMP%]:before {\n    left: -1.5em;\n    animation-delay: -0.32s;\n  }\n\n  .loader[_ngcontent-%COMP%]:after {\n    left: 1.5em;\n  }\n\n  @keyframes load1 {\n    0%,\n    80%,\n    100% {\n      box-shadow: 0 0;\n      height: 4em;\n    }\n    40% {\n      box-shadow: 0 -2em;\n      height: 5em;\n    }\n  }\n\n  .center[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 200px;\n  }\n\n  .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    border-radius: 2px;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]{\n  width: 400px;\n  height: auto;\n  max-height: 400px;\n  padding: 10px;\n  top: 38px !important;\n  left: auto !important;\n  right: 0px !important;\n  overflow-y: auto;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n}\n\n  \n\n  .shareddetails.dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n  .ngx-pagination[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n  #backBtn[_ngcontent-%COMP%]:hover{\n background-color:#0073e6 ;\n color: white; \n}\n\n  #Mdl_closebtn[_ngcontent-%COMP%]:hover{\n  background-color: #dc3545;\n  color:white\n}\n\n  .text-warning-1[_ngcontent-%COMP%]{\n  background-color: #ffe0a7;\n  color:#FFA800;\n  width: auto;\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n\n  .text-danger-1[_ngcontent-%COMP%]{\n  color: #F64E60;\n  background-color: #FFE2E5;\n  width: auto;\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n\n  .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%], .multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-up[_ngcontent-%COMP%]{\n  border-top: 7px solid #adadad !important;\n    border-left: 7px solid transparent !important;\n    border-right: 7px solid transparent !important\n}\n\n  .multiselect-dropdown[_ngcontent-%COMP%]{\n  width: 80px !important;\n\n}\n\n  .kt-todo__details[_ngcontent-%COMP%]{\n  display: flex;\n}\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]{\n  border: 0;\n    background: none;\n    font-size: 16px;\n    outline: none !important;\n    box-shadow: none;\n    outline: none !important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 30px;\n    width: 30px;\n    background-color: #f5f6fc;\n    border: 1px solid #3699FF;\n    color: #3699FF;\n    transition: all 0.3s ease;\n    cursor: pointer;\n    margin: 0 8px 0 0;\n    border-radius: 0;\n    border-radius: 4px;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon[_ngcontent-%COMP%] {\n    height: 18px;\n    width: 18px;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]{\n  height: 25px;\n  width: 25px;\n}\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{\n    fill: #5867dd;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\n    fill: #5867dd;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   svg.kt-svg-icon.add-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\n    fill: #fff;\n  }\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]   .kt-svg-icon[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{\n  fill: #fff;\n}\n\n  .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]:hover, .kt-todo__details[_ngcontent-%COMP%]   .kt-todo__icon.active[_ngcontent-%COMP%]{\n    background-color: #3699FF;\n    color: #fff;\n    box-shadow: 0 0.1rem 1rem 0.25rem rgb(0 0 0 / 5%) !important;\n    \n  }\n\n  .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    font-size: 18px;\n    color: #ccc;\n  }\n\n  .card-title[_ngcontent-%COMP%]   .favourite.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%]   .favourite[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{\n    color: #ffc107;\n  }\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\n    border-color: #d6d6d6;\n  }\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.success[_ngcontent-%COMP%] {\n    \n    \n    box-shadow: -5px 0px 1px #1dc9b7\n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.warning[_ngcontent-%COMP%] {\n    \n    box-shadow: -5px 0px 1px #ffb822\n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.info[_ngcontent-%COMP%] {\n    \n    box-shadow: -5px 0px 1px #2786fb\n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.danger[_ngcontent-%COMP%] {\n    \n    box-shadow: -5px 0px 1px #F58A8B\n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.UnderApprovals[_ngcontent-%COMP%] {\n  \n  box-shadow: -5px 0px 1px #BD838C\n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.ForwardUnderApproval[_ngcontent-%COMP%] {\n  \n  box-shadow: -5px 0px 1px #E0B1D7 \n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.completeUnderApproval[_ngcontent-%COMP%] {\n  \n  box-shadow: -5px 0px 1px #98c7bf\n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.newProject[_ngcontent-%COMP%] {\n  \n  box-shadow: -5px 0px 1px #98c7bf\n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.projecthold[_ngcontent-%COMP%] {\n  \n  box-shadow: -5px 0px 1px #C0B5DC\n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.projectComRejected[_ngcontent-%COMP%] {\n  \n  box-shadow: -5px 0px 1px #e6c947\n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.projectholded[_ngcontent-%COMP%] {\n  \n  box-shadow: -5px 0px 1px #C0B5DC\n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.NewprojectRejected[_ngcontent-%COMP%] {\n  \n  box-shadow: -5px 0px 1px #C0B5DC\n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.HoldunderApp[_ngcontent-%COMP%] {\n  \n  box-shadow: -5px 0px 1px #a85098\n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.DeadlineExtended[_ngcontent-%COMP%]{\n  \n  box-shadow: -5px 0px 1px #E0B1D7\n}\n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   .plist-details[_ngcontent-%COMP%]   tr.EnactiveUnderApp[_ngcontent-%COMP%]{\n  \n  box-shadow: -5px 0px 1px #E0B1D7\n}\n\n  .delayDays[_ngcontent-%COMP%]{\n  font-size: 10px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n  transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\n  fill: #5E5F63;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\n  padding: 0.2rem 20px;\n  border-radius: 4px;\n}\n\n  .mail-dropdown[_ngcontent-%COMP%] {\n  width: 800px;\n  max-width: 100%;\n}\n\n  .mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-bottom: 5px;\n}\n\n  .kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\n  min-height: 60px;\n}\n\n  .kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n  .dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #ccc !important;\n  border-radius: 4px;\n}\n\n  .kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n  color: #74788D !important;\n  cursor: auto;\n}\n\n  .kt-nav__link-text[_ngcontent-%COMP%]:hover {\n  color: #74788D !important;\n}\n\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\n  background-color: rgba(154, 100, 142, 0.2);\n  color: #333 !important;\n  transition: all 0.3s;\n}\n\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n  .kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background: rgb(195, 195, 195);\n}\n\n  \n\n  .kt-quick-panel2[_ngcontent-%COMP%] {\n  width: 650px !important;\n}\n\n  .kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\n  right: -660px;\n  left: auto;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  border-radius: 5px;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #F1F1F1;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n  \n\n  \n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\n  background-color: #FFFFFF !important;\n}\n\n  .chatcount[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-left: -15px;\n  margin-top: -10px;\n}\n\n  .kt-badge.kt-badge--dark[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background: #8C8D92;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%] {\n  transition: fill 0.3s cubic-bezier(0.93, 0.35, 1, 1);\n  fill: #5E5F63;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%]   .kt-inbox__nav[_ngcontent-%COMP%]   .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]   .kt-nav__link[_ngcontent-%COMP%] {\n  padding: 0.2rem 20px;\n  border-radius: 4px;\n}\n\n  .kt-font-ReplyRequired[_ngcontent-%COMP%] {\n  color: #a6c !important;\n}\n\n  .mail-dropdown[_ngcontent-%COMP%] {\n  width: 800px;\n  max-width: 100%;\n}\n\n  .mail-dropdown[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-bottom: 5px;\n}\n\n  .kt-quick-panel[_ngcontent-%COMP%]   .kt-portlet.kt-portlet--head-lg[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\n  min-height: 60px;\n}\n\n  .kt-inbox__icon[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-sm[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n  .dropdown-reply[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__label[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__form[_ngcontent-%COMP%]   .kt-inbox__body[_ngcontent-%COMP%]   .kt-inbox__to[_ngcontent-%COMP%]   .kt-inbox__field[_ngcontent-%COMP%]   .kt-inbox__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #ccc !important;\n  border-radius: 4px;\n}\n\n  .kt-nav__link-nohover[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n  color: #74788D !important;\n  cursor: auto;\n}\n\n  .kt-nav__link-text[_ngcontent-%COMP%]:hover {\n  color: #74788D !important;\n}\n\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%] {\n  background-color: rgba(154, 100, 142, 0.2);\n  color: #333 !important;\n  transition: all 0.3s;\n}\n\n  .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.kt-nav__item--active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item.active[_ngcontent-%COMP%] > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-icon[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-text[_ngcontent-%COMP%], .kt-nav[_ngcontent-%COMP%]   .kt-nav__item[_ngcontent-%COMP%]:hover:not(.kt-nav__item--disabled):not(.kt-nav__item--sub) > .kt-nav__link[_ngcontent-%COMP%]   .kt-nav__link-arrow[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n  .kt-badge.kt-badge--unified-brand[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background: rgb(195, 195, 195);\n}\n\n  \n\n  .kt-quick-panel2[_ngcontent-%COMP%] {\n  width: 650px !important;\n}\n\n  .kt-quick-panel--right[_ngcontent-%COMP%]   .kt-quick-panel[_ngcontent-%COMP%] {\n  right: -660px;\n  left: auto;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  border-radius: 5px;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #F1F1F1;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n}\n\n  \n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n  \n\n  \n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__icon[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  outline: none !important;\n  box-shadow: none;\n  outline: none !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 35px;\n  width: 35px;\n  background-color: #FFFFFF;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  margin: 0;\n  border-radius: 0;\n  border-radius: 4px;\n}\n\n  .kt-badge.kt-badge--inline[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n  padding: 0.15rem 0.75rem;\n  border-radius: 2px;\n  margin-left: 4px;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__aside[_ngcontent-%COMP%] {\n  padding: 17px;\n  width: 243px;\n}\n\n  \n\n  .Replied_border_left_true_warning[_ngcontent-%COMP%]{\n  border-left: 5px solid #ffb822 !important;\n}\n\n  .Replied_border_left_true_primary[_ngcontent-%COMP%]{\n  border-left: 5px solid #95bed9 !important;\n}\n\n  .Replied_border_left_true_success[_ngcontent-%COMP%]{\n  border-left: 5px solid #95bed9 !important;\n}\n\n  .Replied_border_left_true_Danger[_ngcontent-%COMP%]{\n  border-left: 5px solid #F58A8B !important;\n}\n\n  .Replied_border_left_true_hold[_ngcontent-%COMP%]{\n  border-left: 5px solid #c0b5dc !important;\n}\n\n  .Replied_border_left_true_rejected[_ngcontent-%COMP%]{\n  border-left: 5px solid #f5c293 !important;\n}\n\n  .Replied_border_left_true_underApprovals[_ngcontent-%COMP%]{\n  border-left: 5px solid #BD838C !important;\n}\n\n  .Replied_border_left_true_forwardUnderApproval[_ngcontent-%COMP%]{\n  border-left: 5px solid #E0B1D7 !important;\n}\n\n  .Replied_border_left_true_completeUnderApproval[_ngcontent-%COMP%]{\n  border-left: 5px solid #98c7bf !important;\n}\n\n  .Replied_border_left_true_projectHold[_ngcontent-%COMP%]{\n  border-left: 5px solid #C0B5DC !important;\n}\n\n  .Replied_border_left_true_NewProject[_ngcontent-%COMP%]{\n  border-left: 5px solid #007bff !important;\n}\n\n  .Replied_border_left_true_DeadlineExtended[_ngcontent-%COMP%]{\n  border-left: 5px solid #E0B1D7 !important;\n}\n\n  .Replied_border_left_true_HoldunderApp[_ngcontent-%COMP%]{\n  border-left: 5px solid #a85098 !important;\n}\n\n  .Replied_border_left_true_NewToDo[_ngcontent-%COMP%]{\n  border-left: 5px solid #5088a8 !important;\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%] {\n    margin-left: 0px;\n}\n\n  .kt-portlet.cus-portlet[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  box-shadow: none;\n  border-radius: 0px;\n}\n\n  .mt--20px[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  padding-right: 10px;\n  margin-left: -1px;\n}\n\n  .pro-nm[_ngcontent-%COMP%]{\ncolor: #2c3148;\n    line-height: 1.6;\n    font-size: 26px;\n}\n\n  body[_ngcontent-%COMP%]{\n  background-color: red;\n}\n\n  .kt-portlet.cus-portlet[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\n  min-height: unset;\n  padding: 5px 5px;\n  border-bottom: none;\n}\n\n  .icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]{\n  position: relative;\n  margin-right: 15px !important;\n  z-index: 2;\n}\n\n  .icons-filter[_ngcontent-%COMP%]   .kt-todo__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  width: 18px;\n    height: 18px;\n    text-align: center;\n    font-size: 10px;\n    font-weight: 700;\n  color: #fff;\n  background: #2786fb;\n  border: 1px solid #2786fb;\n  border-radius: 50%;\n  position: absolute;\n  top: -11px;\n  right: -11px;\n  z-index: 3;\n}\n\n  \n\n  \n\n  .dataTables_wrapper[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]{\n  margin-top: 0px !important;\n}\n\n  .multiselect-dropdown[_ngcontent-unj-c40][_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-unj-c40][_ngcontent-%COMP%]{\n  width: 150px !important;\n}\n\n  \n\n  .sideInfobar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  background-color: #f1f1f1;\n  border-left: 1px solid #b3bcff;\n  overflow-x: hidden;\n  transition: 0.5s;\n  \n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%]{\n  background-color: #f5f6fc;\n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n\ttext-decoration: none;\n\tcolor: #333;\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n\n  .info-icon-cir[_ngcontent-%COMP%]{\n  font-size: 20px;\n  color: #5867dd;\n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]{\n  border-bottom: 0.07rem dashed #dedede;\n  padding: 6px;\n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%]{\n  border-bottom: 0.07rem dashed rgba(0,0,0,0.3);\n}\n\n  .kt-inbox__datetime[_ngcontent-%COMP%]{\n  font-size: 13.5px !important;\n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%]{\n  font-weight: 600;\n}\n\n  .sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%]{\n  width: 270px;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n  .count-height[_ngcontent-%COMP%]{\n  max-height: 200px;\n  overflow-y: auto;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]   .justify-content-between[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]{\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #f1f1f1;\n}\n\n  \n\n  .count-height[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #ccc;\n}\n\n  .dropdown[_ngcontent-%COMP%]   .kt-checkbox[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]{\n  border-color: #0073e6;\n}\n\n  .kt-checkbox[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  border: solid #0073e6;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown[_ngcontent-%COMP%] {\n  position: static !important;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%] {\n    padding: 20px;\n    width: 60%;\n    \n    top: 20px !important;\n    left: -22px !important;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:before {\n  content: \"\";\n  border-bottom: 15px solid #fff;\n  border-right: 17px solid transparent;\n  border-left: 17px solid transparent;\n  position: absolute;\n  top: -15px;\n  left: 32px;\n  z-index: 10;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  border-bottom: 17px solid #ccc;\n  border-right: 19px solid transparent;\n  border-left: 19px solid transparent;\n  position: absolute;\n  top: -17px;\n  left: 30px;\n  z-index: 8;\n}\n\n  .stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu1[_ngcontent-%COMP%]   .filter-box[_ngcontent-%COMP%]{\n  width: 33.3333%;\n  display: inline-block;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){\n  width: 3%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){\n  width: 4%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3){\n  width: 33%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4){\n  width: 10%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5){\n  width: 10%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6){\n  width: 15%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(7), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7){\n  width: 10%;\n}\n\n  #project-4[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(8), #project-4[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8){\n  width: 15%;\n}\n\n  .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{\n  \n  cursor: pointer;\n}\n\n  .kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{\n  border: 1px solid #d6dbff;\n  border-radius: 5px;\n}\n\n  .show_entries[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 3px;\n  background-color: #fff;\n \n}\n\n  .show_entries[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\n  \n  border: 2px solid rgba(88, 103, 221, 0.3);\n  color: #5867dd;\n  font-weight: bold;\n}\n\n  .count-btn[_ngcontent-%COMP%]{\n  \n  \n  padding: 0px 10px;\n  font-weight: 700;\n  color: rgb(88, 88, 88);\n  font-size: 14px;\n  line-height: 25px;\n}\n\n  \n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__toolbar[_ngcontent-%COMP%]   .kt-inbox__search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 44px;\n  border: none;\n  background-color: #f2f3f7;\n}\n\n  .input-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100% !important;\n}\n\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]{\n  \n  background-color: #fff;\n  width: 25vw;\n  box-shadow: none;\n  border: 1px solid #d6dbff !important;\n  margin-top: 5px;\n}\n\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .dropdown-menu-md.bg-ground-short[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{\n  background-color: #f5f6fc;\n}\n\n  \n\n  \n\n  .kt-inbox__items[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: calc(100vh - 125px);\n}\n\n  .kt-inbox[_ngcontent-%COMP%]   .kt-inbox__list[_ngcontent-%COMP%]   .kt-inbox__items[_ngcontent-%COMP%]   .kt-inbox__item[_ngcontent-%COMP%]{\n  position: relative;\n}\n\n  .delete-btn[_ngcontent-%COMP%]{\n  display: none;\n  position: absolute;\n   right: 0px;\n    top: 50%;\n    transform: translateY(-50%);\n    background-color: #f2f3f7;\n    color: grey;\n    line-height: 59px;\n    padding: 0 20px;\n    transition: all 2s ease !important;\n}\n\n  .delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n  background: none;\n  font-size: 16px;\n  outline: none !important;\n  box-shadow: none;\n  outline: none !important;\n  height: 30px;\n  width: 30px;\n  background-color: #f5f6fc;\n  border: 1px solid #b3bcff;\n  color: #5867dd;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  margin: 10px 8px 0 0;\n  border-radius: 0;\n  border-radius: 4px;\n  padding: 5px;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n\n  \n\n  .btn-secondary.theme-btn[_ngcontent-%COMP%]{\n  background-color: #5867dd;\n  color: #fff;\n}\n\n  .btn.btn-label-primary[_ngcontent-%COMP%]{\n  border: 1px solid #3699FF;\n}\n\n  .delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\n    background-color: #5867dd;\n    color: #fff;\n}\n\n  .kt-inbox__item[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%]{\n  display: block;\n}\n\n  .modal-body.min-scroll[_ngcontent-%COMP%]{\n  height: auto;\n  max-height: 300px;\n  overflow-y: hidden;\n}\n\n  .modal-body.min-scroll[_ngcontent-%COMP%]:hover{\n  overflow-y: scroll;\n}\n\n  .modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n  .modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n  .modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #5867dd;\n  border-radius: 8px;\n}\n\n  .modal-body.min-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #b3bcff;\n}\n\n  .kt-inbox__details[_ngcontent-%COMP%]{\n  margin-top: 0px !important;\n}\n\n  .font-16[_ngcontent-%COMP%]{\n  font-size: 16px !important;\n}\n\n  \n\n  .name-box[_ngcontent-%COMP%]{\n  display: inline-block;\n  font-size: 9px;\n  width: 30px;\n  height: 30px;\n  background-color: #5867dd;\n  color: #fff;\n  font-weight: 500;\n  letter-spacing: 2px;\n  border-radius: 50%;\n  line-height: 30px;\n  margin-right: 5px;\n}\n\n  .names-response[_ngcontent-%COMP%]{\n  display :inline-block;\n  text-align: left;\n}\n\n  .names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{\n  display: block;\n  font-size: 10px;\n  font-weight: 600;\n}\n\n  .names-response[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{\n  font-weight: 600;\n}\n\n  .head-btn[_ngcontent-%COMP%]{\n  background-color: rgba(88, 103, 221, 0.1);\n    padding: 3px 10px 3px 5px;\n    border-radius: 2rem;\n    border: 1px solid #b3bcff;\n    font-weight: 500;\n    font-size: 12px;\n}\n\n  .head-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    width: 25px;\n    height: 25px;\n    background: #5867dd;\n    color: #fff;\n    line-height: 25px;\n    text-align: center;\n    border-radius: 50%;\n    margin-right: 3px;\n}\n\n  .devider[_ngcontent-%COMP%]{\n  height: 1px;\n  width: 100%;\n  background-color: #f1f1f1;\n}\n\n  .pricevalues[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-bottom: 10px;\n  border-right: 1px solid #f1f1f1;\n  border-bottom: 1px solid #f1f1f1;\n}\n\n  .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(1), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(2)  {\n  border-top: 1px solid #f1f1f1;\n}\n\n  .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(3), .top-border[_ngcontent-%COMP%]   .pricevalues[_ngcontent-%COMP%]:nth-child(4)  {\n  border-bottom: none\n}\n\n  .pricevalues[_ngcontent-%COMP%]:nth-child(2), .pricevalues[_ngcontent-%COMP%]:nth-child(4) {\n  border-right: none;\n}\n\n  .dms-links[_ngcontent-%COMP%]{\n  list-style-type: disc;\n}\n\n  .dms-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  display: block;\n  text-decoration: underline;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n\n  .py-10px[_ngcontent-%COMP%]{\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n  \n\n  .progress_bar[_ngcontent-%COMP%]   .pro-bar[_ngcontent-%COMP%] {\n  background: hsl(0, 0%, 97%);\n  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;\n  height: 4px;\n  margin-bottom: 12px;\n  margin-top: 30px;\n  position: relative;\n  text-align: left;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress_bar_title[_ngcontent-%COMP%] {\n  color: hsl(218, 4%, 50%);\n  font-size: 12px;\n  font-weight: 600;\n  position: relative;\n  top: -28px;\n  z-index: 1;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress_number[_ngcontent-%COMP%] {\n  float: right;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%] {\n  background-color: hsl(0, 0%, 88%);\n  display: block;\n  width: 0;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: width 1s linear 0s;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background-color: hsl(0, 0%, 100%);\n  border-radius: 50%;\n  width: 4px;\n  height: 4px;\n  position: absolute;\n  right: 1px;\n  top: 0;\n  z-index: 1;\n}\n\n  .progress_bar[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 14px;\n  height: 14px;\n  background-color: inherit;\n  border-radius: 50%;\n  position: absolute;\n  right: -4px;\n  top: -5px;\n}\n\n  .bg-today[_ngcontent-%COMP%] {\n  background-color: #342bf0 !important;\n}\n\n  .brdr-5[_ngcontent-%COMP%]{\n  border-radius: 5px;\n}\n\n  \n\n  label.page-num[_ngcontent-%COMP%] {\n  color: #FFFFFF !important;\n  background-color: #2786fb !important;\n  border-color: #2786fb !important;\n  padding: 0.65rem 0.85rem;\n  font-size: 0.925rem;\n  line-height: 1.35;\n  margin: 0px 3px;\n  border-radius: 4px;\n  font-weight: 600;\n}\n\n  .btn.btn-label-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n  font-size: 1.2rem;\n}\n\n  .btn.btn-label-info[_ngcontent-%COMP%] {\n  color: #2786fb;\n  background-color: #E1F0FF;\n  border-color: transparent;\n  border: 1px solid #2786fb;\n  font-size: 1rem;\n  padding: 0;\n  height: 30px;\n  width: 30px;\n}\n\n  \n\n  @media only screen and (max-width: 768px) {\n  .dropdown-menu-md.bg-ground[_ngcontent-%COMP%]{\n    width: 80vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1CSzs7RUFFSDtJQUNFO0dBQ0Q7O0VBQ0Q7OztJQUdFLG1CQUFtQjtJQUVuQix3Q0FBd0M7SUFDeEMsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFDQTtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBR2Ysd0JBQXdCO0lBRXhCLHVCQUF1QjtFQUN6Qjs7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7RUFDYjs7RUFDQTtJQUNFLFlBQVk7SUFFWix1QkFBdUI7RUFDekI7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBY0E7SUFDRTs7O01BR0UsZUFBZTtNQUNmLFdBQVc7SUFDYjtJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLFdBQVc7SUFDYjtFQUNGOztFQUNBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtFQUNmOztFQUNBO0lBQ0Usa0JBQWtCO0FBQ3RCOztFQUNBOzs7Ozs7S0FNSzs7RUFFTDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0VBQ0EsVUFBVTs7RUFDVjtFQUNFLFVBQVU7QUFDWjs7RUFFQSxVQUFVOztFQUNWO0VBQ0UsbUJBQW1CO0FBQ3JCOztFQUVBLFdBQVc7O0VBQ1g7RUFDRSxnQkFBZ0I7QUFDbEI7O0VBRUEsb0JBQW9COztFQUNwQjtFQUNFLGdCQUFnQjtBQUNsQjs7RUFDQTtFQUNFLGVBQWU7QUFDakI7O0VBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiOztFQUNBO0VBQ0UseUJBQXlCO0VBQ3pCO0FBQ0Y7O0VBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7RUFFQTs7RUFFRSx3Q0FBd0M7SUFDdEMsNkNBQTZDO0lBQzdDO0FBQ0o7O0VBRUE7RUFDRSxzQkFBc0I7O0FBRXhCOztFQUNBO0VBQ0UsYUFBYTtBQUNmOztFQUNBO0VBQ0UsU0FBUztJQUNQLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0JBQXdCO0lBRXhCLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFHeEIsYUFBYTtJQUdiLHVCQUF1QjtJQUd2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGNBQWM7SUFFZCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVGO0lBQ0ksWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFRjtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0VBRUU7SUFDRSxhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7O0VBQ0E7O0lBRUUsVUFBVTtFQUNaOztFQUVBOztFQUVBLFVBQVU7QUFDWjs7RUFFRTs7SUFFRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLDREQUE0RDs7RUFFOUQ7O0VBQ0E7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUNBOztJQUVFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxvQ0FBb0M7SUFDcEMsd0JBQXdCO0lBQ3hCO0FBQ0o7O0VBQ0E7SUFDSSxxQ0FBcUM7SUFDckM7QUFDSjs7RUFDQTtJQUNJLHFDQUFxQztJQUNyQztBQUNKOztFQUNBO0lBQ0kscUNBQXFDO0lBQ3JDO0FBQ0o7O0VBQ0E7RUFDRSxxQ0FBcUM7RUFDckM7QUFDRjs7RUFDQTtFQUNFLG9DQUFvQztFQUNwQztBQUNGOztFQUNBO0VBQ0UscUNBQXFDO0VBQ3JDO0FBQ0Y7O0VBQ0E7RUFDRSxxQ0FBcUM7RUFDckM7QUFDRjs7RUFDQTtFQUNFLHFDQUFxQztFQUNyQztBQUNGOztFQUNBO0VBQ0UscUNBQXFDO0VBQ3JDO0FBQ0Y7O0VBQ0E7RUFDRSxxQ0FBcUM7RUFDckM7QUFDRjs7RUFDQTtFQUNFLHFDQUFxQztFQUNyQztBQUNGOztFQUVBO0VBQ0UscUNBQXFDO0VBQ3JDO0FBQ0Y7O0VBQ0E7RUFDRSxxQ0FBcUM7RUFDckM7QUFDRjs7RUFDQTtFQUNFLHFDQUFxQztFQUNyQztBQUNGOztFQUNBO0VBQ0UsZUFBZTtBQUNqQjs7RUFFQTtFQUVFLG9EQUFvRDtFQUNwRCxhQUFhO0FBQ2Y7O0VBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztFQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0VBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztFQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztFQUNBO0VBQ0UsWUFBWTtBQUNkOztFQUNBO0VBQ0UsV0FBVztBQUNiOztFQUNBO0VBQ0UsV0FBVztBQUNiOztFQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLHdDQUF3QztFQUN4Qyx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztFQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztFQUNBOzs7RUFHRSwwQ0FBMEM7RUFDMUMsc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7RUFDQTs7Ozs7Ozs7O0VBU0UsV0FBVztBQUNiOztFQUNBO0VBQ0UsY0FBYztFQUNkLDhCQUE4QjtBQUNoQzs7RUFDQTs7Ozs7R0FLRzs7RUFDSDtFQUNFLHVCQUF1QjtBQUN6Qjs7RUFDQTtFQUNFLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0VBQ0EsVUFBVTs7RUFDVjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0VBQ0EsVUFBVTs7RUFDVjtFQUNFLG1CQUFtQjtBQUNyQjs7RUFDQSxXQUFXOztFQUNYO0VBQ0UsZ0JBQWdCO0FBQ2xCOztFQUNBLG9CQUFvQjs7RUFDcEI7RUFDRSxnQkFBZ0I7QUFDbEI7O0VBQ0E7OztHQUdHOztFQUNIOztHQUVHOztFQUNIO0VBQ0Usb0NBQW9DO0FBQ3RDOztFQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0VBQ0E7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztFQUNBO0VBRUUsb0RBQW9EO0VBQ3BELGFBQWE7QUFDZjs7RUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7O0VBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7RUFDQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0VBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0VBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0VBQ0E7RUFDRSxXQUFXO0FBQ2I7O0VBQ0E7RUFDRSxXQUFXO0FBQ2I7O0VBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsa0JBQWtCO0FBQ3BCOztFQUNBO0VBQ0Usd0NBQXdDO0VBQ3hDLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0VBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0VBQ0E7OztFQUdFLDBDQUEwQztFQUMxQyxzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztFQUNBOzs7Ozs7Ozs7RUFTRSxXQUFXO0FBQ2I7O0VBQ0E7RUFDRSxjQUFjO0VBQ2QsOEJBQThCO0FBQ2hDOztFQUNBOzs7OztHQUtHOztFQUNIO0VBQ0UsdUJBQXVCO0FBQ3pCOztFQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7QUFDWjs7RUFDQSxVQUFVOztFQUNWO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7RUFDQSxVQUFVOztFQUNWO0VBQ0UsbUJBQW1CO0FBQ3JCOztFQUNBLFdBQVc7O0VBQ1g7RUFDRSxnQkFBZ0I7QUFDbEI7O0VBQ0Esb0JBQW9COztFQUNwQjtFQUNFLGdCQUFnQjtBQUNsQjs7RUFDQTs7O0dBR0c7O0VBQ0g7O0dBRUc7O0VBQ0g7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsU0FBUztFQUNULGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztFQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7RUFDQSxrQkFBa0I7O0VBQ2xCO0VBQ0UseUNBQXlDO0FBQzNDOztFQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztFQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztFQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztFQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztFQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztFQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztFQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztFQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztFQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztFQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztFQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztFQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztFQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztFQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztFQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7RUFDQTtBQUNBLGNBQWM7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7RUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7RUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztFQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixVQUFVO0FBQ1o7O0VBQ0E7RUFDRSxXQUFXO0lBQ1QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0VBQ0E7OztHQUdHOztFQUNIOzs7R0FHRzs7RUFFSDtFQUNFLDBCQUEwQjtBQUM1Qjs7RUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7RUFFQSxvQkFBb0I7O0VBQ3BCO0VBQ0UsWUFBWTtFQUNaLFFBQVE7RUFDUixlQUFlO0VBQ2YsVUFBVTtFQUNWLE1BQU07RUFDTixRQUFRO0VBQ1IseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7RUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7RUFFQTtDQUNDLHFCQUFxQjtDQUNyQixXQUFXO0VBQ1Ysa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7RUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztFQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLFlBQVk7QUFDZDs7RUFDQTtFQUNFLDZDQUE2QztBQUMvQzs7RUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7RUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7RUFDQTtFQUNFLFlBQVk7SUFDVixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0VBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztFQUVBOztHQUVHOztFQUNIO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7RUFHQSxVQUFVOztFQUNWO0VBQ0UsVUFBVTtBQUNaOztFQUVBLFVBQVU7O0VBQ1Y7RUFDRSxtQkFBbUI7QUFDckI7O0VBRUEsV0FBVzs7RUFDWDtFQUNFLG1CQUFtQjtBQUNyQjs7RUFFQSxvQkFBb0I7O0VBQ3BCO0VBQ0UsZ0JBQWdCO0FBQ2xCOztFQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztFQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztFQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztFQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVjs7K0JBRTJCO0lBQzNCLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0VBQ0E7RUFDRSxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQyxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztBQUNiOztFQUNBO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixvQ0FBb0M7RUFDcEMsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFVBQVU7QUFDWjs7RUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0VBRUE7RUFDRSxTQUFTO0FBQ1g7O0VBQ0E7RUFDRSxTQUFTO0FBQ1g7O0VBQ0E7RUFDRSxVQUFVO0FBQ1o7O0VBQ0E7RUFDRSxVQUFVO0FBQ1o7O0VBQ0E7RUFDRSxVQUFVO0FBQ1o7O0VBQ0E7RUFDRSxVQUFVO0FBQ1o7O0VBQ0E7RUFDRSxVQUFVO0FBQ1o7O0VBQ0E7RUFDRSxVQUFVO0FBQ1o7O0VBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtBQUNqQjs7RUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0VBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLHNCQUFzQjs7QUFFeEI7O0VBQ0E7RUFDRSxrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0VBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0VBQ0Esb0JBQW9COztFQUNwQjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztFQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7RUFFQTtFQUNFLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7RUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7RUFFQSw2Q0FBNkM7O0VBRTdDOzs7Ozs7Ozs7OztHQVdHOztFQUNIO0VBQ0UsY0FBYztFQUNkLDJCQUEyQjtBQUM3Qjs7RUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7R0FDakIsVUFBVTtJQUNULFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtDQUFrQztBQUN0Qzs7RUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFFaEIseUJBQXlCO0FBQzdCOztFQUNBOzs7Ozs7RUFNRTs7RUFDRjtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0VBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0VBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztFQUNBO0VBQ0UsY0FBYztBQUNoQjs7RUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztFQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0UsVUFBVTtBQUNaOztFQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztFQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7RUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7RUFDQTtFQUNFLDBCQUEwQjtBQUM1Qjs7RUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7RUFDQSwyQkFBMkI7O0VBQzNCO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7RUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0VBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7RUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7RUFFQTtFQUNFLHlDQUF5QztJQUN2Qyx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7RUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0VBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7RUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQzs7RUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7RUFDQTtFQUNFO0FBQ0Y7O0VBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0VBSUE7RUFDRSxxQkFBcUI7QUFDdkI7O0VBRUE7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0VBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztFQUVBLGlCQUFpQjs7RUFDakI7RUFDRSwyQkFBMkI7RUFDM0IsZ0RBQWdEO0VBQ2hELFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0VBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7QUFDWjs7RUFFQTtFQUNFLFlBQVk7QUFDZDs7RUFFQTtFQUNFLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QsUUFBUTtFQUNSLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCw4QkFBOEI7QUFDaEM7O0VBRUE7RUFDRSxXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFVBQVU7QUFDWjs7RUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0VBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0VBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0VBRUEsZUFBZTs7RUFDZjtFQUNFLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztFQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztFQUNFO0VBQ0EsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7RUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7O0VBRUg7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICNsb2FkaW5neyBcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgbGVmdDogNTAlOyBcbiAgdG9wOiA1MCU7IFxuICB6LWluZGV4OiAxOyBcbiAgd2lkdGg6IDE1MHB4OyBcbiAgaGVpZ2h0OiAxNTBweDsgXG4gIG1hcmdpbjogLTc1cHggMCAwIC03NXB4OyBcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IFxuICBib3JkZXItcmFkaXVzOiA1MCU7IFxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7IFxuICB3aWR0aDogMTIwcHg7IFxuICBoZWlnaHQ6IDEyMHB4OyBcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgXG4gIH0gXG4gICAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7IFxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH0gXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gXG4gIH0gKi9cblxuICAubGlzdC1pY29uLWNvbG9ye1xuICAgIGNvbG9yOiAjOTY5Njk2XG4gICB9XG4gIC5sb2FkZXIsXG4gIC5sb2FkZXI6YmVmb3JlLFxuICAubG9hZGVyOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMGRjNWMxO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkMSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb246IGxvYWQxIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIHdpZHRoOiAxZW07XG4gICAgaGVpZ2h0OiA0ZW07XG4gIH1cbiAgLmxvYWRlciB7XG4gICAgY29sb3I6ICMwZGM1YzE7XG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XG4gICAgbWFyZ2luOiA4OHB4IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICB9XG4gIC5sb2FkZXI6YmVmb3JlLFxuICAubG9hZGVyOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGNvbnRlbnQ6ICcnO1xuICB9XG4gIC5sb2FkZXI6YmVmb3JlIHtcbiAgICBsZWZ0OiAtMS41ZW07XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgfVxuICAubG9hZGVyOmFmdGVyIHtcbiAgICBsZWZ0OiAxLjVlbTtcbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBsb2FkMSB7XG4gICAgMCUsXG4gICAgODAlLFxuICAgIDEwMCUge1xuICAgICAgYm94LXNoYWRvdzogMCAwO1xuICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0yZW07XG4gICAgICBoZWlnaHQ6IDVlbTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBsb2FkMSB7XG4gICAgMCUsXG4gICAgODAlLFxuICAgIDEwMCUge1xuICAgICAgYm94LXNoYWRvdzogMCAwO1xuICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIC0yZW07XG4gICAgICBoZWlnaHQ6IDVlbTtcbiAgICB9XG4gIH1cbiAgLmNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbiAgLm1vZGFsIC5tb2RhbC1jb250ZW50IHtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4vKiBcbiAgdGFibGUsIHRoLCB0ZCB7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG4gIHRhYmxlIHtcbiAgICBib3JkZXItc3BhY2luZzogMTVweDtcbiAgfSAqL1xuXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51e1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRvcDogMzhweCAhaW1wb3J0YW50O1xuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi8qIHdpZHRoICovXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG59XG5cbi8qIFRyYWNrICovXG4uc2hhcmVkZGV0YWlscy5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi8qIEhhbmRsZSAqL1xuLnNoYXJlZGRldGFpbHMuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbi5zaGFyZWRkZXRhaWxzLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU1NTtcbn1cbi5uZ3gtcGFnaW5hdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbiNiYWNrQnRuOmhvdmVye1xuIGJhY2tncm91bmQtY29sb3I6IzAwNzNlNiA7XG4gY29sb3I6IHdoaXRlOyBcbn1cbiNNZGxfY2xvc2VidG46aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gIGNvbG9yOndoaXRlXG59XG5cbi50ZXh0LXdhcm5pbmctMXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTBhNztcbiAgY29sb3I6I0ZGQTgwMDtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRleHQtZGFuZ2VyLTF7XG4gIGNvbG9yOiAjRjY0RTYwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFMkU1O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuZHJvcGRvd24tZG93bixcbi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5kcm9wZG93bi11cHtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNhZGFkYWQgIWltcG9ydGFudDtcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudFxufVxuXG4ubXVsdGlzZWxlY3QtZHJvcGRvd257XG4gIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG5cbn1cbi5rdC10b2RvX19kZXRhaWxze1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb257XG4gIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzY5OUZGO1xuICAgIGNvbG9yOiAjMzY5OUZGO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46IDAgOHB4IDAgMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiBzdmcua3Qtc3ZnLWljb24ge1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDtcbiAgfVxuXG4ua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbiBzdmcua3Qtc3ZnLWljb24uYWRkLWljb257XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24gLmt0LXN2Zy1pY29uIGcgW2ZpbGxde1xuICAgIGZpbGw6ICM1ODY3ZGQ7XG4gIH1cbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24gc3ZnLmt0LXN2Zy1pY29uLmFkZC1pY29uIHBhdGh7XG4gICAgZmlsbDogIzU4NjdkZDtcbiAgfVxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbjpob3ZlciBzdmcua3Qtc3ZnLWljb24uYWRkLWljb24gcGF0aCxcbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlIHN2Zy5rdC1zdmctaWNvbi5hZGQtaWNvbiBwYXRoe1xuICAgIGZpbGw6ICNmZmY7XG4gIH1cblxuICAua3QtdG9kb19fZGV0YWlscyAua3QtdG9kb19faWNvbjpob3ZlciAua3Qtc3ZnLWljb24gZyBbZmlsbF0sXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uLmFjdGl2ZSAua3Qtc3ZnLWljb24gZyBbZmlsbF17XG4gIGZpbGw6ICNmZmY7XG59XG5cbiAgLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb246aG92ZXIsXG4gIC5rdC10b2RvX19kZXRhaWxzIC5rdC10b2RvX19pY29uLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY5OUZGO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMC4xcmVtIDFyZW0gMC4yNXJlbSByZ2IoMCAwIDAgLyA1JSkgIWltcG9ydGFudDtcbiAgICBcbiAgfVxuICAuY2FyZC10aXRsZSAuZmF2b3VyaXRlIGl7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjY2NjO1xuICB9XG4gIC5jYXJkLXRpdGxlIC5mYXZvdXJpdGUuYWN0aXZlIGksXG4gIC5jYXJkLXRpdGxlIC5mYXZvdXJpdGU6aG92ZXIgaXtcbiAgICBjb2xvcjogI2ZmYzEwNztcbiAgfVxuXG4gIC5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ciB0ZHtcbiAgICBib3JkZXItY29sb3I6ICNkNmQ2ZDY7XG4gIH1cblxuICAuZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIuc3VjY2VzcyB7XG4gICAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMWRjOWI3OyAqL1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDRweDsgKi9cbiAgICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggIzFkYzliN1xufVxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLndhcm5pbmcge1xuICAgIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2ZmYjgyMjsgICovXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNmZmI4MjJcbn1cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5pbmZvIHtcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyNzg2ZmI7ICAqL1xuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjMjc4NmZiXG59XG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIuZGFuZ2VyIHtcbiAgICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNGNThBOEI7ICAqL1xuICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjRjU4QThCXG59XG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIuVW5kZXJBcHByb3ZhbHMge1xuICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNCRDgzOEM7ICAqL1xuICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggI0JEODM4Q1xufVxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLkZvcndhcmRVbmRlckFwcHJvdmFsIHtcbiAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3OyAqL1xuICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggI0UwQjFENyBcbn1cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5jb21wbGV0ZVVuZGVyQXBwcm92YWwge1xuICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5OGM3YmY7ICAqL1xuICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggIzk4YzdiZlxufVxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLm5ld1Byb2plY3Qge1xuICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5OGM3YmY7ICAqL1xuICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggIzk4YzdiZlxufVxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLnByb2plY3Rob2xkIHtcbiAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQzBCNURDOyAgKi9cbiAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNDMEI1RENcbn1cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5wcm9qZWN0Q29tUmVqZWN0ZWQge1xuICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNDMEI1REM7ICAqL1xuICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggI2U2Yzk0N1xufVxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLnByb2plY3Rob2xkZWQge1xuICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNDMEI1REM7ICAqL1xuICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggI0MwQjVEQ1xufVxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLk5ld3Byb2plY3RSZWplY3RlZCB7XG4gIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0MwQjVEQzsgICovXG4gIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjQzBCNURDXG59XG5cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZSAucGxpc3QtZGV0YWlscyB0ci5Ib2xkdW5kZXJBcHAge1xuICAvKiBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhODUwOTg7ICAqL1xuICBib3gtc2hhZG93OiAtNXB4IDBweCAxcHggI2E4NTA5OFxufVxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlIC5wbGlzdC1kZXRhaWxzIHRyLkRlYWRsaW5lRXh0ZW5kZWR7XG4gIC8qIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0UwQjFENzsgICovXG4gIGJveC1zaGFkb3c6IC01cHggMHB4IDFweCAjRTBCMUQ3XG59XG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGUgLnBsaXN0LWRldGFpbHMgdHIuRW5hY3RpdmVVbmRlckFwcHtcbiAgLyogYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRTBCMUQ3OyAgKi9cbiAgYm94LXNoYWRvdzogLTVweCAwcHggMXB4ICNFMEIxRDdcbn1cbi5kZWxheURheXN7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsgZyBbZmlsbF0ge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuOTMsIDAuMzUsIDEsIDEpO1xuICBmaWxsOiAjNUU1RjYzO1xufVxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUgLmt0LWluYm94X19uYXYgLmt0LW5hdiAua3QtbmF2X19pdGVtIC5rdC1uYXZfX2xpbmsge1xuICBwYWRkaW5nOiAwLjJyZW0gMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLm1haWwtZHJvcGRvd24ge1xuICB3aWR0aDogODAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5tYWlsLWRyb3Bkb3duIHRhYmxlIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5rdC1xdWljay1wYW5lbCAua3QtcG9ydGxldC5rdC1wb3J0bGV0LS1oZWFkLWxnIC5rdC1wb3J0bGV0X19oZWFkIHtcbiAgbWluLWhlaWdodDogNjBweDtcbn1cbi5rdC1pbmJveF9faWNvbiAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1tZW51LXNtIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLmRyb3Bkb3duLXJlcGx5IHVsIGxpIGEgLmt0LW5hdl9fbGluay1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG59XG4ua3QtaW5ib3ggLmt0LWluYm94X19mb3JtIC5rdC1pbmJveF9fYm9keSAua3QtaW5ib3hfX3RvIC5rdC1pbmJveF9fZmllbGQgLmt0LWluYm94X19sYWJlbCB7XG4gIHdpZHRoOiA2MHB4O1xufVxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9faW5wdXQgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5rdC1uYXZfX2xpbmstbm9ob3Zlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogYXV0bztcbn1cbi5rdC1uYXZfX2xpbmstdGV4dDpob3ZlciB7XG4gIGNvbG9yOiAjNzQ3ODhEICFpbXBvcnRhbnQ7XG59XG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0ua3QtbmF2X19pdGVtLS1hY3RpdmU+Lmt0LW5hdl9fbGluayxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTAwLCAxNDIsIDAuMik7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay10ZXh0LFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay10ZXh0LFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay10ZXh0LFxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93IHtcbiAgY29sb3I6ICMzMzM7XG59XG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLXVuaWZpZWQtYnJhbmQge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZDogcmdiKDE5NSwgMTk1LCAxOTUpO1xufVxuLyogLmluYm94LXRleHQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogNjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSAqL1xuLmt0LXF1aWNrLXBhbmVsMiB7XG4gIHdpZHRoOiA2NTBweCAhaW1wb3J0YW50O1xufVxuLmt0LXF1aWNrLXBhbmVsLS1yaWdodCAua3QtcXVpY2stcGFuZWwge1xuICByaWdodDogLTY2MHB4O1xuICBsZWZ0OiBhdXRvO1xufVxuLyogd2lkdGggKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XG59XG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU1NTtcbn1cbi8qIC5zb21lY2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGRpc3BsYXk6IG5vbmU7XG59ICovXG4vKiA6aG9zdCguc29tZUNsYXNzKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0gKi9cbi5rdC1pbmJveCAua3QtaW5ib3hfX2ljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG59XG5cbi5jaGF0Y291bnQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLmt0LWJhZGdlLmt0LWJhZGdlLS1kYXJrIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQ6ICM4QzhEOTI7XG59XG4ua3QtaW5ib3ggLmt0LWluYm94X19hc2lkZSAua3QtaW5ib3hfX25hdiAua3QtbmF2IC5rdC1uYXZfX2l0ZW0gLmt0LW5hdl9fbGluayBnIFtmaWxsXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XG4gIHRyYW5zaXRpb246IGZpbGwgMC4zcyBjdWJpYy1iZXppZXIoMC45MywgMC4zNSwgMSwgMSk7XG4gIGZpbGw6ICM1RTVGNjM7XG59XG4ua3QtaW5ib3ggLmt0LWluYm94X19hc2lkZSAua3QtaW5ib3hfX25hdiAua3QtbmF2IC5rdC1uYXZfX2l0ZW0gLmt0LW5hdl9fbGluayB7XG4gIHBhZGRpbmc6IDAuMnJlbSAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ua3QtZm9udC1SZXBseVJlcXVpcmVkIHtcbiAgY29sb3I6ICNhNmMgIWltcG9ydGFudDtcbn1cbi5tYWlsLWRyb3Bkb3duIHtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ubWFpbC1kcm9wZG93biB0YWJsZSB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4ua3QtcXVpY2stcGFuZWwgLmt0LXBvcnRsZXQua3QtcG9ydGxldC0taGVhZC1sZyAua3QtcG9ydGxldF9faGVhZCB7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG59XG4ua3QtaW5ib3hfX2ljb24gLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVudS1zbSB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5kcm9wZG93bi1yZXBseSB1bCBsaSBhIC5rdC1uYXZfX2xpbmstaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLmt0LWluYm94IC5rdC1pbmJveF9fZm9ybSAua3QtaW5ib3hfX2JvZHkgLmt0LWluYm94X190byAua3QtaW5ib3hfX2ZpZWxkIC5rdC1pbmJveF9fbGFiZWwge1xuICB3aWR0aDogNjBweDtcbn1cbi5rdC1pbmJveCAua3QtaW5ib3hfX2Zvcm0gLmt0LWluYm94X19ib2R5IC5rdC1pbmJveF9fdG8gLmt0LWluYm94X19maWVsZCAua3QtaW5ib3hfX2lucHV0IGlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ua3QtbmF2X19saW5rLW5vaG92ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzc0Nzg4RCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IGF1dG87XG59XG4ua3QtbmF2X19saW5rLXRleHQ6aG92ZXIge1xuICBjb2xvcjogIzc0Nzg4RCAhaW1wb3J0YW50O1xufVxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmt0LW5hdl9faXRlbS0tYWN0aXZlPi5rdC1uYXZfX2xpbmssXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmssXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTQsIDEwMCwgMTQyLCAwLjIpO1xuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstaWNvbixcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5rdC1uYXZfX2l0ZW0tLWFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstYXJyb3csXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW0uYWN0aXZlPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1pY29uLFxuLmt0LW5hdiAua3QtbmF2X19pdGVtLmFjdGl2ZT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbS5hY3RpdmU+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWFycm93LFxuLmt0LW5hdiAua3QtbmF2X19pdGVtOmhvdmVyOm5vdCgua3QtbmF2X19pdGVtLS1kaXNhYmxlZCk6bm90KC5rdC1uYXZfX2l0ZW0tLXN1Yik+Lmt0LW5hdl9fbGluayAua3QtbmF2X19saW5rLWljb24sXG4ua3QtbmF2IC5rdC1uYXZfX2l0ZW06aG92ZXI6bm90KC5rdC1uYXZfX2l0ZW0tLWRpc2FibGVkKTpub3QoLmt0LW5hdl9faXRlbS0tc3ViKT4ua3QtbmF2X19saW5rIC5rdC1uYXZfX2xpbmstdGV4dCxcbi5rdC1uYXYgLmt0LW5hdl9faXRlbTpob3Zlcjpub3QoLmt0LW5hdl9faXRlbS0tZGlzYWJsZWQpOm5vdCgua3QtbmF2X19pdGVtLS1zdWIpPi5rdC1uYXZfX2xpbmsgLmt0LW5hdl9fbGluay1hcnJvdyB7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmt0LWJhZGdlLmt0LWJhZGdlLS11bmlmaWVkLWJyYW5kIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQ6IHJnYigxOTUsIDE5NSwgMTk1KTtcbn1cbi8qIC5pbmJveC10ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDYwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0gKi9cbi5rdC1xdWljay1wYW5lbDIge1xuICB3aWR0aDogNjUwcHggIWltcG9ydGFudDtcbn1cbi5rdC1xdWljay1wYW5lbC0tcmlnaHQgLmt0LXF1aWNrLXBhbmVsIHtcbiAgcmlnaHQ6IC02NjBweDtcbiAgbGVmdDogYXV0bztcbn1cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xufVxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1NTU7XG59XG4vKiAuc29tZWNsYXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBkaXNwbGF5OiBub25lO1xufSAqL1xuLyogOmhvc3QoLnNvbWVDbGFzcykge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59ICovXG4ua3QtaW5ib3ggLmt0LWluYm94X19pY29uIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ua3QtYmFkZ2Uua3QtYmFkZ2UtLWlubGluZSB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDAuMTVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLmt0LWluYm94IC5rdC1pbmJveF9fYXNpZGUge1xuICBwYWRkaW5nOiAxN3B4O1xuICB3aWR0aDogMjQzcHg7XG59XG4vKiBTdGF0dXMgQ29sb3JzICovXG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3dhcm5pbmd7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2ZmYjgyMiAhaW1wb3J0YW50O1xufVxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9wcmltYXJ5e1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM5NWJlZDkgIWltcG9ydGFudDtcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfc3VjY2Vzc3tcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOTViZWQ5ICFpbXBvcnRhbnQ7XG59XG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX0RhbmdlcntcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjRjU4QThCICFpbXBvcnRhbnQ7XG59XG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX2hvbGR7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2MwYjVkYyAhaW1wb3J0YW50O1xufVxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9yZWplY3RlZHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjVjMjkzICFpbXBvcnRhbnQ7XG59XG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX3VuZGVyQXBwcm92YWxze1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNCRDgzOEMgIWltcG9ydGFudDtcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfZm9yd2FyZFVuZGVyQXBwcm92YWx7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0UwQjFENyAhaW1wb3J0YW50O1xufVxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9jb21wbGV0ZVVuZGVyQXBwcm92YWx7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4YzdiZiAhaW1wb3J0YW50O1xufVxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9wcm9qZWN0SG9sZHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQzBCNURDICFpbXBvcnRhbnQ7XG59XG4uUmVwbGllZF9ib3JkZXJfbGVmdF90cnVlX05ld1Byb2plY3R7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzAwN2JmZiAhaW1wb3J0YW50O1xufVxuLlJlcGxpZWRfYm9yZGVyX2xlZnRfdHJ1ZV9EZWFkbGluZUV4dGVuZGVke1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFMEIxRDcgIWltcG9ydGFudDtcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfSG9sZHVuZGVyQXBwe1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhODUwOTggIWltcG9ydGFudDtcbn1cbi5SZXBsaWVkX2JvcmRlcl9sZWZ0X3RydWVfTmV3VG9Eb3tcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNTA4OGE4ICFpbXBvcnRhbnQ7XG59XG4ua3QtaW5ib3ggLmt0LWluYm94X19saXN0IHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLmt0LXBvcnRsZXQuY3VzLXBvcnRsZXQge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5tdC0tMjBweCB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cbi5wcm8tbm17XG5jb2xvcjogIzJjMzE0ODtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbn1cbmJvZHl7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5rdC1wb3J0bGV0LmN1cy1wb3J0bGV0IC5rdC1wb3J0bGV0X19oZWFkIHtcbiAgbWluLWhlaWdodDogdW5zZXQ7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uaWNvbnMtZmlsdGVyIC5rdC10b2RvX19pY29ue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogMTVweCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAyO1xufVxuLmljb25zLWZpbHRlciAua3QtdG9kb19faWNvbiBzcGFue1xuICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzI3ODZmYjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI3ODZmYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTExcHg7XG4gIHJpZ2h0OiAtMTFweDtcbiAgei1pbmRleDogMztcbn1cbi8qIC5pY29ucy1maWx0ZXIgLmt0LXRvZG9fX2ljb246aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3M2ExZjcgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudFxufSAqL1xuLyogLmljb25zLWZpbHRlciAua3QtdG9kb19faWNvbjpob3ZlciBzcGFue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAxMzQsIDI1MSwgMSkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudFxufSAqL1xuXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGV7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubXVsdGlzZWxlY3QtZHJvcGRvd25bX25nY29udGVudC11bmotYzQwXSAuZHJvcGRvd24tYnRuW19uZ2NvbnRlbnQtdW5qLWM0MF17XG4gIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xufVxuXG4vKiA9PT0gU2lkZWJhciA9PT0gKi9cbi5zaWRlSW5mb2JhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYjNiY2ZmO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIC8qIHBhZGRpbmctdG9wOiA2MHB4OyAqL1xufVxuLnNpZGVJbmZvYmFyIC5rdC1wb3J0bGV0X19oZWFke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZjO1xufVxuXG4uc2lkZUluZm9iYXIgLmNsb3NlYnRuIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRjb2xvcjogIzMzMztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uaW5mby1pY29uLWNpcntcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzU4NjdkZDtcbn1cblxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVte1xuICBib3JkZXItYm90dG9tOiAwLjA3cmVtIGRhc2hlZCAjZGVkZWRlO1xuICBwYWRkaW5nOiA2cHg7XG59XG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW0uZGFya3tcbiAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBkYXNoZWQgcmdiYSgwLDAsMCwwLjMpO1xufVxuXG4ua3QtaW5ib3hfX2RhdGV0aW1le1xuICBmb250LXNpemU6IDEzLjVweCAhaW1wb3J0YW50O1xufVxuXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW0gLmt0LXdpZGdldDFfX2luZm8gLmt0LXdpZGdldDFfX3RpdGxle1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnNpZGVJbmZvYmFyIC50aXRsZS1zaWRlYmFye1xuICB3aWR0aDogMjcwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uY291bnQtaGVpZ2h0e1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLyogLmNvdW50LWhlaWdodCAuanVzdGlmeS1jb250ZW50LWJldHdlZW57XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xufSAqL1xuLmNvdW50LWhlaWdodCAuanVzdGlmeS1jb250ZW50LWJldHdlZW4gLmt0LWNoZWNrYm94e1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuXG4vKiB3aWR0aCAqL1xuLmNvdW50LWhlaWdodDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogM3B4O1xufVxuXG4vKiBUcmFjayAqL1xuLmNvdW50LWhlaWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBIYW5kbGUgKi9cbi5jb3VudC1oZWlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG4uY291bnQtaGVpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG59XG5cbi5kcm9wZG93biAua3QtY2hlY2tib3ggPiBpbnB1dDpjaGVja2VkIH4gc3BhbntcbiAgYm9yZGVyLWNvbG9yOiAjMDA3M2U2O1xufVxuLmt0LWNoZWNrYm94ID4gc3BhbjphZnRlciB7XG4gIGJvcmRlcjogc29saWQgIzAwNzNlNjtcbn1cblxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24ge1xuICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG59XG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lOyAqL1xuICAgIHRvcDogMjBweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IC0yMnB4ICFpbXBvcnRhbnQ7XG59XG4uc3RvcmVzLXNlYyAubWVnYS1kcm9wZG93bi1tZW51OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJpZ2h0OiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNXB4O1xuICBsZWZ0OiAzMnB4O1xuICB6LWluZGV4OiAxMDtcbn1cbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yaWdodDogMTlweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDE5cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTdweDtcbiAgbGVmdDogMzBweDtcbiAgei1pbmRleDogODtcbn1cblxuLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudTEgLmZpbHRlci1ib3h7XG4gIHdpZHRoOiAzMy4zMzMzJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jcHJvamVjdC00IHRoZWFkIHRyIHRoOm50aC1jaGlsZCgxKSwgI3Byb2plY3QtNCB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoMSl7XG4gIHdpZHRoOiAzJTtcbn1cbiNwcm9qZWN0LTQgdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDIpLCAjcHJvamVjdC00IHRib2R5IHRyIHRkOm50aC1jaGlsZCgyKXtcbiAgd2lkdGg6IDQlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMyksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDMpe1xuICB3aWR0aDogMzMlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNCksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDQpe1xuICB3aWR0aDogMTAlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNSksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDUpe1xuICB3aWR0aDogMTAlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNiksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDYpe1xuICB3aWR0aDogMTUlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNyksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDcpe1xuICB3aWR0aDogMTAlO1xufVxuI3Byb2plY3QtNCB0aGVhZCB0ciB0aDpudGgtY2hpbGQoOCksICNwcm9qZWN0LTQgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDgpe1xuICB3aWR0aDogMTUlO1xufVxuXG4ua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHQsIC5rdC1xdWljay1zZWFyY2ggLmt0LXF1aWNrLXNlYXJjaF9fZm9ybSAuaW5wdXQtZ3JvdXAtYXBwZW5kIC5pbnB1dC1ncm91cC10ZXh0e1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2ZmOyAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3Vwe1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkYmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zaG93X2VudHJpZXMgc3BhbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiBcbn1cbi5zaG93X2VudHJpZXMgc2VsZWN0e1xuICAvKiB3aWR0aDogMTAwcHg7ICovXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoODgsIDEwMywgMjIxLCAwLjMpO1xuICBjb2xvcjogIzU4NjdkZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb3VudC1idG57XG4gIC8qIGhlaWdodDogMjVweDsgKi9cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDsgKi9cbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiByZ2IoODgsIDg4LCA4OCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG4vKiBTZWFyY2ggUHJvamVjdHMgKi9cbi5rdC1pbmJveCAua3QtaW5ib3hfX3Rvb2xiYXIgLmt0LWluYm94X19zZWFyY2ggLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNztcbn1cbi5pbnB1dC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnUtbWQuYmctZ3JvdW5kLCAuZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQtc2hvcnR7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNlMmU5ZmY7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAyNXZ3O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkYmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZCAuZm9ybS1jb250cm9sLCAuZHJvcGRvd24tbWVudS1tZC5iZy1ncm91bmQtc2hvcnQgLmZvcm0tY29udHJvbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcbn1cblxuLyogLmt0LXRvZG9fX2RldGFpbHMgLmt0LXRvZG9fX2ljb24uYWN0aXZlICAqL1xuXG4vKiAudmFsaW5vb3J7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi52YWxpbm9vcjo6YmVmb3Jle1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59ICovXG4ua3QtaW5ib3hfX2l0ZW1zIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEyNXB4KTtcbn1cbi5rdC1pbmJveCAua3QtaW5ib3hfX2xpc3QgLmt0LWluYm94X19pdGVtcyAua3QtaW5ib3hfX2l0ZW17XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kZWxldGUtYnRue1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICByaWdodDogMHB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGxpbmUtaGVpZ2h0OiA1OXB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAhaW1wb3J0YW50O1xufVxuLmRlbGV0ZS1idG4gaXtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYztcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYmNmZjtcbiAgY29sb3I6ICM1ODY3ZGQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDhweCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLyogLmRlbGV0ZS1idG4gaXtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjc7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZSAhaW1wb3J0YW50O1xufSovXG4uYnRuLXNlY29uZGFyeS50aGVtZS1idG57XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODY3ZGQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi5idG4tbGFiZWwtcHJpbWFyeXtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM2OTlGRjtcbn1cblxuLmRlbGV0ZS1idG4gaTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg2N2RkO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmt0LWluYm94X19pdGVtOmhvdmVyIC5kZWxldGUtYnRue1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1vZGFsLWJvZHkubWluLXNjcm9sbHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuLm1vZGFsLWJvZHkubWluLXNjcm9sbDpob3ZlcntcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ubW9kYWwtYm9keS5taW4tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi5tb2RhbC1ib2R5Lm1pbi1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLm1vZGFsLWJvZHkubWluLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjNTg2N2RkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5tb2RhbC1ib2R5Lm1pbi1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2IzYmNmZjtcbn1cbi5rdC1pbmJveF9fZGV0YWlsc3tcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb250LTE2e1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cbi8qIE5ldyBEZXNpZ24gT0YgU2lkZSBCYXIgKi9cbi5uYW1lLWJveHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDlweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NjdkZDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubmFtZXMtcmVzcG9uc2V7XG4gIGRpc3BsYXkgOmlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm5hbWVzLXJlc3BvbnNlIHNwYW46Zmlyc3QtY2hpbGR7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubmFtZXMtcmVzcG9uc2Ugc3BhbjpsYXN0LWNoaWxke1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaGVhZC1idG57XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDEwMywgMjIxLCAwLjEpO1xuICAgIHBhZGRpbmc6IDNweCAxMHB4IDNweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiY2ZmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmhlYWQtYnRuIGl7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJhY2tncm91bmQ6ICM1ODY3ZGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuLmRldmlkZXJ7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cblxuLnByaWNldmFsdWVzIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjFmMWYxO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbn1cblxuLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgxKSwgLnRvcC1ib3JkZXIgLnByaWNldmFsdWVzOm50aC1jaGlsZCgyKSAge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjFmMTtcbn1cbi50b3AtYm9yZGVyIC5wcmljZXZhbHVlczpudGgtY2hpbGQoMyksIC50b3AtYm9yZGVyIC5wcmljZXZhbHVlczpudGgtY2hpbGQoNCkgIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZVxufVxuXG4ucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDIpLCAucHJpY2V2YWx1ZXM6bnRoLWNoaWxkKDQpIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG5cblxuLmRtcy1saW5rc3tcbiAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xufVxuXG4uZG1zLWxpbmtzIGxpIGF7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ucHktMTBweHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4vKiBQcm9ncmVzcyBCYXIgKi9cbi5wcm9ncmVzc19iYXIgLnByby1iYXIge1xuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDk3JSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCBoc2xhKDAsIDAlLCAwJSwgMC4xKSBpbnNldDtcbiAgaGVpZ2h0OiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfYmFyX3RpdGxlIHtcbiAgY29sb3I6IGhzbCgyMTgsIDQlLCA1MCUpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjhweDtcbiAgei1pbmRleDogMTtcbn1cblxuLnByb2dyZXNzX2JhciAucHJvZ3Jlc3NfbnVtYmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg4JSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgbGluZWFyIDBzO1xufVxuXG4ucHJvZ3Jlc3NfYmFyIC5wcm9ncmVzcy1iYXItaW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMXB4O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5wcm9ncmVzc19iYXIgLnByb2dyZXNzLWJhci1pbm5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTRweDtcbiAgdG9wOiAtNXB4O1xufVxuXG4uYmctdG9kYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQyYmYwICFpbXBvcnRhbnQ7XG59XG4uYnJkci01e1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qIHBhZ2VuYXRpb24gKi9cbmxhYmVsLnBhZ2UtbnVtIHtcbiAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3ODZmYiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMyNzg2ZmIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMC42NXJlbSAwLjg1cmVtO1xuICBmb250LXNpemU6IDAuOTI1cmVtO1xuICBsaW5lLWhlaWdodDogMS4zNTtcbiAgbWFyZ2luOiAwcHggM3B4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYnRuLmJ0bi1sYWJlbC1pbmZvIGl7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuICAuYnRuLmJ0bi1sYWJlbC1pbmZvIHtcbiAgY29sb3I6ICMyNzg2ZmI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMUYwRkY7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNzg2ZmI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cbi8qIC5wb3J0Zm9saW8tc2VhcmNoe1xuICB3aWR0aDogMzBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3NlYXJjaGljb24ucG5nJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjsgXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBhZGRpbmc6IDEycHggMHB4IDEycHggMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5wb3J0Zm9saW8tc2VhcmNoOmZvY3VzIHtcbiAgd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOGE4ODg4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufSAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kcm9wZG93bi1tZW51LW1kLmJnLWdyb3VuZHtcbiAgICB3aWR0aDogODB2dztcbiAgfVxufVxuXG5cblxuIl19 */"] });


/***/ }),

/***/ 45671:
/*!******************************************************!*\
  !*** ./src/app/_LayoutDashboard/home/home.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 59112);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 85694);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/material-module */ 48696);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);





//import { SortDirective } from 'src/app/Directive/sort.directive';




//import { Ng2OrderModule } from 'ng2-order-pipe';
//import { DateFormatPipePipe } from 'src/app/Shared/date-format-pipe.pipe';
//import { GrdFilterPipePipe } from 'src/app/Shared/Filter/grd-filter-pipe.pipe';


//import {FilterPipeSearchPipe  } from "src/app/Shared/filter-pipe-search.pipe";
//import { SortDirective } from './sort.directive';
class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__.NgMultiSelectDropDownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
        //Ng2OrderModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__.NgMultiSelectDropDownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
        //Ng2OrderModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule] }); })();


/***/ }),

/***/ 44316:
/*!********************************************!*\
  !*** ./src/app/_Models/attachments-dto.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachmentsDTO": () => (/* binding */ AttachmentsDTO)
/* harmony export */ });
class AttachmentsDTO {
}


/***/ }),

/***/ 26399:
/*!*************************************!*\
  !*** ./src/app/_Models/link-dto.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkDTO": () => (/* binding */ LinkDTO)
/* harmony export */ });
class LinkDTO {
}


/***/ }),

/***/ 33529:
/*!*******************************************!*\
  !*** ./src/app/_Services/link.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkService": () => (/* binding */ LinkService)
/* harmony export */ });
/* harmony import */ var _Models_link_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_Models/link-dto */ 26399);
/* harmony import */ var _Models_attachments_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_Models/attachments-dto */ 44316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _apiurl_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiurl.service */ 77983);





class LinkService {
    constructor(http, commonUrl) {
        this.http = http;
        this.commonUrl = commonUrl;
        this.DMS_URL = "https://cswebapps.com/dmsapi/api/";
        //readonly DMS_URL = sessionStorage.getItem("_AppUrl");
        //EP Common URL
        this.rootUrl = this.commonUrl.apiurl;
        this.ObjLinkDTO = new _Models_link_dto__WEBPACK_IMPORTED_MODULE_0__.LinkDTO();
        this.ObjAttachmentsDTO = new _Models_attachments_dto__WEBPACK_IMPORTED_MODULE_1__.AttachmentsDTO();
    }
    GetApplicationDetails() {
        return this.http.post(this.rootUrl + "ApplicationLinkAPI/NewGetApplication_Details", this.ObjLinkDTO);
    }
    GetMemosByEmployeeCode(CurrentUser) {
        this.ObjLinkDTO.EmployeeCode = CurrentUser;
        return this.http.post(this.DMS_URL + "LatestCommunicationAPI/NewGetMemosByEmployeeCode", this.ObjLinkDTO);
    }
    InsertMemosOn_ProjectCode(projCode, appId, memoId, UserId) {
        // console.log("In Service ---->",projCode,appId,memoId,UserId);
        this.ObjLinkDTO.Project_Code = projCode;
        this.ObjLinkDTO.Application_Id = appId;
        this.ObjLinkDTO.JsonData = memoId;
        this.ObjLinkDTO.Created_By = UserId;
        // console.log("Details Parameters--->",projCode,appId,memoId,UserId);
        return this.http.post(this.rootUrl + "ApplicationLinkAPI/NewInsertMemobyProjectCode", this.ObjLinkDTO);
    }
    _GetOnlyMemoIdsByProjectCode(projectCode) {
        this.ObjLinkDTO.Project_Code = projectCode;
        // url console.log(this.rootUrl + "ApplicationLinkAPI/NewGetOnlyMemoIdsByProjectCode",'ggggggggggggggggggg')
        // body console.log(this.ObjLinkDTO,"ggggggggggggggggg")
        return this.http.post(this.rootUrl + "ApplicationLinkAPI/NewGetOnlyMemoIdsByProjectCode", this.ObjLinkDTO);
    }
    _GetMemosSubject(JsonString) {
        //console.log("Sending JsonFormat----->",JsonString);
        this.ObjLinkDTO.MemosJSON = JsonString;
        // console.log("ObjLinkDTO----->",this.ObjLinkDTO);
        //let Url="https://cswebapps.com/dmsapi/api/LatestCommunicationAPI/NewGetMemosSubject"
        return this.http.post(this.DMS_URL + "LatestCommunicationAPI/NewGetMemosSubject", this.ObjLinkDTO);
    }
    _GetAttachments(EmpNo, ProjCode, ProjBlock) {
        this.ObjAttachmentsDTO.EmpNo = EmpNo;
        this.ObjAttachmentsDTO.ProjectCode = ProjCode;
        this.ObjAttachmentsDTO.ProjectType = ProjBlock;
        return this.http.post(this.rootUrl + "Notification/NewGetAttachmentsFiles", this.ObjAttachmentsDTO);
    }
    /////////////////// by 69 Start /////////////////////
    GetAttachements(EmpNo, ProjCode, sorttype) {
        this.ObjAttachmentsDTO.EmpNo = EmpNo;
        this.ObjAttachmentsDTO.ProjectCode = ProjCode;
        this.ObjAttachmentsDTO.sorttype = sorttype;
        return this.http.post(this.rootUrl + "Notification/NewGetProjectFiles", this.ObjAttachmentsDTO);
    }
}
LinkService.ɵfac = function LinkService_Factory(t) { return new (t || LinkService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_apiurl_service__WEBPACK_IMPORTED_MODULE_2__.ApiurlService)); };
LinkService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LinkService, factory: LinkService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=671.js.map