"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["common"],{

/***/ 84956:
/*!***********************************!*\
  !*** ./src/app/Directive/sort.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 66402:
/*!***************************************!*\
  !*** ./src/app/_Models/policy-dto.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyDTO": () => (/* binding */ PolicyDTO)
/* harmony export */ });
class PolicyDTO {
}


/***/ }),

/***/ 81196:
/*!*********************************************!*\
  !*** ./src/app/_Services/policy.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyService": () => (/* binding */ PolicyService)
/* harmony export */ });
/* harmony import */ var _Models_policy_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_Models/policy-dto */ 66402);
/* harmony import */ var _Models_employee_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_Models/employee-dto */ 10397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _apiurl_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiurl.service */ 77983);





class PolicyService {
    constructor(http, commonUrl) {
        this.http = http;
        this.commonUrl = commonUrl;
        this.rootUrl = this.commonUrl.apiurl;
        this.ObjPolicyDTO = new _Models_policy_dto__WEBPACK_IMPORTED_MODULE_0__.PolicyDTO;
        this.objEmpDetailsDTO = new _Models_employee_dto__WEBPACK_IMPORTED_MODULE_1__.EmployeeDTO;
    }
    GetPolicyDetails(userId) {
        this.ObjPolicyDTO.UserId = userId;
        return this.http.post(this.rootUrl + "Policy/NewGetPolicyDetails", this.ObjPolicyDTO);
    }
    InsertUserPolicyAgreement(policyId, userId) {
        this.ObjPolicyDTO.PolicyId = policyId;
        this.ObjPolicyDTO.UserId = userId;
        return this.http.post(this.rootUrl + "Policy/NewInsertUserPolicyAgreement", this.ObjPolicyDTO);
    }
    ChangeUserPassword(obj) {
        this.objEmpDetailsDTO.Emp_No = obj.Emp_No;
        this.objEmpDetailsDTO.OldPassword = obj.OldPassword;
        this.objEmpDetailsDTO.NewPassword = obj.NewPassword;
        this.objEmpDetailsDTO.ConfirmPassword = obj.ConfirmPassword;
        return this.http.post(this.rootUrl + "Policy/NewUpdateUserPassword", this.objEmpDetailsDTO);
    }
}
PolicyService.ɵfac = function PolicyService_Factory(t) { return new (t || PolicyService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_apiurl_service__WEBPACK_IMPORTED_MODULE_2__.ApiurlService)); };
PolicyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PolicyService, factory: PolicyService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map