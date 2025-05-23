import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiurlService } from './apiurl.service';
import { SubTaskDTO } from '../_Models/sub-task-dto';
import { ProjectDetailsDTO } from '../_Models/project-details-dto';

@Injectable({
  providedIn: 'root'
})
export class CreateprojectService {
  readonly rootUrl = this.commonUrl.apiurl;
  readonly rootUrlcore = this.commonUrl.apiurlcore;
  ObjSubTaskDTO: SubTaskDTO;
  constructor(private http:HttpClient,private commonUrl: ApiurlService) {
    this.ObjSubTaskDTO=new SubTaskDTO();
  }
  NewGetProjectCreationDetails(){
     this.ObjSubTaskDTO.Emp_No=localStorage.getItem('EmpNo');
     return this.http.post(this.rootUrl + "Projects/NewGetProjectCreationDetails",this.ObjSubTaskDTO);
  }

  NewGetAssignedTaskDetails(){
    this.ObjSubTaskDTO.Emp_No=localStorage.getItem('EmpNo');
    return this.http.post(this.rootUrl + "Projects/NewGetAssignedTaskDetails",this.ObjSubTaskDTO)
  }


  NewInsertNewProject(prjDTO:ProjectDetailsDTO){
      return this.http.post(this.rootUrl+'Projects/NewInsertNewProject',prjDTO);
  }



  NewUpdateFileUploadsByProjectCode(formData:FormData){
       return this.http.post(this.rootUrl+'Notification/NewUpdateFileUploadsByProjectCode',formData);
  }

  NewUpdateFileUploadsByProjectCodeCore(formData:FormData){
    return this.http.post(this.rootUrlcore+'Notification/NewUpdateFileUploadsByProjectCodeCore',formData);
  }

  _AzureUpdateFileUploadsByProjectCode(formData:FormData){
    return this.http.post(this.rootUrlcore+'Azure/NewUpdateFileUploadsByProjectCodeCore',formData);
  }

  NewUpdateNewProjectApproval(prjDTO:ProjectDetailsDTO){
       return this.http.post(this.rootUrl+'Projects/NewUpdateNewProjectApproval',prjDTO);
  }

  NewDeleteRejectAssignTask(prjDTO:ProjectDetailsDTO){
    return this.http.post(this.rootUrl+'Projects/NewDeleteRejectAssignTask',prjDTO);
  }


  NewDeleteProjectTemplate(prjDTO:ProjectDetailsDTO){
    return this.http.post(this.rootUrl+'Projects/NewDeleteProjectTemplate',prjDTO);
  }



  GetCPProjectCost(prjDTO:ProjectDetailsDTO){
      return this.http.post('https://cswebapps.com/ProjectCostAPI/api/ProjectCost/GetCPProjectCost',prjDTO);
  }


  NewDeleteDraft(prjDTO:ProjectDetailsDTO){
     return this.http.post(this.rootUrl+'Projects/NewDeleteDraft',prjDTO);
  }

  NewGetProjectnameValidation(empNo:string,projectName:string){
     const _pdto=new ProjectDetailsDTO();
     _pdto.Emp_No=empNo;
     _pdto.Project_Name=projectName;
     return this.http.post(this.rootUrl+'Projects/NewGetProjectnameValidation',_pdto);
  }


}
