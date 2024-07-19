import { Component, OnInit } from '@angular/core';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import tippy from 'node_modules/tippy.js';
import { NotificationActivityDTO } from 'src/app/_Models/notification-activity-dto';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/_Services/notification.service';
import { AuthService } from 'src/app/_Services/auth.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service: ProjectTypeService,private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,private notifyService: NotificationService,
    public loadingBarServce:LoadingBarService) {
    this.ObjSubTaskDTO = new SubTaskDTO();
    this.notificationDTO = new NotificationActivityDTO();
   }
   loadingBar_state = this.loadingBarServce.useRef('http');
  notificationDTO: NotificationActivityDTO;
  ObjSubTaskDTO: SubTaskDTO;
  _fullname: string;
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
  ngOnInit(): void {
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.getusername();
    this.getNewFeatures();
    // this._fullname = localStorage.getItem('UserfullName');
    this.timelineType = this.type1;
    this.selectedSort = 'today';
    
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

  }

  getusername(){
    this.service._GetUserName(this.Current_user_ID).subscribe(data=>{
      this._fullname=data['Emp_First_Name'];
    });
  }

  isView:any;

  getNewFeatures(){
    this.service.GetNewFeatureView(this.Current_user_ID).subscribe(data=>{
      this.isView=data['message'];
      if(this.isView=='0')
        this.featuremodel();
    });

   
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
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
  }
  closeleave(){
    document.getElementById("apply-leave").classList.remove("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
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
            this.timelineDuration = (data[0]['TotalTime']);
            if (this.timelineList.length == 0) {
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
        this.service._GetTimelineActivityforRACIS(this.ObjSubTaskDTO).subscribe
          (data => {
            this.timelineList = JSON.parse(data[0]['DAR_Details_Json']);
            if (this.timelineList.length == 0) {
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
          if (this.timelineList.length == 0) {
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

      this.service._GetTimelineActivityforRACIS(this.ObjSubTaskDTO).subscribe
        (data => {
          this.timelineList = JSON.parse(data[0]['DAR_Details_Json']);
          if (this.timelineList.length == 0) {
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
          this.timelineDuration = (data[0]['TotalTime']);
          if (this.timelineList.length == 0) {
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
      this.service._GetTimelineActivityforRACIS(this.ObjSubTaskDTO).subscribe
        (data => {
          this.timelineList = JSON.parse(data[0]['DAR_Details_Json']);
          if (this.timelineList.length == 0) {
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

  logout() {
    this.loadingBar_state.stop();
    this.authService.logout();
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['login']);
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



}
