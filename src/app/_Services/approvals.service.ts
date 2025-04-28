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
    this.obj_approvalDTO.Emp_no=obj.Emp_no;
    this.obj_approvalDTO.Leave_Code=obj.Leave_Code;
    this.obj_approvalDTO.Type=obj.Type;
    this.obj_approvalDTO.SNo=obj.SNo;
    this.obj_approvalDTO.FromDate=obj.FromDate;
    this.obj_approvalDTO.ToDate=obj.ToDate;
    this.obj_approvalDTO.Remarks=obj.Remarks;
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

  NewGetMeetingApprovals(obj: ApprovalDTO) {
    this.obj_approvalDTO.Emp_no = obj.Emp_no;
    this.obj_approvalDTO.Schedule_Id=obj.Schedule_Id;
    return this.http.post(this.rootUrl + "ApprovalAPI/NewGetMeetingApprovals", this.obj_approvalDTO);
  }

  NewUpdateMeetingRequestAccess(obj: ApprovalDTO) {
    this.obj_approvalDTO.SNo = obj.SNo;
    this.obj_approvalDTO.Schedule_Id=obj.Schedule_Id;
    this.obj_approvalDTO.Type = obj.Type;
    return this.http.post(this.rootUrl + "ApprovalAPI/NewUpdateMeetingRequestAccess", this.obj_approvalDTO);
  }


  NewGetLeaveComments(obj:ApprovalDTO){
     this.obj_approvalDTO.Emp_no=obj.Emp_no;
     this.obj_approvalDTO.Request_type=obj.Request_type;
     return this.http.post(this.rootUrl+"ApprovalAPI/NewGetLeaveComments",this.obj_approvalDTO);
  }

 
  NewGetMeetingActivity(obj: ApprovalDTO){
    this.obj_approvalDTO.Schedule_Id=obj.Schedule_Id;
    return this.http.post(this.rootUrl+"ApprovalAPI/NewGetMeetingActivity",this.obj_approvalDTO);
  }
  

  NewGetEmployeeLeaveResponse(obj:ApprovalDTO){
     this.obj_approvalDTO.Emp_no=obj.Emp_no;
     this.obj_approvalDTO.Leave_Code=obj.Leave_Code;
     this.obj_approvalDTO.Request_type=obj.Request_type;
     return this.http.post(this.rootUrl+"ApprovalAPI/NewGetEmployeeLeaveResponse",this.obj_approvalDTO);
  }

  NewGetUserActivity(empNo:string){  
    this.obj_approvalDTO.Emp_no=empNo;
    return this.http.post(this.rootUrl+"ApprovalAPI/NewGetUserActivity",this.obj_approvalDTO);
  }



  Email_GenerateAs(emailOf:'NEW_LEAVE'|'MANAGER_APPROVE'|'MANAGER_REJECT'|'HR_APPROVE_CASUAL'|'HR_APPROVE_LOCAL'|'HR_APPROVE_INTERNATIONAL'|'HR_REJECT',
    leaveid,leavename,leavefrom,leaveto,Empid,Empname,Empemail,Empcomp,CompCode,managerid,managername,manageremail,hrid,hrname,hremail,
    Com_PayrollId,Com_PayrollName,Com_PayrollEmail,PayrollCompany,Com_TicketingId,Com_TicketingName,Com_TicketingEmail,TicketingCompany,Com_ExitentryId,
    Com_ExitentryName,Com_ExitentryEmail,ExitentryCompany){
debugger
      // SAME INPUTS props to all
    this.obj_approvalDTO.leaveid=leaveid;
    this.obj_approvalDTO.leavename=leavename;
    this.obj_approvalDTO.leavefrom=leavefrom;
    this.obj_approvalDTO.leaveto=leaveto;
    this.obj_approvalDTO.Empid=Empid;
    this.obj_approvalDTO.Empname=Empname;
    this.obj_approvalDTO.Empemail=Empemail;
    this.obj_approvalDTO.Empcomp=Empcomp;
    this.obj_approvalDTO.CompCode=CompCode;
    this.obj_approvalDTO.managerid=managerid;
    this.obj_approvalDTO.managername=managername;
    this.obj_approvalDTO.manageremail=manageremail;
    this.obj_approvalDTO.hrid=hrid;
    this.obj_approvalDTO.hrname=hrname;
    this.obj_approvalDTO.hremail=hremail;
    this.obj_approvalDTO.Com_PayrollId=Com_PayrollId;
    this.obj_approvalDTO.Com_PayrollName=Com_PayrollName;
    this.obj_approvalDTO.Com_PayrollEmail=Com_PayrollEmail;
    this.obj_approvalDTO.PayrollCompany=PayrollCompany;
    this.obj_approvalDTO.Com_TicketingId=Com_TicketingId;
    this.obj_approvalDTO.Com_TicketingName=Com_TicketingName;
    this.obj_approvalDTO.Com_TicketingEmail=Com_TicketingEmail;
    this.obj_approvalDTO.TicketingCompany=TicketingCompany;
    this.obj_approvalDTO.Com_ExitentryId=Com_ExitentryId;
    this.obj_approvalDTO.Com_ExitentryName=Com_ExitentryName;
    this.obj_approvalDTO.Com_ExitentryEmail=Com_ExitentryEmail;
    this.obj_approvalDTO.ExitentryCompany=ExitentryCompany;
     // SAME INPUT props to all

    let controllerPath='';
    if(emailOf=='NEW_LEAVE')
      controllerPath='ApprovalAPI/NewTM_Leave';
    else if(emailOf=='MANAGER_APPROVE')
      controllerPath='ApprovalAPI/Manger_ConfirmationEmail';
    else if(emailOf=='MANAGER_REJECT')
      controllerPath='ApprovalAPI/Rejection_MangerEmail';
    else if(emailOf=='HR_APPROVE_CASUAL')
      controllerPath='ApprovalAPI/HR_CasualEmail';
    else if(emailOf=='HR_APPROVE_LOCAL')
      controllerPath='ApprovalAPI/HR_LocalConfirmationEmail';
    else if(emailOf=='HR_APPROVE_INTERNATIONAL')
      controllerPath='ApprovalAPI/HR_NationalConfirmationEmail';
    else if(emailOf=='HR_REJECT')
      controllerPath='ApprovalAPI/Rejection_HREmail';

    return this.http.post(this.rootUrl+controllerPath,this.obj_approvalDTO);
  }


}
