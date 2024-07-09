import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiurlService } from './apiurl.service';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';

@Injectable({
  providedIn: 'root'
})
export class ProjectMoreDetailsService {

  readonly rootUrl = this.commonUrl.apiurl;
  ObjSubTaskDTO:SubTaskDTO;
  constructor(private http:HttpClient,private commonUrl: ApiurlService) {
    this.ObjSubTaskDTO = new SubTaskDTO();
   }

  getProjectMoreDetails(projectcode:string){
    this.ObjSubTaskDTO.Project_Code=projectcode;
      return this.http.post(this.rootUrl+'TestAPI/NewGetMoreProjectDetails',this.ObjSubTaskDTO);
  }

  getRequestAccessDetails(projectcode:string){
    this.ObjSubTaskDTO.Project_Code=projectcode;
      return this.http.post(this.rootUrl+'TestAPI/NewGetRequestAccessDetails',this.ObjSubTaskDTO);
  }

  getProjectTimeLine(projectcode:string,sortOrder:string,Empno:string){
    this.ObjSubTaskDTO.Project_Code=projectcode;
    this.ObjSubTaskDTO.sort=sortOrder;
    this.ObjSubTaskDTO.Emp_No=Empno;
     return this.http.post(this.rootUrl+'TestAPI/NewGetProjectTimelineList',this.ObjSubTaskDTO)
  }

  NewInsertProjectRequestAccesss(Project_Code:string,Remarks:string,Emp_No:string){
    this.ObjSubTaskDTO.Project_Code=Project_Code;
    this.ObjSubTaskDTO.Remarks=Remarks;
    this.ObjSubTaskDTO.Emp_No=Emp_No;
     return this.http.post(this.rootUrl+'Projects/NewInsertProjectRequestAccesss',this.ObjSubTaskDTO)
  }



  NewGetEmployeeMeetings(EmpNo:any,pcode:any){
      this.ObjSubTaskDTO.Emp_No=EmpNo;
      this.ObjSubTaskDTO.Project_Code=pcode;

      return this.http.post(this.rootUrl+'CalenderAPI/NewGetEmployeeMeetings',this.ObjSubTaskDTO);
  }


  NewLinkMeetingInProjectDetails(EventNumber:string,Emp_No:string,Project_Code:string){
      this.ObjSubTaskDTO.Emp_No=Emp_No;
      this.ObjSubTaskDTO.Project_Code=Project_Code;
      this.ObjSubTaskDTO.EventNumber=EventNumber;
      return this.http.post(this.rootUrl+'CalenderAPI/NewLinkMeetingInProjectDetails',this.ObjSubTaskDTO);
  }

  NewLinkMeetingInPortfolio(EventNumber:string,Emp_No:string,portfolio_id:string){
    this.ObjSubTaskDTO.Emp_No=Emp_No;
    this.ObjSubTaskDTO.portfolio_id= portfolio_id;
    this.ObjSubTaskDTO.EventNumber=EventNumber;
    return this.http.post(this.rootUrl+'CalenderAPI/NewLinkMeetingInPortfolio',this.ObjSubTaskDTO);
}


NewUpdateProjectAuditor(project_code:string,empno:string,empToasAudit:string){
    this.ObjSubTaskDTO.Project_Code=project_code;
    this.ObjSubTaskDTO.Emp_No=empno;
    this.ObjSubTaskDTO.Remarks='';
    this.ObjSubTaskDTO.auditor=empToasAudit; 
    return this.http.post(this.rootUrl+'Category/NewUpdateProjectAuditor',this.ObjSubTaskDTO);
}


NewDeleteProjectRACIS(project_code:string,empno:string,auditor:any,teamsupport:any,remarks:string){
  this.ObjSubTaskDTO.Project_Code=project_code;
  this.ObjSubTaskDTO.Emp_No=empno;
  this.ObjSubTaskDTO.Remarks=remarks;
  this.ObjSubTaskDTO.Team_Support=teamsupport;
  this.ObjSubTaskDTO.auditor=auditor; 
   
  return this.http.post(this.rootUrl+'Category/NewDeleteProjectRACIS',this.ObjSubTaskDTO);
}



NewUpdateProjectAuditApproval(project_code:string,empno:string,auditor:string,remarks:string){
  this.ObjSubTaskDTO.Project_Code=project_code;
  this.ObjSubTaskDTO.Emp_No=empno;
  this.ObjSubTaskDTO.auditor=auditor;
  this.ObjSubTaskDTO.Remarks=remarks;
  return this.http.post(this.rootUrl+'ApprovalAPI/NewUpdateProjectAuditApproval',this.ObjSubTaskDTO);
}




NewUpdateTransferProjectComplete(project_code:string,empno:string,remarks:string,newowner:string){
  this.ObjSubTaskDTO.Project_Code=project_code;
  this.ObjSubTaskDTO.Emp_No=empno;
  this.ObjSubTaskDTO.Remarks=remarks;
  this.ObjSubTaskDTO.owner=newowner;
  return this.http.post(this.rootUrl+'ApprovalAPI/NewUpdateTransferProjectComplete',this.ObjSubTaskDTO);
}



}
