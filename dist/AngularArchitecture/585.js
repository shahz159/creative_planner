"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([[585],{

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
//# sourceMappingURL=585.js.map