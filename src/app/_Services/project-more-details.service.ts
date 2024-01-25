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


}
