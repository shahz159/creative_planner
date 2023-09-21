(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["default-src_app__LayoutDashboard_project-info_truncate_pipe_ts-src_app__LayoutDashboard_to-do-5edd93"],{

/***/ 99457:
/*!****************************************************************!*\
  !*** ./src/app/_LayoutDashboard/project-info/truncate.pipe.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TruncatePipe": () => (/* binding */ TruncatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class TruncatePipe {
    transform(value, maxLength) {
        return value.length > maxLength ? value.slice(0, maxLength).toString() + '...' : value;
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncate", type: TruncatePipe, pure: true });


/***/ }),

/***/ 80872:
/*!*****************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/to-do-projects/to-do-projects.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDoProjectsComponent": () => (/* binding */ ToDoProjectsComponent)
/* harmony export */ });
/* harmony import */ var D_WorkSpace_Angular_Projects_creative_planner_creative_planner_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_Models_sub_task_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_Models/sub-task-dto */ 9962);
/* harmony import */ var src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_Models/user-details-dto */ 12359);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_Models_dropdown_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_Models/dropdown-dto */ 79536);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);
/* harmony import */ var src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_Services/notification.service */ 32278);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_Services/bs-service.service */ 77585);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ 9991);





 //import { CompletedProjectsDTO } from 'src/app/_Models/completed-projects-dto';















function ToDoProjectsComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", ctx_r0.CurrentPageNo, " - ", ctx_r0._CurrentpageRecords, " ");
  }
}

function ToDoProjectsComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", ctx_r1._CurrentpageRecords * (ctx_r1.CurrentPageNo - 1) + 1, " - ", ctx_r1._CurrentpageRecords * ctx_r1.CurrentPageNo, " ");
  }
}

function ToDoProjectsComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", ctx_r2.lastPagerecords * (ctx_r2.CurrentPageNo - 1) + 1, " - ", ctx_r2.lastPagerecords * (ctx_r2.CurrentPageNo - 1) + ctx_r2._CurrentpageRecords, " ");
  }
}

function ToDoProjectsComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r3._totalProjectsCount.toLocaleString(), "");
  }
}

function ToDoProjectsComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r4._totalProjectsCount, "");
  }
}

function ToDoProjectsComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 180)(1, "label", 181)(2, "input", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ToDoProjectsComponent_div_71_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r33);
      const item_r30 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r32.isTypeChecked(item_r30));
    })("ngModelChange", function ToDoProjectsComponent_div_71_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r33);
      const item_r30 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](item_r30.checked = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", item_r30.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r30.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r30.Count);
  }
}

function ToDoProjectsComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 180)(1, "label", 184)(2, "input", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ToDoProjectsComponent_div_78_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const item_r35 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r36.isStatusChecked(item_r35));
    })("ngModelChange", function ToDoProjectsComponent_div_78_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const item_r35 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](item_r35.checked = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", item_r35.checked)("checked", item_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r35.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r35.Count);
  }
}

function ToDoProjectsComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 180)(1, "label", 184)(2, "input", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ToDoProjectsComponent_div_85_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r41);
      const item_r39 = restoredCtx.$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r40.isEmpChecked(item_r39));
    })("ngModelChange", function ToDoProjectsComponent_div_85_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r41);
      const item_r39 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](item_r39.checked = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", item_r39.checked)("checked", item_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r39.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r39.Count);
  }
}

const _c0 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  return {
    "text-danger": a0,
    "text-Completed": a1,
    "text-warning": a2,
    "text-underApp": a3,
    "text-primary": a4,
    "text-Rejected": a5,
    "text-underApproval": a6,
    "text-underApproval": a7,
    "text-info": a8,
    "text-CompleteRejected": a9,
    "text-Todo": a10
  };
};

function ToDoProjectsComponent_li_105_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunctionV"](2, _c0, [item_r43.Status == "Project Hold", item_r43.Status == "Completed", item_r43.Status == "InProcess", item_r43.Status == "Under Approval", item_r43.Status == "Completion Under Approval", item_r43.Status == "New Project Rejected", item_r43.Status == "Enactive Under Approval", item_r43.Status == "Forward Under Approval", item_r43.Status == "New Project", item_r43.Status == "Project Complete Rejected", item_r43.Status == "ToDo Completed"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r43.Status, "");
  }
}

function ToDoProjectsComponent_li_105_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", item_r43.Status, " ", item_r43.Delaydays, " days");
  }
}

function ToDoProjectsComponent_li_105_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function ToDoProjectsComponent_li_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_li_105_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50);
      const item_r43 = restoredCtx.$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r49.OnProjectClick(item_r43.Project_Code, item_r43.Project_Name, item_r43.Project_Owner, item_r43.Team_Res, item_r43.Team_Autho, item_r43.Team_Informer, item_r43.Team_Coor, item_r43.Team_Support, item_r43.EmpNo_Owner, item_r43.EmpNo_Res, item_r43.EmpNo_Autho, item_r43.EmpNo_Coor, item_r43.EmpNo_Informer, item_r43.EmpNo_Support, item_r43.Emp_Comp_No, item_r43.Project_Block, item_r43.Project_Description, item_r43.DPG, item_r43.Exec_BlockName, item_r43.DeadLine, item_r43.Status, item_r43.Delaydays, item_r43.Chkboxvalue, item_r43.Project_Cost, item_r43.Duration, item_r43.StandardDuration, item_r43.Client_Name, item_r43.Remarks, item_r43.Remarkss, item_r43.CD, item_r43.ReportType, item_r43.Attachments, item_r43.id, item_r43.Sourcefile, item_r43.SubmissionType, item_r43.IsCloud));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "p", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 180)(5, "p", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ToDoProjectsComponent_li_105_p_10_Template, 2, 14, "p", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, ToDoProjectsComponent_li_105_p_11_Template, 2, 2, "p", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, ToDoProjectsComponent_li_105_p_12_Template, 2, 0, "p", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "p", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const item_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r43.Project_Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r43.Team_Res);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r43.Exec_BlockName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r43.Status != "Delay" && item_r43.Status != "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r43.Status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r43.Status == "Project Hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Date : ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](15, 7, item_r43.DeadLine, "dd-MM-yyyy"), "");
  }
}

function ToDoProjectsComponent_button_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_button_116_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r51.sweetAlert());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r9.addbutton_hidden);
  }
}

function ToDoProjectsComponent_input_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "input", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_input_123_Template_input_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r53.OnClickCheckboxProjectUpdate($event.target.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r10.Checkbox_checked == "1")("checked", ctx_r10.Checkbox_checked == "1");
  }
}

function ToDoProjectsComponent_span_126_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_span_126_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r55.OnEditProject(ctx_r55.Pid, ctx_r55._ProjectName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "EidtBtn_", ctx_r11.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r11.Editbutton);
  }
}

function ToDoProjectsComponent_span_138_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_span_138_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r57.OnEditProject_Desc(ctx_r57.Pid, ctx_r57.Proj_Desc));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "EidtBtn_", ctx_r12.Pid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r12.Editbutton);
  }
}

const _c1 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  return {
    "text-danger": a0,
    "text-Completed": a1,
    "text-warning": a2,
    "text-underApp": a3,
    "text-primary": a4,
    "text-Rejected": a5,
    "text-underApproval": a6,
    "text-underApproval2": a7,
    "text-info": a8,
    "text-CompleteRejected": a9,
    "text-Todo": a10
  };
};

function ToDoProjectsComponent_span_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunctionV"](2, _c1, [ctx_r13.Project_Status == "Project Hold", ctx_r13.Project_Status == "Completed", ctx_r13.Project_Status == "InProcess", ctx_r13.Project_Status == "Under Approval", ctx_r13.Project_Status == "Completion Under Approval", ctx_r13.Project_Status == "New Project Rejected", ctx_r13.Project_Status == "Enactive Under Approval", ctx_r13.Project_Status == "Forward Under Approval", ctx_r13.Project_Status == "New Project", ctx_r13.Project_Status == "Project Complete Rejected", ctx_r13.Project_Status == "ToDo Completed"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r13.Project_Status, " ");
  }
}

function ToDoProjectsComponent_span_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", ctx_r14.Project_Status, " ", ctx_r14.delaydays, " days ");
  }
}

function ToDoProjectsComponent_span_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Hold ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function ToDoProjectsComponent_span_160_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](4, 1, ctx_r16.PEndDT, "dd-MM-yyyy"));
  }
}

function ToDoProjectsComponent_span_161_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r17.SubmissionType);
  }
}

function ToDoProjectsComponent_b_164_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r18.Duration, " Hrs");
  }
}

function ToDoProjectsComponent_b_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r19.standardDuration);
  }
}

function ToDoProjectsComponent_span_180_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r20.ReportType);
  }
}

function ToDoProjectsComponent_span_181_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](4, 1, ctx_r21.CD, "dd-MM-yyyy"));
  }
}

function ToDoProjectsComponent_span_183_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "a", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_span_183_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r59.LoadDocument(ctx_r59.cloud, ctx_r59._ProjectCode, ctx_r59.EmpNo_Res, ctx_r59.Attachments));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r22.FileName);
  }
}

function ToDoProjectsComponent_span_184_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r23.Remarks);
  }
}

function ToDoProjectsComponent_div_187_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "input", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_div_187_input_1_Template_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r76);
      const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r74.OnSubtaskClick(item_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", item_r61.Team_Autho != ctx_r63.CurrentUser_ID);
  }
}

function ToDoProjectsComponent_div_187_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_div_187_span_6_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r80);
      const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r78.OnEditProject(item_r61.id, item_r61.Project_Name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "EidtBtn_", item_r61.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r64.Editbutton);
  }
}

function ToDoProjectsComponent_div_187_span_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_div_187_span_18_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r84);
      const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r82.OnEditProject_Desc(item_r61.id, item_r61.Project_Description));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r65.Editbutton);
  }
}

function ToDoProjectsComponent_div_187_i_39_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "*Allocation per day limit is 10 hours.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function ToDoProjectsComponent_div_187_i_39_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Please enter the hours less than or equal to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " hours!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r61.SubtaskDuration * 10);
  }
}

function ToDoProjectsComponent_div_187_i_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 92)(1, "b")(2, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_div_187_i_39_Template_span_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r90);
      const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r88.OnEditProject_Alloc(item_r61.id, item_r61.SubtaskAllocated));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "i", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 212)(7, "div", 73)(8, "input", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ToDoProjectsComponent_div_187_i_39_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r90);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r91._modelProjAlloc = $event);
    })("keydown.enter", function ToDoProjectsComponent_div_187_i_39_Template_input_keydown_enter_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r90);
      const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r92.onProject_updateDuration(item_r61.id, item_r61.Project_Code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ToDoProjectsComponent_div_187_i_39_span_9_Template, 2, 0, "span", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ToDoProjectsComponent_div_187_i_39_span_10_Template, 5, 1, "span", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 75)(12, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_div_187_i_39_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r90);
      const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r94.onProject_updateDuration(item_r61.id, item_r61.Project_Code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_div_187_i_39_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r90);
      const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r96.onCancel(item_r61.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "Span_DescName_all", item_r61.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r61.SubtaskAllocated, " Hrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx_r66.Editbutton);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "spanTextarea_all", item_r61.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "textareafocus_all", item_r61.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r66._modelProjAlloc);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r66._modelProjAlloc > item_r61.SubtaskDuration * 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r66._modelProjAlloc > item_r61.SubtaskDuration * 10);
  }
}

function ToDoProjectsComponent_div_187_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", item_r61.SubtaskAllocated, " Hrs");
  }
}

function ToDoProjectsComponent_div_187_span_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r61.Subtask_Res, "");
  }
}

const _c2 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
  return {
    "text-Completed": a0,
    "text-warning": a1,
    "text-underApp": a2,
    "text-primary": a3,
    "text-Rejected": a4,
    "text-underApproval": a5,
    "text-underApproval": a6,
    "text-info": a7,
    "text-CompleteRejected": a8,
    "text-Todo": a9
  };
};

function ToDoProjectsComponent_div_187_span_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 233)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunctionV"](2, _c2, [item_r61.SubProject_Status == "Completed", item_r61.SubProject_Status == "InProcess", item_r61.SubProject_Status == "Under Approval", item_r61.SubProject_Status == "Completion Under Approval", item_r61.SubProject_Status == "New Project Rejected", item_r61.SubProject_Status == "Enactive Under Approval", item_r61.SubProject_Status == "Forward Under Approval", item_r61.SubProject_Status == "New Project", item_r61.SubProject_Status == "Project Complete Rejected", item_r61.SubProject_Status == "ToDo Completed"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r61.SubProject_Status, "");
  }
}

function ToDoProjectsComponent_div_187_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 234)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", item_r61.SubProject_Status, " ", item_r61.Delaydays, " days");
  }
}

function ToDoProjectsComponent_div_187_span_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "a", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_div_187_span_52_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r105);
      const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r103.LoadDocument(item_r61.IsCloud, item_r61.Project_Code, item_r61.Team_Res, item_r61.CompleteProofDoc));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r61.Sourcefile);
  }
}

function ToDoProjectsComponent_div_187_span_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r61.Remarks);
  }
}

const _c3 = function (a0) {
  return {
    "bg-custom": a0
  };
};

function ToDoProjectsComponent_div_187_Template(rf, ctx) {
  if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ToDoProjectsComponent_div_187_input_1_Template, 1, 1, "input", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 209)(3, "p", 210)(4, "span", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ToDoProjectsComponent_div_187_span_6_Template, 2, 2, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 212)(8, "div", 73)(9, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ToDoProjectsComponent_div_187_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r109);
      const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r108._modelProjectName = $event);
    })("keydown.enter", function ToDoProjectsComponent_div_187_Template_input_keydown_enter_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r109);
      const item_r61 = restoredCtx.$implicit;
      const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r110.OnProject_Rename(item_r61.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 75)(11, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_div_187_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r109);
      const item_r61 = restoredCtx.$implicit;
      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r111.OnProject_Rename(item_r61.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_div_187_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r109);
      const item_r61 = restoredCtx.$implicit;
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r112.onCancel(item_r61.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "p", 213)(16, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, ToDoProjectsComponent_div_187_span_18_Template, 2, 1, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "span", 212)(20, "div", 73)(21, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ToDoProjectsComponent_div_187_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r109);
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r113._modelProjDesc = $event);
    })("keydown.enter", function ToDoProjectsComponent_div_187_Template_input_keydown_enter_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r109);
      const item_r61 = restoredCtx.$implicit;
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r114.OnProject_Rename(item_r61.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 75)(23, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_div_187_Template_button_click_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r109);
      const item_r61 = restoredCtx.$implicit;
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r115.OnProject_Rename(item_r61.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_div_187_Template_button_click_25_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r109);
      const item_r61 = restoredCtx.$implicit;
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r116.onCancel(item_r61.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "p", 216)(28, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "span", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](34, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](37, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, ToDoProjectsComponent_div_187_i_39_Template, 16, 8, "i", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, ToDoProjectsComponent_div_187_ng_template_40_Template, 4, 1, "ng-template", null, 219, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](43, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](46, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "p", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, ToDoProjectsComponent_div_187_span_48_Template, 4, 1, "span", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, ToDoProjectsComponent_div_187_span_49_Template, 3, 13, "span", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, ToDoProjectsComponent_div_187_span_50_Template, 3, 2, "span", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "p", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](52, ToDoProjectsComponent_div_187_span_52_Template, 5, 1, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](53, ToDoProjectsComponent_div_187_span_53_Template, 4, 1, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const item_r61 = ctx.$implicit;

    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](41);

    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](33, _c3, item_r61.Team_Autho == ctx_r24.CurrentUser_ID));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r61.SubProject_Status != "Under Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "SpanProjName_", item_r61.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r61.Project_Name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.CurrentUser_ID == ctx_r24.EmpNo_Own || ctx_r24.CurrentUser_ID == ctx_r24.EmpNo_Res || ctx_r24.CurrentUser_ID == ctx_r24.EmpNo_Autho);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "spanTextbox_", item_r61.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "textboxfocus_", item_r61.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r24._modelProjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "Span_DescName_", item_r61.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r61.Project_Description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.CurrentUser_ID == ctx_r24.EmpNo_Own || ctx_r24.CurrentUser_ID == ctx_r24.EmpNo_Res || ctx_r24.CurrentUser_ID == ctx_r24.EmpNo_Autho);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "spanTextarea_", item_r61.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "textareafocus_", item_r61.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r24._modelProjDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](32, 24, item_r61.StartDate, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](37, 27, item_r61.SubProject_DeadLine, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r61.SubtaskAllocated == 0 && ctx_r24.CurrentUser_ID == ctx_r24.EmpNo_Res)("ngIfElse", _r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](46, 30, item_r61.Project_Cost, "SAR "));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r61.Subtask_Res);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r61.SubProject_Status != "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r61.SubProject_Status == "Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r61.Sourcefile != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r61.Remarks && item_r61.Remarks != "undefined" && item_r61.Remarks != "");
  }
}

function ToDoProjectsComponent_div_197_div_6_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, item_r118.CD));
  }
}

function ToDoProjectsComponent_div_197_div_6_i_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 203);
  }
}

function ToDoProjectsComponent_div_197_div_6_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r118.Remarks);
  }
}

function ToDoProjectsComponent_div_197_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 106)(1, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "input", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div")(4, "p", 245)(5, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "p", 187)(10, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "p", 187)(16, "span", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "span", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, ToDoProjectsComponent_div_197_div_6_span_24_Template, 4, 3, "span", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](30, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](33, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "p", 187)(35, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, ToDoProjectsComponent_div_197_div_6_i_36_Template, 1, 0, "i", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "a", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_div_197_div_6_Template_a_click_37_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r126);
      const item_r118 = restoredCtx.$implicit;
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r125.LoadDocument(item_r118.IsCloud, item_r118.Project_Code, item_r118.Team_Res, item_r118.CompleteProofDoc));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, ToDoProjectsComponent_div_197_div_6_span_40_Template, 4, 1, "span", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const item_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r118.SubProject_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r118.Project_Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r118.Subtask_Res);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 11, item_r118.StartDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](23, 13, item_r118.SubProject_DeadLine));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r118.SubProject_Status == "Completed" && item_r118.CD);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", item_r118.SubtaskAllocated, " Hrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](33, 15, item_r118.Project_Cost, "SAR "));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r118.Sourcefile != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r118.Sourcefile);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r118.Remarks && item_r118.Remarks != "undefined" && item_r118.Remarks != "");
  }
}

function ToDoProjectsComponent_div_197_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 237)(1, "div", 238)(2, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 240)(5, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ToDoProjectsComponent_div_197_div_6_Template, 41, 18, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r25.CompletedList);
  }
}

function ToDoProjectsComponent_div_375_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 166)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Attachments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 167)(6, "div", 49)(7, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "svg", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "path", 169)(10, "path", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 171)(12, "input", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ToDoProjectsComponent_div_375_Template_input_change_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r128);
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r127.onFileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "label", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Select a file");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, " *Accept only pdf files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}

function ToDoProjectsComponent_button_383_Template(rf, ctx) {
  if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_button_383_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r130);
      const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r129.updateMainProject());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r27._remarks == "" || ctx_r27.selectedFile == null);
  }
}

function ToDoProjectsComponent_button_384_Template(rf, ctx) {
  if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_button_384_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r132);
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r131.updateMainProject());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r28._remarks == "");
  }
}

const _c4 = function (a0) {
  return {
    "kt-checkbox kt-checkbox--bold kt-checkbox--brand": a0
  };
};

class ToDoProjectsComponent {
  constructor(service, notifyService, router, http, dialog, dateAdapter, BsService) {
    this.service = service;
    this.notifyService = notifyService;
    this.router = router;
    this.http = http;
    this.dialog = dialog;
    this.dateAdapter = dateAdapter;
    this.BsService = BsService;
    this.disablePreviousDate = new Date();
    this.disableAfterStartDate = new Date();
    this.edited = false;
    this.CurrentPageNo = 1;
    this._CurrentpageRecords = 30;
    this.onradioclick = false;
    this.titles = true;
    this.addbutton_hidden = true;
    this._subtaskDetails = true;
    this._projectDetails = true;
    this._CompletedDetails = true;
    this._EmployeeListForDropdown = [];
    this._Projecttest = [];
    this.Proj_checkbox = true;
    this._topbar = true;
    this.paragraph_msg = false;
    this.activeClass = false;
    this.dropdownSettings_EMP = {};
    this.Remarks = "";
    this.Remarkss = "";
    this.CD = "";
    this.Attachments = "";
    this.FileName = null;
    this.selected_Employee = [];
    this.selectedEmpNo = null;
    this.Block3 = true;
    this.clicks = 0;
    this.A2Z = true;
    this.Z2A = false;
    this.AddTask = false;
    this.MatInput = true;
    this.ButtonAdd = true;
    this.TaskName = "";
    this._remarks = "";
    this.FolderPath = "D:/Application/creativeplanner_angular/creativeplanner_angular/src/assets/Project_Completion";
    this.fileToUpload = null;
    this.Sub_ProjectName = "";
    this._EndDate = null;
    this._StartDate = null;
    this.selectedFile = null; ////////////////------------------------------- Filters ------------------------------///////////////

    this.EmpCountInFilter = [];
    this.TypeContInFilter = [];
    this.StatusCountFilter = [];
    this.checkedItems_Status = [];
    this.checkedItems_Type = [];
    this.checkedItems_Emp = [];
    this.selectedItem_Status = [];
    this.selectedItem_Type = [];
    this.selectedItem_Emp = [];
    this._objDropdownDTO = new src_app_Models_dropdown_dto__WEBPACK_IMPORTED_MODULE_3__.DropdownDTO();
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy

    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    this.campaignOne = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl()
    });
    this.ObjUserDetails = new src_app_Models_user_details_dto__WEBPACK_IMPORTED_MODULE_2__.UserDetailsDTO();
    this.ObjSubTaskDTO = new src_app_Models_sub_task_dto__WEBPACK_IMPORTED_MODULE_1__.SubTaskDTO();
    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
    this.disableAfterStartDate.setDate(this.disablePreviousDate.getDate());
  }

  ngOnInit() {
    this.CurrentUser_ID = localStorage.getItem('EmpNo'); //this._ProjectName = "Project Name"

    this.GetProjectsByUserName(); // this.applyFilters();
    //uploaded file name

    $(document).on('change', '.custom-file-input', function (event) {
      $(this).next('.custom-file-label').html(event.target.files[0].name);
    });
  }

  GetProjectsByUserName() {
    this.ObjUserDetails.PageNumber = this.CurrentPageNo;
    this.ObjUserDetails.PageSize = 30;
    this.service.GetProjectsByUserName_Service_ForProjectsTODO(this.ObjUserDetails).subscribe(data => {
      this._totalProjectsCount = data[0]['ProjectsCount_Json']; // console.log(this._totalProjectsCount);

      this._ProjectDataList = JSON.parse(data[0]['Projects_Json']);

      if (this._ProjectDataList) {
        this._CurrentpageRecords = this._ProjectDataList.length;
      }

      if (this.selectedItem_Emp.length == 0) {
        this.EmpCountInFilter = JSON.parse(data[0]['Employee_json']);
      } else {
        this.EmpCountInFilter = this.selectedItem_Emp[0];
      } //Type


      if (this.selectedItem_Type.length == 0) {
        this.TypeContInFilter = JSON.parse(data[0]['ProjectType_json']);
      } else {
        this.TypeContInFilter = this.selectedItem_Type[0];
      } //Status


      if (this.selectedItem_Status.length == 0) {
        this.StatusCountFilter = JSON.parse(data[0]['Status_json']);
      } else {
        this.StatusCountFilter = this.selectedItem_Status[0];
      }

      this._totalProjectsCount = JSON.parse(data[0]['ProjectsCount_Json']);
    });
    this.router.navigate(["./backend/ToDoProjects/"]);
  }

  OnProjectClick(Pcode, Pname, Owner, Res, Autho, Informer, Coor, Supp, EmpNo_Own, EmpNo_Res, EmpNo_Autho, EmpNo_Coor, EmpNo_Info, EmpNo_Supp, Comp_No, proj_Block, PDesc, PStDT, PExecBlck, PendDT, Pstatus, Pdelay, checked, PCost, duration, standardduration, Client_Name, Remarks, Remarkss, CD, ReportType, Attachments, pid, SourceFile, SubmissionType, cloud) {
    this.BsService.SetNewPojectCode(Pcode);
    this.BsService.SetNewPojectName(Pname);
    this.SubmissionType = SubmissionType;
    this.Pid = pid;
    this.cloud = cloud;
    this.activeClass = true;
    this._topbar = false;
    this.paragraph_msg = true;
    this.Proj_checkbox = false;
    this.addbutton_hidden = false;
    this.onradioclick = true;
    this._ProjectCode = Pcode;
    this._MasterCode = Pcode;
    this._ProjectName = Pname;
    this.Owner = Owner;
    this.EmpNo_Own = EmpNo_Own;
    this.Resp = Res;
    this.EmpNo_Res = EmpNo_Res;
    this.Autho = Autho;
    this.EmpNo_Autho = EmpNo_Autho;
    this.Informer = Informer;
    this.EmpNo_Info = EmpNo_Info;
    this.Coor = Coor;
    this.EmpNo_Coor = EmpNo_Coor;
    this.Support = Supp;
    this.EmpNo_Supp = EmpNo_Supp;
    this.Comp_No = Comp_No;
    this.ProjectBlock = proj_Block;
    this.Proj_ExecBlck = PExecBlck;
    this.Proj_Desc = PDesc;
    this.PstDT = PStDT;
    this.PEndDT = PendDT;
    this.Project_Status = Pstatus;
    this.delaydays = Pdelay;
    this.Checkbox_checked = checked;
    this.projectCost = PCost;
    this.Duration = duration;
    this.standardDuration = standardduration;
    this.Client_Name = Client_Name;
    this.Remarks = Remarks;
    this.Remarkss = Remarkss;
    this.CD = CD;
    this.ReportType = ReportType;
    this.Attachments = Attachments;
    this.FileName = SourceFile;
    this.GetSubtask_Details(); //console.log("Max-Proj Code--->",this.Max_ProjectCode);

    this.titles = false;
    this.minDate = PStDT; //minDate is 1st Jan 2019

    this.maxDate = PendDT; //maxDate is 1st Jan 2020

    if (this.Proj_ExecBlck == "Core Tasks" || this.Proj_ExecBlck == "Secondary Tasks") {
      this.addbutton_hidden = false;
    } else {
      this.addbutton_hidden = true;
    } // if(this.Project_Status == 'Completion Under Approval' || this.Project_Status == 'Under Approval'){
    //   this.addbutton_hidden = true;
    // }


    this.closeInfo();
  }

  CallOnSubmitAction() {
    var _this = this;

    return (0,D_WorkSpace_Angular_Projects_creative_planner_creative_planner_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let a = yield _this.GetSubtask_Details();
      let b = yield _this.GetProjectsByUserName();

      _this.router.navigate(["./backend/ToDoProjects/"]);
    })();
  } //  CallOnSubmitAction() {
  //     //  console.log('A');
  //   this.GetSubtask_Details();
  //   // this.OnProjectClick(this.Pcode,this.Pname, this.Owner, this.Res, this.Autho, this.Informer, this.Coor, this.Supp, this.EmpNo_Own, this.EmpNo_Res, this.EmpNo_Autho,
  //   //   this.EmpNo_Coor, this.EmpNo_Info, this.EmpNo_Supp, this.Comp_No, this.proj_Block, this.PDesc, this.PStDT, this.PExecBlck, this.PendDT, this.Pstatus, this.checked,
  //   //   this.PCost, this.duration, this.standardduration, this.Client_Name, this.Remarks, this.Remarkss, this.CD, this.ReportType, this.Attachments, this.pid, this.SourceFile, this.SubmissionType)
  //      this.GetProjectsByUserName();
  //     // this.getDropdownsDataFromDB();
  //   }


  ProjectInfoDetails() {
    // var myWindow = window.open(myurl);
    // myWindow.focus();
    //this.router.navigate([myurl,this._ProjectCode]);
    this.router.navigate(["./backend/ToDoProjects/projectinfo/", this._ProjectCode, "5"]);
    document.getElementById("mysideInfobar").classList.add("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block"; //this.router.navigate(["../backend/ToDoProjects/projectinfo", this._ProjectCode]);
    // document.getElementById("rightbar-overlay").style.display = "block";

    document.getElementById("todo").classList.add("position-fixed");
  }

  EmployeeOnSelect(obj) {
    this.selectedEmpNo = obj['Emp_No'];
  }

  EmployeeOnDeselect(obj) {
    this.selectedEmpNo = null;
  }

  GetAllEmployeesForAssignDropdown() {
    let obj = {
      pagenumber: 1,
      Emp_No: this.CurrentUser_ID,
      Mode: 'AssignedTask'
    };

    this.service._GetCompletedProjects(obj).subscribe(data => {
      this._EmployeeListForDropdown = JSON.parse(data[0]['EmployeeList']); //console.log(this.EmployeeList);

      this.dropdownSettings_EMP = {
        searchAutofocus: true,
        singleSelection: true,
        idField: 'Emp_No',
        textField: 'DisplayName',
        itemsShowLimit: 2,
        allowSearchFilter: true,
        closeDropDownOnSelection: true
      };
    });
  }

  GetSubtask_Details() {
    this.service.SubTaskDetailsService_ToDo_Page(this._ProjectCode, this.Comp_No, null).subscribe(data => {
      this._EmployeeListForDropdown = JSON.parse(data[0]['RacisEmployee_Json']);

      if (data[0]['SubtaskDetails_Json'] == ' ') {
        this._subtaskDetails = true;
        this._projectDetails = false;
      } else {
        this.Subtask_List = JSON.parse(data[0]['SubtaskDetails_Json']);
        this.CompletedList = JSON.parse(data[0]['CompletedTasks_Json']);
        this.totalSubtaskHours = data[0]['SubtaskHours'];
        this._subtaskDetails = false;
        this._projectDetails = true; // console.log("To Do Completed---->", this.CompletedList);
        //  console.log("to Incomplete---->", this.Subtask_List);
      }

      if (data[0]['CompletedTasks_Json'] == ' ') {
        this._CompletedDetails = true;
      } else {
        this.CompletedList = JSON.parse(data[0]['CompletedTasks_Json']); // console.log("To Do Completed---->", this.CompletedList);

        this._CompletedDetails = false;
      }

      this._Projecttest = JSON.parse(data[0]["ProjectInfo"]);
      this._ProjectCode = this._Projecttest[0].Project_Code;
      this._MasterCode = this._Projecttest[0].Project_Code;
      this._ProjectName = this._Projecttest[0].Project_Name;
      this.Proj_Desc = this._Projecttest[0].Project_Description;
      this.Proj_ExecBlck = this._Projecttest[0].Exec_BlockName;
      this.Project_Status = this._Projecttest[0].Status;
      this.PstDT = this._Projecttest[0].DPG;
      this.PEndDT = this._Projecttest[0].DeadLine;
      this.projectCost = this._Projecttest[0].Project_Cost;
      this.Duration = this._Projecttest[0].Duration;
      this.Resp = this._Projecttest[0].Team_Res;
      this.Client_Name = this._Projecttest[0].Client_Name; // console.log(this._projectDetails,this._subtaskDetails,this._CompletedDetails,"Testing complete");
      // console.log(this.Subtask_List,this.CompletedList,"Same");
    });
  }

  OnSubtaskClick(item) {
    this.Sub_ProjectCode = item.Project_Code;
    this.Sub_Desc = item.Project_Description;
    this._Subtaskname = item.Project_Name;
    this.Sub_StartDT = item.StartDate;
    this.Sub_EndDT = item.SubProject_DeadLine;
    this.Sub_Autho = item.Subtask_Autho;
    this.Sub_Status = item.SubProject_Status;
    document.getElementById("mysideInfobar_Update").classList.add("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    this.Clear_Feilds(); // document
    // this.Block3 = false;
  }

  _SortProjectList() {
    this.clicks += 1;

    if (this.clicks != 1) {
      this.A2Z = true;
      this.Z2A = false;
      this._ProjectDataList = this._ProjectDataList.sort((a, b) => a.Project_Code > b.Project_Code ? -1 : 1);
      this.clicks = 0;
    } else {
      this.A2Z = false;
      this.Z2A = true;
      this._ProjectDataList = this._ProjectDataList.sort((a, b) => a.Project_Code > b.Project_Code ? 1 : -1);
    }
  }

  OnAddTaskClick() {
    this.router.navigate(["./backend/ToDoProjects/ActionToProject/1"]);
    document.getElementById("mysideInfobar").classList.add("kt-action-panel--on"); // document.getElementById("mysideInfobar_NewSubtask").style.width = "60%";
    // document.getElementById("mysideInfobar_Update").style.width = "0px";

    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("todo").classList.add("position-fixed"); // this.MatInput = false;
    // this.ButtonAdd = false;
    // this.GetAllEmployeesForAssignDropdown();

    $("#mysideInfobar").scrollTop(0);
  }

  LoadDocument(cloud, Pcode, Resp, url) {
    // (<HTMLInputElement>document.getElementById("documentPreview")).style.display="block";
    // url = "http://208.109.13.37/dmsapi/DataOutPut/react-handbook.pdf";
    // contenttype=".pdf";
    // if (contenttype == ".PDF" || contenttype == ".pdf" || contenttype == "application/pdf") {
    //   this._IsPdf = true;
    // }
    // else if (contenttype == ".jpg" || contenttype == ".png" || contenttype == ".PNG" || contenttype == ".jpeg") {
    //   this._IsPdf = false;
    // }
    this.src = url;
    let FileUrl;
    FileUrl = "http://217.145.247.42:81/YRGEP/Uploads/";

    if (cloud == false) {
      var myWindow = window.open(FileUrl + Resp + "/" + Pcode + "/" + url);
      myWindow.focus();
    } else if (cloud == true) {
      var myWindow = window.open(url);
      myWindow.focus();
    } //this.cd.detectChanges();
    //$('#documentPreview').modal('toggle');

  }

  onFileChange(e) {
    this.selectedFile = e.target.files[0];
    console.log("--------------->", this.selectedFile);
  }

  closeInfo() {
    // debugger
    this.Checkbox_checked = 0;
    document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    document.getElementById("mysideInfobar").classList.remove("kt-action-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
    document.getElementById("mysideInfobar_ProjectsUpdate").classList.remove("kt-quick-panel--on");
    document.getElementById("actyInfobar_header").classList.remove("open_sidebar");
    document.getElementById("todo").classList.remove("position-fixed");
    $('#uploadFile').val('');
    $('#_upload').html('Select a file'); // document.getElementById("rightbar-overlay").style.display = "none";

    this.Clear_Feilds();
    this.router.navigate(["./backend/ToDoProjects/"]);
  }

  Clear_Feilds() {
    this.Sub_ProjectName = "";
    this._Description = "";
    this._StartDate = null;
    this._EndDate = null;
    this._remarks = "";
    this._inputAttachments = null;
    this._inputAttachments2 = null;
    this.selectedEmpNo = '';
    this.selected_Employee = [];
    $('#uploadFile').val('');
    $('#_upload').html('Select a file');
    $('#_pdf').val('');
    $('#upload').html('Select a file');
  }

  closeInfoProject() {
    this.OnClickCheckboxProjectUpdate(0); // document.getElementById("todo").classList.remove("position-fixed");

    this.Clear_Feilds();
  } // SearchbyText() {
  //   this.CurrentPageNo = 1;
  //   this.applyFilters();
  // }


  search(event) {
    this.SearchbyText(); // console.log("Searh Text---->", event);
  }

  test() {
    const datepipe = new _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe('en-US');
    let formattedDate = datepipe.transform(this._StartDate, 'DD-MMM-YYYY HH:mm:ss'); // console.log("Noremal", this._StartDate)
    // this._StartDate = (moment(this._StartDate)).format('DD-MMM-YYYY HH:mm:ss')
    // console.log("after Convert--->", formattedDate)
    //console.log(this._EndDate = (moment(this._EndDate)).format('DD-MMM-YYYY HH:mm:ss'))
  } // openInfo(pcode, pName) {
  //   document.getElementById("mysideInfobar").style.width = "400px";
  //   this.router.navigate(["../backend/ToDoProjects/projectinfo", pcode]);
  // }


  OnClickCheckboxProjectUpdate(value) {
    this.service.SubTaskStatusCheck(this._ProjectCode).subscribe(data => {
      if (data['Message'] == 1) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
          title: 'Unable To Complete This Project !!',
          text: 'SubTask Status Are In Rejected or Pending ?',
          // icon: 'warning',
          showCancelButton: true
        });
      } else {
        this.Checkbox_checked = value;

        if (value == true) {
          document.getElementById("mysideInfobar_ProjectsUpdate").classList.add("kt-quick-panel--on");
          document.getElementById("rightbar-overlay").style.display = "block";
        } else {
          document.getElementById("mysideInfobar_ProjectsUpdate").classList.remove("kt-quick-panel--on");
          document.getElementById("rightbar-overlay").style.display = "none";
        }

        document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
        document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
      }
    });
  }

  updateMainProject() {
    if (this.Proj_ExecBlck == 'To do List') {
      this.selectedFile = null;
    }

    const fd = new FormData();
    fd.append("Project_Code", this._MasterCode);
    fd.append("Team_Autho", this.EmpNo_Autho);
    fd.append("Remarks", this._remarks);
    fd.append("Projectblock", this.ProjectBlock);
    fd.append('file', this.selectedFile);
    fd.append("Emp_No", this.CurrentUser_ID);
    fd.append("Project_Name", this._ProjectName);

    this.service._fileuploadService(fd).subscribe(event => {
      //console.log(event);
      // if (event.type == HttpEventType.UploadProgress) {
      //   this.progress = Math.round(event.loaded / event.total * 100);
      //   this.notifyService.showSuccess("", "File uploaded successfully");
      //   this.notifyService.showInfo("", "Project Updated");
      // }
      // else if (event.type === HttpEventType.Response) {
      //   //console.log(event);
      // }
      if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpEventType.UploadProgress) {
        this.progress = Math.round(event.loaded / event.total * 100);
      } else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpEventType.Response) {
        // console.log(event);
        var myJSON = JSON.stringify(event);
        this._Message = JSON.parse(myJSON).body.Message;
        this.notifyService.showSuccess(this._Message, 'Success'); // console.log(this._Message,this.progress,"json");
      }

      this.closeInfo();
      this.GetProjectsByUserName();
      this.GetSubtask_Details(); //this.getDropdownsDataFromDB();
      // this.OnProjectClick();
    });
  } // @ViewChild('uploadFile')
  // myInput: ElementRef;
  //Subtask Update 


  OnUpdateSubtask() {
    if (this._remarks == "") {
      this.notifyService.showInfo("Remarks Cannot be Empty", '');
    } else {
      const fd = new FormData();
      fd.append("Project_Code", this.Sub_ProjectCode);
      fd.append("Master_Code", this._MasterCode);
      fd.append("Team_Autho", this.EmpNo_Autho);
      fd.append("Projectblock", this.ProjectBlock);
      fd.append("Remarks", this._remarks);
      fd.append('file', this.selectedFile);
      fd.append("Project_Name", this._Subtaskname); // this.ObjSubTaskDTO.Formdata = fd;
      // this.ObjSubTaskDTO.MasterCode = this._MasterCode;
      // this.ObjSubTaskDTO.SubTask_ProjectCode = this.Sub_ProjectCode;
      // this.ObjSubTaskDTO.Attachments = this._inputAttachments;
      // this.ObjSubTaskDTO.Remarks = this._remarks;

      this.service._UpdateSubtaskByProjectCode(fd).subscribe(data => {
        // debugger
        this._remarks = "";
        this._inputAttachments = ""; //this.CompletedList = JSON.parse(data[0]['CompletedTasks_Json']);

        this.GetSubtask_Details();
        document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
        document.getElementById("mysideInfobar_ProjectsUpdate").classList.remove("kt-quick-panel--on");
        document.getElementById("todo").classList.remove("position-fixed");
        $('#uploadFile').val('');
        $('#_upload').html('Select a file');
      });

      this.notifyService.showInfo("Successfully Updated", '');
    }
  }

  Btn_NewProjectCreation() {
    let name = "NewProjectCreation";
    var url = document.baseURI + name;
    var myurl = `${url}`;
    var myWindow = window.open(myurl);
    myWindow.focus();
  }

  Btn_AssignTask() {
    let name = "AssignTask";
    var url = document.baseURI + name;
    var myurl = `${url}`;
    var myWindow = window.open(myurl);
    myWindow.focus();
  }

  Btn_UnplannedTask() {
    let name = "UnplannedTask";
    var url = document.baseURI + name;
    var myurl = `${url}`;
    var myWindow = window.open(myurl);
    myWindow.focus();
  }

  OnEditProject(id, Pname) {
    this._modelProjectName = Pname;
    this.Editbutton = true;
    document.getElementById("SpanProjName_" + id).style.display = "none";
    document.getElementById("spanTextbox_" + id).style.display = "block";
    document.getElementById("textboxfocus_" + id).focus(); //(<HTMLInputElement>document.getElementById("EidtBtn_" + id)).style.display = "none";
  }

  OnEditProject_Desc(id, Desc) {
    this._modelProjDesc = Desc;
    this.Editbutton = true;
    document.getElementById("Span_DescName_" + id).style.display = "none";
    document.getElementById("spanTextarea_" + id).style.display = "block";
    document.getElementById("textareafocus_" + id).focus();
  }

  OnEditProject_Alloc(id, allocated) {
    this._modelProjAlloc = allocated;
    this.Editbutton = true;
    document.getElementById("Span_DescName_all" + id).style.display = "none";
    document.getElementById("spanTextarea_all" + id).style.display = "block";
    document.getElementById("textareafocus_all" + id).focus();
  }

  onCancel(id) {
    document.getElementById("SpanProjName_" + id).style.display = "inline-block";
    document.getElementById("spanTextbox_" + id).style.display = "none"; //(<HTMLInputElement>document.getElementById("EidtBtn_" + id)).style.display = "inline-block";

    this.Editbutton = false; // For Description

    document.getElementById("Span_DescName_" + id).style.display = "inline-block";
    document.getElementById("spanTextarea_" + id).style.display = "none";
    this._modelProjDesc = null;
    this._modelProjectName = null; // For Allocated Hours

    document.getElementById("Span_DescName_all" + id).style.display = "inline-block";
    document.getElementById("spanTextarea_all" + id).style.display = "none"; //(<HTMLInputElement>document.getElementById("Editbutton")).style.display = "inline-block";
  }

  OnProject_Rename(id, Pcode) {
    if (this._modelProjectName != "" && this._modelProjDesc != "") {
      this.service._ProjectRenameService(id, this._modelProjectName, this._modelProjDesc, this.CurrentUser_ID).subscribe(data => {
        this._Message = data['message'];
        this.notifyService.showSuccess(this._Message, "");
        this.GetSubtask_Details();
        this.GetProjectsByUserName();
        this.service.SubTaskDetailsService_ToDo_Page(Pcode, this.Comp_No, null).subscribe(data => {
          let list;
          list = JSON.parse(data[0]['ProjectInfo']);
          this._ProjectName = list[0]['Project_Name'];
          this.Proj_Desc = list[0]['Project_Description'];
        });
      });

      this.onCancel(id);
    } else {
      this.notifyService.showInfo("Empty string cannot be save", "Please give some name.");
    }
  }

  onProject_updateDuration(id, pcode) {
    if (this._modelProjAlloc != null && this._modelProjAlloc != 0) {
      this.service._NewProjectDurationService(pcode, this._modelProjAlloc, null, this.CurrentUser_ID).subscribe(data => {
        this._Message = data['message'];

        if (this._Message == '2') {
          this.notifyService.showError("Action duration not updated", "Failed");
          this.GetSubtask_Details();
          this.GetProjectsByUserName();
        } else if (this._Message == '1') {
          this.notifyService.showSuccess("Action duration added successfully", "Success");
          this.GetSubtask_Details();
          this.GetProjectsByUserName();
        }
      });

      this.onCancel(id);
    } else {
      this.notifyService.showInfo("Hours cannot be 0 or null", "Please try again with correct value");
    }
  }

  moreDetails() {
    let name = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${this._ProjectCode}`;
    var myWindow = window.open(myurl, this._ProjectCode);
    myWindow.focus();
  }

  getDropdownsDataFromDB() {
    this._objDropdownDTO.EmpNo = this.CurrentUser_ID;
    this._objDropdownDTO.Selected_ProjectType = this.selectedType_String;
    this._objDropdownDTO.Selected_Status = this.selectedStatus_String;
    this._objDropdownDTO.SelectedEmp_No = this.selectedEmp_String;
    this._objDropdownDTO.Selected_SearchText = this.searchText; // this._objDropdownDTO.PortfolioId = null;

    this.service.GetProjectsByUserName_Service_ForProjectsTODO(this.ObjUserDetails).subscribe(data => {
      console.log(this._CurrentpageRecords, this.CurrentPageNo, this._totalProjectsCount, this.LastPage, this.lastPagerecords);
    });
  }

  isStatusChecked(item) {
    let arr = [];
    this.StatusCountFilter.forEach(element => {
      if (element.checked == true) {
        arr.push({
          Status: element.Name
        });
        return this.checkedItems_Status = arr;
      }
    });
    let arr2 = [];
    this.StatusCountFilter.filter(item => {
      if (item.checked == true) {
        this.applyFilters();
        return arr2.push(item);
      }
    });
    this.selectedItem_Status.push(arr2);
    this.StatusCountFilter.forEach(element => {
      if (element.checked == false) {
        this.selectedItem_Status.length = 0;
        this.resetFilters();
      }
    });

    if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0 && this.selectedItem_Emp.length == 0) {
      this.edited = false;
    } else {
      this.edited = true;
    }
  }

  isTypeChecked(item) {
    let arr = [];
    this.TypeContInFilter.forEach(element => {
      if (element.checked == true) {
        arr.push({
          Block_No: element.Block_No
        });
        return this.checkedItems_Type = arr;
      }
    });
    let arr2 = [];
    this.TypeContInFilter.filter(item => {
      if (item.checked == true) {
        this.applyFilters();
        return arr2.push(item);
      }
    });
    this.selectedItem_Type.push(arr2);
    this.TypeContInFilter.forEach(element => {
      if (element.checked == false) {
        this.selectedItem_Type.length = 0;
        this.resetFilters();
      }
    });

    if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0 && this.selectedItem_Emp.length == 0) {
      this.edited = false;
    } else {
      this.edited = true;
    }
  }

  isEmpChecked(item) {
    let arr = [];
    this.EmpCountInFilter.forEach(element => {
      if (element.checked == true) {
        arr.push({
          Emp_No: element.Emp_No
        });
        return this.checkedItems_Emp = arr;
      }
    });
    let arr2 = [];
    this.EmpCountInFilter.filter(item => {
      if (item.checked == true) {
        this.applyFilters();
        return arr2.push(item);
      }
    });
    this.selectedItem_Emp.push(arr2);
    this.EmpCountInFilter.forEach(element => {
      if (element.checked == false) {
        this.selectedItem_Emp.length = 0;
        this.resetFilters();
      }
    });

    if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0 && this.selectedItem_Emp.length == 0) {
      this.edited = false;
    } else {
      this.edited = true;
    }
  } //Apply Filters


  SearchbyText() {
    this.CurrentPageNo = 1;
    this.applyFilters();
  } // applyFilters_Old() {
  //   this.ObjUserDetails.PageNumber = this.CurrentPageNo;
  //   this.ObjUserDetails.PageSize = 30;
  //   this.ObjUserDetails.SearchText = this.searchText;
  //   this.ObjUserDetails.PortfolioId = null;
  //   this.service.GetProjectsByUserName_Service_ForProjectsTODO(this.ObjUserDetails).subscribe(data => {
  //     this._ProjectDataList = JSON.parse(data[0]['Projects_Json']);
  //     // this._totalProjectsCount = data[0]['ProjectsCount_Json'];
  //     //console.log("To DO Data---->", (data[0]['ProjectsCount_Json']));
  //     //Racis Details
  //     // this._totalProjectsCount = this._ProjectDataList.length
  //     if (this._ProjectDataList) {
  //       this._CurrentpageRecords = this._ProjectDataList.length;
  //       // console.log("ProjectList----------->", this._ProjectDataList.length);
  //     }
  //   });
  // }


  applyFilters() {
    this.selectedEmp_String = this.checkedItems_Emp.map(select => {
      return select.Emp_No;
    }).join(',');
    this.selectedType_String = this.checkedItems_Type.map(select => {
      return select.Block_No;
    }).join(',');
    this.selectedStatus_String = this.checkedItems_Status.map(select => {
      return select.Status;
    }).join(','); //console.log(this.checkedItems_Status, this.checkedItems_Type, this.checkedItems_Emp);

    this.ObjUserDetails.SelectedStatus = this.selectedStatus_String;
    this.ObjUserDetails.SelectedEmp_No = this.selectedEmp_String;
    this.ObjUserDetails.SelectedBlock_No = this.selectedType_String;
    this.ObjUserDetails.PageNumber = this.CurrentPageNo;
    this.ObjUserDetails.PageSize = 30;
    this.ObjUserDetails.SearchText = this.searchText;
    this.ObjUserDetails.PortfolioId = null; //console.log("string------->", this.selectedType_String, this.selectedEmp_String, this.selectedStatus_String);

    this.service.GetProjectsByUserName_Service_ForProjectsTODO(this.ObjUserDetails).subscribe(data => {
      //this._ProjectDataList = JSON.parse(data[0]['Projects_Json']);
      this._ProjectDataList = JSON.parse(data[0]['Projects_Json']); // console.log(this._ProjectDataList);
      // this._totalProjectsCount = data[0]['ProjectsCount_Json'];
      //Emp

      if (this.selectedItem_Emp.length == 0) {
        this.EmpCountInFilter = JSON.parse(data[0]['Employee_json']);
      } else {
        this.EmpCountInFilter = this.selectedItem_Emp[0];
      } //Type


      if (this.selectedItem_Type.length == 0) {
        this.TypeContInFilter = JSON.parse(data[0]['ProjectType_json']);
      } else {
        this.TypeContInFilter = this.selectedItem_Type[0];
      } //Status


      if (this.selectedItem_Status.length == 0) {
        this.StatusCountFilter = JSON.parse(data[0]['Status_json']);
      } else {
        this.StatusCountFilter = this.selectedItem_Status[0];
      }

      this._totalProjectsCount = JSON.parse(data[0]['ProjectsCount_Json']);

      let _vl = this._totalProjectsCount / 30;

      let _vl1 = _vl % 1;

      if (_vl1 > 0.000) {
        this.LastPage = Math.trunc(_vl) + 1;
      } else {
        this.LastPage = Math.trunc(_vl);
      }

      if (this.CurrentPageNo == this.LastPage) {
        this.lastPagerecords = 30;
      }

      if (this._ProjectDataList) {
        this._CurrentpageRecords = this._ProjectDataList.length;
      } // this._ProjectDataList = data;
      // this._CurrentpageRecords = this._ProjectDataList.length;


      if (this._ProjectDataList.length == 0) {
        this._filtersMessage = "No more projects matched your search";
        this._filtersMessage2 = " Clear the filters & try again";
      } else {
        this._filtersMessage = "";
        this._filtersMessage2 = "";
      }
    }); //Filtering Checkbox de
    // this.getDropdownsDataFromDB();
  }

  resetFilters() {
    this.searchText = "";
    this.search_Type = [];
    this.CurrentPageNo = 1;
    this.edited = false;

    if (this.selectedItem_Type.length == 0) {
      this.selectedType_String = null;
      this.checkedItems_Type = [];
    }

    if (this.selectedItem_Status.length == 0) {
      this.selectedStatus_String = null;
      this.checkedItems_Status = [];
    }

    if (this.selectedItem_Emp.length == 0) {
      this.selectedEmp_String = null;
      this.checkedItems_Emp = [];
    } //console.log("On Reset--->", this.checkedItems_Type, this.checkedItems_Status, this.checkedItems_Emp);


    this.applyFilters();
  }

  resetAll() {
    this.txtSearch = '';
    this.selectedItem_Type.length = 0;
    this.selectedItem_Status.length = 0;
    this.selectedItem_Emp.length = 0;
    this.resetFilters();
  }

  sweetAlert() {
    if (this.Project_Status == 'Completed') {
      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
        title: 'This Project is Compelted !!',
        text: 'Do You Want To Reopen This Project ?',
        // icon: 'warning',
        // iconHtml: '<img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Blue_question_mark_icon.svg">',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then(response => {
        if (response.value) {
          this.OnAddTaskClick();
        } else if (response.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().DismissReason.cancel)) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Cancelled', 'Action is Not Created', 'error');
        }
      });
    } else {
      this.OnAddTaskClick();
    }
  }

}

ToDoProjectsComponent.ɵfac = function ToDoProjectsComponent_Factory(t) {
  return new (t || ToDoProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_5__.ProjectTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_Services_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_15__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_Services_bs_service_service__WEBPACK_IMPORTED_MODULE_7__.BsServiceService));
};

ToDoProjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ToDoProjectsComponent,
  selectors: [["app-to-do-projects"]],
  decls: 428,
  vars: 96,
  consts: [["id", "todo", 1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid", "margin-height", "side_view"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi", "mb-2"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title", "mr-4"], [1, "kt-menu__link-icon", "fas", "fa-clipboard-check", "mr-2", "text-primary"], [1, "col-lg-4", "col-md-6"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "mr-3"], [4, "ngIf"], [1, "text-right", "d-flex", "justify-content-end"], [1, "dropdown"], ["type", "button", "id", "dropdownMenu2", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", "dropdown-toggle"], [1, "fas", "fa-plus", "mr-0"], ["aria-labelledby", "dropdownMenu2", 1, "dropdown-menu"], ["type", "button", 1, "dropdown-item", "text-primary", 3, "click"], ["type", "button", 1, "dropdown-item", "text-warning", 3, "click"], ["type", "button", 1, "dropdown-item", "text-danger", 3, "click"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "disabled", "click"], [1, "fas", "fa-angle-left", "mr-0"], [1, "fas", "fa-angle-right", "mr-0"], [1, "mr-2"], ["data-toggle", "kt-tooltip", "title", "Click to sort Asc", 1, "btn", "btn-label-primary", "btn-sm", 3, "hidden", "click"], [1, "fa", "fa-sort-alpha-down-alt", "font-16", "mr-0"], ["data-toggle", "kt-tooltip", "title", "Click to sort Desc", 1, "btn", "btn-label-primary", "btn-sm", 3, "hidden", "click"], [1, "fas", "fa-sort-alpha-up", "font-16", "mr-0"], [1, "stores-sec", "mr-1"], [1, "nav", "navbar-nav", "filters"], ["id", "filtermenu", 1, "dropdown", "mega-dropdown"], ["data-toggle", "dropdown", 3, "ngClass"], [1, "fas", "fa-ellipsis-v", "mr-0"], [1, "dropdown-menu", "mega-dropdown-menu"], [3, "click"], [1, "col-md-10"], [1, "d-inline-block"], [1, "col-md-2"], [1, "col-md-12"], ["type", "text", "placeholder", "Search Filters", 1, "form-control", "kt-quick-search__input", "pl-3", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [1, "row", "scroll-drop"], [1, "col-md-4"], [1, "count-height"], ["class", "d-flex justify-content-between", 4, "ngFor", "ngForOf"], ["data-toggle", "dropdown", 1, "btn", "btn-label-success", "btn-outline-success", "btn-upper", "btn-sm", "btn-bold", "mr-2"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-2", 3, "click"], [1, "kt-quick-search", "mb-2"], [1, "input-group"], ["type", "text", "placeholder", "Search Projects", "autofocus", "", 1, "form-control", "kt-quick-search__input", "pl-3", 2, "width", "270px", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "flaticon2-search-1", "curser-pointer", 3, "click"], [1, "sidebar", "scrollbar"], [1, "side-bar-box"], [4, "ngFor", "ngForOf"], [1, "col-lg-8", "col-md-6", "card"], [2, "color", "lightgray", "margin", "10px", "font-size", "large", "margin-top", "5px", 3, "hidden"], [1, "card-title", "pt-3", 3, "hidden"], [1, "d-flex", "justify-content-between", "row", 2, "border-bottom", "1px solid #eee"], [1, "text-right", "col-lg-12"], ["title", "More Infomation", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fa", "fa-chart-bar"], ["title", "Project Infomation", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "click"], [1, "fa", "fa-info-circle", "mr-0"], ["class", "btn btn-label-primary btn-upper btn-sm btn-bold mr-1", "title", "Create New Action", 3, "hidden", "click", 4, "ngIf"], [1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1"], [1, "fas", "fa-sort-alpha-up", "fa-lg", "mr-0"], ["title", "RACIS", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1"], ["data-toggle", "modal", "data-target", "#exampleModalCenter", 1, "fas", "fa-user-friends", "fa-lg", "mr-0"], ["data-toggle", "tooltip", "title", "Project Name!", 1, "text-info", "strong", "h5", 3, "id", "ngClass"], ["type", "checkbox", 3, "disabled", "checked", "click", 4, "ngIf"], ["class", "text-info", 3, "hidden", "id", "click", 4, "ngIf"], [1, "kt-inbox__subject", "mt-2", "pl-30px", 2, "display", "none", 3, "id"], [1, "d-flex"], ["type", "text", 1, "form-control", 2, "width", "78%", "height", "32px", 3, "id", "ngModel", "ngModelChange", "keydown.enter"], ["id", "button-addon4", 1, "d-inline-block", "ml-3"], [1, "btn", "btn-primary", "btn", "btn-sm", "mr-2", 3, "click"], [1, "btn", "btn-secondary", "btn", "btn-sm", 3, "click"], [1, "mb-3", "mt-1", "pl-30px", "h5", 2, "color", "grey", "font-size", "small"], ["data-toggle", "tooltip", "title", "Project Description!", 3, "id"], ["class", "text-info ", 3, "hidden", "id", "click", 4, "ngIf"], [1, "kt-inbox__subject", "mt-2", 2, "display", "none", 3, "id"], [1, "mb-1", "pl-30px"], ["data-toggle", "tooltip", "title", "Project Type!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], [1, "fas", "fa-project-diagram", "text-muted", "mr-1"], ["data-toggle", "tooltip", "title", "Project Status!", "class", "mr-3 text-nowrap mb-2 d-inline-block", 3, "ngClass", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Project Status!", "class", "mr-3 text-nowrap mb-2 d-inline-block text-danger", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Start Date!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], [1, "fas", "fa-calendar-alt", "text-muted", "mr-1"], ["data-toggle", "tooltip", "title", "End Date!", "class", "mr-3 text-nowrap mb-2 d-inline-block", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Submission Type!", "class", "mr-3 text-nowrap mb-2 d-inline-block", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Project Duration!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], [1, "fas", "fa-clock", "text-muted", "mr-1"], ["data-toggle", "tooltip", "title", "Project Cost!", 1, "text-nowrap", "mb-2", "d-inline-block"], [1, "fab", "fa-dev", "text-muted", "mr-1"], ["data-toggle", "tooltip", "title", "Project Responsible!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], ["data-toggle", "tooltip", "title", "Client Name!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], [1, "fas", "fa-wallet", "text-muted", "mr-1"], ["data-toggle", "tooltip", "title", "Report Type!", "class", "mr-3 text-nowrap mb-2 d-inline-block", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Completed Date!", "class", "mr-3 text-nowrap mb-2 d-inline-block", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Uploaded Document!", "class", "mr-3 text-nowrap mb-2 d-inline-block", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Remarks!", "class", "mr-3 text-nowrap mb-2 d-inline-block", 4, "ngIf"], [1, "scrollbar", "scrollbar1", "card-body", "py-0", "px-2", "mt-4"], ["id", "Subtask_Details", 3, "hidden"], ["class", "subtask-list", 3, "ngClass", 4, "ngFor", "ngForOf"], [3, "hidden"], [1, "subtask-list"], [2, "color", "lightgray"], [1, "w-100"], ["id", "accordionExample5", 1, "accordion", "accordion-light", "accordion-toggle-arrow", 3, "hidden"], ["class", "card", 4, "ngIf"], ["id", "exampleModalCenter", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalCenterTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalCenterTitle", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "kt-portlet", "kt-portlet--bordered-semi", "kt-portlet--height-fluid"], [1, "kt-portlet__body", "px-3", "py-3", "project-people"], [1, "d-flex", "justify-content-start", "align-items-center", "mb-3"], [1, "b-avatar", "badge-light-primary", "rounded-circle"], [1, "b-avatar-custom"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-user", "icon"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "profile-user-info"], [1, "text-muted"], [1, "text-dark", "text-hover-primary", "mb-0"], [1, "kt-portlet__body", "px-3", "py-3", "project-people", "d-none"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-flex", "align-items-center"], [1, "initial-box", "color-1"], [1, "fas", "fa-user"], [1, "owner-details", "ml-3"], [1, "initial-box", "color-2"], [1, "initial-box", "color-3"], [1, "initial-box", "color-4"], [1, "initial-box", "color-5"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "initial-box", "color-6"], ["id", "mysideInfobar_ProjectsUpdate", 1, "sideInfobar", "animate-right", "offcanvas"], [1, "px-4", "pt-4", "pb-1"], [1, "offcanvas-header", "d-flex", "align-items-center", "justify-content-between", "pb-2"], [1, "font-weight-bold", "m-0"], ["href", "javascript:void(0)", 1, "closebtn", "btn", "btn-xs", "btn-icon", "btn-hover-primary", 3, "click"], [1, "fa", "fa-times"], [1, "px-4", "pt-2"], [1, ""], [1, "d-flex", "align-items-center", "justify-content-between", "mt-0"], [1, "my-2"], [1, "kt-badge", "kt-hover--primary", "kt-bg-light-primary", "kt-badge--inline"], [1, "fa", "fa-clone", "mr-2"], [1, "d-flex", "mt-3", "flex-column"], [1, "fs-3", "mb-2"], [1, "text-muted", "fs-5"], ["class", "form-group mt-3", 4, "ngIf"], [1, "form-group"], ["for", "exampleFormControlFile1"], [1, "text-danger"], ["aria-label", "With textarea", 1, "form-control", 2, "height", "264px", "margin-top", "0px", "margin-bottom", "0px", 3, "ngModel", "ngModelChange"], [1, "form-group", "mb-1"], ["type", "submit", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], ["id", "mysideInfobar_Update", 1, "sideInfobar", "animate-right", "offcanvas"], [1, "d-flex", "flex-column"], [1, "form-group", "mt-3"], [1, "input-group", "mb-3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-upload"], ["d", "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"], ["d", "M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"], [1, "custom-file"], ["type", "file", "id", "uploadFile", "accept", "application/pdf", 1, "custom-file-input", 3, "ngModel", "ngModelChange", "change"], ["myInput", ""], ["id", "_upload", "for", "uploadFiles", 1, "custom-file-label"], [1, "text-info"], ["aria-label", "With textarea", 1, "form-control", 2, "margin-top", "0px", "margin-bottom", "0px", "height", "300px", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["id", "mysideInfobar", 1, "sideInfobar", "animate-right"], ["id", "rightbar-overlay", 3, "click"], [1, "d-flex", "justify-content-between"], [1, "kt-checkbox"], ["type", "checkbox", 3, "ngModel", "change", "ngModelChange"], [1, "count-btn"], [1, "kt-checkbox", "mb-3"], ["type", "checkbox", 3, "ngModel", "checked", "change", "ngModelChange"], [1, "project-title", "mb-2"], [1, "mb-2"], [3, "ngClass", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [3, "ngClass"], ["title", "Create New Action", 1, "btn", "btn-label-primary", "btn-upper", "btn-sm", "btn-bold", "mr-1", 3, "hidden", "click"], ["type", "checkbox", 3, "disabled", "checked", "click"], [1, "text-info", 3, "hidden", "id", "click"], [1, "fas", "fa-edit", "ml-2", "mb-1", "curser-pointer"], ["data-toggle", "tooltip", "title", "Project Status!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block", 3, "ngClass"], ["data-toggle", "tooltip", "title", "Project Status!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block", "text-danger"], ["data-toggle", "tooltip", "title", "End Date!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], ["data-toggle", "tooltip", "title", "Submission Type!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], ["data-toggle", "tooltip", "title", "Report Type!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], [1, "fas", "fa-bars", "text-muted", "mr-1"], ["data-toggle", "tooltip", "title", "Completed Date!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], ["data-toggle", "tooltip", "title", "Uploaded Document!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], [1, "fas", "fa-file-pdf", "text-muted", "mr-1"], ["title", "Click To Open File", 1, "text-info", "curser-pointer", 3, "click"], ["data-toggle", "tooltip", "title", "Remarks!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], [1, "fas", "fa-registered", "text-muted", "mr-1"], [1, "subtask-list", 3, "ngClass"], ["type", "radio", "name", "Subtask", "class", "subtask-radio", 3, "hidden", "click", 4, "ngIf"], [1, "col-lg-11"], [1, "subtask-list-title", "text-hover-primary", "font-size-h5", "font-weight-bold", "mb-1"], ["data-toggle", "tooltip", "title", "Action Name!", 1, "mr-2", 3, "id"], [1, "kt-inbox__subject", 2, "display", "none", 3, "id"], [1, "mb-3"], ["data-toggle", "tooltip", "title", "Action Description!", 1, "mr-2", 3, "id"], ["class", "text-info", 3, "hidden", "click", 4, "ngIf"], [1, "mb-1"], ["data-toggle", "tooltip", "title", "Action Duration!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], ["class", "fas fa-clock text-muted mr-1", 4, "ngIf", "ngIfElse"], ["allocated", ""], ["data-toggle", "tooltip", "title", "Action Cost!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], ["data-toggle", "tooltip", "title", "Action Responsible!", "class", "mr-3 text-nowrap mb-2 d-inline-block", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Action Status!", "class", "mr-2 text-nowrap mb-2 d-inline-block", 3, "ngClass", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Action Status!", "class", "mr-2 text-nowrap mb-2 d-inline-block text-danger", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Uploaded File!", "class", "mr-3 text-nowrap mb-2 d-inline-block", 4, "ngIf"], ["type", "radio", "name", "Subtask", 1, "subtask-radio", 3, "hidden", "click"], [1, "fas", "fa-edit"], [1, "text-info", 3, "hidden", "click"], [1, "mr-2", 3, "id"], ["type", "number", "min", "0", "oninput", "validity.valid||(value='');", 1, "form-control", 2, "width", "40%", "height", "32px", 3, "id", "ngModel", "ngModelChange", "keydown.enter"], ["style", "color:red", 4, "ngIf"], [2, "color", "red"], ["data-toggle", "tooltip", "title", "Action Responsible!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], ["data-toggle", "tooltip", "title", "Action Status!", 1, "mr-2", "text-nowrap", "mb-2", "d-inline-block", 3, "ngClass"], ["data-toggle", "tooltip", "title", "Action Status!", 1, "mr-2", "text-nowrap", "mb-2", "d-inline-block", "text-danger"], ["data-toggle", "tooltip", "title", "Uploaded File!", 1, "mr-3", "text-nowrap", "mb-2", "d-inline-block"], [1, "text-info", "curser-pointer", 3, "click"], [1, "card"], ["id", "headingOne5", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseOne5", "aria-expanded", "true", "aria-controls", "collapseOne5", 1, "card-title"], ["id", "collapseOne5", "aria-labelledby", "headingOne5", "data-parent", "#accordionExample5", 1, "collapse", "show"], [1, "card-body"], ["class", "subtask-list", 4, "ngFor", "ngForOf"], [1, "form-check", "form-check-success"], ["type", "radio", "checked", "", 1, "subtask-radio", "form-check-input"], ["data-toggle", "tooltip", "title", "Action Name!", 1, "subtask-list-title", "text-hover-primary", "font-size-h5", "font-weight-bold", "mb-1"], ["data-toggle", "tooltip", "title", "Action Description!", 1, "mb-1"], ["data-toggle", "tooltip", "title", "Action Responsible!", 1, "mr-3", "text-nowrap", "d-inline-block"], ["data-toggle", "tooltip", "title", "Action Status!", 1, "mr-2", "text-nowrap", "d-inline-block", "badge", "bg-light", "text-success"], ["data-toggle", "tooltip", "title", "Start Date!", 1, "mr-3", "text-nowrap", "d-inline-block"], ["data-toggle", "tooltip", "title", "End Date!", 1, "mr-3", "text-nowrap", "d-inline-block"], ["data-toggle", "tooltip", "title", "Completed Date!", "class", "mr-3 text-nowrap d-inline-block", 4, "ngIf"], ["class", "fas fa-file-pdf text-muted mr-1", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Remarks!", "class", "mr-3 text-nowrap  d-inline-block", 4, "ngIf"], ["data-toggle", "tooltip", "title", "Completed Date!", 1, "mr-3", "text-nowrap", "d-inline-block"], ["data-toggle", "tooltip", "title", "Remarks!", 1, "mr-3", "text-nowrap", "d-inline-block"], ["type", "file", "id", "_pdf", "accept", "application/pdf", 1, "custom-file-input", 3, "change"], ["id", "upload", "for", "_pdf", 1, "custom-file-label"]],
  template: function ToDoProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Process");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 2)(12, "div", 1)(13, "div", 8)(14, "div", 9)(15, "div")(16, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, ToDoProjectsComponent_ng_container_17_Template, 2, 2, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, ToDoProjectsComponent_ng_container_18_Template, 2, 2, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, ToDoProjectsComponent_ng_container_19_Template, 2, 2, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, " of ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, ToDoProjectsComponent_span_21_Template, 2, 1, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, ToDoProjectsComponent_span_22_Template, 2, 1, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 12)(24, "span", 13)(25, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 16)(28, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_button_click_28_listener() {
        return ctx.Btn_NewProjectCreation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Create New Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_button_click_30_listener() {
        return ctx.Btn_AssignTask();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "Assign Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_button_click_32_listener() {
        return ctx.Btn_UnplannedTask();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Runway Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_button_click_34_listener() {
        ctx.CurrentPageNo = ctx.CurrentPageNo - 1;
        return ctx.applyFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_button_click_36_listener() {
        ctx.CurrentPageNo = ctx.CurrentPageNo + 1;
        return ctx.applyFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](37, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "span", 23)(39, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_a_click_39_listener() {
        return ctx._SortProjectList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](40, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_a_click_41_listener() {
        return ctx._SortProjectList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](42, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "span")(44, "div", 28)(45, "ul", 29)(46, "li", 30)(47, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](48, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 33)(50, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_div_click_50_listener($event) {
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 1)(52, "div", 35)(53, "h5")(54, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "Total Projects - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "h5", 36)(57, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](59, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](60, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "div", 1)(62, "div", 38)(63, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ToDoProjectsComponent_Template_input_ngModelChange_63_listener($event) {
        return ctx.txtSearch = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](64, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "div", 40)(66, "div", 41)(67, "div", 42)(68, "p")(69, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "Project Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](71, ToDoProjectsComponent_div_71_Template, 7, 3, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](72, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "div", 41)(74, "div", 42)(75, "p")(76, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](78, ToDoProjectsComponent_div_78_Template, 7, 4, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](79, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "div", 41)(81, "div", 42)(82, "p")(83, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84, "Employees");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](85, ToDoProjectsComponent_div_85_Template, 7, 4, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](86, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](87, "br")(88, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "div", 1)(90, "div", 35)(91, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](92, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_button_click_93_listener() {
        return ctx.resetAll();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](94, "Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "div", 1)(96, "div", 38)(97, "div", 46)(98, "div", 47)(99, "input", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ToDoProjectsComponent_Template_input_ngModelChange_99_listener($event) {
        return ctx.searchText = $event;
      })("keydown.enter", function ToDoProjectsComponent_Template_input_keydown_enter_99_listener($event) {
        return ctx.search($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](100, "div", 49)(101, "span", 50)(102, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_i_click_102_listener($event) {
        return ctx.search($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "div", 52)(104, "ul", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](105, ToDoProjectsComponent_li_105_Template, 16, 10, "li", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](106, "div", 55)(107, "p", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](108, "Select the project from left panel to display result here.");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](109, "div", 57)(110, "div", 58)(111, "div", 59)(112, "button", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_button_click_112_listener() {
        return ctx.moreDetails();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](113, "i", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](114, "button", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_button_click_114_listener() {
        return ctx.ProjectInfoDetails();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](115, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](116, ToDoProjectsComponent_button_116_Template, 2, 1, "button", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](117, "button", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](118, "i", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](119, "button", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](120, "i", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](121, "div", 2)(122, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](123, ToDoProjectsComponent_input_123_Template, 1, 2, "input", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](124);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](125, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](126, ToDoProjectsComponent_span_126_Template, 2, 2, "span", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](127, "span", 72)(128, "div", 73)(129, "input", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ToDoProjectsComponent_Template_input_ngModelChange_129_listener($event) {
        return ctx._modelProjectName = $event;
      })("keydown.enter", function ToDoProjectsComponent_Template_input_keydown_enter_129_listener() {
        return ctx.OnProject_Rename(ctx.Pid, ctx._MasterCode);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](130, "div", 75)(131, "button", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_button_click_131_listener() {
        return ctx.OnProject_Rename(ctx.Pid, ctx._MasterCode);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](132, "Done");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](133, "button", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_button_click_133_listener() {
        return ctx.onCancel(ctx.Pid);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](134, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](135, "p", 78)(136, "span", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](137);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](138, ToDoProjectsComponent_span_138_Template, 2, 2, "span", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](139, "span", 81)(140, "div", 73)(141, "input", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ToDoProjectsComponent_Template_input_ngModelChange_141_listener($event) {
        return ctx._modelProjDesc = $event;
      })("keydown.enter", function ToDoProjectsComponent_Template_input_keydown_enter_141_listener() {
        return ctx.OnProject_Rename(ctx.Pid, ctx._MasterCode);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](142, "div", 75)(143, "button", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_button_click_143_listener() {
        return ctx.OnProject_Rename(ctx.Pid, ctx._MasterCode);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](144, "Done");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](145, "button", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_button_click_145_listener() {
        return ctx.onCancel(ctx.Pid);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](146, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](147, "p", 82)(148, "span", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](149, "i", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](150, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](151);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](152, ToDoProjectsComponent_span_152_Template, 2, 14, "span", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](153, ToDoProjectsComponent_span_153_Template, 2, 2, "span", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](154, ToDoProjectsComponent_span_154_Template, 2, 0, "span", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](155, "span", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](156, "i", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](157, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](158);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](159, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](160, ToDoProjectsComponent_span_160_Template, 5, 4, "span", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](161, ToDoProjectsComponent_span_161_Template, 4, 1, "span", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](162, "span", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](163, "i", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](164, ToDoProjectsComponent_b_164_Template, 2, 1, "b", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](165, ToDoProjectsComponent_b_165_Template, 2, 1, "b", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](166, "span", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](167, "i", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](168, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](169);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](170, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](171, "p", 82)(172, "span", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](173, "i", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](174, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](175);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](176, "span", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](177, "i", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](178, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](179);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](180, ToDoProjectsComponent_span_180_Template, 4, 1, "span", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](181, ToDoProjectsComponent_span_181_Template, 5, 4, "span", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](182, "p", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](183, ToDoProjectsComponent_span_183_Template, 5, 1, "span", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](184, ToDoProjectsComponent_span_184_Template, 4, 1, "span", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](185, "div", 102)(186, "div", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](187, ToDoProjectsComponent_div_187_Template, 54, 35, "div", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](188, "div", 105)(189, "div", 106)(190, "h5", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](191, " No Action found in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](192, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](193, "InProcess");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](194, " State ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](195, "div", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](196, "div", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](197, ToDoProjectsComponent_div_197_Template, 7, 1, "div", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](198, "div", 111)(199, "div", 112)(200, "div", 113)(201, "div", 114)(202, "h5", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](203, "RACIS (People on the project) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](204, "button", 116)(205, "span", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](206, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](207, "div", 118)(208, "div", 119)(209, "div", 120)(210, "div", 121)(211, "div", 10)(212, "span", 122)(213, "span", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](214, "svg", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](215, "path", 125)(216, "circle", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](217, "div", 127)(218, "span", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](219, "Owner");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](220, "p", 129)(221, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](222);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](223, "div", 121)(224, "div", 10)(225, "span", 122)(226, "span", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](227, "svg", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](228, "path", 125)(229, "circle", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](230, "div", 127)(231, "span", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](232, "Responsible");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](233, "p", 129)(234, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](235);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](236, "div", 121)(237, "div", 10)(238, "span", 122)(239, "span", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](240, "svg", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](241, "path", 125)(242, "circle", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](243, "div", 127)(244, "span", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](245, "Authority");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](246, "p", 129)(247, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](248);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](249, "div", 121)(250, "div", 10)(251, "span", 122)(252, "span", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](253, "svg", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](254, "path", 125)(255, "circle", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](256, "div", 127)(257, "span", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](258, "Coordinator");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](259, "p", 129)(260, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](261);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](262, "div", 121)(263, "div", 10)(264, "span", 122)(265, "span", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](266, "svg", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](267, "path", 125)(268, "circle", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](269, "div", 127)(270, "span", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](271, "Informer");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](272, "p", 129)(273, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](274);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](275, "div", 121)(276, "div", 10)(277, "span", 122)(278, "span", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](279, "svg", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](280, "path", 125)(281, "circle", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](282, "div", 127)(283, "span", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](284, "Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](285, "p", 129)(286, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](287);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](288, "div", 130)(289, "div", 131)(290, "div")(291, "div", 132)(292, "div", 133);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](293, "i", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](294, "div", 135)(295, "span", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](296, "Owner");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](297, "p", 129)(298, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](299);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](300, "div", 131)(301, "div")(302, "div", 132)(303, "div", 136);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](304, "i", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](305, "div", 135)(306, "span", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](307, "Responsible");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](308, "p", 129)(309, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](310);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](311, "div", 131)(312, "div")(313, "div", 132)(314, "div", 137);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](315, "i", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](316, "div", 135)(317, "span", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](318, "Authority");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](319, "p", 129)(320, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](321);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](322, "div", 131)(323, "div")(324, "div", 132)(325, "div", 138);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](326, "i", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](327, "div", 135)(328, "span", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](329, "Coordinator");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](330, "p", 129)(331, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](332);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](333, "div", 131)(334, "div")(335, "div", 132)(336, "div", 139);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](337, "i", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](338, "div", 135)(339, "span", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](340, "Informer");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](341, "p", 129)(342, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](343);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](344, "div", 140)(345, "div")(346, "div", 132)(347, "div", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](348, "i", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](349, "div", 135)(350, "span", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](351, "Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](352, "p", 129)(353, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](354);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](355, "div", 142)(356, "div", 143)(357, "div", 144)(358, "h4", 145);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](359, "Project Submission");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](360, "a", 146);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_a_click_360_listener() {
        return ctx.closeInfoProject();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](361, "i", 147);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](362, "div", 148)(363, "div", 149)(364, "div", 150)(365, "div")(366, "div", 151)(367, "label", 152);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](368, "i", 153);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](369);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](370, "div", 154)(371, "h5", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](372);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](373, "span", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](374);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](375, ToDoProjectsComponent_div_375_Template, 17, 0, "div", 157);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](376, "div", 158)(377, "label", 159);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](378, " Remarks ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](379, "span", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](380, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](381, "textarea", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ToDoProjectsComponent_Template_textarea_ngModelChange_381_listener($event) {
        return ctx._remarks = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](382, "div", 162);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](383, ToDoProjectsComponent_button_383_Template, 2, 1, "button", 163);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](384, ToDoProjectsComponent_button_384_Template, 2, 1, "button", 163);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](385, "div", 164)(386, "div", 143)(387, "div", 144)(388, "h4", 145);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](389, " Action Completion ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](390, "a", 146);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_a_click_390_listener() {
        return ctx.closeInfo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](391, "i", 147);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](392, "div", 148)(393, "div", 149)(394, "div", 165)(395, "h5", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](396);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](397, "span", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](398);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](399, "div", 166)(400, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](401, "Attachments");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](402, "div", 167)(403, "div", 49)(404, "span", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](405, "svg", 168);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](406, "path", 169)(407, "path", 170);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](408, "div", 171)(409, "input", 172, 173);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ToDoProjectsComponent_Template_input_ngModelChange_409_listener($event) {
        return ctx._upload = $event;
      })("change", function ToDoProjectsComponent_Template_input_change_409_listener($event) {
        return ctx.onFileChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](411, "label", 174);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](412, "Select a file");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](413, "span", 175);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](414, " *Accept only pdf files ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](415, "div", 158)(416, "label", 159)(417, "span", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](418, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](419, " Remarks");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](420, "textarea", 176);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ToDoProjectsComponent_Template_textarea_ngModelChange_420_listener($event) {
        return ctx._remarks = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](421, "div", 158)(422, "button", 177);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_button_click_422_listener() {
        return ctx.OnUpdateSubtask();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](423, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](424, "div", 178)(425, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](426, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](427, "div", 179);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ToDoProjectsComponent_Template_div_click_427_listener() {
        return ctx.closeInfo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.CurrentPageNo == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.CurrentPageNo != 1 && ctx.CurrentPageNo != ctx.LastPage);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.CurrentPageNo == ctx.LastPage && ctx.CurrentPageNo != 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx._totalProjectsCount >= 1000);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx._totalProjectsCount < 1000);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.CurrentPageNo == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx._CurrentpageRecords < 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx.Z2A);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx.A2Z);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.edited ? "btn btn-label-primary btn-upper btn-sm btn-bold filter-dot" : "btn btn-label-primary btn-upper btn-sm btn-bold");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx._totalProjectsCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.txtSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](72, 79, ctx.TypeContInFilter, ctx.txtSearch));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](79, 82, ctx.StatusCountFilter, ctx.txtSearch));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](86, 85, ctx.EmpCountInFilter, ctx.txtSearch));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx._ProjectDataList);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx.paragraph_msg);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx._topbar);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.CurrentUser_ID == ctx.EmpNo_Own || ctx.CurrentUser_ID == ctx.EmpNo_Res || ctx.CurrentUser_ID == ctx.EmpNo_Autho);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "SpanProjName_", ctx.Pid, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](94, _c4, ctx.Proj_ExecBlck != "Standard Tasks" && ctx.Proj_ExecBlck != "Routine Tasks" && ctx.Project_Status != "Completed" && ctx.Project_Status != "Under Approval" && ctx.Project_Status != "Completion Under Approval" && ctx.Project_Status != "Project Hold" && ctx.Project_Status != "Deadline Extend Under Approval" && ctx.Project_Status != "New Project Rejected" && ctx.Project_Status != "Standardtask Enactive Hold" && (ctx.CurrentUser_ID == ctx.EmpNo_Own || ctx.CurrentUser_ID == ctx.EmpNo_Res || ctx.CurrentUser_ID == ctx.EmpNo_Autho)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.Proj_ExecBlck != "Standard Tasks" && ctx.Proj_ExecBlck != "Routine Tasks" && ctx.Project_Status != "Under Approval" && ctx.Project_Status != "New Project Rejected" && ctx.Project_Status != "Completed" && ctx.Project_Status != "Under Approval" && ctx.Project_Status != "Completion Under Approval" && ctx.Project_Status != "Project Hold" && ctx.Project_Status != "Deadline Extend Under Approval" && ctx.Project_Status != "Standardtask Enactive Hold" && (ctx.CurrentUser_ID == ctx.EmpNo_Own || ctx.CurrentUser_ID == ctx.EmpNo_Res || ctx.CurrentUser_ID == ctx.EmpNo_Autho));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx._ProjectName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.CurrentUser_ID == ctx.EmpNo_Own || ctx.CurrentUser_ID == ctx.EmpNo_Res || ctx.CurrentUser_ID == ctx.EmpNo_Autho);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "spanTextbox_", ctx.Pid, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "textboxfocus_", ctx.Pid, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx._modelProjectName);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "Span_DescName_", ctx.Pid, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.Proj_Desc);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.CurrentUser_ID == ctx.EmpNo_Own || ctx.CurrentUser_ID == ctx.EmpNo_Res || ctx.CurrentUser_ID == ctx.EmpNo_Autho);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "spanTextarea_", ctx.Pid, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("id", "textboxfocus_", ctx.Pid, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx._modelProjDesc);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.Proj_ExecBlck);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.Project_Status != "Delay" && ctx.Project_Status != "Project Hold");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.Project_Status == "Delay");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.Project_Status == "Project Hold");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](159, 88, ctx.PstDT, "dd-MM-yyyy"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.Proj_ExecBlck != "Standard Tasks" && ctx.Proj_ExecBlck != "Routine Tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.Proj_ExecBlck == "Standard Tasks" || ctx.Proj_ExecBlck == "Routine Tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.Proj_ExecBlck != "Standard Tasks" && ctx.Proj_ExecBlck !== "Routine Tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.Proj_ExecBlck == "Standard Tasks" || ctx.Proj_ExecBlck == "Routine Tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](170, 91, ctx.projectCost, "SAR "));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.Resp);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.Client_Name);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.ReportType);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.CD && ctx.Project_Status == "Completed");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.FileName != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.Remarks != "" && ctx.Remarks != "undefined");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx._subtaskDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.Subtask_List);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx._projectDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", ctx._CompletedDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.CompletedList != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.Owner);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.Resp);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.Autho);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.Coor);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.Informer);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.Support);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.Owner);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.Resp);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.Autho);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.Coor);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.Informer);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.Support);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx.Proj_ExecBlck, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx._ProjectName);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.Proj_Desc);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.Proj_ExecBlck != "To do List");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx._remarks);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.Proj_ExecBlck != "To do List");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.Proj_ExecBlck == "To do List");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx._Subtaskname);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.Sub_Desc);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx._upload);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx._remarks);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx._remarks == "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__.Ng2SearchPipe],
  styles: [".sidebar[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    \r\n    background-color: #fff;\r\n    \r\n}\r\n\r\n.scrollbar[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 185px);\r\n    overflow-y: auto;\r\n}\r\n\r\n.scrollbar1[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 320px);\r\n    overflow-y: auto;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   label.kt-checkbox[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    margin: 5px 0px;\r\n}\r\n\r\n\r\n\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 6px;\r\n}\r\n\r\n\r\n\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\r\n\r\n\r\n\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #ccc;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #ccc;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: black;\r\n    padding: 10px 16px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background-color: #e0e0e0;\r\n    color: rgb(48, 46, 46);\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\r\n    background-color: #f4f4f4;\r\n    color: rgb(48, 46, 46);\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\r\n    color: #3c3c3c;\r\n    font-weight: 500;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #484848;\r\n}\r\n\r\ndiv.content[_ngcontent-%COMP%] {\r\n    margin-left: 200px;\r\n    padding: 1px 16px;\r\n    height: 1000px;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .sidebar[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: auto;\r\n        position: relative;\r\n    }\r\n    .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        float: left;\r\n    }\r\n    div.content[_ngcontent-%COMP%] {\r\n        margin-left: 0;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        float: none;\r\n    }\r\n}\r\n\r\n\r\n\r\nh4[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n}\r\n\r\n.project-info-page[_ngcontent-%COMP%] {\r\n    letter-spacing: 0.4px;\r\n}\r\n\r\n.project-description[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #969696;\r\n    font-size: 13px;\r\n}\r\n\r\n.project-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #646464;\r\n    \r\n}\r\n\r\n.project-budget[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .project-duration[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    color: #969696;\r\n}\r\n\r\n.project-duration-bar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.bg-blued[_ngcontent-%COMP%] {\r\n    background: #516c8d !important;\r\n}\r\n\r\n#rightbar-overlay[_ngcontent-%COMP%] {\r\n    background-color: rgba(50, 58, 70, .2);\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    display: none;\r\n    z-index: 998;\r\n    transition: all .2s ease-out;\r\n}\r\n\r\n\r\n\r\n.sideInfobar[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 999;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: #ffffff;\r\n    border-left: 1px solid #f9f9fc;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    \r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-portlet__head[_ngcontent-%COMP%] {\r\n    background-color: #f5f6fc;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #333;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 25px;\r\n    font-size: 20px;\r\n    margin-left: 50px;\r\n}\r\n\r\n.info-icon-cir[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #5867dd;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%] {\r\n    border-bottom: 0.07rem dashed #dedede;\r\n    padding: 6px;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item.dark[_ngcontent-%COMP%] {\r\n    border-bottom: 0.07rem dashed rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .kt-widget1[_ngcontent-%COMP%]   .kt-widget1__item[_ngcontent-%COMP%]   .kt-widget1__info[_ngcontent-%COMP%]   .kt-widget1__title[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.sideInfobar[_ngcontent-%COMP%]   .title-sidebar[_ngcontent-%COMP%] {\r\n    width: 270px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.side-bar-box[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    padding-left: 0px !important;\r\n}\r\n\r\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #f1f1f1;\r\n    font-weight: 400;\r\n}\r\n\r\n.text-hover-primary[_ngcontent-%COMP%]:hover {\r\n    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\r\n    color: #3699FF !important;\r\n}\r\n\r\n.side-bar-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n    border-bottom: none\r\n}\r\n\r\n.subtask-list[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    border-bottom: 1px solid #f1f1f1;\r\n    padding: 10px;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 1px solid #ebedf2;\r\n    box-shadow: 0 0.75rem 6rem rgb(56 65 74 / 3%);\r\n    border-radius: 0.25rem;\r\n    margin-right: 5px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.offcanvas[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    box-shadow: 0px 1px 9px -3px rgb(0 0 0 / 25%);\r\n}\r\n\r\n.w-75[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n}\r\n\r\n.subtask-list[_ngcontent-%COMP%]:last-child {\r\n    border-bottom: 1px solid #ebedf2;\r\n}\r\n\r\n.subtask-radio[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    height: 16px;\r\n    margin-right: 10px;\r\n    margin-top: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.subtask-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n}\r\n\r\n.subtask-list[_ngcontent-%COMP%]   p.subtask-list-title[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n}\r\n\r\n#accordionExample5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    margin-top: 15px;\r\n}\r\n\r\n.accordion.accordion-svg-icon[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:last-child   .card-body[_ngcontent-%COMP%] {\r\n    padding-left: 0px;\r\n}\r\n\r\n.accordion.accordion-light[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]:after {\r\n    left: 0px !important;\r\n    font-weight: 600;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.accordion.accordion-light[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\r\n    padding-left: 25px;\r\n    font-size: 16px;\r\n}\r\n\r\n.text-Rejected[_ngcontent-%COMP%] {\r\n    color: #E6747A !important;\r\n}\r\n\r\n.text-underApproval[_ngcontent-%COMP%] {\r\n    color: #98c7bf !important;\r\n}\r\n\r\n.text-underApproval2[_ngcontent-%COMP%] {\r\n    color: #98c7bf !important;\r\n}\r\n\r\n.text-CompleteRejected[_ngcontent-%COMP%] {\r\n    color: #D83C3C !important;\r\n}\r\n\r\n.text-underApp[_ngcontent-%COMP%] {\r\n    color: #4495D5 !important;\r\n}\r\n\r\n.text-Todo[_ngcontent-%COMP%] {\r\n    color: #45F495 !important;\r\n}\r\n\r\n.text-Completed[_ngcontent-%COMP%] {\r\n    color: #41D37B !important;\r\n}\r\n\r\ninput.largerCheckbox[_ngcontent-%COMP%] {\r\n    width: 13px;\r\n    height: 13px;\r\n}\r\n\r\n.textarea[_ngcontent-%COMP%] {\r\n    height: 381px;\r\n}\r\n\r\n.kt-checkbox[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    margin-bottom: inherit;\r\n}\r\n\r\n.project-active[_ngcontent-%COMP%] {\r\n    background-color: #cacff5 !important;\r\n}\r\n\r\n.bg-custom[_ngcontent-%COMP%] {\r\n    box-shadow: 2px 3px 4px #ccc;\r\n    background-color: #cccfcf5c !important;\r\n    border: 0px;\r\n    \r\n    \r\n}\r\n\r\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown[_ngcontent-%COMP%] {\r\n    position: static !important;\r\n  }\r\n\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%] {\r\n      padding: 20px;\r\n      width: 800px;\r\n      \r\n      top: 10px !important;\r\n      left: -100px !important;\r\n  }\r\n\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    border-bottom: 15px solid #fff;\r\n    border-right: 17px solid transparent;\r\n    border-left: 17px solid transparent;\r\n    position: absolute;\r\n    top: -15px;\r\n    left: 32px;\r\n    z-index: 10;\r\n  }\r\n\r\n.scroll-drop[_ngcontent-%COMP%]{\r\n    height: 250px;\r\n        overflow: auto;\r\n  }\r\n\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    border-bottom: 17px solid #ccc;\r\n    border-right: 19px solid transparent;\r\n    border-left: 19px solid transparent;\r\n    position: absolute;\r\n    top: -17px;\r\n    left: 30px;\r\n    z-index: 8;\r\n  }\r\n\r\n.stores-sec[_ngcontent-%COMP%]   .mega-dropdown-menu1[_ngcontent-%COMP%]   .filter-box[_ngcontent-%COMP%]{\r\n    width: 33.3333%;\r\n    display: inline-block;\r\n  }\r\n\r\n.up-btn[_ngcontent-%COMP%] {\r\n    padding: 0.5rem 1.6rem;\r\n    font-size: 10px;\r\n    color: #fff;\r\n    \r\n    border-radius: 0.125rem;\r\n    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);\r\n    font-family: \"Roboto\",sans-serif;\r\n    position: relative;\r\n}\r\n\r\n.file-field[_ngcontent-%COMP%]   .file-path-wrapper[_ngcontent-%COMP%] {\r\n    height: 2.5rem;\r\n    padding-left: 10px;\r\n    overflow: hidden;\r\n}\r\n\r\n.file-field[_ngcontent-%COMP%]   .file-path-wrapper[_ngcontent-%COMP%]   .file-path[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    border: 0;\r\n    border-bottom: 1px solid #ced4da;\r\n    border-radius: 0;\r\n    outline: 0;\r\n    box-shadow: none;\r\n}\r\n\r\ninput[type=\"file\"].cus-upload[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    cursor: pointer;\r\n    opacity: 0;\r\n}\r\n\r\n.up-btn[_ngcontent-%COMP%]:hover, .up-btn[_ngcontent-%COMP%]:focus, .up-btn[_ngcontent-%COMP%]:active {\r\n    outline: 0;\r\n    box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);\r\n}\r\n\r\n.disable[_ngcontent-%COMP%] { \r\n    pointer-events: none; \r\n  }\r\n\r\n.kt-quick-search[_ngcontent-%COMP%]   .kt-quick-search__form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n    border: 1px solid #cdcfd5;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n  }\r\n\r\n.bg-blued[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n    -moz-appearance: textfield;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvLWRvLXByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQSxVQUFVOztBQUVWO0lBQ0ksVUFBVTtBQUNkOztBQUdBLFVBQVU7O0FBRVY7SUFDSSxtQkFBbUI7QUFDdkI7O0FBR0EsV0FBVzs7QUFFWDtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBR0Esb0JBQW9COztBQUVwQjtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjtBQUNKOztBQUdBLGdDQUFnQzs7QUFFaEM7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IsZUFBZTtJQUNmLFlBQVk7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0RBQWdEO0FBQ3BEOztBQUdBOztLQUVLOztBQUVMO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBR0kseUdBQXlHO0lBRXpHLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6Qiw2Q0FBNkM7SUFDN0Msc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixzQ0FBc0M7SUFDdEMsV0FBVztJQUNYLCtCQUErQjtJQUMvQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0EsbUJBQW1COztBQUVuQjtJQUNJLDJCQUEyQjtFQUM3Qjs7QUFDQTtNQUNJLGFBQWE7TUFDYixZQUFZO01BQ1o7O2lDQUUyQjtNQUMzQixvQkFBb0I7TUFDcEIsdUJBQXVCO0VBQzNCOztBQUNBO0lBQ0UsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixvQ0FBb0M7SUFDcEMsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7RUFDYjs7QUFDQTtJQUNFLGFBQWE7UUFDVCxjQUFjO0VBQ3BCOztBQUNBO0lBQ0UsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixvQ0FBb0M7SUFDcEMsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7RUFDWjs7QUFFQTtJQUNFLGVBQWU7SUFDZixxQkFBcUI7RUFDdkI7O0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFdBQVc7SUFDWCwwQ0FBMEM7SUFDMUMsdUJBQXVCO0lBRXZCLHVFQUF1RTtJQUN2RSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsVUFBVTtJQUVWLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFDQTtJQUNJLFVBQVU7SUFFVix3RUFBd0U7QUFDNUU7O0FBQ0E7SUFDSSxvQkFBb0I7RUFDdEI7O0FBQ0E7SUFDRSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7QUFDQTtJQUNFLFdBQVc7QUFDZjs7QUFDQTtJQUNJLDBCQUEwQjtFQUM1Qjs7QUFDQTs7RUFFQSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYIiwiZmlsZSI6InRvLWRvLXByb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLyogd2lkdGg6IDMwMHB4OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cclxufVxyXG5cclxuLnNjcm9sbGJhciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODVweCk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5zY3JvbGxiYXIxIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDMyMHB4KTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUgbGFiZWwua3QtY2hlY2tib3gge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG59XHJcblxyXG4vKiB3aWR0aCAqL1xyXG5cclxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDZweDtcclxufVxyXG5cclxuXHJcbi8qIFRyYWNrICovXHJcblxyXG4uc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG5cclxuLyogSGFuZGxlICovXHJcblxyXG4uc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG5cclxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG5cclxuLnNpZGViYXIgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNpZGViYXIgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgIGNvbG9yOiByZ2IoNDgsIDQ2LCA0Nik7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICBjb2xvcjogcmdiKDQ4LCA0NiwgNDYpO1xyXG59XHJcblxyXG4uc2lkZWJhciAucHJvamVjdC10aXRsZSB7XHJcbiAgICBjb2xvcjogIzNjM2MzYztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5kLWZsZXggcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzQ4NDg0ODtcclxufVxyXG5cclxuZGl2LmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMXB4IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDEwMDBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXIgYSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICBkaXYuY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAuc2lkZWJhciBhIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBNb3JlIERldGFpbHMgQ29tcG9uZW50cyBDU1MgKi9cclxuXHJcbmg0IHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuaDUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1pbmZvLXBhZ2Uge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1kZXNjcmlwdGlvbiAuZC1mbGV4IHNwYW4ge1xyXG4gICAgY29sb3I6ICM5Njk2OTY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHAge1xyXG4gICAgY29sb3I6ICM2NDY0NjQ7XHJcbiAgICAvKiBmb250LXNpemU6IDE0cHg7ICovXHJcbn1cclxuXHJcbi5wcm9qZWN0LWJ1ZGdldCBoNixcclxuLnByb2plY3QtZHVyYXRpb24gaDYge1xyXG4gICAgY29sb3I6ICM5Njk2OTY7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWR1cmF0aW9uLWJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJnLWJsdWVkIHtcclxuICAgIGJhY2tncm91bmQ6ICM1MTZjOGQgIWltcG9ydGFudDtcclxufVxyXG4jcmlnaHRiYXItb3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCA1OCwgNzAsIC4yKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB6LWluZGV4OiA5OTg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4vKiA9PT0gU2lkZWJhciA9PT0gKi9cclxuXHJcbi5zaWRlSW5mb2JhciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Y5ZjlmYztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAvKiBwYWRkaW5nLXRvcDogNjBweDsgKi9cclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5rdC1wb3J0bGV0X19oZWFkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmM7XHJcbn1cclxuXHJcbi5zaWRlSW5mb2JhciAuY2xvc2VidG4ge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uaW5mby1pY29uLWNpciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzU4NjdkZDtcclxufVxyXG5cclxuLnNpZGVJbmZvYmFyIC5rdC13aWRnZXQxIC5rdC13aWRnZXQxX19pdGVtIHtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMDdyZW0gZGFzaGVkICNkZWRlZGU7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuXHJcbi5zaWRlSW5mb2JhciAua3Qtd2lkZ2V0MSAua3Qtd2lkZ2V0MV9faXRlbS5kYXJrIHtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMDdyZW0gZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuXHJcbi8qIC5rdC1pbmJveF9fZGF0ZXRpbWV7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICB9ICovXHJcblxyXG4uc2lkZUluZm9iYXIgLmt0LXdpZGdldDEgLmt0LXdpZGdldDFfX2l0ZW0gLmt0LXdpZGdldDFfX2luZm8gLmt0LXdpZGdldDFfX3RpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5zaWRlSW5mb2JhciAudGl0bGUtc2lkZWJhciB7XHJcbiAgICB3aWR0aDogMjcwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnNpZGUtYmFyLWJveCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2lkZS1iYXItYm94IGxpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnRleHQtaG92ZXItcHJpbWFyeTpob3ZlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2UsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xyXG4gICAgY29sb3I6ICMzNjk5RkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGUtYmFyLWJveCBsaTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmVcclxufVxyXG5cclxuLnN1YnRhc2stbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmVkZjI7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNzVyZW0gNnJlbSByZ2IoNTYgNjUgNzQgLyAzJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ub2ZmY2FudmFzIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDlweCAtM3B4IHJnYigwIDAgMCAvIDI1JSk7XHJcbn1cclxuXHJcbi53LTc1IHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbi5zdWJ0YXNrLWxpc3Q6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWRmMjtcclxufVxyXG5cclxuLnN1YnRhc2stcmFkaW8ge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uc3VidGFzay1saXN0IHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnN1YnRhc2stbGlzdCBwLnN1YnRhc2stbGlzdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4jYWNjb3JkaW9uRXhhbXBsZTUgLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLmFjY29yZGlvbi1zdmctaWNvbiAuY2FyZDpsYXN0LWNoaWxkIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24uYWNjb3JkaW9uLWxpZ2h0IC5jYXJkIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZTphZnRlciB7XHJcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLmFjY29yZGlvbi5hY2NvcmRpb24tbGlnaHQgLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRleHQtUmVqZWN0ZWQge1xyXG4gICAgY29sb3I6ICNFNjc0N0EgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtdW5kZXJBcHByb3ZhbCB7XHJcbiAgICBjb2xvcjogIzk4YzdiZiAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LXVuZGVyQXBwcm92YWwyIHtcclxuICAgIGNvbG9yOiAjOThjN2JmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LUNvbXBsZXRlUmVqZWN0ZWQge1xyXG4gICAgY29sb3I6ICNEODNDM0MgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtdW5kZXJBcHAge1xyXG4gICAgY29sb3I6ICM0NDk1RDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtVG9kbyB7XHJcbiAgICBjb2xvcjogIzQ1RjQ5NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1Db21wbGV0ZWQge1xyXG4gICAgY29sb3I6ICM0MUQzN0IgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXQubGFyZ2VyQ2hlY2tib3gge1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbn1cclxuXHJcbi50ZXh0YXJlYSB7XHJcbiAgICBoZWlnaHQ6IDM4MXB4O1xyXG59XHJcblxyXG4ua3QtY2hlY2tib3gge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogaW5oZXJpdDtcclxufVxyXG5cclxuLnByb2plY3QtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWNmZjUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLWN1c3RvbSB7XHJcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDRweCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2ZjZjVjICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICM5ZWViZjM7ICovXHJcbiAgICAvKiBib3JkZXItbGVmdDogNnB4IHNvbGlkICNhOGFhYWE1YzsgKi9cclxufVxyXG5cclxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1saXN0IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLyogRmlsdGVycyBEZXNpZ24gKi9cclxuXHJcbi5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudSB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7ICovXHJcbiAgICAgIHRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiAtMTAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yaWdodDogMTdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAxN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTVweDtcclxuICAgIGxlZnQ6IDMycHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICB9XHJcbiAgLnNjcm9sbC1kcm9we1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgLnN0b3Jlcy1zZWMgLm1lZ2EtZHJvcGRvd24tbWVudTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTdweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDE5cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xN3B4O1xyXG4gICAgbGVmdDogMzBweDtcclxuICAgIHotaW5kZXg6IDg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdG9yZXMtc2VjIC5tZWdhLWRyb3Bkb3duLW1lbnUxIC5maWx0ZXItYm94e1xyXG4gICAgd2lkdGg6IDMzLjMzMzMlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAudXAtYnRuIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjZyZW07XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1ZjQgIWltcG9ydGFudDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2IoMCAwIDAgLyAxNiUpLCAwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTIlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYigwIDAgMCAvIDE2JSksIDAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZmlsZS1maWVsZCAuZmlsZS1wYXRoLXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5maWxlLWZpZWxkIC5maWxlLXBhdGgtd3JhcHBlciAuZmlsZS1wYXRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0uY3VzLXVwbG9hZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcbi51cC1idG46aG92ZXIsIC51cC1idG46Zm9jdXMsIC51cC1idG46YWN0aXZlIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2IoMCAwIDAgLyAxOCUpLCAwIDRweCAxNXB4IDAgcmdiKDAgMCAwIC8gMTUlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2IoMCAwIDAgLyAxOCUpLCAwIDRweCAxNXB4IDAgcmdiKDAgMCAwIC8gMTUlKTtcclxufVxyXG4uZGlzYWJsZSB7IFxyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxyXG4gIH1cclxuICAua3QtcXVpY2stc2VhcmNoIC5rdC1xdWljay1zZWFyY2hfX2Zvcm0gLmlucHV0LWdyb3VwIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZGNmZDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICAuYmctYmx1ZWQgLmNsb3NlYnRuIGkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4gIH1cclxuICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"]
});

/***/ }),

/***/ 60598:
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.6.15
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() : 0;
})(this, function () {
  'use strict';
  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateProps = {
    awaitingPromise: new WeakMap(),
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };
  const swalPrefix = 'swal2-';
  /**
   * @param {string[]} items
   * @returns {object}
   */

  const prefix = items => {
    const result = {};

    for (const i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };

  const swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  const iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);
  const consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   *
   * @param {Array} arr
   * @returns {Array}
   */

  const uniqueArray = arr => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */


  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
  /**
   * Standardize console warnings
   *
   * @param {string | Array} message
   */


  const warn = message => {
    console.warn(`${consolePrefix} ${typeof message === 'object' ? message.join(' ') : message}`);
  };
  /**
   * Standardize console errors
   *
   * @param {string} message
   */


  const error = message => {
    console.error(`${consolePrefix} ${message}`);
  };
  /**
   * Private global state for `warnOnce`
   *
   * @type {Array}
   * @private
   */


  const previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */

  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string} useInstead
   */


  const warnAboutDeprecation = (deprecatedParam, useInstead) => {
    warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release. Please use "${useInstead}" instead.`);
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */


  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;
  /**
   * @param {any} arg
   * @returns {boolean}
   */


  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';
  /**
   * @param {any} arg
   * @returns {Promise}
   */


  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  /**
   * @param {any} arg
   * @returns {boolean}
   */


  const isPromise = arg => arg && Promise.resolve(arg) === arg;
  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */


  const getContainer = () => document.body.querySelector(`.${swalClasses.container}`);
  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */


  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };
  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */


  const elementByClass = className => {
    return elementBySelector(`.${className}`);
  };
  /**
   * @returns {HTMLElement | null}
   */


  const getPopup = () => elementByClass(swalClasses.popup);
  /**
   * @returns {HTMLElement | null}
   */


  const getIcon = () => elementByClass(swalClasses.icon);
  /**
   * @returns {HTMLElement | null}
   */


  const getIconContent = () => elementByClass(swalClasses['icon-content']);
  /**
   * @returns {HTMLElement | null}
   */


  const getTitle = () => elementByClass(swalClasses.title);
  /**
   * @returns {HTMLElement | null}
   */


  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);
  /**
   * @returns {HTMLElement | null}
   */


  const getImage = () => elementByClass(swalClasses.image);
  /**
   * @returns {HTMLElement | null}
   */


  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);
  /**
   * @returns {HTMLElement | null}
   */


  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);
  /**
   * @returns {HTMLElement | null}
   */


  const getConfirmButton = () => elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`);
  /**
   * @returns {HTMLElement | null}
   */


  const getDenyButton = () => elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`);
  /**
   * @returns {HTMLElement | null}
   */


  const getInputLabel = () => elementByClass(swalClasses['input-label']);
  /**
   * @returns {HTMLElement | null}
   */


  const getLoader = () => elementBySelector(`.${swalClasses.loader}`);
  /**
   * @returns {HTMLElement | null}
   */


  const getCancelButton = () => elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`);
  /**
   * @returns {HTMLElement | null}
   */


  const getActions = () => elementByClass(swalClasses.actions);
  /**
   * @returns {HTMLElement | null}
   */


  const getFooter = () => elementByClass(swalClasses.footer);
  /**
   * @returns {HTMLElement | null}
   */


  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);
  /**
   * @returns {HTMLElement | null}
   */


  const getCloseButton = () => elementByClass(swalClasses.close); // https://github.com/jkup/focusable/blob/master/index.js


  const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
  /**
   * @returns {HTMLElement[]}
   */

  const getFocusableElements = () => {
    const focusableElementsWithTabindex = Array.from(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort((a, b) => {
      const tabindexA = parseInt(a.getAttribute('tabindex'));
      const tabindexB = parseInt(b.getAttribute('tabindex'));

      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }

      return 0;
    });
    const otherFocusableElements = Array.from(getPopup().querySelectorAll(focusable)).filter(el => el.getAttribute('tabindex') !== '-1');
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => isVisible$1(el));
  };
  /**
   * @returns {boolean}
   */


  const isModal = () => {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };
  /**
   * @returns {boolean}
   */


  const isToast = () => {
    return getPopup() && hasClass(getPopup(), swalClasses.toast);
  };
  /**
   * @returns {boolean}
   */


  const isLoading = () => {
    return getPopup().hasAttribute('data-loading');
  }; // Remember state in cases where opening and handling a modal will fiddle with it.


  const states = {
    previousBodyPadding: null
  };
  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */

  const setInnerHtml = (elem, html) => {
    elem.textContent = '';

    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, `text/html`);
      Array.from(parsed.querySelector('head').childNodes).forEach(child => {
        elem.appendChild(child);
      });
      Array.from(parsed.querySelector('body').childNodes).forEach(child => {
        if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
          elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
        } else {
          elem.appendChild(child);
        }
      });
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */


  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }

    const classList = className.split(/\s+/);

    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };
  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */


  const removeCustomClasses = (elem, params) => {
    Array.from(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };
  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */


  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof params.customClass[className]}"`);
        return;
      }

      addClass(elem, params.customClass[className]);
    }
  };
  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass} inputClass
   * @returns {HTMLInputElement | null}
   */


  const getInput$1 = (popup, inputClass) => {
    if (!inputClass) {
      return null;
    }

    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);

      case 'checkbox':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);

      case 'radio':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);

      case 'range':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);

      default:
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
    }
  };
  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */


  const focusInput = input => {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   * @param {boolean} condition
   */


  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(className => {
      if (Array.isArray(target)) {
        target.forEach(elem => {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */


  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */


  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };
  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */


  const getDirectChildByClass = (elem, className) => {
    const children = Array.from(elem.children);

    for (let i = 0; i < children.length; i++) {
      const child = children[i];

      if (child instanceof HTMLElement && hasClass(child, className)) {
        return child;
      }
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */


  const applyNumericalStyle = (elem, property, value) => {
    if (value === `${parseInt(value)}`) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? `${value}px` : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} display
   */


  const show = function (elem) {
    let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };
  /**
   * @param {HTMLElement} elem
   */


  const hide = elem => {
    elem.style.display = 'none';
  };
  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */


  const setStyle = (parent, selector, property, value) => {
    /** @type {HTMLElement} */
    const el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */


  const toggle = function (elem, condition) {
    let display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
    condition ? show(elem, display) : hide(elem);
  };
  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */


  const isVisible$1 = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  /**
   * @returns {boolean}
   */


  const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
  /**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */


  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight);
  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */


  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  /**
   * @param {number} timer
   * @param {boolean} reset
   */


  const animateTimerProgressBar = function (timer) {
    let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const timerProgressBar = getTimerProgressBar();

    if (isVisible$1(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(() => {
        timerProgressBar.style.transition = `width ${timer / 1000}s linear`;
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };

  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = `${timerProgressBarPercent}%`;
  };

  const RESTORE_FOCUS_TIMEOUT = 100;
  /** @type {GlobalState} */

  const globalState = {};

  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };
  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise}
   */


  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }

      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };
  /**
   * Detect Node env
   *
   * @returns {boolean}
   */


  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses['html-container']}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses['progress-steps']}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses['html-container']}" id="${swalClasses['html-container']}"></div>
   <input class="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label for="${swalClasses.checkbox}" class="${swalClasses.checkbox}">
     <input type="checkbox" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses['validation-message']}" id="${swalClasses['validation-message']}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses['timer-progress-bar-container']}">
     <div class="${swalClasses['timer-progress-bar']}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '');
  /**
   * @returns {boolean}
   */

  const resetOldContainer = () => {
    const oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  const resetValidationMessage$1 = () => {
    globalState.currentInstance.resetValidationMessage();
  };

  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getDirectChildByClass(popup, swalClasses.input);
    const file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement} */

    const range = popup.querySelector(`.${swalClasses.range} input`);
    /** @type {HTMLOutputElement} */

    const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
    const select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement} */

    const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
    const textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage$1;
    file.onchange = resetValidationMessage$1;
    select.onchange = resetValidationMessage$1;
    checkbox.onchange = resetValidationMessage$1;
    textarea.oninput = resetValidationMessage$1;

    range.oninput = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };

    range.onchange = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
  };
  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */


  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;
  /**
   * @param {SweetAlertOptions} params
   */


  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };
  /**
   * @param {HTMLElement} targetElement
   */


  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */


  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    const container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };
  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */


  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    } // Object
    else if (typeof param === 'object') {
      handleObject(param, target);
    } // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };
  /**
   * @param {object} param
   * @param {HTMLElement} target
   */


  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    } // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };
  /**
   * @param {HTMLElement} target
   * @param {HTMLElement} elem
   */


  const handleJqueryElem = (target, elem) => {
    target.textContent = '';

    if (0 in elem) {
      for (let i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };
  /**
   * @returns {'webkitAnimationEnd' | 'animationend' | false}
   */


  const animationEndEvent = (() => {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    const testEl = document.createElement('div');
    const transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      // Chrome, Safari and Opera
      animation: 'animationend' // Standard syntax

    };

    for (const i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  })();
  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */


  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render all the buttons

    renderButtons(actions, loader, params); // Loader

    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };
  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */


  function renderButtons(actions, loader, params) {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton(); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }
  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */


  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
      return;
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }
  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */


  function renderButton(button, buttonType, params) {
    toggle(button, params[`show${capitalizeFirstLetter(buttonType)}Button`], 'inline-block');
    setInnerHtml(button, params[`${buttonType}ButtonText`]); // Set caption text

    button.setAttribute('aria-label', params[`${buttonType}ButtonAriaLabel`]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, `${buttonType}Button`);
    addClass(button, params[`${buttonType}ButtonClass`]);
  }
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderContainer = (instance, params) => {
    const container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container');
  };
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */


  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */


  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */


  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      const growClass = `grow-${grow}`;

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  } /// <reference path="../../../../sweetalert2.d.ts"/>

  /** @type {InputClass[]} */


  const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderInput = (instance, params) => {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(inputClass => {
      const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]); // set attributes

      setAttributes(inputClass, params.inputAttributes); // set class

      inputContainer.className = swalClasses[inputClass];

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };
  /**
   * @param {SweetAlertOptions} params
   */


  const showInput = params => {
    if (!renderInputType[params.input]) {
      error(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`);
      return;
    }

    const inputContainer = getInputContainer(params.input);
    const input = renderInputType[params.input](inputContainer, params);
    show(inputContainer); // input autofocus

    setTimeout(() => {
      focusInput(input);
    });
  };
  /**
   * @param {HTMLInputElement} input
   */


  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;

      if (!['type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };
  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */


  const setAttributes = (inputClass, inputAttributes) => {
    const input = getInput$1(getPopup(), inputClass);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };
  /**
   * @param {SweetAlertOptions} params
   */


  const setCustomClass = params => {
    const inputContainer = getInputContainer(params.input);

    if (typeof params.customClass === 'object') {
      addClass(inputContainer, params.customClass.input);
    }
  };
  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */


  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };
  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */


  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;

      if (typeof params.customClass === 'object') {
        addClass(label, params.customClass.inputLabel);
      }

      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };
  /**
   * @param {SweetAlertOptions['input']} inputType
   * @returns {HTMLElement}
   */


  const getInputContainer = inputType => {
    return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
  };
  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */


  const checkAndSetInputValue = (input, inputValue) => {
    if (['string', 'number'].includes(typeof inputValue)) {
      input.value = `${inputValue}`;
    } else if (!isPromise(inputValue)) {
      warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
    }
  };
  /** @type {Record<string, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */


  const renderInputType = {};
  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
    checkAndSetInputValue(input, params.inputValue);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };
  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };
  /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };
  /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */


  renderInputType.select = (select, params) => {
    select.textContent = '';

    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };
  /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */


  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };
  /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput$1(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkbox;
  };
  /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */


  renderInputType.textarea = (textarea, params) => {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);
    /**
     * @param {HTMLElement} el
     * @returns {number}
     */

    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight); // https://github.com/sweetalert2/sweetalert2/issues/2291


    setTimeout(() => {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

        const textareaResizeHandler = () => {
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);

          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = `${textareaWidth}px`;
          } else {
            getPopup().style.width = null;
          }
        };

        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    } // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    } // No content
    else {
      hide(htmlContainer);
    }

    renderInput(instance, params);
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderFooter = (instance, params) => {
    const footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }

    if (!params.icon && !params.iconHtml) {
      hide(icon);
      return;
    }

    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
      hide(icon);
      return;
    }

    show(icon); // Custom or default content

    setContent(icon, params);
    applyStyles(icon, params); // Animate icon

    addClass(icon, params.showClass.icon);
  };
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */


  const applyStyles = (icon, params) => {
    for (const iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }

    addClass(icon, iconTypes[params.icon]); // Icon color

    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgroundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  const adjustSuccessIconBackgroundColor = () => {
    const popup = getPopup();
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */

    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  const successIconHtml = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`;
  const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */

  const setContent = (icon, params) => {
    let oldContent = icon.innerHTML;
    let newContent;

    if (params.iconHtml) {
      newContent = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      newContent = successIconHtml;
      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    } else if (params.icon === 'error') {
      newContent = errorIconHtml;
    } else {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      newContent = iconContent(defaultIconHtml[params.icon]);
    }

    if (oldContent.trim() !== newContent.trim()) {
      setInnerHtml(icon, newContent);
    }
  };
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */


  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };
  /**
   * @param {string} content
   * @returns {string}
   */


  const iconContent = content => `<div class="${swalClasses['icon-content']}">${content}</div>`;
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderImage = (instance, params) => {
    const image = getImage();

    if (!params.imageUrl) {
      hide(image);
      return;
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup(); // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170

    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      popup.insertBefore(getLoader(), getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Color

    if (params.color) {
      popup.style.color = params.color;
    } // Background


    if (params.background) {
      popup.style.background = params.background;
    }

    hide(getValidationMessage()); // Classes

    addClasses$1(popup, params);
  };
  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */


  const addClasses$1 = (popup, params) => {
    // Default Class + showClass when updating Swal.update({})
    popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? params.showClass.popup : ''}`;

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses[`icon-${params.icon}`]);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      hide(progressStepsContainer);
      return;
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';

    if (params.currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === params.currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };
  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */


  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };
  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */


  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }

    return lineEl;
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderTitle = (instance, params) => {
    const title = getTitle();
    toggle(title, params.title || params.titleText, 'block');

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    }
  };
  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */


  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);

    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };
  /**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @param {SweetAlert2} instance
   * @returns {HTMLElement | null}
   */


  function getInput(instance) {
    const innerParams = privateProps.innerParams.get(instance || this);
    const domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput$1(domCache.popup, innerParams.input);
  }
  /*
   * Global function to determine if SweetAlert2 popup is shown
   */


  const isVisible = () => {
    return isVisible$1(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */


  const clickConfirm = () => getConfirmButton() && getConfirmButton().click();
  /*
   * Global function to click 'Deny' button
   */


  const clickDeny = () => getDenyButton() && getDenyButton().click();
  /*
   * Global function to click 'Cancel' button
   */


  const clickCancel = () => getCancelButton() && getCancelButton().click();

  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });
  /**
   * @param {GlobalState} globalState
   */

  const removeKeydownHandler = globalState => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */


  const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
    removeKeydownHandler(globalState);

    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(instance, e, dismissWith);

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  };
  /**
   * @param {SweetAlertOptions} innerParams
   * @param {number} index
   * @param {number} increment
   */


  const setFocus = (innerParams, index, increment) => {
    const focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      focusableElements[index].focus();
      return;
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };

  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];
  /**
   * @param {SweetAlert2} instance
   * @param {KeyboardEvent} e
   * @param {Function} dismissWith
   */

  const keydownHandler = (instance, e, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406


    if (e.isComposing || e.keyCode === 229) {
      return;
    }

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams);
    } // TAB
    else if (e.key === 'Tab') {
      handleTab(e, innerParams);
    } // ARROWS - switch focus between buttons
    else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key)) {
      handleArrows(e.key);
    } // ESC
    else if (e.key === 'Escape') {
      handleEsc(e, innerParams, dismissWith);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   */


  const handleEnter = (instance, e, innerParams) => {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }

    if (e.target && instance.getInput() && e.target instanceof HTMLElement && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };
  /**
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   */


  const handleTab = (e, innerParams) => {
    const targetElement = e.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;

    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    } // Cycle to the next button


    if (!e.shiftKey) {
      setFocus(innerParams, btnIndex, 1);
    } // Cycle to the prev button
    else {
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };
  /**
   * @param {string} key
   */


  const handleArrows = key => {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();

    if (document.activeElement instanceof HTMLElement && ![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
      return;
    }

    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    let buttonToFocus = document.activeElement;

    for (let i = 0; i < getActions().children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];

      if (!buttonToFocus) {
        return;
      }

      if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
        break;
      }
    }

    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };
  /**
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */


  const handleEsc = (e, innerParams, dismissWith) => {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };
  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */


  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  }; // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el === getContainer() || el.contains(getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };

  const unsetAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };
  /* istanbul ignore file */
  // Fix iOS scrolling http://stackoverflow.com/q/39626302


  const iOSfix = () => {
    const iOS = // @ts-ignore
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = `${offset * -1}px`;
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups();
    }
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1948
   */


  const addBottomPaddingForTallPopups = () => {
    const ua = navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

    if (iOSSafari) {
      const bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = `${bottomPanelHeight}px`;
      }
    }
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */


  const lockBodyScroll = () => {
    const container = getContainer();
    let preventTouchMove;
    /**
     * @param {TouchEvent} e
     */

    container.ontouchstart = e => {
      preventTouchMove = shouldPreventTouchMove(e);
    };
    /**
     * @param {TouchEvent} e
     */


    container.ontouchmove = e => {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };
  /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */


  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();

    if (isStylus(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== 'INPUT' && // #1603
    target.tagName !== 'TEXTAREA' && // #2266
    !(isScrollable(getHtmlContainer()) && // #1944
    getHtmlContainer().contains(target))) {
      return true;
    }

    return false;
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */


  const isStylus = event => {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */


  const isZoom = event => {
    return event.touches && event.touches.length > 1;
  };

  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  const fixScrollbar = () => {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = `${states.previousBodyPadding + measureScrollbar()}px`;
    }
  };

  const undoScrollbar = () => {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = `${states.previousBodyPadding}px`;
      states.previousBodyPadding = null;
    }
  };
  /*
   * Instance method to close sweetAlert
   */


  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      removeKeydownHandler(globalState);
    }

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); // workaround for #2088
    // for some reason removing the container in Safari will scroll the document to bottom

    if (isSafari) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);

    if (this.isAwaitingPromise()) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }

  function isAwaitingPromise() {
    return !!privateProps.awaitingPromise.get(this);
  }

  const triggerClosePopup = instance => {
    const popup = getPopup();

    if (!popup) {
      return false;
    }

    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }

    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);

    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }

  const handleAwaitingPromise = instance => {
    if (instance.isAwaitingPromise()) {
      privateProps.awaitingPromise.delete(instance); // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335

      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  const handlePopupAnimation = (instance, popup, innerParams) => {
    const container = getContainer(); // If animation is supported, animate

    const animationIsSupported = animationEndEvent && hasCssAnimation(popup);

    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }

      instance._destroy();
    });
  };
  /**
   * @param {SweetAlert2} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */


  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }
  /**
   * @param {HTMLInputElement} input
   * @param {boolean} disabled
   */


  function setInputDisabled(input, disabled) {
    if (!input) {
      return;
    }

    if (input.type === 'radio') {
      const radiosContainer = input.parentNode.parentNode;
      const radios = radiosContainer.querySelectorAll('input');

      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }

  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }

  function enableInput() {
    setInputDisabled(this.getInput(), false);
  }

  function disableInput() {
    setInputDisabled(this.getInput(), true);
  }
  /**
   * Show block with validation message
   *
   * @param {string} error
   */


  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    const input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  }
  /**
   * Hide block with validation message
   */


  function resetValidationMessage() {
    const domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    const input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  const deprecatedParams = {};
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */

  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */


  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */


  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };
  /**
   * @param {string} param
   */


  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn(`Unknown parameter "${param}"`);
    }
  };
  /**
   * @param {string} param
   */


  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn(`The parameter "${param}" is incompatible with toasts`);
    }
  };
  /**
   * @param {string} param
   */


  const checkIfParamIsDeprecated = param => {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */


  const showWarningsForParams = params => {
    if (params.backdrop === false && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    for (const param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };
  /**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */


  function update(params) {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
      return;
    }

    const validUpdatableParams = filterValidParams(params);
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }
  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */


  const filterValidParams = params => {
    const validUpdatableParams = {};
    Object.keys(params).forEach(param => {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn(`Invalid parameter to update: ${param}`);
      }
    });
    return validUpdatableParams;
  };
  /**
   * Dispose the current SweetAlert2 instance
   */


  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335

      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }

    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }

    disposeSwal(this);
  }
  /**
   * @param {SweetAlert2} instance
   */


  const disposeSwal = instance => {
    disposeWeakMaps(instance); // Unset this.params so GC will dispose it (#1569)
    // @ts-ignore

    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset currentInstance

    delete globalState.currentInstance;
  };
  /**
   * @param {SweetAlert2} instance
   */


  const disposeWeakMaps = instance => {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    // @ts-ignore
    if (instance.isAwaitingPromise()) {
      unsetWeakMaps(privateProps, instance);
      privateProps.awaitingPromise.set(instance, true);
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
    }
  };
  /**
   * @param {object} obj
   * @param {SweetAlert2} instance
   */


  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };

  var instanceMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput,
    close: close,
    isAwaitingPromise: isAwaitingPromise,
    rejectPromise: rejectPromise,
    handleAwaitingPromise: handleAwaitingPromise,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage,
    update: update,
    _destroy: _destroy
  });
  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  const showLoading = buttonToReplace => {
    let popup = getPopup();

    if (!popup) {
      new Swal(); // eslint-disable-line no-new
    }

    popup = getPopup();
    const loader = getLoader();

    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }

    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };

  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();

    if (!buttonToReplace && isVisible$1(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
  };
  /**
   * @typedef { string | number | boolean } InputValue
   */

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {string | number | File | FileList | null}
   */


  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };
  /**
   * @param {HTMLInputElement} input
   * @returns {number}
   */


  const getCheckboxValue = input => input.checked ? 1 : 0;
  /**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */


  const getRadioValue = input => input.checked ? input.value : null;
  /**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */


  const getFileValue = input => input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const handleInputOptions = (instance, params) => {
    const popup = getPopup();
    /**
     * @param {Record<string, any>} inputOptions
     */

    const processInputOptions = inputOptions => {
      populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error(`Error in inputValue promise: ${err}`);
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  const populateInputOptions = {
    /**
     * @param {HTMLElement} popup
     * @param {Record<string, any>} inputOptions
     * @param {SweetAlertOptions} params
     */
    select: (popup, inputOptions, params) => {
      const select = getDirectChildByClass(popup, swalClasses.select);
      /**
       * @param {HTMLElement} parent
       * @param {string} optionLabel
       * @param {string} optionValue
       */

      const renderOption = (parent, optionLabel, optionValue) => {
        const option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(inputOption => {
        const optionValue = inputOption[0];
        const optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          const optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },

    /**
     * @param {HTMLElement} popup
     * @param {Record<string, any>} inputOptions
     * @param {SweetAlertOptions} params
     */
    radio: (popup, inputOptions, params) => {
      const radio = getDirectChildByClass(popup, swalClasses.radio);
      inputOptions.forEach(inputOption => {
        const radioValue = inputOption[0];
        const radioLabel = inputOption[1];
        const radioInput = document.createElement('input');
        const radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        const label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      const radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @returns {Array<Array<string>>}
   */

  const formatInputOptions = inputOptions => {
    const result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };
  /**
   * @param {string} optionValue
   * @param {InputValue | Promise<InputValue> | { toPromise: () => InputValue }} inputValue
   * @returns {boolean}
   */


  const isSelected = (optionValue, inputValue) => {
    return inputValue && inputValue.toString() === optionValue.toString();
  };
  /**
   * @param {SweetAlert2} instance
   */


  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };
  /**
   * @param {SweetAlert2} instance
   */


  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {Function} dismissWith
   */


  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };
  /**
   * @param {SweetAlert2} instance
   * @param {'confirm' | 'deny'} type
   */


  const handleConfirmOrDenyWithInput = (instance, type) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams.input) {
      error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
      return;
    }

    const inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {string | number | File | FileList | null} inputValue
   * @param {'confirm' | 'deny'} type
   */


  const handleInputValidator = (instance, inputValue, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };
  /**
   * @param {SweetAlert2} instance
   * @param {any} value
   */


  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received

      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.close({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      instance.close({
        isDenied: true,
        value
      });
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {any} value
   */


  const succeedWith = (instance, value) => {
    instance.close({
      isConfirmed: true,
      value
    });
  };
  /**
   *
   * @param {SweetAlert2} instance
   * @param {string} error
   */


  const rejectWith = (instance, error) => {
    // @ts-ignore
    instance.rejectPromise(error);
  };
  /**
   *
   * @param {SweetAlert2} instance
   * @param {any} value
   */


  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received

      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      succeedWith(instance, value);
    }
  };

  const handlePopupClick = (instance, domCache, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  const handleToastClick = (instance, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      const innerParams = privateProps.innerParams.get(instance);

      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };
  /**
   * @param {*} innerParams
   * @returns {boolean}
   */


  const isAnyButtonShown = innerParams => {
    return innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton;
  };

  let ignoreOutsideClick = false;

  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = () => {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleModalClick = (instance, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      const innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;

  const isElement = elem => elem instanceof Element || isJqueryElement(elem);

  const argsToParams = args => {
    const params = {};

    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
        }
      });
    }

    return params;
  };

  function fire() {
    const Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Swal(...args);
  }
  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */


  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }

    }

    return MixinSwal;
  }
  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */


  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */


  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */


  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */


  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} n
   * @returns {number | undefined}
   */


  const increaseTimer = n => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */


  const isTimerRunning = () => {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};
  /**
   * @param {string} attr
   */

  function bindClickHandler() {
    let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  const bodyClickListener = event => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };

  var staticMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getIconContent: getIconContent,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    getProgressSteps: getProgressSteps,
    isLoading: isLoading,
    isVisible: isVisible,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    fire: fire,
    mixin: mixin,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  class Timer {
    /**
     * @param {Function} callback
     * @param {number} delay
     */
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }

    stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date().getTime() - this.started.getTime();
      }

      return this.remaining;
    }

    increase(n) {
      const running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }

    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }

    isRunning() {
      return this.running;
    }

  }

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */

  const getTemplateParams = params => {
    /** @type {HTMLTemplateElement} */
    const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */


    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */


  const getSwalParams = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */

    const swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
    swalParams.forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = param.getAttribute('name');
      const value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean') {
        result[paramName] = value !== 'false';
      } else if (typeof defaultParams[paramName] === 'object') {
        result[paramName] = JSON.parse(value);
      } else {
        result[paramName] = value;
      }
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */


  const getSwalFunctionParams = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */

    const swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
    swalFunctions.forEach(param => {
      const paramName = param.getAttribute('name');
      const value = param.getAttribute('value');
      result[paramName] = new Function(`return ${value}`)();
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */


  const getSwalButtons = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */

    const swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
    swalButtons.forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      result[`${type}ButtonText`] = button.innerHTML;
      result[`show${capitalizeFirstLetter(type)}Button`] = true;

      if (button.hasAttribute('color')) {
        result[`${type}ButtonColor`] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result[`${type}ButtonAriaLabel`] = button.getAttribute('aria-label');
      }
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */


  const getSwalImage = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */


  const getSwalIcon = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        /** @type {SweetAlertIcon} */
        // @ts-ignore
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */


  const getSwalInput = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      /** @type {SweetAlertInput} */
      // @ts-ignore

      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }
    /** @type {HTMLElement[]} */


    const inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));

    if (inputOptions.length) {
      result.inputOptions = {};
      inputOptions.forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {SweetAlertOptions}
   */


  const getSwalStringParams = (templateContent, paramNames) => {
    const result = {};

    for (const i in paramNames) {
      const paramName = paramNames[i];
      /** @type {HTMLElement} */

      const tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const showWarningsForElements = templateContent => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    Array.from(templateContent.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();

      if (!allowedElements.includes(tagName)) {
        warn(`Unrecognized element <${tagName}>`);
      }
    });
  };
  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */


  const showWarningsForAttributes = (el, allowedAttributes) => {
    Array.from(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn([`Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`, `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(', ')}` : 'To set the value, use HTML within the element.'}`]);
      }
    });
  };

  const SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */

  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }

    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }

    removeClass(container, swalClasses['no-transition']);
  };
  /**
   * @param {AnimationEvent} event
   */


  const swalOpenAnimationFinished = event => {
    const popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    const container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };
  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */


  const setScrollingVisibility = (container, popup) => {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };
  /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */


  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(() => {
      container.scrollTop = 0;
    });
  };
  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */


  const addClasses = (container, popup, params) => {
    addClass(container, params.showClass.backdrop); // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup, 'grid');
    setTimeout(() => {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var defaultInputValidators = {
    /**
     * @param {string} string
     * @param {string} validationMessage
     * @returns {Promise<void | string>}
     */
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },

    /**
     * @param {string} string
     * @param {string} validationMessage
     * @returns {Promise<void | string>}
     */
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };
  /**
   * @param {SweetAlertOptions} params
   */

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(key => {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }
  /**
   * @param {SweetAlertOptions} params
   */


  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }

    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  let currentInstance;

  class SweetAlert {
    constructor() {
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }

      currentInstance = this; // @ts-ignore

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      const outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      }); // @ts-ignore

      const promise = currentInstance._main(currentInstance.params);

      privateProps.promise.set(this, promise);
    }

    _main(userParams) {
      let mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      showWarningsForParams(Object.assign({}, mixinParams, userParams));

      if (globalState.currentInstance) {
        // @ts-ignore
        globalState.currentInstance._destroy();

        if (isModal()) {
          unsetAriaHidden();
        }
      }

      globalState.currentInstance = currentInstance;
      const innerParams = prepareParams(userParams, mixinParams);
      setParameters(innerParams);
      Object.freeze(innerParams); // clear the previous timer

      if (globalState.timeout) {
        globalState.timeout.stop();
        delete globalState.timeout;
      } // clear the restore focus timeout


      clearTimeout(globalState.restoreFocusTimeout);
      const domCache = populateDomCache(currentInstance);
      render(currentInstance, innerParams);
      privateProps.innerParams.set(currentInstance, innerParams);
      return swalPromise(currentInstance, domCache, innerParams);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    then(onFulfilled) {
      const promise = privateProps.promise.get(this);
      return promise.then(onFulfilled);
    }

    finally(onFinally) {
      const promise = privateProps.promise.get(this);
      return promise.finally(onFinally);
    }

  }
  /**
   * @param {SweetAlert2} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */


  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      // functions to handle all closings/dismissals

      /**
       * @param {DismissReason} dismiss
       */
      const dismissWith = dismiss => {
        // @ts-ignore
        instance.close({
          isDismissed: true,
          dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);

      domCache.confirmButton.onclick = () => {
        handleConfirmButtonClick(instance);
      };

      domCache.denyButton.onclick = () => {
        handleDenyButtonClick(instance);
      };

      domCache.cancelButton.onclick = () => {
        handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = () => {
        // @ts-ignore
        dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };
  /**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */


  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131

    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    return params;
  };
  /**
   * @param {SweetAlert2} instance
   * @returns {DomCache}
   */


  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };
  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */


  const setupTimer = (globalState, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(() => {
          if (globalState.timeout && globalState.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };
  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */


  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      blurActiveElement();
      return;
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };
  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */


  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  const blurActiveElement = () => {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  }; // Dear russian users visiting russian sites. Let's have fun.


  if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
    const now = new Date();
    const initiationDate = localStorage.getItem('swal-initiation');

    if (!initiationDate) {
      localStorage.setItem('swal-initiation', `${now}`);
    } else if ((now.getTime() - Date.parse(initiationDate)) / (1000 * 60 * 60 * 24) > 3) {
      setTimeout(() => {
        document.body.style.pointerEvents = 'none';
        const ukrainianAnthem = document.createElement('audio');
        ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';
        ukrainianAnthem.loop = true;
        document.body.appendChild(ukrainianAnthem);
        setTimeout(() => {
          ukrainianAnthem.play().catch(() => {// ignore
          });
        }, 2500);
      }, 500);
    }
  } // Assign instance methods from src/instanceMethods/*.js to prototype


  Object.assign(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor

  Object.assign(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

  Object.keys(instanceMethods).forEach(key => {
    /**
     * @param {...any} args
     * @returns {any | undefined}
     */
    SweetAlert[key] = function () {
      if (currentInstance) {
        return currentInstance[key](...arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.6.15';
  const Swal = SweetAlert; // @ts-ignore

  Swal.default = Swal;
  return Swal;
});

if (typeof this !== 'undefined' && this.Sweetalert2) {
  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
}

"undefined" != typeof document && function (e, t) {
  var n = e.createElement("style");
  if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
    n.innerHTML = t;
  } catch (e) {
    n.innerText = t;
  }
}(document, ".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");

/***/ })

}]);
//# sourceMappingURL=default-src_app__LayoutDashboard_project-info_truncate_pipe_ts-src_app__LayoutDashboard_to-do-5edd93.js.map