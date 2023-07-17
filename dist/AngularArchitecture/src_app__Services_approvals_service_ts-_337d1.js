"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["src_app__Services_approvals_service_ts-_337d1"],{

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
    GetRejectComments(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.rejectType = obj.rejectType;
        this.obj_approvalDTO.Status = obj.Status;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewGetRejectCommentsbyRejectType", this.obj_approvalDTO);
    }
    GetGlobalRejectComments(obj) {
        this.obj_approvalDTO.Emp_no = obj.Emp_no;
        this.obj_approvalDTO.rejectType = obj.rejectType;
        return this.http.post(this.rootUrl + "ApprovalAPI/NewGetGlobalRejectComments", this.obj_approvalDTO);
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


/***/ })

}]);
//# sourceMappingURL=src_app__Services_approvals_service_ts-_337d1.js.map