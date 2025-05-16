import { Component, OnInit } from '@angular/core';
import { EmployeeDTO } from 'src/app/_Models/employee-dto';
import { EmployeeDetailsService } from 'src/app/_Services/employee-details.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { OldPwdValidators } from '../myprofile/old-pwd-validators';
import { PolicyService } from 'src/app/_Services/policy.service';
import { NotificationService } from 'src/app/_Services/notification.service';
import { AuthenticationService } from 'src/app/_Services/authentication.service';
import { UserDTO } from 'src/app/_Models/user-dto';
import {AuthService} from '../../_Services/auth.service';
import { Router } from '@angular/router';
import {BsServiceService} from '../../_Services/bs-service.service';
import Swal from 'sweetalert2';
declare var $: any;
declare const ApexCharts: any;
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
  userProfileImage:string;
  _objUserdto:UserDTO;

  constructor(fb: FormBuilder,
    private EmpDetailsService: EmployeeDetailsService,
    private PolicyService: PolicyService,
    private notifyService: NotificationService,
    private authenticationService:AuthenticationService,
    private authService: AuthService,
    private router:Router,
    private bsService:BsServiceService
  ) {
    this.objEmployeeDTO = new EmployeeDTO;
    this._objUserdto=new UserDTO();
    this.form1 = fb.group({                         
      'oldPwd': ['', Validators.required, OldPwdValidators.OldPasswordMethod2],
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

      this.getUserProfileImage();  // get user profile image.
      

      let currentUserSP=localStorage.getItem('currentUser_SP');
      if(currentUserSP){
         const _currentUserSPobj=JSON.parse(currentUserSP)[0];
         this._CryptedPassword=_currentUserSPobj.Password;
         this._LoginUserId=_currentUserSPobj.createdby;
      }
      
  }


   getUserProfileImage(){
       const dmsuserinfo=localStorage.getItem('DMS_UserInfo'); 
       if(dmsuserinfo){ 
         this.userProfileImage=JSON.parse(dmsuserinfo).UserProfile;  
       }
       else 
        console.warn('***unable to load user profile picture*****');
   }


  ngAfterViewInit() {
    this.drawLineGraph();
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
    let Message = "Cancelled";
    this.notifyService.showError("", Message);
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

// new update password
_CryptedPassword:any;
_LoginUserId:any;

UpdatePassword(){  debugger
  
  let oldpassword=this.form1.get('oldPwd').value;
  let newpassword=this.form1.get('newPwd').value;
  let newpassword2=this.form1.get('confirmPwd').value;

  if(!oldpassword || !newpassword || !newpassword2){
    console.error("please enter all required form fields.");
    return;
  }
  else if(newpassword!=newpassword2){
    console.error("new password does not match");
    return;
  }


  this._objUserdto.ChryptedOldPassword=this._CryptedPassword;
  this._objUserdto.OldPassWord=oldpassword;
  this._objUserdto.createdby=this._LoginUserId;
  this._objUserdto.NewPassword=newpassword2;
 
  this.authenticationService.UpdatePassword(this._objUserdto)
    .subscribe(data => {
      console.log('update pw:',data);
      this._objUserdto = data as UserDTO;
      if (this._objUserdto.message == "1") {
        this.notifyService.showSuccess("Password updated.","Success"); 
        this.logout();
        // logout  or update encrypted password in local storage.
      }
      else if(this._objUserdto.message == "2"){
        this.notifyService.showError("Password not updated.","Failed");  
      }
      else{
        this.notifyService.showError("Internal server error.","Failed");  
      }
      this.form1.reset(); 
    }
  );
  
}



logout(){
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('EmpNo');
      localStorage.removeItem('OrganizationId');
      localStorage.removeItem('UserfullName');
      localStorage.removeItem('_Currentuser');
      localStorage.removeItem('IsStreamDownload');
      localStorage.removeItem('DMS_UserInfo');
      localStorage.removeItem('currentUser');
      sessionStorage.clear();
      localStorage.clear();
      this.router.navigate(['login']).then((isNavigationSuccess)=>{
     if(isNavigationSuccess)
     {
      this.authService.logout();  // clear stored token and login status.
      window.location.reload();  // force reload the page.
     }
  })
}

// new update password

  closeInfo(){
    document.getElementById("actyInfobar_header").classList.remove("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
  }
    drawLineGraph() {
    var options = {
      series: [{
        name: 'Total',
        data: [22, 33, 17, 56, 99, 10, 11, 42, 5
        ]
      }],
      chart: {
        type: 'line', // Change chart type to line
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Delay Projects', 'Delay Actions', 'Delay In One Month', 'Projects not Started', 'Assigned Projects', 'Not Working from 1 Month', 'Rejected Projects',
          'Under Approval Projects', 'Assigned Actions'
        ],
      }
    };

    var chart = new ApexCharts(document.querySelector("#ActionBar-chart"), options);
    chart.render();
  }



// user profile picture upload/change start.
 inputImage:any;
 inputImageLoaded:number=0; 
 uploadingProfileImage:boolean=false;

 uploadProfileImage(userImage:any){   
    const frmData = new FormData();
    frmData.append("imgUpload", userImage);
    frmData.append("UserId", this._LoginUserId.toString());
    this.uploadingProfileImage=true;
    this.EmpDetailsService.ProfileUpload(frmData).subscribe((data:any) => {
         this.uploadingProfileImage=false;
          console.log(data, "imageurl");
          if(data.Message=='1'&&data.Status==true){
              this.notifyService.showSuccess('Profile image updated.','Success');
              this.closeImageUpload();
              this.clearInputs();
              
              const jsonstr=localStorage.getItem('DMS_UserInfo');
              if(jsonstr){
                 let jobj=JSON.parse(jsonstr);

                 const str=data.Url;
                 const strarr=str.split('/');
                 strarr.splice(2,0,'thumbs');
                 const data_url=strarr.join('/');

                 const userinfo_={
                     ...jobj,
                     UserProfile: data_url
                 }
                 localStorage.setItem('DMS_UserInfo',JSON.stringify(userinfo_)); 
                 this.getUserProfileImage();
                 this.bsService.UserLoggedIn.emit();
              }
                 
          }

    });
 }



pickImageFromStorage(event:any){  
    if(event.target.files.length>0)
    {

      const sfile=event.target.files[0];   // selected file (blob object).
      this.inputImage={
          name: sfile.name,
          size: sfile.size,
          file: sfile,
          dataUrl:''
      }; 
      
      const freader=new FileReader();
      freader.readAsDataURL(this.inputImage.file);
      freader.onload=(e:any)=>{   
        console.log(e.target.result);
        this.inputImage.dataUrl=e.target.result;
      };
      freader.onprogress=(e)=>{ 
        const percent = Math.round((e.loaded / e.total) * 100);
        this.inputImageLoaded=percent;
      }
    
      this.showPreviewImageDialog();   // opens the preview image dialog.
      
      event.target.value = '';   // to enable same file selection 
    }
}


pickImageFromCamera(){
  const cmcanvas:any=document.querySelector('#camera-input-dialog #capture-image-cv');
  cmcanvas.style.display='none';
  $('#camera-input-dialog').modal('show');   // shows the dialog.
  const videosc:any=document.querySelector('#camera-input-dialog #camera-screen');   // ref of the video element ( on it we are displaying camera stream)
  videosc.style.display='block';
  window.navigator.mediaDevices.getUserMedia({video:true})    // made request to the browser to access camera.
  .then((stream:any)=>{    
          videosc.srcObject=stream;
          videosc.play();   // camera started.

  }).catch((e)=>{   // when failure occurs while connecting to the camera.
     $('#camera-input-dialog').modal('hide');     //closes the dialog.
     this.notifyService.showError('Unable to open the camera','Failed');
     console.error('Unable to open the camera.',e);
  });  
}


cancelCameraCapture(){
  $('#camera-input-dialog').modal('hide');
  const videosc:any=document.querySelector('#camera-input-dialog #camera-screen'); 
  const stream = videosc.srcObject;
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    videosc.srcObject = null;
  }
}

snapShotImage(){
    const cmcanvas:any=document.querySelector('#camera-input-dialog #capture-image-cv');
    cmcanvas.style.display='block';
    const videosc:any=document.querySelector('#camera-input-dialog #camera-screen'); 
    cmcanvas.width=videosc.videoWidth;
    cmcanvas.height=videosc.videoHeight;
    cmcanvas.style.border="1px solid #ccc";
    const ctx=cmcanvas.getContext('2d');
    ctx.drawImage(videosc,0,0,cmcanvas.width,cmcanvas.height);
    videosc.style.display='none'; 
    this.cancelCameraCapture();
    
    cmcanvas.toBlob((capturedImageblob)=>{
    
      this.inputImage={
        name: '',
        size: '',
        file: capturedImageblob,
        dataUrl:''
      }; 

      const freader=new FileReader();
      freader.readAsDataURL(this.inputImage.file);
      freader.onload=(e:any)=>{   
        console.log(e.target.result);
        this.inputImage.dataUrl=e.target.result;
      };
      freader.onprogress=(e)=>{ 
        const percent = Math.round((e.loaded / e.total) * 100);
        this.inputImageLoaded=percent;
      }

      this.showPreviewImageDialog();

    },'image/jpg',1.0);


}






 showPreviewImageDialog(){
     document.getElementById('image-preview-dialog').style.display='block';
     document.getElementById('image-preview-backdrop').style.display='block';
 }

 closeImageUpload(){
  document.getElementById('image-preview-dialog').style.display='none';
  document.getElementById('image-preview-backdrop').style.display='none';
 }

 clearInputs(){
  this.inputImage=null;
  this.inputImageLoaded=0; 
 }







// uploadCapturedImage(){
//   const cmcanvas:any=document.querySelector('#camera-input-dialog #capture-image-cv');
//   cmcanvas.toBlob((capturedImageblob)=>{
//     this.uploadProfileImage(capturedImageblob);
//   },'image/jpg',1.0);
 
// }















// user profile picture upload/change end.

}
