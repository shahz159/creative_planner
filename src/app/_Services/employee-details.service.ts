import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeDTO } from '../_Models/employee-dto';
import { ApiurlService } from './apiurl.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {
  objEmployeeDTO: EmployeeDTO
  CurrentUserId: string;

  constructor(
    private http: HttpClient,
    private commonUrl: ApiurlService

  ) {
    this.objEmployeeDTO = new EmployeeDTO;
    this.CurrentUserId = sessionStorage.getItem('Session_EmpNo');
  }
  readonly rootUrl = this.commonUrl.apiurl;


  GetEmployeeDetails(EmpNo) {
    this.objEmployeeDTO.Emp_No = EmpNo;
    return this.http.post(this.rootUrl + "Policy/NewGetEmployeeDetails", this.objEmployeeDTO);
  }

}



