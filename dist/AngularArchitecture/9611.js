(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([[9611],{

/***/ 84956:
/*!***********************************!*\
  !*** ./src/app/Directive/sort.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sort": () => (/* binding */ Sort)
/* harmony export */ });
class Sort {
    constructor() {
        this.sortOrder = 1;
        this.collator = new Intl.Collator(undefined, {
            numeric: true,
            sensitivity: "base",
        });
    }
    startSort(property, order, type = "") {
        if (order === "desc") {
            this.sortOrder = -1;
        }
        return (a, b) => {
            if (type === "date") {
                return this.sortData(new Date(a[property]), new Date(b[property]));
            }
            else {
                return this.collator.compare(a[property], b[property]) * this.sortOrder;
            }
        };
    }
    sortData(a, b) {
        if (a < b) {
            return -1 * this.sortOrder;
        }
        else if (a > b) {
            return 1 * this.sortOrder;
        }
        else {
            return 0 * this.sortOrder;
        }
    }
}


/***/ }),

/***/ 95642:
/*!**************************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/projects-summary/projects-summary-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsSummaryRoutingModule": () => (/* binding */ ProjectsSummaryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _projects_summary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-summary.component */ 80880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);

//import { ProjectInfoComponent } from '../project-info/project-info.component';



const routes = [{
        path: '', component: _projects_summary_component__WEBPACK_IMPORTED_MODULE_0__.ProjectsSummaryComponent,
        children: [
            {
                path: 'projectinfo/:projectcode/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1649), __webpack_require__.e(4116), __webpack_require__.e(598), __webpack_require__.e(1784), __webpack_require__.e(476), __webpack_require__.e(7668), __webpack_require__.e(2352), __webpack_require__.e(2669)]).then(__webpack_require__.bind(__webpack_require__, /*! ../project-info/project-info.module */ 71784)).then(m => m.ProjectInfoModule)
            }
        ]
    }];
class ProjectsSummaryRoutingModule {
}
ProjectsSummaryRoutingModule.ɵfac = function ProjectsSummaryRoutingModule_Factory(t) { return new (t || ProjectsSummaryRoutingModule)(); };
ProjectsSummaryRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProjectsSummaryRoutingModule });
ProjectsSummaryRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProjectsSummaryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 75852:
/*!******************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/projects-summary/projects-summary.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsSummaryModule": () => (/* binding */ ProjectsSummaryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _projects_summary_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-summary-routing.module */ 95642);
/* harmony import */ var _projects_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-summary.component */ 80880);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/material-module */ 48696);
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-ng-autocomplete */ 93196);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-multiselect-dropdown */ 61664);
/* harmony import */ var src_app_Shared_DateAgo_DateAgoPipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/DateAgo/DateAgoPipe */ 81802);
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-virtual-scroller */ 56443);
/* harmony import */ var _sort_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sort.directive */ 67848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);













//import { ProjectInfoComponent } from '../project-info/project-info.component';
class ProjectsSummaryModule {
}
ProjectsSummaryModule.ɵfac = function ProjectsSummaryModule_Factory(t) { return new (t || ProjectsSummaryModule)(); };
ProjectsSummaryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ProjectsSummaryModule });
ProjectsSummaryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _projects_summary_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectsSummaryRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_10__.AutocompleteLibModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__.NgMultiSelectDropDownModule,
        ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_5__.VirtualScrollerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ProjectsSummaryModule, { declarations: [_projects_summary_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsSummaryComponent,
        src_app_Shared_DateAgo_DateAgoPipe__WEBPACK_IMPORTED_MODULE_4__.DateAgoPipe,
        _sort_directive__WEBPACK_IMPORTED_MODULE_6__.SortDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _projects_summary_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectsSummaryRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_10__.AutocompleteLibModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule,
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__.NgMultiSelectDropDownModule,
        ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_5__.VirtualScrollerModule], exports: [_sort_directive__WEBPACK_IMPORTED_MODULE_6__.SortDirective] }); })();


/***/ }),

/***/ 67848:
/*!*********************************************************************!*\
  !*** ./src/app/_LayoutDashboard/projects-summary/sort.directive.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortDirective": () => (/* binding */ SortDirective)
/* harmony export */ });
/* harmony import */ var src_app_Directive_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Directive/sort */ 84956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



//import { Directive } from '@angular/core';
class SortDirective {
    constructor(renderer, targetElem) {
        this.renderer = renderer;
        this.targetElem = targetElem;
    }
    sortData() {
        // Create Object of Sort Class
        const sort = new src_app_Directive_sort__WEBPACK_IMPORTED_MODULE_0__.Sort();
        // Get Reference Of Current Clicked Element
        const elem = this.targetElem.nativeElement;
        // Get In WHich Order list should be sorted by default it should be set to desc on element attribute
        const order = elem.getAttribute("data-order");
        // Get The Property Type specially set [data-type=date] if it is date field
        const type = elem.getAttribute("data-type");
        // Get The Property Name from Element Attribute
        const property = elem.getAttribute("data-name");
        if (order === "desc") {
            this.appSort.sort(sort.startSort(property, order, type));
            elem.setAttribute("data-order", "asc");
        }
        else {
            this.appSort.sort(sort.startSort(property, order, type));
            elem.setAttribute("data-order", "desc");
        }
    }
}
SortDirective.ɵfac = function SortDirective_Factory(t) { return new (t || SortDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
SortDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: SortDirective, selectors: [["", "appSort", ""]], hostBindings: function SortDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SortDirective_click_HostBindingHandler() { return ctx.sortData(); });
    } }, inputs: { appSort: "appSort" } });


/***/ }),

/***/ 62424:
/*!*****************************************!*\
  !*** ./src/app/_Models/approval-dto.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalDTO": () => (/* binding */ ApprovalDTO)
/* harmony export */ });
class ApprovalDTO {
}


/***/ }),

/***/ 18810:
/*!************************************************!*\
  !*** ./src/app/_Services/approvals.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalsService": () => (/* binding */ ApprovalsService)
/* harmony export */ });
/* harmony import */ var _Models_approval_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_Models/approval-dto */ 62424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _apiurl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiurl.service */ 77983);




class ApprovalsService {
    constructor(http, commonUrl) {
        this.http = http;
        this.commonUrl = commonUrl;
        this.rootUrl = this.commonUrl.apiurl;
        this.obj_approvalDTO = new _Models_approval_dto__WEBPACK_IMPORTED_MODULE_0__.ApprovalDTO();
    }
    GetApprovalStatus(obj) {
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewGetApprovalStatus", this.obj_approvalDTO);
    }
    GetAppovalandActionDetails(obj) {
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewGetAppovalandActionDetails", this.obj_approvalDTO);
    }
    GetGlobalRejectList(pcode) {
        this.obj_approvalDTO.Project_Code = "";
        return this.http.post(this.rootUrl + "ApprovalAPI/NewGetGlobalRejectList", this.obj_approvalDTO);
    }
    GetHoldDate(obj) {
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewGetHoldDate", this.obj_approvalDTO);
    }
    GetRejecttype(obj) {
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewGetRejectType", this.obj_approvalDTO);
    }
    UpdateReleaseDate(obj) {
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.hold_date = obj.hold_date;
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewUpdateReleasedate", this.obj_approvalDTO);
    }
    NewResponseService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Request_Date = obj.Request_Date;
        this.obj_approvalDTO.Request_type = obj.Request_type;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewResponseServiceforApprovals", this.obj_approvalDTO);
    }
    NewMultiResponseService(obj) {
        this.obj_approvalDTO.responselist = obj.responselist;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewMultiResponseforApprovals", this.obj_approvalDTO);
    }
    NewUpdateAcceptApprovalsService(obj) {
        return this.http.post(this.rootUrl + "ApprovalAPI/UpdateAcceptApprovals", obj);
    }
    NewUpdateRejectApprovalsService(obj) {
        return this.http.post(this.rootUrl + "ApprovalAPI/UpdateRejectApprovals", obj);
    }
    NewUpdateSingleAcceptApprovalsService(obj) {
        return this.http.post(this.rootUrl + "ApprovalAPI/UpdateSingleAcceptApproval", obj);
    }
    NewUpdateSingleRejectApprovalsService(obj) {
        return this.http.post(this.rootUrl + "ApprovalAPI/UpdateSingleRejectApprovals", obj);
    }
    GetRejectComments(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.rejectType = obj.rejectType;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Status = obj.Status;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewGetRejectCommentsbyRejectType", this.obj_approvalDTO);
    }
    GetGlobalRejectComments(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.rejectType = obj.rejectType;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Status = obj.Status;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewGetGlobalRejectComments", this.obj_approvalDTO);
    }
    InsertAcceptApprovalService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Request_type = obj.Request_type;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertAcceptApprovalService", this.obj_approvalDTO);
    }
    InsertUpdateProjectCancelReleaseService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Request_type = obj.Request_type;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertUpdateProjectCancelRelease", this.obj_approvalDTO);
    }
    InsertTransferApprovalService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Responsible = obj.Responsible;
        this.obj_approvalDTO.deadline = obj.deadline;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertTransferApprovalService", this.obj_approvalDTO);
    }
    InsertProjectTransfer(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Responsible = obj.Responsible;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertProjectTransfer", this.obj_approvalDTO);
    }
    InsertForwardApprovalService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Responsible = obj.Responsible;
        this.obj_approvalDTO.deadline = obj.deadline;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertForwardApprovalService", this.obj_approvalDTO);
    }
    InsertRevertApprovalService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Responsible = obj.Responsible;
        this.obj_approvalDTO.deadline = obj.deadline;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertRevertApprovalService", this.obj_approvalDTO);
    }
    InsertConditionalAcceptApprovalService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Request_type = obj.Request_type;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertConditionalAcceptApprovalService", this.obj_approvalDTO);
    }
    InsertRejectApprovalService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Request_type = obj.Request_type;
        this.obj_approvalDTO.rejectType = obj.rejectType;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertRejectApprovalsService", this.obj_approvalDTO);
    }
    InsertStandardApprovalService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Request_Date = obj.Request_Date;
        this.obj_approvalDTO.Request_type = obj.Request_type;
        this.obj_approvalDTO.rejectType = obj.rejectType;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        this.obj_approvalDTO.approvaltype = obj.approvaltype;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertStandardApprovals", this.obj_approvalDTO);
    }
}
ApprovalsService.ɵfac = function ApprovalsService_Factory(t) { return new (t || ApprovalsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_apiurl_service__WEBPACK_IMPORTED_MODULE_1__.ApiurlService)); };
ApprovalsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApprovalsService, factory: ApprovalsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 77585:
/*!*************************************************!*\
  !*** ./src/app/_Services/bs-service.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 1387:
/*!*****************************************************!*\
  !*** ./node_modules/@tweenjs/tween.js/src/Tween.js ***!
  \*****************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */
var _Group = function () {
  this._tweens = {};
  this._tweensAddedDuringUpdate = {};
};

_Group.prototype = {
  getAll: function () {
    return Object.keys(this._tweens).map(function (tweenId) {
      return this._tweens[tweenId];
    }.bind(this));
  },
  removeAll: function () {
    this._tweens = {};
  },
  add: function (tween) {
    this._tweens[tween.getId()] = tween;
    this._tweensAddedDuringUpdate[tween.getId()] = tween;
  },
  remove: function (tween) {
    delete this._tweens[tween.getId()];
    delete this._tweensAddedDuringUpdate[tween.getId()];
  },
  update: function (time, preserve) {
    var tweenIds = Object.keys(this._tweens);

    if (tweenIds.length === 0) {
      return false;
    }

    time = time !== undefined ? time : TWEEN.now(); // Tweens are updated in "batches". If you add a new tween during an update, then the
    // new tween will be updated in the next batch.
    // If you remove a tween during an update, it may or may not be updated. However,
    // if the removed tween was added during the current batch, then it will not be updated.

    while (tweenIds.length > 0) {
      this._tweensAddedDuringUpdate = {};

      for (var i = 0; i < tweenIds.length; i++) {
        var tween = this._tweens[tweenIds[i]];

        if (tween && tween.update(time) === false) {
          tween._isPlaying = false;

          if (!preserve) {
            delete this._tweens[tweenIds[i]];
          }
        }
      }

      tweenIds = Object.keys(this._tweensAddedDuringUpdate);
    }

    return true;
  }
};
var TWEEN = new _Group();
TWEEN.Group = _Group;
TWEEN._nextId = 0;

TWEEN.nextId = function () {
  return TWEEN._nextId++;
}; // Include a performance.now polyfill.
// In node.js, use process.hrtime.


if (typeof self === 'undefined' && typeof process !== 'undefined' && process.hrtime) {
  TWEEN.now = function () {
    var time = process.hrtime(); // Convert [seconds, nanoseconds] to milliseconds.

    return time[0] * 1000 + time[1] / 1000000;
  };
} // In a browser, use self.performance.now if it is available.
else if (typeof self !== 'undefined' && self.performance !== undefined && self.performance.now !== undefined) {
  // This must be bound, because directly assigning this function
  // leads to an invocation exception in Chrome.
  TWEEN.now = self.performance.now.bind(self.performance);
} // Use Date.now if it is available.
else if (Date.now !== undefined) {
  TWEEN.now = Date.now;
} // Otherwise, use 'new Date().getTime()'.
else {
  TWEEN.now = function () {
    return new Date().getTime();
  };
}

TWEEN.Tween = function (object, group) {
  this._object = object;
  this._valuesStart = {};
  this._valuesEnd = {};
  this._valuesStartRepeat = {};
  this._duration = 1000;
  this._repeat = 0;
  this._repeatDelayTime = undefined;
  this._yoyo = false;
  this._isPlaying = false;
  this._reversed = false;
  this._delayTime = 0;
  this._startTime = null;
  this._easingFunction = TWEEN.Easing.Linear.None;
  this._interpolationFunction = TWEEN.Interpolation.Linear;
  this._chainedTweens = [];
  this._onStartCallback = null;
  this._onStartCallbackFired = false;
  this._onUpdateCallback = null;
  this._onRepeatCallback = null;
  this._onCompleteCallback = null;
  this._onStopCallback = null;
  this._group = group || TWEEN;
  this._id = TWEEN.nextId();
};

TWEEN.Tween.prototype = {
  getId: function () {
    return this._id;
  },
  isPlaying: function () {
    return this._isPlaying;
  },
  to: function (properties, duration) {
    this._valuesEnd = Object.create(properties);

    if (duration !== undefined) {
      this._duration = duration;
    }

    return this;
  },
  duration: function duration(d) {
    this._duration = d;
    return this;
  },
  start: function (time) {
    this._group.add(this);

    this._isPlaying = true;
    this._onStartCallbackFired = false;
    this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
    this._startTime += this._delayTime;

    for (var property in this._valuesEnd) {
      // Check if an Array was provided as property value
      if (this._valuesEnd[property] instanceof Array) {
        if (this._valuesEnd[property].length === 0) {
          continue;
        } // Create a local copy of the Array with the start value at the front


        this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);
      } // If `to()` specifies a property that doesn't exist in the source object,
      // we should not set that property in the object


      if (this._object[property] === undefined) {
        continue;
      } // Save the starting value.


      this._valuesStart[property] = this._object[property];

      if (this._valuesStart[property] instanceof Array === false) {
        this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
      }

      this._valuesStartRepeat[property] = this._valuesStart[property] || 0;
    }

    return this;
  },
  stop: function () {
    if (!this._isPlaying) {
      return this;
    }

    this._group.remove(this);

    this._isPlaying = false;

    if (this._onStopCallback !== null) {
      this._onStopCallback(this._object);
    }

    this.stopChainedTweens();
    return this;
  },
  end: function () {
    this.update(Infinity);
    return this;
  },
  stopChainedTweens: function () {
    for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
      this._chainedTweens[i].stop();
    }
  },
  group: function (group) {
    this._group = group;
    return this;
  },
  delay: function (amount) {
    this._delayTime = amount;
    return this;
  },
  repeat: function (times) {
    this._repeat = times;
    return this;
  },
  repeatDelay: function (amount) {
    this._repeatDelayTime = amount;
    return this;
  },
  yoyo: function (yoyo) {
    this._yoyo = yoyo;
    return this;
  },
  easing: function (easingFunction) {
    this._easingFunction = easingFunction;
    return this;
  },
  interpolation: function (interpolationFunction) {
    this._interpolationFunction = interpolationFunction;
    return this;
  },
  chain: function () {
    this._chainedTweens = arguments;
    return this;
  },
  onStart: function (callback) {
    this._onStartCallback = callback;
    return this;
  },
  onUpdate: function (callback) {
    this._onUpdateCallback = callback;
    return this;
  },
  onRepeat: function onRepeat(callback) {
    this._onRepeatCallback = callback;
    return this;
  },
  onComplete: function (callback) {
    this._onCompleteCallback = callback;
    return this;
  },
  onStop: function (callback) {
    this._onStopCallback = callback;
    return this;
  },
  update: function (time) {
    var property;
    var elapsed;
    var value;

    if (time < this._startTime) {
      return true;
    }

    if (this._onStartCallbackFired === false) {
      if (this._onStartCallback !== null) {
        this._onStartCallback(this._object);
      }

      this._onStartCallbackFired = true;
    }

    elapsed = (time - this._startTime) / this._duration;
    elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
    value = this._easingFunction(elapsed);

    for (property in this._valuesEnd) {
      // Don't update properties that do not exist in the source object
      if (this._valuesStart[property] === undefined) {
        continue;
      }

      var start = this._valuesStart[property] || 0;
      var end = this._valuesEnd[property];

      if (end instanceof Array) {
        this._object[property] = this._interpolationFunction(end, value);
      } else {
        // Parses relative end values with start as base (e.g.: +10, -3)
        if (typeof end === 'string') {
          if (end.charAt(0) === '+' || end.charAt(0) === '-') {
            end = start + parseFloat(end);
          } else {
            end = parseFloat(end);
          }
        } // Protect against non numeric properties.


        if (typeof end === 'number') {
          this._object[property] = start + (end - start) * value;
        }
      }
    }

    if (this._onUpdateCallback !== null) {
      this._onUpdateCallback(this._object, elapsed);
    }

    if (elapsed === 1) {
      if (this._repeat > 0) {
        if (isFinite(this._repeat)) {
          this._repeat--;
        } // Reassign starting values, restart by making startTime = now


        for (property in this._valuesStartRepeat) {
          if (typeof this._valuesEnd[property] === 'string') {
            this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
          }

          if (this._yoyo) {
            var tmp = this._valuesStartRepeat[property];
            this._valuesStartRepeat[property] = this._valuesEnd[property];
            this._valuesEnd[property] = tmp;
          }

          this._valuesStart[property] = this._valuesStartRepeat[property];
        }

        if (this._yoyo) {
          this._reversed = !this._reversed;
        }

        if (this._repeatDelayTime !== undefined) {
          this._startTime = time + this._repeatDelayTime;
        } else {
          this._startTime = time + this._delayTime;
        }

        if (this._onRepeatCallback !== null) {
          this._onRepeatCallback(this._object);
        }

        return true;
      } else {
        if (this._onCompleteCallback !== null) {
          this._onCompleteCallback(this._object);
        }

        for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
          // Make the chained tweens start exactly at the time they should,
          // even if the `update()` method was called way past the duration of the tween
          this._chainedTweens[i].start(this._startTime + this._duration);
        }

        return false;
      }
    }

    return true;
  }
};
TWEEN.Easing = {
  Linear: {
    None: function (k) {
      return k;
    }
  },
  Quadratic: {
    In: function (k) {
      return k * k;
    },
    Out: function (k) {
      return k * (2 - k);
    },
    InOut: function (k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k;
      }

      return -0.5 * (--k * (k - 2) - 1);
    }
  },
  Cubic: {
    In: function (k) {
      return k * k * k;
    },
    Out: function (k) {
      return --k * k * k + 1;
    },
    InOut: function (k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k;
      }

      return 0.5 * ((k -= 2) * k * k + 2);
    }
  },
  Quartic: {
    In: function (k) {
      return k * k * k * k;
    },
    Out: function (k) {
      return 1 - --k * k * k * k;
    },
    InOut: function (k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k * k;
      }

      return -0.5 * ((k -= 2) * k * k * k - 2);
    }
  },
  Quintic: {
    In: function (k) {
      return k * k * k * k * k;
    },
    Out: function (k) {
      return --k * k * k * k * k + 1;
    },
    InOut: function (k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k * k * k;
      }

      return 0.5 * ((k -= 2) * k * k * k * k + 2);
    }
  },
  Sinusoidal: {
    In: function (k) {
      return 1 - Math.cos(k * Math.PI / 2);
    },
    Out: function (k) {
      return Math.sin(k * Math.PI / 2);
    },
    InOut: function (k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }
  },
  Exponential: {
    In: function (k) {
      return k === 0 ? 0 : Math.pow(1024, k - 1);
    },
    Out: function (k) {
      return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
    },
    InOut: function (k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      if ((k *= 2) < 1) {
        return 0.5 * Math.pow(1024, k - 1);
      }

      return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
    }
  },
  Circular: {
    In: function (k) {
      return 1 - Math.sqrt(1 - k * k);
    },
    Out: function (k) {
      return Math.sqrt(1 - --k * k);
    },
    InOut: function (k) {
      if ((k *= 2) < 1) {
        return -0.5 * (Math.sqrt(1 - k * k) - 1);
      }

      return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
    }
  },
  Elastic: {
    In: function (k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
    },
    Out: function (k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
    },
    InOut: function (k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      k *= 2;

      if (k < 1) {
        return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
      }

      return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
    }
  },
  Back: {
    In: function (k) {
      var s = 1.70158;
      return k * k * ((s + 1) * k - s);
    },
    Out: function (k) {
      var s = 1.70158;
      return --k * k * ((s + 1) * k + s) + 1;
    },
    InOut: function (k) {
      var s = 1.70158 * 1.525;

      if ((k *= 2) < 1) {
        return 0.5 * (k * k * ((s + 1) * k - s));
      }

      return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    }
  },
  Bounce: {
    In: function (k) {
      return 1 - TWEEN.Easing.Bounce.Out(1 - k);
    },
    Out: function (k) {
      if (k < 1 / 2.75) {
        return 7.5625 * k * k;
      } else if (k < 2 / 2.75) {
        return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
      } else if (k < 2.5 / 2.75) {
        return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
      } else {
        return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
      }
    },
    InOut: function (k) {
      if (k < 0.5) {
        return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
      }

      return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
    }
  }
};
TWEEN.Interpolation = {
  Linear: function (v, k) {
    var m = v.length - 1;
    var f = m * k;
    var i = Math.floor(f);
    var fn = TWEEN.Interpolation.Utils.Linear;

    if (k < 0) {
      return fn(v[0], v[1], f);
    }

    if (k > 1) {
      return fn(v[m], v[m - 1], m - f);
    }

    return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
  },
  Bezier: function (v, k) {
    var b = 0;
    var n = v.length - 1;
    var pw = Math.pow;
    var bn = TWEEN.Interpolation.Utils.Bernstein;

    for (var i = 0; i <= n; i++) {
      b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
    }

    return b;
  },
  CatmullRom: function (v, k) {
    var m = v.length - 1;
    var f = m * k;
    var i = Math.floor(f);
    var fn = TWEEN.Interpolation.Utils.CatmullRom;

    if (v[0] === v[m]) {
      if (k < 0) {
        i = Math.floor(f = m * (1 + k));
      }

      return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
    } else {
      if (k < 0) {
        return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
      }

      if (k > 1) {
        return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
      }

      return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
    }
  },
  Utils: {
    Linear: function (p0, p1, t) {
      return (p1 - p0) * t + p0;
    },
    Bernstein: function (n, i) {
      var fc = TWEEN.Interpolation.Utils.Factorial;
      return fc(n) / fc(i) / fc(n - i);
    },
    Factorial: function () {
      var a = [1];
      return function (n) {
        var s = 1;

        if (a[n]) {
          return a[n];
        }

        for (var i = n; i > 1; i--) {
          s *= i;
        }

        a[n] = s;
        return s;
      };
    }(),
    CatmullRom: function (p0, p1, p2, p3, t) {
      var v0 = (p2 - p0) * 0.5;
      var v1 = (p3 - p1) * 0.5;
      var t2 = t * t;
      var t3 = t * t2;
      return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
    }
  }
}; // UMD (Universal Module Definition)

(function (root) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return TWEEN;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this);

/***/ }),

/***/ 9991:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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




/***/ }),

/***/ 56443:
/*!*****************************************************************************************!*\
  !*** ./node_modules/ngx-virtual-scroller/__ivy_ngcc__/fesm2015/ngx-virtual-scroller.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "VirtualScrollerComponent": () => (/* binding */ VirtualScrollerComponent),
/* harmony export */   "VirtualScrollerModule": () => (/* binding */ VirtualScrollerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tweenjs/tween.js */ 1387);
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__);





const _c0 = ["header"];
const _c1 = ["container"];
const _c2 = ["content"];
const _c3 = ["invisiblePadding"];
const _c4 = ["*"];

function VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY() {
  return {
    checkResizeInterval: 1000,
    modifyOverflowStyleOfParentScroll: true,
    resizeBypassRefreshThreshold: 5,
    scrollAnimationTime: 750,
    scrollDebounceTime: 0,
    scrollThrottlingTime: 0,
    stripedTable: false
  };
}

let VirtualScrollerComponent = class VirtualScrollerComponent {
  constructor(element, renderer, zone, changeDetectorRef, platformId, options) {
    this.element = element;
    this.renderer = renderer;
    this.zone = zone;
    this.changeDetectorRef = changeDetectorRef;
    this.window = window;
    this.executeRefreshOutsideAngularZone = false;
    this._enableUnequalChildrenSizes = false;
    this.RTL = false;
    this.useMarginInsteadOfTranslate = false;
    this.ssrViewportWidth = 1920;
    this.ssrViewportHeight = 1080;
    this._items = [];

    this.compareItems = (item1, item2) => item1 === item2;

    this.vsUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.vsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.vsStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.vsEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.calculatedScrollbarWidth = 0;
    this.calculatedScrollbarHeight = 0;
    this.padding = 0;
    this.previousViewPort = {};
    this.cachedPageSize = 0;
    this.previousScrollNumberElements = 0;
    this.isAngularUniversalSSR = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(platformId);
    this.checkResizeInterval = options.checkResizeInterval;
    this.modifyOverflowStyleOfParentScroll = options.modifyOverflowStyleOfParentScroll;
    this.resizeBypassRefreshThreshold = options.resizeBypassRefreshThreshold;
    this.scrollAnimationTime = options.scrollAnimationTime;
    this.scrollDebounceTime = options.scrollDebounceTime;
    this.scrollThrottlingTime = options.scrollThrottlingTime;
    this.scrollbarHeight = options.scrollbarHeight;
    this.scrollbarWidth = options.scrollbarWidth;
    this.stripedTable = options.stripedTable;
    this.horizontal = false;
    this.resetWrapGroupDimensions();
  }

  get viewPortInfo() {
    let pageInfo = this.previousViewPort || {};
    return {
      startIndex: pageInfo.startIndex || 0,
      endIndex: pageInfo.endIndex || 0,
      scrollStartPosition: pageInfo.scrollStartPosition || 0,
      scrollEndPosition: pageInfo.scrollEndPosition || 0,
      maxScrollPosition: pageInfo.maxScrollPosition || 0,
      startIndexWithBuffer: pageInfo.startIndexWithBuffer || 0,
      endIndexWithBuffer: pageInfo.endIndexWithBuffer || 0
    };
  }

  get enableUnequalChildrenSizes() {
    return this._enableUnequalChildrenSizes;
  }

  set enableUnequalChildrenSizes(value) {
    if (this._enableUnequalChildrenSizes === value) {
      return;
    }

    this._enableUnequalChildrenSizes = value;
    this.minMeasuredChildWidth = undefined;
    this.minMeasuredChildHeight = undefined;
  }

  get bufferAmount() {
    if (typeof this._bufferAmount === 'number' && this._bufferAmount >= 0) {
      return this._bufferAmount;
    } else {
      return this.enableUnequalChildrenSizes ? 5 : 0;
    }
  }

  set bufferAmount(value) {
    this._bufferAmount = value;
  }

  get scrollThrottlingTime() {
    return this._scrollThrottlingTime;
  }

  set scrollThrottlingTime(value) {
    this._scrollThrottlingTime = value;
    this.updateOnScrollFunction();
  }

  get scrollDebounceTime() {
    return this._scrollDebounceTime;
  }

  set scrollDebounceTime(value) {
    this._scrollDebounceTime = value;
    this.updateOnScrollFunction();
  }

  updateOnScrollFunction() {
    if (this.scrollDebounceTime) {
      this.onScroll = this.debounce(() => {
        this.refresh_internal(false);
      }, this.scrollDebounceTime);
    } else if (this.scrollThrottlingTime) {
      this.onScroll = this.throttleTrailing(() => {
        this.refresh_internal(false);
      }, this.scrollThrottlingTime);
    } else {
      this.onScroll = () => {
        this.refresh_internal(false);
      };
    }
  }

  get checkResizeInterval() {
    return this._checkResizeInterval;
  }

  set checkResizeInterval(value) {
    if (this._checkResizeInterval === value) {
      return;
    }

    this._checkResizeInterval = value;
    this.addScrollEventHandlers();
  }

  get items() {
    return this._items;
  }

  set items(value) {
    if (value === this._items) {
      return;
    }

    this._items = value || [];
    this.refresh_internal(true);
  }

  get horizontal() {
    return this._horizontal;
  }

  set horizontal(value) {
    this._horizontal = value;
    this.updateDirection();
  }

  revertParentOverscroll() {
    const scrollElement = this.getScrollElement();

    if (scrollElement && this.oldParentScrollOverflow) {
      scrollElement.style['overflow-y'] = this.oldParentScrollOverflow.y;
      scrollElement.style['overflow-x'] = this.oldParentScrollOverflow.x;
    }

    this.oldParentScrollOverflow = undefined;
  }

  get parentScroll() {
    return this._parentScroll;
  }

  set parentScroll(value) {
    if (this._parentScroll === value) {
      return;
    }

    this.revertParentOverscroll();
    this._parentScroll = value;
    this.addScrollEventHandlers();
    const scrollElement = this.getScrollElement();

    if (this.modifyOverflowStyleOfParentScroll && scrollElement !== this.element.nativeElement) {
      this.oldParentScrollOverflow = {
        x: scrollElement.style['overflow-x'],
        y: scrollElement.style['overflow-y']
      };
      scrollElement.style['overflow-y'] = this.horizontal ? 'visible' : 'auto';
      scrollElement.style['overflow-x'] = this.horizontal ? 'auto' : 'visible';
    }
  }

  ngOnInit() {
    this.addScrollEventHandlers();
  }

  ngOnDestroy() {
    this.removeScrollEventHandlers();
    this.revertParentOverscroll();
  }

  ngOnChanges(changes) {
    let indexLengthChanged = this.cachedItemsLength !== this.items.length;
    this.cachedItemsLength = this.items.length;
    const firstRun = !changes.items || !changes.items.previousValue || changes.items.previousValue.length === 0;
    this.refresh_internal(indexLengthChanged || firstRun);
  }

  ngDoCheck() {
    if (this.cachedItemsLength !== this.items.length) {
      this.cachedItemsLength = this.items.length;
      this.refresh_internal(true);
      return;
    }

    if (this.previousViewPort && this.viewPortItems && this.viewPortItems.length > 0) {
      let itemsArrayChanged = false;

      for (let i = 0; i < this.viewPortItems.length; ++i) {
        if (!this.compareItems(this.items[this.previousViewPort.startIndexWithBuffer + i], this.viewPortItems[i])) {
          itemsArrayChanged = true;
          break;
        }
      }

      if (itemsArrayChanged) {
        this.refresh_internal(true);
      }
    }
  }

  refresh() {
    this.refresh_internal(true);
  }

  invalidateAllCachedMeasurements() {
    this.wrapGroupDimensions = {
      maxChildSizePerWrapGroup: [],
      numberOfKnownWrapGroupChildSizes: 0,
      sumOfKnownWrapGroupChildWidths: 0,
      sumOfKnownWrapGroupChildHeights: 0
    };
    this.minMeasuredChildWidth = undefined;
    this.minMeasuredChildHeight = undefined;
    this.refresh_internal(false);
  }

  invalidateCachedMeasurementForItem(item) {
    if (this.enableUnequalChildrenSizes) {
      let index = this.items && this.items.indexOf(item);

      if (index >= 0) {
        this.invalidateCachedMeasurementAtIndex(index);
      }
    } else {
      this.minMeasuredChildWidth = undefined;
      this.minMeasuredChildHeight = undefined;
    }

    this.refresh_internal(false);
  }

  invalidateCachedMeasurementAtIndex(index) {
    if (this.enableUnequalChildrenSizes) {
      let cachedMeasurement = this.wrapGroupDimensions.maxChildSizePerWrapGroup[index];

      if (cachedMeasurement) {
        this.wrapGroupDimensions.maxChildSizePerWrapGroup[index] = undefined;
        --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
        this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -= cachedMeasurement.childWidth || 0;
        this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -= cachedMeasurement.childHeight || 0;
      }
    } else {
      this.minMeasuredChildWidth = undefined;
      this.minMeasuredChildHeight = undefined;
    }

    this.refresh_internal(false);
  }

  scrollInto(item, alignToBeginning = true, additionalOffset = 0, animationMilliseconds = undefined, animationCompletedCallback = undefined) {
    let index = this.items.indexOf(item);

    if (index === -1) {
      return;
    }

    this.scrollToIndex(index, alignToBeginning, additionalOffset, animationMilliseconds, animationCompletedCallback);
  }

  scrollToIndex(index, alignToBeginning = true, additionalOffset = 0, animationMilliseconds = undefined, animationCompletedCallback = undefined) {
    let maxRetries = 5;

    let retryIfNeeded = () => {
      --maxRetries;

      if (maxRetries <= 0) {
        if (animationCompletedCallback) {
          animationCompletedCallback();
        }

        return;
      }

      let dimensions = this.calculateDimensions();
      let desiredStartIndex = Math.min(Math.max(index, 0), dimensions.itemCount - 1);

      if (this.previousViewPort.startIndex === desiredStartIndex) {
        if (animationCompletedCallback) {
          animationCompletedCallback();
        }

        return;
      }

      this.scrollToIndex_internal(index, alignToBeginning, additionalOffset, 0, retryIfNeeded);
    };

    this.scrollToIndex_internal(index, alignToBeginning, additionalOffset, animationMilliseconds, retryIfNeeded);
  }

  scrollToIndex_internal(index, alignToBeginning = true, additionalOffset = 0, animationMilliseconds = undefined, animationCompletedCallback = undefined) {
    animationMilliseconds = animationMilliseconds === undefined ? this.scrollAnimationTime : animationMilliseconds;
    let dimensions = this.calculateDimensions();
    let scroll = this.calculatePadding(index, dimensions) + additionalOffset;

    if (!alignToBeginning) {
      scroll -= dimensions.wrapGroupsPerPage * dimensions[this._childScrollDim];
    }

    this.scrollToPosition(scroll, animationMilliseconds, animationCompletedCallback);
  }

  scrollToPosition(scrollPosition, animationMilliseconds = undefined, animationCompletedCallback = undefined) {
    scrollPosition += this.getElementsOffset();
    animationMilliseconds = animationMilliseconds === undefined ? this.scrollAnimationTime : animationMilliseconds;
    let scrollElement = this.getScrollElement();
    let animationRequest;

    if (this.currentTween) {
      this.currentTween.stop();
      this.currentTween = undefined;
    }

    if (!animationMilliseconds) {
      this.renderer.setProperty(scrollElement, this._scrollType, scrollPosition);
      this.refresh_internal(false, animationCompletedCallback);
      return;
    }

    const tweenConfigObj = {
      scrollPosition: scrollElement[this._scrollType]
    };
    let newTween = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__.Tween(tweenConfigObj).to({
      scrollPosition
    }, animationMilliseconds).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__.Easing.Quadratic.Out).onUpdate(data => {
      if (isNaN(data.scrollPosition)) {
        return;
      }

      this.renderer.setProperty(scrollElement, this._scrollType, data.scrollPosition);
      this.refresh_internal(false);
    }).onStop(() => {
      cancelAnimationFrame(animationRequest);
    }).start();

    const animate = time => {
      if (!newTween["isPlaying"]()) {
        return;
      }

      newTween.update(time);

      if (tweenConfigObj.scrollPosition === scrollPosition) {
        this.refresh_internal(false, animationCompletedCallback);
        return;
      }

      this.zone.runOutsideAngular(() => {
        animationRequest = requestAnimationFrame(animate);
      });
    };

    animate();
    this.currentTween = newTween;
  }

  getElementSize(element) {
    let result = element.getBoundingClientRect();
    let styles = getComputedStyle(element);
    let marginTop = parseInt(styles['margin-top'], 10) || 0;
    let marginBottom = parseInt(styles['margin-bottom'], 10) || 0;
    let marginLeft = parseInt(styles['margin-left'], 10) || 0;
    let marginRight = parseInt(styles['margin-right'], 10) || 0;
    return {
      top: result.top + marginTop,
      bottom: result.bottom + marginBottom,
      left: result.left + marginLeft,
      right: result.right + marginRight,
      width: result.width + marginLeft + marginRight,
      height: result.height + marginTop + marginBottom
    };
  }

  checkScrollElementResized() {
    let boundingRect = this.getElementSize(this.getScrollElement());
    let sizeChanged;

    if (!this.previousScrollBoundingRect) {
      sizeChanged = true;
    } else {
      let widthChange = Math.abs(boundingRect.width - this.previousScrollBoundingRect.width);
      let heightChange = Math.abs(boundingRect.height - this.previousScrollBoundingRect.height);
      sizeChanged = widthChange > this.resizeBypassRefreshThreshold || heightChange > this.resizeBypassRefreshThreshold;
    }

    if (sizeChanged) {
      this.previousScrollBoundingRect = boundingRect;

      if (boundingRect.width > 0 && boundingRect.height > 0) {
        this.refresh_internal(false);
      }
    }
  }

  updateDirection() {
    if (this.horizontal) {
      this._childScrollDim = 'childWidth';
      this._invisiblePaddingProperty = 'scaleX';
      this._marginDir = 'margin-left';
      this._offsetType = 'offsetLeft';
      this._pageOffsetType = 'pageXOffset';
      this._scrollType = 'scrollLeft';
      this._translateDir = 'translateX';
    } else {
      this._childScrollDim = 'childHeight';
      this._invisiblePaddingProperty = 'scaleY';
      this._marginDir = 'margin-top';
      this._offsetType = 'offsetTop';
      this._pageOffsetType = 'pageYOffset';
      this._scrollType = 'scrollTop';
      this._translateDir = 'translateY';
    }
  }

  debounce(func, wait) {
    const throttled = this.throttleTrailing(func, wait);

    const result = function () {
      throttled['cancel']();
      throttled.apply(this, arguments);
    };

    result['cancel'] = function () {
      throttled['cancel']();
    };

    return result;
  }

  throttleTrailing(func, wait) {
    let timeout = undefined;
    let _arguments = arguments;

    const result = function () {
      const _this = this;

      _arguments = arguments;

      if (timeout) {
        return;
      }

      if (wait <= 0) {
        func.apply(_this, _arguments);
      } else {
        timeout = setTimeout(function () {
          timeout = undefined;
          func.apply(_this, _arguments);
        }, wait);
      }
    };

    result['cancel'] = function () {
      if (timeout) {
        clearTimeout(timeout);
        timeout = undefined;
      }
    };

    return result;
  }

  refresh_internal(itemsArrayModified, refreshCompletedCallback = undefined, maxRunTimes = 2) {
    //note: maxRunTimes is to force it to keep recalculating if the previous iteration caused a re-render (different sliced items in viewport or scrollPosition changed).
    //The default of 2x max will probably be accurate enough without causing too large a performance bottleneck
    //The code would typically quit out on the 2nd iteration anyways. The main time it'd think more than 2 runs would be necessary would be for vastly different sized child items or if this is the 1st time the items array was initialized.
    //Without maxRunTimes, If the user is actively scrolling this code would become an infinite loop until they stopped scrolling. This would be okay, except each scroll event would start an additional infinte loop. We want to short-circuit it to prevent this.
    if (itemsArrayModified && this.previousViewPort && this.previousViewPort.scrollStartPosition > 0) {
      //if items were prepended, scroll forward to keep same items visible
      let oldViewPort = this.previousViewPort;
      let oldViewPortItems = this.viewPortItems;
      let oldRefreshCompletedCallback = refreshCompletedCallback;

      refreshCompletedCallback = () => {
        let scrollLengthDelta = this.previousViewPort.scrollLength - oldViewPort.scrollLength;

        if (scrollLengthDelta > 0 && this.viewPortItems) {
          let oldStartItem = oldViewPortItems[0];
          let oldStartItemIndex = this.items.findIndex(x => this.compareItems(oldStartItem, x));

          if (oldStartItemIndex > this.previousViewPort.startIndexWithBuffer) {
            let itemOrderChanged = false;

            for (let i = 1; i < this.viewPortItems.length; ++i) {
              if (!this.compareItems(this.items[oldStartItemIndex + i], oldViewPortItems[i])) {
                itemOrderChanged = true;
                break;
              }
            }

            if (!itemOrderChanged) {
              this.scrollToPosition(this.previousViewPort.scrollStartPosition + scrollLengthDelta, 0, oldRefreshCompletedCallback);
              return;
            }
          }
        }

        if (oldRefreshCompletedCallback) {
          oldRefreshCompletedCallback();
        }
      };
    }

    this.zone.runOutsideAngular(() => {
      requestAnimationFrame(() => {
        if (itemsArrayModified) {
          this.resetWrapGroupDimensions();
        }

        let viewport = this.calculateViewport();
        let startChanged = itemsArrayModified || viewport.startIndex !== this.previousViewPort.startIndex;
        let endChanged = itemsArrayModified || viewport.endIndex !== this.previousViewPort.endIndex;
        let scrollLengthChanged = viewport.scrollLength !== this.previousViewPort.scrollLength;
        let paddingChanged = viewport.padding !== this.previousViewPort.padding;
        let scrollPositionChanged = viewport.scrollStartPosition !== this.previousViewPort.scrollStartPosition || viewport.scrollEndPosition !== this.previousViewPort.scrollEndPosition || viewport.maxScrollPosition !== this.previousViewPort.maxScrollPosition;
        this.previousViewPort = viewport;

        if (scrollLengthChanged) {
          this.renderer.setStyle(this.invisiblePaddingElementRef.nativeElement, 'transform', `${this._invisiblePaddingProperty}(${viewport.scrollLength})`);
          this.renderer.setStyle(this.invisiblePaddingElementRef.nativeElement, 'webkitTransform', `${this._invisiblePaddingProperty}(${viewport.scrollLength})`);
        }

        if (paddingChanged) {
          if (this.useMarginInsteadOfTranslate) {
            this.renderer.setStyle(this.contentElementRef.nativeElement, this._marginDir, `${viewport.padding}px`);
          } else {
            this.renderer.setStyle(this.contentElementRef.nativeElement, 'transform', `${this._translateDir}(${viewport.padding}px)`);
            this.renderer.setStyle(this.contentElementRef.nativeElement, 'webkitTransform', `${this._translateDir}(${viewport.padding}px)`);
          }
        }

        if (this.headerElementRef) {
          let scrollPosition = this.getScrollElement()[this._scrollType];

          let containerOffset = this.getElementsOffset();
          let offset = Math.max(scrollPosition - viewport.padding - containerOffset + this.headerElementRef.nativeElement.clientHeight, 0);
          this.renderer.setStyle(this.headerElementRef.nativeElement, 'transform', `${this._translateDir}(${offset}px)`);
          this.renderer.setStyle(this.headerElementRef.nativeElement, 'webkitTransform', `${this._translateDir}(${offset}px)`);
        }

        const changeEventArg = startChanged || endChanged ? {
          startIndex: viewport.startIndex,
          endIndex: viewport.endIndex,
          scrollStartPosition: viewport.scrollStartPosition,
          scrollEndPosition: viewport.scrollEndPosition,
          startIndexWithBuffer: viewport.startIndexWithBuffer,
          endIndexWithBuffer: viewport.endIndexWithBuffer,
          maxScrollPosition: viewport.maxScrollPosition
        } : undefined;

        if (startChanged || endChanged || scrollPositionChanged) {
          const handleChanged = () => {
            // update the scroll list to trigger re-render of components in viewport
            this.viewPortItems = viewport.startIndexWithBuffer >= 0 && viewport.endIndexWithBuffer >= 0 ? this.items.slice(viewport.startIndexWithBuffer, viewport.endIndexWithBuffer + 1) : [];
            this.vsUpdate.emit(this.viewPortItems);

            if (startChanged) {
              this.vsStart.emit(changeEventArg);
            }

            if (endChanged) {
              this.vsEnd.emit(changeEventArg);
            }

            if (startChanged || endChanged) {
              this.changeDetectorRef.markForCheck();
              this.vsChange.emit(changeEventArg);
            }

            if (maxRunTimes > 0) {
              this.refresh_internal(false, refreshCompletedCallback, maxRunTimes - 1);
              return;
            }

            if (refreshCompletedCallback) {
              refreshCompletedCallback();
            }
          };

          if (this.executeRefreshOutsideAngularZone) {
            handleChanged();
          } else {
            this.zone.run(handleChanged);
          }
        } else {
          if (maxRunTimes > 0 && (scrollLengthChanged || paddingChanged)) {
            this.refresh_internal(false, refreshCompletedCallback, maxRunTimes - 1);
            return;
          }

          if (refreshCompletedCallback) {
            refreshCompletedCallback();
          }
        }
      });
    });
  }

  getScrollElement() {
    return this.parentScroll instanceof Window ? document.scrollingElement || document.documentElement || document.body : this.parentScroll || this.element.nativeElement;
  }

  addScrollEventHandlers() {
    if (this.isAngularUniversalSSR) {
      return;
    }

    let scrollElement = this.getScrollElement();
    this.removeScrollEventHandlers();
    this.zone.runOutsideAngular(() => {
      if (this.parentScroll instanceof Window) {
        this.disposeScrollHandler = this.renderer.listen('window', 'scroll', this.onScroll);
        this.disposeResizeHandler = this.renderer.listen('window', 'resize', this.onScroll);
      } else {
        this.disposeScrollHandler = this.renderer.listen(scrollElement, 'scroll', this.onScroll);

        if (this._checkResizeInterval > 0) {
          this.checkScrollElementResizedTimer = setInterval(() => {
            this.checkScrollElementResized();
          }, this._checkResizeInterval);
        }
      }
    });
  }

  removeScrollEventHandlers() {
    if (this.checkScrollElementResizedTimer) {
      clearInterval(this.checkScrollElementResizedTimer);
    }

    if (this.disposeScrollHandler) {
      this.disposeScrollHandler();
      this.disposeScrollHandler = undefined;
    }

    if (this.disposeResizeHandler) {
      this.disposeResizeHandler();
      this.disposeResizeHandler = undefined;
    }
  }

  getElementsOffset() {
    if (this.isAngularUniversalSSR) {
      return 0;
    }

    let offset = 0;

    if (this.containerElementRef && this.containerElementRef.nativeElement) {
      offset += this.containerElementRef.nativeElement[this._offsetType];
    }

    if (this.parentScroll) {
      let scrollElement = this.getScrollElement();
      let elementClientRect = this.getElementSize(this.element.nativeElement);
      let scrollClientRect = this.getElementSize(scrollElement);

      if (this.horizontal) {
        offset += elementClientRect.left - scrollClientRect.left;
      } else {
        offset += elementClientRect.top - scrollClientRect.top;
      }

      if (!(this.parentScroll instanceof Window)) {
        offset += scrollElement[this._scrollType];
      }
    }

    return offset;
  }

  countItemsPerWrapGroup() {
    if (this.isAngularUniversalSSR) {
      return Math.round(this.horizontal ? this.ssrViewportHeight / this.ssrChildHeight : this.ssrViewportWidth / this.ssrChildWidth);
    }

    let propertyName = this.horizontal ? 'offsetLeft' : 'offsetTop';
    let children = (this.containerElementRef && this.containerElementRef.nativeElement || this.contentElementRef.nativeElement).children;
    let childrenLength = children ? children.length : 0;

    if (childrenLength === 0) {
      return 1;
    }

    let firstOffset = children[0][propertyName];
    let result = 1;

    while (result < childrenLength && firstOffset === children[result][propertyName]) {
      ++result;
    }

    return result;
  }

  getScrollStartPosition() {
    let windowScrollValue = undefined;

    if (this.parentScroll instanceof Window) {
      windowScrollValue = window[this._pageOffsetType];
    }

    return windowScrollValue || this.getScrollElement()[this._scrollType] || 0;
  }

  resetWrapGroupDimensions() {
    const oldWrapGroupDimensions = this.wrapGroupDimensions;
    this.invalidateAllCachedMeasurements();

    if (!this.enableUnequalChildrenSizes || !oldWrapGroupDimensions || oldWrapGroupDimensions.numberOfKnownWrapGroupChildSizes === 0) {
      return;
    }

    const itemsPerWrapGroup = this.countItemsPerWrapGroup();

    for (let wrapGroupIndex = 0; wrapGroupIndex < oldWrapGroupDimensions.maxChildSizePerWrapGroup.length; ++wrapGroupIndex) {
      const oldWrapGroupDimension = oldWrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex];

      if (!oldWrapGroupDimension || !oldWrapGroupDimension.items || !oldWrapGroupDimension.items.length) {
        continue;
      }

      if (oldWrapGroupDimension.items.length !== itemsPerWrapGroup) {
        return;
      }

      let itemsChanged = false;
      let arrayStartIndex = itemsPerWrapGroup * wrapGroupIndex;

      for (let i = 0; i < itemsPerWrapGroup; ++i) {
        if (!this.compareItems(oldWrapGroupDimension.items[i], this.items[arrayStartIndex + i])) {
          itemsChanged = true;
          break;
        }
      }

      if (!itemsChanged) {
        ++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
        this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += oldWrapGroupDimension.childWidth || 0;
        this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += oldWrapGroupDimension.childHeight || 0;
        this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex] = oldWrapGroupDimension;
      }
    }
  }

  calculateDimensions() {
    let scrollElement = this.getScrollElement();
    const maxCalculatedScrollBarSize = 25; // Note: Formula to auto-calculate doesn't work for ParentScroll, so we default to this if not set by consuming application

    this.calculatedScrollbarHeight = Math.max(Math.min(scrollElement.offsetHeight - scrollElement.clientHeight, maxCalculatedScrollBarSize), this.calculatedScrollbarHeight);
    this.calculatedScrollbarWidth = Math.max(Math.min(scrollElement.offsetWidth - scrollElement.clientWidth, maxCalculatedScrollBarSize), this.calculatedScrollbarWidth);
    let viewportWidth = scrollElement.offsetWidth - (this.scrollbarWidth || this.calculatedScrollbarWidth || (this.horizontal ? 0 : maxCalculatedScrollBarSize));
    let viewportHeight = scrollElement.offsetHeight - (this.scrollbarHeight || this.calculatedScrollbarHeight || (this.horizontal ? maxCalculatedScrollBarSize : 0));
    let content = this.containerElementRef && this.containerElementRef.nativeElement || this.contentElementRef.nativeElement;
    let itemsPerWrapGroup = this.countItemsPerWrapGroup();
    let wrapGroupsPerPage;
    let defaultChildWidth;
    let defaultChildHeight;

    if (this.isAngularUniversalSSR) {
      viewportWidth = this.ssrViewportWidth;
      viewportHeight = this.ssrViewportHeight;
      defaultChildWidth = this.ssrChildWidth;
      defaultChildHeight = this.ssrChildHeight;
      let itemsPerRow = Math.max(Math.ceil(viewportWidth / defaultChildWidth), 1);
      let itemsPerCol = Math.max(Math.ceil(viewportHeight / defaultChildHeight), 1);
      wrapGroupsPerPage = this.horizontal ? itemsPerRow : itemsPerCol;
    } else if (!this.enableUnequalChildrenSizes) {
      if (content.children.length > 0) {
        if (!this.childWidth || !this.childHeight) {
          if (!this.minMeasuredChildWidth && viewportWidth > 0) {
            this.minMeasuredChildWidth = viewportWidth;
          }

          if (!this.minMeasuredChildHeight && viewportHeight > 0) {
            this.minMeasuredChildHeight = viewportHeight;
          }
        }

        let child = content.children[0];
        let clientRect = this.getElementSize(child);
        this.minMeasuredChildWidth = Math.min(this.minMeasuredChildWidth, clientRect.width);
        this.minMeasuredChildHeight = Math.min(this.minMeasuredChildHeight, clientRect.height);
      }

      defaultChildWidth = this.childWidth || this.minMeasuredChildWidth || viewportWidth;
      defaultChildHeight = this.childHeight || this.minMeasuredChildHeight || viewportHeight;
      let itemsPerRow = Math.max(Math.ceil(viewportWidth / defaultChildWidth), 1);
      let itemsPerCol = Math.max(Math.ceil(viewportHeight / defaultChildHeight), 1);
      wrapGroupsPerPage = this.horizontal ? itemsPerRow : itemsPerCol;
    } else {
      let scrollOffset = scrollElement[this._scrollType] - (this.previousViewPort ? this.previousViewPort.padding : 0);
      let arrayStartIndex = this.previousViewPort.startIndexWithBuffer || 0;
      let wrapGroupIndex = Math.ceil(arrayStartIndex / itemsPerWrapGroup);
      let maxWidthForWrapGroup = 0;
      let maxHeightForWrapGroup = 0;
      let sumOfVisibleMaxWidths = 0;
      let sumOfVisibleMaxHeights = 0;
      wrapGroupsPerPage = 0;

      for (let i = 0; i < content.children.length; ++i) {
        ++arrayStartIndex;
        let child = content.children[i];
        let clientRect = this.getElementSize(child);
        maxWidthForWrapGroup = Math.max(maxWidthForWrapGroup, clientRect.width);
        maxHeightForWrapGroup = Math.max(maxHeightForWrapGroup, clientRect.height);

        if (arrayStartIndex % itemsPerWrapGroup === 0) {
          let oldValue = this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex];

          if (oldValue) {
            --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
            this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -= oldValue.childWidth || 0;
            this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -= oldValue.childHeight || 0;
          }

          ++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
          const items = this.items.slice(arrayStartIndex - itemsPerWrapGroup, arrayStartIndex);
          this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex] = {
            childWidth: maxWidthForWrapGroup,
            childHeight: maxHeightForWrapGroup,
            items: items
          };
          this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += maxWidthForWrapGroup;
          this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += maxHeightForWrapGroup;

          if (this.horizontal) {
            let maxVisibleWidthForWrapGroup = Math.min(maxWidthForWrapGroup, Math.max(viewportWidth - sumOfVisibleMaxWidths, 0));

            if (scrollOffset > 0) {
              let scrollOffsetToRemove = Math.min(scrollOffset, maxVisibleWidthForWrapGroup);
              maxVisibleWidthForWrapGroup -= scrollOffsetToRemove;
              scrollOffset -= scrollOffsetToRemove;
            }

            sumOfVisibleMaxWidths += maxVisibleWidthForWrapGroup;

            if (maxVisibleWidthForWrapGroup > 0 && viewportWidth >= sumOfVisibleMaxWidths) {
              ++wrapGroupsPerPage;
            }
          } else {
            let maxVisibleHeightForWrapGroup = Math.min(maxHeightForWrapGroup, Math.max(viewportHeight - sumOfVisibleMaxHeights, 0));

            if (scrollOffset > 0) {
              let scrollOffsetToRemove = Math.min(scrollOffset, maxVisibleHeightForWrapGroup);
              maxVisibleHeightForWrapGroup -= scrollOffsetToRemove;
              scrollOffset -= scrollOffsetToRemove;
            }

            sumOfVisibleMaxHeights += maxVisibleHeightForWrapGroup;

            if (maxVisibleHeightForWrapGroup > 0 && viewportHeight >= sumOfVisibleMaxHeights) {
              ++wrapGroupsPerPage;
            }
          }

          ++wrapGroupIndex;
          maxWidthForWrapGroup = 0;
          maxHeightForWrapGroup = 0;
        }
      }

      let averageChildWidth = this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths / this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
      let averageChildHeight = this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights / this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
      defaultChildWidth = this.childWidth || averageChildWidth || viewportWidth;
      defaultChildHeight = this.childHeight || averageChildHeight || viewportHeight;

      if (this.horizontal) {
        if (viewportWidth > sumOfVisibleMaxWidths) {
          wrapGroupsPerPage += Math.ceil((viewportWidth - sumOfVisibleMaxWidths) / defaultChildWidth);
        }
      } else {
        if (viewportHeight > sumOfVisibleMaxHeights) {
          wrapGroupsPerPage += Math.ceil((viewportHeight - sumOfVisibleMaxHeights) / defaultChildHeight);
        }
      }
    }

    let itemCount = this.items.length;
    let itemsPerPage = itemsPerWrapGroup * wrapGroupsPerPage;
    let pageCount_fractional = itemCount / itemsPerPage;
    let numberOfWrapGroups = Math.ceil(itemCount / itemsPerWrapGroup);
    let scrollLength = 0;
    let defaultScrollLengthPerWrapGroup = this.horizontal ? defaultChildWidth : defaultChildHeight;

    if (this.enableUnequalChildrenSizes) {
      let numUnknownChildSizes = 0;

      for (let i = 0; i < numberOfWrapGroups; ++i) {
        let childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];

        if (childSize) {
          scrollLength += childSize;
        } else {
          ++numUnknownChildSizes;
        }
      }

      scrollLength += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
    } else {
      scrollLength = numberOfWrapGroups * defaultScrollLengthPerWrapGroup;
    }

    if (this.headerElementRef) {
      scrollLength += this.headerElementRef.nativeElement.clientHeight;
    }

    let viewportLength = this.horizontal ? viewportWidth : viewportHeight;
    let maxScrollPosition = Math.max(scrollLength - viewportLength, 0);
    return {
      childHeight: defaultChildHeight,
      childWidth: defaultChildWidth,
      itemCount: itemCount,
      itemsPerPage: itemsPerPage,
      itemsPerWrapGroup: itemsPerWrapGroup,
      maxScrollPosition: maxScrollPosition,
      pageCount_fractional: pageCount_fractional,
      scrollLength: scrollLength,
      viewportLength: viewportLength,
      wrapGroupsPerPage: wrapGroupsPerPage
    };
  }

  calculatePadding(arrayStartIndexWithBuffer, dimensions) {
    if (dimensions.itemCount === 0) {
      return 0;
    }

    let defaultScrollLengthPerWrapGroup = dimensions[this._childScrollDim];
    let startingWrapGroupIndex = Math.floor(arrayStartIndexWithBuffer / dimensions.itemsPerWrapGroup) || 0;

    if (!this.enableUnequalChildrenSizes) {
      return defaultScrollLengthPerWrapGroup * startingWrapGroupIndex;
    }

    let numUnknownChildSizes = 0;
    let result = 0;

    for (let i = 0; i < startingWrapGroupIndex; ++i) {
      let childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];

      if (childSize) {
        result += childSize;
      } else {
        ++numUnknownChildSizes;
      }
    }

    result += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
    return result;
  }

  calculatePageInfo(scrollPosition, dimensions) {
    let scrollPercentage = 0;

    if (this.enableUnequalChildrenSizes) {
      const numberOfWrapGroups = Math.ceil(dimensions.itemCount / dimensions.itemsPerWrapGroup);
      let totalScrolledLength = 0;
      let defaultScrollLengthPerWrapGroup = dimensions[this._childScrollDim];

      for (let i = 0; i < numberOfWrapGroups; ++i) {
        let childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];

        if (childSize) {
          totalScrolledLength += childSize;
        } else {
          totalScrolledLength += defaultScrollLengthPerWrapGroup;
        }

        if (scrollPosition < totalScrolledLength) {
          scrollPercentage = i / numberOfWrapGroups;
          break;
        }
      }
    } else {
      scrollPercentage = scrollPosition / dimensions.scrollLength;
    }

    let startingArrayIndex_fractional = Math.min(Math.max(scrollPercentage * dimensions.pageCount_fractional, 0), dimensions.pageCount_fractional) * dimensions.itemsPerPage;
    let maxStart = dimensions.itemCount - dimensions.itemsPerPage - 1;
    let arrayStartIndex = Math.min(Math.floor(startingArrayIndex_fractional), maxStart);
    arrayStartIndex -= arrayStartIndex % dimensions.itemsPerWrapGroup; // round down to start of wrapGroup

    if (this.stripedTable) {
      let bufferBoundary = 2 * dimensions.itemsPerWrapGroup;

      if (arrayStartIndex % bufferBoundary !== 0) {
        arrayStartIndex = Math.max(arrayStartIndex - arrayStartIndex % bufferBoundary, 0);
      }
    }

    let arrayEndIndex = Math.ceil(startingArrayIndex_fractional) + dimensions.itemsPerPage - 1;
    let endIndexWithinWrapGroup = (arrayEndIndex + 1) % dimensions.itemsPerWrapGroup;

    if (endIndexWithinWrapGroup > 0) {
      arrayEndIndex += dimensions.itemsPerWrapGroup - endIndexWithinWrapGroup; // round up to end of wrapGroup
    }

    if (isNaN(arrayStartIndex)) {
      arrayStartIndex = 0;
    }

    if (isNaN(arrayEndIndex)) {
      arrayEndIndex = 0;
    }

    arrayStartIndex = Math.min(Math.max(arrayStartIndex, 0), dimensions.itemCount - 1);
    arrayEndIndex = Math.min(Math.max(arrayEndIndex, 0), dimensions.itemCount - 1);
    let bufferSize = this.bufferAmount * dimensions.itemsPerWrapGroup;
    let startIndexWithBuffer = Math.min(Math.max(arrayStartIndex - bufferSize, 0), dimensions.itemCount - 1);
    let endIndexWithBuffer = Math.min(Math.max(arrayEndIndex + bufferSize, 0), dimensions.itemCount - 1);
    return {
      startIndex: arrayStartIndex,
      endIndex: arrayEndIndex,
      startIndexWithBuffer: startIndexWithBuffer,
      endIndexWithBuffer: endIndexWithBuffer,
      scrollStartPosition: scrollPosition,
      scrollEndPosition: scrollPosition + dimensions.viewportLength,
      maxScrollPosition: dimensions.maxScrollPosition
    };
  }

  calculateViewport() {
    let dimensions = this.calculateDimensions();
    let offset = this.getElementsOffset();
    let scrollStartPosition = this.getScrollStartPosition();

    if (scrollStartPosition > dimensions.scrollLength + offset && !(this.parentScroll instanceof Window)) {
      scrollStartPosition = dimensions.scrollLength;
    } else {
      scrollStartPosition -= offset;
    }

    scrollStartPosition = Math.max(0, scrollStartPosition);
    let pageInfo = this.calculatePageInfo(scrollStartPosition, dimensions);
    let newPadding = this.calculatePadding(pageInfo.startIndexWithBuffer, dimensions);
    let newScrollLength = dimensions.scrollLength;
    return {
      startIndex: pageInfo.startIndex,
      endIndex: pageInfo.endIndex,
      startIndexWithBuffer: pageInfo.startIndexWithBuffer,
      endIndexWithBuffer: pageInfo.endIndexWithBuffer,
      padding: Math.round(newPadding),
      scrollLength: Math.round(newScrollLength),
      scrollStartPosition: pageInfo.scrollStartPosition,
      scrollEndPosition: pageInfo.scrollEndPosition,
      maxScrollPosition: pageInfo.maxScrollPosition
    };
  }

};

VirtualScrollerComponent.ɵfac = function VirtualScrollerComponent_Factory(t) {
  return new (t || VirtualScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"]('virtual-scroller-default-options', 8));
};

VirtualScrollerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: VirtualScrollerComponent,
  selectors: [["virtual-scroller"], ["", "virtualScroller", ""]],
  contentQueries: function VirtualScrollerComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerElementRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.containerElementRef = _t.first);
    }
  },
  viewQuery: function VirtualScrollerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.invisiblePaddingElementRef = _t.first);
    }
  },
  hostVars: 8,
  hostBindings: function VirtualScrollerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("horizontal", ctx.horizontal)("vertical", !ctx.horizontal)("selfScroll", !ctx.parentScroll)("rtl", ctx.RTL);
    }
  },
  inputs: {
    executeRefreshOutsideAngularZone: "executeRefreshOutsideAngularZone",
    RTL: "RTL",
    useMarginInsteadOfTranslate: "useMarginInsteadOfTranslate",
    ssrViewportWidth: "ssrViewportWidth",
    ssrViewportHeight: "ssrViewportHeight",
    compareItems: "compareItems",
    checkResizeInterval: "checkResizeInterval",
    modifyOverflowStyleOfParentScroll: "modifyOverflowStyleOfParentScroll",
    resizeBypassRefreshThreshold: "resizeBypassRefreshThreshold",
    scrollAnimationTime: "scrollAnimationTime",
    scrollDebounceTime: "scrollDebounceTime",
    scrollThrottlingTime: "scrollThrottlingTime",
    scrollbarHeight: "scrollbarHeight",
    scrollbarWidth: "scrollbarWidth",
    stripedTable: "stripedTable",
    horizontal: "horizontal",
    enableUnequalChildrenSizes: "enableUnequalChildrenSizes",
    bufferAmount: "bufferAmount",
    items: "items",
    parentScroll: "parentScroll",
    childWidth: "childWidth",
    childHeight: "childHeight",
    ssrChildWidth: "ssrChildWidth",
    ssrChildHeight: "ssrChildHeight"
  },
  outputs: {
    vsUpdate: "vsUpdate",
    vsChange: "vsChange",
    vsStart: "vsStart",
    vsEnd: "vsEnd"
  },
  exportAs: ["virtualScroller"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c4,
  decls: 5,
  vars: 0,
  consts: [[1, "total-padding"], ["invisiblePadding", ""], [1, "scrollable-content"], ["content", ""]],
  template: function VirtualScrollerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  styles: ["[_nghost-%COMP%] {\n      position: relative;\n\t  \tdisplay: block;\n      -webkit-overflow-scrolling: touch;\n    }\n\n\t\t.horizontal.selfScroll[_nghost-%COMP%] {\n      overflow-y: visible;\n      overflow-x: auto;\n\t\t}\n\n\t\t.horizontal.selfScroll.rtl[_nghost-%COMP%] {\n\t\t\ttransform: scaleX(-1);\n\t\t}\n\n\t\t.vertical.selfScroll[_nghost-%COMP%] {\n      overflow-y: auto;\n      overflow-x: visible;\n\t\t}\n\n    .scrollable-content[_ngcontent-%COMP%] {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      max-width: 100vw;\n      max-height: 100vh;\n      position: absolute;\n    }\n\n\t\t.scrollable-content[_ngcontent-%COMP%]     > * {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\n\t\t.horizontal[_nghost-%COMP%] {\n\t\t\twhite-space: nowrap;\n\t\t}\n\n\t\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%] {\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%]     > * {\n\t\t\tflex-shrink: 0;\n\t\t\tflex-grow: 0;\n\t\t\twhite-space: initial;\n\t\t}\n\n\t\t.horizontal.rtl[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%]     > * {\n\t\t\ttransform:scaleX(-1);\n\t\t}\n\n    .total-padding[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 1px;\n      width: 1px;\n      transform-origin: 0 0;\n      opacity: 0;\n    }\n\n    .horizontal[_nghost-%COMP%]   .total-padding[_ngcontent-%COMP%] {\n      height: 100%;\n    }"]
});

VirtualScrollerComponent.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
}, {
  type: Object,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
  }]
}, {
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
    args: ['virtual-scroller-default-options']
  }]
}];

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "executeRefreshOutsideAngularZone", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "enableUnequalChildrenSizes", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "RTL", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "useMarginInsteadOfTranslate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "modifyOverflowStyleOfParentScroll", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "stripedTable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "scrollbarWidth", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "scrollbarHeight", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "childWidth", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "childHeight", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "ssrChildWidth", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "ssrChildHeight", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "ssrViewportWidth", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "ssrViewportHeight", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "bufferAmount", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "scrollAnimationTime", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "resizeBypassRefreshThreshold", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "scrollThrottlingTime", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "scrollDebounceTime", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "checkResizeInterval", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "items", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "compareItems", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "horizontal", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()], VirtualScrollerComponent.prototype, "parentScroll", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()], VirtualScrollerComponent.prototype, "vsUpdate", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()], VirtualScrollerComponent.prototype, "vsChange", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()], VirtualScrollerComponent.prototype, "vsStart", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()], VirtualScrollerComponent.prototype, "vsEnd", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild)('content', {
  read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
  static: true
})], VirtualScrollerComponent.prototype, "contentElementRef", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild)('invisiblePadding', {
  read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
  static: true
})], VirtualScrollerComponent.prototype, "invisiblePaddingElementRef", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild)('header', {
  read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
  static: false
})], VirtualScrollerComponent.prototype, "headerElementRef", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild)('container', {
  read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
  static: false
})], VirtualScrollerComponent.prototype, "containerElementRef", void 0);

VirtualScrollerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__param)(4, (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID)), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__param)(5, (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional)()), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__param)(5, (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject)('virtual-scroller-default-options'))], VirtualScrollerComponent);
let VirtualScrollerModule = class VirtualScrollerModule {};

VirtualScrollerModule.ɵfac = function VirtualScrollerModule_Factory(t) {
  return new (t || VirtualScrollerModule)();
};

VirtualScrollerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: VirtualScrollerModule
});
VirtualScrollerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [{
    provide: 'virtual-scroller-default-options',
    useFactory: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VirtualScrollerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'virtual-scroller,[virtualScroller]',
      exportAs: 'virtualScroller',
      template: `
    <div class="total-padding" #invisiblePadding></div>
    <div class="scrollable-content" #content>
      <ng-content></ng-content>
    </div>
  `,
      host: {
        '[class.horizontal]': "horizontal",
        '[class.vertical]': "!horizontal",
        '[class.selfScroll]': "!parentScroll",
        '[class.rtl]': "RTL"
      },
      styles: ["\n    :host {\n      position: relative;\n\t  \tdisplay: block;\n      -webkit-overflow-scrolling: touch;\n    }\n\n\t\t:host.horizontal.selfScroll {\n      overflow-y: visible;\n      overflow-x: auto;\n\t\t}\n\n\t\t:host.horizontal.selfScroll.rtl {\n\t\t\ttransform: scaleX(-1);\n\t\t}\n\n\t\t:host.vertical.selfScroll {\n      overflow-y: auto;\n      overflow-x: visible;\n\t\t}\n\n    .scrollable-content {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      max-width: 100vw;\n      max-height: 100vh;\n      position: absolute;\n    }\n\n\t\t.scrollable-content ::ng-deep > * {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\n\t\t:host.horizontal {\n\t\t\twhite-space: nowrap;\n\t\t}\n\n\t\t:host.horizontal .scrollable-content {\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\t:host.horizontal .scrollable-content ::ng-deep > * {\n\t\t\tflex-shrink: 0;\n\t\t\tflex-grow: 0;\n\t\t\twhite-space: initial;\n\t\t}\n\n\t\t:host.horizontal.rtl .scrollable-content ::ng-deep > * {\n\t\t\ttransform:scaleX(-1);\n\t\t}\n\n    .total-padding {\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 1px;\n      width: 1px;\n      transform-origin: 0 0;\n      opacity: 0;\n    }\n\n    :host.horizontal .total-padding {\n      height: 100%;\n    }\n  "]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: ['virtual-scroller-default-options']
      }]
    }];
  }, {
    executeRefreshOutsideAngularZone: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    RTL: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    useMarginInsteadOfTranslate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    ssrViewportWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    ssrViewportHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    compareItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    vsUpdate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    vsChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    vsStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    vsEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    checkResizeInterval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    modifyOverflowStyleOfParentScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    resizeBypassRefreshThreshold: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    scrollAnimationTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    scrollDebounceTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    scrollThrottlingTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    scrollbarHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    scrollbarWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    stripedTable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    horizontal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    enableUnequalChildrenSizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    bufferAmount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    parentScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    childWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    childHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    ssrChildWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    ssrChildHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    contentElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['content', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
        static: true
      }]
    }],
    invisiblePaddingElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['invisiblePadding', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
        static: true
      }]
    }],
    headerElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: ['header', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
        static: false
      }]
    }],
    containerElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: ['container', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
        static: false
      }]
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VirtualScrollerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      exports: [VirtualScrollerComponent],
      declarations: [VirtualScrollerComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      providers: [{
        provide: 'virtual-scroller-default-options',
        useFactory: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY
      }]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VirtualScrollerModule, {
    declarations: function () {
      return [VirtualScrollerComponent];
    },
    imports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule];
    },
    exports: function () {
      return [VirtualScrollerComponent];
    }
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 93196:
/*!***********************************************************************************!*\
  !*** ./node_modules/angular-ng-autocomplete/fesm2020/angular-ng-autocomplete.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteComponent": () => (/* binding */ AutocompleteComponent),
/* harmony export */   "AutocompleteLibModule": () => (/* binding */ AutocompleteLibModule),
/* harmony export */   "HighlightPipe": () => (/* binding */ HighlightPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);








const _c0 = ["searchInput"];
const _c1 = ["filteredListElement"];
const _c2 = ["historyListElement"];

function AutocompleteComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_4_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.remove($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}

function AutocompleteComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 17)(2, "div", 18)(3, "div", 19)(4, "div", 20)(5, "div", 21)(6, "div", 22)(7, "div", 23)(8, "div", 24)(9, "div", 25)(10, "div", 26)(11, "div", 27)(12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function AutocompleteComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.heading);
  }
}

function AutocompleteComponent_li_10_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c3 = function (a0) {
  return {
    $implicit: a0
  };
};

function AutocompleteComponent_li_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_10_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.select(item_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_1_ng_container_1_Template, 1, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const idx_r14 = ctx_r21.index;
    const item_r13 = ctx_r21.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r14 === ctx_r15.selectedIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r15.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 4, item_r13, ctx_r15.toHighlight)));
  }
}

function AutocompleteComponent_li_10_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function AutocompleteComponent_li_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_10_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.select(item_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_2_ng_container_1_Template, 1, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const idx_r14 = ctx_r26.index;
    const item_r13 = ctx_r26.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r14 === ctx_r16.selectedIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r16.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 4, item_r13, ctx_r16.toHighlight, ctx_r16.searchKeyword)));
  }
}

function AutocompleteComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_1_Template, 3, 9, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutocompleteComponent_li_10_div_2_Template, 3, 10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isTypeString(item_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.isTypeString(item_r13));
  }
}

function AutocompleteComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_12_Template_div_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r27.resetHistoryList($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.historyHeading);
  }
}

function AutocompleteComponent_li_15_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function AutocompleteComponent_li_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r34.select(item_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_1_ng_container_1_Template, 1, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const idx_r30 = ctx_r37.index;
    const item_r29 = ctx_r37.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r30 === ctx_r31.selectedIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r31.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, item_r29));
  }
}

function AutocompleteComponent_li_15_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function AutocompleteComponent_li_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r39.select(item_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_2_ng_container_1_Template, 1, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const idx_r30 = ctx_r42.index;
    const item_r29 = ctx_r42.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r30 === ctx_r32.selectedIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r32.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, item_r29));
  }
}

function AutocompleteComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_1_Template, 2, 6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutocompleteComponent_li_15_div_2_Template, 2, 6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_Template_div_click_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);
      const idx_r30 = restoredCtx.index;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r43.removeHistoryItem(idx_r30, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isTypeString(item_r29));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.isTypeString(item_r29));
  }
}

function AutocompleteComponent_div_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function AutocompleteComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_div_16_ng_container_1_Template, 1, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.notFoundTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r9.notFoundText));
  }
}

function AutocompleteComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_17_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r46.handleOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

const _c4 = function (a0) {
  return {
    "active": a0
  };
};

const _c5 = function (a0, a1) {
  return {
    "is-hidden": a0,
    "is-visible": a1
  };
};

class HighlightPipe {
  transform(text, search, searchKeyword) {
    let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    pattern = pattern.split(' ').filter(t => {
      return t.length > 0;
    }).join('|');
    const regex = new RegExp(pattern, 'gi');

    if (!search) {
      return text;
    }

    if (searchKeyword) {
      const name = text[searchKeyword].replace(regex, match => `<b>${match}</b>`); // copy original object

      const textCopied = { ...text
      }; // set bold value into searchKeyword of copied object

      textCopied[searchKeyword] = name;
      return textCopied;
    } else {
      return search ? text.replace(regex, match => `<b>${match}</b>`) : text;
    }
  }

}

HighlightPipe.ɵfac = function HighlightPipe_Factory(t) {
  return new (t || HighlightPipe)();
};

HighlightPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "highlight",
  type: HighlightPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'highlight'
    }]
  }], null, null);
})();
/**
 * Keyboard events
 */


const isArrowUp = keyCode => keyCode === 38;

const isArrowDown = keyCode => keyCode === 40;

const isArrowUpDown = keyCode => isArrowUp(keyCode) || isArrowDown(keyCode);

const isEnter = keyCode => keyCode === 13;

const isBackspace = keyCode => keyCode === 8;

const isDelete = keyCode => keyCode === 46;

const isESC = keyCode => keyCode === 27;

const isTab = keyCode => keyCode === 9;

class AutocompleteComponent {
  constructor(elementRef, renderer) {
    this.renderer = renderer;
    this.query = ''; // search query

    this.filteredList = []; // list of items

    this.historyList = []; // list of history items

    this.isHistoryListVisible = true;
    this.selectedIdx = -1;
    this.toHighlight = '';
    this.notFound = false;
    this.isFocused = false;
    this.isOpen = false;
    this.isScrollToEnd = false;
    this.overlay = false;
    this.manualOpen = undefined;
    this.manualClose = undefined; // @Inputs

    /**
     * Data of items list.
     * It can be array of strings or array of objects.
     */

    this.data = [];
    this.placeholder = '';
    this.heading = '';
    /**
     * Heading text of history list.
     * If it is null then history heading is hidden.
     */

    this.historyHeading = 'Recently selected';
    this.historyListMaxNumber = 15; // maximum number of items in the history list.

    this.notFoundText = 'Not found'; // set custom text when filter returns empty result

    /**
     * The minimum number of characters the user must type before a search is performed.
     */

    this.minQueryLength = 1;
    /**
     * Focus first item in the list
     */

    this.focusFirst = false; // @Output events

    /** Event that is emitted whenever an item from the list is selected. */

    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event that is emitted whenever an input is changed. */

    this.inputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event that is emitted whenever an input is focused. */

    this.inputFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event that is emitted whenever an input is cleared. */

    this.inputCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event that is emitted when the autocomplete panel is opened. */

    this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event that is emitted when the autocomplete panel is closed. */

    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event that is emitted when scrolled to the end of items. */

    this.scrolledToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Propagates new value when model changes
     */

    this.propagateChange = () => {};

    this.onTouched = () => {};

    this.elementRef = elementRef;
  }
  /**
   * Writes a new value from the form model into the view,
   * Updates model
   */


  writeValue(value = '') {
    this.query = this.selectedValueRender !== undefined ? this.selectedValueRender(value) : this.defaultWriteValue(value);
  }

  defaultWriteValue(value) {
    return value && !this.isTypeString(value) ? value[this.searchKeyword] : value;
  }
  /**
   * Registers a handler that is called when something in the view has changed
   */


  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  /**
   * Registers a handler specifically for when a control receives a touch event
   */


  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Event that is called when the value of an input element is changed
   */


  onChange(event) {
    this.propagateChange(event.target.value);
  }
  /**
   * Event that is called when the control status changes to or from DISABLED
   */


  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.initEventStream();
    this.handleScroll();
  }
  /**
   * Set initial value
   * @param value
   */


  setInitialValue(value) {
    if (this.initialValue) {
      this.select(value);
    }
  }
  /**
   * Update search results
   */


  ngOnChanges(changes) {
    this.setInitialValue(this.initialValue);

    if (changes && changes.data && Array.isArray(changes.data.currentValue)) {
      this.handleItemsChange();

      if (!changes.data.firstChange && this.isFocused) {
        this.handleOpen();
      }
    }
  }
  /**
   * Items change
   */


  handleItemsChange() {
    this.isScrollToEnd = false;

    if (!this.isOpen) {
      return;
    }

    this.filteredList = this.data;
    this.notFound = !this.filteredList || this.filteredList.length === 0; // Filter list when updating data and panel is open

    if (this.isOpen) {
      this.filterList();
    }
  }
  /**
   * Filter data
   */


  filterList() {
    this.selectedIdx = -1;
    this.initSearchHistory();

    if (this.query != null && this.data) {
      this.toHighlight = this.query;
      this.filteredList = this.customFilter !== undefined ? this.customFilter([...this.data], this.query) : this.defaultFilterFunction(); // If [focusFirst]="true" automatically focus the first match

      if (this.filteredList.length > 0 && this.focusFirst) {
        this.selectedIdx = 0;
      }
    } else {
      this.notFound = false;
    }
  }
  /**
   * Default filter function, used unless customFilter is provided
   */


  defaultFilterFunction() {
    return this.data.filter(item => {
      if (typeof item === 'string') {
        // string logic, check equality of strings
        return item.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      } else if (typeof item === 'object' && item instanceof Object) {
        // object logic, check property equality
        return item[this.searchKeyword] ? item[this.searchKeyword].toLowerCase().indexOf(this.query.toLowerCase()) > -1 : "";
      }
    });
  }
  /**
   * Check if item is a string in the list.
   * @param item
   */


  isTypeString(item) {
    return typeof item === 'string';
  }
  /**
   * Select item in the list.
   * @param item
   */


  select(item) {
    this.query = !this.isTypeString(item) ? item[this.searchKeyword] : item;
    this.isOpen = true;
    this.overlay = false;
    this.selected.emit(item);
    this.propagateChange(item);

    if (this.initialValue) {
      // check if history already exists in localStorage and then update
      const history = window.localStorage.getItem(`${this.historyIdentifier}`);

      if (history) {
        let existingHistory = JSON.parse(localStorage[`${this.historyIdentifier}`]);
        if (!(existingHistory instanceof Array)) existingHistory = []; // check if selected item exists in existingHistory

        if (!existingHistory.some(existingItem => !this.isTypeString(existingItem) ? existingItem[this.searchKeyword] == item[this.searchKeyword] : existingItem == item)) {
          existingHistory.unshift(item);
          localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(existingHistory)); // check if items don't exceed max allowed number

          if (existingHistory.length >= this.historyListMaxNumber) {
            existingHistory.splice(existingHistory.length - 1, 1);
            localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(existingHistory));
          }
        } else {
          // if selected item exists in existingHistory swap to top in array
          if (!this.isTypeString(item)) {
            // object logic
            const copiedExistingHistory = existingHistory.slice(); // copy original existingHistory array

            const selectedIndex = copiedExistingHistory.map(el => el[this.searchKeyword]).indexOf(item[this.searchKeyword]);
            copiedExistingHistory.splice(selectedIndex, 1);
            copiedExistingHistory.splice(0, 0, item);
            localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(copiedExistingHistory));
          } else {
            // string logic
            const copiedExistingHistory = existingHistory.slice(); // copy original existingHistory array

            copiedExistingHistory.splice(copiedExistingHistory.indexOf(item), 1);
            copiedExistingHistory.splice(0, 0, item);
            localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(copiedExistingHistory));
          }
        }
      } else {
        this.saveHistory(item);
      }
    } else {
      this.saveHistory(item);
    }

    this.handleClose();
  }
  /**
   * Document click
   * @param e event
   */


  handleClick(e) {
    let clickedComponent = e.target;
    let inside = false;

    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;

        if (this.filteredList.length) {
          this.handleOpen();
        }
      }

      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);

    if (!inside) {
      this.handleClose();
    }
  }
  /**
   * Handle body overlay
   */


  handleOverlay() {
    this.overlay = false;
  }
  /**
   * Scroll items
   */


  handleScroll() {
    this.renderer.listen(this.filteredListElement.nativeElement, 'scroll', () => {
      this.scrollToEnd();
    });
  }
  /**
   * Define panel state
   */


  setPanelState(event) {
    if (event) {
      event.stopPropagation();
    } // If controls are untouched


    if (typeof this.manualOpen === 'undefined' && typeof this.manualClose === 'undefined') {
      this.isOpen = false;
      this.handleOpen();
    } // If one of the controls is untouched and other is deactivated


    if (typeof this.manualOpen === 'undefined' && this.manualClose === false || typeof this.manualClose === 'undefined' && this.manualOpen === false) {
      this.isOpen = false;
      this.handleOpen();
    } // if controls are touched but both are deactivated


    if (this.manualOpen === false && this.manualClose === false) {
      this.isOpen = false;
      this.handleOpen();
    } // if open control is touched and activated


    if (this.manualOpen) {
      this.isOpen = false;
      this.handleOpen();
      this.manualOpen = false;
    } // if close control is touched and activated


    if (this.manualClose) {
      this.isOpen = true;
      this.handleClose();
      this.manualClose = false;
    }
  }
  /**
   * Manual controls
   */


  open() {
    this.manualOpen = true;
    this.isOpen = false;
    this.handleOpen();
  }

  close() {
    this.manualClose = true;
    this.isOpen = true;
    this.handleClose();
  }

  focus() {
    this.handleFocus(event);
  }

  clear() {
    this.remove(event);
  }
  /**
   * Remove search query
   */


  remove(e) {
    e.stopPropagation();
    this.query = '';
    this.inputCleared.emit();
    this.propagateChange(this.query);
    this.setPanelState(e);

    if (this.data && !this.data.length) {
      this.notFound = false;
    }
  }
  /**
   * Initialize historyList search
   */


  initSearchHistory() {
    this.isHistoryListVisible = false;

    if (this.historyIdentifier && !this.query) {
      const history = window.localStorage.getItem(`${this.historyIdentifier}`);

      if (history) {
        this.isHistoryListVisible = true;
        this.filteredList = [];
        this.historyList = history ? JSON.parse(history) : [];
      } else {
        this.isHistoryListVisible = false;
      }
    } else {
      this.isHistoryListVisible = false;
    }
  }

  handleOpen() {
    if (this.isOpen || this.isOpen && !this.isLoading) {
      return;
    } // If data exists


    if (this.data && this.data.length) {
      this.isOpen = true;
      this.overlay = true;
      this.filterList();
      this.opened.emit();
    }
  }

  handleClose() {
    if (!this.isOpen) {
      this.isFocused = false;
      return;
    }

    this.isOpen = false;
    this.overlay = false;
    this.filteredList = [];
    this.selectedIdx = -1;
    this.notFound = false;
    this.isHistoryListVisible = false;
    this.isFocused = false;
    this.closed.emit();
  }

  handleFocus(e) {
    this.searchInput.nativeElement.focus();

    if (this.isFocused) {
      return;
    }

    this.inputFocused.emit(e); // if data exists then open

    if (this.data && this.data.length) {
      this.setPanelState(e);
    }

    this.isFocused = true;
  }

  scrollToEnd() {
    if (this.isScrollToEnd) {
      return;
    }

    const scrollTop = this.filteredListElement.nativeElement.scrollTop;
    const scrollHeight = this.filteredListElement.nativeElement.scrollHeight;
    const elementHeight = this.filteredListElement.nativeElement.clientHeight;
    const atBottom = elementHeight != 0 && Math.abs(scrollHeight - elementHeight - scrollTop) < 1;

    if (atBottom) {
      this.scrolledToEnd.emit();
      this.isScrollToEnd = true;
    }
  }
  /**
   * Initialize keyboard events
   */


  initEventStream() {
    this.inputKeyUp$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.searchInput.nativeElement, 'keyup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(e => e));
    this.inputKeyDown$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.searchInput.nativeElement, 'keydown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(e => e));
    this.listenEventStream();
  }
  /**
   * Listen keyboard events
   */


  listenEventStream() {
    // key up event
    this.inputKeyUp$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(e => !isArrowUpDown(e.keyCode) && !isEnter(e.keyCode) && !isESC(e.keyCode) && !isTab(e.keyCode)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(this.debounceTime)).subscribe(e => {
      this.onKeyUp(e);
    }); // cursor up & down

    this.inputKeyDown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(e => isArrowUpDown(e.keyCode))).subscribe(e => {
      e.preventDefault();
      this.onFocusItem(e);
    }); // enter keyup

    this.inputKeyUp$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(e => isEnter(e.keyCode))).subscribe(e => {//this.onHandleEnter();
    }); // enter keydown

    this.inputKeyDown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(e => isEnter(e.keyCode))).subscribe(e => {
      this.onHandleEnter();
    }); // ESC

    this.inputKeyUp$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(e => isESC(e.keyCode), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(100))).subscribe(e => {
      this.onEsc();
    }); // TAB

    this.inputKeyDown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(e => isTab(e.keyCode))).subscribe(e => {
      this.onTab();
    }); // delete

    this.inputKeyDown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(e => isBackspace(e.keyCode) || isDelete(e.keyCode))).subscribe(e => {
      this.onDelete();
    });
  }
  /**
   * on keyup == when input changed
   * @param e event
   */


  onKeyUp(e) {
    this.notFound = false; // search results are unknown while typing
    // if input is empty

    if (!this.query) {
      this.notFound = false;
      this.inputChanged.emit(e.target.value);
      this.inputCleared.emit();
      this.setPanelState(e);
    } // note that '' can be a valid query


    if (!this.query && this.query !== '') {
      return;
    } // if query >= to minQueryLength


    if (this.query.length >= this.minQueryLength) {
      this.inputChanged.emit(e.target.value);
      this.filterList(); // If no results found

      if (!this.filteredList.length && !this.isLoading) {
        this.notFoundText ? this.notFound = true : this.notFound = false;
      }

      if (this.data && !this.data.length) {
        this.isOpen = true;
      }
    }
  }
  /**
   * Keyboard arrow top and arrow bottom
   * @param e event
   */


  onFocusItem(e) {
    // move arrow up and down on filteredList or historyList
    if (!this.historyList.length || !this.isHistoryListVisible) {
      // filteredList
      const totalNumItem = this.filteredList.length;

      if (e.key === 'ArrowDown') {
        let sum = this.selectedIdx;
        sum = this.selectedIdx === null ? 0 : sum + 1;
        this.selectedIdx = (totalNumItem + sum) % totalNumItem;
        this.scrollToFocusedItem(this.selectedIdx);
      } else if (e.key === 'ArrowUp') {
        if (this.selectedIdx == -1) {
          this.selectedIdx = 0;
        }

        this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
        this.scrollToFocusedItem(this.selectedIdx);
      }
    } else {
      // historyList
      const totalNumItem = this.historyList.length;

      if (e.key === 'ArrowDown') {
        let sum = this.selectedIdx;
        sum = this.selectedIdx === null ? 0 : sum + 1;
        this.selectedIdx = (totalNumItem + sum) % totalNumItem;
        this.scrollToFocusedItem(this.selectedIdx);
      } else if (e.key === 'ArrowUp') {
        if (this.selectedIdx == -1) {
          this.selectedIdx = 0;
        }

        this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
        this.scrollToFocusedItem(this.selectedIdx);
      }
    }
  }
  /**
   * Scroll to focused item
   * * @param index
   */


  scrollToFocusedItem(index) {
    let listElement = null; // Define list element

    if (!this.historyList.length || !this.isHistoryListVisible) {
      // filteredList element
      listElement = this.filteredListElement.nativeElement;
    } else {
      // historyList element
      listElement = this.historyListElement.nativeElement;
    }

    const items = Array.prototype.slice.call(listElement.childNodes).filter(node => {
      if (node.nodeType === 1) {
        // if node is element
        return node.className.includes('item');
      } else {
        return false;
      }
    });

    if (!items.length) {
      return;
    }

    const listHeight = listElement.offsetHeight;
    const itemHeight = items[index].offsetHeight;
    const visibleTop = listElement.scrollTop;
    const visibleBottom = listElement.scrollTop + listHeight - itemHeight;
    const targetPosition = items[index].offsetTop;

    if (targetPosition < visibleTop) {
      listElement.scrollTop = targetPosition;
    }

    if (targetPosition > visibleBottom) {
      listElement.scrollTop = targetPosition - listHeight + itemHeight;
    }
  }
  /**
   * Select item on enter click
   */


  onHandleEnter() {
    // click enter to choose item from filteredList or historyList
    if (this.selectedIdx > -1) {
      if (!this.historyList.length || !this.isHistoryListVisible) {
        // filteredList
        this.query = !this.isTypeString(this.filteredList[this.selectedIdx]) ? this.filteredList[this.selectedIdx][this.searchKeyword] : this.filteredList[this.selectedIdx];
        this.saveHistory(this.filteredList[this.selectedIdx]);
        this.select(this.filteredList[this.selectedIdx]);
      } else {
        // historyList
        this.query = !this.isTypeString(this.historyList[this.selectedIdx]) ? this.historyList[this.selectedIdx][this.searchKeyword] : this.historyList[this.selectedIdx];
        this.saveHistory(this.historyList[this.selectedIdx]);
        this.select(this.historyList[this.selectedIdx]);
      }
    }

    this.isHistoryListVisible = false;
    this.handleClose();
  }
  /**
   * Esc click
   */


  onEsc() {
    this.searchInput.nativeElement.blur();
    this.handleClose();
  }
  /**
   * Tab click
   */


  onTab() {
    this.searchInput.nativeElement.blur();
    this.handleClose();
  }
  /**
   * Delete click
   */


  onDelete() {
    this.isOpen = true;
  }
  /**
   * Select item to save in localStorage
   * @param selected
   */


  saveHistory(selected) {
    if (this.historyIdentifier) {
      // check if selected item exists in historyList
      if (!this.historyList.some(item => !this.isTypeString(item) ? item[this.searchKeyword] == selected[this.searchKeyword] : item == selected)) {
        this.saveHistoryToLocalStorage([selected, ...this.historyList]); // check if items don't exceed max allowed number

        if (this.historyList.length >= this.historyListMaxNumber) {
          this.historyList.splice(this.historyList.length - 1, 1);
          this.saveHistoryToLocalStorage([selected, ...this.historyList]);
        }
      } else {
        // if selected item exists in historyList swap to top in array
        if (!this.isTypeString(selected)) {
          // object logic
          const copiedHistoryList = this.historyList.slice(); // copy original historyList array

          const selectedIndex = copiedHistoryList.map(item => item[this.searchKeyword]).indexOf(selected[this.searchKeyword]);
          copiedHistoryList.splice(selectedIndex, 1);
          copiedHistoryList.splice(0, 0, selected);
          this.saveHistoryToLocalStorage([...copiedHistoryList]);
        } else {
          // string logic
          const copiedHistoryList = this.historyList.slice(); // copy original historyList array

          copiedHistoryList.splice(this.historyList.indexOf(selected), 1);
          copiedHistoryList.splice(0, 0, selected);
          this.saveHistoryToLocalStorage([...copiedHistoryList]);
        }
      }
    }
  }
  /**
   * Save item in localStorage
   * @param selected
   */


  saveHistoryToLocalStorage(selected) {
    window.localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(selected));
  }
  /**
   * Remove item from localStorage
   * @param index
   * @param e event
   */


  removeHistoryItem(index, e) {
    e.stopPropagation();
    this.historyList = this.historyList.filter((v, i) => i !== index);
    this.saveHistoryToLocalStorage(this.historyList);

    if (this.historyList.length == 0) {
      window.localStorage.removeItem(`${this.historyIdentifier}`);
      this.filterList();
    }
  }
  /**
   * Reset localStorage
   * @param e event
   */


  resetHistoryList(e) {
    e.stopPropagation();
    this.historyList = [];
    window.localStorage.removeItem(`${this.historyIdentifier}`);
    this.filterList();
  }

}

AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) {
  return new (t || AutocompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};

AutocompleteComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AutocompleteComponent,
  selectors: [["ng-autocomplete"]],
  contentQueries: function AutocompleteComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customTemplate = _t.first);
    }
  },
  viewQuery: function AutocompleteComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filteredListElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.historyListElement = _t.first);
    }
  },
  hostAttrs: [1, "ng-autocomplete"],
  hostBindings: function AutocompleteComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_click_HostBindingHandler($event) {
        return ctx.handleClick($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    data: "data",
    searchKeyword: "searchKeyword",
    placeholder: "placeholder",
    heading: "heading",
    initialValue: "initialValue",
    historyIdentifier: "historyIdentifier",
    historyHeading: "historyHeading",
    historyListMaxNumber: "historyListMaxNumber",
    notFoundText: "notFoundText",
    isLoading: "isLoading",
    debounceTime: "debounceTime",
    disabled: "disabled",
    minQueryLength: "minQueryLength",
    focusFirst: "focusFirst",
    customFilter: "customFilter",
    selectedValueRender: "selectedValueRender",
    itemTemplate: "itemTemplate",
    notFoundTemplate: "notFoundTemplate"
  },
  outputs: {
    selected: "selected",
    inputChanged: "inputChanged",
    inputFocused: "inputFocused",
    inputCleared: "inputCleared",
    opened: "opened",
    closed: "closed",
    scrolledToEnd: "scrolledToEnd"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => AutocompleteComponent),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 18,
  vars: 24,
  consts: [["aria-owns", "suggestions suggestions-history", 1, "autocomplete-container", 3, "ngClass"], [1, "input-container"], ["type", "text", "aria-autocomplete", "list", "role", "combobox", "autocomplete", "off", 3, "placeholder", "ngModel", "disabled", "ngModelChange", "input", "focus", "blur"], ["searchInput", ""], ["class", "x", 3, "click", 4, "ngIf"], ["class", "sk-fading-circle", 4, "ngIf"], ["id", "suggestions", "role", "listbox", 1, "suggestions-container", 3, "ngClass"], ["class", "heading", 4, "ngIf"], ["filteredListElement", ""], ["class", "item", 4, "ngFor", "ngForOf"], ["id", "suggestions-history", "role", "listbox", 1, "suggestions-container", 3, "ngClass"], ["historyListElement", ""], ["class", "not-found", 4, "ngIf"], ["class", "autocomplete-overlay", 3, "click", 4, "ngIf"], [1, "x", 3, "click"], ["aria-label", "Close", 1, "material-icons"], [1, "sk-fading-circle"], [1, "sk-circle1", "sk-circle"], [1, "sk-circle2", "sk-circle"], [1, "sk-circle3", "sk-circle"], [1, "sk-circle4", "sk-circle"], [1, "sk-circle5", "sk-circle"], [1, "sk-circle6", "sk-circle"], [1, "sk-circle7", "sk-circle"], [1, "sk-circle8", "sk-circle"], [1, "sk-circle9", "sk-circle"], [1, "sk-circle10", "sk-circle"], [1, "sk-circle11", "sk-circle"], [1, "sk-circle12", "sk-circle"], [1, "heading"], [1, "text"], [1, "item"], [3, "complete-selected", "click", 4, "ngIf"], [3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-label", "Delete", 1, "material-icons"], [1, "not-found"], [1, "autocomplete-overlay", 3, "click"]],
  template: function AutocompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AutocompleteComponent_Template_input_ngModelChange_2_listener($event) {
        return ctx.query = $event;
      })("input", function AutocompleteComponent_Template_input_input_2_listener($event) {
        return ctx.onChange($event);
      })("focus", function AutocompleteComponent_Template_input_focus_2_listener($event) {
        return ctx.handleFocus($event);
      })("blur", function AutocompleteComponent_Template_input_blur_2_listener($event) {
        return ctx.onTouched($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AutocompleteComponent_div_4_Template, 3, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutocompleteComponent_div_5_Template, 13, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AutocompleteComponent_div_7_Template, 3, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", null, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AutocompleteComponent_li_10_Template, 3, 2, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AutocompleteComponent_div_12_Template, 6, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", null, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AutocompleteComponent_li_15_Template, 6, 2, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AutocompleteComponent_div_16_Template, 2, 4, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AutocompleteComponent_div_17_Template, 1, 0, "div", 13);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c4, ctx.isOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.placeholder);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.query && !ctx.isLoading && !ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c5, ctx.isHistoryListVisible, !ctx.isHistoryListVisible));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredList.length > 0 && ctx.heading);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredList);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c5, !ctx.isHistoryListVisible, ctx.isHistoryListVisible));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.historyList.length > 0 && ctx.historyHeading);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.historyList);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading ? !ctx.isLoading && ctx.notFound : ctx.notFound);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.overlay);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, HighlightPipe],
  styles: ["@import\"https://fonts.googleapis.com/icon?family=Material+Icons\";.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f;position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:none;background-color:#fff;color:#000000de;width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:#0000008a;font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:white;height:auto;box-shadow:0 2px 5px #00000040;box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;color:#333;cursor:pointer;color:#000000de;font-size:15px}.autocomplete-container .suggestions-container ul li:hover,.autocomplete-container .suggestions-container .complete-selected{background-color:#9e9e9e2e}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:solid 1px #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:#0000008a;font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:solid 1px #f1f1f1;background:white}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.autocomplete-overlay{position:fixed;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}.sk-fading-circle .sk-circle2{transform:rotate(30deg)}.sk-fading-circle .sk-circle3{transform:rotate(60deg)}.sk-fading-circle .sk-circle4{transform:rotate(90deg)}.sk-fading-circle .sk-circle5{transform:rotate(120deg)}.sk-fading-circle .sk-circle6{transform:rotate(150deg)}.sk-fading-circle .sk-circle7{transform:rotate(180deg)}.sk-fading-circle .sk-circle8{transform:rotate(210deg)}.sk-fading-circle .sk-circle9{transform:rotate(240deg)}.sk-fading-circle .sk-circle10{transform:rotate(270deg)}.sk-fading-circle .sk-circle11{transform:rotate(300deg)}.sk-fading-circle .sk-circle12{transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{animation-delay:-1s}.sk-fading-circle .sk-circle4:before{animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{animation-delay:-.1s}@keyframes sk-circleFadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ng-autocomplete',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => AutocompleteComponent),
        multi: true
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        '(document:click)': 'handleClick($event)',
        'class': 'ng-autocomplete'
      },
      template: "<div class=\"autocomplete-container\" aria-owns=\"suggestions suggestions-history\" [attr.aria-expanded]=\"isOpen\"\n     [ngClass]=\"{ 'active': isOpen}\">\n  <div class=\"input-container\">\n    <input #searchInput\n           type=\"text\"\n           attr.aria-label=\"{{placeholder}}\"\n           aria-autocomplete=\"list\"\n           role=\"combobox\"\n           placeholder={{placeholder}}\n           [(ngModel)]=query\n           (input)=\"onChange($event)\"\n           (focus)=handleFocus($event)\n           (blur)=onTouched($event)\n           [disabled]=\"disabled\"\n           autocomplete=\"off\">\n    <div class=\"x\" *ngIf=\"query && !isLoading && !disabled\" (click)=\"remove($event)\">\n      <i class=\"material-icons\" aria-label=\"Close\">close</i>\n    </div>\n    <!--Loading mask-->\n    <div class=\"sk-fading-circle\" *ngIf=\"isLoading\">\n      <div class=\"sk-circle1 sk-circle\"></div>\n      <div class=\"sk-circle2 sk-circle\"></div>\n      <div class=\"sk-circle3 sk-circle\"></div>\n      <div class=\"sk-circle4 sk-circle\"></div>\n      <div class=\"sk-circle5 sk-circle\"></div>\n      <div class=\"sk-circle6 sk-circle\"></div>\n      <div class=\"sk-circle7 sk-circle\"></div>\n      <div class=\"sk-circle8 sk-circle\"></div>\n      <div class=\"sk-circle9 sk-circle\"></div>\n      <div class=\"sk-circle10 sk-circle\"></div>\n      <div class=\"sk-circle11 sk-circle\"></div>\n      <div class=\"sk-circle12 sk-circle\"></div>\n    </div>\n  </div>\n\n  <!--FilteredList items-->\n  <div class=\"suggestions-container\" id=\"suggestions\" role=\"listbox\"\n       [ngClass]=\"{ 'is-hidden': isHistoryListVisible, 'is-visible': !isHistoryListVisible}\">\n    <!--FilteredList heading-->\n    <div class=\"heading\" *ngIf=\"filteredList.length > 0 && heading\">\n      <div class=\"text\">{{heading}}</div>\n    </div>\n\n    <ul #filteredListElement>\n      <li *ngFor=\"let item of filteredList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isTypeString(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item | highlight: toHighlight }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isTypeString(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item | highlight: toHighlight : searchKeyword }\">\n          </ng-container>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--HistoryList items-->\n  <div class=\"suggestions-container\" id=\"suggestions-history\" role=\"listbox\"\n       [ngClass]=\"{ 'is-hidden': !isHistoryListVisible, 'is-visible': isHistoryListVisible}\">\n    <!--HistoryList heading-->\n    <div class=\"heading\" *ngIf=\"historyList.length > 0 && historyHeading\">\n      <div class=\"text\">{{historyHeading}}</div>\n      <div class=\"x\" (click)=\"resetHistoryList($event)\">\n        <i class=\"material-icons\" aria-label=\"Delete\">delete</i>\n      </div>\n    </div>\n\n    <ul #historyListElement>\n      <li *ngFor=\"let item of historyList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isTypeString(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isTypeString(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <div class=\"x\" (click)=\"removeHistoryItem(idx, $event)\">\n          <i class=\"material-icons\" aria-label=\"Close\">close</i>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--Not found-->\n  <div class=\"not-found\" *ngIf=\"isLoading ? !isLoading && notFound : notFound\">\n    <ng-container\n      *ngTemplateOutlet=\"notFoundTemplate;  context: { $implicit: notFoundText  }\">\n    </ng-container>\n  </div>\n</div>\n<div class=\"autocomplete-overlay\" *ngIf=\"overlay\" (click)=\"handleOverlay()\"></div>\n",
      styles: ["@import\"https://fonts.googleapis.com/icon?family=Material+Icons\";.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f;position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:none;background-color:#fff;color:#000000de;width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:#0000008a;font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:white;height:auto;box-shadow:0 2px 5px #00000040;box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;color:#333;cursor:pointer;color:#000000de;font-size:15px}.autocomplete-container .suggestions-container ul li:hover,.autocomplete-container .suggestions-container .complete-selected{background-color:#9e9e9e2e}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:solid 1px #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:#0000008a;font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:solid 1px #f1f1f1;background:white}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.autocomplete-overlay{position:fixed;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}.sk-fading-circle .sk-circle2{transform:rotate(30deg)}.sk-fading-circle .sk-circle3{transform:rotate(60deg)}.sk-fading-circle .sk-circle4{transform:rotate(90deg)}.sk-fading-circle .sk-circle5{transform:rotate(120deg)}.sk-fading-circle .sk-circle6{transform:rotate(150deg)}.sk-fading-circle .sk-circle7{transform:rotate(180deg)}.sk-fading-circle .sk-circle8{transform:rotate(210deg)}.sk-fading-circle .sk-circle9{transform:rotate(240deg)}.sk-fading-circle .sk-circle10{transform:rotate(270deg)}.sk-fading-circle .sk-circle11{transform:rotate(300deg)}.sk-fading-circle .sk-circle12{transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{animation-delay:-1s}.sk-fading-circle .sk-circle4:before{animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{animation-delay:-.1s}@keyframes sk-circleFadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    searchInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['searchInput']
    }],
    filteredListElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['filteredListElement']
    }],
    historyListElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['historyListElement']
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    searchKeyword: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    heading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    initialValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    historyIdentifier: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    historyHeading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    historyListMaxNumber: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    notFoundText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isLoading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    debounceTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minQueryLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    focusFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    customFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedValueRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    inputChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    inputFocused: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    inputCleared: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    opened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    scrolledToEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    itemTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    notFoundTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef]
    }]
  });
})();

class AutocompleteLibModule {}

AutocompleteLibModule.ɵfac = function AutocompleteLibModule_Factory(t) {
  return new (t || AutocompleteLibModule)();
};

AutocompleteLibModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AutocompleteLibModule
});
AutocompleteLibModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteLibModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule],
      declarations: [AutocompleteComponent, HighlightPipe],
      exports: [AutocompleteComponent, HighlightPipe]
    }]
  }], null, null);
})();
/*
 * Public API Surface of autocomplete-lib
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=9611.js.map