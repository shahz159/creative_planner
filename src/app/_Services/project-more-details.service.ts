import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiurlService } from './apiurl.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectMoreDetailsService {

  readonly rootUrl = this.commonUrl.apiurl;
  constructor(private http:HttpClient,private commonUrl: ApiurlService) { }
  
  getProjectMoreDetails(projectcode:string){
    const body={   Project_Code:projectcode   }
      return this.http.post(this.rootUrl+'TestAPI/NewGetMoreProjectDetails',body);
  }

 
  getProjectTimeLine(projectcode:string,sortOrder:string,Empno:string){
    const body={
         Project_Code:projectcode,
         sort:sortOrder,
         Emp_No:Empno
    }
     return this.http.post(this.rootUrl+'TestAPI/NewGetProjectTimelineList',body)
  }




}
