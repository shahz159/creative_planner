import { Component, OnInit } from '@angular/core';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';

@Component({
  selector: 'app-stream-dashboard',
  templateUrl: './stream-dashboard.component.html',
  styleUrls: ['./stream-dashboard.component.css']
})
export class StreamDashboardComponent implements OnInit {
  Emp_No: string;
  DelayCount: any = sessionStorage.getItem('DelayCount');
  DelayActionCount: any = sessionStorage.getItem('DelayActionCount');
  AssignActionCount: any = sessionStorage.getItem('AssignActionCount');
  CompletedCount: any = sessionStorage.getItem('CompletedCount');
  TotalExpiryInMonth: any = sessionStorage.getItem('TotalExpiryInMonth');
  EmployeeVacationInDays: any = sessionStorage.getItem('EmployeeVacationInDays');
  TotalDARSubmitted: any = sessionStorage.getItem('TotalDARSubmitted');
  TodaysDARAchievement: any = sessionStorage.getItem('TodaysDARAchievement');
  TotalDARRejected: any = sessionStorage.getItem('TotalDARRejected');
  YesterdaysDAR_Status: any = sessionStorage.getItem('YesterdaysDAR_Status');
  RejectedCount: any = sessionStorage.getItem('RejectedCount');
  AssignedProjects: any = sessionStorage.getItem('AssignedProjects');
  ProjectsNotStarted: any = sessionStorage.getItem('ProjectsNotStarted');
  ProjectsNotWorking: any = sessionStorage.getItem('ProjectsNotWorking');
  NotificationCount: any = sessionStorage.getItem('NotificationCount');



  constructor(public service: ProjectTypeService) { }

  ngOnInit(): void {
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.UserfullName = localStorage.getItem("UserfullName")
    this.todayDate = new Date()
  }




  view_graph_div(){
    document.getElementById("graph-div").style.display = "block";
  }
  close_graph_div(){
    document.getElementById("graph-div").style.display = "none";
  }

  page_Name: string = "ViewProjects";
  Current_user_ID: any;
  UserfullName: any
  todayDate:any

  GetDashboardSummary() {
    this.Emp_No = localStorage.getItem('EmpNo');
    this.service._GetDashboardSummaryCount(this.Emp_No)
      .subscribe((data) => {

        this.DelayCount = data[0]['DelayCount'];
        sessionStorage.setItem('DelayCount', this.DelayCount);

        this.DelayActionCount = data[0]['DelayActionCount'];
        sessionStorage.setItem('DelayActionCount', this.DelayActionCount);

        this.AssignActionCount = data[0]['AssignActionCount'];
        sessionStorage.setItem('AssignActionCount', this.AssignActionCount);

        this.CompletedCount = data[0]['CompletedCount'];
        sessionStorage.setItem('CompletedCount', this.CompletedCount);

        this.TotalExpiryInMonth = data[0]['ExpiryOneMonth'];
        sessionStorage.setItem('TotalExpiryInMonth', this.TotalExpiryInMonth);

        this.EmployeeVacationInDays = data[0]['EmployeeVacationInDays'];
        sessionStorage.setItem('EmployeeVacationInDays', this.EmployeeVacationInDays);

        this.TotalDARSubmitted = data[0]['TotalDARSubmitted'];
        sessionStorage.setItem('TotalDARSubmitted', this.TotalDARSubmitted);

        this.TodaysDARAchievement = data[0]['TodaysDARAchievement'];
        sessionStorage.setItem('TodaysDARAchievement', this.TodaysDARAchievement);

        this.TotalDARRejected = data[0]['TotalDARRejected'];
        sessionStorage.setItem('TotalDARRejected', this.TotalDARRejected);

        this.YesterdaysDAR_Status = data[0]['YesterdaysDAR_Status'];
        sessionStorage.setItem('YesterdaysDAR_Status', this.YesterdaysDAR_Status);

        this.RejectedCount = data[0]['RejectedCount'];
        sessionStorage.setItem('RejectedCount', this.RejectedCount);

        this.AssignedProjects = data[0]['AssignedProjects'];
        sessionStorage.setItem('AssignedProjects', this.AssignedProjects);

        this.ProjectsNotStarted = data[0]['ProjectsNotStarted'];
        sessionStorage.setItem('ProjectsNotStarted', this.ProjectsNotStarted);

        this.ProjectsNotWorking = data[0]['ProjectsNotWorking'];
        sessionStorage.setItem('ProjectsNotWorking', this.ProjectsNotWorking);

        this.NotificationCount = data[0]['NotificationCount'];

      });
  }





  Delay_Click() {
    let Mode: string = "DelayProjects";
    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    // console.log(myurl)
    var myWindow = window.open(myurl);
    myWindow.focus();

  }

  AssignedActions_Click() {
    let Mode: string = "AssignedActions"
    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl)
    myWindow.focus()
  }

  notification(){
    let name :string = "Notifications"
    let url = document.baseURI + name
    let myurl = `${url} `
    var myWindow = window.open(myurl)
    myWindow.focus()

  }
  Not_Started() {

    let Mode: string = "NotStarted";
    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl);
    myWindow.focus();

  }

  Not_Working() {

    let Mode: string = "NotWorking";
    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl);
    myWindow.focus();

  }

  ExpiryInOneMonth_Click() {

    let Mode: string = "ExOneMonth";
    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl);
    myWindow.focus();

  }

  Rejected_Click() {

    let Mode: string = "Rejected";
    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl);
    myWindow.focus();

  }






}
