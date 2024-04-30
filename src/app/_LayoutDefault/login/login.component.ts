import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/_Models/login-dto';
import { UserDetailsDTO } from 'src/app/_Models/user-details-dto';
import { NotificationService } from 'src/app/_Services/notification.service';
import { Login } from 'src/app/_Interface/login';
import { AuthService } from 'src/app/_Services/auth.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { ChangeDetectorRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  _LoginForm: FormGroup;
  submitted = false;
  Obj_ILoginDTO: Login;
  DB_username: string;
  DB_password: string;
  UserDetails_List: UserDetailsDTO[];
  UserDetails_List1: UserDetailsDTO[];
  isLoading = false;
  InValidPassword = false;
  InValidUserName = false;
  IsCommunicationDownload: boolean;

  //private ObjHomeComp: HomeComponent
  EmpNo: string; EmpCompNo: string; SystemRole: string;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private notifyService: NotificationService,
    private cd: ChangeDetectorRef,
    private authService: AuthService,
    private service: ProjectTypeService,
    private loadingBar: LoadingBarService) {

    this.Obj_ILoginDTO = new LoginDTO;
    // this.UserDetails_List = new UserDetailsDTO;
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  //Login Form Variables
  // model: Login = { UserName: '', Password: '' }

  loginForm: FormGroup;
  message: string;
  dashboardUrl: string = 'backend/dashboard';
  policyUrl: string = 'userpolicy';
  User_FullName: string;
  //---end---
  ngOnInit() {
    this.authService.logout();

    $('.showOrHide').on('click', function (e) {
      var target = e.currentTarget;
      $(target).hasClass('showp') ? hidePassword($(target)) : showPassword($(target));
    });
    function hidePassword(e) {
      e.removeClass('showp').addClass('hide');
      e.prev('input').attr('type', 'password');
    }
    function showPassword(e) {
      e.removeClass('hide').addClass('showp');
      e.prev('input').attr('type', 'text');
    }

  }
  get f() { return this.loginForm.controls; }

  OnKeyPress() {
    this.InValidPassword = false;
    this.InValidUserName = false;
    this.message = '';
  }

  cosnt_Loadingbar = this.loadingBar.useRef('http');
  OrganizationId: any;
  IsPolicy: number;

  login_DMS() {

    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    else {
      // this.Sendlogin_Credentials();
      // debugger
      this.Obj_ILoginDTO.UserName = this.f.userid.value;
      this.Obj_ILoginDTO.Password = this.f.password.value;
      //alert("One");
      this.service.login(this.Obj_ILoginDTO)
        .subscribe(
          (data) => {
            if (data[0]['CredentialsIsValid']) {
              localStorage.setItem('isLoggedIn', "true");
              this.EmpNo = data[0]['EmployeeCode'];
              this.IsCommunicationDownload = data[0]['IsCommunicationDownload'];
              const Isdownload: string = `${this.IsCommunicationDownload}`;
              localStorage.setItem('EmpNo', this.EmpNo);
              localStorage.setItem('IsCommunicationDownload',Isdownload);
              this.User_FullName = data[0]['FirstName'] + " " + data[0]['LastName'];
              // this.IsPolicy = data[0]['IsPolicy'];
              // this.router.navigate([this.policyUrl]);
              // this.InValidPassword = false;
              // this.cd.detectChanges();
              this.router.navigate([this.dashboardUrl]);
              this.notifyService.showInfo(this.User_FullName + ' ' + ' ', 'Login By :');
              this.notifyService.showSuccess("Successfully", "Logged In");
              this.InValidPassword = false;
              this.cd.detectChanges();
            }
            else {
              this.InValidPassword = true;
              console.log("Invalid Login");
              this.authService.logout();
              localStorage.removeItem('EmpNo');
              this.cd.detectChanges();
              // alert("Invalid");
              this.message = "Please check your UserName and Password";
            }

            // if (this.IsPolicy == 1) {
            //   this.router.navigate([this.dashboardUrl]);
            //   this.notifyService.showInfo(this.User_FullName + ' ' + ' ', 'Login By :');
            //   this.notifyService.showSuccess("Successfully", "Logged In");
            //   this.InValidPassword = false;
            //   this.cd.detectChanges();
            // }
            // else if (this.IsPolicy == 0) {
            //   this.router.navigate([this.policyUrl]);
            //   this.InValidPassword = false;
            //   this.cd.detectChanges();
            // }

            // this.UserDetails_List1 = data as UserDetailsDTO[];
            // console.log("Data---->", this.UserDetails_List1);
            // this.message = this.UserDetails_List1[0]['Message'];
            // this.DB_username = this.UserDetails_List1[0]['UserName'].toLowerCase();
            // this.DB_password = this.UserDetails_List1[0]['Password'];
            // this.User_FullName = this.UserDetails_List1[0]['TM_DisplayName']
            // this.IsPolicy = this.UserDetails_List1[0]['IsPolicy'];
            // // console.log("Policy Test---->",this.IsPolicy);
            // if (this.f.userid.value.toLowerCase() == this.DB_username && this.f.password.value == this.DB_password) {
            //   //console.log("Login successful");
            //   // alert("successful Login");
            //   localStorage.setItem('isLoggedIn', "true");
            //   this.InValidPassword = false;
            //   this.cd.detectChanges();
            //   this.EmpNo = data[0]['Emp_No'];
            //   localStorage.setItem('EmpNo', this.EmpNo);
            //   this.EmpCompNo = data[0]['Emp_Comp_No'].replace(/\s/g, "");
            //   this.SystemRole = data[0]['Emp_SystemRole'];
            //   this.OrganizationId = data[0]['OrganizationId'];
            //   sessionStorage.setItem('Emp_Email', data[0]['Emp_Email']);

            //   sessionStorage.setItem('Session_EmpNo', this.EmpNo);
            //   sessionStorage.setItem('EmpCompNo', this.EmpCompNo);
            //   // sessionStorage.setItem('SystemRole', this.SystemRole);
            //   localStorage.setItem("UserfullName", this.User_FullName);
            //   localStorage.setItem('_Currentuser', this.DB_username);
            //   localStorage.setItem('OrganizationId', this.OrganizationId);

            //   //debugger
            //   if (this.IsPolicy == 1) {
            //     this.router.navigate([this.dashboardUrl]);
            //     this.notifyService.showInfo(this.User_FullName + ' ' + ' ', 'Login By :');
            //     this.notifyService.showSuccess("Successfully", "Logged In");
            //     this.InValidPassword = false;
            //     this.cd.detectChanges();
            //   }
            //   else if (this.IsPolicy == 0) {
            //     this.router.navigate([this.policyUrl]);
            //     this.InValidPassword = false;
            //     this.cd.detectChanges();
            //   }

            //   //this.router.navigate([this.policyUrl]);
            //   // alert(this.returnUrl);
            //   // this.notifyService.showInfo(this.User_FullName + ' ' + ' ', 'Login By :');
            //   // this.notifyService.showSuccess("Successfully", "Logged In");
            // }
            // else {
            //   this.InValidPassword = true;
            //   console.log("Invalid Login");
            //   this.authService.logout();
            //   localStorage.removeItem('EmpNo');
            //   this.cd.detectChanges();
            //   // alert("Invalid");
            //   // this.message = "Please check your UserName and Password";
            // }
          });
    }
  }
  buttonClicked: boolean = false;
  login() {
    this.buttonClicked=true;
    this.submitted = true;
    if (this.loginForm.invalid ) {

      return;
    }
    else {
      // this.Sendlogin_Credentials();
      // debugger
      this.Obj_ILoginDTO.UserName = this.f.userid.value;
      this.Obj_ILoginDTO.Password = this.f.password.value;
      //alert("One");
      this.service.LoginCredentials(this.Obj_ILoginDTO)
        .subscribe(
          (data) => {
            this.buttonClicked=false;
            this.UserDetails_List = data as UserDetailsDTO[];
           // console.log("Data---->", this.UserDetails_List);
            this.message = this.UserDetails_List[0]['Message'];
            this.DB_username = this.UserDetails_List[0]['UserName'].toLowerCase();
            this.DB_password = this.UserDetails_List[0]['Password'];
            this.User_FullName = this.UserDetails_List[0]['TM_DisplayName'];
            this.IsPolicy = this.UserDetails_List[0]['IsPolicy'];



            // console.log("Policy Test---->",this.IsPolicy);
            if (this.f.userid.value.toLowerCase() == this.DB_username && this.f.password.value == this.DB_password) {
              //console.log("Login successful");
              // alert("successful Login");
              localStorage.setItem('isLoggedIn', "true");
              this.InValidPassword = false;
              // this.buttonClicked=false
              this.cd.detectChanges();
              this.EmpNo = data[0]['Emp_No'];
              localStorage.setItem('EmpNo', this.EmpNo);
              this.EmpCompNo = data[0]['Emp_Comp_No'].replace(/\s/g, "");
              this.SystemRole = data[0]['Emp_SystemRole'];
              this.OrganizationId = data[0]['OrganizationId'];
              sessionStorage.setItem('Emp_Email', data[0]['Emp_Email']);
              sessionStorage.setItem('Session_EmpNo', this.EmpNo);
              sessionStorage.setItem('EmpCompNo', this.EmpCompNo);
              // sessionStorage.setItem('SystemRole', this.SystemRole);
              localStorage.setItem("UserfullName", this.User_FullName);
              localStorage.setItem('_Currentuser', this.DB_username);
              localStorage.setItem('OrganizationId', this.OrganizationId);

              //debugger
              if (this.IsPolicy == 1 ) {
                this.router.navigate([this.dashboardUrl]);
                this.notifyService.showInfo(this.User_FullName + ' ' + ' ', 'Login By :');
                this.notifyService.showSuccess("Successfully", "Logged In");
                this.InValidPassword = false;
                this.cd.detectChanges();
                this.buttonClicked=true


              }

              else if (this.IsPolicy == 0) {
                // this.buttonClicked=false
                this.router.navigate([this.policyUrl]);
                this.InValidPassword = false;
                this.cd.detectChanges();

              }
              //this.router.navigate([this.policyUrl]);
              // alert(this.returnUrl);
              // this.notifyService.showInfo(this.User_FullName + ' ' + ' ', 'Login By :');
              // this.notifyService.showSuccess("Successfully", "Logged In");
            }
            else {

              this.InValidPassword = true;
              console.log("Invalid Login");
              this.authService.logout();
              localStorage.removeItem('EmpNo');
              this.cd.detectChanges();

              // alert("Invalid");
              // this.message = "Please check your UserName and Password";
            }
          });

    }

  }


}


//Testing Code
// AddArray() {
//   let array1: any = [{ MailId: 1 },{ MailId: 2 },{ MailId: 3 }];
//   let array2: any = [{ MailId: 4 }, { MailId: 5 }, { MailId: 6 }]

//     let addAll : any=[];

//     console.log("Final Result--->",JSON.stringify(array2.concat(array1)));
// }
