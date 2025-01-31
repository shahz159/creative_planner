
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/_Models/login-dto';
import { UserDetailsDTO } from 'src/app/_Models/user-details-dto';
import { NotificationService } from 'src/app/_Services/notification.service';
import { Login } from 'src/app/_Interface/login';
import { AuthService } from 'src/app/_Services/auth.service'
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { AuthenticationService } from 'src/app/_Services/authentication.service';
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
  IsStreamDownload: boolean;
  showLoader = true;
  //private ObjHomeComp: HomeComponent
  EmpNo: string; EmpCompNo: string; SystemRole: string;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private notifyService: NotificationService,
    private cd: ChangeDetectorRef,
    private authService: AuthService,
    private service: ProjectTypeService,
    private authenticationService: AuthenticationService,
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
  dashboardUrl: string = 'backend/Streamdashboard';
  policyUrl: string = 'userpolicy';
  User_FullName: string;
  //---end---
  ngOnInit() {
    // this.authService.logout();
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.router.navigate(['/backend/Streamdashboard']);
    }

    $('.showOrHide').on('click', function (e) {
      var target = e.currentTarget
      $(target).hasClass('showp') ? hidePassword($(target)) : showPassword($(target))
    })
    function hidePassword(e) {
      e.removeClass('showp').addClass('hide')
      e.prev('input').attr('type', 'password')
    }
    function showPassword(e) {
      e.removeClass('hide').addClass('showp')
      e.prev('input').attr('type', 'text')
    }
    setTimeout(() => {
      this.showLoader = false;
      let snapElement = document.getElementById('snap');
    
      if (snapElement) {
        snapElement.classList.add('hidden'); 
      }
    }, 5500);
    
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
  IsPolicynew: boolean;

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
      this.authenticationService.login(this.f.userid.value, this.f.password.value)
        .subscribe(
          (data) => {
            console.log("DMS login Data---->", data);
            const userIdJson = data['Data']['UserId']; 
            if(userIdJson.length > 0){
              
              const parsedUserIdArray = JSON.parse(userIdJson); // Parse the JSON string into an array
            const userIdObject = parsedUserIdArray[0];
            if (userIdObject["CredentialsIsValid"] == true) { // Access the first object in the array
            this.IsStreamDownload = userIdObject['IsStreamDownload']; 
            this.User_FullName = userIdObject['UserName'];
            this.OrganizationId = userIdObject['organizationid'];
            this.SystemRole = userIdObject['DesignationName'];
            this.SystemRole = userIdObject['DesignationName'];
              this.IsPolicynew = userIdObject['IsPolicy'];
              this.EmpNo = userIdObject['EmpNo'];

            const _createdBy=userIdObject['createdby'];
            const _userProfile=userIdObject['UserProfile'];
            const Isdownload: string = `${this.IsStreamDownload}`;
      
            const userinfostr={
              createdby:_createdBy,
              UserProfile:_userProfile
            };    
            localStorage.setItem('DMS_UserInfo',JSON.stringify(userinfostr));    
            localStorage.setItem('IsStreamDownload',Isdownload);
            localStorage.setItem("UserfullName", this.User_FullName);
              localStorage.setItem('_Currentuser', this.DB_username);
              localStorage.setItem('OrganizationId', this.OrganizationId);
              localStorage.setItem('EmpNo', this.EmpNo);
              localStorage.setItem('isLoggedIn', "true");
              // this.router.navigate([this.dashboardUrl]);
              //   this.notifyService.showInfo(this.User_FullName + ' ' + ' ', 'Login by');
              //   this.notifyService.showSuccess("Successfully", "Logged in");
              //   this.InValidPassword = false;
              //   this.cd.detectChanges();


                if (this.IsPolicynew == true) {
                  this.router.navigate([this.dashboardUrl]);
                  this.notifyService.showInfo(this.User_FullName + ' ' + ' ', 'Login by');
                  this.notifyService.showSuccess("Successfully", "Logged in");
                  this.InValidPassword = false;
                  this.cd.detectChanges();
                }
                else if (this.IsPolicynew == false) {
                  this.router.navigate([this.policyUrl]);
                  this.InValidPassword = false;
                  this.cd.detectChanges();
                }
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
            // Retrieve the UserId JSON string
          }

          });
    }
  }

  isLogginCredentails:boolean=false;
  
  login() {
  
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
      this.isLogginCredentails=true;  // logging credentials process started.
      this.service.LoginCredentials(this.Obj_ILoginDTO)
        .subscribe(
          (data) => {  
            debugger
            try{

            this.UserDetails_List = data as UserDetailsDTO[];
           // console.log("Data---->", this.UserDetails_List);
            this.message = this.UserDetails_List[0]['Message'];
            this.DB_username = this.UserDetails_List[0]['UserName'].toLowerCase();
            this.DB_password = this.UserDetails_List[0]['Password'];
            this.User_FullName = this.UserDetails_List[0]['TM_DisplayName']
            this.IsPolicy = this.UserDetails_List[0]['IsPolicy'];
            // console.log("Policy Test---->",this.IsPolicy);
            if (this.f.userid.value.toLowerCase() == this.DB_username && this.f.password.value == this.DB_password) {
              //console.log("Login successful");
              // alert("successful Login");
              localStorage.setItem('isLoggedIn', "true");
              this.InValidPassword = false;
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
              if (this.IsPolicy == 1) {
                this.router.navigate([this.dashboardUrl]);
                this.notifyService.showInfo(this.User_FullName + ' ' + ' ', 'Login by');
                this.notifyService.showSuccess("Successfully", "Logged in");
                this.InValidPassword = false;
                this.cd.detectChanges();
              }
              else if (this.IsPolicy == 0) {
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
            
            this.isLogginCredentails=false;  // logging credentials process ended. 
          }
          catch(e){
             console.error(e);
             this.isLogginCredentails=false;  // logging credentials process ended. 
          }
              
           
            
          });
    }
    this.login_DMS();
  }
}


//Testing Code
// AddArray() {
//   let array1: any = [{ MailId: 1 },{ MailId: 2 },{ MailId: 3 }];
//   let array2: any = [{ MailId: 4 }, { MailId: 5 }, { MailId: 6 }]

//     let addAll : any=[];

//     console.log("Final Result--->",JSON.stringify(array2.concat(array1)));
// }
