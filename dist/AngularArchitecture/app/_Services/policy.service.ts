import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiurlService } from './apiurl.service';
import { PolicyDTO } from '../_Models/policy-dto';
import { EmployeeDTO } from '../_Models/employee-dto';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  ObjPolicyDTO: PolicyDTO;
  objEmpDetailsDTO: EmployeeDTO;


  constructor(private http: HttpClient,
    private commonUrl: ApiurlService) {
    this.ObjPolicyDTO = new PolicyDTO;
    this.objEmpDetailsDTO = new EmployeeDTO;
  }
  readonly rootUrl = this.commonUrl.apiurl;

  GetPolicyDetails(userId) {
    this.ObjPolicyDTO.UserId=userId
    return this.http.post(this.rootUrl + "Policy/NewGetPolicyDetails", this.ObjPolicyDTO);
  }
  InsertUserPolicyAgreement(policyId, userId) {
    this.ObjPolicyDTO.PolicyId = policyId;
    this.ObjPolicyDTO.UserId = userId;
    return this.http.post(this.rootUrl + "Policy/NewInsertUserPolicyAgreement", this.ObjPolicyDTO);
  }
  ChangeUserPassword(obj) {
    this.objEmpDetailsDTO.Emp_No = obj.Emp_No;
    this.objEmpDetailsDTO.OldPassword = obj.OldPassword;
    this.objEmpDetailsDTO.NewPassword = obj.NewPassword;
    this.objEmpDetailsDTO.ConfirmPassword = obj.ConfirmPassword;

    return this.http.post(this.rootUrl + "Policy/NewUpdateUserPassword", this.objEmpDetailsDTO);
  }
}
