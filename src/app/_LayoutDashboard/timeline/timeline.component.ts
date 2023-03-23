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

}
