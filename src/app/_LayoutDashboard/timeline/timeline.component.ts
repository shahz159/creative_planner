import { DatePipe } from '@angular/common';
import { Component, OnInit ,Inject} from '@angular/core';
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

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
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
    private notifyService: NotificationService,
    public datepipe: DatePipe,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string
    ) {
    this.ObjSubTaskDTO = new SubTaskDTO();
    this.objProjectDto = new ProjectDetailsDTO();
   }
  
  ObjSubTaskDTO: SubTaskDTO;
  Current_user_ID: any;
  timelineList:any;
  Type:string;
  type1:string='My Timeline';
  type2:string='RACIS Timeline';
  CurrentPageNo: number = 1;
  _CurrentpageRecords: number;
  darArray: any = [];
  sortType:string;
  sort1:string='Date';
  sort2:string='Project';
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
  timedata1: any;
  date11: any;
  starttime: any;
  endtime: any;
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

  ngOnInit(): void {
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.timelineLog(this.type1);
    this.activeDate=true;
    this.sortType=this.sort1;
    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate() - 1);
    this.current_Date = moment(new Date()).format("MM/DD/YYYY");
    this.currenthours = this.date.getHours();
    this.currentminutes = this.date.getMinutes();
    // this.french();
  }


  french() {
    this._locale = 'fr';
    this._adapter.setLocale(this._locale);
  }

  timelineLog(type){
    this.Type=type;
    this.showtimeline=true;

    this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
    this.ObjSubTaskDTO.PageNumber = 1;
    this.ObjSubTaskDTO.PageSize = 30;

      this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe
      (data=>{
        this.timelineList=JSON.parse(data[0]['DAR_Details_Json']);
        this.timelineDuration=(data[0]['TotalTime']);
        this.darArray=this.timelineList;
        this._CurrentpageRecords=this.timelineList.length;
        if(this.timelineList.length == 0){
          this.showtimeline=false;
          this.timelineDuration=0;
        }
      });
  }

  timelineLog1(type){
    this.Type=type;
    this.showtimeline=true;

    this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
    this.ObjSubTaskDTO.PageNumber = 1;
    this.ObjSubTaskDTO.PageSize = 30;

      this.service._GetTimelineActivityforRACIS(this.ObjSubTaskDTO).subscribe
      (data=>{
        this.timelineList=JSON.parse(data[0]['DAR_Details_Json']);
        this.darArray=this.timelineList;
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

  sortTimeline(sort){
    this.sortType=sort;

    if(sort=='Date'){
      this.activeDate=true;
      this.activeProject=false;
    }
    if(sort=='Project'){
      this.activeDate=false;
      this.activeProject=true;
    }

    if(this.Type=='My Timeline'){
      this.showtimeline=true;

      this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
      this.ObjSubTaskDTO.PageNumber = 1;
      this.ObjSubTaskDTO.PageSize = 30;
      this.ObjSubTaskDTO.sort = sort;
  
        this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe
        (data=>{
          this.timelineList=JSON.parse(data[0]['DAR_Details_Json']);
          this.timelineDuration=(data[0]['TotalTime']);
          this.darArray=this.timelineList;
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

      this.service._GetTimelineActivityforRACIS(this.ObjSubTaskDTO).subscribe
      (data=>{
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

getTimelineProjects(){
  this.showProject=true;
  this.master_code=null;
  this.project_code=null;
  this.showAction=false;
  this.ObjSubTaskDTO.Emp_No=this.Current_user_ID;
  this.ObjSubTaskDTO.ProjectBlock=this.project_type;
  this.service._GetTimelineProjects(this.ObjSubTaskDTO).subscribe
  (data=>{
    this.projectList=JSON.parse(data[0]['ProjectList']);
  });
}

getTimelineActions(){
  this.showAction=false;
  this.project_code=null;
  this.ObjSubTaskDTO.Emp_No=this.Current_user_ID;
  this.ObjSubTaskDTO.Project_Code=this.master_code;
  this.service._GetTimelineProjects(this.ObjSubTaskDTO).subscribe
  (data=>{
    this.actionList=JSON.parse(data[0]['ActionList']);
    if(this.actionList==null || this.actionList=='' || this.actionList.length==0){
      this.showAction=false;
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
  this.workdes = "";
  this.current_Date = this.datepipe.transform(new Date(), 'MM/dd/yyyy');
  this.dateF = new FormControl(new Date());
  this.starttime = null;
  this.endtime = null;
  this.starttimearr = [];
  this.endtimearr = [];
  
}


// Timeline submission
orgValueChange(val) {
  this.current_Date = moment(val.value).format("MM/DD/YYYY");
}

getDarTime() {
  this.timedata = [];
  this.timedata1 = ["08:00",
    "08:15", "08:30", "08:45", "09:00",
    "09:15", "09:30", "09:45", "10:00",
    "10:15", "10:30", "10:45", "11:00",
    "11:15", "11:30", "11:45", "12:00",
    "12:15", "12:30", "12:45", "13:00",
    "13:15", "13:30", "13:45", "14:00",
    "14:15", "14:30", "14:45", "15:00",
    "15:15", "15:30", "15:45", "16:00",
    "16:15", "16:30", "16:45", "17:00",
    "17:15", "17:30", "17:45", "18:00",
    "18:15", "18:30", "18:45", "19:00",
    "19:15", "19:30", "19:45", "20:00"];

  this.objProjectDto.Emp_No = this.Current_user_ID;
  this.current_Date = this.datepipe.transform(this.current_Date, 'MM/dd/yyyy');
  this.date11 = moment(new Date()).format("MM/DD/YYYY");
  this.objProjectDto.date = this.current_Date;

  if (this.current_Date == this.date11) {
    this.timedata1.forEach(element => {
      const [shours, sminutes] = element.split(":");
      if (shours <= this.currenthours)
        this.timedata.push(element);
    });
  }
  else {
    this.timedata1.forEach(element => {
      this.timedata.push(element);
    });
  }

  this.service._GetTimeforDar(this.Current_user_ID, this.current_Date)
    .subscribe(data => {
      debugger
      this.timeList = JSON.parse(data[0]['time_json']);
      if (this.timeList.length != 0) {
        this.bol = false;
        this.timeList.forEach(element => {
          this.starttimearr.push(element.starttime);
        });
        this.timeList.forEach(element => {
          this.endtimearr.push(element.endtime);
        });
        let l = this.endtimearr.length;
        this.lastEndtime = this.endtimearr[l - 1];
      }
      else if (this.timeList.length == 0) {
        this.bol = true;
        this.lastEndtime = 0;
        this.starttimearr = [];
        this.endtimearr = [];
      }
    });
}

diff_minutes(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
}

submitDar() {
  if (this.starttime != null && this.endtime != null) {
    const [shours, sminutes] = this.starttime.split(":");
    const [ehours, eminutes] = this.endtime.split(":");
    var dt1 = new Date(2014, 10, 2, shours, sminutes);
    var dt2 = new Date(2014, 10, 2, ehours, eminutes);
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
    this.objProjectDto.StartTime = this.starttime;
    this.objProjectDto.EndTime = this.endtime;
    this.objProjectDto.TimeCount = this.timecount;
  }
  this.current_Date = this.datepipe.transform(this.current_Date, 'MM/dd/yyyy');
  this.objProjectDto.date = this.current_Date;
  this.objProjectDto.WorkAchieved = this.workdes;

  if (this.showAction == false) {
    this.objProjectDto.Master_code = this.master_code;
    this.objProjectDto.Project_Code = this.master_code;
  }
  else if (this.showAction == true) {
    this.objProjectDto.Master_code = this.master_code;
    this.objProjectDto.Project_Code = this.project_code;
  }

  this.objProjectDto.Exec_BlockName=null;
  this.objProjectDto.Project_Name=null;
  this.objProjectDto.Emp_Comp_No=null;

  this.service._InsertDARServie(this.objProjectDto)
    .subscribe(data => {
      this._Message = data['message'];
      this.notifyService.showSuccess(this._Message, "Success");
    });
  this.timelineLog(this.Type);
  this.getDarTime();
  document.getElementById("timepage").classList.remove("position-fixed");
  document.getElementById("rightbar-overlay").style.display = "none";
  document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
  this.clear();
}
// Timeline submission ends

  darcreate() {
    document.getElementById("timepage").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("darsidebar").classList.add("kt-quick-panel--on");
    this.clear();
  }

  closedarBar() {
    document.getElementById("timepage").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    this.notifyService.showError("Cancelled", '');
    this.clear();
  }
  
  closeInfo(){    
    document.getElementById("timepage").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    document.getElementById("actyInfobar_header").classList.remove("open_sidebar");
    this.clear();
  }

  moreDetails(pcode) {
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${pcode}`;
    var myWindow = window.open(myurl,pcode);
    myWindow.focus();
  }

  notinAction() {
    this.notifyService.showError("Development Under Maintainance", 'Failed');
  }
}
