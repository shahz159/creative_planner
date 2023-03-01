"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["src_app__LayoutDashboard_notification_notification_module_ts-src_app__Services_approvals_serv-4c3305"],{

/***/ 64065:
/*!******************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/notification/notification-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationRoutingModule": () => (/* binding */ NotificationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.component */ 2352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _notification_component__WEBPACK_IMPORTED_MODULE_0__.NotificationComponent,
        children: [
            {
                path: 'projectinfo/:projectcode/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_amcharts_amcharts4_charts_js-node_modules_amcharts_amcharts4_core_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app__LayoutDashboard_to-do-projects_to-do-projects_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_projects-summary_projects-summary_component_ts"), __webpack_require__.e("default-src_app__Services_link_service_ts-node_modules_underscore_modules_index-all_js"), __webpack_require__.e("default-src_app__LayoutDashboard_project-info_project-info_module_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_portfolio-projects_portfolio-projects_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_view-dashboard-projects_view-dashboard-projects_component_ts"), __webpack_require__.e("default-src_app__LayoutDashboard_projects-add_projects-add_component_ts"), __webpack_require__.e("src_app_Directive_sort_ts-src_app__Services_bs-service_service_ts-node_modules_ng2-search-fil-cccc68")]).then(__webpack_require__.bind(__webpack_require__, /*! ../project-info/project-info.module */ 71784)).then(m => m.ProjectInfoModule)
            }
        ]
    }];
class NotificationRoutingModule {
}
NotificationRoutingModule.ɵfac = function NotificationRoutingModule_Factory(t) { return new (t || NotificationRoutingModule)(); };
NotificationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NotificationRoutingModule });
NotificationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotificationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 39472:
/*!**********************************************************************!*\
  !*** ./src/app/_LayoutDashboard/notification/notification.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationModule": () => (/* binding */ NotificationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-routing.module */ 64065);
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component */ 2352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class NotificationModule {
}
NotificationModule.ɵfac = function NotificationModule_Factory(t) { return new (t || NotificationModule)(); };
NotificationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NotificationModule });
NotificationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotificationModule, { declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationRoutingModule], exports: [_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent] }); })();


/***/ }),

/***/ 62424:
/*!*****************************************!*\
  !*** ./src/app/_Models/approval-dto.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    NewResponseService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Request_Date = obj.Request_Date;
        this.obj_approvalDTO.Request_type = obj.Request_type;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewResponseServiceforApprovals", this.obj_approvalDTO);
    }
    GetRejectComments(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.rejectType = obj.rejectType;
        this.obj_approvalDTO.Status = obj.Status;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewGetRejectCommentsbyRejectType", this.obj_approvalDTO);
    }
    InsertAcceptApprovalService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Request_type = obj.Request_type;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertAcceptApprovalService", this.obj_approvalDTO);
    }
    InsertTransferApprovalService(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.Responsible = obj.Responsible;
        this.obj_approvalDTO.deadline = obj.deadline;
        this.obj_approvalDTO.Project_Code = obj.Project_Code;
        this.obj_approvalDTO.Remarks = obj.Remarks;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertTransferApprovalService", this.obj_approvalDTO);
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

/***/ 32278:
/*!***************************************************!*\
  !*** ./src/app/_Services/notification.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=src_app__LayoutDashboard_notification_notification_module_ts-src_app__Services_approvals_serv-4c3305.js.map