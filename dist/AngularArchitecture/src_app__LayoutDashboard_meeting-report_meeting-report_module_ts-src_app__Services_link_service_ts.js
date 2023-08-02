"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["src_app__LayoutDashboard_meeting-report_meeting-report_module_ts-src_app__Services_link_service_ts"],{

/***/ 76187:
/*!**********************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/meeting-report/meeting-report-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetingReportRoutingModule": () => (/* binding */ MeetingReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _meeting_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meeting-report.component */ 5131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _meeting_report_component__WEBPACK_IMPORTED_MODULE_0__.MeetingReportComponent,
        children: [
            {
                path: 'ActionToAssign/:id',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app__LayoutDashboard_action-to-assign_action-to-assign_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../action-to-assign/action-to-assign.module */ 36833)).then(m => m.ActionToAssignModule)
            }
        ]
    }];
class MeetingReportRoutingModule {
}
MeetingReportRoutingModule.ɵfac = function MeetingReportRoutingModule_Factory(t) { return new (t || MeetingReportRoutingModule)(); };
MeetingReportRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MeetingReportRoutingModule });
MeetingReportRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MeetingReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8347:
/*!**************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/meeting-report/meeting-report.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetingReportModule": () => (/* binding */ MeetingReportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _meeting_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meeting-report.component */ 5131);
/* harmony import */ var _meeting_report_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meeting-report-routing.module */ 76187);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @kolkov/angular-editor */ 167);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project-unplanned-task/project-unplanned-task.component */ 32444);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);









class MeetingReportModule {
}
MeetingReportModule.ɵfac = function MeetingReportModule_Factory(t) { return new (t || MeetingReportModule)(); };
MeetingReportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MeetingReportModule });
MeetingReportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _project_unplanned_task_project_unplanned_task_component__WEBPACK_IMPORTED_MODULE_2__.ProjectUnplannedTaskComponent
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__.NgSelectModule,
        _meeting_report_routing_module__WEBPACK_IMPORTED_MODULE_1__.MeetingReportRoutingModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_6__.AngularEditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MeetingReportModule, { declarations: [_meeting_report_component__WEBPACK_IMPORTED_MODULE_0__.MeetingReportComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__.NgSelectModule,
        _meeting_report_routing_module__WEBPACK_IMPORTED_MODULE_1__.MeetingReportRoutingModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_6__.AngularEditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule] }); })();


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
}
LinkService.ɵfac = function LinkService_Factory(t) { return new (t || LinkService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_apiurl_service__WEBPACK_IMPORTED_MODULE_2__.ApiurlService)); };
LinkService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LinkService, factory: LinkService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app__LayoutDashboard_meeting-report_meeting-report_module_ts-src_app__Services_link_service_ts.js.map