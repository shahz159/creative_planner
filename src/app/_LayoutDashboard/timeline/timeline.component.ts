import { DatePipe } from '@angular/common';
import { Component, OnInit ,Inject, ViewChild, ChangeDetectorRef} from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { ProjectDetailsDTO } from 'src/app/_Models/project-details-dto';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { StatusDTO } from 'src/app/_Models/status-dto';  
import { NotificationService } from 'src/app/_Services/notification.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS,MAT_DATE_LOCALE} from '@angular/material/core';
import 'moment/locale/ja';
import 'moment/locale/fr';
import Swal from 'sweetalert2';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { ProjectMoreDetailsService } from 'src/app/_Services/project-more-details.service';
import { ActivatedRoute } from '@angular/router';
import { debug } from 'console';
import { sort } from '@amcharts/amcharts4/.internal/core/utils/Iterator';
import { ApprovalsService } from '../../_Services/approvals.service';
import { ApprovalDTO } from '../../_Models/approval-dto';
declare var $: any;
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'dddd, MMMM DD, YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},
  ]
})
export class TimelineComponent implements OnInit {

  constructor(public service: ProjectTypeService,
    private projectMoreDetailsService: ProjectMoreDetailsService,
    private notifyService: NotificationService,
    private approvalService:ApprovalsService,
    public datepipe: DatePipe,
    private route : ActivatedRoute,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    private cdr:ChangeDetectorRef
    ) {
    this.ObjSubTaskDTO = new SubTaskDTO();
    this.objProjectDto = new ProjectDetailsDTO();
    this.objStatusDto=new StatusDTO();
   }
  timeline_of:'today'|'yesterday';
  ObjSubTaskDTO: SubTaskDTO;
  Current_user_ID: any;
  timelineList:any;
  Type:string;
  type1:string='My Timeline';
  type2:string='RACIS Timeline';
  type3:string='DAR Inbox';
  CurrentPageNo: number = 1;
  _CurrentpageRecords: number;
  darArray: any = [];
  darArrayLoading:boolean=false;
  sortType:string;
  sort1:string='Date';
  sort2:string='Project';
  sort3:string = 'Employees';
  activeDate:boolean=false;
  activeProject:boolean=false;
  master_code:any;
  project_code:any;
  projectList:any;
  actionList:any;
  project_type:any;
  showProject:boolean =false;
  showAction:boolean =false;
  workdes: string;
  disablePreviousDate = new Date();
  todayDate = new Date();
  current_Date: any = this.datepipe.transform(new Date(), 'MM/dd/yyyy');
  date = new Date();
  dateF = new FormControl(new Date());
  objProjectDto: ProjectDetailsDTO;
  objStatusDto:StatusDTO;
  // timedata: any = [];
  // timedata1: any=["08:00",
  //   "08:15", "08:30", "08:45", "09:00",
  //   "09:15", "09:30", "09:45", "10:00",
  //   "10:15", "10:30", "10:45", "11:00",
  //   "11:15", "11:30", "11:45", "12:00",
  //   "12:15", "12:30", "12:45", "13:00",
  //   "13:15", "13:30", "13:45", "14:00",
  //   "14:15", "14:30", "14:45", "15:00",
  //   "15:15", "15:30", "15:45", "16:00",
  //   "16:15", "16:30", "16:45", "17:00",
  //   "17:15", "17:30", "17:45", "18:00",
  //   "18:15", "18:30", "18:45", "19:00",
  //   "19:15", "19:30", "19:45", "20:00"];

  // timedata1: any = [
  //   "00:00", "00:15", "00:30", "00:45",
  //   "01:00", "01:15", "01:30", "01:45",
  //   "02:00", "02:15", "02:30", "02:45",
  //   "03:00", "03:15", "03:30", "03:45",
  //   "04:00", "04:15", "04:30", "04:45",
  //   "05:00", "05:15", "05:30", "05:45",
  //   "06:00", "06:15", "06:30", "06:45",
  //   "07:00", "07:15", "07:30", "07:45",
  //   "08:00", "08:15", "08:30", "08:45",
  //   "09:00", "09:15", "09:30", "09:45",
  //   "10:00", "10:15", "10:30", "10:45",
  //   "11:00", "11:15", "11:30", "11:45",
  //   "12:00", "12:15", "12:30", "12:45",
  //   "13:00", "13:15", "13:30", "13:45",
  //   "14:00", "14:15", "14:30", "14:45",
  //   "15:00", "15:15", "15:30", "15:45",
  //   "16:00", "16:15", "16:30", "16:45",
  //   "17:00", "17:15", "17:30", "17:45",
  //   "18:00", "18:15", "18:30", "18:45",
  //   "19:00", "19:15", "19:30", "19:45",
  //   "20:00", "20:15", "20:30", "20:45",
  //   "21:00", "21:15", "21:30", "21:45",
  //   "22:00", "22:15", "22:30", "22:45",
  //   "23:00", "23:15", "23:30", "23:45"
  // ];
  

  date11: any;
  starttime: {time:string, value:number}|null;
  endtime: {time:string, value:number}|null;
  timecount: any;
  releaseDate: any;
  timeList: any;
  starttimearr: any = [];
  endtimearr: any = [];
  bol: boolean = true;
  lastEndtime: any;
  s_ind: number;
  e_ind: number;
  stdata: any;
  etdata: any;
  // currenthours: any;
  // currentminutes: any;
  minutes: any;
  hours: any;
  temp: any;
  _Message: any;
  timelineDuration:any;
  showtimeline:boolean=true;
  ProState:boolean=false;
  ngOnInit(): void {

    const navigatingTotimeline = localStorage.getItem('navigatingTotimeline');
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.route.queryParams.subscribe(params => {
      const section=params.section;
      // this.timelineLog(section=='self'?this.type1:section=='racis'?this.type2:this.type1);

      if(section=='self'||(!section)){
          this.timelineLog(this.type1);
      }else if(section=='racis'){
          this.timelineLog1(this.type2,undefined);
          this.setFilterInfo('Date',undefined);
      }

    });
    this.activeDate=true;
    this.sortType=this.sort1;
    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate() - 1);
    this.disablePreviousDate.setHours(0,0,0,0);
    this.current_Date = moment(new Date()).format("MM/DD/YYYY");
    // this.currenthours = this.date.getHours();
    // this.currentminutes = this.date.getMinutes();
    // this.french();
  }

  // changeTimelineDate(sel_date:'TODAY'|'YESTERDAY') {
  //   this.timeline_of = sel_date;
  //   let val;

  //   if(this.timeline_of=='TODAY')
  //   val=this.todayDate;
  //   else if(this.timeline_of=='YESTERDAY')
  //   val=this.disablePreviousDate;

  //   this.current_Date = moment(val).format("MM/DD/YYYY");
  //   this.starttime = null;
  //   this.endtime = null;
  //   // this.getTimelineReportByDate(sel_date=='TODAY'?'today':'yesterday');



  // }


  noTimeSpaceAvailable:boolean=false;

  // setTimelineDate(val)
  // {
  //      this.current_Date = moment(val).format("MM/DD/YYYY");
  //      this.dateF = new FormControl(new Date(val));
  //      this.starttime = null;
  //      this.endtime = null;
  //      this.noTimeSpaceAvailable=false;
  //      this.service._GetTimeforDar(this.Current_user_ID, this.current_Date)
  //      .subscribe(data => {
  //       const _timeList=JSON.parse(data[0]['time_json']);
  //       let _lastEndtime;
  //       if (_timeList.length != 0) {
  //          // when some timeline submit done on the selected date.
  //          const _endtimearr=_timeList.map(ob=>ob.endtime);
  //          _lastEndtime=_endtimearr[_endtimearr.length-1];
  //          const i=this.timedata1.indexOf(_lastEndtime);
  //          if(i<this.timedata1.length-1){
  //              this.starttime=_lastEndtime;
  //              this.endtime=this.timedata1[i+1];
  //          }
  //          else{
  //             this.starttime=null;
  //             this.endtime=null;
  //             this.noTimeSpaceAvailable=true;
  //          }

  //       }
  //       else{
  //            // when no timeline submit done on the selected date.
  //            this.starttime=this.timedata1[0];
  //            this.endtime=this.timedata1[1];
  //       }
  //      });

  //      const todaystr=moment(this.todayDate).format("MM/DD/YYYY");
  //      const yesterdaystr=moment(this.disablePreviousDate).format("MM/DD/YYYY");
  //      this.timeline_of=this.current_Date==todaystr?'today':this.current_Date==yesterdaystr?'yesterday':null;
  //      this.getTimelineReportByDate(this.timeline_of);

  // }


  onTimelineDateInput(val){
    if(val){  // user has input a value.
     const tm4Date=(val.toDate()<this.disablePreviousDate||val.toDate()>this.todayDate)?this.current_Date:val.toDate();
     this.selectDateForTimeline(tm4Date);
    }
    else{ // user has input null or undefined or val is falsy.
        this.current_Date=null;
    }
 }



  french() {
    this._locale = 'fr';
    this._adapter.setLocale(this._locale);
  }


  userFound : boolean | undefined
  timelineLog(type){

    console.log("timelineLog input:",);
    this.Type=type;
    this.showtimeline=true;

    this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
    this.ObjSubTaskDTO.PageNumber = 1;
    this.ObjSubTaskDTO.PageSize = 30;
    // this.ObjSubTaskDTO.selected_emp = 0
    this.ObjSubTaskDTO.sort = null;
    this.darArrayLoading=true;
      this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe
      (data=>{
        this.darArrayLoading=false;
        this.timelineList=JSON.parse(data[0]['DAR_Details_Json']);
        console.log(this.timelineList,"timelinedata")
        this.timelineDuration=(data[0]['TotalTime']);
        this.darArray=this.timelineList;  console.log('dar arry list:',this.darArray);
        this.userFound = true
        this._CurrentpageRecords=this.timelineList.length;
        if(this.timelineList.length == 0){
          this.showtimeline=false;
          this.timelineDuration=0;
        }

        if(this.sortType==this.sort1){
        this.addStatusIntoDarArr();
        }

      });

// by default date
      this.setFilterInfo('Date',undefined);

  }
  racisemplFilter:any

  timelineLog1(type,empno:any){   
    this.Type=type;
    this.showtimeline=true

    this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
    this.ObjSubTaskDTO.PageNumber = 1;
    this.ObjSubTaskDTO.PageSize = 30;
    this.ObjSubTaskDTO.selected_emp=empno?empno:0 ;
    this.ObjSubTaskDTO.sort = empno?'Employee':'Date';
    this.darArrayLoading=true;
      this.service._GetTimelineActivityforRACIS(this.ObjSubTaskDTO).subscribe
      (data=>{ debugger
        this.darArrayLoading=false;
        this.userFound=true;
        this.timelineList=JSON.parse(data[0]['DAR_Details_Json']);
        this.racisemplFilter = JSON.parse(data[0]['RacisEmployee_Json'])
console.log(this.racisemplFilter,"this.racisemplFilterthis.racisemplFilter")
        this.darArray=this.timelineList;
        console.log(this.darArray,"startdatastartdatastartdatastartdatastartdata")
        this._CurrentpageRecords=this.timelineList.length;
        if(this.timelineList.length == 0){
          this.showtimeline=false;
        }
      });
      this.service._GetTimelineDurationforRACIS(this.ObjSubTaskDTO).subscribe
      (data=>{
        this.timelineDuration=(data[0]['TotalTime']);
      });


  }


  activeemployees:boolean = false;
  sortTimeline(sort){
    this.edited = false
    this.sortType=sort;

    if(sort=='Date'){
      this.activeDate=true;
      this.activeProject=false;
    }
    if(sort=='Project'){
      this.activeDate=false;
      this.activeProject=true;
    }
    // if(sort=='Employees'){

    // }

    if(this.Type=='My Timeline'){
      this.showtimeline=true;

      this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
      this.ObjSubTaskDTO.PageNumber = 1;
      this.ObjSubTaskDTO.PageSize = 30;
      this.ObjSubTaskDTO.sort = sort;
        this.darArrayLoading=true;
        this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe
        (data=>{
          this.darArrayLoading=false;
          this.timelineList=JSON.parse(data[0]['DAR_Details_Json']);
          this.timelineDuration=(data[0]['TotalTime']);
          this.darArray=this.timelineList;
          if(this.sortType==this.sort1){
            this.addStatusIntoDarArr();
          }
          console.log( this.darArray,'project dar array')
          this._CurrentpageRecords=this.timelineList.length;
          if(this.timelineList.length == 0){
            this.showtimeline=false;
            this.timelineDuration=0;
          }
        });
    }
    else if(this.Type=='RACIS Timeline'){
      this.showtimeline=true;

      this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
      this.ObjSubTaskDTO.PageNumber = 1;
      this.ObjSubTaskDTO.PageSize = 30;
      this.ObjSubTaskDTO.sort = sort;
      this.ObjSubTaskDTO.selected_emp = 0
      this.darArrayLoading=true;
      this.service._GetTimelineActivityforRACIS(this.ObjSubTaskDTO).subscribe
      (data=>{
        this.darArrayLoading=false;
        this.timelineList=JSON.parse(data[0]['DAR_Details_Json']);
        this.darArray=this.timelineList;
        this._CurrentpageRecords=this.timelineList.length;
        if(this.timelineList.length == 0){
          this.showtimeline=false;
          this.timelineDuration=0;
        }
      });
      this.service._GetTimelineDurationforRACIS(this.ObjSubTaskDTO).subscribe
      (data=>{
        this.timelineDuration=(data[0]['TotalTime']);
      });
    }
  }

  loadMore() {
    this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
    this.ObjSubTaskDTO.PageNumber = this.CurrentPageNo;
    this.ObjSubTaskDTO.PageSize = 30;
      this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe
      (data=>{
        this.timelineList=JSON.parse(data[0]['DAR_Details_Json']);
        this.timelineDuration=(data[0]['TotalTime']);
        this.timelineList.forEach(element => {
          this.darArray.push(element);
        });
        if (this.timelineList) {
          this._CurrentpageRecords = this.timelineList.length;
        }
        if(this.sortType==this.sort1){
          this.addStatusIntoDarArr();
        }

      });
  }

  loadMore1() {

    this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
    this.ObjSubTaskDTO.PageNumber = this.CurrentPageNo;
    this.ObjSubTaskDTO.PageSize = 30;
    this.service._GetTimelineActivityforRACIS(this.ObjSubTaskDTO).subscribe
      (data=>{
        this.timelineList=JSON.parse(data[0]['DAR_Details_Json']);
        this.timelineList.forEach(element => {
          this.darArray.push(element);
        });
        if (this.timelineList) {
          this._CurrentpageRecords = this.timelineList.length;
        }
      });
      this.service._GetTimelineDurationforRACIS(this.ObjSubTaskDTO).subscribe
      (data=>{
        this.timelineDuration=(data[0]['TotalTime']);
      });

  }

  loadMorebySort(){
    if(this.Type=='My Timeline'){
      this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
      this.ObjSubTaskDTO.PageNumber = this.CurrentPageNo;
      this.ObjSubTaskDTO.PageSize = 30;
      this.ObjSubTaskDTO.sort = this.sortType;

        this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe
        (data=>{
          this.timelineList=JSON.parse(data[0]['DAR_Details_Json']);
          this.timelineDuration=(data[0]['TotalTime']);
          this.timelineList.forEach(element => {
          this.darArray.push(element);
        });
        if (this.timelineList) {
          this._CurrentpageRecords = this.timelineList.length;
        }
        });
    }
    else if(this.Type=='RACIS Timeline'){
      this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
      this.ObjSubTaskDTO.PageNumber = this.CurrentPageNo;
      this.ObjSubTaskDTO.PageSize = 30;
      this.ObjSubTaskDTO.sort = this.sortType;

      this.service._GetTimelineActivityforRACIS(this.ObjSubTaskDTO).subscribe
      (data=>{
        this.timelineList=JSON.parse(data[0]['DAR_Details_Json']);
        this.timelineList.forEach(element => {
          this.darArray.push(element);
        });
        this.service._GetTimelineDurationforRACIS(this.ObjSubTaskDTO).subscribe
        (data=>{
          this.timelineDuration=(data[0]['TotalTime']);
        });
        if (this.timelineList) {
          this._CurrentpageRecords = this.timelineList.length;
        }
      });
    }
  }

loadingTimelineProjects:boolean=false;
getTimelineProjects(){
  this.showProject=true;
  this.master_code=null;
  this.project_code=null;
  this.showAction=false;
  this.noact_msg=false;
  this.projectList=null;
  this.loadingTimelineProjects=true;
  this.ObjSubTaskDTO.Emp_No=this.Current_user_ID;
  this.ObjSubTaskDTO.ProjectBlock=this.project_type;
  this.service._GetTimelineProjects(this.ObjSubTaskDTO).subscribe
  (data=>{ 
    this.loadingTimelineProjects=false;
    this.projectList=JSON.parse(data[0]['ProjectList']); console.log("allprjs list:",this.projectList);
   
    // adding possession property
      let arr1:any=[];
      let arr2:any=[];
      this.projectList.forEach((p)=>{
         if(p.Team_Res.trim()==this.Current_user_ID){
           p.possession='My responsible projects';
           arr1.push(p);
         }
         else{
           p.possession='RACIS projects';
           arr2.push(p);
         }
      });
     this.projectList=[...arr1, ...arr2];

    // adding possession property

  });
}

onTypeChanged(){
     if(['core','standard'].includes(this.project_type))
      this.getTimelineProjects();
     else if(['lunch','personal','corporate'].includes(this.project_type)){
         this.showProject=false;
         this.showAction=false;
         this.master_code=null;    // Project code.
         this.project_code=null;   // Action code.
     }
}




owner_empno: any;
resp_empno: any;
noact_msg: boolean =false;


getTimelineActions(){

  this.showAction=false;
  this.project_code=null;
  this.noact_msg=false;
  this.actionList=null;

  this.ObjSubTaskDTO.Emp_No=this.Current_user_ID;
  this.ObjSubTaskDTO.Project_Code=this.master_code;
  this.service._GetTimelineProjects(this.ObjSubTaskDTO).subscribe
  (data=>{

    this.actionList=JSON.parse(data[0]['ActionList']); console.log('actions here:',this.actionList);
    this.owner_empno=(data[0]['Project_Owner']);
    this.resp_empno=(data[0]['Team_Res']);
    if((this.actionList==null || this.actionList=='' || this.actionList.length==0) && (this.Current_user_ID==this.owner_empno || this.Current_user_ID==this.resp_empno)){
     // user is either prjowner or prjresp  and he is not having actions in selected prj.
      this.showAction=false;
      console.log(this.actionList,"axtions");
    }
    else if(this.actionList.length==0 && this.Current_user_ID!=this.owner_empno && this.Current_user_ID!=this.resp_empno){
      // user is support. and he is not having actions in selected prj.
      if(this.ObjSubTaskDTO.ProjectBlock=='standard')
      this.showAction=false;      // when prj is std,routine,todo.
      else{
      this.showAction=true;
      this.noact_msg=true;    // when prj is core/secondary. tell user to create action first.
      }

    }
    else{
      this.showAction=true;
    }
  });
}

clear(){
  this.showProject=false;
  this.master_code=null;
  this.project_code=null;
  this.showAction=false;
  this.project_type=null;
  this.workdes = "";
  this.current_Date = this.datepipe.transform(new Date(), 'MM/dd/yyyy');
  this.dateF = new FormControl(new Date());
  this.starttime = null;
  this.endtime = null;
  this.starttimearr = [];
  this.endtimearr = [];
  this._remarks='';
  this.selectedFile=null;
  this._inputAttachments='';
  this.bothActTlSubm=false;
  this.fieldRequired=false;
  this.submittingDar=false;
}


// Timeline submission

orgValueChange(val) {
  this.current_Date = moment(val.value).format("MM/DD/YYYY");
}



// getDarTime() {
//   this.timedata = [];
//   this.objProjectDto.Emp_No = this.Current_user_ID;
//   this.current_Date = this.datepipe.transform(this.current_Date, 'MM/dd/yyyy');
//   this.date11 = moment(new Date()).format("MM/DD/YYYY");
//   this.objProjectDto.date = this.current_Date;

//   if (this.current_Date == this.date11) {
//     this.timedata1.forEach(element => {
//       const [shours, sminutes] = element.split(":");
//       if (shours <= this.currenthours)
//         this.timedata.push(element);
//     });
//   }
//   else {
//     this.timedata1.forEach(element => {
//       this.timedata.push(element);
//     });
//   }

//   this.service._GetTimeforDar(this.Current_user_ID, this.current_Date)
//     .subscribe(data => {
// debugger
//       this.timeList = JSON.parse(data[0]['time_json']); 
//       if (this.timeList.length != 0) {
//         this.bol = false;
//         this.timeList.forEach(element => {
//           this.starttimearr.push(element.starttime);
//         });
//         this.timeList.forEach(element => {
//           this.endtimearr.push(element.endtime);
//         });
//         let l = this.endtimearr.length;
//         this.lastEndtime = this.endtimearr[l - 1];
//       }
//       else if (this.timeList.length == 0) {
//         this.bol = true;
//         this.lastEndtime = 0;
//         this.starttimearr = [];
//         this.endtimearr = [];
//       }
//     });
// }

diff_minutes(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
}

submittingDar:boolean=false;
submitDar() {

  this.submittingDar=true;   // submitting dar process start.

  if (this.starttime&&this.endtime) {
    const [shours, sminutes] = this.starttime.time.split(":");
    const [ehours, eminutes] = this.endtime.time.split(":");
    var dt1 = new Date(2014, 10, 2, +shours, +sminutes);
    var dt2 = new Date(2014, 10, 2, +ehours, +eminutes);
    // // Adjust for crossing midnight
    if (dt2 <= dt1) {
      dt2.setDate(dt2.getDate() + 1); // Move dt2 to the next day
    }

    this.minutes = this.diff_minutes(dt1, dt2) % 60;
    if (this.minutes < 10) {
      this.minutes = "0" + this.minutes
    }
    this.hours = Math.floor(this.diff_minutes(dt1, dt2) / 60);
    if (this.hours < 10) {
      this.hours = "0" + this.hours;
    }
    this.timecount = (this.hours + ":" + this.minutes);
  }

  this.objProjectDto.Emp_No = this.Current_user_ID;
  if (this.starttime != undefined && this.endtime != undefined && this.timecount != undefined) {
    this.objProjectDto.StartTime = this.starttime.time;
    this.objProjectDto.EndTime = this.endtime.time;
    this.objProjectDto.TimeCount = this.timecount;
  }
  this.current_Date = this.datepipe.transform(this.current_Date, 'MM/dd/yyyy');
  this.objProjectDto.date = this.current_Date;
  this.objProjectDto.WorkAchieved = this.workdes;

  if(['lunch','personal','corporate'].includes(this.project_type)){ // when Timeline is for lunch or personal or corporate
    if(this.project_type==='lunch')
    this.objProjectDto.Master_code='0';
    else if(this.project_type==='personal')
    this.objProjectDto.Master_code='1';
    else if(this.project_type==='corporate')
    this.objProjectDto.Master_code='2';

    this.objProjectDto.Project_Code = null;   
  }
  else{  // when Timeline is for project or action ( core or standard )
        if (this.showAction == false) {
          this.objProjectDto.Master_code = this.master_code;
          this.objProjectDto.Project_Code = this.master_code;
        }
        else if (this.showAction == true) {
          this.objProjectDto.Master_code = this.master_code;
          this.objProjectDto.Project_Code = this.project_code;
        }
  }
  this.objProjectDto.Exec_BlockName=null;
  this.objProjectDto.Project_Name=null;
  this.objProjectDto.Emp_Comp_No=null;

  this.service._InsertDARServie(this.objProjectDto)
    .subscribe(data => {

      this._Message = data['message'];
      this.notifyService.showSuccess(this._Message, "Success");
      // after timeline submission success then complete the action also if needed. start
      if(this.bothActTlSubm&&(!['lunch','personal','corporate'].includes(this.project_type))){
        const fd = new FormData();
        fd.append("Project_Name", this.actionList.find(item => item.Project_Code == this.project_code).Project_Name);  // ACTION NAME
        fd.append("Project_Code", this.project_code);                                                             // ACTION CODE.
        fd.append("Master_Code", this.master_code);                                                               // MAIN PROJECT CODE.
        fd.append("Team_Autho", this.Current_user_ID);                                                            // USER ID.
        fd.append("Projectblock", this.project_type);                                                             //  prj type (optional)
        fd.append("Remarks", this._remarks);                                                                  // REMARKS
        fd.append('file', this.selectedFile);                                                                // FILE ATTACHMENT.
        this.service._UpdateSubtaskByProjectCode(fd)
          .subscribe((event: HttpEvent<any>) => {

            switch (event.type) {
              case HttpEventType.Sent:console.log('Request has been made!');break;
              case HttpEventType.ResponseHeader:console.log('Response header has been received!');break;
              case HttpEventType.UploadProgress:{
                const progress=Math.round(event.loaded / event.total * 100);
                console.log("progress value:->",progress)
                if (progress == 100) console.log('progress completed');
              };break;
              case HttpEventType.Response:{
                var myJSON = JSON.stringify(event);
                this._Message = (JSON.parse(myJSON).body).Message;
                if(this._Message==='Success')
                {
                  this.notifyService.showSuccess("Successfully updated", 'Action completed.');
                  //  the action is successfully completed
                }
                else
                this.notifyService.showError('Unable to complete this Action.','Something went wrong!');
              };break;

            }
          });
      }
      // after timeline submission success then complete the action also if needed.  end
      this.timelineLog(this.type1);   // rebind page timeline reports list.
      this.clear();   // clear all fields. project_code, master_code, ....
      this.submittingDar=false;       // dar submitting process end.
      this.selectDateForTimeline(this.timeline_of=='today'?this.todayDate:this.disablePreviousDate);
    });

  // this.getDarTime();
  // this.getTimelineReportByDate(this.timeline_of=='TODAY'?'today':'yesterday');
  // close sidebar whenever timeline is added.
  // document.getElementById("timepage").classList.remove("position-fixed");
  // document.getElementById("rightbar-overlay").style.display = "none";
  // document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");

}
//Timeline submission ends



  darcreate() {
    document.getElementById("timepage")!.classList.add("position-fixed");
    document.getElementById("rightbar-overlay")!.style.display = "block";
    document.getElementById("darsidebar")!.classList.add("kt-quick-panel--on");
    this.clear();
    this.selectDateForTimeline(this.current_Date);    
    this.getDayReportSummary();
  }

  closedarBar() {
    document.getElementById("timepage")!.classList.remove("position-fixed");
    document.getElementById("rightbar-overlay")!.style.display = "none";
    document.getElementById("darsidebar")!.classList.remove("kt-quick-panel--on");
    this.notifyService.showError("Cancelled", '');
    this.clear();
  }

  // closeInfo(){
  //   document.getElementById("timepage")!.classList.remove("position-fixed");
  //   document.getElementById("rightbar-overlay")!.style.display = "none";
  //   document.getElementById("darsidebar")!.classList.remove("kt-quick-panel--on");
  //   document.getElementById("actyInfobar_header")!.classList.remove("open_sidebar");
  //   this.clear();
  // }

  moreDetails(pcode) {
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${pcode}`;
    var myWindow = window.open(myurl,pcode);
    myWindow?.focus();
  }

  newDetails(pcode) {
    let name: string = 'Details';
    var url = document.baseURI + name;
    var myurl = `${url}/${pcode}`;
    var myWindow = window.open(myurl,pcode);
    myWindow?.focus();
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
    myWindow?.focus();
  }

  notinAction() {
    this.notifyService.showError("Development Under Maintainance", 'Failed');
  }



// complete action with timeline start
_inputAttachments:string='';
bothActTlSubm:boolean=false;
selectedFile:any;
_remarks:string='';
onFileChange(e) {
  this._inputAttachments = e.target.files[0].name;
  this.selectedFile = <File>e.target.files[0];
}



// complete action with timeline end






// timeline new code start.
// pcomplete_details:any;
// proj_details:any;
// action_details:any;
// getPrjRelatedDetails(){






//   // this.projectMoreDetailsService.getProjectMoreDetails(this.master_code).subscribe(res => {
//   //          this.pcomplete_details=res[0];
//   //          this.proj_details=this.pcomplete_details.ProjectInfo_Json;
//   //          console.log('proj_details:',this.proj_details);
//   // });
// }

p_details:any;
a_details:any;
p_loading:boolean=false;
a_loading:boolean=false;
getPADetails(prjcode,of:'PROJECT'|'ACTION'){

    if(prjcode)
    {
      if(of==='PROJECT'){
        this.p_details=null;
        this.a_details=null;
        this.p_loading=true;
      }
      else{
        this.a_details=null;
        this.a_loading=true;
      }

      this.service.NewSubTaskDetailsService(prjcode).subscribe((res:any)=>{

                 console.log("|||=>",res[0].ProjectStates_Json);
                 if(of==='PROJECT'){

                  this.p_details=JSON.parse(res[0].ProjectStates_Json)[0];
                  this.p_details.project_type=JSON.parse(res[0].ProjectName_Json)[0].Project_Type;
                  this.projectMoreDetailsService.getProjectTimeLine(prjcode, '1', this.Current_user_ID).subscribe((res: any) => {
                    debugger
                      const tlTotalHrs:number = +JSON.parse(res[0].Totalhours);
                      const remainingHrs:number=+((this.p_details.AllocatedHours-tlTotalHrs).toFixed(1));
                      this.p_details={
                        ...this.p_details,
                        usedHours:tlTotalHrs,
                        remainingHours:remainingHrs<0?0:remainingHrs,
                        extraHours:remainingHrs<0?(Math.abs(remainingHrs)):0
                      };
                      this.p_loading=false;     console.log('p_loading:',this.p_details);

                   
                   
                    //when standard or routine (daily submission) type projects is selected calculate "remainingSRTime" also.   
                    if((this.p_details.project_type=='Standard Tasks'||this.p_details.project_type=='Routine Tasks')&&this.p_details.Submissiontype=='Daily'){
                      const h=Number.parseInt(this.p_details.StandardAllocatedHours.split(':')[0]);
                      const m=Number.parseInt(this.p_details.StandardAllocatedHours.split(':')[1]);
                      const pmax_alhr=h+(m/60);   // selected standard/routine project's planned allocated hrs value.  (daily max hrs)
                     
                      const hrSpendOnPrj=this.tmReportArr.reduce((sum,item)=>{    debugger
                        if(item.project_code==this.master_code){
                           const h=Number.parseInt(item.Duration.split(':')[0]);
                           const m=Number.parseInt(item.Duration.split(':')[1]);
                           const ralhr=h+(m/60);
                           return sum+ralhr;
                        }
                        else 
                          return sum;
                      },0);

                      this.remainingSRTime=(pmax_alhr-hrSpendOnPrj)*60;   console.log('SRTime:',this.remainingSRTime);
                    }
                    else{  this.remainingSRTime=0;  } 
                    //




                    // show popup warning if selected core/secondary/todo project is already over used.
                    
                    if(['Core Tasks','Secondary Tasks','To do List'].includes(this.p_details.project_type)&&this.p_details.extraHours>0){
                       
                      const pobj=this.projectList.find(p=>p.Project_Code==this.master_code);
                      const project_name=pobj.Project_Name;
                      
                      
                      Swal.fire({
                            title:'Project Overutilization Warning',
                            html:`<div>

                            <h6 style="text-align: justify;text-wrap-mode: nowrap;overflow-x: hidden; text-overflow: ellipsis; margin-bottom: 5px;">${project_name}</h6>
                                    <div class="d-flex gap-1 flex-grow-1 flex-wrap">
                                          <div style="border: 1px solid #e1e1e1;border-radius: 4px;padding: 0.1rem 0.5rem;-webkit-user-select: none;user-select: none;display: flex; column-gap: 10px;">
                                          <div class="text-nowrap" style="line-height: 2;font-weight: 500;font-size: 11px;color: #8c8888;">Achieved hours :</div><div class="info-chip-value" style="line-height: 1.8;color: #242424;font-size: 11px; font-weight: 600;display: flex; align-items: center;gap: 6px; text-transform: lowercase;">
                                          <span title="used hours" class="text-nowrap">${this.p_details.usedHours} hrs</span><span class="hrs-by">/</span><span title="allocated hours" class="text-nowrap">${this.p_details.AllocatedHours} hrs</span></div></div>
                                          <div  style="border: 1px solid #e1e1e1; border-radius: 4px;padding: 0.1rem 0.5rem;-webkit-user-select: none; user-select: none; display: flex; column-gap: 10px; align-items: center;">
                                          <div class="text-nowrap" style="line-height: 2;font-weight: 500;font-size: 10px; color: #8c8888;">Overutilized by :</div><div class="info-chip-value text-nowrap text-red" style="line-height: 2;color: red;font-size: 11px;font-weight: 600;display: flex; align-items: center;gap: 6px;text-transform: lowercase;"> ${this.p_details.extraHours} hrs </div>
                                          </div>
                                    </div>

                                      <div style="font-size: 12px;color: #c57a05;border: 1px solid #c57a053b;font-weight: 500;margin-top: 15px;background-color: #fdbc4a38;padding: 5px;border-radius: 4px;display: flex;align-items: center;column-gap: 7px;">
                                            <svg  width="45px" height="30px" viewBox="0 0 512 512" fill="#c57a05" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>warning</title><g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="add" transform="translate(32.000000, 42.666667)"><path _ngcontent-rvu-c346="" d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z M225.144334,42.6739678 L42.6666667,362.009885 L407.622001,362.009885 L225.144334,42.6739678 Z M224,272 C239.238095,272 250.666667,283.264 250.666667,298.624 C250.666667,313.984 239.238095,325.248 224,325.248 C208.415584,325.248 197.333333,313.984 197.333333,298.282667 C197.333333,283.264 208.761905,272 224,272 Z M245.333333,106.666667 L245.333333,234.666667 L202.666667,234.666667 L202.666667,106.666667 L245.333333,106.666667 Z" id="Combined-Shape"></path></g></g></g>
                                            </svg>
                                          <span style="text-align: justify;">
                                           Project is already overutilized. Adding more hours may hold you accountable for the overutilization.
                                          </span>
                                      </div>
                                </div>
                                 `,
                            showConfirmButton:true,
                            confirmButtonText:'Proceed Anyway',
                            showCancelButton:true,
                            cancelButtonText:'Cancel',
                            
                        }).then((choice)=>{
                            if(choice.dismiss === Swal.DismissReason.cancel){
                                 this.master_code=null;  // clear selected project code
                                 this.p_details=null;    // clear selected project details
                                 this.showAction=false;   // clear action dropdown section view to default
                                 this.project_code=null;  // clear action code to default
                                 this.noact_msg=false;    // clear message view 
                                 this.actionList=null;    // clear actions list if present
                            }
                        });   
                    }
                    //

                  });

                 }
                 else{
                  this.a_details=JSON.parse(res[0].ProjectStates_Json)[0];
                  this.service.DARGraphCalculations_Json(prjcode).subscribe((res:any)=>{
                    const actionAlhrs = (res[0]['ProjectMaxDuration']);  // action planned allocated hrs.
                    const usedhrs = (res[0]['TotalHoursUsedInDAR']);  // my timeline hrs on the action.
                    const remainingHrs:number=+((actionAlhrs-usedhrs).toFixed(1));
                    this.a_details={
                        ...this.a_details,
                        usedHours:usedhrs,
                        remainingHours:remainingHrs<0?0:remainingHrs,
                        extraHours:remainingHrs<0?(Math.abs(remainingHrs)):0
                    }
                    this.a_loading=false;
                    console.log('a_loading:',this.a_details);



                    // show popup warning if selected  action is already over used.
                    if(this.a_details.extraHours>0){
                       
                      const aobj=this.actionList.find(p=>p.Project_Code==this.project_code);
                      const action_name=aobj.Project_Name;
                      
                      
                      Swal.fire({
                            title:'Action Overutilization Warning',
                            html:`<div>

                            <h6 style="text-align: justify;text-wrap-mode: nowrap;overflow-x: hidden; text-overflow: ellipsis; margin-bottom: 5px;">${action_name}</h6>
                                    <div class="d-flex gap-1 flex-grow-1 flex-wrap">
                                          <div style="border: 1px solid #e1e1e1;border-radius: 4px;padding: 0.1rem 0.5rem;-webkit-user-select: none;user-select: none;display: flex; column-gap: 10px;">
                                          <div class="text-nowrap" style="line-height: 2;font-weight: 500;font-size: 11px;color: #8c8888;">Achieved hours :</div><div class="info-chip-value" style="line-height: 1.8;color: #242424;font-size: 11px; font-weight: 600;display: flex; align-items: center;gap: 6px; text-transform: lowercase;">
                                          <span title="used hours" class="text-nowrap">${this.a_details.usedHours} hrs</span><span class="hrs-by">/</span><span title="allocated hours" class="text-nowrap">${this.a_details.AllocatedHours} hrs</span></div></div>
                                          <div  style="border: 1px solid #e1e1e1; border-radius: 4px;padding: 0.1rem 0.5rem;-webkit-user-select: none; user-select: none; display: flex; column-gap: 10px; align-items: center;">
                                          <div class="text-nowrap" style="line-height: 2;font-weight: 500;font-size: 10px; color: #8c8888;">Overutilized by :</div><div class="info-chip-value text-nowrap text-red" style="line-height: 2;color: red;font-size: 11px;font-weight: 600;display: flex; align-items: center;gap: 6px;text-transform: lowercase;"> ${this.a_details.extraHours} hrs </div>
                                          </div>
                                    </div>

                                      <div style="font-size: 12px;color: #c57a05;border: 1px solid #c57a053b;font-weight: 500;margin-top: 15px;background-color: #fdbc4a38;padding: 5px;border-radius: 4px;display: flex;align-items: center;column-gap: 7px;">
                                            <svg  width="45px" height="30px" viewBox="0 0 512 512" fill="#c57a05" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>warning</title><g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="add" transform="translate(32.000000, 42.666667)"><path _ngcontent-rvu-c346="" d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z M225.144334,42.6739678 L42.6666667,362.009885 L407.622001,362.009885 L225.144334,42.6739678 Z M224,272 C239.238095,272 250.666667,283.264 250.666667,298.624 C250.666667,313.984 239.238095,325.248 224,325.248 C208.415584,325.248 197.333333,313.984 197.333333,298.282667 C197.333333,283.264 208.761905,272 224,272 Z M245.333333,106.666667 L245.333333,234.666667 L202.666667,234.666667 L202.666667,106.666667 L245.333333,106.666667 Z" id="Combined-Shape"></path></g></g></g>
                                            </svg>
                                          <span style="text-align: justify;">
                                             This Action is already overutilized. Adding more hours may hold you accountable for the overutilization.
                                          </span>
                                      </div>
                                </div>
                                 `,
                            showConfirmButton:true,
                            confirmButtonText:'Proceed Anyway',
                            showCancelButton:true,
                            cancelButtonText:'Cancel',
                            
                        }).then((choice)=>{
                            if(choice.dismiss === Swal.DismissReason.cancel){
                                 this.project_code=null;  // clear action code to default
                            }
                        });   
                    }
                    //



                   });
                 }
      });

    }
}











// timeline new code end.


// form validation new start.
fieldRequired:boolean=false;
onTLSubmitBtnClick(){
  
 const invalidEndtime=(this.starttime&&this.endtime&&(  
 (this.project_type=='corporate'&&((this.endtime.value-this.starttime.value)/(1000*60))>this.remainingCorporateTime)||
 (this.project_type=='lunch'&&((this.endtime.value-this.starttime.value)/(1000*60))>this.remainingLunchTime)||
 (this.project_type=='standard'&&this.p_details&&['Standard Tasks','Routine Tasks'].includes(this.p_details.project_type.trim())&&this.p_details.Submissiontype=='Daily'&&(((this.endtime.value-this.starttime.value)/(1000*60))>this.remainingSRTime))||
 (this.endtime.value<this.starttime.value)) );


 const lunchPersonalCorporate:boolean=['lunch','personal','corporate'].includes(this.project_type);

       if(
           (lunchPersonalCorporate?true:this.master_code)&&
           (lunchPersonalCorporate?true:(this.showAction?this.project_code:true))&&
           (this.workdes&&this.workdes.trim())&&
           this.starttime&&
           this.endtime&&
           this.dateF.value &&
           (!invalidEndtime)&&
           (
            lunchPersonalCorporate?true:
              ((this.showAction&&this.bothActTlSubm)?(this._remarks&&(this.ProState?this.selectedFile:true)):true)
           )
         ){
      // when all mandatory fields are provided.
         this.submitDar();
         }
         else{
        // when some mandatory fields are not provided.
        this.fieldRequired=true;

        // if start time, end time or date if not provided.
        // if(!(this.starttime&&this.endtime&&this.dateF.value)){
        //   setTimeout(()=>document.getElementById("dropdown-timeline-menu").classList.add("show"),0);
        // }


        //
      }
}





// form validation new end.





// functionality : file attachment is mandatory when action completion. start
prostate(actioncode:any){
  const selectedAction=this.actionList.find(action=>action.Project_Code==actioncode);
  if(selectedAction){
    this.ProState=selectedAction.ProState?true:false;
  }
  else
  this.ProState=false;
}

// functionality : file attachment is mandatory when action completion. end


showDropdown = false;
activeAgendaIndex: number = 0
toggleDropdown() {
  debugger
  this.activeAgendaIndex = 0
  this.showDropdown = !this.showDropdown;
}

filterconfig: {
  filterby: 'Date' | 'Project' | 'Employees' ,
  sortby: string|undefined
} = { filterby: 'Date', sortby: 'Employees' };

setFilterInfo(filterby:  'Date' |'Project' | 'Employees' , sortby: string | undefined) {

  // this.activeAgendaIndex = 0
  if(this.filterconfig.filterby!=filterby){
     sortby=undefined;
  }

  this.filterconfig.filterby = filterby;
  this.filterconfig.sortby = sortby;
}

previous_filter() {
  document.getElementById("dropd")!.classList.toggle("show");

}

  toggleDropdowns() {
    this.activeAgendaIndex = 0
    this.showDropdown = false;
    // document.getElementById('loadmore').classList.remove('d-none')
  }



  filterEmpTimeline(empno: string) {

    // this.timelineList= this.timelineList.map(item => {debugger
    //   return { ...item, Dardata: item.Dardata.filter(dar => dar.EmpName === EmpName) };
    //  }).filter(item => item.Dardata.length > 0);

    }


    edited:boolean = false

    // getTimelineOfEmployee(empno:string,pageNo:number=1){

    //   this.showtimeline=true;
    //   this.ObjSubTaskDTO.Emp_No = empno;
    //   this.ObjSubTaskDTO.PageNumber = pageNo;
    //   this.ObjSubTaskDTO.PageSize = 30;
    //     this.darArrayLoading=true;
    //     this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe
    //     (data=>{
    //       this.darArrayLoading=false;
    //       this.timelineList=JSON.parse(data[0]['DAR_Details_Json']);
    //       console.log(this.timelineList,"timelinedata")
    //       this.timelineDuration=(data[0]['TotalTime']);
    //       this.darArray=this.timelineList;  console.log('dar arry list:',this.darArray);
    //       this.userFound = true
    //       this.edited = true
    //       this._CurrentpageRecords=this.timelineList.length;
    //       if(this.timelineList.length == 0){
    //         this.showtimeline=false;
    //         this.timelineDuration=0;
    //       }
    //     });
    //     // this.hideloadmore()
    // }


// hideloadmore(){
//   document.getElementById('loadmore').classList.add('d-none')
// }



/* timeline submit start */









// submitTL(submDate:string)
// {

//   Swal.fire({
//     title: "Confirm End of Day",
//     text:'Are you sure you want to end the day?',
//     showCancelButton: true,
//     confirmButtonText: 'Yes, End Day',
//     cancelButtonText: 'No'
//   })
//     .then((option) => {
//       if (option.isConfirmed) {  debugger
//          const empno=this.Current_user_ID;
//          const tmDate=moment(new Date(submDate)).format('MM/DD/YYYY');
//          this.service.NewInsertTimelineReport(empno,tmDate).subscribe((res:any)=>{
//                console.log(res);

//           if(res&&res.message){
//                if(res.message=='1'){
//                     Swal.fire(
//                       'Timeline report submitted successfully.',
//                       `date : ${submDate}`,
//                       'success'
//                     );
//                    this.timelineLog(this.type1);
//                    this.getTimelineReportByDate(this.timeline_of);
//                     // rebind
//                }
//                else if(res.message=='2'||res.message!='2'){
//                 Swal.fire(
//                   'Failed to submit timeline report.',
//                   `date : ${submDate}`,
//                   'error'
//                 );
//                }
//           }
//           else{
//             Swal.fire({
//               icon: 'error',
//               title: 'Something went wrong!',
//               text: 'An issue occurred while processing your request. Please review the timeline before try again.',
//             });
//           }

//          });

//       }
//       else {
//         Swal.fire(
//           'Timeline report not submitted',
//           `date : ${submDate}`,
//           'error'
//         );

//       }
//     })
//     .catch(e => console.log(e));
// }


// tm4EndDate_msg:boolean=false;

submittingTimelineReport:boolean=false;
endDay(submDate:string)
{
  if(this.tmReportTotalDuration==null){    // if there is no timeline has been entered by the user on the selected date.
    // this.tm4EndDate_msg=true;
    const err_box=document.querySelector('#endDay-not-allowed-box');
    err_box?.classList.add('anim-start');
    const onanimend=()=>{
      setTimeout(()=>{
        err_box?.classList.remove('anim-start');
        err_box?.removeEventListener('animationend',onanimend);
      },3500);
    };
    err_box?.addEventListener('animationend',onanimend);
    return;
  }

  const empno=this.Current_user_ID;
  const tmDate=moment(new Date(submDate)).format('MM/DD/YYYY');
  this.submittingTimelineReport=true;
  this.service.NewInsertTimelineReport(empno,tmDate).subscribe((res:any)=>{
  this.submittingTimelineReport=false;  
  if(res&&res.message){
      if(res.message=='1'){
          Swal.fire(
            'Timeline report submitted successfully.',
            `date : ${submDate}`,
            'success'
          );
          this.timelineLog(this.type1);
          this.service.GetTimelineSubmissionStatus(this.Current_user_ID).subscribe((res:any)=>{  // get new latest submission list
              this.submission_json=JSON.parse(res[0].submission_json);
              this.getTimelineReportByDate(this.timeline_of);
           });
          this.endTimelineModal_dismiss();
          // rebind
      }
      else if(res.message=='2'||res.message!='2'){
      Swal.fire(
        'Failed to submit timeline report.',
        `date : ${submDate}`,
        'error'
      );
      }
  }
  else{
  Swal.fire({
    icon: 'error',
    title: 'Something went wrong!',
    text: 'An issue occurred while processing your request. Please review the timeline before try again.',
  });
  }
   });
}


submission_json:any;
addStatusIntoDarArr(){
  this.service.GetTimelineSubmissionStatus(this.Current_user_ID).subscribe((res:any)=>{
    if(res){
        this.submission_json=JSON.parse(res[0].submission_json);
        if(this.submission_json){
          this.darArray.forEach((tm:any)=>{
            const d1=new Date(tm.SubmissionDate);
            d1.setHours(0,0,0,0);
            const tm_submitted=this.submission_json.find(item=>{
                const d2=new Date(item.SubmissionDate);
                return d1.getTime()==d2.getTime();
            });

            if(tm_submitted)
              tm.DarStatus=tm_submitted.Status;
            else{
              tm.DarStatus='Not Submitted';
              const crtdate=new Date();
              const daysDiff=Math.abs(moment(d1).diff(moment(crtdate),'days'));
              tm.submitable=daysDiff<=1;
            }
         });


        }

        console.log('123 darArray:',this.darArray);
        console.log('GetTimelineSubmissionStatus:',this.submission_json);
    }
});
}

formatDuration(totalDuration) {
  // Check if totalDuration is a valid string and formatted correctly
  if (typeof totalDuration !== 'string' || totalDuration.length < 5) {
    return '00 Hrs : 00 Mins'; // or some default value
  }

  // Extract hours and minutes safely
  let hours = totalDuration.substring(0, 2);
  let minutes = totalDuration.substring(3, 5);

  // Convert hours and minutes to integers for comparison
  const hoursInt = parseInt(hours, 10);
  const minutesInt = parseInt(minutes, 10);

  return `${hoursInt > 0 ? hours : '00'} ${hoursInt === 0 || hoursInt === 1 ? 'Hr' : 'Hrs'} : ${minutesInt > 0 ? minutes : '00'} ${minutesInt === 0 || minutesInt === 1 ? 'Min' : 'Mins'}`;
}

formatHoursToHHMM(hours: number): string {
  const totalMinutes = Math.round(hours * 60);
  const hh = Math.floor(totalMinutes / 60);
  const mm = totalMinutes % 60;

  const hoursInt = hh;
  const minutesInt = mm;

  const hoursFormatted = `${hoursInt > 0 ? hh.toString().padStart(2, '0') : '00'} ${hoursInt === 0 || hoursInt === 1 ? 'Hr' : 'Hrs'}`;
  const minutesFormatted = `${minutesInt > 0 ? mm.toString().padStart(2, '0') : '00'} ${minutesInt === 0 || minutesInt === 1 ? 'Min' : 'Mins'}`;

  return `${hoursFormatted} : ${minutesFormatted}`;
}


tmReportArr:any[]=[];
tmReportTotalDuration:{hours:string,minutes:string}|null;
tmReportStatus:any;
tmSubmDate:any;
tmReportLoading:boolean=false;
submittedTimelines:any[]=[];

getTimelineReportByDate(dateVal:'today'|'yesterday') {  
  if(dateVal){   
    this.tmReportArr=[];
    this.tmReportStatus=null;
    this.tmReportTotalDuration=null;
    this.tmSubmDate=null;
    this.submittedTimelines=[];
    this.lastEndtime = 0;
    this.bol = true;
    this.noTimeSpaceAvailable=false;
    this.starttime=null;
    this.endtime=null;
    this.disabledLunchOption=false;
    this.disabledCorporateOption=false;
    this.remainingLunchTime=this.allocatedTimeForLunch;   // default
    this.remainingCorporateTime=this.allocatedTimeForCorporate;   // default
    // erase prev data.

    this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
    this.ObjSubTaskDTO.PageNumber = 1;
    this.ObjSubTaskDTO.PageSize = 2;
    const _dateob=dateVal=='today'?this.todayDate:this.disablePreviousDate;
    const _datestr=moment(_dateob).format('YYYY-MM-DD');
    this.ObjSubTaskDTO.Start_Date = _datestr;
    this.ObjSubTaskDTO.End_Date = _datestr;
    this.ObjSubTaskDTO.sort = 'custom';
    this.tmReportLoading=true;
    this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe
      (data => {              
        this.tmReportLoading=false;
        console.log(data);
        if(data&&data[0].DAR_Details_Json){   
             const dar_json=JSON.parse(data[0].DAR_Details_Json);
             if(dar_json&&dar_json[0]){     
                // all timelines submitted on selected date.     
                this.tmReportArr=dar_json[0].Dardata;    
                this.submittedTimelines=this.tmReportArr.map((obj)=>({ starttime:obj.starttime, endtime:obj.endtime }));
                this.submittedTimelines.reverse();
                this.bol = false;

                // calculate last time of timeline submission on selected date.
                const _lastendtm=this.submittedTimelines[this.submittedTimelines.length - 1].endtime;
                const from=this.timeArr.indexOf(this.submittedTimelines[0].starttime);
                const to=from+this.tmCapacity;
                let choosed_date:any=new Date(_datestr);
                let next_date:any=new Date(choosed_date);  next_date.setDate(next_date.getDate()+1);
                choosed_date=moment(choosed_date).format("YYYY-MM-DD");
                next_date=moment(next_date).format("YYYY-MM-DD");
                const list=[...this.getTimeStamps(choosed_date,this.timeArr),...this.getTimeStamps(next_date,this.timeArr)].slice(from,to);
                this.lastEndtime=list.find((ob)=>ob.time==_lastendtm);  
               

                // Check whether timespace available or not. and setting default values to starttime and endtime.
                this.noTimeSpaceAvailable=(this.lastEndtime.time==list[list.length-1].time);
                if(this.noTimeSpaceAvailable==false){
                  const li=list.findIndex((obj)=>obj.time==this.lastEndtime.time);
                  this.starttime=list[li];   this.endtime=list[li+1];  
                }
              
                
              // adding 'duration'and formating 'starttime' and 'endtime' property to show timing in more easy way on the view.
                this.tmReportArr.forEach(ob=>{
                  const k=/00:\d\d/.test(ob.Duration);
                   ob.duration=k?(ob.Duration.split(':')[1]+' mins'):(ob.Duration+' hrs');
                   ob.starttime=this.formatTimes(ob.starttime);
                   ob.endtime=this.formatTimes(ob.endtime);
                }); 


              // calculate status.
                const [hrs,mins]=dar_json[0].TotalDuration.split(':');
                this.tmReportTotalDuration={hours:hrs,minutes:mins};
                this.tmSubmDate=dar_json[0].SubmissionDate;
                if(this.submission_json){

                    const d1=new Date(this.tmSubmDate);
                    d1.setHours(0,0,0,0);
                    const tm_submitted=this.submission_json.find(item=>{
                        const d2=new Date(item.SubmissionDate);
                        return d1.getTime()==d2.getTime();
                    });


                    if(tm_submitted)
                      this.tmReportStatus=tm_submitted.Status;
                    else{
                      this.tmReportStatus='Not Submitted';
                      // const crtdate=new Date();
                      // const daysDiff=Math.abs(moment(d1).diff(moment(crtdate),'days'));
                      // tm.submitable=daysDiff<=1;
                    }

                }


              // calculate whether lunch option is allowed or not on the selected date.
               console.log('tmreport arr:',this.tmReportArr);
               const totallnchInMins=this.tmReportArr.reduce((sum,_tm)=>{   
                   if(_tm.Tasktype=='Lunch'){
                      const [h,m]=_tm.Duration.split(':').map(Number);
                      return sum+(h*60+m);
                   } 
                   else 
                   return sum;
               },0);
               this.disabledLunchOption=totallnchInMins>=this.allocatedTimeForLunch;
               this.remainingLunchTime=this.allocatedTimeForLunch-totallnchInMins;
               


             // calculate whether corporate responsibility option is allowed or not on the selected date. 
             const totalCorporateInMins=this.tmReportArr.reduce((sum,_tm)=>{    
              if(_tm.Tasktype=='Corporate Responsibility'){
                 const [h,m]=_tm.Duration.split(':').map(Number);
                 return sum+(h*60+m);
              } 
              else 
              return sum;
             },0);
            this.disabledCorporateOption=totalCorporateInMins>=this.allocatedTimeForCorporate;
            this.remainingCorporateTime=this.allocatedTimeForCorporate-totalCorporateInMins;
            }
            console.log('submitted timelines:',this.submittedTimelines,'last end time was:',this.lastEndtime);
           //

     

           // recalculation of "remainingSRTime" is required as "tmReportArr" is changed.
           // if standard or routine type (daily) project is found selected.
           if(this.master_code&&this.p_details&&(this.p_details.project_type=='Standard Tasks'||this.p_details.project_type=='Routine Tasks')&&this.p_details.Submissiontype=='Daily')
           {
            const h=Number.parseInt(this.p_details.StandardAllocatedHours.split(':')[0]);
            const m=Number.parseInt(this.p_details.StandardAllocatedHours.split(':')[1]);
            const pmax_alhr=h+(m/60);   // selected standard/routine project's planned allocated hrs value.  (daily max hrs)
           
            const hrSpendOnPrj=this.tmReportArr.reduce((sum,item)=>{    
              if(item.project_code==this.master_code){
                 const h=Number.parseInt(item.Duration.split(':')[0]);
                 const m=Number.parseInt(item.Duration.split(':')[1]);
                 const ralhr=h+(m/60);
                 return sum+ralhr;
              }
              else 
                return sum;
            },0);
            this.remainingSRTime=(pmax_alhr-hrSpendOnPrj)*60;   console.log('SRTime:',this.remainingSRTime);
           }
           else{  this.remainingSRTime=0;  }
         // "remainingSRTime" is used for std/routine type project validation context.    // THIS STEP IS EXECUTED HERE IS JUST TO UPDATE THE "remainingSRTime" variable value if std/routine(daily) type project is found selected.
      


        }

      });

  }
}



/* timeline submit end */

close_add_time() {
  document.getElementById("dropdown-timeline-menu")!.classList.remove("show");
}
btn_timeline_table_accordion(){
  document.getElementById("btn-timeline-table-accordion")!.classList.toggle("rotate");
}
endTimelineModal(){
  document.getElementById("endTimelineModal")!.style.display = "block";
  document.getElementById("endTimelineModal")!.classList.add("show");
  document.getElementById("endTimelineModalBackdrop")!.style.display = "block";
  document.getElementById("endTimelineModalBackdrop")!.classList.add("show");
  this.getDayReportSummary();
}
endTimelineModal_dismiss(){
  document.getElementById("endTimelineModal")!.style.display = "none";
  document.getElementById("endTimelineModal")!.classList.remove("show");
  document.getElementById("endTimelineModalBackdrop")!.style.display = "none";
  document.getElementById("endTimelineModalBackdrop")!.classList.remove("show");
  $('#endDay-not-allowed-box').removeClass('anim-start');
}


formatTimes(time: string): string {
  if(time){
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    const options :any = { hour: 'numeric', minute: 'numeric', hour12: true };
    const x=date.toLocaleTimeString('en-US', options);
    return x;
  }
 return '';
}


expandDescription(id:string){
  const workachvsec=document.querySelector(id);
  if(workachvsec){
    if(workachvsec.classList.contains('collapse'))
      workachvsec.classList.remove('collapse');
      else
      workachvsec.classList.add('collapse');
  }
}



daySummaryReport:any;
dueTodayTasksCount:{taskType:string,count:number}[]=[];
getDayReportSummary(){
    this.service.NewGetEmployeePerformance(this.Current_user_ID).subscribe((res:any)=>{
      console.log("daySummaryReport res:",res);
        if(res&&res.EmployeeReport){
               this.daySummaryReport=JSON.parse(res.EmployeeReport)[0];
              console.log("daySummaryReport:",this.daySummaryReport);
              this.dueTodayTasksCount=[];
              ['ActionsDueToday','ProjectsDueToday','StandardDueToday'].forEach((dkey)=>{
                if(this.daySummaryReport[dkey]>0){
                      const ob={ taskType:dkey, count:this.daySummaryReport[dkey] };
                      this.dueTodayTasksCount.push(ob);
                }
              });
        }
    })
}



viewActions(type:'COMPLETED'|'DUE'|'DELAYED'){
  if(type=='DELAYED')
  {
    let myurl = document.baseURI+`/ViewProjects/DelayProjects?section=Actions&filterbyemp=${this.Current_user_ID}&filterbystatus=Delay`;
    let myWindow = window.open(myurl,'_blank');
    myWindow?.focus();
  }
}

viewProjects(type:'COMPLETED'|'DUE'|'DELAYED'|'REJECTED'){
  if(type=='DELAYED')
  {
    let myurl = document.baseURI+`/ViewProjects/DelayProjects?section=Projects&filterbyemp=${this.Current_user_ID}&filterbystatus=Delay`;
    let myWindow = window.open(myurl,'_blank');
    myWindow?.focus();
  }
  else if(type=='REJECTED')
  {
    let myurl = document.baseURI+`/ViewProjects/Rejected`;
    let myWindow = window.open(myurl,'_blank');
    myWindow?.focus();
  }
}


viewTasks(){
  let myurl = document.baseURI+'/backend/createproject?AssignedProjectId=none';
  let myWindow = window.open(myurl,'_blank');
  myWindow?.focus();
}


viewStandardTasks(type:'COMPLETED'|'DELAYED'){
   if(type=='DELAYED')
   {

    let myurl = document.baseURI+'/backend/ProjectsSummary';
    let myWindow = window.open(myurl,'_blank');
    const obj={
      EmpNo:this.Current_user_ID,
      ProjectType:'003',
      Status:'InProcess',
    };
    myWindow?.sessionStorage.setItem('filterprjsby',JSON.stringify(obj));
    myWindow?.focus();

   }
}




// full time available start.

timeArr: any = [
  "00:00", "00:15", "00:30", "00:45",
  "01:00", "01:15", "01:30", "01:45",
  "02:00", "02:15", "02:30", "02:45",
  "03:00", "03:15", "03:30", "03:45",
  "04:00", "04:15", "04:30", "04:45",
  "05:00", "05:15", "05:30", "05:45",
  "06:00", "06:15", "06:30", "06:45",
  "07:00", "07:15", "07:30", "07:45",
  "08:00", "08:15", "08:30", "08:45",
  "09:00", "09:15", "09:30", "09:45",
  "10:00", "10:15", "10:30", "10:45",
  "11:00", "11:15", "11:30", "11:45",
  "12:00", "12:15", "12:30", "12:45",
  "13:00", "13:15", "13:30", "13:45",
  "14:00", "14:15", "14:30", "14:45",
  "15:00", "15:15", "15:30", "15:45",
  "16:00", "16:15", "16:30", "16:45",
  "17:00", "17:15", "17:30", "17:45",
  "18:00", "18:15", "18:30", "18:45",
  "19:00", "19:15", "19:30", "19:45",
  "20:00", "20:15", "20:30", "20:45",
  "21:00", "21:15", "21:30", "21:45",
  "22:00", "22:15", "22:30", "22:45",
  "23:00", "23:15", "23:30", "23:45"
];

tmCapacity=93;  //93 : 23 hrs per day limit.   41 : hrs per day limit
timedata3:any[]=[];  
disabledLunchOption:boolean=false;
remainingLunchTime:number=0;
disabledCorporateOption:boolean=false;
remainingCorporateTime:number=0;
allocatedTimeForLunch:number=60;   // atmost 1 hour.   (in minutes)
allocatedTimeForCorporate:number=60; // atmost 1 hour. (in minutes)
remainingSRTime:number=0;   // "remainingSRTime" plays important role in standard/routine( daily type) projects timing submission.

selectDateForTimeline(inputDate){     
  this.current_Date = moment(inputDate).format("MM/DD/YYYY");
  this.dateF = new FormControl(new Date(inputDate));
  const todaystr=moment(this.todayDate).format("MM/DD/YYYY");
  const yesterdaystr=moment(this.disablePreviousDate).format("MM/DD/YYYY");
  if(this.current_Date==todaystr)
  this.timeline_of='today';
  else if(this.current_Date==yesterdaystr)
  this.timeline_of='yesterday';   

  this.timedata3=this.getTimeStamps(moment(inputDate).format("YYYY-MM-DD"),this.timeArr);   // initializing with default values.
  this.getTimelineReportByDate(this.timeline_of); 
}


getStartTiming1(){   
  let list:any=[]; 

  let from;
  let to;
  // modify start time list.  if: timeline found on selected date.
  if(this.bol){
      const choosed_date = moment(this.current_Date,'MM/DD/YYYY').format("YYYY-MM-DD");
      list=this.getTimeStamps(choosed_date,this.timeArr);
  }
  else{
    from=this.timeArr.indexOf(this.submittedTimelines[0].starttime);
    to=from+this.tmCapacity;
    let choosed_date:any=moment(this.current_Date,'MM/DD/YYYY').toDate();
    let next_date:any=new Date(choosed_date);  next_date.setDate(next_date.getDate()+1);
    choosed_date=moment(choosed_date).format("YYYY-MM-DD");
    next_date=moment(next_date).format("YYYY-MM-DD");
    list=[...this.getTimeStamps(choosed_date,this.timeArr),...this.getTimeStamps(next_date,this.timeArr)].slice(from,to);
  }

  // show time values till current time only. if: selected date==current date.
  const c_date=new Date();   // fetches system current date and time. 
  this.date11 = moment(c_date).format("MM/DD/YYYY");   
  if (this.current_Date == this.date11||to>this.timeArr.length) {
       const k=list.findIndex((tm)=>{  
          const ct=c_date.getTime(); 
          const r=tm.value>ct;
          return r;
       });

       if(k>-1)
       list=list.slice(0,k);
  }
  

  this.timedata3=list;

}


@ViewChild('endtimeselect') endtimesel:any;
getEndTiming1(){
  let list:any=[];
  // based on start time decide endtime.  if: no timeline found on selected date.
  let from=0;
  if(this.starttime){
  from=this.timeArr.indexOf(this.bol?this.starttime.time:this.submittedTimelines[0].starttime);
  }
  const to=from+this.tmCapacity;
  let choosed_date:any=moment(this.current_Date,'MM/DD/YYYY').toDate();
  let next_date:any=new Date(choosed_date);  next_date.setDate(next_date.getDate()+1);
  choosed_date=moment(choosed_date).format("YYYY-MM-DD");
  next_date=moment(next_date).format("YYYY-MM-DD");
  list=[...this.getTimeStamps(choosed_date,this.timeArr),...this.getTimeStamps(next_date,this.timeArr)].slice(from+1,to);

 
     // show time values till current time only. if: selected date==current date.
    const c_date=new Date();   // fetches system current date and time.
    this.date11 = moment(c_date).format("MM/DD/YYYY");
    if (this.current_Date == this.date11||to>this.timeArr.length) {
        const k=list.findIndex((tm)=>{
            const r=tm.value>c_date.getTime();
            return r;
        });

        if(k>-1)
        list=list.slice(0,k);
    }
   
  this.timedata3=list;


  // manually scroll to option.    THIS IS JUST TO MANUALLY SCROLL TO CORRECT OPTION OF ENDTIME NGSELECT.
    if(this.endtime){     
          const dropdownPanel=this.endtimesel.dropdownPanel._dropdown;     // endtime dropdown.
          const optionHeight=dropdownPanel.querySelector('.ng-dropdown-panel-items .ng-option')?.offsetHeight||0;  // height of each option view in ng select.
          const optionIndex=this.timedata3.findIndex(op=>op.value==this.endtime?.value);    // option index where we need to focus. 
          const scrollToOption=optionHeight*optionIndex;
          dropdownPanel.querySelector('.ng-dropdown-panel-items').scrollTop=scrollToOption;    // scroll to option.
    }
  // manually scroll to option.

}




getTimeStamps(dateVal:string,timeVals:string[]):{time:string,value:number}[]{
   const _date=new Date(dateVal);
   const _timestamps=timeVals.map((_time)=>{
      const [shours,sminutes]=_time.split(':');
      _date.setHours(+shours,+sminutes,0,0);
      return {
            time:_time,
            value:_date.getTime()
            };
     });
   return _timestamps;  
}




ngmodelObjCompare(obj1,obj2):boolean{
  return obj1 && obj2 && obj1.time === obj2.time;
}  // it is used in starttime and endtime ngmodel comparision.  since we are storing objects as ngmodel value.


getTimeDiff(time1:number,time2:number):string{
   if(time1&&time2){
        const dfInMins=((time2-time1)/60000);
        return dfInMins<60?`${dfInMins} mins`:`${(dfInMins/60).toFixed(1)} hrs`;
   }
   return '';
}

onStartTimeSelected(){  
  const hasExceededLimit=this.hasDurationExceedsLimit();
  this.endtime=(!(this.starttime&&this.endtime)||(this.starttime.value==this.endtime.value)||(hasExceededLimit))?null:this.endtime;
}


hasDurationExceedsLimit():boolean{ 
    if(this.starttime&&this.endtime)  
    {
       const maxAllocatableMins=(this.tmCapacity-1)*15;
       const durationInMins=((this.endtime.value-this.starttime.value)/(1000*60));
       return durationInMins>maxAllocatableMins; 
    }
    else 
     return false;
}

// full time available end.

// timeline record edit/delete start.

editTimelineRecord(recordIdstr:string){
  $(`${recordIdstr} .wrk-des-bx`).addClass('d-none');
  $(`${recordIdstr} .wrk-des-editbx`).removeClass('d-none');
  $(`${recordIdstr} .wrk-des-editbx textarea`).focus();
  $(`${recordIdstr} .dar-record-delete-btn`).addClass('d-none');
}


cancelEditTimelineRecord(recordIdstr:string,prevVal:string){
  $(`${recordIdstr} .wrk-des-bx`).removeClass('d-none');
  $(`${recordIdstr} .wrk-des-editbx textarea`).val(prevVal);
  $(`${recordIdstr} .wrk-des-editbx`).addClass('d-none');
  $(`${recordIdstr} .dar-record-delete-btn`).removeClass('d-none');
  $(`${recordIdstr} .wrk-des-editbx .wrk-des-required-msg`).addClass('d-none');
  $(`${recordIdstr} .wrk-des-editbx textarea`).css('border-color','#ccc');
}



updateWorkdesOfTR(recordIdstr:string,recordId:number,newWorkAchv:string,updateTMReportArr?:boolean){


  if(newWorkAchv&&newWorkAchv.trim()){

   const empno=this.Current_user_ID;   
   const r_id=recordId;
   const newWorkDes=newWorkAchv;
   const operation=1;
   $(`${recordIdstr} .wrk-des-editbx .updatewrkdes-btn`).prop('disabled',true);
   this.service.NewUpdateTimelineActivity(empno,r_id,newWorkDes,operation).subscribe((res:any)=>{
    console.log('timeline edit resp:',res); 
    $(`${recordIdstr} .wrk-des-editbx .updatewrkdes-btn`).prop('disabled',false);
    if(res&&res.message)
    {  
        if(res.message=='1'){
           
          // update dar array.
            let record_obj;
            for(let ob of this.darArray)
            {
                const result=ob.Dardata.find(ob2=>ob2.id==res.id);
                if(result){
                    record_obj=result;
                    break;
                }
            }
            if(record_obj){
              record_obj.WorkAchieved=res.achievement;
            }
         

          // update tmreport array.
            if(updateTMReportArr){
               for(let ob of this.tmReportArr){
                   if(ob.id==res.id){
                    ob.WorkAchieved=res.achievement; 
                    break;
                   }
               }
            }

           
             this.notifyService.showSuccess("Updated successfully", '');
             $(`${recordIdstr} .wrk-des-bx`).removeClass('d-none');
             $(`${recordIdstr} .wrk-des-editbx`).addClass('d-none');
             $(`${recordIdstr} .wrk-des-editbx textarea`).val(res.achievement);
             $(`${recordIdstr} .dar-record-delete-btn`).removeClass('d-none');

        }else if(res.message=='2') {
             this.notifyService.showError("Work description not updated.", 'Failed');
        }
    }
    else{
         this.notifyService.showError("Internal server error", 'Failed');
    }
   });

  }
  else{
    $(`${recordIdstr} .wrk-des-editbx .wrk-des-required-msg`).removeClass('d-none');  
    $(`${recordIdstr} .wrk-des-editbx textarea`).css('border-color','red');   
  }
}


isWorkdesValid(wrkdes,recordidstr){   
   if(!(wrkdes&&wrkdes.trim())){
    $(`${recordidstr} .wrk-des-editbx .wrk-des-required-msg`).removeClass('d-none');
    $(`${recordidstr} .wrk-des-editbx textarea`).css('border-color','red');
   }
   else{
    $(`${recordidstr} .wrk-des-editbx .wrk-des-required-msg`).addClass('d-none');
    $(`${recordidstr} .wrk-des-editbx textarea`).css('border-color','#ccc');
   }
}


deleteTimelineRecord(tmRecord:any,updateTMReportArr?:boolean){  
  let {date,Tasktype,ProjectName,ActionName,starttime,endtime,Duration,id}=tmRecord;
  let formatteddate=this.datepipe.transform(date, 'EEEE, MMMM d, yyyy');
  const k=/00:\d\d/.test(Duration);
  let formattedduration=k?(Duration.split(':')[1]+' mins'):(Duration+' hrs');
  let taskName=(['Lunch','Personal','Corporate Responsibility'].includes(Tasktype)==false&&ProjectName)?ProjectName:Tasktype;
     Swal.fire({
       title: "Delete Timeline Confirmation",
       html:`
       <div style="text-align: justify;">
        
     <label class="fs-7" style="color: #79797a; font-weight: 400;">${formatteddate}</label>
     <div class="border rounded">
          <table cellpadding="10px">
             <tr>

              <td width="100%" colspan="4" class="fs-7" style="text-align: left;font-weight: 500;">
                 ${taskName}
               ${(ActionName&&ActionName!=ProjectName)?`<div class="fs-9 text-muted d-flex mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="15" class="svg-icn"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 12l-6 6V6z"></path></svg>
                  <div>${ActionName}</div>    
               </div>`:''}
              </td>
            </tr>
             <tr>
              <td width="10%" class="fs-7 text-nowrap" style="font-weight: 400;color: #79797a;">Duration :</td>
              <td width="20%" class="fs-7 text-nowrap">${starttime}</td><td width="20%" class="fs-7 text-nowrap">${endtime}</td>
              <td width="50%" class="fs-7 text-nowrap font-weight-bold">${formattedduration}</td>
             </tr>
          </table>
     </div>

        <div class="text-danger fs-7 mt-3">Delete this timeline? This action cannot be undone.</div>   
      </div>
       `,
       showCancelButton: true,
       confirmButtonText: 'Delete Timeline',
       cancelButtonText: 'Cancel'
     }).then((choice)=>{
           if(choice.isConfirmed){
             console.log('delete btn is clicked.')
             const empno=this.Current_user_ID;   
             const r_id=id;
             const operation=2;
             this.service.NewUpdateTimelineActivity(empno,r_id,'',operation).subscribe((res:any)=>{
             console.log('timeline record delete resp:',res);
               if(res&&res.message)
               {
                   if(res.message=='1'){   
                       
                     // update the dar array.
            debugger
                    
                    if(this.Type==this.type1&&this.sortType==this.sort1){

                          //1. approach
                      this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
                      this.ObjSubTaskDTO.PageNumber = 1;
                      this.ObjSubTaskDTO.PageSize = 2;
                      const _datestr=this.datepipe.transform(date, 'yyyy-MM-dd');
                      this.ObjSubTaskDTO.Start_Date = _datestr;
                      this.ObjSubTaskDTO.End_Date = _datestr;
                      this.ObjSubTaskDTO.sort = 'custom';
                      this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe
                         (data => {       
                           console.log(data);  
                           if(data&&data[0].DAR_Details_Json){   
                                const dar_json=JSON.parse(data[0].DAR_Details_Json);
                                if(dar_json){    
                                 if(dar_json.length==0){
                                     const k=this.darArray.findIndex(_ob=>_ob.SubmissionDate==_datestr);
                                     this.darArray.splice(k,1);
                                 }
                                 else{
                                    for(let ob of this.darArray)
                                    {
                                        const k=ob.Dardata.findIndex(ob2=>ob2.id==r_id);
                                        if(k>-1){
                                            ob.Dardata=dar_json[0].Dardata;
                                            ob.Total=dar_json[0].Total;
                                            ob.TotalDuration=dar_json[0].TotalDuration;
                                            break;
                                        }
                                    }
                                 }
                                } 
                           }
                   
                      });


                        // 2. approach 
                     // let isEmptyRecord:boolean=false;
                     // for (let ob of this.darArray) {
                     //   const k = ob.Dardata.findIndex(ob2 => ob2.id == r_id);
                     //   if (k > -1) {
                     //     ob.Dardata.splice(k, 1);
                     //     ob.Total = ob.Dardata.length;
                     //     ob.TotalDuration;
                     //     isEmptyRecord=ob.Total==0;
                     //     break;
                     //   }
                     // }
                     // if(isEmptyRecord){
                     //   const _datestr=this.datepipe.transform(date, 'yyyy-MM-dd');
                     //   const k=this.darArray.findIndex(_ob=>_ob.SubmissionDate==_datestr);
                     //   if(k>-1)
                     //   this.darArray.splice(k,1);
                     // }  
                    }
                    else if(this.Type==this.type1&&this.sortType==this.sort2){
                        this.sortTimeline(this.sortType);
                    }

                     // update tmreport array.  if needed
                     if(updateTMReportArr){
                        this.selectDateForTimeline(this.current_Date);   
                     }
                     
                     if(this.Type==this.type1){    // update timelineDuration value only when user is on My Timeline screen.
                      this.timelineDuration=res.TotalTime;
                      if(this.timelineDuration==0)
                      this.showtimeline=false;
                     }
                     
                    
                     this.notifyService.showSuccess("Deleted successfully", '');
                   }
                   else if(res.message=='2'){
                     this.notifyService.showError("Unable to delete the timeline.", 'Failed');
                   } 
               }
               else{
                 this.notifyService.showError("Internal server error", 'Failed');
               }
              });

           }
     });
}

// timeline record edit/delete end.



// dar inbox start.


darRequestsList:any=[];
darResponsesList:any=[];
totalDarRequests:number=0;
totalDarResponses:number=0;
selectedDarReqIndex:number=-1;
currentDarSection:'DAR_REQUESTS'|'DAR_RESPONSES'='DAR_REQUESTS';
darRequestsLoading:boolean=false;
darResponsesLoading:boolean=false;
companiesList:any[]=[];
employeesList:any[]=[];
total_records:number=0;  // Total overall records in DB. 
page_size:number=30;    // Total records can be on each page limit. 
current_pageno:number=1;   // current page number.   
lastPageNo:number=0;       // last page number.
filterRecordsByEmp:Object[]=[];
filterRecordsByCompany:Object[]=[];
isfilterOnDarSection:boolean=false;


openDarInbox(){
  this.Type=this.type3;       // set dar inbox view 
  this.clearFilterConfig();    // clear filter configurations if exists.
  this.getDarRequestsList();  // fetch dar requests.
  this.getDarResponsesList();  // fetch dar responses.   
  this.currentDarSection='DAR_REQUESTS';   // by default dar requests section is opened.
  this.getDefaultFilterDropdownData();     // filterbox default data fetch.
}


changeDarSectionTo(section:'DAR_REQUESTS'|'DAR_RESPONSES'){
  this.currentDarSection=section;  // switch the view.  
  this.clearFilterConfig();    // clear filter configurations.
  if(this.currentDarSection=='DAR_REQUESTS'){
    this.getDarRequestsList();
  }
  else if(this.currentDarSection=='DAR_RESPONSES'){
    this.getDarResponsesList();
  }                               // render page content.
  this.getDefaultFilterDropdownData();   // fetches filter box dropdowns data.
}

clearFilterConfig(){
  this.filterRecordsByEmp=[];
  this.filterRecordsByCompany=[];
  this.isfilterOnDarSection=false;
  this.current_pageno=1;
}


resetDarSectionFilter(){
  this.clearFilterConfig();    // clear filter configurations.
  this.getDefaultFilterDropdownData();   // fetches filter box dropdowns default data.
  if(this.currentDarSection=='DAR_REQUESTS'){
    this.getDarRequestsList();
  }
  else if(this.currentDarSection=='DAR_RESPONSES'){
    this.getDarResponsesList();
  }     // fetches corresponding page data after filter config reset.
}

applyFilterOnDarSection(){
    this.current_pageno=1;
    this.isfilterOnDarSection=(this.filterRecordsByCompany.length>0||this.filterRecordsByEmp.length>0);
    if(this.isfilterOnDarSection){

      if(this.currentDarSection=='DAR_REQUESTS'){
          this.getDarRequestsList();
      }else if(this.currentDarSection=='DAR_RESPONSES'){
          this.getDarResponsesList();
      }

    const _compnsel=this.filterRecordsByCompany.map((ob:any)=>ob.Company_No);
    const _empsel=this.filterRecordsByEmp.map((ob:any)=>ob.Emp_No);

    this.objStatusDto.Type=this.currentDarSection=='DAR_REQUESTS'?'D':this.currentDarSection=='DAR_RESPONSES'?'P':'D';
    this.objStatusDto.EmpNo=this.Current_user_ID;
    this.objStatusDto.SelectedCompany=_compnsel.join(',');
    this.objStatusDto.SelectedEmp_No=_empsel.join(',');
    this.objStatusDto.startdate='';
    this.objStatusDto.enddate='';
    this.service.NewGetTimelinedropdown(this.objStatusDto).subscribe((res)=>{  
        if(res&&res[0]){    
          const totalprjJsonstr=JSON.parse(res[0]['TotalProjectsCount_Json']);
          this.total_records=totalprjJsonstr[0]['TotalProjects'];
          this.lastPageNo=Math.ceil(this.total_records/this.page_size);
        }  
    });

    }
}

openDarReqSidebar(crntIndex:number){   debugger
  this.selectedDarReqIndex=crntIndex;
  const {Sno,Emp_No,Reportdate}=this.darRequestsList[this.selectedDarReqIndex];
  this.getDarRequestDetails(Sno,Emp_No.toString(),moment(Reportdate).format('MM/DD/YYYY'));
  document.getElementById("rightbar-overlay").style.display = "block";
  document.getElementById("timepage")!.classList.add("position-fixed");
  document.getElementById("dar-req_slider_bar").classList.add("kt-quick-panel--on");
  $('#dar-req_slider_bar').addClass('open_sidebar');
}

closeDarReqSidebar() {
    this.selectedDarReqIndex=-1;
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("timepage")!.classList.remove("position-fixed");
    document.getElementById("dar-req_slider_bar").classList.remove("kt-quick-panel--on");
    $('#dar-req_slider_bar').removeClass('open_sidebar');
}

getDarRequestsList(){   
  this.objStatusDto.Type='D';
  this.objStatusDto.Emp_No=this.Current_user_ID;
  this.objStatusDto.SelectedEmp_No=this.filterRecordsByEmp.map((ob:any)=>ob.Emp_No).join(',');
  this.objStatusDto.SelectedCompany=this.filterRecordsByCompany.map((ob:any)=>ob.Company_No).join(',');
  this.objStatusDto.PageNumber=this.current_pageno;
  this.objStatusDto.RowsOfPage=this.page_size;
  this.objStatusDto.startdate='';
  this.objStatusDto.enddate='';
 
   this.darRequestsLoading=true;
   this.service.NewGetTimelineInbox(this.objStatusDto).subscribe((res:any)=>{  
    console.log('pageno:',this.current_pageno,'dar requests list:',res);
    console.log('darreqjson:');
    this.darRequestsLoading=false;  
         if(res&&res[0]){   
             this.darRequestsList=JSON.parse(res[0]['DarRequests']);
             this.totalDarRequests=res[0]['TotalRequests'];

             // check all page items are already selected or not.
             this.isPgAllDarsSelected=this.checkPgAllDarsSelected();
             //
         }   
   });
}

getDarResponsesList(){ 
  this.objStatusDto.Type='P';
  this.objStatusDto.Emp_No=this.Current_user_ID;
  this.objStatusDto.SelectedEmp_No=this.filterRecordsByEmp.map((ob:any)=>ob.Emp_No).join(',');
  this.objStatusDto.SelectedCompany=this.filterRecordsByCompany.map((ob:any)=>ob.Company_No).join(',');
  this.objStatusDto.PageNumber=this.current_pageno;
  this.objStatusDto.RowsOfPage=this.page_size;
  this.objStatusDto.startdate='';
  this.objStatusDto.enddate='';

  this.darResponsesLoading=true;
  this.service.NewGetTimelineInbox(this.objStatusDto).subscribe((res)=>{
  console.log('dar responses list:',res);
  this.darResponsesLoading=false;
    if(res&&res[0]){
      this.darResponsesList=JSON.parse(res[0]['DarResponses']);
      this.totalDarResponses=res[0]['TotalResponses'];
    }
  });
}


prevPageRecords(){
  this.current_pageno-=1;
  if(this.currentDarSection=='DAR_REQUESTS'){
    this.getDarRequestsList();
  }else if(this.currentDarSection=='DAR_RESPONSES'){
    this.getDarResponsesList();
  }
}

nextPageRecords(){
  this.current_pageno+=1;
  if(this.currentDarSection=='DAR_REQUESTS'){
    this.getDarRequestsList();
  }else if(this.currentDarSection=='DAR_RESPONSES'){
    this.getDarResponsesList();
  }
}

getDefaultFilterDropdownData(){
  this.objStatusDto.Type=this.currentDarSection=='DAR_REQUESTS'?'D':this.currentDarSection=='DAR_RESPONSES'?'P':'D';
  this.objStatusDto.EmpNo=this.Current_user_ID;
  this.objStatusDto.SelectedCompany='';
  this.objStatusDto.SelectedEmp_No='';
  this.objStatusDto.startdate='';
  this.objStatusDto.enddate='';
  this.service.NewGetTimelinedropdown(this.objStatusDto).subscribe((res)=>{     debugger
      console.log('timeline dropdown:',res);
      if(res&&res[0]){     
        this.companiesList=JSON.parse(res[0]['CompanyType_Json']);
        this.employeesList=JSON.parse(res[0]['Emp_Json']);
        const totalprjJsonstr=JSON.parse(res[0]['TotalProjectsCount_Json']);
        this.total_records=totalprjJsonstr[0]['TotalProjects'];
        this.lastPageNo=Math.ceil(this.total_records/this.page_size);
      }  
  });
}


isCompanyChecked(companyId:any){
  return this.filterRecordsByCompany.find((ob:any)=>ob.Company_No==companyId);
}
isEmployeeChecked(empId:any){
  return this.filterRecordsByEmp.find((ob:any)=>ob.Emp_No==empId);
}





configureCompanyFilter(include:boolean,companyObj:any){
  if(include){
    this.filterRecordsByCompany.push(companyObj);
  }else{
    const rindex=this.filterRecordsByCompany.findIndex((ob:any)=>ob.Company_No==companyObj.Company_No);
    this.filterRecordsByCompany.splice(rindex,1);
  }

  this.objStatusDto.Type=this.currentDarSection=='DAR_REQUESTS'?'D':this.currentDarSection=='DAR_RESPONSES'?'P':'D';
  this.objStatusDto.EmpNo=this.Current_user_ID;
  this.objStatusDto.SelectedCompany=this.filterRecordsByCompany.map((ob:any)=>ob.Company_No).join(',');
  this.objStatusDto.SelectedEmp_No='';
  this.objStatusDto.startdate='';
  this.objStatusDto.enddate='';
  this.service.NewGetTimelinedropdown(this.objStatusDto).subscribe((res)=>{  
    console.log('timeline dropdown:',res);
    if(res&&res[0]){   
      this.employeesList=JSON.parse(res[0]['Emp_Json']);
      const empsAfterFilter=this.employeesList.map((ob:any)=>ob.Emp_No);
      this.filterRecordsByEmp=this.filterRecordsByEmp.filter((emp:any)=>empsAfterFilter.includes(emp.Emp_No));
    }  
});


}

configureEmployeeFilter(include:boolean,empObj:any){
   if(include){
    this.filterRecordsByEmp.push(empObj);
   }else{
    const rindex=this.filterRecordsByEmp.findIndex((ob:any)=>ob.Emp_No==empObj.Emp_No);
    if(rindex>-1)
    this.filterRecordsByEmp.splice(rindex,1);
   }

}



// DAR Request sidebar context code start
DARrequestInfo:any;  // it contain selected DAR request more details in it.
darDecision:"ACCEPT"|"ACCEPT_WITH_BONUS"|"REJECT"|undefined=undefined;
aprv_cmts:string|undefined;
drpercentage:number;
previousCmts:any=[];
drFormFieldRequired:boolean=false;

onDarReqDecisionChanged(decision:"ACCEPT"|"ACCEPT_WITH_BONUS"|"REJECT"){
  this.darDecision=decision;
  this.drprev_comments();
}

closeDarReqAprvlSec(){
  this.darDecision=undefined;
  this.aprv_cmts=undefined;
  this.drpercentage=0;
  this.drFormFieldRequired=false;
  // this.previousCmts=[];
  // this.cmts_Loading=false;
}

drprev_comments()
{
    // let aprvDto=new ApprovalDTO();
    // aprvDto.Emp_no=this.Current_user_ID;
    // aprvDto.Request_type=(this.leaveDecision=='APPROVE'||this.leaveDecision=='APPROVEBUT')?'Approved Leave':'Leave Rejected';
    // this.cmts_Loading=true;
    // this.approvalservice.NewGetLeaveComments(aprvDto).subscribe((res:any)=>{
    //  this.cmts_Loading=false;
    //  if(res)
    //  {
    //   this.previousCmts=JSON.parse(res.previousComments_JSON);
    //  }
    // });
}

submitDARReq_Response(){
  debugger
  if(
    (this.aprv_cmts&&this.aprv_cmts.trim())&&
    (this.darDecision=='ACCEPT_WITH_BONUS'?this.drpercentage:true)&&
    (this.darDecision=='REJECT'?(this.drpercentage!=null&&this.drpercentage!=undefined):true)
  ){
    // when mandatory fields are provided.
    this.drFormFieldRequired=false;

    const darReqResult=new ApprovalDTO();
    darReqResult.emp_rep_no=this.darRequestsList[this.selectedDarReqIndex].Emp_Rep_No;
    darReqResult.submittedby=this.Current_user_ID;
    darReqResult.submittedto=this.darRequestsList[this.selectedDarReqIndex].submittedby;
    darReqResult.submitdate=this.DARrequestInfo.SubmissionDate;
    darReqResult.ReportDate=this.darRequestsList[this.selectedDarReqIndex].Reportdate;
    darReqResult.status='Submitted';
    darReqResult.Remarks=this.aprv_cmts;
    darReqResult.DARStatus=this.darDecision=='ACCEPT'?'Accepted':this.darDecision=='REJECT'?'Rejected':this.darDecision=='ACCEPT_WITH_BONUS'?'Bonus Accepted':'';
    darReqResult.percentage=this.darDecision=='ACCEPT'?0:this.drpercentage;

    this.approvalService.NewUpdateTimelineReport(darReqResult).subscribe((res:any)=>{    debugger
        if(res){
           console.log('after the Dar req\'s response submitted',res);
        }

        if(res&&res.message==1){
          const smessage=this.darDecision=='ACCEPT'?'DAR request successfully accepted.':this.darDecision=='REJECT'?'DAR request successfully rejected.':this.darDecision=='ACCEPT_WITH_BONUS'?'Bonus Accepted':'';
          this.notifyService.showSuccess(smessage,"Success");
          this.getDarRequestsList();   // rebind the dar requests list 
          this.closeDarReqAprvlSec();   // close the approval section.
          this.closeDarReqSidebar();    // close the sidebar.
        }
        else{
          this.notifyService.showError("Something went wrong!","Failed");
        }

     });

  }
  else{
      // when mandatory fields are not provided.
     this.drFormFieldRequired=true;
  }


}


getDarRequestDetails(DarSno:number,Empno:string,DarReportDate:string){
    this.service.NewGetUserTimeline(DarSno,Empno,DarReportDate).subscribe((res:any)=>{
        if(res&&res[0]&&res[0].usertimeline){
            this.DARrequestInfo=JSON.parse(res[0].usertimeline)[0];
            console.log('DAR request info:',this.DARrequestInfo);
            // formating duration, starttime and endtime
               this.DARrequestInfo.Dardata.forEach(ob=>{  
                  const k=/00:\d\d/.test(ob.Duration);
                   ob.duration=k?(ob.Duration.split(':')[1]+' mins'):(ob.Duration+' hrs');
                   ob.starttime=this.formatTimes(ob.starttime);
                   ob.endtime=this.formatTimes(ob.endtime);
                }); 
            // formating duration, starttime and endtime
        }
    })
}

// DAR Request sidebar context code end

// accept/reject multiple DAR requests.    start

darRequestsSelected:any[]=[];    // all DAR requests selected.
selectedDarDecision:'ACCEPT'|'ACCEPT_WITH_BONUS'|'REJECT';   // decision type
darReqbonusPercentage:number|null;   // input bonus
darReqRejectPercentage:number|null;   // input reject
drFormFieldRequired2:boolean=false;  // whether  all mandatory fields are provided or not.
multi_aprvcmts:string='';      // input approver cmts.
isPgAllDarsSelected:boolean=false;   // true when all dars of the current page is selected.

selectDarRequest(isSelected:boolean,dreq:any){   // whenever DAR requests is selected or unselected.
  if(isSelected){
      this.darRequestsSelected.push(dreq);    // add new item
      this.isPgAllDarsSelected=this.checkPgAllDarsSelected();   // after adding new item check whether all dar items present on the page selected. 
  }
  else{
     const index=this.darRequestsSelected.findIndex(ob=>ob.Emp_Rep_No==dreq.Emp_Rep_No);
     if(index>-1){
        this.darRequestsSelected.splice(index,1);
        this.isPgAllDarsSelected=false;
     }
  }
}

isDarRequestSelected(empRepno:string):boolean{
    const isSelected=this.darRequestsSelected.find(req=>req.Emp_Rep_No==empRepno);
    return isSelected;
}

checkPgAllDarsSelected():boolean{
     const isAllSelected=this.darRequestsList.map((dreq)=>dreq.Emp_Rep_No).every((emprep)=>{
            return this.darRequestsSelected.findIndex(drsel=>drsel.Emp_Rep_No==emprep)>-1; 
     });
     return isAllSelected;
}



openMultiDarAcceptRejectSidebar(decision:'ACCEPT'|'ACCEPT_WITH_BONUS'|'REJECT'){
    this.selectedDarDecision=decision;
    document.getElementById('multi-dar-acceptreject')?.classList.add('kt-quick-panel--on');
    document.getElementById("rightbar-overlay").style.display = "block";
}

closeMultiDarAcceptRejectSidebar(){
    document.getElementById('multi-dar-acceptreject')?.classList.remove('kt-quick-panel--on');
    document.getElementById("rightbar-overlay").style.display = "none";
    this.multi_aprvcmts='';
    this.darReqbonusPercentage=null;
    this.darReqRejectPercentage=null;
    this.drFormFieldRequired2=false;
}

darReqsSelectAllBtnClicked(isChecked:boolean){
   const selecteddar_reps=this.darRequestsSelected.map(dr=>dr.Emp_Rep_No);

    if(isChecked){  
        const unselectedDarReqs=this.darRequestsList.filter((dreq)=>{
                return !selecteddar_reps.includes(dreq.Emp_Rep_No);
        });
        this.darRequestsSelected=[...this.darRequestsSelected,...unselectedDarReqs]; 
        this.isPgAllDarsSelected=true;
    }
    else{    
        const currentpgDar_reps=this.darRequestsList.map(dr=>dr.Emp_Rep_No);
        this.darRequestsSelected=this.darRequestsSelected.filter((dreq)=>{
                return !currentpgDar_reps.includes(dreq.Emp_Rep_No);
        });
        this.isPgAllDarsSelected=false;
    }
}


onSubmitDarRequestsResult(){   debugger
      if(
           (this.multi_aprvcmts&&this.multi_aprvcmts.trim())&&
           (this.selectedDarDecision=='ACCEPT_WITH_BONUS'?this.darReqbonusPercentage:true)&&
           (this.selectedDarDecision=='REJECT'?(this.darReqRejectPercentage!=null&&this.darReqRejectPercentage!=undefined):true)
      )
      { // when mandatory fields are provided.
         this.drFormFieldRequired2=false;

    const darReqsResult=new ApprovalDTO();
    darReqsResult.emp_rep_no=this.darRequestsSelected.map(ob=>ob.Emp_Rep_No).join(',');
    darReqsResult.status='Submitted';
    darReqsResult.Remarks=this.multi_aprvcmts;
    darReqsResult.percentage=this.selectedDarDecision=='ACCEPT'?0:this.selectedDarDecision=='REJECT'?this.darReqRejectPercentage:this.selectedDarDecision=='ACCEPT_WITH_BONUS'?this.darReqbonusPercentage:0;
    darReqsResult.DARStatus=this.selectedDarDecision=='ACCEPT'?'Accepted':this.selectedDarDecision=='REJECT'?'Rejected':this.selectedDarDecision=='ACCEPT_WITH_BONUS'?'Bonus Accepted':'';


    this.approvalService.NewUpdateTimelineReport(darReqsResult).subscribe((res:any)=>{    debugger
       
        if(res&&res.message==1){
          const smessage=this.selectedDarDecision=='ACCEPT'?'DAR requests successfully accepted.':this.selectedDarDecision=='REJECT'?'DAR requests successfully rejected.':this.selectedDarDecision=='ACCEPT_WITH_BONUS'?'Bonus Accepted':'';
          this.notifyService.showSuccess(smessage,"Success");
          this.getDarRequestsList();   // rebind the dar requests list 
          this.closeMultiDarAcceptRejectSidebar();
          this.darRequestsSelected=[];
          this.isPgAllDarsSelected=false;
        }
        else{
          this.notifyService.showError("Something went wrong!","Failed");
        }

     });

      }
      else
      {  // when mandatory fields are not provided.
          this.drFormFieldRequired2=true;
      }
}



// acceptMultiDARrequests(){

//   if(this.darRequestsSelected&&this.darRequestsSelected.length>0){

//      // const darReqResult=new ApprovalDTO();
//     // darReqResult.emp_rep_no=this.darRequestsList[this.selectedDarReqIndex].Emp_Rep_No;
//     // darReqResult.submittedby=this.Current_user_ID;
//     // darReqResult.submittedto=this.darRequestsList[this.selectedDarReqIndex].submittedby;
//     // darReqResult.submitdate=this.DARrequestInfo.SubmissionDate;
//     // darReqResult.ReportDate=this.darRequestsList[this.selectedDarReqIndex].Reportdate;
//     // darReqResult.status=this.darRequestsList[this.selectedDarReqIndex].SubmissionType;
//     // darReqResult.Remarks=this.aprv_cmts;
//     // darReqResult.DARStatus=this.darDecision=='ACCEPT'?'Accepted':this.darDecision=='REJECT'?'Rejected':this.darDecision=='ACCEPT_WITH_BONUS'?'Bonus Accepted':'';
//     // darReqResult.percentage=this.darDecision=='ACCEPT'?0:this.drpercentage;

//     // this.approvalService.NewUpdateTimelineReport(darReqResult).subscribe((res:any)=>{


//     // }); 

//   }
//   else{
//      this.notifyService.showError("No Dar request selected","");
//   }

// }

// acceptMultiDARrequestsWithBonus(){
//   if(
//     (this.multi_aprvcmts&&this.multi_aprvcmts.trim())&&
//     (this.darReqbonusPercentage)
//   ){
//     this.drFormFieldRequired2=false;
     

//     // const darReqResult=new ApprovalDTO();
//     // darReqResult.emp_rep_no=this.darRequestsList[this.selectedDarReqIndex].Emp_Rep_No;
//     // darReqResult.submittedby=this.Current_user_ID;
//     // darReqResult.submittedto=this.darRequestsList[this.selectedDarReqIndex].submittedby;
//     // darReqResult.submitdate=this.DARrequestInfo.SubmissionDate;
//     // darReqResult.ReportDate=this.darRequestsList[this.selectedDarReqIndex].Reportdate;
//     // darReqResult.status=this.darRequestsList[this.selectedDarReqIndex].SubmissionType;
//     // darReqResult.Remarks=this.aprv_cmts;
//     // darReqResult.DARStatus=this.darDecision=='ACCEPT'?'Accepted':this.darDecision=='REJECT'?'Rejected':this.darDecision=='ACCEPT_WITH_BONUS'?'Bonus Accepted':'';
//     // darReqResult.percentage=this.darDecision=='ACCEPT'?0:this.drpercentage;

//     // this.approvalService.NewUpdateTimelineReport(darReqResult).subscribe((res:any)=>{


//     // });












//   }
//   else{
//     this.drFormFieldRequired2=true;
//   }
// }

// accept/reject multiple DAR requests.    end





// dar inbox end.

}
