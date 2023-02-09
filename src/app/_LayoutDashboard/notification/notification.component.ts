import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationActivityDTO } from 'src/app/_Models/notification-activity-dto';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  
  Current_user_ID: any;
  _NotificationActivityList: NotificationActivityDTO[];
  _RequestActivity: [];
  _DarActivityList: [];
  _NotificationActivity: [];
  _AlertActivity:[];
  notilength:number;
  _filtersMessage:string;
  _filtersMessage2:string;
  CurrentPageNo: number = 1;
  _CurrentpageRecords: any;
  notifArray: any = [];

  notificationDTO: NotificationActivityDTO;

  constructor(
    public service: ProjectTypeService,
    private router: Router
  ) {
    this.notificationDTO=new NotificationActivityDTO();
   }



  ngOnInit(){
    this.router.navigate(["Notifications"]);
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.viewAll();
  }

  viewAll(){

    this.notificationDTO.Emp_No=this.Current_user_ID;
    this.notificationDTO.PageNumber=1;
    this.notificationDTO.PageSize=20;

    this.service.GetViewAllDashboardnotifications(this.notificationDTO).subscribe(
      (data) => {
        this._NotificationActivityList = data as NotificationActivityDTO[];
        this._NotificationActivity = JSON.parse(this._NotificationActivityList[0]['Notification_Json']);
        this.notifArray = this._NotificationActivity;
        if(this._NotificationActivity){
            this.notilength = this._NotificationActivity.length;
            this._CurrentpageRecords = this._NotificationActivity.length;
        }

        if(this.notilength==0){
          this._filtersMessage = "No Notifications available";
        }
        else {
          this._filtersMessage = "";
        }
        console.log(this._NotificationActivity,'Notif');
      });
  }

  loadMore() {
    this.notificationDTO.Emp_No=this.Current_user_ID;
    this.notificationDTO.PageNumber=this.CurrentPageNo;
    this.notificationDTO.PageSize=20;
    this.service.GetViewAllDashboardnotifications(this.notificationDTO)
      .subscribe(data1 => {
        this._NotificationActivity = JSON.parse(data1[0]['Notification_Json']);
        this._NotificationActivity.forEach(element => {
          this.notifArray.push(element);
        });
        if (this._NotificationActivity) {
          this._CurrentpageRecords = this._NotificationActivity.length;
        }
      });
  }

  openInfo(pcode) {
    document.getElementById("mysideInfobar").classList.add("kt-quick-panel--on");
    this.router.navigate(["Notifications/projectinfo/", pcode,"6"]);
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

  }

  moreDetails(pcode) {
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${pcode}`;
    var myWindow = window.open(myurl,pcode);
    myWindow.focus();
  }

  closeInfo() {
    document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
  }

}
