(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@amcharts/amcharts4/.internal/themes/animated.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/themes/animated.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Registry */ "./node_modules/@amcharts/amcharts4/.internal/core/Registry.js");

var theme = function (object) {
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "SpriteState")) {
        object.transitionDuration = 400;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Component")) {
        object.rangeChangeDuration = 500;
        object.interpolationDuration = 500;
        object.sequencedInterpolation = false;
        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "SankeyDiagram")) {
            object.sequencedInterpolation = true;
        }
        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "FunnelSeries")) {
            object.sequencedInterpolation = true;
        }
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Chart")) {
        object.defaultState.transitionDuration = 2000;
        object.hiddenState.transitionDuration = 1000;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Tooltip")) {
        object.animationDuration = 400;
        object.defaultState.transitionDuration = 400;
        object.hiddenState.transitionDuration = 400;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Scrollbar")) {
        object.animationDuration = 500;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Series")) {
        object.defaultState.transitionDuration = 1000;
        object.hiddenState.transitionDuration = 700;
        object.hiddenState.properties.opacity = 1;
        object.showOnInit = true;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "MapSeries")) {
        object.hiddenState.properties.opacity = 0;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "PercentSeries")) {
        object.hiddenState.properties.opacity = 0;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "FunnelSlice")) {
        object.defaultState.transitionDuration = 800;
        object.hiddenState.transitionDuration = 1000;
        object.hiddenState.properties.opacity = 1;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Slice")) {
        object.defaultState.transitionDuration = 700;
        object.hiddenState.transitionDuration = 1000;
        object.hiddenState.properties.opacity = 1;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Preloader")) {
        object.hiddenState.transitionDuration = 2000;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Column")) {
        object.defaultState.transitionDuration = 700;
        object.hiddenState.transitionDuration = 1000;
        object.hiddenState.properties.opacity = 1;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Column3D")) {
        object.hiddenState.properties.opacity = 0;
    }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);
//# sourceMappingURL=animated.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/themes/animated.js":
/*!*************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/themes/animated.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_themes_animated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.internal/themes/animated */ "./node_modules/@amcharts/amcharts4/.internal/themes/animated.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _internal_themes_animated__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=animated.js.map

/***/ }),

/***/ "./src/app/Directive/sort.ts":
/*!***********************************!*\
  !*** ./src/app/Directive/sort.ts ***!
  \***********************************/
/*! exports provided: Sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
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

/***/ "./src/app/_Models/policy-dto.ts":
/*!***************************************!*\
  !*** ./src/app/_Models/policy-dto.ts ***!
  \***************************************/
/*! exports provided: PolicyDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyDTO", function() { return PolicyDTO; });
class PolicyDTO {
}


/***/ }),

/***/ "./src/app/_Services/policy.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_Services/policy.service.ts ***!
  \*********************************************/
/*! exports provided: PolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyService", function() { return PolicyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Models_policy_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_Models/policy-dto */ "./src/app/_Models/policy-dto.ts");
/* harmony import */ var _Models_employee_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_Models/employee-dto */ "./src/app/_Models/employee-dto.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _apiurl_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apiurl.service */ "./src/app/_Services/apiurl.service.ts");






class PolicyService {
    constructor(http, commonUrl) {
        this.http = http;
        this.commonUrl = commonUrl;
        this.rootUrl = this.commonUrl.apiurl;
        this.ObjPolicyDTO = new _Models_policy_dto__WEBPACK_IMPORTED_MODULE_1__["PolicyDTO"];
        this.objEmpDetailsDTO = new _Models_employee_dto__WEBPACK_IMPORTED_MODULE_2__["EmployeeDTO"];
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
PolicyService.ɵfac = function PolicyService_Factory(t) { return new (t || PolicyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_apiurl_service__WEBPACK_IMPORTED_MODULE_4__["ApiurlService"])); };
PolicyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PolicyService, factory: PolicyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolicyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _apiurl_service__WEBPACK_IMPORTED_MODULE_4__["ApiurlService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map