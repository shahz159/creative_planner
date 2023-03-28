import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(public service: ProjectTypeService,
    private notifyService: NotificationService) {
    this.ObjSubTaskDTO = new SubTaskDTO();
   }
  
  ObjSubTaskDTO: SubTaskDTO;
  Current_user_ID: any;
  timelineList:any;
  dateF = new FormControl(new Date());
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

  ngOnInit(): void {
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.timelineLog(this.type1);
    this.activeDate=true;
    this.sortType=this.sort1;
  }

  timelineLog(type){
    this.Type=type;
    this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
    this.ObjSubTaskDTO.PageNumber = 1;
    this.ObjSubTaskDTO.PageSize = 30;

      this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe
      (data=>{
        this.timelineList=JSON.parse(data[0]['DAR_Details_Json']);
        this.darArray=this.timelineList;
        this._CurrentpageRecords=this.timelineList.length;
      });
  }

  timelineLog1(type){
    this.Type=type;
    this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
    this.ObjSubTaskDTO.PageNumber = 1;
    this.ObjSubTaskDTO.PageSize = 30;

      this.service._GetTimelineActivityforRACIS(this.ObjSubTaskDTO).subscribe
      (data=>{
        this.timelineList=JSON.parse(data[0]['DAR_Details_Json']);
        this.darArray=this.timelineList;
        this._CurrentpageRecords=this.timelineList.length;
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
      this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
      this.ObjSubTaskDTO.PageNumber = 1;
      this.ObjSubTaskDTO.PageSize = 30;
      this.ObjSubTaskDTO.sort = sort;
  
        this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe
        (data=>{
          this.timelineList=JSON.parse(data[0]['DAR_Details_Json']);
          this.darArray=this.timelineList;
          this._CurrentpageRecords=this.timelineList.length;
        });
    }
    else if(this.Type=='RACIS Timeline'){
      this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
      this.ObjSubTaskDTO.PageNumber = 1;
      this.ObjSubTaskDTO.PageSize = 30;
      this.ObjSubTaskDTO.sort = sort;

      this.service._GetTimelineActivityforRACIS(this.ObjSubTaskDTO).subscribe
      (data=>{
        this.timelineList=JSON.parse(data[0]['DAR_Details_Json']);
        this.darArray=this.timelineList;
        this._CurrentpageRecords=this.timelineList.length;
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
        if (this.timelineList) {
          this._CurrentpageRecords = this.timelineList.length;
        }
      });
    }
  }

  darcreate() {
    document.getElementById("timepage").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("darsidebar").classList.add("kt-quick-panel--on");
  }

  closedarBar() {
    document.getElementById("timepage").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
  }
  
  closeInfo(){    
    document.getElementById("timepage").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
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
