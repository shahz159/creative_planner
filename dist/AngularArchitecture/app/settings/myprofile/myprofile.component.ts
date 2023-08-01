import { Component, OnInit } from '@angular/core';
import { EmployeeDTO } from 'src/app/_Models/employee-dto';
import { EmployeeDetailsService } from 'src/app/_Services/employee-details.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { OldPwdValidators } from '../myprofile/old-pwd-validators';
import { PolicyService } from 'src/app/_Services/policy.service';
import { NotificationService } from 'src/app/_Services/notification.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  form1: FormGroup;
  _passwordHide: boolean = true;


  _EmpNo = localStorage.getItem('EmpNo');
  Oldpassword: any;
  objEmployeeDTO: EmployeeDTO;
  EmployeeDetails_List: any;
  FullName: any;
  CompanyName: any;
  DateOfJoin: any;
  Designation: any;
  Department: any;
  Email: any;
  Position: any;
  Role: any;
  Gender: any;
  Password: any;
  LoginUserName: any;


  constructor(fb: FormBuilder,
    private EmpDetailsService: EmployeeDetailsService,
    private PolicyService: PolicyService,
    private notifyService: NotificationService,
  ) {
    this.objEmployeeDTO = new EmployeeDTO;
    this.form1 = fb.group({
      'oldPwd': ['', Validators.required, OldPwdValidators.OldPasswordMethod],
      'newPwd': ['', Validators.required],
      'confirmPwd': ['', Validators.required]
    }, {
      validator: OldPwdValidators.matchPwds
    });

  }

  ngOnInit(): void {
    this.EmpDetailsService.GetEmployeeDetails(this._EmpNo)
      .subscribe(data => {
        this.EmployeeDetails_List = JSON.parse(data[0]['EmpDetailsJson']);
        // console.log(this.EmployeeDetails_List);
        this.FullName = this.EmployeeDetails_List[0]['TM_DisplayName'];
        //console.log(this.FullName);
        this.CompanyName = this.EmployeeDetails_List[0]['Com_Name'];
        this.DateOfJoin = this.EmployeeDetails_List[0]['DateOfJoin'];
        this.Designation = this.EmployeeDetails_List[0]['Designation_Name'];
        this.Department = this.EmployeeDetails_List[0]['Emp_Dept_No'];
        this.Email = this.EmployeeDetails_List[0]['Emp_Email'];
        this.Position = this.EmployeeDetails_List[0]['Emp_Position_Name'];
        this.Role = this.EmployeeDetails_List[0]['Emp_SystemRole'];
        this.Gender = this.EmployeeDetails_List[0]['Gender'];
        this.Password = this.EmployeeDetails_List[0]['Password'];
        this.Oldpassword = localStorage.setItem('oldPassword', this.Password);
        this.LoginUserName = this.EmployeeDetails_List[0]['UserName'];
      });
  }

  get oldPwd() {
    return this.form1.get('oldPwd');
  }

  get newPwd() {
    return this.form1.get('newPwd');
  }

  get confirmPwd() {
    return this.form1.get('confirmPwd');
  }
  onCheckboxChange() {
    this._passwordHide = !this._passwordHide;
  }
  onCancel() {
    this.form1.reset();
    let Message = "Reset Successfully";
    this.notifyService.showInfo("", Message);
  }
  OnSubmit() {
    this.objEmployeeDTO.Emp_No = this._EmpNo;
    this.objEmployeeDTO.OldPassword = this.form1.get('oldPwd').value;
    this.objEmployeeDTO.NewPassword = this.form1.get('newPwd').value;
    this.objEmployeeDTO.ConfirmPassword = this.form1.get('confirmPwd').value;
    this.PolicyService.ChangeUserPassword(this.objEmployeeDTO)
      .subscribe(data => {
        // console.log("Message From SqlServer ---->", data);
        let message = data['Message'];
        this.notifyService.showInfo("", message);
        this.form1.reset();

      });
  }
}
