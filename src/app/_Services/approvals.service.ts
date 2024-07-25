import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApprovalDTO } from '../_Models/approval-dto';
import { ApiurlService } from './apiurl.service';

@Injectable({
  providedIn: 'root'
})
export class ApprovalsService {

  obj_approvalDTO: ApprovalDTO;

  constructor(private http: HttpClient, private commonUrl: ApiurlService) {
      this.obj_approvalDTO = new ApprovalDTO();
   }

   readonly rootUrl = this.commonUrl.apiurl;

   GetApprovalStatus(obj: ApprovalDTO) {
    this.obj_approvalDTO.Project_Code = obj.Project_Code;
    this.obj_approvalDTO.standardid = obj.standardid;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewGetApprovalStatus", this.obj_approvalDTO);
  }

  GetProjectApproval(pcode: string) {
    this.obj_approvalDTO.Project_Code = pcode;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewGetProjectApprovals", this.obj_approvalDTO);
  }


  GetStandardApprovals(pcode :string,pgno:number=1,pgsz:number=10){
    this.obj_approvalDTO.Project_Code=pcode;
    this.obj_approvalDTO.PageNumber=pgno;
    this.obj_approvalDTO.RowsOfPage=pgsz;
    return this.http.post(this.rootUrl+"ApprovalAPI/NewGetStandardApprovals",this.obj_approvalDTO)
  }

  GetAppovalandActionDetails(obj: ApprovalDTO) {
    this.obj_approvalDTO.Project_Code = obj.Project_Code;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewGetAppovalandActionDetails", this.obj_approvalDTO);
  }

  GetGlobalRejectList(pcode) {
    this.obj_approvalDTO.Project_Code = "";

    return this.http.post(this.rootUrl + "ApprovalAPI/NewGetGlobalRejectList", this.obj_approvalDTO);
  }

  GetHoldDate(obj: ApprovalDTO) {
    this.obj_approvalDTO.Project_Code = obj.Project_Code;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewGetHoldDate", this.obj_approvalDTO);
  }

  GetRejecttype(obj: ApprovalDTO) {
    this.obj_approvalDTO.Project_Code = obj.Project_Code;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewGetRejectType", this.obj_approvalDTO);
  }

  UpdateReleaseDate(obj: ApprovalDTO) {
    this.obj_approvalDTO.Project_Code = obj.Project_Code;
    this.obj_approvalDTO.hold_date = obj.hold_date;
    this.obj_approvalDTO.Emp_no = obj.Emp_no;
    this.obj_approvalDTO.Remarks = obj.Remarks;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewUpdateReleasedate", this.obj_approvalDTO);
  }

  NewResponseService(obj: ApprovalDTO) {
    this.obj_approvalDTO.Emp_no = obj.Emp_no;
    this.obj_approvalDTO.Project_Code = obj.Project_Code;
    this.obj_approvalDTO.Request_Date = obj.Request_Date;
    this.obj_approvalDTO.Request_type = obj.Request_type;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewResponseServiceforApprovals", this.obj_approvalDTO);
  }

  NewMultiResponseService(obj: ApprovalDTO) {
    this.obj_approvalDTO.responselist = obj.responselist;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewMultiResponseforApprovals", this.obj_approvalDTO);
  }

  NewUpdateAcceptApprovalsService(obj) {
    return this.http.post(this.rootUrl + "ApprovalAPI/UpdateAcceptApprovals",obj);
  }

  NewUpdateRejectApprovalsService(obj) {
    return this.http.post(this.rootUrl + "ApprovalAPI/UpdateRejectApprovals",obj);
  }

  NewUpdateSingleAcceptApprovalsService(obj) {
    return this.http.post(this.rootUrl + "ApprovalAPI/UpdateSingleAcceptApproval",obj);
  }

  NewUpdateSingleRejectApprovalsService(obj) {
    return this.http.post(this.rootUrl + "ApprovalAPI/UpdateSingleRejectApprovals",obj);
  }

  GetRejectComments(obj: ApprovalDTO) {
    this.obj_approvalDTO.Emp_no=obj.Emp_no;
    this.obj_approvalDTO.rejectType = obj.rejectType;
    this.obj_approvalDTO.Project_Code = obj.Project_Code;
    this.obj_approvalDTO.Status = obj.Status;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewGetRejectCommentsbyRejectType", this.obj_approvalDTO);

  }

  GetGlobalRejectComments(obj: ApprovalDTO) {
    this.obj_approvalDTO.Emp_no=obj.Emp_no;
    this.obj_approvalDTO.rejectType = obj.rejectType;
    this.obj_approvalDTO.Project_Code = obj.Project_Code;
    this.obj_approvalDTO.Status = obj.Status;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewGetGlobalRejectComments", this.obj_approvalDTO);

  }

  GetEmployeeLeaveDetail(submitby,Leave_code){
    this.obj_approvalDTO.Emp_no=submitby.trim();
    this.obj_approvalDTO.Leave_Code=Leave_code.trim();
    return this.http.post(this.rootUrl + "ApprovalAPI/NewGetEmployeeLeaveDetails", this.obj_approvalDTO)
  }


  approveLeaveRequest(obj:ApprovalDTO){
    this.obj_approvalDTO.Project_Code=obj.Project_Code;
    this.obj_approvalDTO.Type=obj.Type;
    this.obj_approvalDTO.SNo=obj.SNo;
    this.obj_approvalDTO.Remarks=obj.Remarks;
    this.obj_approvalDTO.From_Date=obj.From_Date;
    this.obj_approvalDTO.End_Date=obj.End_Date;
    this.obj_approvalDTO.sendFrom=obj.sendFrom;
    return this.http.post(this.rootUrl + "ApprovalAPI/NewUpdateLeaveRequest", this.obj_approvalDTO)
  }



  InsertAcceptApprovalService(obj: ApprovalDTO) {
    this.obj_approvalDTO.Emp_no = obj.Emp_no;
    this.obj_approvalDTO.Project_Code = obj.Project_Code;
    this.obj_approvalDTO.Request_type = obj.Request_type;
    this.obj_approvalDTO.Remarks = obj.Remarks;
return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertAcceptApprovalService", this.obj_approvalDTO);
  }

  InsertUpdateProjectCancelReleaseService(obj: ApprovalDTO) {
    this.obj_approvalDTO.Emp_no = obj.Emp_no;
    this.obj_approvalDTO.Project_Code = obj.Project_Code;
    this.obj_approvalDTO.Request_type = obj.Request_type;
    this.obj_approvalDTO.Remarks = obj.Remarks;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertUpdateProjectCancelRelease", this.obj_approvalDTO);
  }

  InsertTransferApprovalService(obj: ApprovalDTO) {
    this.obj_approvalDTO.Emp_no = obj.Emp_no;
    this.obj_approvalDTO.Responsible=obj.Responsible;
    this.obj_approvalDTO.deadline=obj.deadline;
    this.obj_approvalDTO.Project_Code = obj.Project_Code;
    this.obj_approvalDTO.Remarks = obj.Remarks;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertTransferApprovalService", this.obj_approvalDTO);

  }

  InsertProjectTransfer(obj: ApprovalDTO) {
    this.obj_approvalDTO.Emp_no = obj.Emp_no;
    this.obj_approvalDTO.Responsible=obj.Responsible;
    this.obj_approvalDTO.Project_Code = obj.Project_Code;
    this.obj_approvalDTO.Remarks = obj.Remarks;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertProjectTransfer", this.obj_approvalDTO);

  }

  InsertForwardApprovalService(obj: ApprovalDTO) {
    this.obj_approvalDTO.Emp_no = obj.Emp_no;
    this.obj_approvalDTO.Responsible=obj.Responsible;
    this.obj_approvalDTO.deadline=obj.deadline;
    this.obj_approvalDTO.Project_Code = obj.Project_Code;
    this.obj_approvalDTO.Remarks = obj.Remarks;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertForwardApprovalService", this.obj_approvalDTO);

  }

  InsertRevertApprovalService(obj: ApprovalDTO) {
    this.obj_approvalDTO.Emp_no = obj.Emp_no;
    this.obj_approvalDTO.Responsible=obj.Responsible;
    this.obj_approvalDTO.deadline=obj.deadline;
    this.obj_approvalDTO.Project_Code = obj.Project_Code;
    this.obj_approvalDTO.Remarks = obj.Remarks;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertRevertApprovalService", this.obj_approvalDTO);

  }


  InsertConditionalAcceptApprovalService(obj: ApprovalDTO) {
    this.obj_approvalDTO.Emp_no = obj.Emp_no;
    this.obj_approvalDTO.Project_Code = obj.Project_Code;
    this.obj_approvalDTO.Request_type = obj.Request_type;
    this.obj_approvalDTO.Remarks = obj.Remarks;
    
    this.obj_approvalDTO.taskname=obj.taskname;
    this.obj_approvalDTO.projecttype=obj.projecttype;
    this.obj_approvalDTO.assignto=obj.assignto;
    this.obj_approvalDTO.portfolioId=obj.portfolioId;
    this.obj_approvalDTO.startdate=obj.startdate;
    this.obj_approvalDTO.enddate=obj.enddate;
    this.obj_approvalDTO.SubmissionType=obj.SubmissionType;
    return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertConditionalAcceptApprovalService", this.obj_approvalDTO);
  }

  InsertRejectApprovalService(obj: ApprovalDTO) {
    this.obj_approvalDTO.Emp_no = obj.Emp_no;
    this.obj_approvalDTO.Project_Code = obj.Project_Code;
    this.obj_approvalDTO.Request_type = obj.Request_type;
    this.obj_approvalDTO.rejectType = obj.rejectType;
    this.obj_approvalDTO.Remarks = obj.Remarks;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertRejectApprovalsService", this.obj_approvalDTO);

  }

  InsertStandardApprovalService(obj: ApprovalDTO) {
    this.obj_approvalDTO.Emp_no = obj.Emp_no;
    this.obj_approvalDTO.Project_Code = obj.Project_Code;
    this.obj_approvalDTO.Request_Date = obj.Request_Date;
    this.obj_approvalDTO.Request_type = obj.Request_type;
    this.obj_approvalDTO.rejectType = obj.rejectType;
    this.obj_approvalDTO.Remarks = obj.Remarks;
    this.obj_approvalDTO.approvaltype = obj.approvaltype;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertStandardApprovals", this.obj_approvalDTO);

  }


  NewUpdateNewProjectDetails(obj: ApprovalDTO) {
    this.obj_approvalDTO.Emp_no = obj.Emp_no;
    this.obj_approvalDTO.Project_Code = obj.Project_Code;
    this.obj_approvalDTO.json = obj.json;
    this.obj_approvalDTO.Remarks = obj.Remarks;
    this.obj_approvalDTO.isApproval = obj.isApproval;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewUpdateNewProjectDetails", this.obj_approvalDTO);

  }
}
