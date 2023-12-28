import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiurlService } from './apiurl.service';
import { SubTaskDTO } from '../_Models/sub-task-dto';

@Injectable({
  providedIn: 'root'
})
export class CreateprojectService {
  readonly rootUrl = this.commonUrl.apiurl;
  ObjSubTaskDTO: SubTaskDTO;
  constructor(private http:HttpClient,private commonUrl: ApiurlService) { 
    this.ObjSubTaskDTO=new SubTaskDTO();
  } 
  NewGetProjectCreationDetails(){
     this.ObjSubTaskDTO.Emp_No=localStorage.getItem('EmpNo');
     return this.http.post(this.rootUrl + "Projects/NewGetProjectCreationDetails",this.ObjSubTaskDTO);
  }


}
