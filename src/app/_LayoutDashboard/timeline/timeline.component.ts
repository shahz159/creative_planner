import { DatePipe } from '@angular/common';
import { Component, OnInit ,Inject, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { ProjectDetailsDTO } from 'src/app/_Models/project-details-dto';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
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
    public datepipe: DatePipe,
    private route : ActivatedRoute,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    ) {
    this.ObjSubTaskDTO = new SubTaskDTO();
    this.objProjectDto = new ProjectDetailsDTO();
   }
  timeline_of:'today'|'yesterday';
  ObjSubTaskDTO: SubTaskDTO;
  Current_user_ID: any;
  timelineList:any;
  Type:string;
  type1:string='My Timeline';
  type2:string='RACIS Timeline';
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
  timedata: any = [];
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

  timedata1: any = [
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
  currenthours: any;
  currentminutes: any;
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
    this.currenthours = this.date.getHours();
    this.currentminutes = this.date.getMinutes();
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
    this.ObjSubTaskDTO.sort = null
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
    this.projectList=JSON.parse(data[0]['ProjectList']); console.log(this.projectList);
    
    let arr:any=[];
    this.projectList.forEach((p)=>{
         if(p.Team_Res.trim()==this.Current_user_ID){
            p.possession='My responsible projects';
            arr.unshift(p);
         }
         else{
            p.possession='RACIS projects';
            arr.push(p);
         }
    });
    this.projectList=arr;

    
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
      this.timelineLog(this.Type);   // rebind page timeline reports list.
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

                      const tlTotalHrs:number = +JSON.parse(res[0].Totalhours);
                      const remainingHrs:number=+((this.p_details.AllocatedHours-tlTotalHrs).toFixed(1));
                      this.p_details={
                        ...this.p_details,
                        usedHours:tlTotalHrs,
                        remainingHours:remainingHrs<0?0:remainingHrs,
                        extraHours:remainingHrs<0?(Math.abs(remainingHrs)):0
                      };
                      this.p_loading=false;     console.log('p_loading:',this.p_details);
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
 (this.endtime.value<this.starttime.value)) );

 const lunchPersonalCorporate:boolean=['lunch','personal','corporate'].includes(this.project_type);

       if(
           (lunchPersonalCorporate?true:this.master_code)&&
           (lunchPersonalCorporate?true:(this.showAction?this.project_code:true))&&
           this.workdes&&
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

    getTimelineOfEmployee(empno:string,pageNo:number=1){

      this.showtimeline=true;
      this.ObjSubTaskDTO.Emp_No = empno;
      this.ObjSubTaskDTO.PageNumber = pageNo;
      this.ObjSubTaskDTO.PageSize = 30;
        this.darArrayLoading=true;
        this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe
        (data=>{
          this.darArrayLoading=false;
          this.timelineList=JSON.parse(data[0]['DAR_Details_Json']);
          console.log(this.timelineList,"timelinedata")
          this.timelineDuration=(data[0]['TotalTime']);
          this.darArray=this.timelineList;  console.log('dar arry list:',this.darArray);
          this.userFound = true
          this.edited = true
          this._CurrentpageRecords=this.timelineList.length;
          if(this.timelineList.length == 0){
            this.showtimeline=false;
            this.timelineDuration=0;
          }
        });
        // this.hideloadmore()
    }


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

  this.service.NewInsertTimelineReport(empno,tmDate).subscribe((res:any)=>{
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
              
                
              // adding 'duration' property to show timing in more easy way on the view.
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

viewProjects(type:'COMPLETED'|'DUE'|'DELAYED'){
  if(type=='DELAYED')
  {
    let myurl = document.baseURI+`/ViewProjects/DelayProjects?section=Projects&filterbyemp=${this.Current_user_ID}&filterbystatus=Delay`;
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


// test3

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

tmCapacity=93;  // 23 hrs per day limit.   
timedata3:any[]=[];  
disabledLunchOption:boolean=false;
remainingLunchTime:number=0;
disabledCorporateOption:boolean=false;
remainingCorporateTime:number=0;
allocatedTimeForLunch:number=60;   // atmost 1 hour.   (in minutes)
allocatedTimeForCorporate:number=60; // atmost 1 hour. (in minutes)

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


getEndTiming1(){
  let list:any=[];
debugger
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

// test3


}
