
import { Component, EventEmitter, OnInit } from '@angular/core';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import tippy from 'node_modules/tippy.js';
import { NotificationActivityDTO } from 'src/app/_Models/notification-activity-dto';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/_Services/notification.service';
import { AuthService } from 'src/app/_Services/auth.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ActivatedRoute } from '@angular/router';
import { TimelineComponent } from '../timeline/timeline.component';
import * as moment from 'moment';
import { ApprovalDTO } from 'src/app/_Models/approval-dto';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS,MomentDateAdapter,MAT_MOMENT_DATE_ADAPTER_OPTIONS,} from '@angular/material-moment-adapter';
import { isString } from '@ng-bootstrap/ng-bootstrap/util/util';
import { BsServiceService } from 'src/app/_Services/bs-service.service';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ApprovalsService } from '../../_Services/approvals.service';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
  providers:[]
};


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ]
})
export class HeaderComponent implements OnInit {

  public static languageChanged:EventEmitter<any>=new EventEmitter();
  constructor(public service: ProjectTypeService,private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,private notifyService: NotificationService,
    public loadingBarServce:LoadingBarService,
    private bsService:BsServiceService, private translate : TranslateService,
    private approvalService:ApprovalsService
    ) {
    this.ObjSubTaskDTO = new SubTaskDTO();
    this.notificationDTO = new NotificationActivityDTO();
    this.aprvDtoObj=new ApprovalDTO();
   }
   loadingBar_state = this.loadingBarServce.useRef('http');
  notificationDTO: NotificationActivityDTO;
  ObjSubTaskDTO: SubTaskDTO;
  aprvDtoObj:ApprovalDTO;
  _fullname: string;
  UserProfile:string;
  timelineList: any;
  timelineType: string;
  type1: string = 'self';
  type2: string = 'racis';
  today: any = new Date().toISOString().substring(0, 10);
  sortList: any = ['today', 'yesterday', 'this week', 'last week', 'this month', 'last month']
  selectedSort: string;
  yesterday: any;
  timelineDuration: any;
  showtimeline: boolean = true;
  Current_user_ID: any;
  timeFrom: any;
  timeTo: any;
  notilength: number;
  _NotificationActivity: [];
  isNotificationsLoading:boolean=false;
  urlcomponent:any;
  newfeaturetippy:any;
  // _confirmBeforeRouting:string;
  AdminID=502;
  
  ngOnInit(): void {
    this.Current_user_ID = localStorage.getItem('EmpNo');
    
    this.getusername();
    this.getuserimage();
    this.bsService.UserLoggedIn.subscribe(()=>{ this.getuserimage();  });  
    this.getNewFeatures();
    // this._fullname = localStorage.getItem('UserfullName');
    this.timelineType = this.type1;
    this.selectedSort = 'today';

    let dmsuserinfo:any=localStorage.getItem('DMS_UserInfo');
    if(dmsuserinfo){
      dmsuserinfo=JSON.parse(dmsuserinfo);
      this._UserRole=dmsuserinfo.UserRole;
    }

    this.getDashboardnotifications();

      // for tippys
      tippy('#notification', {
        content: "Notifications",
        arrow: true,
        animation: 'scale-extreme',
        theme: 'gradient',
        animateFill: true,
        inertia: true,
      });

      tippy('#timelinelog', {
        content: "Timeline log",
        arrow: true,
        animation: 'scale-extreme',
        theme: 'gradient',
        animateFill: true,
        inertia: true,
      });


      tippy('#applyfor-leave', {
        content: "Apply leave",
        arrow: true,
        animation: 'scale-extreme',
        theme: 'gradient',
        animateFill: true,
        inertia: true,
      });


      this.newfeaturetippy=tippy('#streamfeature', {
        content: "New features",
        arrow: true,
        animation: 'scale-extreme',
        theme: 'gradient',
        animateFill: true,
        inertia: true,
      });

      tippy('#user_details', {
        content: "User details",
        arrow: true,
        animation: 'scale-extreme',
        theme: 'gradient',
        animateFill: true,
        inertia: true,
      });


      // this.bsService.ConfirmBeforeRoute.subscribe((modalScreen:any)=>{
      //   this._confirmBeforeRouting=modalScreen;
      // })
     this.bsService.leaveSidebarToggled.subscribe((openleave:boolean)=>{
          if(openleave){
             this.applyleave();
          }
     });

     
     const langVal=localStorage.getItem('language');
     if(langVal&&(langVal=='ar'||langVal=='en')){
       this.currentLang=langVal;
     }
     else{ this.currentLang='en'; }



  }

  getusername(){
    this.service._GetUserName(this.Current_user_ID).subscribe(data=>{  
      if(data){
        this._fullname=data['Emp_First_Name'];
        this._fullname = this._fullname.replace(/\(\)/, '').trim();
      }
    });
  }


  getuserimage(){
    const dmsuserinfo=localStorage.getItem('DMS_UserInfo');
    if(dmsuserinfo){  this.UserProfile=JSON.parse(dmsuserinfo).UserProfile;  }
  }


  isView:any;

  getNewFeatures(){
    this.service.GetNewFeatureView(this.Current_user_ID).subscribe(data=>{
      this.isView=data['message'];
      if(this.isView=='0')
        this.featuremodel();
    });


  }
  _UserRole:number;


  currentLang:"ar"|"en"="en";
  storedLanguage:any
  ChangelangTo(lang:any){
    this.currentLang=lang;
    this.translate.use(lang); 
    localStorage.setItem('language', lang); 
    // DashboardComponent.ArabicSide.emit(lang);
    HeaderComponent.languageChanged.emit(lang);
  }

  menutoggle() {
    document.getElementById("kt-bodyc").classList.toggle("kt-aside--show");
    document.getElementById("kt-bodyc").classList.toggle("kt-aside--minimize");
  }

  getDashboardnotifications() {
    this.notificationDTO.Emp_No = this.Current_user_ID;
    this.isNotificationsLoading=true;
    this.service.GetDashboardnotifications(this.notificationDTO).subscribe(
      (data) => {
        this._NotificationActivity = JSON.parse(data[0]['Notification_Json']);
        this.notilength = (data[0]['notificationcount']);
        this.isNotificationsLoading=false;
        console.log(data, 'Notif');
      });
  }

  // newDetails(ProjectCode) {
  //   let name: string = 'Details';
  //   var url = document.baseURI + name;
  //   var myurl = `${url}/${ProjectCode}`;
  //   var myWindow = window.open(myurl, ProjectCode);
  //   myWindow.focus();
  // }


  openDetails(p1,p2){
    let name: string = 'Details';
    var url = document.baseURI + name;
    let qparams='';
    let myurl;
    if(p1){
      qparams='?actionCode='+p2;
      myurl = `${url}/${p1}${qparams}`;
    }
    else{
      myurl = `${url}/${p2}`;
    }
    var myWindow = window.open(myurl);
    myWindow.focus();
  }


  actyside() {
    document.getElementById("actyInfobar_header").classList.add("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

  }


//  viewTimelineBtnClicked(){
//      if(this._confirmBeforeRouting){

//       if(this._confirmBeforeRouting=='AT-3RD-STEP-PC')
//       {
//           // moving from 3rd step
//           Swal.fire({
//             title:'Project Not Submitted',
//             text:"Click 'Submit project' to send the project for approval. Leaving this page will keep the project as a draft.",
//             showConfirmButton:true,
//             confirmButtonText:'Keep as draft',
//             showCancelButton:true,
//             cancelButtonText:'Back',
//             // icon:'warning'
//           }).then((decision)=>{
//               if(decision.isConfirmed){
//                 this.bsService.ConfirmBeforeRoute.emit(null);
//                 this.viewTimeline();
//               }
//           });
//       }

//  }
//  else
//  this.viewTimeline();

//  }


  viewTimeline() {
    document.getElementById("actyInfobar_header").classList.remove("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    this.router.navigate(["../backend/Timeline"],{queryParams:{section:this.timelineType}});
  }

  daterange() {
    document.getElementById("range-picker_header").classList.toggle("d-none");
    document.getElementById("main-section_header").classList.toggle("d-none");
  }
  applyleave(){

    document.getElementById("apply-leave").classList.add("open_sidebar");
    document.getElementById("leave-aprv-rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    this.getLA_drpdwns();
    
  }

  closeleave(){
    document.getElementById("apply-leave").classList.remove("open_sidebar");
    document.getElementById("leave-aprv-rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");


// clear form inputs and set to default.
    this.allLeavesTypes=[];
    this.allCountriesList=[];
    this.min_date=new Date();
    this.max_date=undefined;
    this.max_date2=undefined
    this.invalidStartDate=false;
    this.invalidEndDate=false;
    this.notProvided=false;

    this.selectedLeaveType=undefined;
    this.dayType='full';
    this.tripType='local';
    this.selectedCountry=undefined;
    this.travelType='with family';
    this.leaveStartsOn=undefined;
    this.leaveEndsOn=undefined;
    this.leaveDuration=0;
    this.leave_remark=undefined;
// clear form inputs and set to default.
    console.log('closed closed....')
    this.bsService.leaveSidebarToggled.emit(false);
  }
  closeInfo() {
    document.getElementById("actyInfobar_header").classList.remove("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
  }

  closeevearea2() {
    document.getElementById("actyInfobar_header").classList.remove("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");

  }

  timelineLog(type) {
    this.showtimeline = true;
    if (this.selectedSort == 'custom') {
      this.customTimeline();
    }

    else {
      if (type == this.type1) {
        this.timelineType = type;
        this.timelineList = null;
        this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
        this.ObjSubTaskDTO.PageNumber = 1;
        this.ObjSubTaskDTO.PageSize = 2;
        this.ObjSubTaskDTO.sort = this.selectedSort;
        this.ObjSubTaskDTO.Start_Date = null;
        this.ObjSubTaskDTO.End_Date = null;

        this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe
          (data => {
            this.timelineList = JSON.parse(data[0]['DAR_Details_Json']);
            console.log( this.timelineList, "mytimeline")
            this.timelineDuration = (data[0]['TotalTime']);
            if (this.timelineList.length <0) {
              this.showtimeline = false;
              this.timelineDuration = 0;
            }

            const hrstippy = document.getElementById('hrs-tippy');
            tippy('.tippy', {
              content: hrstippy.innerHTML,
              arrow: true,
              allowHTML: true,
              animation: 'scale-extreme',
              theme: 'gradient',
              animateFill: true,
              inertia: true,
              placement: 'top'
            });

          });
      }
      else if (type == this.type2) {
        this.timelineType = type;
        this.timelineList = null;
        this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
        this.ObjSubTaskDTO.PageNumber = 1;
        this.ObjSubTaskDTO.PageSize = 2;
        this.ObjSubTaskDTO.sort = this.selectedSort;
        this.ObjSubTaskDTO.selected_emp = 0;
        this.service._GetTimelineActivityforRACIS(this.ObjSubTaskDTO).subscribe
          (data => {
            debugger
            this.timelineList = JSON.parse(data[0]['DAR_Details_Json']);
            console.log( this.timelineList, "RACIStimeline")
                if (this.timelineList&&this.timelineList.length < 0) {
              this.showtimeline = false;
              this.timelineDuration = 0;
            }

            const hrstippy = document.getElementById('hrs-tippy');
            tippy('.tippy', {
              content: hrstippy.innerHTML,
              arrow: true,
              allowHTML: true,
              animation: 'scale-extreme',
              theme: 'gradient',
              animateFill: true,
              inertia: true,
              placement: 'top'
            });

          });

        this.service._GetTimelineDurationforRACIS(this.ObjSubTaskDTO).subscribe
          (data => {
            this.timelineDuration = (data[0]['TotalTime']);
          });
      }
    }
  }

  cleardates() {
    this.timeFrom = null;
    this.timeTo = null;
  }

  customTimeline() {
    this.selectedSort = 'custom';
    this.showtimeline = true;

    if (this.timelineType == this.type1) {
      this.timelineList = null;
      this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
      this.ObjSubTaskDTO.PageNumber = 1;
      this.ObjSubTaskDTO.PageSize = 2;
      this.ObjSubTaskDTO.sort = this.selectedSort;
      this.ObjSubTaskDTO.Start_Date = this.timeFrom;
      this.ObjSubTaskDTO.End_Date = this.timeTo;

      this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe
        (data => {
          this.timelineList = JSON.parse(data[0]['DAR_Details_Json']);
          this.timelineDuration = (data[0]['TotalTime']);
          if (this.timelineList.length === 0) {
            this.showtimeline = false;
            this.timelineDuration = 0;
          }

          const hrstippy = document.getElementById('hrs-tippy');
          tippy('.tippy', {
            content: hrstippy.innerHTML,
            arrow: true,
            allowHTML: true,
            animation: 'scale-extreme',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            placement: 'top'
          });

        });
    }


    else if (this.timelineType == this.type2) {
      this.timelineList = null;
      this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
      this.ObjSubTaskDTO.PageNumber = 1;
      this.ObjSubTaskDTO.PageSize = 2;
      this.ObjSubTaskDTO.sort = this.selectedSort;
      this.ObjSubTaskDTO.Start_Date = this.timeFrom;
      this.ObjSubTaskDTO.End_Date = this.timeTo;
      this.ObjSubTaskDTO.selected_emp = 0;
      this.service._GetTimelineActivityforRACIS(this.ObjSubTaskDTO).subscribe
        (data => {
          this.timelineList = JSON.parse(data[0]['DAR_Details_Json']);
          if (this.timelineList.length === 0) {
            this.showtimeline = false;
            this.timelineDuration = 0;
          }
          const hrstippy = document.getElementById('hrs-tippy');
          tippy('.tippy', {
            content: hrstippy.innerHTML,
            arrow: true,
            allowHTML: true,
            animation: 'scale-extreme',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            placement: 'top'
          });
        });
      this.service._GetTimelineDurationforRACIS(this.ObjSubTaskDTO).subscribe
        (data => {
          this.timelineDuration = (data[0]['TotalTime']);
        });
    }
  }

  sortTimeline(sort) {
    this.selectedSort = sort;
    this.showtimeline = true;
    this.timeFrom = null;
    this.timeTo = null;

    if (this.timelineType == this.type1) {
      this.timelineList = null;
      this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
      this.ObjSubTaskDTO.PageNumber = 1;
      this.ObjSubTaskDTO.PageSize = 2;
      this.ObjSubTaskDTO.sort = this.selectedSort;
      this.ObjSubTaskDTO.Start_Date = null;
      this.ObjSubTaskDTO.End_Date = null;
      this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe
        (data => {
          this.timelineList = JSON.parse(data[0]['DAR_Details_Json']);
          console.log(this.timelineList,'testing timeline')
          this.timelineDuration = (data[0]['TotalTime']);
          if (this.timelineList.length === 0) {
            this.showtimeline = false;
            this.timelineDuration = 0;
          }

          const hrstippy = document.getElementById('hrs-tippy');
          tippy('.tippy', {
            content: hrstippy.innerHTML,
            arrow: true,
            allowHTML: true,
            animation: 'scale-extreme',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            placement: 'top'
          });

        });
    }


    else if (this.timelineType == this.type2) {
      this.timelineList = null;
      this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
      this.ObjSubTaskDTO.PageNumber = 1;
      this.ObjSubTaskDTO.PageSize = 2;
      this.ObjSubTaskDTO.sort = this.selectedSort;
      this.ObjSubTaskDTO.Start_Date = null;
      this.ObjSubTaskDTO.End_Date = null;
      this.ObjSubTaskDTO.selected_emp = 0;
      this.service._GetTimelineActivityforRACIS(this.ObjSubTaskDTO).subscribe
        (data => {
          this.timelineList = JSON.parse(data[0]['DAR_Details_Json']);
          console.log(this.timelineList,'this.timelinelist racis checking')
          if (this.timelineList.length === 0) {
            this.showtimeline = false;
            this.timelineDuration = 0;
          }
          const hrstippy = document.getElementById('hrs-tippy');
          tippy('.tippy', {
            content: hrstippy.innerHTML,
            arrow: true,
            allowHTML: true,
            animation: 'scale-extreme',
            theme: 'gradient',
            animateFill: true,
            inertia: true,
            placement: 'top'
          });
        });
      this.service._GetTimelineDurationforRACIS(this.ObjSubTaskDTO).subscribe
        (data => {
          this.timelineDuration = (data[0]['TotalTime']);
        });
    }
  }

  notification() {
    let name: string = 'Notifications';
    var url = document.baseURI + name;
    var myurl = `${url}`;
    var myWindow = window.open(myurl);
    myWindow.focus();
  }

//  onLogoutBtnClicked(){
//     if(this._confirmBeforeRouting){
//           if(this._confirmBeforeRouting=='AT-3RD-STEP-PC')
//           {
//               // moving from 3rd step
//               Swal.fire({
//                 title:'Project Not Submitted',
//                 text:"Click 'Submit project' to send the project for approval. Leaving this page will keep the project as a draft.",
//                 showConfirmButton:true,
//                 confirmButtonText:'Keep as draft',
//                 showCancelButton:true,
//                 cancelButtonText:'Back',
//                 // icon:'warning'
//               }).then((decision)=>{
//                   if(decision.isConfirmed){
//                     this.bsService.ConfirmBeforeRoute.emit(null);
//                     this.logout();
//                   }
//               });
//           }

//     }
//     else
//     this.logout();
//  }

// old
//  logout() {
//   // Stop loading bar if active
//   if (this.loadingBar_state) {
//     this.loadingBar_state.stop();
//   }

//   // Clear only authentication-related keys
//   sessionStorage.clear(); // Assuming all session storage is authentication-related
//   localStorage.removeItem('isLoggedIn');
//   localStorage.removeItem('EmpNo');
//   localStorage.removeItem('OrganizationId');
//   localStorage.removeItem('UserfullName');
//   localStorage.removeItem('_Currentuser');
//   localStorage.removeItem('IsStreamDownload');
//   localStorage.removeItem('DMS_UserInfo');
//   localStorage.removeItem('currentUser');

//   sessionStorage.clear();
//   localStorage.clear();
//     // localStorage.setItem('language', this.storedLanguage);
//     // alert(this.storedLanguage)
//     this.router.navigate(['login']).then(() => {
//       window.location.reload();
//     });
//   // Call AuthService logout for any additional logic
//   this.authService.logout();

//   // Navigate to login page
//   // this.router.navigate(['/login']);
// }

// new 
logout(){
  // Stop loading bar if active
  if (this.loadingBar_state) {
    this.loadingBar_state.stop();
  }
  this.router.navigate(['login']).then((isNavigationSuccess)=>{
     if(isNavigationSuccess)
     {
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
      this.authService.logout();  // clear stored token and login status.
      window.location.reload();  // force reload the page.
     }
  })
}




  featuremodel() {
    // document.getElementById("newfeatures").style.display = "block";
    document.getElementById("newfeatures").style.overflow = "auto";
    document.getElementById("feature-modal-backdrop").classList.add("show");
    document.getElementById("newfeatures").classList.add("feature-animate-active");
    document.getElementById("kt-bodyc").classList.add("position-fixed");
    // let whatsnew:any=document.getElementsByClassName('whatsnewanim')[0];
    //      whatsnew.style.animationName='anim1';
    //      whatsnew.style.animationDuration='0.4s';
    //      whatsnew.style.animationTimingFunction='cubic-bezier(0.2, 0.9, 0.2, 1)';
  }

  NewAddUserCountFeature() {
    if(this.isView=='0'){
      this.service.InsertNewFeatureView(this.Current_user_ID).subscribe(data=>{
        console.log("user count added",data['message'])
      });
    }
    this.closeNewFeatures();
    setTimeout(()=>{
      // document.getElementById("newfeatures").style.display = "none";
      document.getElementById("newfeatures").style.overflow = "hidden";
      document.getElementById("feature-modal-backdrop").classList.remove("show");
      document.getElementById("newfeatures").classList.remove("feature-animate-active");
      document.getElementById("kt-bodyc").classList.remove("position-fixed");
    },600);

  }



  closeNewFeatures(){
        // document.getElementById("newfeatures").style.display = "none";
        document.getElementById("newfeatures").style.overflow = "hidden";
        document.getElementById("feature-modal-backdrop").classList.remove("show");
        document.getElementById("newfeatures").classList.remove("feature-animate-active");
        document.getElementById("kt-bodyc").classList.remove("position-fixed");
        //  let whatsnew:any=document.getElementsByClassName('whatsnewanim')[0];
        //  whatsnew.style.animationName='anim2';
        //  whatsnew.style.animationTimingFunction='cubic-bezier(0.3, 0.9, 0.1, 1)';
         this.newfeaturetippy[0].show();
         let sf:any=document.getElementById('streamfeature');
         sf.style.backgroundColor=' #d3d3d342';

         setTimeout(()=>{
          this.newfeaturetippy[0].hide();
          let sf:any=document.getElementById('streamfeature');
          sf.style.backgroundColor='transparent';
         },2000)
  }

  newDetailsaction(pcode,acode:string|undefined) {
    let qparams='';
        if(acode!==undefined){
          qparams=`?actionCode=${acode}`;
        }
        let name: string = 'Details';
        var url = document.baseURI + name;
        var myurl = `${url}/${pcode}${qparams}`;
        var myWindow = window.open(myurl,pcode);
        myWindow.focus();
      }





// leave application start
allLeavesTypes:any=[];
allCountriesList:any=[];
min_date:Date=new Date();
max_date:Date|undefined;
max_date2:Date|undefined;
invalidStartDate:boolean=false;
invalidEndDate:boolean=false;
notProvided:boolean=false;
Lvemail_json:any;

selectedLeaveType:number|undefined;
dayType:'full'|'first half'|'second half'='full';
tripType:'local'|'international'='local';
selectedCountry:string|undefined;
travelType:'with family'|'alone'='with family';
leaveStartsOn:any;
leaveEndsOn:any;
leaveDuration:number=0;
leave_remark:string|undefined;

// validateInputDates(){
//   debugger
//    if(this.leaveStartsOn&&this.leaveEndsOn){
//        this.invalidStartDate=this.leaveStartsOn.toDate()>this.leaveEndsOn.toDate();
//        this.invalidEndDate=this.leaveEndsOn.toDate()<this.leaveStartsOn.toDate();

//        if(this.selectedLeaveType){
//         this.invalidStartDate=this.leaveStartsOn.toDate()<this.min_date||([1,3].includes(this.selectedLeaveType)&&(this.leaveStartsOn.toDate()>this.max_date));

//         if(this.selectedLeaveType==1)
//         this.invalidEndDate=this.leaveEndsOn.toDate()>this.max_date2;

//        }
//    }
// }


validateInputDates(){

  this.invalidEndDate=false;  // initially false.
  if([1,2,3,5].includes(this.selectedLeaveType)){
    //for annual, emergency, casual and hajj
      if(this.leaveStartsOn&&this.leaveEndsOn){
        const D1=this.leaveStartsOn.toDate();
        const D2=this.leaveEndsOn.toDate();
        this.invalidStartDate=(D1>D2)||
                              (this.selectedLeaveType?(
                              D1<this.min_date ||([1,3].includes(this.selectedLeaveType)&&D1>this.max_date)
                              ):false);

        if([1,2,3,5].includes(this.selectedLeaveType)){
          this.invalidEndDate=this.leaveEndsOn.toDate()>this.max_date2;
        }

     }

  }
  else if(this.selectedLeaveType==4){
    //for umrah
    // umrah leave allowed on saturday only.
    const notSat=(this.leaveStartsOn.toDate().getDay()!=6);
    this.invalidStartDate=notSat;
  }

}


onDatesChanged(){

  // set max enddate.
     if(this.selectedLeaveType==1){
        const d=new Date(this.leaveStartsOn.toDate());
        d.setDate(d.getDate()+29);
        this.max_date2=d;
     }
     else if(this.selectedLeaveType==2){
      const d=new Date(this.leaveStartsOn.toDate());
      d.setDate(d.getDate()+9);
      this.max_date2=d;
     }
     else if(this.selectedLeaveType==3){
      const d=new Date(this.leaveStartsOn.toDate());
      d.setDate(d.getDate()+2);
      this.max_date2=d;
     }
     else if(this.selectedLeaveType==4){
      const d=new Date(this.leaveStartsOn.toDate());
      this.max_date2=d;
     }
     else if(this.selectedLeaveType==5){
      const d=new Date(this.leaveStartsOn.toDate());
      d.setDate(d.getDate()+9);
      this.max_date2=d;
     }

  //

   this.validateInputDates();
   let duration=0;
   if(this.leaveStartsOn&&this.leaveEndsOn){
      duration=Math.abs(moment(this.leaveStartsOn).diff(moment(this.leaveEndsOn),'days'))+1;
   }
   this.leaveDuration=duration;
}


onLeaveTypeChanged(lvtype:any){

     switch(lvtype)
     {
         case 1:{
          const d=new Date();
          d.setMonth(d.getMonth()+3);
          d.setHours(0,0,0,0);
          this.min_date=d;

          const d2=new Date();
          d2.setMonth(d2.getMonth()+6);
          d2.setHours(0,0,0,0);
          this.max_date=d2;

          const d3=new Date(d);
          d3.setDate(d3.getDate()+29);
          this.max_date2=d3;

         };break; // annual leave
         case 2:{
            const d=new Date();
            d.setDate(d.getDate()+7);
            d.setHours(0,0,0,0);
            this.min_date=d;
            this.max_date=null;


            const d3=new Date(d);
            d3.setDate(d3.getDate()+9);
            this.max_date2=d3;
         };break; // Emergency leave
         case 3:{
           const d=new Date();
           d.setDate(d.getDate()+7);
           d.setHours(0,0,0,0);
           this.min_date=d;

           const d2=new Date();
           d2.setMonth(d2.getMonth()+1);
           d2.setHours(0,0,0,0);
           this.max_date=d2;



           const d3=new Date(d);
           d3.setDate(d3.getDate()+2);
           this.max_date2=d3;
         };break; // casual leave
         case 4:{
          const d=new Date();
          d.setDate(d.getDate()+7);
          d.setHours(0,0,0,0);
          this.min_date=d;
          this.max_date=null;
          this.max_date2=null;
         };break; // umrah leave
         case 5:{
          const d=new Date();
          d.setDate(d.getDate()+7);
          d.setHours(0,0,0,0);
          this.min_date=d;
          this.max_date=null;

          const d3=new Date(d);
          d3.setDate(d3.getDate()+9);
          this.max_date2=d3;
         };break; // hajj leave
         default:{
          this.min_date=null;
          this.max_date=null;
          this.max_date2=null;
        };break;
     }

     this.validateInputDates();
     if(this.invalidStartDate==false){
       this.onDatesChanged();
     }

}





getLA_drpdwns(){
    this.service.NewGetLeaveDetails(this.Current_user_ID).subscribe((res:any)=>{
          console.log('leaves:',res);
          if(res){
            this.allLeavesTypes=JSON.parse(res[0].LeaveType_drp);
            this.allCountriesList=JSON.parse(res[0].Countries);
            this.Lvemail_json=JSON.parse(res[0].email_json)[0];
            console.log('lc:',this.allLeavesTypes,this.allCountriesList,this.Lvemail_json);
          }
    });
}



onLeaveSubmit(){

  // form validation
  if(!(
        this.selectedLeaveType&&
        (this.leaveStartsOn&&this.invalidStartDate==false)&&
        (this.leaveEndsOn&&this.invalidEndDate==false)&&
        (this.tripType=='international'?this.selectedCountry:true)&&
        (this.leave_remark&&this.leave_remark.trim())
      )){
     this.notProvided=true;
     return;
  }
// form validation


  this.aprvDtoObj.Emp_no=this.Current_user_ID;
  this.aprvDtoObj.LeaveType=this.selectedLeaveType;
  this.aprvDtoObj.TripType=this.tripType;
  this.aprvDtoObj.Type=this.dayType;
  this.aprvDtoObj.Travel=this.travelType;
  this.aprvDtoObj.FromDate=this.leaveStartsOn.format('YYYY-MM-DD');
  this.aprvDtoObj.ToDate=this.leaveEndsOn.format('YYYY-MM-DD');
  this.aprvDtoObj.LeaveDays=this.leaveDuration;
  this.aprvDtoObj.Remarks=this.leave_remark;
  if(this.tripType=='local'){
    this.aprvDtoObj.Country='Saudi Arabia';
    this.aprvDtoObj.CountryId='SA';
  }
  else if(this.tripType=='international'){
    this.aprvDtoObj.Country=this.allCountriesList.find((item:any)=>item.Initials==this.selectedCountry).CountryName;
    this.aprvDtoObj.CountryId=this.selectedCountry;
  }

  this.service.NewNewInsertEmployeeLeave(this.aprvDtoObj).subscribe((res:any)=>{
       console.log('leave submit:',res);
        if(res){
          this.notifyService.showSuccess(res.message,'Success');

          // email generation here
          const leaveName=this.allLeavesTypes.find((ob)=>ob.LeaveId==this.selectedLeaveType).LeaveType;
          const leaveid=res.leaveid;

          this.aprvDtoObj.leaveid=leaveid;
          this.aprvDtoObj.leavename=leaveName;
          this.aprvDtoObj.leavefrom=this.leaveStartsOn.format('YYYY-MM-DD');
          this.aprvDtoObj.leaveto=this.leaveEndsOn.format('YYYY-MM-DD');
          this.aprvDtoObj.Empid=this.Lvemail_json.Empid;
          this.aprvDtoObj.Empname=this.Lvemail_json.EmpName;
          this.aprvDtoObj.Empemail=this.Lvemail_json.Empemail;
          this.aprvDtoObj.Empcomp=this.Lvemail_json.Empcomp;
          this.aprvDtoObj.CompCode=this.Lvemail_json.CompCode;
          this.aprvDtoObj.managerid=this.Lvemail_json.managerid.trim();
          this.aprvDtoObj.managername=this.Lvemail_json.managerName;
          this.aprvDtoObj.manageremail=this.Lvemail_json.manageremail;
          this.aprvDtoObj.hrid=this.Lvemail_json.hrid;
          this.aprvDtoObj.hrname=this.Lvemail_json.hrname;
          this.aprvDtoObj.hremail=this.Lvemail_json.hremail;
          this.aprvDtoObj.Com_PayrollId=this.Lvemail_json.Com_PayrollId;
          this.aprvDtoObj.Com_PayrollName=this.Lvemail_json.Com_PayrollName;
          this.aprvDtoObj.Com_PayrollEmail=this.Lvemail_json.Com_PayrollEmail;
          this.aprvDtoObj.PayrollCompany=this.Lvemail_json.PayrollCompany;
          this.aprvDtoObj.Com_TicketingId=this.Lvemail_json.Com_TicketingId;
          this.aprvDtoObj.Com_TicketingName=this.Lvemail_json.Com_TicketingName;
          this.aprvDtoObj.Com_TicketingEmail=this.Lvemail_json.Com_TicketingEmail;
          this.aprvDtoObj.TicketingCompany=this.Lvemail_json.TicketingCompany;
          this.aprvDtoObj.Com_ExitentryId=this.Lvemail_json.Com_ExitentryId;
          this.aprvDtoObj.Com_ExitentryName=this.Lvemail_json.Com_ExitentryName;
          this.aprvDtoObj.Com_ExitentryEmail=this.Lvemail_json.Com_ExitentryEmail;
          this.aprvDtoObj.ExitentryCompany=this.Lvemail_json.ExitentryCompany;


          this.approvalService.Email_GenerateAs('NEW_LEAVE',this.aprvDtoObj).subscribe((emres)=>{
            console.log("email res:",emres);
          });
          // email generation here

          this.closeleave();
        }
  });
}

// leave application end

}
