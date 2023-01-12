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
    
    return this.http.post(this.rootUrl + "ApprovalAPI/NewGetApprovalStatus", this.obj_approvalDTO);

  }

  GetRejectComments(obj: ApprovalDTO) {
    this.obj_approvalDTO.Emp_no=obj.Emp_no;
    this.obj_approvalDTO.rejectType = obj.rejectType;
    this.obj_approvalDTO.Status = obj.Status;
    
    return this.http.post(this.rootUrl + "ApprovalAPI/NewGetRejectCommentsbyRejectType", this.obj_approvalDTO);

  }



  InsertAcceptApprovalService(obj: ApprovalDTO) {
    this.obj_approvalDTO.Emp_no = obj.Emp_no;
    this.obj_approvalDTO.Project_Code = obj.Project_Code;
    this.obj_approvalDTO.Request_type = obj.Request_type;
    this.obj_approvalDTO.Remarks = obj.Remarks;

    return this.http.post(this.rootUrl + "ApprovalAPI/NewInsertAcceptApprovalService", this.obj_approvalDTO);

  }

  
  InsertConditionalAcceptApprovalService(obj: ApprovalDTO) {
    this.obj_approvalDTO.Emp_no = obj.Emp_no;
    this.obj_approvalDTO.Project_Code = obj.Project_Code;
    this.obj_approvalDTO.Request_type = obj.Request_type;
    this.obj_approvalDTO.Remarks = obj.Remarks;

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
}
