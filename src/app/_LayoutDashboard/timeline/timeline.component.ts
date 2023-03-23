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


  ngOnInit(): void {
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.timelineLog();
  }

  
  timelineLog(){
    this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
    this.ObjSubTaskDTO.PageNumber = 1;
    this.ObjSubTaskDTO.PageSize = 30;
    this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe
    (data=>{
      this.timelineList=JSON.parse(data[0]['DAR_Details_Json']);
    });
  }

  moreDetails(ProjectCode) {
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${ProjectCode}`;
    var myWindow = window.open(myurl, ProjectCode);
    myWindow.focus();
  }


  darcreate() {
    this.dateF = new FormControl(new Date());
    // if (this.ProjectBlockName == 'Standard Tasks' || this.ProjectBlockName == 'Routine Tasks' || this.ProjectBlockName == 'To do List') {
    //   this.coresecondary = false;
    // }
    // else if ((this.ProjectBlockName == 'Core Tasks' || this.ProjectBlockName == 'Secondary Tasks') && this.inProcessCount == 0) {
    //   this.coresecondary = false;
    // }
    document.getElementById("timelog").classList.add("position-fixed");
    document.getElementById("darsidebar").classList.add("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
  }


  closeInfo() {
    document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    document.getElementById("timelog").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
  }

  closedarBar() {
    document.getElementById("timelog").classList.remove("position-fixed");
    document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    this.notifyService.showError("Cancelled", '');
  }
}
